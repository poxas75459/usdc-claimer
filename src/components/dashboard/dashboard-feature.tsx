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
    "a8jSHXBcUXGm3Uf2HsqgzMcZofCbbKNkbH2Pwb4YkfqrQK2truvi4kt442daMjPBhoxQSRobqYjtUMsFvPoJHPD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5k5W3R5szULaGr1SidSwa4nEC4zaUY342c6ZrRQPPX3Qe1UPQh7ZhMjE799P11ciJ1wdFJ99wwcVveWMrqBJsGW8",
  "key1": "yy9xiYkxqjXuRQctqEJFELw1SAfpSBy7nwxUpttCDBCHSY49hW8GkpuY9yp3v6h35bnnR1P1wnh9HSbYmNowX7r",
  "key2": "671GCjDe9hSL3QV6h3iWNiTaP5pBcb6tP6vMcfKMk2CcZNZd1bH4FcQAUzTq7JuMGdR21uHcgixV2T7oukAbNUPL",
  "key3": "5yaWCyupSvDoKwsZtL7NJgYyLRNneUuVF7CRHWV6zv2npDdyZeoG2erTLuBPLj3quowxx3VkFMyFMeCGBU6j8ELq",
  "key4": "5Lhnw4ft1rQm8GJVRcYQWD9cGWG9yLuuaKnMJGHfLwFfDwqhkesukWhuXnU7nZnMHvYAmLVayeLUk2aJKj7xRMnL",
  "key5": "Vs4tsL264tCUitbe1AXHk3TjVHL8XxY1YSKwQFdaNGdQ6p5U4TToNyU7uPC71KS3P6ZiHPq3KR3ytWgbNN9e6dE",
  "key6": "3hp2cWxFuo64Y3gzgfdNzieHdhNpbuaRERseSp3t8TrdjZ8p69YCRQFvMZSoJjhAKkQRxVhSjDsgZgCrkt4PHv4E",
  "key7": "3ZnfomYw2rjwYP1hPDRT4oa3XUQUttMJupcJMj4k2jK1JCnGb6eqSXWvc2eBPcm2EYKsC6TnaVgjpVVDa4HSVgUZ",
  "key8": "5LpwjYLSZptvCxcQnMzGvwFt27LHNtm9nJhgvszVuieP8CyGongiEeMsitQESjcC8GrjxpsvbG4fcuuGuFSZ8YSQ",
  "key9": "oRfGnhgE7S3tLQ8KPe8yHLPRhXxEuW5g8VuEXAhcrr16ktijKhsULr3E6RHfDsvtQecwyvpkJQFKWnWFhWXqh9f",
  "key10": "5MJ26z9uXVHjUwgC3mqkFMuvocxerZ274uaRZQ2cpQ5a829XjeG6oGN39izaY9Pj4RtB4Ey4DouWTuJ4xhQbwGtn",
  "key11": "iunruQBq8BfaCYDC5acsx7mRv3g63csgAagnJVVhWS9LMxKCcmmnne8NZA1JJpHNiZ8knBsBcxvGe6wRLHgdjYp",
  "key12": "q1xmzeTeuLHbCTKncPZmBEr1kmp6amR76tY7ENL8zL61JYk7PGRP9MtcDWfgKYktNbjK6MuWbGGPbsWZb1AisMa",
  "key13": "37LQfQjMqBQ9AZ6vEDwnbxubqmfzvzB3oqPD3omzvM1UmnuoU95nXJpQouWohXnoL8PQNK1m9mGTvriiqFaTwacE",
  "key14": "3BE2UBBbnen9fYzZU8RKydYy74udosQYU3s6jFpY6ZBQPJanEGQVhdBvQWs7aoJbaspN5A4TAV9FAkgvvMJaTpBq",
  "key15": "5EkCZejuQfCGHprEJEwubNXXiQGo49acaSCPnTBiUtSPkyi1aTd8QCxRUPCa7TbRxJfPTScxBzeo7Rb8W6x4UQ5q",
  "key16": "4HhYf9S52jxoSJJMU9PKQ4oxVn2RZ5zRhAzMM8GUmn6fbvEE4so1iPRPg8RJWv6CPoNF7VRboJgNXn56cUokQmha",
  "key17": "3FcxR66wyamQtd7Q4WJTFKSxCTsVuH3eTji8oJKsno4gQ9iqXAzxUzVDhqyePT1uRoQkr9j5eS4TMbNLbMhymgfg",
  "key18": "3TkpqmF9meYAkev9KvXmNkti8Wzd6mpcm7gZRG5nSDhRDCnxp3JENcj3tdQM5817uNohKjweGyQ3hpNpNCdWF9FC",
  "key19": "4jvjRMcy6QvcpjRsCL3ZgNyLmoUJ47i83uecGFNPe14BXy9NBMsXTDQCA7faq28xqXwns1uVDp8FoJdDgu7eRwr1",
  "key20": "2wq2MnymVkv7sKyZTDFwkbRbwNK34MHkkGfpxbdV3Ds6EywBzTwHXXjaeEfka9HRW35mMy6zTujMPzruVP7edREf",
  "key21": "5WetapG3YuED7G7Bv9oFLWfUiApEFWDhAFQdSsSft4kqX2X1fHZGntTrimoNNXkRf1ENjsqdt198knfTExgNkRbp",
  "key22": "4hHvauqqX5MhmEN11DFD9JDoePcxVJ5RgkBfEkdiWetp79Nt8kPFkcEwH7pZfoTP1z519VWkbbhsM3qKqGRLBjUy",
  "key23": "3Hunf5AE9etEsKVP7TqurNrhswaLdMbPb1d4j1umH7hFq4vEqx7zVGrqpnTnW9zbvzT9VnD3BvrX3tb6iSCe4MHN",
  "key24": "4QavUfNoz6NZrhWCkYUFXGs9QjPmCpLmmxrUxHG92zQQdXJ7b7QcK4C8sWSQUFZAWDFSBRYS1cc8N2VNMFhB5aAy",
  "key25": "2ZJtJ8SQ4PKCVgCgEQbKMVTv5PqWPzVf7rx9m5fPeVtB7p7PFsmCgZUA1fkiyxFjjKb6WJRU8q8KzU2vNCsHKDjm",
  "key26": "LcRVVS8vdKwGGiRJb2UNenRKHFMq3Kq9oJzUkPbRXtUEpVUh5wvJbPyagN2m7banBP4JfKzXJDXbHoXksGkTAuz",
  "key27": "5f7aTYuWUz5CgWmaJbvjhbVB91KraTktYxaQAcNFTJwngyvxwRgyfA5FdUUkviLtpWpWus8T6JfA8ENsUH4AxrKW",
  "key28": "5wNhXo8JTrCwWCpjTAawfd6SM43D6TSYK4SAE98BaMEXFsrBRM9n3v1gYMLLJEezMEDahwYAMXR27q63FzXFKa3E",
  "key29": "3WixtFdUvTUAAfS1MB9cE7Xwf9DJtQRaCHkEe5FaeiTAeUcD8oGSzpht4RFmcB27SPqwvDsQ8w3cR6Fi1UCQGkCg",
  "key30": "5VsDSA7j5xqwFQjnbvDzE3CtVhTH2cqcWzzgaaHfEUFWsDiFMp46ZRhus2kqZstHv9g78mukcB9PV4RKf1ZkUNYo",
  "key31": "524qYJNxugBLhu2CW49qzdMh6EqbgaUkdxCEyvKaXh2a6VHFui1Krd7jMz1GtcAqYaPxafzzYr8vYC42vfpCwAe8",
  "key32": "28sszHhbn8gRw6ZMJwgTqJ5LDRAdkAzNxm7cBqDqwHqASYBeHiiH3Z5yCpvau2ebiqggM9WDCxq8kFtKk95yrKgq",
  "key33": "2JCm69dRUFSUhU4QWEJbZhNbNAonJQ4sFJ438TcysLU9evLTnhNA9BCQQ6MXcCpLkuW69kfjdMWy961ZEBHeJGnm",
  "key34": "4badqQ1f5tErVr26bWhhgB7XPGnqZyL2rL6X7qdwFyZD71D64CTUYhJQtM3rqR4kJk31rNGNQor9vG7ot4sxHYkF",
  "key35": "3KHmP9RgYL6opReqHvRBayW3G114HnVYn4RYTSmvc4G6pyHsjS1yh5LK4uXdt751ShUzg4NbuL3vG9Sb1Q3JY1iv",
  "key36": "gYivwKQkVPEZNVCmvSn1zeTvN2iBzHdHZWEFqmU5nyjJr7Fs8BAxqu4dY4rNzafiGoQ4KXeb12Yv2TH1tuvMGSQ",
  "key37": "4cxFCJicFJzg7EPJDhN7DWrg886JNdr2Jp4adDFbavzf1hnExsAbJvfFaU7tkdMjzsMjTLuJD15sKQ7KhB1CkHBC",
  "key38": "52FEW9p27cehc9iqmF4j5N93cJNnmx4darENjqjVdxb7qLSp8rRX7ju8LaJKHRroiwqqr3S3XYSPG9g1TWxUXgpU",
  "key39": "WEsNGZchrt3drDq2aFL8kXGjsQ1ejaN9pBnYiEVkrRVjkVw6ZRVAUv3oDxGtvW7WimurURuorZp3JtZFVxiUqeR",
  "key40": "byWghqdyuTVi8VrNN3pqoX5PzboohFSCs2JKu6qXLAej4UaPdQcze7Z81JrWAYrf7b7W2xgpUKgKWFneLPzFELb",
  "key41": "5eR2TS1mbZHJXSNgVRNo7HNh2GnZnULCHTypW75mNyWfLy8BquuqBkywQidqxReJgyxEMFmHrZdx14AQRDv9roks",
  "key42": "2Vjx7BARWMxx4NNttaumZcQz3JbunyeVGYo4gtiEhgvPiRDHUzsASywyL1WdoMzBiqVL4pcJm4UjTszM9kHbQXPP",
  "key43": "5rmsmP9F8kHPBKxb2FW54Px2ZXmB9kbs4bAns286Cgdb8LBi18qiGLDUh8sihRe938MX4vupvzAmm5LgkH8wzvSi"
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
