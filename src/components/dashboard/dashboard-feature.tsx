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
    "2LE2dFuwqZdyVpmZtUJw2FLeZUCCrjubdtfkRiM2CYFDYVRZiehe1VYNaSRxfLvv6uagEGQynQnWP1MmVe9e4g55"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36WUjR4N95ySeHHDyQwYqFGH8ecp4vBVEzXNo9CnV3BarTty78vZJbBfmeJmR4gxMJHK6GNioeQuVYA5apcoStBd",
  "key1": "3HyS9cRNCefG4Yj7e23SR8sMrBmdBzFQYDZv8rVHaYRqmPAqpMr8seGZTpj6bjKRCp6TPpxcbFSTV1wvWZxnQvvf",
  "key2": "3aUTy6LyvxcMrcpTFAhvvCyA8Yxyaggzr42y7QgQVuB66bfEPMYFRvUdGpm4JAb8Tw5vzoP1eZyv53EJfHsUxrVh",
  "key3": "4y3B3ibnUiAjEj54fcj9WVuJFVr17oQn9UyACGj5L8zseFKiu195enLcEHY7NZsVhGnjbdnngoBwxMDJ1KCTfXTu",
  "key4": "5umsbFQuDmAbqgjs435inDyyN1wYG5DjRnRrsp1WADQ9UhnFPFSAnqz9tRjH6A5f9hPPjDGy2AH9Ap1EPUm6L4a8",
  "key5": "2iDZkKtycTCzxnmTSgi4BAmBtWqVGqU2we4JzpZnJJRnpiwyxKmkpk8uCE5Z9rdJJX2yJMWCMXaQRxJ1dfZ6BQAk",
  "key6": "2TqqNKXwcZo7HzijDSu3nq7JLThgEmDwVh3J7wTumtwwehyDRHVL9UiC57ehvqesPx7MMTzf5g5x4SqRDsGx16SD",
  "key7": "ZW1ZTRp9RpznxB1NnmBP1JUAsNTUbZd2evTzYFTbWB6krxH8vMS4CCkcJmS5DMrbguP7Y3sY1uwPiN6ryAbMTbu",
  "key8": "3g4dDUMxgHHwzWA63A7G6UfGSczbykbktcfiEmif8XgPZpfhFKwr1ARgNobi4FBTNNZbWeunC5FGVhZpkLrWuPLo",
  "key9": "24dYkA79W6Hh4bFwKUjQd1RDdCyM5vQd8i11NNWrj64Mmfuy4AtvKpJF1Y5HUgqj2GKDWR94eeADESXKcFmQjN3h",
  "key10": "2cMV7JAXqDUbpVwGJ5QJ4xrBPryKi53X6S1KcQg3kykd1eQ34663WzYDcpaQZE9kGKmQsrv2D13Hrr7JXaK3Xzc1",
  "key11": "2eBpWRk6D9zkM6oVWEkYq3rXBN3ZLoCRGaBYPE3qApJcCxF7wbD6p5Rg7W7MhqApUGN7UFA4SB1jwQUihCsobJsQ",
  "key12": "5eHvgnR91GDrX3b1yofRx5R2EhNdCiFd9CAFWVHsrtc6YBUbXBhQDcM5RFsF5j2d1KuekwE1fLkDPdQxASrEFD7z",
  "key13": "r5bUNsvY7mWsLESdecC7pEH5t95ZxFeArqY1YdcjNUerbVB8DDc8cmaoBvsH4cHJyDk8bavg1U5DbEQEiR875X8",
  "key14": "3s3VAFGDPjz57gqQSjw88BRW5MgZPETvLrsCxsVPhKZp6NmBkUEdwPtEPRv56dJTiuS5vhF4iedBSYEm2xaRPjsm",
  "key15": "5PoyGESyVaCvnTgvNREtDC4Go4UHi8TMh4hn18QFFVGNpnBguXBwgyZgQk3VeBKkzWdFdj6vntLD8FVgqYswFj7s",
  "key16": "2m5bqaUbXbp9o2BAnLDDvhTSgXNJaSNv9oZGWwzdRTgWjR3Mka7ayysWLbWs334zA6Ey7uh6LUCRN8NQiCHA2SAy",
  "key17": "3tQQmBpu2wLWxZKxf9YBvQbCKBz17t3uHon5KsaMdJ9Emz1kzBQWQkErTiBXmg424iXSL3TU1cCEQyvubBGR4Nof",
  "key18": "3M7wejxXRUTsqzeTUgCz4vAFDh5Rf2dn2L9Zx79jWPaF2adihMpvusg8QQTH56v23stjN8t6rfrTHzQpVWWr7at9",
  "key19": "4kYgrk9yUVDd9hD9yrRiP628uqi4943CiN6n5bwvy9Nde9AmGkYP1Jnb8YG9GuakfoF1FKAsuu3bbPBTmNB6TQZv",
  "key20": "3ZVfFwsEvtbXpEwAHdTKyYdr9Kp5ZWYhKEXsHgbSHMsc9xRGqonSLjufpKZb2iHkooAH8S1N236KBVrg6bxbU1iz",
  "key21": "ypPtAwJuhJr5TTYiAv28G71MQtA5vryi1Fji3ot3Wf1ztYPHcJeQqD9kafUiscRKcEtbkqgUDYidFDDzwqz4YNM",
  "key22": "3fpZvzhZLw1TqssNfUkcEYppCtyTkY1YkpRkAn6AaXQcpSHLnP3muxgugHVaHmMkfsmhHbXSvxJTgAdzDx5SjEPf",
  "key23": "4E166Kv5ZjKsP5aVud7921f5LW5FD41xxFyqobFcRBRnWuxt2yd5KQz9NShHWeJw3CXzNffrWMZxMCF7Ux9FRdcC",
  "key24": "65uM1A6wsjVYye9cFDxNcMnAJTPojBTsZUknCshQqagFBCvVV325T3DCHuhbkJ2opXrtuxCtFqVbQDYe8BnnCdH",
  "key25": "4i4SVtweQLkULP6BbcLXKD8GeFBtQFtHKZUUAnUCgnXuNGgib52NhYhJejY63PYQTWKVS1zFFpq9NuXXUgYM1V4n",
  "key26": "2aTbGzbe1kFFDhf3rA597MTBU1Nu86rao5U86hybduuDAD1zUgYFm7LgmB9yLqnV18HHFSzCqM57jKgMy1gZc8xS",
  "key27": "D3M655uyqikDJ9ESwk9wt7oTbZsLs7LFZjJVJNdmRen4KJpp9qXMPTuVivZBAiqmHneXAuWcgqinJvs3k9MqT4f",
  "key28": "2GLh7nKY2LppZcPg6uwcLNCLb5x5feyTkSydAiXDrx33bCZeyUouDRnP2KffK2fxJTo9w1SdBMjMyTqm4rbz12if",
  "key29": "2QedQXfU9Qc5j9TJqRaGQjYS4JQHKGc9JTZvGi3oaaUw1MFCmTAFmNxGFLWhUKqtxgZ4Bsd3Xf4su9ii3qFHLXCG",
  "key30": "SkG5CZScfK8AaeMhx8g9dT5aKkddtgQpVWoazWscBRHFNDdY1zkTtLih1vtwSTfN4ngoXfT8U7SQNP6ivhS5Umo",
  "key31": "5kkAdEBQsKC1HYpX4dUadeHBLdMov7h1ZofcLimhuFYs6j7Vb1VnFdV7XHKDjA6ygTqiB2p8GLc9bMSN3yfXwkjT",
  "key32": "47vsEgXrY1dpriogdFA1QsK9eXiTRkWxqbv3zXoMSBdVZypK23EajkqhpyoC1dC2pAq4QP4KS6bsiPnrp8ZyhMNG",
  "key33": "2To2dnn4oG1LixEGFaxvzGykcQ9JDERRmFw1zFsUH4PvawqHLEn98yLxMGpC1wwXdHWLTHzjN3njCHRxVGEYUEUx",
  "key34": "2CEBKTj8wdvY5VKfZTk65xpiEWqh97RKqnfFSMovGk2H8bz4o9ydqvuoKKSF6N9qhqpp1pdbJpxqF1CpgL3Dvy2b",
  "key35": "3LMzbGQogYG8B6xzmbHohaLWi4eQ1GnjzmsuDVK9xqkGPenADthWQpeDCpYrB2jsCXiaSvtgyeRLiqdJpNMhtoCi",
  "key36": "5r24kSWxVZmo8mPZC7JMmnqVhb4am4NHkKAQL6Vgo8YH3QW1fZ6mVuKHxLfenc4uB966BPJtpeYX6sUwpbEvC6rc",
  "key37": "5gRNH79qSvgGwXoMPDMbN3WQzqGjCeHYq2dwhr84GpqBYY9ivkgTG53nfDDp1DTEBNo3iqYyqAEs4CNaLNiEGHSA",
  "key38": "4kMroTFyey68EtnBSxprffsZuoZPcfNhPMGApQhjWaDGd1EZUL32gXVoK8oZd9jKHzJrtvrwDh7aYuw7bp9xVS6b",
  "key39": "6WgBgfG7TxoHY6QVcdvUnAYJQQAc6wvPPZv6UbiDP5aL3MpWtXUh7xVopuquJy1i27MZGAifvviTye63aTPXHhU",
  "key40": "cX7hWPwNMbW8AGz9oic9WUVcSUXqnuvF8jjTa9FF62bJdyKD2RUdRL2BMHQ1M59fcySvza1UHGsp2eHyZTq7Qnq",
  "key41": "5uexhc1JpcEHBF49f6c3hUjLnbfE9e4KMnHBcXz24e2SweP27nX57evHms4sD6rgtpTdegVfHR5VwENMRGYm2mzB",
  "key42": "3noyXj7XabfK8ak9YCSL9QsvKNMcSstZp5ETbzF54pZmPWLojcbSQWd3aXh1CUm8i6GnEGXL6xEUMptH722y39D8",
  "key43": "4g2HWfieNC6eaZTjqH7ZaMbubWWKWi9wFHwQd6AnrSWxAPw2Ksw4FmdFFSEJg6eVWJAjrcgEkpTtp1R1EjNAuoGp",
  "key44": "wLsg4jK29vUChS96vPv5cydjSSjinTnry1mkaTSLdMnZrcFfZGNVu3UAcxJb2zcdkrVdGydz7muyP1qaPu3EjDB",
  "key45": "5ik6XwNP9NgCDt7ELb7fUVpsXYUpE521zPJa8T86VyUTM5bL6ptZvojASdLuqN2qNFSsWEKAsw2dcVnkrdsLe1LP",
  "key46": "5gyA922scLYh75gCEbwSdShKgdH4vZrgZQywMgRQs93mwoDzTKJwCUV7VwBwSa4Kqt23VHhZorwhFxftwnppjEYR",
  "key47": "YtgkoNYKLqkaJa3q6fKn38ayBq93MJ9UK9M6HrB71TtBSmatFxEp5bhiXogkCo3H6vUJgNeDCYWhQRa79qcbYfe",
  "key48": "5Di7En949JCs1M9kZ2baEavkJqXuDACMrNM1PD6WvD1CuJocRX2oe7UWNVVRaP3wmqG9gJTr7jxBY8XNCjQ637Xo",
  "key49": "5VyRP1eyzpR1yVxDL8uRMF7wmxJsmBbE2EYXjqVTCDtpbB1LzutJw732nA595e7VfxyrqXmsfjswkxFUWrMoeJdf"
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
