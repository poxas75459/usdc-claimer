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
    "5UNNmC4n6JE7HztZqMnr48xaoSCEv6hrZysRKAYKqFAgMxPtPFUedDQU3RxzpzM6EZqrudF2mcNGpkQn8TkLN8Kf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4p9uDaBbVTEjQZwwTZC2T4yBBAfLZ8ac2azRNi4qkpx6zot3a3qYBoRE2ZR3B5HNtyp7cDZg9mhFwapFTVT72rFB",
  "key1": "3E73V1e9wSuJudJEcDNG7Y73HUmLmtEKpZknvnFwszTWJNFn6spoeyRCnBytYjeWDf5cgBt4AD2GqTfzcnWqFevt",
  "key2": "3TAcQLFWkmykBgzDw7VyeGDibiabQzUZp1WtowzHi55eUi89SUVM9geEx1BGDg1SXjM37QyzUoZH1YbnhwNonTpt",
  "key3": "spJMFcbtW6r5soMsnuJUsYGftqpPDhsRztfoSgYG96RVfSd3x6Fic5ko3bGiyef6s6mCCCb1VjtNQJPpcrmqBHT",
  "key4": "4awGEuHUrjxySgheVTLhwdCLUFrbcgjN9vbbrMzTJZJJXAZNtt3aKokAWS8GekHM9ui1MAcMdSBDiHMn2gCP77Qa",
  "key5": "2Mh8Mnn4TPw1pTZXdQqXBVSUzFLbvymRBcpqfMJXQwDGsALSgbYjLg1GukRbQs8KKa8LZBMkVuZL7QTyfoWdffvq",
  "key6": "3W7xYbQVHD5w2qUqxdVnTpBZG1Eaf6JPJ9cpjUA8iegviGUvJJA4w94EsR7FmPY8GtymzxXN3r3QD7gJhCfxkixM",
  "key7": "3xbCc3K6yvCEnCCLdjpp7muaUj2HberT3cACYaJKLtF2pZPABU1GrcD6xh45FMWEBHqNWZtY1TwPnZfQgbLNoT3h",
  "key8": "5Wea2C85ZzWYpsN6TsmsPC4nkrDvNXRNSW6j8PqrzbHGpDyn3dXo6VAq8FbjDH3BRD8J9WDz7vgXnPqRp24pbGsL",
  "key9": "2x4rtsTXYDaFWbcehfHAbyuisynSxKPKbVh3Tqd6PqrMr7g65D8G4nvTivaC3ZN9cQ876TKNAXTCPqEXcv4f6bTV",
  "key10": "38Wq386Zsk2611mUEp6WgG77pfa53Vyb6x5xinGE2QfuhjdQ6fV8oN69UzGZvQHXFjyKVUDbB688xaVWpug2Y2bQ",
  "key11": "21LkFHZk6narbnGiXrjCCtm2hpYK7JC6hTraexrkG3KRRzfGwNF7ggxS7upgrAaDd78yBEfTnCkUNHQvWgMmWzGV",
  "key12": "4wmin5oLjNB8zFNVDZjFTfUBiHQLJx25111Y6NhQ4npghAqkVLzjYGtjZ2CRk7kJvQqT9F858QALfdEbgwKUDfVk",
  "key13": "2YwzD4phm9PUBAzqMcE1tNmRHjtPYFM6aTaxudjP9dZNt8i1859bHgg5iRpmNpc3Ve7rUrGrNZgpx6FLV6nrxiAH",
  "key14": "3KBdZZhb4ZzZA5J7riXLz2gFy3fJGhf6QwdEkvbNwEqZimNoT6vTVMqa4uAdesgJbZDrdHxJZaRNedE2W7ohh9vE",
  "key15": "29iEoJThMXQHKixS9woaG4yGU5THBcjSNqsUmCuQuez7LNRQvDKTvkRqgbMbQ26qLfTXyEJRp9cQP7XLr24tiSch",
  "key16": "ozfvvk3kdm5SSGcnfrMiRAZi5MU9d7s3jbxWZMQr2RXNq4xy36mpmf9ScJRndVPQrgUyXurxvep6K9DPLhthpTa",
  "key17": "4PXinSmHdrxAAPzdj4rQoJ5Tj5trqeVmi5xv3Fg2V2bYzi6tvSynmVn9r9xZKd6daCeHZzAPF9oZuT5Mv4NTPVYv",
  "key18": "3URkf6V9vyyVPr1iJamjcG798PYgJTJUA9aV7J68R7tYR5YQdgo6X2k3xoQCNZ5bg6EgHEtXUF1G6LCHTB7Kp7bf",
  "key19": "gKh8p8YwAUNyEFHD872eqJx1gXJrnr2A1DCqjNHDX11shTNAK3d1SFyp8FovtAkFdoHNKSnfYBXYhafC6MNgSvB",
  "key20": "3yHM8SX4pmjnq1mmwHehPGF2ANx2WYAW16wJu1MJofVARUWYk466vXw8DMioZNy39r9XHc895LMpnbPTbyqUf3R3",
  "key21": "W6d8Ck9cr719SCLXo6fxhDz95Je51rgGN6DW8S4LvyQ449VjTts5fqvki4FaSCkitCNYrWf1bvK4D6145RNqVSG",
  "key22": "4pYpcZ88Y5pAAC72GwRuC3QEk8mcj625fDvTbhv11ECdrSyRg8HUCTs1T4MuL37qKbvcoerbkJ28Ei9CEKQJxFEc",
  "key23": "2aeWfSH3HC4aeWtK6nKyvKakAoPzMiFGvfEYorLeHZrcmFEz9GjTayDGAUSyE5J9JXMp9jCfKqgZd2heznuvsVTi",
  "key24": "63BfE7n8SGSEwu4SYKVDmsPDqeUNQEhh6Lt7ioYjy2naCCL6a2QCCAFPpybKpUtKoqFxMEbm8T5Qf79uADaRABr",
  "key25": "2jEPP48CXZ7ujSCw691bQHjVG2vAWbf9TPEN9G4Y9Spb8RQFY6z7gk3SYNQTYcRH1TRc8F6yeYUf2A22xapgsgrB",
  "key26": "26gkXHfFKqCaXnpSjxtfNC5Q86aJapcNEEidP4AntqpPWSPDfQbTUoq4ciLfHEQLvdzyK5J5dJ2jo3LQaJTGkkJn",
  "key27": "2hYsNtF4J6yJZxQrXzRE93goyWxioQiE16oq9kZ7y1PfUmADH5GAJhKmoBMVzq6VYALctVRsz7TnucaxAP9zxMGS",
  "key28": "5QEsqPx9FQCw6n37JxsFJ4oMm1LdxVvDk69Hdm4Mst7bJcAFrEWkhYriKdbhuYxmLNhWASDaNtmnWMweeVVCPNm7",
  "key29": "4nwgGPRbxgqK6B9vyyTRmjgDiyZHKpUAu5yUbZ9JiA6RHcLUNRaFi5dRCKPjj1YwU8hgYRGHaGYT1BdSjQHVRRTp",
  "key30": "4xoNMt1cS85So1Dew3mS2Xddo3umEvuaXFA5LGgh3b7mDaanCj9k6USHtAaWjeG1wrSJM8gQYtU6ASJWkguMt1PV",
  "key31": "2QFR7FNAv5jt39Bw5vjawy5CHp3MMwsgj2Uc1cjfuBkmzLXuWP4dbYKwKTendmpmwxs1Fn9WXCqeKEgWCjutYRkm",
  "key32": "36HDbek9hAdasc58XHZYiDthtK82znmvxhUv71ycRRxhqr6hxtW2SrMKF9vSxtcst3b4gp2WEMUm7WKZHmRH9e6F",
  "key33": "1BoAiDTqhKQo57mYx3417jfWzchUYrPY8wJidG5sD3A7neR7hE8T9UJhgMGrGvFeCTC1kchubE588omJF9dMyGa",
  "key34": "3t7w9VTFgR7JuSpbKt2f2M5nY66Utt3zPGE4MMmZga4n69K32RF5yiZ38caF1HJF82dd4uJZCEpXbY2meUk3KaJC",
  "key35": "UZUCBRHJZLrM4pSmoSRizQ8Q5xDVkLBRFiqXpFoGVFjz8HwzMqgZ8sG9w8rr8oJAFphgLWKAQxdBBb4SojnHBtw",
  "key36": "3MEzHk1nYb5wdZZ3TeDkrvZCohZDEDXAGuM6x7jMFmyiodgXz2Db4xynQ9Ld9jkVd7AS2G3yf1reg34fjfxix1kW",
  "key37": "Y5n6eujqyfiVvRQSr88ojQ6X28g1LCmV5ea6cn2x48Cq2fR2KABokCT8DKLH37aSwS9xdoYDgG7oFzskb6ZsFV8",
  "key38": "66LYZZRUf7WRGTFW5utBWnMN8hxjbvy89wHby6epdB6RUUjVjmDyhVvgD5DYEZoDQZiwbEPSxKHEu8KJWDLYg16E",
  "key39": "SdZsH99sEK9Ld4AJxVsee2DhBykMuAnqWUfCMyeYESaN2YWtTpnjzKtSmnekHVtD9xWnYRSLMiyPdLCvtNQuefr",
  "key40": "2aJEeY9rLyXWLNMJKynMZENhVX2wF39vFG3jL8MMfeBttC75mWCHnYY9MQkS6P2GopDyVvbwSTcgy6G5RSJ5a38E",
  "key41": "4saquSHLFjJ8fxCU2oKpUZCR1n8PMpKBi2ccjxqcPxDDCDheffgQoLpiqEfofKeJPL9pSrfSrr9zfBS5nZ7YYr2n",
  "key42": "2aNC6dwE8qMK7rCfbBkpC685uXUnGkqZbqTNiNMw4cNzKTanVYUZkPoETScJLG58pjH4kZwaYLzsZ6NMPmdb2AoB",
  "key43": "2dYsBmnivYftrtNrJCN9jChHTf991N9h1RaZ4o9Wi1dWzPg4qZTqsvSc2c55zP1wQvZEXcSxaMssa6Jr99yW2Q1B",
  "key44": "2rnxZSpXZJvth7T9Yk4KbUUs7TJyBaQTcEymUQwdg2XgkKFipwfc9et4wA6pf94CnC5hgiiZjmf6wN6XjJrLrbya",
  "key45": "2puKvfYntrSRXAzG7WSEtXjJCA21i3AUMCP1vigYGXFSR3hkBqwnjHVzZvvo3JqrxcD5cKxuZ6JUo3BjgAkX33nx",
  "key46": "Jk8as2DTQ4XcsYb8mXMjaGepodsvNmV9GdUAQfHMbE2U7T2PgtfC8DpXffcf2YYzPsLWRiuYf1U9s6Ej2wTTbLL",
  "key47": "27NfZX3NGp4PnPsf2xxSoJL3xZMcSHu6ctKB4HiucvnSZwLJP8sw7fpqFnaTYs5ySz59TcDGh54CayU3hXjN4tWd"
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
