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
    "2dWAGANnEkd6ZwF26jJaan63YSRZFYsFSde8kEVvxVEJZLcUd2FQL8GX5JfYhg95VnHYiELK1tfF8KxCcF2Fu3nK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "yjRvdnS6LqygJW31krh32qvFBEpdWjKJS6FLy6m4EvsSdoss7PToEXaApPZLk947wmMYTZYfpR5Uijb8kFvGyhH",
  "key1": "2tB8s71nNyMZuEsRG7XQqoGduWbwQxxBWPeA5f586xgEJtUZKMKwtSjQb7cSS3ZxK4PxAPtrTbmrutDuPJb4zjqz",
  "key2": "3MhbU5AinwQqzvcJs1YznG9SHyUJDbVgwenZXoK3MB2SKmUEEavSa6Tw5GY6dkGxPixhJhoQqRstNpdoeEmvhmvz",
  "key3": "28ZDufnuXbrApG5asDbKWYSKPoh7V9kVyqyagYmTA8JUgyEXcvcZnhbTpetNrkuawfm8ogaUzoRLe9hqNkG16kxr",
  "key4": "GA2uERfugBDc7gbzhpERn2WmN8itiJrPDRnLrVNPCYqZQm4uZWNuMg1Ex1WgMDeGksr1Mq1XE2bzKkyLzJVdgsc",
  "key5": "582g1ynRQxjNzp6A5qUCZApMYzx5NyUHKBCGHVUXg48w6uqVBzvRJ8YqDC9MkK3U3xSH7qfji4jesQTAJZumbAyc",
  "key6": "3GVf79jNTYC4MT3wXir1erqgHo3Aj6hCSMxUAhbR5dv3TepBfC9kh8k5kpyniJ3rm2db3sT3Hk2GPcuN7UoXv32e",
  "key7": "2sfeLo1xWWjkkcBzE86SPPj3nPUdEGAnbJHRRykpb4HgEhH2cdpxGaSgLQihrEmD4Cfi9b6jZx3Hbzkvjxoa7xeZ",
  "key8": "43ovQuzB66JueVsg5FvzJ7GxkPvXoWVU5vt3qP5FuBuQ1Q8dfv2k23H3va8xTRFg2F8EfFR2mEWU47SYS7dgrqyt",
  "key9": "2BcCZWL9SpYQcBDHWXpL91k4XNQ7tbYckEGumH6h5nfcRubo2YUMXCJsPnGetHczPxEBDhPqtQXHCeSXxnFm6tJZ",
  "key10": "3Cf1C1xdLrGnXUQboCg3MW82rrbaEDBSatXA3Lx7RsbykdkJrn5pmWuAhDQe9KV89oQb7iEL7BJqz9M1PGicFWdd",
  "key11": "4YDVP5eDFFp8n52TpTJVy9rzoKimgeDLiGm9ktV53CwnB9VjFf5pxspr9P23DmceGw6o8UvBwReQUcSRkTa7PjBu",
  "key12": "eU46AmQXxVf6v38Kv6PxDamAFWadumJDaK2GcfE3CtEGagVocAYrAEbHBqbN2QHW1yVVob887MMrU6kb4mApayo",
  "key13": "2tM6GzoQmAgWJGMtMVH2jeQhMAzchyi8vqaDqL45AJnnhctxnXsADJpU8Uv7UJFQz73jC9HFFAgi1qB6s15kAKin",
  "key14": "5HzR1muh6aAsGHSM3WPb3zZVqjtf74RAtpsqAtG57TVA45WZkKoR1cAKJq4oPdtYmSVjdzP8iLfkpbuEeGhxDm46",
  "key15": "LS32Qc55c4jj9XgraBADPiVpm1kYwP2GAU76Wru4CMzYn8FBf3MXWCv6FAoAzwWZdBBo1ZB2YfhePk6cV8gyZsc",
  "key16": "4XQZ6UpRv9L9sWD9wXfRxR4UC7HBp8jbc22S2nDY9arD22nuAyC55Rn5Ar1WmS7QSzSY16SvrdKALeRgLS3nRDp7",
  "key17": "22XaSkHmPN4qxgZBm71ZhtNuYuhS3W56QXDkvstkp7GK297F52P4d4CofsDWFh8qknK4RzfSW3PcykT78JKyKXT5",
  "key18": "5zYabXw9pXPjxAuhLyGHLKXiwphdAy2nZHPjoi1PETJrWw5s4gkoW7c6z7duVFoz8D3YDbKUTNPR2TQMDtRMeDr",
  "key19": "2oZAjGXZSk9F2xdLeREkWCL9qqVfceNC4odKEqt9AJZhPpQT2tUH564ZEUrE7n4LURoGC8KDqZft4hkZvYzxaJA9",
  "key20": "kqUh9XCxGonafjEnR5oZQMWPBTppRLs5PfpJaNJ3SoJGSnXBRzsGzLZoNg6ZfynMrRHMCuiUqFbzAMT8DR9mA2S",
  "key21": "3V3bFMguRSQWKgfz67WcdSa11pcDaFAafZTgNaAumiPM6JzYQuXtUfEy5bwNXTSEMjzn7G88KAHNGiwobv5Fmq1w",
  "key22": "4vGQpid5B2g9rwQZpYRKAx5H4o6hqtatYxibaeMMKgQ8J41tFdFAqiKjiwjNdH7Sw5ZF68J1gKX7GGLjBJZEQrRj",
  "key23": "2EvRDuNHoXetbTKqBHhr56hEWiRrtbqJPaH14h6uWfU4tpaGhoAY1vYE4qpS27bpJz9fqasiaZAZvi3SfqGdqTac",
  "key24": "3TxixYbN7da8Yiv9JuusPCj7Q2NJwDu8ESAjPmGxioMbysAbJ9TPdGuAjRBYMp7sgmx2yTUZrYvP2JBEhhNkSKjK",
  "key25": "5R6koNJaphdm4Y2yQf6pSFMp7PbJK8RHKMLi6dS7Noj5428NtGJxVCuhnbo36cttupJcDwpncDhfUxCj8NbmcRv",
  "key26": "4jtiv9qF8NsTnXnQpCVa5ED9QEfLAwPrnSasC2CkKCB5wmqnBo58kCAtF5XEqWo6NATu2NFU76PfXw7xVL5snpWG",
  "key27": "2ghxigsQ6c9MJ43TFNdzzstrvL1SGwDLH5oQKbAnDK5mmQU16oF3DE4QQ7KZDoHpkceXRLfj22AkSpz54Rn2nwVY",
  "key28": "3sLCunxYkem7tHmtVBSTvaEL6uZpatjh3DfHpniKitMXSGGgE2RoC88JTPM4Qhb2WMLRpkzZuqftbG3gCcRNS7cJ",
  "key29": "4t272G3gchPvFedZvCrMQKHRc9iuTxb97iw16sjkuPWM97zm4M2D3PQXzTSCmtFfeXhNZfxgG3P8snsRsTgQ2P6o",
  "key30": "32BCKeYMSghh5jFD3ikxeaW7eSapUjHXTwJkHwzFJTCCHjKkvaqwkLX1mGJZzi66F5BfTv8Xzmgmk7UsEGgcxEav",
  "key31": "5owf5opM6bkgV5A8uBxZN2NRt2T6123Qb2QwmQn5RTdR7cUAqD36pYjt6vdF6FbseWUwYScSU1ZhA7L8Ba51kGYc",
  "key32": "2WtDXj9pyvF46u1fm1iMmRuE2qq1tmyhdhvxETK6yJf1pfF4X71pUZySripgEbwwE1XY7WsUNccbNmCUV1inVbZW",
  "key33": "2VHQuxojXfy99Fmmap76FuHJYuCNopJtHa4zRhwMRPyyfyKriBKHi2aTkpeBRU9CG3P88MQnXnPQCpXfs63BSB3L",
  "key34": "5jQg1k3eZdidFys37WVNxyonW8x46WhMjDZSeYd5Qk1yRDp8Nsh4dFqgAbpb2Aub4n45i15RUS7Gxb9pobjtUtP8",
  "key35": "5svfnyQ32RE9cuR3AN4sg5kyy4gFbyz5TFJbBzPjaR7n2oWHs8kidGmKPaQzRemXrr63Mpo3d8RTnW5gbPQeWJ1Q"
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
