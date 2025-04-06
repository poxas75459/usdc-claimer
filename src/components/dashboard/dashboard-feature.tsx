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
    "23EbVfu1tdjAMnd52rJkmpfCkSwsgYU2T7NFYP8L2X1j3pvEZE7pnDuyVDxdPznWpt6br7MeCKU1pXow1CmLsaDt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "85jZsSewX4pdvwUevRtrCT9Bj4kdTDmkhkS4tWPoeFSoSc5cKRjhnhziKzzE7Ysjv7egBdN7SdZZ1yfuAS78SRU",
  "key1": "67RNQvPrpHCUEJKb1sRXrtdrWr7ctENMFN7gWhFjJFiaZM83WvE3aH12nscCusTAKHx8nRDeKUgwYzKdTwqbtK7s",
  "key2": "4avoAY9KLgcMhMu4HzArjPQqTfvfVhm4NDgTE3A6DDo1tNRpbcXQPKzjWgE3t6goqwDfDRW4uXoTxbnnBiBQZhJp",
  "key3": "2Fp2h49cHMJWjh9kQUV324PMfQDHqzGSbYa3f6huA7dRsrmdrBZN3goNErxJ489UrYUdZnjkvBZV2wPDAqdHhW5n",
  "key4": "4QfxTCPupWLYFXWbMa9b24mAzcR2WZR6jqndiy9nHWvBy7dXRTG6zSkvMTfW9DywiZKsSScxv5vZcQWqArDsa5zK",
  "key5": "4VRhAg5MMaXBLAkvhDuag5xepc4YaSVZe7tMrtAy8ghHcCdqYXMYyMTjodtayUcpgDEygTkgSRjHdcCQXxEetnb6",
  "key6": "5UcipPi7LdrTKaAm4LaSt3wkp2yuvup9shQK4tdQsnH5URxbqi6bGxojbaexgQEFcyfeUbEsAwdjPbdkjPaJ8j7V",
  "key7": "5Jc895o2qc4vsGsM7GBY8ePm2zSWGecjxSb7HcX8JCvFVveQFoEzuT7NermsmiArpqfJGYQNTTpbuwHFjSf3ovp7",
  "key8": "UyVncQUgF6pzDa6V1CKwVMYp7GQsDR7izjuh8hBvyQkhZssWXxXrHvyfSFAjRGEGehgdZncP9nsh31FVX2nyayL",
  "key9": "2owMxTnaujEqQSywnMvd8XmwVgRgq15E57QNdvLb7sofhsTNzN7qJw4HmmrvJwt8APAxDwvrEQFQetp4moBEQKYK",
  "key10": "vW3uiFhPaioifsQD4oW9ZZbEGiZY8uCPEZdAKW7BJMeFNAtBbHJhRyhT3Ryx7fydUZY6LnVeDkX6eVusheBAcmm",
  "key11": "3yGg8ZZZhBHEeGM9NAXspr8iZGRq9gDQp3YZnKDU24xqm83F5sak9QSwFyLFDyCE2deqSqxsv5D1z5NzVgk1vf95",
  "key12": "4EhDJjLqsqg6AR8kpPnNQdAgDFhE45BexUwL1qz53WTysT2obvWf91TYkegqZEtptyki6y4SehxAE2nWLgj5CEMJ",
  "key13": "3mDC7WwZ8k4PFTSuvo9oeBLGz2A3hup6mRpFrBMeweG81kyUFcM8Tdu6L4qMQezfyAg8oBHLtUkijgEWhJtv4gc6",
  "key14": "53x8rw7wK4SdZqEXmRqWQ1CAJ45uYAbajtSqyPsUb4vgmSqUyTNsSS5MiSrUDRXUgbizpnCdQAZUwjDN4NGCZx31",
  "key15": "2Rkqc4faj62gCQo3MRhwn67rBFUfV8aUTTYDNXrmywSsuE2YVpeT9p1KLEWNJtAV4DubYYu3n2orWzABopuGxJN4",
  "key16": "4wcQbFwbb5fDPRa7t3Hgs8ATAusLpJADmDqfGzi2evKQqiz67BAw8uDnc7WTkkC7F2fSoTEMb9s9S3ayjTx2gbXz",
  "key17": "57DpAXnGG1eu2KYee26Kum4XiMLtsA6kcPPDUsBsqf7pPn5mknToxEG7JG3ML2ZDC7pcAj9Lr6CzCcZMnBidbYL3",
  "key18": "4fVp2RMg4GEwmTqynfrataRvMgJFm62XpeA2xs2AhSFCSX7XGaSuRw1oD61irVAJV1a4SeYoytpyTPSrJouatiuB",
  "key19": "39qTwTJwgUTKt22oM7BNpTU7MKM49znh2C9eEjkmnARi5P4bn15vZuoQZbZH8NbXQrhwNSuN7T1rAmJZyxsQGmBf",
  "key20": "4SJCbFEUjy3p8fPxRtLFjwSXryi3a4PEcsMVuEHVLja72VqRymi4rBnUSb72CQgXPdATPigoAGaGiUrXzbur4tz2",
  "key21": "5kGyCm1hkasP6Xzqgrcr5efVJ6pvJmkaFBfPDSNK6aonp4JbsjFF78N2Sn8VG1B7D2HyfpLDWZHumwYFLRHqAzci",
  "key22": "4pctnPojvhp6fqMPhPfZTfBACeJaGYujxFB3XXTxSYZxG67AG3k1r5h2Nat7Zoc8Y9rQ7QQmgBfJRN73sk8TnGXL",
  "key23": "gdpu9PLsLLwLZXE3HDpVCemEtFxRmoLc78pLuru6bgPtywG4rZFMT1jT3DkeaqALAZzBRuBRerRz6qjaWGe9mJ3",
  "key24": "4FVQbHr8p2x9SdB627aNpZkPWZMU8GzURkuFnLRuvNiEBkPLTWD86MvdrSJAQ6FwFgvz95qAVtu2A6jejGogxoKm",
  "key25": "RV7b2D1SnrK371ziXVfoRKhvjhyerdTuwTcLw8hkCKWDKKk75xfi8cT4DW6pgCs4Ff6XYWbYGKPbrCNv2MHdaxG",
  "key26": "36kkUjrzVgHX8oZCczUNN5D3u6Kf4NhQwS62atU717ujqg67GXx1t4LxudCg7L6dAVMUXjUEmL2s4abBDQKM8y5a",
  "key27": "eEbp4k8DFkiMqP8f5ZZjkyvutw9u9QrErPRfpW5WuHeDALNCwAYMExRgLjC6PRQr69hHAiFfkXx89rc1mUet4pf",
  "key28": "4Wer5Y5QCU1oMFKCdnmUP7oKDC1xU3nx9ShMd2EBGebRWTv33Nyo8Jngou86M7q6uBqWbRMtPS5K58DvH6srVVPM",
  "key29": "5xayMp3GTzw5vpEvRqdjS62AUn2aWh1oo7jfjY1SuWztscwqgkbYKr9UWqfywuK3ALEu68o4PZFNHdUR21KmWo4f",
  "key30": "ccxZEawTRMB8UqL19Qz7JZg3pKQdeZYVo1fj6MynPDPrhDmucGdDB7y8r7W15Gjedz3YXSfLJ28N3kT4Q3KR53R",
  "key31": "2NfZLnL6wFYaSVDuqTUSJfuEhkmTBtwtH6cfyyEsezbMCeqY8n4gLyi6VV1f77UUSZ9HmwbESoSJykSGMLDFzDtG",
  "key32": "1dohapmthBjNJmXovBCmhG15TiY21dTdbY4LA7ptoEGUY49JNGWY946e499amBaczH1aS8Yd2SajE9wqPxMbNuL",
  "key33": "53GXvq1Q6JkKDVFgJMQUSrSTuLEhimk15xihxVfr1DHVW22m6wYp6SsXXC2s3hwnKMVhLuvjvgjZAe37BrEkx4Ej",
  "key34": "3jDjyCF7i5k1fskX5N4Cj6sg8ozEyX9AyN3W1jDdLX3C9wMosUqAqq4ZPtryMPAgfVDCTLa2BDiEykCKr5q58AwH",
  "key35": "5P2XiNnkyheHmTiQcunPsaNrkKAkgg7bhMbgY3zWLpxvYgxC4Wfb4CC9PJGFSGynvHdCbE4R6V4uNrx6g9L2yMiq",
  "key36": "NkyiDKtoW6QQ1hARDfTFuX6q9mhLcUwmXQTbwnW6gu5xjrAobVPFsagmGLCzDogemWFEuMRduvQ9ikgB75ybuaL",
  "key37": "4g1VPEWju1ZvMdLEfm7eJbr2rgRXhmBGGU8Tnrqtd1Znyg91zK9cPvX68WTvaZNmfd7yTiuto1vnarLoj5shWUcS",
  "key38": "2JRM5Gb8veb5UT2RVA1Tdv2X4XmWpHbKp4f3SyauawE6DwLo8QRmXKWzBamanVsZ4iBQKRAEKW2LE1zpHZ8FBnqz",
  "key39": "4CS5nT3FaMhvDSajvcAjuRsCnZhjv4p3mJyEwfSkaHsGhjfJNnAyBFNrCac6xiSyPz4LH43V92Xf1x5fiTESZkJ8",
  "key40": "4qXbVREKufmTFoVXdR2yuPyVTWtrFgPdUZAh4JvRFwSVYCZ63ugrxeaiwt57Me9XfidbHoVmf6PzUp1KwSWD6683",
  "key41": "4AtfRvJKWeFE2nyavDbXez57HcPeKJ5ZRJqZUCWf6c5PPT8jpxkis2BPi6QWBVUCpWkjJzD3i5jTf9X3onGdmEQx",
  "key42": "5S2ux1uQ3v6u9DRo2aVzHxSQC9cck7oXcq5npTkGTHMukFozYcjHCKqMWzx7oBiULo5eYRXVngMCLjaKMuWocewd",
  "key43": "vDZoYAqoWeKojLgBdPSi7JegH7amHMbZJLk8SBrtzXP5kJduGJm61BEp7aprnqeBH5xLgBNAUvqNYonWRB4FTdB",
  "key44": "2UqComdLKikyiG3umn6ZLoMetSDW4ZSv2P5QfaqwdXZUn864nVjSch61EVrwSREMVRga3jQv4NZFmu9XAACScXiu",
  "key45": "YwH4vbqmfYn3czwEoTsk6FCfA9cUgdDA4JQ7bwsQymKWd9qpAYRLaRDxbLhvMvQAuQayf6suPzNmjqG5bpjdL1r",
  "key46": "3VXbAm5ioeE2JbHqxhfEQoC7RQUxRvRZrynoPpC4mUj1Vw1TaaPb2neKeNZLphqeYyWW9VRCSD1rLzhDvAQ3bMJg",
  "key47": "4ucwm8sRhNmzjdjr6UK29q8jHyrxV3GFkdLkLaHthSFGbJ5NoDzmEuuDdjk2dBQG1j6PQmKNp3DMGBJysb2bwQiu",
  "key48": "44wnzcLkDrRnuiMnvUFaRPW492LFsfpgYWJi9gtonCJ3vrPijD5bMTQQ1gRkyn4YXgiN1rtW9q65dPErQ4GFTyXT",
  "key49": "3ZSsH8dWd2N3qCvjjQxrLUMz3p7Eve9Ro4d5aTo6nfmoGRnws5sKUp4661YabLCU9YQrx6VjECx5xR1pVbvGu8NK"
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
