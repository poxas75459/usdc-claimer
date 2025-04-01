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
    "2YMKqxyuvmMDhHv35sToExD2zm1PJzyBoob7t2cqaJKdQQfcSs6S5yjsajq2LBjY7SjEGV1gakJ2z36Ys69wKHQv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4fU24vQwwKwCgX5fXt6QqwHWw7xvpNEGCg7oAq1SrBxQfHtvVmLWMQ4kqAkfCMC97G9CpWvQyNLo67iyBcM3jWJX",
  "key1": "awm2av7rVx2Rs8JzSnoLWeWERoBLYiyyoJZy1MTvdJ2CBYXKXABFtdTcWTs8G6nThsW9VEoyGddMDSZMjTq1VcQ",
  "key2": "2GiLbwhdCaxFFG7481oxZBw1fzKSWAyvrYc6GSLFh78pGZxpYjv5BeUhpc5yPXhphwmX7qnoz3DRDxcuv3RXtAgH",
  "key3": "2jXFJ4FUU9wcQQMz334LvzYfhgPXFwYtjEM49kYfXQxKsH92YGMTTEaBAc4cq2TVMxTud6NwL2UYym48qEUeg4yb",
  "key4": "4eXYkLhHWRdaDy6pdTvikkztvcx6qLRVMcjHs5P16rk5WMmmiVQ4SizQg9JuVarqqzYax3nL4J6EkjaDZZKK9EFD",
  "key5": "vsckoviiE27Z5bJn8Px5EfXa3cZeqYLRjzKW6rx2VkWLyxe2YyC1c8X1RQdQGbmxwoiejxdn6f8VUTAosbX17JP",
  "key6": "4DYDa9XZ9gQjocEVovuqevC44iHjsDGHqGg3HUga82MgUvVhvVUCeya9SaYE8MSGXsnXAwJpG9ahwYXisXs9tayW",
  "key7": "45WajovgTjSNzgSTz2qGxsWnRGJAoEXhjcwbLcH8NFEikV6KRsqKmbBdAsHB4ngoZe3xWgicPEeCL4tPhsUAjpzg",
  "key8": "58nWUtGv7sqaA1Bk25BDvdMzaVyhSxPs5Y4HU3ZA77g2naj93SskQznte94RucX5bQjAhcsk4GZFo99Rgj2Zmxka",
  "key9": "3RNY5UR8woX8SzzXtCuMCN5NEDVTT2CBL5TFduD7Mu8rJcN1cjAaD39LexiJdeTezs7DzUswdqL3JbycqcTb811d",
  "key10": "5JaxMUdrbCenUdi5iKLKdXWixz6CATcqKnYvcoRaUpfUwaef9HrdFRp7DuV5gSQvs8hfRjziumqAE2mLvAXHN6V2",
  "key11": "5TKLAq8JW5tTGhTf3GS9sAb4R6p2r7CxeJZ2tUiDsHonwKURuqDyNuGSafsB8stvTE3f1iJHdJWDRiVLuCUTVDF6",
  "key12": "24T452LndheGrwbxB3sKT2TqwbfqCebEyi3Nbs9ugjwGvQdonJyhxEC5Et7DuTPmBaR2jhFEpPPjofZMr9h6QAQS",
  "key13": "2B6UWJY7gbXhmbudJsQs7wpuhgwJHy1UoYUCg1KTKh3HekqHidcJktezpJL6CNNhEggFiDzgC1c934YrXJHF63Mb",
  "key14": "4eoUzesg8Agy3LS516U7P53xzAcGADXJGvhs62WvnH73AEmT1cBKc4uPSNXwwZ98n5vrZjHbvxEqoNaGXyvi2TiY",
  "key15": "dzfK5oEcmN7kMa7XbqesMvBLhWgLauyQbDoSRgjW6aX2tredwEPyjMX1N1od8kWyJQcEGPBis18jb7gh65XvH6W",
  "key16": "5Q5cHCKMwMZ84ZNu369feLKqe5gwJEAR3UuXFNKvo5Xz4X9ZJu9qeQRdmWnfD7hemjwX8gH3Jbk26BRzer591d58",
  "key17": "3uF7LwUtUJaJUPtGnBwdYjEcM6dxtPAi1Nxgb3464kH7YjowYv9fkihM3foKDm4X7nYG7a4sLLAUEpr7uGeYjwat",
  "key18": "SJtn6MNKRSK7RHo2QK9y7wnCGk2nTLfuL8qWmFEYG8pxBTteChS9e74ADBeTrv3bhSyFXfmzJ4acRFm2SM5yLTv",
  "key19": "2fvxTJfTuvfbn9TnZxsC9vwEr2SsTcLP79pEEQYzEppyS1YmQ6xvzstTxKKAh5Duq6VJKwnWcWEeYz9jAHaASTAf",
  "key20": "4D4kKZfTJAZTBCV97xw6WPWsesRPFKVtMXUjZ7U25GzeJKhC4swzx62asqxDSEEXMYUBeZDDyrmJfA9zkAkCZnD9",
  "key21": "73UJQXjaStRqAGTKNLfuvKiPhy1NGYaLfexjmdAJbXggGvE2ySTbMziivWPUJ9f2qw2WqiAcEW8jUXMAhRE11Z3",
  "key22": "41hnxfHFqwqCvqD4xrwUvavrgXXBgPqVufj3vjLeg5pwGZY6oCYukjQKkQHWRo7eAMQos5PA3cRciy99Xeid28HG",
  "key23": "52HKXmu5o2ruPvQtw6Tqh528wWyVBPjJpqsHh6aapy6QXWd5MASbjhTVd4JZvnjSkdNKnx1Mv68YaLkg8NBbF4jS",
  "key24": "5bvJp5WevV4zRyMMB6d5Zh4HG398KAq2YA7pinPUyFpNxMKgytxBw7NhepCLkjjQbLoyvg2cJx38bmhRQhS9G8mX",
  "key25": "4PUrn25doP874Kdp5Q8WZd1dWcbzGAuqzrQSBSGSpSCdBCv4rNWRwU3t8zeJBrhgwuwJZW58riDGuJ7G6ZYNtx1k",
  "key26": "udFDL1FpJJTeRkH1afVnJDfgSqBZefG4CacsvoKgfei93bZsEDVZL7rW3AHaiKs3Twk1jJtTVsgDJ31iRQopqww",
  "key27": "pU2oyWpKL8SaQtAJuyGbKFDJPYNNMXeX4UtzEhjvYsoVdYM4p8AKFFyzmk38FTeUsmiqtqvzPTUpwNnMRDVW6HU",
  "key28": "U9X24hazo65F5ByK1Kjs3p7ocmgMLErhgEiFqKmYf7ARcyj4c2PfMg1jt4XKVCTEUEBvGfV7msY99M2rfYiK6yY",
  "key29": "wjFAsBwdLgdxUnkKZHVfSZx4gPZeGFSjNCkw9dWWDjT1KFcmru5b6jH4yZUXXZ63Cn1rk791HBCWxUZjKTLKBcJ",
  "key30": "3HBqag7qe65mkqHU8HCWZfooS2BGr81Z5YoPsn7mt6QFupozrG8wSLxb1EYjuJLoiAHudJgTvz64VkHGwaifHaGv",
  "key31": "2x5wxXduYJdeFkCPxYESZ7mLcZ6eoFyEnCSrWD1BoZQiugmAkjZgBQpQF6jrqMZuNCK14rpXc7zUKRKV5AAvRsyS",
  "key32": "64jG5wUoYRkLQYRTG5ZvPakCu8JSTDhcE1JFWUjq6ruYv2yFt4Kq4eAxj5CNS7QCMGKnBLabXvTg19DtydH3zfnk",
  "key33": "5dqVeXXyDsvTfTQMNSoLYZaiL7vUbMV5qM3xE3bXPQ92MjzoSMm9qBQKcmgRHPHGnT7xAZsEkTcAjLeu64LSeYBZ",
  "key34": "3NWYGs6fayck39WoWHsuqd2xaxV1Ra4RfjCPixgJsxABd5m2Yse9YSuSq2t4zvuo4na1NHDwxuF6oA7QP11x7SiS",
  "key35": "21j1Phm9RRPuNUckXjbYd3X7Lp9PgRGP7Tz2rBpmPYZfAoXaQ7XyWoaMwxoL8wCT21ftjht4eUizaKatMm45dnxS",
  "key36": "2ddM5TzMdfVeH4jChZx1jgVS2LrVw1rjjJTHgBH4Fo9gQB8Jt1o74XJ955fAGX1gv8D4cTEQTxK4M23fZGrb67Un",
  "key37": "2aqnjtCisFMWVzRxPBXoFLzL1MFTFN2WiCX6N6vcvsiuhpyUTgZchdjfpUvNiEi4NjSsQaQdQsZFxu5cKzS7qw21",
  "key38": "34esmihe4kPZAvW4hiUQbaQMBK6HXWo76BC9Tvcn4TVnQ94srci2quaZpYZ7oTpUoRfBSRfRLB9iHF63JoL4221D"
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
