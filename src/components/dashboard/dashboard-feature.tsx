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
    "4qU84QMtus3YUbkWx625ob7wqGaQxYqzu7doCSdM3iyJhDBd9kL5W415UbrDAge2FY7XptsnduTghmtDQq8u8LkB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qKyQSDy7X4kCwmtoCxy4NZsKRhokSTcqNBycATkAhaWUhAvwqw75ae11KxnyGDQhBDs6aJDBYn2ao5APjmDeRfP",
  "key1": "4we7AU2DVeVgz22T7CDoCNGMapAFFkMyyjqp45VbE71WBzUUnVDBdxfx9DautQ2v2DQxR3L2c6DcwqtN6vJBnjai",
  "key2": "55mjj6SB1fFz4H2xJirNRwh889FdFrocX4xmpjfY17qoLBaD44McQds92octSGJf9yGVuj7Cyd64VeSELasLPDzW",
  "key3": "2RXnnhUAepUsSCAAGwejQeXBki5aHJk65GKV3AaFSGK8k7QEWVre75Gjngae9AQnTytUT51UQ8xSvVkFNydfSYJP",
  "key4": "2GJLxFZ9kqhXg4s55r5naNLoKgeLAwUD9S2abDjbGD2jPcSGxLpntydKfk3NqgnCQtg3iaSZU52yXQcLzgFpeaGN",
  "key5": "386R7HYcxCHTGZbiFUUVfCrpUxNGZBNdZsCkvJPPQbHwLXeug8kU4VdyQp5V9i5hoXguRSLGMpbHe8yYMon4dG21",
  "key6": "3pUL8o2hrvMHLwN3dZxrYH4ZPrYRh2yTcGij3q3hfirXfxYEd21C8nyBLrDqSR1kwo2NXSz8wLxjxyxD8ohDHXfW",
  "key7": "3Q4frWYftnGo5FbgBqheLNw3PHzeSLHVEQhEEA8D1sHNyrkFk5Kw6vNPghu3cE6gawLYr11tBVHNvSmoL7xrcap7",
  "key8": "4eW8obE4SgbnpNNhmrqQDHEe8LAZ12rLRZTfGrZNLrYS1yAKzM4bzaXPAKkXbJ2KcLkxGuWDCdiS11u4CXYycjyD",
  "key9": "wYmFjXKLcBigB5uULwJCgPq6iBdUH6WWGFs2vjHNqTX6B59ncQdbwjXhAjPtbXCwyYvFK9mEtCZor6fpQ5Nyyg7",
  "key10": "2H1F415YBXYk7XBF58wn7dSyFb6zyQHnqaqXNVMpxeAFH7qd6JpxgVkiqJQY3mgyyNNBtjZfseovtfXGGvCRnR3N",
  "key11": "4JMtkepAHVN8yB8S91xaZxQfPg71RjWvy71DCADiFaCkMJosVU9rxJFo3Spp35c7JuMP7m3mv9NaNa8xDDAhi3NZ",
  "key12": "2dXgodxSz6ZUkbvHEvJPVy3CEAzoEWJaNRnWZxkVYDaHcsoADVZPXthz2yriaLAKc3MyKMPDbg3forPyfgW2bkFr",
  "key13": "31sGi5wcMnwkgS9Q59eS4gon2oKR9faWi4zMoWUahWzUjvJaAuMocLs9hLLMfjEky4aFDdPBdUiyA3tJfShyQfEN",
  "key14": "bzLpzPdp7YWo7Bfd1KuwgHB2Ds6rAmQDBjYtBpFZhxELTP9cDqXD4QhYLQ4aCN8dXzywwznJFnhRBamje7R8AwJ",
  "key15": "65byfkDZv9GYfSbNtkkUFFmVvHMgjY4psvXxjMNAiVa5yc6WkKz1ze9NGL1KqNrijj7gqERyd9HmrJZAUBX9Z4rx",
  "key16": "2yYdtXJXy7gQr8q9xm2U5ZKsDBk1d6xFdTbMwuHYu8Tdfm63Xq2jtceoga4cNpyG9ot6kZ9FMAqYWZeyTeYEnZ6o",
  "key17": "3fmu8SR5pKp9ixBnUPj1PMJPJbm6ERFrrXzAVPQbmZNaGYz3zSGqU4ttJxdUZdANuNZHcj9Wd5XZWLrQqd895kVD",
  "key18": "5T1E4XnU12obDHuedWPfRDosXD5J93KXrNR55Uz4wWQQnCz6agdyi86AXKTrog9jaYm5YAFKniu4QG1fJpQWTsc1",
  "key19": "4XnLGLCjnScFs4GRZdeSKfx5wY8D9yMrC8cPkerni2mL5qXgJG7B1iH1Pb3dygZS1EPRuHuBUsh2mADqDLJaeBGw",
  "key20": "4efXvEA9CJxx6iwoMSLnL6ej4N3d8cceYWqK1LBRP3kL1pCRE7X5EUQfKDqCaWpGcX7W465fSMU2ijeqPbCFtuNf",
  "key21": "23aMZiExWzLhYEg3HA8A6C2kZwE1mwh3hVCtmZTVKBUUrSDTRakXrNmRWzhqrke8QwVAzQfTdTR8JUxV8E2D9kz7",
  "key22": "26WLmQDRdvxEa9kw5ADfvfgE2B2exMF4bdfcFMfqWcvC1urTPX4EgPtcw3TCRqUB1cgQGLRKDk5Geduhgu6izsWm",
  "key23": "3rf5Qhz5Tpx2Wdv6qz56K5rUYJG7qjqFNXm37zpZacH9WC5KSH19aLYn5PvxGZecevYWffDqgFTWXZbdY9Xb5S4h",
  "key24": "3DG1RMgzq1cbgCe1BSr3Dc239oUk39d9fXwtvFC3m7BZYxMGqgigBkWmpWKYdx9ajvBN684UpABYjGb2sV1DDiBw",
  "key25": "3gkuc3PxyDudWyQ5hQycyL8u4EKJuu3GQA8AeSGiAeYvKBAUaz5jtm4hhrGpkKz9SMfA7L8krNWatZAPUtRT6SS2",
  "key26": "SQjNmnc1XimUhKTdJv1vtUuqYAzARs43JcBBoP2YhesV4YoqDC95HqARKjck99aREw5E74abU1giYcGkyP4LHnk",
  "key27": "3ADawRy7XEaM4B4XwCk4rLe3vN322CXsYYLFrDfscpJj8pBtivKrjFPD5EeR4v6gWwHJdm5DyUFfHoPUQZhiS9nE",
  "key28": "65L4NDbaCctJs4GRbaNUe7tQK67T1fqLYq57YpzsgsZTzbcfXMEKWefn7BW3bHoWaeERmtg4jvYXM116LeFYw7rU",
  "key29": "4anxEtXv2dkLzEhiSTYQyDivZN1X3UFPDaBgvtBxHqhzKMrR9DCG5ZKK975Bnv9xq98U4LtSbtqMWNg72e2t19KV",
  "key30": "2N3HEnLuBZmwKSF4N4QVBfBtVPNHQmxiJH1S7yhkyKjB7o82Ebc7dRUaj8LFKG1fzQ3hnRifmQyUg5s32MrzDw5u",
  "key31": "5q87rRkfefE1KT5tvV2pTDt9czpEgC5wA83cyQB18f4PT1fCAEfFVJS19L8EzMkmPoP53FYF8t7Xy6coPd1BK7c3",
  "key32": "4uMyA1ajUxGPjMUTMsNktJLxqYUTubEx7iL6PMqmAKYGEEMn23hoFw99HdnbuTgWJetEe1Awv9QfaWTsLghSsEnN",
  "key33": "zBHbRwxQr752s8NjyVG9T5YvGRYqSDETv2sVxeycFvaM2sryx7gsf6FrXvaRXz74hHNtw2bWRDFowSdqK5NoZD4",
  "key34": "8wr7BZ5yAKHTAw2znnyVyGPADUpf31k5F9Khk6PckPhm2injcaBtp6YujJeP4HJHenRVhYxBavPdaUjbwqEjDaq",
  "key35": "26rdqmhgPoFo7ydE4UdofdziBQZqvLKz6kTtMDqxm3SA4QNwqg9Mdqs91dAZ8Ne4Qfe1xNmkYRDX2Ca3FyGBHoVL",
  "key36": "2yzspvNzELnqmTgEEgFfBjL8WoTeL5pTqYg7Th8HcyU6WaMLXphgLYRjfFFBaKxaftyaLrwvEvnPKVJRKU6wkk3k",
  "key37": "41HpcahiHmepj4HrvgWAr8Eae587kjgA5oTmqTHCBq7zx9aHf4hgiix5PyjtByDW7w56ogSA3j23AeFuEwH56m44",
  "key38": "5TSdhzFJ6hRjXj9r6AHRfo1zAoDcd3TZJnWhipZXpb89MzEY6rsdqVLMLMuEEqRCt3L25fCYBQK6sUBV5YBBsyuM",
  "key39": "67DWLJR2Y6B6NbJWikegmow5U1sS4YXpU64aaUxQmiGPa5xRjghNMnJD1UETWGAThqurrMYJFEYVptxFokPdYGDN",
  "key40": "5C5KCBNCRNuksftJx3ANmAtUHZcSy4iYBAMXLxJX2wEB9mSVXK4ToGUvALcgwPY8tKMSJbSv8Ri24CTK4zgvG8rJ",
  "key41": "5Vw9tM1D1KYEuLMUWhsN2MgvyKH9HiaKv9yDQ1pqyNKHHvjJ6KCA4boVzZkQWx4W8FwXVh5aWowJTqCZxYWUHbC4",
  "key42": "4ESsXTdeLRfvV82iKfbiPcsLjtekKoh7C38JDtFpT5r9Kux1VX6R5Y1vgD3PzBd64ksBGGoBtXS4M1HGF4tCXoeH"
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
