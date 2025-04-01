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
    "2b1T2RbzbnEaDCBYzaVhpbyhe7YEX5YcN5pzxSuPWDQYwVjnhjrEKPZ29QREQs66CBLFHksv8RH5t17j7YiTncS9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5uD1n21c3JHjzyZqiMycbMqT1oW7P2jGKMNeHQTER7u7vbxHtdGtzwnJSX6uLyDBXEFjKp1GEPMipotwbRUcgb25",
  "key1": "5msEW2nA5yy6cfAYbLhFBXazmPGJMxdsnxgSGWj46yKqi1BVzUrSo2EBRRQ2Yk1t5gHw3guppuK4uA69kDE9GTKe",
  "key2": "67LPJGNmmCZ7QPbPDif75zx1u4Q8qPfx7r4h7SXAV2DT1GfBcZhv2cmwVtRGuTEZ71iTXQ5LxaGRa97YyADxqmzH",
  "key3": "QboEHHNJrg1BTZB48o8fZpeccAXgbuAEF3Ybou45kojU7L9bjkqZvrF74jnVjp2FAd5W8mmfge7nJ1LERdjkRku",
  "key4": "5oE6NyRUALPBYnEoFgDMn7WayxGwhv5fkbBnyuTKW1VnaPR1qz4nvoavoT3EWTyzM4by9fU9kUyXjro3pSVWqTpk",
  "key5": "3CG1PHAhVZAnTHySb7XdSTY4svzdbHcvGmAHtRCGHZZDY4ZELgoAnhSyp6fiyAWxsYWr87VNRc5aYg2EP6odr322",
  "key6": "4XFyBgsgDsQocssHcWAEhNbvJe57We5JDcrqdCuBMJwXPZJDDyXLKfGd72ie8gVeHutevWdsXgwD34rGxShkR9Z7",
  "key7": "5xSDzQ84gTb5vebK9CW49xAtLWxYdWvSnB599M1fJjBgUpJshxhysm3vLrKWE9V36XVFKgsqwYNioccX1DibHE2F",
  "key8": "4nosS4JHzBAuyU5fWFqw7Zsd3u28Sg6m6BkR9s87pXUnSm44z8zaNnD3L1uqWRS7YnJZmmKxbm5cH6auieVvFuim",
  "key9": "3M6JPCoVYgTxXMyT8QLNvHuvT4LzEfM69vXnBLgoTxGbRJsTWxzNMDZHRLbbnuGvTvXUT7meyKoKFVK6JVWXsWZu",
  "key10": "2DXQSVoydJR1WRKSwdmCS3FgFChSXZXMarhGECpd6XTj7SGuxuGQQkuQd14yHJgq3EHX8A9Rni1hbDpPKi7h4GeS",
  "key11": "58Npgt6i9pMpRwPQ7HegzdcxN5JpEFpBf7UPia8s948CCLTaFuzrdiJrdrPR8Bb8C2pKvw9f4gVcxoHziHjrWN1f",
  "key12": "5d7K58ozVuBPsDQqJjVWqtvGeTCYKx42XRv1d8QaKCp8jUrWsj7B1wowdNSG5ARFJQRXrnLjHYPACKKZSHWHFW1g",
  "key13": "Uxf2EmjrriEuVsjKNY7EDnmdndPx6dCBB7oKt6drq6ftZcLKqA9Zpu1z6mgth1DEv8LdTGpfJHJHViqK9GCgRNg",
  "key14": "5321JwEY6JTaonVA46pqCo25PPpGGaktTCAUgqvVR8G1ajiBmS2pv6Gwg1guhRtoPdtRuesYJeuXKsHYJey52YKc",
  "key15": "TycSopHp8d2pnu98gYyzBSNxWFCwkpfG9kfpqf79wHJ4vQTBWirJng7abZXFFjhfqFhraFNSvxRTNDLBtmQPZ2h",
  "key16": "Kf3X6zqdVyo4PXmmropi3iXVF2J9ZnfTouJkVQWBFA2rA5ofLJ7tERUB5MxtgjX1YFNuMmWfedQLEfZSURdi9DJ",
  "key17": "36WHRfsspS5C981jsvTQPYiBbZUoQiPc1CvxgPJFscpXLZJDrvi9VPxkBdc99e5twcH8FvFenw5qz5ruCzjACodc",
  "key18": "5pNC8f5gLi848sctTCRm3GZmjtdrhPX88bbEESgriS7PfVbhUXpmyhLLHEHR6hUE9mQwJcivK6J2w7P6mjEBwhks",
  "key19": "5KPJWo8M3hZ8xdVnawTzmHYsyQsyvi8qUZtwCbyVWsBwtKWdVu2TNyrY3ddvuvxUxeE6hYkXjLrV8tguLRSU2bZb",
  "key20": "5oEffaaP4uuvypuJiL3ULWJaV3Lkgo2HNqR2FwRRzhp8hqZ5usJrk4drcZJRv68i5eYc1Pvb2FL6gpEyFTkHJDZ9",
  "key21": "3mHjuieZcw4H2TLECEvmdoRnJSRycGz2WwbM1hKGMyND9aj4eFRpcmuksYajJjM81s3YxQ6sFHzxEXsTQViQ3fDA",
  "key22": "2X9uNdEzJUtKXktQKMbk6jdWJSwtX5oi1DdVYjz4R7vYZw4u1g7hjrRjnr4i2AvDboC9Dhq8TPGFs7d4ZYrVG4zs",
  "key23": "FAqtTzqQVBbk6c37kFtWKEDoXLWB2WHAHGiA4S4pB9Q65kVxT14hsttYRgHXjsnxVKEwRU9pnZVme9bQR3ic2NG",
  "key24": "2JcHwh98iqipD2acVH66YCgxJn7Fd8weFCiqTaQjUfyaUy13taggaduYR5sgKvRsXZCA4Rif3G78Cn5jBbQ5agYW",
  "key25": "2dgjUE9syKqBexKHTLMKzK6wfdXDgQopzYX3qJhJ6X9VXAKWVgDECDh9XzDVEVKFgvfLjq6JZ3BQmvhma9i8PzWx",
  "key26": "4GjhePuqsF5aq2FJv5DvzizQNmyKp7iNYRo22ARNvLBaMbS5rU2M86nLHpmfK9oV39PvFtnvXV6WEkL2BEiNzGzF",
  "key27": "61HDQyAhizEp5cANghKVAXrkLywxk6Uya4njC94WwwfugzqxjFsA3dffxvVnTvnW5SWr4XZ9idYNrbyB4mKBjKcn",
  "key28": "2BMJBhu89ttQt1RM5FcLbjv5q9xNQNeR371iJnA4dXC9vcCNyhxdxyPxStcNcQAgpumJuE2NyLrwR1oJRuHmFPDH",
  "key29": "4PGoCqFujZ9QLciXHezbHH1DmqDQ7PxJnMd8u9UAuDFeXQVb8JGEKjjidYRgjnytFnSSGPdWop2fei4jAKJfLts5",
  "key30": "oVcoezKAUPGXWhhKquGWHyGGMfuvv3EuuM3GMRnVkSjN58iFW1UPnYsymaZGRHbv2kqodpje8kpDnk7NW9rY8Uy",
  "key31": "3YMYvS9ZUXejHCBqopBKaeBaUBXziuyy5ooFj3GtKBws5WePy1x45kqo9u5cM1ZUccChKubk8vdHr224wwkoQTVF",
  "key32": "4L9WfEg2kVk8M92ZqkNBXMVnJp69gn24UWVAUGgL5yYcambcFqtGWukPR2XYFccPqoPUGUCFFRarZa9TgUcohgNZ",
  "key33": "36JiDg5pnKGxBxBVewRpSstRJxPNHWdqToSgp9C6tUr3Xm6GqvEEQUpNLQA66cmMyRmVMMRRh8nmPR7kbpovDpSe",
  "key34": "dCVkzw8ky8cxsQ9nGTm3TP2QL4XA1HfouYr6mo2RH8asNA6ZqdLrEjYasdZucz3fTJK4LKVoGdtwiioinZFGCgk",
  "key35": "3A7aJMV9uuc3Lb1Ny58wMJrqDpsY9hKBLePniy7eHNv3unXG6xZQZJUNJegkTxNEp2ASNsDXnnKKpKNxPEuqg1Lj",
  "key36": "5A8VXNtiFQ2GG6uUqyY8GbLDMQTVWnhRknz6nCm1xK8Y4DiL5NfiTAdW3YmKaKsmC3FwgfVc4SKDrB4nDw3oVozq",
  "key37": "DyBBhYEmJpTHirGzPtbBZiSysnMWgcSmNZGiXShjZzRcmRNofLdvrG1b6TQ8tEBhrxjyhiQWPXXpbzvKqRCW2D1",
  "key38": "awd3FGUarcKYeHbu9fFeAZfMakdwTFBXex7VoQV27uEmwHShmEY3xCBoqFqA2GYakjStjyQVs3gX5h2eyKiEzZk",
  "key39": "3eNT8gNyVy5CyeNFQK8TBcfJj1PS3LG9T9YvvUtoGTsUFHrBY6gHgLXtQRSX87HUGHwtJ5Hu1iQsyY31CPh8df1B",
  "key40": "33FgghCgyCtDGrMkxUSjLUyYqVMbhbt1hSQ8LCj4cSxqEnvWU4eB6PZnJWPH6iwzGBKWgqjiHSic6b85trSR1V61",
  "key41": "5ANWWDTcDgejQ1cCegMLB73E5uJtPLoGuPZnDogR75gNRHsfMQk54GMDmRZ28Yv5eVR9rdM5VvuVjcAjRC8duDfN",
  "key42": "3i3vESTG8gbCFSB63E2BnYwbk4L6XhX1MPMBz93picXBM233Q3etDNRFFiksJER5jkRo3yym6mxDZHh5NtroYaTc",
  "key43": "5Jp5wGSjRximRVz5ev5dAku3MqwU3HqtgwbVZMvVJ1dcBZ1eeACsieGmie4KfG9bCHr1tTLRLT8Bs9VoMLGrZ7vX",
  "key44": "2GSBWoJdFtMGjCLVa7gXjbajzfSQ8XGG5u6w3kKCSZ66DKirvfR2AKzZYeu5DynVtBEUXm7fPH3NmTLZEyn9iTUc",
  "key45": "32h3E7z64JsDrC64Yo1eCkGgPXMLxvCzkpZii8w9A1mdBH5Fdv6AG2GYywsa5qMnskLJ8badzuGhXi4Vw8BYy1d9",
  "key46": "4CyneCdZH2qoRZdKnuVJxRGzacFks1g5d2U4Uzj7vRUAH66gRrfjr5CLc51eshS866xerMxLHvDarAkreiddaUnY",
  "key47": "3F6ouMJWzcCC8YfWb84H27WbVHKNTgUwwEdgFEEm5KdSwiRWrxudTLNo1MFLPipYHZzfusprgjPdWQ6p1x35Qb4R"
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
