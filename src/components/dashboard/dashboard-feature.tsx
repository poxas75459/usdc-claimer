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
    "49cbB9BHR7gX8xFqSUR32YpyYA9swFEPGXZn6cJw8yTYJrazwghLWcP7FPL4sbCCc3ft8xNrGGt4CL1uzJu9mBVN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ZYrc6vjUeHCtvAcMpNChTYXniQiZENAkysqgtHis4REQVCwcCbyLB8eHWbtdJmXAPKsTisRa6FQT6mKahkfVFEg",
  "key1": "4T3U1VgVgm25gLJM7aCPLjqW7PMMw4g83bEzKisnh2ruiFgHaYANWCc1H33cTGuHPAr2Kj3FyqpgGsxBiRxBpGNg",
  "key2": "3EGSeaYZj26kxjqjrBR8f1V8ZFy8XmE9MXUDhFajgdQosyAFKcF8WB1wsAfGZqodu5KYFfJN1Fwp7sBcTdBxRKhF",
  "key3": "5RuiTtgx3FybLU2DJWEiusYaZR515G5C8WcbrjaVBos4pQXuuqoGm73s1wP5WUbUq3h6mrDksJr9JfxK4Pz2DW4",
  "key4": "36aiSFYZ3MNa3HVCEedhHqEqpxhXJRoD88CMwstBmbL8SMhFvKUqUeboNMaCenZZJeLN51fm4wdu4v4a4HCDH2Yj",
  "key5": "3VEV7D1M83ESSKAKxBUNKZhsdVwBEqXFJ6s1zWWRAiRNbUh2ZGjg4WZLSCw6sb4eCSg6vg22RSM8MQsmniLfagFB",
  "key6": "5hFCH9JrdhZxLE1bE5wZKJkTMhM6eoNNyQgsPUWLCjQiTbXntVAB11RiRueop8jddmvh8HBCfT38HDRYMm37qknA",
  "key7": "3QrSp3FgSPdeeoeCKvbUzjrYjnwwEQrVzruGr8u57ijMiB369XZa7oxbRhKVDGfr8akX49PaJobfdDbBmKeDY7uy",
  "key8": "4k4QkkDuuELWfLsES7EnsC3QUWEq5fRdYNqveMTDnBS9AgbNhYAz6CW2XJeybs9mn4KE1K6fPtJg2NkNEGK1cNUY",
  "key9": "4nvaezTqGrbhaMB3epE6MVifivEaLLnRvXLVCYat28KKQemfaokn7VCNMzvDJixJMijEBywyqDsXg6kZLcmyeGaH",
  "key10": "3QDhhjdNPfdLNGVjK4s5qwELTWpw7FT45LAypFpvVtuENMVQjYerhEKBn7hFuwzfSje5gxDheWVUrHcvLwSeewRU",
  "key11": "48DvzD2a6Z32i5CDfRj3FsEZ3krtqUB4f6HEbeZ3AGt5jocst2P2dCa7PRwnzqbZ36QgAsf35wQ4zDdPpPyoCai2",
  "key12": "4XvxSN8ZTTj5gJxmbC2S8i4xBH6NvSa5He1oqJ4s3qN4Wpfe8bhHsbkLJ4V4ptPPNmedUV3WNn9UDySi7FBHrmiU",
  "key13": "5RJw429ce34K3C5NHvRAh8hYzwPhS13DaUAZaEptWC3ubpSto8XPYLUFJt3RSFFvgzCaaErMiqX4nLmuZxK2mBzN",
  "key14": "32R25ehMdyFW2kY7BsgjSxfnVHgB13j9qZpJ5qUiMa2qsofUs229FgqRptsCh3UCuSyjgtYspSfFJ8GrPHzr1RT3",
  "key15": "4jcGxiBdrZApUvvwKkoM2vLQnrm5FhVCEXDWnyFCewZuWmB1mjLNVKMJwViR1jzArFZdWxYYzyAK651R7wNyGfyN",
  "key16": "3PZPnnDqqkCXs6dSuxStgM5RpNArb6XkpqW2oLZAP9r64LqMTYzaHUk47uFAtwNXHv8DZQdKuoC5qv2L4M4Qs9As",
  "key17": "5VwWzcCaNNb49EoU12T3h24YnVpx5H96fhzWupJ5h1WvtK4YbgajTPC9snHBLtx9KjrLs7JbyBopZWRSaoSRD8AY",
  "key18": "Sq3hhRoJNNJFM3zLbNDfwXA4LTyRzgfhEFQnvk1B5c9F9wZpVr9GrJdC53U9rbgqxG2oGqsPsuSWNWhR3HJvYVy",
  "key19": "TWrUxhK5jb5RXEc4wEKJwhhep6HAQnLJGH6tfUJyXx8wgA8N8chj4u6WBjQMossJfyUx2n1ARwxMtAAZBEtjLYs",
  "key20": "614v1yTCbPAs7jsLtJgvRRW7vEwaoDBffS9pQMxoWDEMx6a8f4QSoYLSBSJCavwdvbq2oTqBXfWRzocFKEGgWxSZ",
  "key21": "4Jram4SkVKBoB8cBgFBxCMS3quFT8R3iSKPk1zPCdCEmDGpghSHWPzce4zAUnLyJ4TC8Y7QJ1Ga9emZ3txsqV28m",
  "key22": "3BxBSPBF2BwCLpSEgm2213hSaQs4BhGRbTAPfpPimv2UcLe5g6hYgZbGidUVwWdUsTst1SFC9Qi6UKe8F6JHJX4c",
  "key23": "3sMHNczkgTd9GnevcifGJ77L2pgfnyGCJSrCEtQpdDCbXzTJVkfKNihZE2Mbq9PTvXtVq1EUf8nHTcKdi8utcW7o",
  "key24": "3wZebT3kSatSNmJpko7mdZRYjPGz7M2uv11DmRSH1iNhPK58G7MwmevX9KMpbwRWss1hCwzmCUQVBkGEYmyt43Z8",
  "key25": "4WwBdiPH9TsNBfRi4ehdHqWb4bYHWbTfGPiNCYzvaacFc49C1pdRpmAjERhWKNQNBZhp4M2P3isQqmUZSJ27iKL9",
  "key26": "2svwpDAcZBvXthPxAveAtD9Wy16vcHTk3nFEuebY2LYqiptmNdvE7tE9yMW8xukt1Dm8vzDuzJd9BZ6mxkaB19tX",
  "key27": "4BfNGgfYLH6TG6cuVfU4J9vkoKHkmNMUPpsLxJK2LVYZ7CugXtmMmVxY85yv22ft7Y93U4BNUsW6iUdHySrQ6avS"
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
