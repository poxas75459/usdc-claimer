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
    "CZYvUtWqUai4K6m7uQkWAmrizSuxf4537MdUB1QaZcCCzhxcXGmttcHs99pc7sL1Vm5RZedCEwtnBrjE82Lr4gw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Y7sY8Ln27fUp2UbLMgiBqYMxWEMAMi3T824HkUuqSQUQsCymsDjWdvrDQ9itXmsedHfRBuE4AQEZe6FfWmMzyi7",
  "key1": "4DMvhaNXkxTd2h6idAuBBifCAf5pKxj2QJeKGjfcdXWWrPCiD4ym3BSkfAxL8AvkYUJGmCdVAgmCfFaNDaBqQUkA",
  "key2": "31VxJmg36TyoYjE4rJjSEQvXAdxCEwEbteqn11fKoRPCd4yvbyAyFac5GyXydFnMtDMHYB7fFUnCLvhQFwZo5Vzo",
  "key3": "4g1RPLGQ2Ar8VtdVqUYDEXFXzSSoWknWjdKTXU9nBSwpyijj9mug8gJYao1XRjdq3piCkGkbywpwmQYmeWuERpHH",
  "key4": "52fTMAKkzHdxyU5uGLZ8X2Uzp4FVcif4UdwZjKX7wSPnP4KmWNoewxqsAgKoEvEt6XWJG3XcDYuLnui4kFHcniiE",
  "key5": "2LLnNaWQiHXG3MjZV4u2G3u4agWiC1xoaNMQ9crZy3xtZe2iATGiaMqn6hroJDix3V9MmWPnuiSBpFCG4yRJJiBu",
  "key6": "4eGSMVWUEk3nRrfHAWs4kKVp6P8rHxU7iy6UewVT2BZeT5PMgngUNecrJbfS6aSo5sACoqHXnK5zPEQ3bwLiUWJ2",
  "key7": "zt97iwLVxX8dBm2gGS28MpaLxsgZ86ViqR1i7jDJ8K7LLYjznv9KRUUVnun3vo7QqX4ftEvSgLDBTZ3ZGiSY14z",
  "key8": "46rz884EdUiFHqTBWhF2SFkT1NXaQWXNA3yxzPwUmAGMS9Cy14gHqHCWfdHto5jc25WxoMomUwUxMdcikbeED1Y1",
  "key9": "dLmLPiLNBJnuxVEWMAK64v1kvnY9JVF9emxK3EtyAWWvXg2DiM4GNZWUznwhizWcPufhm3HePmdjfHfB14hXRcP",
  "key10": "4UqrnrK59Jvni2F1UrpFMeq4Pg9MrbJdhKjscvxdbhUfK6yjuEe7EXpjgSHdwXVdQcxrQZkc42URfVrPhD5Phb6k",
  "key11": "wLRKTUzWXHyUfXV7nomb7649bDceATKbuhs128XiRCwZrxSn8DhF35qxKmXWsXVzLkqy8CZ358gfccM4LGiC69Y",
  "key12": "Rt8o8L4tPrce3MgX3FoVFY8dMKHcjXgfekWAMLL79C1gvbBeUDZ3B7Q5eA1ykmYkV4jDGiKAPkEJWy7Q4fTYCLh",
  "key13": "4fn1BmDPpNCGzBG68oSogZnhiRh1s9Q1Gq4ezm34vCJBYqA731NsC8sYKUjv8UpEXMBd5vLeQmLfAnyd9e7Gtapp",
  "key14": "xWcAhC5ZK6hnWGMNNWzjPz3jtK9YmjJPtgt7ycU71hRK55aJPNHspnwFhGoqKpb7AqBNdrN8XR1ZrMxGVQ5Dbdz",
  "key15": "9sFKADQq4eaLHFnr91n6hhoDkK3uxmYp6wTsrCimm5sHmDEdQHyTxfuE5Wiuvf5SHnBcFYpYhVxi7bJicBQZMY7",
  "key16": "uXsgzWxJehV6qsPXVUdS9te3aKjU4u9dog1iopC7TvNhr5KHfJYw366SC35vEr3NHWN6n3KQ2DeAUiCD7omsdWE",
  "key17": "kH6kyKU5ZLZsxKqBPkgUztEdNSVVwTwVaoFc6brfDGTs1FRrdfnQSPBLk1t95qv3nzT6A5BXxJnP8955QXjSe8x",
  "key18": "51kcz1ZmXWxvqFjNwPu9KoTipU2vzXSWpXo3y81RFy1dyYRJrsDMLahy7djHqNDANLoMnC2ZrH1WkZieu5GmE2uZ",
  "key19": "4XCAoGNyQeyYTm6dGAY2uyJNbDpTEL9DuKdVWf2oNbrPhHnC1LxwD1so6vsG9xZZA8hGzCXVxUdAM2cdEs4Q9vLd",
  "key20": "4XUJFa9US26i31MrGsV79bRaMy91EpXSQSHSXM6GgCYYfLD4ZUqXrsgHCxJSNhSuieV8Xbebabtu8mTpRyboDgda",
  "key21": "4PEgPayfsfD47Ktx8aQ7msp2LigtJ9j2zfjxzMLDMJvPmjKbNarFjP6S9deEKw14f1ZDrzTxmKsSykJqpZTUS8Dj",
  "key22": "5934mqaJb5qki7MsfvjAw6PuKPbrYrbHGxt7ZLcWaEqALzAoffcrjqCB38SNgTM8uJb5fnsTrJg6oJU37vepdSrC",
  "key23": "4LSo5V2Wqo8QxfK7KB78sdeMpp8ZFhzi5bmxi4HRi93A4ZKfpceeTREzzfvKcdquWUcg65XxCpxns4rS3EgXjE6o",
  "key24": "5zNVLzCGT6fuAjeFj4t4iPwhneEhiFS4weAJ1REnSL78MajcBZYKuvL5H5dV3EgQDdg2HtDEgj78Wu24DDEvc5WN",
  "key25": "tpDYStspch94RH9bbiqCJiRkyeio6PPLyU8cFAb7TXo6LmhfFAQbMhEWL5UFZXykMFMmjt3iXtuBxx5m2NmBtL7",
  "key26": "5YCrN8YxF9fz4U37q1Zbcij3h4EzxjvPzW97MbYHpWLoNAdXgW26ZkWsoVpm7PECdB8rNLMKUGcNuyooMMfZBUnv",
  "key27": "3T4RaYw2DRguWaZupA4EsxAUewSZRaLMxBQ43cdJtfXFgYk1NUy6LCPWh1nY6ZodKENaWnWtFWapmZTVFEbYdrHm",
  "key28": "3jteXoFxKvNwV7eZH4YAJifwp6oyiGHft9DWCnJX6wxhaujVrSW6NMu4nJp1kSTGvphhGwcGXbBdEyGrQYzLqQAN",
  "key29": "4mb7uFJHpYxCjw6vEn7xTRaVUU8wyyyyUo3GY6JfMZLdipTrLFfHK1TsfCVzshdcVfUBGCoTtKQQRvyQ9aBBsSEM",
  "key30": "3AVZaDsZTgFFdKDBrunYRESMqeX1vpVDevprACrJtWWvjzeCtPxFLkFbd6HvEYqvXwfbJqwypMQYVCWZ9HQuNXvz",
  "key31": "2mt8ejYQskzPEZsUkenvicgXptMFgyC1Xgg3AsCVTXH6uFj9ZxKrTX2wrvue2ytrYU9Ep2ZQ37TAaKy9q1F2rGhV",
  "key32": "4jXUm9q7xE45QbczWaXj8sQbsSMiHi5CMyCcDV5zAW6GDH6hoQgohXiQUMHG3HJCUuk1A5Kwn9YXAS25Zg7PVeG6",
  "key33": "3zXygf1HsR6buoFx2t6bw5LEpwTtEyvYoCtWgpNiHVvWnw3gMXhfJP3ZSzGMN3YMkU1mqkFMpYziaNsLPa1DHCsr",
  "key34": "3A375VX8Z4FGsmLWr53FbnFKWM76BmMEVSHX9piTJKSZrpqQG1mQZDHuPqpKuHwwLw3vdnrEiybCJt1xYe8QNAdR",
  "key35": "5p7KEhd2sM4oS8VAUc8qhhxwZmjHN4cKsFr9aYXEe2g2ZsSPVoW8UAP8B9KSjhoHf1RmDKGAd8N5a4cq9K3A9wdr",
  "key36": "2hBqyDaGvpEZFGQa3AgchcG4PADoYcts3aRHybPYJLBxhv2q9Rw6oSo4pAU1bguTKwvvFmDtjzGRFAro6cYNPW8v",
  "key37": "5Y3w7rfQg4MQBAf1fvLBpbskwWCTGnxiNFandh7Uus9Uq3QLGrwUyA7b53bqSaNAKHHeBCopHuE895TmAA4oPjed",
  "key38": "4nkc4vXosRHHox3MgddchSZXKz6rcwZAoRL7UTGtsjKf7dc9m7Pihr8KUgLSnYVD16UB1cwMHg5q6gikw9595uz"
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
