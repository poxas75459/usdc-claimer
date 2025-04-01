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
    "63m4MGQYr39Yfc56tFWNWYpFRJRYF7tdf1dhdZKivJRuYsMtSF57wi9nmKH4Sr6Ht5ddtvucxAFNf7RYdYrGqHGC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3KiHmzyekAZyMabF9o83VKqzXyUBRwsGZBEzqDjSpjPZtcGzc3iVHXVz96q4vBktMapfdTaMryibo756JSbF199S",
  "key1": "3W8a1jvWg2u4yumx323y1jwAPiVEPxSGLJvPq31UTjMMMLVFDuuf97ftX59zx2DNx7LSon96RdjXhMRqZPMd1o6m",
  "key2": "4EbC3jovWigFPabuUncdmKYXBTNsDXM7Z8xwgghs2QSdfXUN8jY6vTKRJhhp2opsDnUtXvibgLwXJZpzPP9VpPvc",
  "key3": "3fFgLNXeuP4wRDJLPVeWDundyfubrdVUnMDjeHf8wcKgYMXkwj7avzA42F7wrQgRpBCD7wcfsQZLzkgjxinDekKg",
  "key4": "4M4LxUF7J8of1LD8bWjFrrTXU873RC8KNnvt4gMPMxqAzSH4qHYctzCP164T7PoVpjrPRe9VD8KKer8YN98F5YK2",
  "key5": "zS8JVkuQ9m3wxN3rbjGuKUoYTWYeX3ceu4G9UHGrTYwhQMporoE9PK3gdih95EZtDQNijMsmXdg4zZpmpQSGTpQ",
  "key6": "26svMsXvLjb72x9n3CiPjbeUqx5hnXc9n3bHcSaYknyQMdvZ4gAaBuq7f72YG11ci1EEKkP1dNTpWiks1Cifj7Gg",
  "key7": "UUfp6vZ841WhomSw4XPPrkhmikQSjmYQ72i6tg3pnC5WdJ9gix3XjCq53f8kr9tBPUu318u7rx5fUeBfKsZuFEr",
  "key8": "65tVPX2YCyWgJKnkJXrin2MVRgqXALRaaQQuZqn4PgaJi6frcADyspcwW7SNDQiv6ZxBXvhLg3htsaUyTotscqZ1",
  "key9": "4Uj4feeCCivpEkrT6wKHU4keeZYhN74PL6QhC7x3SAnLGCchF6UddpyqEgBBA9kz4wGS4YbqMLgDbtV4w6QUczB3",
  "key10": "3Dgo5qs1BC6iMAwT3BzkJ72GoC6wGDaBk6EwfkxRs6F8tFNWMc1YgSbgJGyAoJU5J7vaJCTt1H21Lm9fvDtU9Q93",
  "key11": "3fd4pozq58cexo7KciaZL9iCVrJs9d4vtZ5RFEy1UYP83UDESsSprDF5EuG9T9BwcoQeoYwZTJRZTwwPeVaiP93w",
  "key12": "G8mPg37ab4RHZp1V7u44ck9psyfsT1tDSDRm36EkhFQkmouLenUuYu42UEj98Bo2pgVDHpF45dpnFj9jc6cQcYd",
  "key13": "4e7Ec53TTA1bjQJLgdL18aMEwzScCXq3o1XDP73t1xyoy4ocYJN6aSnwye9jXuSm1JPmGfvuw5pEsdGgBrrZbMP4",
  "key14": "21VvNJNiLhBa2npXXQuLDK53wdgFLyY3MGLQWUwdS6JYJ5uSkg1ryak9G2TvjSXVEQAkYtR4i2q8jBm9FzykJaVb",
  "key15": "4WkX5nXCT959tdXNWx3PR2Vrky7kMiL4Z484DvKJaVzHGhJUWqUUi55MQkUHd6XEJ3zcqz8UKjWbeTg4HLUxGkdw",
  "key16": "2e59ChhUmNr3Sp3xji9DULFWEH12cTs6sS48qRgvjhAk87gX3ehWGVz9b3B2qJgrhrjEmmyihP8ae6PYbE6f6myS",
  "key17": "5ejnY8YyHf9tZjHaPjZFmhviMWEg9N2zj12Qhp9ACkSXWDDp7gQMRmfbEHjAyp7u6ek1f1X6LdkodYSqsZxYpGFY",
  "key18": "5FCYXoeJV8He7R9mM6poxTqE3uScm34f84vmaasPgkozmteDG6iNCHFfVh5doDAeMhwiMHcGEefsdbZpw5yJizW1",
  "key19": "3ChpLwF4bNwnmJuwPGgJDab4YwmncD5CYWJUbKvNPRoALHCWShbi1xSkHiGU6Yh9mzCMdqzXA61QYJGurowMoz8s",
  "key20": "6T2epGS6tvATgb5kp4dqQ9kwYNzWXFydw3ST7NVUsDyCo56DPk1qfDLjBn9D9Muv8rVx25HkeRejGwDmkV1HowY",
  "key21": "5n7GwnhNH9nQUqNCHHojSigrNrkkbYskkmkU22weP9VcSvqcTzzeKqTjcYLHHABW9iwW5fAB2sqo113YuVAvu1aL",
  "key22": "89PLqwSkzwiW8WHVk3uzocbi6CShMvPEFDAWWRscpNggfuaca17jLUtQPcc5aJnAaACC8MmcGaMDZfjpwjsqXTJ",
  "key23": "5UBFk5pgV6nj31rmeytbvzXpkarSNdUe6kSjyUfuQ5jwdjNA9VQHNhuyHzz3UfiiCESsezTo4tJ2anaSQeo9HQyw",
  "key24": "2AzTrDEKR2oty4nLKs9sfC5tkQFPohjywZ4diMmnG4nBf499y5okt9YTKATU3muyzqsfivdpQF1qjJeGXWdzVgc7",
  "key25": "2oaKNYvA9JrXoPVaotHjyxarTYF3XMcTRYG3dfu9dZzn2Rvh7Wxvw1wZ1ynnHg2cdB9NYAffETPqwvQhmzU1r34o",
  "key26": "22Atf3eWEoNSs7kVxSbCcStQDrdQ4myyFq9SW71m4jvj7L4CUgR9bHmZX2B3cQZ91u8RaniavL5TSa9PrjGwZ5jN",
  "key27": "54KMKp5GWHANUwvismNkJtBuhn12J3o46UiPmN9wfSjhLzZjuxQ5LjnRqbs24iPTpoX9LXJDRi4jGvE1FBQdwWfv",
  "key28": "2zymiJn7VkCszkfy3aiCo3fQRHGR7m6Vb6GErvH8kS1RRNi1ouQuUju2me6pM1YshpJcqui8mNLbEHWAHMfCCj4T",
  "key29": "5QbXjUpsdgEyMqzuWux45uCCsY4pFEFnCrj2f374AnzWxT7m8PC9fn5vTfUX16BynSPsNqXukXKT2NRuQpHMs4jD",
  "key30": "2ryYyRuePG9BHbL7eEZRKfo6nhJDh8NPqVoC625jzNaJUE92KiKvw4iFkJiMz55fhKNb6L1d4zRDT625HgjaThzV",
  "key31": "5hLvVzS3Bork8uy3BMQpwHMXAyoPM1nFwi7rYEsiPMDu15jArSkATFWNtRGEAPrLnrrEoTp87uDXaHCXPaVqSKj5",
  "key32": "49Xj6o11Uy3GkDjdkiffkuDDMGAyFMtRNqa1ofy7pre7GoXxw1hkyiMUHGFsTgXsd7n4mwWBJxqQ51f71KAWZWTq",
  "key33": "hb6LSjP7ostptPAdGRnuHvpN7GHu15Gje9ZnwoZPzmVsAenwZiuSwfYG3LX421CBCkH5np7cJugEMdVW5wkN46R",
  "key34": "5NpDRLzWPVvR7cqkNWuEc3NPcZsYSktmskvwC2T4Kz789cNuXEk25JYgv8cPs7J49zn9JrDnHgDqjCavY3LboYUD",
  "key35": "4sMSfiWCe2yMkCQUdPqaK3QLfrKoWX1WU8w5iCqC7p1PiR5LRGCdxAE9N6d9GiAcSnXgCYXZmdhsLRFLkuVu3MTu",
  "key36": "4f5oQw1uy4fsMoACs87SKhhdceWdQQTPQDHADDosQ9BCZHtjChSiQCYsSkVZKDJei3AseJeH3aNL4fBxuSkDwGr4",
  "key37": "3g2p8wxG89PP1VZhhcK9SB7KMjgzuRDuzAkFdGve8sjE881RTxnsjEXh4bPQoZ7666bdZGdT93jCwf3do9DuAwNU"
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
