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
    "hNF8zUZqtkXEuZkuMstH2yCrVgozbVpyw3KcXEMnmp1VePzwdzqDhrWzcHfuBNe6v3A816LF97jenujeKcb4m84"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49EuV13PGtrw91Uo3ZxF9MGv4BHtodnMJMm91RofB8gxzKXwXa4H4HHzQYiHJWSq6XWwbRy2icCqSwecbXmdCVDy",
  "key1": "fd12dTCTwXqaanFtsgVutjUju7vXY9k4ypkkV4tbmPasKpKxm4ZRUCMxbZ8AEXWXhCsc3c4nQJsie9kW7dRqhhJ",
  "key2": "4e6WDcUmpEDPfCzWEFXJm4m7bGzhZJMdQ1g81B42b2ysB7A2WxfTEcy2dKjWFMqqfVFiTQQntwo8weMbcpvQP2LM",
  "key3": "4nv6Kt24ew96GMDxpK52pdWjHYSQH7VF3mUAxtzrKqxaanPWTJbHuRhNRrLpHmMmo4Ma3FUWJADKBJzcLEKaK3i7",
  "key4": "24ePfDeet8gae59YjRHNnDePf65gmmjUfhkN61mGXSrGmNRa3Dk45f1fLGX7fg9wjbThoWHk5YgeND8YBfvkLGhh",
  "key5": "2GpgPCW9XxSB695eU3qWSz5fXQTPRtNshqfbh9sxerb2YaZWCKGkGzZt57Ut5wrLoJRU4k1xDVvEyvVmVQ9Px2xK",
  "key6": "gMhNC24rNUT2gs8eswQEyWSL1oJUwtP77bt55i8po4DGkndAnVRfmDVitcDKTk4uCAJV9gaujW3x9jCBodQFxJy",
  "key7": "2HY1CupyXuA8mimuuLWfQNJT2urduYR2RWyZa97heAv8LSy9wqEEwqU7ZhCwrq1QptnHbfKBCxjvqzdcT3UDRpD3",
  "key8": "n7R2mX8utw7yfRE81Puw5qg6HPbyPU4JyjZNkygUzc2rTuzEnPzVeh2FsB16ogbSXajcdcEHrkZZr8HAYsayF5A",
  "key9": "4u81DgGDDeWH3cnoCvR8wCS4JTgShzmyurGfsWcZKjB96EWfZENZVuiFh6iz6VZDgXp5BZKQq47N7j35PdCSeeMc",
  "key10": "3z6S1xPQ7w1iE68tyVvWG6GzUFMcx7PmTTzFjDdGX8rT2wEzorpcUq6bhbgMP2QZhqRj6E5i2C1o9x8oH8oe992Y",
  "key11": "4xi5nRndE1BRKwLk5dXkhvRZmbSsxM4rfhWdqg1whAHedeygVBHStrY2WUo1ktZEsq61QZ9jdRGkTgTFHLfXyqDA",
  "key12": "5LCx2GPTYaDZmmEW41fgmB3dbmGVErJZZVYnM9VWF1ekUczCHZy1jrUAvFKWHa7ZiL7KWc92YyzXXE6wZ7jociMs",
  "key13": "3jCEKsgYiZwP8NtXU5GV6KvXxEqCyM1fmQpbyuM6mtTQds4X4zPsFpQdhEsY1NvX28TUH5LtRimijTE7ftpYTdx2",
  "key14": "48jSDKLvZB73ALHqVWVhGUejY3UcaYLRDoCZNq9KsisFjntzYtq5pCi7KdD15v24S4hq6FiAgdKFTLkMtkjK476i",
  "key15": "5HBYY2YXxUzbtL18r9dgimTy38sm8e4B4ED8EDHtxKw6XN11P5sRDf9v1hECkSa88MsE4esbi1LQTrkDh4Wc4Nkm",
  "key16": "5ieQFdjN5oZkzwSKMzrCKxRPoH2i3hNz34dzzJtjDPXH2f5KRNSomQ6zM82bV8mSFzdKwUwnP272mMEamWZbac4N",
  "key17": "3EciUzuShM5MctCLryX4KawhcTvkyVHgr9QsWJD96wDxSY9cTbvEX8DnryLPhD7hJyKnACfNtrxkvvhm1eKw9NGP",
  "key18": "5NwtnU5Ub1Tppgso7dfX1KNy2Qt5LtFtaWFVAzVURJ1CwyfkC6eNWSoKiacrYUmWTsBVsD7r3cE4TZRLo8GaCN4w",
  "key19": "2Gs5mETUTx7MZgN4YFc66V58MmZ551b6dQjtFj843KkdNQdqjPhNQwft3rZJxWM9u2JtDQgTseL33HdbPHUPRb1B",
  "key20": "5o24PLYoyY2KPE95cRYd42cEf4vKJChiih3f75ByT3TnJoCqJHanfSHebVyjLWHKQv4SafbKN1FLgAreTdzgoxDV",
  "key21": "HvHk47ap5399gWEoAgsfHW3NaFV4U2AW3ZP6UYfTrEsF3JWeTA6gGc25baNYdMwi82tMGorQRYAttnrycVTQ6CR",
  "key22": "2FqQvLhTgkhZqYtZjYdpo52Z5RGFopgQKdiLYZ5BU7u7ph1dPaKLyKrdC4Ne2QMykKaMSfH4Z6vvt2neZBtdCZTu",
  "key23": "5foeMN422VRHyuq1iUcPxE8miNCbhZi4XsQAQqnoSgptTrWryvmTw7dSuMWXqgHVFqHjJcBiEX9XF6NoNnwcpw3n",
  "key24": "5BQ4gqbDvCFt2p4wmSBZn3KY6vMVnDLaaLQ9JrYGw6oEHNRVg41FfyAeJzzDpuNHb9RHMQPYmhS66jUwytNF346G",
  "key25": "49AnZn5C9C6t5GesvpCcEtgwvkjbBRC8XagFcFvNz9w2uL6sFtDQgPCaLMe2mjotuzBZnyBGVkXmLdbUGEpPpYfR",
  "key26": "4VWcGPfDAsSrgUNsm7jzskMsbos4oGz6V3pDjPVkw1WAyw4bYY5VzjPMY8HWJiiEHyRceD3vXoUaUJXxWBuGRzU4",
  "key27": "pejAH39sNMsbSdM7eyCcadeNWSCy5MPcQ6oMXf9inuhgpHsDdLvug5teRK2jo1EegfEaSQj5fLEMXYhG276QvLq",
  "key28": "bsEGd2UTaDhvMTBJUCejHebywLUkUCcUBAbXN4Ki5K7ktf7LcABHvW1pFrywCGyEaJtfxkNY7bc7v7h1yX7F6RW",
  "key29": "4XpjKpyTTt64acBEoShxTu7BTdVsj2PYRAzGE1M96RFNTCSD56D8CCLFgRkBzn8BZHVfQP25s7d2ojRcvPD4u4BN",
  "key30": "kP8hMXAEajoJisjNUik4q3dKYoxe15PJCFekLihe3TuHXMBPUyUSxbx5oHgk49JSaNdpo1dft1rNiVKTEjyzaoU",
  "key31": "33bSeVSHBdWeJkAzJWsrpBpDqfeoEu7A3sEBV3MonLqLSXcHxsWZS9pcrCKawg2YtXnNzUuQPMQUSdpgraiijRWP",
  "key32": "3AVyw7wBuYQcksKURofdbCdC4qn2R5uyxRBSztTwhMZFfKDYGfkaxFTcHveyBqvsQ7ZntynQornq3X3LafYfoCDt",
  "key33": "3RLk4tQvKW16TzQKwQ79UUonpkEvuT5xz5im8tRMXNqCpBaSC7dSVhHPWXUUPU4AAFM6GeYLMHPcVijkmaGoeh8U",
  "key34": "5fsjwChJiQZB1qd4SNLS4xfgJV3yEDgaQ5Z66K9RGbU6atvLH4u77NBg84ZhsAbWcqPe5dNZYSV6hCt57Gdpwd9g",
  "key35": "2zfqDbv4owSwi36uZckByk8kCGi8tKxcFqAamTRYQwPv2TyZny4L3YkgJ9bETxJuDy1g2wKvejEDxNxQ6WqjoifM",
  "key36": "4Wcyw8iixoWNrYbnse5hu9ohujTn4HFZ136pZh7g6QUumj6nKvjdwx8ZobpyXisz2t9QtJJtkYUyW1RVvjWchG49",
  "key37": "3vLsBefNm5aDrQzeg7QyyfpT1Zntb9sXXtSV9wM268VdG9yzYQrmkDTvuG3HFLGfwFAzsEPRfudPUKQYqwMkUrNg",
  "key38": "c1ZzCemLkTNfDB1sYqGGDDpZKzDvYUg4ESUjG3CuR9cSrqwCLHGjccB4w9czZoqRHNCvNX2YjKkY6e98Lv7waUg",
  "key39": "JpwETQgcKqbQBFCVfvM1qYBQ74HPUWhNmvra1cg3ywJAgnByCLKkgtZ3PktAezS3G5d2MhtwxF9sz5j5V6cdbHX",
  "key40": "2VR31h2q1Sn3hMuTwefU7Fni8fALSBDNt6MZYz2sNcjesSfSqUPDTVJcyTaWXN2nCk2PuYrBHx5qLkB8KgS2KLep",
  "key41": "5J4sdwKDZEbiJcgG5HVCd6Xu58GW8sAAxywVV2P9YxALvkbCZYQjvkgWSTrccbpWHDurk7ZJFvvQXV1om6PWf3VL",
  "key42": "Bez2nB2rgPEhXkxsdZXo81DtjKFg43MG27GhJbZ7SFRh5DfZBaDr6o8Lm2upxo1oYhc9JEAWBPyJ3ZWMZHLZHsK"
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
