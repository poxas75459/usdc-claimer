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
    "2XpQqxbHZBEeyLpMKiBSqDizVSm1AuBG8sQoo2iZvPKc5DfeKD8UEiBKp2Bcgq6fEUZUTMxuzButdNceoZANJAU9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4uwJK8uRkdHwK8hkT7oHR2zTukY77dvAucbdVSXCcojSWfPXfMCCsinE4JyngAry26U7KaXbDmReoNCEnALjJ2DQ",
  "key1": "2b1jHC5A2cwWQQ3YdA7eWqFATMNUuTM9SdXsNLuikyhfutXcz4qgNZhv2SHDesxoocbbDQBBxov7XU6S6sE4DsDn",
  "key2": "5uz99V43xMpYNXBeQq8RnZptvRP9yFGzXks1CHQMrUU6a9zXzobpDUn2Jqdvxm3PRQQoovnBFjSvdRKAwvkUiEGk",
  "key3": "41ETNN8vQgme2J4PBLFEw9nZvkebTKLUYuetsiy3iue6mrDHf5wS2UMWJTLEgqg3hZgJqLmHewdBdHeGf6mvi6LR",
  "key4": "4rfcF42aBgNATK4jALpzn15kjwJMZrGQB2E7q2es5B5gw8vdnVkhbcpHkQtQ3cEynkr7RXifmUoGC6XgX9u1A1nE",
  "key5": "2QsQfBLzhopytLBgMp9UPuB61d2LxyEo5hEKz14z85eU1pozEyHCPj3kiCvntYVd9XfVYGNCHAvf3wkUY8eUxMn",
  "key6": "4y3GF3hYfFZKTWfri72c29LNwmbssYQzAkova95BFkyAW5oBTS96gotDQ6XN6wRSnbfd1LiJhYJbnbQnd1iQYbve",
  "key7": "3PdoDPY7hkZuL3cxnJ6WALuUQnQDsgeKA8u4pr5XfMxDDWHShq9DKSCQoTyFappvVXcj4LWmeLvP3SG2D9wY3Pa4",
  "key8": "2V4Sr6PZNq69SMmRoXRvMwdV9BR7hS3GQBbVeFwJksKKSdkcjmkSBqmVKapm2SCrHh1QJsP6FnbdAxxmhA6L7VTy",
  "key9": "3R3V4quGGFrFCKTvApgojZxWsEbjy3jr8B8W3ux82p4NbGzRe8g4GLmQoTJ5HsMEApFSjVDCSWZkUWQ3YdFhAQ6g",
  "key10": "2zCMcgN2ppoPbfdFbk8jpvvQfwQQJgDwmP8WwHxyhFH2m1C7ZJjWQRMaREGeFsQQy2D4Bgc4HtuPeKVrJGz1MtMa",
  "key11": "26VGpUm7Uid9qb9ohRYexXR9oxG6pspdZjXWjFY6JqFupastd1TWFrk4Rmy691i2LRtCZfnLn4c2zUUtxeNbEKAq",
  "key12": "rXAeC4GqXCzG5NjmM9D7EVv5b6PhEVkqUzh28rrcaWCJJRZyQb25BKzvxCrd3vyHYNxsADvQdPrM9iTznLUfHnV",
  "key13": "2msokY4G8wghd8sKdzAyVsPdW5WPpdCtrJVv4ouvcpZKcQ8fXChec7aVg4jECbouSvLq3X4XrySwTV7zNSJEVxWj",
  "key14": "4GYMdLTLzQDuDfN1HYi8eoitiW8Uc6wJmsj9DnWVTTd2n7iLof2xkcLmZvjUd1AyexyLnMCoLMCMXx1ka8ifTUhF",
  "key15": "4TJcowbgBuaUcEDEvQbm8Q6WLLb7jFrjmCAYNByUxSd7Mb7rY1hRFC2scvEWriD528DfPxnRSJhqH1NVHhSepcC4",
  "key16": "2gM7sZYyCXvCTJHjy8FCTsdQinbkh9rhfKt5JbcLp8iiMqjZpYiBGYdVon3dQP5SYFjVz5QpwCTgZUmKfZi2ypV3",
  "key17": "2UnXYiy2rz6d3oBuixykyaAjbXVrsFDFZag1ML2z52bCztcoUWpCix41x99sPt9SLzLYzGMKgv8ywfXioZUP8h6j",
  "key18": "2cPBH3oyVBTCE37m6ARdRT6vDhMdQErjW8T6rbbyndMGHJzhNJFNfQ3mcbzqR84Ak7njbYzNePWCKjDDqHdLYtxv",
  "key19": "51CM1yHLWLfzpmY5of1RJEfNfFRjZjz3UNdNmUHutBWYwwXyn4QdfGDMD2syNWXRU5kTd6RWhVYBGZp2UAHwbB2t",
  "key20": "5d3sngAd2Y1b9rYiBAyt9uLGsftfy3hd9ob4YoneCRqQ62uLwFyB5moZB7GaoJfDRuhh25AGYPHzBZNeUtRfJ5Nk",
  "key21": "2P1QqbSyzQFp5eZDuSQxTafXCh1RcHx56wU9KxQCJgkFF1UrSQamvpRyVff52xuSXkUpBt5dzpo4frBqVzEakxtf",
  "key22": "4kiviKv1BShcZRAdxY8jLhTr55kQ2jHcBifCsa86CqFrvFciWcE8Wz4sDESYzqtX9YPUX5NJSvvrkePs3EvCKysj",
  "key23": "651LkzFZYQ26y7FkA9eE6JNj4GxFbk8KGsbWvBmE3gKuTrre75hLEfALzmUchj6S6b3xqYPtX6rLV4xBsmuiHGfk",
  "key24": "3XYvUuVneUa7dANoNpQbXuMDmuVRuhv4Ac1K8jUeVMe59UmDzdLbZQuGoQ4nvn9dBbW8jsLGdHfx1Y4QPRvQvehL",
  "key25": "5Dp6jSykp8RTa5vy5tBjEdjvfewijNAqkhsf3ec9vZDdKwJtwAbhXLk7VUbJkSpNT53TVioLH8pWgUak8g9WjboQ",
  "key26": "3xmxALzwC71XNiLg8w72H2dsfyGwGRv1w5WRVwcgf8NBZH8DpFCazAc5cXg3QGZwTpdfT86EE13XAJys6qeE74rc",
  "key27": "2cPfpEDwbK1XyZa1b5q4LNcN56RV92wmvNdvbqgzQGc4U23v8pKG2cEPr7VZK3ase4rdRN5h54ynJQ7kkzo3A1Ap",
  "key28": "tczezbk3HKrbrMqYoumwdfDQSWmqABR1Cgo1RbRw5gsTzXQsJZ4CV5S4weZ9Emj3cuK1wxuAVJV3QsfUg3j2VLn",
  "key29": "2zQmbMwTCAQYbTmTXQzeYedsEGJPA75EiQEDz8WRptnGHg5RDQWzZMxxsxUA3T2a3NqXExq26CknstRnoFApMMwV",
  "key30": "28bK3PaqjjTjXAtRJj1Wfvw49VZP6pWvNYtPkEUHuiJAtWctQdKJBCBnpkUfyVvpP9DjdQpopJVaPv1ENRC9NPCL",
  "key31": "2jN2jB2NQwRjvvCn7WNKHoQcUAJ79SteJEEfWmdFsRMEhYdtrAy4GjxNunADNwFqnhCniucZy1x9Mbzoaez9cdhW",
  "key32": "24bJ7JLxaWLGRLX5xqqK2eNTaWuqo7PjpSEEzAiUD55jopRpQfHJAfkoiF5t3AHdmDKurdwvocnyoV3FViWHwR5u",
  "key33": "5m6QmHpTnmsyQFaSMWkazeKJCDo7FzJoG1R7oqCpXSCV2u7RVKZFyBhuMYEDen3MCSAnFGTxf2ufH8gkdYcuFvNc",
  "key34": "41FLWmtD3EUdNcFVXntYtZrMEEuD1j1fytE6mfTxK4T38AJtNGLKhdu79xveRfR78MokRzS5kk8t5Bfhbkbbmw39",
  "key35": "3XJSekbPpoaZckPHJq3rB5x3xesCx38xyGrEXf7QNE97B4ovM7CTJhXUMd3b1dnthHRKsugKz6DJUgNqh56jiH4p",
  "key36": "2EGBSFe7aByNpuCHMmdSx3EXJ5mGGzCM4dmfMXV8WLqzZLSrxPPD6rj1T62Yc6cLhhVhuMPLdPPAxNvJU5zkabVZ",
  "key37": "5jrAUbRyEgFXA4JDvwYkrZfBWfkR3m4m1997hiZsdv3S3BunfmWzWWP9fUiqbRWER8QJ59aPBpCcdgs9LHpAp1Wd",
  "key38": "UH2vxXGoCC7LHogiWrFxrXrwM87boYy5yKr5Lb4HX91bejUZpLvK5t2Trh5ajGYJMMHTdRT5KvSZGBc7mtdeiVS",
  "key39": "57jgJqrkVkjyrENgo2zLrBNbEgeC4ATnSbJPRi29rFkkCrycfiw4wBB64NSDAun9TuBu9oR49ZMxG6sfKcV3S3Jm",
  "key40": "5m3jSBvDv2ePpR1K2UZfgEowqSCRJKSd8rWfLNytfGEG6aXhKVvbxhMuuCT5PFVgXdSE9KchUd837M2gAf44LsJ1",
  "key41": "3wm17Ygh11SN3BnP6UN7azgGcB7424taj6xpEzqitzdK9KnjtsxBbngjVZgor56bH7Ef7hzGKJh3PZxi7XvUVWEK"
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
