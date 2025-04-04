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
    "3KxXTNRsZ7d9h4bZag68VvKFkqeinUx8H1dGVJhkMp8ebHVRKGyGU8Dh73zJb66wh2NUF5jMUtV9HKeCJV2zBscS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WUVEy8FwxuGy1MC51fHvBnbrPadsze1tYUM5ghbC88Xp8ZV4SRUz97we311QoEiMPFPpHCAqGeEQqYNnu3h6VjN",
  "key1": "2ZZbP2bfz1f8W5WaMcbV1fC9PwD7KSP4c6JeZeVgfG64cGxxDV9upQZBELGoU2bgaDMrnBYvyx9kSg1kwSxn9YYD",
  "key2": "5kCHFJmZuKv4dgysi4FisXHnmSAuQppqpmQVLRecVU2nuj1w3W2bJxSHBdzBFmwofJaYm5yzvsc399sZTCBqZMTU",
  "key3": "4d9TwRXdwL9XdgRKxCjxW4KbtKqRNrgxAfQ3zLXe4B3NtZTk2G8awoJbo8Gk9rf4MW4D1S1u5RCHhHGMiFaxKhbn",
  "key4": "51YuyhCwcgkDZmxkpXuALiwLfnj9p5sSoGLARCVoieZwhuucVmZ7dnFnSuQkGsd3TZSfKHx6pLTWfx5QDyPdAX4v",
  "key5": "4t3mqcryyb3oDr1r8aC52dstJC7FjLFnJDcHLeLevStWUBkpxBr1bLg1TmMMUW9YbqcPBZZMzpMSvruBVdyhQvHH",
  "key6": "2zbtvXonuL8VJ2qK6YBVfiY97YUaRKbvXbxFqKPWuJVR8VuF1sttTGgHtLp3MbrTkwaWLjfQZHkYBA9URZznriun",
  "key7": "2vdKtWaJ4fMfxi6bHyxp88HFF55hoVtVFpDGTSL9c6rfbX9kWDVAjzUgQo1yVGNRtcGETesiJiWf6s4sF2DPrUUB",
  "key8": "3Tr6VW2j7LKyzR7kUXo7ahg2dHhAyAknsdZnRhFR41eVtRSLP4ZPy7t95ppgzKGPSVzL1TXoHFUSL9Sua4kRzfXt",
  "key9": "4GT2NqZ4MVocnYi9QrpMhdQrhr3g4HWKXjahAe1skRrjgexGHg5tUC4rZHP9KdrSaNZekymJW8bBiishBm3VW2bC",
  "key10": "4vviYSpxUvL7aamPX9zUy7zxKPSAfUwcUaocLw4cCb5qG57DdSzAYrzPxXi1ghpmFdYetjWHFevG2nWAxUdcd12E",
  "key11": "31JPd1FjW8MGSnhbzNw3DZNuUccqdiG43yu2b85w3zLcUVyqYhU1rLVu7mrUsxjM8FdaAkbwyuHmZ9aPMuqW9P4H",
  "key12": "4VBZKdcSwS64oFfuAkYmq9kFWbo3sT3Ceb1sKU6QZELFW37rHK6DRxDusKS4yJWz4vcF2tcm4WvmpWEnw1WQquZx",
  "key13": "3FgUU9sVYvzaZXwJUprQc2qrK5yJFdAbgBD96X4WC9Q1jdvNwK8QY3FVP7UyF7aufnWejqUUPMG4grpLohcDVkG8",
  "key14": "4gyrjfVuWg4nG6swmoFch9sMMtCJ6A1EgRukdJmJRoNAAQWpE9Sqt8y7LHnjZNSXgsLhLNN7j6vbHX4ezpSQvyxb",
  "key15": "2M9FPCsuD8o35Dan4UabP1Y3d4L8JpqZYMF2F9AULh83AbN1zvxWa8746PfZ9PbBW8QpLuj5JGS42dYnSVxuoiTU",
  "key16": "5PQTULM7ZbtnfotNCZJNLSVKppLo5JKCVgvH84uBr4mbEuqgUyDrDJp7iSHYshZ9wEA4WVityfctaba2JTfEPLsU",
  "key17": "48MbxUHgKSWYNK42qMeUyJbWHcG3iGiJDvySSnx34iTH7vYyKVZ6EGZ6nfFJghHVrD6Tx6H9D38DiuLsohVbTntA",
  "key18": "5ujZ8ZME78HiENPUfx5yYnPE1k2uNBWHmBpPdUiJVJPcswWfZtgwxRZosATLAtvY9nYZ2i6JJD5WV2sdakSBLSn8",
  "key19": "sH8nTj1Smo3AGwtd6AbuKuz3gMtHmx8zrJoAnbyLtvk2CYwASstp2dtuH7X6rd4WxV8p1xguDg7YxGLDNsP6Ly2",
  "key20": "VPfGs9cwLDyvaSdtohifK3tnoanYgGSSjNY8Edm3Js4vDrqiSxhVie2BLG2f6dR6zAnd7sG1NzcMP14ACMzMqeu",
  "key21": "2EfXB6GZ85xRtew4N1GLhkXJmp9MLE5g2sGJD4LVYMeJ1KU3YN11LzxXbXEdDEXjnNuMCpWztBouiQJMVnjbfGGT",
  "key22": "3U5xvk4NBJo1uwPfCSs6fTJxbEJeTRD2hrCcSjfB5ciQcwAwNywhiEraUxpAqwnSrYu8tZS47WFKSEPzq5yY6Wu5",
  "key23": "4Rr1Wg8puJfQnA1sBaFANR6FXkDGT2St873iuc2wMADxwpEaU9vebTSs7VdkZcQSGkEak5b9h9pxUZz6AMBXqKSq",
  "key24": "5NPnGMMVmArBAgnywN1T4KAbPjNng9q475ZPrJ4eKq7uKcaSeMofx41HuRjGHT5SuPFxbhsfSVxzxevQWAvJbGH1",
  "key25": "5G91aDRexT1AREo6EAFksXeB7j4nsqs2AYbAUaQpUpvpk1PhVzmqZ4Tca7TyH7Em1iNjt7YFTUq5gvoXR5pe4eLz",
  "key26": "45R7RNwXEhEL7sGWXbjmJUWk8oLMYubEWhPBpvFoyTXoLrmobs77U3yK3LZdduPQwqT3fcXbqnoYkWWYP7GUjVbY",
  "key27": "QkzDbKoWgkUudZ62Mr21eRxvwbDqyHRBwznqKsZSdYngqUe8rHcD4y9gqS7dGtzpZq8xCWcDycKxZE5yKjpz2x9",
  "key28": "4qVQAJBd7zuowYc8S2kwG86p1vEQeHyHqSJjZPZdwyKHJBn498jwh3Kq786R55HwbjGoDE6XtTD5k7uxJvptAsY4",
  "key29": "NwgEHuibwrYNs6uyYssKi8Ym2hw4qN4odbnKfVj4NDEjz1W6wUgyNmRGY2RuQTyGeSjMvbdixNn938SgecQ9VKF",
  "key30": "33JMJf6YoyUHXK2GRoDSCE7vuK4mSJjGVT1q3TkbKevLczgiNGZUbeMoovqTdxqoVZAQnSghinXauHwqzBZXP7bM",
  "key31": "5VeFyPZ9gKWCZV1kBHnPZYh63BjxCSBawRXJY65jXpSVcAYenhVrjoo9ChDkNZ5AYfXmM1nRZ2j4ZzqXSkjc9R1P",
  "key32": "4GVLiJ7Nfh9gSHBuG25UD9YgJqEkAHA7zcjjbEiScsp7RbbvyP9vHPrEVj4YDd8JLCBg9r7rHt8qdUf78ks8Tioj",
  "key33": "2DJWzCazTZPoo4ffMkC3kvo2S72M6n1UdSZEyMJFUUnfnYp6qdYAsGiBoxJMh6TbPNaUQFgnTimswPsCbxTzV7SH",
  "key34": "4Hp8fEPWNZFJssaoM4D5SgXGR7yadsbdAge7a9PZD4qcgstGVcZTYCswuv5nBHU5ziSzG6Xmd3GSVUGYeVZueGrf",
  "key35": "4fHQFvjAoHNqWqpHobt6NSzwATBAbfUSy3SE2ZwEbKQLKFMrPEdXTatAvd5iW3XiW7rZ8bJfrwsw9dDsEGMzqJyL",
  "key36": "49UZUxzrqf7DdFkEXDVLATg44oMNAtzZc129BdR8T7JQ4wEYMx4YosuGiEDa868YFdPctS26UpQpF4s2wiorcriz",
  "key37": "4YjZrCcc8zDZSQEhT7a8FxUEC8gDqfJT75qRXVvoUneNj7oxmCsY7aG9c5qRHAFf3JrXabV5ro7HSGfMoiPq58c9",
  "key38": "YakCN4pJeC1Ffgk19d1qRaCEie7hdkRoi7peC5ZA2LwD48ENxc1tBgSK4S78JarJt5An13FCPJEEcJAUPRYk6J2",
  "key39": "5TSUZ22VA8Zyzkjey8BJHtF1wAa4wz5Dn3uvsqCgMQs7mrXoif6mESt8Y4M3KxdGdqTnK41yzYVtKhKoESWrKkP1",
  "key40": "2MTsuKwEQQrWhSypzYGUBhSRJSdrRd8AfCuk2revb4iExYLowavFfYu14oCqX7WPgg1ZTii5iE4UEefhUvVpSU6g",
  "key41": "5dEPvADFBJ2iCubkArKBXpuPAuJisw1DvydqrAx7HEs9ZHqJikyobye6B6vMjmfZvNVknVveLkzmm62HDMvKk7Lg",
  "key42": "952RnsQ6UfhYgdgdnLtHASyGTZ3GpfZEARSUNA5WFdph2rCm6jzymv6dgZR2bWqJsM3jSny78mmFcNG5pSy5DUz",
  "key43": "5WGs23r2MmzBepim2ZgtAWYC3tTc2Rj4QdFFgZtnErFELKFF8fcbgJQxMgjqpdB1JxpxEHki52SurTUvAztzdNaw",
  "key44": "31TK8oEiSUBKtomtZWb6tb6TXwRGUgnXWbu84Lsng8jbWmnGFr42EXKgXc6X6HfyjwhbJLR5HjU2Teev1hJxxeJM",
  "key45": "4YNW9aANBcgfGbsREUpjdCKepgdaCi92yT42j84fyGWeM1SePrneLvEwTuZFZPnBRh3jVEG5AtiFBSed7WQQog1R",
  "key46": "2RTgxt9VKkS9eodwtx7YNsrtiu6FdsaVjxE4MeDmny63nNHGTQDAt3wtirPMyRHEHttdvVMYQVwCvNb5tbUZhx1o"
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
