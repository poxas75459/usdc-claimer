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
    "2siSoiptturgNwLmH2niD2DreCpH9fvx2auuQdvKchuESkchQDd5ZSQpHdi1Dt98tYUKkyE9pFBJ2ePSL1GSextJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3sSugburqJfuKMj8sxbXUT7cFoun5ghdnowezeNRoDwUMhwLDwBpL4Js9oamfzgGUe7FQJNmED6wGnfFA21b38kc",
  "key1": "5UFBFYAP8Du6ZHtP34vECUgqHUeZhMfox9PMs7CmKPKLjAFee3fRrYs7CQ9ZbZb7bJ2NouP4AHkorX69GLc8rrQW",
  "key2": "83XhwFHLeHYuFRsFnVfdWbyqKshZ7mLJzHXhYE4HQerbfkQXL8GrhczR2NzkEUix7FrTkG1vxF6s6qBzDsTtNno",
  "key3": "388NNHCLTUviBThGmCjK1Cgi3ADVjZ8TvADSLrzBBztUeXNW9EqjJefMsBZLKGhDz5oyPhBct61RnSeSMe4jntXJ",
  "key4": "2ddYDPEo8YaFA1v8n3pzk1ffJGN9sMGYkkAJ83y2tkgKSkzj4zCnrt16iqAqobp66kRFvoMZ2e4qJcoAEB46eFtQ",
  "key5": "3ZHpmj7Gtk8gy8bXukBFQ9ubJKSpm28i9wCC6Wa7ysN45ioSeBgnNVkUd8tvP7eX5fGWLrbmjmYQ5FNSd2LWoJ7K",
  "key6": "63BMr7KfytyfZaqZKbe9WkcZRpH9JBbUXxxehddPy47sQHtjbxVZp5EzDPpxSgAKUpLJDVFk1mbj7d4oWKQiB7PH",
  "key7": "2F9N16vE2YnX9vpMbgL6heMshPVmndDamEyG2YtJGy4MBepjRELLkjfoFddLNp1BjY4cmWXifBEkjKP8Nk4ECuPV",
  "key8": "5JWm8W47qw81MWHNMNUHyhYRiX9Yb3ywns7qeabYi7ehYYsZti6Qbdm788XNkdh7ANaKHgK7fMBe38WMSheYue4F",
  "key9": "5KKsm7t1mevsxA4fajeVs2yfCNLKCacGnN9A1GKsYWax2No88M6FWZU7RL5dgnqgMtrbsmA6rsK6ui36LfLp8mse",
  "key10": "22dT4LH9wPVcTcg6x1u9aTXqFLq7C1qNkdkRzpUT1YHzosaUWR8jbmQhLuQKpFEFAxTtivVfH2MWwbukru8FkBrP",
  "key11": "2VrWRTboT86Gp1eLAnjxcNApru8VjgPEf3rtQe4RhZDkKMSAGLyT7Ro8RQRF4N2aMeZAxune3sWyQXH7qRjp7XDr",
  "key12": "3L3qHBUxg8swF1gsK1DMThAwq1PaMUGjV3ruUgZvRbSC6WyiyPX1mEQFPdRwXFPSp2hWip1iqV4NHjk9VZn8yuJE",
  "key13": "2Ygra9syLeRwTHGjaMZ7P3KnoAjk8pZoWrzBRhtfC9JbcjCQ5MfzdkG6HvPLawrD2PV3dz2nE4bW53iv26AL2VLn",
  "key14": "2nvQwte2nZhjNYWXjk9XrYxm6Fy3ri5ymkN6nf2ijy5KC7zgj2CY9Nnodg1neq6VNKPNcFwJPtD13vNzNEZJJnfd",
  "key15": "4eULHU5Syko8cEJqJZwzWersPAmN2x4WrE4K4iUrnoecRPbtGfuJFJ4xnA8UDqzXUfzgeShZQayR6nYY8h6H229H",
  "key16": "5SpVZhSBqE39fBiBYwDhcKitNUMqiTSDqgtxt6efyJm2HV4QoAV59g4w5VadNCNKZoibeaLHRxujgyBtZaQUfuL6",
  "key17": "5GMb4BaZhZhgSPJRUDgT7GqfxqekJZxcXSkwhG92GFSiErgrMQbsPoSk6nYkMT3wnB81S3VHvy87a9H7aopEeAHX",
  "key18": "3W14NsgHSBSmsAMbNGuSSibDPCHYPxCeMtXPtBGT4KUhd8V9A12PmF11sNFTFCGMqmwurScy6kp2cZLTNdVHBKca",
  "key19": "f4Z1UdzHkhd66eA3v1ywW58uknfAnxoH1wTFMzgxefds4EE8eZ5WWC3ffiHLPUFhdKw7U48V84Qh91URc4K46xD",
  "key20": "5dZ8FwiKdbyrtwfB8DT6LdQL3YGCZ69pb1DYLtRVb8R8oP7DyGaT8PbJQV1zWzQTeTM6FsQE27u6Ca4zjBHBf83R",
  "key21": "s6YVXZmbAYSADK9EkN9KTZvXV26MZ4CCvHCP2kjc1w3ejuvakmwuYF1LtpFCpN2KfGVW6vG1TeEDnfjSf5NrydG",
  "key22": "5TLyDs7o36oNjAYq3ayhNwchmFH11kmFM3BDETqyo2iwxiU9FsE8jkLtCFzZnLfK7eHFCJMKADdjpx1Vi5AkVQ9a",
  "key23": "2F93FbuEi4XfgrJZSpcC9bENHfBZxTD7jmvu8k2hGoR4WVrRp6szUGN2tfgHu6wUWgXDWVXMpwVawkBTYZyZ81tK",
  "key24": "2NQUbKTmdXKYnSrAwWcNPfUzBUHiAe9yFGnJR4L227G8oSMwVVp8XZtwFSB5Q8MDFyftd9HaBc6FgsLjz9ZWDJoA",
  "key25": "Qb1SZHrjYdGU3o8aEbEPZpmTiUAMeus4hNrzyHX5zPWd1HzX3BqUk1xFKdUusKuULgZepmskCmTXoQcZesBbF1k",
  "key26": "59kWSrKnwW1J14ZcKQtVtSapTN8qMeWfUhubGix6wbb9C8y45e736CwyQUCDGwHWFMi95z4oqu5GdX8cEP2PRLc5",
  "key27": "39xYdsRpB1Bu1q2zPJUb2Mn4ZXMtGYNGtL1SMvVTYUNoimcSWGdidCx85wKdr25q53EkqLJtXvvB8qgkwPKd8M2z",
  "key28": "VKgPnAyRE83Y9xz5h3jrHCnCmsiHmEiDBDJydb8FFBpixScasjjenEvQdEhioseS6DHnKsHw3v1yZ5deKaGg8pD",
  "key29": "dDG616nVS3EEMJ77WrLK461pPZU3Xw6Xr397VNhjGZnfDFAfePK3ZskPK6VJam2qJe6wKCBR8S8FogyKS74S45x",
  "key30": "3w8Wr8EmHMu7vSkuxZQkHm2hqBdVd8yDkgqLpLgFS2kgHbAP45AFL17Ba586uDUgAJCHsRWuNuZC9APeTPdfKb74",
  "key31": "sgy5eJ3cE9XHAfeaEUnB54yF1rSRnS6wXZBC2WiRkJmFpKWqXw68J9RbV6nCpLspwzHHJEQvWP6fsYRZSaLPkDu",
  "key32": "3Xxx48wzKYvW9wojMaqK2p7ALEnibiyQMLkbCXi6YRqnKfcLQGjxoSLPMZeyDC9dEEvkBFpqSQdS6Xd4w6Tu162m",
  "key33": "2Yt4bAZmVys9e1J1t135wNkpL1X4sJoPY9JJgco2U8R7mcdY2exCNvqch1fjLmW3vPokoYYA9AvaMNvv1AEUaENJ",
  "key34": "2TAeNWLTvyiKcCH26MLwoKwYJKAE5RV4JHmW1H3febTDi2DjUr7NLjrJsVBNpDftT3qHxJkdPCcFBNdpbsrvSAJU",
  "key35": "3PRfLMkx2XbqJCo67L21fehWSECpex84ArtG64PvoxvQvP7ZheEH8o7j9ZMAtGNFk1CbFw7jzJyXokShYoR2W4cY",
  "key36": "4FsDoq6UPcqiL9td2UBj5kcQHxoHzF7Tv47XZne62CJiSviBHmEqs2vtwVRzWcojD52gwaBxUMSu9PY7YVTD5Nhz",
  "key37": "2mfv9ycXuPgu4ZeafHkAoAj8mRgFgtFNmTkcf1cCr88tjabzyfUeVeaBQckvgiJ1qT1bR4TFt4hBQu7XtGXmST6J",
  "key38": "5y1cm5v8KyhrSmnGpohbenEnSwYpTp6kbG1Lyr9nm1FG2zCvB258Su3e8QFPVZNhQJPag1aXKdXxNAF1mRTZBKsG",
  "key39": "4m9nqBWGNzmuUsHQjouWnMs9GT6xPkxQMDgarJsG1UdWC1nZF6eQEYMMCzYWYCfDV2TWFttPK4fHcYm2pbiSvWmA",
  "key40": "RjzTsLrkfUyGavm3rNFE1o2AhDKSCLRHY6ed1S7ffWS3RxcgqFRdKG2wFeU8KdVW3uUJXDYcvtCiRGH5W8ZgcNj",
  "key41": "3MFBkVLnVawJH8F2VYKLgw9Rp5P7iAqAaFFdgHq9nCfn2nA75Gxdez86TAu5NLkkbFhcLzqXCCNBpe7i59eZnU8N",
  "key42": "61sRAmXw8RHr2crvBGLJhZZ75Sw3wY7ZA8qmn1MJM8mWwo1unWReJxfuLjzbCEv9LqGaKTasT7yFJyKK3VDGtfB7",
  "key43": "2rredykqqaZPhptQZPTpwMZbUVa3s5Jzm27rUZGgnZSduimi3xy6SpbydUpXWa12YBg3F1YqzcWEknHywndJxYXb",
  "key44": "2puxGxfJmS9Z13pJUyxg1m4fjktzTuHYkEPq33gD3e6yRNCvMJyBgny6PaBoZ8uy7fbfppERpFbc3VAwVVjEaFJG",
  "key45": "5ZS3EEZ5dEbmfLBD4tJCwibiNqqfQ46BnDU44R7nGrhDGt6UFPJx9ybiUTC9HT1BSHieRC2avM3QFXV3uDCgbcRx",
  "key46": "61gjY3QMNKhGprtUGG8ZyVnnVAp7kiKsJSn3wrX7D8mi5nLxMrKVMo6U516G6PWnSkeG9h4cGgjn2j8wyFDUym8C",
  "key47": "4nb4T9bmxMNKUCeYQFhFBC3wBufS5vf9za3jsE4DNU2FTo8G3NGpGCYLpLY9M26waY8bqX1bb8M8X9UDQexVPevr",
  "key48": "4Zjh6LV8SffwJmUi8oRombNC47J3PX24hryK4JaFd411PvNJxofexAGSFvJftMou4HwkPuWrDqHwwSi9jxHmjaLt"
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
