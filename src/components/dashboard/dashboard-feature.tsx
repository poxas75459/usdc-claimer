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
    "3CTBH9syTxmqdeCtTnn2doYEkLdm1CtaPZHfYU79SLQJ4u1MVbifXyh3jGSS99FL5otL2QjniDMG53FAEkvbENfi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bN2LiMDedX7TLspUaSszVVQ1w5y9x1QVRC79FcDQ4bE1vYdTXcjys7gaU8tTwFXbboWGoSVm8TkrAwjYKSogKDx",
  "key1": "25sy8MjHaL8xy2GyvkoRLQgtQDjrN7M3a6bERMJHwGgJJsra694tc9CpVuAcv7gT2gkjdmvUay2Frbbma19aa4SH",
  "key2": "61Vnjqw7vGwBxEGpSQKxu9G81XZ8bivcEiiqaqZkL1qhUbZhXWXLZP9933vnt94zKkGyvcfUeMGXLMsQEadJiWUG",
  "key3": "4AQ7GTk8nhwYurYvqKpPvxKBKFrtv5JLej7eSbeeH62SLTfg1nHkrtQBEnRMTDVV5cGABSDL6SzmTqZKefuMBJRh",
  "key4": "2fCwr2incHK7dqecTuG7iAjk1QsF1c7zJYFHP9dZDLW3vRctz83ASP7wfkHqKnaQ2FZorzDLBENjrkVuj1DjNsBZ",
  "key5": "89wm6dLGZWZKosWQQUxv2c2nCokKUNURVBTzBx8inta493dcqi2emiA7UQktaE2YPFMW3oXZYmrkzzChiTcUaay",
  "key6": "nqgwFFbLJCnC2UnVA28W4ZjP4USKd13eFUUeAKQvCQAPdujxgMqSAP8qCVnFefEtHK85qsh6nVEXRpxAS4t7evc",
  "key7": "4oHgeLFWmJ6B9kgzDT6XbLLoPEQEew4o13uHKAWgznmFo77imQN84GHBzjzUV2GEPCNrvvvV8sfPzXFsyxYxkyyC",
  "key8": "JyLpYnFDy8YUJRu7i168MzqJY6yn33htCcByMrckEMn2FfDYjipiStckhaiFUueRbKwrjAqgWQiaQASdp8q4ghg",
  "key9": "wZ5GTiruR3XqiV5Yta2iitWULWrRo7PSvNJzu7ExXAkLVX4r2aHEPGn3hpmpVCd3R9Eo4XXw9WsnqQHwmwPMhWn",
  "key10": "44RRLWLJmcB5Z6x6iDmj64yFjYFZNZaCWZUts6Z8Wu63uyLtGgheyrF9k9HPEgyU5PvUKbSkjhFhcJ1iUv8cqr4S",
  "key11": "33vYUvc1fNw18qrQ6hxsx8dasp78qnR8Q8dqApGAP1Tyjs4oGo6QhTvywQAn6XKoM2BDECsZbiq32M3q49XhntAi",
  "key12": "2jEToLcfUrPJpZsDtRBokhZ24ApPkAKgKUa62jfXn8WhUCvGJun1kqadWBMrawBGhXqMvAtHDQcF8azcNw2mfghJ",
  "key13": "42ha8SnbBzVTBPyG1UbnYstGs8kWEdRs5mZKxX8P4j1q4bHZM4SQm7PxPGQ6jjVExaeBw3cMrT3rXUiYKMUJXhrB",
  "key14": "2fWVbkroTiEmRNUWZrjFPeN2jvBpCWP3rWpg1z3EHnHkasuHcUiiiEisPiQydyUCDMHTAZ7JwXXGhhujBXjvJTcr",
  "key15": "xpbvkaYoHkfJKvoSbbJrmC5RoDhCpGpHKf6LKR8psGeoAGEJjkCZgqoUkXfYtRrs8U3YYdmPJfg7FKfvZPK43TL",
  "key16": "3oS7F6C8sHcJCALC1Lezhe81WJZXjXpD1wzv9NZz6pTgokVAoXn5kQAaqQuzmzgLNk6U6F78sdX9266e7ZjZT5gd",
  "key17": "MgYW5MGq6jo3E2sRYxPoD6xL66KuPgtvnKT28g111acGjsMCUmsVqj8Ua6Ty7qvjaEb3SEWjTJqGKSuP8imSnGR",
  "key18": "2k1R7VtTSyxD59RMFSkzDUqqgDd7DTizBfLDEc93oJsLRi7YfgiYqH1faeMjot85RX4aXVrEjSBbKwcLGfEtoM1v",
  "key19": "2NKsjB9DU9YUoTN561TowskjpyDTbDeG3vS2WmdbfEyRr3QbhAcVxm4QngBsVk72buyG5k9VdbA718KbnZVuGBkA",
  "key20": "6qjdrEmWvovgzBgXZKY6S9fvEyJWvxtEMiTHPoPNr6Z5WZ4BnToxTUNnsqfiKBmtTW7nVphLJDTfqk2Ei4HkZqR",
  "key21": "hZxn6NVy3eeJPLpZgwtf4UvPhKKtHssUCkFqrTxM92mU3xhaPrEty9puPjTeYzk8oQknc6QNL5qzUpFmqBUWULK",
  "key22": "5oe8rMksDDAGKDLbLJ7kdDn4amUY8fwCQDFaqDUj7gWJpNLzLDs82Y7Yo9QPzsyqL5u7xgXbQaKptEECdogizyF2",
  "key23": "54vMHMPMESSqfSWYNc7RYMsfSkFvic8MHfXiZhVVCf3gJaqi6T31KmsaajQQFNsfXZAs8MYqNnMvohVqDezAg9y3",
  "key24": "3rDW98VFSC4fTxv1mwFdnhS27R9vBmkDoGmZrf7BaiTfHPy3uYEMG4fmPBWcthD7ZxwB8B68RE8yStgZmCZ8KSMt",
  "key25": "5isZkxK1ExK6ifz4wdY4paxRN5Z3jLWDD9aHDT3E5Ps8D7n166RnPdZZwRCk1W7EVd2MdotJsnP6MW7dRiQSyZuZ",
  "key26": "2XiTDp4Gj2XzvpA4an9k7YMp1ucr8SwdY94mWNAxugg2otf91HEq7QgTyDbzSkpv5PYBEmidfwNKE2apFNTMMpdW",
  "key27": "2YsxmmqFYhvYNVpjzFSDpdAnzdfTxAs1HVRdZmuaG3ggS94dNFGhReZt7Qk98Ug1ngN8D12Jdhzn3eU3rVQLXv8x",
  "key28": "4TB6Z9zmFwoMGnXfGZmCnLbhJ2bEU1uAkQNxfUxWhLFdniWPUMFRrNbK9mUGYv3oWTbaZF2ojExTJx35SJf6rMxo",
  "key29": "YA1FcTWscqqpY6o8rYUWpTCTpoN9pYVHRmGkwbffPKVFWyc4qXCpZ2hGGdCSK15JR56PQBYNC3RZWSvQchPbeiB"
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
