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
    "cCMTDcipGgyYxP38N3jsPLvk3Et2xQ8D7PTAwQNJXnzpnptyN6wDgLoAQWUanuD7DU4BCufwpSHkaNW8hHxutTK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4YNCafhAq5pitw4K69TgbvYQ5GemqZwA8v9auoD7Kg9uaiPSmmcXpHq4Ykhm9jRJzAtxWjJPgLhcdT9A1jB1vfYP",
  "key1": "g3rS1w6xDNvzM5yRXzmzDerKfKgQPf7jgn6hThRYfK9QyC1hhuw6FgGmJ25hhabJuuBTuZbuCVP8kW7V7CitMdW",
  "key2": "3sRQ8HecVumwhYwVtoYo2AEyqZEdCRWk1bTkmQbpUygSuZJhpHGL5PAzWVLApJJCeCEQ3kFiCq6RgP9dqWcu9WNc",
  "key3": "5zcK3s7N1VHNEa2edqvSrAUZGAUgGkKePdnKDyvdYbKpFy7y9DqFbytH35mPUnaDq6AAtKiWiFWhNBnEV3cc7Zun",
  "key4": "3iqKLntPkzzTDaPY1cKux3V42Un8gzuMrF2vgQMY7k7KouJUG2uTwsCTs1A3g2aK61E7F47KqZpKQMc93CX74Wrm",
  "key5": "3cKKtvXxnLrxEV6yYZTmKGfcXYHQbbB1Gko7mRAoFZXsqwdZ6dhtYqu5tsgQM8tEQnASBThXT7rHisB9YAMno8kn",
  "key6": "3J1QaGur1cR1KDRjzL2TfjQNggZTW5PLDra74HHbysE3T4UbGGe8JuoZC5rJGp7UrRZPDCEwF4KBbys6G38gxMem",
  "key7": "253BzDzkM1hSCbpfg5ycwse9AWU813SzB9Lc6ExjkH5bKbdAUaVupN9Pc5ESzqeMAw7k2wGFvGPHuJxoBsQNKwsi",
  "key8": "2hwZypBQjaT5EeFr7XBQpNoXBxDBkNysXpTfuWRvmYFR95JHDK58xAvrbG7hmRZn9JiV7CLtEMdKMb4Y4bQwHq9F",
  "key9": "41rJyc9AjMhKGDzmHsBYeGKoVs4AdQQShcPa878xfsht1NZFQWqdLzrooLu6psuvY6tPoRd5FCo7WpZvstsZb3Ak",
  "key10": "5RiNLP4qVofYJzXVyWvJ17GJts3ePo1zV4jH2rgPQ5MYTjnY6TWBvG18iEHvva4E9iNtUjTk7KmuZ8tXAz9Vfu4k",
  "key11": "8CjcXsUSP4WF4AmBHuRxXRg6NNGD4xyULRUHwrNWcjAzCiUTo4fAmyPGtnRrKZYHpMG46WtZmW78uj3Qd9A4SXq",
  "key12": "7uN7BzwbymAe5ur86JRKvRTrHNiwef1jhoJhTfW3LnGbNzDVmLHxysNJ2Uh3ABs3AR7k2WKjY7tMShAr7Hji3Kw",
  "key13": "n2kiMYjZLRTwA4VVFvKntozNxcnqF6doRAQBMhJL7JSVHa5Dynq5nDagYRwaAMfTNMjKLjSQvriWQ7e1FCCcbRt",
  "key14": "5Ct73VTzLFw4Y3qbqj5bHfX7RLGhAzJxJzcnHydvTi8619k4gF5bsKMTo2Emh9PdMA8pRyKr8asTMmXi75kK4Wfv",
  "key15": "5YB4c5k3BkHdRBqYzgN8REg2TfYYZYBiYE6HKDTMDeEWbMmzFWUyUchZ8Ah1FPV3bQbfMprDJZUkvrkduCyt8rPG",
  "key16": "4k5CBe9SdkdgGKGaMxF6HcCFGGkTdiqq5zXPgDFZbPx3nVSW73SpisK8xBwSL7hxF8eyDbkwzSCrKiFWsSvqmYJJ",
  "key17": "5hVXh1cyihqcyVyN5hJ5t372BXoLJFtUovutkpz2xR5XnMTNd5FCAJ3jkeY5sqKRqhUbj6siZuxmyZGytd3Gj7BE",
  "key18": "3gtAZKbq6JAQAdqnv55C2zQSX5s5VRNDD6hBhihchFoziT2yxbdkLtk3qpe3AV7dTjDEnXV9Mz3sMUZJMMsuu6YP",
  "key19": "4qQA3x1VmSwvFgVoPbAua3Kcqs9VPKrKLzBoAcKwAhpt5QBStGvDAEa7Rpw1HXkeXLJU4xj7VRt8ae4AAmonQ5w9",
  "key20": "4PbM3wwsrQgo2gMhXGRxWJBXM6L7kNUSoTKk7krYZy5pvpYyXnrDx4QXYrWGpyUyPqVC8EorUdpGSsFuRrqAQTZw",
  "key21": "35g7Zr7t64AkVziAVC4DSpGE13ThixqVohaBYWR1uoLv2MTdNaUwyTP2AXPcPAvmE5iSgyhL2emm1DdySUXBVzLm",
  "key22": "qDbWSmdnBr1ohaYjhwmvihQh6MCysEuA7kw4MUasziKV6RbknMBcST8TV8Nm6Vxe6cyvCuwuM7k2ELyKrwG1JjM",
  "key23": "F1eHa5rFLRvD6Ps71z4DavsjUYmfau1fJosk5veu6KyPuPmNS2ggM12nd5aPkTErdvUYBK5STKGUzHsULrcBaYT",
  "key24": "2nNVJx9gjXjYmRMWvKM8aiFW9EaSscrkDzb7nxQAmnEiBKVhGHwZdxjMwbQqbmXCTy9KGwCp1GPyfnWtZ5NXYc9o"
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
