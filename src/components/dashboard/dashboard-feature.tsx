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
    "5xxztURaANFPohmXcqJEtWPwW77jrD96Voa18Fh5fdZkWV1d64SVLLcrURWkBarrdaBxtQCxbBAiDzVhonNMrdU1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47dhm9k3YGj61VGX7pNB5vvRbX3GLspk6Bf4ULQVXSL3nMEYzT8pkz32es7uvcXDqCc7j9TAdrFJG3sRKK6eiQqD",
  "key1": "4KuJvNzSrsCwLnEVu9qt2eUKf1gCcBHZckfEdwn8NAw78LQRnu7Azzn5wWSeYcf4bYQznGWnA9neLY34ph1fSDwm",
  "key2": "58LoqjJi11dqscUfKh8goFjLtWHtLFE6afnXFaLsQUjdNyUZW5G33r7yTAYm4yDrV1xww8gQfhtwcnfXh12kpMxE",
  "key3": "4zHyCrc58PxqPMuGUsaqsoAbexHVyJjMnd81NwMTd3LXShN34PiEs2erQamchaZE2UyzFA3czociGckWuRZn4U1",
  "key4": "4mi2RH5TdCRXhJVepjqvKV9eiVkPKFMpYQFvbDajE95pJKX1rH13dT4YZki8MLXn8MF1pxxckZuPK1xorXfmHVHg",
  "key5": "4AEqJT41p3Qt3JWMYiAwdq1CYNQV35yDVQZs7LTTgpirHX5g1gNvsQAmhUDKkSPGFZw3Ln5heT87U74KpL1PZZp8",
  "key6": "38TLcpQgtX9tz4AxC4wWgJM1kowcrSkJeCyD8nPQWFVPaXAox58zPEZoJEjxHTqHPb6CdLPrFG3d2h9ZCMCihuCf",
  "key7": "41ASXo4ZGmf2fUoqPYHU3ax2du65vDxgDMSy6vXmw8R6xV2zUDvdqxKUTyaLg3R1yk3P45SRTLMqM6ejVMgbykRw",
  "key8": "2cH1v8TEiLR4zYhCmP3FDX6df6Tuk5T27Knt6k7HZXKKPhUDpNQNiyJb16AbRrKQxZbDatsxeU5Ddz9ivsKRaKEf",
  "key9": "4npB8u8vkgNx1TcHBooKQUK9pgccFrrjNzLwBqbc1g3FBopVVjXszWYvgt8ADLrqsMiqB8HLfK5sfmibZdmBurzL",
  "key10": "4inggbp1KYkSk7BDhpc6sU7rX3T9SSmcSSw7bh9phHkFCkbRPe64itZVXRGYLRxotimaxb3P2Mo5LY4gu9GpkFCZ",
  "key11": "LAW2R4pXs5pD2CStq3WPYijV6oeMCRRaYy5xVy2MpD2bwRdHd6zA8LNrq1RY38nPK6VfFvRh7DSdGnGmRzAbeyj",
  "key12": "5Wa824s4ttuU7isNpKfH5XjsAaA5ysXwiYRu3RUJQ5bhfgJwspSDo5WRwfyAyMwGFUjLHFU6342ACLeKrGT4vQBG",
  "key13": "3QnQfThSQxj1f5o118BVLbdTwWAo1s45fVmQRXxNChr2KHkR6eRqrw1mbGzGzMiPv2TH2vLQiPZKuG4ZViCEgy25",
  "key14": "51WszrQnvxivNCuq8WwZYpffkRwBLX4QxxSrZ6fbm8Qr7KNmEvMdAncq5SteK6geaWuER1aYdYY9EXL2iheq6yrT",
  "key15": "2pMZ1YFVkzzUaTExJBQeHo6ChiZ3UBMnxyUQxFUhULbWFUzqfMCxTHtLg5t997NFH6SeX9RrdVBXY9XczhwA1Dba",
  "key16": "3nwipuh2KgtkhDvgveUtyQBmDCtfvXYrHjNHNrfXRBnUyvprkU2tpG5HFji9qyZJntK8KkYkQiTEcujFbmnwZexC",
  "key17": "Ddh5gJMcAs6QuSemGZgK1mZ2ZQ7mU1LXb9sn5usXtmCat4ngu9e4nGhtkKs8KnVihWtBzFg9HFwD4qw7k6oihVB",
  "key18": "5hmogqe1nRhmQHcYpGNMcaw2nT1X7rzg3rbYyUaRXNutRzRqy1As8QrNQjdHoRvMXxRUAarGM7tD7S1tMo9sRugv",
  "key19": "3XRRHanf9eBJPx4vc5zP1nA4JmRhZYpewno4QF9hqxzwTT3L2jXZDNh4jXYrZqQuPHKaU6FgRRV4FjUweQuVPJji",
  "key20": "4eejBDbifuvgBVsggpBU6AyDqrHCSeL626CBpLDZdwXN76vm3n5x7zQm32vjLdu7k1tMrLRcpJRUdbPi3PwBsoMu",
  "key21": "FMJEeTigjsg8P3sLWwvvf1tGmo9e3roCWJv9Z9JV5WUpZh5M8FEFYc567eccvFA62awRjeQM1zYqySXgMan8Rom",
  "key22": "p1r8LFEQBPpv9xLXr8zikar31PJaAAht8NMTZFy95oUKjzRGEE6GbtzZKbacfHGWUHjpMdJHHeyPiHAnJXJjQUz",
  "key23": "4SzR7JeuwGhDpn2M6PoZA8uL23ECm1p853gNCbgKxe2niXutT6jU2JosYxj2pY9tXtw39tN7amPoovRewNoZWwUY",
  "key24": "51ve8YtC7acXpbsLjWetJtbK5R3CoHrRnNmCdnzMKUgTKZDyyBW7Lpg3qzdeSMsU7VLjjXAFeKiqgrf4yyeSNtrF",
  "key25": "4VQ3bZU75Ee9tLyDqRLRo69W4uwpaHwmgU5A7zU6hLjzHN3cjwZQo1oG1hmj1MGQbdq7VxsCPXX3muDpF8VrYUAZ",
  "key26": "4PwJkWcrU5UB6nKmbkxLonPMRMzY71m7ZapnvX5nV28WtC5KGV52eWqJe1e3ALTKzVRmBxGnkYWkujR3oRvJ2EEu",
  "key27": "4scZ1jVusQao1QF5UMUd4Z9aSRbSa8ScSC95gYyQg6kYgEAY8fEKF9QEpAaJSxoQEzmmLB2cSRkqSj9vLDmVV5Q9",
  "key28": "3HE7NrDbj4rVudhcYc3Ezy774scr29YLatmnYaYyaT21VcoabmahE87aB2YPpjrbvBhWcsFZCFE5jEmUXTWH5TAY",
  "key29": "3PkqdeZ1N9kRtdVFD7tkd6Lh7j1i2ogMmeRbmgSLEJ76ndr7cpaG3hdKbfSXzrEaUNipcWg9Ko2vXnecBWdYuKb1",
  "key30": "4MjZJraWbv3dxkdectFZzwcotLwD8LircMawD7SkudCDdxH6hWccYXjfJdjjU7GQkbqDesMiCctHFUE75csCXJCs",
  "key31": "5ZKtTR1qrqRUgH9qwev8GR1TgBkcopKGbnydejqghJfBbuXCYA27xzi5ATEXktgxRJaxX9BXs2dF6bezYqf1rKbY",
  "key32": "2UevEzT9pwaUZqQ3KvSNodLzNq4fd9zP4FQUEsgBaKA5A4u3ZPH4uGyZCG1M3nebiDjCbkbGRxK4U3mrxxxR5PjM",
  "key33": "5HLRAM7WRKZnjU7cBjxzDYfGWeeyhjMT2yP3dxaqYhTtz9KCME41irkThbsND8yM38Eoa4qXmf9VtvaJACycNQqq",
  "key34": "5oKqctcUPXrRZDTqEg3LJUwCYqDFBiqzKEh5x35Zo3VV5ArjY4ffmDV13ehwFHezCtghWwJzPCxFnRi5XastZHdS",
  "key35": "4cWnKuobeyaJvqfcred3FE2RQx3NYKQRFdSEarNUTw6JVEXELcPvXEGA8tWNLrz4YeVfnQBb88nV4UD1TuEsjsUa",
  "key36": "44jVRo1kNNRWsUUfQFM1VdLFipe6tAJMSCrHDwxSGv3H44gUgiCwpvAapWLNCQSsRCpzkN3uTsKn7XNdZB28529R",
  "key37": "T8dcsxC7ESj2u8zGgz9dLdhNS2Zys7Mgke4SjR52fwSZxie2jQxqpJJ6FmQpotFdS7zDikCsUqVdWJpRGVLgY3q",
  "key38": "5EYjmSjdfVbXcPsbB6XEeq9AQ5pVWKANzUwW8kiEvC7MDiMS9qts6ZCGbGJZLJUw7HoWtpKixdYDhjpcVYa6TSXS",
  "key39": "2N8Z7WuRjscqVvQUzLtAnCyT4A6cvBz16sAQwzrdWNLX74GCpYbAvBqNsqTVZqcYhSaiS4q4yZNYUPBMvChQBDw5",
  "key40": "42TPAJJp9NmqrDA9MjWjGYGRyfp5quhpdX8f68E6x3u8TYVghy1F7UNjj1CKVZa5YKLS7Ees3Ugr9FMm1tfBivhF",
  "key41": "2R3hHSf27vWQDHGDx3y6BKioSuZpvtHkJ8eLkJjPSinrJVRnuocryR28g2kSfaPexUqrf8XU6yNcMJKLuNfe3r6f"
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
