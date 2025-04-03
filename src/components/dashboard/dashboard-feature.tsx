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
    "5bDLWAxe6zcUBXYZRPd8nyghBcVL1t3N5gKuWnEabp8WvjzNQtE1S1apwGVKuxipXdSCXLcXReNqU99Rhr39SJxj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3n6mhCaGgssiYGXyvvRCKXqyHqjQV6ydkWkSMetawgbYAbfLJ885jpPARcY2yN6FoEYVUATMYQu27CZScpzhbfky",
  "key1": "2tjVVDwxK2fDfU5r5uz93ZYHFQnzA6T2Lgk38rDvRHTHDrvuu3xJyeCS7m7jxiBQzQkzL8Wk1AV5U1YgskYhn4ho",
  "key2": "a6ko3hZoGwxLUmNNWWRAdQtQu5krDsADvDC1o5jtSag3wNWscYwrtbCMRWp54GxtwSBa5fdzkYE69AXKg7iYSaG",
  "key3": "Ca4ZuoEP2p9f9kCBVX2Zu5pK5PhabfizsWjBsaiHZk92fxnRZvuTCMEko2XKAQJ5HikYfQxbiRGfZM8hv3CjiXK",
  "key4": "29w4dfSRJdM7tp6jFkYngxpZcgegkC3e2vUzijx6dGyDXfDELgSiZZto9AismcGK63MDyWTtQ3mojpFe2hufaJBP",
  "key5": "3qVbu3wE3mZn1gpFVssa39Bs32xB7DVPkDVrEZFn4arEDdD2kKihZ5QCAAicb47duA9mZgZNF9GGA3WzbamoFKfq",
  "key6": "5mVpnvJeK3XJSBL7kkVJTrML4ZP4T32ECiFsD2XChytmoGEoKxkSBKsG7rTnKePmFvhGj46DthDRMX11cnQGhAqj",
  "key7": "4rJ5W9P7aXAKNL9FhkrJNsHXisSncxWPgKeA2jVDzCA7mcgSXL5JNHF67rebmRFGYqYpmkAYtcTPJGqGGGM9EXgc",
  "key8": "2akhkhUEhUFiGzeJvVDMh4vwc7A1sC2hG1UdJDVzL7RS8i5XGvzdoN4YYYaNUuHvi9ikh19X4ZUw1rS4WBL1jPe2",
  "key9": "7nYbCTExtW3HSpbmM7nx4KqVkdwuMV2JCj2Hg59b1Y1RB44fGh9uEV7tkWB8anf17cVgt6HSHgKE9uJQah4Gtmj",
  "key10": "Fw4oDDQR5aVwxw562ytzrEZnvXADXsrFZv4TUK8gSqvpoaAkNn3V9pBKkbuvnpSCKduDrgZc4GD63zhdkgBoLsN",
  "key11": "3HzgiH1oRyVPxHQAYJDxRB3KbFyAjmXsVw8JaCnzLDLgmcv8zffJQ9idn9JKXbp3nLdwDT4vnikThCrWFymBjiwv",
  "key12": "4y3kyJVyA14zRjKmXfVsAg4FjShbw61yvVwoNfn8nhgkUcwNgdcgAfnH4LyYnKGJXKh69hjt4iHitzjNPmWg9Byj",
  "key13": "CYPqBdMPf5FTUmhh7sUoqs1U93fTh2F1ZbsQS76j6NNqXiHU4j8TuBZD7isohVhBv7UU91NnQQpAx4fKBgLjF5y",
  "key14": "FMuMQE37N9PPCH5rDL2PQXmuHQKrYySPYihsDtaFjBxufq9XGYyLhwEwAFnMhc4L5x7iyXKH31YeFVPU8fdRDwW",
  "key15": "51tafVFu9vjCfHyB5XVA1wNd2knb3gHgPETuLXHLFSdzHB1TJEwa9MorwhsFT5Gkvteyo6b4NJ5HEc8Qnj91Ri1Q",
  "key16": "PpTW5pJFZq3LBgNrZozd668Vb4rDG8U7wVQxUoQbidWZCJHosSdBda8FX3qsLaHF8DdD3i7YJU7P98fGq7vCbYB",
  "key17": "nnWku7SsujNNVBZFzCVnQEL7wSvVVXUvNj1X98djJ4whNLLTVVPNTDdbwmX7fAkq1HMPYHgLPAZz1fxgJSGS3Ah",
  "key18": "5F99wmdQ5NUDgfNmQjydoWbfANyW85RLZgRtXEnuSesvXVVQoUo2pro2qwtBYzg8Ri1RPXH5Ho3ERvHKPL4wn4aq",
  "key19": "7HVi2i92NHrTGMWAxpudEMWRcuF8F5HUVCXsBwdLwbrbxUjUUpuR344VZavFR2fYeZDUwXmciAzCHfdNLU3xcSg",
  "key20": "3PiMJ5T926M36kgzZvcFFyxNW8c7GMv29kFJ5tEtQ9UujuXsGYZZ6V447BFYY3j5Ry9yhGgcAo1gG4zSEuNnSBtG",
  "key21": "GqgTwg1J9e5PiUK5gXAfDyQXkuWYVr1daNFZVshUX13YK3imTmcu9aEVZMgLr5ZY48FN6m8WJmWcFu1C2yuW87T",
  "key22": "nhsMGA42VQsLgmFjNUebpMkYs42B5i6HeCHeKGhTLdXfXGgwN6XHMiBnTaBsQ7eHMB6rskLzTzozZM5A8Y89nyg",
  "key23": "5Gix4XDPahnhPnFeK44mmWaVbqzocTJt62NUyr1DKMYFD9gMWrkXhixoQ8XxwXH8N8TQhBBrgSMxwxraJ7xXkkrC",
  "key24": "2tHu7CgMsMFyxCtG3WWd6g7YGKWmMfXt8RM54D8LdPQGP335M4Kkghg2Cs5UC5ypAyE1UHZcwwAnCNpEQ74hCD5M",
  "key25": "QLg9gNWzTyV55d2NX58TGPtfVsFziXzuAUYn92FbzHUG3N2GGy5RTi9hQT2TRkwFw3DCpPfn1KU9wbVReKxi7QD",
  "key26": "5tHgxGin2QFypE6U5JV5PoEgjxqJSTvBNZKv6DE2orVNjRZ7BRfY8ZzVkmX3BaL3auH5go7pAT8LFC5CXCQKDw9M",
  "key27": "5ydwh3V7r2pg7g7oDahBj9D5ChLEWg3dUD8nwdhfCe3nbGSJYrRZWoPV9EfwKF52v1jNSBXdRz7Bh7Us7xbFEKYY",
  "key28": "3nGYp8QmJDYU1Q8Mr4uu391HRmiGDJE6Pf1tPLiR82UkkAvT59s34CDVSHfRic5yjkxQ3Ht2zDF15g9jyNtV2Wq3",
  "key29": "4B7jiF1GAQYgYQY7pw8xbXZpsoLE58tkkgz9zGMCZSYKHWD8eQgFPbDspFBkw8RxkoGVFyBQ6PxeN12rTqTPqV6C",
  "key30": "e81ybhxgV5BSsZKrLLqDz8gfwyK31GvqVriiGh33M1Pkww3SgxJscbwtWS1F5pzoNT6WcL2mbUW1ef2drQot62y",
  "key31": "2eLY3qBhKLfoAwQKo7AMt3ZhzUxUAQvfiuEo2muacDKvKVPaJyorXQkSZgqrqMNA1PLyHWQgKXZMoA5s7zdQdULJ",
  "key32": "ZJHzzdNNfxV8TSEHkzgEMDyrrWoNgLyVxKJcdgfKrBRkYmLY8wMkvvTvbAPCxiLtUa2iHvQSYrThRmVRqcdDQjb",
  "key33": "3fMHNHtfGHotA4ZYFqwYarKASp1L1EqnsVEBn8gnrUBPMtc75Q3kMmvC6MkTQ9jTdyaDiyZR2o4XcodhqZdmgryy",
  "key34": "4tHJKK7m8MENmJdmnSDPYfYUabEiHavx8t4bvqmJLGDDjvqRpCie39STiLKjQk6Fufcw2tvoPJK551e5i4jP7SUN",
  "key35": "Wn4K7LRYnzBDipkLchBAWd5VMmxX8s69bgoWmhPfraD1XPVJHFFbBfKLiTRFEg2SBgukX8vMXYK9cd9oLgVsY9y",
  "key36": "2tEi1tRzpe5of1nFdc27qY2oLM7W7pAeRNU9Ymtu143F6ngDYZayzpqDJkLFw47gBxVokn6rUFJUPpgkpegdFPx1",
  "key37": "CQwGkGC2rkdtJQJfSpWzRf557Um78zwtNcYTMujTLZRYW99BMeka68cedKEzDDYKzeTSrb9KQrgHXLr6p6HVPhw",
  "key38": "3BLhhKjXxdcd7UbQxvhCrqNVxJ4vHpf46Ksy6FcdhxUJeTKDNcKXJKLZF6pUPe52V1K9mgpVNf17SqANUELEqrxz"
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
