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
    "o9jFgaRFEuGu93kmHoZGfMrQDjpwj7uPXq5ZkSSLd5YLTLiJ94whXcY9NJsNQhXiLLdqrmdKShyJNm1GHT1DGw3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7Y3sVgrCpphrBnSe7CpoU1ubmdCG8H6BtrbzcFjfh3pPWjYAVKnKNee54VtEigwvM2df6qGfHUbZnamenVo99o5",
  "key1": "4b3dKf7bHr4JQHkuKMoYxFbs3ZQcxCLhytUVr2cq5hX7f5RU2s1D1a2LTueqVdZvUa4o1npGPW8Erb6ybAtdGhE7",
  "key2": "abuHFtEcskEU9Cg1PEXqfpdbkKAcr8tkxiUUUtJHhRsoxhkn7YCZjWom5K8Cgck9mMEyDkxp1kL5wCZb6XYavpd",
  "key3": "2i495s99fM5p182tZwsNMn9bjrprZ6XANJEXRXvmR9ECHTdmCScKLcasigFML9R2reyRXT6XnYQ152Q1BQVbFG7Y",
  "key4": "2XLZraqGpGK75qvnUe73AbT7UUzJmK6WMwpuYXqVg8A5ijdTJe75WTvGRPK3ieqBV2BdPRSorSbtqTGYFQyF9JTf",
  "key5": "2uBERtKhcVJ7CvzBt2HYVVaAd5CQvLsGmHNxR6PYvSKEJyFQgmWWpnoEXR4o2BqyJe7df9HUfoEnopFwCCZWpHuB",
  "key6": "2JXH9wNPgVFvB5bic6tKa8usB4MPG3H72ByP5gm2QZ28kFU81Aeo2tCj8Xdx8ZBbp9UcTaBhmPWaSyXDcHnk2ADk",
  "key7": "3CZnhwKTxg5nBZyT8BwAKBcgdoxrvM8Fygg5jENi8t7AcqWmENWsKbY7SkMbNTqkAc1VWJu8WJHjf9dm3HDJE48p",
  "key8": "5T6ZzR3Qv3FE1hdnjEeWjQiyDzA6X7Tz6NTew2KX1HkpUPvSd2XrPqa3kZXw1soB2ZxKJhUY14AM3xiW7kJ1ddSS",
  "key9": "22gKFHepTEta4Ffyk5EUvfDqaHEeJosBU7GtfnjGwhTARCqVSvDZv49QAXDU9gxN88vxy7uRAY6Sxob8T7TcRP3A",
  "key10": "39g3JSHWSL5QGRK2FYyonDpVXx8dpkmGCRFi6fKwGLcb7Miv6QAeJ1c6Ujtz9FFMXN8weftyctXyek7HoEgCQ3pC",
  "key11": "5gSQ4ohCeRNDy3dUVQZK9or1NnQtbVFrzDoVHeC9ivqHPq4UFnbVX7dMKv7Rb3GktcaqJsPSWxj1iLX2WQZWLbtK",
  "key12": "3SS2FQ6hmPMfiGHMfGr64imKJrDCzjhn9V7sTiapHQCaEdfJBb8KBkErFMGZkJS182SQJ6XewALMGHLBd5YPJYjh",
  "key13": "2N4Eda9hJwnaA9D9FrH8rVStd4RD7gaGBoKt3AN51vsKy62gLxoShEMvy7BsmZ6BnexZwz7TeKu7EL8oCSBgHewa",
  "key14": "3pUbswt4nuCjA3oZ8a3D2hEAhqdi1k2ZvCoWXwMXKo8yfiL7rSwUjrncLfzTWTuGYeB31z4FifY4iFW9fbS8JCjk",
  "key15": "2WJV7YTJYQG5e3U5S3sdY7A11EmoCx6Z6QH4H7bvj3DWmWZVeTR6PkgvJn3P6ZFdmvyeVsfK3vcDJj9YrS2jKgQT",
  "key16": "3rLbzbB1db87JwZnpoHXxvKS1yh7LFqCFn7g2BJboiaofHgy1XWRtkBgUrGBZYgkgScxdYhcQ3pxvDqALbWQBRan",
  "key17": "5Tp235Qs38sqEs4mLkEgDT2WZALvrUTjxaeZGSewPKZ5fq3h9wTTa1mW59q2ySxfRN2YMbSuBePam2VchhdfVcvD",
  "key18": "5r1WLXLhWQ4YC7L3kZzQgGrgF15kjHwfaiC2Ud6fXtBFte1Y4GYkJqZHxeKaYGg9v1r9pDVu9SYbAHBYACdq1Z6H",
  "key19": "35afgvWLb4kVwwVRRTC2SWbwi4M1htK3gGfo7Jg2ycBHwRWoC1bBFd3kFhjn9pY7ySqjXvmW9jn78Lwt94WnhByJ",
  "key20": "2xsbdJMRAiTTiZrVEuxzoVm2P73nasBKYf3X4erPJnDtRfVK1wrKjPzXHJf2ojjUuMXBDgjuauHPF6ZhdkdN1C1v",
  "key21": "5dYzLstqPgdrjyBkY5WB4qqFkv5awZbvF83Cw8jnKGcWFdCn6n2amemSrXsaXen3dFvCzDCH7Xho9N7N2PHMMTDn",
  "key22": "58zLbwfTcRec8nKUHZ8bYjM19T6ERoW5PcyuQFAmTf3hPLqydYLXbYYzZX4EApHfaxTYskKcsw4oEByDf6yWriHQ",
  "key23": "4eXDDAjgfgzUNeo5bgTKYjj2NUjnZKxaRokUtk4DsxrS4Sfg1vGC6iVMMZM5dNu5T3ejdNr1MUmCfF2d8mTHhvR8",
  "key24": "38z8VsFfgPXM8KWzQeDbTmbqzrnBpjvT5LUidYyEnevVWcERGtTPTpn74u7vjCmQK3o7sHvH7FauAWBkW4W7fTav",
  "key25": "gcDoZtUU1Ff1zXZAhzEYzAQgQ2NvfLbGaeFirEdk23maLtX5yjQ1XsFufS31726B6iVpsrWrSyEtZqXsi2zxmF2",
  "key26": "48m8VwKS3kBX8M1NWjhbGnKSHuDF7WX1BZVHHwJo6Brp2TovtuhdBnr7BNhEZPPtYW61UunG6VwDVB14QoULtvYS",
  "key27": "y5Vn83kiLAmUkrzYTYsYiFKwpdheeBy3HKSsd2RhfzBajoxW8SkYGc4ecr3kaxpCag8qFxEBYAgXEWCBs8Voxen",
  "key28": "fvU758FYPqqWTUhYMnqYmfFUSmeWTR4vgG3WQEbFFkuQezLHkVhc7Kx3d8KpjTfa2KhNhjPUXPXzhUbT5SDoTX8",
  "key29": "3kcyHP2Rc5NorXRfyGWYauySZwhk7P2Wp8BkVy2wCUDyRxVBEHshsEgAty9LdGtL7WP8Y3VhQbVfkwmT542cZghX"
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
