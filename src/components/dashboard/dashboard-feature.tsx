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
    "YsN5oVgMPKSkqw9tjJXJU9KphbhMUq5CddaPzYJJiiNoh7a2dKDVPLP5hhbqH1gcD6Ah68VQSmXfn4J9oFNo5vj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "dkomXrhg5XKcYqfdLbz2yBTv7JUuKFvnwCFPp7eyhN9eFgiguF4R3t5nyoM85MYruxdum8U4QWmd2wEuCVaMVxW",
  "key1": "p2NU7q11p4f7d4Lr6awwGXo1u8jqYGtRD2YVCfdytZCTvuiPPWJQTEJjVf2r1XTqAVgU9xa6AnDxqf3NHCu5dRK",
  "key2": "41GY55Tz11vxDWrd78EDfxqwwAuHS36LA2XFA1PdFCa47WTJMWcFBBkwmpDStrBQLs8rzkFHHrTuWnE3UkfqiR5E",
  "key3": "29rvmfLzYpy22MTAfTDnXpps1d3vwmyFD1BKsVeD6Cz5ChbBMVWFkNoqZfYNRp6gqGEhigFCzkzjwD4B2MEj8oSA",
  "key4": "3uYaHBsTrCBYnpBMJzHSt2cv2Xso3gEeam4zvtKP1m4kMSwcL44eotKWnH2KHV8WHcaXfzHkmaiZGDaEqndAPVXk",
  "key5": "5FsiabgaJWjff6ZgqiQMrs1BJJkH41hhkphgdJCboNSvuMzMj2B1xjpLFFSPUYebn1Up6BWHDAoxVGAS1o2YW1Xw",
  "key6": "38MXzJuxsmUP5PXHCW9CUE5vHeSjs1PPwJiC4eoG7qgERBXeDjMgnESQyWZXRhhvr6popEnNSKmZSrvh18KjNXeb",
  "key7": "55HAe6frdGW6QJrUGzKxUKADYmrAEJ3F1FpaQaQBi1HWkS7guVwnYCJDBBNQCknxssAd51RxNdUi1vUf5V8t9uG5",
  "key8": "x28EvMNdtcBvv2MaH788Z7sPAFpjX3cmqdmnygYYUHc5d9bUeVcHYBvDvo2QM1rZ8PrBE8eS3fnn9gWmWCw5NV4",
  "key9": "4dwSXYTu3cXwhkTqLLRUTTgahuxqXSvGneHkfTwvUwTcCLqkXY7wfQagtPKCdtSX9tP89SLQmb5WZSvjixZ1SERt",
  "key10": "5e63cLtT98WYsMph7XLcNNx6xckrW8cfb8dkrptQpLEYnE1RjBxc7BAZKVcVSN2UvkwALo9a29JRztQRMYHHoDym",
  "key11": "3M1BtQBdGg8qpauSG5Ei5wnfznWreSuKWkrSC9WoDbvmSGLjLRvyRpbjW8zTDyW9dnoJbi5uQmvUUiDn3cYS6cpo",
  "key12": "4ornfQMPAWgNsf4BjitmKe1yGZaYfYjVkLrNJhAF4Tao7dXqJKXP38jiJNk3okuU47HR1rCdWkdUh2iegzqTJY4t",
  "key13": "2xUbmdA5KCvYyja8uQubTL4Xm9L8q9qBfeZWXjU31f9zjW7LQ7cVzwU4UTMcgPcbLWEM1p1HgATpVHC3QTkR7Rdk",
  "key14": "34DjZpHAh7Q9gBLSbAHnb6oTox956kiFSbB63nWhA7Z6kAY4vSvuaNUXJoAbADKxz3wEAjKgaADEUt4j2PjaxjTU",
  "key15": "4s4JKkrLvt3m68NKWhNCHZejo61ebKiMCJxLCg6MvzkoUHeuzpDa4Bq4Q45U5wfJ59LXrVje3r1B9CDYrjp8pRHw",
  "key16": "5Xwj23oGNsg4mb4ng3f5fkhsnUXCGQ7ZSvrj6FKUpULr6PY2qVnz9VtFdatepsBBXTErTBU544F478xbKfGTH24r",
  "key17": "5EP5E7Jn8gouYDWytVjpMT54LngvaqUy2jXkpNjnhSGbJcHuHFPUeKV7gJun3F6bTQtk3s8vbXvahqD7EsAttNxK",
  "key18": "5UpASpCjXQiaTyiyDvvgtiQEQCBPqUs1Kzifzrh4PfN34Net6TJGrv14ottSkKweh4nB825TGeosK6Dmt1fvAUEH",
  "key19": "3zFZG45PjUQNcBrV1wrWkz2v28ALQq7B3Gbekvr6kpSf9uZT5ez4Mbw2Qo9bvAc8GuFSLZ7isvwXdUWMr4ZYSdBB",
  "key20": "3juRGiW8aN8FaDMFRZptbZ2pgRveZ9YWpF6GWRNY6WdL9cS4DVTvArcpVFhJgGGEGSob7mZCrX1hJW9Gj2avJo7z",
  "key21": "Fwrn6rzn72zzoX4qgtfysBqKNLWo3uWnYZcuA5WVZck38DnvKeXA659mzxKw9KPCDB3DjGHaPTVaKjgi57LLWKN",
  "key22": "23sBQ7RcuzuV9sdxZ1pF2oqtvCYHFdoFda9wP8JDEhQkroDktj2iL2ECUb8ePHuQ9LhJE7aBboi4UvKXXSyQKfsK",
  "key23": "ykuSZFwmCUQ8zSSTBohd2vB9ybiw3DogWF4TszBq32ZqZJwyTkWMzLfZvVqUkf9ZDAhoUpLhhEM8Yteo7Mg3gW3",
  "key24": "4bm7tqvKemCdxM4j8QRA9YD33fgeqzmuag9JDAmptd8sWhQ724xTX8mVh6kKNhjGhKJPSrjaYKjvX9bU6mUiRrqK",
  "key25": "2tHrVnGUMQ5p7yZXVJ58Rp5M4tPVtJNCgS6qv7HzgqRpvAuQEn4NvTgMzrioHKa4kFmmuGGPbzfAQqTA9Y6gfAnB",
  "key26": "2rF7uEeFVsUqiR8X5VUEgBoByX1Lu4tNMa7hcXQztagzjuwd5MNbuQE9ZRL1ka5W9A7z8dL8kBYAVXYGKFo9mtAb",
  "key27": "v66K8PHGSMKWcoMBbt9h7r2ZkbcrGTGMpWLqFPqyBxA9WLtscxerAcpRpbr2N6AqWmxXK3aSyVXr5Y4h3f9nDLq",
  "key28": "3uvwSFKRt4oyQ8GKdBtAHam3aX8hVxvNwdEhq2qcuif8bnF3vNoHaCeEdLSC2ZCA1kCSCUC75MqzBeKxt9QybHtp",
  "key29": "3pN6LC7n6LJ4hHrR7q1zXewKyw47LdCFq4GA5YXzAzjLoN6UjKye2o2gBHaZWYZq39hdgc8pNM5kGbETjMwp16is",
  "key30": "5ExbMJbvfB5uXcaYaCDAbywNvo4disE6uJpfKnPEPWHMzZVRtRRRkhaiHKSRubRkuyb7AZ5mQYgdVnCJjftzcRZm",
  "key31": "5oiQ317sSrYUS2R73TjAsgC3pcaFp42eJEXcbzwq9qqUYUvyAHwrDGetTaLPNM1T2kQ4fF8RiMyEnRG2T4PAukiH",
  "key32": "5VACp3n4P3PiEWB1awzGRzXqXWarwJ9x5AHZ27og47RZts7jPBnXFcbQvJPk3UMxtCxjAM61CgjWEpp79oCmytnU",
  "key33": "4cVUWFc8du9uyfobyLAWkh8B1Ez25vZGvsoonL3QA4ABHmT96mqrWsf3CgiYoUaFUuLErfti2QSwQK3gpq6wxVea",
  "key34": "5vHwYkHmM7WcdQbAnFRTWPtYgNyCGaG11eSHpgquM4dYxPjznxZz6NycGwxJsc2WG73xz7pZAggeGneMHAxp5h4",
  "key35": "5XK8zYcWg2wCyXNunMX4Jny9x1AriqkdNALckvVYwxaJWi1Aimoq9XG9Zv12xEHgBoL5A9FcUvAmcRBZXgQeRLQW",
  "key36": "3V19CEX8qRZj5UKWZSbUFpWk45TgxWQF4Dq7CHN8ea2E7hXzyjYRCbdWd6mSPmRYikkyrWbsFozAqkpcJ9uZbVzZ",
  "key37": "62vnf1Jgiriofwz4DsNbByeuihNsapXYfkKrgTT15czZLoPLnoF6P2ojiSsCqGdtXtJhbKSTg5xixQKZuMMvNHqt",
  "key38": "vAv1wN29FcAAtWEJhpMKNtvCzBRMJRu78WAHN49kWRRKXFN2GxXbdXX5CWRNfkP7XFiEfKBJ1kNnCTDezRY73aw",
  "key39": "5YwsuPLmsnRsCX7cfVBwfjYzEaAHbWhGLnZCCtc3fU9PrbSp9dufENXkBxxiEVLUQkdMq63jd1oQjrk3P2FR2XBX",
  "key40": "5c4uYvENb7m1qbHeJoW6qSq6moHrx5wPUrEvHAYsygH2J6NtfdhuhebPUXLzagPMVXa7scHVhTqcUPWXZLVK3p4W",
  "key41": "5oFzw1Trh2u2nMjuTybC9GwCEsQbeu4uBbanJ7QPbx8TUbLCegRzvM1zPTUHvJepgxJ7nXHJxUn5EZPbd2nEZzvV"
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
