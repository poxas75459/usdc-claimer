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
    "3zdUwYdiZo3ZEC1FLdZBN2rbywAKWXK2KjepjebZaEjYSXibw9edWpt3sLnZqJKAmtDe9CDbJuFAQxn3twZ7LYcv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5j3e5eFmHf3wtFPia7HjnYzYKU412dVUReFr61jo12StpwgyBsuSEMeYHvT1c2H8rEad6q3iwGXdQQYTH7ESdFrF",
  "key1": "5kjhnWAByV4QNUwJVWwghfoZ51ZE12vxfM25UeXfDCxojNx44q5VrnkuBELUafCxDeP4zqFt498VJ5Ti9B6QT5HV",
  "key2": "aF8MyWPkx7UqBq9zLSmZvH1ccQp9UQiqFqXhgArtChDZHLsrEKBqzQxaxz96824bK6zCM77oT7XsPfxLGUpB2Av",
  "key3": "EBTuEwMAQE9w24Tpn84UFgrPz6sF6GdNsN6iZGQPEqB9FDCYDb6XU5XFF9pL4wjXJYgyK32RuzsD5rqskCUaWS8",
  "key4": "a6VgcHCApXBJ7HUhnM8w1MxrjUVEGL3Apm5YBgHiXVstGs7dT2ncRzrkzhxXVwhW9LdYy256kGZNDHXRai4j8Hy",
  "key5": "rkxKCjjniYHSJKqBoak1VLu5Crj2zA4PrPboQVanqqVrdDbMyQ7yJEZFC57nUPNdtocsvvY6pY25ZwNmRTRFfyM",
  "key6": "4VNNBg8iVEbiYXE31ZXVfsDwzetq36jzXnjcfAGSqnKgJjdRfDP3Btiv7wavfRBP8rrdFKUdqT5gf1N36UgHb8V6",
  "key7": "C64K5utn9LHaSQ91vQodcdsaaiuEZK2wXBEHKNfkBX2vjTRhFdxUcZLebGUYRSgJzsuCqgrEJCBJ5go7XjLBBgK",
  "key8": "2dfHv9TZnUMsSuwX5vNKGwS6J76Nwgk9uCR9oGDcKMNSdgWMV6WUXxqdjkgFXvYkjFLRRk5R4NvmJQge7g13efP7",
  "key9": "5pNkaTnxM6XDfKhDSMUtU8RXqtDVAKmtn9WRLMP2jqAXviAnax1fArUhxLmhV1LffN4tqEgHS3HE8x2R2JiV1vdC",
  "key10": "4QSAoQVfkXFxKUdpTQR1acaHD7KjMUWBTibEdh1bdYUUdVbvBDhpJKEn4XzZ9WyYQANrApUxPsgWwFA5TsAJ5CTc",
  "key11": "KFijYSjPhCpjmE8B3AfjdypeXXysyUCzkbkvkFsTCbtbsZ83btSFFmKWbgL2svTJ6NJQHHKki2Ub2svtj5EdLmV",
  "key12": "462B19SXxp37epZWuf1v8HBrEJjafBY4SkBPTXUzvCA9ke4i3N2abkV2jeDKkZbhuLSDvM7FGd9oKEHBzHTVCQ5X",
  "key13": "2kkZKRiFfE23VcvhbAJ4DMB29J9baxnuwf8rihW2XwESrFvr52oH8cwk4uhY1bDehrVNUdwwGEhteAW7KTBdEbX3",
  "key14": "4nW1pJKM47aZBXGPNZmwcXVQc6evvdwBDc5QiwTiAsZM17rXPRUErY88CAnHoV4YYpDkdPN9pETC4UMd8pVLExdN",
  "key15": "5WWko7dGZRPk3qj83V9xNH3xsJ4Vw7D8CeoVk5CbombAgvF45ThkVGtVmRtScP2d4R2wfNd2rgk42yMZYTM9makg",
  "key16": "61fDVuNo4YUqvSQGXo7aLyzfNppXgp2vL51sHw3voWxK9bECYbMb52muteymDeTgwC27qPWMSpCpQxTtqbMaoDSY",
  "key17": "2nhpuGZGEZo2iCeLYFDCEQ69z9esFrMoaKhUZ4hb8FcnUrgUVcFjEK8ZSjDCmvrT3HS1K9QNHvniEZbg9h2mxrrN",
  "key18": "3T4mQRQsaVpdro6VL51VH6gjQyi9MVBxVtYhj83CxQxQMrPhD2tgxBfYq1WQNsYmaCtSUcHLdYm7xu93GERbbfZu",
  "key19": "4ghEhYsVYT7Dt2b6SunE48Q5EzNAZLedhQermF1Vxpst1gU31UBFpH6JeSqDoNXDYJWwa3KPDHFNmjHU3sxMahcS",
  "key20": "5b1QRj8mpHrNYruz2cJHT1PFZacKgLBQdaSAcUc1aS1WCYpsGcWRwVJoMVNksgQj6A9eDhhXDeJUXMKbR8bXXt9E",
  "key21": "B9HxVs7Q5YYNfs4JY5v8tcMGs928GxBfhVJB2i5nvj468yc7g288UCXiKXJAaPEzxf8PsbWc3f1PySNeRAoEqhr",
  "key22": "4wtGWNKm6jF4tNdZ7HPsp6SLDtBUfehX1z17ejC3X4BPseEbWt9gKXH7ypTzUb2TZBiFwrV66kqQqqZRUQo7FURY",
  "key23": "5Z9aCDLwBrQ8zpfr1w1YE9gZZbE3JV2HXGJrW7bTrVLB4wnt5HNmDRxbarE2X486BgorbcK3qWqpFfde7L9ihDdg",
  "key24": "5DhrbVwi9axr6uUAynk6SAATmpdHGdHKcrMv86g5RM5VjxhJGV1feS2t7aC3ZAEbS6jhBfP734dYtGem43U1kssv",
  "key25": "2xjGVd2aDxnXp3trs24P6eguHXuYSj8Rhkbt4pcTHuinZU7ZoNvk8CMbuSZNdDDxChLu7AH6kgCbNhUHxVGhvhfe",
  "key26": "3azp4JAFcdfLWQ8s7e8vPeHS5biGF3AtPjFQvGJNvZnX9ZtCYVUGRRDNakmpcs2NasxbMe8W7yDDF4dsXo36kxTT",
  "key27": "3i8kSiGvzuL3bj1iiw1bWyrcJNshmmLYnWd2i4CcNLPu3CctqVykGFh6bBg4FWnHbdkRsdfU4kRH4StQ26CurhBu",
  "key28": "3N7xj252QaVWMQCq7pU5MTEXPkD8VutFXdubZiHrHH8KdkR46TJtWskucim56EKD1yHt5cHKz2FxD4fCYmzwQZHD",
  "key29": "2oMRgfkxqUYetkscbzigPnph9WNqxcBJtej3ttgTgJGCxntjc24WXLf6bnf9o4mi3q7ZVVEUCtnYhR2e6qw8WkbN",
  "key30": "2weyP34WfiK87cnqiHCAk4RMnHYg3ZAthis8qH2AzTjiqEEa7bCTGPx3XqM13DhrjduBBGHTFact82g3McqJmXBP",
  "key31": "tGY1jGu68jWhgeCofxipGhiVLQiseWH5mURTh7wj66C6mnjySvpXa5UFYS27J7PCaLyfmakjqXPnBDQFGvgsqip",
  "key32": "5jRsXDPLPVoCrdbsXc59EmQcwjQQcdWDLLhwqyFwVLuGRZUZL9574N7yxUbAAAQ4FjCwmcYEfusRjN2byUNWGdtZ",
  "key33": "3EUirSCs2LTx9LmJBV73WWHrYRbCFL8PyCfwr5ZjTTywg4FhbGSWBvfEc1mM42iSiWNkixsqrqhpyzb7ReV8hWKg",
  "key34": "3kh1DABGXQaoZa1sgYcFnqMFBE41XADUaeQvVXRRGL1ikCDjkF3nANQ35g8Nyu6RgMgnTvunopN9oaMRT1ab4YvF",
  "key35": "48vphQMPKdUgp37zp9yHS9xYBtdv6YbgEzfbsCRifwzvbibTdDBADsYrfEAc9nzXaqd2vJaEfGfmbHH2m4Qw8PQZ",
  "key36": "28qy6vD1WB5kGy4Pw7PyusQDbLtRxTcQvtAgYsWkCBqtJY2dcSQzvEjb2zoTtgakD1XhNnCqXbDQkm4ZCt9yKRzn",
  "key37": "3Gs5kxgWvCyVQYmoivw416YQjyMFMigDCDJw27NWxLTPtRg4HZmsfzenNyTqaWHLxhJq6yJUgEZThWvZT6NEDHPD",
  "key38": "3yPQDKhpYvBf1swTZ6Y5R8xeX866DzTcaxSdPJhHtHKDUqWcrJuarwLt94z31wnUvHNyVWUFELjkFpokHfmhu8S7",
  "key39": "35rxH5WDcJTVcA4hLfbbLcHACFKKbkQrNuQAdwnbQE2yNWstTkipEHrMDDD9tXByuFiVrzNNcrWpxH3avf3mPuzR",
  "key40": "133Kx74MmznULSv5mM22qeF4RqAETRtY7ddffr351HuRaA5ntosL3DvqpajkMw6SB1PDkpojvQqfogynW4KoWCc",
  "key41": "2aHUnHRrpmQdqukPpYJnxazeSG95whqxMmJFoYZ2o37zfmrex2BKNdPmwzVZ9evYLRLUH87ni2wSX8LPiXPQQ3BD",
  "key42": "kD1wTtRyLLtMSzWmmZN1vHxUEwWBifTHnU39GeAAKHsxjGJz9BasMQcepafXZ7NDitYg5qJdM8dj92dZkwk4QoH",
  "key43": "2YMZXqFxWVEpL1pL5br7sMjGX8ZPKTvwQxH5QSkDSDjb3Jb1qUU6XSN53APti9zb7sLyomDFKc5x5L7RABc6qFGj",
  "key44": "QVYewv1c2fy3iCiDgvswrbr9uBvmLTnPzvyfq1YJBQPz3DdRZ5q5Mx61zmmH9rwUzP8qqfrJhx5FV1d7RRL6e1C"
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
