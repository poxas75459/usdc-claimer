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
    "2hR6SZkhorFhwdqAF8EDfGeysoEmYa2MywCosvYW2DDnB8t2UW2PZNwHEAShGSh9Y9cBZTNLQnCwr2vrX5ArP6uH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2CfioXHeykNv1SjubgRwe9jeX3wc27c2z1TbsiQFzEyyhWwWjmrPoarEUivLJiXJ1F3GmCfJBA8admpJZPGU5uw",
  "key1": "3tKvBQN1TfsB7gQCZhDfY1m7oeovtj1vg13nP9EoWkmCcWvxQ5dMjXJqYs9cEPyUTWJMq7V4GYcgyBS5wdjvhif",
  "key2": "5zomsJ4ta3ruqB88579pxwmRc7dgHBGBaQeDqdEGtEUncn6p6gFRZuXDHMDMYnHk8THuLNu5X92v3VKjJjMm3PnW",
  "key3": "JtMfWqedhY9z1zVX7Dc4ND6nUafcDUrn3R8hq3bXCZU4z1ixfNC7pE39ZmgsWPti1Dqe7S6GWZfzg2p95V1g2o7",
  "key4": "5S5nbREZMrUBtnRNswZGLJ7Ter4Vs3ah2v8FGi2TuRktqKzw8pzGVzPQcJHdC3s3PYrqmPaVU9eTdcaNUw9r8RnY",
  "key5": "2nXSCS3PWQmwJvJVrbtu4jZSkXvBiuopivrLHVb7YUBnRTbmiEEgnXJpy5mdvunWxpHmsqk5LRo2EFUNewYbVkPr",
  "key6": "4pNu1MbahoCSgSv8PtxoD631kL2goCyqvYG3EyzJkr9iPCncSdotJ5NvqBAEyhei3LUVUoF1jSry2PmAhdT2VJmP",
  "key7": "84cy1wnBjjmYWLgLUorj6mVTeQSTTPX5PMtTv4HfrgmjLb8ugjTf28cpugBHMHmBGryz7rQeJ7oGBao9KXvqSwB",
  "key8": "7YVoibui3MErwVGc4mjRfCR8yBMZzAtae4orGxT946him4ThchQJKAFUJ2ah5gyoZu4vQbR9Ee9xJ9kKe2XW6Dv",
  "key9": "4CvbXZQwDM5woVLq9iVgUTeJqksM4L5RpJGbR9eUBUHHpc6CsVLV1czsxemwBvhAPT6fwYshwFKiHrFtBEv9niS3",
  "key10": "5aCC9dcb6ewkPg3KAX4oecDqN2t7eCFQyJ94RHEHNeooVpm96xXjQbKmBJ6FHpyYoz33QmF69k1FD44rWU1SMvkZ",
  "key11": "2aJJSeVtP6odtPPgDjFRRZXdxNxbq7Swiy5NYD7txQvT5prScK9JTncaVG6AWz8PFRocvqC4xvfR3qAh4L9mN2Xn",
  "key12": "39hC63NQJB9QZrRVewVsQuAqcRkWbDyjPaVMitujrCf3e5FCWUaWrGH8xig9SJmcsZt4YUsqxSp5WfgUveMRNjXG",
  "key13": "Gtxxbw19qkjFyUXuWByufYKnj2cJqLirrr8ysuKxwusNXZcRKYnKax5Hv1J3DLncCSBQGKr1GdViBnx5AG3EuLy",
  "key14": "3K5TpK3EPUbR8U9KtLawGsWNcarBeNtmkYn1f7H5BziptKQu3HhfAJWCQRFdV6fMLFoNKyusvbt6yWES1YSayCQp",
  "key15": "4rZ8xq94HoGmiCy7JKDWTGk8wWCMPYvK1hK4jPiWoofTecN7ueTwFG4GPcGiiBm55uRQ9yXDrnFBe5444fchYqif",
  "key16": "2yRS1cQdVCxUFMwBrL23iszvjVHX2VVhQHBd6bynouts8FBPu5VLRACSGNAb8XzVy5ans5VjzmqcpJ7VjmjZWXS8",
  "key17": "SsK1GiFgnS9voiMHjhm8yQHDBiW4BuU3NGEnX5k9z4y64ZP3L7Gwr6gEoeGxg8PruStqJrJW5AT3CzqrYiu1sVe",
  "key18": "4DnfZkCr93gtzuAYtFvPsPJUvrM2fAXp8ca6kAqnmvKMSEDSAJsixrEAtySxdux55yG3AiKLCV43RQB55TVRJ1Qk",
  "key19": "4XtGzqhTj4A5wfpcNj3E9xqhQndqwcd33TeFTVVoojbXFpnE2jFnygUtM7X941XYfu2H5PsV2ni8TKh8PxShqY5w",
  "key20": "3nN6UNGCfu1KoCdaF6SS5R3Pr5DamUj64m2a31ja3ykaQk7DbCxWKgESsYACaYf3an168uPDM69Hj9hMkBKTW3Pg",
  "key21": "27fzyRbVsj6cZNHhBhWsoyFC5JwRwi5LpzdLUo4UWQQuLMgjYRuuN1JEFYmaBwqFaaiiyBcRa2VkNeC65zgqPxNw",
  "key22": "FaQqVi1wjt1RsvkVQYWCeKTMVhvSwrhtgAFWXSWWvuT733wpaoGpxFFeoqNV8cvRmnbN2Jx7oLLauAb18VBJQn5",
  "key23": "5fAchqfdmQrgP9uV4f1HKBhm54g2crLBo6mFszD1anx9d53y4YgjHVckCAsddQqWoHUDM4AUx5hcb6LAzbhnmwPt",
  "key24": "34uWHbQ5bZ8K8NyNZQQjP57vikZcx9YrMcHMarjqZvvx3QXe8ZmtTa1PQ2bbbciVmf3PB3FBBitjGifKyPG1jZjq",
  "key25": "5sD8uHfL2miafbHRAvyhuBDGxyio3rJefGtHTGHmvtLBxzceuCVYNHN3wzKWpicQudDhHw8VMdQvGDD1eS4e3tJr"
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
