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
    "2B8f5TAS1MLURqYAH46jCyf48z7kbAZo7JVPKmSJmTNgEp9djdGqZSnwdDPqipxNrBcVygTjf4AZEAkRAuF95xcp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Mt1WT5jHtyHM8sn4vaz453Z42CXRwc3HUH1UXLdNfJCch99KmNngNJ2y4LC6aUCfSYeUKV4MnTkCjLDioKpZ3hT",
  "key1": "RE1qhnGDiWBib1i8sgEFdN12FcpzPzUp1rchRCZsi4C3r33KBKdPJhuW8Gc9hQzr2KKNb1RZZeiYiSCHyrmiWRq",
  "key2": "3ALuiLsENyFUJQfE1E1jyeDSjqgPn2osFte6cKpEiAe8vg3HZzpjQPoaLrQzYpuUGDqsG7ALo9Cvtvhkjnp7EboF",
  "key3": "3trnLJkw28qg1Ystu3eATVBtFyG83eRxRzq7Bf1Q4EN5Bco7rcFg5ohViH44osJhpRzwNQnpxR2MxwgBtVyDJf1B",
  "key4": "5akXYXZpKoiUEn1E9ai2HzMPVSuzwGNQoRQ9QVoPFtxV4rPbUHUWrmjTBU2oDcpt1ypJPBQgEsShqBgUCsZ1657u",
  "key5": "5ucQnFBgeuZcRMY6MwjCv2DgG8EG4e9kVHnuXTHYeqtLWjy8rDaUBcmUKC4L7cr6TTxduUyHveQHjah9H8zD6fBE",
  "key6": "2bqu4wQXFMQcYeCfAAvpaV7oohTb7LpcidET8UrcUZFiJFtUg13JnprPs6juZXcTh3FeJxSfacdPFVAY2VB1u5Tb",
  "key7": "62eLn9yYnxGEjvY44grzqGAqVLMPBg8jwvoe4T2CYEA8tMrA9jrGLVmAyNkvJzHqgk7oUs68V9SGdTwvgaHXuedb",
  "key8": "24qXdapxtBeZHbYSbjNDHco8FreETTfbSR6N6dmpFJkth8WKTiBU87fdfuADKXszzLWLVbwhByQf6LZNJze85SJe",
  "key9": "5Nar1naET8sGGbx5jH1TwKRXN5fyDJzAfKU3k9QLAwcqzjZQHfiQ16MDq51oatJPaSK6iFxd4NnAcpyKLXvaK1Sh",
  "key10": "39kAoG6qFgYo9NAF7276oBGtcQ91REXNo9JoiFDM7qH9uEwj61vhphuK46yqARiihMEWZn3AbaCkT8G5gnpmgGur",
  "key11": "31ax6fgcMNBrbYjSpWa6ZQSNYgZrj1Ww2BJU6qSBZ1ar5ffmehzvT8X9yCQJn3s5gnqXbg3cXb722GV6VgKrD1jp",
  "key12": "3abDU4RL4GyUfG8nwYmazoSkY7dmVKZD8FUcovdpvtdb8sHYfRynurNxgik2gZAsWwcHYmEEDUB36xu9ktoUGRk7",
  "key13": "MtxefuCcD7wz46pyBkkcsfpSoW7wcezxvZ3aVqUwWGRMfgFEKZn4XAxhdNeHdHEJng8QHaqxuiRQ8vM26T3sTvE",
  "key14": "5Fv3gSAqCYLffHoMdgXLyUa83E4JEi7SkUyLM6K97WJup6dnwjkEAwq7uquyT5JteEicgTdDGm1ffJgyqtpQ3a8J",
  "key15": "5Ht8Uo8h3aY1ukKBLinLJ62tLqWQHoktZYwJdvCvmjkgAG2Y8Znm7rZeVAr2LLx9jdUZcJ7nbycMYDsCdDmqkrkU",
  "key16": "5MogmpRu99r46r5QfLTtV6VgujTQVWoQcQAeMq8BW8PmN2NTG4rNVauub8kaCKFUoYkpuqdKFJH3joCLDmxDwkXo",
  "key17": "4t9ehbXCzB3ftqRKWLfmWvA9ct92onFZ2i7YzCEZKA6Fh1pgwD1EMhBFmjhkWKRUr221y2mzR3oT8Tdjnu1mP1qM",
  "key18": "bSkodMrudraGPJpPiVuNiHLH1WMUBobrc1oChyijH2Doy9qzFHt932t7jj6KpMtiufFw2Jko67RWfwU3eVFcBFa",
  "key19": "3PZnWm2W9dfsNumjunSAXvSoeHonbevFZeyvVCmh1JRgRbmrvSchPVvdgFppam39sp8JMahapCDS8nJMnkhp7n2w",
  "key20": "bxmzWgznDkvdgiADc14jDCvT6DGWgf3JnnsHECbxw7KZ4wYDbvg5ddsztj962EtUzmL9ZczyfAxby4HpV7Mxt4J",
  "key21": "3adCsScLFw77mCSNk86zKyszAnDD5YXmt8DPr4m5nJ12FJD44UHX7EGkvoYPv8EtgEXKEEvLrVmA2zZK9TEAXHmL",
  "key22": "3vSyPEMLem5HLxegmBf3j3B5JX3NmcdCkSqz1eKzCoViwc2a1ocfDQyf4CJjNDmTMYGEvn9z5jTX5svgGYNqZLLf",
  "key23": "Jx9zBRkctNUYc4ABQLtVUDHCTtLqrCjtkirc5WiXNVpFyKvKiAn1k5PPU2YutpPuTAUim8ZBxAAbQbVj8MsDfiY",
  "key24": "5ajfSx3GWtr2Ttz4Mf14HD2wtc3imrxvxi4v5LAWaAoi8tbRFepSkWg5BPux8jJLJV41QJfLJ2jUVCp44ze6U7dj",
  "key25": "4VBysQjsRoKiSYgTXxnJtHEjj89ZzLQBJSQhhVR2rFC3QwNKZktDFysFGohiLpaAdzRdP1peRYXhHD83Xeh4zJpe",
  "key26": "4fybrXQ3JeL4wTQE4feUZAr7AimU1EgQKxy443wkmt9cyGL9Rmu9FwGxsT1DnRgTpjD1TLgahL2ysFTV4SFC5VMR",
  "key27": "232ocWXvgQy65gg65C1KjrBUdtruWKusJ2FTWmjK4fj1uFVPdWFwVfpwpjWoo8qJ4edqCxsAVsf7kCCNmK2jYU1j",
  "key28": "vountYocR2mXbG9FBtitpnQofkK1dW5yX7tXgiVewopmzAFprnGpL8YhY1m3T3QgAVtjofKLqYF66FBV6wyH2Kq",
  "key29": "5hMb7JzqjTan4wCdFeTgSXmAEgsKVfPBjeCTQ3UvxDwgzDRm2mFVuWbkjvLUpXyQJJTGLHy5YMuX1NTyMVpZZBef",
  "key30": "5ZgLYAZqd9TRTVjqpmgMHKKVvhNtyZEQJudTSMeKY4Pm2ArXpR9NhiaCMtAfy2Avr3N5shjEv6sQHUEzujPKq6va",
  "key31": "639fmSTcakv7Hty2SFc4Hhh1H3QSFZsNLDKRSUUYQqht3DaUJ1dc6HQHpwzibDTuaEq4kUXyLyQ2PWfE4B4oPzaZ",
  "key32": "5MVmYAntxy6WeBXWjB64YrXTDkEftMo2xwUjNZjWqBEsHH2xWRjR9hKJWxCrdjX6kZGFbXVPGM7CjDb6rTPCbELX",
  "key33": "3QpjoBnGt6Gq9TgEgxR2UnGg4CGVd1yX7oZvtewwuJRsjpJT8L8JTRB4ySB1Lj66y2A3c43pFv5xZmBLaRTR151A",
  "key34": "4kNWqJU5jNMwA4uwrFoVXtqy7bSohoN8fe9KJazDD8CqiBQD5nXyxHahgRkb8JfrhkU9kMD8vwXmSDC7M7W16KfK",
  "key35": "5aP8dPZYLP38o9JboKK8iacX8ahX2GxsERkMptdqfZ2Z4HDtkbqe1HXZu1pJr3UixkqwJULXgNUAroDogWsygUW",
  "key36": "3SPtjRwHCWR8uVTrwRdCvo3DyddkCNaCXqMPhGXq5WCD8A9FcmEv1ZwkK4ZVCaUhR1kVw9ziqR8PR1VTm47ctf7C",
  "key37": "3JeC4SNWKa9anMP95uhxszRRXMhSysS9tXqx7vqmUdgWAjbh6d7oV6EXZZmt9FhJoxf5zCNDs9sYe6JbHCPEYimD",
  "key38": "37sMtc2ePcagyEDWr3N1JgZcMQm26tEcnciE9kg3bpAYad7itmWL7ySEyh4BkPmpCUdFHLpHEAEbwb6wPcBXwf8X",
  "key39": "3YbciNFBt4xXyFg8syvtWcm8nggGS4czb99YnwWPFkRLDz6SvAiVFeqq7VbEkJfCbQk7rpAPGj1cwKbuQs43RBNU",
  "key40": "516kPysfTQpAjwk2Dxw2qgpovaHz7SMNdYEFTCvyXwnie6JcWfCgYiDkvedGvXtKJ9rgFbJz7Nrf1EkjgJfencWG",
  "key41": "31f7tSM35tWxSHNomWLRHq6rtUYL3bHvUkcuGzccx5XLyCko7XR5GYsrAQ2EAWha5S4pRSbRPDm5j3c1jZrzN4dn"
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
