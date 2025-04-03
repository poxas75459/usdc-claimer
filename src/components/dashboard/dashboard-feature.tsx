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
    "2wiDkSJvh4QcDgk2jamKMvVy3P2xC3k7cqwkXGPvrGsWMwtFesEBznHfYoPRav2QF9rTgNJmvShBRUu473avA6Zv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5e2RgYyjUBVvq4GahTccXBgT5n3PiDpKHiVGDqxp4L8uiX8K8FHW99RpHmgyH8wAansZyyMp12QToVtnKRVpFAHK",
  "key1": "5BcyP5Sa19bWag7jaWBZDdL9idQ7bmgGZ4yoR9SPaeDyKG7gNX93Y9aPBBAagutu3nP3R3hqAn6RVAPFxUEykSrM",
  "key2": "mX7TsMsgCWvvjYk7YbddiWY5dyac9NjUF1feCdMZ7EMafzDkArJJgrjii4XChQ4pZUfcUGtJd2muCgfqsfhdS1X",
  "key3": "27xJfabpWGALZ4Kc4fJCLZm47sp7zst4o7mYFu71iHwUq9mh4oiN3GtKDVbjuwc2n4cxdbBzK5YcJZHA86Khv1Mq",
  "key4": "xUfzgjdhzi7EcD9tTbJfkxzWivjLSQyJ1kQQRsTLitzpLD4ywGn1KX7Mg84XdS6pfKicJYRqMjRvKqixZore2gQ",
  "key5": "2q65kmB5EZ6Lu2Emku1Bre2SaGZWvzjMV8fsEoYawHRvy473bLZ26EbQbeqkNqvu1AX6ciEMCKeKXfiERYSd879g",
  "key6": "zR47VMtUAJZsgLmD5vwWKhKSBaqFYKUmV9d1EeimXACY6hznyFJHMuLf9WsEVFrnpSo662XxmMMRgbqBXdvVysT",
  "key7": "39zojnMsynSc6FTn9rxXrjkjmrXJj8NHZHdkjkgbXZCa3P5LrroXPQL2tL5JuqrjFndWVYqphXQqMv2a7MMsAoPj",
  "key8": "3gszawbvwGoD47bucso7goGm7yPtMarn5PQf2RhAAx6pdbR95v8ufcUdgxRfXcQ3qRCJqP5DZvkFyT22R1C74d52",
  "key9": "61XzuXx4uaRqixxEmvdgFxTRiJ4ehE8qNhvvU12hTBJ1UF2oYgUoLft5n1PF1YWbHj6UwMKdsJNLpXrua9oSw8rz",
  "key10": "2n23SCHsoqj1PmbH49XCpNoKfXVWdpToJVB5tgkofL2gQPL7gRRHpEj2jq4SrpYRvDgSJLe4szcnJqz5qiq3y49F",
  "key11": "46e1r2GxFUbAtcHXXcy2dagEh9sgujqae23ZEVC5QWqxPdGVZYCCK9Jo3WV743XuMiYDafd62DDunMrCA3xC8Vsh",
  "key12": "3sQiHApB5hgD7eMgFT2sgWXhg7GnYSi1dKvwJ5ds98nqRaDgF1uy4jrM1C9MrKvAN9p7wAe6j6y6FzcQavdXKoVT",
  "key13": "3WmRPpyQQoEugLYCZZVEuYEwpPdKRZxHjpeNo9VsEc6aktPw8Sfmqug9JK9XiqNciv1EMerr49PNVYbZuxR1fZK5",
  "key14": "5i7FbfqQD7Y4T9Qj94miB2MTuD5dNg5uuBzV19D1vbz17RZA9THrPWVPSpLGjXGrySMs17uwV8SE5zhPUfqAW8DG",
  "key15": "2X48a4g2UgGMgrV7SFKgtNhiRg9oqrjow1pGUAVgxydwkDeogjvw8EXCqUXCrgsNBPs2SoQ8atd4airt9onqvRfu",
  "key16": "4R6FpbPQpRj1TyyK81FTgcfcBW1ZxuBRKjHHoELtGDYyhULZtkdd97XHbQxu1jbFMaXBKcuZ8HQvZNgrzWbSq8Zu",
  "key17": "661g3RTjAyjmVCmdRk73Qvo3kxsEUWUkWD8HgdsdHna21GvWoxAKipVLnKpqHXkStyVhBqK7yXesyZ7xp2Tq44XT",
  "key18": "RvvTvpH9TwBEnZvgF5AfZA2cW4E1qrDvbEVU1METXeq9ecWCVNiawVKcBVj5mYVYE6q2FagyxHS3rJeVbi9dNx4",
  "key19": "5pK48jR5xnqzWegNXRBVsPrdnoWHPFsdzvs9U7ayvhU2TdTF1yjBoeNKMb5scuQsZvpyMiTWWBf18nQPHtDYd8ka",
  "key20": "5Zk66JJGrzxXZMGtzJKnHE8dBUYkyHBFbB3hVwMnBEGN4JyrNhZyRW9JRNKy3ZEiw9budKMVonmHgkC3w6drE47",
  "key21": "4f45TQQkY1z7xZrSSTZFzKLZokRQRMSJVq4jaaKWaqWCJWqFL4fW6LUKxFdR2ApXpbk9SKbWx7eiyGGb7UMoHsqG",
  "key22": "5XQazUQv7c9WowEj7y2brNJzRo8EnXJ7vFuzrC7uMZ9hFYxxNU4wVVmqikTCQJVwNkScdA7uf7GhbNeTg2VopWxa",
  "key23": "41ua3esG2pY4u4wATc5xHpd7UYUseM3BZJJrZKmkegSU9pKeE4ti6F4RR99nRUuCf35HYxfNX4aPGwEVrvW7j7Ru",
  "key24": "3pvyDDvMCPU6igyT6YwrgUc8vLF9cZvAKJcJUHwUDjiZ8nnV1x2XNrQTBnsZvthVWZu8MviAcf7tATGXJPNhnGRh",
  "key25": "WLACjfCHnKRxL8QJ8yMVfovH81RNNaD3tCLqpqjmTcHcrYhkxyKMuYiqb163ZLpvxp38w7xfYFJbTEvpnLziS9L",
  "key26": "3YH7dZL2F9p982XrCsqBK3RcSHne7Viz6C3MwFRGVDdhmPpJaTRhXN7vNWkB6HrcKhJi2EBCrPkc9mfHY3e4dcgj",
  "key27": "4JQfZQ41T3yuSumgrEj6P2pG8Q5fHj2dPxemMo7L8TdvQjtKxuTn8fSC2wrFU19f5n1A9G3yLDVe3rW28KB6EHLt",
  "key28": "4bhHVLP8tCf74McQXjJNBh5UkKkbh4M8kxgWgk9Zd5848LTFWnoyvSeX3sQCzZnneq3yYwi722uQjj1gU1iPQbzb",
  "key29": "2W1L7UUa8tHmcKusxKhKGUi7cpseVzExHeEpVhDL7nt51Sanbh4GTQEytkgU7pMfHnRekotc7JPAAXJkn29mHNDf",
  "key30": "2FUojhNaBwxfrRyHQkUBbVahQDwmHSFT1B8YUEMYupVJDMCt8KHCajhVnJ9KT8VSCnyxw2Q54z5BGBGZHXTkYg1q",
  "key31": "2SY6cejRMw8AAkxjD6cf1rVHpzUygbgHU3NcjkXzE8rGEnZXG3LpA7gz1GcprDJ3aZ6LttatAAa2jwp4p77bopDU",
  "key32": "3JfLhMB3r6uQLqGRnQm4nQ2BMbSYTiBb5X6DvwxVMbddwsZX7KS4y1587y8diyDe3esLBmevYM2aiVAiJxWKfYWY",
  "key33": "4LNm3RVkU8CB2NVghDsvrfPpe8uvdy6Kizq4Qz8HC5khNmHDsNaLAHXXZxzz3nqf74V9vSqjBAqvMttsEwkEv9JZ",
  "key34": "5FVVuZb4RqvnXrsvhsQJJ8hsVJTpicvcrsw3TgQ9xE6voJbzcJ5akVF7fDANdv7PCCbYKsq1GgA5SS1Y3TPAF8YV",
  "key35": "67oexnVN8xE1gWCLc7uCYNgKV2Rg3dBzdonaVsBq9f8HLSZ7a46hCRwcje51Zx1KDn6jaFqUuqUPveA1QYHAJe5i",
  "key36": "3nknHdJeuW3GedyH7MLLnKEWbnhuU28NvuQgdjxi1vMu6cnRraUjCyx6cy5jnGos2GndJPXDXmZ2eF2X5ZT3MhP5",
  "key37": "hejcXASttAxYQ7PxoFV4qNbmNxePCy9iW1jTsPE4at1Sb3DUonWL9pHqd98K1d51LyST8NCShEJ1QU5AS3abjoF",
  "key38": "44ohiifDHsFEape4cagprqFFX6Md425kCwNbCkDuJipFUiAkgqrBGfCaZ2z8neKB9vmffac6jev1DafbR3iwL9Zn",
  "key39": "4g3VkxjwdViJnbisLBxrmmmtXBBbumAnwsTpQqZnsWtkadJWyUWZTb16xodqeF2pWEJskEu1rhdimdmoyFsfAoeo",
  "key40": "ye2pY151sndYBSUKkveet8Bbo2PrqGgvjGebmaL4oouQcjfBJp1Wn8DG5jN8S3tRQfLPSPW9pkPh94SKTQvgW2Y",
  "key41": "236GhvndxP5eF3pEKjFHc44tYyEzcVJBHeLpTk1pAk38bfFAnw5R4wvVser8hmEMKR4sjdaAy2y7sd1bdjZQVmwQ",
  "key42": "2w2Nssqr8sYb94fGbiM5jknr7fVkX2Q416y6tuW7hWQv6RYtg7Z8yM5CjGkRwWHDX9RnvWmvwsQGFASd6Ujtryx7"
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
