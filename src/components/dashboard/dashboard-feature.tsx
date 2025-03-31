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
    "3autwK5zL3mjCsUneGPRQDNLeV2DSatQU9vqJkTyqnNwSpiW5j6D7dewCyjfAScAK1VUotehqtYrmCcbXz2BpvAZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CMviLTdtkQwThTGhPczP34vCk6dpfh4nNiikaidwWgyeWdfbTEXRxeyhUa6FssSiMRHRC8QuD1Z7wUTgUMUjVh",
  "key1": "tgyxoXAnWnrp4ANHe7d2WsjLNWJcm6nEt6NNyDnJ7WsjW2EamXbJMBqUcT6hu2s9aaE3P4Udx2WVJYbxHFLubyV",
  "key2": "3kKWQZWhWdWPWTTTGbLh4pHjYvEJA9DPnvXCg6RmDi8z1pvgJqKHkMzAXaV1MAbScebYrKmtrEE9nNGTLEP5zwfH",
  "key3": "2XAr99bTAbaRwCHjEuG8AKWEwwAHTEuKcihCt4w4KcBiV1a4vPoXzwsP7uaDYQXn4yT34hY3KiaskJZ9vFXuBe23",
  "key4": "3q2SpforMdQ2XAfWvG7qaZjp8rPpwgLFFPzsvY7FYWNC8ddLEnGbXQQ3hRcFbPP7cmswQc66yeqHgMY7z7QWaZmg",
  "key5": "x5MDiVacfRaxab6ZuLTvSDSwV5Q9wqEFkLFsewpmgf38EE6vzf4damJD4GS1CsPWgYH1AKXhWFEgAr344gpwXHW",
  "key6": "2Vis1rqFvT3n1Zb2MrHks3tTEKUzyd6sna1JSLvRDNuKn6eDp9PAuFQd59hmnLiLZxoyfvghJDQb8uDGgR73Sbyp",
  "key7": "2LqFEVPzpsjxdG4x1ELDcKc38nHy6pDK6Aqqsvm7iKim93UzraSbgAJSnxYcZTQBLJBMETcp32sxxzSf7j9EYbbi",
  "key8": "57QTRxhZXNjQwMe7rWiQUi6Fn5HYbV3MUcckk4bi4Y7K7e6vao2W314J7h8JDchCbWkb6ggu9hAiGVxaY7VfseKr",
  "key9": "3mNri9Dusz6K7vnukA8s9YfSM4EzDCjtWrYsKvjsXfAa4vp9Vezoxoj3A9RMWwGHANoBocD68jEF57hZhRuBoiGs",
  "key10": "3joKGsoxs9GseNUz4iQ3xq53b1zD3P9XKszh6xYJbXsZkis4i3gsoqLzeyJdLEwNGj7v5Q37YeA4QG4TJ5kHFa6m",
  "key11": "42Sf3kGjAJ7AAfVpRgQnVFgXSXBZYKxCEqMYfGZMrZ5xnLWHTgXz1mXbfdyKMiMzhF1pSWNWPaBzfuMTjBobAwjp",
  "key12": "5HY2mx6d5r7GNKRW8dZEqV31H1Khzwj3zLcCNcV75rz3b3EXc8V6be3JnNfQSh56vnHFZDn42MchqWFY93MgbKTt",
  "key13": "5biCcW5Ad1FW1xUF583iKrdt4D8jeVX4wXLCZQWKiJL71UFrLrKj4ce1bntZJJ23v9u4tKf8vLP7B1zkLP2kdiGp",
  "key14": "2ASjwXJMjKLn4ndVxEWpgM5fbMYGCRp1Q36XL3wCvbFPjhuKEjk7G9V8d1kstKb12Dod9fxeAi2ZUdeSbRPDVDkb",
  "key15": "56Haob6wBrK2wSaVFyN1aK3bmUbDcqU3izxZWCUasEsdC53isigt2LP7koV4Z5hZk9Ek7ygsKikmHzEatkvuYZtj",
  "key16": "oyUULe2TVZYNwG5zhxvb6iPzSw8ZSvMZktTzCqBcsAiGA2khSBgsFjwxWQBnmnyzfvmJhFcT2CEfFNmgiBuWUxE",
  "key17": "4WWWSre6gBG7vWa5vXi6nXXFawv3RKemwV7uz1DrUMfXdk2JiHJwaqGcgkjoNQSqYDpZ4LLhqGHZ1Be893Wm9kUM",
  "key18": "4yVtftz5ZoLHM5ApT38dS1iv9ciiWwuJojj3HJsB8JDQES4g2CgQdWXPeaevSEMECz7b15YHXSy8JW5ZWPx7HDg2",
  "key19": "14ugA7NXz9PMvBUk2uPDq4MkBXMJDL7nsjhvSfQvBZ4DCt2kM23335Xb26PsCAxJpPP1RZtChRpqvNUr992hsEj",
  "key20": "5eAFoftCG4gucGvqFV3y1YvopRPdcZEaJ3PPzmVAMUoiqTQUqU1ngmBCEERAc8hkN41FeayqgJochY6XsiD44Lns",
  "key21": "5jTMw5VGeKKCZ4P3QqC4Y8JavpbMpPRoiHNpAhm4j5MRAUtrxJ1saZrg5dh8MQ8GQJD8G6yzndVtingHkdXBLe6C",
  "key22": "3mvBXM6yZTtjW8qfxgTiK8TEww3J9f59xqPRjnVgBZUSxGZQ6ZEtYdfvQpj92VCGk9DxSPpCefkGdQohchmDRa6A",
  "key23": "pQ5BhU9VwM3EwDvgHir1VoGjUe7ZBCN21FiCuTQLu2w2UVXtAujCHY5eNREzJfv449yK8TCqupK1mwMZZpi58vp",
  "key24": "2tzn23Wteq7jkeT6bGEHeeqyuHhR9iB9Ng1xv4uVKCLhHXFeSAG4BjQyQ6BuANGy34ZNShJxd3fkTLT6K6Be4XyS",
  "key25": "3E4cNysutaoroj1qYTMU3xHmhSq8BVwZQvSJH4NwKHsw4tYRYCL21PmtRUxPRKxA2VzZtfK9LqdAhaTBycS6ti14",
  "key26": "JMznwDV374d9ZPz97ZCCPmf2PVuUJM5XrzhnL8gn5kYauMMYwxLEZcK7FVBz8sq4qwCbPoapRHdMjXyBayJ1T5g",
  "key27": "2qHahxMPxeNSgJAEc6PTJ3tKc5L5b6XDQFXWi2NYwuZBPLC4xrwcp4sckeUD9hdMyRXiaTEZzT7C3c3gbe38vzTM",
  "key28": "Dzet9QFUB13gzg2oy3upCX9Wo3z5gSnE53hngnGVDPEL2te9psRBQxDYAr96HThbKR5dufANigQ8LccXKFoFMpJ",
  "key29": "nXtvxu6FNzND59QoXs3yNKRmmdEFvm4EiXCR1LV6doXpVjieZ7XJ6gWADsUEu9A6qHNHgEARmcrQF2wXo8cs6zg",
  "key30": "5VzcDZUmaTuDCzv3tdCuiJeGsS1z598pnaUx44HBi3znr62UWY9FUyPr2NZHFvv67ACZe5GiVvGDf2AwwdChR7MX",
  "key31": "2NZi1SG2moSDfXFniL2JX5sk6UMk2G1CEAz3Jdd2eSdEyvpkWDCcAYbxVNDGjjxKAhbU5BwVuwVzFmvcFAoouzho",
  "key32": "4bc8NY2ZZ6wxn9Cgfb1Q6NtR91S3uYNZtsBD8YvgrNcbCPSVoU35H1b2xhx7186dFEhkj5SGGVYieNrs4Z1fLpKs",
  "key33": "4wF1PmMh8CfMMSpjJbMEAYoPgK5EXb8b37VofrySB2brm9Jufb1LvosKbzboW7dVKDx7YAnnLCSU34SG6H7i75xd",
  "key34": "3RRRyfAzVH2niTD8UyqApUZigEP9nCgZqATQC9X8QoVvR8zA5Y4LHdaNx3sSSfKSbvN5N7TsqBdSXeVgZEU7xo87"
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
