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
    "hkGQkzcQCSVY76BS5iCqw32mhWjxTiBhhikCYMGs7wTeNQorBEjHdZqYrVGHaR4UGFSByieLPan4Scgh5Petd6n"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26x5WkTZJe8umTaE9d4kaawmvS12DM3zYFztPzUa1Q5ri9SsgDBc7ZJf9rGjswhrMTMNx9gSWkHNj6pzddFUWi5e",
  "key1": "2unbzU7hPUdPnayZZiGZJdQggJKDvAgCRUds7kRF3wQs4fX8bDDezX6mS5ZLyzcSuYcfb1voBfgpvUHzJh2ikoAY",
  "key2": "3sdK2jdPG3K1HBzCCuE4gTXFJ1LvLobboE2e8imExpN4paGN4gC1HsGcVJJZ4bcvTBB4YMCx89yD4mvo61o5MKRQ",
  "key3": "53iZbe4j5zsotQFyuAKjqggWYrvDcs9FaSNq1zMZudnnEMQYN5i8GtVnE7byUBiNsv42aHPPuSL95ECFWhxWDN2Z",
  "key4": "4x9iEZmarR5PXHW9Hq56FmDMoghyaWAqFYm4GqgQeQEHAtUU6X3XCJzbYpPYcRwfCtd3NH61ZQVs1Gro4xpAXbFx",
  "key5": "3tSchMhxi4sf5HdMg6SBKVM2rGSGkETZyiiqo4wcCEPS2rSiAn2B1Y6q468Wwi5FMkPqrtZJzJX8rDyGeTVgaKx",
  "key6": "5C2zEmaxM7FxL7nAxhRae1ncTmcpZKTGfiTVjHJqYGdoZzh5fx4Hn2WV1rhRpEa2RZEUQwx3yuNFkPg6wyqqJ7Bw",
  "key7": "4xtSjpUgZdiEcZT5b9Ltv8uWm64BZ1vdxJm54S2b4rivF5d1yMCvFohh644kSa5fktDvic43Nv8WcG6quwRCvzzx",
  "key8": "57pMwBGRZednJbZNLPo2Ra8mjMSUy9beTeJU1TW6Ty5dJR5KNB6LgXYn9P11w29ZrHB8UyCExuH6wZpbR8CpNCb",
  "key9": "2QeoMXnoRaMGaAncjyPJh8xyQCNSo7ATjqo5yKr9BofefMWqHEyThwz2thGJxVFi29wUxJ5tmrhtFqBr2hr8aTMg",
  "key10": "pPDgegTif7Y3v8QAr4HUoYEM4r521CsX5FNznWGRNUGUPbdFr1fsJFVdxmL4VNTEhXoLG8cucnqT1moUmJ84zh7",
  "key11": "4q15th6Vbmvd4bomM2L7HYNcqEFK3qnZJayCyGb1tEJ1q2t3YBNtAvoP1fgbuTchWFdVfheyKWLwURJSabx3nx4N",
  "key12": "3S3HuygUvtrQNdE1ct5c8vdBJaxmog6YX52pXfm8tAgiCFRDJ4FiSXCn4mvA4Q8SSoho9btRsNRJscc84up9ictB",
  "key13": "4SxjwYqz6VNGdjXWwtjJce8oxr1BxpSGJUHyKEe95BS5MgNQe7vy3caUha7WfCknimSqDPp2wR8Bnbc58HYLs7B2",
  "key14": "2WRsc7f5Zzd8JX6eedZcD4Au45rMre36H4koGs8QYXaAkDwCsMCgPd7JLqQzrSynPAWYu4pvzoSkEWvPx8G7ewTG",
  "key15": "sB5wPdRmdTWGiQW5XgbqQNKb8cmEQ1yqJTnrHtRgrThQTnQCMXSavPbv7ZryE5kGvShdfZ5dkGckr3Y4DXHbnek",
  "key16": "2Z4TBNw415Yk7H5ZQ7ZErbx822d8c7UdSYRRYq2dYNma2xpKLT6amoct3QYsxV3s73QYAZGqVdErCp49yY1xh8xz",
  "key17": "4L6S8HsCSRVw5sqK8WhAJJPJzjJfcF6e6zHF4io1LK9WJTH7oaT3bLYP53S3Q9DSFTUVhT2eKHY3QT54ydDB2AeB",
  "key18": "2e8SnefA2Lb9TsJXVFxPgqAJ6nNAiLS4qqsJWscnKkcfCpACZYTvy6BtcCmcAGE7gRTBCt6coUmNAqCrVvcZu7i9",
  "key19": "4t5qws36zQAnnc8TKifuc6fM8doRwChGVwoihnAKLaxHx6wkYVHQu28TViPZNt8mLLifUDzzsjLJfUFnfp7bRHqf",
  "key20": "2ue3VCUubQpqwnRquB8XDYjQ4ebxvBt9Mph31UgZdnRYuL4qEW3nphzjA2c45tUeuT8AdBBnkMAYb8iTysbQV7xC",
  "key21": "57op8ZkKkBh1uesFX7DZTgqBDYxEn6EkZkbYhWUZuohTAq1kTz6JNmHyiAHdkvTBabFaDATbCMUFeDe7pVienE1h",
  "key22": "5sJSpHfigfiwAtSYBb2THKeBB4gttYWGAv6Qez1YVTcu87HwiPazkkPvn11YTxDcBWTUL2aZXWcjqQvAQggaTCG6",
  "key23": "618EuTbyw7GbMCfmHY2dpg5rs33Mgq7zW5JWExnwB3LPGpzAM5puQ2PPL7iMyshEXHy8T4sRdVR7UQvtya4aj9Wu",
  "key24": "2xhYfrCYHN1BtzeeA4Lxnj19bFrKfeyRKftdopJd783vxi1UdbQsiG4tEBWvvNVDyyy2uzbav5GzZ9aSPmqLvqoL",
  "key25": "2wKBZEcxiQfqhTdfVKhdddZfyGV5xjsGSgh763DSRznjrwMBx95VPLCXD6pdnkH6jZSGR5qBQteJTwpd5XivHipd",
  "key26": "3u6NMdJQWCXhQtDWRdNovkmPbxvBSYSjTX7kL1KpyoN2DQ8nYVMUEwfoTCa858V96QycxbZE92BiAMBvLFrbFX9z",
  "key27": "51bzXJcJ2hUP2GYimsH1gcdByLrbM85h2bEvRVJkMU6P9ZknTvLvCPTKL2FVzHXzo1CZ4ABvLBgq6yRrzQP2wR6G",
  "key28": "2tCgNn5q4R5znkV8T3otV5HkZspgVqDuAaJfgEkbVwUQbWDR4GCp4cvgVFRqvD7cTvDnhna51oTEkCUX4QSjos4E",
  "key29": "5oaeEtq9TnyweazVzugKeFeLqPgodnzFWfcYthCfJwQGMUE7w9U2M36qcr7yHdqKJiiK1EempHKgZtx8Ufij5ZU5",
  "key30": "4Hmn2n7Hx9dagC782h12acgmKZskYSRtRyKXNkmjxVr9VkykBLjoEJPhU3Ad9z1nujUfZSRsLkw5NMevJwfytn6K",
  "key31": "2mZMHVKwQ7duiZUBq5ujuz4RdqJn3sCGuPZwLxPb5QgNGRwaCpSothkiEnVTLrtVLXdyp3ifsfoERGmwd2EsqMt6",
  "key32": "2aXbnLdqFQK61qanun1Gmz7gxgCEGW3mvoWsFuwYTb2ZfMn7fhQDrzuwbfSGFBBsZWagT1NbpkUXuH9ggczBrWE7",
  "key33": "3jrNf4TZrxZT3bd1dLURWkZJSr2dyqjowNjWTUrYho9Ryv9D224gReKpY4bhMPwmPmhCPH3jzkzBLgAEjBDQqyZS"
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
