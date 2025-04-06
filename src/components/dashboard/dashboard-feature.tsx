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
    "NWx4q93rb3x66Eu8ZAJ9iYFTbn8f1WjvY4nCGv8ayHpf67QvsxfVX6adz5udMaTXaxw46apShQ3pnYEqADJbfWQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1ejAkCTBAAK8W2kyamKX1NMDQRVNuWpUZeTcBanFvYQvM98c7gGTCBoRwp3DhXEtNfxAeBs1qZoRPJQefneGu27",
  "key1": "3i6jdTqsmiaC7NpZs6w4B4m4A7UGXSBYuM2TPC519bVqzNMeybqSBvqLRjs5k9A5jEpPGtm9N4F8LwhjqiQZVxEM",
  "key2": "3twU7feZ9zVyigegrp9ftLza2eBKNYHqq8nco7KEsUcZeN2iE19Zu7rkFfqeQ3LtYoxvqMXDPt6wcnTtGw1dYUAq",
  "key3": "52bCV4eSxfYVHZezNoYUzE8DboH5pExLRVLupkhrV56Haoi1NnTWYd136qNtKi7X3UyZgopTbhKuA6XeKzx2S84N",
  "key4": "eoAob2WdQpBmjTATumUgrRFicyPCXbuoNSHQevnDVU3Ruxh5qBKXGKCuYm5LAM6kWVUAEFueCTreP1Ywvbu75ky",
  "key5": "3M42PZ9VTic91miM6qH8yyozfZk5dK2yK9ASMfwNT68xygLtB87zaK1VfRhigserpb1oLbCYsq6Lvz1NqXriA9s7",
  "key6": "67mFJzhxg2mYrwMN5utnxecsZpC6m3hZoaskwDL36KVCqNgiR6ncag8RM4dWWwwF74qCLf8mUPo8bJGSupb11EEg",
  "key7": "4fKUpaTK2b6gt5MoFrspVK5B21FGw7JbMdjxAL6NmwJFCQaUin2jWNqtDMEKCRhxwoUxRpucSYHsZXn6wU9jfUDz",
  "key8": "41UQABf6y3UZ8uCvFEdYAZfDv9AxsLy1yj6VWPU2J4GSkGhxfx5RM4Zx5EEuqzj3Xn4ZKhjw787m4mUo7HHbAaMD",
  "key9": "3tVNBwFhtsa6eoJLioKZtcwcUnxLj2RgN85bk9RxAxWzr5S2nuPKdNJYBVPJvrdJkonvoMjDpH1dL2Gm3QYehnfx",
  "key10": "EaXG9HrXmznnR9MygbmJTZ71Jgvxn5wEtYFVS6h1BQtVbmkt3KeZGuKAe4V1x23EgQ96CUcrTLcmA6EUJGbmpSv",
  "key11": "mES4euoCWD2taVxFxq47qAPDGe6pNK8W9zUfd4yRnDTDRZRSjKW8dqJG5dSDDZd448y2iXwnZfQdwhT5FLiZZz6",
  "key12": "22wPV2hQmjq1iZAHWtbaMKSXmBqEGAKLXyDjT53LVw8m2GuSH7gEDmksmmhBy45xPkSf8mUfiQwJJuvXwRxiDFVJ",
  "key13": "39nTeNeyMb41tyh9YJMArACpvnvXCw2JDJVRtM2T5jX9PZTHYY3ACvr67ru6GKaxAtBzwNxDL777xtmCKnU2qzf4",
  "key14": "66Ge17EoQX62158XvmoDTz2mSamzRbwB927CEi44AcpdF1btZRZsA3BZ1yxddAspyEFT5ENB7XqbkbKwwQiZBDbm",
  "key15": "2aDaDRYNHwBTMvEeg2MfugHEYmjqJjFuCrgCPxT5wEngRoEBJigtebMMyNfRAHyJna6RF1nVgXPd29mLHELKazzw",
  "key16": "4CYqTYjUGWhQb8d9C8SoqohN3JSUrJNAZXE8bzrFJmGdpJsSCM628Tn3phQzKKV6Hswh8JxJEhwTGD7mCPAZ1tR7",
  "key17": "jMvyGJFgBYMPczzyGqLuJ7dHmovZz9pAjNfe2mUweGAYBwjhJbNDsjupUvmEVaW5jxpivM6mkr1vsFucEYUT8aZ",
  "key18": "3dvuF7hLdb3ksvTJ8axPN3gX1FepZTKkgY7gCV5ihnG92EzCqPqGVe1ZmsTeupDt3oP85cXbKDfD9rpKLgeQmTzk",
  "key19": "4LAuKZUygD8PJdwXPiG4z3hw5gqQZJSNautuQ5EZ1KW1NoqhP8YDdac1qQ5ncWUWCpT2jcdXMX1dS26Z4E3zWww9",
  "key20": "4q6j6mDSWx8rHTKVnmqEAhbVHHcJqAmZxkhnYUaJrRyfQUYCj9usFRpu8hwhsQaXP896UhkWFjKPqbKCSHaJ3pGJ",
  "key21": "3HQ3tLBhpHYG8y9pd8P8QyWArxYikXc6of9dx3Tp6De8s5HLqbYdT6yfMfsvPXfGx8718hxfhP1gSkwLBYyoAReZ",
  "key22": "3wmEuxEY1ptiFritHceUrivvtGpLpDRG5U3YAvUeVzmpKBpiywQQCXVc3Q47jQNRT95WbZkGFwPJgfNEToHgzNLL",
  "key23": "5DTjWwFGuuiPQuVZmN88PD3Q8ckTvZFzeKewKwWEJ4ra5kocYLVG76qt7YYGTWSDYoqceybYs5fTofrLx4eGCoNK",
  "key24": "3sTJ7RRZvnNqWFW5DYrCfdadVHqiidyWRsBtrkJwrHwWEMjAxyGDpZTPCkb1PDSxQMTzqY2j6azTxocb7b2ePAqe",
  "key25": "5fwTmbf3SuB8QzwUZZSN5tp8PRinRNDc28i7yCbpx92tTWQkv4bg4Fut5Pz27DxroNAifcVoBWsUXDm82FQj2zyk",
  "key26": "41rAKJYbiWVuVWyLwyVtARTEVfW58s6rVjV9jyV4UsV4p5bgkjxbtaVMJgQqp8u3YkqvDq698Bg8AaNY38YDBKi1",
  "key27": "zzxyQPZ1gjwjNPgng9hT13UaZvGvTL79FqCJ7HXrpEBDKd4b11WKx6psejoiDmUc4Cvx7qknbGX2fkCm8YhwEWw",
  "key28": "5HXWtJfqZMuet1S5mHcYWUYAC1goGphAsFtG6DZyWFqJ4BVkbZFBoYVMQpb6UxAEWPikGKMnNdUnMWF3t8uuxsgQ",
  "key29": "3KzY9X5mUZ9bL1vkrm3PVqvo2XmkqN8SpDvVzaiAB1S2zaDQbPv3Nnka4J5UV5RUsbRqTSs3YEocG5vDmewKV8Co",
  "key30": "4wbEyyZkVpa9vKGsa4iKaWLhntHEBfZcgMFGLjxWqPdAZ2RfzDELGsd9UY6V8a2pJTAxEX4SaDA9J9qUTemV4k8j",
  "key31": "ZLWMx2fp6cC6DoriFrPnU9Paq28SM2MG84yyjRrUnFU64ygqP8ntvmPNLvYXeJn8mY6ZasG9QE8ZCxDpkEmVqSs",
  "key32": "4dt6omitTWJ3EzpWXpZc2oRpLQjNCxtFnfJBBPNQnkzXj2PdNRXc1wK5hMVKCmQpCeRyWRESgqCxu7qUKpaGWJuv",
  "key33": "2dcwAeP5Xxhhz1KgK5xa9ZrYARwLS8tShCmSsftMwRF6hyQKvuuhjc39bc6ZNvkJqNAMzsXFpAhCCgpt8aG1RN4V",
  "key34": "3uhNariobQgToZid8fBNdM369A6n9Lz8kpbMwj1XksjaDyc5owSLeEroat5W5AQTYQpdCdqEjSFkxMwYHTBxYUCj",
  "key35": "4mg8bcZH9YE4SZHBbRXAVJM6EVXdo6UpetPgdaqLDedtBnRPMuBfCuRpP8RoHj7DNN5j3jtuQj9y4krwvn5T2Eo1",
  "key36": "2Di1TMvFXxAZ6r4MeP1nAcn8LL8Kj2NtHZWfxJwZaTKHbyzziF3pJWYSKNwZrcjgxuighp82kYK9yUXj964ybmnL"
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
