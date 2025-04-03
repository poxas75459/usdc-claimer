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
    "5ke4kZSx36X9xAExHT69NWe5iLvx3XfkezoEqijGVbxAd9VawbCHREGCXU1Fo6FaBrxwkUS7bJ5r9vhRSpNSha5y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "NrnfZ3nCEpfyjv8VNLpzYDHFZvUnV95DM1WDqUa4wrDZnzi4Um5ZniJRpWAnwz2WRmD3ZfxRFna5U4HfznMBKjg",
  "key1": "2UZE3bnkN36V5UD68i2cjrr3MCFd5e2JNxzUaqaC5HkHaL3bMKMEn7u51jKV4cUonAChQLnko3dqLayb2GcLruuw",
  "key2": "2teZ4HUm57roZXheiDdqkZBfUpybUMAisLFtC7dQYw1cu96moWuBDLu2bFTd7R86RLTsKmmSgb7KtYg4GB8XS3vJ",
  "key3": "5p5WFueJnCmUDekYMgH6p5us2ujkb2zDz7kKiJ7Tc7yFnNoDRDFJkeT9iiaSBKho9CuQbae4gEErHKq4F3gbAfWR",
  "key4": "3sPNpBbQn4XQ8hQB6XCvZNJM62wMdNa7oG9P5Wqa6XjQ8752pZz8MyMgeHXaHhMzaFzKonZRBZ7y4WhEdyS69Dsd",
  "key5": "4tvsHgf1wamBud6SZr6pMuwH8STYZgNr6D5vCNqWie5FC3Jy5zGR4NddYBgkquP7YCv2SGy5WcLvQhGFTipP5ZUz",
  "key6": "2fYEMZLC4UV7oKtjoCz9B6J9re5LFebgBGGgSQr2p5HdiGdCwbHKAV2jjRfH6famrSjvWvx3pMPcufHppwZGuzCc",
  "key7": "4TqdDbEdwvcqzd9crmYUdZU8gycmBEz399WiTzHVDQxuaUYkDeKfZPUYqpqp359ZwCH9vjCKFkqR5GmzxgDfLcS",
  "key8": "5UnPrzPjPwSjnHZSwTTS6axUg8MEmwyPEYG5cBHCrqogJLwikhjtubpGKTHjddVb2vP1ExNSWn5rDngcrwKwQW7J",
  "key9": "2W66Jz39JHYdBwfPfQEvH2XfKXo7d5MkygRVpGQAQYu345qSzmVaRqqKJKnr9rDabzPAC7gzrqvyUVUPFd83FTrA",
  "key10": "5rhR9hHze92HN72GRTog3RjaKmrtmR3Z38ph9ZATjaUBcWMqCRhz94vmfgpe8JaEiQWLYBhuh7oF1Mgwk8X747eF",
  "key11": "485jZE9ow7iBGWe2Z1HNeNu1LTXmD6W7Jy4yjPW5HxCYVthwwWESucGN8BozY2vmJ7y21NXHX64V5xWTK7HwZWg7",
  "key12": "4yc9qSXkehWuoFgCjXW14PgLyNEDpF2GCbNcEdvBcG6VWD92jmj9GLptBgfkDPZ5TS6s7yd3AyyqQKKw4yfkB3G6",
  "key13": "ooW9PWJjzhbGG7NBZxFfYnjd6SfYM8gFGbytQpYNsL5imySkuUCibRgvd1xsaBKeWyDMtjcfdcWPVDYXei1Eh1h",
  "key14": "MRfkpioX3HNodZPmU9Qtq9CPfFGHSyT1BEJyY33jMgFPTXXBvotAwosd8SSGMzJZSVCnALHXUxu4RJhMEqh1iGo",
  "key15": "5EsVRTTgHNkfypSL6pP95BMyNqTxrnEQeuK7vzE2aayqaSrKGGZLWCUPZesjfCknx3S7bFjWRzRY8UiGKATeqo1V",
  "key16": "2ufxL6XqJ93NLtFYXPVQhTnPqLsqzVYAwt3wTVyUUmm193NQpEG3CsYTdkhAmqT282tbgW5Qjjdspy7uAnBvBTZs",
  "key17": "5YNPrh6APE1obn57VvJJq2EqmkURv3EEEb9s7WfQN2BuCduLmoZSHFxZ9CmccrB5waQHZVAKyPZ3fVLwMnYHRtNb",
  "key18": "k9MBFbefYjTVdR5HXRQ3UHB5weGJwoEA9c4c15NvzSBzAxrs5i31jWctFc6D2o8qKrLa2xcFVJ33MNb2XHWh4xT",
  "key19": "4WYKjraGBZ5dYFhNoamrHxUDsAEEuLSgQzXrH1idjPExsSMyqTbVqpa1cfn9qEYHgKHgVkNpVobwBN9tq66tsjBk",
  "key20": "2n3uGzyPgdforYprq3BcW1s7t5AWzpRFGV9ZFg6KVkPD9SeGLQU6wrocKKpjuzpqd1jBdrmimNyjCw2RJ2ggjk4Q",
  "key21": "VanNk59inP9pqDMoQqRUP3XR6Wy8Q61jnfgNCmCDnkt4igMv5mkUWYmku2EKcCkhRCdCPALmUVwVZKq8SjeoQ4r",
  "key22": "2DDCw2RDbKSzcuDTC775zRbzHVqYhz2TayMXuvHY15h9KzimxA7ov9UgPAy3ZxSDaSXmYYB9yjYkGHwJEowRD1C9",
  "key23": "38QjsFH2nzBKbF9WDNcgGFy7MGqoaG4hsVPKuEmtqey5nVf3AsdXRTRyn8F4AhRTyzmfCf8sLPp9S7g7qNYaqAgQ",
  "key24": "2vwXitm4396E2muvyyDyMMXMQ4iokGZkvhT3FwmSyNQLUjE4LsdpvrGHfDqfX8JVLMc1v3fEY7a8Xp34FfK34EUG",
  "key25": "3y5NLDhoUmrmcsxtmsjCfuxpJuw9Y9Ni7Mu6w6C7W8BhTbU4qfhTM3bKWzzHbji4rHhniGx9tMK47dXWy2XsreXG",
  "key26": "2CtX54wRuh8d4ceHm5kRGzhHTDuWtz22LPvyHghd3bKVmvC54rgU76mhGQ1ZaFV7rgHeq2XCXfmi2sfebSCBCDr4",
  "key27": "4qPXMUAGjRpx4UKQgTUXENubpkFoWeQzPdjkFueoE6NnQFR8TpzvuDkYYniFxivWvfrAKT5Ekr3Ea1PSh8CpwEtk",
  "key28": "4Sr6chRQPyZCJfnua7icjnvJ3j1HNHZ5rSq9qUaZ8Jm2iwyFGmt1CjDpwS32kB5P6Kz3ArShxDnpA6TLMJk6YSr4",
  "key29": "3Vc8LZgZVwzikC72dZhQ9FMBUMY18psM6zJo6w4EgP55bJiaWNR4AUJy9g6tZrmLMCWj56WnZ8WKgaVDhEuZKUWv",
  "key30": "5p7xsot2Y8hp7HkJcb89i7ToJVamDkTCfVDEJzws5BSmKewpS9zpfWux6UKKVYn9Q9dMkvfQspsNvLJEfQcge6yM",
  "key31": "4vYfZsHcj8zRTKa8dKMEPXaW9PaN6aGwgQ1jvZnX3MtEUbtejSiHZD3kdFU2MW3JDejQZ3e4PdDngtjtoE4fQnsr",
  "key32": "5FYY46793undhiQSiq7iQmKkBmNWz8upGmZnjwULwWCEs3Hn9e1YhfggRYwJKa98d1eE1MGahsW72p4yefBChmpQ",
  "key33": "5e4RjdNu6kp9vB2mVZcpkDNeCRGdh6zmwuJ7NUrZ9Tg53ESNLnTSHJfFCwukXDSKHuhKAHYnTNPAuk12zmgLBC59",
  "key34": "4MzURxjBSoptBXWtg98hG4EcHcRafDjCX82qocDahSqRGQV193eg8TawYfY9KCWF3pT682QLzJxqvFvypd6QZZY5",
  "key35": "2yeyq65qnfuLZD5j5txbYzJW69wrAc2cXYujXEYb5g1FcdP2CwhZaop4SiT4zPmyiNCG5PGCBSaYnwbCokG6Sjsg",
  "key36": "5sFc6r8DNLZki7cAihjryBiZf1hBia3CRYhz7FeApNoRv3X9fEwiwXnQpyYiU6tGSwNnDwVbhNJsHGRrNqRFHFyp",
  "key37": "3x1YS76HSkor8zFegtnahTtZimppPhbPmt3ykayUVBvJMAMsdTbuPE1hDxGfC569LseCszMPLLKyf7UDvPR4q4EW",
  "key38": "3s76FTqg37pWV17NJx4dEeFuARoaywnXDSp1WwUXxecJaL5cv1EufXXiQfx7xBPe8JgJhZphuzRzmQyNtFWto4L5"
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
