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
    "Fx4c68yafLV5S3wBV1uFhnJXvvkUdzCu2FuCnLJEUVrUBionsfsP4tDFVPVYy8mqsbGknKy8WyzMbqnHZwbsXWi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4W4RFsm2jw8RxbYdTeM1aJDUzNpuojop6kTYRoKbt62DmApefLMa87Bqac72wZf8oszr8Ga2SdeTY2Grqih9nKt4",
  "key1": "2i8E7XZjyA22RTJLYZm1z8iroyG1nCknJ5qKpqERrDubZRtkgkboHuU9NwLCo75zFAHAvM1vK7xMgApN7VnELxEm",
  "key2": "36ktc6uHpFFiWUHpy5imnvaGmL6KxicZQjNZDMsZmmXpwTVLX6vmnNCNTKgqBJmGBorb6TLsMEUZFDs3UKQ5rwJJ",
  "key3": "J2Sjafxqy6PVVsDVvy3ugnUkwxvudryyoNA7PfWKpJM1mv8EJLowc5CgNoM1duJRUYK9pH85nSqMACB6f4Ld7gf",
  "key4": "44c38zLcEL6EghSa76x7gb5fDmZvgEH2dS8ZuJXwdmYADQ7SaBfZ2CwZx2UviVbSHjJKvyDYkPjwHooGa9ftyY6c",
  "key5": "3XntCLv9zzhWrEDLfcPLKpruSB3J4oKrehnYL9wbT9oV6aLA6349aGKcwWmZoo4MsNtJA8j91LCCejLcBybtQDDP",
  "key6": "4FwjrGkD2EctfsnVozRnoa4UufxJdKyiNXVaR1eZBLU55ogrv6BiHMiUqAWepc8MyEPbeqnLWKvQfeU3nAWoVwFK",
  "key7": "3mjiotxnoWhxJMwXSZsVyxJDMo6pqgVXjjwmGZgdUVLkRSQmQhhpYzZv1VitvdW9mHxuyQP65X95yctQTYisy8Jp",
  "key8": "4jUtRdNFX29AMBwmhGaA4ZANkr8sGu9P7qoftn4J819VzzUoCFXMPWgn7Zr8zD1esuQTEKgh86RnKUax4TFHgdh2",
  "key9": "5caqw3dhqqBmsJMraX2BL6CzLYgwxcuQagVQqJ1sWkBnuEzEMd8fSue9jdgZbhqFBfQTU9nrgjPM9GYC1gndQgGY",
  "key10": "2d69sYyM4VTFxSgurcEgpEneDUnwtRhKqvmtkx1puezSLq5EyRJ3vir4ByCMw7ogckjHJs9BxJXpgotBBkJqUHSZ",
  "key11": "615FPaqCnBn7h5Jp2YPyFwgRCxkLynPSVpxUZmvrxhpEbFuD6PonGmdFUguu7MzAQTvPi6H2VQPSvP8FokbW9qEx",
  "key12": "22PpU5ZcGbP86kLcvVtPUXiRFVKZ7T7AnoVDSuV5USWioc23i7T6gTKc3TMgenyy9bbjvFjShrP8wA7Aup2RcR1n",
  "key13": "4HAUbUD6NiFSxg34FG8nyusS4XT3PTHbEX835d4JswMFMpku8bwL2aFxhPy46S2J8uJXXq6kmRBdQsub74bbZrFc",
  "key14": "3gWv3F8yxKoieZz1J5AbF4xMcmHQGo7s1a2Ay29FRJ7ArSJWypRfF18k2xYyRFjseyBT9Kvrf59k8kVk5d4vgVYi",
  "key15": "3N8p7NSDP5epqs8EtWAGYA4JguhEUFri4p65mmK69J1ZDzrzbtt7sw4GHdUTbjU1bHJdHLfjSdG73wfz1eyfYpc6",
  "key16": "3d77wMP7TyQbkfNRcFgAoMfkr8xcxkUWXji7WoNfB4q3dbRgvjt96gHL1WSDb2UizUmH14PZHE1NDkeDssnbUtUZ",
  "key17": "oi9cC6yDzxz1bXJ8yRYEbhwps5CPqCHWdycQd9Agr8VzJ7FUgJJbeG9hveDrVHZ1ttWwGNEKXp2HFpF8NEn6tk5",
  "key18": "651sET9QpW6faN1zAtcLfgbDxuczX8Li7JgdHMy2oLBAfBghT4wfnZ5Fyq1S8cNFDZMgxr6xCDeQw1LhzuDwhwiq",
  "key19": "44ezn6TFBmYuXPCzHDKtKvmVPEJPRkam1WFbJzQz9yrXpGUyKfhZrYvLYggm1mfBJk31yZ6KFa8QYu5kFwGe4YgF",
  "key20": "2XNnwfDkzWRZRUeDd23QRP57iEiSqp8Um9q6Z7ZZR3ZkHC9Uz8APb5dnEZhFKqxJMPyB6jVG2kudAJTAquBQZTBj",
  "key21": "2tWN3YeviBKmKwqdakC3jFWzc2G9wjuFpT4TcBKEXwqagLxF2BxPHX85QCJ6LaiwcbXFJLAZ9cEskaF8nJErFsCp",
  "key22": "EVgMD9CXLSGEWo2vHY4HBFhtuAjWLJDwSj9uAXgHygnQcw2RkJkx9fqTQvFnvVhdrptCd1J6tBTvGmme2vzf8DZ",
  "key23": "3T8ZxZehnTrJaBBnxWqbH6bBWtXpSjL6h9BBinMPNc5UrbWzMNDFXKuJcGqj9QzvwsZeT9dmBPxyqpedvRtV1Tnb",
  "key24": "53oLjGFS4tX9bJrjPMcHgNdeepKMjorejn53fYN3HTsJrnJdXmHRjxGzsp5WPKU212iDDYmBxhYpUeXz7i6JWmQk",
  "key25": "3kWVFtgMsDUqJzLRcfxa1Kp4ojoeyNGTxTgouYRE3spHdfkuc1N6roptpba7rXjDuqvzixejqQFQ31w85bVUmtw6",
  "key26": "YZ4TwxCminZhgnZp3qefnm8wHmNziwZ4Hsv9J3wehSG52aAS7Goy94SK7sHeQnPWgZnDFrnRx83E91xAX5wyz2d",
  "key27": "BVLUcyzqfu4Q8FYMZBGbMYUBwCkXydBSRropKG2bgoU21dM41sEnkjjfW16suYQCKZfbmYWFyWYCCpyTLyn2rtN",
  "key28": "3cvb2SvyqBZet1J7n37mtU9WfyJBzG89UHDJgUdbt4YqmGPK4F43Ki6TyTQjMWZEp3oe3J3ArHRz32Jc4ycVktFN",
  "key29": "4mHbvR3AgFuAXbQ49pZ4EiXCejdbDkmyUNFG2k4taLyxoLrGsRmMATkPBimiQwaQthZe9qxWJxV4upQqQNF1uuYe",
  "key30": "2ZA4adJxfQynJm9tn3d5Ckb6wDkt9j4GcQs3nDKQ1Si4PKn4mJz7af1AZiv77mVuUSNivcUxDg1TFZYBseRp3U2M",
  "key31": "5Yrpk8wvz6E7DNNXr6z5ZFpzwXtZnr635N7e9hwAnYNZvwD9dAEFik7oNtAHAyXS4q5xhovPNS5uGMrb93QMSgvV",
  "key32": "3RPHhoTTk8dWfPsDqwvMjP38gyja5kd79dEcTBEDpbFrjqNyyNiYuJGK3fbsNM2hDgWxw6kSWhSSUW671Eiy4h2v",
  "key33": "4a9xVSN5dM7sS9jzGc8XW9CQWQEX5mKkpQJsGBcN5qQBPbiDv2gUkfxUzoJxpK778EXLDzCfVN1NeGtw5U4gRgVL",
  "key34": "4JJqZJAvnVa9my4BxBX9ALRuizPuZqbiXBmqK9TXyj6km6984PV597a6dxKQU5CaVFGKeTUMdTPc5TpeWAp3xSrq",
  "key35": "5Kd9EDdegEdtAoTnfzHBtFX5Wz1Z4rmgC764SJ1bqFoJR9kjCoEUqWzzhpwFf5cFzN9C47SS98tkL2BUxiHUWLPC",
  "key36": "eR6PXGfDvAVabYPd6kT7Zj7xkkDDuaAzACu9aFnZ4bLGR4tCgqCGqc3iEBDM9MFmp7kNECMeYEqZvXg51mNUFrt",
  "key37": "4zENg7SnbUTSfbtrgLgLPpZaPqS17T7PyigNAWMLYhHef4b3MpD8W8XAvvWEfWXMLC2gHntCg9mqdy6na3sa8VBU",
  "key38": "PvnZRrdR2e4Rad77rAuJJkvZxvjb9HNJY4UStAJgRNdQFVR8i56cAo2APHyjcsbqQN2pgRFsafT8NHXhXtUN3xk"
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
