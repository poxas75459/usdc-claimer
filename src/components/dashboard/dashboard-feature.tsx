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
    "4uZgPjGiX2snBZPohYpsPxxNd88yoxhkb4fwfQ1PjNW9Rn7EChiAX5rbMuFaWrMVvNqWpcqVyfpuwpXwpvzsqf6S"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5u5CwNZircDgR4dRqw7S7RWBJ4bTyMmjs6k7NLdMvSC1sLykA776gSBNvXMoMu4KqzXkrD2HEstiHSofqG8jUYuy",
  "key1": "2hd3XwSzbNiwBw7UvakVybWhsGfgr2aKvCDKmoamcepfgVVLUWHGPNC6PLGe6uv4cQSpvCz7c36CWJ7386PKudGB",
  "key2": "vNCFy4JWEWgFT8WRT7GJLhrtx4NXAjwSgr5962k8DE98gYWAJksSLQf7oduWoy4g3tGPLVQ7VsYkYChj6W7FJzH",
  "key3": "cMtLaqt9HarZXfxfz8soPpDUnqNw7EsdR6fcAThK34aqBNPtzxHL2KS32uyCDivFB5EhFh4iorEUjmx7NLkLQEd",
  "key4": "GGFTsAYx5QDYKwx6qsXJkcPyymwUSg3c49V2wMGzwdn4ZNXZ22gDeYP3WbYx6u4Zs8v2JihFBcvbUVvEU9HbtAo",
  "key5": "3YJhWtu6z8PXrNqHBoTECWFcHjW2x6KczL17GZpnSWKGpgSyZZH754WFcVWGyBsRcWiys5SMKhp4FmLLzdwiC3Ho",
  "key6": "4Kmj9LCKqU9BbsHVRVZHQPA6wr8utbj5zAABHKgKiRzfUdRaTjHM1X3LyM6amjRJoV3xnrFPCxLFY7wGXDagrNhq",
  "key7": "5WakgX9RBcJzXMQt11cgJavKCqfeW9FZF81CVWkXzcHSjo8y7m5hu6NxmNm6N3aimdthQ6VAiQFrxvruuxsjCxb3",
  "key8": "Y8SMxrG3eXfKBRjZHP18CpDLnD7RRhP3TkXHZwk36UjPK5hc3dnztKnZfuW16nyZE73RibA1qHgonscgW8SYXpW",
  "key9": "4yigWhqWwfEZwLPyRUkV9CMFrS1G3r4B6en5bLV15WJTbcSgJ7FDcfZytdnozRg7ko8NzrcV1DBNTfWAQrVS2gKM",
  "key10": "CdJA819sozWnwdYpQhJ3Jv2rKWfquBQW5gXeG1knwiJdcWxdstb1ot9sHjLrSRbQJwgo1Z61isDsrQTYFzbetni",
  "key11": "2aPxsAKnCxFFNdEf4PM93zJyMksmgg5v5r74PBK8fX6hY2GwaxyQn7wa7eR8hSKpSErcGS36cr6onrYivBJEXNZ",
  "key12": "2hanJS29X6YMovYUioYbNvHMDt5q8wH9ocb1PSV2HPSkvBVsZWPrNBV1h7Z4dTEVrv9mjuxSYNz8XB8Rq2UdpidG",
  "key13": "Qbwq6n3EvZN9ydNRQHE9Ta58biLqx48KWhApnAZQurgeYwwoYW5QZSxYVULGrZ9VGewmcutKVKGT76qQNDHgLvp",
  "key14": "2B2RYRxfWpu7oBan7aaBwypUxCcFJvHWxJTAgXFm89AicTPeMLxhGKGZr2Zzes6Pa9kgazgT1hPJrz2TgJkE9Myy",
  "key15": "kRyVf94DqTC1s52BYbAFtVT4EzdG1X3CmXJiYAcShFvLuTjvy2eeT7xoD7CQd7SdK6vAMTRvFnJq1vTAKfXiM1y",
  "key16": "3XFjExubmMJTnR6vg8QxKqxNWCockMBiLk2498aSMS2NTviF7fp7ubCggdhRMw8udfdw1X87dELbPVBEX6xB2bFR",
  "key17": "3p2medtCrrmp9TM9GPgTRXPHADF7KSbqVc2VhiUc3fVXbUfcoS35rZdGxjGTD1S7jyJzqKwqHbJUegDK2yr1Cjha",
  "key18": "4YpP7TLXsZwUE5vUBjTXePGxjxDha2oXXmQhkMmXDvzbseNgKLuGUvyySDBwmuKJECwU7zsbTZ2viuv4mJ3rHhLh",
  "key19": "4zGMYTdTPtQc9JFaPYrMNmHV97agYuQa7nHVQ2rsRRmvysFfP8ZvKjz9U5q3sbBuS6F1D6jHEGDVjW78SGoC8Re2",
  "key20": "3PJPTLfaRYZ98e27rK15ZQxFFJtVTJY2NjqCSgPea8xqAk7GWFCh4V4KwiNV443idajwhwe8kfFYQSE916NuiPxf",
  "key21": "4nUMxXjkjP6nWr52H4nCf1aXukm9XV8FHpov2YQePu5UswEQJp6QTQK93T1jzxkgqVe1pcSdpDEdN97ngBQLvpLR",
  "key22": "Tr7tzbSC4tbAedJwogBUx5asCJER7sGeydLL6GegRoDy97CZFzHr2oQiTJC43xeVufXknXJ1LNhq9HacSgKy9zW",
  "key23": "mNrZ9uMakag5dCsnCMaSBdJxWcohVErre19foSpXc2Ku557kLfaNx4jdAVvwjg6UfAWh6gYwFvn2qimNZrpd8ne",
  "key24": "4c3uBfzAGDRYVFKBEK6LhBNryuif3Uk8MctXexndXDRqfbAeYLEBfH8hk7s5cw4YwLEj9fL4cn8uq4MTTd6vtjG6",
  "key25": "3aibFSD6dWDDdcDmbfDQkizuqtjEaPXvvMGXAnLZnHSjobMqByyYiYhHTfJmL79YiGYeENrQMmdE5yoVuH2B6m6X",
  "key26": "2DLYMnEG3RhcGYjWXHaZ4eY9ZihtM9cbmmuj3djjcmUNUS5PGkHMJKazVRS82xZkuWh2RhFu2tDWNw2MTAtn7DUR",
  "key27": "4r9S3iqYJzUrmV3mQXvCjHiPPvhVtzprBwF8f7oimW5mKdXSVuPn9Yk9siG1STH5fLauuirCXWo99neHxnUdC69u",
  "key28": "634KzT9Rxz9K1pq3MpBVj8uRxGJEFJjR5NDRzFdRfcq322J4kTfZzSR6JMgCHKQYUJsBfa73kx7xtWpxXWNefpwm",
  "key29": "3H8rH93jDoZooRCA7AjLmQSBYWt3ryR47GGK8xKZSevdbLMTX1JNRxY3trMh82zjfkHiU1SVWxxxF3YcPiTVZzdp",
  "key30": "iaRFo6HHZdSZt1qdQZQwGC3axUCSaNW9im6US1nEqrHs4qesgqcVRypcTepHX45Ae1eZh3tTKxJFJyFDXzAMLUi",
  "key31": "4WjhcBgZj7DywthBxBoqMGiqVLc6JcVZJyze3p7evR16RJZawfFnbBmwMGfV8UKUnT8TRe7LvNLgSxKhwWuyTRrX",
  "key32": "3HhG3zeHKoTcBf9B4Ju6F6RFy3byBVJEVu1nrpRF6tYFpLLvQMeNY4kzTKj1xamxzv3BingzJ6cU7L1YKqLWqgVr",
  "key33": "B1z1TKSjwaNCitTVCkBPi1JdfJCXdX6V2UhtrCeTXefMReoxHp3iPMPmR1GFoaRV3TSm9SJ4aWozg3ztVoMRtSa",
  "key34": "U7193ySfjsPexvYtFmj5C8tKNb5XxFv44XtrRnEL9NCTMM6t1qQPJQLtvJFTU9Gp9m5kB9Yu9Rs8GYHfmiBKohy",
  "key35": "5ySzJMfzrQfYXA14sjq5RomZEypF5YM4hiiUbyHTpD8meWQbDszq2dvec6KbQqoYtFvBywUXNB9EhZg7JUbUCzoC",
  "key36": "5SQeUMUep8VCEmV1HRugsSxyhpBQJSNxTd5j5Pe9kN7wDu6YrXDAovq7QctMtL7QLAwENHZpjdry5oVbTJjXLura",
  "key37": "BRKrWN4FDcuGgPpEgqNNHRLp9JnDry6mBM31aA8UTcFAJceXjBT126U2V5w1tPLPxG7PLszvdjv47EJtEjKafFo",
  "key38": "wgwB95MT7gbvWFd6ibLCc8Q8UtWmgwyundvyeotMrhiw7szYxApVtzL13tSmpbA99yzjGQLnPGuCZZ1qCLMGxJr",
  "key39": "zHQnxbJ12rA9v8yjBVqVQYxoirpAf7wN1rx7Ugz7xKKCp9WRr2hiY3ABJUZqufm7Y8oNWLX77L1q7ChbpoRNBMd",
  "key40": "AvXtoKEmwoCLV89K382WwzQnBfBrW9s9VE1gWmTqiiscdWJL6abgyD5cNH6F5BcoT7SyuGVPVqjDkPTK7a81hUz",
  "key41": "2ezynYA9tVMMCh1jEiQmHZJkVuBiu3Cd8XmUsdF4KXVr5TPLmcz7GctuTnyMniFLfMDUMemzsZdoAEfPpUCDSvSM"
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
