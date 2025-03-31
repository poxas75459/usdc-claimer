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
    "25SBLX4xLLNG3L8gSnGco7r9MFRAxBUrKKX5KmPMuJb3hXj3f5Jhsqz5AX1ksAMQbJDhHmDMnLt7cG5s8rUmS21P"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "eJd85SBj4Xvoi6Y8LuxiwisJWRdGZdJEpR64fboNmogNNvWHE66uuG6M6XW6Wa7kKh4hVACCjLxW7ow9eZtnGHT",
  "key1": "3NjDBdHVwREyjCXK7zwJowuHFQNnZ8nB6qZEWavBiywBTxXrepdUMk3gfLPwJyRQDgf7tykZxv8xf9yu2PYRXWJQ",
  "key2": "3paEmXAwyVAjMaf7aRujTATQdSBM7fhjau5rdSGNamwooGhwJEsNJcJrdVxNn2hrsKdi7o8mQRvxHFHyGht9bdu1",
  "key3": "2t9p8c86TvpveyVGNji4re5tqT45uDDTui3sbG4hba9T9DTtriuWMyMf1iwE1Xgmaz45SCbHd4kqa8pbhxrNJScE",
  "key4": "R5ePfSi4Q4gAuMcrhMG4L4C4hD1Zx7bhSTJj9qRhX4DfeSt27evS46EyUCsX5CUYp89WVUCsttsZLyskLkVRKat",
  "key5": "3A17KKH9pED76Yz6FhpFjDFzhds6TD6os8QvnQ5t7G4Boe8zcKFogxG7Dg1YLZu3JGm8CQtoSaS9GuPTgXvEnjjW",
  "key6": "4j96LhLr7LDMopKAFHT3F8PLo9sSydaA7yENkQFNW1juRSNZUETZandLz5EeitVHH9HnYU6iK3Mag7EAWsYVQKYM",
  "key7": "4MHmPvw6PE8UNvNcTBKHKdJeAUkEivyET4c7Ve57GCXFh5mkMSAUez1TeMeYdkENoWGtMYT3utYDs4uLwrhZ3Uk5",
  "key8": "47dzmM64fQFGXoWqKML6MYS4uXAHz8EBWWyD125tJndPuX8N36YAVcpVXW9kXW4yFCCbtn3b5zvT3GkAFF6GWJje",
  "key9": "31ZAauC2o5rr66UvRbG3xPYmXVLCSRzzHpjRW2SR98movpXmCsrvjMTwt3znGMLD8ze4zkacKpKYCFxe223FGHz2",
  "key10": "3xefHfPRv16JRxXKF7B9NtCMgMf1gThL4JsLBm1uDVRbGXEVzZjAjxy3NAyeuvemgWN1ACNb2M9YKYQ5o469Vz4C",
  "key11": "4iMvB1qkpS8y1wBHXasXHagxhFUthgCbbJmhC9iMvGzUxvhfAD4ra1J76DjsgeZSota8APkcVgyhszimqAeqJDp4",
  "key12": "25tjVh9ndXJxT85trTmcM5fdg1QoLA42Hhgor7KLPogu8enuAf1nGXnj41fjfmZ4Bjk182S7MsjuAJHBMrvTQ7ti",
  "key13": "71yHhQiEdoac7nQgcL7X8cBku4yeZ3wVgrqtHh2JWBcsr2Lb2GfWfknwY31diCjMWVHWp7Yx7UNuYGMZ4xQ9nSc",
  "key14": "VB4mJs97DDXH6MTd5sRs9LgDYgf5ubj9AmGjNPmNBaH2Ny5C4nPngrZGxzEogrteWQ2HqMJsxNBnTW3B6UjcXZ2",
  "key15": "5sfYFMtTV6gadnmtfTynEMgrL6rKsnDeepqAXfzUW7jQ3XWPMqKDoP5nTUokXdhateezp5Py1zC1aPheRZozpXNG",
  "key16": "2ZAiNDV4hugrkM4EJA5xtitwqm6MBKJHEEY2uQ8UrJTX1m46JBCzgyFV8nkzkKa8CyrcP7M3JJwjYiGXmkuWKaWc",
  "key17": "5RfFe1eKvMWDNEV4zR66ho8JKcZTrfA42uc9WjbAbPKt4JDrkBXkPNZVZkFjtAiphp9CUscRgGSZkdEmajHMLveY",
  "key18": "3KRup5iy2xYULiR1LtaZxXeyeFxmffWbtPtEsc9wFc5tax3GFuaV5Sv7Na13c8QZ1FDNHHoMr8DfcZiEDEpcPmHn",
  "key19": "BcmHj4d4ePSFtEEe1etALvwLbWrZUrp6XJzfvKb8hK5E9AVXWhLshNLMwRaGyosRt8UoM9uYySLKxxzGLmpsmtJ",
  "key20": "5w7uwPgnS9J8bPN4gXCD33n9sJcuHTjvoK7CJcG4UaNVcRpyeSrMe6xSoppAA7UNkvCV1Tdo3xSTHK9kut2iLHZN",
  "key21": "4fUvvazxZgA3faTdzmfV2RNggdNVkGcrwHyjqawXKSLTw8BqdmWUi31Cmh6aq3VsYWigxV6WNz9pjBe1sPWkAVQg",
  "key22": "67NTKJj9h5xsrWTqPcyLiSrEfejNyvBAvdNkcUJYapWRD3wNcCZF6idYHbNLSuj73VLj2g2Su1tCvHKTHraVT4Lc",
  "key23": "5LUFztv9F7wgzxpczAQZcMAyWbCa99GNMwNnvMGpKCm5R84KSRVLyNZLyBemTe5eo8n6RRdrdVwADFBHdqFS2aJ4",
  "key24": "vqzRaSt7VuByFYXTBZJFvjG9vY23v31TZeMDZ8RGnRKkYXqE7oZnWDwNaQM7Sa4RszB2dGeVK36kZLycd1i4wwb",
  "key25": "5msoG626UXBdEw8KVQ38486KjwHNzYgQQfjBgsH1KfQjraATHumktFUzi8GjsX4koFB5q7RYktbiYwr7mjFhZqQh",
  "key26": "43waWUYGhifAT3kEDinuuUBpMMpy37AXnbZR7raN6ZB1UaeSW8jrVJToV6dPmLW368TPm4rNRA8sSxx6t1ZnHPBA",
  "key27": "2e2eiDgNm2x7rt6LjW6R2yiqBDeKBeqshXDWxuvxycBVnK3Xg25iRLUyCMV229QBpPtUmRyMUfE2pv7x68bLFuDV",
  "key28": "3uW9B8vkvN4fyk4P2727kweew3sanE1DLM7LQXne77vtnr9g3pQM7ftX4T8j6a7jGRu3en7jZeqp2n1d7JmKpAy6",
  "key29": "4XPegXWC5BsFvSyvPUKogigK2XMzN8kUjeUJJLHv12cKpKTRzNuaaa9z8fk4TnodbXRVaksLq8tk4JRMVwNsoae4"
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
