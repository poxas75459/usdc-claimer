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
    "2AnFZ24tEBpeA4PUbaVSc3J9cuzrzUjAYYD3enzmT35JWorvzoMJSHtN4zzainaUmayiffSDrXC52Sw2zpYGxN4H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3DdMYGUJgjtLHYEfy3uzWN5oVyt1LwssCSQ3MicjYaMKZf3CfDzu7qpeDGZvwjpo8DhL6pt1GNprAqrjBAeKiHqz",
  "key1": "5q38CbstnLM5ge2Xw8xBKeJuX1pixnSUbsDmGJp2mzafEA8Yz3G65Stq8wQ9qLfvq4m6G5kp9CsyvCcnzKb8nLc4",
  "key2": "2VFNciTD9HD37rF9LqudeqgjwrhsazZR6hTUmeqmxx17ocMW1hFH8WdLqndJey6oKQgVGDbMAF6xXdN4cbfy1Erp",
  "key3": "w8XboYj3kd3iQ9YUWEAYhzUzJV8EJKwXD9BUaEBRfL49i3G3x87N1iE3APMZNG8aWtqRiKK9WMkYaZxzXwu5y37",
  "key4": "b9v7CttetwsvN4yskskdNkJ3vU6fLC7nagHAREtbQwG7DWNZjxqeaSijaLpQme1jM4yN5Zyuof8mNYcXKWEwbzh",
  "key5": "33wxc4c5RbhsSjvkFE3cFv1HWLcNXikCUPBHFZqMh1VYEjGdPpZFc3MZHh3gxVCT9PscCTMN3rbtnXVeDWYZNGEA",
  "key6": "2V3SFDkdPC77W3Zxqin9WNtoVJrpRZmPUjBpQFRBDVDbp4YgvaEKRsh4Ms1tsxRZmYTYP1L5tYkr8uU1uZhco7vC",
  "key7": "C1w2xR4pTa4AzJojJd26cTkyieNbRe1dxWJ688ygcN55YAC33HjVFVS6GkNGM5Qg3qcCrYBqgCjKgGgAwq295Vm",
  "key8": "rXATBgnBthpWVcG9Gfc1YEce49FMHciWSQomZqHGtKB9a75CNVD8ZE1xpSxtKZwa8QACzMbNX9P1SV5CnBCd7vX",
  "key9": "64Kpdfh6NfFEbge1WYJVHuAoEH5MXK3aT5iVf7tnL9mCuqVUgWoqL3JTyKeqAT5wWFrezeerVfyMxhg7ejMU85km",
  "key10": "2L23axGg1SSrNxCXNmXMwZZbJN5RqS3Mrpbe7ap6GenUpZftCsYd8etnPwPTSn7BW2upX1yqyxXuhoP2tiLQvAgA",
  "key11": "4qU3FdCXb7fGuRHyibRbEfTd1uCaGTxqx4jgqjw5LeBUkrvBmaEAkNMcN7A5phk1hRhbVvUQt9fP36uTxqxfxdtC",
  "key12": "KH4QYmMGV3FT6PZxE1mVUVxRVLvjnKU4qsPQJfqJJQef1VPbB5bY4jBFj68LT8u8p6wHhwzrXkETJdc9S9emzBB",
  "key13": "61Pmni62fZjx7a51JfZegswGtkowupCdJGeMDAHoHYJthMVQxVDT7GtptGH2P4YvcNuB7BPakzVpZSqpWY66Z5Pt",
  "key14": "2RnSxPzDwfX4VGax7MMYA4mY8vHdFbn9brGKYKQEGzBYkyX7qVvNEE4XG7fUyWygfrDg47PdKRrYDQtxV5T9xJQY",
  "key15": "4xduh9D196kq8AMjQ9XSfp9SsVw1w2fVs1kVzCNRLSkptfMBFYBbGiTH1U9KDtQCaVBzpFwYaAjUNxKDDMM3vZsY",
  "key16": "64ohEtEPk6dkTASdWw2Bo2N46nT6a9HgQ42WqKJdyT3ShJusZrfGDwH2k3dWsnzJCNLjG8WDMEshU5fLm8mvBtZ8",
  "key17": "3W7MZ28xCgzz76qnbMPgGht1ShjKUzK6UXpqBVc8ABnAhDo6C684RMXRxivZWmWjE7C9UXA2rEmrC9HrTi8pYufa",
  "key18": "2v9M324QzE9TsMeVQJsrA6j13DbTciadrPqiXdksm53KtGTykYQgG5ryGZvQX6Jk4wvpiT24g1UmThAhrPdZPYGq",
  "key19": "mEBwXB4xdhypig8KAsDQtc1PX3r2syQhvf2rzrHNMxNYgr18R7cVCrY2kfhJRSJDFtgo6749vuLiDnvGr6nET1f",
  "key20": "3mK1rFvSHwFEA2VHLznEqSR9LtdbCa5RPGgemih7db7tkbDMAzm48dqZaMHdW5VAQ2CX1rFCsKVpJ3iXEsNHGk5V",
  "key21": "4McZqovYVFuMbQPB8j7XsNb2XVmpi2cNvotq1XMJpTZRU9NxgfL6jYBvMeNY57d3FvauH32uiaJAxzEQQixxpsVX",
  "key22": "3ffkd6zjtuJeDng7oU7ryVsgt37EyL53V2ZDLidByZpFoq2WQEvDKSQfLqTufmDafDk5qatu3bs9nDGaGHKefK39",
  "key23": "5JwbtPmxrRo88DUuHny27MjpUkquWi7oWE3epUG9FNRb629fsnY4XFczibLTjouzKUZV3jy3HqUDTP34EmZBFq6r",
  "key24": "4G3W4BZzM9uouNJoL66pYs3TvnTSMFYTYuhZBQ2CR8JbfNXH6Yt8cQrnqqHLh7PU6w2uqadY1hoGEniRHAW2oMey",
  "key25": "4vuGS87k7iLp3k4kPAKgHKzJYyAr8zp4YQBKkiarkCRsFx59B8cJeSkgvMEoxiaiM21vvsaDjz4cMSWxZMMiv4Uf",
  "key26": "3zReKgqKwUknVj9FefAy87TBgNZ3WoqNcYmpVgZzbpuhwLqz2kHwRxdxdmDkV2KRbHVnNjztxKPPVr92XP3Z1Ysh",
  "key27": "4N7xuxsuJHmRJD3uxP7aGPJhBkNm6HKJAvLPdmY3VzQfjngWA6ZCngvoLhxpmNYvyYTJmEDX6JDVbNmnHD78LGh8",
  "key28": "67QKxqq5PAbELz5DsYD49kfDkBhrLmpD31KLsmdA3CPC1vasgD5E5SsmDmdtMnUgysbtc2E4ZEt8ihokwhQKMnSz",
  "key29": "2hHZ3nKgmLr2YKZoVSEtxNv2x7TRg118AptuQSLvhx8vDcLqUkVc9N4QK7co1NKd43CxEYbTgyWkjRP6DGHSZy3R",
  "key30": "54r3gyo9oMDdmQAmKs5FMSmrHJUKaf6PmdeaQctWYUGmJNxAiGkrrfoeipVFwAgLzHS6qFMq851orYZxeQm2Wjtb",
  "key31": "34urtA8rP8L9U1HwrvJ4cTA1gjT861hZNcyjj2H7dAMZpmvLCA3kNXeD1sGxFoA8Ji9T2jLc8irRgMQnvo2Xp2TJ",
  "key32": "2RRVpmRzUgra1CpF7QN3fhYqm7ph6LmYW5k4JwKGKg2T1PvG9cCLX9T8wnQZYZnphVZ4BDDoTqTCoptMP9er5CkK",
  "key33": "3NpmCyb1BbsiBWWufBaF4n4pnDNkRVm2L6MYvBoGz33Dpdjo5qxTNXbwksW9BdMoav2XSqLoBnPcqkn3zCDoxkTZ",
  "key34": "3Dsa1na8hmkr8Ba8z9U8PM4jmAxZWRSsyEEB4QTPcZX9QKMkLrsTJppEJwqVE5f2DYYpVQzmf3aNygHUePgzeXCi",
  "key35": "4Zdr5ioTY1U3V1p2VHft5DYypGNUkZT9JXsUgrncQFkUgnYUgXrxc6JKaGoXqvgPWuQhVX4ymS21aY1kitn7kACf",
  "key36": "3q6EPYQDS3Zata9HKuS2TAZWSwDUxzbGg1HaHQyZzw8JtJVPXDd8AYJHcJeQCn1ckeQHjKZEvBeMJUAjz23oM8C8",
  "key37": "g3SBWDUw4S9KWCZLPAzKq7VM4vok67axXxsDCf56tv9gsG4jPVSDg8k7E1Lv6QHsB5Rc47Uutso5ej3u2YqjYXs",
  "key38": "298KSygLG8VV24aerPNdNSd8nW7EMuqJSSq72ZAUqo6Tmj7tJG7z2e381uYwWJBWrrhgzwo9R9JvafaXN2DNVwet"
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
