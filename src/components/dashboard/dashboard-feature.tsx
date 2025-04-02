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
    "2KNiT8EEV8u1YCoZcWBJs9uKh9LSbYyw2Q98dknA5D46PinuMVbtfS5ZdUrq8tKoh9oX7cCUBnz6XugFPnbsfN69"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5eDbA8cTbLQeUpD1yiMMyAF3jj7t4ynACSRTg47S8WNudSoTuqwoDNUgXPzqhJHuNDwUxUk6kAaJaKHMCFWiP3Rj",
  "key1": "YxAoB6CGeXyAQMAe4AJpDJmki7PpvbmY64J5o1eEFKD1pk7wRLiRFXu2DtYJJF8q19q8tziX1WCVA4eUEFd4jXo",
  "key2": "5eVWA4saFesNHFJqiu8mZEeJMS5djZM89MqLj6QmZ7jt5RLyPMhRzTw5hh79i33nXtcZzNSzyEiRz6u8GFPhqoaL",
  "key3": "2rgnTwhzf7Guw7NvACuAKajzWfBF29Y12v4Mx92fy4WHcN9gDzsXp4HVkjaujfmgvfYKPh7EJiHUZhmhoJdY55xs",
  "key4": "2crUrPbA9wY6H6Zj2GeWAyGqjnoNWWgqY8DpWZ7aL3U1ZkChT5d86t8QgyNufgBDhfkrKPf3ktRscryNMaWwogbo",
  "key5": "4eh5D6Axb3FTUuwD3D21y27x9ZkieenprBffbam2CkYTgfrWZ9FoZ67pHqW2M6boM4VqzVALYWJ8txJGuuLyhxw9",
  "key6": "3byEo4iHL2Ks6R6xKT3xgCYGXWjeuWQpg7VLXdDx5rt1AKLR2mKdAVHfFJANBf2d6D6XQpVo9wHSsYoWZcTrjd2e",
  "key7": "2qN9nSNHZ4T24X1UWfNr12MVyNTTfehVed18ytHPsAVno7UrqqJkMsdnU9qvHF8ar282GdofB9GQjV4SfCb2ezwi",
  "key8": "2qF26HjTwtjHZ7bZEiopYiJSX9e3Pyheq2KPrXgUppAhQzUsz32JvaBAxSQvGXoXbkqEx3afYqGQmxPukGeBchPc",
  "key9": "5kmPzgdoTRTL8wXELH9bpRd9Q9Cfq1pcD6ySM2xX61SJ645UpjLU25FuTWbs9YAinyGaWjNnjog4CtZXHZ3g1vHM",
  "key10": "4Tfuz3cb2kJysVLiWCfXhE2b2jqWAnaZWqoimmcopkbgKey5EEUqvLSsz2Bj6G47Zt6VwkwJJsG39jogKvCPGvJP",
  "key11": "3LEPj2YqoDd2owtJ59RNjpSXyyZ6ypTvGEy9qR7hwbU4SZupUMXWTPEMiyTKHJMzuWqtAFze4FDkc47ZsiUvjzLN",
  "key12": "RPv9y6LDoUFwCKXwrVo9UL32zTNsDiw7Du7rPJJWBTAdwPsDHhFGojdwiYWo5nirVzddD5oXReAxiWU1RE2gDFG",
  "key13": "3jwNRqSEuKTqmW1vQpQV1JKHStMsoiHWSp6EsBUSdQ3RjYZkqu3MgGdZMRXysopdwGA6AdUBLvEUivikHC7Rj3Rj",
  "key14": "3iNtUNQLEdNEqDTPWFufBKYSKHW9KdgLcG2ieDVgCJQc5K2XE3Sg9m5QnPSdHVoTTXpzeV7RHFgbNqe8mbYqAoSU",
  "key15": "373RfU3aqqnVnX7aWGjFbvj6qSCdgNA9canY1RVZtL9hvwPe9y4BazcCk64NhgAa2djnKkt48PMGbaMgphKgzttK",
  "key16": "51bSWSvu4NH6kXEj7ak7knqyB7hBqHgWQJNrwTSpzw39Uz9WdnpYCirhaYT8j4cafee39McsZ88tM7Z6t5oKf9jJ",
  "key17": "3xBcudEV55EV9YKi5g1stXsDZztdFZyYwN6SB5TRRsypVBNLWboKWwYEkpiPXTvd73ZAsJYfd1NWbooSy3PLxThB",
  "key18": "WBAYRyY3oMooeGQUyc3Sa8evpgdSfShZvURn6eVNZkk2G5KCARHrgpcjjDvKF4tayk71KxpYZNCGR6ZQGc19Bh6",
  "key19": "46rTQkxqRqbkwfD2eSKJWy8NrAzT6paNxthFfSfdnSpiH6fxYYVQ1cPbpibhzRLuyVVb9LwtaevgTUEXsBFk6zhj",
  "key20": "54D8KVtPsTqE2V34xQwK5H8bfeMafZzcSaHiXyf7P6mX1EsnSudG2RNXKQ9C7fcTBDEcPzZw6V1BXs3XmXgEMfCo",
  "key21": "4E65HRSn5vZDVgQkqmcmHeAnEMuwsaKKnixqX9K45ji7GjjiYqmrDefqDMXbiqUSrY6Z8ewHXTJFiVJVArf1mwMR",
  "key22": "5bKA9B4TNjCJFzpA6FzMf2s6UaK27i6TLrEhipY5bU8xjhbRtEJwX76X4ZHhxjyCRHMLTerWv8XuBu5wwN2bAM1i",
  "key23": "4dEYHhGZA3Lkpt47umvp4VZKiLqWcpmR7tHPdVMS3uxe7M8t6AUJatSjahrCxmjjmuXuwFAmeHaAs5XUxTQy6Rbt",
  "key24": "3vWq8u5HGNNQnt9gLWoFJCLbPsHKupxWxDMAr3ZVkxRd5LczQamuMnCyoeGjDMTh3tUgzjMnHsPSXExQkjiGiWqQ",
  "key25": "2Xmfrty7KBPVJU6fSZPP6hPyNrNqzkRKioFrTzJXQaUT9bP6cfumUiJYYPN5f4HvEEvqQLFafo4ttxJ4ffiA85AN",
  "key26": "2PUX76VHgi2L5VUmFDKsokivPA9RNjy4XcftMN15zG1RAqrbDdavmjvBwzQLjZ6sVZ8UyfPPo22TiAZPFVQqHYBi",
  "key27": "4hKaTBMF51SU6vhQ4Q9PAzFS2BZxqRG6gqcc24hqLs7F7j9ZWgs1xnEh1nEty591a3U9NuV8xp61HxFvegYfMG2L",
  "key28": "5oS4pyeTPcM6V6X8eiYycjVF8pBMiA54QP4HDZ1eahHAXT3vTMLwgjjhhcWiPJhRKZZBTF6jC6j35GCTzFbM3sHk",
  "key29": "33XchWDdWFQMJpnKmxjzvzyVqXt8zj4nfk27BdPUws14RpB8yrXw5ASo1aJQtQD34KfsCchtF4bUNp6Lp68ZHYTn",
  "key30": "677LKbPtBVfAVKVxs45pa8jB9L4jmXzAGozhCbD3SSZ2JR2fGZn85c7MHAms8Liogpz6Lu6NV7U9YeE7S6VMpXZk",
  "key31": "4XWFPfncx4ts2i6pzhPWtABdVWNDEA4qdBR1ksB1QW6eSwPTm18PAdDoXD1RVSkNaLXByKVUXu13hdYgquD5sAo",
  "key32": "5N2MbtqKLvzjGLyCXZwuJHz3z77r2pWApTicbMeSTabnSzvLBonYrasYxUax4yNEQN4mm2zwC1jbxbfBoVuEg7hb",
  "key33": "3WyJLGAhhQfzUHYbKygUYuK1NTk9z1QB6L4kfgwT2Y8fp94YaEsjh3fEEmCULzLaEwFMjsBxiMMuCbudbG7qsq7X",
  "key34": "35aSL7JK7imCHNEGRZps6SDds2y7VFr2bY9Hruz5A82oB5nXvri2sWGtH69GGxCfLY4TTZhSfESjMGkFDFa9qada",
  "key35": "4jD4HzhxzR6UWsdKTbNVByBJFy25UywjVKZatN3mQzmX9sQTg8wFS1LGDobCi3VGTcS3rc2EwrgCotHVvWAKQSEf",
  "key36": "42v4ek758Yz4GbgHQAtU7ZoRPa7wPx44VyPjr4CW3VTmEpZAA187heU7WGF9JMF3pe2AtYFdjx1YGLfQzcumXqL8"
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
