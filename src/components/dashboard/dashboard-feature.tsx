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
    "4PKVVZ1iLVivUqv34juHN4zw2sU421jfp8N4SrknLE1YczngUsgb4KCcVUZ7t21N7gpzPKVC3WJCuFZgKXEroKy4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "kBXFTCyCRvW8eKHWvaCVEgFBDBvkKu5U4gXxqXxHFLrQBzd5z8Q2sT3ofEcHgTZt7fioU2zhamZHtsWb5q9nggP",
  "key1": "Gkffmc5cF1PPFfqr5ybdPb2MZ2KuJcBLXFFg5RGR2tJR9yVGvqauRaqGouqgtaZVKJGG5MnGvrSjJotNZY1D4sH",
  "key2": "CBgGhoNhcz3htSACZi4LSrkhao2sdU1GgbmbUwwHwEr5KtfomjkgpukPmSHM5EdPFidSsdRDF9fYbh1vH1ieiB9",
  "key3": "5zc5hzvBscWtmP883KjYQxnKkxEqcsMAhEz2MNBJQFnm6aBTssjkK5poNG2mf9KejudmNrBXb4EMK1VtuhgxWCL5",
  "key4": "4P4B9es2f5ZYDSgodHG2jmhdYeZT6otWCrgRGURWMRhepJcvjjA3ySVNXkdpVAcLkGApWYXgQsNWTM67jARrre8n",
  "key5": "4sMk9toSoidhdJgmPyQyWT3sZNVXNBpB1Gzz5oWXdMART7yxohPQWgLEnKAdb4DR1ygmgkJcPWUHbkLTHK43sqoX",
  "key6": "2LEgeySuXcNnMQVPfYDVPGEZ5AJLF294nFCn33X7hAdk8PMj3KV9fvpmzbJiazBwBsEgEC5Tit2fMBYWLNPry4t7",
  "key7": "2GwdRq4asw35RFPDGPwDKJS5n5b15kRHt3EgcSEfM43r7PSjHjGLiX8Bad9pPjLUpJSXHRkbRFufKkmzjLsJwxMe",
  "key8": "587zrcHPwwWpRJNVQCzosComKMXbHXxXC5guEo8iXEBNfshnwmc5noiWbHMsX84sCAqXfg8PezEM94KFJnkHBw5W",
  "key9": "2D9vTAhVgJ5dM17e9tXpuVqNgkb41wkh5ySuYT119ARK3sYdzCCnAXepSVPWPNJJztNK9LHhFXad5bgya7J7CCzN",
  "key10": "YcrPiUUeXikWCZn7JXHZdBUSQrAxhRMqnxfz1zQNjE1GtrD1qqTNoYbD3G2CRXP3UbLJNRQM2yvXuVwywdSQoc3",
  "key11": "5ipvyVFXZgepx3KajrbYLyndWEP32R15b7vHb88v31vk73K7Av6gvKsyfoH48xL7GMF47e3PTChHpnRZF2uKwB9E",
  "key12": "4DuS6MpryAtBGMQ6cLULjiL6DybJkgiAZzTYuYegB949uMJJVnMXuzHG8PnhBNbcABKqfYsrzEFjLMrs2dCLEPWQ",
  "key13": "5gjGdXA6dKMaQTBKYJMJ645kM16uuuJVKshTqWCfgeLym45jP7pzaS4PF5WpiHiXMxVtEgGph6gwMYxgVNwHVvux",
  "key14": "3Z3CxAivspoLK2oV3nHPNJRW5N7q7uMsuh4zeqvnQJg1e3iHyBUfHSFJDbnD7z69mJugSZCedoHxeWR4x1cBi5cw",
  "key15": "3Dph4rmDBQwTGhoZgxsqMnydae6HRUohDkrY3w5MR678ZCZ4iAGaKBUAjtaV4GfEPyjLecAK4dsMD22seLiwTW6E",
  "key16": "AX7LWMTTWE1gJe1M1WBpL2oAcV7rHKKpTe1NnWyi5JN2gJoGBScpBH17xHMcGfXsoyh8mHUZkTLijDo62vtEGpm",
  "key17": "5Edu4DUL22NmrAN1SX9a5zHszKJdh5rcTfvdNpo2aURoUV9SAVkYwjKtvMW4PWDja6JaJVtpas39HrAvK7z2cgd2",
  "key18": "28RQJqSXiF9caq3vixsQfkyPCqZ9n3Pz45i3AP97uQ6e1fn7PYp7tg1r3Cet1jgntU9dSGgFdx2XkpqYbD2rKHhL",
  "key19": "LCNU1zqYqw7GKFycsfQZRSkkd8nAHmkXT5xFGsbwHYjK1ENcSt67LUgK6XPugjWDf7aaEBs3k2jHpGZz1nbu9Dd",
  "key20": "5hBxf1Fz54JH5LDadXxbGsPC92rYvNckSC7ekYFGJq9oC7bRGGJUJVQMnmsVGjwx7LWtzoSW3Hfk5zoqt6pk3HJ9",
  "key21": "3oEWrAo5QVu2iUjtr6ki3gv1qSFQ8WnT8dEY4wYqfxJftT1uky9wedxVdwFnBDBftT3Ls86VqiooQ9mBxiSintHq",
  "key22": "4dvqr1zAbUDn4DqwoPKCd6x99udARmecRN1BHEg2sLqQnP6HcyTfbKvwiihsqfE3XzY91CLQbv2C681Ewc1gZpR3",
  "key23": "C75LghQwT1b7kEMiW3NCqKAwbven1qcsMJG8Dp8WpY3hqbps6o6YavJjFDgbQEC4PcmFs5dT9nuQWHS9vpMevbu",
  "key24": "WbKQGjXZtM5XyT8zVLCFcXmpkw9BJX1Mz8AEB4KpXNae7XzfTif5C177EwxJdYYnidfaMYokHUy8p8NEQNJe1Nt",
  "key25": "R5711YagscTHxYCLLZapWzPkzPtQjYV99DrDHe4pX7m89yf6zgy9PHcC4AkuoU352fFWdtx5dMVCVtghsUryjPo",
  "key26": "2mB8FPFCPJjXzaAXtNwk7aSXeygndKZy4mygYe5KhUkBzKBT3aqQ2fMurQu9mbZ31Qj9kFcQoB9cUnhq6a5ybhvx",
  "key27": "4ztvno8jGS9FjX81SdaYGHnRDYMGK7ZAJUXLntCqX4ANBV69QVPmdtUkxMtYN6qUcGPgvawP68NyMho3dcaDWec9",
  "key28": "53JBxPbsajEcjqkpHQytSLLoPe5py5jGiAoWrkuLu3EDmN6GiHJsi14yZr9QbC4Zv5UNHbueS25mK24p3U5C7FiD",
  "key29": "2BhWZyFMB9TKDv5SrGxqbxiRPez14AgVoPpezGs8Hx1MXa8sp4xNYPDm1YvXLmCqrncsB7pUPHRvnq8E1WApJxG5",
  "key30": "3NFF9Rx1XCiuAceB2gFxWYTXzB2xjerQkPMXDe6Wmc1FZMCZPJMwjZmaigY3KbwS5QgC7jcGH4jDc5MBgfyFRx3r",
  "key31": "RNXxqBPEqn8cS6spPA4uP77qAYgxwsYw3KZtea1HwkhTxW4T2ipY25KmLyWDaGFqyPj6A4bpXqTT4hyVVdtUV58",
  "key32": "4yA1ioetGRBzr48YfKBJorFvxNcgiaMBfkmZB9VSj85uVAcUhyobGp3E7tR53sDxynh4FCeF173Lm8nKaT6pQEUg",
  "key33": "566ikSTTFx4SFr2kYhH8UcGckLnXnr76xb8rhApBNHnE3foMTdMXqa1FTnWwWpfpHMbp4hmZTVz75r7F4cNiCMLS",
  "key34": "4JwE5w2zKGFp6qi7cqUxAqXY8HNxAjYgrboi2XkBcL4sKe6hNEgYJ6nHpYGF58pgXBmjN4ChYXpmM8WPB43fBVDf",
  "key35": "27rephKmspiW47TJf4qHCyqxRMV79nVCrjd2o9dcuBasAsomqapXHur7zN5qLbnfPm1HFjZXicm9KjGqshtGjasg",
  "key36": "4a6cF2CaMszycC3B1gmThyGHv7frhLS9QY4xRrAhmTqj9Bqe3L3xV5Uibmn5cV64jYu3seenp2G77vwcuocXVtZJ",
  "key37": "67dNwE4RQ45HB4qaiyz7hEg8brrfrXFub6u1ACJTRHxnCKCrPcSQ3PWwiziLKnWaL1MGwJKPJFNNFeVthZiW6ugQ",
  "key38": "3qB8ox2WPPn3Deu1w4u4wm7cTAKnkMK6gMThx71N82g4hAf2F2dnHUjThaLuwxkKifykcVACJqWFHBc7NmtJfZwD",
  "key39": "3cNH5MyyS83DNuxo3a4YA7Z1EQZNBvEmNp4LFEmMf9SU77phZsx9egVLdnewsH2cFCUJAUoRNeYn7b3Jrr48szVo",
  "key40": "5d3CY2LQcQ6hWrRFNgot5V5UFkRn5GEV9tZotqNW4dA6dvmhGUsDRRLEQKdJ4ZAPHXqzWdMYfVS3fvGwdEdefxFA",
  "key41": "2XWzC11XeM7qCb9gvWiTkUM18NkdqDgw4eEBRy5Z5sH3zS5U2PMYGJMujGuGzgDecGR8puizRHKerYfvENNcX6PC"
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
