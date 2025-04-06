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
    "4u44FubUp6kqS4zfK3s9BhksiGKZtiZ9S3Ba9ZLVJYbRxixCwVhefcEKghutHk9U4TByuFaR78y4n1fH2Q4pmWQS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "znEYWG2g6BX16SAxMHW7jHtaN1DXGYdmc2fnzy46ykanaiFi4AaqQwC4LRae4sZxan61qU2NXBo77t8RXURYrpV",
  "key1": "5oqPQJUnqE6hVyfhTs2EZXZrdEDrZL7wYFuZRt1MbX4aHZ6itgzWjTmasvRBTzpFVCZSjygxaKqM7jKwfiknSa77",
  "key2": "2dpz3RphPN7LPbxa3CzKumPyGdbctwTreGN2MvkGvo7WPJNrBzBksVPZwPrz5c6k6pv5D3od4xQKFas6DA4LZ3Y3",
  "key3": "5Du7p5tqLPEDR1MruwRu8K3UctMBF4v9yA6jsv9ztZZQsvN1ziyof9onwRGR8uLPhVEkQQTBwA8LBtJsNJRZMnPM",
  "key4": "48rMYa66dRJtBDW75FoV3r2MBNDYDsgkE1vGeQmXK5fw3ocjgfQ3ZFaQiXuDFwuGEJqkUmo4haCXM4tvADtn4UAc",
  "key5": "4zXmPRSt2PF7w9iC68dooEhTkSrNKvdFkDfM1S8VrzpCSG694RByi7kcAsa3ypDemWA4bnW2DDuoFC72wdH4GP7",
  "key6": "25egN9AGTADnhRsJFUBAjzhLkzSAXJ1Ma8QTNJbwJLDLmUV1Vejg3TedgkXokvXNEsDN3r1cnfZhQ5qKNYPUEe5E",
  "key7": "T1jkiDvoDrf55HZtoUp5GMdZJ8K4ypzmC1fSTRj44mSxmcoUFveGmha2PdAQfAVoL3BXV8HAaGYdxF245DT5bMU",
  "key8": "36oBi7MXRt284XkSDSQaRdZV4TKtSFagrvVaDd6QDuENUHSUXUYYSgfgYBiWdiQ63F64D9iuhB1cuW76NrcfPHgX",
  "key9": "7dBM6qG1JK1UcnLi42aQBrAQdBXggAqaa5fUeF54kRNyMtsCmRkDfLShMzqzMWCjgrEX6xNdpZeYiyYuocgK8k2",
  "key10": "3S2GM1TmwanLExLE82YsdXSTX1qzBQLAVpRDPF1j9KytEgJT2o2hwENzxHEvjR4i35TE5rMkMba4znvbHhKxs6eG",
  "key11": "2M5D3fWvPLRuany9624GMek93w6Hb3cPDMDLTDC6wtfdjS6xqaVf7jAR58DTz1H3dFbRtyJi4Pb3PXCCGB2qMC9o",
  "key12": "3gGchfHZnym9hriKMhBCoxyC48YT5qfjXZADjtVmTY1VS4TVwNsfaLL7fFqHhm17tFdXgKzioxeNtgMia1MimWRL",
  "key13": "5R6s3XRhq9xwz1i4xRYc7N19ZfsB5jcgguTjmMU7JtrGNS4UobzskJZCGthhvU28zxgTPmcx1KornUYt2KtZ1fMH",
  "key14": "3Uw58ve1rv1wAsty3VJn2ErJwZ6T3LiLuHNyQ52GW5sgaBNL9n1XWFe83mkh18rk49h9GcKy17CXFSp4sn9HkYYv",
  "key15": "sTN6qyXJMm6W79xv64YMbHzfNTe8WAVWkKHu1nryZowmWyN3QgrCV9dx5UpnvYw9f6bdJLAmuwrc7UCqyEjhSPj",
  "key16": "2DgdnpAS6RckKK3YdxCnBbJnRbbe8rAtFBhWJKE6jA44LDkMvcf8sEHZ9mbj6KZnmMfRdNqfLhtzfZsyuNyDVVp6",
  "key17": "2hjuKagrirqS1LCXpjWQhgu5xikuNdFpgrknQ1A6JZFG6rYUjJsreF68EAB3JHZdNRzgN3jaHtFDZsEc7ybNvbUa",
  "key18": "3Ty6SMmZH569KcywoaX1D21YYmwNEs6MeXjE1nq3Zs65WPwhZ8CCmPBZ9mjtWxsyphVX63VcMSqDoGBDmLn8TLrN",
  "key19": "2xv7sNF8ySuc3JoNVJqMiwj9xoCSsJGwy7nbmgoDLyRAwZo2kM7kR8i1F9Kp4B93XSVrW9sn7fewexw5DMRLbUfw",
  "key20": "4nn6q7jgNMdSwhusbrSEcgLETLfexKQqamVTS9QD1hPKEpjH2XjFTZiAfhfSECXZCQcW1PLHsmPagkkoqcCjnfQx",
  "key21": "57Wp9awVaAeeptJc4nnRWvaJyaTLPCGjgwoJF7LCVJcymJVQaTUyqymgJsLUYAVozUigYyc7G1kfvet8r8jNCNqX",
  "key22": "oHXr25Tnx7zbBheAnUeM1iUw2SWCGbTCVV55MoVS47Db6dzuvyjdNDrpTcFMePmtd8jTub8KpJGeNdFoTJCds6c",
  "key23": "4dWq2YboLJidmRgYaVcTDhrQiZ4hnVzUyGZ6i8eRjKBJbcDJPTs2QBm2ryqXzfhyVWTQ4QiehewkAQUgb4qK9vr3",
  "key24": "47tnokiEMojZBSGHyCX2o8tMMxS4hf8bqZgd3SnEKPQaVFUq5uqxx2JTBzezdHiAxU2DtqHbugvcRNB4ZqLgG9Zn",
  "key25": "2aXQcsKNSnTVYnXiSD7GHwEKZhzkStbn3sXcLoPEp1RtpqkkHQmjhoqLUHyMJS8d95MN3T6v3crzv1PGf7vnamYA",
  "key26": "4JFbattWzyU4Vwm2Qjie71AF4V1gnDf58o9dFU82BoXa4PjW5YUhHUiVsKsoT7MPH7twMhVXZfjU55ARf5JwsBeJ",
  "key27": "2mHjjeeNoUdJeWVW2jsrHYs8XfUM3zYCT9B28MmNFiXgv4tTKoWhEjHEscKXtGsjaCSe1QJZDRLg4dthg1J5oKFr",
  "key28": "5HBcCRsTdz9Jm35RQUxB3zxXFj6WsrwZ2YyAiCChHbGRQTzuSvA245iSPPf1iLUz3oto2JDDh6WTyqvqGL48LbWN",
  "key29": "3iVWyE4n4dJs4yc2wXthLVN4amDUgW2fMnnu7ZbNNG5AvKdJxvnFXq7byYUuPwyMAcPyrbCygkFg6UChyVgHNSXJ",
  "key30": "5c88nV52CWKmLBNGCUaKxLvN9oAx63DP3MskK4rAuUY91eN4qzYHybLLzYH47RAxhuSApMnGHFs7zuT4Q4Box5jj",
  "key31": "53wqkaMCj13Qnpk7bLwnZKap8e5yQaXtRTnqsSKJvXAhBQR4wqhXeFATBcaPeR3wFHXbsShjhRnv2vUWN8wvYnx4",
  "key32": "3dnaqp8MhdpyrFKStgM4eaBtQtW8JtxwZhk9Z2nQj3scj8gMnAthqgB9qwGFkbqDF5roBxgEuAd7j8yyfqf7TSBN",
  "key33": "2YEzEBGoKnbj7sLJBaSD1Wx1wbDnfEiyEQUH3WVSgVyfwzcVGA8NdCHNKds8oqyoe1h3HwrvL8NyRUAwctjMeTh3",
  "key34": "3F4MNBwAfpdBnerTK6B62eB1ZFLEHQmhChCm5GxFbijbXenYiD1JNyNyHPTRDJ3KUyakBDZtwWC2qxhScbcw5HvZ",
  "key35": "6551TU8LtR2Ef1m6sehZ6ohEjfVxX1MnhjSPSGEVqgGPtAux737YB8wWqAx7rY23EZDiXHSQnrK8vsAhpPntGX3V",
  "key36": "4VJbUw74NsztqeRDCKUb25L1fLR1Jsf4djiivyBy9931D4qY4LbBfahz9ZnenuML6zTnybUFLG4gR9RHPE7vJKUg",
  "key37": "5inLaoc3QTzJEHGquGESLR5EBfFiNPs25ACbmu3oN2gF3xZ8ExPgc8TfxLuNmZ58JKALLbuaaM4LbSYzpAgRGdDa",
  "key38": "5y1vFV9Xfj6AipPrQeUDRHZoXPQYhsGPVA6vjKBLzESiNUqdAPXGczBmHkCsXjqUyTKXQvsctQZENzZgoj4Rf93g",
  "key39": "2ak5GuR5QK94kbhVoiBmCy7nbsHhi7YhvbrSQBrEW96jurEG7ErHLoks94CnphYhWBStfniyMMiwap5KCCL3hQqS"
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
