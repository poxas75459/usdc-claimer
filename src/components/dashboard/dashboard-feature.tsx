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
    "m4YRZ7MmdhNxBbevGGT1scbWd3tjdjzYghSr6o6GsjEcPWSb28RpQA9PWsPPybtYBpnQaK74Uut7B1PEvVdfQWa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "FM4pYWrqF16SmEM4Nd4PZNSavkyxZmS5qzqXnsxJjJtvQno7rAwrxJoVjZ24vyDDnBcdTdMLK8ECpDCy8MQSUFr",
  "key1": "dZNwJKWDDMzrsbyP9Xe5DxuPG2GzonMoZTBKWnB1GU1128oxzqPfXq8bbEi2q1LH7mKbrqqzbnvAAY4F6gdU4Rh",
  "key2": "5fqnmDisWfvEdgRUN5nHArwnbsEAyfZLcER2MgPaRzLMuWPH7JaeVWrkL6wyZKMeFV6G389ZkQx4Hdkx3bXrLuTU",
  "key3": "5uHe5Cavc8DP3xsWgwkYBB27ZiyWhreh2UMeWLy8njaSqo7TZMpSrXLYfgfRdGWbABd5aE831b1WSniWxebKUjLT",
  "key4": "2HYvwuMQ38Jg3KWyGERekpPdtXeAbr6iZAQZwt7wVZb79ebPdpPaWmujBemkP46s4jN2ASM6QDE8JgmSXBkTV284",
  "key5": "UiVQSBcKWXFPpTf4n2nY6QXHyazJ6yx956X1jqxXMKg241CZCtMdhYS1Td9d92Xdsbt4qwncUiwnaAT93Eqh59L",
  "key6": "5UbSWYPfTeFugajcrFCG441GvQ26RFNVnx8tCGaiLeUbbM5wZYe8ng7ACzq534ddnMAzaV5pfge4jcCbtKoHs4Cr",
  "key7": "4quQ8ivLVvLDVvS89W4kbqB2Xrkpi5gej8KvSQSUAND1eCscoXqhth7YiH2ZQ5UqEsT3WJJs73hoA4QEsPS95Xje",
  "key8": "6263YAcWsvwqq9r5zEZNrN4xqvYRU5KLLrmDoTTZUg5x74PmWKKrbuhc8o4wJAte8kvpVNRdVg6CVTfA7Gjd3fza",
  "key9": "51t2ixoVQZZ5mDyCAzg8KSX9r2fQ9JJPfJu424b1be97uas22ejWrD8vg7JT5WsLLwo559qqRwCScVACcPvsCSAE",
  "key10": "3Jbkw5M8uHBEUCVTFzSnFGWBaYYAGgZDAVSSL4uLLGSRPLC3zMbHKs9wsJNMyfXVTybQ3qwCGaHvD5r9PrrCyCMh",
  "key11": "5z8d7ZRG6SKFYL36e8wJMPvmC3eNtkwK5zdBLzEp8mBUWHmN4qoT5eeLFUDqBkxqMinpWEcW7pkFvcYYiZiAjE9V",
  "key12": "2ZBuP39QSW3pvQosQRpMtBMzLedKVdJFKxgTPADYfGwUUFrGRJ91SkRvxoA2iXzGAi1RrSNYwWsyTJDsbc1fLXuN",
  "key13": "3M4aPo1qdZU1iuVsioKRkVPm35wv1w6bhRtqVE2GYT7LhExd6yKSjmQ63ui3R7gk2akqLQjFF1s8Qi5CYyAhg8zv",
  "key14": "2gR2bNFp8MLW1FZULb3QqLxKziCwq9aYd7WLKW9mkAnpob6Aj4MjzCxg7fyTFRaQpjsaDmHUpv5Mg5PjtQs6tgs3",
  "key15": "5AyWNcrDuuRPjvEKubBimRa18ZgkwtbcZjD8VCgLcBXYkjTNqEuCjYKe1Z1S4HNGawRhHeWCUNgfjErqFy54uWyX",
  "key16": "cWDrbrN5wZ1UAPcy4BduQg26waWvPCCq5t9WPaza2Ue1jn7Rp5DziXcSoKmukKdjmwAuSKCbqZ8EDHrePwgUywj",
  "key17": "4DeiQXN8Heuv4b8NYRAdZUN823WrXXrmR4J8miBXPrPce1Fv5F6H3QKR9YHaPdWXfb1kXfQbbevVNfWHJXtu46fH",
  "key18": "3dhXoPfooKnsf3JfGzu8m9YPA8fFJjS5x5MTBgHTevBXQseJ8V2Epfs8QseQsDw7Pc3GRBCq9pEMJYY4TdVkMbyH",
  "key19": "3TNUKJYDNuWwKaHKJzwiDSSL2mumvyZ8PhtvFmB3R8fuLY5R27H91MjSTSqNJ1hQyqBiDMwy36F14dHGhg9imHfW",
  "key20": "5hmADbJ9xDiXkKZnKA6tEh4AwfHjPhg739xfmWZAbVTb6s48mAmLVBg6X8BGqgxRccQm4GNZdGTe4Yggw9BGGqk2",
  "key21": "4pDTgfwk8conURRWk6tWLwKwjyyGnqDDEVWgoFQVHDHKn1GUq6kkQnQ5oEmUkgvMHd9ukNQahSVMbsHf9gWuotMq",
  "key22": "5Q59NZeLxCnEFDSmyqZhVEtQ1xJ4sJeE8yniTNXcGkSVd63SYJejUPuCt2TnFz6y7PEwCgWGiGHejWKsw2p2Nhzt",
  "key23": "3TN26JGo86qsJJ6WrXkv14wY8EwCB3WGxpuw52wTZjNd5Rzqzix4VEoUmu4zf5AoMR7i2s6rBwFBg3vma6vEd7Pj",
  "key24": "3uzFmosnHDURzSgCtPeuPcxTpeB737Gje2V49jT2CDFKFVsbSrU2zWQg4Nd5oVLmxLzrT3H1iRjYmEsqX1A25QSK",
  "key25": "4YNxxFudrC8TxLdpCrNHcgXjS3ddSjH6fdSD9KZBVLXBrmdN4RjMWCYo3eL18q4ug9jzwHfE6qXHCA3jvFp7Sx9f",
  "key26": "3Hj5qWiakoQvDznYgEdbzpV57bp3up3N42xFfLTRoDZ1XWi9GiyEFmw2qmwL9K2xbUdpfUnvnVhntQSY3dntqwnV",
  "key27": "3UryucswodyNFaCxBaKs52Y4SBZW1EXHDTEc1A1nbEWy22UmoCYrbnJr8BNXJ66G8Ae5k57GKdBckwcy2yjWz2ds",
  "key28": "215xyrrUoesAkCxXpkbhDsnqLgPA2Ew1anftoeqS9rjk9WRic6JHGycBT1ZHFzKVC6xQvwSG23oJNcMFQ5ykFSpj",
  "key29": "4BwSxxi3yX1LdRFqPB2ZmkoDF6FXWFSNuLaHpe5fZ7ymUpxcSWEEwGYCMzUY6tQpns8yNkkaT57D36t8AJVHz1LC",
  "key30": "5ZrKCZTMMrt4o9QnnoGnesMNELLN6jtbkYg24xENCaMUfUUSik6b1eDhQjkG2KRTs81HsFWC9qk9QQTVuQFQNdna",
  "key31": "2vC4pJqAnehLiAVZrPBjxo8hrhaUcNNMVFyr2sMqsWRX3HRZ6FXYGD8395eBid2xme2wLejPeuvuLxb3rsK1kVKJ",
  "key32": "3WxC1uz63J9RGKvdt6MmvZ2EfskF6FvHRZJewBRSDLpjodJd5ELbvs2SbRoALcvepy3w4Ts5FYQfqFHAN1i5iY66",
  "key33": "3MxsmubtVAntoogRb3FUawj6gBgzs7WB7cBnCwHp84rhHdsNYsNaDggvFTqfBZjYHnhBZ7yfNNXNYLsMv19emHA1",
  "key34": "2T4k4hiG1S2tHY8U8wviFrr8SrD5aCqbRkPuoYyMHRNcR6AN2o1NvtPgr5YDGeLwffChuJJWkLSmQZ25ZANYAumC",
  "key35": "4g9KwSYwsYcyYCRYanYv2SdSQthN571rPCGNVDh4gaYZ52khtGT9raAK6zbbiZS8AwaY1tAzdCFYpC2rmd1wAjVS",
  "key36": "SRCNszcDtinN9a7nenq1SfDnc1Q2kepaPEJYbKSbukkRrs1L5BuY1gxn9ySBofXmHR6ju9JquUwM4GXydZAs1rA",
  "key37": "5NAo6MRZ4jr3SjhU7vQjW1yLhncgsLF5kzgb4evYg1qJMunmiYMBNfkzkyCdqKVqamNnJwGSKwDqTsxbMK8hWoCE",
  "key38": "5jC3MPsKAbQ87pfS3CApzYwjR2QK2nm2JaWYGw5HFFUhZGphRv6bBghv8d2nek1zxdf1hgECQfaoRhtF9W8DtyWv",
  "key39": "5BnEJ1zqwf4dVLsCVQsWxpQ5vsLd4ZNtPoRayHxF9dczrEe51kJhrS3yC2EUUr84zqkFhbuXWNY5cvKJjrMrJ3cK",
  "key40": "2MQHR5GsmWhw2hHg7ewnve5knzDA2KCMAGijawnRyUppyJUyLcSgQWNcEBj64TPTc8V3H8z24sjb6pFuHT3JTNgv",
  "key41": "5euSK2QYe2d3EiQ9ocK5KH4s5kvTN9vKEXQuTA64Md7FQvGPAQSUpfDA9un9vLpnRnUJNyeTk72cFizMcz8spEyq",
  "key42": "Z4jNkd7gfimj3tpkcaEXPdVoADiiKLmWFMP3BjQjypcg6eHrG1rbKfrQJJTKCC4aezveLNDirPN8m6ouyCV4d9i",
  "key43": "4SDVAnmRRfn66UhCuWEFQtt1iECcFfA7zejURL3ZedaNDsUVVzbjZN6W6WAiJqJ8sj8Gy1hAkfKiKu3nEeMHWE5",
  "key44": "w92yTuxxKwTgLeWBYoUa3ZBeDZyQAydi523xgQ8LmRRTX8dvi3fwqLj5MR1cDeL7Kja7eXEdeM9JTYU3s8YJfb7",
  "key45": "2ypiAW8YWpEX4wZmWKQzbSpS7DdyeVxq9iBKCfDXfCWM4wC4TadcHi8zxkmq6yEfWtx75q6NZzUmYNod15k7SZ3H"
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
