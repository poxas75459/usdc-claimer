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
    "2vjwFJSqEHz9xgkzpBvFtX8SZzqKvW7FdBBpMLGFVTVKejZroUrsipi9EX5gpK6nQSxPa3yvETZho9Y75C86J6Hf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rAShYifsW2tzXpAdiJ3HkdsUyxtLAeacnqFE4KuqfnQXDkpdrv23zrUxAU8WaKxJpsMWSifYNfgARgSs42oQiGw",
  "key1": "5EEDyN5XWcfJsYX5tg4t1kMrxcN7kGNDDVajLPFiizY3uD9BqmMe8yzDqekdKpYQuDxCdZ991Tbsb51sfySeeJLi",
  "key2": "4H5RfEisSH7JhDmeyDHh7wJBR8ksuYjE6wn3e8dezCA1droc7ijMeCSiPZxvoFcQBR2Wy3DbhUWKadEdUWREm5Ak",
  "key3": "3y3hHFyYWS7wSGgaf3jCe7sw1pRoi6SLZD1XcD9ox7xde38pigexyAs4dNqfRDztbaWzgii87ti3gBmLdVbdzGwr",
  "key4": "4K1WTXXBAP35eAVdw2E53DtFvsK6JRKMhbAQnwWghR1PjiHwQ3gqvGq12moS81FvbUKwBgxmyPKwGiVWmzePo2LN",
  "key5": "ndhwkC3VSok1WvQ6AAjTQyZbZ6jzLyUPNdoCFGo9nAsF3EgLDM2jjEmzkkN75wTnzYB8ttgkrEXX4PUxcjExBRZ",
  "key6": "ZdLfs1hvqo8mg2YrEtrZEKwyCrRVysBEyQo8Zj1Ld7uYeonj37mftUnEU8QZNyYaK8esH8jt9wuG66adfUa2YQN",
  "key7": "5HoZrGhqejxHwRbwHoze6GipMm7dsFNKmiR6RW4jR6G7Jk3kJ3JxSjqmsxEyKnkZCAbYQaXDzaeSXcPzbKhyqNm4",
  "key8": "3cyULELtK5GKHjKxyNpRhmZmLoGawbRZRV1AmrUK7kVsHyS3pd96XAvpXWwPDCZjZ6L884NPvQnf9z6rYNoTvXSJ",
  "key9": "28cxZEM1mxBnRJ3wpRPXKS7ACAgWgkLGDgjg5pzSJRPcyXYTjQahuYGCKtfLRe1kxZVxNoVABCjAvrCiS6WEzASZ",
  "key10": "U62wCMc2c7Tk9wugaepwfzxqXVhtEedwV4VJ9H1UGNME3pvBpGkqzF3TCxPSvrXGbTTpWsVxBVzaoqS48A9wtjo",
  "key11": "dVdMHtmXsFRg2n8beLMHcF62wj1HfcX1csqcM1KkEmzqU55G7y5KgBkpXcNpFbeVnwrfi9X77kXffXyXNd2YzeK",
  "key12": "4Tp7uT8V1qLK9Rv4aZgZka5we2c3VgvHq5bkm5MtoX5Gjf1KcrZgTD2rsA1o19fFiv6p261fRh2SzDpTvJd75RxQ",
  "key13": "31bLd1nv2UewpAohruNfrcuekHtzcPb48qxoogCxpc17xPrZzyqgvKHSkMdtbXjiMhLEZfAYX7bWYuRuZ2Ek9vo4",
  "key14": "4PTUq7sWEV7F9FKKDJqiBaqrFufYhSMWkyew5Lqot3uYTK9FPRsrQMe1vf2mNydUKUe6HR6xtpKZg5Ahs8p4jSAU",
  "key15": "2kjQZaivXQGwYft6hZuKh5Eb15yJVYGeUnq2a5ZkqKeCxiBiAZjYtft18ujBnJNkRsdsFv57sz5q1bhiteKMuTAN",
  "key16": "2vUYb6cU1y8NCtdmWPARtivzGpVzrk5QQBu3DpDf3TDR3FRHn4e7DMXHqop25PizhUnbzLRQFJPjNEytHR4cfj8Y",
  "key17": "3kagNrK9zsT9GBMYfqamZWts7NfFxhedoRuE9w71fvn6uh6pUFEQ8NWazzX7tD7qdyLfZgNcGu4kN97QinJ3WXHy",
  "key18": "2AmyhUtDKQTEdYpPrZxAymX6iwEA5KPuidorgHd3R1q1SAZ3ynpq4R5x89nhhiAbFjebcKyqq6g8kxTheQA3YFYN",
  "key19": "4FhWFHnrp8jZw7GvoPw7AHtrbvoHNz9qe5Vdy5qHx78ohm97bwxcJtcmomUYj4x33HsLu6MbZS1z5YSVKaP6L138",
  "key20": "3sHe6nXy823aNwAckxPa9dKNSFWXo1RUmcSzAqGnhjtQdwBgBrP4Lcc9R5zqvReA5RH33PCk5hK1hC2Y8Bxf1H8J",
  "key21": "2mum7nhoYj3jno1LYMvcyEqanpQjP3Fwzxxf6hFyS8BT41atNHNPCZaRRDehWRE5nCig8ePik1SP8yRZNNsQc1cq",
  "key22": "56wyZaCFMN9vKToDGcJGjr8UaPq3yDbe3fgTwqKW4nZkjkV1NexFLAHPzTmq1UjVCr4e2NF571x3mq9hyseENRXn",
  "key23": "5UhZpQv4trLqixxE8TNXdi4wq1eyu7eZVaCwGp9emJG3yuv9c7FjzucLiXkEFsUqfxQagUJdYXV6FDzUZ1NZ3EGP",
  "key24": "4NASCvVvbApBLzE44KdibhaSQwTbNxVKnWg4W5asVxWVtLJ4B78HiorfwBUHUxi5F6nzLZDjyHDCgKKzgoDyjm4c"
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
