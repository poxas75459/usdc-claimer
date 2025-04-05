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
    "44cEnwMfR4BgPQwsyXj2FXVYH8gUvXjqt5ZHM3jS6FMSfVPrqdvbEn5YNmcEvc2umpeydivRyDHLS9bcufXGg9ts"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2rLris28u352w6DE3owDrGfeUqD33L9z2yq8V6ALbyQUnvFjFTdjuepYASQ2UHHkdT5aFVHQUTtaaUkUbGm4ZJCd",
  "key1": "24dH9bMSEcXLem5KF7TmXPPq8A56mpkvVUUtWHTzGEXL8bCXoSmmuaZYtzWk6S3gMzaZyn4yc8m1LUdG6LZsUevo",
  "key2": "45nL4MuceiFrFcXh13PtBVHHV65ZrxNx8XxRA8Ym7294KzjPfFzomE4WWDqYwUyKRqC8iraFpccQBwBd1x8TuVuC",
  "key3": "2krrL4rjvn6aPYYoPrKdGehjhfXCyyjb4tzxboVjTixh6TQLybk2qon8FgbMu7UcnzSaxNNkvpQUtji8mDMgVvLN",
  "key4": "4X37aD9eEkcEagtHMg2mpiT2mkmNJktdbEeQfcNqbpvJhqfKfzvGiyiUoJLiXuTBxX8bbdUcppyxKa9HNBCjPafp",
  "key5": "WkexEu8Qrv9zhWSAfrZLmG4ycoqz7NYugCEN7BLS4XuE1U1Gk9KbHmYzn3LJg5gH3HMHTcDbbFKJRtqbzx7ewXD",
  "key6": "5pRp1VyDEmcNGztSJ69UPJZB46BQfU7am7FVx3jctFjQ11fdvT7BjU88jMb3JxfHfbKjzf4WYeqkELd6YocEymXT",
  "key7": "BVQdxSLRnQPE4MUnAzt2angyVimL3pSp1zqMYCceRwEMFPMEoMtDHqe5WEcczbRdrxF2N4L6Q242J2q6s3WCmeZ",
  "key8": "e4AQaPbLwuE2SWwgKiCqvHiakbjg8Q1sxefmTNevtWsNVyonZF4hGbTCMwt3bn62SqisbihwVkFx5i5KLm7RQkn",
  "key9": "3sLVbub8gtpxhqFaofSi7mwF7SaygyQWVrGs9rS6KiUAPFQYXqa2d5ST2xFXrAAVuniz8PpJfgELSpHhfsYLSBGL",
  "key10": "3z2fufvQWDRJp32Cdr5PYUALKZQTpaNvdNcKuVqEdbPiSduNM9QQBzFTpnwTeNMdqVEga7J5R6hJtV2KVxhdCeLr",
  "key11": "UGAuPZG25vLpL9FYZTroy15SYBCL5owUd4eSiQHHRjxeJH2XHZvZ48f3z5nwKZLLvjKGviqmohTDMjgJ97giAbh",
  "key12": "5bnJUdwAAMukcHypy9NEh5NxxsmSEhyyTTH3xihqHasz7AnWMfPjQ9Bb7aqDwXmAkpMoxafYkj6iG8exTQMM4Avo",
  "key13": "2Ek1F4YBYgfgB2Vsej3VWXjNKkfGcRXnYa61wKYJUSQMssLrmv3SvRpkZS5PcSv4kT616i9ErseBuj42BwADhiKu",
  "key14": "A9Xiyt8b15Xeotm2fQDbjLyZZBFTyMkqyLU2sFSawLxn2SKr1fsPETZXa2UxQhjtpzgK1KiU9cZNdWoVxghCkJJ",
  "key15": "ry9XAvJES4kxYBMLGD75GXghDEWJHR9S1R5RJdcP6URXykqd7ZmHsy5pXcgV6LK2Z3M6AjDKqCH5JXAimj2mSKs",
  "key16": "4NVutP4RYcqtnhYem7A6BSTFxRS4BVRFyVp8SQ53w6bqcEdW863doJNmiJgnAwRGb6VCV6GG9AiVS2sHtJKQe6cE",
  "key17": "2NBLTvF13dY8KZrBVaCQsa6NkTF1StqHc6Gvvoi9DdFSGyZa2osZynum33oursB1MpR6jjr5eNHMHgdnnhXsRjC8",
  "key18": "4iXcEPV4sxoKRk6Nrz7EQ8qVfHe1bpUA6z5zhRrWC4jXwsKUCt7T8jSPFMQT8mhZQ5C1R7wY1w57hANUz7y2wTYW",
  "key19": "ZqHzHA4ceNgAdGTsk6acobVpYa7wgJz4euzqHnPcs1Ts7KNKC3qX8EafvJRfPye591aBhnMwD6rmDMCWEDsX3LP",
  "key20": "3BPax7tvFWNqkBVCXh5nQgqEpiMX7XKJHSctme2o8qFT1ty3kBy7Y8Fe9PHeXremcL3hXdSSPkX8P3faC88nqtiZ",
  "key21": "qtjPLrvLMrpKcSmUT8WvXT3xhMShFiyqPiv1AqasJKEsZxwtLe1KMZtV35DbCib6NHt3vqewfi2QFV3RjYFGqKF",
  "key22": "VwbSfiWRGgKZDyFnh1gPqUGnU12PMaidXvmX3dTuszpZAeuKCy4TFu21KbiqRFzWdoVuwK8yPJdzHqgRPo14Ve4",
  "key23": "5Yo4Mn1qwoPioDGGUg519opQfR4BPa3g4yZTTkts5QTVe5HF3SUSycYWKQ36r8CPk1NJea9vNKeSTC2hqtaTifVx",
  "key24": "GTEHbSN1c9uQmi89SqsU51nDmhFtzNSDkwQGi4ReLPokfCRkDNWEje1q1HjqscTueahxBw8U2Z2xDDk2MuYFkXF",
  "key25": "2LENRndtbe7WpZKkRqiDo7BbE5AmQzjg2nV1PDfKNbKxocouTyvdLKaMwmyXR9dFwCU6uViq6YBYiq2kgcyCHc2a",
  "key26": "nCsQsPqy86ip5zfEjKLWLFkvUjMhztmVCHTtJMNu7ZqkfVsaPA9qJbUUEsfU1oqqm1sp6hK9ntvWnnQnfVPGe44",
  "key27": "66VVqezZzMxeKSkH4fsaKpSK4xhLJ2oyUAYaEvmA535zNyhWWugaEYwj6PcAeHHmobWsdSanLW1C4Lfnd5sKLZiP",
  "key28": "4CNB8E2GTa78cGJ3b8fEEGjjruVdEePxWZW5XqxMKr957Tm5TwsSNJzYmG2FF8bJk9tpVo9NFRxvvjAESxpz3uHc",
  "key29": "8Kp11Wb26LzwSs5DC1xMSRQ52NyPBW8EwGAcxDLW3ZC6CtD2Gb1C17VURkh3ScM1tp9eX4yZo9asRHtM2XE4MJC",
  "key30": "3YHuwFD59FSTSm1L1rXBpdDzwLNVYUF2yNo1WjuAb1E3ifXY4L3m3C3cknHxNFTZ5qMWFQDej9vvcMQfSV3C8MXu"
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
