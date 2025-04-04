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
    "63aQgeXWgLaymgcztXz5h6mtCxYymjdvEgGd49Qk5wCbCHJtHb8os43nwSCcZQcAPihD4c7pph3uzC5HxJK2zU8c"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tFERYrbDcY5pxF752VjCDNNERKYxkeTMZbnKY8dtcPAXa7kES8pQJ9vfUcAGfSjFDSmnAv2vr2q94HNYgRL7ZVQ",
  "key1": "5otfbDErWxRbEDQfjDGPNuZq7aW1cQ3incVnCwBCmMUMQRjBRdQxsCa3Ei45eoFaqD8r57n7qgfF2TZn5otwkEDD",
  "key2": "2hDvT5Yup5K9Ts1jJBcHVUtu4bHKHVTehRU1TYFJcHUeEURWswzgN75GbBRHmoha8rzJWSmXf7dqEzuixuMYL8xz",
  "key3": "2TCiwXZiSZMSQup3zfoNi8VaXgkDyvqeYkTQjW7ezWhbUppNEV2qJHNtz5qUWMtAbdqFqyjt1Loa1gYTmmPvwcGC",
  "key4": "dzjQ488uqebSox42BbVcbDuf7pE4v3FAMcwn1CqTCN2c2FiHCnjY1KZJd652ZkFiCrMGwM7nDU84hfrGUCXQzJu",
  "key5": "BWN6zZ1XtmMVB8JZd4fDxB8hfgvJZQeH7d6DVAxFEP7kWmFn4Vyfkr1YurN9amnvEfJj59kG7SJJ45k5kavkSEA",
  "key6": "3YVkStciDUxxt7sDhaKXsFtAZqMwiLxJor8tA6a6RMRkENuWgLMcAopXJKNkfuFpLRGpa7wfizRSam3JQxV3fNoQ",
  "key7": "4gXc35ybNPW23WV5ZwvHkueSVQwCQNuGFNRiv3iLvqyqEk1NC8MoMEagapNraumGK5RaMkJ9mGTCGBEcRgfaRVsF",
  "key8": "mDU7kL5CHJ14szT5ECiT5c2kpAkbzK5qmkJmkJGhNC5L7dWdjfhLELdddQVgQzP2oVqwEFXPmJ9gXKmm7e414qD",
  "key9": "ws66QPNfJnk9GfrK2yhEcV53VamKi5JwKGdB9eUujS2pdf9htMwUeGkX8FhhWrHjC9FYa1aF9sfdEwKgYW2uQr4",
  "key10": "5UXtS6YztB8yQFPzsSxskpmnE5q2h3oV18TqKpv9MHgnAAKQxGM4kshYQVbg28tDjfDL5bESxF5NhhdyaJLftL6t",
  "key11": "28x5vNmTZ7EhZYhs4UKakMjZjn6LQUpsiZkQVvM6xeFogya7Thfo1UJw1XUijs9EZbxS2f7P8LHMV7vDyeZoU1C4",
  "key12": "5orihvSz7y6bTMhpR8noLfzfZkJZ38o3ifrRNTADazwtH5wzqvtJqbjaXtQ5k7E2VR5AQmxUizbNEZmJgPKbJqUu",
  "key13": "3MNP7EhMcLFgZf6Bw89mRzzN1a1hLRxNwvNvfN7D9ETAyJwSEYmk8B3geVV4K9fjeuHgb5Nr5iW12YDHyhyHV9Rw",
  "key14": "3dK8SGi4uxUMNrDcJarrT8GqDdHCRzRXMpAPgPocX7sMpBKpyRFPqjFwscFVondQyLuRQa5bzug74kYpeB1amhgL",
  "key15": "5oBZgXJN6sgxjyHTUBKqjy1pnwEgJNV7YyF5T5RGgqHxb5MoR5SF72MSz32D5mKAmNowqck6NPnPxzZeeaHLTL9S",
  "key16": "CNQoSi8WhLmwDNM9JDkGZxzy9JkgQxDLPAwNk7JfDveSbHyPt2CByWwoX4w7V2UAgQkoash3hGr2j5ZzwKERnWt",
  "key17": "5pZY435TANfkwrovzAxDDJhm548y5Weq24RAA39zDrppjLHiBZwktw1CD2Dfr7F6GxfvsjG4VDrumViaHDDcEhv6",
  "key18": "WzggzPxDpTpawWoErpUygGmgReH6pNsiG7KeYmT7XgP2N6EQGV9YsKeVDKoAwMrq6BTT7mUb8fhpuajWGdeuHp9",
  "key19": "53NzLvHXJeN3KiUkU9dWRdhaEgEc6ukvzB4BqqFK6vy2fRaEWat1uLkDPevhBspxw32DAiFm2YK9BSjDLy2yBQSu",
  "key20": "2Wqmzws7BKWJDB4KvmxEmeL8KqtkvpvYsMaEBfSa29UkjpsAMrXijg7rMkJd16APsi3xGJpTXR5LwARUMLp9rffG",
  "key21": "43NejYUBBqwdjJcbsaxejjCYsW7KzNVYqT4nv8tvMgvEaPcuF3gE4utPAAeRSH9qkf8SWiPLVS7GzrqcYzGUPBMv",
  "key22": "RNJPyXX937XcUHXjzGLVV6JCt7QxiVX8fpT8AgCCHsz8XR7bdhDXwb5tMUboSj8jEEXoVLJes45X4JX3dpjgEgn",
  "key23": "41NcKarxcbGNLawrhAwdGSz1NEXWwXEfgABLHAr2ruF7Dy4osfjyrU7rk6DjyTUTm6F1qhVUSswRGYbRDDr9EkiR",
  "key24": "3E87KHirLmauhxycieo6EhtDYPAAdZoZqySoS2j8eGycbX7ra3tuYrLCbbasf1t5KiEGXprNuxTsma2ds9LtfqTH",
  "key25": "5knvjVsbDY2T5KFfCZm3ckq2cVeN3Q5tNHBrx8b1hy2v1qeah7mkpyewK89GaMPgr9tiB1kmupZUsmM9FYduwhLV",
  "key26": "4LjQntA9UaPKE3BskAJ2evKAh7NR9Gi7vZBaQF5uu5AWZPPAJGfbPjD9pASc1i32RNLLMwaxS1ZNa8JS33vhs6Dh",
  "key27": "2BsXFyk4HjYNZKFXR4KdUyX9yjXxzFhzQBtdBHjkvMLtVnWHmMyhuGaaNqpFBVryvGxaAhAd7btjzwguVFtVGTs5",
  "key28": "SywCPEb2XXsU9LfqH81aaVtvJ59XGyrnosp1bC3jpXT9815d1GiErz2yzLpixDzH9P5NFaw2MWtRjziwPbc1zJN",
  "key29": "5C1GzekrifGx95WmZohy1s92kkYSL5zf8JzMMUEduwEdm9UREQBJP1VtK6wo8Exg7bZgqGe3JHs1N9KTPKy85Aiz",
  "key30": "4YeURpRdxWGkKfmSLKocu6TZmrRPpiWGJzzmNhpUqKR68qMLQV3HWqzsgqSG8r56HAsXyCGrQufP7FrTuzY8noTg",
  "key31": "2Kcv59NiEqUmoRnHKpW4fuHznsCNUmWDvVavjfXh9zXAEdpJUcDw72X2wEnH7BwMuyX4woUyN784ocVXfQSE42ma",
  "key32": "63i4zYD7CLoWSG9E4SEkS9tbchaW5oUtoUAcP4vEPqt63Sq1YeU1tFVdcFagbRX4TwGMZHvQgp6itdPSHUU9VxHR",
  "key33": "4n78qd9PKHrkp4VzwHnfhcD8rPNhLiTiFYsceDzks9Yyiv4Q8c94cLBoG8Vgj5CzYdBBVrgLak2CTBfgFX7pujYG",
  "key34": "5S1aqkkk8Vuprxzbxs7kAoh2z9p7UNuVTkazqpm76DGaT4ngnnhsRY4TBDd8Rtp54cmiUazRrcs8w9d9uBJxtFXJ",
  "key35": "2uPWufJiJ8JrannFeALRCgaPrNbdSWCWHxZeUpn1878wuY3f8Ampj4XCLLbvXWacBwZKpJWu9MvDFXHTnKGY19ge"
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
