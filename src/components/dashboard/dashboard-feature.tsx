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
    "pAdsJ9s1o9SiyQvBNv3npCvw5RRb9VS6ZTNYXARynrZT9XcSbm6ZtumrrZQ5jNVejbDnunFMM2zgsTJ1VW9jaUj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5WijGNRQYj2nsDG3s1MRqdds2QAW9eHQZZcEVLQfNfF9XhBvfLX9NvLG4QZNvNzpBpBEE6Dy2mLU2pdXAY13yHjs",
  "key1": "4BQ5KGvsWzp5rWyaE4FLDKebpEA5R5ko94RFhMZejyA98nEwZ9rZMP97589guX1Vk6QTujawoWp9fTfxTMq3PBzW",
  "key2": "1NvWfcDjUwaCtAuxe7R8Q6jMcfVenpwp3jQFA4bbHkKhqzBe4YySKhgv8wJvH5Rg8Zxtk3tCBAmQBxmLUvQ5Wo8",
  "key3": "53yLAEFhjQmuEw8mYsfkExvf9nAwMHmDQdUpnqEwz8JKer8ByGcwC491vPrnSRLFhboRiaHs7cZmRkbMtF6Mnd8V",
  "key4": "3RC7bZSbFqhYod71wFGvMGhj2v4KSU6sv9RdXRUHZZRzi7QJGirymhWa645kQScKJcxm6xSHNPEZSbDWPudXiEUb",
  "key5": "3LP26pn1mHWmCTXHSHbwmnkp6xoJ8jYMKmYmUyP7fRU9BUKwaBwVpSMTLG4oiYKhSydYMZh5gi7uAEWWoEJxyjtf",
  "key6": "2hA7kpT6DRUdr4PcruafrKwu1uGafYmGEaNJeBJNisyjgX875Pj34LubryHNSE6HqpuKU8gKFYD2r6sbLcpccNaf",
  "key7": "5xUP92RCwVwh9Ch9oTbTFZdVHzrsDcY5PHo2wvy9piuDfMjuNuPyBnbjNprBG8akiaJ1YkGo2pvobfaxymPVVCrf",
  "key8": "5ToZCivDtfkJ7LCcwVnVsinfMkgnKg9yX6dvGKBorRjS6XVCGNvfwHtbYenJgxvt4TM177L5GHL36gSRtULVhndj",
  "key9": "44he5kJXwxZnwZjMEo5fYz1VUbc8CScjqS265pC5RGds35fq99DB9ipanmFWpiPezvUu2K7xFAnerWpeKdUvsUVJ",
  "key10": "5KuGbGhCyB3vKmokFXmmQAQrePuZVrX4YFbJg9qSyABV2Qrq9jjhCt5VmhgifSxTZYgSMTRPSj9e4MZVUXNSNYQ6",
  "key11": "3RJcT9RAEKoMNvLqs9xXJ8zWqwDAJbhHXRFB5mQkz8x2nFTuUtHCJVaTVGDcrgBWDJr1Ebzx5CYEkTwc3oyg9Qhe",
  "key12": "TY5hgTLet7CjrkMbCmWdFTj9b8gpuSYvuNvXHg4fkYz341sZghDj4Yq9EBV6GJcwhRnpr7LyN3kgytK4XJNZLYr",
  "key13": "2z63WbXmgQwyjfKTTw7GMhjrpQAre5KF8mgrhAzmXvvJsrdy1u2Gu21F5qpHyh6DDdQA5gtNNEhhYZ4WgKcrt8JL",
  "key14": "4Q5wwi4M2bMhGee3zcomazMuAtNMoJ5xFS6J8UiAkKM4mPecgPzqkxqasT3SkGyEALMwxrGyRAwUDzS7bqt5C1Xx",
  "key15": "jS1BnLi1zFR4gWJthz7Bos2L2xmzTwESTNozkwndFCrKxZ2yDLkfMTRQJD2qNxoxpEKnXYQeRiRxyLH2UyyLLMT",
  "key16": "5gQ8ZrWeb7rFeZ1zB7MqkZSr9exTLrCiXb1bWzcB5Wut1H6bGnfyHNXw4bgE4L9qP9npCZEV8ApWwpAF4umS92qg",
  "key17": "3jq3hKFS514Au22J2Lbx1a1tRbfUhmjYVKGnpFkUokT8CSwmbXaqQxcL9bCUNVAHQLSaDcGsRQ3coMGKVZb5izWn",
  "key18": "5H3YuPF1BQu3cudQqW1Yz6nQpUB59MvCaCnn6Zy5JnP8aMqr2N2qaXN2xbRHfkhohHN5rZY6eqZZopouWjnC1Mj1",
  "key19": "4odvB3prJw4VN8Qp5FdJGcMkJgJQbebMi8h6pNnhfCgHL36fDu9FERB9awfbGLbePjiQcQdR7E5tv7wGbifvFT1m",
  "key20": "2bfGQ4ddaPapFvEq2fsrSRgSAT6cBsNsXkg97ZA7Ar1J17HY42F778nadMTc1TezqWmmHD8ug7u7D1LTadUsNGFZ",
  "key21": "3YnyyJiY3jXRwx8kduMgw7s7w7wK8nrtTUWgxnoioUZcpNZYZYHVZzp2PKrrESBogEPMPVJPu3eQysGSTpCzzJBK",
  "key22": "2oTydSwuszuXWNeZzr2Aen7nJqSLzca5LiLK8ruypRYU1QBCTuU4x29aNoG7dyzmnywTyVL3yG2jnZ324fMg2Wi9",
  "key23": "2rFkJArANBfGPbztaT9kfbHXRySw6MrZPmeumBLBJqy1J1moQzuTARVPJVEMNtoDrAGbsF2HyPW49EqbUq7Gphka",
  "key24": "8ThhfBTLpytwZGryUQ3EApZdP5uhB46CKBE5mK5vd6baAgXrHEcdFNXhb4pLgMgQ7WgVz2gWJhRVyV5GvRvVdPY",
  "key25": "3Y3iWGGBe1v4Wnt8vVXdVFq7UAVm1TpBieM1xA8kwdSR1HvJngTcrNs1HFQ3sBgpcbvr4Zjp16DCPvsDSEkzpRwz",
  "key26": "2JjjXERTLgiRHpkaQGa3c33wE6pZUMxm8JHtmLLqxevtEtBaKjH5UR9nfarSmQkzLMMR65UM5aXg1iDF8EkHa1yR"
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
