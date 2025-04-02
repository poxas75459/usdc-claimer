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
    "52N9ZJmGgC1R5BocAg6PoWCGDjdm7nC5yKRMvFfJB1gk7h8CBCD1dwqsDo9bShJi8F3RJtbkLmnSYnX1ujo3JvCp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2UevzNokSUUhtoSQPTin4bnQLS6d6dJ5MHCseNdtiaiF9cBjVuFZsDgNChMf4HBaovFXyowDZqnYhdwknobrajRM",
  "key1": "2QUY1BtSZFpgzX2VYVCCqRfsQHFdPF2HAYchcXRFmpt4vrVL7L2V25ajGxc47e3yZHUgHq7UxFPd4X7W9fDgqwDX",
  "key2": "4DMR73EZKgRj13Z7SNwjhgydCnGVXj7WycLDC6BxrzqcFSReCx5tARG4n3JZnaMRM9bVo8kNo1AkQivbB4Pui3VX",
  "key3": "4usu2D6o2fmGz7bSz4ueJWpNke5d7ZH4fhAHoT4jzGZm31d31ehC6WeB1pi6dtq5oWhRbt3GS33VoZWpuqUZJ5M8",
  "key4": "5eA1TsDwrfMTqZfJizU6gxTr4w1TztEPm96kaP5T6iyLh6q25rDo9XHrz56cm2AqLMGkM487bQ6cF2dVnf81pY58",
  "key5": "atxXPnDJq1MjG8hijqVuoBwaum6e629afWL5GhxDeJacDydhXv3nV8DRhcpf4yL4VvmgJZSfU3wa68yAr7SPwJo",
  "key6": "Ddix9UApGLgHQ2A9nQSxrN4txDgX67b44GyvfWrph3J6pAnAMgGpjsaYTsLUZyK9e8n5MSe2cxeAwKxarLgMcz2",
  "key7": "3qXofXi334HhBPmqsWSQCePm69hHE16XpGGQ1q7n35BZ413aJdH91ZgbZgmaEwWXoVMrw5dXBkxeidccfdBGntas",
  "key8": "3VkBTqX6rUS2pBJxSDJjqeX2L8WKKtTQXJH8MM3FBiZimjjgVv1Ls4grb8S54G462vXYZRLdQvViBa3JA2M7QDSv",
  "key9": "2padVorMghMW8Wm3oBnqzvptGWdEcaiFpBvTZnw7NG5vacvrJ4unAqGBAVTktV8ErD7ibvbddzY39pn9HrRZq7Qx",
  "key10": "61oZmS8JpWHwDPKsPZpuLt3Dwf3WyvB4MUJz3HwFjbtiyCTp6DxGVAyXzxfPQGPqHbraxSJLrLxr2bxh5kL7VDvf",
  "key11": "4tfpGVBe1nCvvrFucUn14LfvKWsd49r5bdap8BzrKr8s93GhDv1vmnj9BiCdAKfHRJkrdAggSDBMGVtVbHEM6szs",
  "key12": "4KTwdUxtTNeuWNh4gvDi1MVVAFAeVpEm6YuTrN8MZMZTubAjLAivGf2vBiT2fVSUj8Djh6Qn4dZKoTvyzP5qUr96",
  "key13": "5Aj75gzmR2r1MxL8sKU59ceDUSpmRRE3tdJ7NTWHncSjoTJQtuWAsHdyn8vktF8PrJTPkqFH7FwVteqRtEaQAdqU",
  "key14": "365erwJxKAU9HViopi625qn1TfVBkFyVbfM4ZahRDEDpwFwMXryw3hC5BjqETobt6THN8sa9F1RT1w7rEMhqTJgw",
  "key15": "4PYsohZ6Kzrgu2jtS9kQLPZFZU7et8oAV4GSDpF9iQhJfW1QbCWN1cM9oY6k4t14rFGCcG7W6KAcGVqwF55dBdfk",
  "key16": "5nyrfs1zZVgMJ2Xrt2RER14s4doEyTF7cNkNAYb1o5LVu6SGS54etJZhhpdbWYhp9JYHs8LyYKKAqiqhoz3b7bRY",
  "key17": "52KREURWuxQ8LA1DVLCdnMogyPAmR8RHR8P9ZW2ft1XwSykQuPfyYomcW5ECYBQriHh32HBELwMZSMyTGnQ9TB7P",
  "key18": "3rXPrtj7EmU1BmYMabuCjGWfwRbL5zShKMqrvkULioKZ1QkWjNSBcgGumKKtb3sgUq8M4itYT3hePqtVzmZqCxf5",
  "key19": "4o9g9yn1YMnkksoZQATHQ6SZvYs9DR19q7Th9gJyvfYbohV8k7f34x8mHAQeWbVqWuADmPFT5b6CJYGsUr4yg17a",
  "key20": "2uAvohdB9dYLB7f5fADwDCkXyXbFFUes3TNVKmj92MykQcewErUjN7QhHxBTUd96hnGTGToLAX5QDKSrw58XQQou",
  "key21": "67o8xZPvnU79LuQaw1AkJi4zDVvBwuboHBoPZWGfcAN1vCEJTvDdMz7BrURirKVjKg8eytQS7UYmCFLFxvXUtTuf",
  "key22": "CNRKKqo9sbzB8chTtnX5qxoD1Pu6sW1zznt39tDKEQSS4Szf2PYDpyN1Q56dmgXCjAiaCzvvvhRyDPMUXHBGGt9",
  "key23": "rzgk72ngnWrjv4ZfoY97c4Gy9wJTZex9eGhYKE1pywuTTUXDTinJ8MX6RWcqLbbFSo8PzMPA7p3KXndeCQRy18d",
  "key24": "257UM4qcPzQwamZc7ihLJJaEKYKAm6cmMWodZMthiQmXDiZx6SrponiMXD7nmnE7Ed5jK2xtZoMnu3Djb3VBpUC6",
  "key25": "4JRTA1CQbeH3hsfzmBpGFEmpZHvexbSPnRJdbWzgvcxpH6Cv5rNUqcdVvYmWvRbAncy4ZNGoD8unCFEacMWuPdcH",
  "key26": "3xFk539Zv3rt1xhAqDfSEyyQqcjhXXVW1E4MM511BePVFyBGdTUpddYzWN2RwJCyiMvV4rSG8GXoTYrArE4FXcvC",
  "key27": "5rMd3Ttyafx2s5KGbnFQcR6tHqTvQDmk4QD7vsboi3DUVDDf9eMcmN58EoDWVUNcgGv5XUwFH3tBCzVfPdX2qVGe",
  "key28": "4XcnPp8DhXLAYdwsqEYx9jUvnnPGfY4PJesFNWbqEtxFRxwvSNppB2t6WtbEeNchUsLS1r8cR58bD4uq1B76yCmu",
  "key29": "3mzn8PcvB3WPxWvPYBRHubgjYM4Qxhs6C2ZGBnRy53eDVBZ6Lo9A8sRKf2idFpxDhohP8b2tz3DkoaX5sBEnPhdW",
  "key30": "2KPEE8sLzuLiSozKi7JzbvBjNQMXbsaeBWg5XMjY3ydJ2sLjeJbejwMfLjJWc2JQvkNdAE7mqpiXPZaodVS7xtRJ",
  "key31": "3tVtNtB6CfUR35u7j5a9aQjwu6JZ1AWXi2eR6PjaLW3ykvAvsPPX31Jy778xcmo5hSzJWWdKjDEa88LNXjTm6Sqg",
  "key32": "3K5nduWsX2yJQXxsF2my1YdQMETf23HZ9BmTKSBU6tGyGkYH4rHZZQiCCnPPBQB78KfazUSh58YVeWgzFqeAmXAK",
  "key33": "5kg2AxYuk4zE2fs6opnxMED8W6S1JJmVcLUDhu3JUGARAQDj2JeTpYg8hcPiVBhojcQ2VWgBbwT2DmBXj9JpKRFx",
  "key34": "q8moUkHKQSmx1X19Fy2WjzuMTtbQH2YeiCHbGtery5pZCXMoPFF6hXo8CYNDSUYUGVHPGSMqkdPVhRbJDuABDKA",
  "key35": "65sATwh12d6Z569Vzp1yWEiMNxCiMVFfZH7GHtgDmVDmdvJNzwBC55jU9wvB2M9AwiviRxiXsc6nJ8GiHVggwnLq",
  "key36": "3f71zLdkKrtFXtrGTkYYYLH3NgVEGxjVMEJXNmf6HbE3RcdZ2kCZXbuSromgF71kJe1UMZWhkQkkeiGjYXnVLCxj",
  "key37": "2u8X7dXPpYUvuJYGJcvxRQf2amSNQvhqURfMKdMgVDu6zdiGP1EDCEegwFK1Yv66gSsdUnEKkrJeRVwddd5LBkrH",
  "key38": "4BHn5bwGLHkjFGat5igFP7gDyoYdDDxyQCnZzWCPo3fXD61dvQ1SBemSZLmSxAeLQoZdypkCChQ6C7DAdy3ozoT",
  "key39": "3MJ3Up9hb8rhDedtixEvxgs4EUjZ5RsENagWFLf9bgM125QV1vYT3zVuQZUqsv8oGceX1YYhxdNwYX57QhbsWZSK",
  "key40": "2gStYzzwJ8u8bFWy3LmSs1ib6Gy5SQe7dgMACJj3iDiVqrgTHVuBeyasFTUjcfgxVL8JKVqSP1yqvDgbQjP9qaHW",
  "key41": "39YBS4RnMYtVpZD7dzmcnCxKFmTcCggFV479Qgv6sRsYHmzJpZmchjE3oSFGVrC9v6SuqhcpqMmDUwcQjsuMmMex",
  "key42": "3pmFnzB7hT1T55CmRcoo3xiJivUpiGizyyrM7rNoud6YLjx3N1xCTDsnnACBjYN9waFroA7XLSUD6pytDtMsnLvT",
  "key43": "4FSu1ngtLxNjPEXx64XCx3KsVXDGGeoBisettJsxCd1H8LobNQYaRYBGoF3yV12AFy5wQhqxBUQp2gTYD4LasqTL",
  "key44": "3wtNJNuUcP13XsPHxtL4LYTbAZYV445wUNqBrxEUcqqiAt2aVCZk4RmSthxMTRHxbo4YTumhvxsuA7TZsKT4sZv",
  "key45": "36YnFL1BAi8YRmfFjmeq7esnxrFRKE5eb8pf63u4QWbbvWV1xGsf4Rv9HMLRGVWSFRo4JeV849vpzYY3gyku2j2S"
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
