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
    "51XBMKUxp44M1K3sLQJKRvRoMVAKUxcuZ8FpKWpc3Vvd2GzKCYtnu9KBRN7nzdLWQFiAHsP7YgSDY78brsPn1AJT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51ihegFbngwfPP19PzS5Pb3Li9qijnChrkKKSgXNXMNA5B8V9oZiC4RqTAJ3KcDfrN9rD1ACd8iaUhnUfWkxGpHJ",
  "key1": "5Rc6S8JuC7tuCpxhBeyyhUvqy1xLipjckVYAsU51VXQzW32vkQP3YWQZcX23X6DhntyqtUvVod9rTtgsEJZtAJ1d",
  "key2": "39A884a7y3sTLNVVRbZpkP29Fqy94GjFpYFA5MR3Yuu2i4JvTmdq3GYudEpExacuw4j1fnviWSJ5y7d7acC4XK62",
  "key3": "pc6VSxRh93oJzDSRDx7wjJiMkqRrCevM5z7xTHRRaFUibjwWS75z74rfUMSyN6uX4npMm97XPspErHkf5WvsAh6",
  "key4": "2xjUMQE1ezsEieAQFnnhyKrkETU74ucgawwtCn9vMTw7RcJz664cfSpfUTbqErXHFxXcQ1Ynyh5sWLBgXTDz6WyM",
  "key5": "ferCuTXu9GkuhuHasYt4fg6zxNrk96W41HbmrksWg6uCw8qsYqC2AvDh4pMtQrfsqpzNxPqrtwuspmyjRSjdewu",
  "key6": "4Sg89iEQo1KcSUbNPVkxpTbtjbVf1Z3BNwTcqrU3LmtHVCUc2Cwtj1D367UuWbanq4sAF4HDuLta1hvmNDSj2s2S",
  "key7": "5RxfBTrUQmDCyBRjLhRtTobSxwofYjtd9oWX7Kw36DniXUDBRErs6fXS7FBayAy61SUwA2UVHtMabYxKTYtjRMzG",
  "key8": "XGNTSagcYxcqJMwXN5SxVsycu1Uxqx33ffUB4fELLiZxnFaDR7E2YLjaHu445Kch3NzPM2ysXT2KiM4VtUjnEQ4",
  "key9": "3rHWScQgnx3iyPHKeHY4g4sMiZcdS5iK7satkZuTUW8WjqBcWxpv2jRojXZhMVYZTwBTsYz7JhPsNs7kXgLg4XKi",
  "key10": "2UJyiD9ErSgZMzdQPcWrXbqqVUsH4XQW7aM72tRSUcigFhxd9xyQ3VVz3NpESLe42paKmyZ6oJR2srXHm2Zaxc1C",
  "key11": "EwZvYfjDb7Yqujz8mZPFXVLYqtKRxfdr6txSeaMBYCin4nHoDNAhqcHsapCGkZvvuxkQ64tCaprjJ1x6AwPxsWk",
  "key12": "uDWan27Cmd6yErvFCHZLWUPQALa94yfH33HiGXya79txKSduDRTJa2FAhNP5jhYyGoZRw7pcALv4T9MmM7PzEEj",
  "key13": "4b9zP7QxdpsffRiLjHydX2U5CzMvguP2A7KyXncgcjQjcvhNXUwk2Wt81BVvyw2BXsqV9wWMvaMiBhuuTaT69LP5",
  "key14": "2uuomDCfbDDiTyEcPdyHGYbTvXC3CV3rVcLT8SNqEXDQN6GMu3q5tKQGPgAs2xbCBQoHD5Z4x66LEeJn7oNwtgPQ",
  "key15": "4zLsRvXnCaPFnq1fm7wfzxb8yUHMRu4LjRXL64euXy8o3M8qSEt63UhJTTtAqDZYAvr4jUrheeiSZu7czXcg6ufc",
  "key16": "27fArtck67gpd35PQzr5MUEeCsc9uVpUFWBg7cxJ3vCmxb7qcmt5dY661D6qQgPeBkGi5D6HfAPFKtLjYxGK1fJX",
  "key17": "3yDeHAV9vXHLg3dkSs4Gmn5GJGJYh5z4RFcd8fMk6S4JPFeLcHKYMo7ya1t6SuUa7pRaQCe4QfwkiLRg6Bkdr6oi",
  "key18": "2cWBkDCXHn9ZiA61qcAETEphsy2f8PgCbw82wnuMmn2B2PbGw5E28u7MLh79PxZLKH9p8XdiUvHfh9HXNmPa5E6p",
  "key19": "5eJ9r19ShmNiTtBdsnHvNHy8f2HsKxCtbiecjVMPdFhFRe6SGiJhPpnKqdy4gSSffmGiPDa65RssDJKxrjMw8oZY",
  "key20": "PeD7SpMvNE1y2y8APu4QdoWRwH7Vf3mRtTArYJfc7VcmDpoU9Fqnnec8HKzmYuTnCDpGdxN5P2FU6Ujt6dT8GEo",
  "key21": "2RBBTXeaVNxv5KpC91AW3UFemERQtNTh4dFA7SRXMhNoYpu2tUkSsF269RmM3i1e4zFRrus5UV195VTrDj2cDeAR",
  "key22": "5LazHUftG5mMgWSFKJ3S2kAqeEroo353VE9hnNnvSPTH8esVTK1FT831Y1TdwPftHd1PfjyFRFXuZZcgGehwhxYW",
  "key23": "24DReGEi4A14uiA8FRs44o2SCXBJ8bns9aYBewESSPAoeUJCjAHQ5y8WicTYQyBHbNr6iDEq2AAqKqPAtCE3Mfcc",
  "key24": "32rAB4K7QwcQmbxLqmKRnv5cYVENDbkSaoVq554i6FXPFozhcnXZrYRzscc4ADBLCTqAbjeMXrGdDRigP28wRdfF",
  "key25": "7J52xnJ3m5aE8R4Ujkgh2T4BWHeyXSUvJqkgKyCtWJnY9u9KjnR3PhDjRx2cUMQT5S7hXo1LYDzw23WAuz2Emtu",
  "key26": "fsVgN4ALrGdkAMJoZcfZ8Kq1oummKKZgQFjcKjNNYvg9UeUV29g6FPE7S66Kmwv2vXh8sS2wu9LFyptWA2tVPDR",
  "key27": "4qxR1rNf88W34Cv6zAx4v8NXbYZaEieJUQgEAEKXupZ7k9heJVjRpExJFWRDWSkpDbAWBDsm8CbPsTzr5BVcp2Xb",
  "key28": "4Vk9SwD77WDTTqaQdRAPFQNZtDbJRt7Qchd1DmMNZxs7qWeaGMLQEGxT5sbs11sSh9xx1pcV8UGdHHV9RFugYNYW",
  "key29": "3AJ34KgEXydkG9awuGNnrNb7Uoa3gqLxCM71hKLv77UR3Di8r4xdvKt8MibD787Z36NXb6RCZJwy2SgrXs844zKY",
  "key30": "3XYxhrCxqbWbJAcwLhHU6qS8WdDXDDJCsh9HmpF11a3K87NPBVsccMuKCiTkmeJ1t6LXUeTYWzb3zrzgUtnLWRxX",
  "key31": "WPJEEciwuEFxxL9q4YPaAHfeWuhkBUCyaQg3FR34vQ2YBdE5m9Dz1HQnnBg2rHTuDW71SmiW63MGYpAw8FxZh7Q",
  "key32": "XWNT5ztpwVX8gu6Be2vTkzsWehS9ZHGrXfNzUkS3XCFccKsjMXYdt1fMhfUUjSQ1vJXiydYuVRTG5ehw1PYHqYo",
  "key33": "4PK71bF5rQeBk9HeJ6vvrDk1VLy4oz51MhEDGKHJ7gtAo2FJmPBfiZXVZnFTqyFq9fKMQFeBR61f14qCtYrpyobL",
  "key34": "5EtwiWhta7KxgAdaujsJ61RbgJaGgKd15t1gFQ5UzUV4V6Sqri88sewXsJnggni46LzdXuNT2m84ZwYMCGZG8Ayz",
  "key35": "3jm5uPGS2Va7QC7ZdvwedNUxfVCZbszdTkTBySLHz1L6eRY7URaQULcjLSBXF32SAR8vszWTNJSzcQ4wewreWZQd",
  "key36": "8C8mUMqSsV2EKhJ5anJvexN7ZYht35uw5gPxKxUzbP9Rp1iGdvV9DnZD5Zh1syoh5zzSePiLNZ6njXoGvXJ4m74",
  "key37": "5UQ7KJjRM8pi1dgp8Q5cXTCDyBB3ZyVfXYtvwXiza6rpV19CCAwgEY3jEdFqFmEm6ZzJP9NN4tjiNb1dUyY7kGQj",
  "key38": "5iCYM8C47ZjVyMhJFEVATscsPsvznMdMUuQFLoxuJKocCzYmGPGp3ZvaDNURspzWygqKgMrARYw883HfdRiCMRjV",
  "key39": "5xawSphqXFkbuZWTTGgZEuGnh2EohiUNLAua1WpqGCdPwKs1xUo1s31hYSWq6wWD7uauKvSwBY3YWPSx3vtbFyQC",
  "key40": "jCFtGjLZB4PVH2Sd6ap95E2eoFdWqhEbHY9dW7aBjGfcBXGFN7aHLW4aqrKDnH9kFfD9kxqkpikG917jRkpw98b",
  "key41": "3kMaEFZt5LWfXfrxEoMQyeYrwfNYKcNkT5gTAW9CWhce6UrUVS6tUnc8N4qjSWq5k8SX95mDzdWicNtpBX1LuPiz",
  "key42": "kmqefvwg9gcBUdTMaGVGRVoo2VnpQMKvdjopM53Xy5n2ub8UPq248YzbvYYtRK4squkiPkPcbXgh2vuxcv2XTc4"
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
