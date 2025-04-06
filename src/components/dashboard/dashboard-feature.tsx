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
    "5R6PVwc6xpge5NxJfQnS11hWz8m7vB9NtTzkQFt97HZF8oWhiubijwoHnSt7dWVfqCymomAEtXQNT8DVQbULaPAX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ixmuxnM64PzmwMpRgjkLf5wLiDGMzhefuLaPFhLP5XtK4PUk3DYnw7zooW54igbCjJcojs8G31vT1FCjScmxx3L",
  "key1": "AXnZxSTb3ge4p5TmtaTomG2H6mV5CTbY7vThxcost6i9dsicNeHnMEvrKcCU38CZwFKFNS3o8Evfd2Wf7nmmdBf",
  "key2": "24f2HRg1c231JWZKkz5d3513Z1er1FBmAEsAzRJGj2wC5KkHwWYwYyMmXMMUzL62LKYz9YwxTpZJkReN4ASsvQEf",
  "key3": "5rQzJHmNM5VFtJP74dwCtB3j6MJJ1sbrq8PBtoWRzSvu1T9e4WQ9guzzcbJdUrKPiGv6CA39LEL1QBmGsssj8Naz",
  "key4": "2dGHJc4JGs4vjbdYH5Z6bzWBWqpE4nE8SkaCzb1LwFG8shU3hjnFg4Z867EXRveGvuAgU84Q9KVEVnj5kiwEE3Td",
  "key5": "3Fm9NR5mnhNUnqijKXESRyV51JUYdY5xCPtvNWCaCKmJFi3PQdmHvfztfk1LjJMEbA8AduRt5FrxAZLHHWBWeaH7",
  "key6": "3oKCNyBhGMT2VYgSDMige4rB51ANT9o4Qj3QLJkw9c4SdDf7NbHNX4dVnyr7admvpXKuXF6nTunwi59udAEug6u2",
  "key7": "2UdGmJ5XT9PVRzzvk84s2EknQqM1dGYc11qQy1fDFxBPbZKBmR3tQriDxp4bTqGVGwhmX5tw1HVpvQQ6UvFW1Vi2",
  "key8": "4NsbsKqaB2KNxs58zNctCQsyUTBP83RskQquw7CjXpaxawoFZGLmVkNmn4DyGLApiEDjiH9HnL43tv46Lw3beQYz",
  "key9": "5DC4joDhZjLXUrRBQQQ6CMdMRhv7Qfdz7rA2ESMuNxpb71KqFpk9ocU4kABduEfRS3r3Z5DRH5VbJGsYd5VhcKex",
  "key10": "4tWfq6dbWWnTACBmUUD6XtToZryLwCdu6MjF7XFr3MmbcNWzkw8StEfgsuXFeEAPiF2upqv2e3T6XfpqpemC4gTZ",
  "key11": "3M5sZXzTtpBdCFLVNLYYTy1aQbUQB3johjFYwbw4tQ5SkvwZyxaP4bb9RJm5tvTfzqddhJqGQaF2VEknUwJamyoj",
  "key12": "3cVTvmyjkS2N181odXcMvSAgmLQKatc7ocVNtxJ2JtDLMevBXvTCpWuZUaPb5E8U8UoeqxjZdbeEyWY4b2ZjrUmd",
  "key13": "4c7CNJrv6VcCXyHi7t8pZ9Db1evLqnq5aYXDa4BYY3hVDuPwdgC5nyr3Yb1pLspyJ7shvaeiH2bsm921QWAFHuGd",
  "key14": "3cWaeZ3t8fXgHbwzefZTXRg91qcceCMxNnvAsqxEpoLswyVcdVwA7W71HmdMoaoE2F9dErbYnXC9U3g6nzbHTin5",
  "key15": "2KeHKkoDMcYTwzuZ6WxRG7hSCz4hihn27uDFwG66xNLtAofEMDBkyMZDyMoxJz3bj3TYLBvK5NCeAGBScxSfupG6",
  "key16": "2cmBtQmSjM4RQsCf291KDZsmRF75nuej6zYgrbZ8Eqeajb3PY9GwjVtCpEtqi7UadAn3vnVuBxCgd2HDeHZcwiR2",
  "key17": "4Lp7QyZsarz3NVe4ppkZxj2ydqAyneYvHtSHBwuqqV7wac8eMw4Rb85bHfdbpKNTRmY3qHLXAjF6MHfEoinL618z",
  "key18": "5qA75Dw5LrkfpYBB1t9nWTTy8534J7X3GPie6fqKoo5GUXoVN61g1UxVNs2DtsfqgfE3tUpQzqZfitZFJYHwy4aK",
  "key19": "5ChhXmrqYiDmyNX434GkhVAjFQXoAHAaSJ5xQn7maaLcgqcJxbusez59etYn1Y5VdtNmcsKQs2EL2fRWveHYHXTE",
  "key20": "2h5oT3mdzQypEi5qyWjSzEPrPLKjTjDKYQSs1AYBC3ZYvNHXm4XQS8SK8X2kf3W3Yw75n1mN6Km2rk4aHzqGdAEu",
  "key21": "DRwp2QxWn3GM5nJeyGpsfNF6bAN8LTCq5bvuFj8hVzyGtd7H5whbgGisPxqL71TgW3bA8oaktnTKYeNdG3RrRTf",
  "key22": "12dFwUs92Mb8knSB9b8J36xWDt2Y62d1xttAXCqigfB7ibbyLLfiYMrvoYHmvMWVYrChAddQUZqinMBD6LptpzP",
  "key23": "KJvKwuXbjp1hAFssb72a692ScKLxJqAxYKUDyS86WqWTCXtUCJjABvLdiF91TvDtyLRe3pKL9SPzJHw4StVD3ko",
  "key24": "3AepxincVZe765rqzsxQyYyBkt2nGNrpGUTRj9Jn9rB2K9Luhi9MsLbYjsifrVnWMtsk8hwFmLVNJ18s8ECCX3Rz",
  "key25": "29umrEoQc7LNmjEqqG61ybdjVbTfg3MhsXGt7gHA1TNuRTEWwDuhXEyVbDaRbxbqvLb9G21nEFWfJQBbqD5sUoBU",
  "key26": "33tTBhRfFUGZH7pvw1NuuELFNozE8Zs2Rvr9vrAyy5AqhNqpkwk1gV6aNWskGWxpDnFxodbyvpkA3SqhvC1DD3Ny",
  "key27": "3LSB2aY8Db2GnQLYfF1fKrRa78NkN3JtjPiPTU3j5ym9HmuhAfxaTdDen6XtRopThRqKCrwdjFwiLNE6238NCFPc",
  "key28": "k8RPqeqUvkvTBKQL8HJhoYSxGvU4XbNLtHrLbwUicF2NBmEhbJKuj4VqML7jeFWaUCgaSHdjsShWQEvsvnbXjrX",
  "key29": "YPjzJYN6zfvErHjR1MzCJptRiitiuTwEkQ4YhNKdrQX2pd3gjDjiaFU48FCKShichTLn4Ub3BLHVYg1GzUtPhSh",
  "key30": "4Hik8Q1NaRem2muUb26NdtXxTxAGKsrgJFF3GhD2igyLUE2ZwhMBemY5NdghyGkjBvjjnvmz6PTTe1aWP5dQ3jwF",
  "key31": "NqWbM7krdDBH8b81czcZTLuzTdiLdzAp2fZCwDVtREm9JAgUXJUuV3wtwiCr8QfM8uwmXM2mw655Rwq4DF1PE1N",
  "key32": "4enLwjaZ2p3XsAhWTjdBiMTbHoXsu9B1fkmZWvkEf11DSzY9n2ZwfyR9UWv3auhCahB4X34ZY5KHfc29DSqGp84y",
  "key33": "5zZGYFUVCE6qzkb2fF9rxR4qm4TL55Ux56FMwFJimBBVFPqjRdFMkLwaf3r6QMbz8zx36W3LJtmAXUTp5Us8TBSr",
  "key34": "2J51VQhgguy85C1Lx38SjxR25dtT6P1kLGy6GQC45DS8D6FL7Tm3GHntgxotDobhoZ3BDyjjcd532gtnxwP5WLey",
  "key35": "4pRK86XeQpuvFrHDwrB9e6CYaEY1ejE7ibm7Fio5jynD2fEKtXBFMNVgm1Tb416z5WE94667wJ93h7QKhKM1ggnn",
  "key36": "2u4J5Q4rYL39kvKMuFSQA4QWz61vP8vTC21RpAwMAgUT4T4iZDUAnMgSyCD8kBBQVcGynfJdcRm4ckBXNKoXyGBq",
  "key37": "3EzhrynAdzghH5c4WeVsPZus3DeS1P9WHZq1t7pJd2rEe6bKJRWKqSJzx7NMgepEUSzykaBB59n94bZUjZxA6Ty3",
  "key38": "2V2i7FnFuM9nDpUaqmXu36bdVzLky1KsLFDeyyz2NaKQ9BMAckdgrzHX8rLEYRecCWhCSKkhkExsmGMRYbaynHrN",
  "key39": "dsNcGDkLXzQcJkdg1XqGdJCXeB1LfnNa2QKgQMAkQzoqFrFmWURJzWbaMJCeZQT9uyFPKWUx3y3mEyTjRrsAZES",
  "key40": "5bG5PtrsZs6XgK5dnYnqdb5J4yTZ6zNVRbC2JH6grRZozkfDBTnpAiELAt1fNV5pt1MZbWLv2PanxXpZNexs9dJA"
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
