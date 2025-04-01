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
    "5HKBbNRvfuJFrrbBRdFqmcKmRFFpWMCYEgFVc5KAWKxKiKXnEX6S1CACzQXy1K9LEgEqV6JG1dguWUwa8Q8uEY7F"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "XUQbzd3XZL4giANoqQJeh1DCEcCizuSjUbm7HEDp6ELT8rv5xBtw9on861aLdEEPLYfTbXsHS5sWaDpmZZVaNrV",
  "key1": "KfkEafW4Yc6eMZJFoen3ubkVF3Ku2VyhGoeFAuQa3FfUwmwWYQSMUaV5TD4wT16qd1giXADgs1KFoSXyToX2CQ5",
  "key2": "4GuWsfULWPgLv2D44D8xjbeLqzHFLtTVLNg8qfxMBHpup5rZ4hWmdYBFdzRD5vXs7YoqH74MFvFW2g5Yk4vRHqzF",
  "key3": "4V6xDuHTxDqZLqrqJdT1iZ9DHp9Qv6CLNK18XjZohYGP4xfYZC6r43aSpgDWjwpA4Wg9UBGwRnX5sHxpaZUPjHVU",
  "key4": "5Mm5LqsRbz6u5o2EuAQiNNR6cPXEZaWGSrKUK4pewW53gJyPmzfRBQMG6FZ44Ntwsfa6UMiuQtvSZoMUaBRnLnSV",
  "key5": "4KQJrYQxCRsFtdUR349fcFmJQTE9Pr7zgK1YmrkwY1FwshYiCAMWhRanRess7ApjjwLSmroLGNfH8BtcbWjeENEQ",
  "key6": "4AS6ATGRcsPaGEo2hardLHWVb8iW9CrbyEbUqsyNP5tUf2GwRhz3p2dRZYN2GqeepVe2kTRWf7nFuPd7zng9wVNt",
  "key7": "C6BBYVZ2z6o9Y4Vmzq3LhZ8FqkKoKhneTMJsgNrJkVt2vFS3zQkVUskHRYet3SzC6e1wkojsC4XcgrSs2Qf9Hdw",
  "key8": "2nwyWcH9uP8ZvRAcJ74DAY7Us8Ls3XH5njWZ6bnd4JP5jeC9GUoSZ82wFBSa9ZbXR3cyFCw9fhNdZR5gKLM3W9TH",
  "key9": "2VSjrEBcv6e2ic6aFSM5UYbvZsXgVFGeXxXhhErGzdCP7UTfwLoSmALgRorVDdbfns5TKRKG2FabFZNtk7FkaEJQ",
  "key10": "2ftAuBtWj9ZP5YFSSEEjgvP53md2Ls78AsYkUKrfJwnUgiFh7RWTbT5UGLgciNViGNHCMtXxm5ZNRMPbJfcVeL6P",
  "key11": "2N1S3H5sxFrswSgjU8sq6Pj9q6DSENHP1JsvPvihyNqBEQYd5eJNNy2kcxNNfZM9eEVyUEJCayPY6rytbJixFgSk",
  "key12": "3xLvLF6F5jfvwPMdTnFbzC5tetnU4ayfKNZ5HPHBgpVa3sSRRZG3sPCwe4hmjSzV9rLhMWwAa1djEhdeTMuaj7pW",
  "key13": "3JjnKKL8TMTFxHDQ33LvJQvoHLKBe71LmbAgKS7BpdRBk1zsHKzNtShoQKDJSue7mH6JPJcB2zMpFTY7gVn49VHR",
  "key14": "2FV5co5hr7HRjptQXqZdghA9ajk6RHDdVPXCYRjSo4FuncYcCW25Tbfyhnyvj7sQDu7fEENk8r2kgd5ewDSCxcuj",
  "key15": "JxJHx7HFgU1wreNv2dRDpiyuHq3erAVfqma6vCdAB41vgksNR2CvXpBYMxFneZpKZncdf2JaTETQeBBTTPqLMsN",
  "key16": "58xzeJQeoCGtESsUKQ4nsZaox6WeigCAMhNTpSRcuEodCXkzkTN3dYLxb9uw2TweaaCRNNJ5u2iK4DudeSv8oTWN",
  "key17": "4G2Nmjdhe3mLfxH5hmw2Gpge2xtSyvYHRbmrkFkgzzuwA83G8hRmAKdePxRXXPBuQbym1Ng7Za7ASUmiYkcddp39",
  "key18": "3Vzh6HaQS7i7toyKGzpvq6SDBMfFExGgsnot7KEA9XHB2CwFkYxkwSW2B9ev8f3hTYoDMQoQJLxtJnAoJAe3Zf2c",
  "key19": "4P2fATbPLciTsiUh6Nxg9quQY1kX9skrPdWQYiZxxh56cirJ21VKqktkKWTRoiJZv9yBXJpjnQyDk6UsCkEmQBKx",
  "key20": "3Hm7UxjMq6yXfbj9nsekUrh1A7EmAnJMBHGHn9udpaRFCecNgxyZtHWWhKH5Q8WGmpfeMq3KbkFAFocgkCpVG2pd",
  "key21": "4Z7HZnSPARAxp8nWm5ejcTFTPaPnEXEb3C1svgZp1dg5ZMrhKnKSBUNn2iqgQdSm86BCoQTAAdU3itCW8RrkZ9pB",
  "key22": "2EKv4rcT4JpJuYEpXZK2hMaPv5HrvW1MJ3KTYbJ8bKEc4oJZXD4FGVDFTuqYL17JWvGszuM2CRtBKCydKaaei8UK",
  "key23": "5q1So42KxNN4ZwgbWisJ8C77V2dQk97tAJZQEpNjmALxmgxGstQSPcdvdtM2cuSYfxQ9KgALbwqCk8VTRgvYdfNH",
  "key24": "3JcMhmagVSp9LX8bVYqQpc74LAMpJfnag1rBiRiUiVHQpqeHcipmWgZ5KVMQc1Dkwk9acgW1PUXrR72A2u4mRHXM",
  "key25": "4tFTPAhqqiD2RHE3nFq4nhiPMjr7WD1tGxLrYPkzKRE99QjUUSMmo1gpzBCMwxjZ12N2qFFdbeSueVH8D7wdd7vc",
  "key26": "3CzFy4eWy7HeZduqTxYnERNZojSPM9emHKxzA5CMR2RxFFagJeTGJJNQDeeYFSoZMtaCHoATzJ6XxMAwgdTV8czA"
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
