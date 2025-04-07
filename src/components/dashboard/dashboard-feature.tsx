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
    "35r8nVWnzSFGWoVWvKZdBV1hgxcLYkoynk8MRgnhxqhuTooHkW4FmTZ2Wjs8oXA55FhgVMMECEScQ2wPm4N8J3uB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3daKkiX9CUzZx5cYwbiPsYwc2BsTk8Zc1Jfopasdu2e2rRqB7LgAXgZh3xLauPGBEooiFjQXRW1gXBmJw1dSRreE",
  "key1": "2A2y1YfLbm7kC1Me841R2eWtUfM99P8DwPWURjMoj2pWEEUHzJHBGwRgwRP3KTGtrxc1YXUtbdFEe3bxkHm7KmWa",
  "key2": "5HcyShd7eyf2h49ffHDfGzEgGWLGGBACYW3rBcP1dQFPFh2Rn7hckLz2Mt3LbdGuzbqAaJJ7DeJ8FZs7JAFYnqGh",
  "key3": "E2aVt2uzLFbPsUdu6FP2ovNEkEWfEDAevahn3pQ3rUvrvTAkrRidUttBJjgjLd1izUd4gPw6Sgx4KMSVgZj34Ju",
  "key4": "4Gkv5KW7q6PYdnwLjWuymphjTYZWXFApUQM2oxDeYucYBFAucs4JUqch4EpWYE45iQuKNguwoB9qk6LLiDvBVywq",
  "key5": "2pei9M6cCyKdwL8AukqqkFE4P7kCyK9JUHAx753S2AhmT92w4r9kBw8DEk5zPBRW32SGWcqNzpSbFM54eFGsaW5z",
  "key6": "52dWu79NfzcQgUuNcGMQUEeyzVTeoYEddHj8wBBF3xTHofMELH1f6TUvDTiiQkGBfx2dC6haq1NFj9erSWzkJtfF",
  "key7": "5hJHvuCnhM1B1tL8pM1vLrJHznQLGf9o2ukCfW9gTgccSyA1nyyUM1EhHdUoniAd2YCjrefESM16vZcauTJDuPsF",
  "key8": "5ugLx2vAiEJ3aXPcuq2jjn2Mna6wdVni1dsWarnGjVo1FJR5SPoeMVVXHvPfA1DRP8JMbJRVjn64QZBKCfqPGAT3",
  "key9": "4fD1yRZnbkRwCS3xWmNDLsv3UgbKA9BnjDfUqr2ErhR79Y9TxJHKyFfeKBWvfEJSMaiqQuQaV4mXj7QaQK9JiV9A",
  "key10": "5SXCnJAHgc1mG7k39FxWmqVCNNjWa37tcurKbFrgy7YcQrxZX1tjMPp2r9yeS2ps6hwCav3ZTbrQ4bnw6zKb4bUp",
  "key11": "3M7eeyxnDQVRqup74A4M4ZZxnJhv3pc3CvbTuVtcSdfKgUFcHDviiXoC6SgWGVLMrepn1bs7gotG5RyZLWGxMy2e",
  "key12": "2LxWmzSBXjRxMwwxUtjYeVLxXe9Yaquw2FBh9L6uyxBrhrHcxQbotTsHKfyriKUNpEqMYrNERNkxBLcFQqUrMNzZ",
  "key13": "2xffUPZsnewfXp4dpPhYtJoEWrq4vzV9gJvCekPXDgMnfi6rzvrmz5ZhZLtGAgShtB1qKNtG55sBX7noS92s2KdS",
  "key14": "52PfHyKLc77NiQxHZJFFeMHpFhcPHmhTFMzqLcCXBZTvYR94M2ukW61qa89LLaKxfQKbri2Yx1NyL5QiRVTLVyEb",
  "key15": "55Ef7HFoM8j79oKKgLxQfJcEpiGouzbCP2cZYh8CkqnqcQU3WUoTBpbrsGnuAa9tgt8piJd3RU28ikDYsb5E5bhx",
  "key16": "5WtrZJ7DBQEcYuXo4vz1ycMvT8T18PnQbVYQRGR1JBWpfXMkTcFnhGzCLJBBPev33WocRjrJNqRFWtDwmKrkwmiW",
  "key17": "5ZR73kTj1VZ95BK4TEgNuvHQCqR98xWJnWSqyseAD7zvQnSzom5YshfYiEfh7mUgvEq4rNv9C4UroPYcaoYDSdMX",
  "key18": "5X3yhtNb8dDaAN8uDTJwhD2JE4cHnurbY46TMneYUmSM99mYBVubVNDi1Z5t6ESCMTFanbWHBY3Ga8EJttLjQLMK",
  "key19": "43USvvuNUpk3SzhBK5WeZVCJNA6M68RNh9CL1kbn41a4cDZj8BDRaaF3ZELCf9aXCP2ZbsKsbmDdsmKTGNZS6eez",
  "key20": "Ecvj3WRnDSAs4af5XAwJCffNRTPenhD8o3WuyAamoFaQmuXj9ZiemEeDHGsEJfuBpSSNpcNaxtFwyk9ZZWagF4J",
  "key21": "adXDYhQL8D68vpEVhbPkAmVYYbJMSNxvHTMEegM3jJGPEd6dM6aQAUywvK7ZSUFUbmyGUuCM7VEUm32bizRSLkh",
  "key22": "51FacMsYPSgD9BDqyyJHkwLHzb7rCK4gAXBG2GzpHmQrfj8mfo2UrH6cHU5tHuFhmjN8XvXNVDcJadqJAGx7HKmv",
  "key23": "wSphZBxa1XtJugHeoyfEJ8okCyU3mqoYSvzXAMX4C4cu5daHRCZ8x6wrGWjALrWPbidnQSykpyTfudHk4bWPmD5",
  "key24": "37XW5X1NMwSUf2CubqT7KzibLJLbjUHuXGVmdtwp6wkyS7yEzmA8qKWMYoNeg3eJyfNakcXMkfS6UcwAEQAMZgyb",
  "key25": "5EbakUxuNNHMh4sXDwtxrVj7BwhQTdqve7Gx2BrYEvqfZDRAiF3YaLEBFJcScWgdHxFhCHn6Lk2t6SHFwS7AuAXk",
  "key26": "3wJXZbELmbrTEueTjnsquDnxQ2GgFU3eKPcSeHr4dw1VdTHXx27ZMRqMWP4nzfBJxYDsz9Rb2JaqtLjaSwBfP3pz",
  "key27": "3Rs2QSkvuv21oVKQnRnrn6tfKFg9mW5aHg3Qs2HFDVGJPeU4tDETcE3wG3B6bdDqWCAQffZQmJxx87LbsK9frGU",
  "key28": "uMGi62YjBoKn8aRD3XtRkUYcSNbsA8fFbxH9y5NJ2ryDpXGhYhxof44XBkGy3h6xp2YvFrUe7YNd7NLsJqjLdA9",
  "key29": "MFdS4kYpC3ygCvwS9grDVEy7K9zFfxbcwR5oGc7v2Q1ng5XbQXYBqBNJ7k3bCrezcUpXJ8qgkARTq3zs1drknri"
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
