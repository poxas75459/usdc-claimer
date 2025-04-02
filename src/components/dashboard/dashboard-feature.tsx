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
    "5EDNepqiRWt2vieVVVtjNamJXmdMtLbUWy8S358y4A7JvwwVGnPVfdmiNrGberx5fQmDg13nGRDhh6WkXxm7CmEi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5oj3MDVLWSmcArK6Kbm9yPdzwWXMt6sz5LPSKbPdvMhfXTQpGSdZnfZa8qFEdGnHReu4qCjKVZpo4NLyXERp3b5g",
  "key1": "5mHgY4w6p2X6FkGeWHLwBGSVos7m8sZX7zHHwtqpdAwwirXcNJmbAVKKGxBYF18tg7VEXTNGRB6ck1uvimzU1wLR",
  "key2": "3Ag9EZhAGja9YtNRz7KgczfXfUDTnuYx45qPbDWcUHHbQApspLhJJtztHBteSULemQFZhndELvmSWjjjFr96pSqi",
  "key3": "38BF7eqnaVA4QerpFUkGjyVYS6fdNTzqDH97tFTiXS2FS7cPNFPbXL5WjNy35WdaqTTp238SycqiTPo85kG2xR2G",
  "key4": "WQWkb8rDk7KmPAH3NGtks3ZsMQHgvzHe3MhNS8RdhJ7QqcVQMYfjsy5gywsAJCW9T7XDb9AQtfry6agKMncfzfJ",
  "key5": "HZ5ettDDm8RN6A8YpLnohNFfhAtPNzu4XrLRaMd4uuwpwbowHUpAeTbA5PoDV6hGYhkPQfTpoMozsncHDpohfUS",
  "key6": "2rbgHwtfwe2mgtbkX7rrC9FPEtL7bnVss2bDDzqZMTTWcigoJ8ukfoNC2AwnSMZGSbpzAyxrAx6yt3rkUDGy7fgR",
  "key7": "3MR6SDSKBWHb78uXFA8uZYy1uhv82AiPVuuhMicW6UNgVQocAZYHSrbRLTa5AUVGg7Rc5NHGkam8bMB66RGukGXQ",
  "key8": "3vPRjP1WQSxbQyrzM28dVM2Gg6mfTfeBTYhBJoTuTcNRnJYGXfpEFmQdLjNEZ3bfWrzBWS1rA8SMUxAsT6MJZZMV",
  "key9": "5Vf3DSeMEN31AddLhEVEEvPCVbFbeu59CJkJqdwaxy8cLGiQuBrGemqnF69H9ftwnHpgiiVaJj9jr5urZazjyQcv",
  "key10": "5ZWUsREiV9s3e1sZKhUNdqjo7ductzP9zuJgtMqwtCY3VXuJXi8xPDCy6XGhpcg5mH2VfN5tRMSCPx9b5rRCsbEC",
  "key11": "35WHQXwNJVPm8LmrbwSY7vs5zyaxP8tL7K3vpVMg6uoQZ7Et4mszZSnf3hxFeUCXmePHtzuzrCd7m7GpEcVMJ9cn",
  "key12": "2pKH5YnFc4R1JDN627ZSSXdfr5ZHHCGeWo7Vh4pqMGJ21zGKupqsnyUQRYY9hVSwMGwzRaT9TDShmgxMRPiaBdC5",
  "key13": "4fBvKr7UaUHiA5MThUQx2MjL6CWC15GbjK5iDuTGZT7RZqziTgJVQzoZhcz6ryhPn5PbeRwR43k4VvAtHn2T36VL",
  "key14": "4oxCrVvSVaa4k916qMPBomNn9U3vB12TDPpXZkfRiwySXiLfWx7XM2PokUnxgCjLjyJuG4kLrUet8KhEzeymWDfK",
  "key15": "hnvPWj26ggiQdauYePKitK96T6Y4i8zsPe6MpKucu4g3i7XeSabfVBDHM7K5Uf4gnuRtnvFaSq8t8bBLS1cXFwC",
  "key16": "2RkUEfeRoWGJrHZH1rKB4gNM513yv8E3uqGq6UEL8fJxYVgckA95tYjuYqy4LdArHSU8RYX4x8oL9v6gYzu1j55",
  "key17": "dz5a616yajrKWtJh1ANEEdb6H5jQQUwwCUrBQHAJkeqPnh3qwr2ffQr2JKcG5h2eLz91M1erSsEUREHfuFQUQkm",
  "key18": "3zsviifQzHZahM6YP6dQqkn4MAKaqjdSJie3AKCwFpf7HPQyVyM6DpDjaHQj3F9HYgkB4T8gHAgNXQ4486G5pnJy",
  "key19": "L7mmqmtEnyzhb6EZiCwG78ykjr2SoPM9LssFg3LYvHAZqzRTopF77FAwPkaCKgMDDBQEZq6cxfBZBeNNB4hNRZk",
  "key20": "3hv37ARKwTuYgMbKVNeFtVPHTFAvXHc7CsweYrQ46ggr9wd9WDronGLotUQXxGSFPtsJJ3Wh5REHB8cqaRfz6MLE",
  "key21": "2yny1zdwLvhQmGEhX45vC9XYpAHdwBP9ijbep6iRw4TegLW1u7oDngKmZLXXPsVgwLSP7sgzxG1VXw5s2LPhC14x",
  "key22": "2XgbLqvdfyTkZwSxAuc9kQHrvDvR4rnqwgQ5oaSeymqn5eNGzGuh9DijfM9Xhmfft9Jjw73Vh7b4K4uBEQbpCUE",
  "key23": "3Z4oocyGCaHVGY8wBiwhk2t5py6ZrSDVrb2RSyJAEv9G4bL29GBPEjfWHX27MqWXjr2KZhQbX1hSJvmBnpk3aHkp",
  "key24": "2pAun7fceeTb9zWF4fDWqH49XyvwAeQFPbbxR6cZJNraXphDDVjdBTXC5C29ZJ2oqegVVC3xhztvBu86riUoFVka",
  "key25": "2hNgmei4CfK4rYYYM27Xs5ctjpynZieBwsQt6V5f4UwFMqttU4x5vEwk2V8Tz3gyV35Zfobj2ccSVjYa9AU5uWgo",
  "key26": "22zupub2v3ZUBuH15SHnBMHBHv6hLGKgEBKNpUaDTfrmDR3k1eV4VHu2SGMh4fxCiTmStC4AKmrro6JSqjPAUbcX",
  "key27": "2f1DELEYPmeuzZxWVackdP9neSuuZuAkU2AadiihCDdxgDGWTqSajipxPGupKJ3NiwpceeABQHWudgLGhtC8i9Z5",
  "key28": "iLhdyQbRobeimyK9kCaV6yReGuXaKcBeNEwnVoEZh4DKoDfdq88RRe4T9QdTtaZ4quPpp4RQSyxWFhW2xSvhd71",
  "key29": "3S7zbDLCuQXMZ5jmN7Ly2JRAn3dwGvKR8J5UwHKwbvG39W1jmgz1VLP69aVdxGWTgqeN5gcjbmcLHbfp4mNEZkQD",
  "key30": "kb912nVQ37V8JHH798oF4DSUdRYpv4QmsN5sPXLqBwaqqkFGJGuiP2RaMmMwfyxGhaAUJ4pwnZNdbZtKL8Z2FXk",
  "key31": "23n4MjE8dTpHcXTkYLKKXdaBqyt8FSGHd6cNcY3CYUoMWtm2zrDzKsf6z8baxagEFdgMvhq2WzdURHtpkTwSNyBz",
  "key32": "CHmgK7RhLdhumwwhWcdsHuj1Pb9wnVSf72ZyfkYSsDio7oxmTgnu8VYHvnAjL19UHvgVSk4smZLap6MvnTdmjmW",
  "key33": "4VKfC3yvr5ZJb5LwB4V8qhhVZx9Nv6bEdCkwzMdQuefwAnG4S6iJX7mSRvsX6q7RaDc8sJ2xqAKyECNVJZRiv2XW",
  "key34": "2hkzyD7WUMipKT4vwZ4KACiE4K2WjGeJUPu2ufc51nL9npF5LeqBzhyNSHSfubqyzLEkq5ZecfX8GykrQx8s7JFv",
  "key35": "3CXkrbX8xEH6xeStsyS7NRSsRvsar9aNJcTvRbPanse13Mzxab2TkUBWNthZgzFocyv4qgyZLx85fQGfXCA58PRk",
  "key36": "3m78nYuVYq9jHEkHZc4EMZwJDKqFNtQSrEUswnsqNb9ijPULqydYXYXG9ZDK9u1ziT3ZTmvZQXgHP1zkmDtd1ho6",
  "key37": "4rLtSr2ywsC51pD4Cziz4KijRpNe1pjCJmR8JBL1MmMKfphDGYL73E2GofmWGTCmnLidvvpGNoYCPMCou1vitvn3"
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
