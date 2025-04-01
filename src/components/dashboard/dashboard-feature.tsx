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
    "BmVVbwGv1DxwyGUTQ5FmApAC2tqgH9AJcJFzNoEh9cNwj7s1Vf4ekSrGXZt2NaUZYkLEew2J6CE6uFnZqGAjoic"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "67PhQZb3gsY33UHZd6c2gDqNohiVnRKacS7hMZKnPGip9EC75dhqEwsXyTjPxS2H9qc9idQH9bBv5CXRw4z4Bv5F",
  "key1": "4ACHUqXeRomyHrFRZuqhTAZamwqoseVRdBpq6FwSqH1q8ixEZrRd7MGn81xx6UkuJryZzCayWuaYSCXugvgAGCQi",
  "key2": "5HDCK3CeFxqXtGhoXHZ24vm9giAYCPrwqAtzivBtVxQUAmggFPeiV6Ypf4xifH5g9iU5vJaTrFHrnMpaBesd4C5L",
  "key3": "5L8MdAjiAARmt9Y76tDyhWVfsz9KmVKP55h1m32rgaFaSmPXBNyvf1XmYHxceuhDFR3VXNwqjHWvXxb6hP8pBqrr",
  "key4": "4Xqu5QCCzv17Sr8vB1wFk1iZd5VRYDcp4ZeWuwEwf5WFCJmp6mARh1EcEtkh9orDLwqC114dhBfV7Xt9VZWJBUDv",
  "key5": "61X5f5Zhnk9u2nYW7eww7vjNkRG4W8ZaHweBqmFfNjvV18UWvzwW1HRnmj8YR1YjVAwiLFdF7yrBZxuff9qUVWLg",
  "key6": "5SWLuG82mRNGemSEwcraMjf1NVu3dEaaxkW7Mbx9YrZ9tewRRfBma59CQ2S12HuQ3uzuT4kCFRmNUB82937r74Qv",
  "key7": "4kpDJo7nAQRcbtNSZy37ZZGLqJMtFHjGCyWMnWijtma4GqZSNNC6UrTMEZYt8jjxths3J58gfGk1Sgwh579UT7d7",
  "key8": "3DMZc3MzbGJvKFrKnnPYSJ57Pn5LnFZcgX26T86r2o57pwR9L9qerfxLUtE8wL4fNdFnorC5PXvG8SL6D9LojNcL",
  "key9": "5Dp1MSDgDPLKsFrUuGixJsZeVscCYcqgHWm7PYcGJEvEDD3BVZfoTt9z3BUap4Rr8tWGyK2ExLP2JEPSaXevaF9g",
  "key10": "2ncbi17dbqLZya1GXXhaEfCHy3WJmavRttVwgQQdSimRCwLVHn1gXLLwz1gYkUqAB3fzmHANyGWNaYQUxSZ1nF5Q",
  "key11": "5J9tzrSGhAsQ2KNt2SYkgqf2TbEev5ZSeFepRrSp5fBn1UdxxXeLWKz1NVrTcRwS1y9PE3ZKm6jGqtf36fMAKn4r",
  "key12": "2fmhLC4McCy2ogvS6Q3vkyy1ss3UbKusd2XGVQNWaGCvgvGMSg4tQ8mTr8teZeaSDx4PU33x9453qbu9u9YBqHgy",
  "key13": "62r7q2RLTdKsQ9ni9cXvXpEpdcUYucnickS7Xse1bYwDD9qxWEaYANWrP8PDZTNaQfjU5rGCqfkHJYBSefcBqcmH",
  "key14": "3uoPLwsb4zvSxA3UpzorbzXziUHYSrQTjkzKq5esvSG3x7rnJ1yhYR4ziSgS1ZRoz9jUF213Eu5dwzarqMXTcx3F",
  "key15": "4TiMeQ6nfYBejJHMGgxwspK1YhZob7aWS6ogx4aR2hXgUfxMbRqCiysYnThx8j3kaNKgEMGUEj2Yk83fdMy2LR3",
  "key16": "3Cty9FxBWwd4dLAP4jfGvTtESKGumnan7HYRugESZstru5ZMexiBkYFEjFPTmVUEKDmJ4UKP53rjNYXxayP3YHYz",
  "key17": "4h9YoZAovYpZADaUdpmBi2aiEZHNdYa2BhrVt5YbhNw38YXqfXKZcyqnFwU3CH4v8kEPPyjY3F8wUVPMnLsQ49FT",
  "key18": "4Fuh8yubQPwmusWTbsfjYWAq4F7gjdcN1Xz2GgKH6cq2UEHUu8AbFCXJC8XwhScLYeG3nJEazdFof43EJWzQw9XP",
  "key19": "4Y8WuBC3XbrgLN6PM7UAhA2yM8zjawKen8YtqNMGuj3wTtKyQLG6ehUJV51BDeuYd2QayketsC2whbrs2TgwYEic",
  "key20": "63xxvCg9uGmRQhRMgu4VAhHhUY95GT1TUytbcchjzxVsiSGnQv9wh9kGCEsSshPrevqE2TZEqMmR2wVF36ePZsoG",
  "key21": "24FRkySibCSKdB4LVbfzHYAHtEukbmdjt9NVvs1NBJD3QFmAty71vCSPthDNbNwQSLg7BR88bddybnRJBy9LnwdG",
  "key22": "62A4qccvDpdJNyr3rUFeqYGNKQ9rA1EUiH3mNPAJWhSRPSZgzr91rAGKWMhmxhSJ1jnLSDhCA3hushtbdfwtqKW9",
  "key23": "3aXVTGRZMC13iJpf3BvtRbgTmnbUDptpCzJY9XxmQEccNRjt77KdEWEGErgxAJjyqZgGhmUtUYQwSSyeR5Eg9Car",
  "key24": "4UyJcHmuMWjFE9giNbqi9iZct38NQD6oGG97BuFdfxEFp3no5Wj4JDtMPk5dqzeymNYFbaqtYRvxBGUcJh5tZpYc",
  "key25": "5oQA8SCht2uVYQ14nYzkEZLhWeWKQTh7FAa8NWpXeHU2kS2cX7Q3Czcuo9BhS3Vb63Mh3SqHWMTCWnJdBUgFwE3r",
  "key26": "Q7eQPzSJDjGgQXjGPjdNgtkZoJkTA7udZHmWehx3bpLsap2NPrP7vz9gEAwJKW1mEpnCVa3h8uCwF7iV4goN1xq",
  "key27": "5wfe4badWXaGyirGcdfUs3eKLAmiXQuSF6ENn9ky7qzXAqmkfJF2QWh9nHghMVqgfPebW1GdbKgRVdLXVKWa9FTu",
  "key28": "2NHSYmk7KDjM4yLDQ1zZnqBqrNjKwnnbw7xWauCjxeFTJK1sHwhMARdZYKfS4HAw754HcaqjwdGaDGfntubstm9E",
  "key29": "3MaTTEZ3RSxAkHtYLUGDSaDz9ZDyRZtntGSwK9vV8djrKHEwKUxGgiZEME6VDdkCRhvGmCjikawbuomHGyD376e6",
  "key30": "5Who9Uuq6qjcJXx4vZAEEqgu68bfJvnyWffh88t6pN6u1fDJhCuz2n4NQorV2TF9Kp9UEnX6UhRBFfYNPU5GzJzY",
  "key31": "4SRApeGPyCAN2YAi7UExj4LivF58wbNaTmxZqZpB1tm9JdDWBvMbNsLziwFE5uWkUBkqqZvjebYFK6AAM6bzUVnD",
  "key32": "MGcFqktDzMmAMnYegWdsnxxPd95vvVTMsidU13Ydy1auG7R1mgHmUdK59grTP5fnPp6yJBZqpDDgFP9H6AjLzcy",
  "key33": "4U15W3BnFkGeDuqsKEzrwQqM4PR2d5ZNnCNW98q6iwM4JfqhrUaYm8ajvCwqc8tZWWhQKDJKKa6q9x9Myps5Jndg",
  "key34": "53cPXQ2RgevBhjrcYvB3zG268Qg3WziqSB4eS5Bj3M5XsPsY6Qwx6C3HEk2yYusGc2zWpJUDxtKPgibx4eMS4a5f",
  "key35": "48SWLedeP3UkXvVeWc7S3CZJ9fTUySSMrg9jc9rqN87Wv7yMFuNkSbEtqPJythjVNejA8mZgHPiGsRazztYnHuHU",
  "key36": "2coCoZw5kMjFKMm86Z6jnHrDYtf1vwgyAQux5CuF6rY6T3Rp78Vz6pFX4oygcaMVoLmkwWuNFwoeEpQuL3xHWNzt",
  "key37": "5ubniwuVgXaK7mRZ2TofhQSM6fABb1C11xVcXLf7JvGJQ91xq9gWRHCRyj3EKDhsHPmrmVs2p1XBUHC8Zr3ogrmY",
  "key38": "39omPSdq3jp54UeQqqspxMaBsqMjQ3uPpJwc7Rn19a34tNvAP2sLDmVdF5pNfX8Stqp2DWKK5UTKDKefDmahuhQ",
  "key39": "5sGxFjosv4oMu4CaoRpTqzHAiv6KtZt7xfPWXV9c9MJVgZ6krPh8SyszETVRDBWbWjQWYrBMueQVBLrU4AZDNuXZ",
  "key40": "Re9h4CL87jeuCiLHpZq4LV57xCrg8xotbzdjqmpAipP2PqG3FD1B1zajcJfChnksvynweQ2kKvg8n9spj2kgFdR",
  "key41": "NQdcZQXbgGNb9NYcx9HQP8QHM3RcPS4bZ9GMGJQLe1CRF4dpFYkmML743ov9o62ymcNLFNE9XZPQsv5Qj6DxE69",
  "key42": "5Wv6prpiCwnmvEYe4nJWobQRwfXZpvsG7qxjLoXGVq2saAARCL8dshrkNPCsHJ8cPzPZWGqyxCKk7mECnBc39rwZ"
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
