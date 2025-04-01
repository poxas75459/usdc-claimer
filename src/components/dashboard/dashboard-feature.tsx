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
    "GVrq4rVeGccsge2R6LNbxdVUEamomjJPRJohdzjSRTs3e5WBTCEbV96PsZBWzCKRafZ75jedMyQtcQmrKxCWiPG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4iNEbUrtyZPoW8dxK9CPdzBNojsZZcFFvKX8BB1EQ4a4PueGRQvnaj81CUkx5sGMSgzAzQMPNuWXo2FkpEPd3Ay7",
  "key1": "3nAPRz7GLyvk1hN7T7pscJQWm854Hj1pentgockw6WvD7wB771owP1nsXseHyrhS5qMCaaQv2hRH1rehnEHQ7FhK",
  "key2": "4ihydDerD9g9TEHMYpRufwR1zjFCGXfuk2tbWgLmQv5xc5DVZ7Ln6ihQ4XQe3Go7VauJ3HnPJqTaZcpSLWgBDTU1",
  "key3": "2fhKFrpTNhHbRD1GLFEaeh7gxH2jmgoFM8Qfqnuj6T5mHkEiQGaY5XhaZamzMvMHRhD84ZfTcsKYxFHsFkrekp7d",
  "key4": "xKr4ruoJCjbfz4kwjQfeC69HoN2XRdyimFs1Ka8AT6ZSZpQFYb3piz2nPMh4s7dWkM31Y3w5zfBuCRLGvasDXr6",
  "key5": "5SaHskZT1D61Uu1kMHFXaKaRR3JvN5QxJrW8uk3ch4y3CzzTnc8yJHmwhCbLehcUiW4yuax8BbDs8mGyp94gUM92",
  "key6": "3dSvwgmJmyFskNcL5ZbDLMwfgx9qv2Qo2mowwgxvY7vuxJLn5iBYWsMmU38F9YGkwotrto5FCYf4aeaqjSR1AMio",
  "key7": "4wXuHGqC2M4ji6goXhbWW4fFaxubmfNVgX1MiCyPcSb9pjhca4h6QhAVsUBAfRPBnhkEqCmgP6PEXXzYGMW3YhkX",
  "key8": "4U7ju5Bp1D1d1v8Bda5bmmmfUwYRpupBTufASYyVZLCkspJ9EEN31i6eosJfyexdR422yCAJ8fCPbUjaMhRck3B2",
  "key9": "3C5cC44vZX4CXY3Nv8xTbmbFrL1XKgUai3jrtBkJrn4fm6zMGSMSFNJ2thpkagPeCaGih3kQ2QciDPe9MfA4j6qj",
  "key10": "3CqvnrsTy9HA8HUW9rpdUSHSs6nkidbVuU9EQDt2124hcDpWqrDMLipkDxHe3q5hfmPLv52uVR8GbHk3RJn6ggW",
  "key11": "3CVv8mswSwQBW4EYpNEBxy9oqiwcwYUvD4x4XSdjEbb3ZaDHLq9Z6YJf41YGm6tbzGMSkyhhnELD6tKMawgThLtZ",
  "key12": "2XuLrRh4VaEB4avgYz1z3JomdM8i78yfLLVLBVawG8JQvuaQVcj2En3PbLMGg6tz8iBjc87E1qeNjbSgVtSosP16",
  "key13": "kDGB4Z4jeBW6M8NWZm9743asj95SbUzfvyC1F3S6HtE4Jj38BhoTvQRkiTKUtfi5E5EJH4BPbzpaJJaody9nK81",
  "key14": "4BDW8ZSMgFWRdPNkooysVm83YnFMb4o7VDkC7vD7TuW69cmgsX7QTrmUK3UgXPbhkHFpu2Qt8BZwkM8rDGpsCJss",
  "key15": "ubZYtkrfREdJCcPB8UDPijV9jp9VMkoHX893UgSmBGpAvqgMbPTwMbrTMJ5SUfAiVQkfVdzhK1XiTn3PKy6EnrN",
  "key16": "25g1L9scMKYHZCw4MJiXG6hUS2GQUpvB8BEYvHzLu9f8u4cAQ3a92VYwLoEVRmtKiuBHorz8VTQHz2RiK7F3dMYk",
  "key17": "2ZLki792BpeURbPF97XvzDk9T38ZQpMf1bzC4r3MsBi6LcEWnEQjEic2h18qwHkm37LmDzbjQ5Ag1CMYuXZK1fsU",
  "key18": "1n5PJN98TYnPV9ocV149N1zhu7tUNB7zuF9ZWeHMi7tVC7JZrLz4brZauFrbzTAxwKLZkLw2SrmtC1pHmq6VCia",
  "key19": "61bugsfwwcZLmQRvXTHV63p1p5AGrC1MfqPt7wYUr6YTpGGPh7qwiaBsVUTyBcfJP5tkwbeWu8nEQd9Xj229PkVc",
  "key20": "8CB6NxCWK6cDoTmGJwwWsGw2igDMbB2ihkqVE34xbqoYQgntDprDJvHXMyCGAKyFKEH2ZZEirgHh9NfDxs4dCFo",
  "key21": "4pC4BUdC5NZdqSi219YcbHFdkjB3TKzerWrAsuJodfHVoBGiHcHNTfxzWfegAPHfsnjEfg3TzP558gVH2TueY6jK",
  "key22": "3dhi3e5mGmyCnVTjSKDbtVcnSqfe4zLCsE12gHE8TkB7A4NwVhey4Xc7Hg6BGjhBEDnELDN2VEhdaRpibhg6NhdV",
  "key23": "Lgqk2YzGhzAkq9H4B3j6bLq8Gy8rVfsXpW5G8nB2myWqnkR1kNbbitE4MYBEM1ZHbuvgMYjgUfXpcWxXf2U3Q1E",
  "key24": "2QGmB9b5mV9HCfUavbR7VVk88poHfQZMK8137fugvA4tzHBtXbkBzSrqw6wnCuTjjsFv7edsDvDCc378LGXmJHwM",
  "key25": "5ZWHANa6qfngVfiN53ndfrKNBNiXLYZuK1qxd9kqC7JVSoF4nR62tfxwXHeAY7LVpWaHEWGzXZqqxTsTFqvXTwdU",
  "key26": "7bkveQpzsK7RuQnJZRgfjoZMsCoYoyUgFrQyreeFao8M1GFU1Z58HpyerXmdNdP95sbe57KgTGEjxH2H6cv2VGB",
  "key27": "67hC7TVbXP2ZW3HW5qnz9W5rZ6kPV8t2P8L73uGXND3uoj6NwrdSPm5b9hp5rCGCkgsKX44QkVj7XySh2cY4kEAU",
  "key28": "5aB4fWa1hviETBV6GXkTKZkBLGXKhtcHi1LkcAPMFwEn6LUphpv4u63bx4wMA68y5JofTepGMEqZfD5CYeMrwgGp",
  "key29": "2H6ftNX8uJQhjk1XAN47phbihrcQZhbYLj96WorNp5Nhb385dAq3oi9tsj1Youe42qAmDuaDL5URTWgjX4KSLDfe",
  "key30": "3s2ZzceVVACNwgMdm2j6AT7o4XGvKRyMaUv6152LgsitFvez1HvD4Rudg76dn3F4uM6w54xppDYVhSyJGS6n4LFr",
  "key31": "PN3VUVios3kTkQYfXJLidmKCctP7PNe6wBrrKJMWdZvom61iToxAsgcQTTFbJDgvSDm6UeAxGUbY387TbJR9Af2",
  "key32": "5wUpXSLrvKQXHw5bcUkXRKFVdiuyBWUj6A41aktRtCoAeM874cXxtSTLm8f33uhBgoh5ynDuoptdVvkbPogXAJAX",
  "key33": "3i8GC1sj6tmarnt8cZtCzSJh3NmDaVE8JJukNZJnx8CgfwhgUaquAU4uCTyK6hv1DPFKUmCawEqpKicomAPYWT7z",
  "key34": "4WJ21dkQJPWdgLMyqvXpGuKkAZFR1S98xDV7gVuj7r5vazyLxURjXqA8B5n4dLmAgFsH4SET2vsZt2PZhiQK2BmW",
  "key35": "3CJbUTMGJhxMnj9nbQCsPZipAPLmQSchPAcpzeuo3hosBFwvpgvjLiC2nvYxtYbaSuVn4v1sdHiZYr9p3mxYDepw",
  "key36": "2SXpe2wXsA64YN7EVDvH6Syey96ycCwcrfG2ZZ6pHoEwiwbTtTZB6tjfzJjyTrSKutuB1HjPwirEXt26d84SNg7T"
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
