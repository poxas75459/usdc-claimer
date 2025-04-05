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
    "4Gw6CAvFNSCFxicJAMZQnaMWjaSuuqzFdm8x4fMyZGP2y41iHzfNwn2aV1WboSJM9n6vEakZA4M4qubw75ro2TE2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5B2so4KQKf9SuyjpDwmYW8zjVgYMC9RvpdXx1Nc7gri5HoVW73TdeWvKRYtAmX1AxdSQuLbGA4dAaFoXFJ6EgDQh",
  "key1": "5XHwW9vvhNgu8sYjA2zKJRBHYF12KNnwBMub6427ZLLPZ2zJzo5nv6pcTUMN642JCwzEGmg4fa4JCyJYdGxoAAqd",
  "key2": "5Wy5hHwbPUQheExKs1acaSAkKiiGdaruDAVQLnwTsSF8kUjkGqcYrffRHRiAS51QqnBevJaDeFQ6Ty99aFzSjNTw",
  "key3": "5j8L5wNsvi6yhf9HmK2hLmcwoqYUyVC1J6MD4mki997ehxiKdPS8jA5JALV47mHymAtwpp6tSNwUBNENzkA46co7",
  "key4": "2auowDcGBjweCga6yfCG59TR8n2hyGJDQXxZpeqDXAqGvnJkqNoJ2GH79UfFxEiapFBiWr2a4tmL8dS4dPcrEAvn",
  "key5": "3qC7eeGa4LbY1oMoyw3ESg61GfeFGEnzJkHtivYz9oTyZ2qcRxFUmfKZK6HVBXUYbf5avKk5RzA7kFNswHbGjTd9",
  "key6": "TuzFLENvVXwt88fbiAyY9hWrNWZ5eeSCQ7yaGCtVYhu138q9GeTRpSVX3bnA8grEEMBsVUdfWHDtNzMjXxEAHGf",
  "key7": "cTCdkwYYiLqyGEPhwucymuy2rjhUYTWVU5ZqM3njPDYoaUoJUTZSmwKpkF1i2MMJq4jeRfQjypDFpXgKVjAEQu7",
  "key8": "4hLE12MahQLw2XQ7ZHpx7GsFcXXdw2ANEfQxtYZyvNtbMEpWFVBNeZPUdy1YoTBN2cEYsUY5FC6JkkG91uWPPzcn",
  "key9": "2eru7XRzQW2FRrSPBW9jw2rPC2fzTRzaNhVxcbR8npxpRSj7DZ4gJrzc2hiwk8eqsWkWddGtVJnKyWvMc4T3pfXQ",
  "key10": "2FNPnPF1bBqCWuB2FXy9DfPKtNAN2L45MiXeQto3jS7teWHVggeNcw7PRCHkrkyRvEGMukq2bsez9S6rTGAMETn5",
  "key11": "42GgV1LeDjrSczYPFkfpixfuzDiosEbBsTzXrEtRumoQdzZrywUpVQe9x3Wcqu4V9ioQY6MY3SkmZ59voz8XzPHK",
  "key12": "34HLU7iM8uUQGMrZ2nVLd2DPZjsAxhxs9mPhTyJZTcnyTtaq2ttZyzZuRGQcbZx27CCLwuqmnmvPp7gY7Ugu8wKW",
  "key13": "42GmH6KXD63LLZQ1ycgSRBgXrZMt2dYSMEtnpmmt1wcnAPmSRtRR82Vckg4u4X3RveGsBysbRASCME84xrr27gat",
  "key14": "mrWxfF1TAVk69ppQsAgrGKHSLDjudAeCx4yW6yPFAYpDcrbPDy27Jomf3c7ABCPwrbhHEa8k4ymToKpo9aZzG4w",
  "key15": "5T4RcAiH2JeT8XgNJfy6Fzt8Q5gm7sbvSohHkhpoDDCbq1D9jHXAQFYQAQQPqFXuRdzCoSjEBZ8vXZoo8tgtETcc",
  "key16": "2kTfC4Hg6HuFr4WWffFV77hm4x9C7tg1wMrGXLmBFWLFM1qMvLvXnzNTznTzsehU9v2wAvWphw63L6vKJJiS4adA",
  "key17": "3dXiCBt1y7AyAa5aafsJtAyGmPvxsqTcEVosaEqjJ9DVFh8sU1pJ56sZjHtRnS4PhaJNVToJcbnC8X3y1iVBWNhH",
  "key18": "3fNDSZrR5FyNYgvvPz7qBVdh5auG6Hen8W6Ti7DhFji7KPScy7LEPgQ5waBsdwNQTUbaM2cefGzGEjLavwG84XWU",
  "key19": "521kMGWAKwUbUJ1mMio4WrbxDP7CpmoF9EBgGi62UYacDxQSCtjwvw6nEZGPWZrujhnzMJtGHG3BXzTHfBrJ29pM",
  "key20": "2p7X3udzG5N1uHatBueWSVvvW8EoTdsCGuiwSSeW5p6AV3eKuGqSgpLE8YA43AYhbNYhJnMS9KEozdedSwVbd2TX",
  "key21": "5BCrm6H7D1LFUrWuqJRiDCeaTKN18JG8bDg7pJfP5WgqtMfF7zyXVdknryKf5aQYCjc13pqR3hPH8FhCQ1LhDiEg",
  "key22": "4pYt8KUrokkSyvhQqCWXX8ePcHHr4r8d2KdVnDpjLcSKMRiBGym4yMfPLpiK3cWW6XQx2njV69nud6f5yPkTYGZ8",
  "key23": "3hESCYjzPgGru74T2WiDAzhoq2innVbg87xudJ1o8ysqAqW9d4d1k6YKpBV7k4ViTtUfg3T4Wxrq2gFWPnLGwDL5",
  "key24": "36WzxNcjW9Xfvf3puVBT3RvrLMdTQaN2pqNSxDhkeMMtXKP6u7HARdTSJauhJktwjhPd6HRRuHsVa9Gn7cEE7vMv",
  "key25": "2zbuyE8nuVLuLSg67C1xe3yXrc4JFHvtcMskXxmmbZUtG2E6y1PYpnqfdzpFuosAtJMsursSaZBUxHL7PgeheMrY",
  "key26": "5QxHcHKmM7v6dXcBwUo4NrKHY7rXRp5xCTYoifLZZRcUSL1xQyTmhmyeos3ux6P1bMqC9XDtYQuKwuuiWah9qbhP",
  "key27": "D3PPMwu2uY5dUejAxKRXbAu9D7dRxWHM3e7sd77sMKCNJxPXREEDuccCfe57YfXsnFyrreuKa62Zn8WEbQ6g47p",
  "key28": "5RU9nonX7BfWRDxsNgSJbXxSnWVbbFzf7VWDKwLGKJiWPoYRCcqvZQbupWSdUjS7rNiPxrPxun47ZZh4wLR9oVtd",
  "key29": "24eKAqwAtCRH3LR1WW1xiCXceznsScZCcxQ7T8putvm3ioKhN8hBKnTZDNLbPd6Upvea2KBo5Nby684jvgjhofLx",
  "key30": "4n5Hoy8ijpP5QF3gduFxAbg3Bw9A7KBZobiDjETCHkWbT3eAQGyFFpSLnemt21Fp4A9dM34B7LiEfa85PQPqh5Ef",
  "key31": "5MGJGXMMcFwG7Mb3DemisUfFpzq9io9sWd2xWzppJdjnAFUFziDdigcpnEQEJRntLkCzuyXqatFfTbc82gERtdur",
  "key32": "5QPiuLZbWctuBq6CCxJSMnM1PuWrtLfbvPMikjyKiMwH6nsoJg35LVDYt8fAcy9E5RSNVAAo6KJc2GJu5mVbtCMv",
  "key33": "34bdyg7YPrRe5rdw8yKbibrRzwoJJBdr5pKTG1tLT92BsH4zRa9GZjQ75B2NcdTFi1XbHDV5BjZY2KVyA5XLEQkK",
  "key34": "2cVNQ9QrXFXNdvxrMBxiJYnz31VVbpaJDCaUiRSJeXae4ikS539pcYpu7PPrQM8hB6hbm2Co3rYLqo8C2LjLdksQ",
  "key35": "gm2cog2DmKsueLna28h8yk7UqVtMLS5MbnN9Y3Zb64fNNnDvRKv7r4fdDkZDgHurPMaMdzwLwfC5bNMe5Sg4k3s",
  "key36": "5zrEDKNEyzUkTZ8pHfiKDDvcn6db7WAxWtqEwQrWsRojgrxaHVteRb92HKy4EBNwocvGqphZNzCC3TzyMRSnNZoL",
  "key37": "VVjo4pkuuDjMDa3P6ZvspicB1mcoWgM1A6NWUNkYnQtT1DccccFjoVvC9Qd43n9ooyvkBmvcBNvvnxWPgazss7T",
  "key38": "5D2oVjqvEpdheGzfrjXDg7abajxGtATDeXefUMdzkc4Fj9oiyupdg63qD1vnkKbPHC8JAQwEBuGrQzNCTgX9YC8e",
  "key39": "3z2qcWGCnAaAQxaD6VjeTZDZ4WiKvCHuUmfQXXi3eFkMTW7fwhhnf46ULjp3nJVH53wYLNAeSo6zfBDyBo9ymkUz",
  "key40": "3VuZ8544DqnxpT2jD8kd8JJ9tHewKXRBRop1UHRDCeSQcGH7YoqmC1wSNfAPihCXRaRbK5D3n73uZ7y7ymFz3vQn",
  "key41": "62eH6qRYepnxt2YvfYGW6582nNiWA3yf6wdKJArwvawgCk3U8WHyhaPbMhMa5ratUeTbn98GRE4KN2xTv4FzfRKi",
  "key42": "poMv4JSh2o4s8hSw9QD8kmvjceNCPLyFCqdz95u98spSGfPWvQL75cPDJU4Qir6n35jAd2tYvKcMLRRGYAfJZYU",
  "key43": "3FAKCvo3kW5m1nqj7LK7qNm2Y7fPnm2pR3NbM4wWp2toohPiPwmk7zW7onUwSU4fbbTzYv6DACTpYKipQawyrSy8",
  "key44": "2zd2LCneE3YVo7g9VrqJJbiqdyaHyGuBPZ1frjfj8nbZu26V87ug1avSv773m5Zn2iuxPRT3wgDa14k1HXaf8xKh"
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
