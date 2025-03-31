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
    "NVMLfC97Wa8us8k4qcy8sgrUhUcodt8NGkG7qBtcFcZ4PtqStywx4g5Su375i6B9xHbUfTt3AWXjkTLULyWEJv3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5PTqesMoxK2FYC7wYepxTrvqaX5ob4AcZebMRgoUXUTtAVsZjHaWD8Yw5VU6NkKTsJTFP3doM3xupuLdE3HrVjyf",
  "key1": "2W2zCgZbrcrkerKsL3GJzS8WpgMspoXmYn6zrnzLoguUzqNpUmfMF1vEsosDgWsDvwN9V67dv2GfYnAX2g4T2BD3",
  "key2": "2PAcLmjiPyDUwHtQaAt6qJXiHhHvVhb2bFkyJrZiMRxM6zoSkkEzbJhvgyh5AikQTJMvy6DzdDbWGwA66jyB95W6",
  "key3": "35GZ8E2rGGBheGHWwAsWWvwxPkSoyh1dXHptHUH9ABLnqUEyygUHi7b8Z3oS8PNtxhPe71t2gBAcNAuaGKB3Gpxo",
  "key4": "237P3yBrD8icjZzSCJRrrhvosHDwsSmTMQNRUXnsi8Q7S3nErLxxaSqt9dbWuoMMRfoXhy5K61iuhnNioTPAoLMC",
  "key5": "2kkrUkY85mr1LGrdhh4gJtvUYmAgBJ9wjCrvCFgbpwmthgbHR2dthQhKPXiu8wytGWdKxotw1Byomv1FnJKg9Akh",
  "key6": "5dmB6y2VddsKbj19XVps5qmi9iQcX53V2a6cSFBY4h5TTYMNZvsFsipsEMsHRRBtF69CuEMsCBWqS7LMjW25nyv5",
  "key7": "JS1mat1WjpKFXA2B3tTKo9NdwwKcij64bFzCWSRA2yBXzkh5QKESK9wMgnxiTqejVNmVLWNSwuGh4bd3pzvgtUq",
  "key8": "58t2VZ9BRdjTPbzZCt577hkWtYXRtZDyuYqSNdtXursQ7UyjTS7zX8Mgi2Zo3QgqdSuCJhshXzwvXazGpW73EWyT",
  "key9": "xAnWjBtXhSMcTAJTe4MJJvSWx5Q6jJa8Vf5CQy1hDSdNFYbjVsiHDQDhTq1PqNPx6ovVhJShocmiY3kdi31jdu6",
  "key10": "43KC4KHoXcpCeK1HG5hRAPVFRfTDPJmfpa213P7sC4LSqeQqw3PXvEig6QmsStEM6gHN9CzvrbbvZR4t2fTyecz1",
  "key11": "3K6yE8j8DE3qpbvmmn2wPaU9BcYikg4Ae6AeEUh2W5ggHZ1WjDMhQhEoir4qboNYUJs1QRPuQEi8LjDHBJmgT2p4",
  "key12": "5KfUeaH4ii45G18AdSq1mVCuSqYG4v8hAysriTxQXPmJGrQH2jkaQLb9SuXjrjaAmvj8kZURAJwuTNFryqBa8Nas",
  "key13": "4TXxNtcRY6RMB4AFcH1dC3qr8DgfNkmY1PcvQ2P2sTrYihViQWCews14uHwd6XAkLM6EEshXYZUcNoVj5ETf7kBt",
  "key14": "bS2NhUMeoSRx7jTs4USiGtYz68DK2ZmMuJqSBiJjxgHngmALfHZNV89eWGSdeq1amMVS2RzvDfTvk8FmqEMJZfv",
  "key15": "5b6omLThhgjTpUZkgbV9bHmKGFgW8SbhtW4zmZnL8hFxuePCh1gUkRX7B7JFHq1v2y8T8zdwGFG236XLg6dVLqEz",
  "key16": "3wXCnFRcWNST4MnVvMtBvUwcSVtCKq8vbnga1LQiQfsYfaSwzuy24YTSrUnES58FYzWHoG8vPvByz3v1Q4uDybpQ",
  "key17": "4nqMpmVA8h8hMCsEQuLmju56EYDdxpwM2Y9cevp1TwyMXaR89wYHtJo8mXBzRTZekPBWQxcf38DE2UG6N6Axh5LM",
  "key18": "22Xs4CJ8143RJKiiVPaNWCBWKGGZLVEHBCT7bcNNbTLQbudW8CqEDoVsJyMPKheEFfw7kFTq2Tdi4Ffb9WXcmrqc",
  "key19": "2oc8oWx7Q4ZeAH4kiEZXUCCvTrqJ2BT41YZghqk7a4ARyYDdBwTQs4Kf6zwM248aVY1DaVKZ55ZvgJ5aKBG31sib",
  "key20": "4nQ9V5jAwh74qCGVfeG9Fivrcr3QjkpUev4bwase5GzNMnrS6EGZtZC5LYooMYDpo2c6Z3aXLm5sUDpRcJD7oDyR",
  "key21": "gv7W8L2P6qxuLbgiGu9ugpL4MWfwJHonrRRrS4zLxKQnYbzf6FuctdhvVp3hpaB7KKjHvP5RzCrfSqZbEX8nq7o",
  "key22": "3UaGVvCSm6YShBhH2zmRF3nnApWJQ8DkQvwwX3tXi5WQe4NZoJZoRfCDuoCrQKj2PTkgQLejEBCgFTZd18hRn7Cr",
  "key23": "4z8i9dwsd59csVjxh4ZquNpzo1hhnM3aSXqdMogqeCJMAHc56RAKxSrckgXejhMUiTBrghRcV5Lwibs46zEDSEQT",
  "key24": "424iH2Gr5GWv4xSM6MggpeZC3egrYcE3FNqC3wY5WN3cTseWY4kMgpiFhJrMb9UGDRbTfkypJKoj6fWnMtPKgoAy",
  "key25": "3aXLh4fCGttC2QsT3c52JW4y29DaPDWtP4efXkRn6cKBzr7s4LmWjuVj2jGjyb3JumFn8RjznQRpRiepMkyrFrDk",
  "key26": "G66uGVggYn7PzG33iH8Rs3LqgvmtaBubiDzcuWetLg1z4LrzkToxNK8NyXd2bDUgCokcUfGKQxXMZUYjtVTJDQb",
  "key27": "5HNgyHpWYjRCLkZvGj3JcJaMutych2T43z5VNaw1PHvKwV9vg9s8d7iNPZ8mM49LuUyFGyKFkL8u3DQRHLCFAicE",
  "key28": "5mxL5BqbyT21aQTCr3PEMn2H44mbFHZtwjxeJpmbKcHgiorfGJsGc3YReqshQMUb9jiiux4EvFPW1UVbUmQDDNxF",
  "key29": "4gn97cXFFn14VkuGEatnSew88BMUDeuXr35n7uVAr24a7AM88oKrxz2YpoSyCNmMsb5ZVLGfxzdPkNh8jqR9VqcH",
  "key30": "5q2SRbg8EAy6cS6gKbAnoNcoPDNiH5GioUbJCuUHhsYwEZQatXi5Uh1fm1mpAfas7CJFxExjLBqyDCwApMnzgqvh",
  "key31": "d3vUkPgWDYTiKV6NLYf8n3Pw3GjUCaSNL4PgwjVqFwQgUpV6yuMzHKzzUfZrc22DqjDKsjDANnxQQt9zNNC9ghk",
  "key32": "61skhkyenwSntF7NQDwWf7oQdChRMPP4buCDQidpmBtKnr9AT4K3EgQnQvcWSepS29U34M9CC6VmeWUtxQ2yErYX",
  "key33": "47dsjGsy1i8t75Gqo46Q6Zp2FD4T5iTku4hgmngE2axQ9n7r7Z1nTN7S9vwTazTeCExBbTBMq4V3nfa2JQVZzsr",
  "key34": "5XE2JV9pyzyUURicNuB3jSYU6UdZV3qG772sGAUDknfr11YzcH4ErkXM6SgK7rhMRPhVh3BiypzTrVM8zwMUAiPs",
  "key35": "5EG8kLUrBVKrAGam5xfeSqPFhx2wV24oenLKAThcrPszXqLBKr5zRmGbHufRSP5i6eGb7DP2CARdPpSpPHnp8mfP",
  "key36": "2nidJ8QMoGXkfMdyFtYRFQREtGbAVGoyws36CUSXEtks3XpacVYdHPKZJnY5hjqAHrqwgksdZs54QJBxWxcgQUda",
  "key37": "2m4kGoUPG3u4PYPdTMK9GCMcruxr7S8uWJCrVsC1CjpJJGKRGzGoYDBdvb7aGVy6HywTJmuLf7XD6tWy4KTsCKei",
  "key38": "3Hi82Kcct3bktnVXHPRGL1owgsD2fPhgdQiRRA7fxZGp8k5wZVERwYoQMXuMdMxHPsudqbaS6A9bWLMzGp5E4Mfh",
  "key39": "2Rrt2gjV9Ui1HyVnUsw4xXhV1pjWYvhdxnG1EHyAAN6A9eheCMX2SEBeBSgtFQomcYEFnoUXbm24LuFWWAGYZm27",
  "key40": "5rGR1uW6kBavWpdCEoTYLUXnnhfuh6PxTG3uS9s7gUFcx5nRU2igJuMGZ7ETGzLFUdEb6GWB8azuu9ew8K4oqybR",
  "key41": "uLAK4aCHsuXKkAjMdPpcyZw2iLe5tf6szp4LhByWtQDhVRdY6h7ppdtHS35QQ5LfUkX9Pz17vDuKpBj22HHfksY",
  "key42": "5Zh63vhW8VvfSASWLzy5rSXQn45zh93rLfkPBeZUmsWdZTKZb7pRjmanNwcBp6Z1ES3zjJvXN4Ksv2Vzo5gCQtCf"
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
