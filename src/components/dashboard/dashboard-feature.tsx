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
    "35SCinnNmuirLHhFtTbqVSZaqgNL4E6VPqAPA4Ky4uMto7Wv3baFcEHpVibBdhyokBaGA8GD2UKuKdeftLR6rjtF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4gdF4mW7VmjBaxsBHLQ8fy8rDDkwNKJhVfaeTKmn9MKfVZENfyUEvq3XR5WrDFRztYKqHvBMCoQnRuPA6L7Vo7r8",
  "key1": "3T2bLZBruK5vcYJk18hkcMja8kFeGtbQrh7HvEDMegmZEHBSDA4h2xHx3tZwdvMHtV6UR9LuTKqiUNfF3vC6PCch",
  "key2": "4SUPWaepLnJNXq8tiuyZCyVJ21MXrBkRh47CJgrWRAkJUD2hx6wUKJRiYjCzfihtxcLaZDC93fLKcSQV85UPZh1q",
  "key3": "4sRvgJwGY9ZyGpN3eKqYEUTymdRGz4ppZRcvehzUN2z46EUUdGWqXmhqVEBqSXUb1rvoN3NCsTymPk4pBWWC5wTf",
  "key4": "35v2Y2NkBk6kbTrZHaXfjEJXkq5SAPQghpLeXkfZSt568YCTbpNpQUHbBPVFXurp5amFxMZYePgW23VGCfSokPXV",
  "key5": "4DzL2rUa27XL3KzQkKwxRxJQ5ZoEtm8CtFxF8wqWLpEYMBfHH2LqoMbrncyXWgFkjgpVCS5yEfAHi4fcPnZJQohW",
  "key6": "4oLG9emnf6aHN9xHqKNhSiMrc7RC27SMmV4caV9LyGdxVdi4hVHUDvzugUnQtq9j8knMa3XnfxMgdYwQDZHaFVsD",
  "key7": "2gfo5wHbfMKfkPGZgTWRjScCKoFCTGDYfTxF5bfUQzCcoMm9GEFzudsXU6CfwS2djhijse8EWYG3hSQK27XRaaif",
  "key8": "z5j2tpsXUDNQnwDdQ7pBsmWRbjdBbKwkraWvAeyZkGSfdqa9EDznjxd4uJcSTdLYr9qmpsTTzZCzd3vpjXJbe4g",
  "key9": "5tT7LmRJMhdzSkLtiYe3yBipisXPTzygyPmMXa5qdCDKgH88EeSv8Ucsy2uadXyfTD7jqYtyTXCLM1XFDrkPqpA3",
  "key10": "5mj1NjGmfabhCjE9LFSvvoqyRewNeg91fEwem7dyHPHBcT5PWDjQmcgGEoHka9h5Cmx1Kr8jpxtWvckwsDixvgSc",
  "key11": "5cJgoTW6qrnuh2iwB1y4AX1ySB7SmWfnTamksoq2EVZhfSD7JgWHB6LXrdXeTXvEdz3nmtYbQpGdQt9cWytkUarA",
  "key12": "47NqctPDJpPamC65rh8Ztfeh9GpCHxj2yRtFmWUufCD1oWn2n4uhtJ3CdPZTcuGXyk9zSFR9ooFsoyobUtKe3a4Z",
  "key13": "5kkgNYoVPyMykNZ9EtgrhB3sEHcdsyMLsrcX83ovHEWDEHeUTYtCNkfj9jpLgkULZsUrdMXKFQKZdVmertmBHCUG",
  "key14": "61Toa3AfmtQdRhuoR1iRUKCfxRAw3YZcmS3q5CEWEpp2sg1m7wVtga69NLozWzqFrE8N48VJgJRNonLkfZG9dicn",
  "key15": "3o8Vi7nS365GrvS9ro6nY2oZkregJFAWskjzFU8JRbKLY5Yf8ZA8dR7JhMZ3V6E7yyxScP5bXsU7NuGAwGqXG3NW",
  "key16": "V8XN4G6ToVDYbCiWexFHMXqmmYCHiUFNo7yMNoFuNrUBnfAeWQEKtAeNpdaphyq6PPA15PYzpRUDo14V4Mr6ehF",
  "key17": "4JxBa1mQxcZZC1nZf9w1nkvP4QoguE7nvDeiuchy4jchCp1NUeRgUbGpZPtQv2KzzBerAZh3Ecw3fe5hTMws6sQA",
  "key18": "3PtWaiv8TL1Eip2ActcoF6KWXZiQmwwiVmE4X64D56ukzfnNHUVjj6yVJPSuF3LKZsEezARyfPVSJGopFU6idzot",
  "key19": "5GtxsjYNMM1uL5AT88PBRjsptsA3wKYYQTstYZRhd3M21Le8PhQX2eJnrkL19tVM1dZmmnh3iaKZW5QF3YZYrgrS",
  "key20": "2bVGHpCkKRic55QvqDURJq6PSSihBwva38xkX65t1Yj6KDHorr6zqzL2LPWr8Yh9G3nmVmqiS3LicktyxDjMfvmp",
  "key21": "56AAz4c21JstpDZ3nEJvyPEPWWKoH9TFTfE91ztbzg6DkMkfHWai5fp7Z22ssShqrM9b8J8NpuENakjZSqvUyX7k",
  "key22": "44Rmn2LL94J4Qv32GQ4Z8MfvmHtVaKSS9pnyWtHniaup1STfdC5qWwng2pucq25dpzrerWwSxbixkhuz8RY7PNz6",
  "key23": "zVre5EJVw6WjaUDMHoV53a1PMD3zZ5C1FpaatkPMgEVpYybCKE4Xe59Sw7d157vTCgFEheNQpZyRHGajJMfMGfx",
  "key24": "2p5s1kke1WhZpC8FPUQsQi8WG2XM88tbEEdhVqaZxum6vhLB11qiHMfaM2gZ1ertqNfPioEv8UM7ZKrVHPaz3ghG",
  "key25": "2CxcR4pa8KYrABdXuL4xQ1ZFCzRyG4QnZpPDZ89YGaDZhsAZu7pxoT6WxLzUGzBbvpmXhBeY481aBhTatsYfyTMj",
  "key26": "4Xi3Gzd31qyxEf1jDG1m6Dq5arMUS3cFeGqjFpaPUpFRkeU6AAQg6fdr9ZCuwfLanuibtYL5A38vvY43jbjGSE2B",
  "key27": "2jdvVSksf63TNLsAxfG2fCAKCihzU6pxMnyJKcXFo225aS2EtH18ZRTfKwMe8qKSUJNhhx34CUp2DPWV597dysMe",
  "key28": "3kgiKfGTvXvers9o1j5BBvKcm5n1SAvcYiCudFrwCL9k5ZPC45rhorUS6upYXmFAtDA6UigaqKeVr4uC8afA46sz",
  "key29": "4zPG8TgL1Rab9nBP7gvtcTpKB8DXZTC5ZPh4UtZXhkcNTxk7bSkuPQo2cvcRveGJErLNvzG9CVHXAf1Ac3X3MvDE",
  "key30": "2p4b22WbbZ5aJpfddikB53Jdi2grGrscDXJTSfDEBndWS6GDXVLDNf7tsni7LizANtaPfF2BsZWkAN9otm3QZG2B",
  "key31": "27Ujfs8y26ANMbuovobHZSDpjVPLN9vDtcL27QiQKXCe8dktvTJavp7aLyGqfE86VkuiYZAsdx6zSBuJdEm14FJg",
  "key32": "kfqgBnW72BUMSrV5xTVNaAfKCWN2oKPTTixdDWkguVqr34Vocqf4LkF1gQnTfBJkdJ9k75NpyzTmDipm7zTRQmW",
  "key33": "3amJWyXg5v8LgYsE1yXH1GjBhZCVA4ZXZ7XbvddZ8EYxAmyZPnvQ6fySHVPsAxcxpQ1MFhwWG1k8PrRZtAd5QJgo",
  "key34": "ifYr53Mv3qr6NcTR6BkZbF5AADgQ3rNJwXZFH3S5dQ3rt6Rftjz4RCmuwVKT9PRoMMEobsimJrBkGYRtEKruCnr",
  "key35": "4ii4ntsZCgHutqYBqsun2DyV5GcsAUW7UcsLB5ZLTdbrn2AdY2WRQbhWCKRG6YY8pnuH3aFRVwwBqXHUUrg28e42",
  "key36": "46s2i3wRuChGKqPhLZtSfNcqLCNZxmVD3jPJD5ApRWsbdqYucKSQwsuLBpU56HDo7BExQ5BjpCjvyMm4RX3AF9e6",
  "key37": "3yXg8ecjaNWCpgVdHnwcUGBiaSDeBzGkN22S1JfgTH7CxbQu4kbKgpSG1obdhvr9QTNefTetguFB92WZ3SwpZJXA",
  "key38": "3KVZgQohjRpjuPgPuR48MGMf9pTyxfUZDEoGukHAforKnzDDZxpWzwWv5iyPLjdNCbHN2FZ63jSFg7qqZz2EzUSm",
  "key39": "4cX3P5tGibUGkcjdhRwmdaiyFtD6fhzu4KCYQiBBPxuSQLGpqCobQUtnEtTzJhSgG8woHK8hM2KFZ7fJ7FyuYVxi",
  "key40": "25NDvgsQ36LnnY5tX9ASJRuK4nMfxDrTs8eMxTuTaSDSc4UuLkkUX6ShNmtnbWbKTypmmiYN6ucXZkgXqKzBFE7c",
  "key41": "34eYTNhiQFgm4N1ffUYNv23rcTeeHJrZ9zujrvFfmWSTsYGzyF11egFifm9vkKuQWFLCue4ZgJ8rkWBXTHSrLNEy",
  "key42": "4mo34EANoCnMwW5Se7qxsEb1rQwT8pY8qTYEh7sijwE5WH5ebdr2fgQVZCK6Wh2ZZ34Nfi4fGDALtRxp9dkpBvMW",
  "key43": "5ggRRdjbU2N8psPmWLhxAVZrsRone83QE9AApp4Fpc5wdyMCbpRMbNrV4NYrymmSAqFPwBEXwR15y85Q8Hhywgxw",
  "key44": "2rTH6N9fjPyZELA1xhYovmUsR8xVgwa8Z9mHhLffLp8nJSGZdnYgLsEcT5Fr1MuKXc7vGnsKXn5h4Sup8ZnTRaKu"
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
