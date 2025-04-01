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
    "vkxURswGs1dDa2NRhEPAqzgimLCxQ9HjDnGmZ8n2f239KvicGaPvEwN9S7pQeZU6ps3TPDbLUWn5ARXbaYLevKA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5voeBduiQBbdEWwRjsjR6Vz8oBCci9nuWuUyVJjk6DoYirGuFqh81wFj3djHLf1W8KPf2fWMCcsrMtx7B81QzkKs",
  "key1": "B7QtxaddiLtJs98b7PSaLLnZ7BqV12GtWPLDXfWTj2ygkbT2uH8RzgsNRDChoC5NPwuD4Pn1t8i63yahDKRnNzH",
  "key2": "28r1yyNiEkxfxrYHXTyA4CrjLeirkjJFzuBxwDHr3pTwEDEM256sssPQiUGqTbda675Wm2Gue9ARY5ank1wCVYrb",
  "key3": "2YtjP6jS29ZRKGHMSP4a6GQxwQm6wHesnQuM7PosDaKf6mYMd4Y3fx4EZvxjFYejD8R5VeqsjU9iqNHy3RCV3Qbj",
  "key4": "PF3uPKxxSkWEYxRSqAn8FVX199LMs1ftVvGqfWuScDofCcWcaBvAAPb3iepu7hde4n57t88eJ9WLUreqbFo4ivK",
  "key5": "tJxdeHKfsUWxFtX2uVgspsrNNc6CMtiH48vPyjSJZiiiHVSUMEnxcSuGCtS5ShvpvXCZ2NFJUjQiU6gxMwv1HB3",
  "key6": "3jGCBmfVyyTp3wFAgEUSXeThr8R7stgRWthrv63j4A9U3ybEWodwXGc3X7BnB9RfzEt1Bf5uoaQ2vsHfd16VXsTV",
  "key7": "5BGrvGVGSqDj8QccQFwhNYrc8EwTNsPbtfGww5Fp7UktqWGQoC5VCahHZ69D8fWe9h72ytgttZcn4xcuaxeFoyUG",
  "key8": "24Y31TC5wdsQg7mw7dCyjBLvJZzpWeGJGnv8D66Ur2RWc2fEsQee14CayBfvDymTXPnNVGQZaNqT8siNM7ZsQy8C",
  "key9": "2dRwqsnTjMdYWqFCzks8Pq7jM8NCC4KUk46V5mVxkeSmvP5VctqibhTrBymbsrThbz61P9cbvx2PQ8Vb36oKweWA",
  "key10": "5Li8iTivGTC2JDSrQ2EqCynT1nZJaS7UXX61AGcp9UDryuU9BKsbPVCjPj9u2Pm4bTwUwbNCbWmRivzKa8bbvH74",
  "key11": "3y4vuS13S9jh7xKCEqXCMvpaXkHT29HHNLSSwbHJ1nv6V8YkcRawof5uxWUSnxmsWtKwL7eTbvbVH6WNsT5ZZkg1",
  "key12": "3wyfjFrrsNJ3nKMNHEjYz328s4Eq5gFnxYq2bNr94PCxR45aseNwhNmdyKTzMMCpRfdGKPLWEDWS8MSfChh71MCJ",
  "key13": "iQtkfBoxXQ43QMD6FmMiEgnminbN8ZiftDFjkU2swGFmTAJugmrZAdp647QyytgbYuf6VXA9rzjCAinpfTv5zSz",
  "key14": "271VB6Fzg8mS4UZWcC1QZFBzRCqLuFxVcykmSCYLXXKN7JkkvtTbGCv8xR4qf5as51rcdVDvT1Dr5dBgyNf3fcDM",
  "key15": "5UqKkq3ZNKBju6TwgLrQmj3UXNb5K4yisBXJzHDzghwaAjyRXQ5Q51aGphT2Etd6FFY6MToXQoCEmNx5WtgEFfeQ",
  "key16": "MRBvewGQruVrc8RdUXZAJ5qKNfkXRPt8VUJnfjGuq6KJwNfU9ESEVMuy5odECDmCENw1y7XpRXBLrPb1Vg76nen",
  "key17": "2LiP2HFhjR37PkTV1cn1n5rpKKrLfY7C8EdYe4KGBCqyBK5RCh8jftD4yPH9D4gDFn5dEJsb7dainJ8nbZg6i3e",
  "key18": "4UYb8i3TxFxw9H2ZqoFHcFg2vxNLTNdApivtfRbjBUUPM93MrPbkv3fdWswWkmqZUiFohTDQCRv5A9hiknCkMwMm",
  "key19": "4RaDrH5c8FNWusPUSCmYJtC2XXQZ7w3wKaeqJXF63AS8poacmFH16wgp41P5zvK7ydSUQT919DomgX6aaeEqRqcb",
  "key20": "4jMgqeSwTQN36rpjqETPqiTLnsNkmjx6rnUJ8ejuXGwv19bu4ptJE2FcmCbBpfSC7WaQvRSCk5Z6dpScWcBzEMKx",
  "key21": "3J2QPFcLSMxUomzZd8rGbcf5fnSofmuYRRc7gupHUaWSRXT2Ler9B8AHpCep2i17uzuW4DHHTyHbhwvW3pbdLJoM",
  "key22": "2WoqmQfda7ijJe3L2ySM6Na7aGoef9ey8EKLD9tdnFoBJar5HQKBiwWz1Svg1vN2hWh3zfSNVWVVnhGbvmtVZJrb",
  "key23": "26vaLBYdvCwxU13ov63VT8PRw4gUSTtJKjyedyGAds966geCEac2QiEdHHDoKfRUBfvUQYFjFiVjbRsz1pGF74ed",
  "key24": "3Hr4spHum8Wvqm3Rk4qPSi37i5q2ZJcygtq4mJzkuftAcYohB8oPoXx5gNBdT3XQAJJzHceQJ8JY5DLLNHv5iVBz",
  "key25": "3iKwA2ubD6esU3RYksJ6vhryo1NDvGfVD4qKdYGUifbZKJVfT9BuCTrbXMMBggAoc346NGoJt3fhvrtUkVpPEMvV",
  "key26": "4WMQZtPkPkMrm7fQ9yQ4aTyY3vhNLawk2HtUhZRmZY9NC2HKQafKKgXooC7q1WNwsq9oQKnonBVFF5JkGFQuMqSW",
  "key27": "D4s9Cu7SSAHA3tZT8cUJHwSzVUVMeEHvAXdaEHXYY2DAEwR4Kizfm2qRJkw78qFpQbB7t5uiQEBuPt4YZGAJy2Q",
  "key28": "2JNRYyCBkAQyX8BMNYzuXVZFHugWoiG37DVtw4tRCL8AYRvkN9Vq25FspAYodueA2iFvvKvK38wPyZvWFE1jBXfv",
  "key29": "2oK6yvssgnEhgunFPs3zeVSnBdatarXDsx5mu9cgHryMoqwfGp9TNW8w5Ve5ToZB84jHWWU3YAQxcWBwggtf99jK",
  "key30": "pWKWo1m7q4fk7QVeV8USYRw63TPYowE4VizWjDGJfs31YXvYXAfqihxVo8mkPDjbk1ycLfWWYqyzN5zR9knLHhf",
  "key31": "W5Z7PQbtmgYvrVK7XBbJHEvJPCQnDgzv6BPNeX9ERnHqHLQNuHmwkXXXPA4RDtiaRZkbWLbxQhbP1TqQ2bgs1kv",
  "key32": "5566gk6uZbR15pQ4FVaVmuZTHDvS1wDLgS9ooUFmydEBDLMyWprThGqKvNMFvkfHrFAhrQSQHdM2Z6NaEFw2yDSg",
  "key33": "qCGh2GKxw6gmCaKTjAxVCTZMvdoEZFPUFJpPFCt8Bw5LCtC5iCBWQ7Zr43qtRCRbKgevHPv1SjJCJCfhN2t74PB",
  "key34": "3o1LCan1auQWVSnSKJsW66gY2LQjiiBP657mzjfEBkyouiKf5p1qRByJ2VzCdYHMpQCobBvSNRPR7rWY2hchnJTx",
  "key35": "3dLffdtzhE7PcGKdMcZuCfkGokTPcnaqciB6iVqhYobD3TR85AXPJnpVcaj3mFDdJwqaDRdyWL2S2hXhMHt5ajzV"
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
