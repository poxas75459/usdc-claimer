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
    "5S6TTV52m4rqMh6V4m7zLMGnWZLEL6sDixAWF6HWXBvVRoS9o7t2ieSVpNegxaFgB6Dj6dKtumqMRcpsBhfX9Frd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hoHHcJM2t4sJjXPKDQe3d9pd2CquqQYhms7vatUVaAeYmv3GBs8o8evLQLpcFF2PgYKavASw7PSC6jXesqNsbXx",
  "key1": "4yw9fAFQMo5hkKuSdrGisQpmHbfSMeydAUnX1x9G1ocAS5sVMjwufP2X3xZYCGyHnGuoEwPprQEx5E49SgSKziUq",
  "key2": "263oDctcfDLrcDQRQN4zxpS6ASWLhYCX9p9hmtUtaBeFfxC6hRWYr6cLtUETcfBngKN56iEMjycfGmrRhSpnYpvB",
  "key3": "sMsC2LQBfyCsQPGY28wbSNww7y6nLoeUq8BUxpum4q18ricR32H4ndfmt6bY7nAhWgMJ2VbAHBpyxorP2GK9Lnx",
  "key4": "4NYCzhxRATzG7FgMbCj8PSQygC5QsNcNEyCMzUVgYUHWxyWkpDnbs4H3PiJ6Wc1dRqHwWpGu3mMAtSxvH9zuxabR",
  "key5": "3ErTzG4ADD3A23WNNmxSwXc3xdwEefCWCHnoYEVTtdts1QEdttUiLj6MybYfiwqKDMsJDzpnkFhyk9cUhQ1p5FUa",
  "key6": "2fEJ3S5S1RYvWs4YxtzCBMLuoU9Qp35BZnEfQaMzPeRMUNyN4X6hTXZVgqVp5x2M2SQCMHRm7hTJA9gLxR8TnVoB",
  "key7": "3rmXYD7b93oDKhcjgVniPEFA1hHrcR9Jth8DGsFhuxpAj3JQm5vXz5eQvyc7smospHaynoAtrxbuLNU8fbaVfzqV",
  "key8": "2PdaSNeaMrJuaGbdfsVdZjCfuKNMsZH2sNiuvZKXtMA9xtggmZsoxZhtvTLAMJkwcqKwRSc6FMgktnJTFMPqZHvU",
  "key9": "3iXqkYocpnykvzhXmAHxWzJSmkLgSQyrDibwUYTuT167ZSA889wwdSMffyfZtXsyKPqqUPrQYb5ShiuX97T3aqbX",
  "key10": "2tuv7U9FA1hFU9HpkEh35414Bv6p7rc7ktT8XUwKsCWc8KpYNm6Cxc3fWrBhdbzPiKfRkBoASN2Kg29Eh1E3kQfH",
  "key11": "2DL5175D2vmjsifH2SqqDPrtyNagFFYVYoVvo9Eeoh2YeP6sf2T6Ew344RCExageMmtHFy3TuivF91h2SnAi2UuC",
  "key12": "rRFLUm7CWRBRXJBJ1LED1RFCp4mMq8Fq8VUGxow3ueEP1V2652WyExyW3tNm1fhXF96feeD5TzsKYCPVawSc6JF",
  "key13": "3gpA6gw8CMpPWw3BUUtTDfruwARZC8SU6g79NRo3Nh1LSv2RtzzY7L5AwRfNqKRuxPPG8dwKhnXcPppoX22guZrW",
  "key14": "CXMXtG5AAuZqXWhAU8Ds1N9k6zkKQJAfwZwSKgaQHm9EKP3SrrymbGpES8i6y6Lg1FezbgWfoLxWPLoqsACWaMJ",
  "key15": "5J6sfmreuKsTH6BCsSHKuGBYRWsdqB5m9qwLr3cgo1Y4EEK49F6yAGGtqMwm7LWu44i91Afcu537U6LbcBefXywP",
  "key16": "56TXBthAzWhSyra2gKiyYpu7VtmnkjiegFJArEfmWkQxsDMnjYpn1yzjRVrPKHPSwCEnCoBBoXX8gEFVUNJHqcJ",
  "key17": "2R5T2xCZUA1ufF9fD7NM4TAhcQmFKRVdmPtos2oC57SqP8TWaHjwiMQw6uHKCcm6gtTFodHLYKpdJQ7KmP7y6r6d",
  "key18": "fYFaiAXjTmussmFFJbXW7RQejr1RCFXedVW3uiGwsk4qPaE4Jzrn3ZczgffD1r2Gh2iweSdB2HejYuiQtqbJZ4z",
  "key19": "5UwEYrieBAGJyXwVA8JA29JJgazHvPL7UzSZHEJiuFJnqsGi4apF1SC5LrKw33XwLXcWzx4ZPyVdSBzewzx7Aq88",
  "key20": "ePsNaQdtfpakfD8TsN1Ea5eYXMiR8yrxCEEeEWRB1WguJykrNuuqiFv1qywmpzdpKZXdbfkmFjAxxchv1wEdMi4",
  "key21": "2Y2N9C5mYNJDeGriGeoz4cXJaAFxmczpApSDKdJ2UKpcvfT6MXYf6aUdkKyu7tKkJwpMSxZTYaMRsnorNM1Ymq49",
  "key22": "5nSc9HU6zYuMxyLWeD7YMKKkjMuBRjSTTGKkhipSbCgqVqEawfmQ7bpfcyCk1SC6BLfGn4PZVCS18TmcYQZBwjHs",
  "key23": "5zFhZaRQFEsLH7CMGMPYFCfKPKrxwWBVjy47JZvtHMpvCtWCBLjr5RB9ZW1xcwGfxn2xUcVG5yerPd6ZT1TBhCMU",
  "key24": "52JKAitrdbHaQWUcLtaPJ9J5u3jqenS1bH4khupFUK85A3Qww4aEPcz3XhDtPLwdMTBVdbhpn8A9cnd6uNdcZ2Af",
  "key25": "2ppEtrjtzFfc3ENZGwi3mVoB36sohqJALYBhm6pmznAKxjQRKFkUgC9NYZXHG8o2Lq5E4QUXbCPCyEZuizXWVq4y",
  "key26": "52Vq4NK9pXjHNRFydqeu8xkqE9e2mAEToLGTsfxeWPJvXAHWzBcSMoJUSw3eFitH28AEEs4b6xwuL4mtdVbSHirE",
  "key27": "2WxRFfCSC56ndivfAq63qtmMsihLvxjLFpzesGXA9sAv8ejtXRwDuFwgZmpV38k84wte7hVhnyKe9g4cZ3PSwzZc",
  "key28": "5EHoV7u1vNoKfmsEEvVDTrW49XUVzBKN9EtvJxtmAvB2v4K5MUqyc3KAByHWM2wp6a3Xv7WuqzL8LwR6aY2PausT",
  "key29": "5jfCavF877QdKAs3LCUaTmtYen7FJYKncntBG9oo6W9k124zXEPTEcHSzmHF5gBJDkZzc1ENwZzfPzZLdugr5yWF",
  "key30": "48K2VdwnGgdTgoFsYMN1wCdtfUQE3j6cKV37qsbpsyN5cnbqoh8v2c9yzb3mUZE7CMtpq5HJk9cAgnUHr9QdYLUp",
  "key31": "2nHLgDCUY7nbAvK7azVisS6jrQbKiDrAPXrTauKcMLWrgsBsmSgPBXaB6QJN45kSz5FjYfAHrKWBJLgxmUWToWG8",
  "key32": "4B8so8LKdzcx4jPFjGoLyWE5FNWEn5h4Z6D9Sugt2FQVwLMHfUuCDciwXnXCYefR78GR5TzEBHnUzyBzufcuX2ML",
  "key33": "4JXVk1B6q664EAqa789cK4MbEkrUrsmDJWTQwyew7UnGaZR99WGDbNZHjnawKuL3WD3ic4o9gexAp7f4mgFT8gqJ",
  "key34": "3AkBFsEXSPNr8DZmQsYQTShSkGEq6HCD9k8J7LERsVms68Y3eD48zmaarAKQSYyjpnwNpqat6icRk9pRe3Eg1Qgj",
  "key35": "pLYaoUVsGJDYNv8SfmtXDVMLacibdFqNQmwYpVyXgrSUFtRpcRGcxdFVUFugiy7v4wFAN4d93NuyFaaqJveqnFR",
  "key36": "5pYhf6esoprhoye3Nhv9RQzxduWZ4Nc538WJS93bTVxYBrGRGozC7YGQibHbNSGqicsnHCSjcxgE7PQS7NiG6HpM",
  "key37": "297ugioC2dHwv2fYo7fbUxuCpaotzXzQcwpBteqbTvEhJRW6NyRFUQUxuXNKXZCZi2Bjy7Hz1HLhJ2KgjgjDLbNS",
  "key38": "3PvMLKvR8azANKyVm4X6UWaSqyJkHTdZZG6hqjsp4y7ks1sFRPoXvF77qcxHkwgDfvTrR2ENRyvqmzLZSpm89pUD",
  "key39": "4UJW18ggfFWDx5uQu3TsWYNnxd9nRZGG7rdzUNaDhVMaYQuisGKkirnVsn8js1CMYA5WMQwGWN39h3cx7sEQeCni"
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
