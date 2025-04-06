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
    "3ArJzHEdExhbr5b3j5jYeqBiD9sey61RoPrUQKA19yFG8wzpKXmvE1SoCkwkoe7U4TFPLh136mpder5AVyMrTJM4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Et3gpHYwq3MHTeSGsqFuWy8sEHvxUDfMK8G2Vq3AbKqaLiiDkQkfYba9xQUXXBu6vidqZnyf5AD3nw6JcDkWjnH",
  "key1": "9E6BSxe9t5ApLp3kZSvgQ2sALbwNAGyKRTBGLtcG2nEpKf42CY8Qatd5ytXsx2gUL4KCvUnFeB6A2fkGxWSzMJq",
  "key2": "5tus1UtxYznmM7QGT5CozjVNJtjQqSDnivmRLUMAaFJiVcfuYvuUvEeNFxd3xhmsvrwx4CUa97CJDgGAgG2npipb",
  "key3": "37dJxLuNVHwzui9VjAcA6zkabyxEqC4xDwq5J5xRLc84SYr4kdwpJVurS9wNLynz7DcRtyXzesvphqL368skfNMK",
  "key4": "2hbggfWyeSuZnyZFtnV2mxGX7v8jpd6KrYTiQnFmisPCn5d6YQGmuoPEbxfs6HYcWCuw5F9rimKQdGhgWWzesBb4",
  "key5": "3R5i166R3D5b55HRbrh4tbqmw61epcuffVdYnkx5Q8dJnaccsEy5u8MiAKKd5oqPpVk8dqp1xiSZYohz45xG3tkg",
  "key6": "2jUtt95pCfgrPvRph1A3qFm75yqeziE8j3XiEdwHLtFLPZxUaMUYxaXatUeYQ6NwBrB2JsyFRkFH6AUawmms2MR2",
  "key7": "4TUkomg18pVwSPnGnwJQemrVgkLVnbCJGuXjKrF6iYW84yCpwZq9uJyuzostU5uh9WdXrLFUANbPP1XENH6E9rmT",
  "key8": "3v48ZU7DfWKGQdeQ348AMnVZ114hHk96sPNpogtYWtg23SX8hQTjpB36JXjC2aEr7nUmjnnhgi8W3QrkHZ5HLtK3",
  "key9": "3R4x6HPepJt6QRnfG8gv83qxHYw1B5SDFfxeqJymwG1AcbfQBtbcXPgutRFnrrreHVwda75jZEYHTN845be7ovDj",
  "key10": "5AkESKGBJDttVQ5jRRgVaGVUAQ5yE7dW9K1nmXT8Z8wMkMwqmswUPyqQqjiyaUWhD5aULff1R56JitM7b4BqER65",
  "key11": "2NKHg9V5x9n5krwDVZjMWXrLhnivjxE3KSs4LLhzHK9tS84VZfio81CmAFFLobsJ5b3bmN7TCFwarjKe7HfgkPTL",
  "key12": "5gfCw1gSGyoYWfWdVZGSFrJeNBrigXqWsZMtuuVytDpthgtBn8usrpdGmPjVAYi2pmi9inAyvtjJbtU3EWzWaFf8",
  "key13": "3rjdt93QUQaV8oGUKbj8nuNUNNwy8a845Vw4yMrktHwU72GsBDr2Watr5UxUvwopZAgM2tDTKM8uwguj94NHKKgY",
  "key14": "28J1zhMFscsFm77gB9X3pxfGu47i6sE66vv86LrvVv3Z2yr9DPkCG6q3QK8WnseGDp7SasNsGaTMmqcDRDhk8Pcr",
  "key15": "2nTv2R5kafbUQuu94ydcbaPLfJoN2JVMxUqZ2FymfPxrRVKxTDtrgbS3fpz5zqjPifnXwUtfoCCp6ztfJbEcpz7g",
  "key16": "3RLEoDVNR9g46c24hqxb9gHhZPE3i6NhSxFV1HmgCsEy8KPuPYHDS95FqR7Fg2tGkPthK1C7nhKYkPvQGeYDmxB2",
  "key17": "5h873iT7TzuFNnbn42WZJjd64Q7xkU47wKn54P3V91gpWuGADfHD84HGQt6K9FoFSc3pAFuSWymtbQtRaZQjbQ4p",
  "key18": "21jxjkiV8u2L7r8JcaFVcsttFbfHZZgh1UT9foTnSHx12vNMwxqCqmbTAkHUmsCAV1cvGNHv9wuVEdvBTkaRxfVx",
  "key19": "AuFgvzUz3BvgiXTLudKeNEropx3CrADhcjj2VWt5jxTnasmZdUfuqPxWjQN8kC3kJ7hZxUEUPKPki2urUM1pHEs",
  "key20": "4fNJcKo4WFyTXq3ibxUxTqk4THdH6xhskNfSgCYtJU12nm5aX5qRotWzRyc8jDqvwnCo1y7rTvoModAKE5MhwiP",
  "key21": "34cmCXydVA8LoASpdaww1GXmPzaQTEbrtdWWNi36UvEmT6Xq6rwmqhiMrRTUsGEiMGt2n8JfXs9GzSwVF6aKVzX",
  "key22": "2ZVULLQRh3KKFYJ6oYmzUSpgBduPxrZUuMr2tja4fFZdrPgtpWWZvjBw7z5eUGtDJDa6SdRHGvUcE1dL9jQGEsrn",
  "key23": "4jbj9jEH7Moz9BAdAVWD4spoW1iVV1Peep4UVWSwLR6FC8XwXPJ8nkT2TEjwCU3DVw477RSrrcfHJqB4uoL25yMA",
  "key24": "33K113D8wAVdgeZDe5LDi7E4bCutneT31sFVCqp2H6EE8RD9BFuWjYaAsUo9jAAtD1rNqrjmkygE9TskdeDJMaac",
  "key25": "5N1RC3RBRNFyWeJa7pckaEBWU1GFmAfwxwWrs9xBWdxk28r9iRzUvFNaVcSbyfXumPXxuF9S8YcdwtxbrhRhBJCM",
  "key26": "2PGgGKTuodzfVfuLPxsaXXkaCvGApTQpRiXcepL4X9LbjH6H5fJReyuEG2nmVKD8aLKa4sm2WjZnKDn6qXDz9aXd",
  "key27": "QKAhKvn71wh6CYCcNU8E23MvaF95rQ4C5CewkSfLrbD25yFL7gnEw8HiZuxZMnHNQdkuLNKNciX2wGqrgZ2gFfz",
  "key28": "d858D8Hg21SYQ1xTLphrd4jnJWGXgxryv7Zd7sisp48t4ZPPao5oRnw11mDJZ7p62kHMngDi5w4hQ3tRZPqbaUY",
  "key29": "48A737vPJwdsHBTCGCrVk8A1J7EbKXRrBKTeRp6Jdn8bQ19JMq26EVTDBNUxYeMPX8J9yJz9NAVsxUvJ2sci77Qx",
  "key30": "5mBVULyh3b2wMLKRPH6oAyGjrzDZdR85TrRSiCC8xyNPwh2SD95y3JEBr4HSTYfcXJPuuyWEThpwaQVRHkQxhCmL",
  "key31": "2eFUkwTdGmtnxLCEpnjv6PxJbveqVvwoC9t7Mp619SnXxzbtabhJB9NAuskNLiCUa6zyZKDdh7i5Pui1dB6ZPsxV",
  "key32": "QNuGLuy3PbxoNX7r7XtrmCV4Z9Nn2vDedFvVumhHFJS87amh9thHt33KpGb7uEFGV4bSi8FshxrRiSNBpCMMQ3n",
  "key33": "4s5ap9iHpEXwHbnVEmuGPdyq2DM3eq1KBkSod1yRgNXiGrvAK2bw7cqixrZ5LeS1VNbcPBEVGgUL5nB9vRUNMLMv",
  "key34": "2XCQs8gJsGYRHLCVLDD48SWoxyBrqJTcfVnE92kgrHL3wSKxciqw6oXKWLp3tR127reKXtvw4zpsf8BkxnoGixcu",
  "key35": "e3a1QG63H7gh9pMpygk969pD5bcq2zAGhWcdDHF4GEC4MWkVdiUrRzKAYfr9eYfknhUUc8y7ExahUmgGXWF1dBh",
  "key36": "5WRTgXBEzMJEqWQqfmFwAnTefvNfVAmCa4g6dUhTWgLguPJPF9VzrvLso4VhooAZBReB47NB9ut1xMzz6UYMHjEB",
  "key37": "5QqrvP31gsohbCRsVzU9Ubrj2wv8KtiJ9QN5JHyPN9vWYDQtLMCLjmCXAC8FWTRDdFixtVVTFHJkTL8kdkzRipHM",
  "key38": "3Rvk6GDXzWzeAQ38E497XzSf1ThGpiWRW59CVbv6co5d866Qof5pYqWhvtVSWJRgMEp9KDmAKsBQJicKshgEQacC",
  "key39": "5hoELQfdPuhf6KoF6EwrZEamH1qEeZWcRSKWokgELYiUFNr5FrnPyempzrHtsMqH7iQPJMckX9iAmb3DuD8ej4gU",
  "key40": "2Su9XgAomaVto6yXKjDaVnhx5n97BtNb3HC99UZB9qXvu8uhuaeDEcu4i9j1DEFzXMWVM9djXG15PaBF6JEwS4cj",
  "key41": "4VHQmv6Q2u68aqkNNtj7q2t9vn4R7VsCyFjrpwRCE2yavg2XguhFmeCo6woZTKKwNrucHdEHYXnb8LtuVWSw6iwM",
  "key42": "3C132fXjnq7mqPL5S4YGgjufUGyQbCWmFjGR2uWMyWcQFZLRbPJjvmDKsp1vCfJdt9B2nPMyrStK4Emysa13FwGr"
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
