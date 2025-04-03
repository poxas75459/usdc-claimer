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
    "tNAAbZ8JUSF9thZmNHwPMYFDYH79CqfK487KdQiKbMWQKf4ppMFZy5QntNoW4By5nLwGeuX1LXr3KMP1YUxi3nr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CpUzqyzHdXTjojLsj95LsijjUsH3UApYjS57TW9ojLWRfHvJefY4B964bPU6e6ZcLns7b4kL6YvxAmSzxkEXZSE",
  "key1": "4PtHTR4fwJ92CUrbNyQ9K5pkqJkYTu5Zc2UVquGzDcEXoBJxkqFNdQcPm164wb2pB745RHkzvN7XZsR4j7xj63kY",
  "key2": "3sS9jAj6hbmD4tiAHBqSdNkQZpD4RFfVAcYYv6WhE1fNs5DkgUDdNzAvaUM8AjWFTfLpnkLZen15oL61jMWCFziN",
  "key3": "5tK4UQjCRjiNfSdX2CnK1kWUv6a3rYcsEXv582jJMb8GLamop4HezBHAT2bywJ27So1D2uUGdzFV3yncQyu29eyd",
  "key4": "neAYNLka8Ek8TT8gdoKaMSJAJK83abaZkuu89gjtS6tsjGfF9LtSXkbJ2Fd7mwM8qfKsUka7zTvufx3zDFi1sGh",
  "key5": "3Yxx3jbsNK6KWuKpPRBFecWkhhjcsoF2hAfT1w5WnZDsiW4UmWE18dJgewHC3SGdZfLLxhKogGQ1spbf7V2p8Eoz",
  "key6": "614EJFCiyxXmkFMd5q2AXeCbF2ZWzSQoLCrK5KJTsuw4Ws9jzjXqc6AqY9x3VRBNPGFakJ5CP1So8WhqXZXxtPwH",
  "key7": "2zqtkyGFseods95r2JR6eP4yVshFmvaetdPvvnzepvxJeJEhy4iih8qgeD3g7sxfiSFbm995ug4EkgfJiYqPhEzh",
  "key8": "62HsPrPuwbxe3GQPhAxA3w7uww9FNCerx9ZaDnrtLa8VmiqRpBRTv6dW88D6qeMvYAv4kqNC5fcdNUypYDP3SLQm",
  "key9": "WT1Vgn4vGMfDU7upUdHjKX7Vr8S1SxpDpqTGi6cFBxT5Jnu9sujScMPAuqXGsNjWoXhKGYvuNqm6R5nLtFFAuuP",
  "key10": "2521zWHuqrMwa7ywhxpq1K6fQGnhn8eHRm5QvBtatgLzQTVCVnXKKpvLNdaS396w9YiaaaRxFoCANEPSSBgZesS4",
  "key11": "4yb1iznCVANXDqk3yww6v9xvdjL5gEprn7ZpMq6GZwZk9vEHQbiiNYqAWHbz5AEbpnEAfbWaL9vXMzCvrta8oHA2",
  "key12": "3MQtheqKPuJAg5RJByXWKoJktUrEAtmzjfcyanXB5H2R4x6bY9FGovQNpsT7oxS28Vx5KBnNbhHzeWw6AALyGpFr",
  "key13": "55N4UGusBgP2HAHJQmdnTduvriu1zYAPge4sh9aCHhSn4BrSFKF3nAEvPMsrVc9u2DUJdqcyRvoSHrrTe6gsyDVJ",
  "key14": "4BAeXScewAC6SYQjCZ8yDXuB2EUQhmAVvhVf7XHNzSpvkc1DyBJK2uLQTvpjBmm9WP2NUTyT51XzFDR3uCC8n3aa",
  "key15": "2fNttkJRmu6SXMExv6yY8wcaTQxdXEQArShBJHbBVEj1gXkGNRxUhPqSaNRS7TxdLUGPFP7tbpBzQcHMzZCjHg42",
  "key16": "42PUm1oUNypAz5bA1RmSi6jZo4z4xpWzRbsQV6FMdYBkrgxJJQYXXwqEBJppz1ie8MHWH1kFuBUybAC5dJZ4UwZG",
  "key17": "5nJgGTJ4sJhsXjV5TNe11civmGiZbi6kH4QWknTNuu2yXHRtkkhqeXZnwJdzUHdFNuTD4jpiR7ydvyXpuZmw9jC9",
  "key18": "37YHjvNG337V4CdZynYfvWsgzdy9wwDgLgZUCRAqk29GYE4ESzgeHgM3WGDEdYxh3QTEmbMcSTGfx2CXiRvuAwpi",
  "key19": "5gWAwczV1R4aCfqAGAemCDwjhm1Uyx2on5ijGk8uHPfUWFem5z5XgFcih1VkGM9XYhceMdvHa8PboqhjhzNYFUgS",
  "key20": "4K8C23tBnYrPDVKgGDQEkoPNMvc3WNtfd3jhgyEbE11UHPeFeALPBzL8Sk3vwGdBWWCXC9g31SgugcYdcsWzfxkC",
  "key21": "FLRRugDidu56j35k5YxaECsads8uiNh5WCehBEHovJv8emnRYp6851JCk4uBVucFXokYLtYxhnakjyhxjckPsWS",
  "key22": "35F4MESghPmr5EV4HBFUMLxzCTMQEXxEZDPPEyzQqr4xSk2QMPCBBDCJ2FMwDT4YXAbnj6j2j5V3szvrMzbRwz1m",
  "key23": "5Q6xbLsttk6up1mK39hy7h8hmtychci5m36QtvS9B1sR33bDXQntkADwy4hZjQnBReenfAhds8gyBJDfQRLDEBuq",
  "key24": "4nPQTJGNr33hwCfqcV3gmTRAqpVCX6AoRQkhU9k9N1gMRCVEZhR3btn7VLL9zaxWNUsWuTWmutQCBWvHZrGhs9je",
  "key25": "4aNNgDScNX3qT312M7axPk6BkA4428mFHbsf2RoYZGXMHeES8ooCny5Qd1KBee1kCPUvKgjXCdhg2wzHiNzCGhYJ",
  "key26": "3DkosXZTz3D36hFtL6j3n3FerU9jSSKJfobELvopNnx8QuYKvr77XRTUFaDPDtUGUHNiBC98mdvbnw8RbXdwpSuc",
  "key27": "AtzREX46dpdYpQdPCQbdV9KVK5bAW2DmUUP2kHUgvnuu47Poi1gHXVZrr9MjqJk5Z3sShAH39CGFzLRLrFoe3Bp",
  "key28": "4KJWsBZmdKpKGJ524pWHXwTDMnGJxgtEKRz2mFbHoDTgpdmtp2HSZCfonqiuaBErUUoYigYbcmqppW2WkP4UDyTM",
  "key29": "K5jgMqCSG1MNAt8KD4nC9unUyGhomWFJxinYnTMpGyhCLH6QSLyqUzuPhF2P9jo3QjFDn87Dx8Cn9ATCZbZukFR",
  "key30": "KAgTpzx6kdPC8e724MjaEGY7gxCEGg7YLZ5sk94rGQRH3uq4TrQD4ic9Q8zBDtdDt2wNAQk9vthDGgSvUoPcsxV",
  "key31": "5Ae7XUUE3cPbieR7irCvpWdunTBCrvLAZdcKSvTUX5nTSpVx4pbMVn9gpiJYwhtfKPDpncQKo9D7uJYY93k9enH2",
  "key32": "2azsPrQq1uLsZNATMd8UWkv3amgEhLj5i3W7b2WCgSTVJStU4gXXpfYQyLtt1NjdScYq59eqD3gbZURR8CuJFYgv",
  "key33": "2PHqB1Mup7J7EcP1BL11qYqSUkgvjoS3k48V6v19pqYx4Da3nWa1eWUepccf61Jzk8Hr1ZeLajbLq2MxBCP8KybY",
  "key34": "5DwwMvLBPV7sQRaNdhGnsgUqmWVqT1sUpMGpqVGv9uJPYmc2Z5X6uAWnkZmTj73JqNWLvjM9iFYGxSd3GrnWXKGR",
  "key35": "4w8kVZJHPwicd2zkxfXYKHqFCrbr2eAYPh7VTuu5QzyUSXPw9kqqg7RRK8HWfVLYsjW72SWy7nBJLhBU695UwCeG",
  "key36": "2ePJKswpUZTLTRSkzkWGJos9emDJ9yYG51q6pLMsZt5TkRLFAi7hKUNPegowK37G6Pz3SnRnmTT8GJVrNwd4o8fS",
  "key37": "5tWPePJMsGbMxZGvH8y8ACK1mb2Q3mKMwsWB9x5Hr7rPoTCEGn24K8PqZrxBg6yEtyS3ypMAQBA5ZybNSEjkwoJR",
  "key38": "3hg2169Kvf3fVecsoW2Afh4y3aYmVhNKaLpfvJRWdsAza9V7deEbuAeqedchvEruAxDwuZujDuQ65F4qVLcYKoto",
  "key39": "5DKeJVNYbBtan6T1zJY25Vmg9N83L78doKixth3wSd8Y9EAtRFghThC35GaWMbAirvhf2aaBdR6cDPfVd4o5rfka"
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
