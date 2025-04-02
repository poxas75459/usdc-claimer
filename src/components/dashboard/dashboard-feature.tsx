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
    "3i6qCKRZQosXZRAE8JuGu5fq1xTUHsiKwFHny39BCaWgftgVYGGKKj1iFGppqxXhiZGWgBfudGp5ahVxXXwrnzFQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57m9CHNSYRV8KN7dnqAKe8u3jGbXynKUSguWNLscHqo2Yx5mMUqpnk3FuQ9MdrRkr6WWFF7fqB9jkEKRgqkCCtCj",
  "key1": "49jSPLAZk8MDQaEnBLKV4mCEEMGnP48SAzNDMfBEZzZbccKycWya9tgt6EWAhDjd6dPxCSKrZJ7TPcsuXQJZFQGa",
  "key2": "3fJa3QQF1DFu35eFRPmrs75XHh2uPc7AtLonrwghNUZeuDWQQc9fTL5rpvATZcLxTAuJVSyFxUMhmRsVDu8xi4Z6",
  "key3": "4RVu4JpPpHkDq9UBChJMefCfq1KSn2X5Wu4dbbwKR7zeSxKaPrsEffEfJv7kTByaQ6YMLXSaBpxFjQdcL1xJLsf6",
  "key4": "2CQRYSQU6UprL9yZkz27vj1dNWQJGQpZBykbXZdVjFZLodM1DEvmZgxmRd6hhAemfoJSeqEcs5iuGKs6jBPDSJFT",
  "key5": "3ZQ4VbKYSnLbZX5UVurwtzhasXcmNuP2VxS25iDwm1K1BmD3j7bZndLKiZKMA9gnSS331NQfXz863EmkqZddY68m",
  "key6": "3CrLViKLALunSMpaNmmycLYUKF6sBEJ7hjkqG4MB5jf5Wcb65usFHd9sxJTNKvFuZERJHJ8GoqeAVpgiHR6y3Akq",
  "key7": "nAuZDsRDK9iWnENYbnrNVihtd1yGWCm2frxGkdARvzjo2UGH2F6zvGuKqStiTPfy34XsswD2qnqdpA6HcTNUBkn",
  "key8": "zjot6ocH8S9NtZGkU4M7jjYygvDhAxUtHHR7LrQDJbAp6KS5y9imEiYGHcyUYNYDhiGcaNj1yYNoqTtGu3vSsaA",
  "key9": "5ZzaQhoKW1LW3AfU8jjP4TayoJusYaqkHepoifFrX4wgQmDVJfTbF2RhMMcA9svaccQtMrKEUdPW1d8NegycTE3T",
  "key10": "3EkYtS9f8VBdmGmAaAErVtc3NJLS2GaUZAYi2HThp3NnJHyWVm3X9LZ9NfRxjF2q4SjXWwwWXaVd8bqLH24oq3ML",
  "key11": "4beJQei4HuMGipNydpWEvwa4Cweu7aQdn7b4kE8r1vX12p82f58dMs594eaLqecmDdXJNCma1KhiLLfHGTMYnUg7",
  "key12": "33aWYMwApVwLZyeQUVsB9hfp1oxtZvNxi26RbC1YfL5LAqbQrUC2afZthFenpcqRtpWjPvXkk6wdyGZ9nnuaF1BH",
  "key13": "3CRhzfu4rkN1Y3A3shH3EvvorqjiYr2iez2kG1MrdQcTQ6aHB2gcnkaffKfNzp3ZL8QnvPcEW18xq8HezrN6LrYu",
  "key14": "63ZXkPn3o9VqsouYsnLRb5c4LsxnJW95Y97LB7PMnzPWA8WUYs5MctY7PehNZAYKzfX4Nots5mjY73Q8bgeCHvFK",
  "key15": "3VTGdBPBkrAbXcRuaLDwJP5xnGmjusBuFnBFSxZmhJHVRKC7QyW4SxYDX3GEPrycdkH1YvgakjooaSus9smm5drz",
  "key16": "5XCiwdVhXnqU3CjAVMYAgfZCcdmPvUxsmgibe8dMoy6gezgD19LjfxUUE6mt24gMVKyaxXJWddkfVAX4pK8Gk9sp",
  "key17": "3DwQFTaqPYtMKGyVZeg9rjd41hr3BzgSyrM3J8GZBnHiCHRbv1BhjucPtL5tWNd7nsJWSL2LVyUwacy9jGwNJNNt",
  "key18": "5VPkYCb3evrChjrMYYDywd2q83oDaeQaeVSPK7KACzKF6kCUaDbgXiECMuLc6nZVTpkyco9nGfuxcKBzqNc1j4eS",
  "key19": "4Rh2EENuxwWLLRfEjbGgrrJ75tX7zM1e7utqtEyRgfQz3qTDVTf94NNAoYtyRcnjuHUV5NpZNsEwxpdykT3WKqpL",
  "key20": "5ByW2MQ7uvhXzTsKchTHh3FfTbijy5tM8QFf26mAYMNG6giMcXAeGrqn2a8rG9qnakyf2gjoj1SKp5Ymwim9j4ED",
  "key21": "5gmLcQF3iutiTDg4MHw984ycBNMGMha7BvSeL8hwuMHKfayf6fZJMPt7AvjVXgE1pWiKJMuq9Fw1pCQeYuBJfMVM",
  "key22": "5EnVeo5hMkE2JrbBp3dPxdFM9DnNcrwy7yKAMPND4GGekTtVDnaUZqQQScV7NfZkYehafsapYi43Cn6MHJtk6raR",
  "key23": "5cXgWiiysztxxGykcZzzCKEHiwXgPYmAzMMeVZxT4u7yXYfoingb2STU8koNw3baeY9z1pPYQvwYWtudYvqFyGtD",
  "key24": "3vJdBeiBNWNM74zmgjo3UxzUJXMrDfpmg1mdWvCHawv58dmRvXEcLGWfi5jrTRqUquK4k45LBzdoffKjJmTaUxiM",
  "key25": "RMXgkR8pipdnLnUz2QnwGrgTePkZcB6mScgcjuFRbjz6rfacwjEXnQy1k4eHMKbwryMtvaCBGphm1Tu1AA3MDxF"
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
