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
    "47ypWtpjuGv4N6bdqmffGtx89zfnzAZFfCUktgiNvprteAmnA94zp4VmSgEGLvLFDup2RSGmdmCRdrr5jXWfLc9U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4QtE95JtpoEuhYLcGKDw6XCwCvJXoSJvLgjSEmyCJSBFDuX5AgBTpYYeNxHKQ2bYt4kPgsfb8RKtfrg7eXK56V9y",
  "key1": "2M8PiwmtxLPaUkUobeAUhGTcxgdwLYuyteyjSUt7b69ZF5iCs7v8WNUXqeqQ9PqVp9qewjeTQkk8YrReorTZrJ7K",
  "key2": "321Q7qbHgPzoB2zyWSKAk1EuDD8BfweETKUHZpHztGCuYxQzydPHFyK7xyBBVZQyEmUTGLoQQFYCq82xYUCxbcHX",
  "key3": "5kdCNSfvfq18JmJHgoNhzBk8qXKnAmV56CtA7XeYaf6i1RykRAbtkzJ4Jae5VJNvobwcnswTDmqe21ytVn1ybUep",
  "key4": "2xqE8ik26A3etX2dv8RwS6sanUsMfwA4YQiua8ALMy7R5iq1zt4DBsHzoiPHPUTTUXn9r6w5kSc3oMPvL9azASdE",
  "key5": "2p9F9Qr8TZ2zvSMRkgBX3oFGA1Vvp74fARwGkMMZpQriEx98tQaLVxNESir9fxtJhg8Fzj4RLpKZbwdcQxQhD8bs",
  "key6": "3jmjkkihk1ZfcDvmLNh86Vej2aQqzEbZAAVnHUoRsLKsajvEdewU1pjHPXCK3HLk8c4gNz4sAiNUhdqv9q4h7LtQ",
  "key7": "5t2uQAPt5bEGrySW3vcLFd9NxVxrqx8xKBy42UykFPdFTf5Gu6Hu5B1ReC4zipzT7QSK6iYvGDM2hoe7spyAFegg",
  "key8": "4yr3KwJQUzZx5xWwT8F6ZiBHvB83bzLzAQfaLCjes3QenwLCAqki1Mf7YeNM5BVaSyzyt1SjdqQBRLa6djwvKr2y",
  "key9": "5QSVQ5RYRUWTsUkMUa1heeCxWHEnEE3ymvvip5ysKS3a1xobVnXjDiiYbMiME3iMAQkGkA5FUFxJi6zY621VnLL7",
  "key10": "5dHuhJExsAqRzCnczuSG9gF8Api9kB4DyfWFLjsMVZpUUvA1FHu34adgxvJYweJftsovMrvrKgqADgPe6ggBFGr9",
  "key11": "4LgPsa3THVXoLvnQjsyvs3TcpE4HQNX8s1Sv9r4CUWXyb56pJAMgU8CAe8LhLjETZuLmYiGNhZCmurdhWALsyR31",
  "key12": "46x81RfMHJSipqsvBpA6LV5LmirYywohdiYTDvRvt9XwWf3Z6UevEnsd7q2xehkvhmZE1s78ReJswKsuo1P3RTyJ",
  "key13": "4Cx64kQrEVT3Pn7yPLup1ThXjjLLorCkWovHzPAft8dvk3b2ffPpNvCRU6jnfMMztBSdUXmrYmJhVasM1jdQ9gQp",
  "key14": "4yagUnciXgzugMccPHcTbnkaD53UBDNpU22tt837q5wbgTAeb8ugaKj3iKgSghvb1pEqMgZHzxdueAwukZRRS11k",
  "key15": "5m7bh8jBrxjUa8rk5BrNWbkthTBwYENjhepXKd9iXgWXNewHb3MGhZuZBt9pUGHHBXcxLoU3JQLDoqwy1frTqsKS",
  "key16": "4auBZhok98BvepSPXYi1wF8jPJ2KDKFLo9yRA2As8G82XrY2n259uRMR6o2yqdS1eGQAHNvdCa3tFi9vedqXzpoE",
  "key17": "3noTWg9PVQwnFuvjvKBYQksYTzgrq711RVBTCMFaKbUEEKiXo7X5iWXLCDroSXRQnCE1JBqYtvWtrXhCaiGZWpUK",
  "key18": "36ECxRxWwkofSQxA3xi8Wrk7Vt9cSHQpy9xjQjgV3RXnLB8QaUH6HxzPYWppcEK98Mx3MrVoi7vRWVyBzkPQnBP7",
  "key19": "2c7pTz6XsTUEzzjSN8qQgrEsfC3MLQ5szJaqBJcWBV7g6h4uNGBrkNHpieia6WyWU8mS925VWfGyyxjHC46Mdw6C",
  "key20": "3WUoZYAnQPd54z64xLT6kgPpDMKARA5GDYovNgzcpy4fyyPSy2UiCnjcYuwLg3v3ctwjomZDDac5hFCMFH5wgnkp",
  "key21": "5u9WkrbXvV6QoZzwvZwxJvhgDv36kV6AEidinmx4XbzyN4G8biRjaHCdP4NH9FTq5UzoPyZ7cKsTwWotBcjKuP2g",
  "key22": "MVfxZ5EjQWYmLmYWeX4FvUm8zij5zduZR3AP8bdCFixfbnDd85koXeFnGVfNhF2qdsrKQNqmsxuM4vacukQVoLD",
  "key23": "2QFF5poWxEu7RHADbhB8NZ3GvyVxudmfZXXtXBnNHW83KYxt93toNdL5JcQgBvgKgVxkAY7cENxCByWoZHjmeLfE",
  "key24": "4LUiUczQuhVGwhRDg43XDdhoJL3XmtD7zo62N7KNV2MEfjhHdo7GLgopUDoM4om1WrUcEgAKcby8Uao2SwXbwmPr",
  "key25": "3pCHQ5a3YDQLu37WGLoxgQbWF3g6ZuPj4h1c5iBbP7jAJ3kw8Aq5qZZq94MciFvUdwbAujtZ4CLjx26rbzoiXajC",
  "key26": "SSnCAGXGfahqTD93sZg6mMGV5Bi9YfW8Lm88Mqx4gwp28W7gowfbAWfirvmQeokEWYtoXU7f5FuVSKhFejVjbMu",
  "key27": "Jj1Lrd4h4rctz1xgBhFsLFD4zcApeq4C4FPrnAbaVG76KsWdv1v2S7Peexo9wxFnLn3a3C6wqS6NgA5HKtRPS5R"
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
