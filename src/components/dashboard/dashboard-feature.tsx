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
    "4Mi7yH8TEjkr1gq1pNkFwi8mQYLHKyzGSWoENpZF2Zt4Wymqu8nNtdWhvPRSNYNHLS2o1oKeUYUT6uZCdQgEetMD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31HYkja3pbqc6GziEXHMdY5uiDvtgXDD3Lm3SRLKHM4xqRAPeccmDzhkE59nfWDjEKAoSTjFNnU7vDFbrLsSwoYW",
  "key1": "gzA1MP2WFmw2QZifw4TX3L32FNm72AMervmfM6UdU2V11zjNmt2haFT7bkETePf5GWAvWruAKjyFqV7c8zA9HTa",
  "key2": "2rPNChACMVjY2bcGHFS9jeiHceFm9K6qQTxSoCeDKQc8oi2tKdg3wuyVBwnMG3nGjVs4RiRCbESewvgf81t6EQYZ",
  "key3": "2K8WLnyrHa1aLgrwb8Gr673iWUXcJrq1UNtEi4KC97sbQoux8GvK1WF34sfRmgrwLZqBqU9bAiGXGE6jfTWXsqXn",
  "key4": "2qqQWGgHnZu96WKvFaNG2oubCqg9rzcdv88fWW2VnftF8axrc8rtB2hZDW3NM939StPQhxCgVsNTXNxwxcqEQviV",
  "key5": "3nt7xfy8DSGjw82dqFaDTtRZUKRtCimqT9t8WqsnktczVNxyeTX7n2fs4sXdHNM2aEB7RwnDJZ8BquZAgvu3dBFn",
  "key6": "2uTn6axBGRh2Z4BgGEnF1rN9zzDPmydavTVHtfSfvYyikkTwztjot5oSNiGeDGN8Mrb94Xp74iRFUfzCN6ZAujX8",
  "key7": "5sdvCGY1xBbT8gxfaZGR9TvhTmEbeVEB7LEhuYhuvzL4BsUNkcs5qbNonTzYNzNTnhVCrHeRqGLxKq7qHGxxZTJL",
  "key8": "5W72scAG3uBaTLJggNkJ8jDwQ2JYKNHajz7TrVjxAhDQgQGDxdF2FZmphwUZ4K16uZeHLDCYcficas1es9QjAkvj",
  "key9": "5CX5zHJx96SVrMVbQDRYvFPEGV1WkRNMVXsiJTXihKDxYwNwDrsDTdFadBNXQRJBR7q6qjxx1SFgqsuURHXehYg7",
  "key10": "2pyBvRfey7UgfdoU1JUkYFrwCTaunbpg4u3ooa1se2opv2T9c6y8XDhhTA47m8j5W1cdjYjfBDnTUfgSwau4tQMP",
  "key11": "3sXtn7HhisrFFHvFSdgEWu8gZfwABGkuwLNN1jjj9NJa7bTnh26qPEqiFMWcEfMAj8h6XSaNtbB7C3vqiWxyhzdb",
  "key12": "3MREmAJpjdByTetBsWM6UkitBTchR1xbB9aF91GUzv5LkjwZNMj4fUHFBzyfUH7JsBnHnrMzoDbTLNZeTnuvY2ZR",
  "key13": "3KhaW7L854JmQhK2LTscJCxt6qi5yt3gbuYAVXYzzoCeVnhk5YVnNM3SSPKNpQ2A8rqsXSMyBzcJx6LdsXB1pV3P",
  "key14": "23B15KKeBZwy9jRCgzCAFNMr4BasCp4XbP67YYECVDm2WKKehRUKmfFg1tP7Vq6tTjF5v3eKmxzJEbmz2DJjCRqc",
  "key15": "4mTfX8YUAqt3Z8qH2Du3r829tdwmuuRRw8NXe4EzHGDbjGpjDgUGGNimXGZ5xLhUprn655xk9DVDy7PbPCTEyN9v",
  "key16": "DrqcPcuPnuZoPtTqvWZXm2epoefZv7eoHUDJa2b5FYeL8KC8dMLMmAzrgVs4xtUQyc2F6JGe2R3sfKaknT4LZ3Q",
  "key17": "2x1AjGMbcpJCaz2CTQJJeotCSYHda8aXDGUrSefxAjtZhVLUSYuVdLaJfeb89spju9Ajcdcf1s1dwTE6xo7KuF9m",
  "key18": "5JgDo5mXvJ8xgsV5tYmEEYPKkzUu716uEEnT2DzcHYf4X1tzQh5f6uy9g9Snr4B4CaQfEnnxGZQ9p79nbHAopb8z",
  "key19": "4NrMAhcx3FtYrUesSpNXHVijSPqWN8oTWrzfszkZsPqb3tAj9Vxbw3tJFq9kE6evoptEzwsidS4izkLwikWUQduk",
  "key20": "LXT2m5NcB3qkeSFyEogVguLjV5JJqtvy2TeWunbjjCuYk5ZcyArMHSZo6NbTiPd3XVGsEpssXhGnXC2AJSMckcG",
  "key21": "5Wv8vDQBLi5bVWobvgLJmaCya9Dhm1kC1eUyzG8S1thBDdRe8QrS7Wy3NRod7qPjSswrJQ9aUvbuvVmUeKEq6Ax3",
  "key22": "3pQtGy3No9M7cdrydea1V1rHHcqTtnf9bw82KazQT5s48uUdfjJez1azDrwi32PAuxPVZMFhG5XWspxEyDPNNH1d",
  "key23": "3ZhWKqkp1Fycj34t8b7VeS3dVzhyCmuQ9GHjyeRyuHxK5GBGzCc4NnbQ8Sbg4QjmeuCuvAiBdpwcNzpifM3hKcid",
  "key24": "WpJ9UkagUJgwJMjNRJNE9PEuEd9yeY178k7uXiyQFEPBR84xg64u6A1rHs12CpdR1x2YQq3uHj2uquiAAtkswPx",
  "key25": "2CvXEwz2C2nx1SWn4rCw5Sgv3KUVXsTd3ZPaJG3LpnwyC2GCoJQac8533UXYhmMurgJchCAoeBbuB1KFF1yxHK99",
  "key26": "43AgoSyhGVq4cVZXtbwDApoLFmBWzJN2dADSv9o6okyrKZ7QP6a4vPuDJ1A4Dg6ZV91zWeSg6L8qo9C9xqM49PaT",
  "key27": "2KXm2bFyWupnJ9ZPjkYbDdkWwoBJccPnY6ikcimHRRRLQJAcoTZ8oLWKQJxACFJw3e17z3j9FZpyztBc3AtdMrGz",
  "key28": "2XajAFoiLyJ8YpZjxCQmukLtxvgTmhk6gcHMyjp85g74VkqgAUdEpDKVAdXphinyxPGMNhuZe9rNaCMyLdLP2x8N"
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
