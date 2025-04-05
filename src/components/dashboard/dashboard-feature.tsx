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
    "5T6pQLkfqt1ND2eJ6SgK9MTK3oYBEsyXJ7V1CBkx8RmYRoiWjuYz4vopcqPgz6yL8MFHG13wLbD4w1XE1GL9VTCw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5FccxevQ4aqk6Yhp2RBKZTrpp9NdeNQ6Z4M38gonNo9JqqN52RMndFf5i1dPviCbmopAJdavKeBu5Md9Qbxvkuq9",
  "key1": "3B8QhsnjQKDE6LbfQJuvySvYxkEhtszSgaHZVFrvh23wPayDy5NxgHxRdojgY4Ja3tMRrBDB4es8VmFV6jcE6DFB",
  "key2": "4K71R97Uh7KfDiLPdMJZBxmrmx5aZ9vezx88ujcughY6L43Ki5pVH7P9Dxg4k4zZLgqEGJKLhfHULYjQZNgdsZ4R",
  "key3": "2YsikGnjKf8QMvDnwunUfuPPocWFwRHManZUaXa4LR6HkSyswJ11uLQpCdGmyoh6qN4ktc99DTtjKmMVKKmUkaD3",
  "key4": "aKYgmJuM3NMNRipqTCBrFUb6CrLCZCwtpXdDruKWYGCVFjuSssCeW9MSsQKERLfxoNLP431dZUknQcP5qdXKbRm",
  "key5": "2RzuMDxMazBZWA5JVk1VWcJcqnauRSxuqeqd9qfrFU7BY5UuLfrwcnjNggz6CQNXMM9VMNVsmfvhYSFi78fSg56W",
  "key6": "S7DXuxfhU1VmDUUbu9xem4ajiHLCeZM2WZjK6JgAcaWhGwKvKh3jzXH6w7depVM1BShLxoYDZx2K7f1GXEDNARh",
  "key7": "467YHH4VkwcHvi2ZoT3mwpc3w7QvzfxN53SVo5KdDLWAYCgb2kh2KUBKGBxG3xdPNkuUGSDwkThRCDHbX5ZMvUE9",
  "key8": "44eVWSEk2YdeGAdWioiQcq5aixu21jXPvb1ishkzGnzyo6Z5DxH1s29bKRre4oX9SXBWTHLmBDexu6y7DEtpeUHM",
  "key9": "5qNg9iNF97xqzPvu2vDqGs3ynKukCRuMmEZdZxaKnuweae4G8eKg98JDG8ZbD8xDdEgWpQxUmjreT2cnerueeSyS",
  "key10": "4qjHbngzrhbibE3tMqJTHBX6YU1ZZitoCcWhc2JdHDnRedRTS3hejbN6t28uiwJWBiti394W2BuBHwuBBu25WvbJ",
  "key11": "2PAWCicMvVXvkrnPDf6w2zSCSyW1GyhdRw62R8zzpfP8JbTyVPZwzJ2wmAFJTMsqvJVmMrZmE2waLfqw48EeaFjg",
  "key12": "4rxVSgYaMSKXW5nizdfyRJTmg7HeLyRQumWBK7mCwc3th91qndGvSSr9pyt3bzMJ3jZSryngNtdYqa4Fd94syZ98",
  "key13": "41QbdCQ3LnZBBsUKzus6YYodmr5vNNdCAk7PhTidZgKgvpEp7U39BmLH13Z2NM2oUoCqPm5AsaXfWe5zt4Cxoyfk",
  "key14": "5iwTd7mwGtXWiaMpj2Kobqtep1vKdfYL9EgLPRz2DQTmrFnehBwpEd4qfZGLEijDFjpSf7YydWB16uQMdasKZBBW",
  "key15": "4KnjxZm7PpZbGoyFRW7e4nC7ecpMzQNb3MGfLMgfvpqaWXKmMR44eEMNkS9VPETDnEDq6BGg75xSoxij4MvaYrvb",
  "key16": "bSJMC6dqtXZHsxBt5gZcgtHq75MtVLR9qRrCdnogwWniK6enndfuRCP18sd43h81EHgm2uX1zCsVyLB1q8R7Gb5",
  "key17": "fQUh6kgi7P7WFpohPrecL7FzoQ1VLk3TLNYasbSjUknw2GUW3iN3awCYiT2hrx12Q3tSKcECmCDi8QMjtf2tf8n",
  "key18": "3QNjivZh318dJxEWEWwDeeA4KHXrTVfazmydHP6kJXAJZQCyExEYLmvConmR12ggnxjtoxWFqXhpca4bFpjjZkza",
  "key19": "3cJRzM6UUTdqQiAtW5cs6rcthxEe6vov7Hiv3dayYEwtHk8w8nWv5EMDAc5GZh27C1ZbJwW2WrAMgmgdsaEdzze1",
  "key20": "4N6nBbt7Eg8cPzxjvzsghzdZ1Jdjx61bNQuMzKpiQSkZcvGiySsUWNGbNqy491cU3wrJ4vT1whTkGfaEXRVSv9AP",
  "key21": "5fabP8KqRmo4wMee11ZBRYCU72s8p3NoZD8wQJAJEntR12Tk3px3b8i7oQFYAJJWF3jP86jE56K4wJUk37QEBnfQ",
  "key22": "4wLcogYnFfTEVN1grTxp4XtmcePCoHjxPaXWkjdPYfQ3vczPA2V16NBEZc9wDXCiTJ7GsBnFdjWigDCjrKE5oSyf",
  "key23": "5W3XTgQTKDxfiHXwH6KePuaFLjjjvuBjkHhuC2eh5uCrEgXMKcRRX36HRPTpACQ5iMEVagixb6V8KAT52K5S1898",
  "key24": "3EUH4esgwrAz6uJDEC1XLPegUesfJd3v8uorvyojNk5dSP4cy2H6HcwPJ2VY6NsPy2upxs18hKtfoy8m4DU1gZv1",
  "key25": "47e91geoMDdEW4iXTe5nSXo7QDWcwU1Xf3mgiuwwoEg8ChLopXJZYnB9kJ3qv67yPEnfGUztu3nmUtPtsGmY2dww",
  "key26": "2HkYwWp4iYUnm2T2pJgHtFRKocKRbYj7wsirbgeggyp5ymyBAkP8SDEipjmCTFfxVXCgZSoUPfAATmGA2PcxQeKT",
  "key27": "PDEtzmDeya5Dg5tgnCP5hSWFdXLjVD6WZvSR5iC7UcsXaJS1BgxZvBzvuybL5sGH3bbBopyC6huKrhrXvzyCoKZ",
  "key28": "61fMAWiF2feUERmCYi2djLmtiaqGtLu51nsLshWateoYF8aUAXzSSHNGnBBtnQpPSujWSGZyU6sGn2xtcgYMBDVg",
  "key29": "5kDiM5rpjxGzLAhKCWpAea8RN9wDQgutruefWHemCNUcmk2G65YHtPLVnnnvvjhqrVJ6ZgYGRk39rdUiAALGYfmC",
  "key30": "dfrPsAzFyS1vfodcLFn6cXFnQ2sQeGYvGoN5gaUNQgDSC83QaRUqTBCZvV8C124hCFhPpmDg4SebmUJ3qT6Gome",
  "key31": "ukFZVnF4t99LE2Gpfdg1mjmQvaUGvT79GWJhuco6Aaz8ZakYeVAJWnUkLzNpJM793imLq19vYw7wMxiesHvN3XR",
  "key32": "2wyeASWNwjWYieGscjQNErrmbcbmLkXePcfGTQtnVpNyqHfxwCfJakRMe5f4uC1KAweFsnMX86G68h78XVkL1woL",
  "key33": "3Tgkwrjrt2NB6i2YVVHcYp95zPX5Uqfn42pgymUDbxfzufJmw3weN2kSHPeEyJfRypDW3XbAxSabkb758mTwMubc",
  "key34": "3u95NGf2VgrJeDv7gE1z6tqJzcEwtiKCJjoztEKZBN8cuaS5B6EDTKCNocwNBiHMXzPfhLvgT4ghq5nuJjfn9BWE",
  "key35": "5qpsv9M4cHQFKoBBMAwaPM9jggkxAY4gvmZRaz2Hraz7GSjRoXH9VMEQjUKYhi6x5nnQbKdWC9zUakcJGC8paZXN",
  "key36": "2JNx5phrXHmF5jQ8yZ1TAC1sPBoq2Zz8K59VQQjVuRiPnLA7dBGUiVbXFBs4kHHZrojARPkEL5i6vnBZttNpGkg4",
  "key37": "a9BJKVsj6q9rJYTqMHzFCbneJsds2yqakYrAaSP4pTbi2VTtkzGYzZinHnoBNpDZhBYUV3EXQ4JDS5FdDMzVXVJ",
  "key38": "4S7jGL6WEopLiX3Ff3Zazkt7NifLGLnU15L8iiqrZPbPfNsregUfzxAuVZKce7te3yVA76hiq7iDJRTDyeMyxyDd",
  "key39": "5beTZJPnNsCsfkUwttrWNCUhaDi4tf59q53CpoxyGheLKw4XVuY1DdKqM2TyWk1rSRaicm6sQkSVaKjLXkrLGdFM",
  "key40": "4HzD2hqNGtXvza2kMgBhbx9bkCzWSFTykF16nY5ecebioVAMUCAtugMyQqYANyfTqLXyvTQHSsKH9CVxz6J347v",
  "key41": "3bnKA33TmYFqhxcKW5KunEx2bsKCj7vMivJw9n9ChdrCtMBW77g42gYLfRdmLv8bYBGHMiBSx8fzDDcwip8dkG8C",
  "key42": "2XQ4QAAKH41zn9Y3p4YbKZuA2S5YoGDtKMWQ2KGzsMVYDHBS5FkEK3MaagM7cr3KHfx2YZ6fTZQtJd73GR9tHDoC"
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
