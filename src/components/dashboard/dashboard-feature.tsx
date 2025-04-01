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
    "41sCwb9y685ztzwywsQGwiB1E3SmFsDKhm462Yv56R3U5XQHK5tgLg1LL1y6GgvBwMbUudCkYoSjYe5CkifUFSzf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "JBBiP8vHcLwxtP7epf9KYwBMoen33ZodnitKp4n7jGSnEErcMHwperwvGtXrxYUaoi71jkpu2yuRT7eJZ9tSyje",
  "key1": "3uNWJLY64PqhgwhzSy1b9bbc8PUXX7SYNoBV2cGHu5x4x3SYUL1raFn9c67YvEEmXWx2UymiPcfsez2sS5nckpCY",
  "key2": "2Kckm1T4AJScWv1YdJxWLFbQtqvFt11FyRAqo99gm2GvEYAPU4ikcsi5HQrVU5DZS218sb1hDW4iEekRGUzwCrJK",
  "key3": "5nL1Yj4xmqSaAyZKKqjdxubxhTMtjPgYyiGoBJw5v5sApvUHd4hujHq29aL44Svks8XxPWYcFkfeuJRSs5bWfQrY",
  "key4": "2ovE4Lgkt42A24Myc86PmdRcyacL2kVsNaBXCL4TgvN9F8Z8KvykQvtsUTiZNUQxvsssEJTgc59VfKb98uyd93Sz",
  "key5": "3TcXowdU4FuPVQEhnd66M87fqS1bH8UdanT3w8TUDhfZUx9A2aXVH91G398FVnvEsBS6dwNZA3b2FD5cFv9EZpUY",
  "key6": "2Bz8F7jg6Roy7JBWEnQYpvwARagpNobbqj5r71rCiCvoLWddztHnLJq9jswiPo9TtgwpcM92muTa7MDPcjkhrohM",
  "key7": "EZKr8yYUYMjcxyqvwBAyZ91YggN9q6Tjkg1KCqPm1py1tPGiqD1EQ4oQ8SX6FxqJaCMUi1qLNSTbQgUCrvjVTyA",
  "key8": "3mjS5vda6ocz3pqQxpkn9TbJy6d29YLAonZrRcAYi8MTqDcsUfmFmBXLHqC1arbYRtP8E73WbSN6DZWZ4njKp8NS",
  "key9": "NLuiTD2Avike4ZRPMfGkWg18o1G6dJKnRdcaLebsppokQg8YMxGfDzbxvKGhrKR1uwEzNq2tbN8pL5QrxwLtJF6",
  "key10": "4H1QDJJtZeHgnNtRERxxinLSHc89cpP4eKpM79n5kSy8X5enTDkR5igbPR3sH4Sjeuik8dvEiJ6Gm2yh5FTaWxBR",
  "key11": "2jdeT3rRcJ58PCzvKLizm8hUZuM7d9gNjFhuterSsTBDU24vHT5E2s6Vn5yv12JArs8HmWBgtRKe6Jos6Hs9GiSv",
  "key12": "3LJFyuFEGWHJYur2gGiCbJrkz1m1AxWX3ddbMhE59L4qwYydXbY5b1iDM7euUNExSBy9c4zGV17gQXSKziu75w5T",
  "key13": "2Qmxwa52ots6yNsXMDNnfvdzUrgdy7dgpJC2hNyVrNYYesd9KJwqfeGomro44dQARVasN81mNsgRwKgUHLKKTDup",
  "key14": "3dzKwHdDonPdn2NK9AKCgyEy2UW3UbL3HQ6C9sjuWhR7zWBbXcPZ4XTCuNvJbaRa6vunhTy9xpgxf9qeD6o4k4nV",
  "key15": "3oPrXnX6avBBHBnpMUg5qQsbqPA6p7X7ZS5rLQe4NaJFNsSM2NsWjivENxVaFquLhzQHQaySSxHFzcU3KbvfLiv4",
  "key16": "2Zv1m3RQTp5UTNnvrx4QNBYGKvMjzsNFQFFDbKi4RvpBDt5a9YMMRRga3Tw8kYxaBFHEtK9J4FZsoNBKaPwemMAp",
  "key17": "3Bk9SpfY8mYNAGZn7GYNzfdTCPsGDuEx3uqM4Koervc4brcWDjrQK53EhR8dMncVT3b6yTNg7QwAzXLYFXTi6f3m",
  "key18": "3m7Yg3omoyg9eMLDpTcdeK3hUCGEnqJoqkhopVihxw9Nis9LRfE34S9QE28PBpi46mfoKPEcMgz4ptzsZbHxwVL6",
  "key19": "qyLLN74WQBsd6Gr74BQSNLwXm9uk2LHqtp4yF5obrJkpNowVd4zPG4meK69SR8GMDcwxkZkkAAkTAQB7xUMkxYp",
  "key20": "wfMFRjUNkWUks4GFctD769GVFYNPGpfH1h5kYgZkPUCb28xjMXroeit7WWVtAUYmA5RwtZAtLeaUAuaNLc8TgPh",
  "key21": "5Bh2HHi6PhsMqqpb7LnDn49grq2HgW7qQTC5WRuh3oLqUK5cLDDatsvePgqjTqHQ7uHCCJvhdQkq8azbkrHP4skb",
  "key22": "52rRUKo5nwPEimzy6gkKJP1qA4C4UtqDLegktMkxpg2ZaovccNNKQmTtXDEfT9nZVKjrwbS6QHoTGCHFwjS38TQn",
  "key23": "VcKmQa8RDuWKjwjJrsgNDsMMk2RpVMFHGUykoqZ56Cekrd2WWEJTyUr9XycoR2m2iFByUxcrMh6yUuGqHb4NPRe",
  "key24": "4C3bhkz38NKgdPqMxTWo3Qand5phabqnfcWt9DAQTjnSfP7zKupWBD4qL62pmwehmDgmgVokx52KRgiebWx3NNmz",
  "key25": "3YECQrKg6f1YBHiT5CQNStJ2HrX2gJWWa6zMTp8GLb3djz8wk3TAhqyBx7GCmRwZWXhtgoNfhTZChVkAv27uHJxT",
  "key26": "4MYcHW7ZxQdzf2vUMpD13mvmYmiSikFBZtcecpS5gMUA1J8ZinwLft2AnuT81UAiJH8Zhv5gsvcfSwFYXknXtG7Y",
  "key27": "2HB1scrV4VNHYjPMzoPqyvgSJ3CvGWVjqXX57qkWXjaLRattXPqKSw8u63TkpEKHQks71azjsf93nquyhvhhuSnU",
  "key28": "3E1bjJvs13TJUdeSu3AMXuc3NWzu1gCLfuvFuXYnia3i7TyPyw5AjebptnY5cZ5sfCoo89hVVUBUNgyxAFBCQ7r7",
  "key29": "L8H14tsNTDmPgTmxM31apuDD6J6y5pQEpYPxXQ7oFtL6uqYKgzznLxbfqE1txdbgaufqygX9K8TYGdmjhTGK8qe",
  "key30": "48MQYgvUtpx6rxsqGbGtSSY24SmQehbhjRMDEgzv9fmzTUQAVed8v3pkEbQbag7yXnaE8usd9zYPCKW6RbLyBTrx",
  "key31": "3LiVc5AYWTS2QAosLf2RGtmmcG4nkRav66yUvXXfzTv1MvddfeR5wPmhJZbfF9sUPcS7wHwp94g6PGvEAXSsmSSB",
  "key32": "4CEmoTEb3fMjV7BigFX4HQGrFJRP7TkDQNuTj59HoHK6k2dWFdsHPtBwoGGjbSAxQ2Ncw7Dtf4ZSPSuELnXbx8KC",
  "key33": "5JhVbfHbxPHCFrhpdCFNAjoNJewsPVVn9NVKGY73ASwNPtR6rXqWGYRG9bsdszj6UCC8P5CXpNtEU6tTWS8ppRmD"
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
