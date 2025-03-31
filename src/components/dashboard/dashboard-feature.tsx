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
    "5aoHNPiFvb47sHyepGSqTgqM8w2qLwmiykZT3MhJEcSJhh6o9c1UN1Hy1AkQ8atFVXggoLrwU8S1V1SWRxWfqPxC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31dibo6ZGJJmKC3DmqBxNboSDodutwHCWZY6WvhJomZZuqHMQGwubjYks81DxbWyyZWMTZSvToCM82YzmGLsyfHZ",
  "key1": "3nx8P8ZsoM1hsrQBrv24LBonpPTWHJ4f9MhRo49KdSLvPrE91WnHGCWRb5h88AVHao8gN3THZw29nc2PAYttkes6",
  "key2": "5QmqzK49DwHFELaqJRWH9qASbx75rUMW4GojqfDA1Ef57omYszCY9qPMbVx4i4CsvxKUaWJyvcrf4hd9SRsmy3Ke",
  "key3": "46bRVZFzymvBusLHpJsGW5TRU1BiUeacfGoPw1mQ7u2JRgkRjzGiTtnbDxnSBfY2ohbWfkuu8ujwBZKwhP54u9Aj",
  "key4": "4Jsj3otV9713Wu6i1cA26t2spTKJ7wCyYpL7PpNX4b41L2tMSGag8d3JY5taP5mjjnHURBvfmD5rir6qURcb1Ere",
  "key5": "4NZgfC2kxDW22Xh31i4hGFyvUWerKcqepTZJHtpWDzAUzTyWZPQtG6G5CeX54C3cNj9zRiG9y26UScU2V21ypYde",
  "key6": "4LJedzK2iWUiLYBJB9DSoKxbnvGFqxA9TgGkeuNzpmGC2ZfZpyiJqxztRekMvHHpiqs4JEpxaov1LrSMpw4pDYhd",
  "key7": "2ZwY1E5vMYTdeqMHvEbFie7388iKrj2JaaQVvmhVXFYZ2aqAvNn5R68rXAEKk1m81gKLWQFFRGfvQJQxc7R5TRVv",
  "key8": "ZNrPCD1yiWGyx378UUghvuHzsWS4SoC58KX9qEzs6cT5aTQE6E1jzu2NYZc7idQqxbjpA4tAfdmWVBrqGnhoGSY",
  "key9": "5njG4MTJQJ9ZaRo5PiuZequene77tLPK8Jq4Y7MFd8fm4sxbmjCM5VeB2gKZH2Gh5YmupGGg8p12Nj1425VcdcyW",
  "key10": "5qci8gbL5RufFvUgRUj6ZhLapTb8XXMFup4EVmYDWt4XoYFiX2aNKMjGs6rnXT8gciUQZcKPuvqRDwKi1LGc33NX",
  "key11": "5qYr12UFAQv7DzAbFeGXNcmzmWbWL1Z99rswbiHmn7JgUYhKD1B1Q4zoYcHvKyPU3xXxG4htpW2wakUJEPT5yzen",
  "key12": "4WLqd6AxsQaBmH3PWoA14yhLby8FH2jHHJT6T1N2FCtcrfKD3WmpzM2TQ4AP9oRaJDqzXfUrF8W7T1JtpTx27XXA",
  "key13": "2HzLzXcD1odsC4kDdX9XYL2Mcf34EHbrktF6Ur4Z5ppC36K8QE8tQv14ufKyus3DkxF1s1JC8XqBa4z55e1ZAZWs",
  "key14": "PDnwUtP8jQj9nUzXzkQoFSKEXD8YBojhVMN9Cm6Tut5jRiomu677FWY69Wd4Khn9RxwnnS7WXKbuXd1yPCiCnhM",
  "key15": "5rCY63bSomDE5fmQ3T3LBhCJCgK2J4fkg2Wihck2VGJQdoVqfFd7kqgKvGZ5kzMMLvVYNxWziqEu6PAR2878KynN",
  "key16": "449dWqTkys9b2dh4fun5U5wEikBsK2ce2D3jAKLdAMVDGHFodrZSUcCfvN6eD1EhogkbC9KdbrP7CVeQoVGPLBTF",
  "key17": "25Lq7ikBSNG9t6bS592q2ruh2ndwjxuMbwA6UduRyT2VrKLTj41YkfCeDDSYwPjrNwbxL47ubAYHdcBybxKc2VWN",
  "key18": "4uhNcsUqhrfEnsTKhghXtDCSVY2K1uj4FsdJYEmWB52mbvXKjdUDiss6Bzbdg9ighfvFWae82Hv8xkAoBkG4V4J1",
  "key19": "3jveEVk4rev1HGZgb8xFawBpH7jUjf2KYV38RfvSsbyrdPytUhnrsCLnoUhM8kALKQXvCdmBeosAv5t9tgzDK6Vr",
  "key20": "2DTRbmjPpJ1ieDDRy8aKSvXBe92s2oFJ1a4fQJNpEL1P9wzhqPbxJbqagTuLkVdSKWwAuPykD7GgpgjhACn9vD3v",
  "key21": "2poPhn5ThNgbPs1wwa3wiGDUJSo2jzK1CdSfSfQhihP3ddvhtumAeQec1qfbTwLt1er7g8kcs16sCqP6eUCCczFv",
  "key22": "5x91KnnyR7hqsQ9g65nLDVSwptbxSfGJAbu1vttch2MPmyzUMJtfiy9q4ypbidWDGn4fUcTNPVz41X1PrEaEvu7j",
  "key23": "2tUjSvr72RJVCcjnKz1ywLfWZYypw3NtM9MY1VzM5vSc1To2iC5ZER4CKNREQPMxgsTLR4rALz2A7XNbWNZSJSXv",
  "key24": "3XALtnQKQ5SjQaGPENsqeqjUgbxA29tpJ7tNCYvpdKbG3XP6R4e69zichZbx2UvHSkEDuea375QaVdQYcyHjpVkH"
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
