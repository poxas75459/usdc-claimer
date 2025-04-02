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
    "3CyXvueNC16Kzt7yYCyonp9L8PXu8PwuFcxCBNZ55WhPxqz5FjJJpSBb9cbJrFvZ3TJ6h6aE3k6iDeXFuPeY3zCg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Wg6DBodnXnJmgHU5MUamuQnXULzCFDQ3JmDHsftDX2knTWxQB2xPKKfQu7c7HkPPz1epZtWPUEi2X8EoQ1WZaV",
  "key1": "18pEFfJSNHbqyagSiLiBqTNS3tqNE6ysQsGyzeHSNorvgWdPW7G4Xxs5Lp5YLxfTfNJFXBzrkT152ooZomCo2TB",
  "key2": "3araA4NNEBG1VVbiyJqoKyaugrTVbTH5SZ9xUAEtVZT8Hw7A2CRdnv8g2Gyx5NB4gJ32LB26zi54kFvtc7aMrkfz",
  "key3": "4MoZ5HenK7gWQLtar8MdZQGQdrWmhWQYMjGyb6DBiG14zcWeWyiipnWMYGKc5TNwHGZ68f2RFGwPrRpHsErt2zBe",
  "key4": "3VNnk9DLyDDuCwttehQ2iNeZ6bqex6guveZWjR4VxQEibJtmgAgoQHJwYjuuJJHEtJ9K3wUoinbf3rrjRC598Pye",
  "key5": "x38WfQS6J5w6tHgMnbmUs4vJyx4sLPWktvLoh8koVdS3C2RFstS8SEyZhfSrotMHhH3vqwu2L3g4G8Kzdo4WbLe",
  "key6": "2KQSvUzqUiuMx6mvtu3VitBLuAcSXNL8yTDCnmZRwrv3JfEsC9a5m6DraXbLiTYG3JBuwSqm3oc9PbzqjhNqXcNW",
  "key7": "2jeoMqa6K7vQPsy9y5V3qKTJzgaR4FvgFMf8fUyCWnzvFA3S41V7GVwKys7D8WHTLiQLKyNidzMRDqvE81FSXLgw",
  "key8": "J4gVjbmrF5zE7s6hqAcAQVvpz1e8EAek97fhWn1DXj1E8e4N1vaC9MGrSdizi6veyTDuUVMotAuFNVZMHAjffq8",
  "key9": "eNd9a7z11Br6mfnvGitjTvwaf5mACxihTLyuWpKAnBmNNuF5i3WXDXmEbT77Qb5Z7LTLWMMHcfdripiYk37Xgqu",
  "key10": "3fKzMbgWE3LYeVkaF7Hr1MRERjWoxRu9ZEGeCQhaDD12rcVZ2TqVRwqkPvYFYkoYbmxpXCNUt5LVPffFzqvKcyXX",
  "key11": "n6uk11JMAVakNh2qiRGgoZ1LwMTUCbg1ofmWAYQoGTYmV5c4LK1oQ3cdcRtiBKstctqRHoLnWD79GRu24FQ7UYx",
  "key12": "4JgTg4FxjjygFaekrdBMAHy5L5EmikaaUeqL55jZ6uC8qwuaX2x5gWx36X5Y4bu1XvtukSEgLJqDYvmmvGyTyA5x",
  "key13": "4fC2kJa8PMdpFmKravnTvvU56LoQ5JqP2uf1hCvDhq6b2ykop2UHBPMRZr2UUq6jcogwqiVjrSedqj7uu5WJkBEu",
  "key14": "4ZjVW9gZH4i55YzwzZ1Tw7rP57VdYKqcKmSyVgNNfMo5p8RuibtxpMBxxB4N7MntHvhcbTwCoxVETULaHDJGb5pT",
  "key15": "4YSVvFwodVSKf91KmvoZVZJc2LRYVbSPPBDsUrmEtRuPrdcjTrPtEeYwLxnTytxCkiEvG2ksdmwZ4EZZzP9rixh1",
  "key16": "29MwTLQFFEnpDYRMt6ZZF4pstA3H48QBe31a25aJNqhjtCDtX62sZJM8wqPiYWou6UhE9tYPxNAsyoZageX2iNmD",
  "key17": "5dejVjTxZErjDz17yDLmpCRk95U45UvVncghQdzYnmgZa5SGEUsdnKxHyJxz5X5WbZRNFn4XsDcrLZxboHj7DGnq",
  "key18": "32NifhY5MarKxUM1uDrE9SP8MoRCRdsG8G3VN5jAfWMVFYceU9LPNJzdoaXTMRsoRA7M23H59TFj8BVXFcpNVmSK",
  "key19": "R3mJnGFWKCLaAMks9fwK5fSoyyauw5rEtGh3jxts9wv1mWGhDUMjqb98TBUhTBHrCApGmoJCrw5v3TKPAPC6vg3",
  "key20": "3zmptf5HbgvNbtMWvJbwKRbMdFjw5eCXVaibLZ5pKMPjWXkdsHnLnX5ybgCLat7xtvtFXVXZxj4D6zD791yAHQZv",
  "key21": "4vdVdAbmB2EiMVrQWQTodD7cQcYJ6PuszYm1WRkMxaBX8CKXKg31VduBGF4xqgeXWmaPQP8FYPzjzg2c6wvcWFNS",
  "key22": "5cGT6xgFpeSA2UgQMEkWi6nsRKM12wJFfdAYYdfZzHwnGcuwESRUNjVY14xB4PU1mnaGeL7f2bvh9FL54t5s7BRd",
  "key23": "5q3HCvF8gPz9tKTNAUHuJ841ogk665PHqXL797pSndYwuojgYEMCnsCJc1zPiqPDt3CmGQaJu2EuqDX7X7jPVkWu",
  "key24": "2P7Sm7PtWzRWsB7WrpmuJPYvXhUreqMbbHc8kZQDtwjrR73JkE9iZYpTUx51gpor9e4whDR26erDgMK4Ex9xDnQ6",
  "key25": "3CR3o11twYS7bPMzjEgHgu6bxH7vCkppwV2KZjg2wC2FPL3nVG3du1aQXR8oQ8np6auJHWkBVjvGN7AbmyMkymMn",
  "key26": "43vABTRnEGHBmKPViMqTTd2JC8P8djXosRoBPBJm9fikcSyMadPLYgmDQUcc1ygEQvweemQxs9YMh8y8SHBb39V",
  "key27": "5gYmaSosYUYatQ32uba2Vgq11bL4jvsk8Eg3fYWH2bBJ6unBA25Ez5bfpkvaa5akdDRDnC4HGL5xsgkAfCqJPWAk"
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
