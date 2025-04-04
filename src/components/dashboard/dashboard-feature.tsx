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
    "NxXxN945gs972NRmSB6K44a6sP3hJ8WF2o93fqXTA7L3bagMnvSRqVb171cmqsS3dsMS2zhUWS3sPh3jDTcQHFN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65xiwbLjwuJdRwVhKgxexNZZazWTczz14CrdeMbS9CHDiYTtrYKLvRtBsUbbgQALCwfCSmairRLwMBiA1w7vKpvU",
  "key1": "BgeKP7ZsuzgtE9gSiexmcNfUxH6oYiybuh9qEu21S6B89vudn8CsL94Fogy1kjp1kvRxZ8oGwD14yNxoPEzk1Qd",
  "key2": "4NoBUyemx9daV8psdhBdZeSVHLeWpaSD72KsurLG3XR4MhrrDNjhELQ9ETvuYotaAMRTojhah3YtHubgC6qLYtej",
  "key3": "1fBNL2pCGYDVoKNhVttrDJx8JJzJQ6Speeyz7g9jukevsEut9GTyef9wrZbTCH44LVA6dcC9iHKYSxA53KuNBJs",
  "key4": "36CBPvu7FVLHJWUFAPiPzALqfWW97UNjW7TktJPjGVQkAGmbfaKP5Savgn9LVHu81K57Pwpeky58qn2QSqCaMSq6",
  "key5": "2rrv63DSjyUCLMAyKqpVu3DDFSWUhvYZW8gHwUdU6PCUv7TsYAkVAZmmMkFEeD2WvaTrsgN8vnyq2s7gKzFMCEaL",
  "key6": "4HxJ7Ubpe7dgthzLQos8RGQeXjc5NQJBaxgxB8YV7xoCEG4jVGyndtiDuzZy1DqRxxmjJrX2Y48KqzbTwu3y111d",
  "key7": "5wUrT5tfd6Udhex7GxftTUzB2TzeE8VThSEXqrADbYJFM2SLHZh9AY693yrXJBFs1KPT1kV4DaqLmEJ9D5HcXXAR",
  "key8": "5BxxVkLM8dNH9s4Fn6cjQquoBPuadskHVWLJrjvDQqyE5VU7HzoQF4N7AHq5c2R6uNmTLqBVxnfdfHdMDtCAXMg",
  "key9": "4FuBR96uq8WG32nW8FCtNKsp9iC381oSfS138mimJtSQ5QiZU8mt6RmN61iaajMEH1GVtKZVeAftP9PNBLP9EQ4Z",
  "key10": "UgKjz7XifbVVTCLuLK94HASCVt6Jz2TncgKYJfnC2jNBx3UjBRsunH37fHcDWsnUdzJgVhJfiNK71fJRMfzgvY9",
  "key11": "3wZXJ92AMH1ZjNjaASKcKFABpJ542VULMFWkN2YBovJihdphiqRbdFrsHE6cySp6MmDC2Wvf2wJgoS9twzdRnDTy",
  "key12": "2WvD3LqtGTHs8NqpUkZffh1vRoqDfSvEhXg21pXqzXiMQ6Lobuzt5nRjeJSacNpLUuDEf97q5xfBVsdpMd64HFdV",
  "key13": "19LdWxUDf2xPkcJx48cMx4r3tMBUZ4MFzhP3FpZne9VxSVEmdtneW6ksmzBCHkM8mH8ts5qoKo1pjuQMm4YLDjM",
  "key14": "KqxAYxwj1FDA8bXxoFfeLB5Y7yqhWHjhgDM3HR3a5Dix2esb9UTuVGziR6Y6pPmVaH2cDyQNB3DKwBRefhqn6eU",
  "key15": "3FzNYrGzt7ebRPnQChKPZN673jcf2ny4xTvwQ3v8Fu9cK77b3cVDgeUunj4g4aHBQYMEniuyQxXXQR7kt8ajjrsP",
  "key16": "ru4Tap7TLTvk5FiSxnrHqTmHxsQUJkkB7wfjtbZNKA57i8679movdEea1GLQs6n6SNe6GrahJ8u9KacF2eVTJco",
  "key17": "5uzM6NZLVaS2t48qGEKDdPLDVsQ1VzwcCgZ7MpZqRQPwEvy7sYUHQZJ4wr2XqzpJnGi3a1cyQWW8RkfQxoDtWFDJ",
  "key18": "3UAq2yt9R2VFCSowXCpBKuqw29oTQtREUznoNG5rcSYFuc96KEDBZ8dAS1AvFr6XL5gVxJwsB8JhNRz78kWADb84",
  "key19": "gBMyoBbLFV3Ar5ysq968eFKtvuCA4e38ddhhigQsbkgAWJjx5m8HB14PpVESJaCpNHeJqwmLWjN4Rf6RMpDiY2p",
  "key20": "d69a8Dc3XvmRR8EbeK5zJScpePXr8MvkxRX45zaiwNpGoafQK67b3WbmLDbHdaXjZGvaYBfn9dpaGkngBDhxHs5",
  "key21": "5o6LjeL5HBPZRnxA7eez6rieC42rbYE2FnihcNMTETSHrsUvbZCCmj4M8nLcWeJPTPpzZAAzkXviHFqXxep5VCNS",
  "key22": "4m3Fct7PzRU4xSYsMzwdVPV4rpq3jN4e5URZdqxo94JPTDZUAF5XmcDCYTNEqCPcozHJbBRRDL2MuRqKj7nD4eu1",
  "key23": "3zhXGSfd8rtfMkbEYfh2ge9LCMAiw4xc27EgiAvGbkZRwZRUipAgVbzK7Zx2cnhUQftGN1HK1KEkTNtsxGa2iCoC",
  "key24": "2duciYFbViBYPniH8B1nkDJi7kPFFhLX246qK9szFDLdyDpj7xCynabPRux6RXRVfZfv5PACVruVVEw12oE4KpWm",
  "key25": "2QqHJpFSmDuUU3wFJBaZXwGEn6wigSZy3AeGH95whVXVm42R3inCWAs8aG3mx2HZNVjnBVnt3x4naTCKjxz4UmJz",
  "key26": "qXTqhvURkZht4hNZKfiCnUEuZhAFEfbw3VayNASVEeY6eCL18xzWwFFKB7aRHKcA84k6ZYBkcDV3XEvx3cf9ZKq",
  "key27": "5k1mXnfFcH7QuGVVLQr3r3DuTvnpYp53pJNmkx61VBY78n6e9Qz7KPVdCuFemngEzr5ENpBS4ceJTLa1D3RCMc1b",
  "key28": "2y8J9mH1QHt45LMTaMJj1C8kRVbm3ax2uCFM6E7dfNDnGWdn6mhzKXii6e37bUbSD2VqzyrrwEeQ5AQcKzSSCjzY",
  "key29": "5k6hLQoV2A3GCcrpRcttbH1maY6Rphr1UTcKGRKSyqVDdymi85mymURMeHHXxqh3g8uaXrtvGeT2Z8TK9rpHhx7J",
  "key30": "2iQDNm3zskDv6sVMg6W8vJRuqHoXZfXGCpDpgoZDdmGe9cZQGXAs8VZs6oo7ouUzUKBTEQxu5v2HioRoWRGrkvEg",
  "key31": "5f5KAE4vKW7gFN6Gxdw9oJWjYhs73fw8dWaPfoddLPNM4AyrruWzKDx5EwkP68ABzU57x4ST9jn3SsYg5jdVP1wK",
  "key32": "4tCgQGRcU8e5oDhTixPWeNRCzf5LJ3u8TtwqjATKnrJK9UyNTqxjNdtXYaBw8GtdasikPQBYYQgduHgs6DEk6DdJ"
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
