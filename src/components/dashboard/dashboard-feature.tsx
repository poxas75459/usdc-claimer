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
    "7ets6tg6QPRWhX6jWKnfUDasYdDkDdVibZL2pCPNoAbU6ajNRkTFEoBB4wSZkAkgAkFizkeiLRX1bgNKaCMvWRy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "83suT68nhKoZfrFj41A6Zwuxq1s8aUoQq6ZQqnXYq4LJeKVyxEhxspJYVJEQ961o7u31VhJzgF7e8NZaJsSxPFy",
  "key1": "3PgHk6gfW24fruMVc72ZnHmgURzogn24xrTdHzPXWSwvASTKWxN9X7WMUJTTFGdhfrRPDK9u2eJdJ43hoGmcwPQH",
  "key2": "3NmNUYtK6tdd3xnf2ufuUGBtaiHYoUhyZwbYWsMu7hARDqTTNdtnvbqyscyfhRZB5dqi1Aikb1bZCq1m3adKgDTJ",
  "key3": "e2t2a2K9CGgXmvBR4qbYadNLJRVZe6uZfXCQaexW3ehpeDS1T2RABhRKW1igxtiehMS1JW9rV12UdmVvE3Pw9d7",
  "key4": "44wbo85h3HLK1ARVg6kVhWBNuUgmVfW6u9snUE6wWdShJQemAM4rtUvFxGHaCBVPEePHXzz3YACrAmZYcHhyXXRP",
  "key5": "YvotfW1yFubnZt7nX2YevumPFZAx29eAQ3rAFCq7VtAQpvCNh6WPdnf9EZefyvF4wBk1yRipGbAwckAd2H4A2oK",
  "key6": "2vkHQEScCPoJKQDXrncLrZ2q749RUaW6qJwtokimTyJwUjqc2CWsKDr1p5C8iW7YyAnCez3y5cwkpQULFrhrPKJF",
  "key7": "gb4YhJmywseJWTPAFCE7u9frrvx6kPdfrAkz3kVWX8zTMvFCvtiYXxwT8GRQKsoX5gaULQYY623h6aQvybx18bG",
  "key8": "5LGMT2LLog7i4iE5Y5HBq3xANRHeLw5KjG8PhLRh1ow82EdfKW69w4F264zb2eeSue7h2MiWmj4MupYG1BMiqMsb",
  "key9": "36KoTGgxJqEg6g8aep9MrE7xhbXd5iF2XiWcrh9U7JZzxUkHZHKrkmfCdNj4YDR7cpsbVVjVpDe7oC8s4wotejk7",
  "key10": "5XQsZyNetYUKm2gDPuSWwoR7vRfNnL7GgX5fKvsgZLd5pjDUCqTmDS4wm37LiquyjFL6RqGWU1wZBtYq6f8UveKT",
  "key11": "DVNk2U5VwXbrjRXejehj3LwRENTR6S8YzqL96cZFSDboxXsTuLXfKArB2RNTEjgyXBFZ9rYA4vwU9oYU4PaLqjj",
  "key12": "21NJz8ex3nCremNEXMszJ5C8zkutmPHHddP94YvzMjmkCRs7n7MCnLv7C1y4JYTsfUoYr6euPdfDg6z8pJfqMgBw",
  "key13": "2kgV4Z1xcG3hPtnJvmU1Kd1UU34VDSnD7vrGfzQWs8NT8VULa1FutkML4aHExSqvGaJj9wEwZojHrehMopi3d8vC",
  "key14": "5g2U15hBTGNQdidih4ZAH99rx8aV4mWXwJE8S11GhMgi98wZ4RsNqTavjEHkFPtBrQFPsJnp8vxS9YEKAqnTyESk",
  "key15": "2C3XCsUPBd9DmF4nKGRTWJevxU9UToPjy4FZNLnH79CRXMYfriiSwx9sAo36vBMaxFkf2c1zty7J7WgzbmHZC7Kt",
  "key16": "3qtXnWaC4iBtLA6MPyAqN3G3GQFy5opEXU7QCUq72uCc6aTEJQPRzqAKmutM4RN5JxXBP6eyCsPZsKKsRFD2AfB2",
  "key17": "5TfUNu3Rr9cSyjtqxJdjVCezaTDJKczVhG1GzubJobxNgDYLitW3SHaCq2zAArjh8BugKwQDSqmfHwwG8767opHC",
  "key18": "4dhu5FyQ34bBBXhF4Dz1DK7Yt6pCMmr8Rbivhfog31NQrHzmpgMBQS4MC1TLgs1xzDQKhxZWWFp46DJS3maX8jRK",
  "key19": "26QjDkZTRq89tCMt5GsuWDwrxLNJxHrWsbeqrQKKf2uh5GspNVuSWGeXKTUpZbZE3ngpdiQMeVRAehKRZ8rmSx6E",
  "key20": "5TfibXqpn4vPFNjUst8x44vjZpbUzWFSTvsm4B9hgRL1Vg4LpT7ucXrxbs3ghZCF936qk91w65uEQieBbUa5WbTw",
  "key21": "61JNJozqqPZVgRNUW51e691NCbijxVp6Cs4ijzZg3f9PPf6nTkcGRx4Qgxgw64ge9nMN5UvzyKiJHebgUET6HmzX",
  "key22": "ik7Ym6noiYzay9qQFamcqL2x3jc3ijpiemuG9GanCvsxqv5itYFNpL3fpmkdf8aRKHuFnnq7dKu5Gz7pYFmv24L",
  "key23": "4A7m6L7Ekbe3cZRvowB7fy4TzxqbNcwSXqgnJZzgbUu2wfqMpGtscxWSzqRQQ9iMsEZAyH46TxuSpodYSoWEevPi",
  "key24": "rDDRcVnkJeN9JDL829nuGWKytJf5k4HykLQxjxjVUc2DQtFrDke6BN5M9wGT5221goRBkaGTdbydBvoGNiYhzwj",
  "key25": "4hh4i6p9GF8YQy2YL1UsS6cXspntbR3ejhpVm1YSeNxCNs4uHcUG1nsEGHZ8SML75oBCNpv72KQyAmB2fbnwebTh",
  "key26": "55keLYxw3VjFsRKWau1atzcuxpLK9BU8ajEgQHtD83t5eLhEo2GhchCFbHqpBQoN5pgiZmyswnwhjDkvboQ7ibSN",
  "key27": "2PCbVSiBpXNq4fMKfSvpBjE8qJB8LtjRcygka5fcys1r5qyCKcp7G6MJn3A7EzucZQHF2Buj4zxWprPkZJhPb1zJ",
  "key28": "FftxjQ9MVvsH7ZnQfkCCrxaHipUfZbgGsnFRhvPZmF3ARhVqHo3HUPRCXddDsR8n9ejVFNK35dPEoAfxwVjiRGs",
  "key29": "3CFbbsXiE5wNNPfxbH2rvGWHEyWRLUUfEeVVfce2kVmxPFcftKNkNTh5SFR3FPEzcXXnYsh7FWLmsJpackAgDWEx",
  "key30": "5qh5dHcmeweyEHR6VMRPucGS25KsaTise8bkKArwkUAJHZ4aNViCcnrfKYi24Lm2gN4nBoDuc6ZRZCvU6bfRZ5oF",
  "key31": "3vf5SLKPQ2R9axhgA1cm9kRtHLXomiUKf1FG519JBxux9V1K1YXwNQ41xNP4rhrkt4XFiV1spntNf21CKLzwYuct",
  "key32": "2b3fnseqkzn8JeKp8n81yDqsZj4C3gbVNMs9Jc4HtpYacQ91puyhCDR18sVbv6jXjRzBTsWTYXoaBjpeSM5B8DGQ",
  "key33": "2bqSWbsYnVSW31U42UxYbXgfid5z7vTGj3qTKVgRnTJMsmAqFUmRxKvse9tAEqC956Fvx6J24qkp6A6Tycxdus5m",
  "key34": "kmeiVDKTcrh3AFHTT9ZPv8DsQTAqkMQvHm4QoJAmkqA9GWcsUDkJVXPA9tvEow5oTjuChKxpXxDCiYnfcQgaLgx",
  "key35": "3RH4VrVvFDsVjodkAoQGdYnPHy7edBJn7wuyL8Gthn3BrFPjNT4mNn7eqYs9xAVxCg7nXneHrtWtVyw3xMMWTtvY",
  "key36": "3KSiycuLfGzEVpKePdUQCHYoBPtACRGHuP4hpy8sx7nFkCLKy2dDaEFvmZkA8Z93GWB43VcaQBwLw8vLF6q6sY2C",
  "key37": "3vQFY9gfRC4HCHX7YGUnLR778c4uB2tbtHuzxU9ZKNxTuPTjiyWpAMr1hM7yofBsSwJCfhgDCbCMGfBEKGVcxSgB",
  "key38": "4cCBcF9k8fuBswWB4syVRkK2qWaZtBL9rM7if7PLvmCqU5UjENYKfamog5sUWmC5hYk4B3dfEof8PUATJDPxWwEi",
  "key39": "3X3KH9qnqSqN8YGAtSy8UteX92DBuWNQiY6QpinFQuWGXcJmshnafrrBuhXhxgPJDdmupg6aNXMChFBd6EgJo36N",
  "key40": "2o5vKYHexpwukmPdfKqp2MNn8Sq6rznEibs1V9ELeF2gQ6367UgfKvC47GkMNchHGhbTeCp3Cx1ejezdmiwcHwvT",
  "key41": "5aZDaMNA9cv3rCXtXutV6c9J3CQoXRoTKFbGwqSTXxwqEEYmEppgNE9oyEGD38LWrPi4tf7xCKGHpRYMiNpJ6FfU",
  "key42": "4kGXuZmwtxnti2VAdYCoC9xRJz5MBjKDJQ8tkPY6WBFJGEF9WWidRhh7V2JiyMrQGqMrDr3hYGZZbZXhcSWZRtht",
  "key43": "5g8vExjnnimshCgNDuoD93pXV9vv33iMgBnQxGKrJgu2ETM5onjEcba6qXVKxBSyKrpyJgdy5rU1vQuJAJtPCDio"
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
