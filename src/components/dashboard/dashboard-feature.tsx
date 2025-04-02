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
    "5rQnQyXLuiqnvK78ZDTA3LqHMsWy1FKJFRZm3NZXiM99FFcutgdwP1ewvHePpcwtV11o86ppFb88DnigHJTrj57p"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3RyjJoktWPS4e5hxBdmRnUKn6YCcUABvZxC7eiaTspK5cr15mJmyEE8fDkYSZ7Pubbxu4qDXHbHFcNWL6vAitR87",
  "key1": "2dyvcbjRw4DxXoyqRDUhBDsXrsA7ZkEP6qWbNjyYm35f4pySPw361ECEJnhDVVJgjcr1BfNYapxdkjnTtMk3YXw3",
  "key2": "5iuaztL2ehwLkdh7VKiGmSiYjdssYwK5WJtpD4J1cqxQKcgSuPn4MA3H5MDnFHu67PYVbDef8JB3yqpqahHiQDim",
  "key3": "5g4cTYh24PLxcup6ZkvxPN8NLe6kBtHGC6MFG8uDZEtzA1sRPSS4bGjEXEBhfAiD2xhQ8iwd9MXqSQBJRePDu8ot",
  "key4": "5CDV9W5q2AD85EEWrRCVW7bovcqGd4JpdZbd6J5RkZQCTtVwGhyyMjTQVmBBdGTgPocD325af36zd4PyM7MpDzgG",
  "key5": "P26sKgD6xqomM1VSe7cPTAymTzPLLNgbrKZBhkXREZULvJ6ng3nazwivDrWCuPpVMwJSC8Rq3HjrKFE4yVdBUKN",
  "key6": "hieMQLmLdFKkRkqDm5Kprp84agAogePfWy49LwX1uiH8ajaQYXBcdWoRv38ZSyHQGhQhLKsBawF5LFqoRFMRLJr",
  "key7": "pSLvemcua51D1tfCJiiWZmUaBQroxKEtFNnxbQZQJ7fdueDAfSkFXzpsAtkapFRT3yrY1Q3kN5gmw3ikKrUrMZe",
  "key8": "5c2nASi1V8KvK3kaUYUSiA2i6vAc8K8X5x4LDvHdHmMK2EAEbaF9AJ9Pv86D66ELmHkS1kebyTb6pA6MNfJrDZjS",
  "key9": "2fS4qgWeKCM7PX9GF5o7PsV6j8rnBYcYuSu9FBWHFdXEMYFQah8sTxBoHBdFFbUd3RJdbjWVPRZqCSGy5zYgeQH8",
  "key10": "3ek8XZQaUVLY5oaJzvgzyC81EJ1RejDjWc4fmmPwpsxnnQvS2QWHE1yBfgVtBpLVrpUpSCtXDm2FzGuyDY31PJNz",
  "key11": "4F2WKtKzeiWq3REW9msvuA2k4x3A9EcXX4jsJ9m3qbV3WTW4t8L5oLXgXnH22YY3FQPwryui7sWhRfRgDyibHBJw",
  "key12": "3MHsvzCzCr79SssGar3TKeq8TWmkiWp4YPJRLMZVyb636aiY4YmF66GRHdfhJ1QV76X6w6ptkhHQzgmsqRPfnEef",
  "key13": "3vXmDKgpfN63bhF3QEc54Qgp1xFTABQmVrcrmd62X5n6pgFxZiYUEYSrpF4cnUr8g7s9nVqMXZryTGLP7oYKnyhi",
  "key14": "3EdnAPv9JJcAABDU7BDhsUR9NggYXnukYv8719YALtvvqueVBpuQe6RjWmPqnf2zpthGbripX1nCn8kbQKeGpytY",
  "key15": "31yRS3a2mVKyUfmzgDVokTiJT73XmAGRjbi1ytSXt2KHn59viYDWPayDVJufcGSVDiKURtgScHjTBoB7fajWwG5T",
  "key16": "5nwnHkTV8iJMxR1oFzXz6A3hUKetDY8d2fQxGcCZ7vsuKAcCGFCLJgKzecidfLGfTnZ97MrwBr5o4rCFZNCf9XLe",
  "key17": "3fdvd8vbFjg42q4EJDcA6cqAYYBdsbX8A2PbpzgT7ioAcztnmkNmtkJ7smMf1d6EbGSPWiwnewFVy9ZeRqRPQGQU",
  "key18": "UGQohRjSFDfsimjhykhtaCRpm6DeBtusRF3xAidD6i5rP3VXS7UQ46buB3apN6SPvk4VM149uujyAGgNZGN4t8L",
  "key19": "fxdio8Rv1S1MzAtWyEeCcJwr4pqqavYoA9DQw3ZrbHRSwtgdUwKCGehXiEh2Zi8sNrKNp9eW2KSkdwvCdT9LskM",
  "key20": "4DjxMQNtDKZh8zxWnw6S8mUZRRGrSLFm2DFBKnVR5RL4xgjPJK8PhGxpBWfLQaehVPBasdoGvXY42XUfJBkJsrUG",
  "key21": "5fQbGFgW48FC14Tu4yoB55erXFfDMUPrmATY6Qb4mgFvcEfS2GxGL8UTeWPGp5MExYFNwHxB49XnY5krNyRpCPST",
  "key22": "3mceoXB4tAqexeSHgNmMTZHpfFJsCVad971ywDqMYvXNoKPtvxra3N9nAV6yZu8trnYKZvfqsrXmFfGHbEgR59AC",
  "key23": "2aRRHucqBi6ujTY2A9VXkFnoa7d2kBbZzP9G1gqsUXp6MYUxJaWPeBwCd5FjrwsGATLkzmCa3CW3MaBJ3EvjjBL8",
  "key24": "42ys12uFoEbWw9DX3CRWteje7zUkEJoojFSUW9ci3K22sdRM5GWGWZq6ianR6oXsXTBY7rHqqLXBuYDgbYaiddgc",
  "key25": "49sYm1ba5iULTvCN2eEgP3Xu72h9grHeQ9eU3YUZ35MzVs7tyUw1Gs8H14DWEK9ZJxDX9XSCiiuE2B4aqpLUSw9Q",
  "key26": "3aVCfh1wyKvhBwQa6WidnfQU5UM3i2rm5PsQ7pYZ7Hm2MW4bBZUUeP1M1MnsDAuoUq2rvq2uWHht6fhuzAqwQmN4",
  "key27": "29ywuJU2cDBT3fNpHr119TFjWndzfKWYZtC3atuw2U5obFRLHEmH5uFUfDxviLFv7eQywmEppQGt9RMcWMq5e6Yx",
  "key28": "4eW2DbVQf9EwkmF9kv7aezcchH1WVipB45gDJXPRR3RMV9RUZGPmCiWq3GhPneo7vd1B8gQKa7LX6ho416zZFTSM",
  "key29": "2MYT3vDEfNHfyC77JUqe3sbmKj7m4kiWWicoVSjM73gQ5Vt1KHdtLkSSZyYnJb2sXaR827psFHBZ2CjqLeSpLuYN",
  "key30": "uAfJJBcUbizEyBbqnfi79DYua5rFwKpXrv5jxwJpmqti3QJoMeJpEZiDCkgXQ4hapg4Swn4wqukmGco94SFEG3b",
  "key31": "ABKH5RbYrx4sU8FmMEJsGvDPeFiBJKiGvFgJRABnb5yLc1Mfor7PwdfLEy9ySoaVHxqfF6uNLPrHeP9irH5zYE4",
  "key32": "3PwTncSKqMdEgEUKLfXtBCttMCNmGny6neiq67FoJmS7PnoRCDepsxq89wjMftRgguGb5niWcEmHbrdLEbEL5tAT",
  "key33": "124JFRJp5qNgKyjj7A2nwEN9eXhZhuMxvshwNtN9X4msQXMJSeyUUjLb67HTa45SzByjDtSY3xyeaoYe3LNKC3uH",
  "key34": "66e8fRSqTvbVmmjtfmBN7pi9MKKw8e6khWaq92VskDurk1XvkUto9V3jCC5J3wWimb4NkeKLAq2LReCdsCTwdqh7",
  "key35": "2zQFzERzjo33xk4vuzrksnXgoRtvCSuavnb6e58Ck5eqqt7PRKo47XJaaszMS9KD6dSPpr7qAgXXPDXzPqEWrX8z",
  "key36": "4t2ZbAHR5UDq35zEautKvby1jHVPLgrZ3x4ctFCH8hHqUAgACsur9e1eaRRVBX41fhtkMkCadDLLRQmt9Xn2F3Kn",
  "key37": "4M5jW1BguyYb8qRxwHJmpuThDEGMb89i7E2Xexid1RYxBJUQJDK4dccAuffRGjCWmiiQZJGdZvS1xZf4geZ8uxFT",
  "key38": "oENn1Rt6o7taWWRhEbSBJY3Prpmkp7ARkLCpmu6tSpTMcBm81MBRtighVoFaiVS7CBmMkhMNXsD4JZv7gn8Wqxb",
  "key39": "64D6ZbCY1UW6QwQSJ3QDg2YQmuEMBQAm4GZRcCvgAPPmkVqeH4Nd8JxKb8hajTpboPpSnZd5NBGwbWdjxQeYz2rv",
  "key40": "211trDrE2DMFrK2PtpsCcJ2RsP3VkMT5Y1Ctyq3tfURrAsFk5e9Q9m1ewE1h9vrujpPEEkTPNHKGntyRoFNiLsUy"
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
