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
    "5ELBBkJdS6SrUMvff6jfbmY2XmYjx1FsB2xLqtesgehYGUEsPHnQpS8vxcYWdpz9J5phBKU1zVvfcvvjJQomD7Dh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5EvHvvA2VWpYqswNZiEk7ANQz3orRpnCFRNwWG8CrEnALvvbnmWQDETTYvQbge3FNLnVfcPqTa4BsbhnK19cpFu1",
  "key1": "5JNYz5zNfut3vpSVuEzUKDza1yH1oqskVu7dB8MAvb8YgWCmehAVx6PZj48cL1QMkQNjd9q4rmHBoLasjN5z9JGT",
  "key2": "4i7MJcxhoYvnJqx1Te3n1yF5RhBiubmhQQSUAVQAEVP2y5HMJeCwzJvdojs2vaWXZtAqAEuXvLmHyG8mcBxR2CQR",
  "key3": "4FxsmXk7KvNQvTr7qXsmDiTfyC1DZjv6SukbA14Jw6yFQe1mC7H8u1zhTYtpYfkvUoHbrb1xD4xjH4pg7KE89gAE",
  "key4": "5FZitNFCzbU9YDRWiKfvQG8FRs4WPa6DeCddJBozVMnYnUhWY66dE61zvT1CnM9b6zuZjZ7xFuuJgs4uaXGsa4rf",
  "key5": "SvbeDWuCHjhk7qwNQNA6UtHzwkBNUbiGXHKQNPebiVDMmdQjJYV3oUkQJV27FyHFMV5AkWPzan5Z2YoDWNaN9yH",
  "key6": "4ZQv76DWezQ2yUEQSUejp987HuCgqjGhEsnkeMCyxmV89QUr5rgfSjhpfCMCYCJPq9wKpuixe7VZMRkrxNNNEgji",
  "key7": "5S5Ybe4AFFmkNYjDhchJWSwcjDcryUR1r6N3aRHEYLMPhAJkcufLapQTk19GY2EED6kGmr4iajqKQg7UNZHBiopk",
  "key8": "39cypGWw26dqXE57Dvm1aHjsR3wgjwxM7UCajP86f9sstKeMb1yN7HuzRXQ5yMbYSSbALGihxqXvDVubUqi99n5N",
  "key9": "2pnEsWDByGdDc4yDGcR5NWJVfosMmbeFhsfac7AiHDsAkdr25182BeEdpA9wXsN9n3rXvQeeEjLv9tsG5emgc3ND",
  "key10": "5g8GQYXLfVNX8t8Xhf52TuALjLRxDUu2HPE4YUGw4YLL3VFeg3VZFUHet2FWTvgo2oyex4hL9SDxChxhGseSEePW",
  "key11": "4tbNUk1HymUnjs2Zy8ECdsm8i3qJx1AgYwNe2HqikdiSnWB5npMLCYCPEKvfe5wSGjJQx28xEJYekH2fTfUAzkjd",
  "key12": "MMvrdKfxQwZMVfSAETMDawm8zEeE9fCWajn8w6xyi9w4U1JEY8Go9mS6M1Ysmv88qyCPb8wMawHxZmZ76QhTp5F",
  "key13": "4V8mcjAMW8wWwks9Amr37bq8JtrKTQCChcCpKponDY65UZeDU6MVagxnGWS1fXhAkKMXQbLDoSjm1CfgKbzSRhS3",
  "key14": "4CJKDXxoLANotaGWg5heRwuHXEH472qgUkVpaiEY13KDP9ojfJzK1YbAtQKaTQyRTCYjyWsz4ySc2yvDZCpfY3tb",
  "key15": "5jWxhi9vZBA2ojQeXQkuqvkR1BRPT57UmxrVC5ycuEDx8aVoZMCEwEC3fS4sBsqgAYjDYgang9aFvjkKbrXmwXAr",
  "key16": "oC74fnJaQLZUyXjs8ycB43wWioPNjENXA36sfSVrH5n5ecXLLWfFPdz9p5e7a83T6KMhiebqt5KQnNEikfDePTu",
  "key17": "hGW8ewudXaEL6Dpd1zMDCuZw2Nu72XUdkbBTcnZ9Emys646UbzY3ikLGeHn8gGJG94JnGZdeGnm157pYPjezsiD",
  "key18": "3BtwjP5e4c7fzSrP2kyCSJsratdyDTp6s6JBm6aNQ5FC5Hy5Y84oL4uGKcSVCZmZDybfnEdcGETefvh7oy8gCouM",
  "key19": "YKY3tdQhWjoAs8ZEC4B8CX1ho2TUmJWTWfBWsLgmRfvVpvDDyxbgqwMhEUBvY3V9Vz9kTycYPdkPxRMpNCo7w2N",
  "key20": "Y444y8PL33D9wq88tTosVzRXpnS5dAMdw2L3eCcP6pB8Z9fHzsDimAggsN5reJfR4GxToUZb1kxVgzzCuwN5iq6",
  "key21": "2agWobCskPNA8qa5eCPxVFwFL9yAPKhgBLJ6m9xRD6JayfEkpvFYjLBDMcV1DZt6mFEx41hg3RLFbuZEJQEQtyg5",
  "key22": "4zXjkobeKWcsFsyAcCQDYrrvaLTPteCUbTPj3hzdp9ZheV7JhmLmsCJkTNBNMAHZAMrUgFmLhHdzAXLaX4aNeSpU",
  "key23": "2xMRvaoGDNx7cRveZRHmUYaxFcUSUmT88hiER4WZh18h9EkxwjHXMhBJtkg8FXekm3kfTRAANMQ5QHE1raQgLabQ",
  "key24": "57tQAqrxnEJgHTK8ENfsEhvmCFdhP3mdfFmJyaM2cSnqayV7Wpgb2aHZASqfe9kAPMiKEs2FZVESnW7N3VqEAqme"
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
