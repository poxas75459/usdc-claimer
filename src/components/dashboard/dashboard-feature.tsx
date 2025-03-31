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
    "2KGKCg6bue7c1L9tp61ZdMFaS9JJRD8CjgPE1bFRfmVq4tBhtamD2p8QFz7E4Q8pbaQoE3V6ggaEbMFKMS1pnBZA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3F1uViaqBKcZX79SwD3GLdT8smFpgTePNtM74ryq9ZLQF8Coux2bDK1Ff3YLNBZ5DE4AmafMZczjSE7pRVN2jpUT",
  "key1": "315NK8Pq3NEfKdaMD6Kvj6twTyWBzgdKWYiUpqX96vrQteVFtzZnkne8Tg5ABr5j3A8APZAHJtDHopGjWBuzw5TT",
  "key2": "4zxBorF21sCKempU7xdgjBcaqZ7WQJEtHs9xPbdhUmpPNWnRveR6pniZ9RFCy8Fhp58EvJvdvNbiDEx7HKEMGfVv",
  "key3": "TDoKHRe1cSUjLF1MqZCWExq3MM3EQ7otNzrUAjSGSJsrnTYDmu6e9eM7nsCymf8eAfzVqRuq5hAWYDrD1pP3htv",
  "key4": "3p5HhpSv9XTkKZWVATz3Np3KJVLLeYvegFrNsqW35QA9ggyjcMSDUFrBr2GeSFryjiK6ddvTLzEBBbXFyeFv8Dzj",
  "key5": "fRo49r2eLKkxyBWxTXeapo3wKMEQ6j7XDazkURuGxDVhFEh6xTTsYhzySETRbFwwWpkppSWfmDenffiJ4d4hPoV",
  "key6": "5aV1dUubY9Kjd5ZtaQuCkTZ85GAeUQoqxqGU1XPFcvQpVHLLvTwLEfqSHBpD9gymkNvnJkCEW1soKZ649vheV7rP",
  "key7": "39bAH6C5VHx7xiMwGCcbFG31viDnU71RzxnTQUeGqCK3PKt7nhRgVxjwHMjbjJ9s8Wcc1KsiRGviMFjUjsqKKkHo",
  "key8": "3fBpzaWfg4UGcgtqfmThyFmWKtEwFAaavkKGcK21mn4omGbATp62Hi45MGSjP6sFRyFUXFkRtBLbNSgFSq5n2Swk",
  "key9": "26A8QDfRxT9r6CHPXnry1hhAA3uEBBkE8XAJxgHfFZgTxJB7RD1U47xRqusjdjsgHfVY3egvvqwppWjKMK6LM6qE",
  "key10": "5MX6gyQXEHD6UFiJz5cFNa3rkFhwHDKZ5JUi85vgn3au3hortfTVT3ETqqpaTcQZYzY7US4admYUreGMLfmyrVvk",
  "key11": "3q87mVHfbmP6dmQUet2zSz1Z3vd8SLoWwEddVkCA7wkZbP6AKDcMkHN67bHzpMDmeafcQZMHqeugt9VTMa4fuXht",
  "key12": "5o7ujCpmws4y54nuzAHzZTQ61kygTXnMecS77sdb1RutAkENLx8f73bGd44SQPip9FktrNoCTr8QTqneaDJFUkKk",
  "key13": "4baB7LcpDBmBjkZZPvLKaRWKP5vQ7suZQT4juhZTG3dKWgWhsvUcbqE1Qpnw6wUtsThmrvGWLBPxh6KTJgT9NPjo",
  "key14": "2n3216GqjM1QW5R56uDqSojSGvpH1HH2r4YsU8rySU3S9eG3iiWoFftfJBnGivZHskXQexnBAup9SCd13Rehsver",
  "key15": "VgQNybACsbf236nU1Tb1yTgkjB2iTYtyi7AHdC4moM6WwAdhGUdE1Vabd4BrjPXuLxTSGXV3VajoQmxWZMCu6a7",
  "key16": "G2zyiBpNv2h3AZXYw16yp9qsSDbfbnp47r4Tw3rTNzvCdHEzueCirj3s2WAjHzBiSdx6y2kvyBkbN3KoncxnsGx",
  "key17": "4auDf42RUthPjXqQV94BxuCfy5RNs9HhoTHJGod9D5d7bv7jyUX5uri19qbnbEnzb7993UvvTzJPptDiuVCiuVYx",
  "key18": "4yp6j1GG7csZ6nRrfccjukD4DQGbybUFsSKcgSzUaa5HRAc2HbBcrqZFfqs9YYB48n1bJP2tYc6C7fsFK9KrnhLn",
  "key19": "4QGXPeUWf1EatZe5KmjPj2oBAfemHxHDzmYyN2nBUmHY4FksGqgx9hbt4g1hVBUJwU3TeVMRT3UB3ei7Dy4GjXrB",
  "key20": "4NBCC31b5H6jvkWwS7Ryspi42bDCF7UuYXG1izZit11LQU1zYiQ9d8wpCazRE8zZoMrUx2GMjmh6uXRdARbGmVt",
  "key21": "5fWD9haeYs2FsAceBAYBEriVvWiTam5fpTJF6xE1dQuRpdTuHwCd9wWycjhtJqopy2wmMxSfUpnRkvChL8TBHLja",
  "key22": "5EXDCMb4o66kuJoVJwytjdv2GkPKXTH4ecqbW3gH1mtNwcdA2MaFbL4jajkjPiX6Z1VNbfPV36piQ6vbd3EXdtCx",
  "key23": "4PztebasFndRwMfcLZnynEE9Mkxg8WnEYE9bvzwvAAz3exQ7rMyp3qzovHUNqFR58T64VLigXVCPcDCL1ithvCXW",
  "key24": "4Y3yGyAjoWbupYLfampRunuJ9YoWGyCuoCs5sKsdKVgi2eC9sgN7iPGTCBZ7Z4ydb5DWZ1jrwExXaJUuzYbuqwdo",
  "key25": "354x8qmERp3voBPK2nfmzXzPR6SNSnjsbqioKN5F9FLL6JqnYhJWLgUzaSzqTTMiZ4epp89LjtHLxXuteFrTvXWm",
  "key26": "66SMyh2vVtYe1jN8eKTxCueJnX5tq3zybhtueVUH8vHNWJSd6z1FaSBx1eLUKxMDaVXEcjv2Ep38kvjfc6EsGWBu",
  "key27": "2G1otUTXkvv1vS8SZCcaagbkmsMDvabKTuwGuWE3s5AS4sPWSoCsug7kqjyENiVBa2rXR8er3SWiZMRYJ8NgwENh",
  "key28": "4E9CiXEHv2kE1vnm4DzmtH9NTF4aEeHxThr7LjQctdRqQkG82wrQZd8aQ6s5qW4rgVqSaNBdzUJTNUoSf3NEcWvh",
  "key29": "2nKoPcDu3YftDhuXd4FUCa6kvwtw44PjEWQ8DaPcFPk9sbnPo4k82fMTmBvEjzoF1BNa5cur7y8yjRHBrXW6uHsP"
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
