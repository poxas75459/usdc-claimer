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
    "3TtF2ZUg1o6kCMLEg8QhDjWEYExYmCPPGcBBMN74QcCByGGjtsag9d49VZKRvgAWpvmXhQxWLEFn9FEgKrEzV8A"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rLv5AVrZwt5QvqipNkQqgmDKrdDPQLjCXv5WfNVkn7htheGAe25hFVuyNWwLA4VeM6tNjrCCB3mHZjAj277g1vr",
  "key1": "5fsjNR9T7jaFpZuJpS4CnUWf1f8zrdURQgHumSgqRtDpNpL4fUw6tUb1sSfgpFg4A4J1G9ERMWqAm6wNMX1dtfrD",
  "key2": "4RFdZgCobvstpwQq9Sce9AocAyu753wPNPWErQRqzVnuTnUx86YJ1msNpD4M6kdgdBpbHmArkDAwimmFQerrCLsx",
  "key3": "5Dbhue92h4spfKSPb5r39Qgqaf6gaGKg5eRA2AD1LEY4xjtaVdSh454w7dSTdffdnUsCwCMTPdVwEU69quD5aw5o",
  "key4": "3psuV98W2VczULSKrj78U5gGFKtFanbvGoQeoZ3EgSfvtgdBcDTbB7vbvBVPMsCsFj8rCVSJAzK2FVusxPuLBBvb",
  "key5": "5LGq1fC7bBRvTf5PgwHA3QM54sqXQiYaYDuNvkbyGhoKqC85zjtun95UkhU9d2wsABR2UQYp3Vsygf7her82HTCF",
  "key6": "38FqDFn6say6aSfg5bQttjmM1ZQtjqm6g3YDwUPC1MYxtYgcrcXYHZCTEofkEmRyEMP1aE16KegR6LYYwSGPtBj3",
  "key7": "1genvk8S493ETNfX6Siu3TU5s1ASdNX8A3mouGwY9wS2zZcBk1pNbgXS1SGNJB5pnEX8GmhzV39h1zMmj2o8WoV",
  "key8": "5NmXDK4zBr5aH4cjU6NjR7dvj45QXcdWRjkAceLFBdhs3W59jpB8DYqjk35mAMRUjYiXX2Hbnon3g6eKQXskh7jn",
  "key9": "5sJeKsGF5chF2cYLGyy3evXYM7Qrgwzfc5NExGmaHGpyVRZ3HBfSyrGVvnc2Vc8ozGw5D9bEk3DjUpeKRmmV7Z9u",
  "key10": "3VW5bdM9EYu2Bat1RVyWD65djDindYG4xVFCK3vscb6dPWhZJStNEjXu7mXcG6eaRvchhhw1aHT5QRjjLekCBWRy",
  "key11": "5fMwBnGqNvpz7LgPbdFtHS7JKeavx7QSC6qUnKZ9jnqiHFdE8Se1jLWAdjdDhdTQy13ZurHxciVc5vS19oD828Mo",
  "key12": "48bSdjAePQvpC6T7SyVHkrxiVKbd8VKPoNStzaK3jquMnkT1d1uhTSjKTzayy4T63y8fE5uFqqa7dNGP5wFZAfbZ",
  "key13": "5CNudSzG3pv7YmSogQeg1bzMLDEq47EmW2ZBehHsu1RdCDfMWEJ9Mf4hxrf4pkYeXxBvu3do3BXGFwc2zSxZorqW",
  "key14": "5CjFN2K7inXGf7zdm17eH84g3YtshpYJZzjxpntWzvuwZkM1DX3kVetfqPqccnzfoDe3vpZAyB9csBdNtBD4nFQK",
  "key15": "4DvhZrU77TvuD7HcwJ4sGjNZWr1gumQ1AetNfe4Kmbi3tMKNjSdNMjfxVeCvYChSATLnD4AjHLxabqAiW1MZoaBT",
  "key16": "5CR4d6bP1G46tNYFLwVozAiJqyWxJchSX6cTLRMjPZEHvLSNFVZ7ZhjW945PSgnKPBUjwZwYNeQooxwpj8uJvFGo",
  "key17": "2qmKkXV5gCxGThEPZmVPx9diBWB7EZmGutoNYFdAGsp5NzFDAke5CrbQacL6QmaehBgq6yVU4yEPEcHsditTG6G5",
  "key18": "5p6XgbiMwbatTY4jmw9g9CuDs6WS9uueYdYpMNy6ZLraBxMiHqsqMDULsBJWAd1Kvi6znnZYY6Fwpq7dUM7yXZZe",
  "key19": "59pLJzndKi2dGdr3JTFFdHEW1qmNq2Zjwhzm3DqYxZMyVCi9LVtrKLnnefjGxjnEuSWTVvpFR3jarxzVyzYbL1Br",
  "key20": "2scX7ZoHac6zAPAbJbhke28Hkh1AW3izmAj3c2gdwk7oxFQjVsHzJJcvC2VL6gFbJdSqnFAVJ2vd7EqgdNBL8xzw",
  "key21": "SHmz38gLXhzpTmBZhaMLc3YGgcAF8aJG9is4cQ2vgBfmucBdgCqhKPinaHLTGR8QbTdyicqLxzqmxCErKP3FBz4",
  "key22": "2W7bMTtdnd1PYKXtdfQfJG3cM8aiAWGPNpCceTqq3P1bKZ1rsa4vbUyQKkoYkdjgbAeJFjhf3SPuLgX9sex7FqPx",
  "key23": "VmzFrXWujd6HraAYpNvpcpVfzKzXx5KufNajb6pTdRVsFYCaXqeg76Sj87GLtgrUCk7rHC4wh9NByXvztYfjvWW",
  "key24": "btvTBNRdRZtKKJSKsYrdxqhgDnKasEezCPcxqGavCJHQYEbju39vY7zY5YbEkKdWVQna39efVei3yUXNiR3jKnq",
  "key25": "JBnxiADuU2eky1iQToDhmn7xhVVrGJkevBnnmTJrf1BN4yCeqHuPfmJGoMPAYGmHZ4SdDkQeDie4iphqY2h38uN",
  "key26": "2zBYb3eSZ8TwUTEiDQw8eftcGJGcWTnJBiPTLrqxrHWUgxrrE6X3zWeyHHxkcdfWRh4SzzLbs69ePd8GCYPWDbfu",
  "key27": "4Vt9ztAdGDsu4MTA8v4M4dYpbieMWAeHs48K9eZAkmQZm9hNsmeDy3ULgmCNT6X3FjhdBERyFJt1QQ3u3eaS6EZ9",
  "key28": "2oYDvq1WoPGMuBvPLu38w48H9Ljw8bScv33Km8eQY9ZmepgfWWaBZT3dFAxyg6bNHwmDs5FhwzLrzRT1UVd1BFNe",
  "key29": "KYynwstPha75WkqbFr8GgiryPh5Qr9497bqCRFUcgARkAyChEfufBXDwzoqcGPssuJ3es44Yn4iVHyokBSwabf9",
  "key30": "33MmyAzErS8aU5R8pcjA7jkgNNepQ2Te4zwdgP9xKJzh62KXCzsS8WuAFjmmu73fmza7XVUYDWF4jf2aE1m9PDBq",
  "key31": "3HMehgdtWWqCWJQTn5QFJYt7MLUGS934fw8HPgGZAinxhNsqBfR8k3haybxKdFVH8csQB7CUhkHyXjfqF6Ybb126",
  "key32": "4mySwXcsAMZxcS1s1KhdRr4HCPnQd82wSAzHp79u9rRdVh1NhouGCNAA172tKVW9mVUvdgLQ7td2mrmoP2AF1NFV",
  "key33": "392ojiZpTZfLc4bho2DxarKEQfqSquxfCiwUCZUPRH3ikknadQrLpszmg8toDhyhT2hv5uPcsBPhikuW1JKGLYWF",
  "key34": "4Sei8oGk1NFgA4Q6bAN5ajMDuVG4wGib74x58scXwbtbb4j3z7v5kpromWoc5AyFsFsH48Scc8KgvLRVtsMSQ958",
  "key35": "61kQVcYaZZiGnL9VtrDtKo9Tw5sUPGCRsKv1MP269msJNVRd9bb2Kc8eQA7XoqRY4drrE4L2uAorEiFQv9zKy5Ca",
  "key36": "5rFVrjgN7ck5qCE23YSM53tjQSYp3te2dGmPMSjjd4RRqdkWoSXAqSbT4jzmRSg62wNWPPstFnqnVoDbfSDdNmKg",
  "key37": "4SsUKHw3Masc4VhmPvJDoUk9mR8F62cjPvReCQC33XXXu9GgP7snP78CohmiEhA4WpAXUSsD9u67Me7kVgTsKyYe",
  "key38": "3aZgG3FTxmuJaJae5b25DQJzu7p2kkwc64R96LadLyoxXu3PKsBAhrW63MW1kxtggir2oNiosrbufcaTA8zVqnQx",
  "key39": "4rHV68nV9dPjoZgpaLj3s4YfnqsNkTCrHmhTue8K35UgRcjB36PD6AZ4vhEB3q371Vk5vrf1BmDeZqgqsp8QgsG5",
  "key40": "35FRnGAoBveE1B65XFC4WcUxJuitgoqHZx5uXSciQTqLo3KLcug7FmNDvZy8nxKj6wwy7ZbNpr5VS5VH36QDwLUW",
  "key41": "5qYL3S4T5f4VrTaTkBmNf7BxEgYYsJHtK7LjZeEsqq7GsqkVSwfdB8EjT1JuLiiUtD2zTL11Wrt3TKvAwvs7vVxb",
  "key42": "5XjA1e85PU1dcmob3boRjAEDb4jw4qX2EXs1wQAzTieQVhfqncgDyX3d81aqt5ukVrkVqGYCZ4mSENwHGHQxTc4k",
  "key43": "b4mMJnPKrxaTR2aj1TNBb3rzWvqGoeFFLLBVBjEdc5VtHmcFeA47p4vkpQR7XcaCsoHt5nZ9uQ5q3Ds5G4Zcbqt",
  "key44": "4po8PUGjh2dGd6EbNRGQXNnNFPC1oNaRpkrpEGcpo3AvgRom5rb79nFjALTBuFQkzqagFuQGZmridqiWMSDbaCxP",
  "key45": "JL4XumzkVCYbN8zYPd9FNs5RN1PYeRKKhLypbsgnsDYysXfkLRkjSF3odqbsTPzdvyCfpWAsmyhq3oL6Th4YEPu",
  "key46": "52tygaHXch2nhU3fSDbSeJaUMCx8nvgNdshVuMcVVV9hfJq8Fj93yAFckNE3BP9AS2KW6JzyzBCrnV3EUw8o1ZKJ",
  "key47": "65bWnnXuHhX6MUBmLxUnxcbzBabgHiVaR64kQMi5gxNbr59t65rc6HUFzUD59GSFhh7BvJC8fopHbwY6DrVH2YU6",
  "key48": "2ZDKPLJij4yL3iK7pgsN4vmMdjFHWKf1Z1Xhz7ZcRHYdcc5xqrxqjGZFPGo7HqgZUtHuxaXo5VkEjBUygY6bF14n",
  "key49": "5K5kvLTTnt5YU7KzqrmCoagpy71HWHwFZxGph96B8PPPb7WuWMfpLPYBZuLPxUWykjnrcWDBr5FaVHCGtx1Znhss"
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
