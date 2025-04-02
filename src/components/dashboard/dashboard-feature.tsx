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
    "3qpupKE8PYhzQaXwxcTRj1JBMf2n3TpjbgQo71yduHTu9JdGDKbBWRrhHX93yb75XZDcCzwfF3GLQ6wUFms1BBXG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "419xVjmGKSNwY14oocH2rgqsp46w5EcffrKpwzmf28vyZT6yacuv53v8m3Zm4owF1REuKyHWa8zNehbYEAB5E7Ce",
  "key1": "Rzs1Ap5WZnCHXXHqwdsbGJ5PUhW71QzxR7CCMo5FvsHCcTbjXhvmu3BKHZgtpyYFL3RLfFqpKUeaDRDrEPYDZaJ",
  "key2": "5cGBZ3xmMhHiTtD18a7PstSXgsdrra7Zs5V9zzmzoPn688LHso67sVm42s28viDPn8kB4ynronViW2MjRQpArvud",
  "key3": "4nEJxpeLbe43ESYzdrmdfGnhEHZVHMDTXoZDNJKe29Raku3rRb1oEpahkQT81z32mQeFczcGvxbTHvh9M9ouGKSH",
  "key4": "2GnYjo6DdL2mxQ2PX5ioTNd3omfCb7m2neSD6eJBLRxcwh7nFQNVB6vCuXveJAhvvj9qXPM1qLnBwruRmLTsgq1b",
  "key5": "4UUC1VoqH1rQrgehfDguM5hinFcSkY9hvYeji5bpREV44zAxjiC65mvTxbgmQsJeqYomPHkTq9nnKmcfQYdj1usZ",
  "key6": "2EVe63jsXZyhzimjpBRBcRutbNNQdjteRskGvDLSi6YtUuJh76cykHGfRFx6pNvnRwd4w1xnXReGnksuA8xpS98p",
  "key7": "ENzBg46iWCd18Y7c4Hxya6KEkgLFBT3yYNUZvjqjj5DpVhx9gBL7ugJhQ31svAqaMicLUE7XVyhttQMqxmrNWRJ",
  "key8": "61kA2TPAszAwmfU7PNoSNSKMsS3q39rdeVVh8pdFbshj9HbRLSFntFBFDCFTo3HfH6QkF9z3hXF8DN4riinkh7RN",
  "key9": "5VnLdKTmyQW55ozBY6Z5ZLQ6mgEMjGNUhVDVXuqDiTu6p3peMGwiyadDkvr699RSugPwP9iZZuJdkK7DqNtQLtDf",
  "key10": "2sigRoZfwSpVsbxoAGQMxa6i9foJgWJhLssytvLLpbH1HuLExn7BwERuGV7AvCmY32KiESgGMYEfTT3wuENJDQgj",
  "key11": "5j92stFZXnECxKvbdE5svabAdCqWfM8wMUteiG2LrpGCAZVLHa2WLsnk4FmpAGbDZgE1m1qmSDuCJ2yDm12ENtAy",
  "key12": "57JpbGPHqMgarapxBe1uyWCiZ8JjRniTgWPz75bEnAyfGhkdeKUdJVNJfKr7263VGo9fcAf1ECPeTEKwWLqbH9Go",
  "key13": "5GynixPjn5oPcWHjPDWVnMyuU6Dseo8dVnYYvaPhXXzHATL5z1n6x6HshTG5U6zeS6hT2XFaHYC4UXyf3PwTMhQf",
  "key14": "5CkNcPE7mdEWJJrpbgM32KG4Zu8YdM94uXwA9YzgypYMipghE5mSTJ42ajNQcwVziK7jNa2qVSHpDP3SCaSFYXhJ",
  "key15": "2ohN6GTN5TPNjwD5D9NBTiwH3HFVAejDP3wwPiPdXLhAbQYkbGzR3517P7tqYr4VVV2wYVtgNUdR4NeXCjVoGa2j",
  "key16": "3wqnxzDZgaZTFtidQVrb2BcbBaQWhFetqZQ6Qodhe8H5vFcc4w1b59SnjkPemFcvgPr9E8h16JT3Fu7aLm3GQcrw",
  "key17": "4RJAVgzCXvwyK849FXs4PPq7Cx8JX1teV6iiWYytVeRqtJrBsAQiby9eF77RqBPojeEarsDfsxnrojZ54CTMpaKR",
  "key18": "5tZa75iJUGVVcPpMe5jUcPJE57aK8JK1B5LHt7eDeeXE1kqNdMoYgFQPduASeSEXdsoZ5mqryUNRD4GpLBZnEypg",
  "key19": "RQ2pNtTxBPN2H8eFEn3e7YaWtdqGaiZKtE3U36p6Y2cGgsuwwK4f3Kpt7cjcpqCtyPM28wYDVQU4mVDo88c4XYb",
  "key20": "3MzWH2jUucsQzYz3McYAuMpdLa5qczVnEh36455ud17bEVFy3y6q7iY9aroN5u6GZAK5zXwrHoVH4J5gPvApETw2",
  "key21": "5bPaXi12sTxr5bEgx4Jv2NkAzsCrQrrdXAyd1SiBrJn5h6QNuZRRfDkX1rRfZAvDtMz6CDrfmJbUmzuDxfdNKWCW",
  "key22": "24qsbkYoG9wPgUkhJ84fMFAjDk62XbtuNzvxqx83xJZ3JphWgidjeHXf17xo35622sWAb6668JgzPAYi3vDg93RL",
  "key23": "23eNkh1pc9PjKuqFm9eBsETAiWsqnTD7zxhqBZnYSFuwbb9sLMbg84KnT3fuR3avfhEAAH4oGwgJDq8mhiL1Nm6Q",
  "key24": "3VWsXPiExUhMsAnkAjCebRHujSuW7ohZobERy2n97XeK2hjtsZYy9yLzHkyAw6PNUz6cUJSjwB8gqra9MiMocRdc",
  "key25": "5vY4UhdEihqAJoJGJ8p33PLUx6cEecvNBLPTfPdVsSRKVcDfivMGRmw4L7MLXgjaToAa45FnrVswhDChaRecpM8b",
  "key26": "3ebSggPdujxrKYi4WiWFKov5DgstPm1o6nfNbEARYK8B8vvvK1zo8222nxyzhDsVXmJx4V6bHAR4DkK9X8iuDmJG"
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
