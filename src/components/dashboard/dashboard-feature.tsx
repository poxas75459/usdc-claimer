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
    "5yBrYYnjereYFucja47CLDkWppiDiZZV6ZUyEqmQXvSsvTnHz53xFCJPkUkYesNCSAJpK8cinnD3pZF4Kzt3T17H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2yvLRCDD8Axb956Pn3qdCxHDo6bEEpPtSHDPmAy8YGASMrDf6TMj1tAo9iCdYpNnuMzzCtKzPsx9B5pRYtnaVdJk",
  "key1": "4qQLagzjisU6TtbXsLDKvLJxA4CXj5cZ1H8wpELnBABqd937hVhBMqpZntq6s3YRAAoY7uA64o8iG7Xt9bReEoF8",
  "key2": "664mbYLQ9vFJ2JVJAvc93nGiCvKciwpxmzamx1hSfxUPYWmRfLxCBobSqo77tgTLha4phXgBaRNMr1SfKBfqWsbr",
  "key3": "64iCKdH31Ng8QAMDjwYiVgvpjuTeN3tZneFLFaewP5pwNj2jRfiu6wc9R1QUQDqTZvp8pK6X6TbHXRMx11waLt51",
  "key4": "3n5THLhuqeRQUVQqUkk9mppeiJ4duZzGtuJjajMsWKjqoQtsW8qnuNJSQRTKRGXohuyE5NWZUL9Y7ntf3HZGNdXq",
  "key5": "2rXP5tS1MLizRAMJpUFbny5dTvHohZW28YjwK5gxb9vdMx1ACuzcEtLwf5PzBoYAX1oeQXJ3qBBjEX8oN1zkwjh8",
  "key6": "J4kqcMvzTDQTqCVoT8euef9tHUWiX2yk6Ag5UYqQ3RsoptxYHsDffkyjYfKABZqv1SnvUsh9WEm4rZMUCQLSF1L",
  "key7": "4mLFtGtRrzgV7EgFpxmHyDTC7JKKHeka8koaazqiSB69G7GsaNajxypKZ9PSP7gXwg6i4umRdQ9gCiXkXeW9MP49",
  "key8": "2o7J4QVJAX6WJJawmXfY5kDaqFn88PJ4eNFRJtBbBazaSvTcirWFs9y7SC1xm7zufNeC61kxeLBuv2ifPDZz4Bq7",
  "key9": "4JZcvege14vd3dhsaSZQxq7Yhp9BFwx4EzitVEkBaUJ5KAMyNLh3AosVjAkswN4jykF52NKmPB5gGhy9HPrB5vbQ",
  "key10": "fVTDHy3p2hCfwqp67Zq7VPSQWvYeyzwHWzSvaYj9N6sC7z7HEAsgYAPgEZT2Whx69hjyWSyoV8on8Ps9FV16h4k",
  "key11": "3jGXg99AYCYJqmd8Rhf3chJuzTRV9i9gNZ2zF8oeztV72Nt6T2oTtmdsBAYxMnHp3Fyb36qytQ7Qa3n4LRF3Dd81",
  "key12": "64zDcWKNoeZQgi1RL77kZkNnDjSQeTjoa9GTRLBFt7hav61mjGqywhPnKB1Ey7RNy9BPrjCnwMyizPMLea8LKLww",
  "key13": "54YZ1eHidS5kpQU9WkcsHVsVtGXYpuAzVXw838H1MscMLkHRY2enBxjcm53r8eQJvwMRaoss4cPSyM2kkif4TsLS",
  "key14": "3joNXyXTXwJiUV3G4fcCbFzBWyK7BaUdfSRKLFkMf3AEexKsB51xDbe8LVcScUHuULKQbnEq4VEamheAqpMbeAXf",
  "key15": "4nVg5XKgB34K9csZ3qDq9c8iFF5JF7S5Fg69YSRGrfMemSEP1KEABqM6CQUvHjcnnyfGZtkcM8dXAZYDUBFPRZ1V",
  "key16": "3SJyQAScZHs5gNTJ6ohpEfAw86AavBqgaWHvcuM1XhN7Mg1MjQpcxSMJ3XXVHHvYsqVaH4KJnqKKGU81HNPAfQ7u",
  "key17": "2vTdqfmbWseHiHB8fTKTTFfjYuCtwnzrfVERwY3BanBjKhEq4w4ZNJTZD8yJtGUXvKXiP2j2LPpaJRaMiA3JtA3n",
  "key18": "44CASiZSjH3NaNecWybCpxV6A2THyUoqWRNeTsr2unBvzVGK9NsNzMUqBqXPSsxSRBav1ouMZuE6usv67RdoLzG6",
  "key19": "ar19dDTkyjfAhYPqFMEvxx2GLfhEtKy8Cor5bEaQJqgenfKQmF3ucRcZVvHVwhfepCMrU4vxpQiJdeJD8CaXduH",
  "key20": "44A8WfvKS9DRYxP9jKiCq7QhtZ3EPHMQHYhPpwoDBBaRnt16WPBjHNzqSh9WxfgSyRyLu2qp2hfPmZM5bMQWkef1",
  "key21": "54cL6C5SNzDsGtPGbcsqmfkzxERsatQfPcAbV5n4JWiTn5eTkguZqJJkTY2F2GxGdZTmsRxD78hmTVUmzpxnAFdX",
  "key22": "29LnAN4Eopv4KNBCzDusVGQuytNAEkPRf4micL5cQQJowG5qNeVaox5B83Ld5hKjndMzjez1XwdkYsVB8nzktXHR",
  "key23": "5Nt1Nn7pocSnpQT2SbcNeDmfZTswYqrku6WZZX11jhCsfqmvHTydVtnSBrHJg5ounSX2FmKKQVEVo8BSjAKuL3QQ",
  "key24": "3YJj19spTjqyt8yg2kpMr28Tr4aULckkoAznJz2ZxthMZap5AWS7FKxSSbPvepkjJYa6WW5pvc3U7eQj1pYpu1ka",
  "key25": "5dRv5WNVwj2mtnK6V6N79Ct3uwXVR1V3VMMZjEKXEiQpth1MBHEGxU98yABFSGQDC2QFViArY3HCB3PUo8RxMhYs",
  "key26": "4rNtxtbxSJcFy6R3oZmJatofhqeKvsxKBVvs3ZT29tcAjawerE8zDrRFausDVUAsuuiTezd4p1MVgXF2y1Uuj3oZ",
  "key27": "2D4cjQeF41CSttaTgxRjJbw26QGEiL8vwP1DMkjpBXG21TxssGFKzFM7C6trGtNbAkPUuBti1tC21yUM6PwDgi5",
  "key28": "55cFxvDQwXM9USQNdZcbmmAnpcsk6jhqfPQ8nY1oHMfXLsL6umLfuULriPWYK1oH9M7JPnABCPEg6B2oBmA5Badq"
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
