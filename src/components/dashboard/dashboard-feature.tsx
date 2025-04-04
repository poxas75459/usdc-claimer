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
    "5e3XehnRHxZ8tqMyTto5vwv1QQgmdY3cfYQ573twZgirPAXhZgsDwvbnoWWHSSGt6cYaTsB8zU96hmpkTqD25DAJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52kxSkjSt84pRMBzZ3Mv6zsohN5ZG4KzzcVzpGDNNJ7qHJZeQ9hv7UKvJ8HFzACyBLYjoTxJG2Gz5dAkCJPcW4Hn",
  "key1": "4SjkPY88mAUHpm2rdKBRMU7cK5dM4mpmtWthqnwbh4jU7GDTMGCgZv36kuDEXWUAzjiGQFNFWoY4GGL9eRAYviJ9",
  "key2": "2Cs95L31kPhRtiVAAKVSZM1EeP8fSDprYEhZbKcHP6VeifZJKucyWH4smD21utggY5nsR1oPRACwnkxjVBffFPth",
  "key3": "5nFVoaQAqbyWodmEx261mNkatAtAitgLjtTBHXaNxD5uA7zYrfn4Mr8rQyCGDokgMTKsAqie7ZvRTGXXA4PZti8",
  "key4": "3PQtbwRFc7oN2HsR416AP4dEjmRYWZN6kN226GLQSu6e912tpz5HCbaEf4G9qvgfDgyyj1VK38oafA8SnakwMYhb",
  "key5": "4sA13KDj6MudVpRt6fVyZbtBrTyaCMFJWm8y4atqLdJApLVVdx7im7axRyTMTra2kyyGW9nVkSwsbpW8bZNtpSZt",
  "key6": "3sbQCimCrS9UtcxcRtLAzea9Y3t9CDGWwRn9EXRca8tmNx158696hSkMCSxk6xyfMMEZeNW68jVUUyqNZoqCS1iP",
  "key7": "2ameSpfzvDkeuEuDbcJGDLXRwtpcwkiMhE2zNiGZ4SzpQsrsCnqzgjH4mgRdBLeK1FvHGu3muxkuwUgZBUrFfu39",
  "key8": "3axPompZN1nAdaZ73eUDn6N7ycFqYkAGLQE1CGpvRGPJ8R7UUZNrJCdMUYArr2sJwAsieVeMUdutitSCFaPhpZfm",
  "key9": "DR1RMozKTyLXm6PmpcFHVFMy2rmoGYwLjtwKR9FNbS8HdAJJ3VYS5ZGQTK2VbxYs5SV4Ej1ncnuyD4PSujraPKN",
  "key10": "3f6TduoBv4wNwAb1fvtrnBbjL12ZNHsSs2a8Me551cJhpx38t5NiW4dhACzKnuDcw64amwr3tzVAKQURoVqpxTS8",
  "key11": "3vCttsYQBFQyJrbMTU3Abm52dFDgYHqZYTzKDo8gzp3u4hoKEhxAnf57Jz4R37u33E8EtkKxiPsyLdzPf5wcR5wW",
  "key12": "2z74ZyJJQefnZfNAU1vNg4vQnNPGPa8c4VPRYS4rWyULhvsU44q6V7DsCtQekGfZrbTfqFMZv4JahVB2Q8FSMtNC",
  "key13": "5q5RHGYEpvLrB6dkyiSBrrK9FYNGig2E8bonEUp6Kf6oAyKyMB2FtmSuTeFRxodnHwv6DUnydWUFcEnNb5Hxpa5K",
  "key14": "2qA1TeEtM2rv2bGWFMBxMdhfA3jwQPicRZtuKMZR2dZnXPk56TVut2a89gTjbwqEzW3ahpVGSxFB8kP9YjZrUPuy",
  "key15": "66beimCdMzpzoZGjRRTNQSDVEgcbXVph9GJkC7GsKeU6snwLzwxDphfesmMYSXZDFpsc4eZ5kqhDhk27QaDqNpJw",
  "key16": "58VWGUmnfhNQpA8YPReeAytpYMPDphgCVz48XLE62hAZvBWPQ4pabFebCCivCiwBnZHmkt31Tt1PykH9qQEViHW6",
  "key17": "3YBhKSpZoPX6yvnxwCGZFuEosXbTJTsZZyuwP3TAV69ThjTdMG5K7TQviKYfrK8kHz1ibnzU4hGMdPnsE1GeNzgi",
  "key18": "T7pAE7FaNa61W6UR1FjEU4KcALmgB1oNa3p825LN9FdrLUjq55FXr9NSHsjGfV25RvdR4EURy1yS8z3nf6S9fxS",
  "key19": "3RJUWLtf3GQUoC8pdG3ZVUGWGEH652dKMCnaCqaWmSLGWBJbM6aZsbDbFkbh9pb3eNo5umTFeDSYd27sH7LrmeWw",
  "key20": "4Kuqg1r1s45J9mgJNs7b2hZegmbTXZCWRxBuwVTfedh9BDhQgsCAXg3fUfJu1UkHKgBJLxos5XjrLoaRwZG3GnKC",
  "key21": "5k8yGBYrxaLquKmqquYwk3ZNDbsCHdzpeAkTi6RdpLZPzRSbdNzE9Dmhg8MUYArs9Bjj5HUnMYHVdDSxALZeQHyi",
  "key22": "3jyt7yP2NHHbyndSC9Ub39Xz37gh2hDg7rSfsGzwHFxF7uKWD7fg3Fk648EkqBLgr6t8N5NryK2KjPiVQLM6mWjG",
  "key23": "5z2kY69dWs2TmHLj6QYXznn9JtfMSGxZNpcThQHj5rCfAHHCHAaoEHy8xYPxiSxeGFCe2Ze5BH7z7ysHqgKasqL2",
  "key24": "3eNqxektdCniqmfbFkbXNAabsRTgRMoDzmKUU4RAUbcqgJ5H3zjrK5FUhkWrMCSnaH5emhchRob9LD5fecmmQBSL",
  "key25": "3sGzkFBETkknnqRp96F8zcjnpFFPQXGjpn1sPGfLtAhHKkJXeXStmxgwmXSpHjT3tYRJjMLVhDWFGWH45GqJxEMG",
  "key26": "2843rUi3odQjFtgMM7E56QXCA9HeFTbYu7uWGsXbb3vtb1UnKYchHvaK4a9tpe5X81FNLyvXmSevReRdcqRsQMZ2",
  "key27": "2ESmDSo6DB5ZnQKze7Z6xQcF1igwP4cRALbP6ieKYECEtjDDsXqCYX6P17xwYX4rdLiXLCm26h1paqQWnW6k65TZ",
  "key28": "61yNYTb489o8A9VsEuLPWhTLFH2RY9ZRL4Axq97bt24qnsYgggdy2yjVo14AeDumwpzDVQ2ebFwvbcFcGrbAG7Gn",
  "key29": "4Fw4CPRitFVf6NJuDmtv3yivgSSyH79xBc821CAg1sQqAV2B9FtB4g8eX457Qnm9vq868yAgdwjpGCruDD2m7tEM",
  "key30": "5tVh3WBv7xkP88a3tWz912F2L7V5i6gd37rEDR7kfHeCfxM6KhyikrVf8Bm9FH6sbM7b5sPe2HVLGjuCCgGXRaj4",
  "key31": "4irvEMQ2qcKhqBo3wtXLpM9cKiHRJQ91szYeZ91cG5fLBtgQVwxM4eenRPMm442gfGudhQ5RFweJpkga8Da3yAQ3",
  "key32": "3UKwwLM1M1xE1dBicfeep1A2cfSr6MG7jWNFeG5SDQria5dUS9Nb7xWE8Vo65e3CNR8yZBfAgBLffhxdv9dEQYWw",
  "key33": "5sYQj1F9yxa38fpa47HC33HQJDfiS33J7XoHm6noNBqacPtVVVWUA6Q3FNp9HrJFXyMDatMRpymqAjXyLeyNtMy6",
  "key34": "2c1Yy4zZvxEHdGNrYwX7TY7oDE5Yx5q3vssfns2SaXHguP4AqZEYZXA2YyqturnbmhTF7AiKdydP6XknVHnYKhgv",
  "key35": "sq2xaEByDbQcZUSNmDxb8UgsYSBcMYfDbw98XPDYyyudqrjcxZnP5FQ4KCUkrziVcszjk23a3rmaLGhq8WGH5AN",
  "key36": "2m2HMXHyQ8N624SXnuCXkyC35UpjFyHy3me7rtqKepfL5mkRbXojGf5nbCEWN9xtDriShdiPRxaxoPZWyV5mTeBp",
  "key37": "AnkL6AbZBQewpPYb3LT9kHXN8Zva3WQSXNthxyNHh3aiKGVPMBTPeYN433gny7WfXy6T6hbU2UjDfj46YMX34TM",
  "key38": "3xYyELbypHS5WitPtmd7oAg6dF8b9Bi3MmvUKhvDZDoSxdWfYdnJgNbCf4SbXDabbtG4XEU5e2xkdWjzDrSVF21d",
  "key39": "CnZHXyGf6UEQ8WpvKSAevmSsp17m3XVCRqrhWf2xDHJoK3m7GjS3BMiaMvTJLz2wDUDniSa6n1bfMovRykzorJh",
  "key40": "3Mq5QtX7XFdoWoRgZf7aQu14pddZzsowR3nL8tdFVNqipTrUFkqHt7sewmFEdqYdCeYQ6M7ekRHxaaknMsYjg4gm",
  "key41": "Z4v3Y3cykYwTsRKcc1UVY6CLW7UX7fipqTf6xgCoxazHNozuZANiiX8RxHPxxYHvxqdQFqUZVVGa9hgk5APqniJ",
  "key42": "qPLLPmjwAiwoG2a3gppdyGVWR26a84wnTBvutNQ8wkHgTFjjgtAqZoPFPgLJMv9C82RQE2snFGayDL4MXVF7JM3",
  "key43": "wAgDoVN3UeQoUXdrWNh3sWKGDwNRfDP1NpWMu2ntWE44ywvfGxVc1wGuD5JhJoS8zZPidX76qbeVVybGVhYFxXr",
  "key44": "gxkkHwcucZ81J7yZ5fonwAEf8axAD6sr9LtymquKcn1v23NiWvVuxo9Mzsto9snGh6YNDM9rErnTCVTD8HEnepP",
  "key45": "2F5GsLBRTQQvBN6J3aQv8WoHBERmPsLgzYpa4CXmQp2N1aHFvVPPa4w6TAysZYBafxtwzVFXQifMjBMBnu2UWaVH",
  "key46": "4mWoYoY3bSNi7GwXcPGPueJoQjTfWtA8MVHgxod5fEWfYnXixTc2REhzf5XrLkKG9tfiDiakUHSpU2YmoiSUSm4Y",
  "key47": "3QqvWy6uGzr3gakqF4ZnvSxddWRDXCwtGjJzeMAkjjRKEyVgdGmTHVQzn8JZrgZMP7ehLZPzEUJ7jmuQTqZ19DVk",
  "key48": "evAHGumSxSyNouS1AK4RcG7KjxrGxVS7J1vifa2fnv5vzapP6CtLX5wpJQ4ZQGda7wgm9C5H9tEZ8LMZBxu1Jox"
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
