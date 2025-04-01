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
    "4CVY1XCXveqekVh5XJidkLViFL4e3dNx45JPQFoo3GfeXpkvvLKA7MyQh5qSuqLxvWFSY34mRkx52B1LfqLmRCVH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4RxGFdPsKzEmq2k3bneXLxtcH6beU3aEzBv1HtQWFqFsX9d3RLa2YgB4e37n4JnC9zDzL24HMHHeAidWa3PyFUvw",
  "key1": "5dmQHezxL4KBrqu3fvYnHxRHRm7qQXZXL2AVQsnZTHqYsjfaN7yDCtqAAEVKKVwJBTYphKBvmjXoPHuN4HzQ5bm6",
  "key2": "4cLFcBhaHcpEARvn6SueezJXs9jbWBRGVPy4M1c4QCN6hyeQGjGynCwFpiaFSYeXuXnrvn1VvzqHyzVnfzVDked9",
  "key3": "39DWQJPkhcW5yrWu4uYaD7rWWh3FQb8GjJrtTb2AcFLcPoatoN37KASYMUCosVqRXhH8cLcfvFCnc5WbZNycZYwT",
  "key4": "NymxW5CkpioJfKnBrmgh1qHeY4U1QnNsnKExd2FiNdqq2vQLXYV4eR6zgh2FfHoUXP1kKX25TAm277FgWr3ZdC3",
  "key5": "5vGbfp87d9o8WSsjV3o7YtjBTSFR7fs3ceGpDtNG5Cj6Vzr9cR44bdBwnXzHBJgcReRhybZJnAHqq4Sd8T2eD1c",
  "key6": "2JG1wWGiWb3NLdmZGbYH4jmQJkuedkgRXZbLbVrjfzbKvQC4FwzuhDS8gNn3dhoNnP19r9jAwWDLXkoL8vJhT2uw",
  "key7": "24KgnKvaMg3pZadH2bLSG4UCLq5fF54HMVZmBshhev7ueLfTpBdXAgv9AaSx5zxnia2jLUJPwv8X1rmfJuZVt4dG",
  "key8": "BgPduw2gjT7TMSkA9Ff43fu1EEnxYnW2iQZa4UFDffpE9D2zCAnymD8sNiVQhjtp37GdmdgPCeT8QS7tb1u65xK",
  "key9": "275AfMQRTzqeCMyvaRaaYnjRaGD38cJ32WZ2NeohGmNNNQjjna76y7g3skefZA3YFKPNifZaHgmL8cVE17TUQ99G",
  "key10": "3Kn6CD2HTmxCxhpXxz48RW4mqY7EzfTb3JV8u2TnroefnH16bCZQ2j4T38bQw7zDHBxMdWykPZmrVKxmTcgRJMZt",
  "key11": "4kzNT7SvGaAitL8cEjhPoN8VxUeMXY2e542R3bvtXh91NQMeFWExwMifyfdjdvmXTpxewt7m2BYRPAvQNvf6aNRN",
  "key12": "2J9pxKucyszauf5DDj5thHiUFxtafaCZnshtNp2wbeUVhcbn6DdEgLgkrVUWgXMQRJMcqxdcJRyV5U3Lxa8oGmiH",
  "key13": "jfZ8hEQDjCknUDKx6FQ2UnF4g7THR6gnbHq3QqZMfBYpJ2SXuwbxv49xnKfTHLT1W9TJYZsHHe6Zx3p4XWCLUwB",
  "key14": "9pYf3XcCFsUagHPbx7eLzkVKt48TXTtj7id5LacKtYQWuGS1vjucVUQHuaAGneuRb16BRoPoLeAxVu9HivjjBsM",
  "key15": "5WJj1bwKdbguS6sU1pLsqYDL2Uh7wajLAWTTgp6swyYBACiR7AFAojLSdw15bBPN9JTVV8hebqDaTTEgFP4xZeNM",
  "key16": "TAxu6qBhyUX8ScKVbY524z4karLxiJQek4T4Y5Y1K36948HbkBWHReV2fQepuyCAQWr4GY1ZFmdyyWm9d3ioTmU",
  "key17": "5q9GJ8zM1Wa8we3pofCHgE2TYZtMC2RMAnteEKJ863Bbz5NoW1o2dnp5ma1R6LVo3MagMEGogw1933Bb8df8EZ7P",
  "key18": "4iWTfSV6y2udnNtQerHDjywiwvWaDe6AicojoSGpJVssNDWLHXYmw8TYwW18gUtPcuESXAQALXUVqoanURp5avrH",
  "key19": "3nGQZ5THrUc94xcJYrK5dKQ9yZ4Zgu1jUVk9FTEWvLT1mFXMNCDsPsQUc1eAC2kd3QFFG5aZfiHy3mr3BGESZeDe",
  "key20": "25R1h61rwNBcqth8oiURmuHggWm8MyXjhHzuhYUn4YtwH7BShsVxAbbHiH5sSVRGHVZfo66pKw1GaxPgCbStyE9H",
  "key21": "aDYdFpq2ESnYpGzy9TV5fgUxaiJqqzkpR6qqXGsa6SvD9b3oRDTAkix6pn7H24TqRpSECU3cJiGniArMoaXFVjn",
  "key22": "ZPFSW9bMoZUJyr82sPTF7wNZk78cd9MGEkQiGcxap1W1mnuyUi5WWoJTjjkjxx51ifkPZyFPE8jHGoCzioEXoLX",
  "key23": "5RbwpXrn6F8ZHFGyTsqSWDVgR8jsRqK3PLZk7eiF5jj88mu5SDxq9XZRohBkQCdJKAXaeGb6YP8iGKKZCTs2KryH",
  "key24": "5QybbsXmb7fjdR7Ubd4L5HsU8NKkY9DaXaLK3Vwg1VEqj4pxf6sisyXWjFjtNLQY3Y5D1exBTiz4fsDhwsJBUNgM",
  "key25": "3kcggUVVhFkWengJxQKea58yjJLt7ZcJMYWxXCcLjc8PYH4JDm1AAxg45ZLcZGmCWKdbGHHpWkCc635Jmkjemb2",
  "key26": "AyxzpW9D52Ph5uVNFBe9FjbkTWr92TPnhaKjsf3bk1f7sCqC7ozvLzTAktweh7GDgiWxETPsqjfJtETU5JFc4mZ",
  "key27": "3qibi2UvF18b6zrDBbNuQJnxfREVD119i1JMKh2LQxVSu36rb5osMnH5xbSiy9hEtmnCDY4CSwSs6QoSagiXq2dh",
  "key28": "5aCGzgBi1JRfYSRD2XDAXzEdYLrCP9TvHYcBNfo175CFNnWnoa4YsFakgSCtYwdN1Nf9tSS2PinHzD6RUqwdU9Wt",
  "key29": "628FtQsYSbLVFfGtdj7NrdWB6txrHr363nqu5Es5LDnr8uRmfJEvkSffJ4RM1pMr9xVwtWhV2E1b6fqA4GNduHTJ",
  "key30": "3cnM5sPi4siAKq2YeBfdNsnac8ZHesrSSGKAZqpwT1MVi96Qm9AjszXLaN8xcxJvXhcdWVsf4XkYvWjj55S9HYjq",
  "key31": "3KsVkBPcWXqm7qeViB8MMrBXkEbhjrPE5pFySt6biBMzYFNJXzUHZNimgs47akzjxDeViF4ddCmmCi3m1skQzHZa"
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
