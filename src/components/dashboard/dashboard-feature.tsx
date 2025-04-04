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
    "5c2N8Qi7xh17MUWjNerrD1QuKe3GSxbFPHk3DpCXMkJHHdJ5aAGEJZWKKBnn42fLqLX6gfTNhcRG5mfhKBnDMZgh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3RoDxAKD4fjWTW1MAqJoq3J1rYE6h8JQP6B3uJXZigU9ye7bymyiWHpjtCZxbmALqya1U8JsqCxEqwLchjscfe2F",
  "key1": "WmkW7L6UaXz63buC9J4i3NeP5SC4Cm3eFvCC5JUxPqx2HkBxPceBYrVMT14pnzoVrrCxhvGdKpq1zmjaQjumRNL",
  "key2": "2ndRQM8zSSeSiBFLsXw4UiWEsryHp8P5oTVpizrBEQPHXDyYoDSmyHVLJiQhTXjHBH7zAZv15ycjpQDU4hcXyDhs",
  "key3": "4LkYaeGyAy5A6nMyfBrYRNn1u7DtKpxR9g2nEJgsxD5r2wMZ6ZSQmLhbeB6EghMbXdXiYUf2xoSJxhEqJjQbQzS4",
  "key4": "iGw6VuMT97u8UeyqNot9P8GEakbN3tAgx5QnYqTA7GqQcy6nuMspnEtdy1sRG7Xvv1u8RVYdNV6G9o4RQ4VVfvc",
  "key5": "539BeatAcsQUShyymD4swro9JP5YDL378cFDmBQLonr5ViUsFNdXND7koNhS3EtRfSSunktXGiG38isoazPAXBcQ",
  "key6": "jS99gszm8egSaHQaEeRyZ8g4RnN4RDf5X5Ps3hGHjMbBLCuzjWC6r3QjQh92WoKtmRRHkgvgDnxPrJjuDs18GxH",
  "key7": "5EoatrjirDMhVAGN2Rkb4FGTFkDNzmk3iwnFNoJL167f4TNsAynDrL3H1UmXviSEidHdsEhEbVBHVpk6YbeMQX2G",
  "key8": "2Gt9kEMJQprnsVbCJ7op79sLfwhijDg3rfKEC48jrbHBxR93zRje2ocgGUrdHiDBbjpdRNmqf7F3Py8K7UmdqCXP",
  "key9": "3s85499mmqYn137v7Jb7T2JqenrJVJzA8L1DSxWJzgF1Wsi3hAMjtgaDSMYekrX3CWgt5X83sSd5FdDqLfM3hihF",
  "key10": "5jiq9UMLg9iRckRs61wBzQvdUmWNsCfRnEhE3yHm6u78HVBLQxTCRAhMLUVACEvA2xUWhf8mVviEBtTaNMAcfbrR",
  "key11": "4ZhvZY1Ww7GdqTTBoBjXQJhDSBFFdyfkLTUzk2q5KFAcuyw8PxMe5GBYBF2BbL7QFgJjEdPHWNcrZ6oaFd1FDyCr",
  "key12": "3HeLDoj2AwfcDs3GjMo2caPdJMfBMwqW4NTNeLbdJMEsB8Czkyk6QiENZ4gHPJua3VfgqPfGjrF1qkSWrfkN7pdL",
  "key13": "3zThK6m68PjvxHW2P8pnd1Ym44qqasvn9nPM8S8vPzFJrFWFsUmpTfnHF8RuQKXZTAKXokfRLXVH7gAdxra8Pznv",
  "key14": "8BjHpERfdvh1D4BptZHC1qZNRVFxwSyNNcAPJf8nj9Ra5Qzy3ZpJ4x6G1XN8HrpPrXWuh5YXU3o5J5d7PDrR3YW",
  "key15": "4yZWbmy3LUuTH7haGyndfpAiWRTiCN1NkG2vys446rk91epwypS2GXYdnSjpCx5Xwuw9MuNjCxHEFRWU4sze1zJj",
  "key16": "2cv9PbXNGJZpjP7uQ7pzp9JNX6YnXptXCkdvDUfFQWaGfWv8Vd8ZzZYkwqj5EvszQysoUYnpkQTiRPP3DS3Rq7wd",
  "key17": "42aQWxJAG6qHJfdbtEGqyYCB95ahGcii9PKwP7Mv7bfsbSCtCniffvFswhtYEseGURYgVvLKyzczWaqWcY6yuvjL",
  "key18": "4vcJN5Bv6idexZDDCAPAS2grCSvjDLJKhwgGCwEnXgzDHZuqv8AtMJ19kP1akN6BadV3GGBr8Doo7CkXL3yQQWLT",
  "key19": "5Yidiw6vqh9meZq8bzLMtWckK8H8AUQhtMdMXaSGLCdNjiCWw4EKBkfBqMUY6Q3b3t9zEh1rxZCjnwNtP46sf5DN",
  "key20": "YTSymfiPVR2qUUQ2q36NvyscCTYE76EFihL3848mkwnGWQKowzoXpnxThyQdgDtR8iUHghwWE5XFb4EwyYsY5WS",
  "key21": "5AjYNCHgp7uA9p1eT47hL4ocaWhwcgsZMeyguy1J6kJ5RYKssiyjAJHbS5VM5Qxz7zW4Bk8iQrjMMUY1UFoaqmWM",
  "key22": "2HdEJatkvneZ79YeeA2vDKH45EWgEX7jVojdDUznzZLip3zuaC416iS9KUyssqJisQ8JNUVDpjZuk2LMVuJis7Kc",
  "key23": "5p83za52W1AkBhvBUnN2eusu2N7xMFfnuLVa2ZLF9sBkKuoCSX8n8xySJxhyPui2TQ2A7SQ4CTG1fGHxqpFjC1DB",
  "key24": "5rfuVPdKvhnKVxTjAADiaBHYL1ud9ieAFBTbyQ5RTg8WvEc9ef86RzkzaT9S9eM7ruvsZEq2WswUJpDFcXoFufQ8",
  "key25": "3DTk5ELtwubXkcYJgfuKSmzuysKeDg6s2ziqAGUDHhqr5RYsAzQgSWL1YBLGxVaoJ7r1WL7kqoSGc7GVoffqn3yL",
  "key26": "2yj2n8zejEixG5Su9EvYZ9NwdfRZbYYpSpXrSngqFq6L5tNMuFnu8oik4MXs6Td43dYW9WWwcEkcgSMEQB4UwCkz"
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
