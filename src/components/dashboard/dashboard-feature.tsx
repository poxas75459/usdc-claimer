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
    "5ZcLW5odUVRkcEPZ3YWsVLC5nbeDyXTL2nTbarKeawm6EAVwJEKfeecb7d3RjP9ttXP2rB7VAy4uEKFe91PtEs8X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "yVzYYDZcE4hZHFQXST6Me6VtRDKNst1pvxK962JdFUpD9o6QfQBXqUgSHpUbFvnZhQcMp8f5gcniRPFhmp8jBht",
  "key1": "4d45DG2oGBoFrFvTwSzStZpFZefwTfVpvXn6KKHbrygBs2u6pRXaWs1uLmArJtHHtfhw8VkAUfnMcqPz2GUngyqZ",
  "key2": "dKQsVncgnPZt7tUCZ4RLVD45JCeMoBhqhM4bAtwdxJUsnGhtm4tATGANcNWWoqTvvFe6U7CjrWkMjSxADYd12rH",
  "key3": "b81UM6uVY5JTG7hrNBXWwbXM5htNhubuBfYpPmCBPNkFAwcVQEwDFiCoUTR2KXeWiFHJPcK9zMt8tMLGV8zpvZg",
  "key4": "3vMC7gxQkLwHW6fRXEE4CZwSzaRHsRZG1L3fVTW4D3E4HPb6vvULP9af2a3vtNFibS9vFp5xR7PnsFceQ9wysuZB",
  "key5": "3N2HdqM4gQhk21mFdbwBFzwXExBB4BR4BwhhAYg2hXE9BuSL8bqRbCQR5wmz2AeSJsatvKJSb6YyeW2obV8jugWy",
  "key6": "4r3T9TyHLDGYJajPfnerDZnCBSCXo515XMs8BjuyKDPgruGMfNVWUdwhZ5j1pdHRe13BgZobADMSYbbRossyfsjj",
  "key7": "3jLxHtZ1aNdGmXgDP6hxahVqttr6ucuY4hwWNfh56Se71sEBzEfFRCrD1LPghhMRnJqC8ApnGm64zbWLBTdRPXCf",
  "key8": "3ZzWY2Sd9sUM15KsDXsoM7ULgRY34Fs8ti5i7ghDZmEwHT8kz43o7iTQHXVnvT9oXSbsmdczEFWrgeosxN6uP3Na",
  "key9": "4dQHdyDZxfHktwABnF97vLGzAUHPgpK8gP4qyuFgmfETqGmuJygBkvTCs92XbP44THLNn6bwkRdrb2W1M4KcRwBM",
  "key10": "22gNatuAtnwX8Vezzw8R8gDHCVGMzxeoa7qQC2x7dbr2ZnRHEwMyx8dTBSR12YdBoTzq6A9V3C1mR6VDuC5ktszs",
  "key11": "3CxxAcQkAdk6kbi4YtLCUmsGEknJcoPy6w7EEDfKyDhFGepVNK5MwkVXJE9Yjssabe5Kxg3XWUCtVgY4MMTEaRez",
  "key12": "3RpAuFpnkNhy9JcuKLZkvLurGqmSfw2SgGNT7hTg6DSBn2KwFoRaPhoZAZanmoHM7sZ6mx28Ro9ae5Q792d5jbZ4",
  "key13": "4cq31jyFXn5Bb7k6fF5CgAbCMVH1DfH6cH5o3ZBp51Ks4bSV6xc1fLj98c91rMDi12URozYbbEdSgZFiJ8csVy1R",
  "key14": "2EcHSs7pCyLZbQZcfo7253yggFRLY72K326P1jLfRPUUW6WsEMhxuyzerFjCgLDAWAh9gKcxF6Sb4juLhqe3pYhD",
  "key15": "2U7sZYhgk5FqShPSZsEvs6kwPJkAuFDJJWCRwmonHeSYRUdxhXDvgppC6prqAKwKa7dMbP4rT4FPvVdUzq5ZPxyV",
  "key16": "39Lxm3pLRhQJ7FGudTaivqQBiAEdvYeuqp8zH1rxPnTadkoAYWMDT4g6mJn98b9XBgtyLD5C1n51kmWueSKz8ZYz",
  "key17": "4N1pW26Xkacbt39djAtCHHLQXdTSxnc9WB9syrivG18YDcYq8PqQjp88iJnXdoLNLfFoj84YuPKxRJnxxCn8hUH4",
  "key18": "2o6TJC2EjMEmoKmaE7DHLRQs6JsmHiY7os4HCG3rUJVGVTCp5kg2kScyMmx6gAeUd9Ljt5XyzHPWNkyYp7CN7DBM",
  "key19": "2Cek4gfA8MHVwY8nZ2yVVWtEQFD29PHFRFs6op1a2id8Hthexw2NPxrpDMa1yZhwXNgGjQ5x6V7bg5whnZfqkpAh",
  "key20": "5VrsdGQioHhGHinrnRLdR1AVyWa4HxhS33x7ZdinT4S24ED9YNEHVFjp8WzTuLHyWL5HKVWMCUhYhmr1SQPe4MuW",
  "key21": "3hDEVJXbPu8iL94nKxA1oHEU51YMJU1Nsq7LTPrWW6pd6D9aECm51nMijJBscXUwTrt4bPmwiBrsV5xeH7dpnufM",
  "key22": "5SDfh2DjSEf3fBimqcSQPWZPoLHR4KGJGyrbsrSvJ4Xw4dt7jWD6AC6KR8pYtkuh3QxqczRsLvqpeBsn3TVAZWeQ",
  "key23": "3iyqipFzqqeqqiK7Gkqb8smsgXRht5zHZXgzBKzax5rJ6jkPsZCBofKJzLwrkoxyASgpjwhbjP7QNz3ozZrLu4FB",
  "key24": "3ktoe4gJ8Z658rigcxrsfcjBz6PUSBzHdLueeeuC1Hu5xHf8JZfSZLHPNYyTf6zYVpmzCH5bDYauP4ZFtc6w8Xpb",
  "key25": "5wBmRzwzEZFJU5fP6DF5WsQDuRiR3xFeJqWMQcSdJxR1NuntowwpJbLuCo1H22TioXwTogFGFsucMqc3zcFKKCoG",
  "key26": "gCu7nqBCfuevw2iVrQQGWxmsYjnz4ff2RToxriiDnGQewLjzrmTwKKwz5nQu2z5sDiqee5FZf49UPrVs4dTasJE",
  "key27": "3epuUu5Eb5SuyDR11zYuCJbChCJ5qwVSBJ6zPzq7kpUsbAVW1y21wdQY3e7jyjR5yV8x38sBNq3PdF5t8sABVz7Z",
  "key28": "2m6SET8qJM8g5U19oa8LEdCCLv3GBhwx4hHDGFAtYs8qLkbNWwRTfNFRjWyN3cAQPqfoD8VQs1iq9GsMV5wzzLvE",
  "key29": "5M2g95ubtZCL7kBdfPaPCuHw53BtzcAbUGXassH7VnwRGY75uJTG6geFn8SRbfvK3bumxM4FYJDFkTedJxDSGVkG",
  "key30": "5hN92AgQ8SAKWVPSDqwZaVPBBYxuQdWtaSjW8AAWrDykKu8VHGnXSWs4mR14gZFft9ew7EjmLS8wv4YFSMnMbkDf",
  "key31": "2cnzZ5e7wFKyJfLZDf7SJAh6uJ8ukCr5phfb9Eim5vrpmnJgWhM548nfc3u3kSPwrb9tz6xbGmAaMgHiQ1Zj6kXH",
  "key32": "53aa7MASUrRpv5YwqtoAFuYTzDtfLQMbAcKHLRTmJdTk8CZQqyE1aMvMNkdjVEAADDgPkJnfc3osSJQ6WpzmiBRZ",
  "key33": "5YyqAUvmZmqBnCuwipFSL7KDXomewX4FK7G1cmEX8FjbfejGC8s1PG1oBaBEaQdW6wJdxaw8E8GWZddKLFrvW6Uy",
  "key34": "gT271SGL2BCpJwVuf4ZKZY5BR27vw2it3DQA2YLf9sEE5DruH6arSbrtpWj19ef16KGgpGSH1r3g6eDEAqMW3xw",
  "key35": "3GBbd66jmJaEW3PL2QYnAuexXErT4ik2kxhYqQhnLRJYdNqGWfYGtd2USL8t6Hiz2cVMNwWLtRJUR86f3A5vSiE3",
  "key36": "4R1xrdC2WooxNJSt527ie2G1eENBLW7LmJbD6vSXGPX6RL3W8PbUXTXmNje9NRAZSDoJQY4oVGHXV1FZGyQW2ruq",
  "key37": "31UJrJ4drZKvNxtnkBEQRABZHyUGdky3qu2FuDLGs3zJQo2NXGUK2xmuXohVzvocHV4zPgyvAeYebLz2oczQ76AR",
  "key38": "2buy59YzbC6XqMwJwLgHTvW13wDCjw9g1xMSqh8xds8cbX1PuqUFUhPDZxdfhr4fHLAxmqrGy4YkoZE2rSH83bYi",
  "key39": "3Ezqiic8XmKRyVb1kJbLtE4p5WExbVAATHv3jfoqsX9CZmx4RCXpVZkfaPCPBN7eD68PfwZeS5EawN7TrYqFDsAe",
  "key40": "4mmHjrjuoEE6ZkkA9HT9RpfSoMNaRi5U6np7G8aBdytKk5C5po36eKtHjpnsPCEv3LZMh46QsoQ6NWU9tYnjY28M",
  "key41": "rgrpfidZtJK34d7GxZaJ6Vc4X4uzfJbYbLdqCemWMXYMDcqcr98AeiGo67bEU2rWYQoW6rqkPvsEfqo2Xywyzyq",
  "key42": "33FouK3oXXkDPg1S7BBroytiTVa9E1apmegdp3hYZ479Af8MymyXFNuCgv1Eu5FVroTn5jCdYM8UTZ7RLVw89LT1",
  "key43": "3ZvqyRg7NRJv4AE2jQJ7MzekfyaJahTpXP1sw8UWfs6s8uhS4C6jHNUnVd8sEuVWrmVp29xtrBUootqK3cusznEh",
  "key44": "8CLAxHzyMRZTM5ew6HJ17Y6f8daFW26jc6hR7vHiWT2gdwd5ERC3FFgGmQcXL6rF3oe3CYZssZ877HtTGEcBjX2",
  "key45": "2WJ7hDdnWHRZYSybo3vav5y1kjPsxPWH7x12TEjGEwNb5b5LmB1GcbafffQeLEYxEnME6XyqeMCkgbN3U61jJdDf",
  "key46": "3vx8bQSgK23iYsbKnmTePVY4CDz3yr5dvr96A4c4oe8ek8r5o8d8ZjL2uU7LyivQ5pgKP3MHxiHRBsh3VxChWDZm"
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
