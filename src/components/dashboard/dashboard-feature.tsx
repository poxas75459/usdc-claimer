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
    "5gRk5Pmk8YkqgJZxg9TvGYTkdCmyDoQRPsXUQdXs6jKqP37MfhygsP5fe7SiDfCPc5dJusyQfMc5hR9ax7QeoYVY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1RXz9AQyAzB9uWTgxpTBDcppgSsvWnAmntZ3QUZczx8zy9xKxPoEA3n7aqZqSYJz88UZYDCrovKarjHkKqTHkNe",
  "key1": "aaDkGKQbuuawSz9jTiaapu8ih1LL3FPZYiFN3GVXoKyDH6Hn8P3h2q78xoQgVdLfk8641KviehmN8DcqiBDZaZJ",
  "key2": "2z1gCrNztk23FJVcADJh57r2GBnZ5XdZXPkwrFoGM7fxYJGYvf7PU8j6G8bWvCFFmMCmfcq8MPcWaQrcVPEQsjy1",
  "key3": "4qZQ4DzfGAc54W5YGjLvhVwxKuqEBTWsgQJiWocZsG6LxdBQZnmgGquSJqnLkhNUiPdrnwmCMnKMrAumjtCumuP1",
  "key4": "5x4ZQcgwjxHCECJmy8yVM5piiFAztgXrX46GMxpBV8EwPZLCZLwxALyaPWZvCWQ7JTpwLvfnJH7K4F9geDsWy2BS",
  "key5": "36uKxKmWKjBroHXsTaioppW2QcTp7q1aLvf5BXKeRMT83zRvxKxq24gQmn6pUdt69Hq75dRGEBvnH8oQsNoGsPpZ",
  "key6": "5X8w8YQvsg4JE6DFMKN4dFWaVKgQBRwbF68xpvHxvZJtke3Acm7WGxsqf6BGU8YTnokjMJJdJqNhtBBHL93fYy9x",
  "key7": "33XBtqGdCUgQYDEpJ1kQMXba5QGBHLp9Um6jexa9TrwoUVmpvcELDPeHwxYTFxgke8HBqSmMPGuGS2FfAxb3Eymk",
  "key8": "MW4kC4tPJAxo2TgPzuW57HTfBXadzuL91gBkRM31czgqVC5TecFw2YQiVBxTcxnzfMXJBNmVVNS7eJ9TBFTxbfv",
  "key9": "3P5QoLJqgMAEEmQL1xWUX91p4VZHpcBvo4FqVGgLnqBqcfePDn3zEcwGpSqPtZsLk7fAt8UZ3LAcbJ6gdczNLUSx",
  "key10": "5QQvdPKQC2pFnPK7azDHh4JRsRCeUdn4LEHzJkfDa7oYY1rH5R4Z7L7C83X7TkkKGGshknGbryBMvAVoEZ9t1NCg",
  "key11": "4DarpbDd8y8nQUYNsyup4LMgMDFdpV7Q1m9ZjaJMMz9QPu11rWdVyHufh99CLtMrmZ3udJz3dCEbm1GZ5KdgBNWY",
  "key12": "3YDQPUChmZzeYjqAsfxutqtAzSiYasNvDU1nMpjExZFHGVsyYdCrM1LuoJg2m42Tx7qQs5HzAXa8deWhJGRj9QYE",
  "key13": "32XccnAi8xjSQtQM1CEwdfcdnB6b3crvrSxD3HGvkMTF4ab3F6XFoP6hUeksqxX1ND33n8PMAbdG3C5yADYewXSi",
  "key14": "53YDMTmzQDiL78WHPqqdKp3b67JMuFUZTF1PMv5q4xQdchGwd7CrWrfagw6rwcV4v1ZoVTxCgywRuUmKwpp4yAEB",
  "key15": "3tmsC1utrGZEnMJV3L8ege1vuZivd7GEbKLxMkMVginAyewvRDYNzDGRsLv6gPdQvfbxpJ8e7j1U8KBmp188KdnP",
  "key16": "52Za3kiZ2TZ9Sw3D9MpyiC7ojEqq3XfDR1J6v2Dx5LQWVjeLkTDUwCdKsmp5Cwju7DadehnYwe8b2czadX5NYL9a",
  "key17": "3m1r33hkwnoiVTm7BASJ95XWVPKUXkbKv5im7Xj3Xmjrefhh1EeHUi5K5cScxkmuVJcJc2YoGmFCxgZ3usYnGUib",
  "key18": "3xq3nCArgpDxz31kjS6CctPmN24zYwCgL3VHy1AQ4LBo8TVLryWLbvaFSduM8qQTYmEpWZr9QCtbsLUwXWdtE5Am",
  "key19": "4qzsTGE3NgMd8u4jkNVgQw4wnfZcFaSFuKhz77gn4QE7KEPUUKqEUAfNvXEomG99HVDt3MaiQ2rp71AQjhg37PTJ",
  "key20": "2N2Mgt7PHUYtuKdykYAGdVB1Ps2wURbEWESt77KTwKKZu7BKasVrT4LbPR1uGFK59bqjm5vqSoL7rAECyENi8t7x",
  "key21": "UapGP7XJdi4ucnDm433AxDUCGQgbWcnPLDHg9BmtxzdoD2vF4Y4B6ZoD7K7TbdQj2RLtrmoLuiM9xz8DFdjEud9",
  "key22": "2bktBg3LMyYWJceXXBHQ7SP31pKGrqwzqbyBKv7DeLDnH1m3ZptibL2JDpxPfCDwHfyeWyjrwpy7Jeq1FKLoZG1g",
  "key23": "3JN6XEGiMfTEjLVsxETqt4focne9T1ZBLcQsty5gukdnfeEx8Dn7QN7kejEewx5N4AuuJTV19pRjW1tCC6JhcUzU",
  "key24": "3mBi5wifxgXNvjGW5o22usMf1AMpW5rToJWRTSKGLe6MbQQN9yJm6dZUdWjTByM7WHMuZi7nShvPoSHxduFes1ZQ",
  "key25": "45hqaL85K2d2tUQDSpUyPajghzQiVdd6D695t8BTbsdDcG8bssgeCjvVDmC67yVjPUAFmdVHpw9tpMypVqBvdVEe",
  "key26": "2LhkDuunn7AUKNovvzjLS9aw5Fvm3CzYSEqq7esG56kU89zAhywz6E6pwr5CtEpnwsJfPTBa6oahLktPF8ubqLhm",
  "key27": "67Bxw72MftKZ5vUUeeUxvDn6P53pMdWy6RqwHdnwQ5em4T7iwwaHeKULNWDEypCX4S8o2dGgXXcirXLDqZudhAVH",
  "key28": "4N2UZMy9ZabQ6wiDemdhDyheGs4bBhCJN7uVj2EPZxPSMKxBcAvJeWPax4NWktjVMkiJb4gkCXfNC7y56LzG7moC",
  "key29": "4qH2BQ3iCouz781fG5vdtji6xmfJ1A5QiJZfjiy4MJdmQ5Q7Yp84DufyAae7AZT8AtpKf9YfCJQMubSRq27QN3Hv"
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
