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
    "3c4ySXXgbB4xiCmKaRgq1QPxwJdGC8FdFEtjnwHo1raUB5heUXxWGj4kmgRcgQfd4VRpi5sxgTQ53u7AhBNqcyZz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "QzUbUqtKZrjDyj7zLyzVHN4NRvRCijUR9kjgj5D31rrUdVow6JVd3PwommUvMB4F3NNNsiwVgiEjWHgw8x3DRMe",
  "key1": "3Bqyet8LgbJti5eFiaFxbxF7XXdSLrFPdCcYXMNXexibtJFtjZy6dfXyiTr7LkEGuGDURUedm7mTm2r4nL9PwDDx",
  "key2": "4pfLhmmZeVTw65zJbZKQk17qPmEpfJnayHqMAcfuRq1x64d3ksm6jGc5Db4SPjysZeH4H1MYF3RPhzq9Uot5tr9B",
  "key3": "4Y2XAthHZ7YUGWtkphmD7CPXxtoQHHC8xRXZG1z8YYbdktugGN33FQwHjoiEahKmJCcFFpNWjKXbXhHUfpQ6R4YH",
  "key4": "2gwze9zsYDZH6jRPk8jdzzVHZBfCBExmA8H5kV75oZjCo1dTbyezeq8i62iE8h3ETHK2gVmWAfHN9vo9zL8o4Sto",
  "key5": "4bhofEaRmbLu9pGjdGUEpUDvhcJuXyQhYmE6h25F9iLf5uZw9KuiAJj6EcvARfAgANspt23z5CicYnzjiXkAvf9c",
  "key6": "2FB8U38XeiSEhc2pxU6VGYWaFsMMxxkDczCVrK6PU5SwGRMB2ysKFexN9qMeyZQaVFuPfKnivLsnBBYidvYqq4Tg",
  "key7": "2rLtRSJyLCn59dtJgmKFKrupAvyTcfTUpZLQER7YS4iWweFbPhPDujFzmAy1dBmRwDozaz6pcPMXDcQfseJDcSXj",
  "key8": "vpAhVDdH19brNspBL7QUfzn1fAdvgYCsMEf2xydiPZS3mcHjbrBAQHZ7FRZsYn65uUZ6WkF9VQDwhegVwrtxoEs",
  "key9": "TfzhucVy2GRD3Le7hQDnGyHDV21EPVQoAZ48U8WxfNtk53YP2ikVjiCCEKRFM3tikGAzGxzhmGR3SkM4fzmTLK5",
  "key10": "4ELXvwCVfzo4HUhddE8aB2x3BhhRWTpqJHNTkqyDYij3MhPfEihUUnbTfufucF1Bjfo8P5hSbrg3iENHprhqvDtc",
  "key11": "5JtZBm7Hk4r1bqcCUjCpqs2xGUz9EzgXHvBvqeqbFKamuyfKrv6VaQ8AhqWgXgsCGiDi1MskuhTpJowb9evkhxup",
  "key12": "TMr3A5Xw45yA7xjN8LMnTSAD6WkXsVAK334YQDRD9hRCEbXCCnuZQHAJoSBYR7iUeMUwyKiRoy4q2dhy8yLKTXK",
  "key13": "45RpaJGanAoKQQHXQWQpvFcQsyvsLaDNRPn6MPAohYtyw26rpx38DthugCddAGRrjr7QjTN6Fdwnu9XRXYYvVwyf",
  "key14": "J8S33QvBSpVeCk1iM2TWUvspCAspDHcj7XTXyeMZxxWqWnGWE97A9xNdmWfk8DE43d7VK1SPqJeYDobgYzVe6g2",
  "key15": "4aJ7CKBP1PbudzuQYxdRyAt93oPsUwqLzNmYxBfHhEc1WfVV3HPwFjPzvsr2qrL2nqgxqtvpee8wLTCfo4YcHgv8",
  "key16": "unU2NWGv6mK897Hq1GvAZ5zEQg4PFfW2yD9NRDkuUPsXZgMPzUkLoPkfynrMznaM7nx42726UiGjchWgrH4RTCB",
  "key17": "4wiGW91d6HpEBvWnntWgGcd7robSKkwy6PtNUgH1fcQmoBH93gjp4D5EMV81dTaZGCihQHe2T9FHhMBeYVUNyFHC",
  "key18": "3cLXFK3JdvK2DEs1QMaQ35vYqqZ5q1oLcizuU6dRhc4Sjyo5eA74sGWhNp9tzcFYFdkTgMa1hQ2RDLJW8qLoq7kG",
  "key19": "4C2jTc1BjbTTujL2uqu4hUbDNu7fx14D1bKWF8d5dD6PGXMAnW9XW2rQNU1SYVQXkfAUgxYSXoseYqNCXLE3Kzjw",
  "key20": "46xN4HZwbTd4yGuPnkX7TQe2cAxb2qVJfoKq3Zctf8khdusqr7yLbfPEKQakaJYN5ZKAB8SBmU7rAPiXxqpDQYdG",
  "key21": "4JgJkZ1r1ULQmE69dYKcHi7JMVyaLGhLiFHjxZq4H84HWqednpxpnPNrH5GfsLVDXZ8Hx71W9gZXfjiKdpCDY4qd",
  "key22": "3zSN7sZhewz3qtX1FdBJ8RQb988K9Ydp7VHQ9ZpQi81KHgd1sHYwXFPgKkhHTi75uDUvyHXwmm2vPqU5BjhivPwB",
  "key23": "2QU7VVXAHwKnS9FEkdjCmDSCs3KZ2YP89xJLvtZvAbY4oJWU2XqK9yCXcXq1XoBHJLMjKRJXsEvowpXA2CKFJ22Z",
  "key24": "5atArH5abSb3cR6E3rYzt1hkaNKMczQdoFyiD1pinFz99nTX3XzMy6JQJ74Wdg2sFFQCJbn8HtiX6h9zKNjLxCpr",
  "key25": "ugjm6ekhD7p1Nw7gj5hbPXCUHTMcaqgNQV3KNgv9fQJ3ZzKcEJVv4VnaE3578QNiHZNx4ResDmLLqYfT63kSQZJ",
  "key26": "2oCmTuXH2h2wPDoNjZCE54ko1Sofeucsuiu9QfNFsEzH2pmMDkewvP9rNZwbQSFp7vex2WNnZtqJFHJhrSouStFU",
  "key27": "5t3hAWMz7UMZFZu5XpJgvUiTwLFPswa1BGZUsK7G5xiwEBQHcZtwFAX6eRnoZ45CSoEsThcsPPRHWgFqRqkhWWnM",
  "key28": "5VQsQAoVHuCpmN4hyZvGiLJd9DqmDf7YXKQvKu5dBYys1xnQgxdPxT28j59KaQjvFFeqW5cdDTUkEwk5hdrtgC9E",
  "key29": "2gcKrLGYuB4dMAjoL4AmFpEe3WCK4khJ8qwDUaPjNwsshMeberdbkj1dzoxwTivYUakckGxq3HcqEZWuJDGGr3XK",
  "key30": "49FjQEGeCerZa1VAZidRR1VxPruwBZ3H2US6L49qFcwBkFQ8oBU3VuWEUkEe3sHmfpamr4WgXB2UALsKVq7ztAUN",
  "key31": "5NtoE22Ja287NhH4vgSfmsz8cDc6r2QXyr7bhwqxQietzx68XPKzuSX5yrcRtah8MSk42qwQqfSynP9rd8LEp1p6",
  "key32": "58xHPsQbMcF4LBuZyQti9ZKvB5VgnAWQZvxtzzNXP9cMEFgZ4Lo6pJ2WM5qX6u2QJNWVHwd8AN6ciNbsKvQHmdRj",
  "key33": "3Jueae9ELkJvyQ27gdJLuhzBT7BmRbp4ZXKy6ttJo9Lk2vAMWcdomHhcr5krBYiAoGdTr4hkuacovE3uCJeLTDfj",
  "key34": "5WmC6q4jabewxYq36Ppbvt6aXQ3Y1NSzLAteavWi9dTksJzqFe1fKniEvjcPZGtQBE38vtnG85TC8DnfmPeHGWJ1",
  "key35": "3H4axvPT11rayUUQfKQXzkrvH4boVruxYWbdwKN49b4jAZEw55QVB7z3ZGeaDvnMrSPjhzJk8NvfULVEXDxVnyhB",
  "key36": "5CwbpZoA8ZaA5bAq3TKJfQ6iZU7wMgKTFMZD87yu7w4xT9vB8dFA76gbq9BfWTdz9mysdEqmzUVbBQe7r3gEkLJK",
  "key37": "4zzs6jc8ZAPHA5UQYaBSNnDmDJzB8MZCV3pLUAXuie3u1bhEhV2c3r9rCaiK6YV4Z1o9b4Fb9dokBS491r9zvNQn",
  "key38": "5YXpFwG4LkJQxpZyYeATtXHC2YFAP2ceaqb9TqQVduBLNwTZrnzQUks4Rt6TYjVAZWDjerSmwdeb1jjguv2YUyoc",
  "key39": "MJyg3sbr6pkSyAB68SZZcLkho8whJEoZ6smCc7sQytN9gYPYzL86MkGuKNHUsXa6dDmUoDkS5M9KkwmDdQrYk58",
  "key40": "24hL3YDni9ruz59xcgHYzb6FQvzu6urDPSFwkFeUsRy2RCQMg7kzV2rhL1njw49KK12A9w84AMFrSkYWyZMvbx8E",
  "key41": "285pqQaZPgrdjS63UbGwdEaqHa1UHWxM2c7212Wy3cqXYYYH69b9Gr1WSsTxqFbvg6h7yjgB5reGHLmLd7Lh7uzF",
  "key42": "rzErF9nu2Pacc5L9C7XKbQJCqcEP1r2z2VC2bV2KeczjVHaYNf7AuEdbeTt7WeDEDu8rhsJehx8BVrq5wUPuLSR",
  "key43": "61v17icsLZ2tCKYGrSe77Asky6zttg2hg8JemUjW6sU7RRJSQkFBM9SMashUCFvzSLH5yMB8tqJq85bHCMnQhVqR",
  "key44": "66iF8SqoTKB6dooMAC2jFdaei7BcGUWCMS8r5rg55tts5uy68RVXLSdc8EiAistwmyxyWzsmy54ip27iKDkxKgvg"
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
