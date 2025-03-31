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
    "4m8jPH7pPc6HMLRxfSNVHDdc1NwuZCsHkzSKu3bYJirFE9VbUz75oDUkeiQdQMy8EhnLSMpGmiGH5AJXrc6yNiKr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3a9tLVWVUNkogNt9wA8RzV6WNYrDjnMRvGyfCvXQKPGWtQDZz4mqbTXncyG9TyacTNBsZFUzoUbwCShKPKSpHo9d",
  "key1": "4qzXuZR7ePahthsGd9aLerB4VPriuTPEVEFBxEvBt67411VWoXDQowFpjxxWSUjaECmgqQVkMnQu5iktQuSgVzxa",
  "key2": "3W69euZvUB4XkqrfmXwBE5FRB7foEnb8TynvEFEDYfWeL8RvqqoYnkjgbTep5XryiUPD4UoqK9PeT7CpTjwyKEme",
  "key3": "3mq2MrDpNaoU9V4UPgzjxSadYP7CaaurDqEwMTxJrPhpEBNrK3e1zZoPQuri5D7T8Tn9EhpPCnMrGUPYsLcu2Mg7",
  "key4": "2xpWmxVqoPEUUo8GHzkwPWZa3mxBE8xBzMMWP9pw1dNKMK9z3sojRNpbUSAAJPPB9LHMTHa4otcJPa7GaiyebEtn",
  "key5": "5ihiB8rZ6mkHWWTCZSTvNUieEFwNUrWYAGXorXE66SyjfS3fHofrhx6TdqEwAr178TBv1Nkyjofmv5miSedgbdR4",
  "key6": "5a92HQxexsS1txwgg3zBi3fzkua25UfA8NXpvnQEv7cxpBsDbv78YH53sudF4DWYU5tjut71UdsZYrYHNBFUVRmZ",
  "key7": "3bEzToLdJi4GxHB8ehPtdo3BGP7a4rYnxgjextCFmT8EN4YGb9n9QKWWmfXb2JvcexCwfFcx1KEDgwA91QN3hU42",
  "key8": "2b4cGX5cxHLLtnMsVSNkU1G96LJ712YEK5BK4jWGs23fUy6YjRsBVN8gvjAykFAfQwTgEMRfGvx5dJcQDfik7mgF",
  "key9": "3Z8WYDfGLZvQDWGxqWAV7MCvWXf3kJYZ9QPSkEej3w7g85KpN21U7wWbHDmU6DSrtpRvaHjXG47qDJGfz2mfJxB8",
  "key10": "QJgY51ZA2qw5SUuYXW6odL7xd2qqkrYpQweuRUAdgu2HM3tComHfQdkaeg7DBQYxBrRn5rCfFGLYFXc8fWaxvq2",
  "key11": "4f9DYBpuTLzLejS8ENhRQZqrX4wbWwKxicrH7ihqbtiyWfS7BSVFqFUtPNv7Rsq2hzXvaFazDoKV6mMpGhADH4Yf",
  "key12": "5VWvbsoSpDxUptErQfcQNBDPLHq55EYn2WcDcbhjsiCDEKTXsNYrExKxdQKLj34gX93rMdjHkifs7EDuUeQByVSo",
  "key13": "vAa3Fwu1NK9oiD7JmprsfDuRGW3ZeLKCUcn27WueRFBKQ5nEPX3Fv1hoGg3WZsrWdk6PTVdvwVsavKzo4wvN329",
  "key14": "392KHb28XoWqGMETqD2pAJiGNy4gTFxvG7Cpea9c7oXRt5RSpnQAR1kLWRnnmY4G5n38vN6FYPwjM8Y9GFhA1cHL",
  "key15": "61Hvi8Wufy1gXpFPVG9eVF1Fu91Y23nrFg2JM6UueQYbA8LHhZ4iQ6asoH62M5pnrjijurNPMXpua8LnvANbPSEL",
  "key16": "5sVTaZed8bE6Ke2qKEnVbUYKuRtTaMnFFJdEMu8V9vn3MHQGW23ckscahsNgKXD4VguYxTEu67WEzKwfqk2suqnr",
  "key17": "2Pmt9RQz35Hfww13D8AjAWXVjvJAxDjQiqKchvSkUXdS3iANi7ea5xS73BjPcrs2dxwHRHiRw4bcftG4Gd6YSCa7",
  "key18": "5U9mj1zXAN4zDHmSHK9XxyDW111WweAfPJXBsWFckmoNxa2EULFKS5abKRKmJskfCAGtZb5gnjvVzawFn2DH77Ac",
  "key19": "2pt6ZEDgQLho2TD3bU1ZjzWoKDJk1k4szKcLMtxhX1hFk3dgBPfeGFpUqNMV5WUBC75UhutPPmNVypnXGPwMeiDf",
  "key20": "2SCYSZhrYVihNE4rMJVTBnSZw53xrrTv9KxCCkp2VC8ve9zRFZ9b69BnRQtUyZXR6nL9bcGvNvQCYLxqfmCqYqwG",
  "key21": "4HdwwUQgEKQQvvvA86prFAeMAwAAEPmZ7cNtcStAqzDCw8T1YhydSqLQ4pREjRUoghZgseR8WKMSYFKzF7svZB5M",
  "key22": "2ShubdMXmDJXxsNVYScLdu1oPmS72DMvF316QDWF3M6xyGxiS1VHJkrnGHzGjAp1Zej93gLxc4ZMfHbQJ3AWvWCg",
  "key23": "5wdSGHnsvokkodpH6MGD1374bF5f9GgtWfBPzN6egUQLRpsPqVtJrJpSbmWrh9aCyhyyCH7zks6zNGTcdKLv99Pp",
  "key24": "2VdgyWTd7JhzRPUwAVhsv6W5yJEAUVNsM7Ndqg1QC18ZTvg6q7n5NDWpSe5tvFwbhKndHkxxyw45AyuK2yyCyivi",
  "key25": "2WY85d5kmUqjN56Uy5xQehMmLV8rrs9HFvJ3QS5zrX7eHtL494UCJrwgzN8at1Rs6HpKwrcZo7Z2YkFx2ziyAfR4",
  "key26": "45MHu5VhDtsr1E551BkUzFfLvBa4vuAayaMGxR6eAFmZKTWQn1dyum7Gs9mnyrUxoqbPuzYjZQ83oPgPEj46TQss"
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
