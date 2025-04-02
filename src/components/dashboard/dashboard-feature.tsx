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
    "mdZVXZFjofRP2Y4gk2NhPMvUdA7ReP3fzL486jK46Jr2MRVFV6rW5Mzbq2GWUSy9g7h5Xng1z9Wo6wrmEmhVK2M"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2RZf85tjaA53e3yM2Qg88sAdMdKpQjdK1ZvJQfPfiqxSa4vzMQuDxBWDEXj36duYSjxVT83GxugdLQAdie9MthB3",
  "key1": "3nDuUoj6wNyrC8QYZZZ7Gd8PtKjLVGvoQyirGEXATuwx44eGYzVNxSEAqGKAd6WUyAhfWN8KSkMLy2ywpnP8dugB",
  "key2": "3WnDy1zWLN7CKvEAuTN4xmuETKLLHaqjbjZfcXg1jKCQVPTFvTjkTkvAXBuEaSYmEJXsxhKSUm6x6SZDuW2HWAyZ",
  "key3": "ShjfRYboGeVbudyz8iAipuy1336taT974DYpjJr5Tbg7C3tSyKa5GNeLN36KUjg2vLTA8AaSgWHgvfBFbTJ8bsq",
  "key4": "43pr8WPwzvcTkm1rr6zJPH3wQDExkRU62K8dGaxZLEZhr8oj6R9bbfY6iPY2FpS4x5XmkrHk5wyrRXPmDS58rG9s",
  "key5": "h8y3JxXRvpymtiAfpUa76sQBiWUiPAMDz8tYrokrHHhAcJHxbBCZRFKHW2AzZTbu6fFe6TGAQojWotjVW4FGoFt",
  "key6": "4t2LLMQjZMN12U2UPjfwgevZWfsoPSoan57enuLjpsDD48uMsXuqjxzSebnoCiFAZbJpLHjZVCHD2X7K7DnWqct",
  "key7": "5RW7BYQmogu3F6Mw7ABZDs6JZBZ4hNrX7vkHcQD1GLNih8Xs1vXmfyNPnovLzxLPYqpKKC9k8CER3vauCMZ3pC8V",
  "key8": "4Rqj2MH6Mdf63mi3gmpQestAjpDfGPH8W5PAKUogu4EgQPeuRbUY22Wpj141fKWREnXYANt3GxT5A8JgpZ6XFYkj",
  "key9": "4Xx6oC9g4oGZSRy4qFsL3uTuYUHQPpTrDHEEMHkS5cDQY3Gw3i52ApRvWeTb1tELdxAgmsA93ZNcmQ7wckNobeQA",
  "key10": "5GBdio28Q7bM7BgpgLiCJW9Ybyzo7HBnFZgrM3tZEMmv8CexGFdqtPPHewjoYny69F9NRyFCmTBwcRW62H37ZUia",
  "key11": "25HCJD7bNnq69pwdgSmmDwGbE4eX1aapwrd7yXFbBULW3EmfWqPCYZcAPiJiNVHhjrCtHhtk5uufTBYnX6jee2re",
  "key12": "46cvLqKrmtgzLye6hL8wMK5jA8A8LJXxE3oH87yATWEcruNpZhHYG9PmeCLtpkcDekNQbdb5Dz9bTKR8cwRcr1RV",
  "key13": "5vpxCRi958hpVbcUjZDduU3ZD54TomshdJThHsvtBgmf3kLcqmRfUakLQ25oPJss91bLsAd6oSJxYrxQBgZa8Nde",
  "key14": "5K4EpGAPjd68quEUsDRJE1LY392QbN4Wjmf6tFVXEex1XYtXVCfPgUm1oh5tbteJSFVLVCv2sexdNZRuPFf6RNv6",
  "key15": "4onWdAWgiNFwoYPfW9F8LspUZbCY6mU7HvUiYkJZEjrTytrjvDdPcwB1wJ9Km1MdAB9Y2zJG1MJFTSsnk49KbM9j",
  "key16": "FD2UGj3zEEUWLxav9uGDYKTKfHYt13EuSZYK62eMkPRwnHpFzvSje97aYUyowk6S7xA8vAkwfKqwjxDxivgYqqG",
  "key17": "34a8HSatjm7PSiRapJ8KaJxqHLT85bJuSazFNyd1PWDEDGLjfecUcLLCrz5jbZNjNiwoaTQrLzoJ1z4jwi9kZ7Qt",
  "key18": "4rhDUudZrgq6oRFZbc8pdxw73aVASXqQuqoitJVEgKqpofffVd7RDHqJPwkiXAKyBPbs6BF2et4rsWg2TCSdyvft",
  "key19": "LfDgYCx1oAjuwBkKC8DvGZYsBtTSRQ2dWWHD4wPgvbkVWmEEPpbA4HqGi7Zx7p6abneivP3TkgBgd1hLxd9eUrY",
  "key20": "NsQ61Fw7y2GBvE5dtsJCTpa1NQ8zwKefatkPB2NvZipW4N3bcT4t7P224gpa6AkeLrfp24dN3ekAnoDsfQtfrDP",
  "key21": "2SrkFBProdqBPD9Y9YrV1yfzB3manFnvYkDqED1bbuHQ8Qc3ULTxSEGD1xNhHaR2u2s7CHYVoa8rewuqCjiDmzFg",
  "key22": "2KmKRT56TzDxETfWHBfFqFYne1RsT5xkyEwHRdxEMz37FcbFSmspKQvGXo3UrRpj81xThkEfKSNEiyihDPV4cuDt",
  "key23": "4PKWakEEg1r93DXH8vQVG2S7tjQ7oZZJPExxoE6A8bSU51oQuE28xCUfEiAU6jRuTybFRgQ3Y1LdQoSZeHn33b2o",
  "key24": "47QZwMMXc5VF3HKEXxMHqTBSmxq3pG2DpZGpvhLGdsiWWh2gAWrf3T3sian9tbUAaAETzQAtnUJFcfHacjwdukMc",
  "key25": "37ZQEjiMQSu4buWe45Gx45aEqpMvUYruK4MwnYC4fhtzV8TFojujGKrz4RxE9XCiRaGQEpbMipJx6gADT8R5Zg6m",
  "key26": "3n3PUQYGHPkieEEdugqWmV88pVXwHCpmm6WANmW9ziAoY8CdfDmZ95gbtnxi9D1QJ8nemytak58HJ4vXEDgZvgHw",
  "key27": "31jaThQLWXJf6zonRZbpZAczvDL6B7CjsfTditfupgn1n61aj3sh5QuxJBt2Tm6ympphFkEvWaq56eda22M2zd62",
  "key28": "48grBoN2iYttrHUgxhL6Qw5a4TpFpuFSptnd6XjyNrKgYcPHmg1ntQxj6grPsDv3VKbHyGgH5uaCAEtZtTit3zP9",
  "key29": "zHbUDM8JP3dJzCWU9Xw917R4LKrRmTFzJxvbHxhAUmMLRMmiNukGDUL2DY2cmKA1GTpXS6PZQo1GZ58ps37j275",
  "key30": "5YjBZL7PHex5xjTo6a7uFyGToWNqxHQaBxxWySMTGu6DKaYCWQD5oaxufZWB7tFLHHaCkCAhLcXvNhg5K1KFJ6ib",
  "key31": "4HrwqPeK1xZxD39iraCRyT8RR7grMBUSaV4Vnsk7ErvnGubd6ALWcCzg668x5TzuJt1G8uhErMSvk6fCH5Rr9epR",
  "key32": "3xuthWJJ7YPyVJZ7jSBHN9sJWESUncjTm8UZmS7hwAFxK2KKxYNdADDvPpUxFYpXRGxXk2TVz4w7uYmpSWjSYidR",
  "key33": "XLqGaiFuxCwq5qgkSGXhnqrgP9Es3KeMWtqZmCBZ6H3SqWowRVDSoxSe1ZeV8MyGnprgDkwJTP5Trnt1LfBWKvZ",
  "key34": "3bmLL3Bi6XrbE6tDkA3VDiNCKD4apGsNc1iEc2ETvc2K172dkDU66JprvUtZm5M3xU4QntdmPXq1B8cPDTaxebT3",
  "key35": "2CLgFc7srw7H37LCasp4NNxUWpYsewYarhrBMLvkq7SenxPcxKLavkvkQ6Xz14PaH7u3QN7EjQ1oAW9Y7DsG8W4i",
  "key36": "e4UDYjpBNaLQJKnUHAQMNtJJy5vVMKxzRdjaDMHMSozZPTzV3PXtzE57oLRPq9tsoTy62HUpfd18SELtL21We9W",
  "key37": "34yYuDNHw7UNrYBVCQGwGJcRG6rcR3ZAQUhXFTWuQ8ct29waWb5aVMVSevXnKNy6qSLHNH7phX7SFr6ozg7NppYC",
  "key38": "4S4wdevwr7MWXixWnZfcAzzqXq1iUg9f5BxH3xpd7bMobBfBhhTVEHiPi9iBCEh2wANK38LmjTXSQ5LvJEov8eDF",
  "key39": "n6mmnrF3xSBR5BSBTG5G6dZEKumTTwTHwwbAVXup6dZV9tjLZMPuZA7A5HvG9KVCG49fhphstUE1cgRgvzGf2vU",
  "key40": "56BAf1NXmLuQY2TNw5NgxdEdwrsRzjUiaE9dRJubyVHwbCr84xnWuijH6wyeTFmSSWGTfVXKw7Rkg9fD683VnTJk",
  "key41": "3Z9ECeG872RoJDmEfHeKFu8y6iXEAPmVne9KEomYs5dcHWD5pbW9tu4J4u113223CSWWPwbEhNrK32mj23BhoVM6",
  "key42": "5vFx2eyiV74W3YqpoGx2u6e7ybnXcdgUMqNKnWqH8qWufnjCFit3VE7eBePChL5ff8YCPAcpS35SHtRQX66gWcC1",
  "key43": "2tUWPX8NTrwC6hkHEgrn9Mw7fNezJzJPntWTBhyXAu5ZepT1SZTaLStZVEUUptrCKUwHSsKqxA4k5ATbUxcyAT8p",
  "key44": "LrbD8SbeGn9VPahueHZv54WEoRzJbAHkoSAkEKKJFpN99mrkYrNQKokavbK18ExaQpBfRD7PuRXbVzUVaTMKLkE",
  "key45": "2zATmUv8smmVsH2br5VRrYDPnSFrj1HEkimLwF6jmXJ13kw6x51NsrxD2YWSVtS4cQDp4m7LBKVGT2r9eW64qLfD",
  "key46": "66a7oc6BmSd91JGFGuuohS7CzzHVMzPTpanZvdbU1GqoCpkKWeurAFj6Jtc7RreYU8pBkybDisNTCBzmKyMp9G61"
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
