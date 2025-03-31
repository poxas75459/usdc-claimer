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
    "4NgXV6Xx93HZ6V5MNrDcP4Mz5jayRfLFfB4LwKDjMZY8rZiuEdb6CY8jtaDW1Kh5a8vspr4TqTSrDpKDFLvrvo5Y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5q8EM8sKujQVD6x5DbJ5v5PCgXNFCY8UCUqZPR9ERGupdP9mT7cpU7GbNX5eXQ8JTfTCzS8qAQKzLHFR6KGsd5Ub",
  "key1": "2wzC2XWUWHaWdmBbzDyGeh7ScYinutkzGY313Qb8sjNfysQAPKrUrMmmxjwi3uQxxbDSzx3bYfwFUpzAqCm7a29w",
  "key2": "5PRMjRh4y6qpoYTZoKhfzYGQagE4RWXCQVBgtQuyeWHFHk8AwYGmbNHqXYMwxQr2NLtr9EAhA6A6QXwuFPpYwp4T",
  "key3": "5EosR7bQEdYV6ojNFUMazjKnCcv65j4BfoGHbZ9BnEMHBEXivdPow4zRYkAD1XrCwwVuT4Srk9EEGj7fdtRuv7mh",
  "key4": "2E2ahfZht9Kr4je8V28cCxpmr3avQ2KrFh8BMvbqmxyvweBE3bUCR4tMUuigYBx16zk16TXu3aMdiSzZvPYHkaCM",
  "key5": "5n3KqHJ43iqGhGKhTuzT4JUCjJ5xTLkHRp3x6tyoCYQiYg5g8fUD7LteDc8wVYLKJ2HXsgXtDbZuzSyEYeWVQYuu",
  "key6": "3SEXrQ4H1tsePE2j2xLrExTfge9byB1kn1yCsVzcsZtRNXSm9MNj5JYgYoaosjRoRVfJewkrBLNRgJsTy8JQA2c8",
  "key7": "2VkTRfxyKzkBUTfUMhHsSb9kYdYSJe78n6BdD9ecv92AMcm61nCeD56wgFEx9UJSupGE5FtVFYoBPJV1qWGtJTGt",
  "key8": "5JcFrtpFuwuUt8Bus73j4Fdw1CRL33z8HfHo5xJAb4urV9gpm19unqm2PHPZZ2eHfvotcx9PQawQoc26wzB97JZ6",
  "key9": "nDZyW1GzmhmJfDvhnoTAACKLDTaHMjaGdveRSMZ1hogshnUPCLX8zDiesXrigLApw2yCJ6a8EStWhsf3FwXCAtk",
  "key10": "1gAJy57Z6gevjmkpBYN9SHyDjY75FFUvSLHZVskUnP76DtggeDdgWZbRCVUKcbiUVWYzPX8uganxi8k47hok9yi",
  "key11": "aGtcxnx1Rvb9FuTVyQFfv1UPcp5Np3F47KBTqAgHa4mQzyd9VxyLmQ4AcG1Tbj1dSewPLjPKghy9hYxudjnMjKq",
  "key12": "3nHFbZYVGDJmqbY1DUJwaDkHEkXrhWYXPGpnofEmHrYqU7yfcaW3dQ1eEL17NVSr1Uhtf2Sv4p3ZGMHNY2nKtqHT",
  "key13": "5kAcgvmsfLo2shj6WN9kX9Swwp2cMSbfu7TPsmPBwxhyAKEEASt184GA17z8mWYg5nrFXPG41cUB5fHkbiot7Yxv",
  "key14": "LRCvhmuAne39s2VXvj1yV7EBhrjvqoKHsiDxsn1QgXY5LY9z5QHTfqcH73pZQ1sAXKVwvMBiRZUmzhGWfagoXkG",
  "key15": "63tdWcptVziLs5Whm3ce7Q9gjUogrC6Tx4aDUmbezjtcvkhSa5Gh5rCc4732JpQvETSixo9oC7YmxV79sh7ApGys",
  "key16": "4KjeKgtdUEbRowcHn6pLbMvDcMk1acJTmsKTKiqc9MvU4T6wg3Q6X9sfN8pZgBou9obG8tu1NoGpM6YTqRbaFAbJ",
  "key17": "671H4A41CpeA77FJsdBABycmf4yPhtfbHwMMseyAXp6ATBhu574HqY6bR9UAT49QfV9wjb7vZNGUia1duuSiN4Ti",
  "key18": "36zF2LfbVb7YHzFAjfq3jTHM1Dh8GkgoUeST2Z4TSPpysBD2SAYwjJehSMXhkSn9yjswXaoQZ7ueRPK28gybSseL",
  "key19": "eyKrKspJNBp3x9R44KYKS1KdBNq46SNuvHS1GjqasUzdEiKhQXgb7FQ7V27dCpQbr7RVb1ktwqVmVqxwq9ZtR3b",
  "key20": "37ny4xGYv59Yw9AgZvRbtPLpGQTfD6G6UY4rMwxqsRRaQrdpgEjscWF9KCz5kbWK3XucRtBEqiJt6qZqH6n8hiPR",
  "key21": "2BQKCfcqzNXhsX5txdTmHsMVPZzaepZfU4f8cYjQDZGWSTtyiAPoPkSEvJSiWDhVxu11vPMXiobqs4sJzWUzkcZQ",
  "key22": "2Egf1FF9hnFa173ox4ze6fn562GdRfEvuDLHt4CbD83WJeejKABv27aZ4tHwxeh4ayZqAxFFFDBYyHZ9eBd1wUDP",
  "key23": "2kCy7pYKcACH3A1pdVsqrSU6jynUV4J763i7PgD82bRGEoUrfdvi4FGEpMv7DiVVz5LegN1ooVoWHpbGrfpJAd9d",
  "key24": "5VxQNEDgypZhTdWpdyAtMe9n9XvhxZQCZNm3w8KNN4Dq5rG9LnnGSiDTofW9MYc76QBeBXjVRqegkFHsgmXHjVT7",
  "key25": "Ce9xwZ4zhpwWPFCxgZV8sLid7bGfUFCqzRDmBWdvgWH4YASwtCPxPcg9eEXBxfqSG5pJcE646S3Kgj2Aj5NLiwQ",
  "key26": "3x58Ci8Q8TWZMEMQxkRYKJBumaV9TMjccS6SSNetz9RPCU72qkKRc11Dn7G4ECjmR8pm1b7tq6UsATz3pimMb9QZ",
  "key27": "kFrxUogJqKCCuAyhDKtczre8FgrDcTa1Li3Q2yYsxPgnvkK1KSUuC5qRAUizhLeuvKi5P1ugD7aSqwhEKWk2MAj",
  "key28": "5SW5auoRpYLwXnC2dMsxmwsaD7j4kh2hGMoHuXxkyQFZy3efdFozLmYfLVn9ySJRjfqC1ES5dZGbmiBH5rrobJT3",
  "key29": "52kr8TddB4oBZbqiFwvwxFJ2L9vhsa8aW3QaAxUN5VdD8zPEmaEgzRJorsJ5cXrvf97YyD1PidZSphWThN7DTPiw",
  "key30": "veKc6x4hU3orkQKj6WUr1SdTTrj8yghQ4YDz8HtT2X2TCwngtDky4WP57www6dRwDX9ewcDzw2JNEKpFx2TYPrY",
  "key31": "3i6ixx2qZz6qMBnpqZbUBwcEso2kFuZWUMz7ZUeL1hBE6xZgzRTBQoA11su1Uvj94QXTHQKJDLxTMAqdrBjASxBA",
  "key32": "GKahhQuuvc4UUtLud9YfrmqpdTu3xmPun8boR74opwBoj1BXPjxZDN7EkYAzfiHUJzrV1LMLxynNyCq4K1TbCdY",
  "key33": "57qi21ATmZnPj8vehViCofJXZVpV58YceEQnqh7EemduThbC8m3ymbFi2LsuankXuepPiXog7bztGTNXSzKFASBw",
  "key34": "4fsF6rmJedhFJz377oZsbRawTD8DfMUbLWPd9BnwcngymYEVeEfv32GCR1FtUk6zCe3W7nSwHobbDEQUwXFpKNtj",
  "key35": "ezebcZi63wYme3uzd9cTmMk8mGMgZnR1emApWF5XpNPs6QouehfqyjouH6TNo6XJ178VWVtfbua3CdTCCYv2D8g",
  "key36": "2WoPYbPbZsEZ8K9E68BQJuFs774m5XjZvegh7QGocoRhGbcgVvKuiH8w3Kw75ptnDLBbSPXp9whGGGNhKcv4RdsJ",
  "key37": "3fnNq7hM78ep67agxLEh6n5R7pS2F4NzQjUstGwk4ZLRVSkKjL6WeP4AzbtgxxbiUarSzM7dEGybRSEFVC9Zd43j",
  "key38": "SXeNK7PvprpH9izkJkFtC3oNANUWGpexq4hyQUqTTWcLPpCQ2Ny9FhW5Wng5Rq9sad4QZNGuLX8VsZSzrVh1LQy",
  "key39": "37YMKuUVgNAE64RNEJmp6UTT4J9JbwWCAZUDYbhRSxqGoFfoqr3C9GgT4Hj4XiM8PUpdwkfZa2iJh9RnKHeqnqFk",
  "key40": "387g5Cxj5Cs4KyaebzhmUB1gyt3aq5ax4QFuiybBi3dXEyYgj64bSAZxFJkWLigQMFxcG8vBTdazetZCL4LC51hz",
  "key41": "3FPwS2YK5vAkLxWNg8z2stSZ6CWhqyEz6MbqAZHQ4Kgrir3jPakXRuchpLoDETZNGdTzwWyAqeY55rkx9zsjTEU5",
  "key42": "3f6s8uVxfpnBcJrxX8eCLEfeZvasnvPeKTeQoUC2EeGoZqrC6P3u61wz57m6v7D3WVCKekjmWxK6F63F1emW8BHE",
  "key43": "3KjhtGW5Z42uv5KNLmidp5rJvqnimfHc4hfdW7QFDazzFFJFmTFKLaivgbuSAgztpiP1Anf2e7HP65PR7FdC8wKb",
  "key44": "3ea5bbrNwoDp12QGWMD93rFKNG4ejEFh6yRhneAUtf4VWxd8ZYLMZvthbmSfz9DPNdko761NRmifhZ3y4HPAAFw3"
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
