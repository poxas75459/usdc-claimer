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
    "48HJNMc3jEYjuAYJwyi5QBprHapCu7yL8b7eFQjtRcTpvKeXZoxeJYMMi2QyXjEr4S52KT7Rp8XLuo2jGsPrpnq6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4SCmF2niSTJdD9n5CTNuaVKHQGuQKpa5jN23TdX7rEq6e1at63ZjFZ5mqEAEGaKctkYBCEZaEhczBwn1vQbma8Ha",
  "key1": "3PddPxS8wbWu9Mnr32F1f6aH9RiMmNtDEWy3ZV2r8Q2KFiunu8XASV1rw62PTq5AZGnFX7qyxAziEu4GyXvbdMho",
  "key2": "sLUvFJz21U9uVqbLQQDiXapUbcSmqRxqzepfdAxzDJfbYQTNAYxQburbkMcGEtVyNxVcb18mEGAd6G3fucv4fTr",
  "key3": "4ZUbmzaFUKzVnaNXGcA8gwG7z4DDVW7TjSEnmPuCPNMFqrHHbjx5Vp2XwpaFCendPH5Q6QfmJSe1yQJAirUbEzz8",
  "key4": "UCbrc17LHG8HrXeQP56oppCJyotp1HeswbLZAYP2kEANGCjURTCoAEguw7t633e2vvUQrLYV4ha6N889ajWLprD",
  "key5": "2g4ehd6DSGb3iCXYt8rWF3QKgc29atZShKJumJRDbiyQrSf5mvUsGdf9mVeBcqUrGgX1VwCBrznRoA6idn8Gf3jS",
  "key6": "5kUT7DRd3zNuSmhxrHqrDv9Uo4vbaGqKxhkF8ngR3NTw9hvnuKGQEWaF8hdSoejYHyUQ67vDBdUshVpK5qTCApKV",
  "key7": "5BLiAKQnBniGviWrR9r4UmGvkMAvkEU5aWvtz2gXBRSqLaU2kmTxSQcptmxV9nhBu5k9njMpeuP8aBzYeWGtQfEE",
  "key8": "3qnwzV2STdDbnnn4sUmaTCQ3vkPJxZYxnkRaXy167zn8raJwdanoGNUhGchuY9GFEGLyqFnid8zYg5CUvpcNTXKM",
  "key9": "348uB5XizGYjDqitUXBYTVz8ffzpehxQ8Mp56H1a7xiYbxjTHp2vVHsXb5mBXmmYGE6mAy23LaTgDVvPt7LU9Qpa",
  "key10": "4JJrYsup2qJAchhAPMHmC9gfv7Vywvpsbg1Eym4XpdFYn6c8Y5yCah4wqRkANfzhg2sKENomKJo3gmCzKpqAaeXD",
  "key11": "4LyfTvqftmsyAVtxsxU59Ew6cMrgevMY65bSVqzXrYrJQziT2cmqrMhC7wErDbSz2Rdp2Q11mzM9ka8vaTRkB67c",
  "key12": "5cXxSephj7ooywQXtJJSpnoLSzhGBgFTJ54YhTkNq4QLeTXuTNrhmZZ1TPW172KwDG7LheWetFZkmqbxTFW93SeG",
  "key13": "2QRUeTWwxH1sZ4aMLgMZTENVR4yQ4kHhJFutFyRqt2nAnUmFL4Hb5QwBnmmzHXVpUyqmwn8QhLZizvoaNipEwWcC",
  "key14": "WJhq8LXwTA8mnuaJVS37x6eu7SHFLPbi6Ve9ZpbR1NCRYw7TaqcNncxqpPfXJcWtTpuSv3dSNN5XUkaGrvUmpgQ",
  "key15": "4CEHAU3qrCy5q9FiEh5GgwBXUHm139eYUQnBEhPneo8gCrv3XuQBRwmbrqtYpEXAU95V8UhuzctrUEJZ4hjkJVbx",
  "key16": "3mSL9tH4y2pzDbQYe5b6FXg4i9ig66hUUnd9tX1zcWBtKEVmqt9XRftekBMyqVqpdycoMTfgmg28XMU6B79JZ4Pu",
  "key17": "59RLKhh9RakoJjxDUygxxuD6s89pnqCmv3JjikiMQubGhnoLUXMCoSj54Ac5KGJdCS8cdzqRE9tF3XqbXGWPJ8dL",
  "key18": "4zJhUaQmHQrS9V7DRExxjjYaAhqyGGJe8Tuxc5mDMKz8BqgQYybumktRd2761bdabPAAcPrkUrUFn93Wmkzca52u",
  "key19": "5sg8uPCbBpjsCmyk95tA1PPGt5kNhpTQAVuks3h3fLp68G2gvbaws3riCyGQ42ZSGmj4D9Tuytmtf64DHiGrenFg",
  "key20": "34fRLJWNGPAQhk81VC89uxRHycdGAW6P4RmtLLFCyFovZseb1zCPPda8Kkh192xx9ys1H7ykoZg5UheFCQnkXCRZ",
  "key21": "5PfSSRxgJHD7fTEXsFa3f9heUfwy2MRkM2h9hVPX8MskRt11dzueA4mCWihyXjAvJsZ7KXE7k1ZwwdUkCec2u496",
  "key22": "duxELoPcVixfryD3XD9KerwgLPkhR4w7JHkFgR5wBzPyDHVKfYjwyoqUsF4H9B1LkndCirCte8WA1nQjzYS6h7p",
  "key23": "2ootxycyYajzJA8khJtELkfE74YFUaLAxMMbs9dFKcVBnYBKfXHTebrSHZTNeavAgPr1M3xzAqZ9RsBFJbBBGruG",
  "key24": "54gUwmozAvdV4zWY2ZrcvEGsvR5BhaJ89iDWfuTYe65sahkU6iQrDRi5KNTFmp3VvX8ZK5ipyXmYSu8mPNE3WY9v",
  "key25": "5KJe4F9gZNf9ZZshBUZstGBmiEvJwg7zMJANdZagouATz3SbSmGfxWJMmuhhrNs8V7vvqgzEuUZpUYpxJ7nrbjLs",
  "key26": "2eeiJ35ka7m9ZSKiVfe3QfrpyMtgXq72wCg9zBVushJ2U54xwKNVQjN2kri1TJnbd5SuGkMXWjyAdgDSoPx2Lrij"
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
