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
    "zK8Eax5naCH7JyDsjaCFXn5HUtZpoDnPpWQ9465PWqGgJrub9399HBqoxTeWR72X1AMGvovPjuvBMHPa6xfuRnY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5UWxnCZX8DaKiC16CGXvCdxY7zvoz48SdyVkuzcQJnjdAmXsBgwga1R8Yx9QNK3GUPibgFP9Dn39EXqCPJosAJPx",
  "key1": "4rr6co8E7dj57Be7PGv6v9dFRzpE6mtgcL5YStJFVUhQc61Spr78hAycHYswJcuPtmmJJAVTzsVzmLUKQ3dTsEee",
  "key2": "4g4mubRuuEESa36UZmR1SVRAV7AvEZryW2SMKpjcbxBbVucexAQccGdYN7Us6RfyY9A6uxEyRpa9UDHT8Fi7wiso",
  "key3": "2YpkCenbXA69t5FYbYUYeoRUPZH2JmFKDZVdHSgxQ6AxEbZySKS2ThR6wp44jF8dsZmRiSjLcT3kWbMxnDW4jwWZ",
  "key4": "fujUSx2CCP7jWuZp2EYC5KsFSTR2BixWbTWJzaz4SZ36ev4cksyu41efDWsPpvrKnLUC1eCS3gV9EFuVg2D9hsw",
  "key5": "5yaRcSHWjNQ9gErC3WtUQa3U4MfitptemwggsHzZbmEozfbH7oeQURxoJShvvz1rDVP4mZTrX5c1Mwhd5XipzoFQ",
  "key6": "2vzQYKiTZzwg7g4XaVaXrdPBjNKo4YEJ8g8ofH2fr9kZ6RYnJZsH1kBAksD4wbsmQ5aMJxG5DQjEk1odU6Ururpg",
  "key7": "2E8dJr3AERkNMkQN6vvKpmSygE5woCNUrfTNiGvtAWXL1n9BALL4XzmcRZBsXfqjsacA57L52woKPPBdzFLT921w",
  "key8": "22mvcYeMK6FmnnULuRjXu2riHsLix6UXdtAdjBF2bXx8XsdZrH6DtemnEXhqqZEtj5Hsd86TPRkFaMB1hn8QR3mb",
  "key9": "62vric9KR8Py7rNAmj3h2XXddpDUcrT5s8zmSjCfUyMC869m8rQ585PiAz3wKMEkZWGnnJrDFx55AZ7hep3uLj3q",
  "key10": "2UmovpNAn4Cbw7qYbuYEAhP1wScbeNBVcQYjb5ig7LEWxztxBdUJvGYhogzSgSsAQ4jWk8XTwZzwSxHoravr2ePj",
  "key11": "2gssCeqpWSze88kTZfxsBzpVizjmANK3PWQoQqAzJvrgnxoMAwV9uAe5PvxkfCRpyPJHQ59xghDUpvjXFJBB18uw",
  "key12": "4zAD7qP1KSuDGEc5Sh6M65hvaYemJBda3ovrZTpvq8z2YFJLXY3mTHuVupJm5TSEDq87Dtot2J1o7pW8i1Dajwep",
  "key13": "3PdC6k8oe7iuepV73dXnJd5tkkkRf6P9bZACJ5Z9kXsutW1XyWWi6KquyVk5C9NTyqmcQ6CyMCMc9WiEzNeATN7w",
  "key14": "4o9ix6q6jvskQxZgQ5dfxb4UbXFKH7nR5kT1EphEgsKcu3PtxebB9SEsCDdK4R3RmjkG6TzmAwoTofEapvaL1YyB",
  "key15": "3jXhgf2AZfcSiawRp2HYngsPTAPjFuXxr6ArBnvqFyTf5JJH3vQVweZUoDHpy9u9thoSHMPSvt2MF5DD6gJ1rz8n",
  "key16": "4pV3ChnQNPi7j4YsqaDrjqimBi47zgzd222w8VCixQ1vkaVJuUp5ukYTFCTYmts9pgy6cfx243g5GYqkVrYuuHrK",
  "key17": "2wa5HT5Td55f2PMGEG96L6Uuc754uJRDGHEtg4otpWkpYn1qFBebk4CxodDRZW1vvMu1onS9mnRKTeuFdfb2soai",
  "key18": "2KtWFkbzTi2Yd2n1Pprzs8DhsyNm1N8SB2YGMLsyw6fhMkLe454tdAtE4cWVnt3HzPgsx9B6SAfqbiSgp3qbxosX",
  "key19": "raxqBugJfYiCPSPoa5bucXeR393L7XfvBtGojXH7VEnfc5kqNWMh31cqGjiXdwQXwFNhrWHfAVcpyn4xvyD238E",
  "key20": "HqYf6KbLJ7oFomL1kjZWdERHhrocJZEUTzACyU2wrXMtMu5yqKCeTrzo1Hjsdhu7udXKbSbAvZNQVf8ycsh8Fdj",
  "key21": "3bSmQVpx9efZTsg3CY21sCXL5B5Qe7oSU67Gu8sYr76dvPan4nq2cpDvJ3ufJGzULWZXaT2MP3eB7udenPh6vPy",
  "key22": "3XrfWfd5V6wfmw3TVXhDAU3heMkRBZMmh4LkQoEJwGjN7W1s28M37ZG7GpHcyTwcGKVbXu6nt1h8F9tQGoeFWBcv",
  "key23": "4gqjCUReUcfxLcLEzyrn7avzk3eb9VEViy6crmuNZVjzkAW7DXuDoxqfAHLNzabxXzTyF8ZwPsHDVHMfrWo1wk2K",
  "key24": "2KfkZipaALmQMLpiUCcKoac52UMcVWrpWWFKzP5CBxCywvL4kyK9PnTJADeAt46Lyh2Xp6nvTYE8UBavEzR9dFG5",
  "key25": "2u5M6uFFYZ7vxpwqREX3a2ihzUEtLm5Ypy4RYWbFWkLGYeaewbYDWzgTbZa7FB8VGMNZaF2PCr7bMJDeznfADins",
  "key26": "3BCjSJEFKDxWR3XZj4GpZLNdVvVutXUdNbxqctBpF5obNQAGWMmgAxf4xvownewYrhpvRc5oNAL1hyteVfgJJLEE",
  "key27": "61KQNHAR8ano7NMvsahW6PmZ7o1KF2aWw3GS5nKPxKYMNPUJ9L1EZV872R2jHAd2HdySZqBD6Ay9mCgKKnXqpRpU",
  "key28": "egK21HCYPLjYxJ7ymoEadTXvcXPL9CyYWVusJy5uLZMLdswMhpEy5myanFtsg6tEpMPnFAAXK1XQMoMnJEND4ea",
  "key29": "kdzP7zP2tUGAkvZcWBEA7AZfGyJpxRzA8QTv8yq5z317sDRqtwu9QquzrBdAcfSc98Zgp1rgNEtwgnQ5CmTkrW6",
  "key30": "5v2qY4Mapp7vvViqn16JBuPCZS9FmPKWnR8TYdoHoiHBd3niiTGcFEfEd6FcC68bSjukRyTTtzHT3TErNYP6WBWa",
  "key31": "deGDLoE9xRji3M3QuDq33EAXvWRqT9wQghZE7HpooSFjqhDYLeNrsXro3DxnQ8YYsFSN5S31edzwovgyTo1wp3c",
  "key32": "4sEHmBbF9cN5oMwN2EfmsS1pReJcV5pzTBdzaEmz4S34mthR19KwGpj63VBKrm9tx5TKhZst3zv7EfZqo3GPcjMj",
  "key33": "2YBwWg3cGnbA53g4BefKyUgkHvaJPyPTZ5VvuFQ9A2FLoxo3rMrpixmDxveko6ed9RoY8JpFuc8LuoKo1QnUqv8x",
  "key34": "5quQDsjgKMJ5d4b9whx8GkxQKg63rvZbJ4gC1RnqrZgQrGj5G4izotjaBCLsbRHk7FAPBd59H2fuxHX1oX6PbTcG",
  "key35": "5quiB5oHPxdfz5i458xd6dQhwqn7jwwuWZW94jfLMbv7yuXQDyj3b28pj7LoVBotYdaj7i1yC7K8sf4Gvpp4CBRh",
  "key36": "4rrPEMqWUq3PP56RZzB4A5MRjULfs5Kd4kFbD4SsmdeLuziva2EJY7Aw6vf6wSzcN4UWwXyKgZf8yVfSXvAa8Hxc",
  "key37": "5Z6gsxRCqsMxHuUSo8ZS8U13fbXYiynqL5MrwnbyDjuuc58FfJNLrPkDk7PKxSVZwmvAYvScz46paCzpkAh3KmHj",
  "key38": "4XSiNUfFwtogZJUQkQPcCskihsUCEqSZk21xLBYiY3N14Ps3fdxsuWYRM9CmLhpQYcmfKT9MEQ3AHhfHG1B1Pu7g",
  "key39": "41oi56Q7uAQZ27Zf8u2FDJdsoPjgqBmQuwK3wbguvDB5kd466aeYMcD6HGob9oGz8UruJUe16PxqLx2fveYMxEZH",
  "key40": "4LcEAVrnkiStshes2UeccsTHyMdLDrNNkgwQiTJJ58WnY4G3q97XZfRiH8kXC7bZTGvJz7uDLMcsjXDbzzFXNKLa",
  "key41": "4Pm46UChNEmnNsAgofi942Cc1sAetKPcgfqHJeMjyKZhXLvXEnNuMHHxCqCgjTQ3korrrqvDsH69SXzNEdmCMmDw",
  "key42": "4GXtySV8ScisCPFSJZnrbfwbN1NFBWH7c6RJN8Wq8grdjj6bH9xfQFg716p1MmDXUhdM76GtPnAHkKPKRENSyPXS",
  "key43": "65mW47g8Hsy1Ba7omPK2opskdsS15cBEXvwr5A94NZYn8ty5Xj4rHQ6L7tsMKDkFgfJrWzJ7LNwV1Ek3c2U4iEYG",
  "key44": "5KchTFDYmUhGi5ZJAZWVbpt7sxaHAmx5ExbZLLhXgkZxBkshKPmAXXZypHGZY4oXXCAviAFZPyMKbkT4egw6Vr3T"
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
