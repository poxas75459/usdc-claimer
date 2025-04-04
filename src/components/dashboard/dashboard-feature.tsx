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
    "3n2bVqAdamJq6LAM2x9thxFhEHo2hnWZuKLuwQSqmpSHBka4U7TMBaPTGNVJombfi7VmsmP69ZZhdnofp5PnRPNm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JWSZQEssrsHjnJMBALfyZV6tcF8B8RfchPBG8j2GbECAjvSNLD1DEEKaziNczgTMpbgXrnkHhuqzhRd2CwAJckB",
  "key1": "4VrRFQVydwUSAJMbBB82NNMeqnZQ5DPJJfTGxYtq6SPEEduUzGx9yLNmZoJkqSJjnGGdpStCjEY9Wqmm9dbCfune",
  "key2": "Ni6MjNqy2pyx5BuyNd8bmWbVRgsdLyHiJQbQUWMZoQAzo6uHUSKqjZJ12ucaHCuvdNR5eLAySub5TPCtaLMV7ce",
  "key3": "45SLMfy8AGHtWNRKxwbgmAijLazdxWcfQMpQa3h7ngp25DgxTCysahoiERVAdj2hao6sjxPRC3tdJq6WaZjooiEV",
  "key4": "4raV5q8MrHLFP4oGvU1B1SiPC9CxQFKXJtUvK8q4tpLTV5dBvzXYMrNnrPLn6rHn1zJg1SL4aGLE3nmS4BK58mB6",
  "key5": "3bxnmtf1tT5mFmmqm8X1ST8Li48RKk3HzEpqNEBN4bK57tYCpE2KpE9qQKUdum1aCqHsw8qsxXtw76vchWKTe6jT",
  "key6": "4Vx1iF3GF4sGJ6dfCYLGFRvZwgeyMGiqGxpSP9EQTs3SKdVuHkuWo3qyUDLegwuvQR3zSByicurWBvBuzZ59qUs6",
  "key7": "2ohNLvcPaaakQRhDRfY4rWwdh25qZpycMbwHvQeASJN5Gfyskh3d2tiF2FtaBNwNGsMgKafsakEpuYfYZqaxMKfA",
  "key8": "5srrKVBNiQ7S4ZZBiqDqkWECZFWxVonbXKKpr2zTSpeKnxpRZtp94ZyUpWkAviQa12AbpHa5N84AbVe44dBucnfA",
  "key9": "3Pxm53CR16BpiwX1iYeMKtTPCPWaWb3m9Te34hfcLmfpKw4BJVmgqhHzGZk58yuFm2Lm9YAVEsfRXP3sen1Epm4h",
  "key10": "9jhpgs2e8N55APtDgMxWxYLW3AmLqYzRydnVB1U5paRDucGdyfdBUPrg1GrNf3BA9XdNixfyuDuR6QxmQjFoggs",
  "key11": "4EtyKENwC7cG8t1ukWzps2Dwe7oiHxLCDvczjAYNFRcSnpddvWiiW4ggsJFtrdDVYh4pY287RA6EnN5KhvGifHfL",
  "key12": "549BFtSHoLjW2K7Z3LHDCktmDjAt8qzkRn8okXP9hvEyVTtCF8kMb91h43ukkVbtUi7UJXhvaJBcaMT3jmFNhje9",
  "key13": "5PAMJQzJ1wKMqE9mGhMAw7q4CfAKHAZrN1c2g8c8Vx91kjNs5x4rMHHuz21NVZvw9UnkD8ZcuGyjAubtKXqq1yCE",
  "key14": "35m485WyaLowDEYwHJgxswFy8a7jPynQoLBQntypBr4Q3ZLDEjbaTBobYjyKV2YEurgB59jCgPX3ZB59Uv4Hg3Li",
  "key15": "JizJE8NPXG42oppF7SXU56sxuydryrTnXKY8kqQxWhbByn2g8wPH4XQvjtZ1naRDs7zzMQ9XqZ4sRRwRQNNeAZh",
  "key16": "2KuQud4EskK36CeV1N9exouSMeBsUnPBgwdkRJYUi14Fb1GywY5n4kAh4aduPFZRujjrR59djWQAiL6PEwSxDRxY",
  "key17": "3X4znbJJJcamFxiZ19dVKY5ex1bUB8okidNuvCMXMQtmsah2yVc22NVos4Uk9EAAf2fjQUNw2fc5ZGMjVjP96wvT",
  "key18": "4nLUkmXVck8K866XW12xUS6QzqT1dzxBNV6TFmopSZpBmC8xTD5vhEdqix7FSocybAZok8gmmfEQWKQEFTd4q1d1",
  "key19": "2Y2DGbi9GxW5cyYtEHg78zBMh8eiUDWYQr2hw65hPp7qmVWvJsyhC5aQTV5oAjkEbxV6NCvn6ZZMxofXiSxjZqqM",
  "key20": "4qRQJdtCG2dkyzpfmXkv5vPwaZ3nHusxp8unt2hYa231fjW2wivtoNH2DYfebtiGS8sR45HQPCF56ENy5cioKxbN",
  "key21": "waQEYgX9fjy2mFLXkBUJ9ZdbMH6jj8tQ1XCtHbTsGBsZGZLJDTaCYf3fnxkBHdsGYW1QJtUKJE7Hijy2jm2tUuY",
  "key22": "XxdYcsMgwUDuW19f2aVU228wBihoh8wgrgqokMdzApRc2NhYA7N9MCzEjD2UEYKBRugVybzkyq3fWJ2a766fmMd",
  "key23": "37xR1VTJiGGRTYSVswRRsFSjrtkSGbWpHy8mSXThp3BWCgMNTVHA7xtot7tqV2KDrepZa87PTJZQ3EyDBcFBUdBB",
  "key24": "5k4SY8UmR8xfBAvJj7dRD9K5LPv8zSkG9VwbeCKd2Wff14sHoTBDxP3QzRqwcdWrcsVNJWof9tJAr3sDM8gmxRAY",
  "key25": "4wvXiteCY9Y93A2ydg8Vw7LK9VuowVpk8Z37vaKvfqYT1S4ydahQtxz6CYuBZ1dnFdo232iwTDiRjfwQmkqXkNZq",
  "key26": "t7eS3CiVwbdzCDDo6RcpAAEaVnMEDD3GL3a3nCgTzYB91cyvsWmTop2Ten4oBKCwtMNm4gvwkdigfpYZzeuC7U6",
  "key27": "2gTAXZJmrSRXqVt13utGUbatsdYtxEREkQekyp9heLTi1wyTJh2p2UCPuYYPfVJJMVAwxfZyUgq5PnsH4W6foGzH",
  "key28": "4RsepFHTRehdobHkMKwMaNxRGUHb6HPTc7F4ovf8GaBudstDwLL3YVK4ZRzaQGciLhWHYQf4p1gmmMTEo4E2HmrN",
  "key29": "9KUfVPkcjwQapaaBJVFwRiCg1d5HfB5S4FF49rcxoZCvbjN8RAncWMkR4RGzrBqouF1VHCd7asAQBzgcsDZrLG4",
  "key30": "42we2ePUUhYHkXGnK2XcucJQETNkkzo9MhaFyXDA78Z5qPWkz7XpwKt591EmrkZpuZ8sxBtNkd42BgptPyj9NjFE",
  "key31": "2aoww6tKg8vj9ZSMSq7rijWbW7ageWzC6e5ihAjRD24Nvg9uyfaPEyMCbi45sQpjpSRrgnYNkxxMJHpJVcuhtY2u",
  "key32": "PJQ3vXi9ywPc2kUqP1DoT2YegcpHyi7WQAPhQfDRjxZvTjnuGPvW2dzLFYzM9LrVAb2LXgGJtCtKTaieogfY4Ro",
  "key33": "tXvrdLF3woJpUKiDkzw6B4Tm78xba7mMy5YcUxzcrWRDDPPc5qHLj4Ux4hT2DjTTBQW1S5Y4fbfjqX7TtokmLB2",
  "key34": "s8uQ866E9Dfuumaseux4BFsgybt5xMGkSLrhmxG3JUMf1J8oDZzCNBdJR9L8BfhtmiqBna7iLq5Zy18fEv9EteX",
  "key35": "4aSgbsxkHK1Td3VZrjkZ3z9cJPKxEHyandNu9wQjcjULZn1hz8Ny4zzGj9ztjHSfiejMxXmkNeSqtRVFUHdddSsS",
  "key36": "4nPwS2RzQuWbKW6qmmU6Enh5MNTfVUG1DsPu2b7HDxgReazUUQqMhdQ59dXVF58gu8vjo6EVfSi64XxtnZbEjEcH",
  "key37": "4eAuz32E4He9Ycz12GubpgCNajpas97a9Qe3P756Gco4qJPFamA44xWwwcochKCPp9qwUN2CSFUCioyhTBRvA3hw",
  "key38": "255mpPtmRRyxn4MXGmm3Yn6zwnGXTXqfaLJNSLSgrJxxU7KCFK2vie6PjFL6K1FnAugGVvf3W7M1US75qqZi1qcP",
  "key39": "2aM6hUWMy74L6bfQgmMKNC6UVH4cd6V9nLuCeuZtJFKcRry62gpTmcuP69798vQgZ7GXEVLRQr9iQcz1YDJCsqn5",
  "key40": "61zAdUTyG7v2qNaadXQMPr6TnhWxMTFNHssHeWuXPDsrbkM9Mp4ygBmAC1DrqhPeacKKoFj1dPg87FC2y6rfbyJC",
  "key41": "2b1Wwe6ngQ6aq2DG6CoGVENSbSrz9qshK2GBaB126o81sdeGV9NrQ7HjpDXrRwZ29uyhZ929LZ1QZprSrjuX9XWb",
  "key42": "vZQukBMfynkg865SVWPJaWeu3F1JTPT92FWibXfmu2M3gdqELShkL4hSjW71jAyZuHADP1k5AHDGPZf53o4kKhA",
  "key43": "4YbQDi6AG8cA1fEBxNSDZbtd7WnecqNhW71nEaYdpUntgSrfzMXLxb1PBzaTddkutSKSjeS2F4GFQsefefFHzxCK",
  "key44": "5ko4SRhBWkBgneZT7Bxu7UwGfvvfq5uo1WNEJzj6kv7PxqUABpex7ofaJyQDVfqv7R7mAiAmu8GiYNk5yCRaMP6L",
  "key45": "2jneUD1Hmzg6Cvxby4Wk3bZyvnVzNyWkQtkPMhH1yTeMfGyYC8e345Kz3ngvPTBkdGWNELNuD2qg5DThrTa271Aj"
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
