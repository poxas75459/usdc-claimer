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
    "pH1iCAaN3LUnYMNUqKjwnBu6ADSDwprgAzAAeNMB5qMKg4hhAUUhAhvus656KiWwB4L6S9DM5fEzk9J3voWT6VG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "uVzKccRvhDQq3Bbaigg9wpmyHwBMmfFGnTyvLwe8J3rgz8VgkgLrv9j4p5Qb2jQo5ichYsraAd13LaynbhMRxv8",
  "key1": "WxquBw3i6n439WSvzPZMPTE1L36RbKnKn1SRd7BUPBDghYj51jqUZvAUkyDK9bQ5518APhGSYkSBNEaNeBX8WPF",
  "key2": "5LArKUzf6xpsLm6RbtS8ZoF8H9ERPqymUmmt6iuhZVjoAoTuTEfQNC4VAXBmVVNAe2DxAYGfcLv2bbwjTcMsTSCG",
  "key3": "4XeMGtyqVkbJd5HeD3z6yJqCDL5tPDzxut4Ays3MnZzQsRkCN1CuzM8Dtir7YFKq235q5urf2bzfNL6QBtwkwMHd",
  "key4": "4YjSohPT3vGiWEkMKJoZB1s7SBhbx8oWFSBgvzUHNp4NDHJga4BbKP1PL3rFMA5EXrkFJFEhe7Wj5DrC4XW2ZFcF",
  "key5": "4gtD9Z2hHDNv2ah3cNhJjCpQt2BojJ5y8d6ab53Cp8XSS6xB56MTGnYyYCa6zxV4UTEWo7wQuRVGoZH4SUv394ca",
  "key6": "2RKSwpGsrYU5qCPjBQNkVRfSD9A8W9vAnqxayJKSi91FA1kZycqA4GhfhuBVTymCbVJYjzR8QCtVL5rDn6teiP47",
  "key7": "3ouGMHZYAAjwLDZaZ3dd6rydMWxLyxCUYpoREpAXJcZkHgVe39AQ7GwtwXb5zf9wWCs59LvrMagTBYiKmzosVmJd",
  "key8": "44VLBGqRt1o3drSxsZYPtMsJNuHT5vfAPZYANkwTYZgVm6iHLevYk99Ufxu5hFDUbEV438MAnDtgELD1S9DuPiyw",
  "key9": "5yEnFqiBoDrxYxME3fGXTge6wFZiu8qDrbnAJmz71yXYTXbogF8JUZtBCsKHLEPVjoWAc7sobRqt1LML6NC7avhd",
  "key10": "4qQ1ct7WNRV4av4d38VvM5QMZRBUrGnhzkMMpypKL68wsSYDHtKf28BgoAp7vZ1RMfDaJx2K1oBTbHVUAcWDwHnX",
  "key11": "3o3in7DnS3aZqK1PfQ4c7Nzb4MLrajiLMTex7x7AK5D25hgp7je1Qvs2TtSKcvEjznbQhtFssTtbgZWj4pru8Vjn",
  "key12": "3kv4rh5hzasHiDzTe3Wq3gYiJGqzeBLHmYcnCYSmhyYuJnxf6cvtWpQhz3N8qh8BMmjYmNLdQnPqYUp5GBXgCKnY",
  "key13": "4FbhgvDGVVx1sdkVmF8QDVKY7naiokttmAJ4udaTZCqhxQxPVwcuroHKYTdUVgrUjv6mJtfxBioinc4uwFqfxp9o",
  "key14": "3PnYPZu49gCpdRhgtCPQSx2ysgxftkeWCje2HNXrrjtqyW5qDUMrW6SRCYtcQbNnWUuRLrg267922oU1MTzsypTw",
  "key15": "3MZxWL6xs4xZHYiDYhzQbtcqFg63gg3ZUSLjqTaqqjaW7gAH8g8gS7QE67kTDoqjsztM1Ms2gyw8CBshtzZYtXB5",
  "key16": "39ecpcH6vqRykvCySXZofHBbKY9ksnwwkKBDBvBGg5Ke1xT6NKbBsziSof6m4YeTJEXKbaFhvUAv4gpqdhAmgfBe",
  "key17": "4bix7oTcGV2mJga2JkzU6Uow2uQXo3NihdXyQH5i9XgM1mLT1FEaPHSTnb77xhihZHqsYyMDSwGWw9K5VTKRa9Pk",
  "key18": "4f7YJV6YkARqnBokq57vt2TnP3WobktYMhU41ccqBVNvheSVR8stEfGx7W2CG1LZo8SKcnqbnp4WXFSe4rb4W9kE",
  "key19": "Ud3LKFKLZPQzvMxQ5Fq5EGJS1st9P71EAXQX1NUffs5bahc2ENb3xuT22ELy4P7MvUkKwidjTWAASBRfvVwCUYY",
  "key20": "4vfwRSKiC4RSac25WCwhJMnLy3Zb2FPVb9gWKmMM6y2QPX4XRjBKvGe4yTTFaEJWL66ArsZtzv9P6dTVjsdwTT5J",
  "key21": "54RZxNGbJzcXnfGQ6Qm6EjPk2XJPPdUgeurf5WYbcWRZ65cxj4CTd1pqXxMZaWvRsDzQbK5DLspGAy3RxfoTcm4E",
  "key22": "3KMKu5v6Mhmyy3KTbc6GfeVFxJNQvH9pALgT7sDbuBKSpErKf2gffXYYGu3T9AUUNv2ZEfgonnBJg5FV5did4WJs",
  "key23": "28yCRM5v3MhYZXk1YHKXpU66okN97ss6z2RdGxVyB8paFMyG8Zn9Z15YH47xjFQ6S7rMFPSDPjwP2ZB6mrW7BL1R",
  "key24": "3EQU26FVVyf98ap3jUJ9F2pfQW49qSQiyjBGUiz3z8LL2cA2VSs4qyycBGCNq28U7o4YVhRBtW2Lxz87zxQH1afm",
  "key25": "5gnJe27ggxskqNB4LtYZ1dUn1LaDrKgaLoMmZNLFRYeLrkwzQ5K6ssFKLMmUz9wMJfMu6VKR29NcuQkoesCXrrBu",
  "key26": "Lu1VY3gjwqTuYeqfNaNqyB8M2Br7NbTHsmFFvXL4bFN67bMUAi9GeKbqYPt8RzgGqqK6PpHHorVo8xD2H8MkrSs",
  "key27": "5A3APLnhVvnetnv26NJdY5t24cyZkMJiSVsSyx8zKNs9utkkSdhS1pqC52om265fmT3tVpbBZBuKa66Czpp8Unpa",
  "key28": "5NEK7Xhy4ACqE3SfX3YhGHEytme9QoAjbT9apapjAaA9ohuNHRe7GD1Ro4tgaiMz3iCk523f1oxpwfjakbZ6e1Xm",
  "key29": "2UZ5oEbHAvXadpmAYf8QSotBWwiuz4qstWduUQ2NRcPv89Yh1fRxYagxFXWZGBvFEGDX84QNZ9WZ9iJy1qn5ecYs",
  "key30": "3Sao7dVcEsiuMBB9wuzMxT2DTKqdEn8UghmMwuVCKJBkJUXocg2Ndek9gGJeDe4TF5umoKp4FgNPumCaGmpaoUsB",
  "key31": "3CSfgRcgis5JrroUkSJrdQGDRrYYKMx5M8PzKs2HFbVwvvRFVhRKQ79AgPb5sehvFV4sp7WrbfkmdZdLWY3xCZCN",
  "key32": "4azHWUAtm8Rh97y8LsE75vtsKt5nRBWHxg9D4fyKPLF2tPKiG2Vw5J97NYw8rRGhijWuHvhoYVdEVgNkFY3muyVL",
  "key33": "4cnLuTCxDCGFtGSbUGKof1XkEWEejnR5iyd7W6dXjCQ9RKWZHqLMhVPKv5rxhePNVcyyxJpjDcqHHgwyLuSnLXqD",
  "key34": "kyM7Bg2nudGGb1RWin346DSs1g7JeXUM21XEG4NWDNNci6ABE1C2tMYAGKG7AbGqmMnvnLGCfT1Ydmk9ZMew7BU",
  "key35": "naxJAQVrom7vevPyqaLTaMiUPZHom4LcG7Qoos51qBKWBiJmnK7c6vQgtBEXmmCy4BxjbRAr62shCnhkQ6HkvzS",
  "key36": "4yzRMoS2FqpHbmaiW457qqpkUDT5si92CrcjCssK31Zb4DvEZSj47fgMU1K4Hk6uZ9Aby6sMMwf76yRdteM33CCV",
  "key37": "5sAA8nuu3YrojYAFhPxxZWdAQPXEPZT9mXmTBKEN6CRvyiuarWq1218EAk6UY8Grk3xRnwokhg7qqWbMngxD3Qxp",
  "key38": "5MTbFFxNC3aWh1XQcvHka2Z893sFqbtYQnLZ4krsdboDbRhRqYPoLt2KHPmxTaQjBdxt7gHvrNxhRDSdpS6Yteiy",
  "key39": "3k6hzweCpHmN9iX1BG4yfhxTNozcR8cAMpbYzEM8VWpoZZobVCRHUwmxJUPJcVRf2Swa8KRD3b8UYffkQYJprCg4",
  "key40": "4Us9HNmZz4EvFmzddaTvDTeM3Jy21dW2BKquCAFYtsBZhsVUsMPPv6VUrp1UhXtLoUmBLdFvHXXeYjLtLzYmg4x"
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
