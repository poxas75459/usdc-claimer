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
    "559K3v8Te32NSSR1bGZfpqAqPi6hkwmYN5UmjA7NddRgTtYami8x7cVgqLcPMtuJFzZycnAiqgNmDWYaJohXAEVQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "667QLwb12iZ55f3P6Wo3zGZLiThAKroJTrszepYuuPAe8HNSm6tZtjNhCNCeNF7UmyDBwRSp8jzXG1VU73Mkkyah",
  "key1": "4ABSn34jQsoumsq5KH87woTDj2rHbtyrVovh7N6HUkv4kC7a9iyRY83WaM4cE5Ysh4neSGgbtY5yLtsryt75eAuA",
  "key2": "345ULALYGffKeYk8nUWYSgPGmHfeqo5zCyyT9aKaWm7SVZZAv28HtbSj68ErSLYW8haewx3Zkwzzv4dYCPki8WfZ",
  "key3": "45bWMd4Y1uHaVgghP5ffGXgCCMS4PVWKwe97wmMqZ8rkjccMyY5RTknTTxdMoiLwXc8gg4yh6u2RA5NYnBjVGSUr",
  "key4": "2LuqfnkN5tmMErHtU67SQXazcdtqP7C7PVBnc12RgPBorUkGUtfN86sJt1GmMQrMetck2Zupu9pf6k6gz5sG99rW",
  "key5": "4HLUi7nVWE4YMHYEtckjvmJAhEYRohHCx58gxSiaoXQiruNM3VXcjCLxE1N7hkA4gimHxTKu4PPxMj7S7XQLMXr2",
  "key6": "ZTxf3yC9ePK9xfebcWxSehCYJACT9rdG6XAwNN8WbJQgQZEoAJcuHUo6VhVFEa9hv2FKJfd2na9gry54rndVAwj",
  "key7": "55Y611mRcrS2qmzR4bVkoorqSkiAeZfbroAapgfCbjd8jQfjRjiTABgq5rS9tYDUYnZWmHzhimfWw82qVufJFDaE",
  "key8": "2kT4ZEhV5RALdHiJBgjJ3i8EUsHVH4BXQS9Sr5GGLirhhffSews6jPSn8WBqMa7oysgXpWMRwN8RDUULtbe5JN6V",
  "key9": "55FWJ4kU4ihnVzBQhprKu7aymDsZ9M1nCsUeudJWWSBcS6gWmfK9BvGEG5LhwrBiQMvgFsrHpfLUZNTbjB4PiHsh",
  "key10": "5bHJ9eidP8yE7mSUAEgujPUnb2mLcqtukPP7aLe6q3zh33QPTiKryGQZoR9GBZYyHPbSyJze7Cz3HAvcHV7wNomR",
  "key11": "3UGrJfx2trvfy7e93M3huxXcFXtzYSGUNaYGnTk7d8Zyvy1LnicyxE6xxkSLgocZpwY9zrFAbEEmuufpJZaNZaRk",
  "key12": "PhdJ7oKeqHA3MjzS9poZ1XrcDA6HBjoFsRRDpiYCAd22iM4z9Bhs5FafPwBPsVWTeYe4GehPccMdnYH3hce6rBe",
  "key13": "1AXzhAw2q2KAWugBGF7SW4QeoFAqh64HiaWSk3wQHKtm4Janh5TY3aysWNJx27VEZ2LkTAvGQUBMnYqeTrVAHvZ",
  "key14": "26bRtTfPytNM5QYo8tnRcFnPbt3qopXR2oXXZjrmdKonq9ecqeYxCEXtn1t1ZEBoLGsWacRTLjFrvySzixsZtN9G",
  "key15": "3izkvFPAXxBzEDSLT2JLBjTni3twHpe9LFhsC4vwUFpmnByGbb14rFBgFCudSxMWEjyMSCRm9CxwBTjhtCotwyc6",
  "key16": "3xUhjwEccGE5q6pRRmRw1ZWTrNPaKfbpJCaHhmSNEjVCPPUNPm39B4JYEA7mkzj1ogtg6vqBFfijUCSdRAnz1rbv",
  "key17": "5t9JAbM2Dae3iZKSo2a2G4C6gr7STW7L2tdWdR476xPYh4EtZgfzMfxxoRDPLNM2z8aucE1zkdzNoyXUkubdCAwg",
  "key18": "3QLwfpBhdVRjyyQDjsCen5XyZxhJQfsxgtDcwSPhVUCyFZYsYEvpPpZi3rFtbsVZAtvqG4oDme5XdZzWFcyMmC8Z",
  "key19": "3DA7de3HH4C9Rekg4CKENFZEZwARrHPuwUsZm1K4Uuv8cBB4Ut1W7Uz9Au7g3e45YE48ygcgJU5nejrYqFsZ9Mi4",
  "key20": "2e3PvvALp66UNieVe5ck43g4u6M4oRYg8bGY2ABnrRKtn6Gf1Xk3hkxyDFF9ANDeH9cwUAjBKLQYBJZfYUK5p1iD",
  "key21": "5vp1FZgdLerAGhTfe4RB2ddmqTGnp4vWmiHkR3EVftF3ypajrBrUPHGcrnkGwgr1SifQqbjsc8Aq23Gr1xZVQP5K",
  "key22": "57TY6C95uYtKYDEW9WjYqdAtdisyiH78FdTYEuC8cy1yNCk15jshrc6pddtTGoH1CtL8yfWJmCvzoxdiw7SQ22Vq",
  "key23": "2RKM1NeJS9YwpKAigKyzYswg9FBhvQwgTqcpYs7fPr3q49H3AZZjcuDaNReW3scRgFtuUyJoNF7WtTEgbVtHR8Qn",
  "key24": "5u3NsHzCo1CuAdC2W1YkTtx6DsESrquGSBKjAJfVTarh3bCgdvL3goL5yBY4N75qJFzkQELGcEEwC8osp6x1NPbE",
  "key25": "uYJubW4AZeRj2nTZtBBFpjzRAdRsstWdkUXB5gaMEHFahnpFasxUMfgLR2kq5tW5MS5H6AgLHh8Atz6QoVrdAdS",
  "key26": "42N6nn4yUnJ7wmbq5mBxizz5UpYTWm3dUVYYfGcxAsUEGWyz7hGifNiSWXdRzApPQqN4sd4PYU8x7Xt16VJKeFgy",
  "key27": "61yYVnt45ZNqpN7eL3WdRrzqdyVV7wEyud8JjULdtBhBrpuqNf1cWkG8jHCrCMLK4krmiPn3cnoZ82Kha7uRUyBB",
  "key28": "2ZxrXXiXrq6RvgbvbdfcWN62YxvMAKbdXBGmZmSwj3F7t4nzKHj7PGAThL7GoSYSwBpDP6Cw7113a1NWK2VUC2Qr",
  "key29": "3oZ9BJhbyDR6gvBYkdanY7hUC3gSA4MFvE7D5dSBYSiWhEtk9i2fZAdkVmifq5no2m2wzmdtfoUffRfJDUyCGcy9",
  "key30": "5WwTcG6f1KEo84R9t6DqAqC7sY6yHpMViMvrwEL8xBeSvCVN84agNpEc84j93Bwu2Fe5qeheywQ3fynhAZXgYuw8",
  "key31": "51yDjdqHt1sLHFpJaU4hxPvaP9js6zRZRFHNHC8sayUUxEsVGhDEWMrhRcARoXnkcxGvJugdQR2oL8WvaV4zfjLx",
  "key32": "5r81VoYjh4pCPSjEbrLW4PWEhGRBpdLP7fYP8r4SUeuWRsXJqypNdnr7yMKpsGEqcjKagGs4XwyZZ5YRBTAJDM84",
  "key33": "36wXccqi9tmqn8PuWNFvhYhk3tzeCuKjD12mSmMTR3pxiWCQ9eiFW9dX6UcepJe1MDdAjqxgU62wwu1GGkSmvvhj",
  "key34": "2AzNFgShX3jGrYhCypGDqZVen1VwzMfNGx4uBcnSFVT9wDvi17wbNTWCxAX3vGXSVQqHmyzkPCqLn6u4zNWTkfzW"
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
