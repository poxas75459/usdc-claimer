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
    "2tEipsdpccUbjcTJjPhTtjWcDpx34NSqACqHuNKKdzLA8p2vzse1DDd5R4i8cdJvQjRSe43SsVN9uuMpNPVwa1kn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fta1EhJvqMribULYwcgVM68X3P83Cbwo8d6Qvk3zcvJjgrCEX3NFr6HzngriAhKPZYtyNDtfvqSQBogu47QwEUG",
  "key1": "5PhwUqRVkb375BsyXSGr2zxgcDykqiYnmoxufnfYfCFsSuWkg6GvhuizPiZakvwVNiFm56V1SgvZNt5MNGAqd9Fd",
  "key2": "4W5GJxph69Yh4ncwE9UfFPAgvehhn3RsMJtVFM6g6ZwCogbdBwX6tv7VM6HiZ3XFjbnvdfu3V5uxgU22EwUo8ZQc",
  "key3": "5fGGsekuEeDkvtcFikvSXyowwMXU5z7SNcimviDUnt751rSpJgqMqPVkGFyS7wFD4bpvTGzUAiZ8SnSXa7QkCJoA",
  "key4": "4Uqg6ZWpaZqi7tUsRAtAdEDVPMoqQv7RPD3syHg1onfCsELzBSSDUe3CS4CUaEaDsyvD9gYSmfVfsYDDWcqYr2fG",
  "key5": "YhY9VbeP2T2itVTodhZahMjoC7KsJuvsh9eWMgBAp5ci1vRBAaQgthG9LmggWiAD1b6BLH8ohpFGqpfPpvWQQjS",
  "key6": "Guyf2nL37sQ7KqEvukum9zcdT92HXxP55BuYn6ariF93F9ETdG1TU22oGbRa65Kdzq9PF2ULqi9b8L197JYPQZY",
  "key7": "2vE1nUXUh2SroBEWxJm8LUV6PRiH5dtaZ3opb7s1RgsmwUrXfi8DrMAyHZ9vhhLgfHNyuBxVpGHBkWRXdF2ZyBwo",
  "key8": "wGJdYS3mtPieDhDakvFRU1qFaMGNcv4Egbd4CfkJpfGeoTTCMSafBEkCp56NdhwBhBsK3N8ULEXUBn3ULNgFdjd",
  "key9": "5WLmg7MYV55znv6KyGas87LvtzYcjXSv4v9GSjdutC3VCKutktb5sXTSfQHMiCEFyWzhBDvcZjvj8MRdjf5CcqtS",
  "key10": "3sDTZVMsaPEJJC3MYb7a2omscivC6h8vXhj7P9Fsbf3caWVjdSkmGRXCyAX6ZcejpjK8szgLH1sZtudsjDRjP51V",
  "key11": "YxRb35V8Esu5AcRvFCbc2oaRHXRhiTivWnpLZtWUdtE1zEqQec1fkh1TFrWXC87NhdorzXA9qNE3Bt9HwGqCsDQ",
  "key12": "2FbnQ2PByGF8yqxyvpGXLeWBWzoc14iCWixj4BAgsuEXQoh32bX6KGYeC9tN3sAnBa8Mp56oaMh31vrFBRGRb1T4",
  "key13": "5wzSy5waRqkRRajFFAxCbahz7H1vugNAQo1Fqsbx62FvrjQTcDf7XsDuPQp9dwZkpTiVx2rp1Ku3ep8ujonzPpNa",
  "key14": "5jW36zR1wa1GdPo4f9CqecC6Ch18F4T2UctGb8FkstMtDSfyjSwK7rqKXbyjCdQsMpng8cbVDnneFSpYoQoxHBpD",
  "key15": "59edu5nroKwtKGcD9TNxTyrZwa2jopiLVCFDoAjGxvUjynkiK8RZhCkD38N4JKSBo2zJu2a6mPseNEfvhBkjAizK",
  "key16": "3PwGMjDifBSEfLJ1LdaYyziXKuKD9KLxU6ZyvrKheF1P5LX21mrAvtmCtrJ6nKPQFiggJrsSAuaQ941UaSwsSTsc",
  "key17": "2XyfNZAMQjtNeA7ctCUx8tb1eGZauL44ZTSMiED66PLpcvCxwhq492RZZKi6BhNVjodmWDSwF2LS46tgAgufCR15",
  "key18": "2Jsm81JckyHaDYQJhV1oRebMmb5fuNDNX6hNEmK4A1BCBZURVy4G8Dms5eT37RthKVRHaQMNdbz64SeqRopAF98Z",
  "key19": "4eB3WdWw2C7M5fdUh9dRD6Kn828xvqXLERFrQDxuS8EVqkZqrMSxy4zptDkMPQEHpKkGXbkdoXieNjRi9AesUiVv",
  "key20": "KaP6Cb499BdstGFNdPi7AKHVVYy1K7xSauFFR3DCpiF2b4K9tdR2twapLphYERTRzdNNrFWLRhp2Hz4og8tedzi",
  "key21": "415Ei3UnnNcn5WEUNRXk43hTo34Xfv6gTio7qG4eM1DKbU4dUkksLoapxzEnSqdPiUDAUneSLtcdybUFFAB1Ley1",
  "key22": "xmh6mrtveiYWWFjsiswMkSdLcTAektyu6TWxJHozQVBDtzwk1MqZQ5JQ2wSztdboqzRrRmDwfymNiFJD1pJAZ26",
  "key23": "2tcoz8QVkZ1LskQb25JjTte2Rb3roSqVXKeE1tKaLob6QjWi2upfNG2WDxQRHjNMSbwn4NCWNKAddWbW9G9Tz2SD",
  "key24": "3C6KYuKTRnV4szuHskZ1X8xVBL4c6hcPEYzcGsitMDvFybZ4x15GW4DTcBrGV6cErs8fDi9qeBxwYtehADnqf9WD",
  "key25": "2FtLN623tRq7vrKMqMKpZnBjNrpaAEiwhoxGY4TEaUvrnsxjtZfZYjQjownoCVz4kK6ep19fztPEpChcQQqS7hDS",
  "key26": "5y8JmF6QapYKkZ1gr8DevwpVGVpv5xYM6aW8qcURaj11JHksmTfRAagM9wzm1zksFcihiFhqFW9cebahFgmp4b6V",
  "key27": "5aJxHweqViHHBwcJNLwwqhJBgCGcT42v8Qyrb6FjXSEsgWvUA7n5hGdGYdkqqzRyx4ir2K1cmvRDdCPZU5o5ET9B",
  "key28": "4p2bknJXoZKcWznuBZTLvq6EYmgyakHHG6LLDboj6SjcUAUdBfhVE3FT2ARkVZ7QZjCAw8kPzL556CB6HvQ4SG8M",
  "key29": "5rDGKvQWb7LLhGP3KCb2MG4PewbR2cNaDYfXRKfCQmyo2zFNLiNgbTP8gUVFfh7bZuUTvbyao9Y4jXCJvB4t288d",
  "key30": "358XeDq3wYYxq2XzqY5Gr286wR7mkiHqH9umogWoR8sUSomeaQiNXGeXAVK8CtR8ASggnw8eHGPKfg7y8pNjLTSS",
  "key31": "2C3pYoWHTuthHA2d2JjYZbVRXNv3Podk8oGT89dxpjxaQHA6cNM6CFazbZautTEgJ9aGitTadiej6fdmUow4HpPh",
  "key32": "4dD9xUHcwMUA9Zg81vQbHkLRex2vBwvK9MGeBnpkk7JbRE38U5B2GiKZC3mR1ZfiVrjXDJoseDUC7K1JxjhSbYsE",
  "key33": "4bo6kKvDocZb5mEgE7KgronvrmrsVjAouYDYbymU26UyWwu3PvTS1ZUgsSX6MitpHZAf9j5NsmeJhRadg2HctJUw",
  "key34": "5KbcxXZCx5i5YduzM9sD5CbgxzZ1wErrxkRnMKC6AXynrLUGw8nfqJnynAA3LVXmW1n9Xo1QhhkaXMG6B7pae1gY"
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
