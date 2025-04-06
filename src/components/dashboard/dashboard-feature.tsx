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
    "Eq7YMzkPDZwL8azXReYYZ2V4k8oUuXveh57sxzqHwaeb7wkNdLSbq2bjMSCRYEiRRZtAjkVDTBAaajQ6pbgir7m"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2HsMuazPPeTLk2vtEyCqw6sQoxy82CxHkkqhdjckqBEtc2DcgR5iv4Vx788Dst3smdy4MSnVchhzq3YPJkwGN7NR",
  "key1": "2i6Jwkrj3SVqQHq2yW9C7Yhz6aMJwjLdst1Veruu3156kFA5Q68xML8h2LgytNu6FFDaSRsuqQPJwZx4CSiy43Be",
  "key2": "2TeKwTqGE9y5NdnXVHMzFr5JDAVbDPfqf8HMTVA1xXM3uX9sP158D9UF3uUQTME7dSDDUPwmMgn9yyHhmA2oYNTp",
  "key3": "rFA4WQEuGygE49ii7aPLxERwtHXxqUpVphCuATPPXzKN5L2Ksih7U1PCB2SXhTUUVr2gHk6Pxb3H1yGrH8NNbSr",
  "key4": "4gqerGTFnCDuT2jrCJSJbgNSQN7DYS1baCMxvnNFGZfZqBH3srCLQsoTzE3mxdvWBqL8WbA8h6eaykoMrgRygmzT",
  "key5": "267Tcg8RLA5xr7nmPvj6LbWJ7swcxKWLYF5WrkPFRU6ht7y8q5kmopRMb345XG219xmSH8npkca6tXsVrHwGPSVG",
  "key6": "5r2NW7kYK7RPYUe3CNWGVSwAgWhGrzfPos5zTxh2EB9yMKUMHeoWQX31vCuXr8aQnSJvQrjVFcXoKWgoXDC5rAu1",
  "key7": "21ARZ63GX2yquHbHrYvAqwzRMRzjkJhEcCbVHtnPqPo5ja6tmiSSHzy2jSWTjb4MoaxCiZm6UhLW4wGYf6m2eDxa",
  "key8": "eyKhvu5HtzKVUTc3baVmmSNjxxQTpEBL7bUQywTChayYo2Bnh4eZ9z7F2hMNDuuAq1U1vgsZzxr1goecnyTg3Le",
  "key9": "5pcjiqsJosovFccLjHRXi8hHCfFgG7VVDAA3MJNDPC2ygPmJKEqLygR1kw9RSYfuASjLQXhZRkPr7VD1jAMYeAYL",
  "key10": "3PvTZVV78oqGWUHggBpwi1jD16eV1PykmwnERiXcAqC7LTZExQ4rbD9cQs5UXagr5LMmQfDBK7M7Z1RYohw9s2p2",
  "key11": "i68PkoMqi5eoU7CbFVDQkvL853c4C3zj5Xctcqwh6aw2pDGb3EfWcggg6UwGj2frreMRBS2r7JjNHvrEE3ySyuX",
  "key12": "nzpZ1yTNYwqMmY3bVfzT1gBByjGQLiyMFDUwkZBePQbHjg6wnsRnYH9SXM93MTqkwyE1ZuGp51qhih4ck6PnXRh",
  "key13": "2v9DthzS4iV5K8QcBRjYUeGFj4YWaWuPvUwYRfA1e7XF41Q1DYb9mTnzoUxtu3BdunkQQkbVAF5u6wzn4oqWYU7w",
  "key14": "4XvSETzAEeLCrFtFPCuwpE8TQHRU6f1eZyNGNMd5ufjumjggV3fH63vt3HpkGZcBSmogR9NNoqS89wjvgJxSGDhb",
  "key15": "BbJAf3JUPD3aui2qutiewqmYmW5wEF7fxeh1Zaqohmco3CJdf66Pg3C1ef6Xs4iSrqBHw94U5asVfANAqyXSzAT",
  "key16": "4rgpzNtrGEDsm1CKyPkaBrzaQvWmWJVcjcUr3MbiA5Uwrz9ZtjbbRX4cviZ8VuU4b4HtsW1V3JPrcBsorpF4gwS4",
  "key17": "JBQcFKgQbGVYz4DvjNXPPVJXx8aMVbjWxN8kziViY6uqzznZwCMDacAJgURfhZmWZRaQiiKgZ7wmDNEnLeSxhU1",
  "key18": "4iweo7AyY3xL5fpJ55G6V2ivvYr3SAi4xgte971eyTBwwQHwFYjJQokM7veQdZ4xxJuax183HQ1YWHn2wh3aTNoC",
  "key19": "5ttJgzjvsfoSSE9vzzC1P2dMLFzv2uZXPnWGgWzqq5i3BeR23jzHdWASwCeBTbt9TJM2dagBJA1RycNv2PtKGkyF",
  "key20": "51Zz5BJB9ED3XAs9p8q7mF6ytoKmFE2rSNzThaJJh3EE1pHK6ZuZt81CefdDrs1hWxqf62Lp1DsHp9ywzSKMbweL",
  "key21": "4fy6F8D6kzVqArtNrytSLRzU8QPR1F9VHSM8rjEDFXvxhCRcpaJFN1Y83XjkGK1Nj4a1eCxSe6ehuVYvaLKMiDUb",
  "key22": "4spMmY3ETVn1uZVfasKBPrsiNrU635S9DXJ3hxdwyuZVBuymEyRMNv6tsdcZT5EuG2LgLL6A7qX1JQYxn885CRvA",
  "key23": "4cBNFbZe4AC9CvVW1q8ExcWHLsGVupkZ4wnKcrB2WxqSXfMTGhCaHVWMmREaXmrfwGRXG3RTCxVYAvJ75xkY6zk",
  "key24": "jyMHcaL6LxigsCrb7fMiWqpjbdSToDiTvJc7XBKe1nN3PVk4EZPbGMk6GGp1FrThzvVTfzTnNAUSSDGQ9bGPTz1",
  "key25": "vDEW7mAi9dGDGuSX7UzN9sEwjthN7TpN2AxJnWG8R3RT1eWDRb656UX6j3163sYFEwf3Aw6yQeDLKQFCD7ERrGH",
  "key26": "4QB6j9i9mwHBUtQXFsvWtEqn3HRAZ57k9Eh29SJGihAdXjTfL29n88Cm8Q9ciuC2QHPM1pmk3EsAUxqp7ZAi7iLd",
  "key27": "5mHokZ4XijT7QLnfC38hvU7NtPNpQX7dX8WRDH63ywcA4rsMNTP67RFF3nEwiKo8pL88TNhRLRjZNVhHADEP4hRT",
  "key28": "NoTEYGu2QtipC4RB9pQqnGAU4XCezU5cVVPqejkbAzWLLTMmLjaMJYFUSw5X4L8KidjkvK5ds2P4rTTEerQo9oh",
  "key29": "4kRyxxwLHp9ksMXVftYttuhNybKo4EPwBqqsvE7JoPgJ9nkHbSjGRxAq6S2uhwJZvj2bFJmKuNMsgxYPs8oaPeEy",
  "key30": "4j5myNo4UWh1Gzc5cmYWekNwVAuCnnRNaLTts44W6BV24spMAZiyHnhYxFcc4RRSb35uzvqgGVtXwr6RAvCmVPgX",
  "key31": "FXYCRo5wfUhTQR7QXhHioXWJZST8yMMPJUo1xyF9jRSqNjS6GbUqRyT3RaXsMADxL1hrVjTJPiJfXT2kQMLXdUs",
  "key32": "5hNpQ4aQKCYjo5tv7r6dJGWL74KXMsibg6MdDr5rg7sLbyEWVyXpzhZYcTdaMuxFCcRvh4Pohf3vfbezpDCAkP9m",
  "key33": "2MMK6kY4kLyUXB1q3xrx2eMZUDS67DjyoihxN9pFywxvrqAA8Q1gdK3LAnBsa6YnK9zuK25hRpNMhHoxcK6gzGLL",
  "key34": "xU5TJ5DAZsdU9PUAVgfrz3vaGtEX9AQQtj8kgecN7o1opzDKi7Rth6UjoW6ePj8CYWkmPHhpa9YgyHX3321ZR4H",
  "key35": "3mRbsXNZQAF2EfW2VhtoZyngpE2jLYrxuH2iDQmVEvUiyDw85d81SeAk9sdqdSpir9vj96FBcCmwVKpTQxqZfvbZ",
  "key36": "52hAnPFivTFfeiWcfZGPRofPUG5vfd9wGm6iCJ5q6gG98RSKKML6PeK9JofMuYD4QSVVUB1LqGF8uvVtxL9BisQF",
  "key37": "5LTizusiS7GJdf5zkn3Mh4brexk9JEgFPjZh86RPQXW66dPmywP9QwbvEfe1b9mLQGL5QKV6YJQaLwRNHM2LwAxW",
  "key38": "5CUo2dyaYgMw1wdXPVe4wTg6kQScgCuhwKgEdUakYK56eiAtRcDFh4bf46eexbr6DggiaAF6AVatXPiqvrCVjUwh",
  "key39": "2KLDogvMX2ZDhohpBFu5Yc2d47rKxb3GUEXzYbUGBiTZkXrLuWW7znHmakvhT8WwjmPXBzwiLf3VZH8V8uNmFvvV",
  "key40": "3jxTJ8DLABVAdL8x7vN7Q7HUbz9grnvEsSz5zbEGw765Pqm4hP6rUd1JBDdNadKRAzgqzZJZC5ChmfaFXyWCgVDY"
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
