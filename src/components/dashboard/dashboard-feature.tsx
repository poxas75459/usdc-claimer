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
    "62r8dxhdBCVKtB4vUA832EUYkakYRqmbb8ftnVCP8yGDsBMQuhS6fmk6SS3UCP8QNAk7DwRDayQkgPUy5zqkaTgF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4VY5YiN6XsWU2czsGG2Lp1kgH3P3CLHzctgB569U7a5wQk76dfJgXGUhDdb2xLa4SwmhUNRiv8N1Me9zPdjYwSYn",
  "key1": "35hhwzzER4zKGziTX1yh3DrLJt6Tgfk5CQpb6a6BBx1vFtFLtY7MYy3AVxFN5NovysFCY7cmhyuAc9XHf95Z8qFH",
  "key2": "46FMkJ4PCc6V22rtVd1nbFyS9z73utceL6NHSXtR5Gu3goDngPEtbAasefS8kdsEYKsJbpDaHRFizFoqrJeqXxi8",
  "key3": "2SYkGz4WsWi1idGNzbgmbiLgRWwi6BqQvXpGPfpyPxeiumEoLUJzS29YvWPg89UyxqzUWfV4cZVW3Dk1BnkS6eHd",
  "key4": "3xgNLQ1vnWuWmXF4jXjLSw1TT6bxpDFUMyWeSFCkUVSLqFedMM8qsgwAgo6LvouRRzLEsqaiRCNAbCzNxqxkfibN",
  "key5": "4oRyb2kqraHSNSbpKYiUNLdZ2q33sh2YTqH8EBX5K7AjiDXDts54X9h7v5iag8La29srxv28pyXTLrz2Bq1nbqdf",
  "key6": "42BdvuystkyJUzyRq1Nre2Bd7Hf8yNz9yKAXHvk8weXcHSxKSj1cC9N7gr4uuHNyipdEHqaw4UraAzyThXXvAWse",
  "key7": "4nnzSyPZk2mGHwEWV6Qhym9L5Ysowq5JHmXKuys3Yws7NgkCtbdRbZ8cEw1Go71ifxheNtLFKnk3qb8RLHu4Xmou",
  "key8": "9YcLr8Qfo7r9YzvpFikjJMkD6zdVttbqrbCyGWGe7CjwXRxyeeUM4rmx8qaDLFvpHnV7y5QpTcFgYtWE5raqRzH",
  "key9": "5tEpS9GG1mprbDYG5pXGX11mVnSWxpsEeqq2vPhrvEwMyyiEUB3nxG55Aqn2RnU1FFVavJKkbCd4NKJqReu4Kvtp",
  "key10": "hmZ7nepQoYh4saj2pEYtPMkLy5Gjswj38skGvaNKUyWu3gv5jnbDDPe8dzHgbcfmakLcLBEPHzGRBpVAdDEroUt",
  "key11": "4vHaBWwAGtgVALLmZzb14dBm2qMFELcKEo1Gtq4a1MVTEpkDcHg3ujsNkxuB9fY7RuxNWHAJoxbGKfiRyePekJyB",
  "key12": "3dAHE6sZnKq9serwUHevGGW8pFj1rRyX8czVgCMhVE1LF5H8BmHKPitsHPWe659zvn3R2yYSD3MXWTEYympg6pWV",
  "key13": "4s7z1jgELdEJbD8nK5HEhYfQ8CjTxNi5GkFAddPcfyKra7boTo1jCsnLkAJKC1tHivUDzRcKRguy3uQnkjHdqraJ",
  "key14": "2ujdTDGYBGy4XYdTkrfWPAW6vovxa1PBnGr41Wx5MbzuHxmUWo76KV4sB9cFC4EFDhUbqrfpTfgHuwbW65PGnNmS",
  "key15": "2B4dG8YH4yebQ58PXwmtqwb8HBhtEvqVGTkc3puDpiv2cSRwZwzwPX9PBEw8W5NcEb3VJXd86S2fYfCejQMhhWrv",
  "key16": "44i9n6CcL5LhU87mgfBDFLUMkA5AmxmedJvRkZWaFqxFLGFPzvZ3gjfFU1fnMG6S2UWCwyhcPJD9FVN86NRRReim",
  "key17": "5nUWMN3ch4rvqQP8mCcR4ezZVDThoBJaMV97wvJfZ2dcQDeDssNCX4C9RQirFNXn7HBMRe2wbNKuFn1wjaRhjusE",
  "key18": "tGVhZMS6wVk9VpVRSE3TcfLi5dVo2cHBim9CUHhjusu6cn9X4tx1rQv7noJsF4zqiFpxnAMrkVEdYz9RcfCdq2T",
  "key19": "hykFY4hsUjz6R8eDJuyThscHi9GW8WMMdAgZG2GBCK3mTooV333GGXQfDndCLKsNcTxySHVEi33xg59Erh411Qa",
  "key20": "4dmXwWPR2awyPEL3JgrXoDV3qv2An5op8P9eXxFp56uBZykSC21iK5RgMQPKoBttUqDqjZXMXnFh9T8MjQGDsQCG",
  "key21": "3q96jKLZsVsVcQnfk154QNaGHEozeRyN2eAuijzPqF3NJfsZMSjEus51nLbQMvh2wYpRvyvho8gaJKWdEt17hmxY",
  "key22": "4h7HZ6PJKLvErtJjmaJaj4K7b9gyMMAssS51a34MvPdMfQDRmY154fDp4bFzsqERhmysDXZn3ueVu4UDWkQyzcv8",
  "key23": "5gsKU5Wgbp4YTPXYpbtr8rmvpGwmnHEhkSHKBS3gTqTuQ4PffemvQ5gtQjwvEPg7zSHesLMP1N8QzkinYmA9heWF",
  "key24": "5mDpmfetyRxSHW6eEzYQZvmJ1dS4H1unctSx7B7KY1biPkebP8xxEAUiwj1Xwm6WactQkqP1v3cZ3gHgvv897gMe",
  "key25": "3EGMCBwZZSQYcrS3Kf8V8wTh1KzXgxwQVAayroftqZbNJAFT3tB4JzsPgLQGiykxr2UZ845a5XDyG5ziPnQnxSxA",
  "key26": "4q9cf8EGE76c4wDrxRCnvPDnzCcy3NQRpdEk5aPE3qWswbwjararQTUAg2jn9VLiBcG9ZWt3WFYcrhj1QoPG9Rbk",
  "key27": "suBkGoU6wTkoV3b4WNULns7EWMTxzNWT9MDdFLF48zFUPCKrVYDZoP4fAgsDVMAFmgpTDMtn3C8c9BrWPCQ13Nu",
  "key28": "4LTYb9zu3ynWM39nHYXbLFchuD7b1VKFWWFnA8sktn2nBYYVxBcxPrHYRfrSL8hEQMY2RCQLTuTbSnnTTaBdrujg",
  "key29": "2DCFKvHXch1DnMyLUvhuv3ZCtYr9UGt6xQvs9mup2T7PzJCohQDZhDGt3L26q6pFZS22XwyFF29bLYgDiyxQVXR",
  "key30": "4ErxurH9c3dDFZM8Ncoo52gtGcHpyeUBLAsYnqsYvE8K4YxofWz9bFJD25VMfHoBXX8j1g9thoiDtUgfiu7nV4W4",
  "key31": "4hXLnCTsi2MrdbwWnX51j5sDff4WgMaVEf8s9pyXQnoRZ7TrMesrW5TTT3aoe3WMBzDMP4ipEzmbbo9oLLDKznj9",
  "key32": "3a7vhh1KHHuMoAu84uyL6RYwfYoRm7DJ4UULqbrxUCAKHrdddKnPjze5jkaUvT9EZ6HRip2tsqSTHH6ex12eYJ3B",
  "key33": "2ALyjBfhsPHoRH2stgWFCDcGTvvkJMqx7LJXhgMYkz5nnBCk2DSuxxSdTz1UvSPpAmrUVwxTNm3cWqk36nsNH1vw",
  "key34": "ZtjvqKvUg6PyiYMRdZZMw39NWWcJuHZcCq6bSyGo4J3FzFcS6sPt55AqNtEiC9kyNuMnLS9UKgLbmQxqd9GpsCH",
  "key35": "3Ga9JwRmZx3MKAvDPf3yJ9pZFWM6uym5ePri528hYMpSJRaGNkxBSA53xov7HRbnEhheSZ78QFic7g4J7JmzquLe",
  "key36": "44UqfPCnjth8FuGxDrZzzmDTw6bhi65ckouvxsLg2cPz35cbbyraVgSzJytLy81f3VCpfAfASRGHbhXPUkNsGnKn",
  "key37": "4dPXCkhH8J1qZDPW8V2nWBSfHx1AQ8aD75X9FRBZHjnw6CE8jQTaEJsc7SGfRK99o29RvwkDPL11K3TVYs2fGXRg"
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
