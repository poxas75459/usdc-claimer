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
    "5nrzDxhNfyeV5coaJVVXDZd1PStTLPrprFPe49mcMStpXGPjNieatC7JwdcyLMLqz8jgjk6eavSptJ41Cufajwty"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "346pywu4TjpSDMYsyxiygKW7PeqiWUZDNZxeewyKepyi4J91WZtCLzqWbtZJDssbX2Tqc4ZQDQkbGr4JDhDrFBH3",
  "key1": "4KvzfPefuoFBKRDywcwtu94itSPeoRZDcrXzg9mtwHg2xz93Yb8d97TvE6TyK5yCzTYiLg5jJxsTW24ZbFZZX6hm",
  "key2": "gfZf5Cu4qVoUa3TX3WphmWWGBjP7U6FAarjb5L3rWc9EbdiDvpm8Kb5HJ5rDdoR7qzfyk12RdPcWe3DwrTGcHSh",
  "key3": "5dRV51fwZScC2tWcpppkURg4jrSB7mNKDHtevHxHG2xXo9sPxbCBzKVt2i1fbg8DA7yTTWjz5CUt23bVkpoF3TqH",
  "key4": "2g5Fs1jfzbnJ752tQKqPA4eoY1YFwfxQFhGreg81Vc3B4NpF161UBBBPYqnxYrbzfw8Z72QES12kR5n4ERZNcwPP",
  "key5": "5mkBETwStXRvxR1MJYmHXwZ6gwbucZMVxuNSx4sj92S7gZymBDzvANteSvdhQshyG1KArgQ33tfTYkk6rc48y7Yz",
  "key6": "3aAhjDAghSVrFtp5dj1LkbDoWtwNLhbor2ZHGAGNWh4Hi8ca3B97nYt5xsqod39aKJxWdYWkyDkHzyZ4njhAbgwZ",
  "key7": "pxHURnvpvLimvxc192YDUbjcgvTy8GLSpvLfV9t1yJMNMkTDcmUcqX1qLx1ghGNJTaZqX3VgJB4x7vw8V2Z51X5",
  "key8": "22EjHoM8WwnAhhBK4nwHdNa16UQQWanFTwkMD6xQU5NRdc5bhueWYXfopnCWQK3dCREyimWg96U5LzMksFVw1mD3",
  "key9": "5okMFu8p1o7g9Scm7MtM83yqikDTZ1K9KLUFDyUsVbZ4sTTCRtxv6KatSixBQLidi6hYGszSLQN6FvrY9A4mKRwq",
  "key10": "QxCRVdeWywzg866hfKYosWyKCqbsovtU3WzPSdb8Dx1WEFvJqMcxT9EDRyihCcKbZPZpFepimUWVYfMB3DvRurB",
  "key11": "2DtQbKCwShyFqNDiVp6Gw2mxHixfVUzaHyF9M9u8exToN8DbYXYTaCk3zKnnYz4wmAv1gE7x7R9TJQxySqJ5N6rc",
  "key12": "4SN9tS2VXbQGn1FdVmAJcU6hWDFbiQymdYCXDHzqTgh8HbzsXcTWAWjovrVjDSnWevC7iCaPG27emmbpvoyEaXAJ",
  "key13": "2c8mxy5ncNc891ffUf7jwfk5e6YMniSEKvAGMCgbmwZfyA13iM64j5jbASHEL85HxCopd63uFPu6YyJXJntTz8jk",
  "key14": "5CwjvFy7uB8QNTACA76qsL7Nd6gp3wxGX93Ym6MfCwEb9DHZtMDZgdgiC1dSdPqfw7Y89tbG6J3Y238SMZTvKZAi",
  "key15": "4mjkAR2mNJR12aWztf5kbajhznhQBPP4vGf1Q1Xb6QbffjxBT8pjTAg3t7JgnrhcvBtByuHZqvX4gihr7ndBbr3q",
  "key16": "3seUJAuEbVMb5Ap1GYB8irJ61XYNgDDcdYRvNzZESdwi7UGBwytWX8nN8afzfpczWKQGpg2SpnfQ7ZUf6xNxuuTN",
  "key17": "33oDGnTjadCECe7wJPmPDAEUSvqNMAbDe58SfU6g5QGPFMfEAF3WPTCBZN43J1BtQyT8FWY9qDPybFgnCNFjtbnH",
  "key18": "eaCyN2vwkbncbHf6umZkifirndHhMQ9PwehcB2zqyfmmtzPbA64fEzsJw4TKpnXGJAEq7hwNLPRTfk4z1kF9sEa",
  "key19": "5dzpFxoh4xXHNqMRPom28uGHtTTiB7e93mYZNTGtiZro9eLz3YEMKAKoA9f3zNXb69fKFPwWxgUrjXUQ5YEau3Gv",
  "key20": "W9oJuc39Er4L71XBckmX6Qrzwv1iR2LJWoVPiLMdKYJwDVj4P4aREcFQgbC9M7YxFZWqZEUJkb1mpRP8UMWCLu5",
  "key21": "2h3SfH3B6DWKqVoEdGq7Lk5ZEgzimbJrVEgVwxpLSaF79QAjC36TZe65mpqVyiYgT34EjA1GZV4zuV8dQYzHcjmf",
  "key22": "2DGF8bMU1Rw616msUgaH4j2r1rFzsfLskzJbwWNUYEsP4GZkoj6qCsEQfjSbvAYezk5yjtSAiqeEk3oXzg7KZHFT",
  "key23": "2gRNbBnciZJMvhhLHpzKT5jueLErEQwxTSSDi5nZ2F6Qixu66AYMGAsDA6E49BrojD6GTKQZf7tDXSqYQwJUfuv2",
  "key24": "48Ahj4xoR3XT82zmVua2SW48qn7VTj2JTm2qrupvPCSBxfH9zGr5Y5m4SDyBzfmrqYMYJ58f7TTDrUW6kSXRiFBX",
  "key25": "4re8wzqFSjnLvDa1FLSbsMtGkRmvrGkQhxS4eZwvoEUmsAeAVuPpyVmWpDBytHocB7bfzeqEP5J7NcRYx5FiHmQS",
  "key26": "47AX98uomJFgUyVGJkbWW9NEiRuUpAjyTR9KJ28rdvJnmxREoFPXvMzj3PCJqZ6wwS27GyQDx6GeVo68wmSnWhaR",
  "key27": "3mXzQLAz7qvAvrjx7kCczTP6x2gTk6o5HK5ypWke7CKqxjL56mc62mPTx1YfYCb7SLzZUqUun2v7wMd2MZdD7A58",
  "key28": "4BbW1XsBaGDccuKgDNJc7z5KgU1xxP6djmmFhmehZuRALvbNUfsP2RfqpQM3gRdZosX3uyUGKKPgbF5UB5QTeVbd",
  "key29": "rJZzphYXM1MD3p2xsq6AKoY98LkW8GTw8nrWKUJRLKXRLbjbiqF7E18CsKGcv9RNVZQkQQjWf6MrXN7qcbbGXSd",
  "key30": "3Mv9ze8ePJzgDVp6xqc67S9ByKZph4ViLgavNYAZMR2TuW8hUAvj6oY16AV3fTbcoRhqaztATtGV45aBeyEB44u9",
  "key31": "HsFGL6KkpjV1r3RkLJicPwMkhqZTvYwCF1MdVBZwtYSZhECkGig6nP1X5D3EUBSXWsXuUXeX7XARuT5gRPULzgi",
  "key32": "3Ef3QFM57CkybjMpA6AFyWo88xs1uECSMhhPwiBi96JZnFpzpayj9YUvbvT1HZABTSxkJfWUH4gjZPLCB1Ge8KvS",
  "key33": "4GQYGS3g88Pt9XawoBUYWoTqCu7UDmesf9PQDz5fG3qdq4gtqsoDAL2AapSSryZ64CjAzG1nFMBx6SQf6tmYwFFX",
  "key34": "28oYgg4k9PfD7mL8vvMwJEY28XeVhj3vbbFBriAMnNTwsCdkc25DoELFq4EnTzSSgqzdpkKgvzsWogpwKkgRfG6B",
  "key35": "5jQTzeTJ8FiqaM3Yx63zK26DcmcCtdkdVkQRSEKzzkoFZAK1hwnteVi53FXpZC1Ktw3t81YVVH9EWrxNamVUEEXx",
  "key36": "65VJ4ZRw1VvJRYsZxa4fP8E7815CvJEmZtKhtEqcKuyoKoHFFVYscQrgbJm2iCjPvfQJuVeTCvGx8bMA7fVr1Jkk",
  "key37": "453GssoG9YM6qN6bGfXvyZXxk1efy8UfJxdvgHUgGSqcWVu2RHM67fvRzdmiR9LjCgfmpNFGFT6vN1RiE1KWSBEZ",
  "key38": "5sSbRtUmPSdXE62WpGYqXaJcsEWynENuLtPnTJkQ212ttGojqNhYgSDnebnvg6gczhz6tawksA4i1p5woKjoCEsM",
  "key39": "5QzF75JpZug6Q8uHVsnGMaUFDsxcHdV78uCrwYKfMTcDNawUHEJ5wQ5A7YZT82MBo62LGMA7YkGYD1mgQt3dHMd1",
  "key40": "F2kx6csB5HQ5Hj8CsJgYr2NCRWzdcokG5nv91ymsEsJeBN9BZ9bPSp8Nc1a7wwEM8mjZuRSYFfSvPQL2CagfBXs",
  "key41": "3B2iVn5wzosT88YvkYnT6qmY65vyTLKMQhCPjdTAMSc2TfxbsDjzoBEUmX9Cwpe4c8X83MZEpCGwfwD3jNvMu7Re",
  "key42": "2wqGRhReQ7vBWRJxVa2kY141a4n7ctD66CZTJ4yFeQ7NeUG2j1Lu3nhb9hTuU3UvTthWQLM1iyDMtDJFeA12MC3Q"
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
