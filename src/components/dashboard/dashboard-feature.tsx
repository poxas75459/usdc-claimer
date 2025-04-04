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
    "WSw83CuyskecitYFeunF3bToT1wC7v6ZPQ3uz9VckGFnWnaKoE3vPtmfK8G1gTD94DNddqYmPkib1t4nisEDCYe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4fpF73rp3QVQwU5bsmT4w1qErHK1pe9aw63rx2QtLHcpapDPUrndiZ6g2VWxh9CuNp7eDC6fmwz5HfQhr6uRR57H",
  "key1": "28utqcZY8G3SoutmAdM4yJ4K3AqJjprt1MuUCC5Nh6h5uhn7FQRNuJy4rqWC2ZBpDCV3XFDWeTdAGotJyLrWhXaY",
  "key2": "5FM2Wj1ZZkdLeHa4bdqwZviTq7vywX6Y2TYDEqxUv7eMTJ31ByHnzTPscEMk3DboPngGkV72wxkAT5fh3ojhTkjT",
  "key3": "5bsKmKstoJ6M1b7ncBsYbC7LMRh9dCjS7i1AMojh2eqAZtbbCFwWATJ9JkPKceYFCwMuwtQviV6GH1RS3oBjQ9uT",
  "key4": "2VQR2ogb7RG5819PhQqsC5XUCcBKKf8uGxYgSvV6UfPZWt6FMUYAc6JobD6mHxR9k5Esk41XqQjbtevLQ4CMBepG",
  "key5": "4gJP5L12QTBEcaHS3YfYaZvswqTYp4Z9hoaUHFHityRXdYjjPt5qntBZCYub5AhY3KRDjEQSG2iugobFUNzLYCC5",
  "key6": "2T69uPRMFxuGrMZwZBLdYu7yWKAyUxmHZMq5oaibu6bHA7iyfEpRKFdPhFBw33qmb8qGGAfeXCDan5raLkmyAJgA",
  "key7": "3pANRJsGzeympWceQyGiBds9bDXvQmByUKakr6t22eMYsNT9BrnP5f4mWeaA9sEhjbi7N7naVEXKX64T8vYUbxzv",
  "key8": "pYrdKMGL6oYwqYXqmC8YukJW7w2QSzLn4TN3hzweXkbKVaPv5JGJR1K91VVMtFC77WxxpSy4fp6uJZe9W6S5Jy2",
  "key9": "4TzxFJoXoDR9uaSPPewX8rMJjiTbJ7odsjaLbNzASqN8GjqT1yMcKYn5ZC9pVxFCwzvk9AL4bY2aVLCsPnvuhTBr",
  "key10": "4VSffv7EecbAodfwDi2oYNY1UCDiPUE4fL45jLgntwkgWPJaLdr6FFoufBMaARyMDiumrYRLx23vfytaVbBgGv3Q",
  "key11": "x8ER2GnZa93BH3Y45cXzRPVThFoEAcMjBSiqano1Av91hgKvijNcerU7RaDhoxgGP8FcWk2vUc46u7eoVE1HBQg",
  "key12": "5YewzgmaeMiBM2Rsnx6Nc3N8TbYynxBNrTigbAZKPB9V3VTj6MQeiQaboMUFBPtTvqLXEWPVz4iXfrQsAhk65HP7",
  "key13": "4bJYYn5D2zkbYE5tfCsoRAdttEEQQWQYun12HdueLvBAj1bQV5phYoPXPWMbC2K4Y2pWUZsguioheZxpb63eMfLk",
  "key14": "t9CpPKhc3jT1km1MB2Jp7SEeThJHykwofUBhCVpxnmwBUYXQ5ZDtniH8xpN7Q52RpHd9Zxwo4uFAoT49rUzd23a",
  "key15": "3Zx7yFPBERoeVYw4V628JTPQ24EueKnMxvrEnyPEqJDtBUfYjSy88EeD43Mq27H71GT8nZifsZTWa3KxVVbHtdyM",
  "key16": "3oxnyRqqxeJiW5d4uG5vEezjdtq2v9A3E3f5HTNXP3Y1HMHWYEocDM3aKSraLo46ukaAWPrhWRVMRju3Qk2v4iQz",
  "key17": "3NGDZQqdmeiJbeybTSSxti6omAnNf4cu8VHWJiUzTheBWk4UjCUx6FyYwn2Msv9LvJPW5BsZY2Mg8Ttc8h76rQHa",
  "key18": "3HZJqTdWoAXhGP5bPUknwWMMVJtNWZYsYVAfDawmqNkwJA376zhcM2NCVh8tHdjKWDK8ivrgXrpHD4zu4ERkUcdg",
  "key19": "4cZrE8PkvdorG4usWEZCUGxhKZU4uhS1M3htDczaFMtMhVSbMG4VqU88xcStFmmJ6DCukrcJ225T5xECPKz4G88q",
  "key20": "4dtkc7Ugy6CKPpAYacsvh23iVsteoPYWQomsV8WJkPp7bBPmdzGwgECVX4t2q1LXh6mH4zvbbgXQ14L3ZCrMQ5Qi",
  "key21": "3ayZ1rHKJXLARqcKUWYQpcy9WNFaimU1fR8rot3HGCfx42KquoEeUR9BwmMmx2cp4LV6znN4F7gRdFH2KVdcfeug",
  "key22": "36aswq2GA7Ec8jFsmuHtnz2ZSJvsn2BngUVhuxxbyCsDpCdtuBDSobR8f82ftRaXYo6a36D1XqVskKvCWAdqtdgu",
  "key23": "jvXjcVRfjMbqh7hfEDhhQknYENt9TaKTC8XERSDUVpuJaHjcL5SERxqfSgrmBPmd1eJ85L3hCnSkQfiAz8ctVjq",
  "key24": "5J7CMcwotgWCH63vQe96rth4k9zmAPFvA81cAsDVCfnsM7bZx9rrECZ4hdue9aMtEg7wKqqnY3q7u9K9ERGkXd33",
  "key25": "3rmGZcnDDrp88cvJQf4eHRo7hv77VbtBNSZXXBqf9D87gaVNkih9qpJMXBTNjkAXCJdoi4ew2q6SXZmpiNKffSdR",
  "key26": "2PLT5Q55i4ytW2H2DdStonGKy5Q4Hr97fNj2JDNmLSJCeLbrfgDTvFJ6KrXrqwnnXfUX4AqMqkTogX9ziXETSR41",
  "key27": "yuuRXwZxBX1GYv48XoraQt28drEkFQdQnG5EDgGNSqt9zXfdNcojQpYnGrGeyLafwHdcRz5aktJ5tURjzztSGbA",
  "key28": "5P4D7zwM85Q3ozhVopVsViXP5Pa3JyRWJDBwWP4xmyoyTc2j545ih38pPmsntCqAxXix3EwVvXPEVJRsTE4B2cBk",
  "key29": "3FueP3K8Eycn5sroUqXqiY59GaPJAgWrXNxVFDFcsLU6GoNFZ4UxRzs9UMFSKRfTnEikutegtPm3efWS7C1dczc3",
  "key30": "2LRYRua5XPDoCZFyQBtZb6Kymzj2siJXDoubi24d5Urs7cR9WLpUeopNEkKp1pbVg4Cocb7THxGFzC932MBJiS6e",
  "key31": "4iC1YX3AAuSLxLCC28KkHa7nrAug9fukUvPo7Sv4s8XUrGNAxLRhNNjwuJS6U9rBatMfYtae7BhdJdWj4qm76Zv5",
  "key32": "2yxAEqtHPMJhSt86ik2PpA9rRHRu5oHakLmzeMwVZauN3sbTfBy3TWggDwAQkrBh1XQQLZqQoyT22LC5g1qxLmes",
  "key33": "2abV73CceA1TR9Hy2rBfJ6YzCWoiUxNWHLVoidA14Nbcev5evzhckfkZaPTqjqMKNyM5anjrJKWTMs4nQUyoYJQS"
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
