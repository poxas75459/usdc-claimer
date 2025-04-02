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
    "2TRTxsLTRgS41aVDSskn6HnDxBHRwCDTj1Af2t3rKzBYScEEsj3qTFrmXGVPSHPMXHUzuwcV4cLR4S2fqdebRNhT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Nv1AXRn2VPEzTB5dWET3ZvYaMcRSVYN5FxHYGkiVJQMcitrEVnGw7u1tEGY4PB5PV78nATVFS1RcbfTeRrgm6Vj",
  "key1": "3kyiAhLhhdyUZHkYpRyEkmVrzZpbvBvFmfacDVjmEuoybtfkhtiRaeBX2DvoYVY5VG8NAdRKJg6mTfjgRGVp5H4G",
  "key2": "2LuqDcKigzW24yJHp6E3kddCVY2XXMA7gDUVZYEErhgUFhcBHnzjvfyjvdbYYc5sUHpep1XZU9jcKZi3uBxX49sr",
  "key3": "58AVFKxwW81VT6MC4XA8cFAEZZh8evrQAP5UqWs8jtJnX3FDPZHssYrum5tptvGgt9vrCuXEdPGYB7uRKtdyx8zT",
  "key4": "epybzbZ6w47whG4arL9CytjPQdX5HWwwyBxSyBjYksywmHHXrYYhvoozjzX9gXgSty5nBcMHidaeJiHuJRpi9N8",
  "key5": "2pD9ySgVDaDz5QP9CbhN32P9bYRKALAkGZ3jmv7RjdVX237JFGpbXEzYTpuWsooTJSgurLjNKGPQNFcszPxYdVWB",
  "key6": "3nSjvJpNNjJHq71DSkKqvjhngm7aRLHNJw986GnTis4vdngQsbgsefN3cMEkHPpv8ey1QiBZ5RWf4op1w6y66Yrh",
  "key7": "3jutFekN68L28rkZaRu6jAgYspx43Qbc4DX7w6Cq6TSykiMsiCpYXAyZftx6zRPSprF25U4opxYCMT5FnHinsJZo",
  "key8": "iZpLJM3LpRV3GmXdRuDMwdPgLvEfXcoXHmYa7mk4EVPqxVhid5N4V8kUGY3sh8FkNRwSXJX3nAnGuoqPdskXc64",
  "key9": "WVEnFDHiEPjcjcD56Q8BBQ783rwfd2vc5gQKiwiBxFVKAKa6AHbGWpCo7H65tw2mYyHuCfCaei8MWHXJUUfReoR",
  "key10": "29QgfcBZb4ao1LAKTEuMJx3gSAeDZN3qr29JWAZcHUFVsrVvESiw7Dkp3j7eokpmcXhC9v2dars2chMtqFv3tjFV",
  "key11": "5uxgGVzNRAGNcGbLgYHG3Wz4zaTtW3rT6A5nF2R6DHPsuGKXBPwsYFbXSwvUatcNTgdpPVRGDF7EiRPynaES2PZC",
  "key12": "5ZZ8bmPZXrfFQfpfitUKTD8vz4gHGACkKvkdEhYT5DJdTvReFSm1PxTcDaxQa7eVNxXz4DWBwZdZKcLDuKUKgsBn",
  "key13": "3c7m4d68vyjNcPjJ2bmuTzBXHb7JuQ9jpTuNGSGaobjsbkh5Hg1B3RkMdV4HFEs8k1Lsji4VYgCyFfZ2Yko5gB41",
  "key14": "3dbhrGzz4oc8xRCmo2fANPL7sNQXLHB91rGBxmMdQm7jahTQeXQBBbWXpHgtdJCbeMf77U36DX5ZZFau26diYgjE",
  "key15": "67bGEmVqvCqqJXsyZnt75XLwJJqx8oLLF6n6tbrKwdp56gWHv4ga4EjtjLTS8XEQC5wWKxjCYxUAiYSZSPM4Ne6e",
  "key16": "37yVMPCnAR2SGp2EKGJXq5r23NtUjHhfsyERDwpmXuahM5nEq9mfmSypy5Ldat92njxH5wHHr5Rt9YHc6TSsxYE7",
  "key17": "2jsyE6osnZCRVmaqAb4Dvpeoh8bifiXi4KC5Ug4si3ATyV9chADeT6QR17dBegqj3v9EBd6cP8Ehnptwu6abNadH",
  "key18": "43R45nuPdgqouCHEwK8fQnfmCBGySt4pSRzcfBTgUGT6QovRWM7wVTUePzH18sCULXJAT6zXoVT2bzbZUHfBF1j9",
  "key19": "4tPoLJiuhsssS8Jf8MzDF7bEZcA6QrVc6gjZ6Drcrjczn3Nnjaf3RthWbPXXECcyLSWp99DWAa9LxQNVkcMTpBNV",
  "key20": "2fCXvLWya7CQCHP4tumQGPvPUfFEb3L63FHw9eYkuUBJjhhrg7gJcUVbQ47ML66r4XFHBv4sKvU9Wx3cdqWmzXX3",
  "key21": "623iKW3Lg7UA8htDgYQ2iRyfqLskt8Pag2TBJFvSSymxE2YWh6QEEDL1vNyEzRNzgzUsTVwhwFbM1pnH4MYrT576",
  "key22": "4tatYLq5NvkN5DPjnwk7kEruppc7knvmoSgxAVsi5i5XYrpG3gVZMySu17JqLPJ6BckUSevurAYpsssMZYM4tkfH",
  "key23": "Mo47rtbqAo6Sxu12fsa3fqKGridcZ8G5SaGctNLLNZrMa6jBz1VAwYG2P8Ax4rb52XsFhBnPzsUprFKJZTAMWre",
  "key24": "52mxfvf5c5iBPkPWm3tMMLMznSZCiweEV7KEgWWQVJaxEqrCEvY13qoWVtXJ2NSyo5McdtpTzHoUoVbyHst7UJyU",
  "key25": "sYLL29VrsxY17unDBEKSq63XRRwHcy8oHtkGzEQRiURAZ4HmzyUeYBCP8ndc7zy4bksHULQTSayNedR25KP9nBF",
  "key26": "3XsZjGcq32WC3Y2veakfswqXnBN1otqRpYzRcVeVbkj7SmwwDNkJaCg3hXZJqAbTjAHeSszHBTtd1voXAQ4bT2Zs",
  "key27": "3bkfeNb9mMpLCGLkdoYiHBJkrZ5venTHRojJoiKusx8BLrStLmSKwRuwaCR8gDuQ9KVaR5bbCQ12caUc72TwE3ZT",
  "key28": "oLzy8ASjC9ZTpjserXrv9Khz32YzLTv4gLZ1Ftn9QVgGYs7qpGq6pRHe9KrqjWv32u78g7PkRJSerYmt1yUrhZC",
  "key29": "2Rn5CwFENurv949xjRLQhd9AbB95J7CYSCrxtVHN1uiNBDWMJ8bzrvehMH9VDKF4nJofJQpEjiF17Jc8DZw1zZ45",
  "key30": "5bgn3i1DiDmjTUZDoqVgrAr6Zs9cCWAfjEnyTj7CTRvTdNaDC2BVLgGZCiyxoMKDyJ8m5kAFs3ZP81DiBuG4hJ8w",
  "key31": "4Htj3utWZ5D1KJP8rFqVUuHx4nQSZYV52ZevaptQDMU9S3KqmudkQdZViDgfQK13U21exwAnF9557YNDMSMUt4Pw",
  "key32": "51y2wnVQe4BzZewr3T9xGBVahyEyVLcTg2E4xyY7Lw4kpJRJ9GbpH72nk281s25jxgFLgmpK2YrDrDsX918kjrPE",
  "key33": "3NYhPc6U1cWWk3BhR5T1CGnB9dA4TeWF1aQw8AAkBrE2PuMU533dweF1xKnXToCtC2nEYY94iidpDhV9haXo5KzN",
  "key34": "4WLcG2Zz5F2PRHciKhxoFeeUpWQJjL6ytzK5C6jApCXw47uzXKwhwfMrj9W7JUVRox9nMLiUjjStKafPCXVDGffF",
  "key35": "48bfyHfx9DCc25fETrqZRLUWHNfmFs29JNYFooYWdrYFoEvJSagykfKVC9mKvCRNeaLnZKJKBY7ZqsCLhSmmNzHi",
  "key36": "4xyMQxmexDjvBA9RhmCVcPdthPdAspte7xbBoj7xWXTPtetqoRs7KvK7bdEcaZ4y9QpCerNpqx89GwZhhmsX9A7J",
  "key37": "uU9rvsNNHx3gr1JvcGT2SQvVjuBZSTnC51KJKeEWE7BXjfriLoyLcnKQiEs5PXKLwt22bbVnJVesfRTpWWbec3f",
  "key38": "4poVS2utsGEYMbYpZc4zGsBAjsme2gAEKH4VnG9DkFPAq4GSVZs2SDFVMdzqE4NEDHs38Uj5iosm5kewcNmSndBn",
  "key39": "2rZedcPVsfJgE6QNKqpz8EpVRpCT1cz5M4aNjtZS2KwcFAXhrqzJ6EyXHhfn8vgZq9aTsVhUTE2Nii1JP9EJDxv1",
  "key40": "2ufz6VumtehtM5kCWK2G55EuEXeTc2kbpFeHETG4NLk57HZqMNCWpmcHf2YmcauVto9bNr7sH47AxNGrg5WbVwbr",
  "key41": "3hVXmFL2gyxC77bavWDFawJqchfMGvoNuX55n1eoBeyYPUQVBqoNAzAtHFZCq147M4hCxFNwp2wcnsqyKiUnxkoG",
  "key42": "4wmdDf9FpezyCCHq86JkMb7VLm4WJxdGWEkyiQMsVDMAgB5xKaswdEAvN7iAmFbRWNhZsTGMDfE3JtKPqoXAMNYb",
  "key43": "3thFkoZXnwTdAHeEcUfVGWnH4UyETByZ2q7hGhgQ8GxcrtwzCeRs33vZ9KMHAxzCmaDewYv6u5E3uVNbmQnWhkTW",
  "key44": "2xgSpEVGRKaMM3kMaQS5rA8WdUHjBvcXV1kUdJQsyExRkAQfTh1vT3rT9AsJ5dSMSeuGYveMsDEEMmEUNmK71FiN",
  "key45": "4dFpo96PNcgcYxGd5L2XA24U2Pm92ccjba4ydEiMq4g6kZFz65eU7hGNJ3FPiMkC1dmJnWRY2rpEe7buhbtmufgD"
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
