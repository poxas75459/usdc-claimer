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
    "5y4jvQi4xATmTBekVKg3zJJ3rdgRfdMDshfvbessTmJqQfUMY1JWF5K6x4A9TAsx5idWwRPZqGqnRcryzJ5bbu99"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26yxyyyyuHcBESjZps9sbwCajax27UGnE3CHMzMUtUXitL5m3aQwTsGeVFxmJ9WE3MQpkxBKsdrxcQ7Cpqj8yDgs",
  "key1": "2mepVdStJhMFUj6RwU3cYaFvYMtR3ohA4oV1GfLAaeMApDULyUBhoZoPEi3Wo2pJt9Lhsd9zVDpbhG5ZQV7L7cgX",
  "key2": "3Ab5STPp5p7g8HMN8jpBtSHQLgSS9zutxA3HhFYug22cY29ESqRZAKHqKGLP5xYNjYBijbJ2DeX146bBR7EnExFK",
  "key3": "28S77KZb3Dmc1NEAG81UnSzNnsLLiRMpGYhD7ac1AKhcsLenBR1G4whJvzQvjWKP24qbDmMcxQqCHyhuRASX6VTo",
  "key4": "496tD5vMrJwcSWQtX3tWFVsMbde4cyriVLNAzAi6FVsbMmHFeSbKEFLRVRehuu3w1PnDJY5mmmGZtJVdYAi7ozNA",
  "key5": "4gH3m4dbej1rfVeBjorBsixgjY6oEQ7CXUMkq1yL7GAwyKzUkZVg7hkDMNZphhpWU2KuhGmtsU58oEsCKU6wxdYD",
  "key6": "3u4Ap7tMMw3xtD4ifbhGseaB8rCKH9HZDG1vqC9r9uJ7511JoeB8xzao49ajBgnRSnKf35tAzpKQUDqhYYmWpSAi",
  "key7": "52vKgq3t5CaUvnMCFC4V5vUgwmAdrbaSfZNWWarRtkR8wctVadohmb9oBMcjp9gWNBtCdvVb8q4Ki53EEN8dougL",
  "key8": "XQL4kLeSBXaYgne5x5RbEdspdFs2xpdfEjVzpJ2oz49KHd223eQf7uCY64T8qPZLzQw4z9LHCV7RT7cyQExzU29",
  "key9": "3qRJAE3abrkWNCzUor5DipVYWKuHZqVirZvfjjp7WSZFLB2g6kXQcqnzZHUCRhD5yradoiNgz5GHU6BrC3r7FYqu",
  "key10": "4LnBChnfb29KRnpVKz7v743mjNoUXxZsD6gFgejLycvUuiZgSmtAohZX73tdyentaSYkPYX4u382sDY5r4uM5UmR",
  "key11": "5yP4nmUKdBQmV1c1yd3DpDEAW8L5v51dgCiyPkNxfzF4RLvHnsFtNQPCgocjwuZzKZ295W2A2JPKauuxTa9S9df4",
  "key12": "32tpSqJkoJzstAin5qGbdPFn157pEoL9efT4zHFw1FhnWQYYGrgEptmiMEo5FaAiZCwj3W7ySf77vxd3Du6W9Paa",
  "key13": "fSxdUw3Vhd365Sv4fhR3o8aXn9yxehDYVzZAN8zJXxwQh3Mye7vUQjHBa8J3hKHMh9RWaNkcm87KE3ZoAqoSN2X",
  "key14": "5gzCSM4sD7XP8TPUR7Xre6ptoGFQZ8HfW378m2XLnZjHcDFmdbnZDjibwnN56p6JP7VZ1FTjWiPN8PzviJ4KppRe",
  "key15": "3kg42xtUQDsiZt6NDVjzrP23w1ATqeEHDsUaiz41PMSK2YQbBK5gcW6FXvrdD629MNUHBbbxQiWCAFTqgHBciSJJ",
  "key16": "TArEn2Gzs7ztYaNCoEoTcCX7ZEvEuFaL4LFzpQ4Y2yk9dSAtUCJaU9Y4TCVmdZM6HrwGyCMbsc3Qwv28VkbHhfJ",
  "key17": "5c18HzeKyooP2hFVsvPEedghJ82AR7y5z4nAAoWKPAG1jSH6WgiKqmos3WocuQWx3RgjpPRSrsKV6M8r5ZLzWZN8",
  "key18": "3XWrQApFKooiGf23TNuv26iiRdbcYytbNdSeHhMobbTwq7DHAF7m4EnGSpgEsyWub9suKDFreWbH3iYzCMuWyjmr",
  "key19": "3yKF2xjpw6s35B1wgckUhCE64PhRXat8BVXdcAm6uYTXLbM4wLb39tFMfcWjJ5CN8wc55UXSm9Rx7yfU2hUwTA6T",
  "key20": "QKtqEvJm3ZnfeECrB1zDutjBFko49ij2DdT9re27WwEfy6QdGKBMYrcFcvqx2ip8937EGH4eL5ZMG83TD4Tj2ut",
  "key21": "5XnVk53PhEciYZJWpGgAPHLTxfzcbqB65gBHUX35ZxgxMycy3ycp7AE3kTX7StRb8TJMZwDLuVZjPwyA52tKnHLT",
  "key22": "2EReYkQRkHYiwxu7phpAaM4KKWKPRmGrERcRRKgVWkWB2ep9UdaM9jpqPGXPyEqdtHJ53xkynvbf49HyGVAWMwsd",
  "key23": "2dkdhrzL8uqPCmkqDevyZ6RiznqXziuZcZcWtzKpDAW133JxK1AHRkzgdUGcvH8FpvZ7yTb55xiZbAxXoxsgdoDD",
  "key24": "4K1WmJT5PAjPtYNX1ntXZ1rja5KffQmx6fgCYB4bhdVrrx6TNdZWsS37wRmjqBrrU84LULMardDHRPk6hksYY7Ef",
  "key25": "4DcKymNxeqdK44HeE3TydfCv8uZ6tHZ4Bz9zN2MFMDzqGbUnqMGKa8mRmTU4joqzHsXhesjosb9itt86RSRyzGEB",
  "key26": "2UdDAPB82uVFwA1u43KFa1yvprKHMqr33fweQP41dfJTrbz97oWf8SHAi57UFEeMHNuyaVDuo6tWmnbUtKXzR6ke",
  "key27": "Z7S292tbxsZ8XiHLvvcTG9xPf8qfJzv7TpLFQG9jC16AxoJjJ4YsRbkQYAh7Y299qQ3k1BHBLUSErv2d6b1Wo77",
  "key28": "51yG3xTqVtQQWDHjFvB9fcmu3s79A81X7VogCgPvkhozHXQa4YYDRMbNyBtoih3TG4HBqxA4SudwGEh99rJW1sTZ",
  "key29": "zfcG9TJ5McEfnBiD5VhF2u4PQxDFD82y5WZfregY3GfQtqr8aY4CttLLzJP62Vn7Gp4ssRFhxwoA3w18WXNybM6",
  "key30": "53adDjy3vZy1rYLPoXbGBw2rsH2VeSL1o86YRGBiLb45Zq9Dt7URsKWoXBMAM6XhQnzZL7s87Zoubibd7tRHXuBY",
  "key31": "2gRGcvBS5Apto2PXZNhs9uZ4Lcv2Ptk1FKHJbGz1HtaDq5SjETZUTAhjcr1mZM9EcoPYRy7k8R5ArA6jkxm8KBUy",
  "key32": "P1ocukrU4PBfZ5KcTQwiycvuN65FEYtL549nsHoPjGUffdc6YtZLU2X2Pdb6HvSQ7Ab8BJZBTdhAQN21J8zeQA3",
  "key33": "2eRXma1t7UcCQZKDqndsYerYGSeMexkyvf4er3zaASXtxZt3W4b8oQ59MQnAH2P9YW7KbSfMbXg4b7iz6Z6iJNPs",
  "key34": "43UnpAsjFAuGfXkGfUptxYsrfUQ8MB7NcV17uUDSmeTf8ackULuRxF7eVupYj8DDcNWH3xyxpihDGQr2xJVvamcN",
  "key35": "51RvtHX2xN5VB2ace9f7Snj5tAptYHRyQhtUu3DfLc12DLeVkYXLwPfz5Ttrxue4ne73S6eEX5ZXe3u1Mv7Zzscy"
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
