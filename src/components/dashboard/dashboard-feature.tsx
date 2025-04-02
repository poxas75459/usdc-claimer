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
    "5tqAXVWdEyMCxNLht2zZAm5gv3z2fu4CW5o6xk2hztcT5DiyBHVQRV8e9btV8CR2R3NE1hS2nzh63hqXJuWYQztZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25rYb38VNU1omgfYkyo8vhCwZZdVqYhexv9SJqP5gnc944Q2XzZkdJjjc6BogfSVZKCtmJmchVLL7uZnXhdHpB28",
  "key1": "5BrNKeqZw9Mvb7pYpNCnUpkuPcGC1NDKGfd4DEkzVJXqi7a1rxWeSBE987GXNC5WyDgPceGLi2vhDPPDP9oUwYwc",
  "key2": "3qP9kug9LyV1wwSRLd8T1UVDsesuvt1GqTTMDXEPo8br7aZD63xHxQ5Duh4E7rgk9vi3DZv9McXy8Qe1DBeqsmgR",
  "key3": "8WQwWHbDGEopFvH5mCHGXKcuJgpf8TiDsVgUbtRM2HfxHdHjzbiB42qHn3BaTvKfQC9Z4qktLBcxaEchUXicsRv",
  "key4": "4aXSYxJBkjVQUbn8CLLJUbnpBmBLnULmuzh23CSTNZ5NSzRg1zxcmKvSJRQRE3AeXk2p5rCXAYdXADFpFR73vMMC",
  "key5": "5imN12NRBsMcygEVPQTD1wpeMtZ2qsViKt7X7oLpXuoYf5UVvu3HcMf6Vd6NtGSJuUFvwncfgWv3sf4srskaU2uk",
  "key6": "43hWqfL7A6Ak6JbrvNPQj32fYL4T7D6Jh4hu72dJbrSJTiQ8dU782RZZApAeRYLtWRiAwzs7T4z4QUJ3SE2jNqQA",
  "key7": "4ArfMKCmccAJPJTgG7KXY27BLGrVzMMTNYeiWWTHA7LmTuKocJxp352hD7b4StqGRVoHvcicps3SPfjSvhuxudZ3",
  "key8": "5FJUxBfpK1uffa1hi4L3q5gpYj1pfeYbEoYZgkjWQD73HHgqFiZzKctSt1kkTabyHEzCVwPgm8XiHjBHsZbqAivu",
  "key9": "QQK9mwdwFQ4FHr2MzuzEDwhRu8A6ydWU25pTRVWaVNGXABpFqJKXxDYwX1vEYmrjC479H2KGkD7hXDk72hkxe4N",
  "key10": "4xd2ydXD3Wv6np9P6KULx85fsa97PYCZfZTu9EZaa7f4nmdTqfbszGnwwJejLvgk8CBfTHqp87o8jMnPe8NwL1FZ",
  "key11": "73YWYio5EeFj4iTyBrmzGoKtdTrJhCwQcfU7HX7fZPeQkgCf7Hj9L98vxMTWmNVp9kkCGb2aDHfJxZFYoc6aaEf",
  "key12": "29MagBNXPqifjuV4PCxV7adZ5i4iGHbhn9c7eiLDDEJN2y2Xqybtxe4Wvnfz49ibHXDj2oBXp1jdT1yjABZvXyH7",
  "key13": "2nuomJKi9CGaGMBCoNyQqpjyVjHUE3h8avjyiGyTv6CcDADpUcqtMkFzbTBHZ3EmS9y1VwuxgQd7pvRj12c4KjVq",
  "key14": "2kquf9HLUcsx65DgSqz5XSaup73wvzZGR8gTcP5HHd3yCsE4BRPSkzL27GXbAYJj7q2BUGmjXBEtq25TszjPi2pA",
  "key15": "43gQUHjEtccPjaQeWHtANDXeG5inPzqYg2SJjYcrjwJtw81C15Hp8sMfXQXq48FY9j3uGCBRJ8u3dBLfRuyxuW8v",
  "key16": "5GozqQSsJZAHThJMM4mrzYgun4ZNxyFsabf9A9pZFTQc7UbKHpptxEHSG8KYzu999r6BgwUTK2E7LB91ifwKJPb",
  "key17": "3VqmpHns2QLAQUk1otHU1BozZrRRHbAu6639t2dGHQ1vorx5zDx5whQPLwjUkjXhiFkwSfkdWHWEjGaToNojK8z6",
  "key18": "2QbPAUR3LZ6yFCaALTkFRbbXVUaTr4otq3GtDbqHKKhGgwaRTFgv1JMTDw4S1dvkmeRPhE1kJqgBCcL3RjVDRCo8",
  "key19": "5G9VY5pu5ELHVUoXAkJp8bsdQmYZeXK6HWnvrpRZaL8i9LJBaN4RBnrN8BcYzQszTNjqsv4tVWWhjfvxYppmJvmi",
  "key20": "24aFMxUVnW3uDRJzwBvmgdCAG3fmdGwkuYm3QwHodW7ExEMb9oUbhZNR9Tw9ivPMzzrYbG4emLASQZgp8GZSEdft",
  "key21": "3fEDsMhMCHRpL6pVdy4oiy1FntiqLGEnBaEP2RLhCkC4yJyKXjzJ4Eeia9MXtQJze2gJTGtP9krCb6gaPCShdTZL",
  "key22": "2WEBTnFbZFTH6wrUqwuGs9VyG4QseJviuJVMiN3dNiTBtPBruFopqzfXQqHjdomgDCMZ2bvr3qJSamD6RWCBZuy6",
  "key23": "2ezwkiy8h6JJawm8Yw9nXFuWXR83GNQdySxMA2Lz9TdDMhGswEZLjW7Wn7ncX8iMwakdaFk6HuFjkz9bameuab1d",
  "key24": "2Dp2x3PSQbXY4f2vgCiRgxZ5iXsdv6F8rfBeqvMqmA7ty7zSg6EETRMArLLJJrZLZauZ4yGGKzBe8bnBN4aeDL37",
  "key25": "4DeXTrffXzz8bRKoDk2xwS1VsRXe4e1PCHndnoLxVdDLz1MSVaGxQQLj63F5QgvH4ayHm7q5MNXpq49GK3ZvGJuh",
  "key26": "3hP29SzSbCj6rdPa3QgJ6EL9a22bJ3Qesb6KPjPdCRmqx5w8irYDYgoM1TzPyS4Z8wELXgVQ8zuE4ruf4ZjnQUNk",
  "key27": "3gLPiWVbCmKF1VkXxEjdZXhiUvjVZVeubKgM8s2LGz6geLYQU3E95smZRTHaU6pEirvANURHdWgQngqG6qqLfujQ",
  "key28": "63jEvjXFL4ui9RncfH9Vb2rvufMKBVrey2uwS5fgoLk5qaE21XeMRYig3FVfz94BRM5VA1Fo285F2v9YuRr14VKf",
  "key29": "2LXekgjVkkhxdzAktmLs52sYMgZGdQWHBLqFvWHz9MyEFBobaU7aFs2kyuBA8EDnPFuLobvDUvZjYptCy6z2cznD",
  "key30": "5F1bEbn3pfeK19XiK7i1eEGXjzps5QfyqPW35efaLucpZgKf2NRS983KYfWMFxrArtoSLwnx9V4KNGsZtDUakwYj",
  "key31": "5geSXTgjWFdR6ghK9fd6u2nGhTejpCmRsbfqTM6gN53RnX2yNeWTjnkoVKgBRYuh6JQmSPHvZ8VG92huBWP2FqAM",
  "key32": "485qTYKiVLYqSXz5neHLweWvBwJYRsJFJ8uatnq9b82BjJsK3SWD5pyB1bHAmWYbtfm1z383sTGjjdM3KCMb15Us",
  "key33": "2JHeJ7JjWZ2yWnLM5dggwNfTmVsmKz3J5UcwrixAZTCDuHTFZYQ5FPe97Gm5BjssfhJkUozkBKRM17fVcqjAAyS",
  "key34": "toa95obUHSykfNjngTfnZccJvZjnwss3fRE31RvS58NbzYAaGi2KpKdrQm61n88L4PCoiwAjvnkk7aQBAXZt9n8"
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
