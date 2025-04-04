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
    "58j9MxaTWYXbhRPvuL5fVLQcZ5PFXrof5iwVWCCbgPHNeTYD2RVsYH4BP8np9ACZxRi5kNXZ1zDiYTvED2wUYZyj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "asthUPHkQpu7mdfBnU9TuA239X591319zTre8Utmru9PZkRh9wpda9KX6j9akJL4HQuq8XqPVd4GXjTJ15VsMni",
  "key1": "4GKC9DaXj5aAeQdqPXVG8bhjd7i94z9atGmbr1pidCDKHssZQ8UoiqvJQSZU1c6oZcFwjYTEb37Ey4v2i9ab4EvY",
  "key2": "Ks2VAsHXswe2XQzkmSW4XM37JxuYb9ckzQAMAraEnmPLDwNxoswnKLW93pGARYSfc5kcQZEaByRS5f449Vni1g2",
  "key3": "avwM13Ks8CtYgKdVT2er8uxX8RGeQ3Rjc8TKrwBU8DaXa41ms851N6pKW9zy8UWmyEoj2gzC21wBwsnry8mFoce",
  "key4": "42exMsBQ6YvtAZfvvochC6E8U7pHRXnFwfGFsf875y9ELQqueoSjhhPA97fs4Z7ofbiNk2KLSd2FXxDP8jxNssbV",
  "key5": "5fKUKmnFana7xAg6rA54EwbrD4dFX57FipemwPQXm49ThLBFDqmTwX6rb9S1gQWs5p3HtrZnmYvf1EYkMafdreth",
  "key6": "4uRK4JM8MG2sGRKvoHSMmwLqYoQ6TnrYnzJTy9gsBVxk9NQ51aeKBZVDXgGrWEkxbR5A4x3MmdtFWCLqKAbyFhSi",
  "key7": "3R5UUWLzE7D91Y5B1WaL3WxP9Hukbv7gS2UdGvgbd1k9MwqM84ZJwXUxd2gSJh1vf1k8FC2ZHuK7mkQ1r1SP3BRu",
  "key8": "fhXghPoHFSC3M9BV2WBysw7x3dFTfXg1kHaerpS83iAtkzfjYxiijpMsN2smcMB1YsSJeKofu6HNrYPiFGjHojH",
  "key9": "3N26qE64KNumYM6brT2YUCkH92UZP285bAX9G77Acpt9FovvLVBSD4xr8YzXuGzA9yL4GYCuoY2AZyLbF2ZFWqXf",
  "key10": "5SLBeweJuoDdA6fmJgCrjpLjJwrv7FbTTy3tCv4vve511cHSurp8Ur1uoJQM19M7aKDnvG5Xau5EgnyYpHRwUnSc",
  "key11": "2RmeRiAUF2R7HBGjJfrappQtyKdJx98FijmuCdmy1JgxEBCLAMi6xjj43ZeSnMk5B6CAvZtQrgf86ChKYvv2dvBg",
  "key12": "4MJd62SzPDbin4VmuXH4no1jApgwoUtFh5PF9Sa2rQBzTZk1hH4jcTj8qP5MYLZrjcAyuHahoYZJ6BaGCxw3Vava",
  "key13": "23w9E3hGzj4pe6zVfEN7nxVw8XDtHUBiJJQZ6cuGobPqcqkzKMBtd1NuzinbgMBUQQgSQULZKktM4QXbNqhyACoK",
  "key14": "2F71MGBEdiNsRxuSTZm8Rqqqsa85fygws32SgATofWUM45bPz3QguVTuXbWVeVzcNxMJY36X9shAdGWuAVqjrwd3",
  "key15": "2DW1D9BdKQKrkLsETo4MkESwiyCZafoR8HtRBkGUEwQPST3nuRGEBYut7hU5y2jsqs5UG8M1HTTYF9RnwYQbmpdD",
  "key16": "2ArQA6yJB1hhCpFTAfr1KTajJvH2fKTJrRMyYjFBDB7Wb84EXWMaiea2jaoCzLhRFyH8yvcPtwciGFK2wovpt679",
  "key17": "2vkSi8JHAAZeNNXTouZqUyhtzG68YeB5LKTysy1exCvyUihmT12gAfPDnR49rvXuQ6SHvwfxMzquwpJnjN26MfY3",
  "key18": "BmJqoA7dP9jGBj2QMVuUtWoe3fq4JFMc21nWJdJMiQeAvL96WgRug78AJCKBsW4jPhTDcgEEersjbuTtqRck25c",
  "key19": "3MEzC1YhQtLpUNFPepv3BsxasqJ916dfbn2cq5EP45fwWLW5f82wGReam9ksMPnXLzHs8F9NQUWBxzWSWDE68rub",
  "key20": "61ZeZvNViDG74caXnoP6R8vdzY59cKwbzevSh2aSxqwtFc8g9Vu23E3wYZH2EYccc8764r8LTT6b83JUmKvVtK4i",
  "key21": "5bpe3JuxhjZeqBCVPtCPjK59SZFLjMp6NxaWbGyc43qRf57MZHiNsqrQNx1KrN16jwu2bH75uFwc8M588TjsWpsq",
  "key22": "3iptB6Wnuwo3HUsGuNmi1S96Mx18b6WsXz8QsQkF2UCNtrfY1zwYqF83VGr1jrAJsNA41MLjy9As9UQqX3Gt4knT",
  "key23": "5CspPCJxrfAL2CBLedHMy9KA5QoL8GbPe5rtyLAGW2J3NjoKuNUxdynWuuiASTrUu3R4ijK9D9DBUj6HRaRhDQ4s",
  "key24": "2Pr8GbivVCYnDsnJGiRmfZufQ2HgtRuvQ1wQZ4h7rwGAJtxZAn6RyS9aChsmyaU8jXmqpQXh1TZkTEf5rYJeD5wS",
  "key25": "23iTb8xCsKw3y4GRjvKutY6myim3B39w52ipoZaGUFGyxg8gFaYh19gkUoj9aifhDGjiH2Tffd3ANox1Bma5c8vw",
  "key26": "4ThTdBbxxAfXVE52XNr3BUPKYoA1nhAUBRjkzpVxVrj7JegihzSKeZvzKz51bzTezM7Dv5uvQig3yXvwaCy24TRY",
  "key27": "4dNSHkD11jZRF4KJhBWgw7ApfjiCXY8uF93DFRvo1dpg9M8pXtMaiXY2i94d1pAiubtrnoAaL5GzxpZrnxCABrKW",
  "key28": "SKhY3raqQKtgmkd4DqRnBDhJ9adNcNE2kWv3hS5uC1HSnMXu1xTnowmGjoXZGA6i813kCKFQLVxtpoEqeXb28U4",
  "key29": "pUHmgQW4j3iPstdjdscZKyG3cSqmG21NnkBgnFYDZhzMBVwXaL8z4nwxt2GXX1RkNccTbXgKvrNruA3i3Rnutfj",
  "key30": "eMauF73NMox5bgJnV3qfZwgQrKEQ5KvJsvKwFyJxo3JyBXAMAKFMtxFU14tMaSTsEPbuPiSEMW5d8HbqyXoE4qr",
  "key31": "5ANG1D3qUybU8ozH4C5btwxjSw5E5ohrGdF5LFYayMbPrWmHNbBVjW2UCFAu9aqUDUjqph2ieymdM3hKvqnV6Va3",
  "key32": "2dmPcP8j6mAqJWaBmeNkk5QwcraiGJC5EhwqUH9FYP9AohKtrBG7udn77gUkTbzq1YTDiiAXzWFVPPjMMwERwLmx",
  "key33": "3pj4oQcADCpQQKEoTQikxp3JNm9eSf6nyufPnGFAkhTZPaeVed8aEjZVUqp3b8P9LWR7WPQbHYUHKzgiLPFMEHtf",
  "key34": "3pYMydcAhUmuqmKwJACKTrFBoVZNyWe5tjArPkdynkcBNgqLcWG7ESQtdrV4wHnxHiEby1SJ9Hxz9r1R1xWN7QYY",
  "key35": "5e6hmPsdF76V1Li7H9kZJ3VHk66fderq4iJdDYyTQ9DktHDy8bkz5dwox4a2Uuh5JvakDi8ohG3bk3DJoZQetQVZ",
  "key36": "3dcJXajs2aqoiJVeQCKRPPMVJ5e5gKpCyn3JTpB8raPzsTPRzSnMk4CtnGcarupF1WkacCTuxiANAXx5eGqG5zrE",
  "key37": "51df2nxpnjgMJYSAAAvXdqErecErNFumtcg5nKuNFq13nVtXoGxGDE9NRGT8ZZBpZhH3R3o9AKifTQgMEJA4nHt5",
  "key38": "6BMuHainKT1EqUwY4MnLNfmG7NEiq3zXwEUfzHoxbAMYkiB3KfEB8midECMBMFrAktNbmjdmRHY15oRh12Q35jM",
  "key39": "4VqYaqmNupAr1C2PHGsgpmZXeNTPSjmS2xcgQvnB3kgBwqandZG3ztWKdv3g2GLrYiwS9njhG5ivxbtXqyrm1Br9",
  "key40": "2jmtCZs7veQ5pM41AikaDgA4mTWRG551uN8ZB41H46V8ixuBfpqFHnSnpfEbUAx8JRGXeafPRDo9PZMZm73LDUm5",
  "key41": "4LFUmTUHkbpPdsyXAnmcqQk2qRiLpewETZz5up5tCkeP6StR7utV39TUwTQ4SX6YUQpgXLntt17JVPY2e99msxZ3",
  "key42": "4hq2cFeGRQixRgQu187Xj7Wgzo9cGYwLUUrpkJzZKxoNHmyj6t4sWd32kAvVcnffhafEVaiaV2SuCKJ8Yfnekp2i",
  "key43": "4ZDkkPMvDzcR73xcDqBDmoqNsKWwR984c3eFWorzQb6NR5t9y1PEmh3Ho3gWHwTjut491M8GgXtKAMG2hgKkfcgT"
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
