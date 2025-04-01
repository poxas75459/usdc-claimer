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
    "a1M76zFP6yzbD72ffFiGedWrxPcNrht5AXYeTxkmP1moMjVFz88tJyoQcA8NcbmS2NVavE8t5J4X5ZaE7EsRPDD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "jCWwbwPfArG4zF3JsDxFAjJXz1Hz3FMUMMYVQjWPnosxkDLrtrNNKx3qYxU6TnJ7BQxPWqfueZQzXm9MsLTdb2N",
  "key1": "3DnkB4ffVeejJnezS4PhUHAEE7gcWfpyt4GHJkXtzMQSXRVqTmURBWjxVw4nrdqaAU77Tvmv3XQeWmydMhe1byBh",
  "key2": "2jy9ofcdkZUf85vCXc3Axei3zgDjtkLE49ZCmik1JtGbK3QBVN8QRwii1uYTwJASgL55i1jcuYAmdpjGnyZr9vbm",
  "key3": "CB5qiuAcjiZwwapvhFZu8ZvwEgB6uUzYppg9MMZzQL479GAGptxSmYSBWoDpBb5HhopQxLQ3z4DEpRkA4sWpGWJ",
  "key4": "4xpohY7LznurL8gV8VrAbFJzvaiD6b61A6pxACHsvb1x1t9h8izUxkA9yoZYkrJeKdV2D6WuzqPSVEuaSzoJogPS",
  "key5": "4iPqqY7qRKFe9oFxxeoxgdp8Bw7nKVWxrURdtcuYgrkYba3diAUgFH3VLpqmKtdGayoeHgLyrz6e4745HFtfpQ3R",
  "key6": "42s4gt4Pq5UjPWU6Ssi4MFRtmMTkRDquoZGEchxe2AmvbJ23CniBWA11RykZkRdJVay3QG77zhna2QgzDJZqotqK",
  "key7": "3JM7ASAAx6jNVnNGEqapwRzDKHHKPPWhfrnW1WF6T7GaAcYbYeJmga5sksVV1LRMZ15hpvKoPzjiiiGATPPVTRxT",
  "key8": "3DPwCUMrFazWohPnq1AbUX8PsyRfuJu5FyumBVwmbqxFFXzw14v4AqSdkfy96ZWnxzGXehYtifg8NTRd9PP4zoyP",
  "key9": "2r8UXdbTEbRreYu7X1bXjTQJsrpAxKNtQgfXf6UaKtbVRLKJi7cPUckRNqkj4p45P7CGJP8vregRvhQZTFtx8RoU",
  "key10": "4tfGwqupCiNjDXm8wsHBZopREPtd6TQbZawrnUckwcmxuaUt5KGnowdBfYPHDXXfRN3EaoxJ9ZQNmcYpLJi9uaDi",
  "key11": "2utBTnznBo8b73Ys1t5GpwWiY481HEUyDSjWpAdCDgZ1ssEbh3oEvwp5bfk9dYn4QbAUBVkNNPmL29dqPhTrCTzw",
  "key12": "45Pvo2hMQqgSwTbejHwyVLmzFSC71WkorScWqQ7ZEeP1CcTbjXg1X5tr8hxuFPx9womZYipir7w6ekcKum1ZxaMG",
  "key13": "5JMgmZnhacBPfce94HUz12pJuMv6pDNWHqWqYvCR38iFX6rbrYrvWxpjJfJYFkmznQHnW8Cxq4vg6X1zMz3e5zvy",
  "key14": "4EjngFggmHex4CMsZkfm8EBCjPkybaXnmVKrEjcCSP89aCyzhxnLFNsMKDqvotTXjUn4gNvTZSon4Awd2ejuxpiG",
  "key15": "FgTo9fdE1Egx5Xnsribk8HXEX4qaYCqddNAVv7XRsfioLazQBzvmVDy8E84SBVxtv6ZFdu2AozkRZtGw2qnjbtM",
  "key16": "3TQmmJw9yLdqK9M587w5eUfSL6egE4HKKjMwS4UqbLS7Zx6RPKjsrHwtJ8e3msLYCc12xkL7uaUBFx9oacRGV5tX",
  "key17": "5aUBghzQ2dLgbdxN7sYzxzRZgApCbTgUH9N3bqC9UDdjjzT8LMpEzL6hWbYU3ABqoGUDBsBSWHCUaTGpvcaLBypC",
  "key18": "4beWuugGVxrb6uvaUZHRdifatEpe3rxVtUpBgPMg6RxPtuaVBMMXZjZNViAvVfMoH2X5bhaLrBtdaMuEnKVCdi4B",
  "key19": "4BX2Dv2yXeoWzvtaBAXtdCWfAAYCRZEcsiV9bwZtBdYuomRY84yDXuW9bHC13anE71eTXSoCzzdo8rWB6vcv5QVv",
  "key20": "2dzjTPgXEhga9HYLQvTzLCudEQuZtyYN7Xdmz9AK4ymHS8ycrHxTXSAZH8hiv2eJAHrS9TsY5nGrX1wtiz38mzid",
  "key21": "2ztZKNBNiaTwYhgAogkVgyE62vGXRNM8C8PwCC75EVuaH5rmLpCsbd8uPLZQkxM2kkBn3Tp3CDsb8dA8dmrHyHTM",
  "key22": "45xeN1QdSwb75VifMbcsPzsaNbJmr8X43RgfCydWSVcf5hWBvfhtVK31SjmwDp5SmyUDiqazB25TKZuSEWjozyVe",
  "key23": "4G3YnKRrrHESC5zgCHjS6sBvscLS1mU77wnQRu1UFjbdQPkf6Qx4XSpPqmyx5eu2trTpz6cfiGNSKGfkJc9wDHPE",
  "key24": "5D1R75hnFy1ha7PVqscMJddSTZe9GQTQuAGfmkZqF65FbgsWDMDYtX3YXp82sFHPhwVgJPYspqaddaBF6KYVQWBg",
  "key25": "2jo7wX5Se8rGhHSAMMQTzJTbqcWkS9B7gqUEaWNgkjqhMTAuSFijAPSS4iEodUXWgSHwVpC57KdXbcARpQS3bfpn",
  "key26": "2FpYQ4mYTTPUoVEV2XYRixh2Lo9YWErZqzGcUXTASHsrFnCacfsSpZCtE6ZFnL2FeeBt66MZiiQXh8KV1hWqA8yG"
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
