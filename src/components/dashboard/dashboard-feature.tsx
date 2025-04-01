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
    "tGjQrfPFMrCJBrFLQZvJ5hy1f1quQKG4ywqRV2T6c23RegRV9kTxyhak9SnWf23eGi8Vt5RiLMfz2pAR427DiaU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "LfrLk86w1Ec9HmNN8LQGnVEQokwdMqfrSkX14wJUbpbE54eMdn8M41qkTDMqnLz34YkDeUah7cVaNttCUykqjuC",
  "key1": "2P8ZmsXFYsZLsGSiUipZgHWyTuifFMMBZQ2k2i3begSh1QtR1AwBbonyeTefHmC9WTtxJWrpfgzZuik2gJChPLHc",
  "key2": "42djzWUjnsJPvEeBgdTUbGmrs2rqwhjNXPsQmSMgBGJHtretJ1AZJo6DBbtANuM6VqwnbTRazjFcKw7VhXRMD1iP",
  "key3": "5e1yASw27onVCn3hNdWefK615ixMxnir8kT1TLQcShKYQ3F5v2ZQUbSS2HRdXE8LeFowDNUoGnCPsaNg1a3F96Ao",
  "key4": "3ZQL5JcPeBR3cYpfcAJaAc7UL5dPpsD9DGvsdZDxq4Dbyyz8H6wWBfgw19tc8QpDMHBjQJfdSDW3YLtLLb4Q25Zx",
  "key5": "4xkvWS8VmGxrVb2ZCgLyhkvMpuAgCivWFAc8c7ikEC9HP2KF9yygYGRwfJNcscKHrnHwKuQ8C9GPve2hHyiss8B9",
  "key6": "58k5zuZ2JzjtdAy68bsdktfZKwyx5kRZuAz4EHe3fkJjj1tfARUCWG4h9N47VUnFG1iFf5XxRikmgcgJXNe2qWKG",
  "key7": "3U67skqMAZoa6SwPsAZ8PwQNChcxPXspvKNkWYJmrt3zZxLPRVuvLY6PRCNeEnmC25NFaS9AHebf59M3XoAFPHfV",
  "key8": "4WaoxmX7M1vv5aHSdX2Ue5M9nxMZ2VTisn1SXHV1MStcvoa7KMy13G5R8dUVvtcEGpyy74MRvARMK4QjnDpKAygm",
  "key9": "3NXaksacV8wvkYeYHmEg24HHfbNYtHu7ALMPuFgChPezUDceQGVkBYBMfjwDMMgfS7wGu9ojBqBwEiWZUEqbFeUC",
  "key10": "2DtAfqGanwF1hBwiwncDdeGQrpVPzXz1wn9ggH219DSuKxwZcS6qNdAEKwmE9fUEkMEFJdALsiw4RbNndMZx2c9w",
  "key11": "25zo3xVtftU8RvyB7bjRKRixNeQezytmn3vDMjrdxaoM7eGY82rYv3Zrz4xXCUC93SkJ2xX4bP84SNWxug34cvHV",
  "key12": "42Q8GfLi5CE3RzRMcPDUstaHqMBqicuTQmRCEevxy45HSznE6eaWXeWHxdgr6rmn347Z67Q76eAaVKT9tByaAGSh",
  "key13": "2NHxmD4F87ddqPn5b89uLUw3Pvd3oo7wDYUro3PQPFPfaa3YAhGPA1KmP5wLm5A11S7vRnBTzKSUnjiZGPY4nhdd",
  "key14": "4MbvtWm6B5y4Rq8P4otjBMm1Gxg6pkRn9T5wtqwUTA6uFuKgn6hQyXHeoMSrU2ENfE1LepYpX6oasPqGJAhAUjGV",
  "key15": "21KHqpgUEjPdSBXU9ypRS79jwGb6WKj2VvMXJhQfLgQX8JAe1xwhQcZK4y1XLB13NyD77aP3zpGqfqmeG6yWSD25",
  "key16": "4bmnv5iS1YUu7Lr2VwaT3tTmxGspoMrhCBEtJPofPYHDMQq31zTL4Cb6ehntGCwfSCCWTJoDassMxjqagziFKN58",
  "key17": "4wcypFZVtFQiC2GGor42A9sgZfNZ4esMheNYrMMnVfDQtNRPp9qcoYApcKBUsnCb7ZPmUXSQtMCeDt2VWtC7b7Zd",
  "key18": "58xn2W2xRsg5DqMMstE9XQpeueqw9NwScdijNyeGci2MwqqknaBuwXp6UeCSLVvXXmrTmpQTcCNfa2eH387Ar1MQ",
  "key19": "3NQpvF7WA6RHfXe6CyXAC4aFshXwd7zFDvS9kMHeQCVMPdyCMoaTDBzsC11kJeqByGpuQsd8XMhkvGNFSmyCPbDm",
  "key20": "3PHxJkKN5XW7tD4fSYdzSmVTm388Rh4uSgQRn9Jpv18HTVR7iyjH9pb1Jpyazez6RdVXbjqFYF8awoou2dPVRbUs",
  "key21": "4xSiRr1Ct4uNNsTe13N28ZiZsmASh689UC4f1SjbY4iaPeUs31uVcGv8XTEzZ3v9NBvPoKpT5BgJBZWoz9qx1n5f",
  "key22": "24a7BwAJ1WcRncSA4Bv5YjzTcv7YZ2595NhLo42M3LZ37X4zB383sSXSfsZP97NQwR2UXyfmcbRWDQp4uZxAfZU8",
  "key23": "3FsKRwjUBgfJFuB8xP2yq8FYeG8pQqb9SdvzxXBW8WXWTxDQykrafHNeTse9RREXuztoBVkTqs7b9vFUDdvUtTmr",
  "key24": "2woKa5VfXQKZujSxnUfzprQzW7EMBaPTnaisLCGndvTrFyazqkD6cTmbpC1x4BYALFhuxvFG5wuGAxPU7L4sZAj3",
  "key25": "nmMjK5rsAKACrHufpy4JKWE9qxbLi6xfWu2puikmWKs7pafGWuAFT7q5dQYL2JuJX1ZjaH3qgimCQJQXmKUcPCp",
  "key26": "2psVjYDwdAfHw1kHfjLfEiJStM44rigN5qN1CTY43psNoxgby2htdSQEXGbVbsEBVHHXrQABaSsWGLf558fWcdzN",
  "key27": "tVgdnhfYDLop1mn7Fh1xa9tghDeiBmEbCDJ6rruC2FqBA3mYyuNerWF8Ghh9kJVUfufAgCPftiXBjSbdzhm3SLS",
  "key28": "ipJdMhiWCpgBkSkhSvZracNVBmtZZQeCWTcfYGmnwi48JYc5rQrciJ6jw6vZLnxoBvgTtBHUtCdFayY4QctF87X",
  "key29": "5jWsMNVA2xd2hzF4DuhCLJY2etFApB3PZibMFfoJBC62ZTcVcL4vwD8JVTLofD2nC94FwDB996Wy55wBcLfnqQCb",
  "key30": "UJpHvcuM4B6vvHzEtgx4ZH4RQpetJhd9kZTws3QtnfqjS54cjbwHAwtH8BJ7ty9VFAhFLbYyHcSmHekhxCgMSLy",
  "key31": "4Mogkfd4CSBWv24RPQFunqMVftpLt64SixCaLA2uBCtyer6z8aKB3m92jMM2G628G2Y6CQtGH7P3LU2yEs5VdnCE",
  "key32": "2ca9noeahPUEzA3xG48BCNSe5avNJyyi382RfzKv4p1hrXy8kecoiSAL1Vr853EaGhqyyqkFiv56fskKy2WueDPs",
  "key33": "4FKp6zgSX7aiDvAFdjNyGaQA3HWFhwcBrSZQz6hbYWBUEuXPKWQp3x3Y8Yc6Tr9UkKkhreoXcDjV6HrDQt7GwwT8",
  "key34": "2zqqfDNQqYkJWy7SzcChTNJqtvVJT1RjaqrUBrHGEtdqzXxnL8iMMvyvKGHoKoYa9DDWvNFCcn7pyYrNPGEfUmw9"
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
