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
    "3JAreCx489NcwLryw9k6cZKFpo19K5iw7GhoexFzjLdnmNcYGCxfa2fvS1YjuRKZkrDcUAaZMHDtjgMnvgjmp9xh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53b12nwbFU44xosFEsGHeWnwbHgWUzmXkQdq67XKZ7N8iDM49cyv8drFrt29azYUUKLwvKkqFr4ZQoCqCUS7D539",
  "key1": "4i3qiK326HUmEu1vEpi2Vbs9ZwGJvVmim2QEgc7xNTt9wKACNjiaLQDgqAJxTpFdMj6DTH3w2mGHTBXBmjge26mw",
  "key2": "4DhjC4jhkExATNGjv7nL4NjQh4dyKZB1pm3o5mMTqu3ZJSQywrfD1dg3wThFLmCihsgPYAo72ExikBoDCUN4VHZo",
  "key3": "4SfeLbTqknM2u33Ya8NSMzAKXFA5TPEyenzi5ZWkfC1WrPQJ37HKGc9qDJTvkdXtAwijXjtgfQcgRwff5Lskbuok",
  "key4": "3xevcRWBGPWvWincTxxtDWug6gbhj2booNopotswj13iMm2uZA8CJmxpy59MxTHkywJFhGHA1RXMtS7PD5xZ2dwe",
  "key5": "5XuY1y43a254cnSvjEdP1JGBCCswddtB7Z5Re4esQEYFxR66fjGPArZxXTKzVh5R62snpZWUzcPXemk7PMDrdmFx",
  "key6": "56dsQjmx8MUUGfxgR5UtrRB33dBZY5fqwpXv7MdV8tEBnxehshi8hxr9MK4YEycha1L5trs3JoUEYxDSF5JMSXTV",
  "key7": "Dyr5vYxU5ezbKTMhvcpg5FZAAA8QfGj83FioePeMB6Wdsnx2cRKnyW4JDnoceYTGusyfMXv8Je5zeBnJMnfuht3",
  "key8": "QP6y3XUhfAZ8dUM41NiZqhxgZn5nAGhLQDBbn1K4j9keW8hLxFHD5ePjheycPsLKfNJm9xoYwSN1EbWzUe7BCMT",
  "key9": "2rtQup3t6i2j2SCsb7n55qhbDBgadv9zw2toi4YAUhCXW6A9B6DPVFgUP2EZanHra14cjzLUPr4zbtd8RJTkaL4F",
  "key10": "4ecov4sTmNCeNp5RX5ZVrtUmNaTUDDVVtiEPgy3KNwDVmbdHSdCFvXaSX3tKUVuZi5euXNRLhF2erGMW5SRiTkqZ",
  "key11": "F17PJVvWcwa57AT4VHoHrR3eNiNJEM2zfqduHeA6coJip3pQHi2L9qsr9qCeDWqEqgAu3aFpYqHkK9jDcEb5B6p",
  "key12": "4PFL89QP8uJcBTChUd3cRoNuiiJf8hxv94eFZMsGvKQxytTcHKYixvMzdgZCauFAeRNTwAqhV6BE7PG4KwUkkr5s",
  "key13": "5zVXyZ3rL3Hvemh8mpx1FiqLBgYEKvZU2SF4hMsUETJJFCBoaj3VAAcNh9f4CVxBAcA6XymT3384gxfgrGc15sj2",
  "key14": "4TikHRUWupCnzohBXcFeHXC1HZQC45PcbhLq5DcW5pAiL2ym1MC9oR1EgXu8sXcukd9DZFFXCFH3PL5mVduJVU94",
  "key15": "44epUw6DZnX7jS63xAW8UmtEe3XUTbviBB3SUFXXrUJazNaCX7RRzGj98fWrRC6jEidcfjVhYCND9oTsAkeKU5af",
  "key16": "479fu5osuDXcTnBQpxne25bcj139Ymm8DdLNw6EfdM2mQgGgJsB13qNfmm4tnsnrY8zMBjW8AqgRrgyFdzAgVQuE",
  "key17": "4THP4uE8VHGGr7DXdASpfe18aSqLqrJKYpd79ZK1BY1VBQHFt2jiisy4RrWYjbVJZiZfsWGhYtRZ5bAy7FP5R4os",
  "key18": "4x1XRn2DMTy1Vq88YYkcnMQxQUkLfsHguz1RPcrS48PY4MuQapKepGjjDB3PuZBuWog883AXgTQp6UmCZndQHC3j",
  "key19": "4jzvzXxrmkweJGniGRWSDSkAWsJsJmuaC4K9u3hA6tSaMMu7uY445dqTmGjQR3drzGMztrsjkV82iY9TUSUeBNVU",
  "key20": "4G5nvJtsh6o1ivHD8CsE16rB5UXkGmMZm4vSAzthSHUjxJmrqnWoZ9xMXzzNveyYFBRquUNphFG7R3HkQ4F7gJer",
  "key21": "618GXt7MUGfJmKkiLrZzjhz5UMSj3vBMte3KQyiNBnBYyHNvMU4GX71Uzo8PbHhLsaZDP6dpMQhBosQh5n15cg1T",
  "key22": "3f2cdgNSngA7uX4GCTTyxCuhFCVksZd32SFrHxvLQwjh1SENpd13xFNVLmEzML6UEFoVJEzAVEonJW9QGNS5NaH",
  "key23": "3EVQ2w6ph9warP4KPD7YQGiKfFywp4kBUKd8T7xseV9iRhcMgihrohcEyAHBtM487bEkF9SgikhTBpcunYYyYKqv",
  "key24": "2DpBTZea2oUhQ4Gvr6HQL6KTTJ7ytLeZBrn1qGKzSxmjXGY8C6d487nAsNhgewySw6s7SeextdjHWQRosfxRtUJF",
  "key25": "81u6FG3eythB5NivtzQUPpsvCuGXw3bH67fpBup8C3xY52zMTiwkLHQYh1KVXJLoBayBTaPS1eTnsz9LCx75NDp",
  "key26": "2U81HWBF86SpiskYd4JAFySNHMxFSEC9QXJT9NUWyFmBScZwmYGHiDS1WmEJUA5YAvzyui4qLNwfK9BYBZGmux2U",
  "key27": "yVHaWe5oi8Bm4ACo4KjnXFLQZE2goCHbrf2H6hno8BvaJ45bCjADhHtDGDz9RvAfiiYJNJ3GQbM1Jd3VVeLKVvm",
  "key28": "4FKe42ZLSZSNGa2Q9zZE1nAzHGkZ4h8eh9Rhi7Yq5JjTf77qXBhSKN2VNQxCb3Ey4qxP7DMsith9PXRzCPvSgWBq",
  "key29": "3VHQxKxjneXBZAj8MkxmKwNokeWpAYpWx9h1rpumK2YzCKd8GCf91t87miUFvLuQ958HDaLStCchEj8B6tBaeXvy",
  "key30": "JpcnrhvcEzxqeKqoaRMCcrv3hxCfNkN4Gc2V2Q5CMX8DfU7Cr2XDp7AJJ1RRnbYREQfjAEwV1o8quhUrMozxfu8"
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
