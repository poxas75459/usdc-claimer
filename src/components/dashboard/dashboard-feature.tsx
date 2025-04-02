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
    "4V13WvMrvwmGRtLphjuohQturYdRHnRYW4xLrw1vHvJP2eRTbWxEEPFE6sgxphcZHEPK3mDHHiEAWh6z8xvDLAWh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4PGYVpWaPw2YmwXMj3pinQ9wkVK98pCnKBGL8Pfw2YgahuuBm7VZX6sKx2mzDhVWiysYUDbaTvTjMwSQdwsz5m4M",
  "key1": "WwLbA3kQEnG72vLdRVsnam7QGKDXERBrotHDvCJBRkps6YhYJeWYztQgVEQaARpzNw8Qaqf3MvnxhbA7S2yKrxE",
  "key2": "63Kpaxgew62JhCXK8xeojMTftiLfoNYHStAo3vWRgd6QG2DdZwptidc8dfyXyrXiKsALXorEnF5KV2VQ6BXWWLSS",
  "key3": "SXWRn1b1YSiDvWjWxubzP4LRHtYsi2m3cEKrvqCfaiwG1E8T3d8GhEci3EmdZ5MU3Rfg4Vyu5wfjypMMDpVEQ3t",
  "key4": "5cQyaNTc643dDhsKGw2sjMRLYmmDhcGMhmEUmRaiFMujhy3bJRU93b8wxdBmkxN3ZyEJWvCUtLJk1sqE5eXRhpM8",
  "key5": "4pUYmTBeM6b5mDHq2d4pjb5GhxMGoaQr1hihinXzKFGMTUm68tmPW1fErWdfNZvPf8QXapxiPDrRAm9o9QtVGSNm",
  "key6": "49ZAiSCQbKroV4rmCgRJRv2DUjbVxRnSZCcq7nvtAU4DKhvx1h1bSRvnvLoEVyFBjx5hizQZrmJmm6BgwWCHdMGz",
  "key7": "4bLgG6crREqUQMqNn7867TBrg6S3bFgyixpeu5Ska5A8dUVqxq3zradmnUnpqFXNa4CdXPuQKXjHZPTRZNUdmVgu",
  "key8": "Gf9R5txu924tuuAVomgZ893JSTfkifm6jtFFKYHfuWKw2F6E8GRWt2hpZenw4cjXZMBsz1B13kprqWAqbyEhz3U",
  "key9": "4fsrDq919tWX4E5QLG5JacRUrRWcfBwdgCdC5NAcz29jfRqJgAguzhKM6rkUt6sCEwg5agidNUfJk3b4oR5F4wgT",
  "key10": "2sqngA21MKGtyupRt9GN7bivktdxPfvPipoKNN2MzWvkYcmiLBHTFTi15zzKcYwhCZdRDVr5fXhVbnrkuPDz3s1y",
  "key11": "4Q3iqWCdM52X4aVZ1PjiC9NH1WDQ1ebkxwCT7jqP9Ce3RZLm8m1Drtbib1RutxP9wXsu1wYSMjcaSmEpV6HGKLUu",
  "key12": "428Y5YizqhL3sirdbJUMx72pHw3PDM6JF6odAkdnt55d4iNdt76qCTP5dch6K8VHN5q5X9CWH4W1W7LW3su4CKTV",
  "key13": "2o5S2AhWMdiyNboU1LmV2cXHq9m4f9hJN7w1ShHjeDbWDGBbvqnkD447MUAmcAZfworWgY7LCZCCGf8jGURfnHdH",
  "key14": "33QJkunrXTe7quQVueRAZbnRFjFWwhxj2noZbkMMFFTQitrHDq3Tf39B5m5FNnHsNPYt2TfsFrs4VWQhAfJShzQ6",
  "key15": "cWvDAtgiA66qSC2DarAo72KsJ5A5sgYN8naHogaUwN21nNgyuhSfmiPnMvkd4QVcVHGHMRziRivwFHYeoSQYTza",
  "key16": "44YVgjfEYFE7Fcbw5tLTiT9ik28K6JePWKzghuqXFXAQwKX9pjihf2Wt4Hwru3HtdjJUkDniVMu3dKufU4ku1z4d",
  "key17": "35de7BqaLcAFHMVq4WWTuiK2NTugRS6GwdMRZ3aKfbXkF4EHbNqZDFJtsHjBW1M7N3JAzezdkvv2obNeR1MEbc7S",
  "key18": "4fDMLHxUBJGqiMLon6FmQs3uCsths8fPHAnZg2NFFs2b1mup1UmHYydvB8FLpjLaSsJhLUwbfH7YMQQbt1RXEud7",
  "key19": "3pawFD4J6wSmvdDtrRCrMRpmG6sKdtpmLKuwRActSFGGYZzScKHkKWg5BbVwRDsMcp5Vu7ms3FqQ5P94NgDpaz3A",
  "key20": "3ooZDoxAqKkgz2TNtTAhUHfeTjDikrmi3ZgQ7K8QpajA1QAhKji8kxCSFrBFdJwJ4jZEamHpQTZvRQS4tX9VZjbz",
  "key21": "HttY9TfZ7LaxehuWNhWP1m23X6gBSxtLE85MybUHHTUCbKYjXExHEpkTuUmcmR6E83ku9Za86suVS2FvHYaPfY8",
  "key22": "3iLkGzu6khkSk1gE619dEEctWuwToz4Fj6oxiiXwhVUq285vcqCSTUPAKSF5pnFoRRYodkJGhidHERDHQrqufwUP",
  "key23": "2rjv21FZryEDw45eyzw7VLhFYxPdb6wWhQSY6v5eEuw2vq96xZL2mvn7SqWZ74Jqa1NYQqRmVGdjYDmvrvsCs1b4",
  "key24": "3m69bWPDnteYKJEaaeBamo37vbHFE8fQeAa78CTxv9sBLk1BBqhpcGu5h6Jy9sZQDGpZAJgcw7px6JUdP2mais5f",
  "key25": "63MCu9iNEPjvJgiDQGiBp54knEYoH9pD3oHd53aSpEqE8m7GiEf5vhuNp9f5ZLUgeAbRuptJ3ByPPY3rmESGfKVV",
  "key26": "3QuM5UM7uWqU66uRfwxCJkU8o86C1dKpo99r7SwxBR36mhySp5mkkPnECoor3yVmu6RK6G71Mi1xdKbuzskHVaGY",
  "key27": "22WGPqpuTptegEVayLCWWaHM6esmgKbw5yjdhWAhnWowyMcD1zydVbsEWgAWMEukSq4a593zzfmeLCmefgA9giCf",
  "key28": "4JDidpE5uA9prusTRYv8SNPHn5TemFKXDNPhzadJ52Xs1NH5EWATTYoxSUe1gfxYZoAcweAxVocsD9hxz3gYFrSc",
  "key29": "3QZxm4XZPhT3PMsFBGrTv73JBPXox3odisj5uAAXFhcKVbUTSvX4nKh3Pekg9z1YfW6QvhDL5UoVfug8pSw1yvcs",
  "key30": "2zdvLeU6g8ZNFd4KYsBDCgtKJnkKBzVJQGGmkumHXKkrD5MCnxV9BJiU58yFTnUrxprRMxFpfgPhzhcYTBfrTpgz",
  "key31": "yv5D6wxkfvCtsiEwbWVQ56gf6oXuNrSUQUh7Yd1KFgerHrHYQtECE9iYgmFHBBupbbs7QAUUnjjfZooJhqTRYhi",
  "key32": "5bU6QLsExy4um1eUfjtxf6g58stkL9jD58hCqDgvXLBj5NHmuEEELzRWniNoMyVB1Jp8HjxeXgz1DFpHCoW7hTX",
  "key33": "4bTAA7p9wCKv3roukjrMZeyCdbHNZGGcT2M31gWCGnhRAqAdyKRj7cRnvgDSDfpg6rcFcZJUmYP4BugfTynDJe8e",
  "key34": "5cpXobPkhKaGpXyn3595oXG9Pw2mKvjFoBgGxDPYdi14Mz8djas64jdHVjjq6ScMeq68bJJ6QHoij99edW8MbKWi",
  "key35": "zasTDqAbF2ztN1mDskbHtNwxFQCU9ng9UeMgFMbAgnghys8QzcxztYV8dgfCCK8VfQELZsAdw5WX7RHP1XKBPku",
  "key36": "3gNxmZeBYTMx6gW2wPNgxGzuXqvzbCEsVWvusa8gRdc5FkzDrfbS7CfNbkS1GVo1vpMxckwzPpaMz8Egr2vL8KsZ",
  "key37": "4CBhRcNqGCJ1JL9C1WwiigefoDfdpV3q2FxQJyLAjEckbEFVgYbSbsr3GkhQqGS2PMqJM2Lqqs4VnE41ZGD4nFm1",
  "key38": "bz7KHKLvFS97eGFCgGzC74iThsPph7pD6zRUxQgYyeDZqFqk9v6EUXTvQxvbguGYzfTAL2zS2s3Y7DRGX9DUXDm",
  "key39": "2BA8wUgPrM3eyQhtqMgwwhsmRQZJVoT93HTjC2wVuHuKKxsitWEnvAw8KHickKMdQ3TcFpXMpN6hPM86VgvwVwX7",
  "key40": "4soRbEPcdA5yNQYUWwyQgoDnyJtQTS7ewmTwSA5qaHv94dsJs2qRC5rMGy13D1YxQ4YsdSPfuXXpTU9qUki5xFJm",
  "key41": "4cunyTfEeUVgvs2xSpqJTti7ERYESPTaksYmJDGwXgBDJTgcTPwz2mi9BGMzvjxmk8ajJiX6usP314T4oCZ2jDdU",
  "key42": "5XGmWkXVXWJxsJcZuWACcQFKgaxg78RgcUBV739Hn9myknh79oyJ24Zh9tcHHWFBtrnEo9SCCipfVmh53Jh3vLaU"
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
