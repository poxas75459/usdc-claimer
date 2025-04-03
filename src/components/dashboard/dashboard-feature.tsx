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
    "5GwHP3FkQcR4B55PUSpoCSSvyM9aYjRBDVM3QJBJp68UfgGkKJoyPqSiXYxLf1Rm42sVBz9nk1qNaf6q9mDCacAa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zGE62oZbWg3FpUMrEbJkztwP63uxRDi73118CmSRTaKmsYAEvWB42JHZwb8RxQ1TVyM1es6B2e7PRrJtLS3mkUr",
  "key1": "4YxbydZYMgBxGToBh7wWTHn2MHqnKwzgvSj8389FmRrqGtdDH3oMrgqYjkLa3wtS3gzSYHbPAxsepmgNZoWquqR8",
  "key2": "XWBtnuY6dR64ArwUJHeFqYa2xk9rQB5JnGAbcFdhNhmdZA6GmG8czTcWg5Cp8FaGmq6RryZEC2aFGj56jpUEdVf",
  "key3": "5qbFEQrfz5jMDkxu4qTnDvTDVs8nRPHc2AUgDuzsJKNw5ksz4oSKJ4Zg8f4pdKVeqjfiZk8WWgQbaKnNpsHyHca9",
  "key4": "4Kma67xiWvkfdM15m3fHPHNFeAw1wE4wTzYmFgdwkuhQ3FV5niSCnBmUHQnkHXDCxSZpfuH6e4JiVSSJho1ifPgb",
  "key5": "5d1m18Z8bgU3TvkyC6Fjhsir3fUnkAeSZaQvNfgQteN2p4REhf4iUMvfyLUQWXwLbf9uVLp3T1C2nv7WqSbmKMZ6",
  "key6": "PZ4AQEEosRaf3pHb9D1LUYFGRNoLbYAjbgsqi2GViGehjiM7x7xQEEKiQSK7L8wamjqwRG8fjurztGhecKuuoDH",
  "key7": "3VVJXSuZzvd41ffAYFBFCEn2fhVpywtcWRDrU1pPLxE2iUXm6y7uubHwJy1mtaJoshrtU1HYmE5QmYydfPMr1zCV",
  "key8": "4tJUhP5UmY3QgvT6DDWJj7VurD9ZpPKyyktwDrF4QTvFjBS9ppgVTMq16G1haV8pUoMkmsuMvouNRAWGLT3SwhQC",
  "key9": "sVDyoxZJSQj26gakcdqJCR6rZvij3wvhtscuJT3AFgdjRwxfypQoow8ijzbaqiTHJXRSbMAWSSVXJZbEf3HUuq9",
  "key10": "3mtv7Yte36Dq8BoWVz3psedY7rxfYYRk4JvBJZR5rYFaygp5KKWjSYugmPQaSd7QrF23kPHaVLZ35zGiijJBTS5s",
  "key11": "5wYokSM4FSZPpNNoQGxrfcBuXuoRiZzmuioFmR81wTRaw6eCjqtCk3xN9KAf7BMzuNvTV5q6ZJXEjT8eBRpEvwfK",
  "key12": "34nsmxiYPtHw3LaKNXoB1k1PjiJWVXP24unfi1xvjn9witGs9PknEcWUDWem1fTSzXKh7vUwLyr93XuB74otoct6",
  "key13": "4RcqkczoYcFnBdrPHaEzBXG4GtD77kHPJM7BhJxN3ATVEjykBspiTyf5NE2xNcea5u2HZ4p8hDNpmpHVqGMFqEqn",
  "key14": "3eKj2No1NYbBDNtZAibAdY89o7E6yzjEUN4fXWSrNsqZcHWgaq4nSsEhE4kd61K59p4eCzhecNY2JeVGHvM2k7db",
  "key15": "DdY32aMYWmiRn9Ada2nRz8BrN1yN781ZR5ot7wdUGWTNtTnr6CbopQEoLyFKaifcbgFxDDpYYpAEvJnmuBNfkdU",
  "key16": "4ssqGQeH9jvkc5qCNfDqCFFSgy2dtX5c2h7GCiL16Q7J4aEr5o5LazH3reyj3xSk4drjwQCy3WRnuTzYzgrc6W67",
  "key17": "4NiMJqvfSdkPWdYjLYDBK2BAuZTK73pf9LJg1nVoQ2fmYoUt9hzUULSy19EJ1NEp1Vo7Wh3vDc7VA1vETtRcKUMs",
  "key18": "5h5R8ALCoALRY2UDvE3vG9Ak49nrgDBZfxQBseAdzwGUwgYHFT189ZvAjuBkA75j7wgtvEfDs4KYqBg8TmzkQd5i",
  "key19": "3wEYJL3yCwwsUVGSyoMfir5fJ52B1Mui7dqzBjRd3LJVBN7zpe2K3UW6xeLc8626ULbvn5BveJ79BdLabHqKTkEj",
  "key20": "2UWq1pXtTNn36vvb9LoktQW8SEu3B68qPtnk8m4KkokHH9TbQDSJ1exNpS3dwoWeA9VAVtcg9gYMNZs8CJ2zcget",
  "key21": "226emaJALWh3xxS6NZ9otk6SeTUiRqpC9maeTqUVUvznkewpJxAxt1LqrP3yNmun1FuRZWMDSbF46SjpRUBqJdYz",
  "key22": "24w4yAiQEzSJATFau91ogtZwe3KXaBCeHL1Teq5dyTk1yuc9kB1VGGGcJtx8bJ9na6jCQuHNVpUrVP7m9xeE7fW6",
  "key23": "4NTGSFzu7EvSkQbJmxq2VsGw6zXpBq3eks7PzXZHneyPEPifCHhHSisCuAg5boz7HGMwDLFhbNiuUJC9xY3sCVSd",
  "key24": "4zu3EzGLTTs7jfdwB3GoLupcFBvV6owtQMcTT5mdWaf3CpQsrJ9k7RJ3YDfjRKEufMaT9wa4aEGKiyGYcrWqzk2W",
  "key25": "5Vtwai1GtoQWQkGtt8nJQFd91Abi4Lh1fVPsA2KfkZpBF2DwFh97rqkGiN2deiSHiRMpAdkXoF9RQBYXFzZEHMib",
  "key26": "4inkRJvh5R4iyjfsLMV3xefqBZXwwL7T2z6bw6eHJEsCoFnLjxG965fGPy5UvoZB4qRUj3keWfPk3LAsYU9WrbCT",
  "key27": "2zTNprsdSmBoEJgc9pAyoQ1iKyEF3EtMqxfj8SEaPJiAbP2kizEt3JZWZWu4xfuUC1EhMF9vvzE81BdusB8VcvU1",
  "key28": "3aZa1vqdHjbZQfVtWzuQeCE4DvHZR3XNTanTfDRzx48o76NQjiF82fLJFuuXvt5bp2PHMHS6nmfNbhgb5Ux1P1hG",
  "key29": "44DKHHHbQo3cURpyXiSrMAmqsYgRJ9KP4jYE7dA9RqFW5MXad5w3ZkzeYz3FyWRUxa1VdzmEEVb3FjjRSqK38wgR",
  "key30": "2QVoHRAyVxRx35ad1WdW4Zix3m4vRdh6kAhoT1nVhCdwN35nnRyBQRsU6F8ejgGqFqV9hsA1SBVVjdBngQtGoAEZ",
  "key31": "494UMkNw6akuAShweKZiPbwAvcBjmjNHXUuFsyMAczwRpS13KNTY1hJLcpoKKRFYS8wHJk2hypJmVeGeUvo4UfUZ",
  "key32": "2VLKM8hMiuEyAcv4k3nT3CC2XMKDQQcx6H9kC8zyjMgA7ek7XaLYYmFMwqmqsYESuoahLQsU5hgMEzPsYoEA3gu9"
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
