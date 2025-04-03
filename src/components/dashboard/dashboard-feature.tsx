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
    "ek3hqhppuec2eFfmcYMjHqxxUrwqgVXS41gPTo72tXs6JL6oPUycgDiseSam2KNLeyaydSNyzrCFmPK7e6ANKwj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4NhB7rnxBGe8vRpYJDWBuFsa47wNjU1uK9NV2wkBwC9pP4RKFymDtWZCv7eMrfUcgwJwqn3dWDG3DXoKbyerKpKg",
  "key1": "2dcyA9f7LJsY4a3JFkvkFAxMBZjywvY9HqThZG1rfjSzwkgT6wvY4K26NG39ZJS1UiiJ3cDvQ4cgA9WjjKH1yyRD",
  "key2": "52GQUHVcShEdrkyUkPJ2EviUEUqahJWJ5gC4uPMhPb3YYJ2A1bofdjDHxdUereM8bhLGNixJqUo36hLpZERmWYUd",
  "key3": "434NNdXBphG8dA3KK7nugSawcggmgMoyzojKfeLgK8GwFDq96BewD9kn5gcFWhjQXSky47V54TaTCHQz5C7Y4nWh",
  "key4": "38ZeZjkio8MJ8WGV9mHZSi9HzpeQKtVD3z9DKvrccvHKApDUWbk7Qppzn7aqrtPMDgGitYUFqAsVH4jBW2PSHDn4",
  "key5": "naRXV48Nt8vcwQHfY3xkLDmXENKqvBEw8RmRZcc3LKDvpHa6bATj5JQyRCbvAz9W6FutQQg1PKHVsMhDNSKrSf3",
  "key6": "5fghVua3pmPMSp3YuomjRrPs4vyCGMqD294EdZtkyjsr6M8ZTW3uJqTbUjFqP2ACwcc61tSJGXJfbksFLMR8ZxLW",
  "key7": "2wvSXyfzk7MVASVMocRPwALfyacntP7Ynk14Tm3pKvuNyype4zLqEFdbbsB4uLmsKauW4Zck2qMSsCwNqMjGj65N",
  "key8": "3YNxCSjeycPTjm9Ky4eeiKYWMsgr1gnuEiScAFUDi1MG1Vnpkb1vk9JnmrKRvr6sGAsj9b7uRCKbWkt5do1W5ZiK",
  "key9": "tCBnM3jsKWncj4TBmCHDLmvQ4MU2MZ7qJkh1oVotiSA8Vu3qf3PYHnZaDPQj1uEc3AvRpNhzkM2zkELdyUBab95",
  "key10": "zbvH6Z3nn7YezpGtRhD3tEBYtsbTsZCTGoXs6C1NpQpz8d6Xm7FQK2Jo5amwEtvbr65HABzbLRuRBbAhux6XPwt",
  "key11": "4Uxjc2bhzhkL7pR33QCKcBCvgaRKT7otnP95jDXRywWkNWHvbWpye7D6RhwQfGNwhDniRmZ4gokjKicYdejS55Dg",
  "key12": "2oeyNLTidEFsLs1Pom4EKzrihtcTjLoszfxqPMDfn5a9surhSknUYwS3Krd7in19cNo6VaoFQrkFeyTWgMANGghW",
  "key13": "E2AgvEvEcJ5q2C94NuvZi9qq4QmLyq5XSdEwhFrB3P3zKAqox1R8G9coZnkZTUimdgvj5up7stmAudyafw6H5Je",
  "key14": "3sa9Lpsp8XfUyFqrLSk7SATo2XWSXjd5DB1BbTG2NWq3ukGkMrSXJ3WB4QM9AA6suThPM7kitZmpCPLr6V1muN7p",
  "key15": "2YcmWHE9WNoxqfV8H9xgHi6jFUnPHuv9143Mc5KeTZMs1iVk8BjrVYk7nwFi49M7yWeYgMRpxDdWqbJqPzBTYQnt",
  "key16": "oTDwHu12WJiPw2AbvfPSbimsoKvWpCwq8DR4fuyvvtDbgePJ3fQrRNZ4fznJvUJHT8ZrkWFAPG2rHYhYBfCctKr",
  "key17": "4gVPxFRDF3iwZeR9yLZJgNww1dGwVdt5Jo9VoN5yuVdiNtUisLpBjxWrYwyN2fZYuiizjXg8rUyhLpDCQP5egA7u",
  "key18": "3jzgqeNFTFiN7TFggVoJv1DbR8qtcAwPixZUwTkMA89nBeyMZpBmYqP1UTndk5R6AzefWYLQy5Sg4tVXpDBLM5gM",
  "key19": "5sihq4pcDF2XUuH6nKjv5HFXUKsKxxTpZvLvY7NJe4MhvyAnJokNVP6zNoXQaSyY725JRovS2zoHLmR5DMku1dvG",
  "key20": "5J4i5Movej25e9gBs3sTfzoVkZvWRzJnm5nAnkUADXpAy1wLBgd73xLvZ7aPVoTfBbBrZiAUg2K7DUVjnPLEwzTk",
  "key21": "2aNTbG9RD6LX3PqVV3ZPGvgEn21ArVWhXDYM4whQTrGGvM8JYfHGqrH5SShRNE3gjaQCKNnNZBsNvGPNAH1jpbiS",
  "key22": "4uaApe5BtZML3EjguKwZ6EcdP8HhTMZcfdtbxoFXR4CKNbrHBBNpbNR4p7GpUx3ym4o4rfHep6dsBxrjcHLLGPMG",
  "key23": "4DjqAL3MTMM141GEgafJwKBMNqTHat5RWgWEkRk322xmZGwPHPteMHBwVR71n8TXT8HLa1YiEXEfQWhQSL7qyVh5",
  "key24": "5LLMuRxRMxSM7MqjMH56NnQksJmiG1feksrMF2eubqDNtMfrzn8TqYpLeaKJd3SwLaAEDLZKU8CALY9S3ihxct8d",
  "key25": "knwaMxHTJMN1MW5WoPxGZYK6s4iHJYNinDYFSSUmEUjxTkpxvwa3EHZCqCBT7WzdeYPhsTXAf14JC71JvnWNSBk",
  "key26": "2NXtAKQL9iunPCdjVcfmbyFnEC9PrGiXy8X8BEFVTcdiyUJEQVxZq9YdDx5W5DgwW8F3dTgYmyiq9a5DYo9CtZ9j",
  "key27": "3XQ2wfnPW1Ea8YNY4JFksDGkHSKEP7UQqrHSYjqWnCzLVEyFsV2tdGv3JLMWjP8fJAVwV3sXZwSQmQs1mcYKLeV7",
  "key28": "5r4U2vEgA3TyEJHFnJ3qx2QRpJbj5nWw6oyYMZSMbSY253gYiHY7nsR1zGw3SasyuWGsgRjtG44nCWo5H8oiRKxQ",
  "key29": "4rgd19MkPQmbESXgoUp3qGr9nCyyq4owuNe3Ji6AokAMDGqL61BHPUz9ADwqgKBx4R5svaUr9sTnaEFiMUc8Af8U",
  "key30": "4hhaYYAUKM29PuMUUdctEMq6qy1xZtYjSmMReAYbu1igqtbH6DQSHbRWESvvFCpS62xBiVkXT9GNBKEss6aRUKKk",
  "key31": "eVrc1bwfrJmqnFt6tbvVvHqdeNVj9UvqPDZEptVfzZbzBHVDn6CfkX7eUXQ4PLkeKuS5VH1mmroz9kbNafrTZ7R",
  "key32": "3NM2eZJtQnMzEfjLuFzB6X5hYjdpGugjsCTP8becERaLqhXcA1Q7uTHLdNGjv7mBzPyh1EiwjHQLsDNL9X4R5a8T",
  "key33": "XV5BCE7bhprG1x6iZJJUcNLBzpEKX56tbQeaejAMCqkWHKnTBmohkJh4WqJvrmczrcfYBAtdzFfDtc1DUC6QTDh",
  "key34": "2Jvbr9ffmY5ftBMCWjj4QcaLLGxQWTzxV8mWGWJVRH74Hz3kk86xTfGNF9tddFBcaLgxary6A68ynBM55umjrqKv",
  "key35": "44VsxisRxDxKP4UGUJKAmS9j4AyPnnzRR9SfLemt8DGJPxLvny3PH8X8XMQzmJzjbVhaLeXqvHeNWyP9pD3A7sLh",
  "key36": "4uDz3iiqLSZXwauHWN8fGA2opEpLZMcREXN3q3jTssjvLi1d7cUDePsnJw8F4XC1ubBz7hGV4d1D2zr3y12eUDdt",
  "key37": "5VW1iycH7RdVCz271YPcQ7Anj2wD73R5udnkoUyNMMSA2zSUBM6dTAuGjkz2NJM7k6qaqvWmousYLSgoaHj55Yvi",
  "key38": "5FpfdB1sD2f6zcaFo8Kh9q3SmcYm9PKPbfzJKtPBknHA3VRjWbVkw3PtAjVEkhFFq4twhGsu88NfRntZsxh6TfEE",
  "key39": "4EjKVgePCELUSEPsn9j15mXP979HkXURk3SBbRhWvsbtgtnLoc9i1J2GSAfBLSyNWpjg65xnWTn2BZB14AKDnWGB",
  "key40": "3rnWSaDd3Yo1bLRui9Phisk663ZvpiM9sAuJoNnZDzL6Jzpc31SgHrfw4o3JdaixpF8TcHu5z4REXB9vhsTM4m7C",
  "key41": "42X5pT9KgwSB2pMFtkUZsnaDTLUMv9RJZMGUpuoLjFTihWJsZaqa246XLnUMQed8gADp3px2rF4JWR6BBgE4fUTd"
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
