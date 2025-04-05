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
    "5NXSJdkDUZZkERHyMdmZJWYucZVSi5nVPh2U23xGX9NtgcVUcZ4m7B8iKQghuQi1voPyKmcuZciAVkfYqDwHX2fC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Q1siZDjWHvhbTEuL22fdhnuZrM5kAq59Yo8nhdKgpSWuv2ZCMduwaFVkDuqLmkVArg7uGNZb1C3qDxa7g22TyKz",
  "key1": "ffRzeWoYm3TeAaVRBk1iCrn8b7vJc8XSc1HV9wrdkdE4Hxh4xxyvA5PoiZ9PPDFK1txZvPhBgwCEzFC7r4vyuw6",
  "key2": "2ViBHpSTWukpH3YbARzb3x9rNN84Csdiv6zV2tqDdy7THpGsXAtiWBW8sfGryDzceyCdiVmhEAj4q43BYGqcLbwC",
  "key3": "3qo6Ukp9GrwFzpx8zPYEAU1gTQfDiCwA1Z2yNwZy2V3y5RXVxWv99NyAqCbVYuzxGJVpcmfpoZivRgyrSxyY73o",
  "key4": "4gFcXDwEjAFzS29VjugnQJcZNB79eNWAZsTtkm89jDA2svE5SFEM5y5D9dfPEtj8zgiYsTzPhK26hcXRqB2jnked",
  "key5": "31222MFC6UwgbJYW6gFjWWADj6JgN5zb8xkGdXaB9LGGDTqyFEBk2jFdrZWzLy9FLt6yDiJF8HQkHe5SfFYwVnT6",
  "key6": "3VkHR4gBKHDSag7romXRxLiRrxtEZXYA1ewJQhrPhWGehJedDf4uQscEEdiWtBq2J1oYL2ZSfDBtxCLCChhZrfwP",
  "key7": "56MW4hGbSP3PFhPcafAakmrKidmXjfSwuZSurN8EB6DxfFUjQ6VRALxh3PrtkKa71Wz5HTkGdY7SxYCcUVuGndQV",
  "key8": "34f54g76DC9Xqb8EAHsAUf58G1H3tFDfjZoLogSN72REu6oKSeMSi8AGdTW8fhs31dKJrCGdS8KhorQXmArBqSfm",
  "key9": "43jgGcSTSp7Ebjj5HpLbuvi794qJTdx6SKE3Pp4xHJRMZmveV1728w5DYW7qWXa2VR4uG5KwzDDtXTWDTn4MywK1",
  "key10": "2VvnLBuYUzmdFNytH56WRtQ1bTaNPU5iVX2DtB2vGXyAZTXEDxxLs9CY2boFpJMtrpbswtvwZr8RxVLCiBdySDb7",
  "key11": "3PN6Zhq5h5ZsZ9PT9dGSjZQyLGJrrPkePFhKBqSUnnFA4HDEGGf2Cfdn6duYQKKrw9sox3GaYWZZ2KJyk2sP8Cms",
  "key12": "2LqChpeszeApbeSSUMt88ifsytsRrrJ4i2pzjqEBa9c12bkcsgwbfCgc5FWRHgjVFZbd7DcPJeTUftk2DvrPZHJQ",
  "key13": "3vKZbUYFkFAZewuuNYVkSjFuLeTse39573nNMu67g6k2ZhXBZiEtjvCefWgx51dAgGeG424UCUhCCQdu79skAB3q",
  "key14": "4rV8qHUf6KwwbkmBi7QXqTQrvvczL2xbQJwNnNhmwDLTk7YE5aFs5DWBAewCyouyAZD4MZhwGR1MVzoSZThm9Zs5",
  "key15": "5qjcsmXngC9xhi3ziRXZKryR47pTYLzXH6PQEGgWsByP2euUe6K3Ho9VhjTiGHZSMoAr2WWG4G7u2NSBJLqtUZgY",
  "key16": "5Y4LDkFKYzM1znEK8m771j1BzwZkLp1u3H5ST7muCaXHtTcVwgkHXbMequm6k4kufPeA1ABeUxHDfGyrZ96HvoP1",
  "key17": "64H6AwLx4jLPZJNbdGtJdt56uCbEgEUPcztv1v4KiTrQth5z7kuFN6ZHNVCAa3wo5DdfGsTWMb4bXzLYm5ogqxNE",
  "key18": "2guyENobBAcgALprQoHukGmTdFJwjUp2bBvjPgaxy5nAmB6nApbRCL8NVp6jgcXGG4Pih9352pKBKSaTh1tko7GK",
  "key19": "321AXv8cNMfDiEhKHnaPdD51XE74wuHgbCsQXBMTt2k9T4byvwNF6QTtsTX7LjazKM64qBKm9Vui7aiz24TtFV6F",
  "key20": "2kxbQmT91CACndvrX3uzZeFRQssPkzLUDvWjDWX6t5rENtmQpsEMmjcCMarLykQ3U1JuGZjEwcJfxv64J2yLy7sv",
  "key21": "27scfYgQeJo3xyfd2DFjCjhB7AVZeLojUfY9BiEctbrXpvYwpKvGtHQsTWDZBDNWnkYzSJXeWK18316vNFpMCGob",
  "key22": "5X5si5LYJ78XDTEXE3ms98BZmpUQ61wkwArHvoqxmHBoZjB7hhEG4LniS3GD8hjvqT4YdBYDcKrut5C5mjhEudwj",
  "key23": "3E9BjdtGK6143cJQo11hHBMJZLC6fE97Wa4W7QUAYurWDcQwwzjGcXgy7eaBMo3vHY4txu2rVSQXChzU2dUpAFfi",
  "key24": "42mm6j494kA66FVfFDeEQ62z9XSra4KdKSVpmzNMuHtCEFNFHnojmjecWwUsnAR5Cm2baKAwHxBL4aVP5FcBhGd8",
  "key25": "FykrSvNBiRirzmmkdNwerQEViFhozRsmHxbmSM6g2VSVXbMKTrxYdAgJf2tJm7W4V8VcHRQbMW3Y8mkPYAW4Y4L",
  "key26": "497u9tmRDrSJcdkENdzJJT8TE2H1Q47RYmAPKry5BVFM46FTbn9QoiT9RHCy3jBAm2vWXhNucKkxTshCfiRLJ8XU",
  "key27": "3xp45d4rXBuxXyKxGJjThn69PZmq8GtXpyghMP1C8TeEJ1VMD7TtF9vW7JY6VfUdEXWP1KxC16ZvYVdRzMMsxJYP",
  "key28": "43ajt2zHoRf69ANHdGB5n8JVa3NpVnMYG4eExeWWr1FnJdkvusY5H8L9AmM69YB2LF7gjqLnMtpxwJ8aaf5bk5JH",
  "key29": "4SfyZb92SWtz3igNGi5tY7FHWpMqLfSSNC9GuSiBXskKcNB2xAk7KrmeAk7XsiwvpLoWtmBZd5bEvv2NHs9bZPwW",
  "key30": "4NpEJoMSrGFihkMMC7MdMHrB6foYPkEA9GXcxEKvziJpH9MTHzGy2SDxiEmLctGK1kzawUuau2R2FwAedcz5ckRz",
  "key31": "2kAHTtCUFSooqYNFcKKhPrsYZ8uqqSizKi1jPzkAuUqL8x81FX4FA8QGVug6DXJYzDFMMaGjqkc66bvqTrF86gjZ",
  "key32": "3DyeRBuJ3wF5k6zixGbe5mCuP8n9NprnkMF4P4wmre4MZApr79AhnZFNSnKfpCqn8doMA9afiXKFSP17AtmBeK7R",
  "key33": "5sQgqzpi571Q4xmreo4okKgfaHtLRSHH8EMux6VBbENJQPan2s5CyBNSQBapRXf8Bi6ZD4zeKAG9xfQRfeCssJkr",
  "key34": "4xqFmnt1x9k3A7zn5KTt6wUyKSEe7ZQny9q594ii3zEHphe5u6aM97ZtA5GCub2QaTRginENBjpYo6sXptprVWmV"
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
