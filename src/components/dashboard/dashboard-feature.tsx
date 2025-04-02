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
    "4hqFfytqvQ46bd89J5UBX4ZUx1QyXCvRsZDhYkeoPoQCwHLHh39o7saY3v8F8qKMeeDfyPGwcFxib1Ge6t13Tc51"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3YGC3XuyBKjapQVCzp9JPQsKHjFJRLqUwSACC9m4VniUZ1rJXEYizRomCXtTpjxndD2SJSFLdPiJJBAJf7vSMUnW",
  "key1": "5nAf3hn6CLq5hWkxLj11csMqi7p2ngBrTZcqPwzXyCuVw42wisvtFUjFxwXHgUumGpb9miCbwJvfZwYn84BPy1kc",
  "key2": "3WYoQtpvBKCcgBvBxXTcVCnQjNAnga89FCmFPRjfRotYsqDKT5MjnxC2BWApajR6CH6TBhF9R66kuaygeZnX6NV6",
  "key3": "38omLL5d5askWjvAJy6Ugk6ThakbR2bkhrHGZNgnBFSggdQ25pBVUkKBo4uo9TyjpgwcAZcgFYumnWMzTNbc7Bqo",
  "key4": "9vZ4BCnUiL61tpjkSaCxWATdKzNonzkKLxxsWLP9E6fkTVeabjF22PsfShtfFd8hAoZwUSBUtraJ5uV6sYLTvBB",
  "key5": "28BvtLVDru6JfBgSj6WZWuW2tnxzmRYk3FhBB4ZTZJdSmzoDiMPJyxksm2Cr4oJVyAkk82PVz2qfthLLEGLC6fdL",
  "key6": "4ecvA9oZhRXrCP9QUw5gyrVTCHiqV59YwDKEd5mPPKaNsuknqyStsRNbWwd2Z2LgRjJXRD8P7UNJKsuxcdh6cscz",
  "key7": "5rZAT8fX7UhFF2EbZ6knQcRQCxdZv6owc1Gx15kBKow8mQ1cZmCgBXpjBYBfTjprfAmo3iRPN4hq4CQ4gFdjrA6n",
  "key8": "nh9Whbfy6B3qSrc4KStGcZX266YHAWQgNAaNZgqQUEpx6s3u1QtEoHcZWxjTvyouwru49FEPDXpENpDiXZDCLJv",
  "key9": "3fJwkGKWZDLPc74zWqgyEKm4Y22e7AXJ4KMqqUxJMBZHxLDHrrBpf31GVbuDo1UtUg5KjaC8JMbDbJf5Ue78Qd3k",
  "key10": "62VSaThqfcnTZ9r9iLhjQM1dBw2AEz3btiNdNe8SZJBzsHvXV9SEYiTBfHbKhyjD8sjiq5ug6fCfjxx4Dp5wFFU2",
  "key11": "4oPKczVicYDuJGFK5pshgecT5jaubgFjqMHcCrWb2H7TyYJaKUQNSKfkufMbVqZ6JYXQN4XkFW11E9oBY95MDXAC",
  "key12": "2MTZiYm8AKPr3UxP7Z174AkVyLvr4q6xq3vnNWTDbcuan4B1fzNQfGVb8URodkqeMjsRQcsVAMkAeLz7QsPZQt3c",
  "key13": "33HH25jvSmbRrGacMcLJNcEqJm5A6wTjf1uPjK792CmmvkCLKt4N29v95XmUdjgRKNfxXaZau5LZ7uuDGQxqKoZU",
  "key14": "4kQHLVbJ7zuDqU9YgRgLomu8eTseitzM2kriAw7Q3BMfYMxMtKxfDWfcwBFSiUkmKoDZpRADSUUZU5MQ4JmWyaHN",
  "key15": "4CSb71HW5NRdgKAESLrwQVGUsrvjiyLarDV4jAchtcXX3CZa2eu3smX2x8PRNayBCiATwEFrNi31i9rMxKZGWjfH",
  "key16": "p3fYPNWnXgWUnoqidqTkpXBtZpjFvaehGrJePd5PtD67VgNieLBHCXg55ngm27QoQDbXXgxPX11DTMjsBTEDZsF",
  "key17": "4yvJbuyz2CzhiKXL1emZi1by4Qw3qwNjGqRz7HyxzBbyQZMSxcwEHLU4eF581Cs3UQ5CNgwFPhMABfhQcCUN8HL7",
  "key18": "5kGmuvEEQz4VVi4aYTYwWjyD3gKTr69tRpFJG7WXy18HHJkeJVHC4MP1d1gE8nYW5uu5CmFWXUngZVeKCK8gipmJ",
  "key19": "47ikpQe9c13Qo9fBd5mfddTWYGVP69Y5oTjdrpKY3PD3L3QNQJ7CUjnYqE8nXxBZubsMRUN5y3egfpaXYjdB8ukV",
  "key20": "36L5fZ5g4GU7s3BKYwAroArBtt5CiFoXEGPoDvWWs8oLcWXiMU5xdZq6WGGXfcnocTA6JxkBi238apeAg7vjMiC1",
  "key21": "1yuHjSxcXKCxMYb6Bn9Fp8LEULcv8h1675Vx4KfcstxFZqg446Hqs7YeTzC6MBvuiPjTxygfVDbqr1PSnxtxPDP",
  "key22": "4XBw1RLEbu1E2wh6KsykgLzAoQjUcZqgESYFNjRLnnRJibmfVKXzLBLiqjT87JjgkrPb6p9JH771T9W9pwdn8vPi",
  "key23": "5v3gRVCo5bJMPft7PrRXsPp4kzQMorWKpMxKNiuTXjP3SxrqBZkf7kexMHeWyjKdamRmBqJjr5hS6vanZrwqT1jr",
  "key24": "5y5oGJQUuKnyAtVcJYcFoPYFR44hehiatajfrY2APePbKTZ6Fd6RYHWpqFMpeRRFyw1ZwHjwceTDNrSaXHoGe2QA",
  "key25": "zxrUSVLZqFUX1j9AjC85yE8kfsXppgVop8AbRPerKv7fMVLamjcpSogEHyyEA4oFhCBj9CuCchwz9BNcJ1qaBAu",
  "key26": "3wFa3zLa88TVxNHdgQpAfRikrS2AYmvHnQpvWdUEh1snAgHVWccDsoLkf2Jn2Cf8vkcAmxhsMSB9KLGN9b8om26D",
  "key27": "i389j481TJ2wtyQrMNAX2vMNV5Mo3rRZq31fmjYkhTB4VtKXQsQNchwDu8pL8CzCqHsE4xKA5HwrxLb1BvriRWa",
  "key28": "3ErbMohZK4zZZLug7oPpSSjrMPnytmasFetbmoeuUcW4SLZwoH9cAxZ6hxnDeViZMKQuX8grG3CtsqZ3V5dDAEaN",
  "key29": "29UY9RA8nUjjVuwzecSrfRbgo7CfycP6PFSH9xch1NpcPxPvjA1vwgExCLafYbXnxGDXdLtMEBZ9kkadSMpo7PUi",
  "key30": "36KbJ6oiRfAiZ9zdp9CF4uedWNcxs5ZcfbtJgUFALZjbEKuZah63EEquWhkQhKKB2hbK6JNVxNpcZkADgoaXoB2m",
  "key31": "4JB4gUtRfbczR5ZxahVGb4KYne3gq4ZCWa5KBVCuB9mf81K1XJ1tD4XrpsJCMy8R2mrjZFJzDoHQM447Nxn3Wf8H",
  "key32": "5Sda7Bm58SNr1AJ4iYggWmZsXr7i8rnHT8NECfWeRNC2LvyWzxrSGyvhVLYUPiuhxhNfBVQqurrpLo8Yt5g5qERv",
  "key33": "3jpo4yeF1uabjPGKYs2v314EX3UZhuNCanMWpQJt57GrbFjybffxyDGGN3rFvbyhmhr3mN5XLcqoz8b7aNRF9DdW",
  "key34": "2uYRvyquUiVCaPNCGeuqszUFmzqjpuYdbTfiupDmjm3wyWWqJzUMkU9Txi9cd8zVfzFU2LEbc89jh7bAs5PJAhfz",
  "key35": "T9rhxgzEWEEhWtC23mLRFWFBM7PzTgMGE7VX8CWgdy4bMQLEaHwpf5tAKqFFivwHkBeFAovaMBbZQcZY9F5VEzJ",
  "key36": "5noXwWBDfmiJ8XmbTjePgj9ZVCq2RtWsnCrBVea6yYiQFABitED7Uf1xRNqfCCYoeGGWEKoJfBmnEmLPhzqSGzds",
  "key37": "3DFQDdTLxnRAkCqunZDoCgTeA3PQyhbXrH2p4pZhffZbfZY6FznBWWhubACeneZTBCKGxatmedNvUet7j8iJzBxj",
  "key38": "3UaX998c6dmz536VEA7GDfmAiM6q2WrUYmkSSoLEYCrh4E6zsfTK2TMRmJPpEbAThWGESxFfZDbeYhFZhRZKfdnq",
  "key39": "4NmytmLXTgkb8QxvgEpJSX4QGLUWcoxqXwYLcRwM9ZbGY7wEEyLmQLofdqSNDW4NxFVyCPbUp9xLfy6Fv2F4oVeu"
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
