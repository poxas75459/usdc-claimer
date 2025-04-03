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
    "cHrfj9aFJj5VSrCCVocaZ8RJoZ1aH383hXDyDsBkZBCYoLHqcNSVuipLxY6mywByehkZ8Syw8Ke3e1jhhEKFdRp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2gEbiBGLs86QozntzcvfMqnWqqBmL6vNBceT6zJWt2EG8r9CcPxwvfUqMPQC4ASXCvhBQkctzS6tbcsX5jgTtQdA",
  "key1": "5Q4XYNb17j6HXQ46knYQ8mh3wX5BPty9qnst3DqgdFPc7F8KdqoukW4sdnFyXHzVZE4YqHyhKZNmaaiFHyWAHPCp",
  "key2": "4Xi3ScNDuyMeDL3B8yST27r7nbvsPZ2NTxcR1ErhmSuZXB4mNSBkuSjJiiTCXd8ktgQ1Gaywkv5uDHyK17qDikbr",
  "key3": "57sD9TTuoq32xCSJrroQDznkAmvdrnJtoB6PWvbNbE3Gb3AaeMGK5ku6PEt9E2hZqqqL5YwhFDJptFCrMvdCCrKe",
  "key4": "LjKTN1waMwFcb5sGUXCrehAqQ69GrLsiyd9bsNVxjNT5LM4fPmusD76iKaDRe8xgKKxqqnpRP33A9nKV8WASBqw",
  "key5": "3PEPgkNWmnmV4TQ1NkK1Bv5XWy4S1Y5ggYEJdGZyuiCSggTgYEBRCuyKgzZWmwr1GmMWZPqyhqxhy4JwQ5wqimtW",
  "key6": "5bfiQhzs39C8xqCoBLgDCHwApE8bVKWTUE4WjJQPuAJwna4X1cmMbjjsvSrsx1XKRPwjjQoB5o7JmNjKLU5ozSDp",
  "key7": "3tocW51Fbu8PW6JzrQEJXXgJJxb9z3fGYwk6AMGmnqjoeZtQu9uBz7P2pfpoXDf3tgdaYThbsprvDpKawHAQ8yKQ",
  "key8": "hUBhGqAJDw5shMHdqH3xHnnzp4c7SbKgJbFCxgTNdZ1ECfwToaMBL9ES7Wt2qgwGtgvtPpQM1eXRXwXc9W9BPki",
  "key9": "55t6ZsfAvCRQqab7YTw4j2MqyiV4dy8BV6afTofhQ9b83CsDqoouorPtR9kBikLf8WvAqXP3pmYZLMtfZxjDzZwa",
  "key10": "51KGXWjukHmVQ8FQX6gK2Ur4Mc5HUZ7TM4fvEGNF8ZpCcyjiQNC55BBh5NykbuM2PBAftHc5aw7YdqGigmkzSj9A",
  "key11": "39TaadyaUbvBQGP6R7NhaXDSkwYfDJ1eLa8urhUpXweaVhn43BMF2EW9S4wrGDLedmeAEQubvP1mwikC17THQNLz",
  "key12": "5VDBAXMHvGD7jrsvGRQ2w9QnnPhXXt9ry7ejY6RAha9eZUV29cz4WwcuUYQrzmXt1gDNLiUqJgv3Hy8Jwt31ToBX",
  "key13": "7npkgqkZcAFPo2pb134PrBNGCGmWiPHJXbjv9tRA5XADcRDfpVgthNk1GeiLmVapP2gvPsPQJf3pFJUJFvY8aEq",
  "key14": "heEPWCt1BcyVtpBbP81YPCo68E54zPvGBi8Ew2D3ZaPQc9qgsXRYtqoamoajXaMsjWRkUQ9PVfrZok2oU77LcPT",
  "key15": "4Q4Mq5iVxABSFtNKYRJrZpGUniWhEqULzcynGcMtN32wubC7hkNKf4y9hoSoGcnkZDUQTc45BHcJBPZeWZ5Znr8y",
  "key16": "3Ag4nycpvbPwPBnKnkU5mj2cAGR8EbrcP9v2SbJ3SCfMxFqrmXbQkvcutqcCu7qV3DoDfepDKrWdrdLT8ds2eoaX",
  "key17": "48q8Wmz5SAVqGBF8RFFRzwNrCgAuGXZJyAdYJtMLszV91NKfLd9QgqAt5FDrvUiw4Fm8JewunEWGUwXfPBzgYWoZ",
  "key18": "Na8gnVMUndALxtbW8Q7y2aaSpkAUw795KgvpJUCH1oezk2tQS3XjE72EZsKxRrYL8ej4yt15ouuyBpJA3Y9j5VV",
  "key19": "4fmywH2iCYAz3xz9cRLCHqtDU3Y8CjbgPiKhogdhwcaqciF8rtvVk3oKTqWotuU7gr349T2gQYkiS1mh3We6CfmZ",
  "key20": "2yvmSDWAnCyDDZbBm8g8XyiSi1zo9p3N84RTrPSsM75repwc675ZEyWGH8pRsq4NuJ8ALoz7fsxy5me25sbnKJn9",
  "key21": "3QeFsE7dh8C8n34jP9nGx4cLMhXTiehmFsRJG8FJ6DMy9dSBTr2ekCcZt7afGwGio6g7Qa6WAGidWpmokuCVZULg",
  "key22": "wSUKJqhNN849fo14DtYDG9Po5fSbbni1QgFg1pWj6n1NxeCNHRTDKg7bHfTg86b1G6naUAmvfJR5C2vSMsJJXMS",
  "key23": "3PpUmrnecyPVkarvzchvH24pjhboFDEUhno1BRsDE1dXUP9McQJyn9LpAa6zBgqGxyo1UsokViuJugLNPvjULLsS",
  "key24": "22R572Uh3x99yyvCyZtSCqnmxayjXri2ndaCHkFAHWsukMsUbw1U1Mww6wzSrykb29DDeKFcm96722z9mm8ho2ez",
  "key25": "4taqAjhSZmhbzi85bQQTKJefp7styaMJQ1bcmpy16garN3NkgoQySeEvzWCj6G9NweAf7pknXxErAcfGki1FXsEV",
  "key26": "3nvyF3WSpdCkZk9aFjzLVmtXnS6SYbd6SF4hQNVH278qoFXnJbEwykV7HAiUHrkUdxpTLjTjXkDUFpTC5hzNtpFR",
  "key27": "3DUiFYs5Tth7vea2TtsoSjwjVgCtHLk4bwD4426ifhYmendrZW4fVKDg9Ty6bqY1g5xqreWtqN1WyHYXjyoRmA4t",
  "key28": "28gKwSTWoB9WbFZuq5msmKpoAEMq5XUBZX96u5XcABj96PJm9J9qdvQcnzLZKLaAGmqNywC6CaMh9vmLQApuFRt5",
  "key29": "219DvGRvhtsWq9UuyzuqJLSwtatvNsymraJy7ytvFX62tdw5Fv4pjyMosfUeNrwaZL3uefkjmxNUqvLuooYaxB4k",
  "key30": "QRQqEkgJEPm5fbx3cQEtGJN94hFDB5Z99xBVHRUrCR1biu6oHqU8NaJTZA6H4Gpq1qdCNGRDHVmZN4TEj8ewmYY",
  "key31": "uiVVzi1G2zn8pAzY88Kcpk3vqSULRQ4kqpjLf6Nde46cmnhbnzydHZ8yQ3iPrdKErEtVTcwytqoa25DUXLy42QZ",
  "key32": "325ADgS2ApuAeKjULUFYb6e2kzUoHddJYWkYKXvTqBUzVqnkKj67f7vu3si2ZrKrdteCc4ypXgd5X53bMwXPU3uF",
  "key33": "2wDhU2bzbHNZ9yTkkfx8vPAcbv74WpYiApJ2fbanKYKujnjawsJALSMV7WTdEmtJrW2EruFo7Go3Tgji5goGDZ8",
  "key34": "3mGGHix7YB71NuvJvKgWzkaNW5kuEqLarAR58VQP1kDrkFkQDSdh6yRhUE1JCakqXMe9Q2fXMMZL1ZVW9KeAYaVz",
  "key35": "5yC3f2J8C9JjNQ7iNn4jMnKxkNJyNEBz63NGwb3NNhQESEfWcFrSu68kjvw5uSWj69dvhatfQQm19MkPCdAzFzwN",
  "key36": "2XmnkV6mdtDAp6hon1qyHnYjRvDSGzJKLjHoaViZsgpP1sZMuE3wqLjZDyzvvLQSuMnjVoBXaDNEXXSN5LTCuikp",
  "key37": "5T7Ug3SWEk45eqSqvL3c6qWsVHS8iyPrm1VmALWBGtywGwU8uSegepHvQfshA4exLBeeQks8GZd3kXDRXMgxg1ku",
  "key38": "4frvGqTzRpF2iGgKWaG95WGWdZaByNweyPHVv8s4o8goZ36qhNvPBa2EsoBq8nqmoD3MxDDW1TmUgbjjbuzyG5zo",
  "key39": "5QCDoVDRvne5GqWEZm6JbvDEYaVc6jzNzqBXUGe9RZcLjKi1y5cNe3k7ei5ZTV26KAPysgQmvQLrrtAKECcysK2E",
  "key40": "32TeN5iuXx1iyPUmvGnPsu69uHQDVDLVicmHG9VM7hG2LGrkn9ccCLiDcpP9ZuXdYw8424zkGJ64yzXcaaGF6UQ6",
  "key41": "2A8bRC16VHZ15TCbbwJiqoAfNaE9EiTR7i9pGcGeT22q7CzrL8mdhzmEHBy23KbhgaEfoUprT9jXX5TU4PeEtUVV",
  "key42": "4JT8Q4hjaSR3fkqDm2D94yhfCuvPbLhxUfyAJchZCjkaomDdHfBPBaXm3SnVa8Mz3onxqskoy34emw91M33tnQ9d",
  "key43": "YTm8Rzoy2ucLkrVHu1NimfMsHFtdWmWmR5jouNwnRSumVs6t6uBUiUhWv9ADg4Jn9NjMJpg4HsiAAVPgLfmPJa8",
  "key44": "5G83EPHpwjx5pPZNbHgyaP5Yy6RJ1pLCCbvmpMxf5pnXeJAaXQ6bo8SoQMEvtVobSe1v9XrRTKMeV4GVoG37C2zJ",
  "key45": "641yT1gdW5gApZhqLRBxSgDyhTeHqGqxFVFdno5on1A5ni3sVtL28GCVgEu2x3ALfwzTJZkZgJBKdyuX6vFRraWW",
  "key46": "5jP3MhcP686b3zg1uQ5tZHPcBHyESGV5kxFkwfbhcGLTx7N3LHN2Sbk8bVJgM5bMCtg6nJtiL6iVfupC2cxjq8sU",
  "key47": "2rWMY9EtGFynEusLNHoGQR94Mhxfm5KCKwm7mvSwtMeNgbtsfv81usNJZbGNbWHEYnqXev2VMqag3gAcXqmFWgwB",
  "key48": "41LwKRmGUqpwUEEU25mw6RCEdN6xueR4GC4qHid2FocrJcTz3qL8CNnnyJhrR3AHVKyMe7EcAvmbg671yXnrvFkU"
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
