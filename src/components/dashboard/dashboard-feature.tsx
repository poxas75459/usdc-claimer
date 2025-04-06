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
    "3hkiWYNXn7foS4qLKt6qn4oHmVoS9rp7oiVu8rWhE53Xsb6g71jyBG6w62AdrkaQmmWYr6hmQWpgz7ytJto7d3oZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4V1Seh363Vzb9VcojcQqoMgN2fhncKP8PqACAnwTvoSWRMdbUFoQA1RpTdrFtuFxQ5mFmFJHDA2tH4sTuzyCReyf",
  "key1": "66XFfowxhgtkiZt6w6JKknbkoyvjwehN3T6nKCL2XrzGdUWu6NFL5rJR8Cc6QQUyXbWDZ7xQE9H8Gz9CeyPTUyiD",
  "key2": "5jQb4kQDrW46tVvTP7aKaL8KpHbFvzcB3aKqo9WLxembVJEsVt79u5QqRPDgc2etPSSvdLhUn4aLeqWP5B5e8k33",
  "key3": "4AVYBDFTCAnqR8PNigw2TzFQWzQR9gD5YMZ8UaXTm1B2HudUxvxYkDvrsN2XootczdY3A1PRu53SaFMqJ3D9S5Uq",
  "key4": "YmCVPbLTcAkjVzoJ8np9Vxn2LuyQAb33NtS5irKgm3AVMmviDLP5hTKoaDwfyEdvTFn1bn9du2Lb3cMs89rpYvq",
  "key5": "3ZdCaHwvYC2AHSjEPyamitPq26TmaaoSqK9m25o9fiN449ssr7sCTnPw9PFe8zRdccoK5kdJsdZkU7wu48zGKcxg",
  "key6": "2zAc7yHbsXgdnCufE3doP26u3p33GBvrisX4pRsQ1C1mz8Gd5zttSHbUwYJwTNmGSgUnrf98Gky7Af9jKjFyviNh",
  "key7": "5pPTnhaXS8oCAYehBadg4e75AtEVp85EYzCUtiqWjLNqc6yvaJdFUg5AeQx9zwUnaSMWQEcq7Y3ALq2GmaZAXjp2",
  "key8": "3R9ZAvY5AxCjv7ckgYk5zDngTnfyXCbvG63RbP1Nv4yiYvQrkGzdJLuvCSQ3QSjGYWMo39zsp2cA1FWikVk62gWv",
  "key9": "5tEdB6oVhBdtwJunQkMbWCSgQJXNVdg9L2MmWQPf7z4fQc2amXMTWvA11dXPVNQpYiqZBCSztinytdPoWWQkB5MN",
  "key10": "2dsF1r8kS1FKr9UzTtoWT5aWufCgWArRgzWFhDmusJdLbiUNkN6Ti3CEqRmBF79rhkPjFhuAqoE42QniAR8F2kmW",
  "key11": "55ttSX8o27HfTBoGCvUGdNGsh6648ZnPyNdMUjpLfqUggmr3Cng7UGuTGZqWNqoYTCEtswAkiWriGHZfQ2RhfQss",
  "key12": "4bLFwbNyWJvazbkeU3KAGGQ7fXUye5TPyprD1nHqjvzpKST7CarAgCaZpbyj9imdkSfuSgFQBfGQnR3Wcc95SqT",
  "key13": "JL5qeqNuxBp2jteuc5RjJaqoLxBnke9534itWzyQNDAcScfKW96wQL6bTjrA5Wddf5kbNTeostJKPmjeuD13PBs",
  "key14": "4LTJURpywJnX1Sqfu9rW6tUMBFn7W6kqzChyVVDCUnujqcgnPrDG1ChJxVzhrdoiYERDRdkB7f4C8VXVUbCNiKb",
  "key15": "4GUEyodqbpdBSqf7ZhNiPDN2HuZieZJA8eev9c2BoB99WZEDCRGGo1tGqBSoBb7uCJj7dc2efBdymZnRhiH5TRdy",
  "key16": "57TF8Bz9cYo3FiiLUTzNKjq9cbLbXLuvebrRDDbaPvdyEVwSepH53UycACdpdD7cWE5yfQ1SvcYpQjbfnDmTPNNS",
  "key17": "5SSoHjHyhVa2USjhJwTmpKebWTYGFsK3sZnni3dyCKZ2GUWG4e1sFmvfMWHjuihLtfWh2RyPioY9U3XF7DopHABy",
  "key18": "2t83kaHzPpE7M5tnWG9qZ1cxzLHDNprvUKaMrSyoz8UxT3WwawNovukRFDm62si3HB5c4sde5Pm4bqsVN77YAdaC",
  "key19": "MP3CgMap7KJuuJGa9MibfRZYStw3TaTuFhc6TgJdd3vAkMKAHXDSstugj4YZvJ8wr2Y9EdNBX37kqbws8r1koTG",
  "key20": "3VD3rmjN5PPoYGbjHaS2ayo3bgYQrZLGhCgcFSabsLcakYQ8imTufKMcQn5hS4ASuJqirc5oa4vuXrNeVfwVAayT",
  "key21": "3F2V563ftwjqHJUb2z2dzgRbZSqTPXhQkMmJGND9LyVtGdYQA6iBR34KpCY555zs8m3YGtwsb3n19uefQr9pTJRR",
  "key22": "3ygiXYh3irru5m1QccGEsmxtxxw9oJ6gkPN9MVs28phcJ8C2f4Gu76yRHp1eaLBnmc6AajwBGNRzEvTavN5ap59n",
  "key23": "56H98G3Erj12z5a2qhD3VbmxdMC9633E5Uw4afXeBx3bZvQW18jYu1yLdVqZ37FENpRysC3dbDdZEX5Zs99YJWnX",
  "key24": "4F1XVdNAkowAFB6yhfNDnEzTbsJKYmCvE7cBC8A6pS3qUeB6zdn4Tq2Y6iRRwvgYgw6NAyzSkLSioyhEHLLBuAbe",
  "key25": "3ASwe11d28ZdUcTNSFE3K1jyKVMRsgXGww7t71km1KV9SV1cXaGTj15MyrkwAEJSYexNcTGset3UnkdThTL4paRP",
  "key26": "GRo9kBeLi6mcFu4gKAiLoXbujbBhydMNCWdLpSE4x2eRHZvtT9i1nH8RLrwPji2HNfaP8ThcwpwqrmcwKwMM7Ze",
  "key27": "62vn13bF5HyCFxSnBa53WL6L8ZyJnXVDAnnYd9qMY2TWkyxPJjrjsk3GZGoA2oWZqWf7HxkUNAhkMiANLeTonpYW",
  "key28": "5Lq5D7sLokqVt5cMDTeWUWhJXNLF3HZPzeMFgV3Zbzmc5Zrf1PfNfH8BZFuBTkTMc2BesTux31tJmExLd24xpXba",
  "key29": "2Bzcfm4v31aPycbgVUJsarW81Vq2QnjdzmSvnc6piLDyQek9aZUtT8V518kyMGmuvw3wLDy2SJDACWJGJCrSB2w9",
  "key30": "4RsaH6caJKbrJa2uzFk3wRCGxi96G5Ymjov9wDXsoA7Sue7p4qyidj5XpmUeYTfAnRh7L4opQJXPCNRgnhG6kmE8",
  "key31": "KxXkfS7KjSLtMrSQMa3HJH9CVw7uX6daZmqvZb37Xc4ybSVhiNzLwhMX9eTexpuU1hKWWoN8JeDjxkzkkXiuF84",
  "key32": "ptDK7fRem84YnmwrGvw8W7teUzVK7xHgPn2i3f5BdMRaQVJ9zZVnoUTPDNHKXi6SvspgrtPpVNf4mD6JY4Wa9hi",
  "key33": "27HgfC1MiYUuBhbEh9zD2GaT7hEbbPqKvKwDM94PLr2a8fSVHBcSdR9Wy2JgVkQ9MoTNueCKEZ6Xfvd5mKquWf45",
  "key34": "2NGkgU3WXFe5dMhiwYHh43n5Uu1PM5mdDTeZXsF5QzgBHkUNWg8EhfSj6jW3sjHnCd1WPbwQ7pSsZC8J2VFiRtUb",
  "key35": "2CpU77YEDAb43duEQkKqQbtvugGDcLeU9LuUkuUzByVBQuBHiZsMWkdwxPwf7q6CMbWRyRmcCLAa3Gd6KrXTmqqV",
  "key36": "5fYKr7sVUuNn7hUGuiZSHhMJetGA7VGYqLMUqTXM83JsXobuN7bR2FgYQBUcREZWfnAmvVcNXFQbCL5ZZ58YLgti",
  "key37": "66zTTbjqxzZHrdfQM5oxN1Ks6xBYsAV8LqMmGaDU984UdZGJdM1nfZxFLV6bky7DgeT8dz9gRno4ta4yAqurTNNE",
  "key38": "2NQW6goAcjbAngsFZxs1wWGx6uCPrpSwtp29G9Fep1BTnWsMtsMMsTZSsZ4pHhhFGFrj9VVKH5NRKWeUj7XwEFfP"
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
