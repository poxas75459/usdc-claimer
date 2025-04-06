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
    "5wtnQtaXcTtsovakrjkjTanNjL232g7WNaX3DckjhSL5sgvVikGQREy6ji7qqLHXCipdmvtktMoyLavegouG2dJq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66zyZKx6rMjG59tZA2zpTAdhbiroid8cGwxy4SGupdfE2svSwNGi4R3sc57DSFti5XdvoaHyK8EYCX8avnCuhhd5",
  "key1": "3tRFyujKmJ2RxEmHvENzCX43WnWGopYBkG9453LqDuz2Nm5SEKVi59SiX1QkSqDvupwYyYFHijrN3NKJZdmrYgpx",
  "key2": "26Ljs2QBBccZYJ3bv6ZCYL92sFq2zr97Cn5wADbM8bi2MQTkEM8TRTnQwwenQVqjuhVChwB1qcnVj7FyjRRDjk9N",
  "key3": "21ZV8u1mt4ybM69eSKv8oKibZDJFaq7U2CApRidF8KcBVbvojY1GNoYo7WiyZHp11y472uvYF9rH4ro963MZP7PJ",
  "key4": "55q1FrQScchuV7oQusQgZLBLRohcTSrk9fvwkV5irYDf33D9MvtNhLd8SQEN4wDmaDF4FkZGi7i9mmuePqJvEMUv",
  "key5": "61PTXxwWSaQVX8AM33CQGE9fVnQLXQGjhdSyHcjZn8yY2iQ7RqRt9rwfE9zj6cCjFVBJCSWnp2gyvsJ99fdVpWCh",
  "key6": "3zp3JTdE6RqAWpCH5toxtN4WVUyK2S5MTLBf77ZQSHyx9zoeMATUypg9oX9wz7TBECvGV8bahqTLYdBvpNT99oqS",
  "key7": "2gJmhLRDC2aVNnVAHfVgfc6xXFuGy8dtkwoxwzoMVQHWWPrs4YxhyhsrqsPr1epufY1yMbSFdxZzERFkE4KH7GrJ",
  "key8": "4oD3TjhrkihtSNvgwQoouqfx5M22tBUTV6QJeceQ7YJY1ZnkEKW7GVcRwjwdyc7b7LzRftbQAHsWztpgNdbWJ5Xe",
  "key9": "524vQQ2wNErukEULFBq3HF8za4wUZjV4WiuvQsCvr4ntkwQLUwa5qfCNTMRAZvaavmHYkmD4XM4SyHPNsqif79z8",
  "key10": "4bGGEgLDCHaxjDU3VTLde5BXxJnEWSEYbVb4dvS5bjFwiY4vBFoR45o6Hq6MgEtUCF3Sk6Sru3hBmPdqKvg7d3C",
  "key11": "3bNo1qGz8mWkHejasCramZCsmDrMKrT1UCnYtCvCWW8En583zBbLxHSgKhkReRULrRV6NU8nNL7LcnL55YS6S5Uw",
  "key12": "5t7LkBcNRbCtYAwmd2dGGHRsqEEmx1jkDBdws9q9VmLa9M7AydRiZ1Bc65Xk3pGDCT6312nWBU9MyKeq3Sz1ZvGT",
  "key13": "3HTp7q2aWKtVwndSzo1MahAJLWc5pBvc6RafoacH9zKKd1gqyvYeGnNwGPae3PGepSPkcZgx9VZ12vq2hQbW7yo4",
  "key14": "RuW18V879XeyoVuu1T6mfL2ZuedT8bHUFuX3FiUCUFUHAVE4JWJ9q4rL8KNczzmSgHVn4g5ZkRGqB4Qpc8gSLSi",
  "key15": "xjQKauKffSjtp4JvrNTxjBH2K2UE38gsMtx1qeJhkUSkRcxYJVj5MQueUvhxYbwUyMBAZRd8cjAeDq4BkTD23wA",
  "key16": "2iSHASZ8nLnQCtxnQ8duiRnEfkupuZN6TPgiMWhXgoDNEVvrc9cDiGkpRBxDvkRLC6tYZgaSSJbjcPxtm5At8hAh",
  "key17": "3bUxyqr2jTMNrpNwbsJhw1XvTNUHo3c3GzJvT4jrvQLSwWtTrJXYpT5jxedS2Q2SDj6xUSyuCJGh4fFUZrKXvBZe",
  "key18": "3PNfqTxh2v5ZAkjVTj7eKJaZaXM2AEcGWD3yPcRNQaXs1eiw644qJg7xddmwsq89B1KB1G2m9ss25UBKymKLazuj",
  "key19": "61E4KiEy9AmWJnQXVa3ySJX3fdCXT1GXH5eYSLXuuvip61th9vyfJV2GPZMuWxF3ohWGJ7LjCiUcRFtLo8CH1NR8",
  "key20": "2bnRvWejgQP6r5R2bhJWLNVxuaZ72aku6djGBnyYyzQ7tBEULMFyzqtf4BMRwww1cGmdrSk7yRUcJDzyPTfHqTDf",
  "key21": "2LXPctpHtW6K3vTXLXJc2EVHzSSKtSiVPnwwaBAW1mpiQcYYfwQ3mXgP3Q1HiTFk59aPHFRDbZizpjHnkfAmcMxW",
  "key22": "3hwSEWiNtvVVDZnUCtG5xsS5iAjEX3s4SKZZr1zETxp1dZYZh1ZetZ9G38V2xnPzucb5FaU2zXZYKXmrCFD9u1kS",
  "key23": "3FMAjftrVjuGq9ZBegZahU1MoUwFjoGP9z1md4gjVDtsZ5LMXvBDTRgG9DXsxJLBGq9aEdACVUZENz5m2Netww1f",
  "key24": "55yEoxpP34GLrmnmfbnnHoy9UkdwTLpar1CkvixwP8HFMrNMT8mLRhQcnu7g5aFzo15mLXNW51rX1NaLSD3cex2v",
  "key25": "3TyqaZnynoMfVVFbrNUACBF2PrWVpxBhmKRxxTVYrcy5HWewh1gvaQEfVLfGffHi7ELXaFttQfubNUDAx4tceSCe",
  "key26": "4N9VFTMApvhpRWMDDF2goMjQ9bg6g9zfRR7GvHjCoeYwJTELuJGG6kXBMZ45CjdbStCN5QCFA8fs492iuYyCBYKf",
  "key27": "3AAeA13brnSA5sFVDBmCh848qgbiJq2SNBdUajg2wy4AqC71iWFPsK5mCtqfZ9g8mV7Eg9vSE3yWFyg3MNbsNh2f",
  "key28": "5NQwJE6QfT1ix2L76ZXsZKGpYk5YMwBNmVFvw54SSxggBodMimYV6fF7Y61nve7PHwZmsfMBk1v86ddAxMEJL4UV",
  "key29": "3um8xDJsBn9VPj5Dxv2kuKU7DMjSNYvy9QZzWjP9HQy1KNJQBZsMg7PoWN4RUAJNbY7ecdMD3zUUQPN1GXfVcbTA",
  "key30": "3xYsWKf6J1vm9qHv4nQhF1Bqrr2USvw7gcns9kSeWffs39HUyuhiP5Zf3GBsuVp27uzfN6iTCLdB9goyb5TjMW6m",
  "key31": "2xx9HjHZ1JYgmviDaxuamcuNnGXhsinYkfjQXVJPe1TZL1EzNDFThVjr52taTbdVGWTBYtRKCSrexS3i6X2qjhA9",
  "key32": "4FHXP4S2pmp7jQtovVEhmjJeaa5LB3v5TNDW9QAi7fBGhFMaEfnGhgr9C1TZKbp5DvownPbkKY1FVEVYWVyQMxSc",
  "key33": "2o6ixpVzf3mWQp9r8CHGtB6tnLr8xtZT4BW7EjNRbzwZbRK2hSZA9GBSpgjxzEnWy17s22MYPWKdHE16UAWZ5YTv",
  "key34": "sea9BaHAb9rT31HX4WjGdVefYxDbbTSekSjtSDao1VpfgL7vkEWu1fQcfNqDVDDuAwPPwnP97hXTSWCBaDjbmVg",
  "key35": "3RdYTdQJqXF6L7dxUNobNxdmYNdF8V2XFATD7ocDhiiuVaFjqxa9aAgwde1BXeGk768M22vL5Tp7KBuen56raXBH",
  "key36": "2AN1AzwNxiNUfpV8huv6fLgNVazsF2Gtczr3nLVwSQVVTXVMMxgQkofcDkP8uUxXTXNvYN4rhrJmh7tka6eqUomS",
  "key37": "5cuCKBYusNGjy1D8cstWN9KhCKahfMf4yp6pnNen8FQUtbrAcfS2Lr5Q6XWmP1kJZ4mAaAnKtpFtbAuXudaJvuUG",
  "key38": "8xsjWZXsdnMeffz2en55YvpYg3t2i5fFTqEntJLmmh9xKfHSfec7XUpyb7m58zc5KSBWLwgBTfpHRbtsHg1ZNCG"
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
