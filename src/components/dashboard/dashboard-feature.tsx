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
    "33xnaoq4mwvRHJMDXyzdusD8XQpYb4yqsYMpaaFYfGD8hkHMNiTRa2QHdWBCghkMdsN4QneGmvfpKvmDtDD9pcu7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "T8Pie4xNf8AgwPeMK1xXuBP969JudQuVGRA2tHwGpFg3MS6Y3QNjpebwnCTGegXPprsM7Q5Us5szhb1g4Mh4Yvs",
  "key1": "4D3Nu3VHuVgdeZYpNjnnM3ZpBvTXftwE4zuuAtSbMxG235EBfeErJvvh2ZGsZ6yoiLk2Sa5Uv3dw54zVYvkWi54y",
  "key2": "aMhHP1w7Ggmya7FrSSk7yJr33QLXuF7EBJFNmwbAZ7qXXVKPfonnGnUuHG5Z4UNEYxz4txjCYav71xfv9GvrU53",
  "key3": "566XZYz7TuU3xb59QjxwhRuxMHAxPsNtH4YrUawgGXAePcTVTzBt7adKYeaoAY9GRoiUZSCrmYUfhyf1R47DD8DX",
  "key4": "3XR1p5BYBbZCjcm3YK379WmZLquhy4r3T1oGDr8pS3uchsRGKhKYzoi3wBrmkB5PYd8BQCxrfu5AcJ1L9bK759HP",
  "key5": "5yibm9cRTkAmeXCTo2NkkMLVsCVjqAQuDVRJ8FZNkVCaZvprPsBKdRVDC4oiQKif221wQrcWWShwZH8XqaUMEZEx",
  "key6": "2WAnyNm3JX4M5EhnPGdf6SWwCsB8QqaL9huEk22bAy6QYPkxXHZuE2JtdAjz7BnDMsGThqUCAvmK6MkZwM8nNgsB",
  "key7": "61AWrF6m9btixEcNerjdoR5Wv5949LZXc9eG12NDX19XxhU53bP8FWeg6JjsBtCPBZiLY7q9FFnj3ETp795LqRR8",
  "key8": "56TRxT5RMvkFyZATdgXbxZzJRqABxhdUxUUn7PVTvh9gK9SFt29QUkXTxmxi7VoM3LTC9arvJqQNzfyYqJXjHa8e",
  "key9": "61eXEkHC6gpoZexNYddrrBW63VZjc9DQL22frMHgt3bRtYcjquvYDmC7w5GqgkmVkLPcmTE1HA1EewkwVyiNEHs6",
  "key10": "2PPS4CgAZ3vTK7GyK9VtXwUneQ4yBX7TrXEodGtzbkLcLtMM5CHcmxLLZrUNo7DTMnm17Djaigx326pkzxMPVCma",
  "key11": "DVSk3u3GFbfSY1caaTmYgXRrHrFtgwbWf6CSpGh92VHGaFATxviD4htuPe4d3jHrepM4uSHZvo2ecwCEkJmNCYK",
  "key12": "5QNFPqtRsCDxva6kK4JTaPWgMVQPAgBT3RS2D6GLVDHd3mbZrHh8zCVDc1kGqzrvrtTe1JekwYGo9NMoCnVkRCQU",
  "key13": "62LS68dPp2CRjCwUP3dYv1LhSGvcb5suQ1jzhVWwBwT7ms4Ehc15rAPR3dM97uV5UHLS3eFiwgFSuwFUjVJyqQJq",
  "key14": "34utehPo5ZrJtxiuUo58wivfByXQZ1W2eM8r4Q5P77CiWb4PbqRQtVYB4P9XstER2eNNDeEBPMQJWYQ8m49Bycr3",
  "key15": "4VXhyaKhQdEu8cX1wJM2YXxejbzNGBRnx6fUhswdAFmBt4M8nzCfk49Uf7D3SmmahpZqpEePfLrbSngteFzPxvWv",
  "key16": "vu4cx1XXFSmmDSNisXYjR23YfLMLr4p7Quvs2BsM6H6bMRGkqnfeZE7nQSBaygYmiJExxVR9RSZaiiq6R1zLpzo",
  "key17": "4GjGXrZPMbpCtMFqwTxNM5rdbHAkHj9h9GsK57zU7H8LxwQAnmqSqzudpSSbpwtJTvDXPvwAxzwi9KjETGvSNgfG",
  "key18": "57PZk8VgdZck3EeasRCvLWPGD9DUBcEk6Eqh44Fx7gsA6BV9fVCpcFVLiG6cJLrvSscE1HpmTbvdwess5RAaVihM",
  "key19": "4PZci7fVZGcC2F7XnML7VW2xU4EvqeSiKEf5wcRvCAzL5ovyXsDcSs1Cq8uS56DFN2GQnfjgtv1WvoVpnRiPSK9u",
  "key20": "4ngqA6fP8hXcYVB55DpxVLsfYbhQ7LU61X5Zv2SCxpXt1hVmiCPPMa7bDaCS7WY6vrA6y7LktLr68uQMX838dht9",
  "key21": "4EEgn5mWpYGsHyidxSfGUHuCxQVTXc4t4E2JZU68o3PjUPdFtd1wM49vVQv4EcQ17UzfkFKX5iqK9cX5EAwVhwZn",
  "key22": "5FAVu9rAnSzEvvjpX7iCYg8G3yeqvhua3syipAEXsbvgEgS8HK579vi5H2cvSNfm59eJKkhrQXZGdWec4HaLayiR",
  "key23": "SSibQPHKSfjQxdouZXRJDSEC8oFkUHe6Qm5Vfedh6Z8gjhN1AFMDYknybJ8p5rZ1A9U9BFntkc4gx8yr9H3rFbC",
  "key24": "hz1EcNndFbbQquh5khHZK5MATPdfd52Z8zydAD2VszipydnqRLMsHJMab4t3RzhueYqPVBauwFPaMaQagYKzAqR",
  "key25": "4TZd4CgHqQLRxmyquJFPrgJNAmTLkm19rGJQvy5qe5iZL1iVBY6Gr5hiW5Ks1Tx1DgCZ4SsXfmteRaQWzoFRvkxW",
  "key26": "P9J7SSXAFxAHJCX4xuaQfULJ8Fs1zggjMwxcvUnrJ3vJyk5S74wzbXUoTRDxQeyMi3BSSfE9mwDDwEhfmP9tajv",
  "key27": "gPXTuVsvr5W8XwWfVSues8DZG4X6ot8sVo9FMMyYyMJto6SF1CGJ7c8LJUgHxYe9aatf3fnj9HZe8tmCNnKv3xi",
  "key28": "4xjSrH2By7kPdqt3sxx25ZGzsWG2gnHaVocZgwchxubjoet3ePzVLACxmdWVsKwGTjVrgkYex1uFvdA8219BRtK3",
  "key29": "58rL4h1GoWSBKcDmdZULQ6UVzgmqhzU4g6BBSDrnJoAFGYvfebA4gPRAHdaaWZpUq8X1uzKDEDUvR4Awx8rku3La",
  "key30": "3wCqDRtKbsdKvwvp1CcW4UcdryfkUKUFbZ2kebdts7icgvTfHsVLuSRUQDqJBumT2Re9e3X3HFGAqGg3Suv3qidq",
  "key31": "2qL2ZL8pDQMXtWGLcjVBdaNL613jF24fYbWD8mZMC4FoekVbBVuggoELfDLDXyiWCyGmopQ2uD3xFVX2a4zDDZ4r",
  "key32": "4fjkfZrzkCkr6fUy8PyhvAN8QfMZNSnoYSWhL6jd2tS9uxiZRFgE9VU1Z4QSXxYiu89qYzwKZn4k4TuUS69WfarA",
  "key33": "5RfBqso8peBqvvAmTc7gib98MN88pSEgEme4XtZnNf7dH3gy88rideFVMjpbrfsrE7SVhJT9NbdmsZfSn4SwpZs3",
  "key34": "3NqCcr3HYipufBB9sY1ZggrgEptMscbSWrGdecRimU7KDHHo3FNox1dAEB6BHQDxfuDXbFVFs1UAwitScyFZibJC",
  "key35": "4QAHwPfRb2aMA1nhixDAFF1riVfse4iVCgAEuajpzGwfrCPjWFibycsustRJWTjm3hPw7yGba6AResvP5fbhxMbK",
  "key36": "3zBnGCrnB1nDAuWpF1rftk9X5qXT6vxgP7UC2AhxH6NMum193wPDG4HAbD7aa6yjWQd5DkqbFz3u9XbfqWBj3ggc",
  "key37": "4UGvKVfavoJUwQAMmXg6hmqTW6m5fziwhyJzLoDZhkFiXT9qjBs4MQ6BpvgKCTkKn6tTSdPs3PS3hfW3JVq6sB8z",
  "key38": "468BATiHomSPaCTxCZFPoqTii5XXsPpZNXoyn7jmS2AbUQm2UmyBDCkYLM9LbJNEsP2k3T9ZkUtLVqg1bkvHQSFD",
  "key39": "3MbfunkkYPBRgdZaXPpY8apgxH5FdZ8mXW4SvViMNcouUeRQYjeRrtZabkGUSoaog63aR9o2B38KY8pa6RD5yxuU",
  "key40": "32z26rNdEDxNu25BT1ph7meibwfKQVcfnK5WBY1YUHdLR6cNKxy567UGgSLWgQYvqcrSa7dYiLTuvYzM5ZRp9m6z",
  "key41": "3xZEYFjPPPZLt5bpfhC9KTKiTRSjTuTcqqbmFGmrDWkkVA2yg6EKWGF7gJk8MgEveD2JKFeXAFPK58NHCtmacbRc",
  "key42": "2sdwoYSjGkAnQN6hUfbpL6nyHzmJFNoW5wkipqtihvpsV1PntE7YYFMbYPV1sydyPApDd5nK82NjV6sJ5Wf3tUeC",
  "key43": "47ghwCLudhYQ4dfsBpLsnkdgcJrYP61NZNLxeynkkTriwor5X8BVfk6FqoY93tN8yCT88sNBsi5A4GhA12EcY54Z",
  "key44": "mSzLLndMSQx2STV4wsLtqvKC4UmoaD9VAUQ1sUy8xXQGnJJgNQQrBN9Vb7Lk4PhjpUrAp2GzRfq4z1ebCDeXxXX",
  "key45": "PtHpbXkGfGvu3r4zKFCVU2wmsQ877zsrTzdmz7BeDJxmkxmf7RaaVtgcm4FmGC6JUaH748MnfcnZfAFqvEGxfmT",
  "key46": "3KRUgqFJUxugwASURjkeJD5QNsRsunsDAS24gCv4TRXdiVGAberPqGBmUZQ1S9oLn6uxbnsvhQxyjozQ6SvmM3yt",
  "key47": "4Dnh4x8xZu8ppU3uomVyaV5crGyr19hLQWupqhBBZqsTHopDu1bJCS2sZHvhJxYCi5h8JURG9R5wSuckebydveuD",
  "key48": "3mQtf6qSAMMrNiXA78pg2uPpw7uqZtnVXYU8iugTuiPi6xKMXAMoD1qcYR4bPTtARPLErqf7XxzrWjJVQA7EHGTn",
  "key49": "2FyipbYi1nYzLwmkZGfqgdcBP73tEKtrdz5WqeG8PeAdS8jxEaJ9tjsPuAdSvprtqpqP3ftyX5Dw4w8W5gUYKwPz"
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
