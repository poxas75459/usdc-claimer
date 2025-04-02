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
    "PF59t32c29PHWGReTHYYPMTKECQ3PdmEVPH8P75VvJifR1vqpd17Kiq6Nuupa4hn1FWK3AKnXjSUw5wQ6MgQJWD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "45dV376hfDo3rnTQwfJqLy8rithc6qYDsKqeGqrf7ytP6GtdXJuoAg2Az1W67pbu4dfqZoepwfT4cJryECnnWrpz",
  "key1": "3bAKtcDvM59yHZMXewvCF5EvnA2qVv2ZC2Y7qj4hnTkX2yWQRyzESoFzW258Rb3dnD2dW7wfuCaNDZhrTDeLxiHE",
  "key2": "5P65kC82D7p1wPkt64kXMDGTzQRhWQE71koeNkQB92fX4fhMT28PnbkNUrP8RVZ3oDm2LoUnMMyetLqPAwFB5CBc",
  "key3": "cyJXhnCPEMt4UifKAsxg6DekejEaJ956eL7YzdEcYvwbVK7T4yLKtL3C8nqriw9QBJSaEbb7zaByWdg1RxBxv9Y",
  "key4": "4Dna5ViF9bHFmnsBDdESkcfGG7obGNPgNrf6h9ksZdrYszjtD1U2jXBqYS5hh6UByWXUQxYoUynby5RRDrWHG3rn",
  "key5": "66cQo5SEJivM5Hc7ovR9ig4QfQQPNRLtSCMH35m5TX9nsgTcnhxuNwfpy3YCND7PPmarnRvzHZhA1jkmAeHJbQcV",
  "key6": "3BM4nykqvVipkEtMtoBXRL7UYuCibD3x6ssqBpxM4tgN483NkGGTreuQ5EmgN8K4X5cisznf8wXKX1Tkp7NSYrJq",
  "key7": "2XUxj9AH9zUpojBz2qqzM6LHsvzEPUMN9ywbBEdh8HvCqYRDoSy7bxgrBuL5exJAcP23Gs8KWsNadNgWzc1DhDHm",
  "key8": "3Sf7iEzUyJjBYYCjmH5kkSsJTkXxuuSUhw6YGj63CYymGs7Y8UN5SjFzU1G7uVL4cRXVaFfWNPcHtVinaNPL8Dp6",
  "key9": "3fSvEydxstFwHeBudn8NSsbZjoeiSkVLRub9GUKVo8wd1KjLn1Stfn3vb4jCxCTbcW3vhKKUighfrPSPkGp16zPc",
  "key10": "4uqh35BmfEQ9aiyp2rTJELNdJfFRQFNCALVARKZayuYMo7rNu292vLmQbAXJofSqBsSmReT7drJ8ejExp7xvCGot",
  "key11": "y7zKQRmYj8sYFAsX41TURZeMeYHW12tAPNPxXwCEbSdQZ93sPrDMenhZVbHQKTZeKPxsd1YDYvZdgw5WTXrRekL",
  "key12": "3GGd3dFThirLHKchJUBxGSZqk18ddtrxp1qB2d5JiyYC4wmoZ1FksNbEEonv7a4s6DS6fsEXJxecQtt427eJU7UV",
  "key13": "4bQvhBawZL6Tz2rNmzy1QxYhdBDdtgMwqq3ErE3khhiNabbDMiLGYMwE7KejxtQ8gJ21GLpgnhxzcJcipm1Gt3fk",
  "key14": "3h6sKCooptdA2Kg1AAxPSDHZzwCbwafaUztiyTgF2AMtAeqo8AVD7sxQSom96skTgvBNRPKzLsZF8RH27P6cGSbq",
  "key15": "5UQ3QkXgy1pgy38AZqoQ5cLn8zSzYD7hXP2Fq2AcyevHtWCs7MrTDuZoqYoqyZp7KnNXwHsBqqoouNTrTarAYgfm",
  "key16": "knevyexSbSEoz3xje4aTigePP4zV2a2jNT8vM8M4ZTREhom4kGo9JoCFka7H5QoNJxXoaAL9c7gdrJmDyn6oZ6Q",
  "key17": "5bh9bR53EoFZG3zBvMvh3ZnfTfTerTsWfnLNLK5ogeSKuzY6W9En7yMHZTEsS3yzWfYf25XGyXhzoHGimKDZEcnW",
  "key18": "rH4AgwZuENpx3v7LngCUk41KdoUZ95Zy2sVw4gVGYxqw65YzzLXz3ZKifovjd468mjRwGcZ85Q1rosPRnbbcnGq",
  "key19": "39tdMesZkqmw5MK48Ynup6VsK2g7HmP623M5zMYLjvtWxoERhbMsrv3z5GFJdyzDN1gpxkiKPTKo7Ztm2iHEpj1F",
  "key20": "4gURTNgAvpJFCYhLXv257f4s63BXmoFPTd7zwr6c3PWCjdd8NcjjMdNt4xCdsrY714K63ueoVznYrwz5ABwpp5X",
  "key21": "5bugNQEFNoeYd9VH5UhQnyDixxEAu6soYyfi9Vsu7vvGC2ZkutLubUqMWqxEdBypXWbFp9567djKycLL4i8RSqkv",
  "key22": "5MGqK7Z3XnKivEbsGjNSpm2jzrq2MVZQoXopK2hbFkkRa6pQ3eruRJy6hi52HZyQn5AQSrSFwAk1iKnVNmuPh2be",
  "key23": "65zLkqRU4kZgN9rWd7uTpYJnyTfUY6RtHMyXvLWJhwP1cHGksX3cXPGqbjJmZxSiHZCLS6yWDG9fPZ3iaq4eBgJz",
  "key24": "4APjzMWufwtL9AoMXeKGUftvy9k2jdbinYadtVWiGLUZWt4MxqYQ3LeyX457jz7DnNBT18gNtdU9gyMG2XpBqSAG",
  "key25": "21641K8LmhLR5Y2mahC4a3DB3wyvPkjW2iF86GZjWV7f54MjRkfMyLiPnLtypy5ggr1adR8hWXEGhFQi5XyA83Ar",
  "key26": "5cHgR3gufzGmwhcNKonzYZR5X7CSvQ9SbE4dctUNcJhnhsjGhXVAQxmjL1i8uzZGSHWvYVJbustKMFvJco1aZoVH",
  "key27": "5jd6xYdT2f3K4vcY8oJwKWgfeLJojx75ugsqeaQUpw4df6UAxdJ4ZyF9i6c9jn2PDCqK9TMRyvUxL2U5bc2WfKHj",
  "key28": "5uSkU9TNDXGfhdohtNjp3BCWYQYobcgo3yC6dwkj22kf9PD8pd71qvta4sM6FuDiHbL3XckinJuBsBnrxwaBrVL1",
  "key29": "31z3Lisq342cxq3NE3dW75rNvpwVoE5xEh8VJ3KJDDfExeZfZjj9bDAgtCsvdYXZDy5fKUDE1NLc6oCCEPLpS2zL",
  "key30": "2tmvZtskBW3zLjKLA8yBYC9HdhbESj2C1MT6QoMXzGyJfxsZsXgjy83gViCu8VEkbBK4tRwWicBxLN1RMk6Vv3UU",
  "key31": "3YigEYS5JHSaG3wBuyERw4u9jW4u6qoB3a148UBVQvyurAsUu5w17N3sQZRaj6UZ696iVy8QCF5kdJzvSFjUpfxq",
  "key32": "4Qoz7dobvYa5W59eHKkr3P36Q2PuEPHQr9MP29dgReiS7Hfi88Aki74hY6hLx9ZcYoQscX6anXHCZNbYJVjov8wa",
  "key33": "2UAyy1FVXKpDNay9YLRCJukKyR787aQGT4pkKVWSBD3rzoY9bkX9TcRP2fo3aw4EmbXs4nDrTgECiQKhrcrQXQfv",
  "key34": "4JzbSyxzk8hbn48fFwwHS2fF7nvgLRfac17oxBcV58xm337ULD4rB6SW4f5yK9DES1s4NXyFnht2EjBmLJcFAvQY",
  "key35": "mr1Z1bEdryyr2GW5aQvghxFrd82uwbkt9Bs5ic9hES2wDHcWe19AL98VoLnC8R1P57TVJg5j3aF18LFh8Fh5ur9",
  "key36": "4496yHYNNDtrnKsmViXVtK9rkfmuQEwGdLDiKjwKKrVwFvXV7E52MzTU2q5eSeLRqiCNnF97LQKJaE3dC8ewaE5u",
  "key37": "3aXn4p5pYngBvhnJAbCEY14Mtn1WYCnXXUVfi5AMEWVRKKNaWmYei2tD7Ci5vhNt8WDXGSy6WCM7ZZ1BhpPskdN1",
  "key38": "4Vsm2tu9CsbahYtd3tTd19zaR67Q8VMhp2bBj5VAB1RcoprBfe9UioQhYDVgztkYMa5G1yoU6FDFr3WnPKwVvLKU",
  "key39": "L6oA4N4UsQCsTSuMgQWvQJWRL9dHYgMrksCEM4Zhxh181ArdQKTPGpJMwAPrEoaZuyb86z6ecn2pZgH6VycRxLU",
  "key40": "cuEYXumfS4cbDQDXp4fF7Fh9dWjuvsdLaiTaqN7aNKjm7aRUEcwSpz3diE1atos9aufT2hWrxGJgc7ni8ZTSTcr"
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
