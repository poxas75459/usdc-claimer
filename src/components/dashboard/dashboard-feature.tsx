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
    "3p93GfknW5pbJr5XfQ3ELrmce5dfZ4H5UAzm4aX1D1NxZEWQ78aPguQ46MfrPe2G8S7Rh5MPRYHiJNErgLanXBmY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2LhJkdM9kbYRWTp9ZbjPKqN8GEYUnxN2XkxjjWvuyEbeUr5KKx7w1PD8SMCwdu2uusn8WEBUGXPcPSXQYSAY1pJP",
  "key1": "4QbUrmd5NdEon8YeiFLyAyJCN5PEfLeGVoMXVeCubrXimh7jXR6iNs1LNMk42kg4bFgWw8wGYS5xSeyG52RqbR1e",
  "key2": "2uMQdCwFm3jmu2fyZcT7D46XYfJyEDSAodaqbxjzoBSRY7o7VgUiTCDjLE7uBzTNdMMudSdm8YFSdLQSpzb1DHC9",
  "key3": "2Kbbw56GgrJgE2edCCd4a55nY4G38aiMTt4118ortuTRnNujuun67RjNBZXrx8UeetPPYEP17dCgCtyFyj2P2i9w",
  "key4": "2YZMLNmodvyhsFCneF4WwMsMYurUoGF7zdzjy5g11fB2cYVToVhabsEcVXU2k6jej84duUQNSMQ7ZEmDB6gh93LL",
  "key5": "4wWVSH2tS16tUJv3CitYCEB3wgKyo5EUdDnEjZZF6Rvfm93r2evv7rn3mXfUiMB1WeDT4BmtLr1PNTPTPHxja5QB",
  "key6": "2ZTUbbMnUg4vwWvRNUR4VmnKD5tm8MJ1bzT73bAivKisJwYtQ7zpKv92WJXUxuKdibMRdTYGvMRdTDWUwTy1cN6t",
  "key7": "3uaiteFWCD9o7aYPmDXvBmy1KQwrWxJ3wEua4mxDM1iJLy9uuPEuh1trzS6uBYX5LNoWtV9pKCjSCDamw2Ca7X4i",
  "key8": "3Kx9pHMghAXDQDEJNVFkQKyoci36XsRqbCSGYeMFxJKim5AMkQYQwALiLdFGLs75mnyZaTcnTCSjf1C3dWrCdLsE",
  "key9": "29AyoNnxmrmYH1b6DfZXAGqUvrFtRH3Xw5tfTsniK7ek1MqX8rdzEFiqAjUTs61tK39jtX1SRYGttJRfLpxR3sa8",
  "key10": "3s64cH4YiPHmZHhuW5iMFq7NxRpmbB75q4ji61Y1rnLDNkDeLiwnVvEtngaVskQfKSYv9FiBEintwb3uXRZVSZnG",
  "key11": "37pserLF96ogSKqmPhDFnzfAvYwv6vzKWjRJd5xkkQ87VD2pZBRNk985vm1kpJgK4G4B6Joxqe6bWnfXPkk6mFkL",
  "key12": "61ZQM1TzF39ihobK3zvrEhpN79VMDPEKjUyB6kwdNn7wRtFJ98gpfnGQrHpNey1eGPs27gt9seyQSLj6aNzRiynK",
  "key13": "2zhvN7YuYLbnNmX7UZ8rk5hG2W6FfTsVTAZDSSuVYC856S6jPF8LFbbkhBZf5uVrkb1DdkanRvPt5S8HMwzqCK1x",
  "key14": "2yKQ9FdTyGEU2wqs6fzCRvCmpcDTU8MZHm2bE1NwwVgLS6h9C3CXh7mK8Ms7XcvwunDQFWkJvPCyZnmXY76RUGfa",
  "key15": "qBhJZExZYsaCkGPdNCARG1LXyDUVgzxuBUdMFtfxwT43UZwTx6MznYSS6cjKkRtH9cETfsu9UJKYpxSeEP63kzt",
  "key16": "2VFfq9McKKN9KmPLzPn8bAzEYsfbTDRXxfYwdSRp3Zpk4p2ZjPEVx8UAhCfNoTJFqSn2VExyDe6Bkxo4HkcvmDJj",
  "key17": "4jgk4h8V4Nyf5JuyQVXwaNTUYvjKhPv3nbCw2gUjWbENcTSPuFxbzBPjsAn9ueYu9ZkwVUiHMhAruSVBveEA5NVY",
  "key18": "3H717EGEobx6EPCZrKAW4AUVuGhyf2rWo3gLrBM1ioysrqnhpJBH98qLosDFHGE5ByTojD5fWwsQaVJnhTydmLMi",
  "key19": "3T7QS41njqvMULfdzZfsNbgEqdrwQPDzdGgNbrAXcX69bYeNJWuqFdDbjLJ1XGUgy6zFohYJGYoHcJiN9pmarWGy",
  "key20": "714VsSZKg3UiKcwCDhU9DLJhznzcCV3uhCCGPKs5xhRaJoXHceNToywgHyRd8VEamwABRtJUsdY53kAGfWYH6Fh",
  "key21": "49Ee7DPgfvHh7Ay2iWXuLbyhKmELpTAiDArJzTTkfh5Zw1gG3MhTpsAcJwwYtvsRrk5y9ATZcsaeJv3z3zDJiExY",
  "key22": "3yDL7CLrwtz8FuQBQSa3Cw2rnxZ6eHVpZ7niCkdZnYgBtkUtSzf8zP8gmAKMxSH6T769HYjefd4smnuggaGFXhPd",
  "key23": "47TNHLQY3SM3gtLUbzPPVvuSsNfQs8eY9DmP5LQXA64XdS5m6uu2jyk6LZE7A6dgCH6wSarw1x2eH7e4JvVRYW52",
  "key24": "2Yts8hurZU1o9rkKjzXdAFY3XukW3esNMVXzszo3VRefas2NeVhEoXcFHrrMPBXRLrGrzB5RWbKNz2epAN2wHnGA"
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
