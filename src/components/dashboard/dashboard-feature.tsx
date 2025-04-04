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
    "5s7e8HpptyyfQgr9mABAcd6KweL8r3hXygyutZszDc337YnP2AWzhYvhF31a4FtT1japJJSmALMS64q5yTuVSeYj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kpbYfgNxsb5mSLWWcoHiQaPkaTQTVtubtNty9jKsjM8hohHkoxjPu8j35doRTcSi4PGZvnEe5sKzGSfccc2D5PZ",
  "key1": "5EbT5o3CHfnzJPxhBtCDtDNZeMst5pTgXfmfJLH94ZLKuAwMZhe1WGfBu4GxfB2HrHN6nQ8tApsfnYVxjMVmuDC1",
  "key2": "y2yReQ2F8atVPD9zUjoBNzhzMJpV3o228Qif5JK3s5KGaxvWK3cmyTwAwRja54qoFe5Q6Wpxje3UEa9H9dMZtNv",
  "key3": "2NT9E37mf1WHwaVzgo7F5E1zmp3D4NbANMcZ7eZXnmaKDNX5DZXJA6AcPr1BxwHZQZ9MXiHKBenqEdizMZQtNAX1",
  "key4": "ebmwiYKuGhrz1vGAKLBRkSyTxk18FVZM4TvDe3xiC7aAYp8xmhhhoaiCQqbDXUid1wymcnU9EHEWEVPmwd8jovR",
  "key5": "5ctYRfEADvGym1ZjV8Wuap5MGuQDKjtsXEmspr3hjKQXJGZwqusdSveoLf9QboJTdFggex9S9Gpyw2CXRU4jriGf",
  "key6": "4aKL1NTPxyQDzM4YAmZXrcgQjQ8RNLvC4Kjcd8xPyQncWzLCRTy47QqZSG2UA8daNkjbsnNVqbJmXkwTQeiSjS18",
  "key7": "3nA1mbGskfNZJQfG8kmKYz4Ucr4Zg29WRKST6tbpCvxTyasCqGcAe1X7vmaDFU3amtPjQQHApFFK8b4MAGS9zSNV",
  "key8": "Y613A6NDLYiM17pgQmxcShREhJk8MgPE7RDzAhEXKjn6mmj1TwJMMPrLdwR59gRnhngTPjuXGPWJdYMqUic2diA",
  "key9": "66NKPC2a2gouG7cGWq8ugsdkJ6atnz3fcTgdVYM7RVpNAFpkpgMhRtXYbJJj1MWdJfSrFHYW5L8S7RmuZ2LYrKu7",
  "key10": "3HvpceqM8P47p4kKtjrBgY1gYLjTmRb1mdw3KsLnuLpqGKLiHRDPCehZNdVHjwGxynujgRqBBWkYguXYrkFp93oN",
  "key11": "3y2fe45q3L1uzsvw5sb34DJgbwCSooxbm5HXBKBuPrP6eGPfdw7Pko8A7zPShJ5dS36Nuyii8FCnU5CbL5Zci2Ni",
  "key12": "4vjKvfcLc59xy8P24sk7c5VWKxCNXaPKbC3AKfiZbyMA4YerMvGJSMpPvm6ZyvDNw7Qx78g7DG7n7siZsLzvNnJb",
  "key13": "4oN6nAneaESpXvTduoBveeVzctsB9kwJM3JyKjDmTDdmZas4zZcPdBg3ixXtb4Dhue5PUG1VxVoQ1NW1PXNRWtCv",
  "key14": "4oaQ77xwDbTSxEJYQZMCm9SEot8Q3fZqyA8HMPpaerKKCFW9FpRUtDaT41mkvPbpVXjtv4iENJwKouJxF4fjfCSu",
  "key15": "NRX6sD1e5K9jyvvpiKFfpcK2zb1EGp2ZaSP5v4fVfxTW1cfDNmD3S6YLkorwxmGXFXYkAXHWG5zPcY9UqKRMe2v",
  "key16": "3TePhtMNjHUeg4SUwZ4ZsnsKmznMrGbsAuLKnJ2XpgCFC5jGQAKCxqrBz5TrgZmc9ttx4nhkaRmHRzP6rJyfbwEC",
  "key17": "65D3yaNEqRVc1oZBjXn1MJZ6Z8ESbyXU6qdEzCUW1khqkgsnQZbeqURYMTmz64rfEE72z9cJ9hEMQ6sqvkpXXvE1",
  "key18": "2S62TtZDHJNufN2LzPtHSx2MFdWJWt7Lx7mfPs5Msms6PU9BM8YXaaxaYBcgdpM9AKXngRmuRs4bhN77SLZ9uhqL",
  "key19": "3anWcypKbTon2b2VkrwRyeb6uoHt2PDtzBe7Va9KWaGWX6PmV7R2YTgXap6BaRqoK34rkC2yF1iVLuF8syM3k4vv",
  "key20": "5nnkH3uPHHMcbQx3tToeo4ARMfcCBcJwCv37yzx2JrHJisAiH7LXmPRRdJYWn7EYpDK57JsVXPfqcKCjv9oWjncM",
  "key21": "2DAY2HMNzFXHL2VaKXZcxusJm6zNqCvjEAWNFiFM8WZhRzKeWZzLiSxNro8iqVL1i4uqsf36QodnQcp4N1eq3q9m",
  "key22": "28EB9bccQ1Cm15wsBqnyeJ97pBjXfXMXUthzDjikVBJFgtmj1w49wnws1rGRQ68GWst1QQUAuF1vs6AfhVvzSLS6",
  "key23": "5a4VWjN57YjARkrifKFqkRcHivusMCHFiLS7NJNVAMciUXgs2U6rgE4JwNCKbjNbc4Tzfjtw95oCHhxXU4Jf8x12",
  "key24": "5kuEzyi72XugYL9akqyM1otMwTNDRVUpSuQakKSkPYy4weSivemJnrH1uYqpfYFUUe7wsEY81pfcwJ5U2BSXnQm",
  "key25": "4p5SRWYEAGZEmMDoAQ92fLFcCL5RpRyrF7A5v2g3zEJA75Y9RjTWc3s4j41AsV6yzYj7BX2JGAKzWe4LbDiGvnsF",
  "key26": "58HUzi7ukb8Wk6WDVZDjK5ydVsc292qA2dDts8qRmXaASZrTv36B5KA9mgWbzYrYkLyPmqywdf43U96KtEVLvSxp",
  "key27": "5FjGUm8gvVscm9h3eMQbcPDR19zeAEUgjyZ9HzkFM3bbWuYy5pfbm6298UuqsKhTLicQfxCzejNYDkCLCFU2XQWK"
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
