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
    "6ygx8YJopGV54sne3h5TyVM9tPx4kdd4R7hzR2jkbmdJtFnEfmJsziCQfJhRRuaZAqVs2qck25ztYT9hCVMLjdF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ouinPLuPjRnP5KLgLtGgkJXmucYc1mhpUvCRN4BGRJVrtRGCCMKbDuZAaokT65EoR5wm7LrzfBdi8D32pr9187A",
  "key1": "3wXtNRUaghx4t3nf1GuroZRrbr1b6ZiDFrntb2imtTT5xeRem18ds5F6cmthLBYF1hMcVaHRhvQ1sBcCxSHmEMei",
  "key2": "636ciECJStjTU44jtkGurV3Rr1d37RqunajYe7DyYmcMJARPpF7asZzUt8WvA2BRWZB5xuLnQZLZhMS3iTfYq34c",
  "key3": "2K6UPFRg76uCqX6nxcEqHTUYzV11BdoUje71zhC9NpxYQBCrmKtaPuw8yspnnNV5sR8UUVohSZ93zTdU123jZi8C",
  "key4": "5razaj5abXxbBvcQymwM77NEtKcZ4gJseuZT6PxQ3EMJHnpdFd2ZXTwdZvoa4ggZzKJVNTge4TkNUi1VSwuiLEp5",
  "key5": "41aEdPWwaxy8tMZddBRtk6PDHosZ5b9ouJtN9XA4CRRJ862tGw5Ex31axefCRrWs5XaKgeoEktP6QVo7xvJbCgi4",
  "key6": "4qzDX37bVVGHeYzX2MsKqgjzNA5i5RAgHx2oYabBxp7Acw9H1AZo21m9gUuPAPL5Sa6x8cPmHGTFwS4vFatGP3Cd",
  "key7": "2vQH3atPVdBZpdudLC7nvX25cvhcqzTNN1fkmzgw94eDwZupddcx7JUHu2goQeVpUkt7YmDUbHmsfUeDcpDmFiAg",
  "key8": "wuQoJY2dkcgvx7p5coPYxrBC3pHeays4QYUhYdcnAVqi7M61W57489RVnDM33mDPhdJerDFgD5Sj6BJk2rhMtuo",
  "key9": "2vnoV4HzmDVccpT2fW3kMzmZVat7MyHobDg5YkRhsprYPQi2k9VN8gobMX5JG7xzfrDu4TCapeojSXJ84jYe7RZF",
  "key10": "3RaL8NHeB5HtPoR997yLcQ7GQizVs43C5v4yPdiXLsNdb4bhc5Xi8BfAmyTJtEcUq8UG6k4WCbhJa7ue7tqqrCQv",
  "key11": "CMVsqYPBmchfAcFSbTK5AoZjwBhtccBshD34gSYxo55CKLWpcqkPm5RvddjqayR3QwU6sEQqTqeotbFz2bL6aMJ",
  "key12": "2U6o3c1T9gmCSbNMHhBM2Nzn84Mcw2ZWZzqpxKPKjqhFjo9x6tShtAfLY5yRJs7aXARRGe3BQJJgi2N6sQj147nd",
  "key13": "4UgS1ward1ime1GWQDBAppj6EkMHQYky9nSqDR6hHBnpijw6ACZDf3s9VR2GtEy9Xi3npDkFe5UntmKaZohnFBHw",
  "key14": "pRgH2KYe73tqNti3M1ZHfgzum2odDzj7pdZqfZZsFucihtsW4RAzTq71C27yn5rGvB11PUsV48z3JA58Wmkn922",
  "key15": "5yYJTDgCfKNBqMnkBb224TeVEUFDvkJvK5gascqyzyfoDtfWaWE2itNc64F9YEP3bsu3gFpWMcyr7JHeaEJuVZYf",
  "key16": "3cwtS9DTpjovyAZ4oSRsT3XfJEuLyUq49fUCv8ra8MhZYpmnYeGy5MkEWcRhKwius8hWTfkhqzAWXCbP2TGycKu9",
  "key17": "4aKyv8BNP1G3nFDrj69uK9XKNXJmNmfFwmudUc4VkjEDcpt4KgVjGtsPgqFBqawASWudQ9xxk8egtFDri6BbbE3J",
  "key18": "4d5RF5k1LXAAegX2uiqxk93zaSKfJPsGfVG7zyBw6JcxEgpQoUwnoeN5Dnk89pQ1hFP2f8mUGAeso6UYmUCbGVdm",
  "key19": "3YSMG1hc2ECfgiVbc5icNVyn7HCpkQSm9ERzwNo89UfxJAVR9z3breRDNjvUAG9TQbgnE6hDYPKzXhuqRTVeRUPZ",
  "key20": "4cvA8NMHrLCHnt7roNJJ82NHHfgDmQjXCSqGQ7M19mVtGXFXgdu58at7MeLSYEtznmTVjoyDCNY6iDzPJ78tDPCL",
  "key21": "3oNDyeFVWxqaThs8Zivhojyq5PjB3WwFWszpvEjrJZGt758HMbDCi4Gm9drtxgU1pLrPt8MkfeFA6MtXLg77kmFp",
  "key22": "r9XgWpC9zkks5FcNqGY9YqJJzUjDqb9giJZY19wF1zyX3YHnMFArrpFwo1jnvY9fGao8Y9QaNFtvbk6tnzuxQVX",
  "key23": "XcswhW1ZgG5BfE1KSqQ11RbdbRTc9CxzB2JBUnhBipsuYznmJFTGP1djUAfqRoLMnf1SdPnGDBGiQvtWoYgxgUt",
  "key24": "5QNjWBwFKHeKwUHBW7Y3Erc5o9EpVYiW23mL3JguMC4FvRPzuE2HfqLikZtoLPLNCPggxQfCGV5WsRy9Wfc3ZdTZ",
  "key25": "4CQr117KxPw5nBX6yarBpj7TAX79mkZiPeRZxeswSM5fhv6xfGHCsjcK8VZMxVBDnSjyaFAWPXCU7NY4DjqCN2NR",
  "key26": "4VX1PTbGV3roBqUXjSpyerqYZjVApT5HfEyYbktTDtt6iqXzq75FCA4tqzETuzFfJEagogvuz4b2rTHJvZCvdg1B",
  "key27": "2ktqSUb4vKtXiV412gueVgmKYUUNxcAiXfK34otG7YgDzQ9wAyCYLNYF6usQX1AnET6MKG3nyziZhhxrVm63nPV",
  "key28": "2UWKi4gWT5DYpcjvGq8LFVkPxwpF9HMjSDkBgC1YzkhumgmdP3UNVsY6pSzadmQ1ieWLDdpTuax1uDajybxyPGx5",
  "key29": "Dw6qAMwFSBtmZB5zHZBrrBo8mgHNFzA4zqUt5CtCdGakyaFznEDbVgLeFL2szgjmphLb7vKD2r7n6Du9ScDzGw5",
  "key30": "29TF6aVHWi5AAXTJ5qWNapziBX5NhthRngM4nAst7Ws9go5ZaD8PB9KRwfHkao7EkaE1KH6dmvGcEmqC55e397wm",
  "key31": "r385zwesgsAJNS1t7LynzwbrQrzgxJS9iga6wWBmNySWRH5jx9cGryVX81kxmgYbNEUZX6vWdTirCZQ8VYo2y23",
  "key32": "5hNRfyvqUMVJipzbMvj3kXqkj6LELNuhuhuSCVs8RPAvpy5DgLZCUAPheVPAaRgEDsygT7vrtUGdthZGZ9dBkdF4",
  "key33": "3KmhhCbkXN22kVWdg88bxNKETbkB4DRnpGJ47fuMwbf1F6LWdFRXA3uPBofbo53rUcBwZYzL2zHEDYeBcjV6M5da",
  "key34": "5y3UetXQZhoNAADdxbcru32XaqoBim8C5hjDwY4ZC3aXAftFMYpr7hsMyf5znGw2QZ4BXD3513F7uxbpikKLim4p",
  "key35": "rUi6hSeakp98nbG8XAaTLnxZ5Kehom7JgBNM4R65eb5GYn6pvt6x3nSyfVi17xyCvdKqvt1P46xVZFVqPPmXNwA",
  "key36": "2HEK8Bb9AVKuxU3F7NXKsHEnNBmukeJR37LGTfCe29fvh2UXUuzjiS882BxcQvwjCGzX67qefZgxa6Ww8aS8Zj3S"
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
