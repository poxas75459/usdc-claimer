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
    "4m92JZ3NLNjvsMogzLx5HEFtvn5VCUWktFqVA2mnkfpDni8Dmozf5QYPvStwoztRDe8WLZMenyjYUmSeyAjeqeL5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "wUyL9Vskb5XUwSwudgHnmaVVJTSa9KWxuBbi7vorQK6k7WHwUbWaxzWCDUhNMotMpTwiXc5qdj7gsSspwNwSYox",
  "key1": "4EBMmpB82RSpanyLcU1KdxqzvnpHibybBgJ84htYoucDvPbwtMkRM6faSHMv3iKCLYjDUEm3gMVMDkaMKSM7BK3Y",
  "key2": "MhFfo2jkPbpgH6GxLft4QbbFfng5DfGV31Q3QsMWhtuqAHBM7jMMFj4LJ2uLgMNEHvfH2vVXfzm3mua2ZozCrL5",
  "key3": "4esKAB4Vr6zh9MNc7xsVXLLRAXEqrHzZK2zg2jztrjnpP2BmeNoh9r6vFAUBbjRLHrD4CJwx2ziPSbVjdXxKEG3m",
  "key4": "AdzvoejkyU2sAtd4Qhze2u6m91R6SFwGbMrpA4noJcWBuyGfsoipefDp2zUM8fPNX6WJKgNwtNDG1Fgt5UBnnfb",
  "key5": "5sWnT1TqtYPmzhFx3JYp41CUpXpqY9qJ5nvQ3bW9t5igD6fKn5Rgf1TmJykZTEDJqhZKr6rcX1uo9Wq3gpzDqLnL",
  "key6": "5DjqN1Mdo86oYoEUqKmjkcDvJJMvfLKyfDjM6fJp2648MmGkbniMEZvVrLeKBNb9VmafLEnXTWNxxeJgBL9BpKRR",
  "key7": "tJxJkHBLBcJYnsMTFBaAYHwzMBJsZt4kCBdAU81acQVZz8fZkkLgwQtXJj8GP2W7gWzg5QMKFihY4LiFn8pssp7",
  "key8": "5Q7G2KLfqF5U6GfPb7EHvDCbueKgcCbA4pGPVJY4CcktsAsp399q7WCa8X7yJG1gMAn6rn6TN3w4bEJrz76P99So",
  "key9": "4QmZA5m19JgMu4Q9xuarLGKFpBHwZDmpfANPHdNn7Z1mv6UsXUCnHggwx9jqwovkphg2sAYvYxaYSrbN8QJwd7Up",
  "key10": "3fyYTZs8FaE6SBEwfNEZbwdrxwvoCJRW23WazDXyBSCFQVyEECPRwXnt1GNenTfU4XdQUogsRs8CgTfKxhQ7NNzy",
  "key11": "4XeWjM6UvZm2HN7xEkg2hEtYLR5K1AfJfWhEsNfnTKXxaN3LCXQnQVs8iTauJd3mASiC66cKSUt3KTzufTGbVkxf",
  "key12": "2XosJruBmQqkKTVDJLPvYkBnxzPG5PWEqf6sQkWPhgC34dSDQDfn7wx2JQaVbSR79aWZmquLMeaiPreZ9tWYrFtv",
  "key13": "53FZC2c7KJ2nHASjfTopHQqn3nfd4SHeBhPGHixYF8vch9ABGwqZSk6pkoqjBkpLbxRxg99JwQswc58i1PcBkhCs",
  "key14": "VrBMfy7Aim7BUTjgNxnR6XoDW9JcVoPFFAr1nEFPawJhdBtmNsZAa1oaAW78Ysv2rreAypxXvhhqSCDWs7VFyVU",
  "key15": "3GPmAU53BmVJFQQ6V35dPgC8UdfNA1uZepyuXSwy3eA8yqNDvrDvnxNHT4yiqkJikQKyywRX5vfFk3cksuUNXXJo",
  "key16": "34mF2heA5gQZ5itXERPyBimgZDyXLK9N1hNDW27nB2SVLFYpwqKfTnoBse99SYu1KsNipkSYuE8sCdjCM2DCMq19",
  "key17": "76A8drmDaJp7TmMwL5SZPUfRVBHVEKmb9uNqr4vhSSBPHm71LrhiANT4FLMfqe2XypK4ueGktwopjvYU5uJ2zqq",
  "key18": "2WCWW9U4UcPYt7KADsoUMpZ9gi7GUYvdqMKQsekeVP3sLNAC21HjE8XvHbQurozFVDnC8HHxRDZAPTmLm79gZvQs",
  "key19": "4WeEtXEWyUoUdpyijR3FGJQxDN2Qum8arzE5yu8rRUks4Awyjt7wp8wYRFhqwDbXPhcE9WjapZJ371WMfqNbbbt9",
  "key20": "wZxN4YDE4RfuifrepCQ9eozZ9f42wUCnx6CiVEziyo6i7DjWUxMRh4spQvjD2VT3hUM5B2K8S9KHYQn7QrhqLWY",
  "key21": "5PN5xAqpyxfCsA9gyhWxTHYr1Gy5Vvt7sS1jCqakhVm56UnC1zm7U9WKL3uKCgZwGeBGjMomqmCLnSSbk5h6z8SM",
  "key22": "3iFXv25xV3rxuTbweBxqCvBveho93fSfUJkr29Mv9QXns2ujxPbkCzZMP5NR5wzCU3WbMtAyedconnUJxRGSVr4T",
  "key23": "3W63Vaw81FxGCNn9zJKM3dFes9a4wyY5iB7gyp8iLoJYH6JyER98MMJvzHQgoyxJ5RQfYYVo1K6uo2pJ23FBEGq6",
  "key24": "3WQEjfs9veeHLYB2sLC17SMsax9YJ6cFUoucoxTwxrXQ37X8V8Kw75cuW2YSgKeZX8G7ssVY4L58B6VmD7Cqg8nA",
  "key25": "2HB7grWneUfCDs9JfDtt32rgroGmJSUXroG6aQaw13NvGmMUmwnhQQWRx7mnGqrkZmSbKm8SopyDSuu3vTDyouX2",
  "key26": "5NHUEcmuTqy4oWDMuq2AcjKxoMB3J9HAs6ShLRdQ4QKizppBrjYqfvXcnYbpK3zwESXNnqaN4uAQGYGqYatxfbJz",
  "key27": "2GRkTV9A23jf2EYURc9AmddUH9Qk1SWCzkdmCH8vU5wgtsTAAXxdoTPJdeEsTuzfjS7Ru4zXhZgY5mCjSWbJJnBT"
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
