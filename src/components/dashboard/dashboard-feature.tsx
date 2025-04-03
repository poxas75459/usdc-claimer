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
    "4Qr1n4bDdsSvRKGwAnMN2xhM4uaVX54erzVwVvbUAb87QRR3qKJ4ZzcX74cGr94nMmqKqoH3bt9DE6feCJqkhSij"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5G78ZtNBoBbAeQRVJQkic3UEtjfK47jAVSgvPsDWBxTAmo8sgrKzK26nV7823M7dV6K2aaL42E7K476PDN73F4o2",
  "key1": "HqxG4dRgnHodRQ2prt9rqT13AwdZE5GhPvCjujNgmVBLd4trRbZTnRoG3DR5XuKJUBiwqSPLQkxqYFdxhf8Ph8r",
  "key2": "4RGjd2TF46PRVk8JPQcmnDF72hDtAKHnvk5SabsAtBDU2SBEH4rPqp9grfmq35eajn98Kp6Py3ptvqRxdQLMMJ5y",
  "key3": "5BxNYvAw1vjPndJezRyyY4ZNx3Wa79vt8NErkdjBnqgdbYFBr49Pn5ZsBJRfPSWiGNocTNpfPkwy3Bb2NQqK9dE9",
  "key4": "xMJHq4atvmwWcdCi4xWkv17W9dsScZ6ZPecvdF7wEhHC1HcAWVepvuDhQ1PtKcAYX1qcRaYYMwWJf39tiEWJo6b",
  "key5": "2BnZp1j5xTvhC1cn5sdBzdC1YsrR48R9x4Wgy9iyB8Jk7in5qxbfvPdgsxGhv7fFpUFYgYQweeMpD81921v2RZ29",
  "key6": "52uq92HcC62sT55zV21WuFV2JAfAD2J9erB3iy9b8nGRdHfK1GXAV14ffYJE32oXPqpPi8APkacTVTLjjsrhkTjL",
  "key7": "5bcFY72jUL3JM2LbwAqieBReiN7JXUULGZPHvb8kEW5EWwow1dDJq42aSkWjzq9s4463NTTTCnqZHNwnedPz9Dt7",
  "key8": "5xyBHTSnpjf5YgYUt5Cy1t49frs55azv2SXgMSMLVbgNUxFN2SxuR9epwMBnpkWbtQ3st6EmQmQi8i9gexTNkRhG",
  "key9": "XaorKDT4KFghtagHSEdcxYbKm8pxGFpg7NDpkxkNi6oQTL1hYmLr9SxYrc8ZPucNQseUDJrZuzupetFjmxVUbiu",
  "key10": "3soSe3AMZjDNLsRLiYXcingzrgShVfXwFki5gSmypGZEvR8jw3EFwEM8YVBjXFPREvPYGDABSZHwNv2BhDCnDXrk",
  "key11": "srW9dEe5zibeTyyM8QmKcB4Diw41FUbGo7zMSxXohaf4N2KMAb1xfRX7cFGQS4AdZxAYNennvEvNEnpstwZekYy",
  "key12": "3aa2siTFVqxDJygip4TmwcCjPR37h2GKT8WzSywcWAyXbXMvC2drXUsHq55KviA6uB1W39tFvTcX4FvqepqPenFY",
  "key13": "D8w5wAbS3oiXUBupo8p5FQaBKocdnUYD97MKiFfjcE1me2HpmLbRUk7tCBnpu7jyo5tipWA7X6NiJMMoTXp5UJ4",
  "key14": "2sAKGTvXho3UpRkvx3UVYVqhSDsARaMd1brmWE7UrxYCopCbzMwQV78Kks48WZ5eLbDh1CUcaerkSZbj9oJkHJtY",
  "key15": "3geDXwuVqCxLvshwJFokGNYEGLivDuYGv9cVC9QjenqPuXngEozJch9tQJC2VqyanS2KGySVksi3SdUK5wRfeGH1",
  "key16": "3DmVy6p5X3eWEUiKediQr8vSQvNkivM9fK3cgYBqNHbjXospdGZDfd5AKafzzJox56bK9KqYquM2gpUXAwa5NSXh",
  "key17": "3P3P9Q2fyVZck5M9sezTPhV4rxjtNADQbrUVw6oRQ7YXUfbXTRANd6jMVb2TicDX5XzoFWpKh41ADYBaQDDhRc9t",
  "key18": "3EStCLNBg12Awz7LB381uVDfPX4w9tpEmHWJ2D3zpH3zBCQDQq5aaHuRUNcAoCcJi7GBTBrrZDmju6yczwuMnjn6",
  "key19": "5eDqxtfovT2vNCf3yxiNzfbHvb7nP5K5Rmsioxhoeg2q3APdmJEr2HSBomJem6NHwwUg2UkzgSavTMbPPCP5pJoK",
  "key20": "67Y5XCyAKy9Qm7CqnY18FurPRAYcgLHfRUq6Jk3aeKFStvKPUtqFrSvMRR71ztoPShuK135CtY97no3EFMYaQFb6",
  "key21": "37VqtnqHrCXnUad4YQhEcAxSLpmkaVzHZmYG3ed3N7mj2DMBhaqZATRqq43qsxXi7hvE1N725UQM147HmVAFY85Z",
  "key22": "2MbKLmrSkziUvzm2BxLg6JYsaFFed2D75473kSii5gXg83CRYWTQo3QP7v5zE8RdvfW2fpc97eWFauLux4AcuW3w",
  "key23": "2Y6zbGj4m4Tkv6SWkNZC5ZjXswwW22aMko3WCf9HVUyGdURk455rUsFiq1N5ES6SsyS1jt8f3bQaHaJKaRMJZZ28",
  "key24": "5HpvWrPbCUMSjXHuV4dW6FaJPVW5nFHEHdC9h7cAxANgsyH8GVUibu7xQbF9VBFQ1weDYpjTSJEaAhjHgZVwiKAU",
  "key25": "opEYkNyMaJniPJDuJzcEasJsj1zfdarFDYU2Wopx6qZE84UpkaLc6GyzGVxxsskzSYsTsVrMp7S4U4VcShqKPeV",
  "key26": "zC2dw5fJzePCVr5KtTCwhtbbGtLu72PRNdDQBhxXLKS7ANrrx11sybAwydtQCCvGKZtEEdhNFwgVjv19Wt6owb9",
  "key27": "2rjZtzo877ZvbQtgQspzY5WFHybKajD19RoDn8T1QL5Q6uYNf7tsbZPnGr64QinY7jXyGNAdGtRobvQMndvVXLu1",
  "key28": "5ddXVXohYNzU9P8pSXV3M22X2WhBJTi8oa9bhaengVSq538Hk9p7iNDbPQ2cWhBxTC8kpn2PRdTV5okBAGP2U9qv",
  "key29": "49PzdQMudnbpTFret46mu5E1VyqQTvvxX37DyLeAvoPAgtQwDFD5dCNHZk95NzuAtLxmrE6UbM2MCyzN7KCJdJob",
  "key30": "5AuUdvg8RQpQwp3VogisD5y8ZDj61Kd1wVEgBmhEPUGx3X4vMbq6kCXvqECiw34QvFkRX9w1jX565AdZHEvyQvf1",
  "key31": "4VGZSqVoZGmw5Ls2F3FvUQArS122pH3J5s1sjZoDi5GUCfn4tSyMgyKcYBwqgWJywswZjBVqcu5VgR6XrFkzpmzG",
  "key32": "zea4bv7HE1BPTRTFaYWGHdhVQGy35WK7XcumqUaen7vkZES8v3o4SE5NRkJN6dc1GDfoMvXY6TBfqH28XjBjaUS",
  "key33": "2xRR2bVyfnXXVuogV4KEp75YAkd8HE2cVUNSYJEAkpjqp5M3fw8ZNoJJ6KviGP2ScKutZdyXCjJcLnUB1gpreFLs",
  "key34": "4XDzspghC8ySf2gT94xPeLGPr88w2E3aF1QixypMLABazyf4g8esBxHsju1ovccbraZNBR2z2xMSjvotcwBYmcMV",
  "key35": "394CBZX3PWpFGFaBeuhGJchH6LBxFYSBcf8hpirvH46nwCfmJjKHu6KtbVrtd9bKQrRmhgyTnWWDLYLmJUTLEjS9",
  "key36": "4tFNKChMCA4Ep2ypMJNXtamiTE3xVJDkeVFH6wG4Yy6o6Q1X7k4idy9YkZtkthMos4vi7FXMEjfDBx33o2WRDQ6Z",
  "key37": "28Y3SuZ9P3JFMzpNjsLnCXUW4nCWC4P9dUzdgA5t5U6zBd1vuhja7NYZR3qCWZgxG6tc7xggJ3Uuj9kQKpMYjPdG",
  "key38": "3mcYMhA1idsFRkvpjrWuyjBWrohpkEpUyz7WLhEJPuzHJnFr8HeT2WhB3QT1zmtBRQk7bJSQxpqUmUdmQPJBkJ2y",
  "key39": "KnGYVqz6j9GDYGZ9f2XboBb65SYsejb9CnR993NCXFs4zDTmPae2JCeYSBHpFJVx3tEYHfA3gArmrv7FryyDuUy",
  "key40": "35Pqn529yr4u5K6wnhKv4AMX8a8wP6uXTEpZba7CGr5bFtaNBbAttCKJoUAXjwzP34gWmhe8QCeQx1NH7A5JkRwb",
  "key41": "2hX9Bvgyc8QfxLRXuiRMQNdGBmjZkPThquXi2Hkynxwbb6d7zUXkmpViuv22Ew3j4XAxJxVYMm7M4irMmVo7kTQa",
  "key42": "ydeGJJagfn5ny3d9JqApBTML8PuSV5U7YkdiHNre5a26ub5RmFuWATix1BV8J6AVZipArdSxm595NipdkWWhnUM",
  "key43": "2Cy67YCKNTvmDY3kALiQVPCREPsPTxbawh1Nwme5HWDnTwYXwj4pgSv3BEMhvFsQN1vfov8VchtMeaVKJLfMaJSw",
  "key44": "3xsdHYi9fhovRFmMi9jiSYZaV82a6XAHUJqULdEuh3j2UitBfXQdBdvyRcL5AKE9VebYDRPn7ofSCGz2DGvwAUBz",
  "key45": "4Xiveu3mgSVuR65rhvS5hsrVNAgMBbXv2aJ7Cir4JwucjHiywFbTfawEzgTTE5F98ETuHSB11oBx2GQ564Ryc5NY",
  "key46": "4HiVDWhfxo49yjpYgjwrS5WGPrGPprMJvjBSEAGPVyZoyLmPBpiDhPG4uN9gN9PveW74PbBksdrq7PeoFAvDXJB5",
  "key47": "3jZdnj1FmLL1abh9Ce75N3hxCPWJi6uZr4FdbTqY6uUERFZmoun1TxLqbtABozeXFE9MCYZoZnjVZbBF6a62otU",
  "key48": "3viFgwrgRKLH2j7bojYq3QSViGt2wEfLTvDpYW256gcnniG3eYjPgA6uDTmsy4wZxaNqdtLCNxi2Bi3EYEBJnN6D",
  "key49": "4u7Hxiz5FnCXDYgGbkHHN4CR6nP6skaUDJgRkK6S6CokCszJRiN7mTjVjHBdKWWMMw49o2GMhW7w1Z1HthS8AJmP"
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
