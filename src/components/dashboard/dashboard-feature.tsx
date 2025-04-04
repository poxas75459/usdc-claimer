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
    "4HR4KwdrtvERCBmgZi1siPAqoyB3cS37w5pLxUF367GA2EBo52tr1BW43VL8hXHKXe6cfNsaHumPz1jU64MjxDTi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59mji3NytzPCu3Q6UpsxKWRQNRskgBJy7PESpP28E1KfPBQabSTEH5zKPCcRqZC3JfSsLJzSvamkCUUVBCpnfEt1",
  "key1": "458A63622iMXdfiLFu8fUdFSEWMT9D8VrgNWaRnBiyDq2jqidyyh2CRVFbUmEuUbNWai23kfSVgnHy7byBJQindH",
  "key2": "3w9GEWyRrwumTGLVVrn7PLgoYTvuQZ8JqhzQnz43A3573NpefKfj1iwi2i33ZDsLWG5fBMPq346SpLbpKjUaLtst",
  "key3": "4SVhsSzQKzEys9yGzoxrbhD7dmQDrB1222T6JAeh5KDq4q5uV5sXBsU3ZY18ZZzd2xiaqQtdoM2RqmFs3bz8KHHm",
  "key4": "47aKHo7sHTJrqsPqUwXGUVFK7x6BnT5AdPLQYZtDjrzX6yTQycHDNQ5TnWv4ZeRh2J6WAd3b1cWt2YSDQUxw51o7",
  "key5": "3kJ4KWdnyz5w3SRq79kQpM9sdUGcR9yB8jiXmjeTyUX6BTKmcgQ18KQWEQBiykGwN53dfAQh2ShmZVp9wbehvLyo",
  "key6": "3FHFpDBnzjAZdVUySstrUEPqpLRq8K4CyGYcMbKg6Xm8WCRmdYzFEQSwDurGkAxYZRo5ayzaxCSg4ydhPqVVWEeN",
  "key7": "4gZeFZXhbnZViinweEbpXVcUNd6rXUMGDz6HPnhfu3xW7e8hFobWWkCpyWM3eebj2af4Zdxujh4pPoKynPPHUWcP",
  "key8": "4A9popzpGpT7GMMiSS6Tfpf7NPZErdMjzcEhfo9Jmdhm5dhfeDvQj4wxR2ZNmPuiLJUhVJACZRU28oHyCuMWSTNa",
  "key9": "9tr46sv5dJJosGw6sZnYeJmqU7fdZyjwzzpqzrKw3nppbst4V4GJeqStZBCZG4JrAY18A11y3NicvwVgHQtadHh",
  "key10": "5rLS5vsetFPyMgwVq4TrfttYuvWsDPEmG8ipqugqb2JZX6uR5gK8e8cgHUPuL3bQuJdizE9f1VScGKJBqjiuV1f4",
  "key11": "3Wh57YPKyyZvaTnRk4GUHEf9uHhHMo15myVonUiZriHx8UMgLD2ebXXb7ChtUim6F6GyzcJSo1wjjP6k8TrHBCxg",
  "key12": "3uEfyct8vfLrbw63jsHo8RzM43gpLAWeLp9zTSZohW2SAnFqST6vHgKvyD4ma2nMtRK6vWfEhLuCje8VyuGecSde",
  "key13": "34gEf6VBLhdvquUjGa6R94oNG7WU5aCbyn94VxYUxHdTXfZHJaSBJEXgTAXAGMz17y7pzkHtaZ1nGhGK9k2jdRKL",
  "key14": "4RAaodaEFvhFe3q7q3uN98wg8bMSs9X3BsSKDcTZBuoyRgXVococsrRqLgLeHYJNi7q5CZuLY4Yw4vdrMXkRE6X2",
  "key15": "4BiH1djA6B5eku3cVYRpMErmLyz27v7vkGQWuDo5THhXFYQprXRx4PTH6NPz1q8wNXL3UZM1KgsT9GEjqfBCEwK6",
  "key16": "EKMTLwm2YjnfRDdHspdTKz5hSfyHu1vZh4hSXu6jfppg9sZz71StQppmcCgZpT751EZo9nCC7MPTaPWqC74eNBg",
  "key17": "5M1P6qd21hjR1Ph7RNADZumffLbPjTPY4MrwJTvh2DmefFmSPg1HZ3quXRerg5YDv2ffXUJV59NJitnqg1BxWRbv",
  "key18": "3E76AZjPDRBF1dNsfULGJCvSz3ag8Vq4VB5TMEAaAzqSqFQ3WdShPQXXSkBvP5KZ5x9TEh4bjTzXuR3EYUqs78wN",
  "key19": "i7HhK8dGVQgpMJk5B91uaZHtcW39PKbzt2JKG4iDGx4Eu7xJrBihutVo82Ax9GZAwvkkFjQ8Ch5P7LoNvccLE86",
  "key20": "3tC8mRPszrZ5bmbAGuqrAJcXmCrZQE2w7wBu7fZQns6c5k7TcTHVt7vrLXqBcKAoH1YUcaYHGEVcUpUuZVz9bmdY",
  "key21": "3C8mxhzcAHT1VKEGQmki5ffMAe9E5vzGFePHmARnGfqi29XeuCLmU5JYYzJsKWR3VvqUeshMptB2gvxD6mJAn3da",
  "key22": "2wNLJCuyohgTNTLAxgGjRxF7DwLcRnj22swbwuthYLqF3fnVwABqeVdbyiAtvp3givLxZMTimrMVAfEpjVekz5pi",
  "key23": "2SBBouDbrVFBUsseCyqiD1ao2ub92XisBGLmBBpN9YaqK4iVF33xTVHzSNTtjKp9LxPgoQpC5JDTKrfgLKF6iT43",
  "key24": "4PnhNbL8wsnn4tzKUwYT8Co2bnDvJ8n6HyrAbAo2RtLHhtbZXpcufpEA7ETUzhYssfu1mokS8bBZBqX74p9J4te6",
  "key25": "3wDFUPczHe4L5RNp4tdfpBMD63ZLM7uLo7Jc7pdUpv3oU5dCMdpAhuupDWpmnVsKV2DRztkdzfhzxiEhGoXeawSu",
  "key26": "9wPXdNAnoFS4p9CwjLeaLkApzoGVsy3kgiumKwrrG4uqLMbmSipybiw7ZKRpJP4sQSvXtWKZyvErzMgUvkjXrCR",
  "key27": "e43Wmq5t7CaFKUdagW2gaaGNLbyMDBQhg1quBSMz1dc9cc3doMTXUAtuiT4vKVuq8SsV9j4KhiDA3VtNvrK9184",
  "key28": "3ELoFQv16tLm8ecRwMngW6z3v6d5id9iPsfte5cWziENte7ckkJVbjUoXPGv4QwmkAzWjyuQnxijBvXMnSBAivDq",
  "key29": "2TApVqAH7VX1jCKCbLD8Q8Qpchaeq9GAtbNM3SG9QBTa1U3wKGeMWSJKpj6TiuWy85a5m7GRTJw2s3auCMydmf5S"
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
