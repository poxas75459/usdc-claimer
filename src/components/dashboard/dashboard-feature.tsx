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
    "4ic62fYPyK2Agpw1XgqhJ2exp58MVSsFRnwSDSGmvdkSF5WU7Avpz1PMKRgsE4WQB6ZjTYD37A2kLAN57FEdVwzC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5cUSUujUb1FtN5RexXnUZzJtU7wKLz9V1wBoybWace8mDCF5gkTjKGYi7T7JBo1MijKt23e8KG1ERxi9bet7gXYA",
  "key1": "4nERhrcecz7zd6cLHZ3Kq8kiQb7uM8n5soqrkdsRZnpe2zRUFNd4d5KmCe9V8Mnk9zNgoR8ksKeZxdzUuACA5vux",
  "key2": "5R6SWDVmLczx8Gbvs9Z4tnxSuJ2cK64N54HWUNvq1hvtTcKNtFnsB28Vmaz5Nz7kTnsJj8GUhRNek58iRkQu44xg",
  "key3": "kt7tSiPKGLhnewKeNV9MadqdGtRDCoksKGW4zucaLXQaGApGFyRef7S63fYDmot84L2LXxEeuydJ23PNzbS1EkU",
  "key4": "2xEJAhDv8mGVooFVAN2heqiAgCbvod9qX7Wmd4EFvwbxuKa5aRkzw23fU9DASwTnj8fsDcQdEC78iF1hUc2r9ZHX",
  "key5": "ZAopzhpNAYqdPvM9sjsNQe9Ai5DYDxSgz4w3RaRBtRbGnKMBNHFZTNMPPQPsy97TTjTW7uVavDGro2MsddXvixr",
  "key6": "2QErPMaZhP5Naj81dz8k2cojZCWtKfBB1fFCgKkYBh1McKRQY8omXFNGARQtSpVBuS8HLfF8su2vqREcHLX3hxbN",
  "key7": "3FrsZkNhc33VqzTpK4MqbaGXiR3V7HQbm2KqEYdzWGtNgommsz6JWUwEkivMEJV5eHs2ojE3MhFGbTPvXyzAz4z5",
  "key8": "5MUNYHC9tXv72ML8RJQo2UidNwAHjF4jc2XQbkhR3Ff8B1HM4LnAwHRQYwdYyccn1ucyLb8cLvmUzwEsZ5WDEo9y",
  "key9": "4ahfGmnueYpPdASZ3UqiHUm4dNePQzapDU3D5qvDonDyK5WsViBA2BC3LA198Sr3T7pEJJ7ATEA1ECY8x5E85e8X",
  "key10": "5teVQjDSCP3KLDF1xR1mT1EsERaD8QCMcy2yHZ1Y5XXjQZS2fCXGNBp9HQDd67WwneWfwov2BKqGuu4iiiB53r6g",
  "key11": "2oU6UYeV4kypDwseTXN2n2BDERcC7mJfx484efH5QTQxQN6LGiujK1BzReZqykDwfrUopPw3BHHDUqtHP3NjWH3k",
  "key12": "4drNWDtkfygrBi5T4Qgoz3kFB3gCtKSeAiJK2puVUDV7H3zGNi73EeJFTZD1FPYz6UobVYL99QUb3skL7Wc1dgcG",
  "key13": "55HYVTffr9m7MLy99oqu2k383h4WiLfEUbnqgRNk2qmihPRGMgxVuC3tL4kaL5Cve9m6Y2gKgqqeWBzi87Ey5g36",
  "key14": "2swbdeKKHEent9VqYKX2h5gr4Sp4NEUSQoCXA4gnLfQ8Y8RA5nsqATQjEtB6CRLaDy7wfcq1N3HeeTSe4Db13Gnv",
  "key15": "2voc35PtYBHg45K89ngW4r51PeEbDbyFGAmYq9WjojcwaiYKFfUiPwc8xhxvrhC9FHPaxeBtAsbMK11uDhaUQoQg",
  "key16": "5uNrxMDZLwo6CVzCAxGv56m2pQJxJ5FcLxboWZULT1kPbz4PRXLthkGwkctXQBdkoVWv4238MsZL6Wk9a3z9HKPi",
  "key17": "5a5DGBUdxiLmid6UQKijiUXBvujSwGdaje2GKy1kg3Q1PSfFU2cJqv8EPZdzpmKE5k5Amf2xLAUsdjLu3vZX5qNL",
  "key18": "5bhwoT83oudiUTRtm1JCnkNHBamxsoqB8TC2jMMmoLMtgu9V3VhEDfvBBvRDPZ4ZFqQitKSe8voPv7gd4UrmtyEd",
  "key19": "23ADCoqQ8tyAzyjihn9cQrcPGkTXCsGSdGzLxc5MgAG6wST3r8CN3cmrRuzL56abjXRYV6hA6jBxUqZHyuRMwLX9",
  "key20": "3QmJBgCAEQRiJdQf3Qo2sSVCeXeB45a4zJVNoDuyoBMLrgLe5H7Qk2sURt5F8zXTqBsRWWkPqhUYehQLCyv6WNMU",
  "key21": "4zGDmLaoAmM3MsBs7mrKoqAFyPoENsjoabQSLyAeWF2rcKHNpNc8CvzKbx7apg9JA2m3MdMTPcSTX2ZsMK1MX5P2",
  "key22": "5uE2nKVWFGCuUYeFLFksdiEE75jf7nYcLqJ7nCdoQKMkiMqF2rufPDnwY4QcsPVmmeHHasJR6CvjFisc2NxAb8v5",
  "key23": "61JgnpwzGVmGZnQjrvq3krjsJhtHAiab4qAvFA79AVtvXobYdG4wbxs3cYGzhoyCVsMnCdiHKBQhbeZLX68HDFYL",
  "key24": "2taQsZSFvfRj2UBo1r31nZmFdoDVjAdJgqua4X3XJzmCeWCRik9Lgby6wrm3gVYgqb2EKu2pngg3KM1YpucfQ2ex",
  "key25": "VpNf3pKMNim9xbQ3DFAqMXGFke7v8x2XxQQypAsKaV5dnXtAcp6kTEgU9YRQXpezadyaVUNeoo1pe6uMVvaFPcB",
  "key26": "yF9hS4Ds2jJntbqzZfG7oMQYosXaTXK768sdmappqfJHLTBE93AhBUfpo2TZknMuj7JAVbhj1Y57HwQ56LoZGjw",
  "key27": "4PcVYzNdToctsxdpBpC7nSQTwybaM6nvNTaRqxi6KFhsaii5kY2z2cSGawp6x2JxLQL1tN6Hztz7iG7tPKF6H2v8",
  "key28": "5PwyHQvyqjB7hot8RAqCEqcWMLhdtVJncWzGMPTvD76SeY8NP7hTVn6kUXifbdqESXXFeyqSN7VRt1q9whoATC4E",
  "key29": "35NbC9KqKjWewTv84cwD2pUAeanVfruE4brdWJiwDL3ERLhGoJesf21UTYhhacJQYH7AwMzaHprqasepCiJi66JF",
  "key30": "2uxFaK9bbM8tPghZcEmApaCrBbBmtuMCg2mG3UCFUXox7Yrpx6CE3XCwy1PXtf1e8C6svvz72qnmmyXmJ1K5oPnR",
  "key31": "4Q8nfGhQjPY3MZE88HUnoNWZ5CkgT8G5Xd1oSHojk428xCAr775BnFfZNMYiRkmMtVQJGZEWjvNPP68C8h2p2v5N",
  "key32": "3DyrNhdhtbx7UyPJ9yZhqUQWuyrwPyG4G67ZyjUsPTDcwRiJCbiezbxakhfGjyXuF3u2YtJSeLt3fbeB2MQcXXnw",
  "key33": "2YJZomT7RLVhyzyKWHZbQnn25Bn61qzrxNqxnv9eSNw3Wc8g8BHkmo1KuGwESKEaybhM3FE8qARJx1guFmungdj"
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
