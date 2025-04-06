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
    "8sxMNgRDvsRcniPLbroYfoNHiKDreiUzE2gXnFStgn8KYVeZCJ7iHVxQjEGLUX3YMPhGSXCDaf7aYAMXmX8eUS7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3u2TmU5keKxfS6uNPWcvUMnmw3n7dDrc8mi54X7oNA7ozSAAvkYQU2anWpLhauofCqyRxcK81FTiv6H6nzgpftmH",
  "key1": "2j5rDs6NVvpnDQqqgcKsS7s9hHrQnw5kSz21nSv2mrGN26htWWd89aSjEjjQQLuqiuL9krknTaC1rF45mR7NX4H6",
  "key2": "3YNxHUTTC7qNG9mKzxXDm1Bd6bJrAXCt2rkHuiB2GSd8DZuNc7VnK942GJtPAewS11QcXM77GX6miz2b2S4FLVdA",
  "key3": "4peDkyauaRfjWMncAZADCfzMgNpzEVCbzAze2yciVXyWNurYvFzX1zBGV3v6vQ7M3Riwm9wY9w37hL5NPzmDqkxp",
  "key4": "5ERJq2bGdTHrqiaBzJtU5tAiCL7Nt1fu5T9W7A6oSZ25wbP1SPaeSzWHeoHWmzKhuCJBRrvXsphvSeD1BPgu7yF9",
  "key5": "3484NPjYobTfMCMw1XAiKH3qndZQRHKccsLRs6LYvBQUk9nGuis1rNhuLxJjSxhQyPP8L3o8Mxtmpm3Th7fC6Bfc",
  "key6": "3GsP2hfB9NocRkmWMW9AJkDgzDSBPeFfJS4aG3MgVzwCMHEuCD18t9qfH89dKLWX5UmiZwUrLRitfxAVBFDEs21q",
  "key7": "3KBntug3Ce7ZpK3MDjEQRoccctZZFheu8E4xhS4UPzS4NGsG5AzubTrHRzpvchS8dGH7Gjn6TW9LPfL3BabgZ5TC",
  "key8": "8SMW7pZjNu16Zev21agT4M1qTRbXWofij4rmR6ATP5VzTZSmqJ2XDjVTh9niQJ6P3edUJYHVVB2MYUUL1ULXADz",
  "key9": "3HReFQwjEaQgrVwTZJYCFJA2ory3tLyJKnNgsMADh4qgRqUcsi3p7CQqMksWwSBjTzn7ThrG4CTunZ2UjCkcoZwt",
  "key10": "2wqgoCDdqv6GfHosPvL9X7cj81PWYayVKH2bVBmh5PAMTqGobv39U6Au7uGdk1z6Vgoq5x6FXPbBThaTCSHzwuGD",
  "key11": "5bfua66A29srp2vpitTaNUDphNshduChh2CJW2x366a7PgGKLToawLRzncfQfL4KnE5Mjud5SFQExNW4gGaN4ndP",
  "key12": "yZDPmPFqyZgtK2nr6k4TQqkmboBMhPUHynNF1mXGh7Y2jvv75CDhL59V58WFaaVc8Cpu65rxykPPiX49Fq4yrjx",
  "key13": "2Pd8zT45i7k3AQ1d43Loqoy5VZYCieXkBVxUrQZAFzi91YknQwS1eDJhPP5WMdGmQdKXQBJLdPvRQnEmRyKMLBjP",
  "key14": "2S9MduVQR327sgw3NNHL8HsiDpbVCFAcm4ZCVkATGTEC6CSUmYjwr5wZXaTMYRhQJEaLPheCfipskrP17Q8Uepbg",
  "key15": "3uDpBFM3gkaBFMnQcwGHZMZsbdZUB23YLfj7cCc4YR8BkA1VUKtDuFAapxGcz44NijpVxejuFNwdwVNAPs5fzTMB",
  "key16": "5bzX1oQgati8pNrT3YzKxD1WRnLZqeMGWc3Lytf2tmJc7nLZZBrTFhHZ5zT1h3mTDemgzNBJAZFJXhD9YQSW1gxY",
  "key17": "4n1C8EdZVCwENxTFMQCVsWKTXvePBe8ufXvwGJ6EmqaL8f5AU4iusARSdigLwNPHY49nVnn26rQGrZzVbUnVUCEe",
  "key18": "XPFEkHRgVkKXAD7CLDV6AiSBPcx2Qz8vDhgoX3BmZ9sCkWYDY7SjjcV1Kt8gCRAe5hZukUEfBHf4HzPMLzGVw6f",
  "key19": "4Kn57zXEckUtt6Jccxvbpz7qSJYUeo2jvmi8B4KTX6BGaoTkqp4hFi7Xv1EnW4ugTQWzufaKEegrLDNZUv7sYYdz",
  "key20": "2Uzqn6zsEV7qskBdYt9xBajJs8zvZPZn42uNqBvDJrfg8n5YUWc7KXSRi8djA5pfBPD3PbhfSgxzxb7azXSVuDPV",
  "key21": "89By2FssxQSiaifxwmFWGAaddX2ufTo1ajWvPEiqAi12cpjidiAkEtHkQMbdCQgGYqzcW2SjQS2DdPHH5mbFLjn",
  "key22": "5agrvxfpC4mf6sXNxYANpmzJmNg4DotXzny6WswiWtQXYMuHsr3VAKbchzA2KmADJdDKub3ZjCKEFWKfM6vintkW",
  "key23": "2MXpwaE7QMBD7wiKWP7C9ZEYzavvc74pMvhST2XEyxHaWRJ58G8HdyB19XJUVVknemqPkh2xG71y7zz4CzwsBxPm",
  "key24": "46dbfhSdNamkXmkMSEZgVk3Wyqg9Cw8o5L9n2nyN5QLaiwcf4vpCWur3k6sybDK52BcRBw3uRg8SLRsZVAjJ3kXu",
  "key25": "3zTY9KGT91CeP2Jq6eZysHHAcFPAnuAb8jBhV24Ema35pXuP4CkJeTZUrRaiFZybRsyJCPTFWKEjy2rLoCd1ypNJ",
  "key26": "25AvWyuQUdpqsGtRdyKaLf6rYYjZo7hU1a8hTveuSQG7eKLPm5zR3KVjz9r4mfnUpuruWrJV9sbAAUka5f9fFQf4",
  "key27": "5VECQomQwZWkCa5dEdVvhnoY3e5dKesMPNgbi1NtxVsiQtXjmn6cKq3Pdni7UDg74WW5GmA5ab5CFDRzWQ4vVRfB",
  "key28": "28vo5kJjUXriAPoty1FqdZq7vp4svXuzXFWZnKQdzLn1hYmamWtZrDVjxnHPxoH7x8XAEk2nstti8ixi6Fb9MCzV",
  "key29": "2u8V2trS36eZaqXejFqZRHFQXdCQKEQkg84LVfkXwWxsFyMnwZpFDWfSRvfDvw1pu5HjgZFUnvDqdtohch4eVY9s",
  "key30": "47DQTuyodkCDy1fYfAFEn83PGcooieTdSNtnHuPjoqtahxg1uAGLMhxC4goAHpBrjggfyFnPjKBvi34HHKkUDztG",
  "key31": "51bpJuDpDLbhR3QDKcKK8pNRWqf8YFt9sw2RYSZXQQnFqro6qRKLH3VXvNLcNkkyEZ2HnYypwjCr8zNuieEN9coa",
  "key32": "5NQ6yV6auijpnvsS4q1LtebiBr7wM7LzPLywwyFkRz59JgXvwmL8t3PtfXASP9gYUKVGwg2WEyH3sBJ74vNHeDgx",
  "key33": "5aVcsgfnWmUnN8JVQ9RjDpdYfYUevKSWH3Gg5P1a74nCuYim5iWcehduWa7sAnoVh22Fr96oHpTMUkyBGwcUxMfx",
  "key34": "2PPPkX2Kb7YAy8NBR9FLEZvwdMDdTCgYiyB6FH3EF3j2gmPMpCYv8kEP7oeZQUyNvPAydA54ap9tGrp5y5WzBDri",
  "key35": "5zWXnwaC9DaH8gXingNL1ZT6RsakwwDCZJ6krtTEgzsj2YRZk9mNLDACHV9rspiJ2JEoqkktC4KfaA8NaDQ6C8hM",
  "key36": "Z3dWTpdPXSDmdRoPNh77qGvqGU8PwCEFZNfX82crYHh9Xx6zAAtJZD4S5PezLa1MrqCGScSNoADCaEcsBr2ZrXn",
  "key37": "3j3GCbgfWG42f5gfccCaQvEzaREGPxXpHzhSDpzfAJU5bHt7pXmDHn7zsbobG3er5mkuYHj9yuZQ6MAFQRoecYKM",
  "key38": "5g8XdeKd5bWQW41vxgTfkexGGRzseP3JcttKkSTuHKBkZ7BM1X9ToFGy7zbz53GZjodXZ5W6wEbwLtyzrPP4ZoxM",
  "key39": "2MD78qcfVesskiVqqc7NfWN28aELpdwa3U8DJbeVgqjj8aVSNeWgChnBV8cyLU5KiGYpUHHSgaiftGbAAm6x68Cd",
  "key40": "FmhGCSPaUjFqtkXtQoHfH77gMaeL1nfJYdEK526QLBqWnmLfZBkTBfVeNwHeUnY11GXJtw7eGCN3wth2kMx8onz",
  "key41": "xL3gsgC9ofjR3xqUuiN9tnPRgUXDoBG13mnz6ce2DCBHdi1eMARnVoxya1xCcd6d5HCY17CoRmiXbpU284HDkvq",
  "key42": "63ju3HV2bvhxscb7kVtrx4X54EKndFLXW6bjJFQvK3nLaRdgiP4ymnCbpE37rjJiYpsxVLQnhVK7xuR2LKyj9Kwo",
  "key43": "2SZHAYx3sTQ721744W8e3m5L5jE4PGEFBeGtJpXZgFDb673f77eYFFf2MVPK1j1kpZeWa3Qt215woStGVck8JRtm",
  "key44": "5GLkvJEBhsX8dKa4orjp5neQT2YPxBTMj1yf5Ni5JGLr91Twk8MyFDHwypLJkwHWQn3Nb58WVJUhVu7nggKgZ5Gz",
  "key45": "k3LVS3ZfkECgNhrTcjcwNAHP9SDHw3eMTjtsEPndnpACSWSFJhrGqcv2kAh8pMqrqAyqEDZ127ju4fcrQsmPz2D",
  "key46": "5ZLuXKB6cX8x6B6TvW96ADNDWbuDRDNUKFbZ4FEBh3c3BnW8DZJcFWumerTomXRfB53Et2RsZDsJQWr3Pdw1XLy8"
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
