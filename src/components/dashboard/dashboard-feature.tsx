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
    "4ZbKZL7zC5mUSwV4P7szDm3UBYtWyqVPM8CWT1jtZcq9PeodmNbNeH9WCnRDHiii49revSyCepa9GUE6JPN9U9Y8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2YTwyVghQjQC6qZ1DccyUqp9q8FsbpfvYTYQcV6pW6Sgo2aiPLbo5rS531k8RjTwzL1qNjU4FgY9G2dUokn2AVMM",
  "key1": "51Fty3oNTV4qsUsQLaGkjJrqTKxSe8CnZpMcsbRtHMmGuyG7XQAfQYbK28zGVUUkZf3grfJTHKH4WHG9fA41GVu2",
  "key2": "2rYmp5zWtE44CV1R6TeDhhszBRZzByXLQF9hnvP25qxbTooFRmLpPiPwcodKmiPR3nwr3ZCdWxy2pxTAbDphURS9",
  "key3": "3C7o4GUF6JaWV6Z8gJ7CiQ7tk5fYZLR3rXcqiPZ4mvgiR2MseiBZ1PJGhhF5wVpbonsSSQxmoKT7q5p6iygTZffn",
  "key4": "3d9tJmaZMkcyb9a25mT5zoDEYpPSyjucJ7Lxg3Mh8Xrh2YGJGTHtoL9CuX9H3ncSbifNZi2Q4XLob31U5j2K1CaS",
  "key5": "4VsPiWZZHcMfjzEj3aFUSDB1n8TCGtbVrQBfT7pUYzwyXRW5AFp1GHVp9qY7PETEpK8RkJRWR7ceywfcDBwJdRaZ",
  "key6": "5qei8D1ptyRdQAUt7TjZUqF9Hs2hWjCkptQKKFA3RrMJG4YTLeKViN1nhdYJBiqr34QQSpZQCty18Jc95Zy3V4Ej",
  "key7": "5Ln6np3bFSPZDjavaDEL9pcpudPg7ARzuzaRHofR62muZL2VXXo7RnZFJjXsYMwZf7nF1uCGBM5UpH61rarvd5qK",
  "key8": "2WLcYyU75N3QGyb7epcNn32p7AbRYfVtXvPYYfSnnHCDveHUJH87WtCvKrYA9izLKenMF7rr9E6Wdr7f1mMtDxRE",
  "key9": "3hUkkruCo2fqeAz2xQyAbGBxjjvQLXc3Yqr6hm9MK53HvDMPZqNxNuoCZbiBcE9sQzPW5CEZX621sENZ4pXiZJHi",
  "key10": "2ouhv41btGiCN4v77wi3CR7TKGsYWSgWBEPGQikzeMpcUMCaqWEFLgFWn5cMH2WRow1U8PMDA5iR2nCunm6EG9YB",
  "key11": "46ZCLjkSU8nReVMrKijuUxzpbHeeX6JTeRn5eLjYxxZaz7yreKwzjScgcoTA3odFp6ZeDzbaytYXEz1qNPkYohyW",
  "key12": "2QY9cpW2pCnJA5REQdRxwEjVVaHFomyNQeiPnH5jpFJ7UokEnP7vsiTRPN7MFvwwaS2EQtuEBwxZ8FXhzMkgYpyw",
  "key13": "3JQKT45NRSjXUafB2P29YPANbm79RJQxawqu21XrUGGJzjrwwoAHed2nmfQb5RwnDEDTiSrZEKUX1oMRqYGGrGwu",
  "key14": "khJ7NqSy7HbRp3jwrjLu9KRfJCYjLkSfp6HMTdViRDP31VkcWx5XzmiHGjmN5T4Tf2bjKx5CDLnwkqrnTnSiokZ",
  "key15": "2SdhJQ9GMuagVjQra1jExdcpk5zPeYZk6uijQd13JfZsUVMCT8gPgUrMFZkyizD7mL2e5ugZmJFsotjmAhrFzSbc",
  "key16": "4W81EhN2JhcSyhSdgVwdb75pJ88bZw44Xf2KL5U9Sf6hcmob8wUG6mkoy9mVs65t8J2UTmUeXXZ48tpEPagBP7dM",
  "key17": "4Hy2Z8McsTjBgrg5GS2MF3oxqeFmqbSP6wUPLxV3zvuMAqFtmzpzNtZbtr9rUjpY2DoY39r8D7YV27o3vi8gEgYa",
  "key18": "3qGWAuwQC7PgT8trSGU8XzYHkoej682WZBMESSBra8h2A1Gv2rybTqspdi58ky1HGQmJfCiqf4GZPo6esMGv8wg1",
  "key19": "f9kyHWTTk8MEeyK2R4PjiWBP33p23L65AG7w1419cJEAXQHYDr8oAq41u9yAUxLVzyDPGYz31EvFmzSPVMQrLFR",
  "key20": "fSDiyAurwywTd5yxXeLBmzz5wx2mHmuP92k6JTY4GHBX8jcRyXhbcHjunTw2AawxFTciCDk43VBx4u5i6qSVaER",
  "key21": "jLjNGWYDSX9hemGSmp6LAqb35bRdEzojoJ6n53rzXBTip4Cszk3BgRkAz5csoy1yTiCv6MHG8VtNikqvpXcFUBh",
  "key22": "53ky4TkqBAvJ8uq3zosRsvfZDsjoPGw8WYh3JRgmoYTX9W1hmwLtAhNzk5GVB98d6q1tuuXdr5VfUqYBaWEdpX8",
  "key23": "Du248e7t9HwspEcgvj7hcCc7dkrvju1vtcscAhnNZp63BzJF6KEJCDAM6Cocq8uNtP6GPYxngJ2cGu6wXnfCJ2H",
  "key24": "4onKH4tzYHaV1Pqc6pzPXEF3rPcJrcuUbTb3KetfEey3Nv7oJ15U3wS9HScEDhVf3yf2nmxXD9xiwhot2PL3Xz6s",
  "key25": "hWXRswatCvveGTAZVQBeSZcjgcS2SQzLCVkZMptWVsPJfVxJ494d73icNyjgjAgi5SkMt3Csd9i8efrPhmURvu7",
  "key26": "3omMrUsb1pdCsZQn4uhiuyvhPWpF2GPQD786nhDCbS522WjHCb1N2E9sEqV9mFLzyuf9RPzh7ALAEyrvEM7Ngoxx",
  "key27": "432WmxUkAr1gj2rD4ToGJ19YRu9td3uAZNq3r5adG3r7AEEw1MSzrNdrhhqsL4xigfC8DJ8YLeRmWx6SN4Wqmnd2",
  "key28": "3V9BwVL3Ft9stvuoazvo3XKbFCUDG1aJGn4q1eeYNSbShyku4k8wE2ENpPqFRaZzfNfRiafiLA5BGV7D8aJzRBKx",
  "key29": "HJRxHwJDXzkQWYpAaa2k1KFBkn8R8Aze7wBytZZoGiJe5hrTnf46ceAnjDCqcqsPKrjHpKbmkMeXZowVZgzG5mW",
  "key30": "5KWvgxm16vKJQy15BZtZSNhhRnthwTCzgmjnM5gfNm88hpPxWZuQsLi3Vrty7i4eaJd7yiM2BjCWuYUQfWHP9D38",
  "key31": "2ztReQNSGa6zMtLtHiRe5SaqhrCwpbSME2vxmhrLKpmoSGXu2JJiWPXbyM5YyEvaf8c51ZaUai98kLfuvCjhRWwN",
  "key32": "2pjmJx9fC4oHo92jgxbHCdX9nfQ8pmMzGxiGzPscVe9csjnEjtE13NEc5tC9T99VbLC1KgLHEdHYDq9n5TnFxbNd",
  "key33": "5Y5DjcyUcnHFGYySuEb8CsgXG2t4JDrJGtN1aKZdx8nBd4CW85gAKVcZnh2tx8Rp25cvDmv37jUWF2xV21u5wiUM",
  "key34": "5tEo6zikAmiA7ByQUdy21wRfubLu7EpWg2etNxgAe9cQ2e4njfhiT4n1Gy7ETik3gucwNgC5ANEyFTJVUYwV4DSv",
  "key35": "4jVmGHcdHXx7ZKriDvkLb7SLqovWCsGrusBmeACDsT5PFppV6ZWjzfzUSxAkfDNtSP5YScfcxn93c2zUVDTma51w",
  "key36": "4Fu7kmuCnVHXCdkdnuonVyr2cjVLtjcaVy9N2egBpTsDBsPY8xt7y2vUReacH3LDnyx6gfA1WmLLZGGSjC9rpR93",
  "key37": "4Sw66FTvYbcMpZVKcbJjyB83HoQTEW2yb6PsY3t4rAAAn3dkfnP4rayN11nfviJuvfTHhWafXqkxXnniYN7WeHw7",
  "key38": "4rwrDCunj6fQJEzjk6LsxA5wZ1gJLACL3xxs2NXUea6SLpEkzxtKnzoxKFezCE1fsD6uiGJDn4EgJo73MTGa36p4",
  "key39": "43ZoP5gtUkzY8uombG99ZDYiAgBDm9sTiBQH7L2iASqPs6ZCGtnLPz6L6GLFsXFMvEuKU7oiNsSvSzxGfaTwKd9Z",
  "key40": "5ay6HhdW6BJuXpy4VnYsajCRHSjZbMbRAXNN6KgmPGcsrZtjM8ZWphXqo3gj6CrJLb5otA631ty8KSia6M93TKAn",
  "key41": "5Ath1fdKnPjqYygA8PigLVenbBMgd91AG6PBAhhLbasEeuas4p8U9RRvA3DRGZT1GbUBJJjVPv3STPjbUWo5Rz1i",
  "key42": "2NRdKyu4nY2ikBj8yFDAmrCCRMtbtbFuug1iYUedWUEoQ9869zyu6dtSMTZeJPrLmYDnx1x5XSTyJop7q6kK4Mpq",
  "key43": "5Sku8wMe668QKs1XbFbAQwMDEunZ5Nz8WTEZbA1g28GsKQcjq57FfYSzRtqW9XB3PseLaWxJdAKubBmesSX6w9H7",
  "key44": "5MoJprxJNaFDbCwBjv41V8yoSA3u7vbvp6TtringeA23yWLk6rCKZCXyDSsRPSCVvsmwxAzKHXmzRsyZ4EnSkPns"
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
