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
    "3635qmWsN1eWxPTZMnvkPGfZxsRQMNmtRk77SgeYYLqgbSWtziAw7vBnXc97XzzgFowz3wCYtP7VXDgETfeqvWhY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4HYyVZtXPtfPAnsjygetyk2bNMEvHztYdmnACqpTbPWtBCinKx3AH9YhHJ2VNRmWdZERw719UsRRRyo2wTUU3m8c",
  "key1": "4z9KooLrubVoZ2yUiQ5WJUiNbwmxxawQXbgbnj2pZsvqpN5MXwYBWSDsa1fuDRZDoQStnDZEuuKmN1mT5nF5U6c",
  "key2": "5RPzTwdp56gacejYu5zPJ65mXqyPJLLiU4rjMZCNaRcZ7pThWayqoeEUn1VaVtqwNjyoiovfgQuq9trcHmyxC7xk",
  "key3": "55BqWmGwdc5ZxvQDJs3iTH2kwSLCD3RSrV8CYVfqCDaLY27ghT1xAX1FJqYR4n5DCQajPqKksoD4KA5R1KWo4iKQ",
  "key4": "5ZG6EfYJJoqMWj58BQAYAV1BdiCPNjqc43htoaGfqxZYQzPk4Sn6j7Gc46K8wDxjfigC1zJ1NVZXKyvaDAEqRxWp",
  "key5": "2cT8EhNeXgE5zzw25VJBw45egVL31uYxkt34pGzyKzSJXcFQgGWQd8zvMr3TrRFurxCuHYXto9ZsKqYfDbWBkzRg",
  "key6": "5TF9oQpfT2mrZ5VmZYb5bSm2Yfuxt9VvrBjBBg889PLf6s8JExvAMLjQqiuqjqEhdoydTGrXtgBa5QbAU3UT1fcq",
  "key7": "2jsvgDbhRXuVet7zEetu5s2Ck6BQNdfS8vBPusURa5T1TtNsa7PDgUprq8w6wGZa6um28Cn1u6mifEDyZm26F7Wn",
  "key8": "5a7CVLjPeF3AuS3hJV2yfUYRadYhVbydQWosiRLR3L3BB7Brx7kq8waMwM7ke6ANr1pHH3s3fwnAECxNvgoojTVF",
  "key9": "2CV3cLm9Ks583ZkiRfGVNEU29v89pA2QBP5mCmEELU7vUYwtpv7vwT4p94ZHJYzGaQsUGJVMuTBYtkfFevPgiMBB",
  "key10": "6EuHsaRQ3rNE2rYPfvfKS4MUE6HCZyPexrHnhJ3im1bzyDg7qWbdHPdryogu3CrfKYNri7hVTkcXZ1ESt4aj5z9",
  "key11": "5QFsF6BMRJWi1HtMJRfmDJjbEv8xKmS4j7Zxv7T2aueuXW7fTWwpuF1UihJ3R66Rb8VVAg5USTk66tMZNs36UTwD",
  "key12": "47zGZBd25H1LRB6ZC7QGApXFaR7NZnj86V5wZ236aPLbKJ55vMhp3jb7SigNCyfDcU5856GUVyUFDf9aSsJteV1n",
  "key13": "4cXnz9iCJb9CPpPZyafpfzAvfwMpe6T3m2G1RJuueVCjDDEgVubL9Frh2EJM2DmLysy6wdFpXmeeSLgSjJ8gj4xC",
  "key14": "2zH2tWQhSUGFTSKQW73hxkHYiGiRiQS8dUNwJbZQYvpPGi3qRHY56HpSfdzBhs94Qxaa8gSumLkZRTmf7aU4q61Q",
  "key15": "5m4AY6myYzKxM7DnK2gqqBaL3J3tUJvLmvJsXEMet44AWy1bkPUWpDYz8uNDK3Ht9mabwQbzXvi87HPvuaR8rskD",
  "key16": "2XLpHRpdtai2AvgSgheQMQWxJj64iEdhEfhHh7J3ag5sDsLUZGbs9LCFHYknnDGgzw1JkH4z2uPTLnN6TSdB5Vwv",
  "key17": "2SQfruwGiizz4DszghEHu75iQVBFwXzGZTCgKCtH5mGHb5TPQJJrvuKyQ1qgCmrvxLNs2RWjBSGmRD1qfXsRFTAL",
  "key18": "23zrLGZzSbJrd5tKHtSPc7QsEKhs8EH2gUPLeqbV7Nf2zT7L1kzbUK63iCdFA4eNg9FzmeoYGNwGo27ohs7p7dob",
  "key19": "3KM3sQmAB6CufNpPqwqWbcsv9hGgRq4mfp8euXdKmWmLWEJ6uuR6Awb4Dzz6pjhpXgr8Pci2Zqu5E6BWYs4AFEnK",
  "key20": "261LhtLWkrUdzgDL2gSN5ZvkHsT5r5R7CpBE21e2ZkV14irLGJ25W5QkcN3XW4e54AkN69TKiCkjfgDQR8zBb6UY",
  "key21": "5VpFrNhThZn2kY8YrtUPWfLSjpinCbBfX73C7b94PdEc7BhWzwwiaRqEy8xCaQbGB9wmzCPEy9eBT5NFHZLarnDV",
  "key22": "2YFTAWdoQPLn9HT7HKJP13dkon85RuuSke9KEzDbJUvB7nKd3M5AG16YVqJcB2BxULE87zX1ML5Zo715CdK7EHgj",
  "key23": "48WpexvY8XrC1UaAPm2Xw5j26kK39rasCxVV3HXv18VgVTxKJJuP4EZC9CBnwDGdsAeACwQLt72SAgVG3LhBtaB6",
  "key24": "3fuy1v7JqLHuWpcvtRaUxmWrvk4kKmmmVgZ83a1MS7GudgK5y5hwYjBtAFGiQcNWtvyspRUphe6HmeqzLPe3hUsZ",
  "key25": "yBBxmP1GBc51Zk1TNEcdYmXhiY6bUX7ug8B6xf6CoD8XpCcvLTRZWR4wR4JANcZgtCk6pqa9CyBUCHoLzdQK7fH",
  "key26": "3deGdUX5U318Gpk6FP5U6MrbVYuPxb3rR23yq7Sm1RYcLKfRKGvxprnd8MSgPtfJeRh3M7dNSj5VazRi8E4kNGWN",
  "key27": "5CCpc1on7MQ16CiJ1GXkFDiqnGztR1Z1JRxsdJ7xtsJD1ZM6BhQhm5GGxauCe9gEt6t1G67yvMsgBUm2Pvk7NQ4k",
  "key28": "qqDruNdXwKMtePnagAS2rC7F1T7cwKGQMXnPUSKSxbGLPiK5rjgVAdgD4tiQij8X2MERMqFnvzbcdEdJLxCHkBE",
  "key29": "5AtPJQZcj7iZ2Dua7mDJ3c23FYXzeg1qPZJCMsZdHDairePv2PVg1yXz2KFzwxHPNXKQDLwi64Fqnp7CjdXWcn98"
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
