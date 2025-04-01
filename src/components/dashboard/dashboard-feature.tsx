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
    "5SFSjDhKGWypuMj39CT8Ba9sva1XkQVaFSPNVuHLKEX8kYRuVCJmSrJ3MagmidFA98vvueXcjyvXRw4rAHa7cWQD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Jhm8Y7idfvbL6LSZK5oDt7VJSHMRMpsytKAZumGJXLtmkPjEZM8rt24nt6NCAHSL2kQW9KQnj9i2jtYiqcgDEuM",
  "key1": "66L5xkmbLgXCt1koRtL8ZZbmsk8AULR5EKNDchC2D7GKjzgfkLxsnu5JAq2D6LhVrgDwSPdXrgcJVYwdmnbJsnYz",
  "key2": "3qCwhEykkkxfubZR3iG2MroZSQZ4tSRuYDra2wfY6bpkcNEj9DuaXgeAruVbgAWmsLJXqDmavm1B7aQnjvVa5YLT",
  "key3": "32y3xAaMkuUd49wwS8NnaDRAcunYmAN2gafQE9SDgAB9aqbk2xUyBD3Bk77L2z7p3iUP2p89XLVPSazjEJnsq7FW",
  "key4": "4H9iuhfDMipxRixYCA6ZQA9xFsTWTvvzUPGBsJ2RhBNnPdq37Bic6du1TWSede9CXfvaAgfGRYKz5UQyQzaQc7yP",
  "key5": "5L3ZVJBSaxq6jxLiML4m52gFvKQuYs2ZwFaY9oaAYcJGNqSzwXCne5r9UXziTHiBXfyWLimP1qfHRQp5U7wyH4N3",
  "key6": "59UW1utFjDvVLtgQ8Y2aw9jVLQCfqp1djoWBWGasBapRzN5jwnkhZMRLd86niU3iGsjhB4AdAK5uDYUZeQ6KWjuz",
  "key7": "55G25oU3ThTom7EHgBBY9jRZNWPpProit8nMNZL3MfSJYjyxj17kMG6iPHNkLA1iZkL2JjSr9Qahz9yhtBbBEzdg",
  "key8": "qUXMYLBvDLSE3fRwcdc6KxenRzcpgXWVd7CsiqSry5Qu5dREHQp7gg5mo9kyNSDmAnNpi8bekpj9vb8vFDBS34B",
  "key9": "3e4JLmig5LVvBrwuUjU6oFvHyEX8U5X6jt4HS2YzktGoLVs8TMCcrpaU72QqBvERjfXBhUyVUjeodQWTuHL7BEgr",
  "key10": "2dxhjqsu1EwFqS4yEbu2K67HrPapoHjZa1DGDF2AgpaBGo2FzeEtJERGqF5Me4kAd86QXNWVM38mmh9uyhbpDBdZ",
  "key11": "4wUJNqQn8HduZAtSfkUTUGYdMawfVXLauVKLHgD6ZE7cz5UM7nT2XToCiBSAFQ1DYYVWZD9tdnG63PMGyZRdmZg3",
  "key12": "5iDpGiQXVsPmWz8FZQp25XFdEo4Etd2YbYJVzD5FMW3SL1jC6gZkt8NbnShod37mgWcv65c9asBBc42hf7vU1LAZ",
  "key13": "6d5fAjYxh4rnrcTwQQ3yC84EFPiLn75k9Y632G6JCaqozuUFT5HWXvX2BE3AHKPt8ZCo37iyzdySnhXMFt8s5Ft",
  "key14": "5rgwfKoMxELqyzzNDH9YA5WTe9Xj4mXscHeHR8MiAvaHeSati8j5rayRjm3QSQxKTNznAT44NzjnYM68YLdfLuZi",
  "key15": "2M95Q7K6PNUGaQLGWmxBhnWztEVFSLvYAihoYC8zAa86Ws1SERLm8CvYmwQYcZSoxPLkrsEyRxouiFijictPhoD3",
  "key16": "5DWwPHFBqSDwWGJiiSpRU5z1jXEnpjLgGT4pggXhmEacdK5W31hmFPBgoQKUYQQ5p1xQcK4wYnXvevXE7E8XN8w7",
  "key17": "2qJahcPdF8H6JdneWn49BzXatqw3z12fxG7ah3FBHDjDBjUehd6U8UQWwcP2A1U4tGd18QKCPj1F4to6FVVKNkcV",
  "key18": "2UGLWd6XM16CJnfqHLTCHBiyk2PgdahQPtqSfhkuXfCBPcqNtkTb3Ge1ZeefAz6kdpVbkvuRA9zXW6mmNRBWBeh2",
  "key19": "2jcQDpb959PaggKrx5tEyp1F7raULB5PohQNHifD1PBPGDfCFox5XrzfVfnR7japZpSu4f72A9Lb8NcJKCSphByZ",
  "key20": "2QB5Td8Ey36dfu5cPbg52DPQkRWoMPY5zUeZdJJxz9PzCDsipSzV4uALX7N4tzD5WGbooM3mu5hJY43mfriwrKmW",
  "key21": "44msj9Np91Jj3pcbqNArpMJCRqmrXGR1RUgEQwGPAGpWc2GR8HyLUgQvcSWqVvcpXyCryEtgxQJFu4HKLEunHesc",
  "key22": "31UMUzsUYTDJVjbBip6c4jbBRwUSXkiqPSmKhVYBHmFBJaYacg3KWZoH21SMzHxY94kN6mJk8G3yrf2Lk4Lm92mS",
  "key23": "2AyA9aiP3e7ztKw4fJUjzv7q9axc6fxu55q7DLb7RXaZaduyYHoPgDrijoYwfm8dbWLv2DNL17PhHGqAubf8xhQS",
  "key24": "5BA1aRQfJXLohe9UBz5BNRFugEqWmBQyri65fTPAjzpoQAVWeQCzciqCwz1TkGmQMJ58Nh8w69LSne9zekYUTCov",
  "key25": "2F3hRha5CkygmEaNYALZSVdjiSy9py7mT1sahg2bhzFLwNoskyktYeS2Ph9ALdU7zRXM1RPPAgLSwBtgB5HwPbHn",
  "key26": "5ftc8J5VFwHqs64hSBEeZgoDdHZFKBEibndRMptEFK58YW5jrrqMfJ75Jb11HNK65TXonfSA3sRvBu6aMNGnbTCE",
  "key27": "4wWUxqCfqTrZenhQMQ2GHEZKyc55ZNjdyPUPqqwtk1p2m6cZ7MQziUY9gQgTXVYFqGHT51xLJWon6o27qQHUSMxE",
  "key28": "o5SFGtUreiivYVXFfLJBKNLF6iPEZqKEqH6DwW8bqNdrVMGAjW1XSLwordzhaVSjiw4JXYX53ti5r5EYxeS6zpT",
  "key29": "BBj1kMKp5uJDj2kvykX6ZcDB7PfnQvXhEWpHnFda4q4BfjzT2yPVYrR9tPGFqZHNaVTX1MSDyUjHbUpmk5mRpkH",
  "key30": "4h7yNxqgLiefbzbmVK8EdvzjzDFqxSJSrVAzcVUcZ9fxxFnaaGCCo5wi5PDMBLZb3zCRaxTCbvwoMK6VL2BJ8zav",
  "key31": "Qk3mGS6JQe7UVrEiQZ34zsVQeL5qHcH2M5LMSJTGvFcH7GzFu5i272nCQEnacLSjorMLdMt3yidda2k7CkT7XiV",
  "key32": "42ugfyn5RmVAA6hweH2afUFeMakdbXMKWxcBDytWz61HvdrxYzaBcZCzhAYmXFJziXGGUT2RLNrAH5qq4QUJHJF9",
  "key33": "WbGXj3uBH6geshYmgczpF14ZzFtiooZbbXAMRSMHSzKVWXYvBc8b5ZssGz2FXubusR6TUx3HaT9kau9f2QnbvSW",
  "key34": "LNcqmxiQq5LBFa49AwVxpyMF5MH3buiJWNTJnjUm892cHfwp1t5nhmShjWLmzpaeABbosZAXK4JGnzTHACiokau",
  "key35": "jEYmuUxxeFsfTJznRx2rCjSRFVLmHZch2FkTYnJ5AhNqsMgWaKkJRqVcAMXtsrJrLRuDDgWf7jnvMAdhJkPbbXr",
  "key36": "46nGAuFVzLQQRHtHy6NFrtu7cStNX8QHdHNwLf9DVexBmhN8fXxFfjE9r4hr8JeF4DN6pVbi7iPY94mPY1swGq9u",
  "key37": "3C1n7bGSjTbpQR9xjgCpcirim5M6pz4ip34hNJse5BqJzLocSeyMrdY6qA9GYX8Bc2uaNaEqxq1QE9vnnniML7TQ",
  "key38": "2x8jySMUZKhZZUW1Df59JjfQhFneVrdU9un8PrCQre8ckCHLuGstNpSYky4rj7cJrBY6NkfzZN4kho9iUgezdkvt"
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
