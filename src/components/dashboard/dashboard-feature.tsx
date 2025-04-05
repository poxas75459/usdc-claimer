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
    "4LiqVsrkVSUmykQ9ETcKPZJjGFYfXYFow63m4UEcjCS728ZVVq7pniRawVDAPeiumLKFxPHZBrYkAieEXqtzdFED"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5yJziAnwwfhEHPihMzsY9M42j95QaLTqTiRRhBu2dPHZCzwd4psKt8cQ8RJk2t6WnzQAcLYk4sx61r71tQjR9jf6",
  "key1": "4fMhG14kogpscnsMVWQiPjstxYxwVYs2i3Dvr5jgTiSvrTre8fATqRsKsL1XSudFSU4y8RxSo2RaPTmtfPNWGnCJ",
  "key2": "3uXuE4PFMuXH8oP4GEQxXzdWCYVaYUCsYAL3EiU65DTHNWF9xpFDSocwnrgmeLUqpFSYAgB2ZiwEX9BMpE6hLvwi",
  "key3": "FrZ9rF9GQThjoSjetfeLzPYhnZHhPZ2swERPoQXnQqPvT9A88EFmnuCkGkG467mcqvtwZw6KzgkkMULGQDHVVkS",
  "key4": "4WGV2g3oBY92EERky7ztk7eCHCJpx1K8aNWvmQ1aFimaz3o5LRzo4PqirKnPPK4o9UmR9YdWJeD9LZbqJ2pEn1FL",
  "key5": "xPoywQesYNdPH25355b2bh26XfE8wqwVgLL634ZUadGsUz4FrvPmnV6ATrADKjwSAZuU6pfPWR2W8oU2eNBWN6c",
  "key6": "4LYAUmLLcSYemQiBqhS1cLx5LxnCNCfT96geWYYeZ6XWXf1XgG4p5RCE8dJrPbWo3JRLzbijzP46X8jkgkvCX49w",
  "key7": "sXECmh7uEJxhfe973jE1sHBnSnytbD2WLDV51h1Lju8cPtAvdGfhGC3NQFYPtixZqUnCBGMfLX4KNmXbpGdiM7C",
  "key8": "3DazpiB9F1oki21owJoTnx3TPPvzfKRE3ZJACZLuP6PQCcotqZT7x8GgXNNQUagT7oedhpwhxpbVnJnzY6EQrww9",
  "key9": "d6S212yRd617txfqCNRRuCT6gSS7TD7S1FyUJPqH81sU9ihJP42fhw1vg1by6daETL18AxxomquVR5qybgPCyPM",
  "key10": "6519r2L1mWNKvrVDGn2nek263rVkpMQZbHKm8UtZaPAiMJSdbfjkp14bvAwyRjW3Kky66uAHcuezyc5tcVUVQzbz",
  "key11": "2GXiBt2bkQUFNzsaB2tMNtYHnss3iEQWrvrxMN3U8TbNAvpfwX7sT9B36oX4JTd7DCJaAW82Jr3tRUoGHgVGk8e",
  "key12": "3g8PTbUJfE5XUcstQsWUEgkNWrb9Ft24MRQnZJRLm1KYDTSRJdTbotp6btxuJKXyp4tJgCXJZH4Lv2tEoiW2xXYa",
  "key13": "QLK1JcXWNeVEx62mddgKQvZ6Rjtjb3nTfMm1wdP7sp1H89XQitLsZrLHe4VzHX5eyk9mTsa1iSudMyXYnvX3jVK",
  "key14": "3j3mYvEnaWvMiCDzT3cYwCqw2j6RdCth8uvUhdGV8HCTxfdA5FinhhrvBpxKSC3GdWXpYN3PVwue9j6cLRfbFurR",
  "key15": "4vz3XeuA5N2eU244b6P9uEnV9Cvazgjj5MU764hkhAqYJcpwqEAXNzf9iMMZPCHNj4bbbb8h7FbM1GKfAVz9cq7P",
  "key16": "5ki2ZRj6UWyKBqPn33QcoR2RY4zYtWhAMX6n6LwmSh4berKfyJ5FHoL2v9tfZaM8ZDNdeXXcRrnfs5UJmNDgdVSk",
  "key17": "3TdMFQN8L2PR4XFBPyyUAGTGgZPXHz9X79gVB7vac2auowuobB3Jep9JSLQQ9YZfJwcwspsoETc9Vfw7kn8TfjHf",
  "key18": "EqiVgzS9z2WMSiZxxpqU5E63XSN9w7EGH9tdUiKSfvuXYgdz8BLZBuDifFveccRJg44r2E3bWzwjhHRq5kRhjWT",
  "key19": "3WLE9Zw6L4XcYd8dPgN3Sdrk759CLeP1r3uqkWxdg5GNx1Q9CKvAWNBAXPPvVLkM6m33uLGCfSxYcynyMpFxeGSf",
  "key20": "Wwx81Hf2Ce7REZYUiZUoK6hoNCgCjWmE8yMMZhPk8A1zQfC95WuTqmpZF8rUj4B7iFX3VLeVZyvE8x3jr1hkMZN",
  "key21": "3Y1Zm9M6UR2bvfKFm7xCyTbRTjwyejhpyLqTKQ9G7qUPjmJRDR2v2egimC5cnu677jn4sNi8efcKYqZB3WEFRmop",
  "key22": "2Mdz4Es3rUieFfs6Awu1Mcqs1ocktmopnsybYSuSWsdsdjv1ExeNajTJF8iR63h51f8xSYLXtyY56g1zic95AnuR",
  "key23": "33cBVBFEcXWjMdwhoMQiCbSv9bLeMHosHeHRkgDwVPEHnFdFiG8GoHoxNrjCm7r18PUn2UKRxRPuRmkWMUReCgtQ",
  "key24": "2w79u1yepp6e6fR5XtpEa3QatDC6jbHMZn6iExBzDiQtCcroQaNz4imPH8XjYkn9ZtijBnQk567UiNPq6woR9bDZ",
  "key25": "nivSkQYctUejXm2juEFnBCYajgxTY2c4giGD11wvH2RV8etHULqh1RhU7AkZyozgDQ7z1qYeRsxWeq1z5tP4RrQ"
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
