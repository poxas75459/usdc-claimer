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
    "5Ly9EtmU2269w6ex8v73jnuhRGzJSpfkycLDZi1M53WLF3MrfQQpxJqmz1HqKuiRaCX37k7tZffWYcDBGXkMNHk1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wXN5rtMCtXuMPqcS6pr1EKdh2e3Kpwsgmj3WvEZDLvPvmeekoKd7yzvGxP21TtAKpTxkLuBFKKNhjrzy8S5XfRN",
  "key1": "5soNQp3ztJntg6TK3jPUSJ8M24EJpndC7r7uvsW7AnfYTorBSe8rT2gDCspwanX3826stzhoo9Ze5W6gXw36u2Wr",
  "key2": "592Uv34M3QMsMVjpG2EQJnapCoS7gZCfFvnMTdgo4rWVy6m4aWsBiwfriKBwBjwRW63SxzvW7ZqZHxasRy4JGjob",
  "key3": "61nU9qsFyawufJ26kHwUrNGvvU9PqASA5ahCjntbi3mjkbhLJUeDtc2wP88ncmYDhCxLypXUZwkztq3wRJu2MSgE",
  "key4": "4P1FxK8VpXAq4f5wzXdQ22sCPa1QTBPm3PiAPRiMc5CWrFfM7VcQYju9HYuBL7o5kWcJvp5mbv7pS776zQSy1idb",
  "key5": "4GwFqiMz2rRMo2iPyqXxagAKM221Gz6r5b6C6UbtEjdVDh6nHMpMMpxDVWQA96fYGNvJLgbn25K2EQbn1aFB17a4",
  "key6": "3vhN4QZfk9XMNyAkPHwdFf6H6gQUAbJsumrye5tU9TNyo6oUjG1LXXy7E48AQbHYdVgKWpVqNxA9dfRuqGmdXpZP",
  "key7": "58h3aAT9f8cxEU1py7S5Q8ww8wyx4x7CkJwxHbtbQMuseafXuNFcsvRxAKm9TYi7xrXNN7n6jRYtEDy4gFJde5Hi",
  "key8": "5Nba7oG4o9W9SBsnkTw9mum7k2GSHtaxbDJ3cANeXFFckhkGwCpX8yd78xiF7eBBHXYZQYoKpcQDssZmpaH2gZwQ",
  "key9": "4uEissqQwQeoHwf6hkSFqP5gDKq8tPLLqKC7KhtCCYJrxmsdJY1iBZRBQmkSR1URgrVLHNoebc4caZQF5BFU3Qvk",
  "key10": "2ptZQDsvwoYjoxugmsx3sKBog9kvaZt88JLkgt2yWFT7pmnDtEnVvitpo3HSW5Viwuen3T9hu8KZzSbsETBRjVDX",
  "key11": "3WzoMj36wZfCgaPjL2ppCC9YBP3kubsRzKPQz6YQ5BshQEKa4vEqnzQrq5rrM8ePK4U9Fthsxs88pNTu5t2M8gJW",
  "key12": "5oy7BGs5W9GoMbMietqAAacUU4NMaaHg872vPzi3z3k9WkyQSWPW9KuumEbNuic945fXY9YJRPJUnkmcigN4U3iG",
  "key13": "3HqF6BmJ72MeZocNjRp18zrP7joJK2wm4szAk4irbVTdyKtmqpanpQvX5jaUjFXrQseNo1y7wn37faoPupfyN11i",
  "key14": "32BboJwnR64jWxcLFQBNSZaAm489UGsv9A48iYkvJaiQ91Bi1Zqi2uDFzvCVWCDW143KPPMvsERz9hUJnZVfCoet",
  "key15": "4u9a3UHUPE1ogVhs4ZXo4hxm8eS1vHThbebo2YbpnDbYGEUFXK218jSN5V142EazC2ugwjgAehK2faZMXHBhSmXr",
  "key16": "2CUMG9rsA1QW8vQi4DDX2UvYeWM8Aw19yiUMvd7rn2B1DCzsVtDMaeA1hm7c7D6iJJEFrqCmSJ2kr7VB2B93G7Kq",
  "key17": "3h12MjJG4uMtcwTUWq1tvnwUbkG7N9ebPnQqu4F9fagvFtScXBpEsfnDNpJpCyK2JQ3xvpAgySiQvsY2k5wPjNQh",
  "key18": "2U5pfmMnNjgG4U2RE7bAE3oYur6jkc9EcQMCTJFdsph8bPpCAHpjzc96PaVEpnhbNYoZ1bxRJTf5AvuLvSVrAm4i",
  "key19": "2QLutes4WRQZtQZSedFftzRG9RUWe7TMpfAgG7W19itujKC5FfWfwZpsgso5pJefb5G7oe7QQoZ6Ra9yrAw2nF3g",
  "key20": "3TivBqLvqV1Bs5nPvjQwGy6La2s23HDiX1BdYAptPJNKPdVPFcH8NRtDHiwLHqSJdthSxDJyPktUGBJ2gqRwpa9",
  "key21": "5Px2hXpfkpLR9XjFL2ZYjqSsti5XEpQHRHU7VVshbBFddJXidr9FszQBvA2MWCoiNZ7eTKWybywZtTFR2tGmDPwc",
  "key22": "2CZ8Zyoq5mTMnu8BVMA4mFSS2o6HmZygDNEdWtv64AsrHk7VcH9g9bmUvsEd1aEsURfpQh9ypqBiYJBMeU69PhaY",
  "key23": "5GzEJ2vB8AB8y5F63fXTk8X3QBPCV2b89m7QiAFMgo3HPY5k6TQfEbNWBcDRDdV5ug6Mxh96tV6UC6stWHqNcqYD",
  "key24": "3BtQoszLPc6XeyDkFiDxgYoS48ASh4N4mJzGb2ecUnAjtfQ5yc9FHt9PXtZ4VnmrZwQknZupgoA9PCYvFBFV5pcx",
  "key25": "5mm3dTMmBrewFHwrsbSDqju7NpqZ3LZbZV66TLb3WodibRYbJtyf8e1mBt6xE9tL5AybftJQoqD21LLsybwMo2oR",
  "key26": "5H5wnmoWYSEzdUcdw3xQBAKCdFjVXDpX3uSxhgMYVGNPxgWuctazbMzTzDd8Fkuw2FX8zYn5CxmUquR8mQPPr71Z",
  "key27": "3rERm8dqB1KDywGuHCNMFi6fhPR7r9JNA4Ro5y1iru8PXwGVJJJBdkxzRcLkQMzLWByMJVJLVjxYEp2WPP9Mp5HU",
  "key28": "4bPgTBRdeVh86na5mWJQXADj6xUYhk6CQtpgXmqpFH6hia6makZKJ3SazewdfoBbwhkwr4FdbY3ec1Ztdow6KXo6",
  "key29": "9NJB3Q8EiYSQe1xwgxDTy73D3NSbngkNtSjwhMbje8bRsLvwpSKXuAHV4PjiNNPuc4LTWkM5wK2a4XmL1K731kv",
  "key30": "2Q5BvvSZkhjNVH7KUEskMsbxybCRTNjtn74GaM5em1TJZrsrMZch4Zq987Ucpgeo7rBrrRevZyNEccGbGPiMz5Sj",
  "key31": "Rxee3dfczGaG18hTnUcpqoYbwyLZovLqC7yfYqn9iLuWfiTAQ6Qaj1yYeqc5QgDyYcouBdngbJT3FX4eAY9ubtZ",
  "key32": "5A21SzingmMpQN9tVAKffhaxB1GseHQWM9tp7j5dGjMw3wKK3Zb6mkRDbeUHdPiSot6rfSW7b9Kd3wJX8i49QtEN",
  "key33": "3eyewfg2aKe7NXaq5SR4EmubDHxMP4dzZhBu83SLXbMZJNrY8E2jEAwKKXvfrxfcDvtye4F4ZDevSvdvc7mKrC8n",
  "key34": "3n6ySWnjowCpwjV45PeprJmKaAHZ4ps2DWuTERhkmsPZHM48pDsZmLj4wMKVFdcihSyBcxHq5QcPM48D4RbTFB54",
  "key35": "4PEuAa1HCuKNQLc1rhztVyJr7H612GrQ5u7HymirmpesJ8RpkH6WGjTchJcBCNwvyFN7vS6xH24snm8E2oobumbT",
  "key36": "2rtyQMj27afJ8cFCQTEKm4XDzQisjZR1junYqXVz7rPxEaEvmhqFnvCTXbRoRqRP2RKMMGBnH3xowYGRU3ih3h4z",
  "key37": "3TU5i65pc9T5TPhqeUv4gpHiUorftinHJDffCnVZJnAckyGv8cZfkY41h2HVP9MkALBApTffPQJeBWi1m4sGtKiy"
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
