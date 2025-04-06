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
    "2amUKrEt5t5BthKpu81N9UvHxEx5wH3Fz12Z5UQqAkSzLGzUkbLHKNgunRLtRFnubmYDBU4y6fEc94bMqZ5ewZsK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Yrx2XGihZmwhEHTaUK1ihb6x91UWBfAFQ6pZzjFqEQD9ZCGG3urQy64JqqZGEEkiMzVe4pGuaRpG9Yiic6sWP3",
  "key1": "5mBfGZKXGVwDHHxXTjijALP7RVYNx1Hqfg1ibVCBYTHhibhDUdFEuJusegCn2hp3zUtRB5CRXuGyKMb2WSutLHkm",
  "key2": "HCRc64qfxNCc5wYoCQQar1cikCRfaDnFbx244ALEVYGKyQSnmkPYXxK3pajxR9LFbhjAhwd82dD5m82xMZscG4v",
  "key3": "3XmpiwwqUbkTGCJr4JNrJZUbjQpChHxW6p42L2uAaQMoyb1X5zuhvE6nAhWYMWdTfcdtszDo2SXSQBC5ndyockKB",
  "key4": "5SXsK8q9dcTjsq9Pc3BKzde6GJFXtTzvFiLoUErL7rGJwZtm4EKhHLW5fHqYdgKppPqGzUgACXbRMagrP7iuaLWp",
  "key5": "64a9U2Xwzcjv62VXwkHmDDLbQENwUYvEsyCARoVa6hNH2SVdr3TUVCTVwyyqCxReYMrQpvV5A4udu8NBT4HmJ6Ap",
  "key6": "4dAWMdkoj89N5T3Lpf7PWD5nNVUh1PkMoi9MWsi6fhLquHfd5tmn6TPmcNbFihisUJsHGVUVuxB8Mhxsw7Q3BhdJ",
  "key7": "4y3D95x7B8xJnM3bPBnsAvAu3JrBDGkUczkGD3XWjNEdAyHj6QWfYqLKfj3ZsdD6jg8dDWVsjg5cZzW49QHaaC6a",
  "key8": "mjQuWkbEJJiohkvkbn9JihJuxGBL5tLesoEjkUhPdkwWkGJLWYU5uVNX8rwRv4GMXwbFVt95yffcrwq276ZABRr",
  "key9": "3PhnhNBPCivjfcpQVc9gXiBFtU4mzhQ9PhH9oMizm3MaHPKc3apmGsUhcoatDxbVFh5wdnzeW58h7XABguyktWwN",
  "key10": "2kztfBjg6WaTVPhdtM6JCAALrPVyQmkuqubgPkzAUyHAWwzsbt8uRWWa1dKg8WLmzfNPDtnnuRu894aDNDVkSgv8",
  "key11": "G56xUemjq52SfgFnkK6hUPeq83bgXysvXrRcZcXNcmJmjAz75oUp4JaUdjq4jrWhArdGEtbTDgoKyAchWUarci2",
  "key12": "3pVJXZgRrUFBaCC6pZS7gYiuT1VPUR6tf4rGuDrkAJaGM2Hhx72iy4ThhtSwStfWsec8fG6FKvAspCtQXEVYUMi8",
  "key13": "2WrKWuDU7Ms3JjZSaq3Bgee2zSqRkfrh4bzWFf6zmHKoEWfcwTmtsPf3uGgjSpBVUJN55z15ckFAwNUvDtwEzZvD",
  "key14": "3ja1zh2bBXVge5TwnF9BWp4CqvMXXr2Mce1riAt11hjSQarNUz1Zbdthm5dNFu3Ko4qEkmCjmSCn2vLSko9jTbVj",
  "key15": "4etXDCQCkD3Hf6NHeUwoezTZuice1DvEfc2mSxdjsDQhUgdFdLhqMgumxuMjnbc69Bo7HRWiq47XvrH4mGpbHrtx",
  "key16": "2nvqyy8BT8VJM3ELKSciQ4WvGLBtALw6KvmUrU5DXJSihYzc6auG8edMzodHYAkiSkecvtJYipFVniFFvh9KVPL",
  "key17": "2UJkHgG95gCUutDstcWGmj8Qg1TzjvjFGgvatU4oDjsEKToYEBD46BU5aw7bw6ytuPpSEzF184suDE126JMJbeKs",
  "key18": "5gJJEXQE628xZZXk6QDzMfy2Tb2vyging4vsXfeSgwNsXY5QCPwJPqGfC4NDc5hztuzbPjHQcjmKfDGftcRweNNj",
  "key19": "5ztRxprFVXdowv6AmGcvVbYGY4hhH2Sjj5U39HwRpBbjeGkHUuxG1mbxgAwxer5e31mYXDzVbq1TjGNPvNSNvHVs",
  "key20": "5CRumVXXi251FYxy3yA2wKDEL8KYcW2Abrv1GZnQGBQwSP6DRRVvqbxnLCgxoAQ49jgyJc7gEiykjn5oqKaMsEgP",
  "key21": "DUoU3TQ1zLSqedewkBSWR3Cp7k4Fy6bU4B51QPmPb9sx1GByYTTx3W159SrSBDT9p64JqWomgzAQS2NDkr3quuX",
  "key22": "2tySDZPXUdPv4M1rMqr4fVZYadRmtqvHnN7dG5YPFPkZudmv52ZgP7tvAvtkXGW1ypr28MbBBqkWaD9XQytNrCC4",
  "key23": "4uPZuYaZyVHaN8mb95zK5i6QY7HYYCNWAzPocVw7w1q4G22ffwrS27XVZkZbyVKJwHbosKE7u5CJudaH5ALzfVYH",
  "key24": "3tXueSEQHNuoqtTN8MpGNwMSL4PNb9gD3saHdnRiQxHNEU2mZUMMhQUDpfVBKxUMrpgQC6nxKgA6dEpTuVieWryW",
  "key25": "61xGPVGtjPzkKKLEw76YDfRpwX88KeXBqdVDAQbAf5ZBu28mHRpCX8mKYxf1eYWcqriAp669KQBuPZiiEu2NEt8F",
  "key26": "5zK4KbpzDimojZQNXPbgyqmjYA6889pzgJWmjQeYigeXgMKk1QJrZEEkr57vNEYibE67BkhqWKe4QWWfRX9Ruevw",
  "key27": "uSfRMNmZjGYKePPR9KfXeXdDuCToszuWF8qFnSLXVFhrurGNAKGpf5xqMtPkd2LgbQDuWE7gYgAgShAFRzoUDh1",
  "key28": "T58cakaXTw5gQU6SHAgTNpq436kHMb9Y5fUChoJBR5vQGujcbH6SpZW94rzvLuCm5mRXnQVKNHxmArGUdc7VQra",
  "key29": "4RfRn1Feyc17Lgt3ALwFMmApMRr9Lffx6x37QNkjtAkWMcUZt4E5Msd6Q7prh5Mcad7CERHnhSNfETTMG9hzXWbe",
  "key30": "2zjBk2jo1r9BbdL6bN4BvGXs1zB2azRWHEvG6rXdwwLYCRgf973BW2tiGv4LijDZYp7q9Rfg3huBCD5izArEzani",
  "key31": "2o77Kc8XWkmLPiX9SUwbvBE73BFjnQJeRxy8JZ3e9bGV5YfG4nnMm9w8bF6w57E3GVwEkdr6fuw7g5tdMskedNMJ",
  "key32": "BEKuqB8FvuCChpupgSookQxppSSmi3yGEcAHHjacxpNgqrPmN2Zi2j76cjzHTmiSHXjpebi4DC2ompNAGEKWyYX",
  "key33": "4kSEvnHPHfXGcLre5H4D3wYHkp2N6qmvkxJJ1jTTMubv3CGHcedvzzgN7kgoie1Daf7seB5iVQsoareXmzKQGL7j",
  "key34": "2SkZ6QfwR96MdPR9ThEYyvUcL2jDckno1E4SwTY3gKzFSwz6XVY1p1v7pM2aWNFeTrR3uzWrPuPbYpeFJYLMtqMg"
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
