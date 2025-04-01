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
    "4muNEAxL3DTi7cw4HYm7evdLyRbfzrX9w4mj2C573sTT2xvt8qTfQTP6MyVSiVyTUeXcwu5cc3RPMdRYwbreqJSM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ziBTCYHbKhn4xTsUEwAFzWCA3ttZCyejCV4HN1FLgeAYKFq5E1qkMNaFUaNVNU4xM9zJF9pSwyZtGZMUrjXPShb",
  "key1": "2VmBjDVZrKJ129eBXQoHHkp26CJBK4ZosmQVBRFfx1ftAA1mBrUGVpRbhb3fBjaNFGBoJ2uHBTBEzxRLUn9L6pzn",
  "key2": "5eUcLmqLoDNt3NVt2KeXCnJffgFSHLxLfcj7rESZv4GoNF3PV6NQp1NPwxu1GCe5LDDaXNMJuoGN9VQ788tkEsqu",
  "key3": "29iErQUzK9kgEcVmDXHzECSJ8wZwN8JKuitUR1QdbdrACmXyKqEnpED6oXCs7yHLeZ1XKtozY4mGxYhRSCgmyGsU",
  "key4": "4BKw3SXMerqUnhyj372TrYJ8mCNXVdcxLs6B9c146Pejd3tqGNMaqBB6HofeAPLmkt83mMofYSdBuzW2nKv3PeTG",
  "key5": "3hAqZWS4qTdwPNKoQGRWnud9FsVwrYuftnWyMvBRrCHzET9Pt8Tm47bzpzmAxCAVShfZuEQYMw8QbRsYELkSshRg",
  "key6": "3czRB9QbiNRHJKogaPdKW1boi8iC3PsDCg5xasMKBvTecr6w2AXesPJSGsWJGCMLF2MHfjrNYeHkbFGhg5X5k3dg",
  "key7": "4HCtPgHXa1tVZPvdJ1aLMwFtRxLqPPk4fkjJmscEmHq9nPP7ajQxbnacicKthod5Qh63CUcj3KgrpE7YUrTxKfJM",
  "key8": "2RsdJWXgLMzpL4pnMnpTNCVVxSVVACE7oFMwp1Ug8FogkMdoLTA3Ltx3XzQ3RiHUnxxPPyZjMQUoch8KdC12ErjW",
  "key9": "2DnxWk4ynNzfiePBQ5tqQAfRcZDEkj6Zhb1d9dwg1q6VZ7zuCLRrWpJzq4M91AUnePK45KkbH1VYg8BshadXjvAq",
  "key10": "54jcFcqae78XDEnKt4TvPHqiZ1T6zRic9ZoPX3ygGQQuMDh6TQAKv2oy63tfwxrUHEDfmXkRV9gus9bjkZDY59pq",
  "key11": "gXdjKYFid1oVurcsU1Vhn5kQxLR5FTArUuXz7KCAjbpoWhAq7MEKuFHLpnbxi4WW39xt4XBC1mkwqLCi4mAXZTx",
  "key12": "37FwB7wiL2ScHXa54QmnRkkgQ8UmM9Vg6Utfp7JfuULbnh5gr2Vip9p4S3veDjpr84CHqc4d5uNhYEiGtDJxL2J4",
  "key13": "3ShFYK7Pfe1R3Rkbf9cm7Cjyz3MTPT1KDX4CyyRFzeYg9hKwNi42u7MbV6q3kNWmwFFcKjutajAjmDYR7nEiLEwn",
  "key14": "5cC1uTzQaGiQSgubFa86PK9M3NWuSnfbKV5G2jFRDBy57xviV8sZLVjZuboe6BAVQwQ8BMo9cu7xo8sDpZHbmTbk",
  "key15": "3usabKpy4E5BkXsGMYejNCqFM1GNGezj7awZGiC3ftDM1sWwLKhqEG7ErtWk8dA8eb8CcXKN4N65Jh9PRBecj3e",
  "key16": "3yQXqCR5dxDJjJb8LMj1DjCi8hjy4Gzj9Fo6CYr1jLefuoAD3MFSFGhb6tX3Xug8Sq3N76HLgHtoDJbNnCGJwbAz",
  "key17": "2QccdJqDJePKdwYE4aKoq37DfptcagHt4vM5gj393wk38jAZJzyAP5swjZ7W58f7GA598APvFWqXjYwXFBVuh4XN",
  "key18": "4UBDr9yQr1EKJxUWtW3zZJ3Zr6CwVPbTxe2YLV1zJyaz8hpHvqS9uTr9ZKLxA42oKTwGcamziCAefKnWis2sxkYZ",
  "key19": "5zs2rammyzgRCGNc5p2NmT4js8SFAjZNmW4YV5pRzyoVJp5QiD8aoGybf9e2rjQdsNcWiRQx5LwkoBfF6mYCSXjQ",
  "key20": "4wqNohu4vFKTexBwYkyBBNRSesUqHZJqfXyZAdeZSJNammZDtxPyj5V6kcRpV5day18mUYozTgfn3bQ3SFnYqnQM",
  "key21": "27VrxZvyy8DUKxLhQHUcibnire9P2QdCEmqPp9JPPEX7fLw5hrg2dPZr8D6rb25xMaiiWdtk7XEkrPihScP3w678",
  "key22": "4Shm21Es95d8MbeTap5dT36QyvH966Q4t61oaWbmddofZNQqf5dSBtCTdkPhVhKe9kWd9Zj843kfo7CaVJPiRoQv",
  "key23": "4cchULnNebjWY4CFyauV9ErQ5Fwz88McMLYGeFekTWjTncKdZxDm7xungcwChhMFtn3ewPgXUmy12UvmNXJgw56F",
  "key24": "4AYVa9kee8Tgiq4SjDyuhkhfrGz9k2C516BvMRH3TeRACQtacd45k19TdiBDEsTio3pn2aMsLHxCbfgbHxmWHy3u",
  "key25": "2RPsmHHJA8tKGKpQthXiNCrHiziwKbJXtcveqwXk38w6zKUapW8sQTKVCaAysV4mPF3jC72YtdGGU8YwAvkPjM2q",
  "key26": "33x12FFQLChiXRKM2j2CSmr3c4JBkytSJG2rZsLFbeR3Gtvv2ZT4VHqkBzihRtrboSgXRj3idZHC8dKu4A29nrqy",
  "key27": "GhU2mQGGpC822J8agLTeg9mcDb1NcGwAHQ2uHTkvPXfwNmsY5P482ztHevdg6aqiG9tNDh3VRkTA5p2Pmv1CBiC",
  "key28": "a6Ck7riqTkneABpGzRCevgWrD882eTMnLNDrqbipSYNHgdpxSg1Sfsp7dBrxMAss1L4jqV9pU2NWcZCf5CrSZFa",
  "key29": "2VYfAyojiAdtjzPcfeQtztvn1V56RKWoAoCPBjQREnmRvXvvtNwJVG5PK1CKjt8P828wUjAh9gALNb3snSQXu1M7",
  "key30": "2x9qApzAnp4VRPVcfZ8aGcjkLfoBTHytQ3bqw9k6633RD5UeFfuyZjPLf49trcvvZqjUtK2EeXvLTiztX9wz4e8b",
  "key31": "5DBHEbaGk2b5bTHRdWeyTkiKZagyqukT19Z6u8otWDTuYPMtH3akKc8hr3WCTriVoQM57929Xer5NmEW4FrkZCLC",
  "key32": "4HKswkyUstREeWT68QkwAZifUBQS7cjEnW6MGKvXqAHwBMYAtZnydr7WByKbGaiRj62kRWkYXMJzA3BNjoEvcX5j",
  "key33": "4tuMwpBnii66DKoYMgP6ECNNV3igQ7kMT6prjpBiL9pn987grpHzZrxmnpUfBP9KDKx3ayJf9XUmpVNxNQyPUh24",
  "key34": "KHgv7HsKWGpazY8ZsttM4xXeJFxV8ccERdAzq9RuWWpGJMpqmzv61MQztGzhC7vvyoooQFya9rPrJ1ShSVTUb53"
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
