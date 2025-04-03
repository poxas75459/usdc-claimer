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
    "5JDp652VM7ry4KUWpDSzXrYsfoxEaG7sR1XiTFh9AxEZN5BkqdNHH1PKKddtfyUsbgnwfcsedjgxr7HJix9Bynk6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5j34yrWtDfWHEbgWjyR2gwe7GPrdzC1a4tT3hbUmL6s9Za28qbT2XkTc4xJiVnZX6Fx32mwGCYJzKxF2x2eniDYL",
  "key1": "3uDy3Ha3zqmJiXvpTjxX7eaPjHrjNCM94Jg5yrzLHJdx2TqkBRzsCXmEjZRFfkx6wD1LDCAD7Afhx7wYm7jVZB95",
  "key2": "EZThJrp5VPiqvg1TjBwCTfWgFzciejs3ok5d7rNsCWpvPdtGHU7SqDmugdSPoe3N7BwwabsaGS5UYc4BPmkMU3c",
  "key3": "3qpFTs62sLf8dNpXNeuVNoMKMgGWZbSGsypjT6vWnY92Vei1nLgoah5yK6Lqf4dU5fviQBpxGGpR4rHm8s2CMjP6",
  "key4": "3ftbyvLxWSWy4BFpaepLcWhsVpg8y7KnhMLYx85SHNr8jP3kwLWHuTQaoHF2p5rf5jk9tmWSUVvWxWxheJrQmd8c",
  "key5": "4h1FytSP77BoKnuSBeZPocnc199V6ijV65V3s6BqotDkWDtYmkdTFb8Y7CPDH7tovF3rSKH58dMD6hXPT5fzSkfB",
  "key6": "5mRyHFkVUHtrviLn74f8uTqXTmzkJcqKWLMBUraRffNzibANmaaS59x8DspBMzHBFgzUzmvvT5Rut1YXmGN8LcwR",
  "key7": "3MnEPiH6Ry1mJcaGfXUAJms2jCBW4njP52cfqfBXqer7YqybRQD1hTy3qbyGaazDnqKEybUBqdHzxCdZFoSS9GHd",
  "key8": "2z4oMF3ciAsB7h3HBcJDNPfEBYSbPYr9oUfLZa6HfobdXdfx91ioQfNrZx3d7Hujg1YCuLDMAHaQuzV4ZgL9Sg5Z",
  "key9": "3LC6vvbHPhAKrzcHCBAqpPr7YpvJUw1sfBaRKkp7a5iawmKzRPGNxrWXN57PoFGuaHPTWBtezK46uaSju23DqsMj",
  "key10": "4QLvarfQtc53CCCVD4fGih14nfd2XE3QRd75oede9Q6ngUM2j4Anue5TJSEhdvJPL5gxNGLmrTep3RkKUtN4gMY",
  "key11": "3XkW5wQxnkM2FCjg4QxxiLKVQSVKL4mtduJbbuo9LxZ64EwqRdnSFGv9VFeAKmySLvxChyfxgwA6hT4xiEA4Hh1a",
  "key12": "Hog5cuBxf3PEeVCTpAvy4YdvGLrmmD36pHRBndxjHL5r9AERPRQkcbGtPStFwDBrT3TxWTxWAua7V9p9i2WfWTc",
  "key13": "3AYDu2Mtg43xM7Fw8jWfcvGD5Ap112iTXKnEM1kVDX1hwNjsg3WDQojmzPMHuunUcLsLCDBekgK8cuF6VinNwTg3",
  "key14": "wufKau2za4wh626dFbRQL7qg19c5EccSNEkHFH6qJSwBv8nhoDFfWtL2qFrTNxStRUFrVXL8FPnnFc38Xyu38kW",
  "key15": "5MnnyUSj3a7r8HZhRvtYbGfcqMjKXSrPZPmPKJE7oVpkGKc2M8Rc6foYfyRjsAU7LrnGpxHSS38Vujjv7BSnBAyo",
  "key16": "3VYxYwRY4djVETwGrXnyo896yfqUG8oKB2q3dcKFWwe8JdNDzGhNTmoN6w7mvjxmzKvupnk239NT648LagAH4zg5",
  "key17": "35VWzQToWYTmAA5G1dHEug6FjjwYnQxb5Hr8MJBYG1kqkgm31LMUEGaikZp59u4TBBcwNzWNGNnxegaqb9NWGfrn",
  "key18": "fEifuxFrSjy3Gz7xnEAUiuaUBhTdFhc81jPhHPjBLQwHdzxdAGEYLFRhVk3b5UeY5PzBRToaX1VkBgjZFAmzokW",
  "key19": "44dWxUb7Go2qVSGJHy7YPToVqnA1TPGKkPKcWKxQWwJuWeRRnDLdrsWUEAFBpWxXwucb21barbodeqdg4itPVdMF",
  "key20": "35BdU8ZefA5j6j9jEZeyeFZCjGcEC6Qq5U4pXbWy3qyDxCm6tFeKe6TRRzNRm97uM12y3oz1zYYmLFaaMAUB5z5r",
  "key21": "5Go9vXGB2YepiUai5L9jgmBJDDpzZMJdyD6rHY4sqoDfgJ9M4mqy3M7pyBGGtSzvcVa3JCcvTVgGZecdbuY1T4My",
  "key22": "3Eb1H3CjfSic96SyuQ3tguvbHM8U3Nxx2qdAkEFQChgKXjVMCLW8wqyZ2x3iz861HYrLL5oXowt85mfnxXbL39dc",
  "key23": "5s8exScaXCQYj5S7QPNmhg2GqEj31Arxy6HjfB5nAMNisVEZVTumhdb984byJ2h1fTh3zbCJa6tFA45mhpNuqFnv",
  "key24": "5poPknTuYmk6SUxgQUUe5R1uxBXz18zmV8aUZqsq4XZcEJRgVbeckSecLUba77AkLHpUGVTEuk2unGU9korWa1mD",
  "key25": "49auhToURNRtYrQtNzXtX2f5ksExXUbMFhyFRuVCG7b6Rvu5suypnDupaa6KsEfzjiANSetLww2T7n8dYhCryYqt",
  "key26": "4RypwWf9DEhtGAf1vtyzDGrDDhX8HkrN9eyjhTnfXBSuTeRS8cC9xdDeJLvyhHDU6ZxhPhzNmPvuWRP1G1ppTMqA",
  "key27": "2E96rfS7t8HqiehTMjMUuj9aAg9Nrf9fTU2uydtAJweCndJVhEQAHcAfivFHJhv3k1Aqu76U6QFhKMEiu21FBX4L",
  "key28": "3Bne8pnmuhTSdMCzxBh1NaaLfwBCBiyGZq1Qt3MpUByqec3RV9VDn1xHeDjLwWPLCMiEpCFfJNQdfKYB3g6SeMGX",
  "key29": "4Pfkae2VpQa4mfFZgMtK5Tcf9KX1vAK6mqqP8EW6GVMBBmSU4TT89FG5LNZWCYihUNdPcTXJ6E6X5MEMpaxJKUtK",
  "key30": "4spTb6jbk3N36NLpKGd541krVrLDY9zZwpDB5QJAXB5NqJQbBKoKF1ynGQmjPh9L1N2BMKp4piF57wNxyBPkmur",
  "key31": "44dsS6QzprafuuXExEPHBFhY3Nk1hr2b7sVyxxUDPPDgssqpNNnYJUoP6hV2NbL3hMyDgMH7p36ziY5Xjv5YrUPi",
  "key32": "29k7xTgPVGxGUzGwMD2aMxoCuVpPJqyiGEqzxepTzY6KwJX2n5xEkNHnZQFjajLiyomo3c2spUBLC14XcnE8Mgzv",
  "key33": "5xgAMrb14fzRK1jcvptaMzbx5Dg4YFao835RLz7efpKBa2am9Rin5gseXmcgtfiaBqV7iYcSeS3W4MCqWv2cqaMy",
  "key34": "2XSJ299NBAA61SLKVXQo1wyPK6grocDiaJuAHDTUMfMSBBSMy66ZMHsJSkrjUdGbQ1AJzsKGzZQtZpSfAg2VeTcf",
  "key35": "2YjZdkLDAYKuzdkhT5L7dSK9ezeAkpk7HxLeLKQFVGB8af3qt1gmQPSNSNw46JYeCzv2zV9do78hoaKHa1ABuuST",
  "key36": "5BLEaUoEjP92MTXBsatH2XPYy5CZiD3ByyqgaxgSHsUMbLwNJrE2iK4wrTr91tUGwVLhCfnNzG9CVS3qBqGUy5T1",
  "key37": "VAu8aKXRKNfjBRkp9wdquWGjy2LLtzCC97rfANKnPckTgF1Uu4dcmgWnW3PwekRWSEm92RxS1kXQUEX8zFcw4EB",
  "key38": "4V8xv1EauGrdEi12cCnh2ZBhmCnvnqUBQ5qFvxwjVWpy9oBYUUGxhPQ9eWbQemGUD341excK4eTNJV5FZSKPwyNs",
  "key39": "2c1vTSgr8CSWb7wE9Amb7Ve99qAAWJkQP3fLUCArekDqGTAehbDniv9fmvo92AqYcuaQp8QnWfujTsmLbFP6ojAF",
  "key40": "3eAUhK8wZu5QEHcAPMYSUHVbfHTUvfMnqztQJojrYhM5RQjcYxymhwjNQFNfsFzuRfB3ZQLzNyfeskXGSutSEt6Z",
  "key41": "4zNd1Sxn4dHSq1nbTnfihspnmbbbudmMCY6ovQ7r4A7JHZwWSEyBwAgDMFvQ6kyLJ4t47KVLW2ZEeaC3ZWoBddTE",
  "key42": "4hRVU3HH5vR2ktWGPdRXtpLwj9GFZLjXfme7mfTL7GiLWdJd5dforDDZYD2AySJRQPWYX7uqyGzCR7m2sSWjr5du",
  "key43": "5AWYCfjzmSP7peXEA6oWLQxEcMtKxp9vwECpp26pu9CDE1hoJH8oyHEc3CD8XGsRvmdNfCivNREfCvZryrUBJrnA",
  "key44": "2sPhPgwp5xNUYzwpfePPDqxDVwGevbnXc4akU7WfF8a4qQzwQxu5iVWkiGLDQHYf1o8yx5sqTPgt4tMAtJTuUwuT",
  "key45": "5YTYeAEKt4VRBUPDGY3HG1gdJM8b7M81uieKR5pHNHkcdH4N1NqVNLByRjF23poGq43jZYBaKTCVeqkckCTFfCxY"
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
