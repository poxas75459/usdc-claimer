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
    "58iUDLMP7tz9VXkHDHeZa159TnibesYq3TVp6KwZqa5SRvH4MYMWZqBS3KhjwEmGZbupwVJZuW6j6nGJdoH1mmus"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3FzKsAfzSHfoNkQKDfV7frf1oGcf2zZHftXGV2QhgG9McPE5LbKm3BgvRvjWx6N1XVjPfS57yN8zTGtvZEhVtJTU",
  "key1": "EHzrJHpxBxGkJtE7URNhsX5dya919JrfXdBtyKhFbyuHRhxDDvuD8Rhw6DvkkZHukrUKt5nTx1tSkpn1c8RqhNL",
  "key2": "58yxNW53q64vtrRTi5McrjziGEJGPdgTkyA4cB6Ymw7WozENpDiWY1tpkmW6i3pFNks6dZEDxuKXNuJuz3YZMVxz",
  "key3": "5RziY6RyAMwFrETpNRYqfdwS56p8joMVLmrf6Ko6aUtgK5jijarjgAJcHt4Rn4CdCmTrGY9MLxQxuGBzAzQDsbjP",
  "key4": "43xrG7Vtxdjdj1UT9cWQ5x3UKUe8CD77EBFhQcDacJ8kGcEprsLTK3ZQFLp5WqmqwmHFk2wsCKkC89kT7nHZsTz3",
  "key5": "L9FnttVvzWgGNVH1w291evEoU6UW7AR6YUsUUHcFLottzJd9sntUZmpsFrNRT2P5XTfvnK2Aym1JMB5bRQeLeQ6",
  "key6": "2mxo3gGWMKATYrPaGquS4yr1qt2Ngp4g59b8GDmzCpRsEcdtW3gm6m1dfsiZTdCwnihmsm7BPWzqAdqL1zy4eqw6",
  "key7": "3BStYyXdxXw7qJaVaFEQWgaKdhmfWyZbJgVZ1WEvswk4xnBGwozMutwXmiQvExDLs8K87SW5WyRg9xijjQ4aQuFv",
  "key8": "3XGLUR7NtV4Z7Qf3JvY6PfgPBiXAwStvhoEfL6qqv9s4os1FQ1ptprhL8HUEeDVEjFoatwt6kPGkUbFC624xbsus",
  "key9": "4CKxJQ3s9FbZEup31ymfJtBQ2j231ZWsAh9KeRFGBfxYy2yoMnsxVB2MaZBiMDC4HWvfG78Gd2B9bXnpSxSdWYW2",
  "key10": "4vcixDGmDaMCTBcNnrkpdFBuwmis5BoV6qPNXZDmNvhvXxJibZjwesxTWRAKFoLBAWoJiNmyV4BvM7apbw2FfRq8",
  "key11": "37K9LKaMukDoYufhZA84QF6nTbAehTuytXcDvBdqPWiZA3g4qe1gGzodcz4Nyt1o3EFWhU4sahtQNYuaC8kMzCdc",
  "key12": "3dfBYjmJfQYvEkXktaBuq7jN5N1E99P41AneAD4bBQEKNNedFuwFjkLwptGaeBXSwj1jUz3qpLWq2LnY3TFiNTom",
  "key13": "adx3Y6yDvWp5k4wA53hBVZNscj4DKG2Ycsn7VxVnAEbJDETuTe8SZ8q4JR1uXaJyeXWHXw9aGBbVSK67k7BFQVP",
  "key14": "4MyRzbwL1MZcoEnhvDr3MrHWb2LkrQyDvvNsaPHdBygya2ZvyeGQs9qZ99vFRbWZLq5oS6t4QWbUBfL8R93zFMzr",
  "key15": "2QRq5ArjyRw47dtkSG2JHXegXeGDqgbTNZK2nqEN1chqxq4q1eiAWjoMgCz9QmVqLcvCypTvJPn2HN1LniP6kwYr",
  "key16": "259zwgafHbScKmx19bnGmnUXkDrRM4NBGgBidEaMFcqbTT6im8mH4Rgk5YLbfveV6CLWYx44YMBekrB7qys2k3vS",
  "key17": "2eMMhu5NPkrLFK37cJ6SYGLx6p5JfM74braAow8moAtUbGhGUo8sPeZoHfLwjXbmv1QeTvEFrexKeXZoji7um91n",
  "key18": "H2hM1ijZkH4ALDQKjBVAAE1FVLgTB2uRP7rcrA1LetQ1E4PWJ4jpB4cnn6sYG8vUFH7Rq5zU4Crahcd8PDbBnZX",
  "key19": "2v6DZ3r6yGpiujvfgkEggne7NBRTt1oxNFTm4baDZb9w2vtFSjiaMgHznqToMf4LeZwEkVHy9s3YUiXG3K25kwyP",
  "key20": "67cvQg8sJ7TUhd1f9CGwuZ6SeWtc6WrzJRuCfEmQcU38bDxgSUuYfnUuagPW1qK6Wjo2ksE64miHCxd2ZNML73bY",
  "key21": "2qSFhLskJwSANx6SQjQSP47nnuy2pFPQZGxjWyv1eyjiNb59HVu5Ar3ebs9P8MRKdo7BRWvAkKD9tF35sAWY7LoT",
  "key22": "5MW3preX9V2CXryKhXcMyEv2uBbWcVMAwj39qeugvPnFDqMfGrndSXb2K8HurT5QEkumD2LrAzcadiHReWtNx4Jr",
  "key23": "4Dr9z6RSNM4BCTBF8Wj9h2MeUZT3F7VHLdpZqNuSU4TQ6zFvsTZNP9tg68t5Vg6brUCAdMujUjDqWH86DC6LWJbb",
  "key24": "58hgHNgxrCjHUGdi8yaRX3nUDbsxakhkvgojYoYBhzytffxT1DE1spdvNdWbySDPtyKrfyYZoDfcwonmyAjLhcbA",
  "key25": "4N2ZBniJj8aHEM6gt5DKT11qPjfR9CteThtrrwh4sjoYjgUQq2Px9F8xHPfEXyWBzM5MGvFPteS9CWZEdQuqesxv",
  "key26": "2E9FAbavHncCo2xPoJYGiYjzaS598qDWNAQzvUjTfLNqUQQP69pACnje752Z14Qe2JWsc21zLLS2vTewdMJUwZ9x",
  "key27": "5dEEuZ9ME5By1ZE5FbpGYQms4THvG2grb32cyXejzts4CFahdnKXbR2uHTVJdgzMaD5AFjxA1CkuZhVdBsekRR2p",
  "key28": "5CPLDUoP5yjiWpBkBk24MbgeSxc8hdpoeAifjbRc1Tok1NVVUVr2bw1fSwPfc8aV6DJB2cTLogdbA7egopcnibNx",
  "key29": "43QGXRnwXcZD9RJQ945xEGiaWSAoeTBSkJ6fZwV1xuPJPXb4zymK9fGveZw7aXrk6XP3mST7vgAQV2Wos6BGKXmx",
  "key30": "3upXXGjCsepGNE4Q48mB9HDvSgArw4w4u2RNEuJjcHzoi16b6V5fyPXHuYM3XKcAS9UJuypdMgQHSeRBZ9Ad31jC",
  "key31": "5HY6cisx29W54hTxZ3dBDLJXjVwFCfcpUToWeFHEq9AZE2ybbyXxiUmb2JabU8hAdko5iKu2KkfyZRNL1GNwsLKw",
  "key32": "47UoKR1Bkbmpe8h98QkeTyYa8N8Xcwh7uqUtSar8W4VnG2XKjYdKKH3ju8qtCYqBAbsQtySCWikJ83eC4qHPv3P1",
  "key33": "2hp7L4vkJ6PJnX1AJqA9W6xgDcSbkfxtDrBn5n99FCiPjK4dx93XEfK6FLauZJc2Lt8McEJuev1ZQUNzCkx1paxg"
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
