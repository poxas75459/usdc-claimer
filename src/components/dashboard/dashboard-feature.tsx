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
    "3pQBkg7ALGuwthz4R7wn9VtokbWPGH3Erb1SEFgZxikhsMDjMYc8cMD1UwecLDjdQnRBkwgXGVT8axXUKCL9emed"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Ezat6yEXcBrhgx7Xi9ofwZC6scCQ8X4FADRmmFa5f1NTMBeQyhaR56kzDnWwSE1XXx9MnpNaSGRGxNUdQHZXTYd",
  "key1": "4u92fF85peKqGW8x1xEDFUGee1n3muPj59gtTbwWNSky7w6qmkmzgtDXiNrTnUMZ9A195nUoDkLujgqnT7eFoPnj",
  "key2": "56XYusAt2F58AE53sYaPvfMG554y6Xp8tK6HASCQBvXm8ALyvPq4QtWLN1gqJ1yF5gZ8CdaAVAp5EfTtZzcGL2Ah",
  "key3": "4DxVHtZ6SXvaw3dxDg9B9ba6fizEzjmo7APKJXgJ6kuNTEuYK2TZn5nqAXhxD7rdE7fEFm5Rvhbs7hbPNAw2nNx7",
  "key4": "3M3KMptiphBkf3rGXC2pAqF39RRTYKh1X8HvtqETousVoK1eBat9ixh89EhmZkNaPdzwDKG7TnJ9uPfMNmnP4keo",
  "key5": "3PxBkAMEk9uuyppEbHSrVY4EPbBSXXPWg3atfxyBSFvKK1YGHrNxQvtEkTpG7dLLudScetxG1CLUSXqiUt5Jsk3i",
  "key6": "3bakmj7XpsSRpS8HngzAdSCMKAX1P7Sivxw7bWchU2FjH1jXYyZuwwYJ3adxqtKao63aviZL9vYwBZ7wa14nnnVX",
  "key7": "28CJQsU3gmcEKmKxvTFSUZ98iF21JAgZJDdjFeauPErrKvWjLrfuRofsgMFmYaf2yd2rr6Av67HxWN4YMGpgDBfo",
  "key8": "gEG64gfPrzsi3zLeRirrZiirsEZxhCf2wmg5ufxiwiuhmLn9yBcAHrVtu7rdZSAXVxFkkYFYxwQMtJhsVe5bGx1",
  "key9": "627s5GwnMm3o3rF2k7xa2CeG1gvDX2YPRwppxDReSrx8oiwxBZUsg2v5gb3jj3iAvuHzjT5NtVpZLGMhNxtNA1R7",
  "key10": "5KQ9shRjAvKu8dkVCuKAe2sQMmyFaDf7AHY5WAx8o9RtGdvVu1rmxceoQNTpATVwrfBcHBXNqv3zruaNbVqvA313",
  "key11": "wmprUcciCnDUQfAByfRi28SPN338roovKsct1PvA6PgR4rWQYjd1TMSRtyWiTQ29Jya6G4Egy12if96KwZEpZCY",
  "key12": "2aveE11tUgXmJX7A3G12kkNJGG4MRA11o21zZxa8XCs1RFTv5X7Uqez4FcVqzqV14yVCCGMGnZrnxCrYpNwFrcd5",
  "key13": "2ZifquDPxGMcg2MPtMSMZKujkGGffQVsKNPch2GGCQARxMsruezTjTCMnnC5cTQFQra31C3rRJfYp73NJ4U97f4j",
  "key14": "5vdtW6Bt7189nniwEgFqQ38XXGPM7qj5vUJWn89zM54ya2KbnYejLC2PbCovSH41ranikPsVEnYPyeiujVcGX7Rb",
  "key15": "2GZnPgP1CF5myEFDnPSMaMDDi7QiA4NQ2QLQqjiU8dKPrtug7tpBTDdb8WKCgLPZNd77bkVg83u4x6oW174sZiPy",
  "key16": "3pw7Jajz31w3Y16acYy774eBstFq9tkbPc4RzxhRw5Ho1UiP2pg9tUR3ExC51iGHdfUoZEvcq486RM5fjUExw5Di",
  "key17": "4odbTjU6M4U16QZESfWLVUyg6dbgjW1Vfozri4qA8QaQ6GSS5uUXA91Y8cK5P5zDNKeo6ioS443t7giEdqX3hJXz",
  "key18": "4LKieYQ49LAv3cZ83TvUnLpNkh419iTegQjvT8VQnLRVGgKDRGV1Z32ngabFEpTwdvSDLp6kEQSG7Ef3X6BhrXbQ",
  "key19": "4qdaSKdnegWKYSkEA2aGd4nr8GcuSzCcbVoFspNi36afUHF4H2FKWtdHcRixrtCs9muTL6xM8frM7B3g7ZRmyPX6",
  "key20": "3KSJJkczP9y2Uktkg2t44JaQTUN5ggFDe8dsbtqMcE6u5yS2kkc381UNnyk7Sk49wwSGzwM69Gvz1ai6Ly1F7NQ",
  "key21": "2NX3yvVeL7dpdSkPGzS5ymBoYANPFxAossLm7HZdy4vRPMiTz7wizFzjmwyiBcPGMXNzx4hvmK1qppL42iTFznQr",
  "key22": "3Tn9RLrbxURD2xUinyv6Y6cjWuFYoTLcifxC6L7cURpWFXVwA3u8UZwwuQkbhdNob1vdQu5bJdAzLabtTHGQmKyF",
  "key23": "2R7ajSs6LUKvb3khG7k6y3fFpKNMPesY4dVUfot5QyS3Ch1QdTp7Roh6XHq7axjwb7CREgUX9rmtAcBYHdNT261h",
  "key24": "4UawDEnNHoEBKRuSXLKjSSfeW9sbvyMjz3sjL9HeNo4VDKpuDmoXzzLkPy8TrwL676s1sRyb3qFVWZ2k46SrGugY",
  "key25": "vq7tFiRLnmAmXRqQb4xQodgXmTpyaftCvQkso28K4JG5sPaPs3A67Tf534q9Bmt37YUm56pPWDZL9V3gdFYa4Ve",
  "key26": "5HvLWrWyHbRAZYVG8KtMEE1zVHTtqUxUw3GUqZraMidZgLfLeJqrQiSWpwnk43AHrHmAuaeHQ9S27dvoH5yjwaJ2",
  "key27": "2d1WoPHwYsUSVGP5fRrXCEMVAQ72mAQhAvsoS6QPRVmZJq6tNCyv7E2w1Ah7XcQb7TC65Jnxq3TSUWdTuuS5U3N1",
  "key28": "3Z7pRrTH92EpoRkJRtZ6cZSGXQbT3ESK8pY8W5rPdH8BsuWv8TWhJAKmLer3TDHd9fXjvKHGtGnDkUC34QYhTyQR",
  "key29": "5yVNGTuD1iBqSrJJFXSd4ZWc7usuJTJDGW5rKESRMQnpMFD8g65uvnju88a3Pr64uxJTBg3Lcka2d66MGEMCCNh9",
  "key30": "xjvjsjxiLS2PYASSjn3J7SpJP72o8WggXFUaEbAQG4qLV8cjRDV4Ww1DgivQC7zuhC5rLEd3eZvMrMEvbrP15RC"
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
