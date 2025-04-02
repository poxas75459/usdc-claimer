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
    "2buKrKLnj75sMhhe7uhJuvPUkvySnRoUX613CGQVB116HtuhmrAn4Az7jchtC6HTGbhFbkr5Z8GZ4SaoLSCn9L5t"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "uSecgRVpaap7EZLvEWuZSmw8gkrhjUuUo3zsiEKj3uEuX86pzDmK2CPtx7X7CJMBsapgkpgjfUX8nPcc34UiVRp",
  "key1": "2SAP6tzTqv1fcwAUgFxXQHBovYkPyFqRPPLszQPKzs4oSjJTZrqzwEsF3oZEbvfXMfwiXw7fN55nf8UdX8PMBFHs",
  "key2": "2daPhbT5VmRYaBM2SffEm8tye7bfQVTKpZc6DvLXJjDLgL3Ce7o62gvpttJifsTN1eBp65izyrtVaZteZDzMUzdh",
  "key3": "wtoAjiKvLZz4S9nsuxxYVYzDWGWDBGRWicdzp7fvrPUMLEBJ4U6UU6uBdXgmj6vn3W39kVzGdN7HqUvtyHoGxpE",
  "key4": "4s4iNrHTaCZQXEdCoopWwmyDH4ixNCoYyjooYHNgjTxvTRNRgNkEZSDhALJL3et3DU95wtNSyEpSQmjsFpcKRyMs",
  "key5": "5xbfDoGeCrDxNKqSbLgXHfv3GyrPPYUTTFG1Nn7FcThorxUNTUHQsnv3eNE4mRndyEV49wK3oqzZzaec8NTLdZRi",
  "key6": "48eMabMAtbS6dCF6N2mq6jrJrSrqPcKhoMLQ3UsnguUapSM6L9JBNbrW3iquoqUdFw2e3YgPTpxRDvPjzHqsKDkq",
  "key7": "2P2nPvogBu6GBADaA3RkVA848HiNQX9TQCjbp26fXTMEk1SpLSySHGnBjMCxLsvDvmecsGdABuKExSccUDxTBkrz",
  "key8": "NwkNZoApTVoceSByhC3YtncxQpQs9oCRmL7Ss1kDbAyWSeBzFLbARQB1Ek8iwcTm71YGhzaeZ89cs4Ny2sgnJ7e",
  "key9": "4y4d48cjbuP1Xg1dpML6wCWHcWRVGz8maiobKVBwoLRC6FqqE14zwPEWKNBwgkwBeUSDuvgQkxQYNvtzJpG8QSfZ",
  "key10": "zBoJG1nc7krrbA6seKsXRvworXwyrQiVXZUwUJqorqqfgAMh56XCLbJ4MtENgLFwJsZho4TpUCdzPPyXqvq2tw4",
  "key11": "4XK6LZMpjevg7r97ofb8AdhnhqUtgC9ZZbyDw1GMdBfwVkS6pe9FfBz9pKZhbgskcBxtRUKd92pGkpQV3y6Yizno",
  "key12": "5Fgom4Mt7QBQ5Eu3zoJgtS9gtfsaWEf4CD45nUx7TZw7naWv2MspZhoHRFAQAcXJ3TQKZDTWa1uMAzsGxDf5x58K",
  "key13": "2T1k8cPSaGUyzj6jZTjq46CC9bUENug4E3AessQKTEwASvNh2hTxtUsGbxyTL4VLHKkYaqRAGRyEM8v3oTs9ovgu",
  "key14": "x7FG3nKH67j7fFoW6HfotAiKujZKivv21QNpSpXqJdkF5DWtRcL1WhTcRNq8ztfsocb1EMRr43uUcUngUFjugZY",
  "key15": "5GCZtvqtk3XxcUWdTczMZVKFqUcoWUSg8HNr35tHubjr4YkzNhRyVva27LfY5uVKyMSdqvwJiDRCWMQBomHDC1GP",
  "key16": "4ZLtHewQ4CRdyNRM4aeXnWFisDaByjvxyfL5LS8vRK4rkGS1Lbouvrk1cuNEpN6HuRwz2PWVuuGPAjaU1yYKryc1",
  "key17": "2WfpWwmofUcG9UjtCsAKBrpokF25pfKHXJUnCLZtCZvBs5HbzmHBtxp855Tbn7kQM5pRt6wth14zWg4vriFG7yhA",
  "key18": "5hA7AH39GZz3DC2wLpLTNNB36aJ44kCnPd92u1m93ez22vQt5WoJka1ZSTiYKtZE2duvDZCo7QbFiCqc9YirM8SE",
  "key19": "45cV3GUDEYpVbqAG17zhtAVUpeLwvfzPPEm7Kxf6FaXjVT6EaooumvVqEvZhNfPCAnekyKZhMvomaUbornNV9uVg",
  "key20": "2rgWXDBAVoy3a7quwAkFHVCK4Xytbd3o34aaKwNAbbPsR6xBbhxEvXsmm9KZY2i4MyYYRgjvpNSJabUENQrLSzVy",
  "key21": "LqNXi1xF8rxHE9hJFFJbCyFjH5oT2mBpodtgRzasrpn3wmAm6TLyXTgPkatJCyhuFDRsc67Jqjjv5fjusi1YeCg",
  "key22": "2aZXg13b96vSHYMzp38EvaBWP8u8fR9HTKNiSVGpLe7Viw6Fj3ActqKfofNWpCubdqFWuNJ4nosUpUzZzzLLLSrN",
  "key23": "2Fb3QZbxgVan6nZUonFtHJ8NN7pT1p8SEnPQ224WXLvMq4ADkZ4FJzoSYnjD3eAxN5TJDajPbRZKBMT2rMcqZtnW",
  "key24": "tshjGD3795utTdQ3bsMzrQUnjUY9W1nWqEKXxdzGUYq7qwrorUjBfKU8F4dGmA1hBieQeFYnPVq15M56aSQRMJL",
  "key25": "G6zrPJBVxZgHTLM3raKm6Wj3fDQ4n21sh2GXTmSGPgjDjt9JdppQNU4iBTTrArDdntRhqxZWkj1CETMu4bpuW2H",
  "key26": "4pUDrWmWwHZ625KWob7tVtcjDccRnm4USEyKFBgyZkSZtWa4GRh86LcrgAnoYRA4uogFXS1MeQ31Gu6vSGv7465H",
  "key27": "3vktzGaQzRagqHxsRshnkddkB5d5RKrZuReaGCEgU8CZDS2PHXq5tHH3h2xY9JxgoSTDMDUnuvJhgANvRmdGxSRE",
  "key28": "63SFGZ1dvs6CSdauLspwaAoCn7B2p5xpCP8jLdsUig7dd9QYRGRFmvL9gTs1DPoyKMuzvFTsXeQVPrvrzKXSPGZ9",
  "key29": "4KrLozS6VEtBwyTa98SkF2dPA1GjxaE6zFqihns9B7jA1X9EsNrg7awuCit4awpkSkhQB7svzVYioiZrbyRqjMEy",
  "key30": "5Zqeaawr48hcMhPegMb3mx83PJiUbHrPVidun8iggdVC71xDtLBmPS37w2DwWBWjV5qUSaR4T33tgSRwzVt3nbUS",
  "key31": "3mEyayh86HAtCdphR4ctvBTdWFVgwLHrUPJw78NgXNgjaYxYczYJEFWmUUVdjm1M8mvTKCRqPnMtYDVNtYrUHgAW",
  "key32": "ycaeDsFBfGPtTtF2ThM2pWq9erTjdktXQS87S1gsuiEXhunxTjpRqpb1xYBJv3PJQQzDocT1SbVvmTzAj1u7HPw",
  "key33": "25PxazXXdAg4qHKy3RGUjEpGZ4e1t8NUTEUNWpvEeZy6ArZdQvA4NieAXkEqmJrQqJQXczboKaDb6G9E3zHDcPud",
  "key34": "2uMqLHRReu8aXPne3C1Cb6XgYzxCSMZDBR9q8WWPwGYixv5Ccqqh8nN4u255uzB3Z1GFSutpJEVsQ39tfn8vrqqp",
  "key35": "KS6LL2ZmMwRGYQqnqVNYsPESCuk6JsA8Zygx1niTu2FSTjdJKvz3ammRmz3kQMrBeoP1UUr82Li9b9csANRbeiK",
  "key36": "9GvNTsyuDaUdrKJPYa4dM9oTjmdyvzemLiTNbuXZoPRvmsdawQM3v5Aj1SG6WRowrstXTaapai9aG9AYiV8xB7m",
  "key37": "2azTkruLPBJmv9fcXEvoNVZzPD2A7b3VkhrikN6aCTZWa1jWc7zztBkAbBN64Lb5cEeBZLT6gRCgYGMTRWWxn4rr",
  "key38": "3tg6vbzxha1d7UVB9KeeaoyxmmkHgF1RbohH3Kqzq9C88hBWMJkWaDEt4v54LUZErbFK2r7KZREf5rRovQGw61DP",
  "key39": "3roCtkVs5pQKLAYzM3qJcEwVKQXTmQ3sukVg3dsYsqdiscFCbngpuK64UyWf3vuCw7D9DEguUZzBffnej5vdmwbg",
  "key40": "32hGy1vHZiM4p66hozy44pEDptEGXcZdaRqVq3m37Xn1Q3mMahY1S7uZ7468ZYC2oiXayzaF9YE7phrKEcbhCah1"
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
