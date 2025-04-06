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
    "vLeK3RtJdmYL76KNM9EHYyN7yv1CpmbU683W9qp5dbQJ9TNwn1FSe8RnLg4oa8GiV8P2hFsW6pAbXrwTPumvjCk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4CWrwiJ7YrovWqTxpJxEfy6G77LB4dzaEtCFHVMS2idbPj7KKLkuExpqnyEqaAKKtr82wAdSf9NM5BtZY4wXLBdA",
  "key1": "2MZZDG7PxdKj4CFLK92GrPZfm4muYc32gXfBsoXMAn9Me1h8UZ8z5pmaZphsetWcyCg9pvywyvTAFc5K1qfzrLmz",
  "key2": "3Z9c7zCjhnSBuLE1U1LgcHuckoBSJDFxp2zv4ETEEp1CfAgTZWziaFmwVuNG2sRn7zsw3UXt8EnyxTUgJnC9gwYr",
  "key3": "5JtWiMsCY56ZYncLQTcBpyEnDobJzdFCnKNVVd5B9wcHK7cabP5w2d5GgUCwN1FNLVEd8aP6Q3URaJNC72oUgdsK",
  "key4": "3CGmLywFunQ5n6jCfBpGUrsxjHNKmgL854hKF9bxcD31vCNL9h3PJtYJYHLQe78YuALviTLFNge16RSq4vjtz8hd",
  "key5": "5TBVaqeQxVVDmNSqiYbj3PdUB2guauZfDEuKo76U3cTE4VHr9FtSX8LQWRXLidRro1h2BzjxDbfZVHYDVw4Ah9T",
  "key6": "2oTFhRkkdyjTLG3F6UPJKdLdeByAmjNQ7AgaCVumQAQ7DiDqwDo6qVZ9PxB3fh1pk8RchYbZVELdudD51sAREsDT",
  "key7": "65uq9aB9q74pt5T25BtsgLprGGycomH6s3BYy2s7gBc3DZYedJ6KwfzyC3UpftYLHNtC3RbYkgP8HN5hiSNi99hJ",
  "key8": "2CXxoDDkc1SL7SkX5AQzH1kvEKJerv8RcqapmDkhkA3s6QpBASbvWCwT7NPdNP6Ja7cUFSDU5tysce8ELtYxXf5a",
  "key9": "4zRfuoyb6W28DWP5ons5AUym1pydnfRFfNbi8ZyEEgPs5U7xaoYS8XmYJJJmLFyEoLu7NvhcVYEKNvKZRhzCZHB5",
  "key10": "29SBPVX3rK5Vz6rV7op1P6LwPNezVL9G3uur7f6zbkoNxgHGQJx97mMvKT2Kd5ZBcSZTjKWxmpJBMsPJLWDBmWCv",
  "key11": "4C51GquhF6vcVSJNkrhpRJaNx755XfPTafUfyQfzmD3kuuTffoqTatbVdUFBd6Gh1nUim2TE1XswYveTajCqLnSn",
  "key12": "2X4GRp44QD6vBuMBSa3t4qvpVMGsyNDkPmZMyu372VMseeTSsxyq3kWHKoDHTvi36DH6cTZ72RoP9254AmLVfdDx",
  "key13": "2G3P6784KBN8SEqWbsnrQFNdYg9onNuxWGGwzfcuZLsFe9exSavCURZFWf8kTSRzaSwka3ePs4tFdgMr8WMS1sPv",
  "key14": "4zrnNJhSkaKyJ52fgs4ppmYoraWKDgMwsaH4AtPYub4WgSRHykfyGUQMG7nfkS1xv5mum51UJnUxWqcuoh5T5rg8",
  "key15": "5Z966Pa1rpSijP5ZqLWjGQNTbRtHBTwYdJT9Bopd23VJLg9UH4LvytC735GWLL21fzfTQdCaE5D15Vti62DpTpVg",
  "key16": "39dqswHqddSSTdiSDzBVYwQkUoXW3zve5YR17ruL8YQRaoA1PYFEQYQLc5wpKeMhbCC9dMcRo1sbZMSg5FcxhqJ",
  "key17": "3X6h6j8L6ipNNYQmxm3Q76uuFaeVAJNr5A9QGZs44wVTkuhL1KKTNv2kmNoPyhf6UTE3zvfj17iUqteh7izMLCzn",
  "key18": "4bvWt4xsqAjdfAq5YP3nE7qM2gn5KB2saJho6tpmLokvjQeVyytqgQNrPJ3FgTGKoyFUk65qbkroWGAdL6Gi1pcG",
  "key19": "43Hy65CwahF3mWai8J9ESZ14EyuJknysS7LBaQJ3qe8jGjtJJioXF62rHqCKAu55jA6G2vtQ51CzuQdSksB7wH7X",
  "key20": "nkW7DUkkf7sHNfFinv8J2Suy7epPcWFKEwT2gyYQacUiDkSxb45ypvQ2Mu6nXdbBuSicfTg4tsFdD6MYXqnFX8u",
  "key21": "5kccZkCu7qV4RLY99YmwaJSANn8tMfq9oLbRo3gwu957QV9mdN91mkjrD9fzutwcZ2o9ijXb7xZcLEBUDijohMup",
  "key22": "3EEG7meKyvfKfuKjQXJt4cgHhMfiUuY1N3419rXFhVmzBqzqsetMzisZ7gGDuJZcrrnj12FnenqUhEuHitw4VWLF",
  "key23": "67LLNeBDcKmhiSXZdZSVJLioUPPC4w3uCmeDTnY4T7za9BSyTY6ABNjoyyXrneckp8JkdGVXuYnefxeTLjb4DPRw",
  "key24": "fZhFVXt2sFiBtrz39fWjzRQjWvwszib3b6fd8aE2G6UbjXZaYE7h311c6gyNtAmNT15MgcQwv1zigo9W54daxGB",
  "key25": "5yQAiaFK4ukJbD39GsoHuGyyGU68jQzHB9euwQYNMtrnqj4MDYwx9M8y75hubDHbDFAndu4rjznUsRWfyuWRqyYF",
  "key26": "oztF7WQBu3hUcihzevhfeB5e5fn4G2tKTA7zxbRWVkghNUV6PQPJKc7uAQhgM5odk7gEpgUN25y3QqXNeXAprnc",
  "key27": "2LVtGXH5Kp2Tr31rFzJd6NT9CXLvGr1wPj2FKYLFm5cewLy2gKZMK4ev4VTWj3cbKbxuUrwHyfXjpmCz53x7oZR4",
  "key28": "2T1Q75NsJnTdd1GSDMFdn9CTHNAyckJ6d4FwiccEM1XWwn1ms5xHCBHZEs1jDvWmssb9A3TCb3siV4Zg1rrZqgZ5",
  "key29": "4NYykKLQK9RjwhHrNvnQXyFQC6XQyVDeCQCaDu99pYiQ6WLSXYPxzyHAPvhAu2WzehrktknYQQP1BXrhKEG3du7v",
  "key30": "FNgYQCiKGft8fJYmBCqg3GYRCd9g4xxAx6BzBJDMsU3xqULdsGz1DuQNGqDFrwk5osBFcznzop88GMCiDG86AVs",
  "key31": "3b5wUVh9eXmqYeygfmqpBpr3oiVXM7ku1JE9nqWFjDoPJ2TeGg2mu5PXFUBYuJoAHLoAcvprj3VR4wZrsWkyFXgK",
  "key32": "4nMQg2xQS63iE7Ay9GVEyaY7uUCGb6re5BcDoWzcsoESRdaRVDWqZnbjjV5i6VuTb135AHXJh6zgwtYQkhwcivjL",
  "key33": "YPKHL7QPDqs8yPbPsnc9E5SZnCcu3VGQFtSDqvzvnRmLTR5YrWUpfz5j8AhmSiwbqaEp3Z76vmV1ykxApVPh35t",
  "key34": "5jpuLi371foG76DcjXgF3bxPMBXZ2FASQgBzerixKS6VFFfqivLV6Jjdmm21m9RKfWZaen9YH6DULidr527M3ZD7",
  "key35": "2JNhphAPAMNu6iLMCuoPd3owbAavM1r5gkoXAt7TqBVHLcftvYsYo9CQSbiWgZbZgMHTiiJRqJXnkfdSescw7L9W",
  "key36": "26Cha7hKRQA6GTip59MtMfMaqrz9sTMgMRVy4eLVfBrVEGVUh39wwr7n3AiBGo6S3qA1kGiovTVJo5QuSSjdJq2a",
  "key37": "2Hg5QyDYuY1JhA2PAEAQYSvGfBEn5etUyUTAkHRKY2fsWCurX3cxmh6jSDLmWkVeHvGfB8siAuv6cjCgv7ihayuk",
  "key38": "ffNveSyJZp89Q324iLiLyw7CDet9h6o2X8HGkNrJwcRnda34yzRoHrrYSpgi5DQ8jAR9nSPyVXQh3PN7egyRHJL",
  "key39": "1UhkuQsUwHYd3vybyvMq1XHAiRFqEYSAjiKhBnkzNGpCQjmijzjpRTXWdXvjx7rjmDgaaXoruKMep6Sufv73ZsB",
  "key40": "VV9uKFu2MLYAya8gYU7jGWJcqE1yc2ofcM3fzFrwd1GVejf1HpFaxxy3BwL7dN13MJGXAqZBUEafYUMtECE95Ki",
  "key41": "21LtE6zmQUeq1x8Yp7BFZQEXxW3wBzdWd8GkKeiwMBti1Y8yCmGA3kw2YXRKruiP2JGQQG4cgwqXeZzSQDPgrrme",
  "key42": "2ZeJmys3Sr6asJx5D5PDmJfu7542xcgTDhSbN9QmibfSXaHeHx3hewRYyftzfAiHMDUL8ND2s8CRejvFjufzMPqf",
  "key43": "PmyzDRS9AWUoSgevXuMkbURNwLHBhWFRf8GXb1MAbaVQEPn8sNKzDnSgFAL8Jp4skWW1DCrZANxVfaP9Et6h9ND",
  "key44": "5z47UKwZJS8wHPLWUKA4J7DuyqvxH2MKTm5rrdSzbfDvW47T8LdmFovxYSuwYgVG6SqQPwuy9bgvAX8HTHkRHMov"
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
