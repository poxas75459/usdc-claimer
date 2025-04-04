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
    "4MfP6epiG6qT9mU3XrNiCbP6wtXXBRwetUFwakkyjSZvuMfVFyzYhiGjMewH86NbHzWkTrTdc26fk9jKfcZUaNDJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jnmS5M5scK6aBLw7Lp4yJmopjfUJt6xhcYpov1nhEkpsH5zwHW5Wgd47fCQDB7GS2xF1aDzRMSk7RRxQQdK2K3n",
  "key1": "ioKhDF1t6HLNNeofKNoK1xcf4TUQTYC7fAhTGqWX1V7it9dHiJuDm1QyPzUSKaCMUPkFdhNLnc5itktmVSwF2DG",
  "key2": "4YrzAGPdAReinpt4wtmZpmHo7xsCmJdNiYJkjmwW8hzUtucBQ3diFvGDbD6PJzQbeiPFnwHtfv1sGXu69ExcbBZD",
  "key3": "2VfTqqqGkFB5gVuWzeK2xH6Vs9HngLKrHhjfhn2ZZ6btz1QPdYA7jb7oeGsNhbg7FriLVNnKDJJZfiV5WxmY3KyX",
  "key4": "3Gu6oiSJ1HhTqvjB8xvTfPwAdfY8hFSuGxi688tiTMByPiKtBqP3z4d8myogSvkemjrv39KoRUqbTDmAk9nSkWM9",
  "key5": "5qjXJ3AMYMh3JaGqYUsQ1T5RFJYhvPeZpQ58t1qiY4WxN3uwrFNzKTgb5NWHmixghcNt2qXPdoU6U4hbMveJjYvq",
  "key6": "2ZHPax16XidtrYgnKfUZTpnSdYiBBxA5YYMNw7WpP2T8eRNxCJxSb1W1yYcXQGKf5QRk1KS8NSP4WpKj56fBWWrs",
  "key7": "44F6cSkCUxMD9gKxHbimXDCSsAZvJjHELt72vM6Dy1ueuYU4gcR83PGQLa3kZRc2XgHQdhy8TvKrLHzfK4P3Phvu",
  "key8": "51RhqN3xPzz2qbkbAYnvUfjS3WTJGBM3ug94Lfn9QTUBGafezEgTiY3mCwhcSs1o9abxKHQeFdiKkdLSB7RotEwb",
  "key9": "Wk76VggJ7hjovqtTkhziZnwkgCh4EMUCWs1xpAikNT11JLHV1m4VDzoAT2CvkT3cwNs9WPXMnUPNHUb73tVnabv",
  "key10": "3cwWTDEytQAJ14xRcvFSCyjWb8DCj2cXWtxdHvDxZ82momQoNxDnQ35yCsYnYaftVwwaPCaVvYS31gJX78GTM7Ny",
  "key11": "2A95rnCTEL4A8ASTJUhAyGiB4HA2QHHuyKCCG4JPssXRhnDxdEhGk5n2bCCHQ6x9fqoDRuQXAixxLjshyHPdEG8a",
  "key12": "44hmhH3w7aWvhFER1FSMtvaf5igduGz8ipVP6SfvPCYEfD5miefKtAmp9Jmq8QUjnKtCyqeUtfcFfx7hgnL3Wdvp",
  "key13": "5XNpsKGhwVH7hZzXY3RMqjTPgCP8Ypy3YDKFem6EMJrK5MeJ2wmds5x1pAquMpwUtnuca2c9sqPyPv6KJ9nd2i7y",
  "key14": "4BbGogsoKdTAHWaazEJ8h1Psukkn3F77afmcjBmQUWh2563ixH4ZrFDKGzLDs3t9CqwAzuwwNRTRRrTgwFm3Y4QX",
  "key15": "5QUvKjCzJa2kZUqVPukESWpUkZMcniE4bPiMYTPpvoDp1BRLsBG5p13ALf3ZBdogVKtoaqJSo2XFsxW78XCyzQM9",
  "key16": "34etggewynhC8M4eq56W3Trkzjr5JLCNFjULJPktiUD8R93eyRqzMKNvAp6ZaQYpZ4c2CAYcm5KwiXQoeS1rkStu",
  "key17": "3H2pnQHUAHV9PsQBP7hfUmPywTRDfEvsuzkHJkwB9iwNw1DzRwHxAkPaRzvHL9qHScPu533YosPYbfM5GVXLeUnU",
  "key18": "XZ5ms81EynwDdWGSqmRwdcva7gCsRqG5gA7pNeM1wgwBT6Zw9puYue6hmvuhaZrL2CxiSvNwQFqWTJGZkVkGgnJ",
  "key19": "5VRkcaTy9Xqey6zjxFYJMbMC588DnWJZBMmopVqi9x7CLUjfyWyiYFYU9dvWaciG6J3xX7bZyD9YfLjspLMu2q5j",
  "key20": "3aGob1gFGPU6pKaev779KUvD3k9VBE8R19ntGJDvfgqse2mLJ7He7pXv6VJiRaX11rxS3FNf64TvELMbpD1LMRrZ",
  "key21": "4vAmipNrtHG2AAHDqRrU1nerTcydcDHQeqtKuP7gspVW9CDDmmAdj2DZvYu3rpfD7VaCVmNcRh9Aemb6PFDGYU7W",
  "key22": "66SXVtUBgTwDUXWpSMBKNDsQtiDSuWB1HSn3QNdG8smFGfP9qdtjaRswiUFnFDY8vohWBezzeUSu9eM7c1VKd5J3",
  "key23": "3fiNGUo9w5kcNZmCeFJ8QFKzdueuHGZg3bbv2uP2ACMT69rcu2tqDCwEaViB5hZ1r2y2xzDun2jbRkW7UT6qQb1j",
  "key24": "5dzfkgcjmTvgSsvBBLjEi8U4yeEzXB4aJbHqLntviQHtkE8NHqwqKSfskwzcEdSRwzg6FCTzUsWWBkdF3DN1EUjg",
  "key25": "5DrsNiuBsm9zc3reoyM6LLWnuS2FKUzr8UgBY7QeLd2VCgYN2FPDHohbBuj4qRoscJQWmgfjLwTmBURog9YP7asL",
  "key26": "2fvF6xptBVJBMAdxETUer3qgYcthUBmHZjnavVXLEPuWQET8uUAFHf2HZBj1tJ8ErX2EimwGfjNtJmUhY5Gcu3N8",
  "key27": "5kqEYV1kQx5mXygeLvsCshNsqthJTwMU6CiDgnCXLvRoEHLhDwUzt5JJZYXcmMmRcuYuYXXh54k9QeVShKrSKc5d",
  "key28": "27jw2mVEpoDFphpzNjFGtw5wSS7Q8zLyYj3hZ3qtTajxELVqucWMShmLrZH7iVsMGmpsNdryN8TwURXce6CoTTEJ",
  "key29": "4iCUpZ5mWe7hCUj1wSV3ggzLQtez7dy91LMD8ZzLFFTdG3kVoC9AqqDGsNpSzFAjheFsws2RLu8MXC9Yd4dyjBGv",
  "key30": "2iLmn4g5uKKXyPMhsq7hGhzMuUHFwALnvQjcAD96v8gAjvWWpWX1w9ibQRRQKNGksYaSpHPfgJHnFoqjjowJSVyP",
  "key31": "577ZS1QURBPy1xJ5tXLYY6CpDQP3R7ANEYd4TZF5L7etrQwRerGeKTCknZvF4ENyPpoyDT7tNUKK9JnWjifW2iSC",
  "key32": "4jXax46UDzkk4tMtyYwUEtV5ForjtJyNv26qYLjudxbBat6L98wLbJg3vRJanzk4M6nW9jXVfgfZixHSggYbhZBD",
  "key33": "5u5kykWt2Hf5zu5bTSS7MDgLRRvxy5XBC7ziNF7jZXWHXmLR2FR9uQJ3gMwsF5mgpwqodrCE9UG6KNf6QeBk5Efw",
  "key34": "67oV7EXuHPvPpYPby5DXu6QGPBrX67zBTNQhQ1bCDA37aK7WXDVWJ7KvKTakN9MPWwYvzRPFm6dJWZsFmrSxmcAv",
  "key35": "3pppH3EQ4dfZMUPW8nbqjVGpKCzqwzKqYXF5AtpD2jVyxY7mut2PxShn5Lrr3s2QukwbbtJFzodyDXM5AQamyQKm",
  "key36": "36pKLB1dMV8J2FnvVica8yu8BxrSTJuoW6waYtft6T93EFTyraooxd4JeGUQ69Ep47Vi9KCrDaPKP5djNNeTUrNb",
  "key37": "556nQzNR2nSuKTgdV35sV4Ntr6bxffQg5xXop4ntoccLaFfwfeCepYCwMQdp8b7dWFG1m7etQY4pVhT3qHXHDDey",
  "key38": "5cs4LNZ4WwjrELsCPi8nhQGxeFPCVP88naioZCTHPpi8ZW2MF6xE3nQYQ61M7aqA2Xv5HyqH5bFVeHzy6jzokTsg",
  "key39": "3c78EYRpd6aWnpDummkhcRZ5acaS279q1gj4qHKPnabQYSGYwpvCNdAhiaL5JmfhXBgy47wf5E2vipQfaUV5gK5R",
  "key40": "3VdFt3P1VAP4Jc7YVMgqTKFqLUiVQJQbZz9a5MUnGuNearz6xoxFzjQ6a9Fikf5XZRBaYBweGQMmYdGmyxDnQvXG",
  "key41": "55GHYq41pEcwdMhkNk2UFx8nJtXWUtopQQR6wJkiadMieNoVQLknRMKAUuZiY3uTc5bsCH53XXADxNRiEqrUemwg",
  "key42": "M2pnxhZJ3M5kzf8Qwb9ncAuVSR3M6FRmy9pq7wL7BLHmc59ixH2fE7bxqcM8CtQVgA4aioqWoDFJm4er644sU5N",
  "key43": "2yPdeVF125D4uEiwpTqRMib8A4NRCF9STNzk9k2qL8WcD6uiUfLUodm7YsFCEYB7QPpVqbZ6GehKN3CSArtH8UXP"
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
