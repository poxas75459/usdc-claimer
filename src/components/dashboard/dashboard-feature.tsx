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
    "5GmEWvy9fJmaEqsDhN8ovNjaKm2fCnV7ipXumo6qKaaaqGAHzMYtxwygEVHx1qFHnGp53xJSkWFem5MjSwvCTHt9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4pdHu9JCYRHea9DHiHNkGU2EJYKovtkoWYbvhhSxQ1PUgkEtDQdnGQgiFDB9sDJUKXiLdArLs9XF6zTgqXzyCwpd",
  "key1": "3z9CC1yDNkhGrJiV5RTqePo6qe7Mb3P8DcHaS5ynX7usLMzj8KLauweN4D9DUnLFQPch5vDZ9CpjCbF68MqUAqUq",
  "key2": "2zhLgdG2zi6nXBPAka5dHNysEY3ncskJg7Xb9pMd4BD4TGfqgku8ehe1r6ukHcs8ABtr4sjs5ovbj8dePLsxPRAE",
  "key3": "54sEwdTJmDeEwk9ZJCkPs6TVBfgKK1w4HQ1CQuUfBzsiM8zyb7BjkzhXLp3yJA19YAxyugbPdBUXxyDkqQ68LMZs",
  "key4": "H495FLzEBZuo2fs5mRgmkFwRWxWUhM4qakfq8pvcGT6k7ePmiAK1YX5iQV1br2hKqThAdLVYBvSw8Vv1ma8uaH3",
  "key5": "3dVWf2P9omyDeLM3SWDXLXfPEEE6WCYTnEfS5zcSESvo94YWnxnUGQ3j657j5RDdVRHt2WGRJjgEFUFmE1TGu4VF",
  "key6": "R9kMaLb1LqzWfTQG76QcShQ3LY1KeLa7rK7iWRDd7L44p5YAHZMpSHaKtihbEJNDF3Lvgj12QLU4k8NG4v92bLF",
  "key7": "SbQpdPvLagiGEsuqzNzHv5Cx7o7LMQwLmNBEWWyWggPykPGMxW3zSsH9xatC6sHbeiWe8N5yNMnMe2JTPC4Jmte",
  "key8": "3MNXykzZozYTYQrH34tGT1teCeEqispWtUHRxwiNJ3d8QtW4MUw66iGiyzngJD6MDBDdowsoZmtFCkmMb83idqtW",
  "key9": "4e82cV7p81XPXPp83HEtRq7AZ3XRdX6nUCJ7q2KT7gUs9H3Y6qTchzWoPE8X6nmXQBbm6joGMdPmWoRpe9n6driq",
  "key10": "3naeNBDZD1iVSVkUf97rB2MUhSdNMxzfCmj97VPUYc3ctVnjKUFPbs4tpjkN7p5Q5ZjMdCaiVffX6ofpngKZPqcX",
  "key11": "3RVHS4jXi1zoFWqhuAdzvMai13pGmQzMxmxfed34pUGyHMyPvJbGYhLCmMP7wnxnmSitSaBE4DGWK3QjNmtVErht",
  "key12": "5VqcHYCJAzJz1eHkQD6m8aWx58R7YWfV8PZxQANNBzeYXvMfsxmK2xi7HgNzR3tcdPnDwEg19zY7eBwD3m6o8bkU",
  "key13": "2BChFbAXbcna3UUeZLvTWdBPkw6veonTmB9JUqNycxRSY8bMZrdyrTCYhz8uNcVMZV1WhJfj4P2mCPBCoBaATWNY",
  "key14": "vts8FmwCxKEMzLnhvc4Zj4VXjRMVr8xKXxKrtAhANSPuarULrx9iZXobsRuNVyBZj3RygxDLbqzMjtNaLrasz7M",
  "key15": "MeyrubeQxoxGMLKGCuKmiKt5F5wt655LVAic7ZgV8a8chL948QHznsLyartzp119mU7rSrrU1dt95EPXywM1G6x",
  "key16": "2HUMvK5aVdTF8AWynYm3QYzQ8oQJQUAPmaMNHZZuX1J3kxH3CkzfPMCLAKwapzq2tnY8wfaDmbboY2Dmh4XQ8dff",
  "key17": "2tp1KwP4FoDMnsvdpxFt3kZ9ag4N3PwrxvHda173UPpMbmtCDSyxA9KG2teadbQJtPanu6JshFgmsgv5mmUUKyCH",
  "key18": "3ayHwfWCzttRz25NmqighN5d9RVMqijuCYoRpepNogwtkBW7MWi2i7s87UyaJoi7mXDbDEkk7ZCaKPxhNE4MKTwm",
  "key19": "51peS9N8m2eLXfnUcS1t9wGEAVXZL51XoVbpnXmsPaYQsgtDNUitJraV4ZbZwyiANhge5g5wJn7WTjjVjq49w5mY",
  "key20": "222WCRVMzA3fW3uRyBJDFcCKwFvGrNypRjsGo2jnvrmNdVNaVxP4eM4hUsP12AGWvz6ZMc8wCYXrMwvrnHP1QJkx",
  "key21": "3Qq2aVFAaLYBuogTvEhaMAgNjhYsbWrjCfWAfGGtu6QYPrZqYxhCSnHGKmCyvk5Ex4tPv6S7CwbnZ1Z1RGDTBnjc",
  "key22": "3Mr4vuT3bcCmye89JuebPPAT6KBGYvW4koKfsQhHch9wNbt9emXrBiRH1k9Nri8JAqbT53v9JCKcXXrLF5U8PEZy",
  "key23": "4s2RnpQafJg1pDTEhDeMZq18oktiigr9M32uwPT6H3g89BS6GNW7TABLKDXjUTWUcwoTEgFuJhUTusJEbnkfUUPZ",
  "key24": "2o6ArvdPTFReJnY6ANtbtLGzJwbVTikNybcyeRoUjR4XENvkw1odvkPTjv478RTDbBZxFVBZLzodDBnUVpGkv2Hj",
  "key25": "5QfPrG8G9KdCsxY8Tk9yPqg5VGf92VWVzYBq4iUgN9khAHPcTdBc2ewfpad3m89PdmNCByTfxCsZz8N6d78HBqdX",
  "key26": "pKZzVfYNvgbAZwE3sNjBJcqqEXMMXJPy87RgMsM76RucWrGtAm2GvWP45XcDrZvb2FCfA2cLZ6YsZw3kVmn7Zph",
  "key27": "n4Vev4rhPsFUX5WWmDhsDqvQ1QSpSCy5L28LWxMHqcDBYvTcyf8VCxJG6G4rdQueiZbp4KXAK4Xk7oLHaE6Ue6u",
  "key28": "5BwVyRrHnZvNWWRudZNhGUD1mtSEgFPPBTaUR5aQSUpZTKJvYKW9W3gGDtuK1MQ7LkGdHARPptZ7xhYqpK5YesDG",
  "key29": "3qLzg6oVBh7AkZ8ahwReWxztQ6zRe328U3UVkrNMBPyjX4WdqsajdYdgN3KPEkf2akKCSM69zhQ8tuNff4366B7f",
  "key30": "XrBh5SAgRDL9Htjs8yFhqrLaS1ucF1SN2DgYE6PbVbcEjZSb23xuKgBDAbBpB7YKDuWs11Z2WryhfdLiZHTkhSM",
  "key31": "2q2CLUtYZFX3Tp2geGmBDqBrhYVRdrKnTZ65enRqXxTv3FTShQCtQZasCSC2yUHT7ZyzAxfGKm1Z54PPz7UyvQp1",
  "key32": "bEbZtYFA6oUev1cSENpPnrZ9VxgPKqJUyvDy7gYzF6p8Hw9fVeLdhR5CRveSsELZstSw7mR2HQDZJXWmi5ciwWh",
  "key33": "BQNsRQ4TpwFdPYZFzTu3YPbczJQr6bVx8zv2hVT8hkh3czo41XRe37x28o2MfY5mshc4gBGuAr8vqMVrTHaMwHK",
  "key34": "2p78zRtTRh4dpYZfsap4dwhZcZKibzdCrdyA77xt5ttJeBBvTrYe7BGeAumPxwebDLQ6ZcatMR2fgsi5HnBC4myp",
  "key35": "5doCNGPfeP7Ggi1SdjMAHqvefDmcPdyxLDpJrg6QuChqSDcjkJBwkaEQMTamemxS3Wqnm3FseW3XYCz9CjsjBRH2",
  "key36": "t9C6kz22vrvU3eznqT4bFa5FYNnYiQUvRquykK8QaKMkTHobd2jV77TaJEU9YqzAKVcE4mR6a2i56MUZ4kQxHYu",
  "key37": "2rWH4AQzLNaZKYdXXXxNiYSxpnbexvpforju6BxGcapSZr8MhDves6gsLEuDFq9EKE4jc8mPqWLAkdzX8HNDgHxW",
  "key38": "KzJCdreFvxZU8mc5guFycufDz9wEGqWu3t4qnqexcSJVvxtAFwwKp57XrUvFb2uWkZ68Lv4hK76qRzokk61us5f",
  "key39": "NaqkJH5si2x66MPPuat1bASwvBuqFG5ki5xo3rZ9n2yYzDVNCG4GGrFWXZ8Hy5sQN7ujUMbikQ9ZjBSjZ53k6eb",
  "key40": "3JWvRPwZwvS9cDhizK8kc4UmMFdix3vgqhNCHHguErZx4SoinVN4EBFP2ZZKbS6JjWXrMEfiVitFB1iPVyUpvzN3",
  "key41": "3Khgn1ejLRbx4gAZKRsQo9WwCsXfpej8W5tXEoSSixETe2oZo3he6FmvKhiV8obFrSXvWwDJFQKu6Jwiw4berVSu",
  "key42": "z1tct7AuxDpxdftJxi3H13Kknr4UQYCx6v6M1WZA1PEYALYZQczg5L6pbpdof7DGAAHqKhuKVkkfUNxbJBfaGTa"
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
