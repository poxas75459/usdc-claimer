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
    "eLg7A6cuxqnUGZbognTTW6D5RQZQnxzZVfKfQd5JgVbPUGE7DN3skf3xa8v7vfLnXWNpNAQP3VYaP4Qq3ctFNRj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "EXseP8Z7PCPAGfM9oKGjrDesWee4MPz5D4iwcDubiN1PiAKMU9thuL7M9SNnYQHjszb6HzQ6bRw8pd6JHkhtKbw",
  "key1": "4V1XeX1yL8aMfZZNF5vn9ntnjiak1SzwyUCC5UuX9mWDjArCxWyC4kx5dFHGrRPrbBUJwuDxhEf7hcXPdJMM3r56",
  "key2": "4ou2APYUAzBKaTy6MQ85bmCSYyzVLQ2AwRmpvk19rETmVwG8EqXgmD4UWytNKVgcHxsU9K5Eq9g1ybYUpyGFSevK",
  "key3": "2BLUSEtPhB2GGniwA4X5HAYyobNKcWqxEQnUuWmqzz3VY2CXwXeAzJJFuv9d6Jvh11vXQZScYxoHQCkcoBQJitFj",
  "key4": "5rEkKUa47qCg7SS6sJ4babBcxTcPvmdM1qgauLvLYxjzmok1NmY9tmpNLA6CXbxEWDPaNiprRbcXsfxNAXiL6cok",
  "key5": "5Ztc3GmzaN52jP3X3ZTkih2cQRdhgPsB1VPCtVfhGTDjqwu5kRmwtmXBtdKT5edBmGbbzDJkNTyp95ZvE2KqFojj",
  "key6": "53WJoaCY6MDTgEqNH5hLvUubBmGBo5um1vihCMV83Z72Km3f1hgVeZyTrHd9xNUN2L9myh3c8tddzjk8u6tnH85w",
  "key7": "4wHzBzCzopnSvudjcg1ZKA2VwLodDyvrFgMQGwoQKyNGgyVPwvjfBaQvvPcwXjXsDJ2VRTJe6DDeRkfqaBUcYXyn",
  "key8": "5wjxR6wNuZ62HLVs3RyYfk1YviPeiMYHuDHFGoxhDyRFxNKCuQX32Cb9iSqq5wTqxQHRJoNBSERNWTd6EGtnA9f9",
  "key9": "4NPPFriHoZpiSq82pGJPZf5Nd7iHvEft9DEW5rsG7XRNJXaZ3EQ2PcWv2gHFuQtAcG4SzgQ56ufVYmV1qcUMNaPo",
  "key10": "LbYteSjjKuAdKpManu8H7peNsfrcs387JicDjB2HsP59CmQvipWPBpA5W3RTGw8Ekdrt3ZLr55MCq8QP2TLk7pf",
  "key11": "4w9FLbJKsJNKurRc6vcbTMj5DNem1dBS3Zx7brzftDMcTFCqR8uPC6nUxs4njZK1TVh6i4DcjEerpFL1wLUbAhrJ",
  "key12": "9KtsmZJC3YL98krHcL9WgmMEVYArUvdcLShP7JUmho8cxfn3hr2osdDrF6fXmzMKksdNSiM4SwHvfoMd8cE7Uxm",
  "key13": "i76DAUcXH9neoP44VAzFoidyDF6vyYi3mCwE6qLwBiQ44oGKFq4Asu3YHPpGwKRG6QVLV4F3ULU5jEQixZR7rWK",
  "key14": "5RkSpPEhXTz5fGfjqdKn8tGjzrrkYAXqpvUQuMjCKWysuGZHBVL2NMnnKN96aUPbRYpQQUowioZdX5CJCbnnn7PY",
  "key15": "4KcvRCZB2ANFRpT7iBG93KvoLJDtoKHnCaQAMzmaWj4MBzemRkzHqsMo3mxjwF1TPJekR4Bv26rso9Pjzt9iwMfa",
  "key16": "WBpauHjQ2oUEvy2Byrb9GzgEs3Wp3uptQZWNEUXH43jRxC4YTmdqhTF85npQE5b9AWj7xkeNK6ygvzkRQxPoU5B",
  "key17": "4EDi81ANyxgFPn5BTyKq19Gyy6CcevDPsj1TZ21nBEkRPY4Ay1zfVFZXsf6TgnDcNRzYMJvvDH21gi31d2VUX4dd",
  "key18": "3JCm8tocuPAZQtazKxJ3TgqeWthDi3cZm6SwcWJhPfT2o1q14b7ZRZaDxXTpWzjPZFsrH1xJ93bS7mZNTK3cgycX",
  "key19": "38QB6D4CuPbf8ScVqBo16FjcyDiF7pnfb9z3NXABA8FWfLdKxKYEHSNVDt8uahPLM2xHmwo4hnQgetJqfVsvAV9B",
  "key20": "4YoCp3EMmzkfZvZQhmqmGrz4pSDifncbCCYogrU6N7HtZhuMn5S6gePjgoKXAAYppooPW7abwYngo26hK3aBJg8J",
  "key21": "2UFyXSfhEu71DsQtQre4EEhJ6ZGQR4pRgj69VQScN67dj1XBDqAAEH5zbYuMMYBr8sVgNDqJc7bWnmcbRUvKWeDV",
  "key22": "62gSTRdRKbQ3YgZAjvLoDeSmzgEF4EjnxQaMx4SViGZoWE5k7ySZFJVFvWDpFkkDHh4yCo5hSoJ9FKYqcFw6mYG2",
  "key23": "3tYRyQwqExcvear5xByJZbRi3khLGGDpBJFBDgDXsWPC1mih2GT4Z4Ca9Lz1mpFuB1LXvPey8FB7kwhPBp5hTUSa",
  "key24": "3K1pH5jMHW55Ngp1zjTJYNkbCxbaLmLj1FvFuZVsUjs636gZLSVKTXQvGC86dpkSiei7ZpVC595YDymXc2oa1E1X",
  "key25": "2xFcnTAyewjFBuTMhQMXNSMm4Xj6yGgoyCe7e7JASiaAtp5KWny2yhu8eVpLDgAGScia1jchfV1Aos88s8Uyd6fs",
  "key26": "5Rz5a5hHvnpfj2HaFpePtwa17vUWFTxvXX9wfTMPj1H6r2GRsbNT27UWZLWf1Tgru7u3kyi15k1HsjtLX7RQzo5Y",
  "key27": "3NJx4B2RGPLZkZLs6K689rStdiYXePf4H44vcs8vJg4NNHTTZE7KxjXpUCW9bSZ2Cpzj5drvjQeSN3djjrMgdKAN",
  "key28": "3xob87aJRjkWaXyu39iYTMpGsv7uuRCPCyeRaBD5uZPvZ8LxnxiLGB5qbh99i7CL2GHP5r7YprdKspTzJ4qAGhrU",
  "key29": "MKnVAZD1QReJECiKYLxpNpnZERp6ekxYhz254rVBv9B1VvFpvUFEZwCLavuUMB44m4Gc9xj4Lagh4CgHxdPFZBk",
  "key30": "Xc7gFYicVi7CC26UkxS49vKbjSjkbZTFoGHQRGkMnV3nqVxFp4UNDQEUTp6s1Lvn8RtkTBbdKHFA9djyi7Zfohi",
  "key31": "4LP8GBzZ5asPjM6ivmxNCf8uYtNbk1X9viCs2pBw9moC1h1raodtnWVvZ3i6mniZe38k3g7crD4Lwu4gBEVAhhJg",
  "key32": "4XfKJa6fgG3KbcfRtT2HvZjF6DiiyVERA7pp8W1srxUSP7rFQ1baj5evFxJneh8cF1z4E9ehiUg1oHE6quDdRN32",
  "key33": "3oRrHEyR365uxqwG5t8vVzbSqcxUkTVGFcm7xMH1aongPVeqHN7fk1DMeEZMgHMGqpS1KJXh48XS7aGZHU8gJHH2",
  "key34": "Zy9XtL7wpYeYtjbQiTWik5pa3XjmpUvPJQgLZ3gbAYBeHXmkDXeoNSv9SGoj5t4gsD5zjVA5hvV6nconoYQVofY",
  "key35": "STFeW1Ta69rYrtJxJNsAERomQvAdFR9ari1wTJqpBis1UwufUKVoEQW6Lahf3x8c58hzHxcsCSnd6116tebct6H",
  "key36": "2KbkekBt3ynicGXodM2yhUK7o4ngFcLXAY4pYMA8SBfz3DbxWVjPXHnZxTYdAPQbk5f3yNBcahMKXPWL9t6YFz5L",
  "key37": "5HiuXZtTHxdSzG7rBPoQSUVMujg9u776RwiJSiCCPGv17QACcHxRE5bcFRfADXEpbRGTWXHCwV3BztMQatqrcbmv",
  "key38": "JefGBNmyPaLLyb9c19rwcGU4HtNP6hVxX9J4udyMeorL75Cye7LtkqFysmj6oiNepmEaoM6zSGRvGcv3p6XRXux",
  "key39": "2JpvDVqVm7TpUe8ceBnkRrGmAzNHuzEbdzNMydKVuuk4HCKp9DnnMkXHxYfdBkqP6HvZs7t13MhK8r228n45GMPj",
  "key40": "RQLMobfDzkVNx3XDqhfu8wTMP6GBV6BguuC8ZSbb6wM1RDetw5BLAi3Y35LKCyRn1PDkLVpQpFsuQZUmNfetKYE",
  "key41": "3xsWo9CMhrS8VjB4pAf4FXAeBRy9FGSnvwcjcxixw8r5W9UPPQsoyjZtEF3qEJZ1hBXFjQCi1t4mKHYqh2aUinQZ",
  "key42": "ie5AspMSwin76RjXWaBs122iESC4s1ty41dfaNNC6ve8rHVz3oVKyQB9coCmR8vWYTbjUW6ZXTfhcdFePqAiKQo"
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
