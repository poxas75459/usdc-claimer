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
    "26mNMhmUHkZorSbdcjpofNXiBbastc9DYkU8mupqhigE1YST2h6SXT7M587bFEFx7g7KjNspycCB6hdz5J6LRNed"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5SearWDcWm9UajFMDow7YGNrjqthgKjFMBPuFzCNTGrSDJqpWt3RTYCWPgemGpmsysooXZ3Zer6B2iJ7KeajJZaq",
  "key1": "5mxxJ7TPYxzfLPwytUVxzxLM8EdkBSSxU66ViWkxx7zYdJkq31eA8hw3wiB3Fz4zoarjZs4DDBAAyGtJgJGnG8JB",
  "key2": "4TwjEF5dsoENt614MwjxMa4iYstCudmNNYiYyu5rhgbZASm7G4CmPom1bcQkSHvuGueVxcVgD5TuVKVi6eyexcKw",
  "key3": "4eSbfqCAbJxBc2nQunjh87sJmw3NTZGxtMifz6ZYpievXqTh4Dxzhc684CBgbvWcJuvD36QMvmsceBLP8MpAiprU",
  "key4": "pvx5JCGCEyQzmmuNNCSQJ9Ytm6mispgcX39je2H5FZxoV9MJEZbNRrrQ75rhRwCq9YwDTPUuDZ7n2ySuokszdjS",
  "key5": "4w9ESZ3bcPnQM4vKyuF4BSu7BGY82Go2rdd1ZNMLtAzRBLdPHvMjc5gQQVjAU8Vk64kqJB8zE8KgTSxjSrV6PTac",
  "key6": "5n5yJsJqVRQuN4QLJGv9JPCS2exzDqk8sRg51XtQMtVytoEMM3m7aMQBh6b6nBQyS4se2FBrhUzxyK5JdKKb2L4H",
  "key7": "4sisckWm9hnh2HaFLsXxxj8f1YQwq2vB8Pcfdf39UKCspHB3Zu1mXfqq2Ej4dgQcwr7qDrrHG3HZEzjYjPyR3Xxj",
  "key8": "3uzxpJWdo5gXxhXYuoC2qh6Gwr5YXmXaZNR5zNxWbYmZEdGY2DAFfwVao6CKcdkjaEEE9M2RHRYa6oPTff7MJm8L",
  "key9": "R8CPJ7DHWVfBhNhmu1rDxEdQDbQbAQWRYriGop6YipLPB4xSMQQPXdh5eBeuSCm7ynSUtkC3H9F2u9cT5PXxgey",
  "key10": "3NWNJJDqNxjgH72peryHRiixBL4RE9Z4YurdDAHeTZ6KMgwLXeD5KXRBCLgxSNmBKeQyasEDUMs2So4ooiV6ZuHU",
  "key11": "fuwEgUa2TUMU6avnof4FvSs8MQ3y7wA94hfLiXejvVG31kpv4o7VhwqED1YvHvrjCDh8Qfmx9Q6atBJ49u2B3Jw",
  "key12": "GYmn2PGJv5BQrP7hk4jvfi4LN5wrHcr2feMXVJDyHcU5nqLY1cfWS7CEXUq8Utt7QGeDfP17Fm27wzbbwV7RKWU",
  "key13": "58CbschhQ8PivNgJW7foGMbY4y2Qz9PpVRAWKEzacVUeSEMV6WLWxcfoVAjuEM8z8dKcuj9Q2CGK7bayj6S68oco",
  "key14": "5LtnK3tyFjhrawcmDu9wwvF5PZmzWF9v1V6VzJKHyshoSWLtboCGWsiChTaXSFKBQjdotdJJJDNEGeqgHaEF2gfX",
  "key15": "4Z3Jfjo4RES2LGyiqEhCAdbhGgJaZapaFtrcriicBte2KgDVnwar1vCxndH2w6QrR728sfV2R64TnjQQjCyKsg3R",
  "key16": "4mGSYxKLpdGWzBfFr6uHNGqdN9F5JtSz3QqxNx8wCBQTXohJyJyXxWSiQzDb1TumNbwvnUdAZJespWLRs6qy39bs",
  "key17": "m81UKYA29UPcvsYgsAvGEyg9m7BmPisgU9Z8LrgbAErrVZrFThbosPjQkRu1eNDRRFD5UE7AhsFJ6Jc1tTGgcEs",
  "key18": "4h6U4zoETyB6kA1uLKai4yCfeRWHiqyCQGSftpxRawnyxyJz5ERfLTeeiaajAoG8KWQyDg1rPPjzXxuVFsyUR2Jw",
  "key19": "4bQuYxMAcPBjJUMPvG5obBSfj26E3HHaJgLQ9xsqcgmoeE8JcMYsqFoG2YM6j7o6v67Kig37RrSxLsayMXtb8Jqr",
  "key20": "4FK1zHG1wNdMDn7dT41kwZdzgKXm7qqDHQ2nHvMM7BuRcg4mS1M7AhFa14QDiCpt4kLUYkcspCyS6K1wxSECa8bY",
  "key21": "WuEwuGYSTJrYvadxJA71uectyt5P2fXVAJK8B4iCiCkFoF1AoKDGhCE6gvsaNM3Zy6RJdE4AgnA7KPM8mSC6xu7",
  "key22": "4GWV7iXZTQEHFBnHsHfRC2hrwDQyUcMDbZFS139gtiFR7fuRv9ZQRD6YbWrtntdBYipLwHKGSmakU7oMuHXhw8pS",
  "key23": "JDFKUdf5dNWhVLFLYVUNPeW6SnCLPgHwyNvRYHFbjA8wTnZWngefww6Dv6XjnbUL3p2EELSpv4F9sa9dkwRd2RY",
  "key24": "5FzGTm2qLVKL6tbFULHXvH2mLKt7AYyY7i2z3bxQesZPYNv3wprfz6uc4D3JZVtMQWaYkzME9vP3cdZ9ZztKnCa5",
  "key25": "3y8kfu2khQwqYPJGYnipFyKActhqi1HYj6QKYRzugEMPoae6guusD3fai9WTnHPwz1FRuorgW7SnqVyT3iQXZD5T",
  "key26": "4ooUMVHBxwoie1jr8mFsnnSRRwSjupSrSQG2mzgQ99SCmE6iX9hYonZcmFHfRFUYB17BZH3fGHN9iY9cnA65ZDcf",
  "key27": "fMvKKGvf7eHQ6WwTwi8hBSvszsxn1rZmcyJXp8maLeeTjVY4zGD9ipEyQa8Jw2W6WnrK8HgBBTd8gdWnqx2D2nQ",
  "key28": "7qPDDfKCmCVw8fwmkcMRRJbbMC4faGYNyduvbxhBmy2vWWueMrwkWNfNQyZxCM9iyUFhpz8GzM6cacs2Ck6BsyU",
  "key29": "3ktQpfJtffySkyu7q8By9zqfxdcQbLP5iqkzuxQBBBKpXQf7G7i6pEzC7qWFU7jsBDMdz2uDQLeeBeNNPHoNU3x",
  "key30": "4Xck5dxLmPAkETTwa7fb9paNh3KMJjZmHcu4qAQf1tCVzHwY3MZ9ezLavxsnLcMnPfKujZGF2KN8FhJfktJosnBZ",
  "key31": "3BS2rX5P66ntCkxxN57o61wApRyiZk1GX4rR7YLQgMpUEepMatdN7DHzkxsM7uLPyYS8WiKt7k7bWQuZTHpLkZqL",
  "key32": "5oVDZhRicJLHP5MYtrUej2DqTixY6JwxDCuUVpHzH4XH18Wr5Rupiyy6JdvvYQdjgLzNF96dHR7Ygcu4RkoqC4aw",
  "key33": "4KYiXf1oFS2RVJGpFpA9T84jWCvKnMTB8fkosp1eyUWrezZ1KyLq5iGMvMHMVK169x4xqB3akqWUEyEDa8NWPjfh",
  "key34": "23XhMSg1vsvjm3V7g6BQd1FkL5Lbiazoc1ndrpr3ryXYDrrAVV38PrA3EC2jYzWeEm7vNNvsnechf4Av5QGAAj9c",
  "key35": "3tvh4FeoZWquxBJDseCHhuwXK2QF2G1CDYwfvd3rMbjpCV3iWUMzaq8tFrNwqhJCYW5aYXurBNU8sAC8Q1UbZDHo",
  "key36": "8z388zHPBaBwvCAi9MZ95bgZC8H4NgLJxgoiApz3ZSTY9yiTCknrmHBee4BsA6UJLNxgBqHstR4FVkqattb5W5L",
  "key37": "4kXjdQ6VzGcSZ4MbTzktxj6ky8VLSjKCiVXMLbEEyheUi9LxzUTzZtkgRXWcWTQ8vbXbVZi4CuvsQek7RrPaRNKq",
  "key38": "32BL2e4H5JAh215kKZxqcxaCnmj5jiBvecj7RXoSWTWkt59TRqJfEKZ8yYEbEcN9TLjzZ3wB7ZwqLH3JK2K7PCAk",
  "key39": "2XFn2oxdTAFj5AShLAAU7gCRmJef7cKafAdaw4gVUxiLduZRCNszWwEq1youRWQSJjRJFwaWcXQt3QND6p9tD9L1",
  "key40": "5KURS58KHa7WUZZ2cHWoE5iqw771D5q7ZGF77YEjhzq3gp4PFmwHQL1LrN8Xmai2UwxJJAnPaPrBJffaKurQPdfa",
  "key41": "3oNWbgkKFfGUHkx2UVWvQLvsuRV99f5qPHiVEPPaMptGNaSPMPdEQTq9UJyJ1Te3mT32rfGHnVvut8zevPr2SjL9",
  "key42": "4QvRmSxZQ7LFutYhXEetRepLismVPL657woT8y3V4qyk5YXhBikLeJYv4HqY1cKNmoAYi7pjqqJZHXqDHePoaMdh",
  "key43": "3hQhjB34s4RUA5PbUYtPGmsS197Hzu2vGtVxmb6Ww2JtNWfH38nNMWM1ZT358qweFZrEi9SocTWBms2Vg1ioygHM",
  "key44": "3y4k7a7qdSpJkE1qjH5UDnFeyA1iM5uQhQtgdCxJ2xwPAgg3QT25kYvDBaSnXVkc9SNCKwLDCzfMgH2DsQHSCDJw",
  "key45": "26Bo8xp8wUYbvGzBbThsohNXCDH87ndB8WXAQauu2Qv6yeR1xXQQwicHYtPB6ZFMZxq1VqshmpBLbHLoMfrZAmdr"
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
