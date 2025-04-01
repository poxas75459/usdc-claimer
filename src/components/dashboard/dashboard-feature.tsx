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
    "5nwkWycTPDMPmpWveF2C4RCRGN3av5TYznXsk5KKYFavEPmB5QPQMkrTwCaSRofyW6Y4Pbx3rkgj1dr1keBVbVp5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2eXjSJnPBnGCR6NVmibieroXn4T2TzjGQ7TkadkE4Astjth1u3ZkkGFgUiFxqRwmV9LCiiiPvJuBzq2VdN1NndN",
  "key1": "3KrgQNn9pzBu8ZUAoBGQT8wnzr1tW4Zb3STvnGnE2NWWukpWCRpC2Y7TdNuwPGFCs28E1uKpfRmznFPwNYM2B6qW",
  "key2": "2fjRKpQdYoDdACYD5sEr7JSKzxou8kw95cHYttEPefYx9hvRUSd9ixSVUPmqad2FutzXrH9R553e3ZKTeVLpNeLE",
  "key3": "v7CdR9cpZKJsp2DijUwucAKwmFMKPMx12TG9Mb5cspnGA2RnZCr9r1BvgtRnbLgMzG75zeJof7ZDtdmc37dqNWr",
  "key4": "55awgU4CQsAG6m3a5MpjUjDSKeZQvLH23dyxK62BbMauixGGMAWyKRAdJeXDRMHzpxrmGHGvdnuHQtVWLmKdZYQu",
  "key5": "5GnLWqRK6znVecBiN3ynZ5ytiXkJJAocz1jFumeD85Ga7T8DjLXfNkhtpZYiTDeRzHSwGEY8r5WQ6V9Dza5bMi3M",
  "key6": "3LSVpXPkz5pD3B12asgN8EzW33bdL2uADgAwxJvLvQK99zSmS319mebToQWnFwe1F6CT4ykkd6tPAS92dAH3CVDs",
  "key7": "oxkvB3Lrgt1CkB9VqBFBg1KAL9WJYei2r4aCaSCrFs8MQJyoSEehCe4T1vTMXQCyypo7QU7gCSZVVSVqbmJuFj7",
  "key8": "53MqPcsTS1TDmcmZLGcESWVYoNqZ6cXsE7wj9n9vWpyw5p1WknqMQF8YqsrG6mmFpMjFrvbF5G4ziVK6kyvn2Ga6",
  "key9": "5waUx627cnuNtYPsPShR1x1JDwt5dqNnz9TorJHaog76HKmUPEfNZPtBi81ftFev8Wjogtba4y83dAfaUsZ2Reap",
  "key10": "5dLR5X2LKo2Eataz2pWipoHXhWdrNnhthQf8ooT9eKzGTYuNAxMRXUUiH74pwV2KunHvwgZG9okf1hjf9y7LbLDG",
  "key11": "W4SZnB9dsvNQeSxKFXNoo7tTBaKSsgU65dhVLfT2huGhFuXcoRnad2Aq5DAZ5AkkjS8Spf4JADNgPob27ZyHptT",
  "key12": "2eo6iJxxU5KNEJFaezo8WNbpBPF7hcrfZsvyNuKmtLjsQFLdJySo8LqG3X4HDiWuFHPpPVik8kHJWc681qqFXJQo",
  "key13": "2jFxAQ6E5oZjoNw2u35okPREwX2mP3QqYNpdJYANM7Mmh4Zff8DpWzud5XJenP2xfLdsdwoEmaW7BPam3untmjFt",
  "key14": "bbHP1oztC7cfhbyRqQfWKAUvBBLns5zH3MskNiXT2Uxa8wG6FZgXbCiBYpKW1h8A6ubMZUn8Ake1BU5EnbRvkYs",
  "key15": "3gZXckLim1wztJazRwetKe38xuYZ6Wqe4GAEa4MxVG6Zjt6y4PtE8ipa8mAbDcUyfgmCqJLXCd6kqpEV5z3Msa53",
  "key16": "SZP85zuf8jYWod9AnoCZGfVTXk79hNKi8CfKA9orxqcrwRbnRj2NwPqsXxH7NStj1rBdn1Ev6BARNDt1ZT3fdYw",
  "key17": "vjcU8TwdfBbeNar6WoNpndinZ2y93Wxt47VgbzgSRDsi4FMWsw9n1YWgCe6LDPNvUKTpbeEdCtSidzWA9cqTrEu",
  "key18": "4bgvqR5yZfuo6PzH6EXVvEJhnQkLNwSHyZLYe9NQyGnGeDxTsQ5eEXuoviPzBMFXndCAhffrVkzFVM3SzFUBncKe",
  "key19": "R2AmFg6Pd3kUwL3i66bhHbgkWHYYQ4Ziu5feuTFZr1mfzXxeMT56HA48shVUrwbCzQcuuQJQ8XY2RiszyaiUtyL",
  "key20": "39mnnmoGNYnEw5kGoAnYtJurnuRc25tjdPKUUWcgM9CQt68RCzgd2cVSxgJqNmV3VZjsj2gdGFpLLqEU6tWvsAb6",
  "key21": "5YcSan9VKZ2N32PuaieaGP7nTpeRStfWkhKjyYZCoHzK352naHxzHAg3rxnrc97ehpeawjTBauSRf3bG2H8cF7mm",
  "key22": "ZKcswYE1jB8QShv83c2vjReYXdf23F6EtkPVdLq2UzPYSh2U4Mk1Xua991QPGr749LXwVniZ1oZJxqje1pm75C9",
  "key23": "2UUr97BL2vFn9J1B9BfL9DwA95KZYZTDPpptFYXUkDL3cUrC9XTFQgz567S6RUe6LNT3iPAfLraSVjSnujNwF9Ay",
  "key24": "7GB7NNoVPF46ZpNr8EhiuJ6kspWQT3DH82GC5V8CdyxJRpDnRbSs1Zcf6S8sBYL7Szcu5m6DAD5N6rGCNx81uAt",
  "key25": "4QoqsWANtFNPuUhUSfu5iEQ3yAAotBGbgw7YACv4XnssXPNuQyWFG48rqjhWuceYcG1GjK3EDw5tmnsNzCAkU445",
  "key26": "34NnhtcPCQ1Fmt7uqpmFaFSiqsCh4ZeaGGFQkiqe8oJx6hoie3Pyx58ErooSMKMbC2mXjjsBrQHXCXH1mUzt8DhC",
  "key27": "4ZEXJCkn6fggtNnQBJHVrEDD2vkf6dXo5KEjo5w9oHz75i8bHCKcujSes255Nt8ajMLgjuKfWDSL4FBboUxZGswE",
  "key28": "22DZjYm7s1JX3hzTGV3yWfDgnPaeckm6GovBCRPC8A4ZqfRh6hz7L88CEjiMNa6UWguP2uXEuJN2mdLbi7byHjAo",
  "key29": "35qA2Rhbx99EWcYBDxjYUv9hNGjj9SvmZN2pTDt3yDXY3srFdRstmj4rSTXWWeQ8NUYm29LzNTUehGnugydf6NGx",
  "key30": "4xQY4wRNESz4yqUikZ4KtbCJ79G7HzTuy9BdZhMUoE6J7kVu21ZrpqsGxKq2DRT9f6KN3VFiXNKgPfsriR32PLRF",
  "key31": "NRHScH2egJr4o53jLv54wyJHEiM5Mid8PmTXBVDXtunvjrBmCPkJV36kUdYZAHbZX4Jne2ZweStA2S5bphD4D4j",
  "key32": "2dmJh4EqgoBLfRzND91Q7iivDwDWkkkohKMzBX52B4TGQMNYj5aJ2i3cT71os86jTTiU4uRSnCVT9jKHJ4jrUFg6",
  "key33": "eECDnSTfEe3z3gfWc7marSpSPzJDjeLdFYWZbfsyR5txGJsv7dtfdbQrksBDx44TH1jpP9ggDy49YcfcmvwgrC1",
  "key34": "5jUPurLaEA1mNigyAj2RRbRHpF3gj2BoRrdQf8FjHpx5sTGFF9bXJrL8VKi7K4GasW3yuVoFAECrLgBw9Pf51zS8",
  "key35": "3WSUg2M4QqBNQjfUn8uUDnouuwPJNTL2fbcUkESj6yP2jPdyuUkzshuTDQECrG26VwPq4jmjV1Bc77FhbGBsfud5",
  "key36": "4GHAZTPcQ85w77XGdMx135xxbXsKaS9YHqvFptQVXJG9675hE2U7k6KVdMQEyDin4aWtkmen2V5dLA6nvWy9tSma",
  "key37": "n7Qe8bETVFugkkB25tnaCpUNCx7zXRgmtCfeiiaQMoeZAgJHHcxxyRFxXCABZ4pW6skn3QFx4k9xrPtggiLjvaE",
  "key38": "wKW91sEdQ64hKuCQnAYyvj83XWYTZY4LZ3Mh8y9tEmtmQhxePxMk6biUriubmQTMC5Kiqzv7TRervjzYnxvZRt9",
  "key39": "3p19BDEbx3cpWgtCk46TKG2GTDbr5YJRTbjQcMqstoq5EWVmWM1VGEvTop4QvRAiD6dLL9FWmFWDZuJZ9WCp4fyM",
  "key40": "Fwp3ALypvreXj954uLNcRh9AF7oSNCV6bE1pAnvZNBCwMnAmVcrNXazuVMZpuP79pLpcHKDGzxZk9cxse19yxnb",
  "key41": "4MRiasKrESGt4LLuFTnEecjYsgE85QnnyHjqmQ4QSUqPjT4oGrFVz3dL4VigqaPZ9X3gLzpLFwFm8wMJTMzXMHgs",
  "key42": "SbH4CCnwvfWSrZrcJ6RHc5grdR4L5ygNvv3TnN73MHvXG1gUFDnvihCmNy9aCWmGMmkqHWgWFyqhwuFSpM1tnx9"
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
