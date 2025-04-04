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
    "5quUCBhrdcWES5mG4hVgqbNj5f5M422smKzjkWXMki9eGYxGQCQdGKDZCmamLUhJMYfdHhdSaMHbj1BFxKAkzMJh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4M8QnB4VFx5HyGmUxuBJEvj7RTSUkz22oizENcbQwEJZTnJAtgv3ivJYP5v5bYM1zbguXkmq6NL1rjYfB82B4pZC",
  "key1": "4NqGCYU4zAD4ZWUDaukjTjgqw9iU7TQEs1vGZQxwap3CRX7VfKikqPn5NjdegkUYx7b7NX26qUspUe3Kf9MpY5ci",
  "key2": "57YGTFJsgL7ycoKXCi1S9Q3YdusxdHowc2DHyaR4k3i61iTtjpee6Mr2bWX5Vs4nrUvgnkChGwj1eeDAcve3jPeB",
  "key3": "4rj2nEttNykLykZtmawAha8n3JJASP9VMrjekeZqj2q7PftyGfcpQFim6DFJbPkLk6ojuZsaD9b4izmCsPG5CSpC",
  "key4": "3wiSbMJkQyskjsqqx4kaVkdPNe2L2v9SNwPcwTmSqkGHmGTp2p65Nd5J7DmGTrtLw82qMzohawmR9hWzzeRdRrUa",
  "key5": "4p74644HXgrnZ24ZEiofniU2Mdf8x7PUt7mqenSJN31HdRfFbsL4txiMQa1NiJiVU1ccyLZ1nm1LXVBEZhZAz4hp",
  "key6": "44iFgfyMpmZgsWvApiskLGi8sgFHDncz7sw5pCQCEoQ4LjethQVakH1R3dFixk4GH5Reo7wALbyaG2pkkHzGdGMW",
  "key7": "3N2reYpMxgeKPmdPFdYaTjJ566mcQ1Yq9FskU7qDjBeAdxgpDT2G5CcX5QkenAr2txnwc7HECiPMFjPBfkphdysz",
  "key8": "3AwmVSCPwG6gTaQeBSBU4aKy3pSRYAWEXLzfZ8vmTKGfoyLo83qhqzMnyDNdzHz2uZzUnqTMVcbKRqhvRuBXH98e",
  "key9": "2gRdzfZxuwz66MZt4JV9U4karXFetXEhcNt5BgNKAahGYscyVnjiA81WaSjoeHPAYsVdBykXJo7D3ve8FYHeDgZ5",
  "key10": "QfDEwgcy85q1TVHJCAynzdg4aRQPQnTjdC2iPEcEcT4b3ELGw3s6fxjWt2oYCNTUBo2pHUdBkmiazMsbFeyUpQc",
  "key11": "4jNFn2u52X8a7xfho46LcKAriVnE3L1sh2tuBtf3fqzAZ27otn6Q1sLwe9fPdHDcprNu254LVXKHkA33KRPrZ4RN",
  "key12": "24LyXZvo1ayWfrj5KVR5sPaYzu3CGiYeAEMDNpmaLD2y79eYPSwFUJVTo1C3mECqyc4YTX7FfH27ZdhP6ty1dnfv",
  "key13": "2Ss4ZkcPcpzK1yRFoUQei3S9eWMQ56gaCLBF8qgeSSTEddUwPHukYyBgi96LvQrXydcHVT4XLBuH5pU1z88Y4hyD",
  "key14": "4xaiGA6jXSee91TSg8NRPYzi8LwFBFFmVWQUT9thdpmK9T5sYvZuGUySf9ZSZRixK9cHJwBF48HKZVohqwDVoJWH",
  "key15": "dHC78skiu4gnFP74PKLimJgGCdW8JwKHFpqyQPvGGrRM7dYTKaceEu3A4Nze6LTx5BAXVYKsTMLV2H8dszBZHWV",
  "key16": "4m5KhvJejwrV5cNGcLkkshRBH84EWST2XwViCGi2udGYBRzGE1cT8DhJMztXP6EKCAXSzD3xoy7JPaPN42uvCren",
  "key17": "3J3S7GmqDV9XCREksGeMnpyjLM9Y6X13PrG8oqkgtc17WJxZ7azzf8N1UGUHcrCcYvBNgsFLHuKfvwzWMm783LEQ",
  "key18": "2aB23nEccsVhq2kjE89QUyr5gLQwy1QfH3yozyomtjF9XGinG7yJQ6FWvDnpcDfAKN6o8fmHcKe8nyNoTH2a7k64",
  "key19": "DqLLMRx7ZZjGCnF6ZCtSs2917yezyQTJsFQdUAPULoYK2HjfYnXQYohSg3jiQ8xJVunnxme6AoBnLd1KNQtA62a",
  "key20": "8RrTqGtXPfS7RjTghw2ZkADzfpMgybj6sFk2Z5uJsJz6U8FeKUDU9pRZkYs338K7sPeHW2s7N2GNcK8wW4BqazR",
  "key21": "63EfjnbwyP2cJhK1gfnh18Q4KWXWL7v37yVRBQJzr97XqqwaaxfjnigoJiJhryQ6kc4YcSQsxvmcbZh74DWUdP72",
  "key22": "46gfLYAUZQN1AG8Dn9JFx3veWjftth4f4oBuzTKi5dLBxSQCHA3dwZEdeesa81Ainby15gNomM3B5qgXtZH6qNCM",
  "key23": "3BsuccdoyqaA2Gq89CrV6VQHwGGMC1wwXnJ9r8V4ZnjNRyHgNPzPntBohYTuKFtRmeYE8BRFhT7ow6KtsJ4azpsu",
  "key24": "tzvGYMXM3S7YjGJGtRNPtNt3uVmNhMNZNvjG9XratBXxTZXqq4UK63UVVhkg5XeWWzc3YusMiX4fjZMRud9jNy1",
  "key25": "2wjyuXx7iaA7USz4hqgiYMPkSW2sKDRQHtMTqJWoYnUDWRnMmyYuwPM7rG75Cn3RfSAx5YFfSe6fL7L5V1jMRLtj",
  "key26": "5DNqpXN8mTEamXersaz8YF7df7TutTfX2A8TpRXpHdkVhH3PMB8jzxonQum4wRrbyZCLCPTYZW3oJ4bqo5SUdcC",
  "key27": "4TBSk6wqWETLw4pSACoDgothVDAiicR8UL5WrYAbHxxUs2N9eN3tH9JUiCGcF2raKXG9DZtaC7NfmAps9nnzQSPa",
  "key28": "5fQvDU6Fgp9NRpaJjYorfG6kiMX5oyjTJn6D8UR6Xaqe75M21Go3CRegz8vriydSr9DgpshmSkf4i7t66uwLjMET",
  "key29": "2R2sqTyczvBvyWW59qcVd1WwX1W6V7tBCMgLhqvF62nuYp5dJd6Gs8LdfY3gJ4KtsAoWQZpYowTn6A29ceSJx2Mc",
  "key30": "3LecpxvfNS5ftCftQEKipoWeqzxnQyJwmLt8mgsH8rG3uWVxo4iJE2q3auqe2M1j7i7a9zQ9yFK9KYkJAn3ieH42",
  "key31": "65aHSWYFeEQAKKgFRdMjcMNXDD2kELvsSTY3h5pzTaArwi4kut5NuNPpKQekjTVK8g2drvwSCTnQq3hyxGYMZteM",
  "key32": "4GTTZbANAPW4HF1upDuubMsL83zKX1jycvKiALEAWbweGhMkvwcz4ZfZW59MAu3sAMXFb35ftG1Yd5sQcNBJBLmc",
  "key33": "2gPcmc7bmE5Gzxp9sJoSB2AUfKTJXp1ircrkjeCfdJ8wvFQfySCbrKGSFmCSH6TmNfNtqfdJ5cxyCmD9VFRygEwm",
  "key34": "2pdj2cK8HWU7QrCPLofXsSHVgJzbWdFGkiwufQ8xMM9ty2NaHGvF3oTCEHjAieYPNmGmBDtGUuzucx3ZSc42t29G",
  "key35": "3SpGa4VbNEpvAJTkf9ssz9kddjfSnufufstm6fek44FYy5omujxGRrk411Nsh4GLtzAPDuDUojLdhKzDg53Wa84s",
  "key36": "5ucABgG2NSRf5QMS8kmnyWJ9Uq3hSD1V2MHg36aPFYBHxwUtmmWvbPJNs69gaxomsQUkMX4MVdGVP1JXFksVKv9",
  "key37": "42BME7GjgRQjMTJaU4o9wGqdQgiB1CKkq2tfRY2qrAspz2cuGwwoif9LjycMdyZhYKn6nNVbi4JuzyXuKeQ4Jc6z"
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
