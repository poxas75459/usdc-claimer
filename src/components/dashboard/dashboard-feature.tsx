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
    "3HMK1F3Z4SnGp4wc6JGDsNvTQrcV3g5JbjsxXpYsWaaMNdtK38q3APwG3drVgjX4UvrDVhibw7fRdbvR6K44Ht5L"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5DKkoxyeoGKdWFNhjrV2WtL8dVHzTFq6XQ2U8rqHRiaciFXAm9wHEovu5nRnoU9pvD54A3i9F69KzJmnQteGAfcv",
  "key1": "58NcuRUxKiJACYULLceGZZ6Jpafw329g4mAha2JKRAH28gKNjc6b4M4ybptMXMqVZ6U5Kc3niMdfA9XcRJHZAPGj",
  "key2": "4KASjchShexJAdW3nNF3n6KmsSzBxsKTCnf5RpasRRH1ks83fwxpR6UC8MdojSyPwfp97WuqYsHmDkE6haWayawb",
  "key3": "325JPsAocF9gKi8kRsW41UqReUVQw4q7dpUMARkUbVBBoPzunX8EnbmJkwtu9RrFPgcyMmjESLftKCDhmh1pEadN",
  "key4": "ZSBrxjnM76nGvFAmaeEMJt31jCTkJEEivN6Xh3K5b5CMf9S198yQpZiJiiCyBHGESy37W9YCwiY7N9jURurfGPq",
  "key5": "3FnrmPqKdM7mKAtzK3qzfNXUG7JZc1RweW8snL3rPjoLM5J6qgcV172hWSHiTFcNXSKrvRg12B1WKsX7PHW9K3ox",
  "key6": "2RVeAz9ebNtB9dEN8XXiZNMP5QfQ2iX51QRcaiPVeTMiwKnBhKqiXahHtx8CaRTsf5hq7BTayU6ZKc3oVKwcKQF7",
  "key7": "3veCNWbd4wrkhFH1H2YpjKdi44nRLp6cRMyvoy8d2wuzFfB4VRWVhRbFtGeNLCPvyeUjqT6JCCByQ6zXxG5uKUH1",
  "key8": "3hEXWsbn9ALaP9rT9Km2xRnvh2yr1GZTKWBtTsiyJQ8YfvYsMpKGUqQgYbiG8Q7kRU7cFFTqRNzknp9TqTkNNM5b",
  "key9": "46MzWkd94VWMQEGbM4EZkHsbtYEJZh9d4AuMzwa4YGXSLp46P6uMAruYA82rWRC9jp9AqDR1Rr6oYWygxtdacV4k",
  "key10": "4n43XQK2XHVxsz2BeLPyCRiAh25Wf8Jag8MYjzyQowBSSTbDagFJz6ShZ5pvCzzKgBU6FtV5eQ8csRBXjhh4EHyj",
  "key11": "iyeK81Xfieyn4eJ2mWq4y2DBXHJUi6NKAf6DZLv96BmfSUzbLfuEMfGM28WJ56C98YZsqBq9c8GaMxxJMTdTrQS",
  "key12": "5xs7oGbMbLreTQ2pa6e1ayggu8SSbZRWLHwtNu3iKrMRrrrXEwN7FuoG2WdRUAeAPQoGkLqJDB6ETTkmfQKrK6jb",
  "key13": "qaboiLbPZGpk6a6ReAgqMrjG4oyGGa5GN1Ripk9Sn1cWwNvudUiyM68p6wvP7PaYNv17KUzHY879x1acMiiBsMA",
  "key14": "4LeHZb5Kt3QH14tVxG698MBsWEhbYdaypzBytL58rwwqzWAevVCqSJJbDS26nwuqXqRM4sDsYBgN51TttQJGKvQF",
  "key15": "2zdUtaDYKvSDPFpR3nxksejy8xYpGJ5Xo8EDe6qacwJtRVLELk5KayU6RmuydiQvyvt3DDrb5GQ5FzQXU5MuyPPo",
  "key16": "4bv8sAdqTNa6Huc4QKddhkPqfduMpuSofPbaEryUcaH5u56UHWJsieNi2swaHFKWZtT9aBhjVMNBjkBGhVz7BmUd",
  "key17": "3G3ShXu21NXEzueHzeRUfqgxXoxYUaTTk6aPhLBsaWYwopg4s2jiuoBhFzy75i6kkWuz2QYPhZKansFdwCboaWc4",
  "key18": "5Fm3QGh3enX1yNJz3g4hY8jEiRxa8tL4eYjdn4ejcRSXEZyXN2LJjy9xynv9mX66XkWeSgYRCvSqev1ECVQaFT1A",
  "key19": "66s7CeTtQuDkKaXv9gEVbFBKyih4dxDKQaTWP8bpXu5oRMS6ouVV9uVx5L7Wa3HoV7YZqe4gcnE24ooPfW65E2FL",
  "key20": "4kVgRkPStwF4rHsLHrCEufQDzaDHcmZp3QdrXZr4R38CkQi9v3J2bDd9GrJ1yNcJBsq8vzMaNZQdSkpMULsuTLTA",
  "key21": "4GDp8wMgFUXnBnUyCUDkti3BVmpRu1c4LC7KjjWMUzDfto6QkU5wqaFZJzvkuynYdmEbfU6zDFqgRCzSVmWJgcwn",
  "key22": "3G3SLk7JUnS4YM8fUbpgeEpQeZdhmee8AZ3naazuL1geNboq4pqpDv8DWEnnhb85jf3194Vc5P82TgdY9VBGzM17",
  "key23": "5PsTczN9WUtqKxRqnRbUVyvae6EFLJv9aqmjLxCwqLuvBKCfHobhxA4Ex7b2F5exwM7tzXxU2rUDiAhCWQgieTRU",
  "key24": "2uDLeitsYm81tVqA2xR82ypzyXYoUVTCXRgcodW7HktgD3vMKC5j66fdKVz8pbhrwL86T8ZSyAwTNqMkJTW73xyG",
  "key25": "29K9rA1mGZ4cAinZdi8JGkt8w2mfRpDDBojwL2utSrq18SuUWzpMzYiCWra2ifR1RT2HDTriHbXpVjMBvmHukABy",
  "key26": "4CfcAAS2nBxbdsMgdnpkh6EZfCh5ZWtRLKU8TFjb6GvcftXSh2dCUGhuKWaKYC4mFmD349ePNwtdaUTPEoUfC13C",
  "key27": "22y5BP6vi2TQk4JTyZUZf13myCTz3WjaAVyFgKg29QTEgYNCcaWKmMDsqb9Qxj6Mye1HezVgxEYCR2itF814BZEV",
  "key28": "2TzVN3Yc8BbyHrzH3zZk5N3UHdBxH7ELzRJGrPuMuXXRxDP6ErTPitPvfH1iKbWFFbU33w755qqSz7igXf4EsCXB",
  "key29": "2XnJo9Hiq9En3hzCwAkqS2AxDRkE6kZisL2T5SQkpisUck2f3RwktEvqxqy4YnMdb5jdcAESax9RwkhxFRzurTKA",
  "key30": "5YnnQCdjMcsdLc5HZRX8fhD6PLpuAssfNHfj4r4hdXjVGyLDFM5Sm3gdHNCjK2j2JnaFkNDhQE1BJYRn8mEsgc9W",
  "key31": "4fip8dsPDZNZ1d9DyNzVbNDW6z1Srew7DnYuwJ77vLnZBg2znkQ15qsfBnt5f9pCF52rh3MncsJZasGn4JUXDQvW",
  "key32": "2CG9Eb1NJTkxvn4qRPK5uT9P2TXRMSnGPWnGqBHm2FJhuWCvoGruBma22yzcuqA8YhNLByvx4m3D37T3Q68xmtX3",
  "key33": "5FND4LhaB4SXbLhMyHMfMrJ9Xv7diWNv8SK8ps1ZmJoyrvMVQbJwvRKhuiV5BJ854fLU3qvM37a6T1ZBrX6rdKMF"
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
