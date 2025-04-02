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
    "4az2FBknDifoUf2iaJsTrGAU7jvoTX3cPDXd1Yc3YHuA5fK8FhTqvyFg3BNqb7YEaHtG6gVM18kXBExgpDe5N6az"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3chgr99igcWs3w8mySw2xKzFKvuLbccqYQewGYar71vHBBLqq6VbPT3QdbYtdfcDG7iZtjQLRGyhA6nBiu6amvL3",
  "key1": "kDeYZJZZESaFasanwvZQ8m18iFu9pMkr6LcuBfrhofEBmhA3hG8Q1bKMGVvVHWbeFfCt1CuEMS22iynd9ydrpGT",
  "key2": "5GrGVhfnPRKS2dzgiLLKdZhLKiHbewnZt2d1EP6yY82U4YvqKcM3LdmzadYrhiZKiBzqBFDLUc9yo9K4yM3w1J2c",
  "key3": "wN1x3Vt5WHMCnsZ5ZnZY6bMLeUYbtzcnyL4dgW8QvDaL85DHfBdXgXmkxzWVvdCq5dec91o4QegGptMF6kG6sr5",
  "key4": "433pPdebzLzWWoHm492J3F1DGTnj8RFQkRXRSkCQsbcaaedhRxgPpeqe1XTijv561cNcY2WX2uE1FUPSkmchoUN9",
  "key5": "3CT5m4FNNpnoG7qN7pyq9yekiW4d6aSqzStx1sGn9wsvuSrPAfhzZo5wkQkm8h4cGRZ2RWkKdu9CERwGx3nUMgee",
  "key6": "3LhiUqZP2uLvPfQEvXUzb7kUW2CKX8YpFrxXASRjJbjf5Tp2jZwJhSWsZ6Hxao3Tq7mEEdwa2vqzotrJhZ8Hz59M",
  "key7": "29uggjv5pPx5Uyyigdaq7zr2gq4BJehrF3KWVgbKmirkSc5P2haL2EtfX73PUV11L62nE9uVP9c6bG3VNWqqvhfu",
  "key8": "5Q7peDnqxPvivtqJ5pqafVzve3E1b7AiU84dDCuWSTScPh5nqSge3gfce2EU1V2osQPoKzVquyMjjii8tUTm2Kkr",
  "key9": "3mPps3rNNaJCX3R945iykbY2qXGrN834N7X7UPggEP8XwxS9AT5HfdxAmJaui5T4xrhWgamzqXwyLV8X6i2HVRBX",
  "key10": "kVoyWL7wGcDe9ccCiwyK7FtccYoJ86XHhfgRx8pBGacQY4THMyGguwoVXCC4gvgoZ4dHJggzEzMRE4jj3cWjrDB",
  "key11": "uErEWHpqMeLqWGsjrpznZQpGRoWYRLLpsg7Bhi3hEEuX5tqytWpQRujgSL69PY5ejHpkBL39ajYMYEWzYLp7TrK",
  "key12": "4EyCFnm5PM1Vy5UMB3TDyAPZEXwuua7Rz2sAPq42HYjdy1d7T9TvBAzQ4eYRwTqx6ieVUhZmWnaR6VF4zJQVkrRj",
  "key13": "5fbY86WKGsGWBN7q94hxPuKb71hZNZ2vuFcdd2K9GM3x8zuFQsQn73Bmvw8ozHuji4NLkbJnidEXScfWscyewGKD",
  "key14": "3Tx5uhYn9icaWn3PMUGTQ26YDWYJ8fjm82gy5HZstkZ8ALgoBzwirCQWG7eTNmrvkWzBkxdJsv3uq2515SNn9xfu",
  "key15": "2t5KiRVQqNfCMGJ4NgzUu7Cj7cAaYXime43YThv9LKgFnnTbiqCR7Yo2qPN5vvmmHKzUX77LdTMaTKwjPEKJJZfW",
  "key16": "4yb2KPjbXmRuu7zfJUK988n5crhc3NTrjerSkfaMonTLKhEReCtZghExBsqzbhb9jyskg85pjP2xmGVkEjCks5L5",
  "key17": "aB1RPtpscUcXB7v1cyhcrZmZuRDYpw7qrvh89s1efoxdR3bdrGojCBDVecD5rfecs7vRCaX893kLZf6uuurqiz7",
  "key18": "4JcxmF7JcsgbKGGVTKJPJDvkXfXqS79F6VJdvr9Hgw4Mx1fcUncniKwdPCqpvM6FMoFTh7YNvnVRVfooNeegTDwZ",
  "key19": "4hjmYPgTQgkWqUNB7ZqFXtPhYEa5b6ppgezV3mSecssJ39AEicJWPv6vPCMMrw1xkjWTaQRyFG18MwnEAHmjyidh",
  "key20": "471x8jeZEJEudA1Wx8fy2UT6eNbPQ6ZvSXKPRzugMxagNrf4frELgUmNcBHw2R5fz5bZKNd2GmdGFUbVysEqoCq6",
  "key21": "28K5FUcvKakKoxUMtVdEFee6LpPGwxiJEs1KeN8dtvKbYaivZMRSfprVDKna7PWnob5cW5bacmxdKE2GPFJ6UNPA",
  "key22": "4vQgdzUczmyuAdqQC32zVh3ouKWfep1ZC13tDXecYrMvRZaSHmo4LAMeEjcvAyYj7hFVJ2dWsDYHL4t36tcHU59A",
  "key23": "5TDBf582UhyzvpjwkPocmDNWthSan769kG2u3U6MQgN4oEjoEr8vnkf6WxUig2GJM4ZAHqNHS7o6yC6UmPW4vWav",
  "key24": "2mcwSi3kMofZGVANqiv8hmTFfZhmQX3138TVYi9tLBMwzF5TaFWuWb7R2xMtjbdHxmezbkQy3gc8xDGUy1xttGaG",
  "key25": "5yVomozmwMRfm82gnrBd7GHAASeiHzreZwTR4bSEtg9vrtn17yJwHUaGCiFzcrhrzHiDvRPRGsrsu7UketBpucZu",
  "key26": "3VLA49k1f5hRtxeaEfQSGf2EqZvyq8pMrEFNF9YTo8L8JrLh5mGFnM89oAiG57Ah4X9cfDhoWD7e1PEQPYgg67bu",
  "key27": "5kTcjQBgi5BvbyKo4gJfsSjqWWfVPXvs4G2vcUQDc2qgxi8dpqJCXTAtBY8FgZRUzGh4AfttJ1QrrVNK6Q8cS6bW",
  "key28": "2uVuvh8WT5iFb8vi2ieH8Sn3zGcuXDwWyQactFi6h7Xn6oDF5ZookXFkokxkSA1uetncDJQYkgaLqPznREEQQ2Vb",
  "key29": "2nNPGddidrEajLtpizvG8r9A16EmjT8gFtkMSytK9mr6EmwR3saqoxFrwYfiRMm8jKmR5uH9pdCFQFjk2sBQhWhr",
  "key30": "3rS6BMvx1RfU4rje5ZUJLhMGxSvWNpmNKEf2kWujrZGFRiidsSbHF4GkD3xBRkf2nGezcfabUaFRQo4vJ1f9bYHk",
  "key31": "3tGrikLCLpuRu95qRoLUZSrCifwrjSRU22W9vcmGvKMnMEieXqsoDq8JUHWuQY5MEzAbCPCyh8rbUshiBrwtP7Yn",
  "key32": "5i8HRYmSdRLkjmoYNRA36XPVGx9XjMGusT4N7SToYR7ZoouCUoPd4LcxtgoPxPA9xeta4vQVGhKtf1FGwDGFGkHX",
  "key33": "wC9w2wdhSH3mZaonL8wdqE3ZS7vTEryhmiAs1aLKLjKkAZwMW3EaUeoNHuiXPwK2SVc38xRKjAGr8bKUxkZG2TX"
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
