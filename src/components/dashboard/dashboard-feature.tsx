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
    "5UquyKte9SbcvYACazYVkxy1VzGhLk27y7J7r4v5dm8MYNgQ32bVRrapW9BJBkc49Zb7Ljfa8B3zssJUeZ2HydgJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32dPn8DbVmZmZFKgonWmDQ51kY6xN5yJ7ok8tKtpLqJowPT8RFA6Z6CHXnZhsx7CbzeZH9aaobu8MBFbtbQ16UpT",
  "key1": "3nzT6FnbnUDAhENsoM2JhRRN9qCQX3z7BrHX1vX58nQrycFxcu3SjauvWJhJPn2xX2kaihng2JZpJAe97AFtutcw",
  "key2": "dTVcHD9cmjHHUsDXezaQof88WwHL8RCeAEFLBVbc4zzsts8fiQZjYrQJw7szFvhZcjobPp8ua6YQy7MbAxBTbd7",
  "key3": "3pzyJaSzZSQfEFqhrKXWNiLnSHrYGHHa41S5tDha2kkmRYbN9RfCGMgogcuwSeVuwmnFGhAiS3DVdPuHWYz4knGH",
  "key4": "3sqKNWCGuzqbTC9RrAfGR5VAZo6ncMG8psY32i9h8WsWMGH3hbgzhntg6ZwKWKPdP2TJACt5gKAJaXzsmT9X3nM8",
  "key5": "3bhHWyYPKprv1KMYUkZeiDue9Gn1bA1LuFuPmjVBVL1NjkeHxX9T5nYcQh1nmmheNVrWNncTYLdGYznuYSzkVAoT",
  "key6": "44Ci7JfCzw2zhpxNc6JKs9kwqDa8t142PAuZt7dKsHjnS8gNoEBKNLUCNGWWjHsn69suSmgR9WPn8c2MRFjoGA9F",
  "key7": "miecePdt4jG87R9h8sLSzKyBgpxM1xKE2qp39Xa1rq6njWo424Tye6VyhcrwDM4dEgXwuQeRSnPSauDQ2T9mARb",
  "key8": "KdeqNmKhodd2cBhLAc4NxWb2PzZq5YpgJiApQPn9HMUUZjkrGY3sGZqhf59bUkMcfB2wge38kyYQ2T2jfofGmYi",
  "key9": "23RNgAt6ogWBtrmB3vau168odKFWxvAFWYFdU9xm3FgFF9QGKAzcp94b6iuw6rC5d9rq1XKDUSmqq12ebvNbgu1Y",
  "key10": "4sh3CH2DJtuTsXwMWte3Jn3DMUuDY2xZXJnxTAnTrh78MiDEr8JoDJh4ajihMWRt5WfrbdVUZu9Z61ffGRBJFoSB",
  "key11": "3TdqMLG22vNuTnYTMKP62dxnKcWF86CWNxsVAPNyBRvvChADZdzvkxsU6PjZf14FEz7jq3aws8FFzAVDPCt9a98G",
  "key12": "5UTLQCWG2NghrMDJ3iyqY7HZ7iY75LrUYCWqiHSJX4aHuMq8QrLMpRaG4Zj9FdbeWTJ5i3vJRit5M8qMLsp797Yo",
  "key13": "2tZei4C5q5UcAri5WDCrZx8S61E7iFQYe7UBdtwXZwLQFBjsSeFcoUiP3tgqGAdtunL8DUJtBptJpa9KX7YkCNnJ",
  "key14": "4JttYGnN3iyQTFC37enoUjjtyqbE6fop4qaoVoMX47LXciu1fNnFoJ1oLKGqf2XC3L4iy5SUvTg7jYKQvsF5bCkZ",
  "key15": "5hEej9HAoZNQG2VP2TSSn2ZwiojqTvqYdbwhmdDo843L5FxT9c9ShmGCPy6N9CHa74NPn4cx3JhjtBBkCtHKxQ92",
  "key16": "47qfrduNBY2buijXQQDoUMG34EqufV9zLgPLeiA5UJEanHaedHb54H28fFRbC79uqwVzB4NoT1HaooD47tRVSS3i",
  "key17": "4ouE2n4wMfzWLgfMvq6NFtUA44zDN8adiJeZVFbH7tTmPJk4GPegynMjEUXJM2NQm1YYwawJZFs2d3hn9t1QE4T9",
  "key18": "4Bq1KTnbiHsNMUcUrfaLNwhEz6DAYr3hVGVJBgxHd5mYRGD5ej6mUbxSDE9Yeu71rQ6uRKcwzz3JMVRqWCgug6qg",
  "key19": "3FViNXZ1fv9Er8uyVcGeWucy15qbpQnhqvqjWLc3YWZNasNhLbQa6ApKr1q4njN4gwY7rE6ggEVpiWbxTJ4FzWtq",
  "key20": "4RWNPw1VSys5Z7gcCGg1pMaGydjZN9VaEMxApbhVGxugfcfZEy8mXF3NQCTpmSPRJws2i856Ujo7X6yoKhVZWJHp",
  "key21": "2y9Dcrj8KxQ2mn4YMFXs4X12NZ8ZdPQfnpnE1q6yiDMsZ2JYCeTvP4q6Ud1ysrz8736CaBRXJydwqjGzTqnkaqVS",
  "key22": "NpGRhSgSwbJyPQnEPZCXDfMvYeKYspiaC5ntfVvzWRakHHizd3krQ5DrvCdMFdHdvMP2g3P6hESf6zb7oMJiNPq",
  "key23": "2moFRXXdkPwGUJfHbE39Z8gF3Qtx9ACcLWMujZogcNt9g7Y5HCST9ok1iRWhTpfvFwQikxvvosGzXDtcLkzvLjpg",
  "key24": "2j5KzWmfnicTrF855hRuZk4Jx7hR5hss7pQMDsiMkp5oqNk63sz47AvnCEE7WDXhZw39eCFaczEyKX3xgQRZCW3v",
  "key25": "33J7Uu7RLzCyBjX8W8Pbj1Y4yBa37XZxMtRctRMQ3enmTq9wFG3iGu8jywFkGzgSXzHGsd7otsM6ZvN1Cs2LX5Gd",
  "key26": "5TUWf5fFhbAr9vfzrBJzWT3kCWGbfAMCk4wsYiDjyfxiYUzo9vSKrvurzU1cVu6ZU9cQYJWbsGArzr78CTg6cGK5",
  "key27": "28Nk8WxoipwwmFfFfLysJu3BvuYgZZVRz6SbV8BRfyK4q6k4XaBe3YQ129jbNF8tYpDJNrD2KVgVGypX1MrLg1UP",
  "key28": "2J7Wa1uiLeyZkXW1uFwmmmoxUPPPpoo8iSrkMru4Nj7QUpdheA4iAZoRoRMWBmMDJFuzhDBuk7adRt7L1dPiEAxW",
  "key29": "2qKDJjXffTWcw3hMSmVxftr4zWgisgxj8XhwrMsBtwvxgcYG3CrqXcyiKbBkig26cowJq6NSveSoiY43rtpNuZcd",
  "key30": "5mZzowdPd2Q9dBo3icmiwtcqU7x8p51CDp8BZNeizcqzBn8UdnhTK3EteuHmxGVR7EcJCm47TorCdzZHAD9vaErx",
  "key31": "gEU3agB3PxT4RKAny6Qkdxvy6mRy61wqNWzCnrcCpCXZAiuXQVDBfwmVv6mUPqKP3VjiZse6B2ZBWjpqfh5ctjM",
  "key32": "3iFewNhBHsjW8cdgYYFHZD8EsF2Rj3HufDMoonGKV93TNHDniqxngk3oqZafreT7q1f6XjzJ8FhZ7bZNAmBhbSRi",
  "key33": "2XSTynDN7yuX7Mh3izYM2628kY9N69LvYrobzwXH9fAy2kyMZXTNm5HzAEZqBHwmcy1mU4sbSLStp9RzFeBYso85",
  "key34": "VvQXyMM2EyDG8FRocax9M4EB4EHQtvdxvBo3fdXchHEMWrv5TaDpZGGNwTwwt4kKKuJs8kqNBHTPfWUyGdkg6h1",
  "key35": "32WGL2ffsCg3dFrPCY1KXH8ydP9JVgfo664UzWYoe2zg7XDYmfLZRxDhTbmJDyNNa2UTa2jphZxCyRMns3zFjnA8",
  "key36": "4F6nRMKcDxWUqZHXLcBiP7vtFi4p3nWqMDoFhghxJxkGjL93esgnqscfAfFRSXYc5Z442wS6dssFhTxjp3oV9Ynb",
  "key37": "2u7UV5fv4TGTWFzirYGqNMXMdSs7kBwUBdDEBoCryGiEHyr1sZGoGZCJ7KQbLSLoEb1AoMCFcqEzQJZGZj8vhe5a",
  "key38": "4atZyFcC3fQoQEufMUa9QZLZNqg41jsznJPQ3zucXvQHCtgMP9PELaveJfGGvXUnSk1CHdaKDZiuJjEMep3E6BUm",
  "key39": "4BBzCkzzFMgUPhr7JxvgARTUsHQxrRdZrdETE8AibNP93ZQtPaLDURkkjhNaUzUKrFnqnrTsJa4da8wjuyzjUeWL",
  "key40": "7iuLoMLmyW7DyVxBCsqiH5hJB7DSXJSh9JsZrv1EnZ3ASv5xHxMkg9uwMpiTsU5i9frdU57sJ4UYiFWe1aSZ8rx"
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
