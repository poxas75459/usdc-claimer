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
    "3UXqnFman4q9mx9aDG3ckUwZJvARzJf1SWsGWgLXuZBCHmYy5Lde1g6jgb8mUtJvXmdZCNHaBPm6VrQHaf2nuHEh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "45FRs26udmjUMoYQRgEJXwvpwzgj82w5YFLazKkTmGu6KkfM4nNaKHq17yBykhpkNQuZZdp1yewb4DH4J2h6fFji",
  "key1": "3iWrwmXnQ5HC3Lm1pHcSvwaGW7xCGSekyEwfqYDrJHguRzVDMCvLSeytdd3VpxhnZnSpgB88VaZ13yJvuqnkXj9D",
  "key2": "egFSxsAATJBtHsM7aYRYuat73zS6BPnNXpgrqBC25eaVa9RuKGH2boGNqZN952Us3AoCeUxKVKw3RZdqE9vmWy8",
  "key3": "2UUwJkoXYTxBR3wpjjuvmSW2kWDJrT3NaXn3HeW9T2S7W9D4MjvovTRwvLMXRnbhxRiqnFyPaiVqDTn1K7CNMKfd",
  "key4": "3CcX5wtbhBTNTpsW3fBcAiAkSg4VyzFTYdKDizugpMABfpw2YR2ybghvnas5ifnXxeB66nmxUCe4eddQpLq6L29T",
  "key5": "66tRaKVzLSSEaJitSHrdd27z2pPd912eJoe7FDguVKnE9Daqim5HMXDusJEGeMDoEnNRCB9XkopbNWUnf5iJNMhJ",
  "key6": "REidq4NWTMZcSJDXoUprBfdnjyNptspkhEmkg2rj6xvBAnmioqsKqKxRVYvRbPCXp4zhhZYAG6J6DfZ6QQzXAmD",
  "key7": "Wgcw5QMBdFHie3qAssCwWwfJHT2vRj1r7fPZS3xS9ccZqiwPtfiUmWEyk5A1oNMXexu1DMhAXDPcAyFgFAv67zE",
  "key8": "RkSCqSd125pNUrMVTwcEXSTAbk77CsPtqCguyrhLbaXxzgSXYJ7NX1hbpRUiqCbWztbn4ChCvbYobWo6EgvUMrR",
  "key9": "2b8TJBNcuEU4iM9CJPUbq3RwMAv1xdU7WkRhA9sT1ACoRvkAUrGTRzB75B8msVhZLdG2GLZmLKxgaD7e7wNBxXJG",
  "key10": "5gvw4fzKV3s1Jb1h9P1D7wMQ55VvtrUxhNGZRmTtqgiSeYtEQ54pFuXFBpiquT5RM2K57SDzhtJjpS3CQCh7C1ZR",
  "key11": "347UfuH5Qa28YEWgSKHignxXWtFoKjXhk5kYebm8rfjTiLuugXi1dEkYJCAGnUSVVUASH1rck43uUnZGAu7iFQLX",
  "key12": "2KBAEiLAWkFZeje4chznNTExawyQ3PKfJ3QtjjbNG9tdus4EjJg8qfs9PmXckk2F2Srtq6SigzgJo7Ejposx16c9",
  "key13": "4P9ZhZv7fByZXgu284fgHNrBut1mJg8vcRZsA22BFb6YFp2UbjoTkDcgiC9GVe4geFPr2g2BMYZRKQwmUzkkSzXH",
  "key14": "4WnJqoVA6m8CryTJQmCEuiu4dK9CyYy4VWEwXjvH722hdnPrirkxo31cbNfjNkNt2x9Y27Pp8LGWLjtZh5Eyh36T",
  "key15": "4mA7gJ7iCkRoojBKy7UvcdYymvQuiaYDCvsg9L2sG7hRKxyoj5GFLuwMCTUjGZ3EPbhuEq5qEQttSZNTae2Ur2B2",
  "key16": "bMZFeYkLjTiwtFV8hQaTuLTqD3BUf9RSY3pXcf9Gy2HZLQoaKrjbDAdEWDbqqoPRMuM7621FfnLop6kTJYN9jUU",
  "key17": "2Z5DA7AR7m7vkvLNPvMH9iG7S8hBPqcbK6i1qdFjXcd5HDNtdV34vA66NsFWNvYPUxbEJEhSGrqhYeQDoF7mjWwy",
  "key18": "4YVd6mihaia45wUx9vCpZDySS3c2rk7NKLoRYeUFdCWpvmR1deziHoDJq96B3ZTbQib3LQdCNKkHdnzEjPj3q8uj",
  "key19": "34yNx7BrXty3gmKr9KPrP9Qd5TJasK3UmASTjXFg61vXruxTYmSQsWurK6Q3eKWadUrSX2DtBAuZq8kcSHej39KK",
  "key20": "5pqUtkgFPQ7wCbCnzDjySNbv6G1uvyeKdAUDkYME7CzskVKpt19iuNatQVnnzV1gqfTVPQBJgfyuk2YpTNuH3nz",
  "key21": "jBxtkq6NNVXAdHLPLo11YoHDbeE71iZDs2ZfYPHScxnQYqMJ6c49QKwDew78AcXijxE6GjDBxYTRgeSKqfUn4zH",
  "key22": "3EK5fSCNJBuBfZzPNSaRuQuKaKvfrLuf8PNjE5D4fFNLRkrbEeZxb8z4Y5mNan7XFUAhPWjLxAtaT9Ei1aHPpE4C",
  "key23": "4DkVtcXYvrGtoW4a3agbQmmGAJMj4NBVXwK2VZaVaJBrQ7Pyb48vgTN7wvvkvNBdyWyssaBF3w4zefPJNHz9JoyJ",
  "key24": "4Qy9MeZtyqVCtQMy9ME52awsEPeWKKNWBJ6LhpcTfKpgbzkgAQPAjBZ8JNu75kxW5F7N9YrWzMyNgMpotemvDtwb",
  "key25": "243YeNSi8JBdE5nVXTbJhAxKfa2bTG1ypBMaBnYPsXBrpARTihCpHDyjh4whyZB8S8ZygfWz9uFXMma8J6tDkkfJ",
  "key26": "3HQU7aRwj6pKFxYTK25AFkVDx5Aik3tU6fa3oYEtneQXW98ykvdJq2rXdBBidkK1M2uqayqz5qU9h5xFiVuaYmBe",
  "key27": "2wdYygiRqQhiFoEVbdfgr4MA891wz2YaR96Gze5kHmrZzmSLShB2u8ckMUzv7UQnVqmL8G6Z7TW1xmjShLZFDKQh",
  "key28": "294EYjTbt16waRsTdRkKXXMB6oURPELdLawF5r4Je2Nsj1iSkpjtognN72TTNmmdAGABBkoDPN493ka9eQP1gusk",
  "key29": "4Qfpawi1Ejm9mWoLqnvtcQnff1FHrF6QufyRAUFnX7QpqeFipXqn6eiaQ2RHAYW7C4bG7ZdxK7yberGQkoWoYAVu",
  "key30": "2p6pJNrrWxmoewbcGJAepnyNA8GTYULdrwPLwACGdM8QeZ9ZG2hdppfBMiiwuELCfeCoF3XXsKLrRr3ToDMRsZqH",
  "key31": "3aULrhNXRRxaWyL8kbCvVWnFsq2u4EALinMBwcCjZ1VomcZZ1g6YVg43TBc4JKuNgzMUt33k5ReyU8oeKanY4xkZ",
  "key32": "W2Y918EzZVKj6q3KyuoKPKVCCqweNhcdxq12NfQrHhAitqjNsRcZXPuYv5ZS11eTFwti2PGP4uFB3698pvRawAq",
  "key33": "3PpXUy8JrAkCDEoH6f3teEvnt3k1ip6H8A9Va8r1iFTUBgqxoZHfubWqGD4UvPBQ2i4ypsGZvxECCZk69mZT4Wex",
  "key34": "5K4TYHe3hH178Nixo8wmKw5tHCX3SKddSHDBVydWNCjZVDshUHQ4j7t88ZcB1ZcVtVf94W8csxsURdaZtBmmToJh",
  "key35": "2pBVDhkSmXAFiAiC4jWTG1WCck5krod42eWiJJXDKaJivPdPoM6PchcxPkvuNJwfpFFDkqSrqQswhDKfSndhwneQ"
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
