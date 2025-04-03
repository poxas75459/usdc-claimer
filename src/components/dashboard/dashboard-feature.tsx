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
    "GnYCq9NsQ6jUaMiXsayhxJmkLdXEpm93usH4tKTogQLHvRLS6KSV6d4EMVNBbbwguMv3JKDkdqyYdZcDPkeCgkk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qmh8M9zAVVWBB3LGgAX4m1HFRf1bRYnKBzWaUdheiHRcaTKLcDxxdT82PHYPQ89n3GSbZFUjQmw8gZnrEkY8Vu1",
  "key1": "5ZZSK8iCarkhSQaBDnQrpLqbjsYNCXY8nAhSb6DR47HFUjuzEP5fi2H7C5pyA8Hy4aC1YwjSurxoTmVVxqvPHjXb",
  "key2": "64qtyNdaqG2y98xsoswiKVXe2AGrmvBUBBYPrQRvueuuB9dNQex1fUf3NAkZJz48oxvwX3PoBHUzEx9ds1zPtWTp",
  "key3": "4YnavoeAj7cHzgGj73qEUeMNDySCF1Ex14qT3Y6zP7CKYoVsp1qSHow7Qx9tHttvJCo5ZTHZeWjT7SMNEKKgPkoS",
  "key4": "5NrnyHU46pdfmcjJo7B5WvWneB99WSEWqzfEN65xLSnKKbBmj2szieLzzuzhTu7JLZd5wsyWRtLUmYyUakERFkBT",
  "key5": "3YNaGprLfvb29WqMJ7fcNgyiPDwozSa4B25PPBZbvjiSXsRYWu2GfChgbH7KEBRw2offD2Rq63oQLvtyVYsewQ3K",
  "key6": "2FKmRh6goE2phh6XbtutskXGNWvspTnavrhKSWAejqjKrGdhS4eBwGoYW6yQY3uW1fTJKQK88B45QxPq6FTi3xXM",
  "key7": "3JMZvXyR5zEMvaStaFc4Y4faUxLFmoNqrnYxudojkvr58jmgA71jC7ypkup7xzjn72CgfXr5wu7cMQfLYphEK5Yw",
  "key8": "4DwJHD8S8UBVJSt8GPyZuvadPCYASb5NHoXv11kkhHVQw7gyJgJcPqg9MTVNbUyWbhsAAdXiqsADSxY6WGBs6ppb",
  "key9": "BUErBD4RrGEBiCNoe1dY8onRVMabXZZ7ZUDhuCBFYeodY2PriaTzEfpH3BHC7oJeAKV6SRkiTu3nECkuG568D9u",
  "key10": "2UPDerj4uHFZ5DmDiSYmeVU7ULqgVRrv5svXqa9m17CfayUW2ZiFxCA8QFxR7chUmAKdGxDT5fBnUhcgVH5WWyfv",
  "key11": "3YHybYhYhwYzsWZNB7n2nFVuDjLeMkX17HkM6d3xdrPMq37ETQsYZV5XtrPaWT4kJUKn5PGkP2pRBmxHgvDrNmBX",
  "key12": "5TBf44shANLXfCZUrW6VsVaeHTbGQFFwEvAk6digrqzJ8r72N54YDPaqGfXdNMVaC9nktEnF3tAGE9oiRYhNKjaW",
  "key13": "8Fi97HSTfjLyKjHEiVNEx1qHLYNkkSjb5GareQkXadc6wyS1FiSSdyu4gbW6vUzB9BD4GHfEGhgf2yBvcadxd7r",
  "key14": "2r9Aodc4HdsUgJucKzQPdtELD5FLkeV8rahYJ9APLEDujhoFfWaxq4NjhBqauLt4yvj5QezQyDwiWrtA8a4Uisup",
  "key15": "sWc6oqf64tYP8u1ALA5n8Qwx22h4NqsGKYMYgvWEHvJCJNVvmaX7g6iF23Ea5C1aMoPzjTcSSNc8Mtf21spaUNi",
  "key16": "3bSrLi2iALPgsvKhGqNSgcnRgrdKL46yD71irpNgFgL1P8wUMLSGu6QsfwKjeh6rvLFXGFdLw9e4X9KAEBcjSrQ4",
  "key17": "5SRcKu8NZ115GTiFH4y5dS5DjPthU4hSaF7x9MkUkoUtmZNYyobpjKpZstvnCi1AM64YjU7GPgEaSSSv668b5r3q",
  "key18": "2tVh2yej6NsqtvvBrx6VTbTXAYiDmqWgmtjMMF4GiUjG4JBwFHRztTPjPz7K1YTvMaiiqDDhwX3iWeZa8Rsrwu6S",
  "key19": "4hMaRxMzYCKoaSRxrDhrbiARNZewdyRAEoq2Z76G4tC3utc8hbQ8Xce8Qcpc8Wjdp6P5LvfcVBeTiA8gTKWk5hQj",
  "key20": "v6agnV18BV5XDtFCvtuohQbqyYuGLBUrHsXxY85FNxf4Ksc9RLo2fFpKeZQi7MgEpHUi6VfMxyne7oXg5R8UVKK",
  "key21": "3NuQ8vULRbb39iRFTX5yy6WpWNuGvmhoGKF9avyYB8hH8a5ksm6QrG2jMm7KX6XuENhQ9hKVFqGqqUDQ5fHPdS6e",
  "key22": "2gzVgptQ4AqtjCytyLeZmWpk2T3wUzj9uZp1yTKwpGcipY4aHHHE8nAYvzEyaUzkNPU224gKAvteAs35fsh5JfQd",
  "key23": "5WogG2ain2BkzpfUu9rZgV3jWU1Q1LWaC8bA2kptAEJ6qK6Akjeo16fSXRVQzWDMjwidW54hne6XwvoW3CvQpqBH",
  "key24": "5rNSjf3uzPrRS9ifb3UbiE39Bqd3QFbKH9AiRrT8n1nFemcNtPVPm6SJhsyvC88QMakyXWh21JrecgoW5jcrWFYP",
  "key25": "2UBurcVDA1vhSCcF9ww7koMTkyBzkNGiQvkGXcZudCcTA4rW4r1naGgHw8QmCqQPXMZDYct8mwaCk7JC8Q7aoUNi",
  "key26": "3j62ZQ1zc9mnz6Piq27zwbSa3ekHUk4XizL6MLF5VwaDU53c6SHAAPQpUxTCGQDopTPqRSFtaNjo5WEXc7N9xK9u",
  "key27": "57g62EybDhMjEDUaW75GE9A9ET5ApUik9bw7EGDsB5qQuFNrMf6XaDdYU7mhTJDyr7K4EQ23wSjcfJbSQfri4QZP",
  "key28": "5aj46A69xmeXzqmtvG1RoAJVR4t6v7v36PkJUHooW2aXiETzeMTnpFCcmkGazwR5RQiWeDRtUQLKo3rvvAm54h28",
  "key29": "5FaMd6uejALpciiuXMQwQwUwJGoNpx2ahT7LxJqYiTfJfxyR88ZkDCxRGxe3sBgXxDRhXheY4FsBkutuaBDR4joF",
  "key30": "w9hKumWKcPURMWEqqsvSrjbcDi1F3RgsoqUCYz2DiWCDxYtVLk6BquX8gf1JvhE1g9zqXP3KK37KoD5U36bk7Mh",
  "key31": "4CkFkb9my2WcerL5JWRbysEQYqpL758wxpf6uvLTTAm2z1zNTe6CC1crRMmRNei9KxbUBG6NNZCTL5V7zmRoQZAh",
  "key32": "5meN4PyrcGDPTrUQ4gt3GfsiNXdUQseTTnzyUE5dogv2M9jRjEnz7k43K2QEXxjYiQt7Qn4wxp1buZC1b45epKsS",
  "key33": "3F9wzL9sLoHmdySBL59JeQetKp7sACCznx8j8mY2QgcdoXfoaeNphnhiSrdo1jcFniVRLvn72aYXu95pisZcGEBS",
  "key34": "6VAFxoxaiuouKpktXXQSeTWZitNmf7gVUkWJt3Pn2HmJdKuEVKKVoWGtriJCLYmeMw1VMym8KsytmXKxAQxAuEK",
  "key35": "3ephtoniAQn49k531Q4WK4UgfqVXoEhFa5aG3u9XP2K8zcNLvLnRDa6Vu5CxHoZzUF9v8CCAac4Tv1vSjjkfPMUT",
  "key36": "3n6yTpbXh3g2sFvdD8QMPCEYZu5zhLQsXBApCBcGbqdEfnXfG5GJBa1pwgCKHdxVkYcjpoTa287jL96sXuJ9r7m8",
  "key37": "5U5zMqRruirkozJH6dzg7qwgwAgwp5yAgwYhmsDYVasBcqUVaGoPSN7E92DsmW7DXziiqpsDU1CBpWTTY5SrEEZK",
  "key38": "5CfAH3zPbzHp89q5Eg7bj6xNJaNAgk9yVKisJMoCc3dwLGk1cEQW5ySVjGFPjGZ3JB5untq3odQu2pocweLD1vVM",
  "key39": "3W3x4npGrxq71i9X4sFXfpKVjfyHqhxqdKGsriygaD6pcraaZ5UC1KUUczLYUwvBqHNvZogoRGv1x6FeEcgFL1Bt",
  "key40": "52Er1FNBZKxU5g4WEotfiuqBNG26sL3cfks9mL7VT7SryqR8TLXRehGvYkBSZDZ4mWW8netMUwR9AkxqDR58ARkA",
  "key41": "4BSEb6NWm3H6txkxDAjX1HgGXpHey9nSNDvMS6hnxiHj9njysnMDZHcMXjDbT736je9SdMbDP6A5yAem8PtVH4jy",
  "key42": "4CgQFXmj59vuf8sNW1H6NSy3oVwQSGQQuAzc3umzxqh87jwMQbZtkGqtt7H44xti8XjESPrT5vN2FZxWHiyV9EZ3",
  "key43": "3cHysxM8s2oN76hSsdVymF7TYoZNU4kbjT8vvYCVAQBCgs6vrWQqfwHm6BFYEu58ssgptZzUz7Brgi1iYwfLf4SG"
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
