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
    "4T6yesjmro65DDG6T3bhi7NtiQ9PUEH9qsjs3i5C5vtqCv6JLsoj4JtGZiqoVMv5YsQPe5Doc8fLjfevWdmzSUb3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JfSHw9Uy5p99hhN2GtwDgDi9Ju91SSU24uETA29R1R6knHJbAN6DUnazmZWfi1RjugDbC3svL1eDgWvz135t5oU",
  "key1": "46N7oreK2HDX7PWrAESJBi8QYRpSSipZz8Lu5yucDpuushr7AqfZWSqpT4hcXFXCWcmrmGXL9ZJVzoA9k1FjPycH",
  "key2": "28rQELYyyDbvjgUsponPVuL7WE3nNwFiTYYscFCjHBXgnvjAN432iypn3p5146J47hKM7zMUK11VmFh7PBtw69K5",
  "key3": "rKWD23EyB23UVQFANRoHwESSW2SB27HpB6t2CtKWdCzrBP6bF4e42xt2nJoDy8oquWZgJpJSuig1Jf1qrgJQcAN",
  "key4": "3v9DR5s3ak8M6Sp9j7shtmA53pAH9t9Eii6YttCgnGPKLYqqo2bwTRPyaWSnJSfvWmFekNxdzFpazpT8BwbG5fTD",
  "key5": "4J6JsHek2ANkot6ZxXcLXn1QqyXv92jGHtB5cH5ZN8bBqaGuBEmtdBNgfimzUmixS91YmoKwoGiMpWQZndLw1WgK",
  "key6": "33NoxH3Q7U7evnhdjpZVzMNmpcsAkmDEwqtRygqEpyyk3KHGxm32JU7aJQYZAoCzWkWZZ41Goj9kLvR9GZVgHrUU",
  "key7": "3iDWRzd7oW48CTjVwoxtY1ZZiwKLm7MpnqRxB4anH9KjpkpLjci21vqHsRvJnoCiWthEujCQAiAgCCY3HLjJmPwf",
  "key8": "5J9yioVdBK1JHc1q5p8Sx2vTmyf1GiEo4K6sQYAxt4phjMT43tb5uJLPvkjHav7zQ4Q2z51oNjiXSZ9uKMAskjhk",
  "key9": "41ij1zXAJE81acJok34Hqr5irqpraF3VrzRRBn2jX1P1TjEY88sfWn6fiTE8tCeFWbgvDALv4yT2gKj2znnX9nLe",
  "key10": "522gLEMuYyDCNm9EApwHZM4UqNZsr3avQoCSatkfnZmmg8wdjDWsUwkBJbMMDgMF1BRDXnQHBMbTm7j3qyYv7Uhk",
  "key11": "4vnhKaHxMFrVLHbCDEhvGrFyjxbgSyJqNgXMAonYrdXE8PLwsN53fdcTLNdwSUiNTHTQMdf37nBH2j4ADJU4LcVx",
  "key12": "hxaun4xuQExgS9PdoCxMftNYiwusXPsb82oEZw9NEsM8dAnQwgHZVcvCmkMwAkBd372yeT3trV6KaY9vrq6fYkx",
  "key13": "4SUYS5Ew75k2BmdocbsNSVYn7gyWUjtarzZcYoqt8MMHs3Yni3okwpWj9LxLHmwFP682Z7zNrZTpu1bQ8qhafDz5",
  "key14": "3AVsCbVT3wV7NtEKt2kibvJsQ1A4GvCBZ2eZzz3ErCBAGMqPLB7g3u72TziNj8ZKGnSBDossEziz2vmfWJWAqSE5",
  "key15": "3ADdppwSdfmarZrSLYBVTB5Gb3RKMeb21Hn5ZK9KxwHqkkzeCD6gzTaY4ePs5ebPXcPcUS72TGLhFErNGrmWGBq3",
  "key16": "5RAzKyPHZ1m3HdFMHviRm7kVXTE8Y2sscsUbgz67gnCU5jWVt4DordUTgEmUoSiScUJpMNnX6z1vcmh2EWjaVSpc",
  "key17": "sQXdFvdZWXVpQ4Ky9EsNzRZWJ3vtPczwTxW55c7tsb6XfXsJdKiB8ZwxdQcbe9nL45h8ghyY4v9pXfHnnGUVBeX",
  "key18": "4G7sKMZAv9wCfHf7Pxd8MuUrywEyavMFd7Z1aKC27onfM2XP87zgJo2GFahjCRgS1LgXUP5wsdFfAQxFhbPZacvq",
  "key19": "3Vu4v6pMei4ekHNdUNv6rMjWCaRH3Pyv8x8NYTwFShp5pU74SsLdP48UkGX3RQ3s7kkc7FZCKDMLy9tvEvHpHcZC",
  "key20": "498vXhyk5CMJ81CsBi7qYAuJci1wcxpRs5E68cvoKhafqQUQbojbLQh3vBRXSfcGvooUkt5gz5paujAoMbrViYtA",
  "key21": "tquoyoGpMNT1qVHVS5we7HXr7YHCvrRv92SZCsxAWntdsEHia4bEQ41dF5GmzUL9gjA3r5KLYBiy367wLtrhNGx",
  "key22": "5vLAuDWkXwBGP49FxSsaYMyf7ntcCJx7HAMJinj4RaRSUyJNbtYVxGvVyagwssUDkLupS4THRYCcwa1tehinpJf6",
  "key23": "5VKuMkFQDu5WggpEeVTq9kjBzucDVDrHo9VR3ZMVAsZVNCPuviPYXjBfNDuMAsPdrkWsM9kfekgAQrf2jpFqcpwn",
  "key24": "4h3cqtCBH2MFn1Z3VEqB2H61nHJtdiWFq5HZDfzNFn4MNmwA2QVqCQ1dmWGr6uph9AvFLejMU77E8WSEMcUgRmnp",
  "key25": "2h9vRJZjfBT9aASo4AwizX888cono5BPDTE5qQ3ThGeWgiczs3HciZJbHkrmfKwJzHQJ6gKqHqDAmqt3Ypaw5zz4",
  "key26": "2BTajxNZXA8cvU4Cin4MqLaEBYTqhuMcCQkKoMHXYFu11VzyNiohvjuFY8YHJiUDAyditbbtMHX5Cq3ep7N5ptsp",
  "key27": "3uSZMK1bzJiU75EmjhpoDgsrSyJRG1eAp8GY43hGFPBZ8xAxZAPEaaXZzWLNa5h8Je2MMXRzXE3WAJchBHAfGCx6",
  "key28": "2nU93YqyWZcdaBSczv6rfQjMDmuUMzGPfQYrXehB9tDS6rCE7H1hBsuSXCMYnqgT5ua19sDokNrgE3M88LKtLsqJ"
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
