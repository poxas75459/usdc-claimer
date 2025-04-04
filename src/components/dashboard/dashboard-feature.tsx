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
    "2v3g2WCKJoo7PzKdv82WWSBE1awysjPKyqDgQkBUiXWs14PS5qfqHbbzJoVtBdKRWuPBYSVv7dVBiUnuMApMaamu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5t2xeVjXFqN6JYycbxmEbojq1cEkdzYRYvxnk5gN2Xjx82rDoKKJsmByHxamPeEPKyKZ28gy4zPaAi3X6kwGMKDV",
  "key1": "2h1Bn6fnwk7uS6p4zUBz7u1H7J7Fp7sEJ7WEG8m2HvVPLsjpYrZE6uRuZQ7wQK8vxrjHyMGgGN5WcG4b8LxXpzM7",
  "key2": "2yr5AgcgHswQaPy4onC98k6W4aeaWPum5NS5WEshh5PMve9LHqsk2X2njk176XTJPpz4HsjvZ8qbfw4Cr7aTccjH",
  "key3": "2yp3f1GWZFVRNBoXHvepHuREmeHGWcdFmZJCz87A5SP8zAtWMFJohXakW9sjmfJrGR8ZG6chSaVYysPi7DxzA4rP",
  "key4": "Rjqz7hU78NrJbSZ99jqDSxi5qYGAQnaSou9E2vembJcPvicGjxYTKpS4ynDPh498nWwPTWR7E4hy73rryw9YgfY",
  "key5": "3PrXsjumaCgMa2uZ5ku4PLXVToJh3te1UvgLzQacCbsM8hyh5GVEdtSQ2gMzJ4FLvvgS2FmbqTPrQaAR3vjuoSTg",
  "key6": "61qm7Z6nCSh9foU24jw8oqaDDM82GPwux3X6KSThgf74MmNpb5gEjFARWZpNffW1n5nuWsoxKu3fBX2m88ijNUiu",
  "key7": "5tUaThS4jd3tibE7pSpfDiBDcD9QL5XsR8ZrNGrVLZkFEvPbhKzDMULCzj4A3sYci42bHKfokCD3MMTyPhm2dsDX",
  "key8": "5dgyw1oW2sWr39vqPx3kLrinm5jZUjtT9dqNsoNz64XCkoM5JjzwqXKC8fTgy51Whfc2drjQbRGxwCZAA5DxTD6C",
  "key9": "cAjM32w4LFriSSWZTwdecuwSv9KgfU974g7gg6376UL1ERGKwWMWmdiYVt15pCUcdHafVVhycPsaSicqFvxF5Fz",
  "key10": "4v8un1p6SsGuhDxpWX2XRrnvGzcwv9CF5A63AF3LyY6rFgnvp3WJGhCJndddChZi3TBSMCDExomjbeEnJDUaPsJw",
  "key11": "4UXGyBhH6WfQPNfg719ET7inuWUW3izcR28REBjZmpwBXWMbUAJ814MFBC6AjZNvrBNjdLZLfLGmWz3Z1kkWwA4G",
  "key12": "3vw4BTdBqRrPxebneL71yVJ9xHWYWRsjJPu3z2uUXiEtv9KQTCghXxHThZnw1h3HmCTzQx8MVWNgvGQUoaR7Pq7h",
  "key13": "4wtWQxwPE7DGzfg5mXLEAHEJSnnVyif36kXT2e7jkDbSdveRGisHBQAm1qpJC8RHqBbubveySKznrXjJZ856xa8W",
  "key14": "4i8qFN8QwXH1WEunrrEZm3gvAiy1c1pFwfF7hzuywxWhP7d31DhbeEKnDMa9pdLPfiu4smTjdqDcFCc5YND2arsW",
  "key15": "2m2Q6JXCEUyf8euNvpHFcNudVQPwvR26E4mB2EcWpNqhchtWaj6hfcpz3RC21Bf8ahfLw4ThNFdFn1v2ipH2dqW8",
  "key16": "4yNhZmBGaQiy7YaSvUXYuDxVi5xKMSkGSeF3ToRo1LaKiAoq77vdLiZ1ZP8dtWGbCbCTrKwpGukLcedikDHDS7t5",
  "key17": "2SKVpuWPHAXxGcYPU184KPto8a1kRmJQk1J5ypLh7ptS86EW33To4Yboq2ZrdEpZxZcrvZnherm6R2Qxb7B7GT38",
  "key18": "AhViwP51S7jUrLvhQDztMKN3WUg6AXd1AUcs58TzqQzgxAAhEhocvFhUDFKRBrS9NX8uGfAiqWNoBHNaKW9tdar",
  "key19": "66e4dxHDR4wmJEasbLqDCQjQRgsWrv8SDsK2RF79iPr3NNwxpUcc9YP7wUBvTFy3ghks5ZHcXWErhPnFRU6wsqJi",
  "key20": "3JwTAaGatnnKTd3ooyMyZJZCFGC7Cfb9RA4RikSXBftQtj4HGL3PTQLsU6M4vFeTn8J3mCqoVawqN5Jn2L1kh42L",
  "key21": "3QkiX8LfXePiJRWNsLLkaoqX5HBybsTUzwVcxMyp19sKJsZWQJdrsYpyRTYT34Syyp31Su2m2WGEaXX3HfcYLLuS",
  "key22": "21q5KpJrmBSZYqyarSoJY1fHn8UdNHr3qSget8ejNWfiH9TSgeZf9FHNyooZFav9YuPQ1zgTPnsuGZwsbVHZr31r",
  "key23": "3iFnvwWoVJumiKZDPvkAdEPNu3yTf8UMecfWX22Ps3cm3exbnCKLH7VQe29hrBYru45Uxmdkn4S65swcGZUFqaZa",
  "key24": "2py6MwedgJne8cD9rcSCEnK3aMBxudkGPEfAPoyTscwiRk2ozHhMKjEQBX5gCJmjgRJFM5s2w3jFWhr6ztcYpvFY",
  "key25": "jV21QnaauFovMx6gSyoNJ4Qg1eWY7rwCFQmBA4vKy8zXJzS1B29gbszWvms6c63AHFDMr9UvN4weK3oCxBWYqZf",
  "key26": "3RoxkEsxGqDLXFXqzKNFmHGZVf88PSEfb9sEe7dWR9ga8RhjoXrAS3sjffF4WD1zpYiGsXzF8rnHmNVdK54nd9Cv",
  "key27": "6399t9v9wu9rzfRc4JzFZneSeDq4WwdHSCSrV6Tw1MMn4bnhkPqdCXF8LDbYU7QrPhBL7siuw8V362ARf95u1GUT",
  "key28": "2CxGeEJ2rBTHp6h1Zr8YvDXYm27edNPzXpU9zxVZM5iWWLiYNZrchrdzfK6G6nwJA29LCnT5DyuCr3JdV6Y4hLtq",
  "key29": "3QTiEY6xzJtovoso2oFZsrmgYC864riK5zMHupYMRtdNWgvr3gMxFrdE3Ha5zK8BE3se6CQ8sdEuh2Yr2zpj5G8M",
  "key30": "4hJ51ZQknXKLqNynomnpd4hWAxdmw2xAes7RstE3DawweC8XYGbButN2YmTJGD2H6fdvUX7whUhc4AAcKCyYBBFk",
  "key31": "MGeXWdacJCqFaw3viFR8qKZ6eKrXwiWRKeha36H4uLb6ySHkhmB3iSBLPZkv8CFseurLdr2YVKvFR5bmSpu81pE",
  "key32": "418myNxYuC8jLVVXCZhmJSSL1FuDemvFXrrcvubkU2BWhB7nYHqMnQ3mSj39HxYTNMTZrqn8NMWD8ntLwATNtrMe",
  "key33": "RW4WLxd1QTDHDRVuLdyLucuyvVfdmccNnxcQAf1Taf9HQUvMZbezXtYyXh88nE1a5F9TANsqrbaoUnQgQdao41J",
  "key34": "5NLe3RBrx88PpLQxXHqoVrvp2tAnNgTBzGsoyEScNeH9tbUYd9KuozVFjdwordR2eJL9oikQXbFCSP4R7Ck443z1",
  "key35": "44SAFcDmLaAwLokzvxxxKqNcKcE5XsNKPN8GC6kQdwqPe5MDn1MbgeeXggZNHaQfk5tKCfxoH6YfDpRcSdqbbkc1",
  "key36": "HS5QyEm7Kt6NcpSDQNMd2snvQmVtJiPGzirD8DA6578Xr34rAJA3BsTFwtMJjP6N2ZBdpEKjojw5fxRun9shEWi",
  "key37": "57kwK3DjVid31FPuFeqwMSdKwMsfmTdHuCQazXmoqKZVFnrgjPf8JQDvPWH1ieBGsH4Edov2v4MTC4pYxdP8Rq6w",
  "key38": "3vRY6784JB8aNP9NBXgeDTTwNB5iBHQR4WC2fwMwbw3SVp6xbWhFpuJHpCMSYtnUGKUuq6HdJBBNL8GHfsraBFaQ",
  "key39": "Z733276FLfihNSAWAcQai9zM5NjkSPyGPdYQr7Ww7cFDSvALHtKCvjohb7WZULbGDGiL7Ly4zbNZxU28rYWhBPi",
  "key40": "36DizASEj1PzSSfcbSzkrF6z7vFj3A98aTJEBRhRQ1A3cbZrJPMWrk3ncKKRTyLoAZSgzD9ToRxckqZqbCAaJPS8",
  "key41": "agdcYwhEm8dgdzk6CikRYM74XEaMLFoG8M4AB3JAVqrJWzeoYpwYbJr89vrwmaQPgSrLZNNsoS66knbYvS78WKz",
  "key42": "C325pdR4WmmfqoXwkii2JUATYaJk9BDJxJQPKKdUAVomi1kq2veAcpdYUxuCfX7bVxTuAvahS5sBCg6fBrZV9Vh",
  "key43": "495gTaGzc2zspXMWViVNfQbN2gRDgTF4c7XjfLPezfebHnV7Q3rVD7w7553VGHC4b2NhG6vAMRECi5TMWJkELNwt",
  "key44": "3X3ExbHe4fjioN7EsTnSXm2LARKE6P9jKfEnatUTGjzXGGFdoNqDrgvVmS7Lssy7jVm3YG3RrwWVUsyK8t1HFczV",
  "key45": "49ZBJht5FiEjhwzrNpz1X7AEajzK6shaWgxE1Kcuu9zonFErCo3yMnHRL6fQ6LzuA8CqNUwNQQ7t6bBQ69SzVk4K",
  "key46": "3W1UwgFe3aCSx9wPAEYNuKLq87aHu8QmKojon4bcbmwSJPavVvEZzCus5Wrce6mQP93f7p3x2RWCTi5wpbim8uYd",
  "key47": "5iab4dLver2bwBhAPy2LdVwNFSgSZrwcGqdpf3RYYyDedbgcMNsrpiLRYjDxHGijhpEaA8aHTQ1Ujg1t1KjJCNYS",
  "key48": "4BxXrCGRPWUT4pGueETsM42qPxaWJNACgiphR1EBLXSGRXQ9a4EFJH8E8ByTNrw4GrUh7mePGJunESLnzm1vbZ62"
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
