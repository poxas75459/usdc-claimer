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
    "3tWtaGEy4HQZuojYghVcAFePYEJwt3pVRehGowCM5JUz2BvTGpkqpg3xC9YX6BkUQhJ8ZcTc99sXwzW4DeiYyzQM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4oYC1MiswX9MXxpddVS3AS63Prmxzbu5XPmfi3dbZFH7nT3NkmdMgXgwL2Z412GVL6XQjdLAyoXtgM97RyYxwU5R",
  "key1": "UsojvoxDNX5AuogjYrYEVf1xehtrnd9LQYjeL9KmtgvVQseByfBXH9RokAdn2PQwKViyFXp6C4rkmGGZ7sMqHfF",
  "key2": "3b5VmKTZi6Fbz884pJhZTTBiazFu4N6Z7zDorpw9qn9yMpAVvjx9gbsHM91cimVPhEs65N1jUPT5k1UAxMFsBMyK",
  "key3": "4mWYmbR8zxC8LiCToB4BouNzUzwaRRJjS8obSEPUCFpWqKUwmVcnv3DQRitMbc8gGF7Ge1v9jwAdnij6QDDoRMNW",
  "key4": "4FVXMnGuEHa5MmVFuKrPWnyDHPXEpvYyD6v43J5ao4bK4wsZRtpuTMu4Gw8nD9cZVddiUhTu8og1ce8TS4wY2kbM",
  "key5": "2id2s3v37icA6EByNCvLt82WXrare4rRjFYHTBk2QJDjG8aVSkkgXugJCmzeUXP7VmaznTrm7w9JufRio86xfATY",
  "key6": "4cvcuUTZatSo24c4amRnS9JQfqaZPAvoGzg7TxpCF6RWGDxZaBq7NnKcZ5AoxSs49VqdkgUPBjPwB2gwmDujuixQ",
  "key7": "53reCyeGw9ZLB9xdhDDR2uGSPutMZREbEZr3rrYSy1pdxe2ek4vCVm1fiZjwzDQ1PDtxA8i4M2JuxTBz4PBoWZSP",
  "key8": "5pYWtaxhGcyhvqzpzhRNDjASRh13S6cu2iWe18RTBvGjx5R4HvHBHPsJQyY5DPvk32KzvYoMciJnbqUrdMic3KdW",
  "key9": "PbXhShMHDpS7KJqXocrhaZVwN2wwAkdnkEePtbuFEnWTh6HzjNqBqzefcuGj7UTQzxAV9UKohbgvca2kQwMXSGJ",
  "key10": "bhTbzaVq796fqTbm8VscWiqEq76cNRKtZiT6E8r5sqw9NLzDMwN3AHrpGGpcdK6dAS8CbzWfWkeWEce84N64iGB",
  "key11": "438agUQ8d8wFQeMtujQN3BKZ1FyTocx6juT3B2qkSeoawYwZP5yr8SuaCJ3wA7ZAvYAS48oLnFpaJD7Zve793n9y",
  "key12": "WsM9pzHRPqoEnhCP4yHfzNSmEHFqjKuCt6W3dbbefWHXhLokr2KS8F8iXDYai3bL7j2XmjD2fkbTi9gjpYmgZv5",
  "key13": "31djB1kBMAEU1jZbtx7AgGMnwAW3DmFWRnZrfpG7ckJ2SKFPv4ELqJVU34iyAXzerTSn2KFxwV4v6tDZcs3jDRPM",
  "key14": "5uAq6uFXPFSXYUZL24Pdx84YSwM9XBKuR96t8XUqJYXmjvrF2aLMsfqPJK6Q48BWvmcgq3SNWe83EoLiq4P6oXps",
  "key15": "5CWQPbVyp1H5WN8Q3VZR3cc1NTNGHc7iFBykuWc6neXGkq5Vrrmf8Cm2L2YEKzcWjAB5GBTKWvupfUmCc69P14HH",
  "key16": "jrLzF2URj1Rvktb9ZiahFBrXuXiDshqftr8fb1znDxtsvQNsWjgn5piLkGF3fHuV9rKgViVVYHeP4Nf14oCBnNZ",
  "key17": "3HZL16odhXrTw2nh7Ck3ohEU3pU2aaRKFNkqKZTBnNrB8qRgt7bra2cgZXiNxLZHdfkjrMJDToJvtyKpxjMX25YG",
  "key18": "4PhCjaaj2vRaD82geYWnnunZCGNQDjDJbzkFpg9WPWgNE2nZpLe7hHinCeKUUKt9N3xzcB1aTxLU4SoV8LpNMhYC",
  "key19": "43nFFpCKAwcfqpoXM4pGxTNNCZDmnni3iPWXA9BusSzLLNGdeXd9sKexGP69aLs9tyfPKznQJ7tzx17WmkjWkhuX",
  "key20": "N58tzs2gBLr2Q6QboUHPm1Gnq1CRuzHUxXDZApHGkXX9XGrRF2dwZrpYDZKqr5V8u4SQqDDe5fN6j5P2fwiN9hA",
  "key21": "4UUXLKCTe8YBDJUpyQiJEbhwSaXFvGXw1Ha8nFYmkj2Sk2LU1KNXE2BXnP4jc8w9bBDnU2pv2uyiajGGXS7d1Uff",
  "key22": "46kX6a8mRacR4dr1uPaFgRuqcL2QJgJioe76vLu39mugBGMigZoSf68GuBncMrmwTpNh134YUSEriKanFHWC4cdh",
  "key23": "3rvvnfvZdSj6VuGew876sBeDGURZ2zZdNLNDS63yxU5epcPdyzRBFoj5tnssTQk7joUArgTHLFQjYuZ4yCdFi78X",
  "key24": "gs1sghURR1ZciWJjB7qRFUCVGnhCngKJpjCbeZn2hq6nTHUkJaGtwo645ueXdYfU1jSE9s8yo7J4Difvx3w4UR9",
  "key25": "2joSXeSZ2gZ1vanpWgwwJzAjFahqatAqCUCMes5H92mxCPw6UsCDMqPSBam2awNAzuVv33pJRa694cyuVHhUKaHM",
  "key26": "MnHe3Z7jXeeZxZQXLGJUgH3QwDk4ef7qkeRFwaFFC6xb9GMHDXrWVvQsc2qqGfqJsXJwM8cfk9VSHgtvrEPj9Jw",
  "key27": "2ixGrP84orxsbLFJgYPfuoJx5G9iCJMRkCrcUfkNqR8yZhAGPzYS7EZEe6kKwXYkemGuBB9Nxk4NXfjShRxnWSuc",
  "key28": "5SYdsoZQGE4gy7GdaE3qH6rJofLePGMoSmMhtXK5whjKX4v2XtUK4KXCQjAQqZGDMiaz7WpP77i7f5ozBgaKAr4c",
  "key29": "3qZC5LC5NsHd1Jn5WLy2eLXRwMbK2udxdx2Rk3GLQ7G5HQbGzueYgcsWHuB97UtE1NkhXehVP4gdvGY98QPx9ZKV",
  "key30": "2sv1cMJPS3V4DPDwYw8f6qo2oPhQYBLRmCDcQBvrd9E1GsPQPNuTiXZ5WLZbBqsh2t2S6CPsF23odT8c6XP4pK2r",
  "key31": "51Ha1teSPQpn3tL8QsEBWymPUXdrYW9pyEpFx4zrtSUSjgYN6zzJq46JqYAuUJf186e2Ca1be6kUMWBggzPf1rmB",
  "key32": "5fm7ssyvCtCazWufCDDNEqCpHdGwAqFtSKjwt9TpCXFZwHrUcPGqUEwnsN6ZqzQHkGuc7JiN892kNxtUorfJjEp1",
  "key33": "3Ma3zM1Ky5y6hG8jhiow2BGPJPyf9Mq4XjJ5hobeCqiTbgfYX4KZuttSSdcfjzYqHM3mturCiUFgjzW51nS7WEik",
  "key34": "617qGDJw435BTJRJAiRGXKgK3RVfQePLFc47xgb1sV6v6eLSkRZed63QUNaqr7RjpgnDCprM7WL6syru3GFUgBao",
  "key35": "4F7RYWG4LUY4t9uCoxdBg2Y8YmqgBDyHn98axDNiyDn3XjnjXVyDKa3SWTZmZgx4JMbieuEYBqXBCvemW797t2Gx",
  "key36": "62L7MfACgKGSDwc9i3b8fpfVyyTPLALSB5W81cYrmoruJYkWoviGLpu4yydMf5tuZtW9GV3q15fEGgPBAAGMgQ4i",
  "key37": "2SQUeTJP2BqDaYeBS1WFXzKcnXhJHAT6DuxfHKAgHR3GaDunPVccabRej1DYzLUXKWrDd7DSWG93tkpsmYcEsjGS",
  "key38": "2tqqrVTVAcMSAtKCPjGrq4JpKAtWvRDNLjbD5YcfBi7yqrDeYCezzG9VrFsskKqWgaChrpNG5wkieSDHWVHidnHS",
  "key39": "5gzCVeyeSSZKVbeGtJrzZA8tVgTaQxbkXtfMtFdtyMm86HLSBSozq6V5TAWSvhAPUAFJSopP5KBb7FEZyvLuqvQR",
  "key40": "2XfQjUYWE6gXDqQMdRSYz3BCZnnMpeGFzoGdTE9tz8GwePkQ4Zpw8cF3dijXSShGPtA1meqKp9YK3X4jVuep1BAn",
  "key41": "3y8n1A5U7yKSyhPWnwK9rMMwc57ABoyy613KERMmcJt8oTrqLUZnNr3d2tHwKApp31BAUa8hzcSJZ7WXGitZHMhS",
  "key42": "5r3GpjDGVvNibC15RwUTgS8CpUcJAFegYWUMwPbehf5hbtcsjX5RrbN5UJRYLoBotMDGgiZamcQLHdwfPXKQ76XH",
  "key43": "RF84yRDTBCtqrS79bwiLqEGvPN7DiHJGWh4gzpUTPszRYgqY91qzpQMDCHAQZoxUi5UoezrMjZpcaZa1PsGu21M",
  "key44": "4QsS6GuARXRDD9quLbXd125EFd2Z7qmidVe6qwJgJnWJCeEPE7B98yyNgTyx8NbJB5jkfffSEBeubtReLCHv22ot"
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
