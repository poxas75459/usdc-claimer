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
    "5oZ6kNT8d8wdZS8uicw1HMMj6vxuYzAk9rcGUoKf6dXjUDMw824dfAhbWqjQjab1FnqVswVjDrv63Myyf8LfSLm1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5TbK4bPSLfE13vytCi7BTeHb6NjQN3oeuxYM1kUsteycdCssfvzf1k1NYz3JdUUvp34ZnJ2V58vmF7PYVH1LUdms",
  "key1": "5BCYUfR3MxB1DAhBse8WzQbFFoA6y8gh7ZjEFRHv8NFxU69WsNWWfv7zAqHYMERxUW6AshGyQUMvFoHCX28HfFVQ",
  "key2": "6AX9UEj4GpLUuXt8mHZVFpmxnNHKfDPQSuR6pe2Db3LXjBBMyFRPxKHxsv3EiRb9JNJ2Ti4wazufUdxcjPxskaX",
  "key3": "3kfu7AHA44riGL1wB9hvcxBwYpNQHC7EitaUwXW6vFjD6f868sh8Gq8gkcDQzQ3pUQgugn7ax5LpEuLpDVQmW7qD",
  "key4": "3Z8siHcn7qwq6ah4nWY2aqXc5FwLmLenGRf64UeXLPcCxeK33N3QqxDp3NNBwtzpoKdn56m3JezJsVpyzXvLRQrE",
  "key5": "45FTK7bTVWYwErut58BxpbvyGK1LpU9U8CyKpyYa7AvCcoCM9hwEmvsXqCf2XMWDcxj3wstBFLNFoQnGVD2kEbGs",
  "key6": "5YjDqdc87axdw9CnwJLijeM9hFnV19UFt5KJLcrQNQzFJkpkKzUN4pQPafXvc474SSyt9qe1phg68ESYfBs7Q6uM",
  "key7": "2LcQuPJpVXWFaVtzimiFKpnKGr595FxQyZJYYik7wD3w88BMMaesh42TtdCvfUzFMhjmAvq4A5YXNjGQY7D2eDYP",
  "key8": "676t62ySPChqXiSfQdY3SmFKkthjdN5Ha4pmHfyrKDaWqjiNJKhbYGPGtGEkaT2hRAYppByYa97QDK2t1c1T8FhF",
  "key9": "3f8g7cRdBuRBGQD6AheFhBvDJxVEyhR1VDoVPefZzobhjEECSSia3PKh5eaCykYj6FynzvtcSAPA2FAML3pXzSKN",
  "key10": "4oqJKcX3hhRvRVZPwdn2Twfr6mhA3o3VjnhoKHzQAYW6nfmYGSZmTdxkKFzLFA24t5xqFHET7mTupH9JbXf6ThNW",
  "key11": "pHgo1t52YyxmqnJRYBcVvC1wfdH7fsQuM5r5Bux87EDEjvTbULKkjpFRF8P3srsC5N7kyGYHnPTPepc9kQfi7VV",
  "key12": "5bKB9NvcSVs9Ec3rXFUQvd5oVrGFANRuZbdXuy367pdHA4QmXoCo3nR19vXUMuhJDLCwaZu9iitV398JKWVgcR4G",
  "key13": "5SpBG4AAqpikb6dG2YhGzUF39nCGEM4waPDQ2PQAu5to81nUhj9rrmAXHectjh8HcaxdHdJTXvRiRNqFkjn8VWoo",
  "key14": "24qfHRdCvfMM6MiDf7Q4ebBgmwTFsH9v3a3hge33GPJ7XHBd3i4JfwrTMqkcjy1TCPVCKPDA7Xmyn6LGx76oMBts",
  "key15": "3xoc9cj85sLFxrCdRa466KhJ7QmSGP6jxVn9Ydbp7viArsqMzuKx761z3kvk21hrgUxSijRgj9aMTEkGksL1Rfa9",
  "key16": "4rzMbmX3nRexasczdpkgJ4Gg34ereoPegCvPnEsTj3iTnC7TUjpCfJxH4NUHVNQ6iPcjXaJc5cCN8gyxNa5MSnD8",
  "key17": "3P8zTz6nLd9pe5s18Xui1DWmmGqcXZsmk2L44Cgqia3S2SAGZTMt3jUTAxdQZzLCWvsVB6WQmA6ick76tVPVYX97",
  "key18": "Afwy17vNcUApQPHN9cP3TCyH7XLce5DVDemrRZGgFtMqSXQFrZxcVGqJ1xSrN1cQSUbysy8XbGPrEUyndg6u9Ns",
  "key19": "2HcnUeSRrsDQzdN9KW91KmYzKi6aVVfeQCFd6LiCw94JJRacwcVnJj5MPdtaBvVEHDnYStaswGAx4FDFHxw7hDn2",
  "key20": "4uYAcKtDDUCEf2JS4ioYXLbtBdqPMbB3aC8tnReqe7pnNSzfLqXdh2DBpcQNGRP1Fo12Z9McVUPuDsi2doWZa8QY",
  "key21": "wQ6ggZApJn2KMQ5vWfEgHxSwRH9X8GCEwg3xpe3LbzidBEfUo1MWDzHrTAwatGzADZo9EY5vjXCf2qxaEWPnTDW",
  "key22": "4icyFU1PjNk8TE2RWfmbQunVjmzfdEgsmCQcyPocmY1TTggpHsZHMxyLQqfZ6TQU6ZRQipbooBusWeXMJqizu31M",
  "key23": "rCzh6Mhan3MMbQwaPaXDkewxtBrTfBMXKT4DZC1Na3J7fJmyhBB75DbSGEbfkCPiZgZQvQCwZjbKN93zzJjr6Ce",
  "key24": "2mtrcXsXeT81oRQFNKGc9ege4ohJE6mbMWJp44QW8pgSEiRv8AapaUProZ8P3YNtG3pynBeJwduXH7zjZY6finiE",
  "key25": "5TkExiok2mUjynsrpFAcHkRhWMoXTqzeh7uF81HVQxUFvXb81fnNGZbGiXfim71qtY7JyZsgdCJwhsEu3JiHpFFo",
  "key26": "2RcqLY6PtnbjJGoe24JrS5Q6PruvBrGdkwckxLCMSjMtcqJFgEvvVbfpiTRes4pBMagqHmVeUzsVxbs3AR5GL85b",
  "key27": "4XbZmfP6H2bo1mHseDGs3RJyMNT8r6pq3Zm6vp57uxVaVwHoxzdSyBLgszcZ8EQDSsrLNYJ7cnGya4Czs9zGxhiP",
  "key28": "2GdfqRBM1taNBtwV3iu2Vdd8NvG3QKXJKuCRBQyq4tMyhTW7UTqGUvPYtTV2V8dzEra2w5Y5xDSZhxkc73QPeFWZ",
  "key29": "42mwLYztB6sRPSG5ePjBj166URZqa3eFsB5Cq4KmBUdjsmZssLWncLGwxky3DGnpxB8gRLPNr7qTxcyhLDMoapFS",
  "key30": "441zoSQQHEmbYhx32Cy2F1xMAvU9fg1Nsv4ixj41vHBMZBGZQetj6MviAXEWyAZEZ11sY3gEJWFRiuVnbb3na2NP"
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
