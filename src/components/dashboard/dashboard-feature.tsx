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
    "5VpP9Z6hiU8UeTJYM3YXGM7ZJBcjsfj8ECqmBWMMHHiPuGv357F9qfUSPxPrX7NpsfzH4uZ3saBWyqThZbu7fyC1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Yythh1wFE1XtfoLNiEqEUpWkpKsLWYueJ6BBGUxwbCbeMUaLzG95FvqBrXGwd4kRHUndov1fcjxxDnVWZuDVytJ",
  "key1": "5N5TyUb5Ph4i2L6eXiqxVvq2y3887FU8V5A1v3yKwiLQZ9nDhWaMZHo8oroyxWphWbT3z49sssogbMNvCu5MSL4g",
  "key2": "2wrq873BUQyWvvwLVRFFXX6LJjMJFpjtVQURoW5oBNkrKZGGa9rNYnenyLRbVEjF6GuZK93pLwmn8zNPphFubTXS",
  "key3": "3mTYsQJ5eEyeoKPccmmY5PYszM8xiycsaBvzwsxborcXxS74p1KvkJJx2T11PzNz8jmVWUqD5tJ2JhzmPiwrSUFY",
  "key4": "5Cq4njtJ6Fc13RZLvuJBQgF2vF4XhBnk7YPGygaTgCLfaRTVc8DUn6hPLZbdQqWygBR6SSPPCw98SN9ECyFe9jds",
  "key5": "4RZXNV3Tx5LDn1K2ag7a9CictN24xsD2Nrp4Yn5vjwZDjMBnJJhUHpE7ivwHrvvGyG1MPpE8uuPNdaFj7j3KciYw",
  "key6": "59q6v9fTnsWSaBnhLneTdDW2Fg38oXhYmQkJFANZb6f4tPtN18rcyEQKeyzsiK6UPZpnNu3U2m13nKisWjoMeE8F",
  "key7": "5jgjXrpjZe9j92ghxzcX2C499UPMxyxcMb2JUS2r3AbSDTU173camGjVRKUbdsqLWrVvQYajWEh2Y2KWwrSuFnns",
  "key8": "4MFzArz7uN39xWNpL1VEHHtxzNuz6qxAnVvfxfEgXmaxjyx6VNdaRt8GbvYdYrthQZsHaDC9ePPYMrsagQGk34p1",
  "key9": "5csjfsjh29A6wv2v6bup5wRUjzoQCa3MDeCa8P2fAVsNHrBaDjczpm2Usqudd9Pe6Jw4Q3TWFfunsmjRur7ThW3w",
  "key10": "4NSSCRwR7vAfCWng3Mn9FFu6YjKiD9RsVLP2rXXcKwHshgHtQmL57rbTFHVhT1DUi3zuce9wwXXGjgZkXaPkprGo",
  "key11": "51XJQzCJkPu9W9wdCJ2D3ze2fedHTzGKhJoMm9sAHo8pzynzccTk9W5LYqPSbYHo7XKAoJu8PyziKcVWBQifkDar",
  "key12": "3NxpXMXdxrAoV4kW2U4WWtMEkSMgRQ1pfCDtWodDpHLqdGgudW8L2hns5Ucw96uwyxPPN1QuXW3bmKuj29wbVZP3",
  "key13": "3YLVNTWqJeQZ99vuX1in8Egihb6vJ7qEhULDHoMPC7bfLqhHpWCupCa3q1pKthZp8NADSt85QZxQ9rBLHAuWe74e",
  "key14": "pj5mmhJv3dv91wHMGsp5eLGv8ra9T2oonanntuvUt7dw84nsySK9zgkmXUkBrbX5H9opc1xZSQtoT2bmUbvP3mD",
  "key15": "66e2SZ48Vdc6tySARYUuEqDEmnD1c1xPfp6swdtrUQ6A9vWTAr7upEcMdAJRyNeNeDfDrscYLCHqLtBekLCUEWZK",
  "key16": "4H3V825xsTt6oTVBAfPmHdHX5Ao4zqsb5ZZSBYkuDzxYY1HMadig7uR8hTmdhUfyxRnSjf7Jo16ZbXp9Hra8choC",
  "key17": "BYzjB8wt7fAtYsykZuAMAe4uBF6sRvLkMQXMUuoR5rSEsppEFTLWdDkaAVJ4xfkBDVNFafzTD7LBBXb3BNaftVh",
  "key18": "1TTuMBHwjbYTZr7EHVQiGnKhct9MakZiKYbNQcvrnfKrKajnRGrfUH9ksJthnfCHnXzxFXFuKg7Kcw1Vr5V93a5",
  "key19": "2HnZNihJbbYK87Ro9CGwu3K2NtshnEJ3K6zEbqpGQGe44VxHDWzjEiWgjv6DMRi8HyU3JyATQQC8eCXRNU38xLhT",
  "key20": "eTdmKVAs1bHJjrsGiqeK2GuLqCDYfHeanqJThqpbYcGz4WqfHtsZquKxc3m85fX6wHXT7dRyznwkXVz89fyP7Vv",
  "key21": "3NfYpX7FFghuXMVSVWijsEZ63pU3FqMFMUBAcRvg5UJ6KmSdZTobBtMGb8WK8LAzarPj6pgs1yJHk9DbppjfDBFN",
  "key22": "3TYvQQvh9kFAhGd8u8YSdokUjouhoHu7FZF6tVqomjxrBSnzVSWCmdXdsC6RhRfdSRmZqQbwsBbXeKB2Rz5qX2UJ",
  "key23": "2zvxr8zNGeaKQggpfsRCkiBkjbp2pwiaaqHshnykK9p7siD1sEzZtJJwWwz684M3tQcgoAigzWuQ9ox8sXfVgfCD",
  "key24": "3xupxh6mmGcHZctstpdYrbq2fsdqA1Guq6t9xSrbvU3emF95SNKc1m1uoS4NoqSwFgCaiutXtxdGtfCP4Py6nBHH",
  "key25": "iCJZG8K63Nz5rXuF5Fh5F7oHJBtRQjmEuTUUKK9j1yKM3rgTSa85RGHgF7vsF7DPfwumEazueLkVYJMPUhqLoqa",
  "key26": "5bwGMby9PVj9TTjXrUG9uCxQPLVmCBcxqGsgmRJd2ChZBxMwmDup15XXARH4uBW9Hjgb71bWbF14Kmi49vdeYTcz",
  "key27": "2BbLocuN45TSywrSvsa65wTAVGva1DckPw5UcEJhgdUGG44V1jdFmXEK9jY7rF44brzu5B1ATNR8e5QnKUsgzG1h",
  "key28": "Lsh7JLFAHrR4nYPzbKAeeMW9DUGFycaQGsK59E8utXMtNLCUXyJBiijbkLpjmLBLPtQqcAWbA1xPGvEQWakYW34"
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
