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
    "EFzKdww9mChQCAyjjqFfJEoARunDDx1R9DPVuBk3y5JyGXqpV5dufQauZ6dHua9FryzdMYNEwkJrfaq58xNiMLj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CEKiyk5dcd6a1yNUbHtLZ5Cfy864pmpMk1RpLWsRrfQXN9xEoKb9mEZLk9JnDYtWHTd56jQBW3DfQokoXJx6pEs",
  "key1": "3uS4xcRid18xpvggqgB689quYS3sUx32yBVfBKSECvhyShBWUXM3UXGuwAHDTfkFJyFos8TaXppZSRvLD6G5U6eZ",
  "key2": "2QiokfK72ets9ExyAEUAoDQSW6ZZ56Bou4RSwqau8EdRQTnFTRRenEHnKQWoEdBwtkry4orBsCDckNxGXFTDTefp",
  "key3": "5FL5V34HKyw2gj1Mtna2aAKy1ySBS3MrFVPRpd2GzVU5P4G8PH7Aj5fzZFPWGygfQ3AE5H2Vix24foyotsrzFNB5",
  "key4": "3miRzNPtHzQpibssSGKefD92eBhYvdsjQNJ1SVwKNDtEJet8Dsf2bS4wS9kRmQ9Nq728spXCGChkjqVgQnzjJsPc",
  "key5": "5m6zMJMyttpgZV7X9FBZStEBTN85ctcCvofbiGtBiUaUXpDTCwobFaeyYES9RyBgpmmt2JYxmSesRYjnfWvmYeeC",
  "key6": "2D5kYEZKRcc1rNDDRiA2zhJCHs4g1nn1G1iid6MXwk2zUshfeh7cPKTL8Cqjk1KwttPoQJKC2k33RofWu3Y2z2uU",
  "key7": "4JATzJKCdxr8j7dvLAG1776GvPLg6aS6F6iZPytZrBi1z1GNsLdbf9GLoNWtTKcFbM81hqcvEyRH1ZoBBmv4J3Mm",
  "key8": "uqLCKT9rjwAAkSkBzZy2HASf1x5zLPs9Tp3Sez85A6inNeuJQVaHMhKstn2KYawLtBoGuAAPrkaCjmR3c9135fd",
  "key9": "5LLdmC9HLWoSjsXEpnmsJCz7SkPYxatUSSowbP9vCHLvo2bAW39MCtRp8dEPgpvbY7WK8T8btmvgcqD8Hnr5FpiA",
  "key10": "becRYsz9nuJyE5EWKYH4v2DNxyJXLVMLqcGjn35w4BxWBrDKLmFyUFdCCDoVW8UHrZ2z46StwkTFJ8ugdKHxmEY",
  "key11": "3BHdW6DdG2n1XS7AQVoYwMJiGH6tNEQLzo1WtiFPM7iYwXS1hHdQ1gAUowAq6vpCUcBYmFLTBfCPMGVouhgJuqPP",
  "key12": "39BFQGkfx1okb8krWB5uArHaQBGyix43cbkCWNVHU3uUgY7ToFfMcNcKq5RDSAbwcrPDStvNyVE43GCaBVFwKipd",
  "key13": "3Ae1D2F8Jp9NJcC9dXEXCJRwLcyLfATUZEs1eS6UXVLyNGkbo7gcKyGV5ftifEnz91yxftcf1E8pW7rXJthTJvMV",
  "key14": "5HDRhWzw5XBXDjHxiwgwLCJwJomCd9Khcd8DAuSAJcBZgMXmymVrh7GU5gJQQzqAMfAh8LpWNYabcKzxDsDBkDME",
  "key15": "2xyz7LRnp5mtRogdzuuxyicjzg8Juix1hsJ3nAF4u92QCEciPMNKT5ikrdcMWf2i2ArgQvdyU9nKAAR6UiuXtrjW",
  "key16": "5mWtEDtLKD6K5EPrAktQKAoxxsmq1SSuP5QKLjfPYbHQ4mvuRRWPRkAq4pCprx44SoQVGtBN4kC3gXE7Jsgyyk6S",
  "key17": "5ZCQ9oAgeXaCpiRLev3sB1G2wzGezfi6vx8sHfQn9BBAo3Vyk4xJdj6iK4jJb6vWR3WTtvRKwDVEVzAxbP7MXbAr",
  "key18": "5qLe3xAKMxyNsqg6fVKs2ScyLXSj68M7574pxdPXVkbyKpsxtQMWCaxLa4xtn1jP22b9pSFggtzWP9r9VCYGUv6B",
  "key19": "2arUfZqQaREGa5qTydox6mTd1K1LgzUSW1HGgKGGqSecRDHqSog8cXUuen7jN96NSMVWbxvj28riejsqZsiffCTY",
  "key20": "5kX9D73oQrmuVnFNt26x3F4Fya9LVoXuAJUYjhcNLpGrDsyjkZpu6FXenKDSNGr8NUNCoYcRh3VTwS3nenUkf1ug",
  "key21": "41Ni6Jhjx89yqi3jueTXRTcsWQ7YGwtmLD79HiN1HPXVrYnPXXwn7nCWCmsY9dpgLiH2ZX7PvmdXPH9ES9pkgZfk",
  "key22": "4Gy75g6s1qpAP1BQLTUVAKVNsH9zTyrukPj1rmEyi89Ra9fvNzNo118P8vJAGXr7wADMVHT3RhZs4QCUWVTTL3Xo",
  "key23": "4SCvMXa7BBYijEtKF4puhcKVNne9dmvANYguMVBn2CqNKxayj5nQzdL3Y7dt7hseL9Y5Dj8VbrXeorDQDGxnMtgh",
  "key24": "2VhRB2qJ7aYpxvd3K8Y5Lrp1BADPfdjTcXVUhXZVMMTHBgMWP77hdvMwjYqEhFbY43tEUmoMKKwwDUVZVmiLdg4v",
  "key25": "283LuFyrqpbTyrkG8MgnBHP1TneG98NW8iC1UBterCbFCfaxFdJ4BcBYLuqswydGXd86mkZbKGypc9mRHgpFUnNs",
  "key26": "27WwrfcMDRod8mUYYe6z4Dxdy4g5zhi466iQzW7qkoAALRLNzY28YnLRujGUQAZxHxedg4S77GMg6uo2cHy6RpLN",
  "key27": "4UG9mkdxmdTwBow4zFTTX4FGTCRrKiKmXFXXpbmRuQESAiq7Xr3zyL5E9SLUBmV9UNqMeaK6fLcZC4eQHoR8fMif",
  "key28": "4EFshJDQcpwie8Mk3Wz2YjM3Bm2fuPgFRtWpEbqogEJCeX6Sw7G2ia4qG1Rjoj9qhoCRxvhFzmxRtGnho3kQgkoe",
  "key29": "2acjdB3Uev3rNAVqdXKfXsq1EsaJPc8dMNQkiSFKma8TRA7sDNCLZChDcHDNqGR1ErNgxTRLx7Vzfpd2QwDiYvwP",
  "key30": "31q22WKhngvdRDKwmgH9KM3GxijURskuSDhgCQKh3HhqpUGzNZ5faDs69F8iijfVYb2sCCUP27xZ5bBrNKeokMcq",
  "key31": "2PwM2A5joeqw6rLJW88nArMTtdoNdXbGNgB6nmmvwEiAs1U5mq9F41YTMUAXrtRBc3Y4KUYXsZrHiSdZF4sBFudX"
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
