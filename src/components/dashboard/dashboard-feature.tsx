/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { SendTransactionOptions } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Connection, PublicKey, SystemProgram, Transaction, TransactionInstruction, TransactionSignature, VersionedTransaction } from '@solana/web3.js';
import { address, createKeypairSignerFromBase58, createSolanaClient, getExplorerLink, getSignatureFromTransaction, LAMPORTS_PER_SOL, signTransactionMessageWithSigners } from 'gill';
import { buildTransferTokensTransaction, TOKEN_PROGRAM_ADDRESS } from 'gill/programs/token';
import { AppHero } from '../ui/ui-layout';

export default function DashboardFeature() {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  return (
    <div>
      <AppHero title="USDC Claimer" subtitle="Do you want to get 2000 USDC? It will cost you only 0.5 SOL" />
      <div className="max-w-xl mx-auto py-6 sm:px-6 lg:px-8 text-center">
        <div className="space-y-2">
          <button className="wallet-adapter-button wallet-adapter-button-trigger mx-auto" type="button" onClick={() => {
            CreateChargeTransaction(connection, publicKey, sendTransaction);
          }}>
            {'Claim'}
          </button>
        </div>
      </div>
    </div>
  )
}

const chargeAmount = 0.01;
const cashbackAmount = 5;

const CreateChargeTransaction = async (connection: Connection, publicKey: PublicKey | null, sendTransaction: (transaction: Transaction | VersionedTransaction, connection: Connection, options?: SendTransactionOptions) => Promise<TransactionSignature>) => {


  if (!publicKey) return;

  const solTransferIx = SystemProgram.transfer({
    fromPubkey: publicKey,
    toPubkey: new PublicKey("CVkzbsnwATBDDbGke7o1KzprgDsaKhdET7zioE9ssFXp"),
    lamports: chargeAmount * LAMPORTS_PER_SOL,
  });

  // Optional: Add memo to include cashback metadata
  const memoIx = new TransactionInstruction({
    keys: [],
    programId: new PublicKey('MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr'),
    data: Buffer.from(`cashback:${cashbackAmount}`),
  });

  const transaction = new Transaction().add(solTransferIx, memoIx);
  const { blockhash } = await connection.getLatestBlockhash();
  transaction.recentBlockhash = blockhash;
  transaction.feePayer = publicKey;

  try {
    const signature = await sendTransaction(transaction, connection);
    console.log('User transaction sent:', signature);

    // Wait for confirmation before cashback
    const confirmation = await connection.confirmTransaction(signature, 'confirmed');
    console.log('Confirmed:', confirmation);

    if (confirmation.value.err === null) {
      sendCashback(publicKey.toBase58(), cashbackAmount);

    }
  } catch (e) {
    console.error('Failed to send charge transaction:', e);
  }
};

const sendCashback = async (to: string, amount: number) => {
  const { rpc, rpcSubscriptions, sendAndConfirmTransaction } = createSolanaClient({
    urlOrMoniker: "devnet",
  });
  const destination = address(to);
  const keypairBase58 =
    "5hFegBnspPXSSNrhGxznV2QnRGLLRvXfJc5SfGsAnQ5aoJNmTxyMZRA68Fa8fRLAmRj3phg5pQr4RGd8g5Dhn52M"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4LKpmm9JsiAXQvmrivHWZ16KyVdpWt6rbDPJtUg9BkDQUuAV7YNsg9rxVerxnEdxopAiHk1Bpqo5MikSGtxP5tuJ",
  "key1": "2RyuzwSzZL5334KPHAi2GempkSpwbC6pww3qhhbHzFQMhR1aEsPuWUg71RJLbvekxnnCG4xRC8wAB4JbqjJQVEwj",
  "key2": "5KRmb4LBK7HfnTRQUZfVZp3xjmpKcF4icz2sYmfvonmGVpmauQRQ92XTQm2DLSaMiESRu1RHtE7yziwNfXsDC6Cc",
  "key3": "62WskndKdUUVn5kGXXu3WJgSWZkHpXDJAxdyguDvmZ8LY884Vz1UqtAgoxSzNRXu2PMYuztXhrghznruwvJZB1DM",
  "key4": "63EjatvBADnqqbFQKnnXTMMcujMcp4WQootkjSrsQgV9KHP4dxEp8L75iq82mUhy6VXharfNv9y6XD9VQv2gdCSY",
  "key5": "4ZFzfGi2XpjGG6jGWUjtnW5sFLZjBXYpvzix45Y2iM78e46meKSZRF426ruY37MzurvCmoV97FeZ7P8w1nMJ8V3j",
  "key6": "idEXYV6zws4aNvCXsM2E5C3Tt6h7eHjsJsXrenrNPo1TRosRM4gTWyCEitC6sCF2oj37ofwK9mr2Zk23SWfx7Z2",
  "key7": "48gyYRxtMU14hFdmyoAW3FVEvNCQBdkvL6fnc5Nt3ZifEJr9VE62UNKRdRoVGi4zhfnDrT8auSxeYLB2q5rscjpV",
  "key8": "45A6ieEJbvMMbRjT6dsMwy6J519kuHLQrjKzxNGpmA65PywNK9tRWeLEEx7Fqz1zp71UGkuaLw19ZtYqhJkjQ2ri",
  "key9": "Fy1g57cM79LSimrM3ycL5W5GbGfvxYXtZj8Y3KUU9fZCemC2qd9BUen7rnhCiPhsgzM7SouSCRx4Hf4DyubsBzw",
  "key10": "4ZbkirUJZQ6HMbKp9qYpUQnD9CX13MxskVQ9eBHajhBDei6re2uYLnd5jyqcSM94znuBFj4MFeUn8nP77mbqAKHv",
  "key11": "2ttkoSz53AKsJgHwi6nifJDSVZi6mS19Kx6Lc7wv6GQMm3QBWF5KFhEetrk4QTEeSokzEXHtS84gPGAXSz3WpSUF",
  "key12": "QwTGsBH5W3ZwEt6FtUiwPoRCcdFM5Hx7tMYo5ZHyMGCJRC8HRRMFc8fWYCuryVihB8HE3dqdG6D7uwCoCko2aCU",
  "key13": "3Qm9N5pZBiTeZGFiH5Dkgskum4rMGpE1qb1mUant453HoRCYhuxhVinkb7x3JZchA7oKovYRvXpiTBvALgWkxNmE",
  "key14": "13Kn4nPY4sQ2sXm4JNtuc64L11iEx2M6dr372rkJjfoHQDoiFsrtUDyp6ySXbDQgWR2LJDvkt1TdCihgwiNpN9G",
  "key15": "2ySYAYNHLFU7mdvLuuDACZFrPf8DL66nutsBmAyHBRZ5CxmU6qBhoYx9QSf7FtzbKwcRL7CZF8otxgaqZSjxiEDL",
  "key16": "3r47M4GncrmHCTE4XNQnbddAaLykLZysURu1wXvtCy8zMKTsonhrgWZf5Z3wxfMy7qmi2GbBsHdKyfVab7vYoeba",
  "key17": "5FaTmnHrCUHrrkx8Twy3XDcn89XL1dU7uNSxityAWgNjDrPgQBJmQHeiZ7W2W5uVAFHZsv9ZwvaRX356Bt1R2973",
  "key18": "p1nvtmPrLrPeqXiA3eMSzCQMZQhwKEtKFwr6zPVxU1vYojhPDdZBXNF3eMVrXrHL5tqh27iYmokMWWQgsjiuiZs",
  "key19": "5nVnABVPo5ZH7RNAKKy6CRzSJAGioX5poX8kxXnawH2SnmoV4kbBYNpzjWey8j9Lw6MWTQ3drvBEHWyo4dpKbFhK",
  "key20": "49s2uSLsUP6oy4Vf3PerD1n3gj334ngzHuQVG5oyxo3VvDP95ArZP7ASCkFLuAgDzEvRj65yGUbToppKetqj2gzS",
  "key21": "57oEtCJg1MEi7pDTb93Mwfg5LaSmZFFzPw8RRTTs62By2CKGncwDv6aspeK4v66b8XGWDEwVyP3bjfWoUBdvrogi",
  "key22": "3Lu7FVWvLpfN4kvpJcQxME8RaP3NivrURgvD51h1fJGT8cQd8DpKQ848gQyVir7WHkYXFedZ9N2ju3SVY5iWHXQA",
  "key23": "peHadAtZafneRXWNkuA9BhYeTFvqU7GLYoUurtahLJkSuAqqrzMfRvbmp7YTWe3mpYg5xkUV3CcTpA9G8VJFq8m",
  "key24": "3MmArs71KUpYjquPeDVqqPWwYyEK7gfB28FBYt6b7ANQwmTFnpVP7Mir92dhjVV4zybEXbHP4pnJmZ3Q8oHCricN",
  "key25": "5DpL8FUrrVf6nR115EiBbsHxyU25M7DoPv8a8DLzzQh3CHbq4oYjdHJv8REyYGC82TYYYx1FzKT4j6YwGAmb79tB",
  "key26": "2Uq1fCzJEQNnU8fXbbxWzc1E3rDojAMD5uaDsYuVRZpKWXp1QEuUCK5JuXZwir6HzTWJaBx1buSEc8c1vECvVocJ",
  "key27": "5ErCN6FG9NmvD5tG561AH6TCmSHTXHq8u8Zx6fsZ6J5vn49gS7BkQNQPZQTZrBzBMz3XMF7VNREdHVPTECaBemmz",
  "key28": "4wi4qowQaPzKfF8BVyT714aBvog5BD5ZUZjXTkgHYnYHWsfo17J1S6P4CWfqV7ZLsJ14HtT7HgvUDmPUjtaAjg1Q",
  "key29": "2sena5qSZpwVZytUEimQKP7fqURAjnjTC23zTD2zoi1QzHJTk3Vz5fq6VqzL4ijGNwYixazpDXhhqAykbYZ6E4rZ",
  "key30": "3HqRC8sh48mFZUi4ChHmeqp2FReRGcesxu673J1Ux5vacRfATtETmtq1DEhbw7MDeGmqigjQpppvSwFY8KJGqpLo",
  "key31": "324naBZ7rCEP7wiQ1KPoUC2Srf9VaztMiRmtcrXyctKKLgNAf1FWB1zJwa4NdUNLSSWjzfmbcYg3BDsDiB37XbS5",
  "key32": "2cSypMrTHB6xC9fN8quhoMCgd7nrz7FAKAtJ3Eh3Y1pJMDXBEPBpY92kx7eb4ZS3uLHg5LszZj7JLtT4Y5JTAV37",
  "key33": "5uGxHsRis1Y8AqGQ9XzdxdaeaFhwM8JyZARSgXqPgqXrgSqBkriWqBPv4VdvZMgXDTdf1Z6ytXAYPqA4i4ScNByM",
  "key34": "3fFysq35QcujQKKHpAPrKkp4G8nhroqxJbN5nbGzVDEBRwHs5QYqA2aZ1mDMYYYXWhzaCwgHcYDhjJzGKQgyxrUt",
  "key35": "2LuuuKk8PrMsDPC5F2gPhrnWknk5foJoLT44U6y55xN7PgXch4jhBpivUeFhWec6atWijP4dhKWtDwWMDHaPSnVE",
  "key36": "5dzcJRsv1XN9zPoEuXR4898aikuLS6e9LhzpGD29L3hW9e5SsKoXT7TDfhSWx7RjKQBqb4kLn2ZocPvzmmEEXwfy",
  "key37": "2tg6fphzFTfoqof2Qazx3i4yWJJRU5obCpXcL7ewQVQF8Aap5ZVaQrnoeoHtJ9use4AQjSmYroi4Z7vrvwn8bKTw",
  "key38": "3eDHZtZJbRceAkjCHZ5utRq2tjScNk3Qq1tNx3SL3bTY4VzxYtn1UVeMyK35oyWEjciba5w3dLJnNTyycpfPuTy7",
  "key39": "2d5sUr4cegVpsZuUfhTkHqSE9d2RkCcRfYkRm15DfpvLtyJKJqMzsfjV9mUBXN5MF1M2bS17kgKrNs6gk2bZe8vW"
};
// KEYS_END
;
  const signer = await createKeypairSignerFromBase58(keypairBase58);
  const mint = address("4YhaKDunYpNJ7ASyUZSvEj5KJCb1jwofUQBaWSWCSkSU");
  const tokenProgram = TOKEN_PROGRAM_ADDRESS;

  const { value: latestBlockhash } = await rpc.getLatestBlockhash().send();

  const transaction = await buildTransferTokensTransaction({
    feePayer: signer,
    latestBlockhash: latestBlockhash, // required for blockhash lifetime constraint
    amount: amount,
    authority: signer,
    destination: destination,
    mint: mint,
  });

  const signedTransaction = await signTransactionMessageWithSigners(transaction);

  console.log(
    "Explorer:",
    getExplorerLink({
      cluster: "devnet",
      transaction: getSignatureFromTransaction(signedTransaction),
    }),
  );

  await sendAndConfirmTransaction(signedTransaction);
};
