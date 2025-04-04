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
    "413Q5p6JtiM7kEDAwjA44beD4PHRZDvFYQDuufU3JqaMd9eyLhC9PGqLKWLS4TVFMSgtjBhYKQfLKBLGzVoLqG45"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qvrc32HUubLNt7JPkPTEERYug1ff8QGWurPMJ6kn4NmKJLvbAbgFmgHLUCPSAsc7jVgQbtcHbaeuETfAYXmGntd",
  "key1": "4aujrWZANuLRm8ggb8AihCUSphcZgjffQZZDQc6T2EgmbGvqXcYe9gKLddaXtugTuxxGmZVR33UcSr3t5JijHx3n",
  "key2": "5DAcgKmMQ5UhR4YH8Buq5Us6umC4GoEYvcYn3w3gLU5bms2YGJozvYXLSsfw4XUWTbQZMoedMRgM98wsvvLdyqiQ",
  "key3": "TLJHfS7gpikFxnvxGJk3E6TUxuDjNPjqaGWQLJ9bAypWfqhHWkT4Xke4YZShZsdo716uvUY1M1iUmD7rRF2Lif1",
  "key4": "3Lw5mX2nKRYNbFRb6TUYi1W1sdt6tY7iWn1nvfRCuUeR25ajBoHZujzCL5igKoYZG6ym553WxXdoTYLabnvGTB64",
  "key5": "24tziPz8DBKsmBpYo6vdKBjbM5KF2f6CDejwQwbqjD4N646FU5H1tE26KRm9rTXFHG5fgzTzW7FZSqmm9HahkeTN",
  "key6": "3RCJ7CfuxFLKhcADrKrjEee5Zsub1hGfUoKY35MJ5TgMr8xa597oTDj9nkMm1g54uTzywFjLSHdwuUCxbNe87TaY",
  "key7": "66kFjbAZ9ER812pre1TUufxcwDwwEX2U8DeJmnxCsWW1JALonpWskUnQWZeNme436cXLVMUUojwYffNdXgjDerHi",
  "key8": "63TQtJeAXZjWBtHr8uyRF4uWbQfb2XXH8iUMYgR7zdU8jCGi7ZhYFYZmQb7mJoKsMVuCdXE2EEdf5eaRh6aTDMA",
  "key9": "xL1eK3JQuDqMgq1LTHF7aXDtdGe47g6hRwoSGgmdUJAVidEVzjMFcCPd9DR37HvRWp8HxJTopaDssF9GfRojR6j",
  "key10": "5EtKp3Cr6gLxB5oDPoifFp2Mbp8bz1tcy7McnhkM2vV5ctAh8pk9bMFZC6w2sLxj82L5jKimfYgiQizQYYY9g9Pn",
  "key11": "2k31B6f3RC1pPerjk1AZu4BMfYUuQ2XyfaTjw3GcfjhCa2gS3uA53NefLcpkE8AneNBgiKuJJFrHc3E51kWfsGF9",
  "key12": "5qUSacVMurBLyFovD39Jq4xYxerei98GifL3GTPqBCF45ydTsAue17VbL4fpa8goAyMnoPJgMLHtHnANKgHiSNte",
  "key13": "3xxFGqepdogUjVSw4XjtdEuLNFGBXanbJ5fpAxdGmqJPTRBmkBgkCK2FWNMhwfg2W5sPXCtYuFqXZo3nKB4RDsnA",
  "key14": "4cgeDuo3kTEKDDtBfjttKyvomVTMMctap2YV53jRYUFYgdBDb3dTXKrQXn2NDFffMKt7PvzQFNEswKvNQTRPhHm5",
  "key15": "5y5JBndK117TJzt9tdeupVmRQ6hKgq131r2GqBTDdJEGcNTMDmvTXcy7JVNaByHyhymTu6YXbnuSDWQTDwMDcxmf",
  "key16": "4tiPTsEZ7tyRcPomtRGZK8DQ1K8dX578H3UzvYGFu1cg2Yk3U5VbLLEwbyJP5n6djDpRH1cvGpXesHWXTENDvXYc",
  "key17": "38MKAwExdUKjgpfkDLiyoSqgCLbhBVG2rAaYNs2dP1kTAp7naLWuW9pMqLcn5xpwdUbjRwrZX8h5YoEkXpHjpd34",
  "key18": "2FCkEPd1uJhkTga9FaR8b1uoauVtNUx2vmEiFzgUAWuaixzxn5QaxBPp569hK95y3mQrPT6GDWNMCTbysKm3q37R",
  "key19": "m9nqw2VHaGxkGdnJk9q8U4Tv4Y9vMx9Nr2aosGX4Ch3Jo7GemwLqNixCTHy4K4T4KSNSZ2fsk37XnuA9hxFBibZ",
  "key20": "2Y4jGf7HVGvp8iioPY6BtQi2Hkv26RGHqFXTPo5g81hdGa53tMjzwGAndBs5dJyEBcyD7hnf9nxND3FZTDuHdqcA",
  "key21": "59HrX9Pb15vtir35xF3VwB33MRXZed3dPnLbzUErz9HaGGcdq6snB3p4sSiePpmRhYaQ7ANs9w5XSig29nQHD8Hw",
  "key22": "3wc2mszA57GhaSYn2UqbEiZ4NB8njgYMFQ1rEewYXemGNz6baTJQCtrM4TjRL9wrtZNGGzq3j9hJtWLUFF3p9VLs",
  "key23": "bohsLb3uKmY5uDxfTMBcXLhW8N9XiYrWJT1Zwyd1eU81VoZCYENSADccGduQQTRkQonQd1EmMNK9gzfrUKVMuM9",
  "key24": "5hT3TLiaEp2fzqGUbs33sZYrvuoXysZXfgXrVpmxNMCf38F1tjVxQh6M8MR9uQUXpFRqi9JgPzkQY2Drm65rSMRz",
  "key25": "2yx1eeb4ZheuwoFxPy2FKpgoX8rSS2YXUC6NpHiFuLctCswkoAAworo3uxQ9SW52JHLwQGQo3hWkpvECq25Eof5a",
  "key26": "2h5oi9wxoY7nAKbxDgqs7FeZFLmmsP5EcNjFKbKjGr2pYEP3GiAdTzzm6erUTrx1iNkLvG8wowoddoSDqeVSJVD2",
  "key27": "4HjCeRej7bNHN6ioYt1hB9p8899guc2UWXvxb89fRqJbZ9S7xLdB4asPo4hSLD7cuRtUvoFCzykR4W3cDGkSFcjS",
  "key28": "DFtXjqHp4PjwKeU34HC1U1tM1GV8imaCzS9ejupyTZHK7eQSzmWU1KoyEtNc76jm6svbnQ5njV5imvErxopZSAm",
  "key29": "4EYdxgkBZ3MtjdJAbcUoQo2eqbE2xMKvEpT1NApKLUyTM5opBTys982LXbANqUkcbPtK1UURjQhSqWzzue8veBHt",
  "key30": "YGrZZQmp8WgrCP6NC63TsgeuSpRbaNjrpRdCfuBVKqRU2SWrwnE1WgLR8j3t9gZdrfFwvpEPYQBe58MNuLXE6kc",
  "key31": "c1YfqvckwbgMpfvndUUfcTM3PM47bE17s14tE1DKnQuzjPiHieFrJm4dqaHiehqkPxoHWonWFDWHaPTSsPQymmW",
  "key32": "aqMAuA44T6Zwvd6x179UDbpDE1pbYHdw26s7J64d3bReiUw4gTtuh3mYATomXJeqPS7HpZLk8HV2SxbwcNFWtAn",
  "key33": "5mMPcvWfYZ6dDN8LgD4qSxXAkcRkkVe7AR5WVXcudr8f4aR7ibfAYWKm15bGDdxBPUm7M3f5o1yrc3eEAd4XKHh4",
  "key34": "2acmxGcMyrAqxrX2V3JicSvCawJuPUBXZgghdB2TMxk9pJkA6Xxaqpjs6v2x42PvbBai6wKSW9VEGQz6Pmqx3qBQ",
  "key35": "UUMPamU3M6yA6fRzssPcAHYM5K2vHxJ8ekuR5iifZBVA1rh95DKgNpsAybhv6sS8Z6JMb2q6aMe7wpZ6hmxiHPW",
  "key36": "4fUXqFTwnwTa9TH2ExZbeR7qER3iohXqKvVHrMd26PmavN6rvpjHHGAdKuWGNPyaykQE92VNYa1wGjqsGLsHqdyr",
  "key37": "5kv55Z3AXBAyN8iGhBEccTTcFPMGgEf3BqGDPFboqyR15FHo359FFET4juuF3qPDuW2Rw1zPqPpkfhtgC4WBaTbi",
  "key38": "2y4sjPFbTcWBBuEohac2bmtSf52raJsyFKeLkcgJD8Y3WqcRrUu7uwqS5z7Yktktdt4gVvN2Mki4pBEKmB4y8J4x",
  "key39": "AVS8K9MTT7K8UoTokiu6YKRvMssUcnRQRw2Dk84cdSGnEWFYpxUhznGj4NP5U4QBJv3pB4Fs1yiAM1iE8DLVATB",
  "key40": "32UnDKGwNi8qV1qvWnxacX9kDdEAGd1AKihYyLQifq8HLPpjr3sYsgVfzMb5tCMT4AVU5CWxyhBe3mDjT2KTiy83",
  "key41": "5TEHYUttDcGR8yhLs1CfuWuWeTuXG7fbwG1bHbNZpzyTEsiabm4asFu35ueSUL6Jw974vBgLLWogdXtwmS7ujXjJ",
  "key42": "446eV6znXRcVK1qj4CGXhm2tfVDMynUTrZfU2PboHeVgiqq1LYAz3iarR5RULjXiiqBChw2kWHqZaooNMBgraxaz",
  "key43": "3rbxoe7bhc1YLDCme1YqyG2kpqAL2UEuM4DuiVSimhAM55e7MU7pBSzhz4mXaymYfwgMvGD7VWfqKd42J9pmQsUF",
  "key44": "2YRMXqyZAoXqspgD4G2kQbvVwCKjpzTDwZqwuKzyKBoVirXmy5jyKaguFPSnNvCQQuh1KuNeMqJMDWp9yWEGz89u",
  "key45": "5Ekf1KhE74XoLwfyftPZyWdB539pjgRoMut6Z6x6dVzzKE5nxVjtDiGTuVuPsypL3W9P6voemkbvuWrJA7cpuBSw"
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
