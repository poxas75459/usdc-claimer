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
    "2H5WUwoZ8RQYCgu4WcpP1eEBDq1WHzJcbambVzNLzwQRNpmw3Gtquvgmc3KpvKT6Cbmk7zJehdjkbe4UoBkccfbs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4UG45zVQsnYRt8LzrKjPwrP53eYXcurYMS89GTgZdqw5DCWPMyCGisv8DpgAFykojAoZhAH6PbXhg5duKMGz9ru9",
  "key1": "3qE7xWZZeMXRhe17gx9TGHYEqQrZ4NRdTji2La4ipeUHoHStFsbHcN62Rn52A6yvykDFUEX66FQGafmn9YEFemat",
  "key2": "5XE9hP3XkeApu1oaUDKJB2EW3VNaMFwqjhGGRciaE6RXgGEw31oBsx6426Q3f9XyETrnzPTPpmTo1g9BNceuQJYS",
  "key3": "28AzWoK5yc4CtQUAUgsY59NAJEYEkVEXJV7CH7aTyFp7xYSMzoPTcBZqsGNRAhFcJ365uPMQTfhm4KH2iMMWefWk",
  "key4": "4aqgx5gkrg8zYoxJZZhrf1oZssTmRAbrHbNAgyShe3htiCw5ZiURbdBChCWhQYwgn4haGpNoE9Yzn5S8sMXUAdVV",
  "key5": "5gPQSB9jn9nLTPGm9HzrJ9FFJkt1usoPa68YX5RSEa2eFXdtx2hvUGGXeRxhuwp4baw8pvqTQaabkWkqtENkuAJP",
  "key6": "4CNo9HuE3hSBdb2ZYA9PheLqUrVTYdGN8QE2uEmskmgTrgB29MWVgU4geDsieBS6XiBdjzxsAc4C9sDxebQiPcK7",
  "key7": "3F4bzuzwiCsxXsuVMtQJdPvaGTiy1RXmZ4ipCGv8Ua1ExSweEmxRU7qGfCQSobWwCbW5MbaRg3THXnrf3wu3vTeB",
  "key8": "51y4UeGe7o93469fwpkj81Lwq9xQZ1YoJp1Nps8kuqEZALyQ4AwWR8jqN3RQwetvFHzeabcYDkMNPQZLTJuFZjpi",
  "key9": "i2bGrUw5Zqf6NxwLoJWkPM8oFkoThwGCj2EESfXTQv251mx2UUMrcxZSFYaxJ9NzSnu9KT3yWdhpZsxKCjnzvQ2",
  "key10": "4aQNrAnrYvQuD9Sia4jsDNtBvC9c5bXozvnW6JqhjLkPuRHwbS1MJ2zFBtfGc9xJZ8vCQW7mCbkfRVmdGyRR6mdT",
  "key11": "4yKj2U2BNdZRnpg2NGoMeKvdatWVVqSQQn76NhksZudySJTTzoazenxqhsH3w3TqP1WLfrDixrWUvczSwme8Jfcm",
  "key12": "5eDctVMcUPHyMfpYpZ41G5DYZx6MYGtFKbaJsusZ2dnLHUxS1U5DYERAMAErNvkRBxAKRK2JN7FBHyqN2mbcTdWk",
  "key13": "3kD3chAcWgetc9rriyDW7xNZE7sqZZDsHmXfgejyvnxr2juaiN5J8S71mZy4ncWa3Zv9weWwetpnVYwAt5e9Pyr5",
  "key14": "qUdMME3SLyVsNGzdW8MQnaux47KrAKJPum3h9m8AMfH14ne1oNYbbqU3FhPJnq74tL9KY4gcMK2Hi22yR4Jjv35",
  "key15": "3BLhXkqUksZGCyoYbdQUKDjyQUmu3nNtEnJET3XGv5GmHwKj4cN1kmnRV4FbEUZ3Buqp7BYCp9JmDjvJ8upASAMs",
  "key16": "5QRJZD9wNn1berGrtWygPavpTMHEkhDpkrZypB8cJopa7RkWVsz8aZZG6UBtq1deTgKJNaTGjzy4vLEeCUUjRcaY",
  "key17": "4romKLZs5pCr1WTFQMcFmMzQySVM3XRggpCnrd5piZRk3PgmpewD5qLgiZD1y1q1xXJcmM2m3yKy2BS3h5x74WAd",
  "key18": "5yRq9Ge8Veu8pLRsXHTZiaP78deoZRuLjS97AMN8jqukzjqNLNfM6Qy77M65NLAfbRUFN2UCpgaripVQPqp3RaiP",
  "key19": "3rmM5KAYtkJH1fNGDxEYLWyvNyHLPvzTMwUYwv5CjMGEiGZFfQSYrnWG5QMw8gKZVeYNdQdeAUDK2iwWoNpMp2W3",
  "key20": "3pyoxeVeAnmoW9T5fE8Pj18GCzwwimboZ4dFKpBJJPrPyVwod4UQYwFc5SgKdv6uB6tZVvqwXBf2nmX1amCcSdA5",
  "key21": "5hnqv95xs7auc2B1RyzeGw6ZRAVMPSqmSnSz8AyMtStuebt8fqRWV4zGtRRqZZ3dXfxR6QUDMyzoEAqNmYi9TwEh",
  "key22": "3oqxmJ4qK6ww2pWCMejTjVVZWrKKfwF9ajbX7dSRpQeoKu2AbHiVFYPWKXRUSG6vz35Cw6wtyZLM7nPwPHgNxhsv",
  "key23": "4fLEpfLE1VHM15YvvfJmb2NpJJzqLQQqDXFyg4WSeWMSoZxovqwoqm6RyTxu5czHkkxc2SGar739m2mf1PMGZHb2",
  "key24": "5AhzPYNB55o4ehbKMm31a4LFFiGALq5VBVYZzTFeDmYdRqT4k31bqRgYiMiUUtFM73jax7hmN8Ts1jmNmakxNiKg",
  "key25": "5Uh8rCGzgiGtLJ5D1bzoWxZDmGfCmKRNoA1YD8E3NcvrFUPxg7XcwnW5iuUCZtiHGp8bTdZfGh2itNrF21EBbgxp",
  "key26": "5yXj2vMpQboPSf4Df79y7QK59mAPMQLwJvB8rVb7X5gjPTHuStXFSmyK83Bq2ydGnbNSkMyyRZoENqRAL4KmfTJk",
  "key27": "oXxteSRMhVKaas1ofkcLSaWyFmjrj8ef6TiinqeV6g5WuZLpDVUY7Jgmsq3JevmfCNFHswrbpXnzuMxFb1LYx1Z",
  "key28": "3RUzeRidSrdFPNq2BDS5HwFpfLdZZSrinfFFDSDyhhTZewk81P7zFHM2CCNxjGEMxeTbjZWcuF8R8ZpxiUwEuo51",
  "key29": "srcNnmXjKYKt4akhZYX2f2ugVPrTEDVYjxFfXkWUGPm3HYeA4y8FRbc4Zb4ubF6TktQoH4TcHB82J4u9ztn79Cj",
  "key30": "31ZXgBv1N5ixPmJ7ECT4dddQbYNWoyKeRCEt7LZG9KmC2GCJ5ZXkq7L3nnvcrC39Z6jrSSghyT7n11fUmZrzuaRg",
  "key31": "4uUrxda7vaSqgAzojeUi996JujT8gCG1JPf26nLTBaDmUGaFqW5ZC3GaisVWjz6Pxn4qaRUc4wNayutthF5Mw5Ni",
  "key32": "5NmBn878MsoAmEHj9U42rmhPk2sk6G392RjdrekSD8mXCXK8KM4F81gEKKRwD1tMdTx3kAgdjFyGRAvsfTV7EvnW",
  "key33": "3NE89EemCxsVFJ5g5BKtTtN9M7crQjVwVeUjL8iHxmsHyGX5gqfU5jXUgYvwNsgPUoMpzrMDFgAfhw5tevhbD1aK",
  "key34": "2K6hs9skzBFWEwqWqs5LEuoYkfmSQ7SMar2eUT3wPc5aTs5GmGGaZNrbb9G8WGyk8HTSJd79cNaFWVskeDVWqffi"
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
