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
    "5awnRhQotkZMraC9crXgqmLpWQZBFbTBdWD8JigHkjWvZpsXbaZYWvsDEENKwQCos7TvmUvpNBjSj9PYccBevBxV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bs874F54RDT3gb3cyK43JyryE5Sdc76FrqrvFUGQZn9cE7p7bdvzzd4vihdVk3BXKvjuYjkoeTsJ9NAShnf7D1E",
  "key1": "qkvhQSvyqpWKEcbmevMMLXJofeu6nAAYXoSjf6fSKB6e5ndHzjU2fTbLpBnpjUE4XE65uW5tKKVD2uHdCXprELf",
  "key2": "2daVBNbzWvCPJTcySs53hniv43UYYrDdxwametdebYhMXFpRY1aJTtrbEeihvuyufutSuhEW24yhTZEPQwy2yRcg",
  "key3": "FHTpcAjYS9By9snpJgZDGv94CHBeyZCag9MaZwoTzC942fgj4SxyGUtSXEfTTJMyccnBdqqmc5t6ecz7syp9fx9",
  "key4": "3KopeErsAtfbYgr7Qmdt73qvw6jDTe4JHKUSaB8KJbyZyNBVkiXqsxhwPFWYer8paQcpYPhvzzpyErbJbspD9iAX",
  "key5": "53paRpRVq1fVt7X9weM75W1T2H32fb7qUyptJJGHknfd8UgP4DpRDuc59mDxLhzV3AtCQqq5tNjzgkN7Rqq2hfA4",
  "key6": "58tvGX5VtBJRAjF9ttLe2xNqeqGjE1a7Qn5RdRswpoTwCNUHxNZEwCQDnT1QcCQekXakK6yRXYoFsLazegdGWxZX",
  "key7": "g6PSzuV4yHRJXGvAgpQ8JGiEfjAdVYojQmRwEtQ9THvRbAX7gsBezvQcQvtfRnM3kXTJbMMTvcc4U1WNWAdJsaM",
  "key8": "4WRP6K36xQSghaBo59FjnCgBjNLNdxPUgPHtqX65VBGAMpSevLvb6qjqiSM7uLWynnFrNDYEAhYCZsyBMh9XtRJe",
  "key9": "ZSWpiDy2aa9f6aA42U3YRu7wregZmo9KCoduJzRiaWg4svxk5mxUFp2vbc1U3Et47VJdvK3FSyk6qrKmdFXph87",
  "key10": "HPR3V2AvYJrLmUHKvCwmJGCPZcTNYPP4AWpRuaWeKE4Ce6KGw2e8N2cWZNPH2x7P3T1nK52Y5t2QhaAREdgPwQU",
  "key11": "27JGgCXzuAHAtSrU6a2VvonrvVSYTPhMjdCCNf51GTULAQCMZoRXLVFh95VsnoLq6wzuRzuEUqppCCPH3KggkcP8",
  "key12": "47sGw4cuUJMJi4NAqS1Dv9hc4W4Y2ZKqennkbS4899F513zTuwgGUe2aqT4sNt7gaJoWyuM9ER3vWQdptdvausbv",
  "key13": "5s3stHwqLqCRwBtffEXUw9XgUeKLQs8KTXP5gQC5XLUUT9LSj8K9uh5CZY844SmATdkMicyXov6UP1E51Bf3rVWw",
  "key14": "5eqknRnTM6Bfwoa1FkBFcp4KJCMp9vbLwYbVrYHASxCgVff9mSU9eC6JsTVKSJrBpFPs1Y3KuKShUXL68fYTHrH9",
  "key15": "B6zsqzsK9HhFB4zezPDLisDVMtxYcEFaSLvNcLhJwxkdMkYL1Ych5WHUDgKAWBVxJj2jZRHZfEVLQw7U9Z5pzvj",
  "key16": "3QfMNwe8Cojwf3vr87F51Vns48wur3oCYeBi1ABFBw6ZV1b6ChXL6R5oKAY5rDHzHmhXXZDAsWmKKqm6rCSF7KAo",
  "key17": "5cgLCH15dFvQ5XMyMs9XwWDTtnrYXMaSCB62SqSKsA5kgxjtrR2fh32EMzETjq8kQVrXiLkGkme8kq8BatrgZ7v4",
  "key18": "3UBvSLwd6STd4YNMXJn4vyuf4aMGYJaYdzTLhhQ2LScvoxREhJ4dPfDRw4AgYLe6PJs3V8krKEKENdgPKkuvdrQv",
  "key19": "4oWX7HvquUyDrFKAkLZGDxPGbUuWkHj22g3fmfNzXZictdxcTyue7DVDGEtKR4sYHNpM2citgouaxGGTHW2pnZbW",
  "key20": "3H69uohfmuizK9SQL37eTSbB89EeTu9ecQQDnbyxuMvrhxRW1PUxHadnmXfwU9ik3Vujg4sFhpGqAXyecFEmqoRA",
  "key21": "2TQ5azViCa5aKvgFC1sLBLH4P9XptcttXCtMw6kfswkYsB8Ws7rZ4P5mdVtzsRmFtkch4b4tAtuQ7kH5deDdR36j",
  "key22": "2qoWLGRKenw75xf8Tmxex881rmmtX2rDNCoQZFT87ngmM7oiBqtT56bkuJg4J2uDkWNE9NiFiRuMSuJrkz1TN5Rt",
  "key23": "49WxFwwY7qWKKQE3Su7E66w5hqjXh2YRs1ENY3faq3L1PVboLc8abFspz6w1XHij8mRX654pVDZreAoazz9rSdNb",
  "key24": "55Dtf8qzjqUzN2Fo3iGUUomEFQyv2tNCaGrHry5EEJYr2JQSdctip6onTDtZ6Ddu1SWvCC8HDhxn45ETzAsruqT9",
  "key25": "3HS1rrmxyJhYckmyTNGg3fRSQqpuLNyiyRLiwZJKgMDQXXALG12Aj2trJ2vr3VdZu4BgNDQdU5G49wLgEMMm129j",
  "key26": "3Zeb1SRumdPDVLgsDHUCyFF5rEL1Yxg3Hr6dVL2FrLmU9TdwgGdN8Zm47iXYS1Z3eP97etKEevPrt5YedDBnScac",
  "key27": "3SWwT4Kw2aEBU7HwkKKVQja3D7iqhVMNTsRyjZZHY4DUo52yYXdXVcXeK9d4ahJWYznd4pG29FtwX8H2jznpSY66",
  "key28": "38RMZ5rAcceh3GTWPxq7Hfc2G5KqMEMkwE1Qk4suLpJUsbDWxj6UBZYHvC3WnQxEHcjhvzRVuJYsJ6sWeXaksuvc",
  "key29": "3Dvukf6kf99BJruUNWphvwN8J96ySw4D8qNxoDiAPMjTHkfQQFdTGsKQHQxaepwDEtifYj9zbP8Z9dJiw3niYr7H",
  "key30": "3sh3FgNoGXejkyQ6tgQwxUy3JcUMXF3bEFgyHeXBpFwEhK2y1NVXmh8wdtoNZFykKUgLHmMX9qCbjSjKgBj5oTEq",
  "key31": "3JEGC9Mfy2FqMDt78JpmCNugcc3ExxLMpVibHeAeBMtiHN1KjhKe96HZgtWS6iJnSW9iofXCM8hK26yp8cbNHmtH",
  "key32": "zjjQ1PWD3PLAeu1RzH1jsaGmzAfd3qXKxzyqkxpTFYGYAgfJ9TecLJNeasQmcbiG8LcLwPMZrbHrxP2LvxdxCE1",
  "key33": "2KDfbYjrUc6tEZwVecnybmnYu1ED9DQfsSsrZtxVUjcXLVv7hrxtsTPZ4sJBH1fD6Agx6dptK8Ho57kmrUVq9yUQ",
  "key34": "5Xp3UP7tNirh6fTj2Nwmj9gT7eBsHPeMGDEKpemFA4JSXJGncz7axaRQuF3W7pogX46vgjA4ATPQbJcG91bwWvVH",
  "key35": "4mzF3QEebr2qgPf4erzNXSQ7N1qeTisdFc1rQT3EpNGYb2W61RPb4jCXCrGbixLRwSPdEmdoX5vXM86snw9FVgxC",
  "key36": "PBzZ45sw6qUhbiYK27k5RX1RSEY4hn4WwhXMs7qoo7weBxurKwkqXbon3Qfi3yfQkLscDubJ2XZZbVyzWqkApBy",
  "key37": "ttxZLL7Bfpmqwe9vG5odPQhwTLfpAdJr317UM6cb5AHBZFnL1Ck7nbBZTqnmib5rFeaMjRyZpHowpkGHevhc3bG",
  "key38": "26J9WSF7zkj1MAUkJxReQARrgCFCFJ3ncT6fkvBUj7JMzTW93aQrphWoP8KrECtNxVPUEfTvi2QSYbp4tM41noT5",
  "key39": "5bqXz44uCGoq88HfGFoLh5PbPEoAqHVxzdKtiXvD7q7YR5yNUdNdfNBgs46s4rQ6Uh7zYxJfv4ktyeW3g81XXzry",
  "key40": "g6kaZ4mNRLPEBxfuF83bDRusxxST237zMHErhC3YiQ5UwoGuuQibLzoGdqEYbqHsAMKdgHJU1WdFLsFT5npaD9t",
  "key41": "ATtioLJM8fkariiBv9W98YPxscKi5B66q3ivMD189p7MT4xJNJ7ngzybj87sqFMwRpWaHXLNsUJKjpdKjUuWUJ9"
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
