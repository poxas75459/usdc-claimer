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
    "3TtMBxidtC9Bsj8qWNQQ4XV9ephxSzXbGzrtGfEFExE53DmRCzhGoyL5JytVPb9J9iaR53sQDgBYSuC1aML736q4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5EhzVK5fUEW2ekPoRxbNysdyvkcccVAYxo439PKCdjriDkujHNQkw5vH4fiQ44mhj9xDkUk4oHuWYmAVfUx6AH2P",
  "key1": "SxhnK8WxUud6GNPCVab8yJEgai4fsQgWjXR1Q5E471QS1qJY1Akqu2VEGEk92dGvKqffboFF9rbinw6MNJvRBLh",
  "key2": "4HVPnaSJiJBKBr5NTZyfp76MoThHyAcQZJPRsHTXgKV8wjeSaabEVU5qPWCJdghTPWx24XApjrgnCA1UhaRwnVXm",
  "key3": "5EybBm5fm64kMpY1NJnX9q8fBnMqzjHHxPZq8JEczFZ4Lm1ucrqLjGT9EDciMmgpwpHb19mDUdWJm1Eax2j9QkdS",
  "key4": "2jbrPDsoYrpYTem5pDhFVqaNWnqtLfbDp1cJY6LnmL5U6rWncCyEYQsXtvwSvrS5CHCxfSRpxwM5UyB7suuPZuAg",
  "key5": "38USWnH2BDey4aXaHq5N6x97bkwfEjYUkTVEdqrgy75rTBwz65nL1epLh3962gQ9jZzze8899RPHvPAK8PC4wcPN",
  "key6": "2NGpdpKEXfyuNXx4X7vSxdH2dNcdqSYo3HQH2TduUu1gvoJchfmugGQUeW7ghipGvsSJp6HfaABJqKz9fS8sU5WL",
  "key7": "2xBcWBogVwJEA5A6edKo8Jh5jrGhPQG6JHVE4Wqr8bU4vMxG1ieU4cQXEZvDQgA92R32GpWfvssGnTjDcWdhdWgs",
  "key8": "4mRaCyPASJCDDsAcgqY8LvHVo1ZPvo4AVTtGUAb91eYw4W6ph6BxnvS2bruw98Dtdisp1zMvhJ4jpPwXJXwUHsy5",
  "key9": "5JW6x1peYW3z5jxr7jBRvxECUste7jjxpb5oCWPyyqp4Hm3ZXKAsN7k6ZHdtK7uhvvVUeqkWLAjdFfeRLFdti8mq",
  "key10": "59Q5XSqaKcH9UhkGRjtZR8rZ4uRXK2sLFd4ByoVzZ1EaPt7yFAx1U5skw2N1VVejDQ5fDq5iPnzuW8j9gxBp5PZZ",
  "key11": "22McPhyL6sxkfzvuYa6hmTRLT2nKi9rw62EaL7oEDjKyJQEHqKZxnxj3DFtskxBeQaJay4f6ksZx94LwHNCo4gQ3",
  "key12": "57s9BU7btdqM3Lfm1zniMXJJw9SLSeZUzaQaW6i4fF6of8fR26CyBzachhRHf2WUiE41Hbefq48dmb93Vze5yyCy",
  "key13": "41cQqPBZpMeWddEcdYFC1rQa8afjhEboj5ReHQ3iMRXxhtiB5oPc4ic7XEWoyZBW7EU9ipkJue4Ss3mAgZqWBoJm",
  "key14": "57oGNVbbU5cRAzV5n4TJXXvNHvegLnpBU6CfvgfLaLP4bDfpbwgXVpN4ki99ABtKjCwuUdssMQurRkYm88UCYqnh",
  "key15": "b8Y8BUd3ihhEB8UWVMcDf6KxB5VZoAArxPbvqenwDfkJGBDQtBnt8RY8qKcBdpbvUdGutrYfQvGrsXmcGakfkCR",
  "key16": "ikeut19srnTD2vh79AHk8y4Z7GADJ65J1VnKjxNj5waqMycbcd7VR9wDxWKxsNcysp1TMpJa2fuJ9PopCTNTq67",
  "key17": "4dGwuwnjiy5Zxn8nW5fNQc1q7VMTtDKFwNezLB36VjY77KHr9cT22SJuDemsWbdR8hDycv2AujTysRYuijPMt8GX",
  "key18": "5icpuAbaUUweGtd8e9571LSyBYaBfw3h54xGKDaLfoo5TeDKBXCo4eYvH9CiK9rZD8p4jYLwJjmLbRGiiVqJaJQN",
  "key19": "3f6aXKrcWd3buLGVNJ9Pc4DnCRJztBW1B8K7F5w8gEj1z9PD9U7aBpfnRQXeiLkYfSwUgjDLzpta3eE496jyuxa9",
  "key20": "3szFroc2xsrBfF8Az9wQ1Mn9pUn3LYwUzF16PXWn2rEYPDwrmLKNrLXWraBHf2Fy3HPp2xzCRT5pPsr8dYon7DPs",
  "key21": "4u43a38WDTKqVCbBzcmoyNrD2i5GAogRKz9gMZsWnRZkgVsP72EFRZWCLitKXY3XbxsAWC6M5hVDCZwZafSmCm3S",
  "key22": "2M8zK7YbHimPPLKeZGRgZvUEgqxBoR7APxjfs8EHjwm4ZZdwgaahrCWJyXej9wddTFdFQhZVnx1DvUQkiRGRo1z2",
  "key23": "4FeSMHV1E6dLePkGqbHvdursVCbRNLVm3aYGeig3wdcAb5sSiKxDnw7BW5Qgo5yrqdzQZL9QaYUKKEnACVcvidBd",
  "key24": "hqUPfQoK2gFkJzghzK8rYji33pACvWyGCx75RBVLPwKwSvS4oez6RQov2UCe5eiqffnbMx44PnU3WiJeVVzHvAU",
  "key25": "4mx5QMB6PnQqwk5qh4Aa2Gdk7vCa8jKQsXcZpDMEySgPABPoxf4KqnkC5d9tUT6sdGyX8eMzjAcK56e7mVjMacZ4",
  "key26": "rkdhfLNdKWCkmrJe7rhgZ64NSoByMrz5vNzgRBgAK8Q1zebjBx2KU1DpQVu1LMzQNw1osUFF4cRJC9ayLE9cKNC",
  "key27": "4DBXDjuGFoSm6J8VREvfdhji17AKRgjKgKLBfxMQn8UA5cu171YetHxGpjoeaHyZxgQvMwGdBWDFCRBUw36Xv9xj",
  "key28": "5cXFArotEFUtcupE1Tcxa7MeMFLqf54HYcvasp5HQbZk2kh5UWPmzpdzfrWGPvrLehHN5FohoJ8says9nutWKiMx"
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
