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
    "3r2dDTcQrKHk8WumRupQNiF5Q1A3mKXcdzzadCH78iTvxWNNvFnyiWJEMm7iKyKkWEL2D5CoTCbdweg3Xq5sQjH8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4tZfyPHQVQpZ8a28Bo2vAMQGFppd716c2uKq6v2XnnuTcAqWM8LvHDGzBWVt8CvumqvKKfVMYyXsGAUL284tqYqt",
  "key1": "5WCwP3F43XrLQcx1pEn2YENNSHWRdQh7Nm3WBgxXW9dYWUdvf2y33R7hspXYgd2iUt2GCpoibBVdUYMBptghGwk6",
  "key2": "h6fJyfXap3Rw6ZjCjHLmGiDHrH2wyzyUXtXTyZUNmRViM6RWeW6eytpF2We8rqQJvpXxrLX8Rr6C2M6RaseMWVd",
  "key3": "37Au9h4QiTUwXpcC157hQS8jTdpj1jfzN21juYkB6Fsress9XpEyxfV77eXMncvCjoY1Y58o4j97NiD6LynXJG5o",
  "key4": "2GYSriT1ozAuEgLSYPDYnVCaq97gWTi7miwoxNkALDbjpeo9SA3LuWuTCJvUHtvMHHJNGCujubXMF74mPMJuPpxq",
  "key5": "mnXGHCE5Aumf4W9tX4TrmxtP76CHHt7NnoHsWLC5SndfZkFLMYsLJn2UciJiij89DPju1CptR6VHYMrAhsP8dqW",
  "key6": "3YSWVZ6a9Luq9qcEFbPYvabREhr6AeSwoFkXJbrmGTKi9uMZ4Sk6fMusSusSVnwMTvM7BGku9GMyd9NzcdAKg4E7",
  "key7": "B5AaqjQxPnv4QRmGVzwfwEGtFG3iC7iAiDDTHLq2bKLitNcbz83y7qaNGeKo55c4FZG8DGQX1JLu2yrP6puh1oP",
  "key8": "5LDHcqnpE2QMycQqADzxrskVkwfHcmEh7TrkTkfxYkkRxrrFbxa78XEoZESAviBrmMWwmy9uJVRuc6YHDYgtAuqs",
  "key9": "5tADmFxqUtYjfNmbsu9oFBK9QA1duExhxw8ndcbDJcKFjMXAMumDTqtHjB67ASVJEfbTy6S6WRb8DN6Li3DAe3kd",
  "key10": "2pq1yrXPWLE141iYNLoosJx81YzzGUL3h2C2Eh1PZXgNrf1as82q6ipSbvyLvPJPEg3To1cEh4xinaFEpNCBE7mM",
  "key11": "5eJrrFrNn6bzBQR9hWnhjpP22mDVjGCEA88He1votyndynR4bihCrq8X1MD7Hp4CN6VoufaLPk5RKyYQuqnxH1eM",
  "key12": "4F6V5chrgfZJ67w2Nv3krd6cExdiizscVnFBNq8oPaD11fKjQyvH9Cg4c9ZeKarspJwYoyusniAwcRVimVsdYVED",
  "key13": "49eefo8nrSFaxvXdd3qCiYRaSKyWMb1cpyuETN7sZ5foy5CPvX94uLtbXKJjs7Kc1vYsaRF7uxGRvitWrYtMbbH8",
  "key14": "5FK7hBxNhhLjAtDtCnqYx8LmKSiEkkZKAjdF3Gw5b4ZpYNM1YF9CcLXwYX6sFnHXcbbMzpwD5VvGhGBWBBQJmg5b",
  "key15": "54RHLT48gmKG345FcGebLQJ5um3z5ivsGsRQhHpDz377kE2AWff59QDaq6qsMmKsTv4gCvUHgtTKsekQZyKubdY8",
  "key16": "ffFBt6NDqtdxUYGB1tvXXRLi24m7feohtxYAikeJqgd3nBdiBHaEhdZ24R39aE6t7cPChQxPTihXpHuWwsBFigV",
  "key17": "25ijdgfCK6KXh1wyvtb6nSHVkxsT2AcHQZsFtAoJN9qhd6urD1AiiGwkgJWDi3HtRMUUj7Hd42FxFtBSREaiekS3",
  "key18": "32zyokJGPVyWwdgbLwvbxDm47D9AirtE3t5zS5XYLMqBW4H2kkTnTKAoH26beJDgUNBJfsMZNQPiezQmMk6xdKf5",
  "key19": "2WRu1kpMVepuWw2NQvQkpoREPSzCaQK6rfLiJvx4YY8SoVTxK7iQQMtPuYyzeku8RrGynZqG6cGD4xf6Ujk7dn6G",
  "key20": "2rz3zQ5Em7NMy7Z6pGYNu3aCVQNDbbEWB274nMrnUc4cFskmdiU5A5YYkjG5k75nx6ePRPEcoQV8i38ZEbnoibrr",
  "key21": "4q2T34ZRZ9KMRb54FrJgH9gjEFtA4dKMtUx2cVi8v9CYZqfpvjDJmp15ryKFxkDutsy3qKobtQNjjTeUyVsM2Cye",
  "key22": "4sfqiB4RR8CkfP8Rjf4mDWhQxAiuneXxGd45dQXmf3k7ijr7Ubr62x9MThhTsCKYPtSgkp96hHCX7gmfZmGfjiJS",
  "key23": "5uTw3mbD3fUscBzVjLCfwnizQT6UQFkZSmSteFkvY5grMCipNgtNsYdLSNZDgeLvKxgRYYqF6bf2i7PYtTNYoz1A",
  "key24": "nmMiZidsQyxrWfzQ5NzrZoVUazLsVF4GREiQA9pvPvnFphaQ4qfDFhFyMGAUoh4GAFtc7RbFdt67B48drq4hmvE",
  "key25": "5AGLSa8nfWRTExL4D2taECupu8ei4BMNCMFptEFB7Db1pBsLSvRFmxf6Ga8Rov5eo3j1FmHMr8MbX1QmWdCDVtwh",
  "key26": "2wRsHosb6E3ZuTjfQ2mPuxk2NUzzkXyt7MPwiutqoQnNLtJTsjvqvQ5BAkV7bJendMbVhUuAWMt57qMzKiZjcSgG",
  "key27": "5ZERWdKqJTBcxVdEQ99JpEHTeYKjUBr3TGAoAtvjSDYHRRZbn6qxAkUjB6ds1emiUuTUEnaQQ5vesST9UzSMF6NJ",
  "key28": "4voeYaqXV2ExMMM3FoJ3gD2QrLqUoFBiwZiB2acZ7sra1aLcEChXAuFvngpo7SYmLAnrtTDN2zbJwstbNRjfDC9a",
  "key29": "22NYQ2NXv7UxHkz3u5um7WFUKXPqKXoaCLGo12EDFR6yhNEioE5ixyf1K9vvjN7JEC66SXVdwoznVPQb7bA4m7zU",
  "key30": "5gpvHmueDUqRSf6gzMpqVjaP23N2bGiH7RS2xpTzB5AWbwtaCJ1LReiFY8EKZYpPDQNeK7GfKJbrL5eph632mkbF",
  "key31": "2qwWdZ2pEfFcEjiEeDVc9qz2epeoQ5CAZdCWbnkmxb8HNRfLpHdi3HwVzi6BwpMbWEdAzSayrU5aWinuqaYgAy2U",
  "key32": "4aSqPZXPAqfyYF6pcNA5HjWd8PkVtG6tY7RSgW9iZazdeCyMVxLRHfUvaxqhcJsW2UB7gjCVpurL7T7p411tZbcN",
  "key33": "4uyfS6u46tdSq6RLz9yb4gGJfqLQJoPJSMSrrhXvGfFDKUAmiQAid5Nf5k5ZrY9X5advqbhzCMmJVAbnTZomF61y",
  "key34": "56uH1eSY8u2gBUc9ybMJZ7RpgiUfSbkuDHegBD8Hb6UcBkERUAtNmLbQKUgQab71rzQvLXd2yXMePseYswAA5XSi",
  "key35": "28g8iVnhToNRc5N2qR6FeK6pDh268zKgNMne6AYidecJG3e5s7zJWMBvSjEGK3dWZV8a7LiQceS7dSnmNBL71qjT",
  "key36": "7yQGawywmE4j57e7EyDpueEdCtYBAhFEXbQkoutw8oKHSCf7uFaKRXUz9hg8ydZnDZhXxt6zjgHx6ApDjC74avm",
  "key37": "3uhASXHZxpLQsMmQ8328M92JmTEdPwCP5c9tPmjSbWhsMysY8DMK7EociqegwXePzP8SBAjMCPGbU7dUpFgSSsjD",
  "key38": "4uDeZwjn9BZ3AvYqL7pmBrK1U9WfKuLb8PAiWvDrDgsJnDxPQf9m8XbwMGcZvKDHudFr7NrftzGYe14xtozkAGnm",
  "key39": "5kCxXStbdpLjoTyTnaiLJ7aUyC3ZsUNyr6p8q32233vG2i3jsyJhic6MDCAjJarkpkE6F2QHbARwyec4vjecPRXu",
  "key40": "5ECXC8L8VSoRMj5BLSoUtFoZhEBfiPEohmbdHNa4shHsLjTu9TqE62h5D7GzDt84B6E6CfEocPEawFFAcbz2CLEX",
  "key41": "2ZYVEpiBRCYjqbC358UoJCn8LUZumzuWYC69AhVoczijhJmbHG1ciJ8VnXdeMnAktuASgmeCNebYsYap8XiAa3WR",
  "key42": "5Y6NWQt3HEmi1HYsvWmQvhJqvkhBG1XWxChDhjP2DPUbnczyfN6k3tpxroLk5wLMSEo4U1qSZ8TShJxtunp9zwur",
  "key43": "3WVc1VzJz1jJrnN1jN8sNPvDYx9M9MvVgxCd2vwq4Q3kLUS2BF9CU5kQRJcvrqHQpppk26rz1SvZ76GDGifWBEBY",
  "key44": "5XRPM46kns3zcCBAiXVp52Rm2whSu9yRe2ga4VfieQYJfBqtmkXSqjVep9RMtMYqXWipLCesCV48mKzfNcaHawCU",
  "key45": "4E1ws1mWhWPhZ3XLLXzzdg94NKPMzNwZtWAZaRc3Tk9dgZLMi9yjCzkbepvscJoD8gbT3j8yG6rjVZiGktFZcYKA",
  "key46": "4BumPDKZVfrLDi72bz5tRC2g7GKvWqWeFsrdwxqqGWCJFUqGfVNp6puv4fDH8QDDPH9UCPVzGNtrTZjFcp9wYjqC",
  "key47": "4ua9SVQ7Lb9fTkesMsiKNR9dW8TtiPSWm4N5qVaxVTKXxxL6wdN2F4Fhv7jhfqzknHbe53119FWYBmWBkHAWj5k4"
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
