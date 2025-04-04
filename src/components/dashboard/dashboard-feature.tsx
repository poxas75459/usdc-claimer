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
    "4EDwVMcEyTnYyGMr9L9LVdHNQZzjyE8SFyWVsVFMidtnE9G97PTWE9mkULNBqxp2ktg98Uxgs9eva3x63cPqsUD8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5VmUpiF6tsfD4NbAMMRxmpwVZ1LKbKx41UYmK7dH7bLiv7s7wn2gBo4wyaC5HEQjp9KxQLURFQG1Cvx6NFxTzDsU",
  "key1": "32YvXFMGaaHHGN7gNvNApmAdqTXZYApCznv58YJoLAaFnEHua5uFPWURuXiPAEpgXf1qENyoBPVEtZL2P6o3gVaY",
  "key2": "ggp3RGQ1UgHFXaRuau4bbtBABFCKBam1PGAwErX7A5V2W6que3oAUhnCGeEfR1CMQDDDJxG65E1ze82M6y97DWw",
  "key3": "22qpQew7KvMmxJ2fnKaDGngaURTASjCVrSos6Q1PTomfxfLNv7NRZCzmyEw7eUj5zFnmzvp1sKceoTwgT2GsBsem",
  "key4": "44rPxHb6Bsdx9utKHoyKBA9VaZ9QPpqgktKcZgeRFjKFsB4EBM6Znpk1kjEvT21cdjrB6nkTdE8pwTVBDoZzWezM",
  "key5": "4yMCh4LfgsUvZwnhJtQTymccGzrTj173jgw9wGPsFHg3tZ5V3rxvgyn9MsNX8XMCu2cLP7KwBSJG57axAYPjW8QJ",
  "key6": "4XfxSPoasNXsBJFTNJWHKRbbVrdvc8ZPLaECURxobMscAHPAUdzSJYGwG1eqnsMcha5YRz7iuj21Nh23G7qWeGsH",
  "key7": "5CohFtPkPyBzG41VLfm49XBiNQFrQmYWPbmA5eCdyzWUkDpKJVirUuJgmNzoKtFSLoqh3V3eYGmeZNYLkAqpgHVe",
  "key8": "BiZDpQvVnCjiAFNh4dVHVPfTQaRgge6JiDH5EaqUvsh6i5FixhkX25qVgU7RgTnHDVykPy5SLCNPydHZb9FcQTQ",
  "key9": "2rqeUiBXA3nEKQkFNZ6b8YN7U4sDxh6oeBb93nGH11WRVCPH59z3x36Pfy4NGdrEdL4TJRnmcMPJgfSodQfXuECy",
  "key10": "ji9KZPn8sgXTxKjzqvnmbukPxk2qjVoeR6sKomTca9EWPgfbEEazjwHvM12Dc46yrbzS2zCiHRnpHPK471c8ovN",
  "key11": "2revkE3qdj73m5dF5f7Wwm6P4R6AP9kQhEaryMQaAqk1ceQZqBhvGmJYk5HkyzFgQV1DN1CCAR61TLFhVYGhSqpJ",
  "key12": "2ZK66M2brQAeGCr99GX6HNn3pJcr7cRzHEJtNvHbTkRqty1HsY7QznSP3UvoQ2Um23NoWc6M9dYBJ851nPEktKqU",
  "key13": "4wqsZPPE1UvVWdnB46j6CefGRt9TQbmr1dJhfPHpDEkm2dDCX5hbUxUvFb1BQRL8N2WcB5McMCHVLAAqfkrqAHbJ",
  "key14": "4BYExXUn4tz3m8UMwzHPTd1m5avkbULnmxxy7Yfff3pbKFJ6bnCZjnUEBCFNbw212gk4SmjLqDfZTCRdqT1D817F",
  "key15": "5uHkcjwX6TcEfFRZT28VqG5s5mAwKeqVizKeSGoPqvJGHaoCJCUJQZdJUcautzgzov3DRAFv78ZhVDiotqUijWBR",
  "key16": "5yVpNvdkiScMnuExnV5NqMfPpCXjK5WJNZh5Eb3tP621GvThrpF3EASAnkWJFSV5uw2ZaZJwBpyb2gS9N9u6NdTM",
  "key17": "5j4ACYHcFwHVuibLcSS9iTfwFriTAaE3F1NJo5mnu2ujiX6gvqCqUhnxiWe6mEuDJ6qfMJtX91Xbhr7CbBoNP6ig",
  "key18": "5F5LY2mnc3C87MFu2Prk7Nxs6srMMZQK94iQ8oWRnEYrpcHiHsint1YzDqoeEdWy99FEQb1qrQGqYzxYKj6tqSUS",
  "key19": "3QZrZ4VPLxGmPAKmRJQ6gw64xME1Ghouj9por6tCpgBUWGm3oT58Zn5QBic2pWUCWjYGbBui2xjaKYX6DuCqeutb",
  "key20": "JyxUCLR6Y4cXtqzrFgcyyWrTrg2TcVuH9sJTzrbGsYsWnVzBb3DcT7KWf6ErpHbMt5rcy9LXfRFmMR2SuYRxf4e",
  "key21": "4KxPSGFPnhSvT32CRxp3WD9tWkvJrTkTvWxJvKpUT9c3aYiLWrUNLZBRBARZEtwg4EzgKQeua8SrNQEWde8BACgR",
  "key22": "2un4XLxczm3YN9Wmxr3v3DSnftd15jnZGJ4xLmixNwzxbdMFEVDkeFFj4BEHYtpqh48sLSgLTDjke5nsQy7hHLnn",
  "key23": "2yhEEP9GZmN6KMVLUxr7JjH6QrzEDuCSJaUfumsY5WJ42u14CHVWyf62r4YRCnUkdpMq5aDsWw5ZSnwG9KUhZPPX",
  "key24": "4YZJC6B8wE4GB9qFrAJsd9K4ZBdxhUmidvf8itME8rVJmEZbtYMeG2R7cn2beHCNi6Dkc9hUgWNTWk77crkUnjyb",
  "key25": "5diAmvNK8e2khcbGoRaszhoiBDuvPzKUgM8KB6feUpUbkyTpJBPGBhWimobYQnEmQzzdQwW3orqrQkSEJ6Pqrd7j",
  "key26": "2n34WBNkV4AZy3V2Mc3FW2r5qtvPg2ZL96zwY6gtfABZjq4umqZ8q2GL4dmWKyjfEYMpGUv6NgCNQQTZmEDAUosJ",
  "key27": "5nEp9e5V32SwJFxfAhCryDAqAbJhK17GALgfv2cXMX29oSMQkDosV774dCvVZxGYUDjLzW5334qm49iNJkjjyUgk",
  "key28": "5tVhbUc1UqpvTY2PBrMRy2MpQgX2su9HxfZG98LTXKJh5CLHjzFa76t7FvJRWNqKxDvdViDkx7Zhkns3AyYsR8KA",
  "key29": "2ncb5hPKnSmRRGVUBYfmaEjH4GQunnqCm6JM9Zuv938wsS55mAFsFqhYWhABmqM1JVgCGuVjZeuHrdEC8eXEhugo",
  "key30": "3qAy3rfrATgaU2np25z6AD5TN18g3wtihSeGqqLrNtSqsN8pGTbNdoCooBVB9hMyq7z2NNgcCrbfaNVXvKXDFmFk",
  "key31": "245KEopZPwjTYeQBnv6YbiCZTXiyMtiFLs9qUAD3tQ14vAbNtRFNL8uVFqXmVADDLE5DJqkf6Uqhh5fDmitFM3rg",
  "key32": "4zPCbsrsnrX7FquT8fGSNi3B4hZfEnVo6S6pb6NmukiHjr5xVwNx6ztqxoEtDWmfBHZ16m55SpUkGARWBPPagtnW",
  "key33": "3Crt16mYHmVa839rTozKu6QTH6exj8bosk1i9weMeXuvonqG9VTZSDYCNqMVe4TVVsa295W2DUfE9om9wjbJvf7o",
  "key34": "47kcyRbJUZCPVhvUjAUQztVknTfPE1vYmThywBMv6v1LPmDCFtiqr8KntBnCNcjGkm6EyCxXzvU4gCSvi2CjDEy3",
  "key35": "51ZbPsFzkWbCWShiDBD9pkG9QZ9zkpKooFXzXvEZ6e4s95Wsp3jvR5HznFXZPdWCgYF2X6tYfXAQgitRgA7mtYNR",
  "key36": "3RUpRHAfxMXJsEN1vpP7WLPgxyN1G7ZkoBMogiTU9AKFSuSRxDs5Y5BmfYL7HytLcGPKTV3U49TeRiBTB9TrU6tC",
  "key37": "5URYMurmWKGF7jYz6eNXK2P1PVTXL3yux9GrhZbXkzHAqRjs4freJTTiwhwDmyVVPJMWQJkPBdSboPsCSa25cZGr",
  "key38": "3qsUcyj5fbUsqwnxKp9zsLiqPC5XVnm8HwJ72a23YWFmoTkNLvMLYCVRdg16Vi8Xm1hG4hkk1Ge1GrihsAkgQKdv",
  "key39": "4Yf3uuV1sBufN2SWYL5mTD43LwHfs3hfnoTzpStgJETXigxJe5WJaPLPRPvNpnjuz1pdDVfW8E5iiwJBpqirYb2a",
  "key40": "kBhS5V7ovicsQz9Qvvnt1sezXDZ5XGMYxGAtRcHWPbBtmwB6pUeAjqnyfWtG12cxdQwG5Q4imKw5QtCiqMUzYQm",
  "key41": "4JXjSqR4ufMrga69HPSV1SseAGiARHbmdSShjpUwJgXhBzQVvD3Xtc9NmEhcy7gQTMruWRtnxNfZYvhYmYLzpH5R",
  "key42": "5xamtsPmzbVFJi5sYAiUMHyvidDXPAVaZHja7hAzbAMzYx6Z9md5urfZ2CupMvWD6gvRAbBXB7WHsXhwhxARHySr",
  "key43": "3nDNtDFYfmnzYNpeWLv2WGGvy44w9M1dm2zS69edV9CdSamizUc37eDAzYZizYHPzWQ5UwdMPXqq8XpAxsoduLfE",
  "key44": "5kN4etcJ7nWW1SfeX2KXh1upFru4ij2ZVwxpcgVr79c81iKKxPkesxkWyRPBuEviFWtFg5EKmN2HrrNCBDkVRjZL",
  "key45": "et82vdfp9me8x5gAcogkWYtJhrFg3T7cALfFnLuEQGECZ8Dc4uHk1LwRiEy5UCjJrPTUp2Tr3HccUhkPhWsdewt",
  "key46": "3LUsbRgU3ymjnrWyYqjBMqmuiPUWiBPzh8jn8GiMXjRjpYkV8JwJtqdR73Z9cJBBFXgx93m9HTx9vKxN9jN2X7NS"
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
