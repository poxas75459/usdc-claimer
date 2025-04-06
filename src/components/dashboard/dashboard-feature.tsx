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
    "2sy41ebiLJhw5S7iLKP1HpnDHazK48p7rjUUUKcwnLZJ5y37dDdxo8xYkUgGGwL19Zum7BCVN7XxMhkdEfe81CVz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "j1q7nUszDug2bSveKw2UgcRrnghCATYiFHK1XTqdrf8MbHeSDDJkeWuuYUbsEbJ3Y8PXd5CJE2rVjJzVbKwjARw",
  "key1": "24oFau2MXnnQNj35jhN7Asr5zpXNNe5gBsGVUuRjJb2vuonNMHMRSQ67UGS7GJSggVum2k9wWhpPUmHr4Ewf7RZj",
  "key2": "5EeX42sxC2ZXp24rfaAH7T3ycEp4ft7dPozTVQLowA7bh3SmCKNzjQktarjbobzfCwCHcsdUS9WhqD7QhCEwKa9c",
  "key3": "3qnhbndddCZbcnRGoq75BkzsjKzuY2HrPQ6stT8gZNHytnTaqdnvnWkdChrfZHj76kvWL9VfaF1gxwxDuaFPn1UV",
  "key4": "3w9tDcq4Nprrxwb8sgL4Z9it8kQzNQsx6H9PQQTvfLYMT3AaskPNFpaRERFGkEmV3vBfTqdB8npqjNUZAHwLnfri",
  "key5": "KHW3LmTqmbC2HLv7LrMashMUJ7udSGdu4Un15haQcUHGt33PcUr1hp5GVPVntR17Vt7kZmHoggd7eEjKkgRSqbT",
  "key6": "5RhnuQZ9sCByaJdKzwWzZx83dacVPi3rUKs7FhDc57rPMHCkbCACAuMVQprytz7do498RUw936rJSNwKNiUJw36b",
  "key7": "3nF2n2D2ZoGJiVzZcj8fvxipgfdzyJX7d3i1us74g8haWLm9yzETneHCqqJotLAyFut9Yhp6nRVfVkMLisF7UK7f",
  "key8": "3DFLcAdoyqGx4paejboUGMiceeY6a25xp1UnULjqjgBrp86KDi6dj8FULVTVx5HJ1sWH7x99UVFrcaZGiTNnWHL4",
  "key9": "fcAq68Y8ZRmiUHgPhpLiRtz3PbQ4QoRtE1nPm58ESJrr1ViJiEHb4vhFnvyoFW5gjFQQKocREZiKzwwvgBEWqEF",
  "key10": "4RMzCWqRuAV7ffY6fv9wZzmH7ckBCKY7d3BXheLRQJgUeQptJ8WHZ3wTcPpDM9FUvLndcoJ3ZfHkfSYB6Aiwd7aF",
  "key11": "57wAhsx9t1KRwDYBJ7L2ZhFtNqT9MDn4s7tVntWGHUXuS1EAPQFGi3NndCFzz53kYJM2tmc4ThNrcVoCHc3jdeCw",
  "key12": "4DUbfxH4ohdQe6p6TS96ZUPUkpQozLQDKHygW7RUFVV3PZ5CVdkPUp3FXc3Rc3DDuqZ4hogK3K67bzy1CCMSbaKS",
  "key13": "4VrX3E2fHwdoh1hb7RDUVKnEYovSwWMCXjMG5tWX6GE5VY4bB96LjXHqx5qi5bjmCV9wYs7zjru37gHMGADR2K8X",
  "key14": "2jCJpUVcsV8Gzgar8gUS335S8eUPuNgSw21usDVt2969wQz85Kfteuygc4WjBKsqqWQSKoNu6bAZvjfK7GR7hUhj",
  "key15": "pj17KQ7h1kwdb4g5aQwxaXatxWnsBt3FMN8p2jwctRTP7qndhzt4JzY5W1sFQQVNAPckczhikJ5YRyv28WwN3Gs",
  "key16": "4xqVnBEQ4doHcDRUrbqUdb5NiEpJG6gHDv644kxfBzdfF1RoQSSFP5Ai1RmAoCJBQVZ2de43N3z9rk6Mv9RMMu5Z",
  "key17": "2TYBLoYprTC5gtkUzcwxhy1heqGf9SrfWrzVv31ejZA2uPhPk55aTd4bXAEmgQEBCRknsHxaj6B5o7M3qQ53PmFZ",
  "key18": "3xiFUdUmhvfvL7isXQkhQRiCX38SdTivvhHvrwW3ysYky7Mr6d98vswd6dWkA5do9EKN9dWBgP4L25nSVBCa7Fwx",
  "key19": "3pLRApZYJcncyyKrGENXct478PBKLUNziY43fG6k6XQAUdPtDxAo3jtLk8kTP9aPS8KdrGcnWqUuYF2P5V4acnKv",
  "key20": "31TtsVLrPLP8YVxafso7EPEKwwaAn4mSTu13Tzw1HYKCg96y99we2zfXWCHoMcottCJ7v15H4r1txcmNqYBCP7QK",
  "key21": "4m4pKBZspTrWxakXHFtRyTW2fq2NnieTs1qRD9wm4trKVbKdVNvyYb89Rw9cZniL1WzsJbV6N51ZdAaZ2xAbZvof",
  "key22": "37pZKxeXgMLtzNybCXLDdE6BSmeGW17Wpr185NcgDi6cNvwX1yjXYAmqYGE6r8NbjmkjtX7tppW6wZYHSPikfo53",
  "key23": "2TFJs1JBStiubR7ujcCNbaNXuFc2HrMAWP6tGwCZgtri3sevLzCwisFbfUcLfqTXfvKbS9txFm156DRuaD86zekJ",
  "key24": "41X5FSXnEjf17qSMFCWjF7Lb4WjX5xmwkrAb9RCXLtCSqZdLPpaW2gLDRvVmbH6bw1diY73jonEckgnB45kj9xgR",
  "key25": "5mbDrNvLYopy9GTGhtJtrqRgiH6atCWqNnQa892QhX9mucVQYYth5jEfUTiaPMoHoQ8XRApm1yoSSMUZTnGXwPme",
  "key26": "4gEWYsnWBj9X63qwB3FiKnemXnUMst2hu9pBxT5djRbLEEa1mKB3gLTpyW6y4VP4USqfFqSBagLs5ZTqDJjRfBns",
  "key27": "45yC47NrnidJL4bbS62QCxtStzUJwdkLMpnoyGJeJCsnDRd6FdnRvCzhdFwwh7YupajN98TYPkzn8y2eo2qAnrC8",
  "key28": "2PNKaYrpeJvXPVMP6uvqLyGUeYKfqQcrMsyYHBJHaYH9NZp3Vurk1WBEeYvrwcwRn99iBmQ2WqXWkdUt9ProXPZe",
  "key29": "2JFjD7RhazGHwzxXCjqdjBXgbYQPfUGuFBrmfYTcYhvz2NmbE4CnN2TKzQwvobBYKAALmtwqueyKD7mtAgNjdvU9",
  "key30": "2CJHzTcweEFducLT1Goama3uiTfbVRw2PfVxCfS8CjxmuZCKiH2fqVYCxDYDfLxt9rSfXKLPyE3mwjXCgcVnDnL4"
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
