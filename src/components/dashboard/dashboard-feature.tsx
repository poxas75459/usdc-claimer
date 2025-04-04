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
    "4QgfxeDWbV2ALUyJkMq4mkTPFxVtvrKoyHsnY755M7E7M28YpEVQrjXgH4Cqxae7JjHTvJdCKAajnwTVzbLhRM2d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "qYwNvdTAH7NNGw6Zwwwv1ivjLPkZDVYtPPkpWmHGD7f7dtjndveWirCBvJLJgv9mqio1ZxMzcd1JuGNnrRgJoMh",
  "key1": "5fRqnvJgFALLSZac9aPSsAtjQaEqr646ht8Hh9uYK3rc7KB9ZnzVaTxgJu1s4R6sbV3XXuRSxPRHxjVC5RNg1y3w",
  "key2": "3rmAiWvy2uzz747fx7K6ySHQWwHcjNksQwR4v6m7skeJiHzsuRTT7jdAmxW6bHpg157ypKq7jZTNPim9LzEvpWnD",
  "key3": "2xCJnKtpNvjYxFuENpG95LfnsraPFmmovYrfNL3wqqZf18QUXg89UEkwy9bf91pyRBWEyS1RD5YYj9fN6jK7YUJZ",
  "key4": "2fvopWwFrDYeq1aB9CWPWgtKJR7pqhuzcSzYzY3KeCKXCRpGeDuZk7YMih2xcoTe3vqdKx4bvg6g7btpmbZxwyJ5",
  "key5": "3UCfCHdRVZ4DYAhxjxmr4LjxbjoCvYfMinFTKzUkMvnuASCrs7vm4hmKnaYKLiAkvZ3kENd865L7WseB7pzNZV6j",
  "key6": "AsP6zWmRhecZhVMXoV9FgUQRcRHdQJyL1RhnXX1EJc78JmhA55S5jjEpBMrB8xAJKLeetb5EACu29UqZqJKYT6U",
  "key7": "3EQRrNNJ1a73CfZ2kTPRaCQhubEsrPTWA5xRpFbuU5vrG7ntdNtVot2zgmFd6cDRxHTjTnAF5F992b9njMzKhTDL",
  "key8": "1koxHaUP8EZcBKreFTHGe3LAWFeNvA9Pn1GSdD7frWmFgKTpas58pfjk4cJs2UAuUWv6xTYUGh7G6DJE4aHeRh7",
  "key9": "wFgca5chLG2uh8HcHCJakN5B56smtLSTfuvUaik3achcG41T25XXFrw83yLcZQDMhpLybdNAVF5n3NwH7P8gna7",
  "key10": "4hNLz6ex8tuktGZEh2XMG1ZdHYYCPH4tvf6pJm8EakhEgrQhsMmV5ZXifPn6UJCoEMCgVt6ysBy2x5kdq3TwL8YU",
  "key11": "4S5xtsgoycprD2dgnycGugU5rT4CEt2gYqf1SMK6NxaKBpGFHWc92QtsrG67JBYCWtmrwb9ifEWN1dHiBdBv2HJC",
  "key12": "4hURsDLMwKpYTWJPMBMD5cTsCrMBjwKTyEU2gwmgKKXJcQWNCsCJzqdiGEJARvXdqG7vc6XQQC5xVWXeW3G9GECP",
  "key13": "2hReUzsCyusKB79wsQJ7CGaFfnjKmFZoxsFk6LtzZboYJNgtJoH5GowKAsH8JRCoh9aZRWTkSPicHKAiqKLxdNFp",
  "key14": "5tHJGj5TNaMRVs8giK2vfn7kzyRo6JKdLiyecSqpZo42DwKW1X6EzunJZkPbjiEK7HnDfqMcoG89Cpm35qs5p5X3",
  "key15": "GmXRUy4NrTvF5fe2dXooRtiaErkC4VYFed1VBxRzcNjygRXJCVmjoWYe9sR2BDZawRRWwxiVTtivZL8ocURbLbg",
  "key16": "45CccwwaADQVo5iyBLpThE6X4NDhs5MkGavTJEWznTQnFCmxTKr5H8zTeBjVhuwXNbTpUFw6cAnncSA3buXbb5ct",
  "key17": "4fJ9wxYWbA7hhTmSpZz4eWuLsEoSWESRR9C7bjRFitBixzVMgd8M2ZT43TmmzhmPPNFyfWFSofN5ti3oH9hnFZsX",
  "key18": "3RhoWyymAmxRnfLrhwdzwpPfRpyt2K3qrbeWG4V8TJSbsdrPksZ8iqC5tXEbGcaDdFkYDqs5wL2xT216g5RMhG7X",
  "key19": "2PyagngnSa7fDZywZQ5HtF2CzMnf7P6MbPPgpwLW9QZsLXCCtosqXueoXoWBeZCHPXAFaTTiCXVU2TNbavhgczeY",
  "key20": "5RfULcXKq3rWikE5ju4QWnZRmicy7w3EHZR6pEZ6m77FSHpZBTC4BkPwhQz7LzoixqWtBDgTKmCro2kPNvRBLmbq",
  "key21": "5CLRzsVKraCaKkwpdsEscPqBsF4y3E86DwKackHvNANfHcjReE9Sp7c99jfve9AdPQ9LfJqXWzhuMpLCKAxNp1La",
  "key22": "5sgAaVCADEMiG4Q7pMRxdSkhn3ivMpm5NLuZmH3wttakmqqBW55RxPxPKt6VFWybF43CiEKdGjnyNq3CM85fvJjU",
  "key23": "GFktwA3JW4Pga6mvSJNFU3BXzmb9e7RXjgR4XfkyYD4StjWnBH899XvTw7C1G44z8i1Wjsq7zQRCNCKSK6Lc5Ji",
  "key24": "2xbC1KQ37AuyB6gTiN8FMGFm8zRJq4R7wretN92KU7NFaPVGniUhSv5dmDE1hFrpJhDMG9SVR8seurReMn5eLcY9",
  "key25": "5FZdhxn8dc8SvQQ3NR3wKVnY7Bh14wXhc7jcEfrWZE3wBqL2vjxizxtYB2ugh4gD39cqrXexLTRn8Vg9UMwwdafF",
  "key26": "4NzYs2kba6pCdpn1nTPFnQ7eUbnnq4xYj5Tgij5SBZtjqmKANSJGdgjSAVTS4Vn6tiw9F1bNh8ux5JoaBwnYG4q4",
  "key27": "1A5LmjrScVJGYxmRWxGJyiGFLS7EcpQ5jEEE1qTrwsHQ2cCRnMwsLciS4zTYhBkAawGPiRTCMYjge16ZyrUxQyW",
  "key28": "4ECsc8w84YBBuEKn7FyDAEQwWbFhkRQ8FiyVqhKAfefyLxtq6FjkZTf2LWio8xxpXU3ECHsakDfNyZeCEbaAnPZZ",
  "key29": "Q2wgFmpUxwmmCqLwStUXYRDProBA9r7UGrYCymouJFhAhCRVTR5GkXpvXJMssRCMmTTLGZ5B7zSJUfrDGc6VdaA",
  "key30": "62WkPLSV1ZKYhK5fc1asvgZNZEpKy7DMYPvfv3SZn4qMv6ZcAcUPBz13LQ5fdvUetw44THtgD8YjmDD6CqcEopzv",
  "key31": "5QxXCMUdRxRW11TUHdMdw6yd6hNwjMw4Kyyqjz2oKsodee5zxzfXrC5RT2QxaZ9iZdUnwD86CBnw4H6USZumFEZd",
  "key32": "JGfpkxpoKsTcbQHkN4jMCojbsY58F1tVEY2HtxvDAZ12HmgztH4di3sY8VTAR6KTAy2EkmRjoeC3i7GF6T4qLFi",
  "key33": "6mH26749AzTN2ZbTnDAnjo4DXpDJbdA9wTR1Bp4G2xb3jPRDTKZc8NVYteYjtKSkb5Rrd8iiM8qN8V3AA3fpXRC",
  "key34": "5KH4Tq586LjnuUXdBRkwymtC51rNBR4SY2G7sYEGvqsniLxy5eYt3Kp3ixyaXAmXhp7fGC5szgWiSWPHoSHidZ2F",
  "key35": "3wMmXm59zCSMP2B1k4oif43byLHk2hycY7CGkcKvWnHPqWuM37E4nzUpn96CA9e8vnmZsJZr4pcKQsfsYR23g4pQ",
  "key36": "5EHNQKhhsevH1pjfpcwGt2x9bnSYyLVEcskKy7XrZnHM53fy6YyLK2b7Kuc2r1NZpXsaDRXEoVsDkpGbQy9JobRd",
  "key37": "3J7383jWnmvWTcrthp4Uz4VDnJzBrsRqzes3uRCitbSqHro9hXB3vHrVwfnVoN4dPEdXXVaB8JCFxqtgQcNkGB6y",
  "key38": "2FTDg9p3b7QB2ci3WX7V7WdVUb1yS8Hf9a7U9Jr7yF54MGYaz5Uptubg6TkUJ3dETRzS3S9wbBPYUb6m2fTR7Uem",
  "key39": "4EEC4zRfHLmqNJd8SxxdcHJngvvr13QNEeSfxwqJ5eiJ47CwLETHqLRSX6EbcBqTpkh9X1e1kgJhcL24pLWXqGXU",
  "key40": "5EUMSuDu4ZDYncnGWvbHTQt3wkvCkm6XV28axruZoGQ69Qh4bP6akMF2bDvXfPR6Q87ZDa2auMa5CoT2wxMoXHsi",
  "key41": "3yu9KtRo8sRsdDXyCrzvE327bbyZfwwbFe7buGVkNTfYYXiWmZzqj5qYXmzZedsnNiCqnbXpfdUnrV1qaV1ZTmFK"
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
