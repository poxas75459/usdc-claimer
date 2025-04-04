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
    "4vL8x7s5GPSTVTgfBAkLKN7jLmPTryKgG8b4Hc1kYFaPmka83fBrTG8CZkCwyoc57SPQYW5J4MwTTmTdL97g1m7R"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3YKw3EvvfBxiLeJ4xNttK9TRcqspAZU2j3wnDhSRpiokRR1VhH1Qiusa98atGZGeBGuhN5y64tRiqbom4cu57ecQ",
  "key1": "64dLLi9d5JnYtiHEPw3Apum7uwQXQkjnTVgjTKzwT1dmKnmTQAfSyoR6cYbwUSaGw11iMyDf982bNKkQDoUzrac7",
  "key2": "2BmrqDswf4DKkkXSc4QYHZx5P3xYoWsKRkpomtsae4VQfX6JhRm4xK77htGMxDTTb9A117ykQGHgC8HdgA1Zgtyj",
  "key3": "3ZZGT4uMQdQiztUN23y2Q2Va9in8eqLWKueyyZFA7kraNCT4RrVksQm3PMKXoWDwaCwYv7mPG7JyKSimp7xrmEn2",
  "key4": "EbpfQfJyudFxgfbc3vmU3oz8HvUWZSojvhFvtYZ6WYpiCbkZqHVBXDdc2EuxVTsjPf2zyjnZbTrUBURp1T9S1zT",
  "key5": "5MjkZqXgZM58vtaF6MaCLPNnZPEq8MLhJA2vxuPfvCdb9ssTZATws7UTZGiVnBeuT4Hw1Pf2yB9hUDgE3hrnVJCQ",
  "key6": "59pc7PJuVFbeq8FRotYyYVh81QRPDPJpTA6NFx2REieaaBtH1mTVbaNFqmqdA4pauu42bTtzaDgpPwCpGGtDaE81",
  "key7": "4zJpLGbiDDqKjKXN6meNbdJAcqCtJrF2atWGfWjPGshBMJbVE7X8BwfDd9ptZkpMKLknw6ub1nykf7c3kNjqPoDF",
  "key8": "4kLFtbcwZoJtJLMWzGAgQSgYfqZabzpYVgHc7chZ3pWc3vC1XiYogGZuNoqxs9bb1JwvsWvGmZsWdym31tUnQbFz",
  "key9": "hrSHQq79sRPa5NZnBK5oZnAMwBReyNiiTjGQJZRVRbz4Tmhzi6rNp4aCGvcgmnf2C4ySgWsaubp9arYQFxJZP7d",
  "key10": "3vuekKs517rm9CX8nv4z6ure4qHgJxmRBkXnHB8xFZNe8TuJSFdz4yYUxZmHpXYFYUX9ULy582acZsTMTjCKfBuv",
  "key11": "4TFCs4kWLLxEGLEPEkGevsC979KKieiA93eGkMDsSprdaGWvYRSq3F9qf3rGQb29ufdCxXsvEDZzCyGQvCYmtJTb",
  "key12": "KBYLbEot9Cri9Sg3fKB2G6cWWW8QBPA1ceP6rsm2MywfgDYjDrX6QrYomeSSmNnQQQZXL3V5daDWa7RdNKtmJ12",
  "key13": "3CL36jSFjw8c88e6ANhehEUTQBKFqnTB65fB6yrAM27TST8agy3NLLfvvbSJc9uQMU413XbZXkokHGxHjt6RGh1x",
  "key14": "4yV8VAzxBPKz5ir9WPnK9UbTiumrnHfUmieRyuXo2n6d4NNRE3yWnKQyXpWXVJbVnHfLeNFudSM12KrFnUpNSyLy",
  "key15": "2r1GHkPUxYp5tKio4YHy3ZiDMDdZTLNufBkwzazFi2LuD6B4fsJKdRm4HgZissGJH1rHNLrZZBgfXrTk5BvCwngz",
  "key16": "3FCcWzYxAyez8ZzAxHxvNX629thqW62SouCSgh33sG5EVZpye6ktmtLwkyUbZj36xRckt7k7KsRr8SF3BnWEgzNR",
  "key17": "3d4ryNdHGDZvf1DuRCveo3FUGK9MvgzLE9wfWmHQVvwrASPsoyxSq6xJxU2XBMkYHVVWf6x6ztyEbSwNJXafQdqx",
  "key18": "5LcWbdHvtQJV7QVZaWuWXprCRkWVFrnxG9EFVyWGvCtx6cdJphd2g9CsHVtuB21A1dVDqscSPFtEgNNiAfYYoTn1",
  "key19": "4XbjoarJMZLDyhtJwkkdEn8eBPthuT73gSTHgwj5D7pkUomEs8cBQJikDufLtd74Tg1AvKo4r6hiYNVcJC8MY4A5",
  "key20": "55DKdB7gX5X9ZcnCmTr3WwX8yAn5sbsHaximUNSkTvyVZdjTsZtBeAGtsodqTw9crXh7jPCcfKYt7JTU121D4mJv",
  "key21": "5JqRrfmANvEVrS2rBAMQRN18cy2vLsN9Vx3i5tkBuZbDUysHB5dmwe46fn6rLdEfE3ERXFHURjSuBgnvGp1qeFp9",
  "key22": "2goKoWbEh8YTJzYXmDr6tUUDiPiqeS2B6zMjE2hYq6MXYmqxFee9Np5kCDrSvnbm6Govdtsj37zdqP3qP3KfDDDm",
  "key23": "4Qsmrcg9tL4SwWue5x2CyXRMzkD9JfW2B5jvbZvKbN7ZK7xjGSsKZGZzTaCGpUSeWaxZRG4eMWxdAgkJ71NtoYU7",
  "key24": "5ag7B4C7cf4HVH2mifPUN612D4BBNo9mTkUEfCczFqXmDKjFTsun3NwKhYs27VNVFCndSPG8yv4qTuM4fFRkBd4B",
  "key25": "2TpT7LNxLvaP4dJxyV7hVaar3rXac837d7HEdCMBn9LXp6x3EaY75QBQYw5gtHZW5r5ovtdu1k4nn5bXsFqZxnDq",
  "key26": "4F9mKZPrbEbU6B8s71J9U8iC4Z7BuVMs4HTX33Xdy4FBd29jzVwDKcLar3nQTKgV7d9SMnyJWVVRfXSYjeWRZ2ko",
  "key27": "5boex88cHEY4VujHKkXNx1Mj8xqQy89sqMocpeo15cRXaB5EqwBFwxTooHBwfkp2fc4YHcSbpkaa7VrCew9YhYmD",
  "key28": "3iB7VcyusmUdDs3NGabzcD8cPMXE49yqGM5DbHiuEHigPnxL11ZfYrsE5vAdL1u9poWvuMRMoZuJStFgaqkGz5oW",
  "key29": "9zhZEHjvnq4TDGUFtTJFnc34tkQuKZ8N5tnojVaHgW5SE5MQneXKtzzbCSHkCrd2hAL3Dc1EvG4hkyYvGG1XmRs",
  "key30": "2UoEtxU7aqxUoM82QUMEcRsAyMUqVnhqCATKCNPKcGYJoZAXnoCkMnRZmWjA1X3DYfChjVZut8UXhC7pXtqijFiy"
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
