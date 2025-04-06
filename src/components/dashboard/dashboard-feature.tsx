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
    "NkqbfhXJFNYsRGxsuSnjMJsdTZah8DHu5d16iQ4haefUbg1yu1VDU5PDvd3cjZsdc9ijuFwZVyRcwS9YQYk8GeL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4A6ZZBjm1mgNe65qPzNQ3BxQCUF5zzMck9VXotqvSEEC5WTKDzzypLNGawrj4nJppvayoNnRR1RzDAX9QM7bYmXD",
  "key1": "2Njuiob5Lhk16zrnpFc7tLmu1aAAg8FaaUPe1b5BNJo5GJHfu6ggRTQxPV3XSN33JoBz5DFyh3grD7ku21pzrL2q",
  "key2": "2hvVMk6u91GqrNeZcCvZ2bdYczs99S4KsB93xRbJo2xxVXNCGfFToP6eqNXrABYZdKqodEBViyc7dhmCDfXya6ez",
  "key3": "2KwyXLetE8XUiHBGdQwNK9e1RUNjAGPAep8DA1PYLJZ8FdpqXFagatFQjsMor18phcBtY69VkEXenVXyzFnaXr5X",
  "key4": "2dSbPgbDk5cXMjouzz3NNXbeK1VNa9f5eyVHYmvbuKuNiwB4vB39raVTAX72GBEk6BguNt85dGhSioRvrMPUK6aK",
  "key5": "2cdD76oX326byE4RNv8gccLB9qHBbMEBswHPxdmNiQn5x5cH9FJp2mqvoaMWGtH7T1v4BQBDwAMEhjEk1aqbsHng",
  "key6": "47EaHZHqmJ3ys8zvPES1NxtbHTqWDnBWquKipNeRaeTPhxwje8V9yHUgjVxrWSz61iwVu8GTYXXYzsjHDcDkVD1F",
  "key7": "5mqDygWJLZH8rwLL2UVkgWQa1j5bPpts5QjJhtSg5joQK9aYezr7rTm1jC3F6dqgwiD33DTvq4qwPxPVe7CSVMvv",
  "key8": "4E4JL6GjFACKrxaiHYCyhmtBJfuCVR6d89wB8xj5cJAeJCnkQXUVfbnAxzSU4LPuU3Zkz3ceW7szQu2updBq8CFU",
  "key9": "2xpgXZynV3HipdzmEfpcpGtpiTGay1E8iRufCnpHmLvvkEJVukFxneGccNYSqc65EjVt35PgZP2wtPL42VWrUBwS",
  "key10": "3BoGzhLDx6NHPRzobX6J5Tor9NnhEDP8YwavHeKwtYLQ7NTujdZUKYHsSRe3eHYU2SWyeGbLZKhNybnAjgKy44hm",
  "key11": "4dpspmfofzes8momkt8wi4pwMw8Dj871vcHhtXerBgrW4dKBe3EfgMtaYT4qDQ35wVDkp6jiF1HJmcmHtp8c1ApG",
  "key12": "3xw2ZWcFp2rx9idPzhf95dhZinawh1Xdd5Gq6r7oVJZg9bBnGUF1os4KBd4Emv4r2C3vRVMXUsKR4rwB2ebbaKLb",
  "key13": "5iZxAhK7S1hV9bXC6oiywHQqSpVvUivgWQtDMSGMhFSXUFFJRY3XL4VP3Zbyiuau8GqjB3w7qXXfvA8F5bqN1oJJ",
  "key14": "5U84uMMXzXaiXx3bRmAKrnR25tdeXUatLxHeg28ovFFwPLZnMuj796Wq4CfVi3vAE5rovSatBPPLwyquzW2dmKuS",
  "key15": "4eTdXDP5Ya9eSnGSsVtfvPnP2QKe8fhWcrnuN6A8RMgcXbFR7GQVdbxnXbdvc3mRdvLMVG2Hd9eq4GpHg2mQ3ZtP",
  "key16": "2zFUmvxCx2Hk7ujcdMs8AK86mSu2Yvv1znjBwNdtT3GqqVUM7BbzsqiQsd6X5fAatAm4t6moj6jsA3GgSTb13ev9",
  "key17": "4hTEndxCaQvkXE5AAmiBBah8iqfw2p9zMqkFNpjQRk38XsHcQC2G5ymy2YfNqEeRHkjCpVXEPxqhjWL24X2tZdc3",
  "key18": "gTeH2ucgu9khM34ySaAwAkaZyU3azSszsPQkXqFFecwdnk8Nj8GEur7CxDUxZ5tBDU8K6JDttKaQDVVXaUotX5V",
  "key19": "3nahv7bTa1kBNSPWMkicJmQJHdX1VABk3wNnkgNFkgW61ZkvxaU9RTvrzY1EcrYtT7w49xyv9TPi8tknrBdAyZCe",
  "key20": "5cGRjsM9S9bBRsi1xkai2hZjM7cF8xcoNCXmpFmP4Gqh9ZT9KQ7715UZNy3SdugzjBpvNL2vJezVQ3ziRBizZ9wH",
  "key21": "3VwHoEzjjjGy7rmx9dPy5buaSCmPPsZnui8bmyutUrsjhbfm1VbdFGw4ZZBUWPcNxhmbVdmqhiTGVzvV2mCwipPR",
  "key22": "5mQJr5zfHkPjUgsrKXTXroGEPAzpRVfHciC9Q7uTdEHD2N33FaerJ7UeRpZoMS2kNUSso1hjD83MYQSv9bQdpPEv",
  "key23": "46R1ixzDwAq5Vn7M4kE4dAdtkhdUe2UkgMUpSdjwjGteZxYkqCccX6sj2f1g4Bs6BQcWmhg1oZ54yYmDRH63BXh4",
  "key24": "5ZFgM5nzPeaAL32EvnAocwgGJduBxsnx4ASLJ7G28viSd5UrBg5PbmdaFu6GmRR7Bfpg5A8hnzjf7jhfGkBkxPU9",
  "key25": "snc8gFM7iWNh5Go33xuXZXTguXWC8WdyqMhwe5WeHVGcF1NzVZ98XmSVBrXaF2x8JQvpfVj1vn4wUSuk9PRY38X",
  "key26": "5vHhVJ7bXiJjGbcCmGzcAJU2dpAWutPJAGBat7EWXf4PjnKFRtPR7wWPYY4D72Grpgpwwcb9RVvsoqTtvf6F1VhA",
  "key27": "5yn5YU6aSZtRM9zpv86SRDXMFRB8AA82T2tRN5RtssiWnP1E2ZtCQ3v2gb4AuypjcZfj7jgRMboyKifco3ZC46Qw",
  "key28": "5dnFcounF8FTApFE1caqCtuuBSP39qbYJpAq2uKS6GuATxcmzPSfDwspAFJuJakE597iUwzfoQBfnRWbNKXJQbut",
  "key29": "52tWFWQXiquvcCoBHC7sNpSgioRVcHD5M3sjpQXznq2DDZq4cUjR4WwswUtDEQU7df8wFCzZwnQ74bzS6FCBvruq",
  "key30": "Vtf1f5N8imKCLLmofddmtBpbneRwRoinC1BH556JsXUcC7okGNw9AsbQ6WFE5ccJeBJQ2qkNYrKW3aa7wRBbGaK",
  "key31": "5BK7YcC7ZCrPVgkZzSv9ZxMsKJ18P1LuM2ouDWXFqXJ47mUxuri38ViVTDfzMiWn6RSzyjuEZ6k1EGWcL5sRFpEZ",
  "key32": "2M8E5Ucja2N2exJ4WBMn1dPhSkLh1v5XZN3BquLTgyqbZVKMxxcjFcoT8hNFRcx7z3v7WkTqD1qPpd2d3ifoZ3TS",
  "key33": "4RXG41puhLDGhD3D2a1wXZZKt8RgrKMg8W45ry9VtS47HjqTwvcVaD4qRd19SXfB7zy41pDPDGGX1CZW3sCxRFPs",
  "key34": "4afUXeY2xtzDEoo8kJaMsaXzu4oQuwpfSBP8QmKJeQgg8egJxCgsW4hpZzvGgXsaHXwb3XXAUUjEcTMiVHoxZPLA",
  "key35": "5UX8thZiTk6FJH6Pzb2ehdHLKQ24gnuXFwLxeNemhdiG7iX7YSaSZk2x1UmjNcKwMozx8uo1E8wv6LhR4VtGhRuM",
  "key36": "5fuZr6aJFw5ZxQtrFjGanyQMKEmfoGRSwDuWcDbvyKQDTZkmKsxHgYjmkHAkgNy5wdNnbiSEVSwcptoMJoEkfZAD",
  "key37": "4jmSPWfELWn7FDPd7BiNLrECMQj8tXW2FgkvHbMHAnpBv5C4BBhLws7LYSYTqw6LxxN7RDpkyEzGt1dp7ZuBAZZQ",
  "key38": "58zomSW81nTZn3R8WYTNkAavBGVxtiZdMM3m7wyytHGdufhruHpMptGFm323ScKApPK17mMLD2P94VKioNizg6zz",
  "key39": "2RytB9ZsychF2z7FfQG2tDDnHYow6vhiDHuWZfu1nuT3sXwEudFCrbzvA96h1QxBQ3jTmcxdiupQQ8Swv2nQ2UwH",
  "key40": "66fF6eyvJWrBiJZxC9G33FXcT23Pq5qxhCoeGkuD3xHEZifYz2NTTHSGsPWc82NhnvbgEHtXmp4dAyG1Zjao4NMU",
  "key41": "8Dq3RkuQHX1qUCiBU56nMch72E5VcLWC5F7XfTCoYMbCwXEyzCa8WwHiMQsLKrUzqK1cCaTvESy1Vr2bSb2dNsx",
  "key42": "43eNYHxgGfKJ4oafh4VC9X9Z6c9x55yXuZxLiCg9qrWdFCEHJtoDXTovGEaPTTiGjd6bX2wGz9HExmLD1isK7cXy",
  "key43": "27C56z3cfMp94xKDHT2BhtUEk9yHQArW3JsZWzBHah2reQGhZaqDEnCsWVu7jiwJpeaxyKyf5Kx4DLtHcf7HKjoE",
  "key44": "exTinWJLXHsfhD5RyBe6r7uyZgixWmGYkD9wt5vvcGd7XEDkZEkDfW8W6p9XFRrNTWfseN7kyAxUGwdKUmiVg8p",
  "key45": "4WpcC13yLd71yEXfRPVaTNZQaxHNdcwNoMLR4WQkaY74cmjGafsiAFj7GGmMjTEZQSUfTckCsGp71qyX195SP6XN",
  "key46": "4wSsA7FQT8S2dtzGwRd4cHBdX5xsSJbhGj5WkmoB2XszKcjokUcwV2c3Jpem11FLLWhc6yuuXBzsNcUBnrnRDtqM"
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
