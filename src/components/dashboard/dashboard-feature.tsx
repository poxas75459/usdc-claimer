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
    "2UjmLmZw4NHoyWH1Zu8WQ1AYudCkSL3hpsYFvg6ArM41ZzJm76Zs2iB5g9rCYLBATLaNoJPkYeh2xQQVMmBLaD5b"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5aRLmuYi5aQ73ygAHMaryMGahW36Yi8NL7sftCm9Jf1GTXZWhdXU21mQEaGt4uk9oAV8LRCkbTcFEBAhVF7GfueM",
  "key1": "3cgV5LeZBVQifeHBmEwsSH7uzVJRtLwnjenLQcR3FWgybQLHYm4Ze2kWRqkMAyaSAcBLm14YeGnpLdE45wxyGySk",
  "key2": "23RSog95x1vB6xDF3VNoh6adSJGw1Jwr29zAJDvTbkKsGzXKJK8zemBs8rqYoZd9NvxQvM8i3LnXrQhyubq8UTqr",
  "key3": "4Ymu5496YgednTiR7DMK8zycACLasmsMLJfJ1GDcMeJ9ijSMN2qpjLjS7XeyjymUKsjHBRSLNCYV9rKsboZoTSHX",
  "key4": "62kbf6hvvz68ugXoNCxK4yjpxFKWE818uitjkQLW1KYjjg5Ua8syhNMqiwwQKBK1btv3bd2huswxqQDrHr2KtXzn",
  "key5": "ao6y11CkfpPmB1aAfEr9C47Zeh6x6Ea6FWdkcscCC7MA4rpgCzbNcVaLQvLKckq8SqVXZjEovpZ1qMnQtADR2Kj",
  "key6": "2aNrTCN6RVB1mbFYHR8fSvGcNyjZMrK91bqSitbXxhBB9Wx3gy351CCipFNRxQ8ySPrSk85RZ4UGGuMuXcUQ9Kaw",
  "key7": "4Go7PKqsG3ZEU6XqS4mV8uZF6ejr3LJnzvLxUE8tTMBss86GRyomYHidCnUNJ7YDPU1ezxLqdUyvaLwXZt2KMCN2",
  "key8": "5W3t7ufeptUooKh4tbAXWizBuGzHHdBY4DCc7CnDWtZVhumsnoiamyKGWbSeoZEfnH7BwHpHXXUEJi5a4Y123pur",
  "key9": "5bQK7juWNueXi9oDi5g8DeEefse3g9rk5mnN7R4PRq9CeaBPyx16zswYUz8tSE91roxYTRKshFwAYpNwnudUWazu",
  "key10": "39DudQNxg9DZPZURZEKuRBjfPJL4R7oeysiApyrYMz1XhYPwxaE5mzxWtAMcd557XJ7HSiM3fa6QSWnyUq5gDXCe",
  "key11": "5UnwyX3Gc6VjuFYeGtNGQBdZCVvQYJMH7oQaZBqj7pXCqNwDgYtpnk5nY7QmMdm4zHeffad2AzNVUNBDUCkWFdMo",
  "key12": "2Ky5kx3gisvpamgjWhkrr59EkV8LAfNk2MbhGJR17Kv7t4qMVWMnr3Rcu63dzM1kNH5VRv4Wu6YDxBEmcyw32FJS",
  "key13": "1dhtD41gVJPYkdDzu7XwpqkeeJ3DLKPFTt2LrzZqJTZsoYJcNzNTZV9HA3LZwv47PbN8okmBuDTR17Db6gtSPbw",
  "key14": "4zRs76j1ZDUNFfw2tS4z3SnudFc5tAdWDpqgSdjt53Vc1BEGjSo25gDXi3wnUGpUmVT4zhC3aDVPoQRJwDqGvT4m",
  "key15": "3j64oGJDb7VVeK7PNTcVTuJouQAHQZjCyzohcnFGP45be54ignXktShP3gTUYmWGLYrt4hpydr45psZ6P1no5Qg7",
  "key16": "39LjTwto1FSvE2VhejNWdtjbbncmVkHj7zhsCLFpH6fB1kH574oSy578kGdQtJ4KCpUd2RE6sei5XtMF4oViHoxF",
  "key17": "4HPVJQSsz9dzStjhM9aznVjzJ8vsewvavvi9B4GGoHrqmVhPqgJrjL2Cxykp9U68epug3up1Bz3KVJXdyBR68Fh9",
  "key18": "2jYhzWd9MmVrRCZZ2BHk2WxjXtT6wW2RitYBCpPTxakXPHck7RPSJ6wVjiuLcrUSPWp3kA8gTfcwkLms5KJZABtP",
  "key19": "5gqh8WdDnEvPq7ysDWiSCBXgLwx9nLQeaeqrcmtckt3zi7ndXbVA223gqjLyFh2qQd7MrHUBzY8PhBdi9LLvLPhr",
  "key20": "NBzfc7zBS2tmAcZJgJALa5L3dAsGhmcyM3EKNSfWnrJS3eC5igEa2txwWaUJwHqbLcJpjvMN9PW4jNUmh4Mph96",
  "key21": "2VzvmFDKSzF8w1qnq9ATTLGGEs3TzXPfSdbmjQe85CNxjH7VEX5mcBHgsZ9WmMXGfKfcY2RNoQ1wNcsYsGUqsJGx",
  "key22": "2kNfvMqmEPN3oGkdjoYBgTgsZFvcp5byUGCukcQuBSEHcErBbrzK3xn3Wah3UdajxYhjV9mVDp1uMBghBDKDbKNy",
  "key23": "58twufZ8SkAMgRvZsV4Cn5zDqZoKFgVaQPzSjMaRa9DaV7aZtSSh3uGxS9wiyjEuEY5BAkEv5qQZ9FvnTCLu7vFm",
  "key24": "4QiUir4VSjhXFQoR1Rcj4HCz9okBXLmaPFdDaJokm7FoqCKZrHfc8F573ofnFaWuQSYdtHmUrMnYg8pbYZZ4zrNS",
  "key25": "5kYFJ3Z8wL3KxQjWPDfSheo9TNyVBHSHbFht8gwhWAu5HLx9GEhPp1LyGpbvy5iAB1S6VmV9mFotBsKrVtmbi5fb",
  "key26": "35Qu2CVbBU5j2fpMU6hRrwh2kZs2fGePtGwJXynqRTdvTyrkgpDEwPGiGRJjcUSsWco7X4rR3oRB44DprA19jFsX",
  "key27": "3cSEUhPqhJa4k3TdxFX4Kz3wuRt3RAyNhWV3R9m6jdSZ8NuKDKunnqjVmUXZ8n3KnWq2dHRziHK7Y1uDBCfPKzc",
  "key28": "5HcDVAAweSWFXaDk73p97q4qvM1N4imESLSY2FEV11QXS3KBNS1ZvFyqDzBv7ZWcK1jVweD1H9rXueZoonCn7kD8",
  "key29": "121DiJy9kfXcmsDhizusvr4q5RLWjW7b2gMqhypDs7DGGmAitkBLfJc8S4FUf3NYxeZ4u7WK6mC6dBViV35GRTVi",
  "key30": "38mMojYGNmqXyoWsoG97vJPGtErEkTpx7f67YLwH9teTjLa6XPS3JUbURL8EevcsDHPVuQZ5WkJskvDBqih7fmq2",
  "key31": "4gUi4T8J6efF2SaZYsorohgp9Xrbe7rviS8XqEhiskpNea8RwQPzMR2KQvDb6U7ZUeM8QTEq9am4vJZjZYkUUKRw",
  "key32": "57SgsKDwhbN4zNWUvLJn9r2NA2pXSQ8QhGnaquLAz84G8ECx9rcQGVX7FwBPhWGfLmin3BpA4EjmjzW8Z28rguuU",
  "key33": "2Bx59rvzRtiDH5q4U7EMgjgn5YQuiszcxRHyhL5RcCC2WxomigRJukprvA4rDRBSq6obHsF1ALzj7hEiBLqhb84c",
  "key34": "2wBZMS9vmdSPxqmwgAhp9677NqEvUpQvy7ogcZr6ba9yeSo5HHjqqDqqjF8pfiCfM8oPdyLx9mUfezreXSaRfFZE",
  "key35": "4d9mCFMn6Gd2PMEBwFz9K4i7UP7MLE2V39mj2pxvwj6HoVsSyUD8C61yprRnrTsSDq9tvFE9PuC7KvpHoG3pqDK5",
  "key36": "4tjmLc3JyeipXsZqzQrnWSNexEabBoyTZ9rzLaqPKi37RRiktQsaMAn1sVPFKLpXt8AiR5XL97utGKZLqGR9U5ej",
  "key37": "233NzCMSWWKR64X8u74RYBGd3c3Q1toEpHw9DGBnXeu5v1LJnnYWTvnS158u572hTjp69DUTrVdVwY9M73YJiLsc",
  "key38": "2nH8XUM6buZrHgUNCKjLFbtMnDT7mee3C5VjVg47tzQheTExxLwDBwRqS6z5mrUBK5YG1AVHeYMzSkSicBGCLAGb",
  "key39": "W9rnk93SXnzKJVAiE1Xuqe5VjQXDLaVbNg9NjfDqVwutXcm7b7v8iCUatC91c3YFQCGmb8E4t57itaJAxtrr9j7",
  "key40": "3PPY5uYBMh4BsDpRerMn1JtuMhe8DjrreAzq5udeycrJ8KSGxeiCGYXK8AhVsmgSQ3r1kEu1qhy4qKzRJArzHpRW",
  "key41": "vU4hPcotj1kV1NeuJQA9mQjfpp1ozYEdqwNQPh73A2fEFQbYRvkLQnMijpync2SMhD512uDGhaiz4gB4LrAzqB1",
  "key42": "58bQpVK5BpiMSP4Vw23rrofoYMb3EwRB9okRRjCpKQoftmBdZnsTrJgYY7f6paPnN9FGKwmTuV3uCxL8qRK5smRx",
  "key43": "5Tdjbd1U1ayD4FikQqUgMdc1jNCd3Dya5xjdZNyn5iKnjKmJus7vvXCa5XU7cXwTjSdBVXBLHoYqAhQwDE9nnPby",
  "key44": "4QbjsWkJKk1R2pbAa4iibpPs9UCNLW4goWjDUBqyw4p12u5ETaD38KobhH3W3PR7Vjckx5ntGiRu7QYyhp8SBPwi",
  "key45": "4s3FzQpSt2f3cmNXkQHU89cNpQs2KMkC9m2qr4w3PNaefeEj6EW86YgvuzBFsbU15wPQszfQF9eZ63XovtEo77YS",
  "key46": "3qXLGcnXkNhkGebJN1x7svQJzyq1qaVzTdvVwu7at1s4Fe7u8bvYLQQyxCX2oXS5PYYFFaDJ2uo6VbL8XLjhcyxR",
  "key47": "2xpc2THN8weh93dBsEAdjU2nrpgpVATuG7iD473zw3qc8JBKh6GT24LFALBk52w5HFLYxL8QPtmh2bjfspbKn6wB"
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
