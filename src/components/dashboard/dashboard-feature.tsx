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
    "2N6Ayj8vxc73zAhMH7aFKrQ7VzqGyTgXCxCjwVH276wEdNcwBG228qwQWnsQ8jyQecCWZgaDBm9pxuJkHtjCm1SM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Dq24mXQFX9wWT6N5JJi93xk73NZPiNTeW8jAuDALkfjs3SsLwC36yaLCKerxWdToFihtBZkD3za1F95wSUnMUFS",
  "key1": "2XEnQxnHhh7XYE7zWENhETiqj5g6osid613RAGb7YrMn5vAmcovoPBbtyTpSFUa2KBZqbLvnW7q5qKhCWUBw4NSR",
  "key2": "23wSwvNBzBqv4TYKSDZWQSSUsoPupdqXSDkD42VJtcPUEjLj25PURGMpzy3JUjm6WXAYnRPg3e5UauyAnrTsKg2h",
  "key3": "bMTKN36aP3m8t26Xq16pcKHpdiw7xDETHwbP3WFX6tK7je4dgEBEF4WneUswe8ibzFqUGLUHcdG8Jk3C8thCL3E",
  "key4": "3dNAemLMJWqVBCRMfF9ADH6L4KvqaBdsuF7DySYYgrVm9MmsTsxkvUrTmzRKZpVQMXYdLimHEptecefQgoQXMAxg",
  "key5": "kRw7T53CHgUHjsrcUPJi1v85yoYbvHxmQ3VKbnH3BkSZP8LjN6qJEVsmsw7dau4wk2KfAJkKrTTYkLf5M4DEGyi",
  "key6": "2ujeiSf7xyzTv9dAHGY2o2xHqkduvUFpFV5Pu2EqgY4d4Ffg9CjmVVK2HpK9NQYDVCpLeZFyQyCsqtERzXYg1TiA",
  "key7": "2zBuQFR2Fmv1Zvq9pjN8PCVUGfmvqECvqnGkFMEaCaSRcxcG2NZtGykcVqTiW3xvPnYHj5qzsRuFiHDAUqy2PLvF",
  "key8": "4bTHMuaMHMMTqLrnje7uLun7owtLL79Jf6AiXFu8d3U8xUkiUxa5fuq6Wu75ACaM5UCjo7876swz7px7X7TGBCGu",
  "key9": "5z6jpoKfKfueXaHHmmCiX79zLq3HwysRCPbVG3P1UsVYrKTEeM6Njk4RxRmaweTRktbU9KTdWqsYHJpWmd68P2pJ",
  "key10": "3FydfrD4Woyjn5kuTVjFEuyJENhz6wCTMJRiGF6FQsGSv2vCAz7AV5dA5xxTL9qheXvLsBDqhKEZ1XveuBU2wXZ4",
  "key11": "3jpNKPuYhdzEEN9xSnqcjMAJQpfCoGkyFaeFvg2Cbs4axwsCFQY3xFuj3pxKxeBdc2vg28HEJf56xxMFUerejwWB",
  "key12": "5TckmxyTEHBznn8HQC6fTVF97dNK1BoLedpgmmpSJBmKvKSFAbdTQ2uyCkJzVRUBwWdNRAaTsjrCnwCAt6EJYtrG",
  "key13": "4RLhNf4rMiQXj2CRBqdccRjS1ENgasZDNmjDWv2HHsSKvStjLdQv82AfcmcAPFh56A7GPHFZzLt5u5CXyqwkuRsF",
  "key14": "31wMiE14DWqLjzEJUuGzGf6M3BBvgDtjiqSuVwpinxkU1kDrzkMHdvr5W3fhZqqpZhn97wEAmcp64njSQYy78Dkg",
  "key15": "4vXBc8EpEy5mhHifHn5CfNigCiDnwUaUsFBvbdTjgGDVdFjxPXALvgNSfSkaub8wZ611cKzz1ZTojh7gdpyuKt4C",
  "key16": "fYCG6vkX4GBicFzQTPQBFWd9anHdpY47vRZX4z9gJHZ77VqH3L5U3BgUUoy6MCRXjLhT2s8JE74rgjULo6keaxg",
  "key17": "3qhrP2q3MWxkzM1WcqA6UVU7wHNpvscRmuQqwuFHsDog35VFhBNQuegDAC66hFDLqCNmeYzAxtU5Lw1XKvHRo5an",
  "key18": "62TXtB5mNvoQVcqTqwRFYxevvjgJTnbmBuuXbGsxodDeg1wHYsVt2YzCpvNnuJZm1oKAzHCjXQpQ293NhoiMPGVo",
  "key19": "B8N7Axn5rBp828Huip1PtNEorwpbfeUnCFa9TqXh6VSAjbgjwPa6MyS39de6YKvX8MSk9jYuoBdjTrEauw4afzm",
  "key20": "4MHqCHgVeRA7KCbmf5P8RSGG9EveH1H2dctGmzZS2sh1aYAbanmk74QNi4jrANSTXZCuYkNK2chCL5J6TYXNfhK3",
  "key21": "2J7CCMca6e18mT12r2oSin9MXbFiFz65ff6nvrbKTEpm82u4TCKGsdR4SKUumn9vBPhFCGkyVR7uM8NDxent8XgF",
  "key22": "4xL3ZmKudARq71WiPVe7g49ABPiMpQppVpoywBB4xwZHwEvdtBfXnf7nbSsiy8PNwAzBHS5ZgHgQKhGAra5qUdMb",
  "key23": "5etZfJvsGaowYGPiPBeTLp83hJ2b16H9YqgRjm684paAGYAH9rHe96Y8mnjN3B9hH8bjERcFLwsxYVJAwc1ksn83",
  "key24": "2mkfVjjW6fJ9eTqRx8iEi7Lp7LuxM1XcEbA7PxXwfE67svkqNgmNq4Tauk8NdBiawKpBmFEQBhonL5wsJ4TTh7SJ",
  "key25": "4cDyt9VSVNAJV58VgSwh174g1NPRq7dkmjTwJVShF4fKrLvRwbeZVS5UZ6L3udJKJ5Kt37eGzLawqQqXccLRZUJb",
  "key26": "3u7o2Rc2YemevV1ePLogdY7ARsjvzcWZXZ5QFwuHFp7DWdJKo3ibApKDhTK9VQiEa78sR6qkmCKExUUdNtGXN5Me",
  "key27": "56MgGqCQd6jK4PUatLuQmphGmUGrUBRiAsQVWRVQ82ySyy618RZdaW5J6GDbWZgk1HvsDiyPSSC3N7rr8M1455nW",
  "key28": "35hNpCGsh4DNR6hNSsxwWRm62tUDh1bDzj5HgaojKYXTjvuebjgXvoCgyNJeQFgeoHw28VZfxrY4KSVh2wmpdiGr",
  "key29": "4xBu4CQ3riXSthSoWEQ2nc4xYGv8hZGmX5hxHMcwZH2FuvejUogDemd9jGseLgV5HrQBL1V2jjCpgQyY466A8ZPC",
  "key30": "2Saa57yLfaVpP94pRHcqADYoo91tHVaP1H9Qiyj4MCn9CtJjbPAgzUt3v2uaSxbPfRzvNdp5DMsJUikEoPC6izdz",
  "key31": "5choeV8TGkNMPYzoZ5jX8p299Xki2H54Z7RSx4DaDGd1wA4vCy1jSM79cpvwwDgxLevz4FfsomxPXwr9offZjMhQ",
  "key32": "3pgzYMuG8F6mCD7Z43jou1JRQ23VoM4GxiUiYr2zAQapJoQjvFnaM5cPQpR6SjGk2exk1Ezr8kau4GBJ4jJmXqTk",
  "key33": "51EKQmGY7mbgKm1bochCDEmwPnbmhvsjD4ej72UugZvX1Vqg1N6zguRk1WKTXmDFEcDoTpi1FZ5ViyPZLdZ2nkWK",
  "key34": "44fYAYvTgRwb18n1xBahiKLH86SPVMQSvZDWr6AyvyGEbNfsbYQq8gMgVsFTXUVZuQazMi17DU535Bu7GSvj1h2q",
  "key35": "2CnVs3pC7jHS24jrp1y2jg1Soh4cZ45QJPspYFjeeTaeH7LpnZo1UWs3tnK6n9Gqrv9aaGz7syPxfmYVsDWSgaR5",
  "key36": "2GjTivKT7vj3C6rdgzRa5MD3L4N4FNVq96bHsbW5zR7GoPS6DdKUNLEs94PWXM1NCL8r9AkLtyWH7QN8e1hxg3CE",
  "key37": "59DBR1XPSNwEtN2XKEosHLz3X79Cf14NEgUFEfZDVKXmDRMx8DKKd3zGxNT6ZBakPrX4UfwF1sNQC6Ki1wr3NY7"
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
