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
    "2kcj8Wj2Je2P66SEAydTAHF3b5dRfnapBJPBPzbjNQD6NMZUzqyn7BUQKY6AFRcyhSZN2SdqWect86XNwaiMct73"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5L7zZfqKGnVZaCWQ8ut2xcK8sSxttVa4bbpSvSJurbxKz1Uc9HkuqvA3iW8h8yp4XFUsT4uXFMJvDCPjQfizBSjp",
  "key1": "22uGQFBx2qdfzSWLZEuVvEWSbzaJb2ymWeH3aeGRu3nyeAnNfkCQUZiaVXZR76xVMitxXQ2NCZaqx4UESw6mAME5",
  "key2": "38K8Ug49GEAJEKW1DmiRWsE5ruU4UWa5uWhLWGDVUDfVLP99MAsuXDJoJGmdGsP9HFUrJQtixACKXZWFqbh77a8z",
  "key3": "32CQQHqussRGwzKN1ZJj6myiegqSdAfr546qBsvcfWVT7vPdtaQNjhLFYkLPt8dVHh89B1NFnJYQ1StrwBNbixNE",
  "key4": "4bsPB2SK2gPCGbeYnGcjAyte4H2CRDRWv7xzPi7yDLkVnabTZ6YV57bX5LLu5WDJtMe1VcfPPjcq8fHybu8aui1a",
  "key5": "ZsiqYzcFXDhyeLpaA6fbSJVYzn7qkxoSWgbQoBMBoLsWyKX6aM6NkvzjRiJh8ppjxYvsU14DRBzbHm88AiyL73E",
  "key6": "5G6VkkDcxECmGQZo25YKY4YGXdaEeW7JPE1yNGfMNh3fukFd7wqYG9iNDA8dC1m8SaPFrvKp2iUC31MA3kY1bKz2",
  "key7": "4fpbaa2qTQY4m95jRptK5ZqEhVfVjzQjDVj6QEFSc8U5yrqXHUT74R6vKYkAMBTV5TmdYTJ3Bqxu2aASYfB9ZYZU",
  "key8": "1T8R7WhohgGg7UDG3z7Gs22RnZYjivt24GuCLsCFFQotUzEXXmf4to95r8FDnqL68uFEzQVTNDh6Ye5wwGNHM1F",
  "key9": "122MrSvvYGU38QnCVYioW93yaZ6stioc1SseonunoDLx8atB2AhTgcFJjTc1eesRpUNbMWM4Uz9rh58hSvS3GRH2",
  "key10": "5f5qcvpMEEHwa8JRz4XXstwRRkWdAKDY3zkxEnYWetjw85PghFxHoVsDLrFaHBh92GoRqUGJT5gxt11FrzDrK5e8",
  "key11": "4DpmLEUvtemYWhE4QwpJFY8TD3ya2TRXEK8YcocUUMWNZPKmoWj9xSPiKWQQet5VSTbGC2YwFmx1mJ1XN2ughtZf",
  "key12": "5PdT4hecN41hGkJtCpuJVWfLr4gB8CDVW6VCetJjFvNuLHGRr8LL3PmPiARXULqNRXi2mqkEVaa29x8h7AK3Lvge",
  "key13": "3RNk8mXcWqYJnQhPSeM74h6ErbQknCNvDEmLQRte4x5DrUVMknQP3YfaxrBEfWmBRo3XjnXFbUEUeqih971Xqr1B",
  "key14": "4qKFR7yqaEejxE6H2V7pzup5QMtfQRy8mpFjfKBdLQuugd29FycT2F1KqFy5HVyHK66FQSWgLU7PMUWeEBvUHRL9",
  "key15": "3w9XFnyVfyJrYdFwA7KWEvpkp2k7wfjKVcVpmi7AoJMgiVPttzKihVruSZ7PUCyC1BR4HgSVAEoxhqFY12MqUt6u",
  "key16": "5uEWepg88pjfbJnDZWDJLMdUC1dmT8k3XLcDpzGM7D4Qq8P5Mm4wwcC7gFE4nmZzbzZCGYJH1nsCxeGyH4acTzGm",
  "key17": "2kNMcSkRBkD71fi9jHNPu5hN7uybg2MxV7HiiYt7jhXfgQqjn3qfNUhtfUNLkKAdeFGS8ftuqcbcXUQ594TgJqZt",
  "key18": "QN7dda519ahzHA5iD8ARfBvJmkgbLrddCaiX4VyMpRg7TjE8vDEMPUcMR4U5u7HgoUNaLXSgXxFCWB3sZvxQqBf",
  "key19": "4n23mE5C2Scpb31Fef5QFSMGoE8dMhFWpWxxPxjz6nmadvK9GYvtpuUMeFFfZ2GPDiY6Yu1ixyRkRhMD92HBbHy2",
  "key20": "5HrjUawQRejTTf8KghqcGNKYBBPauNwFzKP7QAHBb8tMprwAWJd2UFHxXhJ9fbieajkZVAig625vnHcRJrQMyW8t",
  "key21": "2qqTwKrpaqRvd1snvkjHaGoaxf85GLiz9KBERmLQyyWLAX5CgCx14yaAS1mq9NS4Jykj9qqaQreoZConK2yEBXZK",
  "key22": "37McQGHTsNXPyvszrYu4EvwCMnULR9oC9WUF2zhgetrCdFoi7gmhJNqXcaFYCdRN9ANHtRecd7VcYrNKSUiyXCKU",
  "key23": "5E5SzqFxC7fQpFzQCtCK3468SaXixdR7i11cWGUpP1b1c7B9evJgFMQoAMQcMBjtTzoPZta2puMzSZNt6H7N392B",
  "key24": "33ZNiyay9YY53UmjJ6XNPFMpHFJuxd4jgqFHgyVWPP6qzcGB2tr6unJ1eLs4aXg5cKN8ER4kXmcjAPMxz15RhEeS",
  "key25": "3fHBm2sr6wiDs9FtfqT5e7pz4kJz5rziTN7pnawvP5NWmqvyZqSTJavw2Bj3JazcNmVDQ9sfeZsuLAqAdUEgZKic",
  "key26": "sx5CfHefKtbLBqSNeTtfmdbuo6JZMpH1c46pCHRvxGfmnbtpGEahi4nmD6NAAodm6ukzBQoBbUBnNiu4NMHSD2q",
  "key27": "21PCgZCzch69EqBuUa5rvUS8jDaPzzHsmEs1sNfP1uZXrfXX71H9226RFyoZWkgTu79y9VkzqDDgCBm9ZuXeiC2t",
  "key28": "2ZtqRxraLKc7MtcvCRXr8rprr25wDuV9PT5h2u1wUkWsedc5op3HhKxroW83NGknbVg6X7zvyqbczPkjH5cXLchy",
  "key29": "MGTPxfjFNRJAffWMMx5Xvrwj4oq4tFznS7P1XSbF5bRHd2qZA9emx9aJzdZjmrvYQrUDgNfyeraYXXSt8TfYgLg",
  "key30": "3Zf3iG5e49hGXsvs3UXJ1qsEz3Y8hhu8ynJNWsoPVkU4pbDs7qRoz5E7AYXwv5VdRgWS1iCAZ2a25Twu8GivxCqP",
  "key31": "2LWsG29TdwYSPJ8SbbVv2Nj1ztdCqKpXpm26HdhncDyNPiuAtxvjM9umdXVkpLPTwsEYdEuR7jE284VsbNPxmKLf",
  "key32": "2BwULSPtSLBZkwdt3ziVBcAXidR6MxFw4gHAXx1dW4uhCoCfkQcRtYgdatHBGELrCRBn9aPMjrVGCmP5cysf1tGs",
  "key33": "3UyTc6sxdYRXfVj5qD4SGUoUmhB7mn8YPC4SKpsXNaKbbmshhxsCvaWhQ3uypkbcQ7EEwDDucQdGkp91zWz2bEbc",
  "key34": "JjqCpmjR4pSWrQXpjz1w2YZM3kiq8okSLZgCV2hQgumhFSfw3AstNhbnxwvogXEUYLcjcJCyGAwKkiy5KRVLQAT",
  "key35": "CQKT2eLN79MWTrrRZGhka9EGzRkf4q52S17va6xzfkTjrGWwCzNR5TkXUxN3Ze1SdkV2WdgC5KP3wXnfqYbp9Mt",
  "key36": "9F2Hz6dPHxpABh2e19jv9Z28nxY5uVNjfL3qK13QdxCL8vrJNo4w5WdhytGmg8YpWBKTiT7HwaGF47qbTvAFYxc",
  "key37": "44DYbpjibJiUkfrTXJB86xhWkzpHogSn1VZ1e7oF7cdawg9LPezNQPE5DVA6aJgir5JGHfqEu471k6YjAdzxr2E3",
  "key38": "473Tsqmx7z8RVeh5SjLUQMeuF5mpD6Gu4DgrrVKgzSVy5D3kQivTVatTr5atjqFs1rmH2uCe1CCqmKdBd1dh19Zo",
  "key39": "3BrGTSUZ2hQPD45UrsSThzT5ci2goEZkUdfDGCdNG5BBxdAjXpzQ4RtHpHHeDiWQ1Rno6eppnshAcbEV9y2BF2C2",
  "key40": "63fQKtX2wApRV3FDEvW4Q8sEbHHskRM3pPtRLW9k9G2A98wn6HpRagZmz2A9BZLrso7eiYB1eoGWtu797kvzwnPg",
  "key41": "4bPYjGLknkUoYkg4cCjev81rZYfjsUgTjRDFD2u3HMiDsPmjPKa6v2xHcqGzamoxrFGPGVQEhotKZ6MTUtQoC5Qa",
  "key42": "4rLE5vTVRB5A8PfiemYG7HdQum4YdDfPHdkQaKuC2gyDV9XFtBWZNXPBYqCbn4UQAM1cGpcZRcYoUEttPPxcecFn",
  "key43": "5ko6q4W3UqQYhsDZQ5dLhGAMCFeKXrL7uppRuTDuCXni7aqtLaz8bEvaMdC8kQSuv3WUffNRnLT3kj5Gq2Pn48G5",
  "key44": "5MSRJLqYSEca4KqqXRKJR8QLNCrTKyApRx4XEit5C1Ju7tBWVRjnKS5opRnmRY35VKcneSeHBrGpdCxbVp5yB2TA",
  "key45": "5PYTSrKuwfrV5FP65gMy3a4nTWQcsY5VLefV3VzT2bCiCc4ToSf618GYfoBw8kUp15wQQHERGTH2ygrYrFtUWvDZ",
  "key46": "3f9c7eFptPoVSUscGymmi9JueFTG3tbFjbsDSbnPkG3rYDb5pjZQqc5dDZVarpvc55RESFvkVNCkEN6qfPC5p79v",
  "key47": "2txd3sLu9bieFVVWYcq4hTinbkSmTYge1Amhp9fVez1NgVs1wqivaQCDB9bcckynyzeFqp9guoPzYUVBEvf312Tc",
  "key48": "2VDujLjXaxMjCipfvm3myfHkPyVwR85GbDpycb3a17ncQzbFfKBrPimMhXaEpXf7Nhb92KB2gEx9ptLkxNSV5yNY"
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
