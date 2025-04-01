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
    "sdstVek22pK7Lb7Zh4zEVbcgnbD3qnjJjUuWoPFrzFW1tSW39nmPthEpKpgbDbYCr45gzmMSQEHe2srWcrMHtRn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4sgMf2VZpJnryhhdJ1hbHDjGR59Nn4bTCK3JPGwsAH8oSPjQAkDQoFWaK4mpbtHdHEkYRWBRvoemse4yXKcoKMk9",
  "key1": "4P3ugKCo8WA42VXwvoSAHCEy9zYnW21pzP2v1rtCuNz5K6GtoFVZGSvmAmQLkC6E6m8KJ1h8b2CuwyRiD33okjg8",
  "key2": "3Z53e2ibt6eKfRpNAjeUppBH2smxCdM1yjqbw6MgySk3ATgVZk3WxnjW29EMqFctUZgmZPsyYfiV79n4AWk2D1bs",
  "key3": "4PkA8zxkJsx8j3dtyKvtvMueJRzdHTpbxuX7qoiAxdfLGNjkEiSuo8NgBMbNgSLWri5pKd56D9FbgvWofBgCwzKg",
  "key4": "YR4XDEM1Tx6rerb7zhdV2NbJHAdCbMZLUDjJmqC37LFHPYnYu23ooEmpn7pq68uBu9C94mDyDMjeW8JggHcSiU5",
  "key5": "5g3nrx15brJqrQoANj1urh52Mh6XyNPqnDLaWaZJRQnUxkrw8rSS9L1yUWFfH9zdcwQUBGo6t4uiZ9UvAVH7jhh",
  "key6": "4hC2iYdsUdxQmfKcTBWmJhj8UgW3tGtCytAivsh4KGJWmEX9zFrTcog5rEt4PvX4YUEQPpVfKCxXMGB52fANbMNX",
  "key7": "27votZcQzx1sDmJfqZo3iBHKqnuQpP2KVBf6p3BNefyJbUrVDQx7NJUZ4KvBazUFogJ3Rk5fbJthMefeN9FojXPG",
  "key8": "34Tgi2UZET5U8REuq7v8ajczRqnHHfN9NPhjCqBF5WB6LiHE8myquv7pC8W9Mozerj2UF9jzchMoXn82Eq9FTta",
  "key9": "63Q4y9QyiFs6EamejfVjnsvgXKANtbrSAxhpQQoGUW4VQtAgxJR5URYuSkwjbCYiqgVmwpnpRNVsamwPYv37iCTM",
  "key10": "2F2byqJ1J5s2RaAjcfqBrfJ4ds1Yc3q4cZge3a2yM61VptKe6k6YPvtAw7CRgDnkhTHfFPGjUDaymhFbzujW9JcT",
  "key11": "5bdFpqAKw9X8gVXgPi3zAzrDod3R1DyS4cHQeyUwqiTauVbgAZUU3doYcnes8GhXgueQeN5ddr7yXqSBCYxGrEm6",
  "key12": "2aawufpHjVyGyDpthbSqNw44d3prLmndajNBpEAta5xgR2MtgmYU6vY2rbL5cAPxZDC6yyk3ss22ZcVYD5uykekX",
  "key13": "5ogQBmQtWmgqZf3RfAQoTksFrHwdP4PbgVsD2uoimVBKKFHMJrqfNf9xfpgXZnxp1pLaKZCiv8r2VMJz5xLPLzDA",
  "key14": "2kWQ57wJPHNaBB9RN4Lub3bSVdvZiUZKEG64LgEb7xYXeKu83F5euRvVQzPggpN6MQFwJgkTHD9tMnjpuL8xVzuD",
  "key15": "3YB4uqUkpnf6F2DfWTZRNhgxXWkSvAx65ReJUMpvvGvsCKr9qRFWFtX9YhQ3nrbyoVWdDaeCmvVMVPrexeMyqMD3",
  "key16": "4BZfQQtDeD2bZGiuB7EHw7BhKq9usBeAJStHHHnSFDcrWX8UYaT3EXD8eYMqaiwDqEmPG2yNnMT8CHNr1pFyXooL",
  "key17": "4HvSAgYeiAXoQ2P5EN3CYPCtgzkj1sT3hPxgHTUsyHRKMUrYiBUr1ZoHxNKnNCxsi6HWudoHNFCgGGt5qnF6T4pX",
  "key18": "4jgPfLJtNzVUmdBtkFQme3tD4jV4jvcGSCuZjS1uYb5v2oKWj9f1Su4CvVMdDeMsjA7jvkUHtZGmVZiTqZzT7EKY",
  "key19": "i2eSN1rnsd5mesgAa3t3VJ64kihp2a1NTVT5CbNjMobrFday6JrN7sgAn1m48yMkMxBjqhJEgWkrzHDC6PLYbsq",
  "key20": "zYFbRQGDjpQLFgDU6tcuHuMKsrVbGmDjGJYNq9FiUftaUNhjzBLQiTKptPj4nb2nwACVeFxaDbkmz13rgNpVfxY",
  "key21": "59cT8oiRcsjaXhHH9BN6xJGRbhdR7XQJZ8masK8skeEtGuci2Cce8sKri2FqQB4aR2LedniEMiQhoDJZBB744iaF",
  "key22": "3KDDwCCNiXMWDDuFLwHd9YyYhGgnfiNf7rgZVD1oGxDczrSBFKadJbbF5ukXM7aR12dA2SZV8yqsN1u9coZ6wU9e",
  "key23": "MkmDBHUL8tQisk8wcsNY9JGMn1BGNLLb6PgHJoVG8G5TKgreYKKfgfgLi7Nq3GHjnF4RRKMZkAuvBu3m1uPFH1V",
  "key24": "2CxVdQuHP4BdowZ79LKe3198tDmaN7sSSjAY6FWRQtawMLGBzAJZxFHX7EKVpePGyQ4wUdpTadNsxWGV1rnMjQeE",
  "key25": "3QNzCr8dHxKwXEDYFUBMRmr2pbpHM2PPGJmYiiN3BHmJGHtuTNkH3u93ewm5ntCG7fK9zt9fPCM25bMbe8Pak6a",
  "key26": "2CMKZ6wBjB7DJiSTgzrv8jgocFhTN4UKr4iLmQNGU2bJJ7ZXsUUj4MBLN6QvnLKVM5Nrb2xy8B855QckXXV37Zhd",
  "key27": "4UBVBxzFRVkysRzevgkmbAjV8rkgn6h7ybJTgxQqZTerxnrMLaKpMePLkZdRPDt749MTvf9pVftMQMzXcekc4aDw",
  "key28": "b6CcSDfULGzgNwnL2huo7HDD6tNbuTWvVtr9wLbHfNfpZuW4jK6qbTt2UeoQwhCqgnn3AAjuKsJ9UE6McrZBnXC",
  "key29": "24GhFdZUnjoMS3Q3Q9CZgoTKevRZCwxZWL16Wgyqnpw1VJicWQayPboQu7HWkBjpCZgR8Ge9MxTDVF8DXUGtUxmv",
  "key30": "3wRnLigWVcqMnMhMZwjjipqH8sGUY7FjhCij4cBcBDG5bzcsomE5aMKKMwPqUHQRiUBQdGnwSkNAUhF97toiD8Vn",
  "key31": "5YMqX1YSe1XKMYszpngeajPc3kqGjAXeKb5NsBMfuebavAT4kFejMsd9A4guyasEDbwFrAb4UQhMC3oJK8FM1Beg",
  "key32": "2rgLGJizxV6VpckbbciZS4g4YEpitYyY7nd7WtBbWMRsbGmnHnnCNWmBzMrZMDHvxi7KZgKiqiTydNed1Xaa9dnm",
  "key33": "cVABr8femqcJ9rRqg4YtYG5iizr6EhC4D4yfMnwa1DmHc1b7i7X8V2edTawhLonjpGG6CXfU56bTqbrhoAi8tLz",
  "key34": "2NbzSXiXsvsJi5jNWszrTbicD3zr8CmV7ZZHkfUaYdFEFd3q4XFcQM1DihsMsoywnyuCWPksyVqa47BoVgNYinvN",
  "key35": "PCtFSyAPXppQz4FTAD3LBo8sw1n6jQu82FPLA3DEdfufPzx3RhMA7xgcJE5DnTwLmMj9DM231yK6RTNsZeGpeqd",
  "key36": "4uYx9y9kZXucgFRqwYZKjG7yxHrc5fwuvL6xu7REJgkm47tJbu2tfT7y8kKdM3vpCFCYFVs8Q5w2VBcGW5yBGyx7",
  "key37": "2yatrdVmTMrjZ6beLjmn5gaQUmgkeHrzNzmT74HJGEchzKCPegJ5reoyKVB763kNMfF4aTq1rmbtHzDREoqP5iLg",
  "key38": "2VXyh8aBJJ1cHw2Yn1FASVyyihUv3yUKCCaafFgNhZyAE76bnKfwQHdio7sNxDzczRXaSrgmcPHMz1bSbQq2yaDF",
  "key39": "5CSRMGt7q8kHJPBCXWQhidSFBBeE5A9H2S1TWqA1z5EpiE2KLSsAv6Bw866pgJc2F9iy6tbJzUJsZAPcrjfmyQf6",
  "key40": "aXX5Wpp8ppbTpRGZ8cDSheyMuvBsAyWEX9KJbdoPx8NZ2B2nyj2NNb1PeM9fbMyPjycxmwkH8gjRkcJgmHYJtQu",
  "key41": "2phUKPnAQis2zVXBVsybmwQBpwXoVTE1orSQ4pfqHWsU2gU8KdNkuAomoMiBHGcehhHy8p46VAyf8pE64LhAXrxT",
  "key42": "3hNYEvH4Ug4R4nNDE49Abc1hhWEH74ZTCwUFsuEgdFLqhC19BJfbe9aq8bJqVML6kTNjAyXxg7df69jGXvHfperd",
  "key43": "5tVECaAfjY8sUh8y8pRBkyCapeD7YH3eJ8q3wShRXMpuA6ZksVXNCFWg3zATc4ysVJqcKEovjbBYx1sLGQByMtWQ",
  "key44": "5zESnusu3rPk8sPYUH4e1HbL5UsXwQfz2S6T8up96nSAf6eGofem3BRFevaTfywacBJ15QYPTgdbzyALDqajhkzi"
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
