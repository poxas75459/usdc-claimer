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
    "4L4YXhaCs56Puq1T9wQ3RfMaTgwcw3Rdg3i8grDEQhgH9tmb3Zt99Q6fSCJFLmUpbMNjnQ8nMNbr73srdLr1YNzv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3P4UoZJVDRC7wQPp6eE6EMiZ9Az3unYqRTQ5pahBED8gmcpDf4Jb5B9d1F9vZwLazHyEPHf17mHYsx21Rpm1TqAP",
  "key1": "44xeeivXaebUQCE1ufRyxv8bVByDiSV8b3cqdAXZ54itTGdxMh4v8WSeHX9WCNk97ACF2ioQ7dFvfdp6TKSKrHjo",
  "key2": "iws3spHCRMrSp87CfpsxJPdMDsBwLsnjxw9Nyc9PkSPWLxabzfTn9jwbk8pCyYJfrPFKyfpi4xkWkNNC2m8NKyr",
  "key3": "4iBaFzSPfiph3kKEex9QmEQiQsBft9qiP5ttnrJBqHyJvRwm4YXYyyhRYjpvUqS3kevCFnqFzjGAxvsGUkSouqeF",
  "key4": "59MBBLFR7oF6Npc4md5idCAp11hJv6JdfugNoRs2sFVtVi8WN4crJFpi1XQir2ZZWuWii8SVgLMt8XNsy3uYm1v1",
  "key5": "379eXU6hRrPFypyYqURCry9urw9CfTdf78RrZizQ1qLqmbfZVbLsxtzfxi1gjMQXGHgBGnRYwEU1aZ5nvmhBg5Y6",
  "key6": "5FbtkoKPy13iR5zr2SCs1WTk46fhoGw4G9JVQP8UpXfguEusB1UX1pdLvr2S2ALwxBKXHDPrRZS9stRwb45miqPT",
  "key7": "45L4yLYGuK2gAVQJdZt3SspLdnzkWUJUBT9g15pN1qa9CV8HwRNsdCTAYGUsrrZVoBVeeN7rZJCULjV1Kn4V9ndU",
  "key8": "2ssnZTDLy6KDbFAneijWHbxF9P3xw6fwSFFXjiswtpKpuwPoohr1wgMWjQqj6tkrnffJEzoAZ1C7qBA7ruYjwEGh",
  "key9": "4D4WmRXhuWXXZf38QMZorAsMe1TyQu5xQWmTKW47XG1ZjzeJzFbk6FR4KBHHx5hNRg8oR5PQ3BWqzH4jY1h1QvsU",
  "key10": "3d4t45qw7NU5NyBK9c81F1q8NDPYCd7t7aB1H6v9pEfPA7orvxJTXLGsRrM5dpA4KrSfscB1nxX6uHZoWJ9JNMjg",
  "key11": "3R1dL4JxXBUJs4d89XUGCNCHPe8SAZpqvSg8iyMeZuMpC5hk6Bc1muNjnUBRRTkTZCLrEhvcqKnhVZgke5N718BD",
  "key12": "3F3BgyEPzieppZ5NgA5uPmfg5SHLrpqP3L9xtiyfUvCRXDz3rDtgVTURrV6HCSAfDtkD9RSyvTcaTjWKJjpmbv7J",
  "key13": "53ZdFPe6i1XVUhGR6SsXt5aPca2jUo54SobZ439pw7LWGHRTqfWysesiBsuwjraAULHyvfb4Gf8wZJA4cm8H6Mrh",
  "key14": "4kAXBbaZJ7u36Lkx75ZPQTFz7WuaEME9NCD9gPtEFp1jjwkRsTGnyepDW5JsR4q1NEt9opxtukWU5nfnzdG5mihK",
  "key15": "22Z6WT3R2yyZSEFaAAWp1UDEdmmT13Qwp2KhEbGHbsUhszo4Q1pSDchBHNoxQbeFySi93hSZbw3VUUQKZPeptqYR",
  "key16": "2myDaVWRNAPm9aCcubEDDAdfKQ3MEaTVJyucABs9qj6W9uhoNL3NzMmZjMAN6wJBd6eY17cP7GB5Py1dEawvjaqu",
  "key17": "3No2kFTcSCZAMtevqrnpn5B4tXznyFT3R82hQbtsGhkGyYW1KwFNVvbxkPhSrr2759zVLHi7PZfsMkZ3cxh4RdAy",
  "key18": "uPCWoK472fjAMTxnYTYMLXXtuLvJqLLhFdzQy1WD7XPAZqHabwasA9Y2bBM6L7HigJmvBuXr7yFQ67RAQCUsC7T",
  "key19": "2u6Ct7PbcEkb5B2s4uAreGxcaTx24sVCNah7S8cXqiccefmCEhnyx1qcQK2VoEmkon3qLyLaF9PnUwW6WAZVnkAE",
  "key20": "5mrktYzFcfapUycm4kd7ZiLFUzShqiAgydT5wSYgq87jfCkSgebytQUrcix9puEUaQ1mkQMdz5uHsZ9cgReG5Gea",
  "key21": "4abu6EANV1gGnQkwF5326HGapLRXunK6MP5xWEf52yDHXMHSZB6gsSGkEwLhYzr2Jw8h2o9FvCL4DzLw8joU7Wem",
  "key22": "2yvVbonSQ3wugN2PY99WpkcozHsZcxa8nLWxuBHrbNDggJbcDfdMnik2tkFwp2VR4QpjAaXVLU6wt6FbQd1Y4eER",
  "key23": "27qSrympMEksuefumMiw2uHbno3aBUva7PBG4WorPJWQuPXxzchwJw6r6LBfFvw1tocmegvJquDbjvyjDZbTckQh",
  "key24": "4xGFX3WP4q6tMNWi27WuiKukWptCmxvPu6Lp4zemk8eEUoV6y7GqWBy5M7to8gwnkFYHjAusHQPtAZ9J22wAHEYC",
  "key25": "4sDj74QpBaCLz94h8pzanvT7dBAEnmGnzRT56QpKn4uLnrTtmXBwLuDDKkADKYNpcxh2LsJaAdEDzumSD2oZc7A6",
  "key26": "G7HuhtF4x7AUeHW2HyWXPeFSSEWTnbMWHJbVTJc2hBrxDNBRmDoGpzbVwNfi7VmUCVZFrL1tbAShvwYGTyM6ZDG",
  "key27": "4M3Hym4fYVJQGc9Phb2zVMDdB2JsWpRB6Tg928fv6odWFTyk4kbriHyCTboh1sovuPYxBA4M5hvFASGJwK9S2K8a",
  "key28": "BokZpGZFw8RottZ84jLLVsSdWmLnMux2EpVeA2giQZ2WvjJYh92DnoqXdtovuVQyt2idaoQJ5ghsyKveDFNrRY9",
  "key29": "3UtwqPuvVWandLssD8nBmGDKTXSgbpKqMZsuW36CrBo7t4Ex7eUkTn6qm2vkrLrxJaEW1YCiXRthGJ4eWF3M3SHD",
  "key30": "468S5Hq28BursJQN2rKbHQkZY3DfWrWmd2RSjkhF36R3qHvsTfo6d4VUeMsQeh3H4Y52z3VRZMJ9DegXDcM4bWFw",
  "key31": "MXjYxosnRVUzKvDpJRWNQjTf1EzpazLjwANeQLaTAuvVPkMhheTCkQehuQ5KA8BCfZWqnd5gY7eCGFeCaBQErGh",
  "key32": "SoYUnZz85HA1hKFUghiuuqwHsMLHhUUprgVeKfRizFBhSxY5ZmFDCpm54VZNzBcoVAiBXyiwMfDKM78Qz7NAxeN",
  "key33": "4urMUkWkr8pzCaVmGEMTawRFKTCfq1jzTeoUDXuPnvxhkrdfQJrppPs7zD9JjpQMvJ8G9JDQVrazRCg7m1qWe5R4",
  "key34": "C5S3PwVbio5H5giKNNZ2ukRdfAafcukTLtENEVhAWy4i2gyqA3BGaUvXMyiKm7ugMu1PGvcByPgDtdTMAemLotX",
  "key35": "eZGex48vfZo28e5iinhFi4LqNM4yGbrNFBrhF5QmH3kzBmrxDCEDLL96CYpdZBWrYy3zjdpVrYUywvv4YVmAUe3",
  "key36": "47RcawxaxBXPR62xHCm3vU7v2qGWsXWuVuohBhSGSnXgsx9Dq9oEAQUfzqUgYDeECggPYUdonabYmbiZp9hLy1VY",
  "key37": "5goab4JQ6V6YoMjRGGBgvqXUrMUMifcG3e1K55NbuxPf4n13dt8mR3j4MhGt7TH5jfadRshVe7hmo2EuYsQve6iS",
  "key38": "9aZKMfsva8uqrgCU8AmLWtkicHpgKewYukEif3mNBcP5xRwdJVEYfrAc9paYQr9W1PMZfsKSH8d5yxAU7ThBQ8w",
  "key39": "43x1msskFXqzwjKuSF4WtwBRcLmA4vkoGxTDqZbZNNR4iN2KqDY5aPnZSJuGRGCkaWdH3FjnwteCDBcxnGfQHFrm",
  "key40": "3GwYYvF1bXhWta6SXPJ1qpkc1gWskPTPLYEaiVhfTM3HoA2yhd8jQQLfRkiiSEpxWsELs7iXsvsMb1Y22T5ZeRoN",
  "key41": "2a7WorXFrXrA6s6if6eh8sDjJ8v2fvD9Q5sH2xHjtJygEGMBQo4UfAmm2ws5rfTmxvWWM89J1fYrs9w99SEaQRw6",
  "key42": "3zCsxyA1w6W4jduSR1Gcz9x3ApW9JdfWnBgC517Ln8eAVoYSFKV2QJAAej4huRWUTsxDD6yFWm2wNiHwqugoP4W7",
  "key43": "58VdRt7DfdVBp2iBjWfqy1euVnksu6M9hv994qBbEKftEk5nqyJR7Su9hbKynQN3VAwthAKZD8vyj9JBdLp2nyJd",
  "key44": "2fMfdEmqa8W4rs7AmLPYVYmApySTLzecLPp272vDHxs69pi93XdE5LPwg3N1q18cdBU5UbRKcN2RS5CiPQNc9mNY",
  "key45": "4iv87nK9W1R7D97uK9ewua43wf6njGYvKrN92X1N6NLTTsLv6UmtBezQNyc5rBzYXpg5GpTALexYL61mBt7FRWMj",
  "key46": "5odGq5rtQZFgJmPx2hVpkLrSQzXdjuPJCD5osmpGBdjPG9EMvAC4mE6xhvZGr6vr8pnSHBu5TRtbf4fFBNWo8m51"
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
