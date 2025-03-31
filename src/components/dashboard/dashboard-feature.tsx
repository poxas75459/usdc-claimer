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
    "61cPhsFuNWbmUrDsWNCkqq7dtCNAexjrYMb48PJYaEZnR2NuiHDUdM5v3kNT5CoYJHxx3TRWKSY7VLaXTAWNzBfc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "WHQQsckKsMzH8tNWBEGqvxmvZYyRuBApLuobRgRDNFxTsutZ9yR9Po4PTvFqLrqftaG3X41GrkwvXAAXaU7tFr2",
  "key1": "5SwtryKQ7YJiD5DSEZCXe8JMb7gMa1ExmB3VkMHkZ9A87zeys47tP6h7KkLTdprouz9GeXHbK9xGW5E4HM9zBZ8V",
  "key2": "deLh9vKhSDCz5VCM57Rt5KXGx6PTXSS9mecmmKT55aaWgkJ3nj8hdjjJhvMqAhsP9zbbFZdQPTpaBuVHziRxgdn",
  "key3": "2cJ97MizQEseiB4BPgVsNDw7JrioGNx1BxMTXsUWZrEALGN6vauUZDdiAeFrmazZJr1TJa2kTaugnrYddgZJepY6",
  "key4": "LzyVVgCFH3FzAsMapv4MUKEy6eeCj62UB8xPzgnBaNgRqqXozQqZogRLcjSnUZJA2NxzzBd4snBiktPZNnLiwNh",
  "key5": "4wuaARxhpMWynoY8r98xERVJ5D1G1xv8zDcuhu3C3Qg1NmpicNqMN7U5VZLj655UjaUb4cNu8awTUmc7XvzSk2i1",
  "key6": "4Yu2STq59KncGruGYYCswb1mWUaGjtSN2grE8SKoARmZGLKnnKeKPFq3siVjt3PaJ7QVHYoxmaCpkcC6S9g7Nwiu",
  "key7": "yZD3DxwTutvnoXTraggY3eQJtnqNMUSMnS34D1QtNQpLaNortRb4wHE8bn6QnFyz4gTt9X7srw1o7AgaWkKAD2j",
  "key8": "3LqcXD2ueRqGMzZ4RMk1TW8LB9gTg99zxgq5qECuN7VXdWmmakWQzsakHFWJUh9zbyQUjANzXVWjdQp4YYRJDzbZ",
  "key9": "6Tsob2eysxJunhuPp6vDAVvC1H4nUBVjj35rLyPyieJuqWem2qitgyTBrmu1MM6SSQgFz1DPFG5zGgk9QiaFPWB",
  "key10": "4764ggnvDpgfogDW28g6YUVBKbiS66jZLWQVvKxs8vmmsrudrL9RSpDLUUuNSzFuChyPbjin9M2MxMD9qwSqgMCc",
  "key11": "2BXqEpNUxdeTZa9FiocV59838a7KX1xUxuB2pph2XXA9hghzK54Zs85apT8NxvBWKptyTkeVREgYpia513ViJQ9W",
  "key12": "moiEzRXKBZdxRpmxpFJRC1VE41cmdWybfsmv3w7JeDeLdL7RvE81hfn3RSJV2HZS6MW465QLYPz4PoDt2PMrGxr",
  "key13": "5JNXBtqytLWtJh5S7wEnM8jrfu3jXxJ17LPpm7LYnNfj6M6tDfNhK3P2FSq4ryoRsSRNfqDku3uF1u4H6mxtq8d3",
  "key14": "53qoDcRAxLoKZv2jyXYmz39JGovmRbutUZjnqrTEQLYmvs6umDrpRskbvBwdgW2kzkD88RMjyHMRoQ8DoCSuoQro",
  "key15": "3ofJrvBnUaPkWXjey1FksLpPEqh2NZY1sni5DkygDaAijdmRCZ89xuZgQqitFZCr8kGGDV5Fc38R2SRMfsAC15MZ",
  "key16": "2dzZtQ3bJnC6o4qAZsHkCQrLmvt2pC4jkak4n1NFv6m3i6qx6mK5evtkqcyhdvhcARBzmtEnRFrvRbJeppxxwoND",
  "key17": "238MfZ9rBB2TN8W3ZdMyWLi4TLhQGfjGyei9MkjaPCFBpkAR3F1AP35b81nHk9ftP3q478WVgN8FSXo6jfZFqXEW",
  "key18": "5yG32cFPLxCLdZ7TQQE4KZDF2wwRVLCpX1TTNTYYzb7upVZiCJabpmiSaDyF9LHDBkGZWkdmpvCnrbXbXXe7aWU3",
  "key19": "4NugK2gVwsdrZXtZmRv2z664g6dJfnrsjDmuGwQdGpmMtnCNJRQWRdHNxxBC3ysMHphXX2fqcznQmj7r8osPHUG6",
  "key20": "wDuE6Qef4Ey5iYUDGogDEQmYeZGepK2Fm6YSAGLkwVQiWSCMGxTnfHLUaVqriCjYXEJUaBnFEKXaNjGX6pQy8LU",
  "key21": "5FoiXMbe9K4GeNdSY9MmLzadpVhQwBKKT5oroqYjPWfHUhoy5SexV6WucS9Y6MwHBkNrshziiJ8rQ1WHjvXbQoGt",
  "key22": "ABHgT9u9bmnXYx3vNoMsCUfBdGESSfMHK7kg8v7VXj8JaZFFLcFFQnLLD6cwr7cgH3Q1got739gkL5xqZENTjDX",
  "key23": "47iPHMn6Tsz8PJKyQM3Q735bVvhgvS4Qd5ELMd7XB5DUKyKPPsqAEFpcsuLQA9pXgJJ1qRRfoJW1ZHVkhviWMDM3",
  "key24": "8HqVKZe9MnjUaHg6Nb93iEoDgrfXrp4etLqzDwvAmDabuK8PoaWAyKEzad4cTiY5HtJrdXJdz1Fo5UoNYm6T4p1",
  "key25": "2aFAqCKgoeQzr9am4wMEXbAGKhPsnBmrXvYKoDFhG5Nb1bfm8DP1wnWpE3seVZPYJgfHGypsqy4Nw5RdApmtYJT1",
  "key26": "2zXjFKgEsgKoofz9Yu7cAMh2aJFdSRtcCpfukzS2uiE4n2GMshS5ydm7vjXiwZ4g1LDZfq7NEjH23fr8wBeuHniL",
  "key27": "245skv4TNKMKDFcUqn9kA1Bo3mBSTBzCtjnAX7fQJMejQoqpaZ1R3bFKHobg1gD2hrUW5iYRhyQxdsEasGzB1d7C",
  "key28": "2NgG9bV4Fg6xW4TYPQZVdsaWKoDCpaZfvYqJ2GBiVft4RLoSW4QwZXSjPQoFBpzoUuF4dwLK4JDomsfur6vCxDq4",
  "key29": "72knjTQfeEpqVgteZz164EqCr5MV25GT7bynNXuknocKC9T61PaTztMimuQ7AfCm3DQEPkULoRdZtnM5FXVN5oy",
  "key30": "2XPm5HmGzUU8oGrerTnQDumTkVzP67HvciCnbmHFMxfvTGbuRohLNKSmdZdbmKSUywxuHhB9XuwkSrdArDYJA786",
  "key31": "4mb18u3RMEL3HrfxS3KmL35DjbUyB4EdUs1LZzAQkPfSs6kHLMQYRN1BCaMY86zuzA2Mc5dUzzRSf2AQNuzEUcWF",
  "key32": "29UuAQB4Eka6QqsK3HWhNeqv6yrCjQMLR5HJcSo6FWaeeBcYaiQzMVJjBZ8hdJoPvCQuFvSJT8cC7vBNH3XZzYwi",
  "key33": "q9g9tsKk8wucJiGS681ZJmGKCoqgBp6cfupVs2AH8QgwXEwGjVgaKZTkcXP2aKdHTHW1XPHKyskJd6d3hmSFw31",
  "key34": "6ub4FQj4q6zfrPC2zh5igPdSTC4xAzJ5M1EttuiEuzGku3xZnvRwKZ1bgrMErMzcG8L6F36AQzjJppaQFjTuTbN",
  "key35": "231wfXjdP6LsAQb7chYfKRVVDvnnHhJ1feKgqut3HBAcwXXNC3PJyQDmFnp9JZ5eKJzxMcSC5tm4CG7ZgBWTMbQx",
  "key36": "3r1FPNFhmDiUGJYjAAcwUVaeyjgjyChR1mnqQWSEEhNS5Wc4gF7oCL5hCFAdcm1v8vLBwH2tUV6DkUACNRBuUF9N",
  "key37": "YzhgpKWso7B9g3Q9FqBMMaCXw11TkNwSiYfghQVp2B7jdBfaUepfJWZV1RyUPrhc89Q7KcoT2zkXNTHfNSYkiky",
  "key38": "yy2P6V9R7fCKPdnZ4smBS9Q2sLqYxJXH6d6zouhEEvPYLRZcDMxc6w9NL4UcRNfQSqCoaJ6nZcKgrwnEzJoo78K",
  "key39": "3xXvbwJZYduKbQgVxXshsWKDdokDp3Aq2XyrCvEit4NV3qQy3QRCND45wJStzv5M4rceU7yUgY9BqT7oFs9HMif5",
  "key40": "4m3XCYUjutFfNAXWoTtahPLM5UDQ5hdCxabiZJz2jSX9PjpLbqS9Zd3RX9rqC1mjHWR2vkr3sTiiw8ZyUWFpMVys",
  "key41": "2fADF4u6Fhy4Z7TVVuLHEYSpgaTz4BXnNj81eeaPhEU76WXEuTJmgJQvzRTa31jEfaY1wiGpsTpGoPEyDqLzKan6"
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
