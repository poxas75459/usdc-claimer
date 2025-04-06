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
    "4ybQfdwH5q7tmyreXKpzWsCCx7d17Q4CXyeT2zNh4rqVVwC9vPpp7pN6SmuR3X42JjP7qnoqgqMkY7c7sxRwkEVg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3LfsotTsktctE8cnUQNRrFkERK4BMpYYR93cnDPKwkrCurm14mHRF22bMAXKtgzxZtNqggUanZdWuJeonL3e3yC3",
  "key1": "3UC1eRkE5bBZfnFJt4DNaYMn6GBcP61BHCrZWbMF4woBm8dBFb2MwtZdPujwGU4zKAQh5a3T3EYYTU2Zm1YSqwQG",
  "key2": "baExyixc56oPy7eUPPvCBvnLrVnkUargFpJ1AvNGqrXGrzizKEy54URc9cwq6MaZAfMfmbmfBCEU5wQP2U6Xoni",
  "key3": "33GKErmHWGdwVDL54jmLRcgmzYMhA7SAnVp6CESmoWSBSA2SdaYaccMwvQ7y4kAcGtkS1BHcunkCcgLLnNXCdJTV",
  "key4": "2VnH8Doompnuyps3Yi2FP7ufwzfeqmjhq4hUh7EjvCApe9GCN7Wj4pPKGequo5bQnUthbrgm2d1JPaKHpfHDUzPu",
  "key5": "4TZY4e7UPYxWzTuQASrPKXHmtjSxQ1W6rcQzWRXfx8keXDd2vvUH6g5BYBVfxivMXAgky8dfB2tE2s47DdTgiyGv",
  "key6": "2Prb8sDVx2wYE4coaZv3gfh5Z8C64jB7TZEEo3seY23g2CxQ9yU9wpQ3aQoqZnYJaxMgNTJxtANKjrxmgS3TWL9c",
  "key7": "NV89hGLB4ztgFgtsn6Wcht9FqvbE6Y1mvss6FS647Kzwyc9pDSCSVZTdpf8PRhEJ6UNuHLQVZp2ghNPw4TRFe9r",
  "key8": "4C6tvx9qhos2PipHzH8kBspzMubdVp3mevXZMqgsCNy73EFyJkdaNwToWAHHj8GRPekSZbAcaNWFX6DuRPKg6UYX",
  "key9": "22thehYXEgL5BtuRdEGFjfjwDCHSQqKsnS21pmgxzYLumXy3aBtMGMoAZtA8ritcQGXwAMYpeTHabeW3vMex14k7",
  "key10": "4vYR6ai7HmDqVkiemexzyUE1G9kT4Ex1hgNqVC3ioy9jMM98fscirqEpXRCbeio3VBUkVpNP1xo8gpzjP8nxToc9",
  "key11": "4cyjBDSeVHXK9NqmR1vbdu2Jveugv57WiDZXibhEGPdBuhCCW7LqSTCrx5RoaHBLASwsMcEwW4xX1fjVzukWb4qp",
  "key12": "xfCZvAcLVt2yupAbRdmpqcF7QNfDo9FynDuXBHc64C4mBtGSUnZZqaMUrqiEuV1DC61Ntdwh8DSUfcAVYipNXjb",
  "key13": "ea3q1mt8LLdTwG28RLk7q51Chq19Qe4i557EitMjrnma45mvsmE2uNDrhaxguPkXZPhkc3DYpuxxxmBDJHMxLxf",
  "key14": "44SQ5wvFGFLd2qBKB7zLHgzYpNUNKpxXHBk13nUZkDoXMDvadGba5iJ5WJM3kbQgShfPvn8Uw1h7qgwkTnerqNx2",
  "key15": "5kTsUTgZvJyaaRiffU29fnY5YUyJqQn1xYeb1RgJjdsUFUpJ2peDz8yFwQmzZDJ2EbopFMM2zB5xAGd3WufV7K51",
  "key16": "atJa1X98piEWb1oWt3XB7S3VnWq5X6EyUpcAUYnqGWdXCWbGUzYV9jKKd8k1fzSCoN5eikrd9S8rNyMRTLpWxcx",
  "key17": "3DWWNyyPN4UefXF8fuMSJrNFmgSP6xWpiqUn84TcVKzoi2vUXq6KVardk9gziBY1Tsuzen4R9krRy56QZgPub4Rh",
  "key18": "TzXKevuJ8V5SKAvK2PLCNMV98tcCQCBo8UckN49uvyK1fFaTgz9iMVSJ42CZBX2sct8Nh9kD3bsVsUQSy9Kvo4u",
  "key19": "37UYj92GXQZhB5wLoyimcHVWS46ay2X791ikqza2DxZ7y3Bd9oEiKh7qWo7kRm4JUtmkxcLES39wFLkmpd5zdCA6",
  "key20": "32HmNmwk9SXVWX4BTefSTikUosbSTSwzdxF8h6BftxK25SG9vqHUhwJy3YGbXDThKgwLHHSNLgvTMwMpjLpyBuUr",
  "key21": "5RM4p4J55ZBtUhZL1n5bTUPTH5nMkBSkSdP63hUnvV4ZQ39dfpkB2cpZ48uubk7W9bmStsvok2Rn4WXs5GbdaNFC",
  "key22": "4b7hVJBb3QXhRLShLx5fvyXjR138iRPGmXW5yWUNH589HMi1CQxNZ2m3DNbgWLwG8epNpjR31HYHHoHN97GGFz9K",
  "key23": "3bNhmnV2rjVZhBgHJhysLRs8gBn38jpJjpLFc5As4QPnfrYdkzT6L7phUetYPDQabrS9JAC39gS7Mf58uLW79obK",
  "key24": "3vZdBATBhCEwdRbbFGNiWxmGWBBwzfZiCzp91fraqKhKGyyypME3QssmdKSW8aYpHY692mxPZoevmEEumbgy84EC",
  "key25": "rLMUDqZg1jCuEx11UxAgAt9RvxoJHA7HyCP6ev5aRcG49W6arvLrKfoW1d6embdDCA7SsLsCJEgUhdBGZrhkH6u",
  "key26": "2RsAbUxaqMdg2dR45vTegasmTYSm7xGNmJ877sJcmMC4afJsESJGm5Tz4n4yzELgu8YXt9HGH1CWqyh9jUJTxGhJ",
  "key27": "59uPYHMCEru5UBkeJXLW6g4LxPh6vwV4Vf3tNfKZk2PbSj1cuwkLEeebcnW4AW6NmQYf21895raVEzUep7bzZMvi",
  "key28": "4fGgFW142aUy5dCWn5chKkpiMcr1uMZGUqY1uRkQJT5PnBESPTrTJpuVop1zLKjEfHCKmtMxX9LTkSNXTAUxgGKx",
  "key29": "2fJPawD9skcJFGcHfxTESM4MMBPzX5HomqeZ1HbtsG3tUiLaqEvb8gScVTzcNNUE36SbTQwGuGhaZfTC8xxWUn9D",
  "key30": "5tnqXKEuLQtTAJMxdZRnjR1UKpehfw9XTddkRfYddb2Uzt2kiSDbAScnnjRjWTqZWUKDDc4YxVNYUtbdjsr8xCeu",
  "key31": "e7EVLRyASt2bMNzzLiqxF1zvv17p1We6RhykjTXPuDpxzSjoYksYCF5e6tJGfANSnLGiyCwdyb3LTuXSctFj4wu",
  "key32": "5sBxwXNXuEAPuoCqRBxApWvwedLSkP1XNJsUtyu8HcnoVF9c4sXBoK9dDAiZsBcjb7DkW1VKCB2wopLZERkJUZGi",
  "key33": "2xsfZe53V2vK8WsA2BL9k3TnEL6xCnhmfJrLpfwY5LVTiyq3gvMYCtD6xFSGhw7VD7BYPjEUpPFJGii1xX58KH8d",
  "key34": "m236ZL376yMN3oUzB6o51Ap7zMP1q9uc5UJx2qZoTjAFTcEDihkvXr7GL1uQ5G6rAXPWSrCBfEPa2BFsGosFEMx",
  "key35": "5VRbzwQcrznUw12kZg75zu9BdqrQQHitqTHCor7CSE1kLEma2wdpRK6M1Jk3tnYnXexehEeF2YWdHHYp7nznsAZK",
  "key36": "3ftRhNt3cGaBAYJR7i7i6jEXVi8n2f8Rz4VU39k2w9etKj1YV6AhoXcHokYEdozzJgaDGJUAefcj6B9BgLhk9Xkf",
  "key37": "4a6d5k4VNshjYnJcDJQuKwh2iWp3Ymxf1EFJsyNoWtyZq2KaSnYPgpofr8D8CqvUuxMCyR8FgzpAhKdzRcUvrGad",
  "key38": "LpeBYr47zfL6SGRMf5sBF4p3G7dfmkb72hGK3aQ5KYZ4VyRZvTTTUmT97FaCnzSotiCVgDVxjvd25pWiq1iM1g6",
  "key39": "4hmQ8jNYgDaxwW1pGEsvs7Bpup6hTygkQW7JpBB2ozqq44VREPnsJo6DipkJkATQBwAJzJxVW1CfdV2p9hZTXHJC",
  "key40": "3ge55NSFqRe6QeAo4Dq8LTzodaTbuPGHK7f57hriUCDDuW63MapRxceoVGX1D79GLbMAzkfpqWVWw3ZWA1R56J8y",
  "key41": "xDSV5f6toKozun6nic7ypgkpiYoj3XjMM9LzZxWzknxJzq8Xe8gDe7gZ6m5kTjwyKKFTbEZvqgBmubRyjNyqyVi"
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
