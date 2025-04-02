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
    "4w8dUrzF1tVkqVEM1AyCav7k4GfgDaR86QuQ94xQsjZAdUDPYxVkDLgsfF1LbVksT39v894Z1qbxup2RA7xTzV7t"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5wQXnvuwGZbSXidhAXG9TWKjfHREqtsefKCFx7U4MLAqjG2yZLRrse75pXm7gbutn5aZRgvh4YnsNVsejF8Fs2ni",
  "key1": "3J3SrCPAH942mUtz11p7LkUJyQdRV1TbmcVZGZAA5dGSj2y8kRb79GmJNHSDbtxeA8DR561KUvbbfyf3YF4TKTDY",
  "key2": "3XUj6srevtGJ4yDnjxB4ic4X6nrgxMSSXcC4nSuJiDJNj7f8GQT2tkvciMyo6J86WaAKEyCzBpTkgYrwDMyJ8Eua",
  "key3": "3BhCfoskQUFW1sZYK6xSGYBhg4B1SYqjnmxfhQ8sXegy1fPKct4NCnkmcFzYvjYaTQAVmL1tU5FHMnQyKTJP6pqt",
  "key4": "5xjvFuMaV2XbcLNsKeD8wCrRUrW3QBf2Q8hPGce1Nh4iN3eurP7XBNMBBkhPwqEfA5xRavuvdyfktdGGJfUxvLHw",
  "key5": "5kzb2TWFuzRvNfZUWGNDNciBrBadPYmyRHVBhs8NNiYHPTu4PRQt2DuvYwHpuRggRyiCgLp99CMyS9ikNr5Srh4i",
  "key6": "3XHH9CPUmUoYWvmepxWiSYgbmjWt9cZ9z1hNso5C1NAiTf4Dmvx3yHEPkeTxwJBiWutrTemyvVBneRxAowpA5LRc",
  "key7": "6ByvL1tQQ16kaGc18DPDYqwxZtWJcWXUqNyn5FK2HSymSyU4JvbQYFXJH5WvmY2da24ouRthuLuA3ULBz4RJcJr",
  "key8": "wADHCWL7DL1HXgS2vLuGzkeawyDRez9x3Jw75vLh2dX9DamSZkLyH6ifDW6sgSP4hrnz1egxayZdN7VTRY7JKk6",
  "key9": "3ThbGUAuNAz9ro8MnwzQicAmviJ1cPUmkCyEZ2iiWrX3Ksc2czS1L84A223AV9ubCjYPoU3gPGNQFMQ9SC2Y57Q1",
  "key10": "511DELniRSUzYeNwebqB8eVsxPCWGFePqXHHmGin7Fq1cH3CNWXrQ2FZ9JEYGAQkXdL8RzRXky9JERVswRvQF6Wg",
  "key11": "e7HSDop9Ns75aPaipiNDR48GSxq7fS56Lk4JwjrmcVVtsyUzBFqbFnDYrN31syhijSCt4kJ5VMvdDkSUWbz8FJJ",
  "key12": "3tsokhcmpExzkQixY7JhuxoLnvYuenRCCBAsNE8Dge184tN5YJzJruXPy4tR5gG1VdfVzmmyzjkPxmPvs7zVZRnj",
  "key13": "67GYMs1tvLPpDf9ukhBjTi2d43Ps4xj1eBPpAfsZsBiHcLVAnUHhEhGkUUPqGjPKWQn5WqX6BKxeySFXmpio8BBN",
  "key14": "5rMm1z8ByTWTqanbkTCoxiaWiKw6G6bYmDvfnpxZJaYDGfNqNcaeaPZBh9AodQWzwdmUwEJ8k9yvDjxNHkFX6nJ",
  "key15": "ubfmT8JFBM8trMFcq9wbrHc4rnwz4SvniyG8mAAdnVSE3pchXMnmBWKWb9GPJ9isavjL9iWEQcdqWb7FyhkhxuG",
  "key16": "4qhboq2iztwdHVSaoMLUuJRsntYWsjwu5nQTE7GU3fX84GxkkuiMLxC6Qz3uXc2yWP6pUCJZANaHf9Z9bPMPatwh",
  "key17": "ZKXLp9vAgUWZbxdUiDWjSvtX3Ahk75RDLafp3wjwe3PonKmQUqi3YHK52VjzjnxDZ2KYvrEWJz6rrzg3CbQGnY2",
  "key18": "KiBTvHpGFknGcdKu7DZq4iF89bTcAaQeH9M6WtNrvYMs1VHYJmrg1gHaKGURMFF8Cnu46S4UjXxzeR5FBBNsvNR",
  "key19": "4SC3Wyef7s15swnw5hsgNBGHzwTioC3D6EPdHpp8wS7LoR6uhKbFM5QFNcrxS2BRhh71PWdpDo2eGVw7CH8855f5",
  "key20": "4gr21g9ckogcRf93XkkZjpxxFR94Lex5jx36UCtk6reQVLxmzyp4iTwQnFxMaBpDk3HkwhWQadxyKAVKAsuCj2rh",
  "key21": "2RHnA8N3W3XCUBrMwbEQPRsyk59CjxAZVMqjm1qznHi2NgkC8pAhtEpf4QBmdsNn2F3oHuhm2rgJTALAwyv9qfEQ",
  "key22": "5mpUfnhaLH1iPS8L4iNe8fZ6Rx9W4m97Su8xWDmbcedoiMzi3bTvmPbkYhiFUH3VAuKCf1ZeNzN93c95epQsD4w2",
  "key23": "43F1RZC3u6XnMtew47AFsncwfSJaJYbLpYv8w2cdwFXtbU7iB7BoaAEsMmUroX354DXT8ASm61kxhtxpqKieUbFg",
  "key24": "3WVM5r67FUznxykfFaYKe45CLdPHazA2sALPkdELTNgjo2qffkeofakq7mCxD5ToSqBbD4FkpizEcgu6kZAzVQX7",
  "key25": "573WwMUjFekysqKx7U4FfGGbvS7QufMhqbygYC5bNY99SY42c6Mm17Dpzd66gNaqPJXgJz8zpAY2BFEw51Xr1MVN",
  "key26": "25FLyqh5XKWRxhwux4CWJmz2o5P5kBTcV8TrTrQWMcUMM6beNaL7YLZZrckk6asNN24nFfq6zSbwnfVYqGBaTmh3",
  "key27": "34fTrEvJrFyePwevfvTH9MDR2aGaQAiaJc75J7MM81bSQ4ojUjd2i7HRA6wAUsgtFaG7x1XhMaC8C56p7z2L2mcB",
  "key28": "2iW1bK5vpZNBbGB1mkCcbRHJhGZcPq1iF62KyJRWY9cvBeSwcmE1WZEZcFdnE8Fy7E2JC7Pr3ioz5trgUV5kmkr3",
  "key29": "4Tv2BM5pi3HhjpqW6sUDe8bms5tWshWodXZW7GngtF3JXhmxDXeYzSsqQQy4Qo9EUakJKHUzY9CJzFyCduP3NFu4",
  "key30": "4km9EVMjsTaB2Z4PeKYrswD9w99oXiX1RfbZPnNkAGYQu5xrFYXzf4r6bQWdGjugUp9nr2hjFDGTwbCLmVMeqrrb",
  "key31": "3XHuE4xUXVACTcF8ane9LeXd5DxmBxM9M9KbVRdG5LChECFgxgR3iP4Bs8QDwz5v869bqR48MRcbyS86JhPBKU8b",
  "key32": "4qfMGxbwGg7qhL7dZ5ZfEW3wAUTzWoFH12s6HqFcRyPG5kFBxBUTVkLWKauGpHrk6i769yd82hbipqgowSzuAsw3",
  "key33": "2jqrM55qxHQdkj1zTcKvFwodcwguesLapqAKvS9ZDSNJaxHucnM6KHzKZivHqqQEvicXK9NF1VZ1o2qgWrzNho7K",
  "key34": "4TdPYwQmgRSMhS92yE2UQxV9qYpk6emrCyKJ1BZZY8Z2eMCbptLKDppetMv8q86SworAUs7ZF7EV14E8DUavtapm",
  "key35": "4yHWyg7mxCrFZJtffSoFRV2o4TiXnt3bGmoBY39U56CTRJeHUh6mzhGNJVj3QJdRPKhMesH1W5hZ2u5xQfb87oog"
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
