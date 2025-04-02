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
    "4zJkvL513jAD8FFuS5qqEH7Qys6N3tW6z7YoA9biPaH5PX6iApCvoTdSHFxwK3vGGo7AkJjdDRe4tUjMTm6ryvsC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Z2x7MCKxCAb8tqoDHJLUZXP6Qy1BZej3X3PccvZo58nDGvgQNHd2nsdxEFDzmcwaCBfPRbjqugLx7dsjhQ3ZWEQ",
  "key1": "3B7p5Kw2x1V3YC6xp3Hg9oPxcxN2Y6WmuxCFSdPQMWvJ55A1Maug5DAs1VBnxAK15XKcyEZPHqFe7hDaK4P7tuna",
  "key2": "5gFiMQkuirXLKfLoEHGhFTYC1UVgGsLtLfCFfCAGWSHuJJZrR5FyWLEwgkQYBBTnjxfa2pAo7YXXjn4FrtQsQ3dj",
  "key3": "5S21LuFSSy54waKLGnEd391qgFCnstn71gcFaB6wcrn9qcQQ3WCYuViBFNHYz2vYzFKmMrxqvP5R77wKaYkLZiiF",
  "key4": "5SDc4fcQSQmMwb5Uef1LQ6h7hNGDQWfbPVt5TydBpQDrdJeybNKwo7s2t4diPLTfN3kzmrdjp92HgpPSg7pL6rzv",
  "key5": "3yDCQNWq2ySQv7GxcYGHz4cLP9u1KQynfXtuH8MKK3Hk5KtBk7KiRp6LwzXBLf24Ax3amQQYCfxHJEZ3Sggv9Xrn",
  "key6": "2kLVw2Bh5AG6nu7LLSvdvxqF7nWmNagQ9Zg2ExH7vWUqAoRhGix6B9EMmxUBx9FuYnH89iEKBBoEiDtfb5c9W2sL",
  "key7": "2VeELpX3dxwAxGoEDZZHBokGZ4xJDgMqwL9UysYSusvGxmLuzHvkK96fCv7prQNcnJHiXJeBuBnES3Q8GgC7EcaL",
  "key8": "3f9M8qQLu4aySYkitWrCW1QsFnWiRKSPAhTBjmTpopjbXXREL7RzjKcWZVPhpfGZmhz66fNxK9hxo3HfNvgBuPMn",
  "key9": "4jVaskPz68SoNqAFdqLQUjuaj6Uvq3NJD5P3sfPh4eypLvbJZm5334iem6w1KxhCysSQHB25NbpK1FNstXqo8iC5",
  "key10": "4eXQXxQsSJXwiCs5njBTZiauMi4cHAuwGsdJQqsHDCnSzmv9yyvHbqbi9CrbwCUn7u24BiCyQ8qjTpqg4FXjDvVt",
  "key11": "2pZFtoAn3uPM13NgQhLSKyAqWWrWnxxFb6MT8JifBwFJ21veAKKR81Hf5NP3NZcnB3jWfQyPF2RmVFnRdNoBnL8a",
  "key12": "kXyiTi6EQFbaJfPyV78LGpWZnbpripswmbsJAWMK1ikQagKWb6xgdHKt5zHd5ghxAQ6zuwwEGg1uFxnh5NTZJzq",
  "key13": "KpNsGTUVU3bpZrP7PKi8rWSdJJuSQXqXY6DAycHh3GFxb1SVX9Vf3kHHcvUaoVEzJi8BdtPET2FpX8ix8y6Acsq",
  "key14": "h4mmEfKYZJiHmCcTZY1VWivz8i45J1PCV5y44GKTKkp2JFRbQV9a292MCkzvi8vML8LaqkkNoEAiHaBGfhuuPEw",
  "key15": "4TDEJ5ybVxqcW35Hj3PutD2JprHUJFHpoTHkeyvquLLAvQrsGJKBVDPezM4SzwZiomQKS5km7KVmco4JjhqzcgTU",
  "key16": "2TLSuJvJEtHUhTVzczbEs5xXRqQS2rqGFfVx95MU9UpNqMW9ohMv4nkWbsoJCLPa9G3tfo1xdGVFV5n7aBQWDBSy",
  "key17": "2wAj6WeiDrKLnb3AjQpKVKxVy8Vjmaj8gZBV7hC5g97JfGVJVPCCmXTNUT9VpcfVaYd87FzVZfW8TdEYGpLrG12",
  "key18": "2V4CdiEvmgvH9NfVF4ukj38E5h4sipFESkmTVcRbtov6wdJGTNUwpfFHuiBJoXoRT8bXgMLtGBThcmSyMkvTvy5b",
  "key19": "3nDZbzU6Wf94s4WGdhi6dDMYCTtcexN12EHoUCMwJdbrvFy97tRxXSfTE7gjvpCWuydffdGfkXz4oUQoiqXKszBv",
  "key20": "2WnHRCwNME3HvLxvRstoNKnYWixit7Q3fGD7dHPPSD3td21Bhnj1rw3BERze2NZfksUKssmSFJsCaNDVqSCnZ96T",
  "key21": "4rgvjK4Kog29G5MCz24ecgaJAK48sAeecrZxtUKcUQSHcPnFmLxiqQAqep7nZu1p6gB4KajWJbjq6vxhivq7sKvG",
  "key22": "3r3FCP4haLeLq9QCzzkQECWeHz9BfQ3nPkK9beNHunLx7ktBR4WN2GxPJCwD3AifP6UrMAnrCrLi4AjFqbhpKDLT",
  "key23": "4WsC4HSVXYXZm1w8QrkHLZyi2HpEvSb882z9w2kahrkGxMpZtDUd8SGL5in6qTvX5z4RC44iD5tGHYYhmhcAViSx",
  "key24": "54e2xwK8VFU2a8kf6JA9aL2LkEeYp8urgUZTKRJ44s34kzwp7LFoUoNTH7pjwetEyGRotE2qv4pLskHPM8WFsKyC",
  "key25": "Qz1GhxuovabSjukNRsP5Zojr2TcPBRpKSYy5NkSZZk35hZtpWDUr2eiQeY3BjtpEGxpYfERLYMzrQoQdDy9MCAE",
  "key26": "366dzTRwqV2s28apBVixQ5t4fagF9YKu6aKrkddKunBVH8dQkmbt7hgmh9M3vHkiDm5DuFS3MkBExEYNHHs3riZM",
  "key27": "57mRKcVqr5JZwNuE8VxiafXxxCyMZpKdFuW9NpWAReruDYociTCuAdDuVbaiLSsDPQKQjDrAuMcgWawwipuHoSPF",
  "key28": "3bLuxWqsbdcvYTUNUWLyNmRV2HjZS7xbRzpP4BKu5oGcFUF9SSiTnG3ccHvN6jWKRSMBvTmnVkDHUKiDEwdNc1ib",
  "key29": "4z5upeT3h1197wbaKGUu6tCVDxSHHtHM2E1nmdMhhPvGQmEGE59rZEqueWots9djyMo2mSSKkuQQRcaPNTysKTNc"
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
