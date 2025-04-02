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
    "29VDD5qCv8Mj3UJC6uYX14zRQxv9YjUqHhhEtP9KBxWRGyXiH9YvH7E3WZBq9aV2EDUnMTmntpYLWdpCcyYZCL6X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jMvr5qSrgGX2dtsAfqBD9FoABr2syHCs8wJmCmgdYBRc5Kyd5wEwc7navDaLyhrrGdmKdMakbZsewivYCPDfa91",
  "key1": "56awDAXSUXYXmmgQPEmbHiPtXLe9uztG1BWg6wUdAQdC3sj6q7fCXaRHA4wrs6p8Xh8wvPAHYo6jsnoEU21h6grf",
  "key2": "5soDGucw5dQqMnfYLtEZziqPBJUkycvmM5FXfWMncpH8GvoXpZa1Zba8c5GP7jLdd9vHmue932WXDRPu2SZTdjnd",
  "key3": "673CV71Yb4V4zB9GS5hgKP6ibg2dkyKi7kJu8cDk71BvMSYMY3BtNZEWrqEuTYarUQLyb9gRu6AiCfKWc5gC11b1",
  "key4": "5iuRsHTebmcwbPwAXB12jMXJ2gj55yDUHYGQ4kc6JBHERiqc95wYFKiVW8tvYqqQPRXsdzfSZHyDgfcDY3fLRGqT",
  "key5": "3tXqKuJMyLFeSrkgNErwExS7LznEJTjrV9suao6phKw29vxYeMgCVfbLThxhKp4a2yXANKUZSYLDQP775vAY5CAK",
  "key6": "4ZKFzTsAxktnJpZHQhE5ndXwKzd2pKG4CVfbwMAVGT1nupxLbUh6KBjDoyDPD6yE8amRPwBpZdj1LvAeunUYY88g",
  "key7": "KvwYxm3HFw5j31vpUPC6ZLRKjDvcMGDPZgUo9dFktVUo9oFk6YKJwguPU6L2RXs6ZugshiNCP6HreCTAnj3mURm",
  "key8": "2aGzyZspaRMeEBwo5LY3VeZ9KL2JQ9ojDmP56fZq74Zdbd9Ct6DXo2vpz82z2R1pNEwesicBheL9FisNYCbEEJEL",
  "key9": "3VkVV3WQa4cqpwUUgrdwNdABuUPQNMj7fGXenyXpmg6drzJdBGarWADiYPgQZCmj57goGQHK3coJU98Ww25V2L6Y",
  "key10": "5DtH6jsDHi2oh45uVG2BqoUTMfjHKE8iwMzcnWdVsW3kxZ2wDQJXULFqhLCc2cwmpgHWdMN4LVu9FaxenfivqDMh",
  "key11": "5Aqaa5qxWdvFFBoFbcyRG9S3oNmNkW1X7CX9ZRt1p65g2JxKKHKLDhofytVZtHycdP7yWgvwLnzegFCwtNQUPsDt",
  "key12": "KJdcyCpTkP1ifNwAS2UwvZdBpZhBAXK4VzNFU3JbnmonNpDefi1Yq2gqKvLSKHGAiySj91Qn8rmnSSW61Kb4EGR",
  "key13": "4chYNyLCkVSy44knmCrsxZxeJGUbzBmqME9dbA1qniyKvahqaCvLw8eR5nyGAFTupMKoL8efWR6pRHEqJLWuB26T",
  "key14": "HDQJntdWkBx8B6UBEM28ySaCd6PHXfjdWkkWGEmveCPBpYtrPAv76KsuVBjyJEsKW4n3yN4u2DnzfEwwv5ECQti",
  "key15": "9pUGjV7BNaDkxrikwrSQbXS1wnCoFAohNV6GG4MMJ47mc4F5QBjV55joKSHAQwQzha8VF3pUVgv4jBs8XfY7zrW",
  "key16": "62fPdFRpswVFTz8Xhrrzpnxn5JC1S8uACcMZvRjjvhSBvENUzCxGcmvzmjpiT7beATYZfZoDAJvd9kw5r9T6bvGu",
  "key17": "5zynNRZsfzVTCdAFEGRGncpCFiVdz2EQ9Bt96DXiRVeKeXkuxv4s5pr5zqxrj3nkU9ksQcGxvAiSNEKp5Ht9nuz5",
  "key18": "5Kp2gjj5UAREe9h1hZEBDSZaskBUjJYDGR56yGWJ46YiTXrnPBcb97BqfBkvGoUa1BGvA8HhGRaKdNjDidG5dkzf",
  "key19": "51DhY2zZRob8BeTD1HoEuMivGyRgHn4fLLQPpMEtqTEFQ3ucTK6vF5rJ22bgPC7LqPudVKzBSHuTGgpgbJ5uojVL",
  "key20": "PGm6CbPh7d7h9k4audiQ7z5q8cJrrttGh4pZ1VRQD68vMVmWPDyWEKV3XCELA5TLpu1QdnubScc262eRa6hSgMV",
  "key21": "5grp8bUuozDNN8gqudYX8LiqTqz7etEp22DgQa6tH3sGBRfn29K7g46iUNwng78PoUeQGVbvGbBn8LHtUhjSqkna",
  "key22": "516vF94qszCbwsCZpmFZHwKfYztnhras7K1P2iPe3wsmKqBbMcZR7j1kiKXSodVtEGYpEAwupuUzuCbmXUWSVn2f",
  "key23": "56nkpdTYUWaWGhG2xBBqPvgi75Y8CHVdswGuRBiTP72dDKgPdmeTS8MbA6p3EsCddP7HiuheHYRmWd6ZubaHLhWd",
  "key24": "vbdGrzEa2rcpu68SSRRv2tDKho5YcDCAGG1F8y32XCZYNigBQWT6qtigpWUtwx4qwGqB3yixQzjtXrscPEsy6tu",
  "key25": "2gkVygC8pwmnBqp9Yxv4pcZaKvj2MQaFo3NXRvrC1Vwxzk9i4QMx9vSsmw4AmnKP9kbNVETX6pre7xrqPmFjavmZ",
  "key26": "4pB3FKm3NQDuqzh43fNasveCqNHkQ9S77c7T4zDvqS9dG4kTqR5qYu91fmXtb5Xqxgcv2vz2Z6YwXPLArz2wRhUT",
  "key27": "45YGg3KtS4QmHjXH2G3pFQFSZWujT83YTxhXCJL9W9Dadfwmvna98HisqExsRYqQ5UPG95c4SVBFoCz4aeeNeu7A",
  "key28": "1PqmKqSR86f458DmcVahZZhxpmu1uUeNhqF7P4wVaAy9HqNigVLVUz55EtDKrcZRgKJU6PXsxFSsPiPDvre7LZ2",
  "key29": "43EdKrKHwQxbPoZ4m4dNK9HCr5eN2ncF8SLj3LnDRKQJWYDuHojuqFUDcEuHyiM4775YVf4FdFbQ5wBibZYMF3oF",
  "key30": "57URyZ5rVGefXkruf3zLBgv5hHY5Qnw5QVPqwdM1jJF6fFeJMTnyPXbLJzqXhMNXKBcvTGbEdfAV4PasiQYfooS",
  "key31": "mVi37Vc3BzSkcbjAXJoMAks8q5QcNq5URBRE53uKQ1MZdvAbLbCAE6Hv7oxTdait5NnWiYvF1DwBp4TjxMPsF1o",
  "key32": "5cjceAotDsbguGVoEwSkCwHdFAwNHEV5aRdPsH7wizvzzxU9dQReKiRSpcFbtginzAi7FL7jTVEz7EtQWEgyrmF2",
  "key33": "4TMowLty5hrNUSYdUsDzXFyzz9ix6LdeVtAjaKJJ2PAwQTABM5rUF99X57sD63D2y2eTPnNPPf9fVXd8Pi4oBhDc",
  "key34": "56tsXYewb2Khr9MZGHY8ZXyaopoXTmbTE1p3Bj2fajaEat86xDBQzMXrhs8ry5DCC8NEz4EtMtFnWSLJQXdhYbKS",
  "key35": "gxxyQSXQd5P9ikLw8jo8C8m3mmZc5x8Wwi6B633cwFdPe1AuuKmpRh4pxkDmkELqNKTg4WasDURn8RdNLuVzXSn",
  "key36": "3HyBRyscDgQDJ6PcotPNLCHqLHY9bmW9RQtySyviHue7wf4py2gPSgLqTJcjdf37kYfdHMSUizSvK2rg6iXPjJuQ",
  "key37": "2P5zPkk8W3oprVMfcDYbdiyrodEy6dkjbTutMG5tBLFCyRPoJBAnS2TokXBSFk9cTY34qEmf9dndDcD5bQwcLX8M",
  "key38": "4My2mgVxBwoEb5n7o4iCJUijtjw4dCgZdX8Ch5zdDr8A2JwXKas45FZzqut92ca8XmHTnjD4LzoaHcNBo3xzvLU6",
  "key39": "33LK4EK5us9DyxptYBAf6VxHtmRQsLJYn6w6Z7B2EG2Y9dh4f24k1RCf67eqqEtssadyebuF2d2hRLEPYBFYwSrK",
  "key40": "2GGXmzP2Ek9xc4tjNBGYmu7Hce8MyN5qSaC1zEHetoz4kdgj7h8KfbU6uRXEdqX5B7tmnZngbtNU9VgKR71XXnV5",
  "key41": "xWjcGCTerG6QSPhvwhjjivoJeyvEJiGduoKd3vZSpBdnbP4Y9dRFpVvbk2LN8YLG7yTEfv7S3KK98z9A6nS738G",
  "key42": "5ocdkMzxHSTUWiGeq4UtHucSfpnwEFNzfq7CSrVgrX5NNF24NAqneyhrtEXdFFKSmmzY3WK7gkb2MgK6aWk7U8Xj",
  "key43": "5Ve2HRxjhcfayqo5UEEAHdjCk9couuwgPmK8X2cT89Qcd9TNiUuq3JirYLt9UtJcMV2ScpDa5u7YVkRjfHb8AMUe",
  "key44": "f5v3uKvbPL1qeZAe1rDhK6f9HuyoqoxoWSJxWh97x9RTdU1B4u1uXFHMtzEtXZ2s7X7euYQKV6DxaavasU4mVU9",
  "key45": "4ssAjS6YcEbHjsKqxqVWiFPbMRuYN6Q6cgDkbw3UfimLp6RZ4KfaZGKPHCkgh9kuxdr6aUkL1XkYHNAfB7tLQ2Yr",
  "key46": "5VYVaXiRWFwyviFNctJiEJbANX4g4dFqKgH6yK9NfNNYjbxeJzdkyHJj8JKt2hyqY3FyMz4B74pZnxMdfAqNcJAP",
  "key47": "493H9JakgYysNzj6PZFdSyDECF7s2Br3uaAsq3nFor7aHkVYpv81b5CXtmFJSz33oHRgcAnNRTQXZAZTbQ2jXtVp"
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
