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
    "4LEo43qy7Xdef4EHZHVzi1CaKsYmx8tsJkwS6tcYoxKXLzDx4t8t2QscuQJigrm2d5Y6FSnSzBVgdcqByiEbSxyt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "twqFp32vAo51ec6QKhMgit7F3tVeHf5ZLodMganodhgftRe6CfGJHAN9rf9DMsHgMw41gN9g3fWwoARpR3YZ8bK",
  "key1": "3oLj8rDZMyTrNnWpNSKF9hMmQxQ4WwYPytMMfUQhseXW7aHundCWWG7ZgXE3gWNiZLPRyRri4f6WyNvSRrce9hS9",
  "key2": "A8Adeif7eVoZW4SGBtTDyMLpYPwZnPXRtjJMTCouoxHwC3oSqeiSGXdhdSXt17FCiVrmNcuwB2vp8VTn5EBHzKj",
  "key3": "Htt765HsaQGWt7ozL5gqHH7KZPa84kpjHjkRSwBiJVKxoFUfdc5vVEzyGN6d86xYY3hRsKHHGCteiQrT32V1DCN",
  "key4": "39P7Fps5MSWDqkDuG6UJ4VQEpfzoGEvAtEDSoGNQ7MxnYuUnbxX7NwyXgc64vdw6dhTWzRoCpJKsxFFyd2VT9DXL",
  "key5": "64k8heUohtyRSfrVpW15T3rTZ9z2acMd9XREJjveJRXYCwY4Fk1nFXPSHXqK9NP4yfwUiRXZZzUVB8TF3MnDgzWE",
  "key6": "3MarGJkj3j8sne1EQisTFEqB52X6dm8HDx1t53hcgch3foGx1SD7gYJarq4nLKk9AY2uZ3McTipiQ7R9RZLjKWW4",
  "key7": "4MLqsWhYeQZnh5njf2tGbxur4QYvgz34ymWjZKT2pYjitAs2DCvr14hTvpdfPqTH1og9SqMrzCpfWg4tnBmQA2Lx",
  "key8": "KsH1JBNvKE1PiMtZLSDn2rVoKvYdCQiFXNtN1rf5Ckr8mJZ2DQvKSnpgdqVCCV1XZ3hjkc4ri7zHpSmp9zN8Nx1",
  "key9": "4B8ibg5UWrmoXUWiMF6tvML21N8FYq7x9K8ekgaqepWWHrz16XFbD7ZsadqMzQXnzTcxdfQEmdCYvKVQ74vXegEs",
  "key10": "4siXjjn7Tzm3Bj9NtmfEa6qimX5HxkB6btjSd8XPVGJENEJ6m3QoCwVjPMGuEaBiYSinQSMEWDWqWBggyUwAt1TH",
  "key11": "4Gum3px42wBM4TL6TKyiT27xFfjbTA1zyfEtw7D2VYL8F1HCmgfKA25RQs4sWUTjFHv6tzput8QNJdUUFK1Xd7D2",
  "key12": "4am1mebVDogKKZaRbRYj58cMKJvZAVmdMpZEqUccRFgmm2kVW3vRSv9W9RBdQsTVPio9wFJgP7Rvp6ra2uEuyME2",
  "key13": "5apPJvVPofrUBM7k1wJcR782SThrNDmHKtB1tYPjHcZwnGF3A2S7ciA6jByaraAkFAv7EiRk6Xm5CCePC5iSRxjg",
  "key14": "NK1sSg4KACa231vrPxadFzkuu8GitrH7HgKHo9myYH3U3zP2QFVz7pey9PMUQwVrmjn2d9iPPfNkYc2xS5j1vjc",
  "key15": "3Fr7hTG161RveWGyxSv89uR3X4phwxxguCzsNtbLfn8LrgX6hhn6PW5uLmm9XS67PppUSWGMmYdt1fuHWhPajYob",
  "key16": "5QrkeZ7H9jqejuSg5q1DRMHWuQvG55RNCEyjRYhoj2RgJPpAbUD6eDufVVqgGxNYnucpSfiSPcJ5sZixnXtqv2RZ",
  "key17": "32FyPoN1CEbPKyRqUjENmdcPcDXngZFu5sEEngtxfSewpZMaugmv6HFE3y7bgm9ERXdEMS8kfLgwjAykZyvtwrAT",
  "key18": "53CoxLmPp5A1TMU14YoR7ikveVAfLXjsjGjHnkimFQA5i6yx9T7D1MSfLqVPPa2n2Fd4XXg5y2uL1rBwXxXVPsiT",
  "key19": "2G6iArkF3qkiTMehTrQjQhJp3bzPgUq5i88DYcDUin6U7AhXZ2pc7mR85PJBtir7cbxScEwsixZTFanTuU3rug8w",
  "key20": "Xpy9pSEoHBR4vSR2ZQEMBBCkQLnxYYhjS8AZT3scQ238uqnbFzPXc78PKE5R1ooKgqEdmdhsCanz8m8ZeeKCPH6",
  "key21": "5J2FpwZcEGe92RczFYgWHEB7HJ3BkKkPaAu6xXqRfpAbmCvHS7k9jPnEZa8LPQAJV5s3Y7w4ok6JEGGmko69rAvj",
  "key22": "5mjrznJbYto6ra4yGQ7bbVLHnKhFggBCBsMYfCeLbw4EcJCAUyzRSFNC8xMs2G71RY3qf4a6kzwKmJDkGqB1pJh3",
  "key23": "nuTNcDChhBtpkCdUnis7huf2bPXQufXqFhwUzukcVuPXGswQ7ydYoeUVyDTCVyDaD9e2SQZWzj6eqiTgbHmSWbH",
  "key24": "2PD5SjLRjMQC1iXsxF1PkhzVu3urkYgVX8ZYmbqTXiLcKnAZ6StQvuKSGExXWVPFyTrGrs54qXDR7PJMFJoced3g",
  "key25": "4RTgpyZNLCPchL7V57mF1wsmHgm1G6VsuaK27Th34LAXpFLDbfdUdJx5UEfKT9VUA7TTUa3L7P1fzW3eqQJ3jMoL",
  "key26": "z2QqjDay1XK3xxf9FXabUDNSrSRKyaLyqNKShzcdxFdeha15BLmikM1YRgpB7twcxH7Z2UapNRjiYyVmETyBk1R",
  "key27": "28GG7gcdb16efUK7keQ9DQFDj6wjcwCVqTpFsAKMt8WvV62kWFWYvSkSCA8t7HtCdj47Qa4kVwCqW7JAbq2hfNm9",
  "key28": "2ZQ1BiuSgpDRHKSJnbZZw2Cv95MSQFcfcvykHnXbHvS35aw8DwfH8saUrpWb19AoF55jqsokRieZBr2NC646APv3",
  "key29": "49Ykk4SpdjH7jAdxRftp32hBFv576gb3EfvffYoRWmeGQrTTZDcmijhee4gCa2PrSAC5gJhwfpLHuvQMTwk9yuS3",
  "key30": "22bKpjjfbNqEnvhJF3J7mYcBGx7bUNVtKBQGYUponBxjtHRGDvai5VKrNamsxkpq6tYu1a76SaZSMocvNm4uM7n4",
  "key31": "5S8RBBugCnSkGCp5i9aJ4fH7r4ZazpZE9rsthQrZWBN488XEcnFgKpnor9qW7UeNHWHmHoBarbASY7qJczdLMu2z",
  "key32": "2ym8R8nVCdqgkodd1SW4PYpT1LyppPUbpzz9qMvqtNvB2N6n3gzrkSfyn32EjfVwX52TDuR9eeW3ue9grqX8VdXd",
  "key33": "5a6X1VLbautF99Z29dyeLotohC5WqTvSfs3rR5gT2ai6MadLM4NLAmbZbXWtbGGJsXykCBY5Pxvrn2JtNcg4ZMbE",
  "key34": "5b6ARSFxBmtqjRahpt6oCTJ3MFBJ7ufiaR4w6NTUgBrwkKHKdgvokJZaFSqZG1Ut6j9A4P1k7k2rPYJ4kMUFmCkL",
  "key35": "265nFFjRQRPxKkDn3Jr586REsPXWBcLQ8UhAnbUifxy3QvrX9sTCPPhoBcwFzSDDVXx4M3ErTJyLQszPZbUrTnwW",
  "key36": "51PquaLkyx9yPx5xLzNY3RjMxzXcXXgksvpFzy9AupjLpqunPJoX6bzYDwafxP8w92SvcrcjpTu11pgSKJ23y2Uw",
  "key37": "3o5nEaD7se1oAGN3W5Qh9ba82EHU9AVo1xTkxiUEU9wDM7jFstMMg97j9ZjY78RYvHwqJ947JnJZY5va53DTUDEm",
  "key38": "4QXdPUAdaST7KvrvRUahcHvJkt1pCvjWjFMNFicueGqyWMs8MiLjkPU25KZkY26DPpPrucXygGH4SaMWG2K8nesq",
  "key39": "5MfQjAjVb2baH82UFJrzoS4Gdz8tqHXdakzY8EG6AwtDFKycP2FpvErJxa4PtLrVfUYnRhbYTVx38hCJRAxYmxdh",
  "key40": "vobVi76EVeGNGW6MKVTy9gXirxn9cLjZR6a3WjG6Ap6bGeKj74fKs69Fc2j5KkbRjszEzUmRc527qiCTzKAjTdY",
  "key41": "3Tcvt58ohUZVrQVGz27ZWwkPH37dePcZqR5NrHmoP3sicUdoBBqRNYehyexjo7BV7QmAuBHJ4C6fryh33f8oxxgj",
  "key42": "23msBxU94Jmv5A4Jm7Hp46fYq2k5ncUFMBkhe1QYYGz2dZXfczKKGPbiCpkWMKPbYmWxun5RZCd18DDbjHmPWsXP",
  "key43": "D2at4eVcohrefCbeep2ELuZxYdzFaebB1pCJWchzg6WdG4CrE8taRTkiwnX7FQWrFZHyqhWQxibJ2wrTsR8JRcP",
  "key44": "4J5KQ1JTg3bpFKrREVgspiLKErYALc3SgJgtAR2G9LLBsUkAS4QQDnLe7K2GwGgqYVYPsqdBTMZJKjn5UaKKCgbi",
  "key45": "bM1vb4AKytyLan62MiAbTnb7JDKcSbgVtT82LMwo3xdaZaLg6tVUrA1Be6HGXUGj6xaRWyj98PYjUNk2Wq419Ro",
  "key46": "x4SUDifR1VXWm5H43vnNUxm3sNs13yoEviWeXMKhqo2BhncYs66f8tPjxkXyDAbmGz6nw8YGmDeRV3hpq5wqcue",
  "key47": "3qRNR1kEkYGh2B3CzyNXWkGxknndB7Vh7oBNY9sWdfJX6T4PjHyZsmsicsAFMGHimrMnAd6z5ZrYS6DpkHaWbM4g",
  "key48": "48r4Q9iiGTX8gfYDrQQovLeiXKydQhCCQRfJhjKNaG2PvFAQjtFviDp4LZZ1WjrD36maxtPRQWEzb6wmfJ9MfbbU",
  "key49": "3VMWHbjHYvjiiJ9kZhfL5iRaoSatFGoM7Etv5nXR12V95nTSfFyVwc6cosCDzr85pZNXX3uAuNPz3YEW7e9n75a8"
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
