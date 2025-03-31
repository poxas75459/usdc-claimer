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
    "4uNixUo2ZPAphQN9owLPATD4MvZq1apfTBsBrRqfB7VXFSQ7BBj7ucgC446vG1tNNnxsA72TFZrUV6xo6cvFvVx6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5hcV52ikXLsT1RCc446FiH3ZwHemPyPfePW7z2xeWcDSSq6U3HbWAR7LqeDAmBv5Se7MQ28oz53iD8bbXPz3sBoy",
  "key1": "3fkcvCD8doRotBJRR3qrxDyXXvvcxvb4zQxueDdL3oGWxyAHskrkDbVtuXKLkER6gyrL7L29QebLKvP6cjj4YtKk",
  "key2": "UyJxBjebEqYtPm6eQcfvu3ms1i2jD2TjJxyYRLgA3ZH9JeNy7Zu3bYxT9YYamcTcG2dFU5pmEv1q714keUHXsqg",
  "key3": "626Wziui6aZGYSB3U9nevjoHBkikNXTWbUtqcSFoiR6pKJaEdMAvUAqxXRXcwzTt4221mXBFCi5BuBXMtyVxKQxu",
  "key4": "BucAXaxXR5v9JJK69ajD8oyekS7rswkguKWri5DUFjN7stQ8FxLTf6r2kaemFcYnL7Y9SjbtPpdWmU8s1tueWiH",
  "key5": "2PhdzLWezFMoh85mtfs1YM1jxErhNc3ki2iiRq3zzohEtxncyXQhzivQTabGa2GTg2fXo68FaiQUvUUfe8vjuifJ",
  "key6": "28LZGheBq9ufVuFVmDMRHmnFYXrVBBKz1AMJtttXyGG7ypmhq2cwRM3V49hc2acvw2fdhyH8vr6VvpdY6gQ3UHy6",
  "key7": "5kA9xXGjvoUEbaMB8g5Ue8hw5mnFwuXS6NUQxJSCJ6cWDXRwhmF2Enstu2L68YEUxfJGAUQGXBr1JCU3i8iZqmzS",
  "key8": "UyzTpwVYfjn3DHMY9jGyux2K2bUU23JKjQVU9is7UTfjFy3HNyA4ugzT6b1f1LZG4sQntuh4a8jupTbwKHXBe1c",
  "key9": "3idWSbRdhLYr3Qoo3CJhtCbwZVqvxXbm4ZjQK6dFoZW3mgERNmyg27Rgsz7chCk3zSqENxJU69j97hxGnEAKSYDJ",
  "key10": "5C9gt6ZugwyE4Z68Uh5Bcr7M4Vxo9B7RWzfCbKHpLS2gCYJPAj2w1XqkCGDchme1NprTVWQjnnrvRkNEAfwEVk7u",
  "key11": "qUsdp8dp9aRkxg2HVeoMmCa4dQJGB6xiR2maYXrS5EuurVfTqMaHNm1YBxRQsB2ZiBaZcNWaiYke4SfDQzwDXm5",
  "key12": "2KoETLk5XSeG6httkLCoz5gWYPwsECxcFE8K8UjmfbmA467hJFKHSHC2jK9cPCWsxFYEMnFE8xDkchKF9YgrL7v",
  "key13": "3GWxdBVFUpTSvVNgfzYc2Bog58Km9zarJZE8wBA295YF98RajYbcfAD5yGTenWDgvyVb46LadAh92phn2MxfEuMC",
  "key14": "4u54tQbJKDgG2dXGNDXep2oHQteDYKBZVLjX7kdwbf7S4bvJ2vDdHHzQToyDZawWzN5HBwyNRFdUbfPtUcsd1nL8",
  "key15": "2UXownmQdQXekkKstS76K67UzzD3FV4PnBUUX9hvGvjev44sS3hbnKriGHnc33SVr1S43BPR38aJcoph4oXMpGc9",
  "key16": "24dSujSJa3cUQQBcZCvCqS5Qe4pXSedD2AHaKPVRyhWWTKg4kkhGtbfGkzdxD4MuChEKrjsVEsfNnQy2ZqHs2vMN",
  "key17": "2wvuhrsKq79AGQSiu4iFQLFcPEJnD24qQ5LgvFTNmXmmTg8o2CPUZfoWCJAkTsVD86ENxauirYw7pyV5JhCBmPUb",
  "key18": "28HNK9egMuQtHs9iSq2PZcmLsJvQ5mAKnnqXRrY7dSaXvkU9keMTNdp9LLZm28px3HvbHffL3fL1P955Rz43vaUC",
  "key19": "5v9847n56VbtAzNgJWjoG2evBry8XJxXsZ6KNcWSBRSSn9xDKdTQET6nQiYUbEhuzXso86PrCHSBNQGp2nHMP4uV",
  "key20": "3htLjnAUPJveUcZtp5L3y9PCJLoxcyemDGEuF1Lc84vvQSL7skxTmiY9ewfjGinw2rotgEUYX8GcYH1Sjpm44MSB",
  "key21": "5BkACMTq5Xo4UEpNFSPRUniA9jsdcmwy8cdR7WJiHrUhC5NUe2Pk6ytFCn8Ypaur64VZ9LWj29XpogHYQ8YpEqEw",
  "key22": "h3BF5vJ9gtprRTxrhpeK4nd9z9WAMu6qNJQKThFXq4KbGA6DeK4zraaB7g8yitNDngm6j1SVfXL6nxFdsCbpgG3",
  "key23": "2iZYvGe56GditDAeQ1ibWtiGe8YkfYJEc2moTjREGCp5K2ccK8svX9UFVgFZg2FUn5qgBdS4fh6fdkfijGcKhjvV",
  "key24": "5q9LHxcS8Mfk5kNjv25X31AFxuNiu8dD3xuVG5bLgtZi2PVVLGXL4ga1bWgGAoymfNvvNJ9FwaDPL5QbY1B1hXqm",
  "key25": "4GE82rqD9vvLdAqXWJDAbQPdMi4qDwfAb1rF3HdRmPFWwDW7Y12zuVPfr7urXeNf1zNFmbfEozeb13JKQstSvuoj",
  "key26": "3QRFj2t5BhHu9qk7pTsvkAXj4Lj2goDtTCq3wThBznVwEB3Hgkt95zRwzza64C8QmFkHkpUvRTisENdB5cWC82SN",
  "key27": "46bxkGWWjALvw3pPxatAEpBkxAZvnV72789zU5wTZhhxydumBkjTEkeFo76fJbmiZC5swMcfwR3gjmCaVV9ZWcEF",
  "key28": "3oxA9ABqe49ym9Ldn9jwGMnRqqAP1MnWcvHicTaTLHZQY9bMTeRw4XDxTjy7TdjPhs1QAgzBYbsMzYnAKSXDCYhu",
  "key29": "3bDj3ct7MittLFq55YHJVnTHZ9GsnaaV1z5WdFRVALwyTNFUM1N2avpeV62sVjFt1SXfXu4nJ9SNJN3KqcXZDTHt",
  "key30": "3rBixGXajfSY9aj32cpN71dNh7oJ3gqizu8BmvRXhvNW5j9yturMmJPQthTKAWs5yR4gSxXsi3aUYimekNr1E3Ta",
  "key31": "aAJvXcye5bfA2ms4Ve8gFSz6RxuBhjkubvhaostNccLpRDFD8YDx7zRq2VGqPoXizzcjYXQkqTfnK2ZDzfQxnfs",
  "key32": "5gK1CFk3N4JTVhHzCv1TMKbBKqRzdchRtqDdpT4LrcsaMyucU2GHaHbPZNyaU2siZUcfEsjYDZbAKntvfgEDBEm5",
  "key33": "4uQEfzthFXw8pjtRuYdjoD2WwtEMFqpfRiWHxrSasD7jWQjbggYCUXexnsARrzprfwswgS1dawNsLEEa7cXFicL2",
  "key34": "33MtuLosBXou7AdJGuUfTW3RjjyScGnPLy1CJ5DNZd3XFsLFgv112bFYJw26Ye7wLmLiCgEHmRzvRiT6Cu3nceh5",
  "key35": "64UNVwJRqRkzxjnN6e4sd2bb6iSzNGctsjQ5L1LMMFuW4VW6SRA726D11xHwrGsxyE1pF1mqzrASfpF6yMksbZt1",
  "key36": "62WRWHoMuBnW6J97s9yEUj8PWrYAqjB8bCqB2a14mABYfSHno1Zi89ft8sQe6HLy1DYSRVftL9kCXmJt6sTuL1iH",
  "key37": "xGPXEgFv4PhBqo2A7RtbC8bxevyno6bQSumN4JiUp5XFX1nCCHeofufd7ZsDDvYu5Qt1cnbVH4Z9v2WFBdLoyYg",
  "key38": "2fPJorrkKbYmmGkDjYq8xXTVehqMghptCAeJTRLo253z8gPprVTavCEzQFAayhJJJVLGdaZN3um9guPHjevkebKD",
  "key39": "a1orQNeMhnUY3aLcPyw3zWLN7WJVHXLCfpXe45hEumHswTHH3nAxLipPq2gi1NqZgVSfDgFV4Q8ucgWZuv78XyJ",
  "key40": "3HLF5Cj7bGPLhNKYBs4gKoX5rsEKe3GWyGbJoobxHqJosbJNEMC61KRt5Tgw1Q4C25xcmNMWKDpBZUw1FRZAx1Tj",
  "key41": "2d3TPGtf8dUghXNDjLb7u6dntqnr1kZxckgEVgYErrRAZLL3Nvmnv5sNbVZsewftbNB6oDrGK4gb3SbF3mjSdhdV",
  "key42": "TSwqjECDfwn1Px6pNtwBhYSuDvKFCNUmwRt6yQ25CHLnDYoeVeh1aHrvRfa9LbB9otcRi3cwWg3p3nV7o21a4DK",
  "key43": "4jmV5Qj7zWQf7EY734JUomEs7pxsr4UBqSh7WgV8kkWKyC1i7YAihDo7Kh3jgikjJsfb4smH5t3i9FymKJH6x4yW",
  "key44": "3PgnoReFtZrcfn9BhhbdDVUQs7JEpQ1218Za4e3a14uYbzeFhqBxgLFLzYXQ4iEN2Q7hePwsQxeQRH1EApaMsEUL",
  "key45": "4UecBg6ghyxUxZprcgmK9VZiHbuNdh8eQFKcVR16vTwdsTxzogxwLgZYT21CNna3dUxQVdCvBZjLft3rtjLeP2Xd",
  "key46": "21GMD6Rc9NquGAYYths9qMtQxsApr3Wq8Yk7MDQF2Uxvtf3L2VMXC6jC5JtAaa4kF28CEmcSjN41P5rKxxCUHi2a",
  "key47": "xvVwhMHpuVQtV1VTgVmoUcv2ksY4tgcMtJ3EWNG8RKgrP1HiS8hdkDDzc7WVADYLubiGUjoXFHaYmmQgCJeTzsy"
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
