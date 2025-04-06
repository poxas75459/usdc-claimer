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
    "363JXDkhVA4ZvT9HmLCtfh3nBV5rrg2TYHYXxzQbHFxa3JiuchTTNm4nMWQMK56q8fWASSsBvZ9mVGdQ6UmPgyEY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5rA7fF6FC8PWZJNnUoAEws2YrGfqXqRddvroyN6w7knmytDTCQj6Q1PUfwN7Qku5M6CoHbhMTyXYemNTjPpU2d9s",
  "key1": "Bt7irmYqByEv2o4nGijnAEecZrrvcmPAUA9tnwp8fHCTtD27h2EHdqMA5MdDaQaKrFW7mGJ5HPs7kAdotV2qnMu",
  "key2": "dN3ZAAYJm317c3xnBK6npAg9exivfA2j323PQ5e3pK4vCeT788HbGXgsBEh32tAStwqb9UEHxhyP7VkV5RouXHa",
  "key3": "3oGkeKHwak6EnXctHB2LgUPZSw2yqX1SF2k8DJrBMpPKgcXwKtSDsdKJQfhLJVvsZ7vLBk5bHvNcFfK5YCb3AgBy",
  "key4": "5A6o2R3EK1RVdMCDcTyX1v1zDCFMpif2mmLMYqsjfLuuPe5ruAdA3XntXGMkrQTx3AzxY3fmAHcAR6ProZyzohuK",
  "key5": "2mEoe3X5yU6t6Nd53RDatKgkEGnUZCRQHaUXhPktmQHTUG3Abw7JRiaC6xYAK1TYnDje2DKup8q7dcAkDGkwyusp",
  "key6": "5osfNLLcUQBLvyRPkFiB5KP8HLJ79r1QUyf6dAzwV4BS51TqkbkZw2grcLbszLU6t3SY3jihDyQYsVKaDSXYqLj5",
  "key7": "5MNkxMBtF6CP15mWGQBfH4cZ6qTsqSkNXnYBAUnrcmbQbCYpV2rbgGWankZYqH614eg2QzVLkRbevabdMsEXWKhB",
  "key8": "5uaUMm9BYckH4xtJvkfgK4r3tSSgNGHzdZfUyQZKW3X9eod8FUm9w5uvq5DeuAAdMCUmuyJrkyaq77KcNq6KN2yi",
  "key9": "5GxzMbEbaTCs435SJBazREAudrFx5t71q6gCPHogTPGMZvURVELw7WMdt7Cx3hacf2yK1VB3s3g4CwbtY74kgU4x",
  "key10": "2YVunV3aCbBQNjT9D8WUq6ahCaaYnaDLG8wbH5LqoZRHHaDJa5qjZSJDdcGDM1uaiYUWJeSPP8shi4UjMFfcU4FY",
  "key11": "3VG2774BAQvWuyvgTsUPGmB9bDvSd9xLuDe73iYJ9E4bTydN2fvedbRUbFQ3j98aAJwZBHcAfN9LUvHXM5KXMfNZ",
  "key12": "4wZpEfTPD5Rdev3uFTC72GJXghxdhXHbSmioy75rfDsGW9fScHGkbHwfZa7DsRp8zYJfALDxz1FZBNcmK2CiyoDM",
  "key13": "2yKb5McuUXZXCTXeSaWhEPJdzRkK4awPwJxBjzGRqPJes6Xy9ibcxytau8kLVeAGCDTWULZ6ApRjg1A2YeVJpPMM",
  "key14": "9qmRtE5xRgvK34oLvfafLcSMg4wjQzkBtqRVhLhfqN58MCyGp8nC7p4KGJiJjn3zcx99mYuKAd6jTVgonM2Ciqf",
  "key15": "c1nLHy6U1ib8R3VoFmL3bT8Cg8i6zoKNCZqSzEpuXPos2XKzXiXxGvdwSQQnZtVgGDSVcqiUTakZji7HH3qdqnE",
  "key16": "2PdHsgWoiFkrePnJp32h4m3HXWE2xbwK1CgChsFHxoDTpnFokxQYiPq76HdFebnsagpw9V3NNqzyWW5WLfHkkNnQ",
  "key17": "4CX1wwtZeF2B2spN5p1YCKsEpn4LBXB4z8siZwZ8gWJPL1QJTSF69FcmexngU2GPyv6MLyrZnC4dF9ywVhtG9o7e",
  "key18": "66hM2gXwx9NCH2xihARAG8VNFyf51Gso4Fk7qspEXkskL3Dm976FvZ9MBufTBQDM1gw6wKkb5xSWemRwHRMYUT38",
  "key19": "5a76oV6iEtK2MfcYqSyJ2xDhZZ7rUWaFxQYvPhSenwpr4RCBvbozoKNAcrD21AC8V8eiAVpkmDAQ7UJERbJPqnGd",
  "key20": "2konLgMdnAgjWoz2C4y81EhsKydeondwvkVfHDSdta8NuQRHBncWHrjMd6n7P9CS6EUe8FaJVCzHE4JB3UtrB7qD",
  "key21": "Aa87PxKDGGEiHziKA6ch662HMkSsVPJki2abVQPAX9bfz72oVzH34CreJJMhDeYdwrCqSwEXMPSgrYhseeSN3Xy",
  "key22": "52W6x8MvxE3QgeYLda9NogsQjydtzRXn5ZotQ2hN8T1W6oj6Dnz7gMF9rS3XpeRDMDnMJXLzgTv8S3jdF53kAfmT",
  "key23": "5zXKoJZZ1jxTfZKpxsYguEJP9LntWaeNtWfsdX4yWD7wMcowFB5xdFbCCDxiqw8gSptDUL7CffhjboSuNCU5NJyc",
  "key24": "5PJwBPH4rAukWwXiLNRrF5MVUPCYbfS6caNRM2qr8U9sBZ14siGynLMKoaBkP4GWx1yovNhY2DF6soi6L5fD1gLF",
  "key25": "53BupFbnNXrHi55ahH5tfuNNfjVSmV3tHQqxrzUzTka94TdXFLNiLVyPJA2Rxmwav9fx3Z3Kw7qieV9qNPhNQuLA",
  "key26": "4oiCJw76Hmv3Q5khQMQze75WJ4tWiMAn9a6iksb6ihUs5eDC3aaSEywXidVqhMQ7Wn6igb9qyh9wG1Kq9e8uJxVd",
  "key27": "RhRQobEMwLPzvAhvhqLD5qbVinR1YJZQeN5w7XBUDtZvsyhWHhisMxKoG2EEYawcqGFLgC9NSXGGWs3vvvYKCVJ",
  "key28": "4Xv1acqeitWSj65FQ9HkMpkR5RKfeFrtP3fVcbS46u5uCZqD2QcxEDaasWFVowGPLKac7zsQq8vkUFcHdPspwfk6",
  "key29": "5S9cFr2oGgqrHCwMmY4SLvPga3fKNgcxjgS74pFvFNvAZmM8M6L5TWT9nYFDHCiaTC4h9DTSB4LGCeKeL2kMpLcu",
  "key30": "32jcQc1HyFCi2worCs26rk3ySTqFKXJbBHi18Mb4w9MCkx1BvwF3ZN1i1UQTqDKnMV51SRpuRokQZ71w7GtbXF6E",
  "key31": "2UgStHKrDmzsGMaLBXLDRwj6wQCtUsegsrBBhEYjDXz7RkLsGmAqpuacWUKFa5jcStbRpa8wZLSCFc2aAyQf1Pn9",
  "key32": "24X9RXh1p7Tfw5zNAeyEwWp1jxph5XSDHW2VgPy6d1DL8jpqDscX4JMqRrRrhkhCMLrssaxZoZUtHhBpyXigeKVf",
  "key33": "5SijJY3Tn21YUrLVHCUY2h2KKJxbmkvMaZtbadrXWhAsSK8Yabx19nVJ8BMJNhs6waKoEKbXN3LztWyaLGfRWix9",
  "key34": "Wj55L8HYJPULBp8uyQnyCiEVZxbUmC9VsQFTt8uD13tQgtEXUMHZrrqsq13ofHVKz1fi9oj3T9huSpEFCRGXjBC",
  "key35": "4pcqSXK47CEvs7vHLhifNkyF1Y9oJ9gGGvdRqNsfDzTZJb6gywuyxQuXnuoPYBKgnLFNcgyCAS5rKu24NKV6Jx35",
  "key36": "m8aEuT9WKexPLBrP3NAfnHKvvak41mz6HuADtvSa165edv99vh8pEMefzQq9KuErGdKjJJHkK3v5PxbogDejPfz",
  "key37": "5WAwfvvCNne3abPDcUTYQpfX831hbRR56NMjBfwNvdqA7V7M5QPyasywUXW5fgeHffMrWoeBGKyZ6hnUEHM2rkyL",
  "key38": "5Bm9Z2ZNBNLXFJ6nLaXUe9H6gzuQx7XUdf8kFT3KGxEN3fih3sVaa7Qn2wrUCRMaoEXF9oosV33tymtZhZeRbXWr",
  "key39": "3xdwPT8D4Uw46GG1QW2amwR5JuV55Xt7KJTNQJaHeNCfaTb6w11zCPRapGQXzdweDN62LLxBeV27QjycfBaTdY2s",
  "key40": "3phKX9LBmzTcwgfryD2yn2zVFyvjckFGUxUArtXwjPRdPL2pBVTUZKUc3L3FULRqTUE9XGBDQZNePvJ6HXHiMA6i",
  "key41": "ReZ9eT62TGpa19CpAK3zuXgLKbGizKBR4Q7gLa57zgQEnoBgDj8AzDp7PE3ZBhSsAWC6T6RXtwPRbZfdbu698qC",
  "key42": "7tH8jvTyNoZENe2cd15AxAtwSJ5oVok7JxtSUVbgo8sxXPiHEYoGKHri7LAmi6RrAUo6WvHwWrxzGQrpwkaijfA",
  "key43": "455dsz3w8RZD3xsJ5pxeXppyvoVNtvyi6CqsvgsVGSmc2dc5DqbUq1LifXtHNZT31YYXE5NJAyUUw1V8Rm75Ld5u"
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
