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
    "65gJc6khpJYdUJ9driw5HQqZZBfinp392vbjusR2wP1CcAZDbzsfn7PGdczKwBYi1hbwvkDLBVoU1Fgy7Fo9n7ra"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ASZVa7YniKCL7jk3dXfgxTtG8EDqaGcESyr49DXxZEosLBsYibPbrLbsnXMTr9PR99nKLMdiUydkNzJiHH9e2t7",
  "key1": "63N1VG9qVXe8svZgXYNd8F1LdZHTMTDVsTfrNkokDgGyCjuZyCqmKQDDPuEdb3MZZqR37rBjmAHUfnxCr4fxatzd",
  "key2": "ai8UHYFwSgkaU4Hz4kRGRAu886p3YNUdGoXXiDTPrD5Rvn9Po2LzHFEFErJzPL4pKHtXUK361x8GbiVmuk5K9ff",
  "key3": "3c7JV7YUqXkLx7Xg8nZoewpT4JYT6E7JkooufdknPbw5hrqKhHrvKr8LAYPwDTWtgwKXW48MWUHxzRmW7tQVMKvv",
  "key4": "4yZ8k4WuDU1auAgyQgvwpSnYHqKcKnKkrjcVXHcbpGRXE2gG3nR6rN7FDUX34t9rGC2uLXaaY9qGoTrzvsiiPnMF",
  "key5": "4YUPhz3K8Yu93MhsQTNzXqA6Acm7MexHYebonZkrgG1xchqvXNR5phfLzLzSGzi4EChiUzAgxQ34YpMAsyg2zKSv",
  "key6": "5Gz2JMbqUkT3NxrdNtkQDD89btGH7DpBkGv8dSLEKcQx3Rm2AG9pfFCZq5Ap2qW8HWXZhbkda5w5oHoRBsAB3KUi",
  "key7": "tPwjDqivoemDWkCCMyzzuZtcgadHHo3nW1UFnx83WeKBKKFH6dKQ77xu3do6CGeWGLgsnR9UYT83k2YPs4Qv6qp",
  "key8": "Au7UUwcz33kvUBDXnMyis9LHXEseVN3ZzobLozyQzpGHSzPvXuo9WWmYZdUS6P9QMUGUf4z3gnWNTron1joa4QX",
  "key9": "294uMn2ptK7ymVJJDqvx7pSypD9S81LCLXFnAHirguMAtGpMV1bkSGEktof5Sk2pB1gG1UVA4hYPjP3Gcd1QzA9q",
  "key10": "CLFD8iRTyJeM3NasYwnNPeU5cRF6YU3W7HVCUrbnherF61WGXJi5gHg4NTk4XXZDnQvdSzP2nebArxEqWRZ1vaS",
  "key11": "2LtAgPogD1AvDVEDP2K52LTvqPvCEJZ2X36rjtnus7YKYLw1HAUPp1TkyDz7iXgWqzoJGQh9zaqBWVNHBAfbc35e",
  "key12": "42Ac5xDLbm3bmA4rketDaKhkNhARy3pCkDsdzF5K2euCZy8UBgi1E7mGTZiDWMAJhQDRwjkdiKocrZcfUYSmbiVu",
  "key13": "VTTukmJnZGP5nLG8NU9E2QiHd3kUyNKqkQ9qoSgrhpcajKWKVeE3ZUktZ2NQhutkFTBFYCNFUs5eQe7REUce9ah",
  "key14": "4F5XmgHBLrivZcrHySoA3UXDtNNDgymuVhjCzgxjxiL86rD7hSCAm4dCxp5P2qYudDhT6gp8DotzGWZPqCVd88LN",
  "key15": "2hZvaE8Qa9eURw78TdbYE4TvzsZABXstG8JRgnmJsSeZvdXQ7CvgKaRzxmim9bLBQJkn3XzEVBoMyGZYGaknyGgf",
  "key16": "4p3Z5vD45AF92gi1XF7cj1aApvshKVn6ywVyXamM4Ny8M53DsJAHuwJNNGyFZooX4M89LjXqVzqu2CRjVx4WXNzN",
  "key17": "3JmfyMBWknt7QCRWV7kNeJYMVrjw7QGb3W3gfoJKbHaTwui8nudY4vxdWovU12cTehY8scShudt114Sjbc9zNkb4",
  "key18": "4dLRj41qspTNxiRCqrmZQcRgu3PVrJsuCxWzzDbbxSLhxeEjPtz4xAxX5dbtWAHNtpjPxkd3yqhDqUwZLa7AGgeC",
  "key19": "44AwyD4p5ERDyEuYgzYjXFo3vBKiRDozdzR7TyiJTD6M4e8p7a4UErKZvwn9EMHZR4KKHVza1KFqBEPYqFxRyko8",
  "key20": "2Z1BHQckssV4ZyoPQnwptiMh4wxnU2LBmG9bQgBGAF5SPfTgez7d8JhWPDg46YWb9QK7XJMBoRZpUsT5XjYruyJ5",
  "key21": "L5n2w9JfACv4MURrKefVPAYBNEYrLUJ6HKMKKukFs5ASzuwXLGx5LQKFNAQsyWEcZJnhbwGBMfL19MxL7Npku5W",
  "key22": "4cgqt5PZaoCPc4L53UGAiWeP5SYPczPBzwjCuwJejdfomsRVJYeRh9vSmDz99FauZtNv1RdvthJdXo7vt67s1iRv",
  "key23": "5hPFq3Ka9LzQ1aWYpywsDGW8vmfnHnHwD7DNbFRE58A8Le3XFyS1Aj6kcuHrGFo3v85uNaGMCD7nki1zosEqgCNf",
  "key24": "2vmDn4nmhkoyE5SsDqMfiykhA29S9KS56Guce8uocjtMNansf2uyif9Drydm2tmWmidAxQozMssuDy7nLNXkoq6M",
  "key25": "3GCfiR7MqfDeJDWEBKptfpE7JmdHaV3ZCT4TMLAHmqVAhiYRZJp6VrddzH7UUfFaz1jbv9BeubrqW5s7MM549jtQ",
  "key26": "65c7AQptpyDqF9BSyMLqnr3U4pzbKCyXWEprShxaunjqx8z4J6boQ2NKYadFhoXYrnw1gRJgkUw7BqpAhdgYcyxr",
  "key27": "4xoBGFtDwbNm87D951AVUThLG5x9ihiw2JB2KNWYEdA7kZuuaCRWVJKaPe7Xy6JLj2pFcZDs2N6Fb9hZ7X6Det9D",
  "key28": "2ZeYenc6y4XCFumZJiZyEkpEr7ei8pUy4Kvnzkke11JYmME8n2h1i7z8q2ZSeC2TL1oJSv4N5gpCABF956iMivtT",
  "key29": "2moEnu3JXkRMpsafTofviKZJkNfnWi72RteJyJarUvZeZkE5VTapnhb4gYm3RQJdEqvp5QnMHpY2iYepFxyrm4qu",
  "key30": "5vxouAnkfXCPzag7a55YcuR9UaZ1GTUTyGouLBDPy892oaewJdC9ZuLkaXkuWxhXM3iuqFYf8bhdUkjFmkyBfPSg",
  "key31": "2PyDqzV1YaRehh3nec1s9bQ5FnD82xTfdRnarCsAp3PyxPrjWqHLseVKBPaK4b4BapQT6G4wwwC5vKTjnDgve4bF",
  "key32": "57GLMJH1VsamZxyBukN7FVpwKUBpggL5ybDDysH1adV6Tekugf58F4Mzznr2pKq8qvBP7Km9Nfd1PbPNcowbNYii",
  "key33": "5hTyypcCaBh11eTvnaUzJ3CvoKjhkLBX8PFX4rk1rtpZFdh39SieQg4b2NLHaSszK7oFqx6e4YhekjU1hVjUhe1J",
  "key34": "26Wjed9mDsHJc3LGV5B1VsV55bATQyBuYKAsfcSNebzDZpqmfyZzyrS6daaJmb1JYv4UVhd1PSHo1WPWRMjBKNk2",
  "key35": "3KsVbkmhSvD2dX4Ke4vwiHAbhqfYhUA9LPXedNATqjWYKCfp4252XboGRo9o5wfcDj5J7K1z7S1Ar3hFtuyFAujc",
  "key36": "4FyVt2v4QcVHqDDFrLprgcFsmtv337M4u5t7G6T97ov3bjrV5aDLYb5TDP91NLYjgxQ7WrAA6onUNGQrdvLqc9wV",
  "key37": "56cEKryZAqnMwDWngJs62qnQPhfSSu8uhuRa3cN3WPafxuoEBXs873FfVgQAsdkn1XTdsFBdPRA27ekJnV1DAkS7",
  "key38": "5QrFsxv9rkoQbznziVsPtRnzAvFrcPeA8RTQVsjPHgYXBtMw3chXfubqtgaoRkRezgNpYNrahaWdkKspVc7TdB3o",
  "key39": "4fbDiWtsTeTHkUr77ChfRNruAcuUaN8jprRciy3n3oB9KRGkZFb2VjTzBPPunMrEUCHjfcpXFJBnr1mT46wXx4ro",
  "key40": "EMWqWp7qSvAcmjqVJK7cCas6pF3po6oDW93drxurFw76GuuzAssfPeDDSRfU8MWvbZdB5bdwG7FTJ9jpTws2LC5",
  "key41": "26xnH1WM3wmH1m1gjdaDfJaUDzXA5kNTjcKyLes12eWMKT5tvMongWzQSMRJFG9jzQMiagVEvnXgJNbYtVPS86ur",
  "key42": "4TyqvGw75xbvGYwi5r41f6y4KMo8pPVMaBAuMQoZ1NtfcNDYKoiVB5oYTz8chpyw7jgM3rjvVutaovbK7Tep6wgG"
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
