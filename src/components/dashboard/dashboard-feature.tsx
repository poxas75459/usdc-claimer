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
    "4keRbineLAAsVuUDLYNLXVLvqorckoeRjHPirPaA7j6b9jrc7yqeypcpuQga7YvJsQi1rjnKcVzQ2epTEGYXZvGx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3sgRfbaT8RSuGDU5Y12rp1gUQqKnCvkDybw3UuKToQEBM9knJtahWeqTUKLb5v7826YtGzuDX993t5jUQwi1WMG3",
  "key1": "4Fui9YTYePhKFbwGtiNHWQZYx6HRrVPjoZSeYYjJnR7WdS2icvPm5NKF52HoH43bseQPB5qt1okqdhZWL1DKTm77",
  "key2": "7stFBCd7S4ygpBXJivzh7bW6ffK9P4USqaNT4G2Jpb6YXcybw9s1cUve6dsi13x4K7Lc8mdWe3Tpfg5Ak8GJRAt",
  "key3": "5pM4qiBCYw91ApbWpWCiV7de8vKF4B87uyKoUZbHkd7ubDKgkkLDSRcWmtQ3xoaaVsZPhdU4m4GTE78M4HZHt3kk",
  "key4": "3A8BkXNDF7mHu9GTd74PGkgD1Yf2AUn9a3v7bdLkd2sfLKdnYJtQEb6NaapAiyeFPc9VKjMn2nm9xzaNcEshq3MP",
  "key5": "5LrNDAqiGypuGV62Bh61HzACXgCYG5YTAzQieQdwojXFT2o6fg1UxRmtqcEz6TbSueGQrdxhC6w7HwJbyNUp3okc",
  "key6": "FNeRUp6cvUXmsRARqr3ZqZKb2gXDVLer2Ja9gRwW7B8UdRxzufKwPJr5JiwTjP6kfE4teK3aScdw2eet8EEC9mB",
  "key7": "4uuSuxHnqcNbyHzB1va9KMCdxSBqf6nHqhAqDSzyVNFUGXfxqPkx9gdRNhWUhKHhVEJnXBNUou88Snij9WxLRP3W",
  "key8": "3q3Y153mg7WqSeqH6C7rbLpFbQtzquaJi7yStG6dEdQer1caTfeWVWuSKaov2xQmvLKBNgE1zBCukTAUHohsJeBG",
  "key9": "4eFBL7o68fq8Yw2nrNhWZ21FKHibxCTf8usdk18b8r6yfiVendvQtsnBk6pGumFH5xgXrWa66x6uW1hNG3DVGSkq",
  "key10": "3LYH9mXhERNE2K1DqeqEy9ARBGi6J4m7s3hy5upJStyvUPvTYbi9apb5BQ9TdA5AmgeLyUqNtqLA2f6oRo8bvVsp",
  "key11": "2Nw3DzyhYTbv2QC3wQhQWbL38AJKaia3LqRrD3e5Xep6kxHxraha5xmyoKoXXYCLGDsyNgUVZCf1wXsJNSB4jjoM",
  "key12": "3rSm22qGt6bzU5MQDmwRDNxzJJiN3i5beZbtEVaaTkkR41RvgMMfj8pPt1m6oZSLvuDyS1N8GjAVU9gFR3McrZFa",
  "key13": "3mHDUxSpPmcvppjhQjaNLZmfPKYxjpZ1DwAkXPzj5yHgaiK3fdTmGGsTdbFt41jreJt1odBZTCbXu5htCfdgcoTN",
  "key14": "2cGa492PSG8Xv7uJzfNABibEfhCzsoeRnsyJDtKqi3PD6y77sxFHAZ6oxCkwGR1aNLNcGLZgpNUhxu2jwxj94fP",
  "key15": "4DkJJTpN322MZtTFG6KG1x9n2QSqfXrfoa1RC1fFjr4CWGsZ8QQoGL9bTaTx669iXMxYhHdMpvWrukn7myM2DkTQ",
  "key16": "3t189hRTBpqU6Q66hQRbZXy5sC9wsKuXNPMLYqk6Hy4rKda7NAnd7ETZAuYCjDE5gLWLEa7J3UDcXAUq5Kp3WxJX",
  "key17": "2grq4PipsWvBvS2rPmxVhp785h2x8SvuCLxhivxP6WZUUQ3yc5NpmCp8opy4fbBtnmBGgZZUH2TAP1d9imjLZGcR",
  "key18": "4Y6DF3dSGv7tcond8eTxceDqfTrZcwZt8XBei6sjxTDmRJsqFFuhBZvwHQdzuHZrgBghctFqEnYR8Yw7wgXBFXWr",
  "key19": "3Ey7JGzuJ1eZzXMYczfnaYgrkSVF2jN8G94PGWvm54JSp63oomJS1n4cMHt2eHjkZSW9mCofiyu7iLoDS9nhqbSJ",
  "key20": "3SVHjBSsXLWZfyLwqzgqtuNF6ujAWykYWY3EubwHpxcKV52HG54aP7rNb8rXirX5ktFpgooDAr7Haos7KKVTVrER",
  "key21": "fWxWgfZF5ZnWEuLV88fu8U1TY8UuE1487KnZy4DN8k54WZE1kvy1iEniWya6sc7Xo4uZYUcAHLDskNegq9mmV1i",
  "key22": "5iqzt19J3meVy9cigcRuM5GnnwqSp1uvyGcinD4U7FsbmsL2GiRoE6w5FoMTCFsCD5RLEwAUyKVyS9UuPBNC9akN",
  "key23": "3233PNfc65UHWYgwv9nCJevhobgXkzyGVQnYLKGsgFJsGKRXbaDx4Y6yaPPw4GqYU9oS8g4ny8ZTpueEGtQxvhkB",
  "key24": "4vAcWLYJTpsbw3FdXHEV53A2mGHbLSCBkT77d8MHnJkQGBed61SWat2KCyXHodpAqkEutk4KA2diHEVtJr5Bhjwt",
  "key25": "46GERmj7xRqLMFP8cHHEJawPS6YD23K4LvKgZMUWbdH62xxzFfJXvgedQ1sDy19SCgisiw8NnhHgpAbzWtkBXRKW",
  "key26": "3tiS91FMLZ1EnVUAfCqVJrSPFxHRPvQYsd6Z6xLhvfeBtk7Uj4mRURp481vmqLvEyoQHrDQ4GAME6kDXadLQUKd5",
  "key27": "47hjmSzbjaHEmMFoSYeLoGM9MYo9WAfk8osvzhS9X4ktMyUT6NrDn7V8HPEfbxUHMnjtH3JDDeFpD4YXd9WMVmUX",
  "key28": "5L2u9zmKMqC3GGq88ZxrY9Evi39H9obtfSz54EzwQxCmG6dQJtsCSH1LuoE2cHyMs9o8Nx7kfYMkJdJhdFyAfKJJ",
  "key29": "4g9URgEgZfKgVfraYA7VLTqQwzSGUEQgokSFgo1vsbogWbwq7xR5HT1qDRojFnom9fVzeSbpQkG9mbpkm3Aymt2s",
  "key30": "55eLd2FfUpLzkQJCYPzKvWioMR5FDpRwP83owFFyHpm1JXxu5o9B5dF66ukPTNwXAvrChdpbQs5E1J5nNKzwt3BH",
  "key31": "2U4cRdop31skuKuwEAN8Pxo5gpfBjUs3hdRr7SkmmwshpprMbsRNiDuBatshX9Em7zFNuhd3vY7VRr6qbFdDJBTy",
  "key32": "2d1Cq6akUqvEQqxZvfdmNNKV1XabUGXSriDZLx9kb5LLUDXL1V3tWvpRryXqtje65dg6m42GGT47qj5wBiydf19w",
  "key33": "5G6KqVFDMj3AJxVskko5BDzdZk9RZGJG3edwCQRtVrv4C6Kgrf73fXYc9hgejMQhzPKHDm11WpiTVnoFYEyZPUvW",
  "key34": "4BDSrwviU1JV1DyK2AQDxDGvpVaYaoREVWWhVHuyq18kRMtBZRFALFRXWgc2gNFKvKVqxNguNqdvBxLqgUBH69rg",
  "key35": "3pf48uYN4FLgZrYCzGLNPEFd9DRRKZXBzNTxCFAMSXYuV4E5xRscraAjxChdNy8r7csfQEfKkmrj1wn6J4eUbhRA",
  "key36": "3mwTbiVTbpREbHK9MNoCYjb45zTSZzGHtXYJ4aRcwMQpwKftULh3DREkkvNVKWwg6hUaYvtcF3N4EVe2nKnvgLsc",
  "key37": "2F3DgRyfY2ZuVJqf3UoSHb5ecnSYzoihhYtKwn5Wx62116c62FJK6MXATgqTRiRQdvFCXSbq1shgrxGUuAvf3Qps",
  "key38": "5AN3Z32i4GHJ8hAU6y2WSRwyRxpee6Tn3ZwknSmvdPnf5Q4zCNDTXmm21XFCTF2vh3KrqeB3rEtgc23yMh4hBxcz"
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
