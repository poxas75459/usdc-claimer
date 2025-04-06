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
    "2KhyEArjyVtg5UjTwAKxRQfTTaWH5qeAa9g58nrtbwS56Xe2oLXrYVPaGoWodZdZkPR1eoAELEHFg4jjc69Bnoqi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4CoKH8egPYKPDrvezFbto1zjcfYjHMGrcsdM2Au1k66ZxiCE7oie475g1ktDvAN1QFktPoHVYxUDw7axPRgZpFvS",
  "key1": "bfyxfoMU7rd6YHtekuXgmKeRaQvgPEjYF1UvW6ZB5ciPPZeGseq8TvCyHUK2GEgAVyD9t58DR3UWDww9LbcwVbd",
  "key2": "2qidvowb6PXceH22Thr9rRRP7ZY4ARww3LvtWVsryDdeUYmx1epf9vg4nyPGKbteuUGy1bqwMtrtWFhuuAGRD5b5",
  "key3": "4EfpJPsytigWqfan5ACkjX2NxQHrXNGCz9vpYvuYm5DtSbHNvWHaUSt5cVeKoXjPF12AU1E89kkgCRp9Qc65q2Ek",
  "key4": "3wkhyn6skX1nFqBQ2bfDzDQWiesxgoM8hGGUAyWNC4oLr49pDgzNiji7x1pt7YWEUnRMcygyjedth8inNb1CpQoP",
  "key5": "3k8DQz8e1ibjGufbmcbfJmfAS6ocqkyraH9NGqkRB62UZr9r7mvm6qemTFwjHFqKL6z9oiNZTFgEaLFQYznqg1W",
  "key6": "52DG96VfLAkvxBvWsKM1dD8dRBr1dqwzsQk4Uvu59SosGDfC8S3TDczK3G5P5AE29SCzGr21StQhm1ZPuS1ZS2XA",
  "key7": "4eyPkKEwuHP7ReXcVF3fJZ6PnMgxVaCyNcSjW4WAPBG2Wy4hFKk6TBSCahR7rprVMaVBZobDwYThQTDrSRLaxAk1",
  "key8": "3MPAmSPjjh2BtUPDStP2YBYkccKRjnnHf5tVzMv8qX6Z3YCmrtEHAXJaALXYrJcy4FyAi312tPxxVAJLJFMD6J6F",
  "key9": "4XMo6ZStuUprZwsUAc64xtJCpKmRQztEneA8q5MvLvGtnhMuuQ2rRjMXwZcjSeoAXV3a7oMy8DNnLWSP268UaMN6",
  "key10": "3vSdcsYoFCMXaY46DRmUwjQ6xq7GzYBFu3timCSQrCkCJn4mZ8pz1jcCPT214hvfjug6hv8GyTmeDr2uRuRnqh72",
  "key11": "5VEL3zFRNFDgP9DTHmuKv4xZm4TbozD461YSyv9vDTgyprLpFYZhMUKgyXGdGw8BD14rD8BxYenmkjFEPVbPBKfv",
  "key12": "2HAPWw1Vybz4vWZKQeA9ogLMEK7v9kjhTX6UThAJUAZAyhoDGaqCQgJ24b2TKS3f9Aj5SoEfmP8qaJ5Lgr79DM75",
  "key13": "m3wYZbhCp9ChgaVKQMqi9n8k3gCeb64kdeoQfe5YsMpPvuMqXfj3YxqB3AzhAMNZg15VPsknAhspSicvonw3w7v",
  "key14": "4U6d5ZL6Df7bNNejtBcADg5dj2kBZ7WHdQms7Uz5U2Yuz5N5LxPBf6dTvLbqVLBaAWeowzyG2RALUk2EfS76mXST",
  "key15": "Xf5PyV5oKrpeHEDLTAr65DRtsUR5Wk4LtnSWTtqSKk2qYDJNjidpw4o3UittbzhC7ZHy8YfEXpziSoqteUh3qbB",
  "key16": "4CDWs7Fho8CUu3N5mkuKHjHdsDPWGZNUHkmY29pk9YKpuBEJi1VVRueArb5vmyR3hWJc9MifM9SWEKMA7XcDCd9R",
  "key17": "3yMyndC7epL1T5XcHuzsptsdPnZY3wG6GD3SeRgJJu7iDpfcBcX4WDpVKGNdxUUDXdELWaWc6qRMmEyCzQkww5Mw",
  "key18": "52zkcUX92HB4Wuk6Hd5Dt1dL4NEQzZN52BzctnWkCkd9mMDipit8pNJzeUhks5byKcE93FsnphgqvSSi88mkQbJP",
  "key19": "4s8XhejTFhsRRUcWuLd7AgyUkRXDcuUVTq9YUWvdR94Ys27kb6dNmyVW3asWVCEEcTRmNJ2w8jKLtgxraAYdSrAd",
  "key20": "5Mp1C6FwrCDnwt1YdcEZ4NHxqk4RiGV7ezQzyhSVNF2GsBJAiXVJyGFjt7x9jEFSZhWGJpYjT25qmS44SWsKa5Lv",
  "key21": "5LzgPXVbAJLWs6dxwNExTQnGeopT2suSbnA9mmEvykJx3C1NZp4tueZtLSASqK8fegYwGNSuSqAzzyMq5ZmGAgQ5",
  "key22": "3R8X5kiFfCqJo22tKN3yF7NJB7Wjz17524J2dq4cwNQVyUQCP2dEFEWNY4Lm9TsiMJgnQT1QKzpCy8ceJHMsHrGy",
  "key23": "BKrLGvrudRPyJ3Z23URo9xdS1Tky6Ntu8Ez1AbnzATAHsk6V5L2LJfkr8soft8sP5AhdRfZPcFoESJ39K1z2ta2",
  "key24": "5RkDTCz7ADqe12hiyrzv9wvh2RDLwSuqjjyFpMMRKagywWpkBWCmWgeCdarwQszz17uVUVqTY8cM5mDxKhz2JNUj",
  "key25": "3q2YmNP1XDECsVwUHcESX5SLS97ipUmMciR36gEFP1i8wfWXzKkgzb9RXdFRimgyf27XoDMqB8tGnQQMHz16uEVN",
  "key26": "3WzYJvWrdvE7bcoLc1GMcR3P1eXJxxqnrecqXxmZw4vMuxbDmCN6Sbor6zDsLaWJxKo472neBH16GRVh11VnEACD",
  "key27": "3tg6rZ8KfugaxiDYLPmqrEEzBKG7CZeLkWTJXGpcnkg8WBfek8mKgpQwWGjbdffqWk1pRpAMkxyRi47zWnkLhJ6W",
  "key28": "2yksZCX3sTb9EmiCbAj1dU3TGfg9BEZr9tijggu8v2cs8NbAYkfFoFar9Cmi4nSjpLyfsdzywt2sazbasRhUSCVo",
  "key29": "3FRjMgDgka1KQPmbNXZUBiHWKhuJf9tSeNLEYEBUNRyTgVEDDuV5j7PnuyfW42gUKpBB8WgnP7myy4AFU2yS6g5y",
  "key30": "61ZL1GGf5RFpQCswGt6hEtLKjFmGJjgVcvZTHCo6QYdDwYFWBjQf4AKx7TiAz2w9N7WsSmgdRSzXTgUXfejWjpKD",
  "key31": "3H5MF3DnWkakDF4Mv7fxGFsACKdN86DQNiTwsWSXkPbbsi9jGinEMzbbeQ9muycgoskPtJMuend8ywas6FYp6eCJ",
  "key32": "3uny8wHCdCZBuEPtrjW3EAGsyHhnR2UASdg8kfYYx7wqYRKJ4JzCUV8ETCnTtGLLu2oKugLk2N5vJGzGFTWDCmKh",
  "key33": "3EJWmGN5YRQ4psCtt8KgjoUdTsjVTBC8CMyLAs5Y5u3kvwoiJ4ZW1o9Q2VJjBrDDDMXhag3htUeCzJvg4a9CZTN1",
  "key34": "2ws9jV8JBdEyjyMJCZEkuB5GGYri4L3Xb76mgmCb6NjyuUiKQkQ6HnKBxCBzpjYQLLHPo1wjwnAAmCN4NUPnYYJX"
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
