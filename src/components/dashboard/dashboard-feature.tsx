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
    "5GcTpYkHxyCkwmDzb9fFXXa3R6v8VJq2DzE99hdHnyZFtQFH696KvzJYVsWyz8ZtmqYVVd7a4g7r2YvdEB6NCFEn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5U9f8CLEL2PZWpzq9LkUfiRu2okfEXgGPCTt8VpjXQc7L3DTBsxPmHihutQZKNfuAjUstKVdEzcusykFtK9NNETD",
  "key1": "2od79smcWagQkLFzyjerKFnzYSsK4EfncgqwbX38FqemyoaVtEyjkmozFHVGVWnnJBtk454ybTT7Ka44mXjQrdxG",
  "key2": "268j9Xdkm3Eyof3LRCTKxxaUGNijDe96S7Fw1pzLccDTDwbePscwAcULjihqeGcy7ErLgw98EGsZVEE63MkBeqMP",
  "key3": "5Rk844vaytVjwf8ZLq1xsdR1evrdzAAKyvAVWFE8Ec7bPHS2Zc4V6ypcVMtXLtY8MGvRedTqiwmZugELJmtX96ay",
  "key4": "YbLSSu7FfoWTZnbMbcr8zkBkkApLutQGDMdUHXtwypYEmYe4jUFzsqMyqddEGtZ2ExsrawsSTPynRrH4fA8YdPE",
  "key5": "2DYUfpBd7yw2vjuWaqwnG3gm9nM6xTS3N19Y551vRPW8yD1Uko6evAQhYvnk8pYxci7hvDvKZSGWPnpjZETUb4YA",
  "key6": "3qsJ1ZkXpVg43ohnp6RN8t7eNZqwHiJ2fsS5unTLKtQrYq1Sthxq9kNSYPpFf6muVKtSNMDyFvMwZeHZjb4pN8dq",
  "key7": "4WEa1MjLin4Yp5dBFmZftbcPuPx6UZfDcHHTLmkcQisxNMmwE4DZbuG5fwXPneqexJa47wSKUjE6iU83r4RabNBN",
  "key8": "4A3Se4FgUvnDPJQqmrrytSoboEx8XXCvv4hr4jRFEVC3GMnQRosaFvkLNfpG8ZZQi3bYMuGQ4PjKbGXK6b1nXMZr",
  "key9": "3AQbd6ZMoSF85aVCrSbzmGYU6sey9Hk1oscRdCGp1ocjjHx86m1MKrTtjXrJmVhKwEqLiC386VDk8o5QJy5YPWN9",
  "key10": "458TuejBH7v411dcyBgVZY8dTXsrsiu6EgA7ShDFtXujKJsc2BjR66DLYeUf2YTJBLh9BjniBm5rrsycTuNhVVBa",
  "key11": "2pbccC8fjNiMXmRc8va8Qtu6ezFXSWW8rF9Hf7EajjUHPEARa2M7JqEvXa6sZ2pRiHhEXrao99yoU8gDxy2tZwZV",
  "key12": "5Y46KJXvhGV2TsMCKZzAcn521xsY2jkh1nXhWzKz1XbMECGHLU1tjqvxg9QmqT9gqCWaNgW1b8ZarYqpDXHzUYfX",
  "key13": "2v6w1ZB1AYoW3GPPMvmisKwTWNHxsEAavowwCEzCkQTGY4eDyGPbihtTTZNdgruVw9zeHjv8y3mZBeKupQQCafYc",
  "key14": "66eFuoCKT22JHyg1mRK7SMVfUqGCkkKMqP9PaWyM5sADSBii4mngsGeh49CbqCAEBAYVjHqFPV7PHrqEq6GZCDrc",
  "key15": "3zXXhDGTJaYyWzcFMLSxt28uMWRGMbnfvXRZDMrHAB28kzkBMCuMggJdM5mZrLhoJXRvMXT3BdVHAxX5QNU5GZGj",
  "key16": "5AMF51TUkiVgq66HqDSxspukJ919EjoPjvFrdNbGdaj1pweU1iHJ5Pg7zH8XpiWQM5FiTDY8WDjhBWuaCMmwPWQn",
  "key17": "5TMySj8Yak5zszhKzuyM1tqDH2GvM5bXAmteZja65eWTR7KWVY5v9iXQ5WpEBCXff2mpL1UX9z7zhYSXeqMoV1C9",
  "key18": "44etRiqif6acc2BFbdQg9a2ubohaVDQNZxUfpR9sNwptFE2GiqQ1zbz4o555nfKvUkwPFH5U4ZK2gKX67e8FJVE8",
  "key19": "55bf4gfDepg9vp2vTwB6gpA3nnwG5uaT5Xvpq7WeBpToBkJs4fK93nHt4LLSdmmGSp89Hm7Qyc1TZcbiCzX1aGJZ",
  "key20": "66m7QHeD8U1f5qDxNrHwaxfhiZ65J97Jt2go6GmFwm41BBNjJeUhsLPKpxSSjHZLv5nrR3kJBPG5YjuqWxaSdaXV",
  "key21": "64jkBpJ8PTWVpcjTpj3NrhvHHud2smjop96Jw5wkiQQUPVk2GnRACcnV3Ds3BWgvZkSMkd6B8RwfVjizcu3nj4Ae",
  "key22": "4p4fG3VHWb1xmMHLrMpe8fFvKXjtDogXzffk6K7JWEYMFCcqBvmvECdhrZty6qD74shsm1nREnYJtNxH4LKuwZp2",
  "key23": "3rUow6xZyeZQAm2CpHbMKVUpQxKvrNU18ghQzf811WtDESs1ET6uX5Q8uF62jSsUq6HX1c3LYfcqpY9heziGhgUD",
  "key24": "33HQt1UAM5kt2czwTmubof82v7EyAqcmnJL4cQt5GF8uyHXCepZRRsXijYgptr6ubETgGetcSNGy8qBAH76cte3m",
  "key25": "LNxKKaRKZeqegBvHP5AAezn8W2qYy4xRfdTwkiMvwMq7E2RhGWiDodPgH4cBTNu8eFYWxgtz6pGBEkeA7nu4CET",
  "key26": "3XaWGAGqUH8MUNEDKXVyVGY5rxhbrv4cJAbYTxidsxKELkmAvYeL5kDKbK36hVgQvUBPypFuYXKLmW3JmNb4ptjh",
  "key27": "xVhJVRp3LCBzVuvNGL5DvokwhPqKcSHZNwo4m2hX4aeUcTvNKyqqmyWdGrDpqNmQPsyqFnaeMTAJpd4oYa6dm4k",
  "key28": "4GHVAbgiX4R1o5oA2Wb6ZegNHJM64iPFiS6oyRyJXviNLe1UdMGsrNgtHRfpdf3Rug5ZXMoXdyeh63TLxkn7wM8V",
  "key29": "5Lf7qJR5rBaPMMH5FJtsSfybcVh84D8dm22uWgQPEDVDeYdwoFetd8jWBPcjhUYffuT2vEiD5VvxwfpxSNdGfi36",
  "key30": "Th6xoSEHs8s4aq6dzEivHsc8Ei5p7JkduK5bDkyBndPZWp6L5hdgB3e1V2PxUcLENWL2YfZhzQgQLukMULJkZiN",
  "key31": "5qim5wr7vFAFYGUyqXWWDWZHfP5Lf8DKMYTmFfVm8QVt9ixjBRLLX4Y3WecNfGgXJNDuHhQ3hhQDENG3SFnXnDMF",
  "key32": "58Y4nKySZ58VApAfoJvZza9WobgAnwnq9XJUrfUyLmEpbpa4XxCFZ1gFDHFMamf27FktPq21x9RDMWTe9BJJrFyh",
  "key33": "4XoSptcygGEB84hbU4gaqXwAeDX8KZaxhtA1xWeMQ8kJC7KHCokWwvmi1KyxwBAVxJpyDnFBRH883cMyybYdiXZz",
  "key34": "3xv68wuyAYFFLotftJN16DSFYY82d3DaYQ3XvsGQPJMugGsyYXXqcVnpQ5yQbKwVYPg6YJ9fiXvemWapg5is6C6N"
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
