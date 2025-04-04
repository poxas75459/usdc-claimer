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
    "5s5ecg3xAfqjsEPrEdt72PAUY4BBcJgPMg1eFvidj3LChkdMtoV2gM1t4i8Z7ZjHszJLuSjWKwaZwTwsdTNfnBTG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2N7hj1qVTuw6fjYmXHkMWnH6NSM8pJK5VJbbtm1B72h9JXp3TD7sjKu4dhc1tz9gqGuEw47faTureMqw8JdkKQaH",
  "key1": "5yGDrsmv6KcqG35CDeoXrojCUnR5taHD6SPTuG7QaF2BcBNm3uchfcvuycw9i2PtbUwixGQWSn2WCejNUhiSPPXF",
  "key2": "4WyFERFoJXGYefj417fF6eUmgSKKrinCMrTeWrSsFNEFvtkxJuWd7wiqug2sDZLXBzCMRcanchZQ2sZABtp9of8u",
  "key3": "651yxxVR3M9X966JA8dyK2icCoNnbxMWopsUVX2P8oq99yqLreWps3v1eGktWAXKJkdw6pXpPpiTd9C5Vn6uw9m5",
  "key4": "44Rdqb4guXgSNeAceMLyfokyJ9Zn5s3hKstBRWxKioHc56yg7ihqiCtrvVcoNDLNEXzJxwBGFuxVnyivUDzePhCG",
  "key5": "5zy1MaA82LG4vJJeMXmqH4iA2V54YYCxZo6NeGQnttNJgCHUJH113DdEeHkugU6wdf3HsK4Tyaq4LGaEoCDYE8g9",
  "key6": "36w1ymmmDCwt2dWau6mSeQr8JNrKivjhomPP1kjeeV7SsASKucnZum2oyLCqvwFLKmKayQNtB1rUzQA4n1ELTzHP",
  "key7": "2jYDGAb1hgrnCKvDg4yYnvZu4wLS52t9rHd95nGhZWffuPbnpmE9yJzdjZmtPDqjtBX8PToYGJ4B3nCXH6XwsFoD",
  "key8": "2jMPS8SvR49NaG4MZ56AFYfJCD9m2uNs4AxMbJCxMoJUAPSQ3HKT2oAjXgEMtb3PZEQFdy8MeUtLFLqanQoUssuE",
  "key9": "398RimfoDQNRCSP3NpMb4Eiv1YGr2zeiuEsVYNnxCtFtekVybWLNXLW6FipsgmtxEJRX8Pv3gXmomzeutcGYtsRw",
  "key10": "23StpWk6FdDhdxivZeu5VNseMXYUDECA9mauGnpF7kHvoW6LhHX5KxB6XEQnpingc5xREiJZiPBabiTkSbpiiptQ",
  "key11": "5sJZrPumdgCpGBVL3aQVmUc4Edor4gNbNWeXapwY6CqqiEJn16SUuLUCfh4d8ukBnMrARxRN1EKrKRgFXGqg16x1",
  "key12": "4eB5AFb2tDYaoF2dCag467t83c9P7ox8rqJ2ZTWRdSkyxSs9FhbBbv7ThwePzqzYPbPKDmgzw5ZeSbVw48CFSVHx",
  "key13": "55fZjgYqfJdH2CL6DWRG5D85L5q7c9QQFckFYbqYLc92poQH8hQwupJK1xguPx4zMjbQxGq1pNrYKetNgsJX9fso",
  "key14": "4gLx8gUwL5rMqLxWby2euJzVQy5iRnp5u6zhwLMcoHF9fRbaYHWSAP15wNW9yyEqrgpH7D82V3d3JLHu7hch4xSH",
  "key15": "5XYTVYypEtZdJV1vtTK1WBFGa9pMWvt2vZnzcKQaXe9pQXQhjjfDo8NqYciX6LsGRZ6kAtVmxZVAwqhbKGxxmzgE",
  "key16": "4JBN9GE8thcPDuAiNiZjg1VLp5zsnLqRjHhsYqdfT4DLBus2nJviU2AKhy7asm2WK8A3nWLArL7DxP6vv58DrxHi",
  "key17": "2kgGxY3zrkSeP9KpCCj2QM35qZjt2AKiJaecst7Jnu215CdgrGts67yypiDP6FwWu7dTfUWyo2Y1xJxpWU7yST2G",
  "key18": "4avNwbGqLHdaBP7MCThoj9DyhjvoT6et53vixktWj1etUFDE4y7yxjTSsfsbdbJPVGsp8RfqTAGX4HNRvdVTvR5x",
  "key19": "2Yaw6YsHtLpof7C9Lkbv1xUW8EgtMNfk3qNTbZVaSu8Zdvru9Mf5Gf8qa9GXieXCwVdA3TNZ9M7njcGZrmC3gBVb",
  "key20": "b6Xdfa1z9sR66uGAMnLeTbRD3ZaDeyoXmYWTVM5oKszoCNb9MHTkxyidnKZA6ud1kcsrW6uvXH4WTQ6kdAcEP9N",
  "key21": "39AzZvnyB5aSHNyuX4NuYCKfWeoj2NsBAfYHVDRVndyeQyCfGJYAQndksYDWY8QhZrfSjcejZ6pqH9gNm7HP76Rv",
  "key22": "2xLT5TB8BZyL7RidpeYYASDU4Li1rEoNA72vgFJgWnvgBF42gk3WruqaoRthF7gt7kWwxP51huHvJjAFvhu8Ts7K",
  "key23": "2BwUxu8uqm1tcoo83NBrn6JY5SWBDDsH2jhtveHZn2EAv3QY4PGtTfz83j3biQXfNSjhwT4RZv2eHLBmUfwMqyFg",
  "key24": "2tQUQ7SXzjRpas8Rd9mzYeraKxa4qdLxMa1oR8FtHDZnZwjxMkYKtxTwJcZ27zQKa3NQzxvcFMR8KeZipDScJAFo",
  "key25": "5jxkaBzQN8G7sE8Q5qikh8sVrjAGorwXXpHtZNL4Mj8VvABKtemK1aeYUrYJxBw34rPBhmwFRNaasERbe41KdWzm",
  "key26": "5Mffv8GgVZTDbZhz1rPvDf6MFGubAzrzLyRz4MHqdx1FkK4sbNvR3RyYnhitqE2V297LD8znM7Brmz2oWSJiuQx7",
  "key27": "45h51CLaSL2BukuBGFrCPwjbbrsqY4K9wSaD9rAGbXp25Phah5YRE7k17JLdpeqLoY9bxhHZX6hCGgAbxhxZnLst",
  "key28": "122G1axpsjpvtGxzWnXeFir5vdTkfztpK5HB8c3JE2NGJfwFGNodyJhsMkMDh3ZHa8t3wTq2ptZWiZXANTmxAqZ3",
  "key29": "4gJjvotLUKJMcpdfQsbyK9YuitSxMBfdueyCkQxPJK8Qk5uJcg9aEy31G1jqVHjN5XPm7tR7rQuKFPKRmfCzXNr6",
  "key30": "4GGhUymKN11QjxVwCDxWE2zm78o2L4dhzd5nztHUWqJrNydvFe2zFYMTDK8PHNhmxzoUyYqu6HShZS7bPU6Qd8Be",
  "key31": "sR4MyJG8rEWbkAiJpUERbNp5Cc2GmvuVbJkpzCt6nKFrV7WvcncXzK5RtZTMfS73HJTUZpsG1ewT6gMzU6u9XXu",
  "key32": "2XPnxqheh9VJa56Pmsj914U4a4nymvrXYaczygqk7XpBCCakcFtGmm2SryLKRfXMtcTfTYmvMa5qd4yZCKHXKAfc",
  "key33": "4TR7BgM6UARXbW9VTEiPZhLBorXbUcwGRvgwUFJh8jdumzqbGBc39rijGCpJEHBexsxf4ts1wRQe4GHMk6o1DqXM",
  "key34": "LC6iKMQ2GQpbUrNtAxfChG6fwz3dWzNMYQnPWnww9FWXiZaMqV3FU2D6tZgCcuRw5yCKumw5T59zi6RMFBwR4NY",
  "key35": "4ss76H3sp4yQj3td5wAP5X4kovThuFRNVrbZjoobdhK1BgAbd45uu8gF6EEdsify6ubVNdShw4757hcgoQPsPUE4",
  "key36": "SXWbUpG4tzfJ3yAu1reJaxecLigmZn1jZNWF4NwdYeR6Tsd5agVsXgEADA49AoW4h5vh42vikAwCUsLZAvQVj6j",
  "key37": "3vzhT5nqY8xnzqJSGZQCyeRapcMmvi88j5YZ1HKnsETBchrHjz18gPKy7BUC5hwN9QMzpm3i2TfHYgzSER6ngkFa",
  "key38": "3bsnMt5nUeUsWBMgyLpXoYHWK39DLyhBZKKSFGRM7vExAjMTHVJhv7QpU7QQQfDeBKVv1LsQz56kGpgfQiNLSoPU",
  "key39": "2TMvgmbdyEWZ41nZ4vhhAs9GEYSruoiK9FxayoM8nYbfb3uD4rKM6Bv2pUWA1QM6dSGQpzqHgLxRjAqByzD3JV2W",
  "key40": "YQSDxkbeAkSVyXBR66BVrCeibpfJTje73c15WnESa6ipn6LyqEod2cELL6FLKXzpHcHANNGD3iALVbuU69smN7S"
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
