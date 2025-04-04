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
    "43FpuqLzTLBVt6ZJRcLk2HimjqYH1WorhthBJoStd4mWCNLMffCjHyAcb4SDGjFPoMwmGK1eUz35fLxdexdmqxx6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "67SmfHKjxYfNq3o3VUJwV11Wu3oHXzSCuUGZqUq8YkjW5ZDktXd9ZiLecs1j5hzDtJGUPCZFeqrwdFaEvCPQJa8e",
  "key1": "2KrKSjcfCrRFSKmFVaNcCXzbEmQAE1D5yJc9ewwi3Ho8tubivujY2vfVkEftF6ppBMxvZdPEi3rdvWvqPwPizncw",
  "key2": "LLnaBj2o9ZcLsihbDMLnG5yJJmGSv1963XQLzm62ANTDZLb8JJmnTTFJvVq6Xr1kr4R2zgZrKEua6GebsDb6iXh",
  "key3": "EWeP6ABbbNwvEMnyhVgrWoXHjZfRtjaraKkKkjvvYTYnncjCsuwD44r7nKNJcmcG6XkDRRxAMYrqDu64ijETnmM",
  "key4": "5FciWtKz2CPmsBntepUtB35QeMYUe5YJs15DjjrDLLG6wXzP4zPAXq7gtFLaSnGiuAYLUvxEWVXpi1DQyxvxDPzm",
  "key5": "678n53vVwSupGV9kRaNjWjvrKav1UkKp76szVb3gVSJcqZNUBbPNdoNxKf2eDTnaEWKtF9ruAKX9m4zWK8BMc5zw",
  "key6": "5hDrojWA5tSN5XHSy3xrJkxa8F49GQ48eWtFSkQM3XDA3n8nSm9SPvPXAsMUw4NHG6RPeea43swpBTNhXahueR5E",
  "key7": "5MecpYsrCxcCJ4JaSaJ4ciHizVFpyouueSAtbZNNBrjV3HkLr71x9Ne6XatoSKXdH37bMFryPZJenyeWHTtXHDSN",
  "key8": "2TWQhCXgivJHVhBmSgWC6KDEMaVpeuYvtjwWwspJ648SNBeV7CyGd7tAETZ2NPM1vWKqhTjWyL5sUn1HmN4Y44R6",
  "key9": "95Vs1ggk1cQHHGKYBGtWeVvj2iUGYxFN56ggFibTBatJRqmD8xE8Dx2dAQqn4MeA1kUDQVZBLqgnydvxMKXvp2u",
  "key10": "4Qok2imZgFkbHBkVBqtLuqkqY6Da7j5wXHvmGwrJc7f61tREXizCwDj7WtmMshdEgmEtm8waeGE5x8S5yEntaMSG",
  "key11": "453kHjNJVWgHN8iMAWuRaprNgE3oWpxprmvLTttzs1qi44gu9Ye6cbwCvMB8sbyBCUuFyVkNALHRpC4eCmvUfcRZ",
  "key12": "3oagm78g87qeuTFEaRtK6ro4njhH3TZCDpHkAyEAEc6qTivWPVi3ev1UWzuxUD5XG7WBPkaCrDjETBXp4S1Yai9e",
  "key13": "41JqDm1mnnBFysHUA4sKQJR8fidvREqdExo1HACJFpUNT95mCod8L4icRMTKvDvu7LXGhjejmZNwM2g8bwesBqBr",
  "key14": "4JCzscWd897NkJDEnQAFGn7pwoS1LUNvTeczv4PiwDtWs5JZm2FavtwRzUCrb39ZY7xaaNVG65TGRvp4t9hM1GGt",
  "key15": "2CoUXAQJVCFpuqwKhzb4rK3aVVwu2QBgYBgafJWRQTmpU61cPPCPZkMFPf19vvD1UCnUcR6meaZi9nPDLZf3BKGJ",
  "key16": "47sWeSnFcaVUVAhUKS5HskaZacbcAsxV7j441vvoRUniYRyeZJXkQet1snTPwCjR1VjDyvkWNwQJPjvePU8PyiCN",
  "key17": "5cyNK2rFKDP2VS3whFgqFDhsHbRdxduJJzCWxD26ebNGRDgTxa5BQFAHEz76ifNco99pLwjb36qfFFQ8GjhXL3kr",
  "key18": "2jPW55G3eH62qZt9LDDHjgJyGPegEyX1PdSRaBLbie4TgzHNqDTZLgfBwRvbH6RXuLTHHKuhyE8DMPcr4D45a2VT",
  "key19": "3zRHNXFPiskSUnYyXBH55Vbb6VP7nuNWARGJHxnwFwVoUbLf82Y4LE8W7HTuH5cLgdHWhTkeWmQfi9Mr5ajeH1cd",
  "key20": "3zE2Zi4KGA1kaSMXqF7NmdHuT6Zm7LFKh3uq7aP6APUL2UCiKuHmtJkLBicPuYUFi8ysnZJ3QHQT2ruGo7oYjVEY",
  "key21": "5rL62wWbxfmvVt9jaiGbuz5ezWXQBB1G7NDm636iQFQHu9KXBquQ1LUEs7utEhXoDp4err32R2S3KbffHBEnGBzy",
  "key22": "2iACFwf8e1KspaSMyg7gnkKiuCniewHG1pJSNrFSRXfCC6rN3SR3tVHQiYgk9pfKQtKBPaytq69WM5wpF5XyoY9i",
  "key23": "5HNQ5buoNtsC2wbu9mk4SyasEhSQCwin7neSMQZkCjnV29e26qqh5gHzgZUTX6Wo3LjF74izL2yZQK1sbozAtXCA",
  "key24": "37taHsTUcXexVwKhtmepFUASM1NCGs4QGpdgFyLjJ5VhpNaRqSHbzcjRmRUhrWRVKhdMwrPYZBMAfXSHpr7ZJgAa",
  "key25": "2FDBU9ba1cBt85rhT75qp5EXsP5KZuGe1FP4LSkUhM86nsxv3KqYnNb7zAfjUpDiwoSbXFGjTFpLxbQRcvNhCRu3",
  "key26": "aHR1k8nREnZfcaWVZoLYui9wtGEgR7HSpnRCFBQtAmA3yD7d9xRprDyxdRREuo5fSMnnqpE98ZsKZ2Z8WgAUNhh",
  "key27": "3ByyorsrtEw4VfiKjucZok6g33uU9NF9kATr45nfrm1VeQo7enmv52pZanXKgR2452j4J1riiHc3y6fSZPeAeck3",
  "key28": "32fjTBePCUh2Amhtdef39JpVwUjHQH5LTCEHMVSZ11gKzmmRSzobrnt9BVuhyeGvao37xkkRbG7QkQYmEhKQG6sS",
  "key29": "4P6eZPqHvSHvXFQ2WS9fZMdR2wQHUC47n2tccVhdrmJfCZcYdHSyGvBXHqMqVMcmy61BWRtmbMFzpoRYFv4TF825",
  "key30": "4JqujiCsqFEKxyHjcBAVt5zXju5owkWqzhg4t4wSGfXc9idXhgjpZ6q6Sm328vW4kjqfajp9sj2iTM4xqPkiMEsY",
  "key31": "5jLsUoGq7fVPTLobDjqBrLJuh6TPm9autHi2JeZbbkxc5u2FbMoCMZHzrAwALGfwrPWRQwYEDxh5McJ3Q7aQYM5j",
  "key32": "iLPTAMfTrL9a2eJ8kAoj5CSwxEQPonWGg5L4Dqj7Ze9cPDMZ28xfckTRgQASN9tRZ3D52XEvex7UJjHJChmm1KL",
  "key33": "67B85Qeash4GqsnRAu7kSHEDVxpUUv9NqaEeuxAtDntsnQhCLzd9ctC2km2pqkpYJscup48AB7U1ZvcLKBem9A8t",
  "key34": "3k4Dm3diYDhj2g8VjorF2R8H7pXCDHfNshdxW75gogF7NY8FyYQ6T9np22yTevxYSB5QqgBQQgAx9K9qM16fU3rv",
  "key35": "RFoy2NwABJWaGYUMpCKuQA62vrgTFKw6CVdwYzsBB38YGcUjwdeAyPSaWAgDFAACCid8dGbhR4wPwAKA9Sc3N69",
  "key36": "3yZMtvjJfWkJ6Bv69VaSJHDnp5Wk18qv9t4RVRXDZAyRL4EMC4NesazisViAbchX8mUwhJ7NvPgpWQGAb7mqAELv",
  "key37": "NGXjjQdnp2q733uCPYyTsxaLWNhUU4h8knajf4Xqtr6ezmAQY17Cx6PQJYx1fvpQx8TLNKGvEYL5qTTQSsfcA5x",
  "key38": "3MqD9Hq1cPhFxFLq91HaUU4me7S8V432VsJSUpsFAYUUzPMf7jyRyXTWwUJXjnY9fbBd3XnoyzBr6KuEW4Gbdbvh",
  "key39": "3ypMwAzfqqpnnfnAqRLKCv9jT6WriRJ2rAPdjcLKGjYyGtZjTWmeF6UzhCDkXAZHWhJD9Q7BqTUSKyVrFe2DnDVm",
  "key40": "5FhUjUXNygGw62eomiwtUKJvqd71gzHTGjunLvFi4aWHRqGvVn5rSSwbhjE3D3MdQhUQESLVvCUP9JkrSTSotAuA",
  "key41": "QMswZuNpVK9uGZjQ7gbL1hmBAcSc5tabfzMEtUVviZvJWyBNmBb7CjUVCS7TYTkmNmMN1kLvxEJDTXMbpbz8J3T",
  "key42": "3mrVR4SfPaaAN8F88rh3fRJsxxXDMwCBS9ZxZ7jJDV9KYVdcUmDLX7j3tKAeX8yUatBEkmFuXeqaE3yFLWHyuYgn",
  "key43": "Dv1t86FsYkKRrPEbdw5eCD5jyw3xgVTSfsm59BeeZz7MR9WW8TRfuxhcBRTW9J3LadVtjJAmUE5DZrggRJ5Y53Z",
  "key44": "4vREVhQ7q74hSmbG1FuD91wuYLyBYF7PMSW4n3qyB4Y8G6Yzum9HzbPJtAgqQLvtXkugwVYSiNd3R7bdrpFqBgB8",
  "key45": "4fVZrLXTXmpiLFTuCM5Royttex4hqhL6LSV8xp6hx1qTCp7z8eZz1AdRx9Cv4d7PSCc88RMFzvKv7V1XkXPxAHoZ",
  "key46": "4ibz148ywcBcHtUS6a7wNa7F7od3wkmk5yjKtpRTfJVznZ5RCPwR1BrC5VrakeqBkvJywRfgsq4hr3bh7GdB9uiy",
  "key47": "5MVDJfnQvsRhFnm11jcK9QjFwhXo68pnUAFA4ptJ9VimyMLa3sWEe7s1wWDra4UCNxzYj7MxgNR4Dcnh5FLY4Qqi",
  "key48": "5gXFKooqGwdPqDPGPfUo45SkVeU4JiCKLmfKYm4GPFinhVVFrCk59pFAbTCoTRm9PaDfHJndv8iUqUrc5ea3X4Yu",
  "key49": "2N8xP4U1e9RFZdcWEriSfsiCtJMNER9FwhCWEQJZTEsTRRefEpHziDq6ae3Xa5Jkz87V9VEocWhRJSpjudPbbU8E"
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
