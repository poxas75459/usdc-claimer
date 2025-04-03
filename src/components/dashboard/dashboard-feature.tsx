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
    "4U69KULcxbVqUitXY7CsXfGEqfDywAwWfc1mtf1rg6CAxRbEYjkBUL93Um4ZBrikvYEJZEhQ1kXPjY4M9o5iP6jw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3QK5gFeJgBauRvD7SyBk1jG96y8eDRdyJRxz9cW8Fd15eP8PYjTTKdDDxfW8y9GYA59d37dtcgjmyRLzHZJwys5G",
  "key1": "oLXdV9F1rTjYh18XKemRBcg1gUQW8EMHrL5iuCMyr6A2TB9iVmyoip2xddSQMtgKWrQBzf6uaBR8YqrHzpw6VNv",
  "key2": "GcmGPdoowbFDMAFvUA1m9VBuA4rSu7653UnZgg2sipvzyaHcp8vUSZdeABdfFSMvyRPCjzdR2G95RnoyET123Fs",
  "key3": "2m6Yi2zPZeBxBDCygdyTCeb12WHWK2MuEUJDoVPGtuDWysCJ1evkCJTyroKSuVTu4M2KivnfdioKD73qoJYHrLwU",
  "key4": "4dBYJ6cDrT3tWiap9az9dWXTQzaNV51NzT5v9yuH8URLaUkBYGmWAYLqFb3vpFJ2sD8aqndXV5ozEZExkEsrR8BT",
  "key5": "3Qh2PzvecqeTcBMmQuCqsrXQsuPM3rXoVoGb3vAEDbrND5FhWD9TNrKqWDkW3L7r2ZbtbfGhFcYnq7jLUBh3g7zR",
  "key6": "2CZh4ZSHbjEUPwhq2DzzR8a9urCSdWjvHD2b3LsQ49Zdowa2ZLnEhp52Dy1VTke1uu1TLguL1dMgeg9przTAMbjK",
  "key7": "4bLS1vmveRoVg1rVxNg45SeWDw93zCgSNc8basXhw1jVwgDZ98Tmm3miHTgqJ5Xn1BkdMTgntd6W5Q2Z7ZcsLveq",
  "key8": "5W3YCg9FjaBpQf339BX3gy1PgU95bRLgcsoMZJuRXct1cvQcqVkcA5X53JopzF8y6Y1tkVKE7KZTvQ59W55Tz7Cp",
  "key9": "5zXX5fb9Q6tRx8sYR6MFqefiN2Ky8jD35J9GUUTof4j3sCw6XRDviQPZVJByNr59ZuPJqm9t6H2HTBPPzvg7hEw2",
  "key10": "5jGspWGik3jEgMjurFPiToU6gczCz5GF9sfUWcX6E38gYwaYSVfgWcfCtwESFXjHDvHQcFQHKPKKumcCNTMEvDyj",
  "key11": "4wzZzCr7rfjGJDgC1ksz8qURHdBwLYDp78xZ7Z5ePpGuvxAgs4gnaQZ3EDVN8iDos2hUoLs7xnN8M3piTCQanfse",
  "key12": "4ucYQfLRQevQoUERaPjZM2AkkucADGGZvJ8hJBtwZHbCcUDyPF13SBqUvGdXcFSinuuGSCzHgah638ngiYnCw3Ha",
  "key13": "597GYaT5ZADHtTp5Y4hYCB8yrq653E9BdZMp9XWcd891cNuHU28DCscSLXvnNdWsGJi5V6jHiXvpokUcsSZpo6Ju",
  "key14": "4bHcoE4mQUqMUUpLkmEnreVSzTLBxVqYwU5dz9JAvcZh3wtYwsvRLiTkoGhpDx76mt4GkXM3yriqz2LPnK2RNG5F",
  "key15": "3arFiEeTXxSFxKJkofB2hwZVEKTXnroDsaDyNNiE5pQX1JwcFLd7YYwAXWNKU34vCrBk9Rycov21Gtb9CqU323WJ",
  "key16": "5bWBXV8pPoJkJMavHdonsXpi82foL6v94zfZ9hrxG4vxqucXsxc716aL9WitZ6D8N7zh9TE9ad5HdULEX38K7FRP",
  "key17": "3GMTckeMcvPS4AT12xZpVV45QwTEk4NWd3u77AykjRJy9xmVCbvqnuwSuvrvHBFuHh52tYcejWMfZ3H7YGcrt4Q3",
  "key18": "25GWvSSeudVsX5fxywXwqu9gzKb3ibVPNuWoHKpTL3ZGG5J8TZ5ewA15gEzWsVbGD6W367HXNzATp3zADqHjN5TW",
  "key19": "3CutgvsiDfcYMtAfwLGB6FPHnwSjggKDHomzihwYWc4kmedXewpKVdUDsH17svFgWiH2WoBXRTykwUJSGTkeZQU4",
  "key20": "qJXT6WYcQM6XuaFLjHUw3LgxPeMNDrUykfNDiq4yPVMi5VYtRAgFuJXxuBsBPzNiPfAmjT7JvuuvZpiBXVcZiNo",
  "key21": "3MBRCS8L32feWcmJ6vKzofgmkxXD2VTvUFi5drKhxX7o5iif6fJ93qbehwieGGmhVywbkDoHuH9XV5qLJiPmRWzZ",
  "key22": "rv4bnYZZMiFpj9Fu4RRdTAUsoKj4duZmaonAK76jrr23vwxj4eeGaBn4sg4FWHmnT2z94sXZAcJV3gFUx2FFXtX",
  "key23": "J7DzN3qPf5EbomrfEKrWjgNrEWK7HMciVBMQ3Mz6SsKkrRxMfr2YfQ58iZJb8Ko1BoVBBczr2PvrFieYP1VZY6K",
  "key24": "3c4HHspVbrsqvpLfM1mQXftqAc9H5KUB16qrFwupdJR9eyVhpGqcYb6AE14qAA1aM9LBcQW7iusF37PdryiNqQWY",
  "key25": "38Zs6amGsBJz3X2Y4sxqTTDQ57yNyTQtipabuR6eq3M8PiA96krAG9TCw1rmsnG3CqGRf1DikyVsMXPPSKoXheGz",
  "key26": "SMdJDkzUBpnWwdRzHXu5nMuZutJWAN3JJPbN3USNpVTi3EpCEnbJnb1UDS7ickwCSZn6frmUzwgh2XCQmebCqUj",
  "key27": "2JEfM9nRipqBNB9Jqd7nQ2XbHkWdiXZtK4Tu3TF2cFyDpSsYu78ifgXuAzgz3stsHmDqqWoCtMeLfoEYAGEr7UhV",
  "key28": "2NxczUrYPLNL9bz4mR5nNm8mmSY9n7ohPA63hxzqinYVvHxeNJhxtDSSXJhypmASzFVkhZEGdDpDKvDvdd3c2qve",
  "key29": "MprhsMcW9MmLQ6DHGiQKKP6uxZh4HDpumy7cE1eN3zp9VYvb9r5LARYKevZYqaFj8Jo7RMdhW4X6MNVFJ6M17Yo",
  "key30": "5ETMtJhkko5fAUip8z5QrmvJDYFCCwB2pFoxpTvs7s1Dn2nnyj8z8Kbf348UW8qVSHF4TM22ChHzhPqxCHxZ5FnC",
  "key31": "5yTf64dvadWzs1QzYJJHLqqnhzV3oVtzegpMDgKtU1hsYXH6onDTAxaGtaXoy2sZ6f85MxeDmDJ7USZV18VFGfSP",
  "key32": "3mzNmnamPUgX8dLnmNeCC5ccgRC7L1wqSwu41R7uk7Zee6SfU2L83bCuN8qvT8atBUkMsVk27gCr9SXEcbLXxubE",
  "key33": "2rixkmHTx39U3bthqjzaiLEu6DfrsbZ3gFLodaENyfu1CdobuesBcsw3vqZ5M2KojZzuBvporVXK8htYRdTYVLng"
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
