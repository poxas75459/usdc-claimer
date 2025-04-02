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
    "5v7ujr673qa6tu36LWPBPtUsWHHuFm49Sv2GK8Hb4Fuwci5uf83MQmsYRXtbsEqLka1Y8QtEizoJYFMjWyvxMSxA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26tgkSaJQsnoKad3HL6dJkYZnDbEkMAuStACfQ5xsvRWnqTzbJJjimNvNbAv6Bqq5V4deAZcuZ5m2L4eZ5cptreg",
  "key1": "3DXYBA21FYvkxh64Z1Sis7uvAYuTgCtGJ63TYWC45sjKruvGo3dZMwAV3AnJb77YcDB9bL5qwkSjCW9YShE2MLQu",
  "key2": "38iDCw8veGJAJqHFHi43SuFWcucQzhGAbW53XkxKNMRzARt2EtUt3qpuGNdvGFNRsjSi8nPzBbsTfLbn1J798QeD",
  "key3": "RUKV5BEmuizYRYKiZ1aA42n1EYM5yuA3hqAD8AqsJkYU7FFhJ98dd8vdcLjBwAqPvX5DcjGGVsWbj3TeCKorTNr",
  "key4": "66NYy1zVZcsNAgJSwUpJF5i5FDypLLg44RDhPtti3x2kdMvi1WYXNXw2ikXFX9g4EcMP8EQeDRYvWq5mnEdapf3U",
  "key5": "EExGYpXTSGEWv811noWTMYH6JpiU2oM1vH8sigzvYFn1otHrBEPe3eVCgiTt5L1YbW78Tiun1dVUkLFq3UZxgQg",
  "key6": "4PahCC5gqkg5TpF1syHeZTZgtemrskYzhMVL6e33iXmZzYxisGmTc2ELwR3843jYg5So65utiMoqzoTTmXzC2DAh",
  "key7": "5GmNYdZMjDLMwwbtAekzJKA8daKT6XMpPCCURz45PxTnTe4HanUDKDcp3u75gpKqcdbuWvZaCJikS7EjygDxqWjn",
  "key8": "vs52amnajtPs9iU7LTiMvkRzYj2r5kAz2XZADz55kZ6t5LeYSw48RY277bapBqSUyi8YZp9VKcuufn9RSG3yprN",
  "key9": "G4qvhdyuFick7FkpLTp8jpxZLqUfZA8TMVNdZL9TCNT4gf7VrygeZmgR38jHUe3XPjwD2oGseitxQY6twBWyM72",
  "key10": "3v1HKoUMJzvyWH2GUMK7WCpYHVd8Pdi6EasoJfWmAgF98qxRJd12uMe7YT9eHzt4rYKFLGq4vCzm86TZNexcyGvC",
  "key11": "4e2PKz4cMzccsGz8EzS6KjGgBg68qas9CR95Jfm2VzKAWq4RHF4y5Lfe4aZmTJ5uH2Ydq7D8V55SG5doUTfjVeyS",
  "key12": "5yWWJoYqZJoZCRa2jML3ydWRgzSvSu6DzV93zcyKJ2UJHjhnejMNA4WS38spcCtKTz41VHPdWGQiJwQiGWLxaajC",
  "key13": "2Thm2BMQ8g7SBq5rCrSjD1uG8kKRDhfaUVNvurEWPADjZgwaf8RW3MMFZoAJarCR4LT6GxXQk7NntBCT2WU2XmPa",
  "key14": "28eFRZ8zrwwGPyCeceQ1nmHFEDaMrNqnE6puYZop4pkHARM1vgNv6ukKRaEUteiHEN489imWiuA4iR6J1AWUtbzR",
  "key15": "5qwbpuLNDMgqbCmVNXvj5LEMqFxxWvjrxN9KLZdWWUHWkecLBiYqQz2XUphgcyBcisoGLcaFGVTSYhuTnX7iyomN",
  "key16": "2xgR4hzeHZBvT2MNSJ9RsmztaFi9YEmfuuCAEvon4CWag6HrXnB776xgE7Tz4Hf3z8X9njvY2xVUjHtXTdwTf3mt",
  "key17": "3wQNh5PZNykbFL2MucvEzNXvQughwxXLeG7tWwM2NX8HWnAACuKuFw3ia1S9uWqr1kBtYDwr9EyN6fL3Dw6SYBKj",
  "key18": "49rHUHKrE5wutMxnkKaKr7kpxZPSvicu4XZXh3XanTFsFTiVNNkUxnLRqF1BUMePWT2nkwmSwQaqweDVVTK3Wfyw",
  "key19": "3gtu5RKHREEKhw7Pon2aXJbyVUrfNj1J9C6KrDZCj7yMMY762sVYue9ShDWph7wgwGonzp7TrRiTx3iFTti71Z6d",
  "key20": "4edvs6wmKPLXgcfYvdr9HttR53MYMZ8cSjrqChyyNLqXukkGgD1UCQzvavsUUL9nS9deLiefi7yBvdCS3FwQc1n9",
  "key21": "2sAHgZ5CJWssbcQ4ifhvzCLS2Yf6tpd5Qthd9AKA6UG5232XfwH7oiUqbdaXw4g5WqJHzR36mEw3cXNWyvw3a1Bg",
  "key22": "2J1dEjpsfvJn4PUkeXCucSPEhBrJnz6wCeHHJ4RkhSNVTLaX2nvBzHq7Xt2WFRmM4oG291Wu9d37tByrtyoEzHoM",
  "key23": "2r1MK9gZBqGjA9zGtJ5pDrJVQ7GVK3DnAw9y8QnSGgyMZEYrQH7Js4qoavQKcNg4Nt2gYSMGBP2swvdSsQWRCJJr",
  "key24": "GUkqdZviFLNxAHF6YpmwAwG6xddCAUcs5DHcAaUeDE2B3nRQVWo5DsRp53gJMyd5RNoqLUPsFiPufG9aMWdABWW",
  "key25": "57RGqkWe9E5PkuuMjBBXPCG4g1ebbSvXEnsGdx7QS4QAP3fYia3ZtbbniUHzsruHDBKE461DWBbzeGvqUS62CHmQ",
  "key26": "5icR6MSGbiGstGYwhAzq8HDnCXu9R7zFhcu8pZT5PpkpxrxLrREArHaJ9LGnq9nQH7UkqHg1FWgN1uji8hswhYpX",
  "key27": "2pZFmbakEvrRtdP8hxhgFZjiaJ9S1YAgkMpPaHhBWhGaVcNZJH4MRQSpiQ6eabj6H5W3zaemb1Yf8ULMHznGHYaR",
  "key28": "21rrMdT5fpzbozdZXRtAA8qM5fwiH437vB7wrrnapoNivvEcck4QZnboQJRPZREs9J1w1pC296rKiboDqUQ8qeA4",
  "key29": "5DUmAC7u9VV5dL5wDmhJBepQZae448ZhDBrQa9kyXtooA9MHnLLHiqvz3rWuk4gkhuC8ddsGD2sGTJ3ZgVY8r7Zb",
  "key30": "3WAimkDoKaT9SebeXwjMnFF7TKYmwbeN1tgAnGoG4pC9bmTZYRSWJTr1RHFPq85sv4CMuvvtWRmP6ADDMAnfgG1B",
  "key31": "HEA9j4WJgRswyE6GwNktq2CHGDBqfzqWTuehWUGQigxnEmJ47REvs5QkMYAw4mh6XPV4mxjaF8dNkkp2jruyz5i",
  "key32": "5aQkZfdwWJC5iR8dnH6JULgywfmmzHYoxhetv2sNLKKrpb23e2xRKjow6yC1sMLLkxf4wdLGFifUWaTaS194W2k4",
  "key33": "5weuAL57CZoguyfr9AZ24cUR1HNwVEMrk89fDv6VuXy5dUHgexaT5ZFRGHRErdnLaQCHo4DsCsN8Uoz48haNfubZ",
  "key34": "51WdMhXcPeZvDb8FZyaiSLCHcVKJBZbYFy2N9Lp5GDSPHGaqXw6u1QjdkoFZSXUBKnYRxd7upM3PoFHrCS4hGwFJ",
  "key35": "3xVdwGJrNMSXYUcV4mgvPeyNRApEhxCQmvmXz6LqPM3V1dmiW4d8UU3FcLCjAJQ7S5Lfyp5HcYxWiKvLQ7fo7J8z",
  "key36": "65tRnc6GvBwLV1EcWrvx7PDnG5V8J1zRambEnRk6ysoM6XLF9W5qXMuWNj5amxeAJHxF4MxpmDnf965oSvn3Bk9Y",
  "key37": "3YGinbrjz3GMAZGs4wZdihKKUQW6dcxzLkkWbXa9kE3dyLY9DiyevQ4xHKGZCWtkP3E4m2FUdiy6Zk3uh2XaahsL",
  "key38": "3UTjeLZsa75gqnV6VN2oTdYHbgTnb6CiEEQi3eYA7EXozGM1cUSmyccVc1AKEZBvNCvEzRBgsQtiWacUJovkS19M",
  "key39": "57t9uiGMqJMwN9mJLK9VNpRcEoimhReq7ftM115ZkRKfHxAD5GfDMZ9ksVu3eTby3De35U1aQk8pekVyCfvZGMmc"
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
