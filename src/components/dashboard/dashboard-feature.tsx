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
    "463fgeGtETRoGebtYwmi8HeaiFc5zVj5CdWnU3ZmxvkKNcoQtxodgp7HMKJbhFEUJzG623XsA4ndHz5qJwE9Eyxu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4VUUvKYQ71NLiFvs6K5CB29xsbgpbLB8pwUfoc33rk63XqceFkP1uXEhzNYaYMPCRwa1dk6Z6hB9NYEkKUR1vnDR",
  "key1": "5Sc95ZNqXVVNFsvEmMmVMiVs4c4LkzT7PyUbKhYGgH7HQVmUB3Eg1Ww5yRGnr5G6fynSKs4ZJUpBpa96ZNJGNXmE",
  "key2": "2Cy8EBCVpWwTdEpFoCEHeVbwHJYigApjVmksB2gSK7Nn59PqN5rmxcKWhhQGHSJQqn7cgo3SdXJuHuJd2EEBeofp",
  "key3": "2U2vbNSjnMx5infcm8ahUE4qmrw6NDw3jdfmfj5zK5k1SWRPr5EKDc6o7zx5sLwKGM8AUuQQeb8KRx5cj755776",
  "key4": "3ayKY1ujyFcVfTHNkjNzFjZ6rzwa7svmjBoUP2hxUBYGkKVrg7w6fdaXFkk92VprFNKvA3Aqg3xcMTYWLXcjFqx9",
  "key5": "3h12X977cELCHxwyLB4kPh4e9u5ybDu2N3LJJahzwkpADMwZ3JuvCk5VEpVGSZaynSYoqVKeVMJaCq4c8hWwZ5DH",
  "key6": "3jDwHT3VZjvHLgsBxDg6fERyUsTZV9V1o68tW2uTZLkVSDosmTNaCjxLKTNsw5xezAtuyNoGrKvoyUgySdjrSgeL",
  "key7": "2oWZRK1oDF77rv4mtuXmKfPVqoTqSzqLdPMH6QA8ETVNduxYC3deVdnY4Y4R8KNFA1sRdm5aV77b1d7jiBEtEtwr",
  "key8": "3LVYGUpfPFDyR4QyAuDBeaWef7KspEkaVqvWpUvPBVvFMeSLDFLgvDKp9DFsyNQsWNzftpEsGKnLeeDaXgQ8HSGK",
  "key9": "2Ay38aKtdesP8doo46x1p4A1EcURZmt7QeU3h8TwEcdicfVo6uKCxRMdezpLytrAj2oz312KHoWmHzJVf6K44brm",
  "key10": "5i1ZEYyyZ11wqCiv8hryz4GGWn769tix4NTct6ESgzaRQRxrfkfUDyYzeug5vqzvUNQEZoazs54ugZskCPcjAUf6",
  "key11": "niLETx42oKdMev3CZix2Vf1t8NiQuMjVLUKGqovXYJqhpB6uT2AZz2tx9PnDQNt9VAKHs2wPqXG9hGQpxdS73Bp",
  "key12": "qfqvViYFmbBrBrcGPuiEd8zL2zsWq3vCkctDXSnyvefzgY3KNnyLisHjWsHYiKzE1F5HmL35T2RHtzoqqjnUeQY",
  "key13": "3ogseLjBikp4yWmj7WKchuCiUtdRCS63xkWFoAJEoTPg6yNaTLvKoPeDd8X5c3gdpHhc3tbNGfFX4epppKcmLfAr",
  "key14": "61rZCpABhRC8F3H5NshcjYSS7ByaKBqUa5mHPzMroadYQwSV4unbFzdFBzwyzveXPPbGkDYv5SCgVJ2kFTURx9yF",
  "key15": "QNMsX9u4eMXJzHNKh56hPQaxqhQDu62ep4kbsobQwSQnsBMbTGw3ewtMYpCH1jKhxgApGcqQCqo12zDm8Lv9B2X",
  "key16": "25gErLHzDtkuwUBJYGZtxF1kcTb4FyWUnPgzr8rD5eEqD8WEFdH3Y1s37kX2BxTGNAAM9heriDnkwMm83b1qEiMn",
  "key17": "4sesdvg3ek5cRvFieNrTZvGtVH2pmJdPbA1SHE2hGYWySm9nWFmgwDAjTAcRX2U6W1P5BV5pDnhsHusRioJXcK3G",
  "key18": "4ZgG1fTGB4FD5rZcsP5kgZjMBxRVQfoH9B1YtGwzbqQ86qWXdQkwqbFnh43DNEvRfpmHufVTd9hj7APG4YxmXBVD",
  "key19": "FA26Ct1Y1YeZ6qWbF1r5inhfiCmTLwVqd1TwrRbsu4Bxu2zCZenHc5Hq7FaUYKFG912j5pDZStnoqmDEumHZ1LV",
  "key20": "nbKnu2Cz4otccR18CG4ibpGdWqTbbTDHoSFC4F4N1kdnn9Xm3g4qCt7up2jmWYWm8KnNWQVjiP3t8ubHF9G2Q11",
  "key21": "Pa9Ttv4D9Lvtz28RczBw3rN4BKdVW2sPKuqbwR1ZfED8LBcudN6XXQKPEUjoZzwaZzQJV1cgQTJvXKSrBX9iLwq",
  "key22": "3D5yPfspj9MrErnG6kbZcG5zU5Gtpnmndacy2XbnXqwckawpLUjBsyfoC9okzuxFF3tkmFyzSzuEMn81ifjwZ7Gc",
  "key23": "5JUZgxDKLSzZgLm8MvYpr7NUePmiohFKUw5ozwsrYTyMNSSJwoVBjRwHUv3EhcdX7yXutWg22bXoDLyjckK26Soa",
  "key24": "UdWs2k8SCYDXBDmKRyTCjmVPwNZtLk986nojynBruiRc3u9p4WzoE2PTHTfJdVFM3wF1qA6ZiCFo2tFVZAdA7pa",
  "key25": "5yHCVoCPYYvhkr5hjbAnFFxtQQWjPKVU9YF7tT92hZhA1nEGJCfwkW6bZcQSmriQvG1Pfep7KGuzPZNVqJhAWNvW",
  "key26": "3pSi9FaS3BDy5bkoNBkq7da8Jkeu7m9Gue3cu7FwdwBZPAyzL2t97SJeF1U4JJLkfeJJYnQSfqVn3QGxxNXv8GoC",
  "key27": "3VLn5ghQSftKsiX3cW74foQ6Jxo1dGcbuh6wRebcQcuJ7FLmCsJWnsfhk6bdWkeaEXgaGLfvMFwz7s4bEidinfb1",
  "key28": "33JVqrsHrXbM8s21HPmbpBBdDNaMAJ6cPzdG2ZgwB3UiMZPGUBWGpNYjE47ocw65t7EiQLdoQpX7AmomF1d3VUPd",
  "key29": "4oThB29FkTveYBgD5TeNkG7rrUoNW7egoSyqoqE72NNHgEB3BiSAYXUAqKXkr6dk2jAJzCh5espASKhmdz5KVUvN",
  "key30": "2QLwfR5g1yJdkYppoqvvWDSiqKroaUUAamufBbAAmZxSde45H43F6xGmVWHopzNwcMn9jUn1tepJsz3fmbKNdhPZ",
  "key31": "j2hqdGGtiehENVgCHrF9pinBm13t2QTnMTXxxFB815foFDjba95J49qbqv9JLHGPKo8wvjFjeEN8JkWf4gvNEzs",
  "key32": "QdA4GK4J2VcmwnyEkDCTum2St9cF88UjBe5qrj8BaNp4VnahLWmfzUAgk4uabGvAyuEGJ6QEKgtkD7mKVdXSuEi",
  "key33": "5bDtDKsuDH8LyRxErkZ5UnbvRuEFDpytqYJqfAihRDHkuEr6vkufeoge4bcCQfLKddYocsJpsj2jvAexYGdiefNA",
  "key34": "2LPBL1cEsMMPm4L1pJRe1QighxkuXbaXwpCZUrzAmwkFpfBQm6V67s47qCywGimPxJHkLtUDZMfuyuzbXoQmCP3X",
  "key35": "3t7Mem5FHZtvphH7BD6rV6zy2gsuDj8CrQaFBM8sauXWaPuSMgDysEfAHR2BnaeeUfAojG2vtBeANECkfcaZibej",
  "key36": "4RyTwPUZmGPvX3rsDJsu6g6AHJPQkY2fXCJ51U59Z5PwhCpC8XDDy6dJueZL1ayBt2kdVMDUGmWsVVg5ASWABR1p",
  "key37": "4LLVhXprYcPhL6zMV1yW6tHUXkWgE2LwJJ3fmGfynU8T7Sxdv9xSxCwsErKMmvJrovv3HFng8XVQkeTBmRwyLcCA",
  "key38": "3DEamrhzsMPUwbH1P2C3hXB1ZByEY343qYc9ZT58jzZpCwPcDPMUSCGcg5jFgWWEzfG16qNcQn8LYUTqrcs1bLWA",
  "key39": "3bCypFRMChKT9Z8xpox3BqeNVd8vy18qPWLpaECMUvundpG5e27nDWWdLqAyfxJJqKECSjyof5o9Um5EbjjbyfVQ",
  "key40": "2UvTatk8iXU7HtYdvCZTXpM7SVQ4M3MhWCjctpDGhLH3ijA8ATyaUpZSech5weuSQp9u6ZuwMprRL8mfnVRnH9Gz",
  "key41": "4qTCDUgSeq87c55CtjPdffkEm4GYxckJFjjKPjri8xBXdpF2462B44eqdSNVBYtusVGCAv14a6kazckgMepGmD41",
  "key42": "24PQLU7as9fPxKHZDfty5HmLPh9adnWP4SxckjqhctLaNZDgMaEVwmsHQ4p1jzE4k3dqWBAsmc8P9mAvFSXNrQ6E"
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
