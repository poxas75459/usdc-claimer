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
    "36XmBDTsjbUyWuC2nKL4kLU2epAqTLfxWeuZ4tvEEjZiR1rJrxB463upJeVVtS9DMM7XJ4piBfsmXkAvJWR7nexv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3w9iPnnsSAnmVTDZHiv5LwshRu68Uz7SsLzmmp2ZGYWVCfSXzvBdnsfNptTY9uYeu4pfmxPqfJfCmfqXHDYDgR1e",
  "key1": "MSv9tFLquCPUnMndwwKmAbZiy5ExboCL5hDaqz4DEZigNQt1HVWtfegAY9Ye4Kkd3ZpckEQhQxFMUQFCjrtukgs",
  "key2": "BShoQpW8369KE3SyMJWWvoUmPije5EyznZfNnax4ufmXX4zASyj9KtaUArkqVMeCJ7KBcShSvciHgeWhde3bcSM",
  "key3": "2pzJGUM1tboq4Bo9fQgpHpBYEUfPAciJJAw1tUV9eGrHXJhvgZ7yWSno8pT1ThCTx1QGDjdXE6GuzqPCS1SXJwvN",
  "key4": "kxQRyGKqbVCZJw7L9RrKwBZW38rKNv7eF3PEV3HgaVSDF9aTrjvxb6Q4s1fy11gmrJwzdS3aP2pFqu16RXK1NTN",
  "key5": "3WN9C62oEMBnBH3e6cKC4pt5oKs2vFbGWMNJRUpeitWGUe52VRYUcoduVKjhVXu5SYkXAkYen5iJfcxYUwWyMEzB",
  "key6": "56KE1BRnLFVETMreXSAyRHhD9zV7nwrADhfokG6JeJ5SkxabC7Naty7oFQ6eqWNns7dXfYVCoVvumEGKAdWc71E6",
  "key7": "3KbuegEbQWfA56BsUiyLTH2VgQvs3SfaBSYwm4gYqYVU8xv9MidSprvJcEPzFa365zCdinmCL6xVNQYh9rnCFBgH",
  "key8": "XMiJNttZp7BfSK6gQoKXJYi7CeqMPDs74HVLyWWNWv27Jmfsivu5DSM4vhA75p5DvVBa4u2f7B4BeHz1xbjNNoH",
  "key9": "5XvhHpmsm8bMdQu4DezjjsBNQcw4WPutEioxQcp5cmhgwMky3chQr75abvj9w29c3wxgCEV79n2EeAhN5cRRaCYa",
  "key10": "PvyajwrZUPyNGF7yKvvzyByX8F21g2BonPa12iuGZH3jwtddHrJHjKAPjBnGuDrSxrCUdVQ8xyrcwXuYFpW49ny",
  "key11": "5Nggv4eCbYNGsqURWARYPE7RfWsYJc71C3cRMyNX4Lufa6oVxzcw1kxYK5KbiDFnZsugQKuGmPHWPis7hVBp1frZ",
  "key12": "TqQ2RWvb9BmLqSfMrtQJ7bsoz3GsgVdhGnguN5ZxUUvV5q9jBW3ZfyrdydZZg3ahMRjKjhzxsaUz2C44kcYsZDq",
  "key13": "VRivmHbgK2yt9dSgwk88j6qbzCasmWT8nncboKdmpwubPvdvcxs8TtpdTNGQQQveZ4BGAdvFu5Ybs8M95iCxuSs",
  "key14": "4nqZ3Cvv2yUMmFQziLxKVQXmDpxYgiEitspm2PcGZJYsYhjwXngPJuKiVKH6fhuonhv731mLmLdni7pomJCBsDc2",
  "key15": "4hV6kCEe7vz5UzMR3K5CzXYkjPw7J9Rg8EMYKpcWeAU7bLWXsqC6qsbPqJSR3PxjaTtgEfXe6BmnsL1LfNKg34K1",
  "key16": "41BtMPhqWSMmatxdjHdxezxGiATe1mugjPpQtfV5MqGuGEWfB7s657ZG1oLxxNiP1323QrAj5Wufw6Jt34pK6Pk4",
  "key17": "3L5pDotosf4fLxuAL5cfjwBogwBHUGjAbVMPKj4Q2oWFAMMx1aYKtNH1ZEv7jWUrEQwVg4q3hMXCE5JbecMA6SiN",
  "key18": "2g4BQTFYhZiE2xvoqsV9abPKzKTmCnYHeVoebbpvUdqbbY6pdoEK9rjS5cjkmZN3t2zRgoV1ks5AqMT2neqeKuF6",
  "key19": "5uspyJYnejBB3roBU7cyHDCtY6fGXMeqHyEvnkn73V2zSDDhMJH6BqkUYPWYq2aiDiwTrpUYpVqFBZXEVtafgdbD",
  "key20": "22966t2c3jicEKHDHUyLmecubxhThpsS1s92GP3DuG8ZwkkUw71U2pqW5QtxxfTMpudLL6QHRyYUK27BTCHCbkkj",
  "key21": "4PJLTH3oXKVHNnNve2qYhuxC6rqatbVHpoGpcWfius9JirAgb3yvnyX65KnXhGcbUp3HkxAi7DUcqs5n4w4egGSv",
  "key22": "LgmHx7Cj2cqn6dsA8c5JvWegunA7tv1QzEkcmZ1gzUwTfjDp75zWqfT2eEE9WVaigcHiMQrEhGecj4rGyanKsxs",
  "key23": "2G1dXWf9r1DKEPfb1Jv5d2LukrGF5AV6XyYABGErf6nsEhhKzDoo6idXwUTuZt7rhquHrXjuWeqGMpwUxifS7pCs",
  "key24": "3HH6kvMtX9zj8dHg7gHy4YnBcjva8BF8CNjywgbEAHmVNDwkw9w1jBZszpbPaNfS8FrMKZzj5ZNYs6Hgv3RLoXJE",
  "key25": "2vT7N3w7vBumNWndf5YBSFKt48ykzpNutzq4ohaJAMaeNiiCY6hzHizyovqnwarXs2qApbCAV8zSkRGb6uNhtmNt",
  "key26": "22FaPLxndHU7PSVZbapkjafb7vNvNwvu4r63ihb8EHUYYZLs1LHCEJGDcw1GCxSu476TbK2tBeHez2qPGuNKkzdd",
  "key27": "44DWtsdZf6h2RFx627jcpsXS3Bi1UWSbevD9dtCmSmLzprYmBKXzSsmCBKyXWTh5h3bXkJpSvMCbn1mSsfmd5pUD",
  "key28": "2nXqgHHJ9qRKS7KBV84CMEPcpXT6rUkqmcYjhxsNTTon4EqWuXRH5GfG1Ew8T8R3y5EoXGXA25EzC6Lh3BRameBW",
  "key29": "4m3MoLgry4fQS39HrjseyB1KCVXdik8fRzjqwMR8NqUedgSqf4QhMTG1BjiHxCk72u7Dt1AdxVwXeHS1jBvRkPU6",
  "key30": "H7H6co9Gfdgd9V1KJH3BeWp86ihCpx1bqmjeT2BZg46hb3wp3hZYiUUNtaMXa8y8aGSvf7VCrLGNG32LNTFVv2x",
  "key31": "3ayt9kwvbcZYPYrJ9cV3LowpTLHhSKTbp6kwmrBwzytheLCn9wMGyAdjnpYqURLY1FRw6Wna81S1vsCYRTd2S8L1",
  "key32": "2Zig63eudpnLaX3d121Uv3rzQFWo86ww7CqKWcMaXuDpqYSv433gXf3BTjuXVvHfrjetNhPBJEPRQwqcYHCBSe4z",
  "key33": "23d86CQRHW4nthBucVPmpcP9yPvH8rtvBPdJSQrjjqiz6HsMXNZPkCgRGUF7Lv46refpNrf7ZVisabXzbPx7kWgf",
  "key34": "yJ77vZf8FRYvHJePML6K5imD4QCSZZDQs5whdYDrMAatWppZFWp48CFic2j8nn5mYuHnqsK72DZRrwLQCwmQbVa",
  "key35": "2b1HkwXuQoxKtLAzY6j6nj3iE1jeoKRzQTN9QkCgK2XtQ6r8NjQqzLubjqxtMsdWaH6dSPhr39N2yK7eazBXc2vM",
  "key36": "23z8CUBWs4N5NHp2yAcSPHacwUtCp5Wn85cdnp1c7DkKipXdvNhjTH36KdaphA9yyZLfr4mZ9z6oyNfUmBU2sZaR",
  "key37": "3WwGDohFjBG19iL4c643JEmUwXLogHEex7gu2FfVWjwSqq3XCnEGp8SGf5qhkys6svcuSPJtZsNK7EcTNFGjRL3j",
  "key38": "5SmdmGuwHRrUkZTaBijkr4eskjgD77kEAhkfGdKWkrd8kiVXW1Z2jDEydnu8q6btCR8nS4mgimyTmGZ5wQfDCWGB"
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
