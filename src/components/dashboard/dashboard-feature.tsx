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
    "123tVq7JuSpJLPFVPpHUNudDai1GXi4nA7t6D5JKr6E9Czvi5ayDyQUBXjrqgVvwZ2sp4foQwM8dyPJW93AVCza8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31zgSwUMZ5i1YdJxvgqcr5bheAoBFZLTKNvAkjHbfGSGnh6aRAbXyL4RNZdGG1CQWkLY4voJiiS9ZumDUG4ZsW28",
  "key1": "5QEvz3K3E8S96y3QJTYR77aufwjg62cgxegcwLzoTJXJxb4xZpDE1cwEAoqUi5HeQPGixTdpUxXcG8WfC6un9ET4",
  "key2": "5oXtfAAYjztvDUdUENzXfnRBe8sQgTFqb9oQNKZLMhQmrF9gdULkuSzvmmGUqVuPZbHWwJ1dimCyQ8G3SoR5C9Q2",
  "key3": "MsBJuYSjtSinFtAj1LCKTTXc4z1sMP9gaZY4oLn3nBrZWuHuxLMVYuAFMBR4GYTtUCQrkkV7px8CK7uFcqHnqou",
  "key4": "33TKZ9bSjBpNruahJxxoCKoXwGdqyMR9yMMqNc1USKSSoNuKgVbtJdUEAarVatw2AdQf63hH6yMJvZGyoS7HjuC3",
  "key5": "2Mp4J3Ni5uDWAhTHbvC5P3GpvokDCE4fL73F6NvrpfCfn5muV5Unq4oWJqHswRxdUFjqkwqSvvZKgB4iZHBRkroN",
  "key6": "3YAZAnvZjkESs1GSaucCzMKikdXKoQFkCoQWbFYb49K8rXR2cKvDYTpfgG8RS7QaGHEzu5dCLpuDyNwhyURfAutg",
  "key7": "MtWxDfhfhxHhiMP3zS1cASKNpjrD8Fg1ceujvF4VhXxeGRiwM7o7wMRTqwSMxbZzoki5rUs4FWB181LX46eGN7q",
  "key8": "n82qusEyWj8BSprsp8mFgwtqfDywzG1Tp8k55J1M2qWkwUA7jmiUJd63MG1FxGs1rRKBfqzK2gQQH1fmADB6HCK",
  "key9": "3Lg6YRTu5spiDuwHFcAbJ3kVWbGDkkFxh7TASEcm2qZL9yGSS3iYFNrpKhnvtCG4aU85nr3BjsqZKwb3VgBoiY6a",
  "key10": "sCBeedjUAShyMLjGDXMaYV7hLu54uGAJryYidxYfZsKcdjyKsH7fYzk72aXDFeTP84tckTia6nZQpR6eyDJxuRX",
  "key11": "2mkQyCheLSaH8cVM6PssYzHmW91xg8qdvD1iBD1UxnM9ixdVLKtYDhgwqAJM8VB7pTQi5RCTGeH8qjkD89A58bhB",
  "key12": "zQJg3LwuWJRHkJZMWnFjeT5CiKmXffPhwLaseHcgnteUG7z5ygKa67JRMWFBeuFEPCbf1dvBHNfSeESHn7dDxLf",
  "key13": "33Sd4maGhG4TwFhkTqZ4j2KLRoJFVAnPjr6tF6rDM8PDSVufvJfVroPqTu7P9rxqJrFRLZmjFSDWccUCRik31jFj",
  "key14": "3DziX64gRwHg1etys2SSZZ1cKZRJ4X9zdae54iadgMqGt4nBMRhSHQXZTkWNLoSzpdGCpscTQBqbHk3bzYgfmWgs",
  "key15": "2Fx247exdsxX691nKKuT82syjZoZWantrax6EBK74kkRozfJHvrSeaoQFBmz7sMDYpEBTuPKVtjM1ZnJJaNaiuvG",
  "key16": "5LuiFomod5D5rvua3YsK74ySrSDk4UFqDNGNsS4UXxG2xyQnRJfYrMv6fAPGsyNhDQAQyp1wE2yX4oVCjZVqBERJ",
  "key17": "2p27WQCbSYLeLhKcSdwHS25k6V8Jwu7SDpiAGxJyq4MKzuLLaN7dBo42dYMpzGoaoXBUPHeFp9J6ML3com4NJpjp",
  "key18": "f1fnd4Nx3CZQU8EVnSAKmR8e5jyHrvhf3xz3Mfcz96gGaa9jZs9zpHwh17BJ5wESpTzMpjdgV1hoqMd4tJM2X9s",
  "key19": "25edyRhXWuVmyW9S6hcQT18QwYPzuAcVvNRPm7aVywtx4j62yQuPJkxfpCifG9PgeCeLGZ5LqJuXHE2BF2FcJrcc",
  "key20": "4s2XCWgMCZSGrzCuzwYbJBmbr8S83y9kuhMokk1EHBKshiA8u1aEQQoaRCaViyZgFSmx3Z5xkQtS9uF63TUirjRP",
  "key21": "24xxdSQc3HRKWpzedAnZBgYc9t4sDsHWrGGZZqwhS7MaR5xZ14tnXU1SyMJMP24H1XGYPronjE21dGHtZA2jH4EW",
  "key22": "4PwfJaWLKbxpbXzRSeXATKTti1gg4vegssNmdhp7JHDxp2NZhWKj1dNbKCgoEQ9uPKTrzT2fBcf3kjVZomk5WTFC",
  "key23": "38pLdiJgtvN1QeJdu2PfUTPAAdGwjVvz6wNU8EjQKr8PNDBnqVTHu21ejzMmHnYihANJHYKGZ754PtHNnUpSsrNx",
  "key24": "3zBLhf3YgEMCJEnU1QZNspP8YsaxwoVjGW8WHbJ8YoiwgqohytDEnFS8rfZSF6zmBpTpY4XZs3NdAudo5wSryBf4",
  "key25": "HWvr2yeD73HBrFGVdtNHbJSgQatFkGy86Lr9dHtcKNEWvq9G6uactrQ4uMPPbswGz4GBfkcq2eMhDmfseyUyxcQ",
  "key26": "3ipg7cWkfbcuMU2mRuHGbQNyW6Qbs9tiMGwnswkbft7PZ1GSyYXbxH8eksVLMmCAe6GknibRERQojcsLyn5zXx9D",
  "key27": "uyx9XfBnciDaJD1MgxVwcYxw98ACh29qGKdvpQey3r8Gn9kpChYRD7ZN5MJUwFNPSiNoB9QZ4jWDdHHysCZ11oA",
  "key28": "3cQ4wHHT5dTVREwyr1cc9SXZFMU6zpr1CDthG6thckj75CFL5dkzZK4AprRdYjb7apLg6fQ8LqDHzf1nPJ7KJ9Ya",
  "key29": "3XhDGRTnhFvJaSRdEhifxJH83r7faDMwV7rEpJDmTTYYxkVepQLXWB3mMqiEA7FjAtWG1UvRWnSZTcCdgDgUqfSz",
  "key30": "3M6MNKgYT3VNZVkZXaCC9NU58M5TxV9XNSKrpcidSZVk7PVcUEvCSgvd1g7aS3Ryk8CGNUPSRnrWUV7QGxthdWZr",
  "key31": "5jBTB2A7fT8Bi9HgXQE7VjtiED2gB5tdkCsTf28C6ycvxj5Nxs1JgZDy7UEgP8yzbz1PZXUc8khGsjJYzbJ9EPLz",
  "key32": "VByw2BGnTpw8W8vKZnXLR6nK4VZ5ozqwqKsmd9y6FJEV8ZyMjp38t7prr64AbrHAGjnSHAUEpaV45bUZWC9EBHD",
  "key33": "4yo8q9aQp8Qxwztss96XnTCeWzGY4CNChh3RhuE9ELUYBXgKGxusecDo9bcVkxeqGUyzW14XVS93uGqQVYsshB2H",
  "key34": "4GddeZET5bffcrKHnPQd9GbA2L1kkeJAff9AMKbYwbjn1BCXtQYPmVAfVS7M6PCMtaSSd9mABGJyGWKK65f41AwU",
  "key35": "5bqUYjgAd5HRjzUTHh13wehXGawTit8c4TbAd4ASX8hKrXPB2aDkayW5wXTvFLKHT55BNmaVzMyhUzrpMh8eUgby",
  "key36": "3DsQuYYjd6MobkDGUKektRt5u23nuDY95ZkAUHCGoMboFs76er42act6f9WZPfntaqxFkJKf6Pz1Z7zQmoUfrWTa",
  "key37": "4BeYkJ8cFVMXTLbceEt1uYbmy1irVFaCfDoiBGhgsbqXmhzVGzX6LGghkh95ghV2d2sp4CUvpQDSjtZV1dQi8xAa"
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
