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
    "2X3RufMPssnWcPuXmKEAdeakDvZqnoEkcREnTgtfE3WRGyGKYP7ZfqAPVmvu8FyjySrVzvdXWvnomCRg3Cxt3siM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4aEaNVzjiXkeRYT8R8iDbj7K1Vjh7WAfFoBEQTBY6uu2Eo43P4C2rrfqU3Taz7VE5mkAf1JRe7efPWxrDMZEazhG",
  "key1": "kCMbdPXuV8S5s3YyPsibPwrSuotF1dYgEWbSJgdsnseyntTrst2uhbKo7gXKDWmJdgbMRc731iFitV1PKpwDweN",
  "key2": "2cYqaJJ5okfqpy9gRaox2FbQzi5XCEL2HyCTszvqMMTSTueXMfNKcHD4z5Q5MDfePpmVTqssUj3du5nKFuJZScRZ",
  "key3": "62EV1VupJ3jyZS29r9ZFtTTwiFKdayERCisFYydVXkNvnanH2WPzz6tars662f14h5X74PBBxHavXGAUNsGZxPQZ",
  "key4": "5PM45r4wJfAgmQuUdBLz2Z3cZgqHjnMS5H872EhXAx8164shV4GN3sZTbfunEFdD8dBcertoJ4298dhQX4ugJzEq",
  "key5": "srCaAHiL2BgPCSXVYAhC8S2QmvrzEa8K5TU14hmiHd2AgRJY9nSWwoAVNx2Sj2phtDJh8XjwGNQQFEL25V3F3Kr",
  "key6": "2HA3yAPLX665hvtYVXw3GFmBRH2NZvwZrh5MdEmfqTbfkSWYrYiHb3XWP3QsSEd5thnJacL3uJNjQkteXFVmj1Jk",
  "key7": "5NMmE6dEMMHwUnLFJyX9ddFr5R2UN44skYy8YZnMDj8rutcdTedbaiBD617Tt3MGY4hx4YP1yzGBGBa9ad6BWSvM",
  "key8": "5ubVinLv1f2VRbgbgMQ8HsBYLKDci9JheVsMvby8dWAyxkdtYfCZ8GFa79JHtq6WoZR327GK3eFNTpLVkwwrTRLF",
  "key9": "33WjqtP2mfaw9PY517bF4WXKpL6m5jCjsQv1AKEhJwwPY4r4K1fy9vTNuV8qYq4kgVaFh3ugSidzeSemSckGLho7",
  "key10": "5ca7VFf21EyfzKWDBQe8QCY5dNtsfBdmnDYbzgBm5x8s7BERTunBFcScJQz8UJWXeRnSH8zxjUegHkixP4yn8t3V",
  "key11": "ryehttuxrX1m3rZzTCVCKoc2AHwpjiXjHbKk8qW9nfBtR7HV618UuvhqB3JJNwqJGMevMyiTA5mk1Vi8cktZ6i3",
  "key12": "28qVChuDCG87YnRxJMuiY8fisJMRYG6cZf1NZNFd8eQZNSYVW82GwmJfZboRw1Zg6CyH6w12BJqtJCXbsTw1QXK2",
  "key13": "5bfJVJdHBhkoSHM4eaGdjpZi3SDic3E7x4VFvFYHoEE2HPoqAb2uSxC132vJExvjzT21shvozjHACYDYuSG2MvZA",
  "key14": "jqw6yfXbU3XQeMJxCrFPRynUdBgch3EZztACQKrzVk4yCbtZer5uDBSurVn1BNkfgQKXdbRosGoWSk7zCrMy2sf",
  "key15": "4N7RH9MHkinwf51pc1vw8tAJQYgvUxi7zUE8gJpP39xdPubSkN5kZmJ8FnfgNZY1hpVNdRqxNBvQVFTT5aeu3k5h",
  "key16": "43eNs8mLjdd2EdkKD9zBG5Km7omSYZesYPqYrHPZgtedhVBfxBXGZWAxJsYvbfEGbw2SGRMMYzCEU6obxfKXE21P",
  "key17": "53iaH8C9iskW7fUwvmSQHfKJc5vzFKjQ8QBs6G4Q5Sun3EAxnJbYuSAwyQRPMaUgNkmB9mooGKS8wM5DWi7tTHbp",
  "key18": "5mdCbEwzwAnFcaWN8TKA78Tk5P6koCDEwViaSDsUEEX45pZu3yqhHThzA94cSFK6tf57La55wLmBB3Lq3xtf6nSk",
  "key19": "8RUJq4hsMgHUvczm6GHBsTFVumnhNseijANDidFzmnMY4dYRgSr6TxwEenJ4a2gKKLNnoN1myceX3y3HUhsC24a",
  "key20": "3rbUaFXqtzPZzwvjvefymWxMgzV1xg7VZZbxtEGiPctR8n41towtG4pyZcZDAkt5gFSHYCJ4AjTrHtRUsb597x5w",
  "key21": "fpWkUDmTA7kYL8v8x7DgkG7UqBi86PETMhtknKKS1bcV8xvFt4B4rfySLqD45yDoWvTgv3iYzePBND9ySPv4i2j",
  "key22": "56oaTru42n4cRvKathpJHrkQe7247JHfpMCh1fZNB4Tufh42MomE61LxhT8k72ShP4FoX8YhW7HfLHd5Db7HoTVk",
  "key23": "3ZDL2vnpJXnNh1UJA3wLg1tPvUXGt3vLYEghzYEPdYRmL2TW8fUcSVuBuehzcK6t1KhdpjrWuts8CeSLN8XzXf5m",
  "key24": "748tNxWtzEGCSL71HYMNMyjyvXe9YJ58443THQHhQUwJ9WRboBA7qFwLFybzCny1MVaRMo22H4KKpxqeNcAgEo8",
  "key25": "3R8F4x4UdpcdJfyvB44ep81bWBdhH4jKcwb1nzuio7wDhuDUHsCoHwY4FcG6uSW5MEN6qFjbcHDQA4SQUcQ68wwM",
  "key26": "3n5NExuPhykm3VfEoD7chvkpUh1MB57FAhVr3rzFfSeJJ9XBjYTwCaSXHYqPpjTe81nVNTa9bQgoQRegSq71En5S",
  "key27": "51amy7sQKP6cib84VwG7mxHu4eCbB4hXWdCTeBino8j4FLVVMEsT3eWfcMJSJ9cyBJ1keggARFH768CG96XNWPNd",
  "key28": "3BmvrzT9ZLsazAiAnkHx2oYghMQSVkiLXbTR7GNiB2hPjcViu7yh5rqPQ1bdmacpRqbA7bxL2qBBd4k1voxbDqPA",
  "key29": "YxQJu3FVKBv2RYK5JQYjedxZmrWzArdv1ZxKvs8xRMFaad7FDHPiSLiEkPJwtLzaqb6QEW7eFixRKqLeHCwTWiP",
  "key30": "4ds6rsv56gkk9JeVwZAQGz8xbxXRgnhLRkLvamNX1odhLp25CojoAUZwFtT4op3WsEBcwva5ckmkitn9HkrYvC25",
  "key31": "2wf9kv2QPwPPAFWumGJNEvwMd2uWj6rDSPG3hQdUkpb8ZNV7B3PJuVv9xAaoQ3UeEYWrRp7v6boBXP4HFov6s2rj",
  "key32": "3g7xZJYUtPP2fNnBp8Fodgc9RPvFQxgYAgMYP8R7Shc27UpncEDC285HcjnzFy872hq7DnoTLksstjj7N2K7V141",
  "key33": "28yLiUB855QK8UvJLsFNcrZXrh7jBH9jU3WdgBGHaTXxFxa9Yw3EQ1AkmuY6hhFdLu7UwyKK5T196oHgm6dTmRN2",
  "key34": "2PUjetBHEoGMTcbvXdb72KPpWdRHmqQzJ6F3rD6izNSBLrW7HZoF8BB9CakY56k21HYNG6VG7GFEYRFFyCnd7zo2",
  "key35": "4bgVqvFSEeb3cSrdYXr4u39sufaNAXjopAEGgnAK1ivN1zfjMcLRjY5NZpRrLZFAsjXJ4A3cbQroDYrY9BaH8DMH",
  "key36": "3KouNSxYMR4whzory2jYPF7Y3H6oiSxCFnXfSfmb5r3cbQkzGJ6GAoFGHkKc7BDbpPwTzEQYWXLmyFvF14uqN8Ti",
  "key37": "25dV7KnZRjdshAQ1c5Eo4B1F7EYkJcQbBVQMU9QbPm689vrnyKZCpHiNmgTfGtqBu4nompHt9qFeECJUKziKrKCk",
  "key38": "4qnG8szcNUjWJ893ySNutj8LMGG5yQjK9kCVs15aGsnotkd5cdpv6wf1YFD4dNbobZNmoBdzueUe7ZuqaCWxCagf",
  "key39": "33BM9tYhiEhzKK3nRkW5W9Bo9Gh4EaPa9Zz75W1dH9HkihXP92kRALNXLWUu5nbbQeDimuoa1v83nSucuEjiQZGC",
  "key40": "2tEuSktu8iLUaq5N8iwJXfnGfdS6FMBZC3sqarh5eiv9SDC9BjeJjPSv6RJWCBZo3Lbs7N9FxvxmyC6RAqxtxAiG",
  "key41": "3r5WVm56AaMwiyV5s2SaRmHEHn1DJFNTgYKgjWCpN7mqULpVX6bydGjGEvb5uaFj9j1utVttsehHMEUqvJvK16if",
  "key42": "618F1vUeCBuJaR2SJpcvGjEt67zKFfGxNG2NJq4hQ1akHYaZFnD1jLR5qqnFLLuwJrNegrsHKLRfYrH7yQeCe77h",
  "key43": "5FaHgivvDXxxYNPmNSdZpVesRkxm499zQpUNPuwvjiUtXDUEcv97cDkQZckRmbfSvukqt7v2NzAhXDPFeonvufd7",
  "key44": "4BVQdzfNeBBDRkogQM56qwFZcocDUpaX1iRjKXDEidEzNSAWBccJmkhkgBE7x3QMko2fWtK4D2y5w8zF8QTdbGfK",
  "key45": "3Hd39rbYkGfNL65GazTKy8MQQgCqEmrWSoZNRbfdBHj6SBabbDd7VYvE1GUYnuUgx3UMiDMgTMA4kfAyswRaJGBZ",
  "key46": "4Ky5mxcqMkgNVXTZRAyLpEYNb8h835zb6ANgwczf8Vni8xqq6jSLB9ELVwGfiWBbfWADpkazFDyzxeQcT9JWMGrx",
  "key47": "4hqVZKvsgjATxwScR2LbsGrUYg3txniJMVgs8xLHqSyc6asz21vGzzYCqyAgUtPW428RzQu4yBJbGg67hgqtxyWZ"
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
