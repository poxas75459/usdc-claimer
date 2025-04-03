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
    "4qkvLVJDhR3LLbK1juLhLJ9FAfQxRwcBMTRGKceAe5JQEsmiWfKrRSvsJEUE6eGzVahTd73JMmphnRjZwsVjyTHd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "85qUtLqQvzkipQzCrouhSbnk6EdkaFRQKYyYF5dAiNcaT95hcqU9e2QnmfiUyq5oAd93YNrSx3JY4Sw7WoDw7jG",
  "key1": "5rs5h9VS64KqN4ptDfUuZyXDqimLEU6LvemZBFZYkxakvgxGRYeedB6TEsmzfM1zWq5gCTeE1TJBHvjAXPH8LUyw",
  "key2": "3egzXsbBGmc3qGytWKiinn638Js8JxBA5wyYKxGCbAG2nPrTiD6Sqz4gizWEmbNRnEM8L3bXMZoeN71MfUiCCjFe",
  "key3": "2oJHj8iDbm53is5cNugE8nwgPy2Wz11xhQkqnqNrewgbJR5wzxiXWAcoYCvWEgnZiWiXZD3kwqgiaLw3XS5VV9Dm",
  "key4": "4LVq8LGSm8h5LbfQSLwzQ9FU9f1GTkX2K8Le7DvhzSYAYPx9E89JsmPPFnLRbAck6KPuRWicyM2nSzLMq7cJLHEd",
  "key5": "4PtKbCRuLe5cZK7f6zYYPuC3bX1SH9H2jJU65EMRC2CCMsLcQZzF1U1pFGhkKGLLw1fNxJUUJoeGvM5jLWv7Mt4m",
  "key6": "2eP2vb4KoEHR3ANA3UrVyeykgJu2znkMAZ62NFAUEmXFpCuZ9qTRWoxnVpZxkVoNdVCiNkCSLour2aMBfxHQyy81",
  "key7": "gAjqmoWsUNU7TiwmMp5NqJPixuAe4GuvMguw5osuALcfGYtZpCq82jnjCoMmEkTdT3P9i4xdGoEzR7EHa6UGGLd",
  "key8": "3TkyAc2PnnmaseDY1M6vj7HbXgd41S3UHY2Wn711N4VxzNf7VY8RrQHccjZa6EZuN84acu93Su4Vt9wuqbw6uTFK",
  "key9": "5Wk2MsJWy8wqXQv8C2aMFyfWFkykUYfo6AzKdkhedYjQXDojRKn41d2SxpKpLAe2TV3M28eEQTHoJ4JBtVpLSt1q",
  "key10": "4V4Gimn2hfmqfXmKoxmRotBPzc9QQ3oQRJUGjuZbr6mdhMyhdDBZV4HswjUuoAS6jhnDNxW8vY49T44XpsMwTMER",
  "key11": "UxjL2LjmKZjgtouqbvxfaZLGyXwGXJdjYYdiyuJTqFbnG68LrTSstXbVtC5kNMFfii2vFHiXowygvBUnqkqiiUf",
  "key12": "41WQtCkUvJkJnWWEtMYM4NmnMV1RmcBXR1GsZLwzijUbitHVqenZJJJYp4FovDC8QotdwREtc8EdgtuS5kfxYLu6",
  "key13": "25UsUoXsvGGd6v8DCsM2CxmDTcTEjfHQ9mFVVTT9DAAfzihHRvVYqzNbC9wZ9u5TwYoAHf135QPruEMm2MJ3Y1Pf",
  "key14": "bhcCsG2d8ut53M9YyoxaMTRutJAY9wn8ycShsbLxDFwQsc3g5o7EhJzUMAUZC8dqncis55JmuwrFMrt75dj9DLT",
  "key15": "4gqS8Rujgj875jEmScCTEPzSYfFkSQUff29tTVbscU541qwGc4wTZ7A374qUDYx4h1xB4e7r8zRKLUb3JtQYXwPQ",
  "key16": "2kSnB35sD1yVPttypvex7imnUEfbaeita1aX3rQepYmwbox1MvbeuNPiRZ3gDybDMDY1BTfGyjeHC4UWLMxtZ24D",
  "key17": "5DVzSQUkLgycVYRNXNaSbKqrtfoguAV8kDZ6ERmwFNAdUh4CdDW1v7SuvagBbjp9HXhqv8XuoCz6Qq8qiB2esvMU",
  "key18": "2cLHTjYBgR4NCe5ViMAw6BF4zvYRqkWeFDLEGwCDyYwQCNnE2scQ7ERRQfFcLB4JWzc2FEnm1362vePyTzUfbcKj",
  "key19": "4DhGDHSJoPag3aDQAEp8LjhD3P4hfKVbkhyMipTfb1Sx97MQ2TBv7CYChYfbbj7EkoNEgQaDptbW6bABRxAmU5Vh",
  "key20": "iYHCragVwRxNvVHBRMPZLDRxpH5rdnzG2Zrs6ouj5fV9Myp5P6XCa3LZqnGCq3dfsKnUaJfbVtXZJUXT7u5q1z7",
  "key21": "3gouTXnpYRezSd7JEeLCHefif9Z8sMQ4ZoLxYQBtinRUta6HpF91WvKxDWpB5RvmJpuiCPkNB2vjdsHfLfnCr4ep",
  "key22": "61XnLSe9goR7GKYzER3aqzm4jcLsGN48Wz8wiuNccuQA2SiNTTFJCW5XmgQTMtJ7G6sbwYixzZPgJY7HxULKsuEt",
  "key23": "4vBVY7TSFczacdysGC6uHkp6ZhXw6py68kwxLGefN6YEH1ZSwm4Sq6z9jpuuEUJ5o4SfLzJyWqXvXP7555pxZMar",
  "key24": "2TyiL5eD1SX5ma3sHX9Vk1MmRPUErJtMih2tTFDTd4YFRNyX5kN4QtCtj42hkWw1Un1zSqC5JwSeFWsk7Kbo7g1",
  "key25": "2xXdnF9q1NF8N89Jo79hz8EB8KKmQZwBje97XoYn1KyXdvLbkjSk2cx1peiqWp1pgoDMNQW6vfvYFHLgocokCc7Q"
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
