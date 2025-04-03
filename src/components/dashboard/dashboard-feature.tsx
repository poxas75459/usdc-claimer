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
    "4LGHox327hvCE2z25F8oMMQvHPDaFCTNvnbADnWTHYgxUTD7RxtWeLbg7vNZBR7BcgEjavCSvuXRXNDkspHv9jWH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5cpN9CcsqH2ABwqDUzsQmaPFxocyzTxAFkSH7ud97fpCnHjKruwVcd9jhmXNGDWCkPJCRBJ9jL6FsZBQ1jr1ChLt",
  "key1": "54LKF2XghUEnpzEMMTBnqiqBC3DFm5X2Q7YbSHa1MokYk5VAz7X92RuhEngbimtVoTQVHkQE2CZusytwEvMUKm5",
  "key2": "2zjE9HZQ5REXNz2KVVSxQF7Ym6F3Pms7BBznLLfjtUTeVN46TSizPUvbGemA7dms8BjLQhoVJ4oUX4n5VoYnuK47",
  "key3": "2gp4LziaotEA3NuhhKbUvza5oepPvXo3B9mdtP6Wqtnf142hy8T7HQ19GH2JL1zWVFrPufsDRhVTpd9dFkJs8xeJ",
  "key4": "CxbyTMndgmBXFi4TWrnGmNXA1PVuFu4tFZcJLPxUW66LDzqzrXd3r2pUdAPG8YAK4UwFmCWKWvq6D99TNSVcNWm",
  "key5": "3HGNre1up4us4pMn5Up4RTKyVVtmkmdXLk2C4gwJxT72DtbVVjiL6HCgapT8G2MSWja1NMVyXm8WPdcdAgDuQPdr",
  "key6": "24uguCt8UDQHKvL974LBXiYCFRXtZS872Kf2e2nnyc5vTASADw3J1c8s4WFoNzZeZVAfyv4R2Ddqekfg5gWTyE2h",
  "key7": "4zLdsNHMGozEVeEc9iyhK385AJ3bvMAjuRMJWgjerT5czADZaQM8hNwTVkAwz9FNMk9ihbyAG5Pnk8t9naPcHqnE",
  "key8": "2hqeYgZ4kdCsFKwr66TeLgwn8K9AkLLXBVDfpxjTXKJvw9fagQCTehZUxN4nJL3Fa9XYqrbfwBJyGc8BcUdg43Uz",
  "key9": "k6ufWfVzunvyfUzfNqPhWAj8Q12Q7mhmPQyKtD2VtsrUg9eNxHU3YFkujXuD958rduurecNBfBMDdv1sAhRrVbA",
  "key10": "5ZMGuXqTJQQ19Rrp2gVjhs7w813522HagnnWJQBLoBup9QyMdxsXPN2uFyQJ9nVEAVcG3RKJP3AgkQPFtUwvcTEA",
  "key11": "4mWA5ErTD6A7hm9E6QqVoqEF59oA43NRgAWxKfq4bP1PtZ2RjXx3pwy4nMrngmSJ1f3JDS67Tiou6qwvLKG1vEE4",
  "key12": "3qTDrTf6gZ3fpvXUCNt5CRzg8mCSoCACnQ61wQn7tnqfMhFxkvqFiaZxTnmCShkMFqq226SKXwg1UqSVA7kPBPtp",
  "key13": "3qnq1HmUaY7B3DQt4Fx3szjDF52dfje3Tj5aX6enW4a24AbVfg8AQUfAqDTTN2w9ZEkHsyAjJSSFfTZ9aRiFCzRd",
  "key14": "4JUugqPD3GXcjZzVw8ycoSnmLCuD42Z4GG1MmmCqKKD9VEQgiJgR6VQz6HbZvLpooFdoXPy1q8z5wTuyKi83xMRS",
  "key15": "2bbHk8fdSxw19pcSHseuewPwKaskWZ2Yk7LWrKAp899VU8DbLWEN55xxfSVYSATxv3caYu6hNv87dyqy55sFUZMD",
  "key16": "jSBw697xYPG57Uvoqj1GWPn82HvBaV2v9GXUiAcubKC67Rba1fec1Nt7XYiPJGSEAjVVBk7JbfeGJLJ6jTNpzP9",
  "key17": "4LNM9v3BXRYWzD2RAQEaFm5z2LL9doXtLJg9ebWSj3SQiTWzDPxH4DnydvALFRKo5TzEbzTmQoBAXXiHr37vcuV8",
  "key18": "5es1UTPzykB4QgXT9cnjTqs5E4RPr2RNsGE9iNR3WCYgEm9tyjWTErF9fuTksFTxPunDyCdmAshzivtjBAwATTHU",
  "key19": "Vcvgbkedta5SLnRmmnZFKhgCaNWdcrJ2iEUVgtEoJojzrAr3SBgeZWxH52vcTe4kKvDGTfB5oM7BvNw8uCvHEXC",
  "key20": "2YAFXvMgtj51WrrvFpoXyWtM8Ht3HjdGcx4dBNYdGqTHLCYy3ifxbdU1V3CDxHBUUjDjguA9YDfxLj9U8H89f55N",
  "key21": "5BEgmWRSAqqbbxM5PCMtAbQpYCFuf5ASMyC22k8Kb9e7MeK64KPkobTDLt19p1sPYLgEj9J5Cs95Pt9fZJJcmsEU",
  "key22": "3N7T5PjavdwNqgNLyUCWXi46wmyLXiQvpB2t5V9BRX9bWiPKPdYf8x7PUxHsX3MtemduDQf4HiMoX5Md51nXmCvS",
  "key23": "32myxLckPf2pTfWvcaAgHLFw7rTYe7AEqrWZYjUd5kFJdZiwbc142TZPhnx8gBocAKJDuTPwuk2zhaUASk9Ye6Zt",
  "key24": "5JxF35hchVYFeKFWDDPaBYi1kua7EbjYG7KxKDb2okRNVttrwbhFp1VnSVf2Fa6LbWC6UAb11evAXZwP7q4r1iLd",
  "key25": "2vPJkcJ8jRmP7jt6qXRQLdmXhnD9LXVK2VpU6KFpY9LySe6o356pEUukWwLUz9JXKAMbGcaVVdDVs3rFTgK6gvs",
  "key26": "qk1qoRsfMZvquzPM9pbhYrf4msKmjTUNP3bATU19v7VQRM6eUhmsy2zY18juLmhxtDvbZp4rgHB1QBtAJaMQqym",
  "key27": "3NyZGQQKHvJJQBdvP2hit3TpiVmJnM1S52cEh7ysNckRfWfVJCNwBCxzJ9ossfHUyFW6kAn9nxk9kzAyfbpVWRn8",
  "key28": "tEFk1xYQQkrsnBKYowPk2TSZZC7KNfmwvhY19vTj3XfTRgbQTe7ZfEnBeMujJiZyF6VTpMWUmRDCXEuLcwhkrJv",
  "key29": "5kFQcopfPNQY63NzApe63xEHxhVuCGhDNaV56eR2oNTgaP2zEondPkexKis8VJ141t4Syq5svchQGBdgVGxq9b7x",
  "key30": "5ZPJNhTd6jyV2BBnGap8QX15cWNBRfnzomPfoize91xAvN6hV3CphHmnHcvKjyDLJYWxYMxjwM57vtDQkCvFLnUy",
  "key31": "57WTNSRMcDfymxjNEbcDNMm9VtUdafJeyUqvGrHKhvFWWbuMBLSAAXYr9icTG2i7jduFMZqfE3NKYwVxqfwmAoMU",
  "key32": "5wgjKtPjYRoKvkMj6LyrHJ19Yw2ho9DAWuFS9qo4YukfkpqJno3D1ip9mxq6y4CnJABKahqdqHYPGhizqhZKdei8",
  "key33": "4SQFrHLNourprnby3ALuHDufJPiqsLLu3XzAXsBfzn54K17d8nkiaZcM6p72iqD6QWmXLayNbbKg6gaJ6MxPUYrM",
  "key34": "4QiBR9kxmbr1yZQ68pKuVW9q3ARUyAwnjLJKyvx5z1wdKC69hgqLtTes7YSghxkXjXrGoAtqEA35m1c3rD2ikcib",
  "key35": "4HsKur7uJpixM5nds6vTs3orZXd6EaV4Mk2JBoxFv9kp9XqqWNVKPfh46zf7ZNd28daZ3qLtVh5WYvTnHkyFa98K",
  "key36": "3sCWJbBrw85RM5mwZ8ksLEYjygpwfHC5gt1h7ta7wrM9XwSeXLcGk5EDFz5zzgxGCXR8djD8VH24Yh3TMKvE15si",
  "key37": "5vph64DfFVLdRVex9xdZW9Jwv2VAdpyjZHfC4H384uEDyWsbaYWvfq1SMR3XkSiKcVLpLVKzLnmVau96CeTNHSCL",
  "key38": "5h3VcNy5SeF1DGz1RXwFmBrHp34nh5xmwn95h7GthgDCJ5DA4XXHuq6ZwiQJc7pmJiPaSuXNSdo7ewY5yUm6qEo7",
  "key39": "bexettTYTikb9qfAgD54HP66kwSCFm1oUcSFQFu53zwbcsqGs5Sg5uw6LLipdnsA2b3ETmePkHTCmRewdNhMFaN",
  "key40": "5MvHho2Viz48Dps9Va3jqf2UntWUy4Tb6fhauJrKyfVFTCRM5ccCi4MBQQmQpBCscwDRHed28tfUjZLA2jKet6KK",
  "key41": "3pgFc7uRyxoGYkx8apPDE51dZdfm7xoaaG9FajNWYASKEewwyNfM99LjJsg66W2AUNBMUo8dqPydt3PxQQ9nGKdR",
  "key42": "2Zmt3rnbwEEXVnZWP3jHjgBmwdXN7MAESuTiE4cTC3JoxcBTCyJcb2ZvE76NQsnehgvwPhb4wtMDNm9Nn2kdqJzz",
  "key43": "2G5Q6zJJyJXqvdh63QW4wiRQSnQ7DyXY5APkKNJXUQFmpYFSzpHJTk6ytN81yZjx3rqB7MhoanTrBUfDbpvCjKjv",
  "key44": "5a1TXwqS1UsGPdcJUTQqeagCCwLSFtT4a5Dn8UQLkNP32sZ2Xj5yx7V3JpE9U4rxKXa5Y7Di2MkXsw3Rj5pVeiVh",
  "key45": "2SkCx8eok9ZSHy9yDNNdDHWpqYbUSXaVP1XUbxvf3UCXw4nEPh8ikyt2oQ5U7qUzmAsBA9C3uiH67UukMAh4YBZS"
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
