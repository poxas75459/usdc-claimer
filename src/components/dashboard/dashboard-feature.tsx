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
    "4U4pMvk3tKZvcU1e7UfMqZqkRoyDE1TFt7LrWH1GBcvLm4kJAQuqTxiVP6q5ptopVcj4izMwYyMtJp3h3zZ3cb8h"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4k2skRqwxGCa3ZTRpQZGWv1bfvRdq2UepxgRefUkXia2gC3k66x92fcpHJ1TRLkxTjviKEcZ552Vir15JaCe2pXo",
  "key1": "63j3UqRGbbeEQX1M7kufrDJh7voovHo1be9pwKuUSJUfbLxdMSoqWboGkk8w8ZZGfSRtHPoZ5fwjqDRAJBy498gk",
  "key2": "32RzVYbdjkSvbMfuSS5CeNPveFW9LZ7euChrtjHThmvNc4hKYtfdYEhT2qajqX3U5MJiJHLZgwS8DeCnVaJtDrNn",
  "key3": "5fC5GH1LZUr6hxoSnwGL64hHhXGSLJHx3ffxGqkyGcqT69tjRhrvyHwoYCXYWPNsWZqidnj7AeYUSNauMGRFXxUR",
  "key4": "3DeeRpSrN5tzn6bmXh7H6at1BaLBtELqK2swCVBuqZEM78FFTvW9vkjxrHHZ5AG2Zq5q4iogUNHa2cGTjW2TsUhr",
  "key5": "4MsBjYjKZzSLHHYzvaH58mYhNfeJP1tN1nrtYrrqUmnLhhNAP2BjCvb6GnB5iSf7xWLe3LhAe2DjLL43AYrVEag7",
  "key6": "4pBjK8YBJaJ1Ppne193PSpRE3q2acfezR57xN6cLvTqeUHEG4vwDwQiHdiAKuzTWQDyPUiqKv37XEEwvobBxTs7e",
  "key7": "3WDzCouBSwFHWg45FuDiJwFCAdWhWLeDLujKQ4G3jMDHuUBMj23Xhn539qdW6ZNHXaM5nb24zsg3FzDgrdbSB8Ta",
  "key8": "5T22yj4c4Uy5iCmG6EbrH5BSxCidVsSM2B2cd7GcAYbfAcQzavfVh1SzrvrpbzNt21ciCJnecaPfiwBorkZMz99y",
  "key9": "3s3ZNpVWDRhtnR1adYpR9z5RsfetneTS8YCV9cpweJEFMv7nGe8UMu1PTx1RJzqm8fHE29DzhRmXEe7mjiWRhJ7j",
  "key10": "2BFHf2souALYVybCFLVSLkUD8EPm6AUeF8WATh5j6mJGzzp5R3X7yd5dhayV1C3VAM9K837RCppNFFHXrUQvo8Pu",
  "key11": "52svNTeNZLra23GjDnxzQxgjzwSh4BX2QZwVU19gtU8mB7tdJippYLPtwXjo9QCh6c4sLEqFLgi6FsdX91RC849G",
  "key12": "29YtvptvxHKHvWQMsWQCQ6StoEKUhyhnNmVskFf7wRvRQrHdGAM2HH9s5suxip7QcyPhg69N7jDktgpt5iRTT33L",
  "key13": "AxhsY8iMFwW3zDVGL6V2n4GUC2ZbL6zYg3BM858PEpt739c33jmBgXYdmRM6PT1AWMnr9QBq8sYr3NEmh6AFQ3e",
  "key14": "QqGCi4DVAnqJv4LfXkJ2XrKNREdHBGm7JCrWWfw7qdq8mYp9UmDkAHRb9wmvtWXgU6zWwcnpTjQwLSijsrxkVwR",
  "key15": "5zbdWrNMCheEUPFZ5VJFk1yoRsAoeA49hBA7AUmKxe6A1v6rrTspejeu2LzoorKY3cXgeqLTJADfBjbS7JPHjQ31",
  "key16": "3zQjW3L3a69PxY9GcR1pRVjGXwKeYyVPyNsNHpxtfeUskq7eevRMbabQaZ6GA1r9FQJ1jdXLGupDDhvUqnACyXEr",
  "key17": "4hMfgbgzwthZsx6Vg29Qx73ve4gb2M17t3RXLw61qsVHk4sQ2cyKdpgDozFZLuALQHDr429UbVErkWfTCoNJyWDe",
  "key18": "4PLcVE4XZcB7cDmKDbxRTTSPXeifg1BDh5b4J1FnfgxwMNy7kiEgxb1oYLbyQVrWu8HviVRLUFkmgBL5pA1e99rU",
  "key19": "4fHnbkwrfPL5reHPoMTKnPvMLcgPawnoQvm6DsZh8fndvgHtfyne1ZqvYC4T9CuCxNy6KQL399KVPnaDGosH57RF",
  "key20": "2gn8uVoS6sevBCtwYYNwDnP7M8X9R2dFNgMvzf6us1Jj44khsA1tAaq9B9MTczf4zz9gHvQZozLAy769kXrhks34",
  "key21": "4NSbd3yj396S3oDk5b3AM13QvGCzY6buxWodFfB4SjY62qYQ4RoJYE5WJgNZWhksiKghL4R7F7VK2rbU2Hvvezrg",
  "key22": "3p6tfbhFS9QEcJeHd6nhBFfPvTtqBPZnynnaGTUUTsy3DnueXBwPz19HJMDJoZgLTprCtxeEtXq5UscXDG1VHWKx",
  "key23": "JACjwZEihEdbSNQyCdiZZjXHEbUTQ7ca3x8tEY5nDXedgJrLBbUVHuHmHYktmSVLqrKairjYw71iZXkE34afeJ3",
  "key24": "4TpHiYHA3iVsbNAvixGr5VSvZ9Pgmd3nNQ6dFMTnRpcWWY9Qc7bShP9oV1G77dHZ9ahWT2QAJsDBoet2n56t2AgT",
  "key25": "5jWijyrXWLxEV8ZadwKZiDSCHPgZo38JUoTRNBHHfqpMJRjnh2t3AZ3XHxXB8vnYwx1FJJ8rpC3fwTWB4seA2MX7",
  "key26": "5UTtNxosNHuwxpArNFEpRKw2qwxCqJZwye3ZZsBwMQVMJxBT8XHd4AXMnvutNjaS7a2ZTAjdKe5H97xZ5FPkLrcM",
  "key27": "5cvBN3ijzEMaU8F9aG57xwvjWNPD7dqetuVsihihoKkcHGWsvovf7HDhrXYim82ndkQF1uX381kpQGDVVh8qUEdP",
  "key28": "5fBtt2MCToua6og3xjvXAC9CoUvP6nJR6CdUCM12MKUP13STqSTdCrKxLb1HJf7FB7Vwy8p631JqCbVdKeNRCSdz",
  "key29": "26ZWBaAEgeRmsdHC1dccK9F8r1ykXVfHk1DpCYUWh5fLKtzdJVbDuRyLKpbsktSunCh8b4TjJtUoa9qN9pwbFVjk",
  "key30": "3BXN8k7K97TP8BdTEDpX77rGgP91FQDRKzmyHWJU7tGATinMDMqU8u7Xgfew32zynjfdCq21Wy2MTDG7uW9NpPvA",
  "key31": "4jUg2pDrEXFLnaSFakUnoXRqjmqgNEYDhXRpFCPdVZAQx9EUqcqNT2tL3z8P15vrk4c7EWRhApdCUtDRra5tfoFF",
  "key32": "5ZrtoiTH8g1g2CyE4Un6iApMDhm2dzGZfJjFzbo7ZknBV9v5KDMmFjv8SDvvBYP78XVLGxjQZNJ9n7AoEBhGWjyL",
  "key33": "3xZUPmEy1gjqVHkEVzPbPt8tmqxB918FwG7mJJViNzgybGnzeKkXFSso9ANmPxeNhoDSDkn7HXcNwMiA4KNFc7nj",
  "key34": "5AWDrEWVUQ2FW43Bq3ZC2NZ7e4bd9zHwEcG7rZTQtGvUfur8sGWeBTtWuffbL72gqG74viZYUDjudQxzrBVQVCFe",
  "key35": "5xmMDv5EeCTrYMHEtZpNCSJkjo1VqidRoNFWao336ZeuQDWx1cxvnWqx6iDh4ubK6w4qwDr79RxS1EUPcapJUzap",
  "key36": "3iZmjLfEd9TKADvG7MTAcSwjELbG64zwQyaQz7YNsQTUgwopFDejAW2EsPXmcmXYRnrwgCKgFgiKqX2YNo73frWq",
  "key37": "4UWUYQJ3TkEsTyaJ9FV5B4JnLJEV4Yo8gBVuTpCb6j4B2EJ4hFjEARMQscBTRfCcnyN72LXj5Mc9G1W2Fu8T6tYc",
  "key38": "48KYqQ19NkmhwkdT8VSRzTthrriotwAK8Fen2VBvLC9zegVmvBGvCW8kZx3f6PBTeAy4KYWudnztpzHpJNGmiRyk"
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
