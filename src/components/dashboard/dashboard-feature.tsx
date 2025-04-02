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
    "LaWkPYt5VQoTa9pw1ktMHdo2UejEuuwRzs9Rn4UhPXukDmydCgEaZ7xfGf5ocaRLdPL1yYKG7mNAhwsKo58NuNA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "389Rty7QXskFCoEaUHUuwhaWdVtXiKbX9ECVXE4mjhAtmbpHq3NaDFDD2ZukQy6SyfVhj4jEy2uzwcQxLnNDyYiA",
  "key1": "2PUajxmhDyHBaGKbWmqjKYN1HMP3LubNpcY6TSswJFCEbCEY6zEL2hVkm2urDfVUhtQdGNdPWmSrspxBpYgNe3zh",
  "key2": "5rcotUcZH4A5f6TwLaAGBqLPBGR9VU3bQii9wdipdVBeoZzDxTuqV175EXwtjAeoQQLSDeMbPPxFFQKoZxPjrADJ",
  "key3": "4mKSbvBVMyMF7tLdJteNcFqiixwfSyhasQAXVVjtVM9DATt1AvpPwM3uQhusBHKaijCCWtkJQxtDSNoT8LvqZryy",
  "key4": "2NBfsBjvVLkTjdsosB7akGNgwafTNc6kkFF2yWvijeKtBvixWLZZQrR6btukYy9R68g24yern3ZyBhHTtrzcVy4R",
  "key5": "3U2gSGmvGx2JJ6jheFWUQh4iWxqQ3jewcL48R8rYynxkvQgCi92uGwLZK4daGDcEvHMnnTNr5zEaKN6f26uXTQv6",
  "key6": "4V9fSTHQiN5ArY9hUunH2Z3r9BTY84SMSpxy5cBtdPrexu8sNGx7oTctvrqxWyW9aBcN6dLELuwCCXGoSdN6R2Bo",
  "key7": "67atmNAn6WQE4b3TtULktV73nE2rno2yuLvfhZB13kfSkhcHJB474rX8JZZEs5NVEnS1WyJbQfAUccJJTEGWa4Ba",
  "key8": "4dwb3XF3ks9VgQdy7qYaNFggQkHhZSvNqWUn2xaiBQYDMURLfujsgyM3Xkw53aJgM93C8CXsvVk5iZF3pYaWid7h",
  "key9": "5HtmDXFqm2uvUmrwyTzcCiygFTmJf21NwJYzp3tzTTeGaWYMnZxm7NzYBXQg32xBLsu4Lv1X7tygvZt1FwwuYSQE",
  "key10": "4k9aXrY57C8c92A8rhPYAvUMuA17C9RXsgoNPTVUzbZpqk6uuZLFqLK9aqKQKWX8yEmPS6fdwvK1466ULokQ6pbZ",
  "key11": "2NAw2kgXMCRr5zgJQ2Vc4wbp74jJbG5sd7gK5jMcT1cnVsnyYNKYRchfYkdSaX2k5LgHN6Etcc4thhNA67woW2hS",
  "key12": "4wAMSvM6CWgpKUMdbsehm1TwnBLeXBbBQEBSBSWofwgMxdPig3x6dQ4HgVa6bwMuZzEfqWZHyPcCy28MY4TSaZzk",
  "key13": "6MgCccnpVCLjUJ2DavjGztVpwdgMGbPPuUTuwVCDoEGwqxN2s8YYRh75v1yVrFZV5evNzmgj1RsbTWVKnYNXDLt",
  "key14": "4cxQPm3mVMpHVxsngEGtD7zsXcBJ4yUqcAZLwTy3yv6zn73anKopjvSSFk4LAAmPPYtBRLrYSHQBDQszGzDfQ8VX",
  "key15": "tGbwcXiagiCn5pNyDznyWznxnRoVdbQaq3ocSmCjj56mCjT2jiDU7uBnTKhvoekbrrpNU77tWE63AAC6URBSqQR",
  "key16": "LFoE7sFv5GuUkDgRirykNAsAXPkapS72EfhnW4qnqj454YnxRfNgGDhqtDeBsWPV3KDdMhi4iEvtjQwpQmGHfeD",
  "key17": "65UCDxw22JbLauQFaNAwbzduX7BzBGmgJv1fduNysPcZGDze4QmV9FGarxZNhRvCD67MioxJsDyFDMbmq6Hha3NA",
  "key18": "2Yipq3jfDhu269YpXyoQLFYzcretbCRcs4QVcfXBe8KG4PxvEqZYLMjZwimKJ9QvhmXeKb851pBZBbJSLPQYXFyo",
  "key19": "3KVtX9XtmuVFTbSMgMZ1YSUb1bq8R8K3MN2LEKc6QFVkauMZFPgYsVGj8NTdSqUs4upNSud3iVYVT4aVLy7hCqyA",
  "key20": "5semUtMWXD8zmCyhWbhU3QzKsL1Xw9Psq5Fj6CTBF5CFVLsevEKxcPreAQBM8DgR1f6wYQvo3CzcR4KR1L9X2hT9",
  "key21": "p85P5ph3d1hf58tZZCRMW4pfGqqUNtZD4zRFaaZLYmGPHdMD5zAFSMdYaFY6RBoVB13mYcPGJmkKdT8oDsYXWnM",
  "key22": "gg52kbYTc14TVw4K6BkvR2yhZgXkZYD6urv253NqQi6xASdUeKXhRRHNhwUwH92Xdqq2xpA4ztyDscGzLFtFXdH",
  "key23": "4fvoG37bxiW63VdX4ABKGDiASeMoob92eAPNxzKDeT6Uvv7Bp3EsrEcwg3fWSTA1HQydqqVk5LpLzK2SeVTmRXki",
  "key24": "2nwqBdX2vakiGuAB4y5jRHMEWDdLY43nV5CiPoo7pHmaxRPsRrnEw1LLLWCFQt1QJxf64aBed9hYaPFnbgi4cb3Q",
  "key25": "5DcVMbpTfQbsbYEjCnbD6hfnbcPUhkaPwQRJ8R3iMaTn1qZsLULqAcoLn1U7m7steuU3oPDEKeXNnkqiLH2o1skX",
  "key26": "2DrdnZrAUCB4AP7a9mQxBiXNGVJQg6zcxyvvZPXWu5gpqvzJejM9nEXJSFUD7xCBAW9SqmvPPEd9rMyRJfU8p2aw",
  "key27": "4MSJjhxK6MsuTCevGTDAdLzsWrHnd3cVhiGWcMA7BvR2obH4xYhh3TvRaLHhX97c7P5q9gv3aCzx4cT6jsJ2aptj",
  "key28": "2s7xZPvMfrqEekuvxhT944WyxZHekBtT3EP3EwdxJz5GcBHvadar8JCEKJrzrmEnpDGeptNRTq68hgrW48Vuh9dt",
  "key29": "5fAqFKtYEfCEy12PG8jThiHjsCQTvZmWAF2GSK8ZqicvsGCgWo2aruuhLR12bKAPyahi8CENGFWfaiagCNbYaSVF",
  "key30": "2cmVee19ZcnrRMSUTAPQ7XbmeEPYnJ2qiva7fZF3Wt6XTebDYBamBRtCSBtfbVNuyAw7owu3f39bBTzRTgfdya2U",
  "key31": "2qRXhmkxt5WqjRXd7dTtm45qphHryZ7mtszPSn21FKHqZCyH6QJorfsiqzKf3896aMH8WkW34Zjknky8VYZjYKNJ",
  "key32": "2ogxbTGLprUzt9CjWyhJGNxkrjbqRLardJTAYf4o2mNrfHC5LyxeQojuVunbjpdGcnhWwHbybTj4uZUkskNeP1eV",
  "key33": "2aTpzUkyFiBo28R23CYjwvbiCmPXBtFeU7dGcTUHYACjFvrLZHew7hGQbrhHYjDU31nQ2Hz1mFwjbwKDtXYtffeD",
  "key34": "5JoZrf6mL5DGQ6SVoYRufcgcpgtWBMTNRtBcWkBJMiFkqazLu3G1rPkCbix29g4YAnpsdqvr9iHvkSW4ybVLASGU"
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
