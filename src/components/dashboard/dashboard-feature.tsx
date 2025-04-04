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
    "3Pu7KbTUvWs5aD3TNuFPZu9PqvCA9oYkJfMYSsfom2asspi2z188qW1DDEhUjsQ2yikTftdgC2xmy2XSA3Dsyix1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "M6mq4iAjNnzHg5DQLZuQFsiLjwQztvyjs3XQTenA3UpiLfwUk541kHwo1TwMsWGutSJn8XM4JaHq2fqqFvRDrVk",
  "key1": "5DkJzjY81YYmyhU9RpLkJr3dHqhgw7PJhLwaVwq8HzSojSvMjdytkCWj6DwkCW1ruwpqJuGZiMhag8EyzAUQM1ao",
  "key2": "4Rx8dtbjRoekzSWSnDj3bhxkSChLp5hBvyQi52AE8xGZXL3JgPCASAk1WU6rL7QqbnUpetQ58eCoXMbByieY1oc7",
  "key3": "5JXQSWT7fiCMeQ66Tk7Epta4DLZbm7TLu8o8zAbfo734WaDNSHfp4ErKjgZWzW8DjMpJL2jbaRe7U9Go5FKiBGDA",
  "key4": "4nnfKWVrKKtoiqcM3idQHAU7GLaDDSnhaD6R8v8wed7mdVTALZk5v7haJtVTCWkGt42PMX6c7V56M5TN1rRM6sit",
  "key5": "4nMertopuxjLFFi9J5k5LekTdV35Um2J6gJ1g1FkuZUfzNN6ej6heo3iqa3VkLTkRzwgogE18yGCJFYKQ49kRRcr",
  "key6": "4SFCV4gDhJrhukfxx7Mc31n4o8bU2BLJVWneT5BRLXnPXBmPGwsHpLqSDX5XHiRKPQYN8SsumjjUqmEXq1iwT3z9",
  "key7": "2qFji7xpakCyaX1JLjqrG59KCRydN4WstmGV6Jkp2wwQ8zg6hsTiJvHzNHvw8FvZHEKrW5bHeDo7qLQkUKWr7Uw2",
  "key8": "38vwkqbM2PGg91koxweYFMCS44V8An7Hvioph1Y7Yd8HDUEmriC2ig7d3aHcG3XWj1eSM7GNtZXK4sAYE3AtyicY",
  "key9": "2PhdqkNeKEBMJpghk4U9xTPQ4os3hZEriwnU6DHcjtufGgXK8YSmcuEThoa427KmLDjUtFApJE5wggGnj4dVKEsg",
  "key10": "2VMHYwtDsMZWKVbtmqgpf4hrfj2sDtiZRLibLk2csBWK53YqK76YXsJSKMaHxp3G29a5nk9Do5xWunY1a76J6NsA",
  "key11": "2KSNWkjpL8VguMWanQ5ZAqrHZWbF1dm1vmvi2UkrRSsKQ5xuh11bVdCjfPQmLVsgS8mXZ5iH5XZVokZcrm7DyYYf",
  "key12": "55bN8CFNghZb5zxZ12TPJEntYGBEVAeFvKWAwz6y6q5S3ZoBQS4N4ehmQTmkh5dAgXEmr8aUcg6om8owv3FWaS3t",
  "key13": "3jpwCTLc1tyX7yfHcEc8Dhya86GHdhYML7BAuV4dom8AuejbmcJPMNF2vQrxThd2A3qWByGvpPHVRCEX3WGHyMmh",
  "key14": "3FWofogp3s7CN2L31JWrFvFreBwCGe9MeYibxkszCiKMiz5zzRvJxUEsdAs76H3mXQ8VymDLwWCENkk8Z7C9W3p3",
  "key15": "5Hqvx1g2Me33v19Liw868UQBxXKcvCLLYn4nhPZBp41tJhZzrCETckqmFQzAQspSBSSGcGiGapsbBAHf7KcCnHvV",
  "key16": "5k4WfrJfRFtP46NGdCWhyrkKZQLKLYBRqtkZ5s9CGiC1nJwMS2SmgyyhHYeRt2rQUWKGtGuex8yN6QzWN4QbrAAm",
  "key17": "5qfU2UjFjsCcJQzRoAMWmiJxmu6HpLkQhUrdEgA1HAKBaPgx6EeWXy9pHi5vyMAFHKYV4spqjpVi4jTxwGgsRfWi",
  "key18": "4oFtSDQMsJ3XcuYhTgVgPr83pt9YoYE8mkDXUbdKhY54WtaseFrvtk7gmP6tqBKyse9Qaof1WgvvPPftCyLjRu9L",
  "key19": "26MhgLM7M1Q1jBpbiRUnAL4xLgFeNQppe8F3uMhK5Ls93zKsKZUUjY4t2U51zUnejrA9tN3nRmtFF4Bsx1nmnStT",
  "key20": "z4mnqfEPzSrzVfsuFT2q1H55V7XT5H5UWZeL1aQUr46njktQCTuduqCrx3ZARwRjijpoV1n9N8VfL6bq5JZ3zQZ",
  "key21": "2vrJ4JugHfGdC8GZd3wZjJmmBqLUw4YHjiiqJr25bPduzRvwv8SpqvwFxxhTZfYZasuz9zobThxBrNSKZE9nF9VB",
  "key22": "3dTathK7bZseVE6woBAp2Y2XZLu8p2tMTncMNcQg4YyDgq5mJNyzwDm48NLJFF9svpjXmqjyLyyqGb9S5TWacVSv",
  "key23": "4TzZcN55g863cYvrVfCJEbCh2NHY4yXcAJVaZRkzgU4K1vJbRbBzJWaVB19FrgWNZKAumpKuGj22xfXKXNE8fEG6",
  "key24": "5C9PFbmz18xs5VqAV3DsdGpG9BWoo9nmD5yymgooS9Zh3oHurcNx7NvBRhJcn7FwAes5mnueM1yLkrwqyMsVxZyT",
  "key25": "2MbfK3U6ZQi11b38M6f79cCadUhNmKTnpJMK2beMtq9dwwwruSKykyqhAKPvv7rCXeU17W6xYedfEE57i4FBxurZ",
  "key26": "2aWcCzu9TyUrhjNkxpQ9QuHqbF9MGu8qJucrJoGcmgLqFxjDBM7hENssuZG5SZnppTxyeysDaf58rmXkS49saTib"
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
