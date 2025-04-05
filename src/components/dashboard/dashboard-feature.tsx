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
    "5tmWd7jvVkjRG7n6AXd5EzdqRJittyi1JqtCyUgiyW3EmbbTP1q3rFyqRpp6MHQStDLi4pmyV4b7dF1rfJdZkins"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ZYqyYqYdzibLc4eujhTP11tqZ2JxpavYtVWuYucyjkghX7Gqo8q5NYGpRKxTwJdDvdeL3eLZWrWnSt8fFK8yZhQ",
  "key1": "4toZNxa5Be6zDV9hB3MWyvqyEdDuXBRzp2GKVqENJKXqpCkUHHjVNkZrovh9BMm5rS8cfHmbBJ413FUtwAeho3S9",
  "key2": "5K1STBABwLHyNPMedLiXPAfBZKEn1nwER1ZB7AzggbZKjrk5xRT2Qd1yW5YtLSZQUQ4Z72tsSsUhijouRaMnaMLh",
  "key3": "2BofRpuf9v9bdQAQrRcYAhihLu25jN7fqNZ1fnufRDJ23eoWvDzB2bTmJSfcEJzzZiUF7jVapuUuHDALv4JLpUsc",
  "key4": "LxszMFdWevG7gw6UKzhXLLPCoLEDsRmjEYium3dLX29QDn5nJrLqBF8FJC4EixWeaGXLGiV1QMZdGwrAMnbkK5T",
  "key5": "5jGgEDv9TsGAFLxBb6CmKwCdNZfCggobkiQZFXNGhzSNREcYquAGCEu3U61Hg6oFKAjivRfGQoR2c8zCruaJPn4H",
  "key6": "4HPv3XpUQfgFWzjSRJ1phnEMCFYkUWDEgUKF1LeejNtu7ieEbhVTrj6FhHwbR7QE14kJvnFAqszo8pkchbMGJPN7",
  "key7": "WKBV7hPPJUAB2VD7tv4u16tKTfRakMM7fFpQzqsfUKsUXhhi3SAeNKMiqJZkaiX1SXWu4LfWSZYkanfQ2C9i1jU",
  "key8": "2PnXhKa7cJxjWGYRWacgWU3pdM1ShEohtd8wjUrTGVdw7h2xgg7GwTyjiunyStxwDjmNSki3HicqFFNAkk61deJA",
  "key9": "2mXrnKAuKWige2766fQb725WzkU1vgn4twZeEQG5PhGJRf57SFPCFr26oWvdvt7Jjd4GdfGR5JeSYNB4kAcqdZVm",
  "key10": "GBajzPGpzu4qd8P9i6EdTuRBi62vLnUmCadNWZerk7yKVDA87yjjRScDcUzjHUxEPrHhh6jDrKzBR25b47M3Kgu",
  "key11": "5FaahSt1quC7dXsqNkr9Y2d2cFbxCmkVBEzv4tMog8FP49pPn14KRtbudcf2smAGLtHEd8n3fjQ42LCoWWMnQ45o",
  "key12": "c8PhfxPgJ7ggzAqu24gyB39dxKFPN1LtSdAPZbQz1g8hm6aiXRVmhh9gm8bid2o8DhnyKFkhSQGRzNqJAECPSd3",
  "key13": "21VRPwRXdAr8k2sahJvu7c9t1XKgfNSgqubNTBXhkgZMH9KTQdhhHz123T3u3UGnL6LxJvSGZkq95YSLRR7RrDx2",
  "key14": "3Tq3xQe2PhhHtknAfaMRLFTyefoJcEoZP1FsEu7d2wvRTVSZyUGvojYoRZjuYgb5KaSHBr69wLYR2nHSez2iNWGG",
  "key15": "pbnc4XArncRaL47bwjXNN1h1A6vBxN9pJmZ1FNqy8N4v98iWDWewipdqMHJYWUs93Mxmdq99ya6h6SwFxCCsB2p",
  "key16": "2un2hwLTkFcpKUwuH8kEuvhjYtRAdbGhxYUMY6Qxgi5jofLva66T3nsW97Mr7pnpeT5cZR8Lsi3m6CymYPzrD7Xf",
  "key17": "67HcSfQjPcQAoaL7NcAQwzG1KacBdJFsNsNqS6SNhFuxrDQLvcA943ck79Z5P1djnShTpr2q1mgfFgtnhiXg4fpr",
  "key18": "5QCRFntXo7rK3XvdEE5U9x3bBH9dsDsXfLVGiqXeorEyMRbE39wwE31trtqPbq3Lk3D3GRK7DnwN1NxB97a5RgAk",
  "key19": "3b9p6uvgQjitEbnQtkARvo4ef7xsvRCGCS9VdXgfAapkmdY5KtnDe9K7kEk2XxpjiMN6CPSuNvKSSPTBc6yNJdJE",
  "key20": "2WRtvCpaMHYJMBy3mVqsypitMmTxjAakTdpmkghu7r2FDNEaqktD9GnsLWSu6cLqZ1caqLSSRJ94aatMAR1jmmvZ",
  "key21": "3fTVpm9JQJJa5UeWpjgEgTzKGSmMDP4pi94WQhkeXPHy6PDNTBkaGmNnrjvbH5HbL67KHPehCr6fneAJSyTwBsBW",
  "key22": "26vpJmmpRQbB5iwNH4Ew5vUJmaKsvUi6n6gSb7z5hcKSDpUNqGsFctjX5UDzfZwJtHgopehTM8WEKwnpd93r9Ek5",
  "key23": "5A9vePLqZmJhJ2GFxAyM5iutwuYF5P5uMuCPpiGJb7HUThavZpKvwpngUFaAY7y6CLAAqeYYcYjuMPpPkYDsjcix",
  "key24": "28FoV8xgKhLRgN2Kt1AdE5j1rpgAXVXY49Uw3VPCCX2Biyg4wNuvDWxtNvMYzUjb9ZSQabE5kbLataVPpJMn7UJm",
  "key25": "33LB13XNsWVJDZ8HpNy4YjayAayaLACNPng1oRvuJXCpZRMRdhp59EUZHYezX6xVqxTRb2yRNsU8RWWnfmtGCyMA",
  "key26": "2w9BMmAqZC9CYA42hq4LP3gzULsq6L4dDV1pfL9DX7q2ehNkVrBZ1jECzemguadn4XRbPawzDDry8UR45AYWz3Ni",
  "key27": "5WU1yfcs8nc24vYEYKU8nHmfQU9G4fin8sgHADb3FGHh4V6u3AK45FSosYdmSbLgHEst7QKvrJV2q15FocJHUCtC",
  "key28": "52dzxqUVutrKJ8NESS5WfFZG43vXbqTdYNinBFGThWCXK9whpcJzuEbEe7zw6MMnpRngJ1CnMfUQwhVkoz5G3YwU",
  "key29": "3cdQ4btmTfW8643hyC2KV6U6e6Pmw7M3bJhYkRpM8W4BnHCYugXhon3fWhgjp9KdwB7uBWYizbsnqL4st6Y6g9mX",
  "key30": "5CX1H37kAGEA99TfB7nG7a1YLCExfDJDDuR3oQzLRiYC8dgzkJLmyfTFRp82dDyqdPSb3CvGbm9J3rqDxrRfscLj",
  "key31": "3FkpJAqBjKce5sM3x17VJKAJARDnA3PrEvGVHYMvHjNeq3GesA13WowWQvTS7m6iVA4wY15YPtQqhz1W8XnosZgP",
  "key32": "5KpWZ2TwrGjZQ3huuz5aFCdrWEAUUPMvssigrr4nDidfYCtgg2UimYSb7jCvuMjFev8wskYhNUxTqqC16tNQSpdi",
  "key33": "4KtokiexNUad9k5k4evc8xbbcEJQiwXwfs7cjEaskxQHNgruYHak4AD6yEaFrHqacsriVfiGzDrXXMMQVqwT7E6c",
  "key34": "5YFEyMWKhmyMxLoCoXZfrc4D5Urn47A8L4PyiGRGv74sWSXv3JJFv2Rht35MMku1qDcPnRG425bcGiZa7GtHCyBD",
  "key35": "5tBNgPS1np3v3QfTFcjdwsEoGWXHckn5pnByGb6zgcRRAAUtcCSpUxKnGRQpKniqPmhWg3s7MmegSQw8nJapkgKK",
  "key36": "4UUa1YUooHYQjGYEYZqxKBTRVBwD1wnRsQDAg8njKPWofUFfY3nT1ZBwxHkx9oViKQfb7xKt5pvtS7kPNYpFaGHp",
  "key37": "4PGCK19jPMki5n8Tg1y8wA3yyDLwE4H5d913LFuLDX8nJLJnziBPbJZ4kPr2fwPEeV6RmQCpdJ8oCeK8yaipKzBE",
  "key38": "pfdsTvqFmdhjZVU3PkFpWvzX3vpKswa9SvDemUjsg1SJNo8L1dkPJZNp7nEubHQGp94ZP3eaAKrgZQHC1TwqoSU",
  "key39": "5VmMU5cbdJ1kFCBQnaiUwmnixvJrKfZTKKHuC8uAP8K8fLwMme61sk73NtUyGTND9YpueqSkHJTeMSQLka7Fggnz",
  "key40": "3th8tkk7XZfBDSMHhRaD59RFMjmAkSjbYjpmeR9J8THx181AsC548DP1owaEPsCd3jJjpJvvL3CQVur5Kafpi1d4",
  "key41": "3jycZCK8oqnjg3okRmxsZWjYTaFP9yMRukhj44U6yGRiPesgGWHpXit4h9DqKkgfRjJz4KmzX6wDwfbbdQiLfPDe",
  "key42": "mLy6zXY5aDw5yEYfqeejKYMNebqKFqUjfZYH9ieTgZ48VyzZNEDwQRVFGxfWfyvAjiEQPm5z1JRTSQTFxx4UFjm",
  "key43": "5sMe6rmPvcj7ifPgT9jjuYUicKkC6r9bfbj5685P83RPmwmEfBuA9qwvkahmEejxvZoPticb8PjXCqBU9afmTu71",
  "key44": "28rnsK7sfvCMLJ5u7bT5kaippvdHTQmKv91zzVmdCsjMhukgAPyBmZVPYzKtxA8bgCJ2hVU5bL8cHJCdJhBzGaNM",
  "key45": "3CE1QUoTdfK2VVYAUQj2HabCSbqpM9dJYhJj9JjR8B8gLPunzPn5NszXn8ts52ZZB5Zh7x1k6RifEt1FbCyMxsba",
  "key46": "5fEnyyXgezjaQFRAfP6sYNY64ZcTbSPgr5L2WpVKxBzxGdfbUh6JFMnpYVuuwxtX1fZfXRSGUmGqN783xMepphj"
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
