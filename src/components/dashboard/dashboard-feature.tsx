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
    "3GnkvyKfbdCkAM5hmVXWNFB6zsSwpmCrEFriENUDfZkFcforSt7R36QpkzmsEph12QwW6U9vU7s3nDQ4xUnHyYF6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28XJd1gWLkYZBTcfyxwDXmnQ2gVU92WDj6XZmbTDbp2podEevDYDDA323DFUqkLZqJdn7U9ia2AP31JLaZZC6YvU",
  "key1": "2zXiYZyfdPRSyUMYhxLsUFfESyVt1TLQK6ctNFjVyFhE69itsMy2tDeUSrUdx3g5eg5zxUC9fHgq8Zf7ngE9i7Pa",
  "key2": "2hzxiy6h3bk9V1g2mUoxMLRY7nm271wFWghE8CF1TQnQ3s77dMZUX4QG3LCbrggC5VE9oU8s588uWdT9K4j246nP",
  "key3": "5qUMdGYWY2QQG17pd6kbcXKXSzhSNJqfbn66acj7zvUqADdcuF8YEWZVjpjTATYkBc7PcXXH4ZfUJoqArSVHC71H",
  "key4": "F9a43PasYV6zRJkAWHWmEu3bbafKJz97iobwLD9VZxGyBPRCRFLTpw65HyEH9978QoJF8JF9QKnMbanfm2hRS5D",
  "key5": "EXVvqmHLcT8APKT1vZey5papr4MDRCxkbw96LCYPZkbdtTXs5em3UnhmCADBMEFgXDxVdqpQdThAirJc1svR42J",
  "key6": "2SUcQz3atscZr2hNYoFxAeb9nKa1J4pncAzHrcJaRd74SZ3pjoNigyv2sKuPrQV9TBBfMcW35AEVvAnPHTnWEtwH",
  "key7": "5xPTCPir3JWhSRu7Yqy15WaVmrNrVZAm37n5TWNHEYi4KpfQSAPKyPuwCcT5x1X8mJf3VmAig5hjgeZcwRCs8NkG",
  "key8": "4jVx9VyzrP34K6pzFMUUuU1xKSySTJB2PK26g76Yqh1RvHYFVSL6zZrFgbqVCPg5BdKLMgntj1DvdbVyQXH9bvNC",
  "key9": "kunn28pPE6oPLVST2fuviETeXZ5BEVSnTeoudeXwiLZ52ojZVMHVaExRZGHVYvjvsm2LTHWBo4Y8kib6ewKteDh",
  "key10": "3or4prP1bgjb3uWobDiu3bJtjjjsDFjWXSXqj8qa9A19mbNWHpSoqwRECNKHJ6eH7Au5cKqf6pfap45G5feYy32i",
  "key11": "3P5t52JeedZeHKgow1zcdtKrNd9q3ErGHNpZfn96LJnvMBEuLtSTvXy68v2pUp8ZSopXx3QN4uDh8PPvJDnjZ3k2",
  "key12": "5VgCCgHjtr5NtPRFgWJmwThqQmdTEoBztouoZATJb6eWMr96VR1L4RwULM2cYkQ2Ekdi4iz5yEKQ8hZb3X58TrnD",
  "key13": "UxQmSGnqXhunMHNhXsdyXhiLCGmQk2StfAceYf2RtRg2J1EdQYdAkptQiNYTiMZeuQ5gGiK3jf79wctdNpaUhTe",
  "key14": "33GZcBBdSUzJuzD1q5hJ1swa8PAppHNPRYcjKi8b1MLh1EgYYdBaKN6crBDQmeXDJfnyv1pk9cepTiW37pRpsB3A",
  "key15": "5HByp36zqYzzTNM6V4S8scYe6eZ8DBQRTTuq7WhFDtpNMjJQQUZxjtpdegYPhwr7cD7W8mbp57MeqaT7DYGeLJ3V",
  "key16": "366eCVG2MX5W9KmDzBc5ciXQkQ22Q2kjxgXXMEAr6fU656LAJJvmtX5cdwHzdf4HgPUqhSyLnwjrDqQWMBAdcppi",
  "key17": "5QFWfGzYtuDCtZuyWkn3YjyXuqZSZcAAYZWtfwNjB9wbhLctuBy5daWSG9uciXYLRs5vPQtnQL2DdWbd2t2WXcuc",
  "key18": "4m1yksPfZfc627ZQUz8L3fTQYWC1PEjHY92Cm64nnyG7S9qdUgnhhdCxqoK3B5edQa79JH7DWt5gVbdUxbEQ5PbJ",
  "key19": "2vdMivbBEMCS85tz98FBxYt1Xz9Z9HTzx6pXkporgzyHUvGscxW3DbkUGGFsWYK4uK4GjpnNfRJkXTtmF6P9aedU",
  "key20": "2bKf6iR5ximHqSFpttN14kcPGg7QiBC4Z3X9BETvKa4w7jie52JCYEkGpdjkczWYLi4EXj5Q49SpeSXvgpAZmvju",
  "key21": "5SjCSg7sRZv6xVLyHqW9f5K38wnwXPKqhb4jkjaECza865kqYH8NbrFYgmNeoXsvCRfFqdUwGqvorrLHK1U5SKzA",
  "key22": "t7BGwCo2Sy5VcQBC5jtgE1AgaR2n1K6kh7WUXiF1W1szERfWZduQfrhE7pwpbHMgFWV5r8Ko92azQX15vmqav3h",
  "key23": "5Urge6eTe6p9BAKJFJhU5sABkwn6oMGGzDCzxDYCa3ePJCR1ACfxcPYiooUHTVyi11i3YaJ6rJJsQaFpY2cQGo9J",
  "key24": "4SEa8hz7FtwWLNj3Hp5Wk2AGDeveR6WRMRA8AZFJijxHCLJ1v2gSrzeagXUs1NvADeq4AHp1Pn68skqs7gavkHvS",
  "key25": "EQE5GnxUhNTUEx4b8PA2NPYb9bZcQ7ekErMGh5QQpzrj6VANjJBU3EKg1jEbFt4bfwAn15ydzeoygo7pnM4Vjhn",
  "key26": "4wbWNLTaMUsKEVCvxKQ4tS1sNX9rBxqVtqRh5zJS5S4LiLMrdRbRwzwGDBAzcqDeoBHGaRpUgksev11Tgguy8Z5Q",
  "key27": "325SAgJHs5UV9gTCXxP617WXsMRykWwiDUPP9n1wVG8TLpGCsCuPnBr5THdcPfM1LeWEmLjKdxMSZEFcW6oCfVcr",
  "key28": "6469zHLjACFiWLMiGKBBsbpniP3TsPEKo2AL1fQFC1YYZDnczNSJeTpMsUL2CV39gfa4tVD8tmZudbLbczgGybRC",
  "key29": "F42xX614GyLrJTbZiRexhkiUpwjyjHP1rGP8wKsB2DpfzYabAVyKkBFjPdaEuKg6goRu4fHB9aWkxRqjdUQgN6y",
  "key30": "54MiMqgt5CQAQSqbgSRon7gCi2JB6FyaBZZy3tzedVQeGE9rkUerw8H87D9pK7Jpu3h1W1fbXz5bNRdXFfeZDt72",
  "key31": "2qoufJ2tzBzcf75zRzyXwH2GZtszJR9Jvzq1K7Nfz7sMojsks55GYref2AsEpUUPeZ8zoCvuYbCuJwjff7RoziWv",
  "key32": "2Cu7zT8fKuLywtg6ospdX8BeZv5bj2ycaV2mJ42Mctmyrd9dPALDoSNEbUsgrkL14cxYeoHvUm7FUgAniz9PZWfy"
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
