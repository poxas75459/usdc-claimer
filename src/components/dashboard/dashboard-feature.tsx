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
    "Aoh97RhRmRbdeCDEpN6kFa8VHRkDhi7DeqkdBg8icvxp5uqL4zSdYft5jVtEeNyLHSuNGCYwJde1RxyVRTKqj7G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3n8piqstetv5UqzV8NhU82WrUQB8FWuHP952tBAtRsDFtESs62jmPxTdxHpcUdGbEqUV6sKHFguUeqGaE9h5TvBz",
  "key1": "3KM8H4f3TpGPsP7p7JKEqAqfcgUu4UnFNMhcoLexEu87oNNpr6ogTgjNCpABCjzKsTbFaWb5XfTp3fmnX65dyjD3",
  "key2": "4oCoR2fHxHXxpP76Ej58ZNnDdSSbZtWvLFfzPVkgPpGkmGf1K8syWGEArqhvGRq1jq5yU645ES4QAHqnpCn51WxJ",
  "key3": "5bUnfrZApuefy6zF1tXUS8EdGDswg7tntAZLJ3jTHkYXjdppbJZhfSozvcxUtDTKfkvA4QCc8PQJLDzmy8PPrnXo",
  "key4": "5J4Xy4cyPAzEfyYJ5Cabav5iobJ4ggeKkvs1u6drpDqVwdqMRetaYdicZopQaJco1BVx2MXCeKcHWkF8eagsda6f",
  "key5": "2f2hEwQQKrX6egrifTPwpjD2mg9cnuzS23FVYwvEBt9x1Bun43Sg1AFigykJKwYGzrB7Pa12i9DaYot1STiSuig1",
  "key6": "4ozWghpw15dFM8t2SVaJUpBNpJfgGEipZErj162nx63LqN4KnLkZaE8dCaq8dkevbPrRHeGmqvKKgYUyzPZKiKDJ",
  "key7": "2uNjKaefbDMHjS4QW21GR4dW9UsSJpbyDsMAyE21dhXJWCdaKVwkcAVjsshzZpDEHDi3BJgGgxAywo4C3ZNKuesh",
  "key8": "2vUob37L2saWTNfefv8DMfpWz9zRvSvHLJBjdTpFPjMEaoawNTzgH43uuiDtL1n95G6WNogXisi5FgKuasRug7gv",
  "key9": "2tKyEYY3trwvgdmtEp3XNM36KKpoQK8P3qzhmH5uTNPakcAAsfKpGFf59QGCGsrgTe3zN6ekyivhAM5StBM9ENcu",
  "key10": "2uxePPDwve5wrZypFpEPHBu4kCrahKrAXt8EXegxZ4oqnZ8Q73HaYG8VpiToS1gK44mf7kzVr32DeRZGu7k3rEVr",
  "key11": "4o1sqNRRRutekU2Jwy4mYBHPNmyuJYnTJYvt1ZqHEDxRkwsSL7hXKESCyujkpTUYQvERh6JWHo17y6KD8MTfyBrn",
  "key12": "2MRGSAPKx5oNSGKg4X5ivJEDiZFqy8XNBBCYERwjptpzkRrNFE38pX2GHj8X6zoWYpoXnkxU6GfYBiNUCHPV8aZi",
  "key13": "5z1evp6qX3begt7cbJ9dpNKJHuBebKTrijMchbMxpNDMWkvCXhiEPrrpe9ozQbbFsA5B1MMyexAmrHhGamFQioc3",
  "key14": "677m5NmkAAmbtLnhfGbCrS2XNAu5zytiDGyqhbRGdxRKqNJAqwGNbqjx3WkWxym5gTMfnfzfCWr3nUWmG6zSPas4",
  "key15": "3NbSNTYkciPRKwQks64HyWVowgvRmB74gjh5ia9nd1XN5M2J7bKsY6Ck51RM4PXUjhPBW6WRSM25WJmbCG2bYJbx",
  "key16": "3qeVJXkBAdt1t4q96J1UJRovwoRwSVDW4vT9uXgciYd3HJz4U7TGJ7Vywvx1572V3revqtyJVoiftfcYcNR7FZhm",
  "key17": "2kucmBy9NQf71kngPEwgS2ikfHKmEwyapbp6eJs8xNXh72feLcweKqyDDWMHzDhxd44E3rwPGGLaTa78WF72CrF9",
  "key18": "4o7YQx9MqspHSdzrdBC3A7HonJeZ3KTk3iWwv2YWYsyLgoAapFLzGEzbGeeaK1JRUoVGqr8HArRRowy3paMH7nFc",
  "key19": "5LBzVjZoEbMpmLU3kkp6ZM55aoGRNL8aKWFtkB9RqoTsiTzc9xvExyCv66mFJtjR1VihvW5JYnxBCBGyPC9CCYAe",
  "key20": "57gBjLzEv9cBmkgCn5o8tcb3NdxJkHmQXgcdsj35T52AWnXszDVV21p3kitYZ1aGKLQ3vZaKRCEnASxQHFezmRKJ",
  "key21": "2Eb1a5k3X7dX3xGqFeYJN7GTDN9Ycw88thvNGxZA1bcf9y77AwhNYXcE9ZZci1DWy24sBEzQMVDL6WHjSvvRVrAi",
  "key22": "3nx3HtkkNJK8Uzn1mU6vC2PG9wDQoTLtTrTevXEuzXAPwU9d4WGPFCWtvcvQwgKLLsWQpCg3Vq4E745ZnEseFGA3",
  "key23": "4ispJMfyW9gYQqRfnDwmx4eGmFkASTzgqH3pNphpF8LgJULdzNyQyvncoEz3F7Eqh6ZezVEZb7Bu1sbibjLsr2tZ",
  "key24": "3DnRRshfSLtuhoq4QN8mULKo4ooqKFoJoXKo5Bcoxbxfw1bbguAsBpoN8SWHUCpoccwDLkfegPMAnVv6YmTBqhnT",
  "key25": "2ez4ipbvn53UZvbMC77JByGeb9ZNDhATsuBgEN8g8XN8ruCiswB5ufJQME15kkZDRX9bFk4Bj12671nQf4rcE47Z",
  "key26": "3xggttjzvCntTxdo8T2JN45EZhNjPTJozXzeQ3TY3xo3gXzPzDAk7pREC5j86eD6Q1ieP8r43JisFAUSrK79efKF",
  "key27": "oiRZ4xszrUdHrrcCeNCWuFqTRo7QHapfJZKevvvkzUU7xbMCRXBmokqzQqsa8dMqDYXMkFn3YWt2APdptnthKEf",
  "key28": "4YV7XxKgYGoL2Au3F5aR3D7KrQtBeN7yme1yG6Uke3z5qXtdDW9Y5me2GwZoZkDDgJGSbYieo3JExrhEbGzRUm9X",
  "key29": "2YZyV4UFgXwdZEnjKGzJSFcabtsmovQHTjbVGDZ5xFFUtDDCSwgvRukXYFGyTXg3518SQScAzvVHtouUUBMbRK6n",
  "key30": "4uqNpEjrq96yxXfMtvhNH5VxkLXNtEgPxZujpw6qgNRMJVXgY4j2zRdAU7vt3ieehWPmv7xwwG3wU6kJiTUEGMbE",
  "key31": "2Q1FNUnXHryPaDT8A3Rcu2vDX1FGtCX3uzp3HJGvraARYPAEeuiJA4safi7JwBBEyqtVi9aVfhmBRYpcVi5QZ7qd",
  "key32": "23EijDZCAxTGyTLVcGqqj7pC5MGa5hmm8vG9secKwJR7rzjRZCGKBfyjemt6XYZ1fqu14oGkwi7QtNGN98wV81sb",
  "key33": "5d2zMESD9vUJxyd6zbQQR9Lf8n8Zu54KmarHZJ2XiT52PiY2TKC4x4YW38D6a5A4b6AKRqKpXY3Ux32CdsE4xEj",
  "key34": "2Ko6TYdn5oTe1LuJtDPPzPZ28mvJEdpyVLhkqXx6Cks9QPqDBMXKLx5PwxPYiJ65Yv2a4QPkYh9ESGYLtFPEr3V5",
  "key35": "GcBLLHmughVs85AnVK2mdX6V9k3Sxk5XmEJe5Jet6HnXqsS3pLFMHZgb4zVomKBroc49yRsyY7GzzzSjrcuwqom",
  "key36": "rZ5j8dcwukNAzQd9cVM6EN8UDPPuYnJnF33ohMDnkUsy5L4734dAGzUaCUycpJ8Vt1dr1JWUiMEXrsMc6Xr1w6Y",
  "key37": "3SRGNcqfssw9uXnUsnuR7MzhU1DAPBuzmrSK1ovgsnkrrBBwoVrds9jTwaFqxNUYxs8dYpyz2KLoye2W6d4NcDQQ",
  "key38": "3nGeP4BGibuWfYd53dt5mTBWJojWyJNV6WuDFYJyaWNCrMpCz34AmSLDLfP9vj7okCuEs7KXQ9MfxTrDEGYBP8Ho",
  "key39": "26JCxjKxDJHsTaLmNZ1ZEwYHfMFEfRG1QkBk3HauwPHEgZP3mCJMa6Jsx4XbUh6uFPG123EqnpYj3CgWeMTYJBju",
  "key40": "5Pn89T3nhRJ5n4y6dKYPsCshkLXjExsTZpXgz4shF3awXFbCjSUHCpjWTamamhwzf6d3GZv22XsD3khECXnjeZMW",
  "key41": "31M5VHCXRs4ZVgQ3do7pTCnfyV3CNgWqFppW5vDsGpgdzAv6aD5pP4QPGS4nbLvywbFur1JAuPP64ac2DyvPYyY6",
  "key42": "2RFgD12Dp6LrVnzYUhayWRHLQWJcEwqg7FAfHXbjtshD46pnsTWxhDKfqTMJs331oMj2SRx9h8KcWtKx57mc5vuz",
  "key43": "2trCDs7qbTJKceMEAtfvaS94p8xLT6w93a43GHhfNnFYv68imbmS7tLAnfnnqZUh9W86dHtk2ruDKkqnRWvW9TAp",
  "key44": "42EVYma4djqxvfoVe2T4wcNtCHQMZ5uTXjid3AFiRNJwBLFzzNezYn1WgabckfuX83fg67TRB6pQNNGS9AZEbrie",
  "key45": "4YKmXxNsmCTLEFPM1L7LJQpc9Q5PHMjoWzAoFP3KcWtZXigmP6m9wLcdpbwXvGwj1EyX8cBn297Rsnv512E6RvLi",
  "key46": "2LjeMKhaZxVRNb9U7MVWiJ5GLwTMBXLPHkYy13TZD6poLQbZhnbHyVyix6rCWEqQmv8dakDyXxT8TJmvdvN7gEK2",
  "key47": "4gXLbry1MYMDhrKVds8exgW6pVnER6rUy1c6PzHg76p671mUyTUtbKybkhtqFuMSVhETtyGiWi1Pe9JitvpcutGh",
  "key48": "3pHbpHhUXmtJV7gVi3iUjadvMVJXKQNvN4ToAuQaciRJxS1cHn8pbrE5AtGivkA9uHeErf8ZHbtcEvFHcpGrHpeE"
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
