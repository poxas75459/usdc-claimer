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
    "4d2nTUe8pXbbGMRjXSdyfiuA8GJkjBJVaMfAbqDDtRCG6mCt2NqPWRy6ABFuYjUDU2k7gcX9dCiaW1Cw5TghvUGK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5k7cAEqPoKTwHwADSyCmmzN8fo3yybMCQwFNiheHnxrZAfKgpZHNkQ7dci41u6eN4x1Lpoo8PgJyLrqJDXzjga7f",
  "key1": "2Kxrhu8TaiPmp2AeqfwNDMjFiQUhoAKVbpj4AphLKuGMzyJFnpGyQCbeiLEtpCfAzXXNu4CYouqgC8Wt1cPoGkG3",
  "key2": "pWe74wMK1SRMN5A2Axmrun9qbgUnBzMDUDy42nwHeRJc5ktUoghPjBWZfACh5XqYrCmix4PR7uMTBMq7AH6bprZ",
  "key3": "3J6Ngpuoaw9PcTUAvxd3a7d6XYUAFCTsvVgYnt2isNpPqcP95D2nRfmwi7pKcjZGjkMJzT4syWLq5h41aqXdXv9o",
  "key4": "2SucZkMR7wqRsTykzToRpgd6U28cGoUmsjbdNr1BizvEHvt22kS31adVgmd3f52M5kcyigiBMrpJWfoeq6rUTbn4",
  "key5": "MTvTVpwPsWLxJGe6H3ViNs6R7EXygcLxT7qkGfsEL4n1oMnoVDmynXL1pKbYFZn5sNYeqjRth7vAVoAAR8UiEBU",
  "key6": "27VSTSigGZDyGkSgwa9J8EPy23dnUkxzwZDDmVjpxqJpqcD32fwW3ibLoid3fJ7Bt8uywZiQLCbDPsMp5KLpSjfD",
  "key7": "2HRqLEWG4VaKizSrAknZYRhbcmW75hKx83b3dTYzB3yUh25nLC8aWcJuTbMAMroAeMNQEawGZMUsg7Qy7mKfbq5J",
  "key8": "5kBc6NGRic3vrVFMjh6xoXXzQ8SpoV46TKK5RxpEdV2CCDcFpsg3RyU95zs4uC868ryZcCxbAtVx4YLAtuWQXpns",
  "key9": "3rngoVnEzbLr65jcakLo5V71dikUhATLtToNq8ZQh2jyD9qhUrUQVVA7vfRMT9kCWxbNH4snN649hSFmuuxbYj58",
  "key10": "5cjHSFmiQDzsNPew5DUEjesRGeioWsFZ9AE3GyUH1dL3cj27FCnV1kiDbFgyDrcSyyJDXLKpUAr1aauB51JBo2Qi",
  "key11": "4BHGgX71xZQnb2CyxJNSNdShh8dQE6kzKKELdModCaWTTZ6vAEdVoPfKpVktZxm3pSdgzebb8EZ3r2bXHJ1ko1P9",
  "key12": "3AjYu5Q3hpFBN561ppwX6Qdnto6Z6WHw552q8AqDZW1feRhA3rxq8TGaeFSWcRaXt2Nqurd3uWStJTAEoDDAz6S4",
  "key13": "5jypi1G7wwT8RgRNnpyiTk1fcGnnXPHALz9UdUvMSX51RcDeRYKQuFUEZHE2WPDD6dKATpwy655P186p63FmXDQL",
  "key14": "29UTbK16QxdqGGv6QSXpADcVPqfKoUGLEbvmR1vcGffSR9MSkaCH37W4fs1HtFx3aLf5LM4Nos2oTxqcTie27rMv",
  "key15": "jbzxY6F7bnh4JgtdYuwrvgUBQXHkYCZJo6z4TXwJceTmpQiyZLYwisBFnxNfPULf9Le3yXpWB61thbN8tHsUGQk",
  "key16": "Sjm5TvSgSd2c1LE59oyVCu1Jkohk7zuV8BQmsmnfzNANzwyjtrRMhYBwVYxbUNGPe4QTuzFgDisiag6x7fMnt1R",
  "key17": "yHAp8zCS5FQjxp61tcRxGNZR1K51KzUoywUunBTPF4QKkeBT6zaewbJtdFoiKpeEL93Ldw19LoQ2r66Apszkiv9",
  "key18": "3kuQeakgGizmAgVa3gRCfxMTQTxvEcxiKmsbWj6PG7m5VBK4d1DNHckmb68p6zhrnTSv2hzTQS2akNjAYBqxtPgK",
  "key19": "5ALzs6MYEpsq7ATzGDewuLHPWTJpLb73k4ZmfLu3NBSzbTSvhCMiRazafZGkZHZ64HHCctVfkyYiH49JiSJP3xGS",
  "key20": "4K2yzf5CuebCPWCKVSq7zssQru87qSVN1p4no5TkHe7bX7uW2wD8qQb1GyybfBYhnefLXCzshNZkTbsYakaQfMwD",
  "key21": "598oMiuH5qU9LcrYLe9CkVuoK5U8XQu2gVdc6BWpPebuPaXEmTBqApS9kXmT4exDscSSLqT1E6t8HQD2qnUbRLxn",
  "key22": "5xHBkyG1zFqb12yCC3VjZsCmYbeejaXUZksgj6YwCL4GQWcCPQRzNxJyNJ84xvJwzFd4rVq2heRY56XQc5YACuN4",
  "key23": "2FkAQ5srRighdi4HmC7xKCV4wWZtFc4ZYYojCj6RZb5txNXkKBWziYE7aozCTjTPdE4ivdwJciqqKVUSaFwpfCyQ",
  "key24": "2PXSZcNoZeV2FaxfRWvtkdyRU7AnH7mXoDmdDjNoCmsxbRAsTEhqTmAxGskigGxKsLgVUU1boxQLwrr6NtmhD1zH",
  "key25": "46P6eGtWAVWuqFRRpAXsKgiWkn6w6Vm9SBwddJH5u1vAJMt87ifiawNykqnVjAaqFkFDjeqdYtLE7stsjeq9Tvbd",
  "key26": "5m4ePMsMjMWRoS1ErnReNeMhY1u7Mae2wJFq2cV2TUBv8bsGnpSSqPm26DCG8h2BmTLeAGYAvaU7LaxJFMA8mzMr",
  "key27": "9ScrcvJeDuXTrRUUYwLBABgfkCZ4n93sYjWGjp2y7SMHwyNykFzsfo2EkDnrzuwD3QKqUY7mt3TaKn8NTT8aKfq",
  "key28": "3gNsDiLFtY2QZobcc1gDvdWnpLFvzMqJr3DbA89zTGC3Gm8XXfddQp8nTAd9tsgf5FTh4qGEotEhfbqp8fxiaagt",
  "key29": "TF9N55ePzKi2wwA34T46stmDwUMbFvPbe5oWoEcmZXAsA3VZjimWtEEh6B5S2nqCDQDFppjRv5pzrujTTqw3tza",
  "key30": "2AKRQxTEvVE65Z8S9Gbr5ajz3ms5Y9DB9NbEBztrwMMa29yfE2W9u3qMxD7QgG48J4oEKbh9PbPBvNemdbmjqwbM",
  "key31": "4DdNbm84mVRRYVpBrPkNPgQYx1hJd9U73uMWQ6J7JDK2V3AyeMWEaz4mvh6Wf9fT9MJnAqWeXRPe61246zLxWs7G"
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
