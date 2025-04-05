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
    "4695fE8v7saEDeDD91KznnVRMuDDcewqhE4cevhHGqBqf7GxBS89ZgKtatAPEfieXkQSYBmaWD2R1Zh3XnbmYuiL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "21McM6Ae6wddMgbKSvQMrBxDgAyuHinRQT6oGewjyFaqmT7cSE1wi3PGc9VjHrH2AnQrxEjeU2vPQF7NEyxwh7xd",
  "key1": "3t33RQxq9HYznCdBo3NXXVpCKLL4Jgg7wkJarcK1v1DRkPVnanLRuq9uzzm8t1DrkDAaaLSHQXwPTYSgtSYaxiSv",
  "key2": "5xve6tbMuG6p6s2E8RKiGSWub1Xjg5qX5tcjnQs3tsUthNK6MKdb6AUtgD81SjXzEARDwMwCK5PBcW11EcxKtVUN",
  "key3": "2LVrzqLuK89TBC9SU1ocExoH4u4hpnXya182HpSfnAy8PZqsYeQpdagdzPWEo4JHrgSqF5sMfRcH99zYFFVZ7R8k",
  "key4": "4RTcqK69s2JDNR6aVwjZ1tVoQsEyQmnctVycc8kiP7j54FaHHzezdKfHxxjRW5QqT3z4CH7MPzuSea7gqZsauw6V",
  "key5": "T8M3vjfv9zSdHxAida1dKdaebt9a5r3uYhkp7C6iBhPW6Ns9zEKnkSbSpVpQKgiyWtY1XPGGkJ1jyGPqLD8jaou",
  "key6": "3mU3rE3NQ6a882GKVa9XE8opBFpLxvkTasQEcY4wuKauXeFzWd1yaoPUFP3rMZnZZHAdAja9mpg8K9ZTxB8X4Fwq",
  "key7": "5nuzsnEKW2FbJabHG8byMHt1m7dxifcsKbo94k2TmsRYSswGQ3mYzerAiLKRzqW3Rd26zZU5U4urn82JnccsjaBX",
  "key8": "3XmoE2PopDq2XRfwifd1VrY6XbeYq86zcZwX7sQkbVzYGww6AfMPwzZBqDdP6eESqTyVD95K1RGAG8tR8okkRBm5",
  "key9": "Pryb8kPV3TZpgThh5XBLZhmjaqSR4FLyVU1QpAWoKa53Z6TMDDCchjmXmuKerXtdCzsm5Y6skq5QABtFFH64ebW",
  "key10": "3SBv1T468nRUY3mznBTi8BKokfzi42zcC7DWZTgrdNpEiYkAcs2dpYqEcEaJEv61yRJAxxFHofds6c8SkxqefAAU",
  "key11": "3Mc4sTQ2q6vrGzVh1ZJqns8Vw9Hm7tpNkufEXJMS59sDUYGxrhKCFtrXJ57SQNt8SDAWfmjSkBuaaUm7ed3G4t48",
  "key12": "2p8yFceCocm1WWZheVzhQJJo5CvLsYXaWeLcfAdbMiwhx22GzPefXp1kQFLd1qKKDjXLfbv8G3GP6UgdHThPkLHR",
  "key13": "2YV1vsZ6QYw1baMwfhm47xkF31Uyu1yNFi9nWRdYK2NxzrP5uAUQ4p1q2YumNVBQdgXC7oKQ76j8sZJ7cWm1Se74",
  "key14": "24nc2L5inKqVXy7cFiK2nUqZPBkCHUoTcvieG2hTNH79ppJZ1EfKoaqVVAgFxLxF5h15jBZfNUXrTBGRLqSQAWGB",
  "key15": "2VePv5gxoD1GuNgrqRJjPErJf2ZDWFeX5vGpXQMfZ6q5C2kZwmywEB5pFAyigePKe9ge32MaStnh5VZiF6AmiNZK",
  "key16": "KHCN9oiEputUA35rcdERRzxUGZNAuGysq2QYdupheUp4B3CA7yiPwW1s6fo6ymCrxnqz8ErTwUTGtGmBQkQUtDd",
  "key17": "4etTghZTfgBKv7L4CmVWR475mAxoRcaT4YS4X7pKHSrt7dS4C6YoMYFRzZRiRKJoad34pcYw8NwpUBM2cNCZ1sV",
  "key18": "3bAHGpSVa8rfs5ppRu7yFSbTKoTWaQ4fZnEeVYg9aKebWHLYCoPb76ufViiW5dXfgbWmKQroZRovDJgjSi3oajKQ",
  "key19": "59kAUDH7XiJFHqTo53QcGThNCYwYXtZPxr8yrky44gbupjBkuhsVySfhWq69CdwQnBc9CwXU7B5hxhCkQTfQ1pMt",
  "key20": "2yinWGAhNbg41X1WAyEAWS5RFoxfSHtTYmXjB9Kcxq6ZbcidhKnPJZRuuoTGnKF2eH7bK7aQFrqj3KX4kkQSZHw5",
  "key21": "4upLyv8vH6NiFbHtLPiWk5LvZ55LSNaUDq3KM9oagqchcJu5z1NyAEAPw4ejGu8mTQxZKL3CHkccVNbHGEsTPhY4",
  "key22": "4A9sHuEWVomZyqgddPnmqCKZGz5QK8upxRkp9S9XmCFuRHq9oXBph4cvZhpfmx1hTXgatpDqZgcJ7uaMzCVyfV2m",
  "key23": "WBw5LM1JPEyHWNeLiwYmhusr7DCfCsqvgojUXRaH24wJBGrgYypdhbSiTneJhH73d8TVj5n7wxtjrManEny759L",
  "key24": "5yxR3dNek2DZ9sctFBwvbnVB81ijkp3ucBfPwYKuvmnFRxuTiTrrkSs46cBWdXu42j4z36QBTRSRxW8fPFhQZDmt",
  "key25": "GZ1YYyvmi388isZnXgPgw39vqYaqcPLSVz5f5HKj1RktxZfFeR4KJA8TY7N4NPZn8iqTurnrsNscL9otf4C9m1G",
  "key26": "5AxBpPH3PnQ6nuRvpzfUvDJEU5K9GNWsngCyv16dVN3fUBKpFKGtifvC5mx6P82k5ZYwKdaxLysG1TdjzmutTocf",
  "key27": "24VRa4xg2VmhguDJHwN9ituieoJdsPEFKUJDfowaHWq32fg6q8CHLstskCSkZVehehrLFzua6FrwVvsp3jC6xANY",
  "key28": "4ggMQv7Tvw3NpwduND6CpYokFXfmuxtLemC15X2CHmwrDjZbQUQcozienTB3kQz3xY29vGhUV8q8iEohqgG66CDA",
  "key29": "u1mP2y6aRasR9PK4wdbhgLGBsEionCHTBRCu5eDg1E4LLGDiz2UXQpxZv1PpcrAJuVtyujtTi2x4fuPC4URYhxe",
  "key30": "5C8zyPq1mUhRU1WdQB2KbbofbmZspATAKYC3JezfpnwFFQjssQY4T9xCbwHcsB1PYUE46JxtLcTyTvzcyBHDyYM6",
  "key31": "3NgeHeeiFS5VLdXZ56rXzAQ1fFoFdFMDnx9qTq8WfBxc33PfTDKHhq6vm6uFsPpZvDFQLQUJj1RcY74uW8cVpWuv",
  "key32": "3a7tcpsbtz8W2xzzuR3c243GBbCCvtkchhTriAVyeZHSZPWbgyfYZjeU5L2hbkAdMMf48GthaCMgHxKh2xCPZGRt",
  "key33": "2sBwV2rsmfERNogyX76ndvJeZ6r6kTf78cFBhG4FxaWU2VQ8ftRfFY7MgNJA2HC8uFZQ62o6LZ9BBoHvY34oKKTG",
  "key34": "5UxqsEj4VRd27sekyMitDv44JQoSVz1CvyNehd9aqJiR6bLahzYTuektz4EcrdqN1P4XUar1bzPqPHzMhrHirzmu",
  "key35": "2XZFgfxBgmuscK4tggEtQbeBtVBFyC87pex5BsrKkVf9xcdnzDhbcwDXjCW3hoBCsiY1u8ruFCsXtiSJR3k8FvpJ",
  "key36": "27Q1iqJ3c8N3BcGYxDAkc2tpyJmNnNoNRgUNvX1VmtkgGF9bq15BYhFeRMo9j2byJTD9eSWAqAGss4N8ASsn6Xc6",
  "key37": "2pYcvVCgYT2Tf73WJWiS9rBKQ4NnG9pxvrAPnZ74pkYaDes9Tra5yPr8nbNLHZi7Po7Vhp3Ku52kWJXrsAwnF8ir",
  "key38": "4nszNdihGyAtiKGbhwqGhshMapkrxkanXCMMtQSpC4WP4UCviQZHXDUmVqfwnn7WrCEWLiaBSt8EAyU9R31FckBY",
  "key39": "2wZdHUyzkVt6Ni6Ne4648XqCdBtt4rQ12YFrCViZVSx8XNEpibyR4rERENwecgrqeupRidTZfGjDARpfWR284yUn",
  "key40": "5ro1N4NYCrMc2cbW3H4QBxmVPGnbKVfur3G5Cdk13yBTT88UcXtCz7THuxzSTEkrjkxHkxmDoF1ybFKS5fz7LiD7",
  "key41": "5FysL9bjCRU9HVmz7mKKCEkhvYKJ6HuW2Kwje7YYhZ5u2hbWob3juJN6C3Ado4RwUvuybiZrqafAgg6e9zYZNdKf",
  "key42": "AfEeYm6kdXc5zRs3zHuvxwFfULSg79Pao8eMgh5NY56PdeDRUcmNfHsk9qJQik1affVEpVPHvp1eFebxqoqzd8N",
  "key43": "jyate9oU9qKQDGCxmrkXV4mrWD1A8b8H7zDYgg1z6MQdLnZc8Y9n9vVy1xBV9E3RAA4TY8sJSRsaF5bUi1tV7Fh",
  "key44": "24LkBF2x2bEbPoWxLXoTXHF8QLQcUEQowD8Ty45VUmW4dQz1EsRK3xX47Vy7TWAsxuy7fX1LGeAmwnp3evopHY9Z",
  "key45": "JpCtGBrUAFd8Q3n28dmDq8Xh5i8PGKVGajMTAjDhVFhzj2YcsimPpA1BFtW5J4kkzkQrRSesPsT2NkMGD1E5kjV",
  "key46": "5eh5tooLjkTpm3N7Qm4qoCZ2GBYK5FVzLFCWFep1Zvo7VbC5rNRQT5vxdDeopjtFvUC9qDrND2H26b5ctEtXiFZc",
  "key47": "4n8ssJho1ufD9orp8rYbDTCWk2o4o3uotYAXD7JSXzuLscrdiCuEs12UjpdTixi9CxHaW6nLYHVWhCF2Qgnwcf6z",
  "key48": "3VN3SgsgzAQvKT377Vu8zU8qX2ugT1CbRnGmQrwo4s6BgwZGSwD9kN25XhjQYCMDkCkaN8EiCRTF9NksB2LHHMYR",
  "key49": "3Lqfu43HYCaWUy5RXE5WYFEbSf7c2ueSXv95HyPZTdYckp2UDwPtgZbfxz81Lnd9Ba5SFKQtXATWYwgnwh3V4RkF"
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
