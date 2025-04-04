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
    "5HLSopVbFyuCQDXJz6jfFbcAUm2KKA3Srntdx4APSECvh7qSohU9VFyfeFAyLChH9299hxnmnLnhN3n1kDPv6rNo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wHMXpReRyep68neiSb4MbRAPP9zYcQA9g2deYgtFTGuF6oM7a8K8tErVCQiVuQhk11J2uwX5JfTcqCt69V2dPAm",
  "key1": "jh8Tg1uZ8Eko9M8UKQnxRf8atT7XGstdJG5DGbQzbdBCfFEzmDcZdxbPbHBePPioVQkHM8cYnS6vb7rUpLZ2RaD",
  "key2": "2BGFNixUtcYDyEWekU5ABdbNHk84sko7Us9UztdmaQ3AaULaiF6zJrkKfdahBEHPpNhuVdfoPbWeYg1sH2faZGs8",
  "key3": "4Y9yXwi2Q1SXKPhqtmraGx1nM1YQVJP7d6PZFKDyirCsPMK964QdgJM1S5GKKwk8T52DoDZqDjCw5gyJQx3zKNiN",
  "key4": "35TbbPccvy9cgtDt3Z11NrqeVjmQ4qmMBFzrMnLqRF6BzvY1HyavXegyRdjXuRPKquETT6DfEnnvo5eSS35aVKtx",
  "key5": "nhLP1URKHmuUfTWYbmRb1qdXZa7Es3byZ1YbVEswGFcZmuDNhZZBJ7EYCnVLx8gsjQCj5cSN2rDbBjZcMERq7Rg",
  "key6": "X5mn7hUuj5niAaGtxeSc37YGEc5HDpL4x8ubryozH1Z8e22zD4hpYNQmZpRhSfejYmnfC8pQKPkavdRyPRLcZVB",
  "key7": "3cfMtuifpuzctv4xGrFgMksgnPdaQT6EvBvC8UNiyzzyG9fg9h9vaxevWVj7PaXhoyEjJwnSW35UShKMtgv7bmRz",
  "key8": "37ppNz3NxAi7HarF2RTtt9fcLbwxYjrQV2JVC24TLhHrdphknxk7JUwE3txTBDvW4DJLdqiXufCQbtQb85UCsTCL",
  "key9": "2fc273HvDS8W58dppFBDJ4BZV3exUA2nkGyHaPCvitoR5ykHfbRHxgoTPkxgRJZtMMeU7qj2cMLzhx2QxddjBh9J",
  "key10": "3S3ShiFA3CEP8fSifhA2XFMwDfafkSWM9FUnMB83Kf6Ump1jPz5ZCCyez686SFPbb9eBfggMccSPqhzJKpxsL3G5",
  "key11": "5JBXRzheS1Jcd3JYiGXJEXrUF5axbMLFgzuWSXCyTSjfUyvfZFUX7P6kjY3K94FdAYFRZfgUnrFdLmtediDR3Mkv",
  "key12": "4EjvrMCXXYNjWk2d7LrkbSTyQNkEFWzSBQBR7wz29BBfks3TBJYEkXrk5AF52G8HSgVpJrJXpKtrB7uGW4VBY1wp",
  "key13": "3doJXJKErmeDSiXJKKi8UkKQRNoCaunnQK8GxczgQtL4bwE7WfUEYxp67jxXCec95Pio74rZdkJq34hAzo2qbe9s",
  "key14": "5n6aCTZeJRhZxF7pncL3NUMCyfaXZXqBkYJYJYR6TjhdyttyKzZd3QXuUwkrCnwzU2NKZowU6CpcGvc6eWfd6Lpd",
  "key15": "4otWTE4wgYPeGwPrGFV6ANW3z4FEPKPMLRDT67o4bX8sSH6HhooP3r4nf8obdnYmBPf9tAo3mjwfEeh4EATjs7i5",
  "key16": "4Jsb6bUKVBNPNgFQofhUjCaTb12DvLwGy71y8XJMtj5ChMp6hvFUe3YQHGxMofoiEjUfBnPz4QQ6XKCCHeD1wtRV",
  "key17": "5wLt8RBmPmY6YeAkqAxQjtxSmC9GGXUCM3CNxzx12BKCryaYdgmhWA6E1DzcA4RniK7tmTkccFAeCVsd2So5W3HE",
  "key18": "3AbF1izYMgw2X8dbY4xgm4QdXwDEroDxw8Tj1491Eyi6u3dbEUb3H8GEnf6D2HiA5GB518JoQXC19DFTR58FrxJp",
  "key19": "2y9cEaFzguBBjvo2ZHjZ1Hqvv9YfUK6Ub1vyh7hM6KvdrnPZaQnLb8UskZwEJxf2TR6LUS8imMbjHdHE7xKKLhVG",
  "key20": "vy54n8D4pWZNNMELK4a4yStJFVVBWJ4JomHswv2FDrmXWARUBJfSDV3j8Q57fuyPa1cWz14MtMRGbF6BXKGChtY",
  "key21": "5pfJSjCkogn8svUnpb49iTiJb9ZHVKz2tmp3tPEM9G41ehQ8dquXAvtpmzdNyLueQ6Xst6w99nk5kjd7bzgMcNiz",
  "key22": "26fzQWc9TJ8N2AUw2Su9mCjkFt7SaX4gfbZWTY98oVigejShHAg3VoRecJ9n5edRo6TUsmxPiAPuDnmGrn6wQDJB",
  "key23": "2TDu8WMvbjzW5iLGW75qmFMJjp7fyzpfemb9gGUcFqxmLTZKAqoEfpnXYHQzhwH7u9aGPNw4RgMa2Ljzeenn2At1",
  "key24": "uo6SSPEHGtKbM7ShdXNSYuLMzYXUXMcbPi7BGurL9spd5BtEwDd2h1cufsukhF9KraCngr54Ykr9yCBqgEQVaaQ",
  "key25": "32Mf2reE65csMDoynn5RZXAmvobuuF7hPMWrHKudQ2g93XffS8fYaxCjHQdRZuRsujZbeZT7X5BhzqTYrHZuJLyJ",
  "key26": "24RHoMjRyS2vSNuRQRfGogNF3qDcKm5WYrZHTZwxf3WQp39DERAcXx8azfVm2RiRDanRrpbavGT9zoYNPKvwqXqX",
  "key27": "3Y8DUMqTYr1Qx1oAcsY8sCMejCd3FCRLyoLaUC8Gb5wgfwEh5kmkjXAvcB1pn8hPLLe3Qrxg3UhPTbtT1qHGkcrw",
  "key28": "2fsYuKLfxygD5Eqa2fSPF5bnyyAPBjbnm6BwbXSqGyZMvM7YWHCQasDeJLaRkhxTGUNavDZiQQMZsQPDtZt2U6zr",
  "key29": "26fuWPqZf1n7HdH5jWLB8CE5KxJJGGs3oaV4ajNP2bV5CQoQDW4twxZ3ocFThuup27XEgWRZj4UfYZFmRgPTfXiM",
  "key30": "Qy3ziSm5iNzEgt5VzmnA2egPHwMYgpPdX31riaMYYWzhXLdvzzoGQwFKacLqgUHFmpKUMenrixdNToPSvWozPwk",
  "key31": "4XonVfn8yZn6hRHsTHfzexbLyh2VD6vJMy9cw6UTnqTxwEeAXFtTmS9qZq7d5r42QqDcjaeEQ93o41UFGjFzTiRD",
  "key32": "3mw2hB6dGEq78ccziTQNqCcoC4tK7RfbeMBs1Z5QDJ2ErrKcnvKDrMBXLUvusrLKoUvX5oM5wGHJfxqdhrxc4hG9",
  "key33": "BKnBmer4X7dtSczixL8HCpgGaNZ4ovDhrrYeXVKGS7xQY9UKHZQNXVkHe6UECMPKgEPyhvLm7DRvxy9FC19hcHL",
  "key34": "58yU1DBpqMwRPWtgA5UhG7u9n9qYo5ode6kuuiTbBpQJ7yw3X6sKpsa47AFumMPsMHH1ivnsA1q97fLeWekzHdc4",
  "key35": "2UnzKWDdgoqXkeu8Sb6tSs6M9ZQRQoLec4hSLjShzxSYoNsV4QW2x2n6LYTFZ9ox5EXQ76Rn8ouh6eANE7sZkVvK",
  "key36": "ygeDRFcdVMvpg7jH2VNFhK3ZXCQxuZbQRC7fYESGCwAaX68X9zm3A7KQ5bjyoyCpH1xdWkLkzDEuRa7t6dEpQfG",
  "key37": "5pBNTrfETFneveAMGkQskk68zhCHghzXuC7WsMkn9o6NrpnzjwEuM5mVGJtLabtqzWDoSyDj9CTnBF7NzneuCX33",
  "key38": "3QuTR8nR5zLmEduFk6sSaVErFpEFh1VpUpqG49vFtXbowWfKFvj3f9yPV7n7CBwygXf7qDC6iHqVvgbdA31Y2uMu",
  "key39": "rGdsFR8eQ4C1ZR3zS7tEeRLJqGi38SNveV6enP7DNwDSgsqdUhfkR4JQSB6VwQSMASqZMTKLSP5kgk43UBo8MWd",
  "key40": "3oJVtLQB2iAusvMGTTwK8X4JWQWP9H5BsaEy12NKuq2pjkCsKxFR3b3RSqjDMT8uzRdrj28X4B6z9xYeq8rev1o",
  "key41": "4NVdGhKnoWJSpjCftZjw89k6EFpjGePFvrWidPnSgUnfHHX7KksSbjrPxz2PMoHCR75dW5V5g7M1uwkkjyaKS3kH",
  "key42": "5PaXoof2GcGcKi8pD4Uf2QTfQPTV1syC1TUjWGzJtHzvwFhtnyZnhsn64EH2y2b1fkvfqBxHVozxx73LbTNMEkfZ",
  "key43": "2Ug1TBvsrnXVx7o3kyBpiKfCzhtF9UfGuZKQn3DU23AfyasMwG5D2PtKEVRSqRE9rRM1xML5NyAF3EhhNdSsXck1"
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
