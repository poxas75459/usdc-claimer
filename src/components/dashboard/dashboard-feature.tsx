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
    "5TbP7XvaFSm8GM6qkTQwWTR6cF6dijpWRMtoFqmzNXg1RekBurgwhNNHWSHV8FjAiY3KfLxmsEggsWjYRsTyFf7s"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "bZcumABrVzN7voyFCF5R7L1jQDPuVhdhrfQQU5EHMwCjwBsuehrkqBA68Cq12JvCVCGr1cdPyLNBdKbWTY9SEUP",
  "key1": "2SUAP3zNoDEWsgP2od1XReKKPkYjjYLmPSiZ43wFKJyf8ZL2dmzp25DnXV2zYaQSZADtsA7BQcKFzeRFoYPQ1gr6",
  "key2": "2vyxy9UwnYrNThHfQ3JcshNdXzDdaviVYBvGR1sxKdiYPHVYXuswd8feyYUEmrYc63kzyFSkF9VBmaibeHXkaXY4",
  "key3": "5tsybVvhewJ27soYBUERzh58JLUtcR5NiPk9V33Qgu6wvhdzpsWRLQh9kyZQz5aumWDU8ZQe3unFEhsgd4UUPwEg",
  "key4": "2tsDVRzug6XToGfG9Y1F1MAH675ZUQXddxh24TrS1EAXMLfw9S3fZdxT3nChsx5EnjskWADtgxCpT4oW9UF1cXgo",
  "key5": "5sjrfjWRpB2SYfUHCh1u9soycAMkF7wuZMmtJeEhSY7aLp6iGEUCeWg4kk8YNPih4m9SM4zm12SQ9mToL4L7RPTF",
  "key6": "4RadKWZfyCbYdCLkXBah5KDSeYpccQZ6ZZV3zf6kJtZAKbn6aEjVKfgBN3T4h5quow8RS3oPbpb4F6P9pCMPDvgN",
  "key7": "ihpUCU2Be1xwHJ7YVSqiS3kefhTMt1p8jrffnN4wPSNDoJ9xhvRAPiXe7HR7ZJ8XGYsCmmaJQ2dt7myDL3oS1dx",
  "key8": "etLVSoezWMtiEwnUAcnH8Yq1wyZfCVMzRGaBkfSWQKDXKqFH3a9FNXRi6Ein9AevfivnpYvUTWoLzjod5HVdqcD",
  "key9": "6BGBPFSxJBzJVsaYinQWsXihMT5BnmxYRVXerzyK4c3Y6WzkFXnMB8sWbdgR2bkQDFHuSQw1PCSuUai7qRbvVEr",
  "key10": "5UhfcVidNiFick7HN8zdb7PVwTpAgMsCxf1Cf14R35WRDSpxBjzLWNfU6ncQbBU65aXQ1ba9afbPkpf1WEfjmhDJ",
  "key11": "4xHHCM5ekNGxeYKPxYDo7XzoffWCXhxVZu6SSRkVVAtqiCJmYYHHT6rfvsmTefMr1d4dDZj67VgYKaFU6oJWW5Hv",
  "key12": "UjruE7jyF9JX7CY47sYzFc2hg8Latk3tY3S95991FEJciwu4uH6Wi9dacmVLcu43CCwmD6hvcgXM3JEuQBANjN7",
  "key13": "5p7zri7YQp3SkiGnd6cjqvMnTnRTHAByqirWcUqnr5DoX3w25uxyDd9MWohQdDJ1d3j3aZ62v7cDZpqjWHrq1Khq",
  "key14": "Z58oavpWtXZGta7oqp2Vydvzi1bQgDUvDPerrq7Zw1ECX1q76PhQaabh1yJXVYiCKMwe5u1BQ7tJiwHNcQUdGM9",
  "key15": "3fM4aXqv4Bf86XCVpcaAjE6ngvJ8gDeNWqgNHb9McAgQvGRUNPMmvBQvPoGxqbZ4K1aZJAkz2bqVJej8L24d46v4",
  "key16": "2xVn1SwJUiTGQ1Sw9BK9EZjoPk6HrPB48fdbxQSSj9ai7CZWvVWWTWaXmws1mM8gbkvC5LQDJLJTzc3PwcRUS9Js",
  "key17": "4bWsADA1m7QHFPbodEg6aUwHbEqQVncFQiUu29z8qaEtjLzY3pWYx9EEKosBGH8B3xKqWyGaQ18Wikxb9yuaUB6w",
  "key18": "3Qry8YgtWjnwiT7DRH2yRcL8hNfkFbwXMEeSd8yRFiHbT1foESab4AsmBxCpG3EN2Xt7JFPCADs4B2hspb9iBKdk",
  "key19": "5juRefWgHwqiGgKrVmYwcpEA3xAmzokxx5KknykABqX7dwwjHfAeJmuPUEJgiSLNBkc17NrJdBCox3aY4kLKGkqY",
  "key20": "3dvYDc7d7VMuxBd2RNhyBPMY2Vgpka7sALP1JZar7uTKn2wJCgSv2gfwpz5eZ5QudRMpcxQQuySbh8xy1yNW1mWG",
  "key21": "2WCSM4HbhgttcksBwGC2ZA2uhyJriZKPh15Jw6KnMnuKuq35tjeoFYizeXHij55rgK7aaRowChV4i5L9jNFocPtm",
  "key22": "5H9CpKGBgu8WHfW4PUNwU5cPjY5cudwV2gasxGjDMUu3zW7keQq5X6f1ZvpqsuZkdzTCvkvsdCkCLnvUwRtNyqVG",
  "key23": "fBRBgKLV8uRZrZpuhLjwz5QbayzvSjY4GMXUXdcZHV91y8CJyJnZi6ZaQubMhhumiW4ttyZCH185oxUgn3ynwLG",
  "key24": "2T7EzU9rtFemSw3Y2u6V1z8FsnJKGCEn5EfBmhL6z7yKwTXsmXQ4MjU6GS8AbC4MApDdgCU1o8yDe4Ed7uGLQFup",
  "key25": "WP9oSqLiajaNmqp8oNmLpgVDxvLcG4txKcUrLryMhCoz73VgSRfa7voj64MYLFd3G3VJTdQwExAcMYrxw7h8PGi",
  "key26": "2BRuRk8uUJj7rtERSLyWGHsTxsrt2kJSQfpVzoWyR8UJLgcBd9i7MgpXE4pP2yyFYXTUTXQKnbESk7cK9QxoJ5xM",
  "key27": "4BJqQY9kq6VpRVuChvyuaxnfp6nHNfqCeep28C4A5CsLPWcN9Z5bdzLTWZSakRWgdkPrhyK5UfbvzgXwgxH4PjSu",
  "key28": "5optzFDsj6D2TRs7B7DzFruuJQQq4vtftECzVHA59sFSGtcuHGRgmPzCqUYN3e3s9wFLokMJBLPwweviXaqypDo6",
  "key29": "4mvR1P5GGbLzzPoVxLWLbKeoB7FkC7Uro7twARTWVPe7rMYfcJTotQunnfiLK2LE5Wwg1eX8ifJ4onhYfxQw4XZ9",
  "key30": "5Urs2tRYmF9sy8n7cyFeohx2wN41SAt5FyUHvZQDUrSVcGbYu3xmLH1wxc5TxCTEADHSG4s8TRsKoKKQrA92Mpc7",
  "key31": "4QP4i7rHkQPRvK7P7WGBCajGPepVsT2jFzhkmyz2eAKogUGPcKUyXNJdZCxsVMudtwYgxHZqycmkss3iW8HwoBNW",
  "key32": "4BPMVyoNDxD9BuXM4zMGg8EKZyShopbGPX5tTRyBeEyUBc6qrGpZPTw2HT3UJSkjFhhq4MQRCwAPoazsXp3CsiDi"
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
