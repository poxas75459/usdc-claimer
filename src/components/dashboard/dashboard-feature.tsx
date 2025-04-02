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
    "2z4j4CxKYPKz4XKdcdw9kYJ2gdfbLea6ZCMUCHKeVB3a9UqRaj2ZVAZdiPCLK14nBQKGudGXESyzZAeEfFdpyoCp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9V8khn95cwCVWHXLanQJTaXuRpyAE2SBwS8NtvWXEM3pu82pw4uJVdL3yhryn6E4cB5Uhk1EMnpzdGLYLfxd3pZ",
  "key1": "25uC7uVzCCnBfyhgZhKKVATzGfwbdXuT9iyryNL4oDujhvUwyRrUSajsTT2F92V1abR7AMnKbZwDT8WUMsL4An7G",
  "key2": "k8ggVRhA9t5TRahykxP7YoRhK7zBhpj3Cx6XHN8M7e8NZxbnyHXKwCqzcGx3dtR4Ln9G2PS73vzGifupeZ1wMYQ",
  "key3": "4Bbfp4p7i31336dGE2C4nD3QKYnvSYYEaXr19RQBJEW4HgSbrzkJsihx2Led1tP5UbodDg2ixNbEQrcXUxRpModS",
  "key4": "2LbdtjhP1q2gjL5jYXwjD4za6GGwCLsSDETkHhDbmkg8wwuduo1Cm6gXjNgmP17GVye96rwACyeFcDGmpRYPrF89",
  "key5": "5AztDaaUndoc9Q8XJYET4276PHgRVJAVMEgG16gs1Sn17ajNvTg8ksE8Gq7LoFo1uaY8VKRKvPGcGXSjMxBJ89q",
  "key6": "2QB3ut1BNsYMiKrpBdVRRjxLPETQobbAdfqoUWb1mUM87KnzBzdeDpKD7xafJTtCgiWJiDUDwUK8U2wsiTNEocsB",
  "key7": "53piSfmUVgKxwMjowJAWpZnEMyUDnrhAaDLKjvRF6B31rwLeg6tNcFGV2XMbrge4Rt96g7Vy4144kxfTQVuGyAN3",
  "key8": "4cfNiM7JRqhCUc3QBrAQRt9KC4meA7LBrjuwngvtEYaYN4gP9h1Rseu29FB1x3kn4vVdzEvv3hPMoXmC1jinze9y",
  "key9": "3w6zGQK2yu6gUTosNXJXJT4qoBc9SMainwJetRns7CU3AYvsaCvdDiRgKwhWPpCCYqhCfqTMnF5iidttEM8J1vNU",
  "key10": "63h2fuzU8TNXrZGnUdb7n6vfmBmauxALzPCc4JWKJcKFT9KF9aqFQBbxAaUkXfjg5695puyo44Hm6V4E2LugPug5",
  "key11": "1x4cP9ypLVXUUKMAj58fwH1zcbcGFnjhHXLE2tFQtBHw1S2HLeN36u23K7RaxuzMBWiFZFiBVNAWDsUEyca8MYv",
  "key12": "cC2jfRB2PX7ZVxWGak12aPp9EYFzMdbRWE7zqjXC8jdJpkedGMbek1f8oiXVMYJr4zxwa11RUtmq7PFa89tmSje",
  "key13": "2iHY6xT1ZWM6bYHm7ykuk1DkJhACCPHTZT62NaBAGkhKJwzJcnMHiUAuQEYSvtw3Nk7CWoVMqV6sQPgAjZy68kmK",
  "key14": "2niA4sct9Hb2XrSBsmoqpkt9cXqFuwLvxJuaaLeDVzVRC4TiEx1fUQPoTjzQD6eCGxRxn1mU3oaDPgwZMRuLTydA",
  "key15": "5pEWRY4tMK9wQQVnRPnhJgBAcS9rP8a7CJaS8YSakqaek8i8PCByUH7oJ6Z3AonBHnWsrnDuS97Ws6pmz6m2cy9c",
  "key16": "2EGsqFoMaFViPbQNKGmi4Dr4cJT9ZxSC3YcuQ5cekJ8kkJktoMdFancXn5iDEZjeqM5jwVePnayWjLTLsefAGMhm",
  "key17": "5Y7G5PWwbi9mi4zkZDoUaXR8MLmb5XTjmP2SeWHRabJv46pqMnqtjXm85SC7aaNLPgeyvTBELBe4ZJbNBXKnzG1f",
  "key18": "kvqSaDp6R823BoW1tywoNECj9Usj11FRWKSsyJoZ8qJxsNcg5QCoWFx8enW2Xb9eZ66V7hEEema6G6PoUaEhiBv",
  "key19": "2fg3PMuDoxmPughgTyGQmoCHK8mRMtoSBKuoeyTNYHMq2EjHQCJfcDYLs5ALVtbvPrhe2YrEbotdaaRe7nFdTTHg",
  "key20": "2U1o4EnuZdNC6Jerk7xEzQGzp7wxVhc9DVvQvBzzf9FmEmkWv4ki8X48uA1dA3BuksxNrwWQoRZ916kXSLLjawn",
  "key21": "4nTRRjDYPeAfLL4auZoxpykMhzfMvx6SyveAgwSaxm8rAwjc3HBZH9KYckBzXo97fc3MdQ4axsdPqHiHqMVFrvvp",
  "key22": "4t6UkoeiydxBH3gZxyuX8k5PsvPDmBpzmR3eRrb6RB5Bt2m5YiuFRAJ4NNPLd8KD39dWpWyYBGKGvYoVLLiWUh6B",
  "key23": "JfVdQmBqWqcyjaeuB4hVn5225DUyF1y2ivdx81zTemva7nigbwtrrTQpiiL4KuduUQoNQ2pNrog6wiBgf9K39Z5",
  "key24": "5kP2sgBCPsVwSUyN2ZAuGfDhBEtMcQJ9bFqBaqc57f7EFZM5TTk3v8ByETqqyK7WrA79wt5RsLvaQ4X4vx69Kgb",
  "key25": "3rFgxjSgywfLwP4cauthhJPnhuNzNiRZSptdW67pHr4MTfHxpAYDDc6gf6F6XRDA1LtEHfGMGZDADQhFXFUdcz5c",
  "key26": "CNc8DPVLh2sbt1jsDMEvp1iCYeZ5JkAcFGypsaYzveUYTwfFUugbHyBFn89kCkbDgGCBnopNZgLzK6eQFz5oQti",
  "key27": "46iyVfM37WCECgMFG3cNdSBKAegJk3JX6LNamK9K349fpgaDs9EDieDVhRNDmkzNTLjDqPZCuuMwfndkDeWRHQFd",
  "key28": "54m84SFNQc6Qx5GBdZn9AuLSdxi4z7FudKkjD5QhzeVoa9PLG2ZWPPhFoNuhyZh86jG1pamAS5qAi9Mz3uFBkmwx",
  "key29": "5fwwVmNvZ2Z4ms1uzSdVkuFpE7TPgGWgeYQuf5dGSKAeJqtReVUtVCwwXmSuxReqkgYvKzdF8ewnq3rV4ectxnXj",
  "key30": "4pLeBELWtjCuepde1h913vY1y6473sNyn7QEH7rYo45cQG7xHasQA41Mgn6wGkxRKS6qH52EW3kS1mKXELuBn6b1",
  "key31": "3b211W2PJu2HoDw86DAfoGjzWk1wMhsbfa8SYLVxZdK7k6JzZuz7K4ovFvVhp87zJufhq3RuguanztCMjZgdSs2S",
  "key32": "3EWeWFGNKSdnnUc4V7WZGm5ssAtGeWQRYNWU2qZiy2FvSq4pDDGduf6Gn1q5mu2D5LV9rdMin5BkLFqtLmmPaKsW",
  "key33": "8tvfFoTCQnpqvaqgTH3xgTKo9siCyfS1WbGLKtmyX67GQCZAbGHQHGma8njYmPS6XpqTN7A7VLRdKi2KYvMetgq",
  "key34": "3Y2M7zHUSyrA3Hj2KuJYz2SkK3zciKfRkgdcu4YHCxHoNku1v9cn94sXoEFt3n5Ftbxzgpt5jfVs9TBNbhXBBgAU",
  "key35": "39WHUj2LQtx5wgM4hsrXm1dPwmg2Z7C3jHqeTmf8YWpQj9YqpAeQTv5vL1ZLaQxyJxxrxwmpKYZHsq9QmqPrpoqy",
  "key36": "QFpNfL81LfzZG1YrU5DQxyy7R5Npi4wFFqAgywy21su1eNzxHbVsFued5W3XfNdjLbjKFzFkecTZU3P7PT4DmMZ",
  "key37": "2122nJymL5TSCBsvJwd5qLUhbdnZs4ukeYMUeeFTQ2oskx4JMALt8xjiLTuajfBVCYXQpgHCRAxAWgSETcpJLfus",
  "key38": "4fyFaQ8VPiBrKh8mdp7vBjBMvLJVhAbZNWmcBKScwhHLf3KNXmw99omFHHLwvs597ezk5cuFn3w3RX7VxHYyZfUg",
  "key39": "23MdLb4pBJ29tsQLDmNgf4SitmnD7RSCAGPyqogMGtKtgR4xj2PUzCYsoZUddzDcWPhmboXQb9xQvuFGQt5LCCoC",
  "key40": "5unDGNx6NR81oaiW3CaPp72C5yxEctfwuhNVjHHh4eB66bTdFrDxfjM6GDeErmaBpR3xUaMrxby7zbGZZ7VgGtuf",
  "key41": "5kKR4WR7D99CoREjkA3xcvr2RYdn8HKjhwuTb7eapKMoCwhVTfiE4899ySD6WKMsPnvS6h7TB7RhXxb57W5sznLR",
  "key42": "4DzB33iU3KAshySeUEDM1jdEXaw3VbEciN57mskE8vPtSGQHnhu2tGhj9WA3GnWjh16Fw3ji6ojNrkUDvGQiHi6a",
  "key43": "2SCyKHjXD3ougbgz1LNiupqju8yZ8aJD6jp3BFrfM1ScYhkveVrKaCWKpA7XoHh36GQrW9P1XHApYoht5bkMTUz1",
  "key44": "4SWfqYFDiMaDsFkTJsqSyGuMHssa53vR9eE7ewFErGaZaW7wSSm1GFtJCK7yC4MgM8EiBgUNwhiFnx39oSgEoNzo",
  "key45": "3ao9DBqz61evniFHfojzQdzFGp2zg7GGYGwwGej58KN7JgmdyNjh4srf9LhDwraYKDzmu4oZVM5xe14pr5eWTBRx",
  "key46": "FcoXDXd9E8Tgb2yeffjoaWotW4SZTGhVbUUdWMDrRHnSDCywh1QxqieYvYaTSsNU4qz9Xgtk2ba79j8kcfTwGr7",
  "key47": "66boBcnjeVLy7wBaDfzpEHCiKZiY5tvftZLHPc592ZXdfqFiLZs5bMVZ94vL6o5ADm9vuXywevNSJGrcp2V164j4",
  "key48": "CsKaUQBiMZH8HDFe4pdxbWwppkAEebQyFuC3PU4DgHHGC8i55U6RGYVJiWrzPJfAwcK6VKfnN5BmMELyjtRjV1u",
  "key49": "5SJeyWbkp19bjhdz42AZwRpYeZkXnTd3qmUmgZoSydvvu8EU4fb5h2StFW8LxYwpPKY6tcAZvD6SHZT2vSUzX5SH"
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
