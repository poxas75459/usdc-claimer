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
    "4iDZmxqVUnHX6NYw3DW6nMrykCZxd8LqbBwqijEV2zXd3uJcgd3bLoXFCywkdDgkgMn5GxTYauW9npkuhRww49Qf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4HJAwKvbKT2wiyPcrGq3wo5qCFEsNUpTriUqkyNZGxTdTJeVzuehyWBw2bSrPWMnL1C19NAF7iW47JbNoVgHxkmV",
  "key1": "3eFzn4akYFDZoB4o8Uxg5TEzhaGBokpAzZn2wZdhgU2UTZQNdYV4ARFR9YggMgV8Bm9x4riyTRE99eTmzcZnNo92",
  "key2": "4HB2qRnmrcbJ5t8Bj4XFbo9EAhwtcd1EEjb8s9pNw8HMyD5E9RJY5Z77G4fqszjYAqzer27VfRwoscsTx2RhJ12N",
  "key3": "5EB6QEoK9MhrsXS9BkPquM2DE3CeyD89oHrQ9voZCTuKue4x1Er7xEs2MCJEjTSa3PYhK4CJHkdkDfqLaQCRFR4P",
  "key4": "2NMCyL6NbBQgKLwU7xXqoKniadKSgbcXX5aPjwVQk54jkMRaQ74BnbZBujEVWjUcnZGmLGNoKGS3pbJX4uKUwFg6",
  "key5": "3vEm8Hxt81f8omC3H7qp6Rfny8aNRsiMsUGoXMChYAvZWZQ6RVG7ksvhqKYcxNoH3Zr36CR7b3Y1tyCmFqiwWj2C",
  "key6": "66xp9VDaKMUeRVUrcT1y6usv46TniqRu424Avx8R7auDUJJnxiY2DDjYa6uif91yfJagTFN1eZRuF7FS2WL1JWd3",
  "key7": "38zByzz61qWbyeQ7dRwh2QmFaDpFxQLid3LjbQJU3x1hzNexmNpK7Avsxsk2HzT19hm49VTMFTzd8YhmLD5Rk3Az",
  "key8": "3wU6zUhw8xBRqHKwM1MYRNDLZ4UmsSLfCZPMnHLPeuMiJFSQfmdzkpgGb15BaWE7wPE8bP9X851f99Pd7sTdA21c",
  "key9": "4AtrYNqTRKhj6nbDzj1BvTH3uDyQAC5QfeCxRFucjeASYFeSBAk224HLj1GAXVVXRtxsUnJHup224y22oLqv3t2R",
  "key10": "NDtCDk3NTMrEeHskJTcyf215J8RY4N596r2vGUkbQhD5FF2KDuQiH7TkVyP8ohTR33S28X6YpbSqRUEgFcsvQds",
  "key11": "5JhbHU6g8Er1TbjSjA6XA8exznzK9WFjJHoQaARP7GxXHTbbETh918As3ZGrG4B5zutv8GxmVcMjTd9wahv5UEoL",
  "key12": "3fmZbXubv2tGk5ZPk27FGWaJDgYc9Cpk4ytLerqWLF28UNhBdq8CTHKg4sSnRCJJJX7hP7ravRdEEb7bs7MbZM93",
  "key13": "54LgmYpD1GgLTzxGEU58QawsYpCJbGUKJrRuyb6iQnpacdLeP38qUrJbdRb2wvBLFTTFuUyDu1N3nkSJ8HRho7iA",
  "key14": "3vSoYEanVRxzBN4dgHpdqVNY3vtkLW3c9Gj2q88NiArqG85cugWb6vY811EwkM7M1sVgK4uK7VuQHR44f9CCWcqn",
  "key15": "KYiDiPRp8FDxTceGtQJAE65oe52mfZwB59VehXnVExLb2FczRPCHuQVpuJi7WSWH5Egu22mebuAaTcsRaVzkLWG",
  "key16": "5scfLzUshWUwS1d91kaQhr34co7Y2fVx8M7cnmXKjPj79bJ1f21wkT9PnGhw3d41bi7uaYX59mpcH2BZvPrAoH5M",
  "key17": "n5FQvAcYqBSq2Zs5RuPjR2DbXRbFQ9ZrCNeqZUNkksVMLJw6uDRzdR25NUq4hyj1saPN9ugj1oAMT7JQCSKC25v",
  "key18": "VaTWAkWcbtDP4FxhhdEuh2Dr7ZPbZ6LNGutgqEa6RFt8cqst1Ko9ewGo2Gegd1wddf1z85jiSKPVkp4LUTdfYUv",
  "key19": "HQRNn7J2BsgVWJTUKWGdEKA5tuYXBQZQtt2bUUjiGwmeBTPyV6HEgTbZXk8vsbUUnyKUiGpbswTVgnR4ASCvjjd",
  "key20": "DchZjrCKVWWr3ZiPGjGXvHVwhFNaEzCiULT7Qdtf3umjpeVmhGdgsnZRUcesaqsqmUpLPaDTHcwgMdakCi4XDDP",
  "key21": "4XZE94xTVhnWDukAWgWAKB2esWWP2u4CRoh2Pq5N9fJGNsKEK1WGtbmoGtzSnvThD7pUkophd74t8VQwVLpMKVrf",
  "key22": "5fgDMqxTdZ6Hsu1Msh3yzh2t4yAtT1FHDNzHJ6egHqnPBECb98dcb3sKGCLC45ihUmS5X6ZAJMYqeMrmcybH4De3",
  "key23": "3UHdxqnCZFTuPwThU1F9ewZsTErszKeX5kyUd3Pnqh38nKkpmPRU3HjuFPSqe6BwSe6QBvGmiWegyJxzp5B8RrNZ",
  "key24": "336Zjnr9swoniEzY3JDALA9qyj3GkjhCnSudmwSMUQGsz32qrPZAo9xBXfQbhcNZPagQeunanJkyEpcpJQd6k8Va",
  "key25": "5xRiioLLzAEXQzLsRXjJj7QHYVVSb68wLELx45quR5nQFUhGGBz43MVoVV3yygpTXZ7xrCCWBRPFJ18u4ZNq7brU",
  "key26": "437c37q756j5fb71qGWLqRDBgUk54dSk1xmxp4bKeJ2EeQFMcFYobH13vKfgFxZpLhXdKFkcXxoy3LSyBg1bVZnK",
  "key27": "5mHda15hHDVqoWfMDCLsoXEuZM45Kp6HyMHzgtHf3j7Rh8EgPs5iMig8WUnDHyztaNCzewyNarHzERVbbbVN8pgj",
  "key28": "5K4Y1wAHwdZ5cBqkfZ1F1kUTNqZWVyunJmGDoxcAGVCXFpFfGWJiMbx15Sg8oxWGCMY5GbDU1cftnq67WAg1a3LQ",
  "key29": "AdhuWYoJEsMZgW1EY7FhzUkoPFEPzx2YxL9UuCDYjFcGYKLUyaQTTFhzdk5yk6CC3g7BXdiNeWTxhK7jUy8fbnh",
  "key30": "Jkep1qhP4S1wDJPdZLCi9eosoUGgv8cuhj9znHTem94KMmZKZVGKSZ585owQirP6FWQKxQCyGGPwgr9K45T2ruU",
  "key31": "4W9ybavoygf2L8w4Ktx6Dvyqdc4BDHaJ9LNHQSKqQv5ALB7Ro2xtBXBEvwhmqr8hLH68a5rBk85szterrancWF4z",
  "key32": "5JxKeQ7rMEr9tiGHBtBEY1xSNjY6VoYnRxjvfTxeUEL7BKK7My1zkSx7UMpyKpWHuh4LmGCs7qTfff6og6EzrafG",
  "key33": "2hkwY5U5jULszTxZCQDdbSCsFTaTcYhhMv5gh7Gps7swsgm5MmtpgsVHZpSw4NCuYcUkhM5YhSeJMuyvttLVqT7V",
  "key34": "59b5QmsomPDiy8bmQsNMfRhtmicuW5QiPtuhjxP9xrsqbcpTvWukjXddmnNj9ZakUkoJ2E67u7yj8cSEBaHaGJFN",
  "key35": "4sS9VGXpAv1uubXpSCheKBuaCojnQPhR8iiUTop5vsqTvSZ8swfdTB9dLsstPmxc7vCXiULqou7nD3bFF2VmyUaS",
  "key36": "2Q7SuKXQDuWcDf3ebUBZVP14QoQnH8djF6n2Hinzkm7NjGxEgs3EDeH1pJGSrJTcesPpAjE9E9MiSntD4ZcgapoH",
  "key37": "3kQQmzRv7bJHXu5DF28ufUxNA21wbtkSKymqF6dLgkANa2c2qSyDLKAdjRXQv3Dy2EuZL8ZE9zBz78mNMcqj7NJa",
  "key38": "4uJpPdkFvEwjqUc4XoVsWumGUM7F3gcu2jYMprew2HY66XdygHJmfL7MEE7SmDzB6nsJZkPwnCYTbUrB5vHUvu3Q",
  "key39": "2Q1HJnjyoMRAqJhpx4Q1ui5oLSopAPH6VGwQ6RTVbMuAYT7dcTEyc71kyrivX2mPXgynghjSHmPgQTgt7Jg3V12B",
  "key40": "4ktyoDxtiiWGGvgJhn6DpzHvD8rrJY9gsNgVUGCkXT2EGDoWfMW9WzZCWsH56vb7r6DdonNr5X4mXmRXHqzkJCzW",
  "key41": "5qY1DsC96i2kFEVHReyUU87ZsWN8VjFbb3tLmPRtwqoetXkmTABNHM2Ak2fbbtkTiqdY2EmkbtUFNm3RtgUff9d7",
  "key42": "4a6kQd9NKKiaiPPi257X5sbJhdrcnrv1p1waTNzbRwgnDzHNRS99J2rEmw2VLfgQ4RxALT96ATxe3zYamFUZGWbY",
  "key43": "PZoF41ud3UeUuijsBMFVfAEaR6skj6W6c3QNHEqdfjvpkeNbwqiKuLa4Dp8zCPFtGXd9F5ZDYiNiw7ACjQgdbCw",
  "key44": "GwcmHaXBnZkyZ9qGf5Q2L9d15zoNAYKGHhHbcqSeNnUm4m8NwxMkMsEz86ZN9bMCSUFCheEPQgP3bsft7p97eMb"
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
