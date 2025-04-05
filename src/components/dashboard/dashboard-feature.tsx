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
    "4TNcCjC3yYP99Lm9pRuvUmh8Be7Cmd23vW3xjGhWY2FAv2T4gqyg2GtRRUk7w2hC9iKetyJfuio2SRciM7urqLEu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3mz66cLAHWdVvkeAThHmjWVss93xomsyrqRQrwXBzJJ7KjnHvbpxmCwN5VeJ1Wj1egN6w8fQKTwdBqVFVr6YSuAb",
  "key1": "aMV7yUjJidNfazYVm8Re87syfM3so2Qt77izM6RRcSxTzGi27Wd5ShAJm3kvT2fdu7qCPknqwPJuyaeBWbGy4Au",
  "key2": "2wJYD4vqXGZNUfPHD89tVEx1pAPo2zvuG5dBJX9BybAiMsGWYFKUY7vSwAxXijsKWxJg7fTxHS7eAifga3mxDdbd",
  "key3": "2md66rKJYfPgZEmhXZt9tS3gY1n6oMaE5hBM8XPTM3q6woQmBP7gH5RvpdCW9L62E31CWdYiuZbt16qrsYmwTpQv",
  "key4": "2BefR6a8aqZ8fHwNpv85VY6A4DK8BJSXwUZvWvPMNbqe1mAnyBYkVkLkFuxv6V1eE3zA7omiQdGTkaWRLqcRzeka",
  "key5": "2pRU5bQwdPfhiwUPKjHQ1yw3Wh9bnvCQRyvcqmdeorKjjPkhW4wvsdiUJsWTrF5gqWvmYM3wEhQ2J9EQCmwU4t24",
  "key6": "5WrnnuGPortHupLjQeTwxJLUtCPbaW1wokvJFgEmeDPxN2SbzAhJVXW4tAMiJ25R4cJJ21VqtTN5wLH3PYViGtui",
  "key7": "4aQ7V4JuggiKw8xNzf2jgUBBuY74YdNw39kcdnZhY9G5JkSgvE4DPnnZMi8LDa94oZUb3nAH2BUShBziSZzuNpwo",
  "key8": "2aEhcaubnGA4HxF6eB9PYM8VtyfjhubPzxFsva1YfVkdbxhYswdVp7hcZP2fKdbnKr7xdCCfvg1SEKVMremDG8cf",
  "key9": "28ShGJfatMNLcVKuXpnTADQXYhyY3VFfxjc3hr4UrutBSJidf93A941i3voHJi5Wv5S63HMNoVLtrA8sBQbA18dU",
  "key10": "3HgePMAShTaARxUzkAQJH3PDo3AxYXBR3FiRtP9dXnd49uvgy9gqrpqYCd2CNASi2rgDfhSUBaBwVHtRGKL8S9AX",
  "key11": "4zxc2fkH9j7Vdsa2aAZqqJMSEipqSoE84nh5RrRKNjpovGL4ngA81AZB9EbphuJhcsZMxyRz8ojXaKUcUTndwqim",
  "key12": "3ddXC2MNye7jWbzwUGAJs2uDH5obj6bwUaaCay48VJnG6gQonf3cKHrABom6xCkc6LqTRgA3nXBYf7CWxB23yRVV",
  "key13": "3DftciwRArrYvs2Gv68iD4n8mmWPLqMRj3PMPPNastVQqJzm4wQpgw4rb5zjrvjJqF29BpMGwqkFqWrTnLogq1uh",
  "key14": "27tn7r8Gs9tRGFrvFRvedR8rZupTBHNAgQ7GydKWL9cWw13bw5BZCYXG9Prow8j6hJrXdahYSASZkjmE5SLutzNM",
  "key15": "3ysG7BcR4DQWoexYEsKteUbGJSzjF24QqnrvJDqnsVa1TvgtUX1ifoQn5UcbZTmv5S3xdSvz9ciVGdgjpUaYNZtk",
  "key16": "5pMCMhbFFidv5yjesHmpQCP88k7PWMfd16ddoTog3K7VGeyw4cTTpvkLr3c48xxAkBKNLSsEJit2piCSRFiJhbrz",
  "key17": "NRsvmqQ9yFYJHzjE1RscRee1xZWa2Er7NyKiLUXdoisXJydwDotxyEb4mnHhLL2cNomicEBtVn28ymJqzjMR5VW",
  "key18": "65Jnwr3Nw3ifQPQmoe3zk5gvJbb7vran6Ps6QmZ6XtdkpTE9TosWkSYmsn4X3cr6yMA7aRaWEciQkz6PkAgamZjQ",
  "key19": "33zyoKMMnvgMmeTb814U5xMzEUVxEX1T7HX1oNNck5QzKTmSDkKe1S9AjMsw8h7cMkn6iMq7iyfvrgeUKxEyzKz5",
  "key20": "2dPkgd3jxmx7VrWZGNThMirRZ5uvPKDWTQNWpmkcy2sEbux2T7LiF1Re2wcJRH6bRgdbHHJQxuVsDdq5JbVPmSDv",
  "key21": "44j1SfrRFn9Xnf464VuXpTktKqPMkRyEKt5xeeYZJf4cuyxasCESkt3BXzw4PT63FjLH9dbD7tVS67HMXBHKqPwd",
  "key22": "meGLvpyDXbaoQGwkzKDBHvWDuKzW5QYPiULdSxiXUKW9meU8XBAHqsvxdLUdoi2nW5qstsbg8a7k9d2Br9UDPwA",
  "key23": "4qxYWtTqME4jToHXq7gwFzNup9cQNmm3XgPjQLktNWEGiSAQFjdGn6fk5uZkg8hSwinGhErJzLHCoSobWAWdmRHx",
  "key24": "4Y5nVT5thr4T5dcYZ8K3xirH4iM2t4aavfMabydxo1DNCHN3GMSktL4rXmuXEsyizKxk8ho7xfdNp4P6rQLs8pyx",
  "key25": "3c2WHbtbxeKfTPnMeddNekYHuAg6aWUsFqvk82z9xXQPKkjjX6MrVDG8ShsN9W3CkoxcdmhLnJYCDnNKS2WyuKK1",
  "key26": "3QGqTZyBqUjjRaePj83meKLaMj9jx7DeJXtVNCwqJoCYMaFzZTQzxPzFHWUTcQFxJbAeht71dT2BXhDqRXHzvWUE",
  "key27": "2FrqNUv3MugKjrKSxRpPWqaYykkR9zMk7L25bu5ptd2DagE4eoxyf7R7QJ9Vt8YNXpEGvxLZq1SDtrhKysCgQGaZ",
  "key28": "5bQTJPL22herfzHDQeyRsf7dsvy11d1eztowRx7SWKsk9fTXsf47i2mKobV6Jem61FJvbK3cLAZyk2jS2Gh4SzCN",
  "key29": "4LUCA5PiZwxLs2F24sB3XxME7cKQBLtndDDGpMsk7o3LasxEpybHN1iZ2smmjQScMq6ZAnABYxkKZJ2zLn8c45s8",
  "key30": "5dJ8D8WvLpzCEfDWq2b4DCAVohNHNQRshnmkeeKekcg1eo1KZZwmiXS1FTM6EsNj5dAB8yDP46LjDsXMeJdHJBfV",
  "key31": "65bxNH5HesqN9pvFHuZz1pgTGqsn2DvB7gJyzPypvXvmv14YpQcE3i3gey7QEwk4HnXN1K6uXJBwDB7bXZ3QGZWz",
  "key32": "4mTEEpxoeA21XPLcdXVw8uAvRFCtFy18AYcHceNyRrWDzBwEM5rHdCuqKSikVULAjDYJ2cLftJnZgJvPeRked7pp",
  "key33": "3PCyVv9ACjH8QUugei1rXfvvBcenVMh6QxC4Z9Jk8vgDL8nw7cQTt6DSnzEVsHwAqqZGPYasgLMKrDGCDnxXQMCm",
  "key34": "2GirnrS4ivEUwxSRxtUg6EKgfo6evPbAs1puc2FbTVM1Qm3vxvJHq3ixvhtPiSD8CApVHvEeMd175Fboj9nQ3i5E",
  "key35": "3eo6Q8VUdm95KiaofNrsCdBAY3UTKEhTvHcxnfhzyvEMHGCJm3zwz12FafJZEGjVHxgxKKEvQxx9HVWoQzfcEXS1",
  "key36": "5Mzneydhjb5v4jLwyNLqCbC1JAuvAXwFpVALvK3R9gihATYYKhm6Fv4sDwuZsrsmt1Q7czkpLTun6PFQY3WWArmD",
  "key37": "46emMDVEkLxHdfRdXR7c6P6ZwhbyjGDjdGg7WrzpAwzEXXuaq4nfwtAPB25RvpPets9BisJugGSSskKbxZhuW1xn",
  "key38": "7SG4xympm7EswWRJAc4K7ZbXBAH8AZ632aVkeG3ivgLNjydNdM4Ns8tFYDYqq8xviTUKsQrsjjA5o6TgdVoAa8Y",
  "key39": "4CzGps7Q3oxj5rsky3kY7vHKePH61CycUzuGwdn8sUomnGc3uF6Tv2HvhSKc5DZMamzyMHbYMQYi86ndSQ2VxzUt",
  "key40": "452RMBqeQYwMR2iU5rDnFFR8eBjpXQ95mhTe343PPmqnVM7rteMncdS9Pu96FoQtPJ7EctWMc1YJCQHrpGVho4kX"
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
