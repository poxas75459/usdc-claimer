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
    "3hE1bs2fqgVgiT49M7AY9ki7z64Kg6WvWWDbrvBBQ4uSbtLnsuEWkcHNMmCgbqmZzBPVhBUyFqG4wgrLfohwng8o"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "eP63hW2m99KZmUSj1zWMxFufTsNXPmtLAiGBy3vaJ2nvR7E6rNyDG7Ysg6EgTF1kjxtLjc74GVJEKDX78LyhnDV",
  "key1": "yiKDkhLsbWiLSqwf25HXCBntMo1Y4695sMeagfze5nioo7ForhFZX5V1soEU1Rx3oYzWYwVjKtNsiMifCgRpUSL",
  "key2": "5JHDMYKPQz8M9ukQYde67GHqX1AU1XzJ4qRjGxfbUHudHeEXdczkpDNT7V2VBtWmF8ZJyUft22AzmK7UYGumJ4QT",
  "key3": "55v9ebLSUZeXdnmY2iCZ7NfjGsMi2RmoPgaS1f4neE6RzQWEoJGVFrHEEsVtnfCJ9skWHHYvg8F6GnfNHYp3WvxS",
  "key4": "3UHF9W4UfnMuPjK1b4HZrbSuGL3uMJkuFafpCJy6ScNRLnnBnbAWzVMX6VeYYt1Mk33ULdB42o2hbpNWarys5V4b",
  "key5": "5d1vRyvT3o4rDne9YRR1fp2EDhv4AvhgGF2Wy73kefTbiQrofBs9VqDDqcDxt3WKWNmQGpLaQqWB216aE6qFwFL9",
  "key6": "YLPRJ8FAZDHQiUUpMQmtzHUH19UUQVhKWtnrUQJu1mJ8gLmxVR7hsFchaghxUNCGppQEVR8KH8G3qwfZVBPMFFw",
  "key7": "4pViqyUzE7SzaBgbNkBcnqrZfQbngHeyqargv3czufe4AK4mUSX1oRrniDoz6T7LHkpWSLTPYuWRAAXX3TJVDrD6",
  "key8": "2vFUg2rYrwBedPn7Lr1ApMnjQWthCSHy1wWQPASpjnRG83VjkgHkbBMfU7iYHTrpXVuLixMTDpQqZykD9EYznW4i",
  "key9": "65CiZmh3tVxXFPftJ9hEBLa5mhgs9JpR5q5qmt9pkW4dBwpi7Ha9grPBUw574mBzJEANtMbeS45bJnbPYdVdG6v4",
  "key10": "GBQs4yqu64KuTGvKnv9EVmbNAhK5vFVdC5qCWXKSVBBk1iohy84Wzz3hYk8ANk7C2t397NSeGLQqRxd1hnf2Ltv",
  "key11": "2J9PzDibaH5zHENC8rH6eWFLtAqRxrKh5jnixmYAiFWZ6XWyRgKYjQTqgdwHLrsHb4CjPwGtpWwHPkTLtP4rWzJW",
  "key12": "5xC3W9zipohwrp1M3bhGktsy2GAsH8eJNEu8wQYXa9worioeWV1NWgaqPa8Y7SNrEi8HVXNXUqUvxNJWEKjC92iD",
  "key13": "2CSN3yh7Ab8YShVdzNdZk2GMXwexabcbZ2C6qRdUgvvouJsgAME4U7nz8KXx6Q9muKtqvtiy8GYn2HP9WBopKppW",
  "key14": "63xznpxA9rpuzSGBQ32nnRGysK8pkbmdc9RYiRHrGWXfsiPqdTdkyhm3rwtwHP4XKW98TZQELH2BZQqC47oAKoHS",
  "key15": "542LRoE4QooAzAo5bAzES2cN1R92bjfVNUHWXDv1bVRMvXD7Tghqxcy5krsgUBHW8SdhsP6hcu2WZbQRLzwMy1cX",
  "key16": "5UtrwokKc8pF1PqpX7SSWDB9JmL5vdnVxguH1RPRHmi6EpfYDR5pHFKe2DBHfSkUWQrzWV5U9YjB5DfFs7rK6zcb",
  "key17": "6nyrBnjeXxaamMW4YogzuFCKYevbNgmUaQcJbssJHqw8C9HDqHEZKuWRTx2FsR56JL6qDD7tZjx4Qq6xHaz9zUo",
  "key18": "4Dc7UEJLJ9fySg2mecD8sCUZWYgYHuKJWqSWAD27ZeDCrfHAnnBdyDZztyioV6du4LySdQghU6w6LPrFyhRrgDMp",
  "key19": "64phvuxWpAEKSUj3C1S71hhfGeYBgMM4G3m5ePxLsn6gggYLeMx4DbkBv8v7QRvtwCJxEHx8AbJAGdu7GbUy4SR7",
  "key20": "3Pq8n41Wzjn3v91iocBsckapdtUNXaSPkwXwQniLuEcWv4Aki8CwvmHgHKGxthEAJkyhQzZdpjaGVpaA13Whe3b2",
  "key21": "22SnZ1q48q2bzFV38czaL3uKPoNLqUSpb88KTgr8dscVxpWw1ZzrpUnVF6epa5B3wsBAeqMmH5DkPfCq4Eh1r6Zw",
  "key22": "62u5hV4hCfpXMQkfaPUExABmex2mpqQkoiJX5zFsUD2zLwpnqjtTK5tBq3w7RHh37s3BmhETZDncvBYbruEzaNkv",
  "key23": "4edVzB9tWYd7A2AvR3egzvXwBb7AkyPYCrajT6s6V9JPdv3sZzHArvrmXYKYd1rnotgiUsSPPtJcBVmWDhWApBWY",
  "key24": "2FfBpeGxpmSqdRWVZDt5MuHtEmBCV2vhRgzvXgtbtvECcAccfp3H58cULZ71TaZJHkrAsTYxxcmPhjNMo6LpE15W",
  "key25": "MNbcSxkVp59yC7xb92SsGkD7bBzbYzdPvMG2oAF6MjsRh4i4whNpNnDZTqEW6qW3kDbG9UCx4SD8Nv8rXDSxLQ1",
  "key26": "3yjQn1sbhvrL9Xq6MuzxQ31y35M2aD2PYuevRUoLPSFSd42X8UgHMGFgFPobhspTMwX5f6BxjVUB3JnyBVsAwzEr",
  "key27": "DatA82QaZqBZj5JDDT5QDZXG527jzBuUVnchUX3JFfSvPSYkf1yJuV75cD3X9xtNef2hHNhTdFzt1erhJEXShS1",
  "key28": "38nGUdWzonG7NgLgNw3C9x72nNXBzurN6pSrxdPwgN9xhdKVdkMANbLWPypA6LWameiFJQzg43Pr4wqtcyU49DWy",
  "key29": "2SJX9n3r3kSM18ZLSJQjC96k5SK3ueJjc5UueBhyuCZ9Jvg9zmBe2z2HTFSzakkFKjaLx8AyighkKmoDu5UsJzMM",
  "key30": "2QAKAHUv67X8ZNmoGXrDF3Gq8fGTT6SnJxjct6QSHBkc5Xf527f5N7XoGXCvkZ7bTuvqBf2QWvDksNGArmhSFw8J",
  "key31": "4oGQURHvBkAkxQBRmTRezWw7oFKuxYSuCyPwmrweVrD5Wb8ndjuR99h13SZLu2xxTpFYceBdDgcyptCDdUY1FzYv",
  "key32": "67C6cipsZwY8gBKvLGFrnojVTPozDFeoGy1ACFZNwrAvineQXDmnHeZXWw9zz7wuAcutNzvvrf534vtWKRaW7k5t",
  "key33": "4Bcs3FRugdufBTP2n95Lw5VstZGtSmSMXtRmMEGLqaFAHDhMrF87TBwwFA6sWPRPYCvfvUQgkm7d3qZ19dx7S4jZ",
  "key34": "2wpX51Hpst5SyQ1r2n5vfPQFkdNYPAL9JUhV2P62ndk7NLLsTyGosBwU8xVaB8N4z6GEhD2dDof748t6V6y6vEo7",
  "key35": "3yvzybzdTLVyFd2P14ZS4ZvKPz73FaDxEEqi7c6DQigbocBoZ2Z6HP6E2YwjyPfg3QuWejhEiXNENmHEYcuYPCys",
  "key36": "2J3DdXPwqepCc6EXGjLGQPhwySbD9sCS71n6YoHucA3Fce3y5MjKeU8KizZ5qpHf4DPjSEvEPSPqCY1m2xTqm9sT",
  "key37": "S1LJ4kJjmXzX9m5pVfAxZC7Z5PRRWSoa3DPavnEV6MDPbsSXjcxhcwgS61YGSWYVCsKKrznpVTYkEK5Fkchf6TP",
  "key38": "3GgnTzBALpH2ogzRmQk8MTjFoTej5LzqVHQyLMpxpL8VcQ3asAWiQYDTuK1u7PLhhBmGS2QnwWKXiMGtT8gbjV63",
  "key39": "nrJjTWPuzniSyHQ2UCjwrJQ3ThT9qwt8tGNPXqdyyH6fU5D9hGWThnqCnrhnVXa7m1BUmVr55Eu6vAsyPWKeWfJ"
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
