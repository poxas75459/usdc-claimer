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
    "2QmnxSAwhMwQTzjiZz2mXY1tUxuQhBc98YeQedKmvz4CLshMhJCypxXDG8xjpuNnK5UcXndM1z2QKbMz5Jrb1uvW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4e6aAJf9AQDLgRyhaU3KQ3XjQqnSQrPGUchCV7t4nY5TAnD96wjUt12sdduwYw6cYx5p4gF6mwqjygrMSajP6cUP",
  "key1": "U6nQVehpiJjrkCXrYuhZJAZtSAmxoqmpuS8dTYJG6szaeyUy59BrrL2M1W2GpZMDPhUKubtmXtvNkAp1PgUBnqP",
  "key2": "2eJvXtoUVpKXd3FpDn7BaaiAJ6sFncjsxwdjWzzPNk5HHQ6Vr8fbZKj95BehqUqtnwZdVP3eH756NahbyvGR6gYg",
  "key3": "2FUwxoAtV8LEyLXNMbaxNif7y8i9fDSTTRXYURzaAPoGX1UAYEXMrtjNXj9J7QguoGWxGLfnSDsyiRdyR7pRzq14",
  "key4": "41PYsy4AJCExPbfLzNkx9DXT7LwJjWQU2sEMdfuXHQ1rQoALG8ofihqiazXyyFWx5sWid93vweWibM9gJ92KYmgV",
  "key5": "2MB2fsponAg3Cpu7RGSFYiZa8T7V3dwMi5AZjk8HpmhqBJxcwZmYkXU423ddyqWtkyqDqF1zcFd6sP9UuAx99tJq",
  "key6": "2KjHuDJZgFC3EKUdVUzUuLRjFAgtLomGbnymtv5AodCbr99D59TUciZz8j4tzQer3VtdEevDTxdaf5aTgfPuztvu",
  "key7": "2o5SGZDBHxZkgW5gdJowFveHAAHQxrPobk2DzqGKT6nUuWCKsoSg11Z8PXmqzKTZzkFd9fsxLAx9xmWkGzTx1mry",
  "key8": "47bWvgkqUuuS88jjTN5z1YqD5DEYA14yGSYrMcqahwUVrHcA6w4rRhFGL3YsTqbKTsuyy1PjeQaQp1uA9yiGe7wT",
  "key9": "5c6E8Y8DUx2pGNxY38TNR5eYU6WsUZZa4EPipt87MhtfL9uPavRefpMacCed6KqkqxdyvDKgm3qF2EfPe2nPKRUW",
  "key10": "3AmvAq6qz3dRrS7m13EW2EFXnJs9dqMgpbD7kyYUMvRQKMyoQFQetmjhXDjMu3RVx5Pw7q22fLV5o1efzRzakKwH",
  "key11": "4WGJMUF5ADJivTw3UPxNnUcFPFAZ9inZwen2DfrhtfBPR3fHcGEowpaxc3mseF1iR4iMTPFNyimPhZ7bze5k1tj7",
  "key12": "63vX92fRbGja9yT8GZExJvwCBWeqh9pkNVgzw5mZ9LR9mevrvHX4ugUunzwj6hzETJcQsnaBNBa6ekf98Yzpcd2b",
  "key13": "4YpdP9f3nrzT2fYBevtXR19PPwiYP2pe2sJkyux5XxKLko9ox3xVFz9rPT43Kay6oNyQbVA1T4EYo9bofdnW5az9",
  "key14": "3k1GSn6d1W9VkmWwM7wMvFjL4ZrUbkXkBFAfuk5UfmspUubBbAZmj2BpTbL7EKrhfx5t3Jxfdfnj1qR6VbBQx7sa",
  "key15": "5MRniq2JPnpZPUZ3faXMGZnTVFQcQAvNbxnHMBwLvyPySenwr5vVP19Jkfjsq4VhaigFNb54FVPvVQFopuRuWq7g",
  "key16": "2CitAFHJRNhR49S1RuUdP1bdbaUnEpw3F5YcJnrMWDRNmdyQiivBSw37S6cMCLsnzDziFdmuSSoeVTw12VcZB7i2",
  "key17": "4Fgi6xsFtRiEjyFa2JnBLgJLUXDzy1ReJGvMSuBsneqZEjbM4tqAKosDHMy5NuGdgLnR5SXCxFRxy9Pc1Pjq78K9",
  "key18": "3rCZeT19fJHSv6tL7uv1zVHsU3dZZiuu3gy8PGuPUXJpHpP6z4FDTncWcQ7xX7ZPuE1dN56Y1vm4HqqFAPXwhWoD",
  "key19": "4vu8HQAZANeHhdoMSnqent6X6mqGpJAsiwEhHvnNknBA5U9CpFpiEMcyxEzLG56JnFk2njFB1rxHveEQoyQYsWxY",
  "key20": "5Z3N8RpHkAoGiVcuorbjMdH1cMxE7bM8g3ojG14qmo86FQvfZWdNmifPXvKga68WwRnY9VGCZ4wpYWLoecurPpVp",
  "key21": "MVutskdHzftC1iefnapJBHfMpcgfAErdr3xoknTz7Qbm7ToekXP3ihbHfw9Q99qwYVxy7bXLmMZC2xrr7rtofwj",
  "key22": "VTDLfTAEnLeUAH78F9f7z2FFa4qdSciJtbQGiqk3H9im2gPjTnpzDqAiTiX8s5bcdnXryrR5seaLULgWxPRUW8x",
  "key23": "5gVq8jMV2TLxuPHE45D34SPo2W6p58mqvN9JNQRPqWq6YM22RgUcivAc1aeP6LmX9xuhAouzBUV8UHVYy793bsv1",
  "key24": "3GxnGAeXwceWhVqgw97FtXUhqnkKDPiRKFL8RLw6pdSRYnbyTk2tPfQqAWq1xKZi3KpTHDcCAvSzh4ghAwvTxbVR",
  "key25": "4R9mtpob1AcobH2pZRp7FbUySnXojVc7BEPpt8KkcaveeNAzsJdAmUTFs1msA3wketkGkrR2DkFzfnoCxZ3Virm2",
  "key26": "45YJf5hfn7h6mxbLzMD5J6RVZFJo11Wbz2WUmg1Bg8ZcpcxDjdeyJJxavGGwQQBbEbg557eXt8SE8eFushmkdxzp",
  "key27": "5MBzW1KgVCMQt49FFnuAYx18zrdQgxjBnMPwUtkMbqgZvgpvkXZBjHjGmRwpb59LnabDsfCYoxYYCWFL5Ec3mPC6",
  "key28": "4xeWjvv5sYMf979ojE3cR6M9UnrouAqrRTsWDjx76RdvLy9caSgeFKHRhBPTjhg41fqsYkYqTWJdUETPCfPXSaVP",
  "key29": "qW943zg9LNw2jP4zriHp4kGbPokL274NF2ghGD4t8chBaB1GQVBhKKP4a9BBKovBur4QEymat8szCL9TPUmxZFg",
  "key30": "3feRLjThMmsqaZdNGyuhPHaw5PaLcWf1RKkbk2NLoUYPr4mnrmJBXgGUdEyzi5KdvBgWxi9LrZsqyaNqeY28ZH3J",
  "key31": "59pMMGENM1rXN4tdWpo6oqup4HAiHrCaG8XGHhtHooE3MNW7CUQouQhaTQYXSb7XZt2mT5gKV1AYKMaYJx8LCEK2",
  "key32": "36C8eAGTUMYPZZzMySuuYfhFHHUgg7NohjWai3G7nL5qRyLFLFChp6xLF5VkbFgRefMP8297nY89MsFKpkmSihjb",
  "key33": "2cPUiezvyjWGTPtu42DFL1F9NAmz5GEGif4G1mrrK6XM1jVE3xCadG1o5dvpPMwUpzoRUtFY4GkMS3nXutsSA41Q",
  "key34": "2g8HJCeCmzxgQCH1UTExmNSX9vNYdVcyhjeRs8qQAHrPUT7XtrnjVmoiDtb8TsnFfPWfrK7xjQFkXBYaR9BA7Nhs",
  "key35": "S5qe9RVtmpHiXW33y5v23g3MFwGmAg9B6eQrYySBUAQAT1x3iUTPRBJqjqvJpi1dZo1sPE9zxQVaNoVxyJBzdck",
  "key36": "44sRnPnn5LxL4WsuqhC7PyJFWBmh8LrVMzsKczezSDz6jLWvWHmPs17K9sb5Qrjm7LipjmVRftGzrbsdcvGTchji",
  "key37": "4yfy9v2HtWrSQdKF9cDYmadtunaPgDVLWcJHu7DCj388y4SSbX967ACSWY1MZRNV5ZbhHtGaafKMCAgqYY6Sp9TY",
  "key38": "3Hd3ggxSjnv7ht6d25fsDdKUhotRkVGy3UTsLzCk4vvZk7iWi1XgHvGsj1sJxMPLbCLFmYdj7ztyjSVJ4LK2ouU4",
  "key39": "4ruCJNEMHqpZLDc36tP7JjGzUWJVVsxQo6AuLCgjknkrMpWvicBEFCDWCuaAknhm2MUHxi1C7wKFJsCc5rF4ET1m"
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
