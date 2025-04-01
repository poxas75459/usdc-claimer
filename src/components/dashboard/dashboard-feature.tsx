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
    "4yRvJc3JcsDA5XoqTjJV4BfgAttdZqKBbrPobtBeR7ey414YaFkPb2h4ibaadypwQm6vZUrCMWEnM9d19t2964Vy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ZtsAFbs6Lh4ywaQMX2kWL2C54jjGAfmCEQerQcybNpgjKp9VtptdZDQfbxqnisgfueYcBopfN1jKWa7BSxSs9Gh",
  "key1": "5BUFN1TnDJcH1otuVK4RriPgG7bo3gYxoD4nmixatVRXcpxaq2fmGXJ8oLCoWxetWKxXe3PTMLZJQh9sLr8gQCbt",
  "key2": "4JREcNHMaASBHDMaGzigwai7jybt2t3nte8pc71ENEjH6JJPfWVzuyPF39c8ndAKyyABYg6UGWHc66ZbFW37emLX",
  "key3": "3DVpXx4ASthXFdRACgTugwBFzvWsbiWh7bFuJnvHw4wDWyKHgiUUHoNwQGEGTeCAeCeEt5cAtsD9JHqmDwcKJ7ir",
  "key4": "4xyEfteFSdy46H9GKzGTVsFA8JcSCGa4YcnvKdaXdUmyKHDngrE52bkC1tzQtqdSaLoCKwPFN2dHjibKRHedQqKv",
  "key5": "jWcG35aesSPftmQyRrGA6xtK2v2Tg7vQtdxBoSuz9AByk9QCgWuPBqZGTd8TsgCU6c5YaXhKZmtYZJbKWD9joWe",
  "key6": "3EbMXL6EX4CPsUFYoJLHY8CEpkMgYTxqZjNYojxqQixD6J8tMyox6vazHJMjDSXDjipXVMEcMh2kkArJ3FeMydyP",
  "key7": "4wCrfejBtw1sWenMJwV7zcZFE2tJeSkeay1BFJo9cDNv8YpjJPGKXg5ihXmk74WDxzxrFqLB36hkNPEdJNzBfDRK",
  "key8": "5ehwLZEBXw7pYuKMvyZvF6KdDZctuP6ujTBxS8ft3DyByG9qbCwzGdMg5YXA5kSmoPKkZB8qeL9wcVMRzRM3Qr1y",
  "key9": "4MfygyW3B72DBFNHUvqnjfKr1bHgsxv2tk5GCkAoGwsxKBXxBMqZxYWbCRCJVn8Zm61M94wEae9y537VwwXfiMFv",
  "key10": "5PipkWq7UhSp47ZxxoSTNE6cg8iPnYz9EVLh4AwQTFyJ3SUsV4tehSWMbndYA9WZNYS3YMmdTWKYi1shyWq1hER2",
  "key11": "2PC7ukXWgAjcr9rnuDyCgCCAJApXK5KKcWC9einCvp4XjmX5HD43a5Hw4woZj6vXnmfhNvubFLMrPcU8HRHZmAJB",
  "key12": "4iZCuFZCrjQJhdjfxTqiur6Xd2DZBjAVoFeUXoK7BF3wzhngHuxy8Sk5obb9iJUtu654QqFPryVLQ1HWbkvLh3VV",
  "key13": "5JjhXJCydPQG29KHSPb1EamJ73UsNa9x6Pn7ZS2a5fmPDZRUPmt6A4gvW5QyUkPBe4MEU7x51kFPMbosLovMBNrz",
  "key14": "5SbvSmWxu5ZmM4AvkU9ekejPWTz1c7bb1mQpkMzJvgb5KK1dvyY8br7M4XMG8aiNqVsZ3bwBdw4wN5dy3RiJoCp6",
  "key15": "4axD4sp7Rp8wTTexQ5CspD15CPas78h5JLCJJrSqpY2upZY9kgCv2kieZnYaMFkBt3JPHHVoD7uRpTPTWp2R8Mdq",
  "key16": "2i8LYxYDDHGytjonybvCMr5sX9NBL7ZidWzCAYpQYHNRoHwZ7rHDGJtYNhXs6cm6t1GcDXknPX9wRo31qtNchgwt",
  "key17": "54FTNccRVYJWwmyVkpkrV2sUwfavrWz6FPsQFiktrBKTawmtfv7NWQrwqttZcR8FHbZqFUe7hxnrKVbzsXk4452L",
  "key18": "5WvBgMSeVwaMbbfaqntvA9K718qCQSS3KqU1mAJvZKUPaWMv7LBNiPkwsMh84EBEdWwWcpGJ6RnM3wknHX6fwUuJ",
  "key19": "3ZFVLpvqMuMVjx1BnUxA7GXhKWz54rqN1EEhNz1rWExCjWNS9MeGM1RCG6heFc9mjHk92oxfaW2P7Vbzz8Po2Wft",
  "key20": "3YFBerppsjRA6yQfmyiQxsoF3q9pHSs8NDYe6dN9x2Jp9gahV3gCWeF7rLwNgiQXS4RJMKcnmSkUUbbzjHn23rDH",
  "key21": "Dc19ftzLbA1xDKRftnSDsAR8vWJf2GczcZeHxHrDy1kXuUbeU66vSFQgYcKJjEx1FnDL6mmKT5V7Q5egDUx1EWu",
  "key22": "5mb695wEZLVQF7G9G7yKNXyH7GrXMgh4YkTi9MgNjzwGWTyi15d6LMK6qMp7SnqKGiWctd3g6Rpikuma1qGTujnG",
  "key23": "4jVm5RqSXWjwmP4eDxre1bZnLo7qEa8HvLckJoCkuDSQMofHSsuU2pKt9wnm8spzoqiJjzcLwzZmUzQw12mhnatb",
  "key24": "yGjXUna6QyLt118jT735neyvzbJXE3WczFiSCpxAPMi8De7dxdjeh6xNVTupMwPFxoR9HGXP2ivnrgibFisX4kj",
  "key25": "56TvWDcJPZV5b9jH1cobaRQop5MYa2M5WfSt1pb7BLH1QSY6ZotihZGocqh6QurrwouhTgf6A8pGZz2rJARwUQRx",
  "key26": "3paUzgmSznqGJUx5GV5sFq39vDWULdjxFyNhxKeUJZvpkm7Ncu99Df9nghmWMyCAnimxTmfYjAZzPA74miVFD9Pb",
  "key27": "3GHsfRe75QPkRzziWGvTEh2g9g7AA9D3D4koX6QeRPTQDHN7rrih2rTeuKpsVwMGZLFbjx9NwDt7ZML7BdPBmVMm",
  "key28": "2aY4UhczVDyTkwFF2yyU1fQ1vt9nn4MCbUKvPaaxHEs4ZHoACPgUbn5ThiV6e46spBCZekMH2RqkZg5THeRTuJwg",
  "key29": "2XVxeK4Xf1XW2wyUV5SsSeqJFvZQ4U12pzk4kj8XHjfVF6gAFhjHJb4Qyad8BgTiRS13Gmd5VDkXybHEdFTwjfCq",
  "key30": "491uo6CEJzCtH8uveifq8SgQSPSSzt2Ry1LaHhA9zrVcgUhmncXVV8odRywXGR8o48u9w7mAGtLGUq8aH8BS5z23",
  "key31": "65ET9CLmgCsuZSkyuMPGCiSNH23NWVM5z1kQG2hUafK2Ujartxd5r9Wd4dH6fVizeJbG7ruc6gLW5eGHj7hkgGR8",
  "key32": "vktppjfEMq1JQFCq8o3ypeboSis4sjnqjUWEhX7SRkkWocCZaXcm4KDcd26cjRFRw9fyrTioquFj7UrbW2aG3jq",
  "key33": "5s7d9Y6MquzccC5RCbg8byxDMemGDMxNNcYZADLgfhgFdDCSJ74X7s2Tfvb9E6gFxnetYFubPGPZTfxUcnMWmes7",
  "key34": "4GRWhvfJ5R2LHSaG4aiYYcDSNzvmZpYjR6JbuFkC1jgMen12pCvj6FBpwv4ASmSN1Cnr9H4d4upB7SjMobSSTaz1"
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
