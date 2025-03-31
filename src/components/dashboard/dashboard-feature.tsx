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
    "2TRP64bQ1FLuw6f18LNzSALsPt4Rd4MZovoeCeSfwEG9oK7MyM72dRvWUtqcuTvCR8natTdBQUwFiYtGRcuaA8hb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5m1WWrsZ3qxYt6mKwYpRD7xn77auaTnTkuUGLvuATSBCgiapofNpJsBeyL1R2g8CBvddGUfNhZpxtpmWTrQUToXE",
  "key1": "pnTBpBkarTBBEnmiCmawxwR96ZN3ek8XLq8hXXMabMZ9dHVMwWqkrXoVYekqiEjMKY8MBqhP4sg55rToizXcWf9",
  "key2": "3NSAB37YazZTVi3WqoDNiwmF5KAzy89ssnQzcghTu7ddhBiH8Hn854yzf3ceSbwXRReqZDwuUm8r9oHsQmdepwDW",
  "key3": "5ccCGvCxz39iELtwKkGXaD5n4pnM3bE81i6ABxneXCL6EKoPrktEi5vVV49qvT574fbZEWt8MAJUqgg4L9XeeVq2",
  "key4": "2TF5pPMfCpzhEqn7JnYiLt5PEMQHEVFBkJnsRs7GtfVAfWRbuQjjw2H6dNFPmqk4aLGMoxFabJa4x4RraiQM45kw",
  "key5": "4xErQX8qEcUN7WWUCGx3Cpm4G7s29FNU863PTmeLH9ma1wwLEcwNAUB7MHrKYT3E96NZLWXoejrVC4vBJfCCZNe8",
  "key6": "5K6eS77bPPUP83GmaSvRRxRGvA1qQmTz6yj2GCqmeXw8jgs9idgbTBHbCbQB3ACxhNjMtsz7MfoiqQcbAq5QmR5P",
  "key7": "2Bq4wagm6r72jBpDxKznLSXP3j7hY874EydYmCZEex1Zh8LG37dL9eBbo6jvAepnTUGZYNeH7ZLaJfgmtKpa9wh3",
  "key8": "2XJYRNAFyWydikkBuhDkJ7G8mjja28Auu5MuXCc2Tpc1FWdArEGfe8e9KqbhpYTddMHKh9JUNQoCLvnGXGB13WzK",
  "key9": "2aLAJs6LmP3dvtpgZYi4NicngUBdMHKp2DYR8j3qtAjnADCLWTb43CtiGmKbVh1pdj8GndXHyWcov5dbRSP35R3L",
  "key10": "7pGqJTEEiXe2ZXPQAskVJjhPB4Nx8NrzugaUBD3A2Gd4m3F85TXYDkzSbe1ShcywwNyhiyLGpQn5VKH3fL4KaFz",
  "key11": "39DeVWmSMZWfmVBKTvYsujTGf5teiePKQGp2Ej69D3qrahyPMzsYfygPW1PdsorMb8nhVFUKqBoDgdzvigJhQ9KQ",
  "key12": "tgrd6T6uexHQpNo3hMawQnGtAdJDA6o6wLQTDxfFhG7sjqFmVFRRa78eUXAWJr643jBtmo59K2zwwNfw4o1M4K1",
  "key13": "5GKFDWLqVCT4NM8nhgba3UmGK7QT7pN5zsBq9cfD8UAviDRp2TFAnPxpGAMu4XqEzdqLGbEdQfiRpp6DkAbh4D7i",
  "key14": "5G9BYpW5qZxJShDpigHgXkoMSUvCRL6M3CpYSXTbPMiRjFJEzK6snPeAJpQ3vCjd5HhRURrEUrHyMpynrDeVYrEd",
  "key15": "Qk9j8thJ7NbxmS5mknQeoEVCUQqbpNwgPiFYKkSRBYiskBa7WA6ffcnTqTeiAF93vpXTfwDvxMJgcMgGuhfFvdW",
  "key16": "3W3ebNSbPR9JHTq6vTFwVS9zq1dtKctyBquGZjw4Hw3n8exHtqs1FPtKiPN2w3HYcZnqJxYeifdXYjRgEm8vG15v",
  "key17": "3MRAMMj34ABx9U2AbSxUdm4Syw8uTK6XyUU8PZqcoL2BFomzDkVpr9shNsmxLzfJUmfR3UBNLj6eVLi3ZvstTUHB",
  "key18": "4K49fayGzuGKHGyD3inSEwGfkcRc8aK5KYiKSJZCXmxWharnhg5ymerzzsnhgqo1canZzKv54vg8n6LNmW9Kvi6g",
  "key19": "2PdUa76wD16H2rPzcbDL1Wf6hRWEnPt8QK6R2To2DzsRYpq2fhUdxNng8V1xLZJxeEbNDWKewRzzgnA63ZEbRREF",
  "key20": "2UndYdQVneiHcJ1HjPec6H9V5dRSmmeD5jNaKagkqSJ5dw1FyHfdUCV2biEGPBYfsh7E9FweqgHx3UKbYxwjMkk7",
  "key21": "G9REnHgt6tREUorMaoTx4qnDjGTmdRApXz1oRNpdtkDToFNmtfqSNhhhSYDFy6gURXhgP2XCcFJyuk6xzLaE9v9",
  "key22": "4xo7CfmfyTdpX87PPcXQE4w3qgjm2QJ6qSDSfbVjqNFW1iyhLMp56tAjq2uYpUMQN9zo9P9Avjfdfm1gAHqkBiov",
  "key23": "ztoRHtSdy7ML2jNQRnoCaKMXDV1poxM7wBg6EVopqf4hAb9HXbGCv5VeyEwHr68RhvLbhYU5DNWbBiGePW8v9TY",
  "key24": "2D5brB2sX3EjQNtta4vWSGx6kwVwwHFuA7URPQcZ4WEWy2W5EGXcfLbnu4YzpNU5SA2CefCXPikgr5VpQBbuSsRB"
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
