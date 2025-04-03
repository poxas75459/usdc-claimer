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
    "4up7c8HhpsHLqZEG7fiGtKdXgn8miZczdPynzuFNryQ13z3FjvXgMHijXsqTJztv2zExLD1PkqVoepDA6NhGVzGs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5RnRVB5svmxpEcQJZBfK2Nhc4BTNjHuFpTowL6CBejwTdgo7ES4fuPUYB8NP2RpWmimSupZug2vVXocjr7WiRomF",
  "key1": "u3doNKrGyXaPAun6aC2Jyp9jVo9h1qpnrtBx4yNJ9Pm8yKRddkJdeoApg1VpmpVftwUo88zo3dYTJtFZuWPJS2b",
  "key2": "25UgY5kuXNSn8Zc7CLwwz3SrrWX2Lqg36n3pq4oqY4rBVpsMNQWpaK3ER98eXUrcRw5DkfbKt1ZdgpNjuRVbCG2r",
  "key3": "huKNpSqKatAQDPJJ8Er6ernnv81aXTguPoZeuDWAyS2fuxh9gWHoKLG9uGwm8kEbmFfjYFTRgm3nnYhMiHg6Z4D",
  "key4": "4uGWZ6P4ukrHW4xo3pJ1C5VbDYsSs8oMfbeo2uKMzftV5x2ik9fpKX1wRiJcgBuaD7VXV4GMQ7w31aPT65uSdKqp",
  "key5": "5hKNQ4FWfhE7LQh3Hn4GDbrNmFG3eYY1oC1uPJkmHQpjW8o6ysyrgPXDjZXehJ2QycBnVgGVHms8msNRP2XmYdLU",
  "key6": "3ob7DU9ZafJ2mXcTkB2PsoxP7d2QyrcDynHzmaLweiHvyr3wBpvJqGTivmBK1i78zw5keyq7etPvtZTeqPTrBKFe",
  "key7": "3QQTm6HKom5ryrMSd38bjK7dvHxp6CdYQ5k5V1km9L3GuA5z2euFQ8EojJ5adhnQ71DWYw53UibLVBFMpCgnvfcL",
  "key8": "5XVWUweZR7Lrgxf2JCG5RAZVtuTVx3iCVMBKp4B8UuBiTuXogqEcBHA8ZkTKNvdT1Hj5UTZiLuVHDL56oJ53CFDE",
  "key9": "4ft88re4S5DnTESJCJeuyGXn3gs7q7jNt4sMGrQ3SktVQhdzZcSJritRoNgdjFqJNTFeUzzwh21Z7PVAKoyw4ahP",
  "key10": "5LRSuJZeAJQEFX2qbKtgVnNXhdAaFrem8EXA8sH3DeBg364d6JFgKKVB5P1usENp73kt45bHe6opjAmbdhpmFAAh",
  "key11": "4etAJkkA64ebcjx9YtGJNitQvE3Bmmy4NuSZ7WvxQ51QHjuuRzWtRFpeyMbgwuB3f7FPdccVrrmmoF8JnBNmcbZb",
  "key12": "2fk2WafCLMB8PvzqF2N99swmz5hbFW7Bfk5cDdSMbbZQtbikv4bqEuUy6JooLRrn5GsMBNofZB6kso1n7oHpwXct",
  "key13": "2JucGFzhGxb8yLSbL68hmc4kHSS5aqhceVZFGcGTTeCCChLDbFNk3ayCgCAgPwPC5qZUrswcj9PD2uYSJMgAopCr",
  "key14": "2hEYvDaczJ1pfPZomnbSqqpdHem1M5cUvy4YWQfG9e1MyekYu1wS2xu4zfGu1rWBCdf5A48c32sjo8JReHMkggR7",
  "key15": "25jP8L3bLqjabPAUJXX5b8jPcP6ZgV8JjwrM7VU7P6ngBxDGcX7H6gFHKVFrEeHz37NBZk2dEHJ2RkWCbbAgnSTi",
  "key16": "2qDjS7mYcfaqkydtpm4odhBLdP1yaBeY5wr1XoNgF363VfUzuHmDPCKFm3VeZwKjsU1iEimy9wRvtVoN6c7XgDcZ",
  "key17": "efwxpHPJKTKQEiVY4vGWAtpteYEzG8sW7sH55ey7ve8sni5xuebP97W4CNeqU3L1bM9CCShHdPEJWFJZECLewhB",
  "key18": "5UN2TfBSM93gXLXyBUhpgiZC1psQ1UAHypVKfRU17ocfhac25jBmMtDPYpUxRR2NULSHgVisT691BQRYRpfZmAWh",
  "key19": "3uQw3bxYpT3k7zaCjCwePPbweiLNHhMDDyGjUT25ikwewTntsjRvcAJoEigB5bCZaVknbC69hD1XaQTVk8RcGuBA",
  "key20": "2XZ6zqCgqZT6zgdqSeveqf6kCaF7tkXZqQ4oKBboe7cy7mk1rQCLS8N1EQMfxLD18Sjbps1s9Yt5AWGREMs58iyZ",
  "key21": "4AWH3nqhuo38nEMTue6xeguNxGR7NJK2sGtLE7YPhvEdmkPbsVHBPvYkzCRFMc74Wsta7Y6ct2oDQMb63spQ3WRh",
  "key22": "1j5JFDQ3ZsTnJRpEUX7oryUrw1CFMyvGXgoCAms2kKJ8b27zV38rhiYJF73UcZ24513zHoxAbJrdMo69KyfpALp",
  "key23": "eoSYpBokWecvz4QbDrtRDm6iEgSjw33iEUTxoUY7XiJD7ZyJPTX9AnW524oWAiXQwSfHR5gbzeYmRwnomgyzDUo",
  "key24": "5nJVv5JBVpv1Dia2TNGYiwMRHtwoWKfxPm3eKuafuAz4J4HZr5GhLdMZP4gQZiNuR95A1SKPCuKvf8TwY2F5exmZ",
  "key25": "3BTu4o93D5cxUdLjdQ4543GkifmJHYW3BDuAorDTbDAt9zcGngWUg3xtANxjLXhoducs4M9MvUWMoE8Xpj5y3xRS",
  "key26": "41abNQj5g25uJkW8d39CDRQvJcCVHRLTZsY2FMjekmyk3cb9QdfSM68jec4ui1zNCbVNcVZLHvasnXSUa9fbYaAr",
  "key27": "4Gz6uswjF9EtPXvD21mW9GMpGi1oBaCfCxLZGV67fPbh6PwGs6RyQPcGXQiqdNJk46yseB25jW9q5Cc8uVPVmub5",
  "key28": "2rMrmkKZTWmo4g8zqFkKXQkpwnN7xNRaPqCgcXcxhgjYLnh76x4gy11vzFSxtJqUo6bKPRUCLPidPyA5S2nz1kkA",
  "key29": "4S56dciaywocdVacmmLPa3t7tvghCSav8FFVbbabJJMNTDUCVLtMbrkt53YXQEpH75HFYhNFEcUtM3oi2b4aFrk2",
  "key30": "gcvH6Ym7wKTdBg4EpgnkAzNcXgp9RBVWn8SpRzgQq5qgPwDhccb4ehY8skaPERHqJU2rgjkPz69Ec4KHZqrB4Y8",
  "key31": "3Bocwqs3xEDaAKcWzQyGBNA86xuJggTxKjz25T1YRLHkeWKRQXysJu3jBPyzqfvbSDPNKnrAEYFPnFLSssvNyQJv",
  "key32": "2Hqp9CcBFBMM6B8dn8DKSVA1tKNLLsFqUnu4hj5p5sk5vTueom9ByVqeRVrFs9SS1zoUz9ohcEnyEEykviQe1DsJ"
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
