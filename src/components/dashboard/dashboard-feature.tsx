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
    "29hm1D88xB36G5J9gZqxAgMnPdWXx765Sxs5kRvustFP3MK8G6A1j2mVghMaNgo6LaKHgQyk7dtFPukgZm99UCnc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2btFeRV2gCz8mLVE8EJYnCyfysVSmXtAvnWyZkLo1oMDaiwmMbeDiSxhRiKXrdXvMyZcXusCA55hBoPKBSBfgsrk",
  "key1": "4L6NQho1ZE7EeziTVNzqhzNbjUoFxY1g4ySVqqBZX5YrAbMunMC9KuFseQ3N99JWXKcfQRwXhUc2xZtyzmYm3PTa",
  "key2": "5MYRPwBX433phisWgiS6TWPEotCmRiYVCH7BeFdsSihZR4asLDP9CEQjpJav3JeWBmPfBzrogH7coPmFCF4pzSa8",
  "key3": "5cX7dq2JiXB61kYKHzTCZHu9XMygFaSprVhe3VcuvL6Wygqqaov8DGRBqxmDGMfP9S2nRbtKA2fGNBnuTnCabWxx",
  "key4": "4FaW8ecJ3A4SJoT364ByZdbuosvdrZHdNQc17umsfPtPQy9VuSxYCNbTwDUbDXBnFvAdHoH5XaWvSL2cqihZn7uK",
  "key5": "2VpMKLT4JpnrzgvqFg2XimAYDDtDeEkAW1u4FtyadfHmzs4qgeGbTxbTvJMYW2RoLYNLXLrNCLx7EwUaKMZYJv3D",
  "key6": "3nvy3BoVmxnLjNGaqvhDGybNSHBwvK2kpqvK8jDgERMcBnvZaKFr9Se4tMTqbLnfbLCZrdrgP2J8aongg5qqYtqo",
  "key7": "32ByDoTxfsyz4sRKb1r4KyZSJPKNyEBkZ6z3CDmPwX5tvWA3aMrxQ2ZFyu6onUm6JcacQDnPNmsMwvfDo1mgd9ou",
  "key8": "2aoxzf9DiaXvhb6eRJFSX55B8sq2y7RANkimua1At4kjSJmunpURcj8j9Z36DSZRRLZg8TUQUbypZufJHtAYWJwf",
  "key9": "rNxXMWXsKhBcyuUkBU9TDTrn99q55CwG4d4tQg9fXpLYVqRg7xv9xqikgryXD9DZLLJFR4q3H3voxC9fgiCHtMs",
  "key10": "36q1KLAvvS31JoPMrDzt4DKE69ReY9PUuLEhALZmH4FRHcu6nB6EKpNACjQZdTdunyyRvcCprwVaXt9ru5ML59Cr",
  "key11": "3vV136g4M32T5LDxH7WSqLk84H4RsYkMLM2ickWunMN7447s9oar5AFAnj3pXmQ9cL36U5RHCREQgQo2ctxmBedV",
  "key12": "4xopLHerDYnKiUh71Zdn8R2NzgBsaoTE1AXpHc7fBB6ViqC1QCL5eUBw6VJRuaw628nijWve2f5f3zi2Y5vFcDWm",
  "key13": "39FZLgytTWJq5pGrtK3Acd5dSmFHFiNfUBwPG1JjzRnLBhSKjU2pyMmrBq4UVrTJiTQNbDsPCXZxxg345839xtXq",
  "key14": "kq8efKiL8hMMKNtVfL5gTxybrCUVCiCkwVoMxeGbmppezvnMSD7ewVjHA6YhTc3gGEGqvNQmryCuvKyuhQNymoh",
  "key15": "WXkXowM8eKZmvb6xzGqY3fWmCpWDXp1LNPCYTmskF33X9Ynif5atr3c4MGAA4zejBhrxBf1RBwo4fNZJ8wE2kGi",
  "key16": "2GYr4hw93LqK1owFZqo3wFkC865f9NSjgoegZnEfrrRbQPbrT6hD9xFvX9mAZKVKJDUTMbdnEw64p8ErgVuGqfGi",
  "key17": "4jLZB6nomSud3cif4Wy1CZ8eXHRZdnDPNX5GE26iShY69FmFaGqhHuQ8ShFAvRTgP6uRkxRYTzmY7z3oykYaiANp",
  "key18": "3fwn4iELjvU8Zuv1Y83qsv45TQuH15cZEHAedrQVzWU5zQZ11YkU7Ep1krKi9z7AeVAMBqScjL5wxTmUGk2fLero",
  "key19": "4NygKwCpzRgJmkvhX1Swv8mYgtS12vbaWq4nQusaBUArkPLM6z7tLmMWfW5Q8rDxL763ZBTaU9hL8W1mjNuhhvvu",
  "key20": "2YMGvzCG7QbWX7HDQ7wfTeXZHgbFuizUNf2oE5AzZzFwqBqCWwAqhzqBZdhsKWdHytsy18LYvHwG7UTwWsWRQ4nB",
  "key21": "4GL8jgsuLkmDCNPVz3xmpQpriatLjNCmzckhbYfk1juQVJNDHQus8QBNgACiyFh2ojUgRB96e4rmYzx4mRQMxZqX",
  "key22": "4w55VmGysHpcLywZLWX8M8FKHdvFWD6KQ6zb1rWx3ypwN2fc17wuZ7qntJ6tiuiYMMFs756jLdQHJmhRMfcR94uB",
  "key23": "3uoHsxXrvW3iWQLyLR15Etj9aHhbpPCTHENq3wxZDCPbetTWg6b66aDw635hzjp2bbPqkeaYMpvgYwQbHPV2Lup8",
  "key24": "2tLNp4ve7HHdYkTrkkk94tqrVDUtsQQnRZBpybPYBhHxvemcrJe7Y1giwN7xnKLuYCZ1zGr7M7Fwb8JFGpYbCA6S",
  "key25": "4cNmzapmKwSGDGXAmcQ2y9RVGPEgUrVtjN57gUjWYQnD8HWMcorE5Tuqc4r6f99SxccfoWvL2akaf7QzVPYCVWCF",
  "key26": "5PHKZtChvpuNdJh5K3fAvVxxBHh9rttzEyGKfNWAZEQPaFR12B49RJeoM3RCa1kj41T4eNZGRFFbpgetqjivQENo",
  "key27": "3cAPQx6RoThnBto51fc7nFjuaiHH8XgvMcBy8C1rW73FS1xzXSPAkfx1SsGvqCJFLGxGuiHNZKLFiH3MjZwWu9Ym",
  "key28": "2joT4SHjMCX9w9gP9vwKuc18i9NSAx9hCgThqFayzqs9fSMx8YHDYZ2RM1USo65Yv8WLoe91BN1rkMhRZ3EZrAkw",
  "key29": "4L4UUq5P5nW454q1oL3xZAdsH9NaXLcBWpmVAbFo2f1ML1Vknj3SMpMPp9ZypjSZ6Dh4s5jVXo23TACXCkGSsp9P",
  "key30": "53zKDXpTxNhPTsLoNB1Yqp3yLUyQxQPp3idExdSijriKovGma7z9T87HtpQTQ6ToY899kKp1wKBqSgxhmxhHKXQi",
  "key31": "3LAFjmcZkJ2qoqcMxN2nz7zd3Lz8d6HVjii5zBQoZ5yL2a6hCDKXoKVP9UTh5bFpFigSSrvKFsVTzRvLvSFHmkGu",
  "key32": "6rUjApozbUeq8ttjFUnLNEYYecmLDJxboeNHPnZ7cMYgaZwA4azXavKbiLSBP4baPtCTNMhrPD3WDvtQvnom42Q",
  "key33": "5jDX6EHdNP8zioeaLLkSprWBMHZYHmuP1q3nxrFm8GUDVDjZkqk2He5vQKgjBUmnQ2H66oJu9jhjEL1CR42S6BdN",
  "key34": "4k6R2zD4mXbrswxsHge2nWyjpPGthjPeoJ5GsZ5wZCNifKtRpEykzUBHEKkGCmEKJ1aevuKnEDme7XndtHagMMH2",
  "key35": "3KgSjFaaAVswuMeHJLaHjsH6PtErpk7rcxawoay4GnCBF4S1cbt98VxNsk57boqMgAEu49QneG9nt46n3ycJE3Zm",
  "key36": "5sSWeMKv4EBZV42Nj2oLP5y94JhjscEaGz7j8EfacYoFxH6vQezzHcoRsviuJi7VvKT9tDW6wbjTwxFz1tx3aEti",
  "key37": "2poF2i8XLaSGts3RRsoBLsc3z5Lm9dLPsjwBWHLLnciEERVcZnhv59x7f23EP1JWQ1qmub8AW4LDVhvX6PZ31P89",
  "key38": "3rZBdJyoZY5XQWuSBLQejrZ7oAFyFw79Q2pY5ASL1Y534GUhydJ3o3i6EdecVkoNoToDgKCpraZgqioia9tGQ1Pk",
  "key39": "4fhPWjheDeDky1eb3K8CRuWVLJ2mav4vzK13EzDHhdvDYCV4Ys9SxWCMj6ADxnBBsyEumo5HTPdxUQDXYv1XRDBy"
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
