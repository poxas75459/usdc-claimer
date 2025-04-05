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
    "JTrC2xerJ86hAdWqvCTTNzVMH6TsKacTNLhujFVdr37G785YkcuGcJXKjfHCvCKbDesLGBUQHPZwvY8xoQFz9SD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "243vgKZJZiUWox3P7cKk6hxcVGr6EBD5u7nMt5rf228PiZMJEpPMdvJh7tMq4WgQdV4J6v973pBvxCiksgz5epxt",
  "key1": "2MV9y95DLu3jCu4CcwiUmTExij1YTuRLgc7ivHVc9ba1UvGSJvn5fa99zMdS7YU82dj6ETGGRAtjRZ1zcQt26S4Y",
  "key2": "52w2gfr2d8JTjYzwxVJxSzYwa9e6pUe8sVoZCa4fPXmtWm1hK94PBJ6XEtZuokUTuT2oNtt4xoT7BYn9PR26vE6J",
  "key3": "anx5LGTyz7eG1P3SXJBagkfmjo9VQN4h6SYHFcbVSdgAesZoWMEQiUMofn111AwaK81tSfZ5Sb8jm9pxrGwvhFu",
  "key4": "35aNePjBih8PFt8nciFjVdqryG7ReHsVZqcj9KH8R1ofc1zdXJgqAQ5C2Gp3RsupNGd4Ah83dmSRHmzgim82xFvQ",
  "key5": "5PAQm2kBebmY9M6Cr6Ev8DPkqQhkYq523V9iFiM8DzBhLYXbCY9KQJtqFNvhuYw3vas7P1ReMnpYB3T3knTjf2KQ",
  "key6": "4jNnTieMVpF2oXGWQqBPFGe8s275JaYgpiyfhkqmkSa1A2GViq7k22spHpqSCsFMB2xCQPdUnv74Cga3f56HPrd2",
  "key7": "46a7xk5Vg9yCwNhheRE26GZswawusiAftSKnuKh8PGcGuGRixe9UgHL5dp32CYDUftNmnvmPPVHMHM1mfEjYPr7C",
  "key8": "2Xsg6cszzTRKGPVdKFYA2WwFxV3pEzKeoRKhPVLJCLTUYrj44sg6MEB1RQCD5ZBZb1vycNju5dpvUe1KZrD9aLBX",
  "key9": "3jded7ee3DMCEGN3pv76miD77btYVh24SrEv8wTcGn33tZFpLWZzqwN2TKAZiKpzLbdSJMC7czzE3gPmycjncj9Z",
  "key10": "YCANRnB4Qh3DmjDmmnVyzfH3P5vx742zTx54MfNg4DMKs65k66pZz9RgTZhKKGtN73FPJcUzHEyqmgDvGvuSH4Q",
  "key11": "4RMbG5xDenEPqvRCcGnenks2AgsUbGCfs8f5atrznCJNFQT8mcQgWLJp2KcRLzmwUiHqsDfJ4Wi57u1Dw7rmULzb",
  "key12": "3NgPMCvGbBoSHsRALssGhoyriBoSL8CneGdDupFRuRsAN5hhS2uyCTPdgCun2j1YtRVJG3hm7y7d2YNZTsVYymvo",
  "key13": "58qAqEZvFaeCBQzWv5H5ToLP47gva7e2Me6694885zXTQtGY5NMn8LV5y4kq9xFoY3meCe19pULw6Y4csG8GjLTH",
  "key14": "5DH2H7smQLgj5VqT89JvvgEiRxzxR9znsW1m4s5iqRewR2FyASbRUuwGsUA26x2mXQEVwzdHaTaSHDh5rDpzHpYA",
  "key15": "22BzNgBn4JfHnS3WVPmrhXv4s2bbq342rJojoooEncUodZMaWHNkbMPrnSmis7wft2YiqXaK5GQLH4ymku9JM8Ji",
  "key16": "4HagcLiqJaFnxKjd7w9D9UhvBTQ7HvKRgsdboLWqx253ySerYkC261qTsNc6LVfvrwZKTjiqjU2TF6igKoSes3vy",
  "key17": "3Xq7h4tN6U1gVQP7hqrwEjomwUzjgPVmTqEKmJ6ZTH5Bwt78Un8XjRWjhGURmo9ANC7mDN31DUQRGvPJWtgmhoed",
  "key18": "3dF4hwBJYYc7VJVfiTperMj75QrkLXeZt8rswgzA8rK9adAjjukVuBLGwKjiJTMsuMUZTXazX34Uh7SAsx7YpjTf",
  "key19": "5RWk79o4fXnf7hfY9XMaV8xiMAgiVBfJHaxtk1qeqg68Wzox1vNcnHdJPtrTyTmxJhSNMiZc3AKpCJoppUcSQdCK",
  "key20": "3uNzVtSzR4hFTNDxoRGWVoEMa84ZcGmT2Nt27EaLteM6BNfpKJhrR53bb4UxqnKD8rqaY9q9kFYqFpu3jgdUhXx2",
  "key21": "59xUURUiBdJH6164W6CfDVeaaFhFGd6ezgfKCCa2NnzE3K8KCbqDyjBR8FEMgpwU6hvRvCrAafk1NQMZjW4SAGuU",
  "key22": "2YvTMx93XUwhkQj7vxD81siMTdfeZRBVm9cs5nQzXCd63ER9DmY4sPYcG14tAURaayhuJ8QFTEjqAMYb5qi6XoZZ",
  "key23": "2qVimfwWx9Vse9yyr5H2S1mrNo1krMqmnc2dkWsgLpjsh6e9prbf1HaUjHdaNd9ZV69FFcSphhebeN4y7bR9kHBM",
  "key24": "2My3MDU2j9PVrikPNKU99rJctqDWkXeiNcJspsUHBPqBroUhcvK514iWJGNWjq3JKs5776i5ma7FErqY9PXxpqLp",
  "key25": "wr4RHyd889VahyLh2gqxULiZgFr4UJtokaiQdj5PrU9vtKcGYd1UinNBag1nag2dtFqQ7a9XeH7dw2GbcM3A6qD",
  "key26": "65rYATmAaWobP2bY27EPemhChcn5BwzcxTbmSurYXSrcFbonhfFe9x7uryJFXdt18GKbcHwVUaAqWkTHgv4abeqL",
  "key27": "gJ5D99fhFTwawsAiP6sTuczw8Mb4Xp4zSh5PrLJopzmd8KBMFgC5XQ75CVuCsfcDf8XUT1VSUbEg5PXPte8A6co",
  "key28": "2UtPTcX2uNLQSZ86bJx8GecDWFwW4ZRJeXnssSv4fk3qm3cnj4vSB6LXngcFMqa44ghezLFFE6LFLRtxCezNPR8Y",
  "key29": "8f3DmJ6QntGj4URFZai7JMKj9pAoZp51v2xFXnUcVGZY2UokJnwmECnwyiyL7tBVAsNGWxF3ZBF8Vp4R1awHqgN",
  "key30": "3dSyo4FUkgELAWgnk5yR27N51pQKxa24SSMAUWvY9Qa1jSvs3kyCLxh1GT3yhsKSWSsFR1y552wB9TMARNpc4Z9L",
  "key31": "5epL3w2uhzhK1XjsTdy427d7rc8py9zGiVuYZK9nSVYNb3arACqYPBA7rn7dcfRkNUQdLNgaVZRZcHD2duYndep1",
  "key32": "5M1AXC26uLiTwKvcFFoGeSW5CaKEAu445WdGdsjnsz1wSW4Ce9WNKqkeoNmhWmY27rP5jWHE7Pn2kEZp2bTDQHpQ",
  "key33": "4A6WMbtqTjJ7YmXm6mRH2UiWuasoR5ARKaXG64oSpzh6ZRQ4ENaS3ogLYfoXU5wN8C5zej3CiKjeKSTk3aYZcSLN",
  "key34": "66WPGyfGceNxasTYA1VJ2F3chWgRBP49KAZck6dYKssBNVKasPsnjrB4TiC8rtvQwH3kbxSqbT35J2tsbmoBdx6o",
  "key35": "5SjBvybqeLrq878LxnDoMY45WmVHdz6sTymync3xqa1cnigWqxAQnRwb1HtmYKBFbBEVZ78q1RKhA7XpWq8U14hv",
  "key36": "38hEmdzt2WKNGbEHFhMoGNuAzsSVLpwBM8SSZR5z31WKQTXtFk46e69fJFehYeqTkB1k4yuNdejvLhfPpTFfabek",
  "key37": "jAgAZCdVwiCUPfig3DTJ6ru8wGYcCoWEmcdw8fkFXajSquRVSo31mbGyG1rmWQCFpjiZsA4wesAWu3M5Sjhpkbp",
  "key38": "3iJdpm3MwreiQukAZTFj7oyJjdeGvaV1PWCJ9KyKNWVuqFamod8E7wQ8vCgRfidY3YwpCgke4ccqHiy1HvqbRSAQ"
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
