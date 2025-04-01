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
    "356cFG4aKtLHZJK2c19dvqyM6hutbbRWCm6KDeeKtyDhGvH4u9VsartojEaUrcSexf8a16pwgaLarpazZvvG6EX8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ioxJj2jhGTeHKE7MJtNrabeWxN1CsbgrGapiyrJ95U6jg3jd6H3djzRrKtSwiKkKNDvj5T8YVpRgbHtE8C34Nk1",
  "key1": "3nXvpnLUdyxdi33FnQepTrChgsqc3Kypm5jLW5kfLoLxpJuSnyb6AVSzT3A7Ha8XhV1SsKuZoHncoBYPQnwjd3Kv",
  "key2": "4QMZm6HPYDHM9VMwHTVe57X3rmcTmz4BCbEwjChntx4vkFoZL4zt7thf83DyKkzN2MqFhBiDs8iH8qCQqCeLMvqz",
  "key3": "Z5MGCZpaDXwhxNMG6JZq9nwCY8G4ZvfUwRpuA3FdMto3ep35ftTPSjTtmAxuFQCyLah5k2XSvmNwsVYPcAXzZvr",
  "key4": "5xQHn1vmszHxa7husfuhQTsBTrL1XhQuJfxZpp1C758c17DawoxjQw9P975WkPsZQ8uKV3m63C7BxYmAJ7nTzm9Q",
  "key5": "2y9j814M4LxmovCbXRHc3JCrdKFRw37jtG8LXPtKGgtxXJaFrxxyVD5hL5rpeQa2U7GD8yUQWiqvkjdcHxj7SaD4",
  "key6": "iToMJVHeWzHKhZDXup9PRawmacUjzy3AjaAtqUei4A3A1cpiYvR8yjvxfAy5GHALRF5wtRcx83HvwYEjj8qYrXL",
  "key7": "3JXMQzqE1f6JvG29nshC4qnzUnEFRLRXgpAys4jvCcA1mpNBKUbiNJNkVeZqoUrvTsvEduufjT9G9LEaRWfoYmww",
  "key8": "4921BJsKbqr6s1Co3VUywnG8oyU59VgScgPo6i33Lh4UEs557HfpXqFiuvNJh5CfnRdrLYjbE34AQVxSBz6JDFPg",
  "key9": "YWgbnCX37NVEsdnk7LKx4B2km1W9y8d33ZYcYFhHXmPyaoZX6x2gczzBtXTuXZvCNmipdwSdnomqq7qMaZkcrg4",
  "key10": "5riwwo1p3kWrf3MXWjuUV1YRHwES1Xt3U9jh9XG3xWYSRBFLaX9W3BZk8D3MXQ5bnpynZ75vxAgQshNzfVvxhge6",
  "key11": "BY94b3yoLVk7J45G1J4b3X2kpx46uXYnLiYveaipm6C3P7KbM65JthHLPwieQbNryV7SEhZ2YyZC84hvKTfV1dr",
  "key12": "3XQVH5YuZTHY3KZ7QSW5XJWxj94LubiK7FH34NTjzEBhkqiYRfW1Hxjh3fmX5PDur44r9vgtpN2tkFJ4jpJBv6EW",
  "key13": "u7rZjXPezdX2z7CH12c65adq9z8z5HZrvWZ9XJqyrNu8GEurfqYNz2wXyb5CHFLWKk785c7aWoPK9fgKopx4AkF",
  "key14": "VKZJR7F7o916RVm13mbqrDp9p3Jva7DsyhTiZscwGNFEiQ8GytTdp1KwyQfRp7aUjZLMmSttjEtMN8pp44LBN25",
  "key15": "oaxE4JfV1z4ssMQ4sCTWVKpcJ9R91CVEpL16SD9spdRFwrxtMX3XAC9db9j3QUjwNACik22LZqMYECJuFk7sba3",
  "key16": "2iVtDxhAiMWS98KG4oZWpNTeByCHV5rsSixNcWa6vvaJHhovyxADf1P9HK453zH12j9zoxRphhuB8bU46ni92DYe",
  "key17": "5L9uN5guYhcaKfc7yEHYTqvcczHSThjWRea7kzF3kwkKNRcXyLvqr3SPRphKTykEGkBT6u95hEzYQHiyvjWbZ2zD",
  "key18": "4nVtrPFnUp4NMMKd8aRiNmBQaFsspz2Ss2jUsqtWfpd2X5rAvyYKiio7xagaRr6RaedXAn1bHuEYurjaa1eCamdJ",
  "key19": "4o9t8P6nm97EGNBUWvkRTV15mArvWHR7nKvynaUmCHm74iTqpwbt1Xe8c6evxWfssYuMAFhSeGJddBoWRkWwSEUs",
  "key20": "dKwn4tAizEF9eGGWVPdFYamVaMkCKmFYigFy9yCYmTBhpG4yNwwo2ZTqyfpBn2DD7wETtBw8SnnJQ6cp6jsPU4B",
  "key21": "M2YHiSnx22by9sjEDTWJiG3MS6XY29dQy9jYATY2DzFYgrPH5QLPhVuvjeih7wrinWUdJ5SWHv69L7zpCJ11b6X",
  "key22": "2L9LmXNm9iDLwRQUgjUnCrY7heUguxdQe6ZUdD4PsmvCrmjvDJbtx4PVEhbwXAjToCZ3Jj9GSUirqhnav8fvxnF9",
  "key23": "NVtpb2KDxYfx8cstSQM8XYCppz7N97MrdYiiwRe42bdRuudYHqckQNui9RvY5fKoLYHnD3MUsf8mNbWyBBFyuie",
  "key24": "FEu8WmNygCWN6gD7jTT6kshjzHNNqa48bXMA6t6nAj44Y31SfSnd3TdfzYRyTju9DrTK194ef7tRfw16tCQKjsM",
  "key25": "Wu4Pu4j9jqowBr3RA9GUZy5Z432wPH5at9mhwvmJrtmPUcJbVuK6iEC2DM7EyREGemB6eULdsGK6Y2YfEBcryCM",
  "key26": "4AnoWHCMEovD9MPGoE8tWXitn7ptzFibVX6gfs5bfBbAz7k5kyAYY2TGaHtpuUmFCXFZ3sWbarPrBHtZUNMrHpKP",
  "key27": "jVbQeHxrFhB4xtLCpeaD7Avyx8FJ6E5UL1dXroJ4Nakq1YmZbjzxzGuJ2R1of5whx63WrA6bpMepmNabXHWyL6a",
  "key28": "2GKTtAbcS5zKKNFAsvX1UkAqyuZYgttmee9aiRf6KSXTJqmh5t8Nn1aP2s1RRs8gmWfnB9PRJ7ANZeQ3zTzaQyVM",
  "key29": "56aQgfSUsiwXJ7oTj1gHRSGPh4ZuTwtUY7Apkty7QmpV1UJNZFPGfFGkVA6emoSP3am6d657VXBkhotMuvKsGFbY",
  "key30": "3MroHxv4sn7fogoeGVcVF1toMJcU27XwDoWB5uFU7RcQy7tEuTLA1z8ngkN6r5zUZGSiGsKJa7rtQUF4G8ynXpLY",
  "key31": "2h679Kd6QfAqiXNZCVXMpCpK64WUraz2BaERc8QB794vdJ6i2i37pxhmTwm1LqyDb8cG3kMuyXUDF9q7x64B5h9H",
  "key32": "2AP63ECGaaKxg8N1aKTb9FXPotK5LPcW67uN841z1Q21V4wxjy8XToHaaDuzwqiscXRp1qyyrHAgP45wD9zmFjBD",
  "key33": "3xgmFB86njAMNy8eetejrH2WUMcgk5nuN3qGKWUXiu4MHSjb4zbcB8WFNeL36fRE2yiB3bCufEVMgdr44ck6PNFi",
  "key34": "2eSw1gAhDBnLVfwFJMM3gb8p2nti6zxEkN4HkcfkCWTZ7NADe5WRebANNaYBwLNiS7gB2ZJ7YY4qMt41AdzzKbLB",
  "key35": "5gTAvgKrowpCFviUgqcii7oJ9ijpWPiPymrDBTYuCMTuPSkmpJvKC1XbRio6XYnrSrRTR7tzYVMosuhtuKP7Apvg",
  "key36": "2whHwvVvgdRHwipkKV3D4Q6kVymFHqSdKToyhhxCt2YdDfUFWxkKhmNMTh7FG2ZeQq6xtDw1EE4A68DKT1boThD1",
  "key37": "NAqypyxmcxXr8E13WAFMnobSewLhw62Z3gS9rAM5htaTsotLvbD2YniNCKT9c9YYnNzeSWtKFmRxcZWQHwYW4Ng",
  "key38": "2uh4nmsWxGmSvVzKPX7GWB5ryLDboQJ1xZe9A2r9Fj2t5CyKYAcBxBqaVAz9x86ba9FNFJtfjcV8DAytPdYenxTz",
  "key39": "3eX6iZ1ui5X7YwoBn4D1JDsdjuxiMpFQYxK21oYSi3ArxJRuTpSwKHbXv7RwFVH14aCuhnN9iWLnwTwvGzrE4bzc",
  "key40": "4i29Uz6MafoPVKNkJuAxrH2d6WEgss5ni51dmw1C6oyt5gWWdKVmr58rWgtKTN4aJxP3rvxowSUexUE63qTp4GcB",
  "key41": "2ugizN8vDQv11mRbEz4ZGFoueGGWZv3bB9kkEY8NYGAXLzSu8aKx7rEG4QFmDzNb1PFgdNKE2uoywK41cf2FxJ28",
  "key42": "46Sp8N555WrRezJvkwU2nPAN5uuxgd5dE1BBdxHz4dzsk9wFtw77MSNxYrBHBVnFEP3ExBjJjBTyJd9NM63YuwqM",
  "key43": "4puSAi6rzTmHV64KaQP2ZporfWKBVDistXKZ3KESnAC7Uz7nm75KMLsewXA8DBTraiv6cBfMp5SRrxQ7a1HBzS5",
  "key44": "3ZHKvTxZs1QGMjCHmX6znV9PEXU1MG7R3dxbpb37BsNCr8fGrJj9fWMJEb5xqW84cDQUZZqYPaTXscLZT6FVV7z9"
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
