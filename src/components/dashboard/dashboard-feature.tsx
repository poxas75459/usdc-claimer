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
    "2FSYoBFx8DRxw74xro2T9hmg76ddqRuycLV8uePZawess1MZUrxCP7zFEq26DKNUjbPvQb1QYW24Pzk4HBG7VKHe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2CFXV1C82GKJwF3hP2CmM5oqSwaK4fur6cjEvxGZGE2fd2E4bmpg7hZ314tXZQzn6DhoRqx5NTSSncdVKP136NeW",
  "key1": "5uLW75CVaVnn5F2C9NxnVwiBpyCmPpJWpEf41aQT6a76bYMmP2DhGJNrgQbxbu64d3Jz4KoLHvnFi66Ufe5r9Mr5",
  "key2": "cTVQZtJnSHsJ4hy1jRYHkx6Bwj7AmgjgHZppz3brFcZxRz1uAMqWNbv49X26XRe4hSEg5Njr635Ht1qXE1H9p7i",
  "key3": "ZSteTBH8eZV8n3MpHGJfwoE1zh2DDPvdTXd5xZYQXLBmz5ed9oHi6FyruyT7SRa43i8EpKuXG2aPJc2JYEGzLr7",
  "key4": "3sWnnPuwdcDRmP4cZ5jbABzDKseQtLmFxXjNWviTVLFLEmeosbbm1ZvRGWYvM1yWAy6hQsvz4hE3yYrHBGYNEVeT",
  "key5": "5KaDGFpFGShaCt2LNECX1KcePtMfeb1Tp7nmM4pcgHEmiqYX59Qp5WV2dsCbUzTtkFQqx3kyRPN3gUALQ8LJRV3b",
  "key6": "K2GK2yVWh9cMhbTLTV1qfjUfcWrBRy5tT9cnQBnF7o6xSm5KrzKFQofr3H3Z7jMtGomouRvSBLAydqeSSLZmMWB",
  "key7": "3Pksvg1bir5QgNxWRdGPetVqCbMd9GvyY9GWSP22JZ5UEREU8YWd9UeGujXyVhqPtUjjsKNNEvRsqf5FwPyq6QMC",
  "key8": "4tftzG91bes4kg9qoMJX2fx8o2ra4eBxjxtojfpmUa2uajwLcACSekFRR96MkSRcYhfWbSob1G5BnpTsgAdrWPYf",
  "key9": "2rzm8XuZ2q8RA6vzB81zbq17xc9uAcJKNDktcDNXeoq5e2aws2FYYgAXEEvTVBSaHeam1TCBTw8iyRYb4dr2MWHJ",
  "key10": "4HJ8S4ZHmxppL1LTQK63F5tVXaqfbHMgXdBVvz6rXqLiuFhfdHbN6pQnomn84DiykhjRc6AAUPVxWKf6vbBS8TfY",
  "key11": "3wMdd5bKMeHZaR9Z6dyAekYsfEKsnhi4fm7t8zRzN7QXjMf3S7mDyQ5LGVfcj5B3jCiGaabnh2eAp7WPS6bUBdzg",
  "key12": "4vCpXidvQPGBfv2MHvEni9rDivimSvqiePy4HznG8qzjxCDnVpJV9NTSvpNa9wopHXZWG8UWwSvSDLUt7DNC1qeg",
  "key13": "5WtDDsq3nVSVGyZWmgPiyCwvYwkw4X6N55HiyMoeLRoWC5rv94AN7b3AGZtuHKn2ZVcERbXZj93R3YRmqtfXRzB2",
  "key14": "5mJZifTchZERBVa9MsY1SZHcDBQXNM5SH2ngTkMAWs1zVx7y7n99ejpiFDCpudXCo2AdDm4WgM8TX5jeMffJrayU",
  "key15": "5bjuNYT2DCeAVaWdnfNBTYv6R3Mq9n8VGnvNfarbBCustQZTiqrbrFqbz6R7LP2j9LymmwE678FAnjkxXYciFRHn",
  "key16": "3Pz2ZhqZFiuzb8cZ5224Xcw7mKrzKqowDu6zy52jU3jMZLK4BR8z2p6BrGo3L3vPZPjTxfC7H5jqgtphwxCAJjXz",
  "key17": "2xxveVN99gFh6AQXxECUehphJKygzQneESmeJyYjBXzYrniXohMsKpyG3vFaRfaYw5QkLkd4QZ1u2mRat8J9wMma",
  "key18": "2Uiy96zi5DnUcPjmZekZwz1SvbZ3VBWxLzCBRPM5zk1LGh4JFJJUWZPHJXBLH2bdChQW2jzGyet6avXewBayJrxx",
  "key19": "4S8w7b9q1qH2W8tv7KtMc9XxdYbsrJSiVHSSi5HiQv7JSVMdXJwVhHWhJDLsFu9vkhfBdG3CokSmXUzJAPcg1hKC",
  "key20": "vLnKC8e9TZg87cUqTM6hidKs7UkNumrm2r4DdCjB5FGqprkgkhEoxxaR5vgFn36YdKM4rF2EDBKK3Dgb1b63rJR",
  "key21": "5wmRQfJvi9SqxUbSiPmYfDYb7SGh4uCteAcUJAHp576mk7GZy3YscKcLNZqzh6YWuGuZKSbnYhnN143xSv5d6jWK",
  "key22": "VK4iWirnhUmsLecyv96b8rB5bgQtV5gWs5hRsZRECBZQ4npFtCZVwEVVbvXm1gxqw4bePz7j8S2QhHazfKRHEDQ",
  "key23": "2cuBk5xwWziH9urhZ4vtPqAKQymrFPCdGi33FArozjLAbjGKvN17AnJfKPw7WrPuLP6Z5Yr6X4pksNrqRoRQcoqh",
  "key24": "2QjBSksp1jrcuhb2PpwtWcupNE2Z7CHKaiapBxUpsWzWsi7XM9qrdZVa4yzhuYdNs8c6bAVA3z8qANAxJMqRduRJ",
  "key25": "3j5vBCouFuAp1zrx5Es61NaZjzKDxoxFRVCJeTzyR14b32BwCbZxuFa9JWkTd9esPX2Av2W7R87ogCLpWA887ztj",
  "key26": "5Ck8JBE7fkBEztKgYExtBTDVaWePhbT75GbarXLxamzd9m27P6vzyLtfe7LLuZzbt6L1kQsLAhNjGg5JSDYwY1Rn",
  "key27": "4dcL7qYtdGD91LQUBbXc5KmcStknuC5vvcPtWaGaGpryMLy49GAWapeUNidAhKUqp8Cogxd45vvFp2dUH8Ptbwyo",
  "key28": "55u56cMAKHkLFEJURApcQgUCnRXMpAVmLFJBV7FRnFnyAAsS6bb7HLhzuaLB6WkZtdtTDqjGopWbDybFT3fjQ9So",
  "key29": "2smjfbMjKYFgHkuMktpynyyAk9i8M6dADYkNE6E3mEX5gF2Kq7SvejuMQhstgiMXR7GXByzEK8ynULHp4MM3vyuA",
  "key30": "3gdNLRa9RG3T6yRi4TfBmLdAeqL7FxtH8uUT3X9awQBBaq66G2vVAHPLSiLKxiDajWxxznyi4N6i1KNqzWSuTGoS",
  "key31": "52PB2ojCZrLy2PjvX4a8PMc14cuyxRAxSd5iFBuANxUgh56jJsLqn11wPumQvjk1cFfmbXsohTgyWrtJQQ1B92SU",
  "key32": "51UnNNeBhykdNxFzgD1cXovXenRoC8xMZeqNmY8np2Yb2wx5Ab5RuTGYPBUtsaFsvrgxgqjHB1MPa1fK9o4Y2CKh",
  "key33": "5pHRYUHffWkaempyJ3Wcy2h2mQARJqPeUgYkTHiPPZewKAmkJ5aendAM9KA9U4HiUPGrUhqfYrAPChnQtCHbmX97",
  "key34": "433NtTfHRKv7Q4openjtKDNpqxZ41DbSLXK7sfQQWtWBz4rUSTJuKLksJzEuTQzbwrn5BQppXCDuu7U58PWZALzY",
  "key35": "2UFTC9QVYarTYCqKHSfiEWg9EudXcHwn3RxhyxGQFjFZqwguAh5S9oWKMnNdCEuj1koenEwGknyQDM2M5X7ky2Ao",
  "key36": "5yBqTSkWqxPZHKmmZYqQXEQJjTjxYivCmG8gGnMjNbHNLRNCxxKioyXYapNxcULUF5rtFDxcSmkvs3CXiqni4tfJ",
  "key37": "5dkHLNdfHmYYqgB9TDGnyVbTVddBCHjVnFdUn2a4G6E2ityhq1ahEcBgmLzy4tTQEuyQbKaBz2EdoGVjae9Zpy4F",
  "key38": "WyjpQ4Kw1GQe9o92YKe9Fc8SKUm6Gxtad23frkAmjJ1nYxdhyvPXrySfsfKEz6FXEMucDsKm9VTrE1kAVaKJoGd"
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
