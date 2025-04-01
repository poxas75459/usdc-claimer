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
    "35PWzZSfZRLVmEz9g8Si5KRKiubqZQ7sYF6FReMm9sseXuzphAtg3jQvsZ9GqpmTygtAr2Z5UoHPSsjwPQwtnhoT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tf778fmeJnzaGNe2JRaMVwpj2oftai3qz6H64kyfG5TFgd4cdkHgV17T4CjSXM1oAX67nPaiptpSw4mTnY4a2Qh",
  "key1": "29rmhvZqenVqsihMXkvV55VNGWWchKxeA5yzvfAAJe4WBsGXaajyyLWip7pLF3jjkCm6LCCxhUWEaMJaV3zdftuU",
  "key2": "sfgQrpDc7KoFYMdjwApzeG416f2YPFSTEGBYRXgeN1BdkGX9Gq3fofzoRfpwsbqifsWo2gYMuDnBmxJ6u1mN8RF",
  "key3": "2kf3romgktgdCuDmgvmiFbKQGEt8osJVJWqH2LjG3WCHxsWMyPAcjbN4kpAv5sLNJ4L1Rr5Fdp24zTWRcLEB9vFq",
  "key4": "M2M3LWkdAJbEb6C7krVKzmnrxtHaT2zoCJXkavjYkoYxdDckShuRBSZUdjawEUbn5CApJLkKSmHdCWXhHRy4Yj1",
  "key5": "528tfMfCJH1RKmV3ZFYVES7rVskedYtWDTjehdHcLAtdED742fCTkt7YopbX2BACsuVtcJHyJ3QCWkQWV5TWfZye",
  "key6": "33c8amjCxuoyLgLDvb3Qy2DZV44QMtLqpqp6M1gv1mCuAnNrtPZpWzXQf9tLbQg6SFX4NHQr4Z87fmhz3FSGnT6",
  "key7": "5vV88QuKgZgD5bcYNQLBSRberpNECdWhWjuZPd4NXKCrs2TAqgnjXU2YpJL9nn5ScLK2Mmo5dpm6FvhAJf1z71bj",
  "key8": "2RFncV7BuLry6d5E5SPqPzyZ7KF5L4bvPiGHQaiMsbKccXE1cc8sjySLqXKvrgYyxafAkhUHjXEsK2nZGzz7B7Ec",
  "key9": "2VcNgN62YcDD2ZzoGnNGzBJGZd9XFu6EQncoqAVMQ8PsY4PtbFmMDH6eDw1d3h3SFy6S86S7YG9E6pb3UohwauBV",
  "key10": "5ZNnttmK4ZXuFSVcoyMftKUtWbgZ4DnvGtxnKbMf76KMnrGuu8iYVtUwQDkFJVnrvUF48PDHphWow6jn17wpCUkt",
  "key11": "56p5kGTXmJJXw2hKnUuNBJjCkfTcWFrjvGmtX14y6GxTSxTa92JjvkqdZeqJWUG3SbajukxGw6NFfKZujV8qftwe",
  "key12": "3y1vHiwjbzbjnGkEYdLvsNLVbLbGUf3EzargirUeshKBxGQVHAFsQ21WYbq1u7CsrQD2zscC1cxhsqxbr9z3fWwr",
  "key13": "5wg1Vxdhcpxj2HAfmHZCiCrAVzYhF5uJPamL7PsP7wTKEeDSru7U7vJf1tEmnrQ7QRMwXAFiFpQVswmJmFSphHYE",
  "key14": "4sRNRNcbFaAa5m2LNxCYby6c1PK8STKq2bWAdpimG741eHMP1HbPFrHHGcmhr5QQktH6dPkiwGyDw15XjLS7e9fz",
  "key15": "5Rc6EZV2LKiEmAu8hxXLENtfoF9pZSfCupyenJuRhBduht5y9zFdMXfZzun1CPLTbD6VyBtvn6hiuBNuwVzaMDi2",
  "key16": "4TyuKtBjpTkGvYVZEQ5hVXjQEp53KoBF9wLgJUuNHb3fNBDVNy4LTBRhggdf8Qt9iEMtQeUpevJyu3N7KsSycfeL",
  "key17": "33wAFBPRiZn2J6HhE8RJAANXrTDfmKLWt42uJCc4edX18fPBhSBF4KFbWN7uVyUfPsrBJa51nLF98dkcrG3xe1B4",
  "key18": "2xCMNStyieAUjLH8GBbV8Hi9pYcdFqb6RhPhVSLK5Zskn7BVoP4rGaffVqtF5ANrr5XNkMbMhQyxyWSAc5FrfsoY",
  "key19": "xtQaGo2ABTT2sCH8A3Kh9Zpy6Th1y8TkHn5tVsKW3UMtMSBfGy7q9h2DQuSQhpNPVk84BwQxXXwvPJLinMTvNEd",
  "key20": "26iriViU1VHHc22JYEaCoyiEhfYk3J7oaTAZi12PZUBCN1JY7FBKP1DHTzDXhnFcfvjBoEZEVQTvRZRpSqLisFNp",
  "key21": "4xP93gpgvm2dDSWxrszz4nhsCBe8MbpmGpXhv4vGwvBc8RF7rsguxg7PoyKnCw1Wj4ecHoKkm7zDqyko16S6EmuS",
  "key22": "H8D2XW12hoqUmKTH7W6WgwdATXsm4QQKoKRjwqLh4Aau9gmRUr1Xs1ReNqvR1JXWBRboLe7uYDKA7XPLPMVcN5Z",
  "key23": "55HTqfxJczboFLdXE54kRBaiTk4Zhvs26THcBeeSrMpcqaSqT7r5XkpdTwzmvH1nF6ZrEZaFKMwyopXcbSktyoiU",
  "key24": "2mGu6f2b5ECkP5h13J8fCfacSBxbxqmCEdwRCwF9G4Z4eC5UJrqJtHDFYtirW8ewJQBgdEJyteuqF9J569qW47M1",
  "key25": "3FdgFvfz7vCZUZakf3TT6ukkxWKNVexUVCmKUqjYukDpvmyCBzfecZ7xKPjNaUpDAV2ax23om1WFxpvN5QH8NPgt",
  "key26": "3XZdAoZcH1jh1Sq2Y6PfqDXWQsfWgXw2UNWG51CcSA5PpntCWYHdwLfL2t61bxB5x6ZLBMTWSq1HweNfrCWVrq5B",
  "key27": "3DZQ8kvpzHADVKG4g351QfvREEFfQFpuX7vSfaPnseqXxcxS5gZB3Zy7RKTjR8UNUqbPUgoZ1oLDPhFJsABVia17",
  "key28": "2SQupVNjcUZBMrsRJst3k7gZ4AYHbbeP5hK5YfrVxTqvAxZ9tdThZqGHeUBkJvrTWJ1EgvvBQKFEX9nrhfWhf7Au"
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
