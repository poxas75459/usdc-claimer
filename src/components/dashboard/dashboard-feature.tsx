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
    "62nMQYKzu34Q5B969jctzTkoohCTb7EvhXqZqVT2kiqttPowrtmB1FgdqrY1Gb1fe5syhjc5hKMjYpXWtrSEFNq1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "497ngXTCAnwdrGRJH37ontUrbZAYQCjLXEhmVP2keHRkDwwDL8Fv9ZtFNxWg7pGXPRdbhHWQxRyNAToHgUxt5DWR",
  "key1": "3JqTjBrsLrYC6EckZFAgEf4ERKzLF9FqNemgswsaLYnhMepzt6AayZVvnCRMso1qJMbeBsGUa2hg938bGwRFWfMn",
  "key2": "27G6pq8B7ZFGPvYSXeuLsNHDo1E5gUkMD9fN9uRF8y8e3fWQi9nFYs4izhbQ756k67y4xRhbz9sk3p51aiTqGFYH",
  "key3": "5kX8ZNPemWTMFQBCyAkngzeoNqiCkLMeSprfGXJ7BMXdGyfFSSctHs37XVApnFh2RrgzCtRSARbW9zeAcUot3vYZ",
  "key4": "5vCVJUiNqksCpMuU1WKuDeVQGsxUxQUmz3u7WtWLkihv6KpZgaQU44dskhPb4RXzdJNswHStByN4FEbbnkPY7CtB",
  "key5": "6eF2d5Wpz8hoYZ4tojR4DohNc1UcdXecw8sanj6zkX4gtVnBBVHw1udKKCa42Mbgxxhkokjt4Zxg2UVFoPJmvrW",
  "key6": "3dYgPJTXUPybv8885U5Z2pVb5pzEb3uXrnzanHMCovKozNckDAbdi9tVcD5RGuYRrN2SinZRuxhsSTCFbsx5py6L",
  "key7": "5QDi8ZGMCKHS27JjYTdztj3qYF8iMHkq46zCUWnWBAF2kfEoKSTnGuASdwtqYzrDLsgabCHziqyA857Wbf742CeX",
  "key8": "GKEpN8TeYsNx6ozFQiMNzswbomMdhkWbkpPcafzGdcNJtf4CGxP3Yp7h5eJYo1ja1VkfBJTZADpqXVuizVFbbSj",
  "key9": "2kVh8wwr6vQM3tHuWSo5286GbBz93qZU8Y1dgrdhqsTZDwWXWQJtUGnmv7Z5X8AjW3CnYQUJdrLPcSvGmtmsKzGG",
  "key10": "5FyKAh9fV9HSd7oVvy7kWuiZBXXTb4AUicxE3a367ShkvZfpyRNb8QEu3UazTaun6Q1sCgc8JFVdwhVyHYsgjwTY",
  "key11": "NhzgDEBXA1WAWcPnh4JgmfttXMWcfbxjT8TkX9tXZaUmAuodvJjFADft2Etef8fXFyZNMhvde5otzTQgqNscG91",
  "key12": "3WtV4Rg9ZFwnKs4LtL6QRT75Zc4XD72Lezpv6fhmKFThvaLdN6Vb3JNR43x9mZkf1eX4KsGZ7jjp4K979Z2fjArs",
  "key13": "2LZ96Lp3rvQzbppx1Ker9UfHk1G9ozdQoypokiuiEPapKDgG4ZUnSaWa2ab1jmJkS5xYby3xzwTNd8LDdPutJkxF",
  "key14": "5S8NJw33jNMauVJNyKJg81djBZpTBou1DfADAUCphwJqoyiVrMw1dk48qxyFaQdmPYBZX4oDQnr2xn83bH81j8D6",
  "key15": "6up2Et6dtXG7JrEMkZtrkAm3UKtoKxFGm7wxsJfox5VTE71WEQjG2JPe2ZNqB8p9NmTNM5DZnYt4Bz8bhXqKF1w",
  "key16": "3jneqUfrpvzLWb5fYCpyPmJgqH15fyLjW9rq627zxrhz8CftBvUEVYGwYFBrRJtkfkautma2V3J6bz5FHH4kZFce",
  "key17": "uqJaKg4bG8zSC5cciPRJ6w9zYG9Vmynsv2Kd6rXK92SskRsKhJCkxCEEj6ok6NZ8fEsRMauEXHHSyPh46FhQkcj",
  "key18": "3bQGJCBHQfJejU7oB4uNaK2brDgA7ipAPer2ATbTZ54HDL7KsVsiuzgZ6uiZPFXJkBsZACGxoKwne2o4znwrYZsM",
  "key19": "CC2SPFdnpii3F7yw3iF3WKALwmuGcfyCUB3tJdo567jUTMiTMVpuDpDufzXBkfidNBVz8x6MhXPJhxKm7XvnHEy",
  "key20": "3qA3xyhNJQsuCqx6uMk54Moiadspae8L8qzjx3rCSXwzAbGFsVeWsoYQj28xcWHH2LhD1JfGPTZETC23ChXb8gLx",
  "key21": "4t96FpQz3QKdmCyKJBTWV1VfBTgfR1bjEQJMamZDQVKLBNmXD2hQ6xaWP8U7FBiXvwA8W9riAqh8gvxT7oRih77L",
  "key22": "2V4qW84wwNJrvxBVEhvTGdxN1xGBU7LExkV6YhP56Du8N2LUMJRt5rLwud98MU5dhx5G1zd5EGZGGj8KFPdD9RLy",
  "key23": "2BZViCAmGbf5JB8r1XKxwFtzd7ZqWMmBjZPg2oGikDfDhPza4AywHCxbB2aCmJMQuESvrhy7zhPnJo9q1RBve7qd",
  "key24": "5wNo4axkATJcj69qk7Pne1ZSrQtorica8hoJwjgiuo6rEkgXqeF4jBT8fwDXG7wUfbZExtGM5y8Ke8svob9rSj5Z",
  "key25": "2GjAsiP1uR83cyKQFZxjwEDFMHhCXgos6sLFzwNq67Pecxt5xdfjC5yCWBjkCW3ZfWoUXmRUB3Us2mvKJqe5HyHq"
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
