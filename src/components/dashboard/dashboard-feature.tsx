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
    "663pmKn6U7BQJgjUi1bZJCtT5hmRMbFwKFpTLTUF2Pko3SzkjiNxv6iaTcCyrsQUCeYzetG7CTFMtw47HBaYPrUn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4XdFtg9UUYyzes3VUPVdnviD9nVFNh4o23xtCGsofNisv6V7HV7mnydw5rMB5x1N2UDrnByAjPAHoNwFd1riR2RY",
  "key1": "QCVdNAKcXG3KXjZHdwqfnfjcifrzERPHzQR5Spo4hVjFKvqskReJxSkwrACDQ4rP6ivDNALB3ShsT3TckFPJpFD",
  "key2": "61VvcM9tX33gonhu4sGntiMUexGuZBRx3YedGaKtpJjDBLDTG3wq2A3MPDiGeEgZUFbKaGY64MyJGT6MuA8NwTSq",
  "key3": "3qvNv4QFfSSyeZeMLQwFt5btmVb5uqmJFnUUJRT41y9r3w1aUeCzTb1y8oSN9kTS4zbSEdRzR2GYafkhoCupQZa8",
  "key4": "2NgqCVfHynjANGeQB9wyvzcU2ggCCjLM4jW2gimWEeRZ3Z4rd9zQ4zhsUSTGnfdnwhGfpNnytFbaW5BvzEmr8zDp",
  "key5": "4rTiL3AgR89Up2x2qpjdKshtiWxyncm4EMi2H6K3oHfFLd9zB4MJWgbzkquqdzjCqWC3BpmqqTXMZ2FB35X9QsMH",
  "key6": "4EX1JK3Zj36SgrhceCcQiu4uPEe4RsdsxuLrKXFZxdv3XEjjsmTFYwutMPCau9ytD5NQ81YrvswPKJFhLahN9eHg",
  "key7": "5fvyFhhEQUYjmB2jZ8kpRiTHK7K79sVKY6ZwV5rQvifywtV5XpH9UpvveLifYXjTLZRKDKJDKN1oBtZjFpSDVrAh",
  "key8": "2JN5K7rH6okWZ42WyM46bQCXQ8SXb6MyoY1B6ztjwQQZE3yzexz8Dmh9FKZAvfreC8sfpwcMRA7HD2oFbhgGRkwb",
  "key9": "4CXM8yNUmVQBoTLrrwFoAbsy2jAY3p9mdbFDVn9qPkqpEuQzX4LCR7t4YLkKeTxi7JuTNyLnoUKmQ1v2fahRhaR9",
  "key10": "4gmosyCmHh3G7Dn5EXFhkHEmB59qPvE7ZUm6UUQYxZcu1KzFhLu3YWecYDuiVBq4yc4Jva25XwY3jW6NnUHEQm9y",
  "key11": "3AhYZZLsUgbJjdHbQZzxB8AJKb7xNfZCVsoxkc4pJHn3Xhk4UY3R9gZQ8iq5Jn5gQW1t5VWHzn1ECWwdn1rKcfND",
  "key12": "26CgbkCwkffLfybxB6mC67ZCEphpwmPb1kWJMyZays3BtozhS32vfMmm79BRHeYTF7ujxiG2AiHvRUjNji3kHPnK",
  "key13": "5TUrqPtmCHv4na8Mj4UQWJxJgYHmAqcWUDRXy3zryDQ6Q5fTsJYm3zSWHuEqAA2bWUhz1fkTwt9E7zRnFVbsJhci",
  "key14": "3HoSn3L118xwwcrw9kCDk7YmwLR94WoR71gMhD7J35Bn3aPgEo1bRFHXNJKHDMquL4SRKudtFMtWjniSQQzt6aYr",
  "key15": "59mjZoevc4Ere4J3V4vEiKgiWo3yG9dfkmBVJg2MwptC7WU2SkiCbinLYsX878WGuWgkFccW64P8VByzHDUfBsrA",
  "key16": "HbWbiSSgLPUztPSYBXd97BmxA5gXjGgSczuzUwYW663TkuAzPY67Q3e9vqGfK8eEEGjJrj2xadhs7MoDF5dxHDf",
  "key17": "2NxtXTZwuhC7LfTV2GkEjL5gn4TKixX4dh5fwjCa2B87oFKh87zsMJwvxGh8ZqaB9sBpctf7cpSHPZbmaGhsfrqy",
  "key18": "2y7YdAb4pLV77zXcY7q5HdjaYeP8j3fcL6eC8zBksLzYQz5qjNDQVsc5teCXd25ANEMGcedPoxvxJeQgNdt5CXqp",
  "key19": "4CCbPsmQAGnDF5VoqEtKptJo4PGf9J1uw2GyL4bFevUqbuhHnYJuGnDu5mdJrvHkN8mGWg1GJ4vkgKMcxVPVGX7",
  "key20": "2WjANSB8A5Y7h4vxMiqzqPhaTVEJn5avEfJEcPyZZWgBrQHDYLucq96mJ91En8TpMNbnSi3sX287krRhUJQJbqhp",
  "key21": "2HGo4itFR12zFymQt9z3uTEAxwFfPf2hjjn8nYgvY4T8BdRcCNKDtD2MTyczAARtCVVK9AyPHhJAXU1scNqudT9o",
  "key22": "53QRYgBMt22LaDR6nuqFgp8ZVX7gQLp4xJRAiDXZWRfi2yr5gcjyaw3uvVEKn6UdeNfKd2rJN7U5GXyHMyWbHoK8",
  "key23": "3edKrgCKAb69VZ9qjXaBRop3E3qqzH1vH3zzT1X8K3mjUrDbw95DuGcFCQoEpjxfKDeirpfrAX6dFQvV9NZ554sL",
  "key24": "5nqFGtBgRQHXkUPCdLdacXUgftuJpXZX2gkuyzWTX7MMx4oJyh4gdjisM5wDRvu6dHfn81cm6uf3KHnf4DT8MWEa",
  "key25": "Q1fm7yxH7PU5ErNUkeN6HHd51vzkereVCLcP21H7kQBddDqxrd8EW43ybgYPU8y728c4DF27Byc23txmfLQtyyH",
  "key26": "36gbbi3Cx5eaeqzDezSXAJRKixVNm4wownMv7sUfUNq7yByS5TFkq14MYBLeB5CfrTPEru4DeqGLRVJJ9eXwPA6d",
  "key27": "3Rq8bvMk1MgExsG5A1vYj78j8bPXGFihHoFDULDY66dWPV6dFrDrKwLQyw6v35SL9skwvhVz6BMJXZcMhdrKct2o",
  "key28": "PTMmRVKdZH6gLhwhc4a9nnc5yhWkmF7rjxdNDzFRsx47dBqTYhnGGdL8WhGu4ZJLVxwaosptLTy61nuzANo8PtJ",
  "key29": "5JSf5ziLoXzorN2K46epmcUMiR5vrWML6zuuFKFR8qmDdNhLwZFT65peCzbLNnCLMzqGjpwypmT7segfhqt8q3p5",
  "key30": "2su1LeLhdHzeptazrbKeWZ67jg4nj6NC7z1qcykowMxwdmFyK2GbqvKDzY9duUv9vgqD7obA61ECgTjp1qrhu3SY",
  "key31": "5s8yw3QA9qZGR2gPbNrm2998Denyv11ienBLEVyk3vFwfKPAjgyuSknazwTFcSM7opxwEhiNE6APZd6jJDm9w8ef",
  "key32": "645d8xiXD2sKxqZapydXNcLdsML6QAjDD6N4Yf56ZvCTzMyggiUbRYV8ttwTpGPEWjjZqvNh7hepo9iRJfC9c3e6",
  "key33": "mpviZ8HX3frxYMbA7DjyfUAvFXnsR2NZpMNaj5JhVoERQHS4CfEkUzjgASeJBedeWTMK9gFDPcTcgknYM44XVRk",
  "key34": "3TGEJ35J2pDAcmwHm3YTciihBgMHo1NoQ29JLL1eZTzFAJdCootVrdwy4sQwMWKUtAb1xoPd1pq3Hr6KhsTwJXgE",
  "key35": "2mKNmcNPBP6fhp6rHsEQoPrjv42UQcakiBc2FJHHGz1aayuA5tm89Lew7FdZduzx6VqMrNt7wmD4XS42qCGdUyhx",
  "key36": "2QMhekRK6tVFeVxfDQPXcKtDi7aZScVaXTVKewoZATj6MFz6Xc717cPNyCCUfFohnAyudTh7bd1neCa28aFTHE3m",
  "key37": "4irYVVnYSaLPek8pNotHVyEivj5JbweeUFvA4ijUerPaHnVYLAnFJwsPFaHXyqGEapDuahcAeb38dxD3KANK578S",
  "key38": "2c9ZZEXqY2oZNTLLnPjLDWKVFDDRF7PDEMfGbFqjaZ2SDjx3FrzayXZ6jGDk5krqBPdbB9wKtGK3nDrWzeGE55GL",
  "key39": "LLDi2nHuftcDjyhbb64cbMkSZ7c6LLhep3AWA71GYLD46yoJRZZqbNaQdik5ej5H7UQQVQdRU6h9cSE2DE2Rohi",
  "key40": "5C5jrErnHaP47WsjYZccsNf1jNr4TvQq7Mud1xuBA5k5Mc193ijico8NRDKXooZWYCstKuTzNjhrtRxE6PxpXkQa",
  "key41": "J5hpnDGaTsB4ZLQ4UxtMvUFFvB2Lvk289GC5spfaNBdvpAuRqQLyGgA9VqjQXwPMJv3zBVnGubXPGwFPCmnM3WH",
  "key42": "2v9fLbeVR6VWR4nRFcjW2XrmeTzvczKR3tPJ54SsQAtzZYAZB2YFjMgC1giAqt69sHGgU2XNuWwf2nYHkZdseU6r",
  "key43": "4bHt8aegq1Vw1ccPaL7qABW6VhydPpJiw9uSgCiiQdZ2Vdmvz12aCzM11CtcG8RW2HmzYrWueDKnQN8CcLUbSPP5",
  "key44": "2QbtYSKgyjJU3JhxHwfVhVUg1kL8ksXQt2jyKRJRMfWWEgefgwXtKRamCB9SmuaMEdA7sPjQNFTPhpGS1HkCjbfS",
  "key45": "4xs4GqfNaW9oUwRChok8mfzaw8giLC2KvHUBLFFmU2VtKNhGhvXN423gHJR5CirTNTfgupAFKQyPujEPeCMBjw7Z",
  "key46": "5Z7CDKRk4rb62EU7wrUgPY7g4V5f1UXhQd8U8f95ULD2rmBSTx24dZsfEM3sZ9aP3R8zWfRgAABFstBDbEJYGruW",
  "key47": "23cdP4BHkrAeH8Jjuhs3RJ7wS3gWCnJVDEqHPmRCwtXWFXA3XeS85wW8GiBX7tUotXaRoUCwRqatYvt1BJqKnqGG"
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
