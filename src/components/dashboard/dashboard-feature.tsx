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
    "3o9YzBcBmAJMAtjiSdf6VhGkqMrFiXzn4mq3NqNkZq8AhsbPJN7VBEexo4jVbbRm83VpYCJoP9VrQfhSEhJrpCFL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41EnGqcU8bRARkWgr2vxSycf3HkDCSqQbfqBfjMN39irAfHbtMER9KT3mZ3viRWB9ufG6WkivU11vtUpb7Y3x5QF",
  "key1": "5qegCvr1LtSNkbnWrfzxtQuWVMqazRT2dk1d6qkF9nKuHnysTr7PPm52DjeTXNNAc3a6E6bkeA7rURkS5Kx1M3W5",
  "key2": "5fX2vhj4MGvXVcDy29dF2FdhMaaYUKmVoQcrwMCSPwMmYEwcMaJaMYnfsLhNLyaw9VQif1rTzxrgxWw674nqg17P",
  "key3": "5AkGSHg3s3nAe63JqQhT1m7abArLXVW1Xs6YkDgThN24Nk4ugcDP4bD1HqbmT69G6kifi9TtB2GdcaRT8zfBh9T3",
  "key4": "3NAALjgbeMcqG42FZi4PB7vcFz4aY5kC6k2VadPkqsq8xscbWhBhsGS4dz743Jz8tvXFfZKMgue8pwUZZVjEWrb3",
  "key5": "5pbrPyJE3ZyxZq3Lb39GtxgL2snN6kdatNa3dbNirTbpxnxSKGRZiroMTr9swEYFqhR34v5t4VG8TDXLS2p7jGZ5",
  "key6": "4xYeizEwoQyvrLNtwP31a6ghv4px6GJ2scFiFa2kWWevBE5iZJhF8pJ21qtqCu4pKy7MkxJQCxUbbcdxdpDX92Nn",
  "key7": "3Dq679EYdFME6q2fX6Bof5nskVAa2LXTMmXXmoLs5VReoSiGkwenWoUyfjqhK6px2youpcnuoi8p1kCwAxzzSSuQ",
  "key8": "3BwrKhHa1vfbBidBuRYyAKPsijbrVAbGNZzs8fQrLzNsDDytQD7UPhxgv7JTYbJQPQEgrmYZ3UGFuUMFq5KJ4ygs",
  "key9": "y2T2y2ZRhhLwJS1NagKPJU85SK6kwykuYrEc5cjMjU3e1dsJZdyvpesSctYm9kheczGmmWumjxwXcoSAxLvjYyK",
  "key10": "3RmnUCxPwPmdw5JJwJbTS5x3vtAXzyTbQa1FQVYj6yGQrM8vzZrz7dYMJ6VBaj8GwzoPA5EoFFuwgp6FMKkW4FRE",
  "key11": "26CBJDu26g9PZCVM471TdznDvqZ7SKQR1oKre7eG2jqDPcQTd6A29skVjwJH4XtBxQStWeoYA6yGLYpicFkP71wR",
  "key12": "2rSyM4UF2r3e7oKMaQR4Ym5S7iuUUaW6bNBnjGt9kAgg1AUqn1Yuko4mX9en6wxaNtFoFZiTsxPTCgU5reqE23P",
  "key13": "3C6A3o9seGAuDLkKKUxpJDZpTXTPZucT4TR76VUVEtAJesDGWXz3vQ32XgBbBZru4B9o3hMMbxvXLhKQjMPrSLav",
  "key14": "3TZw6rHzYqgrnq3VgHD2KWFErRMW6iEmgVRWRKmbfv2QwiKY7FT1Erp8oXRCdTAxyjTpn4BTBZ4L9GsQiVc6bj9n",
  "key15": "2of98gAq6u4vKqbu1gTv7G9MpV3nPiAcVfY3wBJt4e5WABoL8UAEYCBCCVc7CU22UFUumAgbVxhxEyydBMpd5eah",
  "key16": "5TDyAy7HthxM2Bijnh1XFdkVGAPbA77WRnSxUz9aSudC3PDA2LnuzJkhvzt3Jy4AyGMvMhBDC5B2UkrTRmomW8jm",
  "key17": "oWG5y46iBhGou5awWQ1JdwANmGYQrtMay4NGBF74zGjAZb9EyvTVVejsn1RN6qvcNPim3B4q7nT7e1kmmUh6HNV",
  "key18": "5fqqYEndVMFfxW1yDdT96eaBDPQTM6axkE9PxdCDHHgd25zfuBMs2uMPEBKrqJ9yJgwyw4dFZz7MvEW3oTuqJRPC",
  "key19": "5DVeGmX2zszRCez5iUarcpNjqWYkukEc7VUYFJiEiTjxTPLzvHaMJ9qm9ETgy8DqaYGv5steVv4RKX3bhuQwaXDY",
  "key20": "5BoGH212LTR5hWCMBWxoqfZk6hswb6gqVysoV27pwQ8FwPgZEFYFJMWqihLq3mFGY6gEhqi1khKJavFMvsa8Qo83",
  "key21": "24SmVENt7w4HvefLd6zSfvjyWsNka4vDk9KB7NXxq2PG7syFAftnzf7dv5nUypeVMyZrEJ5yDar82ekGo1JMkbs1",
  "key22": "5asyowfpkuceL2ikfjtwHNLoPiTZrL3Pz1dM42qdryJLDN49sQg31MBbqxbQZAwZuAxdosnnXuGNt6WZa2mm7rNB",
  "key23": "2bWvcXpB5Ye6spuVUtLgLf7KSa8FgRNtaxQXhzesexU9PiisUFtyhHWBa9mkBSVFoA1SQBERaU135xuEH8ExdPE8",
  "key24": "rC7B3eT4Fhqsue6B2rrhgECRGw4HcndREsobkq2bLhe6dCD47MU6KqsarrZWxfBaR7NaV5vxJfBn6Krzk9GZVFE",
  "key25": "3tTt2kPY9tdPLgZEMxufCnRNhQ2DNb6eAGCS4rKMSZHfRPuTgeEQfWX1hRAyFB4pjXBhisXdSAnCdaKL3T6Zh6ro",
  "key26": "nJzpSKACweHe8rc5jRZ996PdDaNNC9isyjzxCpKpDRQsmxMz4s6LkoMii3BrRgNrQx7vQibrcYmpwKafZMcjE9z",
  "key27": "2z2DfK4v4e3fpuj8Scrj8nDDQ33XYJW9WRaXTjGW17J9Ps4csFa8ibjSMQtba7J8koLTH6a8YnrtzWkWaRsc78SE",
  "key28": "KRp6DUWCTCangm3eZfTCYcitPGPo54DSG65xoC8JvBXgidx4wk5GCt2hFKhMd2iD8wM7StMgVsyfLYLu87fpRjs",
  "key29": "5DYqVQREAC5d3VSmdXPspZcByP7yiSocgX5xfJr2S6dr85TGQNMybitJSfYCnpXb2Sq2kykNky9azUrkuVxdUpdD",
  "key30": "3uZiekMbxGYD5qaeeiJ4i6DtKGQSzAj34uAkmKA9PgtWz853Arn9adJn8QjPMeziRbtBbFi8UYDhUA92vK7B1pSD",
  "key31": "5BRkQJWPB1mn9PHUyDKgk7AQ8FMyW3H2iQzdt8b6jYuiBMwt1yeYef4yZj6c2KFboKVKv7h8mNJ5x9Bdu8DjQYnD",
  "key32": "5oQpRCE1iE3RqXh61rcN5Y9M5CLUQCj2sfVhCzHBrS1jkZdMZdWUegazi6mhjUSwvZuGu1jZutMRehEiqwMBWRw2",
  "key33": "2VFf8pBMkS2xujqeKKMFSEEHy9E1XHgSfmB75bFmkPAog7EVKLqk7Ym15JNsh1x4io8ebAhEE5BGKiFzZ2bGFcfK",
  "key34": "EcpTAcF9PjujFAmsnzc6chNtbXkDLinfNHbipTSSCSihEywqXVr9JkaAYjcDf3ZPTai3LFzP8TUtBtZX3bP62bm",
  "key35": "2UwGwZVhBPBY1e5s1HnPeMiCmWZSLXNxMdybZrHmBi5AQcMoAQmhAimiZsWGLQxdGJpEYtjk3rvxFxE8eFxAzCAr",
  "key36": "668RQ9pm3rMKWzwgfkNT2Ayci9BsEwTxkGptpFfXCG2SLvE9gmYmEuwXyY3r6KYD7sEG7QvjHj9Fieh2BMaqMc1A"
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
