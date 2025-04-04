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
    "5YrJUeWegDKybdxmtnGD26PVPwQZvNHje7qeiwfXpQUrk766HydLfjgdZ9qXTBke2PvANBJ41Ss93ebQ8JqKJ7pY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wJ1hBaQvFzKJVfmNdvq1R6zw9o9xtiVPXixKKzN2FhtmZWnkcihz5HCz1FJ95i4bjjqzbbc4FU7Q8Tg4c28dysZ",
  "key1": "3kA9U3tStrzsUGNZs5fUxu34yK7tgMQ9sueTshsh2jB2n3sFG9URduU1WKnRHP1SRoAXVW2eLPHoi6SNZzrcQCBU",
  "key2": "2AYDPGFgywHUfFmpBrrh8v5soZ2U7icdf7XJBMkJQgHaBE4jPDbpT8CcxsFYjw8a1AqR9w63n82ENBp3gafLoGhY",
  "key3": "3qH2hSjLA7ZrNtN3F3swhPWmhsq1jPcfE47TJVtppuLQE1hhopsL9DhYFNPRE7uecqRwtSdqTBK4aLw8vABmS8NL",
  "key4": "EFFPa1McdwJMSztfNDckeFXbfQxSDuZzLSa3UGa46jnAhxkvSotbfXJyMHXkAcoWQYg6CPgsPHbzGAVe3Hbezrs",
  "key5": "31csj1BSS5eRtMPiYEsrWXyyB4gyeXeZAmsNw9V1LqvcuiMwXFFZFmGVVYsS1CqmTwyThS8eKZUFvAMvhLLbQXYR",
  "key6": "5bgCBqoy59ieMA1mb62uZSAEFWStkQJXFM3qKFHJqVtUfjpbDb42CLFPpbCbq5X8ubHxkxK36UhtAqZeouzbqJjG",
  "key7": "3TrRPTZfYdw1pk2rYLhichzSaA7XKCR1q4ofFZ3gg2ScW3GAwpg7wwNFDNEgrsiCn6LmgVSLsnuYDfP6YCLCWDWg",
  "key8": "2uf5t2yCTbsUUi93AEHQshFsNm6pAfptdxiqEsb2kgVHyudBxWN9mKJKR16ikWkBzWuCX7GUC3RhuJkKZA1wXkr2",
  "key9": "iSUuSFfZ33yCdpWodt6RuP8VQQYqh89Zuj2XbAJrGn4QBBWdpsuAKPrFxk5hAVSRAED6ubbmjVfLxNg4jfE6Wh5",
  "key10": "4jrmDu8gTt9T9PmPoGaRMNG7fwTCPzoEPgJ2gLgDntCuYUoKBxRccKvyzznhaKSBfiDNFCviCDYRd8UeTDJjytcJ",
  "key11": "5v67nk5HqTh4adbaXvRW4GBYijzYfLUpRcah4yfzTfECW9NcCLD6Ji44ag7CfLpfNdDDHnhQbZK7n3qeFMq4eRGU",
  "key12": "4izk5viYR1LqZN8jFZAy8GhRQRNSGJaVsjJkhM9VpxCan2TJTMhoyh3EaBpi1KNNtCv7oNMh92VtJwFEWZAYUqSM",
  "key13": "4tJqtstM414FmNSeNF4v3bKezuu6xiCTaU8YpQGmEe8tXELe15cqrZKQVErAyTqax6urjjJuQExWbnfxsNLJHMXv",
  "key14": "5ANf1HG5yk6PidSVEcABh9FiYEYLNPb4Y3HgU63K9WbvSzP4dXQoXFVsUodpAzjq628wq1uQg2VivJeFdTcj5udZ",
  "key15": "21aemuRK4hKkeKo5HuU45zMBQwfS1Xkj64HbfT4boDdiKwyYHtpJJ6nyKxhcfuhE6gG6h2kjhnhhebgGyqRuXrLm",
  "key16": "4KtnkX1nNgaPUDsEX5w74c7iwrCQmxRFQ4HYg1ABygHm4UMTgUBQzUKpxkLC5JxSUamYShCLEXWk7Jrtcbar9Pvx",
  "key17": "5Gdjyz5Xev69KPdaTpwaf3hAeQ766vyYdqjPCjb5kimuiSS5DTk3zgPEEbcdc4SQCR2FyYiiic6QykoxjQE3J2sL",
  "key18": "5PvzQAa3DDyk4p7LZ29wEx93Dj1RtNjVWWhHJJj82CHvmYxgZcZpe5zZzcHH5CgMRd4EWWfiQMWrKHq3r4HQJ2TD",
  "key19": "5mfDB4ygbC7VXEQVf9kAkK4qfqncyyoZhtWdWbCgyC89YyKVKn8FAFR7oHqwKtrvDnXs3DsSxN9vjTBG7RWxcBT",
  "key20": "22Ef7AeL7mw92UUdwPYmVBZypKftMafmZqhVvp1ZtH6TvDx6reHrqfjAytyDszhvXHCBxrr8e1pCsDYjZHttkMSW",
  "key21": "pQkLe4phWZRVUkzgkSNaeuVKMWtzrknWFtkcHwfaFtsvAq7ysLoagCLdeg8LftgRo7qiGQ9qKbjvRyJWribkXRg",
  "key22": "4VWSMrj12vD3hTh7hMLc9ertUcvPwz7z4a9cRfJ3WPvrpeGZKa9EpJUj3BLrrvZztw6vjCdQwbL8vf9TG4bKTTuQ",
  "key23": "4BUrN2HQzth9ToDQVUCHLCMZGTeEW377ui3cn7ELAhTAJsAc5Qhqq8Xhjpknjtw7eUV3wDmyRJfyfmuSU3cXntJR",
  "key24": "4EqCaUeMZcfGG1xR3GRopvYTJEJEVXvBUaWAusSESEhdh212Euj6t2T2AkfvnDc5C6XX1Sdh48AqDFfshdK4SsnU",
  "key25": "jUN2xbf4Ai81CtgCTmiqJvscrYewkbJoKttZntoNBZePSBPDmuY2wp1i7Y8ZpA7ujSVBbYrcA2FTrp9H9nyE8Xf",
  "key26": "3DpqHdAGPHfNH1igG4gJrtwwq2v9wQ7W2sx3LJ9NDcxw5PWs3w3CRyBTbYW7BHSfKBXoZirATSsrHdUA66n9cm8x",
  "key27": "26TXnC7Jx9JF19qgJSWjCBHK5YtntijXLmsU9JrqHwNvcjnXfqHhyzHYcsLGwb83uE2zR583gZavThfemgVD1fR4",
  "key28": "DGU62Fc849HtpKyx5fUyxLs4qwon6VphGTLkcyWHfWBDjJiHrh1iRWE3LiL2ADKmCbeVC4F254X2somEChSxG7g",
  "key29": "31gQJHkiSy4YFa8qLoCN3CZ2YgupC86spjhZM66aictdWDGsNLsi6i3q4ShnsAJKgQ9QFu8upxGPfbTfDUAhJ4JU",
  "key30": "499iVms8PDvr5ewXiRE1iHUgZEc1sJHawqF1oMpEjeNm96HER5HAv8fok5b8iUnQ4P79qkVQt65oSwoM59Vdtv3G",
  "key31": "38oZFA4MMfti1HKtAQngX153Z6zEFXEHcpdtwPM5U1JwJdJjroq719zeEKA76kTvg2TDtUmAFnXLTRJoN7TYi1xE",
  "key32": "3WzWrEB53UKvBNYQXokAH5CeSriZhoR8hGMuGdzM92oss3h87aBPTNUgZDJ8yjJat6qck2WFukqbxnis3EwwRZS9",
  "key33": "4zEiQdapTe38Pq3jq99L7L9bEYm9SzhWYS3nhZkGjGQ9quUpcWNGLDsgkPmBAyjrfgyfhbmvx1dvLAdHgx2cAuMD",
  "key34": "4qZXJZQkjewDwqkKAWVN95fajMREWawAodBVYc3tby86Dhn1gGLzZRrt9v2mGUY6eTiZcW5Z7AS4jt49T3RDZSz9",
  "key35": "4DuUbWDbWepmBefumq8soJJhRNzuQrzDwQ6GAagdHDfHiesVMcZr8QagNu2miVtQfKGjuJiJntaPvHRrcGb3foS1",
  "key36": "2fkFdukWH1PcAqifW6xhp1rZmLSfowKa9iReeKXSrNHtW8hW8o34gtv8P3bSH1frNCcxcjMceAdzz81PtovauiCd",
  "key37": "S5JRby1Zc4aEF6xnaYSHJ2q4KsWZ9VQmnfUKEmMYJi1e9tvUWUGXhG9d4M5wQA18cCggD2agBhBw5pn7NL3eNZm",
  "key38": "tJMCe67NymkoGfLHKjuN84xUq5M494NgmDngiLTWccKmL8o9BP4J3Qx1BJrmufz9tEJWCxgSTjhWVhydhpQSD4Q",
  "key39": "2fXHY6cHbyKA8KZrRDuWiHZXwapLxX34foz3KCu5sBMqhTrbTj4Ztj1ztK7sETZjjpp3Zab61L6trVXZ11sHSaw7",
  "key40": "FqAzM8pmPfLx1zFQkvtRS2qQ8EQ5m2xtGz8LRisK4dHeBwvEuP1wCEHyvzJx9J3s6RFcQW5XSkBMTgohGeS2Jsa",
  "key41": "3KifVqibpi29ifeN9SsbuoUQMkTAtAh7UnAuaNd7Njhxdxuk5VYGBcjbY7DRWX9BXRkvzqkG51byDnAxD7RXXMyn",
  "key42": "5Y7Lm4SgKQRSorKomxXBFJNxDCCKLADZGfi6h7eDKmmo6JfyBgDzF2697gcVxtCWC3oB9nDHddw8Udjkt8rmcv3M",
  "key43": "EQkPib1ukyBK8XoxzS1rCHx34XPULG4iiPzTQDSJuKVdCkcniS9qdWu4MiWXZQVzWiPVrqX5tj8GYHxmke3tXRT",
  "key44": "4ThbV8Zbvorz3CiMBM3PkeDy65UL8B5DeLeLCd5zpHGcaFA9pQf8WF53y4jEXFjYURKtk7Dh96UgFqBKbCuSee2Q",
  "key45": "64VvMyb1gUWZ3fJPG6FwydX5Pf5EkKo8vWABTFPk4CCtmAHYVzuzm6ari1hJwPzXXZCYjDEQQ659Z6uZ15wymZ95",
  "key46": "2jPJpu998rm3KR1wDYRRFxkzkxJtAhda5K4QDoWUSVfyGPbqWWpGSmPKz8rDJRhojPP1asygskLboZZtrh7kXjvD",
  "key47": "3ZytYEpJ8Luhb7RNykds2vTR2hwGvu8EAhNnpr93dUZ7ETPcAGajoaFSQjQaz6XjLnGmREq3DX4jKDoLiG5qKA9y",
  "key48": "EHFYF1wi6cGga4tKK93q76AFDTh1o1KF9FXEm1t6WtpWCoRnxrR5uV7RE5CL9exRZxQQ2NZeUYjZRrMWHCgCZN4",
  "key49": "Mpt4851GCY8YmcYsTQzfmmna5uyENzEJRqdXE4Hmk2McHABA8xniDej13HLmSGWkAqLYURHqbeNkJWBayVQAcP1"
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
