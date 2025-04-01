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
    "4QqYgSXPeX9MR6TCebHCCfKnmrwPSpQfx4QqusMHm8HqdSkyygLmkM8JK61cwABctCeYfBPLCBVH9B1wgFMmo1kn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "rbc4xbbpBkk9mPBu1puf9rqpgEtEgKiuXP3LdfcfB7NhGPuc2vutfw7WebLPA1m5ptUXD9Zre51A8M2q1SXaHNh",
  "key1": "9MhMmZ459DJwuKcqurQKSFdGYRHAUPSDrTBwF3kh9u6JrRZLEL2xDEwNadgzkDF1FhBmmTf7XZAPJj1FKTSu9gi",
  "key2": "3xVdJNSVLkoidFFnMbHNJqJNnJL2sUDuyKMKGAtsMpFJs837PyiLCtY5mXBUrMMzGueH2Y46ejmHd4jH5yRYMJNm",
  "key3": "24YScZpfav3pdYDVQiPxqEvZuBveQmm1sjcwPmXoNf67Pekm8Ew8mnJvwMznWjqNyMmuhAwMrFe5yKrM9ye91ykB",
  "key4": "2CKF5WRPDWBfZibWJXF7EpiuM5zt9C5szoYHLXGAWiY2M8766T35pQfKrNyyGfzD2DhTWDAwRtvg4t7PgvpQ7WaB",
  "key5": "5bS94gRmbGorofeZbwzBZLX3X7WB3UVARTjh9XpcLaKgVRJug4xKK4FqthSb5sHU2yexqr7HN147CNJ2ysuifULu",
  "key6": "5gY5ZFPudMaE9oEZ2nUctQbGXgdhsdQEwBF24wZF3m5oEuSZRg7gRKU2sHrHsVdFMZZNvBmnQWXPTqmvacsnfuH6",
  "key7": "4YAvCXHAv3fgT2KyRmFrsQKLm7199RytziMfrzCJ8XChGGur5UjXsz9SieNzWXrqZeEAGcCJPRseDg825iBCt23z",
  "key8": "3ejKfWdmzGZ4oqk87w75pxURJbd6NzFQYmFvFuMQKxkp5ngk2RkKSCHGhnSb86U4AKnAd7o56od9r8WLnsqRYnBJ",
  "key9": "2bjXZ4eJY2hiVXeXrmVjd2tNbVnGYhHrEkJk48x88jYBg54z5bBxX7kHKpMyM7or6sphtz6AKtEsi5UmwYxgihic",
  "key10": "oY71WaiLP8jKLZkDfx1w2b8vL4mQbBVh3Yq3dHHAzoza3d5ze68p5sfXB5fA8BAZfVceRTDouVbvvr2BakRCLyV",
  "key11": "51QvSnT7fzDpv9m1xykJLu9qkatt4acstatEDqv85GERopyMqMBQHP1LCZudfc9McLWy9Kxgj5723D1DGMMd2UG",
  "key12": "5Z7xN2HnWckRwcz87NM9HQTjNXyAjZnjfy46T6JWAMbfnbRTPBX6EKvYZQHXWGErrh22tYyBr1RRfgEhF5PvzRND",
  "key13": "5jZsLLPUD4cBCggdf28dRhSZzPHGRhom2gRzR3qe3rycieQCZz3vv8FyfbdfYiyvhkpSr8mwVooVoQnM7qsCzbDF",
  "key14": "EJcyd2PV4SyKq4Qyw9zAoQi1cc5gwazBngY2tmiHdVqyK51jbJn9jnvCGx3tWUhqHdZgwmzrp2JQU88WkHQ5kbW",
  "key15": "U1juhtfKSRrNEADqqwTaGTd71sQhkwpgqQDKyBwMi8U9e3x5TnhfXbwNdQSjvvMs9Hy8PCaUWJdZy9xMApjBwW5",
  "key16": "2bSbAFgLKbVLVPvUu7M8GUSpAKRP79xcPKPmfz3j745W6QHsZNR2LC4LfXN4MKQZfzYhqzVkT71mvu8VGA8xT1Xw",
  "key17": "dUSUQM6xv6cz7xDr8jwDu42P4tYtP6eyRXkwfy5PFpWQXyaDjKTs2jJA6RbFtHmmpxiyjfswFutLcEKgHwZKmJ2",
  "key18": "5bNu9DRD5MPZfq3uj32sFu9i5ebSXhqdfRKF9wxLZvf58M6zZQi6zLmQt56irWuhNctiDT8eXiUesD8MVy9G5XCE",
  "key19": "67b5CUKNuqvDHjg9L83k6yDyzayDSHq7zMDFWS9SKkNWm6rLTbU6dUHadn6UyAKd6DQLNJzPhQ7RNug3dsE4Hwtz",
  "key20": "23DdjFW34u7ixNxGW3oVw2KWYssUCLtP5ZP82dYRvaWiVH6Srb3vLw1jf94DMCBqwq7tegJhCgKwTRsYdXeBm5C3",
  "key21": "QrQuqpRzGVHigsAEBYph2GNwg6hL9oMKRzKq176JJquA4WkK1feM4Wa54gMiRmtjhgT65wPGSYMexvAQJWf7r99",
  "key22": "21FHAuXF2ywjzgbyNeiXsguZkVpMU5MqnUbmxfVzenbcQ99fwQfUwqD65R4sZZYWPMZfrsvV2SGJDtvHL6ttKt4m",
  "key23": "4JcqqfCb4oNxMJxZE3bQSE9QzKAJJeHEaD46bAGXnWRphcfBEMq7u6GH9aVzJ2iTYRMoMQk9FpkgGeGRdesZxxzB",
  "key24": "4AZ92zhhb44VrHBkCj2XFUbUn7dcubgg2vkFQtg2iGDT45peDJaREqxSojcURq69xepWxGrwTNnK8zgriBVRpqLM",
  "key25": "2SjbejTkisAvyLvHhejJdgXHPVTqkrt41uH3AHFS2mSG3PNGUb6NAukjkv57Li2n2eQ28oEV4tVRyvwU5nxZJwPY",
  "key26": "5sB2RUeoc6Uu8tyTcLnkF5kCA1N2DYNpGJkwRtGViohjM9TKiVEM6ZVmGMRbqX8qxwKj1QK3j5t4KQK6cS99NNKT",
  "key27": "3QYYAr1nVcwNZvF8GTyAjT9PLbpm6KTd8m5GQCR7bgn1jADSGhiXLqu3LXyDM5KStXHmRAbdhP4waa3kX15C9XQA",
  "key28": "5EsZGANMgknftaiRJb55PMnrBybaMKDKCn8FP5cSBYkGXwdT2r219FQuVa7Cj8MU8kjU4ZKDjHUycABzySVnQnsn"
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
