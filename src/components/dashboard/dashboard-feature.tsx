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
    "3YnAhzrkVz7kVaDxiosuA6H9xU1VB8QDQkEsJjsLiWEFtTM3FSkPPV4f5jaYbfPcgpzLoFDDVQuNXtTW1iAA1nh1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "633hY43nCua97ueNML2MeJYJoKLfTmsU9YMLCMJQR7sLsKzU1jJfhNtTupD66stYBVusgy2f4mkpYkdTegP5zx6V",
  "key1": "2Q8wv4PKrUEy8Sb5WWVXXjMpViLQq1knSPASjYJmhqjf8VW24RYPSpsdJZVkrbBnrKTMNQDHYcZZd1VVUPAMWHDJ",
  "key2": "aq4o4qHaZpGuFPJMMSYHVsS69RbUUCs28PW6VzVywKWvWdLxvmQcaettodoN96DMtqg6w9PxVeucjTbMrg1G1K7",
  "key3": "324eVMagTYGgr2Wj2ZNzc7NR3n1b4h2VcDXG6Rd1Jt7eyWe8JhC4TiZ72PvVBbNU9vp1MyR48Tj17Xhwgf6hSjGx",
  "key4": "4fEFb9CsWxj5mkwHkoAvYc9NCUtTtyWF34QNoZ4XdPGYJd8yQAQkq7DATyoTqdvi3zhkd1UZxsy7gTc9RYeTShX5",
  "key5": "7LVqZM73PhC1gStWxtHNjh2b1g6oqJ5bWxrhEN2h3kb6fRxTnA1RCC5aRxkMbQK1WL6FqKweVYFppRDSkm1UMyM",
  "key6": "2avUC4ZfE34vmZqrVCemQpeF53MKk7hbDi2CRpVbKWArZtz5idCeHLxqHseFU21CJEtqQ3M8e9LunbupBMpxAxxd",
  "key7": "3gg3aLy4zaSt5eQS3xKyZjDQGWpD42cPjHtfajmjgVqe7MyhULDUGKLBhERw6trWYFaw2otRB5nwbj91MXKXY9Qz",
  "key8": "2njajaQjxRVEX1S6Q88qFrGNqtDczmWSVqz6enHa2ruRw3wEYY3ufmzubJZ3wonc152kbYmkP5Gq9tqfJhnMepQZ",
  "key9": "9jJcMFTtQXTT7N8zojHtiDXgz9miTiTqmfqg86SaFQjnn5woH7h5hbXsT324hBVKg2pu4JPyBJs4Ht7RPjErncm",
  "key10": "28qHYXCEA4eCpZavK7mNwEhVWuPrsHvFcmUaq2XsKw8dnx3RycCD1HdpgMiUjQKp6qhcAD7jbRisYQDSe8v79ZPD",
  "key11": "5XeVQr7BDvKmHmraJK3jK8mKmCU7uGakTWSxXDWkhN4amfQn12Emem89LagfqPtXikcNzQdGTHFCEnAc2TN7pPrP",
  "key12": "49CoHu75LPQZ1ayXn73qy4cFXkVqC7JctfdWTFkt7KQNyZhGqApzg9Nev3Kq6xW4ZqFVdLA4n4ZRv1CTAtdLUrYX",
  "key13": "4Jk8ZzM3riK1uXRJu68ZoGqrgHpe7ewjw3PBo21C2Wstvv5EYHa7hBmXCA4wcuYnHup1jajRXACXUKAv6NC5P7AG",
  "key14": "4hUdpYDmgpwx7McWhRn4oQ9uCJ5U7Xf44bGyRUtJhCBvHdnjuuqJBdwyL8zuTtyVT6auWCg2AZoVEPxkD8MvKkqz",
  "key15": "3FiN5GboxmZgeczjSLJEz4X2bhJQgWhnrz2pP7XsR8Pn1gXyndMy2F5LGAbqLC25q6D21p9M5fNzsGjRqe3WJSEp",
  "key16": "5muZ3bMf6FSNbGtWev2uZHMaRHMg4ZMpvQrRS5XEt26dB23HXQRDVEk22AAxTbLLQjQRfZwtXB3Vm4QeuvHj3mZM",
  "key17": "4gBMuNsS7kUSuMRGB4KopRBfau1QuMvHCEpjRQERBNWmqUbkmMYwTDSbd5yVZh6eM5yvAtxQJ3BbXDpgLxxmAyf",
  "key18": "ApzR2q7RP7129PEYQdUPEXsUtnCLS3yAr2Vn9saS1f8H4WCaRw1sGXcAVTMgKcKMteqesZ75ZbReGEadcULLBuT",
  "key19": "4cFHA2NiGaLMRtFpJrXbV3xPSuEWfmQCbUA4kV4UkZjkHeLBxe7R5v7QQQyYDuznsxC7xrKfjLAH9oqv9ZrkaqXi",
  "key20": "4D3nrGx7Mx5kHdLHYFCocJ2WN79UZnV2AK1ZxGpUtCSmCUPaquBaiACXHA8RCYXn9yW2mPzeEHjJHgFsK6gzkqis",
  "key21": "5cPB3RUuRtYt1XvvfbiMRmK9wNsL4o6rsmhBBP2v7M3tJiYCeLnwjPs5z4yYcVJjUYABM6ANtL4aBy8Bgi7BiJcp",
  "key22": "4cGQ5BMhizPDNbRPxEViRcCDqsi6f3brqahjLqHeLSxbSp23vUqvHZG9ssbPRtyjy6Q4Vpsxnc2zhJynqdoFcqmc",
  "key23": "5EKfCLAecg5zDYXExK4C6USC6CyPBxhnqp1CPWpDt6Luw3qRnPdbkk4gBaph2BFsGbosL3Sj5Cuwc9U2FUhYfaY2",
  "key24": "2yLpDYdUfR2X1wN5vW8L4gqUZNSUqGFGNmL5PzVcbFZH3w7RctQGngKpK2S8B8TzaojUFpZJ8gL13iqLyRuQoCW8",
  "key25": "342M823kn7wskRMsfUwDzqRDsZQfbWAmJxJmwDYzB4hpoRooeMreJmsimBEWbioCRJMooTSw2Jzy8oSSBjRmsq8D",
  "key26": "2LFK7U9ptjg1EoKssM5kPqh8YoRMJmc4eP91oDxeoA4XGuJw5dbqtcXDg3fiGBVxdJJZg2cAEB1rWVcSuByKQtwM",
  "key27": "5Hv9PcHUUVktjxXtSnMTNA3gWuXEeDPdLmeYShLGnuQnfKUQ7hywd91uBQX5bRqR988gGShWd9uhbtsRqSwJHbh9",
  "key28": "4J84CPE8e9TGkjgS4AWanvzj39Gepm5nLjyZ8ihJukXZjrHozQksuyC1nk2hYrXyKpjKjXHiDSmLZMDYyBDr47Gw",
  "key29": "3E1Pixx5M3uG5Gw6CmUTJqP9DBuKfbxJTRsyTGJAZwFQK4F398qq113PmAy8XJAvfy8RajK1r7QBpSYEWVn62CDU",
  "key30": "4gSzLMoAL5eM6jmtuxweRGU7yC97g9CZbaeUJ3uyiusGkp2gGTtXvkdjR4rtu8qvjLsjUQRvxV5yPvX2qPZDXoc7",
  "key31": "yEEEghZGG1eiKSmmUBdvwxpHQp5WuVSR1Xt3bEecE2u3tNNJ1spBsQSYdpwPCfKnhsBPijGkqUWBZb1BqNVrmYU",
  "key32": "3re7NWxm7E8zkBXy95mnMBjgYD5TD1iqfM5PLyVT9bMHh7iSQmeArZAWZr6FeeX84QAS34wqnvBUj6qyQsd8BQ6X"
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
