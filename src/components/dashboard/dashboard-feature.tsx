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
    "jBqPfEuqKrrqbM4zrbisFFAjf3Crn5xzkxrXC1sifJ3jhAjszpTwtrcMDXGGpVJR2WhEDRj1C4HczgPbn4hYutb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2yGP7s27F95cuNKmFeWQvuX9JFfBWGnMpGGFmw7Wkkja9qMy65khN8JFKs15vVkJRMdiRpgfbZUmER6PojEyrs6M",
  "key1": "3SwBhPEozzmeiUnH5kKK1G6CMrUKmLfjCjbzP8o2DKfkX6rHGvJUTntikBddnTGvd4HyY4AJdGfE3zLmPjy1Gxpt",
  "key2": "58jDDECsn1EWL5SwnzgY7y8XuDCyQD63dAeEhbq4HBrnVkSMfyeRodtaDbr4jf2g7Sqqyzyc6sT3VdUR3zrBivP3",
  "key3": "4pLoKsSQ1fVPbGrkCWC9Tzw3jSpFqeRL7D1d81H27tRYgQx4yBQmvkNwHx4BxaUKcC5UP57iUxnmt32kNGjcpRBc",
  "key4": "3t9eNQqnsqd9XfiqzHQxSNLD6FxssEXdHNCftnsfWrwHMRk6E1CQqriNzChrSzJUxwjmooJ163cHgG3rcdKr2har",
  "key5": "3zNu25J9b6JTZguQ2T4rvm41pTjvth1W1WgtgiV9639zoNUGJ6Ks1zmz2vTYhoznVMpdMwX7XaU4PZZjLQ3qXekY",
  "key6": "5zRo7iCD8xK6NM7BskfvM5hYVgPCfVujVy9D3TZ8TGNQsGxCg6t3wptU1bxdH6UopppNcaMo5EgtuG2XRuyrroym",
  "key7": "kVdafnTDjJALXP2TQYXHScDg7tt5gMEgzykWSWjz1j4sFa5ox7cGXTQCyEw9gXGQZB1EN85Z4qUbHG4Tpcob91U",
  "key8": "4ceYdrJgw4vEnBToxpsrywLDzyUsyQmh9kwvxeQRKETRCbJZ2EgaVgZGoivhjP3cjt7QiU98Yho7EXDuEvKo4Yk2",
  "key9": "5aMzERJSUu1WurPJ41x5gKvWz7kFnDC3chhv7D9eQLx7B3CpiKKDkdfD1cVdeBFvxbpWSsMMkaTm92GWt6aZusLW",
  "key10": "4Sn2YcB53BCaNq1bySJoxeEtJEqokdySDkQaA7cpz6QZ2RDD3qmUXvkivmLHnFHkKkPMdx6PWTqYvrU3BoGGRW2v",
  "key11": "4ruaW4MXuqQonHfSQt4SK6erRioH8zSftDq73xfHhVEenYgJVdC59CFoFT6ywtcRsbZaJvWufcEToF5hTSNPfP1G",
  "key12": "3L6BrDyWyJngWoLU9nV48r3P9YgfnepLjimmRrYqcfXyvM3CNosQNiduNSC1pZXnPUMwMo3A3d8gExjcC913jRxj",
  "key13": "MxacrEaxtpahgdyagqBebEsDUv7egmT1atEYqGv1Evv6gmP7ig8RuH6noo8P8Gy23FR9i44rHBAC4173Wi865z6",
  "key14": "4Am1GDf4nXNUw4TrC3mskV7uQzWgfoT2PZYRscSxDeUYbAChjdkwtySSDYVbS3Hi2HpYXdbc7KSPdt95tZ1NzvGL",
  "key15": "2VbfFWDwfq9puevPaNeUciPKdCE2syuxNZNjXaxHTuKpDnDtG2i3sBm7pUNtQ1wRsbUisAqoif9rDooXdtWy7mVg",
  "key16": "4wrsqGCwZEWtHjS6Hc833yJvf8ShR9M48HBgcUd7c2PvrrXFpHq5vin5covY79tX2tWBAZmu4mZditUFHostQMeE",
  "key17": "53GqFV6y1q3p1cPzK7h8VyXPamd1aCcX62ut31kkWvhhcPnZcZ7ytR3MyBtnbYgMB3jwKzew83EM7p6XJ4kaUWG6",
  "key18": "5EtuDJo6Wc6F3YfhebZuFmZ8xTUeQy8Su5XrUKFgVpdytD3xwnsg66q78UT5KmCJx7SMit52rRbwUMQ2hqvDHGAE",
  "key19": "2u8u6MnsooEtwGRV9ojLY85yxkaKavR19kzuxjFKutA8xPp3zXBNA3HVEnxaYUQrMU15hWRco28u2D55B3HB98cE",
  "key20": "52da8xajtoG3VxbFgXvp1bfBnk31WPVpggZu5mfqEhBLKkQ48Expo3Djsd6i6ptJK5YBCVJ9fDydrzzXbHFXCepS",
  "key21": "2F5ptt5JBynBWcGek9xHfVuv9fjaEA134VnVyriC3tcmKq5dYc6zpZbpmnctqmLah5kRGhqtSBv1PLFcA93t5eqg",
  "key22": "3qFEXBwkneiyZPZJ7kneo4HKtCNUyECUB4uCPDZgQqB7NZEnrMtRGNuoChbn8gyPykBRLWxtDbCjdhVVHLYxAnRL",
  "key23": "65KmfoDHHHWdEB2rHUNuADTX9ZaUX4w9a8VpHtFDnzNd4awmdqXSeNJxPN2TJxnmbt3VXYkuosujDz5SmsJFwj6S",
  "key24": "2Upr2nQ1yZ9M6xgC1w6W3qoArcbrnm8w6sTfYYvQYcbzhD1QAuaJ2WW4KKgSE6QEAn9Ys5fuCJ5JWL26f2r1NyWt",
  "key25": "4idpwDxFjJ5WNiEdkv8pBaX7zKdShgZDB1bS5h2BQ14Lgs6WhSmYeJWzJy7acPTTWjGjAfX7dAxRGsVvthpuNAJU",
  "key26": "3mto1xUKXrhaUwvKTXsZ9rRW1jbDPQ7XaVsgWBje4Ab4ViMkDZvj4z4AomuCNzoPoEXM6NYFe4EQ3F5P5pihJq7g",
  "key27": "3DugdQNLgbwd47LqbyBhR6mLCQrtBjXot4iZwcP5ZVtLB7BTdaMMwL9bQ6hgWSfgJALTQtvM4k39nwsddNki2pED",
  "key28": "5JvHUx8Kz92xctYmFKjFup7TMnNDzXfhjzsSqQB9VcDo2iYkGGsKsPoQQFyfPL7E8Qq2thPJgKe8ybCtfBXy2hme",
  "key29": "2Ev3MHXUDiwHHWNgDsd1h7KTQmjuUsiMQib1BnxrPo5QmAxX8FzMXPUeRbw3cQVAr7asd9B2fCPxXyiy5cYPpAfy",
  "key30": "4NcSZZYzRzE7sAAxLY1VpFjWXZvL5AaTRSCRjP8UaK8n1mUBncEUroDN4AjSiqx4xFAAAyJJL74TP9h4qVbG8Y9Z",
  "key31": "KDPaTSkFybToQZbcpbwpFsRXhkkojR8vyBw9EYYm2wzs9uAX8JwLpR5Z4cVHYc9HYf73dv5scDSNsRs12XrSUuq",
  "key32": "3u23ckfwMosoDuKHssJVqRFoHKRZzG7b75u2KSQkFgEELmc28MJoj5ewN9v1hsagK7eX4WL3pHFLrBrRoGdpGYwY",
  "key33": "2H42cmhfbLwah174Vjz6n6wFK3z4EXYt6t3gUd89DUMmTerNGPPcGnimN9CcqpVF2DooCEjrqLaK39pGGkuJZFz4",
  "key34": "4s6spAUutz9TaHKzL5NPcZ5JE1ZkipaEEo1m7bnhCf5Pu1yFyd1MtTEhsJFAqRGvuQhyivc2moLFnbt5C9bEYYH1",
  "key35": "26zjbMrbFhx4ZyXqFRsUjcfrdCduYScJvQXMHKWVTStHUCdEZ6qC9hTmvDGxPXwQsoxQqgU8jQivjwxDD6QEx1ks",
  "key36": "5bqdjMuKKDvgtC9cT8e3ztLTBsKor61ptFdHNsKddSjpBbqu96r9cVnNrXtLBnGEprTW6dNEiTW6tY2Du3pYN4Pr",
  "key37": "3YU9B9y16DTJKWtoSNvJNjYzXrPZruqc1b9or2CM8GF7qN9E8dcC8o3VP7k5dqqaGY9LGbcSknJRws18waHPhVM2",
  "key38": "5HoL3wgd5AVUroTvsGW1FxjWPZQgYo5Zx1jzGwPfgnbywwzQwa9qsCN8PzAqj7ZvR2SXHhk2VTKX676d7GVYeQmt",
  "key39": "ojknYUaBPy8bVhYeA2wsMVoHVzKJFjncrv4sJ7yc2ePPmr3jE8oPDT2B4fN4RUhJ68uAXiR25JoRXT6Fz2vKYTz",
  "key40": "3yGbNo2FT6nV9ge3uzMR1BnpGnAczpwhAQ91rUEis4DqEuN7tvLD2cEvysW5xSFgYstfLrrqywZPDsyELvJJskE7",
  "key41": "3DDZ7zmBMdLV4ez3sisbTGYFJPtEo7Jbz3EDTJDmf52qDQzsSgeYpZpn32GVJJG32cxC9iFzLSVdWjnDZm7mAU64",
  "key42": "32vi5NjkmoYZbKzt8yc5VyF6NwRzjTxTcf5yB5yz71vxXv1WCxdfresfaPKwiYeSFv2hPFHkkzSh5oQbPZPcgQnB"
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
