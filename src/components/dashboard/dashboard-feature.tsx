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
    "qiLCpsCxySnaojZR7QnG4NKqLecMtRwRWHQz6JqSgnpkqRBKngmtffiaA39iUqop2hDaDsrh3t7wGtGiYdZ6626"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5BZyBNkgE22wefQg9YY3raPFuW9N9GN1gQSP1KHspNCkySw7ua6rSYYq7fJyiFX561tANFpLpEv3VAkSqBMZRNdd",
  "key1": "tKJs5S3aZCM7AFQDbTG5SQqSiQTzMS1xQ9HYSacjYLwX34pa2nZDfzdZ7F7Eb3a9P9L8GFRtKpM4YJCwj23UNMs",
  "key2": "3kz4PQAyWADbH9yNapdsDQGJdbSqzYVKzrZdSGeC2xv6JoNvg1LaC2Na3XwjqmQVcjJwh9L8dLNnr4gbKn65qSmQ",
  "key3": "3NhpFF4tgit3tbeRPFNr3B45EHknfASZBt1dsb2fPjeLcU76twwaKPykenia31Hz1nz5ZcM4h1B1TaU925w9TqTt",
  "key4": "5JEBwx8imHezAZepjGMs9p34PZCfqaaUzfkuaKvB6MMfH9yCsp17AjHigyXf6EC4W8bhYGKq1N8XfYGJ5sGt9xKm",
  "key5": "5gnpFLh3dwwah9VUND8GE7FQcKh7fjQmp7FoLFpUuKUAvSAuQv9euD5RafURhSmAT2asNx7NFWRhXE33FbBXj15Q",
  "key6": "2nc6Z3ZxHvb4Wcb4JKBtt2GKbrV1hCpTSJ62idXZEQ1wFcuv8bTBjy8281XtWZtRFpLh2uDbCxxrAqU9kvvG7Hdq",
  "key7": "5zvyk1pguDFo9wPxGgmWf4YSuBBtX1gF6nc8EjJR9nzky9SxdioqrJLWBE6TAUcZMhexegMMHZhLv1KVV7Rn7n7c",
  "key8": "2hxEUgA53ftqeY1Y2CyMFo8bWYcs12xCzMuZCy6kcH8eXydQzs81hpeD3Fuxd1ZnVY4r2FCRmgRLav7aXYiJoYys",
  "key9": "2CTnpBQ6cgLYopiDm8qK8KV4ZNX53V3iCoeak9L2cQfp71U88bGU4R7buYFViT2PebSrz3w6CP5opiLyJynFVH5h",
  "key10": "3WqFfU6pzzPSpJB5d8hzZbQT1Zo8YW9rbVcrvNrro7wKarGxYWQwbvU5pK8uGbKRJxQQxHgk7zrpaf4v8urxZHUd",
  "key11": "hF7K5RJr3hxNESXTeJT7Tm4SHoiWmzVRtaBG3MfRSANuP2tq7aNGE38mgesemTSQmQQnFPLyeXGAzLgdGt3GjBt",
  "key12": "6169BAGmRGxbYDjET8VszERR9eP8vsye2d71nrhZYNdGn2swmFJieSAozAF8YYBbHzyaWYTyJYkRxJVNh6FJeJ5S",
  "key13": "DypDChNUMCVmPLu5GYe5ULFfJrbWVqHDKtXvVwdbZFnvfANV9cA9QfN994d2ThFrXGFHumDRYcn79CTfsY8zLU2",
  "key14": "vZZGZSwdpU3jm3D78scqRYPNv8LHpDb211HeTTxV28YA8HrARN2vjPqAXyPABjvwfGLrcZc5VeoLNg16jaA6Xyy",
  "key15": "zUQCtWwuwbNmEcja1MKJ24JZRFkXzRVtbVQ5E5kjyLzSmbvyoUMCWNfGMTz4ExLGBBVk9fcfkBgZbFGCEd39k6a",
  "key16": "3CVP9xE4Nfoi3oYtfDzFp8BUuFTkiRubQspnrY4f3H3r81Y9M7KTC7qRnAZsLqrzSR9MNFEDYXHHKdU5NUgqTz19",
  "key17": "5A32bhBzkwDhmgCCfADtUZFyqNseXJAjA85yJCQa8V7rJyLz5bwUHkodoa3umvWQEcbr943oP8jWLeeRFjVQDxS4",
  "key18": "65vTGEuYYNdc1ULLLUpsbxZnzTXigPRWsdUjGhqg9jjuZau6K22td2H6rkCVebE8f379zEqnKyopzw1u664R8sHG",
  "key19": "KVS4WNcFHGi1ffhg3Somd2JRu9L4diumhbeQjCEmwzrAnhARKZkhK9nqApVubGmJNLNMVGnx8KP8mPhfGQsRDJM",
  "key20": "36JxmvqTQiMdqkoadr7k8tuLrHTwbCHiG84Xusm9JvCnFCyqDbhoRk3dUdRuXNmNX6tATknfUvuwBgvcNK6o91x",
  "key21": "4HaNxbTECZHE6W4HrZC8CVT6g6hWYjU5uraWoHwSowvAaKHpcz5wy9SoEz6cWQEojQA9H52VUgWuSCReXhAUzAoP",
  "key22": "2PypoKE8NWxF7cj19uGXzya8nQ5WwSeS3nTm6hotu3NEYunECXb5Z76w148HPx7K6JLKgzHaieQLNU2yGSofMYeM",
  "key23": "4NQkCR4odDSMJF5vWPvAsVjLmY5PdbqiBr5z8S4mceZTzWm3v7HGY9EVgnppx6nADeP5ckh1FhB9ivL19gxtddMy",
  "key24": "4SRknAfjdHwfUNkDUXSDYDK7X3hgDLg5a1DD255XJCmuXpW8n15ASQU4KPnyu2zPmgcui7Ndrtu6ZF4NkN2CC96q",
  "key25": "2kBkefTU2wmSqEQpPEctVjh8FKapwTjB9iSvGHW3qaBmtr7AGA2gTtp2VkaLkJBmdLqKwAJhmfJtrhQw2BTN7KHX",
  "key26": "4uAXgx9K5mrQcpE2geJ9VgnAi5aEeakPrwzy9vn91AZraLwhWAPe8Q33tKCPhjpCNhaEjLYPMpktXL2tVLpfjn3f",
  "key27": "4oNKxRJ5qCHDhPfV2qbJxEgTUmeUhPFRGxSDFiLmYiXfUh8Rsgyn3LJQmNgXwnjRKkS7jx3Ch9fGjAE2VAymrS4p",
  "key28": "65E4W94m2ics2Cu9ZCFzWzZ9ht1KScAJ4x1H6PMW9ko2nmq3cY1ahnSvTjwWccqqeY3TPNMNvQCNFHn6XdDUWwWC",
  "key29": "sBXqwzjd3bz3ht21xAGoctXtzQpYBwvqPuziqzkAoAwM1GAhxu22HPmQBg3RYEhUfTq1wPii5CUEZmfRfXPhWa4"
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
