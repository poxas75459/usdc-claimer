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
    "4LVo6xaZ3Z8SWit2J3JhPr17zV3MTaqcXaBujaVURFp2gRjmR9Aj1tBAnbJwybbuLS9q8fhXLz6nBWTkoE5vUpau"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51svB281ojX2drSGKTGUdnyCdeECeTcxTLfruuBbgCWoqJKVspDzy9hamamRgKiLvUFQYpsabj2e1LvsxJvYz5a7",
  "key1": "2kfqM419x9gjVrwn9JnzLY9K9Xbr7mzkmyWJeByCFJdmjv1zE2Uw59goo51nk2GtF6N8CvdZ3xdwhqTTmCHqFZyz",
  "key2": "5oVXaC2dnuNxJFQZNFxMt8s7RJiPqXhZ9MXVScyGazNKBbmjnGcDi5Jm4PDMvMP67eFj8F8F5qP2gHZMyp57VrQa",
  "key3": "44gReVmMMMMuWVuFEV7RAuBCdRYZog6jmjphknQt26dbJSNqCbUSvFKgLbRTssAepUch6bH1XQCuvY4Fvr87arZt",
  "key4": "DBpRCfrsydjwood3XcLnqJJxuc9k3wc3mp5ELpkFuanQAKnqJRX2YP5gxpVcDDYE4UgRqHA9zzKmpcc8A3bMCD3",
  "key5": "5dELq9XojH9ucuZTQGGV8ciqTGHGYWWTunjzSMqLhDfAoCzxhr6ibrNskBje5pivhZYfQcSbYYQwv8byoXV2zjjh",
  "key6": "5gstJAvzC3fjac1tcWc3ajZTMyRYN4AGQAQjm8s4AYMovt9ziAJPBdJeK7DQeVL3FrmmTo2AnoAGtTr6aP1i1d82",
  "key7": "27ftVo9DTW23291rVmbvAgE59D4Pwd4xWeXLGK2oJjQNXUNbia3Lf6FBru4wkhDgEooBb2tXpyN9ujuT2mHCh1tU",
  "key8": "2XefR8Y47qFwUxXYhd4EPh3cMzuUWtjAgMHkowJfJ9cgjNg7DNp7sc65JsptMUu4iMkA8VhV3KC9S788MiBWN4pv",
  "key9": "63KHZpht1yG3VjP39DZH4cFn8s9pkrxAApbrg1TPsAxgTNNzK6CCH4ZnBzxseVGUUnE49xwMs2wF9CLu8Dra6hi2",
  "key10": "6ycjDMMVdCebVxfDRoRZza4QkeHfPEgVKUAU1UdM1ZPktCyeyzvX1YMsevgmooLyseDM81JN3zvqcPW6W1ct6af",
  "key11": "4A4bWgo5guyEyfabBcFi73TpfpsvDJBCh1pRNdebs7fLNoGK6mAPfbpik2mwWFuSzbwwF7HBxfxbcVs2pc88sJ7G",
  "key12": "4z2Qpt7GQwDc2tQBJu1V4vkW4PrppkhWvSmiAYnJnoxh4Lh38RbHmyScTiy5jUMyKsRJLknmYT1WqAf2z3w1rPsx",
  "key13": "2rLH9LtXHxs8EpF6wufQdaC9GfUvW8XbnDFkQzM3JnXDaUbNf3h779ZFUtAqN9gcUWZdqmXXoy1PBQStyMn3kBKf",
  "key14": "42zJDG2L3FefwBdkoKSzjsMPzkVaMREDTkZeWMf3UWmvqZpAk8c6gcMmSAHEBpfxoz63LFn3y5Z2VxKpaevQiQHx",
  "key15": "4my9i8iCrZTYxB34RkiiFURLvabUSU5cpqtaw79snBVsxuMypx3ryFudogyYAprCp5fHBkcB1uErwmYwzJnBXTts",
  "key16": "3D4YBfAw31esx3Ws1iPm17uVNB8fjN78PtQUjYkKQkcBMMmjTZv6FkUHhCaYxE3A2x5KbcM6VqSWzUe5tgpaCe8w",
  "key17": "4QpvEKgyGd7dGdYo2zSiGY4JXaQv7eL46i9z1KM8EstLsjGLGT459sddjSMWnchHfvvWXbJex1gk5vJaXBSfjgd4",
  "key18": "2qcnEJ1utkbuiod7aRsQvxLXAFtp6DKNCWNSUaxZQowVFfQ7pifohe5peRfC9jxdzSrTH7Ya3gfBEfZWXiUUb9P8",
  "key19": "jkxjKH9GaFGEL6XhNFV8VSvQmYgnSKHMkaivK9bWXuA6CuBG5LzK1PW1Cyez3DDDiSyuwdArmoVC2ExNb1f3HN1",
  "key20": "4rDNkAjAKYECEGNhouWQLyZi97g5FCyftRfZoU9AJxvhZrNc2Ya4XfYdRHgr2ynkPx4yPVixxCVW5oQ5Uuy9V6n5",
  "key21": "3eussVqFY7XeFuSZVSGMrECn7B87cJreVWpEw3hPCqwtU5mCsac9cbb2cRCAayXHRMz5XmFicLABros8JqkGgm5o",
  "key22": "SycVo7HYAhMCa9hkEoj3WupKZzMYqSzsmoAK2jLAJWguGEZZqT42tC7fA8N59xRmHM8oGDiR8odQQgvpLBiDAGB",
  "key23": "53piMtSQP3WhVXTdz1mU6mTBjDTF8uJAMA5WcbaHbQJZs1CqvFJ3d9YW6LiDGWaz1o6qtdVNHXn8SNw1Z9arsqsJ",
  "key24": "3TymcSUBjyzJAKYbfwPXoktTqppbY5EMuPzwikqJuoQhfeD2jJPMEq9C9cCChaWGBSWJfKAUb5Vr9UwgwCWnBKSe",
  "key25": "5zZQrL2PZ5wJb7z6kzgBrcqLCKaQcpuyWk9KpbuVCtgR4scQmt4LzPCy9aEwz5M6Ca6w3PC8uqKNZnpUDyqrdo5k",
  "key26": "5prA4EvaBcVwyG4RS6Groz1S1sk3TugyBXhzxCYd679Q8SmAYXenV6oAZCgQpCUDWWNYyxGoUPcV8s7GvsmPWP69",
  "key27": "av2MdBbDACsPHBTpgg6p2ULNQNPv73niFzfBkgvZjq9VojGMtGbxpeB7AhUoYLukCFx5ZGjnMFJMDE9zKf8b8zY",
  "key28": "4bpfpPMyJ7xSkCzh3Kprv62Wv2UQ3qNnSjx6DvXzLszSt3oTT6ZCY2ha5zaJcMwCnubSyksLi4Y5GZT8vbFXZPm7",
  "key29": "2Y27wetnpSE5pupBWxYi7qiXxVnzxPsfZc7KRqRWfRJACFMHA84Gt3kmqeHywWc7w7AeL6LDxrbKEsbpvc8ryJjC",
  "key30": "3iYX2gAEJ8swZqvj2QAtnP7YZA5tNpSXK1T3WshqUANJeeEebAxKRG8Ap7HmEdWaABQhnW5kCVhXXQvnzA46WGB3",
  "key31": "392LN8TexZ5VaZH7tA5cWVV5ptFGKaqqCMi6djJrkFTDGCe32igajhF49kmhhqgScQDhohtjncAirkaLYBuHsG6C",
  "key32": "4T7zAxBV5gFicyqotwFP7jDKAemsUPrmxaLXtJM5dWmzC1uW8LfV4TCUXNoFbe5EGv9iDeCraYPpdELPB3H6tTqP",
  "key33": "CpQ9bQnzd2X1kL4zkmvpBfUBmgkEPmcMvUo88KUpPm6GNZ1KSBwTwf4N7t1Zg4hWLv8wQQMPFpLY3jVMVEm3CXw",
  "key34": "4kWf8CJME9ntwwn6CUsnt5q1ZJXsSqGaRFAqS1CWu8NsxpngJZHhqv9iXWwyiaCgqk7EhdTuCdr2LLSb3CykwaG4",
  "key35": "2ZwL5HtdKyx8Cu7NvXfzCfs5NCNZ2YCpQm18JKQTgd3V2Qgmg3Fg1NQrPhyVGSAhotwWytsnsnAweSGMrYZFSMfr"
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
