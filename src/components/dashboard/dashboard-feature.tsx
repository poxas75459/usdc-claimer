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
    "5ByXVKzTGasLEZ3BvfwVejMw4T4Wwve3P5XiQGSunH4EbkFMtZgyDGtuFoVhtCybifbvoYrpQFjZpBYbjB29VoNB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3dPC8GsaDTNC99obD9q3aKHyQpqmnSqjdrbwsgftsZXiN62qsstquBJTQuFokVmdY1y1foja7N9tJ2mY1K2NhYiq",
  "key1": "4ZnFKnSRyqNYzMCgc72vztB3zcJ1u5i2zfr6U6SRsgYcbxFj87vBximP5SBDWz2gfjL1XpoAkqZj7FBQEUCdy4Bs",
  "key2": "4zN4H1UxwRbEYH1kg2SSxudqjg2vkbZgEQzFFmh2uykLGTPHzcafR4UXogRxjik1hNnrteA2rqU5n2QrmK9TqYcs",
  "key3": "5jPAw3gJFiExPxs8avJ61Xf6bs8YuQ9GT3meCx4WTdRYYtpKCqXteRT1TDb9hjbhxbpohGZubc4Gcpem6yvwYr4",
  "key4": "2w5q4eQexdYiH8miNcQLJLq5s7LZFcAVbBw8Z8uCSDfF6BWVib2TmxuqXQajTRZgdXdcezAvXiviYYPxTxNDQXnQ",
  "key5": "3Syh8WdS9GgTb92xQ9r5XDVR9h8rEKgJrLC4EPnw1QmGW8ym3jTrwCRquJ4DGsXkYUTTyYzzboM3iwPyZoAyaGRp",
  "key6": "3KDtPCuA3oKvSX4hUjGCTKYaVoEJKxqEjUhrUzZmYBuvkPkcNtFcFt681xwzoGiixgjfsxruZbEBq5oqSM2qfpC3",
  "key7": "7UeCp6zEZfFtfFuhwt4i4WJSZDNB9zDBEhD7LbmHU7W12nCcQpKFigpLa8xn9D2bNpZKE5s1e7qv6hH3BA3ccoB",
  "key8": "5pB1Qj4eiw1Hhy9AGDx4U9vaJaozVEQ94M1M5MyYVNua8GwhmG8xMBJ71zdnoacPP4DofGgMYbAV5SUH1d3sq13E",
  "key9": "3hH59BdFxAkX392wZ8zx9zyGkXYuHx7u3jpi9h4CAcmaog34Evo1JZfeHk7VFar27WDjSjiZQm4NsaKPHPc8kLNd",
  "key10": "4bDKvcw31FxcAAnhAYQQMfLepUsmKXn82z9T4eztXRqfgXR4Heo3KAtpAjt2fFvSMW4x9z4hoRyDipinAjWk1ZUy",
  "key11": "54YZuNiav6zQdiJs5LmFBp6YCjwXwXGY6sm4RRZsSckeTzuT1kkgMJ662f9RsPXB5AAsFEsB1BpERAkPrTHUwBcB",
  "key12": "2yZgF16Pbf6Gr8JgYPaa8jHBUosBhG4PP7i29rUnNaSdHbLnVg3ro7FM4kwcuatZkxAuJj6HT69vGDy7mbcLn4xh",
  "key13": "3kuDPuZFLAUQ6Cctbbs9WSgSxDJttcmqrGHkjYcDgjkL7EHnTCjcG1n8eUJZ4RFgqxUgW7CWbdyszUwXvAhaZ4bN",
  "key14": "5R4qBszKRJr9sDTahfUz1upjZLBbAWkKWq2dgLetRV6yT31hJQ2dXJ5GpxsV52deMspL2nkFzn9f2Ht8RKxMV364",
  "key15": "4i5QzAYeNt483xkzLNMkSAPh18h97exUVJLCvNPexL95Ed6E4pvMY7c9ZT1dfnyxtBQjhw3jvTXJ2X1CkSs6X3hJ",
  "key16": "36RojWpcicSnuG5FXTn8MWp7qoY4djnitrDcCXL5SDFwbELTR2fxikUfLsmm67vMgaDSUDoEmQbZJ9ta6E4HNkNK",
  "key17": "4VVKqnqY4g4N1Ujhnzg4h6tFJ6o52V6pBQHwLVEW7fcp4SC7aQb1rJT21PcjFJZqfYSNe9dMHUajjD7Kn8zmSif3",
  "key18": "3gJS9QL3g8suRLGtsBbiFuQHjSgnazmTEEYVYW3ikKW86zAZZVJRAwyTGY7EB4Q5L7DaNfj2XZx37vsRkHdPZ4oi",
  "key19": "2Gvn5ytTCD6r5E1jkSqn2Sr1jmrsqKjex8ZFuFAW6dyQpzV7SSsUDDp8rskMbNcXA8Z6JRCsgjmeDfQ9ArRtfm52",
  "key20": "2Lh2jiPJ3vMz6S2T4rVkTj9ubdCneiHDKv4tfft5rWfc4kmFjYr899Rs66rRcDTb2CTvA6GDu7Qkdy4isCLTP5Gi",
  "key21": "63xXk8udcnqXW4YsKzSFdfEeD6ADoDQ1JncP9jQZQ6zJdgEVYS48MedezEu265JsQKyyeV4xD9RzvLSGFyP82dTg",
  "key22": "tFbo7UQEpSVu4yHf1fmv5n61USEonFmud6qyq4yQvCFKfjeashDAKn9PECwiXfpU5q9MqnviKnXstJ8FrqER97R",
  "key23": "2cnyQVYv45Wr1cScineC3DxjN9t1AKRHFviBn4oLWTuzpZH1BXsn3G1eEu4qFK5GNU2Mh6eG3w6K84hQzDkCdcu7",
  "key24": "221Y8JWYaB6b8843Ge8yU29Hacc7Do7PWy3dkCa29DogjGgn9YJqPwmr7AET48qpKyGZciPsXzdzYScChSc4q2nv",
  "key25": "3SdS1NUMk7XZKDYdgR8ySQRDMCJ42dDu6ufZXqqN3Xw7txJ9ued8hVe5KwzpryxypwBYyb77te7bCjM5kkpLXeHv",
  "key26": "267J4DBXuHLEikkBVoyine7hrZr56Pnd9CQneFjU6USFHzmP75c8xJ6eSnbRz2bY3BzSxdn1BphShBKojCYAAkCT",
  "key27": "3vcuWknQR6WZGXv8M9RTZ9zbWauy67FuvPoQzgEkviUbugJyb65wGZSuGjhFrXb6DPntd52ZDXmZkZeQMT6hLVE",
  "key28": "pAEQ51mJXLJR3e42N1xfR7BPA9n3Xdpcyjf1oYuuNKBN7U3WfG1omhLr4iTQyASYd3PmYmtX8Jw9RyiSwTSHWrp",
  "key29": "4pxWSW5tepGyQHbbRPDMGUhRBXvnTV4yyzjSqK7x8Vpy8X2bGzFmDtoxHKYWECw6KcnGnBc7RKz8yVngrsNSXwsm",
  "key30": "JLXFJZwmmFwbCWnZakLev6XpK772BSP1pHN8AfRu3C2DBXWdq83mVoW2Z2bvreGQve152nVgq6vrxs8SwiJySxD",
  "key31": "5rdyy3rkuXEPXbsHK8CemgGx8CeKhiG1AGbsroxYzpwhJTuc2iLu6WyjAuaYfvujvtscHmiShMt6YydoLka8MuQJ",
  "key32": "aqY2dp8bpvBV3exKr5TZYKPiSQU5RYrwbxTwJo8qfrnwyrU8XLbCXXa2T5vscnJpsZxgaPNp3hVMrHVaEyJTP97",
  "key33": "519yTQY5vhxQUxhh27jc5WKxduyh4QpwUmxmNWLFrr7X6HPguETNkjtNEoYaokpbmv98YMNvBwPvWfmiGcB8N8TE",
  "key34": "2GeNtWyEMiSWEGPtRVTiB36Tp9hKnKi68JhCZJ4Wb7cTAtb8NoAMds3VS4MjGqkdVQWKWJg77kdHE8graAHyoA4K",
  "key35": "2V3PNM4LzT4EyNH5GFsQdT3ukMSvojKjGS8jqiDFk5d6GJer5J4vKxtz1tb9RmA5KUdcEakXRfqPghwomroN6xKu",
  "key36": "4VFKcQNPi9sTxrQEUVQu6RNFPqnt1j9P7arSnDfL8wb2GJeWxCagXugkEAHXb115329rFon7ettMaAqWuaybfBWo",
  "key37": "5yRsZB8Ak8yi8x7aVfi95Lcm4d6eVvybx4mTQBZBEiRa1WPE5E5obo4TJTB3CP7nwoy43TWoEQ9wj1RHkCLpUxRf"
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
