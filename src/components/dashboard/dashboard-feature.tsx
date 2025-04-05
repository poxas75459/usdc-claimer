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
    "4uKSKX3DDxMqu5WncsL367kHcH823FCusjnfsvhu577UjfgXUxtZZgCEDj3wQ5pZDTpNSyYjUxBuYJkBfEh4Ds5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2BVTS2rqJ3msP3Ji6aH5cNhduMLS7F6DxcFnUPwsABDxgvYBodaeRSHDF1N75LFTjm5yYAPHKyEH8pPAqNe3LomM",
  "key1": "wmVxPmwwshmx9hhRG4N1HkeKUoRkpXZEigfaHCgmP1dSxoejwyhDZj34dumdpdGV7eoBfH4fGYaaWsoujxotwwb",
  "key2": "ENN1Htjbhrt4u7g1TXd9ERDQhw7V8WTvnX5MF3S4CLFx5FEBH8bSgJjUUwTWqZRYK8vWbCRigA9kxpygsjYn6QB",
  "key3": "xwHntZLYW9DtHea5Jov1t7qSFCfGR66CoS9dWxL2rpxUBPDTYyjDWuaDspem2k7NpghFcLtwWVva7VGaPbzEmep",
  "key4": "2243s57Gz1fjJQGsdnnnBEu64BJ2VSSGUfATGKVFYmTFTqqoCCAJ4QMXJT1RtnSuxW2joULY3jpTER3s8du2hNsP",
  "key5": "2g6akqMWcTwqv9U8QHUiRoNoEKZY7s419ZHg3HwUKZCJHgSqYVysTqfQsuKkAqxnWSp1mkqtj1qRst3DreUvVXUK",
  "key6": "39zdUdeY1v3sK6tHDdBF3Uh8vdRvbZQGa8Q9Fk9xkQqp2exQkqCBAJTTeWLAvWoeqeLTDQxVB7TgysWLPBrnrfCx",
  "key7": "em9iyAEoAzip4Ff9GaiRxq2FqC8hFyBRxDj5LY2XBTps1EL9o3nsYpSNW5QoTvKZzMJu2YSTURr11dMDy5jCem6",
  "key8": "4zTxFBxzPbtQMkXiR2TBLKBv9DTq9mAuTuhBTCnQzVmT5PsMM6UnHFLtkJBS5aZx6KsBb4JQEPkvcLgth5S3y7D9",
  "key9": "3jN1egs5dC4src5AMPdXHxaNHPRhr2WRDfhRjQ3pB3vwMEJb3Bqhqh9PvCoMAMM6DQ6J2LaxxPVkJpprHexNHS9a",
  "key10": "2coyVSQocwvTYRjJixfDo9sQskpMBqAJpowyLvT6eCHxb4MjHiXCA1pBvBxzrEtCiJUYDvmQ1Xy4Ek7WjRW4nZAn",
  "key11": "4egZxeJedq8TzdwwP3kUBrFiKDu9rtBZRnuniDbp8Fyudtp9JYT7S5SQCb3jB7bwe43FTuRnrggySN6NFdfxFWAg",
  "key12": "4N2VbL6695Nksq9fuBSM9R7KrCzwfQvQGdJ8d6fdTsbAgnPesaQK8HtJzAV9Tt95oe1h9PXv67zEGL46bwKEZYLC",
  "key13": "QCRgGd4iw2EPV5BaX9K2oKC4odkyZMV2QYGR9gm6T9gn8834cgsiPfZ2PmUXcUswJPNDiDGCgNbNbAitQNoa3Bc",
  "key14": "4WPTXQy8b1ooAC3R6B8zyTSuMDvAvXoroiRndiWutdGkyPw55psXcFJi1iEotZgDTuGTqf3oryJdXYUEKpxNs4aQ",
  "key15": "DJSVAxJ7h3PkTQDttj9kqnYPdUdi6uSQYnuehCZRGb31egbWkdBWabGxpYpsQnC8UeRNY6rc65JYR1zwDMCuPW7",
  "key16": "2oemRAGh6pxLPK61dBrnTHP4yzNYf35CjSfBRUh19CEPpfU2qELtfY4GZt8XHWXWBM7nyoXZj8SiprnsFmoS8hf",
  "key17": "2tLT9m9yV3223Bv7VwRc9U3gWedFcbo6GCMxgbGun7VXAg4t891N6vAbUfhjD6PNvt4NTCuTWSZZKnHGmU769qWy",
  "key18": "5dYTkEM6kpkhV1Wv5jRjzVp4kGjSd4j3mH3QP21YP5ttV8oTAJQTDNHbskA8DbuSCTbFgu4KMU77fod6HHrbyb5g",
  "key19": "4yne7RfAknBW1y4vLydjBvqV17vaFZcEtx5CY25uuNL6faQ43vzvz8T1c1RpFv3YLCCoR75gZKqkC3k4qp6hYVua",
  "key20": "5q3V4W5ZRWr4XRgNYGwjeHVKoTH4qVzaHqz93autF1WM3jbAFieExfYo4AFdngjv35AGTiUmMA2GFQ4RL95JoHJQ",
  "key21": "YYeNJe5rGxvzGBmpCwwAK6VrpAiBMWyXFNW2ntZ2VkGugC15WekKcpiVdzvewr7h5Y4worhkZuqrrs5hk8C7fFZ",
  "key22": "5wsfXMyAUhgKrC1du1r4i24PbjtMzFG2yWodsQSbXk1vd3ZC1TBwXpA4t72o8W6jfptTRAM7tLLnChMugeKJYuUE",
  "key23": "65pq2swVo8NXRnRPvFfp77Kri2hSYBaeo3bRTBDU2mAgZm5mmvpjturu8tq4ZuduX3ZzMqnMG5KRS5qPvNmBiJ12",
  "key24": "3XKu1dNTGKp6HYwSBMCDyZSze1tzvEZWcN1SyNqDzXoRGyk2YCMp6ns3SwjePM2SAprkxjUYXC1QYb8dqh4dBFxA",
  "key25": "c2u9H6U89e2rJ3LRimtE2v4XNedzPL9zcv4GbcB53dtgfHYUKqFQzu7U26XcM5bugEgP5MfkhMJw8NaSa4b4Bsp",
  "key26": "4xnrnyQCCSs5QXyXgkvaiL2HTgd2nCyShseAkZ6z2aCfoCzYupeJSGMT6pWxqToFufLJfFMnFiLbg9np6GscAgZs",
  "key27": "4sNPx2UaBszbdeJj3igCHnFsNSQL8E9zjXoeMao7Mvm2srRViGn9n3wdWmwj61dymeLJGcG5TFWqGLRByQvia2ue",
  "key28": "X6jwiohuGgCfyTjXhshuDuqzaEnuDQ4QMTxqRjCBSwSmfp6PXXxhNVn4PTjN5JqWYwAxAgxR7EJvFsW4BvJmh4H",
  "key29": "LjjC3SbjRV89EuYjv19ScezDM41hpsPLtGSJfuEukgs8nErVooBFhzP7M7xY3mCAu9ij4bkcpEAim9PFuyRJNiD",
  "key30": "4yGZ9inZ3gnwbU8Pttj5uAsp9WgsySB5ktHXP92sChuWwFGtvQMC1FrNMa4KrF8QjqKgGABxbfoUkQ1dkZEYGe4U",
  "key31": "62w6jSTgfAzAkZFPiFzDi9RnCCcrW9asCxnu5FoJbmpF87YsJZf27oPy8XEeLdwcsJ7kVHFRm8qQHceYDTV7yvtR",
  "key32": "66RnmzANFcPkxTeKYFPAhGqfCP21mXN33Yg1sLW7zvd1N4VA6VfWYWHnTxg8sUtrzuiM4DNfE1BmQUu8NPyRrXfz",
  "key33": "4hf41e3Foc5eEPEV2MbAi4c5sLKdmRSz6Aey1Z7Xs3xvVa8QE7SbsTtBQQZFZGQ6efCSiHKJxt9U2tNDReqyp1Xv",
  "key34": "bKtUCDAQhTJne3hN9z8PWZi15digJXLCgXu235q5fUnugExRTUAdxLjtKcH8RLKiwQC2hCeedMDbmLXagq6EQvx",
  "key35": "3K35cGVYrSLf7jyJALLE4C5d9VdFWHbwAg1jWKCb6W7dtjcukV2yHGLafa6FhTgURaGxTwdMhcojZjb4tsz5zqoX"
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
