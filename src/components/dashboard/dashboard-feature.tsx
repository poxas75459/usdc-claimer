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
    "3Q179SF7sw8yJnvZYvRdFTaYRdXe73MWL5ncpJiQoBnUYcXirPcUYEL7KFgaqzgzyL9hGpPuhePm1yx6E8h5QAko"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5tibGsLomjaUMrc32PxCi3ZH3TWycEtdAS4deGN3XckWJSzWohhAgMViM6JPJpe5tREdgS1KooGWrCvokM516HP1",
  "key1": "3kydpsauPyj2yuC6xrxJQxiMwKLHF8ND6LcjnzCzQhweNiX6UQ15Z5zDWs5nDJ989HKiiHYw3pgLzRzsGgWcuBZz",
  "key2": "3DGpy2pizJp8gvj6bpujiKq178aEzMNL3pZ2UGecrGtJvK7Ph49cd7TXi5oM8GevXZoVhtXE9WqLhHPuHz4cHFgo",
  "key3": "3sF9bhn6Q4nTgF2RjLuDB2ShaeZBGD5FGZpQSqjpDxsMeFNA2Dhonm5VjbYd6dLBzy4CT1TRB8jebo9jhUA1nCQZ",
  "key4": "T6K8Re99K6pZ4pn63hqwKHY2eDKYXCFko1GVd1z987jfNqKAfAiSja7WkNFpS6bGAjvh1Gq4M2N9bgN1jLcj3YG",
  "key5": "22SKtBe4Pz58ZSroSregBQfCUsvoLmPw96K94fQTwsJsfbLSaTcWQgrN4YuBxEF4Tb9sVSz2MScjggz9G3UATs7M",
  "key6": "3jPbkYJV9sz5Am955SzVg24p2J8Mcg7CMnj75UwrCGNZiVvutxrHZiXLi6p5uCH3EM5nBdYDiioZATrdgicZCim9",
  "key7": "55QJPT4U2BBfGxoAPD1px77Vpqbvm1uQfL4VXRXUHUGsfAGT4a5AzaJQguZGxZFvr3NaX1HG6KA5iYL9qFocZiLE",
  "key8": "2oaVUs1Gn3tzg5usB6Bif72YfcxT7nAbRzG8Vv8TJRvpexcgxcgBvqvYXdEPi7knJxF2ujt7YodXz7vSYdieYEhf",
  "key9": "3uDizzgs8nTy3LjYk6vniUkb9yZMJPA6dq1s8nuMmV3bc7kiFbNxyegdJTfFryZeREiCKvA4ED4U7CuiBzjsMsgi",
  "key10": "goiop9856Uo1LXa74LpdvJx81xqiddpHYYunGwAWLuZCXCvYuubhqb1xnTRVdZRLiQ69WRnaCYh6xLzegeoSGXP",
  "key11": "4yE26aomaTgsswUb7pMuBg6kqRqz5TDUHHzbhcS8CteSeCV7D36jduXJrpsofNgLR5QoUf4Vny3cjKjydfAxtMHK",
  "key12": "5Wi5DoAecapgfBkA8EdJRCWhAgRryrBknrinJNHt3mMgDNMQ8bLbqwMXW47PzfzYwh2bj3mfhUnYTtNx61K7pRk7",
  "key13": "3qvtXuch5SSRYPAXaEWHtnJWq9tJdYHNvVymutJ3VFZjGrBHVazbEGdywCTwSVT3tpPFjaJ7g3d1Ydnibf9qGxoq",
  "key14": "2iGcSk2R5WAhh9kgQr2Yw3xDSUrJ1MS6VwNNdxSxixvpQDgvUsWhmr8w7VudXt75327GpP4av96mMqvnWYVrY36D",
  "key15": "KaT62oQFs2QJSFWfVfxBGthQqn9dF45P8766qmx393XRDenRMDr6x3PSw1haUx2nmfpiUv41mcKQjAxXEvNruxx",
  "key16": "5xWPryUJPFyqr7LmgRDNw2LvU8HCfhtA17QoVfNwAKS7fVD7zAzpXefshCk8urgfj3S78ziicukrhSVTr3bUJ3M3",
  "key17": "TQU29y9ucnZ2PKq6Fcpvy3v6xt4tXJmFRuijr4AS4Q5HuxWXiYhLtbV5kpvcSes8SuvRe8M3z31TJetFxeJo3P7",
  "key18": "nWBQMEiwxs72t9peUbokyK4md4A4GyajLfSPSAAW6gTdpGB9Z9dhRJw6biP1qv2q9gQxH8vErm6SenFJoa4adfr",
  "key19": "3KCdQvFTwnwJfeBzdMneivuRLnMFtNB9jgjwEpsb3DAqDqjLzBbKNeegshNTsczGDnU8599JzRgprgDhSvEZP1Kk",
  "key20": "4A7dQVLeozNmugLDotbtQcWreQLsRxfKuTU9owTmgt3v4Jq5Cu9a2jc2qLqhbGvpRhKJz4ghQcBu8uQ18TLzE2SN",
  "key21": "5ioLdxLUh4pJ2f8qZfXHvdcR4Wg7697kwT8fSm7S7VQjoZ8LpU9MGNCX6wCtLYG9ARe85ERgaEmGoQLJbg5L1PAc",
  "key22": "2MJDu1YQR1QKMon5Exk1PswchycEigtvkpW19ytWkpA6u1M1rGa95t2H58VXrAeh2zbeDzKrLsKvRQGkrqMF2UKS",
  "key23": "5RsTofERGa2TagEeCv3sxQogg8mRPZZtydinGkpkDYZ7UbBvfPV2qKZU8M6kujrnLrFdSAUis319UtY1DAE8q5vL",
  "key24": "4oYH2tAckeicBamX2em2JHE9GjrEfqEwMmzmFCQBXGG2pVX9dfPZxRUVipDsNKhL8cozt2cyHpcCzPchy3Abkgkz",
  "key25": "21KKnaEmBqWqaJSbdRXG1a3HgrEhK2wK1rJ9fYCxLQXy9f2z9KA6RzoyiMpVLmed1RpDzFBbR5jpkpGhD7bze7ho",
  "key26": "63iNthFfw5L1MNoXSsb1HyCPLqaAL7wjsj7VmxZfgHkTP1SRNrXxk4yi9YGhHhKJG6fe1zHsoYVWWi6pZinKTgah",
  "key27": "3VEhX8HNYCeQjUwZnQBMkmqnzAvVXbJ8voRPfqzs4PKCdNs9GuJCG3nA3zGgUaErz1PCcHFguEwrTXndXDH742vB",
  "key28": "4J1C1FjNv2da5UgzoatxJ8hNMQxyjdmGg46jUz6AN1oQpSmuLG1fXGDP5m4Hg6Zy4i4TKsXoK4YeqtW34uREXTtw",
  "key29": "4U5xxEjJoyBDfaJGsyoY6R9QuANoTDJzzYt4oQg66x9JtGuV3np4P9qucETgdvFXHXedfEQezEMBzbu9EbzHnyy3",
  "key30": "4WTRoPt3R3drSbheFgDhdWTktYNobgvLxWxY8z4WGm72qZCYVFD5fKsvPFSksnhqQbAo6C4JnZ5dheThuotHDwhb",
  "key31": "2A8KsFX6ukRMmmgW1WNq87Fo5UJ3qHcDMd4Sxw4QcHwbUJD2YLcJ8JMWGUvEW89jWL8BBh2SdEgixvXR5uxeoVEj",
  "key32": "3ULuMsZBpBUq6BetethLmbMMCCVL1aSUKDKBkoyTjs8LsV6QDxhrkHvo6veYyBoxETMVDZQpzcvUWFkodzwVBztn",
  "key33": "62GajjaaVzZYjdQ9WQ46K4SrdpZiGb9aXBdrn9EaE482Cy4CzB2SZAr6Acg7mZp6eaEGZ1n3QKy1SW54NSQK13NK",
  "key34": "8PEKQcPEohNjPPsyotfjV28bgbFHEW9tZpQaJCy35SkTzUK2t82Q92LyxMdB7PFBRezumivJMRSRPZ67Vi7PfeY",
  "key35": "o6tVL4fb7VGTphPKxUGUcV1ScyY7YddDCCmDA4KyN6RBXS79h3JQfnw3xbgttfiS8SpMNs4LC3oiEoruSBV5EbS",
  "key36": "5Qb3v93aJK58HxnkjxGFpWHNpWbrDVbFekyVM2v2f9bu2dBguubdaDskedx1w3mQB8TtFRjAEa28KzXYCQhHp8h9",
  "key37": "3KUXMdy5CQyDbz1gUubfxSQWTVu91uWVoaWtpSjyWML4qdvihhQytzQAVCT2PS5Nwq3ehwL4WkFdoB5WTPrzGNbU",
  "key38": "4KdSZkKZX3tvE9LS4oe75jcsKsnDSTmBNZpTNmPLHDYtog19tryYXYyRh1zSokT5q2BQSX5YM74cQSqg5y8GDdNo",
  "key39": "4USbAZg1ci7BkYuQKh46F7BhBkJQG39dEKcByHTUyEBUSs8BAwjUVWEwGZkby9hRgSbYT1MwYZaRQcLC23XnTzMc",
  "key40": "5L3bkTKr7X3ARcqrmj8LEXtDSjpdUzZmWdrVCeps9oEZh5JQy8Rk2AC61rXYERAngyCayEYGZN9t36bgQDrG1oEN",
  "key41": "3YQnN1T1dwt42kEMLwrdoD4CAEA3M3TPc4zmGRd8QavgJQnE7vKMFDFa9muthj6qPhgCWjrT9BwmLgaWw7rLnv5L"
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
