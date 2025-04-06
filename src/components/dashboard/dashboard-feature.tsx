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
    "2GPJDoZE5yACRjUt5SvW5iMut1yZ5mZXKvBG2tajnkRSrGvRVwYn6DT991H63B3riy4D8dNe5zEfhGwaFmLQ3A4g"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Ghdd4EKgPpaumgPLgYArAZffv4uyuwkh7cmuv35sP8r6rAaUtWx25K42gtvax7HHY4xMzVgUPi3g7c7oC7TtUVe",
  "key1": "AbSqanbufqX67z91nfqGg3mCbseS1t5KtBiaeofRtnNgzsmHoREt2ZoCLF2N5DW5rT32A8XQCq2ZMi9hrKTRH7u",
  "key2": "44prbrAGXBQQJ1FiJBUNcRkeqM1NtM3opVir3kF6scWZjvtDHi2xsh3iB3gyansYvsLu5vPTrn2Zn6N1EaUnfFmZ",
  "key3": "54tZtyPprPVX1bFCuG3GTnJaAjcc2KjNDk1mHnpvjeRpks9ZAQj3hpizXPtwKJpL4QqVFYDM5rFPSrRPHmM5NaHL",
  "key4": "58vjKYJ1EePK1jmuhXvZdw9Urme1MRK4Unz87pBhXVgGKCdmUQGaZaQihpj3Y3sh11o1rhfYZm4bZEvCSFx4j3aM",
  "key5": "5ocsPPRV121Dh3uWDntLcXcrSM8AYWUQNfwTZXiryC3bmjo7sMsqehxBrQP5XENdy7VnmWYSZccGLjU93fJQXN3R",
  "key6": "5BW5ixvLT2YyX5UJMjxko92oFawg5DqrsnDCiUS3WcSoLvV8eabjc1BxVr6VEFkZaBVGpQSGE4c4GCWoFCCeKAs6",
  "key7": "4qU4kPy2phSSLNmG5Rfy1b7YpTqsjbWPJbXjFa5HtvagMDmNyQm2vPhDsRKkZszExw3ukQgLpPqpXHHRWt3vaVEQ",
  "key8": "333r3NvBXLEnYvfWTzMgHCxM8sXwWPmiUnXWPzdKGF4YmcwefN2hhtgQDWkKG9qDTpj6cFi9vZTuG6h6fkccAKpH",
  "key9": "66qyPPPnCcbe611ZhherUAeeE323cEsSKe3mY6h28qQzfgnwK5v9L6qFC3SpCYM9uQg6KbeymLDwTdXstAVAP5xX",
  "key10": "4eHEqXgWhgULLuqyhzeoV8BZHRyqRVqrZmUdLLnc3bGJFqG4NViDx2GvBkeY9u2diq6nDHgcSHwwudSYa62h9m1r",
  "key11": "jooTNnotTLygiH5PEGSSTwb8CgPE8qddDwEBs5z33j2XDeu1KfxjGkFEoWJyJUMd82M4ZkLsFJrMyWfttSh9U8r",
  "key12": "38Zd27sB8cCTkLQmF2pVGEXKsPc4rHyTB6CREWmD6nJyuUBMDAQenXGpMzwxB3GQrtJMiWHVompHVugwmn6tKHLo",
  "key13": "39YVukgTsyZ44FxkToo2VyTt7cTg9srxr4fxxPaLC72hNNUTrtpsuEgZ1BrtD63PEePXqrEZjqjAEQVxvUZVbZtQ",
  "key14": "5bc3xnuFpe1UJtM25wx6YUAjCB5JGGqBF8RrXr7o4z9nNNaTRpRDvdDvPAUWzypEQ5LrLs5SwVEMautdVKLigDKz",
  "key15": "pu9kbuGniNrwT2QBsGWwnUj9zooHhcDyZDTi3nYNehwoDGj5Ny1J9FMPgK3rTtdk97AREAyMN7KCntZo6AQswEE",
  "key16": "3sRMSwc6gPHgb5sbmVG5rvfRJLGpQiWF7LqAL83JDpD91LCciz5s74ryc9ag4ecgEaQw9tkrNVAg8ZQSEbWUfyZw",
  "key17": "5qbPUzjjFyJfcmHPrXSQQ4H9DSNeFap2JJ4BZUbzuDfTGm2GYi5MZ1UUm1SzeeseJMW46CuyYFDf5nS7L7BBhmUc",
  "key18": "4wwWVt8WsJb3es2HfWKnjKdPSFfPukp4vqafRf7NW2Txq61qS8K5mz8zXm2aXgyz8gtJbH59oaqH7MNYsf7zYyX1",
  "key19": "2gt4AjVM4JvnC7ocxbEr5jQuKYJfw7cpY6eSzSv51YvQCAfYobNjfqn2bQDQsucYpqUdL76agC2oD1Miy3f1MFgp",
  "key20": "31YZjRFVJf97W6G2zsYLHUDEzZTPuQEcutusXEpTxgoSimwseY1816XnLMyqBWpuevZLsVz2oB8vDgjdyVtjuvxq",
  "key21": "3yPHeRReNnxaowJzZJuvFq6a6VPjwPM8hLyDpQE69dC8MSaZA6iKXD1amjQcpExQF5qRjruJuADS9od43nyqKtL2",
  "key22": "3cRWWiLr7RYeTPQcxQiyfbYkdY58RLhar5vxZKYtQzXhwMr967k9Ph4RVLyLMXKLKcdtyatvC5pQCrV8UkFk1Reo",
  "key23": "3oWGhhT9xarqchCmaVP7WX5fX8zYpBeAz4AvdXz6f9Hu85inX7kV5HRfhoNQcKEpGFSNHkBuaXiZ8YjKM6xZCKz3",
  "key24": "32Tdjc4YhDmQ7xGvqd9FseMAyEnLeCzmQ1hmX9u136T2gJACPG9sSPxKY1BvESNH4jDkTfo12ojq6dt7jQL4rE26",
  "key25": "31wCy5xNnjw8Zp6woyaWvnW5vAHBGcfeRG25xyUAtsYqR7gSz7KUB34mD1pkJHReFH8C12oXk4Du1QHWQ2HKJvRj",
  "key26": "3x4qdPhCp6YsaFzjcME82yXJY5dgYZFgKeo6mTsq9DcmUMPj1qni7R5EZWC25wdJkFbCijaV13sxzEN3UMwkNr4m",
  "key27": "5ez4zU2jDnWHzp3am4eAQZzHxJXve9YcbZUNgb2ZqzA5sQNKchTN6xU5fXN2y3DDX4JopoWoj68jQfQh4kCEdh4a",
  "key28": "2dXRSFsRjFDAW1JZjcrPm2X1J4Z51cE7trUrGGXzCM7uJQ8EzY6ivmBfXi8GfpTTJHMPJGUT26H6eQ9FjtEpXWAN",
  "key29": "2UJhpi2RCVekAawFsbJYUaHKaQGyptJT3tGGBaan33VFnoJUd2G39GCKy8c5Cwnydhs2rJX7CaYw5tNpHBqAWchW",
  "key30": "2LEktEZnrpNxEfSD6s7HazD7VdoNJp4jeWuDQKXkudttkQKVTY44z6SdjHs25mAWGGDv86Ss6Lhd2J2sHnu5VbSn",
  "key31": "3RPhLcYDmVEu97hudmjYgRQcif9ucryB1hAgLKJak7GGhiBipV4ipkSBW3Dnys51bwpUyX1tvey16a49zTcD3jo6",
  "key32": "JMbMJJ7xJtugWW5XhS4rKsCB9WRUsS6p3XK1JkwZN8uvh8GEvujvhS7U87M9qH6cVqt6FE4yLEH8V7qe22hi5Yc"
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
