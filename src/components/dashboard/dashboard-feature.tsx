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
    "29SyYyVe6T8dY6KCSwjzBDir27SGKXjy6gf7QBqo541BbpkQPdZ6Vcm9NKYWPmrnAerBfeU6HTdi1hsK5C9bMznW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zEb19iWw77jvVMzmnA4HZEv5sidNqUgbC4WxQDUjxJNKj6ZZnVPa5RzmNFZaaR5zVnuAahPmw9ymFRLj16gFktK",
  "key1": "5GnZY85GWZ6mLqiVSG1qihr83oprD3HdyVpJ7c3m8MoGxD3TDArPR2j9tcR5xwmMdJeq4ZN5acbeMYjKxN6y5Wpt",
  "key2": "7E5KAiHSEJz2mwsLJxiE4PB2Wz18yB7btJ5Su7hRDDTmsVXcrRYKpeNTrypGPgPESHrS9XTJbepExU2wsSK65od",
  "key3": "5uqg3XcC4Ef8vqJcwr1FavEZxbgkgt7K8fAXBF18R2WkGgfAFcoaEnfer6eC4HufdGHGzWW4Z4fM3d2yB7vQc4CZ",
  "key4": "2KcsWzbtL7SjzxYAFtD6EWn7ua5tZzFiCh5DvJPR5Yep2vhccbQhaanWFDBDkPpRbxqhuaf1wX84MFv2oeiV1JJC",
  "key5": "4qePbmqErQaDBufP7uyPVxaXhsGCY6CJGkskY9Jh9NVKfWVAZLatn5NxsSTiVNRuPuW96cJn1bV5ChcE9zvyAdJx",
  "key6": "2VdFkxWBAJoXds9EfbXz7ByF9HJMyFdEgPxzhMQYCWHYLPL9ChdX7su2ycinhtv9jWZK4PLh8CwhGVj3bTrZYHN7",
  "key7": "CrgTsyLmb9MFju9L2ydRzvH2AZjnniHuGb5YtMZXspD6dpRrZ8v7UwDjSs7C6524Z2o9vMRN2jdYTyxdcv1EzKG",
  "key8": "2CeiVhnVgTDWFZYANg4suAV1HPWj5ULyY9jqZBYK6C1VJkV3YKKAYm8aoon1HXfvckkn5vcKdR3pp7Zbtxt7LhBZ",
  "key9": "45F5zsaqEff4SCYGz84MBM9HGtg7GeYLMG7ECunjVENncb9B4LZp8G1Uo4sczPJiHengyYkwFfY4Q7b1UDFwqKzu",
  "key10": "3dpAZuZ2T22oiL2enRHwQcMoJ7xdF98aN9TXKr2Lvbh7dDHqRA9DK3s7bG1BPowp5K53uQKgw1Qqx8sZRGr5m99q",
  "key11": "4cDTKZ9kbe99uipUz9CG9NcoSG2TvrXbPXZd6ViBX71kMpTiqy2yLaKiYbespNke8nnMMCYyPmFqyM7ex1geBc3W",
  "key12": "3kFU2DcEo8fFnU51ZeocBKed4YEn9QumCgDch1JKbX5sk2h16M5ArtDpNpCtpFBBFMiywLhQzyvmzabjH1ZMhvVE",
  "key13": "2PtFRHJTgmUfCHsRr7oKWECxPNM96tm6hNFGgwiHb76ETH3XQyHkB2X83otnWkdrF1aStS3WJ5L3ituVsFJveLM2",
  "key14": "3Ew45h5RsFvk4GZ7sdpLuajx5kGryutS1NKbotUJcP9NQCRF9q3cU4deTQFZ1cQzWPxXDS6yBL47ob5QHdFCiKn3",
  "key15": "4jNgPJxSSSghRwZctSaFFJUifMLpNdhHn1oP4mZBQbA4hrXDHPLCvuP9voy5WMQP4eyW1V6pkJN1efZPREniz27C",
  "key16": "4MFr1NNbXmo1zXebF4MauAszLhV6oqd4aUoPExZQfmcyqy1Fwnf6Nsrpwbg2KTQT7NnznLqNciog5EFJKdBbUVkb",
  "key17": "v7RcLwz52R6uksTypSvYQH8g2r8h3miEEyqX4mcRD8B8eqwz527DUt99LWibNrBU1W2kReoMtBrjdsySF5KkJyT",
  "key18": "2y7SRV4bR2KsjQU4i2ZPTN2mSWyXEZm3w3jZBRpJe4X8XJXAw7HjTFXxqViV4HfvzQjNg73op7DWRZFPEY4raTDs",
  "key19": "5okenm9TiHX9D6jYu7HQZf8GenNxDCAvBAwxWRghAMEcgrp6PkJ2xNhjq3PdTP7Y6KtE7cHcG8sdNnpXPv6EbUif",
  "key20": "5P6myhPHZH4zHGj7Jzi4yh6sam2xLN84H4aLzgZnjVGXZ18vgsAQz8frVfwXTXTpUA8CM2YNNEesPMjn7iJ7dc5u",
  "key21": "41Uq4G48LwfjBDiqdU5NhD7JcRf1NGHWG8DnKnbeXTiAsNrx4uwG3hgviv7v1hXMaGZKeYzg79XcLThX1QkcdmTV",
  "key22": "5vXG9amMz1L4UGBzTMdbDiLqVLXHJJSxdUcs64y2YiMa2rHqaDUUk4H8hxqr8FGAkd5EyWvho21pUpd7JUvRqNUZ",
  "key23": "5S4F8YmvqNx9yykr5F7dKi4QDBuo6TKnhcgvqra5sSSX6WdKdEyBWR9xPtM2tP37pt4jUBApfMK7wqRv8oQ8r98U",
  "key24": "4miDVVw7Eci8BcUw75uX1UpSDsDAVUYwgLbiMNvXS5xfanTGied8N6n4vnBUqvjd7xkN9N1bBVt1ER95MkfVQqYs",
  "key25": "5zKRLdnBPy3gope9b2qBMu4QRQzA5vCuvpxBujmDHkmsJiX3VsrQ2KAom5NP6E1MiGn3Hdtr57aLpk7oyAcU6fLL",
  "key26": "4ReSXfbTY8f5idqvi12SBKWbtAPLhSaemBZtid1TUX1uYQqX8Ze3gbivDiRqpWKrHc8okpJnnNjCs6Ec1b5aLK81",
  "key27": "5Jqfaoe859Y9B5iuq3a9jQSLhjUWQDK4z9XY3XBFqgDiM5o3N7CMuq3c4brDT8wiyvmGkbqiMjZXQpRATiBPti12",
  "key28": "2KGJBnhN2VHLbuaH9Cso6pcv1Vaeo82ntX4D6ZvKTMqGY2DzqdsQCeDEM3jdxBhcY31MSJHgJC7m9TuX642aoDsY",
  "key29": "2dTLpZwy4Bq3eGidtwrbkHL8xWcmwfGuqvTH5RyqBLdi5cTS7zR6ja93pKCqJU8LPiMetaMqXhBZzofW237r6qZK",
  "key30": "4gb2M894SnMr471JWJSTyZKjBWN1X71ses6ndPB7nVkKmGukNcfi6Xqay48gZKPF3vpDgFZMn3F2TJWTJLFZi2LG",
  "key31": "4FE2C8HfrFnXP9W135xQeAdztkNmC2dWFauDkX5eGUxDBk2FBzY19Zbbm4rCGUZbBavgU7qWNSWPVGE4jDethiaW",
  "key32": "3q4Nn9YaSybg9nkRuNohd2kq4xSxPoHAYUCsMHM7nPPsEA34gwnAzpnihqeh4U6isfs1ZSUuuMhxJfPAstcPwuDn",
  "key33": "SJvLGw7biPaq68Xof4i5JZvwrN7qnpagLCWFLbBYNHnkdkp2UAgVrg539BXpkLUPT49r9cuCozZYeXeyk4xS5i7",
  "key34": "4ue9hygsatDugRmF4EdQkHFAcHkNacMj42yr4buDmNQFJ1BLmaevwC1RasmruZMx7m3QbcgdToPAdCu5t4X6MyKo",
  "key35": "3VWP4awaXdHTXcDE1JduHrpnQVzwGAxmGFpvXrFx8E5uhLopFpfGazsowWnCL8q5z6jMGHxqeBs39p2HrX1vtXkQ",
  "key36": "4Yn6NzhyxXQkMvjsPR36K299XopTKUyXtBoxNRLoeoa95U8j29wWPcX5hpuYqwrWirWqA8yNWbDPhSiYTFsm7qYY",
  "key37": "3GNxGHnnSW6GEJc1FaggFqadDYkwwfiF2cAbPmV8EZvLAtjuyZWvwCAqFN4XzM3kTtZNvoq5yuFj8nDzpnvuSrq8",
  "key38": "3fBSYkhpaz6V5uDBa3tm2PY4AiB9GwYd5U4ZVKrVVw23WgeR39p9TK2geuXDG8JbtpWuw5WPsFVkmHV8a9nc7wgL",
  "key39": "uZUxy1PTxfuzYnoeRtTqAitfyutXzRYQEgUqZX1HVjTG26ymgpwbapwLRAedLvLJaX467YJQ3BmNmXkmSD8tEG6",
  "key40": "36n8y4JVegWgW8Luz8mK63souHVpFntKPSKhUDcxJz5L8om7ETVw4LcBhKEQVBRuEMxnht5Y28JArAnk6keingi2",
  "key41": "34eJ5RYBGmjRzWffMKzVjgN8TRLoMcWAToRGPyAEAux2GoE7eqfotnaabVCuVgUTUH4f6CZwWArE3WgfF58nWTMF",
  "key42": "mXznjNdvpos7oEqNGXwSLfy4stEitu5SSSsFhjDckJB1Zin7qs9we4NUA4eokkrgZXVvUK3qVx5Vt4zcBa7tHo8",
  "key43": "427RHUBAEBtZJjx87Jj7mRgx9PcokGNPn4Z98rywdv2xuD4qxSxxjD2nNdND4B5F9AQn9ptTUKgNHLntejB7VpJM",
  "key44": "5L8QSeTjBdB2Jt6YwxaGWkuCJ2hgW94YauDR77Hv3HVkG7taMLLfgyQNvsVaFfutxgG2dszxpDnWWXc26UVTiRkz",
  "key45": "5GbtGYkTWLCkK7KpYMyPRspMMnavTwQRg5o6TK4MszfuARdiFTeUw9gQ7J4JZDBifPfNVcWZauq1j5mx99e1FtNW"
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
