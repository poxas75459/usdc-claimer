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
    "2jtwo2K1Rpgo4hhUnnzPAWJoSsvoabHpHG5rhk5BpmG5XxfupY3eENxcN3YfgxhENs5f1A4VpTx9fUieBnbdF45M"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3SNzzVKcJHF9MKBojGMjzrWxkSW246U8eUJcsJfftJoQpU3TEWXB8tRjJNoRvJHTNLxc56FTVaPtShygUdN1evyB",
  "key1": "52yTfwhVrnvbAk4fTLUAq1iR6JGuSGBHWvKjEHF5b6TRDttdVnuVQ1JFnMXzdvc5asSk1B6djvuqwL6YX8t7J5n9",
  "key2": "47yNsckf4TX58WZdexCtawwTigXUt676vM2BMmWW4iDK9ovuUV6s86a9Kn3e7M5eVgBQyrjFXNCjHxWoWSpgxaiJ",
  "key3": "2FrcL2hVUVaE57ccX3VRHnnidsMEsxuVAkEhop5cNbKai3doH4DK9LadQNR5Njs3aLcfHZPLHaY1XGipGDuGefsY",
  "key4": "3eYa7oxmoPgF9nFhv6Hy17f4Kny5Y7r5pv8TVgeTnZysJTdE6TKYRzUCmd3w8vgXTfFD52c9aS6VSXmCcshFQXLQ",
  "key5": "3s3w681t13My8Ld9Rgz1Hge2pEEgRvoWM3hsmmCnaYnqA6SrgPasG4vfRyKhBEKcMjm6EwoCRoP4tSEAMFcB5UEY",
  "key6": "5DNGf9whENJD4rjgqVFHa2EaTzX9ad2i78ALu5rutTur1gyGJTJnpDsHvvQtK2L8zyu8wMNENgfiZwSg2q5YmGyU",
  "key7": "5k4FF4n8ipsdbzhyeMH5hWKBUv3sHf8sg8SKAbhoYbMeiEsJn2q43Ryyq8TF8mrByPXh9G2GHBarSJSg95gxTy7P",
  "key8": "5CFRvCe4oAU2cCPsCaVEQEeAeRHmexaBhZX59CKjszttC7nvUmjUpsKhSRm2QZFVrB8MvcBEicB8mkZLKc4tpLT7",
  "key9": "4DZ1xmeiiqLFGFx1XgwMfpfg2VNouT84C7qvpHqLGYqw6FfiS1PKYzp5MzVnU43U2poj7nrUUGGB65LfhNAcqbVM",
  "key10": "4GMtLxhJVkeZMorFvwincnA6FqpLTQozXPWwVQ3TrKq6HZ12wMxMWHZvTfxCZUqNS5czSRkTxABcSk78FFwzAwZb",
  "key11": "8pJKhrVAFGcaMwcgq4UeR1QbQCosLbxCo7gfMcVyLp6wQxpLNd5S8JJKZuHS8Mxc2rcSEWuM9fpG5f3NSH1awv9",
  "key12": "53UpLaPp9aA9qVvsgfB1RXguNrAbX3DNNgbzrAGPi4p6VxLboKfhFayYs6sL3ZDHyybUNaZyNp9pTCuCnXv9uT7R",
  "key13": "guriAyfQZhpTxPkFvfuBPG3AdfUXB4ojATx3riF2K59qtWSwPZM4UrNqx4xrVRLWZiXpwbySaCGtn5NvBrfEqvb",
  "key14": "5EEKBExwW5uNB7jyMisSxnbjMbsF966SvaLFoxGHk8nF34fNHEtQgq6DLUWxJEoAadsYt8EzQuC3hxoiJmdeeZEF",
  "key15": "3Fca6PWfvpRyE53PChoCrnmmimrjzdHSBftvQ89rpqmEYG4s8SBgLTBPveycCFx3ixDH1rzv4CbdJDpaVw3P3qQZ",
  "key16": "5kikSGfKNx6rx9Qq8RoyHyctSxiL2NQCqauFh3EfrTsEHuzRHxt338ym9jjmusucT41GfLKQi8kPEoLpVfgTmQSg",
  "key17": "5ijwfv33ijYNzPVhB1fRhPFGRVe8zChA7Kav1nN2m2zdckNA8CafiUPFf7RAoZBbwGtmAZTKbbD1zs7BQKQ6kxhc",
  "key18": "27UbNgnwGqifXq817St2kbga3FcLHh5v3PKNRwXq7ZrxMCEMtgicHgJpub5QzMcWhfGvNcJKaaDpSinviZGs5aWK",
  "key19": "3yMJ5qiMa8JnrphGnZYDDRWjZMiEoDTfUotDtp4v4QVCKXsyWn64T3TBR3pkvi3cHdDkpn9R6zNRBN6y4e5jxCz",
  "key20": "2DQCBCPyrqHXogNHXdUkZkySVDRxoihFZwhLJWSpYwHCMqEtboqnEeyyYGNbiZUkPhTV3Y7KaCgsCgVvVuAn2prA",
  "key21": "5P5KGPbBL61UQEbwaAwYxSAM9cUJRyFrgZrUy2nnWtoBcYWfzxTVk8TmYBhi1SX8Ex3UEjWss2RUaBMwrjL8uzTt",
  "key22": "2gaV7KpCGfwDjEhiRZRUcG2hpFmo3jBLkzMtCeddtstT5oQQsaM1qVcfuLoBwVoQhYLopyKCUgaAyeJZCrcPZ8qW",
  "key23": "2yp7N8zLtRKo94M1hUwnXcZ6Z6u9S5bjMeQpb3pTVXM811KoFRnDGf5hPc4XsRsHMujKTVTTXj5wdWJvh8dWFe7i",
  "key24": "5c9cTyBfEv9o3NSrGjjQZchtAuoHvGUZbRQdQKdznYJ1w1k3TFTEQ8HaHmSiRvAWsvQNRaTqV9jri9FegFVaERQ5",
  "key25": "5n349Qma88ii5ku3yjM3oXRzGdyKeNxsRkkx9rxQvj1c4DsCTKoro4St9jmjy83wYGRxhpENUGLZqF9wheCEPPDe",
  "key26": "K9HFSTdUq54YkhqEVtU78FoHtjSL17Ar44QxG9mBu2akrZj3fexGgN7uhi2DB23jS9Je4WjZhVLFBmBRRdu8Jau",
  "key27": "5bbpfXt5wbaW8qHjF1ZpA5KhcBbeqv9kMf1JHnGiDvCwGhZc9WCRUvYzf7gp5LHDJQcYk9dvWDdRgc4RgrHuSusK",
  "key28": "4sZ4S2uUssGETskSMvDVJeoLwoRDhyVxFefLgXiBYcdg9mrfzo5vzbUmMRbxjd4NmoGFVDfpB3PGBMcwR3hfS7RH",
  "key29": "f9w5q438av7afUrsawEdtFz4iJ6zasDBJP9mPaXuYnMvDmpmT3J8u8gQBsiM56FvZMB2bQJPdwJGgQEe12o4Udd",
  "key30": "2MmVP3jyt8LvLYuFdcBdigrW9JutzqadiLxsPBG5DyCpg5ypyh6cSXwATTS4YcBis5n7Bbi8gqey6hA9iF5ocX6d",
  "key31": "bF2bJke8C8SnFWvdScxj9F4uS6N4s15mbuEEQHZ5N4KctMdb4tJHZwWxYVbKpb15jiWf7sYdF8EniZUfUT58GXD",
  "key32": "4zRiBzqTiG8YZ9TEPHzPMEFH1z9Af4zrktFukN9oSHEKh8fVvM3Pqb6tfhmLQG6KDJpfLmPv6jQeAZxLTGWiYSkS",
  "key33": "3PP7TZuCbEyUcA4ZvD9HPfEBijPP7uy7niR6o8Hdi4V8z89hAXfXMHsxMnGtBM3WT7r3MjQ47MGTgAxvqPufwauC",
  "key34": "42gidw1m3iogb1enMX1wtdUuR1jzxxAu3v9YE5WDb3qcmPVbwaCqSLKnDaS96FJqSafyib99vB7fxwXfKfGC1QWn",
  "key35": "4EeTJ4eTXXHZ25iZLBr8DwYwmkV9S3JEfmGnN6vwVwXk4BXakS7KtZRkGQ3CJ7WpaSwvHqrXTAPgz5wbvnzKfDe2",
  "key36": "Ub5NYeH31XUUogZLbC2v2RTMVuFXGQU4dj6qeKwx7ZD1zXF62QDXXLuHoxYPok7HfYVUyd1Nr7bYCcYvMTggppF",
  "key37": "5SUNbz8mUEWWydvbHcT1EGqnthJkLVb9pk2Vx3pnhKwQ3tz1nS1aU3zY8BcJnK7WyLjrDwxqGw9dzmd4jA5yXr9H",
  "key38": "3JsDkCe7bbaFJUDQw3bDNDSyqZhb9GApgsLZky5p3dKv9C4RxyXpokytcypvxK4cM3shR2Bk517cCsNfdmcTDz8k",
  "key39": "4NpTEGK6YKjjjeqx7ex1BiXKK6Rw7MjLR6TZZKPBKBuiFKBJBiZNkicYr18Ub54YbNoF9FH2hEPfbYnsKpRk576z",
  "key40": "3awUkR8Nc4FYMXT9jsFcXutztLyXyVimzEpho5o77oLZB7RrNXVHS5uRtyREo6U1nwcMtSkLaGHwkhMZcddHgC5e",
  "key41": "4FP5yTubG9KNpFaXxzSJCHHSNYdp1Y6yh8v6VgAXGtpTin2C68E5ZtcXFzompc9ukfzzaSWw7eCmcWJYNX6cmEt2",
  "key42": "2vA8rBU9wsXKLz3Paqf9GJgnTD3hgnbUGRrsEU8jbKWMJW9ekVz6RkKVgaHFRLAomnWUjEMPTisqkKPm6bGYJbyK"
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
