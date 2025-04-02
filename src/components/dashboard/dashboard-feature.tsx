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
    "4r1rUAYRknXYJz4ZJPv9raxgkWwZsMckVzWEYkkSPhHTcQ6eqJSAiwWjMS5fmoZJFviN6urDWmAVdJaTbwXVPyJ4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2FbxUeDrbpUAD6sKAiphRAa6pMiPTXf3dJ8ErSas9rUCRYLrt3xmKVdmsoYpq37Zz58xCPTJUvVGbuXcBY4w2i7W",
  "key1": "5eWQKAftUsa2xmmjNuE2Z1ZjB6ifzDtrs175fRP5N2CMY6Nq7Cmy6dyfMhJ3cGkgQWBF8RJJT94b2Lztc8d4L2iC",
  "key2": "2RfCft1DnbrQTe957Fp7oEi15Txwjz23a1DXT9TLn4t14eRYvP4tykzBqMnv6tH8eregDSdUaSD8FJDYEay5iS16",
  "key3": "3pVPQeb5KmhMeVeDpwNVjudYZxKEbhSnM67o2iEbNQyTwzP1B6pDsatVbwndNDYiYKjfp6hYGtKuoUGDqXx4g4mT",
  "key4": "4bj5hqfEJy4LsgDZ4gvdrPbX7h2BppPZtRFaUGD9UC59oFKy9o9Hbxy3oKrLAxYdf4vGqHoEuT12Fm3HUdzkM2r3",
  "key5": "3UGLEJPafhGZppSXnELvBJXFSg3haR5qi8RZ41JBpqDfMazCpGv42GbpiJCYUdeRZbu5hGNBxLo9Qg3tAkrQes37",
  "key6": "4AiL2PKzCJ2zVXFnjU5591q3mYcxYJMSzpDtc3AWbXqRYmHqtJGXp35jBYodPPHx9vopeZPgbXbkesYN6uFpkwza",
  "key7": "3V3iFEj9tFNiwBz2k6tv4fHPzZi44X19k7qXbksCiBLiJZLEsg6Tja9r1nDYti3yeSnw2EETQd6NLGNDMkACzJ8H",
  "key8": "4PZusg4Au1WGcAvtXxXRPnwTkjMYKGKVhovNMCzXSfy4xSjtpU8TU8psyTgA8qbot2iy2rUhH3Azmjh5sRKGCrqz",
  "key9": "4aeQaMm6VtfepGMHuGNWdzwcMazzpx65Wv8xTp5yMCj4KgS3NV9WJ9bkRP3kqAckXtrZsZGcDWKTCF2euwaXyjn6",
  "key10": "4pafnLmHcoKWJ5jvCbGNkQtzN3pBDrzrzkZhTvScMQHyJ7W1kgh3nuqsQ4MbT2RUTN4SFTSktsCjuF3UvrjeJypi",
  "key11": "2PQ6k7RhiM5kLN7uwuQZFrP5cUNAqr5DWHkPFp1eJcMzepBVeyZ7mpH2NVZPRL48yoZNDB17xkwVvsP9Tkg7i9Jk",
  "key12": "5RWgJ1pJTmP36oQUjkTRsTdAZtgKxQgdN4hk3iZ9xHiQHsRcf9c2jpWcLURMXddRsJM9xHcXZxHa1EpszJovbpXj",
  "key13": "4MzHbHkQog2X2swWuFqCKqu4TfSh7RjjQWmZ78LM61Q4gyi798aDdW62y7eL2FxNqsMKLNNdAs57HnGXgPrbSxjt",
  "key14": "5FSc74up96Vpwa2dueum3WjhXctaZaDdAtFU7SkJ7dfSpWvtUJXRHZbAu8gXUHmVAqoQhZjG2HfWPwTwuNJfZcb8",
  "key15": "5rdsFregCDHtehACHtSBVdjmauQcuoPsMBzjbtG2xpJW9SmGhcWkvBUT8jZa4NQU1F7FJQ8q6q5UEVAHpnzr4kzv",
  "key16": "5HYiu9UwszLa2aQnj5R679TduMm8uop9igyPWaEhG3jhTBZkf7odDxqQmDkcNNQDrJNitooqFmDyYfX24UZr6Rto",
  "key17": "5HHUYNhPbejj3dbtHMkNuZxKucfec1PzZLetCQwfwrGGGnLoYyTT5DDXdKPPxURxaqn7oB1xfWMJ1XSA2uFcWgp7",
  "key18": "4Yg64EpYcy72QcYyh5sizZk6LXoTNpqMDuvPGG62wiaLKA2CUFoUf1FB3ZfKh9cqJYBP4z7g6wJrCus1RNrvzXv4",
  "key19": "62QZFpLjYSsAJHBZBP9V5BbcUZPi6TPcXgx6zNhHgbDxKtRKhDdkWqRBymGNax7aNpiQgd6bXYCqk3yscYfB2xFF",
  "key20": "3v1HBJjz2yoh2tbvgFvFSMkCmYChnt4YahqEQuJNCgE4qjHXoaRG7zMKiDKu19SctWousbx7aW2TW1r9Z3S87YAz",
  "key21": "4ZKq5t9752QwnkhtgUDYvgtKp58RHksCd8hyD47H9PQpvnGHGTCwS7tBbVVcx2ZAwBXGpGkUBeNQWGw5qMWjtnib",
  "key22": "3wugXv4n2WB5aQCXBF5agkoLi3tJsh9ZFMSzW1YUBQerHM4XTh9zHSYG8Z2CpAiWPFv427iQUt9uFdB2JNzKq5LN",
  "key23": "iuEhHHP893CvRYfu5gTuHo4vL2RdrvBT3Fuf9bvHxFZkEMXtePRsSbEcdxLxebsFX9fS25TK4YfipiiGb7Styzk",
  "key24": "2FCh2RdfBteWTCRKh89Z1K75dw3giFnM3WhEUr443RVQRggmZRAPZVVJMSTc7JnHwQGcw3QvSxwzrHxVKDvrextt"
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
