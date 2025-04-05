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
    "4cHjwg1ARYd6sxTXeruv5yb7192mSGH4HypxZvJpU6fMNJmmfCycUxzfqRSi6s8PdupJCV3w1NVGXgDJ5wEi5F1h"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3FvdwsQqCVAJ1bYvdC5TwgrNbvuUvpqRcDHHyKmzRvbTMCw5g8qZw4jKABesZ1872W3LbHYAB2ZVaZCdXwKKjuLk",
  "key1": "4Sga8HQbbeSjQ8A1BugCbYqX4XBMLXzut9nB1CUUuxMwREMTCNC3JxiDwG4CfRmaLhrQkeXuMk6ajCz5ZM32kXYF",
  "key2": "5DZq9wzrYCKFst8fsqe32K5FoNVE9kyCQMVzvLrK53Tbi1G1PWHArFSNhMnAtijNRQr4moAiKX6CjowS7C6dSKfe",
  "key3": "54DCDPLyR1jFyEGiovmR6BMj66U54DcrMnzZpu95DhqjA4gVTvAiNnonynte6M2XmndPjnLUJpE7SfLaEXbPB9Mt",
  "key4": "51M9ByYMjrkk3Qk3ds2sPkS81iWSWrZMLcH6ZXUxxYDymDGsWC5J2QEB1b5r9SM1DGuBoEoC4k6JJsrGeC1iiZRx",
  "key5": "2qsXeDk4JA77A9vXPCsVUG9RddNxpwvnthftLLnYJ9rPwdw9dn8k4ys9BwGjt19PxaSuMt47v9vLXhWunAVxBc2r",
  "key6": "4rSLQFSTi4zP5NrCE4qJvBVBfehc8ad8MAkFNDDPFCAJiBn8CvTAmZwCun77UkdjuPfUBSYHLvuUXKN7Td4VioTQ",
  "key7": "2uNphsqhS6mtxmx9RGZ55NNpXgbbaPKcfVANKcCJ8hG6nTkmUMA5ijHeKVPML9zdSPadzcFdCdvtRfiPRZCYCYC1",
  "key8": "4LUeGj5CeHXengfH57ECjEzHmw7Y19aLf16q9T79YpFzn61BEKktnWctAS3cX6uMLgQYEk6C4rKP2yWBN2aUKUt2",
  "key9": "35EQ7QzXbPVz4Cw1CxdkEMBxdsMajYZACTxUAcDMBdHURQb8D5rGHNUCxvhhMKb948DiDaL1vYMAwQZ1wDc3w9VJ",
  "key10": "3KRD6JHZNv8sPbXQvn7zfLAwYSZWthTieFfNSvTL2VH4DEQXhZmcC9Vnnkg4dgT3TzgGDMMQ2W6N9XDEzqK1CJNY",
  "key11": "A4aGmXMAQg7Zt6Rp5ih9h4BUJyKTDb33KuepbFcGNaFq5c4ADGMixzikeqroHcYx4XDkZerUTJdwBCsG7kXPd1s",
  "key12": "5qxjucnS1t8Xwcj8VGQsNAZorD3DM7rj3JT9ARSjjAEtj1AC5FXWjcfrH8ZSBLyMLhvGSWSY7kedQovkTgeV8rST",
  "key13": "42RptGVtdGwQ6KLAr9knpQPBupHQRB97T8FqykcYTtkjHJ77tpcZaHXfmnVWAxvn7pHh3NVzdWifkjxLJ9JjGML5",
  "key14": "2A4w7K9rEe4ReankS8UHn8wvvJCw5XkX8qRtj1UcWUX8aDpSy99W8zwSevpXmFoBHFRuNY9QfgfrtRoHKrqGwoTH",
  "key15": "2XsDS3NCUBVGLeZ7cfg1Rp1pvd8b6vs6pGvvPnFN7aNDwfsqPzUDTzmQv2UYidj8REg2wPtEyiDNAFUdXLjpY9Kf",
  "key16": "4i5EPFL7ne5iobTwFy698EDPYMxH5eAZt16Wwe2BNFhtPCeJLbSSY54AWm8m7SAxnud1aB3rMzFWWBsLabpJQMqH",
  "key17": "3Q4TBGLdiEdLgDKYpq1G2Bp8CHFGrq7vPbjPg3uYPRpM8sAcChVmaB5g2rXcVDySchPrugFxw6jaXE5DEss35JrE",
  "key18": "27XFDuo3514TG6ghVxnnRWjYhvU3btWJEb2xZnEn2AGraJPBoVPSjaNKxpJv7A8ZwnTW7zXsxMrCSii3QTkzQUBA",
  "key19": "ewqVB94pPn75S3ad5JWaX4awAG2Ww3hAV6MM8M85xh8Vuf2q4mrTcY3aARpiE6ZJSMpQgYqCz6Z33BgsLUYDXKq",
  "key20": "g7uUHoVYyPquohf96sRHqeYeM48XBLGdQs2goduiY2BtHLpjwLU5RJkBVZnNs9LuNHEUJS7QZ3nmXjNaphu7Pq3",
  "key21": "5kvWtza8qQTBS5ge5MuEgqULgKFopqjZVnmDx4o75Mkqs2WTe7ca5CEg7vojrvPKgnhM498evdnCCntGtRus98ZC",
  "key22": "evGmkSQHcRMNH2u4XL3rS7tnmvJwyKLoif6PCGdVpUnjeMFQ2aCZzUsivGqLhQ9mozf1iv3RaSBjVegCZuVfujX",
  "key23": "FgQvR9JbkrYsHrkSa19vULem9SqXz1s2KJznY6E9okwHopF9FJmRvGu7sMby3aSySf7AUsDvj9jLCZFgX9QeG1A",
  "key24": "2Tpts5uLjztqLZQYUPSFNKUR1vHah1qxt65ce6vPWiA1Mpka3jXLkenEdgey815Tx334FFYVsGzhoZCrzcR3AFvD",
  "key25": "4pnBwzgXg48uwbdYAFwcZZbgJaxZgg6cWRFhjhgxS8YCPydNmG7r3G15pm4frBQB8GUyjdKb2XQoVEkRA9KrkAzz",
  "key26": "2LU6MPqoACKeR1wgXLW9uLVJvy4FjsyNvFsHGh3vPEAqaqHHCb9CzW3nfHui8ntnNhMU76VifJ1oXW8hHoLxm9R3",
  "key27": "2rm2urdtiDDAiLVN82BdKhtDGCSPoS3jgsY5pp8CF1m9S5HP1on9rDhqktKRotnQt6v2fDw6JHFZhDHbZcrdYTyB",
  "key28": "2vk3uannJUezyx6UNw8aGYqU6Wbd6MpF5NUf7VBcwjiNgqsLMjnspQJnPxp5BYuy7hV3VhyfckAEtXHDkg92ZLdA",
  "key29": "5Wf5GVVV9TLmWupmv3paBCFtRuy3U3kEdJ2z54F77jfb28P69NX1w2Tdd5KMQDuHx3LPWz6cGgBnDvMcgz6n1pdY",
  "key30": "BzRXbS4Sz4J9Jw3aN1hnFYk2Ju8H4ZFCnyrJbsecQcVHCAv9Uo75A7ns5Jy91NYs2PS1NAzvvrfjS7gysLXf53H",
  "key31": "55k7LXiUXnLwBqp2wvcPEExfdP5otEpaSd9tDbSbv4jncsMEva9BDifyTxv2pvSPY4BeNrTkhSK52iJfS5yTyip3",
  "key32": "2EJXC2ZFVUCQsk5KdWoL93UeQZPr86ieHpXwH4GrtfDkuSZVT4ViyWzqGqTdsCj2uAPVNdqF8CjvZz733bGCHLj6",
  "key33": "cnqPLPrUL5Cvq15EPCePWD7Xu94bb59MnLxjtpc3fH3ZoaiLTJHuAf8mu6cNNFZSc1E6mP6qPVVRw8SadBEH5Mf",
  "key34": "23ZYirAQSTGoygEAMZm194PKD8BzJQTy4BnQsqvqzq2L1iJig6Z5wyfCvbFr5wY8UVVXprNa8C5hVaUGoDCSyVVn",
  "key35": "3gPCULHA2r8UTxhDpffcH5aTjbkW8HZyMhpA32m9haJfnXzjNzFzF2aAEmAgrHfoRGH14QMxgr2wZm3qToWpXwtX",
  "key36": "4h4n5fbu5cQcg5hZozuR1BKLdTs816a8rTRWvU1HV7vGs5D3WDeK6Bw17Chvcr45r8LTqBjc3Y8EuAac5J1GnoL6",
  "key37": "3JkASGqxPXMHNsDqyMpnZU6dJMvHVeev8YmFrnVXvhVnkM1yuffFvM9kjjYajCZN5iPp4RFPrfyhN5aytWrAREb7",
  "key38": "yTgGT4fSwEDg6BooR3ZK8iKDV8QPMcq6Z7FSjQupNWHtEo64XiDd7DVdWcLmTsof3qp4CzcicvzG9ZkUBVtFCRv",
  "key39": "4QfWGev8hamHntCvMp7fTBSCC4sLa1LmTzPsQbjeULNxWbypqgLWfJ2cbmEyEE4pyhsjhreMixvVhXcbJHc2LyHZ",
  "key40": "25Q4BdzddDWmVQu8jGq3ak4u9JK7Mb6VzHjsCr9zQPfzoJpPh7CN5junoyhmxfJH5oD48ssBqBKxhqA4S5WPhTqY",
  "key41": "3uCjBKAspT5TpByi1qQx2tMFjA6SXp5rsdTyLeyJ9ozL4ZoTEy7W4feR86m14nTSbJ2Z1uvytQbMSGRNzTBcYAJ4",
  "key42": "FpAoSDwLoGd1x2r2q6MJ6cbgN3zNkFGKVPaCSJ58Q62PNVmkkBZ7wzzSYRB8vj8oevkG6eCVbSsomHJ2Q6BTeB4",
  "key43": "3xgrKp4YotkuA6JXYtRcYcVhLErQDkwmNcwFgirGfMTNaS8uShTLSBGc332SdAaoLwChCSpZqsuZgX2Ag7RT6amp",
  "key44": "FJJwpF1afRBA6Kk3kCr9C3aZ139c9dzeZJGWC64Y2EH1hu65L4KoyVqHd4mfjgzWP96b8XcT5yZRo9vPvHcxC1f",
  "key45": "UeZBpywEnXH8MepeEFR2XNd3qaAp89FcK8EJ9EjbU82JAaZ2ZDqLWhBhipnPS1n75ySrBroWaod6Ev7GHaBP3aX",
  "key46": "5jruzyMPbXPw63ZaCZCcsCFZ6CENdMLaRM9mDkNuGLjDW58deSzfiqe7e9yT3VTdJTiMopygVPbLedXiS7NoU96r"
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
