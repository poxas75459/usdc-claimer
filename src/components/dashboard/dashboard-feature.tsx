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
    "4uP57PsRqCZnwKdp9rBtdLdYziF7Z6R34jdWsiE5WfwBmb337FANDvZLuxP2H4DtyivvETsKEh5mGkaaVUcTqkiB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28XJDPNxH8Wj5v4Xx4mzESKrXKUuAUhwxmdWbv1B4XUN7MmUDUtc6oVQ6pZNtdkeF8QFZev3ndxgLVskkU6Zo7Qx",
  "key1": "43FgwHvMF2NLSE6SRaMGCBYyuDYZUUAhX2dFZELTT7R6Jb8MFz7CMRim6S2UttSxE3ArUEKm2R6gBYhvwAqAwqow",
  "key2": "3SJJ9jCM5BxFomzDTfojBjYVyQvBVPY2EbbkuXcdpjP4KcX7PovwHr5n7BJxyQFyF6b4ohZ9ZwdENVVuYx8cjzGA",
  "key3": "5duGdKB4W77TDySeMAg9ZCqmM7zfkYiJfmpNN4kCHDtxNRKAdZWW7iYD2bS1tscg3mbDQxq1ZpwfXD82eu2vSpYp",
  "key4": "5HiW3bwF5x4gqRmCCfEUav4a6N2zhCzXqgiGbAThNfFLz8KFieVk5tn9ZjQ5w3tMx2kWbN8DadKyYxX6rLxbXw4G",
  "key5": "5dd7Dt323TtVbLzbhXBAvz1Q7JSEcBZx8u7H9pbv55xcXCEyXC2nzz7SwRGBhfyTLz2mHsiH3mZDt269pVvfcxBV",
  "key6": "4rizKJ4ppXfQj7ZqmuCSDhzZf2TpzBL5FwR89sSh9Y54dAVaGsFZxCT3ziHCoiZJXcFUbp8A5jezTznRxzyLFzvv",
  "key7": "2XxySV4tDtao6FHJebZExdABGdqDk5DQjhqkwTj2ZFB28mgguReXxdgAysd5EAWbdaNdZHazRGbBMdPpPauKbjzg",
  "key8": "N9Q8uiaLMpgAGCy4ST7Pe9tK68TMcRswfd3wmpmuhEQzXctvkxvXGHrC6778w8JPUM2iTACrCo1hoAfZdfrSt5C",
  "key9": "2N9UgBT9Eq6hKJHHvA4rLRVXh2bLvTHApJEGHnoneGjN47VCs4xCRr89j3LmGqkr3Tfy1L36BcpNY3moZa6MGHq",
  "key10": "4GvYtuFZzgRJDxTikAazcE9p8EohLmnuTWrcDR3WKeXMmFtYDVKgnm3dMwfjMUgWXzx1L8w4wV4q2J3DSw6ozzrt",
  "key11": "n912DJGFF86wMAX27TT7zkKBvziEPLoLfEFPXYZ15ByvuwUim95orqKkKLwzafaYB7j7UxbGFbkE461P7v21KRN",
  "key12": "ti4UKrmwZqBkpQv85iBL6Dv4fN3k2Qfhk6Pr2CJS6PzwShKEudG832ktvnLp2qtfa7QtDNgjF6BZoz7a8vNggNu",
  "key13": "EyRgCATBexNyD7pgrhADrUnJesNkKnMGyAA6XgiK8mShvi91Ns4Yow3wpV6nVamZHU6EDXBUKC2HAvSfgAC7Mnf",
  "key14": "53PJK3NKPWV4UhEY9SBdEnpXkfyzmLSMuSCUuRAWZmC3eki2CAt1QuxjhA6vdUM8sVicRPFxrLnw5WA6nKZ7PdJJ",
  "key15": "2D5G9sSAR9ykb79ncLrzqcQWjFHc6bb9gDdt37SDSJX3MJW6f8T9fBXeNQkSCx8DNcg8JkUgfVpeG8epHcTaDeVx",
  "key16": "5eRS2vWi8jdWo54zmNNp3Wh32deF9oaXSmyWe4Q8NxGwmzE4Go5xwFMaUJMS1ESrxXdxkdyqweVvjc7rta396Wu4",
  "key17": "55cdURVhXhZTso8SQy8uGrcA7wAVKynGEtNXH1UTfY958f7W5xFvBDfVM8A2H7RhU9iGZWnrknwSTnaGSQhjHHgd",
  "key18": "2CzXcjg2YEucijR3jWVSajGwdJ2vdD2ADQ6TSr4re2Hk4T8KJQoAsrB9zJYsdWJn6EV9if7fj2z33hNcKTJ31fL3",
  "key19": "E4U2Gpskkf7TypctTVuUdSfSsSUi5jxfkV6wFMRrUW2wsoFV1XUz7SRQr44eH3mYkFr5pJstRwSuNRRSRrpQcva",
  "key20": "CTKD1JS4X4p9t165TsMrY3HxLsoNm7Toz2TvERy71oQyYHnPiK6BoYA37THh9QFE1jzTu7cyt3R6PPRsjjP8pZk",
  "key21": "wRKDXZptUFAvYGgxwL7Uz8D1dQaf34YKSez7cdwZVGEV1dDFTDQu91voU571UaYUgybbJN7zcSCgV8TzbkexHTr",
  "key22": "3rUKqDJh3QJ3TmwgFmjCdqtkHja7iB4iV5URGWikuLkx1Mj3aFVgmW1zHGJ9tyU4qKuJaZfhHGyESG4YEu1EKdbz",
  "key23": "wV2EPDaVWAyDsoXxD1cfRMFr9UThKVTHzdmpAKZRwxzDCDW5t2455L6fXojhZvWALr5dHQVGwYS4SUiStXvqiNm",
  "key24": "5Gu74VFDksNJ9Dxu9irD8a3XMSeGAajvb7pQmCyDbLTGo8WQ9HeenrueWiSCJpUgVGfPx77yHmL7FfFFR2JAUNst",
  "key25": "3BfYBMy61Xwdn1L7CFq4bPb3eSkf5YqiLGF612Pguw8pJ2sNTp8VmMVWLpJTf9N2GcWzp4wv8C6yDRfvqZjGBijy",
  "key26": "myLJik8GbmXfSndD7SKuzMfubksrtGmYRFHs931Gq1dxdMAjjSANv7mpa7mWHLNPJF55pX5yYN3TnwCppaACcBZ",
  "key27": "3cZcSf3QnqzVEWfpadqdbmHB3KRnY1YrE1cRgMCxsFS6rup4eaECFE2112gXmmFT5SKGSgbz9WXXHmuKDSL6VRiu",
  "key28": "3Z6sdTKB73WxSaAGdrNsJboZ13CLurKwjGtJAyaZqMtM1mVdLXdFqDfxJnsT24ehvGRPaikNz45yBezNuo6eC4fT",
  "key29": "5mDsZpeVSWdkR8tKSvxpDgTURW9pKcsocRkGfacWZe1HeyfFqSrk3PQQUE64QcX2vCnbrMgMHdxUgRDj4DLHyWht",
  "key30": "5Jxq8JXLFArAiY59zJ7V16oKAvVoB7QTVNrgChhh7QJMbtSDVjBSGfiS3UzoveTimdzQ75XR49pc233hQRbRQM4o",
  "key31": "4sWbZ5cM3Qepi1S5xhEjeLoXJUXerKZNUpQxthXhCeEkJMk9x1CKkWrcLccVtDpEcb2tdCGt2YeJCXixFwBHFyDC",
  "key32": "2D7QMf6MXGkSX9gki16811Zou7xTn8ECGtjdRxGNXeeym3HuEpECJbKkzagjotBiEug9r23ZfhZpQi1Ry88wNpP",
  "key33": "a4gkjhuE6JoS9GcmyZpLJPGSTBAHLyoDxyrjvecxUStefsCboNsbwiuLWM1FjYiMk4UYAcuxgVjKkyHF3R66rVz",
  "key34": "LnPEqRyoyuW9waWbSpJSbenrxvKx5ZqigKi3XL7Pe1i2P5kgsyatLq7cp6bKfuXeeoAKHrkPn61YRsq85gpjcum",
  "key35": "2WmZavb34SRdGNdDUDuKxqQuEzXD3sESUqHfqqihQh6pCaYVmtTbpd822p47yoVFuVpjiWGVjxMu1DVYBUnt5S2r",
  "key36": "25mu3RU2r3ZpftjmHSZxm5L5ErxPRKiuS2WTXRQVdKrnwHRoev3j1U3Tu9A5eakSAFG48d8z4M8siQu18SbZej7y",
  "key37": "4qxaB8KtndeRZeoJNrD8Z6jbVdrZWePE5bWgwAabFMjhK5y4iBGgmPg6oSiVYeZ9PhxowevATXni4Chk2bpq7ZWc",
  "key38": "FmhbNh2S8v4dgegavTy7qgo81jBEPZLhNZZB58zv7XezBHHxy35C8RR8W2aR41uqx2Z9rVsxAA5LHKnq9vdi2aq",
  "key39": "45TZ91QpAFfdPbNyizM1Yy2NtDhRMFpB1R4Yx3JQqgTTqW5tUyiMUmXb9DTMzZAEP2DiqHoppxnJTrSiqFQmHhqK",
  "key40": "3GeQP1GJjmN5bWJk8pitYwsRpJz2DpdXmbD8PLPHid7oRfJEdvwpdq5AMrNM1GNsZB235ZFwPVdMawKvxzwzy8AS",
  "key41": "dmiRYZTvUh8S48HWCwr2oFuUWUDEkS9pCxgGnK74qbTbjyyNsQYfcbxuEfZTYpx1zzKymeNvpLGC5MNnkrYqk3d",
  "key42": "43T1hScVQbATYG6NowNeRZt72Svfj1xrk61anvZWGQsYgUXKhGE2G8nRos3ADAjmArgUSwbZsgJoEqMD38N5BMjh",
  "key43": "43WJQ1TYvf9uX46Hr6k65jBKeumoDBXQKFMpjYmt3wc9688n8kVVHzo4pp5DPxBktVJRPgdo69mbLiLDjysb4ouE",
  "key44": "2Cc3goeq4oYcfx3zhoFMFDnzwBVWAG3hT69dVvN9wrJJjKegXeigQab7KVXhpKP39vRFwTgFQJwhAdEqBtX2d3wm",
  "key45": "3YUjPqwBUfuk33E2yuRs4Syg5fKRJxxBGYo4XQJudxuQ4QnGDzrWdUr3JzqB9W7UYJeKiFerF4LVZQDyFUvhAWuH"
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
