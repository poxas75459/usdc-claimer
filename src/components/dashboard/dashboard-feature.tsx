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
    "2kphg98gPRa9kpfLfZ4wJtHSzRPgMB1EhQLtZsugdwoGjzTqePHBUVZ2LXSQmxiefggJLjrdFGD3MM1NTGrMjXy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ceQWWssUyw3CA4EyekFqzFc7V9wkq9nT51FRPquannEAfGURs8GL7E6Pb4qd99QBxLMRQqFGXPodSk5W1aacsQD",
  "key1": "3uAEDJsjFwg6zS2yQJAsTX6YspbSmjRBF9gfmBzMmb4VBoVJZ4dAL9ea1fT6LdzDBLQmDYdHqWZxUkec49JzaFZn",
  "key2": "3qekEZKzr1zr7jyLjuYEviFNUizHYMZ7ucB5LgwE2SZagfJPShUir773yzSQtVsGQQuURh7hmiJq2jziBAkv2WfN",
  "key3": "2MoB6hf1wXGouCcQt5r9n2QvQKo5nLaYoPsJmpzRk5dkt4Xb1EmKQybm9Y97y2hvanDNZDrR7kb89uwmTd7j33jk",
  "key4": "31gb1yf1CseY83V6YZVJ7Xw5i7B2SgbG9tVrH9Cmdk2PsZ1smVjmMPFk7ojjFfBsbCWPSmvwBgvckrbqNoxg9B8m",
  "key5": "4TDFGXDCao7aBbgrYYhrGU9CoeZ5Se5VYbvzPA16dG2TYVywPCQMCBLXbHTMN6tm8cCkHKp832SyJEYnDkw9s8TL",
  "key6": "8GzHqcHQcBNoN4odmrF96jDFTqo2MegwuUMZ7f2H1GK4ETiZwi2F7HGhfhZWLqG9okg73Rio72e5XWsQyEq1BCp",
  "key7": "2AAwsR3cKWBNgmEYCEs6HbU1TNuHFci2FjUHdDTZDe673Z8QP4VPgjyotPLMwY5SP7mhR6bBW4vNmqLtqA3iH4nC",
  "key8": "59ustownmDHHeaUn5jNqq6XX1K2NB1g1ZhCBxL743n7kybcuReH3yabEqBZF5sSixQWNN588F7LA6AiTiZnd24Sd",
  "key9": "4FYCvQkhNFKdak5CZ4dBTATRdicSMjx412XV1evrPkUeyDALETCBvnjjsD17wrv53D53BqQaZSEkegsYxrEM26C9",
  "key10": "4o3rcUp4ZpxkU8y59LyQ8J7sodwEdbjJodDREKzBE6P94TZtbkVp8gwS26d2CpCMvt6jxTBFKU7xqsuEgA57TDjK",
  "key11": "34Di8qELuNnQX4mhJAyMSidYWzu1YZBN54zkeX8q6MK2KMMQygfcqgFef9TGP6tSTQWdhpjcdxto32HgPqa6XXLM",
  "key12": "UxLWQRfBjbrzC4dm5SrbMkfAopEqKcXBDGkxfqV8vUXRV7jwSa7gVqgqJRAqpD1EmfWrXMgiW1WPWaHzSicvBr2",
  "key13": "5UZMtgwHhFHereXgDoKLxaG3bHtUTkLw1bsVNZ7egMwRWted4dwrsyUE1BYAVryvmFZF25AzX5dLjZMBbJ27Daaz",
  "key14": "4HQwe2c8XiRGWGG5h2oTnB4HX2x8nUj2cabnRoRfxwYMg4hPvQmYw99UJnk1AjGqkeZ8TD49HbBXv2zJNWCfRtEJ",
  "key15": "39kgaFvm1ELQxhxAjwErGJNfATJ8h19oRvTeukksXBxELaqNGpUJxpAkrs1vX24K5d87cJ9r3VQ8tinRVA1DJLzd",
  "key16": "5zdePkfSy7qaiTmHhk564YhPCxpTxpu8wGtvX1qT5hVpNbBXSW83QkjbmjZvAN3ocZ1RoeaSQGXUWfhfd64vixfB",
  "key17": "2TARNzqXizy7d4iXsAtJvwSVJtG4M7JeLc7GVip9zgvx3eEUurNgcQPBhKHyGKgnBD3cEFHnL6DhmnkfmXhw7XAx",
  "key18": "8CCiuWkgYTEj2ztkihSjzk6xvt6nqodRRD8ZNQPcs1cNcLvkPeg1jpmJq1vCGdSBgon2pVavxzwQPLjfDFdt8sG",
  "key19": "3Zn78G9AcEtjYXUzbtyg3bLUnQPUAgfvDd5XutQwjRgbrdoA1QFWsdWAi1LJbzejukd7KE8RjNzNCfMakAWvxJaJ",
  "key20": "3zX8xpAipm9LwXKVtM19dh9uDDkYUYkQFmfpqr2QbuHcJKbXX49fEZuXLF5xeuMEG2mmXmvvPV46kydHK7pBdVYq",
  "key21": "26YTp4xVopQernc7L6MCbNNFAc9PqLL1myyMkQtUYyuB8j5z61iLBwghptk8kyeoP2GSRNAkbzrJBEtsN3XYa8QT",
  "key22": "26HvFFcBX3jTVguirA2W12WqxYJLpxyvJKN9AXxMBaTSGmBTTaC4fJrx8s13GbuEAMn76WoUgKi5JfCmsCQkNupK",
  "key23": "3pbqWnxFzRg4nPYqapRj2bTQxwecYedm7qbggU6E9VkD98uqkS3b85Qm6GRVdzgbsZMKim9QkMKfPM3oWkpWhPC3",
  "key24": "pC9VPhYwqhbUJHB2KEoK549Kpj1KVcxvg84SpwyjmFMjfMYmk7LavpCxjCDy2t3tBpd5Jn59o1TvedwQkvyqnJn",
  "key25": "4QtcU1ruif6YhWdfXXdms5DR3TgoWuCkxGuyek4DeezSX4wdFruGZh6GuLk2b2yv93T3pM7AQNSF9YoPQQtMLbxd",
  "key26": "4odwZz6an8mBcaxnwgMsD57Lzw8fwAKycVmw2DP5EtB5vfGqByzBx7hJF3T51AJtFd1DTXVspFC1HvD6KEA4coCe",
  "key27": "zKVUDQxVS6U2aiRvaix7m5tcyMQBmkAPE692yPUv7eyyi63sogXTy9memHR85ihk7ZBoqsMmWecZqNHs9mJc1LR",
  "key28": "2rvavcrkdbVKznHdqBRZRX9x4zMuL9JAoakd2HeU2BEFMQJsTW1wrfD2dGXh5m4vcidjg1qS2pXaFXYkoA25y6Ht",
  "key29": "5KWr6TRCCc5MuR1uiSxAmigRNoCWY8XRwXqTZmY7aU8M3Qu3bYiTwwRRM9MMqJ9GEUVXd3gTa3cAKJ77P75FkfSd",
  "key30": "2NKNR6grAaqf8reHZv1NfiCg1LG2iHRJswSb3gpGn9P2WiHmoiiZZvZt8W3cUdFHVSWAuUDAdKJj4RTnkB9r6y1K",
  "key31": "y2pkiX55KG8neUvRg3udh8Kc5vL2doGY3wi536Sk3cSoSBt1PU9pPEMRo5QqtGqxtBj1xkzK8b5xWdXKCibPKnp",
  "key32": "3v5TC57EmcsMZ7FK9uFF4gfeZnxU8F3N9tFE64cd8u81xRuvsr6EHHDgkuzpVGmVPBNSY9eDHteuKmRQfC7uqxLn",
  "key33": "2w4Ko8nrQLHUqKjWNMqmx9bbzK2MbEy5oKYocGbUJcJanGqAQ2r46q5XuH4BkapmBdyR6H3DyyGTLKDSG3KMx8qT",
  "key34": "3iPBvzQDBx6iywguynrrAoctDoV9rwx2RvkhRJjARVavsF9otqD2aWTFy4jma6ik5Kr3wwRyR2hQA6zSHDyvkpkN",
  "key35": "5stTHSVYezAsKZa9yoDQK1jK5dv8ejicc8TGZqyhdWFrWDpazKrXBrEz5e2CggjkafpDKGeY2PZeq21X5x8P8UnE",
  "key36": "4Kzbhp6F6hB3jKjXAhz9CmYYFqHNARMuXLGWXgeLK6gZrjSpBPwSEiWrukz9mCyaEV62c2R6ZhNfJASS4kaJw9gK",
  "key37": "362s6muAYsYKbY7AMoTXYbyHLJYJbuRTE6akdiCukNpqjwYSZfWMnPpSCKG42cVuRiKYgcRPoV4pZ1FU6D1ent1b",
  "key38": "zERDvaMcjy2WnSbAa8PmrN8YFWtVycnK2pxdUBqwNrkXr9dSnFySfXqcBE63tyurjeWrJ5oM1UjENHBWbSeuaFY",
  "key39": "5Xb5r17mkepu4CjHmcKbxUS3JnJGGLSFgd38Zwtw2prU9GRbg4ECfHAr1gvH2Ax3EU9F8Joe4KaSGrTXyS4iWSwj",
  "key40": "2w6qht2EgWAZE7HrgyGT1jRtVtbrECGPcN2a3Mx6qi4Yi9vQV1yr4SZ6aCk2eCW6xHRo4KVJ92p51wPpadXuBENN",
  "key41": "5qcN7kNeFuWuqcNtk63jSKB8ma1QVYSUbYotR2u81YSTzc85CgVJefAZ6xXgBQeJaLxEve7gyDdMurX8aErysh2K",
  "key42": "4uYapxKqkQBFZDZ8wnBzyHBEMFeNUAb84YRR9Mn1Nj3j8zdPXm2UGkc5C6GmUF2gMAAQrVDQFjN7aXw49SkGNmwt",
  "key43": "poxcu6JXk8vXL9SLLyJGLSXZt2T5P9iHdpvEjUWLpBHu4ViQjePtdctSMypL2U7gCZBME9LM48WwhVb3kzPkk7p",
  "key44": "25iYePdX9ZMaaRdQx7M4AL2Pwa1QEF7JEvwHu94twtDotd8WghbYNbUSWd864qwXRVViYESxPrLtAsqDDN4DtWDR",
  "key45": "43vuhrQsHojCFhbDpf3FP3yi2MhGQ7PauzTPCodaFfVh6MDaenvQFsGAeYbJGz4AJmbSoFUdA6Rk2FUmGQXbwnjH"
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
