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
    "4H8z21btuimQ5T8Tf8hXjFC3XTzgs6Q227c4L6a1eZ93vj2TgADHteQyKJ8BMNrHjsVkxficf1KPBVUmgL2AjU9P"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4X8FzHVmUPzSNcUgUamfaVPm23NGtka9a8GSJH5LTYxCNYwyjqUeMWfRZ4v1HHzzCNdqmLMKMAGgYoXJEULPuiZ4",
  "key1": "oUYcprFNndkRp1wVdCbTodkKfwR5zY2qyUHuCBxxVgmVgXLdnXRwHskad11SsViZtLhFKxAEQUAh6P18SBa3BxX",
  "key2": "L8T1VQeAcvex1s4URYtq7Wz6HesnbGpRqpKkAoT7PqnQpPt8vCiaAqkFFwwXL2BQJkjhGyqoVu4QhVptQ7SpJXe",
  "key3": "zwAmh8QdnBUgo57fGSYaky8qjfL4tkcYaugzxewQ3cjutR7ZLLsUk8V4ZtQ4Ww1BKRGGpdjBvBJVTXTrYqKy34c",
  "key4": "31T3s54wrTkgLnenGYvsYdbpFAs4VASAnDiixksjZCtGCRKwwuM772mcqHzoY1JHHbvxBfCXbVgVS5cTynbJZ8DF",
  "key5": "5FnvY7U2qQrMFeirVLnpCWVgqVBX3zDr49PnMhTnxENspoke7Fo5gcjR7tsay17xxSwjWPizBnkHZvw1v1Hw359U",
  "key6": "49N2psBdMgBKKW4VpnPJD61hNrWmNafz78ebMQTBcrMHPZMUCaJ7GceE9H5gg1inRdodbSH5WFqtZYvheaK7tBxY",
  "key7": "4bpZoSEj1Ssk7BFNsNHhS8MvVEMgmKyeSmMKNGc5YZFqNy4LrJtbJs5YaoMvwxKH3ZsnpYWwHStXQfGrxfhRuhoE",
  "key8": "4PTP4nXM1PBqoieVYDvDpbRhZv88ALuZ6jTCz8YXvToexhyTXGWgDB4cgbhC9xhjfP6e5oJaY2Dsyz3QusThP4n9",
  "key9": "vDnHzi8eYTGbyir3suKM2jJcHzd9BFgd8feUhTZqCdLrmZyfhokmN7bzFdiSTRFQoEJ1Getue58CjhdSUf2rN4D",
  "key10": "z3sDHEwHQMkS8fMdFtCgm6W9H7rU2bhnDXunQvbPQERj5AiHcksquW8qrCYcc5GWyij68SQjo6ZEqzWCYQcNLjN",
  "key11": "nWRa8MpYcRhWjEwCG9ib8dF6BDopUhUZLiqnhGGaMAgGS8ro8PjASwuFBKtTXHhJLgeis7wbp8RXarew8GDPqDL",
  "key12": "2TxobMBXoWihC66fwNgirNe45gHWksQrBvA9hAk8rRUUaWw73NokZECefu81gg4kBCq4w8haRnK1XnU6vh3vtD7t",
  "key13": "2jEwKqDV5kRHJyrhxqD8F55upwsYWJjUj4DoRw2jSncST3T6mDa21dsYxfK26LNk92Cafd5V5E8HbFo7jpcnAFh9",
  "key14": "4rgT5LK21kTLE4ZYxJUvANdm3fnwLauVU4FbY2xXD9AGZdUHc6trfbw2bMLbuRqDVuRvn3yUdhuayjfJmLJwQqhp",
  "key15": "2N4sozeFS8RAKmiPUVXhirLNuetuTm4AZwVrMDEXcJE1fTmRQy5HFbT89hHPWJ6LDJPZTKPaCNSkYLL5LsLr1WRb",
  "key16": "4uSfYDTBV24eo4XNVN6RsQheJygrEn1i2TceUaojuCqDAmFgC3dSHgsodGt8d95SXn5h9JhEvKf4GJyYvFUvzEEZ",
  "key17": "4YrNaGnToFfaCvcjbpYejzxnm5xrPZcGFBfd1HU68e2oNAFjW78nkmEoPdbuExszedmZVUVD8WBkkYyRwfYXSZYH",
  "key18": "5Mn9aNabtu77r4xSdxTSJ5tGbKj7CZPW83GEfT8CtFi2xhsR64oJvXDSAKxdoczR42K1dACDn5TvxYxoWAygYZCT",
  "key19": "4uTHdrB8XFWthfPDL74pDzbwxj1BxrizLvL1cpQkpEqE5bjSSxZ1NvNA4aamvcKvTpu4yHb1xhXhgYBRD7MqNiMh",
  "key20": "3PfVuJmGLVcDraxVMwhcwocrcgp75WizYfnBvav2xPbgSqoTLxJgc4YCtQAsqtySPuVZZ8Y6ote2q68ZXs3sTitN",
  "key21": "4Z3Xy1mV8N14mzaeqzKFdiGbTkXSwsrnb61sjz2uxbLYjHBkHQhuQFA1KHGPjJvPy3JbxTuchQtnde3aQC1C8bbJ",
  "key22": "5G47fiB7Z8Q64Yt8YNndFKzoDQvEPoHUYEN27rsfBXgQTuYyCrLXmxvokHHCMrWs4tNY9dEWFgB3tqG5kiTSBsFo",
  "key23": "2qzMTZNJKeY46mWJRDqsDk2s9E2UBHcun1mQhuNvWXNC3ZsHrfT82txhqEyn1xbED3Kg9k2EkVT4z37saCLcPi6y",
  "key24": "3xCmXDY8qXQwQk6eKAADyRh9DJmAojxtF9gfHvgFv7HSLKAQio5VokzknJKVVDm7eNvGxJzTv52v8RXoaMRjLuXF",
  "key25": "3ZteuFeYm1GcUJn5e2f1VdygdneGwuHk5MY6ypq3f4EP47SFSrU47bkTtXwAnjQRPcqWKZTSCaTvAK42qNVyWR9N",
  "key26": "2S8ddJwbpjiKZfPauCxCX8nb8Pvjh22rcAV1kjppDnUyWqUC1hvpH7pzGng3XuG6a8kXYnChCB49kUDkFk9yDhTb",
  "key27": "4bujsfikXUCHd7ziDt1jbQeC3byri4mUP3dfxkteFXqAQXA8mt2t8iZpaZhXFiNArRmHVHJTmZUcpYPVmaKy7XHW",
  "key28": "4k2aNbKVEdEwCnVejbXSpaoswi9PfVAdgwRmPuD24iccsVRcoBUEX4mqGd1jjFJi1tJFWzELEomBMJp37jCoiyBq",
  "key29": "Kk5sK8u49cTyi2JyvFTtTgq22hV4X5c1ygn5cKAkHoREfj1y79RfzcxjnAYW8Yseq2J2y1AowAmWc8rxadQMqrP",
  "key30": "4SC9sa4H9e95uWBH3kUQWVAHkYPuRPoY9qtvjr69ua9SqMcLjr1vsNYHpsF2KBaJ6uavfcMG6bfc896N1pNXRJ2n",
  "key31": "52QATfxgRx2aDhhhA91xsYsrBFGqmkcag5sJXqLqP6eSPjH4ApzH65GkmyanrzamiCeFEFAdjmHd5ZhMvWQhgbxr",
  "key32": "5yFWKv4bQVmZhmg1oWBTPbo5Cz6oDiRFz8vU6yLZa2x7XMBibhSNyLWLT2GVaH6Lqy3CfqvyagynpScaFCXCMX2R",
  "key33": "Dta3XMLP3nYNKwgJ1LeGdDy6PTXaptC99Gy271SgFRufpgK87abJmrMjF7bzzXZCB6P9zRiGPdhbxiUNE6tfhCK"
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
