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
    "T3oy4gMzKWV1CETCAAKgSZ8KLvBh4hF2FHQxxXwZ8NtjjV1YU4nHzkwFE6uxeeLhx8Pqc8DArEKDteyKYnHneCz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ygEVHZaK1u2NsBgSsGFxKDx7xPFqWX4iUiAMtEdEQ13KZfvfWrBJoZJUgY2qwDCzXoZZp5mZfj8yjVKi8P5bxjW",
  "key1": "3unYGsByXnsZRn7cEYNva3XhPzFCQcSWWGt3Vh2ebtDhtAgTt9Sg24ZBdokBGJmBzkKdbd1FQWJ62FfbopDFnRR9",
  "key2": "52PqTiCkV8KrCF48KW5SE1FFDi2pm7fKywcBfwzJtgZ6TLK8mEtCdsLXLMJUmwMS94MsiABmQiiPWZf4AhB1NwAy",
  "key3": "43PptHjpNFgixpDA3QpbUeD3VSqm7NDsQ51CsZmXcMQReNpW8X4zkLLikvUaF5ecVC3G7dk2j4douXSyF7kAcquZ",
  "key4": "217EDBMQkZNM9ZRGKyHtdHXDbB4ahEQyRQt4vBY75stBHGtn2RH6uz384DCW59nkyJE6dGLUUGD97R1uQQyyaPiZ",
  "key5": "4i8w1st1D9Wg92CwuDqsYzhUwubho5mTP3xZHBaCwGifZVqDnaUYtmrMegJBtTiDCLYEkiJJ1ZoyXKss3eWdSnMm",
  "key6": "3JMWBNrsZqpEy8fYjzBxyc3sq1omyNkogVQNSMYqNbStUECTRjFGYt5zFgj3dY8PZtNCPnwayq1sFmtay5h2dSaY",
  "key7": "4XPTnhaMD4hZAFzyEMojd3mYz1psgXZ7EAZQLykHPpkAhC7k4P1Xs6YRoKvWERLa5LN4YEjb7hvJSjvEvVu6GNnb",
  "key8": "4ZYQZV7XMr6Ma6fSRT4AKbBTCZKCERk69qfmNNKb24QcpqmvaoQ5i3pb3QhuFF3uPZnEaiG73nPF7JzLiWVT683Z",
  "key9": "3kHvP29g5z3DUS4hLxxwLqSHejef5zQtV9tgBARbifwV9LLijAAitQVHG8GhLhpLqGcRyeQDkzGvaM2R8aKNZMZn",
  "key10": "2zCj4XM1uBFnw6AbCaWJiv92zZzWzZbxdJ3ffbCoG5jaEN5gFmahgTufH82cuE5RmMWTDDkqF6jC5M7uieg43k8o",
  "key11": "5QeYvseR1WTTVubXQtubYBe9A7Y5nCoQ5i3VRmwtHs41jFmzkL2KPVc93JZjViRH5pSQfBDXri47qXA9TcNcPANn",
  "key12": "TErb9Rz9THjmHKrZ5yosdabhfRd3dgFTNZFdBm9FgHEsELP19vxBuz72kFpuuHfFCC3SLkUWAtbUbCNV4hnHtUw",
  "key13": "2n6yTGBadbjgy7H8axy9dEQaZm1ExcJn3dAw9xNcpV1DdCiiXwbjXtyVNh73Dzja1gvbrchocSbWPwm3SUDhwAAN",
  "key14": "bCYGyhgJkKkHsa4jXwSUwSdJxKi6aTna3bBFmqDQ5Ra7TenBC3Auqp8uK4Q5MdZtkskUNg92LQD6zhqPaveHMab",
  "key15": "5tzgMB4St92wDnengP2Pzua2VTRL4rLQqteQPoS1YmFSYrjeGiSsmDhGiJ3eYXx9gu26rh623MvFPryFnAdTeTzT",
  "key16": "3ZuDA1FC7QTAsKwTB5YXoLmH7tPro6KQ8jo29bCmZZJ4LfTGdw95AfmthYXVeGnwniSLJvw43nQdaFhU1BAnim7k",
  "key17": "2vhxAE1j1otQAxExrgzrwo9eBiNHn9Pfz9oS8u6LXPWRTHjB2DSiThzDHn2mYpXNJJwsRhz726GZ3CZ8bxtkuM3G",
  "key18": "2cfmZ4kP8kN9McKr41B37E611mWRNWxLgTaFkbLFuz9WRVgDuTGmW7FfNtRwejw9RhL5vU8UVKgs9ZLnJ1ZDpDzm",
  "key19": "2YSES1bTjdi6B6jWN3efeeZMakpxbSo9SwmCXaefS4HKfD7din5cfKUE7FgXARQqZpsEkfdu7H2GXtWx3F4QUyBM",
  "key20": "UiKGo1K9FfniqZWG9iMpBfHysefimE4TCjvpW9GCj5HcRAqLNKnvXvPASRYsAQkQAgWkt1sNhMKkmf9a2X4kWRC",
  "key21": "3wVPT3Zj4u6Wqc7jZc3b1ooXtWGi1LMAtQUnCF6R2u4wcyMgbmFVVFi1GfFgh49K7B8HRyvmcqAHGAmo547gKLHR",
  "key22": "3niffFnHkXv6XnUeETF8JEgimMHXhDzTFzDPG2UhqbYY8czTCiNweJtRJcWyeEFanp1KdAVMRohmjy338FYurkYq",
  "key23": "35zqNLT1wpSTRTYGmGXALSTaL52mdLaifhvZpbwAR1ZVMkHcQBpGDns5RX2UiNMAAeVCNVnaAp2NSJxPzWZi5W9L",
  "key24": "3GcLJD8jG2ZmN7xvqhQNVqxACGob3WnF1neUChQJQ6bDrsvPEUeKoLFEHjCMFx94ncJAjMDopwKE4CVABL4cgJHA",
  "key25": "4tHdbC6fdcR7gRYvcRiYChYtQ7M4Gzg9Vn8ihwmxvzRFtSjnVJAjXhxyu5GyWR7xCaoo8GeSM749bMm2Yk9yh1zS",
  "key26": "4eJrL838XMooJGmDf38774WG9KD8yNSE9Y1yrF4QUXmsKhjLb7VAEhWHM1B3pEf7JPYBuB6cCa3uuR4YNBnbdSay",
  "key27": "2qSDXX8zonEPpqLUvXQbAZjTNFR1bPgz33xKZfqDeoFna5xbQt5uYroSfMTLPvMa82StR5jNU4kr5BMopPsVuUhC",
  "key28": "4csoZcJpXZzUSu8mdU91iLSTptrRPTajF7czRhsAyrWxWXprqTKM1DtS6h3vxz9VvV8jtF5BMrwewHbVzewx9zQE",
  "key29": "3wuAGJG5vSjKgQ7aK3PdrNqWkqg8tHQZWwwdUG58gHTKoDrKqFdBLAVTXQC67X8znUoxopCLhRLv1LqCA9Q5StVi"
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
