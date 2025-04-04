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
    "toDmsBaaArsVNezouNh5FLByM9p99iAQQv8Gknk1MaJoS8E9SwwVQpcgNZaFYKQWrKAmSHTYCrdGvbFwMseAb6L"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2uxRr24Vs7ByUeTtdSUKrWxnB5hkfZKXEhCHHtxSzZP2HS7LZTyBXyWbEzCRg3BFBBLCFQFKxudWe4xwFFFWWzJd",
  "key1": "fRsB7KMaVJs7fmYGqP8LvLKi8EoGwvWTLH4my6mjSjnuisLTPwPA5wRzWHgtNnFAitH6ZNHaNn6Z7qpbxhqULYi",
  "key2": "YSo2GUEdfuaUR6m6yF8bufpTewz3Etg9uTnHU84JjMxCtmseB92MSYBMyr4AQ1EwBWtckXVoDFi8TGAX9h9CTmF",
  "key3": "rbd4pbv6weXgmE7X6ceE12LhCAnak44Gz6VvKAd9yfoMt4wZ6U6fFjuApjdwF2QGDmQjFKRBYfd4ZeBKLhh13kE",
  "key4": "5AE2G9ppBUTX5EigfZ34yrZMxzBkYkrVGeL347WMa7jECPQVdWk22hc4oM68LNiygGVsJhKD9ZimhnfnFVBW6kPF",
  "key5": "5i91ExtJvJXvcoTEco3NXoYM6nMf2yBp6V9UXzaYPb8wWiYqbVr54r3EtAnbNWF1MczUm8RXTouP1si9HXPv7aDx",
  "key6": "21JQwQe73R6cEZpNhDpzzuLNdPDJMMnZT8wxV2WpprUsCxzRx4pK7arseBxLZTv2FXrwH578LVRZh41ZV8kdRY1m",
  "key7": "4vqxsByp9Wrju1kb795aEYnJjXfkGTh2HcQyz7yayxEHN8xZNt6aBpp221XhpGvtrgFTSRgKxm5wf9XkLKiDhxnm",
  "key8": "3mnWrdRCwUYvWatqUroS1dAbhJBWhdHat9D4LfXjkHdbKfEmCaPmArmzt6knQj92CJDwvLH3Gxt8hkhnsE7NMEc1",
  "key9": "2AygWY7HjgZT49YzETJsFJ2ENkNsvAy6jjgToGE8fKh756jSDNbLbKoth27x1A2NguqUejff9syPYGjA1RJsqsgQ",
  "key10": "Brie9h6hPT18CuCBiHjY7AdgXwdG7u5NET7RcYp8EE65suiu95eaPpR6hQNd4f6FbyqjiUjvq4vM3Je13TU6Cxb",
  "key11": "5gTWtEVXPD6oSVtaWiTDKiTFeyhPBTcb369JCMNZsV9xYoz3dBua2dsLKHGKSwGwNq131nxWqbA7eT8ZSzFCQtEA",
  "key12": "5eDgGPMeiYvdr9m12YxnyYgeNkNKxXnP4MqCaJxKxvSYR1w2o912HjRc8t2tesFqNyYsN45WV5xdYZA7QTHkCycG",
  "key13": "2VDAkYzkPggqozufXaQZ4nKQac3cJy1o4hAyNirFTnQKrJnBAPMhrTfryFNmUHbevH6hX2exTdhJuwsdndJYyfjS",
  "key14": "2HQx9ip6Wzv8qFrL4FS7bsZQ7uSrbUrj7gYg35uH8qvSNdYUasyLFisDaFWiYefbHtYtbSAXR4Di3ayBjwi5EPip",
  "key15": "3YRkoAHq1NbP5EjuxuUmRnFcCJVJizEyzxM26tz6CNQZA9MRLcbvKpYBkPX1mrcqoHdp58ugYLTags8w3vis1c35",
  "key16": "32KQmDfjwsFw7cvSaXiiqFdSUFyKL4TH4xZ2JS2AZkYBSgE1z6WbV3mCaeKKYDKhyG8sBiPfaVAnbUmtXqgaWmnn",
  "key17": "amXm7i9rV3njHzLMecw7oaN7pHbfyC9eJR15yqSfovHqC1giqHaPoN5233wGxJzpQQtA8bBeE3Aymun6eFdLtCh",
  "key18": "4VuDu1dPJycwH2XZGekB7ThrsrakC1Bc2F8LDwPqJMnhi63hzXnmP7rY5GtAuv1sKVrL7pCDjjptDUrbYdiJEgNQ",
  "key19": "2gEWX6ot2VhnK31masmqTPj8GpoeghrZWhMbTJ8LgymXgy8MoSpKU9H5P8mERHAqbnWoLehJFnioEnSuFZh89Hgz",
  "key20": "uaH6izSRSKLr86tg35o3QFSMprf7zSB9cVmpYKKMh3NHePdY14Pxp5T9AoVasbzTrMjeSAHEn6toMjHjH4vrH7t",
  "key21": "5wYLCddShApfpPEnhPvAiwMytb9atNSDMJveLSkrj2Vqg7WYqCzmozeQa5EM2Y9yzBUroepzCTEjxRaBDEHA1JA3",
  "key22": "SSkijXMTvS7xxfTpUWrKaqsFeSxuK1r7ny3U1rEafjoicgCMnyLufMJwkzfBqfx8TbshWqkpxtsSKBVm4Q7Lwdh",
  "key23": "5L7UVeqYRvgjvEAhNR2eAbEUetDEwtwKNVnCn273Aq3pNfLs9Fb1XPzxeSWSbSDPSQjVa43S4oKPdNWqfCdec55T",
  "key24": "43NTPAfteQmadXeKmZT9g8McTbsRcXyymyyLKimBzwu4XZxgddJHwkKkKZe9qMwPBFSJLEMgyeNDkPupMqCgB2nb",
  "key25": "54zHZScjS3CSFhGx7Hbs1EiYtoLJW4k499wRtnfT9FJQYdVT1EVyHemh5Xmv8SbcCZmRSVyd9TVx9Y3Zw6E1L7tA",
  "key26": "5H7nhxU3ScXRrQw1JNUuiqqDpGpx8xQqSR8HSdS8KAm3MowW6PmvANXmSopCEsaUAbTDq2H5BSiKhPppFZhPJERG",
  "key27": "nHRMcqh1fX8pS2xzvms3KRLqaVQ2gxR3KLogqUcjcxEMXs5EJeo23rjtBosUUGSAGgSXexYDwLg98AhNKjQ7aaw",
  "key28": "4wzL3nAaGgi84HqQWmCnFS2qohhzmcSFozejRdmX3BM41SxttRVgiMVEakrdhaEgqKtejB4GM1eqkXeRdVVVHf1y",
  "key29": "4p7Ytmg1zayN6U187ETPoqURBQHjWyNP3G2XZMxFoB6MMPL8jHYy3wfWXziNmyUkQ5Qw2i1W9WDU2nJHVmiGwV4N",
  "key30": "37rL8SM2Mq8fubLKpHLQfV3dfBo6KxfS9irJQxaWeHXKx5tUv7dusCywQrXkcJ2A32yoXtq8huEhx2TBsqeuWFP2",
  "key31": "27pdNFDnphS1bacoUqzorbMDG13gedsfa7it1aN5F9enTVRFryS13kEBN4r39hxJ63UyqLPUVTRPubuzVi8fjs8U"
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
