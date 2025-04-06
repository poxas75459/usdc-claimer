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
    "527o5sCevcVvYxjABn2yxBxF638M7GggAR3dk2a6qxs78PCyD9NLMQ6wky3V2YnQveSom1DMcyGV6sZ5iANrvThA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "dsuuZZEr4r1aVD6G2Td6atWjFnKHDDXTmbrN4aeqosa6eUgY1Tfdk4ip8H2BruCUz5A3dtTbBtaPQsfb4i1oxpF",
  "key1": "4hoGEx22ygZNqMe4pJw8BSQnYdxTf3MLxTZgozNBtUBHrngujjUm3ja6id8Zx38f2QExZDAQMcBxWcNhsJsXTQEJ",
  "key2": "33Va2r2wGyGsj96VqAMQMDPBHYrh4gRFvvWq7hvXs5964Kb2JbWEJYkoC6ijPr1L4eRR2S881xJjkMEEbm5YxkuP",
  "key3": "2r2cksxoZbv2zFu84pnm9y7wYTKCVNh65B9KbXRFvwjhTvwNsanctTNJUDDNb7hu7wfuFKwUotw8Krhc39J3co7g",
  "key4": "rUZfLyqAa2v9X8paTmft6hWLHWPmTUefJBLQdX1tX7ft3P67WX37yzvZAL1YGubSjbHayKRJfW9AvyU12wXwMwA",
  "key5": "4hy9VgTVao4ACsvkWUaBYFDmjPUjA3M4Nf1gq46kUYQAx44b6PQAXpH8V9UNHVf7yzEyV2dZeWPB9zmtKa8KU1pS",
  "key6": "4GFoVB7zKLtE9TWXuvgqyEPzyUdmyNeSe82pK64oaWZMF9c8cqW2WiRT5FUzPU8YZCzwSLRxx1VmMYL4MvsHZyrb",
  "key7": "3ns5aCKyBS8RD6ernYmvcTGPCK8hAu3dR8Ax8nVWVmemdBmL8cxzqGD4XDCPQZxa6MJnskMbG1erm5fefdnsRnWq",
  "key8": "3aMmX8snJy22njvjw8j7ZpoGs53241gAGS56stqZrhpgVxZ2uezbV3KCp9WJUqDz6VD8ZUpEXeNk7tnv5FzhUcoW",
  "key9": "2BwfRjr8FhPsMQjz4Ksy9UEgEst8xgH6nvBDCkYJSnAYaEE1Jx8zYSrj5SFdd7wCXpdJSyDzcrBkAxzevsCsKT7z",
  "key10": "556GyQ1yKZiRfnUS6vFP5Q8Mk4PBuSnXLHeG3RvLfAF3Cx9woFBCbF4WjBRs9usV3pjtEGUG71Wrkyk5HBgNrjpy",
  "key11": "36WyRcvzyUPTVaab8V734yjQoceWjSBtXXdvitFQT9bWymTt6UuBWqHczCNFui4LE68mhLNhKz8eR17Y7pS7JxaQ",
  "key12": "2mGxYozprLt6uKJbpM7wXkny3fUGg3xYygqRt3A5FiZSjSgDxN9sWfbDVnL1EAWPTMx9XpJM3ghxt7ZmnU69zQ3U",
  "key13": "29YsrpYYcXHA9xPm7SKRt8VN3onu2jbCbR24bB2Q6yfQVLMUsPwUkXbZNAuY2H7dmy6omgtLPnH92mHVyDg7BHwA",
  "key14": "2fwUS2XzmNxbnPWrQ9oD3JZQM1cmMgyrgBgEhgLcUqGLVUo6qDytx2djTTxC1fuHx7Ss1n2xgKUP7m5sPn73PmT3",
  "key15": "1StbwbKUz4Cy5BW8Zr2oRzV7WTTUpcifVecXsTvJMt7eA1a3T55YVq4beFudsgvvFC5KchfkNuEpiFwqh1qABSt",
  "key16": "2F18kJS2SF4xQzgefyuD9k6av7PsXdF4wN5iCH2qCQiLhANyx9kR5dBApC5oqGmaYeTmyLsxA9NGXMxAKcRWQM9f",
  "key17": "2Ejaz1tqSxy89U8QQvPwjaL7SqBUmq5yhEKAcuA56rriTwgdcsM8wpNvSy8GBiRUea5qttdAVGu1YtqET569KWNu",
  "key18": "4uywpCo8EzNRgT2AVogPQPiLdS84rxESUr5S3Di4LsHJyxdCyybgnfd3A2VfS8X7MaUwqUDNEHMgfWuXgX7XivEL",
  "key19": "bVKFJ5AtKeJHija5TWu9FKr4KMWAcBno8kXUPSPW5pKXJbEr93pFUmVwmq9KVNgF75FhH2GjY6NtUgfVb6i5fqo",
  "key20": "5UikzHq1owZPfo3ha2tY8NXcJ7Uki5Pq3AbNUw3MwifCqqX1pVQkFg9wpcaALAUduYcgRLaT2msRZVNMReBedof4",
  "key21": "33yaWjZS6SEgTWzojFVcSFE5w1VVYtWtrNwrdD7ijAPWziHi9ZZ3XKpQjasPr3YnrkiaengHTveutqgyVz5A3ANF",
  "key22": "3BZWmbvr3EK3TkMk5TTizAzcGS6NaxKgnPRdzar18eksmMZXtJ8dPuqaUkLHM9XAfNAMe5LuxC3fdQnkFeziCDfe",
  "key23": "2zfBEYPQ8xZgxBpe74EeLKbfDtZCuoNJ6gjVG2M6wfP28fUQ41B7EX8jmYZeVxBYymJpUv8mBtV8ocviWngLmdLs",
  "key24": "3fAAfRvEvVztdLeoogDi22uD7xM3yHuUFBs7NY3utiUaHeG6g7SANhaJLRbLTrN1xFJhCHXj7Gin62LGcehAtF8w",
  "key25": "2h2tUrHF7qBBMpmNYRse1VmSs6V6UkBwDBdUDsU8e5xk4kPBHtru3GsarumwHYsXebQZcphD66P8SuvKFt74QL3n",
  "key26": "4v4PrvteGSk8j9612pXwcKCrZkr4qDEP3dBzMJWZNpW9MgYqBXAxdsv1VTFwRU8osGhgTYoXx2s9ZBbFzSpekpnY",
  "key27": "4nFWP7ZDR6rJZUWuBhfgfCbjn4Ce4QUUgohkug17p2azcMmkWnrBfHqaAsbh5qCirSkyWB5wDXYrPVb8nX7tyekZ",
  "key28": "3ADCQopQEzmSbjxFFXctZo3DnzdbnQgziG37v1nSVUbgEDMehBBt8EwRQ11hnqhaR8UBKzSHLgMsUd5DFR4oL6h5",
  "key29": "5FBoLVXxn4gd4WJbQA9gi9bkKeBPPjKPx1waLJfaA6VhK8vGY1f4exbM9qGzGd9sUdbWKHt5Eb4rKo4ra7Z46eFc",
  "key30": "hC7FUckxu5zdR8pARk3PzDi7sJpsMBeruLUfDYRg9xH5qLLsFoBnSFnp18LizMvwbjJ5NQSh5c7dr89DTPvij5q",
  "key31": "5MhWnRDoR5rwZTELeD9URQ83sqKV15ZAgEWMRMsNFN4eQdodArRho7uz5fi2Ebx5m5cfsPkDQxU6Bv8qPtjMSmFQ",
  "key32": "4wg2bNS3ywk87ymZvNTYaryGB42mjYfj7vJy6x4bNC1NtpA2fusFiarBrvk6oTeBTgz4zwnL8A8CFbzs468MLNQt",
  "key33": "3BtrbemLY3p9XL8obtrVAgpp7MiWTMacUw6vggiKa261kot9hKtTNHzWgvmgnLDtbCq6TnmJcjFsUcu4ozqjd4Xx",
  "key34": "fEQSSWaPJkUNeLfBwa8bCDaDR8nGaPqXzbNtWhAyzaRJVEAayojeMuSK89xBPuW8A28Ba8xhqw7wU6cDs5kGWuG",
  "key35": "4iP8ypEfDkT66rFo63iymk7r8TmZL2LgyfPYfuVjVaRyKaeDYbsqFgEi5gBGZAjEp1SiFUC9kq2pc5vMobUYVuVu",
  "key36": "3WekJGbenEc4pkqCFJZT2fYDwNBHJovtPtzK3RiiKMCpuwDpH3Lw49x2nth8nNZGhLL8MWRQ2RthzQbPmJ3USX21"
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
