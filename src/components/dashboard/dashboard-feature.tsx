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
    "3b3iWKqDBAMrmrMAgwon9pHrgBxi2xpZ7WYqJbXMKMyvqy6cb74qDzSjyznyqxeGzgQP3r4zTHjoAZo9BohnaAYY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fkrZJxYjKW9BgNCTp8G4vrwziT5Xu8EJeMQm2PjE4epyCVVAWboRwM9s4dE5d8F3wey6o5AGp8NMP9UG5bCVtHM",
  "key1": "49emhgipoi6VMcQJmV43MwXJXotmhSWYsZZyLZw4NMHZejkWsPccS1U2BNXiJuzF1vs8xjGUKv8oFJ5dnqUgPLut",
  "key2": "wXvB5RSkA1B3d8jdLksJ8qgAcCMHA3tJFjc94Q8MotgGAAb6UUry854VTGV7pGnbAuGvtpTK2uBDdBrfz4ECQJt",
  "key3": "3tF41XU43rWrTLKVF3VioDsdB5Un5jud1qwvEHyAg1ju9sRscggvCU3xehj8QZQyb5JXk5hd7CKJHJkctMPTvsv4",
  "key4": "3AmW7RJfioLV8EAndpmYTxn9hN89FggaAcXKz5hJKTHNt2ryqFfGLd3tHdEWrnLF3oRVqrf3Jpvnb4XprpZXZSuE",
  "key5": "3LqU1S9hFNUXVvFDF6xRTyF14Umqxp55ymTa9TMS7f9abx2KtD42rcEzKq3GL91sdEGBLFfMWm7Yje1McDKCKrFr",
  "key6": "5gVZQtGhCK74fv7MgfSRgJdZdWBsFChZDr4EBSPZPqVTuqB9Kd9tyB16Bn1HnLZJd3u2hDVZir3NzSypUbzbrL9R",
  "key7": "TeqdyJtyQcFYQDAfGkMJMjVsaj8WkvprtvvcTWtpBeQuLvmvVbskfkZTYbLcGDKdaN5HvZu2czjJGQF3aBRQbW2",
  "key8": "4KqojT9RRzpXRgGooSKQm7hZtgRrwB9nW5zo6v7qomQ6oUaUH69KGVyZprfvJd5Gsc4CnZYFQbABetBEZycTBsbY",
  "key9": "3rc9yFuRvhTh96Y1BRtDnrASUyy8uK5PB63jHEue6ZCEvKmHVfyi5b7QuXVAXmh46emCUFTCjRqmkiWi5xJA13fw",
  "key10": "4YZHmsfBcoLDbFwHd4C32GuPmrGqM5ghpkwzcfULYkBrxWVPtGJHYXQ5699kL5sTjsCw5BmQ3JfW86eWZpKqMqtH",
  "key11": "5i1MJcxAp1341jMQNn2ydC9WkQrGJaPc6Rc6jn5q5YainJBkVpHGF1eELACMM1b4nAK67a6mi9d2kd9b4JjyHMaq",
  "key12": "5UfVg6jzMyXC3NCugcynsjBCQU8XpLz5eQZAVfx9M7dCxhmWtmhoSVNtsoG8TJGp72G4jmSWqkTeeKnZ2kg5yndY",
  "key13": "56KhEKcam4Tafzs6xUUUP48mZ4B7zjBanbogYY1sJfTAazyvGTenmwtv3cTfedQ5GpcYYjPkyBZzVyRhAFT4hhG8",
  "key14": "5pjkGX75UV8A49dKECqyQGeayBMA88jcWLudsV4Kajci5hQTcVUyz7k85hbB6MExY7Hhtg2GA4jDxjhMuxW5Kgz5",
  "key15": "2sJwRSEiuavGgTswy3N7fmviPckkcdfYVzJGv7bPWsXEE4CPAYTF7Wajp45bTyWagnXcK49bopki8Ca2gtY8xvqu",
  "key16": "4Mn5z2tHF1WsBDM9H2xPFyG5D25Qyt7NEAKKeemtks9qBXXFYf1Mhnr6ysKMDJD4tWK4gtRG5gieF8mYQNnN1Qs4",
  "key17": "2PhJnBa1ML9NeRLXrn8RmeSbgnD2SKSN4fCztAA3orgFwJS6QPT3uqrPuWRW5tj5R9ky2YEqdKTvhhj6C5pdydSt",
  "key18": "A1zfiNo65YbcNakXuAdxN8teQ1bVEEe62ShP3bLqbPkYoFMy3JSRfhNrkUNuwmtL1WUMVnnz2PcXUTqN8HZ3Zxy",
  "key19": "5re4gGkHoD4DPPn8zpw5Loe7XJ7wQJ4Uq7i41aV1v6j7yGKsdDqSxk1x4LHWySh2nCR2ZzF6rikbbben4tesDcc8",
  "key20": "2ZZan9ssx9CDMyAu6f2yxBSsBueV4nBfNUfbRggsEZLSRZoSvmmyuVKuH5DyCFMJ4S2q6VkCY9cshDcXkvawCWBy",
  "key21": "4waBLacTG4wkd32HTi6NrpZYpykRENGAtgAbPudv3vopvFYHaLnc7g1wuEG4jumRf8SRQ6yEBF3wUhqWSmg15kqa",
  "key22": "51JDvYSbweWAiK9XkN5tKwoZnCt5bNk2jKmu4Rg6HpwYRoWfBFto97E6STmL2tUseAEX1DyfH7U9H4vuuE5Zwy5H",
  "key23": "2gVssUxqo5B313o35ptMPSRZv2fP5XJm9GuhdPZgLHXwt4QXek7xzKsYFkbYqgq4nBc1wVm9oZQF4DUWbQTjR1Wb",
  "key24": "23aUzfRTxvfRkXs8Pg5enpsXj24mePsMqedpYhzCGwY59u8yeLUUvdWiTTL4JYak7S7vaCHbijPvuKWJVV5AfbQF",
  "key25": "3ktAbFWfYNTRGPkNDzhAKxbptJZf1LcMcAHWVssbuKozQUqr3q9BNTMaHkatZrbSE9U5PKZDrpKLxJ6FhmGqd49H"
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
