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
    "28bAHyzMyx7DerzEkyyKjiLjC6FZd5ogMDGVhsVqPjaVokc9FHRVMuHyBevmaPzqJPtcaZdYm31vvybcNEhkjMLD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65ByvNEWdTMxhw59TL5uWTtPkxhnKJBp2keh8sE6bwGPA7qmV7vMveCwmo4AMQjyr4gDiuPf4VCP1QJN73Ha5tpb",
  "key1": "3znPv5v4RQpSnM6mSdA5JR9LiQpxyFmJYv8LcAJ2ASSh5KZZwJm7v3ZzJ5uLQ6nGmV28Fp6jm3cyrnQiUrWT6KxJ",
  "key2": "3xF6pJS68WGiNui1Cp23VMkkUU1dHoPSWEqvaXe7WkpZWgk52hjMPG7jrFyh85bNFKMqEWUWun9TfV75jT6gM2G7",
  "key3": "5WoaoWTpWpna7ABcncFxuYNxdMWQ3JgseDMLeC9zdhL4MSUHaVe37PquDwgcoA8Bx5kr3d8mmQyC1P6TXJn4uF6K",
  "key4": "opULAgUNfDcPqrgcKh9Z12tBtRU4zLWqybReypeQJNncCigGfFAwFpbMhFsu13D3brixdufC3NYMsifJN1zy9ip",
  "key5": "4fDkp6KPczFUsJqNWoxLgYkPwB4EDsKa7iTqBZN28WsmTMRpMFZiqRaKYdUM1u4GnoCDZo7sd5qafe2m6NwuNyDj",
  "key6": "5fpMFPJoAi4SzmW1uYYAf3NiBfYK7iZc6By4oZFJauzZDUx71MSpZA9Dnco9fcRSjwkmBoR9C9geHU5D5V16ipoe",
  "key7": "Xx9Uj4MrPjbwsBJRsxccV3UohSw85LtKne4nZWafDeKdKa7wVo5LjtNSHNBfC5C2a9vpDgf3yB3gouGD1W7E2Cv",
  "key8": "2YRxXskuGibXYdc4d98EPYe9mqKC51cqCnJLqtGdUYGF6PeqdXcg7rYXtuVfQyzq9aJEBxwAupbmQM7AxxXscXEa",
  "key9": "g4oKQZNPpPLX15hLsHRcHyjR1Q8F25NhWHiMB1y9JXyRUUTbmVKghLwSfmcirT1o2xi3E6bPLVBwNa8BPBiwSGQ",
  "key10": "4gF3eVjE6f6vnAQrGR3NvHuUHdxJWoQjwxNxnhyaFVh6X6bVetALptytWydTrNETqt8L9YWHZzJKV9jypchGtuAb",
  "key11": "4H22pEUtuegvSfbgLWqyV8mkpABhToD6kU1hdnyFQTHTPJiUuHwQC2GfUMJdoiZKaktXYY5o7kFVWzakXiYErmC9",
  "key12": "PPKEVCQGwbWB7Lzon36axAv1QGpms3tznbijVJT6CAR3NKW5ceRg2ZWTd7V7afJduJWWbVDWkT6SE7i1q4SkAgt",
  "key13": "5P7H1ks3bEJu8qtdvENZTDL19NgTSCnDKtuVq3bcZ6ZovWsnG9WmzKwxHhpY45BEyzoDKi2ByW8JEbykSjAN2UvR",
  "key14": "3DV8C5zFGBi7GDZ83Lt8DyuVKUJFtgcXxoHRV2By1sHDAdTaBawdiznNdNs2zzDdbpGtjfj7ddfRGnPTHgkzsh6",
  "key15": "31EhXjWf5WzcVqdFAkcDno9zhhk9irxiENEhoeaGMCijDxADjZmac9NB73CLqASiMVVEgTyemLY94gWfqs8ZNf7P",
  "key16": "3rTS1HERGT339rf6ojtx7H21enjM69BqWCxUMd4DwJHUMbuXoTNBmjbpycbpzonFEaLfSuQTHzLNPkT2G3PVqxDm",
  "key17": "2g1nMRNx9s8frdiA12VGPUDrZr2QQqLXueRrxQ32foA25rMVU3bi7BM2kj4QGv8Mj1unSNTEfaaqQGKfELwVEB2o",
  "key18": "5NEid5ZQNY9XBjyYrgyzzWpntinjBh3hQoenJv2FE2FTX1KHHZe8PQZaWgkxvinwLmoMvWRe59fSkrq1c3qakxHR",
  "key19": "5jVR28LDWXhm5FZ6Cb2zouiyYG2U6hzDLqgJH2cM7hvu4tJZhTzzcYf6SQtR1Uij2g6TLcBmKWPYa2dFkNSEH8rD",
  "key20": "4RP16pK3LvbVhkCZ8F7YogWBCy8Jnsyo7Uzh7SwMPkFrdUY3DuDjhDeAasks9jttM9BNmNVuNvhjGWTdgfbzy7y8",
  "key21": "3Ew6uQak4WrmUifYetySC1vnk1ccFWaBN6bT6rhf6YpAUWypyJ2vsJgq8b8oLjcVCV9zbGLCg3Qz2ooVz4M25jDz",
  "key22": "4Fq68UW4RtLQKsbuyN1WYvLcaKVT7k3vznGmMAn9J41YLeVHEUci9g6Lr8SseY9oc9RCH21T41fjMsgRuetr62Lu",
  "key23": "5ki5aAcgkDoAtFoTRvQBfn9x8BiK2v3h9QemWGspUcAhxgkqnm7MBKKAf8oVBhwHq4gPSnqZtZdRdjPAX6K7jVw1",
  "key24": "4UMwMx9heqNeJb1YYptboYxWa6rtujCDsUqKTc28RcerqMboHd95h93Uq7qDLYoJMtQMgcUVFKAYGPXfXhwnKFRf",
  "key25": "5R5B1ongLFb61XRhegQey1tuKgbMbMYomkSo8bFsim8XrkwG6Hr8nUw4WD3jHMu7vQeS2qM33RFaMYnZQaw44fhH",
  "key26": "2yLY4DaXRv7swQsnQDhkg4oxSUPVcDzSSXTxixvf987i8Veq9PoKLi2N7SehLDo3pTu51jS9YoeUngMqNrDWWrHj",
  "key27": "3NXVFr2D7XSSsHeiqMGepuaaSw3Nda9a14uPAYxKJCZzxL4VXuZeGsHsrNa5DiVmXSXQ2Jrdc3ofZT2hEy452Mnx",
  "key28": "5VHXq2kArqMBwwXnR696mbkJwtAuo5PVohWeZ5cbTKM7zcuAc3kQrj66zYisncJ4XEhgguFtz4ZwXXJBWeLoEoU9",
  "key29": "3aZu8unFn57X1C6hhZmucXiU2uHLwUxg47NJ6w8gxeJEDA7oAzJgVidw4pp5aLi8RdpR7SJfz8f59wkFRsHgjB2",
  "key30": "5zBt2R9X8nKQ6EbjpLmNoqDkN62v2hdP47u3Dit1ScLoQWc7u8sAmmHSRry6x9KKNUrWobfAdH3iL8SdGGp7zyEw",
  "key31": "23zcErWZ6Z73S8s8N3vjUQcroKX2iSSyjBxCzbkjWgDTkTS5ChV5e7SVYcgfH2FTWpiyLK9gNhCgqUh1u3i4ViiH",
  "key32": "4dN3ZQJTbNxZjWd12kqosFkTCif4FPKU1EXSB7TNcPaEd4uyDkxywiZt4zb9XAkYMz5ByRsEqYUxpsgdJUwaipVi",
  "key33": "4mMPJ3Bw8773mJFobjNKKWBhQUhCbZiveo5oT43DC7bkx242WdrJ8fm2cvzBRa8BntnewDQKNz2ewT2XCpo11X26",
  "key34": "2zLxYW96TkuQN7ndsUGCHd3oDHgjggGwLSn8NtbE1vArRYkgiaDySh2TDRSeLafnDZVXmkzqcBAt3wgFjTtYHRg5",
  "key35": "3PVaXw7aBYNbnyumrxarP6LrQ3v7mD7V9SdYzc9hBia3Ep4bJVKJ1wt3kv8Dfpgg7FTXKaiKgmVVCJ673Pj9RQp",
  "key36": "3pTevCHPk91UL2py8VNZFa4cVt8E8AtJ8mSgJNuD7qPz8x4VvXwfMeLCEnSvyi6eSACpAz353jd6NhrrqHW1EEh8",
  "key37": "2N5VH26izndDPdQqKdE1hzjZSQmS7kze9wXKb1W1QTBnkqh8ANUdJCEe2Sa3bCA5xESqCXYdU5hdmZYwyjTquuaV"
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
