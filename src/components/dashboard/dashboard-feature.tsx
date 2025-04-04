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
    "4gVRD8WdMC89Gu1wzA6Zk3KRj12jRz5gH9mXXfbjgG54GamiUxAkuunx5SAcz6F3PVZosnnUhU4Suu2E8QbLbtik"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "M8MGy6eupUj1p4VjM54aRTL6rfqNFqP27yJqgC3N4wvdbsikB4JwaTnm82YXCsKUB7mQUU6sELJbR9wZ24vHxRP",
  "key1": "5fEPHNJP2WB3Md8w8V2MTCdFXv58YyCZC4theoehPMyyQnLu3MGsj6tYWxEqUoRT1AjxC6pUC3ZSZULLV2FyV22K",
  "key2": "2bMPugKDHtRbdSXYr5eUHKFDDzdcxZcEp7dLJ1punPLWg1miUFw1Yj2Ji3Gap9piHvsRU1qC3jFD1UXMFYE74W7x",
  "key3": "5mU7AznKfaE2t8rrttkAnocaTU3or2ux3GqEVq3CGDuxmKdhTaoxmpAAcBedHYDZmXEHbXT8pcyQLHdvdBZjTqsu",
  "key4": "2YwYQBVfcYNV9KyNSiY6A79T5Y3bTznPpVtHuCqtH9VeCCEXAUmo4e7czQsJqPHXETQASwbSb47JBEddyAC3WWmT",
  "key5": "64nQMknUMMugHZAEctWHUnuJ39Kdf459oX3QwrdUATgztgiZLCdr3aLZSmTp5jmuDv4bjEjPQYh6GcHWsgmchAkz",
  "key6": "2J8wHDxSnKuPvTnYZUn3TEXN1oWLUjJXyFdPGRfkB3bEqmn6nkVQRfvfPqWReMmNM6uH4yYRWB8EwYYzUEHLY8Ls",
  "key7": "4cEGQQtsJW1aLwpNiShUR1r8bZbiapcjGEj6GQU9xReX6RocaPFTqSCfFMpaTKjLsaMbMaqg5dSVfipiTJioMo44",
  "key8": "5CJFgnekekYkNTtRaZ3YcNokebm5pyzh7mHG1tFehgi6wzjMRKjLoETqV71r4mQwJchcx2itSTE2UDJQC6mg79Xq",
  "key9": "4sMZUb8UcNE966sNqMuB7D3F6mYP8khYQmmA8nQH4ZruPnngRRxBcZWaSywG2C1bSNTdwwCartTSSmu5CBLucdCt",
  "key10": "2o5RDDjywUovvBzW1HvkJ7Zi7Vk9AGYhgU2uYfa399B1ZptLho4FYHXv1t2xRCT8LJrXa2X2PWzwwrvmgtKQ7yQf",
  "key11": "2Sz11QRES4S5NuPQSagTrXfi4ufWCjbPLa2ywFbR4JqUNw7pARq5BSE5G7tCuSsuGeejAyccjBe6YSGhc16bACAA",
  "key12": "3TpN66ScirpZKefcpfFhScFUCPnpYgsKobcP7fvZ9vhQfxEZG6nD8miwuANJx2eRYN9n8sNPteyns6a94gpKDtU2",
  "key13": "ApqbU5yJs94AnASbJHAu9Q99BhhKqq3oJC97o2Wwhg7S18UVcBUUGnhTTuFAv8yXJrN16zjGcfUaUkafJU1of7Q",
  "key14": "2J4NEWTT7u5F6Zni1JpLP5QdkRKrDmaD23zqtsAfB4TnVGKwr1rVdQgPUJgjSZvdTCgXFESN35T6z7jmVTZWtwfc",
  "key15": "4MvvN4AQuVWQKhcRyuENv6LBogT3h7ysnuyf7wzW1EKYAb8cAhnPWA6Mx6qgUgrnsQtYrioLjW2MmGgfDyX1ZttH",
  "key16": "ZpzhYriwqc45jvPKqTQ77VUyJqZwN4e8hdDutUJgHNUjyH3txSbShF8Y6GoUQiM6QEVHvr736ELrr517echjyNF",
  "key17": "5A2UuySgPVMv5WqBUvFMqf3zW9PP9d8645wfXYVGvdbYrXXiNtbLMZgkrghoN9XeFSBLE6mJpAzZ3hm34sfauPPr",
  "key18": "5JBgF8QTRdHPPFgHn8ZSCbgqYacj4nz2zycWSc8L3EGbBGYYdDsTor6CZ3KjbxzwzaTrbMLjhpaCM42BR3ivJ5rv",
  "key19": "TA89pTAVAqZ3X9kaFGPu1rtmfRsRRz7eAVw9TJt4vJrbgwKPHBMM4xs3dZgewD3ePZieuYbsFvZXqrB2jg6YgCs",
  "key20": "46KAG9r8sjqUHwY2vcEWEZRDhEpmu6Vdxo83UETVyscvMRyadxdXJhAy9qt3PCBjNJijnFHLvG2bFspdzgfnqKAC",
  "key21": "4gQNf2uYevgH2jYBe3GBCe4oJqRXqhaz9VnVJyaMuk4wYQCnG5JVHKDw9C8V8sP39x1CBV9aGkNsd2qgGai9QXw8",
  "key22": "3oJEtyyF1Jife7o3etSzCCQUsEenmZrAUaMF8PM7hAsSaLW456PBQgF4HdyqB7dKEit1BjxjPsvtLwY3kB6RgM3V",
  "key23": "5bkHm4yFKmZeRqJ6Mj1sH4mLuS33E2NNNtQPvt5yKdBXEY3DsP5SndLEM1zfATh4TLr4RqscmXa3wamrEhizuS6m",
  "key24": "49ep8aF96onvmxP1DknZqdtML1C7JQoh8iu8jX9rR8ci251HZj9J1hmCzcYC4WNAiCqYvwCiSaSyd9uxYJGSnmjA",
  "key25": "5hFLEmNCM8YNbRMVE8Lrh3W9bzvHHSnAp4LN3kDUP3GeevmRXNVXpAyjWb6oz8F1yTWg11XQn4u1h1ohtE57dvyk",
  "key26": "3vETNL1JzgYdEVRCzQrgBPDYprgjXgNurB34YnjDrpGfMhoz4pkyWmDsbAuZr6C6mZakNq7T6fBF6cjxdfaQrK1b",
  "key27": "3HApqACnQ6QTaB54BGRyfrUffZmbecTCPQ7jQHqCTKweNaEtA5SU2m4oGZuFWCxzN1S3pGUUtD7RyMgGJMA88cF7",
  "key28": "ztRgapCruWjE5YAQJj2wZB9Yym5RyBAkWxmJih2goMyUEXu9qebGWo23zNwFuSQZToyBt1aqtMbAMLXnveTRW9n",
  "key29": "5V6piCpNozVLTnGHBStuWNi3GjowYnb8AhbSF1gT2XSRDKD4J4JW7DawUi1dSWACDHmXampTUk2XeXen6hgZ3H9c",
  "key30": "59NXJurjTmKLWFUE85tWimDRyWdLxZ8HKk3diGdrF2Dg7kGku9FZ42YcmoyZjVnUAvt73HfrmX3YYpm1NgatRRff",
  "key31": "p4Xbo34vJNFD12u4TmzzfALQjjE9ngxCcU2XRjc1vFHBz9Z12jxpHecdKivJj5YkzQ9UuiiDuLgAUryzN3aZcXn",
  "key32": "4YRN1f3W6CefLuBUjDsgBda6K6QHYXv763jsRwnWYDQpYn2yGw6jSGPx5N1ey9puNsLxP3W8UPX4aDDhdbd1wtrd",
  "key33": "3KMsdsXbFZQyBWnYZ7NCxbw8mSXFFg6RXdUzSm2tFL6a6seeXDecFGEuiBHoJKQsWX1fferjc9KdqFJPFkocDcjQ",
  "key34": "4Fpwn8siStEHtXroZgHEzNyK6ofBLrJtW6hoeevdwWxivtoADU926Qk2aKiP5F3SEk35BX9jZMZrLXQhDzY7e8yG",
  "key35": "3tJdThEnFeA7gs6sqGHg3XWE8JrhDaYerAXuPJcq6wNmj7QYQich2ffzwu7tkMxCU4eFm5itPqSAvZaxjWcvcD2s",
  "key36": "219nGQ3ZzQ4sHebT7gT6qwHqnan3ARrVC5WiqNNSHq3EynUcz69xQjNPjLTAJ4KX4zoWYmo4CzfWamEBorNVBy52",
  "key37": "2FPDFSvyU8LefvwAg6KTdn89fhB4byL87mrJ6NvY24jgUxtPL5dX5xCvy3yjiaaCE5qSQYfXeYrJuG7nDRH8Rdrk",
  "key38": "2kEWxfF8cVgVZyNZydvhEB71kyZcCvHfj9LAm6yaeaw438ZRoqX8zMPbHKNP7JaKWkKrdkJ4VmrEGWm7eGjKpMWv",
  "key39": "2hV6JdpFnoh2QRJG8Dyd5LCqMhJEJwaoBy9YXftsUDPiERtin2wTM4MVDLTr96dcxvJ82nU7XjexzKPkbmqDsiYs",
  "key40": "3j18uMC61R35vG5BZms7VCxXsGo4n6MYTpUJQeYGeP7XxJsCqkGAM6Ggt4RcDU2n8N3HgHUPHpVS8syevmJyrtT3",
  "key41": "2bxWGLRNDsrkYf4q7MWt9gHtYgdtfo7FpRwuQTJ1ii7CpNEvytRddo6AdEp7Z83iuHUvxY82Q3sJBxHAePbuVuV6",
  "key42": "3vRj7ZBikj2ShuKrRX4F9PQb25uhnoB8vYFNWuFRbqGtAMFD9G6Kw3DQn4SU54LJQz8jpX3VXHTAZ4RnqnACqTjL",
  "key43": "44q8eXK2LyrmpFMGPj51JqBCXQHPkbTTRJuiM4szXFXey5CukSyU9sqtNmR7Btrg1UF9MZFwpt2WaaJbLiQZidb5"
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
