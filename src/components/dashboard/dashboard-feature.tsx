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
    "3RDQQTxKK9rWBn7E5t59ePkN1QJqorJe5iowHbKy5pz1NPfyorKjAhQKwj9UyCUmPW5ffZUhXvPJU57yp3wSWS4s"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qUABgWsFYm4Q1C5En7wWqB2LnE8BXMbzWzFrcbgiPxyyHx72BUaw3TdduhNJGwHvB6vKoDMEoMzNKWc5BSgai59",
  "key1": "5NztWG2SUchq6jFxNQPYGA45qvauagWrqjAUCEvDPD9YDMHLQWrUAVxABkaVxgMAu74jVjEwcF3ARKANndknUvDr",
  "key2": "5FP1y3sG7ZpCSfcSvFvhe2AvqTwXoFYe5cUq3UVzbgTWkHGjseS24LxCg672fwqpoDbkCgwM9wvoBoirmszYwMnm",
  "key3": "4mmXBbRV7zbiBBDMFXghw6ST1AUh7wFpU7cc65FhVph2nsY3wFjAChx8mtrchnvRMvGy7dgVSZCzfzKZEXLdtSo",
  "key4": "2L3vqFmz3W9nh39UzLqjL1tib7vcGtgAdEVAwhcFNBrJjDjX6TG9UJGAtfnq2aEhyrXNvxQKhFYny5Kgncf1f3RR",
  "key5": "44YLNLriUpbemgRnzXTsyp7vq6kAkZVgWSq6WEyyYmuqZnP5Yg6KaGKfnifZxjit6A1yxVfL93yt1ijEh8r9prog",
  "key6": "2vkbxjpnev6YViEzs1boiCWSspfDH4x46hvdBTJRURpkUxrQXbuCeBcfkeWmCr2NjJAMcFzVv4s4sqpeHpDDehyi",
  "key7": "2Hqdbx3E9hFAhxhmjxtoet3tVSG4GNS2jRpDWYjyqoQ97onLnUYK2bBT9GLqoFQns3srAPW1WuxpB1wZwpHcGZVf",
  "key8": "3oGm7svxrJX5ubZYctZR2hjxQp8QtAhyRcqBTEEkWHQ7ceg4TnEox41g9aqgf4PXBpG3tjmPKeHqQH2G351hUK6T",
  "key9": "4uxJqDLGkXrQt643Hj8H7mejheUUCDWexrpFcfUDQAMw2YDRjXGmrppLimJCHNvtbb2ZAtLUQuHX6XzyP4L8EMrb",
  "key10": "w9FJ1TBchYXAMLGk2EVBPVNvphY7cx1pty5Mr77AE1d3H8Qvd487Bi5mqP3WdqreSGwiuUVmcmLoeEC79ZPKDys",
  "key11": "2H4bpYEcuc86eCHSXB4ZFjSnUS9eyQEXNp4hnN55J5DbsXTF87t2MC6LXebuRnsxUu1AuQKc1k2AizcQHy9AWsp5",
  "key12": "2NXymDEkTcDbrZjicLjXL2jtNkvRGAE1C2yb5Trh9C3VoRHm19yLqwvkq6AZcdqxqFCnm5RE21K3pV5FWaPmx9hz",
  "key13": "4uBMwTfe25rV5yP2KDvzyzwxKWBBRJHyJjooEGFuujZ9fTKLbFbLB9diNYiWHhgRBLc5R5a84cYoNCZJDsC2Ypks",
  "key14": "5qY6vzDYTu9UdvYiswgH1EpLU2J1vMvppZ6C9oXHWrCLFQ2oM25s3btyZTzdhx3BPEYSRSrtBzjVd8QmYSw4o9s2",
  "key15": "5Bp9rfzp3httLTEJuUYyZizY3vspLN2GNcyB1npHWvvFfSQaqARGCebZyZs3yqdvP8LLFiPc4pSurk4Ba8VnJ6Wb",
  "key16": "31H9bNc7ZsTsYytq3zFZoewNX8jo596c14Abd2Y91CsxExiYfgrcjWEr2tzcNh5ypzoUPw4nuhAY2cJKn1cmVxoa",
  "key17": "61yqHuSqiRdNcYuGyvn7h9XShx8vL8i2vct5fzbchJrkbfgB4mNnN3zg5r7oQj7hNL7N3Zxg9DpnJAqQQ558pfLT",
  "key18": "2KocXxLk5KffygBt4D95gYFEXQQxUr1ceeBDTCDNPhngdM6JoCP9RyB9aTq3uNr5FosomKcoWW92BCz2M2tTpMqR",
  "key19": "2ye2UTk8FRbevrhGJ3uXzFpnp5baNPtaqRDVmsz1uupJfafGK9cbvKBqt5jduUxEMa8RETXQzdxTBhhrsCe4t8L4",
  "key20": "3o4VV7FPnDh4fiuEpp8k35MX5JYfgQabJXahJuxVptuwdC1qhR5B6TirW88PR4vwpsYbvdW9zUMQQq1yBt69Un8U",
  "key21": "5msWfwwgoxWxvYkrBKKMni4ddPoYiTVLdbzJFGd8QYudjuUz8UiVu1Sd45oKSw2SV8vE1LRz2pdjA5yaWQv5gxrm",
  "key22": "HXcfqNhvxnXxmoUQb5ws1MVumGTh2ThugD3Cxba8fbnsC3GyPUpXzvcRp8V1FhF4tywqZcoYhRY5QZHQWFj7MWn",
  "key23": "4JC1PdUi3yZJLuZwPsRyTcZQTpZFXKjVvChcVHDADkRJq9edKMqXbUGvFPtZeVL5LvQ3JRf9svC56fiaXaYNsm7x",
  "key24": "3Dtvip15TFrqQgGTuvrFsGG9LYbHTEBQxSctQJmmVVVeBUipBV2SEmgY7T3SaFFftVEGcT77zdC7SiPaZ2L9WLjV",
  "key25": "cCTUpm2fPBdK8Z2fh87bYwJ7ZKkYthGxLN39AH3WpCM4FybwTwMzEaVrz3KM5gxZz7ywXA4FSdTm7zMozaqNfZi",
  "key26": "5bTYByTLQ865jDMu6JvTt34utRgr9kHNuXuVgV6htbLVS4BFpqjt6uAqpQG5oxy2LhcyMT7pczjTWFgKQJgHQ2Zj",
  "key27": "63rPMqAzwtms9w7Rug6zhJSkwGvSdywiYuPrTqm2gc7P2boFDyNQp5WNfJH2a6An6uprEYm7xA4RTjzjbnZZg7GC",
  "key28": "386jGoB7cotgdHaqE6WD7JWkpgWyaK3oceGRENpohemxBrmJMptaKT6ScoTAiAoEPLtLipQp72u8xWvuZRcZdEp9",
  "key29": "2YUYznmnwpcNwb8trtSZBSoEPif8BzjPYdtQ48eM29Kho968jTc461hRATkEozYZTtLQsU1Z9cu51u8JwerQwyvy",
  "key30": "bEsbrWWmdqeaGx1rQcJqZraqtXkH6MLSjz9t4Y62CvwZmk1LPH9T6HAdY1ghtAHiMPWFigtw4reiCxrdWtzP1dn",
  "key31": "CKbdGcDRYmtSP31vQ98fQm5EdshUzmGgMrcxzZ5MUGqRZZnyhGnehEiJYKkP49Nd43hXXXfawaDwszBdcs7ycBa",
  "key32": "2JLZvBJjSD5wy9H3Z8S5XpAs7EzjfMiD5Q28psFSdEwmrJtaUr9pQm2HRgBYVwdSZ9gebty8RUp4QarGhQpbe2jT",
  "key33": "2tHephPi51Z3pmHYoViYgFJC8SnptixYvPSsizDcy7kKPrZyUMWWFoE9NYWa12WtRzFMfNbiTY2QBvs4cjM91y3r",
  "key34": "4cj9eVD1ZNDCdaDv5h7roJLCVZUDDKp4xSnzMnt475NYgV8GrWGeZ6ugX2jWg9NTxxXp84q9xmXoc86gYZh9ZxyC",
  "key35": "WqbKMXMQsi4j6myHDWnjQyFNBypqmqMQSiGzmCa7igtxTwpwoANA7W1WYfLXTpW45ChiH6iyJpDBspUFppvhefE",
  "key36": "4yLRPED9usyLTTJoPSMcuAnmWKoUSgjLByPnuetCbUwDr1vLbrsfzo6eF8pprDgFxHhvbrz4Nqspr8XgMNs3Ke6R",
  "key37": "38fbLpFUhUsnnuABQ2vSmRQPSkKP2He4rM5VH6j1X9koiuE6xqedr1peyFo2pMsKpA4TAZCS5NunfFhdR3P9LuEW",
  "key38": "4UctbtAMd6djNW2E2dVs9AdQmm8S6ESM7Nz6JRZ2UajNCF2jDoQKwD4qD9PgLEtXXLCYhYjwnNpm5hWgrvun5AF2",
  "key39": "548g4bHEtfShjW9TvUztJboEgDeP6U13xNeWwqci4vUgxy6LnmHXAv3tkAHbGkB7w4JVBdArGY9HaTWcc3FexTCJ",
  "key40": "5xrunsumNsu4SdK2EzV6QzgsCRCnnHnev663Aj5xSWGCaipYzenqQiKtWjgu64QpPbhKCYsPStpRNSJFU7YSV5X",
  "key41": "3HxJM59FX6U5xzw9CQ3EVgCPcKuFVfnXuNF5DfFxm21RL2UA52NgjS6cZYCmDXwcnxwsKMJteaphEDVJZyjZ9b1f",
  "key42": "3uLoTyN9pkmMBSm8YSnSdDiXbj1ivn5rwDsx5R5LRFmdeGUwXmixieCQxdJjPv15DfYBEWxW867mNKaMKXTJe4y6",
  "key43": "4qcEm71ZRxTDCWMgw7knL2voQD5iZ1jQPUKuJqe2AgXuEVpgr4A5Jp9pYx54hRM21nYri7ptzL55J7ZoMa9qB6Sh",
  "key44": "4v6ibnKrVoJ8xao6JUnkzNLtjo4sjbTZygWhwGUjrrkRU3vSoDsybnMGmw26p1CBAXMKDpaFnGzCh9vxe8yHTRW3",
  "key45": "3e9fHfHuUS4rxSqBEWYX7KooerFWtpYifZ6pxF6fS1K2wJVb6Pis7Z4Z7zYGTavwNT1aXQHz35RxDYwcPArermn4",
  "key46": "iwDX7QVnvpU8rdvN7ff572cdunxSVpe43mZ4pii1fs5NscTrNhrJkXwc6tqn7jzwYxo5iBHjTNJfAE8ktvaTH9n",
  "key47": "3wsVPA1enRSirDH1TMqeBr6xmFGCibY8K8Uj6gXHgjVJuyKgbJ1GVT4BLg2gqXPkYQGq9aL13BBx65HdoKKsbNAs",
  "key48": "4YXBtXZ9tmFCkTDFFbSFjZff7LMnyEgBD1A5YLQAWrGi3zaFfNeWHo9XZY7eJaef9AxVK9LbGMhUJXravdDhKDz2"
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
