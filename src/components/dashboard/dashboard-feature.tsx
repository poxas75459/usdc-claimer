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
    "2QGoACMXdtZCMwCiAYpV4o3qYWNScd5KmE9qRp8QRkHe87sUdeS1W6Rg6N1V1ar4d7LDujSJtkeMBoSAZ4q2UGUF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "u3fem57TC16xHjy437bimAS9eYutp13sA1ZJsfevddYYNw176LuKP62hPgUJ8nnnpswoAGY9coCiPYHsK748DW8",
  "key1": "3zc8TDiLVS3BdaAVhLPurDkbyCEUCRBbQPTeVSGXQxLkbQ9LvsyTsPgfhMEcTgJUptdSfAXURUHr8g6Dre9sfJvC",
  "key2": "3u6vqBbUjEzSxHUYBorik64VSG33ToRr7qCgNd9yAG18AXMgEKfP3fZvKkCVK5gSa8CqcNrvRRzZ2XhA4Xy8HUhP",
  "key3": "pqy6ffRSfX9qumhg2JHcpfWsYm6M4Ma3FL9R41yQaNxgcEbQDLeRj48pa5M3aj6bF1TsS7ond1cFad27UBqDa2T",
  "key4": "3vjgG2YrnFALsnxEuvXap6imtBuWpzhTYPmCyU1EdW3XachPRiKe4KLjjgdHTUX4mCDbgEGMb74YCTYFkWYaxvWS",
  "key5": "5sNhKrBvZhjWdJv7efAqWdYF7naKrLQAfHnDFfaUB6UJkR3xykm5ncEUhVsGgidCW7QKX4RCrxm8ahUSTtUW2JMg",
  "key6": "4SzZbzpKQxQpdcewAmbds2Zz7QFxh6yWi525Ysrdwi4VHxSdYNyY1DVx8qTtnBCwKvDci12fkchbbHHr51Emw7HK",
  "key7": "63KuHuVnZ9DYPGvi5TpYdZw5sidNk1Mj3XMbxvv9bzwSd1iR4gDAaxsmPL6e5Hvoxq7QFxmiA967ejpX2NxNCEK6",
  "key8": "5LcJozaGkMhCDHsHiKgQVe4cMjuszMrMeMCb3wv4W6tnAsukpPXYXJk4cNz8KzWfDyYHsampiCqr19urCQbQM4yc",
  "key9": "3qsHtHG63YtTddJVpGcGF6pc8AQwmxSE13WBi4RGdKLSkLbhAFsq1DnRNPcyF8obKQAAppBtMUwAYhVZWYZ7gMsm",
  "key10": "5nfjppw9NfAEmst1SkyZxS6rXazXvUPY4d2MmVzHfyFHPvmSnWCRdEoG7CDNWAPAhTxztgy8rhe9gesXngYVnLJW",
  "key11": "w6uWZA8mjZmjRF4Va9Sa23vcTJvghjd1bV5Pxow65LfUGM8XDR1yk2GCi7KnCuYxDp39z32cJR2eCVb8vNvqBdT",
  "key12": "2SAB73VA1wCuXtgjuXpjz6BssmaXUnze2DfLRY46GWtxgT26gP3yJkhYpY7urc7NkFJVSF2QjsrcvJdpA7xo7Pqb",
  "key13": "3UAyN1qRpaHEY7w5QLKp4bSDySVRQJGxpbW9kprzZWpnpiwKYH4hXgFP6gP927AiFz3aLFtfETUKfjBaY7btj4mf",
  "key14": "48P5TPfTBamiMoXVZ5fS9xs9F1zH9XvZsBiB6h4YwwZXsv9FkLmQvDRpKLCxqcbSGM7SuYYMZ7Sdu7susWEUAVqV",
  "key15": "5bPKZsDyMozT1GXjXhrGQmDaE4RcJVvfg3zYzTE5SnEg3MyXx1VjjjUGfVZhta4MCenFTrosta32PDpi9sRREv2j",
  "key16": "5xUZorJpnVT6kNcWdCKCZBsej3Y2kGC9sFmPrnKVd3cRcTkNBpHk71qaKU5aXQpdbpeHS7T6C9LowABAM9rArKed",
  "key17": "3BxHvPTSGXT2Qfr9XFHitoqDrfVEJD1JmqDKVJGQfe1j4Mq4qQQ1scjWMwZDF34tZUchSU7BSiuAQjGZhz2eRPNu",
  "key18": "27BM373zzCLrLq3FrTzyq5RzxXrBK5Maet8nk326chRA1oeUpJyHMqykGq9tKG44kCWhrRgybCbLjvi8AGjEpFJ1",
  "key19": "3z4Ta3b8uxXCzgXGbJ9KgnSSutHS8dnysJVgYd4TYzprPEkw7yHPPRQvvXZwsF8TWZ2khfSchP1YKpZKCgJrMo8o",
  "key20": "5hjp9V8BonjCo4C3F8gt3Qv6q8PVWokNwT6kCqiohQY6d3Vf5w9L7ZXHQGzEoiNeiyKpDyP76hXehg6ekRDzUTcm",
  "key21": "2CyjaJAPgN1FVQopg4JRA7BFyAYp7zzMeUrXqeY8TVfzHN8xjpRCHkSxTc8jn9xTjHeLmh4CJaZrxrnSjZ4QyqkE",
  "key22": "4EkXGeXXXxMa3SqSCguxXs4uKPxNJcDVtyhajjkTXEaU9x8xXYn6Fgbp4eQgnAejR1zZwBaQZw3KRuBUUksFgKCC",
  "key23": "2TLuRaTi9gZ3Wt2K6i4ayCmQvPBQUquAP11e9tBkoP2CjP2WnRrNQL9rz88ziRieeEYCkQujFBX6gYqu6i7ciX3S",
  "key24": "9KumKhVdg11F6S4Lk1FJxMwWJCZzgeE76ndYYdgzY23hqwawYTdP9vGNofjuAAWVk8eyoNpN6BQJJwVZ7LckUv8",
  "key25": "3W7WUtYKdsThhEsatJ6LWUXGC934gAh2WSb9fVXUMY7yMz1xxjf5Z7Us1JmPCKaaXYZRX36pJMysym7ZNubyxVae",
  "key26": "31xpwquc29YVQwuXKwVdz3qSgGmjHT2tjhyWAg3z6t2hobfFF2qaat2YchbbWYiLV7Wj1p72Lxq2vLzZauZsYdzX",
  "key27": "FZogRpV23JYXU9qkVT8Cn41YQzgQQGHo8rU44iugCCG5dkeJqvZCSWRy1tE7f48DBUty5iHBBKC6XDqFJSbUwGH",
  "key28": "5PgK2YUjrFhvKrUZAqnz9jnZeWi3r9Xb8puS7sVSsGBRY3SXKiKHG7UqeDPq1Yrf8LmmxnE5EJEBt8jwtvqa5mey",
  "key29": "GJGVmCPTPHQWfNynEpuz6aQQyt3Byb5vfJC1wkwsZ2Eyo63CE5Emvs65TLDhMDJzjcF9EdkwZoYPj4pX6vkM5DW",
  "key30": "57U2KtXhi7f7wxr1Xp8X5iDZujcWEno9iYwa8D6bT6MazsidYBzdTTRwA7AJK3z3CAJQkPwRRiYwJb9v9GLyNsv8",
  "key31": "wMsTBVVVuohztj6w34EDDJD8jVAEFheybSDLjbTmNngdzECVT5R6uXsyEPwg76mMwVMCH3bLTVSowKf61tYfwHn",
  "key32": "X9LkakyDsJ5LmJvH6R8FAaHycU6Wo5uXZwapy4b4ZZrMtzCVpfXmXVDEghPoKoQeExv1tjz396TSJAarketi2iS",
  "key33": "4951VGxMhEkEwV31fVmCTTMAzRQMPpPNJrQKmXtC4LbJTuV4Zw6BuQzJZUZT8abFjhjMp9ecmZSNNPXinHqEJWV7",
  "key34": "5r5fgUnutWeuTsDfdmERo3p2z8nwdFrz6VUcuQcvcB24Kv56msCVH8qyoMe8nzpvF5F5KrVdmdACrjjegmatzgnT",
  "key35": "2UdtzoosUgDsc5GbpB9HbvHgoZG9au5oTWgZJEs3jzy5hWADjBjyR5Yk9zyK6RavtEieCrmGNmT8JVC1asFVwLf2",
  "key36": "5oZjrQUpiLF6sknS4idZ2HMxyvFuR4TnLPvkEqwFWnMx4NaNxUXHuqBa9Gp5LRLD7XYfPHrqKK8MW4uWNJ8iUasM",
  "key37": "iNm4fMptQsZ76N3JKefd6hgDrAUXwaAD5ADoxYgKCwUgHPjaHKhY16YsSUQuh8RVnAqLPY1un5fox8EWrdVP7eW"
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
