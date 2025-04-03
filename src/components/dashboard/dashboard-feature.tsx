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
    "5eMsrZfr99JXDcxPCqG7n2BUiiiopKeabURFRDVLQ18pLiatUXgRUBwq1gFSoqV9VPW1DSxpC2TiA4XPPG1LoYX9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4m4ZpAEwoJu2q5P371MYWuuAQDQcAywg7TDAK3i3h4LKroihEpZV9aQkEq8JA1qA9QgHnCP2RtrRAiQH6xBVnRZP",
  "key1": "5YvBTy7eCJgYPBQQjaU8T3VyoUDWHKCEpL1ZusCuzsjKTHK4crzpox5m9FAmCRXc4Hyb1KFDaE9FcbTtZRCPQqMv",
  "key2": "2Dwt5Xk3o35mJ7E6xwHWCsSBkQ6vYa2mvKkQVaJnrAgbLZajYxzV3irHpXk1ooAveBgbgzvdJdojHK896VLogGga",
  "key3": "QkPRtYBorqaCfbendrde5hKThr49YaaEKobM3Kv5j1xqGTPPxPHghZ99pKj3kjyf1khjtbXxH3wdiayGy8WEENz",
  "key4": "3n8bYE7zoZVakk1ykvdk2VQmSqngdkjYYYLsc4Wd5QVauY4v2bkiua1EdgZg3Z7mF8CVM9iKQdd8Ku6Q88VBg4Aw",
  "key5": "iN7e7TSAWjhKrpiotyruThGqsZjL6vLQ65yHCsLVrnZ6iCoZHhGgKYPuSZnspUXCb3Ndaqep2bSeYjcnu5qdPMC",
  "key6": "4MLD2o7VaPmFj1KmsnFDHvEuUf4o72hgxKp9vYXcd7gizCBfSTQaCf89Q4i5woP4QFgZzWXc1QaYrPjMnnZMS6n9",
  "key7": "5wMRH2ioGGkWTfp2xDooKm8ZhWogbnb9LUfPcAuNm6T9AHnVaT3wLJcGkpWC5RcF7o4pu3SE1xLutEUdjKRsyH3G",
  "key8": "44e1pAwjSadaQn4rNexEsMsDgjW2B4ZuL7j5DKwDihKtCiJ2w1rn3hy6Z3REWDWzA6K1fJ8ZgwpySy5NyAVfFXSK",
  "key9": "3Pq34MafGHrGBmyfnFKXuUFggz6GepNHJmrjP4xYfDzgbwBVZ2QZyDyTfsYfi6NgCr7Tw45gFdgp8ZHVC29h29ja",
  "key10": "f7iXoNio5J3x64Ed8DY5n1pH5hcynUxgULmKyogRVFcpQGhXwU5A9KvCa622yc1ZLAtvbs3FhaBjHvYPYGYZWmP",
  "key11": "4ufLwUyWzYt2X793H19PizDmRtBkFcos9TEY5faPZECmNuj5Et71j7Na1w4w5A9jw7MZgCPk7zSzrLacv6eiK3GP",
  "key12": "38yTt7Bk2SwD37aX4P99aJ77NEhRwyd3Ny8T4wafsAmCSNVbWyEMo8D2B2dvAEhzCM3d4e8KfKDszQzwW6gE4y9Z",
  "key13": "5D2LiYG8KUoptuYDDvir4v9epNbqk7MwHbposw856r2hGyMxn6eMhdwS3BUZ4dRhbWqVVGNLaatfYkemR7igF9n7",
  "key14": "2eB55tzJVUAHtRRrqcVoih6MBRQjW3zPMu8nfRLrs8VgskbEYdWsSSQ1tqoSvRWXtpnUzaSytMAVwcWFrL6Pj8g6",
  "key15": "2pbLRTg6ZMj6GWBAQ1zX8ec5unfZNDJp9bP5JSH4ydtkGhdcoTkWvFzQpp6cK1MEn7QtRNqZdAGvWs1YL6k2y1cU",
  "key16": "52opWz7y5ngGdcxoKGWgAHJkscJ4BKuV147jgpGdXkDKvzmBNcmjJE1tbBB4Py5dwZKSfPgwjTbM7nXFr4ebfTvS",
  "key17": "48Jpv1Qtb32syhvgStFFkyZGTCLyvbC6EjbGoyLibVbPLEXQHkkmKef3qsW6DB4sFMbqJtGhodrpWE8Ko8Fopkm7",
  "key18": "3kp7VYsYfeYXTi34tY8652TA6ySNc3UMtyEsw56eJu2hd7ZUEBZkG1EnLcTQwBdThZfo6vhyMNTZrqwQQoUjDwnW",
  "key19": "3gktVKvfed1kpaj4cNVKKTHyze22Ufh6qZ5hj15W2amup46dhLmgBBXjuzGz5HJGAFFMB1GjVZM2UAFEp8hdT4vi",
  "key20": "SxddqkXM5uebJ1KNzAxa8BWdqzRRL579zU6RngB8CGE3qMZJVRC8iHzUSgPpSiLvqzNQwHyEQKwPvAaqTGPghzT",
  "key21": "5gx9ykzrv1koKv7LMg9B8t4RWzZRm7cQ4zFKiLwrxYRxqskceq4Mx2DUxbu1Mh3vcmSRYZN9jGyPrYunMiropfB9",
  "key22": "62kTvf5nYa4QVrkDoZbcTErAqjaKxPvSLutiAuN811pn7UK8NyAyJsrT15jht4UhqDsKBTYkETFF2h4CpY1onuhA",
  "key23": "4f5DXPWrQV19fbRYyimJopVBP8wwDGkMUSvTjQqWpXCwSjGhNdv33wtHUUdx4YGSwkw7HxyDd5u1dpzQUckmDfnk",
  "key24": "3veEkQHqFfhQJ46LTsHv6FJFPcKDRC1NotP4qdXhsqwkmLXvg86Xgs66YHqfEpFiuko3ErniVVYwdQLM3h9VuST5",
  "key25": "2AYfPDyatE1ZJy1RJDhaaM7noRDBnaJij8rexZ5bUZv4nAstJwNGYau7JH2bKPXHZWSoLKxM7eNDSU4Vv6F7dHyP",
  "key26": "4iHDgADc6BdXft9eBNhvfvfEjZ1NTBmy29jpA1kVTKJF7cwaPykvyN7uAR3QZsqFJ6unssaM5NbvLAG4mXN7xVMK",
  "key27": "tu139pf6bNRnPyjDMwXxxvQeRq2tiCQLFfkFCzya5oPdK9ivpUxMQ2p1YHfVtNtyZDmEgxcK3533oKcYeumapuS",
  "key28": "4gJTJFVaYqSzVB4iXHeK38kCeixRoyrpQiZxC2vJYf48t25M7poTs632B8ovcozKvRLEH5DC5A1ibdeSnYRnuv6a",
  "key29": "5ADwXwZJy7TvHYVyPa1tqywMaGLZ48TjXpzKeXTGbzKrYwnuVxAfM4yhz1CsgHHxTNGGp2ubxthPy6jHbLYvihqD",
  "key30": "4WTrq6y3srpaNJBVbgMuE53Q1gGCjzD8Z3f18WuNB8z9Kchcy8dDsmnvcFPcnHXAzufzzGCCzD8S25vWugk7XZ5f",
  "key31": "3E9PpEE85KW7xz9YPViLKS5QuPgWu4NiFX2wtNKuAkz2jdd8RfNUKZKUjs26GTe5jTXAajFpb16YPJEJG4PycNfF",
  "key32": "vXCMAfbW3Cz8GUDQZ4EDWg1B7c3tNzUu7voBk5Wg58YQgMv3asiCKxf4esGkSUNJS5Tj12EgYyuKCvspEG8TFSv",
  "key33": "NZ82VgdSzggFia2w9rud6riqT9VXP3UNhcMbahioso6ArfbTvQjwHBpPqyPDi9eb62uUFjp4S9jMt3dj8SPT3VS",
  "key34": "4uJzkzTWTVoLrWEvnewkeF7wUNSU5VFPS9meaUNn7QJqXA1N3wXAoHTmwHYbVx9vh4ApE9tH3jPA3T7zGd2bfepP",
  "key35": "PBCUm3Mqiy8dLvjWn4SPFd4F3T8xrH1AHjZoXJU7Ju6TQuJCDnQ4GxdqKTnnDxQsnZQxRu4GKbDBfYJ4huA5V3t",
  "key36": "7smVWnNaSY4Swj3B1WHjVk2LK7kykXH6QxAWKH9VXcv4bAUc6VxyKREYXLTt8uiHXeeGMY583UHqy4HVgatmRR9",
  "key37": "2C97n3KeqAdoXbVGKJa7JUJ65kHGjVpzTrp7G5txmXJ4ui3biSaBSiaEm3Tu11fJJPjF4FQAewqDLeFpsqJCQgRS",
  "key38": "2p99kEgNadL2iNtoBmVJbxGrXMkLchfw1Jz2zT35VF7979YkVS9icpGAH1xuc13JvHXMvbMMd7wPPVYJcbf6EW8d",
  "key39": "8foZ2ot5oXodBH7GV4x8NeT7S4PfxkuiLoiFyEhjZPBVoMEaqk4u4GGBTy3RDQHqyiVa4Wav5Y9RvKQ8cCHbysX",
  "key40": "2UCNFYTtzpzs67U4d9kYMqqs8uSDQYMpeR7KqgZVrhNoiDGqoRAB8m7hoymkWZioQepAbJ4bC8vTSNNh8HtTFEN1",
  "key41": "3e6fXx97QuTwdqDo5GngUiCoHJH3g4m7Doa5qndD7qUpwxFFaA4veJyV3keNuia6mNkj3cekwXXXQfQyqUh5g3Fh",
  "key42": "YhVUSB8rxKadEam4crMwEzbLRDsC4Jv9dmuGtRULyRJgPkV2mLYq1hhXnffK2dj1qCgL6MdrvEuCwEFCAyRsgPC",
  "key43": "4kDPmGea8gjjpLw6PtWqBeHGCQPv8QWeLBvGB1AFi1TmXsicpPeRRRKn3W83RSDPT3YXmPu8SE7EmAP48eAy5T9w",
  "key44": "5HV1MwpfUCxKRjDY4WmVZapCwNQHQanSmzwmPznaYJAYbcwpfQnJPt2akcQhCGamjxErQuunmjixf8XGEB4ZRThj"
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
