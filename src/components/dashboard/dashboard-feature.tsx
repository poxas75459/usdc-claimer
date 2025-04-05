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
    "28kSdk8j8uhhrcLbhYnSY8J3MgUu1o1A6Za6xAxVTinqBAYzzgUUyz4GrJ86QcL2F2QFBg92sp4JKcD5uwVPzFmc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1VdRfBj5LWTg7918tRnGgTdRt1Rma6u2tbeTAVJY6N5WB8s9NrSyFM3suTdocNZ1jnbTmweYrnyWd5g8JJMjbDK",
  "key1": "4Xfxwre4nMiqYDAfE9s3CUCrnMUFLjqNbb38nvjC5zxa3dyZ3WQVQdDmrg3R55Pnmp7i4B88iRskkT9fEqsLto7g",
  "key2": "2NTPwbYqcnunvCWfNomqCVHMd7SuFss9DYMBFKgwHEkpntN5q7KASjUkh5HUX8DcH5JnCeKnzzUtNgdkSEfU9FLB",
  "key3": "567ftuM2XmWSCQNyLrcydN22JttSoTKLfttXSNEmXUoADjR9rhbaJi7K7zVKQ6BWJTvFBJDxvEL2p1ZPuPEgQfe8",
  "key4": "2ghuV5tHfiEKLAhpF8FSJeFik9YD79Y9aVoWW39PQTY6PTZmgFqpaVgMWsPegUEcRJq9rh5J6iE4SX1kCQwraEaS",
  "key5": "2rtoTs7AQ79j4mAFitxLLmmwqcMvGsG1eLSb4up6NGtzdRph6Aa8odQtPBNq6r4BAwYvZJpCbMNFVXLQ7eVUz6w2",
  "key6": "5NsLEk3NabzXj7UYTHTUBU5Yw9eLPad9WLcZzWEiQHjL5yPKygFvrx33KXP58Y28KYmu6CBV6RsjGxB7Nsmk4uH6",
  "key7": "31xmo3ygPLPDyPj7HujyJoNWTmaBYrBmXVJNLHVvZW7sp3JPyzitYWmUiX8V6Y59Sg49xVogRRjFuHxFNBQxVLxk",
  "key8": "21hR6L5hcsQAQiVSsKyQvFvCmzAgQvtCvFukDfifkyyRazqBY1iYeb33cgvsWsJnx3zbA82ETnbuqzd1GBbdK4qf",
  "key9": "5AA8RpHQQQVGU9g7P2d2qEURqH5Kjg4nncMGfV3USSAgJYL27wWqKjaJHWXuMPrhXomjEEJwtgbTinXdqX238bMS",
  "key10": "63oq1T3vCUqMx9EJhqe5DRDJR63WCwUNeS88zEvXWvfuR8548UjCm38UvXFhEJ6PVWghuD3QEZ2NuYkFPyGYGvjy",
  "key11": "4KDKafjeEN2CK8uutM2LYydXx8m1oN3Xj6SEUoGcTHAY5AANaPJLCF3Nn9QzuBgbeEWWdbLL5aQ3W14379LBSif5",
  "key12": "5Po9YKe1uRRsbWwFUxYHF2uPxQ55eRoCVachXQxu8Z6ezgrZfjCGFPS7LuScKwHL1bVaPyg7gF6ns3LxiqXhX5t7",
  "key13": "42Zc6xop7epByfzf8V5fzwZj9yG9exHtpfUhrFB1rr6vdBS3Sv8v5UvxYXpqSadpLUBTatFzo5Hp6HnNnu5PidN7",
  "key14": "Q1A11GGYGH6wM4p9pbFQBft3uB9sVJJA2C9JjZkTAMe3H6Amwzyg2VU3KF6qtiCbJFM7NLQARAS8SXpqkwTgukZ",
  "key15": "591KmmUnoxdqE1pXNGNerDgr7C2P1jYHhcEdamiSkRsqEAwQTMW15x7A28x6FwrNw4uZE8subjdxBLBxmRhiqF4G",
  "key16": "54WYkBMg45xCAthFtyB8ueKHdazieN5CMqtpWeTSdMzCkKfRPHyMnQVUmJLzgBgsW9FrwEQ6t5kF714F7nuLNbES",
  "key17": "5E3r1RbhcwSYJYN2dEiAS92Ginf9XDrwvmvN8NevUGG69tEQchivPsN8W7uV8KyNEQ5ptTSqKfvGdpjXxfRhVhJc",
  "key18": "5a8937bNdA1AuDK7a3W5fLpKiTrdVrdf4T9fkYUj134MCizjL1zyx3e1gFAHJ5oeYEuRZDVGH2bGqT9qtdxGdruU",
  "key19": "4ZTFyNQCKb5U6SnpmWBZFbgxZYd8MJJQbskD8rcVmqAgxvFH6xr4snUnUdFjUCuNZcZ5e3r9K8mXRxgPARaZ8aYX",
  "key20": "2PjiEoFF5bPCm2eEszcJNVc4rKpVM9GZWgjvTahvZd1NUym8sTPogEEwExEFpr9pDkp6id2LmEr2t9UrWZpAVrtJ",
  "key21": "eF9hosqe7Agy824Y28Dkjsj2eX6ZRLPGvS1yDqJii795AZrZPJ7SC7cJAcuGgwLJE4XzurHi8ayU5Utk6Kkh1ZC",
  "key22": "3kz19yJGmLx13zfmYBMG9eotSohfY5g8ahShEJn6xubhFurz3HHKnzaSfATaZ12wwCp4Savxwnny1qTQcCJre8mY",
  "key23": "3knmVnn1qqLJTpgfjUsp452QAqk1NKt9BxAmh9PtyXC7jV7pxJZiKCatqZMBzAgWofvrZK3UAuP4AzM2LojNspNz",
  "key24": "5j9QMXsAwC2n2WSZVQpbXFxpC2hyfuUTP5wZPoKomhULjo45bWa2ttdzmwsp5xSfki7zc1f242SvFgdhfEoAEvEN",
  "key25": "5JbLxXWm2CJ8VNe2esT2dLqfhtsnkSX1VUZ6Xxi8ZBS2JXvPB4TW3pYHYX49HM5hothmXfpJecwkwYAWT6pRQc88",
  "key26": "4tEVKMMcjQpryAWZPD6cGpdTX5uEGkAeCL344Qk1hhzu9EQUWKhuYaVCzoeMKuUcyvvhcgfR35NsuqwVzbcmXszY",
  "key27": "3e49ikbSs8HLuLPbDbmek6ZpNtWpFvpAmvT4Rt4AgvYkaRHdpsQencuz6hrfiVn95ZVxuLRjZLhB8TFH6yEEMKhH",
  "key28": "2C25iuzPrxDxBeX1gTvY815Bkn5GxJRSWfZfkc8bCRdqXzo8xEpaWP6EAzZLcjUdZ811iMvW2CvFaFFwMoY38BDb",
  "key29": "4sWhaXdfABdpwtqgGG8MVkkxHrcKusZbWS7ZBPvXy3JM6aHXUMrPeHLfq5DgNGwDDaDq1Yp21mkYt3dozR2C5evq",
  "key30": "2RcxJWzwX9uWtdLr9L3Q5YDELEYtWKvuqboeC2Q3Jb8rQMoccbBUuznSfyi3c28remkyUbtge8JULc5tqp9Yfom2",
  "key31": "cvFdN6E5MAKd9vmhFHms85HjNpFPryqSdc5397XFDsuk8o4YyA3PZFLDDfL2KB4wzmnqZq3StdZsybCD5AjW4uS",
  "key32": "KD3fp1EM1m47tfyfAPR8m4VymV9RWBBUTmQvH2HMugYgZD3Lom92977tEfPwe3JEM2FZ5q5eze64Zcz7w7GFk8N",
  "key33": "2L2nXdN1oNKtXgmvTwzxdEUuLB1eDXHVvpPkkXkgxoFMAGMqpqQdn6HgP5vsP9SPXWV3inD8TuRZR4jjVzCjvd7M",
  "key34": "27M3hQ1pnnV3tzeEYxNUPf5UhKUANeU53Ptemzr4sABvKPJExqq6uPDwDrQ6kxWzhGB7vvo9vmAdPfBbtYYpwV8K",
  "key35": "7VDHhsjCgAR2v3HUJnBg9MCeLFCxrz5C5Q3Lwxiptfp9PdYqxuQwpzQfxY4VobWHZrEnY3FXeZc6wzxsJ51UPWu",
  "key36": "iiJTzaqH6SWtQ5NbEXnRjLscNPhZBLLtwrjGji19pRt3euyq47pL29aViAdUfSyrShcY2nUTbL19gYLfK9eE9bT",
  "key37": "4Sg28zTHMLR3kuQwW1oPeUurzJGS4Zd9py8Rz615C6QdANSeN2KgCq2VRgt3Rf2y6pJ94rtRtnALBuqBxUvAMHRh",
  "key38": "c71buWgkjPyHze6qPtFkz1rYZLL1V3ave9mxkdndzUizXGbBByRkwSToavqU6ZDEqpPZDLi8nAd7yw7fApxXU3u",
  "key39": "DBF8t5qMAw8tCVVT64SmETpne2whJ7xAJtomEV2qFjiTSxWqDtSkW83XiKQY3TFureTnz3sLsiHAkchJY9ySovP",
  "key40": "6Ke8yuydQCgSDL5THgQt3sda7F4hAqXGKX773vB1zerpLVkXMw8idjQaKf6KViUQUQMBLT98RAEewjuxQ8o85G1",
  "key41": "BF1JLH7VXwyYM6ULhNwLmsPsN9eRNBK2hCKWAQcaMLdP168JCWJUQw67LJsav1GagH3T53B4PeScFxc1MjWoL1t"
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
