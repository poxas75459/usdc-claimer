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
    "3XfzUj9JiEEqbXku38pyum8J4CxNgGo8gbWwtFjbmnDzsh69ashMkKt86bjsdYpzfo9XZFLLjGB8JCd1kqri4ZiN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5NsNXE9Xk8XRAhB1HFqs53SXVfLgx8U3vNK7zfWqeUKCC9GU7Z8jCxM2CubfQcRahbkRRyTpEhyhEQVw4QBxwBxL",
  "key1": "dHVGPzpGYfLaWnzap7ZCP5aL5nQPtaCzprZR9T1jDc8peUwKYZP6mCaLGm6sTzqqngae3s6mFEGt9CpkRx9hZHS",
  "key2": "oCdDzVvfnHCuZnFetAqnArbm1UjVuXXHyZUShf86toEHQzmvpdDtuFgoRGhSkk3M7ssoEHsrG1dAxLneitwkXhh",
  "key3": "2tBLarF4bHSiuUCX81h6NobTi7rbBTe6s8yu7yayG3xGJfhZwuWFkNJG9HjofBqKpasht5CxWSEE6QPe8L58DQsf",
  "key4": "3K5QgpkX8xMUabK99HWcCjWhaQTdzLYiULMTncRc3L2vehion2zLKgkGMQ1an1f49cuWjHKSLuyucfQJvnEZQU2u",
  "key5": "2xW6rGP1LhaYxL6o1ebRqTNYipMHi2LYRMcTrgxNLjYv975xZW4VCuJLQvJMCNiB28cL3MDzxD2QNqg6P3osG9qd",
  "key6": "2wU77xTNA9P2M3QPCV4gR1mdwMcWYUzRTRgYCKtoGztD4WXThaZmKSfvQ9nAafVWUeiHvzYerpPojoa8dfj36SUJ",
  "key7": "3oXmdXzEzbyZcsw3LifopixHbhmcGtrucheM6GQZC9n8CYquGjY5nmHQKt2fTd3QmPwjANXSRsKwE2byX6i1G9XF",
  "key8": "46qWzUNFK4cb4bi59XC3wJunTNKx8ahHDXLeHR2EJvZyqeU32JnBGTto7jWEmodgVsdrG41YS843csYX9SvNQqtH",
  "key9": "zE4yFePNcyhoag3Y8M8At3nbdrHcmrR5mzNTTbiw51aZ1QJnUrKa5fcHNwz8DVWdBeMfeMWnX8zLWosndCvZQCJ",
  "key10": "5pPnT1dFZzSkMVE5uEEgJL9hCU3xxr64L9tc2PLsdVdptrgXjGzjhmnwEDdPnwd9ABSZixBxDyciR59KADHSABBL",
  "key11": "2YZCJfsMC9y6S2hAqmREWX9AJdYRedyaEdAXhnMUU8XWh1FkQBRQCGY6j2QPxdqgtd6HpqSZ2vf9vnN6CuvJYcW",
  "key12": "4kW3uxEfCd59jUfBN2sBzVJfiovCcWyoqkDafMMMkmeWYPoo14gJasPJThz6NRA4VBtLFqxQZFympgAfYhVfb99i",
  "key13": "45ErGbkRj2xERWxfW8MU7GUMMUMGxVi4zvHbFJueZDyegZJVisBAMr25ApwUxR3rptaeS3LrqyVgMiACBexZu6Dh",
  "key14": "51Ky3dZXdNnYHLHCUcGyBgGzBrsvHMt4PdjpfGdF433d1oDJXvVNr2eCD5nZZUJv7MvbFERZf7fdWD7ATwjsfqcF",
  "key15": "9JQwDqJbhzwKaWuecdX3DnzmiPP8bHtNf2yCKr6Y2hfiPonESnj573waQuSWiJ6QNNdKRYvYrKu33CUry4cfrVd",
  "key16": "2haozPhvogRQAuUMWBKgS6BQExHVvFUdBPLiJk33EaiuR74zErs7Qm1Qdh1g7od7EpEztMZUgg1e1geeSCmfMZKs",
  "key17": "3wQepPomqmDdRwM2V2v7w99yV7KUn2CvWfPGQuQpMzTcY5PXEYHHW8UMQdaLWDzMrbsZmCgTEzkEnSkTQdFFJCg6",
  "key18": "mNRj4B6eLGm4xGdeyu8yQwhgqSh1Vyx9dfkEybMmf52NWnVxp9MA4CXWyP5TcyBdUprPSD6hYSqT61dszmu4uBp",
  "key19": "4LZVWw64tLiFxrMBFGcVUTHyDZh5QarmiKnNBW7GFtQY1MvgDr82ZPozTQUWxTsrEcryBU2TfB88kptBdssf8ede",
  "key20": "egZa2DuA9qvWu6688uix4VCooJfFS3CM5UiXYogBga9rXmcVQb6GRFzyMt91Yt4Nqa9b9xHk2FdmtURYkHtz2C4",
  "key21": "3ecrMW3tpSi8y715VRwjpnhSyZk2VxmGGHeptTmwuVvJFWB7Zdbytjme3dz2Xw1zAsikWwmDGbXFAtgQkHfBpqsC",
  "key22": "2KwncAgDmoT2qKdh2qKv5mCQikdVzcci1SkXtABz4eXWf6eLnukEvqE22Jj413Vp7mRY3vto5ZovTz9H4fb3RxTr",
  "key23": "4iqcCEK11Du44LVJMHUG2Xa4xVy64FCd3MXgL2cZNbL9eLUP446RE5u6Qgfv8azC36KvtxQ7Ua12ZnFVyH1c1JtS",
  "key24": "3AivQjxcRMWk9VQ7WyG6ewyTNt3gupJs1u4QKSFucvQpJKY6ScUT8qhKSbK3kxrWDv3xkt8DdzVPC1r4o6hkM8ei",
  "key25": "4UMBeHksVsgDtEfiHU6V56RAixfkC7NYiUu4Y8diN6TGu6y4PtcoTGk5KJ7EoTb8ffM8Q3qcsVMH5ZyBo3NyXnaa",
  "key26": "5dJJ4NjD4wJMbMdQw7YjwatEas1ojyjbMHg1ye8rnhqf2QGKtq3G7hnjc5MBQY2ugA4X3BMiZnUf7d4WF2Aqug82",
  "key27": "2xNZXr6npRmKAfPgD1zj3fPoGCoYzxes1RQedTTDBY7UXfDLebbVQCy1TuF4YuJWBvTjAkbjWJX889ZcANKCxGT1",
  "key28": "HydKwwkhppoyeynnKfKjQjK96cBgLmb1v1MMDEJE8Gah73GVjA2VXxTJ7gq47LFwHg3sf1FMrajMvuxokBVE2RE",
  "key29": "2uMSWz8LxQ2VRoWoMvJ5rWN1JiiML54LCuRkyQKJgeaGYa5hBFWpYHNJe54gie8d9Bk16sunZMsWweVJY8wYkQiE",
  "key30": "5gZrDJe9r7Fo9QihMGFec6b6PyFwXjeb4g6QqBuWqjNCYVsYS2j2nAJM7aW5g5QNMNBbyqQeGEoP3EKiRoqnAdRH",
  "key31": "5tAUW8GJSGYZYtv8xBPeffMpjzeiyymyRjSByazdQqnfUYCR7dZu7zwBTugi1XkU7g7bnjR4Z8rLcN9PaySytPns",
  "key32": "2fmo1nDH7ePPPQafLd9GTcMF6KpNijNVjaG4Xr95c44Q1u9F6BgUAgbRtV1uu7WroRuCrCx53Bcvoi3Cgo4gdLZ8",
  "key33": "2A65ZdBMJ755wm2Pe52qQknZWpmNFV2tSiqnhDNmateG5xUZSBRCZd5X3sWab51Y7BbYdSGJ8QyGBhR9KZYV22hT",
  "key34": "5vwQbJZ5oDVBVhQMD6Cgy62znZCaZsW1QmuLuGZyBBCZwjrHdQLFGUCnXsKgSMiE2dCGZU7suwyjJSqF2NKgsWp5",
  "key35": "42U9FMvciq4sUvsQa4QwtdfrFSsW1JTRnqENVuVr1B7m4tKSXV8boNQspwgnoxPentysWMh7nPimDPuEpWUf8yHq",
  "key36": "3HatVXnvKEHp9WCWRHr93jQhxngfiQe55o7QE6SxnvctMnn1m6UjbRm7sUtgrrF7NRdrCvpPT9Y9sd3DoXF7uHHJ",
  "key37": "4QVPAV6ikv18Z5bSuTd244eaVfnicSask7HuP5viNZW7ZuPKu4SV8xZGpJhdo5DSVmJEHvDTBcrzJJRyqcFdLJ5y",
  "key38": "4qFWLHqf9D25eQSp5omkB6ZSbbV6hjUqVjDkmvBR7VsYdVNLzP2Lf4bDnRYNMrLrBNMiSecjefXE4ayJgE4cbVWT",
  "key39": "5w9iJryHe6J7aRQH6zbWp1pVEj9V2gtKTwLKwYrtpwnAAHP6QVjHtqjfMgbFLHgqEAo3ueeCfCa3J7vzunK7Es8M",
  "key40": "3PcBwBWcUMSnU7H1SHTMyd1f6mTjtxFgSDWjzxmjDtquiczfVrvaH4HJ1dEyGRoAEmTeFp4rkE5cVuE6YoVmvTXW",
  "key41": "5uuGomw73D2LrB1dqT2vK1G7rkTRp1sR1tRPZatC8mRuEsAFy8V7928jE5pAVuy9jbgxZnmH5Vk7tSmcvnznYxPm",
  "key42": "33FH2DMwa8uWUy126VKpN7uUSsSii9uZ3SWoR5kutgETFbBJit9rDD3FnEF2jsMkCiNGC6tHJhaidCjsdv9Kt1Wh"
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
