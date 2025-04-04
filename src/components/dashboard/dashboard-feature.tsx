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
    "zLUaUeoa5CtLr1jDpiwyimA8Svag1Th6u3sBb9QLV5KFura7yNbBSDVdkwGUGG9G2MguUfYgXDeq7h4VZMmv8uc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2VCsfYSau7ntukYHCi81e6E6rkumJodE9szzZVWrECCszHngxJPhnt6yCbihUAaNpyuVoSemw9evHGjYo3mBepTz",
  "key1": "Ru5RXdGLWWms2biwi8aUUSiBKJV63A6BgjRu75whEeWTLMnW8Jk6jjVm6jteGVUCaMcG1j6z2qV71oeiRPvnPy7",
  "key2": "37A8a6hX3CBG2x7KiYgLdATAaTAFfHBJ329LLzmiWMUccz4V4YbHVA8MRvwhffk5scMvtpt39nCnFbYvSw1E1Mem",
  "key3": "5zqRZ6NLA5kMhoasXDrHDjAT6u5q67avMUTA7SxynMnKDuBA4Rt4W3DVsQtMK9qCFccCYSQV5R9D93ZxU2hDT4Z4",
  "key4": "5viY9h1TXL1Kbhix2bG43pnxLPrWfp3b427ShcZWwtXkrvvZSbsVLVLdSMN6WjCggexShXQ4D3S3677wm9DU4gnE",
  "key5": "rhgexkRkHbpxSisaMonErBGHtpLL7nPruCJCNJcgZ8FktDQB8QLhvMAhMvtDpbpdSxA4bbEussZHfPkqW9zsLk4",
  "key6": "2pMtXarmoAVeMQ9Cjp8MRt4wPd2ztAC7zto4S2aKyMhoUNctZmxeVKJKgss7Zi5q54DSQkMYVwEvkqJ6qxRUTzv6",
  "key7": "2Jw15bdGRnKsJLYM4uNcEceg4Pia6R7v1aqNjRAsvqnNCQc5QdVKWeQ7nnk4gnR5uJXWNEdUfCNAEg6PTMEErvQ3",
  "key8": "7sH4cr1yAmzqyYhWRrDjici8i7yRCUBWudw4WWvGnMAa64fbWYyAHt2Vr4Kb4pvJoCxN7b9p4AV675BsouESVWX",
  "key9": "4E8LMprFZPEU8xAtQ2dwuRak59KscM8DZV27M2UcgV9qYft56zBCtYXBd52fV5BJ9hctszgoHFKA2JedD2VjBXT",
  "key10": "6Kgc295MZBn2L6oy2DipXsRkCv4C4ihnEHMxXqLnf9ZEjzGfjhFRMU3cphMvHrWJo62f22DWxUsTW6zmMRvo4rr",
  "key11": "48NfU1LmLQQdRfNfEpujjgRqK9qawhcDSV41q16pRwYgt4rTdUwejrW8CmBChU4Ld3xjup55XJPiEVnM3pJZcCVi",
  "key12": "5VJn52jRJrLo5EeCVtmiHVZs4iFREMJLvoJpqsYZy27gah5V9dVw1PVmF9szTSARLFy8tSdi45rhmRg4zPX8QBCn",
  "key13": "5rUTgVmLhLzutUwuHtVyHhgkARkuWp73hc1EWxnLbfeXFG4PmzfoPsxquE2vx6oNNGnLvjfHw7QCJkhZXFb5PMdz",
  "key14": "5K1ax9NaZ4bS7kkTU3r91FuvUrC8pPDtqW6SwaQvRwTsUQvTzvDdPaEAsXuazcyrcucZ3ME2vqGfRxQqLACuoEwj",
  "key15": "21kfS8fVwkSSnHJDMGvtD5RA9gYPaGYLAHddp8kNUsjS29RgNni7GKLUoz7nkmarrEDci8AHMzhL7s8pCWSfdJHh",
  "key16": "2aj3quTmUiEtUC7aiq6BU3KqmN1EPEn5cb2BdUjP7KQtGwTKHSLRPtd5DH7ajs1AjCndBbo59iTxF53HYnLM9LEE",
  "key17": "5AvkTb1KRCY7xyF4ZMny334nMjFYigcNF1mWrcnJdQptPcoHwJH2jGypfUaze8xsuGmXzeXmcEcotBALXKJFpQKf",
  "key18": "4BS5xf5Gu7XM9xC65LJXwvz96ydQskU6qWkgdjTHFnswZeW9z4QSU7rQzyUHtD7j3XBtTpbH16bgwUT8sTGUiyUa",
  "key19": "5gQ3vX7K1FyCpWur3HbqzHayi66z3JGtjhhvjtcDeFvCvaFnQxJL96bDbdxvqpJFwy7aHsTLd9skU9uC3bMFD4dH",
  "key20": "2pWGPqLKh1HVJqa7eE4HDgQapoXp1ghb1UHDf4RCKPYwnT8szbK8YtuisevF9ne8agpHUDYUHkLR163GizyYKVS5",
  "key21": "2F71SGnTt2f1bvDTz4dJ1tQaEZYuxhNAm4FJNrfeQ8XcKdRqAVNp1pKBj4EnB2v1aJh1nMyunvUtNSVK3GXvAven",
  "key22": "5DgoyoEEbG6Vp6Zwnrjrc2boJauiJ4UvXUB5PmWcM4PPmfBmT2UC9LDU2jBGxGLLe5oC9E7Ce27gLdAvgx9ViymF",
  "key23": "6pAR1haUx3edHMF8FLWUinaeMFhEEcdh5dDUGuRYkz9jjGUzhxKduSsxEVYzPC31YWr2WcUp7N8mYkMuvCvGHt6",
  "key24": "56TFoqFVU4ispSpZsYbw9bz8N5Ej61k45Py7kQkSKnoQayFLPrCzhcZUrJ2CNAJb8oW8CiGY4znjxtnnTAi9UXfw",
  "key25": "27dhuJHLHbhN2B5XdtztwUL73aTmswPVEH2QAZjTj3MAsjbRxDD4bcATjQr9yrqTB9vxPX3qaXG6xEUkezr2cNyL",
  "key26": "3boeC9E32fUbq6YR1Tb5ji7B6F5jwgYT6qek4CYum3BvbucAQf8n9ucVJfYRjgzfiFdU9Pvv26urrCcEnKSAse76",
  "key27": "2P1i2XJy2qt9YGVCZ9Pah9rvyVxnTHoftwwmXme7gvmvdyuWBQcRBaCUY3v7R2XUx97wJQKFvtSD5xfwB1CEVHSn",
  "key28": "4ddGBrLtpvhcEuLWGXGKbGiL7QkiShub4qDWepzgr6hj1dDin1bATeJrt2E4JwQLR14BuaDchGdFdkJknqq7EJW3",
  "key29": "24gxz6rvNrqTrAVYQsCVyJsjM8YaRYocRRBUNkF7ENkf9pDJqgyrwBnLpxDnnvr9vkRub9h2BC2T1Fr4JiQ3sTfu",
  "key30": "5J5snEodkVABNKNYExZjXMJua1QeyKh7cPJ2JE5vviBrMrh4E64G59mGycYgTtNyFmvAfECtQB3XiBhTmcNnXWiK",
  "key31": "EVAARvA5utWKeXMNmeUMvjtJEMR1KUVRDrA1Jfyju67FedVEesmYzmVj5RfMVvwMRX9sm8kgoiQcPNyT6rXUH4W"
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
