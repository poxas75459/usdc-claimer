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
    "3zdkLYQ2baHV29mqMEjCqDKLh1orJbTZRHXV9F32yXFzHLeoGCXCGDiXaFA9dy8wwnhiq9ZD8CMMeDeKF9ySGWw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3mn7MFXG9r6KL4E48UCnvhFNdFs2AvdASUT1QBAfZEdY5GZ3BFAXPvKfzr7iy3exM4xFvKPGgzwDNMo9jMbzgAwk",
  "key1": "3KpBVbSFWGKaB57qczhgYZSYgaWJnHSdFQHKdQFjYpQCZcgfN8wWefY1YQjeL6xPb9q7kYA2BgTw9a6VfkF37a8m",
  "key2": "4XrwitwKtTxEsYLeNkyKrzvpG58kvyse72PWe5PSFssYhoc1ytVcZx1bPownpaXfLq5TX3cWDKpb1LZrroa6Ym8y",
  "key3": "3gr1a2hYj5AUZftmgMm8nCEfJ3nE7r9oPQJxRRefxK1Ht79mKgtbzmxg2NKyR4XmZxuzAT7FYUycb8Yp2pvxaEnH",
  "key4": "2NMWzwPdVwDzP82h7fi55Lw3BTrMnPx6278ceFhYoLSza3JjC6MfAqNiCZU2V1ERdbrUbNTRKcLzubcTDFPu8qML",
  "key5": "52bY7HKLu1k8fe3rAWoc7TNqoowLUMLmN8MRe4t8dwZ3rg6L34WsWqkXWw38ABZ8PyfTwFEvZPwNidTEMQCxAKyM",
  "key6": "5E7xERNSzEjtqHPtb1CHY2F6rr1DVW58ni4ZacqgEUCJfXetwbpQc3UtVUeZ3Xj3biR9qLeRzgjaUdqYFjF9xEUn",
  "key7": "3jotjVixifjynRXdXExy2wVYtk5aFcJsTqHs5hi76KvTsXLZZmw4p5CyvyFbpw4L54DetQ6s86HrxEKmJNW8jSLR",
  "key8": "FCHsLsLGEYRhDtUYtfvazdy9yTi1WSkQZKqyog7DpZ8mYMEKmgdPjGSEdLmDQiJBGCgc9njyeTDsqRYJsCznJsP",
  "key9": "2AT7Ey2TAVezPkAruKy9X2rbchUv14t2FhjD3eeVRYvDUarNszuW4em4cWt1MxFzUiHktcpLQWCibGhJEJNEncRx",
  "key10": "2asBhHakdKkcCArb6xA1orjLaLjUvxU6BV8pxQ5nwRnSmTPo3yGkwY9FeGMpH67FFe1grKf9FoNG7xu8EMvMXrE2",
  "key11": "3ySvVYayLLojtg4LafBYhmVs7g8si7TnrcKPnL2dTj9HtnyS2EoT54wEJXkQCuXuhKJWJgzSNbTKNPTxzYLPXFHq",
  "key12": "5vtPUoTMT1jDcfEN7yxeqqzM9eSM2DjoLG7JHzKDEX4EHmNTYiCSYiNuE1jhs5Zw78uNUG55wnV3mcAKdeTgyGvo",
  "key13": "4xXZkjtvgMg7pYpNQyYAqEB3FdiLpEbrTZBA7UDerwZr1ckZW8ei9nBuGpeTEC1m5GwCYpqQq3QUPPWBQtFcJ3oq",
  "key14": "2JDSUhdcvYshME8tQ4sAp7XA9bHqyZvb8p2zQWBUjbpqFN3xv1qk24V31XSANe5wqWNeo4D7NBgAjGNZc3LkXfVq",
  "key15": "2F5dUeh5VG6KuHRm5DhyKRBU6gmVjcguwFHZADvmCgcTpzDhRZc1RBSudqbGJ3pPG7CM29ZJdWXUPow53Bz19vnz",
  "key16": "ULoyNjvWyrgNidjxdGQo9swGupXiuWvZQjQnbRa9XemyEUJBNiqb9AyqCAu2aT8MCRUDMxHsb8Y13aPaeoM6ErF",
  "key17": "4GymeAy2mKQ3N58qEZSg6v4Js1gM2G4khDkFbdWRzMoE3jT1rgrmGuQQkA2zvcs2BA4JAVGp66gEw8kVDvfaMBdR",
  "key18": "uakK9hiCGAHq7MBseSWNc4PbqCHmsgQ2m2WAdgJ4ZRW6cZZFNqpbraKLSz3zBpNVFJgWCnFmcSfw2665i1eSfu1",
  "key19": "4K4xwTQYFdp4XzwWm8sCYNe4QLL3qZeaRuggtxDV5ZUpJSUSsJhjJNzCgmi5HnuTWf5ED2YXWCJyvaJoPRFtsWpz",
  "key20": "9PWvubRirzpV8CsvC4ciVHtiyuxsRu5bTMxRUDkTYWrQjzcMoxiF6wBC8qchxvR1zsZFG1S2israHuVbHuVj6Wp",
  "key21": "ktzxWwMaFerhHgnYcCpJnD99QFUAfdFrLtoCC9HTvde3aeeUXeNi2ZJ9ZUjnEZgjKcocgeXQkEPXo9pQVb9HMvj",
  "key22": "55zta25mxSVK6ZHSXyHP7vgh5oRRn2XuD74SKKRz11iBxuCrorLzyui2K5Du1tQS5AuWGXC4rro736PMRw6xD7DJ",
  "key23": "5mLdGhcaVpPoFmhjUY5EU82CYeWGQiVm3iCXkxWuBYSSNzbxuHKvN1ZyXAr4mQRv67cfg4xTJwiqjrLcfWHFLymR",
  "key24": "3LxcxokjoY6rJkUaw4GD59pZRuKdhRvN2Wa9H9PVgLdScwd4h3EXXgPJ9kDVrBJQ3wf1KWqit5nHG7hseaK4sHsf",
  "key25": "4UhsZo8budSaBaHv8YmL1nZDcMgdPWU48ykSb5uYd1SfEjwAUX9cDSNzNVBUmHimGrn7EgtAj1JqrtMYYkx2DRQV",
  "key26": "5nBn5sLMDbTrWkvNvpffP64L6L4Ar731U8WaJxASLpXwnbf5gPzhBGVUTPkGtqghbrTW3m6ZTDgCtEbKZ6Zhcs79"
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
