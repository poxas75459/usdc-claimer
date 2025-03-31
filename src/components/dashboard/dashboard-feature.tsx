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
    "GkAXP3NBobJ1F4Hfusu8cUivSYdNxNgJ9oT8p38ZDL4w48n3a6wN2MDSyRzKw3J4dS56XZ7FAZoyecrJ7SL9JYw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4sq2BHdRwGcWPeY7kP4JSmp6QY9CXzFBJAFqA5VeLDMn62sMEoySAGTFom8vuxq5jgJUe9MRffZCPTYfsFJCerMW",
  "key1": "5q6ADzSt7gYay14Naqx7G15j79RM7F6j9Kh59DT7Y5P53UJCxXF7rSyAF8GdN9KsqcShYh13LwAa4B6CcN3f9iY6",
  "key2": "5Hi6Z5vsHXAoFBnKXoamwq6criQmv7pPiRFSE2ziZU891673ouzgkgABatUzaUoqmwdZ2FKkMrA2EUdGxFMMwiyE",
  "key3": "Kc1oSUDcumcmiPZS3P3ZajN4Ke8ZjY8rsJmeoH2rqN2n8EVRWAnwroc3VBsRE3TFmaHxZymFWe7KUmCoWcUvbf1",
  "key4": "4oMfbqPY9Ntd9cbYTPfY4LJAJZ7WStp1ZYSMWWoQasATY6JS8E4QoCqUCTKLbemK3LcD4nfBTZpp2SKenHUFvib6",
  "key5": "2wLR8ETWi7TsaLRYeGQESQPh1ryrJxtVqYZdVB74mVPhCtSqbWNGQXxgYEGEtNiL6KJz3Cmj3jHj6F3kkghu7H1M",
  "key6": "4qLQpRBpc27y3jFWbhQgvnQ4FM4svX7N6WmUXjaGGuYyDzhQj1imdXioFChgziFCDiyjVJLoxYLEve9uUgXyzpkY",
  "key7": "66ymL9eyMZQPYCjY8gFyCwMG8y1vZFhNqdPBNhuU62uqXXdr1TKCqSdCUUpwJMTjmnULtMr8HUFcwgZiwDcCyioZ",
  "key8": "zkdaaiNfUD2eVXA7SeUjgbSzrYu25JCFcmLD7jxpkDwyfaag5GaA41gmdWJYjBSFyWQgfAPSdnmtPgFeCQGPRUY",
  "key9": "EioxrcwJPKxBxpCjZ5DWQkQia8VSM52RrqnBAqqKUKocrTWotUq7DzAwZ8Uhtg7xB5GuEb9Y5P7owt4BTAGj3iT",
  "key10": "3NF3kvZbY5D713wMQuTTPWY6UqU6Pd12wYNgEfsEa3JQhVRcWTJ2z1KJomNis7MbwBLdavgjEfpcqT3srmjKJULZ",
  "key11": "4LHLnNkXkYQMVjD7Srbtg5hTGN6FZ8siKAnpnNY1AfwxNmN8zPWiV4wBQiuuTUncU8Cud8t1P9h5oZKwJTHLQiJ",
  "key12": "58uUDFbBUQMHbZ6diZ6XXisQLpNzki5iCQFr6wYknU4kNVbycXewtpfAV8cqbNE8HYsou8e7yK6NQuH7M9QpzZR5",
  "key13": "4txsp9A5cCcZkGm15YaVniZKWbXx6AKhiskhS6R4xW5PXf3SQvj3n1xSsGdCsMDyojLMcZUAqrsaipTXiY4Ng4yo",
  "key14": "DTkX8ADJ3e9L59Fc52h16jYahigk8jWuAwQPEjTApLZae6Xztc8Xwc99FNfGxFyXSMVqvYbRsCNdZJ2mzkWwcYM",
  "key15": "66dy2RePEXNQkwjuZGktC8HmYsax218jeaxQ4q13uJ8EXPXwuNKS1WppDHtYYkHQWaafZeh7tBwaBqKubXv6ufZz",
  "key16": "5itWWLcHYN1FueMstjh3TcPJ5DqkqsdHBcKJf9ByriEHriTPGWwAAJ2rsSKv8RmxFgbMDSbrWeUcTLXLzYNZ8K8d",
  "key17": "5fhLAYabca6KRfSMBYPCK5q5mT6CRRvrJwqsLYi7mDykpwZQjuBUr2YfTwvu1ic7MMMJoSK8ve4FjMrYK8gvqaSq",
  "key18": "3Ujty1BgJ8MsnbwDxwZhfGJSvEfkf8kwd8QLzmjbR3sriKzP89hjUbvm7dmHYrM7W7jnRd7BaGxL77JLCUGFUEfv",
  "key19": "5LbS3SfZfDFB7JsG8DtG29vMdZL6h4T7fP6oGSuoCdCLWy3msstmnReGLvP283tWjvXATtjLfVZ3vHWbdcsc6Rxt",
  "key20": "ZujoihFmsrR7Qpi341AQ5uWu73wuvaTixcnZFN1W8Xr6SQ1e9spd6gWheL3abX8qptLP4ehPvfTkUcvz1z5VbZN",
  "key21": "41iaNeQPEZC4kLvPr5zNbKfrtukmxPNcCPKY87bUtX6CqwAMd4w6WV6N27gq4Es94NBxkRz12bxCJRn6DLL6o5hT",
  "key22": "2nh6y7BwkQ6JgsyjUNq2aZNvWqyCUtkjzpVQkBfjYn9EzaXxQUnLHABhyvmX19JP5tCdoHMw5FhFpxXF6Tmc3bEc",
  "key23": "23UxguadLXA7a3xCHZUA2dyRYz1UTWLoQBN2ZF1XVCXgN5MdJ1rW2aSTWsCZkxmJqbSdN9PAsCCRUYMdS2EYUwMF",
  "key24": "2DdP3xSXiNsiYeJVtAXsTRPKM17CkNKLfvR7NXftPqUyoBhJEASbDtBsfYqFfNLeiQvihaVZme95ZmhJgFug6E7C",
  "key25": "41VcvEv93HJpodgK8NTRnasEjammT4ZyXAQh8K8D4jYQLVD8otkXwSrUiEQK5zBpy4byhzNhp4JPd9ewwYqpowCb",
  "key26": "28pyHPik7nzP4rXJuBM5GeSuUXM1q73QNswavr2snz918Bf3KARYKwbWCi6hMNAsgVhQuFLBMsi3sm9GfP3anN1Y",
  "key27": "2aYfUp53QGGwNSXCAESRUm8CfY3rVeMURE8X4DnPZNbAbS6g67n6JRhJEbkdUTRAdyU9aURrBhXa1Z9QFPw65T5M",
  "key28": "26jKoNjs8eww2cxU7REWoAtqBNyVXyRCPs4Y948JjMDVyZfN2empduCdzkedL7ihXBVa3iacxsyDmeokjV4JpQt3",
  "key29": "5YzCdnbDCkxd8JcEFFPffqbgTkaEHiRHCFGtnk9dkiddREsgpRmaBt2qehs6XDjDrJMoRv4V1hPYYqqt3QLM4vaD",
  "key30": "5kVxu9KXjNxPnLKD6KhjWXwSDNPcAYv9NYe5DNVMygQ1nR6dEcFWbEZRXS4zbssW36yd4nXTzTAP4j1wPBzoZ7gS",
  "key31": "3MUMNZrbFfZvjUsVrAbzQFL8ZzeNiVTaEbtNEosyaNP61Bt6Rt9HqPESEjVSTSErDcExnx9CLDBFLPfG9zTEZHSv",
  "key32": "3BqpRGwfKZ4d1tPJq5YwUXJZH6MNVsUyUKF9Q1degbaybuMEbCar1UV4Ag4CpYFunNEU36S8gpSeHdtS7yEA3fUE",
  "key33": "26RRypjNrHXTd6dNHq254NkeAHHgJjNbFieLkyZwaXKHTg5whippT7jGQw6cuGotWQY6Vzmkpe5QoayFT3YjW31h",
  "key34": "a5vw1jgihh8D37AH6m1dRYHTVv3pnECsnVfDCxQ6FDitc3KhDyi3mYGZ2CH88X3YE3H6fzXd8TDh5X66zSREVx3",
  "key35": "2KyEBCv3SFWmKZ6gq3g7yqWrHF3nitKJbi2XFYVZtpQN9V8e6i3iN8mKqCN8kJdyeEU54jHKtVyaE1z8UqWN8Ei8",
  "key36": "5wKAyKDHzVpBgwyxK9Fn1t8RwApPqjsSzZMrjm5Sy9NqTEmSWDPe9pUziTjwos1VZX8YPTQxtUvDqCgFGAWcwEgR"
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
