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
    "2Zv3mUUNmMDxhrSBcy7vzPBdGCP6StDuQXYWpx9t6ac18GG7daRzvCVFLW8Sv7K6XHpohbnT3aeHdq2ek3Z8jB9P"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3kcFbm6HnXdTao1e7SamHec32HgAURuKdmUJCcJbxB2ttEdA6arKkrKJuqirjg65UMPgdsn1VYx2poajxZUf6Svh",
  "key1": "3AuKcUyyTsK7unnC27NKESeRV7oSkZxk65waUiHYJypGNbEzTdqFBt2EeJzdLYyACCMfiTYa7fbpbTRdXQtGdkH5",
  "key2": "5kH5eoJRax9u4v1s8xfBjyW5YEjHm9AvQt2mf4gHWaLSxg9eJHNADCiNDH5ksd8wtu5zcZoRt43vgrGnfXsPvER2",
  "key3": "y5SJAyFz1iz2qmrVTNnym9h2r466ns1aXn5ByV9hw28EE4afDpoiTwEr14EAzxbSnbRRvKAiJvaqUKu5GZGBwBE",
  "key4": "3UsZ5YVYL4gcjvm17Nc6Jmci2VtizLD8bjQD5wNyixi5vBMqiof1zA2g8y3jiWZkiDB6rzHwmiEFHgeNsj6Mgp7P",
  "key5": "2R7YayakjesEwzpUXH7bqZC2teXzezdRH5tjw9SiRJaj3tq1BRT1HrKx6ix7fXUCMG6x7hmNUqpgArKckCFMk4CK",
  "key6": "24yem68DxLMk6iKjdpCFUCX929TH7rx5ZCE5SQHnjduapLNjhgEn6fr2QpREqDFHUbDWJF1tghLp1HZyn9HEHjFS",
  "key7": "4U7NoeZhhXwRg3BvKwxDADxSGy2qFjexAVsGHxRwbtRqkFscu8pRyNkDRAPBVnKvr2ey2enDe92u4BUw6RvK8t3C",
  "key8": "4drZ5wfrHENC8YgxcYuoMF3yo7wCQzUPFvwPazuET8CjctPSKM6GxuDxmoYopMEn2qDmX5KibDF3SFc6LR1tXz14",
  "key9": "Ud5hvjCeW8hSNvpuWejYg37jhqVtWAGykBHfo1o9o9NEQFePwhNhVGnH5wxqrJXScKbBWwaJam8PtsyZqKPZuSM",
  "key10": "rdm4wYk2z6zjSLMAyqZWVFbfXrogc7dREZg1GY1Ec3UJb8ur8579h6VzUom2K6PqXFwnHPztSQYwZYEfbk42QUt",
  "key11": "4fxpfj5HgCG7sRwWSR9Htx1dkzUCts1jH4Di62wE5QGFFqn72d4JTbM6hwrbzaT6TichFzN5Df6xkK1iEGMBUyj5",
  "key12": "huWVhHTgUCvrda5JnmJWDQXy8iQ2vBSrUYMbgxenzkzA1dMeh2HJzDbVTnGbmh3A17zBFveMzUyi5QRcoBuv4UG",
  "key13": "gThiyW9KpLSHLdVPbmZZrN2sfyP6Q7jqkoLdHDR1HZPtrbQEPcEVGfokjka1Ew8HKGSE8NFiMK3ycFsSxzov1cY",
  "key14": "TfbbtY1ruySHU6UzF1GQMWhGawx8W4NQBTJx9EXe2HkHTVicxtnYZTwnGGScf8U6nMf2wUpQ8c9qnDpXFfZVyX1",
  "key15": "4yeLRz9n7BNETv36PezjyGau284AKLxDKVLM7JK6WwTgsxrcnjAFCqEf3dfqP6ydoBowXU3tqHnCaTGjUewByXqb",
  "key16": "35eZH8Whtkh3kjUJQHEBjfh5r5QBagPNh3qy8MR8FFYtWkULjL9Et3D4YPqYQ6Zm6uAqJDzkkDnCaVWbBoVMByqC",
  "key17": "GVG7M9t9hQbZHT53JBY9sxfuo5cBwZHcyZBnBdRXvLb7yumLUD2EdkhLTi66X9a9CWspML1phAEBpoaDCrtjdDe",
  "key18": "4FevjxCc1uBxYpgX9av6RXYyGXCFsQ1obDMMUnZ5BAtLS2z34h4evny9Gs3pJUapPgMCHDXNY4Z5BsnnDHRekVk4",
  "key19": "m3eiHvjLHh5RjE7oKaLkYWDT4u8Fubc6f8gBZX33htM89f54XeAeYN3rF47znwQdf9k7FcXJeVTm1YXKNaZJ8hj",
  "key20": "4EbyKhFG98cPYfC9AgcsqdYaHXb2ETZ9zz5UVF549gDvUHwNFod9ew573aTnj3RLummfdebkFmXznzzWD3AUiDsX",
  "key21": "QGCrwFeWA69TGGFqMoxfShycP9EsHwqnzojMTb1Xu9qL5qxmqZJFusuH75YnyEyJbvmDx5TDf3xH8DutG3F3Vk3",
  "key22": "3B2hXLbuW5XvLj42feuJ6HA1QEFoviPNYT2ngThd3EqHpd8rXKQkq6XuNgyA8AEBuxxNAtvf9A6FR59PBEHWgKUP",
  "key23": "2CkUsaoqsR3VcS96rpP4x3VARbXJJJhdvxn2w66s32oVZMA9QJoaSQAfDDx32vn6pTSLfdmhmUQrZ2nBtFkgUpE4",
  "key24": "5FHQtTNdPefLPxhqETXWevPr6d51MFtAv6iis9McPNTU2D3M8UCubNgHhDjLQF7EXDgVXj7bEb5xwREKLKrVhprQ",
  "key25": "37Kp7Xss4yQARatUrnZN3hA2d3k22cdrSE61W4AovEG4aGimyCq3R7uBWor3K69byKe3TUEpDEyXLpQb8VbeDYzm",
  "key26": "sRweocg43wpr96DZrvNnLrrVxwQGC41w5oW9CN4Zm4NGkup1P8pN2fc9gFo1Wg4deX7rWAQrd1KYWw8WnJJ1aTU",
  "key27": "2ZypdLvjgYBxNumrxq5muK3SWW7k74eqsasEfWMFavw9pw4bJBvuXaYDxsDSTcqQyt2qWQPgxQrt3ZsXLzGWbnKU",
  "key28": "5BR81CqYnd93ocj8w2PYEZURayyKXfGgTktzQaE9KH88E3LyWSS3DXF8EyPuMaPC83Q6CL5hGf7bRcQWX2cfhpZa",
  "key29": "2NXXkA2iZ5twve8bynCDA9pghDgMLxSwJ9kyARNUy7f393KYsW9Bo6VNZUccehH7T6Jbf2gPsiGmCEt6cDeL9WcH",
  "key30": "2oRRtJ9ohGoYHaxcq1KqwASR4hEMWjacKEv5ztLt2GqPyxaRtuRkr8e7fPtKQnFuZC5dfrD8cJVACPz6T2gNRGqF",
  "key31": "3n6WKtgozhKMpq4SDQpTpumMBW6XubFuoGtAZsgP23BEjjgi4pyTic9SFpWpYFBrm9535X9cJE5Xhys1ZF5oSanZ",
  "key32": "2YaYq7GLikrMX1prLXRRvzinVuSj8vUS9rHN3fjbc6umJnocToM2nQQ6L8AvAK2y4s8u7TBFJfoqKA2qNQM635K7",
  "key33": "5GXLYpxQV9ovLdLA5byhSGCNWvbAgP1uVh79k6zkXHw8ZwGP41N6wscuxx54bG8VnsgBq3fDBW2QN9CwTaze6P3e",
  "key34": "2q13CRegsJ6sQZt3JVT2yEC6UbgxGTrd5hKvfoEuwSWqxTY17XnbjBYpjTTzhgk7FSNx1sERGGoHdAHnD12sXgtB",
  "key35": "gquCaqTK9SLEia34ufpVZxWsQ6viGkyaDkoSzYcGavwtFFEZXVMk8SveLkKXRhgLdHoLATb8sxYf16g3YKmn4YK",
  "key36": "3w242X1PoroS3Sk9fPjkVvCYkxpTbS88GLf8TMnUztppDiT8eKqb5RacB4ojLh83NMjBCWmityaBaWi3TB624HcG",
  "key37": "2qWKA9FVZdgPUQPZWsYLyAxSD4ByqaH69hhG5jLLFnUK7eWPgKjczZ33fBwy8jNcAvHPiLviDB6M4BZwYDwbgae1",
  "key38": "4YCvM4fTp2EpTxqGS1fVJo1vb8HwvuFqh2NAQMZjM4MLjSS5MFSBD9bBdg6H8jcJVyhGd2q2AqgVFzPNxNXUivWi",
  "key39": "jyUQusSqcwbPd8pWGJ1ATxQ25ueZ5eabT5TN1v3Uyugoh3fVTeZcgbzLmuauhwjXF95frPBgvcE2CabZ6zY6gV3",
  "key40": "4f8kDvCZLEoMFysjQY9411HAZ92k9DHwhjRpyGtJhDmLi8L32KrYJRRZeGMKzHdRbFzJfqrzAsykkUjNBo8DDqvC",
  "key41": "3ogpbfTM4AE2D5eZYzTKwrzgfi1e1YJSgANhK3Q94VzKDKEjymDtif51YZByrfHbJvN17YBjzbsY1Ps9rHdMPBv6",
  "key42": "2kE5oMCLpD12Fy7e3bg3LPV9ktnK8CiSW4nxAM3bXLHKfFgD2EG6FF8v8uNaaR8iasMv6WTRu5FRe49otAy3osWB",
  "key43": "4WbBoHmhkSHHPtzrtYEFaciz2jqAu2Eoqz2f35C3WGETRAvaGrhZAVpZqDbMErEpuih9c8zMTmrDdi94j58tT1oU"
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
