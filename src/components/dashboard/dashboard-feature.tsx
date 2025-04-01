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
    "2bMxoFVGFZohHLp7YW4h7YVgWxXoBJVM2Qq2TCmbWNehcDTYv6aU4qsnYGFXucACXtTyeWyvzZ8vnjVFHo6e8Lxx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4hcUFd1R4KJLMPZad2omQEJGKmwC6eF5W1Ydmhvj84srxsy8YULQhnaN3reK8Ci2K1tk5eYkn8uuPcW8eQKBLeug",
  "key1": "8GK9UyCDoEP8DrJo7FK4qAM2v84ZLLXDAnwyqmhtHqLr3k7n5Rs3Qx4kjTZbYUrxs4dauz9BooLnRx9GQ6opaWv",
  "key2": "2jD5s9SLEWD5Yj9NvLnV1NT4U7hUzfGBSNivVrXFLBVC1PdA5gYE4TFxfttUapzMNYrK3HVcBeszZJ1xRjyevgE6",
  "key3": "31QGuDhuKchw4sWtohs47XqNFiVQq5KeAXfN1oDiwF2PBzRPmKi2AqoSpdoogWMgg53BbWcwogsJmVhvLapoCM6U",
  "key4": "2dhj2ZVLK37pKvABKvRd254BrXmv1f4c68prsxMd3h14vJfs1kkwGvWt8pn88YPxRieTtxaMnFVtQx15suiMXQzV",
  "key5": "291cU9T4AfiQinGhNbvYfMsiFHc8CWJLiozzve9nBKkhAsHpeQ4DFAsfS2xw8wc5sLVsNiihDnR2vMKS5gZNyijF",
  "key6": "3qeRCyEgiSSe5iJq9h3Lst7yThdgo7q6WtVY5uv3138ZZj8KY8JXDLEFmxNnigMSLvBCq5HzhM3SqeSbf6Z9ojQn",
  "key7": "4vHX6EkedFtitXqCQqqrCGRxDbjxZfsxR5w9t8MaMrQ8CPysJJ3EEGHm9Gq8jcaS6c7DFBqL3vmJ7EeqZYwFGbdE",
  "key8": "3NMFFE7Hds8SyXhvStic2GKRVjbEihLiD9GA3KyS7FaQpux7vQjQp23BnBXhJEUrH4Gv34nbuiGb874QnP6XsMSu",
  "key9": "5PZ44tiAeD719SKV5PNK43dYHYxvFX4R2itkS6rziXeEUzWeCNTvLc6NzhV6yFjHAdC8jv7tizG2Nkt8b2PhuyQ6",
  "key10": "5keq6PXvh4unWUHHyk8VTxNZtzqqFicGmh4Nvbbs1TmeUNHsJwHpkPcQ49mt8bKYQtnYCH7XBPRTdHBHxfQhc2pG",
  "key11": "neopoiydLDyUMM1U5ypD63PK6ANzxDzynjLW4SyU8KGyrhXydst8mFdBaqdrLpe8n33UW8uZWMPTjTHQww3kVUM",
  "key12": "4Yr3deG55ch64VhXsLdi5mdpoX2VnNBQiZbCNbcYe7YqAW5KoCvFNFSA71mTNncXq4pjAfQiFGt1PRePEYSoUmKj",
  "key13": "4JFKiDaS5DobHo3HzZF6hMg6WWRMFEPk4r91QX1VUXgjEFzxY1WW2YBgQxtbsmUirw7BfXKmcQAa9vEEyVWRZxMS",
  "key14": "2xu5tipsL5EAq6j4ENrv5dBUk12R2TShKyR2qMm8PgXQqKHj2G88ebApNkr58sjNSvvbwiVC3AZme3wxQvRPRbG4",
  "key15": "qfbUVvpiF1bE7aeQo1GMah2HNdVikoqo1ePBejDa39qWC2XWZ97XLuajztRwfvVooK9DxWFbvd5iWZr53fjurNN",
  "key16": "3eQspjG4HwSCRP3B4QC5P2pEbQw9aK25SFYebfrWy7piYaR5aisXSMovrYGQQ3s1G9fQQx5cWd5zXnQjAnuono1M",
  "key17": "27asJgAHR9eBJgrrrLerrVcLwTujJgRP5uBQeXzP4m8weLSQD79WgGb8JzXCdx8VFUpTsrAfHcxMBJ2c8pNrECaD",
  "key18": "4XRqWvqXcKjcHSkdVaPY4xzk8yRivvUxtY5bHDYoz1zRPdx5U2LbfyAwguJa7cxec5oBpRBumiwibaea3N6QmWQK",
  "key19": "vL4dD3SLFJQb7AhcZ6KNWottegXbQ8fUin6hnB6Bx9HVEzLNqrkwPMiFmhz9STWGPaCCgqURPNLFr6mNqjHRjA4",
  "key20": "4E4Tdyds9z3oqw7bWKwkuHyAvFvZfToQmjFFd4JmtHFs9hjizL6iqfqZhniVjiJjiP6BTVHdUW4fprweuiZyosYM",
  "key21": "5m5eRvD9EMyyfs78f5P9mijmiW3aeBF2JdqHuC3Rm56BLQumBrKM97GC3FjwBs8F9gVu4Rb6Xr9R8iMgksqkQbsz",
  "key22": "5JQJfAUHySV6G75Dyo4qL77buCWVhU8SVx7pyKLepknEwRwqj1BhZp5ssSfJBdztQo2hc4CMgBJhzoPdZLmvDLHk",
  "key23": "5nPz4z89RXhh2zyQJdsigcQJniWUhhEtRD7zPK6GjNqLJgJikQ76WjjW53zuqbqQGRWJBFiumzR33qtwKfKUxgSt",
  "key24": "4ZFbz9modjnz6kBd3mHCU2QAp6Vzd1boAcJQcCZXkAvEyeXg3u1UcFe3oediT8ozpvJNQP7UMpskgqd1SZwRFaU2",
  "key25": "3xStWfzXwKNd6ycjgu37mzQWFnJhLfrAT2SRVQQ9HEuYNxoqbHuUhTGquFfiru1fA2oXXmefNBNzUjwySuvzAqzZ",
  "key26": "5BrHodrqWVSRV5GD2mkaykfZJbCJqKmavc6e7FPQCJkbDmgCYQeqzopXKdjP72mKsNL7qRbxrHZNoGieMmHRnin2",
  "key27": "4VDuDUB1dmUgUTkTnxnwQq2EdGaMZo9M9UWS3zFgR1CXDs2LY7r4nKsmwgBk1eJyqGVyCtaxbhobJBhHuFaJx1oQ",
  "key28": "3FCFZC38qD8sQtTdvZros47qACVs6kXgKUL5N73YK3R5e1pLbu736EKU71zpM9KVUYwxParY3mzkqQf4m43cSdsV",
  "key29": "DoSCbDCyWtocUYKtSHoKPKAtgkx3WiUpVqjfrKiv5dmSaaWv8D1oXrXifHivwWXifktXe5id4ebdnf6VmLQGUeX",
  "key30": "2MNmVhsmUwCokAgCBKWmXiKqLitFZ4BjpVuQ9xZDdrAdEQuUdCXBDVa8b3gsw13Rmh4WvfRtCuCmjXT53AzVmdzs",
  "key31": "3kmNuYBsTz3dhjXWtvX8ewCRMaxEGocKcxeFaU9s9rZCceZPFQEwsR7g5d3o1m3Hojng4ZbvUaPrF76ndifZk8Pw",
  "key32": "mfWrenLnpdaUc5XJF5isc7ThNmvEtPgsjzuePEKkiunqMzz4d15eBqcNwe2futCsETo5BvSZfQsCorQP8Piab4R",
  "key33": "2bwMZR7BAqjESpWpxA3j4zb7WNvksQPvtBXjob4An8ymyjrUZJuEvzA1eBwrYikFymBHXfcx4hr2DmwcsTojdvi6",
  "key34": "2bAyVKgZ3mLemGhhq9wcYG2o8eXtW5vLtN4pf7uvhPEEeRBcPCr9aHFsueqsBwaSJQnzzbqj3CTDTkJUFZyh3awZ",
  "key35": "2iirKhcoa78oMYxMeTBxtjCye19sWQfXQ1oGErnSYheHJfgp4rXx5kjGj9apDYqLTMyLTTMgkVeTuCEPM47i1JMn",
  "key36": "tvCqm6uPK5gav6uKqiBERSJRYDB6XQnUrcDJu8HbiHHMjAtmiS5QmZ3meRKb4wqiu7NzqTW6Y4YyNHit11AiugY",
  "key37": "2gJraJzQGRrcU5LEbi9zK78cpwNTfJqNQ2HxUFRzmEmxA9FCBpJcaRXBmmEYFxSjsDzdrE8fTP5YzBhmGwZFftmF",
  "key38": "35uMr4gP8caGishJjN8JiumkHPgz9CKEs1WRndttBUZWD2oitHJdmacVJWdoCNQAGf1xZKwc9iXpQ5BKLfowa2j2",
  "key39": "LF2x64KR286QzjoP6EtQLUAXbdg5441kbv8avReipjvGvfLcLYVVSaba1Z9Goq5jsaF5eUHRZAdqJ2t1nhaejfc",
  "key40": "55oAh4A9cjAt1YJ5bHSY3DoUFV4do6evREKJ54xhB3smkAeFuoSCeQXisRTM1QNKAKCufp2B7CU4evQTYYNswoZw",
  "key41": "47e4r4eH324TeJQRX4aMUW5jQWseP37UFnZxNSXiLC1YUDtbKA4QWNcLKu7ectayd1SAVgWwBPT7651mvEV16CBG",
  "key42": "5tkuiFFFtUUhqqPuKtKRyEceb3crJUZPJt883xsKhos8rWKSFAodzzAztityYUqZKT3FPcD3tdKji4SRTFNfwBMM",
  "key43": "3QErMnpQKaHF8d4ZGBzUfsKcHKEQkyhk5r2KHkP7KFCjJJ9aPTtDrZ9gcdzNeuYP1uBAosbJ4eeMZzJyRCxiuM5a",
  "key44": "3JMVV12i2eMTaZ1E3uYUawunvYrMRbX4QcyKEHpk35KGt5CcmpZiJpTiCDbrDSar3FiQF7rAZBhwyfVfyCCjuuar",
  "key45": "QjWmtJa7KNDGQY8fMufNCzHJY3LZ7o8SetajDB2Dj8AYDfJSkYV2FNxsmubEatt4MJHS5tUTBXAZNHXRd3cKumg",
  "key46": "3qXthpo1eNXFYCb8M4mTik5yBjCmA95kDZNSyaVMhxA6qpR87arYxgn4S9vuZ6aNGZMBMFyQpMv14fZstELyq9fU",
  "key47": "5yvDWTzi2We2hpn2GBQx4JAwms3e2St5hJpod9Gj39vjAd53u7X8e8Ykx58HDB8FMFspLgmeRZTUWsCUZLQLAJfR"
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
