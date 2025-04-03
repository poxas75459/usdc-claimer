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
    "3sWF99hTAxAP43NkrVMpzHYjAhyqD5VAit1kZhrBQypNs6GFPJPANCyzWZgohK2Ja2NJsRnaMESk3x6ro4iNZLWu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ALnCKcRwn5bKLSqmBbrbkLsHy2gKooqJ4shd8Y5S4nGV71R4v9J87drdSYefbTnA1vHwtWvMDkEJKL8GhZ5ZGFX",
  "key1": "7o9BnN8XuCT5EryFSJnv23mRmXH5YNk4q1MSbPWaU3N3ZTxdN2jH1CFgN5K3NUWNczGnXGyACJMTKsrHS5PmyQi",
  "key2": "H4r1TgGYTxp74j8TSz25mV1K31h72KgBgHRU8HgDgMsbs8ktRT1DkAuxo5LUnpt8yqXugcgb5upb2Ecm8uAVApJ",
  "key3": "5RUGSEVi6YKgw73dN5f3WSVvLZASCsAJfZiFTWukr9beFfyHJKKuLEF3Ni1YT1PcpaUcdpVjD2T8RzT8Rp1scj8G",
  "key4": "HdTphKKeRAtpareibQSSq2oUSMqh6z5hQHM9qGjDwi6N1vQedBV3wUAoVK4Jm6GaYDLjZ91C7sSn48iQ47WWZgE",
  "key5": "WNFQCbPLGhbSFF4dPRDm8Sh63DvjuYcVz7V45gFZJ9hGGntA4BF3Tg5PGixwsuzAThf91S6QWcoj9J4mTBBdEe9",
  "key6": "4Ek7jUP58JXYqiMmNGqD4mVwXeRVt8oUYkmE7SR36f99dgyd7JoDwuz6JnmJ46P72ENPJc2W19ajoWLXN5xMLqDo",
  "key7": "4yAWf8K3P6irR4J8snrV6sCwPTQgNZkjjsWmMQkD6TAFGxTQMUZsyMwPWfccuJPZ8oU1ZU1FJLM21nsg6F3UGmXg",
  "key8": "2Pfvkq7nc93hzn3scesZVL7y5F56Lgjs3zz6QF5bCqW1ieB1Ec7VnQJCZMXs7icGBGjBBKytzWwKYhuvwvq5A739",
  "key9": "3Rjm2VXs8xUxecY1LLeFNTCjFHLv9cuKJnPBt5thQFhfnVZA3oqCBJHf7SiBbdvwfLv4vC1J1uddtYUooDZksxB8",
  "key10": "5QpfqTEgeWYUM5nVj2Vn5NxSGybMs6ZMmyW7gA3D9D8u6Sa2MquXWnCyP15bs94wFgkc78xEzEq3BKGaouFRuse6",
  "key11": "3sSXVWQ1UJPECd4Zmd3LEWAMwYEN6uU47ByvKojj9R3XugkdJf6weMmVJg25ahAtDbnYh2EoB4yxfchrheMFrKH9",
  "key12": "3v1N4sGMeEiHBdBH4JdyXXtVd4sh5NzcJrk48uwzjwC16Mdj7S42sNw18dTWCah3nZZLBvNWFqvXPy5Mat89YRZ1",
  "key13": "2zwYU4b5TAXnrkG8MkCQUtWV61dKL39XeWyGLx2o5UmZvFBfL2Pgum9GjVpeVaURtArGSb9wfvbuAu2t6KNhjqGc",
  "key14": "4izFjoLxsEEcZ9fkqJaWUPgFjoRbNTAuQrPnJJHg1LpFKZAM1nZhQ9K9yAyqYDgdwFcUkLdAreyBdLTr1Pd53WiW",
  "key15": "5iUL5dVyinEudw2H5zzkSn1JiUbozebAuVbMNkSoetNJcoaegyn64zc3FjQiq65FP8Zpe2ZYGFFtwnrULLSw7zVb",
  "key16": "Bc8TU5yc7TuXAyZJhdmq2GYk4vZoAKp5uM1M8MqqHjrBP1ac4XqK5dTJXGKXErb4YhgxbebikD93zSTinaqhfCZ",
  "key17": "57Ra614wAy4i1jcdtjU3zVVLQxFbkdx3vhyLTWw3n4zJ9dao1Ly9VXGUwmNm4eq3eKjuDMkJWX3LLH6fVhhLbbXo",
  "key18": "5GwXnqTNdwYLSDYLkCUEZPpNnJj7q6NTT8HSbGwxcJQnuYThNDo9SHbBRpWWJ5KGTxZukPwr4Y1eCoWAhu89cbsN",
  "key19": "5aaZdnMf3QonWBajqMkHE1RWS9oHdMtBUPwgyM9HFGbnAPPMHmc57TFxRJv4iBz9FhtFyaaDLiYH2mFtGbD4TiDA",
  "key20": "2qLR7VZCh7cUgowMM4d3jD2v9ujs9XSbxy9MBhPXY5WfFXBvBDNfd71FoanHeruAf8vc2S5NqWN8qCyPcAR9FPNi",
  "key21": "4sHKiqTeFzhrSMYkNfNxLp9bEM9T8swJdngosEjNbMYs3UAShYjJEe3yN6R61Aaq1wDJinoLhp2tethzuN1oVJ3i",
  "key22": "3a552iWYUu8xenemDEMA9ympRBrmYD8RBNnyegWCDx2gsWKNVck5QUHCGAdVGTNAEtM2fVPD9TCHmcTy97Ysu37m",
  "key23": "4p1GWzJ6RR6zcSZ95hCPYxvFiVM8JsYhD1DNQNTuN52A3h5JjHZknsN3UtHXXnVVMsn1SWoQcMsLajjGbeBkb48u",
  "key24": "3CtBSu5kGG5m8bkw8cGMZ1PCowUiRse5Kfp9FiEr4hvbh3jBZcQ1CcyKCZk6zti3ddR6opGh6G3q1QkckGzp2SaL",
  "key25": "42PFikzrfyrSQkC3jLt4yRvk2rzvonaFdKziSP536T3YtqYvVFAaDaGrAw1EdJN8Sa9XyzwaGbsvB9FA6HHurV7h",
  "key26": "23bAFeYERcR1fWumSE96B6gecm1oBH2xXxCA6kmug7CwB85QDVXZvbtiMdAEcJE2w3Vb8eR2Z22TupcKKZEsDSgx",
  "key27": "3WmHTCmxzTPaiaYvDvvhDknW3RWDZVqqxZVQQV86BnPLNNaJgMRm48WX8T6dbp1jhwbgdzUTeYRcMpACEBHiHBP9",
  "key28": "vNy5SSNw21Vpjcv64LxCuLJc3kiaGLT1LtX3NjmSLs3HbmGDwrtQCUeLrdbE1Y9z6fyyVFCNJ2aHF4H3C7P5X2m",
  "key29": "2jxM9JSRH3KpxpQ1A46VnE9XFukZouZa7qJzxSWWUiL7X2PYdizoxb5PzswHtKyNGoYfayrubBeaqqbbAiv5o3f4",
  "key30": "2Q2B1HY4jQwvCFjz5zxLUwn3SRcSjvSor6pbhwMBS2RHLnAAtBXKVavueuGxueqQqLG9GrV6T2EhHMB1kXRXcriU",
  "key31": "2QcRbGTFfbL8ysknsEg1VXEikQ3HCefRV53s6qz4aFhfKAb3PNU5to1CQgx32GQaSuERmTE1Y9t7QmXs2SZAH5fT",
  "key32": "qQrYmmBSFtRXWNjpfqk5hUUmU2udQNi9iUUcDnnzG16muQcdjGPoF2aeCy76qFnCdZYyNByoWWhauq8hfBBr5QH",
  "key33": "3T2rkkbhnaLrnNddMHceYoZh4qJkefkiMUT6Ake7M7G9GWQrmz1QwPR9X87Cm6rZAvYpeEdLTzHphdCVfqXzUF6e",
  "key34": "2HwhY65Dor2A6484UkzwBp18vj7fw31jgtp8tWf4HjTYJc5vLR24Pgka8hBR18R5QhufjqS2ve9Ec4ZTozQoc5X1",
  "key35": "3VUKE8FKCWPatrJXzyCyHLNL4rjRYPkGSmCxHbJx8uKvwpWM5dzCPYZB2aRbgY55Wbh3GFkUif3Wna18UE123Nsb",
  "key36": "au2PhCQ3gDhWytacfbUiXZ6iVXc9Znqmqg3LnajFyPU9cigo2kpkNrLCqPVce3eubzkkpArZuvd8BdDpN1KeK7E",
  "key37": "461auTqSnZAGDPSLGtiCXFXrVGCWrmqQLRhjzK5jR8G1iuSxMLUtvyj9UXowi4SPHq3qamAcFPQp8gnM3ux42kfC",
  "key38": "2dDkdb5uYegYt2aTWrMwKXnJkM9cL8hh8tErxSqZozS5x2BnqicYXA2JHNxejduvtL8twDzdNpJU7jd6nQZTRhJ1",
  "key39": "wAgHFwheHu7kjkhJf22ReJMF77f5sUa3jrj8EMch8KJZAQxmFKKDGkRxTVqPHuxDyzZmETowMZ8zvkmiuUstota",
  "key40": "457o2G67EnvegWzHT994ELAqE4723d359JzUepB6nzNtWakLbZQgHvNRhCP8FcoGD35FKp2biR6wRbSa3WLF1uuu",
  "key41": "5FcincN9odzNvDCnjc8WMtYJYCDEDKYg8BEaTtEhUiCWLrDLe3BNGRW2FLFvmPFhkSq4jUSZ8HohGpWswFpNGoDm",
  "key42": "8U99Ye2Vt1xxDZC1uaMfkQgkYmxxZy3NKBULQT1wNk1FGDL2sbtYCAaFJFig42pq9TarXNz7nMLCdpVtBS412oi",
  "key43": "2K4Z9NvvF2vpN6ewKtMA42fV8HzP2jBYSuaaWrmWwgLykDCrN742Jh2DtkoyyLRVG8ULsihtzCs9B5QHDhw7wzFv",
  "key44": "A6wt6GtHJSiJm8t24ydL59FwmniNCWcFfYxDQWikLjd2wgod5SoodwL2zyMdC3pQBZjPmzcmMnm99m14Spk8WMH",
  "key45": "3n4VXsQ2ArHYZjbYxpnGmUd5bZmheyrmPapZYntzU79zXmZxgDsPHu29YpbxwPag3XK4tNGmU4B2p27U2HTdnMPD",
  "key46": "65aezpENpKmChapiNbuD9brT6d76onKo5RySMLNfmVpyRB78zgmR2sXdhAaAnqQcy2KmZKwiurbbzbSHGLKwua7H",
  "key47": "4HSfP5ADz6RtEqJeWZFNzo8KGWn1AXwhVM4NwmtKcDNDkdn84uajPMP5avYrkgauWU1U1B2o2tTgV32bPdsong42"
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
