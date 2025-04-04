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
    "3CjRD6gvjpoUfw6QwSyz2vqtfsFh5UT4QFsZQHKFvJiXYrYoHkXJUawXbGMMR4B1cmJmcaB4tPmNpsyFDXUZDcA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3kNnQi8QxxQWv8icYFrJGuVfv8FSpMBau38RYsCtL5MTqf2J8Fye4fqmoAb9aVfgo73WzxtRV6D1cemHZbyr9bzD",
  "key1": "4s5AqHHcsa5YXdqQWpnCh6NWkS4n47b8pvKw9hSWjYpW7BRkYTxTZRsZPeQJcEkEDmPuovUB56Pr9WpzTXiQLFXr",
  "key2": "517mPQkM5LT83bvDRkduqdb27mUiHDzoHyrQpV8VSTXRgf4gJKwrKfRDMhRLo49eStSfzhVcXr1gNVwEK3jpAdcD",
  "key3": "2XszMPuw1is9L9F6QMwt23tBGoKethKde8XGkF8yZMq424F15ABTVPe17SgSSDi2mEgaAPHAjYoBs465FyyTVtXw",
  "key4": "3xvqq56BJAA5t5NB7UCAeR5kumLmaX2ujpsVEitK5aVUCyDbsx4uB2VoPakgs6LUNiDcofGSqA5tYjmMvXAiiac4",
  "key5": "3YG3FPJGFCxsBH3Mn23j3iLZLQAvM3NM5Lfoym49o774pTVQNSZUuYpMvcK5F5hERNkoE6QyuLRkcc2ggEgmYHvJ",
  "key6": "58eiiTCzMrwct49HzAsPpfErsAPxcezuuT6c94gQwVPP4nPgHAVTqWFKFHg1g6mEjG5Wb3cQvYtW1gXaUowhjXJu",
  "key7": "4PqrtdvSyydiQcKJXyWS7m5BEfUBmkex9iAGPaTHPyLuQp5Fk6qGBm1jmP8varixS6yVfCVxA5AMhZtjYBi2rFk",
  "key8": "2jBEpks31shuCP7eKqz6tMvF3nVmwUwYMMKEZZrV77CJUHd8m2UFDRufRjNBrRjThicawFtvrRUWpdtwu2jEcLZu",
  "key9": "3zKeiZXFUVK6bDR3h9UHe1DevAaSnQxA5xNjapLTSX5u5WkRQVQVSEsaVHkhAJooqaAmNnMvtBNW4uGB1Xd9qSU7",
  "key10": "2qFRBwChGBaWJ98VoJSrGu96L6UtyNThuoHRamuF9Sa1h5mb4dbXAeCqFAb97WiamWVBCMVxBWto3SXzvexo7n5a",
  "key11": "4HmkiHEQB3NL6knj17j26o6mGhW1aiEZkZvnDaNMSCXDEWQky3x1k3DAfy14bCvmuxCi5Sd53KKTnhFN6KhMzaHb",
  "key12": "5kVBEC6WMg75hWBHLbozJECMtBFHtYFdGGvWSAkhppn9d3iycyKRYmxhcftSXrZW2hy5SCjy7FdsUnwZgeXcZngq",
  "key13": "27wMnP9FmiX8c3CE5QCUAHGDCyVKYLPUrAbGRdfnnnaheKTgqmaAJjamUhQC5XvFJzMHjH1ipJy146aBPoLCtFmZ",
  "key14": "4BQ6JsnerXuasiiBnJXJ9KsFJAxxD2GCkSgskTMSbwTZoysJqXxf478yVx1FUiaomoey6XQnZfYHfNLzCyFKDceU",
  "key15": "8d38pb7fzUjTLSYxj9Jqirk7MVVjY41ssxeXDzrTvBveVqGqKErKkLgfaDCYLr1mduKG6GfVNrr2129e3pjMLrV",
  "key16": "3r81mh2un458tHuNvts76uArjp43V79hYrV5LCMJDtUic225J8bRKPv8WTMGBVTVSnCzQfcZvZ5mofL1jCyfMKJB",
  "key17": "4uVyUziGPhioqFqMuqDmTcnd8mQPaU9CBxD4gB8GbUae8dV381ar2c6VW9KH1ysuLoQNGPrNeTv7Tvaq5JMUk9og",
  "key18": "4SWj6qa8UkqhcB9ZhUq1s1k3HmuSz1qPDW4LvATX2BNk6CS3L9DDBkzznYknB7eBiiXn98V75tcPk5Sbi63VnbVZ",
  "key19": "4ruW2w9RuYnxdVwryu65cynKjseoab6onFQS6d55Y2qf91PGKnY32JxH26xUhHtunYMEibZwv7SuAmz1jeWPgfqd",
  "key20": "4Rk4hoZCrgoRLmdn84wiJrc7u91TEGFEkW4FZ2Bq1rc8Kw6vuMSArC19QMCBQiStzxr2f8hZzUGnaEQBS8bWvQyf",
  "key21": "3sJKXnJrctbX82anPtr7TFrWoLKPWsjg9jZGyaziqnynogKt1gxnV7BVtvX7nqshxapgY1epi6ohvJkm5yoNca4o",
  "key22": "4ybnaecAoBPGGDo7jf89dPXEXmSmBEWRpdxJCvNd4moSUEt6vv29tbu9Z9diwfoGNvkfpGWSpzb9tPq31MhadbEU",
  "key23": "qujsovM6Z2wENYE5TVtDvvMVtzw6Xxrgv4N9MTMER2ThJUhfKprnS9jL4YGDwUStZHBXWnq2k5hPcSzY1ADMdZM",
  "key24": "ppzCUWHSMzkcsgiFeR9LE5Q3U5FgkhFZmv1wEtDheg2559TbJRH3sdq6nWcL61FdsUenCzqXPQvJta3sbZ8rikx",
  "key25": "3s2gnMxaQ2dMDvT8wBntufoqHiJJU4ker1kvpt7vm3cTBJN2TJzFgmaUhxhsBYCGoHoahvpx7PWj4jhM4w81nZwF",
  "key26": "39pYgjXgFsihgpwEPW7XpK586v4x3cLugmMTozJr5iipbdQFvcLT6r4pJYE479wVTFks1FukeQoeK8TBy79dHfRK",
  "key27": "uy2YTfYc9H3GPFYb4p9axuC5smgGh7YxgHXBaCWUcTSQMSKvbxh1DvReGGewikC5sDqEG9qVecxVyHdvQkBxPeU",
  "key28": "HDRn9wbUfP1hb5naxKgjdyCBy9k4D9gwAXRg2JJE2bJ6yxSNqVg96AhEcEr5g2Yq3GWvijxnTDHb1HAFEADfapP",
  "key29": "oTvHAy2bPRgpvon9LRdDDgSft75VqSb21KNHJNDMgRe7d75b9jePqkktJDjxS6ALCzbiVkBA2B68rYz8SQHYWci",
  "key30": "5airN5gNzDy1LiiVH2m3gzjmVjwtXE46ENfSwhh4kB671c5ch3jRs4U5KNE1abbLGyLYrcYm3nQ9t4nknJ1kePXQ",
  "key31": "J7faW5GaTikbiB7AEEDYBt43S2bopyjSFtG2ybDHkNMAUvVwYpM2A3i815GTiQc1BiB5BbgM9XJyjwNGu69tyJ8",
  "key32": "W3ripcnxodPb86PxnPqiCA4MZxUw8ZeJVu8BwGYQZA7sJXwar9bfkEA4vV1jCevm1gcZ3wHQtAbaZkDmhYh4RGe",
  "key33": "54GyserQF2uDy3cbvSvoQjrHn3Vh73XzbP1XWxEJBWjPZZyG4Na3q3aht3EpH8k4SGghWHpNawEo3yDqdYcYC5Rp",
  "key34": "5L3UkgoyYxHTYSFZ5zhwwGXZufVrtRQpe8odYMeyWerfY6soEEinCwZTj5XDssyciXRKcCFENrts8bxSbV3dqWvV",
  "key35": "q9c9VbnKzhCNBi65NKNTfRVfqqBw9nxHp1jKSvziAdJoPUCVqkPorY7G3LXE24jiTvUkxAsqzjyww4E1XfVMVnE",
  "key36": "39BboGGwA6FULuzKmGrRtA6HCzUYaVG9MKNDRaUGGb92xQU8TLxfcHKnYvV6sVtpeB4QDDdF18mJW4ZNpfhboQoh",
  "key37": "4PvQK3UrbUeJV1bSp4hDGeaZwDhFRRE3JHHB8j1m5sV1f9RruTniYNZsCY2maqpJwyLXxthF9r7hL8wXS1sX9Jjx",
  "key38": "2JQ6TB9fZy8RnNi9W4LBotW8YLNNUxes6mg5rZFUhqkdY2y5bAJBaXes51Wx4uqE9s454FbmA5BqWzGqZYE4g2F5",
  "key39": "2uZCkND1uhP1GvPfFMeHiY5VUQZoUJNvzihKBXv2MuJ9anGo7TVpN9CDDybvs9MtPV6cyZJ54SETcUVENW6LwhLw",
  "key40": "2ZavLAtNJfgPU9i2rf3Syekwo5MgGT7LivLFQ4FdkKMR6kjhB8uDnXGCsNvemBiveGMGejvNgGpqSf8ntNALBnS7"
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
