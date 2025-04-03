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
    "3dBxU9VVbrPqDt847dM9fR84PpnFBg5Vf41PpnwFkFbFmiVgUHmMP2CRa4NXcJfUybrLJsSuv5yuznC49yzjwDoT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5UaPsnQhtgJnNg3dtXEtKwsmoRDjmNwp18eAYqe1E9N6QSYqRJsbPzAtKf65k39HamxkW9vqRSTx1YB7RyMYUyZj",
  "key1": "zNDWHM7fe6EnJvnM2bqdyAjtJwfHzBw9sLLYsJDt51JMQGfvEXBuy5bTppLKhhvQ1GAeJuHwi27kiuq2a7rVULU",
  "key2": "2GMUUxgP6vYL8UYB465KTYYvDt52U4FjoNhMbZgDdiKsF6omdPPo9FoDYtKAHkCCqVRL3HaSHBKezqRDiryAgpdw",
  "key3": "2igziPSk4ZHft7SQKKgFtAgJt7hSEHmMHbEa1q2TcbtGpFmCghFJuqLGkFeQMJhtNg8AEXjV6di2qkSAAEnUzTK",
  "key4": "2QVPNYnoQjvCj6QNENyaANpEWWQJuzLXajpdAto4GQqx39FU6dXRQcxRznGbnQp7d78MUdBX7vR3LxT6JFsiHaWc",
  "key5": "55kemrFt2wXyJKeXQRQSEz3asXYfJsBHtvVcoHYwtHobD6oCUBFAsqQ7H2vh9n7CeTtWjmTYtw2aRuwdd37tWcKn",
  "key6": "6Q5GstTy4yEpsD15hcz7Tgw1jCxqZtQr7bj2eSBTGzmfWLDv1w9raVAaY3hXZ5nB7QAxmXiaDqjwMpeQGz8ypWg",
  "key7": "4ZFSJ5iNKrYcnb1TzKbo5xDyvXK3M1gE8yrTnw8Jn1p1k7BLvRTYRGncWUFXvxo4D6Dx6vGRo81Y5T2Yo3LMb6cg",
  "key8": "3HPNWEjzVPEF7E5pfQtVQtnTug32EeePaEdxDMLBDUfNUYusqx62sjK8eozAzQEt1JsSVqXF4DMAabZPrR2ugndK",
  "key9": "8WjYvNtAxLK274Qa3w66qQ74Mc3e3b4U3xL8ErssroyW1Z2MdtrD2Uqjs22QyxZqkrYsutfEySQnqe1QP7nZTPP",
  "key10": "1KDoRQoEPdV8ABbRgpp9tmY88vXuP5DdAYFDeX3Hq4cf8EZd4nk1znThx57kc4JUM629TnBfs4Ys6z4WtJNyg4h",
  "key11": "5aawRqpve6nctAck6zjPohdZkBbGhq9YaF23MNfxW4XEq2Vu14mZvukwus2o1o7SGRNp5JQt32VniHDy45M76NTb",
  "key12": "5xsA1jmhcSEDR9C2movvCzcwU78eMdDNoN82LxfBVGT1itN3URrtepnPa7w9CH8hkknhsCLxjTJxGgk7cmqChnxG",
  "key13": "28dmGK5xkkvW4QcGNwjiy7GqDFs2CMReCr1ABFdLXz7nFjPLnVHMhSrt5iz27hvkrXrvLeiJf6QuSK9EPB77W7oQ",
  "key14": "4dvTXkCieux6qGyANBo8hUKJe12SzveBAeDDJAXLLpu18ZGFAa66BKy9NSWgeQ6fm7HXa8zbcmAE1noEdasHFsDT",
  "key15": "2F1vFxQzgYPZ57g138T9L4yUyigudh2cBzYLzsGQnp3Go6Zp6cn8uxAn9ZgUptYM5j9vWXmbu6vR8Jetp47zPV72",
  "key16": "2aFQCLtmuwTQ7if6fpgiXtWH7z6thwJYj3eBMedZ2gCZivDjuCGrWwfFfZ5PvuJVDU6pYK1QJKmdLh9ohiq22fjh",
  "key17": "3yTg7ctAFYg5PYemUYeXR5buMJZXc8uaArBkqbscdL1kmPCUp9ZWnpxrqa5aQsTaK7dLe7F8KKqZgfZ1FTyGRAji",
  "key18": "igT3Rp3G2gFG8LsaWccTdrFtUDpByseZCiSWyEcT7yzxHj4bqdkwAfKzipkPHYZnxn5KgW84peAEPBxmuwj1bT7",
  "key19": "3JPLBXYqHvhPzntwTyJ4QHN9XN9JVg7DJ43E3V6nZKA71CUMFcfixMtvAxoCR3oFaZXi5MGYVgEis2uH9wMfujrf",
  "key20": "4GVV2DBfc6YeiDpXnKgj1eTUTyydSKrF5TqMiLy7rRjh3QWsbWwzFYnoG7HfmbPnwiSAeybXZsMqQBzSxuCwbzcr",
  "key21": "4soSyEnYJrtHVjf62hNTnDMNnWVr4dwGboXkcCVUyVnu9nji5xA3LD1y14MQu8r3pGWPaTy1xuqisfhfvaDufmCe",
  "key22": "5WtJ7Nd8aFY2y6EbLa4n2fVP8WA3ijsZjY8SDCxNyoJDNJVDVwtRzVzqmk7CzvZh5bUo8DwqKpxkgrnqwoKQEcqf",
  "key23": "1iV3EtcviFmPEb67qyk2pLksZiAM77aMuRCAF3uGng8fkLc31shFWtf4cbfZSjzUHM9BhdbJbzbDJf58HgMkSjf",
  "key24": "5J15bJ58sV7tPTnrmDVANjbLuqazvb51w9e2bBsNiJAm4uJ4JUHQd3ZwLE6Q4An7QnG86QTCosmN1EDt1Fw9LLdR",
  "key25": "4r8qV4mk2kp6sDDmTNEjJX7ZSEZEgXF3iCZ5RhkoqhnSgfpghvj1vxnGW4j35dWGNFyVFxq7PZU4PyZ6DjBwvqPp",
  "key26": "3TbrkNqJpP8zcEJAAZjRNLWQe2abWXK8kE6WN374RYjzjSmSyjm4y1kqd6KoqZnEqqfUfJkXyZ1RQG5n8aJ3w3cH",
  "key27": "3u95gmkKrUfLkAbfuAK7L7GDqSxutdvUy7L4dm55Wnnjs2C2MPDsradmHFDTh4xHLzFvHXRfwQJT6g7fw9SGTAs3",
  "key28": "3si6LTJCzfP3MeGJGddGHA1Sp6SvcdENXXrSCKqgLgEr9wWUWP4EBN3P9JAifYTFPQKuEKfLtAicwLTFbmCiFqcc",
  "key29": "2xzVjT9A2dRgTcFNSjtEsH4DvHwVegirhPUiT4hkWKEJ4ge8SNqmNBUNAzMDujxfgzXijXkzUPH8YqsXL3wermkE",
  "key30": "mnyVS3fmRhXpwkTqwSCscGLXm3Myf2VUu4vbYr3pL85RpeZDt7RqHcyVkSxxamzhrmwRs4nvuwWUvriPUAuNzfG",
  "key31": "42tFttmY3cNtT2qjSUTrWUYSnjipqiKJpiqXoPXCebii8iva7PmJNAr22g6Ki1ASGhyRDk8MgKdkF88kQJTGogCy",
  "key32": "4UXaiawoQ17aBTwZSyi5DKHWcSQHnMkExRrcLQ18zw98vZZ2yeGrZycqYL8cvXtfXszuapvht8pvvN8yEodMW521",
  "key33": "233CafrSqYnr6DKmhG6UkiHQQxKXz6PhEkbDbfFgVK9cAsaqWjvVoGNZuQUxuGqXvtg1ivd8xkndPfDUqM2VaW28",
  "key34": "2VeuTTXKXxjoyRLcqeCnEmXMTBfF9C2bfB6JtkQSocayCZgAffRqQXjKCoAiD96WDMNVymcuoBDqKhEGHFKh8j19",
  "key35": "Fvh4LHm4WFJ8RMHvAVgggij7214fNc6TF1hHeYXko56ZTZUrEKKu2zPThoc2s7hasEtJLNTbg2a4EpU54qKzLic",
  "key36": "3UbYqDCNogWXWGJ6Cpz4FX6vVssohKFxkFGsrtUHdRRkD798ogUKrfM8RPLfCt69FSyozQMs8YgnkuYMwRu8BGwb",
  "key37": "3Jce1zeLBybreKsA7VUZ1knHDfeR9LNPJkyx8b2zjHJCB6jhGyF2KWsYtNBRFozHqQRu1NyaPgSC5S3kcjhBPbFK",
  "key38": "38YFMDb33D4w1LihgvSiDXNwLB4FxZYaTmzJy4gEZyqjCh2FkerYoHd2XKTc4W31JYHsP1y3minxEiTWsTeUKa7k"
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
