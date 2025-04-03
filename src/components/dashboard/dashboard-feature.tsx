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
    "2E4ifzV4YWtQCDPmjnMmmm6HGQfMEvWYrEFqjFT668KZM7pZdd1DdPa8Eb7tunqi7uxJvhzryXbzBJKnXzbZVJDL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4s6EYSXwkhvyhkc37psGqzwos89r4HKWGyFgu6c3bywWYnt5odM2LYfxyjUZM4NLN5KaZYfvPxptMjcFbTKdD6Y",
  "key1": "5a5PGZLQcrPyh8SKjKXoPdtMn7vdg2UTHSppGPL4JXe1KNNDTbXvoeEJ3WNzCgpXpWgfS8KSAAzjpHkmNigGD4ak",
  "key2": "fZtEWonRs9gVsmKqASdLGoPyXA4rqNwzSc82Gz9P2p74dwFu7QSuvJ4gxopLAehoJjUFEgpzsFcHhcNEwAgHRMA",
  "key3": "5PDxamvDC8TZu5ynb5PY3TwNpPoUpviZyt9ShZUbc3ggzBC6gE4Vv8DUzFiU6VdyPhRE7X8osuhRVUmNnHsE5g7n",
  "key4": "3KmWqo9ZFAHL2pFZnvvQ17vwZ1NV8xSSbT9QQjWWFUxx85mQg2Ff1zoSaYE5Xahr2BCghY6oddAjTTigWRFSFGKA",
  "key5": "2o3WR6L8RSc6j34BJAR5tFECxVFi2QM4vUnUUAoNrFJpNjcHNqbxAL2vjT5f6mdML1CBoeJ6kRzSWXvUx5j33Gqj",
  "key6": "4G9YSGJe3ziZVS5iHuuKdW4vvdGbxCBCjWyvyKGUxiyuxfRCaUf7kcTeSSBFh5Y4CKP67QFgTG4C5USNh26gggGs",
  "key7": "5MM2iWwuyGa7y9gXULxKjmD5s9bcsAEVWB2mG12htYeC9dGqJ3Z7j3dnYUVVp1h1k5jC6v9dAh96ojSKLfDeLQAZ",
  "key8": "5FmvbrgKaibVDyFgb1cUz2PkFsaNzq8ZtppBcEDCnP7hMyhdW7CfsPMKLFWTQKLuVFX51v76KUvoxptzuskaiqno",
  "key9": "4NzzFEwhWLFFziGxw6vSq3dKBkR9FtSC685KMHhHzyPW1qUUDTz6LaoVJhAdPn52E4nZGQtQRz4wWQbKMtVT668C",
  "key10": "2iyuHNoKv8HdDZRNcG6uaS7UmKJaCxwwvsQcXPtE1UGEbNgZrPL8QhAJoQVg9n4SauX9aimTGnk4shygLytq9GUQ",
  "key11": "21xm6kojccmGMTkv9yXYeQAbFP5aVrbbQiVzK5XhdjvyigqWohBoxciw9HBDjc7DnfdNBckSgWDPDSycZRuVrnsG",
  "key12": "2QrRbyYHKKa6mYCAqk98y5Utuafm55Q3onzziX1uKKvuksX2twKLw2Lmi8Y7SvmFyZ62tMZ5P5Xx818XVm8pG5Ye",
  "key13": "2XKtgAmsdsZvnbtq2C6qrzZ1fedjVxuK2a9jt7cphQwDDvhNNLBaKTd3uPYq6cXVSfP7MmRRgcZwU2xCwQP75kYi",
  "key14": "2VGqgFr7mb5wkbeF3yByJWSh7rmU3N7CFqBjea7fTtRc8m1yvPMFWPGguKUwRNmq2EGUynM7TJFLdLhZwNoCxyjA",
  "key15": "43Yk5AqpRKR3vMgs3tCZyuDp81y99PvjKob3x3HbEKB3386667aAPXdFuGTjJQqaJUvir2ntfVYvrNkPfS6BwvKD",
  "key16": "5mun76vvwaTPmvi1Vwd4JkYCnZ5S7NyyYv2Bh74WZ3jEnARM7voAa5Vueh2MVcraLxxq1JMN22moJsUGAYmfBDW3",
  "key17": "5bDVpdUVjeyxfnUaXeHJQKLWppAc12VrnxYuuRHCQiDusFnaQKfQMcFnN8tgzvVYsP68ZrePgD2cL5fhBw3MVQKR",
  "key18": "24nv3VdKBCYsm3Az96H9STtSiNyZ6Ysk4JXS3GnWNpg65xXbMRGB7X1kiPpmgR6GwrZtc81r2MgeLkzRq3r4E74x",
  "key19": "3ciPH62ppGjNc6BqnvfdGyuNjSBtnyNsELgr9apdbzFawL8RHNsn8z7Fk6128g6AdqfxZk8nX3LWK4beFWxTvif8",
  "key20": "VUeYJBQa3k5ofRh7GbJSG1JUWvFcWzhz6YE8ty3WJQqqjN51REXFwtqRUV3KjM44La3o34XLotBBoutEDeumuy3",
  "key21": "29NMvAHeREx13SAK9VgDW4m6SWN1cm6k857dt3SXjxcFa3U5dKcXz9wVVePFC88Ge8Gh5DwBh4uEPvzVqv5PDU26",
  "key22": "EqZwYzK3bSpHsXCy4t8b6cPGghBnDkWNuKTSkQU6imGxhvPxHugEs722oDjFzPYDTc3FA79CiNU8ghr7KxJcSaz",
  "key23": "5PDHwENPd59xzAThgw9KL8AS9AFQknnfArmKjVYd7KN83Wy8wpSuTmAU5JaSjMTRPYyDEBLDdtxs2BC92NwWRdZa",
  "key24": "31vkunXKSj7dSYmdFqYaDgbSQb65MdxEBL9PZAmezsfdtRq81amPMk4Y5wZxkfRDEQexKW5Cc6qayv5tSa5sCpS9",
  "key25": "46jC9TC18GCPAGuXR3EPuymjqN6ZrCajwB5BhiQgtouQNcTbr3A6JK6aJxw3THwhxfAqzaf8zbU9Sr6ctEjzFCHo",
  "key26": "61ZBDH2ZKkC9qCveeMpZ8sbhf3DJKkLvHtEoNRSxRjCvn1S1Fap1MaqAmm9H3ibp9RwtJReHe2edS97TGcSkWYZb",
  "key27": "2KemaVvPiVw4F1eJ5XN6r8ByHeGhxzj3GoXGXu1JcEon2Pbr2WvnC5q1oepJoP6GKvn9686fxFXXjTTPPR4AgV7n",
  "key28": "ZrScCaQcHAi71W9QaZRBdMPyms2VCGxWeZ68kSRfpKPLoqECLCQpRAsEDhYdbzK279cQqUG3sPUTbvQFZpD3ZuA",
  "key29": "4vCMP88VtJDjkvDnoefYYUzH5PDzgS3aLPfSYXLAWQe6nqepfDsbPkN3rE9PPonnL7vvd9LjR25ayqi35Y7vQnMH",
  "key30": "5qm299cHHsjkmp6VqvmQUAzG5hDBSTqUdgGjexQdnZ7gkqCZUxSRvmy664KUDxuJfLd4xZdsrwMxo5zkKkZH4qVQ",
  "key31": "5Qq7XuDGHredkt3xRn65QLWLy42gNeQfCkX7YRVDYrLBkFTy8pJNPKqZvPGnzV2Yk8fouGZY9FZzuyUhk5JBTLEx",
  "key32": "5vr4xfYMGqw9in4H98otEmnn2TLpZsKJXrGNEkTvQUKPeWGgNn3aHPQ41SqYsfeAiA6m8ESmeP218Ts5FGEcoG1L",
  "key33": "3psoJGUgvfJvfHKVSew2xbNjwh6AbovMvbSSHLELQqbeiZP3tkFpRQC5YEbv5vMnYpUDwsAi9u7CJpN6EKzUB7mn",
  "key34": "81BuHfLsWDEbktPFxJjnh4DLqbzujnKzWcXpppsSmZeyrp557T5TRs98KvzRd84xKJWEoj7NvwNQqoo7hPbnDbo",
  "key35": "5dftpTZhFFKtCoAq7DFUcLevgnGLBKW6etNMHzwUpRjRmjeo5j2FEBD25j5jRgLhjN4c689eCGMLtyiXbX6k32uJ",
  "key36": "27AmKtddy8RH8bve3YjYQjoZW7JHCjpjVD5MFVMSnX6GhtaSBygAeAz2bz68bnF1nqwYRyGagSkFf6ttm3NDvL8x",
  "key37": "29WjZdWbiqhqJ5MHuet8C7covp5MXvwi2FHqyU88yVRAQYYuv7vrmFPv3ZoDNyeSKdNxogY5bCtxGn1ZvdqSvv5M",
  "key38": "2jYYeKqghCepXpAiEzEX4uhw5AA3BzAeksrANuRp4ezJZiQV72LifHru3ufqxZt6nBhB4cwcZazyGir5fQSZ3uDa",
  "key39": "3wBoqT9xPtrjCT232VK3Md2VBgYRtPNYLsLMQ4Amcp6Y5nnM848fK787obHr7mHR18FccNrifFvjUfcAUrcbPxUw",
  "key40": "46859oCvzTv99wV44SkPVqmGLXCGaZSvs7wD2EhSzirzt4gvrWdUQ6QsyQ6eEuGvzpzGEpj8tFxgdFVC91B7qNy8",
  "key41": "3rPRFEuHDvkKtbZX3V1hEj6KoJFB155umeDkLyxXL9xdPAirw1CJfZs9pevbv31kBhYwggf4ZW4rJb8ayn4p4688",
  "key42": "4Wt98CZCWjX1dTUTHZL6xCTk8e91v6YdGzM64ZtCwcxTGEhEYggBQHwFztjxfJrXpzgkwNM44cSeQqmCoZaNkqAU",
  "key43": "5oWkHMP5Gad7zM1jLxS4MS39eG4DBB3QVVfvWc2ggfE5PhYoAV9L9ntxe2cf6PyRxNkKVT4KhhyyCV6WKtppJ6yE"
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
