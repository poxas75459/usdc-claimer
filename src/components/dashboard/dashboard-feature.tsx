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
    "41RaBY8yFRWVAiFzwATx7nLQgP4x5BZUd8K5g3Wzgh1GXJaVGke54fzjCQo6VvMFwdHpGQrSrw9HDBqHnMeagXhG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "i5Wu3ZMV3ZUVrjTccywSsTG1ib4tgqsY61jfa9U5sGWKQa1jKZ6reyEsHySmQ9e9VtgXHALneJRPySN61ftGME8",
  "key1": "2Gi1dzfkxqgnfsAi8WHJnQAZ22WjxHbzXrJpdkSLBRgfRewaoedQfKAATL7ZiFoVg26jJHrwbGD3wzx3EuEjdwr4",
  "key2": "5uCmaywYbK7iJdfvzLyiNCbVw88cicQmA3BU5CvaR6VNtCgTcGtPzCSXjgFNGQFdXb7iQXBnNR5TKQ54nVaWoipd",
  "key3": "2N2cXVUb5b7ZiBi3rt5n7vAVJgcEJ5XQAcUM2TBWm6UtkvzrbsRgteUhr7RZMCsEmKhfg8uL6mC2ofnbqwCYGH3R",
  "key4": "3mBNzTZy7iByb2Yb7kbz8GUmbHkTtWMktB1z1ARwPyXkYVJXK4qEWvnixt9YVrL16mk36xNmiHoeYuFNhyivzRrs",
  "key5": "3sQunAUWs4ktnU9XiWwKYu8P5W9p48aB3sVQ3n5zQQzcnTavh3jN7uWXmwvea4AFhUQ7xRDUUq62CP77PgxDwooQ",
  "key6": "3mLJrn6EqpUapFeYom6ZLzU5D7qwALyF3agNaCqT6h2XQyCxXnjJnzXPm5SNgB7kqM6iv4JTn5E5ECMtX8aK6tYM",
  "key7": "GFdTtJQc2sUX1sUR7ZaVhS8JcuMhxMtpeQpdmvGSBhyM6pPokuPtXY7aspsgdrmvZSHNjPt2JYLqyFGcstMTP89",
  "key8": "jdHzoPKkmXrD4y4Mk6J5ewf66E9HwdMXvKRJJAcyL9RmpJmNfECZjgZPLyxyHqg4s2jTBxDYqsCn5HDqA8iHFx7",
  "key9": "2yuHh3C8Kn8tJuvmd66jf7hnDLpH6yVjVdULXhFouTmuRntsZuiAoHWJs1LMSgp5wHV8nThkxPVHKnF5QCjHsXoh",
  "key10": "2AaLFLN26A6yECJ5juq66xCSLuGMJggR3pw3nvsQSHazLV2qHRBL7brW6J9LpAtCftkCCNDwm8YPxaJssr18LdBY",
  "key11": "DzqZxaf7VVNB2kXDvuCHAPnRjziBukpBNsD9ex1SJbY7c34BxPtq6cmdDntR5uBG5J8j6e58muuJbSVmqpXLDYK",
  "key12": "2yAJ5sMhMeqWJhKG6K6rmbGpYg1cyujPyWJE8t6ctySRh7fmRQRW7NkigUd83h3fELpy2n5sGbcj72ThVrEJgLFG",
  "key13": "4iEqeR34gpaKENkJxQvo33mezTVG4RBdLNxYMQbojvTBvgtcXFAH2TjR5BNzwfrBsSnJNhnKRCyZwZRC1kQsBVpr",
  "key14": "37m5hHrjizwZqVhTp4ZR6Y7TCzrbDH9FRrwEfE7X2oi2HAy3iMtAZdp9q1cNHgYycBhbafaaXFH65rAm3qFyoqDL",
  "key15": "5u6ZttfCWG1rLYVfnCcPDheZsQFJjbsbp8u1yPksJ8W8xyZMWvxLFBB21d7ifAWNd94bALKXBf1FRAGqfFYxQT5q",
  "key16": "yScqH6bzkE9bjhBuZ6dKpPWfFogWaXn6kRFD33rK4u9LQEEKgaPGHGhZrVX76CE3s9Tr5uGKp74WnW92he68rSx",
  "key17": "5z5xv9wATT5aPz4ULqQ1Y6N6vdCvu4hYyEWdnD6f35XVhHSvfUV7usnfq8yEg6pWGawwPk2VKPu6i8r3ThRwoUsM",
  "key18": "3wYnHvf8RdGkjwgaq2s6CGWv5tUdg3Mzhp7snGNbuaHzb4dvTtZWxAPUJjcdQua9fE8Yur56hGCrL1jgmBG8axFL",
  "key19": "3wotdcEbcbWbKbiBpRxXcr7kNeuaSSBcUHK7SyKTgmhUftrnWbZVkq8Mde7NgQ2QsVrqCUBPbBBhANmwa4Kvjx9L",
  "key20": "1qsUgzNv59fdFwvTQ6onzDTHPNtZetHXf4k5YrgzxHX4g8EmUKPC3qFPiqGCLKULBevTquHu9FVPTp8t1K6ABaQ",
  "key21": "2WSUrhSmxoxVnHtF68v5g42fCuwpW1GAup8W3MQ1yVWddEy2z49KHcWzgxdpqkm3Lu3ccFYcdARtZXDAXeQiP3DD",
  "key22": "5CufYdM9XvJt4mQrCEvUEfvubUdboxf4GgqJBgniao35Dypt5H7Bw8LTeqSa7j6dMcgQ1LJkuo9B6pd6MCnb7uMi",
  "key23": "2jiLuLsichvFLyNgceKtwdQmBfMoNWrT7N9nLnq8RAfG2VdoNZfuY39vTYAWuY38WtisZaB6LLnSgP2m8yN8NAif",
  "key24": "YaJQEHAQnkkGdF7Qu2cRMZJZ7b6KxzWa99ifeHBw4X6DqdisryiWFjpioknYLvJW1vaE6XX48cWWdRxe8f47ifX",
  "key25": "4dBhnxeSyR9dnQdnNuvsT3YqgUf6sPvA8WaBTyVdiZY4aArkVtapSo1d7qR6oWs22hL1KJtSGg9U4isPcrHpHM2w",
  "key26": "bpGzUPGcfy9ZFa6xVQsGa5WbN81ETzeuAiX8UQawNchhLnpda1bif2DrfWtewXxCvwk4im1g7deE3zs8dFqJuTr",
  "key27": "4CmX3sr4ypquXigCnvjSio1qqVJMaxzU352LYdZ2vuZu8xteJisG59VnJPxgX83qCeV9Y4hiogoMGw9NzAMBJHmP",
  "key28": "5LtEwhEmxNJ2QwMkXWcp5AXxk6VTtB7TLWMTsafmPcNpY7tBejim7wWhG18QiGhd2LXL2R1c4zYYXhrNBiZxuoyj",
  "key29": "ML5djxvshe6451NhqMHbqHCyQgLA47m2UFYk9EotcNEMvsQhUEFbMTqG5J6ztbkvaR8io4khnL2aSMeYjiMPaDa",
  "key30": "44VeBEVh4d2iyskh9LK4qKbxdnfvpxvJhVVx2CR9mNv1VzwZ7su7pzbhKsWWWh2PvSWHwD8LtMWBkRLb4CyN1BUk",
  "key31": "3QBVAMzzEWvRkN3V6GoVG7cVjVrKeQDGkNy2nawBgCSqdJFsqNNkuZ9zfL6mUdKmF4JLjVGquaV4rBAkVJ71RP7G",
  "key32": "5dBEcjsPdKNuqjhovLfDYuDoDx6Kr1HevWqxpNcthXP6NUswBNyaAGBr1wFwVEgHNo3oLgcQq9PCxfzWsTwvwSgV",
  "key33": "2WbLa5HR5rLwAvFmgCiLS9PKMhcCY3RFLvnw3mLsBHFppj4qSoy1dKM595Ako2ySpzZQ6pnwB6vWkJcbD6jftaDd",
  "key34": "5ZSBED19DRKME3DcwkPiG8fKjsg4rfyXYgtf3Rh2j1X9tJzszzTSWMBqgswDYWEmffPX1F7sJKKecZ681S65fbJt",
  "key35": "4UcXKnZwSoXBMU25jyG9T9zAf125A7RqnCFYGuhdpPAFRbec6vB5TpF4bVZBFkYrDqPa999t4aLWUi7wCNsYUA55",
  "key36": "58HrCeX22s22nYi8o9RfdJ3iebnuNy7HeDpFtPBprxcjgbN5LqSJgXYMXXihoBFvyoKjbX566rg5uH2cMAVZ1yZ5",
  "key37": "3LWRaeZ9LeDDpcMf37f9RRPLSquZ9unGh8SfcrDzbNNu164E31nTEL1o9BM9G2Fhm2ATbHa2Dgok7qRYbQm3TuYt",
  "key38": "3hRdqAY1BQ7eHtnnSSgp2eUYugi62Ns2BpKqyjR3zvRPF39u5LG9jugb4j43ZZszTNjmnAYkpn8tGZCVfqyWtvq7",
  "key39": "5czBifsutpjNC7BGxgzDUWNaLxs9CqUuCsiJs8SHuNTRhNJDiedHELZPwS4cH8BzDoCvfbQRujXCEv2DiKEBucW2",
  "key40": "2nqesCya2cj3ufpoLamG7tkjd5mFJwDy1TRi6FUef2ejZKxgv8C61PBGar6kPGtZzrhQDFkFW6stwoAUjVTmgUAD",
  "key41": "41Rm5RnbjRq5ng9PkhQHqV12aJSdrkw9Tu3e3bgbUhRxQftTLnoZdtE4wXVEo49dbUstiEqQr8AGbpAgjDBQVrqj",
  "key42": "4fxThtWhktNKSsEytgnHeZK2GJsbzcd32dz3MCnkRA2fuJxcy6T4pdc3uH4cWk9MrKUyaqxuYZV4K2m8fkAigRgQ"
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
