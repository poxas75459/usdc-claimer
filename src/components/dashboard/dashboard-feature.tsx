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
    "3xt7o6QQB3h5sxi22xtbxrH5Upv1jengg895gqLHr1UNi6wAMvshNaEqEbsrFZwcomSwAusCypfMDGvGxm9vDmd5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5zVhwukzr11DZQ1ttSsD9eauHtZRkxMVnsP85KRHsziCwHETT41ETcT1buMRcUHtHrdszWbtpnFMSjFTQc6uyopT",
  "key1": "3ZBhgH4ngtcr4uucaJZDMctuzGGgPtiz1MyGCxZGRikPWtoWot5VeRBAWkbS9cMm3QjHMJnPivenonnxbEn3vdP5",
  "key2": "4rq7B9EL7YKMho6Ef5hje1Vo6XULXHoGWTnHuSad5peLJiiWwao1ibhm1b6ECm3ZyiQdXB85bVejL65LL1DNX8ij",
  "key3": "5QqCpqPDx469WzBnDocvMWDT627kFa3R7BYeTUVWVFYW2bEmzwRNWKc19ED5eYLw8sA2ULsfREyLeHvH88Vo5Cta",
  "key4": "4A48wxVUk1RkNc3CnM2F3eRi7re8XkfLE26kSnbajw35Ndvcyjc7GijV5mUCwQcTgFNDajeoYH32Mr7wUNVYF1yz",
  "key5": "3qwu6D2213aSzPWkpssNHo67LJ4RtDubG1tVdSxowfNwcRuujMUkZGzkR2jxV9NYMt8WnHNckUGppRPy28weuB5B",
  "key6": "4M6APYJswyv3ZWiJ4urzE3AmjcbbEK17wvxWm7WyVxyK3m6i5wbmN2xrFgcwFq63wDnAHWNdVif5MTpEbtu4pLKG",
  "key7": "KxbD26CCB1fbigNTLCFntdypTpTkZzMqPTv8625zbFBX5Lo3UJfoe5Sy3hQ13wdiD2bWdz7Das1x84Xki8XL1Pe",
  "key8": "FmD3bcNc9JeryhXPzYdXoTnjd1Z1FoGUy9m9r5qThpjFvuGz8NJ5Gt3xwkV51AfJWYKQPZPRB7FbSrcgJ21V4jJ",
  "key9": "4F5EJgWpoysZ5PmDpZMyRqEeZnXS7miq3CiRgF5fD66pk5nxxqYDejjHYoXq2z1qntUjndTuMBZyrT8zN4Eu5Hco",
  "key10": "2CjnkA2ZXp5mFrTNCvXTFMq2pTc6U9cDnMppCPViHH2dhYnep1V2VxMhtDwW2oFYQu2sG7SDiszZpGr2pqv9iWEL",
  "key11": "2QDL433sL4rNDs5wWJU8YBzkgp2symYMW6DHTVzXc9peSiwLrzUR7c4ZjUJk7viamLkLbCKibhqBq9FiAAv1rEV9",
  "key12": "35CpZNnhUZ7veYp9ovowvudWUQ8HnXeQYyiHYfAY5Uv4VC2vPd5xYsnqBXPqpP2LDo6h1cNL7vC8VYavJpfvy8Mh",
  "key13": "3auTbQCDnGoyEur7YHnKZzo6NcbfUsqjQAhMPKZxuZAXDkj1qn3bupfX1PRXQshRjsDDtmMH5eirjtkrchFSqYMH",
  "key14": "54eoM323SU491cRj1Xd2xGAYbUJAk4z7rxAwZJ2bNsB96YeRUz3kcaZUYHz1e43d7YxXh1o6msrSfXFdv95LX3G8",
  "key15": "3DorRmhkUwf5JhQkAidoAMjEzVwN4zvof9m2LeBhhPG8P5525hJMiXvg82sn3bRWRcB2uJyQZWFomes27ihNNVD",
  "key16": "2sZYhT1ABPXR6C3N8aTagpKbnrnhBxgEdwZbMaMxvgSWKWcTnBHPmgfefriw5oyugDbCaSPEBd7xpemVAZgPW3g6",
  "key17": "2suCa7RMvMkctqs3RjL4MsRsWkZYyjHhXNYruSbPPUd9j3RdB8TrUYnEa1PTxrkSMjAUXZoU1HrCz35r9k4wf6b1",
  "key18": "5iEBDsWJqXrVe9dnRjhKkVPW3116s8XkgJnvZHRjwicYKy2vSQbmyJUzN5wTWASoBX9DgfGNqgYLpX1ZbH78bUSg",
  "key19": "4DsA66s7veEsdXDArMGQcPxnZPPewLGwYGAHsTHTsQ3h7exWEh31TabMvJTLbC1hfqe9dhJPwEiJU7tpY7hh47RP",
  "key20": "hrvJvFGqqoCS9dptBtX5PLVrd9o3rHgP9QkKR3deYufAxjX7FqXcERzE3tYv9uTtv23E1DhWPRy5qtxFhq4YZuJ",
  "key21": "4NP7nw8saHYqCTuknAydqVFw9UVnrMZdd9Yooe8QPC5RFhhFb7ucRTUmq4DpWvoDGBPEvucd2XCHKLyuV8qhW7b1",
  "key22": "4D4KVzJuYTJdNGRb738MF4HPmXDMf2aXX91CFMXsVLqCnmeo9soFcjBCmMZKMzEWxLRPY1qwYKeJ2hYSJY445mfr",
  "key23": "5BSdLfGEhz1K6naQ3ysZHTCvZ2532dhmkBWgZTXyfsjpEbhXaMpzG5X1bugqKoLoKeD2HTcKgXjxC5QKNuqwgUfu",
  "key24": "51xyNitYN46oFhDGaZMdaAcgTPYoeVtjabFmNayk9XFXxgpU71ALrQfTPwAvjEmoq6qfKKJ2Gj5hhRbVJr84YzAv",
  "key25": "26aPzfxR9q8Vs3yTwtTrjrnej5XzVYXfBmwZq3z652JmKK4afqAi6iLP5cZG25a4xJEbkWekUwERc9uzJQYFfzfU",
  "key26": "3uDztCpGbtWicPaXiZu8rHE6uqGVpJFcq55gm1i8qzqQd6bREvkPhWV7K5RiSHMSnkp94exeTvphtNMTNiVhKkQ1",
  "key27": "4k9qHQ9DWkUEKsZV85kQvmJT3UgRTbqe9MTfBxeW8dn3qmAUTxK4Hu5kACXDFtPSnGXR99HqXZVKTRsLYVWgMfmJ",
  "key28": "3oddmQT6JEnGqBjaeHkvi4wZCByXL5Ve9DbuuXzkhEZ7iuUJHDQNcg9pZwYBXwbowACbx5bnYtYmhRVwAY8iEAu3"
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
