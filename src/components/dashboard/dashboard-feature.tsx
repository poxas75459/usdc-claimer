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
    "5Sf6LDQn8r2ZYJSLz21JFoJkWEEV5bK8tyAN8Y8JZ9Pbmy47QcVbn78szoSfTFgZF5Ckvqhn7hT7MBRDacNpEJqv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3VYEcdpMfVftZde4jRKKfDkHmVH58G1xgYjzktznWmTmAbCudFfFatEMSmvoGMG6VJkmUarPaXjuH2huL2x51Yce",
  "key1": "2hh4LziCYoXXcqdzYkqjogFkn4V7Tn9BMUBnd86d3Z1uLHDASCgLarsmxR18WqgPw8Mgx1AHSGSb1cgBMrWQEgP5",
  "key2": "fRN3kgehwouWk2smDkqQm3D7Tod5Sj3nS2oGj9RECJHtGUoSUYRvAn13EH47aBHce2qfKL7Bn6NtAG6ZotruJyD",
  "key3": "WqZDrm96TjfXH1rtmwkQQ1qiXLnabWx5tGJFhmUZrYsLb2SXB6D1LWfWHUhwAVPepSRxSEuUmSGCTqsuvLdKBpc",
  "key4": "3Eqs3wKXVkkZQMxtpnkgmEYTaqLfxF9Br7tU2ZTfaPgxjrGJP6t4mDNghgXZriNi8PbCndWqapzkL2CB9tzaabZM",
  "key5": "3Z5qw21SZUSgbqRHUegQUGJppeDDD7UTA6T3X8gQ1esGppYq4CBDRNAeRz7rfWRpL6tCFzKfBjnKPnLZt9BioShp",
  "key6": "ydFDCJiQkewwHShgjX3hxwjhzrpEAb5sWQchAoop7GGJqxQZMtNcAiXGQVo6XeNiNWPzsT8GauSsxxGF7CebU2v",
  "key7": "531zybHARDfA3CLr2XvetxAWR1d3wRqcyGRnpEAHRddqav4mqWbmACggxpbCue2ntNkc2PM5p6tMezkENxboAyeg",
  "key8": "43KHffvrHpH8PTj4gw935CDK4oi2Fa5vZqwoj1HANGZnxTX9MFQNZUQ7yv2HRbb9aQdBzb8WpcSFHeaaSXUxboBP",
  "key9": "3YKUMuZ4PaDNw5xzdF5qe9tMBCYU8JJswwhUqRJtqWrDWUUXmbPVxAU92hrxoz1Gn3QaSXZegCUz1njyThXbZpKL",
  "key10": "37675yrUYWkEjFtFdG8aALmLC4QLDgdBaFfGERiV5i2bvT3YzkN6Rz5j7SNV2j6P1MdWcfTaqtfEkyGQYPFZAgYR",
  "key11": "5BnJrtmfpFnhKinBr491JJvFwEBaDX8UbN1PNV9DxYz8u8cWCWbiDToGTZtXUi2V54HvxABFeuSncbYuJC6aQCqb",
  "key12": "5uEK8AUBi1epycje3cDwbd6DcLoKqyLdbTqNkoFGa2BsxwLhqJkbivkpQnidfqBz13bN2ixqQHdwcJBfvWpcHh2U",
  "key13": "3VkKzUjCFN5G1uBykPtY9Mi1dwdpUov5xGGBZ5AeUiKCNimtGcxAjnnTKvbRF9x2qGqZcayWVsiCawoBNjVj6e9y",
  "key14": "3HDhh1ErntRHFxeEKvsse5xYH9dtw98aJ3hsjnN5ywg5r7CqC3z3kNyEMM2cNyufEB2ci8tpERUqmSVQurLRZx6",
  "key15": "2Vi3N8qtFJUzi8AmCQc3zJbxuRjxtjxUFftmFNHhMeszGouKwNPz8Stabr8AQXgiz5PkEaqhU5L2yPz2eum7eX6i",
  "key16": "3kScNBL5SrmAMidspWwieJA9uQZeTQhrY5Si3BSyTxvHeQ2tPzBtVmebSVsR88fHBVpbLBWQjh4CiYz2C25bNd4p",
  "key17": "4P32h8LMpNL5F8FU3okAmdriUD9JRwvMJGnKV4bLfKpftrEPLNeeZqTorWDUXGaSBGJMXBQSiGP81kg1tA1LtxQa",
  "key18": "2AF3k3tCehE3gShko5KVxUW2vRSUPbgkyXZ2WxhYAMc8XjRx51K7YVCvcvX6MLmszCkfZtFFggCg5sxpBL2A3E8i",
  "key19": "5SoxmFs9omW4Svn5DZTCU9MG7wtihYeH1e3x6DE9FJcF5ChzDGNvDKHFYbBfPb9kJnQHMtmAU3hbapzjDtiP7ivz",
  "key20": "2c1WrQTJe46DuQtSr1Z8HvRHMsogaUVzZmPjqkCZMRtBaR4sGhP3e43GS9YHt4p2sQ8PEnrbGgo7qJCb9q3cTwr5",
  "key21": "5GuTFqdao3ptkzDg6EQvXH3xu7gBNp67ACQTvizguuyh3J1MqcrfXbkemvXzLrt149KqQgcz394VdtNK3WqNnnqX",
  "key22": "RuQeNKTrhhvFnPHJa7L715qP2Mp8SSi5984KFedvJ3tPb22CP53imNWzQmWh97hsbzCzN54MmdJEpFkez6xuQGq",
  "key23": "3M8TW8bc1hNg3cf5HqM727qUiG7L2uCHP8DT3PVSbhzWbUd7qEfHCLvnG4WTHA2VXz5pSnrPWeaSaDVBk99sPiiK",
  "key24": "3K3K8FwnesGHn9nu9LgtKYeKCvA9iKtFWg9utErqLmiVRzpP1yitGo3Vq3J72QuocBvCwcD6DAzusj8dZSC1BwiM",
  "key25": "5dWXSuk2DyDmj7dNRCRpZrrGj8ES1jTS7z7iaiMrSkPZAqwK9dfSF5C4uwaFJWsfWUohtfbiQYW3qzYuC4arKiLG",
  "key26": "5ZpuLjZS58XU2khCtfEHTQ1CzjfFXdqPAvDBTnpVNBp2L8d2EjmAcK5sBDLzbT61i653wPShHrWUwtA66z3drxyk",
  "key27": "4qWjL3PtGG1tdEA4Jw4MSjdyQHsVmMS5ropmegH8UfbRnduZcbTh4tcCY1FmiGLLn3QRii48nZjPaMnNwidcsh1h",
  "key28": "4nqUzZvVrtGKBTPeuQCsp6nd67DmdZ2rF2XrzmBY3cYqepqfkzTwjFhvLwZgKV9GDiLyoSyavAh8P43DRVM5jjzH",
  "key29": "UubCUgRYAZJKbdPhradTuyJT4cp7kdZyt8QykuHs6BXAChnWxF5xVNAu49kyHDKFWXduzim5i38ZHcwxFU36CWw",
  "key30": "47q3cb4ZMrHJc7mwWWLuEfssWHMJHSTqGaeSdW58A7dvAR5nim5gSVuakaABkdzhquR4Wv6B8dKS6qAHiozrb2zP",
  "key31": "25qfP2qe3F8fNEc5QWyqnr1qy1EFBqiKueSPZYcEVsgvNyqF8xpxnQ4pdN3hBh5sxWfRTXhY6Ao8zYaVf598ZHfa",
  "key32": "2quFS5bQkt7pBgKBjw6F92BJfXPwC8HswerkthByWgRTESS2ujTMRKSpNAQRZKvJVML6nR4KdVkoZaV7ft4hVTrE",
  "key33": "4xQLPwSPivgmVEa49KBQ1JnAGA5ErkVxLwdTsLUmjfU9ksxm6c9oUTzWNWFsE7FLhUCr4QkYxhcgdQkXLxiD8Rgp",
  "key34": "46JYzEweB9eKHGDxoeNwZXDLmTfHKQHBJeS3PMdxea6TfpZz2nypvcNKEa6ZaVLJGjFjXSaKU1vrTiPRbmRXNgiA",
  "key35": "2o7CBPygcgGj7pNiKRhsdSmz8BGtjk7FVnPoribCXzGCu2YE7QnjAVZ2p3DTNKePZANMHgv1GEDRMe25cib8cQMu",
  "key36": "62RVPu1LmG83DvZRUPEPR35WouAirKAB3PrFXTiDrdoEnrRNnLzX5wos84iEvE3ssZJDdyrQUS8Y7CEnojqRcAz5",
  "key37": "5kkGGqxVoP6bCBvh3ieBau5maEtTS9KA6bWcDMTd9865ppbfxNioyu6HsLLj23Ta2HC4t1omzPhZoAUsYavaJrFM",
  "key38": "2r3wb3gZFpk9n3CXuZokXzrTFAPj9kzfcQRytJXdLCQrjkiCRGGUejSUmEbThtnvscDWobuRXEAeMGUSR7EgteD4",
  "key39": "3SifgN3LEVyLnZNWQg55Cs7F7ansqphUtWh6uMer9i4tYUiUHjZkmvJidJ5kc3qtSLVaeojudyyFNfqiDjPJAAPM",
  "key40": "zTgjs4VQVFXgnVs1VtqifePbbZTBhJmKt8oQLkCcvMrkRqhzdc7uEdnHqTJeRPkuBuoqtWGSvgS46Q9fY7pYiDd",
  "key41": "4hS92Ycp7JL3ej76opbLezX6wZQNB1PjLbroCgupkJbDe2sujsQEXFL4ogRcYyaCfTs9SPwy89aCT7apUupTapYK",
  "key42": "jTJQAPrYkUwJGtEFVHrQNLNjW6n4j7yLioQNUkkLjdBE6suknXJhtetgbDsZEiHEN7AjJFLQ6S1KsUZDy53d731",
  "key43": "3sCBudfSJEoK17LDrgD5b5qrJfwuxxPqbB84dtFRnNMbiVWxTBVranwB25XxAxneuYY4LYPjJPq2B7ocM2aFHnsk",
  "key44": "3dbvv1cUpSmnL8CVury7kRcTcyu67dFypcXuFAp2rKeM9ANesBp6Ja2XkijzdHkM78uEhrCrrYvv1sDDAKnrYatU",
  "key45": "5nGKCmQb9F9whRxHAf696bf3JB92KaWW4nozWDEZZtDFXvndHfnysLUx1sUPTn8M6JeoEScgHtxzdepHcqtTE9ez",
  "key46": "2qtC6hT8927tvLBDLk6WWApmnvqkQfqi9ZUaWYbfwkWnkmXXUgajYSYmz89Fh4p8rpd8kULqrRboJQLFH2MCM8zS"
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
