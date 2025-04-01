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
    "43AHPqks3XuRzb54XS3eLYrHLGFwsuAbnxAuo2Fpv8KH1RcSyR1ZPkr1ifUa1A8ZNmbsCu3VdUuUJPamuiKmyH8M"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hLez6FYhoimzt2BwDZTZHFun1sLV21a5XHgQaCxtPfuXGdG92L8Cfxt5zrbbafnJXjD9xzvGdLriL5d3yT8BnBG",
  "key1": "cnPn3rK55jeELZPoWL85nXZs2JTAb8NnghjTWJY3gBCJDtiBk3s52iGqApLbHvrz8rRcupKfArRxhf5Suic9EDL",
  "key2": "47r6yz58xNgNaFfBEV1fT2ckxNVSJGKnDSH44CH186nWfnEqHZ2Ds8ppdNVhKfVfkwVFAD9TQeEDgmQiSKS8JTvd",
  "key3": "F8Q6g9och175bBeGARwy75L6B9a9URdKxBzt2jXL8fErYi6ZEZKBNU3jEF48gj3qF3B5TGUpdzTErLRNuwPp7nr",
  "key4": "5fM5LWE2SGcKUjvNAiaZBHsjDUXafFHzmYrs49dULZWETGiL738x6Yr4hC1qQxKbJyGkGnUFg9o9mrEMLuNFBfBf",
  "key5": "4862oZTCUSFL8h5xPYPctUm2Y1XZ2XKvcxZsrjQYJUizVRyUTpEGYKP7hacsucy1pxTg2Q5cGjoVaD9Xm2DUR2tV",
  "key6": "3qRqp3cMV7H9NZUogx5MDigG7ehtCG9BE4Wkef2UJaH5zp2W7Uytop42VfX8mt4Z3xDsYoxMtF2DyXrst9RiAXmh",
  "key7": "4rHYc6ZCwVhxbRfgRZCuqWuDUUACigRN3ZXBjS5j8coGP1tDAsA5wbsUSY2ZEdawZPfwCJcEwM7kWfRK1mmivWNk",
  "key8": "4R4nMqSj3RMsyY4NqBhr6ysdbBofX9tvAynkvkJdzH1as67eucB6E5XQ6MuBQcEohbQMRyRJVuCAAWfQTgQUiqqx",
  "key9": "5W1t3M6Dq4x7ZQVL5xMbpEbaeuAiW9gv2yFRHyb8bWjwAypx6SM3161k6cpyHdepNVDozraPC6MGLSsWM3CrLeRz",
  "key10": "56U5yvjF9G4awRUpevtQZnR9PjpqPdrRQTJnXZbXTZ1FP81PqoaPBnGNSGBu6vFhP8R9Kfy5NhkCH6mWiJofpqPn",
  "key11": "j6S2X8aHVXTAcfmSPNYRPE979meGSY5Rfy8P5YQHXpmY25oKs3vRLJuuSpaGTfs23c3n8xq8QZw9qEj7CigHCL3",
  "key12": "2YRnispQDTwappnbbHJL4XHtm1EJaxXyfsUYZ6WbSSNw4fN2CpfZsqRXSqfLDHi2U6B6ddHtksHmJtCu77CN3Grt",
  "key13": "3FewB2VeGT92fDq7844pbD9Qu1FP5owemQdy4Hfv63NjK8vAaKA8mKnqSLKV1iGb8Z8LxFTaeKYb9n8xhnTTZ5zA",
  "key14": "57XyGdmrrfqjVZatgk1ucA8oKJcJex5t5AdffHYCbzrooyoh1Vd1hCQPeVGWjZAU8FrTrg3J5dgZXBFN1tPv8DMB",
  "key15": "4fY22NAwWxHbB8y6NTMZEj2j7dBBtFMEasoGVqMnbcbzzQSjcnd5AiAKFJHc6gY29WpuWk6QhZnqjSHdZDvupUob",
  "key16": "36zRgBidbE2exaSCYG5xZsyKdz4DtxFw9iKXN5othD54gd4HC6qwtXHMBQMw9RX9Ws8yGZjzVkv1ELHMRYznKQCo",
  "key17": "31qk58fPcMLjCAFN8HXeD7ZuH4TBLLoohFMSXBay2uEwcvLuQfwKAgx5qq3SjCTiS9nCPHrBWuKeGF3ZHY37Yez1",
  "key18": "6hL5kHp1aZ3ThQUZ8K98gvE3BPsECxTPopCpJ6ZvTnjBXp6eDrbqdxEGTvvZUMia2rveRut7wetwrYxqUFgpvuD",
  "key19": "4J2uLwBGKVi6duHACCZArTRtVC5WzTA7H8w9Q2kbE1wNUNzUCDaSkLXc9p3z35ccY9Adq5y3JyQqzU73pXcPiSkn",
  "key20": "21TwT5E6VNigzLdc69YPML67mgp9e3iCu3RgN1oLyUUq1hW4EhzuF3c3ttDGF93gvQQVVEhEHYgEXQM8rai7qS7R",
  "key21": "EaNFYLYznyntfNw2vNPfhAMU8W1VoRfkuCdRWKFLjequmisShkaZwQUk7zLdNWmNFbXvPLA4nwWnHorgKFPxZqT",
  "key22": "5vczukhU9CY31uAo3QhoCPLtFCQX4gtZGCPKjzeBtUzUsP7fnd4KbhXb69cRodKtMiGPmA7FCz2iCVRjxr8UAJty",
  "key23": "53qScTCYDPK557vtxZiCuLkMWktSJfVFW9Jb1tcn2QuQWgvGHQnezCYGLm3Gy84rZBCGJhPgE6W8Jqh9csnoyB2P",
  "key24": "4Y2dibBufiBeCjEntFDz9MHG81E5eJyyjrgnfYVyoiq4oPRGehfpHAY6awLXWS5X8ioAHdPTZDfEaKMRZHVc69Ep",
  "key25": "4o64V7sZav6myAu628EahUkqq9aao1FQZDMCHtTF8ErcGv7jkECYYvxzrSXmKZjgFqt14nZujQLmeDPxYuNRgfkP",
  "key26": "bScgDoY6WjzJJ7wfSgx6Xnrr9dTrXjBQ7BvsNXjPQiCKoiz5jpGBN2dfeqFw8i1QLDTkkSTczvj9QH1DrKuuugr",
  "key27": "52Y23z8aYcG3aPM1WuWiSi49gN8mE3tgDxqM4HXsk1SPbSWMLP3RuykxY8ZwWDjzyYTQKFd5M6vhrKBTDBEyimfo",
  "key28": "2pvTA78d9tnoBdfmjKvAE9Q3PowkJZzZiGKKdjy8Atc5DphNDfAG1ixToUTd9FJDqNciyvwCSYT4LeUw1Xugnym5",
  "key29": "3APQJaXgUv9Nhv3Cd6gKHkHKvxLMtGpvwWLqChfXuLyGpeukEAKTpGgKUMfiwLyJxUuNtgxV5fzPyatGtpT9denV",
  "key30": "33MVnDSgHv1ciezZzDHyGtw2NXfhdJEB7aKGbakfupYd9UW9TKH5cGJ9faQSCqU5GPTAF8y9oexsFtV13ZkDYU1x",
  "key31": "VmYwg6qp1dn6S5B6mXpJ4kkcKAuhKTTYeUxR6HwpuagMZYcEEHXgFrdg99v7sCtwx4hNWnKkddcNGWscdZmoTtS",
  "key32": "4VCEf3VGHqrV8yCzWs78fUrpmVo9iZ9ufRAvJdjyScWXsFHgUQCPVqa9hVuHMeSgFDUFB7hF9NKj8g7mUminHgRU",
  "key33": "3HDpvr9nYui7pUbfEjg7ZRBh5BjqABiHLEzZZ9o3o7Sc5GTBkxCRfa3Yt3XYffKjK6UcEEDRf5VMKATWJEN9JLMS",
  "key34": "tPyymYudgHfEt4sS5aVpA2UuGAdSpcfzJRruoVVy1NDu4ER35xqGmMcKrpFQX57RE6vEGTT5cnbPQMgbaBHCsEi",
  "key35": "2fyWNhLKxJYnCMMoTqEzSjgZtLnKL4gYavPYm1veX28QeM1ZH89rhT8UKZaYaeCSsSBrRbAM29TUGiX8dE9YtQrD",
  "key36": "5KmFJ2Z1q9PehbkgraoByZbUA2CU3xjw8ru2sHaaA7sFffxsbj9FQ8mwdY6jwCopkApv3HBykekHtdF35duQ88on"
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
