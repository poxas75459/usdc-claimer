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
    "25at8yecBemxr6C1JuBsMSzWkr2bH1k7pPjdhwXMjEk9iUgoeWQrzLq2rzA86Y4tfCy2LGbKCxx2biSuit4yn1jp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3fbxRr6mgqBkWECCZur9HJ7Unx3cEP81433bfYF6AEU9LYADg8mwtEyjU2PLsueEHh73RAUgTqsSDfPCvUAmGetw",
  "key1": "4NF8xZCqbtZQH9nncSwrLzfFn3WR8WHCRE3LDuKxqoJKAZSZrecE9nSm6F2TkSTYeqNruwFUSjWBuTEziSCaX9e1",
  "key2": "4UnjjBLfmaKxdycbqHguFQHhCDYRHSKS8zy3KYdU6Pr14DpeLhoL5sWPWW1aP2y1ogTcQ8j9Uc28uZsLC1w4SaNB",
  "key3": "3UWnA9jtkmD1YkCWQL84yhYWHLFXSLrwvTEv9fVChMRvQEdf72M73uqghPyicY6T98zzUvh8misxPNPdGCFiFe7P",
  "key4": "SqbpqMJCKZXqPGafgNy1HYK1uCRcnu8RPS5cosWCPVKno73ZJKMQqLF1TDDky4JWKXY7bbh2ALMXH5SgwDPQcqV",
  "key5": "5TQFEb1UiCyVEYXMJiKiadT6AkxSDmFgMue2DXWDGj6Eji4dzDpotmwPfXckzEUnTnnA2FLh4TX1jimdmRELSn3U",
  "key6": "4aKzVcma9XJU6sjxSmEoWTS8UbcSg4gmgNseR4ZPet4Jrnox9fceg5eq4hYoGVLYZj4iQjdiJ9VysG1Zyw42aK7E",
  "key7": "2GgbBbEz8djdANDfXDWiUak9umo9czTS7Xfhav2f3AsYRavnP9ohKs2P7X8jk7UZR9Wpp6B9WsMaM3erFpJ1yfkk",
  "key8": "Livjs1JfiUeq2QxPYfuRhvZCi5cZU2cYnH7rmGtGRXyYkh15i5X7YVbD3NsPs7MgtwQR6JHDBR38e3odCazyeXA",
  "key9": "5JWVacG957PrLwSiKnu3dmg72LpFgqMKKupgxtpxHwyseEmzv8sadMiGFXyu8e1xwkhTFj1sWkppFgJZ7nSETXUB",
  "key10": "4LuEqSkAWUe6DxxpNejrky36LM6kvuMnF2WMySVeNzQHT89Zudy4Rd7PpjsdHpDB2YMq9ba5foiEKTMq1cNQatHu",
  "key11": "5qUoB5AWDccCyj2pyEpFVNPS1SP4bgMdv3VFP3sABXaDkytBmrMDxCRopFs1XJTf3okrKJ8fTogFKt3QTfhAvvDZ",
  "key12": "3pQoBbdBb5CNUE5q9KUtj1BVaRXVw8jFyDQxDJwZvfGgSG5W4nN5AEWLhbh8epPryGRtdo95wt6noYpMwqoyVtRC",
  "key13": "2fJtmrCQ8Y7MoFPrnqmJxWCZrHQWJYwzsWnP8jYmTTkbY7rUK4MJeCg6sC13wV2Vi2fcHJMhh8sgcTHCoYh9Ww4y",
  "key14": "4yhn62vLotohsZdrmn1mS5UPJGqUx8xzuMWVE9a6aFmeuzGHz3rDp7sswW7G88WUZ9rFB13u7ojcrxFD71HVsyWW",
  "key15": "4j6KPBJULBSiQEtQqH6aPHvXWiVz9GUHnaEjejsSfkV7jVfmwMXnimFDXE8ss7oGRjEkTjGnmy1mtvbAiDASWFu3",
  "key16": "3fpKvcZiQytVwahQtRqmQ72GYQkehVQNdBQQSZzX5VYZ9fyavr7EPZvXvy6Nkh5KbMbuAT3RwF2TWwSvpN7RpdQ1",
  "key17": "3yt1pFeExt6MV6UnbzNGknibaAN5NmMRWgFUe3EnUxzgZxfejgSAsCgA4rT6ZF26Jrtg4CBWckNAHCmT7gaaYeZ",
  "key18": "rUBu2Nb1aQtQ8XUwkjyD17E2oHkFmo93HTr7NXyaAXgsATLjCNNxXx2DhUEXGBtaP7MB3CHWsUTwDQSAv7SvBLS",
  "key19": "S7WvEpJL67QS1GXBix5dFE4R5qQ8yRTS54U6S6SFoakbQDxNjpJhK9dz2yMYF6QNtFudbBRt1bKKAQfMjQRfffz",
  "key20": "ZHkdyxR3cjSWzoaYu8rWzVXMxS28hXQrnTGRLkd2RqK8V1ebbHzsJ1PAaW42vce8AgZaMqeXvqaa9pTXF2cG8bT",
  "key21": "382aeu3tmNYkw7DMAeHGSwARpPbaihBvXNBP1eAJvz6PSejiRnqoMuypdA5SgSp8CkS8JhPFZhMzezizNv8up5FW",
  "key22": "4VHBWdiqrAn95Km2nw8i4WamvZGgtgvpRbPZbmqjEfapasPrFXxuyUuzytYB4rHQq5RtJppLZaZ2ztEfWoSGBE9U",
  "key23": "5ALMchote134QvukCQkDxptTbX3mhjB1T5xyWdWpafNSmf9VvRkbxaRizVvjrZt7H6wyKRvWXDS8iqAevhsv7e69",
  "key24": "5RCf8c6kKShQepvxctZzWwX18Hync9WT8jGmepLbH9UqthgfKQKLWumsV9eLQMzv5bbKZC6T9ANqEEYiS7EJxnUS",
  "key25": "62zAQa1GTwBKhDbsidYR1SQEGJDaDy3rUKqPqE6cqymQWEaDZZjnm9wfNXSTP7dJtpAipXUXb2gjx8nEvMgwZppB",
  "key26": "VJv6EUzizQjB5Rp7NRWXADk6K2RLGbX7K2YyzTt9nKXj7niSRvDzFkjjzE9eA2vtw4sXe2U6E9HzTvSbCT9YKgi",
  "key27": "tvuds9UgY66kw2VGMBqqG1ECmBvzePrtqiLT238rnhbrjioLXLTxGMRK3nBx4cwjzcmP8c4MNK6nh66KdPjV4vr",
  "key28": "2z9mVkkf3jHc3DFwYszhHbP7MW7ng15jNhoJkKCeDY2XYPBDQjyYF4Xzpmf9DKf6LLSwG4jC7SMkF68avc2fMTVj",
  "key29": "d7RU3ZHJs8hnWcWCMyRsafd3WCTe4bEDor1KnkD4fDDApeJJsWiuyzfe7G1nmDLWGPKRCozg2mdaA8HMcGQdgsZ",
  "key30": "4RijeGuCuENMGPBbMmVGEVPWdaiFh3rTNc8V13USWEQTT86WAZHWZPwFmHEo3ZjBLs1N3VWnrEgyNRFMGbts9Lvc",
  "key31": "2m8mY8kXhMRYtZcARRTHQqRTeyEiuc3BSMiE2xqBWP5ukxg9PDbJ6iE6Wud6T8tFmZSryFA83GH1Z8nLXDKxFo6S",
  "key32": "51EtrDCUxrscBAuUbP329eL8Fvy1ojHnNmhhnkrBsV1Ki6EnfeKUqqu47AhFcfXwmUZ7wv7W2qXXxjdrgscGbSmt",
  "key33": "57DMNkL4ZVcjfDW7qXrTTfomogPcfp7d7ZMqX73UQELdNcMQLGDgFmkFCREYPLdZwyc44dRP5gEXPKnAF26WtMtk",
  "key34": "5r4Y8BnnYtxXcLSGjViPyqP9fHE3hTCkCXqRFHLbVSzdBYToy7UgRvHU1EzMCzbs61AqWvdAS6Ay2UrQV3uEp2Cp",
  "key35": "46e4mTmg7u3XYnwWdZ8VxwGktZAkuXhd8twAJ1NY7KsLSit8EUYz7vcETdCi85X63wf77FfpPS87mw7sTXCnMMER",
  "key36": "2FYQscE89Aa2KL87JW1cArqPrEd5gd7zYg6omBYaVzUKWGKP4H7TvUp9vTi7NJxSkpmPbADD2yH4Sv8ASC6FADxd",
  "key37": "5ULCmDkMXM7yCdvcHtxYZwkZdNQa2jUVMU9nAacuC9BwE5oq2iY9LLoj6Gq4zB3YFZfU13T6BMDTazwv9igGcry3",
  "key38": "3vwBNjB8QPvjCGDzVPWYT7rMi6HF7Bd2MWggxkifKxZw8itZRqaB84MLiiNriK5smqvvgcYsiQTxwbcrvqr5BjZo",
  "key39": "WZ7mJJFmZGeKJ4DYekjXFiGoVx5tTXEk6Zn14UnuusHNzAo4SWaM1SiEadJvGHAUksD7A5mm9zU6qXgQwpBEnUS",
  "key40": "4pygGDyM91wK6pr7FhzFfyNaExqTKvcnek8M1MtsnPEQmdgUxovQyxLYHje6CPLgninQaWXPErJkQnn1vB9GT1t7",
  "key41": "sdy9hsiDqstBhfK7LKuJBjUzhAehAFHQzgo2T15uAqo2MQdiWCZoRBLV1EgEf38QVoXTHQFxMiJxDrRX3au5N6Q",
  "key42": "3zsxFFBU16FjgtggzsFKvKnjRiMT2gecB1aqWxWDj2wd3WvwNgz6Q4CbZLQhESjyeEftP2xqns6ueznB26qgyTZj",
  "key43": "3jE5A846FVnNDmqP9E3to5vCftKECygA5a1t7xvWuuzXM7rNkm7XYmSmPQx2ZAr3ZGMWiNnEQUpQvid3AQrhDf7T",
  "key44": "3wcEH9ZF9PmbRWDfCrQ5BvNmMbUNbpVdL1N7adPK3KdhXEiaHYv5eVgLdoocCWrkhCYPgwkgMYyWuQ1crUV51A8f"
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
