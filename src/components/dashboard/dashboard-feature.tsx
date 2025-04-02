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
    "35SLBn2jjZNp3asHwtQeDw3DoiGA1wQMwPFF59jMBKnH1qTwRsGXj6jeCD4XhnynzRoXjRCMejG3e2e2ys88pYwA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "GHgVEHKwoLWQXZreKMkJdWdixwAU36sG7t74awMXRHbUg8qFpgRv2mE2u1aakUMNSVBUMiLRJBXDexHpekSoDpi",
  "key1": "5znSG3VXGUWfWi7hDULqBEQFL1k5UuvVY9xjJGd5XxLaDgquASqxQRiV6gEWwUNFkjJFgy9LmrL22QouC7KS7tcK",
  "key2": "eAzEepVZ5kbFcK4BsEqT22ZB8p87zkdZsX3kmKAWnfVcgkRyRNqhtQA9nEUK4srYKoK7NwJBwfjDNmXZVCP1SUx",
  "key3": "3M582GsrCuLcs8KZgRLFMRxhp4iRooux8EJ5NX36s6hpNh6Mb7qfq6KecimmrfbBq9DuJbE85ieLE5NDsCmycjcg",
  "key4": "2RimQAs8gRv6diebu1yrxrejc3T543C9GQyBjTH8MZ78mfSD3RqF6LX952M8jR5edMDgpLVbZiRMWy77xCuhmVxb",
  "key5": "HfAhzDB17ExM1TXgNnRA559UFFcLYUdkSjWpia7SjgsqLLiwgjRX6d5e2V8YFpwTBJpbr7ujEeKEcM2tkciHmnJ",
  "key6": "33Gg7GpsKsSeKcjY9Qt5yFEv13SKt5K1By6TPmUHQcS8Kh75ThDDh8GgTqWEqRemnSXqDPVutg87EEgKpk7BySF2",
  "key7": "4tNWqWDSnzFukxTNUF5K62A8t9FeaLaUFURhHQVUPhFqrkRZ9i4feti7kBqPdNH5W9UA3mR2PhzKsE37pmUzrzEh",
  "key8": "4V2YxZ7KfA7MUnWw1QSCFXkWRunodfMiLyfhypzCwW6ZpqTwYn8wDZEJAAF2aN25wbLXKErBuaJxAjT6oULoLD2u",
  "key9": "3GMAPhykNmHY2DUpJVCh9QZSFBhCtfVmcY81fkbU8GaVFKhvK9WERWa64xwkmi3aZJc91QN7aHcpXJUxuuJd2wM8",
  "key10": "fhUaceao35eNvsxX1gxe4neg2EdiDCM7WGcQZaN8kp4U122DnSQgZxnTJw3yqrmt6vz6pkXUf9Tn2Yv2yE27QAm",
  "key11": "4NpWkaEvx3QwarRGLQApk1oVSfeub2Lhtso1CtefTcVZ3EBi48iFrXFkoQR4CRbLj8CndCowPvXbFgzJX4zjfFoz",
  "key12": "4AKGZU6jp1B58Mh3F7oMDoHYxsT7keS8twRtDPFLc9561TryLCQ4Yth6YqoTbzjYEz7LgK2Ji3tHgyhHHVL4r57G",
  "key13": "2KkXNYeG2zujherTTsNJDqxED1LThRsLfjUbCAomRRf3qtpjwUYAPtZjBwWieu9zXh3ZU3LYLpCao7nQjUCQW9tB",
  "key14": "zqYoqJB6x8JXAF9DNaxofe1u1m3to7m9jRpsQDAHm5jqbMNEPAEQ9H9wh5vH4QbxUnwoYWXLKYNK2H7aYNA3WCB",
  "key15": "44HKMNB4VwXaGsk7w1Wx4Lm8ahRcanKYtyk87DK2e5X7YrBfEEGyqE2JSbEHaEAiVQtTLcv4Qz86qTKUZ1g4sKyG",
  "key16": "3HsQCpjjAN46UvCptiRETMqwK3RuUmdp6nWSzQEYTvceZAZTRqJjjWAUa7KbvKfNuYh7hXa6WTECYcQknBo4KH9Z",
  "key17": "2SUGZzGwBG2UzyJ81foeKWHhCgMy5XbpmL1wLZkAyN8RtdbHV5AtkQzqcLSFwa8McCr4UMZfATZKuQNCQNgaEGoK",
  "key18": "3r93rmyLeEZPVfENDv5htcNtMCQUtrnrEnBAiZ6uvysUbznuHqZobY5Mf3qWYFMzN3yaB4F2e9JGqUvkJ3ioz3im",
  "key19": "3WjtuyEPnGpEq5JiiW6ic6pyUQaWDQ2oyaafR3YsV3EWMXuKX6SSk8pqKTRjMMhQR6xYZWrcxcERsfENFqRaxMUw",
  "key20": "2xVV64GwsSj9vRtG5piSVfds3QoFTkYoJCtSkmRpmm1EzHQMiYoHmvAWVFbEaUzfVD7krGddLATco8ThtfC6xpYW",
  "key21": "3AUxRusNrYgzPkY9CSUbYXWrZ6q64F1sQvmkwNMqvZsw76WVnAdt1NKQLi6Vq7jpcxvSQib5sMUxkzd1w8Vvi5tK",
  "key22": "4RfnjMqsGSue8tf38ELjapYb6heurPA6yKFtehXmfo4mmXab9s7eU1QeUJETNNQ2Mih8HqPTbYZnVtzwAwU3HPAz",
  "key23": "441GY2CGZkfnZVRPiv7z8NK7iRcyUVDyzRvzfupMJrgASyN1Hd3zv1j4dgPwvo5eTPYddFaMrqNNpJiSrdK2Aqoq",
  "key24": "3UcCuxxg9nsZx5WZXZhnFHeLS1Xz74aoXUaaucS9jt8t6caJ72fnLMfWPVV5dwQnbyppiUwCdV5x6vQparowBgop",
  "key25": "4jAmgh9XSrbtLEJgXe3xqoofcnpC6FrqD1FmfJSd6gbwj9FGJSyfGSNSJuno51M66kgTa3h59ySKPudY3ZkABPjm",
  "key26": "4Rsq8ASuucukotz1YBwT9WuvZbTmo7kJU5X8jPWiCcbDanMu4RsEcoc8gZE1yhqhbfCY17JsJjooZbWX7QVFNfHs",
  "key27": "4gdWm9hZvX2whyPWkp2BiRkM9Wfbasu8QurMxhu1aWFpMXRKVvtioQoKJAFhLnyqm3mHgKP2jM6ouJLKVFzdW5Qx",
  "key28": "49FEQZ9xVQvzkjX4jY9sP3V4trM2wmVUAKShzx9crbez2fPLhXP86ZUmsLn1iWHdCxHfmByUz6Hwz5jVRYFh2kzQ",
  "key29": "4QCVwDwbB7w4aecdazwsxboojPmKHMwbyFJtGR5CMPy1urfzpgJaKtoZUtarjVr5ryKfTNoqw1HPb3ZeBjs6gbnV",
  "key30": "5qtPZH9FaNuDGK1mSzKrakgeFtcHsPS4PuPy8bjemEpDDiSeBJes6UGSECTaHHJQvGzWDPfG2CgajD4qJGRSybi7",
  "key31": "5VPddUuxvo9MGeA9JQ6JY37mwvQzf2ijzcH4nvYUpBLqArSsuMRtGazCbmEdzYSpocpggs8onrWVG5N8pyPUc7YY",
  "key32": "P8xgrW7PPZ8wzdmgHoRjPFZeFXgTJd87H4JFQbqGKiFxxmQS6W1fD2dAbNeReVZA96wAPLDMTewALNYQj3NruTT",
  "key33": "yqN5DbgPqdnz1MVQtE6zust3ERb7sNpr8rWdB2wB9tyJQz7p6NFVYr3b1c4vv8Y5ANP7yE7uqKu2pJn86T4Xzu7",
  "key34": "9jcAHuvyDRdCDvTMmz16fK6wtSDwb4axyCR7AjmyCVEtdD6yTWbUChZsTwucePKvoyftQ3omnVpnfMBhgXisNQd",
  "key35": "2GR1Ut5buvS7do24Qiati88WWTAd9tqprRdsUw33DDtkCxWRfMHu791WB5hHL3g2PacphgGQs9Yf5txvWR8N9kKK",
  "key36": "2Grg8DKzMF2PFK87wVgc35924wjwK5ZNjuTC5qTEEn3kx3jXNqhAuwCLrvs8UPaziErGF3hoE7B2Cw234f1ryHVJ",
  "key37": "4MwLBaVK3NJ7v4bVPbotovoX3461Fc1X27X8W1aC9vQLMPtbf6EVeUhFDC6C9xRwygGRCX9AohXbxjAtmzDmPWpB",
  "key38": "wWxGRoDLMXhwQ1FWJHSXEkdJV4XU6dZh4GeWdBHMRWRNbkwrJGfSe7rrzREJteZuyb1w3VVQACQZLAGNYiz3ZJn",
  "key39": "5N4C9dwh4RuiiCs2LJsi5hqKc4FDLcLEmc3qw9s99q4y4rhmJANycsZdZVdrmfPngjPKQUn51A9oYKXnpofVmHYf",
  "key40": "ANvSt1kjBmEDoJ6rXKaZxyxknrvymzwqr1M8dDQNfVpCeHEw8y32cSr1x6k2p23BJU9wwd8tFwCkEStaJALTYdo",
  "key41": "35ThxyaQ51DAuJoT7QeS1eKjq7mVGD2SBpjYcxwsd5hBKvKVDhH3bZGBnHQBCbQnP1md8pA7Sw2SvxRB1dDRzYRx",
  "key42": "2nC6H8aopqB7TkivyJbczZNtALig7EyTgkDVrV3i8HnkzsuNb74Usd8oux31yNu9kkeFN2eHGyuqpFm6TrpoG5mF",
  "key43": "5xdY518BXqJjqWZoEum3erju7kKhvfsEtzToBmCjCHj4pSVKBt9QG1XxFnVduKRuGZ1EBimsWLDT4F81gKZHmsmc",
  "key44": "65NBtqkmxwGYFsw515B6QoXu5GqJQtd1f712PePr487rmpjfozp4DNNQmxKKYKt6G1ycFZz889jqKh9J5gRyfVnA"
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
