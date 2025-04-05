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
    "5DJd8KpQJAeNdUdmi3QihbHTWnPMG9nAqz12q6eE4nf3zKznfU3w5qh12MeoxMxHRjDieAovqqUfZ4Pak6za5Hxj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4XyX3rPzygs69apwd8iAMFpFeFCqghXZnSKEBckJ4LsLssQVvhtkyiNKfj9cvUGeCJ198ygumZG4DQMGq87mAPXu",
  "key1": "5dyYVz2Fw4t68N4Kpj7uAXWWJ8h5grXmattRjRBtDYZ2LgTeV2D3Vm6W7X1xCStozKFdhFNmTwmgzFodfgAUBLuk",
  "key2": "rbRXL5fhLMTYgUiPq7HfK1hCHb7ygs25aTE2mUCchrZzeFUHo9Y2zA7dBjoQU4CUAfSXLjcQw81j1FM1Ru8yo4x",
  "key3": "55jQGj1yw6DUpJQN243u6MNLnXwUiDyws3Ug7jfvfbrJsBKfEbwdeuSkL7xZHeiQU3k11MKyMY8B888545rSRo2z",
  "key4": "2vHvivAtYpqpqnX7cyQQQkgiAv4NR6JDncnrdRGvDynC15prpgnH5j6x7kZvC8nWm7WspTHjBiGF9Lqax1xPP5C2",
  "key5": "3HMK6GAJ4BCgNxbMosz3iGqTzGEcUBBfw1TinSPhkQFxU1ui53k2ifuDobz87Fo4k4st8JdR7SKZ1tURxudWHqkF",
  "key6": "aghT4k4AUKbYANPfAwWYCpDwCECy9vq8kuW2uKJof6t88ayb3n4pzsdxBY9n5KdtBHLvvMkV3ZtPj3tRfxaCC15",
  "key7": "3D5PmBcTvkVh7PVYDvWgDKSyENd5T5PPtrZH7UzQeDNitPEKgvkxqRJjP11tbJDeMT5NPjaFB3NFpcGYnt31xNzh",
  "key8": "31GCpuDmhKAH3harTEe7UsXWk45qtCwr4Jvaa3FsmBBtfzWAMGA3zw89mEoaZ76FYpBvugqqBRdys1cp12svMauy",
  "key9": "24DpqqFBMEV19dRFqVtjU14EtPP2rscABhcHfgjxjioQESyfiPWTeMdqUHhcPUmafdkYEnaf1pgamd5ECLrErvRX",
  "key10": "4oux8LhBQ4qHt8aKjkrRmDmTMzQjv1z1VmogHCNw8T7dRzbNxSjyDPaZwbFvbyoVy7pUwQFMWTV5mPoBCNRwgHq",
  "key11": "4TEbG1KjYvnu7HX2LGKxnjP2NoMvMoVBYkJ1h8bcic2csX9wv6jws6NkkZtU3t7ZULvdeDjezF8WwFGdU7P3MFBs",
  "key12": "5a1WfhNiYtmdJXFGr82G7L4w3uxkJfYwybKxyiscbW1Rtc9tPH65gz31rwzcUZpXWRUAY5ThcJkzzZ1uYMVPfnwz",
  "key13": "59YSKFWr21ptNTqpVVtEa4KWpJqPwQ2zNv63ghNMTH9R8qB8Tfr39yYjrLSQnxAxK6YQ6Jf67kPK6kyU9LBJMFTk",
  "key14": "5su3mW1wZ5HhXUFnKuwqXZoq3P6BQxw14BXquXGmr3SEZvwVoEh3MwSWPEhhF3W9ob3gK7fkStmt5J7rTMuszBmT",
  "key15": "XULABq6xqMTvHHfxKLyvqETjSPBJSGTG9yc9UCrfN5z3DAX1uqBhGtWuGqLAdYCCgu8AjZkR2WY1RX5iVpXW897",
  "key16": "2AUzvPsBtUDiVkAcnS9Sgh3E9gmLJDCKLA6nYo5C5fJVxpyAW2JifkvE6nUEqpK3TJ9vr839z2nFzDnFqLitYGjt",
  "key17": "3r57gzgAbccQE1Ss3jUAA3GYQ1Lhc16ZzDfEqyd9mCWh2B3GxPq1HUQb46s4fgPchnSMDSzPVZfyJGfpXZGQTEzK",
  "key18": "5boHy9cYdYV1pPtVcnuquoryq6wpTaHKX4MLTzAvHbc7uvG4W31Gd6SVwqjNVBX16528rbgtcZSNHizXDr4bihWs",
  "key19": "4DfAjH8nbduLTpQ92nbBFWKqmq3D8wFnr8JBE3CB8S85HkLvikFJr71TnLmUygFTUnHFba73Rvbz6mPk18HzzwWk",
  "key20": "4EM1h4zSiD3sFoB6aSoqP3BasH9L4PcGQaZ7ezjmr9MQmVegbtdJWCvobPKggLsADTQdDfH6zkKKxutAWxPuGG2s",
  "key21": "5FjKymtJCiRwqmizrBUsG6mWWTXPgTckB5KocTmmo2ARhKHrgfdniUAzsMe6ksRFeK16BCreqrRTjonFzvy73iLU",
  "key22": "33QMt3XyyUPzNnLua874PTp5MQ4ukoi6T6oYw9rw5jHPREdo4m7aFkyTTTvKaEC7upfs2PwFDtFd8k3fsoCvbtap",
  "key23": "3Tt3D3tNwFjLYmgWq28JFgwambE8aSsCGvBPyhS2ugd29Gb56E5eQN88iwESLvv2szLnGJvkyF1sUBbTsuXXRbKF",
  "key24": "3GMgMjDrTBTSDpQA2A5aJxj31uPmTgeQsrQwaJBsBz48P9Q4NR4Umnx2xh88KDV8xdijB2w5W8cyyCVA87Wo7QtA",
  "key25": "5ugz2FvA2GHhoMD2BYTQKTpL1Y9ximyR2hS6z2ssoapeGWG1w23mz8PMLETAZ315YVnFMCqgV93iPRLPD8r2pBLP",
  "key26": "66jqgneHufc87CnmQ9Y8YcJcn7wmjQbC5ERyq35e3XyNhLiNjUYcvqzeGuLp3aYXXpyzHYqaSgjg38JT665d9bm8",
  "key27": "5F68TDDAGzkngDxPZrMGQje3HQL3NpDQJZwn1oi89762773ARyAnXfZxRFDpZftikkF6Ec18QBK1ASMGPqDcjw8X",
  "key28": "2965rrNuhQKKLu3mZVouWDuDqJ3yD1AkAVKQCt1xxJksVZxcQK4JGNMJyYonMDj1gp2D13nHWHsZfdrzJJSWEw4m",
  "key29": "5ovgmaD4RaykpN4xjmgBz7d4W12B4Q3PDK3fXcDygKQYj1PmG155HsiCwAffTeAcZqfsCAUQVEZPv2gvpfvCWRra",
  "key30": "2WjePZ3BvbK5BPRLPBA46P7oiNWscPVhmVT1CB1VANUsAnDAktJ1C4u4ZiMZTgeAKKvqTe5Xa22APa8dABEmnvpw",
  "key31": "4neZm46xtoqp1W6VMKm9c223Nw24rUtMQwheDoHhNfAaFNX59dmDNHEYKkb6kMoKJqdoMHFfj4YTmUG85MfhDTcF",
  "key32": "2XK9qUmFjzcLSSTNjifKYn1KCmYrWJZJeNzYLxnZXAJbRjZYhUPEi7L4CoqbcnCyxfyKNFmthvBdm3aQKdXpQcCh",
  "key33": "4Z6z8hWNN28VR3kCi6gmn3aaWKM5tSBb2HNRHKnTvZQRfCEnTDZuWa1ma73wwJFUcG3V3Jmm2ZoKCisvTpn57a5c",
  "key34": "fbrf3aWw4QBrCNiUfEaiWDtcw5sii2GmwuZJvx3dAZVcUAm5RuZfDwtPQuV1VHijCzn9uhF7A7fKwQKySiQesqd",
  "key35": "5tVfxRzGARqnwtAb9pg1YjR5HaiV3xg67Kr6Usyx8YCTH1vWd4qzVzw1vsKg3RPzwcegUbettQDGeodmX7KCEsu6",
  "key36": "4JASk9U8cD7jGd8DdAtJKvucTYu5mSSsHbkKC7RkCt6D4n6bFMnYYFEw77FaZJ3pzbpYxAgCcyfaar158KQXekBX",
  "key37": "4wwp2X7T6GDrdqivPHFTThb3tmgZVanhUfAgaUkCoJXs75a6gesnSTMcPThuVs697n1LLRGpbrNm7UHZBoVbXVR8",
  "key38": "5mCVboF8WbZm1AghzS5JNzyt2bykhHjHPUoLytRFYwNjMsveiSFmTtVoH3HKBnmneHShvCzwQXEauGmRX9oGuzSH",
  "key39": "62xCx4Xjus3m9p75fKpN8unBw7KKuXDjYq4hpBzYrZsrXvB3Xkju72toxsU1GAfQJznkKgc6sN2281nZqKFMRYvc",
  "key40": "4cRTRgqudCwYU3uUxLoxn4v2VHUTZEGqZuhtoqQ83G2yKXM6mRUva7ZWd9Q7VrTzTvEN5R7TeS1dxnacdWzq8jnV",
  "key41": "2CdnFqXGrEGdD2bw95Cmkt9JjBQb2MwvVGb3X8nY5rQEGvhAYHsH2He686Da91vDDRKBwWY3RpwrX8mrw8EDxtc5",
  "key42": "5F9gDxH5u1FKLVPqhwajhax3AnyhBapP7QkVBxEjxwFDpV2qx4wGhzdrXCx6yqq4j3ujCEdr3XrMq7WXvMZmd58s",
  "key43": "bRwcahPbHbHYgw79AzDLi55gF8obLyWLY8wGTL6xJmR4qgrWyxSNqmcEe61yt2gm1yuBe6cwFzKEZnFoZoacvyh",
  "key44": "9AF7FPQ5c1a2HczjeDyPPPWKBS1sC8qCxsB4weCYv6pLEPnJvp8aUcB68NBH73vMqWJZ1PCT23ieqdq76uj1eSe",
  "key45": "rGiCZNb7yvHPxPabhUfZfvdhzKz2NKWi1wSqQbMUYn7rHFdg5DTTDuQwriL9V1Yy3e44AWQ3LyRvi9DfVJEHo3f",
  "key46": "46kE2UhrbqPvyuhetCN8ZqreLDery5i7X1FJHPDEUSDBoMV1hvhVhjWdiQyXhoKSadt3FBuL8FpnCiWLsKnsTCYp",
  "key47": "5gqdok9vmMeuZ6b8Me2yGnGiruMipCohGiHE3yrLnzedSYFqLrKXVWAVoekhALfKg4XbD7xDYCaNwVwi2YwRbans",
  "key48": "559Pt3Hgcdbht6H3mraAMHs5A27AoAr1xpoNNdBroS5dSUPS2gFTFY5sadyqcEjT1H2fktUhQxBoFrhMFxfLeuiK"
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
