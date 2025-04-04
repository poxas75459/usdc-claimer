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
    "2dLSvjhSJiFTZ9fhajB8AVWK6YX4tA3ZuyVasW3kdothaCo93YHyypE7pHXk9mVCGKVkfc9J3xeT6ubACDAjiMf8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2TuhA4u3zipXc2CdZ9ybKAmaxeQHK6Ppf1B2Fzj8zTUSoiH35oCNgRqehry7afyqqWzhBSC5svUnm9m8CpYoS9BQ",
  "key1": "2w18kPCb7HBUc7jzmmun2wZZWfXWbU7EJr99sm7eCUKE5PtFt6QezjYDDbQdjseBSALUZwhcj99HGmEFN93QJa8h",
  "key2": "5d88a8prPJs4x4B7ooew1HqwxiWpGW3mpDDUugB3x6eqVUmRLfaKLESA5nY2oVi6LNL32AR99LbtNESLb3ZuPizg",
  "key3": "3evr1kfmQYkKSHhVhSdBQzGi9as9vrVzzr4XPXxYCM7a34a7AjmMhcraienXhPX2QG1j7Rk6pUoC5R3Rk2dDrVgb",
  "key4": "46C2k8u5mnfq6VCggVoQvg2KHZajrneGaQCmSUrLRhE9Py1WHL4qW49kD6dfkAbfQGTC9jtC9ZxNtjth3gQsZW8L",
  "key5": "3bHG1F8AbEZqQy6h8yGR7BYgs6SGEPF1uxgPotJ4e8qGfR7FaxeMKbVXGqjfKVrZ5VnkXDMcyDDRVc36uEdJwbJD",
  "key6": "5iSj1mnope9W7kPvf3Z1JvPQ7bDN2aG6uHDRd9hXnEtsT4KP2rEp5XYrhYEMsrA9STvBmT7beoQ3LXUPHmaT91xm",
  "key7": "5FLQ4oYBLL1tK8gYr5WQZD9r1ebMZHyvrjVZKngcFiRUzcMUVrXVmsXRuVRzry51swPmDkApyEtgGV6ovAmZ9d6T",
  "key8": "2vj86WbCMoyS24Coqa4qjuDxhSdACRBFXQ4ZbqZPyDbFGpcuUfGeQnAuv3X2W2cnDwVZexgYmu8aPgPybZ6HB4fq",
  "key9": "MzxymhEqpW45bE9rnhHooBszSNLW8zoyGXffuRDAeYBwAQtHQ9twhHHsFsUdJKpijFjZoWvQZQM8WmspeZDfmTj",
  "key10": "41bmRZjoRUjXytsdUA1CYEu8rKxiskbvA9A6Kg3fxrxVX8v4deQJ1TbaEZWQyX9udybSt9PhXnqLdo3ioMvxHRLf",
  "key11": "5dT87DYGuvpNRcxBG7n2NKQrJZftuXWHkJcYCao13VLwJZmqPWfHxUHLSKTFeEB74GgjqZXrBmUhC1HYuGqeJWd9",
  "key12": "523wDZq94Tk3NMwGhADuhk2XyR7sGLhULtgyxR1FS6f4FTZWtH79ohWdFkUJ7XDigSTKuF1tcD7n4bWhUN3msqtp",
  "key13": "4aocednGjN23T1ZbxFTALivNH3Xmx54xaaVagcxxeYvi26MmxdKcKzETXE5Eqxr7astSm91BzdtnCkmNPGnYB2NY",
  "key14": "2xpCFN9f9QFwooBT8AbVd922297tgtt1ctwkUTVDBtMcdXWJsek7ewQ7QCGhq8HuzbyavieoDAhPMf2R4vvsyZnc",
  "key15": "4XiKSTU5Qi1ymbQZizVjgnApDhrYbS2zHqJvLHK1z5mVUFqQkm3XKq4QGgotTiN2T9jchSreKCpmfzKowGtkPidw",
  "key16": "4WpAs8RHxZUbAeTcMdmJfvdZ7PEFo2NsprwfYfpHQJa27GjMBFgUEmhZrSysSqPD7YL48hKECbULJ6N45camtfMj",
  "key17": "4dHuNkeuCbR8rfWXdNJxoKw8veyB2LSvtZ6m5v41dtthrPWKoiq7WXYS3rUygNP7UJHj9J1xH4sMXbZFG5RxL5iY",
  "key18": "5oR76QFT7hb35wnQMduwfrY7ng34inc65AsZ8EZU6Q3eiV4z3hBSipaeQBJyHrCev2bJygwUbpEpQxUUKxXTZ7cU",
  "key19": "5JVutQGZWD7JWG77NYX6XpN7C5oUwS4qCfWidBfJLWjcnc4sgtF153frYgBfmbQtxcq2xf8GtJF94BaGkjzgyVXZ",
  "key20": "4ygLvu6PCDjacZKMNQ4k8uC73QcR7xrguCEoiJREAMWA6p59ac1DjZfvtg8KvcN4C8mfPLbaqQGMShgXtjRnrhms",
  "key21": "56sJPSC4rb4BynsSHEfAWEd7om5kBkmWg5FJcnvRzw3hVndtzLjVn3QVh7NTj2oHUbWvN1iykrcXYCcNXcw4aYYc",
  "key22": "3DyxbDNoAsuhXXkP7818pnLyJXrwbjr3BfG3P8rgyX7vzqmKumh3osQ2oEKkggYThvHj5bxZHWNRR5fQhbohqtJm",
  "key23": "3v5kV7WWtyT9h6LJLY7PUQSJznjCSqAXaYGfHkStygJQA4hDG1haY2ndjRszQ2hvf8XQE31YihDbUUJGT6h5k8vG",
  "key24": "2uq3L817VEPahW34m7TwoKwChwx8nL316zyVMuo9BLx8hTYmF9fEJx5yiG6b8EEdXzDjxoskoAzJp8RPx4cm6Ty6",
  "key25": "gcdJmxniwxfmkDzwBE24KARH98YF4N1kaN3gYLPTZnsUxjsQctXvLmpoHBWj8iP2M3WiJMNUsLM96UESJ2GUmai",
  "key26": "3bx5cJr3fPg8jr2sMnnv4uyao4S67Rvzc6BZiZ71QNY1gScQcLTrdQQ7erhPUo6mo876cCqtGtEtYfesyrVYx5Um",
  "key27": "4bkQ4w642AbH9GZGc4aXDM7QBfgmf2icEpsET2FUX1NSDjGwdRqMbkfpE9ehV6deECaxCqPhm18T9Keo3okqu122",
  "key28": "4SefSUeZ64P7dnjwULMtMWgd2qVzSVMiRMcvhMce7bYKRgpUca8s1rNXd6wrifrXnLDcpoFzvekvExbrVk3cBLmn",
  "key29": "3tGfwNVoANEcaubPPbLx3JzBb8pYajTCPAk36Ki5gS9CnnxLgcQ3dZ48wRBkszNrEpcRww7r5UQRjTfJxc5tHcz2",
  "key30": "3TNVAoaxFnnVzvutfkE4H2fAuSzzZjrDdQh66RuN6mYeEos7RCWzsSgzQE77f87dqzgDomWQW8rtr8ioNbKk2g9M"
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
