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
    "3M2hA9Mjz144t42A6ttv9Ncdu5hMkPu25N2oS3s8ULDtGRnyKrrzHgimR4hGdttDPSnX9iZtqUV4AfwQntmLa59i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5opgPmSXbemKP3qgDJS4wa9t7uTTuMpA8yKggzKaQXSTHp5EUFQtY8jbG6RsqmdfqxJiQogJiitknHHSk6CTkEoA",
  "key1": "4A4Ge4LkZSfXnFMax1LFt8NRiWP4GDLfbCtpPsmdNKneaYy6B1hZx4KE6tzv9JJ7xY6qYrxyviTCERugn69uww8C",
  "key2": "XM6zz4JPeMkDxZC8Cfk7yNuT15dn7LT58GfZtpseK8VyR7ERcMKdGRu6VpTxe5sa94eMxdix7GYCzdhf9bJE5Rj",
  "key3": "dfrVj1diKGhHoRnmCWS7SXdJsiv8agoWaLAh4efGniVzvQot2EeX16pfuoePmivUvihbgkmZHtNnjm67tYCvyLj",
  "key4": "xpMegtrzugXdSDrtVgMwn89AiQUywQFgKDXy5jA4wp3sLuDHV6vAupRwgnvmCKJBLDgE8wjncs4tpFth8vC1htf",
  "key5": "zP9FPjzos142Hj51e3gQsAibzS4VLEFegjScLEiPeJJMJ4Qqxo8yU3gkeYBHMM3r86E1twvDtxf7Q9HNVc3FEYY",
  "key6": "3FTwKqdSktCqeVeZJ5q5rt1bAVDTNGnegZXbt8SYSWiVoJo3jz3XAdYzEbhLRi1LQvAfoFjr1ghwHnAcCx5TMjsK",
  "key7": "5P82PeDCg4UTuC49dQEFkA9kbRqz1Ds28Kvhav7SwcbpiU11BTo4ryj7NGdHo8BAfxUwpAB9yvu1YGsmR8961GN7",
  "key8": "2LYbEGAG7N3SgQ96Ea2kp55s63YL56XwavC5f4upGVvnVBArN5MiqHDosCmqMfBAL4zzYgAvJSRfh2gDLDZzUoNK",
  "key9": "33uZELk5yy5hcU9GAgqsZwkN2yMaK4FpDQUPTzb83N2GLgLmZriovPhodwzwcwZLFtU1896gDp4TqSBxg3cVfAyj",
  "key10": "3D3pV9QpoRs9yGZh3JaAb5r9wB3utj3s43njhhosCsDLm4Ra2pioCaJvswSgZDhMFsN5Sa3kTyCTLHPbf47Wrcr6",
  "key11": "4hoS5QxSMAEjs7ReaezuapGCkNsgojyUqtGcMsetwqvFEiroqPUWoU7kFX1NaWBPJpozR7Qwa4ygUmZT3mQ1UNCE",
  "key12": "veECeGe5YRyfixp8poWFtTd35G64evZMA3hAYTmSKX8Zdn2yPCXp6WF8YziMF1Sb1RmNT3Bei6T7J8x8hx9UpZL",
  "key13": "p9xehtcpRB3XAHW831SrFKA3oUPFkk3c4hziiZ7CGLh264X4XnuqKz5m1DZWJJZEx81ccHHVtFGj6Go1puQf6JG",
  "key14": "3XSc4LBqarRLadCqhEZN2XkntWqDQA3anY4uSfJRNTDBpuHKgvkEURxMEq8GXUTFScApj5bnXArkRZow3DYL4pd1",
  "key15": "2pNVaHgr8U23BL8ZTF66a4GYzzVGXcDvaYoPu4wsMPvwjBcksq7A9g7A7EEaMLBokgTCBAZ8Vg75XjpJC2HxvtaC",
  "key16": "3Etq4S5pm1oY2D1hvcf1dXMNGJCB8bYAMoKqWivjqAdFpMzSLG4ja9u1khT2mDTpM7uzEzUG7kzbnHfWig78eWvX",
  "key17": "5ooYF1BRN7hCQUmSm6E6VGz9QTQ3MrtRAiZpDi34Mun9ZWVNPRaABejRhojtK9RyVB2Y1xb2JWNK52GhUjG5ARKr",
  "key18": "2YCRzpEt4UVVtDguztDnDnLg2h2xtYcLVnBTij1MC12giReb7YgAYyuo2W8irfL35LhYXBPeeSr8dpDNLKxPscca",
  "key19": "55hLcF6LRxpE8mvc2wqLtKU52oMwvnT5ZpoDU13jbtgCEUSQNkG6M2XNjLU2UyqM5LV7TicNwZKwY3STuE5Btz7u",
  "key20": "5zCUEwxnkjA1RoMRi5SRCRLPdk1zk79bjXBAMyF73RxFKNg2WFavf9q9uPggkiiMD56tPRwRbzjsGKQAo2NT5Wz3",
  "key21": "4DMkAzn7YL2i6amiuCNxMF8df9rg4arMbFBQtTejS2TnwoXvAVjmGx51sNAj9syx42nKnsn1J1TmRCVEfrNi24PF",
  "key22": "RzyWa48UNaoMwGKapwFXZsMaLTXGCnSkPUoGgZuYULC1KNwkeEUxM5UqxK4xHQiiqSLfC35JsZuqk1iWMk4RSbm",
  "key23": "48GXT2PFRyemJZuDGQ5rQETM9ZBi8ZDLDUhHmXy3P4ELgecRa61vNubsm41HZfEKdsjZ1NRDqK6hkfpcU3d2tigw",
  "key24": "D5Xy6q7rmiCjRvFyjvUhKxDbKEtKPRQkQSGdRrfDWscWMA3NXGjFhFgCmQgwLZSRQ9r4w5upEQxbXTxPZQ2E5ma",
  "key25": "yr4a7RQndurum4zmuhPtNrkPPERenrjHPoagu6pGSNAsCHY83fYpaNcktn4UTWYJGmPh4c796hEJQDf6dd9d9pK",
  "key26": "4hR8RxRvfSsqbC1TzSebV7Xyovr3Vnpo5CuGbKv8Nq9h5TGeXGJkVDD7Jp2z2s2MMLMzCpUtfs7APH9GP2rTadUw",
  "key27": "4Hi5Q9jRK59Upq6HrUfpLnhuVEs1TSMiBN8GwaQ4JdgGnwH9KDxhmvxnQkuJFHrKLLSzSy6gXsdx3zfUDY6FxfVC",
  "key28": "pe9JMhbimnYZJdgzVmFcC3MoKKS5oH5ijgBi4B9dZP1FqgJQMLahvGmFPhbADgbr8Zeg3adcAEY7Gpxwa87FxjZ",
  "key29": "3NRXQ5poMjdW72ka8RLDaMMrqVcouEjpZ2KnaeTvpaw817SJU4BST7thUBks8xKQyp9nCuqbVLQu6REbKmorLV2G",
  "key30": "3G5hNiZKhaWen5AioZV4Nkvf1wePDfAGb2jmDUSRJAuw29Z9waQ3QmqWnoeYj9Fqmwwdqec9qAw2A6SH4bDpernC",
  "key31": "5uJNdwJjgMyMrgqvN4KyVF4MunKBrtcP8DAKisdQtRr87WdiefqHPxbW5kUhXXj2SBPofgg2UeCy2EMs5BMY4ePX",
  "key32": "3q8R6h5Z11eY4ddLySXka9Njrbg5MDRmEtDr7aHaznCtudarUKGw9EHToFkoq9eNeUNwEFLh3hDY4W15KLVHAfnV",
  "key33": "4r6yCM6c8iPWrqDXRncznPU4JyzxY6Xf18FjTErKrKimc8iULTbhwZZLgM3XdwKXM4cstJa8oLwPo2qYA9xE1o1T",
  "key34": "2wjwZC5agoUfWkiPr7W8BKpUFs5hc9jRt8Cs4DctirnFkrVqwqymSq6LkqCX1WB7unVev5QJLynMeqccMDZ8ThMo",
  "key35": "dcyy2M7486r41S3GH9QzDanpd8m4G8eY8dE22UQEm32wPDo7GmUU5UpyV5vrVJgtoSQmExJ6WBxHtMtobJ99RTb",
  "key36": "4esxwrqz2zy7zmrio84zHLZuAHmT9n5FCw53v1i6hHMAMe7vsszJerEDuRAALHaAGEghHWySymmQDxZqbkTnWhAt",
  "key37": "5vapxSCtEangSQ8eafz1MLoL73VLPvvvjgKtvtsxu61Y2mRsgkiQWn3coBgaDZySS4W2aSS5jtrzW2bG9rdYEjxV",
  "key38": "4zygeQ1De7Y9YmQUBhuxoCa4jidwXpHdCshgXsYmHY2G9rK5X4MBB3Z95GXSf7HT84nzx3Ebjiy7FP6rXtZ7whD7",
  "key39": "51TobKUQaVNtAwv2CC8FA53PPfuWZhCm455Q3fgPkYTX43cGpmNt471RhEad8YsswFKoWPWwk9gmbipwMTyrggPu",
  "key40": "7KLxBtN1V3v9em9rK71auRFZDexejimWJJZoGUCpZ23MpBDETmE6jNiQYDtdbbi1M1LciQS7JVfWERmTtMpREQL",
  "key41": "5FxLRnARLW6Vn6MrAyWbb29zSUWUcSXfjqYpccmif5sNKd8tPzffxL33SEqy5kQC3ECs1SEqJoNVRzFtEmQhG3LZ",
  "key42": "66Fe1ih3ZKB5spS7bLxdxLx3TKp5RetyQSkhxGKbDxoJGvJqjaevRjrcZnGW2FHMj68883rAeXjQ9ajqqoqiMP8i",
  "key43": "4s8iMqF5kN9NLPYqE4MZ47X9N3TyegaW1aDT9KSHZTjegqaJqNArTBhg3YZ5UNfxoKgH7BuDigGU3GrwncTsZy2J",
  "key44": "66ktqiXzzwcmFmDM57TfvAfJxmrhKPnBwyxJftR6tDgJdK6rB9tYUp6JcE8ziuM2hdF6vLuXtBFJGtQ7uDKC5Lff",
  "key45": "5wfNRN4H7xjnfh6Si4BAUDmR1BMxCGDsP9Vy5HttNNK47nqH1dUCrLDsoukDgGtpJ5NpXv7w3nykHf8z6J5rUnb",
  "key46": "2oUAUoMAChfjqMCeZobSJu2yks5UNGZYvxmbSquRVs9iVFbVv2SbXTFBjWj3eNf4wDiNKtBDLisT81JASQbQsiAx",
  "key47": "2BmdCyrZNdqK5RzeiJ2emQiguSSXi64q5GDneMiZSJLKZRYkH2WbeW6w8SBnbNe5QTUaTegUd4D29kzBcoJYd9QC",
  "key48": "4mSQxyAEcJ4qHroX3SMN5wEp9AqMjWuwCWXYgSV3VF8ZU1h8DTksmM39Nvtv9Wfh3jvJgybnHf9aDexW7wGsutSt",
  "key49": "XWTy64zEnk6ayPuh7L2LQMJ664i6u41t4gr175Sf6i2ZZ5fDBbQqkw6yQcXBrJ8m6sTcviWCdRY5V4hiwY2aCBv"
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
