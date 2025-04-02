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
    "35zGMDgRHPXUqwQbz7sb9K8n5PuMkZhvPvjdfmDCcQf8cRSbDjX9AjayvN12A9wZDhNvYEWW8rCB4NRzCfRbnwjJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4EzSJMF9o4JTHTnjGHHJNCB6rwJNALEFqSZsSDR8E33T7yt4iGTGGE51A91zRyjBbwmQzAsbGTi2LkGTLBSSyD2B",
  "key1": "4asLzAVPbPmBmenFmNwKH5m6Le8dmSR316hJN8rSQok145YjZ5s2jFTHX8EVHgjufB8BCcdhku84zStSeMd8tPGa",
  "key2": "2zDphY9PN8geDMYBBVnFLNySCtRqpGiMpHMqTLFvaxCU7jbe8duqq7pRHMoj9PHGq9fak7SbLGA42XgvgCvcNy7u",
  "key3": "2xUh4WW1E1rhxVWU3FsuMxb5RNHH47GCK3Ch2RNE61VymHxyJXLsuboXqTYjBzVc1g1ZR7h8FaVzY8Bo44q3aDce",
  "key4": "5QPeX4djT3uBRd4xSJ2PY3QBafnnnfTgqmrsWcBze3px4AD4hPHJUR9Ln8H1hhRLMFcMRJnHaimNKZLvnSY3VEug",
  "key5": "3JqCSyA4sagLwYBdRizn4Rtwq2ZEqHfgrW2G2XwfdSw1RRT2ma4S55Cepcbt3NZ8DWLSku3cY6QQeex5XW77XhmL",
  "key6": "jCemsBrhUWHoefjGtErUPmEjpB6iy25J7aCLeK1ffwDh8qNVvMF59u1sYUxXNDedA6eRPH32bkzpmLofGnFLgRs",
  "key7": "5Q2T9JMusaH4WAqc2o3Q5jKvRduzfW6Zs1TTzEpo6EiRioAu7Bk2Y9rPi2duRgp9zsFPpKVLk5LTFiT4cNQdgHuP",
  "key8": "4jJFm6dqhpX8Rt8KjTT9oCRn9KBZkNv1PDVHng73o9jbwQ1U8utLWjfrzSxxtr8JN5p7ajey5qKzBm2ExBy6Ts3G",
  "key9": "JbLzxX27Y9v217wikh6ZoiY3rhRbHMG8Hv5DJw5LUtXtVvo2poQXvTyAjuUkQCC9hsx7vcTiAeYFFtgVELTro3C",
  "key10": "5sGwHdkJ5Gyeeaex7eXX19ETPmV6E9gEptJ5bnLv53VYZBbqFGRWJSiLTqHFoDshuGswbCRYM38xrqLYWMjMCRXa",
  "key11": "28LBk5v3dmteaiGMoCKhKYb1y69iq5jHkvwfTS4NkDGKMvi1t78xBVwv7By4w13bNr624quB5MFHwecj2BSpisiR",
  "key12": "3aNiYzbnuin1fUd1EwajJD4XKMrNELKRgiRW5oAMa6X5KuknUrh49WmsttZeJj4qwmQzxn9S6AUmHezUuhNR5rB2",
  "key13": "2EcMoYtgaTB7Zcejk5Tc7G4YxyGd6gqiqudgUHsHQZuYDKU2jJuv5PCimZxvnZ21KjnK12Vj1zHt4j4ZpudkNMRn",
  "key14": "3Z7c5C88kDxeEQYk8kni3PL7HXEK6jqBxT6U5hGEyWS83oY1dL5gSqYZak3TcZNyBmFrgYVgKd3yUg4TsLP6oHc7",
  "key15": "3aoisnbMqgZU9q8FnDXxaJGFp8tMLchymnet3oEUifLbLzcNwJvh1TYii2ZnkNqgiTw7jM6jsUXT51CAiXimby2a",
  "key16": "5UEo5t3rUqjmM1W9jbmLhzTtnWM8Rs9wjCnjaV65RLD6WULo8375BiKhUm21Bp8aMsBz6N3CW3irDjeKJETsZigB",
  "key17": "5qqBZbWYzBE3AWsMdGxdxQMZgahkTqzCkwPJhMBFsdtPDaKpsJxkCt4NhN3TiSGg8VcbXTJQvME5nMQ7iLS2dtyV",
  "key18": "2kyPVw77r4o6nWzFAPijmm4tKs8ggFAnumxVmD7aTMTTht6uU4sUEbsjVbmP9BHRoAwZzNjDgLrGkbkJxuP8iYrL",
  "key19": "BeMedhprEzygwFYyYoQomZn3wEpShhox4g87C3aYneoBtPdXfk3VJPKSfiWZPnPaGPf6rx27TMBSKSZNAzctFSw",
  "key20": "4GTiyqJ6Pn4oqkhbeb46XRXbMz3GKgnmzWZSwFfqiw2DnkvzHXCm3Gr3dosBXDCakX7v9SgG8vYL9yrM4a5zxrHU",
  "key21": "25Fn2MC5TuqSoUEMtTvDNMXLR3qEgFQwHgvqXnpEysnBeF72uQQV3MyRiBKxgin2ZxfjZGfDTAnU4zyJxWYzDksn",
  "key22": "Zdf8vm6ttmCM5XZmvTdYZv3Ky7B8RAgN5iraBMXpKXBEGR5ejY3HmhyNMaxfUzoXp55biL4XBgLk6xPpXPuctXa",
  "key23": "2aVv5cd48AdSgWC2EtEGn3ZqHnfwXXRrAmthEbNjmBJ9Rnhw8KK25MCpuPrs9Hh6Jzn7yv6VyPtm6WGnZdDBfxBj",
  "key24": "5URnsiHNyNgTA1Hmt2eXQhLTLFYBs5wgn94RTRmr38muxGppx8XRLUgroajhbqbPnN8ARtwrcK9rQs52AqxQmgcA",
  "key25": "3c56Jef5e3uuHKEuzqAUDCGeFmHCuqJwSdzTLf7sprY4jpHQzi3BHjofA1MeMZ4JoukvDPHdf8vB9DCgiks8aiA6",
  "key26": "4ms48M8oX9qJrojG72oCsT9z8JgAFb8hoVSHfEgbfPYL6egg9nbKC3hk2EnxPn2CjLRzwS3ijGv6ASKGGjGJsy6J",
  "key27": "328kNN3iiscERM8ZtwhHnTPZdvqYJyHqaEQFoUfksRRWKc7RqABADM4xtoojqvanfEDRoVwPrQ9aK5xND2XzoShz",
  "key28": "2YTS9EVFqez14oWW1CsGHUEa8V12KsKrn9KHTAsMhy455AUAVpdi7KrsPv4hdvvA723E2n8N6s79CWZsoE42F1Xm",
  "key29": "4JGBCFJAgtL9WSXWTw4EXpC4w4kmcNrpnqzZjfWypHUmTWuhAENoNjAz2khq46uTxo3cR2AAKP5VAaXGYWZz5m1T",
  "key30": "37jyjsqUtWZ7Q2jFzwLgVmSo6YmzyCNcrqtB2Ni5gDNqe8XffdjneP3UB8s5GjqqXxhgV4pqTeWmUEA3iKqbJMLT",
  "key31": "Rr3wporZqH6LVrmof9qvCBrqsnuz5MsXoovPTHZpdETSBM88CdXTCwr4AsKsT9NWcvcLWA8UvsXUv7S4VHhqym6",
  "key32": "3eXtupSvzjYY3HMte6LwstqcRns288rGqbnMhVGg1v6syw8KP8NWwKF6tb6oidcBKjQsDzrj15auTBcpusDtFg4G",
  "key33": "4rPFA3hdLUYcGgza5QBHYhnUyHGvaY8UaL2EpMHmJemLwCdMEpkairxKQyvSid7EVbAQvwUPavVcjrt1jJegzuYJ",
  "key34": "3mgeH9GJzVqKPDffGnWQEaZnoPwd7quuNtkJtieVtSjP3LWz7Qq15Cf7mSR2BfBURoN3gf6uSSjSYpjcagQw7Hnc",
  "key35": "5inrAhKTv8DqCXgiPYHLEHwNummQJpJAgGKutQMgZC8UaGrhCnzRTw8H6ewSHLAHpmtJRhY48i9Hs8gArFUAXNqA"
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
