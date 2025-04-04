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
    "5yxAs9F8U5TgChAtXkxobEaQWfYgQQ1nCi29aKjPFnm42b8os4SCc2U9Lhfts7sC3UMN8rXnWTHHb6a1T1tKRcd3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Bs2wSmaUW8voxdxZqAThyrBjS77yH4s98ic1ZRTHekSLSS8Tgydhts1eW9jDhzqWsJqSgXWoW2ZvVwq4LkcMtny",
  "key1": "5nwZDxHV4QroeU9DA6cNinHt3ciywLDgC2GRNko1RUk9msxj1xKH5Ftgs3Ucz8NYMWfiYNuSNU8PE6t4xNTciqik",
  "key2": "31P3ZqpAwhc6Y83uHEKgdcd1cb6AsXsbsxF7Jqmc7qBcaoV5wYTjGDJN1nUJK46RhGyFbKT8uz8uS7KKrWmZvGLC",
  "key3": "5mTELa28PKRjBq9izJdnuGRFFfYDPR25zXaco2P5ymVhoR4DT5keAhWWrKEP7FK3TH3taNCzabEz9N4MEtyUJaDo",
  "key4": "3mZEuhEPA8aS5v1wYLdyAcgFLMX31sPD7KEc1wh24Ycc7H9LN8weYdAksVcxFNZjZoefqLnhjUfqAcKcD8aAjHLd",
  "key5": "3zTEmgizXRU8rAqfojjL5dha3MpjeeFABYnKiMpMtCCtJQ55BEWtTpNrgCLquq2RUGKHueCArVEWTbs9QN1498ke",
  "key6": "dLWqTNZGCPUvsWWGSiHPv6UQsMmfy5C3gQZrK6zJXXvJTupd3WJXCfkm5Bpk5z5Srwm3T8kGU6rWP6BYb94aLxv",
  "key7": "3rUxu3RsVfCMW3rvkcrpUK7gio7M4Fj9CwDNawD5n7N3iaiF96kZ696JHcjfPvFqacAAEqMs6BquXjoMWmGN2zHp",
  "key8": "4DLfZbr927Br81v5EDKfVZAU9QH9BsaNEsHcK3fihm4vnFT5ijdVQGHEd4xLmSx9dGZhxgZFLAZGnceoQAjJF4K",
  "key9": "2Z4SB1U33abizSYdnzcufUBAAXN9fsWkHw1eLTpK8Kb787GgZrrCjDzudcCmuKKUZNgd19HDMZXr4rHHLnhdr2g5",
  "key10": "5Bn7WSxAGMtQefHpEiTxHfVMuttYv8YjgrvupAy39irtgTfHnea9ThUG8F9EKMzS1bCA7f2F1W7DnHBP8GHw7omi",
  "key11": "4yb92Ep1qSpXngHC5s9FCD5pFBTofzA2iiZm6BMxTTcFbvnJ4KNhUPFj33JsVpZJ3QoPrgZ7pkNWpFHRsqeQtrq2",
  "key12": "ugEinG1GGPH7S61xrTqvvK5c9tzwKNGknWSSpGiHe6NTv9QfDfFSBv2rpSSB1y5MU4oegCm5kXUc4ggeoTMNKpZ",
  "key13": "22L1afQtcM23Fb17fhhR4GuFdWjSVuNLpeag2yj81zcZC8C5Mpg7xKUkioR38iYdQb2y9vpAhVwvv8nVtvHkgZbk",
  "key14": "4sc7vVJGdMiM3jXHqE5ZGQy3WRqtVs56KGBcsmBYiGjdhHX6Xmt7e9e5xiuWHncgqYhfKCv8VUvbzB8bTznogtA1",
  "key15": "5QNExTumU8SpWpMhLWGcZ6Lu3ua9VxA9wZQngHNYuuVvcuHev9rmvmhxpD6S1ZiAvvtujZ9vDSbsxp4cQNfxck3Q",
  "key16": "5S4vppkEsodNnvbYxFpjGrUGeS9ChQqNLqJv65mdq4HcMCThdoau4NVjZB1mg3WsBH83jT7ZWpsxhC3E4G8wwR2a",
  "key17": "4XPv7QxkJBzoM8gtVdqimnTwHKVUk4fgTW1f6mUsabiCz7UFf8aHz31KqSUqssCp4Mtpx5XJh59Ks7AAmcyagh1v",
  "key18": "62aM7ai2MU1c2ghE11UVyD35D28GP1ntXczQ1njqVrnXpFxKFuDZkVYdhkpuEAMYTvW7zFxismLP5C7c29LMujLz",
  "key19": "5hxYMFMHtDPEZ8uE6QejgnmvJBWWeUNByT4N46TBrxftP8eWqkeG5p2tHep93K1n96F2eryQcEzgEAQ3d224VvUe",
  "key20": "3LfvkN8ntx8LR6kKtjt59uWh5LyU3AJXqNvJTcTU5W2EZqGipHDvFwbfxy2LcmtnyM9iR2mDCL5RrwZqGyzUS1fA",
  "key21": "2ULSmByjxjZweBcniBA5NNQhYoRHaXq1pbQyX29xNR5yBoWhGBbBXXFN7ZJwyLEKHSi9djq4A1bDc5eJRMQjM3Ys",
  "key22": "KNqkuBrCJEv2upx11AHdKGMu5YdFRm4VUpDtzHyEiJiN37cQk7fKRM3uttsqXh78KwPWcrb2ssJQB22CJrp7LFB",
  "key23": "2mR9KVxFmhmaHiDQDnrfnzqeaWv4YtYjWi2hQvczrHku29aYrKqwjppN7dmAdDxgyEdDWCUdE2s5ciZxYDBUVws1",
  "key24": "2FUFTFbm5LGydqadwTUxrR3ZRLugUFBeA5suNbd6Rg5SciSmW4cDkSXvm9ahF1X7oYJquco7dT3qhdzeP6owvNkT",
  "key25": "2uvcDxbRCQX3ucHtFGG9zt4kf1UTtzEhnDPRub5fati5j9jy8HSkmUWJtYGQPDCN9dnvosKoDTqupiW9dbMmaR2R",
  "key26": "5fNkZ5Pcf94ba56sG3ng3b8XemXZhXEE4ccUbrmRThfTaUrLeYZ31jxBbnF1suypQUK3GA7dqV5vyGnPGzVNiRyN",
  "key27": "5auXzTdQ9hWsJz2N9cZ8G2K2emAF3ewZxJFpDmwGCgkJPDuTemSoJqDiZcnUKoeesHxv3QpFYTsxPmeMZxWihGcM",
  "key28": "2WJrGT9eUD7i8sq2tXP5Lko2cBiB34XHFJLAsuWEHGQxWoyb8DQPKFWVqSRzYjC4RBdNmnrQgtoptwPm8gPtEjhw",
  "key29": "3WVGn3NLZrWRvMaqsEXg8qMHNiBcLuNxTyAcJji1pvwrfwMxho2PfwgQAkq3ebPzCc9bCKgQuu2EkWhHfCdjrh4F",
  "key30": "M3XA9bdvRo1EkaNvnGViMcMheXbRVufo2uJNtPSwEvvmPj54KZc2Vip4tYrUF99vvxV5r3CCjwVv5oqNg5U7xQY",
  "key31": "hQYwRREx8YihJ1DczzcRVfEV4ywWqFWNnCn3xqKsQhTowkQq7HC8LoXYGCvFeT9ZuVjzC1GrawQKYV78mL9JQkh",
  "key32": "5y5iH54KnhHxxYwYfch8TWitN9XoqZh3sa817tV1rdUddSgoJ5E9aC8meY15fo4euuKbzK2mV4EZyzDXD1BGsMhf",
  "key33": "3KZdCSe6zZZSa3pn1ccmD9E7bjCxXmgZeoQnFB98T5XBYFXq5a9gZwf1LYTeqvFx33g9MXwRuewBcxF86rDDDyTW",
  "key34": "4qpEwWBmUGpYLKdyvgtCTYj71KkpwkYQpqtj6ss3j96hZcChUYEy6Q8ZdL79jCBWFVAwZsVEoDra4kSH7gccMghs",
  "key35": "mGUgkKd8KQmGiBRWqdeWGC8Y4PtuBhLER7jcGAKWGULz8RMA1GZU622f5o4dcHpMzhTN43uac2k43CZRFP31y6R",
  "key36": "3VNyX3EbrK1eb2rqJaHGta2NFyz6fyjkUCaLa6vKJoVmcAqnqnE6vnQdMXYkeUuRU5AhQMcovshzRpxvzGtBNdQ1",
  "key37": "4qeXQ1VbAuq6otG187EkxdZDgHQoQi3416CzDCGULykDRdfn7btko96wFkZgBQy4mUkr3ny4CsRxAvcy4RvdtNbz",
  "key38": "5w8n5iyrUSuJF3gqVQnvAMGGsTxpsA2gq4Us2fUJptwqE5MCQAMZ3vAYKpRFYBm7Kdgaujs78LS27opVUiDcNdSw",
  "key39": "5Sz6UGxRrJZp84vUrn9akuw1WapGe9B1CopVqjRgxAKEWVtU72ZaBeMQC5t6DAK8p9wAfq4oxVmDzdBzj6A54QJa",
  "key40": "4Ujmg1XqpoeGHwF4eEd4urBT4bdQb2H9hBH8vmcgiQv5zT4ADyXRTbaQWcocJKkwYFywJ6xY3wQwD5kTK7PyDuLK",
  "key41": "4epWZRNiuEbuUBErTUyyeSPKjDJ36GWn4YoainxxxrK9u132cYw3jUyLWZSkcJHAzWFTmGgSFxGtTdkJQr9C3qPB",
  "key42": "5b4zBxA3p5DW2hk6zJZmMdL2ZU6ws3cP5gxhTFw8nP2K3bGZQiV2RmuW5qGWkKVaRzigKDzUjCbW8jpbNmmGfY1c"
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
