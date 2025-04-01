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
    "5KXJXNFNuQhCQtNKemZ4tKqAsrVUCMBpdvaTpmQURf9KcfgUJccANEbnLE5TLyyoTC8guBzLTKaidiQyb3WvZ7j1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3mZYfPzZk3f6f2utAgMKQeYbBVM4pGmar8j1DzFiLgvsMXMwAuTzU9jpPowuL5kCASPUKQUuEmg3VS7XauP712c3",
  "key1": "2yZSnKXG1B9YsRmeBq7XGFuieTeCY1xTy3GfoKNAS4sj6DCxE1RVRD2R6tVAgxVWRjVXDvwPNtXwvkFTK6eMxjDF",
  "key2": "5M8jTCDfCjoTDJbBUci5nEXm9sYYmHc1mFZKHJtwBrVeirYvVxb2B3NBKT4WcEQcsnSsU8eiu46KweACqWESixx",
  "key3": "6TNw9L87bB22AVip13YmJJngopRBfapikMcc8LPwe8dMt7Hru3PnPaHSj5pHWesW8fUPUYJu1niKkN1E46aeLcn",
  "key4": "4CyQfMyCGBFcNVs9v4ZCQpXt8gHKEdbE1EiBUxQSSwp56eWFE7ZXAjkMbzitiz2m5XnhGsWubA1QGpRWirEFmK1Y",
  "key5": "5JkA1jrEUuhDTerx8cEW9xgfEdLLVWPeig77zfpCHNcA4VR3HcqLAA6kJDFMu7WzUqQMcjda5244xr3R1SxWB2g2",
  "key6": "zYUMYkPe4mLrg1XkAxuxoi5ybNjqaG49uQt8wnYLi1NrnswnzAyytszut5tF3JGbw4nxhu1JtW3sV1oQoQiTY5X",
  "key7": "3k8Xwi4G3KT335YLvcKanZbyoPy9JUP2vibRt2qomAbkytUCgXipmn6ZTfSCrQfgYADxbQmJBh3C83DDaHPxkGDu",
  "key8": "37MS68HKTnQjUE6omxjUcBtpQwMgAeAcdcBaS9bKraDi9gc8JHjqKGJP2qV1rqT4y5tzyF9RJtZ3UwEXWomwE5Gy",
  "key9": "2LhZbm5AmRosxz5puTC1fRHcKP5Hw6h51wYKgvKkcnbxiTsejnF5gARs9SrBmFmcxhCkeNj2xJBsp8M9Pk6Rhw5J",
  "key10": "2FdZ8NPdH7dd9wjc27gGsZ2DcGJkGJvGXHx4dKQE5vr1PgUg7v7L92h1JLkPVvEakDQcvGeid7MBDBtRtwDNGPVD",
  "key11": "4As1eKbLDBNzrJqPsBVRpur4yZFXLLGHhs4GEgkELQDDnr8UGCxT4Z7ZxTYm3i62BBcRLXaszizbeiZDJ9bkSY3W",
  "key12": "469XgYuFHEYyib6N9TTjPtiVBMuVLgkg2D779R7VHEZ1QXdrMKbcfHQXN5VgBQN7bfU14zQxvUQAtabkaiRF4zFZ",
  "key13": "2HnZqtaonyS7Jhux8k7QbhzKUfZToznZQuFZ9ffDzuj6rubHk61bB9iMXeUYcAHbfxrJkYncqQh1UUq93xFNuWds",
  "key14": "4Ushv6FDrJKRSg3r69zZS2TsFnk5wA5DkvhenquZJAo4rkDon7pxkZRfpo9S2PZSrKLwutTmRtQCoTn7ZX4NvaaL",
  "key15": "4zMUUSUKechxNEoeXRr5d6WS7vKYsYW7cCHtnjFm1cTTATJnzh2VgQAaAaUUPm2oGxaAoPeRzqFuJfVGPNB9FbHK",
  "key16": "UFVDBcGL9v7MT88Lqpgdm2xqQTf2yn8qMcayQqMebW78BiPpXTDH8SdMH8iHTuxHdmqqGBeJLgksbZU2R4yysDx",
  "key17": "56uJTFEeTsKfyEyxjP8c1EtkMMUD9MeEwABPU3QdRChJwXA9ikbU7QG9SBCGtKC6CA2BziSRZJVDyaay3j4kcJeJ",
  "key18": "58CwiCHhzCk2cKcT7XfvDQf4KSnhjXQZZrkgZ8gdjjfHvoRmLaRsqqQaXKF4UGfTtXC9MaW4w5j9cxw85Xu3SHRm",
  "key19": "5fBNf2yyugqj7CfNLDG9iNXQYYoHAaVRybCEmtPzNs4Kq9WJE5UziKeDck8HLcPpm5G3Hgew1qxMHNJGryXTof64",
  "key20": "4jAdrXzPNqd73ArLkmaa7t4AERa9yDMAuRx3cu3Yfoa4WTMSdQRdyKUELmBb7S7bEkUjW1UeAPhrr9PhxBQQ2ymw",
  "key21": "3XRLkdjNETHvALvovnTwS5fCNqMUe3JVmAXWFWvqYcYabhCtzzCLGZRmD5RpC62UsKtnNS7Edy4nHFSA9nMeKKDd",
  "key22": "5ZLcRqkcboT4YsSh3fHNZVSqB5oAa2NSQ8XHkNXTUNnzThUNU5Z65ytqQehAnC73UEVQE3pr3C1kz4VHgWSBoB5H",
  "key23": "2mFaSzH3D92kQmJSEGpJfCb1CwoQ2WYbPt7Zhb35CpvbHsWdqxiUMgscwFGV5yTGSKziLWrccYwHg1HLkgDA39yK",
  "key24": "NfwYKNzMuPskfYsDxd5jzwKfuPK6qPHimaAgtDcEcrFzeHQMrbJQkcd4Q2Q6UhXH6J9a2nacQVrxzn73p6Gqqpc",
  "key25": "Zb1qrEUGhrDwrV9wUj1um7pEJnH8Y41E28H2EQTByYqCJ4z1oTuahsS97f5cQkY6sYLA6r8fUzxxxZKcLRmfjUi",
  "key26": "4ooiHFf8jtWUstfiktm54yuSEcvKpw5ZBXhD9ghjNHNV5q9XYYfBiwiZKgYZTi6uvM6SU7Epnv5RWuE9geyNcmUM",
  "key27": "4zK1hykzvYbfxatu1HathnkeP9xPxETJG81vQqkbciyeKpCGdcCwtkgh6989xtqFXSCsFBPGA7Pkd9Gj2s35TZKX",
  "key28": "5sQCMA8cKaAh6jhngQKeiQoJhLVgBP124BuyV9cQakDKiNzXC7TFNqnbwkQg2MZoahJz7DF2TQFsscHyVLVh6Qpg",
  "key29": "WZeYs5ZDGWq1RkEmcGWmvgXiQ8PxM4msVSyUUNDoxFkre5CpFX7aECYW371XqyXD49Xi4sh9wMfCzLJBDPptrVc",
  "key30": "346EggZw3wCqpaypH5DtHvjEHWpmPNdbzCVT7eV2NQ24t2R86CaP4YerGkYfd32HM9GxnXFWTP2BKZ5m2Q1dYmFJ",
  "key31": "33UrVhejfVaykkJjohv8MhW65hAvGoaKLEkKJgfq7YDQj3fEQrfXvmaxJRCfG7FKGHB7Db2y5kL2Sgdhmb82Mh7X",
  "key32": "3zQp5PqCfsiPCqQv68JSqVDNLhSm2QhvPT3mm9CQQext6ABBcGwbv8R6ecUqFdAornfcgtUY6ibogCHMSpjxfTBh",
  "key33": "4sMeKT5w8nrADuaMKgcG5FTPM6rpZCVEuTySqDDM5En7jSJGhTcQ2Kx7wnPms6QuUPKFAq2VTs4XTHR77u6cvVht",
  "key34": "4Rfmc5pa9J9apWikKC4o859w8NfqcyNm5wxTQpMMyXZTgboVY8v1obfnQ7mxjdc9Br2gFzt3MmzTwd3a8g3AVLLp",
  "key35": "4rhDKebGVXzbeqYnXodDtCXWjXf7FYwxY4tE3rdy38RM8TAAHdnCGYufNpjbcvBUoD9MorkxaXxp1tMXgGEXAgE9",
  "key36": "2SBSiCsEEdDvoYPXmirmpd89KUuM6YxegPpg6PjY6ozMzZWKjqnYMwCpmLYDgzbapvUTkfAG81PfKn2EWXRoqxw7",
  "key37": "pisqeHA821ayX7iUBeDmbAx3ScUoCok97pDgARXVVSqLSthPhCon8RBLgAzAD7rxW9Kcx2fbMMWnY4JCKbyu7ET",
  "key38": "5Pn1ttR1o4VSt67Mbg7UWEXs1ypi7QhuyjNqCSUcD541Y69eoPDsJGbqLyrzinmJ3szUHe9eB1KM59fCSmaUFYcS",
  "key39": "4EEVPY2bCz8kA3sDb8XnwFN51a46rHmsLSYJFSNsR6WZ525m1j2kSonyDsYppv4fQMc1HeJYawqV4yv9vfxdDRtb",
  "key40": "a4PwmRn2cV76bDKr3LeXhHCm1US3g7mxm6N5qDJ9ZJg82JacEnuPTsd2nCZRVQdn3ZSSFdEPABEWUiq4RPSP69F",
  "key41": "gzjpmkPeLNfrvUri8GBKdgyUBVBKjggL7BjrzLnHxK2DPCiphCGVFiSF2zM6LvpNToiA3Ffo9AjJ831socgNwi3",
  "key42": "2wEPpxyqvZuhg4bZiW6RYFZVSGaKuUeTGvxYBJWsXwTzc1WHAHE9ts19M4J8Ff4K5zVhEWovbJbk2XAUkEJ5roDS",
  "key43": "3kxxrASvysiDTRxzyBLXr9xm6TbLZsUipzfB6yomvnNMuyR7XYEM377k58voa3oSVedXq3jX1fy4bqibT8fCeBKq",
  "key44": "4e6cakUKAakvxNnS1aZphQPKr9G6jPJx357PpzbwoxNrM9TCHd5rqEsUg8hGFLhfbo75rkWaQfxf4YGct3dqvHVf",
  "key45": "3CdZ46LacWRDANap3PgNDhDnj4Wg9hUCmhogTXnHUFEfSuNiKdgQLmuSb9ZwkvKyVjqqGWPqMjpYzWDFzKEnckJu",
  "key46": "5YNSW49NF444MJ3T4wAN5FSVVAk2qJYcH5ETVd8MJ1N7sXVYQLX5ym2eGgr91jVBSU99WqyufPojnzMgoh4SqDDt"
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
