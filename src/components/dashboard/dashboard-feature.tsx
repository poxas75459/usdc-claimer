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
    "3Rnbw2QgLo5qvcArYNJEfNzAkgMjv1546KjcTSYSKW7G6GFzSJ2Nt7kryZAdZkFv8bnhWSZsJG8G6y86qZSwcVVG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53bbSPiyfjdsQn81ZJwrjJKiTqsW2XtS38v8fL2o6bVkikwvkUUCH3WWUsRK9PFMtRje29cF6FNqv5jzyHruBiUw",
  "key1": "QvVLnvbkVsRQgFbnvWNd5dbvpMfry3XLkqUiR13wcU6iLLDXSXCEk5ugG3tZYrEL4xXcCDKGR82dPVij4bBwBDs",
  "key2": "3dY4uhDzQnt1etxyq6zvobun2jYACs4GMEDHu983M5vMBtHPhidynCNoVcq4bUFXncCWnsVhnKmqpt2wCpvY8RS8",
  "key3": "56ep9CAG6fEC8gnWQYY1M22JSH67sW1DVwcmGsFBNyV6uwjWwBkvo417s9VDBAHMK2TVNSwzpgRf8XNugwTcKkLm",
  "key4": "37bBVT3nCUp9hrbc3ZC4P5DMxtkfij77w28az9y7TiRG2wicfm8WXgoqTSRhdgzxuknCTtmD1b6unHcdehFHt1dy",
  "key5": "dmRRFnzuHpadLHNu6DmNvTqWHKPUCUEaQuH3pVyaBk6k5m23ta55cmL7YGvFkKT93PHZ84wPE3gkAFY4opfCRgx",
  "key6": "2tkQfkhnankHZKbBLEjFTNfEbMpxR7eP9NYMKZ9nkiwXSa5pnpFCCRLhmphKRTcpK9hpXVdHL7LzLCAh9bAon8wY",
  "key7": "5ZMY54scGNyR7cxUzFeahJ3HqjijiAgkrdFzKCooMa5CWLaeo6KCpLdd4eaBcnqTKmza8gX2mkzsv7Q2anK6GhCM",
  "key8": "5rFMrvxM1aAjKVEg81Ton5rdVRdLwEx6hzH6cfFBjWQMEbYpH52jUYRkZTeY9rnBrHPGaGnkXm73geMGEvrWZ1wq",
  "key9": "U69E6gFyoAvfuxAynvvseSEqHTZY8t6hbickqY7WGs5eachG9UkqQTf8ssJ8MMhqYodXCQV471rcDShXMCzQwEY",
  "key10": "5f4C6SmhZi5sjV9mHgeqeiLnSswRHP9ceNiqm5v26bnrPZHiqHE1RmEtXcWnChFhSZqhNdWuNvwWeXu6xmVaxcF3",
  "key11": "qSEZDs5dLooL5TtPi4ffwGbuWD8mWb5rmuiMbfvuy21gPoA2wu3sgKSLmZ3GHYhCpL1M1AVVi9J1yCX7bm3dKVs",
  "key12": "4ZpWCxBn9sgYmFEurb8TiggFWsYQkgNvpVNgNt3GbupaCnn77fGTCDUub2GwyrbA7uQdt4KgYRAp2Ry2pNDaZJh",
  "key13": "4L3L2USuypGagfb1JPpn6TUMQy1bMtV2KMFTTkxec7MLSRwVzxmua5RCGsoDi2HmdUMkbB5NBFEBP6LxqMMcEav1",
  "key14": "cbnhF2kfDxG5NW7q2nN83aC861se9uhn316yKtKtVotfQ2Cer7n1r4QvUcyHCPkUXqAt2u2YMok4wQaaiAk6qM8",
  "key15": "3npi4dPbkPH5o3wY4Ya9kRrkJbDaed9wRyWKgdGV1NXaD92y3uERzAiR3QygNzHpJM8KFBgGQc7q5D5jH4m2qTQG",
  "key16": "4Kxmx6FGmr3yrQbPmsZngPVmodzrVMdomfeexLQqgNZJBqLDsSdXqeNMmgdHeuUqz1fENZG2iCMq7mFqbjiUL8zk",
  "key17": "3noVuicrfmt2XzWRabHtT5Z4j8eD17PQGgrykKbqjbVtQ99NFtbjXETgVfRBzmRBJJLzm6okTggVJJ2HF8uNU5pz",
  "key18": "gWximCXgnH8TNDgGAJTSyMjze2HqKhcaKR3pFTCGzndBbcR68RkFj1YQpcD42axh8umDhfC7z2jnysSJ5p4U8Aw",
  "key19": "5YF4qQSL11AmPfd7iZo9DASLR9734kR68KW3av1DUKAz4m5nHZYLL64kzwwG4KWbXCS3vrhU9KQiPHmt8tcQzKYX",
  "key20": "4uCYmZsLzCYrjzsWTVfuigcvgDD76bv9temR6qibF1YAUQukFCX3N1vUQraXVXws21e6K2nXpAYiJFduYXxiVUcp",
  "key21": "5qrAbVSBD1fGVWne6mZmgAhNEdm3pinNnf5SeHYEKXtCs9LYN5yv2aCbP1j8oebF5hxdz2SSgmZWiU4mFezg6VQB",
  "key22": "5Vy3huuCj7s56uKKApCS3oqP7n7uxY6uSHX6YSdkzbBdL4RkZwaHmyWyruP1YF1PqYrAYp2XbQVSfb5hZLub8Ydo",
  "key23": "39yMJGoyhX1EFXq5hMLaEHPLd4tvHEWjJUi15DdEtvcacrVMYoZtG3d7ZdPQvxGNPkEV9AYDbWEsTcg1AAuZRd5R",
  "key24": "5m4q3SP7KXkjjpenybNGRWCaLrCVypacW9gKaDJzk4bztQjSHmYH8QbgvwoN5PvfQa2wuuj1ey2e9JgfQ4DFkj2Y",
  "key25": "2owi1uVB4LUNiJbXyeb1vthhQcRGfmy4bBZboNTHKByK19AzTYZBWFr3caNXnqKYBs7ZLJdeGEMhaLv8h2SXVbfY",
  "key26": "3NdFVDUxRUJ6mJ9YSpVAt6LGVv1tGmbqdFCBy7F1sswfLQeEQbr297E4aCt9WR8depeCtoE7F2sop4GH65DqM45e",
  "key27": "3pw69cjbApY6iDdPX6uxT7EDLcrYnAap4kmeQZ8aqX5XFFR1csnpnv1AiR2xeQp8TLRCqyZFSQASgpAXCidrktHF",
  "key28": "5tkPww4XdUPqGTaw6Czf9sFcRpbRbCwPL7AGoix3prq4rKn2JRZxJibVW5BvFzXhxWpfCCg3nJCP2JWiwqVnxaQs",
  "key29": "2VT3unXnbifLMc3skhazC3FRhpbVQv9Jw7wo632JtMmwizhNXkzDbb57KwbSWJku3Jadn5c3WmsUspGhQ2g427AC",
  "key30": "5W2xV1myMVqMXdq9W1ZXVixkyXkjvHZ3AXseRCbQYLYQYL2S3LxfGMzfYk66KGQ64Fmy2BsVMayXeEu4FNRqZwYE",
  "key31": "4rg2spB9iTQz2iPjKctxjsxcrZ6ETsyjGUBNUWUKd3TVCM6j3LenLFqjWHhMsMYXYu7EKBqVzB9PB8GVQP3QzsbJ",
  "key32": "4Kog3x5byuUj8h8PyRRN3ZoMwdh9PH1yHr6adiZr57ZbwThHP2vJcAMjXVrv6o1NJV85kfZ5ufCpvqziGC4pJRDw",
  "key33": "DBzFodJR4Ey41RLaXZpertUrRzdqw2cxiHFowHQ7BFpgHZbc7cVeYZk1NhzkWkK6YpxZGkhEiVgxzdTeiYdWNQ2",
  "key34": "5n3diWdrZiauzxGX8bW2vRmDDiWoJqe7Le9n5JPEHhjpqZTnuwXhr7Su1i47dh318xiUpzCLGUZ35MiBGirr8wq3",
  "key35": "mAyDJf9mDa3V1kHtu8xuZWV8YuwaY5a8gUvB1RNzGeiQtGGJPeXCFk9qdT2B8RGYD52LqnGt5eJgz9oHLvNENF9",
  "key36": "rb2hz4Lg2yMeLtfhFCSXDDLZToTwjVVbsK4LFzxJujNAEzjExN5TYYeJTZkKp1MBNpKVm8vcSeYGMAv7ZUeWS4V",
  "key37": "5JkqzxRWyKbJTdjZUys8798yQ62kYovcw4PyfQoCtDvqtg3eRYgwF7uA94vE4MzoGByn6Z8ewcWcHhXL3XnFUj5C",
  "key38": "Ewx1TZiLs9ccqWRs1kxyvXwfuyKvLTiFpJS163w8UfgfUZdupmKNsySgo7Fz7Q9cex6QFwPGqJ3tgw32T4nKKGF",
  "key39": "5Ds6NnzCgkfCAYM9NZY67Z4vbG9eevHL3fsHUMZLimFVY4RQD8oojhh9mriYMFQvaKJMLPpFq7FNFRPZ77onLpLH",
  "key40": "3bLAMQaB5ggSrdb95PxY4XVjh9kHKrx8gLTJxva7Sw6piEdNLf7Cjoyd4inudXvhKnmaqUQt4APPVYKQCWWM9GMW",
  "key41": "3mEU8sEnq4WZRQAHcamfNnferXniqfmHpeQfHPUDoGtFA9PDSeZs1M9WBtRqDbkbDK7UrUpZRzMf4SvPzmySGg5E",
  "key42": "5uaWzP6f4hhtB8THZm4cEEunxpPt2aFcVZVP47Byj7YXJ1u3o4PvYyg7xzx4z5iaWSVAuKSM52sw8HdkHjTCmgHd",
  "key43": "1nMAxyxrCtKdk6CEc9yjW3Few6hmZXe9zUASTe4nRTfUoRb3i5jq2UZwQQtTijqhSW8CcMhQGAcvGLC2iCaR986",
  "key44": "4qtQLEPJEq1icniizu4Z4oH6pnb2bi3nGWa5tajcjiuvYXtFbZ7yHZNNNFbQEQpFmuyotASEi1hwxZCKcHV7ztw4",
  "key45": "4ALLaFM1muq2GWbaYpgMuB83QvsNdpPu6C4cgz2Y2nzZw1LigDv2Rkv59DMrpEYGvUzLUjgdG5jxEekbQwbR4T3u",
  "key46": "48XJrBJkX5T4aHTQN4a6EfMQykV82qrV7W7Yqr4Tb8GYjnK8BJ4DfcAZgXhjUSgdAyzbehjYxmTfbky6Q9m7jfi3"
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
