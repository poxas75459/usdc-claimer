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
    "5NoLE1XYoYizbLBcjSFtcPchyGQRkM5KNwCXwNx2tu7jmUqzi9CRixsLnpUpjr3ME4ocd6jJKKeqNrtGxUS2Dbje"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3gcpJ3K4PrArNdXvc7xmxvy7GnBNyS4w9ix2iyu1h985wnuwAboQSbyyem3JXdRZAURcJkaZVB2zqxPovNdvqP5v",
  "key1": "4AA7FwAaUNfdYvaFZg2uMS5StwTEJG2BKsmKKELjaqYWdu2hhk6X4cAw34WrutfD6CQGY2itXsHg1pg8irpWBhLw",
  "key2": "3xr2srzPPPSc3KW6fEHT8JirhAjYKS7hBoDGmh1YVsCE5TUXkuzrvESGUhBSbSXhKH1Nj3BXwE7SG5rZNiDt9Dtw",
  "key3": "ARM8uKZGyLvKi4uryQg3cVj1Tea1oSSUpTCLEtCBd3hJb92A55VLEakmZaGwswqAKCFRAgqw9FMHH69LHvjTPKZ",
  "key4": "643upFgtWLKAk3D6kwDukNhgWjWrgNKE38V2EAfW3v1yxrie6mQ4Lb39veSNdXvzhrzhR2mcfXp4MKV9LnR26yUq",
  "key5": "2Ridh6SFF9e6niK2eT45sD3e9eR4TLUgaCfQiq7nnLPkZmTXmvjY3kmiD6EtWi7pRmMFcZd5sVgsZhJK5TZ3HvTF",
  "key6": "KrimHMKjCtBhMaUuArfevUxf1fEZ2minJbY5noxxsNGspcYz4tpGJdW8WjbtAQqbPcMaqiksVomYYLzZuN5GvVB",
  "key7": "5eyVYPtQetRC1SYrCaxhNBCANsR17n3AGtsEN1ocBokcnxS1yqXSNNnbq8nympwvTc483vSK4vrfZPgajt8SxQvA",
  "key8": "4X7q2ZPzwY3j75Dm9VwFWMo9Lgq6hTfKqXZ8VxLGaDLQob2ivqrzkCM5L4BVZrTxiPTfSgoCixzG9NTLccQhE5QL",
  "key9": "5aqZAijiLrWXzERgsi5Dz2PrYVmkab417h9FE43ujyK14sMo7VJGUaXYg2zCh6qWnHxHfpWEed7xVq6wnEtfqj9G",
  "key10": "Qw7ptdX3Qs18ajSVFf1f7MfFRx89Wji1C1Ag9fRx7oVQ8cynwZDyxi7EjmLDuhJ5vGbcw7r1spSW24ohTs3AptR",
  "key11": "39z4N4dW3Xr63SSiSGzgexSp1hyp6LkW7fQE8vRMS8wmdQ2V4xP9n29KT7WR9GPoksfQx9e1euc6JdySSFc54N3",
  "key12": "5DPVwHovu1c8TRfqPvbXiygWy4PpimgVLXPXiFFefqqgzUn6Ahg3Y2wiZ1QhzyuGNHmptVWstHmj57AWoJsRRSHk",
  "key13": "5b1i4QJZH2XaFBDCGQVChrCGCKUEdxFy33poisU6mvsvcFD1Z3N9QS9e3269DbXEhFr9hVaYxyWjQzMsjAvVM6cT",
  "key14": "5PF1qJ4QiyLDqQPFCswS3q611z56wUNecY2MacBVoioBDzBfe64umDSXxzMEQohP3RLg3tus713NXsVZqKjmcK9i",
  "key15": "ej5124c9iMBY9RARAvQkfYKMwpXNe8PerwJXR4PFHP26zoVjciJfvYZtPj7Ni5Ve1aoYe84YPZCDU9Fj2huCLaN",
  "key16": "322nLzuRgfUZFgpiad8H79fMiXAdvnhKK9MSPXN6nmiYGC1BxCoJdT3UGAKLKg6X6FLFySGcuFwfogLTyH9p8zw4",
  "key17": "67mTs5JukXV97p6sCfjnkq3yhVFH1a5izXob59qEp2Csckt5CySWiZ2RpLeVS1CrorFSbJku76ZDyUGkaj8wLHfz",
  "key18": "36ZiT1KyZS1aCuCK7ndFCaro7HfTbRbwju8EksnQ9BSWMxTVXSHw7K6LSE3kZnsmxvU1JfSBt8irXqSGJ1gxgnvu",
  "key19": "4XdaTkp8Ft79vaE9kvQ3tQWxLqaQ1ZFiXk3khPsXBnbpXwpFbw4bLs3anQVzeKLTSHkV477bjr6KftueeYYn5aUB",
  "key20": "JXoygg9oGdPqVuKqJrRdShzepo1wzYimvMX4Yx5FBbV6e9pJJEmb4q8VqJokwfLuLYzVf3DexbNd2QH9at8Yg5P",
  "key21": "VLrUJidGtw1h4UC4fnty1XjkAjQ5nqw94BKxr3vh1kZS7iBLKonBT7VhgMhiKikF3ST4QdiN6ZZX8MbZH2xZdo7",
  "key22": "3TABUJ1vjLeBJRoRaNwSWu4DMDZNxQ6QSYHYrEmTLvLxeYQY7ZiznrPexBhczowwM2KtRyP18AwuT3nVRXYK5Cym",
  "key23": "2Ad6doPdBhZoLF9eUvJADMFR7RGGLxNaYNaV89PptBsi91sXwAHZNewFbUnL6GUbuKPYNRUpXWb24izTUrHUsfqk",
  "key24": "34epEaDhzq7ifo9sQwMqjqJxZmgRFmfRr3phjVmyHQdgoPMxMjJ6efaNZkeeLpkBuuFe3FQFCiY8G7L6gFQ78JXQ",
  "key25": "3vKy7JpS6gCjqbpE4C61JeKVPWbp5Vy3dVfhqbMUoZqhvscTa84QQgqoebSVzjyDRjEjFbBYLasDUimtEvAozksD",
  "key26": "5FLSqCKR58fHU4Ca92PVPpjXjY79abn4JLhFCpK2QV9vZ3y2dGt7gAU5NGEoAH7wXvxCh32caM8LYHWszJXxTnCQ"
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
