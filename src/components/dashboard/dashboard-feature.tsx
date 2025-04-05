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
    "2Lfo65KiK7ijddgCvWq9bztXseSGi1yE3xv22Gg8M3keohioWnyhsv1awg3s79p914GreoNw3P41oEoVaFNGTaXT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5BzCqWRJiJFWvvGc8nCGKHZxTaHEFrKNFjPE1FFayQYvNhbtcsytfqRHijGYYPLoxxTGxX2jk8shwpfP1FHUcRAo",
  "key1": "5NfLikNLxeJH7V1VDrnY8dpneTBDFSWQBipgDEyiqx4acAbVoiaamSzZfT6JzHVDGTzeNtbBJ6rWPHNftRR3esrg",
  "key2": "2wvzMNC1is6JMGy3gJw4oXnRUGDAnDp9rTULVPvH9PkrTm7HkFkC6d7NZmpoZZ5VXBWnsjmBkWqKMVi4jbtQw3AT",
  "key3": "4mmRS7wzSzN8gYQDeK3jr8gaqpHESgZGtyifnGrNRL5q437w5Dq6T62DeLipdnvzaohskpiWZhLDCjg6Beo1huXG",
  "key4": "5Y4aPRZV9X2e1mRrG7sQTCXXS1dqUCpfJq86QgE3rwvY5zRpk465QKpwaGxozb6pcjC1mmH1NHWg9nqwceRXXhLi",
  "key5": "2hqLmSkKdJJmu8zBSdwTCxEtnBMvsHdHM2nkREyZh8X7jbKhYrCYaEmHzv8mwCZSJ4yzoZZgMe7jMbVgysdCj5pa",
  "key6": "3A5CcrCCGb2CvxUuxtMgLNcsW2TvKTDckzxJQPDGHUfLQU7fTXBsYvDBZF2dXem53KDV2dsseTGdwwp9uZHmdZv7",
  "key7": "1FxspLQKkfXj8q9vN6kCRTTUL87xBmchuyAWQLN16LW5x5bcV2uu1YgFLqwwAzGMKaZu7JFap4nwsnz6EXXos4r",
  "key8": "3Mn625FR77S1T9qhU3DwMWWuDUEHqGh8eTZtRSRdZaYpoxuBBF2tkJHjYspwWW17MjAZSLwprL2syVrANKeLLGqv",
  "key9": "HydqkTNP2pDFZU9xbJ1n28L976rN6yizgtLMBWJwFeX38aQbtkc7B7cAcxrro5nUoy7TDSX7qZNirpodo3KvJKn",
  "key10": "MSJf7KnNHD1nDn6HHVbMC55vPMx2ooaLgujdAr9tB8uJF3v32h1E2R6PqF1yqYVDjgFk4r9jMb47ep2vvUNePs6",
  "key11": "bamVZ85sqrXEaLs3iKwq5J54yzyRwBvGp9sWvunqNnzX44Z8bCpt2wL1J9wVXtYGrahLW5Yap1ybfvk17ibomDf",
  "key12": "5HqtnqxW2HF6UMUs3o8mHviL9GgspRW7x7RQyuEeko74FwSCr9BZaV7EmVjqrcncDazM8r17xCCQj7bRvGyZtBAR",
  "key13": "EeM2qnSE469NzbM9gEFeyeeA6DVL1tzG5ztrGHSgDfN4zhRbVzMfBCAAqAo4rdN7tYdKEcRyCtp3xRDWzuE7paf",
  "key14": "28KyGCJET3iSgqpdrHjo67tnJSw9hhura5RrpdFMGmCovgdEmVZac9kzWk8xj2UGoDcs7Ru4XLCynCRV6bR3A6qd",
  "key15": "3EinjaKB1Ld5yCiDBPDjVMKbZECZ9f9Es1KhgYsoobjbUEaZyyhdLPLfs4Y1kpDE5qQjqJwXcVUaHgUW6df2ypBF",
  "key16": "ee3T7SkKMND9GU2FH9zJ8eJPjFkAcqamyBtzdKfzZMsjMYe5L1chkhcVC25z6jd4Jxx3JfWEBpeBdbeYfpiFJwz",
  "key17": "teedxktcvVLfja29LAxYtp47YV5DH54TDPHm9yYtMyAEUr2F7gFcw6SQdRScKREjrG1TGMxRDzSh3AsNc9YugtF",
  "key18": "48j2m6rqFM8v3GKJ667AiuQdSKrJQTqxguX2v6MjRaaUtwkfzNgLSiTk1x54mVWJsUemV9sKVLHA8TCkTkvjqXYu",
  "key19": "sCjG9o9RhqRf9ZvRouKKsDcXDZjMNiGNaSpUSHW5eWKZsEunY96FTad4JqAFmx797XwkjxbyGbQpBYL2PWe8oxZ",
  "key20": "5unFY4YjyTSFmrhnU5aAcuKRcfqRikdeyAXBU8TTqfg7y6kaNiMGU7gLD1ANnyMA6oJeb7njZ4MgHHpeeBkaNNEX",
  "key21": "3i7KZEWRU3gezQnEUwFZD3d5PQozEQF13WJ1UwmrGMjsuHZmXYGJU3RuvxggQnp4DdKshiQXoUadEkRSJDKu7AZ6",
  "key22": "2WsvQf1nr7NkroGvprDSpPZAtaa8joKXzbieN2LmHNTDmk7D4Xy5utirYad7JrL77DLfEHoSGCkGC3nL61ZzA92z",
  "key23": "ksLon577j3XPUZ8qQjrbgjZJ1YYdrqfuRE9vUBgibRHDij1AUmXtTYgeiBwUhUkc8RVqS4pMa3TxgMpgmzXyfZu",
  "key24": "5t1XXHdHcWkW3pgpBc4nqYzksVthMQzdiCcvnCLMk79steJ5dZHAC63WrazM1Yv8E3yHCBnarAz8SKGY4AJKmDyR",
  "key25": "33GK2cHJhdgQAD4g2mjCsBYdJwzNw2jFdN9Xc7oNQeQFVLr2CvbVR1QvP9JuHeBomdqVZ1LXKgpDBgKZisHwnz61",
  "key26": "3cGZNefZ5joCfEiDSEnntgXbUmpUPeRxwXhoFeUcrPVyEYHUm4oq1aoVEQWgHWxYggGgEWPGLzCt4d5gF1TBkgAo",
  "key27": "24Qnr5AZc3csM5Gxdiw3pqYAovQC7kt9VduiEn8t8me5nBjE8F4u18X2yrBwKxQLo9eY459ZN2FFL3BHPdPvdqqK",
  "key28": "4R5eyFpz6aGcwjM3avHrQdrr8XfozECRxS5t6VMWgkjf3vQRyqB2yBZEDecYNUaUa6SwTKaV4JDAEr9XC5Nb8MAb",
  "key29": "3wAQQ2oNfs8bSad1d6hRLGBiYsArqmdydSm6t1KWEpyjuLa1RtpZSYH1Bdieu2XCLBjtqsUw2wSVnscbDZL6fpcr",
  "key30": "2MmvGawNRtx5cew6CxwkmyYDcy41sEk7TTbhw2bxYewMA5qqK7aCDtFbErBcPRnyc64Twdfy4frnowSDw1Vq1ZGW",
  "key31": "4T1bZYkFxZqXkm3r1AbAaqGms5xS78z2m9GdwioT2KmfcWTJ4ebePMgYnCiCJoMTnE3iXBhQY2qqGQuFcUZyrsFp",
  "key32": "2XwFh2sbJEpUEuWwkkuDNpC93uLxTWK93ZtWtrAtaiKawBrpx5uGu8vgLkkppdc1tEzy9g1wECXCuxr81RpZGN8u",
  "key33": "4unvaJgidwaZLvVeaUKb8oNBeX2jx2SdznxGN2EtjCDXWxJw51JMb4opE24DEtyXez7sZVp3pfv7SjG25RRHpcBT",
  "key34": "3ch1PWVD85nuM8xgJGGyq5BgEYDkcB9fWUfoxSnihWvw6cMcirbYytXggCmYREbnt4iZZE71Hk3pr49pNfxDhTeU",
  "key35": "2AjU3NfV34bvibZUL7gs9mc1uwTNoSnvkhXarmZb23gfnyorMv16bzZy2ETa2CxUWSqisCiPS65LvWaxzdAL7Wyf",
  "key36": "3gkQrG3kzJnV3Hi79Mrme41ZgFSEznf15HPWth4WGNQTKeNY1RKGFS6y5wj3uE5oLroAQtGrM5UE63pQCyVW4vvK"
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
