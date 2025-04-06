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
    "5Rb3c9jdQQdkLmFUFvFrNjsiUh9fggB91PJH31ZSBFNb3xVEEjkabimBYoiGq1oazMU4DQrqh4nmUKXftP9BPAgL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wPCmTbpBsY34rRKnnhwRRgYRZMksJceXeXMFeJUPQ4mvSaCAT7o5D54kAXHA9jHsQQf4smaoCuq2fkqvXrRp4gj",
  "key1": "33uNB2LDyTLoJ3BytPtFBz6UqGC9vMa1zZhQ7TbtcdoBYnvQYYf2yuxyzK1ZzX9WobjyGwe4acDh8n98fjViTzjd",
  "key2": "3Bm6MVHhTb6Sfj3hPGdh1uESpt5tP5EdNtc1kZAvxGZaZpRoA22r9QV3TbJTHcP2vUzQrzs2jZREMRzS4tH9MBqh",
  "key3": "4fJQdqiikV812m7fugeWszVRzPgn2GCNDpmjdAYLnT8TEHhpfPMHeXq9EGPtKDj3f7ej87cdhUnkSkCSRUNHkNcV",
  "key4": "24uriq865BEux7K6DCgwDGw4DJj9Hv1sVobj1ZboDqnZnrqcBJk7b33RSgQ5LEMCRrkPpsyupgzmEU5F3zab48Kp",
  "key5": "jVkRP2ytcUJMaHpP9y11BxaZeAJ41n3bLQqXzJynEmKJyitm2JEquFEipynUxra6ZcX27yKeC7mn4V2xVGT5iih",
  "key6": "hJm5UFi8XrGfqho2dquuTGKNVVK6avDixgkan4SPzKQyHAZEnEEdaMiGgMd7edbDDwmb8V8qaimvEgnHrfHt4M7",
  "key7": "Y3KG4t9oUDnTRsJ6CMWHq9wkoXEGquRCu4iafAkrixK8MLuBNZ82fZmFRQU2UYnhbv2w8e2gctJvGzhSakUBgSB",
  "key8": "3bGtU4DEus5Ue8pcAN5jswoCRyyXPbijDu97j5pne2sKu6R4Zp3wNTta9tn3CjJDogHQepWF7Ng8UeTfYYv4QpNk",
  "key9": "jCUZ7Xmv2uJpAdjjFtkrveKRtsuDpSX18sk8ruUvgJzTaMfgnWLRhG51GvvLMYXLzD192ZoxtMDwPJePdeFKUpr",
  "key10": "HHAwHpKCDtj5SvXAym81ucevEZhV3KoZfwnDJj1zQbfw6F9BrP4Qigd2mknYwxCPQmX9EfvdWPsiNQwG9KmrsNk",
  "key11": "X4uSmhJYhEwCfcwivJeepfzTR94sTkkwEuHC9JnytmGm2NbXggb9V9xkBes6QHC5zSxYmeW2ktr8bkKRjrY2mZH",
  "key12": "2SxtvurUSqUHRF19ZBVMFMv1uqiqiQPKcg8w7oxrBCMjSEaJEG99733VwKdZmh5ZTak5NDzd8Eb57d1p2t9Zbiwx",
  "key13": "5RrkrQTDDsYEdcatQ7uJu4DyZtUVvS8sUpcJ4xrsHFJeQEpDRoC3tUJWL3vj6U8CMeL3MniZdQUvnWujmCeD8KsD",
  "key14": "3tKLUHkRc58cY3E2uBD9Sqz3Yfyb2yqScERqYT3evezvZQWqSkNiUCvfaMus9gUFjgVVteAu6TgctgP7aJxjkaYP",
  "key15": "3DneGTrH7TERtxUAKejed3GUEc4KmN9c5cVRu3MC3nMuQ1ZSEsote8MFDBQMuwouJgDgJunaW7sCQEMXNLXYXTQ3",
  "key16": "5vnEewiNvmLm7Kkn6KuVLJTK6c9GQ52PM4s2aFduuwsZg9dxjCU2jtQPFomdEyE4XAcRGxuf7t3KHNg3XC5bEny4",
  "key17": "vtyzQS8aTPGZX9DM44H6m4BqNGyMD5Pp2B6MueTVZk7vM3QtfiKoysDp1werStcCG8xHtrYoyRYoJRNn7Y7isGY",
  "key18": "q6JGLHDxRWLPg3LPh3HpZoUfZ7S2dYDpYSf6qowQMpViZddg1u71hGyp4Ge6MuyYthAvScRUd83X2kcXC17pEW3",
  "key19": "4tRQ557DzdxxmZFfDiwTWwkJFkLJNxH4c8FUaSg7SWfSLm8NwFAZ5Rma4kouuEsRXiiMJyzQSBzDnaRMDyHePEHV",
  "key20": "2J8VRxugp17zpGduYbLyZCMYgnXdYrPPzQW7xP455HHUiUcbuZJxaRHazWdEVrG8TFjRHAHbfcrefzgbTeUMXPBq",
  "key21": "ts3fhvrNtED4JxfP3dkYzhCSp7hHALC8M1BHSLXAGxPa6ob5KuBDsxHBkJuP7KV9e8hgersqQzb6EthfE64kTZ7",
  "key22": "5S3XzmtDDrDJQwf7PSpaRgPCA9JVuajRZCBNFSkw9jVm1x63H4AE6aTExrME27LXzFnRkPUNeGVRuhFZAiiky4Js",
  "key23": "td9qFwRFFf6oGyp2VuJkgMYYvnuAJ73rj5cR9R4tEDVMxZbXYcLftNfAfm6dK1qhZiHD9H29wKioqNvMFQzxw5k",
  "key24": "2YNwAJJvWNHdKEWzTkzw4yKMm4BuR4JmV6WJsDunnncm6PqrmpKChnHdh9CURfNQm2DLhCaTwQAKm5mBxTxXgsBu",
  "key25": "2Gxqhxd6nST3o5bU2Xz5t44JAaz8uNqqUj368ZZetFaN3kR2YuN3bi3HoGQSXyrnAyrWyjjpm2tZWQ8UZnaGbEp1",
  "key26": "2e7rQLw9xTPPjx6QjH7pQdDFHUyxA4cTX9o5EshQzYaayW48yfw7NAeaypWHNc2ssx3HUw3G6ftw32xgE4fvGXdT",
  "key27": "3oprjBfDgNHrCLpRjVZ6f7XF6onTwn5TDGjPgkwBwYE5bT9znNQzQUhnSPnv4upzbubPuEBWqbMmGsjzs2vXRtZi",
  "key28": "8cAdiBdEdkfgH2FPhMh2xBFQvp1DR2HpEwNs7pgcGfRAbkXCPtwxDuohTvDyeVRps1eCpKy78GaUdjeBVsMhA8P",
  "key29": "2CL8NxCKByqYW7Knb42cQdig5hN3T7Skjq6dL1H4Gh7WcTWfbosjRA7NufRhXkrEBpTG5x9WnBB58BdbLc5jUs2Z",
  "key30": "3dg9xGyHVgKN8rNWepJWoA8MMLA8DwUzfbqoy2MzQeLH8NSZLeAWidCMgcrLxtb98srmPQaCNC13BZ1m1pNhX4Ce",
  "key31": "2Y5hKapftYbYCAUGKb72DFxXR7eFxoTmVhwdPoHNE2KqaHyk4KWKwx6PbSC2mB8cnEc96qqbAmE27DjVGx52YKrf",
  "key32": "4HUgXwGfRqrWvBhMChUw9RqN2GZagsvQACSMSCQ5ZbSaF3LHE6rLDCQB1ZhxzoC2ABQVY9pPS8GgqZzXPHwba3NY",
  "key33": "5G6znLKEQTJCurC9Vnjtf4Z1c35x4Yik58VTPKD2GBuoTKkFcrHLe8MgygyDW5jWbp5nn6T6ce6e9Qk6RsqrN7E8",
  "key34": "62pSLYudoHZ3qdsA1uPdQ2h3VP9pqpCb5BQBzfDweLppQdjBmhufZtAKFwhVfiUzzDomawbgCSXDj84KqaZn1w8M",
  "key35": "2YDiYZmXwdBcV1WfQ36KCjd4NjyPPcx7hGK8yP9EW1NFAkSq3zFxBdRkeYnGYk9JkLvTHvBLAer6LQUCfMza3AP6",
  "key36": "pBVtwmQvjc1EzJCrZY1oUnHck25cEGavbs2cRxwHsL6najHy6EYNjhL4shm6kjEKs5RtEhxq3YQ5GASBpuCUVDr",
  "key37": "3tKhZCR4Jk9V7Wj77U67HAKz5xGm54bCEGUFXrSKidM6oHiLZM8sRk82ThuYyrnCET7q1uTZLtzADaD2mtFmTS3c",
  "key38": "5zxc3w23iZrVEfY2UM9e8cDnpJTVsk4DHzm9NWpMuXYfrNV78mAZowQjR3wZWSX4BqjeTdmvvKeuHuqd646gKzv9",
  "key39": "4YbpxXuVF56YWM8ASuejG5HqFypoKHk9JgM2FzXqq1kT8jkz3VDYXwbeJEBWCfCRGg8AvBiTAaNQtnrXq1zkZMNL",
  "key40": "5PHGPmyKPWRaqxEiFvVzXcBXcHQnCUVpz1PG8iCGvHkfj3bt7En3G1z9TmS6z3oprKsNY2xWGyahDEqqnZp1g8tp",
  "key41": "2Wg5uK6mYK7fi9rPnFg4Rhqmbwd9xosjW9u2ckoCF9Sq2RGUqQBLrgUE5uF7oLZrGJ9HMExAmES1D6BokumUZCq2",
  "key42": "4ZNX1i5oCKqfTCvbD3tYvdEKzKSL2G4RYujLgTVWyNjYhQFBkfdw26UvKXowquZ8347t9KdKvaN2kzjw9cSkufMv",
  "key43": "3zYi48V2kK2jShXvxdiujy3PX3pdQPg74jZhrKPBntW4hjd2rCwhpw88A4NL1HQseB32ZACUFVvrnUXtjGsWtWy6",
  "key44": "66qt6zyN8jWDhAGNWhiTwjLRtbMDXHp5zPT9GJsmtMuR1azMesCUgKwKyATmwc5p9PJqkLPrYsLK59XiHnXJrGqH",
  "key45": "23D8nn4xETiztKmV9CJbt3TfLwRhj9agbJTJpoReBX7bsV1szqexbbp9YjqYSKBDGa3ioci7fpetR8kH8vqkw5No",
  "key46": "HfcLxdkKMGuSc8G7yd5DygAjw3aXwbuapU3rnyPsRrLmLgCJAScQH5CgHY1nfq9YwYDtAnWy2RBFnobPhc4AkgA",
  "key47": "2SqM7VtiQBUwsH8P2eBhyhdoMEEQW1XGChZWYQxjWLmvQPs9vSAHsoc8BRTFEJ6xGqCMMme3hLteMG9sM2nCx6P5",
  "key48": "KieWn2z4VrBUofHPww5PNcqkyDG9oktFP7twuB1xnvNqYkwcn6AiX6zLwLK4F6T4Zp6i3un8Ut4UGmGRwPCaRbw",
  "key49": "3syjJbVKX9u66rbCpYPEEi9fRNLovay9ydi7kuTykJmxx715BtS28LV1nTu8cSQ25DRTP4Rp7pnRAouc8ZZkvKaR"
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
