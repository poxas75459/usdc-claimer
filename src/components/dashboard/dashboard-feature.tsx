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
    "2EgWhv5QPFac5hf1cwDxruPjE4cH6WqNU12tk1tYUCdTHUGt2KUcyDns1ttD8fLsCGmMR1X74uwNwpEPsDxawR8X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "DjLqyhQgMJXfr2M2uAkjPRAUwxZnDUJ26bTd98NCXvdpjaRY4p7iq4i2f68kAYpV3vdFR9zjJAcB1dFPc3zzAw5",
  "key1": "3YYi7YSQuhJs2ZurNPGJ2W8ZFUa7AHmzWrTmxpqwAWQX4HW6rJnJMkmszC3ij5dRBZ7RGWjnVFdCzy3dtTLiWznu",
  "key2": "5tbJjnrX8dME4qQjg6MtpuHLE2U2yL7Duyjh1gVBRAmDzT7NkmoAVjt2WJporbcgnurbCLkJgDFGJqd1RZQSpnEe",
  "key3": "3G4cmXgw8nkFnLHyqeYa42QErGRya5MsBVV6hPW5vDCYMF48ZqujB5aaUR9L25Ztimh57MJCxXxXdFwSUUy4neem",
  "key4": "4HkZ9hWxAzWCafC45MvAbwkTy68Dkp4uNS2WGD6a3975d1CMQnT4f3hC58NZPr2eQ9cXGBGCyDW3YGpnuUjV8b9X",
  "key5": "3tVpoguqPhM3qoMNN6ArhLrsG9qe9f5hyHMhDsM2sScbS2u62AAra5gbR1JKnh1Wh361rAZkEyNpR4866tNqcjsW",
  "key6": "AR2npKnXMJVhBWW9tqwpzqzayTAJrkUd6gTn1fTuvEZ8qo4cNxhpYD3KEecmRnfriDu4GhYPjTgTLw5gYADMWXP",
  "key7": "3WcnviyY9NgEzLTS3KT8TUubk3tKyG1k97rce5oGva6hzAHgXTFfwJ1Y2aThDPh8vF9GGvNiCdwMESE1Bb7dusTV",
  "key8": "54D7P9ZMWibQyKgrEC4CwYRHm64o2srRPVrTiM7LcU4csnuTocCNTqwMfFDzXnbsGZfhcpDvWQsRLi9ncLZjjwia",
  "key9": "56YV2Cf9gqqMEoaDf1qDYWjsmEk9VvCCEiqqiGnFBtuEHBsFoQVJ8GGCBUUgWmDQuiAB7qiCVVZmWSaLjLFXxMzS",
  "key10": "2S1xzoZaB46vWJmeSQpWvUWshqxmFM8mezpMbkvwV8tz2Ged4VUGPK8XLGtWegcgA7XTEUbUX6EqqjVzduxWepdM",
  "key11": "5kxkfBn3Zrm3dBARt6DS9E6VUoTHbsT64uTDYXQH3sWoQNtp7i8hDEPYKnA1oY8ry1Z4zdXX2AkBaaMiDEo3jLUS",
  "key12": "2qYbGja7qUwUSkQTSjvhMr1owdYKXNbPGm6K3rNPyaem73Bd6qUG1UEn1sQqGPUPsScQ23hwcj6G3c5Sqwp4BVJF",
  "key13": "srbQzKKBvNMK8WxW1yNVjxmEnXgD5ZBagKAVb7Xz8734Egecm7CbnwwsUUYdeNcbcPtkBK7JixDiZuEJRuByjwq",
  "key14": "5s1nmjZzEtDwYsw6YPfsbWzaGSfT6vJaUmfFsRLBNSQXmV3fitMTHCsaAMyHCFp7cnV4u6bExjHChKuUYjyfzYyL",
  "key15": "4U9rtjKfBXmXqdrivWM2ca9iXsmiQg5Do3bwfBkopK4YfCcFpXJUP3miiRfPcAW59EkbZ9kxKHQuA4HykX6uWcqA",
  "key16": "2zuYmFtVpSBv1HkFMCegiZaHX4xzvmPieJneC3jrwyEUgHpYSWc2ySVWgcfZeHKDD2kcWxhMb8tfDY5DpaSA1Ne9",
  "key17": "3VVM6wPN7JBcrDgzAwMnuZCvj2jgjYPivEbL9xv4fKqnrmRFMbtYzRhomfxSV6YLB5S2RxMDjxsiahPfECC5qror",
  "key18": "4hFjH12G9nTbZoCU96vXvsFRuaouvrH67H3hMC75SfT2jE7LDjPxYtNBWekYeKmx9vmexZwHz9jyumWWzifUEJrd",
  "key19": "Rva55aeeD41PedzXAXWZs5P3XKNVGJWQj1ZfvMfR44LJ7ZkQLrPxszuVviGRkJFHCGXrNscViK48GKuXYfLvC2S",
  "key20": "3SnnTyZTpUKytWnM8S576Born6q5UmjajJvQAm811g5EVojruVXDxGZoRjCGb9sbRhtJRqodMBeRn2m7bmSb7KZr",
  "key21": "4WuJmS1DEs4JGzD5UNua5DN2my1SVo5CpGxTb5eAP3QRjRCcUWXY7nMBbke5HggEENRjvB7DL1Erngde9KNfWtos",
  "key22": "5KEc9tQweop1rztmFmxc8vNcNbHv8fcTvyMr2oF247a1z5ataVzNwQYHJwSv67Lepb2dsGvrzV4LtWSdqFPSd6km",
  "key23": "46W9pjrpbf1w4GQfwRgPRDwVSdk4hk8zYQ4CnRkR7FfPS8GtczpLGsk4tgPQhh1i8omSdfmr4ZpR24939eKGGNvt",
  "key24": "3w6jr6fXL7mjx6fU79F9k72JGYBanMkaaHwa49eSEPmR82XRs3VJvTLbPGioHAUZYw5pMsPcp5ZdWcyQWuSeKC1c",
  "key25": "3VCA9XAd4yRibW7T3Rffem4nM9yVu6iaKS6bmBTFddsXcVdnDRCrns9gyBU1c28QHjxDawyXZYmmZGbX56FZ9mo9",
  "key26": "3AHetvjmijHvzZWfLFUBY5r5pVxXsRL3CgvU8MBXVHi4tSxLgqWMRyiJ7joFLwipani4N6SuPMBhAUz1VD5VzJxo",
  "key27": "5FQQy7AuT9LRbuLodw6bgEzYAZQ8srhrGFvq4HEY9ud4JbkGWoQHBj2YpyCm2uZdKSRJHYC8zY3dBu1XvzQwmmJK",
  "key28": "2XhGoee7Lc8vWWrjfYSorL6y8GX3FCQSXR8gmsLuTtR57zR7PeHnJjUUBYEBPfgHLaoNi13BqxgVAkP7zynrnP3G",
  "key29": "3LAs8UZKCxNVu6iDVAykgNDB6EdRa6U94ucHDACxkajuUmryQe8jgHdNwkHj7W9yHPvgPJubiWM7wufPZNeSMV2p"
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
