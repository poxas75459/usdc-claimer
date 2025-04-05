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
    "XRz8jP8HfSGdJHLZeJJucgasNGiwy8g9PL9Njd1zFirRVRiT1gA9ZavW8tkk6Bw4sybyrAZLtwpq5fBk6nbPm2G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4hZNWqivLXf4kEUs68hJtdQU7vofodT221Phy5weM3udvDB4ProPu4ng25PokLAcPYUTdAYUbMTHiSHWumZvvanC",
  "key1": "2yxPfV7vvaqUuL91UVobqe9WBp6RxpT9FQPrKXNqBqF9U5oGUnMvNHSfKiHTRAQUe3dEXWUiuRmgmm5ZNTuDS6j8",
  "key2": "4f8ta9oaa8vTMZ9XE9Nj5jhzPSH87L8gd3xvVaFvAdmgb6L1n66A32botvRZBad6fW6xZSSJEvCQamwpKuPWsYn9",
  "key3": "4bg3wug4iT9X5wVyiPZLMWop5RJaf3e583mkB2K3568je8TunaHEKjDMAeW6HLgKbKb6au4nWu4AJqnNxjHgF91c",
  "key4": "8776bRyULoTgt2hUvAQYKwwaLrXZBST1qViXiWAQxBZH9HXK9NkTus5rD9J5QqT3TGQ2SNbebFM78LVPUuF3oD3",
  "key5": "4oURecLz6GhHN2FGcNEGtqr15eKag5gaGAMLsjXVsBEuXTJgka2WjnrfoXnQeMsHjutvsafuMp48NAqiwsPuJxrP",
  "key6": "EyQ8ioBdYPamTk9mCaCCns9DtBrSueau828Q2HunbzbSaBHZeQ6MKBbDsj59rgeaMZzfawiYWkMNQzrusLSCf2L",
  "key7": "orPm48DTe7XnRwnLNGprmdh5zipvMHzFHNU13XpcSEcQvPi18FfG66zzuPbKvaiND6KqPpVL6fM7d7e8q9kPu18",
  "key8": "2PmFSuTxvGsgFk9tyhgn3kZd3PbVQghNpBRkHFKzCUrVP4WAjyM3EBw8zsYmgEn7HZRyFTEeeUn121BxM4657JqM",
  "key9": "4BtMsTQ3FZ2oXJFHctD3VaowgcUqUvC5GNJ1wtufrB774ZibLCWJXsrZEcypPGxdtTCUohnwVZEf8iKPYkxXmqrL",
  "key10": "2PohTYxgFcEP7j6sSFh6HyvevUhzoieTTaPXQPmP3zLqWnGvDRxDWuytB7rH2jxUBspXoyRbFw381RYafWG3NBuH",
  "key11": "5cUwGZnwo2ZVXfj2KDcNZfohqdAAQzfo4QbDMszztsy3AmdqDxygd4ZpFb9QBKTK46yq6GjnJcbmNvZ43cnozFBg",
  "key12": "3JAsZ7vyuknnbCrZh3cFM6HVmTQkaiQku43QSLAm3hyaNDnMYKTPf48ZVCCCL4HtQinEiDqWMjwxzXk7TdwDexZa",
  "key13": "3sqiUXNZMSnG21qgiCF4KJ4wiL3j8VREgzot1wwmbHpwXMLg4jhCwCS3nS4TGHp2XAhBgCR6xzd1fBXFT7cBSVws",
  "key14": "SBLerSsAmxf4XeMzMiPVQqazLSMi8mK9VkojfzZgQ2VN96Uqrus55mVkDUonEBwaehg3bPKaPzcoxUjkrRcF94u",
  "key15": "yGP7t2MzpQgY6qWDLiTnbzKgfxXAEnjeshjmz4bRz6PJX3zJfrbVedKNCiqmscjVSozPfhoRCivzpEoukN5AcL7",
  "key16": "zWesbzS38GevzcaL6qdprjUPNEEdbV5k1xPeoZsYJzcC6P8TSq3Bp7qgwaSAxoDBX2ojGgzxDU8pAEweNdvmC1g",
  "key17": "5LMm8B4hYieEJzWM5Y4DTh1oRMGWNSqKX61ZJdgQj1bPgeX4b3hv8wvFgFqqetTEJUbUz3bD1Tx5giFPjzuS9cda",
  "key18": "3utF7E59wdK4cixf9iuDLjFRsgL7frsWxDcspRa3VSoUVj5KmGpVoKLAqjjWmfh995r8pfXvPgeuN7cDxZAM8DzX",
  "key19": "kecRGjfwXnq7RBPWKMRc82CJ1JkBmQDhc1QnhGvBUT2jUVoFiaFQiwC3bAF5ck85Cs227pF7LCrkoKbCscU9NAj",
  "key20": "4TiVwFY8pDxuotBMBt51r2dFZ4Lj661bHgFkvuubYFcR8MTCeGhqi96qX23v5dxd5KFJGcdBLxZtk8iridGGrrJF",
  "key21": "Qx1sTyJK7Cn8RyR1EGkVWJrfmajDJhvA5hmwhLa5FkshjtxqWs7UV1Vg2bzViuDDqcoA9Jts5yqhZoHq95z3NaV",
  "key22": "32RP2LkXMYen4Zj4Hm5NXmCNqGAUZL7Fd2BhkjgriLQc5ncgJDKcAeBgopRRLdoDryDfdVBrcUr7s3UiaRzk3HZJ",
  "key23": "67RyuqCaQ3B54FLh2aaxELsgnAo5AVDKSLxQxQ7jE4wSfuGQHLCMq1jWVt5jNbeNDTPZpZ7Lrhpk7w6f79yGu9hA",
  "key24": "3k8sprUfoHuUPhVV7swKZ7Y14maP7a53XtgZRaC3sLws9Vkq3HxhonoX7tx8go4LcHSJdBiLNBfkiMMYLpX6J8hS",
  "key25": "ENhZ1QJuPL3DXHX2NDtJZNwGLwWTPjbhfTg9eTi6Nw8Agtacf8BL46UpPPB1ZoxxPzXwm9dG4L1ufD8G5W86pY5",
  "key26": "2NvznD9xnjhUqDHQbvCWfaANysThk5HCLqSyFjck3W4bB4wGB9hCz3xiZ1xsHtwDcHTQXSBgwQyu8aRrrb6A8fUa",
  "key27": "2KipegvLorB2SUhHpU78afrFabkrHCZ59CJs6DALvQTqKkJLxqHYx3ZSm5x2Ndk41eb9t2nvPwFxeaLvFk5fKky8",
  "key28": "vz9amCgvYk2KxME68qt1WqVr5jufQa5PkJynjbsBAqdiugLPbGG5j8PKKMRmXXZe1ZXwmbNovJbsFKRSRMnazU8",
  "key29": "KtTRWnhyi82jQvpF29mdWYbC8GgiihT6MozEf6UoMp3cCyxuXbN2qRYSEYpbxBDBtD9VF8tcyCvYVYjkWQhY95s",
  "key30": "2cxwi4jFpe6fdUUztfLoKzHfTJRLL2mgjX1MEgn27GBaJ2z8GDJvuQnBCVsKe96ZiiMqSX2LhsdJ8UfoQW7BQ93u",
  "key31": "2RdLtMD758c46a8knGWBoyiLdQvdPZfvBKNfoWBcHE7jDaMz9cRy1vAwKV4sekX6559nVthD7ATXWXtgA88VK5zi",
  "key32": "5RubRd7XAutQgZEBcQQeUBKyYkhSCKGEL8hCbHxPXK9ppVUC5H5CUrbQZ9XxHJ68uRcvcS5HZsHx81rXE7vVDbSU",
  "key33": "35wMp6XGg39K1wpXzrELPNsyM3DRikfzsroZYFxns7QVjN5c3mqADy7kQ34A4MkJhD8vQMyU6R7C9wLURrMqMUnn",
  "key34": "JpVtC7FrvRZPCrFxWSBGkbjR1qdTYs9KFJJDB1tVsttR4Hkh7tsg3kycaDwJpDMmndQxuCr4ej88rCWJkkmDTBJ",
  "key35": "24x4ruCogZGfg2gMsa6z8YXPKtgYmjxkyEZHCkktoeeLFysogD7PBYEiHKFyjsszHDdaA95EnbxvUYtfQ9ApY1B8",
  "key36": "Khp2CMov2HmyFTovMPS3zDkb8FA5pw7QiVVe2KJubjfr6iKcRkZheiQtNaR9koNASrufGtC3e8xCznxjXaxczGq",
  "key37": "5jnJe27n3Ji2wfMDBk9o7VpVnMaM1kWi9yRsXkr6meMSGHNyVuttGFC8uerAtpowvzFPNDTpmqj8gFAxtHQ2dvmE",
  "key38": "2VAUoLdZ7jMPeQxAj839ihubK2RjrB7JMRb82bvV9p8drGgBWV2ZYXWR3MHV9kQjWqwa5mLSe5f4FkAyZBA3UaXm"
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
