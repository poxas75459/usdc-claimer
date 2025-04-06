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
    "5BJQ4kQhknmphLXkPyhdnsmBpCVEwnVYhoBwcVNz7P65DmodFcBBq9TobiG3psNpBRdVRSU9WnweLT83WivLZMMP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2L2Y1L9A2y7ZxW3WYZgFviueAEDwe6QHGw3gb9DwHQ15Fs3t7VktWVStXEfPQj1QzW1e97nfpwYVG6fzESUafjK8",
  "key1": "3UkgpHYWBzvLcDpH6L5ZTw67dqCfTgUh2qzNTkAjsso78RPaCCFy9y8ZvPbV7zzcDfgvWZ38FVaCky5zs3Nt9Gkn",
  "key2": "5eCD3Qavvi8QULE5bcQZfPJKVjAFcesDPeCeo2WtCBUFddYYWDG7M8RJULosc22L1UDx8cEsg7KWJnpeoa9iYMCG",
  "key3": "5Bwf9KBPtnGHi2msjsEcYr1YYNXMe3u5EcjnU94hjp3qLukS8dyXg6iG2VycEshMmQRFehgE2CEXMvBmNobyjBFo",
  "key4": "kaV3HFxNNBKEwDy2Pqn8ZzfoZv2VR9dACfnZ9GtnSdPEf1f69g9KHqvU28f6nZv39grvSA7TpBnJtAncg79739f",
  "key5": "5oBxYxhP8z65nnURzy8WeamyTnYnfBDHrrpazriLn784B2pQMt4sRX3QkM3HebPQL2m8v9ji2pv5RVU9h8BumdVq",
  "key6": "MaFYCeVD7iTyt1wy9VGCrhFBpna8TomwLWHaWChqa41TRvoszTjK9hgGMz82oJp7RbnMHz4mhyRx5zkYosg5mqv",
  "key7": "2rQbFEX21yRgDgAKwcGgZfLamboyy7FZYs6f76f7ViPVP4bX1gmqXxd6HoJUKD2bj17cyFnjzcJyZmLiVGMn2PNL",
  "key8": "4t7xU5rj4asmAZ2uhuWecRZC4wk32PAttMUBCDzaocWxx118Jfrkyvf1UKxyd3CmZ5KthaUS3aDMgrSWBVKqzJJ1",
  "key9": "3bq5sATnh7KCfpQxSVPoofFvUfT8YGAgeXf7N6aZBgyqh77UEAPRb8Lfucu8vtBC9zcxUm5Twd3G6hfw5jzVbmJh",
  "key10": "5fn56RMqfxXDwTB6J2Ze5L9BJf11c76dr832ZxxuFDtYDxM86b4hc5qXU2nQsBdDqszBddxijfygoEi55Z5bor2g",
  "key11": "3WUdHiHgWYBfZygr54LX8TNZfvdgQTLaQzH9caBA3Tyf49aDu5ZmHArNHZCqKmScsd8VPRkXfdxEjunUxR4U4HEq",
  "key12": "2TN4dA5Mr8CSWUscPRC7yA2YPhHYpAxgZ4YNieNx8uS2D1ngLLShh1ovUgQSKEZvmNKRDHU94hX2w8xfFxURnK1L",
  "key13": "5EX3Uqc647cqNtcumaxDLpT4wC2tWjYNmprfhvGRMWZf81M14LMafWLUpqKvLjunhvYxdUC3ZGNb3PbawHPwaXQk",
  "key14": "223S3nS33qC9k9KaMJ7Y7YTw1TNvD5z9GqiXSsoUhFbuERFprGQeSmP2Zkv2nfbbAxANbaiQB91Bw7cPj3aRDP7g",
  "key15": "XLLep8yKgVNMVMHqN8Z8GQaQJcKJynRikP2ExTxc5LoraJJFKhpoArwDe2TTKJjmU24sisKex2nrBrsPHj3Wqw1",
  "key16": "55W4GdjQ4XGABn5JQCx6TYdVsNkgeoRfnXSy9GbfSPjU23pZ4KqmPznJqFju17osYafNzuoMqgUoxisTbMQ3hc8A",
  "key17": "mWRpoAhJpa17qmUsJLb3JdgjzLB39UPS1HTsnn3RZa25yoFVcaSJ8aPsff2x67RSAp3DtnHgDUEbqVTJtrgcB1w",
  "key18": "65WJRt86Jok2Rh4sLCHSDUBwBNUxc9PoNa8fyw1ns9YG5iVyHZ1T7J1dbV1254Wf1Ty1q18tqBoZU8gf7ZuR2raT",
  "key19": "5SPf37pxGB8a51V611QrjmLetAzXLrjt3HvSoY8YufNsL1gm5MoC77iCm8ncDXFcRBu3yVjV34KMKRwT7uynfq38",
  "key20": "2qspHBUyV16Rd93XDi5Lc6kgdSeJFgp8n9bL6WaHLCb2c2DhZjs6htybW6JastmCGFLC2UJsa72ghtSZ8TKfnuzJ",
  "key21": "2tibL74i9ubw5ukjXTmb8B9imDXzsPcaLAq2LpAmUbBjwjWsrm9emUzkYo9rKzeyrsbpUvifR2whNJfEDb3jzjcW",
  "key22": "5ZuPW1TrRXxgyJTUM89StGVPqX4H45JGVswC1YALKpKexqUSZJPkvyHUe7kNEo3qDageg3TnV9MbULetMUKQHhV5",
  "key23": "4b5TGy5Zdhz5AYG5gjMt22gvPh8xpZH8GEsZLMfDseqiqdPc6mF6tVUjRhFyHCZcLc7Bbm5j7zZgWnAL9Bspbs9D",
  "key24": "8jTDqupxyUD4hq9YmwxyYr6ei9Y9aTQBTJ5YNwjTzzZDUynhv2EMdCCGJQHnajnxF7ZcxWJP8ExuoPKABcCsenJ",
  "key25": "264dU6LBPxdmZCsBejYw3RP7Yx5ywu2UAmNsUp81a4zPok1FuacLvaicbSqEUKx4tbGkDZ61ixNVBLQdZVEKnPbc",
  "key26": "2FttKsXeXQvTwhsuXWa6BAGb7CxETm46QHPzuMRHU7H3GSQwmMbvp7zgPbQA67mT2bkmXNF7w1ugjsb6dqJoGF3G",
  "key27": "5K88hkop5emr79BDeoYHbjtg17ft3KtNY69thcj9fNoHUGBpyKx6EFwFXodSh5mrV633AqvXc5nRZCoNBBdcYC1u",
  "key28": "2BjvW3QQq71NLSZNoFnkuovoSBUtyVfmbK8oc384KKNP5y5cMHu4MdTuJX2Z3oPqXMRCCm3MtNErQuKJYzKgnPkq",
  "key29": "29xakeEuwxNhwRqA6w5rU4A9ohVhugqFTkJbqAkfg18qmhptXAdXZcAbREBUvY2rrtHUkaw2bhGR8xm5UUnerurJ",
  "key30": "4qfVT1AzreqyeXDEcQNVqYPL71qYEK42Yg234nuohHLQNfEnG2biMDe8YyoXrW7UBpFedQ9y8kNo5hkArMUQZXJA",
  "key31": "tMUYTLdvRYhZNqmFiJTJy2QPcQf1pBSeRFqibioNwX2UDU8EEot51cPZavSBjCsXTC1aKD33NjzBhAuzhbV1vwe",
  "key32": "2tS6ezRcD9YpMP7tgPrfRceYBYKpXK3yJ6fXvSmFqGCSfmT8Z8dZaXynZ7eJJPSrnx53nkK3AeRVfpEQpbDsAwXx",
  "key33": "P1PyYEqRnjqaefwn7TDTNVuZg6azdpbE4RkBG7HvD9otUPHLUujfA2QLf3fuLojmaayJYfcNG7rfF3KTiKAHG1u",
  "key34": "2GUtpTdk77F3pEboFKQtvizC2R3m4rqGoUaGVjXZiQJPVvaXTtJzpda58vytLgtQ7hnQ7u1UBfxPts2psA56J9jn",
  "key35": "d6DLrwxSkXU4zFRiZGPCGwYMEzjUZkJdPLDFP4PVRNzF3kcZ7SMoAuqJJAGCKfGRM2tgPyoZRLZQqzUaBfa1khy",
  "key36": "4YLiYiSpUzqho13YWpczA4vjUjVbZfXsyU42bAfvPH2dx7Ca7o5saLfcLMm84p8XQLmx6wijNTpsFndcWJ7bdQKx",
  "key37": "4e9fVwUTtphsAmN54HJujS7RAjjjYkxrjEUHmHntKwvCYV3tTiTfu2efyVikEFcnvZ4aMt3rgJVzHBd2JXnCiPTb",
  "key38": "23J67JbngyvdigX6wMWTvms71iw78Lg27VbUy2KeRFsyqtGP2KgLWwXSZJ3mr8pduZSJeYcgG8i31cRVA7PXZQLH",
  "key39": "437edqjZazc46BVr7gVkChubGywj43pAZFaPcw4azb1Y6yMt3pgkgF2iwdb3dpc2AqPxBY3HUDa6kZruCCMZM5gF",
  "key40": "4cVjEY8TtBtUBndb6t2vUWmxtjZi65iY2TyrAVASyURrTdraa5KmUAAvC87cZyG4dEoMpUejMUthMjYHchSXNxnM",
  "key41": "4PU9fFKQ6guC7NB5h7f5vPUxRr3nL9VnSxAuFU5bZucHbkq9Y9twsyWBLj92BBcCrHezkqvj8vuH15qMwsPrewLn",
  "key42": "3B8hWrtvU26Lxy8zQSmMqxp4MyQ9HNdvwdxYgXmKJhzkDbWr77oSivbvT195UNpdNpYvT235fahrhZY7TMV18vVb",
  "key43": "63JdREdDKwZYY7QMQ5y36xm6v4JPL7qAQtqDPVWSpiq2x2aFMRj9XtrKaSHBuJuTkSx3zMQgxmor8ENHhPADqEAb",
  "key44": "49dp7Vs7TXAjr3P1Ysco1q3544f62NqcS3qHGHuLrDfzbveJRNAvWJdgDQCpzdqTPhYVCwEw3LBBCLPRaVVXd8Ra"
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
