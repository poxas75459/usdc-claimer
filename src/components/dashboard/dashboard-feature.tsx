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
    "C3PhZjbWsTUWXKLRZt3mk8QW9jk2GQwJvfrqeivKaqFuLAApRxXwDkXruFMBupdEdQ84tenByXQtbKLioEKzFfq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4nW8Q9vmLJGyFbqhJyCw2EWcmVKfGpnci8w4bQqoKtwSCbrp4MNydv8YrM9Aq624infAZ8Y3bzU4uWswkc5Y1Cui",
  "key1": "35t9crjvCWc6yXKe6LuxTMeF77JzoabYBmfjL64ot7brr2JR58RDeQRpcouKxxLfjpntrEzVDvT3WG4HobAj8NVt",
  "key2": "3VvVngKk57uQmbWhQcRxcBRyuQMLbq2UrxhEUmjxRDtF5udcKHhCBfD97gu86nVh9XSqj9jaK4wr6HS3vsCpiNQh",
  "key3": "51XbVW3ZPHdpJg4HyTGcF9FuYP4GrcnwQaiocf94SVp8bV8VuWX1f4CGzsKWggAp4vGVxYBiNBLCJpqm3EB9kBTQ",
  "key4": "3owcbrm8mEBiQp6THywFayP4LUY5iBdraGJQJfLLbpZe51rEvFKDeoyxyrNmkmgDCtKjGs8pmHouHe8GJHKBiRnU",
  "key5": "VPxbkjdohk6kWcJdt7v7rD97DeGzUFphAge3yb4jjkFwQUBaFEcgHVhgq2tEUmt7iLhh1gdwRwCzR2Xu9fWNb25",
  "key6": "uo7u9bqr9et9tJuqE2BHrjhasLeUjmJa2evoUUxMFcSihoRAXpgwc4zY8Mh23Z4bHzdLMfLBGEmJ5A5idKJJnrD",
  "key7": "GVWzQuzS6DQAVLiRyw113Qrkxjy45HQQs6pTdwYzJTTWgHoHa2w6qsW6tRoyHw4rLK7QDHURcmxGH4HtwDFv3Eg",
  "key8": "5f64xqcjAd9nFH6jGNVKHswVH1v8mTTQm69zTiGj4w8KxAZLGykrRGL84jK5Hj6pohSNQGAxT9cHs9rHACsANLWp",
  "key9": "498JupKViYenaUr6pCUUQznK7UEVVJjpWQSPpc8odjxkMZGbTmK6P8XPx8ZZWrUh5U1MVqYsKcjpU6Jb86h86VDG",
  "key10": "2z8ndgmTqs7VnjiwYZjFC7izX22JCKQ3GSDSgaREPvgCSTEYP3ZJe13uMyAEgNQsrGJuh5m1FMd7A6wAh8n5VZ2m",
  "key11": "4F8TjHUXQAqpFJoP5FJMffPtPG3k8316MUR3jgb9G6bVix8p3Vwq6fCYAezHybb2t19aztguSpmSPmDCVBqnyVdK",
  "key12": "2WbFhqbyGQMGo85g8sc7rP9HLCmvHKVm2eT2DjNDEWhRyRSKYGdGEbNjYkcddwJBz7iStTppM9QQs7gRFqjMiiRc",
  "key13": "53NjVcTYkS8v3AUYpDkVcr6xGwHqK8TZUVNMg2zrN6UUbcMTjvkLN2yT2ZTFnw5X3woctpH1WMYr5rBQSpVBcx7o",
  "key14": "3LkCxN1YtKg1R2WDTyAYE9w9RtzpSX7Gdib4iQPxn5BVZmqw8QxSZ7LcZettHFoa38GahKCh7CxirFdWSoebhEVw",
  "key15": "3MBymCvde6Lf7AXUbeQAq94sCokzKXkhmbQbtJ2ekANbvgVnq8SnR3kHvYWqeWd8owWCXzMtphetxG4u9q9eZ6j6",
  "key16": "73yd9s1Vo18cxSQTUjWBvaMw9CypjRvQLZ11Eb1vzzfjD1u1t3kKCmyuFaHhWi6DmyU1EhJ8ag6Gn69oYHXTXXo",
  "key17": "5eNxbGHpg5suKKa3NjxqPuToLNJ3EAhNzbaZDHmDnE9LzrPQc6ewaXqn9DSUqUHhwqwovEBLhMUaQ1hzWeeDMp1U",
  "key18": "5w6KfzgDpJumE42WRqo9AqzbryY7jvDwyEEQg2QzhpZBwYmyg7xhRhoazhEQ4FTKVk4Y6hGxLkRCJ6DT9ZsXMRVM",
  "key19": "2zF9CnxGchJZc6Q2LmY8PooqyAww3TBNh8cX3Dt17zrAV4QPZoNAAKkAVgfZYEpiLcAvB9mWUxhkJ12PgbYhx2zZ",
  "key20": "3sDDJQ48TCxHFaTe9gguXVGiBhmKcPzQ3H2sopWHB9mXfChByLB4PbdoChBrjyo5d2nFTDCVcCpLorWboLznUzzY",
  "key21": "DLWGp2ZwxWGrYAQHB5YmCg4gLqATbibVnTdAzpqu3aCHx16dhSa293WwqGSR1npN37fihGXmG9YPdHqggP6hvmU",
  "key22": "3ay7oY4tC82jrAwumkqdeeUWV1jt57V7y44LpDKHKWcVkX5LQjDKmoD2gJhJePSv5pTdxZ1SjkZVrbwKvnkTos8F",
  "key23": "23JcynjLUH9Xj8E1YySJys4c2p9wcrRUNHKBcr2fBsmGAN2U9NooKQSSn4xdfmC3X24egixoJ5wk4VvYbGA4T2Eo",
  "key24": "4gDbgNeTCLpnjjTsZU73egGdKVEWSqHrJTd1SrPq7WyfvkKiuTb5yU6wgoMwukb6FFMVG3Z3nToPXc8nrKyAQbTJ",
  "key25": "4adCkuays9BXfoPLRxeD5uJoAfhrwDYP7S1K8WrNFYAfFSH4tda6ssazDLrvASf9f6g2S4D3EtTRSuH4PYED8yHV",
  "key26": "goTrYVpb2r1mW7rDoq9j52VEEouCPaUPmv7wvz1bnuA7tyEWvwZkWHGc1mT5iEtcSpdNKxopX6ZEvpWxgefa1LW",
  "key27": "5aFBswJRqqAjQw3MgHvG3g5GaPvs4ox8ncLMLY8HWmdxqvbrWFaH2uUUj73zs6uiW1moRMHwg315MX9biNEnhywv",
  "key28": "35kwXkWUvgucKHj1XVbUDhz58JKcYMFU6nmDYSeGaDyaRk9Z41C4pXfxavQXBWjZd1h2Dg26APY1jsdzQ4aXELSu",
  "key29": "C4ypCjr4A9tc5exUjBrRkGcyBtSJhsvCQyy6qgqt3JaPRrdg9yWWpsJQbY3XF1HoqLsCQA7VzYCL76SuWZ3eAAD",
  "key30": "2oaUNVZg4ow8rjgoJNTQPfv6NdzBcd3uGGD6sU1wp1rap6zb2k8q8Bby62wkYWbrLqGHjY8d7s96sBh2vRwRmrT9",
  "key31": "5aSSyufagYxk7KMDsf9abmxnkffjBn6UsGRWrtTkkdFsnVmmXtMSHbGNHbngy4EoQinttSgysjxT7Kpybk3wMa7x",
  "key32": "2gGMBpQ9wXpnHLdKraJRQxbFP4RGkioth6QD1iTnPUDbGLBGoDqYnjkE2uedg2dGCtLbQMWjgmLdN3w6ymAFo67B",
  "key33": "4iY4XxpHcWraMfGkbLYBmrim4si4RusdqPXE4EtGY2r39y5hYnS5etxmbS5TMM5S8VaQXgr9L1jMBF3Z7W3cYxUV"
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
