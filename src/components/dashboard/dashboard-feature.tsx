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
    "2wPsmvZQwx3XB2J74X8atzHhtK4TAKP3ipGusCQ1FLKeYnJNiutn8bcyBd9BxosxCDnCoo5awLASt1TnG2dBWhaY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5jM7vxZ4t3S6ruS59nJegYu7N8yMwdTjpjVKtcjUGdhCp9iewfqTUYj3cZ4Ni8deo2oa8LouYpfxmuJrsp7yBfcJ",
  "key1": "3dTPfTtm9Qb9VjF5To8SWswuZtZya3Ga215Z9XgWAiDEJuMc4xNZrisNHZPvwSyzKo1Fd8kdh3Pyjybwz9BPGUVx",
  "key2": "485rKWDMAGTWbPRmfuA6bMEWXJsNKNBsAdUbJBqrBh9EcWfWUqwTKBx7JmVdJG4qJncstoL69kkootv5LyMX3f4u",
  "key3": "628RYSYBeF3TQDbqBas6SM6zwEndjUE9V43D41FpWsufY3CizSpysWEgrPVVDZRSAeq6WNu9w8Bcg93iiZsAsoJQ",
  "key4": "4DUU4FpoBWffV1kbV86eWEpVUBwmD7xyrXJWxhQXZqsLBiqm9zz6oYix2ktS9yNQTmSQNmTzSou8ATbdpgeGTMhr",
  "key5": "4Cm6HhRWbFMnBoAhB7Voswv9xpLCEA21DBsZCaTd5mD33MdtQpukopPqXftRAXdZWPVyRsEv4vaGDHLNL22SkzA",
  "key6": "2tGC36E18zZtWkpxNJt24o99sqxbHyWxuWzir4dT4ga4yHUG2LDA9unFFX314MbudckqesSMcBoXRvhu5FGnSrgx",
  "key7": "61Y67rsLaB2JSxhDjoLUgjjpQtraSefcJBxiDhGANS9xCzHfPcHqfs4rF1voNaP9nczcoyNfCxEQBURNhPnzX6J8",
  "key8": "37JjaoyisgdhNSvSGMRNQEj4rPSvAMDTTu3epGMMD7rWnDuVAQ4RcxFi2NvcbYb8TQuoDBDvLVxhv97UJQRY35Cg",
  "key9": "2NXxMWAFmizQLSmk13PPyBNAZLTeurkUSUpF2mzMaTo9gXNYFiwAdDvXW2eUCp4KrxMJWezcxCRpCAxBSQAgLJ4w",
  "key10": "3rTjwKo2wUNCBSKGtEd6MqbFyyCKcZeLXWZDsu63wERuhYNeKTdfvuQdPuEsq3wE8aHW9r2fXbgUFyp8R8LnEzQo",
  "key11": "3qqScz1fNjrU1M6njFXYXjpuqaCfvPs8TmS3PkFhnFLgGA9JefqHmnnEP3NJ9jieBqLeDMqzwHuAN3L6EWDURsS3",
  "key12": "4r3sRG9TFS6ofzim2zoin8og1K2uwvpsHqzhHimjYZosz8Nedo5KxPDKL9DFjfdG88tVRRzDVPivxnuUhtv7W9wj",
  "key13": "5srP8jLdw4xBiaJATTjfzZPF8sEAePwwRCpKtPDXueM6UMm2TWZ4gqa6NoNW6trMYA9ftjjE3HkfTvsFzrkxEBoG",
  "key14": "5d2gg86vuAuyEFkQQxNxmdBzrHeAL9oLQJ15NryRXVaqU4fUMafg7dp7doK1mMLbfsfWdEunmzrcuFRYnyRFVHi7",
  "key15": "56FMFHCugTfZ8JWMGtK9YTV73ycaAQg3b9GFKucg2kcKXhiSwNrKwRYqN3Kkf28yC15HTCbtYHFcPU9bQSGMimTk",
  "key16": "3a6VbbX27aMS2V6m6zs5EzgSdecenyLpK8vxGmXkpWDi4kX5F5zJ6eNC8HL98zYWZZdUeXCQCbHw42t5Pkn5MTRU",
  "key17": "4enapJZ3aU9JQr2SSkQVC3kKHVXsLv3pU7fvyVMRnLfE3g8wSjtc2vYmWDYySLSuQGDvuXNHNbYsrtjwVCojwyHr",
  "key18": "aT5tuhQodUSeutuNQMs9w1oDWnt7MCrnrcb4EJcQL8zhQEPWR6fVrraPm8hgpTWiik75pHgBcaXkFyUKFSnJzvZ",
  "key19": "2XVmTnnzseNBJogAYN5B9pLFSwM4hmwxg6LyfYyebR9Zb3BsDXaTwBAYA7RgLCyaCJozjix4hbRQvsPXubXt8uoW",
  "key20": "5MkA3GGymSQQMHVUySSKdvA9S6bTZoqjMo7H3XjaX9tpYadiHnNBdHzmCwifV81kGTZu4HcPWHG93Y2jCGxKraC9",
  "key21": "3P1Re33iYZDoquxxEWc6VbrxRCicK6bmDdMNNZtCJJiMXVrZEYSk84yoZNJXUkX7QE2NEsjSdzGXaBbQVjYLkvkw",
  "key22": "5rkht9Y7vF82uRgdxZxnDQPw1YW6KozhCA6eSYcx5sY4jnBA59px3hxjhNJLdAdKxH918x1MRSRB471MmL4dsAj9",
  "key23": "2HKzA5Pt8Etkirh27LVgJud12hAfGDKTMT7NzBMu43q7pUzp1nMBqEEqkecvZhbbzaMbSquQm2duzuw9XX9JMPYs",
  "key24": "3VfNgGgxK8U5vJjMbYSZLDKMEB623oyDmdVzjNAg86rviwG5pB3TFUBE5QP1nyFUWtZgvrra4xjt613FMGonzdBP",
  "key25": "5n3ambwWEkefDwmvkBJ6j1Zg7h9ZjCkw7zxR7daQnNmKxnnKBeQNegvqxXhdjXXPoKpijrPR5HV7WWi53Y7JF8MD",
  "key26": "KiDmmG5U2eVf27joiUdbTgrZgxeHw8TpuAzAgmjAtzEYTDavWh8NvFbCJ7Zc7q7WGL18MpUg2it2tyE9SMnRjcM",
  "key27": "3vpVkNeqiVfKpy9fu3egmEpmpqmGiE1nmGJR6wXuCqYFsfG4251xX9awzd4det6MZHxZj7NKoLfRUpx5tumqpQtd",
  "key28": "5bHQt8h395Ky2CYbhHzum1ioxdYrTnAqKiStpVbzsdXyZ6VghUMZob6ZTLvu1zehXdPsgi2HXtC1ztwZugZS2THz",
  "key29": "3WyQBuzFXa5VYXQdzKizcJvteg9vdxecqyPb8Bb7b4P7Z9VVGqN5BQtfR7UxVktMpd3sTFPF7sczZdkR6b1dc1H6",
  "key30": "2BH8WHs22myz6GuxFKgc69Bn9mSVZxfSVZoT3GoF8uwXjAbiGGctu8wFGzHZ2WLKu8Fm2VxXXKDYUeLtgextzRkq",
  "key31": "4XsGyHfdobsfo7hcQYjDChhf6zWr9awj5qnSzU3LcqHVkFpjCam9fU6DKGYW7UFeFHoZeZGYiHFGEUoGLHir4s3W",
  "key32": "2RoWVmqmQpRxzK4q3E6tqeaisk2xFg1BTEG5EDHvKre8dWCJMRU6XnHgnWV5SAvo4JXg1KPTYwPvyceUK74AHcw3",
  "key33": "3eiWErP5dPkfK5272ZmbSVamj8DM5AM5MptDdfxLa8pcrmJ548w5wz5rsn96Cx7fQV4kNwrpSVZMuSdqAi5h7Zxc"
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
