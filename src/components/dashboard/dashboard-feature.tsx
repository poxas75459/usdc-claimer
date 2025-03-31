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
    "1JcdXVW778nUUmb63RvH5yuB6C2s6zo43FgZRDrvm9TC2DBZQ9LGFBdwUo6nBQtmfAaEVN9peh55eSWfqzaoFJt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2TUsPeFB5cbeXaroPzyTnYMzmubhCFzKqckG3QLoiH28kSgMWG8aSoDJgCP6AC8QYQpb6PSvNHBwSLbiFMi4zkCC",
  "key1": "5oaVUQPLg3MKYvR95cTpNhFntowdJ9bvSm4ex2JUH1FBhFvQWYfBg6Xstk6AoggLzNXsWvATKJ1pDFQJvrGmcW2P",
  "key2": "5DtSVRBudpheTs3Z3RZvb5kKn9QDGFUkcMx6Wt6LEYWZQFGWwh6o6eNYTHgFrDpfPMU4eGvKfx5Nj5G2Y3r5K4Bv",
  "key3": "3Bpor4Rj5MVBcTeW9MWziS4dY2bogB9ziGyTF9Hmf9CpwDF2Yh31qpSkNPrxmtUa3AmYMCw3niQepNAmN5FhXLgz",
  "key4": "2mMBqj5asDY4382DQkCitSRPGwTSEe2qKFi5ezUfUPERgN9ReAYXXe53YCkgFnZKE5x7raDD11cidu6gNs6B7JfD",
  "key5": "3CLtZ7AZGB177r2qMx582FnGCFv45uUrvioWrrbXiCHXUmYKQMBmNiEF4yYXzt79nfDD5gbVP6XwLsugiBjKvXkp",
  "key6": "122u43rQk6fguRE4fpV7uDY3XsTsHaP5MUWULKw8WrmHKYiNpde8bbjVkewmkvXdDFBGq2YxBcrienYhrMPsWFYx",
  "key7": "3CTLvfhvf6ugRMRzVw7ohKrZjotW8YwCsUSkajNnQNDPuJuAjxRAutPjyZd6JxXK1QApmXh3GsGHRewRq8qFUGz7",
  "key8": "3wVtdHvzDTXwdCboAGZ7kSUY2mnrkSsbEp2Cj9savcgy8k1EGTQ9YQQxAHfhzaCttiaNeZTBiYPv6UWcJP7hg9e4",
  "key9": "gzpLShGeHtii3HpakVpPwuNspbZ8rMn7tx7huGqUtqw9oS5SQFSEDZpDZseCBsx3T8jkv744qB6GrBpyCnUPnVv",
  "key10": "4fhvp8URASEXRcedVB7qygxhoHmEPWzvbS5qbcdfmE5PCiaVmzQZspA5x5MUDmhjYPii6advuAw1eRPLDiqQxcLu",
  "key11": "5cgCmUcR2pNKxaTbybpbqTnWERJyrehs4ztaUaRhzxYd75RWzXhm8sSqKBNbhf4v8uubPecrfucjA6mEADm9mZxV",
  "key12": "3XAh3MUounn3PXYDacUQEiGpqxA57Brc5Uq3sx1mcYZPkZupeFPCX54gNJkNBqyjTmXiTm5XC8H4AL3BHwjL1s9Y",
  "key13": "4dZZHBHxiKJkusLu4vXdrdFswaMuUhngS9Ve8XqtvvYm9xqsJ12TS54kGL7utanHada3j4Xs755NP6aVVtz9cBzJ",
  "key14": "3jwLNPgvrEzmCFLxDXR6GqnNm4DD9uqToV71oT6Mpwr1oahXcNfZp7KYYewkrtNWu9BbwKtz5cKUUUTKrxpSSn8u",
  "key15": "32UgnJPyvLgf3USeZgWzzb2Lxx1yTximSR5tciHSKeP1TDgCJ3dg4FcaraF9hmn6NydY9RzBupVEgFZdzyoM2FRE",
  "key16": "37NvEN6qDAxvbZqYRxgSKMed1TqbvSHVMU1zX4naTuwkPt6fNyR97g1aBdYCJUxocxeZv2DLFp63CMKPFQ7pMsVB",
  "key17": "5Crfu3xjse6kzVnFt3xgVx8fPWne1TuuK9uVBdVfGvBqGJN39NbdC3JcmHQzpiHQjoL9QZPwhwY9XH2JrNK7tSbS",
  "key18": "28pjcovpE7YJCc3ddDMz2r3YVcWWAXEXRV4zqZgb24HXoGCsPQEjD7bm1gAd2h4Ba8AHH4BKyD1syAGWQ2pZ8A9f",
  "key19": "45oT4REsYneEsNtfDATFK7LKNaQfgyRc4hct25yHZVwfLQxL7QaxWaewKfCYxHjLuRinyw3KmgC2yaCZ4iKmo6xA",
  "key20": "q7dtmeC9U4xmWn3hXjB5o9WpimrLh94Y3KzeV6aszgnKJ1NGs9GqwG6oUXFHpFvngjY1hoUjj9gsuBfTFJ32HRW",
  "key21": "2HVkueV2ZWvv8r7a5fDWEChQGKnpVt5jx3F6PhXXDTGzgcAurAEPrpecso6CxYhcpfTmbBkgUcT1cwzY8j1Ndq78",
  "key22": "5WMCmhCLVH9fuXSNtdSJcUGU9jSZZRh6r76ExypBygaT9Wm2t4MXxv1nx22HoT95Ttzd174oG7Uw32Koz5d9fg3W",
  "key23": "jPs5WB6TkQZH6tfBTz1nfXb4D1yC814Xk3jx21RcVRToeJhxTzVdM4fQufW39XoDA9tpxjgMnysMKe6bnPb3jXT",
  "key24": "5GE5BkQw5JWfKf1LXngaNzFHVTniUYh5KpEbfzerbKNjZpoCHDCNs7mzKSfLoDz5euiX42djsKxuFnUdFBMogGDD",
  "key25": "5G6eHDXxJVVXZdku998dgJbVhDEFNwhNvkuhJK4vqayiuHFVkyPy78vn9vjXU38GJguKDUgoZyHmXWwohJj7xb6m",
  "key26": "48S58i8HZ2xwuZk7kT1zCrhwPPi8fBuEcGnEuGRTJL26kYSp7SvCiCeyVQn4VeD8LmbkTe5ZDzbK9UjH5jbiMSKm",
  "key27": "31A88hoNNV2xjKbkJR5DxDFxdQUmfi4GDs6C1rbHR8WdMejrPXpeEi1A46QgPJWi9uPv5FA5ULjp4GdJm9mkXSUA",
  "key28": "GoLZTbn2uJWYxmzS5MHmJt4HVxHRiTY1rxxAYaScHbBipy2J1by8FdnBtsZEZ37LtKgXqohbNuWcBFCjc7vHpwP",
  "key29": "4Zan3tM6VMkgM35os1WuA18HUU9TDgqgkA9UiQobRvNSGX4Us8qQR4gFpWj3q8btSBMNpw3wV665kHg3XinjTtso",
  "key30": "2Rd2ToTG8zvmEXhKzUHNEfotEbnr1kZX4E294fM6NtK9mM3F2fHhpeXqPBv4WKYDzjjLtAgRyNntiw4B57wpMx9T",
  "key31": "2XEQbgWx1Z8yUKXD7qw1nmr5rYGBdJ9CCjPumq7Hfn74x25HQx5ndYfiKwZbHXM67gxxUDNZAKERqzxUkLMgD1Mk",
  "key32": "4y5gayNjGuGkHuGSkqjnNgUCzy7edSC3oDM63UXy6JjBMjsLp2z5pQHtuwL7rc138vaMj7B8zzTvcyvjoZa6xqSk",
  "key33": "2F6JW4f8aPsxHWk7FCfAYYoK7ccEQaTVPW3RmxBXnHyBAW3uyg4kwF2uRJbRpuLZpK9C5cFp3vQT7NeZ5HMgzA5y",
  "key34": "2vPpJ2G78CQi2h9ZFjKPBnxmmnQuqY48dSdjs3LR2VPQ1wVgV7rKUxvkfwwpoZGfLKtyAEpwY15CT7h97zGzo66p",
  "key35": "3NYD1inCr7E6o2knxXQzSSLfRPccpGVU68P3dH3J3aKmFwTFd5jL7kaBkovVd8KmQepcppJMqUyFEuYVP9FcSc9Y",
  "key36": "1jBmXo6B5oxWfUF8RtMKmjZWsy8sCZE2Qmc3pYKiTsYDCf2Xuxw43G4kozGYhuRR41bL4v22FksgQ65718fcarR",
  "key37": "2jXd68xf2wn9ExB8cNSZw1GRuiyiH5p4zxLcDDF8BJT7BrHTbGwDxFwetrmWtQ2vWQgWofofki4sZVCL4pRHx3PH"
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
