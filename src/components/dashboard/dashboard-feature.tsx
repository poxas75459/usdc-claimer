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
    "51kzX38653HQHF2c4NizZvjTxXtLEfwB8RH1N6Hg8xALorsACtJCo7Fd5kdimUgk4ym5byQWwwQBKSJmrh2nYGgE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63L8Mm795TAF44Md32FMRrdyXq7SGCmY5ajVcnsaQXj5TzpvA6btoUgSFhbUSFBV6B3pPHLhsvyzsjCuLi1Md3Ka",
  "key1": "3o3mR84K9wkWD3zcKuJN51ihcXiVbkGv2FLgbpZsSra5icDg8s74ku5fPXvNijyz68mbNz7t3fAfy1wx2mifcAY6",
  "key2": "4Dg8YJWpfn8nqaWW7gVvUasLcJkjmQUKc4ri4UDQFxKMWP4GoYRvDWB5WV9sHvhnX1NFP4NmDtAYG5zn9zLFjgXQ",
  "key3": "368Jm43VzZXc67xGWDstXBTHsj4rQRkFt8giMEfPN6dcDDZQBdztCQnqjQXUYjcPH7eWNuGPR14ZAGv7stgEVosW",
  "key4": "4hENk2jvdzvqNcvAexGybGuKeyTuU3tqVDDW7QAYT7HZp2pUB92J52QpvbeqsoXzvYEKo5VaosfKD8hZTnagjAC6",
  "key5": "2JTgLSXAmsddHzsijtxxACRvkupDK8McS6EPhJ9GzG46HV7UMJtmimrsgkK4wQVU16a6Go5T1KSvh52HnH74GVbe",
  "key6": "52gGDVUvbpazkcZbbKdc1UQmkxxfxouHNQBw9iUmnMBTTDPdnUoCPqRqvTMY8uV9rBaJVEnPmUqyF2Mvn3yr2xd7",
  "key7": "WKK37vQgsGRXYyG5v7vvopYPcJYhxvW9CK3ishjWwmRkg2eLP8DcPZkhT5uGGP2ckj33Xo7d5wQtHhX2ZeYyXdq",
  "key8": "3bnjvh4geqJtRwb6X4NfZogpeWYGYCAGcELZ9cTsL8FweDSCBqV6Hr6iZarzCX82drf6GixtVSHR9vPpL67ALemz",
  "key9": "43EpzQHPDPkvy1aXcGtbvT5c1Ex1CJEnu6Q76Eg78wrS1fpkQqsD2GAktCCnxTJNtP8givqwhTDVWDQvXDpGYju4",
  "key10": "46y9KhcATUhCQekrTb3G87uhmnkzcHg7pQiJMe6T6A1cDXwpJCk7fGP1C3qbdRWQLWQKri5XEza9UTdJy7g6oi6i",
  "key11": "3bDkhkQ4RB9dxHPYE8A13xx3gTdCQUPdwky1A21Si358HvnsVDy2hte7g9dLtaA4t7b9jR9PLxRn8cmjsfLPGBga",
  "key12": "FVQL1EtHTWdeXQANVC8yDwyeiVsoCuSL6XJFoDg8MS7zQhcRjxtVJbMpuUwgRfGM3cAwAJqrSSSrhicTBJn13x5",
  "key13": "2yJ2pM6k34WcCrKkc4sxKuDxgxbfGV9uvYdUTzuaFff9a1yiKhvG9NaogqhkCCGXffLuVs25e6imVu3erjXw8MAV",
  "key14": "4n4dvGdMYhDfXh1Y4UJhd4GVSDfmCKq9SA6phD1vj4piLkLCxGY25WJW3xTUdvkzjVaoK9yyqNWnyUaQuVzcmF28",
  "key15": "cWKvHg2jpjRgrC73vqwj84iLxT9W8iMDEx2Dn71G32Wa6L9faoC8YKE3wD8Rz1WYQLJ2A4sRdWk3YVTw1mF92Z3",
  "key16": "5RUAMaRz49iiftEzM1UobrJkN1VYTQLi6QMhX8bJAjMzhVKWmZEdYewsnb8XTb4wch3s9CJL8fDBKprTHXzJ3iZS",
  "key17": "33QPAkbBnnYdvUsJT9KddX2yANQGd6QNYFLZ5U7zQ3oGG9RrrP259A6b2MyfUxQjdhmJ78TDMzMdsHEszv9KBXnp",
  "key18": "54xUZGorxHb1L7aN89XKMZcd2cqtiGMFZgRN9mkAiWSNKCKy3oY4F9J4WAM4kdfPjBLLrHxVzH5YZkyPeoDagskz",
  "key19": "2evkNuPfbbhj15q1GUNeiki8e1sE5x8ccWvW6wWaQssoJBHi5YYFdkMrFaCPv2k2SGavkWUqrvdN5uWDg7va9WV2",
  "key20": "2GSRsQy8FU3adWGcHWTocgskyvymYiN4XHDeJasL5XSnUuktJ7WqgVxoQ5xM8SRfURLjKG3JsteVRrTRm2Dd2rqK",
  "key21": "619mf534k7eT1WHzmMKDgydiPCxbYjv3GSVnewGCcCAVtQRWAzTbvKsUXsv5WUTG8xmMELuEdkaefqiem7LHXm22",
  "key22": "3dapZ4aJodP5CJPeM5CEPyM6ybNkMJ2v6Zz6Kk3bbCLBr1bRhYnkhTQLZYuLxx9JLwo8AHCs1HndWhZ5btqWmJzR",
  "key23": "9pe5k633TRMXh53V4yegV7tKHVptso631B1gHxbWCgWnriLcareYTzXXHsfJqPJH1uQb8h3dMFJvcr3cSMbK23q",
  "key24": "3rNMXKp96E4rz1t7TCboe2EZLbt4VGi86iD54kqJVqbTyjrpahwYxKqP94WjpDnKr7tMfDPkMFdozkQyFpM3ktkK",
  "key25": "22Tn6ZbFMsn2bWKP7VdxN23FBSEy5mFobEFYfhBkXohHskwq5jBjmyn1RWYzdaicuajunrvvz7CgNYwQsJZUAbRL",
  "key26": "MgGebwR3K7w4vXXAXGUtop9zRekKMiAvZVDraKvCUXHCeoVfHJPUjRatEf4t2ov3awtXnzgSrc8i2oyiQ1Lmdrb",
  "key27": "4hPQKpgSECebZLiAjTCTdkUppKae2AekfiVdDWP7peFATd7KFJqsurB5myxBc9HhSZYkY3cnc9qNt72f1pN6kvH9",
  "key28": "2oJLNzzFigXjYXsyTkkXa7nv5r4YgT7bcZWhrpa2VfLUZcs4qxLpCpkG2sUPD5L9n4h9bcJoRkfusmVUVPSee4TB",
  "key29": "SsQctC6FTHfh4etn21k3hXJon9JwN3CUYVAF6cjqL22hmr6e9YL4kLf2VdgWokSJ5JjnXQuDFmXJmfeZcY19up2",
  "key30": "367ARLarqFn2bqm47T24NrMhhx4U5dHm3UXaprGr2joC2AUKSy2aqQZZEn1gwxHQHdYAFQpb3X5gNbZ1N7VVgxeD",
  "key31": "kCpzNHk4kbTn8od4H4MuFYEhBYXsuKsJaXDBeZu7N7oTR6ajPP5ww2W4iu7zwEnmcSVXZvdyhHDo5VM2tS8px93",
  "key32": "3Bst1cqSrgxRDVwrsKasTehMnh8Cxycmp5Y6yoTGwQcUcnmCJYfbRBq3mXhZFobGE4tX7S7LGvZGUaWoJGyhsvYw",
  "key33": "5ANpRhZXjsP6Qj7i7gkzAf1ZzrmmQWVX3Dz4hByUeNVTKE7TgLxBWPcoc3GHzEHy3EqANes6vVzLmFJBn1pEsA7J",
  "key34": "5VjB5eoXVAWCS6VqtKfqseUeh7DyRwYzHXTfQCft3ecTTt7yt8eNgAM7aUiJDWaAZXyPZXkcsCiNZdvKnF8nDxcu",
  "key35": "RT78cQJfPezmeeXVwvDU9MbB7SsQnM3eA3vCDwMSGi44uNZ7QwoxGvmp2dszMhVHEE18mPe26T76TVnVYsBmU7B",
  "key36": "3jk5YtxEFWoWC8SzHf1bHgC1Nv4b5qWeWKjsZCqwasnN3TFf2aLc5z2wsS2VaM2zTWFESAgR1xQ8azsaGNv4g8eQ",
  "key37": "41SAjKFC6qRbyYbjSzdFjNYqBjWcsJ5PNVRZjQgreeuL261qzMkEfNkMVwiHuPG4Hwbu7CTyCF8eMoUhWZJNEozX",
  "key38": "53Yr5s6XhzPor8SJgUuMvFJKpHXNa1pPvmXr95qFWXww4KnTyFHTKNpm5Vg2WSGnAJmRuu5ZasyLznF5k4BqySJk",
  "key39": "2W1m1PpnUeDBFixM2BeciGrRHYSsAEGWNdgqN9wthBXAYQp5Hib5SV2qHRD4KwZtSukUXRdHyHw48vBsKq2rUwDK",
  "key40": "37wbvC4JS3Cr85AETg7FBzmDbKTHsjtA8x2Umb45X2CtKBFSC349CnvR9ytKoYJcJSSjv3hMrf1wGjeZQi5gvnJr",
  "key41": "3u28WbXZWfg1GFxxayVKxAdCAjtPiEAdqxsMPUhL3HYPm3gL5kSm7mPLEnxweLoJhj5eHe4aZomyRFLYhbopwZaU",
  "key42": "5XAoPYUiryQ5SJw7dZizhGnmV1hGDc14NftLcKVeW2MrpQ8BGVagy9mpwomybvmsyuYpzsMze5J3SBFLvn1fLLdd",
  "key43": "2dysoB6gHEPHm5b3fmwTdxG8DhqTjqcKHEDCbyZGr5ApPD6P89mGSGaiF86mgepu7DAnebY7hGu8AVFgxHQPnSDv",
  "key44": "5xFGb5qG3S4NhWWGiDa3cfm6qn1DLW9c9kXuFwsrwZKRTGX9yMMUa1R1iMwEhWj5THRxF5971ZsS2tW569618dC4"
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
