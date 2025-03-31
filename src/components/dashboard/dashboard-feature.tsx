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
    "ZsgnbMSoLsHnWdQ9Gbc6yQ1egyAJ4AfoMaRwGmRYq2YHZ8QhxUiofgcsYXGNuMjCHEA9Ya7nT7fBWxeQKmQ5BeN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5inoPa4MTieECWSjtCGguciakxqRwcPczRzb3y69hgao6FWciQMThpZcNZYqVQ4GZsUPQfUhApaYLYYoRSFLP9BP",
  "key1": "46DpHDJr5MUA7sS8RXwUZnTk3nFkT5g21RXHEqv84vvVFftMRVnDwBt6dUsNCB7CgFdtksPqiR4qNEVvaCaRCsbp",
  "key2": "3QEUtQzmReN4y3bhVVETQeEXmFBT7hssLmMK1br11L4VbYfkwUnHohfh9gFqr4HmXWEUc1cX42sZLKPUW16yhZag",
  "key3": "5oFMnZR8uCG9NDAumAbZaj7iUu2fx4TiMXtWD6LDUmSKRdVX1Kke6R3Zi7aze1sJxfCWdYpX19SbqMSUHKpkZ8rj",
  "key4": "HEqLgTn5WahGbr1ey5k57C4ebzHHY1WTasrBVXtWwXPoUKu83yLrS13iywbAGtH92xHLWYYgoxpR7cyHf5jKEzq",
  "key5": "3qJVFVi3Js3cefSNXssHFFjeCAjb5y44YvkGXrdcTmzpBm7iaeK1fn8n5LT1BxShmXks414wjjYjFkYayWXsoTNB",
  "key6": "4kgRzPRTTQdTJ4HqJfmEeBK18eJr6K41UKd5ZW1WvRndShpDPGnsqx7iJm8PbZVYe1arK5fDZGDNLTRkmjhEC5sj",
  "key7": "5TS9WigZAJRvnrRURxzPbrQmLdYK8CCWgX99Mw76hmcx82TqZQ2ou1UCDSSm7xySY7eTcrjxiAigLksu5Uu5yJiZ",
  "key8": "4siT7EnmFQA7cM7dvBvornqcniWUYsnbhihLcK2E1WEcxGopMSkya5nM24nhYVLciF7pZX2ggWscsph5DsKyTBRp",
  "key9": "4BfnLrgbtf6b8hqedBTj76LW4UHr4wpAWagAGiULBXAALPztYUY5LZtxPCdW58xo9pfzdXqcDrnqLbBcu8SjdD89",
  "key10": "2pQWR4xbZ6M5mhBrnUZ6GFmgpTRabqo9bo5TAUmzqxiFo3FNR5FKwszJ47s24zVdg5VZZKRDSHPsxbuzgQF4n54E",
  "key11": "45u7BPj9QFg3NzwyA1XSYJJ1Q2fvRxHC88RDm79Vwhj5gSYnmN5edX9p6x34VdHRZdsM6E2tSAN16XCTESm5MRpT",
  "key12": "65m9yKgkLPZ1hhofQT8A1SSBE4jf3ZEBGTBEJzz3HNtJj7rtyFuFepKWZWLv9m1zu8yiqX62eoxngDnxRKG1SSMm",
  "key13": "63DzyFFemERSHU7WZ5reuSCRyTDiuWkGfejGnVQAo5VeKWK3esJBZhvGpj6sdDNM3arAxUGvhrKjospvovcsRuYd",
  "key14": "3rPRXGMrhua1QpTCyJxT5AYGUX63WnFkzQ9dEsMVYPH22kBmgZXjSc4z3cbr1YtAYa9NAMviELxAELzZUUxFhX5z",
  "key15": "4cSRVzeBSkPyntzYhouJW5NeJu6hdcm4GVeYr94DNfC3pVdpPsfGNCMvhuGb8eWmGhVjhShmRPYCEFA9U8KnQHcy",
  "key16": "3jkdaDkw2NrvhTXvLN82kLtAfp4t2YfZLf5mQiP5WaBWqGiwQwgWVsxoi4ewdnGjqByLHtdZPC7oRHtukhB253XZ",
  "key17": "3X6iLnnbus5xxEJJJhJxH3icFw7ysHQ4oqzNkY6aKxadsz953c3SpctxGe2ekNwZeZdEGRJbe6zR3FosYiq13F2m",
  "key18": "xmGQLnXPh1TwBNUfwwsmiCUew4hvtxeANXVT49nEpF1vmgwCysd46RJCpPFX5bW8PvGxj72W4MNXGeLiKxJw7p3",
  "key19": "53H3x6Lev1Q9MCZARXJh2jeeTfKXq7sfwgvDdWb4zmXtKq7mj93BVU7fRiFBJnLqhgJ99BCZbMNXApc22ZUWFYxR",
  "key20": "47KAuC64N9GnpEnDAYTsi8WsaQrcokfL4zYGeb638uShoUDWXZEkaDVfhXjvmoikwHChkPUV6d9fRAZiV1yVjYiR",
  "key21": "4aHXax2aawzBv1f7t1aajLZR8dNGpFeACtt9YTDFTDXQGupbfTZQnEcbWJ2BX1LKqpJqgd8doC7c7WHZ8XnB63FG",
  "key22": "5EW2MWFnkB9b3bJzqtjU7FMLTGjh9toweNVjpHc5gEmse5f6JD7Pm5BkeM8m9Hahj4DQN6v7uUpSQyyt4Jzvj24Z",
  "key23": "iuq5yigusLTdMDBTQMT4jqxNTjEAiPuhLCChGnJLjV1e8ZBx6ZHHLwnCzUh5W1YjrbbG88KgLiAacxtPunnhrTU",
  "key24": "4xSHvEGxhTVrMkRFkoDdLWqwLc3ni4UVM6azMPD7dvx3bRZvzZJdVA9KPdsz6yfCW7p7jwsGKiLq5GFcqbVyzQmB",
  "key25": "23Q93jrhTASkM87psYXjzxJgLdNdicyGkiTYv8dUCdSi2UwHzWT7AhdMJRj6pNtUqHupybptnRkdyqB2EoLgsWsR",
  "key26": "5fZ5efMrMG7BMHifXK2yr6uJdRydGXebpEixWXFvtQQ7CfiMSwr7s239G3cPgTzs3C6CBfdVxJcb8YXbgDkg7ryW",
  "key27": "5nU7u2jho27hdVbj7dRocnM96uaB8ERt3vbTAQMieyJZo2aCnapVPzoBftTeEhgD3NzhUBwwCKA5jniQeFBmXxp6",
  "key28": "25tyxbNM5ypC6fGYx7bpdXqyQ7tFhLCqc97ED8ZSV11BdrCJhEoRoyR7akghbuQtQHNJ3kcrC8oUL5xdNgrjAJYH",
  "key29": "5KiZmLAiAArun6ztLsPajFK1GeQhbhBPujd7BrdFHnvgJsJAXtcPHEm31XFeVjw2zcC6DqdB8RPxucQcPxsB3tn3",
  "key30": "5ZfJJSSWw8mwTvC4kmL56ZFhFHUDqD1WJk1HJQZjkznW5iU544jHNr9CbFWvYYDiTs5xrgKdS9sT1frr82wmPwY7",
  "key31": "5FpwTzBZtwdYbXPyF1o1FW9naT9Sm7uD15wD5qVEaqs6NgNhjXbphzQnQcoyt58Z3sUiZBNAjDCbh6aT8bBJyPNm",
  "key32": "4moUcanjWTVt7ZKwExZrHdoTfqumWeVdnobjPWw2U5qZsxmyDJFRdFvi8K8hDSRCEp1atCqsDUYQSN7RBM7HuoTz",
  "key33": "4rzJLeeF9e5fWwvjsDCmDGGx67q1M8theeo4Pq8PRr2Gg42NLMS2oYtfLu7G8HYN9zfZ8RACK1gpZuPpibhMQXix"
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
