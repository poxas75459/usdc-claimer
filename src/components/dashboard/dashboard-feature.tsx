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
    "3hM1sVsnmyyWeJn1ABxLcV1uKJrvxqBy6JoZxbv3aRHbjTdMAxRLVfLx7gBf668ZfysopxaPDS7u5GtK8uV8nabc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "A6xoULm8RnJfWbgDNqSiABfNGHYrMaFznX7EVBjiNnYxTvJ47pkcDirdUGJpNv4f3pG9mWvuBXue7beTU4LXGbs",
  "key1": "548vkX5avMvaU5oqmu59bZyhcpWm19icYydR51ntUZ7CRfTdY2Ff6LAjVAtsSsNTUgmWzYQr22UooaH1N1DYsHQ2",
  "key2": "5FkuJReQNTBUoDpVhdaUVNtXKDF9XHGfNpgdUaNGH7sFKqD2JsACevWmz14GgSyKCGgnQzYG5mgQUDNw71ARrjcs",
  "key3": "2UyGbkVYNy2TV3xYCc9FjPwPQZBmpQsumzBfxFnmjcCixykGF3ah3yMvkaL25jRcxku45z1tf43b7e634EwyduUR",
  "key4": "4z9PxFUe4Xo1NsaX4K9S55LezD4wVeGzPKsaFvPMmpFHR78NTurU2XZ3JULu6KiNQdocTLxf4pV1AXYw3CzkYDiD",
  "key5": "65gAK6wCYoAWeJ9JHEi4vjLeYavbsGuFASq3Z6F5NJNpRZYn5SAKbFkp2qFJBz3QqgJFQBFappwAMW9eJfRVXiep",
  "key6": "5ziKVPT65yMTpycVBbWc9fwETDxbLCNosQmVqH7Db1YSp2NV8E3UW3inyyvCVGoujsvgdRC37tK8omgRPe2Zoa6g",
  "key7": "3sVU1fJAQAU81ZT7FvHDmXimVS5WBB7rUBqAkrGs6nZUmK6p8ctr6qKLpUFVRn5i5jfbQWJ8WbHS3hbibAPNS78p",
  "key8": "55FgcsVoYYPumf6UE1tPtq7J4VNa6uzXtKfLvX9xL4rDKavjiGXrc9HnxcgNK6EcdvyuadVR3diouBCAkyfzmyRt",
  "key9": "2gyLEPAcrx9Ai8M9eQV82EbH4RvToxLqpxs9akzofuoy5bf9fKgyUkCj5ybq6P6mXKkVEhyGuqdo4YyTVcsVEopZ",
  "key10": "5jCXGbF6MuhXimYmK32mFF1wYQBt351c2EzS9RgwgvHPxRU9m77Lq3TxVodN5KqAUzpRFYT6Nkm7U9BvjnzaiSxF",
  "key11": "334QgpnvHRKZoyAVKBEFxBch72cS1vvpE63G5MnzDqeSYUxvGsnd9BecUchbaMtHHiPU6cSgTVAJThcwiNFuj4d1",
  "key12": "xd7L8uGnFB2h5YKRd3jmn4Zae4Sqtq3UeUFfrNoZhDJcbckFfVAZ2BkYV63XhVaqMoMkiVSdZPihMM9iwCi6nNh",
  "key13": "63tyxirUMRc1PnU5H7D3vNjAurNjGJMPsVJ6oWKotqriPS4uZaJYidKnbW9oQtrK7NPodVPvss9FPE7SRcik4cyh",
  "key14": "4dPp5My2iWMDEjkkjsatY8j1Pvh8r14YKSbKTFBaB65i5PT2T2AJNYn5vFU8Rx7qot2QNNP4Hk9NjFgxVbj8KSaq",
  "key15": "4JKZcqniDL294PSVQyq7XTcyZHg1CENq2jNo8aXNaA3XGmen2XbyeW3euYLqBLufaRFSnpH9P8fR3f5BsTJfVRTD",
  "key16": "5XN3zzgJk9DqdC4kLA2qCqvXb2evDjym8T5WaFF9AxX56Crn8bvd1Xqnmj1um33p36w9L5qyD8yLRnx7qqtuf9u8",
  "key17": "2DgLnYxBSWLg26Cc1NUuZFtqTRDwe1rAvuEf8Ms7aw2Qxo4hV2ZdQNoMVU7iqgu6SQmmZP3YwrtuPqsZUVNhHmav",
  "key18": "5HAQRmuXMtqqSnGgkW7ahXyfQ1SyxikRccDxTWMqYzjgeZpKWLrrkSxXwDa9NtgcH9KJprXEf2spxd4TcxTSpWiB",
  "key19": "3LT596i2cJDLg45tQj33aforck8PAi6X6cugbgbWStrCpSeugpTMHuVQJUFywrdvRGB7n8B7YDe2S8ALLzWJ6eU3",
  "key20": "3Unjh2xHGLxaQiwqMiPHivX7xWRgCRCyM9NDDpLy9CbvJ32JvbX4jtNn1UqX7hqtSiywfn32weuHecSBT53NZ25J",
  "key21": "2BM4HE6NmSiXvKvEu1zkgGzv4652pY1tBsisrFR8qVQXrERaA4NRGovYGzxAtkoKvnnDcTCtWfoWT6PFhX3NQXtk",
  "key22": "5gSoDXWTP9WgJxEpm81PK6hiHCGrvPERyr31Ec3i8wR5fE3PnUYRJj2eLeAxcRUW4YrV3jSK6bmKTiAM2L1X5sH8",
  "key23": "ewT5YBKCqb86z1CV7ESkjA1GWWBMvviYLgY2NHJo1t1yaeqqiaS3ikbefXXsxs2iL7iUJfuJWGrMjMJLq93PYTG",
  "key24": "2TcPrMxNaFxF5cxXcvk6jLS3JSkPKKevGtc5VizitPMZxsaUhgTNGpee9Kt8jNyxFWa4vHzxzjMbyuxLFimkc6Yy",
  "key25": "33WrhqGjsHvUgLvW66jYNs9ZxLHRRjZNMJ39qfYtQs949mjnGn42SVVVqjRHZM897KpBFzXJT2KGvennW2ffov9Z",
  "key26": "gxcA9DpiYQhXJKTAtpTbVC34WfyQmGUug22Xfh887nWyF1ncZRw7nbntFZiSvoiF7dDtN8mTRUXddvDrVMKAT8i",
  "key27": "5XMPgy4G8hnojHkBrSzDQwho9PFVLt72bytdgXecbye2tpL7q4cgQof4h4p7sStMJuMwLxaowmonriqpHNVnj6jv",
  "key28": "1JLjG6XVXNS44AbfPmkHLtaEUCvx6zma7ts816Ryg7MJ4gNAAregp1WbZGebhh8nSkEdFFRViJhCGoWPXGb4jsw",
  "key29": "4YX1kBqwdufNqNiuojqut6EsHT6urvrAu8dEzJc7MpLw8AcJtUNahaADMBtQzy8Nic3nhoJFnT88Ps83LQzJEfna",
  "key30": "5wgEbWbpUkVZi32PcpbeFTymYtKwo7nUzgL9oHc8ZFPmwEiohXpVeVgQYdwEPx4R2vKCDgWgaB5sWK9ovQ6QQEHa",
  "key31": "2KfFkcJJgVFxJgEFJHAy1hiQ6Ssf4o2jWECzfusWtuTiWM8QZNfUBStjeEqshtz8PKwjqKzjVXpYDCFpTZx995h4",
  "key32": "39v3oNDZV1RShEb9C4DKUP2kNAhBLpSnWdG4fNG4C9T7i7EEagUE17unghUNkAMNfTPDznNUoEgYtwoATpZWrf9X",
  "key33": "3KFXJ2anGevihjgP9YT9Z6mDxD3RnmA3HGfHYD4C3cGeoPFSRZHJWPvpy5YupACp5XdJ3hrCz7dJXVPij2S1VbUm",
  "key34": "4yxazi6GpCL298jzktjxYyonV5wVxmE18BQ7Uy64rgWX8GjEoDhqck9coqVEGkTC1Wqx3eo6ec6qaJCxyVB6ntPy",
  "key35": "2hfpCTEs4QK3oQznrfquu56puv8xMCrT5roJkiubVvYq91nvm3aFuSYgsNc54VLgH33P8QxKV5j1D4wWzeLysihK",
  "key36": "39hRBjitsDUNBFZC9zhbQ7JLTyKYwjXU9H5WBG7PPqgAVmgg9zq7ns5Jq5VBdNpJWxXmFXBDqi7fPQJdyEsbdxkJ",
  "key37": "rX1tywD5fjEG6srfz5YmgBevZq9q6TCu2tTSXn5oenA1Pkgy1SD4VXjSnXdqgohtoJtaArPTk9BFvRQn1hh8oWk",
  "key38": "2oSLF4XQPNEzAPR9qQUGujD5VR4a17RNEuc2wuZEdFVuxy72A97Zp98Af2XnFf5CaCqFeCndZ76efDDDgcMCJV86",
  "key39": "3292BrNziVvX46Br3MwFW5EHxNVjsjeKQURSZnvnizdtVUyPi33qhRy2MbuktTpZwhdd12aGNfqcZkBPqBoBm9aH",
  "key40": "4qKev7m11YHjV8XK9GnCczP9wjwdg68gwNGsy61D1AnyrZwNuY7mr19q4qbdoCE4Z1G7tDrae2svUneYi3ACMsZM",
  "key41": "3M6TenE5fn3aSauciRSFifXqhoRuta3QoeyVRTFtGtK4ouWSEMiA8ZwANQRVq2i7EFq4B6KZyN5npBi8XDbr9ZcA",
  "key42": "4FCZxWLkSjTXFN3DN8siweWdoWXJLTFBqmCku24bofcUZBYPhsJEyyXT3Hg5QbWLw6aUZ1ivvSXD29TCtj6obTvU",
  "key43": "4eGzB7W6MfveXYTRrLsib7rwVA3Rm9CTAvqxSdX59k4Js23gA7rKxCuCiX4sSgSnyTihVHNv2YotLxQwqKhPobcG"
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
