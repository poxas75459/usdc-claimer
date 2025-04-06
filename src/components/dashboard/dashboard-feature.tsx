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
    "jLjcVxwaFdNJm6okCawgEjFn949VtThsEFodiATGJkayoSQ8afUNEmdg1o3mwoarFcBitzijFiXudzeGwjyE6sN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2kytMjLJBGu4RGkCYEawGJoLN5f3L2um7jf2DVQekCkLT546fYD2rS9EfWYQbFMgnWD3jkY4N54G1XkFWSnMQHaA",
  "key1": "5a2j2Ch4Vh4mjQtHvtL9TMoSr17thwjydscWmfAbXmFwurg5QQ725uGQaUZowLWgYrTt9eHN4RH83qoxRBKxqu6U",
  "key2": "26XJ6vbwmEJ4mYEhhCP4GeN39J5aoLL2SoURVAsHbuSe77tZXLonhruB8V9fuFEjjamcgdajUUN78e5NSUMaPbnJ",
  "key3": "65jR5VTiLzGPQuU8i9XqsaVJu8kBEgj9dpFQfvLY55HYxQXdxkoDkQNKZATniSnD2rumv3mKgvgqCfDqHKVZfDug",
  "key4": "5vJvy6UP3z2y66HBTdCVvjGR8HpGTn6pi6h6zHShFym1R7AG1aHFVhqUeVERT9xqvoeVxjSPGsXkdMTfitBz2xN9",
  "key5": "3XDSne3SDmHxw3aLrG6ZW15yzYPb3vYM6Xf949cZdvkzjkFTPXYT8RPNxYDvs4sDaNJp1PUjC1u1Kske1EZUYoV4",
  "key6": "2WvijQXYiCo6HCo4nzwfNpNWyHRLWj76wE2FUCbsskcqGetsbHpMuXiWJnU75yC7GRKGRATp6aT1unULCFfWc9BJ",
  "key7": "3yWEqpnDJwFZR9fo8k2YZBWfNcZXwk5pJjxoFCSgFU1e3CJEi4nKme8wC1p4FN4mLPwCm6H285hDJLu5QBvfqShj",
  "key8": "4DVgmN5CKz5C7G4mRmvg78QgCNYkEXXauBfGqRjfsWyzRknVSwK9UmAAi5nrNSorn5WtJsnzSr5xvQmV6pKfvFLK",
  "key9": "4UibRPkkUS9Xsj5CSs3PBChRGnkKsFhUsy7vMVU24oXcF2ci1id7UKGfMQX3HgRNs4nfZu2uZuZyW8rm39zjQrEU",
  "key10": "seZHRqqmSEJVsatLB8JLigdnRQ2vhVj1d1aEqqexm4vHD1p6gL9ar6vfLPK5aZv6b3PxoGXi2Ta7G1w8oci9KqE",
  "key11": "388kBLGo2A6HMVPrCcqfvPEm3WCPvxkAuLdEm2xHQjbsnAxoweCRYsRdyPH7NDsLQJgRtFw1vqqSLvzGYJC9CaZm",
  "key12": "5TLgaHRqehZiEvCJ643LA5AQ4ML7YFXENpQbaosXDxdZyWuEHCL5sq5PA8rnDapdSCzmRitQasjdyV1kGGg48qcT",
  "key13": "5pVCoLHjRMdLwQPEAWR6Fd8rVwDMSvnrNo1yjMtWzDtV7mwHGSrUVy2kZWgMP76KoaznWxU2uRxidX1xW2fonEWA",
  "key14": "2GhMLY1CyRaW1SAygF1xezhHzxJbh1BrNggHNHnUKhHtXVKyqF6hseiCBzC4qdTXSTkRrd2DKuDn3JBJSKjQoPTg",
  "key15": "NSBaD2TtYBUWGYUWcY4kwEe5QXPYvy54a4F3bdEtZre5LEq5H16kYf7iEdMGTHd17JkSi7KbtRMHxJZNKgsMoy4",
  "key16": "2ot5aQhN8YAhm58NJVjYPTsmTRB57RsAQZjXiVRA9yqGagYMy6nhacdUJ9GMosx31NXp7hVVmSyMPm24qUqJMkjd",
  "key17": "3uBxs3gLFVFzp1BY4RbJbrGWvmtLdj9PywLv8SezgRrSPEZXYpiojN2ovsNetYtRECDfP57NntNBQPiAdzNkm2hx",
  "key18": "2bdFaBWuh1SHd6gUehpVWHrFn5UrJdX96U8rYAymGMFu7Nmzs6jbmJQXTfGxdwfVTrXKymvkf28XLbXUgccGhFst",
  "key19": "yffBtixgT5awess3NpEc5pncqjjFgn43jZPPZgyNY8dSNGSDpNQKehb6Fwqgr8o1AQTL1Z1PBacvnAEybQXLMfn",
  "key20": "kdGFEPd8g4BHytj4ESmMRrReTAPWz9oVKCRzYg3voqKy5gPtRQXqNmDBhJwUoSKBK6GzTbvWqnjndqBTf7cxHL3",
  "key21": "3eRXueGgMQUNyDHMEXYz5AVuqwTXgr4im6o4YajW1Es2K7r7J3Xkj9Qatqdcix351BcgF6osZNJRLr6jQEoWhUTX",
  "key22": "3J5eymCwvpnSPJTfbPwLq9V1ukpTbTUe3QgXvAiybZrT8vEoPMDhz4jjxCxg1vmuJyvp7K1NrixVJ9NUQ58eoDCY",
  "key23": "3n8jLyHyHTDpUhbFChSo9aFNfPuKsT8qqSh4stU329BCpwYWu8sZyr8tPT5hWXbnH3FhWNgNhdo3fPG93vacY9Mv",
  "key24": "49odhFhSKn6Hrfoq8MSaZDfTeydw88ikvigZcNLNX5iskYYbiHeToG6uMEeXmHF3swUoZvXtNv2NyUYcWbgAAbJp",
  "key25": "47GTYTdLXSwdnyKHpq8h7h4bgdDfbHzeuaSuEvdCiDNtseep5ZQmhvoJN7HyGZQJTmkRQzLeLYvSgaaX8BCBzYdF",
  "key26": "7TwNU2gf5YDmUkQybbmisDN8ZQ5wB1pwrJqydZegusGGcsoxaU3pF4KeAgd6CKsb5yXSRR8gQuqiwLsFPTuck5w",
  "key27": "XWmiogn9KdkDy4pqmGj4eRzv22i39dR3fdUXV5E6PE2c82ywH6Q2JZ71kRiQocyB14QAsoCAVhfa1Xb3UXFEemy"
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
