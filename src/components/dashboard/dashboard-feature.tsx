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
    "2GuxSpwvLBM51HfveUrqBZws9oT6D4sCfYv5WQ8FgNkZgQSeA5Mw53j5bptBx3j7vpYf426SpcXdGMU4rtN76Bmk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4RcbSYcP5ocRMsTWPP12fYHbmnp6pk3K9R2mQQY9XCYw99JkTnhrjXhkHjQGawDhg65Sm9sEadoQzaLyuAR5E9jE",
  "key1": "3rnZpjQR7y8fNBz7b5ZYcCoZdhQj4TDk5tjdGxrB8RAwRoHAc4BQSGh6aU3xpSh8EjjUTynMKhWCa8wie176HH9J",
  "key2": "QiCQFm6A9jX49Ce6WCzLte5HTLSRy32aZK4NmojqbsZRDtdGe2Mg56xFtFLBguxLLmRSJbxSezhqBNkzhWgngPP",
  "key3": "4KpTt5khXWcwCk49jaoDgSN7jvDxaHqA4cSo8Qn5rSqEuPgmKqF48Jr2FdHbuC8ct3eSHTdAYZrh54C7KusRjsGx",
  "key4": "2zWcpxMN7Xx2avpMioKXMdT8Nypq7nB6xvxcUm2smTwbBNyxbBgiSY95rvYdFBrZRS4eEJ1ecehHGcPY3KPU7m3a",
  "key5": "3FzdEPkCVRa5zLoCqLoBjdqNm5eWQ63qDgBPPJT3FLms6QxMcNX7YgW5YBgJMPq7qzMBNUpgaM52d1tAgR6EQSYU",
  "key6": "qi16cmRo69qG9GurmALjwsTLu2GmAyKxT818iH2tib9XPbkGQyK1dBquUJSP44vYapWGAFVb4ujMtSXoYCEGFNh",
  "key7": "3Vd4AGpD6zWGsCJGRBm1FAuL14qocE9XxRf9Kt3p6NzTcjdSTh4HyrS97WmoUKU9jjxQMxftBWsfYALHjWbM3TPF",
  "key8": "3hGSMFZk8EgUMqpAyWvFNV6G54ZqUfDVE3ha2CPLfWXF3cKtQWHTXR2hPhh7AfsGuJeeSyPvdxidCCFg2xjRhQ6H",
  "key9": "2fvLRsQAaGvuRJhCbxbMcCjH6dAWocBM4X5ETn64Qx9mYKKY498Br4vsjoAdV77Lc94XgYjG9wfhPb2aa47fNcZP",
  "key10": "434e9rJtC7T8D1a5zSoGaeEuNqVtpfGXMphhas9BndP4D3kzbHm8szdNiAjdxWFWspxBqzuQMuFWM9ktwN8A7uby",
  "key11": "2sPvFDt4WV5F8jL5pnSYRMGQfodCJN9C25TFbxodyFkvZhhPaLvrmtYu3yMMVabniyuHZhq3tCi8RxfQ95fkL1ZA",
  "key12": "3cS5XkgoAWQMda5rRMwQNSRFGGzyyjmKy7XXjJnVNNWVQMwehSqPpZ1NjWLsQzv3ijh5zt5QgTztwjqg8Vg25bw4",
  "key13": "5h7qwFteQDgkxb7c6iPfkYHuLXG6SFjoRK1K46T5CeNZpejJoC8e8fPtQGmCcxrJZgv6ucgCMkbMZ6cMZAuQi6ES",
  "key14": "xzLF73M17yXdbEKXDnHrn16M9nVKznnSERkNcuvQ3hiXX5HbvMircUN7ny6iY1EK4gDtjifNF8D3qQuMsGWqNpq",
  "key15": "Bt3MtmdZgYQaDrauBke2TVB5TFTfG9QsUENzTnpdmdnWJnzvMD4oiqWU81tMWtVa5b5YQYYBBXet3RbekuVko3E",
  "key16": "5L25t4mS9EG75an8WyecWJkyA2shoVTs28vDq5BCyqseM3XvaLwTY5z7uVruJu1P5buLbtPTm8xuDVWdeu1tBd8Z",
  "key17": "4CjurruFnZ9fBqyE4TxdXEAPi31y2o2ZDAYKBcXvfspBtC5yx1MbrraHzX52o9VbQssdTuM9zVATgNNWnZMmwTit",
  "key18": "4XbMxSMyVUYxQVtHDgCQeWGAiC6XsPi5XgqgjqHDNWYKKPQZMP3C2W2AtDaMjyhbtow963S1WSWTj98H33Ngxe3",
  "key19": "5jYpndHgd7UMKfGzrhzWfW1eauuedMLLVEBuZGThmLkHNL9bsfgDdYzjL56cYbtwUckQ9H9q9SFFSNzkAXJQdNkZ",
  "key20": "5H1DEbS4Fw9SDPc38XLCFxsU7KLG8dcov8qVqcRjK8PEpm9qb6FpEBbrXjh45adm4RCzSWXqQuAnp7rRh1ExTtmV",
  "key21": "4Fpxos312omoN2xjnD83mso7dHDLmqKZfyaAoXj8FJ19HqZQZ5muymbVxHM2D9wFAGBsK7GsThjxGs8eoRnsQARW",
  "key22": "4kMeR9UVdD9HfcFCSaWLWxQUweCxDLK3ZCcTgEQi4ipQaqAL17ZS7hB4o7ywU6v9ipnB2DzExtDGjrVkbCuadDyV",
  "key23": "53sEtByeGN3pHfhVtLtanm6ZoTETZtJXJcvn6zT573ZAtwKLBgVFXV4dNNXnmLQrNRHT94uowTbp1YjtRXuvTRR6",
  "key24": "4W1dwzDHuaFGNX83s6D7rqbhRThbmrXHJkcaKnVUEkKKLyLPNkcvFHGUHbEJS2CVzvZw9HKMZo3U5Rod6mkrUDEr",
  "key25": "4UyqJM9zZgo4eTWz3VtLHiJJS4zGMgThHj4msTwmUYYx6wk5fnhx4ARHmuQgELqHGUCTPgqGqCTqRSxjWapvivnc",
  "key26": "2aNPgHMubJDaZbmeyyxAqWZgU16gGEDPqDDFrLjzw5zbji47ZfL3dWYjmiuqdeS2JHPRqtezDjkgtC7UvEtsMvuD",
  "key27": "4h1GiKP7g7v5Azf4Q9B9dviPzG75fnsF9TdKomEAfud93yPZzQ4ctVzHA7eVWu9uTFNNgKxEq6XfPrMWrP4123Tx"
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
