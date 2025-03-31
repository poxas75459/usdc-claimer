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
    "51rD535EXXTmSP7Nqno9Ep2s2s7N8yF2LH649R8DXtpApyC2gaMJRkz7UHWoHSK7XHxhPyJsHNEV6gGkKLcYJyzu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2bQd99FHXQpf9MX71ibtLXN7MkAUCTaZrbEMaxgSY3sk4iYpuoe6cszajHSxj7srtDyDEt14xMVoruUabmqSWcki",
  "key1": "WUZAsUfsAJPdy4N2cFLX2NhfvHagaaW4KjeYdwZctjh6hR3nqSZgocs4jgfBHUMsYAE27aNWEKCv2M29JWKyuCt",
  "key2": "3uErBGnMwGnwfCQ9HKr8dCcS9t3PUMAotbs5UuJPQVgUuPmn1hu3wAGaJ4NtUnqmCHzm44ycvucMkV8xyWXGzaLb",
  "key3": "8LdFxCECUS8jHBS26PWyRLBFHbV134RMWas17HRUWGNbfFN8QcMg5reWT1BKURV52np3WUfgnrt8cz7jAF5KBH5",
  "key4": "41rc3djyYpRLZc2V7cQb31KVj613RfxdxDNPneyaDQhD7uMhhiyu28qY3AJV6t9deoH97EsBuFhruTHg9AfjiFn1",
  "key5": "SMampRwdtfCBm33ehG1GVS7ED6B2jgWGyWdFjtWnEFyiYTPALngttzgyUpNb3k5xbxiYsw6a59ejC4S66UywCrg",
  "key6": "57bhnb35SYhoKcU5iKd3Ktzq3xRLwZm7jypvDrv7gVAgPuiyRkREgfFxuFAxqJgsgFAjp7uduavDdPvy12h5vSXS",
  "key7": "636BmE1LmXnQxXFLqaCcqPRMVnNy4HPBpQnqLvaA2L4wdaFgfQewBiMoWNsnc7mmwd1omh1CaNLqigzgqXmzTD3G",
  "key8": "mB1Jar9AWCmBtMFP2tgPWrcAfYL5UK1579e45JpxqJSmsLXJ3K33LB2CvBH5KLr957gSz8Z24viwhcG37aPBYf1",
  "key9": "4rQRo5c2Yuv1UKnyRxcZqSyYb3TkiCjvUYhvCzV5S35xjhH9jhdqjsqKJ2EunZ9svJ1j7sFaNxdbwkb2RLfUVTMU",
  "key10": "5fcXjvgEYxLyLujwyPAGYnp5D9srTUXzkRoWZMzaL4Mw9NeUR47TBmRBVgptkfoRcEHgKA71pMtNyVtBTEivZXkH",
  "key11": "2jYpXeA9AQjxPTFsYdcCNSYpLzkLAGPZQhKou4ZGt9yKm6TwrAUJRhUNu1ra1pCqCUR7Zr6gGmv2scradRH26DKA",
  "key12": "5mAVTV3JHrLKUF7JJKv1PANB6j11ZjmCXRG97NarDre9wgkcDmSjHkPRsSD6z5NmaMs5F4tmBNFQrqMWXdW6Zcg6",
  "key13": "4pjqkXC9nwuqNAhGNQjQB4n27SfbUZ38dSNpo45AuYiJBxL7YFAD6pkfuE1M2rD6HiqZkt4LMApyTfiEfUuBVKyT",
  "key14": "3dTEFJDP5Bq95bbWV9VHXWvuJfD7yt559PKsg7KcXxitzPNaAPioDoBe8stQBi7KLaF28fQL7MXC1aMByD7mnd1k",
  "key15": "3UwNLp3qCMV8rYGRRHpYxEwd24q5jazLDjaXJiGUAJBj7ArcumHfnd8kEtBVMCkBMwrGzA3Trc3wkKccFcRQBq7f",
  "key16": "3E9ErHsRheuaumXwAmqTNM9WcguGEmGndxwwgRoSJqxhPrfCFXBeg4QHQa817p34uQuvMJubQ6RPfrniB9TMbboP",
  "key17": "49j4dtZfqzBv6EsmXr6mSNZvGEj957VYGT8b9L3tJkfgkyBfz2yNeqdMeaztzNhoNRGzXJe7PLCdBCrcuzucR7im",
  "key18": "2A9hxuun98VGA6xkEpL74SBTzvGU48nfDFFLw9BJwg5tbAGwEj2JjwiurCjqm5bVJncJyCmCXNmrQRDCdCSXrjLC",
  "key19": "5GxarXdYoH4BCs4T3SMVSpVC6CPKmiKvXHZm25qpeMaFUWHBxpyA1DSoNfioV8K6C7V2G77uaYSvcXjtugD3H7jr",
  "key20": "5GfT6zfFUvAboit1k5A1HkG4tPDhJbmWhv7M6u1pRUy55GP8w31zGdfYdPkorwRm3Jcdzc659YyvNTCVnHRciWLU",
  "key21": "4UMtY7pQMiNsowoJTNL27CQBcvSKrdeNaueAJf9wCt7VEBn1XwxHWrdhmTFrt8siewG23HfU8yDq4Ta9fNYeJvB7",
  "key22": "2YoDUKUSWNE3m5TQvNhoZ6ev2q9eGg6B3y86eF8FVGgJpUgG5SJb1fuyYhg88DvvxYevLt9cjn8d7mde1hU5SzKP",
  "key23": "3yXjXTKi91MoDuHSTS433QoGhmLaY143sEtPFxHiB7F7FgEb4wkqfp58h3uXjqjb2o5nSb6Kwv8gb1ykMLSGUywF",
  "key24": "5yrGCE9NNxGGDE2DhpQ1VnzMkusHahVix3NHTXRByM7CzGjfHiC6iaoTp6ay4FbXD7FFuPqBsBmNay8H1FWyzJ7o",
  "key25": "5mfX8Djg2PxLDGtNBMbas1hxuMRG9MDdM3uEbwVsdxju7vBPyFtgMHh9SpUAijQubTkktVK34ux8aue7HCxxCRPG",
  "key26": "MFKeKpeEAmta2AACQECAc3h7Lf5RifupVoU8HZoLbtDDRjtZSoTb3ikHrc3EKDaDdvuMuSpZ6QnhBSQ8j19jxWx",
  "key27": "2sx8PavUyj55Vk1JV7F7CDGgmrVyrZ1Pttji6YUsTjXhNMqAXcgPsvgiMwjALTMXtn3h1W8EG7Wy337BkFHkuqBQ",
  "key28": "4zoxEiLFAm2w7nc8fCfYfBtxmfqko3DL7gB4TeiYc7SsLQcrN3t3GwC2TqCTEkBNsyvuxiGRjHEWmPXywQPDBpsX",
  "key29": "2Fv98LiEZRk2caFfUHHJvvAnAatPwQi6YMPD16W9v1n3iRKxqavogEK59DbpMCxspyA7jjFWqVdA31RHHsagC4Lc",
  "key30": "2tqTT9aCVqWJg8dK3o4bcJRVd3MCFSCZjKYjS5v692FwhHB59qMtKEhx9bzxXa5T5m4jjTHH9AwnFcMqvLeLngpu",
  "key31": "28NEQfiyRn6yC6TUUBnKK5Eeiwo5BWcKt1wyupKeedmfK7AvuEa2PYdhYW4CZezTDUaSqyhocrhzbWMM7Na5bD3E",
  "key32": "3GhwnswxSLbFCk2M8nqcf47zg2JwKbhQXexzjfds63Jg5oA9AFohT4ovVD3DLVkTDLFJJCgTnWtdk4gYxNWMmJV5",
  "key33": "396z9zLkES9nX9A6bjNzE9iGYJk4R83HkYBRajStDcum1vLeg3j6yYjMKmeFjsAUgGoUdGPfGQmZcYK9boF7omoa",
  "key34": "2LHMpRo3voEgP9mfRxAaJCyNtessFCjb3biGs723zYe8r9NYKfRBqgMvhrn6VzyTnSHDuBFCK4woTZFQS6wteH72",
  "key35": "41PmNMJXj7G7EBJH2KjdAmnVHF2PYraiNZApte9NMyroidAzzbQZ7qgTkZwhUvJ8R3J4KxeJLo3VyJSVJ47Fbh4H",
  "key36": "5J4CpNCrnBpEaD8MZkeLJJr4f46oBaP5bK19XCZc4dRnY2DWMw4erH5yJdAqdEs7nVkW8WdsWrwTxvizoLWeofBk",
  "key37": "2gxSyCHNfW1gTUTdMPg3iX3tWNSrxG2CZE2EwiQ3iD1xjuM28HxwPtrsFDfog8qUE65nc6S7H4CWBBNKJBGdYtgk",
  "key38": "2Tz55n9P3tmcE8ZqLWpn3A3twBXXA2cEKuwwGS61c8oCi3JUjt6dMwccHTjZLhKUKsRqU9p1QqwkTKVw9XmH3C2",
  "key39": "4HTFeuR3FQnbtgJS7Tdemv1j24iugfA1HZBBTFxkVKV6toJBSssStCbym3iijAZrGjDTgNf2Bzthy19mV658DJXD",
  "key40": "2Gt78umy6rP69XpTE3JxjiMzv2k9wHVDkZBtSLM9Hmeaj9tzR3ZeBdHFapxhgZFnhsS6xUT1BAUCZki9VP1Ki9Qt",
  "key41": "3wrHdxGZNp3M4PAKvrb2s9wPj7kBkHZ7dQKqY7wopdV7sf8Dwf3twfdocGbQ879VZuqxsdA1x8wd1TfUWxdVm1vX",
  "key42": "3YrT6o96Ws4q2qMShjBEjoHjoKdDee88HF2PeTjVz2P35uhvs3oeeWJay1M58LJAp7VHdXXjx7LNBTLqJGziDQvh",
  "key43": "4gT6Pc6xTvLBzc2aCHDr4aY3sDsLk6ozaAGNAwi1yksh1FgFseEHSVCkV5urTctXodSGyoRwZ2CU4HuAz2FW3E69"
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
