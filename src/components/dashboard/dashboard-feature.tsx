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
    "43RAMeod4TaCtTbdqf3EnNCKPbRJB1dudk3XN61pNefyrJQ51n5rJN4CQ5RVUd7mNmxZxxYJ1YLogdQYTdKoBvSK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4S75CMYi1MMRXafDhhNR1hp6Bmi93C5bF8K19LFLAeGZ8fahyroxCYdj9wZT7HXUCTw1wcEyBbQ1kcvgb4HB47pF",
  "key1": "2MP2AZWngjJgvVcxjCoG2Vqne8BbxPhwcmnpwoN1v47wcumPqTAVk8ocF15zyd1sUfcqFaBfMBysX5hXCErtJ9iX",
  "key2": "28u5aW98WzaDZSaNCtfDxikQ931WBAs7YQvE2m4mcKEerUppxM8tvDwKBHY1C8C4NJaGgjAS3DPA5mb3UrhjEzaX",
  "key3": "2z8uZpfNXCFu67XxVBPuL4azW3wbZqTJT4Fz9qR4d8oNVm5RPDnUCBUoXeUzpqkXmxDuQxJuEFUiPKfNtRun3Ah9",
  "key4": "yXUCyKNLzhCjzpezBjjq2CvVci3QGKNNySU7B1J39MuCh1Bjruk3NTpjHmxDy8WGJyzbryr2H3o7racKmV9jfRF",
  "key5": "3rLtGNuHNK5ATzmTspYCk3J6XS2DEFkDFdFZgYaaTiwUHEN3YnA1hBN9EXxzaHeJ5iLDiyuEoCxamuDoz9RPmvUJ",
  "key6": "4D5csDPS3h3xsNCTqezZTocSqycvACUkWFhTFNC4ZarhGrXW1L7xvK87HTGQyqVHXtREWwLizMLxG73oTHnAyc7L",
  "key7": "38v69xMeboazGkPweXZQRZzrtvaDbzXsopGLYQXfksbTPcBXagE8vzg4MzjG2JU7enjUz6BmkUM55yKFf2v7LKMS",
  "key8": "ap8ujx7NQV2Fjaek75nADhuB3geiwVEkfMYYYfkQaxVqrnzE3ERgfhCGAnRC7QM6PTB79n3oi68yGJ2FD5wsS9g",
  "key9": "59ZfuhsYiwi3tQzjT7iXMbgBkzWwYPNVg3x5FbRh1oDJgCHdDaxEjit8TVavEj1eqi8YQeUvRPcSHuqQXmY5Lt2p",
  "key10": "3WLrSpxh4BKCHB54BV1ishyQFKR41CG7gXvee5n6Rz3s2dCbV2B15cgMrtpmvxS4UENgmfsBFosmaetbyt6hVvT4",
  "key11": "rwn936qpb92iaLeBq6NHRrqkxwJ8a71UCAj35cW7KRGKRRYQ4fojeemcL5WTqcWCSPnHfcEgFwM1k3FQ5DyS8Aj",
  "key12": "46gThu3AAmcbtCxWZt5dmUFY27sooZGkrcZS8ewgkPiCJfzXpZTrptWrGqQjWsNZHRjQcVZneSP7yiNvLL6FKCAS",
  "key13": "evPZkrGwzqc9LUg5Qu1YUjSZE1upPStiwLjCKxS6QrmVQJ6JAabc48t5f4Kep5eJPP1reSeWM8LD4MRUot5XmA7",
  "key14": "5wS9mTt8P9rxiPE7wUsuZzkZjvnNRYQoHUjzd6FVpoLTRMmRmrr39p1CSuQ2sBK1iqoFYaEWGC6phPWUs7TMKxNC",
  "key15": "SLvU32J8xGYsBgTfqcFs442cuMrQHxthwA6Kt6jRpZBj3aLYrDgLL79Vz8a1ppm9EXHSzjCEmWf7HypXnFdD9yU",
  "key16": "2UsQ5xjAct1UHrbZY58faSVV8hwAoStBXonxzan8upCMrxTKa8FfYTm92fMRodmyv9kwymFq9rkaVoaf9kUvqRtJ",
  "key17": "4mKYEVJr61YDLV8mcLbZGUgYb4zLUQLFr4dA22sA47Cyw37uVfbBQhVRN8GfTmmagiwVkS3s8HySesfrm3nXMEqe",
  "key18": "JjsSHm4dxVQ8tnWzWLbeftXpfiforcbi7LLMGjpEnrCRJRuxm6mRJiuRNp9STqyGLGmZk8mXfbHxcPbvE1pHmdN",
  "key19": "mBNFbn7byC9EVFqgG7FLRHms2XgA9Zkfre16AvsxTX9ybL7rNFW8Ao3EUJsvsKq3ModQ4KHxagfWWdnZGkWF5Vv",
  "key20": "65GEhU6FLYbMM9A2gpmbpWkxtu5CPB2ZMsDb5y21m6SdxgACqFLdLQf8V5QkWVNjnbrxnohzmxhSkduwkuByNMVC",
  "key21": "3BkGmay6tPejhEF3TEPY6DaEAxmM3QJ7fAa7SsvStpwGYc8CPm1EB8mNcSRf39QsfN1dLhtsyY45LQ5EqmiYM9E2",
  "key22": "nmo8DyeuCRYS6Prb5osfCvfTv9yDdQPBJ97pM3eB12mmZW7tPCzCMsJ7SsWjqgrP2QgTLvdu3FRqX4wBFrTP4ny",
  "key23": "35YYog8uDF9z8DT44odqKxSgUD1qbpaZZFMmG9z7ayhmufzYcXHU8rQezf8KT2EnKDHM4GFn1WAX5mw2fTx823mD",
  "key24": "4ewBMkq26syv96VZ1jetkrE1CP2sg7jneXL1XKnFuw6PMKZQBwdxHRjHsYHRjWMv9iLRnipnuxT7rdiivrbZ7rCT",
  "key25": "4tKZpvrnMvjaaNkrXz86KtruuombdT8izBw6JxBaoskUAuyPwmm9MM8a6W2mG6QxRSc5vdmsxLYaYSkHT7iUfzEu"
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
