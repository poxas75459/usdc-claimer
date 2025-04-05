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
    "33f4BBfEH2VWVT44ivyGD5TheoHKzpPTX8bTSWHdKLazzSe6WU84GDsDatFR1XgtW4HsXTKPFgCDiciehsTxuCi4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bLCwSHFdg1BKMTizRdPuHqjszFvBKnKLGRURud8gYxktZ28mmcf1rkUCYtNWCBq6ragcp8HawCJxRUqCCt2AZBb",
  "key1": "5phSNggC7k39XXzecbPShSwNDtWtqFkKh4KdFLC75R7ZM2Kizc3EAd7aMy7Wbve3WCPW6uqNgrdCbpPf12jE19qb",
  "key2": "64L9rF7Lvcyfqxj1PLGdcL3aoFEqCV9PJsR7N29D25Xtaz2uPgsdvCXm3mE5JcK2W4yM8w2DKfyEtZq19c8pf2QM",
  "key3": "5Jas13v4GKkj4ZUYuakUocn3JbCh2jBaj2zHsiyWBFzW7fVhXcWaZDCbRDC5tpQFsPiL5yCBZS8NAc7caubMGZuD",
  "key4": "51QZUZretnv3Ynowi3y3n7ZuzXxY3cqP79gr4kNLpozyz4M7GvRvrebKsbKUKt5XGmqrP4jqEFwbtTfcAEtcM9eZ",
  "key5": "3AEfjDG4bb1SVgb7oCFmMWi415HKw3zCy3fVffH4VUXjXbMQnP2jv4LDfDyZ4jfYESx97jN9bCbN3EaZPBrKWb19",
  "key6": "523ab52g3quXVi7SbtbW4sZrMMjfPjKuQm3sg7qzYSTL2m6nrfNjEkjQcY5azZtLxEq8D8WYutETwv61eEtZ2XWZ",
  "key7": "62BhwtkkXRphcaunaYkdowC3PmtxPi3stUPXRD4KJGPBghSMTQbW2GbD1FSQ9XtLbp6BjoLCzeCPAABNABf9qZQX",
  "key8": "4nJTU6NNHpZ7nWqAVxKxDndpAeyQHK9fyptr9c889j7MftFv4MbF6YUx4NYHPfpy3qyDqJghYV6i55kwCb7kGSHA",
  "key9": "5do9469cGWVBp7FGaD76sMdbHTEZR2rfb1DbxQ3n8aamRXSNYrJTSnmGHxLEn3ccwRqWU6FQQvVP3g5FXFSu1hKh",
  "key10": "4Tssb5oaW2UpXLx3d97WycX1q2TmociKKf9vmZj92mj62uMncSgRcnF1xZvHe7RpUYhEZoPPXUSWj2ARkaKhp74v",
  "key11": "4mdSGcsQyyLfNhzEP8gCGmk8uFc9adytedsAZRzTT2BSUQfSJzycYzLQLdwd49s1Ww391SmUeWvcyjUUSBpu1FZE",
  "key12": "5exkRTcG49WKzGvaLtUY4TAFpxSPygb2f6E11YYwJ9GfAcUbnoigtU1LmXmnKt1XSjVj9WJyYgyCXRGcSCGiY1ug",
  "key13": "5sE5d8AYiWbvj9vSn1Rk9V8Fhi6vSSj9S3JfTpbAVUV3WiVQmqS3dJtZsKnbytuD8Fkf3eBMW8cRUKSzZnj9svAF",
  "key14": "4SZY4tzdWax3oq5bFHi2v3jpFy4praES3RzdYNZXj1XZsRcZJNuwk6FTdFPa3cwA2M1iABoAwTFpTmuYjXPKYqH3",
  "key15": "3ZXZhFKkzEqHXZjTaBmchphYSuoKAhTgfWZPdM34nHt63sSCF7DKXVNXEeVCgnw4EsCKrBBWuoEarJTErqUxk5jg",
  "key16": "4bBHtbvctJQyBLPQoTbCRvthv44eGZbXtETMXPFa2hsZ3gxoJo6nj78CfNrxWU48BoNp4ubYU8zwA4gusHzjpkCb",
  "key17": "2FFHjgzD3Ary3UujmYnL3a77hoxkwGWRALJoFi74huZm2Trn7MQ68QotfgUfpY1ychdohvkUpyoKiPCXWUMUP2wj",
  "key18": "3GNWVFrdDRkwEYQ71pfy3SFkA47GG8qUVMCkDonXChko3ebdc571CZ1Kmn3MNTCS3cWN8nAJTEgrzMXgbPWEkM7o",
  "key19": "5QxRwuoer8VeMGwC8jxLDKoESc8UTw35i2kvjov9XGrC9muaRjLE1o2aw57DHsNJTxmw5iqHvNFXUEEW4EbUu2kY",
  "key20": "35r9LhP4WvrofMWhFfBRCGrPWBFu9DKSC3nJXiNMzayw2fvKDEgas3mhPeXJh95ZgGCotix5QjxcYpLFR9y82rbP",
  "key21": "4WAWMyYm3ojvcVrY4fmTv7vL1nuAXhhJAxVbtK6gmQDC3ezLeD1XpzvKsgLmiSGBB2yW5r2CKYUY5f4EZRoBZL3C",
  "key22": "4RGTac77n76FyB96WrC6Zg1bSXf9YcFH6ZSrALoYizVvRAuBri2nidcWmwiridKqPNM2RxqjeTzhjthizmCp56JR",
  "key23": "5akp4C32DFns93posfcHLhqDPUnbSq1Gtq71aFmNx3191Xo5GsKxBEH5hiiszmrjdquYW2vS5ky81bQCsDwAEbx8",
  "key24": "2JpCqJhtUVZZn6WkBHjUS5Tnduq9AoArnpUaUmNdCoT5phZFSEe28QpGDSBYe5teRqBXLZcdHFZbCN8anyVMbSHi",
  "key25": "3vyFfGbQ8hVTng7ggg2EwDxSr2iJC4M8vUf5kWdTqyoLKNPU13QeEEurXRoKH6DxU1yuDf5ejmzPB8RL4iqQvQzt",
  "key26": "5ZcF7uDhEfj5wRpbBAMkDhMLe6vb8uGggfWFnMPqzeWGcgxVLnJXCg9ogKXThTBvQKPXojVfFkQttnSESMXPsYru",
  "key27": "5KscZWmDaABMGTWxnkyuBi3uc6UjCycCfgVfmMVbhVVEM8mLnH7st5dXzobeAMhhjPeDGPMFWPPraoRtMwiy2urC",
  "key28": "gyJAzr7kJXnDVXr5W51L8UUKpfr6qGhkpRaFPjsKR8burTpgbpLh5F7vx3bPJf2zzMfM8abVHS5JsAMgFxjmBQ5",
  "key29": "5ttqK1JL2dCacoTx5PixXbSy2EQJV5eNGK2jnNdire6xfkpfwLBeii6AMfg1nrKyK2PoEJhuGtfPRbb9KncomDB3",
  "key30": "ajWW9Hwpm2iAxfZTd3K3xfVYkd1hY3VUV7WduyriNxC6jbu9n7fhZ5pYswmHDieEDRLy5TkNQYv1wc8fpTpWLVJ",
  "key31": "HsF8aJVKdrS9vtEboAzwkvdmy3RZpjgkbzuEsGi5s975HaCR8Ln7KYCpqZ6no8TzEcMjZeiZ9qjzxK9DJRJ8xr6",
  "key32": "2DSx1tksTQ83UyE4hhJohePhdXYXw6jXxeyX2S76Sh994WGqdHGdftCy3r7DnbumMsD1ey72oVY44imo8MWwZAvG",
  "key33": "5EjtTcWypRHCQELFfWaWutcx3uJdeqgHxXcadZefBZBhLWVwhfLE35Q2KQHevXsNEj5PwPohybDYyTDuLtoYaZLF",
  "key34": "2EiYn2zzpy7y9zVwBLA8axwThyfq8ArCSMiEpS2shub6L83cTPUHyrQCrt2kxRw4TcyrnzqL3qWmoex1tdZjvNQC",
  "key35": "61PZZZGpJ9hrBWjhPmzCjQ5iKKQLtggJrzH99RNRzTUF2wU9aRBfUXhdfa8nu5TKnydXrk4nQqDLX1UQTeLCkBnX",
  "key36": "2WJLDhYXoNDnfx8jEoHbeiSYQQnT5sNod32gR2BMCY9fvNFZ6groJv3zo6ii4w2ne6BdCXq15i5BLHsSCorYeqUC",
  "key37": "jMKgkFHWev5rd73oRVEBxsHouBzqfDqehYpkVL65Q2WMQTXjgy9LC8rCh8TaMr6Rws5CuZUSGzyGvEdvZHbWaCB",
  "key38": "rNcfPPRHsruTLfJx3fUdYSqhKCnY1EepKPxD1nZUvroGA5cBwzkTXHN8ZKYY4Xs1wGJkCHbJVySM5ie3Fb7CRwp",
  "key39": "gqeip35nZbzdETpzhrMypsd4uyn6hBErKJht4iJZaQGWooRmDL4XnAEVSUAgDiMcLVC2cVNvoG5jU5NVc7vKE6g",
  "key40": "5XTRXpoeF6iF8axGoDMmsLcYwuv7A44vkW5HE9wYj2JKHPvpZcthsktJFSYzLZk6UxTZHJUeCdNgMypAKrpX1EKc",
  "key41": "rFDq8LtaSa2hzQAzmcHKWTr4nzyHY6Mxvu1MDGVb9rpMLYhg5t8DbvNCJEPXNXywqfdnqMvQJM2FJRrPnJt3UcV",
  "key42": "5vGmPUP6tfQ9HyaR8WiZFsGt5uyRDhoj3dkRDZrr3NFZizdbsRfZUBw6uBk71BWVPc1eNYovHcVjyMx3VXifWNYP",
  "key43": "2jJd2BipXxGHsLgJWx93opUTfiPm88vDcLsXpkTsiLCHAC8WGRNJqM2uhE9ppXneuCSxcYDKhG7K28GbKvXynErq",
  "key44": "3jqzQopuZMCmh9FnwpPdXWpC2vMJoUXjMLBcLX4oUW93qQSRXFuwce4jcy47tFLtP1aPaMC47L1C7Ek9QLsjdheC",
  "key45": "3mrhWZWMDVZdeF67ekqe6E8G78G3vBauSVLbQHHLYzjBN7a4bwhP9Dc16vNUZaAaurDbArkdkrd5F7AqmTRadbBL",
  "key46": "5MxjEmHBgHemMLmnbMvMsiDP5GWu7wSEZvz76G9Ne1qNmeTZ9jNfkonAesfUqDGmPP4qxDCNBXTcPbEd9qpyzjDS",
  "key47": "2o35vcezAP4u1uZTkHDYpgTRWNepk87fSRXvSNVukDcLLqVkEZ6nqUxSrRLwjwmQktnazKas9iP85R3fkraw6mJa"
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
