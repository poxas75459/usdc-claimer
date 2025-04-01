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
    "5Au6nL3ggQsrd5iguGUaYcrhj7eGyfYJnWHY5FB64pMkLFbr3B82RGfWdV59dwKfYUCbXe3SsyMCgPswbFd3HEYf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4XNajsv9gZtVBXRmC1qHCbg1Lg1Ccb97vQ6eAp5Tfzoc51tzum4vAEV52rQL7YSNNzjDnzHVZEne6KMVPiJ5RzP2",
  "key1": "5c5vRXTCQSJ5oKiemesj6J1uXGggJXV1HwjzRBupiTSkv5qG2KiqDqkGgAj9WyRsegMgSSCTZwesEnqkHhGPSuL8",
  "key2": "31XqikD7ftrwCBTmXfxEqYfHGLHRRbf8BNWrjmdtySNifP14BVCyARehD1j2szMz2JtPactv3urVWiCeBu2G2WCh",
  "key3": "5rndwq78DAXWn5Upr16cGHAUWXxvHhJPK2JK3KY8442za1zN1SeewQK3LL32hoRif4UJrkPKdLDHyWfN94YsrS6h",
  "key4": "28tDbCCM6zXfaBJEAJyGMW9r3xsaLtWXDCBrFBhUEh9Pv65A8DKvyijJxN83xTxiFqh4us3LeDoK9F5Rd2M9iT5V",
  "key5": "VAaLErbfdt4jCTu43bPwJPGCuGJUipzCBmrtmcUJhd4EJ7iHtS6duqV1atZWsvcY5GjZN8xR8vtyfQUkUeWdJYR",
  "key6": "sV2YpdnhCGkhmf4iANjYtjPUxQfw8exkfbT7r7EGmoRsP63H63FAMZibmnbsaUqCLZKWLs5tkdXP2iu3pJcXmqs",
  "key7": "3q5YFKaaGvxpwmvXhZfioxJAMq53UWcb6MNUxQBS49jmgEzeM5VKUNACJLMCVJYuJb8q73EFtBcstsx1MgKbWYZ3",
  "key8": "4yrtvyQ5V8jaQWCsMJH4bZGAQuy6SABa6GYG357K9HdorsEYHgHXU95FLawnKUAKjx7EeXSUgK81oZLtMQwB1YH3",
  "key9": "V8kVB343NQLx29cfNsSVBET2K4bNNLH9U36Ymt2XJZUfmtEgmJjJT621iUV8JSgdgDpoL2BbDzk94FPWdpuMtzL",
  "key10": "2A5uEUjtHrLAEaxTurM8sbSrECYD8UDLWTDjy9DP4WgaDUWoaz8AQEJL3psrrZbnmcX6vEMqkhKHh98P8hkU2mU9",
  "key11": "5GsXaRg6Gdne9VbL1XCbqRMuDv73Jic2SFvVwYp7Uv6kWFX68fM9SWD28Th7xDQjnd7T6Ct8qkvKWHgoi7UdADDQ",
  "key12": "4fMPpPBA3U6MWCQsADMSndD25nVNnAEhbudHU7gG9MGepajdELdSE7g8LmPCwd3zppbgFVaq2tCkVMh8shzhhcTr",
  "key13": "5LhrpyTyEsHwyNewEXwfSR1dVNZ8bByXSSoZo9No4b33Ndh2Uf3KyVr1eUnN6TEHNpjHmEnb8i1ZLLfySqSG4HF8",
  "key14": "4wDzGpoyDfzGCH1D6u4FRjSqM2qpQUQuvzrVVW3TiVXoRHL2rd6geG1eFghakDku8zAMLo82r2fp7KAMWZbdTE1Z",
  "key15": "26aRXPQcue4g3pYKH5rQsWg3dH4d31EZ3Nc8skRYGjspHLun6LQy9bRqeSWu3NPA6F7fTafCtcbUVijoGJ4gDcdx",
  "key16": "3BgrMeLa9BnWXbEV5qzbxYxGM9a8BJ8H32CuCwE4hvikzDMSzJfn5AmJV2c9LVvUf3sK1o1qyf7DNKEQxtzsTpXX",
  "key17": "3AqdTSAQStJi5hk83Z5eeAavp1QmP9f6yTyq6WRgduHWNVtYJjXqF3vCQQ9FJWiQyk6izb3oqLmZDKzwL6LRFQ6s",
  "key18": "jkMqaGrqXkNsuAQwBFoNqbqGwjCsAZyv2gQvstfs7jKeMWMD9avipDzBm6nyvYNkUr83QisYhZyWpJ6BkaQ7guR",
  "key19": "5VVPtgoAxoRfoSEFentLJawjB9zxAT6mqkbCQCtD7gHkRuvNc3VyXFMFzFMwAC4JsGN2Yb1xG4WmRkVrKAsGCMBP",
  "key20": "5gqUCMSSBfVvnxiZtuJ229fsSt54HLYC6Aiw6m2EJeRdHCFDr3fr51JmdPpEK5US2W4riL1baWovPEuTCjmBBppQ",
  "key21": "4NfB7nZem9ojSxro78qBqBrZaHfKFqKUWocQ6FbfuCkM5q4NVyhLaEdiytFBy64ngkENYLXxNmh5xw7kiiz2VH13",
  "key22": "jxZthvhGwhAFUn5HUtK9bTn2mSMoa1zghFJSAVNZ1Mfe8W2uX8WPC3W71J5UWUMxmW4JnY2MuYMcFGhBhRDHpkP",
  "key23": "5ysgFpRcu9L63VsK2QfLoFvbRU8yWfkYiGSdrRiLZpE9YJ2Ni3uoo8dCnXsDHDnYCVoU1hgEy8KGLZdRtzj6GdRZ",
  "key24": "4NDCgUAfh43Jzp8NkDwg7yqAiNknFWRssd9MhbJeua4bwpcg3V68Srr7oonrpJBZXENghCimAtnBYWSe4eX8bA7r",
  "key25": "2B6p4Mh2C8sixrVyhteaafQSbkv37zsHQThpgcxZYAYYkev3xTnJxqu5YKjJBNtLBwsrkhWp2HEnQZ3quWW4HHUw",
  "key26": "4CQkjJtLC3Jn61PAXaCVkgnN7QRLiGUUBkGGrfQAPkZC4R6nzjG6gXFQTyUMWZ1FGVai4hoBK86KuqF2R4PKKciF",
  "key27": "4gHLLSaTYRvo3qEY9Wu4xxudbhPTBtAAMyw73WYaFw75YRn2fwDv3wD4jCYzEhFnD83keqsKvydd5X9T6rPNCaLJ",
  "key28": "5t6B5jccipNw29U9LZbGHQjfbvRDpGqiZEe9HNAoV1MugsrF7wyDBW5FtxTFbJFbH4Nn1GjauWHVVT9yXGrMbwPJ",
  "key29": "3q3LxzFLELxh7Eo3QzKXyShDah46cTfEEuQMYmyAtCwvJgokKBbEfmtJQTpFqsa98mtgMbbbsSKv5K97cs38iJyf",
  "key30": "3fojzh44iHqrLLmTUvZRzmGyPGrSXDftrd3AVcjpeP6FNdFmSn2EJ8JzAhhyuFuvhYdWdsecpvFYo6zUK2xxhaqR",
  "key31": "5UhCfVZ6DuGv3gp5HdGLpoUeGrDTJHVPbi3heucYPFgqq5WyXC9qcS3i6R8w2puSsaMpJVjhAHyvHqYR9Va1Xk3e",
  "key32": "hVrrmgraDjFBex7D8QFyz6hhTkAVBswczdjwHk9WofJsuDVfPFPhQraedJPu9XWycHw2QasTmB6LqjrWRBvDKoE",
  "key33": "5sUA7f64Ms3q4TU7fLLZ4aMHDYfkiwfWUmQbdpxDHDoTervWDrLeC5DRNBzsvNWcTnGqd9sNUMP4GLqKxi4bPApT"
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
