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
    "4Z1s51xxNXXvY54cBYhDkQHoqPAngv6VF5g7fKCxyyRBLmXTwKYoqTr3CPkXdBaHYgw6nLqf2gHsc8VBEeax5zPH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5CoMq2dZZrWT7quNsLGR26xjzZTShrDS4AE25d3rnqDYkaPRXF7Zt25BeGJDx2WpfX6SujLCUKW9s5Vr8aQCDQoa",
  "key1": "25GKpapbBqJApf9oN82MY7T89H1CXGT7wdLsGymXEAwBY3GmrMMrA7V56xWoGH82nXN5RW72jguA4MWhvaRG4SKh",
  "key2": "3W8BRKnSqpUns7hGwfZzrDbv4Pxm3BZZRYv2CTxm7R6pzymDjQ9sHnq78nTuyZ3rs9N7UTSCevCHMe4WvmFTzcru",
  "key3": "5MbeS6ipzDbeNvnHaRUYeVwt1e4eRs3FqALq8gLM9dJwhF35VLg6g9dqmw2QTcXXQYNNbTkpGkZDYJUfk3owHe6F",
  "key4": "5mj6nnFqUgFnpEYkuDLpFMp5bCa3qj3n1d5L97XzAmqfReNCQFjjiGD3VvwpE8Kw9i36FF2W6ctEjP6q9mEU5Myc",
  "key5": "2MRmT2JJVRKczmihfJe6PMTkZS4ECzSgYKfVi4RHvmYVog9Nas9VT3Ke3mfvm8wBgpPD6EC74Rrrr6Lpi38qTZ3q",
  "key6": "4PPH137v1XJt8R8d1syefiaf13vmAUa1uTLqVEBNr9szSs3NTkCVEN2GqrjhvSTUERbdCEHQXrY8a3ZUWRUdnxd",
  "key7": "63YmPBEBJVnMuD1s4qwuRYKbYWKf6z9X82ZMuZ5maFEJFWL4Js3P1ahqULWWsGpt1KibznunMnr8nWbejsk3DHML",
  "key8": "2f88WGp8hwEANaZVys5A8MDJxvv9jnaDC8fWuUouCt5gBZVTjcvGR26zpZnE469GGVk3iA6fAnfGyt8hMAzDPCnP",
  "key9": "4qHkgEKz9gJR2Vq1uCbxXeTFkP5JnkjawcF1qnATdQQCahd49LdGquL1mLrK7CdedoxaCvS7zLsCPNTVypADGc3f",
  "key10": "4n2KU94z5gx6SPDc8NJo1ZsSVjCaq67o7KHcvMJL5GhrBwHwGLxtd3ev6xnRWgERSx4T8533KgwSDXHQsWZgsnK",
  "key11": "3ijXqnLwnwPMLb9Bf1MwBkWajoopJgNdYKFkKV22HGFVDwVrB3GfYXEJbDVuzokJj5zxeLJdWYp5Zi5qBHAaUhef",
  "key12": "483dkS9ggUw25m937o5Q6b84VmaDXZguM3eFgbjXr4xs7R9rksSuvMkwhrufo8cDvnTWvZRT1viPVcqVh9narxWr",
  "key13": "2CTWoRhkFdj7X3RJ65QkgW425bzdgEHYvxhbbnerp8CVg4s6wNY8wcm77dvmC7GkSPgEkawqrrwJApbDGFJe1gpA",
  "key14": "3FonkQ8vne5Z6jqhBRYxxdJnJxb2z5eBtsKyopSX4y7ZkCihz4PjfbMvA6UV1hC3DauP7UAJZjGkCqhBciPLEj5R",
  "key15": "2zDgYEu2BGjzXM6vpZKd3caFh35RFwPoPCpRQ6Z2EKPbSxBdPsumfbzQhdSCVmgnfyYKKSHGSnHtrvrYz165ZeH1",
  "key16": "2U4cHgHUy6wL2gmP6HnDefDVmX1Chj1T138YxnWJHhS7b8DnTavZEJktA8JQN8EMWEJGqARwdRBqic9Qnp2fpWzM",
  "key17": "amQ7WKPnM83e5SfLtwAWiLmNWBsPmw3VGkNzmFbTud6c9SUY5oz4AoWZyF3osS6npvf9RBVr93PciFQUVFcgk9V",
  "key18": "4RhfDJoQ11fYVdJckpXJQC2SCHUw3u55h5z1kjRf6SLK7HgvYS1u1mjUrs9fioj5B1tBmrWshypVVwbhp3RRe2zc",
  "key19": "57pbDnJ4wtkUM6wB12t6xiPsN484bQQ8AsLHNHpzuPNhd2mqAEYjrsLx7sTZp7pSMoZ87r9J14DqyyeZ6eqJmjru",
  "key20": "WgBNZ2SbLe5YxngwWVWJDwjDpR7VXsc3mDP7MQhbuy6cmLgp47pnmSL7s1wmq6T2YY5bEcfy9im4UcLxDykCdxV",
  "key21": "WyfqfXG3wnpzVosy4wf9pTzJZ9Ab4WMZKUiZUVHh9yUXGG3HktH753LD4c6qaEJckUVp7MVc1VPQf9kfNynjB7s",
  "key22": "1WNwN7AUu9toQsFY6HWr3fwdFZdqJTiRkciRNkTNumT4eT4YrNPEwvb8V1dYEUKKhMCxEXsRnkfHuVyhQGEDBZa",
  "key23": "5y91hBNFncDQ88HWe8hwQGRErhQzHJ3qkcB7zm4ZWcuE64SiWMU4fN58pEqLvYtKCVfqobDtRGV49ytJoZ1aApBg",
  "key24": "4miSgRTAmhdpuHWG5dS7j29NRSr9Yvyj6jEii5sQrM2WpAaX4mnyFM4gXBvRd2MRSyUUNYfkqJdcoEKdazaRypkp",
  "key25": "4nWwupm7uBxWi1bmRuwunTKTUnijJknL11EGrcDoWhK4sqgJ1nhkKD8BFueWtvnhi8HDXPeYbeSdwJX52BpemDYg",
  "key26": "4XF6Msv92CVsJgUHwQUUy2R17pehN7bqKcG48o61k52UJLoRnhfYvVYSrEx6PscjbW169ptHMUixMiQhm82YJwXs",
  "key27": "3WoYDyZNbcDh6kDBCWg255ex8ysHx4qdvk8irSjDcERh6W1aucYhweHcjd1WQANvcYz5pDm8HMMuPWhcQhTWbdj5",
  "key28": "seg45TXDPYCg5tSCmYnq7qZqJPgMpsPRsV9q4PQm6RMwKZY6k2HRjzFqaJyj7mqYktKXRWCLpUhx4xiJWzM6M93",
  "key29": "3VAozCnVo7Sqf3CRipJR7TBoje3yRskpCK4eE7r3N6QZTg1TekP2f5jsU5Nh8ZHAW5J6AyGUabLL2gqiaZH21sTT",
  "key30": "2Btcd8JBmqv3o2RBwsUMhCMzpWUD9dAjgKbifpZEpdPxgrf3zC8dbnqshuD5ZT1aZ5pUVkNextV4RnTgKBwyPHep",
  "key31": "2Avm1npSoHF1Bn47TguVEGVokvyUtx1GMh131YTZqQRzm9kzwccKQvXcEHN4KJCHbLKiaE3UsN3AFvYTPwPLhjJ4",
  "key32": "5ZW9qUg4gpRZ9ahNWX5Pc3k3nkFo1YTZDEneHJPmXNhhCQ4CyG6pUDUeexjZ6oHqDNJa4yrJL7pWWGfDaXRGgyCo",
  "key33": "29MTnWe93Gr2Bq6tfBsxUADWu1aHzKUv612vFrd8S7KST5GUuh3hg8wmReW4SQSdRHk8VAQ3Xo6tXWq7j1J6FqRy",
  "key34": "48RzjfVGbjV6ndaFEsTXnSaeJuF1VGGg389ZU7TASVqxnbR3e8XYgTFXoTsBLJaiqmjWaTuCkatyUCECn3vSR5VD",
  "key35": "3Gkr787G8aVA6sH4n2BZAjiQLsD15c7KeLLLqBtY9bFeJETtVruxypBaqpG4JRLCRV1jCJjfn2kB6WVaj8BVFPVX",
  "key36": "2ntTkMoLZq9SK5kKYeBVfZTMipNqVj7Ekzb4J4HFdhK9TVh9MSzukwmCHvo1STRPo4WonHYgf2MVk8f5WVzGmZjo",
  "key37": "4BUMz7ZoUHsV6m4UW5DVGBDSw1Am12eJ7L7WpoHFR3ceDvg88n6HvesJeYYXzMsMcuyrUf6j5P2FoZyiwganjFjq",
  "key38": "4e3nXBErUZhaaZ9cufWtvVKZfzumu1PWZSkByNDehu13twYyTNY89TCx24QHi1qVtnzYhLWTus1RbThDKWnSJ2dY"
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
