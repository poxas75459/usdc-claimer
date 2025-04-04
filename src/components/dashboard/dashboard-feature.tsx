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
    "3j2SXzKhKyx2VWWbJ3JBe11FVXLH9dN1cKSxTm8f1iZzcgVvjH8aHdLTTxzEAbbEfnwSryVxaa9Xg5ACp3YC75K4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5mj8yA9323CfsR5yM7FfQnai27Eh4HWYnTLY2Arx5xxetqZGRFG7VFy5r3oBHFkMbcLr8dD5rCKmiJgHSjHu6BpG",
  "key1": "2DXXh6fkmdJFBbtv3U6EuZqZAbi4TFPnk7Y837YkW2kMgkAK5ZSpFcrV6ot1aHC4ozDkZYUUvD9UEt6d4A7d2E76",
  "key2": "5dTiuVW7qFHhJJgeveR2X1U813aTAgrVnM8WBeVdazfxCCYbtDtEWKKUXVqAweCVYiVs7X766N1jePX33MxhCr8W",
  "key3": "47RaFUvKbpo6HPhfVgYk58aWFN2VeqSoFEUne7TpGJuNEBGpcJt8kcqgxCbQJPTgZxUUKE6t24H5zTCrZ5myzGKi",
  "key4": "4f5qzMx4f9LmUNviDH2yu55ewpdSqmCo3QS4qmaS27u4cPZTgkv81p3hLTtNfQWsWjYHPjasn3saLmXt5EcQed4v",
  "key5": "25q2Hpo4DU3wYn9zfDCf5qiRrzfWaPV7Z5EWs1Hj8MMrpC84UPdmJDapVmwDNy9m9HZJJ27EenLU3cpzfbyZecdo",
  "key6": "2uuRSd5dsKw4sG5YgmJwCzanG2L2Tmn5ZXmpGSYD3tbyh6ycyRbQLKta2kCZZj7Zp4kYfBgbQatfiQRZCCioeeAW",
  "key7": "4nSVJS5PMRGtbkmYaXbZ9rWMzwNHF1ZGeJEsa7Zhvv3A6pTrVatmYfYx56KgkTtPmDUeZZxAJ6sbVzf63AT3ZNew",
  "key8": "645LvRwpcZZJtEJ84UU1xxZ7ThYhAe95xe9nmzr3jcuxhNVzpz2hrfsDWQAhB7Zqy3hWw3t48y8iCxVbkpwuLs6S",
  "key9": "2DZViCMrhGosMxdJcsowbY8H1q7qn8iFCJMHxZZt3xTjEkJ9cbZzVbtYYNVNAqdnfPXMU9M9F51xV2Av8qGLD6hd",
  "key10": "5zZoNyqoe3wtWoC9aU748rMF1yVkYTyS54ocEo7aVBK4vCGZmvPVKL6Gw3WL3ZsktGwXxD2muQ6v93fgBPnmifQf",
  "key11": "5LXQWEgwbHVqwWeDdoQftTWkDfLuytsfcbfAVEMPj94RoN8G56GLXgifP3SRZ6yDqsWWWCUV2jrgxRc9xuecdvjt",
  "key12": "5udNjpmHF5AL4H2u62qQvp2MVNryUM6Esekz8ebZPeDr53w3L36hf5XJgjak5WBbXqCjVtSkZydhFcAzzKPepdr4",
  "key13": "4fmWKmoAZkH2F5VGKBv7z8hN1nfhSrwwnGKpTnN9x3f9jiH4upbsZVA6jkwqgiJT5mPfqAhdcwcTNYqoNfvWMh4c",
  "key14": "63BfNE5NQLEk33PfEE3vox3bUiv7NsuT1re7bvHAHV4H26HfwoshxRvATQE5Rao5XaMnEd4wrPQLXG9sGoZirs3H",
  "key15": "2XiRiCk6MjdDR6NNHDSwUdUrC8Dft8LQgW5xT428Mq4VZRhz5NS9toxKsreUR8arAv28uSDA9LYjz2PE3iD92qBH",
  "key16": "5YM8yed2omh6UDon4pVU1nSLEpn2JnCXyp8D19tZsnL4dTwX2ZBm9WiK1PfpJqQjapAz9v1Pi26X6g3e7X5HHVL",
  "key17": "5S8HkD95YrWUJ6Md3ANhqsoccqfVg5AMTA8QFEdoyTrDvwQoRMW2DTNntTBWVotZaWzAyQhoSxVTqVwYRViPf87r",
  "key18": "jnXE1PFvNuQ78ZUgdyugkr4ZuVYY76YZLDZoJy8SKYukwcZrsZsbmDheEjywbfcbcRGeZdgK45JGzn76jas6AGA",
  "key19": "2S9iuTahBy2hzu6Q2r3cVRRCgV7xxzCGrVTQ7k4tBZt42ohwTPfRP9nSC5qU4M1SdqAweUdjZhBigyJEFPfBM17U",
  "key20": "5NMLp5AV5AeJkDPyqRJRFSHRnqbQvGiLnY63Gp5o5pQfKrq6L3ENMAEawASQGMh3GTsBU2CYxbpHjqBJktNUukuR",
  "key21": "4RjVGTmE8MuYab1y7Hs8MStzoRGJTxsqXRHEDGZs6KkVQ3uiiwCEptvi48LsNokpEiHqvLccb1poYPn7HZG28Eb7",
  "key22": "56R6CuKnGUyvC3fkANG7p3Lut5poQGJHUPq5NB7fXSHquPprc6gjkWM2jatr3UBe7wgaog7w2NKkkoFvNhatmAjy",
  "key23": "4iysS7aejgAnQncXkztnKJBgnvEgyL1Ekp7HLyiwc5RxF4ns2aSEoQXh8HfWUraTPXPuzneLT3cvjHvJmD4j19Ms",
  "key24": "5Rn9pTYAaDyJ1PozJpEsCmGZSmzwZUcr2TJZaC7cidjw58JCxFjF5VzUcM1u6b9WKj5jkvBeGx8tbfyqfzoCuYtR",
  "key25": "ZuResRCNnR26CdF8emgL575t5umVdSKcFkKAmYm1rrWHaLLcx7z8fb8wDh8KTL4o66py7eN34iPoSxyo2bnyy2E",
  "key26": "2eC3e46hVYxm8opjvKuGSjNVUUgnbUcpsZQ5N9Ujiif9U7an3tbBnpQ1UQnemMgxXAND3mDXr2h1HoPJWtPP9VUn",
  "key27": "7cG14NASS313CPN1myKVz1ErjFmXerP9F9cc4zvtEmpVfTYSerTgPSD6e4ubHySCSHFk7xfixQNvmywxUkwiuUq",
  "key28": "4mByHHCF8F9a6huGR86Yuxd4rcL1z37crokQANLhqkcPvaEVbbWSn8hzGRn5fwH8TMvh2Ssy6j6TrcMnddaBb53Y",
  "key29": "4Gydpw4pXwKJefUSA9BbC4cFa7Kx2BghLzVCS5CYnHc1Yig7f21hrmB83zkHwHNdaRNbdR56MuiUagJvvCeiCCsb",
  "key30": "4gBUjfJJqXZ9FkNTfP2QipM23YWm3nrcToo6aYXo4SciNWKB8VAutL6s8tEWmafFjPGvGjLyeJQuQ8NsGw4Q9i9J",
  "key31": "3Tuj6gx5LDAi63ikC4FAqaQX3oDb9rVeuXC4t7YEGtfZVHf84TxrPfAhkHvxGBzWW8XUwGNJ35wJTLTLQi4PMQvw",
  "key32": "psJdBSps9nSAJWGJv5p7eQ6s54F5oxtEuEVSuVPpdkz6EDh9JQmoojhMeahhPoivjhXGSSo1FEoE1MffdCSQhRL",
  "key33": "3rMFUTPxLUWeU816Hhhrd55sxFmWouXjnHsMwYQxtyUkC9HeXWqDPcSXzDAPadcRgDt5EV5MA3d1CVA2uoNt9HJK",
  "key34": "2qgGVuBHhb5g6QJ5MdbGjg6sKyk6GBR3zRi3AxZftgTdsbJMCxhbU8NBApcsZC3ToRHJ44UMvk8E6AmijwqTAs3A",
  "key35": "67N4A9nThsjg1L9DLUNGzZwsfhRDLqHEodYSRaUcBpB29zii27jbscYo5jqyTn85xFtTuSoC2xktpFX4dmtNvcPz",
  "key36": "4ZdD31mTGigu1eWJigHuKtGThNXvVHt1ShKsR8gBSta3Dq1KXxHiHVU5ozg1f9JRMsWyjLr2EPNMkw85TTnWJsUB",
  "key37": "x5FhoRgk9Z7cnsvXRCkVz2BpncYjVzZkvswAJZiAQmSxi3RZQ3aCfxZL1mBkqLJVSZhzothCCMt6Ed4dtGpgfxD",
  "key38": "4xKTchuScxChoQioB4VJ7WgW95kEtFf6X4rokNCBUkAUCP4CA27muqD56QXJq6qxK8uYnAGgfSN6Mkgf9TdnFAA2",
  "key39": "4gotsYGKNyu4M9iY7FMjezi3Y36E3aNknfacYg3szt5ooHS3SqW4HSZw4jHConJzXTcXpBVTpNAVAYYj9ts2Uj5v",
  "key40": "2GhKhqJDcN6AJZmjoHLjP1MAGfZnhip8hjYJiS5Y5en7ZS3dLopELyGEP9DXwYY4JwUZzHtCT7Xynn1M5pErXvLA"
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
