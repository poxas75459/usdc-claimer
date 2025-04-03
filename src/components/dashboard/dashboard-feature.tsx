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
    "61dgjzBjXzxY2obV59QdEq2YyJQafaWVLxf1fky5F6xiT891W8wGosxHgyR4EwnCJirz5LnaWoEpwzBoVMuRwm1b"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Hdpj1ovGHQBC18tF6gZbX43Jn6uiwiFu2gUkH2dmvqwPMbN9TK8288jYeNGthzZQy9Fy2rJ7T5qhg6xDZceDUqd",
  "key1": "6387zJbfS86sc9sxy4zpFZkotbRr2ZoyckXsHuCc39YV1Ui2jRmXJpwtVQPCo7mdhXfj6JCQobUTagWo4gkgGuiG",
  "key2": "5R9GBmVL4XDo4yyYmwPtmrCF7FCPxkzpFfw4f1rMJkzVP6kRGAgXRHifeBu9W6zByaMYbAToKBiSpB9DNTqJbUAj",
  "key3": "4A2iDW4ctWmzwB5dVjbgfvmFa1nqPi4AjBVL83LjBmV8wWkGgeBRBAW4GztGqbjWqUZDY8bkYKJMCX5bitJgxEK2",
  "key4": "xQ8kUGXcbfYNwPYYnBRdnEK8qm1d1GK4oSRYuuBdUnUKPa1uC3z3XkHvYKJd9jdw1BSNyJNbXScGNgBCQqaPGWG",
  "key5": "adxNfWitjWSQxPCH2pzPZxAp1DJ18LLSTczzeo6YwBoFDUVeRBSUehJRnihjwNQ4nJitYqcDayyNYko2S6ihWpy",
  "key6": "33sxyp1QAgAB7CSsm9WZnajqoPqXGGwBB6ZYWvjV2qJs71ucLiPHcdcLLrnycGhea2esY9L3NTEfzaoG9CtEmTf1",
  "key7": "31GqxAYrMRpNYh89PJEbPAMx3uZ4UAwBMuVeZFdaJenTFu8qS6w7Yt4BwNKT1fCkNbSD4wUbfnVV9CFRZ8TwZy4",
  "key8": "2v1RiGa5zTonAPpFNTbre8CBrHLpCSmDu8WD9ck7G15emEaEhsprCNXArNDtxxeKkEcFAJYnvhkpQSjeD8coYn9d",
  "key9": "4cgkEmDtWwvBVVYHaJEqy7fhJ92vt55N7oxHGEnCYrz7xtANXVquZWUWLcWC1MgZmx7E7w2CY1JtTrvaWXbjpPn1",
  "key10": "3pyEQPYEyVFbZLXaxGFrVheAhmDsnJUjRy9a7jTKztSkfASzRWSbftYwn1X37cQ3ihMTwp7jW7KvmsxRH5124rVo",
  "key11": "3UUHYF6WdA3dUDE2nGnXiu2znp6UcWimpU5qz7i7eW7L8DViYfwG5oMseZAbiDYbxLUiLSQLHE9tCBPrTTN9wKV1",
  "key12": "4pjUK8Tq1t2Pk7SrVJHN6g2iNwZcE6Tn4ZWyrtj7se13Vkoi6RmQ51N3q5jCp4tAJrAweSaPBmLv3dGtYfFeWWjn",
  "key13": "5KBew6xrN93m9RJaTCkxzp3QF3tPGrBCAV4bci2qHWciN7nYgiQKcxyhem8KWBcktnLTsyp1xsMuvSBBm6VioZj3",
  "key14": "5sryD6yvSXCiPVBbJK9HH5PWREYfkKiXPvjKL6VdeDdmv1yUBhMmQKoguwYvGV7DZ5fhVUTxWg4d6j1Ctf4XXrDF",
  "key15": "23RQQXfrjUPB3NeJYq5ssQ6WD3Hsgz89abV12dTN3NRtzC9cuLmBkQdWcMRsnXHdt83rz34foSsA2u44qp9Cocz9",
  "key16": "WzV2mbLEkJiwSgWqTF6gHG843soQhxJsQGiuU7Aw6WV9aTFDsDErdjAhvjN9vHGCKhv6JNnrYsqCwSFVaHYZR3f",
  "key17": "374DJUnhjz3J7PcEF91ChYEsavrVQjwiGfy5WKDE69RciZygPxwC2nMfWBWatsQgPpG23mSKQxPexQufUM31SLG3",
  "key18": "SjjTUdTZR3MvutDvicmzjkqf2uYkGUyverBMFV42vPbVHk1djNW5CfgswJWTLzgjpqQXTLMBzbarhjQ4mMdRij7",
  "key19": "21LoypYDPsWh7uCjyon5gnpMFwntKF6gUgbfGqKXHPtktFwRVqU282MmjDidTY5p48GfpsDAhiKpMPrbRr5spLTU",
  "key20": "2xNEeGsQHWA2URDNvdddWsVDqCc3Yoyqt2wAcdUpJutyTBvACZNAEQjNnZv1uMWVVvs7posqGNUm5pSMfTC8Y5N3",
  "key21": "4waBvM5CgvEY9SQRd4V8PcYZ6Ri2fSTAkQ3RXM5UiGHY2Emc33WfQzbVxYKjt5xEZsLJNb4RpMuJnPHY2wtXQAPX",
  "key22": "656bNKue3mkAFPBdnxh5EzmTUqMsq4udfkr288qzZVFvSRyZvx5LPSTewtLciUTHg1EQTA4vyz6PmjgegTVMcw1W",
  "key23": "5kYAxrL3VgU5TcpwVnKNwcV7rDaxMZxFEo4dJgjTGo2eZrDzJM4evKoiQDe4D5bFTZVr62kF8oSkPwzThviqf8Yx",
  "key24": "3M4JGXtSFF9SgT2KTZuBP9pL1B3pZyuFWXxhhs6QkDL1Rm8R62SQBx2hDRzZxKp5QU6ek58jfj7cGiRGcVzgskgZ",
  "key25": "LPXLzQ1cLCWNtDNJon31cruqpfbCeV4rJ3oVNhhxvuWvthanh7uQQZRmademsWbiTC9e5yS91bBcmhjPxfK3F2G",
  "key26": "2VCVpK6GZpGEDApjgBE9JH5p4ww4EqwBsuttetCHfuUxYxEBqnwNDtSqUjVQxj9qZdVZUZcY4haF8mRawym7xdpn",
  "key27": "2EGLjbz1fDNTxzAQkb8s3ovkix4g7TwBZGqr1rKJ8cdJakaKV9cYtrmBRrGsrBDQHHASwum978T9NNUX56tKKXya",
  "key28": "3YD4wNQfxVdQce7uWEsA4KWVAru2hD2ArGgNU9k2Ya5m86QcHFkDEexTNEzWDM6FsUtgQobpJ34bJUdiVPcCYHmm",
  "key29": "46SYnMvLVMVndxBmpsvMBoasbWT6pao8p2uWuqiRzTcwTVReT47rf11ZtdnKPwX3qHRvtusagPihx2Qmg4bJQFBD",
  "key30": "WKUyvum7dLUPyHQBSmDpnzrSH72HDvtFbT2UdvsnptdKzXQNnCzNfc7wo7ZYMjrVm2eWaJvituFVCxTURmp4fZt",
  "key31": "y6Qjt8J2uHoHEyUikojFdSZqFJHTwk6dMJbpb3yM7vPiZTR91z9r19VBaTJ8GyWfuq6D3F3N6GqyRWzrLGY8k5n",
  "key32": "8YbVYSNSP9dQgCkznQBNCCet6n1QbVYLCLyBnFXwCBZMhTkkvrGeeh1aS3HYfCJ397q7JTFELhdCL9q3CtgGosf",
  "key33": "4ZbXcuQ4wiX2q5eU6q9wDHaU1AQzV27qSaTzZmygptK9LkUK6T1JfFHsYEALn6F6xnTQThdrdGJnA4hBbeHsLrzL",
  "key34": "2x1qKZvVXDrBZjAi5yZ93441vJUNEHohSVdvVoXBmMXxaqJn45F8TDNh54xbZpF2MbVFtTCpigQSm5j2RCK4FHXC",
  "key35": "2op9teyYSmdR3D86eEuxEU6wK4n8kUj1Z54dmdaCpKDHNLE4WATWt54Prif8HNdegV3wuY6HekgRVdJh598hNiFv",
  "key36": "5Yg5mv6X3E6JNDBF6YfjatksmQD7fPD4X8C677T7YMreLURDkSQuREpYRZJxL6ssPJN8Lwns8JAVko6bX6h2FkWY",
  "key37": "3f6rVnqgkakWqX9m3DjqsfqPu53qtXhQeXtr8yrbGhZUi2uGdjVbSspnijX1cgMcLz88nERdoviy8L8DpgM75fFk",
  "key38": "3so2rfVTX3FazDac944ZFQpU9hQnoJjEut828yy5jWmSZBX5vZnGwvwhzBCkoJnf686KWnUm7xbE1ueGBM1B51io"
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
