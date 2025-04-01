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
    "4vhNb7Aj79dQK1nRLYrWJENKuhLw2aKogXLJ7gwRVUh6SeVYSoduQ9UzMYYAX7XLi65bGUtDkx3VZRYJ8tzUXaDc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rotMduxJhHefPJVBBY2YxPxVtXFsBQVGrmXdMeGMjwbrKqctxJZni9re9zNMwwEENoZFiCPXBjvhgWu1TStFj8r",
  "key1": "2s6Qh3ARHbA87su2BcRuDEjN8Arb6QejCk2iEn2L5CFD5fYSGua4jWgAN2Qy8yPRU6js4hhzqbi6FUqiiPwiy7qZ",
  "key2": "4WB7aUeRHXPNafFfmepAJgEU9sC5ic9HA12Hf1HWUDNCRpZeW2tbDpX1m67roWoiRaKriHtLRHXhKJKFZc7Miazm",
  "key3": "58y2s6DRdGpEo98P5bm6oRNgeRWsVZoXdnNJfnxPrXv1pnLRCAgb2Jjguh6RXRtPRjRk3h8yDs4fxVKFE3TPsJ8K",
  "key4": "5aTaEqC9VJbVufNByZ59agp8xmnX2gfwwTeute9XgUnKZatYsXtLfEjZd5GNoGWN6TK4trVcQawSGcSwoNgpT8Bq",
  "key5": "5ZopkjKifQGCYUj1gZKTkgbHcL5RePkZyDeZDGFsxSEWDo2UsFFHMHV1PikSxzu48NcbTJFT2N1Qgk4SLqp4fQak",
  "key6": "cvPe2zoV7VnFLPFzmXCaEh6iFvm5CqREPoMWh8fMYNsDyo9Y41uGDkzXcr3d7PkNf7RfYRPbgs5PyejktD65hVo",
  "key7": "4WZUZVEUMEZU5bRahWhxhsCVRDFyafBm6bZyh1UKEXeCEut4T5Bq4VQrtG8YBuH1S3iY8x9yEdMiYEthyrWvh8Zd",
  "key8": "4ETBPPkGPdToprZuwbpdEWwGztcV8iui8XuFE593qnfA5barMZb1fMPXuioQ4toeTdjLYdaB94hpWjSTVSUCCnGA",
  "key9": "EtF9z2vmTcRc8aG1GcwtuPrNiuniHhwYLXU5cMs82WiEnTZYQiXJt1oFwnoNEmr1w3SnMu6wamPPL9Y5NhxS4Vp",
  "key10": "3DQNb8dNeWEtaFt6Pv7qNCiFE5rf1NagEZFLsrMfoUmragYcUDfM7FnxpsQGHJf8hn98TB47tQXt6thYqgaFwz2o",
  "key11": "2DqgnDgSAcNv1AXN6JEdeYrbixwizewWehiyVSgPadNs6Rei7xvUmTZ4zygDJh8Yfe6ddmaMQ5ykcZuubmvPcAMP",
  "key12": "3DN4dTn7yuwnUqkQh3H6Yx2R3hWopREC8ZQi5L2wC9QNmQ2RtRWXEYhUsWHQyCMnZhV3KbrBvfRMq8hnvcAfZPD4",
  "key13": "4rREyEaCLgdKa5YcDRoKQud3ypUUVAd56wpfLCwkYwi89iExEpDmjawkaJoBD2atDeTost23iHRVmpkQRc6Yoaqq",
  "key14": "22nxTGGKfn9FtKFUoFNwKuskJ5kkkMBdWwodztozy92igoLDpsb6AmMLFvn4Fro7sgMwKKTtMYcv6JNuzzbFHd8t",
  "key15": "ASLmV6zsGz8ZzTVtp4vTuaMwPeB2AgDREf5dUGEa7fnstAXndgbS75GvcwqNyvKUD4drvLciuKNazUhWRRRq8rf",
  "key16": "5AvDApxJePNTEycodviZEyW1QEyHeyshPYWzw2KByCjjqhUuJRBa6btabrpbBVaaSVV7ddnGZoBmFprc49AAEvLp",
  "key17": "326XBX2VvRHy7cM3wYSkYqQAgo71NsN1NAvsF8pTDeYSaU3krv7DN538nT3LAZgSGnVLTWCPqP8RRY2XGzJZksaC",
  "key18": "cVFzhM6cjYRA9mcbzGjwUE4SV235MRYohD32PS6fHEGkCVWCpdm7DSdupqtG9Jm36V3pTzmnCbjzz2t7BFWZePc",
  "key19": "3YtekrHE9ZkNG7kX1GhdUkd9HWv9td19bWeh7mgj6RWJAMLgpQ6KDhLvhrBpzJQA2YekEokMruMHWcwhxPNvsSEz",
  "key20": "3UeymWQ6EvY4qbrVWpHakwZzC2A9mEzTYf8g7nkQC5aXWtZCY2CkqhTBPTz3QsgpGdVcLQzbd7LQH9vQ7Qj8BC3v",
  "key21": "41YByDyVYhT9NWQsAKa4MsC4DtJyXyGFxzdwWpZyAeqgFqFxxdBrAnHBD4MU8agvcJ8bDqZekZpcZKFBokLq1ren",
  "key22": "3ziTieALJyh1sNCCnkp18DCLnkbnn8n1vN23WYHNUby3nqnkXQ6vUD6Rg8gx6msoWw7ueh1GxZSK3iYTmuNYb1Dm",
  "key23": "3x8BxEvYjjcTjLwoRcwzBXs4anXcTyoCyw7kAf32Uy1KkTaj1BuLcPoNB19cb1k48NoWxqDdgYBc6FSQUd72TkQ",
  "key24": "5u4oCsLZzWs2hu8YCCwTVXrqUjcyfSRUWyecQGRVDEWrvtRA3BvKGuWf7fFtCRxwBNUvewMUazKoqP2zpDXjJr3T",
  "key25": "2DkEjorJiM1BWGm4oN7FGepKpwVJaEWeRzG3i2QiCygNW5TaPCXs8y8N1hpKcSYSNU2CayPgEuPXWPkqyAGBnFoL",
  "key26": "2fgAcqdVUEBPcmBzJ27ZaY6SprLKpmZjKgE32BR3FZAyT9pxuKoa7KmXXkRAJMTWvsw77DrZUcS151xEaDtDRJ85",
  "key27": "j2BchreEas3iY1cZDscvFcRHhxRgptrUYdAQLatiH9saH7XwmbFWGPhzJKmahBbyvcBjhXKAeLRXdrgZpKPHP6H",
  "key28": "3xrutGhgSWg5bkQ7MRtj1y4AYwmcyZf8Y8SCLZjxjAGFc7FX948AFdyG3MCVpRRPSfQhT5vLGLpasq3nANi1Wqy3",
  "key29": "62z5bBnTXofTZEUdUgGA9mUzbTSLtrQrwMsjK7C9Rp2WkEnredcBaZs6LNrdN4kxVDDPXz5XaEqPSYMfM1Snh76z",
  "key30": "3weg1iJSvrpUSAQMqi7AR4N8a4UHRjaa9FBt3WbPdzNuvdNvaSmBRyqgxQubi6KQXsoyAmyMjuBQmxq6kpZZn9N9",
  "key31": "4bA5tbSfMdAUj3vxkxBQvYTne7TunJDQ5zogR12GqX7A7dQ1Rgu8RGTWSLD9zayr6up89Y1y9JpiPjgLsWFWcc9w",
  "key32": "5k5ds2b7CMMs3qk5tWyNXo3fFEwatkXPQHyZS1bAGSK7XrFrHS4HS4BC9jWxD6onieCfqakEP37HZySL5VkDYh9t",
  "key33": "5i4ZXkKq2HbNPsGWu59a7cLxH3XkDgam5ML5zzcCLPGnHNLNpzSv5PC4az3UdMvQEhp2BabRcWyEEyBQfD1KhHYV",
  "key34": "438JxLp54YoD95Naw8QtNgrCGSN3tMvZehSVVKZJwKaXmHQyq1kufQ7ZeS32aGF8SLQm937WDzsiGC3s4wZEDXGm",
  "key35": "3NE8GYzUEeoNjt3mYoKzJTtiFDbWCZ5GP1nXBVat9x19fLD4YFrnzJQQ7ei8mAAiWDGdDnWxS3uksG4GpmEbrzaa",
  "key36": "3yFwPnDcLUrnJMyEH7MZLRugT41dYExugRjLHiRFjNbQh46pqHkD66HvN7UYnNhW94S5Lwi83tfo6fGB8XS7D1os",
  "key37": "3G4FfzXWsZZ2oMKT11psB4e62848fUngtnNzExomL1AbP3mn88ZAJ61U21Q9hRZSNHzRnwNUN5Wk7KttxjqZbi27",
  "key38": "3zJGGoZSVuKHV1MkETdM5EPCJLJsZeweygr8rEzjB5o5oHuq8ogsqB7Re7a7aWV7S2o368QAwQhUsU3PqUWtMFYa",
  "key39": "7cF4dFxrSfTKD9wKch1N9yVMeYJbe5V7NRzet6SiiL6M9ndXR32UzPznHsVzVnnToL9sSJdPhXgJ9hyDhwNAf14",
  "key40": "5imhdYFNELWNAobXd9Yyyon5X7LyykNZ2yxvChG7bcdZjwJdPF7K6L6m5xXCiokwXqqUixGYPBxs7Mcq3tTX1xDW",
  "key41": "2vG3urdpLDJm6pRAQHQ7Sg2Y4jeorLgVY3i7wNaYNwYj5xkLG4mBSZBdeDcKrUTYtmn1tm2AXvPtEG2Eka4xjAFw",
  "key42": "4fbf5AZcxjfDAZJVrXhzfLWxZAaU3oK1z82XHSxweVKgaVXi8nUDXCdAMzXw1c7fGn19KYLr5ap4ZfczvCoyUd3J",
  "key43": "2X6wmSsSwnMRQUimR8f8HrcNGCZNNFV4DySZEANRap6RuEUZBKXKxpjUZo4oDWMPmvHLctjZ5GpYKp5LpnBenXVm",
  "key44": "3iQX52BfUjK3GMCfKT4K8TRsYcVrd7NBrfa8XCdxd2SZWoUVFbExK9zJVYszuoNXMRdx9AzGhFkuou6nYbVz8Fpu"
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
