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
    "4XbYJ3jneebZBev8tMRtSFZ7wkZ4nkCFgWaf2ckQvqZZFYqQ72cRbvK61AjGLAUcotHRASFhf8cfMDatN3HvS31U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "RfRX7YKGbZv3pL4D2AxL4FUvWShXMYoq6CW347SDgRzLNt4imMVmsRcdxxkrgPyPFqBkRnNudzGfZBaGEu8ktXr",
  "key1": "4w3wL2pdv4UvXeWfLsSSBTWiCZS2r3boRY5ubTWjm21cSHWpmpYEfDYB9pcBLXjMWYqeCTRHhGR4wXAMRP9dQvd8",
  "key2": "bPE9niKXexxjHJ7xhiMioG87aftvMXE7t1TWrcG69kmrfwxJjmSozT4F7wFYcFN5vf49JPhFCtuZ1pAN2LecbtR",
  "key3": "4ew3TF15CvA1HqpPQyQJmQcTh6WU7CHVq6geCUKYyn4xfWf9AVW1HcbPv36xP4BZtvS3HB5HiruSjWwvVaudvS7Q",
  "key4": "2spBWp3df6721D3sXeAHVzrUhD86bGEjYYFNVKHewvZsqREcn8adQDwC9P7wGR5vJnkecbcPPWBkW5psraura5Wa",
  "key5": "3mAU29uaWmZ5cZf4rAhxJBkVHfuRsxBtW3157FXmkZUzYjKmdU3fJpj3SJHuLAvTKMyx8NVDyXenCTVQeWBwYobA",
  "key6": "5aW8NfLZzcExNVq5nXWuBuVkK4fenfWZDyuUcotAGcRyF23n7V4UKUyws1VpifLYRuSg7fXKMYwdiQSsZBisRgG3",
  "key7": "43kTJKpL631NA1GJRNfkaF5V5zGtR4unYJdbqBTCKyHFXXMRaN38MruJBYgwfuhBKvmv2RLi4PKivKKxBzMSjG3b",
  "key8": "3FGKCoPRCERyjML32PKm35RwjiB7PzkWHU6TAjfGq8uR53DhydQWf9P46APXBJKpwz789WXPssQ5unMhtY6uDyxQ",
  "key9": "5GE4Zs6T3L5WmpE8VDqaWfqGeCKYX9J4joREDskkHJNHQLZojx8j68D1QLEqjUQgDnsHcVQwpakCNqppKJdmqz55",
  "key10": "22xpGeihjkianmYA77yLSehB2yP657ivKZueif2Wp3HiYDJ5NXyvdDmvHfz2s2RJPCxEZLtzdvJXR9EgCebso3Ci",
  "key11": "qr8SkWc2uwhBpjuCTfADBVAfhaBcwtZHVZjiKPWQPm4SGPLqaTmnnx7WCrm32GuxKcxdWp7rf6iL1DZBxVp3Dkd",
  "key12": "5pMWemrECVFLJLppusGqF9hGxJRNBig9Ps26q7SxdcRSCXKyaRT986MrydeBxCisjP3jLvYvnQTbpJ1nuAZebMXZ",
  "key13": "3111EbBwRF48JEZWcZ74KnXhGZita2yrQSAshXYqgvfsUKNVTXUd9fCMS9rSVFcCy6zBR63ab8xGB2WjD3zhsLKd",
  "key14": "2cF8e7K5NcUD3oD4oPx93mwjsUn4C6qPV6Da9AgeCbi3HoTnbWUbTM65UiC6N3ehAQP69ykwk6hFsSizoiaVYG9Y",
  "key15": "PCqvpjXHKT6UKRqDjJ3RA6FRcJFiYq2ChcoadJ58jt2BQEuqyuwSyG1nusCMCQNiY4gUJXYGNh57RK7G6xyGkbE",
  "key16": "QTAi6yyTNs3QNaw4P76u8TRPGvWANp9jPEGowHaRbdUxehtWSp9cWCuvv1r9LG4Lk2H8iV2RHRtG3V6RapaEdUL",
  "key17": "3jx1W2oroVVfNDxvKRSyqAw5frS3zLYBzdhG9oeaLP49tvYf6RSZ11ghRUKX7wahC8WemfwmHtthiRYL22218x1p",
  "key18": "5NR5RQnqWw9DVBLmXnSKv3hx8ojWRSp5FYXghhgG9Y33X9iqW6cugbxV2Kd7gyuWS58sixXWQsCiPY6NiAFbKWtS",
  "key19": "5XnUunzz3eVn1sfDyqvoe9QLu5vqcHJ6RcbyAReGKwf7ZTb9rAL5F1iV4Ax3XSW4G4RcZR7SVf4gYwkqPuMJK4Kx",
  "key20": "3qa4KspFyj3iHXo4QuHiB64bqKeR7KGEPBBXWuiwRnGo9HriBpeqmwmf3n2mB3PUVDAkBbAd2TwdLGYmh6zonfUJ",
  "key21": "8qFuyntozL1gBhRa3LTzCVV45qfd4TAhjMN6y2hntHWpPhm3NhU8TboVXiRkEg5fr79EG36fd8fNUfLEWEZ81Cn",
  "key22": "53K6pZRfkm9DVkXMqerPuenoyb1UEn9Wx8SXEGT8wKLGPyQRUVSxWuCAdR2axhfJJ1RPDMw5h6kzPsg1dsynXuYV",
  "key23": "sX7Hvi1nC4mn8xnMJTr6vmhZ8NopZSev7UHLZRN4GQd8niSFWWunoiQH5SHsCSqY4chddSjGfmo37RoRdxAeGPb",
  "key24": "zt1FmHpagJaPbiE7HCivGBUN6Sqghff9gMPoPnbUgWoTuUHn44jggeE2a7EkeVd5muc3BsM7oKkqKN75md3Vvm2",
  "key25": "4AjJRKKw6Qu173F2Y3TTgnbDj4ms1AawzSQvkCiLAfC8TEh1C2S5Y17qLUr7DHca1AatZFmo7GJMA3V5MAJU1Lq1",
  "key26": "21RQM8bBpTF6nzjgXJ4gqq6HuJ9qRZPeX19Uyj8nFtD6m9j57NBLfZQsVrW4UvtCznZb45Yn2pXPWqJ3jftQCgsA",
  "key27": "3cRSGE68HJQhuQx3foBdpsVAVJ98oCVawR2DFNxXwsYpaJUyb2CCtH6eeP9HQk2nM29nxeSTyEQjyfyeCE2Ux6vs",
  "key28": "4kQsP5kyWwdm9V8gMFceTiUEnadUPJyToPeGV7SW8wRyZgWg7j8BQrS2yffngE7gRqrn3UWbUS2JUokjFUXTcrgb",
  "key29": "YnsjnthAHSjd8NYa52tVJ8G5iiTL3JDgUB3SW5eMUMbi4m9JpBhhxuzLgW1RZD4Fgis3aKCuHsKk4UQTHug5jMW",
  "key30": "2gsbrWBHdiF7JTc4oqm7qXDhXUvgJLmfeXiakk9Je7RkMcQovrXARQStG3uyJacWgRZDycbSMrCt6Ge78KZifNXg",
  "key31": "4z3r6re1AegxBsY65Z7w1CMMy6NjHRjsSaWAm9bPWFxsNq31E42Pa3vetQrvU4Stu3ArAxD6jhNFh7bJgfgJrbgz",
  "key32": "62ozSR1U8nuo2JphA5wA4hwcjZ2hd6Nieo6zUdzWG5h6FExueVgp4HoyDz1C21kc5Nz7tmSExnfanDdZSBpAQmvj",
  "key33": "33AhsFfUtbNNJEhqFUjHF5EUdhHAePjnYnWHPcyKcPRjhP2rs1e3fcqfxhyceGjCFpWo5o4a1wcDHhwQLmGHt3Yq",
  "key34": "5sTgDqikDchDbeHjHhfBCqB3XUaDu1tpabsrkqT1LLjC6XGJ4BFoESPe5DY2YLuzPA4KHWmmEqXvTsrA1ZpwRoDB",
  "key35": "3KH3qTYKjfkCJSwydatLMhKb8roRnGZKCxyQSAFx1krqRonqjGtxZUcM9BZxyd5xPsV8hKVYj5Q5Ctk1jmEsC8pU",
  "key36": "2t5jXxkBdcXS2BUE5GpqvYy5SxQhGYF86N2GgHBeLVmyx4eZ72RLLg9cVJzv33UU2ziePDjafSvS9Mj9CHNtJxAZ",
  "key37": "5hwUwJT1HprTDcEJp2vX5eBD47S71ojx9Qh7fLNKcDPdoMyfwd7uzcCtgqZyq63N1DXyL1UcuUBBdvQHhpLSyehn",
  "key38": "23Sv5RzXryJj7gQvToUqqMnxnF8oUhktQwR7NC7GRT1VTCqyb4bm2Z7QtGkDnoL3DUKLCKL1a45DUiPL53xHkXRR",
  "key39": "9z5cAm8dK6WXTmPPesUzhV7ysAFZoxX142DttM4XzthbLtWavZCkGgqwTrVJzjWKa9nw7FstpszRAiVJVYnNUR7",
  "key40": "2Qwd5gUypXHduSUTW9jjqauDKg4CsN1wstNSZKuJ98js4b1LAk6wyeRMUrSy3ub1VP78nAds74cH1VBZQGRqKkth",
  "key41": "41oUoGNP1CXHRScrYfHrzFRJxbFfRh22xNEc88nGYQUc9RyH9vM6KQGyzGCoc3pjDDQDmyEs8UZPsjgoYRGwefLT",
  "key42": "4C1fgLt3eRy4HoLjXCKZtVTWeSzYxNQ1sqzFxRfZWockMDg5cBHEvdXCYtws5L8u51uerv2ocXg5SXAmrRXZ8AAF",
  "key43": "2Bb6WhQq6BgZdVW9bFC8WPaiYdkCQ84ciptJhqhJhHXRRtM4RbNsVsiB4cwxBNJKMZYJ7DM14pysyi6iwjPgqY3J",
  "key44": "R5wz3QcnRpbcW4E8CFrWU1pGyrRf1BZbBmU5KzMtThdf7TqpQtzVCX3LuBwty4wPtE7qJUBVYVMvheapC6TdB7P",
  "key45": "KZKd8zanXCQdHCZMaZXpzUqigPb1agJxDukwsCYb1nbkiJR2ywa294HX8JEis8kkB5PVpHY7sqjKULhqsXa6DYi",
  "key46": "pdTeHejTLc3GgCwtmPqvtGUerJzsbZ5UscMrcJimenXC1EsQRKhmX4qLqHF35mEESu11qkewMP4e4pSr3Ax7seb",
  "key47": "5YBXCWk9kLskmvCsWmLcBR2bk4iNiqWkJfJkEfLRzZPuSdQhX8iaZtuC9EVBkuTvGE4UQU8sSeWiHRmpxjoc1iCk"
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
