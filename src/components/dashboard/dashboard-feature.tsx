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
    "2PGXocJBnipPQJQX6hQGRUgaJzfBcyAwxHdvSsf4jFGtMw26h67ta4XyYmznFkBh6VETNQWCqJutv74DfH9qPjHM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3AYvNQG9L1gGLJx4mY1mu5ksAK1Nhuma69wDDvyTubNGiyqi8TsZiaFP2734B3CpvzcXSEa1BS1BosF6KK2P1Yx",
  "key1": "5wvnKNG4PQttpgH8b66ywssQ4fZ88TRApnjsb2SsWtApq7ZDrWXuuBVo6UyYzsKGmbqJ33dx2XCHWg9DzE4uWBd3",
  "key2": "3XA6GcAMwEmPkn3ijHswc9rk82dxvuFc6hUbtcVUrrH4PNA5xFQ4GYf4tuzPiBV5qJq6tNQmD9coG5BnsTnLMwMx",
  "key3": "4Wjq78RQEbQuwPMPCpHh2nk1ENyTvGFNZzpBPpz9XL6NTEmmyLQLbLVaLNgtwpS98wYCpcdhzDZCXCEQzLK6ynGw",
  "key4": "4qA2rusDpXCGoPGGjC9Wb1DUedZ2P6KLoyJfbWLtBZjhmNX1Hm9MEj4yvYQja2igvaEab2cRurG2yUuLXKQj2dPW",
  "key5": "2m28VVujLEntbN2fJGp1nqQ22vv6LYx3SUhp97C5Fj17xSqdcgXBRX6jRKyz5CgmXCioYNkVH2zoQdRY6F1mStaR",
  "key6": "5xZJKcWN2SFqwGdhQgD8kK41pj626ffeioSKf6oLMSR4KPQQEZwUDR2CQUL3dhzeuFa8bkK8ku7BnP1rNtbUcYin",
  "key7": "2KMkWBCEooKrEeK2QiDuuJdZ8qro1T999wMruVH829eKFof9cBhJVH7i6ock2EDH1Knxds2TntcbLRwdUTwZRBEQ",
  "key8": "52srUHhJFEfjp3qYB4KdcJRnxMAznK9LcQZe7Q9o4wuNguEQA7j5twWufNo691brPMkxPbDNrXK6CtUBNnKU9EbB",
  "key9": "2mRmUE3ZkaZ7GWhqf9Ehypib5FxYoHqmRU33Chpbgdw9SErgQLtSd4pmYRX9AGKPTm6Bdj6nD7fk88aa1XXdTMnB",
  "key10": "212pUKNu9Pw5GUQQKVJYR5h3z4hDjMHLCKeSzBJCXiYVy4STH7MVw8XTtG2cJoq1p9ERVNnNkxFZMVn5GbUu3VKi",
  "key11": "5oNmywBUzRjaoJbowNv4gRSG3VrX4riMtoUgvwbKPnJpkW2Yr3wCjPY5W8caC9PCWZenFLd6secX1XUhbrf5tdt8",
  "key12": "592pi1f5pGZxTAKVMKS3VVu9gVrs4kYbzFEepZNLH9h4whEoZ5TEkDfWmp5wso957NuNwhqkJLSYEdsegv64r4Wk",
  "key13": "3WdSc4ztTWyN4K4HyWkkxy7vWLi4C7e8jimhwhfFV6AD5ADDCGNt24ZiGG6bcyLtVG689PXFxFys6L86uT1hxzqp",
  "key14": "27dLh5puLZQs2cgbEJ4PjTUuDjFiVEKYA3JM22Ee8F1PmojHPWpuNixMZZHtAKQyFtppYW6H7U4VSYktCMG5pLq8",
  "key15": "4XP2ytPNB6td9uete4BDCo6x3tMTEdy8Nae7sAKt2TehBLWEgZ6AiP4d2mNxxWHew7vYvEkD16av6u6Eogi88qL3",
  "key16": "2ND6FuH8a9teFyhhwG2kETJnXoccVK89B2GmPGRceaeFWFErBKRXxzC3scTYQUzVFoJaTq5ToLhMVCEW5Y1Wvyy1",
  "key17": "5qhc3iUQKrJ2SYvvPL1bfuJBrt4uq6VPGmKGVsbbQ6FhewuuW5vMv8bn5k57jumW6aoK7eTKrAqLXQVZjbhm8vrV",
  "key18": "HgRRZyRo7i8gU5D94oQWMkmBc8JDC34TCPMKdYAjEqjQLhM2rvPwn3K468EDtoJwYbYnGGviKiBfj9U5jxemseB",
  "key19": "5Y3s1UQhbhi8bkZDwnEpnrMuN3X6dMgLgk2YbmKHERD61qSRBLguoNVAV17cETj88pyhT5aDWEE6jSyXWPD9jLGn",
  "key20": "2hBVNKCiVKwaxpnMXritEK9mmhqrg664LhFRm3YDDF7Dez2yoHhCT4P3ZMgEY9YXAtSyCfL6ptpiyBYD6PAL6RA5",
  "key21": "3MsHxEYVrs2TnMyFBkNHDK8f3qzWNMAuuvHQgMKK2hzFArLj7A9g4WcwEAChVNYjhpYM6XcUa78vJUfAmc3Vbuow",
  "key22": "3X2h7rPop3EmCKLc4u1HtK6Zh2eNQ7RWtxvsGVb31R14zF79TXPAFb3v1ffgDF8xzNAaXvrXdJECTbGVi1KcYmmb",
  "key23": "4fo3kxKkJ8PvWWPTjGAAgghEJAHSsiH3wB1bWzbuBr2QDaiEVE4CxQXbiAR6efXTjnXFrbopTFXuFNn6QvzvkZS2",
  "key24": "3cxxuy6YkTvTyXJdqV5zAsjbQ6XXvAxyryPi5PjpFXhYSZZs4EVbDmFaDKw9c8zoiawdDDWEDHDRvby6qfypswgY"
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
