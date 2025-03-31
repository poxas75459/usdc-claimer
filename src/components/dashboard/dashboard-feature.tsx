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
    "2b9WMuN1neybTyXNfHsQymAVu3tyLPiysbYUEQXJyz25jgwy6LC53xbQdpPXBKeno84YA9sZEHEsfsPCJcPeGB1G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5r1pvdSg7YGLBKdGsW5WToTKPdNhcKb4h4EZwhfNuSezTTDYXVUfkHaoUD7jbgywdVeRutwrVkB5zK2gFzvWc2JY",
  "key1": "4C7uLQEpAvphPKZkkGJhFSBrYK1FYbdnX1oqbXoYZwr6Z2LayzqokzEnkseny4RX1hjnKsK3nU3U1Ka1oKRs3NuB",
  "key2": "34hMrczd2zDMm5i5sMsXx7tppMfL3DB4Dg6teUvoYc2cn15mG1BuPUXwXX1qdwGkT8zLVRs2gkXVr1W5MEzA5JML",
  "key3": "eey8rDJ28jg7cqsuHRSf6aL75WTfseTGf18RZgJ54LguefKbfrAKBeSgWj3TLErHdeadnGgXLjfaoNU9M3yZtHf",
  "key4": "4ztqfQ2ctjd6aRXv1wofHuvZT9WYhT2EX9SexE6DmtsHxN8HGvUfRda8AC4ESAJpDaZ5kJXYNj6W4mBXYmct9k6T",
  "key5": "5hU1QSsfcw1DktWpi2qE11abHgN7ASAJM2S2F8KLT39VbuRiQYgXMuA4iFCjvHzrxHL8dotyzH9qTztTEc7BVDEZ",
  "key6": "5wXddKwnKfyp9CDTULFCWqWSLckbscfqy2asgkp9fbCDtbtKxF7Jf6HYKZhi3GS2Na54WBd8nbTwcoyDSdNobAmo",
  "key7": "5cmBjuQzFEAJDc4pLzpicurbHs8niZkfs2MpVofayrUBGhQwbZXw4h94eKx48gpARnk9sdDiFWJWAcYxcefzf5vF",
  "key8": "5gFqjqLQkqVrGYbRMRVeoruZLYUjNRAng64B793NN2zEqbda9NKBQbFeeQLfAgdF6FmcsR1rpjmSEWK3LzD5XU23",
  "key9": "398QzoQwR8VDoRgQF6RaPcZGcNWek3bEtwDWNGerXm1nJSAYeHD88gb4QfY9rsbYLx5cNcWv9p4GVrPxWSbyPwoZ",
  "key10": "5MWNd42w7vbb3HhnD94jRBQRhRP1ZuPQed9wE6u3ugru2gAk8Fe7thMwZ3t4p5PCfXgcXp9Dwa4hLsrYXJE8shbX",
  "key11": "3x6CXuf7Qjz11yJ6NyAtLbtbc9C31R6JjQFq2efZy4ZSHncfYPQQkPs5gQdzd5YmrM4Tu2bBZ3SBbCyLVEtvvJKM",
  "key12": "3xvKQeNHXKvDV2pLnbeRFh2UGnJAeg1dpZm8V4mTHHWyuJxB2gmoy9iAZnbdfRBCv4MCgMmLxpVt2ioiWtJopZPd",
  "key13": "CM749Ph5FXy3zeZq1wxwxEMsimEfTiRBKoJvS8bHSYMLzL3EtLSiweyiybA2KnnyvLt5sgpdhyZARuQaisBjDrk",
  "key14": "4XSggkvyQymhy3gXS7WiiHRo7Um2XSCHUhQrpzH9QekKzxJR8e5Hh5CTxwrsLDggkepmjJiHza47Zy7Tk7pmYCZf",
  "key15": "LRtFo91NbsASBM6aGywKfmqSUf8q3Y7sTPUvMas2hC8mTExRnUsKaJMDAduRN3c1JUgANWqYP7qkcYR1B7TGGaP",
  "key16": "DD8aWEs3AtZJ8h1DYXG3bAaPBui4EnydsWDMfDbcQgvjUoTUjR5uobJ3KRiK8hQfqUvjUM9y3qHbRgkukC1Nk1C",
  "key17": "3dxuWvfiRd4rAgXh8wN5sfQhPyDaKWm2JjZScQeor5Z3ZFQygCozqCwjYKaxjCGKam51ABnRh48fpgKS5MPViW5N",
  "key18": "4unc6NxFGHcZUyCLKQaHst9CZi9uHncxCxz77FMnJe2tbUyZBKHgyPh8i22Pbe4keebtPhRkQP3915EAgExedcZo",
  "key19": "3PKsoXVMvfNHaHjqvR7zWkerydvaX5sf8oxMDU1dMmQZ7EWay41iPtyqcZrQaBE6xiMNaAQU9v4y4BUWgsnp8Zv8",
  "key20": "43fTy73bHp4P4D4UiYBqUWn35zHbpkaA8YDiHDN8Bgx1usMQTGKFfoxMWYPFs3QJxwdsqNHqftWoLWTtxYCb6GYb",
  "key21": "63ZEdbxLc69rNJDj4oxCBr8HeKV6qrSMBZvBfMTqYYw1bqbmu2HMUw6FFoM3royo2VJPMnqd6HjJ4ejxoMAC5nBd",
  "key22": "horEJzY9i6kTujao62fnHStSu6o5vFzxTSf7HTY1HeeaYLw2YHb2FSmo9Fy9tXswYxDgqAYKYwUCqERsmtpTXXP",
  "key23": "2rSo8DcFFiKJq46Qu5B5ZsSVZMXcbqyHG5iUv5kFh3ebxrG8dZWDruTAdP2EK8UD3jsHqdwmUZzNWeTCyBybatN8",
  "key24": "VrD13FoT5CnYHfnGd9BoKPNwSdxEYff8LFuFvPuwyBtHtXrPsC3RDojBdc7fHVZ8ee6JZNPeNVmuFBrhCscMvpH"
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
