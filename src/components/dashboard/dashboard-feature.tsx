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
    "4LF3g6oQfsxz6gx1k3xrQGD1qaoPP8TxzYU1NU2gFj7AHBPUmHRt8UER7UFk9mBPdGNkwcNoHAxFzD9bpERpWTFH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54i8Fw87YMdx9p1Khigg9EBF9JzSrxhUo9nVLH7N6SFynPj9pnwUkGJoyXpRzqhbj2faUEZHyPQ8KA58GEo17mwv",
  "key1": "5PgkAXR5gAtHqg8rBpDM5FecPJvcoq3sKpm8PT5bqC6UfLZ9ukts2ZZLQiJUQkP1a3bdUBzv4SoRcFK8BCGoXMyC",
  "key2": "47iFAVENDTuVRFRLNoJkzQh1U7do9NBaagUH71g2pZSSkvbiyzoyx3B6naYaQNRVYhPagMbq7x3CzzTGCQeYCJaB",
  "key3": "2U35Hvp6A4dd1ia69r9QH2SuPTPp1ucm2zzBiLgo1cUTNn1Z9wBHfWXfwcLcBXP2qR4R6FWqyt9R5zaCp9C4uciP",
  "key4": "2GcrvFw3EbT19kStEK9JWEahfGwQnBx4Nxa4Z25nw4peSdZH3aRPDejFG5LTD1gqxS78Ux656b8JRvXn6wRqG4Uc",
  "key5": "eN8X6mrvzhX6cFK8rgUk7si2Rw8hjn2FmoSZZoHFzZHT1vo44AwUDu7NkvtVAi4VrmVTSrgpczkBLu7HXgXRSLd",
  "key6": "3ZLepbivebopuNNJHo9iVsF4BQJFY2h4N4GA7xoUjyR91HfjnwScV4yhhMwbCRaxDCPPqEUnXnx15X6b9tg2Ffac",
  "key7": "3FU35jnRKrPW4aAMKfrViRhfWWATHCgNnt6us18w3Gvf7MVVDdSGuQb3cUpAZYZoVVxDLK4XiXaHawBXrA7bYkSU",
  "key8": "3CKRFhfDvr12cefd7ZjdTurtPnRwanMakpMsjkP6aNqLkMgVAmw7pCkjo8J11LJj4h96Zd35bNxwXfqdQfWGXpwX",
  "key9": "3ginNgSXrit7sCD7inzp7fYVpit1Auo52ivD5vUPYyCt8Sj7PmEdDuxcpKh3JZA2oBj3a5KLTYdVDy2xmu53jaVW",
  "key10": "36TZigHPaPmJ1MowXZXt9CiecgZuzEh8cBWqC1f7WHDQ8VH8vLFgTkcaLEu32h6SbbezvVqzwibo1xQ4KNSLxCsj",
  "key11": "R2RGW37dyMc7LkzM8RHfzWHf1RPXEZVCFx3uVDVXKTQA5VT4XS8bzsspHcHfiaMTfVNxZUk5Pk1BZALySqGAp87",
  "key12": "3q9R6g23cndUf9FLWtT5xuVFaGhLar7B7QoSeJmsNGVeZAvnSN4knvup86fsWfv4tdSze5JMBMohwhk9S8bUWBZt",
  "key13": "3xnDtSjo2rVURpfji8kgWA86PRh4DsoXuoGdH8nY6VBsMfPH9uUwnxrVNYjU7iVVgdVToAMYfsA9fzAM7UkwwduW",
  "key14": "5vCZBMb6Prky8zYgJv2WLaAyQcQbGDmwWSzTZzCqNX1JjhRY9brandCr2W3HXvMvdATAUPYJLAsxQiSKvBZQ7XZH",
  "key15": "5dVZXbhxbsSZmABC8RDr7STyBF5jfzeuAriiZi8fh1ZxAwdjLHunmv6JgcJmND7pzuwhwrvJziLdDH91DGXoX9Jb",
  "key16": "4vfynPq47dVBXJXTSdk6qaPZ4NPtdaz5JoFN8TJGtqcopv1mNSPEQFJaR47QQRbHUzp4hQcfvDQqYi8b4j2AbPY9",
  "key17": "2zbJyRZr7iouxNraVfSmszdWhp7NbRX3QJZVts2YKWBkUrh8PRLYF5J1zbSDcGMgUNgHPcGvWtmcSMSN4yy4M263",
  "key18": "JtpmEstiWgwnHN7WuNfLusgnMQJuEDJMTUchGKWiAtVzaStrzmroEeWXvC2KdPmE6N4Ywj4HT2kdRqDiSzoEues",
  "key19": "4h6Cn2duHDjdJVKPNg95AnoUtzc7eAxYx5StG4XJiUiKkhpZC6YxLb5KjTNkjURaeEYpiY5iZbKWjB4ake5Q648W",
  "key20": "49kzQMpKzRYFyFLe9qGGiaaZZ9m2TnPJYXrvvp3xrRLsjxw2nFwTZS6d9gbGPW1bhdZKqAvoNAJxvqK1KZK5Dwgz",
  "key21": "5ggebP7cb63vXhHzQAyY3fiYbSnGqW1M72QoiXvWaMniAy71DA3Ctw8UCndpdVTcDbDhxza6RzbztJUgpeUJGjSz",
  "key22": "3y6yew5pPrPBDMMp6AeCKYU3at3fJumSwgcwAbNjQ7NerAAkgLhQoiFK9N28wJ8jtRTz22a5hVtbdyRmboFiMWGz",
  "key23": "4U99WLo6d5VTd29UD1TnWjR6hYj3dPVtmbJR3BVFTdg19GM2pGzYG9T7Hwv8Kt7LVKReCTtZiuSZ9PaTBL7jNGNh",
  "key24": "4rA9Za3fNQaVxkDK15Lp5JjAkXA3joqMUScw3tJ6XLKdtZWhzCk47JwvAjzMk4CRBSGaJsH8h7mAYkJaNPSxQtCe",
  "key25": "28HixNbW4khVuWG4gKmoVsL8RbjoCSNRCAue3bnAio7QBh3pzNJusPPFBr8q6nchNKwJYvSGwZ9LmXXqUUYEht5U",
  "key26": "4ifP4G2ZLfhS4n2ZNcEi1DYizZL7PV6FxyEYcSRJUpAMLuRnnCunYDVqsZ3fZohLYGLJgT6wZarL9VFbcSQWjH2w",
  "key27": "4TTXdzdtk7FCHbkYvZ9y7bVSthM6YuAXJVaCndT4iEZEXT4SaiEdjnQSSQoeWwXX8WVvmkFZEDjoMJoGjeDNKxLj",
  "key28": "5i1mTRe748KECJVBgkKLHC2txZqhDiHnJTLUDvJEkzksYLE47wY8QAMVAGsxaMuuHZP8DzvtGg62d7najkDtKuEB",
  "key29": "2uZf5JaGagq9mu6KrusTLLVwwRM4RzQ1pPRKq983zzNLHghMr4ZwxSp9s93PZQt4NqnkCgogg5USUC44caH7tiSL",
  "key30": "3LCfxvHFoPuP9cJiRrbdwXMKsQoYZQYPHjWzjAHGQarbx17cYrKagfz2rTfy3SCdD2UR9JLPDJz8GbyZXaHEQXNU",
  "key31": "4wzna44UiPg1sD1xqbbMAKaLRAh5h9sqiVXUVgFHY1stDJvtmZR5CQiPCHjkRZNnWLmeA96YGu6qpWivMBKcgXeJ",
  "key32": "2Zv7Khk25Wedp64ChP2RUFc1YxPmoJhqbJVYJ15L51zXuPCF53tkedQM427q5TznYkJYcn8jWGXGpGbuEHgwD4zr",
  "key33": "5AVCxu2b2ZRvxHqPY9CHXziEYGn8agJ8APCGPg4Sak834sxrZfC7gAYHR2CwG9eibXNST8o7RrC1ye1dC4EsqRNi",
  "key34": "5Xtsn6ZQJ6bVi6XQGncSCKaR2NrreAVUyv97VrtaYHKmDyQSnswzwvPnh5X2QSHusThxGcg1VwjWQ6zfTrNyua89",
  "key35": "5DRgap4VAUQn8iVkF4QeUSs9Uz6pAHnnGCkP9DLt8Guoj2JbTEgcDXFVRr3dbJYmeezukpePDXoadk4W1ZR9msk7",
  "key36": "398RkUoEGfkVcaCAUEJbtEd1a1MFc4dyeiDm9X5iPzDxxWFQPqEhsxZ8PM2BND1zgHrhbNAcE6J8oRLoYtQPJwaD",
  "key37": "Qf4pDxdAezdRQ6mPgdzfKgfRvM68t9ubTCz5U7FqJ5X3F81jam5pgg8Q3ePKeAsXxihFvPeEsU6zyDLgqoSNNAC",
  "key38": "4EmExxaPKVoJAupxy1qQyKw6bpR3Rs9cSHhAhtfcBviA9FAGLXR4QhX9ipb35Jz2GNx3AaSDfwcvanMLGi65AM7N",
  "key39": "2f7QozrBmxV8RJ6GYvNFhYHbvVJtywSTtWWsYdW8PG97yqJR26A1tQYmcrtCuxHaqacmQM8V5sfmhtaUCWsarKDF",
  "key40": "2okNRoZetoR8aLQtJpMxvHWNcWCxyAih6NfFnM7adL6wUDtCFZfwHepK3ruFmh1RxHrraWprgK2W5BFdYiH8a5C8",
  "key41": "55JhEWjsWPS6Sh3iYbRkpC2c4zp1G6ARxvqgbK4iVuqvUP84Rq7eKnnfakSFATfmFfVyQrUxH6jSL4Qp4vVEAo9U",
  "key42": "3wmUauP5xSn7vHSqoXAydQeftPk759sYF444HgfQzdw1zA4rMdynP7CnAwQU5x7AqBRaUeWuFJcseYmQrup5HSVA",
  "key43": "614xyjpz5B6PZ3QYsiKnHamcJo1LkXgpFXirynEopk6wvDMbujhLhtUg39wzGGvnM18aaaZB6s8vfe2FxCJgcEK4",
  "key44": "5pSgGKHXCXAdxUdbAJYFDxp2Yxq8kjpJ6wdcYy4QvinxwCADqbEAGkKKhivesFiKBvLV1wTDdmgR9w6eZeb5Np6f",
  "key45": "BjnzUtGt5VHkRZFWMqBVxgpGk7NzmNVv22vgmiJvzN11a7FB947AdfAvU6aJL7NyxgJ8ZPCNesAb8SuZhUNMznR"
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
