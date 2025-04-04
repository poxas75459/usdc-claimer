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
    "2s4qCBYsR2r9hoHoi8BecWY1PMuAkRSQ2h2pZm5tujAYPk5zNAVm3brfaNpCyE2jqdxiR9P6NjpyHdQviy9LiXUn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wSB7W9R3AuLjDkgVs5JanoXJb8A3mvUSkwf7s4v8xyiijeoDRx83f6r3t4dne7cTmaxrRfqRAWW2hFnoi3tZdoQ",
  "key1": "653EsnP6svTDSFUPdMBhNJ71dkivTFZupMdub8tyMBd82rJeY1oJuQFL1HHeF7avhzdmUcwS7vB7xnGuUWp2qxAN",
  "key2": "2wExKkNSzNP1HNBFpsYSypNezAmQwaC6eqio3JSFR9acj937c6ruXxS8YPgVaa2V4TcyZc9GBsWtci23x1TtwYrK",
  "key3": "LfEPGwa4mjdPZLUMXFPwXC7ZCh3y7hqnvCKU1cjAEGVcNQ6npatiYRdAnyqkhxu7P5wfP3X2wqXGayxXvvLudSL",
  "key4": "5X3DFYARDiZDdBLUJPm5SdzXo3XmkpszdnCSYmDDv1d78NE88WZQKVdrG6ookGFQQQ7D6F8uNY2kmSytBsmVHm5a",
  "key5": "SadFN1GiqSZrUG7MckjJtdD8EF1MfCYmVrvVyNaNwUoDDfiajbGJgurK7HqndaCcANr2SpNn6yeLjsZmzTuKNsQ",
  "key6": "3NZNWjV4yrpnMv63kwK54hwAYMZViMJbSjngfiTr28uD6nDfi4Q4oa6f71rySs9WAsTuAm185RNn2TJkHCE4iUud",
  "key7": "5SEGjWgPxoGdaTQWJpv9E4KyTjTFiioYR7P5VGS14NYBC6F9WsU7Qho5ZhntPUFNpHEkz1CxVowEfoGTV8aiTScC",
  "key8": "Hjiqbi7eVyDSzKGdKubHTfzUyTN7XUkaZeSuvbJFRRPtEyGzNxJjEgdiuP5KWShQ7o8TUKzBd9oqK8STX5ZhR4p",
  "key9": "2DGAAw35WSk61Vp7ELHmA4B6B6V6WRuG9uTW4YMjHkdeTtJqYX5GUHn5eqaxebGuNW8VVy3JYhfgd8vH1QVw4fsz",
  "key10": "5KYbewonPeTkLZ2pyAGv9BJ2QZDmqHxZgtgbk7y3AjMsQHZba2Dne9gHnmVWhmdht4rscjt7rf2RgbWjTEfLpXjM",
  "key11": "tEnf1M4iNWsvL2KnYW1sDcTb3f9DcT5gpPeNPSkRyryaRCpn13nmNNt1a97ih4LAy7h7tM6iA852J1kkcA4CJZY",
  "key12": "5mEYtqfogrWEnpxHHfvvqW1VBikgC2tUMNS93Z4W2fUMQ7vg8AiKWTwKfhWmPpuHqsphace8GK7amKW138w57g71",
  "key13": "37g2sUJ2VQuKFrGVSSmApx7BSJyadmhbhoGGtuU1C3SfKi4bPUbvLsQP4b6u9PjqNg183dRDxcUzkzXdGCdMphyY",
  "key14": "53MLh22W8UMKyWBbMDdUskyDjynknyi9wsubJH5hLsmKbKiJQwEoB1HLs4kQRM7m3JiL4NGVkyy66R7nhy2Wju6g",
  "key15": "2kfD1h3N514FhRdPcZfghnbizZ4PDdjrwtfJf1FovYEz5FvEB2jdKPEfC8u3wdQSxPv21w1PavFeBCf8oWRAR6KQ",
  "key16": "WkShWQT9aSUJhbDwE4ppNeWiDr7ck7qFY6UfPdAcZ1pzVTMi2p9YE13WirfSkEhAvwg6hq5ukGskPqKv53NpxRW",
  "key17": "5Jos2baCM2aYoPCejVU5nU5DWzMF55QEWMBT644ZKJRz2q7NAJVn6BSLAJHvVce6LnvZDsb8umEs73Tj4YqNGrb2",
  "key18": "5yE8hxbj8j7rVpBvzYsNsZo3S8GKZVqms4KyjsLq1FNb1suw3gr2iX6MF5zaJ6M5YWEDBz29FVADyPaNHBRBpgbU",
  "key19": "3nxkTBKN2wMk1nbPjQoQopcfBZWMFyKu8oYJg8M6r9AT9nmYtKR9Tx4BykQpQkHqkg5uZb9CheeVGLXXLJP3ShDT",
  "key20": "3KD9MpvTdyruhrNCqKH4xv8BSjgaziRYJwxf98NXCyRJhE6FhPLUwGMokWEkZeCwLTrknicfYsU7buVt4k9DnWbu",
  "key21": "4c7Ti9YzNz9sz5XWL3VK5FYXtevtYEpFEna9SqLnTRph4p4DpwUKdVEEoWX7BgxPvNXKBfA77XxMYsp7URNRZVaj",
  "key22": "67WoHr7EpMriKWazebobfHup2TjJfFuuV63j2KuANb5NaSFVfNxLjzBinDqUk8KDSn3fZhUL6NM8FvsWiMtJ2qp9",
  "key23": "byR4wTvgV7sAgzDqHWroNe1XjXZugVfJGLHxUfrLenQLhTdHLCK1edXKZmcaYF28K9CyLTKiYftUGaaRC55dN13",
  "key24": "1srRduKXbuZ3J1XhubgDvfLEZtNtHSiq8bCSRLrzSfSGo1qfy6acediGXTh6vMunWGXE8LoWFXiexgtu8MpYRcP",
  "key25": "8arfiS27aB7ybjFxY99o3UE3aBs362qPWYRVFJ6MxLT9tjgyuHiBVtonXkHdjWrVK4rNg7tEXqqHmCbsEqx51yh",
  "key26": "Fp5dwnL161zJh2vMa2GkY8hFhu3ZS331mVohmmuMQQErjZhwFAiosACyi9uXULERRdaqTvSnGsK9qfpQHTFJX1F",
  "key27": "2kQbgayiMkW1n5DtPaLmayfxsPP3yf6iLPqimubRgMFVHyhD57FxQaGWLNB6G8y7A99jsVbacqveuag787FBmK7T",
  "key28": "Zc1XLLzSPtg5syUADktV1bigN55wKEgRnXedK1x8FvWsh4hM3phEeNG48A73BbAbzhEojEqNb8X5zmhVVRAt6Ps",
  "key29": "5bt6q9gqqEjraWYGfDyL45UgfMjTegBrosszZQW8cMkcFX7MmFUZdn72bpb3bo5P2B7yqHdnG5M2xHa7QMkxVg67",
  "key30": "5AAh9Bdo6HYMugY5s4nttZybcVJzoAmu5qANouL5pQH4v1eqgfHVooh3Jwiqp42Hu6X4w8XFQth1RsCDy4CCbDaE",
  "key31": "4dwvke39bf2bqynJ5m6k5UjmzVUbp4PDPts5wUBi1yY3Txuy57zN9qJSBjjPRouP5TDhtWXaroUv6nCBh3DrSsYr",
  "key32": "61M3xV4R6KEN5WyG13gD4LiAuPfrgqj6xKVov4Hhe8k4ko3biBzUuuDW7W5yc4JH3i4N5pykcs6K3ePgr5i4GV9k",
  "key33": "5dozYAdPQiy1wi58ecLYjb4xnoG2hwsscQQCraotkFA3M9wSMXgguZDGqgPswzRGkNhuwbVMHzUhRVStUbxEgAb6"
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
