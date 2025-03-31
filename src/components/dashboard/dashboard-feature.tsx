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
    "4mWst163TpdXMYQAeay92QDLhLqEP2PyAYZa8pzcNz2gsLcuGeoNdCm6gb5h8rQHPa4Rwx1czgPkk7fZwyhmEZ9e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4caXLe2tSHDPCgvRUvnTYdQ4XV9LoJSXMQa6L8rvbnukBCLRiXwf8f8cDjkwVG4GX6mDAcNmyoRb1VRZpZqz5KyK",
  "key1": "4dZSNXXEckNELtpF6jginqw4RnRLqWHwEbusfsekveKLZVVPnJxUD9QqjeVww3qthfnwnuNrhATxjhimYP9oiEAV",
  "key2": "3LCGEex1hfbYd3FeBRkVVARQifR5tP9zd3TA9dqZpbmnNeU2pGm48FKkqYU3V86oJTJu9zCYYfS5ojuhjNtvpFHH",
  "key3": "4sUXCU7gMyyS1PxcxuHWCFmaeUXr15xJHmZvmcXJWPrzz6njtTc4iWEvyuesZArFArCfvNA4wJ5y9aV5BUm7bEV4",
  "key4": "2MnskTbWHPsFRL6DLzWmchwPDAqine5Z7iEA3qKBDZ185aKdGGxk93KR6VvBZnygXuEHgUqTELure72WJ5UZXr3F",
  "key5": "2ZcEmhHW8HdvEw3FWufaK3z5G1neC9rd9h55fqjhGtVYXZNPA8jXfj9QM2z2yPqJmfERgZwJHv9TgyHkiNkMWtt9",
  "key6": "3YsoNJLMyJ9ePiimDFshQ3N6GjBYw5Fxcc7hdHGUj9UAp5M2rESHdHPehpxcqdcxVE5TWmd1nVqeu9s2J3S2qqRW",
  "key7": "4eX7NveZ481rejx9xsNY7Dt5uRdUrSs3tCJbAS7mg5Yasq8RJRF5zEnwoNjtKFeA9GZGTYEhyvNU5PB9wanuY2BJ",
  "key8": "3nZJXi8ZqnFCVnXYCPdZMD57vgx9nxry1BmVDhpuC5a1fdWhaktpjAGkpFkL7CYYDLfRoLBkhuhT2wji1btWGxEP",
  "key9": "64yKNZAhV4xePYT4qfpT3QVm6mX8mrsvihJkL3F7tTnApMcFKQvMpesbinrFJoFAyKpHtD62yaf3MdZEdk7qGjy9",
  "key10": "8wydwvNVM6J2iXBn1tCZZJ88Vz6K4nCxyb5VRwLCPmJvZZBAt7gvP5kPmAU9RPMx5ePpaNiqE76X4MUBZ7eJQdE",
  "key11": "2nGed4CB7zv4djMdExvvdTDiuQQupwoTifTnUxuADHb6ouyqMjaxpQ4rKHRJhYg2JEraXUfdzDJTC6ogiozUZA5R",
  "key12": "mevgr2mL6HTkKQ4kJEiCoJyn1KRhdAri2cJJ6SFF8UsD888FvXfpnFKht9feYw1StBcVhcNfZNfpwkzvBpjcQLu",
  "key13": "6Q7gAUExvU2wi2fD5mZz3ax8tEpiLQfK13gY8LX7dyQCGjVc5t8NNLtYFV4q8NdPVuHS9BKMxCyFiGzZRCJE4L4",
  "key14": "48Kq7MiagA8DKKhFMdrttziq688YUL4NiDb2ius2upxNpUu2CddJE2w5jQVAbgcUUuRoLGZAxtPSSiBtYcXx7gSR",
  "key15": "4NssAsgeyfg6yBHewdtAkHNJ6Zo75manXtdgL3RUN16wPjVxrYgiYe9HN9gaPqH9ZSBcTHgajmELuXt1YWnhJNNS",
  "key16": "4bBSGNzizqNjEw5iE3C7Y2h1ykvqbwshLrN5nng9bBFodYg3hyGk5MU9McwBsHqSibkGzTVzBUecaCAvAy3NV9ed",
  "key17": "4p5GJ1YHixeRRH9VErkSr1z48YUH8y6SWd8wNTAfCHoFQ5LAtMRAqgUtnLCMA1WRe8Vsy3WVRctLb4JgdcbDuAxh",
  "key18": "2UBSsWqjtdinab5Vbpt82Mc49ytKM49Q1Xmv8ujk41xjxjSisW8JEzUBnK8qHgHysLNniBL5reBpkNBr6JiPwTbY",
  "key19": "5RVEQjv9KN8q2mqeoRGXYi9Kt6iWtYFcJkwbMZanqovYXBAquYyrzYjaE5XxLtxPmcZUW9EoqiPcJpdwH6mDjz8a",
  "key20": "4u7TXcj8xrEGPKEYBRYXVGMg9rPYXumsMzfbTL3HPKHZTvQxHLheFCqNp2xNyyLXTGAdxJDr5BUor6qATDZ4r47G",
  "key21": "3ynFUG9vBfBaspwA3KQA1JSuAotXfx7QCHhC66jZVkZasBfEgYTTtWhKH9eJBVFcj6V8Se55DY7xidt7AP3z3hJ4",
  "key22": "2L6Au4XMS2cbExVCbJbjQvP6U4rA4bT2SZycjJGuDaisPuT36Vr7asGdDhiHBsLfhUyWL3NyyCiujbjCMJnumsgD",
  "key23": "5keakNYtjjQxp6BTdbRHkicyvP43i68v7cpkzjYgsifXuuNmBTwxUGsYy9iDo1iaFacQ8VdUQj8zypXhgBH6RGmY",
  "key24": "5rsinKkjsUKM4PHJecbVq2LtjxLwEufQ5H4jkNbyyZkhQfmCYrYNyeVPwWGxQR2AEpLRGLAdJYPWdMWeSvj2F3LC",
  "key25": "2qP4TWJKU7qZ2ZS2e6XxqBZhgTrdgAoZBTjiRuPoeoyNHh6yTB1UUoMxXX4gWeiw3YWmUstAUx8XZhBvDcsbsLqo",
  "key26": "5kSF822BZiGHSeCM4V4evf4L7Sz6LjVpouYYDrD6ss7zZbeG1796tBab8e8WErekq8mhy9unfTrbNxmE3jWFXEXb",
  "key27": "2G4TAxK34WD16xmfBxtofWGNusFisdE8qVn1Mz9GTzuswUviMG7cTBXMXzruRgUvwQ5WXC7V1T4MQ3uwDAGa9wgS",
  "key28": "3yJavrDdzepvmLNMyGV8jCHtrHvYRg87usbeCoPAaNaUgxRb6uQBxTGP9H72w5Bn3AwmzyVEHyxscRu6D8P29N5F",
  "key29": "FLWGGZyWkesGoUNsMV5BpQ7XZ2PhRU86S4FQEQjQ1GQza1hWwvamFMAr7HAoepUUY8kcfx1PYzaEsqw9YiMnRTR",
  "key30": "5SzXXFduCLYpoDVQuNWhZKzDGNugzYeH4ryMMLgFu5Fm7Vvr5EQoAUSMTsWP9b7DX76s3znbaEdViNfiQmv81xA1"
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
