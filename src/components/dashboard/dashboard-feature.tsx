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
    "4M27bz6oX7maR8Q4PmoXCArA3TX9dLjcQv8vY3F2bboUnXJUECnevgT297ownhTqWPkPaQJ4dmMmmmK8Kv4eFbRW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5jH5qv4s85Ln9zXyY6QwA2m65PZVpD1bFn39W6KTD6kyJ5CNtcGgUFiADyrFnjN5nFBpGXJn4Y5hfMmKTLeLyP8B",
  "key1": "29Qv7P7Q6N5KmGyCK6nFpFqreP2wTUD6jTku9scCHSvtGuUNVLUAg5garGTd8weQxfMsKu6YraW1ppgtrdEJ3PKZ",
  "key2": "5CxDHkp6hQPyF7eUjt7UYJjFTPUDBT4suC1LzKufjtyHajWeTyNAMtgDcEDA6p9PrXH98vJpG8vX3WunKkmnBdiy",
  "key3": "DTu6Wtykury79nre1r4KEoEqLgKiVhj3v2tcAWYzypbg8r6b9YruZNP25dciEJPJpe3hLEqdiUjXycSuoXx7bYH",
  "key4": "5JykcY26EYmy8MJxipNMimNFmknyN1N3cjmWNyoSsa9v6U4ZtMbN2uNwem7s5SvNMDA4SCBVFBXsWV1GuiAxc4oP",
  "key5": "WAwxduvLfJYm4zYf3xDcQPmdRG6kja4Bjd6NXpkQQmoGBjiMcVkmbtpEXXvc8uKXJgYKB4rzgMXxHDfDM8AtF4m",
  "key6": "5M1dsfbZ7oPxZ6KxgH1kwEP224pKpyFgBPKyhbNkeM89waEX8TPjtqRB4GJaNo9wwsbBCVK6Zn9wC67SofFgSrNx",
  "key7": "uoqMScqa7UzPBzBZt7xNpfCx3hoixXkj1D7jF2kSHQqPjEmfjkhU6oNCR8HPSPqh3h9HvsgRbnm22tFP3tntVuW",
  "key8": "2FQUEEFFzo7u6uBwz8e12zCfZqDi8NX9qLnGWk3Y7HByvTNxb9svMETDxbxupu6xqSNnR7hb6JsnM4nXd3VduExx",
  "key9": "5Z7fPRS3skRnfq75M2qxBReVtxMWX2tU63HefEMgr7r7BYasXiJzPri8LW8TeNMjAGUUwBDsopzBz7oZbtTb2C1d",
  "key10": "2eRDyv5sgVzoLM7PaCr6ZyS4rHDXxqgYU9HBUbL5TeVfMcCXDMcjGPj9D5rUSZwv5hpuTLqVhpW3TytPBxPFcG9r",
  "key11": "86zDcAL9vuqg3LEhiFDNMMxgFrsF5cJLn8DhtDwHfvboHQMCPnFdSoE28Bnh5NbjZk2V5XSxb3wK8L8BvwgQ38D",
  "key12": "4seeMDDn7Ekai6mNMpaSW12kxb4DWbdfQsnunUGaGeAgnX7cxS6BDfhgUHdVuVfBx2jwjVoXCqwC7Q3fHjzgp5LF",
  "key13": "2Df5ENVnG7pKWDMiGZjRBf2uzKNDkxsw3AVaDouLTR5iku84vDn4eUaTVFHff2Z6JNCC9YdaDc9k8YwvizQLx23K",
  "key14": "3PJTUZx6DrYe2o8Y2jrSW1sN6pp7Q2coyHsR8qaubg3GQ5njDN7xM91cH39upvykXiPqyEv61GRiH6wBG83856Ns",
  "key15": "p3eiyQs8EyxCNV2G928HBtMiqnFQ88Uv1PtDovwxrr5ix56hwV1c6EQtbzjWtP9CrD7bYgxLpjJfdyTbRjCU8YG",
  "key16": "2kx2tCifC6L1awCCf23KFPmFDTFd2Pk3FQjoZLZ6HcYpSkqBbdWFGnwX7LC9qa476CokTPRs9ErC9ddSBehX132H",
  "key17": "59rZMZ3Ksownp51uB9bKcmr9JbmHvPJi15jXU7Ek8A8ERYpaTFjbYJpzoc4k7Kymi16GcjqNGhcEKnoFf1vKo8VP",
  "key18": "UHaKhQ3iAR3zQSCmXC6ePsMShWJcomihckdWDZotWvNRF3pTU3rCcX5Dmo48oiYs1mx4N19K62t2ck5xTd7roRE",
  "key19": "2ASvsAvt7MLcksyDuMiRmPJkRgPyDWFQWvRTXu9UQ42jtbVKfKyuLbmXLj6KLGU9FhWWe1s6NhCUqmcd6APb2wed",
  "key20": "38vJP3B3Ujymd6NEbhFvzA6phUu4zPHfkk5iJXhL6RqDgVPJeGcdhAemRLReXbJUGnieT6jse51dCRKT3JMPhNAN",
  "key21": "2vaLzvMT38w6dBhwnVEwv7mySg4NNBiAwbQXuP6L2n5XXrav7bVmqNfFGSESM6jdeXKmWiGbyEzqXNQHuCEih67y",
  "key22": "5LAoC8jG9EMwoZmwQDjztjMh358fADWXTJLYTGqAiu8n2Ur9MHKKQv6dbMD3hTt4dPjVG3daeAE6drxgmV5G3Taq",
  "key23": "UFwJ4LtRsSokBcF2ro8rhAQ7eM7M5ppVfM6RbM3xDfpt7Bxyi2yPxPt25bwZZkAiozBXcurFcDrYPCxKojLtuzr",
  "key24": "4nvMayK8Ms41anLi7hWN6dCTifB1FZdxp7mxsKX9RfuxtYL6JRWTyzzzn22AypwqbWzeckawGhnMWaJosmHrq5zp",
  "key25": "3bk7i3xsjf8Zg9GmmSBMYeMLrRo4ta2MbnPs8sgyXiVhT56kcfSgUsuDPCpZR9yv8kP8BBUvo9sABZJdFLRFKnTq",
  "key26": "5zM2N4Z3NM4QP6sJrggrRzUJVCu9iSAemDfc2m4roD22ymBB7iGDhHkdqrNEbtgju4EoJUe5aft3FeZyzTrtkerE",
  "key27": "d9i262bDEpfbxu3qfYF9DorMtMzNh4q5f44P3CXFEpJfTSNREXBAovhG6v7XPBAaJoEahPfbkrMmoEJ4ZHCg1UJ",
  "key28": "3mTR9JKUqxJu4EtiFyenzD5yV5zn7bwo3YWseJm7PLfLmforiMiUZeBqdcAxSrDb9AmXo5cD5c5Msvi3Z4KPuvxa",
  "key29": "Laybtcj4SSzuMrnGeJuBWSETtcoxz4fRf4p6LBG9gC8UGNoG4QQXxmyn6k2Su7Yxs5jrqQTvfhChWrf7d54Md13",
  "key30": "2EduRJPAozc5zBzGu3GQFsjKKurmshXmxAb4dRJq2SSiQQe5F5JsQxFmaLr4GwXrkeJnH3vLpUFduN7LxyZydH47",
  "key31": "q58mumBPEisfy1yWzjyyvktLwYAYorX3T22jS1wNhi7eMDqBTWrag4712eedD8ovzJYwmr4CuFKqcrerpVx8XWP"
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
