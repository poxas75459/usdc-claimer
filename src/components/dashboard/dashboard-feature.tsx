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
    "3CowoSgCirSZ7A1RToPP5xQYbDw91hi4V7m1qoohJTREBGgPcbKs22wZx8PsfNtuEqjxgwduJmLhA65h3p7RQYGo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4AsvDykGw7JPDAAb9EoSLDFP9KCnYHmWY4zWsRhMP7EeQzHBzTXQXn5VUvWMGi6LzLkdneHsKqECGAnMUp6iDN4v",
  "key1": "2bE5XhnaT84HPCEN7An1wphNhYc9ZGGfj9NzqR4FYHr1w8bhARsNuKHqiKDgFv3rGTMfBngdtA57hErsFaCu9eiV",
  "key2": "3PtAKkRx2J42PnTTmAjjisz8qkAGSvCGs39fm4JSpyRpGge9Dw8dToMj1666Ri3bHqyr7JA5TehXJcVokW3srU2G",
  "key3": "34qARMKTUjffwq5KKNMdnZiUtVs9uHgSja8up1Gu4u5pBw6WUiGyAyE1D2849WphFxnD6WXqP2rQTDSE3chBcuxH",
  "key4": "5Z76G8PwWBKzTt83eX32LA1S8BBZSw5FyMCYYe1c1bbP563YvxzBuAssphsGkCbT9Vv2NsyJcYho1eGhRz445S6p",
  "key5": "V37RYq9YJr2uZ8qVbZgFion7yuPrtcSKQQFEjKq4wjcqTvH7s4aG2DJ54n8BU1zFvxfPbbBEJaXU2HwxK2NfAtZ",
  "key6": "GK9kGRVkTBUiB2LBtFy6Nsq7Sp2Es7KotMEdNXPrzWPfg1C2BWnWz1v8zowdMdJsimSbPDhhuuMXPPVxpmNmR95",
  "key7": "5TXjjANjWfZqE2oFBTBkrctvzMwFLXTj2pKyst5PKdUCzFLQpTdV1FhhCYjnNTw3BWmfG9UhSeiKubUoY2jfe3UN",
  "key8": "2nx2bPSriA8z2HyPYuHzsp4MGUttSFg3rkwhEDuHSwCTXqzgn2oRbCrH7mDbSryQPwGpTbbs99FdN64RuMwntYhz",
  "key9": "u5RA2Pq2fgtFgavwbMujN7WwdBH9ztZjC1gnMKcUpvNvkQc6ZWhn6fM2upmXDKTugLiqEkzPYmQKqkL2zopkDHd",
  "key10": "37Fi4h4rwPv8UnQNEF3PstGQ2mR8Mcia3WUskC5rhxPevz1zd4XYgyTJ8vdwntCf8irKN2V7tkpv3npmMsYgbEF2",
  "key11": "6i5oaWvMoHKUk5uU1TeBSRpsV5q9Qpz5NMkiYAhxHD5b2Y25WttkbshkeVv1Da2FM9ZJFtcz3T7orwbPTAduNMu",
  "key12": "4w9raNHnqWbnAkLUPBZYSP5466uTmTBMBR7qhpbDCoJBXaqvwjDhm4aExxFJX9QTxG5syxdQMa34RKbmarhXFzq7",
  "key13": "2BhT7sfNbmfnkxM7Q9K7JTfCKTKZUsNwMJmFuCjXQEn6qP4Um5oGMKhg5s1APCbKGc2VKQK54HqWU3m5bnbdAK5A",
  "key14": "7eRH7EFBbm4QT6VaSWdEk8kb67eAHvYuEar1FJsTxPAjZcpHG9yYLZq4bWp5tzNxZNS9vgcsDuXRbdLMPTHpuVF",
  "key15": "4qRcNftpBqfNeFDWi7hRpz1sufbN7x8yEJ5KL2RWMKVZrEMuk7nGERB8EbJfXhotbuJyhfUkJEKFk82r69wWAPjR",
  "key16": "gjR7PiMLq1UrtnTtiQP2qPp8RqvfxYL3psm4XXqvweCh8LEk3tpt82LnugzzLxwKM77HPuDEK919XHUkWnEiEu8",
  "key17": "24nn2tjqG8QKegFB7X9T5Lu95FnNkHsyq39LTV6EYMotrPwvFoyNANtmZT7UHSfvAc3jQyD4GE25W2chSqMff91C",
  "key18": "3XNv4kTN5MPRWPF2HjLGUpirnJ3u9aNWuu4SWr4SjnAs9f7kFZC8huwhS9faE3urt7w3q1AHDNZBuYWcbNWmr6ep",
  "key19": "47xaZcbrgnuoFSG7XhwXMoM8jC17wHAp45kHRUS6eCwuqgXec1SQpAnSwtcTYFgpvk8hnWTaTAyy3DZde8Tv1cAF",
  "key20": "4DaNqKXaW4p2DoYSPLUUQs1X8wqysC5uEDBdLYqnYA354rjp1TmezedJQpsHbFbbKhCjvtJ9zgxKBRWKL4g39yri",
  "key21": "4iiweoJF8jihHQRK3nyADGi5HE5Qye7NtLqmRrWbXJ23E1x4x9KTXmRKa1Hf46mZvA7S7T3tUZwELCuKwEoi3xzc",
  "key22": "54GdBnCmB3B8aiFpJN4DYYMGQWsUcbhitrgnnVqtuFhrE1BdFT9fhe48Zxnu3QT6q33Xq65KPbCScxPtSsYe4NQo",
  "key23": "o2Czc7UMw2CZW3i1GgYQHnBt3LqHqBsvsdSkMWrSJ21DuLEYNtyyJrPx8bt4q51UEdy7cdPLVPuDV9BMAz49DpS",
  "key24": "64w2qXfCZUuMk8gEHmhjhUfK4K5bYesVj9qNiT1koF4FG7QnGbCnBSTT5FpKLNGZAQVfQQ7U8UGi2UVD6rLnbCM7",
  "key25": "24o1Mb63rBSg1Cd3VyUrbccwR5Yw9zNtXJeMgJopdNXZvrYyh5B28DdqazjTMbBa86C7ELpPVh4JL3vW2jai1rhi",
  "key26": "o1bw9hSeRxEqk4wPVZpR1mxT3wWiUQDLB3R82nXYNP8JGAwMUYzZw65DJyziq3YXtfQLzAhQiZwbnh3g7GwM3G4",
  "key27": "MoWG7XtgJYTCE7h7NHZpviyR5QQAHiUJJE3hLzqzJmXX3UCj56h7aDukQsJvq4CcAr7QzSLRjJW1earXWoTZq4D",
  "key28": "3JqfSVJdxydTFnYhTrpa4wFXNwS1TRYcYwRtH3VSfAnWaRYNuVKwGsnkpyyVnCsP9rwq6DWbYNZ4MZSTvwnhkfwb",
  "key29": "4jUeXkSCb5mi7uXRX4musnCudb866PhX6aVrBY37Pa7hoVUfKSknKwt2t31XGvMmDsfG8LtWudbVQvx2v23QKajk",
  "key30": "BrTLZ5QimPgBX4sLgb86Zs4MYQoFRBpTnGGrQwz2RJ5sfSLSowp3TprKu77PyoKsgbGUd4Cr4PXtPH9RRSWCbiq"
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
