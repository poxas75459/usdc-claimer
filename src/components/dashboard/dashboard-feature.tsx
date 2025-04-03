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
    "38Ey3cU9ez8ZyxQAvRJr1d3QYiWCxpK3zX7JR3khyTNwfxhgYpcJn72AHDJki8Rgt89BtBabw9jvTjnaReHuCmw7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5jGefCbHG4DLBCRyipnJdvqXYf4BivuqS9hw4Zccd6FFc2MDJccHcYfrwpB9gUMDZAm8wQQc96a6UVXuERYkDZB6",
  "key1": "4xgT27XPXGaE1dcudQN62z96SGFNB8VuSNwJ6iyijEU3u5FNsiunDDnxA2ijekU3LUwR2TgsanNsNw9PS4V8vgyQ",
  "key2": "3jmkWS3Lg2EiGemAf6x3haSTqzqYrRfuM6vAF2viYuMBfMH1esoj1b8apP6rMJthyxYsZznCDcEWEaEGqZwH4ZVJ",
  "key3": "iTivUVJ9UJyKoDzqghosvum5pn1a8vk4m5bcBJ84er7wLQrjpvgsynQW6SwxTUAEEVELfr13pnS6XceoqQCEkBv",
  "key4": "3HyXqzZALo6aHARDZtHaBDmpJT1zTrPafWKnA1EXriN6cpZE1vR6qMVkWwLa2wZHzppDxHUSZ4yqXTCJHHE4fR9g",
  "key5": "xWtK5NJkvvNTZ76ChT7R7VeKszEVfQA6GP7C6xBwRWCDEwDsVqHoiek2AnpALT11K7s9ZD1tWj6eqNU4MLLSREV",
  "key6": "5AdLt3Rnsj2Z2khgY4P7nNGfHKPUNpU8CCPaJVYKchh5duoahcu8Fvg7Ek3poo3q11QzjPZDh2LXn1adpKVXVZXo",
  "key7": "4cvizMYVzDdH5BGKPjfyYUkimQmBHTN8cmAuiBVHnMRL787MMQw8Vccoe29thqXyrzBeS4pTw6pyhL6r8nNf8qDU",
  "key8": "2ik3gHpjkcomGzLKQk1UanozbDGVQDixYMq4F13GdaHtwVXAWp9S2y9oh13rJUmCf5udt5pcR4zoSPLLBocaXffb",
  "key9": "oDuD3te3ht5bRx8fRDiS5aBB2q6WCaWiXiJdUSHJ5JuPCkw6bZ7REEyTt5RaMxKPXDBwRSAr7izkSyFuRF14Hmd",
  "key10": "3gsxkb615r66NHiWPP7CW4Hj6TvUjk2EfXYdV4d5W9oepHSu3gHBHqUuaooj4A3r9WB14hQRHjMERjstUv51F8h",
  "key11": "4bhwfKcSUAS67PEqioJzfpigUdp9ti31WqKhXDAUY5GqQp8NWDQ3Uq1dEXP28sHYwudJn6rCjTBVTFJnzyyVw2Sh",
  "key12": "38PRZeyXvTbeNA7NS3iJmRcwKgohFqcP3W8EPJat4iPqVhjz4Fs1oiULQVpaYJ4t8A3Zn9ud3cKbFox2NayfK1Rz",
  "key13": "3XaVAWAcdKvPSXTM6x9vryuGeXi1dzDYgPqB6PfvGcBaCRFomN7Pcg5VrjJhJrXDobFDN4cYLJXA6Xy2zc4rBGum",
  "key14": "56aHkKodJosTAnDzQVgpkwV3VZ1EnMAif7bmm3uA8sgiTQEqu6aFf1sYdrcJifMzB9Qe3gMYwZW5oQoSkBcqHZh6",
  "key15": "4ZB14tLBFVdGvMd4uMuWSMKQQPwE3QLLBvJip4MsKiuD9xhcXewGMn7p86JWsCkvG9tQ9XsrapMoScFUA4a4C5DT",
  "key16": "2PcvjXDULitcMCKVAh4cBfxeE65epFPEKZGBk7qYGhKUm9V2NtMmUXri8QAnUzxyQRZtvSWn4CHXscrFZvPxubqw",
  "key17": "38wZLfcTwFzwiwPpNpXxjXfsu89JD35mzeudjEXCCzTgCCd1bWFATGnpqKKNmj6JWbaeQwK3ksQ7FfULA36cmy5J",
  "key18": "3XV1TqmAFozMKXbWnCq2m7w6J4ZYq9GnvpHKv9wvQe9A3yss8tnbxjBXTchq8XuhaeGXWCQs1emFRDtEjGv5Fws",
  "key19": "2uESRALKDCNCspXfSTX6yn7F9jtuU6chWhjmhYB4o56D3AxEQnd5VVGGobeWMASkbBMkZZsR1YruNMrYX8Qa7V3J",
  "key20": "2wmJbwVL6j2t7j5NTWEj1prfNkhFyh34tKiTiz58nMAcBVtzx7yGgMfztbChqm3PgxyBY2dyw87pAQNfsX7jYG7B",
  "key21": "5qwuXZVzogdSQPB2hZmJtvwahrEbKBcWRDAhLnySWMQsXihqm7FMHCcPMWewBpu7K6E5XXe9CqfkAxMBgHjY1Hof",
  "key22": "3YrQNH9D3HLJxPSFjf5wcARtek9TVBc26vsKfKMr71RQGgYEz6XzBDEi3cZTG6LupHo4c7DTE4ezeXrMUWCX2U9F",
  "key23": "BXFmaH3qWaErgWN4wVUZ1QKKGpS7r6XCKJ8v4PqvhB6RLha4hhFupmh11Q2tiKDQdvXJLmsai94D5btNxXjuDi8",
  "key24": "3uU2tDYtXfPvBkdhQVJ1noVX7Pnyji9upvmaakFjw14vTotvD5kNoEeLikL9V3kCn9a15F8d3GUpF95bacP7yTr9",
  "key25": "3iArBJjsujJYXRt7x87CKXbPtgsTEiMQzDSEfz6JaPVgAYxrs1H74PwNtmcuLmfetG693a4m566WkaYR3E5kKGxS",
  "key26": "4UfDPdSjhz8Lo1eVR7a5EjHfhwhrsgdhY47WMMc7bqs9hPajvgxZ1q39eTK2sbcBRSats8sAwWzKdbyVsnGeCequ",
  "key27": "3B2NQSyqLNQgc5k1L8bdqa7PQJ2u92CPyLXy1vaNjCYffxhKfYWXowEnDW3YybfkKLPi33HAtqkLBDafjyRxZQ3d",
  "key28": "5LBwAw8LoN8fvuVwqLtFgT1zni9XppQyDeD4JwtU2bjMQV5XTmxsjr14twyYN89vJDRT2E8m5tzQK2nb3w4qThj3",
  "key29": "4twyQLh35iYmcVXRsmDVz9UT1hAXt3D6WbEw6mJJDaurqAqys5RtXHLJXfhR3tgHG6xoZdR6KHLDUvGmTxhLWtLU",
  "key30": "4PatFE2yWNjwhxM1NoNzJwTcfvRZ7GUQfXGax4DfD6New77uXuqqkVTysnWKYEYDqNVwyC9Ks4rHN4kYrgpkzVqx",
  "key31": "1259NiydC8AFfKL4v3ArW9Mi4cWXbJTsrMwfGXWv4SPjFcg25ERSJd1ULySwgmZhphe9tfU3EEnDse8JVewTwrBd",
  "key32": "2Hr9LJMf4y6AGKzxgyzbAfxBNaEZddugZfZnW5jXGsVcSz54Ztt67hW5S8XqRK9rX4jWALSfGy2jCspzP8yJwgfo",
  "key33": "4Wo32fezHxqtS3wwTYGtW6f6icTY1gGAMThXiym6vDAbUQtJ43Y6HXVEdcEVz2iZvCcPB5R7Zz3TsssaJVRytWmv",
  "key34": "3RA2B5vWq69xVcuQkZqFpQqpY3WxxEeP3RnmPGjQj7JNiGHs3jgRTHiJKGAsTepN1d8eBUkzGWEdHZEKn6oiyyYw",
  "key35": "3gJJ6mNyg3m3u7B8dbhGJmSpBXA3SmtdbiSgicskDP6hFxLEzTbew7349jfkGHDGoQsC9ctyFCTyKWMABKia1YTe"
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
