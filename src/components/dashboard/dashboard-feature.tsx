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
    "4Q4MpvSKwBggGexWhqmJ4QEEcz2N5xh1XBkYGqtJERVM6vBWHXxKFMmkjFpzzhuYLyUW6cKUUbpK6NHHTc3gySAs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4C56U8tBxipLnfCAk5GX1GpuUhqKHq34Ry8zqj1qe9DwpkxK6VFVvDQtcB4eTGrcyQr8ud4QpHgYvtEvz7o7deP4",
  "key1": "5FEXMqvh3oLdphGtqkZkUMMUj9gHY3u9TfXS66iHLqzqdaq6Q5f94pMHkTqG8oJWxC8RK8yMSPkVdie7wQ5JyVFT",
  "key2": "4CHfFQmcorjQ6Leobk8Ub3RKNJeaadafeEFKgDzyWzUqtrRjPbjvnK5yF21co2aHP6Ae8599F5wEycgEdjTTL8ko",
  "key3": "KprNRpJVfUJrwnF25vzy9DUxethLTXvBhKcnTp1pmJ9g85r2H3v4DP1GPr2F9XrkaeGBS1stfZFExwRG2Hyi4CM",
  "key4": "5AGhG9EzKFnr2TTRxTngAsiQv2qhi9v6QjhUVhBHMvKbHbVT6QVJmqnSxcHktAENvZYjcX1v94oVpCUeRVMEAFYt",
  "key5": "3qHersG9K4qZkcGKnYTRsYSL4HfhfnAZ4DUhcd51L9Uxwao72oqswpbNYtcPmk9SX46ofvAxT9dZyjtWQaAJJBUk",
  "key6": "5kXL4387aN16vco87PRgRGfRFpAXLNhNMZzPid1mLFMf1yCYQFeQPaV33RpLSag4JvusDc2BcjmooAtCrpH2H4zs",
  "key7": "3T1vwgv31mhQByiRgq5FcyP9TdCbhqFjCouhh2jgvgunSHXjMDoLqjgTKrqBgput6bGak6963uFZmkpRrDpMi7Yg",
  "key8": "qGi2Ku3L927iRd6kCM1Q1tcHP9nWs5aKUCQPfhUMAzcKzcZQn2Hh3RMc8PEwAQQHQ2owfqZ5U5nnqinYaE3PBeX",
  "key9": "35Puof9iM3wgZtzHR8qHEgVjscoZaZwuRtHLC19cB9ubW894WVHWhBM6nbQSxkpSKD8R9n5cMuC7XnpZ1hRvC9vA",
  "key10": "58aextitWVr8xfS9FCyFPMnHCua3oX5PmiPNfb6LqS33iRAFhDvW4jeyH4rcGg2uLUkye6pG69vBeCAR9mdrmWvW",
  "key11": "26XLfggUKKUs6gQUYReAPfHzHCCq3C6rZKZJHaCNWFmxoqymcAjT7YVPUN9JfZWyj6NwuDjbu3YNDNM6TNfwCVHR",
  "key12": "5oHw1k967QZKdfvst51mt6Uu8fTCSuiXDBUDHnBPjsEv7Y8jEXEwyoCUBTgDH6ZpFsSVMn4D5oHQn6MbNzPyuQeG",
  "key13": "jwXeSTKv2dAxKg49HVWESZWWBNUKPhiYsaxLt7F36oFpSeF3L7HJdVpbY5gSSGbRrYQHbBhZdfuastDubFSR78h",
  "key14": "2xbNuZCBxNrqHwp3Fvco8WZcgimkqy22Uazyox7fJC1BSkjTyu4N9ngLhhTPpKs8xRp4KonPhspTuVYu3gMZpeRG",
  "key15": "h5Y4cZhE33qfAsePJcgvP1CUoou3ywcc8i34TrC43RatqqhYeo1fM8zXUFKoitdxvmKPcWrHXjfidmXdJgzKahY",
  "key16": "4qDibwnaq9H4XU8GD8u57s3yK5LxjtMWJvEeALydNU93LeAHPq7cJtoo1sz2CvH1pB9CNgp8hEt1x6SyyEqAx598",
  "key17": "3V6MHsMXsk8JoFjPmKki8KzZ8mKW3rcmFghuR5j4AoMeNDnTz694L1jjkwe8EmHVv6TLKcLcQvxkZXrv7SCtrcPD",
  "key18": "5x8KfsmFK7GwVWNqvy3SWtYqpR5YDANjSCZVh7YTued33kFU7q1fbzasPhT2sSwUD7E1846hdzyu6V8RkrH8v4Qu",
  "key19": "5n9UhB61RiiKzk6pQhtuyDFiX3qYVy4AX8R1X6u4db5cWFKh7X8GKmN78TGyyZ9H8i8RPECMzZkEZ67sCrgsvmgm",
  "key20": "4JHHof9YcKHhLc4w1R7jVDmRHm3xjy7o3mvzhdotLp9BK8Cpe3NuXaZvkTSbUwgrfFD7fukTNdGTah49jZ5gmPbZ",
  "key21": "5XQaLNEJeP39SzgTbjByrngCY5Y2dGhm4sfwwEM3AZKnjgXmjPNWuaxW14VaPGmpUCB4PALcHDYkj9aC53zMj8XS",
  "key22": "66UChKhq6C1QJ7pLNAw9n1tJbqXKnJkyCcV6QbK5Ag3hQqY1WzQguLE8yiATEyfYWkjrN4V2QQ1jVQdgt38ZM82C",
  "key23": "6RxtZN9e3vpWJ71sCHr9p34NTfdVmeFDZYZqgVq7te7HZQTXPR5FypZf6ZeA7xHpJQcSM4HHVxpKwBFCJMMe73o",
  "key24": "XagtTNQfGCuRAyWfwQmAbNedc2z7K7PKi533eY2Kcnp7BnxkTthbiqu5ygUSfinwNmJaahffLweiMXZuDYyvt7h",
  "key25": "5xRMj8xX3Z9kYWeB8XQD2ceAjnxFVLcAX7Qc6tiTjd8d9ErQsFF8PtgWyN3jrTofUMCVAuuDi66dkjkoKLWhbmEo",
  "key26": "2z6Tg71cpchzDBwqD4KctZPKyczc1japWZTpFVQKGSkEXx5YdHyKa9BJsFwVNeTcm19r8pEDrSFr472WkgPmGti6"
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
