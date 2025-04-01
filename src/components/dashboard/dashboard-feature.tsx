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
    "wRsxLVmKdsZeSGCgChmwu6RTHRuoDTQ1SGQohC82zCUqsa2BrUX5vTz4cywL9ynAAk3K3c8ugZpNp64vUAR8yR3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "WFHjY4dFeQAKGuujcqKv1qUrPKy55wQa8ATwrbKv6sEhPwrLroX39BynH3z1guJbgJcWctoreN44cPY7YLwSGhv",
  "key1": "y72adAVDQR2kiVakZWj3ita6xqpDdtmKPbBf9dVnwT97qvQhiKy5RfTDBhxwWtm7jQj1eqedy3guS5mVnjsv24s",
  "key2": "4ZQh5ciWgRXZG4kHGPkqm6gnx9Fxq614abhnCLWXDNxvepVySyekbnrQDfZ17L9SS1S8LHm9C9Qc6ZbSSF66REVy",
  "key3": "RrKnexuoCK6P9ApLRyC8Rbs6YzofnjRcbMiEoDJsmdguiFKaywfS4gESya18AimemLpBSi1kUrP8evrjghW6cjT",
  "key4": "4yqtbtbWc8ykji3cva6tVCQkLMFMcTxHQ2L7tVDP8k5Smx91W8DCiFxU1b8FF3KXDqezT9tFjPkB7r6sh2ECMhr8",
  "key5": "3Uu1K8QxiecsQxxXUW3zT2T8JLyghJFEHSQYc58HA2MadZDtuVTb5jDeCZAorTSgDbynX8zoPHsHZk1G9TuWvCUx",
  "key6": "5xq6jkGGyf5F9q5qYFgjdc5Pk2dXWfj4MfFtdCBPUJGZy9ANEv8ucppGLCzwKTQ8Bud6raevBKzm7JH8x6Wucofo",
  "key7": "2ovizdChorYYq5Gnzo7NPtQ5Twwn8wfeu9XHRY9468Uviah6Gmhiv4FxAW4EjSoFdGxVHqbZrR8XqFcsrMLa5KEZ",
  "key8": "3MqWZSaqR33isYZFnydq5SBdifn1qSZkoWsbYExjJRhE7YcSXioWo44Hf81tcgFuW199Twki947RmTftxhm21L2e",
  "key9": "4Kob5bfx19mwoC6tQai7iNoC6wAbW3VqKUV8AndiJGhX9VZao8Py8hesE1Nqft79yuSjgqghgbtqjpPv8pi1tnwJ",
  "key10": "jp5FmrddQt9DcMWRe4FsSK43PRprjDYzBPvUCheEyETFrLYtS9kfRugWiaEaGAHuhqWnMDny12rq3wEGaAoNJS7",
  "key11": "4oZWWq1CAPNAV5bFEXBgxR19NuATAj1uD48unG2fnEybbXVpd4CUWNWDirgVhhquz3rxN1aLmQbBtEyXEMBDSLJZ",
  "key12": "4zxdhTBVx46Q8zF8tLwJbb9Ei6aHxTpuGqLkpujATdYPaEvuSovGQrnMC4hFQJdXjNhsqkksVw8PhcDmEFBkSWGf",
  "key13": "44ubsPbS3pzB72uMM1K9r76mjy4VspVpt5KQwLugf5dhVznSZJzMa4QCArJdSvfaDQ7YhmYxnsEmX966sp331cTC",
  "key14": "WYmtsasBfRfVbhzk5Qhw32xzwVPAWmWwXDonEbRh858e6Ud6MjZiHvSBz4iFPXzFYouEBCQdaji5zFSAMMyHiMg",
  "key15": "2xY3k8gfWCoXnETpynTEGheUUZWM5XDk7QLz9R19fGMW4ft6BVN4ryeFicybsyKwkxX3akfuEqeePeyQfjGE2Eap",
  "key16": "3Xo7hMhaGUtMzGnNqEq43qktv6fWdi717tBGGpVpXHquERcudLUN16Vhb12w8PzXJAZbJxbgcZVmwNQ3AceNCUAf",
  "key17": "5H4ieM8dKQzAJtCVhu1PheAFuYVHKPxFQMzeuR1g7zgC37ALTqtXEbVQHrY2fZzUigUja8G9uTyRRYPbP7eU774x",
  "key18": "4DL9cxdTyAWPHpkyrAFUsPKTDsTyuxhmvNXUg2zny4Mz6UQe8yqsFXfUo8P1sBgt2xofHEkJNN6agj287Gyqrok",
  "key19": "5HjbnMCVgshCwJyiqKjAwiTXvEuLYT5ubdQG4RFadibFEtnTDsQAYNPnjUYv6Bx7RyLiUnwPRwccWnAC8FKzz7ar",
  "key20": "2Azdq5pEmY4cH3YEceGKFCcGyqBfBT42F29uxaKhjAgFjTFigcHYLaArJMNwWpADurwVPs44WGnc39iA6djBHvB8",
  "key21": "3J5ChbFHtm9x5yYmaPDedExFcLXbtr5k49gVV99R1EFChrLYybb6HDHWfaQaMrGBx5FQ6FQU1kdt7cFHoYsZdiBV",
  "key22": "3Po7GFM6FprMSQfJmW52AqNyLcd5eaQds38xuHa2Wzv2BvVY5TWFZhavgtf3MFFenGXkg92ZTrBeb7ZgEiYR6224",
  "key23": "5UwgQMvAWQ2nUQF5o8TsQoHf5cySo3pEfQZ4h9MryPP9aHf4seHNh7TKoif4TjFVrHhqTk2s6xat8Gzg6KcH39Mx",
  "key24": "3d5q2A4DTQzDcJZ62ZfBw3oekKUGvFbTv7fPhahnXXo1V16LZ3EUmWrhsu4uT4eoGGXg1Ntao5Rp7s7g1zWC3fCv",
  "key25": "dcTN2zmyKx4EXiS1J9CybcNya5DapGZxneTfLc8vmeX5GdYwgKzNFvhsMJyzwGv5NXsT2GM3FxNoSb2Gz1aJLPL",
  "key26": "34azdzUkrHfunWNodjUYc1tFjJDGLpBCZSSVdKLFvtRqerTuqmcyqTPy47htnYHYp2VBPm1PVMUwNgdDSbPBozi5",
  "key27": "4Z1xAe7utxgi2sH1C5dG5kXcUxu7tQyVXPCGokqeiJnDXDxsfwx4ujNN8ziz3XKukz6jbKopTK91UiTRid9fLf7Y",
  "key28": "28pg8TaBnvLq1wH7sivWCDEXYTeBJamdHyjMCEhKWaAG9vSeb89pPLg9G6xNkyAA9Zt2EpVnp2TzjmFH5WHoBA5n",
  "key29": "4XSVcvaGFizEFtdmVkSk5wxLZYtr3wTKCVpe9Lf4ytANAL2Te6mBbwrDTLEaDZ7hoqBXmsLuZxTr81PKgcjr5rfQ",
  "key30": "3kvhdqprpdaK1aPMbUePUxmc2UQRhSp7NxATpjFDCS5savFUbBUswGtHgtXZA83EuV4jk99zMqpEfk53ZX8CxYVq",
  "key31": "4boQuUtgsJ344Q58px6kWjX7KwtthMWH3gDPjoT2QsGiNZ7D6QitCzzNpjjVoo2fA11kRDnM1rBARycEtuxdTyP9",
  "key32": "1rAa7rCpigrXpEk9KuHCjWojeNVT5ZSn5WpBM6HixbJrKh4A2e8DTcBq47wNw7L79YzjdQgHWpWc6Ji9XZJtwDh",
  "key33": "aFdCWDvNycXrT1eEJGU4bTtuNWnME8ZpWsAifQEHY7pRyX6BzwCFVsRt8LLK19aS67SSSTNyyii614v2ETfcJ1u",
  "key34": "m1i8HwZqeV11FV6HkAs4rCUezppczzuoSgU9T6oxmUvuchhLFznvfe98rKXT9GJMLEompm9r6bKdhXLzwNp17mi",
  "key35": "rrQZS5NHWZN9VPEUYdndrncrTC5tQNoBeGqwkUYxuRJWYWp9cfcKYCb4P4Bcw39qy217wZRX7SqB8D5hzJ7YvhG",
  "key36": "5b6hGewPBSXmSXnW32bpkGv2ycibdPwkuZeL64AHLmEDmpTmaXKeQPcz9NUQSi9yk8veT8UjM8bYBXVWKxJ7RT2M",
  "key37": "5Rx2WupB4nbGroagguVfSnxj1s63KgRDf58RvwLT5W3mNqNaaWvfrSFqAR85amjVfWHn4wKaZnCiLqQKLCQsye7x"
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
