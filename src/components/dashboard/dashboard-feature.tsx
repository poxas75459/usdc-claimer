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
    "5WhVqDtWdQzmDiT2eM36RfcXpckiWd3q3dDeNGaLVzHrDvKJ1met2HKDrXvCdhkThRNjupuKfrsaTfczjFd7Z4ZG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62144EoN8E2Lh3g9zYiyy7DpCNtEa84SnisR4s734C8hdavMTLi5axJHHzrBwj1QwoN7umyvTpeKGhVgyLTZhxzH",
  "key1": "3r8YRzLjWcQyFAgryEmvnTHcVX237m1mtTsJFe85NVR7FUhB7TF4gy8WAUquA1tKTzCh8hiFUrHPsK288pYu4xEi",
  "key2": "2Fv9pSBtCYYHNcEB9TQHAi3Uvz8fsJ6fTmg2DC3MGS4QTAD17Qnsa9N7TTj9ZRs5RmRrpTeF5Qp9jcfCW9VuHPGr",
  "key3": "4Yk6RGQr1CKdSd6n44s9hn6tqtE7i6zJjtykRQg6uYqmMeA6GNsLM3VCfB1QW86pmTGduPAtUCH7nZFuQ4gVy2m",
  "key4": "nBJon2hKMmjgoknkb5eXJM2VNJVpBLFGtu3i4SyAWAH5iwPTa8uJ39Ye4STsnXenEF34RXarJkyVxqhGgYysPuD",
  "key5": "ncBi2GMWvJ16xAZXrsnyKhHfvRkPixDJog2y9t8t2GgqDPUaSNg7sRcsSNKyRYkP463xHQckHY5PsWfbZ7GSP9z",
  "key6": "3e1uWMfSKMF1zFSSMHvgZNg6ApHivV4uHprS625eSbYX1fXYw6E6tng6LGJZmYgURiEtUnF5YPr6p7TWTVW2Juqf",
  "key7": "4c35hLG6kDcYvCj5Pubh6iq8gs2YVC2MNyPJfUV9vfb3XwzNrbxz3poJ4mMhZNHbfY6hN6sjvXLipAUAjsANFa7h",
  "key8": "4g6h87xyGkXbNsU1j7eFcu3Xg5CR48jcoxnDKeabWQLvTkXcdaCsEg6szXojKayzdj4nWM6WxbZ8PQX78E8rTePh",
  "key9": "Nbd4bDGi1svFX4iQ77ywqx87LaiLtjrYfkxHcWRWZ15UaT9WtteGfDqjYP7rqKXv5Zx3q6gmReQdf7Ff9UnPcPd",
  "key10": "2kKA559J6ioDcD4R79THug6GTcP3XFXzJb3cKo1XmSvxaw8KdV6xtgmwcoeszYtRFwiTKyMwBsqUGW42Bud21v2H",
  "key11": "WJRFsX5oNR88cjywFWeqPMmGYSnrS1HQrwh3onMY5G3X65b24cSKQv3Pq1L9bNF8vQaQ2sfT8tovDTvx7qYk58f",
  "key12": "5FdCKA1wkduXTWo5hhpNdFGJyYDdNFzP4GkKzy8QczbFauRmbKNW6SjxuZWd3aYNKQiKBSiXHnMatvwRWmqSevty",
  "key13": "3CV6SLFjZYqrEVSnBpqNnh2a5mAJhk3Xpp8sE8EU8iTUEf5avze6Wt9Lx42j2VCRvGTuw2juFALMbxpyTwbmvLLk",
  "key14": "5JXYqpqQj3ds6yAgDb31AQFBK3Nr8DoF1pPZcEjHfw13o4XWJtkMQesTo24acspQdT7rK9vs1PSikDKGe9JAqrvG",
  "key15": "62qeykTjHq21EWJutBVJPhcnsLPzYGztuq4fYmy3gLptMSskfUpopKF8FVvromXn4ksJ5fRBVNomed8AiqKk2uZt",
  "key16": "3PsX9xRNLzzqWfrvsnxErKshkB8SXHgmAQZCgNgBxTaig5aR1Uo1WTmAiuhJTRpKcukppb7kZXcX6uTVREBYF3NX",
  "key17": "2ARUDa9sHDksWJNSdYuJn3nC7YmxLtnFbWFxwDCaebGLmhhvL3HofYHLiBVPokoa91xBxWhMZdwyZkEfJT47eKB3",
  "key18": "3W5Li1cCxXEN5Sf5LcMV6xp7oNfnC8GwRX3AwJhU6tFjWPMAUpsADMDvGHbJDBvPfJPJLfXAQpiw2GWpAVkiC61x",
  "key19": "3fs6idFLQQAzHp1Th3xF72W5jW1RgN2J4ZXURmur4kjhsLS7h4qs9ovXuJka7F8hUy1TpTSXNtrFqYJgSo5mX2KE",
  "key20": "ykmTtzh9PQKX12sDFBYcpkvMbcvW6YwJPrEoNiDNBCPVbXEJmxSLQArxPaMjx7jj4P4fXBTDozFkFNbTEUBdyKG",
  "key21": "28qZERY6VcL6NuWXKVXFHLv5BMur5GWawh2fkrHbumCqmkk22ieRmJSWEgX1TSD9fxgyRSSb4KnYMV93CiPwbgFs",
  "key22": "3PxDsUy9pB4M4dnnGK7wV8ijp3K35goQDTSLWWqd7eZBDrwoeiuSheRSEL4rGm5jZKHFPKK7452RdXRXZimJV9Mx",
  "key23": "D1fyhgrzqvggGQ4J6Zz6xgXqbgF38ksBR6AApBScF9KUFurBDv5moZjFFFGHUmFjfN1xSR9qobGVoQHL26S77f3",
  "key24": "cq6dZvUL7WADmZTzxN5YLTkqu3gruj3yzDNsEpYXUzJCLDYbcUHVCr3AwkEsPrtX1tV3g1hptytbuBVwEYE6H3E",
  "key25": "4HWPjD38UQ2KMcR3hTrHdh3v9bT5W3GA7ppsSzfvrb1Jq7cFG5TwSCWDUV9yGVjGF8skQTMxsuKWpbqnFfQh1ged",
  "key26": "5DyrhkvT9kNDScqpBy2jyeXuNFhabRYTmw5encvPc3ftm7EtG6JKumfszjaKUJcqH4E65KVic5gWj6thnnmnnc27",
  "key27": "tih6QvEeeBjcv1oMFYbUyLXa6G8HVioyZG84c8cS7wLaTWQ7h5a3ZA2pgSraVQq28xYXNUk92peBNb6zaWTL2go",
  "key28": "5f6CcwphDwA9sQ8UHg3YEHYA3JpZzo3KpAZndvnwkkXMq5e1L1xYyrpJnQo6W8x4w4NPpUfCQmaHBo9tV7Zsg9QT",
  "key29": "5dycW4dsWv152EnHnrNBYwFRgRRCuYkhLmfVX8TGFgkEW9GoMAJybVTacrxxdKK2aM4ZtnQh3eQFLBx5gLK6SUVm"
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
