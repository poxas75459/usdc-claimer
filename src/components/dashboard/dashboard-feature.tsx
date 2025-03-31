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
    "26Jc5hACLRqszjethiijqBN9DK35X8DQYMfMvyAc96kBGAxQiQ9C1ojffCA4byDGUG25kVtcEPVcq18NZoMPiwRz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9XcmfFP6bWakoJTe9d2Y8BEmETvMk4s6bkYEXzEQBzuzACes5ryNNQGpqRRvtQrDnpXZqMnYDvzmXrEcHJ462QG",
  "key1": "3iNmbvFRA5reffdDDAvyUTB5uyTpNbKVYFLT8oQVLEJgweTnmacMd4Q8p4gjiQ9yjD9nF6P2vafG8KvLZXX1X67J",
  "key2": "2cPbuKrtPXkuD8gWSrDu9rUrZJtMan44on4ZVVzDSyoyRt9aJGxwjmDCvDRZDiwS23HHQLrkdTceSDt5ERbQdvwk",
  "key3": "4ZANgzJciM8Zg7jReHKj867AEnnVhzMsEjmxXSgcezcca69Yr2N1GKBUYgwTc5h6rSQakuG8HFn1hLpEZeboM8Ej",
  "key4": "4zLBqazZhWK6o5EWk7JrCfLdc34piSqVFzRzZ9x3udw7JNnRBeKRGHKFdg3s2UNhKwUUtaZGF8tgL2bomZc74t92",
  "key5": "2yYEbUbpFHpHsh5pZFdKSzf1gQLiFviYqfYa3mBoPJ9arhDFho1ouoKq372Xi9e3p6aqrtd9rZ2sXBVxG7zcGZRP",
  "key6": "4dtuHPjDkVbMUuTZukSX73xpCfTrrJrzWSpWLoJ962MvyFx4ujS5KqBCekYjEZFLM6UVz9C1j1mt2PHcFkKCHCPc",
  "key7": "ua3ZGTmGT487JPgyFPfheVBnGpMJFqAKsQxw36Pm5JoWYzDxCiBvH194EbLqx8khJd9dFFwpWCePpRHTjj8jnU7",
  "key8": "57KvNbv9iNnoMD6iEZjMyGrdBBnjhx3bKsYwHFmHD6sKWiFquNx2DGEEca6xcHuCV8Cbr9X9K9bovkuxPDzd1gL6",
  "key9": "SQChf9a5w6uD4N3KCjN6R46C2RALgbQjcpxBX9taZy9fpe3HDEKsim87R6Njhpf36VHqVCPokhZDMzpCY9TLaEL",
  "key10": "4a6XPBqpnAhhwAaHLmRq4nTqJT96Res3SAzAVnRt1S8jkpKPdFuTUYUwYk17ch4w75yunxXZipb3BFVfsepu6HpE",
  "key11": "tVoh7iqokv59zwc8jSycm2BizZpRNyrfkACi9uPnciogihTzGBpCk5LpwYSXSrQT6t1r9MG8qQunDpzzKqULqhG",
  "key12": "39LQfR3XndXdBMLziT2spzoR7HEGK1DLoBVmKgVQRj2dsBA969HzeEfvrFYwf2fimM8d8WfjixeYuQw4PwqMszGu",
  "key13": "LREjfqVRB9ef1DQG67sjm4vYxGjJANSYUJZRogH958mANDx8auaHMJnWM2vfALd8hEFt3PGXqPBiRGTDNRJAPqh",
  "key14": "3gaJDiT4MQrA7JSEbBCXTHSb8Ra4UZ57Hu9qwCzMuCYVhWp5EwV96KCvMasNpfPBjKXetYWESTyKgD5hvzcqpZm9",
  "key15": "4Lx6ysqmdYSLXRoUEj8jYT8LNp7gjgtociyFSKJ3Tki4XqjvCRJWGtvBWuuR831LiKXubCUmcrJLW8Sheeg9sGhM",
  "key16": "5pzRW1FTZoYN4S6JpsojtejRLWfKsTiyumjAoMZy9x8iKnNNf44UKXsXzHdny3knMNSAfpwLmmW8QJSXGXZhA9Xe",
  "key17": "64hRJsSCm1xdgVG3nPnVWhMgyc2zaZQbg2X2j9vz1bHUR2FLv2Ut22AFWvoovsQovsKnwvcDuXbakvGdDqwADYuA",
  "key18": "4e4fe2XvKrWUapNgQmJMoetRePhssSYLm4Y9nnFJGhEx6KDzXSz16FUgoYqYagRPQGiW7xEbFWXGgj5mV8TShhh",
  "key19": "5znJVqHyibEYSQj12HWac3kLaQ4dnECBaknK1dSLuEVFoDe74Wo25zLkzbsU8Q1M9Y9EhtEoe1rmktZZH3Vz3931",
  "key20": "2NN768ETw7mZQmec4Sk6c4LsvKySwvVSqnJZW2J9NUeL1qmCAnxVn2HJPsVMP2nxoKoRz6zSWLCrtszKicU9EsJp",
  "key21": "5qghXPGmqeMcuPhMMbvodomwi9YyB595jdfMJVQSdyj92wjNe2Fi85Uc7zXV7rVQis86oXNHXp6yhmhHQ46mSAnA",
  "key22": "5bibtvdBvv1aQUudj6aqmX84bmWyV6eVzzncvHBduSMMgJ1qo1LqorAgUc28vWHTk468HJQVK86KMR4S7Hhg3793",
  "key23": "qHWq1wC7suyTyZYT5byU5WXXmVFVq6mFcrFK1m3D4hPQ5dnAdKe8gcDKm4H92MuGzypa4ezKbQbVy4VNjb61jvY",
  "key24": "4LmDGx3ZECzLGgfYPioxUKd6UAViC1KxX7YdMnJVht3bUFt3X8juomq6bUtvfwwziQF4qoS5DU1TtAUWTrZQw28t",
  "key25": "3HanvYkhbj6mfNYx9SSDwvXTACoJjZdRYv5WpBgMxSdyqHdNCZrpTeAYvbuVq9GXwMx3PY4BTEzDz2QroMDFHBs8",
  "key26": "5mTCYE7kfdKTev2Yj2mpdiS3KwQeSubF91oz6tWk9pZ5WVW8scCSABPQsb8FhquR8ktr6WTHs9G2h8Sw44nTPth2",
  "key27": "5f8AaBwJHmuHmPWcez2WcL45U4RbYR3E7s4BWdAaDQa9pSeVqCDfpyQBBsQD5hqBPAca9vDHWT954K8jUJMKbXcw",
  "key28": "61fRPtqWdpXS7SAVxcpUqaQs9er8tXBUZqU3Tk6TC8ceh8wah4pMcm2wKVo5qTKFtbehr2ZREUG53nm6EhmShG9T",
  "key29": "49MiAwsjRo9RB9HFGkCK2XhkRzXeKNCA6rhPF6yQvN51v6SQ8PSz5inPQBNXDrb9WeWop5EK2JQaDqT1WsWyW39K",
  "key30": "5JV3ZPE8muGMzLcEVjztAJutmEvvq9QCsBdbSu6s3FfWZNQMsSBu89wEDcmbBW4HC1apMJnLVA1fL8JAcd6Gsc87",
  "key31": "2TKG9p3dfbKp1B99vZdK8SkNzTvhVePRHLRgm6vrc8Y1yzKzUVT9iQWZkDHBrEWuvE6wLikChqDENcnUCHAC7cJa",
  "key32": "2FiTePsU4nFMmdXtNajpQocBwGiv9uEVWJJq7abZPcVumUsBtHi4Eeu7wpL8PWrJBnxuUnj3JTDfWGrDdR4ZQmzN",
  "key33": "5G7JuL8xkQJ8jbnGndrGZCuScwUQX3bk5YbzBS4NUR9oJx9yz5C9SZfXKfLLxchxnCZiJv8M7tE5wrq7QJAkpK1x",
  "key34": "3sR2iL1MftA7DK7C9UHvT8mw83FH58Bcpc4HX6QHfXv57bzD2GC41ttW5oX9gaT7LRsXuNYhjUAGiWrjkCAjyYtH",
  "key35": "2srG1FUyzEgCZMRXyV6yspNnkrxuvQMFCeiqqya3EX64zD2xGXv7vCsgG1u1NHCYaprNUdnTXeJijaatFq4smZb6",
  "key36": "3QRmaMUtrzSuQh5ra5U5ACRfii9A4VGtTdZG6zrjgHmuZtLYRoqhTQkLAKACrtRRWPLvrEQ2sawLyrQwcstJdZQ3",
  "key37": "2SMopL366tjqunrmmv8Xbj3sqMQ1rFjc8sGmLAcCcrU6qNVTyTG1y9fqZLfUGTbrWEfwSTpepZtisQpC8KykjUww",
  "key38": "4zjZ7JzUqmCPK5nA4e63indWSEDZoMZyjwV93P61GUuMyES4uzhyo3KqHQdBE9bbALw5z226AJ54s5GTAyQ8RDBw",
  "key39": "4pCTa79JZbD5uZ73Xfe2ivUHWrBtEyUmTcSBwkDiVEfcgiMQihLHFFcLcyWL6bCrTVYjbtQy4W9i9kAt3b2zj8fi",
  "key40": "5MEKVwzrJsSedHrt2Zakvg6WNQovp5kp4USZEJbkbfAEokuh8oNCcYEwL1wFHeQsoETv2fjp65KFMciyfC5wmRPU",
  "key41": "2dmPAzdcGeFeZXi5pdrN5mTQbxT8TZzfQq7Byksse5ATBEWqdXTznyjauqWCqTiKFsDMA36wUggxuXuhvYX7LDF1",
  "key42": "2siUBVGvFSquRFEx8VwBhUXg1FXuwPEozYdjnH3BcLWhWEa99i8kvBsFtUoZXTYwFggcrKzgFj41sQxHbdJ4AqgP",
  "key43": "5L3YBXEjuxZ4UzGaH1EoXtnaUbKRSvLkLQW1ckxgo6QFaBEe9WC61jQ98QLZvz66AsrXcE7EVTQz5UwignEsEPmG",
  "key44": "4Ppd7MQ7CM3usjPakACJykAQc3bLEsg841XYRUYiAsbWsprGkc9CLTsbyQ8di6VZRYZ1tMTQDD2HBYKcK4qRDjxK",
  "key45": "5HdZYEYSUazM73fCPveEKpkzLZFMHafn3Gv6e6gQ3wUvKSZBU4fi2VYoasHksvhMvVcZHyPqmgWBy2nd8mhH7aqF",
  "key46": "thC8pqinoofU8v7Ck9DEv8UYocS1rBd2kGjsNUeW75asEZKPRPq6CeSu5hEeUfDqn3pkF8t1urZXQ7LkJL5eGei",
  "key47": "3swSbAtTFb9mUvQ2pAfCyrQdjGZKxfxVyx89uwXC9NyJM2PAQCg4Pu8m3MTo794PJbC6bTokNprq7rTqkXRyfZxx",
  "key48": "28HcjAT54eJNqdZnrjQkjsHU7aWxA1vRBBjHRogtpqB6pLxupc5SjpaapGLnS8drhaojwYXwjdGuGGJWV72mXPLZ"
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
