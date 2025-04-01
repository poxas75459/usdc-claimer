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
    "3WdGnh51FVDKELUG4WP7Gb6LKedaVFbFmQGRUqTij4XdMSDcaf46z1gbwDdwwU99AJon8ZU3MhMJZEVnQXiQu7Ar"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2vaY8wedEyXdp8rpDaFg1Hd2DnoBFN3uoq68LbErxEYkTaL3segiedyoDAj2iTuHzikPYaYdr4xkrfVFdiXp4Cx6",
  "key1": "244KEkHWxsQaWrtXCgN4tYkm5ji6uhvRxYFzJsxJwrFPHGM3zEGfepgirHTNGcCuTaAxhMoyboQULDzdyDsEYG2L",
  "key2": "33pbzGr1gtCJ2KHbvr9n6D4ToNhDF64TQf38wet6AvHuFQ7a42bJGahCxSqj75s1AVFymxDEJSprvrk2UXkgpzWb",
  "key3": "5YTs2Hi8JNjE14Lb82wt4BcYSdXnDSoHDMUCyS2aexzcTKqdeSXyPsNCEUeZ2yiRDuWke49aBniVdscBb5Uqnrd4",
  "key4": "2jLPMN9f75bfJB2ya9TYb4EkwYKv3KNtRFpmN4URZo1buVj2sL7tye57ReWUEXae2ghWDNDpgmhf7KBv8ZmQ96H4",
  "key5": "4f7MsFMCayVs6LaLMudNNTfh9w38APMr2tE2mxhRzqGBifB7TFpPdJvN7L7x2DPAgeW7xGmCtyKSGTZGJhzBxFtz",
  "key6": "3XRdYCgpcZmhoXiQKkAEDsibCmhnbAGBh7xt2q9EmerkteacT2uejEPn1kFsGBoZqoa5WngbyKeK2TxvoArRpqnh",
  "key7": "53aHazDXfVj5NSUbJeThg8zYXn6borJ4GjzinZnhHM3K7ru3nHac14vcCkZVbPTAvyFCgrr3Cvg1PKeUYudvPP5a",
  "key8": "5Hrf1ZhqsgdosDt5HSBJ3TeGzRxhasKryZhcapcAnC73CadU89J3Mb48MgKSzMVtCGU1tdy99rZbTm7Jy9j6rgkA",
  "key9": "fcZCnMyNpuv1u5jfgPvrZsMxEMfbWCX7VxGSL6rX2LCyAsotbGPeCNcLSgvCojXFJ4shJQZAdzvZazssbSuUhhd",
  "key10": "4zviUTRP35UDrRNYa8rkVkak92YN7Pj9tE1LiCRiQ3m4FkcwFgVokFLh99o6zb96HsdkWbzHseit7MN1TsdrJ3Hp",
  "key11": "RcyuBvR7WBgjQoxfPevWhypjdeioj9nxLYNfrTcN6fdNCPmhA67eZYcjkuvA4SmUnva4daaURWTdrU5XJ8NKK8d",
  "key12": "48yVwsFN7mqqC3nAaJYX2R83iX4cjMC3TPTuBToHy28i38VVjvx9a4uMjfRzYj7YVuW17f6ueHmNXHVp56eSLgdM",
  "key13": "3zQMj1ocjMxEKNb5xpiG8CjuSLtufWVXpSaArosY1u1YzJyGiD4vtEXNQt3Xia7XKe4f8L4N2UZfS68cMNmAGcVC",
  "key14": "2kfNFseSCqZ2WZiUbcXwQQN5sdXFFJLqMWQ393Q5Zq9visQRkVtwwjxegRki5B3RpkNcrbuQzAkUH1Q6G8UjqBAT",
  "key15": "2AyxXPmE7EnnSEkUCHiQ5RXNiyzwmfHafHsvwqt44RuiExDMowY1x7xcVWG8JW8r7jge9GE9GWnzhgji5rTJ5GoR",
  "key16": "3dwP1tF92HK9RstEYQw3GXggFZqqM6jWc3s5ycgdQ2YRMyjBszFRZCFT3zygkJ7DGMH3ofHfWSzKSKzMkg3GfXi",
  "key17": "3i2FazXnXH5qqDNz9233KLeHGk1pmCfftfL466WjYnnN6VuiaurVZh6xGVDuET8PRN6CBZJgESMmPSHSh4bjGCYd",
  "key18": "3F2bpKAdc7dAMJnMnUCRcQdzC8figJ7hGarZjD5JU2dryosBU36X5X5Q5yDnGx6KWToAQGDTvVaocxDsMTpsZRmS",
  "key19": "3jGV9YRao1EhuEFNnXFAupA9AUpiGUAUP1jrWA5jcGnMxzE1ARxqBrqc1VyFPWpqcvAX1Nd6vRkZBNujc9QjF2AF",
  "key20": "4ugqRYyBntfHYwWVtVc81w81Z5U6w8atgtjB8A3k8XkgYqN9aVerHSewCDLmGdWy5LpsvaazNbTE2znrtNE5BUA3",
  "key21": "4gdtTWWVKyaNHfY2unQQuLd6k3F1RQzKdM4adGEnaFEfdjoCC48xTj9N2LNqFMoYFXDjaujoLPENjobLhN2Abh2Z",
  "key22": "2cxHacrHbBHAcGGnDtyuzhQSr7jWDDjJmYKRvjAjuKFXwqy2NEVq7TjqWiAnHmx24zARB2XtxorAYXSG5S1QMdMv",
  "key23": "2BLxcbxDm6U9iaEsCVDLZtSRUbbqm3hwgyVfPvJLhHjtc99a4unZB8Cmukpx8wT61UcozSGba1aFoY5cUYqfZeCW",
  "key24": "5uKzQCLWcFrmJVytRnzNq33Cxoe7VpExyjk9ByJVvQNfYMzxnPyfZMgEtPZhmNrUmXLnNNk38XP51u3T7DyNUwPA",
  "key25": "2n3qTcPoLmgPrWrHJ8kXpUZNd8p4pSoZ4Cfvetd5itaaqSPZN3BaHHmy27e2utz7e67s9qje754CQR2GKXP45WZa",
  "key26": "3semuMuAEjtTYusfynFcxNcBSCyWnoYKgoRwZNFJfkGstUnMYXChBY5amwEA7sncw89aqq3X1KieJh5myMPmMzs1",
  "key27": "21XyrG9UDhuBEpcd5t9Nz9HVz4P2hiMCRgsLGz9eXEtzqVtRgUEwTpStMRF1i8VojPgxDRSrBwniDzw4xaFWUruL",
  "key28": "3ooSESUKhStvrxX7yQM1mJ529AkwcWSuehjgEQQQRPWEX4bCXcCHGxuNErLqNfb3o794SstnKBe5VKV89yLBkxBN",
  "key29": "2FgVr32bWsBDbDB5Qod71E4mavmNtTodgLRTK4Fwr1T9ivRZZMe1Byv7uF7yzkKie531Fefdw4SKzgbnfHQLpfMd",
  "key30": "4YKNoaQqjNdYjXiZxGPL7h6grULyWT7kX9bXHZ22v93sQLiUwTsrULzgrxR5Tci4otAUsZevgDBkwQm9W3KEiA33",
  "key31": "e33HQFYtgAGAR2FL2RtSudZhT8fkgcag9SVvy535tMqztMaZKjtkY7fMCR6DUozCGneQHrZs7DQTX45ASfWYcmf",
  "key32": "3FEw4ni2Pozx1LB9jmv1A95jWDzozpEqxQmkFnB7x87VpohMzajYCyVbTYaC3LjkgASNhZPamdzTrPAEKFkQ3pp9",
  "key33": "5NEG39DmDwJavSitqqgCFga8YFtuMvkBSgvSiPdAuZPH9NmjixcChMfCVb58cpGswYgyZLqzMDWvnd1H431e4H2F",
  "key34": "2oLaPTLsvNd8fk9RkbVghNqhS8C6irRLmw4r62rvW99Xxik1jNcoyb7xxQihG6AJz7c7yvQxyNjZNmoP1LNTBpLu",
  "key35": "2gm64WBcJSwU1rGFNiax51rL3GfgMdc22xVpGeU2JAZeH4NnWAHAmjeoyxXAZeNadksWNc6F81CJxQgDxPLh8JaQ",
  "key36": "5hmtp4LccZxwjtPqesoXWwrDxZwmTTcQCUq2kUuXNC4qPEAKhiG4LCU9XrQfUviYanhii2GbD1tWdwUWH4eHgFZi",
  "key37": "CdEeZgVQbH7etiXh6jiVTK3RSwyxs5jfnAFFrXM2UHSzwAWDW7cXVQihFbCcR5uQAnDQUnSU3wDtwgg9pyq1JWp",
  "key38": "49vdcc2cgdbEWvNNw7ABkCWxR5ZaMFDYsVH8gy4v43XYEfEcAuk2rWF1phJExgMcV1x5YeNGzo7oaPPA6CGJhrAj",
  "key39": "3ddUwVf9jv4JEAJcE2Q1dmRBkMyeNCbSk7j7puuT2AgqEAap8rEJHMjD3u4iU5vJ1bcfysro7Dofx9k2ujw6PN2v",
  "key40": "63t5YWH2sFSAUKa8UUrPq7vsPZEb1aVhdYNnzQRZHW4ViCi6WftT1JQy8msAn4yRXYEFW78cyj878bak6YjrKHmU",
  "key41": "2Djb5dgoBFqHxfcz6KXatJRMS4mwbDg1DCgujWMVx2Ry1Ngg3iZoRvAdfuhZwEkBn1ZUxNqHio1NHG23KLa2Q6xQ",
  "key42": "4Yx4S6tk9xghdZXNDv3C2WdVaAu2LmzzujxY9mgJHm1gKEgXuhRKm93xVbivyGWmopmdTjAvUeJZ5e7iyKBwPrmH",
  "key43": "7HJATM6EDtadBnYNgPyAzL8GRizGy6zNBaPXqgXSq4HTK9kAXdsEwKtLX4DYgFs4TNu7AMuU8tptx4rimifE75a",
  "key44": "32Cti2sCD2WNPzJWPr36z2KWcNEv8GAgUpyjjzrWpx1txtW2RB2WN7k24VdLRjkxMFLFZQATEd4mVCTJEyc8kEwF",
  "key45": "2PfYmFwPynLCceEJ8CEP1yBTCWyqxdtRHQkeWJ4P3Q5D8ZTiKMPVFeCn38ynThNtxoKCC433gHSGg2VW6qtCSQQi",
  "key46": "5T2k23rgp1EJVaWZoGBDTuMFyuw6YwZsDRgzSGRJXnKuxgZiZ5znAvtub8mbytisEXoMn7DzPqPAjTg5YL8Wmt29",
  "key47": "3Kqe4DT2EAqqQS5BpdZfV5bRH9724FfXDSV7wp2Fv5cGKysGrKw6L84JsZQ1TfYvrmiKWyhK5kPQ9osxqdcodNYu"
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
