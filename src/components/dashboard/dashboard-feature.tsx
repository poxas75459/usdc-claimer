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
    "rjmf2BGYFf92xkLHLMg1Scd1E1LF1pCQirtMybY9pXBvo6Y3JpWoDAYsTjGzKGUVFVRjoCU5xkHsQbsYViZZVDH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9kqUq4Vav2BNGA6mFtoddCwAfKAPr38BdNsgdZJZqQ2exzHGj92AecoyS5Xr8t3GtpapovkUdGQTxwWXJJCssek",
  "key1": "22AJ6BAZtHHE9WZVeaHAZwow9UfL2s3CstGpcfoVHE3Fk9oaJmEGrMP7epb2P28j281h3Vnq9g1MH2rt2wbJv154",
  "key2": "4QUBG9RyH5FjWZ4zyXvEPpXgAdijoxhyXbEvjzHbzFydrKy89vYmfJ5aMGTJb62iKDDX7MUGsCwQh6pNC1KBVLC9",
  "key3": "4ny14PQ7cxKJ3uBkxmbxGpbdGYXmUvrT48M1Y4jenNmxTqyZEK98gX1goPVRyVpAmwKAKDux6EctbScfm8VW2WwC",
  "key4": "4cww91SoFyqk8w2yrntD6qZbsQeXDKBAn1KcJ5aKpLY8tBotLFZta1QzGhPGBqHaA6E21esySXJ27cqaYqYKNkhn",
  "key5": "K5NTrJu3EmXirqi6fL3TfSPACndGJgXc5sYkkQYWP6RhPKe15BERNPUuKBQzNStaGeWs3w1aoP6ThtD4mbm13Jh",
  "key6": "2FvdcYpUTpaJBR7A8h661PdGMuwMoaUhU5rapP2wJr8FVUFbnnC877Ch2MFPomPHUX8tAbdMQfXJvS8mz9sRVeoC",
  "key7": "4CqkQTwE4SYQwEj5UGdKZ6hJUtGbpp748FtJEjEujiqnajuJi7MZ5QN7fnqBxSNtBBMSrznhcXJuwq9JmJYj69d8",
  "key8": "TMgi4usEsEHwryhcDpsV2FrLwPpX2LtGAWu56kPv3M51kSFtvuG8ScVvAdHDCHi6PtyEAaAL7V5gJ4B84mG52tR",
  "key9": "5hob1B6WyPabk2g5Xf9kS4YMp52zhfbU2kujR1cSMmftcMn3BMens17tb7nFHvRSheNz51h1h2FuiEC7eUDFAHic",
  "key10": "AU4HuVE1oyiXqKjqwqPuggkovkqmvNwUg9vUQPGCwoQRSuxNLcKeSqCm6JtX6Qi3dpwXbAn7Pzb812xyVMtdesC",
  "key11": "3QkimPbobZp2mQ4VWH5dzj8xjRJ3sBvjd8aoRBQXp8vSh3PJwy7krtBmpWxh1tMWJZvN9ThLdPYbydpAzu2PEQH6",
  "key12": "FXu2CEbCQmegBNHXspwStRpXpmaHBQnq6AjTyFS226Jq44CZ1EgTr4rReFfqr7zPkKohbXbPdLbqKn2ghxxGx8h",
  "key13": "3UZkPgiT4UEtFzxsrACp9eN7WPWA6ErETEZLtupc8GazitTu4npDfTpi7994r8i88y7fNnaxfvyBcEZJXKzUjN3F",
  "key14": "5M1dbrWDXyh93wMsVZpsncGyscFrsmymKEhd1YNC7grPiCTyNmfYDxLhPAHaLQgCzuDEgh8nsM9DdLfpyFhnSpok",
  "key15": "y2CJkFdLkUi3R7Q7TxTuKDCTrwPyJ6KUiHPM65PXQQVTopQi5LSbkzTrrzJ9aPSdHAdztxQoKimBYoVBAkbzzdy",
  "key16": "4yvxuAyeKdKrJwamHpKDjYWANC831SK6nrjxVvdqnyfQnSQXZ2pgGEpSjuSG3BGfoRx2WqRirHJwfDU43SsGttyy",
  "key17": "3ZcNgrL8pwu73iQLBXc3CxcE6cqhox9mTZsQ7LWbok6BziCSs2AosH6MWGZ34iszGwnzPuV3vTCANwH5CuLkZsxn",
  "key18": "4gmP3jXp35RDbkTqJq2c9QUs2Ukg7M9trTBWb8gC6i73QLjREfVrVqAuBsuCuSYbsPzZbGCZguw5KVj1rHbYayPJ",
  "key19": "2RckV4psvTMC2FWstiZkjDrnMj2T1Q91NfYKunnU4YNao6i5WGyyF75DcUHWwPNMBcibNoHrdxnRJtkVhCf14C7q",
  "key20": "JPX89oPZ2b28Kq5tjpZoYf7uspFuwYCgkv3qc8kTmv9tSzodANzEvqxCvDxmKABVvsH6im2S1oqJDAZTPQNvdn5",
  "key21": "287nzRPnMrkfNvYmDdeaZPLFnoreigWXn7Hbsfqqh9ac7xQ8yaYSSf9Kq4nZBZQfAHPPu37Bm8P4iuXofCxrsU7W",
  "key22": "4hzJYfY9XavhEfrrLMwuDrHGnUFbX6hRyB6syvyMGbCxL6eo2j5aHFqAgta8ZHvKHhtSKYuDgSXvvTv2CAshpVgk",
  "key23": "3L2qJemFECoEgsrG3BQ6jRABiGn5hx5anb9Cevxw4VPE4xt5GZbJRzKf8XJrY9DgmWPeKP6mdBWQB6CGKidamJtW",
  "key24": "3BYxqv9WM2icuC3r4jQ2iirVchdF9jKZo7otU3pfiT9RNoRSQeT5E63q3Z9UAAA7DFByzB3gCeuhZpREBEwZtuL4",
  "key25": "5cqhnPTYCCY8B4G88gdyrA5NsrUnswPi2UB3BujH3NgKJG5cMcpHLqWFn9f1T9YGynV9EcHWN788QKc9V9Rk5KPi",
  "key26": "22RZYYedr66DEFfquHJYmH8Zu2tPGKdLFp2GkWxTpJrN5zy7VABfq2FBadb5qMCUq8eK3ggwe2Chi8RGh9vNVP7S",
  "key27": "3oyM1ubyRt8bJZBVh1hkUEj5QTycpWFop4yhsy4EJeXwUaF9qTqhq3b11QroaJzrqdjnq9pkMXf7XwmaynNN98Zz",
  "key28": "5CujCJKLQ92ERaRfEfpxB56oScejEL1wTH947oAAYxf2vUN1Q22ZH6YJ3LPzboVbCnCpRT9jsrgcxrTuDjs8uE3",
  "key29": "5U2YwmQJFGXD6kNbNcLZEcUwqyU5hxBRCbJNNzstGzmdFGRoeeWSVPNezGUtH3yXx2XSBtR62VS7eWw17QRuiRdB",
  "key30": "53xybJ3ZaPnHsFtieTiPaLmR813QEQaxqErRxmQ6shNGb19aio2nnPf1A5MrVB4hnjk8oThWLuNfn5QpoWHcjTMS",
  "key31": "5ffWVFjrnN6TMrWQ1oLcrBnUV4XE6ynbJD8b4na9YWRHcqP8ANQrrxHxnAP9igf48buZFBXQKsScPZCt5wubyTZg"
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
