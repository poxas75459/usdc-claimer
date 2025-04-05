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
    "2J7MYnpLhB1GQduC18rZLBzCV4dKJKD3RoBJcUVpGQ3FUqfdafNCSWWyNwGn86UZALSyQkVYWhnMRxPEnkCvQ9QE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5x6Pj8kMa9tYsS1Q7885k4G88KmDjMESvdSNkSxa2DnhmHyLa1BfJBXQxKmXbN8EoVAPg5Lo6gojXzdKmPmBvhhH",
  "key1": "2msxGM1v6UMePMp3cgvTSvcLPoKnTbkbqTGGy69KfdpXp4DgmfsuaogCyXW6GoJtmUw2uyqjJqQWhYwVkZdkwVsu",
  "key2": "Y1tL8PoRupN2wjRsy35fjJ6xEAdc1fbcYPGBeYWqA7B9YcB11QanyjJZGnHrTgkdXoExUPW5H1y5jReoMRe4b71",
  "key3": "5J97DHVgDcs7hHqgq7ePBina9h375XpVX1KTQrVZxQhSMNeHa3qiMFFLqXXneyXyNfyLw2sZYKTtVF7B4GtKwBLr",
  "key4": "4ySRSq3wrHDYZi5vyG6k6han58nzxn3zr3ZUsMDGch1ccvrgPR7Lx81KW4mNjZa2UkevxKQhyrDJrNNYrCdRvYiB",
  "key5": "Bg9x1Qap2XK6MSGmCRhi3qqgYNpGq11StS9vnw92HQTj11cns26L9uPDHUKi5KjAB8VECmnyj9P7f1bNBwXxu8e",
  "key6": "37sfabBi8qajbguv2AuKatnhB1PqjrNqhwEm4ZiB7DqZm3aCNQLGxuAECANb495FjKBTKHeKpUjmi519V3GfKbyj",
  "key7": "37meADXyzJQqVWBKNkbs6apjYNdaLXViGwLRydi8L9LjZqFUbCwAiCcquX9a7MZY4ZfBT85AUcimzY6kZh3YVVmR",
  "key8": "kHNPrrc2rz8LJTZfPpBpq29mpKoL7rZ8u8vAAaKPVuXms8KH4DmH9Jo6n1XSzrfQDe3jbCKZ4tJ3uoUHtwtE93z",
  "key9": "42eicCKC7jYkFC1zPyu7QCTRhQDgUsRKCWKUut8En9bdaZF98LRdvTGP4qTJ3XMBT6EXj6A1g9w4nibxRV2JV5G7",
  "key10": "5dkab9yM7a4rmLgPmmEv1F8K2AhTBB8WTmjhhoB6ojNuRafCSvWoyzmKZydLUzoGdsTcGHEu39gimsmKqHPbM9uC",
  "key11": "4UEyGK5o6mR22szaGDr9REr4feC68kF3cp1TgisAgW2aNsbyY5Zhs43eWCCR1DiXcNzqReS31EyZppgSL3kyoGfg",
  "key12": "4orUATiiSXEnE6xuzhzm3HxH9YATcsmeoczkE8YcKwHuncmAyESu8BtBKrQEY24gv2bM2ZNswCEx5Lg6Co5NdL3t",
  "key13": "4nigYyvnUFAG2uJxwFe2Nt9qhzgqXRodiEiKbyhsMJByWwRfqYVGu1xMS7FhLNHYWM6T7W4R5UkPqZAzNmkUTYwu",
  "key14": "sZ1Gi5Khx7epmKDFah7gmyFmiyMTjcVw6dzg2vEgRGZEouuyiV524zqGqixQ6YYLSGGNiYNxoQv3hXkyXUWFVXK",
  "key15": "568xNMjvqUvMj8brgNA7ysLGPace57kdaFaxPE5a8zBn4c2StEm8fZUteNxpcNQVGvZEjbGcsV7xNfnLaiRsLSZJ",
  "key16": "2nAcD68j39Z3QckmkAa3xFPhSw1NCrx66fU3kxoQ7X7GmNi5dECB3fM1WCLmkQf5vEHG1EUfw9R8Zy4iBbYHubnX",
  "key17": "4UxGHsgGueb7aLmJkNyzdWJKQBX5u2sHyP5iS1vcP6YMB87cFmiwfUc4d3ARckMbycH3MaknqwEFrhxERRcCkADX",
  "key18": "233ujU1CFPL1DkgRS3vM7GjBcB43aLB4NfUPKWHyEPyC9ZhYqu9Ur12ZSPdzm93SUaia2FmMBHZoZN5exiKrXX2H",
  "key19": "62KNV6gQdCH8MNj8hzttRL3tZwyu5RGHR8of4LLUtJz2ef6a62tUKxMLfapL7vutTaD5vU1Roa3GVWijEGm1Af1s",
  "key20": "7nGP8u2RB4rLmo86XFx1YpeFFevNnWieY3DMcyLVxrrnszBsd6SZXTpftGmtw48SdhXY671NED5V8LMtB9kmigJ",
  "key21": "55bqCphv4H4BuBBbHxJqF8Ae2qhTFroa4VjVpC2YJeGNstRZbg7sbhfaQEiUZrSYtQiNJnhibXcwcVK5Nd1C5yq4",
  "key22": "4tTae17YUxF24gvhu9WdRKh51jGsk1hJddAbg9V3aRh3kWiEQEFB7j8cQ9vJeMxp4FKaPDV3qRAvK7xDSghh59Sy",
  "key23": "5kVFsrr1pVGnDV4oVz126ArCMQh7pMoCkWzU1m58Ks4BuG93ETLRxg3DY6PW9pd7EnUEt4vZLgXrYZo9eZssZXU2",
  "key24": "3aAXtkFPYXHaR29J26ra6n3iPnbxpdTsHQt13CrAN4f1m2VV7GSnzv5mEb6fELwETDggDq8ishQbMeooM1kTkPTL",
  "key25": "jUpTEGfJXNc2ekSgcuLjDhzS4pqqGZ4GVjzYnEyVNeg8e2fTr2ZVKDAGVu5F9B7xwQcSekFnsngQEns1Je65Zdd",
  "key26": "3i8tzKT5PMaK3vKXodsjQDUTELdxh9jusPa2AnwcigYbZu5aRAtYcuC36LnMNCa16bU2nbDGUrjFbfLGB5Sd2ib3",
  "key27": "4ZJxzRBtHHRw54Z6dkmJtwzwozVeZrVfpZniWpeLkzrBSc3LdCVZJJQk4zF3mwdHKg3V5deMwDAhMjxj2LL3DFew",
  "key28": "48cisMTwMmN5Sf419dYJxgbLU665YGFYS3CZN5b6VU6nrBWk9UL7ocrQQ97QbJkuv3ArB8sjmYxeaPAkRgsNSDpS"
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
