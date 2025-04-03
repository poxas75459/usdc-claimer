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
    "5xC5ZirZEx67sdtaT5QkSXvibjYYdWcuQ8JHebhk3cW5QNBuGDpNpM64WBFV7HL86YFxrrE5gqfXMUo1qmA4Ej9c"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36r8mLKEsAyQTMyJ4a3CCk9JcyFoGtNKpCBumiS6CV8cSt7bKckNRkZvgJSYGxhFMivrLhupwemwmswT6idDWnvW",
  "key1": "3Q8noufuLG7eGYpNkvAjQWmZqHUA628N58HFUM7oMkJvb4eDdVXA5itxzY3NMdeW3X2kyootn6fYueMhaDfhTrzG",
  "key2": "3SrP2uYnycYgZy1qoebsWTxA81eaHkWjJag8bKWbPXf1oY3xKDiEQKEPabEoG3cVgHTi8kX8PnzFEZhCga3xs1Yy",
  "key3": "WV7gvngQzr9VGNtPRewgdUZZZbYMEbVH8DJ7iaGaXhxvsBi5CWRhY784A8yP34EbpnqDQ4sAotxmDTFRKLhuPoV",
  "key4": "3FZKr2T6MvgK7GbRq5xpzmmnbQF3RpnwUa8gZuursiHE5yiLVQTkNBbLsQ8gnxUwGvdpycXdFrmmxsUEMxMXTt4r",
  "key5": "tvzZTPWe7sShgJh38gAbQkPExgXxa7XtJB9k9jPgzsCtWUncTGpKQbugStPJXHxv8gp6sTiPJs1423W7KnjEJkt",
  "key6": "2HweoPe4YB9CVJhhojZM6zbieJRwG8sswNbZL2MXNJWqVt6woaePUviQK58E7mYrJuMioAqNDQ4psHk4XW31usXa",
  "key7": "4V3UevaEqQncy4wSZb5GhkVBgCZEoewdaQfzp5y5aQ4rb2FcDkGZNKUgPFfBkuDNQMLgVJzAjXRdyEP26AKE7XQE",
  "key8": "3HwBfimhL9sYDa4Czw44KA5d5BH7W6TEQHkfgxF8nJMRAGdF11d4NTXbBdM7Qqo9fCp6j2JgQo969rJnw9whDLh",
  "key9": "4VgaHhmjXnMzwFozBj6ASzKARjiYMnYsV2AA1i3fZ8cL678PYj9ws96uVZ6qa3SEFHM7PaBWfeaPWBW4mc8goqcy",
  "key10": "2tStu3QXRwMtKBQag1HaSS7LbqKgFuBopkWaCrrPuwGyhkkw3LeMadpu5QSafKNqrzFANXoZdwxXXJjrzhpzCFuj",
  "key11": "5Nod6Ht1K3Tm551yN1WkVGVumELVMCwBRtWeuThyqQ37KrZpQu5qPMXg9jDyss467SQzN6N16KRSL5Vxm5Uv3X9W",
  "key12": "5KGJeGLtPvFqDcFoncEsEV4rM2owt5Vc1kxDY6Fpf7cVPPcEhNRkoRBDcbNDJAhT6CH87DU6KZaQk73G5QZW7Jhw",
  "key13": "RAPwqboVhRYYp4BWMchAn88adaRyxYH3K1Uo3ScBDbZrG9NECjXR2tY6GuWjRZmAHbGk8k3FGsYPaPyiPDi4Wqn",
  "key14": "3ucnuML8TS9EdSkqsVYZV6rifrvVMin6FropfaNTX7cMhPS65HubUskgcABi3pb6nK2Z3xNU82v7GEsGeSSCaSQT",
  "key15": "23bNdT5V6PXbZHD13QoxfsES8TRoXCkFxKjyKz1Kamwo6scyLreA6rZS61e5tAzNtK5cYJ9j2TKuSfmMrbi3Enz9",
  "key16": "5nMt8SfQBXKR7Gde1ik2cGRBPYfHvTpwFYCs3CJ1hUhVjN38nqMZJyHg5Un4vew7F34jv2gVco6TSCVaQ2atUtx5",
  "key17": "5P61wfFTCX59RUPRE55xPhxkzwGnD5zYtzsjgMmyfcBZLQ11iF16QtRMtwBixMFev95J7YH45dxeyydZhskrjsUU",
  "key18": "3BNjmRSfGjDiuEe3jznyzUbnbZwVdybicThD7tdAhJMAFTgtD853bncQNFEfgQkW7Yu2EWGCrT5ungp6AhpbZfMW",
  "key19": "2nwMhzV885ZmYLF3BUMFwuM9wb8md6hHxKZCw87DDQm24cp2VFqGkPGsAKrFhvkLk4yrTpzNQPmSWRYLnHSxqcWZ",
  "key20": "2M4NJsEhd1Hj51CKz2NwXfu7fbDbCTMXhcua6BqkaHd7sD2zcQWBY6w426PB82jgD75vSH4hvNk9uGaNXdUuJW4F",
  "key21": "3jGe7kBfSSppcqtBW11T7Vm2ABWVXypYLGcNLw5cazRjiQ9em3mLP7nRA7FFBQebFC2gChDSRjrXumJsPB7PNpAJ",
  "key22": "4CSUyX6SNDMscEmRppdKkq5y4jtSj1XzmpjY5BAKxReLmnFf7cL2ZKcBet4kLWLn6LKMgZPnug122Dwp3APH1C87",
  "key23": "5kdgDwWHvWr7xLRQwqwkbTpaUC8fWMb1swFy5eqp98qpNvZHQbjv37kVyEVj5BuQq4aE7wNovAcX6MgDM9vqhXs4",
  "key24": "KXmPWLPaXTfruoXZaXnJPownWTyDQknAo3nwji9pn5CjC8R82hDySM56A6LdjqinztqL2xRhxZSD69cL4vEBYs4",
  "key25": "5enp4vDk7mskip75TkAAQLedXBuomortUehqSLb13exYVAqzYgVUUSMDmW9M4kLVGKBP3ToqTAgRRgbA5RSLWfxU",
  "key26": "3EEMP6Lo1ZZj1Zv7RPki5qjz9c7Jzt4gqUTtAvoXPsUHXv3P94UZuPr8KDaDqM1yKcVniDSG5vJtMyD9etFWoBVG",
  "key27": "nkNBxXYEAPVYm3c6fDDeGuN3K338pEQByubxKyC2FUL9H73BhuwwVgeiiGxyPpRN1cBCk4Zo9FPT4XuYDqimtBF",
  "key28": "Eh6d4Feu2zQeGEYbhoC7rFm8P6x7w3WTiHJWkGK6D4QjdEdiwrA5dk2viRsnimZH1DyJBHRFWHwHHA64Jp1QZhE",
  "key29": "2uPotKcnWkrtHsP8MxRTXYPgcG43me1zR4YaPg149DdgvTxCiLD19ubUVomTajnWjBiHMo7fxYRMuHUpu5dZbmmh",
  "key30": "5cquBsnkiX1pc4NP3HkSNDVFkLe7hemNPKtJ6G5viRGJkuDqeQL23cwnWX3kuAybHJPnrSkoSHUJiZEoFAJHH18M",
  "key31": "WciKDez1Fe9K82Sc28hdKZy9Gk6Uso2YNRGdKsKdAFpfMkan58LEDrd6VksjJiTmJ7dGy7prgFWEvMTebthc3W6",
  "key32": "4ZXjNuucWLYLq97Li8Jp5augGLfJghz77T2tc8sHjPqheJu9v8bmoBSLEC5Ayzo5ce1Yu37aEvpQ5pcJsEQCWEZo",
  "key33": "3pyhGpjSxDy6Q24iYViNtsdfyignadc2pDyRtj1ysysShPjmZv5kewHNEP7673fTCcDC21kp61QsXjNWwaEMeHyp",
  "key34": "49oaRyu5xG39njDWq3MatK4HeG4buHgnvno4cWPcAoXTZuz15jCi8Q1KG3HBj7QHzmW77KUTWLn2KPgZnm287PoK",
  "key35": "dKPHP8LZ7GVQcqtLoZ9hHM8hAjkLPnY9TVo8eX7HXaFQDc4hDcL9iuNiW8LR5bn7HcKAgou92BT7ku4sAwLLf4M",
  "key36": "2VDStSyCZGYsmBACP8mav7hZrLNVmasyKKwhKx7CDbzPdNDqgaKJ5SmqttnktrJGKSbSuMzedLqy5aNk5cWq1qvF",
  "key37": "9xPiW45vSzd3kxaPpv8we1MyRhsSRgpXkSHEDm3pbd6QuGR2BAjmMxMdbnKMaaod1A5U5VUz3v96mKb2zMnt2DS",
  "key38": "3bQ5c1a7dZoMygKd1ZjMrSY13H4o6bwYDMUGgFxtVKLMHZrsmS3N2LEhgAXDWDDc1z3ZKoubdFbMP46oP56kDmQi",
  "key39": "xacE87VWAKGeytWmVpHofxc2Vj1mtJVEGW3o2b8aJJFZxxQpxMjePcnKtmphPCBanAPoHjUwgnaycAN78KhsW9o",
  "key40": "3pPRzVH5JsmoGZCME7BDLUL75brkDo85oPhL5PiGjc3iRXH8PQZBN2o5P4tXH5RVGiKJJkoTaHSdwiPpye8N1XRU",
  "key41": "2Pbdm1Z1i3Ji2TVLsAxT8JLHPuaRB21b3f4MVA9y5SvN5sBXiUsmTbmxAfYkK2NvT6MV1v4M5VnmWAwjCKcksHCV",
  "key42": "5tWtMFac8TrWtm39KDLN1EdBo8v54fzxPxPan5cNdbZ1eKzHgTkCVRCSLaWHF4dMmRN3CqfZBP94LGiyxK1qFPp7",
  "key43": "KnmG2eAPUtuao5U5iqVNuAxWfoMHcStanmKLrUUeAtSuNbpk18p637HnC2r2HstDCQVyCFYqwdfcZXi5tZfbnrX",
  "key44": "2KCvraeBJiuYUaxQu459hi9kcC86vQzvkc4BFLEyDaiSDRitsCNuxZ4DzRYNio76fAoAJjS6en1ckJqmobrSWmZT",
  "key45": "5nA2441tcZXBjiu5i4MYeuMM8AxFvFhFVbDpVhcLniNs81Wy5eVdcKYz7f4uyFfaT3F9awvXMbbx9XPTdp3azvHn",
  "key46": "4te5vUHqgvwCH5GghihcyYhpm2XX4L7SskYKirPQLAx4Q4bMf63Z23pnd3SnghJqiHhbZbqd9Kzm1EgeVbKnreFN"
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
