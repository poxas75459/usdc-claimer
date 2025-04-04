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
    "3EtYMZhkMBfLDCu8xCnRiCemJsJQdBEQvb1oHQxQ86kwLYQaYpgDQW4jfxQDJ4ym3MNEzgY1mfSQ947ogqgvihmm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36awnDPYoDM5Ezjm2tkTFPEgRRsTfvqBdDyijncQrZZdpAMW4pKC6E8dXCbo32JwwfHBtGkUsAGtdMVZXb5LBtmk",
  "key1": "5FoswR3wihWsdXBkDAKinRDDjrNKXQuzw9QF9FRmaBqEW7fycE92F7QTt4HKSiX2DFKMPytiqDcNfx7oHLFZxGA7",
  "key2": "3anW928PVSUry8HKy73fr75kxr1n3fWPJJQtRHNHTmiToVrRvHEb9faiwQhBB4NnGKuXymZ66gh6mnubmPhxEHeo",
  "key3": "3DjdzzDPFBZvN1o3b8yLgZB633zhTiyGzPB4V1aktC7CsjwFb1dFbq31mWQTzpSYpwUFBiwc5aRU3sibSQpJdcUE",
  "key4": "1m55qNhay9u4V4SQZwnz1DTJ5L8T55Dgokp5LAwpGsYiAvnYghqUgf5mVtkddB36hLQppnR5ZVZgNHRyYy7YWcQ",
  "key5": "54iejKcoXVnVKMx5vJtHW4EWQ5CvvevjqnnoDeb3vJ9Wr24yoK79A5dsL32nVeTxEpi5qZsXRfj4hBkdBxopoPds",
  "key6": "5eF6Ue2JowFmUAtzZdrQM8E1oRfiaHB7pSMBPwjc3jZUnzcJxzXhCvpCWBDfCoKiX1egqZG5nYswSCJkaPULeNFq",
  "key7": "3HaNwwzkH4AQAPNHRK4uJ4n4uMgtx3yDYfDRe8r157kukERHaWpXv85hfhiscrTj2R26KgiQndns4M4T9nXCpGoV",
  "key8": "wnbKNc8yjRej94Axn7eHWzJ1WoAhKMXDU4uD9EXphzAa1ZZYGpfb3anCcQ8HJwGHCnV9ASxhV6y1oyguTV5B4k9",
  "key9": "2JnY5du5VNnn1xXELxU5suVKhYoCnXmEd4o53SgkcMEmiYrndRGcRwoBKz5ajHb4w5kW1JxnP32YaMGpfkTKFp3F",
  "key10": "32MSkizD26FD3bBmRw3WphPfjwkbHpRZnEKh7QnJn7XVjYS62Q1rJKZoBCqEUFsZi1Ssycw8nQffF61JoQEE8Bfg",
  "key11": "4Ti1rfcZtc9WExemYSFZY5omCBWZS4FgP1yxoCj7S7jya16tYmXtd6W5KKDEACGgAc8CYai18E4gAfCxufLEKJgy",
  "key12": "5CN1UyFqihGkZ3shkUPPnVa23dMLhNtcgexZeR9MY7cVcUWacePAYWS29ZmFVgdAPwg9HxJETHjRTLA29SjQwe33",
  "key13": "3CCcCo42hnNeyc2L4ywjn4wM4voVdFYZuDJBWDvqhFdgCNfDHmTH2iB2GVJLyeo6T52bJFpHNrKW3PG2GzmVqrGg",
  "key14": "2odLLwjHUgR4TSc9soGQ1CvNGe3hoAGVbEbzBCB42YteLeXs9mLsgowUZUNvVatmQvYAaL4EJBoAtQjJNopeSu1F",
  "key15": "3FtbSnBQ7zpY58V3h3Gr3yEwdMxLpU6TPENkdjZG1TjFZTsTh3VUxmCR4wPD53mhnNTCqAG1vNfn7g2LLKYFfsFK",
  "key16": "Sn8Rzu1ix1Wyak8x5VXDL5gSwkHqMZ9sVh9WSaunsdvVj9Ng4UUTAWCwW7cisHgJJZRH2dEuWwxVoHCgQ2vocvs",
  "key17": "5LG3suS6SgTrE72WdpF16DG77rqe9xGWX1zft9YgenyozBkF9dTtSaJXiLMWFdF5MMeSNW3njckGRoAdxFxfsGpp",
  "key18": "3vSJYsAtRM4KVj2r91qY3y2VjVCpcsJScHDKe2PMHCmCXtGxXCbkxksuxnFR18yZzQcuFtsqYCvqteM6wGLHZFCs",
  "key19": "4QMMRfU14358BSHiL13cYoDVeUBigDks2wBHqLMCiM21TW7dVG7Jud1tJoTLFVDc9gt7Bb9WExqcsYbSZZkYscKM",
  "key20": "63YpQKWVMqQzj4HyMuFBamxf1QD4pfMxWaHB4XWxBb3Hys1TvrhmGhqTffmVm6GNegd6pFgsvjEBDVi1agb2QWvt",
  "key21": "gVtz2FDd4srrQjW4DStfB6Xbhx5vB2cVgQUG7ixHi68VExYincw8ZGtEgWpbgJZZoM7z3G42VaCLb3PvvcSVQpT",
  "key22": "62r31FqT8Sjbygn9bKfpt3B4YczQ3iGKLDWsGpuxPBV9NPiT16974VWF3nrmrFhC2J9xADrsAwYZw3zTc7tYBtY8",
  "key23": "5eHqz9HVtsocTrRzf3459ideofV2Pxp8Dtm8PFYFCNFKVfmXcqVVS5bmBjeE3yarqV4iK42zNmeyEuzQUgr2tDgW",
  "key24": "2XH7h4D11jtrqDRowYr6K62zaPmffE2GtjMLitVtXV32r12dvJtF8qncsPsg2EdX9cCT2t3178ZE8W6hh1148WAM"
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
