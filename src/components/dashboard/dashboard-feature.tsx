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
    "YmtCxbTwnirw9PZriDe4on9vk4skZKcEGbpGv5DLFgtLAjPgfCVfraa6DjT6hjA8GY825JqakeYe8P4XSE6noh5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3WKczuyEx7RtDVedjaskLDK9diUaiRof118WppcjRJrDacyZRY1kEF3bHShLeJa5urSHYg5vD1dWrufzUgStC4Gy",
  "key1": "5F7e5d6WQsHzo6CTs5Z9mLdKqwBfewvRrHkpaWi2EVrRZnTYEjfPNHAnT2hhu76qkgeQEjx3gH43cXWzrKafWRrM",
  "key2": "51miG5CpZjgvy1VdhAGnissW6KtJxmjzPqyKwJKkECBPsVcMjcvGb7fzrrD9hUeAbbyhNfApNGtTzRbLqY8epqSM",
  "key3": "2QyR17GpvjhTQZRzAen18znRmpuMt7jP6o1KE9bnQoEwQoxs4vtormbwiFwTjeFGoF2eiZMeENYrgjn5qno5VBvp",
  "key4": "62PqPs5jMFNh9t3nsAJ2r2CQBZvjZx6QQ7LfZrkmYEK3xuztfUXcJiSLvT6DWvXv4KnzqomskqZ3jakDUoAmjhtR",
  "key5": "214qY4zjTxeZeMvMU9t69BzXLgfHBvjB9SgEQ2ajJZSnnvZEE3u1tSibEiHk5NiHpiX6LioKmNM5Gi7ZBMMYpihD",
  "key6": "4d4yKPDJuRDfhQW3GRUJBCSN2Amiyus4qFe29xsQdBrpao55BK1rhEcCyBM8o1d6rHz5qeepFH9JtHfdnMkdsh5S",
  "key7": "2G7NTfUE8EZaKuegMBb9pUjWQJpGR1Hzd8UpGJbmy3vJ6w62GUozm1t34JbSzdUzmm3p1VwqFfwjwLZie9sihAtL",
  "key8": "5QJLzusgTPT7BsG7ZJvdDoMiUaKAsM8QXXNNRfG8fUwzqj3AgYz5bosBVimnW61C4eUhUq7Mqz5oGaybmPk4jcDp",
  "key9": "JoTCo2ASTqAmVMWiL6rmJvUBeTi5ebcFbFWWojBnt3rvfGxbwrkmcosaKSjxhWywzDtzehFuPgdbvVkHoXNn595",
  "key10": "4obmL5wuvmwUdfx6mjGyKwXBDGH6VJahM4U4SkeQJSnEZsMMQkaQr4djXiYzeYFizZTMmwE23gLuYHx6Mq8SGccY",
  "key11": "4fkjEBCtQUYzrkBQNJrUCTUtgEw2SFa9GGsh19gb4faCo86VqJvjHwirvXa1KM4AJ4jjypy2caoDBc5sPsTgN9om",
  "key12": "3dTTq64fZGEiCHYjLp62HCSmPC6Ca1qXkstgFNZddGsnvtUGTFvG4QWMHxfVYD4DaZm716Y8FZE2X9CLUiuKzhEm",
  "key13": "4fHnkadzfFeagD69YF3qSmex4d1rCYp2NrSsCzCDqUCBmyLSWYgHk26nNyyoJ6iJaaj9vsENGVpwrjUBVrBbkua4",
  "key14": "2AzxhSB7uMu7U41WpJGLvubxZSnzUqH544t5uJRiREKbAZvPagSmqeq5Ts9M2QN4bPU1LuQUA2smj68xkqbV8GvR",
  "key15": "3AMy6NnTFx8MeTRUH5hUkWwEw8d9hD7v6wDKkmUCkn9Q7ZGQu7QfuKW5XLYxV5xcD2wfBoowNkk5pPRvtzXS8jZs",
  "key16": "MoNkUs176BiEfrFSTc7qvvepspkL7eXv5GiAj1fq1E3dDZ2HjyKBJn4sd5fY9BbBXVHZqCZeNzUodHWv2kAnJ8Q",
  "key17": "4ejYAHMFEqAZXTk2J76JmBR392Z9Y7Rnzg4uwi76LZVhvhbK2hofnPAEDFcsxZK35oQAUXNJraWAn72zrSrRNy9D",
  "key18": "5fjmCB4X7F6ntqboMzshSkScmqaYqEmMRwxHoKrq8R1JR7QbJA2HAWhfAdbSAWe9roLPBMmT5o4HwJ21ZGMFeHse",
  "key19": "2Kmmedc18XGRdwcsn3JNwMuhwSvUkeRBJtL5VxMUUvT64usvrFMhXJUcrJ6Eu1x3JUYKEzksmenpZKyBXg6Z29LP",
  "key20": "3ad62fK2wBXhQFs1oocGKUaP5CX7NBn7caUnuAfXUwGYcjqdyrCa38aEpdAJXpsbZx3Q3yPaxkvUxxPpAe97Si8J",
  "key21": "3BTZSsJGQgpua1rXXJde1VqfnUoV6ZgRHgYqrkJaXRLCzyi1izn1Lu9Fgnd55tSu3bukxa4QZw7DC2UuSSJMjzin",
  "key22": "3XD4buJvKWqx2NivRwsdvg9njNjGT3FsZ8TpqpDREMs6VRfSWvxGp3Cwh1dyGhfrCtirtJFNinc5NBpH6P18EnuE",
  "key23": "5xHwA96tFkmXuCmKs5b6pW4CtyAQsQxSPEpn1zbYW22uaQEArefC5tcY4B5Pvmbwq1gw4Y396K5EMUtizFp5aJMr",
  "key24": "5whi6b13uWxunbgppugQmURKnLixfjpryzmHZ3rwLABSjB5VdC28UBQJyo8juFyg44imN9Ubxvkp8StgcuYGxSgy",
  "key25": "2BUaLjqLChGaGB8s51a5sgji63FjKB82ZuiXUjVsMvUVT5vRVuL8kyWWo36SrTSo2tQUR7srwWp5MJ5Cg8ibxFZQ",
  "key26": "25tvf2Ymx3Wa3u7yonjXHRU5smRXVziuyv44LTRuxQkYRXouQvtUrFTYmkP9Ae2K7F2o2Jzz2uSVD9WzWXir9bsp",
  "key27": "4bJmRsM5yv4tAaVrLJKgTg8vQEMLgnEVAs4osqhsNnPgZNK1DMpg94t1FkDUqBtScNQg32UUQyTJkKYsTcoRgdiD",
  "key28": "e4HAk3n1rnNKdcHBhc4GkB8bh87y4oGfeJFB1mjwNaTD9EodwihFxVRj6bPyBFoSo1pi8tD1y2hab6cbRDhvxaU",
  "key29": "2TrhPpqukyJUcpxm4jRMEGgUuwvyqYwNP4qdZZAxyTYofaK2ndUq2gM1YW4mCGLG5Vz5zgSrJHR36rZuJzjfzc9G",
  "key30": "63CTkvq1oJmBEHqE5cnAC9qZdcneQqmm8WSumqSfQZkrHDt1Px3bJpook3HujyMuMw32inMVqP8FkmwLwtRGs9ap",
  "key31": "5ksdch49FQ4XVrMXDQhqzCFfs6bvYChr3CNHwRfHoj5yu9NuzQfKQTpcf1yaLe5n1EuETDoNgUEaLoxmqCNJPm6L",
  "key32": "5PVgvhDPdWYMG49YK2zcKtcna7TEEVqnUqRZ9t2oAPv7dHViPM5Y7RPneqWH1m7jN5mGDq2esMMyWxpS2DYR6hqd"
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
