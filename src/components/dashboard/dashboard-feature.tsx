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
    "3NU5uGrFiqCVPm2Q44Lewf4z1g8hPAp9Hsw8ZEWdTHLHLJgGpfJTohQEyAheWmrjUU3VHVnSoyPpG2dTtnQRuLno"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jS7KV96uDbDNd1q285mvPoqh4bQqp7LQdD5KnqSKtzK92MhF9NcY8WnJovGmgz7BS7f3aLmHb3rd6sStfJJkRdb",
  "key1": "5CRzVhTzDwioiwkaPF13n1ZdYYZ4U63Ws499ZYxT8m8nHWVGLR4NuaYgEwM1kmvmH7G1btex36TKF9XLj8YbQ3GV",
  "key2": "38mTNMJaQXscjWNuvHEapXr9xPjL9jiZ9mC1E5B53KW9i37su4eCTJzdcRAJPjXXaGgi8rNggTFGZcNvPtpgxhv2",
  "key3": "zwQ3Y32rYU8KxUqgDuhA5xUJXraD9K4bqXmXUgD4cnH5KtdM4UVeZZVpT46tV1G1mFVAbMVRso7W2A3crVx8rgT",
  "key4": "2RBy2yJJh7axkLuVU8fRm9hKWASqvjrsTKTZXEEzb6ZKaTrTsxcqGrrEbyvPmyh1Q3SnYuRzypDZacRdVwCmavfQ",
  "key5": "2NbyuWD9trPe5GYpcBwHgw14VB6kE6EPRZVBAnWEKhwEBYgi1h6ZydZrKdpB2NS91j1wGubghY1AVW9iNVe47iyC",
  "key6": "32rEdpt6NCCXHeh7dYtwbGNod9uhFKJUWKdBEMXwkriUk5xLSEQEooDF7NHHj1tPeAn1HYmCbQARK4KtFp62aMsJ",
  "key7": "3uk87vrzS6bKCHqzaRykWrmZ3SZwLVgjZ6w6RuBpfiVyBWzFrYvhG84winWdBnbM5FZ8xHhWBa6ve1B6rp96qXwK",
  "key8": "5QcYP2nzzYFJ1cJq3wnP4imbFruSABYcLdkJnY1UXfrrdtQGom6qMyLA4yvXQ1AJXD9HQ1vMDkPACwah1ejzUHtn",
  "key9": "3qEmv5Mybwg6wmhb72PFgnRUTh4D92dZbrMLEo2YVh9RyvQn6Je5Wj9Ht32vXacSxLQQeoQVKps4S8R9iyx89sQL",
  "key10": "357oXzurhKXobxEFPouH3uDyaxg6PFa2yWXhCExtct6AyMvTJEAu8w436K6pML1ULz32Ch1cimGKXC9aTZk5K4CQ",
  "key11": "2RNhoT43EYy4Ls8drjTkm4jVrSKvbZnnTXZ7aJZsWEuT5jujmfm8hgkYSEzoPwTBo6mfyDGK2dkCnh9Q17T4rN1u",
  "key12": "4GEyAiyAETjMsEHx636dtsX6nWLPGA37s7dgkUsR9GtqhUesx16Md254HsVHYk8yShziAgLKotpM2kAkTwDQcWeL",
  "key13": "3tb35uqQbAShbyDqfc9aWzm8LdZRwprUF98mU5SF8VD83yESV1ZsGtcyouYtQVpQRFaRhg9nugabGuf9iqdv163t",
  "key14": "3aan8nTkszdohHrgzZDu5fxLJKhdkAi6DbuhBbhdCZxPiVxJw4BargabgvkxguNZjsCgs58yVDeX75TYDWBhQhyq",
  "key15": "4EqMp2quv8UQmgvvZr3yAcT7D95XHzxmFk1SX9LSofq9nQN7rVN45mNZXhs779Si9v681jWZhZkf3SBh8zTKc17E",
  "key16": "n1Sa1zHkLntsQJv8TiNtsQyHf8BLvPoDJebW4EjNCiseGKGviAsMN1H3Ldiyu8avfAfp9EbCJ3b1FMpvxreMSmC",
  "key17": "2U2t42FiywxCPUwCJEJsjDWD6hZpSr5Yy548BCT86bANLj2NWumHimbcSKw6DsMWrKwjqRwGRTLyZzYp5oP95WWN",
  "key18": "2DLU9sYZRXnBm58pGmPi2PqMRYto7UCezVZpwZxLtmgRqRAy5PABR1GSVZQ1buatDMKttPkHUq147hYuFCUqG9dk",
  "key19": "5QBXX3RQTjzX82Et6LCQA6g16bjkrawqhvG2BAzwLjPEux3jg8zdBSZxkau4NkiXuPw7W2JJ8SgiaeuHfaLWfKGR",
  "key20": "4TJe8dQKkgSZbLvEuXkJUVRGN9z7tVZrvCnnmMs5AJjxWUKe3sEkvVr2TEgMQXDnAyarar4jCuc54vWbHKTViUAA",
  "key21": "45BoB77uQwGpsNs239jnpcWDqnFQNGGWSjXtgvPr5BCCP4MEwEqaqx7nMMpY13JM2tNVFPJXBpRNuVv8rkhy5ZXC",
  "key22": "akaM2URZmqaBjo5ZggjDtWpM1D1zpvDrdxP4d8p3xLSjGAQi7KuMDsLC9PrBWJfVxivsYrWrZ2mu4HMSe5CHaDu",
  "key23": "5c1GZNqz3frVBuNTKvCf7Mnb2iihfav9DwkkGEfE8z19ZTzSSgbtiXjyD8ZNHAPPyAR6FaMCGhzxbdmErESpC12T",
  "key24": "3FTfBJzLW6k8h9ghQzMpK1Zae1Enepx8XhdRdpQHeGuNW9yqUaFRHceySnnp4HYuishtBufWuVmkxePs8n8EAUDq",
  "key25": "2HkEHoF5BMT7Mw4kd9VHfavy5dBxWchqs1iux9JyKeVsojgY5xiDKvbJkaEedBtpgDH3NTZXnGgcV8agjUSo2SLN",
  "key26": "JjWvnFqfPwziqNtM3pQgwEkzhwSr8sRL9Z5BAnhYrdm4pgkD7EjfzfFy63L9PYbHGWnuuxsf52gwk6XuJQfLkMP",
  "key27": "5TWVRTjHByegCGehEpR9F4gUfP4LkjRWdVtNPRW7CmczUWdT1ikNb963anDMF9uBuVAsEGbizbxTKjUTS1moVDu1",
  "key28": "2MnHN8rLV3k3RB5HzHqCMAKbsCiqNVGp48c39SvzrfUMkexWkeGXV3j4nPnupwewNppFmYen6LVK5eXoiGosQA58",
  "key29": "5nmAGeBJmRhjRzFqtP1KWdPrkWmTLo9tsPzA8DYMJGmyKkzCg659TWMPXXm2Q3wPtU814iHp79rwRM9gwLm1gjxf",
  "key30": "2ixLrjHD2dsNG4GBePjiVHVLKGJ4VDUXaPjYjobzqY28DxktMWDH3spy4unTqkc8fBqHfw1zmHFws6Vuu91mkHyn",
  "key31": "2Dp39vEqcmJRKNg14fTxEGMiq6tz3RkH4e6UYK7DBcg3wBu3Qzzn4WrcNgGFsPfynv9YGevzZZQBfNiUdoHMaX4Q",
  "key32": "2yf7vrabubXhwULRZW81NPvB9U6DKWa9QqZ1Wcak6rahNNh8U2ZjY2WjpzXJaJ68nCkJfjtJWDq7qagNM3LcwEKu",
  "key33": "aLTWdsMrBjv8qNBqA3eWBxLhnGeU73m5to3fC3dMFfCpWnMKFhpZuiVkbkH6Nh5gvigV5wNf3LzX8GJkXFHhG64",
  "key34": "3wwTyhKjNXgcBjvwCscbiSv3bje2VJNrrbRYaC3sqYFbmmo5p1iqseVX9Y4vS2ieHfjLuyxrZCGez5FdJhGhj46u",
  "key35": "3ETMxtjzGazhDs6RsNHDvzEizKq9uiqLhCn7hvcpT4LzFDkv6BVKctJiC98gwLdYhCTyj4WRUKsxTR53Hi6aLiqJ"
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
