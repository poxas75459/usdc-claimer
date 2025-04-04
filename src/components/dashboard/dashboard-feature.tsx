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
    "5ZoC9C4NdkNv8spEZigQvntz6symzQRcU8p1B9DcfPzpHKvCqsikKh4U31PoBSRYRrv3y1oDwPV4Hg8n4QzV1VkA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "HrejfjxU9xy6tKcR6wPNGsJkRcgQams1kLmZVbYE6GMncAv69z9BtgcwBTHibEFT6kSenLmQqa6YNhhSAqgZGDa",
  "key1": "5L5SUt49LJfe3SHZgXCcTq7NPdkTAf252CfoDzWXe8uyfSSX1iPxswYGtjAMB88m86rmALbA6d6i3yuMQTcuKQ3S",
  "key2": "28xrj5ZN8ThFLcV4EB2VZeHUduaE2tMgJpU6ZRcYdJYsbT7b1gMNsMGdPVyxHkX1YYUjDN8GwoyU2fTcCKzxSgaf",
  "key3": "4NqP6aCaZwg9oKpS3quDNTtbtgQb7myMgJ3jZFKy5qXu1FsULeDvLpDHssMjBAG2amYnDpcUabDjxrzBoPWR9SGC",
  "key4": "4vPkitSH3pMR4VkND2C3Rm4EGkN1h9tdEPktbapqqCe3EihjT3cqazg1HNCwMv3aqLnLwsgPRYgMDKW1kJ8iRHk8",
  "key5": "i3nSSDpxQwqcfmm8FP464XegN6JR7U46wv2KjyXtz84aVUXiGt2eSDBdTwsyUz1C1dgHFsT3nDHi26WLqpkVaab",
  "key6": "5dVa5mvSHcGAoZ9BKuUGuAQKU24Rhg1PjQU3XJPkTnxzkX5qSrjqrFsHtxsGeYmV5vEr1WieWpw6Na9d85Lz8hms",
  "key7": "WajRtMh7JdM9uBkwNuSu9fSFUrKfCPULyBZm2oNTXLGVWhmwWA4RTiB2ZBGujgcsXpZwhZh8QdaHRcpzts9s3gZ",
  "key8": "2X1SGcUfX3XwSGHLqbAhGhsVDJu55Mmc1qgSqG4rUaHpp2LNPrSEsdJE5SU2cDUu2kNsJg1nbk8J7UBTfkxnJe6y",
  "key9": "4cT8bVwj35rUN7M8BE5KT1Ji8ECXLGRQm1H9ZRW56XsAKV4VtcEMCL3tqeBD3Ttu298zocdtL73odUk8cqqPwRZw",
  "key10": "gmDgF7Bh21EyKj7j2VBfEzxgcErAQBVgF34URc7VmxoEsmy9Xse7zCkpycuxuhMYftAidjG9x87BPzfMRthhGC7",
  "key11": "PSpwLaaMkrLB2vW1bDN7rL7jL7X6KvAGRkNKm38rKnM32P9HbDEwk6q17t5gqmSfacWgTwe7CUDWdWZjPfDMLza",
  "key12": "WvhV5nKvAvTP3rwdEp8W172DD4NwFWstEWL4BmbeN86jXrHDBJJpXczS7ieBKKQyP7zGEGmT9xSgzctp7HZSasV",
  "key13": "5e2CRSyTVSr1t55g7efm6nmtNUmT6JijNQCN4FEsVjqKjkeQbByrYz6yYjpwk2L18Mx6GtNtermGsRzPMNHiEZpe",
  "key14": "4TdHV8UCuKxRocq6xgtbssaGuBet3tFffSrE17c95NeFAnnfwXtqNbnd398VMk71RevtZ6L9AQkmUzL9QRQ9JX59",
  "key15": "5FGuLm7JQq8kSsCexPW7qwHAcQNkXGkVho3Gc9zdkSA1GboHWzqghNtuFzmt2n7X9BitE5gtHbDKpu5m3FxqoWFK",
  "key16": "49eHW1L9SKsns32DkhuYGRwCDYVwkmVAp6tNuB5Tyxv8ZcdA7S7143StsVviNF3i5UgJLjiLZ5N8iqzFutRYAami",
  "key17": "DkW3CxvQiByLDdUmEc3vDrCtX2bE7nnyyPMqZkSr6JPPh6sukQpDa91LHJbTYBz6ubz5pKRwYeG7EL9bF8NVkiA",
  "key18": "3FDKT5HtUQj8rhGLWpx7B99kvvv895nr3SzY6fCC3PkKtZy4dD7CMpxY1JaPMJcePgdaAfA8MNXRu1iBp83MRUiQ",
  "key19": "4xcsJv5imP3fvJKF9GhXe9YFz5MdeCWNUCT2PHGEhqs338C8psnz8dcxdvJkieDXKe1mKeT7DcWAsfHzR6BvoQUZ",
  "key20": "5QaTujhC59EgPCuQwEgkuKMs78EmrBqgCup8JtdCbxf8LdkiWEaGifP5z7aEmSYZyGoCvwSNiAd9DyHB69YvqWeR",
  "key21": "L2dQXR3WznKHCgBE562Mz2EY65cydAUuYhQDU7yKMskWapz3FoBaTVdsoENsZj4RcwraXjpbFqvptQCmFTFhTmT",
  "key22": "3PtL4L3fw4NvVaHnSGRMrSxjHLBWao2ejVDpLVvQ5MoRE68XpqRW3M8r7vvTT2K5JCTXoqNJzs373fZPuhTk6afr",
  "key23": "QhQBV3e4kMtLMCUa2XEk1afX2ZSz9dxHrJGDAnErZyJJoscPuCP7xpopBR9NUZsU8ae5P3HaC963mCqK48wcK6P",
  "key24": "4eAZdACobhAnHZufF3EwnMg18np62a5KfGHdsBRogZuVwjtc8QGdJobtrchRoDWACPe86vFaFBsHCzTLQSFBJtr8",
  "key25": "5dncbVm8swc1evxN8ANqrJQFXBDTizSnJrZ437rKpN3aKcKf9f24Y1JiREHQzM6zSK2KTeNQXU7Hf6RaDh9Y6ZRN",
  "key26": "3LhHQzRkWTsK2o3hm49QpJQuJM1Cvuw2DUYHQcj3XExmHS2hJijq1H42rGcM5qte5n1DwjvK2Fe9WjvaNJ36KHQB",
  "key27": "2k8ejg4BkJNhdk62qpK111FE1JPhw39DU184Syb2CmaLshSPynA1xUtBmRa51TtVuSk1ffdADfBZib2bkAFnLggi",
  "key28": "mKGKAP4F5uAxUAAKoX4XqsY8kqwAHTRw4gCU2Vnc5GRg4xT92MvV5sYt8WG6EdtZjrF4S7FimpvHL9if2Qnm8xf",
  "key29": "4rRjFwtgZxh5rsVZuJFcYk4wtJbt4A6AHGyagnsmDGkLGeDPtwRYPjqzvzgsa3ku9vWhaUzugz8kLoNbbQZuPbq7",
  "key30": "5KRkhB7ZRVrrXRXwVGQ5kxFJ4FvjjunpdtPb74Q6XDUv3XtAALV4QYX2ZysJDJhugTsNHJADExtZB3754s9Ao17A",
  "key31": "4erXBr2qUJKZmC2dkbf9zu6o5uS3HLbg7mrqQGmaxXKFWb4XWo4p8vEMUygdoAkomZjDV9nkyKy7v4XfzXkFBULZ",
  "key32": "25bdD2mPk9gCuoBSHzoijPe47PMPdrDWrjsYPemGUf6jVHJBsDB37N4K5tphGMa55f5cWdsj8ZYSN3bfAKD8WUe2",
  "key33": "39uu9LxfQFGVTt7t51Nt4oUumuDG1Pivyb2uphkWVre372Keo9Rv6VJW5CqgJRJatUEYQHPFNEYFQzN4GRETgYAJ",
  "key34": "4Cc62DAHcEb3EUEAi5TRVmqf7AzawC3tYoEaC7pgbY9bKXxs9v9VakATYct5pfEACnsKpXfKVPyy5iBMX4qhSfAD",
  "key35": "2ttQ7LwKD2dDqgFsBCL6fboSzzPFd9gzL4Q31644jziL8Pb29F1qQYKBbdP4xA3Gyw2aXEudBmPLt6Z917jmjLGd"
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
