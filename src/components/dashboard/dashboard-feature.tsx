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
    "3PLZB2AS1Sm3G69wgb53zTXQ4oSY165wtphAGBHfMHDA1sEjMMdKbwUX2YFofdmD1iw7ttPakyjVSzLRtZ5BYJo4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3BCP9y9PKZTKCzCYF8EaMYunVCcZz84C8KV2vDZ8ShnjZLcZiZiiV5vrQjx2EJ12G9ae3vrgUTWWoGzy1XwAtqJB",
  "key1": "2dgTWU2stXsy5n7YAUArebzpdHWzGuxUyBtkvGsJdHYUejrpQrZCwU2kfM2Gy3HCrPyB4RnqYYJoJFEoT6UMnHmT",
  "key2": "2eNq3xtdYGSGKKPaZUd4RXzH3ai9bD1UFKEPptCWpnG5jAMH3nzapCrVGifCXGPGxb6H3XTWGPRibzBkCx7mCP2Q",
  "key3": "5EbcBCAkNNqk6f2r1sxQBfiNzrrGj2bDee35DzhbXtKFM3FKYHBvSmsbv59VaBsRbqVFxzwhkxWFh9dqpgjb8ymH",
  "key4": "5eYJv6SirL5YjCB7MtGAKMnge7jLFhPYiLVncF1c2xAB8ZBMUVk7jajkWRzpGRUSm3idT6656YbPvbfgefbLSwv4",
  "key5": "29HZureFD3VheRsRCFYq5kQfmf1EV7BJDhMpNwb4nZxPLqvxcgtLZVXSHYcBs44ttNpZWDMckxjZ4D4YqeasY7ux",
  "key6": "2qDBG2eXaiUppXisyKK7hCuFcMNjy4bCuNgCrXz9foXDacKty9j1CDsNRJHXNE2JN1Dq5fmRP5GB5zsAnZufWu2L",
  "key7": "2C4HkfV71BqM3cuA4Eh44GvYJGMxo4QyK9ouoArJih1dpNCSXSEnBfqxwv2J3CS5VkKRUWRxWP5igVhwdoMSRKLN",
  "key8": "5fvqjjTH6A2TQMhwea8ECZ5mxEAAuxNAgfmps5oPCthoPR5iNqE8yXMbgXJJn6GwSQVJoomxpaVBYmFQwLmbBfpR",
  "key9": "5ntAeVxdKmVCyu8skT1y9sqLTh9PtqVmadkT3NeNN4jAFYhhcCznpVyN2aoLmMw38CZWrAKvXU1ZzrsSeisjycjg",
  "key10": "3Zzw39V8kVPanM3S4SdGn6iuSAt3FcA65qR5kqDmNy38pDAV1mqGram7QN7wLZzPdMV7hmpjY3GXYhueZNCWvrGj",
  "key11": "2bo5dSE4aadfvXFpYY33bvVm6bkADfgB28CoQmk6gB9jwvXetytezH8LqKNEFNqkZAZWRQ1PZwotxrfnsY3N6zyG",
  "key12": "4gTLjGAsxomemiRci2P9CvGv2YvqW15kVopRuhozpSsczHon6wSa1VeGBskC1jvK1m4cWhmsihQkdpQKn2bjnA5f",
  "key13": "4qnPdH1EZgGHhAHXtrTrYgerYWM5ZAzLrJb7AzhgEVj8kaJCopAeCnRPYReFyadXN1TpTE31EEhJBr2VLrKqAAi",
  "key14": "PjrPd1pKfMTC3JwQaibH1nFb1yQaam2ECZKTzzNfm2vZZc9LGJTdiee5uUnwD4JbJxT5hskXHZyKgAQv1vxth1B",
  "key15": "5tAPUFKVQJ7rGnTn5uCyRU135bgejusm7taodfGYJgKY6KktVd2ZAHtGwhP5TbxYbZJUXK4vLgB1EL7QCippCHpW",
  "key16": "2z1SGG9VwkoDPKbhccnvmGeBifVvoNWqbPf6jx7BDcab9K7BoDbhhJNxpE6U49H66ci2K5DcHZSLfg6BgfTtc2Dh",
  "key17": "52eRAyuVevJp3czsVV8LVDVzrCsNsQJzWdYNNdqUxTjJnfuiy2v4iTNLkQo2kJbowxawk2CCi6PhkZT79f3Lu4Aj",
  "key18": "5fMutBDGDXqL8voJhVKhwbRgtPK1TnUs2iVHcD2W8QaeCi3SzK7ynDbFUbTbiDtYSXuBs1yg1NoxppxCVaJztNgk",
  "key19": "381GhZwyQ939U451yjQhhAfQba1baTC2roHe8CmMVDMR5V4m8trG3LxJMLnyx987JMvXzjT4JaRXdNUC9sfb8vYN",
  "key20": "TM76URtxRVfxmVXPf27sY4BFP9xae25GcaEwDk8gtrm25GTaARz3m4b9yq9tuFUNZKxB9TyTzMS8ADWZ2fT6aVe",
  "key21": "8myPRAPvoQMfyhHJZyCBwv6hJ8Pj1cGrWsNMtSLwBwd7T1umZZrS7ATHwDNiiogTGJGBsc24e2bx23wqsy751ct",
  "key22": "3rsuqt241FQZDSXi2gZndBu5v1bSuwfLUaSUF9yLJHRyXQeAuDRPKpMGc2uYz41JueSkZToDcTptSnpYK4mu3QfL",
  "key23": "39RCZy1g6A7CBQt5ZHp6DKYa7pUbxnaiQYf4GhVKYnwCFADz99NSp5ATJnsk7iRPUDhUpbLPuAG61BuGgDTPg4QJ",
  "key24": "5kakPTAUyeAuKezE9wkfnFTqCAf75B1SW7EhHsqLxhhGtCQThNNiu5UDQfNgeJ5EiDhWYqg6wFE9f6jTmU3omWoG",
  "key25": "3Ps2SYpBd2vs8imCqiDn8uJxGmc6dhxaD3MJz5q6BtMeoUEFRYYHRfvvaGZEJ8U6RY1dDFZKq67BFUEL6awB1EXz",
  "key26": "5Wf9kYaVncCGhR4Mt8CjKjFJgk7Rz1gNd4v2jJFi3Zn2RPFU9BLrVKsJLZezFBV9rPVabKhLzf96NF4SavzAvkSc",
  "key27": "4HAQrsMKwzG3i4gZzGRhRTtXZnuRcB85tc855NBb5jCgnRTu4eLgVJzuGyUfNNmk1cJygb7JVq6NmcVgLCYYjG2c",
  "key28": "2tmTCegXxN9sF111eBezDUuTLXj71DjzKaPD5eMDygKxLHj4rmhkmNWofiUrspQXJkQUTnKDWjn5gyhB5MpTTZr4",
  "key29": "3ko7VvymM6UZFp6Z6owTFRv1gzA1QdjJQCxvaqbwwgjCXRhaT9bagCjBu66HWwNgXrPpciBrrHJHqDb4P5foMdFc",
  "key30": "5NC8KojohE7w4pAWUqJVUh3X4LzEZbxQPovYY8yjVRFCdPExE1CzVUCNfmBccJtLSw9npgrJ9LUBZANcYjEHLVK8",
  "key31": "2ZfgQ5Bhshy4ekTMHqbL2omeEXKon8Ssh81nTWmE1qX8FZmtbRQooUsHrb6uLXFSXr3gJiJhGnSSJgyhDhPE4PFK",
  "key32": "5R3qpEGUJKzGwnGT4me2z7Hb51kKEGbPNoL9vJZpZTzQH5Wvz1WnjJ3YvHYP4jgr7bwiwypF3riepvvufXkhJ5pt",
  "key33": "5i8y5MVBy4pSNrVC5Zq961CwnHGKC9mqyk7Sv7F9wUwgobBjBmi1ScZyFyuTmWYq1w4onhvoUT6EkRcDnNFWPGb",
  "key34": "5Nyg7aT5gyCCwCJ7gZGLYBedQEnwdhLqGp9dKA8Fhom83rTmiEVX7g3mCdiaEijZvEFjbYtQt8aw2xXE6us4QSoU",
  "key35": "2q3oHZumcdg1zyiWdiD2DjicaoguHjVRAhTBjEYq6LMoSTFsZF6keSNRWn92oSamWC4guGv7vEqMkNVvE5Buwaan",
  "key36": "YFB417GsUDPN7ozW4yKkUvBfpbZM4XDn4trDMxQGBNZkca91JogCvBWMimETBhVxt7cXvPpMxhDwTe3TReTrh91",
  "key37": "4Qt9jQTHnbXcxu9GN12Jua2FkEb54YgHF13e6wE2CZTxbcbCayjLiSYGoP6k6Jqg5iamXn58ysqJEYrQrwbiWybe",
  "key38": "5YukVAi6gvtdbJpBE2mvhSCYLdTF1V9tkhZkyb1J8uKKdLu71fHQacYtTt7edYpWc7c1kwivJUhkxsX9wQHvmXyA",
  "key39": "RGbRFVoGooCPNxKyw5kynRBjWMh9BdNSkG1s7SVUCfJuHsAFEKvgFgxacTk1z3beJpj3VJYzY8vaNU2zFWWbr5A",
  "key40": "2uHeZVDnZzhBrx5Q8vMdpBfMdbi6i6p56wGwvUwYWWyeQASnCZqVMkz5qYXP5gvUMWjc1G4xWXUkpUiDkrsMETHC",
  "key41": "5cH5weQuvTk14PYRrAr1mwp1PndfV2FoBrb1tUHxDPWPwzwARoLQTVwxfpeo3qs8s3V1XErfNrVzd4XGcX3vJUBq",
  "key42": "3kcxUuN1uZkjr8uTAGY7euHjzmrmkTuGRdfWapeFosZ9QzhRc3icd7SHKGxzAL9tSh3mujHwhRW9Czmhw4h87Fju",
  "key43": "4YyfWGb5mZDnerCbUMepCkA7jiVGLkBUaQjgxFUJH8373o87wWzd4bxm6T8YpRimXbZyQNHgyW3ApWeKtAwpGFvA"
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
