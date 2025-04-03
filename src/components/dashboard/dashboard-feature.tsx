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
    "2nUUVAPVHdwW6iL3aZADaG2srJYezoqz3KCMsKjWCtnRks3fs6VWr2pzmAJU7G7abA8h5DCbkhbb6QPDvw2bxsdM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51GsomBbqr7zdP9VwjbKe9oWMrsvLpxnicZuXTLA1r9nD2SznznJ1A5Y56WAoCC3ke4WuR2ksZrPxTMCLAuZeyrj",
  "key1": "53DgiHoM4rUocyAN1zoUJgmy8ieAJtV7coxdidzChK8WAifFW3hcT28tmGJt62UBtM8tx7t3MKWm8zVAgScPkgYi",
  "key2": "2Po6wZ418bafPtGGigH98bH7npNabAGzeJn6P4a3WdDyP5L9ovkV1dB9u1YELJsnSxf1tBPoLLugmXHDF5UULVKa",
  "key3": "4nu3ArAAikX5jTyxGR8uTh9AtWvmtCk52qMNhKKigopDKvri5fTL6Y3HrrfmjxVRqR18UUczotsG98EKmS9tnEan",
  "key4": "468PEsxYe1B8Yx2koVuyRNTMJuGxGriuiMbmjnPc1rwompPAZC6iFqG76AYHatDNr272zdrKe4Kz2CpMrnUrsvKq",
  "key5": "2iSfdMNa2aeJqtCgCo3b2SCQyUsj3wrGPPRUqNPM62Sv4z5GoxdDYngwEsmbME8WEKDNXXjWwD1s1rkkgNZ2HT7A",
  "key6": "5D3ewXUhHJkLkegQbaeus3MQjNyBtdepA3zjbBDFcHSivCgJZMXXSFsCdKBZeM7eKAd93cc1qScJnSfrNz7AV6r2",
  "key7": "5QEWyGNGAfYSiwB1Zk3jBRS39eifVZLpCqfmiSj7dv3cfxsdCJxxDT6XQp7H34oW1CnSKYYWNkcd1EnU9YSE9a9e",
  "key8": "urGZGQifKwxdAiWG1W57AKdshXtvh3Qt8Unu1saLd6fKo2mcaNa9difbgiu4xzExGpoZLzQtMxihEVW1hzRRkho",
  "key9": "3aRuq5PHwJQ8Tbwq6RCPWDm8SLsA3yBB6yQUKXXe8JpEGfHbY5ovEtRFEm3pfbqemedhPvqkbyqzz3RkkoHicxRC",
  "key10": "4kppzScBYCqhmtM6rsQvdM5xjfio7SwM4qUtVYzo7dfUS3DAnh2GdnEJ24dYVvGLctvYaQKxzV62eWwcCx2edBtR",
  "key11": "47moFfC3menFbvFy5QU6oP3z7mBdR3r4Yy55SxFZ7fkrLNxBRBWrM1RcXa4AeQ71MLogtEwocaDFof3ibdpAHQKC",
  "key12": "4v4XAHdqmR4Kk59NsYDHaa3hfj8z3ujR68jm2AFfSuej3A5ftqDrUbo2b8te1Rzv6D3uwRf2BmDs5S3VUfHM6UCY",
  "key13": "1tr4284nJY86ujE1Seq5o3DNe7ibiEUjmV8eQtfhn2XsVy2tSJcnGgiD2mnwiw6vqjbAKn9v6wwXx2mY253raaD",
  "key14": "4xNL9ja4C6cE2Y1pqmEgwVraHhTUiA9DF9wptY3JXLwJs4ThvK6op4byL776TNFL2b8fgjmbKu1NSbXS4rqZAbM1",
  "key15": "4aahFbbPAhWYqkjDUE7oX2JQgMu29RsVpANNNJCRckEBcq6VmuPbMgRzdK8gnzEfBYWsVTA74yh3uczo6AXyJtZs",
  "key16": "2Pex55KxdjjrGZbtxneTUkT2RCUbQgJPT2vmBskzozpwLzvE7TqryNYnPxqXakh8UUHwC9zmm3rpCnWQ3WzzH22y",
  "key17": "3vmqfiQLR3TZEhWi5FPXEjzCYeHXc1UNunhzYk24dZrUMStdpWMxkXbhc6AvQyZLf3DDrJTr2sGBnLcJKBZYVZxH",
  "key18": "4bFdFGT2yvYNQmvWCuiJwLnRvJSAarr3tuaDHduYrbGfYtkJD6EvNYD9NQNodFzfkDDBKhksArTsEZRRqjrtzhix",
  "key19": "5qm5Hs77vMKWeVVsisjXa5RT7kauqfMnyXPTrKvzEXGNEDrYQJxcKdyaeqPsjnZVtrvbXXh8W9xRDjrnzzCEgw9S",
  "key20": "41ue96MVQMTj9fij7psH5ZHn8vkntJh4hwwjD3R74xma4XyfeC8RayxQJUXVZ9VFL1wXKGhCxo16QpzRABqQsdfX",
  "key21": "cGGuu91mxHQWmjgyqX7Mdw5jtzoupQwHmRCkb9HZLwcvHJj2wxKmBypaWmBaQ3SXP8gXbv6WUsdRWSnyVai7ZE4",
  "key22": "587QVLdeiTZs89eScMsyCE9d1jKjP1Nkc6RLNbYDU3wajarXDDdcdpLm1jnsCWsD86Gn3iXqQX4r43HVTbW1fWd7",
  "key23": "49zUXvcZNqtqz2kNkJarh3iymE7DEcRZuoAkd7Piz9Kbb2QooEEAahByi6NLmDiNYBx2Ej9H4dcsPk3VRj7wSXDn",
  "key24": "2YYqaa1DmZJFwmyNHRDjdFb2Yww42Gh75nBrw9PYqHbyroWTcUdYsRDnSzzWvk7rZxQPLCQUXcxyUFXqEqVzrcXg",
  "key25": "2aCauLoA3NJV3Gpm1iBivr2fp1R26zjukydgnKebPACdj3jbTYAgn572bGyeW7mBa4VRwRw5kBAiVomE35noni3D",
  "key26": "4QHqWxU9DgtkY4TkdPC4L2ZV9fkYrx1rs9DgLxW8YXTZ3x9WCM5ApvgJt1aLFf4uHNMRBBh6N2TsDFXTyLbF4kbT",
  "key27": "5DE9QeYBorL1558yGwAfjUnM9YBFMejk5eFY1dghz13gDnLXwaZUT8G9DmGysaktRQRVan94CVHx61Atq3rqwe22",
  "key28": "2uB5nCHtsFFtbEDgadszN6BZy2WersHwrKTXi3ankTMiZkyEDrZdPf8VZD866SLU9GpZ5A3bbsYQvbbAL73vyPZL",
  "key29": "2BbsU22z5S9YmW4BBuQMcjtFpyKxXgjWSKEj8t3QuYZQdQxNs8J8rH8sGeB5XA1zupjGpkjKY66rF2Hh3ePYESMu",
  "key30": "4TJMrb6r6s3KCfKn31XxSEPimKch5r8bkbWWU1cpbYo2hkNtoGy9CavYaNdZZUxjEyyaHL3aCuUaJQCMy2xqWU7s",
  "key31": "38QRG86zmRK2ot153nrM47TW95bUfkwyQjZ4rEwc8nVHT7UstVpkuVtFqhLfx7etZ8zDGTNBqqonD5JiTq5rpZvY",
  "key32": "34RwrP5a5JbRdmFxLWB94LRhvBFRUA3SrYngsXwUsxPoHAYmCXfYb7RtQwqEenVNrjfmxov2dLFvkdcy8nruvboe",
  "key33": "44wpBLE8c6VM7bGBKrbwxJX5pqno8ZVUq5u2rk4tqfbUqEb49qKj6QVFmNNLh2rwNdEhKo6QVcSry3LpcRcQBPu",
  "key34": "2JSzkgPn3pA7fyX653dt9XekNvhC5XmALLgLTicAsaa78qvqFVW7HQeFsqvNwrSCj6NodANPx43pe3u9cAUBbQCn",
  "key35": "3caCKPcks8fzEX8fzxj14nxjZicav2nto3rhaMA6cEPqrUL7WKCpU2BaCoA5DWdwSeAnRD1NG34mt3Ph8NmpNdXU",
  "key36": "2w9rkrR54hVRt48YbndtysXiUX7V28j6KNQnLk15Cm2DgnsWn5GQgUdfasT3SovKXSspPYe8vkA8PySiLTuVNPnS",
  "key37": "3vsVWNy1hDSueJ4d4vgrM9vdeEEkymHUYR4X9mYhniNMWUzig57EDUgv5K6EJq5K6eY5Z6mR4t2vBoJqCKatumV4",
  "key38": "4j1JSh1GaQrsVa88jWv5FhiwmKqb54tKCGdvQa4ivzQhd9b7SwCbcyC1vHGifeHYztWPDJRdAuuURXRbs5P6qbGg",
  "key39": "q3QkSL35jnJ1qiQcw8cxFkZX87tr6ypWCVMr1Q71VqgQa1amLv3oiKrjfaxt1domiZipaJ2yNygrmH5rUfyyYww",
  "key40": "64qa5BNH1o2Hpo97ir8dp69TPsvnyEKEuaNrdromQv3Lvf9rVf9EzgYxM2UGEcQaNQTbVfh69qGiTush5KxpZJk9",
  "key41": "3MFLjRe7vanwbNrj6o3yaR1d8DmBqZpistdy8BA3Wagksq5GbV3TKEuQjvbDrqs3WeEtitjcLmVtgvgSLZffcovo"
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
