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
    "VU2pFczWXaRbrDNG1qCmezmAVdqkGajfUegNfdnbYpqsjnyCQWmbTox2ZafF1mJ6URndRJZZEbkz9X3q2kySBFp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3i7Bm61xsfa6jfYB1K92CinLAcfPwGV7SnD1zrDutkQpR6H7wsgAhTLCtRpDgLzrcgXgZyA1UR3fBANsSCMcbUpZ",
  "key1": "G6hAHBeTwSyB1cN1MCmcE1g7qJ3F5hfUipV1VskR66NkhuTgrLxZR1WqyKHBDJdMnS6y8ZA2y8ZstxoM2rsqF2Y",
  "key2": "3BMyzJrQNh9S9smmNv6KVtdR8vDr9NfkGeUz5Uw3mSxVFDTin364uH5CdSAbhjcsFosuV79x6UCDD8hDrCgezvbT",
  "key3": "3hSbo3MLAEADk7ccJg8S22CLigmgYjdoL4zCRT672EzkzAmkyvH52Q3KTLc1S9JLYewm6moAjkShUaGYNiNDuafB",
  "key4": "3aEd63WgdhLLV8957V6FMv4648mFYfY5VjdfEu5gMu8xH2xjc4dDKMMgsiVVzD6M7FCCh4pNLZ7sqycYxPEkXQ6i",
  "key5": "24y2qGj7o7j2VTrcbandcpToA6eeLhP3GK5UihhttxKwWTRHebmfzhLC5TZtpkScadYVgjF4ruHMdYsvgdpWKA33",
  "key6": "3XqskD25aZKUZxCjQf9DKsFC7LAFkF51mcymL9XD6tthoUgzPs243hAGr92CVjk6WTMR93BTzZqbVDnyLaNtkjiJ",
  "key7": "3EhByTkkbipLft9iHtLZ9UHVFZm8d8rjmNQRpFzCYZpmF8Mquw2nayDF6Lc5Dvjfy9FzRN14yX4SvjVnpQEEmL7k",
  "key8": "cT2VbfouqqoMeCH1EJE3rGJXZe6FD9HWWyxJVGH4wB95oFSTm71h9B6vXCntv5iUonjY9PqpwKjLYWSMhmKjrrD",
  "key9": "5FaA8oLBEJNbwwrUXo16151gQaGH9vgQT1NepvArj99PmsNMnM76GjMTagHiuMsk2zBzdhTA7QgPXjVHvQNZniJ4",
  "key10": "3CsoKAwfQcP2VxE9fFQ6kPLhEAsrTGjWk131P13MxfbUJ1r398aiBpKuMdDp6PJ4iXeDZ4b6TP1DSsjM7JDV24m2",
  "key11": "2agB1emUca9cSwnGaiAPXDWC3mPgzpEd4fWWTMCmFkdiwATUbz9y7nGf3M9mwuH8eiQBBtgGn3goLvUk7Ww3K91K",
  "key12": "3NBVSvody2PBUwVUPmyHJf96FsWnM2LH2UHTBiMAV4Nmjg5HnbjHuFraxDY4GaUyGmSFTFmvpDvF6VNuMp3nzvaX",
  "key13": "vSDiBm5C5CBiBswRxUyJfTTMH6qd8XPCfjVb41v6pAoG6SbY6UKTjcAfrocFQtJb1T3SmEvFqAYhuLxqjwgDqtH",
  "key14": "4qdWqqVV1rzj7TPtnxR6FrtfJFAhDDHsVNKhHGTt61X5aFMFxZKquJyGkGu2xGNy9ho9Ti4Pj49Mtpd18tastueB",
  "key15": "5YoxmrLmhNJwtvBQjCXX5ev2a8NwdACSYCcf7hrC62aNBjfzLwEUYVSohLb3uLziw5ZTdsMsDZYZg8FtbC9Jda58",
  "key16": "mkDy7axQiadYVPGENuHCTirYeEPjvWQrbrxYJ3nRx9JxBb4yfQmk1KW5Jh9Yip4LaPBeNMZAAnF1tUYvxNr2wAv",
  "key17": "5h7cbGXi1iNss7FxLFiEm9jsQsNGfSovEnPcaBfs8S2rDdSdxpu2aCB8VfoGqTsqxT7kSi2dG8MuNgGh6ZzV89qk",
  "key18": "2eKy1WEM55SQxbjR9wp2hkXcHUfiC38cELE1Xgr8XYYiTnw2y7F352N8HzY2nmBEWPLKQdp527NpVpKp8huAf7xt",
  "key19": "23MwoVzqnAiJofYYNaLvK7Xc8XBhT17WtFp9cMKMgz36yNqybU3qheDcJMtj8kSSKs8MsnfzbDrJdKy2CXVH3TuE",
  "key20": "2sTP6zYt3p1VbNpR9idnwCPKFzoxaF9qXXaUVeSgxVt2KtnXtSiUvGSK6fN21SoZp1AjadzmZKUTCA9TtL5Mtjxb",
  "key21": "6652pPzGmdupWx4rhrczRqytdn7xHc13BoateR94FLqWVc51EvRqPGCWe5RQMoLjaWaXMcbnucdpHbum8hcvSwqo",
  "key22": "Hytqe9oDM6R2Y1PT3z5cTHjoQt97RWakPJgbxB7u2dALd7PgHc9zappXcvRjcyFHuY83SjWJQ5qmVxkSg2J2b62",
  "key23": "quuEz2Y2WFgaoN62C8b6d3kAiFSSCdkwVTqdH3HQ71R3mzDL7woYxkgMWaWp7WLp1R4iCoS4Ds8Q99zbhQEVhoJ",
  "key24": "JgYUoyPMHZeUpunuNy2Zmha5MpLrPEHnLuoWeezrvm5GMfPiyUYo5hrYR5x5SaDULebU8Cnqfby74bQt9cjYNDL",
  "key25": "3WAiddjF8cQbNLgrzH6GvrT4AircRYJvnWLDeKRCLkgVq1Hvm5qqaPoG8jpjvavi7npD3ZtsKnNs68WiUBt21zhL",
  "key26": "MKWmDrLCJERRAXVHtNsTdE4Fj7e1rTSXWzr8D8sgnhnSmib8MHaz9F81dBerLNWxzjH5NBoXHECRohFiK1R8wjF",
  "key27": "5hfiSR2AUQiZECe5ExZsPTEhxP2Zm4CTss8qY2W5EZ7d5KVkBAuPJTrxMH3pMX2aFLhhVs7oK9HNLWA1owk8V3KH",
  "key28": "4UzxApK2JQMpD1DsWzmNVm9ZRQ3mCPGRgYCDoom9uLUWAApk3SqebumtHTZo6MFnRjCPhWtMg9K4qSKQJw9YgG32",
  "key29": "E6p5y51cLJPpybZ4GTTnzg2QY28cnWWPHhEP811Ey7x3Tkgo7jPexWHv5vouZCWnHKgJvbc7eaXVU2zXXNfzap7",
  "key30": "4Fw5jY98ZTLTtTiTZ4ZXRU1r16NQT74vc2mzANEMJDqxgnrPjqG8yvDuK3UvBZx1JTYPTFNfyGZCvYr8JUFqQy35",
  "key31": "3Ag9erw3uv6Wq3VafN2Pqk5k7CjPFKBf6vyhSLFCkK9YKuo9nUwVDAE9nu5m6HNu7Uxd8t9Fu3oZVYa37oQYeJ2Q",
  "key32": "xHsgzuRwdgJPqXT87tBJHoCD7FZDachG4aqtoznDBLN6THZVtpWwJQmW9iN1dU2Qo2Kr64646MkUTs3shjzY7H4",
  "key33": "2CDRp3suDX6RtTMuegjXYk1nj4jBzZyVD3GQ4goizt914u7Do6UCeiuv9fhjpwjD2m4dHk5GLqx6E83uHn2nzisv",
  "key34": "4GhWQzCFtSVffs5U19aGKJLVe1cKyMwm19Bc9VBp3kGvVgiFadwQecx5A3RR3Pw8jwv4HzAZW6tzzz8BPrENkfBT",
  "key35": "5kpQiDJNZ14wZKBMB93zvbikMx6p7aPBZB8Ft5Mx4B14RR9UBvSWQNSohY3ehd2ReMZ52hvCXw1rfhYsz679E4UV"
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
