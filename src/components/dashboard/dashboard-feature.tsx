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
    "5FRtwVyXkE76FxyEXkYfT6HPK1Ry23ZT36afe28EkpqVCXGxrsk2eBt83PgtQAVxHBg2nHnLqv9K7wUKyBGjaEdo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2H7zoGzLz4yuTscC5YiJVt1LMNbyFV51aBWtw8teiwwsCqhDBFrh82BU1b1yGD9Eemn769i5wHwQdLmhvg39DatE",
  "key1": "5ZhFevgxkUo8mTMXCQaUJVTBfPVmhntK2fMR8P3doXQYZViCVh4jWtX6qRLphCS8cDmuvvaT4WTUCTRLLPzppUdZ",
  "key2": "2tDRXSZgABLQNcujssVkXxzWrRJ8KKHAZwaa3cciuxoJt9ibv2ECoNEtcGCXbqwLLTCMRbaAmfqByB7x4TEFZk5w",
  "key3": "2bKzHczEpZC9JGGirmNSD8goKo7s7Y7kMaQ15KUGjwiDpzqAqEkgtcKn6PT6df2Sr8v6ncGpoRocynkjZoauwPBV",
  "key4": "3qv6SdpqSPTBGGZp36t2rDehCvbQyMqsNtDyF6aQqSoDYjNMapUaZndwN3MSYhfsUKj6Y1eU4WFKMiy6iNMUcECD",
  "key5": "56U7i7mD8Yetwgw155pafVw7aCbgAD67G8TJyrJGaXAf7CAZaEdxVP8iDrudYiEHkHWoej9KXzsiNdULLZ8sNzFg",
  "key6": "QFuSTaNJBhYKuwCk61sH3LMWjBffa2hiBirDJ1AtzxwQhgX6EC2d4qhGyX7SKu8roZGNxWRJfjYhvQ743dAJJoo",
  "key7": "3gfm1j1wBya5fQAxb94D2CPDe2n5MiVtauZqqKjxkYFteNWZgY1q7AfRkfrDMpCvPNC7LtX7xsDpTZNUdeS6JAsJ",
  "key8": "3DCTrYZWtfqs4VFZrMGQwkPCStaFotEJ4eSU1yviqP6wZwfeuE1LWf2qHKNAS2tyHobrqVADCxJ6amQf3qHYahM",
  "key9": "5HYQTV93AMe1ypfT9vC3MUcdc2oe9duSNDjTJPNHj5VK1E1onyE5K6x6Y9tU2A6c6BWHzW46aDrK2MtqRLxFSPg1",
  "key10": "37rasBFV6Kqn9iZZRjTrc2Ci5bidQdYdHbUVdWZEexLpzArTbV72KC4KerN36vKboiNuuxu1s2j7d7bVJ4nS8eaU",
  "key11": "5cPgSdtEJKDmL5yCBKybuDjA43CLoiNYdUU9WCcCRdHidvGresdN6AEnmjuUVWGUtuXehCwMVUHmnucRWR8LWuMx",
  "key12": "7U365XM7Px9yGuxM36vX8tLYAkaAH2rYmPNNkKBHvBn7ABrBYnKWCAUeMS9NpA8YN6guqoB395CkyMRUZ6F4XSs",
  "key13": "2K7Qmq8DSE9HDpHh32mVeDypHkFnWc1MU5C6A87ecfsGajhAExSemSE1GkonfTxAxgmR4rqTpVmMpWP4RXYDGRZH",
  "key14": "3etFL7EVhoTtNiPPEA7V4QqeXGQSbRxEDkTsAPKrPeCxA4ikeHn7LtcZgmbUS88vyBRgLGTYtLHMKBHzt7HsHwPU",
  "key15": "22mctsXtGiVqrsvrAzkvmiB9p92oAH1J3Zra9b7QPTdGkYZqVkXZBgkPQVUKqGwXxZ9gLHRL1dFpwGj22ncgyBZV",
  "key16": "49HLnK4KCFBYsUpz3gZmsvgvTs99LdP3TQZ3zjAVyR2UPNpuxThBikwvKHcrnr14aVmWq9WrgLtb6JwHWcwuHitu",
  "key17": "2D61mA2XkTTm9quVymxVxQU4jafSyUkPxEzgEmTP96e58GeoDeNQ8G8V77BNtajwED8fShRzKLizpFKvjJz7dVwf",
  "key18": "2ZCxmpey9g3fa9RURuV4tqV7Pcao3M143WkR8EKjuB1VXs1LqnHQmRXZsemsn2Z5TsTwZ4WrWYnqq9nMSHUSuHtR",
  "key19": "444xeDfEBmBgshcsZioRh43hLcAr3NqSqCJ7QYFZiuok2SwmukaFVaFWqYRKf9fWhm8CeAdCwmLhVxrtb9UahnhA",
  "key20": "4SEASSS4Q1ZsqMR8KPcvjcsYA9Q5EXUHPHcuUne1WWDCJFA3c37nVZtUtMLr5dTBx3RNPAiA2pgQm5CAKhT8JeMs",
  "key21": "3oLnwJj8tTS9JG3LkfEms1Lgg491hGQdKCwnrPNediBRDR8X46Lc8kbCp1JghpV8TRbcyuK9okC5EAxw9MaSrhJJ",
  "key22": "2ibPhaPgSNPGi594fZfmjg9ripUmxeHru5NBkkBSbTYUaH6zUkH45WHdm8LcDFpt1omqJtyK93QGG3PXfWnE1C43",
  "key23": "2bG1TqdcRop5d3zyGV7S3AyiLc6DDBdaoJWQNE3Bit5quWnFXXe7phRdiKrUeWEZNFtPoR2v6Z4MC9XgbidUJWYV",
  "key24": "2csjPyiSnJGFbTxai2zDXm33MG8gETQf48XR1C7fJuYrZnCuZkM6qrtwFjakCwNj6auVWKHEMDfC4tpZkiXndBB5",
  "key25": "4SnssKJii3574K5CH8xfUm4jYfWit9k8LFVRStspFAM48r4QtpWzLQJGDEfTv5UNiu9P2pTSFvCbWyd49pukNwRa",
  "key26": "3DT73c7H85APxbFQDEjic3ZnUu7bwGxXyXNKCeKgXvgFDP6PAqUoD9qLUoLYpBt2e9vN7hU1Wv1uM3ts7aB32uED",
  "key27": "2H863AKFxLjgToStPE6hQ6gLM7S6474U2ZLPfeqGcYMyXrzagf4cRYeHGxQ4t47Bwfotb33JoD5EwH3XLqGVkeRy",
  "key28": "3VaU7XAQBXAwHcXK2icsr7dGMFcdz6XGJbAg8XhamUixR6UpBLYfkeD1KF6toJwAY9Gm5po5wmQ3326U1pCp2ujc",
  "key29": "3c7vvbE2ghN7tmTApZ6cNMf7MbRtV5XigquCTZKERR6bryXbGzc4K2iwCbk6qHEmkZhR9EYYKpHSqbswoYPToqzx",
  "key30": "tP7VFHThKX9tisN7phUBGYQXgkaTPHudqTC3AcCJjNQNrtmT8PkBDsGav62piqZCwKwh2YjUq7gkMX729RBLwCd",
  "key31": "4vE8RkVJEAUSfa6uF5g2kY7QrJisy2D73vX2vdEZCz68MqGQfLmGvtn7i8nsb1mwSsW24jsoHWANLadTWZh2T64B"
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
