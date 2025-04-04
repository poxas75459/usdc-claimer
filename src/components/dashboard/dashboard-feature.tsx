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
    "34CvwX18QaSPCcUTnftN4Cjq6wB6VVZykNXzqTzKi3ZTxK4nnARo9bV9LHWbjZtx12qLmH2Pm1uDE6zF45AXuQnA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2QuEd2vnBx1UsGC65qNE4kBiRUD9XCxGVbCSkf7k9WE5PAiadRM7hUsg3ZdyRVRteiWhc6BfRtYW5H7BRCCpSxu3",
  "key1": "3XczcH8b59B2wFMyStGLyimWgykk4HV23skAi7jnbE4qmPkomWhBSBv5R4fDiDYkYcBPVXN8Y1gxU3us3n6V3gN2",
  "key2": "58bSkVukgRVuk7imxWfzEb4CEmdDFz862E5JkX56wAH8N7EAee4ifEsqKMyprYjXSgou19qdR6UsnVhEGtpkokra",
  "key3": "2NjiesE6csqZz31w3j4CcUAKPaJVmuQZY14XmoPK7eYjZasgKpZHsruYL8zzhqmaDNk1oZkFt5s6FxoTH8kHJa8",
  "key4": "4Jq3GAmBejX5NrnXUnon1au4Tkp6SfzdMtRSSW31zcgbD7vzaUUUx4qFdsgYJB9eiKvBCLQ8vU3B5ow8TGSKreS9",
  "key5": "4yVdv8ii8AZ7tDAtJkDwGcjueJgXYYGfvLSW2jBjCjFEUPz5WL4Qrox3eEAoTVsYe1igF4vJ2hJhdY3ttQ1witFn",
  "key6": "3VWq86zsaw4Umfwk2NySGAdpsAU8YBzSg9rHEjMZfW6LepqfSuz9ntecpV3v4wRkVvGK66oHQ7vpuwX8igQgUaTs",
  "key7": "2XDui4AaY1WDqQHrA9FJNoHuHk5SkpcVcHpuzTzKcnrstAfxZgHtrD8G68RYdWzNyMvRgs7Fi7GbRu4HhatCtcZq",
  "key8": "3QoxoSR2uX1VseecVbwCvghagiBhNv2LmMXw11YFAAdTyeecMPPRHY9Ux3RDDUVJ13eNzvSRSvboE3uvPLV3yaxn",
  "key9": "43NGs7zDP3NYAdpVCn2srQkf4omGyh3rFZQHB5yNqCX3aYtcwVdfv59cND2kJ7YFgXhDzKJaiSMP3kyiUYKYkwyn",
  "key10": "3FPqjmcqkefu7pfjSTDSaPuHw1h2arFKz1fcituUQ4dUVWaY8h2DC1xWQtdTpvsiNh1p3Uz87nKThwwgQkYM9N9a",
  "key11": "3B3weCmLqnstzRWD8mCjkvRob9WaV7N7EEgAqXmd3MhNr1A6eHP3dHDRJBExo6e9Hvga3aje4F26Vj9mH3KcK31x",
  "key12": "3gBeWryC4FLLWj4posN1RpLRTtQWcJJHh7xPhHCv1faP7PnXoyZond237FkqF5yTfLwK6Sw21tTg4qjgNMMWUipQ",
  "key13": "5XgtbjFAVeiXGWuUrcuaqFbGrBUQryAiuxqyp6GyuJPcuYwDVqymJkv8HuqK9HgdxH6nKtaYAdGzHzFjTxm1jPjm",
  "key14": "2cHVQvyktRqepBXHHPN5VYGhJiuBawVxWfEAXqdc2joVTGNG2oJdXxw2D3gbKi1tEa9KAZJhszpq54AdXf2xgHR",
  "key15": "3PNNHgwezuycnqoMTWRb45sgSMh8m2Du8w8pKiBX7uCyjGqRKjXAGyCkd3ZpKJU9eXGrLFg2J1cUhYA5X87o9oXT",
  "key16": "iogw14AXuJhdMeMseZLpY6JtV4F5nFQ8gKr58RdDhGpYjGYvdiMY4QX7csk5eRjtvKb3b9iBY6UwEVn1yG5BsQR",
  "key17": "5C8ENwvJqrxd9qnUes9nbjsiaRAHfWSWPDL5xCXrWm7e8Ry1gMd9FntdnhR4q39FHYNb1DuvZw6xphZdEVBKkXJy",
  "key18": "2KcxnLZmzqKcjWTWUrWXjTDUtm47ADE845Zkk92udncj1aDr5uCoUaxAm4YK8tsNCpch18Q9SPHuXXaae1py3ZJK",
  "key19": "5mr1mLzttKbBCU5yBxHx71K2jGBr3nxhe7ezTWH4LzXuGV29zh6VitTTuCsZ7K9zHu2jThQNoJgTu4dCPXUdx5sM",
  "key20": "4mtTh5rA6td5PeRQusFdsyF6Np383eDkjuD5PZEKV8HGu2imNswDPkNGJHT63cB8obaZ1yxQbaXMrR6yHapTX5JV",
  "key21": "5vkK7WUfGvNKZxMkiyKy4G17wA6ywykqkMyp8yNdy5T7g19BFCeuSpmWzaqkr5puEtvt1wp3jdfSE4m6enQ9iVux",
  "key22": "hV5vYRysnmUoKuFNsBz7BQeMFkstTNGxuvHsMaNCqUDizHU9Jfo438Z4cH3ymXgfDhmVmdnYsNiHH1JQ5gb4saX",
  "key23": "288snzaqbwuUBUnSmHN8rqD9zhU44SLhGzuuCZpnaa81NxjNMnETHRjTatiuqkJQkv6HbLyP1KPJ891FwauyyrBa",
  "key24": "66jCNG8qEfDi7E28Ewnk5QCpdcNHzfMe6jbvWfkzz5MHvbM1PThcDtw7YWVRtyLXhH57a8b888Ceu4wpc4Zyq8D",
  "key25": "2ZhMuvBArgZD2jhUQQLY9g28eFsZ9vyUTMcqGNVzQzsadV84JzQePLhn36pgBntFVj27iVDhSyNVrVbyQvPchSRb",
  "key26": "2Em4GGYpfXqxwRPuF5bbPNMr2eAx8k6m9crvanU31krCX63LdcqcoqAaNGLsYR9rP5DwkCZ4vbmY9qLpLeQcNC3p",
  "key27": "2kXKo9e8qGKdJC9JcGCMceAuNxKs7HSWu6WxAu6oDbGkZZXk3sKFSM19t471MQFgWembNebufEjtHVqYQrxdHBKs",
  "key28": "3egbko9FkyZFGhJbs8U1L9X56Dt6ranVzg5n2JA2H5X2TV6VdwQ3sSknSTRQZK4bNva5fVKDp5TS6dJ4PejtJWXb",
  "key29": "3MtRGk7ceH6efNAt6839dqNVFLyksiPsoAimp4Jiwi8Be8JSadk3ewV5unX3phsuH1KitRjD5vAztRcYS2Hp9Yuj",
  "key30": "5SpneUKbhhNSo2qWq1taSrJ3CaMHQhbedH2nnL97pbxkiehntfMEf2xAVBks1esN1pzEwZUMU5qVXwcMWUDaQLpv",
  "key31": "GqfRwyiarqthb2TBzkXEwdSuypK7234y3nWmNZjNjpPQoamnb26y8xR2yvYZmnLi3KCUAi3y9uHRtJffxJs7ugx",
  "key32": "xQ4d2MbPZGYByHQsUK4YysKFCjqiapB6kKKwtSxcjrSpBzViTMXuQe19V9Cu5rgvynV1NbLupv8fwf1VXNhEM1P",
  "key33": "2TUbPBysNDwgtdgaUhfuKphWtkcoBobJmSsUTg2KAWNbyKwVwzNFGNiBLQtfUgAZ7ocinuBtAQi4C5tq6zzgsn6i",
  "key34": "35nARx4Ne2HS7Tenq8uzPruwofbPxj5N3Rd5mijcv9XiicM2GUFRwYVpRzZn3RyZUHgybqwr158MyUZ9Y31pRpDY",
  "key35": "5ks4spW5oG3wWKus7116WSua2kCCu44dDuLG6msfPguVW2yCFowznebHPox31WvBMAPhVGoW97n5HU4g4n2ATzQp",
  "key36": "2AwL1jBGExEUTP6bn8BgA3hrNjK4FcKFHuNtpcoFvrqTc6D67NYJbu1SnEXxP4m5RrCkEGzjGL8WgqJY1Avw1sxH",
  "key37": "2f1xRySdR9h6JgVzp31Py445PbeeYEUoSTrWVvga7hNV6j6aktwS551uSQNboK2onFubYxTqpMGaxATs5cLb3iqp",
  "key38": "3sKjyNNbWojRJXQMQup2fub2Js15iWzRZSxHzLgCqDLQZoX8uj41HGfLG5ynV2BKVtoZDTC9TRemFFkWmp51DQcJ",
  "key39": "3NgEpYtZwFhzFowZXABNzULZsRqUoRK3Kt6DxQxoGLdNfXCh65CsqGDSCz1DuEb4aXv2Zz7eucSXcD9dXmA4p4eD",
  "key40": "37RbChisTqSm1oYJ1i6csYmAV6vfL9XePe3Uz92fcVW8SX3kk4o6UpD9a3jaJkoaGJQi1EEgFCEBiHPAACKmZnan",
  "key41": "3XcxAFGaKEiHikeAwfDfbwGGSyL9H2pwan96keKgBT5zJ7H2C3y4risEkZHJCCy9QUuc4FjN3tZxDXD6HKfC8kNJ",
  "key42": "3A3F4nR4WQdwj761JTdZANkBPiiD5eu3y9zX8AbquCtXnGzCwiJ6WjigCATmNJZCeqMTyacAwF8wsANbdk6UejTw",
  "key43": "29yg6vD7cP9RYX2JxSPddKVvjBEnjHHSX9BjLNXvSm1xMARHBV6Mx8GFhZvEMSknEHqvP5i3F7mveVs39eABTGik",
  "key44": "4sAybsdbfLhwRnjGuS2xPD6gG89uDnuGFFS6DHP8efjDPGy2C9GFP2Q2KP3ziwJCvwFmLDegRndvohU3Rz1DhYYM",
  "key45": "3xfLgH9oxhU5zokBLUr1roWhFjZ97buPDPnk87rHhngu3pH61rDxuhgUb3KytMCUkMtSSEHwygf3nCgQXCbGk5GL"
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
