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
    "Rps6NnvYkjACAMmfWuvUzgn8UW24jUc8uqWpTGgEEcDeBQKWe3XcbuoF7jzWkSHtH7fzm8N1JVAkZRxatko3x3c"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3JaumLXj95hg73W4nbPxeY5iPWCSkRy8Rs7LcxghQFt6fzYmrXng2JzzZ7crTstz26s8cUQ3noLv9BQjRdtvAbDe",
  "key1": "3teJnaNuc6RxzqUsRcVn8zScaBqzB1touddW7XmHS66DZxBcxXRdu4Q6Tc2hUQpyeY81t4Eau8e9wQLxuucE6WNr",
  "key2": "QAskJTB9nAWvkJ8qUPwTciuwjWAUSymHvAW9GeXkHcdrMJS87NE32cnUuidyU1wkRc38AECLbidA6JK81QS8g3X",
  "key3": "rSHuZAg3CNMyYSBoeNzYfLrrYzYA5tFo8rzF85pSSnVwdFTa1qQ6poXE5H6h7ELZmQEaoSkZopC7CTx8SiPrnAA",
  "key4": "5Rq4ZrbJ6V3P3X41e2TAMVGh3LPT4SvPWHvprXwqi7T2fopn4hdw4KJcs2cX7fHNE2Ys8WXfmCkytbnxhnZuicJL",
  "key5": "417QZUZWjERh8MgBfuhCGKFJYNPF5WL6v8L3DMTV4NCn63RJ7cnyffq2zVGM2Mk3qrtjZF9P9bCeicWo8UNL7gnr",
  "key6": "5oLjcjfQKPjhSua8CP9zbosXopfYJvF73TJ1MWRzZn5er183ssjUhr7wTvqNMgdj3V9AVotTeXQcv38qPpXWUSjk",
  "key7": "xfHanGsXmp6ye89cxuRYzMAntLKEYoEnr6wcDkmYhcBDPrRT7mD1XjbCAdkdVTm8ShyxrnEkUDec9mfdt8RZmQH",
  "key8": "2ZMK9sXMERQ8EsT8TDf4eReEjyBfi3TqiGKmbKy3vApCoJFhhfHpQkx2TgDfMTfYMTRwsdAhFLvtibnWtfReUy2g",
  "key9": "3Pj8dQ26zPm7FNkxkvh3SZXhMn1i398XN3rVzeP3CfcdHvLx1SDreo2tVLvZjjx1XzNwLNCv1imGz9JFHfqw4qkg",
  "key10": "1DVGRP39WFaTn9jCr6svuNopndaRds5bghCFbrcggLvi2RgXeJ9idgRxEJVkk1AoSA7jLe935SiNd2kULNxxtUx",
  "key11": "5ffVU4AGyb2Uf5kkkwa6xifKUCmzQiWEtn1cxZrFtz89DjUEQJWf3y7x5nj7hkFcP5uDy2nR1g26jcuDjx4BLdmB",
  "key12": "2hzAUhFmKzNEYx3Yex8zjJoWwMC69WnzUYJTjH4rPtDCXoXZPqMPkzNf2qSN1TcLyKu6KsYzPG8wHtTUZBEP4Bar",
  "key13": "2ZepdJtiG1gTZkKjHCvi8jAhBxFz7siW7kLo1FbKXALYhFMwTMpyCoxcqU4KLUfJrBKW3qEjXQXZRQJ7MkfufaFZ",
  "key14": "4cLbhSCPawKw7vGkLh4qE66cZLnth4LTcwMxr8fP11GSpLVUvwfaAuZmgv2ALpcJBqtfV1p4zWch6x5AQzBXQ1Mp",
  "key15": "5e647MyWhzegSQ4NtjZicCDk3A3E7LqoMoLBHy1yciAXsoWeEcBEkoWHArfhXUPfU28ow1bzeNdG4gNLv7tTVtJJ",
  "key16": "37L4GL5shH55kbvyC6pE4A59LrYtfQc8GzQeEbA2a92FbZgvqoER8nmvZR7GPvTQPaRU4FmAxNE6ySM3SFZUAuN1",
  "key17": "3ybpmdYWLyMhJVLziWtuSCXKWU3uxN271DeDLyp8ifWfxJndHRi1BZbVwvy6185swBQCSmCVuX8RvR5kGcCdYNL1",
  "key18": "2b8Uo9GiTc5NDNZvtLh6nEQwpoSZdrE2WLcraBwanPK7F6GXXDJxZDxiVsanDYAnMo4sc7j5JfsDRyJaqwBfYoDS",
  "key19": "65GhhPSYXa6LFTtmrvqrs9smpbkh5SBhp8QEZcRJpcUVd8y5z9JpvbjBAepK7AUprYAZKv8GwrwVCqAuWUGUiYER",
  "key20": "5rtBg1qgKdbzL6iXiziRhoCF4uM8HwfAsBscc3FzuQNquW5J7TEdkLzsfgNKzYRPt7TNQrR9Cbro8QetGzpqC5TK",
  "key21": "3odeqHiVi5ZqrU6kLdrSBxhFZ1Jj3tBf2usdA8WZitiAFvHv8wyvaqWu5hRNwJNcQzYiWoQAr21g3Uj1oYSu5kMp",
  "key22": "GeCpHeCEZuVm6w7F8cmBaDQRK7j5JnPVLMvHH2wJbo1EVAh1yDiT9K8jViK9ZEBk5A3iyQQKGUNzTQSChLKHWsX",
  "key23": "448VdBRzPKYXxzhgBnHpHdY4h6YCVQeNLD1ArLEzVKUZvwSLPgUxiZ3B7Cf7Tq4nTMPQN4vwtDFCTDHYsyFgGgBz",
  "key24": "4koRG63bxPPwHuYmRxt8asxLko4ggGbVkDd6EopANDVwu2BeL1hVs9iiUja95EuXiy2HKBi7GB8SHuoaWhErWADA",
  "key25": "2zLsu8BbngNdFzz5V54qwLW7RFCJUdP354EHYRdXcoxUW1DGzTqcX384SRWhxDaTRp2kw5UBEy7F2YYBjMB6NpBs"
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
