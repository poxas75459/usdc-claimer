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
    "4SN4yN4hqBduYahCci64N2L3HjwECWs7LKhwiLQTQffEr1vFoDMETBEWdiXiQnx95iFhi7hEGz8c5hmNUnNLjaoR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xFhNVyTjyqGkxsZ87B1fvpYujL3xtQov125BWxcc9xSa73etTQJvTYASJxDJfAf78wdKURy12dNvueX9wpN4M4u",
  "key1": "3j4Ytd45wiTrfmmYT4hwV1Zzw5VURvBUMxG6P39iN26XWebfVL3Rnrm9RNthhp8rp7H7RS5AYMn8n7qKdd3Az23C",
  "key2": "3H4SmH9WnpJhw9WhgucGJ4e8eE9Vcawm2A1p1C4SMvzaefk4yRLMLkRgERWMMeERAysj9U7NuA8HVoGGfACysq9t",
  "key3": "227NVA9Sn9YAhDfvQfRk2JWykpWFwE7cyuKnB22mucAw5xGbFGgjJcErXwEcWNhpnfASZSaouuYgzoAFqEG6A2Zd",
  "key4": "18dUUZLT61gmMigWJAq3XxF6QVKTYVttGfJRtzUKjfLPhVuUu2jVecmbgw6Eb9LaFijfHvHZGBtNyjaNhZ4GQjP",
  "key5": "2ruD7B578r5sqSF2dTXexzc3NwhWdmghLusqcnxuBq4VXNfXaEoH2e95Na2fb4nQpaVDcUg4MhAKPejxDLF2gLrV",
  "key6": "41ucDM5ufVDgTPh9FRpHmdDUiFcumbNHAADwAD1TT1VoyVK8A3k8Y2nSdHrBJxEVvGUDZgdQJ9rTzgoYZJcVgfwr",
  "key7": "VFeZyqJ2Y4tB2w33fMWMi32TNMtwdpKuvzbBV76Vgbi6hAA9u3Kguqs1zvU1gLXhpyYetgrRfb6b1YnJviqjmJo",
  "key8": "4qUBDmiBivk9kQDBrAQwGg4FWsbMAjkJY3UC6xsn5KZtdTbXYr5TP7Tz7DZms6NvjJF1WZNussWSd6LmCc97Pm1a",
  "key9": "WYqCQsSXBrTaVydZ5idm8gqFRdQorraUhug5xJ16z2zAWxovpSG4kXx6GUYq9Mb3frypotGo7szoZf1MgegizJq",
  "key10": "2Ds5HUHdBEMowJaWyPKPM3So8dA4xeWUKE3BBwjBJmYV4QDZMj6eREuM7RySHPmEQZzFvKrN5yaZZbRT7Bvx5BH4",
  "key11": "2EvzMYQXPLMQKaGAdmq4iz3H4K6DP5xnSNskvyN5PMCSFEjKBFG5JvghFBTqym2qZdGKLE3cgHHpabEei9xFuSBD",
  "key12": "4J6Y8BGGKdMzc6UkKbs8yzjrbyUEUJNaTT9NZBk9HPq4Hi3w8yz1Mfc1uaQonPTNu8tWd3pofBx4LGwKDzoSNwut",
  "key13": "3Y3te1miqnh8aTAuFJ73X6tovzHTCpKFtEDyHz9pjxa4onipdmc9QS9PdpYmsHJzYFEERb2sQwWwXtisRfabs9Sj",
  "key14": "2hBojARAZUoVHwQEwh2QTFjWaB67FND6NyAzia7hnp4sHswCqECAzYFpGUi6vSDNQ9Cz7PW4gTHA7LY4QMzZbQzm",
  "key15": "vjX67N66XyEBa6cVuATjdC7w43h9E2jJqCFNCwK5mRGRrPcHXRfjVnTRSkNLU4Du5JY9beQXyuHw1LutfnRRFQX",
  "key16": "9ZxVZJ4izwEWdSkxPeWx4dgse2fRy5eGwFEGoMLMg1VujcG9nAgYc2EbPkpHbhz7awgLuSTHRprDsp6EbHr4Dtp",
  "key17": "5ejtZQYWaPU9qgkGc9VMhZPVkbCMmAF1MeLNiZHMyCGJPPrukGfyfGAPvaXrVLzyJLEW1B2hoaTZBhhocLyfxqZb",
  "key18": "261aj8LPgXZeeNcWqmWG2rh8xzFyBdiNNfpygB4HRxHbfErcomGAxyPbf8KWETF5jU8XVBh1p772Bj9YccJqTKXv",
  "key19": "5UBvEfXPRVz34PVnx6emavexkNMrS3KtXYGcNW8NkQMbY9BqFhBMgvXcvtdA3KVaafsViQGf1PC3obgRcYw3enXJ",
  "key20": "2sKNxXqcbK2i6Srh49fsuRZokeBbgN7BX1hCCGaTxdkhFdGDVrBjTcU6YPqoo8bNHankUnUvMmtRpTwUFAraqnsM",
  "key21": "5S8521uP68Zp2csmVkhwamKiHSk4gudWBH9y5B4j7scMyqZ5M28ExpYPdTWVnttb871ukkXCz96pWRPj1QWkPLYv",
  "key22": "hpodCV6sDpy51qAZH8WReDB4rfe8RbyNDQBCHKu5pG2L2ia5qvtzysLHAu5ogZC9qSUEqnk3MMGPtK6aV4Dz2DG",
  "key23": "3xajmu6hx4kfSDUZYYezydtsZqbACyvUwLEMRK6ftUna8Qh1AdQJXFot7PM4job8D6oooqmqQYvALSTBPVXz5GzJ",
  "key24": "5riHrftDdywNJHNJd4dpLtVVbK7kgDKz8MffqkvDk1jkHnYsFaQEYWCHe3LCAYWSBmSyfAryCtvS3rMLEPxzMLcc",
  "key25": "2UCwWqCTQueGjni2YAhE5F5jxUoGSsqc89AYtXmqgX9w6QyJWBDPdB5KP39mJVy6WdyEVMR5pAZaxZpmhcvuLg3",
  "key26": "5Hk2oWfAd9KoWGC3rUxjcBuJ5a1UXMGnZmjoKfaU7MscbCAqzbDSG9XKMB8PujN155a1vsue9PqpTXkFgMnG558h",
  "key27": "41eLp41mhfjgrskcYvhkDcqgDMoTAfmSUEJo2qpSnEp5SR3SXvoqDQMhL1c8Rag4n3FgxtukA4EFp6j1XCzS8zKb",
  "key28": "5RYKHU3HHqf7yRVE5D6QrUgJXUUck3vdmi4TqPbVEX1Prw5TPoKTTRCxWnCsJq2wHQX1RbKhCwjX9dseGufvNjwT",
  "key29": "3KCsedabcZBor6cs6F9GyEbRN1xcuw1L8K2ratV2bDgzNMdDgJ3ykHiMj8NHQJxgw9YCGXunWWy7BktkaLezGwqj",
  "key30": "25KndWQkkXAuyjrudRRhu7i9wjQa2GwTJRC2wTXnGHBZfFbmPNBbfdgAzFc963sCmThV4NhUeGZnX4tZ3SBs6Los",
  "key31": "2mDDy7zXxh75QGSHxumSmPk62pDTfYotTkwPERYrVfMiJbuo4EihJELPFqHiEXf1uEWqeyzgaP82gvHc8MBNGSJ8",
  "key32": "8W3vUkT5GE1xVGZRfTLbzkvhx1dBq1mpjae4frioH54LuYcpf6vTdqnzJaa7zhWa7SeQkHcYQpz8KpRrq7tX7iM",
  "key33": "3DV4Q9MKDePL62oKamxvtcuo6JWYJLrYNNtf7dkmsnTnGwnw2pKsV1pMRAdgb2qWKet1CPcbJHydmStJE5q79ERy",
  "key34": "4jDtBCxaig6L9H2pgknLGCthweLxwk5fnMdBdDebRTZRFBoVzVmzmaBooNwNAdywMLGs6nDisTenEHKbQedrtzgp",
  "key35": "5kaD6CuTTu14NfDgqCfvQ5BPhTCoXBgnKt1E4rUHEodKB3fedAj7cpBctJzB4Suz3z4pfTfALFDKm8evacKetssa",
  "key36": "43YqUCcU89mtvCdbmJ6kfwuZAax8AejGXLVGokcYX6atjyYaDbMCtaSVuAwLGQ4HzWT2MZJF6r27rfvWpr8JSWA3",
  "key37": "2tDxJBSQ7HeZQffpFfEmi9jrN6yhNSrvbFj3XjqTFFdNYPxGJT8QVK7hNVU1iuQsteLSty1b4RLNtrcCE392Z3tY",
  "key38": "59xtXZ8WZ8Xg4Tz1NisxKGtYTYhd64JcwFm65bwuWeonXshD7EAHxk1sG5bjRPcVSqW7bfL6bDg1bNqsgjR2R2wo"
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
