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
    "3xZiB6dpetPnB9LdHYthWfm2DBzmGt5YHEbCN1nCzdrvSeoP218fiCqyMHU9U5XDH1d6De1SojSikgKRYchA7fEo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4GqpXRCXqYEbSWVL678YrAyyjE53VKCUkEfNwAKj3rrvQwxJRbiLTdgEJQWi4VWQ7LQz3nMpDqD9375eYP5QH65w",
  "key1": "2b7LqzobJiYJVmPZNHh9YCoiPb8hQBCx4vky3EuXruX9iXig8Va7mAZeGixyiQ4J73a82E1FV5gWJPiYqZnjtH16",
  "key2": "5kCj7vUnqbxsYYdHqXr6BdvToekdmtPB7uvBf15iBjJRm2meAWRbjT6cu7us6BXorWFrABoYyCgPELWrSLBRyTCk",
  "key3": "3Tnd5PhS896bsqKM7KdStghnZfESz3RERPcojYigU9uFZYaiYdZjgAubbtF5vKPnwBP4fEAGujVfYBgPsMHm3DMs",
  "key4": "4PHTD7iLFj11z83F72BqKPUQiVM9nCWxVWHzDAdHDTGVyxmy5Y9yzVsrft3rjENnTrS3EEfQcmAQwZaJ5mH9E7kx",
  "key5": "43jbF3tbcWJVbEjfb91wF67renrDQsvd3bouQNsEDiXucLY39Gwapj6aKRo8VirS3LmFpyX4i6fX5vgh15AKEB5L",
  "key6": "2xr2FFmQTN6ySoYVL5RsZr8RR3t5m1KTFJNEmbnwdPw18hvZRtEhcHEy5Y7jBWujiMqrgxoDDVhMaKkrzm9m4PQn",
  "key7": "5LiDf2bWxk7WjJb4zFk8ibnPfDCFUuvic4zLDWsdi3pQgogpNCHTh1mtH1T8Dfa8vVHEWHwSxXx8rmaxswnEe3sj",
  "key8": "5oqJEr9hqGocGkfhBvZ9HTWititszfPyqVDWLKt9PLiu9p1vDzFWhQJgKNdQvrHwgUWs39vvmdnshQtPejdcpU2h",
  "key9": "3YHSZE59EoPiNvhodrdbbPdirhgXnT6rnZZZd4h25FwrvGZ76Nd7KQMAEQJRXy8jP2za1XyptEvW8SGXTtNH2LZQ",
  "key10": "3fCwuzTmCyJEozQzRtVKR6cN63F8dmxARxcDjjZvKKRyejnvnDHGxPsoW8zNjHdLvDttst4YQtEAprL9nNXz5H7k",
  "key11": "4YVGfu5wwdAuY6SuAe6A2Nigq4uf8iqHAqqyaLrMnGTCEQtpgW8q5qrTzpyhChm1H3iugecVmJghKgr3cfuerpRd",
  "key12": "5dcosSeQESXycBZVDdWYVLREDYsaj16p4gYgyGw3TQJSHJM1d4ctm4CQbgRRX1yv1zhQTgbkrQ3TXyi4JyWKwMGY",
  "key13": "5Fi7iw8Kum9Kdke8s5WR1zffFBMjbAjKqSCmhT6S9ZV9cw31joQwLnXaay5MKND4fvzhErjh7ZMPiQQR2npDnR3S",
  "key14": "3UQoLQYULd4QPXuwsxg1KRm12LKUDudV11U5MwRtDPt5xQbewYU8mxV3hFH7r8KPx658vuaBVgWJw6uE9dq76oic",
  "key15": "3uy6gGjL9tzkV9eksDSXn16abKaCHrjaZFkrWAmTjgtdN9HDvJtWjjfD1p1JErcAQ9ZwDTsy9Yapt1kua4WGrqy3",
  "key16": "2R4Q54kreHLhDftR7UGNoWqPGs5SNBw5bnCgPSRrrYZQqyKPnEVkQfpgLbMzfZZ2jcX8dYKarzJF5YTvXZed6MNU",
  "key17": "5BQZh5FUe3MH3iBr1kYuMWTGszfqo5kzNDYughMgK5H2ipkMv9R1JazmymgCxWc29R1NJ72ZzW4zHkHkAi4LjiNz",
  "key18": "6uoJhC1LSTcy9fxAr5GkjPvTEUAoKoXk59oeDuPyJUB4sdfZZ5s4mGopbQBmMBXVwLmG2oid7QNC4NyZUfgLosB",
  "key19": "48qkG7HXjYKAgKxwLyHJ4oXRMz7Ho95YJqg4dcRaupMW7eVfBdazU4iFDEMsCXe9UwGMJqLegAKq3pqTN4fkYw7W",
  "key20": "43HRTcAopgRDKFE9y5CNCP5WqZQ4jsuDdSNFJN3TSMN3xEfbVWbSodafrTAeFWyhTyh3x7A8SoaWdHtg2Em72VtM",
  "key21": "cnHwgtrKVHoqFnkPDpjPzR1nopfAnS1hqHoPfrnQGz8VT9dZ1ZSYKCsqxARjaHSUcDq5TxxjZQ8dogtw39WK28g",
  "key22": "3w5xTWANQGWSoLz78JqFGjv3tnguS522JTXnVENh2mmqaLG8ChjeMgTr8K2vuxHFZbLBKWeGCnx9dAkahhspTisz",
  "key23": "4FE8gEaCfrqJFHnB9qeDzKjoVLiKg9ZbCCWZkp1myJ4iAJZ8fFQBqepFFRTsLmsjkhxCuWoiwUYfCTkHSoRcNT9U",
  "key24": "3D1BXbfDnMwkVB8CxKS97tSGDzamYK3R2VR5PrWTuk82PQ6AdNciGVQQFXdLW1CNgjkMSpBqRwUU5hjr9uVtuQfF",
  "key25": "3upCUVGs8GLUeJJF6rESvDzHdHLFUCcaxvEnTNpgPpaLRp7YUMjHq2sPw9UftUePfP9MZAXDby3DcXGTyQEPuwqT",
  "key26": "4DfhKEKw6Qcf8EWzqjR93jVADefX3SHC5Ee4wSjixAkwnNGVyrCb77PDXBbPCo4TdbJ1z1aTWBnJURHjJjbkutw8",
  "key27": "5wpm5ZQNTEyzobDaB3XqEzGs9WJ887cbFaWC4S6YQNSZmoFxUPUDwQJhYvWGuxJaMx7pp4fhXjeCoCnLf3goxrvv",
  "key28": "41PiREbQfTzRADwJDWQWCbF2BzDG6XL7NrPixk7T4PisLfnuyNgaCMDB4koRksdLPzc8639GspisCMPkfAkdo98",
  "key29": "31MGztYXhfTQXMW5gFcopZUvmv8CSxVyFTkMCSWKYiArUbUHis3eRV1yTJsGbk6jYgeSv8Tvin8k3ugXqX1MXzgX",
  "key30": "2RkH359u5rHav6j2cquvZZgNzdZahET8jucM7LUq87VwVGiBmLBfgga6EDPQqsSZXf3AGnJTCKjD4nvxQ7WkHNzc",
  "key31": "4LV9PRmjjGBdo19F2JwUeaDKmzWYyKhapZ1PhvJUt4R63PpgfBWhYPcSCyXeMg9joYZYVK6ivPbUK7GhVnQa1eWp",
  "key32": "4mFKsZD8oU3ccc95p3n4ChrZBvtMczzqQmkv8YLUT4gwGJSepdnvdSczHChftiaDwKANLm7vYcEtNaMxTA4qyRrs"
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
