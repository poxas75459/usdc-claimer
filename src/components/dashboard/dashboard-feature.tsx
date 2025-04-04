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
    "4axbBTwSjhg5YYHHb7Uxk5Gc9syyrWjprq2ryGKHY6isRSF3cvg8En3stpVWWdhA9mDrgjxBMqYD8o2n6iVu8whC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4YKtTpYTZL7XM5gjzP5y52dB4sjoqvmeYHWxRZFcCoyXhJQdKpJR4tyyBkWpusDmWxb3LaxB6A6nifXRR8uQEhGX",
  "key1": "m6JiakVbFk669KnjY6aXx6cCxEs68yTYcC8E2y7mEavQuWcEtVoBRUS6CT1E82D2rRexQV6so1iUWmjPxhqJA7N",
  "key2": "4rvVwa88h6Ho56VZgUqfSF9zdJoJTjsVckPMiXn38sdvt9XL7xF1cCdo2gdrWBQckAf1yjbB1duTwWDm2aDBptiC",
  "key3": "hj214bYxuWbXCEBZKit7icfrSAvwz4p4CuEbLMde6vwdvVptAMSFhe5S7ae2tV9X8ENp4EuPHKpuz6kptSnC7gE",
  "key4": "3R6uyP8uZBAEuvrpEJGLmAgVuRaTw9bKhiVk9E2kAaST4cxXWFpfMTLAUmXTA9cJyv48QAw4YWHAeLGW5ywiqeGH",
  "key5": "w4hE1GLxecq7GXs8tpSGMdURic7pkp2Rbbz8iUdpvFkWp22XLL18H82XwnPzicztRJAjgbwQUTtBW9BHTVCQgs7",
  "key6": "W5oufTuEPZZxtpqedus9JH3zUpt7ndG6JtP4JDCqW338HRymnYegp3ukCH2VQtnV7KJAKPwcLVLMNHihLRy4FMW",
  "key7": "2fbuP536hLERSkKNQSDNvDYdepJtevKyY78ojDsz2WqDhvfdY9a3o1sAf8oqSCYyJoWspvN9WkEf5Np7AJn5S5BX",
  "key8": "ocuT4ABC1AhYjGAv4ShppSPdnKT7utwUkKHKEF9hPETNJ6wHS5z23cSJRfDYF9mitMDTdqAk3BUfDurCUacTxKr",
  "key9": "62eqPRiLfUgWinuRrSrPjJiEFQnfPqpQDG8KcEUY2jCRRZh8y7281SR9Gj48LCXYcxUVt5b7Ktx6yHtnUYFaVY1i",
  "key10": "mxZvgRBUAP7VyiMPjKxpR3ahJhEMoiY3w4yZWCBMYKkmKDqov4mGZzFq6myvWHJqKUZZw3DFzzpnANw58PDSkvH",
  "key11": "52tq8QUcYrbNb1ZdA74Zp11wvJXnAhdL3iJJNwrNbmUNyWSRr2U74qd99LprR4AUGUCMix6mPpQa4LhgCsGMdmea",
  "key12": "5xtAfveCmq97m1gN8X5p4zoqVeZnUex2H3wdD8CWmnAsD9KPaMgbSWmA31ZKfKKLkvJaunXhvNLET9cbGGLWWSUV",
  "key13": "4brsJKDKPo5VPodhpVcg4eQDvTXsG9LXrwmMXhAGcKwGr36WmChRRNPkBjgjkFr5Mo6ohgpKKgu1ATjjQY5jx9tC",
  "key14": "3FCUb3iqPAzsbpZcJic8kSid8cjkyGQ8oAtspoGTaqdReSYPQJ6Zjn522x39Rqywg6JwbWDazdSsEnioiT7nZCrz",
  "key15": "63aTixgf524pVDksFvywHdBjXCdTLTpsQTkQjZre8jMyD7GVDd2sV96hf486X8EjXQcN5aoc5qbcNA1fDDxmWYUx",
  "key16": "5YJzhcEsxQw8ARsDfsdJENkwAXFMNrGkJ3CpMUs4it1pbWLePc7PjjsLbc2vFXvCLTSpxRayZMw2AjqRgiu1fmea",
  "key17": "4t3ZT6hsnNeAFXD7uxzkpiirhxYYV3uQ7rCVGp9YhrCfRSFVaZBTnFhsnP3GpvdS6dxEFwYv51hfoz8p1a6Rx5tX",
  "key18": "66uswXzFuqCimAFwrioJHR1s7meKdWjMXWkn8UqGYvY6zyR8ihyAxWWVoxgAb1GpFLwAQA6AEiEmMLosyPXAUxuC",
  "key19": "3JpDMSNhfJnyqxu7LgD1ijzb8pk1phGnRkV3Vz1qM2TwKLAbLMkVPedPZkGMchwuiSe5c2gaXU8k5wZUtH3UY46F",
  "key20": "wHbreGQWRbgsjiaynGrtzSw7uXdAK4wWmkCmyS3LayKZ1s9wkgJk2rDXKoMgDiy7gnaAuWbXy5kgyrXvSKBE9S7",
  "key21": "3zTb1TKPmayavk56FUBynt63Zk4pf64joWsvVp7sDyernWEDTPSmLWStg6rRxL17any99GCGrxXgEK4mJMb7DbNt",
  "key22": "4Z4snCLxru789YN6PavTeNTXesUPYMBZc66kXkofQBbkxiTE5t2hy9Puxo4y5bQNdY1dcfg7NkthAMHvtnEw3Eg2",
  "key23": "EWAnqSfaSbXjrad5U61A3up2ysEWd8Rv8qWsaWvnSDntR4THwWa7hNi1hrfQPTJGoWAXq7ZcpM4GN9pEjLA9q85",
  "key24": "5rUuCCWBwJuEznvKFFRYGzrdGPoVB4Noz3GGtsRs8qrVV4xE3nogE4xfN8bEvoR6oh9uhB7JrWVesSgLAahh6Y1U",
  "key25": "4eA7zFpAmDHUhPVvgnjyTZeLYNk2DGWg8hxfBk9NVpLhGPrm19miAUbt6rodZchUgn3ezo4tvPHiC4G5PWqFQ1Sa",
  "key26": "59bCiPdzKL2r5to2YFtNrjpzS1QFJGVS4o2dabK5KCPTHfocC3fYEGQ19nTWqwpFHE1f27YiLsfimJruvKhB5u2A"
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
