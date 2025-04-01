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
    "3ATPVdtFxZHDtRgrQ2bqfhW7Urzsti2p2Pyr6CyHd9793mx5Y52neQZRK22UUrqyFPuPUvPFY2AdmRA59qXpPixB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2nD2TMrvyyQWGYUEnasiDDRdv95rcR2bZswjBgycKsZQaUXZsST5kVfE2qS2EcM2SR54uwge9eWxvuSNeGZJ6Hx6",
  "key1": "46fNahRWEa6x9g2yTTBm2wzexkGrekXspBbzW2k7vYB2H8Kzk4YpRGYC5Sk6RUnG6NWfCJmZhX3LguibUdexWpSh",
  "key2": "5nS8jAhbWfc77GC8onwF4ysLXDeNhBqCsVECdQyHiBJVMZ1UWjXFSBq4JbLZswoWLxfvDD1cLJYitGBCqjqZs8Hr",
  "key3": "AQQmBASc9nZb58P8cW3cA5KYdkeUC9wmPYknC8E8DH57eUr2kxXgLAkXSbp4ZpxQDqoXz4jdZ1Bbw8uRCUobNUN",
  "key4": "3or9LyzoddnFn8kavFTNyBoBBZ5D5sgCTrS4yJsCUqgaiqabVJ95ASL2TfDAmTtMYTHnJENuYrdBg3pd8vMkKRnF",
  "key5": "5Hki8zhPQrpZRU6YQwT5JV3ZFPc8KgLtZG3CYFA5jNJ6RH7fG8w2d5RPpHUKbXwfyj3XgEsPouTp7rrbntb21dza",
  "key6": "5p4gZWxAbBsk4EJVeMZz7zFQutiwD9f8SZWzgSfgUeP4AC7e92xiVBJS2GkpwXQxCzC35R7zTEbZJgiVnMAJzRKi",
  "key7": "3AUkb8PbcPHLwTjqr555pNxGkevp1zh3omvBhaB8bJGj634t41tpEghMhYBbvtYTpjexB45C4WY8NLinF9LveY7p",
  "key8": "5t2nbByynwVpd1KNeAQDoQVGX5NjNUHKJRHgXMiNwfzTCULxtwxJFpFeAr6Ry2AKGmni3KAb4zike7ZsC1w5AovJ",
  "key9": "4UUWidhQaC9PpRURfjLCH9a7tcphVnbVxw9Sgdm9b4FKrUzCU85QPhm5QnJqzQfZ236FaygbmzLvXex24ka4frjF",
  "key10": "63c9td1xLaUkMZ32bhpjxr6bVtGm4jDk1aQJrCq2fshGsuZC5AeGRYE2EW6G8SJwqDCH6NETJAxABDf3iNYSPBeR",
  "key11": "4ztiCyPjYVA1k786nPdGaETMaoY7aCkXWYHtruB9sFaLWPGoZj2GoDi6CrqouW8NzPpCaviqScN86wVmHzyhQ8Ya",
  "key12": "297KuCWCy7upCerVL3kBioPwhgsh4A2jTwKHmq713jkiqnMwLfhfFbiGbYsPZd2mErnocqRydtkFbFxfWwcCL2QT",
  "key13": "57wZZCvE5NzEs6SqgdTqNYuuF4bemKq697wQ9LAhrGTHTRg6R4wUokWppckZS1JonYuMidGbFeeNqzbZTaB1X5U3",
  "key14": "45eB3Xj85zyb4RU76FmzWzTpSBZu3LBbfGva6kgNy8xcSMpc7FK7NbuCmRRioQnvUk8Cty1A39PrmGsezjNVBpwM",
  "key15": "2YjxDWWPWaHBhStFtuVxcFq2d2ctWRL7mzeeyQ9g5bqJqAbiJXbiTeCbJZnaqNSfqe22PSFD84PqvkKFDPR1yCxG",
  "key16": "EFwT3ywuhGpfrvZdcEUPtZXsXoZpjBYGQFaPGr7n1zsKimtqrUr45ARDNb9FHfqXk3tDnw1i7kjSsKpxvfsraVk",
  "key17": "2fdFVEGcirAZ4KKjoo8CupTUEPUw2qKHX5wUb7mHCbke8P271fBsbfYwoQCAwcChHxiUEHNEJcftgdVPhQWBytMk",
  "key18": "4yPSKXHKTXtG2KMfX2Ev8tcjotRCCMTqKs3rzQGJ3v2jsPY6DjGE5eNzswgDFxZ4U9URQjdLQcBMqZSMa9CK1TDz",
  "key19": "3zgs93xbnbTncZq9MAkDGt6dLApBAXovc79nAqFKyGLUAcyZXAevBqmUWaB8qeocdoD5agin6FSeb11jV6sHfY5p",
  "key20": "2pnqTdUwudGj3EfsxTgse5sgB2J2xFmn8tYKDKWE7oxStkeFDqeke3Ui8JK5UtagdGvEFWaRs6XVCmJ9P6nLLUQa",
  "key21": "3BsQMCTHHjv1MeSPGqgVcfP4nGKHt2uEHMqAFstC3AKwSPGHgi7EUKtNzvZXxAaYnGgCaJPaquQBmGN5zZVCd4p1",
  "key22": "479pKVjSZ1h9Z1gdwYBaR7DgSCVMphAa7tHVjFJGkicEZJpF1AxqPPcUV4ikb5XwacEq3WqARxjPgdKyQAJQR5fn",
  "key23": "3Ji3DsunChdPjXhWq6VKXjrp8trAZ3xhv5q5MvByg7kF57sFKzozMAPM1WYLL7Yv8RTU3T6DiVsqjkPZsjMQ846",
  "key24": "2J3MSR1wMyCCqTZAEdasEtwRSiVCUoJcrue1rucxtpdGe4AyurFwT1ZUJSotnpvTzxXMibVTjpDBAwQzYD25XHQ",
  "key25": "3g9u3w1GG9CfP18ppT4rP1cvbmRShD4jhxpYit15vhdhV9HiXSo75CXGP1pdZusD4tNAU3XjEACVXEa2di9HaxqQ",
  "key26": "2zeKUkoitkPTFA76zL4m7nay7gRFvT8GQnbR6cxCoXbyXJMFnvgZUMYZTW4UmCkoEhHCRGKm3YLP7VzXvLKL1WY5",
  "key27": "2akvSxBXAeGqPtU9bQgEAoubNuLMcc594FvDMDhocwhEy5KgCYd8wBFRaeafoToL3JjVPn3GZAEFV2uWTXiEwrfw",
  "key28": "4P7e4sCXbEHhYq8hw7hxFAeAd1JjER93bemfHbcB5Ynaq5ezbqcQRBW4tXtJZt3nDp8E717cgtxMzVZnpGRQbmGN",
  "key29": "56uJUMJFXE7WNFDBRaKE4Td4d54vysMz9NQki66gJ3B6Zkj5EsVZTfp9R9M8C2s5nmBL6S9eXgJa66SurxiqzcPB",
  "key30": "oDRgHbWh5TmJDxoBLKQ1sZvJeMy3ShMALVe8NxSdVRnkvsGChAzuuYzWQouABCgWS9SX7wDHN4qHWDCiW5m96u9",
  "key31": "56z4EiPVjfNLLo6yGwrgr2JrHEurGJVjx7RHNbJE65dqk82AFtwHTB7UYURWXrMWH6RdFbFPiL2WWY6A2dL64sDL",
  "key32": "63MtTxUQq6Qw69ebrmBN9DhXRJVPMKT64BXZiBhXwKwbn2MBEm1xhYV31Zdto5LUimtZ2Gr5HCAoc1nKzWqMoHT4",
  "key33": "5oHmkP8HpkiNdoXMwnxTvGPAKBSHimsUpMyUbMnnBQnjChe6bUjBH8CcAJ7Q1vDbPn4EfDRxbXjCnA4FHycic9Gp",
  "key34": "5oyitvXb44LU4L8gAeH6XhPeeyaMhxsVNMPjj45YJme1t16x8h9AQ8KrgRiPkgtUZLnKBZj9tkCvpeHtMUKtqbMf",
  "key35": "5btFeVkNAsqypaFp6CPc4et69b9T4Fmr51nbgVDfpiAYQnDZ84aBPS7FkEF8ArTQja2Jxg6S9XBEWrHfLTWkG6vD",
  "key36": "3LmeUncQutgmjJewJ3jHnCr2QCdvLmeS8kVt1PC31shw8bTJJdDkV3ZyPhRKGbLQnLaSBfKK2PWkGqC7YTrMSDQL",
  "key37": "2KFWXuA3yJsE91jcRwN4QjkXE1o2MQvcuULpFB4x3eUnUsfvDTZnhUSodTyioswW5BszHpyXivQh8n8Ptab5nxyD",
  "key38": "2miogtgsy8BnWpe31NvdEGUfyGX9WUSGvHWU2zKsDcnChNA56Z1YQQyS37a4yp4fNhBiVvyJUiGMLdsMK4zZK3qf",
  "key39": "3PzRLSF73zJVpJ9Rtbw9AEojwVtMHv343TeK3jiS75G2rpJ8FzdV1paSQDsqP5qDzjqNpMnjNRrVEZ5rpTUJ7KoT",
  "key40": "3YsfbMpMr4yzhAzmpWsMKtwtjko3LRzRtgXhb5kNt5o7NYDfP52FsPy5sxxxQKqphNRpfSkJovMicc25xgDnqNmK",
  "key41": "65H1J5UGtPnh4VugPnTvFrbapHScu8uoLSbVETzx8M13BRPjYPa3JTCa1Vc1djiNSsEKumtsc3zrTCinMxZvnTgh",
  "key42": "2B5MFhCB76PFF1VhzqznPWG6ksSrPaxuELbcj1vwVckqohWQA759tr3Lb7RGb6gJjZqPjVs5HdXahFQBnrJuHWXT",
  "key43": "4Tn82UDRnvJWp4hRZwB8QnUnR5RwSeGBAY5LCrRK3fS2ugtzrBovT2kVCe7LTnnUsiGYC1audfunJG9et2rbxT4n",
  "key44": "NuRmFJubnQfqTdah1DLDwVzCq4VQiQXWXHgJ5YNbQYEw5avKrv3bNy6uugpdSTWWYvPqDHgSYPxd8eGAwx3u6yZ",
  "key45": "3oMB3f6ZjRMNRwcdcTAvBrxGvuuHxLKPReca65sePVoUTYcijgoCP8extNVdPhqe77NRc5dQXJtPx5U15x2ugVDv",
  "key46": "q1ST7CL9auT1MwBe3Arvtf3WTEwPUZm5m4b1uqAfeZ11cPazNHxTXeuhiDEarqybJkT4DX7UvT59jY31sc6qPV6",
  "key47": "5DRMBzC5oaw1RjwSdEQAwUJWUHRnx9QdEkGcJkMVxBqeipNjVgN15MgYTLecR3LVVVAvifktaVtqKSZ12ABJp6Lf"
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
