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
    "2NNpevN7QWBmwjdDFoeVnoQGGEnzeQ9qDw9GWLNBKS7CgjuzmQLmd3hD2S2QsjxNHimZeRh7yrHm3wsLoZ3e16y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5VwJEy7xVNzgcmMLgeNvDfccrUkJgukXubto5gZeRbQRYuNJRXETkkbthdqPobBfehgRwoYV6hFygitkwK1wykjP",
  "key1": "5sVgqappdJMW4MrrecmSLFpFdL5Tzug6W85YHVbVG9faeXovWbXM2V7EYxv9Nqac6vJTMxEbLAtSuWMjuGVwqinM",
  "key2": "5rpyEvEnJ24YugRzMdgxFusRJjX7eKEoGVe5K67ehkQtcp7pDgDjuhQZLpSjUF6igBLXe39S9LiME2hAE3wEETKq",
  "key3": "QrJzjHvsXzCsizX8Z4TNxBEbWzTMvNnLqVkJTE9bycYAq2xCbNwgx949QfN9xJiFtYChKV2i1JQux6HajECkB8H",
  "key4": "LDnis3EQwHoYyoWdfjVZgb9EmEJRi4djvnkxry2raV6GHFnUuzcR11m38ZZSwFvGusHCo2i7PfZhJ3p3f3YRNXa",
  "key5": "63fA5NLVJmB2RnN61mGr3MRt9BKQJTERmvwXk4RRx3Cn6i1xrWSaJD9bKvh4DKtAzXA7rw6YbggXfKMvGKLe3YjH",
  "key6": "wXXoFoME6A2Xc5uf8gePdTqpkx8oPQfPxWsUR3jDKd731BsuG9f29pRAouheNda1oo1PtvuZNU9556YndQbDTdm",
  "key7": "39pMzUk5R6Ddsa8kSixzFRHthswobY3vppXPryEqTGMMy6dKhG66mXe6rFaYWF7ap2ktQ8TP8Mt9m1qWc6qaeSGM",
  "key8": "5uUgRbs9jUeTYThFYfADunhinoSytgLPkDvg4ckVy8THYxsQZYQekudsq6GsAvcFCi4yu7czz1952oscNxu6eyv3",
  "key9": "3d38L49jCs1fyKEgezt6Tafgv2S3KT8wpzSicgHK7fgyKktyah95URsi3gR7fDYWaFenhT4mhmDBtVV6qUqsu3D4",
  "key10": "2Dg2hpoR3Qk8ydGnQG68cuG9cWcR67anXUuC1DntJNFkHCCZjMsmGgyqoaaEvzj9UAWqi34mYpVyyYQpUi6sB4cX",
  "key11": "4FiJfrxb1MF9Sm7TuNVwz9RcZfqtwyYLhCKE4PC5jZSFFVZmRYGND2Tjh8DN9VkTBLcjLqBU6Q2YJhz5boEW7R1b",
  "key12": "5s9xSV3bpu46QYooLcvoFivxLbf8zUNNZp8J27DZgXxHYi5Ebd1fqyX9mHb93KnaPnRiKBdnrLhUL5gig9Ms3WYP",
  "key13": "5cUp6LGynSHvLFF8VTgTp8xL9KKy4f9svkzJXrR3nhzGuBAnMXycpco7wSHjhz3fyePAMkdWYGNbuzhmvh4yYnML",
  "key14": "2E5B5FSs14jFVARDzHuuLJ9NvT6CLJkeYffqgJFW7yyfbkcoUb54mNumknACdD7ox2ebZBbumv6KHnNdRC5KvmD1",
  "key15": "5r8j4DbnzBxKHRuU6UVhFU7ashXniqVZXRKybL8iBcAhBFpN4C8iZSTbP3hifCGvPK5uVAjeCgWiRQLuQixPmRZU",
  "key16": "2JEgFRMvgkmdeEP2KHa6xw5PHwizwNghkRhQ6ty5wvB92mPUdsUWe7w3Uq9YUbepysUxaYU71mFiZAqpWWpeeadi",
  "key17": "2wuPBXa7Yx5SkK86oKXmh7bsKFpZ7CaD426hsfjbjHzKe4hrVPD4AG5R4NzMDs79nfvHZdNZ3gQGu1rY1NFURM9E",
  "key18": "36nUvGRq75iS1aFPHKVxBFWFoMFk1dooird7Bw3GtxRYzLBbwnZPJvjjq42SE1KnFG22Ek2JZFSxGhVACAm78BZ4",
  "key19": "3wqY5MztgRfhyVGVwLNWFpXJLNuKB88uiSoMAq8MtqJUCNJ57sDCQmuMFfykwu5Ub4GC5rrhudA5TVq5yrjEd9yq",
  "key20": "41tktp6dhFSBGvTouaTjRi63Yfiath9WkFuXpNXvGyXYSKa9ztKPeA7SmsYrWCnZuREQxkRbA8Zxa5DCjTKegx9o",
  "key21": "567ipYbYrsaFWJwHPxQiyiXikkHzCbTUA9wvf4tLXZj6XYLYHjLPDbWZ7MQD7rSg6UpBfTTQf9VXf9932gg3T84b",
  "key22": "2kFun2n3q4a9iwGR1WwZC9Lag6JrAQGtjaxTmXxc3xGENEJzWGy7cZMpxtg4zv5nc16BUDp2F2377SebM1k5Qxs8",
  "key23": "3dXZ6pmer5yvYvkX4fcir4zT6aMiK3tawdaAWfxqBEU3WpRUcXaGniuBvARVZHwno93gdoSEB61nAMiwMVwJ79ux",
  "key24": "33RHeyWqEJ69VCondpxox7Y49HBKWWzYRufVv6juBWLh3ntb2mEKcHrt5tMCmUB7RUgvphB52h1Swrd4QxhGuHwx",
  "key25": "25fsxCcZyWTzgficHzpBYVpSKghEPQNMZFiJAvrdnPEKkzZfnVnNokJaugF4wYkxkUKnjcWVBDcive8p3pAMzu1m",
  "key26": "Y5yKtDyiJsVx5jTKtfZsYxiThnj9PpuyXUMbPpDyLduoRNhWc86Eew8puoTLYkwV7KT6BsHmX83qPxU4kGnbmoZ",
  "key27": "5mx8DU2Za88HET1raNZJsSkiRBYuMdoB9pcgddPYm6zyR1SXgqgu8PMGUnRJvb9JoPwoyc1V8azXeF3jdDUQR61F",
  "key28": "7obdWRioLTSQrTvpc7H7xU4xw9GRUzvbY8ThTvCz9VruQ5wMziNtM2bqgCWSNjwu4N1T31xcUvqjpvVx8amMToN",
  "key29": "Cbfm84GVd69zSXV3633wAvJg8d1rEmfsWeo9edmCARiDhCfJmL1vGC5pppGH9JzkVYe6SRC16PsnkSLzmM29qHy"
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
