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
    "e5uJqeqVDPMiHY1ZUteuZazLGWjvNMhuAyTkYMTMyYPv6PvDF2UU9SFcB9yxjvcsP4MWCf5ZXBsjEJRLXXUiR9r"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29YrK3WHfwJRQT5xCF6uF97AJWdV77hQM2fQTjL4PWC6hejTDaYCfm3AYJG92oUWrUE2R3FMz5csCjAVNaWigXzx",
  "key1": "4BmBEAuadMJfNvLsUMC9eXY2SSNi38uYYSdysjHnhEgzFyMZ4tQeRBtNCn6KMt93nsqw1Qy6TC7RRp4gAoCs52fc",
  "key2": "PpCVbGsMG1UvtKaLbBhngZMmmjZ6HfeJaX435vXtZ5s3gp6TkVYsyzGZpt3XaQneX2nzwRQWFWj3UdYUB2wTqMv",
  "key3": "22VrD3PdCcybGngoYyPFGuT3BV9LBLUPYvUfRK3DmZxzpcoQZqWHPxjwYBY679yMf9FEDTy5qUB6vJL2Q1gv5BWD",
  "key4": "3HbBisFiqV19Rcq7dYXuqwK7zQDbekrUG5Zejk2NoLBV9b7KuYqxbLvknnvhvHj2RtK1hGbnqeJK7j7rPFWzY2Yr",
  "key5": "659QwHokepbdCQmobzHg2nrT5RZGH7YAsWtNw8Rpj5B8gh7h3Hti5H3FZYyWwZTo2WgRJnhqpob9GMuVNWcoHcDX",
  "key6": "5TrNHWXayR17Zf68m2b3EFbV2qbs6HbAhMcoyWMpwuALXxS1qgtGnnqDcqqq3nyo38XJqF9Pg9VEJ6jK4Lf8u6m2",
  "key7": "2BDPuZSfxEHrj9JWT4gk6QrPpF98qNDpHXxXsUhbAM9sJ1xbtDDXJ91grSwXaf1k8NAXNVFcZuyv1wWivjEbEmr9",
  "key8": "5AaTpVZGg7FJz63e94CPRA9j5n8YDEsH65KoC1ahhJmyRVnUeAUR7T2LUR7QsdbiFVCY3UypimSa5T2De5iHLSrZ",
  "key9": "BqYKsbXedNDtXvEDaZB7dmKDN83KwRuYa3AXvnA1n6aQmrewT3Bbk8Pg6TwKsJb3Baa8gGofAT4WkjMwUTkou5J",
  "key10": "5iWbvAPWrT8Wk9NLScEHBpukeymzvWbnkKMsib6aVkgaUshMQ1cD148Xiu1hk3wggzCEK7VbjQ98znzy6Zf8mEzu",
  "key11": "3G9xqcom813MFrP3bpJ7Rchm6v67pqvUc2o4f8Vo5G4BiEfDenhC4gZi5BVF5M1WHgoWnZuFKL78MA3dAQbW1gSD",
  "key12": "3a6m4t9jnGK9SG6nj6XWhc9DyXB4DQyyJ7D7uu3ZRSpKD8CKgEhz8tdZAsxz8AkmQm3p7Tga9fzf8EotDRbCsMC6",
  "key13": "2du8vvPF5fQxHwnLFvCWF6DQAtrf62TKsi9i966NxNXKEe3cqdkXeWqatMWx8QDwkff49rhyenbxa8eWD9AX5oV3",
  "key14": "5ieWCuVF23p8qYEsKscW29XE22nJ9tLvAaDkoa9RzWL1bQ6MAsbCyVL5tb7AWQ9sL6HWgE9PiXeoutVbsDBhYAJ8",
  "key15": "5ed8cexaH1X1bojKJ867BBqdM4xBb8foUCc3q4W1FwEhtva2hNHEzudpUh4UuFF4A4fPnrsRpm67Gpsaz4cpWAJu",
  "key16": "YQ2EUDD6H5UjxKQQ78gv4LuciFSZUusEyRmVCyTnpLMb7WuUCNvADJ3vBi49nnoR4nz966QKy4pk66BJ6pRSj2D",
  "key17": "58LA9pwyqvp9DRM5sDH9js2pQeLW8mJoUF97Gt21eWQKfZgp8LWUFi6Jkrj5s7sMGKwUsnwiUB4FFVqDqnYRJyQs",
  "key18": "38jkXSEWzVT5uSgD8p4MSTHPAMKzxpvNjK4b6qTt4V7iszmCAcuWsZQ34WDE1GwbDrk7KLBUyBu2epWwAijry22W",
  "key19": "4pTuk1gkKAtxk6zEikfanWxUxsCTRT8jEut2qG3LoYSTuHzpXFX7yMuvV7MoSf31d8kAEHm8rbpo85rHotfs7zPb",
  "key20": "3P1LhSCQZDaEwjiN3e6rSGa24LFSkiJgrxV4XHvwy4e5EUSdNCSgmxEdd6YunoYBNyVkHaiaa3VBpk41HVGUzK95",
  "key21": "5XVn5dq9QYjRo96NBbvHhqZvDha9xjSntVckQxiaeGFG6K63hfxRiLSacajxpjJyh8kYq3tE7gJehp33HzpGxbh5",
  "key22": "2gdF3p8bSCNucxnrjmLAZ8pr85aJ731s7MYSRqoVWxE7W8NdR7PEczLvkcT2XuA5Pz1aQ5uAtrokE9nEETK7WxnX",
  "key23": "4cgpX2SnywvkEmg5P55neXFY3tb5hhKW1pGiHNs8TUGccbLcGizrDp8F6NvsdcVmtcXnDBnPZVbgb8mdNjanFgAu",
  "key24": "3K57YBZkuR8uFvLzKg4oCPHchGKKjR5ELCq5pJb87tU58kvQR14Niw8cx3wR2ssbDdXPe5kd4UTaUD3xYf9unoyk",
  "key25": "3YCZPpAbbAxkhLeGKh7ryec8raYonXDgp1G39nWfguftX2qzKcRi3R8b7tvPBYKeuxk6cJLsaGpHHhBe8TfMA31J",
  "key26": "33nXkKdvxW68SYpeg3oJwwsiGVB9qNLTQCH7jkd6LwzpoLQQb8ZbdchbXzrSC7RcxpdVH9jCsuXtwspsHih3jJuG",
  "key27": "2fkMvhwyg8wNmHdiSfnYoPkbcwjsFAhgD6Tm7jgu9GotMAwpVJAffQXCb9fezT5em49ggp8wh4Y84SPAKKUrzFZQ",
  "key28": "34NcQPERdb1gYxundorcQ5uEhYX2MhxQ3JWq8bxjdSo4c5cYWpeCobBCJorAj2rr3J2nji8bW52MT3g6Hw1YjXXx"
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
