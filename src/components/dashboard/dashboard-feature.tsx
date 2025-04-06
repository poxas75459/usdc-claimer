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
    "63p8KZDLx8kvzHra54zeLbsCbui9nLo2AwrHkzF9g23jy8uWyVYbwNk4pnY5ucZtfgNCStLrfgEfp1s4gmgsqu1Y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4uwa1jYSW5euZSr3HLxkTKMYvwih9sa23DA9Ss5jwYLfimUPn6jj74Gg5aoyqAfzULdhYoj4NKTtqgppmn4nQYJd",
  "key1": "4ZxdVq6PZ1MLDNYDH2sE7nmuiwDC8Pt7aHCbhwu981RMXDYdu7X9JepoMvLgJ7jRMdtNnJstxM7e8RW84L9NVAWu",
  "key2": "7pAtR95BKw94ddrLguVVCmBsxU2HcnWQLSnE6cZkYTh5YMzttto6HqqMGVDJpjVE9GovkShzvheoMXCP1xyXJjQ",
  "key3": "Mmj7HagUjemFQ2eGJPaJCfh7qkWGdBsUgBxwvHNZW77QavNBQATFE7oW1UQC31zaGfLLQg2RS9uSvJtJK9UCxof",
  "key4": "2tvixt7gWy1mYeyPZ7oRbS7a6HwgiVVcG9sum77ztfLhyuVSUaeZy3kq7eZhX7SdmJxdVPPPwzAPN7JYTHP1dhZV",
  "key5": "eky5SrU8fns1A6XGfEgne537w91gJkA277hSDyKhCxMsa43M6GpMBma7JAiTLCEFJfUvkQnB5Mp3TQLuZTbuN4o",
  "key6": "5uPpkw1VDLde227XWSGdeKaDhRerivWJsc7FUNESNp5tT5auykY9dsZ7R3CfaGCueXPCj7kKe1CAveEkC4U5o1tT",
  "key7": "2yyBa18AX5UxCqGs1NQZ9PqtWna3AfkYuP5Kiw6v3qGkAt2rJGZXo27ZGtkWyZUXY1TBfikQumDUnbS2NEfYrAjF",
  "key8": "a6WUe3DvEhsG4mompcpGzuZJJn7ZNWME59mmeyz2FJQxVYnGkZaQ2WQWatUTBxBT8vJfVaNMtjEvE5DSdCEyEXS",
  "key9": "66WNQsXRSnJoyhvqS34uW4sYBYWBAoCxpH1SiBqDzBpUznRZq66sVZB8gEQDgroVhfp9KWobCQveaNvJGPmcoWsV",
  "key10": "5W5wJhrDj5P5gKak2zPngdUzLYoqHPUGSsH12qJfuvQHVCcp9P3rvbEsub4NNkqJHhWca5NLE2YAijbpD3JaWLAf",
  "key11": "4JaDSF7VpndHxc7rGHV5NidjZrvhtyrQ1LU4LXM2bNt6SpgPvvHA95XUv7xECTf1P9kf5GUZ3GPuJrKsvQmw8ETF",
  "key12": "3hezv88tVAKWQDqteVPhHRnDUq3wx5AW5ThuztrHHinrM1dJ2u6yq9q5fahRYPseyRyjkEC9a7PVMTtP4wZ1WGLY",
  "key13": "4vrrrGwm9QDBPDnBwmzxcuQwbw2VMvq4XcyYUVeyfEQEUHVn3ARf7RGnd48emgskq6Hg27RXExBY27qMa8RCyVmt",
  "key14": "HmutqcEHgebfEMqFeGqEsxPxNsrfxNhzSNJDeLTkNYL93uBCau6ZTrhAi848vZXsBrS2UgAb7AUWptx9HXiYW63",
  "key15": "5G7X6WvJUyBEq2Ammes5tgctD1z2qsynfdVXnNxRjQn8cCLcLUTXjxmwF26ohjTUcZGJQZD6VTQs4B3eoZdxYxdE",
  "key16": "3L9PAaWo5i7TPkRoM8fYozxX44BH8cP5PpyN2iAPi6Q6GoNoEXKPbsjP829dcBSp6RJk7U2QYeXYqoZXg9DLNP4Y",
  "key17": "3Amuy5oUmpoweyvVhYPJVaw4XUXooow44nTpiHSud1DdVw6QmtFARvKPN4nVEZHiti3YjpQ2rRvLJC8nGRsmbT8z",
  "key18": "3g2k7CxshKw9spBtxqeT3f4Gw4WYikyD3AghntsKvMGMih3USMu73bkpPgPGEedGXZkJofqb5LtMdJ5MzGpHMM9r",
  "key19": "BYE4q1YsdkWr3ZAEvw9gURNaHG5rgb86FF2JTr7q6cQR634zzJhWdkhi1sVoWAPAS6YqvdrZhn3DiehRLwm7RGz",
  "key20": "qqqEoBw221mMRaHcDDC3ji5y8RtyNjALzz1v6vwmSvJizdxA38NjBswGdsnUyxP3mnbdAsfwtftn7Aavdc1z5VB",
  "key21": "tuXe8mhGAVmJzvTqM3Pvs71QvbBtU6AkwMjQp46pryDczvrbF9UD6kShnKReAVTR8tMFQLgX8qRR2Ej5VWEwLLR",
  "key22": "57HqEbGsvVayaGGYt8i4uakhx49c1mbbs7WAJHxJ1A9RpoLGZKSySQuM9HMS1Ew8Af6B8LbhYeL5DueX7FGFr5kW",
  "key23": "p7opKgtckKMb9ay1CR1xpPw1SEH6ker4USTuSSPewwnQ3SBSSmenWzCKVVdFKdx2x5npvgCGuoQ2iSA7AddhKhg",
  "key24": "4Jn4VLVtkfESd21xoqjqNPqwYrqndfgaHyhqEr9W7sL6AQcoFKMJuBQkwpSWAL1JuBxFmjCKXTPMxhnESRxBH3F5",
  "key25": "5s2UqWcRPeUDV1uGhwZVgrS1fhkQTwoSgw8fwiS5cZFSyxvWsaCNfFjqh3ura4P5GN47cJzVw3ifMQUDXyYK3R1f",
  "key26": "WwFyzWorq3fbetdqdoJLrKVRo1qEKa4Mw4qwW7GHg27WbsDrppE5THrhKic5LEJ9hLETrpaxuGQyEUcGT8MjL1U",
  "key27": "5Qsy7j5gBZnvf9cn2sxxDkFmcT6nnD74GAznUBCcjG2u4FPNv5qo9qygBRF7pLF9syFi7ySXLBRsEBxHzRsQerrd",
  "key28": "AqtUA2xnSjrJ2EAaEsW7x4mky4H8tg5VSaHh1wAQsv1wdzes6XBihvGgyuEN75TsQfPJgtnDbp97zw6kPLBVa5Y",
  "key29": "5eKKT5Dn47SgNcqeki59EZHwCX16ht5JsLbe7VYsCjk2Aotegdtmc315EdAfduUcr2egDs7m5NZfxDCPj1wUdfE5",
  "key30": "4iUf2FohbTptL4pctqMMQM3kTLPVjJeneWVT2ZxxgF9AgmLoeUfWqPaKi56N3ALZ1YmuUohQDyQyupvNjqnAW461",
  "key31": "85dfiaL1tgDzJ4sMSjfUadkEQbiXc7XQJYnbkHSP53bH71Tyt5iHzcUtHAmZsLfi43MwT1RYv1LLKhkjYjaPivS",
  "key32": "CzHkVUfXKbtX8XgVxN4RGjdWravdgfWfJEUr1FenxhHz9e7xYtfSoZwSTkrXpHacgeSFxVkwivtPDU3heTVvjgN",
  "key33": "4yLpcyXxU34wrRacD8iZtCZQe2GuGZSSB6VcDiRtfJp7B1dLzoGjADfQRm8RvjfccVDoobUBaiPsmsCpU6e2QQds",
  "key34": "4P1KE99JF74fgnrCCv4917PhfUBpVM1qQigRiq2ZwpVQcAsXvtT8McKXPHWGYP2kAhiRTFoonWAgGXJd6fEJUKkh",
  "key35": "3xHweJezGZjNh7if8pEvSYGhEUpwhyUnKjM8NKSTwraVskBsDCRdzfh5Fnn6KC2kRrZodpLLjbsEZdSRTcLh2KWK",
  "key36": "4e9hLP92EJhLjTKE5ktpMwRCyj7nFWfgg6gJ9D1vSaPHJ86ZerL4a59utPNGUtK24ZdyPkQgBBJGGBg7RG2dYsAt",
  "key37": "4o61RJSEmPBUdv2gRJieWXtwuRcBFV3FYCm4TvwR42mxGejufLhE5Qbktjsa9L6ycVuDQQwtoPs7fSs9kCfMyC1W",
  "key38": "2uqPZkwcw6L1eQaHXVLqhpjSMBxGEJGgWmZ3xxeQzfZo469eFPNUj45jBN4duQNaps3AvxKEfdPSnTR98UactPrM",
  "key39": "41RVL56ufAi7he3cBwJn9qSU187nzt9WuoxhpKdSa87S1HJwWWLFQp6BbQWA9GptnXQVYJ3duLEC4BybZykMLY2g"
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
