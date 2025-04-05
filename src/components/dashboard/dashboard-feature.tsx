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
    "3PepbZEMmxzGJW743ZqKwwtyMiUuSgAVw1T4tbZgWbfPpQA6nQFaRqZLeTpBLn9UBPhzQ7iWJaYnmkpu6TmEtq65"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4A1ePq5b6LqzptftmgrWBCWQ5YGdEtBp2c8nWVh8J825wqx85KbB2Jkdc8zzuNypCdpA2nxWxXxdwzoMNQUUWJjH",
  "key1": "58FrG9DXqbeqvzuShCEvHcu4oxefVCMdcebUXkvjsJ22Z42X58ig5VbiJUSUmURx37TCzvHSfeBuMcnWXHRHpDAw",
  "key2": "28J8ATtSZt9r281rXxNT2qH1HQcZEyaouTcxzWc7CGLdAazd9viBJ1gkubu3jY3DgdMrQFiBJiBH2A8hnJsiwVBf",
  "key3": "5AbNRihtdsjCd1CbBkCKHDrZ6yFpSPF3F4WavH7Kf4PMr3fwQsMpeTf5mUYH4gPyxLip7u731cKkQ22exMNGqpsL",
  "key4": "5tHHQSMqwP5sztHJG4gMRF8fHKfNW6rg3cJfHfYBCYY6Q6cCEhpCd42957fQk7yxPFGK8aeXcUE4jWANnBJW1gRd",
  "key5": "P6P6nfpsZAguPzdu4m392zT2xphwoNWahG3bKk6mzSpASmwZeGj9BRhfL68aHqcyiNYUK8kQKrXFfjFeREeJWZ9",
  "key6": "41VviqvZTqKNAZ9kn2qkk5wiKwXgRSTZ9ccuHkebMhdWD9tdTAABKm2chYDPuLgPZj9DjC7YSp3k7LZ7bXrkZcGW",
  "key7": "37YavyxRHMDaVH3EhiabwhymAmMjvJoYfhwFHofXaGTu1pyp1ckssDup8ZzXGhhdyzKyXavRKKLX7favG44JRatc",
  "key8": "3tAyDBbshhrbtMoq4cGLwmVGcUxMVJf14ZNmTRjGnwTM6f4goqVte3LSL75vxMxDHRce2PRSX8bMdgTGwnULxmJt",
  "key9": "3eUzV1rgAHN1SAco1BzFiwnjVeAsgHYKzwBk3ye319jpaP6EDGHDPExBFn6byrKq7vMyXLBMhEYR8cVgREGdSeaT",
  "key10": "4wfsqjYqZAxbtUjJyQ6c8zq3F1GbyiVJ8JXW112NsPsEFc82Au6QNKwURXWvR453ef8Rf6FboVf7ytHZUk2bEcoG",
  "key11": "4efZ8sN1X7QmueNNVcsaobd1PdfbCNWrSpRgm5mLHGfS5mGwBwxK5jdifqB2KaoZyBMGZEQcd9tqKvtju9hXjBNU",
  "key12": "5zm7Cg3y5UjGXmZmC7AyC3mcfJs8KVV5Zm9EBK77NbhReZau66TAC1LB8iH2Py42Kdw6yNDMa878ubkvi6Ng6iVd",
  "key13": "5jNGQfjUxQfMsXTUPNUz7YoAMJd1C4TSJd53d8rPZR3dTpwqSLHwcfJ76bT6TftySUWRCJg3yfdN4p7daQq73KGV",
  "key14": "xqohkwxMZvVtisQCmvrjtED74jqZ83KPuRXsoha83SQofj2Wkh7W4Kbkbij7RFfYruGTt2PkK8Lkm9AgRfYANhe",
  "key15": "3HhoyiMRvBYGUkbhFCLvJcmw3tHe8epD3GSfE572GM6iy3JM4kUcQQe52SFRRSWbrchqRJbun4VquFJ3TtQTA3Rx",
  "key16": "xoWGAxE9TSWwhJPArirjRtTfCZz93vmVq9j1GFceQ49nbfdQKNdUvXMVMiH2dSNBZ2DNgbA45WgqiCxNVxuZMma",
  "key17": "rpN76o8xLFu3VoMFZBRskdTtAeKVjf5UF3fcRSLtRoeJAz6zbng5cxEiyB4oJAZuNn1uo1p8P5e5nh8wxPyJEsL",
  "key18": "5uygh32gVJ7KB5xpxXGKFb3Qm7rDmKo16CjyDwADV9ic1Q9oPVxxQRMmMjt3eE9Y376GXyU2aJfqq3L8ekDdYTag",
  "key19": "2raHCea1C1JPGZt9bXQ3stfZHobpy2FKxvVwff75nQAStk7wvRjxT7d4qA94HsJdCpjspExUshRCnjii2f9kFRFg",
  "key20": "4dG9ibeZ7Wud1uYgjc4LUYsuBJ2ytRZMTddHGvzwnaHtMftqxqw2KcFGVYxnhMZNd2uT32HhgDWzEUadeEi9QgZb",
  "key21": "qr9pJoTsMufLttpHe3FQyXUnDjzNtWSyTHzmSohkzQS1YBbAQqZnQrDWxTQ5BteAJ3uzB2xPSiAPxnFXKwYjVS6",
  "key22": "61M4dQVrCYQtkabdscS22HVMPgw2SX9ScusFDHh4iZM2dFazcummnu4dfe9ANKzgXA94q72onsaBhhVsCXfM6198",
  "key23": "2pWg138f5BLnZ9hdwmBQGa1a2jhaFS1tF572T33CeszdbRAmLepo6pUQbUQeDC1eWNjBiYm5CdwcJvk5Wywk3FwU",
  "key24": "vEz7rJxsvPGUn71LX57KNre3rJgweMPBvJ42SxsAAvSQALpCNwgSFG7vsj14P6sSXUGo2kx8KjYQr9mMWu7d4ZA",
  "key25": "5Di1Lr1eFoJgLwu2EEuRHc1eyFKcA2uNHGkQbUKAmHBhpwRcf6xtat8gpBM9enyis7fCE6tkSAa7nBhNSvLxa3px",
  "key26": "5Af52fy8iiG9dk1UJzMaW5FWnRFgMaiv7UyeHtdnPyDYHGyu9NBAfFnrt7jdXYvFBt3B7fwFxs4UeP3VdZJ2fWR",
  "key27": "Qt4nQMwkkqRX7KiJHCNk3nCefAcDExqF2EiJ8Lr1pkfqfVdH2cjTviB1AveXoLoUzzbwxUdmirVWM29A2HPDQSr",
  "key28": "5mpJssPtmQY4wtKUh824joVos9G1Hd5qFXqSaKMN7jSnHxBhLoun8WCXv9UDcMJ3unt538ATvZZ6DRXnzugUma1R",
  "key29": "L9zW6usuZe41YffQ6ebZVwQkUASLuyrm6c1Hg58mrPnHj5agXQ6H8RkEXd6Si5P89L2J547ueUPCu1rJjuTzPUV",
  "key30": "49eB252hPu8xAKQRFEQZ3D46JfaKeXWwZWFoPWC4mBgQrUxnFY6Pn6uhi3K6HzUhQkpUjAEDrFzPTvWcjeCHu47U",
  "key31": "5nzxtt6dNGjM8iNazGiS6rJasbbbjoRrARiTS6VrW6xonjcPFf2685GL3YbqNK4Kc42F9gWL6FP33pbdaHo7iRcb",
  "key32": "4wBNMX3BWyZWgZSrF1XxPqMc7DPr3TWc7jq9prrahipyP4qtirWS49V5bWbS7BMRDN6NSK3jzzRiUhJFFfqstLrz",
  "key33": "4MMPuDnJBpXWUqetF8LDeaEUHQauKaqkS5k917hTNq1jYDkPaJa2Sqi1Bci6HBJj1sef3FpzRz9owdLAXWeWWiQJ",
  "key34": "4sMiShHcG5hMssUq6DjEm5id2F5MYuB2qgtNHk55iJD27Y3L8NbhFwmZj6jZznnGWCptsZbnPPwVDeKXQpTn67HK",
  "key35": "JS3ZfT8VxV4WvvyGjsji6BJXcWKxJk2oieZ3AiVDCK75fk7Nh7zPQX7o6TQrDiWRZMs48VhDygLwavdisqBUmVt",
  "key36": "2v27o92n9Yu42dPanfQwFT2XbteeCfzn29VdNLddxWRF7knT9Ji7wtY834yJnL5wsEBQY6ABrqBf7XuoFY1mAApj",
  "key37": "48rQPDM21RwFxCSfcq9syaUDMGWt7pBxhcaq5DJNomQzCQW8wSB6epS8ihYVVhXQiyo3dgw148HR4GdHeACB89uy",
  "key38": "2wCAzR7GNu8Wd6ep2mbyrE4CAhSpeiYkpZxBwMbaybHHcPAUNh5Vpn5oC64EwrCpYF5iDPcxVRuB9zQatXUD4M7x",
  "key39": "5FvFDkJZfQYGBvnZ75MeT82Hzvo7FKmo7edFXi327d9dPU1SMjfznXD96q2pfpmY3pp325isxcBFeCdKEWEaTaJe",
  "key40": "ogPxVztCRJ2zh99pbPq6X29GEvdv8EpY7sLbR4B4WocUhftXp88CNaGDMh1TNAxCSk1e4YKR9cyfyhKMgFwvqrN",
  "key41": "5g9Asc8by6WpVojcfWYt2frZ7LVcoycwUrwJWFeqRXU2y5945owgM7Wfyr8q9NbARn2Sa8m3rSBwsLrmnqPeMBj8",
  "key42": "37BYnefHpHiXwoa3h6hK2PY271EjSsWhM2QBbxL62cuXN1QpDJybEkunwVPDxV4bxZEvU4rngcFx4KD1rs53Ezef",
  "key43": "4MbFkoxBBjoU2bSD5yGgiURrJsBc68pQzMUBgYjsAat55wF8VQUksXAMwE6USkLvbwKgVBChpH8HGQEmPMZsU4pe",
  "key44": "Z12jD2myCfgCypAR1zhMThCr8hSqyDBGg2znsRYbFCarzCwVvUU1wXVBrJ8Fug8JgksagFQJLNrPJazwGLRiXk1",
  "key45": "3v7gbBsuY5xVtsWF6BKA8T7dejLSh2tpd9ajRrnfutHve5ZEwVbXwHAwrZGDyfbgkKUeqdmmknxzBAg5EzaS2M8F",
  "key46": "WuT5H8ptpEDV7zWMSNrMqvmWPcZS72bKYQRCywTuby1baxTYaEwNxWVY82zYo9USeSBWq2Lqm67TfA4RUCZAw5y",
  "key47": "MXxtTZdQghQuSBv6dfjwd3u7Rt8FEpRAs648vENQsYPBQ3RDjYgpY967yUKg4JxPLDjWXN3rbW8BVKzMjpCdJFQ"
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
