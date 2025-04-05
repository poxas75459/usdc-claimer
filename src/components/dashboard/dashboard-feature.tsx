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
    "2XUMeV8JD5MrmAWzpVEfNEQwwxS5GNjuhcYUnn45jYnjDZnxNV1hLr45YCxfwo1WLtBSBs8rUsxQmKQbLntjC9Ei"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ZB6tvj97UNmAKeL2rwWy8ZCEx3nTvE1bEE8qALod4EdGZs7oNMcP1fpUVYU7NXub2HhnRBfmsXhbR4geSaduYCw",
  "key1": "4ZqT1TruVxqnRTX3Thi89nxxq2DME2KTXs9r86LqZ6LvUNJjqst6FccsMpnFeZnTno5CMuG2szgqrA1Epgg9PeG1",
  "key2": "5qLYPTUY2RarHZ6rE8VNfQFjmYxWaF5QNDL2JJidjVcR8UdfHnRWwf65wcDBFEKQ7QWfut5JCyzRaird72mh13gm",
  "key3": "3CqtFPLRJ6NPJbb58LT9CoEqFmBod57f7aQsT1MsM9c5eNRjBsn5w5oPacZdBfdk77TYN5bEsSX6m3dbWD8UJDz2",
  "key4": "2GxpuFW9ktSSW8A7ePtX9aRuHj6xTCZ6TnFRTa9vEbNwwQsVhTDWtRRoFFebtFrba4C9TSt6nku3r2j2eaRVDdXS",
  "key5": "41D57aGKEEQYtvPUKyQEy8B7ad1qK4gHWcLS3UPtwaiayVBKZ4ZLa7NsadXESLA9NvCVGBpELJFJ7ycuEezuuS7e",
  "key6": "4ApkPuXCDPFS1fKmR7LdVs1GzUTX5Mq3ApFQTrhqNkze2TH4c6YgUqCKGJPv18VwNE7fXp39FWmSc4qZ8ufZn9mf",
  "key7": "344v64Re6XTVHZHdvDP8xhucjhp3mhNmZ6vPE7QSbmFebmpgRCy9D9jrB2AGwpyu9ZxZUbJErXzLMMCdvmREaV7s",
  "key8": "4MuQk1P9jxAyUtpoCTbcXwCJVoRUsTq1mdgbmcdoU22pVZyExsY5hoy7gRz5MQNStAE5KB6QW1NTPsXDWeLCUAvV",
  "key9": "4wg2fn3XrQiFYqc1tjtjp2i83kCTaHP88Xk4PV5JNd3y793oJjqzoWQW4KFAvHLepGDRmJNW9vhd6DeKHEtt7k48",
  "key10": "4gdKpzy2mxAC1VrXWPvpaaG4GScu4yfZtetE8hFG8omqyBGSMd9y5xjndj9UgV4mH4ioAFBsZ8LM35rneMuQkAQX",
  "key11": "287eyUWZ8mY1dRcRXruDe4FaqprtRxkFSCsbZGJQtAiqvEsivLzj7XGyYJdZSj4mDnkKV1X4xoAZRHu1Aq1v6wB9",
  "key12": "zUg4Cv6fhGmVkFZDdtrXaPEFui5M1a3UEFPLzpjmgWqBq7tee5yqAjPPzFC9rpuEv33m66eXouW4uRxTMcK5fnE",
  "key13": "4yPX1UZC3WvfPkzu8ZoRafRvqADQYwRcZ6weQ8VNCRjZSwfpERsbvWm8FQF31af7Mt7cA3YUbQwscwk2SLckU7Zk",
  "key14": "4phCfG5LkgtMGGNbSMzGXtMReH4D1AGADdBT4LVJjdu36tdRoo9TudNXMx1hEshRPyqjSQSKKQ5aSeUaxLJ8e8S5",
  "key15": "475cMZ8fMRCXYaAj8H9UM1J6vq5T89rT33YYugxhK6Ch7DvEaJUEKzZRGHyebFPspArCFrmmGk4qY3gKwKsxEUQC",
  "key16": "3TYtpo9AkU5GzMH5gXhDQyJm8uUYz8Gy2QTqJbVv2E2XVzkJRn23hAqu9Xjxo4pcwqGuAScp6Z5HLZiciZovVwRY",
  "key17": "3Ev7LJ1Gb4vH4RNqVL5EvU3SK2VxtN2ze5Tmx7KswKUzUWaFucLN4fwqXTHn4YZ946EjGzfQx47bhnFavbcEqFfc",
  "key18": "36YymHSvRKoDyJkzJbDu91s11Q8vEYxxJtxMR9MV7wHCtFYY37vN316pzmktrtEKvKW2CxaJUUtA4BLWKnDp3m1T",
  "key19": "28NEpu4KNWBMWoxih9anob7F8x9XbGd96SeXUgsduo1RyituZY7fUB3TrsukC6EitopTA56ZouV1KSv5A1Xi29Qu",
  "key20": "2DF6zu5b9XUpjYUH78inXpHvfiS6mJWsP57iN3CRPMrkFUEpaqcuW8UcbSRPy7xakx39jFqftVURe1uK7tELXYQ6",
  "key21": "5fDyMPdNAKRZ82xXBS6q3bxMXZU9FFeeRA5wcyggFfLfHP33pZeNBKtyrPCiN7ug16qgc9LUFqQRmdEzUzx1cgYL",
  "key22": "2DhMxVnR8F149jxwbG8BviSf687XVf3Pb7g9GjUdkNhEV1qF33x6YGRpYC9PtJH4th4yJU5hkC7bntEVFfyFdLZ9",
  "key23": "hJdEDmDavV4ihNGvV1SUeG9ubKEedPMQZq1yLu3rH59o1QwWSCeF9is5hAYKXF9HViujRmVi7rgtgNFEjJGiKS4",
  "key24": "27i9Doxoxn6Qhk8WDTQ5f2FK6dcLHohh1BioKK1sou7NNYAsCDHSBBG3BjwKJCufdeyk8vakYiFuE56sRvYfQy4Y",
  "key25": "Qpof6prn1hGXh2Y1oHfAh9q2rQfXHRciKRyz7HNp3AykfkMxot1M4PGh2GUrFYYErt2wBgwVYvxJ4LWSmXHgW8E",
  "key26": "5foE3J4oAgzJCQ9qDZuz8tUrUg8j3QcFzjV6pczrtZxUwyjccKJiCoAUaW5nWs4JNFKj9tfT7CP6bgqgXPwsKPtG",
  "key27": "3gxAQd5M2DboaBh3Ar9UWwork6JRk1ddZAa695ntTLgJhchRTGrNjmkuTk27bWpPnWtPW8G67j5AtH9jGAHxxsMa",
  "key28": "3rfTm2YCsxpzsRL5UKYn5w6FCNvTcqo1kPVDPqndWhQh61tEF4Tq6aY9w42j3h1mFvK5XTGp1Lx9TjSM9LiHpTvp",
  "key29": "4nSFzN9HoGGTyvqySdLzdXFKx7vfCwnb6jL525uLTyx52VgcXDDLTGixqjXB7cpwTccvrrNMeBok8PCKJRFDGxS3",
  "key30": "3aiA5cCQqRSTWWRT5Cyv6syqCevx8wYs8YawfEYZZJzRHpUEDWcqabpZi6tZ124bNFyuvgzNUUbcMrcafqNVT72J",
  "key31": "4pVeesfWLwAeZsuBBnHnh2HiE2Qd941rUnLPiBuWSxLUw85xjTZTtuBzM7avwtjzhWGAM71Fwk7etA28szp4fBir",
  "key32": "2HDQ1wfMPQqSGp4Y8G1EDLo94CFDJr1LtqAC6T56zpa2x2oXkyrunjwWaNscYfnnpfPwkoCokcRAPnE7R1zHWyUZ",
  "key33": "5T5HuwgebPJB8i4yTqWnJDUsjdga2ceCtk6YL1y37imHZ2kfBwNSfhvFE1hUjvt8FMDFmVUzqTmThRsn2KDudq6D",
  "key34": "4wiKhqRFysgQx6JuEx4ZdEkXDEp7uVZMxKjtqM6brsqXABwaWXmLAbtSKUMi4Pv74SxjVNgx4JnSCR1ZxnQmRpFe",
  "key35": "SwdWXjK8eqWCLWAG84JqXwanQkqoyRsbsavufjvyFpttUUBGCzJsKFsx8rnZiJgCZzZ3T21dCTqnStgp5hAGCEo",
  "key36": "4dWJ9v5Xkqp7JZQQEwjy5HuEUELJoY2qyGMcdDrBmAxrkdCK2rb5DrzC3PXiRDYuCFkKRJ5KhwLUt9j3P4P2pKBB",
  "key37": "4FeJzD5aC9Xrfu3tRQ1bUaUBmCrXySFz9aPe9fi1UV6w5PobrKsJ91nHzNTmGusU7TJ4SDsTNFn35CAFtQVgxDvu",
  "key38": "2VUuLJfG58Di7YDn88VgX3aMbkRgHEqQnwjHmnHMrzeBizZLFV5fM1hhnDvJRQryeB5b1Jssevh9KiavPNkFkDNh",
  "key39": "4NgPMYs29TSHC45z5X4p9juVAjmDAjaVpCM15ubWV4sgUxoHGTzN4nvPZc131q7iBue95tahL93YbjxdHMZkcHXt",
  "key40": "2Yqy1cjMpFtbtuC6ZNtnvtxfXNVZdyu2s2z3xJU4ssFKvVypP8LUtTsKJHj8KSHjits1Fp8DJLryuZLPxLhWUMkr",
  "key41": "4hAGRe1U4qcG8LRm1YS8agGEVJYS3Vii7wqZcAJ87CXfAgURcXVMv3H43twT9xMqLxTBCC98TN2RLRmza4BECtpx",
  "key42": "5H1XS6UBELQjFmzrpgxai23MHQjgrhwvwmzd66tnZnsTMdQQK9oXVgKZixvyPgUDtGyYAvaC3PUXFnaE2xkJMqDd",
  "key43": "2ZgZmzRXe7eg3jvKrbNSiJEasfE7b3zWNcyLw1i8wXeVRdP3XbZBapwpvjqLqDn1paZZyGPL36ZPtzpk56wagCB9",
  "key44": "59F8fpv1MxMDQ2wRj269UbMNfSDYbtpUfwMKhD2Gp2CBWsFv2dhEgzZxEn3jLcj2CAcVju1x3ynLFzvfKSWBt1MJ"
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
