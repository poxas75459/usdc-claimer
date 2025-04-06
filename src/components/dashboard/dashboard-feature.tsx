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
    "3HXwDibxDC8SjRKT9tCx8dzQe2qa2nTXVY8evnQfrW9nvDF3BDczYvPjxaSfyfZVoV9eBUCzM6zxZMADBhvJ6gYF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "8KZpaH6RXhyF5a2shttniRA5VjYoDPkSkkEswwuBU3ULi9Ddv74VtmjYKbc1PhUwy7qevTsv9DuAT92EbVx1mVi",
  "key1": "2tDKPX8WwmUwan5WMkqMSrdfWqTxbBXZ5Dirrrx3bfG8yNXTbx4madZZWn9Ffv79aoV4QwpGBY9b6kWoDFKgCEHc",
  "key2": "5vCCSRkvfymFwRvMWo7u47fQnPucvrS3anzLER81gbee8yXKiDZSfcE4cEjLFJqHi9ALcLd4ChLVymKmitnPGxK",
  "key3": "nkRWMcVVxuNhx3U5qN8pBdV3bs8Weq7dNDbX3RHEadikcXvXNT5znK6CHYS8UUrYVbrYQe2yeTsciWc4T6KWtu5",
  "key4": "42EG5fbyynH9kCpY8teq5qHs7ickjtrqH3UzBkzhR3DLrCMEsK6FuY7cFrXnSaVQHiif9FXR2d143mbdEPj6cM7N",
  "key5": "42bBUBNvydS43DAp8MYxpEbLv1QDRLuPtFqtKP3Q3w5Bfn1L1W9tNKhRA4rpuNxM9Hin4re2vGBEJhqedssHk4rY",
  "key6": "4pTccv7k32JJ8HL4H6KxzMQXWvDcRZ9oj6y2KigQEtEqdo7n2ffhtAvxUdETy2hCerU6zva8jjKAeEuHkmjxZ5by",
  "key7": "3y6vFtdAkcZhCsrb1tcghdmgZ41nbknXr6qzsbAJeDDBEpeL8d5jx6hzAJYavX7crjtSMeizuWGWakHiK16c6LUb",
  "key8": "2toaRy9qJTrk7mmK9LgdYukqZVGgLsTtFLAgAgMu4izEUkynDRRYGyhTjGGjoYkaRMvHb6q1v9dik3roHFnJ4WtR",
  "key9": "4113TgwVWu3Y55FaS3q1aiJT4ZLvgJeu2UTyovZDbeNDp9hLjr56R4pjZ4iKnqePF3bvpcUB32tSTLDtWMv1SPLZ",
  "key10": "4XTc93d2muhMADmUvAqzkvabQqCMz6VS8jDZWKXwxfFLL63HeHQ5vtXytvzc1Ko8Ns6jAjf19hYuJhmGfkRWh8k2",
  "key11": "5VNauMJcRgdBPMqJqNGSdTxd29mW2uvK8gzrdNzE4LRYpabugV7DbqM1EK1wPZegqhxAo4xNVjL93AaPaGgmRnB8",
  "key12": "3YwCjwKmymgGMSh8qAHRk3prF7XDCbk4YTNq6bKsoXUXXEpSHY99SZ4BPTJBycW1UMGSHKx8R6nYRWH2fNEs7x8y",
  "key13": "2DzbA85vZ2NK32cnBMVnJzCvmssvV85ghXMihBUajWcYNkgMc74JWn21siSHsxp4euhCyzEyHvGRwQ53nzCK6CX5",
  "key14": "Xea1BsWvmzAPsr5Qsubke4vhJX8xprygnmQ6NwQqtxj5AK5iMe63NJvv5e7DdB1Mt8nhFMhi9XwBRKyAYM5kkq8",
  "key15": "4FFB4vWfrnrQaN6RM8ZV2DcvUCKG2EYsbN6AwihexMmXrvQDnAqyUSAm2QyAbczVNf5Ac5iphKgZNpYdmhZYyuJW",
  "key16": "2kmbLsEVdHmPHpf8RDxPep71U2JG4BbqzCoUy4PrQwkZhYYzqkyUDj4oa7ZseFY4De7UPNorkydRnjMySYXNM8Sy",
  "key17": "ukXabPfQh7MFUovT6PeWf4XD1e6hk6Mox9386Ex7AoXegnwAuv5xiUuaQTyx5hMX8rqpqhAUyJGSMrod28z7bcF",
  "key18": "64WnEjsnD63Jn7dnLQB8ab1Ps9NnCTS4VPArAQfyWfBkVVCvif4KChD2pQm2LBsbaFrJKVGTpQ7977DGp8vJTk79",
  "key19": "75TqN1X5afffDyae8DKf6fPGBSdmbjYGKaYyLsmJhcgRYH1B6fRi5M6aKX9JgM1Cx5xtqyPreEEtW6zmiLFoBoA",
  "key20": "2qZZAFC4yuVK9aXvt1k22g5wpTq1sYdVCd8Nja9vMe84XHp416uso44fGwrmU9nqcd13s2dsFsrG2mSLYQNVDr3J",
  "key21": "5Cg1hB6DFxqDGVWv1sDwGTVPr1Zvk7rYAyerkspaeqnWwU8hUMjLiSygzaSKNN28B5hn7wdW6Qtkr2RFaCiUNycG",
  "key22": "zmvmT2jD1egicvzu2iTmuecGSeAqkcUoktjF6mREF5DAQUw7xZf6yUVRBbQq5EQubFS2RN7v1CFL82tAWmDHons",
  "key23": "vTdfNtk8td45EBoXYWaqNwUhuPaTvkpLZoRA9WcrYDsBvVLMzh4vGdJUKZxJ7Xu9hQY1vYnpNxLQ1ednRH8kqjb",
  "key24": "22aiiczPxxxNKuK71Ev9TkChYZTTLVRuSHJVs1uiN3QcyKSDxU35a58jav7ZEuH5ofTWFWLZZTi49XztaoBtyLEQ",
  "key25": "3keGKA9Umv9LdahBaESHqA4PZXwRRGBaSuo6NXu7djzWMBjzdqKEkaS7xxWvqxW6t4Bf8bsT9t7NEoQWeRe9TnSh",
  "key26": "5C4D34btY4FjRjaZydL5JH3NeJSxPZzW6p1jz2nV6q71Dseov24hcX5SKbai4dvhPpECvY5zX6Zu5dcWHAZ7u2KW",
  "key27": "32N7B3jX9Sf1xCbN7G2FG9XbDW4FmLyedqMa5sbaTWhVZbTNRuFZpZikuJ72ciGgaE5c36t3RiUd4LtfgVGCD75w",
  "key28": "yrjGC2zrZACkpfSVBa3TDPty2Zmd6Ph4kBrAZ4p2HU23gVPzLaJgRysh5zJ52vwhY27tXutb7aup4YyHho2sxwS",
  "key29": "YsZLaAyNEgzDLJzf48o4NSeWY8ZdhZJnpUYs9HTwBb1rsZpPLCpV4Ti88MEGp4aVmnC68aBZq8ez9VhZxtXf97J",
  "key30": "4hvXxHsLacXBzEz7HvGFEsVopDYa1NUhgzmw7jS2P9pRZ2CdLfJifMwRarZ29N8SVmMUGnE5yMwyw8CiBDfJ19kz",
  "key31": "m58AwMtL9UmDEHXn5eafgeX1bvszDxHB4nV5mruRKUT8xjDjwLT4FYN8XFvNRHu6vJF4pdN6t1SXyebepj8GhhG",
  "key32": "3iyhKM8u8aLvq5JjpWC1VS3pXuBs4XAt1xxXmz9b2Mp33Uvuu9oCcyzgjAXZffsa8itQg28cDwC3KPZbs9eATpsi"
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
