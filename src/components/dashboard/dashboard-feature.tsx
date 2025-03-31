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
    "2bj6oxq48Dum849PgWStyx9aHLHS8XAoLon9Xj6CL9YGfmbkcYaETNU8i64B67hyDzA2WeYGwTkbaSuGCttgftaC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3goNque11vqUmVThnj8bdRgu2Ef9sbh3XZ28t2ffEHQ1x7PyRCaRpBrsbivNWFcLvZ95gKMuqHQXJHzm4ZjjvBVM",
  "key1": "2QNfABWYTPMD1uZah7uNG2sT4BjVdQHfW4Q1un13tVBV2ajF716wS1x54j3eb1wGVsomBSb32vwd3V71LXmX9BSA",
  "key2": "2VksryKa5SXgmTYjLMVmzZVo1S5PkzoqYvUc4weTZTLSwPHbZhnCoE6rhj1KNbWvc47SUSDw5XoMFEzLvn669Sas",
  "key3": "662C9CkRHVr7MXLpeyN7tkfJQ6ufwVgNKq856cNY7SsG6AyBEs2HThKkrUV6jHxhWRfh8EuePQK1QVBv9xwzLkL9",
  "key4": "DKcbGeUA2oV9y5LURgZ65h5iNLGfKUM8B4fkFMY7emKqFXSbnjmWv444bHY5FMXCzQdZuwKijRckHkhLqyDkfep",
  "key5": "2Gos7yioWYts1jRQ8SktzPDEyVVd6wCWuAkZXqxkEg1BKJUXXPdZgs41Vd6Zn3rFsYA8us26Gbcoe8spi6dwu5Z7",
  "key6": "5RG4GqHnmJiztgBHfm8A5uzaKaRxphvQQPA6pEy472z6cc3h5yJhRDTroGya5CPhazfiA8Rdk1nESHmNxweoPYka",
  "key7": "3pbJiicZZnYQVHVUj6C2UNEZNNkvrNwTrJk66yyg1Su4bBQ4rYSsY8gwnohGWho8ez7uyga57ZhBb96GLqq12ZcE",
  "key8": "yboisqHZmDxJdTucGyE18d9svuTtu9YR7EMUZSqe1F3YJPJBCdWKkrpzw3msjcUfLRZo9qufFdkSVTdeB39TA6c",
  "key9": "5CcBgD63unrxxCV6kCpeDFkowHqBcNLMqLSUNKVDm9DyuRdQ1Ds5STwZt2oTwmNxV91JhQkyQDaG6NU4g5oB1YN7",
  "key10": "21cvbe4BZv6yKxBEqpVsz9t9BFbGAkHedrn55z21H9GTsskwoe6zHoYZ2VwjVEDyYCmesqP9jE36HefkHTtbfUFX",
  "key11": "28TqnbZKVp1NDLBxXXomVv2DuuzfhG6J7kdjL3a7TFbJWArGuuf7CA1xc4xJUGHnzsLHi5SJt1Ez3aMvbGr4HVxe",
  "key12": "4rEbQKP2U5K4sdVuFwBAEcMnRE2KV2VMDJBkBo3FAnXMunh3QBtUYhhbsfqCWAUahqWsvpqicLxnfQ1awshuoGbN",
  "key13": "2kYCL3FvCNgKrw2Q3YnXkFLUbpggrd8QdjTYdknA4xv4ciTdyYsn2hqEgypsyTARVHhxYeGWjgLKMKwyB25qJzmX",
  "key14": "3duezXapkb4Q4omuNqcFWc9FJukiqYokMSDhcQigADFiB4iX6N2Nb3Dzu4dgvoHZD4UBQyu2baMeQL1FuUVbGxUB",
  "key15": "3uoKN6dqfNjgtHg3wwE5MhE9y25g3FfaYhRVw7U4eQLJaGiZLrGgTkwTkyUigRxMyA2y1n5N4Q1YGHdZf9VsZ2z8",
  "key16": "5LqdXhKiRRQrGyjCgWc1n7m4RhuAiDHAKcC1z8RtzKybdbvkY1FvZK3yEENVk3HxZHfrUUHmAhxYnuHzy4SjjJgq",
  "key17": "3XKid6BfajgB8GbLbfjX1sagnKCj7YXYmKoFiWu9da3L4WCH7bMrDcUifgbt1cvfztxQGmXxXaJ5r3DnUk5EXZvo",
  "key18": "3JdBQHJLjoFeHxxMu69oNhyxMXFKL6mML1uNETQesQnAVQi78821848MxQU77tSgubHqLsCrVuaGeBPSTyt4eEJT",
  "key19": "3iY9hXMq1gYAb512WfQXLBtcLKndCajB1GpCpXhon6sLFRMxjMKqPJGZfyxFzRCSYn6SoycMe6Lgeih96QSuyr7H",
  "key20": "jy1J4vxvBs2iZyiMsGRcp7eQuHLc17bV4UX9JGeaoQLcPABKT6Czc5AX5b4VVNw4mUDwZMhTqBC2unokyQzVdcQ",
  "key21": "2s3AxfRNp25WwqKyU6s49yRNYy841D69u6SL8JcX2f9fWVZVYEV7KmPnwXfEyeQXrqY4Yv21m7yoFiZfo8kPfbEs",
  "key22": "66LEPFVAftNW8yx6YgjcZcNUmM2sa8zYMWAj3TbumbcQBZXzpkPWTAhNSmFtx3Y6ZmiZwpMRbnKFaRRfESNQrZGk",
  "key23": "3qncchFvHxikosFJAwT6Mit8mssYU1N9rB5nX5tvXe6KB2DNXq9zcnFQiWuBLmhUxqDUvMhEL8JFWrzWe3DDWm2H",
  "key24": "56C3x6EYzcUARPbHyxTjstitc8HD2HbAorUrNmX5uVa7yqUijEztWtMpb19ZkjMLqzn6zb6o1CT5eLttZfZxUroy",
  "key25": "D1DPdxBniwY4KvgZCNXzKJsVEKpqSRnwfiXJPdp3L9QqKgeW6CvnhWeoqEhYTN4zkZiLQXHvUrVB7pdaACwM4ST",
  "key26": "3LrtUyDHGD3kQtNVo1ZXguAhJksNQeSkqX94cNPhMu5wFcPGgMBR3eihJiA6SxnQwHHRGXjKBijJgJ8n8hNDYfb2",
  "key27": "fdZjWhED9Spnz79uBwxr8CJ9n4mtiPtV2XVmMNqhADaNtZAMrGedQZnXzJWHBdENMKksBbSS5UUKCYTggLHjwkX",
  "key28": "2ZV9oNVnkVFhXsnFu8c7RLAXDaqM8fYF9mvAmvnZRt9ssbpTWVStitSh6fNHZD8ZTb4yQvnyd6jajMniCToHiQDP",
  "key29": "5pV3VgBSVTtXn4vpcRyA4d4t2MWKA5tVdh9K7DDZyywp5hTM25KmEjmh9Nynr9MygocH41WGSSutDqdyGkv2cLSG",
  "key30": "5VWAjJJ5hUm2zAYuQkS3Snm28EgdeTxoU8qBiRsFnfvAq1GrLwHocBPZYmWk2RXSxmRMVPEfbDiPDAw1CEdysBSw",
  "key31": "4pAmKeyL1aJYndwi2rqeY82T4GNWyutAHuBp67n4t4LMPQjvewyRwKvxVPxZ913jAsJdwpudS6nqHVCo2ztZ8mos",
  "key32": "2MPbaT2a6bbUF9we9ePLD5FG2MyJDFppQ3MKyAaptcsdfHqXPioEtBmwjjN1cpq2h1NodDvwg4xdGsA2ZNbdr8L7",
  "key33": "4hdT8skgPJamFs7x9sYXnbYxHrb7hCCyqx4x1GcAnsVPLqDtqGkpiJ7SgC1fJnwZgHtEcQsmWc8S3nmQdaPy6zqW",
  "key34": "5RWUvyfHsDEYFiSpRos2EsYq3g4tq9uKJ1fRM6KKX8eAySa4G4Ni3APy5LAwcejQSqofR4hujNX3DQ23AbsPX7ru",
  "key35": "4eT5JGzKzZnFL5kq96m59GhixpVAGekLce5ZkLeRnGxqcwrRBXSZCLMz1UFtkVHHb2hyWpZ9hHYeXyMNKr7EPN4u",
  "key36": "5iyGHBfph1LaLrPqtjbyB2npswA33pYwr2NPMg2xUAtJxKGgx6Z8dpS7Y5NEneZmuFaYPBiNGZRh2txtio67Y4bR",
  "key37": "61mfbWnfLbETz99PMDpY59yTjczV5EjFX5b8LEY8LFtar2HGpKxDcJthfaQYFKWB9SdhdXLycxu35m22B8N1NkoN",
  "key38": "4kCar2tmnSXHDkGvP81R9fYXW4Wxams3Kvd8AX2NP4Gp3U7hvLuadBG2GFVxTRjEp5Uxt2mT8nkVnAz4ie6yJgxg",
  "key39": "5JvscyfSZzLsZjaGCbzr7byvjCnByBozEvTd1UuWTQWgm6G2PDcrcNAsbD2z2SV9ebq6QrgsSGNDMVMr5izjS7u6",
  "key40": "ZDgQ6V7SQx2kSJK1cPsJkCBwjQQDHgbxN26Y14ai4n9h9GCUX5ueSmCiGURBvD9Y67YCeiCNjFWERqpcKy7azw1",
  "key41": "3v8k23rwJ5A7ZFyq3idQxP8ASShMEKLrhKW2egU4v1gsWvBUZqDz7PHLgCznoAt5sKZjJPhLExpo6psUmBom1CK6"
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
