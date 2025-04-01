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
    "4yMr9fCGzErnzaaYjGfMofqz4AL1ns7b7yLaPg8PjLdpo4ZGfWtZ9qVZ1VSxwR7ALZbszdpKpZsz1C5sBQfr9DL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "g2nM6NXeGrfvoJ8kcmvzaR8hFcE5LHXysCfAy58HQmueCTWNXpuZ8SXCxLN4Q9av9AJC5oekNqtWe56xkXxsu9e",
  "key1": "4K7fjPEXK71BZ5BC7DNmr7tYSA5rSwkov4pGLYoxmkRq7CABt3bLYvRc4xRXrQF5efEQrJqzp3x5goDktYK5zCnz",
  "key2": "3Bgf2BdxZ57AuqLjFYCnYHqYgYGB56XB1R4cHLgT7H7sSdp6PzYxRNs3NenPwJKnJpbbbqo2etKw9KxwxkDXxFKf",
  "key3": "5xvRMNoAeLJ1YZEwpzdWQ9YaURGMLkQA1usZe369PMbPx2JcUsFfRoU7jfqMTZK6UWSVp4huyQ8DCQpNr4gCxLVj",
  "key4": "3gHdyxsGetar9Vdo2mHeiyFPew18Ug8yGegqSEgoH4BFuXLUyEyr8BHKTpbYF7xN2sBSHWMhCHo57ZyccBdmxVuL",
  "key5": "DLAiaQUrU3dtGjT4jo6G96cDrDFXdkGVG1rMfYW1rMbeNWgF3TYLRSziVbBouesYr19EH9psU1kjwayQFbfhHW1",
  "key6": "z2t5Mb5jp6sf4j3uN37mwjmXCEpiZjbPbJnbBUy1uzWfgsuPvJfLwRn8U5CqrT9ARE3dD8bBdyey1yRxc7WL8bd",
  "key7": "2j5M6NwtS63S3FoC4AGmgGATbsoDCeF5PAF4NCvyCsypZCMQN26j7rYKxhzRLsQc2jarqxp9JjBTkZzj3KR53ukz",
  "key8": "7b1YJEY9StWWABYGC94v92xWBURr7h8J75yX2buXAVQA6KkfrH1C4NpP3oDV3cFotVLBukGCPtoWHLmz5LFSSE2",
  "key9": "57CpZw7RvJZnBp3D9YKHiBCF2rDyJZT53tYhQTk44b6yTrXwgv1zmhLSQGmCSWZUFziUyiCPPsxRwTJ7BhA8ZWrK",
  "key10": "4vXxgQjQ5tu9a1Kxcrsp2oS2cUNgyiD2e9fcn9FugGQoSSD7aqwXE3FBCZP5Xf5iQsdCepRwH4jkBHJegbRVtNjB",
  "key11": "ZLLwjyRBG8cGhEzG4nbwLP5WQ1G3SsMz5sYsAse9P8bGS2Cvn6uAYvnSyMqKErfEXqxd4yHDKBJot1SR3tNauXP",
  "key12": "4bu6DRRgWugc9EXfMs3fu9Mg4MfhBHi21qkTCkwaYg7WrFVFZparWYGcgNR1Z9uX3GZZ5R6v2yEGCyxi2XhjM8iU",
  "key13": "5uVg5uenTHWxJPr7fojbJgXHnX2bbvfwndpCnyeNKLn5QWV5uMtP4wjiu2QtjUvsomb36d1E2QidfdyiFVNKU7Fd",
  "key14": "2CRKunnUz6UscA5oSMCZAaAJzsN7UqkB5MVjQJPTQp4yENqFHWxsDWTMZZ2R1ShBfqeo7Pr9iSfmn7gY6P1SJD9b",
  "key15": "ysXvA2oghbQnETGyrLSePVREhPu1XeFgoM1ywh11eBJGqTarbqKWb4dsu6qXimc4TBohvwWVhL95gbi1ZHr97ny",
  "key16": "2Nm1BRx67MMKUAcrrN2cqMUnZDWqGmA1twLhruUUooLkYypKyheLn8JAydwN7PR6MCGsWoMXjKdW8wzoWj4qzCBa",
  "key17": "5XhSjNffbg1ANRfZ3U6y7VnW1jx9P3m887F8ZDGEz3TxxMtiuyM3wQAHXdTzSvDo5XGQVcU6cyMTgqiXknK2wFro",
  "key18": "2geCNwztzT8XTp1eP2f7XXmKt287xTsC1LwcUmozFcUQD4ZS8eFSUGjuDpAte7zZAZa59uBPU1o2J69NrYUNHMd4",
  "key19": "5jQLA8XAHR2UkNHSKSKixJzzutQJMFx3BGNCRkF1DgiBCvKs4w4VEhPqC8yoL8D9RjKy9X4mtTkDSWsBJkQfdQh6",
  "key20": "2xnkgvbxqigc5pTMQsJFCz27E7BXvbSevVB3nRioy1w4EzpKcB8ow3JhwKEq2omy7VheYTtq4yR73nyWmrnJGnD",
  "key21": "4o2oj8ChCBdsSNsYQ6WAsyMxWCNDx8qrM31P3PBEr2LycBQPYWM14vveab2W6vcTv1d9WJc52fWHbkn6NU7hFpRT",
  "key22": "5DMehTmBb73xktsTrptCDx9Ha6GTsfhpcMVxbhuDGKhVAAr3YGfyVmVmHfsrDSfgKbGykyZgwVJS82dyRcL7us1d",
  "key23": "5cu62ye83gWCoMD6SQZ4dwecsWZ9rN2WtXpJPKbRL46VtXcEmCgho9vPwVWkyy4i2ciJCgnu3TRosncQtHty4z3n",
  "key24": "4RFVi9wWY9WTncuyxTzjEZiZMfCs1CwL2SufU8CsdFNZp5jmZahnP9CE4b9Xruh1gZGx3yh3iRLCP658PHtznR1e",
  "key25": "nzpcqphytMTQQ9ghs6YsUhigBeJCTWoQDC3i4osbGg7K3BgHun7w3uGt2o98KYWmjrwzqSUNrvHZTkj7tC9VbsR",
  "key26": "55GhnqbZK6XBUbdAWPgTkQNk5XYQ24m1L2mF5K8DKyouM8ZsTX8LSnqinqS5HSBKrn4Qh54mGeYsmB2LKynS6hVY",
  "key27": "4LqjhXAgpomwhuSQFosqmYFN4FUXvscGkoihqDCRdTqN9U1qFnBweRTHozuYa9xWw7h1opDM8x49QTp9RhSWvSCf"
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
