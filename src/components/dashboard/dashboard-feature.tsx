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
    "51aPr7zeHxyfbFR6T2ivVhEogLxUKzhR9soyowfPqCA6vnhKyCH3fKpLkechLZQKz1zr4tuYLkgRJtF33uGtLaZ3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3aB1TNpnroqizixEgXzuTgQZSYwUzVFhDL3BZSYzyC1m4jZGa6gZR7EEMCD6bEavHvGUW2zkGpm16cr7w8UEFeVT",
  "key1": "29VGZ2zW6m22ofHGTKaBLTATSf67FTU8oCPHCpYpTuBc61rjkuDygjGqpMEbGqHbi3UvQ7QhTsqeenFFB2eA8WXu",
  "key2": "2ZYjnAfjVJwPP1oCNRJpA3uwB8orzjjBMrvdcWusxZuJewrqwvtvQh2rmMZVZHiuiub6Yj31pNs2Eam91JkXUgTg",
  "key3": "FJWXaYJYNLPim76Buba9kg37DZdbag7uschArQKqMDb33P2ZBGMao24sRhhDBmMpSmfKGcyU6qrsrGq8EGuzUFT",
  "key4": "21EY9aNRRabPMEzbAe123VyBTkGNyBJpoD8dNjfaP5AEC179MACizhQjMu97ij9HH2B41M39yrQm3BwqMxMcd41C",
  "key5": "2zYzUtRWqjzNLuyVfW1STdMZpxxyzz86z1sY5J4b6yB7HaqwWC8vGL8RuqFoJ9PZq2NwCT66X6D64YJDvFdmxmfu",
  "key6": "2g1CnWgP4sD9ZYdcwrbknhoiSMuHNPQfcQJARKoWyGmtUohkv4wBSH9RkPvJkq2okBYeC3CJeBbisrNQ1PDxZRye",
  "key7": "5qVxaXyy12ZCqcQhyVh4VXzcT4Uh5uRrum8UQoRbZVSTN2JYXfdTVX24EuMxm8qL4FbsYU2s8utyQkm4UTaRU9nZ",
  "key8": "2JuN2Ehe5EH78uH5p9ZnYVhDqsogAaSAMTkf7nNZSr731dNa9XsAqz2wfbzsAWNZXbH4DeyiP1DaMZZWR49GxBDw",
  "key9": "3rhGPSqED2LAd4Mo2BdvNADYRj1NmViRgofjUYDgwtwJZnRXLmUox4CsK5rePEB7vXXp5u9WhT3mas6aWjAwcVVH",
  "key10": "4E4nCkMWKkmRN3Ajn8W9z1XckyiJbq1a31kAygomnLcM99sQVDwpCp9USpwNdapCWAWwCApYGihcGxRuibZ2hHeS",
  "key11": "4PS8ZFYFjvrAmpMjKnCYShB5RLfHZD2RXoR8JMf51EQJf6PMHZSsQhwJD74b7HAaPwSosERJD9G2sYL2ojpLAqZV",
  "key12": "4sD89vLTcxDaz6KSx91SnbN4zHPUePoy5fPJCmdeEeEbMjAFN2NNHeUepveWgkHpaajNMhzSfxc8MQPwxqGGe8zE",
  "key13": "2MnbWAWSU8S8HmU8XziBPRDhWNTwSguAHn8kaearBNHN9qD7zi8X9SwmWiipLm4WHCmcUG2dmYgNG69aBq8awh1c",
  "key14": "3HrAbvy2gdPsgEza2u5uHagvpXdfpH9t9Q2uKFLAQMz19tMKmacB9MyK92jbVWukisjpwdCR8639bvx22waeE7UU",
  "key15": "2AG5icoUozo5Q13pUvmPS96fdr2pzVsHakxNbsWLZe7pdNrwAYAgjZ2ca786XUXjGNDuQiiPakd9SV9ovGjWU2Sb",
  "key16": "5f2ABJ3VZxURLk9aoFxfHht4YyjgnREatSKpGJ7H4DXcnif6Qg1N5XuNpmUGjVhEW41Th442khsMuqfymNnQ1reT",
  "key17": "3CCmxFv23G9Mp4G7hzvZeBq5BLxKkUH5CPyy8WsL4LSE9r5C8gheJGeVK6EPqA4gUp24BNcHkNmfvGVZGUWEJBMn",
  "key18": "YDuiZawgPtYbykLZezPrdPMFN4qcu6EKWnpjLDM9Dnedq4k2YxK1P7g6CjSWNXxWN2VkKHstr5FiNvYoxwX163t",
  "key19": "5uXLnmun9wwU3TCBBZE5ymaUAYR8g28eeJLB6cERUcteG7M792ygZ41g71eN5TDt124izf7jMoRdfkWU3j5gg98w",
  "key20": "4gxBVsovMMZtsUz6BZjLx1vdD5zeNMvESKJDa5q8eDmTxetgDX18WrxwDoMNuyBfRmnPR9wJpYUtfevfzDayAmBq",
  "key21": "4W8zTvxYADjQ7v7AJ7bRP6MRF4y6Rkw9b9Jm1eQeB3FrHzpQ712yxqQcRdbPVM7U7XJATqVi86aVnSyT2hSe6EAX",
  "key22": "5SbWYhEFcdmqvNtTgVj2w6gWG418PBFZYUYmmezh5YBaytgK2ZSv9DpC3RCYe6ZJo33zgELLt535oGx4bqM932HD",
  "key23": "FkcQnVGLHiX2hrjM36mpyyTP7Ko3j1BvJfqBBb9kgVnKCxA44zE7GS58bZWTAGgrX53X1KPKedXBbf3hx6MFQJY",
  "key24": "2K3JTCUYcGtZLW7fYyvdcByvibiPmCp6MYnPkgrA3NK5qL2mkAM1bw5sWPfiCU2Z2uZ9d3UnbDVWsUgZEkb59KjC",
  "key25": "2eGFvNcw4AxTBnGDFzonpe9uwFLFVXesxDG2D9tL5vbm8Rt1ChxRbJfyqaqgdNWAc4pMY8vphjS3Ms7MPkPpVYeV",
  "key26": "WNoZTdvPyf5h9sKeBroyrqwmaYCUB9nFbTAGXEVHLMrYmgs35iNi6zMSscZ3BGVBgN4wQ65DAw5VFF6cBtwd1ug",
  "key27": "2QtLsdzx6ucGj3cQD5ZoCHZFJduUN9JggNCCRmkDqbiMcXH2KzCNo7Dk3R7sLjLpfW3oJcjK6e5aXFMzbuc6ojkm",
  "key28": "4bD7kLAbuGnVv8BgtoZMQ25qqeCHDAuVxJUTkgNsYPqwFbdTg8rPzPkBtGuFrkBRGif77g3tGXdBQY1abJvBbbBi",
  "key29": "32DUQ4HW75X2jBRw5NSryAwW8YDBHx4Z2f9TFadNnPDV8umf6E8mC2AxMGdKZibVjv1F6KnQn98RLxPv6x1g58cz",
  "key30": "2n9BENbZbe7MKtbzYYT4Nrk3zmp8RAvNnCNFp8uKAFDnbJdfJa6W33uDPTXWn3GY7F4pj9HYYDRYDeevjbghEfTj",
  "key31": "3VWSHw9ZS6wWUrLJ98z23PSu7BWai5jgYtpysBZKMgu9iS5nsBWR38RU9G58Sg2VkFijSqhRf9dHHHRUy8dFp2Rd",
  "key32": "3pjxvkEK4mCidPZPD65eVsafPJa1eoUtCwTbmXYVvCHh2EHmTfBv711LbSzr8o2WDWHiaqWDSubS1sG3ndj3os6Z",
  "key33": "5cFyihcAefW4h5SbH958cGkWBtk2VmzWAzPbVYo3tw2GA5phS5AgcD6GBxDL6expvtgdXGNjGwMLnDWtsKgnBijR",
  "key34": "2uDX1JyYBT4HqhkPnCKfp9nxnQZntvyLcQuyH4SPmH2cLHq2QqUwe7hbsLA42hGQnQP2UBrz85PkB8mQXe6Pcuyi",
  "key35": "4jSVGfouCM2DWQxRqNG2HBfkEFzw1vGtFa5QqzuK6C6cStaeWD8H8cUA6BtiqYjF8fXimSCZFjDDyaDDVFk8cXSP",
  "key36": "67ktZebH2UzZByaEUWi6xsmHYD9cNHNHogXaWLMbjFVCSR6wDRRi47D79KdxrgjnqwatHNMdgJhamXtNYpKbmk1",
  "key37": "5coyoUGZ5anp6jW69Eed7kFzS3cmoWVrWJURiLrSE37sRutDuDirH8bM4d7gYxYUPnWXrG8xmsmbV7fiNrdsPXdW",
  "key38": "4wJTZfx4bzALuLGF3Ce5ERPBuq33xDzNDbgSEmNYZ9AaG8trKkDac3Uap2JMPqFWF1UNufp1GQd89NFSkhsARig4"
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
