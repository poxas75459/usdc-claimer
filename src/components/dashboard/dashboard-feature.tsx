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
    "5fEy53PazPxy5JHgAEwhwAmmdBTKxjs5kk8Dz4JKxt7E3EMYxtWsrfeR8CBJq2GioACvpPX8UXbw8zj1egDz23hL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2teqDBYCvK5svGygzVWFEeeUoCmhqmCXR6DrDaPVYHP5f6yMZUCykRnxBzKeu87tezcPtnodjVn4k4LwepthYeiu",
  "key1": "2M8t2RGyayPt71nc2ySX59haw2z8CnedCET5J2tQHWnVxbvocf4Q7AEUnX9ZW2dAjgTCh3KV5ndX1ZW455iRBZyk",
  "key2": "5VkT3AnN4Fa8RSmhofa9x1k6NMUm7bQDDVgr7FwwmXyxWWkdba2tf64cYTx6nRx3jBPsLKC1epGMdKmfEVtTsUvn",
  "key3": "2s5DKyHpL2xRmPnQLRL17h2NSXzmKDjeZddi38Y3JNYHPENvRNJhpS2Wjka9uVpTMDZ5A49tgWUYudk4FdtSDVPL",
  "key4": "Hhrv9vfxAi61nW7h1vrESjPTtMjhwWC9S9SYonHTE9ntJd5CdNstCnYjUAKJh3yLBZ4zhWBWaczitf6TWGsjMsc",
  "key5": "PoMTW5e7ptPumhYtQ5sFXX84yTAivNKqiThrm5hyWfvdN2wszoNhcfCRRcs8ZaRMvyL6m7q2ebCgQF6jwBezKuh",
  "key6": "3gk5GqzwoNPaYzsTfrBmuVnENe1tG1jZLtCHj8SJLN1JLntarTBXkWtZw9DNuFMWkXer4LP4NFLWMU6gSku7XvB",
  "key7": "62b6RiUYMTJXnpJTxQzs2dRWs8tE4T5VaNFobJAbCvzV2KabiQYhUrYKX7DEddARcXHY1iYbYvUpG81FTZkDPP6u",
  "key8": "4oVmDuL86JcMHrVAP2cd7Tz8SJBm7rzh69gxKEf38b12PzKMq7tmHCZWSWyWNdvH58L4HXThaVjiyGg1GCh7dkR1",
  "key9": "2Gyh1WpJPDtqifZs5oKecuwLii8vPsvxTtXjekhoKEJPCHUt31d2ZWQaqyZCZhX4jYXAfHEvmow4FQaUP6BWXrFA",
  "key10": "4iff1ruxoAxbb8iQdGkvBtvQnDVs1pYtSWB5jxsjXmfBLVfpgwH7UcBW1c2yrWMLycXZWEZ8cJ4nN9AeAGX3eAEv",
  "key11": "4p69y86sYrBtRLySz2FppG1x8qTRSiBr3m8gQ25KKwfS2t2xcz1Gdr9j4psNNLZX4r1dXSJDch8fHtEVLbZWgNLW",
  "key12": "2GJHtzLxQTowyyU6hEssNtLaTxhJZ7UcsgisYCovDA6etL1ZXs56bSZrJ1zDMowsESzgTHCwZXtN9z36QAJor1n2",
  "key13": "51Ah4HkBBSwtsCdf8kW8kyfSTeV5xZfkMCwggVKyo6fZpSsuWsD1TkhGNGdn6h6Z2aGhXvLjxUPYk9DriGxAdaqC",
  "key14": "2ikTEnTeEBBHHwcTJwVULkREDEYVneKwfxZ6Bz2JE58FkM2pqdiKM4ZmsAbbb7w9fPa7Yb8HEv4mXJTMcTRuovUf",
  "key15": "4vpmbzpdA93s3qmYK73ZnmUjVWVbs54vHvEvP8soiLfqJ1q1cxy8xBtgruVoNLwv93E8p9qN5PWW4HMB8QTWmGNT",
  "key16": "LDNcXjNkf7sheiH6nARRB6A1BynyocdPAi6ZFiYybyX2zB4ZrrtirZpiFtARCSooz73grs2MYrbtJXxz4XJC22W",
  "key17": "4aEj4LeZiCZgixp6etMho8cy7UzXWNQZPiHheNqLdYXMC1k9xaebu8sBYMMvzCm8XUCjwoEsLRQNgZ3aB5gaS76W",
  "key18": "4chcqEJw86fbSc5d4CENu88mw4MN8RLSa1htDu6gZXf1SGkyN9ga5cLCQoyfvzxKbEwRWbxEhJwY75Q3fRyCbggj",
  "key19": "3jPbR8bytZ14SdjfTzgyEhMab7bVVZunNh2f2MrGCZrxbi6vo4153TgtHECRknRB68FCqhVqK2UJ8cUooBaQV1gN",
  "key20": "oRd1EJmEmp18gt9BaUW5dhfpmLE5Y6yqFLFFSehQFrZKLKjgfaSNHSL6DcYhtdppCkSFzwn13Kc4qbQM3we52Pm",
  "key21": "5CiB5FPkXJLYK5BhiCNvKjKxsbFU8XtrpuoFkbSGx7CBc86KQ1eX3oLhLpVFa2q7k6XKLeiEfjR67ivcLnUxHdPU",
  "key22": "3SEgtW9NS4qNJV867L75LAxMdt5McdxXv9UEh1niwWh8t28oVx2VCemcHwma5wLf7U9K4mQUX7fKJBrd2LDRzwnJ",
  "key23": "4MnFCHYLWtKw1B8Y26QNuqW7mE8YxKLJuBUvUNiy9LtxjpCDMXgnknef4o4KRwZ4LPjPCDMR2f5HHZ3mbFGH3DjH",
  "key24": "3WYoW3EQf6uVskr3T9Z16nZJ26sTnSwYsEbABSsUo3dyBehGGJQTuHcgsWTbq1p8hyYXn9KnchvirRxzTq7rusNe",
  "key25": "2B5WCHP1vQgYoJNnYrRH4tpW13FXBumBWSE7PrxtnRSpX2zbLHQ5kXP76jCiyzHJZNpfRmxucUqsQMZvQo7z5WzX",
  "key26": "4vjrsKK3o8TeCSEkdmho5Re7D4Z4RVkW6bJwpJCUgktTyyPTA4hKL7r64W2H8mgF7jTuUcmUM1ENunTApy3DoqF3",
  "key27": "4w7GYwuzcb51gUehVGrWfZB7J8oavLStLwqouoFzn873m3cAFbBjQM8gNEf5YcW6o54G229ALUfPHnZSxG5HqRr9",
  "key28": "5e7ktuLTQks5S8zrA7vPHkjRGQX3ytRHfquoUpVhQ5XJmmEPJs47j285Yjkt7et7EsvSb8UCW23MMNz8MPvqH3XZ",
  "key29": "4yaQhrr3ekiYQL8Aq7cYDq3ybxBMtRd6rGqk6Xp6kdvCKWXydSU2Hx2AfHYE5AcytNgVb7mtAjHCG1cexVeoQE5Q",
  "key30": "39JheFKk46EdWYPMviMXFP67CPMgRUeonMSJQRwbJcxZAYEUHD2Bz2MbpvbeDSrsC6U8wy2qhYpuWufBKcMcunyk",
  "key31": "4yoVsYAttr382mQ9BFr2B78qRxyWdT8BirqRP5W3SmP47cTHYDuFkWoDNcMyN7vnFNgzy9zU9mgVf7RCf2HS8rbf",
  "key32": "2CMS4Aw8cFoWbXPLDh1u5J5e7FHXVxG7kiwzZntZbUkZXuB6fxD1jHh39oCbrAwqoR8LoAerTUgwaNKvUpfiSLLK",
  "key33": "riB1Ayg9XxXnoZ8hcJj9uw9GxZTkyD9XKejhA3jM2h8rkhg6uRzE9wMviXHg2F6TwAXtNcZXsoyWrw5Ldo8yiA4",
  "key34": "29eTTzgjBGuXqWWXrRebekxn2PRcRcMxaZcmN75aSUeTDVpqC41wFXP9mWzmgbu8u4dwEjGRGkBwJZKAujxxnxpn",
  "key35": "3CmiwPwThjpTuQxFbmgsJam3E2NvsPpwK11ARVwKb5zDZCvD3njdCz6p4qPAEfWLQXEfoF4meXmFcoDX7gwP18Um",
  "key36": "3BC65RRe6DC8QsSGW1WupEGhu8ip4ZSKbNChEDua3fv36kpWE813sME65rDhf46xt56VtbqwiN71n7LQAwzQBWxB",
  "key37": "5KUP4CpqafBMzmMnVjbTKhdFmnxJ4npVVi9SDSKSSyFhqcKE9DM8ZarGebGSYEMaSLQ9n9fxHBQT1c7iFcUpxVAA",
  "key38": "4qtjKYw2sNfoQ2uBYv7UBpmvfZrwmSsNbuvLw3C7xYzKL4MJ26UMoYguVpJscQXEhy9FPD8EioUzcVEvezwCDgJb",
  "key39": "2N9Hm2MrXds72QNCEtXmmCiXvPfDqwksUaMuDPFkhuiZZASXp48uuxDaQKfvZQkP9xma1wfbDGA1HcLQabt2P5Rf",
  "key40": "34SvMzesHa79Cb2QL3tJsSx4ducfmhvWYB2VAxGJ6fXGo3UDhpywWG2HFJAwboiHYuZrAVT4ECvbE1YLs5aYH1vk",
  "key41": "3qM6JHN8K6ZqFxK1jdXfU1T6zhUq6ycmo7ehMmwhcSYABWC6vKcDSpVucVVg1UEy5FNztJqpHJvpyzW8rdA4ynjq",
  "key42": "ccwCRQySR3UWnZrMRicHNSThDkwGC2cRLJJLcDFVHZnMVHVHf3ydgK36pQUyaFkvhPsPStwLFoE8mMZxdAbo9ni",
  "key43": "uyjQWomU49DGFjK5G1cnh9nHyXj8c5q6sFcNDJZAFNVcVFB5egHN6vm3Y96VfHLx4ghgM8zbcoXagreaYgQS85b"
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
