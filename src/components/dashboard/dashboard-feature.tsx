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
    "48nanSiFTA2EzFY2TtY1UCnV4RLCuD2QuyqxFaPXKchrtcdKicFiaoZsB5kvvrv1ZBb4WHyQFxNpA27zTzJ5k459"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2LVWDCeHonQPxdVHWC23eEyMyLoChdfH7R4ZHNBwnQwfDHJXCHHxfFKatnoMSUCHfWktKToeTjbvc9bxRTLF4MnX",
  "key1": "4phjJqDntUAynUetnyQKR1YeB3KoMYuuKJvdpVyezrrDiEc5JPrmiQbW6iacSh9oa4Fku9gxwuFZ7wqHa1ADGHH4",
  "key2": "5sAa1Wb22JmdSrnVoNUFJZc5TDnr6bUzCc8VHgnFFBVJD4dMsBhJfXszbCsKatyRA9KR3LJvRqhc3qppoHy16J5f",
  "key3": "KRiaqSq9UdbZEYGRp67NpRbkb3hCqbMoWnEcmQmTS34T2bAt9rZGj8MTEJRNgmmgkJjk5ifDRb5cDGycYxQFF6B",
  "key4": "3caEnAAf9i6Fe3iqhrZzT1a744sJ5G5ecKQ4maiWWfnAfU3MPimnh7C2Jr3Lm2RYFgPEo8umhb2MewiV6dBSS9cd",
  "key5": "3agE3A6JKczqMisvoML3v8atrh9EQxKpdt5AKedrQeWDXEoUubu3EhhRgDcN7WTZqXsXLWVa5LGhUQ5C11eyDoKP",
  "key6": "3vCC4nr4WsfWHvgUFfPEbpnpm1FU2kQeZ5q6UksVWUZb6g13SE6WKVdb8czFfnsWHF89KxXDGspNYFzTGCQofQKH",
  "key7": "2PgiPqWYyvfUEzdXdmUSkUSN6b2pPbCjzVddWeyVsqsfeAC4fCGf5EXuxy2UTYsaKyhw3z4Z59NAmA4zHQAz7DrC",
  "key8": "3uoAR8TT3kzdx6fKnxiVbsrrbQLxnkzX4KoKPwEr7nr1CK36a2q2Yzwajyz67J3foiaEPqKTsiMHZnA3TooGiMrR",
  "key9": "4MJ7uuZiKFesxJ3RhYJo1Br9kxBqfNFiX8ANiZMEzbVEvZ31QYnVkWhL8QyZrtaNSXk3UAtuYRzokrJzNwWd5vfu",
  "key10": "2fTryNk5C7B7LyJUuSKti1y49i7Hb7zEhBAzavcePWTYffh9TS2xm7kM1CrgZfXbJkNceL5kETa753MwpHzFmryU",
  "key11": "3yMoEGDKzVGrh922rsEsMWbNLdaVwpoBosqUZMkFvuYa4jND1iHEfokAbd7YauFDAWZEHCSoPaKmoiakQCyNmWhb",
  "key12": "48V18TW3ccyf9ebHWLszuythvyD3eE3FkmNW6mCo6aHuD1vJr4shnj7EGx11TYvuQmRY9bsGijDRhNM3RcxadjUY",
  "key13": "4zNH9TNNN8mXJdJQWqrueUcZVcM4RWGNnCf5SKrFmTSz26HKPmwxxjeFc18rSesZVxQzDUK2FYypt7EKNzTSafQX",
  "key14": "2qYNfCXH2So2PDQQ5RJg9APRjzrTNx4Yj7i2arQpoQxAaoLFZD8ZPDqN3NatP7wrz7QYAZUiVxuZyt7XMK4QosXV",
  "key15": "FPzCaCrqCMcHDFGCEfC3XkbUpBK3uLyMWU8nNCzc9uhjFAV2eNDD48h4ZaDKcmhR53Q6QUnAme79CVDsX3qJmUX",
  "key16": "4MrDKvTnkh8pwjMChJuPAWESiZhCVeBKBj51nM5tJZ3jhZZ67hmNCKceeQgMThmGjjGnPSAhopB9t3UkTVzKcy6w",
  "key17": "vMVwRLMzzSmCaDSWLNw4ocQ53naNRFaUuiyvnCMbacrdsrGw9VQyUmKN6tSv4y3g4oa3JARTRF1iXYmcuayADEm",
  "key18": "HvSr4nZoFk95AtXZQeAsoSPvcYE5JNg7mLesJxsTywAG9HXx4djQUSsBDYukG9ZCYKWKgj6WbeUJji57UczbmRg",
  "key19": "3xp7PhoS8qMMCB8GmK8W3JqbTiWTfCTKJXSvHrRZAKzTqeVH9vu9UkYQJNtLiXQJJVcdMBE7jgiN4i8uCtGurCt8",
  "key20": "5BG849wJqd9pMAhJTshtjcN8sn85Mv8Y7rDRNdBzqHtAgH76Yh7AcqBCGt3v2NMLNDcwGJ46DFYGyHrxKp7tn8LA",
  "key21": "5Kdpk25EwDPAmaUJaU5UroezFHzmrZEPaXSWLXZG3MYtoR9KaNmASinLE9wJhJwrkYuqmeYHfJ8X9J9rQ3rJBc5k",
  "key22": "4NqKJFH693rkLQcX7tRF99sSHRtEs1sxZQJh7989Z1nffjcFB6tWV1Ymfzoyw6qDtrbGDSZ4cz4kUyGBkvrCn5rd",
  "key23": "4ZJcdg68tLAkBctbKtnm9CZYU22ojYDkBwa9fbKRMRtZsDPgGJutRPSoRAaXNe574wUmoqsMbSzG5E9fUJhvsnwS",
  "key24": "2kgxkRABM3ZqWPQAJErhefKTAgSvD59ezYpGApLGEf81z5p2sJK1ueCFcZ6wJwuoAyzxSe6TUbLGpxSEDL4NXM7G",
  "key25": "25rZtApqjWb2NcEwLa867qAepSxVaupn59yG7kZ1uhcJPbybTickb5y4Kt7CygvaHkX3VPihWZodTeirwX7m6fFk",
  "key26": "3t6CCf27qr1sNi3WpCE2pyEFCusqtdP5AkAdiDP3xDwsGy5E2YUg6KsLT5Zk3d4vGpW9ycVhz1FJ4MSxMMEuqRB9",
  "key27": "hYaZs3N3tYKYcto9VSf1Zvh93xqwo6K3xUsyuNv1n1woAkHupdbAex6EHsacou6x7BUw2ytBZhZuHxnj5LmZvdR",
  "key28": "4sc5vNb2e1EYMw84734meX3pWChWtMKBr9tqpCkQQJsC2wfbUEpw9ad8Ue7bunxiRgjAgkYPzSrqkvkjnKZvdi1x",
  "key29": "4U9ggnmw1T7d1gyCoYHeTJKffBkqMLTooJj9WhKXgdFwsjayY8LDiDYx97ifWSmTXCZ2Y7mMdh5Uz8bmYAjHdMU9",
  "key30": "41h4krE2Mvy8CmVKDw53QXXHY3p4rq2ZAH98s2w1odkndEcu9Yd9YUte2GKRtV6CAbzzDTCni6x17mDGj63vvrhY",
  "key31": "3wuri3aMdaxyVEBEaCnofSD56eCZS4dEHjm76X8G7kWiNebqJQC4H3iPWaJUPuBY9o6viB38C1eZPv6dLah16J6K",
  "key32": "4zPGq1gmPjixLvDqTRAMXMobppxo9ZMreVwic46jEtLR1sccp1jdcvsRPU5W75bbEYGv5gHWuKsgJf4EHPdbGg1z",
  "key33": "oxMj5s7V881VidnCfAwsW2y1HMubYD2XRnoAUivT3x9c2CoURrPistK8Z1k5BPbeAEx4hUmUTPY663u7kfKiJXy",
  "key34": "4daNacGkJX8NdJSZu2dzCJJPuJnVoPxvEDzcg6u9UR9MfqNnq5JFHZ2zL6i7hkezKvmpVSsThh8EUJniF6XY7eDg",
  "key35": "27pLAyTUffnTdJpNKDwtTeVetxvNQDasGmuAjmkJ1dR3HcYEcsGUN9CdrVrCstG9Ed7uQaopUBkLDzz1iG85ocSr",
  "key36": "2RTo2JA9nz3ftUg9gtYW9LqHxScEysRYWcUs3GxdpcyTeHkPp9PN8C6eUZn8PdYfr875sG5RoRnc7bAtGRsbTXHm",
  "key37": "LrGBebKYSaiLsUsVkkpX63FaZbDk3LJ59DWUMxGz1XEL5zf4FntTpAafMeeoeufu2t2cvxYmvVVkdV3igxX9xHN",
  "key38": "2hVSCiD494eetaNDwwLjKUvS7qtJiwFjWPbwuqnhe8pwpBCaempVCsb8Bva1rCWrPbU8coEoe5Z89r8hykLTU9a9",
  "key39": "5dMtQCC51nFev4tBcQJDpyuZbgeEDGdiSx3GmgiVTbwoCvXxA31NSWDPsegHZVXn3irYK45jKtSQyWgpAX797PrY",
  "key40": "2dJ8soei4dKRyRTaaHR7FQBiAK8ARFkTLHVAeVWS2Nh2eSwrtiUqpVAmKUbLZKMKaratYnrPyyqZtJAw4ZDjsQy6",
  "key41": "3KtM6mTtarzu21Ve2xyjpGYxAPHaYu43fkMQM4uux2xJZ2XV9LwoNcyqzmWGXLU72KQoSsXUtssv2vNDE11w8Qv1",
  "key42": "5a7MyaNqEMDUCwXUqXsituDRV1JTkwxqmvoSxiMQqULGW9vL22gA3vRDb4ZXDf8xWZ16FL4AKk8dgvxpAzD4dQTE",
  "key43": "2719i87z8VQdTzakgD9hoMLN8mpKsQGK52wXsULcT4k4CmHfB5LjuGm8uC27bQVm3S4GCaeGwQHangNs2J1iGuHf",
  "key44": "5zdXHG1Qrc2bQ5jvttS14AAGwg2gUU7pp9RxCxPxjMGDqnByFVdVArLMXNFGUSdvmGYeGKkGKAcLpXPxLnmnsQK",
  "key45": "2Fw8vLLrMxs84XqFFUaiCVJwh4QyrLXPniGR8hnpuatqkUDjdH2WPtjkFhDsVkduKPQFUeRxs8Rzs31Pp6T2ku11",
  "key46": "JxcvL5djs7xGQvpRWKjhXG7nZoCnnRz16Pre98hJCdKxRtRk4sKxccsA5AXj1xMNTp7qjUGDsu98BTbm65vYHRa"
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
