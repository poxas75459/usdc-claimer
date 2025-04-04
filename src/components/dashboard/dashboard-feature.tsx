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
    "3fNbRZ3HQdgB3TQuMGxUnXy9By7rcYKEupVBD5iDxvrfpnWBDCAiot2jFrDFPe12T286kAiT5VPQoh57sc1Y3GLk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5axMM7k9X8etY29QBDguqDVSdgUPBA9vEaxVLZxvNcwNQcmZQCq8MkvKjgB54UtA5pDb5wK1rx32dDpr3WrLpXSw",
  "key1": "XJK63ttVw9R4pYugEmFjGsyMKbfbNXWVGhC8mAfxkfuGdoUdamJS8wpghgGpvGFepRth4GD4o83zehVtn164NYS",
  "key2": "3f8gVQ6HViBT5Rw1foaMQ878SCrf9U9Ew71oc9YSybVFpV1WBQEEgmLKGoVLQ7NrwuwBpZYmbE25iEoMSnVrgww9",
  "key3": "4S7U4L2N2Fp9C2fuV2HBAv1S6iCdR9ooSAqdH2zKVMAh7wmA7ooLNcMupfMW5CQuCKToZ8yY87XvLTJ78Paujaoz",
  "key4": "5i1ANftNUqKPrmH6H7VK3jjNGPZ7FUVPNaFUHqZH1L7HPfck84G5kUDrHWpBcCo93x5XFtBfaUTHjoArHU4XAJE3",
  "key5": "NEWZDmaMnEsWzbussWE8cQmP84wmLGHKuQsA5S3ipA4pUrS8qWBZyBXtBT8yd11h4LEwtctbQX5WSMeS6REo987",
  "key6": "4dwt5ebKkHgusaHmh9C1Wp6GVZUDHApRXAj4QWn6ZK5mWyo2WddopavYT2a4AJwhoUC4ywUqbjrNtyc5JrbqCXAq",
  "key7": "2YUacHW29fPg9rzZHbWv1YTdQ6BRriV8o96mGNbYmbwpnw6Pojz21n2kHdHXEM2wEYsTiW8HyPwJbdGLfGaddrbB",
  "key8": "4fDXBp31i1sTdPDALUAvQMePqgqTZbUfAjoMTeuX9qWLoYnWCed6wbij474KGYx7yJhsqv3Tc4AufiY9gsNZp6tt",
  "key9": "58i8Rpc8VirypjhAhvCXaKvL1RfmQ4NnABYXA86na3BtbnDFizYQ1ghkxPPk41N8hQ72hAQFJ6LnVKt9LNwc1axC",
  "key10": "L9E7o8tmadbXEFJA5TF8kBWPCgccb62zupRjiUghUq4WqiSZG1PBvhFQmL89e7JzJ1pFrHm6Xn4dH2GktMwBFCi",
  "key11": "34s7XL5ndTQ2AvwLt1vNpHMj9LzsCtFgimhbfBvy6eSWckd8yck9zQVYXt1GXtzZ89R7WKvaoZH5Yvs4or7mcNCR",
  "key12": "2HCd3JLifyU5cJTCZDXdxy9ACbUxnmXw6nNNuBwKCEhBhss121DGJdYkCaQuKaohCFYwwGW9rP5DViTrt7pVzbNb",
  "key13": "ncLDUbd3Pz1dJ7dQyLtvfFh3mTV72oCT58deMG7VjuMb76uE3Z7QmK33ghfSj5h7567SoKwzdEFwBAcLoNJztZT",
  "key14": "4xP6gH8Dy8ArYqDnw1xHasY4V2KNbvruuGZMkTTvxD9UiRhjNtJAT5gwMxd6ANc2mhHvQ3fCcFRAYp4ZdE2vKYDC",
  "key15": "2nzK5UELhA5JufHSZF1z8R8L4ZWrfN9QmBAgmgMP9zaMk7pryk2g5LoWwXCM3MjzjsWjwbgVfJJX9PcxcmbZE9Ku",
  "key16": "2wc6ez1ty4GPnStRYfhkch51PSbFHPWKr49qWoDebKsektWiJYVs4daQGDcQ9CoSfudNGYggwRRyjHcdu3jUGq3g",
  "key17": "2PrHUTUGPFB8vKFQZ6uDXTMSqfAYY5fp3zzx1XsEos14Yw2fL7riWMuCwQj9HCAWCKnwMBwNE9rbjffT9VSDZsU",
  "key18": "22o7rXJpDVLr3A4haUTPuibsBTGWx4GUeUngZsPc6qnMEL4YhLkAKiY5eTbYYU9cmiyozvPvwP7JNjSVVftSVjc1",
  "key19": "5YvJdxwUzQZPCYW8Jke3xnW4QgmX6oyXqak5cww3ooZKZiG6L76meMq2uC9krFhUhnRuY4KMNwv9C8HQfw2wenQN",
  "key20": "c5EjGDyZEFfvLq2NRHGsbofeQucFB2Q4wMdadoC9CDVi2zmLxR3AjN71SeiqbzDm1Lvfrgir4tYUZoXd5Wtbu8a",
  "key21": "4LKNT4Rf6zwyqURaCCKtniMcbo5CRj7u2Pt9iFePcc6U2w3V3zhiTrbJmE3gKusVZxAbr8hN9Vna5kTCbs2k9EeF",
  "key22": "5hpZKn8Lxe9JyU89WyGzgpciokdq24ap21P6PHEkvAPvABfiDTWfYDuriCqvLKB7WnXBUSYdHfn3wYbxxvtu6ng8",
  "key23": "4XtU3Kc92Gh4aAwDCrWXtR7gSyWTfUcGBgNS9rrhE3abGftwF7CnyLNQmK8AZj9ziE9xa8X5cPgFHUmBGXusSD9f",
  "key24": "5T6z3RjVmY6UxZCwzoLf1BZGvPeumH8B8cqknjsvtHnuSw772zpk7TZk87L4HGGuEwgYxagYFBEHDgr98YLow7as",
  "key25": "5Wp3bHy1CHrVSDTXTKYTkgXxAy2kKEYc5YYWxdjaSAKHxX6LAa52m8bNkAnfmHmCJp4C2NrZNyPoMPgnWusJzEyV",
  "key26": "2DK81JXMGwe3m6Wmgt2yMBs3zyasJ6joEF6JtSQTaxVXrcfYYhA3D2bTGbVx7zMYJQ1RfyZLFsMxQCiWWtxkTzxE",
  "key27": "zt7kaV9CqnEBABDWyXw5NgFWSXVSX91E4EkTD2842JDQFaAP4CNPDpJfYTKDMdaFxxAiA1bHj4iZyzBQwEHNzBL",
  "key28": "4ZVar7YCRSnVDKcB5nakn1sZXL3adin8gwXsWmS9ZroWj94Qyr8ugru119Y8cL8JpiuoVNVdnb3R32weyoRsiYAy",
  "key29": "62SYdVhcnFiKq2JRnM7ai9fPfxot2hruYT4w9qDmxu1eE3aFUs4eTmGi8i8nMfspqpBAzqd8xcMP8kFN1JwB7GTb",
  "key30": "3zc9Mo2SDuLVx3u27WTRTJ3yADXiieXundsbjvfGzFxxbzMx2R5ZMaakoy5gz1tmgiHpSWJDfB8xAStMx43BZySf",
  "key31": "28bRPE3Zhb9VuTWXYJChKcycTawnqm39mCJC9fGfS8YjCTzbJDQ7q8NDj21QyrWSvUagyf3zFMKvW3wrgDJxKtRz",
  "key32": "3Ho9UFHJxBzt89PcDRoTP3zxrnV59qYDKAZZoF1szdWm8UP181FEZNYm4vYuNRsMpJhoFSFjzKeVvyPk1Mza4YR8",
  "key33": "2sEutmxBW5wF1qh1Yf25eZarmQdgWNjKWJ98Abd2JE6idbpbcpByMAgqeDEqDHYH6jVowkkUpLVAyRLZp1CdJucq",
  "key34": "2UVomCi4v13y4B2SRDM3eghcrCFNBPyqU1LkysNTRTgq5LvmgyhSDynRkW6M57LFM5xSmqYqXBxon5K6WtUw2RcY",
  "key35": "4dq1FdShvZEbwBE9FFH8RN5yepnCiDRqDXoSbJsCRSkNxaJcjELvQzt6WvncGYkNuUws7y1rQRNnRuoMA7wckYWA",
  "key36": "fgUsNvQRVXoUC8VopCU3sJmQFkRUsiRnXNWWQ3duL54RT7zSHugDRuRxqUcKuWuY7JFR3LunGbAaoX7xbf2E8N7",
  "key37": "2pFLepdRQERv389gHbcnLAnW717K3pm8NmUgXzWC8YCvD1BakWFweWftaLcyeyNjmDf3CkEEoSqpFXaaE8L486d8",
  "key38": "2GkUv8WHRRpBD3s9K3vns9zNsTsyV6ozHFqmeTJBunmkhNsjprS5nGyshXTCoeqTFPXyDoTsvXQ4iYJqxcjFFF3J",
  "key39": "6gJYqXhdcMawwppemdNRXVyJVCAajweBpyMVoPioUm9SBCFfHeFzYZ6xvBKVqttjYD8YRgtGRA96hokxUHV1TAz",
  "key40": "4Xxpf7wxUvtjswdSGyokWJQag7M1fBRvLG4QNMLmSsND8XvkMdJzXXyKCM5H3yfoySkieghxrJQH7WxVXkKqVv4F"
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
