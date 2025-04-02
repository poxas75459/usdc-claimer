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
    "suGknQQiZH6cy1Wf5zMjaGZbvsu1vxSwSScCgCX1jfoGTvihurt6pyZZDVvXD9by81GXizvFmP5jEUey3aMwrvN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "thkoqRf1uugpZqWgWj6EPikw3yU8CJAzN1QvEVKe3RRk7RJJE5wpSzAwjLdLAnRQQ4TwBadfnXHMiKYQCkDBrqy",
  "key1": "2RNZjEicYcnV8639EtadpBDoPXLqBQJnAaTTYhMeYz9GP7jAaW481tQiyZwZVwDuaPrTCcS4LSFBzTjahsb3QNgQ",
  "key2": "wvfkraBYbU9qma3brbvQWbRdwddYxFuaajChpBCpsdm271KfS43fEGt9LQXhoj2JZQJomo7onFt5GabdZreUZ1B",
  "key3": "2Gfk63DFuRWkpziy3d1G26nnJNqRJpT6isLDy8GoUQuUfCXtHTMeGy3TaWNzmhkEuwpcFn6u3jmnmneSnfwo8fex",
  "key4": "28nW45iPqCxfT2a6S9WRG3k1FrKaKpMhStj1TbPXsC9qCdQde2uADDJSCv8aNb5x5QESUSrmEj6ReB75YkSnLFiu",
  "key5": "46DEuzWRe8soZTaHuEGsDixhKMFmdrf21VUVhpFPFr3W5uYFjxRZLpLXmYggyY8vN1eMYRvUoKPQXnj3f1vKYU4k",
  "key6": "4kJ9TPL5i3di27hi6pYBc4huhCQyCkfnnxgt9bmzo73s97tDXixDHYaiAhcozXAoUxfCMgwpKeWaMLuMdfNRJua5",
  "key7": "SP75k5XB4b3u3ygxpiEmnR3zwvEM82pXRDDzuYSUDc4jZ8XFSHYuFYEPQdyZLngeVeMAPodbdfqxmsnfqhWV2ow",
  "key8": "22pHeCK48EDq5WgjxjzHyf6sQAwqrcEP1ybmj1Y2KeNgaMG1RGWkEdq8cFrZX6NQYr9C2qk31PsA5xMQNvaLRhnQ",
  "key9": "EsaAEK1VTAYihTf6Ts1cRTQqd3wpQc37eHMXrzM6UUi7cv7ssCY23dzPC5gmhexgV8S2CxMY1uRk1zFc2c7vA2B",
  "key10": "4DF6QX1ps3LRagqSrM8MhgeRrPSFBRgA5VtEuomj1M9Y5HCLTHiX1cmmYoY1etbaVtFiJbFsaLjZ42PB3VYBMoQ3",
  "key11": "2Gd7bTFMXLNS6HjLYZSL6KDs48dK7UbDvwPMdJ1hqHbq88xp5qTMv4KmnA4Rkp9Gdz6fnyb6DdFaZhRAjgWiLCm6",
  "key12": "26eAm2JyaLcae4LvX6SYFRYLRzT3QiDQijHCq8vo4QkV9mgeW3MgTuiAvivheH5eD93k4mFKAfHanv9DJzTsaTEr",
  "key13": "31vVrjFrvchiPUF2WJJrZGQN7xnfZ6qY1ZbJsBPomyLgHGM2gYMioTyJkvVw4FNU9rkJxxKFGJ2JVKUgsPWXHT67",
  "key14": "ViC3xQ5VMiFZw4quLfGYEvD7okudAxNbMLtQrhQmx5HAGWeSfb3NXikPQsKoJ6BA6yWKsvkTqdQEfsPaPSvfBSQ",
  "key15": "3tJGupWnWqfnWoN6CkQBSAdUBcT6DNjvT3cBxWryuE7aFWW89QsZQFyokayK85iGGZ7XiBstZzqzRdwUftMLKvvk",
  "key16": "5xiq571gmLSrV2ZAKYyBYu4N4jQZLSovQ8xrRBGsUcqM5G5pa8GfXcSpBsnXQsqnn5xFfyVo8W4bdWSMbcmZKtqT",
  "key17": "38e7avpyTv5tqv9SzWiwhi4X64BxDX1BaRhoto66i23sECUAks9fNTN57UpPwsytfZTGRJ4oqmMGxzWHmdy6qxUg",
  "key18": "39K11qy47UfKQsov6mkibvakAT6tV27EP9AYozPwePHtUHu4prsh1mUDT9LPLkGJUsQA7CcrXL1pbt99GrSn2NfB",
  "key19": "4sztS6Uetb9jdWCCFt3ymJLVn7wCgSGvfko7JA9BqRGmstr6eYkNLQ7PVubPeTKfCkvy2hQc1nUniGqHanVLqViq",
  "key20": "2KHRkPmX1ETMF6QwzA488phmeg5vtqTmJXF3SNofc8M8RVRkB6Bj2GRwbqtahWr6pTsY7swpW7NNu4HDctuyPVpF",
  "key21": "sQsreHtWZD6Pf9jEUHYxf7VHDM9Rfdc9T5hJvrHVDvrRJDiZWRe7R6e6Dtr1BdfQgRfoPusqgqPVmQNTxZKyJFF",
  "key22": "nKRqTqzhL7FAL3psUKLXmJfiov7pkkgoqESfZdzRNpKXVofa5zGtfpSnDadQpqBsWDVxZGCApJuDtyKryfWnmQa",
  "key23": "2TxYmobMxqJmwtkXz4wYezJHy7kdq6tHtZRWDLsEvE1iWcSg5mWic5WRNGszGQbkNww9gBjgxR7R6k7paCJkRfUb",
  "key24": "48JV8MUCWScqdXrJUYGp5aaoHrqJGFHgZwD4PHCS2hmLfXNcEkZyAKZS1TG7Pcw26fMvh4pS6Sa5CQkVWBEmoLCG",
  "key25": "23enXa7qWWC2SRFmFQ6VM7qwPyrgc19Z9s8yvqPSRw4THZB4YGmZia4EiRm47yQbCFqZxGwtuQEaC7FM4FC8XuWg"
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
