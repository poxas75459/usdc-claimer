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
    "DdHQDW6NUPBpb3nVFYmydXNGDmPRLg2H2B6HPybVL2TDkGRxJQLU8VFHx2H2WYwKiowGSzNJw6wbGYUhFB6jztK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2NfA8g9pPABYHLPa2Fk9ejjkwr1WuCZYiLLg5M5fzuvbE95VJt92nAqyMdHzKYLQR4BUqNSC6qCBGKmq1rAUTWxd",
  "key1": "5sLKxPut8Xp3qtqsLaiFSAE6HnefHQnJW28fQVotD22wp5NdD949QBHiHLeenvnCVih9FmsW6S78mBvYcTETCAFe",
  "key2": "CPQbRykav4y5r4WSC4bvCrMQngQtvuuwXHgmeJzSNsCjyeEpyR4bBRDWsnEtjt6MdSfo3HZYGARZ7t5JxhwLz78",
  "key3": "EamdgiLndHM2dJq5x9TmBJRLQbaDL6FoWVPqUDbSJ9mF65xW3FdYJaYe4ooW33dnQZ9Q3GkZ814UkyFRPi9dAgr",
  "key4": "5hRNBbf1bQ6hKuGCYKyUB3L9LeAocoapGYfiUWAyRgvVfFP6txEmozhpLhiQ3DTBigGiPGwQXgwYJp3FXoWADi24",
  "key5": "63zw5vBWx77zNgUjWutsrwLjzquqvinKh8ytfXL7aotWy4ZU2p3RuJWWtR2zpYxE8zk2HcCR1FwLv12rduXPH7Zu",
  "key6": "3VbUzgkTEgUgjTZBxPjN5nHP9NxvFjahMhMZUdn8LNmrn33jm6miZq7aAbsPYHXjgd4UP38ge8qaKmo2WTwq2RND",
  "key7": "3rtkSNTVRZKhtQTzaU72NAZsPwN3oLCgXgvQ8d2rVYcE3ymKs134hosqfJF4oPpvxq2G3hxXs8owa1V88UYQyJLA",
  "key8": "5VNUtLW4ykcM3XfpJMUWd77PKfpYcZWfJwMbyQst4zRdcAcDmQS5NRvGVxayU9ThXSW3e82D6P4NZM6KLaX5J2Ln",
  "key9": "5Hncav12Q6WH4GLV4Htvxe5m5rQcEAciH6xPP1qd2iKi65bpsZ5w1b3VyM4JGgUJvh6aH62Tunbww5DgV6TgUDPJ",
  "key10": "3rALJmUXCSNGXpGmFjDHeZkoaytaXD8GfLnKiFHsQPRNs8AAv36KkGcbTxC9Zvo9RefkqqXC7q2sAYTUvEQ8emom",
  "key11": "4dryMULtKhwqzrESuWPmKjhqCBjJ2yGYiMrsHhHrMwkwXoivbyHgV8pGVNyd55xY3moy6icQKUkBsMKiEztHG72w",
  "key12": "4c6RKVvf2MyBRwfdy1fw3Rk68rZnJtA1KfqsWPZw5aZYJqaC5pyquXx55jQZTyJMHSVwRFMpQFdQJxabyyx5pGfF",
  "key13": "2VihJNMupscnZ5UfBU269ECSr8CZ2MYFQHQT59Z3cUvg6GYHoHhCVvWM6ibyp7eWRZDxTUA8h3CB3Wo9Ch53p46e",
  "key14": "4AN8RaPUjybxch3ccSw5EENBYNG3QiHndkzxyASWQY7hFo9grWqn2QM4HHQjjWB3tvSGzqS73S8HLsXnU1zm9XFM",
  "key15": "4jEwaxtaLBFDu6KjE2F8RocqDjpUvixj9huxCgFxVvAwjef11dexbRYaxqhy2KV8rycdYFZkLHhzQAFWXYbpewVT",
  "key16": "BamK3SLP5b3zMgCL1fv6VKKHFKzzAW8y8dDDX2QzeJNyG2qVKqqW57DYk8s9Z3FYM3LRDLWPvh9NcQfGK6bsBSW",
  "key17": "5572fhM4L93PX4rXPkd5mJL2NEr4vf5ZdaezpyG2GQYe2tVyQ2AeLVUEHSTaSjJwgWFyeQkWc9nFBoNjQAMEE9ns",
  "key18": "5BgTNpkZekPEDqRsqrncmASAdqteZwNL8YMDmPWD3o8yYAEJ9fqSrFLruyYU2UL9oTwk1UTnZ8R6UgoTvE4bxRFC",
  "key19": "4zPdm9aN2rBb86iGbNiVbGURc5ANSgU9BVAHB63KtbKg1Nv9RERfxXZDXf4eCFiuEbM9gGDBw1tNL9NGMym6sDEw",
  "key20": "gEfXHauQdip5b7FbJcWQzJL5eac8zE4HgjbFPrU9FXvxSTJgbWEGPf6B8aCJnUcx6qLCjATaxduiPvSpCizZxB1",
  "key21": "4darw9M7Kvr1ks9KUMgB5skevUEGH2sLLxkBvg98kznRgZ6ThrZ9m3m8DtCeGmGFrpjc4BDdaijcsF4eQ5XhB1jr",
  "key22": "wKuB22dBikTY59nygB7PUAyCpH8TCkd8p43zyDhG8KcXtdYfiMoszNJvg8RL4jbU3n6NwjPymeWvVXSf2iwipDL",
  "key23": "Tqz3Wv5rgnjs5ZwepvjDJ1LadcGYD9paJbY7Myy4hLLpcYtxtr3HYMjMHssRih6jugUKCun8yVoowrmiNtg4qdz",
  "key24": "3bSxW5UZHHFTL5cRq6FaLjSnuwVJjVmqGaA828juBNZ2JuhZ9daoFFgznToDVBjxMhrvnx1CfUm84qeYg9UCzdXY",
  "key25": "2DfK3jaiAiGYDR2esUtMF5Wq8NPhrMCNM5BpiadLNUZQDDTCRR4UTwwp4Wvt1epQy5T3jKmJVLY6dQriyktRByRF",
  "key26": "5ZkaQ6qEajTtMyyTXUk8DEsBftouE4KQuq1eC8CQ7JhwrtxYoZsYChJKCoq5MqBnwjYwnqc2P62aRmfXbYtQ3Tfj"
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
