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
    "4Ghk3WaH843LSbLJwAsrMsz2RjJVFtv9WFi4dqSkzfEvnTncsxzpfW5S12PSuHMAdxE81L39GBcCCSdwxUvnqFsZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "56gXckjtHmdVx67m1GBH6ijy7R4qA57xgxVFCLEgHN4PjTmLByp2RGapYufDJkRFLSzrgPXwB7aXHAhbC6SxqUjf",
  "key1": "5RfE4sAarZJCTVRiGuestjEhEJKtYgddQd62nxGTkGF92aCAomP72D7EAWSnu8zUcX4i73CuPSicXPrNTbgcQRiH",
  "key2": "3NUDk7prKUKYrpPeE4EyBeLZQynCeVMuqMDvP1LEuwQMpPUipYg6xzf9xL5va8MuT4X6RB1QfV5nfE51DbqLk9Lb",
  "key3": "3c684CWg89dY1Fx3X1aYcyURkJTz1ksEC3AXK7H9YxoVCPLFvhTfhwUAhq98V54JPprzgxafCWoQYsrTWoabQh78",
  "key4": "2L8kMGpGoN3ztQ5VyQodGD3E5iFKarLcBwKoKvwSuR2fgMPYH13Awvc7seoNkF4QkjkadEZVoVQ5q13K8fEAp5PY",
  "key5": "4GkYD2m11UtooZEDv7mBnYp2RkYinoBakv3ZBKazVmNSpS9a8d2dciV93tyq99kneWxcUJPn6UJbqdYdDSFhw7vQ",
  "key6": "5BqBf6yo27982be92T5s4c7cbELvjr6JoCooa7UHrUwoRYfgn1HpcTD8uQMjM8Xt2kSe8Z2xiQ5heQnHdWH33JyM",
  "key7": "VXKPrbvmAZmQgPqYNiCWQ43fsqF5gADBcMsPw9DHyvaXKkieeaNTZ9SFpsSfFSCwQgiBAWziUj8nhwQcyR3eFk5",
  "key8": "cgEH8gjJhRBvrHykZ6CXNdR6zFY4nVwUZWRQPCbrF1mict7EEoFN4vRGZMCv44XBq7rfFN5wF7J7mJRAY45q8eP",
  "key9": "3nARh9cJ7iQvNFd4gWmyyK6q42K96WE3rGqNiWe1Fo8DukMSGTgaiiTqtdm8DM5EpTMjBgsoXTAvkgnn4VE1MUoV",
  "key10": "33qjxJ7hXauMUSckb5FjPstmTV3Vpgik34mfF35AQaJJSHSPnQZAzZP6r2REt8gXb1iCAEQWLmJ1ZPA1kvjdXG8z",
  "key11": "4KkjLusHGoSBhkQx6zsMHV7baLTh8HFZ5Yxm9ZFj4Yww96jd5nQc5AYSfWf1XxuHBs6bFGwHyCgCrDmUWFtof52r",
  "key12": "4BVnJomh9zSwSzPYU1DAZPq1Fdc2nVC32oAJaojyA8z8JaCD93DBwYtaymmLkRnwsGfh2f6mghyfzJHf5Nz2KkLR",
  "key13": "3AQDCy4YaKyuJbTqmC3w4t8vQHFazacFPYkHF5fuD8LtaGMKkQX6kBvd7LnQWkhjw8DrRmRA1cqyg6352kuwSSWX",
  "key14": "5Gqi4tcs3P3sesr5u3f9JYyrt2rJ8mcYWvqV82muMqefuthEmMebVPyodcgfhTv6g75FaRc1bZz1qPM1DF75Ssis",
  "key15": "51MRbMZM9m4GbbchELb9jw5jETkEraH3v6k9QH2MLVfuRsmGjDUcdfB4oPmGDSDpJJRgz9izLEK7aX3MxwYoHsmk",
  "key16": "4rdoo3Kx7MRStPehgBuWcGKqA4DbQnGREdFriRn3ZMpguJHG6gDhRX89mHYKBCQztWNKDri9yFNYKYj7MT4ePytJ",
  "key17": "4MRmFHSihuCr8NPc8VW1QQq5KjvjcVJTqEZT7gRAigcwBxJt6VERyEfGW6si89Cx9sgTQ6GmzwBzJWeeYmPk8MSq",
  "key18": "2z4Ejg4dUJMnX36XbvHy8fAyyKzz4hVtGmYVWFMS6EDkszWffWJuvSSn5vggiWC5ffQgfwa2w9ULPVZV4U5XkxMz",
  "key19": "2YJwjbo7BAHZqCuCr1HJrhNmTTGPxutwd8DXMDz2rvh61RmS2tNBzc2gHt25hJRFPHRY5xJ5i5x7N2D2a1yLmZN",
  "key20": "5NvAEkpYkWa8Uv12CGmFPH3upWBowjrMfb6Cch3mMWPLCYw6cHTWXgUyECyjDFaXrfzhvvyds8GpUoPs7LRvF93n",
  "key21": "5qhdwV9gLBJLQefdUaVoQLofndBa2zhZvZJ6aeqdF69VXUEvxXVRuZF9YKeFG5ry4udNKZ89heRDSQnSddYPDVAQ",
  "key22": "5gRr871s6SeN11w7jaG9zzDDZ6DAkL3WnkHniGEMNwcperjTBpd956FpufkrudNRwY82rWrrt1kwe654iSXD4UvW",
  "key23": "2L5cQLbQQcUiQANNARbzXbhBAJVWSFPJfcX87X8Mcxk86NQ1KJnaoTjUGZ9mgFxjVRwL2B1SGgCDqVb1mKbyC9GW",
  "key24": "38EXrVHBAgrDnJPaACuyMP49ABcqzhrD4yxjC8TK8QDxyHU9VbzL4dbuhmKF1gHiLVhki2MKQGC3ZnipHP1a2fzb",
  "key25": "2VjpxBTqrTZKqEe1qWHK1bKmajC9RQRN9t2uj4h11ZQR3kY97NgaAjw3TdWwuR5j85HxYQz7G4Cn4jUYtHyRWaAi",
  "key26": "J4r5hx523yjU71QmSdkB2YZ2cmP5C4wjW7fULJhue4QhVQ9Vj1ZZktAvribG4wzVnaZS84xZTyFFUbpwr9xbLMc",
  "key27": "2cMTmMwCC8ppCA9WsqEqtPK2XE6Cnp1dXdNS21NueoQzUQh8cZfMBxBgALKy6JgxvSc3JnEs6Ks1dJ5HRMti26gx"
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
