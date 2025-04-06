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
    "4LFmJ3gzw4TYXH9qoNEpWqQtFXtV5pg1VrRnk2x1ysBafnAJMhu71c5azHPKdsme6fc19RMPcZv9yCrgaANcwKZ3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65eCqTEKTVwcR95ZJ8175BCqxGLQAi8ZbRUMuJRBn7iWZWK5syYVsniUwqdDyRWEGiQKD6NovTWNUF7uY3sbrfnn",
  "key1": "3hdLVkUy4yXF45DoeQnK8EFmXLaqR7nyuq64nCgsegcRRNfKyMDCjPwsio1myscfrESC5eEPELFQySPRoy6vPUMY",
  "key2": "5R4pfaTmAC7AtoMYMrg9xo9TCAZFRe7ebYF4iqhSYi3d7Boh6MX6Qu2bcGJjkkAbw6KpppxwjwKABBaWYg54facZ",
  "key3": "4fwpA5sH3tf8cyoW9F3hLinV4SMZyTNnurp6VYVcjFp2oZhpwUpWm3Ss5zcjRVvHX9KnUwQTwnER6R3uDe5Q4ogH",
  "key4": "5WFgWBofKDE2GJdjGu955obsSk6959RbBLucXRo9GVuThxkejFCCaaYnsFfxYLiuvGz4nngVx7XAWz7xRvsgNB9",
  "key5": "5eB3UoRP1pBPAeFpPiGiJa8CPJxZC3Ynz3ugPEYhD85hYkbSgKKhw85PwzV7B2htNZw6wfVNWpKK7xpuMvioBoW5",
  "key6": "65Cofxpatdh518UmGfvqaVyd8uUmW5wzkSFQFYLDVFYgfELxbF88pESomsFHgm6MRDFgCQRLDgcAxM4SspyN9qQy",
  "key7": "5w9LzZJJHBHbEHndJ9jixvnvC5E5GFFn7HCJbM7EehKDYyTqqktcSbEAnHmyMMDbNLNX431zSfD2n4KX7ETMfxp5",
  "key8": "FDDV9jbqeguB1stdLehJEA2GLFQXwop2REHthMtDYHNhbZf2LimHR5kRhgXJCZrhGQjUyRZmcNB3ixJ8K7NkuwP",
  "key9": "ZpfiRvubNJtYU5GMdKNozwotnfxXf5Tmy6cph4UUi63zHpFETiUFg9md2ykTv45UzX72gVeV8XUHXqGrT6NCkSD",
  "key10": "3kjijw1eNQBKbVqxznPpC6AsLMZwegZJLHmtdqmbdL3Njtm1jbFAzFFQmcbMPxJntEcyNJThicHFagdSUXQayswZ",
  "key11": "4ojRwoCwaXNyJhxMkuVqj23rCb62cHCQFD342so8gLGcVgx2ci8T9JS4uwYQdjsa4ieXnbEC3mXyWiRuw4Gk2wwf",
  "key12": "3L6SyYUFy7hZDw1NkyFk7udJoGyzmpHoQKijA2Nio4oWYzVjbmfYoZoajETyd3jezakAupYkCnw68VwLrmhmet7V",
  "key13": "TuxspW56pkMDacTFhaVgW6oZczEytJLVv9aVmc6a8msxF3nk3CReyQnfBeLxnA8xDhUusHgi8mvWrEeiVgGEqhA",
  "key14": "5yddvvTiCi2ja7h6YUUpAZfEYVnoh4sw2F65zoNE3macHhM5bqgcwxUKhhdF6X9GFLL1mC7qguqUmaHquFoCciwf",
  "key15": "61mFKfMhLkb96oNtJ1dak2AzorRcoEX2GnjwFSZPtj5kVhbFoHR3Qvx87qkHE5qKk5zdf2RZKHuN9NEEHbLWv2ig",
  "key16": "MQYgRU73PS9pwDp1mtzyF5bUgixrG8MysraeHZ9zJtyRaSdPvnzCEE6fzRdo9Y27aKKLSAUKyndi4ZYn3oPMw8r",
  "key17": "BVYEwLoVBnej2kgQGkyQB6xiAFWWGxGas9bjr3nnghX4y7vQYbdZFpJfz8CDwqAPqMy6PhcT4TZLw4DrRSJLMQD",
  "key18": "46NTQdbuBGGpj9BEf8mLnaXDgoftV6nXGStBA2Nw9W9u2GH6QRVQ3i4mtRER8iUFGvUyUWLC5RSgBSQbLGNx67mY",
  "key19": "3NvBDrXReQ5aAzERFEaij946GxQ5zZGFERN6bRV64BDLjAdDVUqmJRBDuFTETASQUM2gh2sAnZcFnm3nZBUo3Wi3",
  "key20": "2NCmkfCCtsN2qc9php4tUPmUjCQUJFJyRH8gBcyWCFQsXYDBXPpY3w9hnBCtt3SppfdkaYh2NFtKrouAC2ju7hnU",
  "key21": "2qnBTA1pECgaEb1v4a3AoqKk2ugJWMRyWjo2EPLZmpRfiQNcszpdCGKXfoPwBQdMsscuCo5Sct5QR9aagC4V3Ew1",
  "key22": "WNznz3fLDVnAQAWHarugmY4S1bz46vwZzpPNU22dhQGY4kfDsUytpn3sskpowjWvQ6gF3XyDgtzNYAGYEdhRygL",
  "key23": "4bKgKQ5dVxMmnjqT8Ma9Q4Q3RXUacy7nZBoeSHRfYJRNhVHjGmjJeKks749pSYCztBcPPNKxEJPMhfx7GYYL7vGF",
  "key24": "59wNjDRovavKTR6qcmsMnr6zvkrC6BriHLP465DGdJyLhn29goMgEegVXCnafP7HBK6nTE4whRdCQeEeUs4fXbYa",
  "key25": "VLW8dFMTZjWwSgBSrSg8rjS8D22e174ywszRPm1ezwYpC6mW3XUHudTF2MiMFK7mYQNfJrkssfdRFdjc7Umh1vi",
  "key26": "VbTFnTvgMpUuGjQaCZ1rq5AkBfb7vAj3mBYQfmPTBt7M3GgPaK5iXX9mqTMtmWr4qGrXbwSzHZbF3Z6SY7qpwii",
  "key27": "5DrG4kgUnGsiusg4aQRk2dcS6RtK4LRc6nSfpUoYAaFUEiPduPcKnN5PT9VgG2kNJmRxNoj3omNx7xzn6ToLwWQB",
  "key28": "2aXZw4S8nn7WygH5VGBs5B1PCT5XNKu3eogVXEv9yeZc2S1aCm5FPhrF7tXitVF2CNWNHKkmiURFopthHrQ5wP41",
  "key29": "5nCrtQGjbUVTwVo3SanpcJ4DgthBy9PcVuMsnHqyfnzD3CR5aSMHEXdiNg21HtMicYwiHV5jCE14WXEKmT7GMtpx",
  "key30": "2GEmVfbKDFVvzNnwczr4RW2KZ3V1wUGbvKZm84sDeLbTKmJ4odw3XnHP5qRsbFBqgMoBX23xQNJ2cdXG3KbA7p3m",
  "key31": "5GgGSbi3PukezNdcowX1xvqKFoUB3RRCMPVAXyUQF815K7tf96NX3istFt5t3N7mnnW6uzwqgK7xoDaVm5cTATuR",
  "key32": "3wfmzQAuhHPDPsTpC1Wg6HV8ZT4kSeajsxnUBAu384swA9Drf1AXqixFQPnJCJweaPuXEHxqoRKTNH3C1jJ5B5KL",
  "key33": "dtvHGFSmXG2zXx93iGpMw4GrRdZNijY5AFNFKaD9W4sUh8NdabxseNjX7XtirnRWZUp5byCDyiZ3vJrg8KPrFuP",
  "key34": "2GJCMzdoHFsVGAHwukaRTmGyTcDuXiBVD5qRq1V2HBx64vWSyGjagZfKAazDVwpzWhaExJ95LrwX93jEU1UCdkCC",
  "key35": "3XBXPYvDZGq14n2ti9V2fHd3H74Tew2Z14pWmL8QGpXiqRfJpPLVh7i89XKfGWSZ5Wa4P5CcyuFDj5sxF5xN3ouy",
  "key36": "4ZprwSz2xvjoEsWPnFbTerWtn3GArFby21ykNhvCQwxmKs99Up37S1n5sVkTCMjHi8emfxEWJEDSMKmav1SwunSs",
  "key37": "4tcVBA3wyYGxswUuXFhZBxypekUeuj9xW5bspba49wN95ZMo8wZY9LPxiEdYJTRHwWUSNGRFDXZmicd24JEevWLM",
  "key38": "3j7jiUYo3UkvBJ1bSnE39i5JvZHduVTnnqbt1GjQ8Eysr9HT4V6jB5SuAbHH8ZSFknsC2LYo7n6D8XNhpu6u2Fht",
  "key39": "PGdGDFjxU3zH1fLPkrsgTt9NQsAsb5HmNVaqdYfYEy9XcC6QZajStimuerKvLKWmuQvJFLtpg8jV2cMYFzE5HRR",
  "key40": "mQ2hTa1kUJuQ3DqS4VUbGzvbimCXigHcWanAM11yTC4SYgWfvQtXqKM1mRnPiWnHUdyKdAFSE6DPQvoAPG1GyqD",
  "key41": "zWuDbp363N3s8Y7L4XjRPcXWjczpzFBEFzM6cs7cfKR5pdgAZrkDKCXSZHRdxdTEMCLw8XoV6hbUqRH6aqBGq4q",
  "key42": "Hoeh6uAusSMsGTqsKg917NRALP2dEWGdWh6kNWJf2ve93q1iqnxZYjNinhnpgjHX2Kcc7qBLk1vdKhsLJwoX7ub",
  "key43": "3NLsUVWA9TbyajyndJ1dCX1cn8qHHEWEHrkDXHVWAKLnXVdaXqUYXoMFvJYw9iGVub5PznmiKEWY8WPcAix6SrAP",
  "key44": "5nGnvYG1sjdCEEwsZ6yaUJHeWGhE2YUfMV5UoSEEStcsyCbtXtGAfDqN9EEiXkNPamR7EqTASK4HSSLYDTbfnQnT",
  "key45": "5fBM6waiz2ZijRHSiGWiQ5bGDBFhvCqSFkny2vptK5wK75SWoG7YMCotd8NMtdwBhi8rVgzyZmP1g5nQKkbLTHLf",
  "key46": "4uQKQZaQ4TKX9Bxo3jfoDfE5E6m2ZyN4bti8TNtjKnWT5cMhYa2kiRmz7cZeSRG5iuQeXghMSJoEckJzbjGTs5bV"
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
