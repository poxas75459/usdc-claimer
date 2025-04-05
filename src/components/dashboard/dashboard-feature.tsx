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
    "4xJeFrWf4TdB5GBxexTTcz55qR8YMVpsjX97KoBoajVjbxgavybcP2CDoB8ENrUeJYiY4D2mC9Tv2fx3u4NUJZ2Q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2iv3936y64cpcF3i1UHgTfYtuoCSwjGXAW8KEFjjKNRYKZdqQ8pd7qZK73hiYkMBCMCH5wnmUkGj2wRNjUXfARBE",
  "key1": "3fCMmkDAXHkVvbn2GeRHcmf8UgXe6TDXoGVVxheU1mKyfXo1B1dSQZXtuscSU6aTxAsqAguE99ifdgVLWnJKnQMN",
  "key2": "YteMU4pBmv7zJpLCN21uwLTZ3LXUkhRLL8PrfjypLHf2VoyuGrqvgSswFkAptk41fHrouZeo75B7GmQdeQR3Ptx",
  "key3": "uFFfjP2zfviyJeeAZJBGMrHLjMtu2YAxPoLSkREDcWEyjafMW1xUaJWSsjvDxnSy68HEZzYTm3pkJUrDu317WjC",
  "key4": "3ANqCozXACb9oi3Ji8oJ6gE2mGASzAb5uh2tdTRvtWyc5Wetr9EEtzC1VoxUjQ2awhQDrdjpJF1YC5WBHB184Dr3",
  "key5": "2LMhC5qeGHmAksGMAzWemgi2MJKJrCV7nGCH6ea85KSawDAm7sXJXkJgkShszXdi6XsmM7t5ZRrEvQukHbMUNLje",
  "key6": "4fL6spW1DsZextyJZUpXTYdkwWtXAa46ToFJ4tEd2DthaNNc9KKzjjxm9mNFdwEBoEqP1VFb9KmKtjSPnWGLF8h9",
  "key7": "3NDNw2wB4tezWmQyPNrYZyB4ZnrAPZ7xCJsh8wTqwvTrQAkh8WQua8eKAiZE3bkCYtjQFeDMcx7HsoB3Bx8pZQst",
  "key8": "35XJFfSAKBvLmiNPSej4FcqX7dzeW6mwdze7LTQcPp1pU6CRGPjz3pi4pY7LEH6X3x5hFWgbYa44ZjpppGMMdUTJ",
  "key9": "2knoeTcriWJZrWm7dtBvbUBQzDntcRkYJCDrcezvijXAdMztSdTf82iAxDgX2gLWBkVTAgvD1KXvypb3LE8zWxUB",
  "key10": "5sFsQpmrJKFKM6vsZSwPpD23iw33nCXWEWrGMoej35QYMDM8KArZkZrUHg8jwSaEvKio2yv2rzgE8ufMZT4qMLBk",
  "key11": "qdNH84R5Qpq2Wyt6Eb773Y1MzorntYxLyVRWFZLo9e9E44F4aMaLjWKa1VVqrM6yTUpoFoY3T4Ypxk9qjgteUZc",
  "key12": "5BjZeNKv8Qjp5u1GyHjbsAL2PSq2rk92QAWgoRqFSzWqbJFabcVX6jfhKYaJgx42kHRSttABEB5Se5LsYRuojJ7T",
  "key13": "2aE2d3TBrvNp8H6NGi1Zq3uvFDVxSySPUEZ6GiPBfqv1BeeGqLuQ7QhwkJJbYY8eZ6JmmRNXaHT7uEiCQwDrNJtb",
  "key14": "5zB9oaazSpruVaxSx1T4Zoyx1a22HjiU1pKFCgcsaM7ezBD2YTkoUfX87CTW2M97rn2ytuHqCLY7r1d5vZqXP1R",
  "key15": "2w7wpGnKqRk6HxLLshZUhjGBDwYHi38cR1zGAn1MNqNt5yTSyTUf73xmrQ97mmQZtqomizrw5KNqLCWbSDPiYyq7",
  "key16": "3JbZeBcEjg7doMkFnxD3trGgZj71kuUwGLGQUcej7AQSyRj6kxCPKAK9PCh5G3nxzXwdRJNDjAvhdfygBJL3R8oL",
  "key17": "u71N3k9ntwEviXqLEQ8XYojjookqiqxSPKwrDo9gJJcBAei1sUNQ8rP2dGqciz6Mfstwf3ZhGAL3FM3L89tXxZp",
  "key18": "4y6g9WrkSwcyfaMz27VdJUQtmSWPauVck4tsx91FPdcUVbd3wPkApT9kdgSCVQG5gGDTrLSskUhKCPiQRm3pyTMj",
  "key19": "3dknH8o3L2rMc5yaTjBXjPD6rm28exnkqt3FQTHzaBQr2nezb69u7P3MVVGDgGsME12D31DqpDe7ii76YKtKoFnA",
  "key20": "3gH5MecXuzzESmrdoWXtb8c8ijAXpuVK7GXYLdDh1EwiexuSZGwtaLYziXUZ8apm4jzL3pbV7bq7c8cKgY3FjxJt",
  "key21": "54qQXJ43oCEHeXmrzk9zMSJ4YfnxV7uvUm92x3k2Jrbb8W11sEYJyKQmrWEPEJAgxcTyJmJSJa4BrwHqwgU4zUrR",
  "key22": "36k4cvMCZHzyHU3xJckKQkbdAAWzsBMDn1P1EtjGBxSsv5jPsDiuGbmBXZoNnZeCZx18Rj4hwSC3fECvX9NquC6N",
  "key23": "636gZCKcP1mbQK5mezMgL3PW2sxUfVXYb9FocvAUQp48MHZpwq4Bx9D5kaWQ8jySiVGUAWnACHVmVsfQnzbLwxmn",
  "key24": "3avaghstXCs5KKtKiB5o75woJjPNzqnwtpPe7x2QSWahtQCk7Nu7zDoYorTt6Cea4A6utqBRLMj6DSLb4peQ1EtM",
  "key25": "5MoC4N4rSy8VvjR4Fb5vVoDbbvVT36isPcSnvQCw1XDHuYmk43CPXCSHvwcYLV7zraBgcQ8fKU8VBoUMaN7eYXuA",
  "key26": "3HKVvV4jA3v9MQSTM8FVCn9cp6uEvsprYTcRvVh8fNzTe3uxaWiBmeNdpDRMN8LsKrDtAKRXxWymY8KP65dtkiZp",
  "key27": "5hrTJRRz9izVEnNrB6Zbbsu2zHZFDRnrwbury3AKBm2mjyrrVzVPdyLKe7ygzgMQwizq5aXWFVUxdFzFNMnoTEfr",
  "key28": "3taxtYho7XFLs2SaaRse4YXaS4bFjbPdEnCCGPTj52C2SS1G48jPKBvq2ZtLsmfx2MKAvyzqA6iPhwNPRs3tTYtu",
  "key29": "49VYZudyZ6Nn7858oooQXdQ7rDCUX4Xcjp7xhpyvTPbevLBAK6DYHW8EVLxdnsYP9wHpX4jxjgKn5N1cbSQ5ZYPi",
  "key30": "2ghdBFedecUxEjasckKYNjDm3vAzQtGJ5PpzJk7bQn6FM1mgMdjgHA54eWM8NnzDY9zU5ePvENTJJw7AeicH6ZLW",
  "key31": "2RF81dUekYqcVpa6ha3SCE2n1bRvLYvsH13Trxf3PQ9nBH8HHrkBjp9KbKeHxk6vw63o5Yzg92QFqVahtHcJpPjg",
  "key32": "25hHk4DQBwUwSoMw9pqkHpA2z5Rt6YXCRf6HgrGTx1yFzKWNunmPRSGhRnzxbkSMNWsjBMUkhDFFBSyaGcuetKh6",
  "key33": "5dQDYTxcqNLatuGKeuF7jW7qTcGk6RQT9aWwN87BZKFRVqsManqMh6k2BhFCTQJFDzvViua2LpMjPya2U1owV2Gi",
  "key34": "4TrEnd1xbMUmqFf89tWa1zG67pUTMpQaWvtzC5bf3PNVXgKwwxtjZyvDDzYwcUPWTikPBRPh4FMe4bySYkMGDnny",
  "key35": "55ojePGvyN2NPkuKNUPXhCSL15x5SaYuPZtxCG7NjnjgWouavZrmH9Kars3zMJc9RDZPqdpqaPn5VKGokGbKfJbL"
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
