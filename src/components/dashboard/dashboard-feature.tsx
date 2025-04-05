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
    "RYWjMsghj27RvzgVRiSfqWi9VgDNYAdHMTPWDb1mZWrLrTkMjZKRP8NHqq3JiCRNtgex6wx4qiMRXHG1nXB3BR9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ogJghhPaHVwjGYNnZgThDu9Xc7sRUFfec2UNb12xwU8X8CxJmmTPEYeZVAmmFhfNbhVSw9X7RSPSWvaWH4nXY5e",
  "key1": "62BtvSYh3mdqxvukBdTSSvZDHtyYRGVBQ28BFXUPG86KdxmK6gNpKSack1LE7UqdbqyCPoxyf3FDuWEYtQzGTet5",
  "key2": "5W7d3KTG1eLfwkEZM77iTsxEsjCchR7gNdjVvbkYbPXfCVeSLeL5ANr9hcL5kxPnNv23AWsXfXRvYMjsTxDM7XmY",
  "key3": "4JwAWRaocX3LSCq2fszgfuz6JymX8sozM6vaw26q3VdjvUh1aMvEgnUhMEKSgEbHPHJv6Z62eo5JRex9tucduPcx",
  "key4": "4pxYDf1ZAyUCTDgy19ki6VDRrX2ztwo6ZmKGeUPxyLTXVosM5xWyxaben8P6zn2p537AHkzGdBnXE5Vxd3tw9jyo",
  "key5": "23xkTqirmG3qgV6Fe6nmHHjTaoohB9cgRqakYJCgETAe367eHpxHMqm9zZu4ncSbooApYuy9sv5GLaZTKHezjB1N",
  "key6": "22WdqziWoEWrgVnThxt4UbSnFsMfUAWcMqAu8339b6PJbL6YUXHBut1eEJrj8YqPNCd2NEPETi21BJCdFEmjZd9J",
  "key7": "HmoiwQN74bMAzMrVZyuULFFHkYEGLNA18sSnmLuCXXq5KiNFRG3SB6dVvcbrpgKJkSXzVE9YoGW8JLkH6gD9qTL",
  "key8": "3qiwBFaxoRimFuzqvyuo48T9V2saNTAvDHG2MgkCEFSFJJckoFnQwNUGQecNSGhEBVTCGWh3syw7ZCnuSnHPPhxc",
  "key9": "5FP8M5mHWk1d8bbfp775LmFfKkfwG3MQYsr41sqt9mTnosvuQ8nWYpHSDFqiy7MsAwSrkXQhCFAEJTnJS386abik",
  "key10": "5fEJXNPcSrXcKttqA8FAvige8JLMw2QZfxKAAeyNvbMAmDVivSuDoqN5dEyqEfqS3pHo7XabxUCB4SdFDhNk6XSa",
  "key11": "3a8gfNs68YW478oruGVwvphp1XMa9SerAPBo3wjT85FJWTT8yAbRR7WbqCBUXgj6cS7XGNuxunKCXsyqNyVneipK",
  "key12": "fj7xhYhj6uHgQxKj5P1fAomhFURa4pvcSWgGUojB8pP3wAKX7zuc3M7JjPd86wyeD8VMtBZ5K32TWFjLFKw1eK3",
  "key13": "4hmF1gQSSAQ7ztEhJSnrQw4ouaXv6hu5Nk4UVXnn8Mi5eSLo2SaN49yjLUuNgBH8xWzvi8seT7SXDFyf6X24X68N",
  "key14": "4rpBCLycH8aDQWEtJRWWjHThGASyeiLCj7RxByYQNaj9tBVrMeo8LHQcGaKsbm8vUGHN4yp8mNKdJ1jzoiWfi8uJ",
  "key15": "4drkT5RXvG4UN7RJd52g3YUqHp2ATEhK8Y6BRvHtAzaHPFMrYkqR2qrHu1xw56ap3Be4NsNUpWkXbR8yrBcw4YoB",
  "key16": "2Y1JRtrUVHVDj5s8AavtPBC6iJDxR9xhdUQvoJQr4ecbSfCdvW4QM2AfD3V3sCBkuYMLPKzUNXi4816sBA55BGsx",
  "key17": "4yzmVqdrmUy5tSjaRXnLqCmoLQ6T2iaChWgtsfpcWCBvXPgYAgpWde2DTdJsVudZGDqLHaxfMAdkaxWjYnpnEt8X",
  "key18": "rkknxNFp23bfytbU25tENpAVGbtxEH8hjWpruQToT2fYoYiUdb1NvrbZq9DmearYZzjP2DHRWyXANkzk39gJGk9",
  "key19": "2cELMomyNVhYvf7EYoX9GmovXRb199nDqiUagt5g4boiGwZ29rhXAsYdUD4DMQZ1sEc4cMMDaFTGJHwBk4PPWiBv",
  "key20": "2YUthXm56RbMs4wCDCWo4FJVQy1ouWhCmW8uYkdVMjXSfkLTyUD9frSRG5BQtb8sEwMKrdwiusV3Mr9uq4DdE2zN",
  "key21": "47R4UFNqeSaKB89DnzU5iUN9Fpx6pKnCs9Syva1FZTDHHjJZt8zhUnXY8savfE9R6ptV2DGeF8yGPMSJCXZ1tLhX",
  "key22": "4sRyuuApKtxd5MgA1sV2sHvgQcyJW6SvRr1EvjZovNZ3fk6wiwq44daCWeJ1izc8xWbV7eHQ6aUTamFZtudQmV6u",
  "key23": "WoomCqB7L11iKvMwA31mduftUmNNc95Tfme1NmjkCYgiyaXf9HzoufDCEMvWrp12LXg15GhhkXpkQkwNv3CJwMR",
  "key24": "3X86LJQ92jSTYLBibfdGttjQWbZGUfup1AqCXAVTNWfcUVTiVgZ6sD6RTWWeD58h2AryF3mmRMcCe9xyz91oavnR",
  "key25": "5SjbEuvAX25wBqsR2DUAqibxGG3uBYvUZzbrzzZFtQBrU3W8f5FjApa7YH17BYf6a1XnYebDKLG1rGMpsbkZPfNo",
  "key26": "2ou6NWkbn7hfDZhP8pxrKzCQ7ALhHRgy4E3LysRGZyXprPHEFRgHaFHXUpdpjfb7GCsMRXbfNts9RU2xBE6qCWwC",
  "key27": "Z7FKYE7a3egHu8B5SDQ9T3WBd7iLbPhepmtqjZ8wadmcftt64H7zKu5BWFi2gkcMqN8VQQ1QM6hNXSSEQi9wt6w",
  "key28": "qLEriZhitkh12XgjaEnauCFps3iPE9kaCzL7HGNozohcMrjBnyz8DLTug3smD49JYpYBATudTrCKcPTa4nrKzn5",
  "key29": "rfwJUjw2KPcYHDj4aacEErZVbnCTKAGKcUhmnPksTD5pqx4JHQdnNnCf5KDDqp1PQrEwe4y4hzFtGbppLxQdRgw",
  "key30": "2Ka4dbRH8yLj6Y95fZyhSSR5drjS2DwvJLycegV2BBVvcRrCkx1UENL9vK3CRZuRhyoHME19aqreEGzHicFcunUK",
  "key31": "U5BFtnDnkPYqWq9F4Ak1mQhMd8UkuvoaHLXoDjDhPyQBbxcem6f7Nd3UScjnjktB4qkSDh2wYF67KC9FgqFxw38",
  "key32": "zNrUrawHJJLFTTGd7MRnXEN1Mws67KR5bspJXYo1coixMxdRwPLc1jTvcn8S1s8rbkTVrm1iddvSNG8j1D1PD66"
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
