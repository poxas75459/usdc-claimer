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
    "4cmixMVZNiPpbCzJ9gQgXmc6nkQR9oo6MYFavuPhVKhtFoVjZGC1CRLWgvmVNDTj7NHKYzp3rGydYhXKKmN8rUBg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44Ty5TWSdXGB8is4rXEvKSCJNQHUrhon1oPFZA9LjCM5tZxXuQy9dNVWyZYpuNXJBy7xVoyeZopMPXGGtkvCA8n4",
  "key1": "3FRFUMSmEZVMZBE1a7i3Askny3A3YcetV6aHSRv7d3TeSS2ANejUZAZyfMg1hAP7GRfLRWbZmvquaXVH4x7z2PW8",
  "key2": "NQK3dBe8FXSCSZZZwCpxMMB7jd3HSyEp9A2PvUzqABrfijQm18wg27PGxez5tf8pUv9eAGXC3W2a6DUnAXLD9wd",
  "key3": "2j3n9KpPsUSFzQqu7bRPPPRbgn9kSazgbNheCdDR2Njk9GKJTKyYrU7qw5hpkz8QaP2uxW89md5o3wAGPjmCJmgV",
  "key4": "3yJx7aZ7SVPKXhRb5ENw926vA7twcYyjFXMxXYXtU4pmNofJ8fkBsR6q6sBWhQzKRqhAmnyqkxh4FGWgQLRixVbX",
  "key5": "46hNePoa9t6pC4JUDP5pYpJNb4GrMbGGpCw9oEZHKmP5Ndc8AMdpLeS5Pyycdo9p6LKBr43g5j9TpHDyXRiVpjgg",
  "key6": "2rYNVSNtQdw5r57pvby5rGFfxgJP8ksYUL3PPLiJvfqS5WoXNz1XCzwd6eNqfyL5P68AAi3BVWrWbTzwsV3zT1Ya",
  "key7": "4x7CtUsubZe31pxExH1M7vdhwFhfgrcavLqb9BDg2S8aFSaN6gTg4FZwQ78jRMVhqci6FjjyzaG6L3qiUYd9tGSc",
  "key8": "23t47ao93PDcxYmqXDD1aS8WnEizptkiM7N8jL4W7qdjXPzw1Q9rBAwEwQ36WGfKZNuvhWDvx5RKW4kdFi2e2Tpc",
  "key9": "4ycaVLeL8ku9A2iVx7wNsXbD36kbjKnNgcdFau4Q7qd5rh7PwyoEvHsTaQpP2wVZagDZ1zAHQGnUmJp3j7obY3Dp",
  "key10": "585ZyxDXvLMddmoAvkpMqZRC4iZBtjToKspU9n9kkQdR2BHnXBfzdKPrZJ9kVoaosxBn1j8iQYRbKdyMY3iYYXCg",
  "key11": "2mTnnf6onRwxYEAgUpFHeRTRdmRJdBhqXRK3qVVfnTo2xucto67LAjgo4aRDH83AvTn3yFwT3S7ya3c2nD6Z1sNL",
  "key12": "59gwRY6X27MJZd96t6pHVpEnd59VeewKWnGpASXitjMhDspN47weXuruQBvLd9EKTYkYJU8rHbeDVK1roGUcWtoh",
  "key13": "5wWQekiseBzAGPrb1aJwPVvRM96244e1G2wLSNVPGMxQkXtqyPJXNV98R7iBerCcbEFaQx9PHu51fzriTRtW327p",
  "key14": "3R5NwN6uH6PPh5rAhD2E7hHKjK8hGUmcKjXWQTsVS9sCLif7zHjdDvSfF1nKGLFXrAC2AK62Kxo74Loxexz1ubUE",
  "key15": "4BQscNTxD8coiKBK35YLxFvUSHPuMX3kphhoxEQJBgEDAQqBfz8NVsSzqEBr6mKDPegrxX1r2PfRBNnmbsTpzB46",
  "key16": "2VtXbHeXQxSCbfXEDx7jq6dfDfvtFLabC9uHUACH8jPt5aAdzM4A2jJ5Q4EGtxkrpdQXm7FAbh1jpiHrpY6Yicat",
  "key17": "3bdiSick1THdcVdPXuSXGXCTqG8kF5B6FrnopVRukgRYaNZ4fcezjt2r8hUD18LeUAADJTswTcuSxjsXBKZsUUVB",
  "key18": "PQgHGEX7cQ1L6BcAEXgHU46f8FVWhvwpwpswz7fGQSsUqyWTDHk6vYjK448evmin6KPhzKMcU48n4iKmvMEJQ78",
  "key19": "41UNK4SjSQTaMDNn7aLbNpvBWc3jp4cP9RUVdSit8PQQGM9y7iVJ5vzdF3HBUwY4JYeM3cT6d3J63NpnL5mEnGmw",
  "key20": "4dLTPwRadvfZAtZkfBNDFYwruW7MDqokt2hbrBZ33V7qL7iyNJbU9VGBPgevcJiqMJHfSNyJPgkdxA23APrrLyVs",
  "key21": "4opCrHZZH4UDVV3BggchA1gDxC7uzwJNxaqP3VSTY7dLG9w7BNEKg3fsjhNj3VRFkGpnP1AGH5NMBzC6UMsii7JS",
  "key22": "61SrNXikz5HAPvY2zhki2zpuh5HoLdUzonqAGmL1WD4PPJRBWRoiWcFTRF1km57ghR3UiZG7SadzaoxtZz7Vr3CL",
  "key23": "49HyyycnHNr6nsGC3ZiSvp492dxLhXXk22W94MunB6WawkbNrv74LZxCwGdL8VYVi1JeD7nTiARP53oL8KrAcEA9",
  "key24": "HTBBaDqooYcFXKaSU6PKT2WqrjiQvV5EgSWEvfN6M47kpY9fQ6unDna1aRwF691wcMeLhMeHbiWBgm4x6UJg2LB",
  "key25": "2FnLksWW8QCebzwc2RT6jZDoq5vs64VHASREoqQswMdDwvqK4rcgsfLxKzp9DhuGa5U47ZUtDzhXTWLag5QnjpPU",
  "key26": "5Y2o1yxsSWLV4UALzNYve4nFUxRZCNAbQqDb9JBZdYk7UsHFB8quwjMew88oV9PxQ9KJxcCi7puG3hdgUXSsNVQo",
  "key27": "5mU3yKZUmJR7BtXZAhokFu4TUP8JV4BLUmdKqEBhF3pERr3B4hWHZR5ui1xGHZZBDurFDoUXEGQ88EazzuoySQKz",
  "key28": "4TeoReZJoN3YEB8zB7EEcFweqHGcgfQqcEhr4Cf5Rnn5AYTLQkB7ptZqHbtA1Jr9Cx5c5bNnkTmTg1ifScVydDbm",
  "key29": "2qrcBDvx1HJKuppZGNpSP3B6ikdnVZ3jGxddSYb12ET5dP3Wa8brg4cKQuSDNbnLUj3MUXCtY9CgVFa6GGXv9hhp",
  "key30": "4teiPbv7eziEi6YJjoRj22daZ5MiwLyrTZEwe2aVRziCxDxrV1Z59FRPjzQaRufjtqVCGLCkr2CAdKPmnhnN9Vtp",
  "key31": "5r8ocCERyw5hpHhoFB3fSJzL4RGTCZYB6ZsXys3xYo2kn7FZNPtwXpCX2ScocEVXxBaXzXRcJKGhGRTd67SDFw6Y"
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
