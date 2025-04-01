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
    "66EhHnmz6LuFCcodDZyxJreWP8LvydjPiUiKCU7c5BndotivZ9Z9CFED1EzUpqjuUibBwx445uCLzBnadrobrBZ8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5EyUapSo4A1d5tNXgzyjfcax8PJHkh6cyCivkidgQ13aeGU2Y9B4bPH2i1WsSYJBCeyovu8kwiZG9z1w2NR4Spds",
  "key1": "465aTDLD2EXEmPwUBocnEWURCDQchfdaSwvN8mz3XLmBYauVDumbeCDpSG43mW3XPHKsu3gV3JwRQW9mwaXK5TDG",
  "key2": "g7Qi3C3WuB9QrQPu26PKZdNpbV3VSJqvzcXssqraGBNBHjSGUTUwSDcns47ygccWxdi42YmqqwUmaxhB7r5iG1x",
  "key3": "5sCdoP7ApYyxsABUApeDE79Ki5oQSQ57HYjoTEYbEphMvR9GafpPxqDPXQ1WNfWSj6YvWXaceSbhg3duroDi2C4",
  "key4": "266xH92SJVQXedApsTPzLYh2vforxU8ry9mCBuCMbuaabDdrciH8Zn1tGGb8DfA3mEJjLEeyNW5HmZxgKbSCn87e",
  "key5": "2hwzyAFPsPkBCvk1cqiFeKU3uBqMFzxaUT62ETimg45mqdW3WEVvXqKHQjVr9JPgBqR5U8zDyAPQwcyntxcankgN",
  "key6": "5DQgmp7YxaZ1CsNsQh1adoAoUF9qusULk9VR6jHZF7vkffPBSMz7Tebrz6KvohE8bS3UCLysKvqEFdnZGVupHYnV",
  "key7": "5tsSUzcdJY8aynCo6VQnMV7h2f29hk2ZM4MmxBu5rL655msmygRn1MxvrKXutcFQcu9kua6PpfG7UqpmyCnUYyBu",
  "key8": "Jrin41fXa2Vcw5vJRfDx3y5AxoY1waSvLMN3Hnza7hQQihRQtgkVSvfgNHFyMCEhS92j1op4RCW8ej64cyRYKeD",
  "key9": "3vvTptAxdbseNzjN2pvA64rtW8R8jsDw15uWbYSG8mW1XL8MagYxze5CoqRdstG2FesNGZe2UqXDEK9WkLtfH79S",
  "key10": "3vLtqF6ZQYNDe34JR2awDFcFU8TZrG7PXcBPwCDfwRyXARiCYLeRR5fTkjivuPV4hBV4Y7UmReP3jauT81fWUqtp",
  "key11": "k2dGmAaTi7oK2YRPDo3mrQgLcXeNVMaySGZDyuG77cnHPvZ4wMrwippiWzmgoR7MGUDieyGKvSqdjWRrBE8SYEX",
  "key12": "DK7uTRY8ogcehhjNZGMQYxrWTQnb4mFQhHqHXFaqAQpPLSaq1ASsSpDKdcVbwFXUvT3srE7CqetNbMhDaVxKdLQ",
  "key13": "4Hodg4bgzzvN4Mmgwct76RVkvJgpJkDqvm7tKbNV27spAgqaumukxkJMQqvtCboTxiSKUmPaoAfGhzEgKJuM7n6Z",
  "key14": "4NvcwzCN3qvoLqY14fan83gzZm1VSUMNoMrAxaoNYPovpBHhTmaJPyZSGyjNfEPcHW2NkrHeav7FwL336ewRxWkG",
  "key15": "7y3BkhneAmRKpPJaWXYrHMToVMngeXSzJjP1xEWTUF49PqqUqod9x6QvrP8vrPUKv4xJciXZp25oCrEXfGrMXKg",
  "key16": "fHD1TfadKVeWFNn6AmGPLJBbFt9zhDpbfHfUr8EFwMHgZSAQs1F9R4sMiUKxbBXeBaqmbKCcCWLpNvFnoSP7yVs",
  "key17": "3CqQgFHaBGKerhEbvWxxZhYxgzW12ps1Qf73KXB1jjJtKdobkjCnu9RGf9gmAmRoDTQ8ASdBgctRPQFdbLwLGkqk",
  "key18": "4siDu6bgVSt6ye18WUCmJfqcvfgsXprMQ2kGYEfRa9sELZtNGMx9W8Y661SWqHRc5cVbQ4NHJ5QQXNbeyvK6MvFy",
  "key19": "4WYk4ocjjtZuSc2VgA6w5zFAUxE6ixv5XPgv4YY9H3Z1HoSn4TfjHhbvC78g9fiQRb5a1Kon9gqwuGiaDDgXd1Ys",
  "key20": "2gQAnG8K1oNCFGr9r9CYexWbWPzcPJXk8By1kXaYpR4NYRtDv46pWNqfAytEa7GGp7HwtzyoQeKnoJmudaxsFuUm",
  "key21": "28LJ1uyLkGWpKEnhxtEDAJrrVz7pgXxkDwXv7vinzoJnkYW8cqUmfzPpCjiNTCEp7DXNUBNiQcaDEUjUjs1Z3pQP",
  "key22": "3pJ9Q5UZt2vprsN66q1x6cRgsridefiM4BuxC89rAixHBZE4AFvoBb5pexdmYPxaSkVjppmhqSNgGg5fiBeDvezR",
  "key23": "3AdARWsxTrFio9cZpzGPirueM1AvFJMierUak3kzjGWxs5haNsDbLyf62WpWNzDm8xR8RNCPKwa8siGTj5yVJM3b",
  "key24": "4wMFdVNj7PoqAtD5s9NzZ1VUTpegP8ycFHFnQesfcx4KKZgiYH46ofUAUt4kXP85Ur8PLawEbdWJ3pzr1c6k8832",
  "key25": "3NDmjopP7BYFYVyFc4PVx2noc4qeDyLoC4FPPnFLh8a6XyWJskfjfUTkJubLqQfyMpwukyHSbW96Ld8jD79jyG79",
  "key26": "5dqfdhbgsvKF1VSJQitatf9Y2Houeda2KLgrBD3kj2BAbWR6Kyy7YwPf8eAuhBrgXpsvPJFwmHAvzeNf617LQT3L",
  "key27": "3VPZRCFtF7CxmMfF23W87kQiyQd6v9jApefUs825KLtmAk7LhjRScWKZj5gmASzAuNX72rbHi69GY3oE8z5XM3R3",
  "key28": "UDEUE7bmo9gCCQHpnvZwtz1qCHhuuBf38LMfBF1eAzY7ZYSrmFVRANkjMSzP9vvvStGEJfnkRMf1N3cRE1HnaR8",
  "key29": "3F3kBpg2pKaD1ehhaDYY8oHrFNUp3jpYWCT8TcTjoDp2F1wqjGQmY6TwUHf6W9F61rjkacYGjugWrmb7t3nJWgKp",
  "key30": "4WaK9L22SbLBhEfvmdZhTooxTe8C1FBBPaTs6pjAn8emxpK14UVCaU5JztEVMvvyKTpcbZJxCBRoiWHLRJGaeW2K",
  "key31": "7LnGnekBerRJBtpptWhhoDdLfZRKFu9Gnp9R1L38zvVLVnUKt7UqFnCpkhX9f4Hyg97KB2gBMULyzTP8cVHPXcW",
  "key32": "4WDvfSJiQFkG1B9MQyC9tZWwbVfrMzdt8B7GziQ2MDoLW3jVk8qgxZ5XCXCHaoytDcEtqLeeg9ZgWqdUy3aEERtW",
  "key33": "2kZPi98hGFi6AWuo2YVMewskRrL3HH8D2FDuEz4uY3hM5qZRfQcSweU1eLXEwZmniqQsBUtpNAXxd6wgSuRNjQeU",
  "key34": "stcDQhixPP2VbXLGbr7PeZMtYyykzUXazaw2VSgt9R4zjjha3UzEeTQiSJWv8g8EduSjxeq4wL2yzfGp8dHYFHc",
  "key35": "2bmem6hrVdQ1gjpd3XVuuJezYwtjx8YGjNzM1BqJxMKvnidhAV2uiLimFH38rS3shr7aa2ktWRBKgvGhn4oJYgF3",
  "key36": "35QhbJgVRYe5VBVmfxBUSQEG5Cvfn5du8NSMHWJoyVNqNp2BC82Go4jjd4d6T2D3afiFTi7oavwC282QMqkJmsSm",
  "key37": "2ee32p3rnqXHXaYdDRXJ8Hsj4k7ZE3GXDhADE2CwqpR7UzZreyU7iqs85NgahyJZJRobby5KfmEjNNJRfLb5dGXP",
  "key38": "GuwTTykEcDJsNQ2aDKfeRpFhTpTAqLKVVtUszssTJqaSydi75mY51Buzqx7CZ8wKnsQjxrU7QAjmoD1aJudNMNG",
  "key39": "2pUtbJ4Di4ZrARxBGHsNmQr1T6GmjmdH22roAY85s3Bco5b4rRfB49RotHpUpHYFXQbypg5bad4q44W8yMVAV76y",
  "key40": "4XCvbfZkyeHvVFAKo4HtuzpiZYcJb2BhDfCkinAu1XdeKwftg4A63rbGHpNRkapZzRKW1LaN54eiuQ32EnrikB8H",
  "key41": "5DuZTqpZUWuWusnTP4adaLywqUdwFY7H9A2XdweWEZGdxvTh6txKdsX97Sxa85M8ZqryqDENwqERiu9nY2NEPPoN",
  "key42": "tfE4ndCnatpHzBkzaz1EcYEFaGM6QRKLoHz9yzyZAPYUQDFsyGc2hpf4uSTkzAgcqkPWmx8MZYnNchQe1ijy1kg"
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
