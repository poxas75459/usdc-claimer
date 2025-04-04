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
    "2adwGgWgvpuAq3wxDbmXZ4cR6ajgrSr33VJUZJNN54aM3kTrgePwxsmcCux6oy4NxqEooRMwRzUGsGNJeD1H7G6J"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5DCa6jzUzYJyp9DKLRRqv4dpKQFqBwkBm4ygv63spYy956XQrSKzL3nu8t3d3g3bJN9kVdLYL3jenGspZ8SxwVMT",
  "key1": "3NvZqFjR8zVL2GnqAwQczYutgwShKncU1cVvYYSW3cv239yXZDEY2RkF2b4BaX2TjcsoKypPormELH6uRscc36zt",
  "key2": "3sHsRZYTKu6fWHHNS39bwD9Py8EdxXiVTnifW3zJ1ka3TSNopZpsJwwzSKgWuyr119wUxtLg6oWM9nvTS3xJmPk2",
  "key3": "2BvRGRcdZgDwbdSavhMAxDLq4PUX3o1AWNBFhjXgsSUXxMhn9gqh31PHpXJCHcqM3Hsndch31197g7feMgGhVxGa",
  "key4": "5YTzsUbPvZ9aGs8GjgCa9YRo1gfZUpPGcgBUo5fn3mXxwH1oSuUZ5QX8kdeYUyuscfjjPrgzp6m5fhtScgbn4csf",
  "key5": "4EFqs6KL27uR4pKxufnMCPiBHQLYfLGuyJe4qpVgkjDXAu4FhMUM1bXUaZLczxQcdZBUhj1wzxvB9rnCKWWvVKJL",
  "key6": "56dRdf7XAb3gqh6v6Uadn7yaCMr9g1Br86E2FALB8C9TL23p92JpSEpkLP7uFHm9mGEJgRLF1m7yCWQR8AgbGQRy",
  "key7": "26Uo6mfcbnzEuzZUwDUV7wCBFJHZv8aGWWkULchkwhqwTRZrwnXykM1VJxq1jGozueEhtXebymY9KED8uGa1xXrc",
  "key8": "9ZB9PfQK7MEQxqB8WcjewoQhaE95uyNChqHobqHkqnUnseRkL8qswzjLP235fV2jYXkecQroUaRSJ7gMXnrXvES",
  "key9": "2QLbxZbedWr2FmyATA7mgN3P2r6rgbjRQqtJrUhXg7UUNuQ6ivQ6xV2xoNerfuonMAaBEgXq43d69XJGKeynFvYQ",
  "key10": "4FbCoJfhNmKk3xr1kWXoRHYmUHcpWVqz7rkew9eQSN6UuieDMTcUJg9aQ1hpqdZdbTjuCVpPoDsFEPDfzzbs8ALg",
  "key11": "4gxFhaGAjAvMrZvpox2LMgnypc85uBf29VWeJEZX3kaysrnCkCyt6tsQKTUr1y7d3v6FuLe28UFULHo2ZzqjgnN2",
  "key12": "ciRa51AW7UAJcnzEbJ9sTivGtSshaiQq9q5eDJmRqkXrQPoitQ11EkG3FpnbX46erLZ8m8LTGe5TiMzYgyxkPrg",
  "key13": "ksp7KBdPm9o8XDdopiepzt2MUc3Z2FApHUYCLB4ZuvDdZL5gaXYfcKkkJhfMKo7GaJHo9mEKWAQBF2T3No4TQZM",
  "key14": "5CDPaQQb5LL4oRZ34DbT7HkiiPNSyDcq6xL2U4EgPmoSuGf98vrrR2C8WnpxLYsSBE9NJJbMEbV4ASKCG8jST5LJ",
  "key15": "36gBvNz9nTTUMUWdRSwWRgGkVgCcAxYdQxNkTJ2Z8nRZDmqy1P4X6vXZFRfbj9txFrGhXA5iAjZbgA4AujffvxBh",
  "key16": "562YjBD8hedPrE7zGdVBCtVoDpU7Fmd5zLSh7mxqqFsXv6ex2BStycvroePn6oMey3EHtJihkRDrfwGNohknwkuk",
  "key17": "3jvMK5a3zWuSGgrsxos6f5jtH8GGVx5MiuDpwmKEZGoUCL5ekC9aVLpLMfLeK2JYtSXEjTF6kKqgJhv4FR2UTKnS",
  "key18": "2f14zNoxBkPAAWbimPKRJB8SacU7uoSkPsMbHQKUZAGzKkkPDfp1ktD3JdrnGQ1fiBXT8TdNvVMKHspfcemMUhgH",
  "key19": "ctQmCPsk9vTBsqKW33teTtYBsCoUdCrJA5dxWDr4txUmjGuwBrqRo8ALrwDdiLkEAiSaDJy3knfnwn3zVgcSfet",
  "key20": "4yPim2NyRXpMcHkXrUXW9fEynX1FaSiEPiaBUyywC9Lvk9YpabpmJYkZWUXkSe88swBoooh1pwnrRAF8JHk9YpQy",
  "key21": "4T5uGqTQJw8VZieQmZHFAH9Z8ibfEbFNJe2xgMJnGPr2byckBQgoXDRegaRaXj8eZ9pFCVzETaE1hw6KkvQMQrmK",
  "key22": "43tjCqWcgtR3ZZi85inZz9xZvTBJs67abw3WBk7z1o3m5VRgMpVtmLEaGEy3qDiVRtBH9yQogntbRuXbeqKGcdez",
  "key23": "44KJ6P7vd2qy2fRhN1UMockiEQnvjCBc2zU7q234N4J3B6RZhPQz5ofVHw595cinC15BJyi6JdjuRDE9PmdhpPD",
  "key24": "5UkJsPsGNFuJ576ns5BnjoGRWKxqfBjqMcyUJt6Tm3eTYRsXu9rkpPKefzR8idvDjyfhtKcdWufdKdwX7wuxfRZ4",
  "key25": "2Fx2eoqyQgRQLir5wJKcmVZ3zcRPvscP9TGMckbVMCMMMLDaxvLp3Msm91KHunxwRAuGuM1TFrqUhpYt1oUu1d91",
  "key26": "3AHkBYDGtbkZvEU5eBTCgSCseTeGaEg5F2zQmUVxYsJM4SesFsxEkkqMxAeKeUvpRxyii5VfapXNFZidxkMuY9Rm",
  "key27": "4PxxHYXVLY4Vyy3R64LbikMTBv2BNs15bbqqtNfGLRh7HuL8HwFbCBr9KW1usJsDymagnsiPmNBv71M6E3gSse3u",
  "key28": "BGeHvcBtGd5Dn1h9ZVxKJ7AgSV36WWaJ3dtwjRiKQNp7SR5czbQkQb2oJtG2voRYUaxPJyo5bc2ANXF3SZngfZM",
  "key29": "ComtFQWXxRkTbRgMS2vifFFmncB77ae9Xv1BVA1UwLb7aKuzk2YbKXkEagW7wdP4cb6UnonmQujuemTy4MKMc3y",
  "key30": "4XfZTH7SEGKNe3MARSxrPKK7eCv2QW1VRGg3g91dbo9jgov6RspQhUUraxUEEnF7mhWTokvyTjrkBqjkN59UC9ww",
  "key31": "3Xz7CFL1gGpkLgRLAtZcXw1A3Eeqa1aDxXDnRhBAgVBAg7Fv1eLwmEMkJMLUKYUF84WoBMRCyXD2m3GhxABscxs1",
  "key32": "3Cbddzftw1Fcp5uTKnrVC2CBXdSY4CVui2YWpxmCJsxvSyMfMZEbaNz6BUY8xWZchg3qSnaEweeyey6NEk3GSzWu",
  "key33": "4wnFhgCX8HAxivucFs5pYZ56s3DeruYSddv7Kp5aFnNS1id8M8ymsegJ7FEqTB8ijdG8Yhcdszm5YYTFCgk2vKSz",
  "key34": "3bhjLggfjFiZfjqq45GotrVrAk5i5M26cAWv2w9bxu5JKarw5am5crM4ks24o2A56K2sV1CSPzCj3tV5KNPdp91u",
  "key35": "4fFzVb9YcWqaB5ZcB35fhecUhoG3LkxBdPShDy8gAV8FpEKpgYak1obmHsreWm5mJsZikfZ1vvd4zhXWkBNYFfp2",
  "key36": "LMxiZCQg4Qxts2tpoitD8RADrGXjRpKNyW7iKDgxj19FTmpmdcD231GbhcVbNpg6XbstjBrNAEDbiXLcwFNbsrJ",
  "key37": "3TgnAd74CXCcADtRxReuAvAZfsnNf3nie9vhJjH1erWpSbDDHagqSordk5H41Q1impRgtisNcQ6eAcq5oWfRXqST",
  "key38": "o5NQiu8BDfAiqEs6e7NMpgWLYkmG2nT9F9Q6kTF4LPjYwBdPwHwD1x2oLa3MBRqmcKUF9SwD5c6EgdWH4QAr2Lh",
  "key39": "59Ntn5jLSx7ZA3bstN5zJVvhyrV1q5YbuYvuZ5MZRNBM9fDQmUUb5Qu7nFG4d9k5YLNfFcnuQ8Tb3j7hnv3cJD6V",
  "key40": "24h1XoGc7LUe8nDBtxMAWVqkUsXvsBMkRR3eJ6c9Fpw6CvxN1SfsAhuH2aHZtF7M4yC5YA6f87GZnDULddV6KFqu",
  "key41": "SjyEiZr1bEtBm56J9q4WhXKtLGrVWSZbVJYyah8kX4YZ23KWxuGY2vPLgePWaA2wkSdBp1QkH92YPzNb9jWkoUN",
  "key42": "xt5DpXtEy6NayWDRbrTQu7YGP1gTvwbJN2RdE5scrUku5t4Kr4rs4ci478vQvAjJ7EPcimRiFvWAKKj3Er8AW4D",
  "key43": "2U1Y29oi9c6u78AqryhyPde9ZCYnHnjXEt9TSKXwJRfPR8edFauSMvitUk2D7Y1rS68sCBabyE35LZcjY7QX9QXY"
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
