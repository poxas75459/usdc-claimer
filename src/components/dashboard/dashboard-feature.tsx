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
    "45LkiroZXY6c4QfpZheVjznSzoCyRRY6rmkCiKXx7P7yv2xbWMyU2eksY7LrZQFWxkcQaFJXrNrmZb6kmNaz6KQ4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4uRRPZvzweYRAh2tw6sHAmamHU9b7byW39SkHAvpVmeG117yktuozE9gA5fqCrhQVdESshRfL8UAGHHoroyeH9oF",
  "key1": "3CD6JZ7S3Kq7NFNjYdQfCgztMTYSNiZA9nB5GWe7ytJ8sExi4LNNHohcjGsqXkVmHpwHL8kLKsmhHY5xGNwwPVGN",
  "key2": "38muawasQDUFijT9dRv3kYEwyPn9i9veihUtKiFqoWGQ8YkB7q6jS31xRcrE5oUp1XeUHHLLYfmniuDHr7NkW92K",
  "key3": "36ENtdnESrTABUwgaaWQXVYChPucxsxkVm5Hik5FtDJeH5hkceW5u35aqaECma7pRYxHABMudhbH8QPKQFtjwwxF",
  "key4": "4WbhAbwuaQvuPFryaVQdva7XcZmBdjBCKSnZxq3AD8GBHb8iaSknP7wHbeR8kPzNmPvanNhiDrRA1YZWgKfG3fhT",
  "key5": "3QA6VvJiWYpM7CB3BCaVp9oVBUbuAJrQKiqpBmyKBAykutcrcKhg3WxyjwmjiX9WpbmdhQtRRas3S3zkHkzRtxVM",
  "key6": "2uc5Qn5attBP7dkxrrgk6mGcjAXhCk4iSmrp25djKCPMSsg2wDULPktoiCbu1nK9YC9VkhciPC3WsiQ9XV2UAp1N",
  "key7": "gGsgHz5LbYmdXM4PMTRVDJUyn8ESkFiZsD7mYVbZcMvLuMPWqDmHCytrkn1gyHVtck2KJ91ToEksJR45rT3WupD",
  "key8": "5zCVerKsLMxLBz5ojf2y6qafKauoLGe1sdj5MUEgMXH6Cyk5NL9d8x1A2ocyAPA7mQeQXoAmDJvUncThp9RT7Dh5",
  "key9": "5kAxh1M81dEEa1BXW8rYoS1zaUJMAvKNjHrkBfPp5zVwGPYiqB3Dd7YkAXhFjNiwaGjUEQbLU3z8x3iP6ypdHzjB",
  "key10": "57SKXhKex7Z5dtvhWMMSJ3EVwFMXoSNqrvBZrrbifm5w1W6Px51bGXbp4qSPowc326nGtVrL7jnDsLc83CPEqzaa",
  "key11": "RppKQ51fi56KQhjC28aYyq9DWMw4nyb2RmcQUpopiZ2HHmp6r3mvtKHqD6mxFxYVvDYfgBcxoCwo4pYFcv8mCnY",
  "key12": "554e2svXUbwa6fGuQVogRCEwpxgfK4ZdmKasvyTopoy3kC5BQB891PGVA14FbXsdwCwjc3Yp5ZJRUVcri4KqvVCc",
  "key13": "5avjkPj1bJkbBxrnFFxwPdZWW4BN5DdQ7pYr44ERBEHnjsDD1uXaJQroEye25dPqkVEvdHoVQF93ktoUAu5my1aG",
  "key14": "DZn8DFbzWH8vQTWxJAFuLymdzNsxHAFnEiNNxhyvsj1iwMuxmbNn4jpHAF6FvEHVs46DNhj4uFDnmD8zRQq3CF5",
  "key15": "5L8NZ44RwhbYGwfCeyAEzGACPvZzM2x94q41Mh6MpDkTU5piswoCa6adLebP1mZXTDUWSQMMTDM9qEfUnWkiHDao",
  "key16": "zAnNTTPYyZwttoTKkkotsADgNJfbtyrjYXyuz3nQFCogzbpDk71kQEwfzgWXbPCCzKkwAEF9fEx4YSusNu6xjJZ",
  "key17": "3spoAchQtHLWLTqQHiuyCevazxqfotJECrHgMRGTjeGTWheQA79sUSkCDYmLf9BhrrR76prABxKzFzn3RcYafxBJ",
  "key18": "2mAv34b2JCKU4HQGsJEeomV1bX9SKfqp59Ude9TSJtxAihxPgquKTtS8YfWRiovFNTisJZ4DvP59YvcPbFHuivUx",
  "key19": "4qh12zcUcCbkcYvvmeSYgbJB5eeDWJEJxbJsiAfkNrAvpGfGdbVjB28ySjHz4iRzvQDJgLrKJFT7STXxvrF6MSJ",
  "key20": "2aGM1yS5KPSBTiA8sbZiqGvVk1KeQC7YNhc576rypgkukETag6tcHw7LgdcEb2j28iPmk8rdcmTCsEaeKiqX2wuH",
  "key21": "2XmEYatjYm1yAE51Gk8HMVk7ijFknafrVd1azRvgceL43J2C5hL9SPi8g6jcmvJjKvDjTbbUSHZw8RgervWema4A",
  "key22": "5rX4f4vQi6MhFfYyC23RdyECAisBRou4CPeio2gn3fGhfyyAezwL1e9MMFwJmtFEYD7if9pxaSBVPZZkR4JcHwfD",
  "key23": "4pfg8RPXb8fxbMNmChJVRrnHsrvo7WvzmX1gmbpDb8G26Gm46t9dPmvKQJpRVLWhqijoq8jNidzDm9kMS78L8VF8",
  "key24": "4cBZveomcB85zee75u6hkV3q42axkSeWq1v6Tkpff9HJP12KtcsoGZf7dSuqmVPLk8cfcbZCbjT9gyUdkN9VhRB6",
  "key25": "29iKq2SuBXK2ZaPpshzErLzfv9BMJ1yRjefBchL1YmiC6ReLBFjUHjPzGF3yBn5UFsFwhW8xNymLxPiDqhrFH6ux",
  "key26": "2FrmiNhMc2C6m1HeQwqL5YL3hmaKmkaGq4c9oQbZXCtQzjuCm5Er9BFFsAEGj4zsrJh1BbC5t1FcwWwo1mvK3qDk",
  "key27": "VQwn5Y9hNrhuJr3MbY8TrVYaukVjxpx8ziLSxr2SsZ7dD9zqJDqE7RxqFQ45t1C4pQSD1x8KmY1frxxRwUWR1BJ"
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
