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
    "2LwLGmGFX9AtmNNiYAhnVUkoXLHpQcBn4j2ZVvN1FyoGErTVPBJpDTKWrEjQoAdDbLq3jUeRLHE6uAin6jFxv28W"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "E8LPcV1WFj8gA6h58akGno25Q5dpamS1zM795YECo3uW6No7CTDKTLgVkAsfuSMyQVBCC2ZDTJXr8EcQfPV9tLC",
  "key1": "T6bcXzbVtUvqsgW6zzXGoaBWHU1YWXVdsnPU7eTH1RS8kRPhM6A2SFhUxQvoC7rS9XzxiYj92z3YjGjEVatd5vR",
  "key2": "RzTzbRUtFoyCY5SLLEtVgbo18pUcyzBR1oP72u7F15j6277MifhAGuinKx1vkATYuRUcS7pC42W5P9NrtYps3rW",
  "key3": "26vEGazwzgkKA6rkJhUroG74bMLfAFRUs8jmJSnwwCs3ccBAZdWUJuTC3mEUBK8fqmsNQKQrrhFCodKyjb8n6xv1",
  "key4": "5vyvS9FxmazkCEDwnU6Mr8nZpyqdxaKzxN6CCkU8aopZz87xXutpQBqbnduQmb8qMshxDzt1Jym9cn6SYe3hECat",
  "key5": "25c32ZrVosWCLRCfYuGGRnuwLfmM9qEvDamqLHHq6h4XcJYv8C5yRTs9dd1vDqZEnkAEpvEKytmLdUYtPCS4DkBR",
  "key6": "2csFoG7prb5BebWQkRonoXsMEg4QwmHQJsktXeMD8j3DwjceK3BUfvEboZbj8Z67xyRZJ8VdHiztcn2meAcccwRV",
  "key7": "fUYK4a2ZPKysaEWm2cKFCqg3kQMeZ1NoobPimWUwu43RcvFDYuYq3APHNCAu6Sfvdp4i9w5FFL9o3RjB6wBLu4a",
  "key8": "zoPrSDS9cXgoyoh3yTaCF1Mv19icFU5uKJALv7JckXrf28Sv3edi6pQ66SfaT4M1pNM7LLfBjVKNe6LDDpehsy7",
  "key9": "5NQLuuWN6e4Jf2s5Q6Az8Mime83xcG93iMy4JZncwe7XCahAcoHq8wcvaKQTVqWarYzApWxxsvykPMrUdR2aEBGF",
  "key10": "2oBbMi4mCLjdrGdMU6FF6DvmNpVZmKTJr9gZVsS4A2Ek9mvNWHTe9mgdFfmvgzVmLdPF5VS1LUsSVJdrGWT3uAYF",
  "key11": "Q4dS9pueQEWEdgDo5wVMW6ePUD98i5FU13AXR4ZQ6C4h8DLpchHMN6aytUx2RHwRss2eoHo4C94HHkNVxf6GDTE",
  "key12": "4wn9SYm3W2enepJsr6u5qASYVKBb6g3moi7r9nYGqhLwoa3qi37DpmShnZ82zgoJ7actf6kUHdBGcw1p7Pv4hs7A",
  "key13": "4Sb2J4ohg9DqKTqLxDJwQjw2X3PNmVX8SPeMx8beRkmuxMVkqwmDjSXBUhDSR1emBowpzaN6KwJtyCk4umTChTpR",
  "key14": "5kNrMzcUTRcakvwQuLQzhaazfN2UMpPGVxvjc4YWhiwtArTDMTSvspVZEsQCLVK1jk9Fxq7Tg6AdACzvKpihZhxx",
  "key15": "2kVdH3jJoZ3DafL3f464ZKnvz4USm3ELqDz3EtsqrobhekhzjQA8FLkt2Ly5qRBZ7UHF9RmGgf9U71M9FKeLbnvq",
  "key16": "3fHk8VHuBmhtXxVaK9v24w5BWVuYMNSRbKX6wU8KTRcRT9uzN6MyaD53aV9EVkzyFRrbAe43oeg9RcG65dp5oMti",
  "key17": "2FPWPxmFvbPAtwpqgNjGNs899op32TPTwpMxLy6jbdDkXRTZcfU1PUcjxFa5dipBkgg5oRX5mJejei4d7STFQUSM",
  "key18": "4s8GrFWvSdCct4gwVPMF3ymektYC6qWpFwVBKEjrgPc75iHnkGYzS5cegjQ51CQ8z2ZAxMmbYUVrDQ8RTHkEVgtZ",
  "key19": "2saWdJpvFJpYaT3wUVtbCYELw1VjLpy2mwTs2pkGiUS2yruUuAakzLsu42JThBgTCjCQg6LM58QgCUtH7SQ7gEMN",
  "key20": "4LZZ3MubQPEWNZFTJGW16iyr8m9vNCfuZ2zkvPgM7kMHGqPjFsCBnBU2XsJte2mBFhynGH7A5UJsnR6JxjzGVuCy",
  "key21": "2ESsfJuPD7cTd2zdXXDYGUgYDZbfCqiw94FxavmwuA1DQ9ZUNrvVrEWGvkUTnCLEjZgqs8GAxttiyz2WZg731sxh",
  "key22": "S4zoWCBBi4LV7J4svWSGWC5u6UDAUVnk6WVe1QAMdx1FwxJYva2e8tCmjXRT8z28738AhqYU8jHeQW7AGx66pzh",
  "key23": "vjWvJvbUrx462qPuujVrQQc2aWewPt9nSt17iFQ5ooyM3eB4CweAtqQTRRY1zcxFrN3B28AS1S1giPBhCb71fc6",
  "key24": "3wV3UjaqHkiT5diGcbaX96rygvVmKGSQcQgaSNGRx34Y6VkAHbb2vT2in3ykpY7Z4RtYuQk3g1hdEuwys9GuXRQR",
  "key25": "aHADNf5ipUcdENioqo8FSKTMdYej2Q88bbvsv8VCSKvLVrP8nzGW1hqcsU4Msa7BitPo8wzdpdTC3w9aFdh4tM6",
  "key26": "4odhjmyNGCJkN6ghMbGUxf8pQAtu6syz3GDy6cqhnRHASc9N2v3fGm1KmaG9tDHNAuZhM4KMBNHfkRhy6b3yyqwu",
  "key27": "3SvktgTzmXN5oK31LsRm328JkxGeuJBBjBtxHzwpvYiuryVUyuBuH31UubZn7t9xh8hiWoWT96JhaLuVREYJ1agw",
  "key28": "4dSq6KZCNzczFJ7Nudv2x2GDmaXuGM9E6npvfFBFudHKkgcuKoFFxm8UjvHifHvW629jEUqvLWuamjkgNjmtjioQ",
  "key29": "3kY7UanzvVjLcCogwHhmr4w2w2ioHwQCsXGVFVk9HiuKMkVZuuhPsdvwjCep3gP8ywSABTBNZJMDDUb6hqtyE5KD",
  "key30": "3nighFNqzv1nJoWhXpih4Tosfimti5oDSRbSLZ4HSuHhzL8kRJsgvQ2mcxttpY2MPeEUq2334YzrzbaoxciL4srE",
  "key31": "3R8VzgQq3FrKSFcaX8vvB8ziui5VVYM3ijcoSrkqHBLAeNH2nYTchPRJcMmtzRwsPezvKyLSQF4UuwJeuA3r1QDG",
  "key32": "2UjFivwqhSzajz5Qm2VDSSCknTjC1i1NNJjiFh8ogSKHfH7MXThGR5QjcWVDXrmRVN3QLNdnmmezHgYoRnbQopaj",
  "key33": "2xLp3FbLkP3UkyveLghhaGswMm3zXjzhmGf8Scwtgi9nssjU1PFiG5jxzBh5Dc2nYwfJW8vNLsEckqpGYK53peuM",
  "key34": "5bsAwGm33iX12xsfA1nreRTg8VoMddDsYe9ho3Ti1dsgdS7mgdyGXtuaKeDkbhx8UAwgChPmUK1aZUhrZ9gTMrmF",
  "key35": "FBhJeFfjwuDQ2uhaVPS6N7cSP3WnAizf5udh4J8c8YURc2NuNVEvU6aGoEyCRzJYQFYxsUy7xJZEBtjei8rCfY7",
  "key36": "3WZ5CGugnRXs6rPPvdsh7REDqeuYhdKGxTyzasuzgZJxAD9DBraQen7XZ5gik2cr9jmJbKhuYCdeDAe3HdXVLG3j",
  "key37": "3DreHVAWqWVQhaz6tbRJDfb2aFsjsxaNJU1G2PvM2NeEFJGdfqrNUvJsnNakyzX5Thh8STGjyLxkA8R5jwqP9vu2",
  "key38": "zpeFkPt8XaPkqoh99ejFHbg59uvh5upRAzg92wubwhhes2XwCHVKwdRUK76fVqjA6HMZ7R8i9tGrWzowKUM5A9d",
  "key39": "5uLHWm9LGVvKGdc44rLoBH4LvveJg2m3YwZWu9QTECB4oZ5PjnMEfNjAXTT5zxMRcdRLjw3Z28gASyAqSssgQN25",
  "key40": "2dLBvnsdotuZoS9fdyoCjKVVgSCDkfcUDtkiczU3Yjx4CuzH6wqHqNsnyDiswXDhYYLmzKKJNiUFcjUbKkHUNnD8",
  "key41": "2p8xYcGRvuHXsc7ZPs3YuP6j3F1xQAP5qaJYbvdLr2h1U2fHc98gY87PLrNUD5aik3v4BG3DuC4R9wC5uxU1ouSb",
  "key42": "54gmw6iscFVgmUbhiM9g2kGwgsmZXPoLqcFsgRBhx3btLtWfE5QG5x1fKUWG6Y8krg1KB4WWqabjRbonUWmwrWcH"
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
