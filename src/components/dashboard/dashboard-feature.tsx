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
    "FrT77WXK1W9YvAxnWs5XiMpGnVZZEjdBJNGzQb1ad5uJExmHKQaX6cdnZcDWjzkkCFwT8yhKt1MmGTG9f1NAhkt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "DcH1vnvDDYfStP2qfezqmbw8pMxT7S6suXu1iPWXLZKkUCBtmkr56tQoQPrSCq6oFrzSo54j5wzvW57q8zQwSVk",
  "key1": "5H9youWbL1NsPFRWDZmsxP6z3BhvNF5h2ToFHtvtc2mKhSZaeKrLiNyMK7rATSNW8yMmQWUBWTdGWQmwGnJJyGqQ",
  "key2": "2BUQVDsVNpvzL3qbo6yGSmPK3etvrCAJmv49uad73wK7ajNfa4QhfBaYGGrr6CY7JCeAP4DpkJ3VvpKPuyxoi1Nh",
  "key3": "62dACTcwtvmiHHLCkeNeW9ZFrrRVbPiP2jxTQi9oxJhgzrJt95dQNyuVodSg5gmkqSQJy9oZGuJQhBegD3q8spTX",
  "key4": "3tTUpTj5WEewDjm7L54GAJhmQkwVXH42ScCk4WsTB1er8CVn6XygY2iCjr4VrKXfoRhhY3EQGpnpETKJwYAGU752",
  "key5": "S11yYXX3dSPwCfNqPbazpHRazLDX2HjmbVEYvf3LxY3sZCUZUN4rxhkHnScwTuTnzaN9EXD8LDTdw23LyRaVUDJ",
  "key6": "NrGfCoUHySdShHUsTP4S1euiAuBmJz8RjcLxmSUxd6KToUFYL2R75GqcdVrbJ378Kf7NqnQyzisRx3TnhJhHRzg",
  "key7": "QwX6mPD8BVRauHwJGfkUR26rP6StDYBvYacco2WT6ZuAYUT3pNKb7tMgQnCfrVi5zcJGvadjyb5GmKwxN1C8v4g",
  "key8": "5jxtGDLL625HmmT7uxpZsMJ3VkyQh3R7ucEEJqK4vGM7SBJGxWKTr3rh9KrEtzwSYRi4YmQ9qx73PN23qfvA2BfQ",
  "key9": "65ND8W2aZu8vBDExQMp6AFXSxDnArj3S9zLue7jaS5UDHf7dpxX7T9uTuvXhN5JX7DLpQmrFFZF5zixwFbEs55kE",
  "key10": "NpNCdm16g1nzthaA2tHpEWzv2XniWu4WZcFsjM9s8rnVo48QUbkJaRqshrYXafb61NhPrRvvMxxuYkNZDaSg8ib",
  "key11": "KZSNminmd7iNhEYKdXU9vsfj1djQ3p7yejzDuLmUUCWGgzTE4Q5rHibPQQuh7rnV71L1WEKtPzJUkMBvppm6Knj",
  "key12": "4a3v4zdEFeMPirDR8jHZBTzq4mDYHwhA89chvzP6DgttAQ6dbD6BuivherkgE8ow8A6n1yrjFP4QuG4jh7ExxWmp",
  "key13": "4X7qSGeSn1BnYJje5VzqFcw3nkvokduJLVkyddpA4LBv7AV9tVnjypz3MGwDugRA5E8AvLPX3mWdMNKUXoyKgVsE",
  "key14": "2fU8iixaTsFUNiHkFm1FX4BhhjehGQ4dYCqY1TKFzJ7UP47N1VqXX6qyxN1Gaj9yTkYsPB9phWn9tZmgZ1rRjAx9",
  "key15": "3nUHGfhfGMCjw5DAeLmJXJf4G6Aa2JUZNABssztdL5FESyBtjYm8yC1dnA3qdgrxkXNjicqPKsgmRno1gFMmZe44",
  "key16": "4fKB8bytB4sHsZhiAmsUXuHhrGeahss7e9f7L1fQFEvKhCCmocmLks9fwJUEa5SEMyFMWX4E9sH2kmzF9oRgxtpz",
  "key17": "5jXFFwFePxHWWi2Uk9tKyAE5WLEwRecfkAP9kwmsytwq4KskwPg7nRqmH74qZcbmsT8YoBhkETTrC1uvVVzRRViJ",
  "key18": "cZQjHV2sDgPHBv2CWnvWfSpyqk2oVoDc7HLVx3JxraWFPqWJTMwJBrVWx8kBThivkN6d6cv4cVmgynATi9giWfR",
  "key19": "4j2QyF8ynmthHteswGEdFq7MkowaJB5UWfu9GoLSL8v4UZmnP3h76KWBcVNjamcAX8rPS3W7KFk92Dew2kJ9mgNw",
  "key20": "2ogqW4jRLVyTQJjRvCua7iBpMvJNGcdJLZiuxby8MBsvZ6iqUx5W5GQLxpiRRszu5kuMqxKvPAmXcySX5rEr1ViK",
  "key21": "2aNT7VAnpyaVAtPcS4h9hHKvT2JEmDmw6Fj1hUytxsCy6iEGggcd1G9Wcp7m9hwRweVjnehPFaQ9VynZfgSaCi1u",
  "key22": "5nk5r61VB6d5vjv8tGf4fdPvpwB3Y1GyV59V68YFzhQvdsQjYMz99vFscrAQgqxKskuKUoYCDYjcaEaWmJ7xcg7J",
  "key23": "2fi46Bhf5NnMxwZQxNcPWR2jLDqiDaaeF1vKLVUgDMt2chZNvAtCjuzjP3YSQkNfpDzhqTChDJXgALnNTYiAABVX",
  "key24": "frgJVgptRqEKAoWGDcQTCCJhydteG72VPdqwYStiJMhqWhqhkyrc5J8xmjkX4LNaKjZmf1YEwncMzwQQPGzaPSL",
  "key25": "3cetsHaZgTQAaaJoSYabQh68C6DD4KazUFGyvD5ZbtEdwamtW4wYqgejc7CgUrxYVa18s5AyH2L6CRG62aPNaUJc",
  "key26": "4VYM5zupHhwaXLxFJHJDq9QR96GGjBBs86k6nSDpEF3rYa7BHUZviS4EvxNeKBFCeTZemz7wySxqmP7j6XdoQ251",
  "key27": "5rXvmpxrzvqnSCTB8DvM3f53Ag768j1XeDQnf8KbE4AaqLtkHCQ6ex2DHhaCCcVo9FSoeSBx4nDAvoSAntktAYk3",
  "key28": "25Gs2DfjMPi9cmVLAR1H8WPByDdwzcyUMCCXsFumZxjUPteW9TNJ9AZPJwvPGt4iEQUFc7UkPg19PbvSsxp9AGTX",
  "key29": "3nNwVJ2bj3DPA1L5TKBYoAGneLVUhSYBSKa2xGvMxj8PNT3AX1HXs2HvHqVvPMbG1EGUFc9x2WDBn1PrUBkd5rxh",
  "key30": "64XtDj5if54H9XTqx83FDUCUD8w8Ah9eRM5SpkBUAxA13om1rdv5sQGQA9yvBuJtpivtsCCikjxHqZmHqhggU3PN",
  "key31": "2r8AGVaigXFLwSDUwQU1SoomXLfwnjxfFyEfQTSu5zCvCLBx4zMUEks1M2Q22HFQBuzYtDwXnT9HjfJx4Hi4qwCC"
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
