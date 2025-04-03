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
    "2AqF5k6mfi9xwHxERiGiBbvBxhpUyCbTSCBAURb6gT53g8n8gCdJJEb5cR88SK4Nvke94xRSLiij81UgLx43x9Eb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4bR8LS2hHyxJBwpvJcYnAP3thSC2r69qvqETd4A5TurzUaFL1eqm1QjefP5VskdEUK98by1AzLjcuRarZiPnbWXq",
  "key1": "3F8oiP3yeB4trSurgbKsg6J9icqWuZ2NhRoLu63L5GuUjMy6cEui5TduKSj4p31T9EoJX3r3dXJy3yrDDL2JUyok",
  "key2": "5YRVsQzVpqvQZo3mwMqGyGpYDoab9xHK9ijfH6cant3ASizcsB3MzKkPcGudWrsWrHH4d82BrCyVhAE7BCbnmzY9",
  "key3": "5PfgZBjxsuyUzN76Gne1r6HkPjWrkW68joUKXQovgZfEtWYMN4raMF8N88rCpjCH4oNbKBXyUpMaaNEjfrPR87PJ",
  "key4": "431SCfddHeWRTvb6BMTjYvPx9FMjD9n5x98FpCCDWv6wg1uqmmkN79ZsiozYqDKdvc6ZvVL47w8M9KCsY6XdxuFV",
  "key5": "5EMNcqX3Y43vgJqtUA4mvTXLniRDGEoMWpTPjQ4fqZimZJeGhEj8LjaToK4kVPhWfnQDAgX2PvYWMRM8kD6usJuT",
  "key6": "39yiaiUrkrUVMvQgzqkfpYWuCpTp9iH6QWv9SUwHFLqfxEfDh6DEHR7s86NgvmHZMAi57WFr6vTgWkXwyktkrmpN",
  "key7": "3j7nwPx6UKaUHW36FgwxGrfi6DFqGgPqU1EF12C6AvzrZSkfUSY3NDCedPp2KYVY9Jo1MXKucvJcQtyyWLy2uKm7",
  "key8": "3Zx2gKcfMt1TMeTQzxSECbddRM89Ye8WSHGSPKwSgpFti9ZbdFRkYfxQ7NaFuJ93mibV1QEqGTu2uQQaUG54ci5E",
  "key9": "4BZiDEsPSNfeYC8JEeGj9yG1cMpKq4JHtNYUnaBoKyiXsHuw5jdmbJNssnQQuxhAS28x9Hm6qV8itubSpNH9EVbq",
  "key10": "5PaNe3FdKdtq3CvDrBmY4B2rTTFapMRj6DiQT4TSwDyBNdGc7qhZZiijDZU2Mixa8ZEtFtmtPM2uCrycpi8pR7G6",
  "key11": "4ZAUvfqVCTDnj1KAnAau9kTKUWrMJ5HWT9qb4Cme7SvCsBmcPB4dta6jjJ3HVpTDPz94wwbqsGZryQanNPLj2Ucd",
  "key12": "47ARZ287Aeu7MVDKDgXSwuhHtButJEKHoxdzDNx5cAdzoHMBDfpTdqbuNB2JVTsuV2ceKY1hf4Xx51appPyh2HFM",
  "key13": "4tt5mABpdr2MhVU6YrckZTF1isWg6CA2wGQMzzxvptCnsHzuqgpkrQh74h4R4eU48M6HbviX455cBWaYciNLPqRY",
  "key14": "25w7fuqSf7tFcuKjD8hyPmv8Zw5vLwjZ8RGhenQGT73bdLu2SQfyNGcdVbbx7DRU5PngAbG3x2B1LpKuQqUxnjM5",
  "key15": "5GvKxjJMAh53wBNSUZd2eqW9iYC8a5TXU6tR97Kzq8Vjd1GXwDMs1z99Yj8pS3JUpKBNFCvodPCV8xBbn5f3E4Jx",
  "key16": "4zSzjNxdK2K3cxF4oqoZgCyxF2EY6Kix1czBbRNxfQZK4ajEDsBdAaqvkMm9m7npQiAxtkjaqknM3z3azFcrKbUK",
  "key17": "2sXaMY1RduzU5UNZyuj9weyzppk7tK2CYiwbWt7Ssg5hPEZZQNgijcBsEfkw9GzEUzLmzZeoV67BCZEH3STJhHjv",
  "key18": "2baLSm3NPoQTTph6QcFe37n9m2gyygUmPoxQoAvDDw8UX1rMpFaTAbdBb2JNaXy3wsQ5kdYoGZYmWGoGxywiGRHi",
  "key19": "58BuQknBKvmrw2QQMQ4ZtyPSfVhdEhuUh184cLcwgNn98rooXXwqCJ7EK7f3GCtEMFwVaemJcW9bzcdBa9ZKcg4j",
  "key20": "sUuYvMfjq9Mq6zi7Qw2apn8d3jZRB2ejU5S9huegRfkPHro8qSrWpc2ixvVYHrV3Fprq9aB6oSCoe8acpYf1X6s",
  "key21": "5oJWLoaaSt4x1d9jKLQsBK9EG74BxBT7dNdyZg7YmgBkrqyPHHCZhWMY8BUVo9ix4d7MKFbFv6sF299v2UyzdJgo",
  "key22": "1DJEd77vCqNdq8DBjrQ5Crq6w6bwewnDjwWuFKY4QuMzcpzFEf8ZHDN9JxHc1psXWfKAHP5PEpYNNLUK2sgaAVu",
  "key23": "jWDRsKzbZC8yaDmMQV7JeSkRQM3E8ghH3r3UAKWCSXde23iBikr7kfRDnfPLcTx46RfF76TdZLe2qKLxC3cEEeu",
  "key24": "2v6FTTP3uSLSCv817j6UjBcKh4PSQaYcPEqKgWAHccrtsLtKwb1RbS6XkUU8wDeAgaYinwvLJCQomKPGB8dxUgRs",
  "key25": "3myKJFF4BZbFXjojta1u13yf3TuHnJ8NyntBQL4rNRmk3n96i5itWcTVBmaapfs8bdWdLS34J2vF8Ty7S3FXVqk5",
  "key26": "3AA2KjdP1fAhEw86qef5eCZJCHkfup8XEreyFBDJdXNMzETqMyjDFazXXxVco1cdtK7fisPLDhZYku8bKyTbH2Ap",
  "key27": "57ZAmeDsKwaEUWCYUbnL4L2U42aHtzbwsb45tHMBwVw99PrPDWx8rJGiN79pcAz9prb7ABZvNg8P98CnnKbE8cR8",
  "key28": "5Hi3N2AWwyyLW2Ci5TXVt7C69n1mnuVW7EGTr7aZ4SwuqdBX36pA7n5tnusqqtxo8TQ1EFtgK5aSyWVzZuqyK4YL",
  "key29": "2aS2DRzfXbpxhou9y2PFuGsix1gtqXLpXN2a5M41QRQRUnFS6EEU9WP8DJf1Lh1FqSvdxysPsvv7EFdjk9rtsRcC",
  "key30": "oCEQ2jVEe5VRx2L7Y8uahdg6YU81GW33zH6udLYUKnouzaTCAwSuBmEogmXkXHM2WR1JCvs9oQrRsWyQLU4TqtW",
  "key31": "2HRUZk1RnBReaZCBS7oEbB4RuV3HDsEvW9YhQT21K1qtrUwuvv6YLxoP8VEzC7NQkjzFQJYuJvmc9XHZubDq2wT5",
  "key32": "35zCYy1KBdbowGDMAXD2ZWS6fAaNf3Lud2ud1nCB94D3RRftbPN1uvXnAMcTvGJ7vUMwx9LBzQBR23ZpiVfsdLrA",
  "key33": "66k13TCXLoamFHo8CrffCLgro2bmP4LJZyzD8oVrzDqyuxSPik5GSvSC4QRtdyjpKjgXtSXGnGJp93GvR9UVEnEX",
  "key34": "4aj9xYNede2pAuJVxFschbFp219NbZrCq35NeXXPKf6K4w3Na2wMMUf5AAMtXqmjvAcR7mNhbLjmFaBCC6fZGdFN",
  "key35": "2A9e4BTB5oHDwNtmpbY7T81nV5Cr3arisFVR3CrgWk5cZhdjAZku4FyxGsnocxEwAyAgUMsQQVKwAN4gtujNo6hn",
  "key36": "2zn7iFauTwaHXyVQCrtQfyLtsckmiYWqNfX2uWbi1oq3RnFEjs6dQMjkNKTqjjGLWvUvMMUnGJEhvVJrkW7E6Fmm"
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
