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
    "4S2FA73eiPGkpiha2FKRSHgwrSgZBDwXdD3PKv4nX484EEk7wJVtLfqyaf9JXbKHNutkh7N1thVMQEEY587iNUxi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xViQ9iSe1oFMKBg5D4GpDoiXzptsNgSsZwzKf9U5wLCUQkuc7di7QM8KbHNxQRUD2MatW6KTEhHWtJ3okvBefdy",
  "key1": "4FeZec6LQ7HVkRerpDHHZjnmT3MS9VsxBkXbn6PDTGxEfTYTqtX89zU7cvRie56UBwUtj2YWuLytRo9UVU58SQB",
  "key2": "4R26wZtRjkExMV21ssRGWLYAM3pzLP3b1DUUSmWfPCquVwtmFJ3so6oQuherjVEmXGXgY4i5c694ANMEZ8PVnNXm",
  "key3": "4yKjYgj3gwHgQRcHmYtHywHGyD8AiA7K17v3gHNwgNR7B36dX7BkX84DPgN643QcBJN7gcB7i8F9K7YNkM2o5fJn",
  "key4": "62LJKDzmLp8x2ESc4hqu1F9Wk7afkidN4o2wRjndekCQmkF7KicNWNyR1xc56Mo7sdkYVkgEvdmT3ccPD37u1z9t",
  "key5": "4cb6fzQyNXBQhzQqVQbK8K2hM4vvhhK85rovrci5FzN5dh2Y5x5NRJn4w8kDDUjrPQgBbsuVxS3scL7wB5iefGjC",
  "key6": "66whC2cCMjCrsnTAa68HSxVpvsJwkFcwGCQVzFyZ7ZDDDSJzDK3rpyHZshEjnX15qPvuUZ2FLg4jeSndL1ZzLFo4",
  "key7": "5nGL3N94kRvL1N5L4zr3BFN2Miwv236GGWDU8Chcib6c1BzVHzcJA9K12RoQCFB6wPCAxudHQ62otq5BtgxNwnyS",
  "key8": "2RxdcD7awgAHWGWWaDuTB9d5Pch1ZvCNxgBDUFmjyxKE54wXQo82ZvUP9XnaRi5ULddVfPz1QSwuR1m1TgxpUmUz",
  "key9": "5hvh8xQhXw6E2poHhoJUHxVKRWCv5omkuP6bvzMyrMF6tA7mSe2Pq8JrJdFjGkDDQDEf89ZYP5JNMsrNJK3hokBP",
  "key10": "2NirwG4W2LvWr4A5B4KzpsaVbXWW4LZXVVprG4bB8WbMVtixmmkQpVkbht9AcnrCQwZZ5s2zHyBbARX2A3g9vvGL",
  "key11": "2cXHHcC1kKBBp3ukLzuJhWf6zgaNmbDXiXHte7MH5TtRyho8F6pTGSzpR1C6pygncRbVN7sKem4KpuHEpQ1ekiLt",
  "key12": "52Xp7MyeMEuFYXiTk1L22ovsbvaRyeLmXA3zTgmUEGWcQuNiK99t2BPH6FcfTBmi5KUTerzdFQUnvqDPC3K5bWW3",
  "key13": "2vdTpEFgg5HVv5PHXLQZ83S1puK8pobxPpz3CwXvtSKsp2EBaaZGr2ZRFV5TTZquCUts7ybAD4PyGViayJD9xM1e",
  "key14": "5UcsBRjP6xRQM5eFkBjS8SHdvWkMkrv9ByHhU4mHLwm8Z8itoWoitGMDuX96Dvkdqo53wmSxKQHbQkzsy4nGaa7b",
  "key15": "4WgLGL7kwTJNSHMrryt4926up2YmAWP8MKA4PzW9ChRpbuVCuqrHo5sNXMUwzJKkah7wzkpeamghrqFWLPYUm3Bk",
  "key16": "4xTaCMR23apzEFyKVHL5nTBQr4UjzBunwdpVQXmPiCbBNw1Nr4Eh1jgSxPpJhK8ak8j2vSy8RN3rHkYU3XeWSKEF",
  "key17": "4y9k2d7MW6fQizeFxaACAvnbGE7YUcy81Ceoi3N4f8L5v4U6YQDd174H5JTTvUwRYnFTSxiwi3zcFC4VJJNUtzZw",
  "key18": "3wHAFPjrWBFksJyPZKWoNDwjeaRanzEsbJSgwcTHoEgAaP8mbtzB9FHjgJJhvH5NZXP8G1P7brGACTX2EdzXH6c1",
  "key19": "3WYBWwUdJPhUMiknSke9CXFTZxk7yoRs2v3YYX3JKSJFWXxb3YsKPL7NTpvNxRXXyaMXfjP5GcRLHPJ33EdqGYRN",
  "key20": "22jWkYGjiPASTSwXJoTSthJ7QrcYHCAk5G5AbFmxzjAZ46i99hy1Mq5cnqnipEeYgxuAfnEw41usNRkdBgDfsF7v",
  "key21": "3GTgfP2BvZUZd9TvLLPaceMuYJ9Qa3Y4EyJ447VXseGrn95AcZsYRj5BXfNHQSw2NZ5SPeQv9J312d9cWZUKs1Bd",
  "key22": "PHjaRSmTjsJmpYTMGFCLSAbrhZysmLikE7CcvuxYZpbSCdW2FwgCBc5vdhuBsxkyTPggdtoxTsxiXJoatKzWWNw",
  "key23": "3JtFfuCyT53HdjAdoN6vif9ATBQXErFkxQspJbZB7UVsrL5qGy9QHtBdkVqU561Sup8ACXCbNKXNS1z7i8E9zUUP",
  "key24": "QVuJ9RdC5ZFsWU6G4uxESzgQXNoPTSFPsPDvX8sBgcaCsbRLRj4XQnsKWr8XSDzTB9Mirpur1EBnJZpcvZ5rM9j",
  "key25": "2QTiFbq23aErXPjFWLJcGVz3kjYjVH9vpMii4UWyjEoeHUJAfHu5TswUb3g7zDAt49ZPakg8F42vAX6MqcPUcK5g",
  "key26": "4ZmYU1KN2U2n3ogMdpGMfrLw2decwWUXSEVo2AqKAjH32kTix4qZpeyEeM7ipApEMGo5nTn7wJygPCisy9R81Zwg",
  "key27": "cMw8bKDsph6aQir9xBRqwnvDDYLJxsK94ATntJLT4gLu7UAGB56gEwE1yGppsZn2hSaLTJvSobvvugZ2bjSDnGe",
  "key28": "payzczSi7eXhhLGj8U9Cjy2rfiPqmu3nck5oQwqPLcHH9trB8PbXrB27Jyd2sy7XuXymY8VEjST6ChDkWrasHaa",
  "key29": "6UqfgnxHrnAQnfTCMLiPUdLgx2xVXzjZ55F4d93UZ6t4T4DPbXr9HSdsWrngvR5S21YW8T7zRmWyacXBjSwM6db",
  "key30": "3rXPEDaA1XnCD1JhzYCXQ9hButTXCwu1vNqYP8Da5wtt12gfLWre9Ps9Xa3fsjZvwL3edQjT2U1NEUpB3MvC4b97",
  "key31": "3cB2peNrzxqcXPmMhdmefzJANDTHHUAXCiyBwP88GsLy5z58Hnk8jW55pV3qypjSj76GMfSvC7Ptxs3LyvgL3Edb",
  "key32": "2mRm4d25bh2q96WSs6SocU8vh2T6RU8nY8b4w9iPoX8kaP6ShroV2Sge78GC6puijZkzKviGPSs4TEZCHDKQhAzj",
  "key33": "2ABhr97wJU6PfNGWCxvtHTQxiJWHUz6LTHLSXceCnmCDn2iaQvFoUvDTSmcnf3EJvK5Lm51222B69BZRucqpVi7w",
  "key34": "487ZN7Bhv9VjiyQYp4h1XLSeArtfowF71N36e3De75dg6EQd5f19KDjU42bzoPvKT3g3pxuyVz7PRueMV4x1Cv6x",
  "key35": "4WJwwxnkC23sNGCaMYnxUYWvovTkw1azuLeKPfqJgRUnGEGoh69Dbj7Sp5wY3X4VK5oYSdsasrgNaoLi4BNSXgGi",
  "key36": "38xdtkgheQxGnPxUhTgfywMnxH4KgfFP1nbBf31CQ5TRvVnL68V3y7AfY7bd69G7rJQ7TweXu8wAytHmAX5T8ddc",
  "key37": "rZWP3v6B1hbYrxJhqkMMYYWvohjBmdqMucxDWfkJfVFaFnR73xoWwzLXZWtRgh2vMCxbwEkRRobAXcnEGVoAAom",
  "key38": "5u5DNRVwnb1XB9PsviHQ1mYsQdxiDjGzXarhquqC1Gyu8ZxWTNm5UVzG9i2ZWwAQdLissiiv8XmPJg1QriMjBwa2",
  "key39": "3haC8DLxYh9WyGwkraKrwcQWRoojPbCrwXjpJccePrP2q6461jQEmrvH8pVqhJwZAqQ89Li2UaGUQeCQ9chFji9q",
  "key40": "4BRV2HxDDTyFaH97wS5oG8zEpSRWNQPsB386oABaqpiwttWZUodsSbbTYFoGUPbbZStqfkwhqkXAMqi7vb3pp8r2",
  "key41": "sBstAhSwDDaPuijSyH9qQHLrjoZpGVjrGeBnFUyHith1j11urjAj3yXbYzd4vXdGT5c9g3574Gbx4mRMuzmdbdb",
  "key42": "2cQeJkFVJzMCaehYbibYTvmPdHPdMcYefpEhZbYp8ndX9rT3puthgfnQULrzpCMkFUMwjCUFViXo3UbrtNTCC6ci",
  "key43": "5hQxd9YiCd3oeuiidGLhPpwweiVmgjP8bk1Ypadc5MybAZWdWbLZsph44vuuyNZCNAbLYVuQifnPg6d4JLmv41G8",
  "key44": "2ZQs6SNM2J9pdHs7DSgp7eH1b5wQTeRKYQvVboEbpZ57wpoDP5bKk5TXdwVrxbicZddNtVveFDAJpwS6byBpH7PS",
  "key45": "613VNvvv9vW3KzuyhTaZG72LJWECTG7o2X353opL4tZAUqvYo5GU1nDJGiHQWYmLq3XNiKyCmQ6bp84ndHgMKyVz",
  "key46": "4ZnB9WRjZgBsr1mDUg7Q4qSeAzZ3zhkD7DYqwNdrXyL3vHJAtccD3CYoGFBaB5gCPYBuAzKXteT86nz6Ev3zv4F8",
  "key47": "52LuU3pmXaUfhZXF4pf4Vbii3ioZTS8KhoKy9nUGPfhHaVJryBm5EL5WvnwTXUzbPvcND7XZS4HnVgPnVja9J95N",
  "key48": "3xEemKzsWbDu3HAC5yh2UVUentZmP6hX8CkM3CvyQ2i2iSgNVsz2ECrUb4ZLRy8B7qoRkST5Dbgf4gL7gCs4Fw58"
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
