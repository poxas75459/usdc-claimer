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
    "N5Xsb8UGKX7z9ekiYoZQdkwQEWZYkuW3HgahKDrCfP9gLwcStgNn9VLACHULCg2mseh5eWtouMA21ejTmibnAeY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "aKf7wxKAKp91yVod9b4AkcGLkCnGpMfCCV9ne6cknQmPGHi5unHo4MadjEkyonjcv2jK4NZQqWkwSVxvQRohVU5",
  "key1": "65sWGAtaMUmnR8S2hBvJLt326LEfaUHGmpv9XEc7tkCij2aTMvK6cg7hB9AFhYDe9Va7bvqjNNmkEec9FGzAGziN",
  "key2": "4HZEatgh5RK2yqBJuSfDw1NWcS7fkDg57qpSDKKxhb3gg816i63cYzEBiB23zmnZ9X33zp85a9gyBHKxhBYg8J75",
  "key3": "2gkGihXLAtPZpGnTVa5yZuF1owmpdCh2pDNBh36GPmYxKPSPjqr5YvuFZsXqJ9ru7PP3zCystms9oydrXLQvkdJc",
  "key4": "4bMM44ijxJ6VVqEUy6ovcu1764HXWVbrXqTZFxwzwh8WUqs6tScPy68nZGyKQPmL9QgRdN9viMrk6odG8mSwmjbk",
  "key5": "sj1sLZzhkXQ9ZoZxkS9rhm437MfuScwGRpkmz1dptKG39F6H7N5RG2rEw8wCDf9Le5ui4ddsVb4eQ5uWmWEHjFy",
  "key6": "2epkNmRt5xLj3MbF7HUxDFvC2FZ9rnK4cb1caA3bxsEbvDHM4Sf167qYwL5cZ3yRugjFoKvLnNF5G7S6xCQUFabW",
  "key7": "ERTBALkPx37cRvWvx4AwC3KNerY3EKWFJDjrCTTbRN48PABwfrfrDcXXJZvpYA4KBgJF8Ez6uCGCJu2uVBAEm4h",
  "key8": "3HE739GCZox7xQkGbcmZbPLBE1Ym16No2jV44EAihdxAcv5TLDFpc4voGG97WtbSDHYTGEwWRNEMf9jRumEPGFi3",
  "key9": "2Y2Zm1b1AFbL5wGi9DuXLkK6MEVCNxwGgnT8eRK3rrgc7ps55hemswHT8LZDcFu8mTsF6c2qfo7t3vi2DsmyhRpe",
  "key10": "543HY5i8bAVcEeQLarYdPxy4wsu11Zndw7T97mrqF1fa5r1QTHP8zSCx1VDQJQoKhZiSLVVtHrRTmSHWtDCXAPwH",
  "key11": "5m8YNb7M6SEQefy48pajkJhB93AFV3vC2XcdzXFypbTpwTyzhWNBoXX1PMG2uj8CNEBzLgfhwpM9hTmBaQHHhkc",
  "key12": "448hKVHMj6q9hC2GB35aUg8sJ5GLT5aDw5BQUwrZsmYUUwYEFFrfceX7rqruAPQ9zSPG5MG1miHDMnCeWRHbuzAP",
  "key13": "3AjKhZj5PAvgf3tTAEM2VqQ7f2VgZc695MdYGLf4BCRBgGNFnXnynTrtn8D4pK7Syzemybpw751PCZy1UxFCTE7N",
  "key14": "3xx7noG7mGr1cetYaShF3By1W6ea9sZA9cGzKwJLPNrKUCtiTUzdmA9PspKedqau3K8TUR9b5yzCJm6eyxJEokQD",
  "key15": "2FUwY7RTm47ue2Lkx3GW11GFnYHttWsfTC6cFZuptGZx8HPA4vtnBGiiWwPQDikxxGQCsVfmgeiq1rJkv94sirDE",
  "key16": "4ddscQ5mLj4Yqgo7e9gpnHNAYxTXKNudkA5jcASgHDUnDPpJDgDezqkvzWvTnFoPkhNy3WXoG5hiecWd5NXKHSh1",
  "key17": "2zZrRAiNMqJLgUqZ7DBGuDyBVPWTyGy3hcz42TMUJqJb9F2QjTC2NUveXiSwyXyZLWst6atmn9X1EkhnqiSJuY4t",
  "key18": "2bsMvRegUKhGULS3RG6jxVooiJT6bGgffwSTbSg1iSzeQU3HyHL5guZL3koG6379Co8B4s76Xi345ir7vdfUnzT2",
  "key19": "2iZ3pfNW7Xax7bkVoCFpzXKDEogEjeH1rk8Y6tRbHRsFdmgDqGD3zCR8tMYBD5JBVR584wP7j3Pm6RsC4MD4LNcK",
  "key20": "2QbBHR49icWBbJHydAEMUn6EkXqZkXFr77piT9E1xQNGUyHJ5MvWs725sFKzLERdAyGe42qm3dHK9KAr7sV8RKAa",
  "key21": "3f1TzNHBVDEUEVWsC67DQoEVxob6nmP1S2KCuYakNxV2Kotv9bEX516UYSjohGLTNzVg1Ub5EJX5Lw48dASrDPoY",
  "key22": "4EDbvi4yz4TMWjrjP1y9Xnt3EhWJZdzBZNp36xGj8CUv11rSQAyGsYMHJsgMy8SQ9uUDW3F8erj4ZWCDeSND7Axb",
  "key23": "2GtgjzF3JbnJRYbHmsEB1Mm5nr57g12ddTki5d1P72T1DNv9iyEcgCoWQRBDntqjvwVTq8HWm88cYbThT91iK55s",
  "key24": "3D6QZoBxW1FJ4J1dum4yaHJWy22GSn9NxkHHCfzBUnMy2AoR3E8an72EecPfY1M3kZn85nT3TJ4gaZgdFsoGZ2vz",
  "key25": "4qyVLtfc7CssDpsxmwZsH4DooxeX2Uhv9HL3DMvGW2gfUpRN1mrp8vYAhDsLDJdHi8nWSS2KVktHWrnMpGYh3MV9",
  "key26": "3odxbGyhQNoTkwcMsxWaoASy1BMKdUkbmL8kvDPTsH4nZrcvxY8LVxRgWTLujV2VQ2X81ePVd57f2SkkW8Fj3nC5",
  "key27": "5QYw9hNjnkzVX5kcxXVxe1X5DcfQGLfEE26GghxhS3vShFKQ73svdbCYrSUsVUtMB9c6fASzuWsr5fXEoooed2xF",
  "key28": "JTziV6bXeY9QMSEFTXGQV7SYiYHfuhbD9rZ5gQApNVDUnyMmzhqbTvQCzKK8kp6d5yVfnGtZcZREBenDJdsNXQV",
  "key29": "qYBS6gX5e9UaBSBQ41uRij4WGrJ38wR5vq6kfaoywfvgDeE2Jz7HWCJnGyukS32Ju2GCErKh3XCz4EBcfARtE6B"
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
