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
    "3j67ApuWVcGLqXFr9oYjiTv6sy1hAQgZ31nGPniCgMGXYXMtHLGB266S7AA8hFtY7zi56ha8QmPTatmKb7jXuYbs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4MGSpyjGDLkXqf2Sn95rcdspUfCNucLDfuWQXdMyy4aEuC8X8qyhMnQFVPmEWPeDiZMMzb2P9wHmKSbMRZyebuy4",
  "key1": "5NK8xJgfEsov2hyzUbFRnL5FvDJp7fpko7r9nMZif1fqUc3zoCwZ8GorsUw4n1g6aNSX4GXaCXBCWweo9ZFgYsbH",
  "key2": "64WmHmnkEKkqe2ookUwnREqzSPDHytMijQHqsc7j4pxDGqaLeD1DL2oRwFwPMxucSPhFa77491YRATTDcsBj7evZ",
  "key3": "5m9kwXsQPrP5kW72JVrNUYFsSQpzShUdgrueCzF6wpDhFZp3iwovvDQxNuHusN7r9LYZyhb6L3e7qwNybkpnvavG",
  "key4": "3KgTd4nyFJ2N3FLmYvQeCsLGMfaG3VYQnaHCuMk1Mdf3WayYRWHaRYfHXr9fC8p6G176zHLA7esjrazZxLfvgYwn",
  "key5": "3iGqh7gE3P1CfYH4yLjCrKXoQVX2HXspQzyhB7DyQTrzaffDvayTSrLCk9ZCyWsex8UK9N3Ji5XvGAH9S75TSE1e",
  "key6": "2RjqHPatveXEu6kK4QAY2ANzcwMn52B4ZPbbR8hR6L8SUG7pwaUmbJoi1q2N616XwWyyNf6M9hweD4R2b1d3Lp4T",
  "key7": "2TYenNswiwRMauw6DXUETzjUB4F974fwbKxVF6jw8Ew3AvSnLpyyN495jMFoHJCBybLUmpaW9UKfjFK1zJkXzruz",
  "key8": "3ZHYMoqF1F6VSBgqoqQJHBC4k8mFhms4RgNFRSDYhUKsY1yP6WCC4rSdUsdRP8Yb7ZUVvuqmyK5DDCAA13F4tAMg",
  "key9": "36x52NiFodkEmds8YCanrb8QbDDbzBQEFiD8xtoQDXc9jKPfNiuRrGLkH5REKCsramxn7gWY4PwVTBPL7zgGJpHB",
  "key10": "3ZG43mDZcd94exgPpAJMeLBtmbtjdgggVmpDKr2x8c7Ysnj99fiMdwipL7LA9pc7HrD2Je7dc5wGNag2M9FeHJ8i",
  "key11": "59xUV8VuPAyhEMrYkmwMLtjvZqe9pZfZio1L8fxLPk5GR5R4j4fFCf4Lso7yHkGQZaichtVmRKKD84e9SbSzApdY",
  "key12": "3RCoizbrdtzMSdrMs2pZiuNy1DEMYUaGB816sviiDyqmpuH3ewdP2Fktxix3NMYpvfbzQFNDGCxkWa34SLH2GyMV",
  "key13": "4vsJkpNzrZWukWjQjyW5wHpJAF8xoFnw9KtmdAmbpVmFAzzs7x6R8UyT637ZJMGgkvsqDVtgv8YKPKp5XrCpDwNw",
  "key14": "5F1PvXKFnHpaGqKQqH3J5dBfSqip32iAMreRpu8sK5CwEowQoUtJCPGzKgzJJMyBa6fQnBm6upnhH2EwN6N5LqtN",
  "key15": "yPmnDuhRyjU5hNW8g3ktKFx1yWkeXj9PjaD3Pv1BEEy9Fze4N35EnPXLjJPUM87Xj3gSJcYUR6zkJzZG7W4eEce",
  "key16": "5bnWVMqCfBK76g7HkeYHTmE6q3LRhXbphWKQfVe6V71HZcgXMr69JoGo2c5Cr718nFUV9LSKJ7G6uEPEo8JRL2io",
  "key17": "59jhFpMdbusm1xLJKeT1TMjJr7i8yM2cRjvpuroUd6NF65GkCi9W3ocxPC5sksWRRpZadpQfrkpZbL4zfsSYuaCu",
  "key18": "32jqedrq3BQiDCH4LjB1RrPwhbLLFhmk33wzimQTUaEm9cdrfU3L7LWu5PVqjzcGprDziCYJWTuxbeBPgFDbGcBm",
  "key19": "2EUBAwBiLcgboBRWmAHRMCmTx4nFy1Jh3KcuwNvcjoxLnvMu3AZyfwR8N6v5C8zzmT6guysDgt2B9hQxG9iBmQcB",
  "key20": "5tHYhX9YpHawXapby9UxHMh27p3VcTdbZ1rpSfMX6XckBumXqruWeHvFS2c3h82ZLE12t3vPNyCK7v1JPLunodje",
  "key21": "45nShf5Zo2CENrXC3jz2ffQ7GGfzZEhM5nbuhKCBWrJSRXXHFM2nAoCzY5WykktXnRfwAn5oF2k9n2RNYPNrmHCi",
  "key22": "3CkJ9nkQ21sjSbudM4N8bbdvnZLrDrqKkYs3YmBMqU86btgxKn6cabUTR55BHRjoPXPDQs3EfAaXVKr7m7FM9wXg",
  "key23": "3oMLNG73YFc8mYfJd1QXysd3YrJmKyfc1gXSqkBTgiDy7v9miE83RQ9ueW2VWrF5NXLhLVYDwajKNsjaMNLSaZD7",
  "key24": "5TzKEsVitZrp4ERrHGiuoJaHqr17yhDXrybMGEWH53w3NU5LqDMhnGoLyDzMhMcKrzhy1XuGp2wGf6cVNixYr4rK",
  "key25": "2PqdqeL2C7apaZx4tyhvMD6GeidB2c6mbjgPQu3BK4LadwAGSBpwWhU8y3fdRAQeBY9nX6HRsc2Rg7fvVRj9BE1o",
  "key26": "6233zLLF9crsQT4AXNKmeCHw23uLsur48BKwFYp1SE2wUkxiuYcdWCMcdwk6JpJX5T6K8LdTpNbJYhXYs8gKSmu8",
  "key27": "3iVpg7wRNjaC5wNferGDk34TbthDkEM6MVS3FiihYCPZWgpxW2tCJAG1pdMrdFKjbjLumb1zJoaVF8Gy8228y6y9",
  "key28": "3Vhw2nCTpFm6rdtjrf4TLHH1CD667tmQzZ8a8NMucEYvYTMJoD5yrf2y7xBpnLhJNTb2YnUCc5TdgRoFzFzJFXHg",
  "key29": "1eg2oTgvVwvbGpLwZuJPPejL5d6964BS9pdV4fSTCYkiqKqA4AbKWR8XubaTKXbdbmTjKeByd9dnGiGCwpoj6ED",
  "key30": "5Vsg7SdnodUAY4eUwq1kPLjdvdxxrhpDe9vSeRjmgVqZR2889cTnvMVmka6FCjnVTeWMAqkwUcibQ9fwEdQNm5Lw",
  "key31": "2t4azkJRemGrpwdpJQ96ufp1encw6R2CMqiUwZcmsUkzmBytWURs2HpL91BZndhBE2NLKN96YFf9V2ymQ7rR2Ym1",
  "key32": "5iyKMcSRwAFnF9JRP4TkdNEsjrb7MA3pLNiZP29VVgGYMcBrRHcgJvqJxpLctc21MATW5Cms74eR5xuoP9PP3mzN",
  "key33": "4kseUHKbgfugYxxsweGrpN6bgozQEhwk5esHQtVwAU1m9f13FrBbBTw7hJ24fgtq55F6VC6qSM9e8tq7DDRANDUD",
  "key34": "5scnPB7wnxy8BHkEV8WG4WL7cpWgcHx22VqoJyBcUNd5YemQ7aPmiNbqr8qMgyrDtEsLAyhLSdBa5DfoSdkogBX3",
  "key35": "3TkLVwh7m6TwXXhBKZutYKQNDoqBJZbkq8w8yHG561APGRa7PYVdFJfTSqSE3zvhUc3wCSxeJHmEYXBj56JYun6x",
  "key36": "2rbqtivNRHsJMdyMh8GumABtc7JrwUhRBwUBYmLxERwuNQQFqm4stWVTt8b9u7fzVVSdkUcKjGvuXcKuPLwrbf28",
  "key37": "2RBWQoXGMdmBJ7XZQhfdn8DtAsznLg2L8tsccxf1Zcs2mu7qGPG5FcCT1jd47KqQDnFuRJ82y7k3zfvKoQ4it89g",
  "key38": "65vyYCU9B5JcDHxKi6dx8ty3osPLqRs6GY8pQ3rvCoNkT182JCpV4B6ZHFkzHYuxFMDKZBrqGYpryg2KNGfiHx2L",
  "key39": "2BXLad1QRJtWq5FCZL2Vk55JNTvhMQcFiVQrvFGwsw7vfvPk57JjatEVRnWtg45nDfiw3brCfRxX5t7ruGN5Qo3N",
  "key40": "5T8HykyWRUG92z8Y3eqKSxiK5c1D6zynPtDnPHRcC75HARP92sFYUX1i4CBAUsofRSYq71xcWbYVhfadVjH1tZkx"
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
