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
    "5tgA12YTk68nLyTjkHbueJgXz7MC2LuzynVGHjhqgTCpqpbQw2utPGQWQYRAgbdJBSfdsULoXo7eiFZYA2BBFcbC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CzCHgGCwXyrW1ZUppowYf7FYF56i3z91aozuxt7tzbwiVo8RDaoPTNh6EXbVsR1NG6w2TASGbHDhzJ7iHiZrFPz",
  "key1": "5ihSyo4aoQYgWrKVWw3qF3kGfWSUpGY7uutKa4qU7bBxQs1gpK56KJ6rLATXR2r9NqQiSv3chmUng6JvsgcbW9fC",
  "key2": "47CJnrE38H81rCUB1z1E6UUoMCZa3X87JVcpziVWFagE6YtmnJe9cA1VWKAQjAWyfy8W8woMskgJYPTFVj21WHWm",
  "key3": "3AX9NNvT2yn92EU73QEdNhY65cexr6bhDmF4LJfjqCH7nAqa2mfbeyorGEYxnwabdxpD9Vuskpc3ypEbtn9RMZUk",
  "key4": "5pDt699ArjmG7MmxqkpFp9q7m4JCiGweJZyboRFnacYYsDLvLknL7soa2MVrzBcJG7o9B1P4FxG55ck36dXhCrMk",
  "key5": "4a94gAzVrSjyTNERZ2CbmbW3nMbD6YjSF8YZoQLUcoEdv73vfM3CRbaZ3F5zrYj3GrFSZkFnGNpL2oaRxsADvxxC",
  "key6": "53oM6HBr5EJHSuyNN8JaZm6udVnakLNuAZSwbDyJ9TsYoGnfe4XAHHQGr16LK2Hrk7pb9UQZqXVv2ma5rGuEb2nK",
  "key7": "2GQHcLNGzMomSqQT2dV393SUqNeiDkZcS4rjEWcAiZC3YsNFes2W9v5JfkpoLm1Bh1v3f3wBL9R2UvYd6Hwh8WtS",
  "key8": "5VZPTqHpyX7MwPZSCVY7kHmGg2beXwNQLJFd5nNwTwBP2sUcav2yvq5UMGE4YnKcVLw7mr6f8SePugzyFw87X1U",
  "key9": "4XUmnmnbkkgfSVT94jTe4L8efZeHtEUiKPmQCmKaj65uwYXxjPKduVayZtwKmw84pu4wnyR1jKzXHof8kav5zo5i",
  "key10": "25qBjfAzWYMdgjvPs5VhbxwwkjNy2bFrKazSfuWo6XbV6CKVhmNVcEQanynEDGGa66haapXVgeWmmw6c7RHk3X63",
  "key11": "55bhpfsNKbZ64C9NmXa3Jx2F5Qn7xZ5FZF2NStZugupvTxY9UNdSmeN8EWo6Z9vXp7r3mf8U25aViaSx1QsxvRkY",
  "key12": "26QqGWchjyDMvUtXwEDGBkvLPj4qBYTYc1AKyKBcXMffP6XJHuCNdw595AscDypqtWqRtJGNDGX8CQxUcrxR3c2i",
  "key13": "45nVW575WbYjRVxhRMp8fYrvKnWutsNSiHE9Wk26Vb8GVQNcRPQsLjkChKjcbpW7BH61bXR9kLABb4y33ycUN9EQ",
  "key14": "2WQmFxVpbidDEm4hyHtE73W8vuWvjWxHXKBjXJ3ntGXxcv7xsZZ2ok5GJthHRM4JNqZ6cFrxVzTPUwMZZqbgEAf",
  "key15": "2fXCJZhfbkX9F5kUt7hRjppJo1WpkrWqXeJ8Nao5rRsPKJ8XcjvUjk7YLNgLPvgZbeHfC1d4Ehgim6g2gQCLT1Ay",
  "key16": "2HwrJJHxkzC9xZcPubjf5RQkdNupLBastzYMGN6Xc3VLsWoK8SQ1n4Z38yC9iULynL9jg1ZeYMjBGpoU212kF3Do",
  "key17": "3xKK3KyUA7NVj8qtxJ4fRW993PUwMPWZkYTatVFnzBfZ9xwxEHM16zQCkntqnTL9AD14g18ReTvPEXuLH9HXwrpH",
  "key18": "3sqYwDKQxEmSR68ubdbFCM2Z7BwKMvMTc5mDkgGxYgZTEfQQTNEAFRePvJGzAp1pWN41UiVpnEGxpqtPmdFkT3nf",
  "key19": "abc14A7WmR5MRFZD1F2oaMGQn36dhn6XqGJhoKLBN1NBwdz6mxViYT37MdXPDAP96wmecnkmXNPJidc6MFY6kGq",
  "key20": "4JdfjEGtvDo9GN6hLiQLaFomUkF2sTH5jVb54NkVLrqfokNDVGcX9YnnVVbQvKS5m1qk55F5JqSZrVu5Wt45c76S",
  "key21": "42whTHqqrsw4R5Y3XTQjCBcHaEbbCSesXJQRG8PFphFjJkDA6PpozKUtMtgt3Y7T5mEURmzHtxGYVW4NPkakf8bu",
  "key22": "4xsYo3sZ5VF36Ymf6f7zewQZYES75EwGdSsnQtijPENpY8NNbT5avzpEN9U4nreMnGb5BSmtRwKWmjXbtS83Qmd7",
  "key23": "2d38uDGSt8Y9fPNTapBWVGqhUGmcEfB7v4tjMAbbFBu2Y2RzfpAN8X4UL3yhT4LjuUZbFWjRrpbSpiU5edVguvKR",
  "key24": "2U59YR1gzmpoaufzkCVf3VG7h8Y5eRP2Lqs1XvtnaQ2BqQ2xqu3zwbTf9XSV2yDLcp33a7SwPNwbti2HkRUyBfy2"
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
