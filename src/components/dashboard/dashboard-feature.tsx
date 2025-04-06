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
    "Zox3DAH3qcKsKKEpuCrxiAS6giAoA3go6Q7MXgJyL1JsD3wDPb5XD4HF2nVnkHhfvyTxoH1zS9Aj8EzDtUeMof1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2PcDmmNUvD8TwFpsd8vJZgRatC4zM93zPGcKuPoapmUVgqBxS6RjpfiGvA5sb6r7JcvAA711BKubxpH78dz5Cbyk",
  "key1": "2Npp3krZbBB9sGYvFGE7qC2MRxZ28JyYuVppTkpLJhbwETPNa3e2bQ4JJRT6Kwd6shueXDSrbHnvfLfWGfTT5mVU",
  "key2": "5MRJPta6iG3Envj9BoqrQvMc9zAvUA4YgjmqTNTLJXqDyACRHzmPq8eL8JMHYVNGNZq2sCC3eCjcVuvprshE5PtR",
  "key3": "2iPhoVRGmx6cL82vH1z9gJW45MCKBtjzJuLYF68UWCXuw64MoD7BozCvkpiP9arJe48dZXk3y7V8YVN7hz4D1iyw",
  "key4": "5zfFx5kFaEV3pQ1BNjkETWkxNPSm5WUW9b5zWAWf3XHkGqK4j9qqDCJAyTVzQxqmU79CPY91mBpNGPkhA7tXXnbP",
  "key5": "378ei2QibyirF4VjKXQSn9ewSyH7nYyfewTrgdEYFW5TFvYQUHujZeR8vxp11uFfhtEvKpXtDQRRwq7So2woHkKi",
  "key6": "LbYF4G8MPFNSkVmMzAF9f6fMRCQH38b91Cp4Mobf7D24DmVP82sk6nGjZBM7SMe38JfB7ohCTowdSdfQwv79ofM",
  "key7": "s1geb3bXiMhereXVNNQsXf4bMUFxQUBowmSqDYLS5hfENf6GQXb2JGkvX3RwvtfWfj9WsxdHXAJMWmmPmrK4A5W",
  "key8": "VnPJeFYjLRw36Q63WXSvVxzofj3ipMPnMqmN9uqrwH3t1SkSpACZNgtdNcekGD8YeJ6CJdX2JGweUCmadaE1Pap",
  "key9": "kpbfcbG51V1ebq4mFNJfnKyzgEzeb7Da5fpFrn6cCH4uWfJmftjfAQLAZk64RyZNnbsK2rcjs18feyPsqpxHHUi",
  "key10": "42p62Ki28vkkLEUkPbBWYv5vQgfQ3VxL4gshprXw7sRWySUzFnDVEU3CKPp3jFVbwN51Uoa9N5SFmDYEmjJToaEX",
  "key11": "5NTyoYwoh2WPNZg79ja3XLhsZfAgXujisS5CGC2VEyFP3mNkHTzqDHT8SzLXBPq6PmFRn3BxxANK96uqPpHFkTUm",
  "key12": "2eGp39JS4kAbbQA3Jnnh7sy1HjBf5WoD8VrtujevpKajVyBjnZtL6X8YmoHrLJcM3w3Kz2srEnzdZhjjDWwhZBTv",
  "key13": "32bjjSBn4eNW9rFNbt67yYG5TN8vKtNx5dvw6YcVRLnMfKAVXsZG1Cvxy6Jd4MQQPZeNMShpB9SgAhq71crxKJzL",
  "key14": "27Z6aBw8tLgwD3uD8DTCTau96nRMiN6uEdYmzd9YExnGTGuq9b28FgeiPrTNR7Gi4hREtm2fgd1SUKjgMrwJphDk",
  "key15": "5XTFAUnhH3oqiiQK9LWMETHpwLHU46qRwghCjGAQDAUPjPqnsEiBLnN8TcrpatewpXgxBGNDtY4mcjj7CjMd6nCz",
  "key16": "4CPvPEJ2Ym6WuYg2a4r8TtRPodEFZucCu1gZ6NK3RNf9to9ZEPGKpM6PT19d5LuziTgXjBxrA3LDRVjeebtbQDi9",
  "key17": "3PQQqJrULkJtcKUB1nWPA6TaQgFg9Q9hEeHjgwShc9r4DTDEtVnXWn94CtmR48wuf9hKenFKfWWLsMPLeD2ofsWr",
  "key18": "64xypaqevzjwFEskNAAGL6qavFGJEZuHvEeC3cs91DaHjqr2yD82gDTBawwHL3mszJ9YQW2RKWAhnbBNdeuLsWBt",
  "key19": "3Gfs1gsRRfoFEV3s9F9WWaVcnba4faQySsxHH7BhoqTu1wgwvkkyFdVE1tB6ikpibfaNAj1T5VQ8YWubN1obEgaD",
  "key20": "4DzpbVAsVW8xSsNqdjGq5VnY21qPseEQ243GxBEu8ki1NpcM8bGDj3eYZDLneUBnwNXYjti6GsVAfMKGF3vzEvmn",
  "key21": "631vAAsBAyZyGLz6n6VacHxxDaT3pWiwFvtJrFZbGFj4V8573m8G1P2yZJiQBaidh7bkiH2A8Y7JaWev6ZLERe9K",
  "key22": "5iGFYEGYrKr3A5zb5HSrvyMVskhzjxGq3LaJ5SzJXfZiKTBTofi9WowUTAPfcRvboJtzJ9HshJVSWZ5Hyq9sUFym",
  "key23": "4iPUf45pxoscdfL9ArEEnfjQVS5xzZv1afKNDFKuhhjqHTy6gx4zZk89a9tq3pd4GCGSgfbmWWJQbWqSiMDRaD9x",
  "key24": "2eJEp89xXEFVNCDGd6jHvrG4RGyf6mFxGXGCqNTyYtPru9dtTxo88ktoPicnB3MhDEfEbCR8D2fmDKbYWwTSs2sV",
  "key25": "4HMMfCpv1ajq9EvLWybAMP5ocV2riByo6gJND12KbgSZtuTbu2AE38LwpqyfDU26khXMfCsMa4fdEoTqZ75oXexm",
  "key26": "4fHZ4nhKoMxP2yEdy8AjUhoyzaqL2TAyUAQSjcyZ7kGsGfFcKNEbqp3WGZNwbynSpetNJBxo9SvMbw1M2GqLCiqx",
  "key27": "2wGyoK6PwwstbufNJFRxAJbrNNDdJDzwRpjCJRaYfy8qgddHKnpGTqaA9QfxtYfjcDaNnPQ7U3fvFobutEkCjEFj",
  "key28": "guk2WG2Bdjwc5bSRvHgc3qxAnGLBJDawrrtV57vD1jBGoNyYV14qxzxSGjrDY6hWcchhkcqMdeVJgtHj34vFEA5",
  "key29": "2NxDQPK1iU7VKeJUyBkEcCfS13qpHyfhzACXm2e2xgZ3bz5BKmUjhVWbXWBFmtALpkNigUr2oYMriDZQHpMGrEfW",
  "key30": "56283ENdzKwXEjuMvzaZvnAkK1Pd2GJ3sU4EWNuMXSsnrkAuCSptsptJpcpd8GXN6xPTft1kNwS2tKrxzHwKvGhY",
  "key31": "3LTGjbzoK6W2Bufukmg2PVfyBuzSvVEAePkCQWNCNJi8bTRiZPzrnLxQLY4tP3TSF2AVpj5aHpMivNcAd1voD933",
  "key32": "LmfvNSWqBMZSLAiwp1RjAJnKVE7g7UGsLcgXXAdyzNJTdF5PqaQDwYkn6RXyX7xzuUDqBRp87C7oVz1KUq1TP8y",
  "key33": "9KQv1ge3XZkZjWoB3yAFnz7a8L77iAdv4T9T1jCutzYDdBgGiXXxda2Wh5NjMGfr6PF8CLp5GdekyXNJYH95Ptu",
  "key34": "2upLgBEQ6trNkqv9SRV1b6EVXsDzXdENLMkpsoMGaiubfZfm52r7JDZkE3eGuMx1gNDpMNJm7xAc5o4ULxqqNyqW",
  "key35": "4FvbyoYjCTx3njNaUmfBns7imLAqLRYCUfk6MGzahDf23YjfEZcRMGWYWU8z6T3pTUQM4REPpBLZH2t2649ZKZ9k",
  "key36": "48usSCqwUrwig3LkmGTAgiScN4REjBeBKWZVWYCghfkrRLandxZ3iAgcSapsxxrvyKF9qytLtCH8VfEtu9eLgnt3",
  "key37": "2Gf3RcRd2gAgcpqA9W2ZQjjsgXK2vpusNpz7Y1Tbje9AS4k4bTLEorpny3itGHiNKsZGrXbfdYzNK8qqiehKGzMN",
  "key38": "4dh5YLtWKxWYWMRQi8qpCQMEhkiQHEUie1EVTLgnLcZckGz6Y5tjdpEKYGhPjeaWbo96vr97tFVgKNshRBWQxUkN",
  "key39": "2tRyELDqDC17Rv1QwvgqZACUm2V6GfvWrSRWXgXPRBoLziU7XJRLv65P7kG89ada2xXe8bS6wD4y54zo1PhREDjj",
  "key40": "5weA1jZmBT4jq9psrDyQYcoZdVC25RxrG5tVW6bmx1hyFAvuqF7LgQVM4v6xGUTXtKEpYVKimas2Udk7UmqpzEDq"
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
