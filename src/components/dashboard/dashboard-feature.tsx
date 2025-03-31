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
    "8LKfhAVgr5ypThHK5UgbEo3Poxd8eDtVrwRSLcpXJLNhGdXCmYv6EQEzuVHEarXsBsMbsn1HxfKTpwfowyLWBAo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ExWBEuKjSJBtHecCcR312Xvwa5bTJ8obGdrvy6Tc8ZgYYNSifUSC7MdSkp3FsvQVicvPesGvrAXHWJt6hPEdZX8",
  "key1": "35JdhS73Bmp2kt5CJnDfAtyrXNmh5AcBmvDCJc8xFbhWzaunXfVYY1nTTLUoNR27PWBNFfJAdTyTUwvpCN3SUCYM",
  "key2": "2G9zUgav27NTNmk1pngDGF5JXQ11F7TJymEWjTsXDBxTekHUhjqLZ1LqKFU53bv5jKYbS2wcLz5NE3NiXYR5ohgN",
  "key3": "4dYqebCfAGhJvHHiYq3QJ4D43dKUsCmNwVsq4Bd6iaVk1ucgsLGBdBzRvi7MoGGz6Ut4M3mcxFkNwn961ETHMpEw",
  "key4": "56NgzEVxCd6eQ6E48F2KtwtWm75oqJdsZxni4Mxp914Us59sTEn2nrMy2GtVZgz17TtX1RxcKWaV8SJCtahinSg3",
  "key5": "3awooAAC394F64CCAANty1bZsQppB6nVNhaNhXGWwnE9py8uhyvUd3R2kKYPbW94wRNRxbrRzRbcYAUn1Sq1sswa",
  "key6": "2ofrP5mEXWjAY8HyWFbHjpvaPAqzsFrMH1pwYXEuMioq3WydQFdLMCqBCnBm8YSBPUwhdyEXimQ6RPNf2pezazD7",
  "key7": "3u9X2LH4ghoivwXAwwof7JQwcx2HssAgRxrBe6WRnjNYdQxNb8nzj2j5FMUd4gZ1hiFExiBXY9p341tn3TeAYLmi",
  "key8": "5jQDX9uqJ8UKvM9t643orYGdfSSSAweKHXPu59ziDsJ3GT4JTfK71puZMV5Bj4iNkEn169Ve55xeMUyxEcBhxcRN",
  "key9": "2ySgNUUjAKwTU2v1iFX8FHQfN9PDzXZdd2wftQ5suLfpzKCi6VYTTuJ1iX1zWmMfFk8MPR29ZA185jrkuJU3iFAc",
  "key10": "2zDxtkxhgXwtpEkndBx58uZ3MMuE2WjjYptGq7hhCf7mLAfSdund5mxuebTS8ohbMR2dYJnTbWtEKBtAdW4MWWWE",
  "key11": "55zTT2E49kRrJeCVyjyqQEyD94f6stfS9XZKhBZgvXaywaZJG5dymTGSGuvYBQgtfGujb4xjaMc29ND39Nr6iUwW",
  "key12": "61AmNivfUEtbcGAzmRwVKQCJTssrUFrVjpXW4VLX9rhWNU5piQiu9aFcTCKeG22PRfbKTTGinQyC41TjCyTbMpv7",
  "key13": "4S9wDsj2AmcZ2mpXxtU55njw8dcocZDf4uZfpHMEKmuTmE2ndrLASJZVUFaZNwauX8eEM8gR13RCLkdhmvnRwK12",
  "key14": "EyfVvdxDbxWSHt1qWYmQD6ZvQsahTFQ3vWSu4wUNTyye3buYnxMmR5PgNcerAztbftn3vccGsRjoPqwX9Z1wweF",
  "key15": "3Ydp1RQCGqejmshxcDCbetz2g9GwaBsWxmQi567WDwB48YFhyoss51McxKqdWwzQbsNJuaGave5nqVzVNe27Wi8z",
  "key16": "KvR19r9qGUUiEtAGC6wfbrvKqpSALFFFWDk8E1ox7jYCsUDQ1NzbnyzuNg4EdQYNzH82NHn6d4HvKPuHmKjurnJ",
  "key17": "2ustZk2DAjjUzhXMPfu2Q3BdhF9sRfk7K2bKCTQfFbZfRMieZfS4i7WmrTsPatvuES1CrgSReg61dxwvogv3jaWa",
  "key18": "DmtwoUMVDXAPWFPVSWZ7CmTZ21X365exP2AMpyanSoLCvaDwhCqjMZYtTkGwt5yqTvjconEokgZW5NCpQdTuTYZ",
  "key19": "3ptinRrsprgDaSuXaHQ62CJecN2ShA691gUgt8APgy9ejwu6KnNSstgLT4FcfK6BJ3eLfvuwANAXiS248Nsc3DR6",
  "key20": "3oM3f4qTLnb5Tm6MzUPWJib9APiKYPEKdqFgtHN2oZnRhgqAvq98PHK6vxbQPRtQGomnVh6D2mPVHQdF23XdJDTV",
  "key21": "5Cg9BSWtpUbGdn7VCfS6UP3P76TMhCcAXAWYS8vYuv2j6RYtEcuLeyXVuMC5gpG2AnqMMrcGQS94mZLt9QasXuYL",
  "key22": "3RPdHeySjNBARMaALivowp6Ubp7mAW9p6ZJ4zzsFpsXnNcECAky5cvJxGXX9JRcRuXosUUVSwEgV4JauEySacPET",
  "key23": "9HqSiTouE6wwnGBEVnihQ6MMimxDFFC6s2KPCfyyMWQAJa9N2Bq1dgvogUaCZoDmzP8t2DJw7Fvy5X9XWyAfoB1",
  "key24": "4ukrRE7ntwhhc7YuVyMdYio4BB9DMBwzRqJyfsyCx9WSw2UKjDcYp4NwHqm59yCYfFwuFCZpzZQ1326f55uhguCp",
  "key25": "2rWZpAXs9B2NRgRWWzKuAFhohQQ5GY681GMEshPKmYoiW9srWrmEkcNs1AyFmc7UgibRzUiksjJmsJVS6joGpfcW",
  "key26": "21CtkB23MHZVzFFwf12cQMuTywdBHNw3dUZkkP2ChjWacwS15MCYWWPHubALa2NqA7Gmm8Ve4bCtAZRL6yBcQnrL",
  "key27": "26BrTgPBZyDkqnU1kEpGCMf4BcfJb924A6YGqqwAbnn7YnijfUr8kCaPTnYyVMQcAZt3WYCbVXgKpW2gJKzd6wML",
  "key28": "553q3WGYimQfCs7D9CLEpZtG1b46dgQaXFk5Zy3vP4iNDAZNobqFjwq99T4cedfJEYdDVMZ7z5rirYLd3zXKUS3U",
  "key29": "4E9777qPQ32k5utZh1VWKGFG48mujDcG3v3sCdbf9jrHxy9zwnmcQc3QoNJJXeazSAW2CrgibhYQCmVBfGZg3J4u",
  "key30": "FEQRTigXqM8PnXZYyThNRk6Neo4Qjbup2Bu4GfQH23MsSzf7nQQ4htGPwNgJnJhoAvJBuVopJ5itn7Yat2ynpHD",
  "key31": "bm4JtSut8AguMTQG8fSLmwUiLfWuPGpz4i81zU8ZZ6VDt6ptqL8GuYEbR5msyDba4orYcAnDyGYZRg4S1Z1LdDX",
  "key32": "3PRuPgBNRi7J62E9W8zvtTRdYLbkqAbfRwgogAgLb7wLwGDEbEED8DX4iAwQQLRP6VJD1QWpEAZDtVy6nSMByPYv",
  "key33": "2hH6rQnj6YDqayc3D5YR94tKTCLKRY6YC3Pk9FvvPrRy1PAFZdY6bGDHyCFzrPxWFT8J6w3GvrK51efSiRkQ4DS4",
  "key34": "55yqBXEHWHYznrjKtoqK9P6eoiZcZRv44RhTyJrfyq9RDnZ15aaAdeCFEmTDQQC9f7DSYay7oYyU7HUNQa6zFR9S",
  "key35": "pfPgd6WomXAQygmb73cPRJbneBqJXbJw3Hvye9QRn17y2eZJMTGSZEti5GEvFrzGyLCJfY9TcmseReXPdDgLJSX",
  "key36": "3ZNaeMFG8PjDBUKcwMsNBxXgjfPz4p3sNQViUjm3ptqJDTpBB75nyywiSTdfRaY72rCTG8hVjC1o8vJk8H26YNVL",
  "key37": "iiXtGopTmBopcnNYPciW17Tj3DuE4eaSdwLLDYiCeotKZXLds4T9jnopkS7ojrBbazSEzshJDmvn8fTeDWdMVLe",
  "key38": "47FJPEcZM4axmDaYqcg5fYRHyaKbHjWiZhsYsCpnTpRKsSztU2pr8wRofPoyMuSkV7Tx3A6mYe9tJP7asG22vdGy",
  "key39": "rda1SJkenfAefHfjXUezpcXZQECaq2Rf85g1oxhJxY3Fm2wLPng6Ndyg11myqStpsWwmPavazJDBMi5HUfd5KdZ",
  "key40": "3e8T2tQJw6xMVZHEYjgBxkc1zpg8pxD2SzEueA1KrDjXaPSEUGsHAJykuXecvxQ1JUfP8aNqer8euaTBtpGAyfXy",
  "key41": "2aZCqke714vJXThdJFRJsTViBEoEiautEox7v4WPSDz2GLVCvEQmuj9JBPJfo6dbXSNRNp8Xwit2heaaWHrE7K6h",
  "key42": "5hWBLksHDQs5y31pxX6Jta9HHgDBrPinVxuvTNs2yeGHMLJnwZu8JhDK3qPqPfERpBKVrnVDJafL4jgBd8ju2GGJ",
  "key43": "62NbB3K6atcg7yTHHUJfaQtGKUEWQpnbTjPAEtdAb64zQSe6VE2twsD87LFerMzNVWr6mzCMhbVgYmtxkkV2rccR",
  "key44": "YXc89v8NkMgWPdz5XADoNNok7Gmvr89aALsRn5zATd7jF6a4o1fJsJz5jnSpmNyoDd4uFZw4SHXikeQMY6riXiM",
  "key45": "2T9T5r8yK5dWtNTji1hX9dcmJyTv145982dVxb6nUvN8AkmxGTrnu9tKjQuBmHtD1GGQP9zwKaTyqucVKdincG7o",
  "key46": "4Dnn9g8CUwUtw2j6L8J1mC7zpSV7fXMpe3TpvAhLjzeWnzabnbtWBDNqfvWz1DNvuAo224c7Vh1E5ojm2hnnPzCh",
  "key47": "xEMv5PMs57oj1QRYoNdf8513ib4jeaZQaEKyNdqk4a1F39S5BmxmRo83XRunLo797ted4xpLCpsknNfPASE9izp",
  "key48": "4mscETqEf4ipBWqxp9GTpbGLPqUJZt5rYEP7ZcLT8d9kphaWTxgFwxtvg6JRTQe5zd71kEaAYpMaMfyLTbRFL1hb"
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
