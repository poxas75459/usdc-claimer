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
    "5728R2kStAQ9DyPHQu2FsMTjsGpfXDyoKFYvn4YsYctkP1kSk8qtA7Q3Qv787q6rsSXFAY6UF1e9RhK7qiqs6cTT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "GXoTHWWU6WCRprx8ZqPcvFX5oFTJJVA2Q8zkzPrVipvzZNg9DSUAXmC4oxRRBrqj5aLZs3bfHBC7oEoTfWLThPM",
  "key1": "5VxXmeAiPtPEoDGgbYbACZr5u7YY9mQXY9565rRmsTTq3EfpEm37vYPBnumM2tcnkzHbrBXQaigUZ5Yi9oWncqyC",
  "key2": "2ofR5x3k4J4ZuKC7Yxqgp17m91XwjgrctTKBfVGdC3hwG1beHbEqkPr2hog31icSTwPCBeHUYma5AmhgG26UyfNr",
  "key3": "5bfDoENxnWbu8dwZgN89PxFQyhaeocXjnwS1icVAdDf17b8hcLm6oCD2MNiMGcMGwcAiMVvyExhGZ6my1ApdFSKo",
  "key4": "2Ue8cUEHDc4PatPvrxGj258HNJrM2SwaY42K2nHMM3XBAhXRoz4DnFffbFxjMS71m5sX8jtCDSafTuTWSGkvfR1z",
  "key5": "5pk4S5u71zUVfPz4jU41NHBrrQ832biUJETKKhVz7P2qQJr49zxZVecqWbxebMtErUcnvm4L5dWUESBSyiER7MWP",
  "key6": "2MRetFGTAxSmhVhZPV6xsEkwbdM8hDVGWREcR6i93AqvzgwmGufyFUWBkSvRPURHVhwH9uN5bmnLAcCrotFZuUiw",
  "key7": "2Tu4c7LPgYFpqfLwbW7fe143U9RUFAK4kXZcr3Y5ttzdbUdbZDP8VW643KWharaAsSsriSWULqp943a9RBKQSoAe",
  "key8": "2U6qM2Anq1JnwMXgWnnPDKxV9vk7o7Xbz5RnS1iTajwdW4Qr1HNj13pcsCdrKCBfvP1bvWoaQi3xT13HzgEPdtSr",
  "key9": "2dqxmLuNM98VsDC5iKWjx8a8A3BVTwSsrhLarqdfEpCmuWh2E6vxoqkbP1Sm5jVCoSW1nmspURGJyAtWug5x6vXi",
  "key10": "5WyUc4NmCQhPR3oAdsuw9oQTN4yYceQNiC9L2oFGv4AmgzUwm3CmsNAqdtR8Cv84uZ2wbqSnpxXavgQWGnVN7YWm",
  "key11": "5EFiFgGhspeg9mRRtSVqJ28eZrkcXWbDc3RFeRCDQteTZV4uJdpp9MSuzS9nnDeLj8YqKedLiGwVmZdPzSq8XTU2",
  "key12": "2UjQURoJFjX7Z1ix6J2GpCJcsbd4KP5MiHcV4JsjbziVxEpCNGKVfSpNthF7sJevrBSGTtd2ENzoZUyx4ciLUZxf",
  "key13": "ycaaUmctBGE1E9Bk59YArKM2FfWLDSdE7hrG17dSzjwUabVsX2FgzkPYBU8cwCKnfu3nBaikMZmoXhC9ekodXVc",
  "key14": "2UqFoQrwaWQPRmV2VKdK7CZaWAkeB2eKVGMz8uhQ52eMFaDA3zJssANktdB6GdqYbJyiXJyD55p56yB2HUAExJER",
  "key15": "RXys82Sv3FHKdA7GRCN32qdHzsC5X3H1JYyMM6dwzhScUsMPo9SHPJfnepDDfG5hbnNRG56YWhAytF4UyehH1YD",
  "key16": "26tw2maX1aihoMDAYi1wTFJgH7MexrLjEUuzAhoaa7S9CNgDh1MdtcCoJ6B9aK5K7AkiXbTzrp28ktkc56ZwARxw",
  "key17": "319k2ge7W7hZi9ez8gpYstM5Mf16P96VT7eG4zEKE5JNuMTwvkktFAQ6CN8oUy1aNcxgfmah46zt9nqaTKAKvJ1c",
  "key18": "3zS4x8BqDYLFzMTjeBTKrJiP5T8kS2aANdiV9AWuzqbd9NNmZugLmeqS94XrK6GvrhqSGoiYMQZVdzfvEG8Sf3PG",
  "key19": "28cDLwBHr7pVkGF9dpDXQstNTm979Y8rJ4M4w1SKBjXXHDYHB2vrfTAQ27VtG3cnNFW4JPQ9LJ3meCKwCo3fqW48",
  "key20": "3FxD4woKj418ycEkxiqbPYZrr4vfiKK94gEu4K1BsKXtLrEuyeGfVnu6jZVKMXcU349VGCnZUKtFJ12q4rUrYcW7",
  "key21": "44B9CdwSmWCQ4Dkve9uXyR4wymZ3o9AMAdNYWT387kCmjK4m3EMRrKuqaigT5GDkNSAm3pvzrg8UunscFSGsQAg5",
  "key22": "4mb82BpPfp73aq1id7QMmGUtAQngqA29rZvDkHzqtqPCpvYSUya2LtY3XHSHLBeMKyXP75SU83JTXQVY8w6NTWgp",
  "key23": "2dxkXrbH8Ej2xQZZvSk4TN9BLJ6Cz9wmfbue4PCe5iY9A9byrG8rkKKjCWRw8m2J9DtUGCqLJHpE6ZTG17BnDpev",
  "key24": "4RfrHrJ528E1ZEtXj7Y5YthdBUF34Y49tk8mapUGAZaWtjLYr2YZf2RMDpCX1s5wnSLs8Cc1qyE2762ERrSXWL9B",
  "key25": "23UWB6GSTTyYq4NT5DfPxpSNKSqYTqQxNEbJFhqTAB2aQoiPNQKtMCjWAss2vfHKwekysffmWFqA6iBSHSZQBe7p",
  "key26": "3eLawrdbUPdZQDgrMngxFQyFEkvTkS3MTAC92RDpKkh4riBoiYTUebqr1yRx6xx2RoZXS4pFEEkc65p5SPRPaRoG",
  "key27": "hqcjwoVdrFBfFkbTr8m6GC1cREFGSQr1FXGRLRVeFEBE51yPUYuiq7J2Je5wrpTnp4Z7vkTXuRJvagvZgFvprSj",
  "key28": "ZH8BAMeYsuSHR6vpix6UsiCyAAk21wFW5u3adqz8VKcvAihLw9XSvRU2fsRhoo4iAWM3BhjhE8Bt8vh4MNvKkcS",
  "key29": "bwekYubEUkCgtMReRVV6sQhJLMPNWJfSSojxF43aJsFXtMo2mMF4shGVX6kwM4Mfo33ZtknCEtbXZT9hynfUFRF",
  "key30": "3c9SWFjHXHbv92tSDLLzTXgYT9sN88AiTibsemQiVCyDSXg1zyJ7ShcLJxy5QJYvH9bp5mf8428c7xogQowYpZfQ"
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
