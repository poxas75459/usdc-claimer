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
    "37Pcn2SggDQqMDM7LNzj6G38AF27eN7PoSwcshJE2RjUJteXTV2BUF2oWaAREMrQy6UPvUQ1P4VTZt777kHEhiMZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3bYbXgeEB7UiRzKo1QWRVsr8F82gky2VcRpnuztwvgfJ9JGTgjxC4jeCgH7bXHHFAQUAXc9gGHC3jsjfiWvGvW9Q",
  "key1": "5JWZZ2viySnbySkSdiNdL8BMpZFjmB21wTvgsHpZ2ZDyqRV3S6hwVXuAMH5n1X1xMzGSftY7YdKWeywQu1JDVUNN",
  "key2": "31743zYNnJKiBbzuiCHW4r3w5nj2VgGFTDtRq1bYKnkLYmSnMVdbeCp9EMxhgD9WpfCgmQ2knkx8qaU4ALF4mwvn",
  "key3": "4FKQyfEKnmpYHXy55KZM67A5Yv8Aox22hxt6zHrHDEAEDu3ienBMnMf2gppKfesxux5H3E2HRobq15cSzaQgxDNK",
  "key4": "58uAFiFi9rBfmYK6bHxjNqsVEfSYHkPiVPx7S9bbNQCU3rxruJV1tLbA8D3x7JAxyqnes8ZrRCNpewBEv8tGAscz",
  "key5": "33fisPfmeUH9wrtJT2v3qokjkrgLGYCGBggBFdTuT22oEgjhomhssYe3rsvvdyJYW2MAbiQaJS4QyWHgvtjshqRM",
  "key6": "2mVrM7oDp7iHZM5TCCiw3XhAEdYoztYuwYZtPHNDaE3dt4Ncn5cxs3tT9sLp1jmWhxiFkSEFooSY6bY5ycVYc8F1",
  "key7": "5pXpNDKYzqjVRqpERE6x6oQy6Yb3kXbi3GtYQixYq6yo2vnteUoPQhet3RTfiEEt3VXqCNN9BHyRPysxQW2eNkXc",
  "key8": "XyzX2Nn9BbcLnTnncaM5D2miaHgbJbWMA9wTpKFA49ryvnxbHw1pEqC3wNMwTYxF3wCjRyym8eb8PZN9BGjAnQr",
  "key9": "4qMrBTEr6PjWo3UqptnTSotyzCWzYQqxEtDmU9RV6k3qBzqQtrYSsZV21W5ZEbTz24JHkhUzk3eWXv8yXMe6J1vu",
  "key10": "3a9qyXdKhbYJUEaSJPcVeseyrZSkDUwF51Lx3ycnxZtFzjZFpDsHXjoPuq6998Kp6pxee885U9TVHT5xp1e6CND",
  "key11": "2CufFbVGXYwiGmfS414Xh1tiKgWUSc8jymoBchnPfwqtGRPS1jmnMS1oZRTZw5CjWxwnfkGq7WGzCkxcVLnmS22w",
  "key12": "35SMLDGQoPBC5PNDZqCfxEWfmsbYJNkwLtnd7Lew2FAo2y5drEUckrYwL8Ft4hDG53iFHGC9zQaszVZUWZDtyAqS",
  "key13": "32BcqYxhZq1eTtS67eiFBzrR24h5ZwcZ2FKFcxwUhXsMjmk358uDmquC5rVZDJQ36MwcgdrB93gpkscGgPMQHS8L",
  "key14": "5vuYeRC5cHSYStQZqRbte9RrpVYDiTjcbAcozbKpmguGXWXwQQMi3PMMkhAfy6yuNxvy27PK2yzMRdxYXK4puZTx",
  "key15": "3GYCrvRwwzUapDPDTig1J1esLwRbG2gMuXwdLUqgk8iMxYDvLWrhkWcB6sdmNNkULKwT4k2idN1ygKMhTjDVVVZ1",
  "key16": "4J4VFtPRL1gTutyshFzyuVQ16if1HdNWiKdtF4qtf8CLsGvHcBX8nQXhFfVXuib67fVjhr5mWmtom5SEqz5NPLQz",
  "key17": "3neHjaJ6wAJuEGF7czchb3c4aVanwFw4zQWqoWSr1jUeqP8vv7y5pQATDrTxofoRdLQLANFYpDMUXZsEXtVsisnL",
  "key18": "5HFkEQgGsBJfdAhJspmrDiivEVHdRApveFKwBWSJ7N8Xv4gL1iF3q7wSyTn8QUSyWer9g5ymRCmp1pURX4CCsrYQ",
  "key19": "4jxbsRAhnrWyJueSmNsCBGtSF42PAHMr4PHKH7px2Fdpnr1Vytfx5AJp8hNWhNKsdVJkm1dyf25vTjhqoYxgMv4a",
  "key20": "4mu8izqyoFTWgpKSdrwBppQANmMYZ1KKVjYDGLvsDp9Wx1kzyDeDzpYNjxVK3fB3jYPfh9L6AtWjGd4p9AsybNd6",
  "key21": "454Q9HpHBQi1a8zT9DTTPwS6UeAf17w9QxPRKrWF6YXsxSAD1wRDYCuz76163fUSnqddEhTfZX1croVPNSZnZ2m4",
  "key22": "5Scxg8qdpKrcuEGeN5VKru1PjqrZSsA1tq5G4P3WA3WXn82XcYiKc8vWiQRWn64CSe6mRGoHrsH11XuobuSKYWo4",
  "key23": "3qToa6WVfEs8TMkUq5vX2TTupaEPoZfx6Lke23D7pujTZUnX4scKDfAYAmB2RAZaJntbvy8JD6enXr8GFVjkhjAW",
  "key24": "5JS7UrWdvLPBg4v5K1ThYHZ4jjWr2XUJZe8hetgDsV6H2UoH1QbKVTMBu4ECaZyt6uz9n4nvb9XkidTnjAuYBW3p",
  "key25": "4wTvjUN46tQxpiVwax7kWGPpSdd81tDAKAkBAxFQSjCKnXottXzBVTMHVxdkTg4v5AxyFfSJLPSigJvX5ze5dvnb",
  "key26": "3sBZb7X6ot7TRTSSgEBEoLEaZS4n7jpmCJM5m8ohyGjbhWTMpdj4wtHPrY9EkZaAMqLEMkfqyouS1cbXi6xu9yVx",
  "key27": "3bEgX4vo2sboMXEdW4amcz1TQeDtJ5jmvuNyFPTowq2g32hWmBksZQ8ePC2jz7xjUQwtNuSiyGgnNxiKqStRBxbM",
  "key28": "7c7DwzAnRyoNeKpH2aM4Y7uwXDkvGFpAYbfbirV12kwN86kw5DMVBybSwV8C5SUGTHTRyBPnHEwdrbcLpcHiMHS",
  "key29": "3KTGAzwpXaeNX82FrQa1WajTPyabdMwVqaS3vKV1YPuz1AB9Gm5tj7VveJCUWuVysauqT5qu3BkhQB56M1pxB7ak",
  "key30": "5jpQr7qUVL3dicrRidQau5Gmob7w2DZhHza1fiXj4T6va1qVBptKKzAY99LKFcXBxxfbWMPfQ7Jq3QU5ExdiPJCm",
  "key31": "3m8TNMWuL5oVVypgU8JLbRTzhywFJiM6mgvtmKBXUqQKDMoqEmmxxcD1bNkFeiUord3sx3hRsNNvek7xZa6x4xWH",
  "key32": "3UBVP2eYZrWYvAzjm6fj5NySGBjpgc9y2K1ccErLWUxBpn8qd1JqwUynTjtPHGKJRNVEhb38HS1NXmb7NodxAbsM",
  "key33": "LfMzDLw8RZTWwLMr3iNoX2EAZtE4MiXRqgYhjJR1nxCe6YNbYg3TwnFB4qE9WFMUw8xUqhipQ2hLGa9y5fgkNU3",
  "key34": "madsr7a36j1it3RFyMdXaVwyMVQxbBdSzs5y4tM5LQS3fYd4KsnTZMdYdbKVSo37FU3j8KSWtew9YCVjHJ4Zmv8"
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
