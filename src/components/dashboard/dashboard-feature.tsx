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
    "37ULVsuKFmkXKjWSZbTXsfRDjq2iLdvZjAPt6qkMWeaxaYoypHmKUkxLmvpVHYvjPhiqrcab4an81fhahsbbHHKm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22mdANu4k4yGcw6o6hyPVnbowC9goQLd77uFLQBEnd6FwDp1tdq8YoNNTVjrZzgNm9SYCgcYSUWc18d7Wc4Qj3M1",
  "key1": "MGjSPywxguMmt6Ck5gfS892Gm27BU8SzjaKJootsu1PgzmAMrAVkyvao8djAJDeejchMqiNBQUasakx6zVbumer",
  "key2": "2P1GtNWnMF6NASHKMncwfibvyPD6LkeTkex6KCd6zQivvZfodQV2j5dBzEpRobSbgQSR4BhMiwmSWWRVkozDbEyw",
  "key3": "QpkM6axEFgvPTgzXi7RVSsapZVSKVA1r1Y14QMoYJsgDcvhkpj9L2VLh5gd8kcJnfVq3zzqoN5Z5gV2vZ1515Qj",
  "key4": "ziSQhaEPsSAcytkT5uD1ZdEVN4T9dYjGx7AmAP1eeYotz4M9Xi8gf2ce9e9Jkzq1nVfT3vSZV1cfpnA5LBiEu2H",
  "key5": "3aZwdUuYie6S5AbELRuYHHTuwhCcNt2KmKvMt5EPmaSJdgderSLBHbW4t59KS9AKCKXPZ272pvEqhRZhQhjxjJEX",
  "key6": "bPyG3mjAqMGd2rFw1xvwxG8DXLHyFsacT39BUNpAWdr9XTcyBmyhECSyRz3b55TWeWYMD7brD99kXU6mRFsP1s8",
  "key7": "5XUJe2TLzZRYS22YNQLpxhEkCQGHfhP2RX21UoSuhJdVNtGRM7ZDQ5fesx3xr7hdr9pzYsa8Vp3R5MKNWZtBSU3u",
  "key8": "3JoSLEdefDYvPLfQpHD4f5CSiCoYMbx9VPVuueKyerhAwq8wGS1BZ8SJuo2TvRC1qg54tspfAxJB9d3xtD6wmrdh",
  "key9": "4948rLjTtVzb5z9owMLRhwkQ1VhUuwd8UFAHGTX8esn5LmGPn8SPSwqunb7d9WC7VmerTCeV4JA3ycYaopJ2HtEU",
  "key10": "2a3R859xgyKBRm6XLvjpKeDccxt4rAxiiNpSMBAFGex8racsxd7eErEbWA7HHWjPjMU1SZCcX21g7hxnxdqWvtfs",
  "key11": "7DvsCozAtHjj15XfMxqQkZQoqS9esofEz7TR4ojhKcV1NoBh6BfqAzkCkxz5hY4cBZYbyrjvCz1VQUkZLqCVr46",
  "key12": "4Wm64grPVfmfJCqFkgCSjyVwFkRT5LQ8aSFbALd7BfQxaAaLjs7Br9jhx9vsaWuM6kVJJHbQRGgB74ZpaWdEBzyK",
  "key13": "2pSmzgRzbMzzMag7aE8NMphn7txcYun7FnufN2PkQ8wPpvnAceZebFf2Z336DT8gHLePUmJuvG2QnUpfzPUeXcfK",
  "key14": "v2kXCGFoHBDdSacp1caznXUVCYKWqEGuufByvLqhoFATVDjZkixgWKpn45NershQurV3pV8zZRVmyRM9qrWk2hx",
  "key15": "3nfCvB72A5SnAQGPV7pLCNpxGnRT14dKd8hYDh7VVFhm2skx5MLBJnw1Z1sP3tiDyobqk8QjomWsFWdsTrceA434",
  "key16": "2iFFYEZvfb7aZ12JEx5FRJ2LixXPYUd4sBU6qiRDovcP6ugLCPGJDMFQcFKLCJr4oDfroYt3Rzn8ANhVHUdrMyPG",
  "key17": "5WNiTCHhaLeXKLuXpgWwnEyF3wMwaqbDeeHJnjPmGTvqhsshiFRaynrN8mMWKkUbG2kkqgQzJUiAGp9u2gU9MN87",
  "key18": "2fCxobj1KkSnLggAP97zaj5TgvoupxKcBARcJTbmNSMMs7gydNX1vJrENUoxcB8sCZjpxzXhohu1kEagdUoDZAUW",
  "key19": "3uzrQvGBKvd1icj8zkgssxXS21bj3E6EnevAp5sXDzfbUdGWifPK2HGRJH2TgEkGEgeFTJVHvBsJfUoNr6Q5Ma2w",
  "key20": "KbMrm1VWDvsPN9jtXX9J8yt5RuXRzaGFUARaSwa5ST7RFHHZZE4VeFdL9KvBLwjEUj3ep5arGun6AnvkSmQSjFi",
  "key21": "vuzwgwK6W6jTkwwGx51FJEkp2e2ak5fkaZEQLJTLQhRw3vaboNWvCkLNPgDLUB5LjWGHr9QscL152tfzp7EwBt3",
  "key22": "4MejQYqKTAaLbKYuTHeKaVoThHDeYmyGKUA5vwjyKcMc7EuF64XnwL7hGRugV54Ym3ES3XfZRTur4GpjXzMgBk29",
  "key23": "4gQUyucBwRNX4wxB18fn9UWrgFv4USPspygwxDEFGB2NfgihPC3JxveU7mL86MrBnztmDYiVs4gPmJBcbXersAwV",
  "key24": "3oUtJHZqVmZxdyVWSEzCvELSo3iQfEwf1FxyeAutLPmQ57333xGyPUEM2qFGCpy8xRNvz3q5PqTemXQDLAYMwku9",
  "key25": "V1CHQdGjiasWx4zZpbtYYQpMLRjenuqNA3m8eK2xgmzqEWFyFfiLY26eDNkrtAy1Dx5vFQ6vvkKXJftm4XqTL8M",
  "key26": "4NQct5V6J3LBUabDncn58H6Lj2Cte4g97BSvbq5MH57VwFKCyFm6AX4tKMAX1yNCN9p2DZbHkc1rHJt8o9AjHBjN",
  "key27": "47fK1sfPqxC6jo4sRm6W4P9PGgPkSFvpWhhZMfhnniigYHhBrnN6GETLsv2DWfYFVouyJxCbusiWSvQoKTK9cMf8",
  "key28": "3h7nYFQwhvW32JVCx6Sne7jtWW9bP9f16FbjrrGqdAW6SigrjuXm7fHuhUTxdsVoJDWUgwEVEQr83vQ2KR4kKaxy",
  "key29": "3cccMur6gF2KoJdSkKHkir5KWdGqYtVu2FT1Y4WTdFzgaX6UxcoQaH4d99yB1ufJ8CyF4GobbXrsGTRWja6sY9nT",
  "key30": "4buJnwc4axq9pS1UugSBmfY3J8MGYasi4yhZwKD3UNAdRdkeTkDJdBMmxE5q2DcrVQj1mLvbUzBagzjcV5zb16bs",
  "key31": "1ZviyPM4dJTFeefuw8fkYScrxTQrmU66YJKFxr4LzuN22FS4deLzzReAXPywXxHzAZrAUCYmfhGKNC7dsz6RKtP"
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
