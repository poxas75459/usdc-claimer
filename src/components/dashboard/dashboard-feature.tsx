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
    "48jTjysLxg8GvbHbtdS7E1y841ty56pmWuGYaVhaqwHNS4U3WPpnAr7JafjBaDazjvKjPh5gkAGfg4UVWCo4rSni"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3UefXjDmJRA7d82JsDCCUhuyYH26ibxSMckYYRPCFeUva9xc8v9ap8EQK8JoohRroYG5Np2WPpgeB4k9aWyh8ec",
  "key1": "2ndEVddvMVy6h9GwMPjccd1osPqoagw4yZBWbTHJxP9G4hfMYVe3txZX5XiNErzbVn6T8XFRvAtxFeYks4YvggXQ",
  "key2": "4yxn6QzzoQHPwiW9bQknMopnH5mrQF25ZVAAJ5iZak2GNgDGDXVsUGXaarpDYqB3FgT9LfmRvJQ7MXqfDysKGkcf",
  "key3": "4FAYWiX9VyEcEEYNV6ucEkWsBZm85dnp3GMUmCzc7qSMzKdxaqSsmS99PKDAEf5exGQahSBcTR3qc7aUeMQEBLUc",
  "key4": "58f3ERcqRBUcyts4GA8M4qc3Ai4Y8siMd4CtZtDtB7sLFAiYaEpcqrCAsuLLa6tz2x4CJ7KsdyPchJtMhc568BJz",
  "key5": "5sJswbzrxFy8aje72viw1RMFXDgVuzxiFQ2Y8kT7tyWh53SW2cqyubZtnck4EhLWYdEjo3PGRfxjYqPizLxqxCyw",
  "key6": "5jRVRmMnqyxWdUfPfUj2LXvNMs5zvBoQJoizBju8o2ZBuEbsHSmp92tKd2dBzpVyHtcZwTibj5bxMqh32oMWjTQy",
  "key7": "4eAVV6Vj4SewDSEmR2pt3hc4pdupQokoNNxUFQoUDmNcyHcqzU179XQbrvBmFUjuLhHV7nEh7QJDtZeXACpooniz",
  "key8": "63AbcHE1SpvQWfm4cziHxjucPdpX4pqHN8EZkBypfhZVnr7ZLvfLgiQisYPZp4WdCFqsDLxu6MKbeE5ykavwGRUY",
  "key9": "33bdr7h6NEQsusuYz89PeqPoeQ2cwi3hNJAZQMeaNMqdPMy6Wv4LF1NE4WZVcHN7CUkRiyELhE3WHsqJdKbCmWCp",
  "key10": "5sCpsHtHKkN5x385DmoJF8FeiyeKutXZ5LessfBGebgUxTJ893NUUSxsWWQEFDNJAdFkY5Ek7YCN8HgSyv8wN2QW",
  "key11": "4sNo8A6pWV8Dycuh5Q87WypWH1BUUEAMjQXng6FzDLyG4scUuNK9noFTehfdw5D9E4ateerUssadurzmzKvMWiV9",
  "key12": "3BNCD6YCAZ9fU8snxnuma148iev8cpLYHMhmgrA7vpyRevjQM43NaWkwvpsGiAJim7Gn3CvGxXafwhqWk8ND13N5",
  "key13": "2QDi5foqsBW996EHcHm5oZVv6KrLuWLnnVLq6ZQ2V8GdZhYqAFLNJPhPjvH2tsxQSM26Lcx2x277reuYAaZ3EiEs",
  "key14": "2HBL5x8xs8HKngMAwpFq8yc3Fx7pvt7vuJewFfv6Rxha1uRisSsGLWzFAxFXkDBaSyVKL1dDFZdRhcRpuxAkUMyF",
  "key15": "54dqoJP1qxHdhYfMnP5uRxiL241Na3kBPWF4FeFAtVi1Vh4SNGfqgdbRMszCq9XmFJeEnhNxLpNjzdCxnY3wCY7C",
  "key16": "2imxu5oMQ61moDgfM3trfuqatyhsgLaW6CjNNuVc3q2b85f2GsWBBTyZxwCHGRjHAtswWRKwghcmX4UMHWVfJdrf",
  "key17": "5UakFsnM7VL6grT8BRu39kEGwhRQBokWQJEGCYUnN9MV2EhYavjk8jybysQWxiCYLY1UxhWE3XQSwxAsXeZaBDfE",
  "key18": "29cub5eyGWzMuwArGw5kRxHk8uC8FDo66AioSRvRL7KffPYBFVKG9MHDqg7x1vQyvfdTQsWnk2nxxdR3BcNbuBXx",
  "key19": "2ypu2dteztMZWvimeTnuWrMKUTUBmYhdpsWvpJ5CSqhtuqJdeYiq9MBPTY85PrjQ4kUqgXn4m5tSSZiH8jq3A4ve",
  "key20": "G83HmaK969fsobmGn5Mfz9zHicv97tfdmiixTV1Axf34dAbwaTmojAK8RUJFFSTEa5PNVFRYPa6fER59pZTKkkp",
  "key21": "D8YUawYZv6Hie66cKSCZh7udJVxaEvw9FMuPxLqssmLSCgBGGL5tb62nDpfsfB8sbBtyu7FkchifnXnFcbi7bk6",
  "key22": "3NXxomRvP56JqtZwJgiajD69r73q5faKuBffCPE1NN2qkMEaK7gGuKLHFMNSPintzt2u3cJsCHbiRY3NgRq74NPD",
  "key23": "4YcP1aRoqYtFCcGwoPjY5g117V5wUndgBMCesWk2WT7VYh6cuweFoPecNtmy2gJZCvM93eDjsBAXzpYSH6o2B2e6",
  "key24": "5U5T9U5t7wGd7ABnDcnx3kkS5m8cqo81wHJhz3qD6kQfxgUw6qKMCbCT2Z5U9Q1TQ2bGfY1Avfgv3Kw6YLGcL9E1",
  "key25": "3FPokBaKZ6j3nENTrSsBxsxH8FaQd7WfZfj6zVuQY35s9jbGHGEuTtcHaGjD1y8tSbiMBefqM4HA227fj4oRrKsC",
  "key26": "4egWEE9kcZCQmRYsnYsfJwbECSLt32s8ycAYZUyYD1yjrNcrzFF7SSMbpAM5MvT4Qhy7iQzZpWo4ktmu69TbX8TR",
  "key27": "4ej9BRKTFkc4AsE7M2jsf4pV6Zd3FymqVwHuSMbZSRYcF5J5EdxweMrgxDgjcUyXhMVKJ9TCAn5Yj7Ra5Xzu85nj",
  "key28": "1XDtg3ksrWdbmHihrViBR5biUgwkvAHQHfPmiRET4EEVWvznutDzRRCiJCnB8RrDpuv6wSi3KrH1fn9FmYLedbB",
  "key29": "6xZDYgef1YMnQpF6gbxxi8yvuAcobUH74Kbytr5dUNz4iYcSDbNA8tBQyPNMd5xMLpmnHum5F25kZL79FisTZ5E",
  "key30": "nZWDhDo4UQjsP655FfRcQfWazEkpkGTojpv4YHH4ea3U5QGETSBvN3p162yWrHw7JzDuDC6fTEJQhgfTTC4Z2ds"
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
