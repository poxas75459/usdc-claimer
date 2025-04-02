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
    "3kS1RknG4sHZcnVZh67KjfN4fx9jsewZgCBmz3TRuyaMcYzWsovGpRqN1ATGt7kVSsvnsy2hWhC5vWifYptvHmcF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4nC9gjsYbdSQW9at7uNUb5e6roguzLkMGoJhFkEMWpCuSFjT9GdwCqcxgP6FkniXB8Fi6qHsXiRxvdvLFdWkjtCA",
  "key1": "4rQZGYH3J98bcpDE1zP4DjE73M1VASq7eg6A8CGiufEsv4rojUXYqmhAV4Shj7UxbcdLRXsyB5sU8DiAkyFfPmiq",
  "key2": "N9z928uRyZ9ju1bSZvgwYo1mnRqnmGuHewCeuenHMb2mjH7HpWbhc18xJ9XtHU2whDwkkMBNjyjGMonLcLDHG8y",
  "key3": "4TXpKVHs69jzpLCsM8nc6J9gLwVbKHL128zPcMeS3qw3LbHaQVmAjpS2PtsJDQfqFjVqmwsbyn51H5sWeRfHZQxf",
  "key4": "3zj6Nf6obBPSRsa1h3mcbwnksX821h8QHWxw3QcnMtsrYfYpSNMufRH8jWS4pmR1yHxYCiw8jWkwwvT7E7y8SZCS",
  "key5": "5zv6fTjg4ZTLUp6p1rNrnVsbABNooi7xV2s3ZHnzEXyNCHEhxcrFuK9VUQXMMzkEiDCKibSqWg78vpiad5ADKxgZ",
  "key6": "PzMfbJFAqqwW9DQ63Ly47YAkmopjhVjfKtYAs2qrzGxLc4hxm3YA9RNYmgq9Fj5t2L514bEUWYEGJv3GPvBqRw5",
  "key7": "2caSHQGcvxnSgkCo9murZzyE1U3XdxUjriZqwBnckLcz3fgLQ87mTEEbTXuDZH86HPBkCqnzjqkKdBSSstKsSKZL",
  "key8": "4bc9EPMNwyMYhAkjcFcganmMWaVefTNwXUSXGK2syLnPvx8ZehvupsBEQ2uPYF9PJK92pC24uumdbS4WcrcyqujY",
  "key9": "49iHjhxzjoFF9f2SJdKoyREM2mMiZcRT77AnLKs5au9NVnM7AEFezq7t1Ki5QnWXnrdigVXMeUADUUUPnXc96M6S",
  "key10": "3AbR4WDq5mQMqFkF4YtfmmXXPDCKt1wgFGZNU9RHf98RybALg9QnsrXphkbWAkt2bQLpcRrSzNkNggFumAXmFewD",
  "key11": "262BG4Z1e2XCBDbQQb552Bi4S27cknc9n3bUgZiBjsXbeec7zy8yJw87R8Pj3r2WFiwJY95y1cK67oPBmpcwgiKL",
  "key12": "5yzFekBBtT56AnicCoLS7aJtqYEaQ395MStUVyCXMj3rMGfuaMcNWnDreA7JoN9PSzR5jG7QA71XvXdEUuUt1byk",
  "key13": "53TLRTaRtFSxUJKbJ6u5YyHif6WPQbuiK6hARs4qEr82hfzC6gAErkmJFgTE6Lrp3CRVC3MiMsoNUnF4iQnCqgyj",
  "key14": "4YLJa2ek67vLMhugHn7mbVsuP1wFhSwJXjStGnEvUCAntdapcP3REZwKYMfdBofFwt4RMSu1kcsT1LfXLvDFf6Fs",
  "key15": "2hnZeXjnH9qehgmLHAYCgScmvipacWv8EEyYbgjJSDg8fnQkX4vr1W72aR47BZ5j7oaMvDAyBbTUCiLQte5YhDK",
  "key16": "4LU6nq2VsvPxuwRnnsbDY48rYFadUGG4rGwviEB4J7yANCCmUm4xtM4Mih1RUAG8NskKkDtJGMcUqwwbYKYLomcg",
  "key17": "4uu6j9GX1h1ehz43eXZr6XUy8nSbsb9jQF7ttYESQLYL1CmNAbCiepy2YFy1nqdXqfWuyjU1EHZWUqfahsNdoftY",
  "key18": "21CpVpnVrMCbZcq7mz8AvqYEs9GauJmUQLLJpCSaDWC42DRP2KuK3F1S6iw9swejLoWW2KdvCzmD6fyoXJ5fr254",
  "key19": "5aM1vpXQEufC75U1p9zJSUqQN1UHeyLfySxvnZq6Xa9Q3E6meiq33gbw8NNob6tfoBLHnN3e4cTjKqcuxUM7WKjq",
  "key20": "2UJgQdqUaT42Y5f7TrYT74LTfZwaLHt5AEpZC55EjXpNgkAov18E1iAd6pj4HRiSFWzJiVpsd11RnYmL9EYGaAf9",
  "key21": "F2SVxFviU9rEdZMxmvge3wUyMbDefkT6zcQ1TaRXQeH1FxNHd7SBosayu9jghQpnfeUF61DkRdXikcxcBzWg5XG",
  "key22": "2YZVRrJYEK4RXzJzNyu9YfXjxTjydEqTcwEGYtoJJZrJUJ9PDK6gchtMRYtG8QkfeiWfAZMNHhWLfQCPF8kKW6mg",
  "key23": "2iJaEFEygVRPGNVXhx2yWQCyxTxUC5ZvfdKJtZ92tg56J9vnomHtCBf3yvjZNig2yjEW4Fhetb9NC6ZfjJ5cXZdP",
  "key24": "5BdDUHFDoUWmNTdUwNVc69ip3FMzfdZMn6VpVdvLYZGhUjpszUDN59o1YDJA87wcD7WpFAwZsuxC5k8AHEgbdtGs",
  "key25": "2bTssBmTu3BwvikazDirgm5k9C2XxtSMt2ErLvmSnoowiJxJWZJj5wwPKCbYfqsKjvCY3DUE51dDUb3jdAkTfNC7",
  "key26": "3zcccDCekVjqXJCWoes3ZeXRpXK7ZRf84jiHorvikERFhWsk5uDCaTRuioWR56cqDnzgnjYcttoa4g4BvZG4aWB1",
  "key27": "42qzQAxgC74gVHWSSXFxd5NNrhvutGSbVajDp4Ju8R1D8AbLbyn7wJnHPM28grZWghUrWd1PUMrQowahYF3sTYNv",
  "key28": "58AT85SGbwgqKVFsraK5o9C9AkCiYW4odoqooP1mVpjED77FM6CfeUqWMB3juPHi34V8eXXQSkXVoVaBSGLeyR5N",
  "key29": "2VCyXisVVmzM5kdpgThM6Roczp1uZduDQh9YAC9EbHrKPy7J588A6KmmgzUWyv9X3z3DiTnodqGSBdiW1QXHdFoN",
  "key30": "3StaT4bG4BeVmA8BjTuhADnB66Z6ghyuh2YxdC2ofnDBXVbgcHs77RXmxeLPiiBkByJo4bfcZ96wKFcx4jCLQXWZ",
  "key31": "3BvBvk8RMzxD4J3Q8uCDBF7mBkhLRGcwWZF4coueqksyEe4Ku5Tc2XRu857ch99zMEH1kLp47mPQ1gdvpabV6fK3",
  "key32": "2RvnHsM5SeoeUjf4AKh6pf4rgNpgS2QhcrZb3mwT7ztWRMEztTxqCBAzV1ZK5G6cVqytkjUnZ3dSPcWHUXdXJtmu",
  "key33": "3RyEvRSLKwN2ZXXyMgKEWDAbVSfoa2NHc18LsNYog2j3kfQtSRWfmbBrGZVqcTW6jgoqGDSnuxieHtPfLujGJdDc",
  "key34": "66mUnAeitWcBCPoZ17HrhGd26gnVNTBrr4makjERt3Qt6sGj9WU89tgphAVmASp5oVKMT4fcFoUc8FWhbFFKBK6Y",
  "key35": "2q8gduMjgDXTDGNYrV8PC1KTqLgwzLYJh23PNMpmraRWxoyJzkXvoKVPg9mdFBLR3ALao6vudLtfdi5aeopm6nAH",
  "key36": "397wDAsxrJYw4aZMYahmnqUd8aUSqxwihpFprHWfX1s5NMJ5GG4n6p4aa4ypeGNsvKZ5iFHxCDuRCyGJGStRtKda"
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
