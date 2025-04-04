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
    "4yYeC1ocsFF3sSyquDxiCJXpA9BzWtyyqkuZzB3kwyrcnmZRfD8fTjfjL4iRDVTeu4fmR4MDPQmQe5yQvo8MSZhn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5cB2t9jzWCmBrLBfBMBfCKJ8FjvjvxsD1Vr7p3ADhNsGzaMSNVrwmyxoD2xtmyxyVrnESCZGHGbnAVQ6ym5wETEX",
  "key1": "5USJ6WsgsjTTP5h8hAUXc8aBxG2NcXAdWdXyoPGdPeampkhUnDHruQa9x7DiEv8H9qwA59FNPxW2Y44DLeTg8Eqg",
  "key2": "4jPBxsPQSuSpUKYtthuYBNB7A8jTQdGVCKKuJVbhzmWeynGyaF7zmond2phrRZvV99JJoSyMKGnAhq3iQhtH5xvD",
  "key3": "5mAEDAYbCpu74jZBqznKGwphHhc4JqzBTVbniLwNyvMLXhaNbMw2gsCJV4SH1uqugXsmiAHM8VtfY3L6c5kFSUAJ",
  "key4": "2WXVzMoVnXyXNWuPXgxPPZKNtEsKX4xcrynbemkreksMLsekUkD979jnhX3aGYtLep4t2ve6FuSuwLG2idG7QofR",
  "key5": "31aUeg94LfoEPM1FzXm4N8Aag8QF1tdgmqb4hTbTVhVUXZpwTQ7TUvwxSBSwJfGi4JYD4hvmoxT26i1e15zeAN2W",
  "key6": "2HKjPtynPJEga7EhocXDNRHHVR5Wiv3epqn8kCujqfYkQBV8gMRVyh7GaFs1jAXP7a2g6mc6GpyfBKbHwJvYarU6",
  "key7": "4L8CWuYGXfEHCD9kevNJZ7hH6A8FH9cJBwCFi6dD6uensx879GtypmGhtc9GhbBKqTaX5wSYBbKXmGrZVphdNr2x",
  "key8": "3w3VryXrs2V8ohakyB2nHkH9ah1xL9Kf8ESy5yfJASzxsKnyydjbDtCrTKE2vgML8tfTkE6Fhxq5AFMtT4jtmLya",
  "key9": "53UukCT6DBt4CuV3de1sSJggoWQFmreVVYHRBen7wGEiqmZsFs8TRVfg9omzhrvWmkFNneLZieeqa1BfZvCYZq5b",
  "key10": "XSvzfEMLcTUbvFnFtFm72rQM7nncxTbT1AemxvNfxGpPUUB6Tb8HKC3rc2gujaGnTguoevgeo5oNTNYnLDLHQhi",
  "key11": "39544RsdzGgYbYJkTHmWqexSrBK545stpCp6nGkimV8Nibc3Kw5wbkiUhiGnMNzX9UWMwEnyvPsSQ1kGJUFvVN2E",
  "key12": "ZELxZuiKyfAahetbhfK7C157BLfZbC7kr4U6dC89WNCAkoCF5u4wyYHpAi7g2tT9545tQJgf9nCt8XCNy6PM2wg",
  "key13": "MF5Y7chbCLX8DbZjZJYA7pGEoVTcouJDQUj5aWcL4GBzma5Qo7NeCxw23yXa9QCr8swcnMKCk27RWhn747hmS3t",
  "key14": "5jKx4SaX6Dak6riT3YiGr7MCgC7XUM4deHgGSVxJvk8nvJcVsYrVUWb2rpeM8HEzDNKeH3CzX5Ys6o3Si2Hiu8YR",
  "key15": "5r5dbV7CGryLgixEEeDsMjK9ex5ENT6Qn6YUDTvXTmkUUaA1r67UisHo1bkGiA4meskKqQCFvmKHn1SFKgYicCZ2",
  "key16": "5QUPRoPg2HHYt5sv9s9b5wpfRicVEnYYujwGTCrWHjew69Y8Dk1r11Y5mB2wDgy2DwiNdfsR4sk2iZJtC4KauhHd",
  "key17": "5fiSkWDxVHNerWdKW7GLv99vGvg15oj9Evyh5aC9BLyEb2na4Bfkcp5htuKH7KFSk4n7NDeee2p2BFYpWKB2nvSb",
  "key18": "5GBG2NwN7RaLW5w57crc5T6utgNfP1FEJvwQt7SBEZmTdJqT2zbHdYu2HyGhnibfiyN8mDfnrMpXjtqg4SE5nA8x",
  "key19": "2KFUxunncuJotd1GiPaf9q1rQ8TwJPHrrQy7ArYxjTZ574dV6Hr1LFKnuN1v8pmgmxrBcPjmbrLt26X5PPFpC2L",
  "key20": "5xL1MWsctbhwoZeh5j4UHqArgD2VWuceJLx4DpXzGWp2uKp2ZX5kWfaaeY7cNakfjDUmNkJjgehnYYsoDnYAUwPF",
  "key21": "99abViAq76oJjEiqNSmRuVtDFaWsbCtzsQ6R3bWGAZCt6ragciHBuunGWAXrcgjzt2UyjtD8DUcV1Kp81v4gijV",
  "key22": "5Z5cXsZ7uTEKoCG1PLr5u9BuhpxXAYZdAFPLnWDh8ahZpg7g7tckRBha1MAWRcKtabmRenx2cfx8XxKbTzWogyi2",
  "key23": "24DgtGqm45A7ghPAFUfoo3vHonEjqj8Ky6Qrmax6z3VD6dRxJJuFDhXczXCTJdoM9XFrJRnEdMjLqxdxjJH31oMX",
  "key24": "63HYAtRztfWfp3XPXmjSLshnSsSLvQj4yabLWH3TJzmN4mJpM8bHitxhSeHQGNvBpnsnRmNGsmDuAapkvFeqXV2L",
  "key25": "3CbpXLXxzNfmHKSeo1tc5AgbmqZMLCHAwNuTH9UxsnsCwjFSdKQr9ZixBpS4S6nbPqDsbGfjNMjU3sCBwJUa7FTm",
  "key26": "4k27xG6SuLU2Buuw1gLaxLsk73q7L9DZ9jGid1drNGKQSy1kW1YWDbqXCUYbj6HkyCtck3Lkt3vcFa3QEbUkYFKx",
  "key27": "4ScTjrdi37n8z1A7nomiFQhYnWX66kxyDvTPnX8gA3wcyATzipLXz8P53cXdABEiiM4pZjV4eKYESNZXs8RWnumn",
  "key28": "3EKReFmvimJb3MvKVhaFMKTTgjF4E6dcit8uoroigi2MXcop7r5b9iroPjCWYoQeDsxofmyNtxAi695w62bMDSMX",
  "key29": "4rmUFgYWowVX6RRXMEQ6d7yaBsqwCE7xxNLGo6fxiYoqtJBUTxiopaeMZNEPe4vTdAUdf11wq3mK6LfdXtqMvyw7",
  "key30": "2rrmVKUYfktaJFBZmiybeBnec9R2oreJzpov2CDspUEQvyP7jfoSmAB63Fqj37yFqDuAWh5EpxyGNNYtBPFvHBUE",
  "key31": "2HNq4q58TppECT5sxYhK7uTdMXu43Q1XAZC79q2RDyMXT2DE7mNoidxTmfDdjb8yrkNtu6kLLG1JWnvBETYhy8rH",
  "key32": "xfna5N9BpxS1uiq367h3jDBfZvzyx7fj1y86S2Q8AW63wg98e4zFPYcNaDgCoShTDbVyZWQypRH2tk4AVvWnwnM"
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
