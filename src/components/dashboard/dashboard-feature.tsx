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
    "j25hnBUpKcsyTLFqi9ZA89JhSkoS49sjFT6stvi6iWRSvXfB7Q29PgAaEGqZTZSmvpACMP9FyntWdgjq5aDQxMa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Lno5vgjgfCvBkyY22raLdJrvYEnSibrmUABmo4GCoru3X5JdZBBkANYLkNTDfs8vmv1ckdsBbp362dnp2LQjMSN",
  "key1": "5dmFxY8TTv8JX3mBdWjtU7WxqzGvCj3FHPtQ62ivMajFJbz6DLWAm5TzH9RkTRRiXuNqa4nvb34dK6Xt8zcrrMNx",
  "key2": "Zf29cFVcaJR5DsNFkgysgCmdQaRzdQt2BJ4AjUPPNWzErcysrYDcY1y7rpPx2UhFXdyzUCYBxiusLumgJfgR5wp",
  "key3": "GRsVwESSk26Du3yKGo5u2EeaqNNYhJxHiYMUap19hrMZQ8FZ4LCYW7H53w2mV8FdLYuwm1Tc59oZ5H2TjoN8Xd5",
  "key4": "awwgVaJgGT7RiNMaEXhLDBsqxqRdsGRLaQnW4iBcdNEWisW59M7CFJiDk1xbztwcowNKq3vY7CDqmdG295seMNE",
  "key5": "4p8v5yLZLDFC7vTct63vHiyT9vLB6Mdkh5eH431ZDq4ZPicAizfbgC4kzsr1jfaKzCyfnajuuG1ZAJ1f9e57XCLm",
  "key6": "pxLMj9Ks3DZQ1Lunqmo3r1P3E2qzCahKjnYfuLQ9mCDmaPfn52wbHfUmeXejssi5tiwfAZtuRvJq65B6joh9VZH",
  "key7": "kzxtckR2oUJG9DL6zdq5RwDUvAwU7VmD7rd9UZaACyFeoyMnCjnLnkQMw4GyYbLrw8EaR9GdVXFje3k34wxLPZq",
  "key8": "53HrDqBA98dzdtLRCnDHpUJR6DNhDBD5q1cSg3mjpDVx4Q6SLS1JbyDu77qo3AXG9LGxJQX8E8hK5FMwaaN9Gawa",
  "key9": "WKKKDq9tezxCV2hNep2DFp3F5VQBt34Me95rnPBb4SaR2EpQxKNGLCr1eG9jCW44qSAtvw1LPZFrLv8vurPow2Z",
  "key10": "4FEZosUwk3UgqPT84Vvg9JZJiXgNFn5nK77WSCaVXAhZURkwK2h8L27BF8V7rFwK53ZZzbHsNQuC1tduY1bazb3D",
  "key11": "jMvFQS9YDJaUFsUbZPwY8JqvTMgd4z2G9eeB537EgVYH2DJVvKjAZrxMngX2znR7yzgKoomW7FQTcpuhC3USPmD",
  "key12": "3NYHfPaaKPMMfyue3mSWxSPWAxVpG9JD1cxJBr8ha5Upfi9Nikms7sjJysP3Rxe4D3bi9sM831NHCsT8uvidosQv",
  "key13": "4PpLScgYG93kYNdeTdS8ZYii3quR7Ab4gUU3KXknxTzke4ax7cqBfXnu5rfnTHq3QPA4LqwQReHVMfPTFauqRzGE",
  "key14": "2PofMc9RSgFXhJyfxVzwpUSJ7wPwEJX9khbynUQLUTuh6bdZw5SSDC2Rh8o3jZarmLJxDvP3bKn7hbasrLGifGqw",
  "key15": "3Z5R8ifzcd7F6Hu4wuPFeiBWbvrbEapcnjEtwvJwBNEh9PuMBP2VDRvAdBa2AHobfbyxgkLNZwAnuaVA3wR94d2h",
  "key16": "zHp92t94e8AsahAo1mCMejzApabXK7bfWKJSS13Brtzgya53KVmxzt3KvzE6vmsyBjNmoT7eThuqjvZmNqUvL93",
  "key17": "5BvBGywnodWhd2A5hqnAXdcWXEnbadJ7mWBHFLGhT1GLqV4mEoMFqx18R2DGwzzgZSqJnfBWzHpM4baehtez3HcU",
  "key18": "4ZFMqiAoC4UhtLJyPKijHD6USbYK9VmmL6bjKmAehBhH7PU4TW3yp7gepio3MbNvPLLHnfn6KZGmfFQgnYUTgU5H",
  "key19": "3TaG13mmr3xud5HEsfWeGMmufaUqJgQbKx9nZtVZzpytyTQSGfABUG7qZokzzTmG9r6ZpPSwewbCkdnva1A4kahB",
  "key20": "KnEp4AkdD9nJLXdBuyKNbbd8vZjuKsSzUjVQrJL8MdEayhp34CfULSKR9EPPJw1X7ynwrU4aRcL5aQ3EHGNVF6x",
  "key21": "2knv2fHLnxUzGcnuskMqTkcJcrrhjwHPNpQMSQ1PZinE8A1Ae4w1Z2P5JPeDHtUXanq3oQ1NEyMDr3VLZ44Yczge",
  "key22": "4AoRn6MjgrVsvB23eSNU9DWA7zBYYwPA29mip1RYpGraiBoPXzCSGYpPRCuFdwJUPrCwp86ZJuT7Ma6KdDfgPmCM",
  "key23": "56dcp8PYeAXkJEzmGsA696VfZsD9mJqVJftXtFi8NViTTReuPLC8BiTC95b8ZjDRXGJLBvjX9RrGPsikARrYwdLj",
  "key24": "4tK4Zdhstt6L6s9KD6hxuq1HirN8XEe7Uim5G8mPnHkHuVXGzEPpYeW5UHk68KaMwLRYDv7sNzUEtFMBUAK9nrYe",
  "key25": "GaCtaQiDhdakQUwvoFmiboGd3Y4eHbcGidw4NrDmQRTFLbisEcp7FSHgH5AiAfRFqZ1KfKT9bqrv5UzTTtGBu2N",
  "key26": "5WG9wN1ooSLfrEcqRf2b32wFj9u9kDHJbWsDRV42qFHwvNorm9U2mwqfkoQsj3Gp7vxFsLLkJsVaaJenQ45YTp7Z",
  "key27": "2gt5GWFSSAgcXe2XbKn238NVUwJrzbXKRDaQV98TvtuMG7R9gmLFYxjmPgo52o7ovqmE51CrLLismn9VpEKZWP5F",
  "key28": "UqhsiiusvPkczhRsog5YRkEa3FyW1wNeZsCLMd66LYkPDBWD2jYxQgvEMfKgr5pBQyF1ssnuFSbSjwYPfPw4pkx",
  "key29": "2J8C65EfwS4gmqba1ipCQfbAqE2iCMm1Rh5PSBjJ1pwkXrjuq56wmkksXigp5hRW5z3hQ8noN6GcsYekm2bxZ7Qo",
  "key30": "6596qPNb4wFPNChLAEB9tT6dW4zYHwh21Bnaft3J1D59fHyoHMSCL1vRPUT8a8FWoXpKiR6Ga3Axz2kKNbQ5jvxi",
  "key31": "2f6Sr7WpzCzSbQScP6ACkqchrxpNWmaBc3LmMgJqj8Um4Q9DzQsgNRRdMpeWHD3FjrJzvJFKwUSDsKRuqHypY3ic",
  "key32": "3dsdrky4a3tT59cGCeBbRj7QoCUqiR5NvtTMyZ16hiQ7JX5qNUcjL7CJtYnCB9JLCSDSuhLhmxiva69DMT5c3QT8",
  "key33": "3ZUUR1xg7GZfrEg3qV15dneMXotnyGcA4oVnMYs33ro8yTf7BfjH6WXngh9yByVqb1BEgNjxaF4pknrFXms8Q4q7",
  "key34": "4QybMGV3x9pHJGP6w8dDgu7hYUBhue8G5ZVQxuWDYfK4yjZbzC1bWgN3i7TaQ8rrAErCSGchsb9oXkbdw58kD6Nr",
  "key35": "4ruMp55Q7zUUVZHgjgL9sUHbo6S8zaUuEEqY3j5RYCEche6TkPaWskegKaKjeLZQX1KhhjUegoqpH8dWjdyYhVyt",
  "key36": "2pbyMRhWjYjxneGu54mkio33WEPH9LEYxby9i6mAJp2t1G2urYhksWRC1WfMeWWHC3dBYF7R62MKZPVDY69RLUaM",
  "key37": "2Cj8MV6yreSFNbD32FbYJfymtz61SsafNxM1RENwavKCeMx5BLB4rLd6R2WdzdoK5HWRF8eRDvwU5Bdu9q77Mdpy",
  "key38": "3F7gvie5Bx9iPPnF31T6wsPYvYe1dfEEQ9YnMmBSLaPSuK4YQ98fypJMns2dwVLbc3xyFRT8NBDXBq2SnQ3MA1VM",
  "key39": "2SducA3dLG6Zn5XriaCxAKi9sfDNpGx4jQVUGiANEgBA74R9K6XrQSThzixqE3iASMVxVak1UKMYtsVcLHRJ9ZXj",
  "key40": "3dayXxCN2kfz1sZnGy82Go2yBRrFLPaxKp4Jgs41jZfCx4XF3KjTCprt6ayrcXAGdtzMGLQFUJnk1Fdvof2q41j2",
  "key41": "2DEhFpXRs1UwzZTsu1LiPa3j1RqZEtUtpqXBy368HvwDgvrWz8oTFhH3wRBmTCLPdBKvTpe3v3mQQsL4cAVytpRr",
  "key42": "5C9HwwBUFt1Qv3aEZjGAdCei1bGmSMD7TPW3UmbKsPksMasKH2uyXz6pMtzQFo5CDqcXwQabpHtWLr2cbbw1bVK8",
  "key43": "4Vwg4JUWrGhhT2JDX1b7cM9GkdMr4bLryHC94pwdy9v2rz18C2UKMABPGp5gMvuf2mghdVpKy6R4cdU8V1GjVdFA",
  "key44": "2JKoCgP6NrkPCawxopuLFyZ5BnrMcBPDRdYPjg8hM55ReBdqYU8yvuga8A35tTz2gtby6kXxefKmrwsSz36Xg4xW",
  "key45": "AYWEbwzBD2HgVTkEfaWXA1xCjr8qBn8pb1MS741BJxGUmgHCXY9LxmiCcigqzk3bMGZuT9f6bKFaxGbqrSK7YPV"
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
