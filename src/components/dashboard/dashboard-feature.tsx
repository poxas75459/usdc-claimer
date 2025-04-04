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
    "4W1b5BPH3PrFPxW4CaGNncSMSq2ToCo181fm9oqw5eRD3TTzkPiBayz93CsVqTL2ddMZdqXhLQcD2fVq21PyJTJY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2LK16kd92RegPnQgTbhY8z9QNmGuWAndqLy28JUDhJRyooiW3B7UBJsLR1T25zfBqHhGSbu6zCMcLEx5LidMz7ch",
  "key1": "3wF8BgVaJi5NKUuyi45guqZPytrZLrW4urRgFu7SR2HmGD11dCf4Z8DDDWACrFNvTp8wTqKKJ4i9nY7GoxcpA4XQ",
  "key2": "66Kq663J2MEpmRXP6ezCcF1Uk191JZQdZzxAeioyzqbD9pwFm23Js5J7aSRJZHTjjQss8ihj3ZWPkhGzzJwajJDg",
  "key3": "GVyYU5JB6QUTkPvE1ymNY6CSP8mjvJ6E1oJdpmj7kTFmR4uasyF1NbZYRDfVerBN5w2qrFYn3Voq6S9u9YXb7qU",
  "key4": "4RGnV6Q4f9Sv65tdWbBJn7tK3vgVR6xT3q7xNomCkMztmaRSY8jQ7riMvJ6TbeW5eWASkgsEzx9YDuDqKS1Mz9cz",
  "key5": "4oiNvs4GBQVF1UpfpUYK6YrESCEQovHr7suvt2CymXFw7Jzrvw5u5GLqP6VnVZ6cj9CKjX5Cz7HWUuH14MBVXXkn",
  "key6": "5AN8VGZinvgDwUiBypSVDJnsraRjg5amUg8jD1q7oMqhssCznTvuk4HeX47n9fjzC1uvynWAANgEHD56ba9UfEXx",
  "key7": "3DwUe6D5RaxnK4iCpohLeen6du699WY2YfaHkdQ4QZbxWuVWWoepARNq6scVjP2vwX6VYErAqxwJ2EneJ5zLtqNh",
  "key8": "2bUG6qj5jRTw3H4FfwdomA2S9VNRf31pUCFBgkTJC2s3r5hqDotNpzwbV467e8Jkmm64LMqBCYqc78916hr82GVQ",
  "key9": "rgxx7B9vFMvpL3Lc3ytJPj7pEB3fKJkaPh7unmm3zrtGzN21QnH9QHyAs7JN3dZJUyPLwaMNomhqmZRgpDYsf56",
  "key10": "57orPVraegiuxUi66dSfA6gRwK6bPdLLcnjaajiYB3mr6ZXfeqgf2nfVWQKXtrcFEAqfnkV3uPEF7wPGJs6dktff",
  "key11": "35JiJK8ygZcKztBpXbu2PY7CV3xykesMcRQJndZzvBP7TB1jFt4XhMUpdMem2vBH4c3EQvRq8vixACeGtixT7Dru",
  "key12": "2ZTgkiy4NgJvECb85T5J3dVSgcEVefpbcVJnb2ep1vtno8JLaWk2GBkaUqThppTbixpBSddxfsrASaXPmMU7QxK9",
  "key13": "42b98EDUWRMpDbFAVvbN1ygixERZEirXMKPo48PEJm5ZubJv8ZFEZxR1Xj68bMWZKxtC9dAaAjXYKTfyKZwTDRV8",
  "key14": "4Hm1UdfCmoPr7FzgcZ9BVf5Un9A6CRFPogXr2dc6KcSbi8CwdJ9kK1xDB812vWyRMHNdyhnMfcpeCmJucjWCpJFm",
  "key15": "2BubbB3gEDSa4Jgs54AwSo4XN8ivZN8ZQtn1TtGxZVuBM69mRRDbnKpwjBvh3P8oc71oNaVVMizdUJSaeimgAxPx",
  "key16": "52uTdmNZtPF4TNMVSZbFnhHAcifXQEsaVmVmnHhygwQmtGUH4N7opjPiAmEHWC7H6KqXenJTwQ5MA386RKFUpNsa",
  "key17": "3mKdEQ3h9amyhRAD16ULwqbSZ75rQViY2NWrAgBeWSV6hcbvBvXMaLwz3ZGzXJ4fVTLT5hrgmiQd6yUdmFqmFf2V",
  "key18": "2Jo3xfGdaoTxw7NMaQGQZEGVKSF6AqMN4DE1MrtwneqECf5hhCv64xa6K1KfhAM4x37WK1GTqWKAniRb1d5pbpbb",
  "key19": "opyFGDmfxg6rmQvZzKDnZCGqz4Kuh95pduWNEeTh7sreYbWTcmWm6xRHh4CH7DfjaUAC8ZR9MfPxDMzuCpZS2xJ",
  "key20": "4uSjXv79DCeSst3W3hURKqYK287pfVDFWmEsotesWAKaByyHmpMxFqZa4Fcg1jyuKwzkb6mvaGCshto7pcS9xgnb",
  "key21": "27DqLgYo7vBhpX6YsVgUt9MZ4hf3dariUzemLzPCT75kJ8VjwUafgLB2UKj4oR6beGZVgWb4CXMvN8ANtvYYvo6K",
  "key22": "4M2hvmUemnWQG9kE4GKYxVoaEy5NMdEDfpKR6TNKwfG5JE8qcadh92ps35msmKfAMAmWX8pLf71YgPMjRUmWtrKJ",
  "key23": "4UZY7XEiptQkMcYuCvdbbKvxntfW6BcV8D8LEck1JxTaSoLG3DBQQaEnek2HT4FH2KV8h7ajkuhca4SYBXDrJHJT",
  "key24": "3VVgRW6YFaTwHhS5Zrmzb1niT6aqEBFTRe77uDp4ML9Z4NgQwc7KwaKoRTnDGDyVb8K8wcKb93RbPpgNcDiS7K7E",
  "key25": "2b33SBswbMmzYai4AUmEL8e4ofP6b3L5FWnFg4FJCyFJak93hhxQpFtbnDJKmhY5pxnave5wHKP4HvVrL29JJfhw",
  "key26": "6PGNRtcBtJjkjydMmRb9sxV2b249jWppCmwsqsBd588BaVi79PngnAv5HTrCN3mbQsgiZTmUNTuvbRPpHiCjcb5",
  "key27": "2hZy2MaSZFDRYR8cwxZWakoGYWYgkjbfporYChvLN6VZo9Ttmxn6Nqd8FrTu3rYgMqc9BHCYqphPPUUxfnt7wVCT",
  "key28": "3NUKZQ3ZFqQCbZmRrk41xQBWWyn8EwukQQV6gfS17VvQ2My8vwd2DghMRGGy1jP4Mzn7CfZNQVA5BbpYRhAG2Qx8",
  "key29": "4HipxVUyofZkEd1V2sHwaqNphczDcnNzkVVNxGZtTHkaKnWiFcDJuPaH2HaYmnB4K7Df7nLsfniZJ6dygfg8GKar",
  "key30": "4DHXJmacSHghmrDP3C8qdhqtx4bfvGknoF1EgJG3WGZisd3TkdmBVSbpvhABa1paf9ZoCYGgn5pKM4W5xmhvugHG",
  "key31": "3zFSQCXXsvusA4mGwy5y92inKosWsjZc68sExPXCjMtTBJRwzLnTo5HkWiFhGH6viGP3tERKuYgwuVLctsgwfeEj",
  "key32": "3AGJddzWmj4bR8yCr9USnmCRyPb2rqPJdt4ZcFuMxeAnh2MjC5Y75HbyU3E7MgZasPiS5ccJxpB5auKV5ELxbZep",
  "key33": "2uDYNrRNfiRvmsZ5n1BooC5qdixRPLoHubzVNGm9zfpjFRJGq9M1w48arMZEpVDbzgnq6eDFMRsSY8dsPwPP2kd4",
  "key34": "42B4XWQFGhh2P35CMm52Mhsxd6MFPhrAfmBkF7M2wPNHvzSEsWgYqSkGWJZJrupTxVBGKxWYx4Mz4LnjyiMx8eJ7",
  "key35": "4ESoqpc4UYuSpDu4DJ4BBeeEJy1XJbXYRxhCX7wg5RsPMLXc1E7aeCGFXrsrY6qQBpwJ1PXSuR2MTfobKxyRywCu",
  "key36": "5RpNQZU1PY3QddxwbGTACNypoM8xM41AnMNe4E3c3ga1EvstFD4jYexGDf3H8vcU4etJVveSnxjQVMuCfEJZSbXV",
  "key37": "29WJb7tjJifMktPFhtLmBpMVDqJq3LUe542LXV9DTwy2TFPpbNaQQFSySdLGJ5N4QrejhxKhTERUVgh8kwyAxeDM",
  "key38": "3zSZYTyW3xzYzyUkCfn3dH7YnqK1a6pZScKpecviSwnKgrtaQnnBCr4XPVYCb2ZEGerDUMGnctiMvRb1jPckdvy1",
  "key39": "2cEhnMnKFkvwWVfCmsLgZMve1GgjqX44VtLgix4TpJD1EgnhtvNeU38tbNe7aqkLzG6jnCXC5rJqenSh68vLSu9W",
  "key40": "zAnhiYgsCejmNjNMdwTWVVjgN9h3KPuysxM3Y9bQiTcXpzSzGpxaJQhrehWAx4dmmmQyeQYPrZLFMzf48p2xWpj",
  "key41": "2NgjArHpiNpUNaJ8YBD6ZrWFt1rKgHtqVPdLJvsB8rwE7Zp6HERjqy2in7Ygf2HFQxJ3y2P5xu29oKTFcaQutBED",
  "key42": "4Za5SGjyo8JnQJubjYYaU86zaFYdWudTMmDdtCttYAE8iNej7D3RrB642JASg2eC5C7SL6f4fJjfxzYn2XvDpyog",
  "key43": "4U7thTZt1kAhpZ9sqHsfpZetoqcTJTbU2eQ9rSqD5h2thQMyhtj6guwAHfaLmjJdLroJWQNVkMuj1fjXrKhFAu82",
  "key44": "3C6r8TSSzvNwhbe79z8kGicaTnCqauboJkVRZSPzdFBAtjVwVrcPf8J5BP9ydypYo9dAXC1AX4QaFNAP2HM8GGMo",
  "key45": "4eTBT8cVZoyBJY2weLPEaFsUouW4qZ9ceeG6d4MsD1yZbjSpjRvMhQPgTtLFkxp4S2yDGrcpJCuiGbGKTRa4fxd4"
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
