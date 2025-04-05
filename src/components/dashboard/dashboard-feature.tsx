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
    "SAeeEzLueJ3dDoj4i4C3yMNGGighj545zPUGQzEm5Ed7t6oVvey6LWvBtXgzmn7wyU68uq3dEUZjiAWnRqvBMnY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vt8sjPAyYKBioXtSHhfz2PJdRNnzCGCUit6xjjz2ZBigeRLBhHr2LMgFzv6SUY5VRBQEvkm5pU8shKosjPhkqrr",
  "key1": "hLxRqhuBnD43DfF2qSoCihhQcDXhJ5FvyRLpyHU65ERpfojcd5NuhVmXrT2FWmwWEcv1uP1ZP4VXiK2inpwgZnU",
  "key2": "32wRX6ycRaRiye2ytTTiHQwUZ45C8kqc3Wp4fHVgB5C6zwWTfVjk8ctFsP3JLGngKVXM8hiUPVF7Vg7Yy3qHXJHD",
  "key3": "KSBBiofejyTsDkohtDV2VDyZgqunEJm5MjiuCTkpow7eZ2F6UuJE8ZYxLLivef8yJwu58YJeqq6YxcL8sxcF6R9",
  "key4": "tfadKt4vtXFU5pWSfgJFNeWnLkESHAS7Ng32dA3JtfQePxDuHJCvUEWLF6nctHossfHmY4c9Fiss8GQiR55je2Q",
  "key5": "4CxY7DPwdFJkbfbX6k4aMQ5wjZzqrt5dh1j4aBNQRNREec9xiCKAdQrZ7BoFt25ubuNQqKeuSBX872Bn2Kk5EMgd",
  "key6": "3ZHR5D5veuCsPRQ6tHL9YuHurTHDwGZxwuwJxKBF1Kx9QUkgoFDJGFkviduq59KQvXtGNK7K9NGek36qcfexamZR",
  "key7": "3rBKCpEb2VWKcB6gQLvv2A5nbPxKzEXYAQdZ8567nFysu6BZM7JtyeXQ4aKbsUY8EQ3XS6qaq7kFHpQtrxWXGL5U",
  "key8": "37djomyC8r8x12uQEo6sb876sfn1Q8zssXR2Vfwn2R2HDFjxVYqdrJuTTpo4b8x33H2Tfs1eZvF5QUty8eYA3kwd",
  "key9": "4JMjApCFK7VGP8f4JVNL8C1Ynz1FXRk8fa7QLGph43q3LUvHVeGutrybWLavtbc3JY45RNTvkEP9Q9nci5KxJ8yr",
  "key10": "5eppWdR4s1oGWiSTg9sY5giyquo8Cwjafrt3KGvmjD84gHDmPQ4yzuLkaWhsWYRj8DgfgWt67dosSVKgTLeDEzcz",
  "key11": "5zDw4borryNKdmbSfVLXUULRvU4Q2yRvQ8fiU6sW7hiYG3UuyrFMa3GQEu6bGWQLqbn6uh3jeMcgMqzwwuvkJwZG",
  "key12": "66FyEbddy32kaqMbXS3mJ38c3GBrKhhFWMrpEwMNMURmJuGMaTLLXmVREQH7h7U7hof3WjUmBh28SZmnMpMWuS68",
  "key13": "2JjL5aDq425NjJ57WTTPn3ucsCfpHYXqK3dmJJvQN27uagJyn9ZnoUaboatD4uhrdXL4Zg4bEjZmbKEzFt5Mab9i",
  "key14": "3CYp2yjM29sfMsXWe9EvmigSJgq2LHQTz4pYvG51VMYQ72mTBt8PU5FbADfstneN2UpPH1EkoWymL8ax6FGBquZs",
  "key15": "uZMecAEmHUhw34azJqhqMEnyYyNxJqHSekZyteGKynpNdWVKyoHrL9pEiUdKFaLzGwC7Jgaav8e95C9cd1ARDsE",
  "key16": "2TvpkcgcL3Q7XzcfXzWRVUDgVAqP7xgGRHhgWMyM7SHbEYgpjtBrHBw2afvAZkYKq7dR5BmqHHvMRHDByWxaaLzy",
  "key17": "2CxUxPdARPst5bvoxXwR1si7RybduGxx9e4s9tan92R4QFyxryG7CTMwiqn5yb4wmA1Xb3Z52zZNx7kBEgE1iN9G",
  "key18": "2ETEjeyEziCCFiZZjvCeW5MT2C4aTPxxSRwYFfXbb86rjp5SN2zXCVCrfnZijK3BonwMohQVUrNBAceVuMnGFVHe",
  "key19": "t13HxozDoXTKgPoViy3hTf1GcfAg1nFFipgGDkpT9QoXzA7DLNQ1wU4v9qTSrihmUzqpEWV6hMoQqhYeZ7hfNRd",
  "key20": "2HCmJmGMtV1NKq93QvJc4QJMRd8YnbW2w6Vr5xWa7McKq6EFCnSAW3S5dCxE7oqphS2ZaZwLfagjjt9d7KnPFEgo",
  "key21": "4THYMW8gEp2ckmgsGoQy6bxycREN1f8Gv7xoCbkdWvTNfwM5B2Qov27nToUTxfw8aDq8XgnhV5rQVK66cWgPv56M",
  "key22": "4QCA1kg7sHePcQbp9xJ7QHEnverPPqnhNRsdxcXS1C4YyYvNs9yhReYiSnfSXBTMoEtJFZtCH3ZfszgugnbRMvSV",
  "key23": "EX7KKq5vy3Ey7qSq7La1TTu8B1X5HJTLo5ie5GBYXZYoC17eK5b79X7uboKFZEGdStNLckmuZ9ybhZ21Nn4rHr9",
  "key24": "3kgFS9X3VwCToUYX1jZPQMTfuQsJwbsvAeP96s6PYfmeBdYNTQcmQkmnyLis73h9w9AYgTfYpcV7B5q9Q2aYRETp",
  "key25": "5TGh3zNLm9y89XS8gqAjeSZLn6WTZKyoDu2yzB9kb6n2PZoFvhkfGqL9XshkWprdXxvqAHijiDS3wX146WVLyRr8",
  "key26": "5LqSy73oRjn15zmR7EzHGyFM4aWU7M32v7Z4iyZYa3XJPLKNEkcQ4XSSFRx2QBWvGWafTe3VRK24m8uAvr3PBm6r",
  "key27": "5AER2JkSzA12iBWwCR1SC1eJHBmvkfJQNbh7DbwZutge2LnTogwvd2ri4pf1Tcfap1uQPqH6PFQZNPdhoA6Rsq9m",
  "key28": "3PPi4YARQKvB6YdSMUpRFHtypHbASp6D9NrWMRecViEmvFvCCs1bE1T8f7KsBTiifhGLbx4BB2Zvw8xTxEH6BGgT",
  "key29": "5qa67MmBmyXXNskDvFSKqEFN15vU43me8JTU9BPjNUkYTjxAt85YZCFTEi3r2YPuRJTBz5SCDmvh56mnAcWhdAva",
  "key30": "WYn2iPhsVVH8fjDUGtPrrnrz5a21H2cAVo7Re6Aaa4HXxZNBW7XzypCXwU2BEm5kfcD6g1Q1nrLNxVxxSrhR9wJ",
  "key31": "5pToNdJcrLqMtNbD5yG3eugkHFhnk7Rq8YqFPXGCZTBACZKxmhT46uyXzqQNAhUug6FGXwmMhpWowYtc61K3oai6",
  "key32": "46FMotiB1dbmqUmeiByRqQ8WHYFSKa4YxksjN8xt7SB82QUZhio3pbMHDwvVpvc4D5nKD4di7Jy9SqgUMcLWnx2K",
  "key33": "3R7AaeJSaRFByMson9sZzH8DXbMh1P2o5Xip8CRGP3ibrboEN5Tocs3Cg8N2gXfv315LRz7wJRuQbUAAPyBA56Su",
  "key34": "5xNbUchx5oLmREV6udnRKdPY51geEpVisNybSrkrqdFUEydHJ4no1wpMBsZNWbWXKAjXYLW3Fwin1JaHf3JfUeJL",
  "key35": "aQLKV7BFsHkQe8v8ryjuQHm6HdzqMj9eNKkHeQ4J4dr21fG2zkZmX5Bb6u1vBNV7X8gvQGHozG23FdpsqDpHraV",
  "key36": "2LMGhJCo8P4K1c9CFkptHsZnTmyHfidy5LXyg3tnBQxyAG8aF46fdaXCyCXXiDfme7d4YpWdsbBF9DQVUBHkZANf",
  "key37": "4hJTGWdN5AGhwcvcZAAC87stdpK5Y1Q379JiHmcHuubUCnu5pGQbmfVsVZr8p6TaMX9UVth5PQWtJFF3anbhg5fh",
  "key38": "3E3oyEmQsP6JS4LzgEB6bWpiZGUWuQ9MTBz6iR9LzFrENjfxXeHeR3oQHL2qM7BpiQMb94Zx9B8cdT86B25RgsLU",
  "key39": "4T6Wy1GtYNJcYZeJ7gBaGadBJfFnDRMYjPxKZiN511kzrL3BFgfAEVtJSEakwAtuXBVZgCZcVPGZZvpT1dH3KN8a",
  "key40": "3X1oLC7uexcWU4yXGFAkM5MPW2hWFW6soWhnZgQzD7giWbfzius8bk4nizSa99LfS6PkjkMJ1aXeAAFWLVYCpC6y",
  "key41": "3xra51Wyt8xiqXJYykKxbcdrmPjFnYeYUG84kEnjayJPadJWAAPEoYLHb7S6pF2i3nxz6uHLmshcn1vEyAWGgq5F",
  "key42": "616irJwmzvxrB9Faf9NgkcotUi4C4i218wooupgotcNSBVE54vwLP66PhqJwtNW3R8Nc22Hbeq22QjM9ZV4YB3Xk"
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
