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
    "4dfUFttRsWLXn1nBDnwnmmcmK9NY7nY6mavi3TeoecwzfBgmjC2boNLyb79xvrDZKhAfvpkBPKhdSiX7osN4gTaD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5m1tt6hwvBqGskVW9zXFnA3qLVTpMFA3TDZoLdVh1V71vJPkJYE3b7gmC8KKd3AMEVrWaUJmHjeKosA6GqiZ5Dtp",
  "key1": "3B3WkwM2DBWAKW8YhDQCDB9N9ENFPGw4Rzp38bjTk1nS5U7pPuh79MpzJ5zZDq9uj6gQRhfDvQfxH17aQx3TtJvJ",
  "key2": "2fq3HDCrUxVrBcC249LV5BSvtFLdN2AbaMYFS3ksekuRHmjgcyFbVHNidwXdQ15qtupn9wFGsEqL2YcubicYp61g",
  "key3": "W6rVtQVGp41pi4QEuUvGBfRDbuvqoRp5SB6YaxVrP6FeV1otoki8VnMobBAmxPGBf8hkLxG4zzF5p2dcJfvwGy3",
  "key4": "4GpCWEx9do11hDV2KYYoBibEcjDxwbAix9sxh1ajs2AsdBmZRRm919jKcGrKnoNegS15xALtJQmVfhy6hHfASmj",
  "key5": "5Fj7Udmczjy4UV3nmBfLqramcUuBgJk8X7EeLbBe3tPVXYSi63DEdfUW39ZJhzrByA1rHBNHa62k4ecEu8N22y1R",
  "key6": "3RMwt1UyJMb6FFZxV6HQem7mGRxUc6CPsvEe1e6X8XsyzeqFEAFxc4LrMXZErCnqqdCB9aFx7EKNzWTDUfU6dZEA",
  "key7": "3ENYFWRBAtUk4qNJrNCDNjz26AoxU1muE6dHT2eKAAXaNT9AD1z6TDMjr4AfobAxQBmxMuHsJLWzsJ7ehp9WoF4F",
  "key8": "4M2EF1tKVaRP7THatGZ8bHjLxfQqMguWVqYmrNAYU1KKsUQXj6qEV4S1NX2nx9VZM9GS5cNwVpBwGUPnqAvdKxiH",
  "key9": "2gu1QbKMFk4Bd88aR65HL43gKhRzBqYrkAJaLVPp1QdgHvUS26phzdioEn2esGZuQu1vrHnJ2mKa6h1ujyXthTAR",
  "key10": "4GcyN13gm7aEWYGvkCEiren7NTjYWoMVZFwReKGdYdhqmLU2Kbwkh1xDLZQvMZvnkArVZDSnYFK2USrw86YhhHyV",
  "key11": "3nvK2yAqh4P4Rq6ep5gYKdVbonJW4iPFjeJy53JJZFvBxBvRyGkoVc73E2Jg2DCtMvURnKLxxmVpbt3d1aCkzNab",
  "key12": "32kwM9QrZpWNewR569UqMG8NErX7UkE5WFHK4y5PbJaXymQxGm4imaV38rbtTCct8pwaZYx9op9s6ahgN6kwtYFt",
  "key13": "4U3TMpEQ1ZTs1ne2zRfJj3mumeocB6UNjcA91oUQUjK6MbzSRrq5V32YzAy2U1Fwep4aREUnqFYc3wiMzwcFr25m",
  "key14": "3rf7d3MxftvRQ4RjLYEaNwSjQMbxHtJJjUGcKaR1UsYMcoDcfk7NgYtwE3ph75rfcyDj6CuDR2vqfJCHU65iQ9id",
  "key15": "GMvaeoCW1FhyEReN8DRDcptUNtuaVx23SnbzbJm6hpy2T1boAbFsQBkGcY8VkRXV5rmnFAzTKbyKG2bNBhD8ZVV",
  "key16": "64Z9DH13RVkvL3fTJ5Bc3haUFKxzDPZBUDQCnde9TfodRXPuc7hV98qbCjyrhvGsJkoiRUyZezuhQfG2pVsSbUYw",
  "key17": "4Xtd82hbWMtQGzxRBNUjLMxLWQoMMYtiB8MsETxFgaeu7VuvQsFBL7uC22x1Bv5hCpVvMAMSsos7Yx164nT91u4x",
  "key18": "3nM1DdqTESDMeAqKKqhwRG8DqaUMkyKTfC8omoD2qtXUs2NpE9vpjex9AHh2aZpjoX9LpA9PunXyHcrsMXrApjor",
  "key19": "5eKjNkSLm9RLmBZZZBR4ouSwrcG1kGQ8Y72diyzFu2Z2uVwKtZXQs4VUJ47ojxWzpdoeu65Axo1cyfi9iq88aYX6",
  "key20": "YVLTECske6oneXMfLATfDeTMTCZdM3YqDbSj3ZA2CYP9FngSZLGtA3NZZXzGVYVcK44MHeyVrVT8hm1miYXUmWS",
  "key21": "5jV82LFi5op9uVnz9yuiz4ZUyidRfyp31Pjf24x1EqjaZzCYoUzCE574CSu5FyzfbxVcjm45RBWoZNctHmEycsp2",
  "key22": "5yPZN4WiHwrT8mfhDWr2QVU4HKVwpt57aPRJ6CFTuRnhRs7aANqkFUFoSmNvVAz5mD2HuFtTVnC6THxxn1vJFmBJ",
  "key23": "3mjGJuaBvRK4rqanQfFfzq4QaFThN49Eu4K2iDx86WH7kGfWBcyzackQ2Ra4QrLZMNhygYJwDKVUtYKWHi7vYxih",
  "key24": "kpGwUPEbUJvCnaND1skxUQD7dDUN1xHZxYNEr3Nk8TiaH1Rr4Mzo1gx4whq8NnNiM2MoDtJ4iG4Vko7zUDMjDxR",
  "key25": "3qCrWUk8DYrrpUxv9W7FpRVQ63gwjHJ18oXKUDMxnUotRHNVkNH3SAvgU3gYuNZfktsrodbWwrirHBqCmeUAxABr",
  "key26": "2bbmfmjNR9LfnuhV9nrd2zmeSQ6EWgFLCtNDj5hNrEJHmt8dbr9oNo2xQRMLjKw4UsMfj9upZUxSrdoRVeBJK8j7",
  "key27": "5eMMRb5txeTMnNuT8ybYZjmiu6RUeXRq7fKQw63N1eCddDVaaFPtB883Y1ZzCQdvE71tr84D1KUA4MfiymMozUtG",
  "key28": "mvhRJd9Sm5NWmXHAU42TyHuQDZsfdVDmP2JwxxXF5CTx9LaRdJxxdFkMX5s4XMsDFmGQ9N8rfYy5iUgi6MDQr9A",
  "key29": "4A9f2H1BGHM1v97eadEh4xieb7j3NLuFhK63DPirnLSfCnU5LvsiC75wp9xTad2hR8dVYeYFM6SphNmbX2i2k3wh",
  "key30": "5fvP3ZvRLscDz3fibARdB5m8KkvJYGPQFcYTihPq4HKS63CixtpqysgC7cxtLtaGNHwVnn8k3vXaBxJhaaUw2e7m",
  "key31": "3uZeWYJtaCfJy4oQzgYsP7qUXPvH9o7y8SJkTFwvgjXVG79EeMYD32Lx9gxzwsEakC1JhYXLBKBHT1yxmmDo2Ebx",
  "key32": "38iBBeACibYrgb1c9HC23qCHeL31WHeNoZXMxjwAM7XY9NEGz6RGdVZqrcQUbbcZZF2KowUw7Ysxvfg3SC8w5wx1",
  "key33": "46RDKh2cea6b5ZYKZ7joMQfMkhDgFRhNdBwoBq6ogR5f4QYsm9u4rAnuvK1kwzqHfwzBLCFKUUMJ2tDhqtX1o7fp",
  "key34": "249t7qApMdwVxHd5xG21bSyVa6q6ukR2SYxN33hRT1fwfehTN28VMaGwbEmJRGYXwKzwp7gh6W3HaT6cAkk6b1hs",
  "key35": "41bA1ZPBbLN7hepd8NPw1ZwAGXcz1KuAxzDAZx9qf8AAkAy7dFTtWCtfYe8zHYz3EUxnV18xTWBByCAPMBHXQ6dD",
  "key36": "5KnqFB99oBGKeWM7MS2jpXbpDf21SxGeBhh4Eb4kJcYbEErPoUtNQpBD8jB3V6EherAVNqwWSP3czxGMaaeBHUUg",
  "key37": "2QnQZrWJvyhE1f2L3zoQ5UtyFiL4GnMsy2mkD2nfgSSjb27smaBi8LV6Aftf4qYrVHq9Fxh9KmV9nMVjzFjdFvzR"
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
