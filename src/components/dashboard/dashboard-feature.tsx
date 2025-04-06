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
    "28rKRzuz3X9LR1NEufM1X5i2Q1cfwkZDjSz1JCCsjP1s1h9QPcmgTEsEvZZaSkfxLPSWHJd3qNwXVWQtuyK6rHKj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5mm6gSFNKz6emvcfLfEY8JXHz5ofN1fE3514puAWwXtNVQfVC3WdRW4AqZLUywvtzqmo9y9N1QmjaM1VD8JDaj17",
  "key1": "2xS1SG2pStaefjSv2TunBkSX6qY4fMfwsG6mxn9okUeZ1qvsDzwQ7PMNhFvwLy9J39pstphP64AN2gS9aHpW4s99",
  "key2": "2rrscmiCkuuDXYV6UJq3TSsZgUdsvxa1k2VJPUjbVFm16Z3wkP56d8gBd7nHqCogsimBKk3XmjmfKgm6Qfzu4GBm",
  "key3": "2vNocpNjgh6enQxwHv5oHMdneT3aDrmn7mFHUCavKU8K5m9YgiCEqYy7WMGjmFAgZnJw1PK8wPgmNnvzgZh2uwfk",
  "key4": "24LVwkAY39v7g5ks3tALqXe3K3q1fJJHdo4CDZg33K3nY55zqUkV1K3JNGkm49uJ19BZK5KwhJG3nDdGWMaPeUKH",
  "key5": "5CMvEQhyZ7iGKaeNj5snGRsoEbFYa6xkDNb9T9LhwhB91kTYNjcwoedbbJKxZ2RRHszK2rCGFx2BvvCjm8fjvg6i",
  "key6": "5seLs9cBoXvMnXq4hmxYfeiokFoyd1T1pq6PcdiGN9undxK4feH2VzS9VwHxLUePYkxMAaWL5gGqtmzJsvbvB8Gb",
  "key7": "5yLxNcmMbchHnqhF5WqL6CsFhH8axTyFVak5C7Qp43WU86WZcNXWDaGKQhLZrDWUSuN6s3pc45WC8WQhAg56fQm6",
  "key8": "3sLwcbSgtNoNPZRXsv5swKLcaZjtvsfovxtGuQY2aKLxeYdacNspVCyVvT1oFihYDZ2PgisGh6iNCTnwMz1bNX1j",
  "key9": "2kYNpJSYrngnBDEjT4om88WACFzdbHqhYUVYgFkCNrGvXgQFepNVxLY5MEU5g35iMtYwiqa6mLYaivAkG5fCpb54",
  "key10": "3sKSqgA17GvntkzVgw2djjSjcau7VaXPGbkjNq5ot32V8MgZhmLfVTm8VQKsfQixyHSwQZTr8w9PiipZtK1tav26",
  "key11": "5deGfEtMxCtUYh1qV8KS6A6SQzwV8wvP5j3oPE7s2NGsE17EoocureC6BMbcWbbjsY2najuy49cxXtLr5kKHmyzn",
  "key12": "5t7bd6zm4yiEke6qTiBDKuL5gjS8LNoTpkvDSf4SAvNGxiuAr72vjtXQKWtrwPft2Gg6RwRHrNnG3sK1VDkZZkWy",
  "key13": "fKxFU3hpgqoyAXeqXCMVfFBZbmD8y6AJN5gVRXhXVfVCgWFPjDDmU64arMFSkcmNeokxbS2TsX1ZsGoKPmhUCW1",
  "key14": "3XqaczgBYiP8qykQ6S2WAMH4DCKrs1Ta71ZabkqovmRpesAYLVoDMVrRdAezoZeoDK47y55r6Nqj13md69gVxLkF",
  "key15": "5WPxch551bnuZtK2ad3qMomuZm7pAuvuWEAcXvCW62nNeTydrUGwSRdFJthWA8UD6wfxRpQSZDjHoj3JGUzzaU4b",
  "key16": "F4HqfLECnUgJsgY3y7RnN7BcDk64aEBjL3SNFnwBVQ45MtWWQU5z2vvkyVUtKut2gbEoiRAaycEDpdWc81EthDR",
  "key17": "2uuUFzMpT1cc2ZQRmReDS8fH6M4RiV3ngvJeu9jK42kPREJSUD4wMhHrBdND9Vs5BDPTL2xsw1HBT3PA3j5KmmQ3",
  "key18": "3PZQHXWu8UWWUfzdQTifWqPwpXhwh94evS8hz3MLAjm7spvB5mZHAHWps6ArcSMEAh2oMvmqPLXUhFtBWQ24y9t6",
  "key19": "5jCcAvTiixswGyP6TFcEGYo18Qb8DFuCe3Xo27bw4S1oQYswjT1KMw2gF8nAxLF8VX68FfKfPpKwQsFHoy7e4iH7",
  "key20": "4dXgpg1VyRSbWgo9eYKkHJutAyvG5MBJmkAYoGJKnKiR8Nysqz6VWmceNeJPXDtWwZbfKZZL6wu7jxJQg4Nyihza",
  "key21": "3B64KZvPW9FG4F2cKrsPd5GUR4UK94wzF63c3UPreq8uxpZzxoBXDjz17SBp73E9ARux4mhHn2tNkhcGR68XEy3c",
  "key22": "4okbd6W4wmD2NH2tKWt8NoNDYSx8FbvL1hsorheAWhr9atMzZKZg6sAzv4X3ADsS9o3hrTQzhkdaV4NQdHmhJU9B",
  "key23": "4kLifh3rAVLKXkngxdZ9SEeY2GuJstVkeZDkXq8LVYDsCoh3c1EQ65wT6Hm2xTZPgSYYFz2jW4XR5YAWbTf2Q98H",
  "key24": "2axy3WR67uEA7afpng2K36jveq1Mtk6JVVuhec6nHsLR2YUqtPzrwMr1E2JLaesJPLhT2RF6EAfhFcotigavoM3f",
  "key25": "9QzB1fWeu4BE9a2Zv6LYWNmWYjSsajUTG6idquJVeYuqC9QEmE4fiSVPnhpHUPYkUkuXAZ2h2AVGbjmoufkbjLX",
  "key26": "4eqvCYvx7XEsrVV9fTuVc99yJC9UDLSxZh28Zu6UYWjjjPoFA1QpPxn7J2vgnELxhLW2Dzxr7kxXC9rQddoxt6JM",
  "key27": "3UtY2BjQCWk3wWYjcyHKfhXFC26mtKwPEwd3VGFQJwtPRMyUwwptkfA8oR2qPy67x5KZceShNWsCGV54JHXJWrx1",
  "key28": "2u5Y4XTqruuCoHB6tm5URoXgoE1sD3hynUUd7AFDbM3Xrb9zxbBfbNA7BKG1Gy9oRbM1uoxeqsCxC8SYS6umrzP2",
  "key29": "2jaZ6EpZQ1yeLhGQuuKWrYTy8TpYcF811s3TCyE4Yz3QnjqAZmz166jrBb2WLtk8yPtAhPKEmk52FtueiswjMpTR",
  "key30": "2sb3ZykvH3JeGZAGtjBmG3smPCNiH9Mqs7P5NSHg5sKa1p8UVtEKdj6XczQekKEgAiK72eFGc14zyRqzskpgL1rZ",
  "key31": "556xyhY49SNE7Sme8iRtN62TPyw1YQR2vLdEFWpv9tiRJ6JoPd9YJsTM2NCPx4BEBxk8X9qUxQAuSBN3Y6onptav",
  "key32": "32YoPVVt8JELu4KfM6TaKPXx5izCRbwTx5mn2Cmvw8gwCHYoFsbHQymfT2EnMy5JpDKyLd4dXEcsECXYrGamEr2m",
  "key33": "2qbLrTUosRdkLAh7GXuVCtBGDNpoXDwUa4TSpgo8NKWEbQZofpT276TBBkjZ74EE1AxJhvHzjqQeLweychkoua5i",
  "key34": "63a1syvJq4P7SmZcYwyPnt8TcWG5NNmcrNtWCP16rHS5qw34CcBYagX6a1JDLVLgZ17qQiyViGKgHxKGbde1Shx6"
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
