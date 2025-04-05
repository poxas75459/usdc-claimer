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
    "4Mr7jVjivJJSfKGbBN9nQHFJ3LBFzL6BBHaydNKUYgJV43x1LhLKRdq8nbLyS99f9ZUjnfCRpRgN1o13KnKzicrk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4V4ZjzhEEWktUFufPafBYSH38jt3QRGuk7Dzox7dKpi1PiNwTFoz1CoQLxZEds1g9yhV2Pu8ZCSBdRygdZgwAkN",
  "key1": "5wukVyMYyvXJ3UafcquF5zCMyDb9s82v8ev92484Xg5pyMhMb5pxqyPbBN31uY9f8zDAb8fZAsy8Erk3MsDVcEaV",
  "key2": "62WdD28WDJR5AzoVKMiwbQTsAinDxdV2NbiqPoKC56bZ3VuaZvB54b3i7kad5gjUXTsuS4Q7eJaqaGA21NsaZ9uY",
  "key3": "rho6hXXoETPBXvHvruhL2Lxckpbzqo1iiAt3fmu52eHu8bEK1ioJAjP7G9rLFv4E5b13paf1Ea9JCmDERUpttbP",
  "key4": "3BzRvZ3suuq8Xp6NkdYCUWrrfGfZx6Gji75MYf3rW8XBY3HdCdJfWxM5YfCFdLHdDTSmJA1u5KPDWEJchFEH23cw",
  "key5": "iw6gfDm22gUn8RwaNgQLPYk1xCBETf6LVdybSV9hr1HHQpqm6id3THZCqA9HjbFmWFwjGMdsQi2ZFa7LWcMxhWb",
  "key6": "3Wd1eesWqvgZYtoGZnv62ysWkcqT77da6WHmexoeXoyYQx52vURtPJ3aUvnaGoGPdxax2Uhqpggpps1RA9aux1UT",
  "key7": "4y7PLV4hGhJibx6wcKZynvTAVAdkvBs2QAf4oNkzTqGMRQYeTogGedPkXa7Vxbyse1PNtc7kmjxfAHbEJFQ6qJ1M",
  "key8": "PnxEN65YDHSGp9jwQHdxgXMH5uBBA2Qt4TJVumLA8axKhhnS2wgvk72zBCwkWsvn6mob8yybCk2iwFQvs3BMzq5",
  "key9": "wpGNKn4ZETEVW9M2zD2uuSy7eURZ6CRBjaaDkKgUYasadNnQC99bNpPQc8pUsqVdr2rPep5pKSdLUH6fqmLN57u",
  "key10": "2pxJ7zoPksTYcwiZkLhrHLnZKRYqnuuwAfae8CSvfR3erKSnnYcM1NtvWfohCpE6gYq9A1UxENv1j3MUccHkVHYP",
  "key11": "5zXBYUkZPWAB8SWrhDHQUjT4MtBE7JEiw7QyYUKV5J8mzwFRQJGUdMrG4ApHpsTnT9JbZZaukWRsh4zTHWPUAZqo",
  "key12": "si6eJFLiU8EheEz9iNvX9wFtHFzgbgm1Yz11BiC9rQaUXtpLrsbC7Y1fQYhuq9J9tjmQDLncngmu8mrZdzPdy4M",
  "key13": "2jZKq3oLZkDmAsxz49zw8akhwHsbMgeQuixWoso7yP2wzvBMuQWayQiejH3THzcic12fijJKRq1cyeYTSgnf6SKU",
  "key14": "55P6kvA4NgV3C3utodAffKucc8KSH5XRpkgFeCzJoPZ32ttMPkXxbjc8v3WvGmqcboFmcjuLQ86dioUr5Ci3s8dS",
  "key15": "2nPD1vhCCADXCU2Uc51QkRctR6ZJwA3MjfcQvAJb6WvkwBVeo4fxCyB5H5QCVRfne8VSWc4PZ8UPegfXBhAoHGEG",
  "key16": "3LyKWRNey7ZiBSWMf5yABw8aGgPoB7UKuJhG8FWVPe6z3f7nFmrhaSFASWUdWPrNuE5eNxfE9AZFNLnsWJG14bJu",
  "key17": "2uqJc1MT47jrkoP63ZcqwsDmuMXuvVpSwvVGGogGnZJx9ZU1Hr1RRLbRGMt9f39kNTfXaaERCJtJJKYG61vxrqV5",
  "key18": "2nwWeSvrDgfviit1c4L1wsFsDGCRJb5SGmfbukg6gxRbnLmUMMvKUEokVd5CohQuPFrFGWfZiuaKzrTw7mhY38is",
  "key19": "3dRu7h6wCaNcuZwpS1ac5PkMe2fERErBrXAtpUXKWTLWR6C5UoDFEwcLjDtQjuKEU4vRYVpeBWvwdYUrBhV5R3KD",
  "key20": "LhsPHPQA8KGpFEGPAZpY2St8HtwVeNGrvS57M8LuMgJddTwTvfzq5JibZVeWjBQBYrmiughE5t7LsBgS5BDmDEW",
  "key21": "V4LWjacGrq68aSwL4zGHXmtum4AF8VuxYsR7frEv4mLnMZmJwbfL6bzRKM7z6tPZSvhRx3sf7KpYoGDP99NQJX6",
  "key22": "27kM2qsVwmtSs9GifG4y4QrCi56S9zeqLBuTD8Sib8xvfSZseT3ogjNYpMDe1txdJc5TFzSwpPuz1qHtVmG7ZJZY",
  "key23": "4Q2hFeaAXLs12eTwQod8KtyJpqF2LmYgaGeFmd5vfQn3xctYVqdcw13wrMhZW65jX2CAQU5NiGnejreAUZHNPqcb",
  "key24": "3UsQBYtQuCoNSh7TfvrSRjT5MneUFZZE7fBGkxYDnKLfpiQRJYNqhjqGQJNa2FB8McmUM2QghskcS3bQXFGKfiAZ",
  "key25": "225t1vv4Y97Ne8P3dmSksa1x4Z59tJH3qvcQZvnYQ8RVDzNcPhwni6zES7f22Zt7Q4DVeRDNeYh17P6Kop2Xg7tC",
  "key26": "qtFh752kAtqUNCzyymiVPCo7yN89C7ppDXoEj6J6mzQ4xHwbH5D9wcwwpvPEuHwpqqWaU5fLcQoskiKBmj4D9vh",
  "key27": "tq9Mn1rRKdXC6RhHKWE3wWcmVEwsv4J1W2w9MYGdPAbNK2j5uzpb6U43w13naDcFX5HepnTBuvxnkU7QQG17KHJ",
  "key28": "KkcxfPr2aKwXDDu3FCUmMSSjuQ85ZwB7Kv9HdSJikq2nZFGXVjnRsU5jCrbqmb56TZ6f6ScyX4LFMwVDKCRV9xP",
  "key29": "4bwPE2k1Xi5f9wGsTJ2PkHotJEjksUf9Zc7bEn85ULWDkdeoenmrX3tqZ4dUSYxB3LuWdPA1L3gFekX8stryq6v1",
  "key30": "4ydGFxLbP1NbhGvumSdhJg3oUGHkW3kkBXJUk7x7ELm8nSWm15M9McpgaEubssfNL2fTJ3j1g5D8FJgJnsk21daY",
  "key31": "fn7MfNcZxu7d6CRamHyrakWkcy8MBV1G6ruej293wU2UNmmAZwY6MaNCsJSXJwXtTBNtuzhrokT3CQF97A8Nkdz",
  "key32": "4exZsHAp4TH89vivniFWYdHbY7z5fjGUGNXkNWmnBoH8trmbwo8eWZ4jcLKnTCBETwpZpW2tENc3gEbMjgeupJ1t"
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
