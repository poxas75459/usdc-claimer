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
    "5J9XFymMLQXzxXiZXYLjNPGadyYz4ZDmczAF82iY3Vfof3Y3co8Dxw7s1RuDe4dtaVv2UdRY4x2uvX2ZWH6sr82b"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5PpC2xB8BcDaYPvtMLuyys7W3oGnx4DB9EfK69erVNnH5YpkzF63aLfqAz2BNm2JgMmbW6vPvPaEGAC952LGkwc8",
  "key1": "2Chpg7yY2vS6DbYeYCyx7598U5gi8Xru9agtEhdMm7PqkS5qKtgoiQHxUfvU2b79HmmFB7QhnA3uvPz2TvuWzoiq",
  "key2": "zwvsHYoqoxVKi5a5xxARbdCxgsNvtFF2esj97J9LPocV3oFSKEkP2764DQ9KAEYZ19AmUf5frCbtXnhoX6FR7ta",
  "key3": "rEYzMiNscNCZsJQowzjEHdmFYodvw8yW9mqf7yL9QzNo9PxhCC6G6vwKfHVAo6TUNk8GD3cxKJNPQPSSPPiGMNL",
  "key4": "5in89M4EbBweQ6YqvfXkmto1cow6XCiMPRURFrEXzAaZ3vUpHubdNKoezV7b9Am1YQN27fvSin5z4JuAhd4fYtd4",
  "key5": "mjdxaLEyJ28b1JnAJSoFyyiPUDy5TZLQNdXEMPVL3GWd5P3FW8HuArKeMik4oVRtnraxkLiKhDV9XUmnaKXk9f8",
  "key6": "rCFMqcsEXxNRbPCBDnueBs9Xr8ioU3gQkGayC5qpmz6NVTMdLGce34Nza4rg5wFVvLTwq4m4bX662KnjnJ1RqCy",
  "key7": "5dk9NZxarHXgVHLhzP662oh12Hd7epwnysEAfoRWjF442q5v24xtidQHbin4BKdty2RbLhvKs1WiAyG3BDYjdGDL",
  "key8": "4SM6iApnRi4kqQd45dKgPps1zE16REvfL1uBYPExVyNXjyzCyn3nAH1Cw8ZbUGCKodeTP6rh4q9geqwWEt9ZPzKp",
  "key9": "SR6Qzxk28CVUyzqTgTCmbh4EWaVKTA9mrppt4bMRBNbpfNmvEa9Vnrnpd6bAqZ1UdrQ5Kw56oB9oYmHxq9LN3Ui",
  "key10": "4p2Cc9S1qgH7NCofjUMQfsWvNbu9Ka7JRx4Hw1XsMUJ3CfbmNrqpyQyiL17EZ2ZtaCv8VgCHYHetoTNwzMPNvVtH",
  "key11": "4Ka6Z3r4pnXwg2qeTbZ8ENkBpCpHZEAG9tboZZLsMCn6mC43Y7KVAnks5Z5zzXW5uyVtpozFt2BQgnfAQMfGVQYd",
  "key12": "64ACTLuaceT8wiMQW12tw7UXbfzGUXLZ1SqBaktzuLMXiZ2ffQHD5nV44GtXZdWxQd7nDyVUC3DxEbYtjZbUg2DR",
  "key13": "Mtu2cjf3XBsffg2JuowDmHR7eMxMFR4h4oiz6AkD5djxPmH272xFP33jhuTVdkfEW5zHY5YDabmiYJQqPcF6ZVE",
  "key14": "3FiRdJ1REQcsHV2iM9dnZDQL1pigtGqBbrqfjGxJJEwV8dNbQjquwgRH2rZxn7AjvrZXLRvo2hFgEMbxxjmaFNdu",
  "key15": "3E7JfttNNbGehM4kzndVcdJQhLNJsFJU56pjBZpo4Ua8XZ3DjheE3eaDMLwSii5mDccCqKsTnrsqrG3BqxvVuuDi",
  "key16": "L3jEgJXta42kiGkwyUT89dBUt5aAoi97XY7arU58VhtmtHB4p1FcFmBpFkkeWoCrZhiooAw8ufNohUP4wj1JgRB",
  "key17": "3VnZ8SB4EHfhL8m5Gt1DyYeJg95KpQAvpDJaacSq1BF9oGDWT7gqqJp6gkrcExRVSKaT9DDqidPhV3osfuhsBM8M",
  "key18": "35SXY1gbmECcmTowQ4tKojDSmMRdYEiJabC2mwtwiJxzEhsafw17M3KKEwgSot4NyYbnCNrzqSzVz8jshdhpUdKW",
  "key19": "Tokb5cPxdPztXNZtjSt7Ga5EdCoZAM2dLa4QgoUzL26bZcSbYDqpHFe9wZduUkXkj5Bx2Dsu5uqp8NHcsFn7BFv",
  "key20": "5Dnd1y9M27MqaQychUYwgnHAh2bWVfBdLZQ1F96ptpsTPAfjgNXJtrhgfhfPBNjCUePYNGtQfGYcKzte35g7UEjP",
  "key21": "3ngSJh3ZhPT38b2XyMG7VXcFcssgdk7RTpNhu7fskk1nPpunyJQJvetJGLa2ApKQ5i6NZcPFgQ1FZT8vHyma1SJB",
  "key22": "2Ra4JAWHLXRqxhUcGDgxnpy39eqeNDUPBnAHb4RuDRbpvBRnBKJQWhHUMqiPjKcNsVjcRRkYpMpbYTxExfpa86BJ",
  "key23": "2zgjnwc7FkVRRFxAnmp96xDrZ3LhxcLv1CjUE7K1bM57KVHmmwDsB74pT8LwvMe1236Ryw4YARyCw9FGsV37ianX",
  "key24": "4KVWUmCgvx4KdgNJrQqbnTv5PfH32Yq7hA1jKskwwHSmtH6XyKccpu6GxNRfgAMTc36qUC7GYRtr2zpmtLTkNtbp",
  "key25": "1fJVrW9r2Ws7scWYBYLXPPTGBdA3wrckjQFGANai6R1qoQdwa1L43Epxh1ASrJWM9LJkALBVzwu9i73NHUw9UKu",
  "key26": "2GiKMWrCAiogmkJRSMBE5WZe2PzkiNe5kcLWdkbut3Newjssi1nYhrsd12L52KytT8yTZXLWssizLTN1HDQGHYYM",
  "key27": "4Se2F7gD8vqWHzLGYNtTF5X2TE5W5ov9kNGfEAsawAn6ABHABeiMwQX1SFwxp2Jw2WLUT5XMyEwUN9xadvUX6PRB",
  "key28": "4Arvfy1KsQvmhUYU64fJWozF3JeK8btPUyZjd9i7MHpS8z1MnYzmLGhhEbX2Qth3oA7EutFbVofZB8U2ApNkfhW1",
  "key29": "2nay5D1NNphBoFmezBhZn2a5h4j7yqEjUoXL81bXwTWxnzSGNYvP3hEhXdodtuZG8fZTdDT2XdoKLk2LWsq7Jko3",
  "key30": "5NGsMQdfu5B8vxJEHnVx4aB3NCPcRcb8HKuvmw2SW9jvJ8f3X3sYhDu4h14wMZEENZargoaKsGqRMeZcXfHAhHvh",
  "key31": "2i46N9xx9HCapKv81NawycJt5NzrzyfL7tvBXMBbHCDjmiTy4HLnEdP7UPvJsWP1QKCPU3kLenXcZEqGJV3FWzeX",
  "key32": "cmZF6uwVXyYummdYdyeu6XjQcPn5X6FZRS9cpdFYRn7o6xJ68oa7qQVXdqFdGGHXa8qkPugHEPtW9M1y3Y82acs",
  "key33": "bqvak9cUY8KQoyKLW4h7iDSxi7uPRPNe6MQpto9pv1am4p2RsfrZfqxyyGTBfSNFemFpz7kuq4G2hehWkTTFR2i",
  "key34": "2jbcvrivQU8dzPZuUa5RXrwtPVS3xrASJTxM9ZgRLcELasjBDiTaXALQPGUxbfR8qGLqCsvwJpdaVv7KoP6rorMu",
  "key35": "4AUkuYJbZqhyxw2dhjH38R81UsiifsMrgnRvkhBEydzChBFzNs835bXFDnCWVvPpgwPpCB4PYBd9oLkNg8oGK629",
  "key36": "5wBFbAGpDPUE4KrKeDVDNomBr229jvmoRWbnRVABJmojvu7YVYnhnFTdK1aS6ka9EbMxjPbMz4AmAB7TmYdBcR9W",
  "key37": "2jjP2gYdKZHWhmNRkVRvus86Z59eMa9r6GXVBCNxfCefbbKRAqKY2rHxDmTFza15xPurGG88a6KhB9TN27ZFR1Gh",
  "key38": "3VHJc8RCysZnKz4BTSUHAm96TuUd8TVpwKEvnpX3gqYfn8SbNKD4gSdacoVnpGpmE2fY6fk51XHEGKowqeVZwrF4",
  "key39": "deLseYbPcj4wRsPyHCCFYax315YyqXfdjaQDopziwksdTWLffYiTPQfEeNWofxzbkMhe8VuAsZry2WEnKnAXgfx",
  "key40": "2f6FtFC7QtEYMWM96Qx2VTuM8J1YMU7saqKHooK1ps1H3v9JSAgqbnTEsZYGc3yBsmbozyTu9ULqB4JjJzd4qmQP",
  "key41": "2FzPwcNGmfhkGUN3Vom8YgvsU6QyJvEc6nRvqGFRw6fnkp2jbaWBAE98nCKDuvbUDJuWrDtMQyniFVMYmAdwmQK",
  "key42": "2a5F2vbWwDuVQbnd6iQiKpw6rX2cydnt9x4cmqt9zgjAvCxiK55x6Zx4DHtso7APQqJFgYdp6JdJxxcn9oRaivA5",
  "key43": "4um5KL9NG3TzbFMg6WYU2LgqhWVBkEE5C1ojEyeyQ6E1TFZYc6JZiFNAJK4hd8ytA8bczdcfYgAeEiGUGTzx9Kz8"
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
