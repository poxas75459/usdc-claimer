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
    "482vaU1m22hzDngh3pYDQLyfc9HLFdaKqaHbRZw8ApX8Ri72ytvPkeNvE1urYTCX9aJyUrZ9BoZfASQZF4zzDm1T"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "wrf29mbPKSiCrUaS1MGPEBW1VsCHmTMHWWXUrMrUUPjNnR8uxeM2HuaCT4s28xNM7737DKKWQ9c9WguDE9iA384",
  "key1": "4giDCZNhgk8sEVqHWov7KRRRm5KVLS6QgDxbDVid1LDZyftND7BrJXK3qF2yLLHts9f11PPh8u351c8CaxKoPLkD",
  "key2": "gxK1h7y1UrPQMAgAnZWLRHJo3HjSZeYAMq6UYEL8p8arMKyP65YdkTe2dv2jT9te1pVHFRbMuXeq524SAs9ifCf",
  "key3": "2xxd2zZJKStYuwsXYEm6sLgXPHU4GPJmZTpaCxrjiXXSjy5XEDymmXNFMJAwadktRihiri11iq8LRkMBQf1uCEDj",
  "key4": "5eR9K3927HcRBxbJrLv9ddJKxC8hbTP9dpYSGQSnprkfDCaA9KXAkiwB2xFMZrWtYdenqanKerPMHMPGbdk3zqhB",
  "key5": "4SAEiLf4DrYexbNeiaR8NeGAtt43tYZR6cCZsGHMPJAWavacHwnkwCnjWokyBETSUvUseFNEaUrbuEjJF4BSTYng",
  "key6": "DMHghLYjgeeAutKQHCB2iXVjbw7KhLJeynMu1mABDDTaPtWjehDjCon9jERP7U3wxHK71exzuQudgP7RPDukJ1n",
  "key7": "2ddr3D7HSS1Ghk638kLCkZB4bfcMV9qGdmdK9MEg9ohV27gugsBRQ1tuELDwgT7uT9s1ZGPEeMWeTb5kQbU8nwjK",
  "key8": "4AVv85gG9hrVhWwgFw7eFbAG84wC8hvSmkV16c2znhqGMkRj19A4UP8UaYiJdmLY9k1mz1hyF98dMP2uiyiynoDS",
  "key9": "4HtehhgVP8LYCQzSq2ULwL8k14BeK1LdVKjXyqkRYHbdjq7dGKNqeKFPxGpXLfv8FkW7CLFrkxjfcmhT5Anv2ZfT",
  "key10": "44G3asJraVVtQNJhfRPzNpZi4W8bzA7douHYwSm5FUf4vKmu8YrcKpLn2ZXuvBXJgU37wFNxNG4vfeNjiubEMQYk",
  "key11": "4ccfwFBudwKXgTsvuiPEW91qGPC5aECEn3ttNa3BYfJgrvgTyjD1jCyk9pwyEBkMM2NXW8irBfFGA2f4gaAD24df",
  "key12": "4kSZzhM8uPkzHWq49M2ZncCC6oWoagJcnjTZGSmoYZhCkfVzwQNKv5EemFpEWUGcGbZS2M3T97nwwftmkiRDvDai",
  "key13": "zE3nWfr1DQKh59y9Ucyiqs6vKdGEhXjBPdWZdJh34zC8ScoGQ8PFxzwEqNaFrfHZdqbtft8RoGFBrRgWXzQWAwp",
  "key14": "4ok5wcgp8f8q5529XcNNsBYzoSWxbAzTazxtRG6jjvM6AncbA8kpNkWNSxPc9Mw8RK2zZriiTYjobZ1nnc9KJbuc",
  "key15": "43VF7Z7opFDngWpEDY2dJgWbVGjBsyxUt9hjTvvn29segBF5J4Qyxj5Bb5Ju6uNKtr2HEBSG9nKv3t6hLV2367Rw",
  "key16": "3LDeY2TyT2kz6msPPq6geyeHmE8SR2pysRf8NQPfe1KLdbNnFHsuzHC9cddixDLCAegNaux1tDYSjsvmDu2qun4V",
  "key17": "3rTwQev87EccczboGCZVNbKqYGRfEuJL11mXkHdj1wRx15oP7gKcMt7A5pzbLiMjAzSUg87g9Wr1m52ZzReY6Npw",
  "key18": "2myt99vdVnk6WenbBo8rXcSv93QRHNQqRbkmo8929zgQ9F3z3kAj6R6PYx3V2xaCEF43R98n1uTXPGNDmAxDTXyf",
  "key19": "4ypMWbdxZcMm9BcEDMMrJWi5VKddRgeUdcRXBwJRdoK1ht6VDDKjyTwFhjXJgu44ghqvRLh9AWebM5an3guCgRuz",
  "key20": "2NvUKqSco6rk3Zgt4dJELNYccNgzGWKvAe5FPLc4BqnYqkPywc62jfko6tgqVkVGsfcwBkDgxsULPTYBxwzmkzJ5",
  "key21": "3Day1Cj6PcAgnHN6mcmPKusqpPTe6FRi1dhEtwt6iHczbLyvQCnVXNmzsHA4GqrLZFVkfYyZcTy1jiH5sWsgvTjq",
  "key22": "PWLLepZazSHGURLJxkP1QMdJE6Mhvrwmj1M7iuxP4CwsXS7ePp41LAmwSsm88nPFBiGb5MefT9vzsnadRrj8FDy",
  "key23": "3Xr4Bi6Yrr52vEuti3KmyA2DC9h541cqdpn9XXNr1TXQeVVYDEWjqvyuJ2dMYX9wqA9nZw8BnPgYTsefn1mAceCh",
  "key24": "4dMzz3n4fjdKr2nFC9fhQV22RzsVRQH78mTsRUXM4dXiaS5Tp1Uk7vDiaEbquq1kwnvp2DVBq3tUZh4tDxLBZTPY",
  "key25": "3ZLDAGEG3YrgvVkt75Qxew9RxxvPUKkvR4gVt4DkZkeqnjT5aoDVbtivTewoHnztoLubtXqqhQ8cfgygj8iUBtHM",
  "key26": "3PfX2HcwoBvqVQ8kemyZZeDXpcgTsTyNWxpWXDqiomn8N8yZZaQo5kB4sCUwCy6PT9j7sSnvpTyd37WeJoYuxnEU",
  "key27": "5NRx5U1vdxEYZmeopLS5bbYjxC9v5YdtcAiycdAJ6HYBKeWE1hqGBKFWEkoiEjgHyxjD3Jatm8tEGfK7iaEgt2RA",
  "key28": "4rJ1uVLceYCPVXEPLmjasW3JNmk491cUAD3QjRKV4xKg1UscgtQ1gduoRAbSKaAzwRGK751pjDN6RLYkdTaZa2Z4"
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
