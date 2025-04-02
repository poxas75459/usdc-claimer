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
    "35k7xfRwZTJUJ3jNLcpy4t4qH6wcJnZhWCuNnjBx17ALzuoCoJoYvFeZGohdHCw471yyg9on1XnrRjZiNzEfchWo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kLLVSzrdiXmf7zu84FhzGMSzM1LUHjyQz1w8W2LRj3Y55mVLJuvVmG1bhrayTBjxucB3VcCtzPQQPAjGwufnAzQ",
  "key1": "4vWLZ3F35Auj5XrszC2UhpXvz3vKRuincZNTAfefoQKXdzQX35VhEynrkMdF3qCMREHvUQgRxwLNv72yQ2a6jtiD",
  "key2": "5UCsXGgRwfZxUKjvLJvHjZjoHvni4jieaJPsqZzAXUJdkcHqsqDxDEbDLk6ybsxSkXHLSX1g8UM61sfMUGE3LVpT",
  "key3": "2b9ot95Sa6q3pKKhYRFHdgEwWtFLEYtiKqAL3weATvqnBsJfmpCV6etkxgxVC13qiPYDB4e961g54dfvoaZrd7Dj",
  "key4": "mnB7yeSC486DjMCSTkwqHtg5mesCHyAW9LUSyYJ34F4FFmwU36PgKrwnXr4F529YRTef4MYvnHZYXUG58QeYGUm",
  "key5": "3eMP2MzgmnkZtRMoPWEEH4dryHrnZXJgfnqUjZp9SA4CY9iDRTrUS5hs5fBoCneQYEnYhP3ifnncdK1i7mi9EEat",
  "key6": "3Pq2doqEEPZfqCLnaodYXgbkmnocDsxSLx3dxGQcVwLGsHkxFYkYrzGZcwc4JgFppw4YipKYKjXWzo88jUEi9FRJ",
  "key7": "51W2XbT3k8i4WvY4fqG7buvnPxgFWCZJUaPHPGNtuPP5tuniVtxMb3WpmDN2RcZeuaeLU9cy187PZC45Nnw23Y2R",
  "key8": "4UTFq9pxvosiRxnqNpSsoceFLkG7ENiQ8vTxQMZZPc4sJa1Kac8kSoCEgoK6GpmrqR8MHBgQfGESBesbdrcCXGNZ",
  "key9": "4ixxQwBS8njXywU7V4hHqWGbuW6pRhdmCaBcz58awEuTxsmqUH1a1dxHiW9UYqSQnsMiuYbZjPUQrFgqqqqgxupo",
  "key10": "42j82ziS8YckkEi4QUs9YQU28apN82LFFwELN7RGP7Jj2qyifggWGTxf3XmSizZq6wiw6qufDEmo3DTYimLavXDT",
  "key11": "5TCBYVwrc1dfEDnYtmBDernUyK5G5KMpd2g4vhzCct7a2DCYPiWCbTDVrU4u7chH9DzrKpPRJbkc9EyBZqpa9usb",
  "key12": "yQE5epuhA3ps3sostMpP1yQRVJF6qioCszmB9C5LFDLqLAAjVy2ntB5sPeGSPvpNmRyURXjgYwPkXgJabdbx32Q",
  "key13": "2qVYyMNEG1brnKMUpAt8oEqXLmcnr6QQQLMpMTjRck6oadcntrVsYoUGx4jd7WgMK2sBsF7f6qGpHdCeezA4uciB",
  "key14": "3ouXpCmnwCkEBD3NL4qn6waTXyTwU7Ss1j4TW3afATyKb3Rtw1sHd27PjjWF7BHVFfTy3ocQMfQH2u5nEYS72ZCk",
  "key15": "3ErxTx5nuvW975bdAoybkT75LwNtnYBhme5NENDUiYruhbQtNS2Qgtw29b7K4ahsLPv9G3GHDkefDmnnqah6WQqk",
  "key16": "4jLeeK9GYSsBfB2MWmrcukVBXvotxkeDB5hY4WaLthfPzzRwFzJHxbcu8tm3u8vQLWUZfBGmsSjR7MCXnVsn3HiY",
  "key17": "U8p3LGSfMXSC3wmqVBxPKS9LU7wX6hAmX1ab6gzGr5jSXRWLfWKKf1FTaMmxKcChD26N61HbxcBF7uU5RKr1QKj",
  "key18": "jm56S74K6UCqpM2zQcCECMt3s8J3rZF4sYd7dynr6qouqqUYcFNRG4hoC4k47XmYhKw56dZ1EXhedGMbDrsqC19",
  "key19": "iG92ioRQv5Mypx7GVwTV1Y87rB6cAR6NqDbmBcfr9qysMgQwBBp1FqFV2ytViG3wGqzDRjotmVMKwo3KK2vKJpZ",
  "key20": "4gzNKazLhpxfE7NcnuL6ezWy9TjDowYdVdHZikYZWNswq75seff2x7A1SmqRwEyz7SxaQ12XAUGksEBDsS8FLak7",
  "key21": "CrLYUx7uv4p1XRF33JmdoQ3an4JzrxJiRFVH2ToXxzVa3KnLqgfNw51FquZgGdqxoCwKPcdJP9BpU8PDybedrr7",
  "key22": "3XTJdAZzTTMHKFA2vGAcW3BYdatS58Y6BR6WvKLiH1ohe5So4Ceqk78etV81w7SbhDRTs1WM4XDF9AFqEp6s2mAh",
  "key23": "3JUi9QAtyTUcXnjmVmenN8i4TdtdWMU5buNB2g7Kg6zU6tByLzaz7VMLzZuYHWoaPW4D1o1tSn6AJKeaqxTgdsf3",
  "key24": "2ZMppQR9ueAH5evxBjwM5Bd1CzaPrqBDTVw1RBc2baGYzjavGfZSxs1iNbYXnRZLXVSKKznKqx6XEgnYn5q6qtmg",
  "key25": "244QP2B5YGnXsE8YrsvnFFLJ6KNVgKccpe6EEki4PM46uh6STcjzSiUe28AbSQ3w8JBbcFZ16iRhVGMp9L9TjAYG",
  "key26": "2NERbqtS85EkmYvZYci5PgoDRvnCMUJj6kVRwwm2Se8GCaJwga4LiuD5Zu477nCMr6b5ckLqmw8nh5xe3RPvnw8G",
  "key27": "WzjRqH523BJFTTKbs6brNM13ow3NL3XAZHQABwAsXs9XagpqpeiPsD1myakxmuaCocM26M4xWyxwdzj32E3MqLs",
  "key28": "JNgyoqfhBdsnw1Fzcef2u68vNRDU57xz8yDJBTDu2wAaadA6mupVmmXGVFCRSvm6vyTBR2p6sNw1EqB81zqPK9y",
  "key29": "45TnmYrvK3gB3cj4LYMpD1pz1twuFv8osk5QTddGEmD7h8po9kAFTdHCvZ8ce9GMeJE5P6nukVrAbUkQGSxrWuUg",
  "key30": "orHbfxwETQoaHQHhJ1pRN88N29VdNLzwPXzJemSst5tjAXnzLKTZoHPAN6fxGUhBxpKvQF3zD5srPhUfMvoudRE",
  "key31": "4PxkfR57MEYHRb7S6iiD5ksAbZXJr1q18sYMqsxfBk17C4qSz3H9UZDNy4tSYMwWx9bhLYr6ipjRsrd7GDXVdBND",
  "key32": "2joXBw1UEFrZQLEbxLp4AUfQEH6XEywV7AfFaSz1xKKoMXxZacws3U1srLjZsfmjeWkyPHLqA1nCKGQCQZ7b7wed",
  "key33": "22fK5WZ8QwbXMuzKdvRgJS637CWMfUM816kPY3kjR1xFaJpRJkXe46J9t2kbDJ8FXMTHmTL6BL8F6a5rXNFqnhz5",
  "key34": "61fegSDtuu9Nm2HjJszJxG37Jn7KsR8gxVd3w6t92DBFCX1EsLsQ2z99eFhenj62MQPgmCC2mqgJqpLf9pHY2hAN",
  "key35": "iDMRw6KHR98zDRQdW2fotjNnakyyK8owZcBYqHbXtypcu3YsS47mBvUNGZ4c6QfocLb2tF44oRBMcbZzvPrngoG",
  "key36": "5wyH5H8zhWvFX1Hyv2iq3M9bTAphgRfQrU3nVfEq8Eb8S1aNoqZfRqTtjDLZavkSv617WUuknvexBinuQCDpsBsX",
  "key37": "4JdgMvip6kwsGBSAydbuoDopLFBLvEBQBvp5mZjTzVp664wiixwsdf5iYG7MpzK7jmVz1ierwv6pG5R48yWd9SLe",
  "key38": "86DLKJ94dYoLAGsCR7JwKZ4VLrs1LW5tcPBpSMAumMZCA9CcsAKtXj3hcPxNX3hyg5RM2Qecf67kxFe1va9bWsh",
  "key39": "2tHxaLbtbW53pCh2wf8ggNyHdymokfHfEgCgC65711XNLETxyC7tDiQgXA5w7u8JRrV62ctiSK3WVXGm5ddmETLj",
  "key40": "5d3eDpP1eeYVvjeSsamGemu8JB3ABpuTyPsxZ1H6rS6bvkisKDxE9Y9YP4CZD6asXocFyTmeC7aE9Q2uEkDE7B16",
  "key41": "2x15Epsj14sQKBfU6sbc4o38Sur1hH7XwqoxemKZFRAGcbJ58H76Vx1UTBBZ5CwE1VqaNTsipjHATxCjnFiVTNKh",
  "key42": "MZMJSu5C9FhhhMtN4hBLtDDoeh6ZNCoDKRphjYskqh2s91j71UdSP9cuPJ34x8WnooZ2DeQXdgnk1DDyZFyKoAG",
  "key43": "57GyWj9rTxxn4XqFbJVVJ2oLLkMe5RYSkAivWB74zGnK5pQdQDpHDRXEQsen9cXmie1dwHow2YGWjQUssVVc8P7X",
  "key44": "cfBjvpTYm1rh6jJ143L9qsoCHigZnT2toW1MdUjUmHgk8u5tdsFqVDkixYrPX5C89iAEf7G6JnG8E3WmRFFzeXu",
  "key45": "5Z1RVLTUKGwzfiYC18rNbSWZE87DRGLfwSFyMPuQ6J5hFBYLWk4cqdi9F9Z8fgmcHk2ZQUaB5w8Q1otESrb4SD5t",
  "key46": "2mkxFThqAJfaU5uoQdtDKgu91fhopDh8eYkmWAyJuu4r5EWiD75D1gQFK5pZ45HyKW7u5HvJcLLRwxHQBgy9svAn",
  "key47": "MkX5PwvNPwpNYQ8RTqLTrGekPPfJkkWADnK2989r5KaifzG7iUWDg9ogEKfnYWJimstAm2zqQcfPyR5CdCYgYZJ",
  "key48": "5yLY8A6SuhJXV2ZXMCoKcnVJTtkmhEznVfFnTtZ9yGnJU4Hi42GCkiFXxFgWigoeyRyVdMAuMa5zwFdAwuAnTn9E",
  "key49": "2S5ThiG5w74ia7RQ4EiHHXrKxHoPmm5U1M8By8Sce6hPzFTJohgsvMXwZ17ArYcSAJa943woZZJorSzQSLwD3uWT"
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
