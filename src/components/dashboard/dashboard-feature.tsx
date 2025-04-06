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
    "e8GC9QtPcsXzQxMa9Xb15JdMatpvpNNYfrGieryQBUuJP5icB5CRpyrBLUQUvs7xNiugK9GN22QRsdbLNjopfZX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5k7QWvuypafHZ2jGDoKaqnmQZDqGdAdSRUwt69a1fdqwow3YpnoKnuZavny1rk9HLmVXM5wJexbMiNjgZwxWNUfc",
  "key1": "44QhyxrphcofxwgaxG4Y8GAZoMnzDgeHwoKJ3PQWDxK1pHVUoqTqWtd171ZQYgEKv576RW2UbdvKgyXsUnVvJivW",
  "key2": "2Cv3xLSG2QU26Ebsqkekr67mLdVq75SKCnPUz3zBjuzDvib22fbMcPzh4eT2G1WPufTvwfKj9P17bJdb9WSY9r7H",
  "key3": "2RmB6kun3Yk73debdLTLLv5PDWWLLRLrsMCDbGrkxLVG3zc4udtCqgV1GskE9qniEuc1dZTkVzy8hQXoRv6SNxCn",
  "key4": "381q3tzMgB5NCGqCs85ArV7uDmR5Tp6embgCDrwN2qdkrRdGxT3vZMF4DL25rfvvS5VQRbQiUnJHLfp56BDtK3dM",
  "key5": "M6YML6dghypa86A5VkjBBPqTj5PWNGLCikabW2LSPD8cKcUxiWqpBffcHKgWQFn9xGczNeU1LkcGvQFRCqbTvm2",
  "key6": "45iG1n7hGZ8BavvHxXpvMxKi4ArENYPWruef2g8urvciEyEhG6KTMzDBsdw1kBKBtYGyqJu1J8HCacU3FVcukSMG",
  "key7": "dQGUonabhL5c1qWWBLhUeATGfTxPpQTB6PWR24SiEgdhQNieBDV8WPr668DydhctVPrahnLzz43vL7wccP86bDF",
  "key8": "67HkFdaD2sYFEF6RXb2Vd3wa8AT1hLyXamForAmNGeMqRB7UzYf9LsRqJgUZNAnaNqJLEuVWSPrs3FaV4AEpRTCM",
  "key9": "4LUMHHGft4TqrADn9JZWRvxgYTz7rwoQzxx9gfumawqYe7CfXcAeqLkxzcLKxxnc4KM87Qgi5wBDFZGMrvmRUEsn",
  "key10": "2gpAhzQPXfrybymcQ3M4XyAoxCWD6gLsKLhixNi6KSXZ8ssqAgkHowiny1GiByehBVhmTtJt7qsqhfoPwjbVUWyi",
  "key11": "5Xjo83A2y6odZF3As35hY7cD9k5yKWvDHr74YPrDKtbUnUAL4BU7MkGf7KhrqevbupVJv7mjHvqESQ1Hgun8gSDo",
  "key12": "23zvKqsKmesdgNcFY4K5bRGpVfiknHDdYov1YhcYbE4PhrQqqPNfETMiebVrqwihRiR8ybWX9NNCgiDD64vTBhEo",
  "key13": "4i4uw6i538An4S6CgUP1qFnfoWfq75ctcnMTeKemivGyB1ErYeR4byouZjMUmwCdn3wD3hLYv11hQPzV4WBFH95V",
  "key14": "3v8N3EuitjdjwczcaBnzY3jP9P8ZnWxzj4SX95h9uUv9N4krf8UktLTPEctp7NCfhKrWVCJuob4dW9o6Hzt6FcgY",
  "key15": "3uM7aqxUvZpYbBVZprPjxwxxVGWnnLw22VvsFKicPpiZJwezfPeGNhJJUDjn9xVG2G51b4bEuM79xqkiubMgB6u8",
  "key16": "5pikeS3zrkgJVVTFAcD9ACN1hWHQsujktTAR2yJEyGTGKLVkg5MRuoANbFPLLgDpNQioy1SPUrUkU6tEU1s2Awqi",
  "key17": "2JgAjFbx9df71aVaY7wFLpHWQ1zFYhLxruzLJP8p9R6cG7Qyjmns4eZsCCdA3UX5Bw3FLRam7xUcrtMWaW3tSyHc",
  "key18": "RqqDPWo4SHQYdgfbMw3thmuTgsu2vhQEWmWqvdUHAXceVWe8xHxmRyQv2m4XF6vp8njRbAU542VsUNEuMbXgGXQ",
  "key19": "4aFrpuhzckCa6m5sTQnDK4qnLe3cvaTNiStUqRoTMxMMpk5rYY3PgGsE9u123Ss6mqi3fcKQp7646XATh4HJXsPC",
  "key20": "39F9op7qxxT6odLm4WD5Yk7wGefxyCDNb5QaJe27oBPqn9uFvXLDBCuMmkJtBPrNq2uq3D3uSSY9aGgCBfoGQeTv",
  "key21": "2kQrsiS3nTtazCEG7wbtg8HXikpz8yJAjAPfG6uCDBWCgbXUdsNe7SHQwTnbzopAYAirKEtM44hR151nGMnSK2qx",
  "key22": "38bVKfYTuvs3prb1McxPPoRNPWDy1toZCh6QSnSJ96robAngjEmvLi1A8AL8FEB34QQHe1p8xU9p3FRDPjUYe5pv",
  "key23": "zQKcm5hneX7QS6frEs8ZBU72ZxKJSiUCNCGfTTm2Wi2eF2XEnA4GJTsJ3b5htzJHfhHdUKz9W6uQfXZsDgqji7u",
  "key24": "2EFEL5THoWwRDej5vunqgpCNgp55L3Kn5PAJySNMGs4LsLw4ij5c4Um5PijXZQE2Ez97xNwPetLuHruRrz7DG6dQ",
  "key25": "nfR1fqZ2zsvo2xjLfYGD5pw53SpibM58meAcp6LnjM8GzigUKcRMjm52oFYSdqx1HcmPSpXMiRVsD3ier3kqxZY",
  "key26": "4tZ3JzUMdW5zNuo5rxZXye2HsUuryKRv98QEQHTpaMrN8FyUUQW9GxQAuoyQnShdDUjmQ6DWLPFdL72u9L2QDdyY",
  "key27": "3t8LWiSZ4LUfcKAYGrwPfAcAS2nwGdcWeeuXqAnhaWY413Dp9cm53JbHZm8od6K7DXXK9utH6AfiAAFgQ9GBUjeP",
  "key28": "4NKa6VJwrRYgkEbs3HiBLoR22FrHoKgzz7HdN6DC1JgevCgZRsiDDmn1aoUentZsDKc21XjJYp6ErAjQ9Pc1W4Dp",
  "key29": "5CsJSoCBACAKFh3WC2ssuvJmU6nuMGbtDWVP9aWG9wXWLzFiM86cHGdVuv2UMmzAVGaTeF6CUGydYd7Wde3xHYNH",
  "key30": "66RGifd67S9ehNQ4TDKZ7uLHwMdxvtzfigwv5xAx3wj2wUPx4evDFerxJ6T2AdRfwUKZ4rByndQPf7TUg7o2qKyB",
  "key31": "5oAEUDpxdSjgg1Gg9JdvHBrz1J4EH5YaRmkKfVXPFwTK1WFs6KGCzi8WvJhM9akd8x4PWF2EbZumQqgEyBavMuKb",
  "key32": "5mbEb4HX3AtHccSFvjHu6ymGcczuaGqfuoewXi7FEKHUQ4bg9LP8DfTxpuekmUPA4dwmHKUv1jjmbcyS82p6CZvA",
  "key33": "2RQiN5JRR1KYieEmnkdQ1MdpgJXMEqxbhdrfEJ1sDrAi6aRqnqt1uAa3DYJfHKk8WQdwGM5uWqEU6WoKt8PbSk7r",
  "key34": "5GVwBLsnjp4EuFzBpJTYPs3FwBJUv6DXeuDN8DgjDoMHpLPSp2UcFUQXABbYPLkayrEABTAEjDdrGPJxJGucH2sq",
  "key35": "fTP22S1fyfiNpJW9rCENtPcaSwQrZBL3mQXwEybjWGX64nfmXARhfmJoD6nL9AVcaLFfMsiLDBHAxj9bqDNNuWJ",
  "key36": "43SdRDxf7SeXFrPor1PbtwMBHunYp3Kje4B58gFHQaFvMybSQqpMtfE4hovn9j9KaF9RDFe5EkD9pbT1RUpwtXn5",
  "key37": "3d3A5TjYCvzYNcoksG9p1Q7QEEPVrA5bK7icUtjVmmTprpkajE2j3rNdnHwkinaUhNgmawEyQR2C5n9kFLNND8vh",
  "key38": "67gJpUwNVknmxS4kynvS2WDRVvbxMe5Wyk3kkmdnZM32v9dBTckYjKysGvbPPsWEbPYLu1uv4HkKskfMEa428Vtk",
  "key39": "2Fa2G1n5sqPcsMo27yDgTz1eQUejsmVZjC6iRJzFTSLkCRKMAXwHLA9nweBax8qWZ18MniCpF1zqCFCS2kcdu1ku",
  "key40": "4JcY3pVt5FY8ENVzfKtatfTCG9nhUPAbdJzbaZZs7KXdYQgqYgXjJVGXPoru8c7n2PrgGJnTw4qNET7kHXmp3SaJ",
  "key41": "Q2HMwrqB6X8yG6GUqrJuWfbpwSjXkJxHrxVHbqDRoXzN9KGpWbcCvJ2TA9svyzdqzX39N2hJVQ8sZqJRaKsnzVR",
  "key42": "26hJJVb4s1igqE68ivSA8G7FtNxVY8HxnE1Lo6gZhsBUeBtnbgMWfn1mtEXJtAKJNRtsN8GFMchaja5BnXhMwicC",
  "key43": "2bcMwXt5wLRSYd61QserAVqpnxUn1B1gyYqZ5dgWTEE2SCeQXnFJFc326hdd2oW4WUKS6qEcmz7EU7xdpMnM5NcX",
  "key44": "58DAaVgu3fPV1Mo1fFavFvMYPdEecS3Uhfh8cWqTZYrKZxeVxY8sa2JL8yVQKEuubmLQKfNDyRj4TAEqDEJv1qut",
  "key45": "51uchmwzNLGvTt5Axzg9Y9AEkVZJeBbzzKSxRYRjj6V8H4B9odbtRyJEQ6JEdMmx2Fe4cs4Tkc13TNUvMCzSo2Sx",
  "key46": "65n6Kxg9SHjjA7DNvMRqy4Nw8uMwbY6J2DgLBPyvXY9NY5WMoXHB3wGoEiwuL45okGKuvsnDiwRS1mRHBP1gYrMG"
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
