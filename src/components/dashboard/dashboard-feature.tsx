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
    "4vdLJRmeW7Wd6MLTaqaHK2K69FHVVFnYmHmnK27imztEMeTnwSu38ViXsaC6bGsiGBiq81iGehx28apRL8am3xr6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5dHhzPLm9Ydp6cteqvFQkAQLW1ar7zZ76rs9EPKUsdUDgjwnYRgUgKtTyZS1BxpyTMGifbTGx5mJ21bBmqw3JzJL",
  "key1": "2gDVYAmAksvre3y8B2sivt4uXpFYQwnPQYLTitKpvrshoptUa4rqDzzaQf7d3NcUr2Uf6GVL3Hed2VAGE9tfQhZb",
  "key2": "Y9vTj4CyhxJHEP8W3EERLU34FSC7kyQcx85Q1rKMew7XPU69xQLSdgwX2QR8W1xHgbsYHApxDX2oJRZA6tk2uG9",
  "key3": "4xa3RA6r3ALcL9apdHr8LrCMLEdDwV448kBWdiu336GRn5UKeXNjTTARGwDBWXYWdgDoCMUbGm63HDKSTQZ3RZnA",
  "key4": "3eSkYnoXqtcif5F1S2KygGhkyDpsQtrCu4ToQfUwssQ528whadGdB2pA3ohd8qgQf34s4ZE2sXwDy7N6XfsesdrD",
  "key5": "24hL663XcdSLErUaK3AABhAwKPYR4Khtxui6FfbBLFMtdAbrNbgoQoqsr4LW4WfoxfQBAEBYztSr5VNDcCB5KyaS",
  "key6": "3X85sxAssuJ6neN5qqd8NvhK3oym7L3DPqEgxv6pxgbqGWE8ehfNgFDLftZRFMQEWmrVqPvGXg5PK7jaBPL3XxFv",
  "key7": "2cLe8xS2aeN76MoMLRw4cy4oHEef1vieVK9fcD9FtnwPAeF8cMHHgDFSGYWB25myQwRyLWVqMmrm4iNBwDZTGNH",
  "key8": "WHwzqxNt9S5AZVfqY66MKdtgxTpwFSn4HKfoNUyHXzUMjQHNLANB6Eb3PNfZCqkjk4x4HWF87Exw3cFUDHkJoz1",
  "key9": "4LfQjg31KPBeak8HpTH3H3FRJAqD1fKYNqWseJ2dL26RzKewradP33Rz6Uac26ysgNBXt57bs5PChkB25PLzjKUk",
  "key10": "3bzS7CDKhswDQXU9fBsmKaRMRL82zoo6HAzLvp6akV1nQwGa3VYwN3q2Niq6AfLGLCAUyVR9G98Ny6zXgUmgwbC8",
  "key11": "3HfJw1DbUcX7KLbMDvAYYVfKNWibvNwC1GJiwB8N5yLCNwXnKtUjGjDgMtaxbU1z6r2sPqf2HtMrgXLMRxYvHxTd",
  "key12": "31ccoHZsG9VMypqxPDbdjBrkV4ynbptbpc4hnm1Z9byw3MZS78vHhmMHXx81o9foiX3auYkGby5fca6h2QhQ8yj3",
  "key13": "3qDN8KFTLC2ncBYPmahi6bYyL2idAdL8gXxmd7Y9CdnoF6P1ZiFR7aHUEhzmEYMNh1kU3F3dCTnYQs7ex1ZYn2p2",
  "key14": "4GXPLqrcWSCymdkTLXQ7NDdrjs2BWuwPmzDctHdDzcVniWx5D7mRHqJGe1FxyyycQqXc3ZPDB4LP3Dkx17xF1TRm",
  "key15": "iPuSyJg2U3UNUSSWwGp53LXWNniNdCet83bTczp3P2ZEjNKSRRN43mzibLphaHQGYrTgdgbd1o7tSUv2471oq8r",
  "key16": "46ty9c9DjtF8HCgYM3aUgCKBM7UwAtfM3t3iQRX3cre2gw6h1C5nRkWuTioEgxSdw8rECuCTb8wGC6k3EBPauo9h",
  "key17": "492ATRc5MdA9y3zXQ7T7a7bGs8z4fcCtSnWM4eMg9XwcWp1Kd9AZngtk6E6BYGzVmFXYf1FUHuWATP2psfKvexPY",
  "key18": "3P2FmPrV4csMWuB9Q7jYVdfqyz2UvHJJ3GXH756RZmKmprM4URmJtQYB6sQHTgSZvzpdrw5VqZhpexXbPXZAvHBP",
  "key19": "xAo5MCM6hoxGja65wKwxo1FNKFCvHoU1zrdpohZbFPuU1fyQQokaDwvBw82moFLnSUV1gtsJqAJeb89gVcXRYbj",
  "key20": "3Brpid5HtjAUNWyuYvF3LTdHotbenRFeMCRisgyqK9Meeu83CHF5ZgNC1hLkFWwqQ8csQtANjiJWbJAs88dGBEj",
  "key21": "2CmXRGJqdu3YJfLSkjH9ku5uFaAH9TSPQxqBbxqz91KcfsfJ5aqvEgoZgdfs2JLptWyoMFJKxPNP3wv1SFwDNsVX",
  "key22": "2nZ9wo76h9TU2dGiiY7sbvFgHchcYk5xhWK2C6s82ojx6tog1AKW723PGUfXnQAGQwFM5Ma6VgK9HQRMbsNTpffk",
  "key23": "2fNT58FSDnFeaagYywSiR6QswDx8aJJFvLcLkEyUgXKVN5iuCsacztgoxnXfdkttfrfGywTcpVJHfymUHmMuWm2v",
  "key24": "xid2w5farqmEHiw2zXbwgNirBmchENQsXcpaEFt2w6qL8PHa3hpDD8EojyCsUxy5W9ocjWoWH7ecAcJSUdeFnZe",
  "key25": "GXi7MScDExHExFDoZVmn26reEcYpCyGbGTzuCLdQnWy6bMfJocBy1Zzr3wFRVbwj7MB8bmuMNXrSW5Kdy5RFN6G",
  "key26": "3c2ojiXExJHd6WNGR99K7fKDcvkAha9EjYgtdHhyAnTUot8YEsZPzgSkcFdGabmy4MfPqDzdpavfuFoRhBeoyGYt",
  "key27": "4mxdgeDi8hm1zy9MM1Fo1psjHETsQSpXN8jgk6EnbRkiUgRcj1SYN1DZkD29xSNirhNSdyciETpmydkJbULLpMPw",
  "key28": "4Ug5ktjQMY7MmgiEWmYApAwtG5nNADr4rWd6A3Ut2ZkhVxd6Nk1K9MSGQ5dg3MTCWdSizqdSYQJ5hEcXfAQrnkWT",
  "key29": "9FbgrR2MDtH558EmsT8XkraNcXBESk6gCzcBLexQY7R7WHo25tXPHTRhA2mM5mV7iBNCsTuNbJZzCZXKMuw9onq",
  "key30": "4uErjLZpPiMLPogaZEwFz8LQSeuArqet3xY8QV3J1MMochTWG3TVS9Au9idM4Rwtc9UW1NJbvkVFFhz4yr7k5Zbm",
  "key31": "3tyKhpnQsSzfdCj9o4ynhbbA4j4xxcjYLweB2wpS4w1kzFrSGXFftYve2btSgVEVbfWnEH1jnvsVK9y54MW6syup",
  "key32": "4YHui95KQ7yGaHJ4eBQkUdYs5AgM8nXSLNxdXpymieLLgewexk6sYnGC5jXHx1GfH9s6orYhc8RGBfcHiKUwm59k",
  "key33": "3Y3VnShSTpLunFXE4bTsR21BC1h9sF7RLezjmPtgyHGX1UHATgJtiAnAhsrEsKpeDCwx6EiTuVFicXtbAqai6mZg",
  "key34": "5hQMgD3ENcuLh7KFBV63uZ7Acah6BqensFiYFE7aTsTFz4mmmibH1LdZQfJoHfsXaJiHSSDyLQ9eKs3ZL7nWEFAH",
  "key35": "2P5irf8FyuPpmiGQJShppNZTN1TZbN62j524fTTZGmebeDsCP4BLW2NDtPJjDMnUa6Vu1B3a8HyUc4odeXCKmum8",
  "key36": "66TZ6Zs76axQtvymAgRGe4YUCnPW966GtNDfpoe1vtD4ysMNXVWJ56DCeFcjZGc9FV2NEG9feA46TwuJhxufC6Bt",
  "key37": "4wriBLikhJL3L6wQkJeFs8fhZBwn6i1eqaxy7sF2Mkaxo44Bez51zZRp7SJAeFoPe5FqVAUS2QxFRQz3yFCXkTKc"
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
