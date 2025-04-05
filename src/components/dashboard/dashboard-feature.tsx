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
    "3sp9aERg23a67uak191xh3o5zGDdCpWCPD1sP6biS9qh5ewTdW6DzTZhQ6sh26Ef5e6UdAhbBn481vTZPw3jVFm3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5MFNuvxEpSEXtahyiQn8AegbrfESpJQfVgpNFbibrDTwrEQDnE4nL98xPmET7Lw3uBcswyt7CPvCccXXwfKQXhhm",
  "key1": "2TxFwswix9G8r1ehq4ZBCzTUivmLUWg4iBi1dCEYwQrSEkYsaWUXC5LkBRojtLPZMC596NAfesUiRfQR2pFD1i4a",
  "key2": "3CBHAn8vroxR5heHyjNmM8BqFaJzaZsoWELijmgT8TwxZkJAkXFUBcdu4xRyW3sbr5em7QDdKvZnuPopPfyqsBwq",
  "key3": "4YtGk5ye4GkS7G2gdLN3puGDpSKJ833RwzZKm8ryo4hB67BRiKpGz5KyhH8EZno5MhBgoWAKCf4C4n7zU5aDBHgQ",
  "key4": "4i6Z5ePvNBy78ArKYv9G4xN5B6UoFanpMA1fd1SE3eAcTFYTfE8333VQS3kj2pkmnaRAFAqiQxPapiZdgms1hgn8",
  "key5": "3uFfmqvU4sFNv9GUZdh31LvXCcw1K7TWuJnQGBvNvjTLggcFMXpDp8GVvVKy2s91UpPKk5aYBS31Gdj3iwqpBTM",
  "key6": "2Y9irRzCg9MN7WrCorpoWmvh1pKc2j7ebfG4LanVz6fsxdPBhf28nxiUZZgDnc4T1mAeP1JVRJB2s156Cq2SE4Jt",
  "key7": "5vaYMC1QjRGmpqL5bMa3Huru7kbfRQDmQKhGqxnE1FyRzuPaWbMis5zuyTzDC1vXZCZxprgKqJtZ6zy8kerw48nL",
  "key8": "3ebfnLcy89rMm41F5DfxurPsfEPf1uQRa4PcQ5DyH6TKp3AKxaAGQKfeESQ8tQXT6o2g3nHhbjEHtYs2tzaPt7me",
  "key9": "4b6A3QMjHoV5Hx9mMevcbLHaCH3hUnmpaPzK6Wo6N9LaRaMitLhAXwFrnKxcwfGieYq22eoE3BETv48Z7NfssEre",
  "key10": "3eAvcgkJbpxGWBsXSE8XZing3jfVSyzQ1sTNEJ21NAQDSPH9w2p8sJr6c8ogdcaMNfukEimy7fZ2e579kWxtCMAw",
  "key11": "29vNCBC74AFvksKkTXEPAZqCUAeoBKBnea3RypKt8AJedZ4HrECsCwBtWSdZUiWidVUkeSEhRcM1xSNW7QfVcnoK",
  "key12": "YuVwxJFimp5Dsjc3FdT3M69bF6haQedY23eLXfgm4DXqM2UdLd7grmLJsrmBJWXWiFY94qGqjSHh29hRRyZpfM3",
  "key13": "26WbngDhDvBBmGRq8XYcY9jcXwxMnU46N9gz53LMiBQQz5eMH2imxSFbeuxq5oJYobXT59jaDx4kFQrqL4TuZnAa",
  "key14": "4DcsUbBgdnpiASUHVCn7EaGVGs9o5c4Rd8vyqe5SeAGFtR6bYTBsTizqEdFF7Ekv72WGSdDAACYSWZQrcyshwJJc",
  "key15": "3FUiA58C1BLYy3YvVcYt6KR1UXm7WjAgANaNjxhwJZJe4b34MTNX8UvFWkr4hi1QZZUafUjcUBesycgyNXuxm5e",
  "key16": "5VonBjCzkPv13afZty8UkzsQUYRV2tPQcUNqWE3xVyL9Ctsm5Z5UUgMBCHtfsmRALD2adX4kRoQxVx1KWexTGesu",
  "key17": "2vtAf3Hd3a5i5HsVvCBaRJAwwXtGf6x8LaJ5zuEHkC25eqLcbwrQyiE1yKmDuqAPWTxgix3ubbdVK5NXdZsgizqy",
  "key18": "Y5cESc45bVHVsBDKKXiRKpa5ybHEFJWAZcPfmX5Q92crgC84WEcGRJAvsrkcLyc2Qmqe7idzHRy2wwp2ePTusUT",
  "key19": "5dkaRPLWoX1gnEXNsx5zY6wduAAmqdGEpcJQjfzB1ZeQs2uzob8azMUHqRonyaTiMRNTaSD4qCvetvTwDgDR3KCV",
  "key20": "3KtuL2ytUABT2yrRDrSoLxQnEyRPwnCek6B1cokkGEJKLEerLq5vr7fLy42PPFeCFU6XZu4ejhaU6EXkkGJ7bP6",
  "key21": "Js7tBcwwd9JuoXk1b1xfaKM2UPcPvCTPDZJugzgwDtw9opkuxsM4UszeX2xuqsvWYN3ck1aDL4iFvNrRFB6R37c",
  "key22": "cYo2GUVz9AWMN7D1jpw3Ux7NCNr24JMm3sjfKUJ642869M2gvqSpF1kSwumY5NfiM7a3bJHdebDtMKxcHwBrkct",
  "key23": "28RCPNPvWQmRqqEYsc7rwNp2NMrz7tN51iDTktuf3haxP3SFvbRW6eCRxyWFJoz1Xz64cPaN2953chRjK9xpEE7d",
  "key24": "3uGfaAXNeEQHmChGo2v6GRonzbNgsCQtpYNJpexA6c8QT1idbrhVBLH8CUDCkSTHfVVwxkbojFAXyDtKz7QJAwWK",
  "key25": "2nAi1d36NE37eziEhmDfsmifeSqkYSqWtY5oq7TvKZwoDzBr5FXtLsWc19b1WuUdegByf6jdd6eF9xzVF7Ggt9bq",
  "key26": "3ZYYsRhPvwHpmaZtnKAdNBafavKxrxn3w8BvgMEksGHb1GZ2pHRzW5fnNHXnq8pEAkz8LLwWk3zwraj9ZQQVSNVk",
  "key27": "3A8JxU5u4kN3M2mJ4HT19dincuft98ykYrF6TnDF4XLWts4n6bnQM5FEFHoBwk3FG4HaBpwx5MQChxM82mr3k54U",
  "key28": "5UGTDkxX8gCWReWarFrQgacYi3p9aX3GpHEKcaYLb29UgAFZcfE6zciCKDDrPvRGiHvhdShiszoxucevmdVruJZ",
  "key29": "2GwoJ4nfdvhR8QdUVcXXuCyDT1vh4J91VyqsyqsHbSYmnNZJhPnGcHvkV5VTStCnpbrktyVykCLEmJLhZmMbPowD",
  "key30": "2gbZR8DY68zeyJrssqM6At2z79vZzf2TS1GYGsS4wrsW3xzd8kMyEXJygGPBDeZXGtAkTp7rWdiBQFcMkMrTfFkY",
  "key31": "4eL6xRpuLt84KvzHSCwJ4RKQ2CNCdFyHS6sN7u1xMjkvkjZMucbWrY5hzaNhAahLpujroq3xqsCX9QkADYXC6X6E",
  "key32": "5v8XcxhZgBGVkAXwnQCVF1YcsTTNfpETvMksfvkMeXdCPssFjQLP8hZXjLMGHVkEygLzLouDdDqLfLv136aswUx2",
  "key33": "eq61MUFVXnpJo9JKwNHUD4KcACz93WAg2kzCAmJJ5nsFaHV1wPaBDBnHJnSyutn2S8i5w2c2sSn9X4uFypqZvoj",
  "key34": "52LDPUg4x7uHqjSYNYNz6LcewXEVet5mXJF4SmzWqUDZPUqjWpAjvHwb3TzD5ejVW6BvPKtbQBPwoQLicBCM5585"
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
