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
    "XSzjAa3beikSWVa7ZYR2tXERZdKPsF47EWA93MdVczDiwxUNanqpzKQqbeHinCPjrvV5HuiELuvMuf4nqabJy1j"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5uQc3LjowJYaZpUJpbDTD3pEUdJa4bg6DYbvprpLKqAcuP878AC5QcjUpzGq7VenGhnQ6FQGV8v7Rd9x9cnoeUJC",
  "key1": "4YfQxMmfUuNX6FMpujKYDo2qCs1ZvciYTuSeop4asG4HKSqS5M9XAS58SdWJgRuzzR7oA33BX7GqECBefhdfDUV3",
  "key2": "2fK9TPmPAaqpyR43E1PPYw9kGsP4etzYGkA6RxNbkgb8mrBDCXjZRoak1rSUwDMppHFzjQ353WFGjjYRRuma7HFG",
  "key3": "65nKmJUpMBydE8DadNL1JrsiN7gdAS78ajM4mjDesL1JJpJ2xRaM1vwBtEZ3kbZrFy85ep5PZ5gofFK21MNygvbu",
  "key4": "5vBiHBKp4rmvxCDTEfjDFSuSJ2tc2ieFq7fCjznZkV1d99LKNrUDLko6iXnZd3DtNDJ8r1arv52uECkAwryNxHkx",
  "key5": "XXquDqWapvBTwXeQzYfQ73VevvNYNaNb1q8recgw8bLWyob7PJvxhCdn35AdhYij1XSNbMTHZmsQcdb8M8uXjPJ",
  "key6": "498cStRedpPySonYeqGpVjoEW4UaKXBLvj2yTf3Scyzmnt9FbQScNgaxeGEVDJ121K5ZZZnPbdpyo1kQ8E46b43i",
  "key7": "46CqbiThBsETzxZPS9gcrYoZo52Wn5PXyzzcNzgHrHN8c1txtPz3hjeL1CGNygozdMNvQR1dRmLxXntv9NWnKvVP",
  "key8": "4fXNdDnvB8f4QGLztZPJvFXQnRYtMRAXQKiKQZusg6ZbyTeFMUutraxfae7f5nN3y7d8XzTv48DaU4pSGN5aNG9R",
  "key9": "2DFoQkbsAVJ24QhoE2aQ1ZcSMTzzWH3cmEjBiqEHg2U3bhbMd5pKghKF6SKF99RxuHjzSuT65276GSYY3hVqP6cC",
  "key10": "3J4zG5BhTiy7R9tMbr4k1m17furNZNfHJppiyGWSvmQoRkqUoE6QaarKQVSCubBCdR5BteCyRutNLAVGFEAUQ4Gk",
  "key11": "2FtfPpRbXwCCwj8jvKFPshKjBFcHtGr2kuztHpE4izj9nCB26zoSdhKAvqfUA5YfpBRuJ4eat8fNeTGfEaKy23ck",
  "key12": "3qZ5T6DC6MiFnUyEtGBNBbkhHsM6fHuHbcJF61n4curuFvSM5Artd8n9dX2ibJeyw5Xy8P4yjnVqgSmy1jxbpCz1",
  "key13": "34CLDr6JeGBr8YCKgEgxCdYNmaPxSnDkKiiJsj44ygJ7d9FmjR8jaRwutJFfk1dUVJwHfFBsAMaJfnZ9TK1YVioB",
  "key14": "5ty5My7giM8a5jB2gxXQNxBJY1beDBmth3nW2YFLCtvRsGvwJQFCNUD2PWe9stXcs1JTJETTQ5cyt6AoKyhY4n83",
  "key15": "3paFtCSRXDtDhfN7EmFEnbLoQuJFbE1hA6NTuo8F8Uyh63jijVPn2Jnn4Wt5cTWZPXXv5xjgLK8x1oV5foSpq9ip",
  "key16": "5BoyzBFGRSDfhoWnAw31NSvy5Nvm535nmUb1swF8RdXkDo91Jp2D3vbmsAxAanzmRerF9Ey5bpYKPwyEb5cRZm16",
  "key17": "26CMkRNmQ2kPRuyP3VkN4HFqyMvxtqUvJqtTx2Mk6ydXdxMxBxxReawAwDLLxM4YRBKSa8xjo3nNYLCdBSKWDhVZ",
  "key18": "nYJv4gr9MELF6J2qrZE5fYfrJ3ASS6mXPc98kc1WcxNnFG5dPfE7ihim94tuK29AvjeQbk44VCfBd8veTg9dEeA",
  "key19": "48UTCw8d1Qgkq91bQXTp8nYNdBsmVizxX9rkHuESVN5focuAv9aJvAdaGAi3yT6SxmHsTpW79Qrmyo5SyYuybAoo",
  "key20": "57fLtt8fXsMCp9Ch4J1hKKTGavGBuBiBHL4JTFRPrLmYXbM1MZUz7bLfsb4j9qeD15YpUTvVMrzMFNG6HzXmXJYq",
  "key21": "2qf9F7wgVwLm9MbYEnDf7XYaFdQRbUfV4xTXChMCzQkUrNvQU15uQLhr55xWgZvK2hb7cQW5bAqdCHXx4SsP3mUS",
  "key22": "3PrHPQ5YH3xcZv3d3G2g9LfBwwjwjWEd8Z2uA6DSvPqgcdEdg2RJ4u3hH8qYqPX9628R5DGmPBbMgfbhnaD4S6v7",
  "key23": "2K7fEtbRuajd2UTSmwaVEGMKXK84FTFX5P1N6bxhYpXnARyTmTeFKYyC3CjtEsKPwiomx7HXWYJ7zyb3iK5bWtbE",
  "key24": "4eSNawczXk2tn5BSzZa8dgjL3PyQrtdHpZD1rPNfAzBrsAp3kWpAH9LPMPfEJ69rfhVPQTXwZbiYeDSikTHLEwzf",
  "key25": "3FWQySNzDXhrdiBk7vNjX9QZSCLsKLXLMWBLg5powHCL1m1FMRdrzjda2A69e9b3HVkGdMvfm4kPGVxjwi8gHhGn",
  "key26": "4BgbcMhf6tDjU57R839iVimgkxHxybtkmgqv75cXqW37v2s1sGhDBnQe3ST4E78P5xDqmdLFLGUC7brG7BkfSn1W",
  "key27": "2SXa3NVnApvz1yAu7WBqtDAsJ4DghppRGitejqDPgeitxrMjsS8E9p8rr2fRCgpR9maNvciPQSovHfbT6QwZRAYc",
  "key28": "u1wAEjkphp89NDMRtQ7HLKMvbtJz6ye31fmZ1PELrNCghVnBnNC1rd2rq7UQGAuUSd6mhTxa6n6JiJ3XxJZkgNf",
  "key29": "25CbcvAQG4wcg1XCmbbPu7nLQzkBA8HFQERHxPzTpmp23hvA8AgSavDPTtsHGM9Bo88RFkSQzEeDCFWPgR4Tkgb7",
  "key30": "2xmcWTisCF1zaFxwzhcJRCJaZCziK6K9dV25KX6nEGKuchfMzhy6mtQJgppmC1QgxCBUmgqJg8DcXRRu7w74Uxnh",
  "key31": "9TRKDPPzhPEYsoawQZGT5baVr6Bd6ReACBrCDy6AE51rX2VX9WRiVxyCtgHy3ajhtYaSDZXo2vzc8EeQq2T1kBc",
  "key32": "5N34Cxi7tRmf9Mqauboo6MVtXiQeHaRGpT6GE2qDCxBDdtDM5XanPvN2CfZxM6zCHdTRRZKvc7zwFY1mJe1BJMGA",
  "key33": "2txzPvbyB6pr8yQoeX9FEeAWTfYUSRhPtefoBhm4YJzsJoY1cyqz972Np15mtZc8Q7qS8URfa2bk1m9eFMJ1ADZC",
  "key34": "9zL1WJjkQgN5DBWmG25UyzivWPWEd4gA84dxvab9QQ2eeVN1u5AYkh8deiVPv1yR2DQ3YvwK1L6QqRdeFpTD8ki",
  "key35": "efPYXbZxpRhWAfJk9n27WUkfokA44VJjQe2fuvnuvf4ZNghxdVSNHfb1X2zPE8N1bNzTeCMYo44b6x4tYp1hHY5",
  "key36": "4NT9oGC9tt9e4FenZn7DiW7eC8BVejZzgNgMTq53tKR68UmKvhaBShkznMokiLtCFT6m6JZz8Ypc4BZUTnXY77JG",
  "key37": "5aQBvVtrTCg5Q1RSY9DXi2KmCBZgZojhASte4PiDP86W95U9CgkxV8SVEwCU6UZMwoTDdWnvAwwcNobRWvggZdXG",
  "key38": "61DpWWHxZkX334Gu4ZHbav2s76UqFqmRWAxRzPY18PAsCAHZeSjWHNmoXCWTqTa3Zj75xZU8TZ7AQoSc6eCgY6e8",
  "key39": "4dF467Vh5ifSZz1DTH7a2cmyundmJLGVqUvnmxo5NPGH2EvPuPnUimoBo7Nq1hZJWyPjRdKDJceHkbeKDfge7ryh",
  "key40": "4ULaQGVUjFVdQ7NFHCHYCTg4vMkRU1csNuXrhVZfmtBJAh7k2B9mfZsvbE9bNVTLJWfZ4sTU7AGxupU74KUMt8mN",
  "key41": "N8ugxq1CRnf4vKp79QmQQS2AYP99GbHYhp1GTubam6WN3wjuQNGRcEdunpG8imcrzkfT46DhrJHiQT5q8hAiFUB",
  "key42": "2caxy98Zuhwgdiiw9S3iiv7p64woE9RUKYxtMurwRS4aYsSxbjpKouX9qjH5DNMnxrEPoEhgx1qUt3ny2imna2dm",
  "key43": "3PG8bbXnL8To1mGc9eZ63hU49w5qu1wKQ6jnYbPAwcprQFNhmeS6u9bAC9uZcmpH8aQrNdtNxXhJfyRBiC2oP78S",
  "key44": "4TNhA8UoXSUAYGG7v8SLy61gYepwGMFWRmCT52iYHoYAVmitUqtxY79AEzNGHmXz4tStWcbmSeh2ug32b65uDVRM",
  "key45": "3yaFkLM95SCgNiVoKs6GyG7qyH2rhwvPE8pVVWYtSdxyUoMAtMJd2iDS1qrsPWc8ojVrZshCmphFusk3jLMVVDwa",
  "key46": "32jhYMREUeTAH9fKcM9kpoUVmbTDhqGdgev9EAg7bxTgS5ndEiipH59gwDAK6ZjZynDaArs4hMwWA33PRupBcCFJ"
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
