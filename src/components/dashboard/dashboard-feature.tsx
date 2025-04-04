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
    "4enCbHdSUXQgzNWpJsE5rgZx2rgsJigkXSEs6RjBdFhCQ15EdPrzHfgn7zszDsyzD9zaghanyRL9VVvE988axwof"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3asffyQLfjwykYENY6SrDkjEYzTeiLBcaUUw1vYekACi4Kr7eydKoBWZxhgwRKUMe3fAr6G7GeaB33iwt9M821mq",
  "key1": "5ggFojtKR4kgbRSRxboVabzoujVgLwKbq5HxRd8uMbh6atDpVQoWcfkcFuubrLSbsDrZKg6r4apPavnCFnVXdS9p",
  "key2": "cgvUgY5ruzA3jJHNrpSYi7uVPTnt8EAVgsVaPHL7gPD8mv26VVWi1nwpKh8S4sertJZvTvPrrY3HigPuEc2GN4B",
  "key3": "5i3TU9UxeKPR7Pee4PJgc4oM77q1h6RYg4LXwEEFeqservV2RwQxbqr3SGEBQ6SuHafPUb61rG33YpoNxbLToV8R",
  "key4": "wJYdAdaHHxGd1BAAzhzhW3Am5MDuZ6sYUvEbjXJavH4PMAkybXDipVRwKFnn3KH3je4XHifSH83UybkVWS6BEWx",
  "key5": "3ZQ8vgiCVEq6x36YC9BkRtZjPCvwg9U9KcQH2qjBnv3fFknFJpdHMAsxSVi5MDhPW3fQvD8YZEQRsm7ueiEmVr2x",
  "key6": "4LN2TLXECq1tpygmNBmAjHgsEZE1Uy6qtcwUW9TC9sfyrVVTRWLwwwJecxCnN5QVAZ7ayAEg4sHJVUAXvXLRBtEk",
  "key7": "38JkAjyJeD3evpJvi2fPC3WvkpQNQyeTvMMYgxdvSi6uyXs7Bh2witenbNZhMeSKT9m1zXC6DghLwHQFKEcahuLr",
  "key8": "38vCQaquYnocDu4JAgBN9B2sFmUEbGSM7mpjaXKVzF1G7H7VsBivp9BkszTKF8noTv9dchLjuLCnY8ShP3Z6dPZj",
  "key9": "2adpMQEmjxk26NhGuJPtDjVXFm6bH9qeUEjufF4jRoXidXngxdarj4de76nfaFJyfvjLLuVJUARGAc7P1PPLU4hS",
  "key10": "noLsxZLYG99MqcphQCyTQBNoKUtNT562r2711NxjZNTqSgpNQ4eEAnsqiGqBpcvEEArxrruCxeiKnEMVWfHF7Uz",
  "key11": "37k9HPUsAL3HaTHjpziFZ36uAVmY98XBEd2jiDsv4a7UQ8fuE9iPpWN3h9JvjATfjiCcqzgjiGVQf9zm3trPG6At",
  "key12": "2UrsNsD2iQUmpMh3B749DYX3XuL6WNt45tQp9u49sQHaBwrr1VGAY86wxypmNBY5c2YwDCydWwkdF4CQU1s8dCGu",
  "key13": "1xn5AMGmyCT5g85xJnUcHBQuyMoexb5LKuaMzKsrLjcK86GLrobjPkegH89QcrbdfeETVLwo3VWo6zgfHz8kpdv",
  "key14": "GbeUke4cz6dpqFrdBTBjFhFjPLut3P2UaD1yjRpLqnBALaV8bH6rvSKpqor1YNTqWmWMSeMjwmjFCCUF7XjeB3B",
  "key15": "5QZ5DVnEcEKVs84R9KK9Sw3K6TrNsqjtFJwpE53gdtY6vN4tdRGZivgXMh5MUjjX82H7oRomhM6zHpb2mTMupe8S",
  "key16": "k4Vaj2fZEbAWVzSzMTN8kmFgaFp8yZpinJWiKR4q6tMvSaVNWiF8JLX5peHXN6LUA15X1GC9A8BZ79XaTUFRws6",
  "key17": "3fArgQER65puKsGZkg4PExEKnrxEwGQcgUs3xtaz3SyBeQtSxgtTa9XVyZwHAgLyF4kxz2Up8waxQudN5QLwqZfj",
  "key18": "5zZCzh2WojXibU4fmQ9eg7aazX7xrCtGtbzGPRgaSh5g27nLN3V9JyKDA9xnUdid3jSKEhqadvp6XKEhDMfz1VH9",
  "key19": "2a5RseK5AGYuvNmV1hicVJ3kNg24Rn6PFRgkYrrvFtja43Acyp4RSv1jLPcq7aMTF6SS26hxVveiSGwADpSKzhbw",
  "key20": "4tfWyyig3YakhBhBRx2Q4S2GYeMreAgBGEjRnkkuWphA7c1jgjGqpyVWTU9NYGySQNne9UQ31W5QWufjVU4Mh9S2",
  "key21": "jAYTowkRJ2VZayzKdhG72xjC3NpWfeW4RnwbH8QbsnemjZj1z91MzHiYTfBULwrRGcNBTf8JdtxikNKGfaCs5Vn",
  "key22": "298z7o4M3YhfgVuAhqtsbTZWadxavTdNQ8FHgNdZ8hnR1MzeEzmPQe6Hbjn8uTPn2qS4YUKQ3j3ZYD3xNbJFKgwa",
  "key23": "2bWyDdp9ucqWz2hY4uy1QwT3Ewk4TiPv31tvuafL6eJUEg3ts5dd1nhM5yMdo1nBVP91LiUr7bRfyGHpTgVhecbz",
  "key24": "2p9jPTFuanstZ4SR5kpSqdMmV3BR55epaTTF7EePMcVaNDFn1USSN5EK9KGzVYBXdwp2PRmFjrG6RQv3LiFjphPz",
  "key25": "24Ep2PwyUyR9q4AHDkhf7RcS57q7QcjM3kc68nYPmhUDz1BBbMKiz7WRKM2gVVfVtSdUBrerwzNFpeAY3A1rbtiC",
  "key26": "4eenJZDJyCv8No47KsJB8dDui5KBDiDYnY9WssnAZschsVggefVfW6Ppms9xWRHpBHoMWAhbUn3AwFHXKiUKCLY6",
  "key27": "59gxSTeiS8PBwRdV2QX1YhQmQRufrNMJdUktDFjSukc3LSKung9gaQoMgii8j8gHfe4s6MFDkYsTmeo4SQSZebns",
  "key28": "5APNHco8TjPJmqzKtiV46m2Ax7PQm34EM3ATnu4hjP6PKgxTLj7GeD6mLcRzHgydSJiH3yJYS5fsr7EgCvLKMzds",
  "key29": "jmjNtRCTCPB1hvNjkPSBPiqcuxu7VjD86YDwsjGY2yb6P87Nw1gYNanLpjJ6x6jYeBUtVZ2iiJSjmB1GToWRhag",
  "key30": "gaz8qy8orHjTWTqFMyrfetA59Bb23mpRKZRxPdr5P46qoxSJwNfTDjUDz1QABbkaiCcnhCjx9exg1u3FV2Fx1JU",
  "key31": "2ELpDkFQAp8rynMajqU9QU7TVZorU9QD5ZAnzc5EN7TXkh5eDyLjPRY9gmB7QGRpqeR92RAcu4iMbN72VgcAEnmK",
  "key32": "cYGHBy2e9cyrSvzbNMFG5TAzdhYJnrX7dYNFYkUxqQ7FsqafWY3zEKLznsn3esFPmW3DxWz17SgAKxsaDPHvWko"
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
