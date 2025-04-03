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
    "3gh6EDKeCBjXBoSXxZo44YoA6fARLhnEazS9Kygr7Wmcg42bSv9oZJgKgQNFfV9EZ191kz6ZssvwqJWoUYB7b8fU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Xr4XPX5Jg7yxH9rBtBwzgKV3ufiLbx7HSZ49RKKHhtdmivtB5fYzK4vXqxGAEoRgasN8BzxdvJNqaGQVzFhuDo",
  "key1": "4mbQanjDr2KyJK7tyVtzAvymx1nptce7Xh9nS9FwuZnguje4Apw1eeE1mRC5Nou2UNyhtTBsatMFM1hXh7hwjKuQ",
  "key2": "48HZPnEYaGMXfZssyFNi4jWL58uur9cJRVnMpCNmDVZasFxAgBXKevELPn6V1S9wGf48UzS3xBGjF1tAf568ogC9",
  "key3": "3LCDCvvTt6GMTYj13mjYAR7qUM5NxzxcKcEi1nbG1PZUz588ocpbaMeysEzmjd5jxKYqKKkYb5N2FUZfD5mMgywg",
  "key4": "2b67BGDR4aB5qjfDRSHUM6u6tiALiUskEAEbvwtuhUxRRo56u3zwxC8U4m7nK9YizxGtMZ6vRgBxRTfqyCTcWZKh",
  "key5": "66En4CPyFQ8xQuiu8MhvnDfV6Qggufjxsap8czgooz5pow5RCRczMHwTZCcYdPxvNoYTHzTs31QTczgwGwsjSGW5",
  "key6": "3pRjztJdmTBpSm8Vq8iTWPjBGeoQZgXYtN5AarN7h5hVhQePe24xS7mJrNHDZU9tCijLqY4aAq9d8fFwhuY1VJzJ",
  "key7": "3uEaeixMRXzAJCSJefFETh5j3hcKBegeoffXWvGzG9mk48phYu1fCHNzogbD3CKvEfxi8vazwp72kdyoB5Jj5C39",
  "key8": "35huc5Pqrp2fDMAtZoGV8ribFnFSjqfZqLiZgUrLPgL1LEg6m3PWtq2YBpXZdwp6m5XCGWPD7hiTNsnioTefhuWE",
  "key9": "56oBeZvVsVemPYBGpEc2EGiHMb2j1XaJjhEpTbAv9UTCdg5489pX2YNkDtHpDHvk7tzEVukA7QfgQnETkQFhXfKA",
  "key10": "KPfh5y2zq8owJhS2Zaspv26hDuLG3ap94wUR8GbGhJxJXBjVDTvc1RTjC5JfxE6G3GJ3oKrRxq4vVrJ3BcYZH74",
  "key11": "3iF3pBQ57HHaHiJv1BwTEa9riTeoyS9YjJkYNEnNRzszzofP8HHyuFEYBXhFHgj1LPyrLu6ksfMY7Z3z6JPXP9bG",
  "key12": "5YxBqsWQkpZTEkbTFn23ZajvhXPofJBKKct64Zs5Ud7tLES9dHke2N7b4TiG9y1NsH4HbXwbDrqaP1zdt9E4FXyb",
  "key13": "5h199GoJr6J5TvFUTZCVVatbTNiJKbT5S5P76nmnLsxYSqFbWMtPVP1fBv51mT8Bsk8Y5H3zm3cxerNXSEEBar4a",
  "key14": "2j4UFm3rQfJvRdZ39vwrqjUM6v1vUr9oWSBWoyHHMKHhGo831Zr5JQS68vZT14PQTpZhJVB2iMWd6e9UhDGF7Rbg",
  "key15": "4VcfBzin3i4di6rGY6MnFfc3xTAUasfs8u6ctrNLqmoM6AXticfsdQyvuFZM2bnNTSTBWaRNVvhpLDYE1Bqj59Gu",
  "key16": "T7hm6RsLjviCWiieEdFhgs9qXyXUd37tLMF7njVYvGGyPBPwJyR32NaBKCaY31TdWiAmE9s8hMmr2GW8LFc6Rpz",
  "key17": "2uBtTW1sLo6EbZbiah2oDZvEXNhpf4FvZUv6nvgTSoFJtEE2mFuhRqqkMcTfeMjikRxDyYSVhNQVqRgkjQwv36Uy",
  "key18": "3FaBHrErbgjxYhHK1WbWUXMKDnKs9CP9sgcmTrB5ZyqFigpJuBYfooVP4wjCYS5ofDDKKt1zu7zsMpf7j3BZ29us",
  "key19": "49JAC7QxgmYV79A64cPpvseNhGVneEdy2X6QUdmkQajxk83BctEF4eL7XSH4pnXaiEK8obbpkrvzo6wDy9vueZ8",
  "key20": "3p7q8ZN1wFDp6Ee3Ci4SCY7wExYEBDyVPQFFzGobYRjXxd5Q5aeJqBoUnBhSKhDqo2CuB1HzMewtooC1hAPNnNpr",
  "key21": "4h5vxAKYt9FHqq4BhZ8pVY3uH8QRE57jfKojF3FroETkJtKv5B3yqTAVHkDFskaxpJHVt7m2FdJpxNYbjiC6CkPz",
  "key22": "2AkR3oFyncrAH7bBUfDPuGgzuLqiUcxs9M6zfKWhwHhw8DcgVxwUucVrVepNrYnLa8ECMitC9gppcWpKJgvGgMqi",
  "key23": "53PDP76PeUobvaYALLraeNRHnAQWakjEYZWFYr3wAWSn4LFSfD8kZjtpcAK5ZdWHLfqTS8BUdx9FWf2dN4YNku1a",
  "key24": "5eUxHUgnUGV1h6yPuK6oJfWPZUQ3xDMEduuqcMuAivL1cFEWr4QRirV4Gn2UrCmGYsHbqnYv2cM9s13xm26sA6u1",
  "key25": "52Drck69KieRntAkLUNrJDtAX3S65gbUnuu8M9mDFw53RbohGyFNdKLogyycGPmW51sDoKshEi4fPTt8HTXCrUP1",
  "key26": "4BbJeSspGoBVUVmB55TjxEcfaaabPNm8mCiXx5YZ5iZxToFy1T24F9NPsitufvc5XtiVHu99utPP26zvReeouG5s",
  "key27": "2xEJzHkRwmiJsy9tKVfXvCZ1Lxx7FEvZVdmb5WA2SWiRYKSf16Kv5LBG5n6aZrZzrCipfHr8JEWQYyiqVTcYYCg4",
  "key28": "jkxZ3waXsVeRuAQSKJLhFEZfv8w9q984VoHAGEJ9XtRBggdd1CkeKNSPorRXWCPkvZQ8fV72Nzx8E7Qj7LKeMyn",
  "key29": "Y1PPDbeyBBvi6RCRqxA5g7jL4iMLrq2md4Js7YL4NoA6Syi6A3m62daCJUrMW8x5w8iBnDk3HHXYKY6UCgJCzLY",
  "key30": "41PpSPDvrTJCg3MYNSmp3TPUXzCiwTSE3W5S6gzdp1JqqH7z2VMNUWEz8Q8ARf37oywTFZgvcHeXdoFj4V1eeUVE",
  "key31": "5hvo5pVDbQ8y5KVad1zApDeod5PuHb6H1AwKJQ87RaxLMJEGu9dYW2Q6fsm3uNA2GeYy6Vne6zu7zPHoPBs9SJvi",
  "key32": "4fv3HHJJvtTcS6sJ6gEgQ3nSsxizmqat4TTxySy6yuDDXeBcW8QLLkb11jm4wnGYrKub8YLimb4B5b3Xe5oHqwxt",
  "key33": "56DB87Pkc2B1mSXHnFfLECDSdFkDWEFYQT3EXhh8BapNizyBEfsY3RPrsHZJEDJRmDVf4VmAFyvRDdAS3SYsxBuB"
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
