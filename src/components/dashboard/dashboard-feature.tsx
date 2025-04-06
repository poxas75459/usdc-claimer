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
    "3grEjnyCpiwKsfbxa5c226aorLwmJr9iP8RmWuFsmWdgSuV3LCHWVN7Xwcs95v5F5qtptSqjewEqxNSgh6AibDEX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jHfrhEJ4mMwwXH9R2KMYzy3EnCmU4NgJm6Ge8KwgMpMhpnkSgci2MAxFZA5jeEZbfPocMJeGWciuwAqDsgpGN41",
  "key1": "3fgwubTPKnn5vXNxseLvbPsbXnnDUn5nSZnYvXYoTJn5FxEqhFhkddh8EGMJqsHdAyf82mpLBmeeqVpNJf5kzPXM",
  "key2": "4t2KNbXjpMuFTP8JsF7zugyBDgkNg5Z7aHTMmpHSqtteKCSdCmS5bNfZEBt7jhE9M5yCgZW9dsQqZAgXsynmEACL",
  "key3": "3EyD5aGvvhkhpT4NTG4T7sx3stqECjAQjFHXrEymufQoWmqdW9X1rmN59LNT5hqtdpZt4q5pLFg2BjoHg8yowDwD",
  "key4": "2hrSUKjq9Euawhvjp5izZGAeWmb1ZH1r4d7Djz9npbrwn9acZT8VpviQ9y6U6nB6KtACCWZJnuvTbc8LtWBL6r4F",
  "key5": "3qk9bxHWGrrwqWbT3m9TTohwmYiyeWu7FQ5GpKXVRaTvHx8wxrPFKLgruaVZXcgxtxPDahRgoDAtWuAKe7GJ24fd",
  "key6": "3ERkzcHXhEmfPw6qErC3myz4dFRiob1UagXNVSo9McFB9guRVwBGZTYgCftUmxD4B5VTniE68FrzepYg8QWUYKZo",
  "key7": "5L8e2L5qe35RMoRzhUMWN83RUEzR8h99Ww8LHuoT2aAxxytr88nVKCTfrnxTV8Rrbw7s1LvWKgYjLVL5UgDdDLD5",
  "key8": "4wd58T5Pu31SWvBhexb8wp2vH4QpMvZyb2JQEYU2ZqMxNtKpexS5MX1MtQ5hFqpAG3PKDhAB3c4RJkFCZKFtrvjG",
  "key9": "4uNGF71uibqva2VFowWr8UHjd6AeWTQWTJ8y8FMAy5KvYtF1ef7i8akQbybU3x1f3fsJxoAixD8iNcoxDr6LianP",
  "key10": "6RNc3pseZzsp3tBHE54mEbmtNTv5VaHRakNbQY5s96UtciyRUnXjVBPiNotDghMqn1Sk4P9JyJRovPyZVdpjngt",
  "key11": "2igsJtry3AqbZp2dQtxAKUmBBwfNpXyx8C8Q9FrYjPjiMVpwP9yUeYtphXzB5H7HJULstT36ZWLEDTu3bvXvdDNR",
  "key12": "6hxE3qjMigpiv16i1MTgAB1CxHWrigEYirHrcNpzMwzEzMam7iy77fRLAbQpEJG5Rb5cfJWM3VSUBZBP1GdcFXb",
  "key13": "VWNxraPZS34m2Yt4jZuEqujHRD7u9B2SPzs6BLzKukrBK1ge7Wo7mpsiobExavuU1r5qhtPspF9rQxQ3U9s8UST",
  "key14": "2UgXaR6ckbZneiqJ86xEck4H1UYc24N5NJTYMJ8mKwWSLibq4u1ZuJ2HvV2UkJwzKePNawZXoQcdrqVvMSDiNqao",
  "key15": "4iP2EVJDvwqegvpMdQTVy8rCgXQp7isjmUxqaUeiCwfns8uiWMy7Ewn9mfRT9sx1JubRWVuZRtwAfd8L3LtFxseJ",
  "key16": "3wbK71WwP5jhtGN3qrsuTCrxKhVVD6eAdsu7tCN7dgEUxxtpuNPSqBJ4oozpRCtrMjYZBQWQpe7ZZpBCmTGqiUmF",
  "key17": "3kJLbQwQbhrL4Dng7KCp1iauYSdxVq7QNCQWM8CuRiAtmSJYvojJwH7cSo7NAiJhYW4w9r98YeRmXuijbzrYFxCR",
  "key18": "673H6gjAgZ7sVCrCmpqeMEsCSARYt6pqSwkEVZSBii5dy2Liz5eeC4pfFrLN1iGDKd8jySV9TyB3N1Yrv4yn71Ji",
  "key19": "4nR54oEm5aKT1eeWM2N1tKvgem3RLrLrrQsGrCcFf66VtUKcuyw3vpKKVna5pPspp9JP2JBzZFc3sCZYtjKW9qv2",
  "key20": "47fzxJNPD5xLXrFkVtuwGomxtFpPFyzyUXUZUigaehbg3ZgBNEAD8MZcaY7i2PDrhrRTjYWpnuSNLoNmWUCCzVd9",
  "key21": "3kuac6zPgLPcHQGE6vV9gZU8n3vMTrsVrzmKjDJ7G5dWdhCmtYUkdwpLVCuDYJ9bczGS8cSZ1bSCtNTbYvuWSi4G",
  "key22": "4Qw71JsM9JY9DYwyMv4n2poxEvUMa3ABFxmVSwyRrJc3QWVd4jc6uTBMwgwA5PEnz9gAaXVme75hcTBjcGHYuL8r",
  "key23": "24Dwcf3hYT6rKRB8tJz4FL98WHkAEeAazfiNXAcLr8A3L8NFurY2LiURzxMQsSz3KLvg5dENHoSH99omLByN5EXH",
  "key24": "4V4gr2WwRmAK2eVpTUTGfCM9zK6cdPmNmNWGL8LnzycyXQ7XUtWfGaGm7c9mQMdNwgTzzdxxkXyEGCpMxa9PCNF6",
  "key25": "2RW4o6JcN8Teez8wDEtoezvnie8x5LUDNntPQG26TNVZKABPqFPx3urdfhirExbSPrxLCfXr74JRYaYLh8K6rdeD",
  "key26": "4gEvNXwKw5JQ1zUMNee6waKKUroU86tUiMNaNhHcPVJXw87Xx3cTf3yce3tkThwfj7rb6BAssfTbR4roqwGKc95p",
  "key27": "5JoVde3KYxDgwV1x7rKmE6UJRAheRgop2dnHXCGpm9B4tcrAS4Y9E7bEyLzU8nyJVZmUNV1UgByGrSmU7f2Kt3p1",
  "key28": "5Qo848q3AUYB5svAbnWZyq9JR2a5SLAS4xK8XwTGFioef6sUPfbSwzmXmChDET2g7DP7pPUDjkhQMaK66PRTfrNL",
  "key29": "mJKTDNz4qZjMvs7i8NzNCi8gHvEAVXifEWRbvuY6SAS2qqC3HS5WWXD1EwhsVPJEySf6dCdiBFsdrMEGtDGqp1V",
  "key30": "4AdfmAcNNJbv943pdrVdh3vM2v7T3THT3Jp3mZri3LGW6fs4XS9kphycWHE3M2fxuY6dchXJCU45BQJtWuKRdiSn",
  "key31": "FH5UXqUW8a3zs5baK5HLx8xs24aYZau86o2y5N5Mq5MAPaAJBZskc4E3UPfYH9514wKvKxEjEkhZN5yM5AAiQXn",
  "key32": "32g9V2gM9TfTJQAsRQsPfnpdE94MybJbb6rVZGSnZm3d6Dksvj7AQ37DELWZrEuusZwWYTHeD4tK3Uh1jApcr5oZ",
  "key33": "63ronJPs9EmnwyqZi2YF5AYRjWhkLGzwuvzNxGUnvQX687RqzHNQUdmGgvNtFSWSYYqHFZJpmfCka5HPhA6UyZVD",
  "key34": "4ZkjRFd7MrzxPYeKVhkaJCgxVWWmgc294ofHFtAs52jq1jy4KbrszdFuww3MhYkBaayZ3EDSfWjZA16ZuPLmqgig",
  "key35": "F3tkM5hxDqQ6RBFWBDsBbPhgGNnZikMovGDERyiy491d5Uh7FE6SnDVLA2hXPFubfLweZbvUcRASG1xPa12xtGb",
  "key36": "22WBC2JFW3R42yXmrcqZSgHQjJuxia5AMUcqD4232EQPReq8rhxmmLEPxB95ndAdom2HZxKBCijRdvCYkxKDCST5",
  "key37": "4m8XGbGme8BVbtJMdEVmSNb93tkDgvAtKcjYdaKm3KcfbAHXWE3A1qLb7zsM3oxWhCC1pG7VApTPmfjVWPBweo1z",
  "key38": "5rYfP1MvDdrJfgRhGXECL4tqsSjwEQHW2dDuZe1h598BbFhzHAPKK6etPeeMYdkbpRcFdq5xpvugXfXkHiMe9G9b",
  "key39": "3Dv9vqxfXCG8Kov28Ad6rAdZ5PGmfiDMXwtZ1M62pG67qazygVsAwJRMPzzi6r1DpNm9XkdSadwf9vxxVWZKxY4s",
  "key40": "4F5QbTmJgvNT1R8HkXffyEm3acCMZFVwJQduijqSL5W32iq7VxvBMNMrEuvGLSZdhmyMB5BuoDNCHzRpjVTeDsWp",
  "key41": "5t6V6sbFMbkioTExSXaZKnrS6Q2yZi7vVSDFxAMSk54SuCRoG9abtx2nfsFdYaqVpjE3J5BmD9T9bdCvkbWmDuwT",
  "key42": "2cRd9SyDLdceqeEbpQhcaDLLoxAM8LN7SnEsTB8qYGveFDLnxTo8MRaKSvmPaEzG6xNvUpu1fJjRfiTam2PdkQL7",
  "key43": "5LFU1PJvHTvvP5wjhMKZBho8KCZnbmcnEjFrkXqw3MPLJYeDtERXHQ8MUnF1SuYS4uXMuAJEN8p1RDhtcVTqJMZ8",
  "key44": "5aNsjW37W4BNQUKdBtcgwN4BPRyX4vjJ7bFu68gM28B1NSr54cDovNFYFootHSJayJgAcGx8oPVGsLnVis1GNC3Q"
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
