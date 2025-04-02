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
    "4ahD6a9befhM4nq1FyHnVgq6eJWss8T7kFKS2dyK7sLjVpkbLwMXQmFTvVddSntQ8krrLzJb5Sgf3fxSPcmrgEeS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xF9PCfZ1RypBa3Pe25iADTzdDsyo4k8BpULJYWiYRj1QcBqGJiZeRpNYc3XAp97d8VEtwSdD95wyc8Ts54bRxYE",
  "key1": "3Tb1pJGXEaWhHbRDa1oPX6HmsaayVMjDdWNUpmopxi17bAx9uogysfziJw9twdy9bXRNSwXwA53dMfxDCsjKoqfz",
  "key2": "5BzToZwwxCBwJZXgtbvYkoHZd8TnEy2QHbXoVgydwWss3vuyw5FP6gTUT6gA8gUuE7XdbJMRCubti8dXkfHXBShe",
  "key3": "3285fh8WTfV8w7k28gED6eAHr39d93hG884nPRLTkFRVQcPHCcyBcYMPLFLADA9GTMMhFweQW4EkxhuCZQWsMQGF",
  "key4": "32oASv9yHQXCnnoqpyFx7rVnGgS6BcTQgTPDLgXmWcm38NcWE6aX9ZeDJyvzUSdh5oxGPsoEd8mT7B8aAH6GkjQo",
  "key5": "4R2s1HW96CsQYFquMRUngR21ryCBQPQSCjfMv9ctfTgEnAD3p8hn1HNFruJU9SJii9UiHUcXSCQx7rpHFWwEuRo7",
  "key6": "3SjNNq67CD1kwehJw7arWGtCHt28Paifr3tFx3zbb5158gQfSPV9ij3915HbeDUHkqRnRWq8zvAQD2kfLT2vYU2J",
  "key7": "3sJtagKywghfZybgUBbmUa5kxMXdFi8T8Xjd2w9kgo8i9GXXPT91gAynQ3LzUyW48e27MgoXEXUN97EsaZdPUjpw",
  "key8": "58wU2Qcowvr9anBFuggc9pEJ4R5fAjZnaRy6cMQX3mU8ToqrBSr4nuv3Kc5byZUAbn7aqqRgADE6o4S6MrPwuRTN",
  "key9": "2Lw8Uvp2qVuMyZGqSETWtftgywMdkFn38RUEU4HVhrsbyJYMQ2jtw4D3huU9zoqeViqH7sRZcTExB8Rj5pwTRHyr",
  "key10": "xc4eLaoUoVTreSX3kMsCDEnUwcKaPB6hv7eU45ZCPesUxuxETF4rphrcj4PjCRa4xJR2rtPNJdWsThpNqUYiP5Q",
  "key11": "Q5PkWZANq4cDy75P95sqLcXMDijUzZKQebJotUMVtKSx5uPidSza5rKmMvkWmJ1QjxuUGSQbm8K7Sjq7264Xz7d",
  "key12": "3u6w1ZniqLakikc8rNgwioETddxHuzt8ZkoRt82mnApZa6pxDYy8cxUXpTYNw791E9MVuJouepWC1NJKgPsfPdgE",
  "key13": "4VnZQqWzDPD4dhEXKtSKYZoKyubFyc7Brjw2ipEhccgAkUWDSvNqBdKd16U6t2AMA834EcoowfVFcncoTiS2JV6j",
  "key14": "2uWnNuYwpdXtVxyeKHWimucoE9PP265oe2bR9ZHADhzMfZeaRLQf5GpbZftQN3WfvjZ1Fd1T8g8ugkPhr634s7Uv",
  "key15": "JfjsGumpu29akdpdV1vAD29QVrfZTWWhJVRTkY8vGRR5BMb6ixHMq6mUsYT1n9CFdGzh4nBYQd8WKjELoKU1oma",
  "key16": "3boE8spD681eJRRDTRh1tyW2rzqTNsEc6KBC13uuHoLVmPFLBoT34eeWd6gE8gq4i7auArTSXTj87t7pvKUghUTk",
  "key17": "3aTyqmSJZj1Q4nZ3RvCZ2fZ5z28vhBuumhLP4evaT7Sb438DDjLnH8nqMtRMGGiiSeYV9kAH6DswQEw9rAjKSU4F",
  "key18": "3PHz7TrFUQQPdq8rkWwe5gHSRNL1KuYK5ZVGKDsn7AXMyzneKtnwk2xwc1QUVaQRjVprqtwNHUu7Jd9srfZ9mafo",
  "key19": "59ccAXwXayQSDiQxsvEWY3FZcDjPeCB788B1WGx5vDftLRDCAw5QYzFY9o9wDNo5H97m1s5YdcJMJaK1kymgr1ic",
  "key20": "21HNjJeNGxA8cVM774mdvsHFwS5eHqTtTNwnsteYTiS1ctZzCJayBWekWJCXFz46ZuH82owp53Gg2PZoYWF3EtEX",
  "key21": "3HsGqhcP1HzFaipxwkWpmpUECyvmWVLAYh963WUSkAmiZNPJs9LgScNWX5WWami9sJQQsq1a77WBHoTH7gFJdBTU",
  "key22": "7XUuRDgx4bcCUTfvXRW1r5ToKFfY4shfMbXPN6VsVBFoPUna5xX4x4NZKprLLRK4JGEjdpfgrAG7AkzuGJH6Wuo",
  "key23": "5MXfGSQNCsNk4LzTi7ZWA61pJ8wHDiNP5CdrtRi88WEiTVC7B8x1hHqAwpMxLC6PQJnZ6ci1s6iVTJ4ciFeSioSm",
  "key24": "4NNxX4SF74gmjFgXUbkT9zWvjSL6owE4pBB4Sf8rNrZwMNev11dLmDUviRmeqxfjrrjPnuMRPVPhErSxFjSP8EWX",
  "key25": "4GSLEw3if7bnPAJqsD3edgMHMEGJDNVsAMFjFjtxYWPpEDNrGsafY4uicQX1WbQqKqDtyrmkrgXXnb1i8YSd5duj",
  "key26": "mNiAQhasHVcNBTkW49JfegYHpkaoDWMfwg7k4WuAjVGp6xAZFF2zMZxBrhZV9XeAAix5jUGJ8wxg3xe1ahK7fjh",
  "key27": "pvta9wbWJGhvo6SuWJgvUJsSk4rVuff2sjKdyiHcVp8MAjortX9Z8nRTrJ8f6SdS5wdg8mtmokmeAzra6wtCq6Y",
  "key28": "2XxpEQm2CxF9Z4wbxNKB2pvC1eW7VWhKdthDpqYHrvVdqba5EK6RVXpZQGMCWUaymt9jmVeeedwJVYssMAYj8DbF",
  "key29": "4DKg8NxN5MVrb3oz9FdAkMFNMwJKAyyybM4DFLG11mUffP8WXf7XzuJDVC4SzbhVuAGFy2hTFLG1zg1Skq765Aac",
  "key30": "5dPKtwgsrET2pisCbG8PFgV94bCXd6Px5spCu1JEADiLjhNgHjmmLRJbgBuPHKdncyUWnABDxamqDLbnfxHcrbQq",
  "key31": "2vKNveoJDK7NxTfw6GDuRNr3ZiaY3i8jUB8ek7iu1Qz7KWDymjWnaArbtS4rh3J4Ei5nu5R2mNzHpEPUbjtraDcd",
  "key32": "BnzBt2DapsYBYnGpTqqVcczMnZ2A95BXh3H8VoNQkXHdYq2Lc2oAiSNAAxwHSd956CBQ88JUwCLmcCDCEgq8jte",
  "key33": "SERkudYARZbeme9YhAqce9oTVMQh52LPN3eqMEDk8ykZbhmpVvFtfyehySHt2AzKZK2DdpMxhsfu1zmVatCrK5B",
  "key34": "5e7ePdqMNTnbuXcTRM8N8ZY5dEvwnj6tD1QjZtHdKMqiDpbgPMiLMABT2EiFnug6RJfQuZkqLQGFYiEvsAnqxgtk",
  "key35": "2aabwZUi44xhUcEdqAz3pFvAiwWpd8cn5v9k2MicfBqsiDvMxoz5kdsv9Z8mbsCdJo5dNeuuuB86DNYBnXADjREF",
  "key36": "US1bXdo9dGbi93fanBXFb4ohiU1RCK45bjem9vGNLwTA3t4cFgh8adYUfBU3ZdEDY4DeWMBpTcFtU4xn67ZoqTm",
  "key37": "3bkpAor4AfQkbXTe363FwZRx5DzyzHUjhvLQhTr9nSmVK39HF5CVpMJp6zHSKH23mK2TLaVwUtmcuLAFmG93Hpoh",
  "key38": "5VLcbBVnQ8fCBkNYPuPJP4f7CLMrshkQE3vm4Ge9cY4AgNJa7Mn1noQm4pjfmUatAFYEzXHveqZp5DiEZ6v4Sv7V",
  "key39": "3EGXLjCrSDMd288e27qsvXz54CU4cnDUjUgYJ6ioFJVGaxismz9ApZfBVEqDVT7cQ3xo54s1ndwFVX4dXaqnfoxs",
  "key40": "5U2Lunz5sUiyaTMm3LKPYXW9UbCkL6KL4YmWHzGcVdEgFyERVTE1mbAkWkT9awH38kiGXKyKJFqi1DQG3mB3h7kY",
  "key41": "2Cjxw4Nw3VKJ462iu1NzaL4Xq9imM3HAy2FwVCZENpxRSk3H1GSpnfujkuF772kB2CQwJ3W3b19Pk6JgCWCpyBTx",
  "key42": "5uFx92aYEWeHumgcogFUrRqGkR18gAzF3VSCdaCoHMLBWYznPfTtdHGXe7c5VwcsnPH7upshv6XhcGk2a3sx69dt",
  "key43": "jTzBcyshdQisokBb9S36yPQ8xCwNA1aRMrrdZS21eeLCYSwK3A1VCchT4dEkQBwhX8QFbLEYfDbpGoVCvAsuSCe",
  "key44": "CRksSkfKyh35ztyfKcAWzrkgSbX7PTkJj64qKJTBB7L6KD5Heqo9enR3BiG8YF1G2qGCtu5Gw9kiutHN1YPQpFM",
  "key45": "4dkPe6uNbBwLvoySwht8nkohWhNnVXiHUAQRDP4mi5pujFRV5HcxKHLPWf4nzVqEHnZ3BHxNdPffoFkJc83QvxzC"
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
