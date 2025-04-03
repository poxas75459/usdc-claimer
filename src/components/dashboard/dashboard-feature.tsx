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
    "3WgMF28BpJHSiuvRGrbCCRsLhFtMHH9VzwnwrZ9f5ZDvYzdXksSa6Yihx3da2YjsYyj4aEo5UzJ346iPB8aBrWfp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2JAS2JoRiCvrxYzgMSiDBw1wZwRyLewMWbBJZNEZn978hLMd6DQ8iTL7xm9yetEUJyfD4Npomw6fj2jJhRrxVCHL",
  "key1": "5a4ezHjpr2pL4onvVq9rjEs815FbLPN46MaKaaZ5SyNkJVrAqpYndpsT5nvGQrWk9czxEV6UdZhXbQ1HEF1RcK4L",
  "key2": "2UaQM3P8H9STg6dFHxqdG7By9qGwHM2k1SAqW7dDmsmSfFATJKovNLMWyPhyDCA4WuyagzES8vLCVPoMhcNaRukC",
  "key3": "4Xb1rKg2U8WUF4ydiP5zmv3JTG7f4CKM2rKgthMy19RCXnPp4i3NHUCp8Gywa5yrZw8SZBz6dKktcBqbxWr9YUZZ",
  "key4": "48MSDPu9FdN4Pyd7WSuJNv4pYBJCihGpF4B2da6se6FRHSLBPAieHg9ryXZEDmjzSSu7bsw8DkKmjP7KhrzNy7gc",
  "key5": "7e6H37pLEqhc1wvZDncqgfeZ9ZUYu4dBcUCk5YUzhSXip9rh46jpcznWnjo5AqSJHPs92td9SZ5vYqFZtGQTFCY",
  "key6": "5mufinqFMH93m88Rop2aBSWkZuw56U96Y5rGJVvmarPdkB5SPUBDKj3QmVWUdjayYFAcqfYpFjCa4n5CZqoLTdHt",
  "key7": "23ewGS3UgCGhYZkXJ8gtLJnSbQur6MGk7UVXWEAWZYnzskHKZRsS2x8BnrYnPNRy1e3WGvEAxMacAFmcLKdVkufq",
  "key8": "2y8o9BKYSj7mFqcNrgUNbu6SCkyFrkqKqVaFTN9yWRTdxFzJghKvRxiVvcuW9rBPK6DYbeZo6QAzfQ5WYDtPMNxG",
  "key9": "39rF2bNMzosz3bdwiCMH14H8CF5i8vwiqgRygNP3WpXnSX9AP24CeBVscpfLMeMe774naKiUaMM2WiVUX9D2ECa6",
  "key10": "GYLfFJYEcWk45QfLJZRnBMZ1Pfvb19EQMD1DeXchXQ2BTobNput6tewmHeHv9sboMrcEctgi5VWehdjSe5LdJi3",
  "key11": "36Dr6JoaGgYd5ZQwCbsQwhe2b73PxgcPz5XaiG77h5PuxE6f6SrdrgmBAGGWQMWd81xgmzreeow38YEUA3gK7Jgx",
  "key12": "4ixZQwaTgMygkdDmTfUaJCS4Y14enf4TxwdFqVTGEUvJnQg49QZdghXBTSbAji77fcgSkdjbkJtoUvXtwvkTGVg4",
  "key13": "5HQLzKSHqkVciW2GLv2rddLmoTGWz2KRurg7iMCrzVX9gvdkUhZMEzCCqEVXzyypaXSJFkTSGhFD3fcP7dhBPuib",
  "key14": "577hsikvosDy9KbwfriV6u3aqkUrmTUmN7ynfsFiLxNEdHYTjH2hZUZ5PJfxrhVnzg6qd9NKwDTbZshLMSRxGRdm",
  "key15": "Y2xG228rUQf46jRbWnNu2nVyxxunbVoLueYwVvWm3EpVoz5woQ6AUJqVZXVSRa54eSQ1uTRvvKLGdHQTyP5o2dh",
  "key16": "4YkYLpBwYrtkt1tqi4d8rC2AdWp26Lj9LDAUxmq31ebRLVmbQz4vAurwDVhBFxapVr7qadwWxFY4DW9TAz9iRFAg",
  "key17": "4YM3NqgKh1b2i6wGkzHAEDVGoz7MY1XP6Sd4wTJ2F59mQsv6QBRtkyLKxRnJbZBZaPNSW6w6dwsch5vAQwCmSDLV",
  "key18": "2zprZB8JpYG4wsPrP1kPkBBXCL7jQnvgnnxMjF3NZwfyVzfyi2DbPbKfZAzk7QeJnN8YD7zaas4hywJtrmZFAgQd",
  "key19": "3qhgCNUU1Hnz7kiJtobds68HdPjKxMNqe1pYDR37YoMTBCdhjvEgME6WVKEJBPMas4WKdMkPwrzibhNLNo4qwHs9",
  "key20": "392iVbzWJp193i14GB955EP8TXY3JrE8C4yhSwK3QUYvvDLUDnLMMyuf2e2sxEoxPKWRrtgGXSSyx22hojcMWE6z",
  "key21": "5LVoaJnWQH8cQMCAJoEmdfXRozuZVUf55B98C7RpJJKU4z5EXouVbj1tvGUJpPoCxScegtQJT5X5i8WUbGPfBPo8",
  "key22": "5rKV97RLQXvxkWGqcMH3fKj1yZ4mfov9dnd9tNkgZCosJ2bku46XSoYyLFocgn59BJNVDk1QgVBvWzLzLo1eKuQk",
  "key23": "eJWXqczL68oGcQzC9iXoSDfsrtzRgpPXphsDy8ToFQxnBzfh1mDvAWJVUWAp2DAzs6Cr2a55gwmZLTQew5XAmu5",
  "key24": "4kRz52vSNAj9i1ycgsWtSbhx3xe2F3LgXpdWjB8S8xNy4gb8zYwUNGdWc94wgzwgh7PhWkKgrZkLzHgGYYjiJ84m",
  "key25": "4kmcqD9UhLQScVVwsbwUBKj9j3WsrFvJnnhy342BJBSy6iUwX79ZycxELVD9P2ydDG697nNmY95yYQmna9gSRdB6",
  "key26": "2BYw1sfPTCcCTMQBfJtNGJ2C1X9vuTYbYQsxCMQzMSM2iWPysYQF7yNfxsR4NphhrDy6TFrU1cwrzUodj1EYfUmS",
  "key27": "uco4HabdEWC3YK8MxZJTshqYjvhFqWUneNmoGbq2YfZvYCjd1ETQ4s4VTcy5oqqWwaYHvdzjr5T5teYdbBh7ZF6",
  "key28": "4E8kh1tE8RruQeFrv81279n25Xfow6NPzzhm7uyiX4ULUjsdUTSAFbCMijzf5a72mAjbSk3Ph7zZngASqN3LNTkK",
  "key29": "66TPbv4qAj3rujihdxX8wg4adTEA5f3Ks4vGU3SS1bd1fWzR1BRntaYoNMoezbRu31YJFoevU9mWUZNj65Yjuxex",
  "key30": "23rVd5R6aBuCWUB7K48AEAmE8SCthJfXaY7T8hGcohSdFPoNMrxKZy9YJuHUunKTnxmnkEYDuG5aKdUAkVWn7mpE",
  "key31": "3Gx5VdaKgf1d6KV8tKKyx8oLw83vxX9ii9XiyyPVVAM4E3xnnBa27RVFvgPMxsExQCbVBfGsaoQREBwkMMh99GbQ",
  "key32": "2DiqvkGDCdY1TTfeoV8UmU7LKAM1Dzysk39u7LQkS8Dj14tmFujhKf86fyYmdGga9nfGboTjVCug2epWeroUo5zA",
  "key33": "3w36k2yyUEVvsVFsMTnuxS5FgFePmpithqkZBPaF7Do9JhVvXr68pFjeP3goPKE8GVe31xaZUPtsB2731yxSndE8",
  "key34": "JN1DAiuadmMxx5Uawq71oSye1Yd6eTYLWrKH5zYK647v7N6VqdyuczcS1ePbXLyvR89ptziTGpHemc67qjtZLmD",
  "key35": "4dKGSxqFZgt12tqYtUzuM6kBNaRX82VogzMEqfqD1QCGQ3qJZJ2FbH8w8bkgNj6Pa23Ymhu4V2SEf6GJcL9PBNYB",
  "key36": "2kFrnBavA1ZahQeGFEe1NcsKqphRxtdmZxPBwhPULweMwHusyNkzZT5NeDrhdSL1Cvq8L7jy8iaWU7RSzJ8MdU5d",
  "key37": "4uy67fi2inr3s62RyqrQzZZB4YKXaFp8sXjL8urxuZsKHgM8LECG5y5HC1fwzpmZvWbyT8cjGvKJkBPDdnNfJZ8r",
  "key38": "3nXKGFLZ59KibSP8BgkRKcP7GKYHw2HPeRTeFiimchYqYmB4MSNhW6bnmkWL44hftn7osULMq93RMbXcGaR2hWSY"
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
