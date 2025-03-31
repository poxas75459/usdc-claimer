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
    "38SpUWCxmiR59fQErSmezbrTN3rLK2ppVXgaUSmoQ565Y7T1c25TXJeL6mpfLbVa2goN2NHuq1ZfFv1vQQ3WbDYn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65na9o7jMwgMASDbUqtQiQrURmh4bfEEzuhazGYPURnKcwvpcNuvvFnPBASeC7xe77qrpdC1D2DD3wJGqxzJEiLo",
  "key1": "4QpjCXC3ykuTS3s9Ny7uBP3W9qSz67KFmzZqsFpTBQtxPHWuVi21TxmY83StseEbPLRMh4ACAtuEQ2YmnmPxG14M",
  "key2": "62SHquHoFSqNaJSRPJyBVJ7PqTN7UcMLajrgsLHLsHCSyKXweasU2oj5LW3ByzvhWy82x25V6h2Vpa7gnL13Set6",
  "key3": "2cAmmnt3iQPfBdjohCfU3pXtEUquHSuTgA8zpoQtRT9pu8gPkjTzRC6XWiGoCqfDJmvajm8K8UUiKwDn4wbr87hy",
  "key4": "2yWHUoPx5wfho8yKgTZX9L6Tn4cXqojArqawnqkE4WSRcv7R1BGqLYxFjmKCzCX5FxNCneHdTFEdCph92tdeosV9",
  "key5": "48ZpvFgUE57VQ5cqNaiH8SHDp54yB5LdSWKwARF9XDe7t2SpB3pUKfVN3THoJEfwto1m5n4VWE5Re8EmQDsbqvDW",
  "key6": "5MgfFJdSAeezkprmTWMim6djSfPiR4RZPh4pJdrBYJ5zTfJGvxvmztGBcGMeyPFpGYp32HxABZZ9c2hhFXM9x2zT",
  "key7": "4nepkYmoXs3x1qxp5XewYspGEf81Aaz19RCeJCaq1gyWPgfnAf9wGHoKNUwaVvn6FoGELbFyoFnFiT7BvvA5Arzc",
  "key8": "4hHW8CyEzfyoApprUUr354rx5yvFc8TDfzNzPg6ur1iXEyVpeBR1748T8kNmodQpYpUyyUEfWCExPj9SRZjC685P",
  "key9": "51xF4RqgJTJra7MbAhQSfm6iHN47hcSzTFhmeeQdn1B3BpCDA4oP5GepQMsBJKKceA3CfpThiDfJP1XUjh79MvQW",
  "key10": "4A7dGv1e8Z3XBP3Th9ABhy7a6ufedACboPNJRkUzLkA3vvA5TgTQsjdAMgVLqniX2EVTNcNRf3WNCsC46zMHjSxU",
  "key11": "3TRKE2oBNSN1Jn8ZT3hxVXfiPVrPv74PsFjmXFuxBEBX9YnXSaXgomyPANWLgmSDraUfDftwx6cZy8y7qCgUgj7a",
  "key12": "66QK6jcZrubRRcwLy6SVjBpdNgvNautsoh4LSjrC3orypt5SzroG6EBKmULENG9y2puXphzNwryugQJuenJSBG6s",
  "key13": "596EmtDz9k8Yy71MBoBUVC42YPJFUn9be2K5bW5dcnWYDVJwWcbqBwgL5PwN32aMHoDbH9PE8hjxotcVZ8WVye75",
  "key14": "5u8Q824v1c8otoXS2RcrsVeXvhEzeot3irxCSXJx2qdgB2c2FkN4KzEP2S1ZaywWYgU6qVCiXDE5VnY1Me5FQUW6",
  "key15": "kbVPpRjSSXVHKeMdb6uPX6Kci1EPBjNagmS2tq3rE7LLSDvYTGRSghBQR4kSfk8dKrTrJJavkPTAJ36qhHZKe71",
  "key16": "35ZAFZ1DpzbMBP7ep8VfUt3WZerfoCigkLcwocPHuanqYLRsZi78pECu9qqZSSPoAyWqcN4fmnpXH8dGQnvcWVRp",
  "key17": "Drsx52Ps9vx8qj1iXAoihAsJVcioJbzNP1EJ7tsvuB6s9DMXe4JXTJ18Agaodg6o2E7cLJ8GqEhLQXQrpjjaQML",
  "key18": "3tzBt5DeEGQsfcjiqWNgP2uj11DtaVwAVLxGK9ye3uJf9Jn49NfpS5rdCbvw1Cmm22MyCYA9fQ25GDHpKKYJyZWb",
  "key19": "XT26GDx2nMvQS7YPyLnYT5zkFwfweExECgBnJjpvHS8Gb8SEGw6wBryVWMiEfr4egPacncJc9aTBsyHZoe6aySt",
  "key20": "2cAcPEXmYwwtj2ujwDAvdVgzXrRppYZKNAKAi6iAuN4YQ7ZSeXqk4asEjvqG57bqxM3yH8sH7wrE1wUXj7BckpKq",
  "key21": "51Mrui7pSwXPWsLRV34eo7u659L82PTSrZ3VKwrz4QrZZrZJKBp2XWZQ13xyntCSXvucSHE8JsDdxAZNPtQgmGH1",
  "key22": "wb8683ff4GLEdTSKFS5BZaDBkWCiC1Rni6xW6sT4eyxnfZ7cnpa2SYGFmZa75hFQxNnmbzmisjDGLdDW2YhmZJc",
  "key23": "5x68EqRiDa33TuqGtNAN9m1XLFtQadT65EqqYM6sU2ytDgcT9Vfg8CggUvoTsWpzC3Hafzpxbdwez58BU3tmNReb",
  "key24": "Svfj3VHsifViZDrf2EpgLD9Lz4zo3MxEMmsi1iQsu3VGe2aTxGqp5ue1pZH7pTRLR3hNCbWFvSPwFTPhVqRAfp2",
  "key25": "5rH7sGQx9XMf98HnWJkCKARC6o1eLNGwsfUv7uFrSZPBpCh5H4w4Gh9FWc7axb5HP4saWvxL9cQ1MBJft7Mu315R",
  "key26": "3RE96gKYAeyXbfaQmKymSSZddfeiMZTDUprzFBMKX65CtusCXLwUJVcSKWFtRjcwAMppozEqbV5rBbFS1pYZHist",
  "key27": "5mLFCKxcE73XmhZZkFqYQpmjPrhjk6D6FeQ9Le3gX4p6y1yDuduKQSMFnmn9pttGNk6oEXMjXd7QYrDHdzKCzZGW",
  "key28": "2HN7hKfgTxnmFqRVRLz2fjKRWbnjpi2DKstpKdpVwEuRDbokHujhiKwg2iSdmNKWAYjUqGk9BNu5Eit9ubuu3asU",
  "key29": "4rhsUf52E6AbsQG3FdjcqegLyvqJSPXTNgXcz889YnxCCw3awgJUpWorNvcvDD8NJ6NhiPGzU4W4oudzVwBeUm5S",
  "key30": "66f5AQWGod6cbBqXey6bwfJkjAeVtnP9tibwr5S65HT2kLwgSsXwbd65bMLwCG9Ho87zDsqwk3Jc9HnGLFE4G9UH",
  "key31": "4hMxNJePgWgTt6pTqfDTuLxfVTZmmDmjoa6t5z4NX9GSxX5pvsrA6ZG3DFDdXbwrPJsHyU13PYyjRGrHm42kcZbt",
  "key32": "4u7tSSnTyENGVro4Yw58qhaVFjzc9wJYU6vUtWFv9rjBWTRCak7TMC3EwgqW5kx19uRNbwfPKorZZZ5AqCtWUEGf",
  "key33": "aFmxTnEcTbDTkUGHEerkiYn3PZGfaJpW2u6rrgRJrZPDvitNK5eszbNfxZ9GJtsodc3ohsA2spU2E9b1GgG3e5s",
  "key34": "SqvDywxfVtTzFJAzdqpERmp3XQNJsf8wSN5mCsYxcJGG5nDQQUdGeKK9HpNJ8bH3BTLEimQmY3TrzdUSsE2oCKC",
  "key35": "2QaTTpmGpSWsS3hMtaVA6Jpbnx6GQhkMpzy8wukzZxHx9qVoFeEFtBJ24ZPrkDRcEFYZpWaNxFm3Jk1zFKzXa6QA",
  "key36": "4xyvmJRgGMUMetUPb4SWyvkQsNsCuqGhYqUx5GpoiDoHhMQYeZQJ6bA6NuGXWtrvtPdXfB4dBL27iPf4xsVs67Jr",
  "key37": "2GWHEPon9ETvUC3dGVjm1hJawUfdfXcRiA23k1e8pJUGXyrwxj2TY3jBzCVU4P8eHPWKT5ApvhcKUJiLdYpiCjwe",
  "key38": "4jgStnBCfHPQNT9DmzgRoWEdWJ6PGkbupib3TiARHv3GAqAnRfvo9oRyZpdsoCZ8ej8dv5AiARdEL8yRZv95Hcfi",
  "key39": "4D3ssQKAuh1rftifoK2Uxq4MKe2UQiae1ZQfr1LdyuckRfhgSfowVQmevvsr8i7rSs8vX3jqNJT2upGsxroXrWzg",
  "key40": "3EEUGghHXpZU9BtBXEiobATY7UUJXDtzSqkbMBqHh84be1zNZDKgPLdnbBxEMoRSimjq6jYuE9dnoZV2BJqGVvqu",
  "key41": "47grpi761hPHPXrvbNvzvNXfQevrvk35Gkcbz9NQUQ7JFNMrX8MpK6Q6YrRFvdrZtb2qfA8z2QtTLrkT582dCHdM",
  "key42": "2sDVgeDYDuoxxVbHAjA35tm3jSL9axVLtffxYS7xk658xBxugDSPdDxNptppDrkm3wwaZeJp842E9Rr6vePbakes",
  "key43": "3GRQPY8q2DVFMBXcJmAxT4NA8YsiQ6bv61zNcNuPpseBzMArmPDUK6XTtmkopeuUcGDrJuqwnXgcZVioPb9N8PeY",
  "key44": "vq3NpyBXwsz15A8ikvTibK7TPSTHph8yNKDQiy5E2PjWripqQcXYw4LhMazMENvjgSzcySQ4gd69vxoJ1kLptRM",
  "key45": "29wrPJYgeW5CdWVnp2HsJMVVhCwMmxvSEdgKe7uVTLmMY9y2BCau68bRnjZu8xkjL3kP9921fznS8ZX5ZEZKG7uA",
  "key46": "2bKm1kT5vbHngdP3NYcZVJE4fUKhvj5ZAgGvbuUvqbTKdPZwComthE1fv48G3nnwk1PU8p4aJ19vrbE7dASACrFe",
  "key47": "52DR5egQusguCpvUETF4cB2CQVVihy5c4podjxbkQY3eGmJSAYicqY3jtJRdQx2DBZKjvVzjuiifMzbKTBWgEk7i",
  "key48": "5MPbWx4RjXqX3Jy4VFSFPUjfHBVcgJckBvDmNrvJ4zP5it4WdiRPTa1WMmBGkmCHrsN2xYzrr3p6HG9E7219WBrS"
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
