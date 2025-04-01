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
    "5LVYSYYBZoC1nMQtuTGLMZVPUUTPny9FMU2Bub4b8Jt5nkrzEusBA2uQ7Cy2N4LjoAF8tY66zbij1xX1tgpogReM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ZRu9R6rDJxDsFJbeEhw3R6R9Xm1Px9yyfLkZQxXrJbqFZE4iwAUM4TfWWnsywiDK6RP8DqdqGeEdKnDyaC16Qzm",
  "key1": "2Dahvm8jnVmVfn4jnoBWBJ5DnzFRcAh2DUKEJzfkc4kYpSpHJMEhJurHU2oxvn2VBUkbpLPBq8i8GNwwEZ9i4xEB",
  "key2": "4ibPGbrXH4qEmwaMwBrBQUHDXNxUAEESPAMvUnjKYD8M6iL8sQRmLd2dQqMx73kCepRJvW89kXgS2yg5umXyHWuU",
  "key3": "49JvzKscdFYy1ajUNsSGmUP4mcMJrATLupT7jY29eTKaZn6UKyD9c7EZB6AbBzwcUY9bGMc1MKa3xWpc6Azi82Sn",
  "key4": "2mnCDTpYNJurKdttu2YgYUMjVn2BQN7s45sGznoK9X3zCC5jABnrpFYYmcheaQ1Dt9kgucXcKcG9D2Jvd1wxj2op",
  "key5": "5hQXPU2bfTgEPQofdBrGZKHbL3NXWdccwwpgbGZUYDFaNePfdnmcR1HR8kNMgxbRTZttV4m8WQ4FcJXHMtaEpKpc",
  "key6": "theUuvQiDhTZu1gXTsm7QZwn6pucopzNvVu9TsqcZPnqAokkKCEwDBs9Py2QfnGic7w3Lt4vut56FxFhALVGCQo",
  "key7": "rqa5LdA4WVLuZBQ3efWGK5QEaf4iL7SGRi7bUtptn5ivrwAhBS8ohHHpL1c32WYBY1oQJGXPuHiRrrTYbeec2dD",
  "key8": "4mpnz8pLHRdvuMUgHnURfmyKYLH58wHyryKmu8BLcMcPXqa4HEw33KM8jP8HsZQz8h3VgQNFaaiRckRGH5Sm7a35",
  "key9": "2J3o71Q4weWeNZF9rfALcbkwV2Pk2DQqqnsc4Tf1JzoEKbkC21PV52iMmeZ57qsvP5bs7hHPakbh7GhovbaMHFVH",
  "key10": "MaTJpkVKtPdDgmoUFdtKMo6jCEgbnDzx6QabPzLwoXN3AjAXovhkqzRQAdVGT2Eo7CHZV31WrP25pgHogd8crL2",
  "key11": "3tAJwpUz9kZTpNXGayebWuUn5wkDHvBvtJnHcDwnSiBvzSsuU2GBszJoxPKndhQn7mNFM8uckh4bzZv37B2anYdJ",
  "key12": "3egsxemeTh3RM1wxew2ueef6woxwLFPTGU6Nq8sqqSJT8JAX1rB3Fqi8ZaFqVL97RZVqnpA3wWXEPbW3BPdY7Tvh",
  "key13": "23RvAx2Q4KGAmCCWWEogsxBcjRxpjqaWJvXmfjMVtKaYC11ahs2tkeF1JShPHtAHcS6NpYUbbtCftjcQt8dF1iLp",
  "key14": "iLcRJVhYrzXnkrApa339RB5NsyaP1eobQycSqpisqS6747PK6cnExeowy3mqXeXVsPW7kLMm7qnfdYxXCQ2nQcz",
  "key15": "4CrFRTGFDWJxUcwjUVSLqFo8BpJywuGr8MG19xEJAzyQMPbsuwitwcJcsu1RjZvTtBCJ4svSKLtrSqTjzRn8JAkA",
  "key16": "2K1ZQ4KFogu3T121hiTecHkdH49dD5hFvKACbq7qZTCyQmUxxPpsKbm6GoLYfhwobHjHYBwJTodRJ4TYFFsPwUXV",
  "key17": "5VT1prRjDW2ge8pZQCRsTaNHcWbXQX8zYdUdnGUWtxa8sf2aHj9wnq9NTXYuXtqGbMpbQDMW5xiThkdtcFCEuW38",
  "key18": "4cGX18wR8hPGf6U6UosL8HReT3BWCPmsvCud1yMpjMKri2z3WdtDr6BmoFcVQMqUMY5qB3Pbok54R6yHj9W95szf",
  "key19": "5az6W7y5iT2W9vdwZtVA88Mot9ryiawXpYF99fS2dvbuQ9tZ11tPJ1L5wijNzQjuYRsFthopyXgRrH9tTdDEXBf9",
  "key20": "3iB68Hp6MMjAbjY6UPwZVGDYBJg9KLmV4uADAQ9NFSgJW1HozB5zDP26HjmnGTSRwC624v3gD8wJr8CSH6QC61zC",
  "key21": "43mKsXqqDFcAhomZ8MdS1qj3J31gi7B8wtXbgAy6ACpEFpDyCAm34RLngN2yy11uiePXi5FmLHy4dwF2p34jXbGw",
  "key22": "2tCmuHqNKgubv59RajEuKnHE8dEKzKDsydfa8qGEAr5zNRsyWoNUpDDcygrkFuJ96k9nrSN3kniHhga4RZx8zEse",
  "key23": "5GPDYbFDD4SqurctMrDAvh2h9f8AmRZNGtHDYP4BUhrXwu9i6UxFKD91PhdZWAn2Dmq4t6jSd4CPyJHBbPu72JLR",
  "key24": "5Q5yphWgzoZknAdpCkkMAJNMDFsTU5Q2zXQNDfoeuS38BniM7nWsUVUrFLGC3oCZRw2noUbo5KcRY516qhfGMifo",
  "key25": "2DzpzVWs9FCijHzR8xuoZwkMv1VJcF26fQ6VT8EnKh9uG3ijuwf9UWXMQ3qRPV4TfjGfrF4NuywdQc9joSm5fZiP",
  "key26": "4XVoP9vdXg93k8P4NGXfgjz2PZbU8nzhUwEVfGvVwUxsTd8GbMGeYkAMzz9RjfMaSDbdiWLToKJtiERMU3wtcSgz",
  "key27": "ACWgarWDwEUSxmS1v1faR2MJngvF9zGSDKE5mJp6APkDSZ6xGChDTLrmwsGEDZ4KokNEhLWszLTQFYVLwJWvr12",
  "key28": "hxAB8wiG7kCdjAgCQv8zBabW3UJbb7PP5YqTdhUPcsmfpGi8oajccvs7moHTYcyb4V9AKZPXtmgUcVQkpvzLMqt",
  "key29": "4GQey4Jgbzwy3G3BuarbJPn44mcZCzWMr5FTYjfSTxZVYtmDhHGn1nLRy9gNMw4Xp1LHbzA2Yb1dsDQ7Rvye5dG4",
  "key30": "3hTGLvJJGeF9fLiroUX411xaHutsL5ypktYxYxqgh4PYKQ6o59Nok4ZZXJoPkXVsXxTp1z73A8jCowGs2jqjwWaC",
  "key31": "3Sb9iG1L1T3jt3DouNgnUkUotJZymQ6pEko5MMxmbQQSPwANPeRNmgpBuAvF2FgVePbHSt61cr8XnEM41nJoRDma",
  "key32": "5MA71sDjLCQbHughK4xu12EVmuLUhwfSP7V4Gwyn4u1AjBYaAVu4rg2XTmkWEHbxuADz9KGE9p4U6hmS3XsszQiD",
  "key33": "553YUSnai62VbMc79553NzVDAGNSKiHLRrSjr3bTaQ2MNaVaLpZ1AcHw8e4UP7idGHUxzwq8UynFjP2DCjpu7p6G",
  "key34": "3AK9Mh1CpyhWXEucgTwVMJPrBLCMMp2wUatjRrcWU9SwaiXfJCCptv7DUp3MF6dLPWXBMcMiAhPXMWByrwSF2jJH",
  "key35": "5ffFNVuTpGdUFfpbSSDoniEyUTK2NFwFWkTgmaxNj9hNz5a7T1eFVAwBqHnKcgfEp92sEcHgQrM7fuWYfTTcXGYa"
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
