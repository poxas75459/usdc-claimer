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
    "44sefdcm53CV47iLJdVLHnVQyZkMAXKjw5iXLR37ERcMig1Nx5dYCx7GZLWcZbK8a7AL42qMStzdcvgALzCDTYJv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4stuJhDY7fdF4uQMcAQd6qVtdwAQ3AjCBZwyngtyyYCohFWM9GsLqi2UPUccjXGSSeqA3Q1MLKZrhN2MDck9ywBU",
  "key1": "2WhSGw5MBuwsjzgYF47d9zUfuLby8KEPeZvgQkroC1a9FiA75ALiBVN8j5jUBc6pWFvc87Kq9pPyBXuRmzDd1fzd",
  "key2": "4kxKQ6juAQViYpDXuEQP8uzBkBZC521LR3ZWCFdztaYzLgockAMrhnG4YDJoCFpRhUqmvpE9D18i3kVQKR8SQ4Wi",
  "key3": "396TKnsQqd4WxjUeStAnQkz54BX8CAR8CV4VRkbv7vFhCsdxwSS7Y3HW3ppEVbdNfpdWCcDLozZPKpk8LTL37sd5",
  "key4": "4ZJRQ9ivzZscp8WLnrE5Cjy6YfpT3LuGTifBAWtKwBWrnDiCEBet7woZ1bx8oMxes3C53HZUBrrYSjYuawexP6SB",
  "key5": "2cfizT75uRScP8NiaE8hNCbGAhq8iTobRnAaUFVJ4MC4qqTkKcg2Qv9D5eKc8BSvWus4VM4NB9Ab58UCkRgCcNZr",
  "key6": "4fgcdajXmMSysv9skHScytAYwxJW7XyR5UGbdYk98xc5KRGL9oZ9yNgDRt9XVwFb657ToCAWi1YjjAiVw16cWJg1",
  "key7": "2FEJJfnzrEVWqj6jk6t8a2FqTh3izKhGqUBR421DrvZk98w23tq2qWRexU26kVjvDDjEZbtJEb46V6cUE8uHcs7w",
  "key8": "2qj2YKMkPyNvwNCKALvKbgFcG2SEGCRJCwZKCRMZ9VYU5gkYTFMcusceFCYGWKawt5jmWtVD1A911gmKPgaT73C6",
  "key9": "2QwyeELUhP9d7kbzVqXhKe5dhEMbekn7sRC5UhqroHb2cCEwP9okNsCY77u7ahdfDKjKFqvdz42BLekXWb5n7mFB",
  "key10": "3Z3iuJ85s8rnmT237vETbgc979Qpkgo7vKNR4kAMBPRY3k8qbp6PWVaJYwdG3T4LGzvVi6sBvVE8cLSCZGbWfMzC",
  "key11": "sWmQPEU2mgsWDddkFR4ZzGTB4JYhSqLock1TpKuX6TGMaTMQ463cQB4Mte9vm85yydUEkAkrmXqgCrwR836Cj4m",
  "key12": "5YGV7HHr2rea5MjMiGu7DiBL6qfZLAPGomypvpM53F6sExnf25N1r2Cea2GxhfN6n58Wf45e4aeTj6Rn3BK9XruU",
  "key13": "oVQKTVisKhEkzK2n7YFD1gcYLHhHshraEDrfRogZ7G7uyra5RjvM4beSQwtAP9DyJ6HTgTx2UBDvZy2tPtMGjBz",
  "key14": "2t5vMVjLB2DQsjrsrGp641uu65k9yFets28jMVo6kibhM6Aw7Cb4t4E2JwsjfeXA9mWMyS1ckUmVBWZHdWECWTia",
  "key15": "4xgSBxRiCkoELFFei4UVv2y4GJuR3zfazJfTunr82HhqUrCYSNfXraGPnqZ9EW5SfwthEbppCJQguMi59jKk6yN",
  "key16": "3AAjBqE2TXmjnUN3VTvKgWxN7HTv6p1Jwbg3c3dthMDQC4R5ATxXJjmeCmQ7wT5hcbVNDjHccjgMevLeru3gnYSP",
  "key17": "3hY5j8mTpqjFGMzFEfMJoxDxQcUPqjHjSUNHnzkBAkCAk4RC6NeGBYHvEX2iHxa7DzjPdhBtyi3S91GuRzz2H5pU",
  "key18": "2SHbhNFgTVazxbeNv4PBcr8gR1ZS7zpaDRV5dpwGznNswkHRdSYjyW8oWj5u5mjUY3UnfdT7xFehPriBMi2qBPE",
  "key19": "2PQhW2GjY1r6577Jhhtdk8M9P7msd95LaLLkur95j4rjfx8n3cwusSDho9je6CyP1iB8kZRVivHFXXkpP1d5juQQ",
  "key20": "3xSkv6jru1CvDgYqCk9VST4FB4VahvCkwT6jhuQ2DgDJaiyVhVE3gbkPTVkYxYfW8ip7LLQe4Qw2oDfZZLkphnw9",
  "key21": "4QJ8McqSGjXVDEakpkx8CXWyXWg9jZgtczTJ8p3yxgGKjSkHZC21gg9DrbrNvAzwf6EnKFYi4u9fTjumgXf3yNJZ",
  "key22": "53DxP3ZXKDo9HhNs4kgz1dnzHKmurp8P6HdhU4uxkBAPTwHiKpDgwtKaX6DCW2XoRytKyYGC2YpzW2SLoePjqMxC",
  "key23": "5fNwvp2cLaCkR4N4MbuUxUQhXMu8V7xkT3u4eNs16JJtTMpguBfv9EUEmC7YtV3x15mszfxNVJpMGvVQHzXNEfMf",
  "key24": "4EqWZ9LhWPDYjuTMGQiETv7DBWo22e1Xt4v5d8XRugVEZH8P2s7TuSnPbwi3eXoUuA3xvBjkYASE3DWhww1UqNzf",
  "key25": "3LQxEXXHJjKuGCwse3tnzxzWg12hRv97yfvGkTMSZVmXsTPKL1tipdcVm6u6KGzUZnX7iW9FiAp6S2my1M93Gqxf",
  "key26": "2YonKuzoD6tZPCEMrGaNDJgqtuqKLJdT1EprgZ4w6FR5nY5DuayGJ5FWD151qHNdwxzLUa6Ffy1RWJVkr7nFw2HP",
  "key27": "3mFu3dfgjDCZbpFcm6yhza47h5S4iDghAU2HXjMx8tq9kFu6vqCiRxcWEvcL9xxuRiBq9etpfDrMSpP9Bn6wnwHz"
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
