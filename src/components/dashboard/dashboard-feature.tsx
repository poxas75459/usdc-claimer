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
    "2i3nHBi7sfeMTJDSLUyfj4gvRAki1DK9oNkjMJM6QPD11ohCtFEkMR64GLfKxdrbomVPuk2ZYECgsuv5s7NPHMW4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2htq4nfyCrPgT6jFNGhjNAgjmBraHPgKTfb2KW8UzGTVtZ7zVQUFT9EmJxoCHSwBWG8bMxRHLnHR9H25Te4NrmYT",
  "key1": "2PziNtHmpcnnCHa4Ngqr5yMttfph6HPC86pUwq3yJ1uaV77hNmWUephhK9CyGZfQoic3YTEBcSXAro7JLirZrJWN",
  "key2": "31Pm4ayJBzqEoVRKGzUohGTPvTUFNPt3JUckSpzK6ZPenrqR3cs5okp9qm8JthqGpUUoYQVBNJrmjSSwGneSTzRF",
  "key3": "37zRLa1sJAd1PsxXBd5twou1wRwekUe1vrPp24KEWjwmGMnH52oyDUg5qHXerFrgmnXveMeJ8aakcHX6Euqhzkz4",
  "key4": "5Faw7Y4NYShje9mmJFZd8neJJdBM7nTayh59B2BidBeAkB9Jy3kQKzqxr575YdAG29LwryZMGXEUZxByZzu4iAUw",
  "key5": "52aQMsewxWdVvTcuPqwN4tz7zeBmHix4JPnihjLDcajrCCNRsVHmVcK5wfry2SWdXgHHLqeEXFdSRcrEZqDdcxdW",
  "key6": "4GMWMgcKzG6RuLJAKEFxxDQ7gBmqwMHDz4WtKgZUvDLS4noz24xgDavYVuVHHdukxgimDw47iWFyQpBjKYKi5WWt",
  "key7": "34xLns79re8VqDuW3fLBcYnUCD1tCmBv2mN9R5RqTNSu6nW4URmvRpHvSzg4u3Z4EuSSX6KLQfszPdKkK4s6P795",
  "key8": "4Jp29QBNoXT8Jjd9ezHPzf5mAYGtuiW43zmVcQjTnXeEmNAXtvX4DuaGBVgUXAvZxAqN6genhyHU18AvhydAG5KQ",
  "key9": "2B4qzaqJ9RN7kYWw2oRsmSRgVQeXK6Z3amy8av8Hw5BrPVPAW7mSF1cZiWFg8QmHBHFNvRkuUwNMjWLXJqDz8x3n",
  "key10": "LdMCz4we1q24QpC9DthUn9bLtw7dmWdDHsY7K3PNnLc8w9cFseogjTNKYuourBZaXzEwsTsHVony5gdqXcR9xqn",
  "key11": "2DWsbxwDxieCrRqfe868WnJBGM3BhCTZ7FxQ4re4EqNeoo2WTesvmQT4MXF6DGj27BA6ik9e8gJvFn4EPDdud22g",
  "key12": "5JaEP5vGUQNfGyy2v4r7km9SpJkg6GjsNqAePjWU2hVEfXofTo5uRkyxLRZPtPbVPC5shdyqZPF19wN8Ccf5dNQP",
  "key13": "2emzQeSrP6qpcwM1roLwPmF3dgF5Tq9mSPGoCsMWvmYvBtpa9eztPchk1VjEhbuTHK2KJH7jjD8LveL6GPvZzmTD",
  "key14": "62osgSbnHH8ik9sZbtHdBarUKuCQAg5EUkFT8fbYwzkvbWohCroRFE3MXzniJg4RFpGCHvK4iMdxf2qyQ1KnuSGv",
  "key15": "2GVYJ8SQJE63mYiQU9V7vyFYMnXbnWuaMcMLiJ8xcrJAbFwRVeDd3H1c2fTf4HU5xCJ2eaVxxctW9ig92coUEKES",
  "key16": "tCePVys153Jcu2UPNwjmqPjvdUYbtRz1z3jwYHfxJAqdFoKXBmLcKWqS4fs2AKw7QDeknPpUg51Z9jxemscjzRG",
  "key17": "5hnN1smp2y4zucZUbuKWfYQC8EJxoMyegZSc1V6SdTLEwVi14kbvRRgGqRp3h4Ajo8kxVYGrN8gdmkn6H1116guP",
  "key18": "49vtmy4eTBQHorVpfKJnTehhuFJhoKy9pxfWKp7da1TW4D34PdW1CtRnPBrPPammHM8rU6P3zHaCGWZetzCWmgWw",
  "key19": "4xS6sox2MtZHDQrkhomHszn5u6Lamk1DEx4fYGL5SqjHigmwvdwUy7m1QJCSyk4tfjtqeqwffVUZvLBd8eivW5UU",
  "key20": "3hnhhDJ1d7QHXrVcVzMqy5pn8wDt1Di8SnjmKFpvFKJcam5fxARhopZ4WRcfcNVap4DwRDE3AkUaJ22obPPm5Swn",
  "key21": "SZExDFZNAug1guYHt4TfyvE7MNidnytxMHtYErMGPACHrQZAp4UmXGmuNNEHP1EjLK8JAw3fkohKvX8Wo2qxDHq",
  "key22": "2uMirxQNXEQwQ3oH3d2dCik81AELrw5sGFdWfPjZKappPPbZfNP4uYqYqRsn9kBiUpc7TE4YrXno9i8FKZ7w23X3",
  "key23": "4Zzf2iC3nyyNF84J7n6my7o6fR2M6XC8J9ndyjfPMKf5DUpM6pm7bB1cfVXRwYwKPDtxBmu4sVjrdwCR2vWSw8TQ",
  "key24": "5nB8vkmvCwzYfFGpy3Zm3N4EBMpN1wcGttTPNj3CKXNNMAuqXD5YGt49UMW6FB3LhW7AeAeUYVzH1Z3yiJybbREV",
  "key25": "S3ZX25WZ8p5s1gFAc5Tf4LJCqgi9Zw8k79AR6iiSq63PguLTmFrnuBgsPYCXoFGxx2RaKUaL8cRt6WnbMUKznJL",
  "key26": "4Ea3QBJPNxvUAN7Cy6tB1b3UKDKtFpY3qQiisPnoDpm5YeEFw2CwSQ7uMNXbuzWo7D9DuhGnbBo2yNydiH1i8BjK",
  "key27": "2E1r6WGL3sknxHo85E7EvAxtbaeBsibHwdAdL4Tr63fPTKzH7D7cM5nWcRRBmfubowhvkcY4LnXyYf24n1MxNrEn",
  "key28": "24BdAVL7C9nNYn6iQ9LpEtC2DXj89au6eiRrN2JHo5R6nDZWexmnSWF6Jn1CRkrBm4EdB2AvMDbpzQHxAmSFDprb",
  "key29": "3HCsLj7YdqBqi7BfatBetbty6wfNv4sJQVNCZZaSNfsmv8D85YsLWVUxB8H1U1rbdH8ZnwV4ELpEvLhCBUCV4Fs2",
  "key30": "2LpdevwERQH1EDujytpqvG1oaJnpLdtrzYouxqrL2o5MjcFVwxkmkL8BZSUMaTzUE37RCQbwEzCPekWBo6pSfRSR",
  "key31": "5ZKf6YR5FE3zRpYtH4HZUuZSGvNCe64QWq8Chk82di9X3ro5JDW8aPyvQfQxywLEKVRYNHNMELGZiEbHDvp5XZ1B",
  "key32": "3fRsjk9nFpxVAxHBKcofmUUDR1HvTPof5AV4bPRkER5jsw8Uj4qjEb26SK5rw6Go2YSD2CtDcaXEQHHjMdcBWKVd",
  "key33": "4qR1m4rPAqRLuidk2ZcMrGCYmtekjuwfWRQvfAbWb65ZjNzJftwrWGrWJgGesHDy6BAi3AgvyV2toqDf3ohgtxhj",
  "key34": "3Yf44aydxbfS5PCMAozv5wcEomSu78TMvY8FGonMoMmF7tWqw8qGrShngNnabnjDngiVD1bURzWkpzfy9d1y7t6s",
  "key35": "3K94UEJ14iqB6psf23CT9kdLTUtbKoAhLeuNkU7ZURpBnNkdM7YhogD6JX6KuRxEivZpW9piPLktHjxdEn5gWyzd",
  "key36": "2EGtjetGLhgYTHYH9p1J8jmCvFtGb5U6riFLxcYiVym4Y5KX3Dp9zZo3y9qFnavaTtY2N3zPpUuprN3QzWvzDPB7",
  "key37": "4Cqyx4r74BVPye3mBN9GdMBGsfsfM22Qo75A5DUiUfP9v5bsptA3QpChukP3LpJnB6WqoWeMnDRT1rqMSpcxUPqJ",
  "key38": "48qP81Nm5cQKFpLnSBB1nW1WFDM9qzuBmiLyxykKsvBLUvxMLkGYfdykgeT8TqEYbxThMyEsi7xJiA2T7JzLiiSf",
  "key39": "4HNietStnj1PEmYxzrjjfybqjrb7Nb1mdkgLWJnCRdR13VLddscFe11oVuyK3eyBevuUptByCG25sTKubVBUjJDX",
  "key40": "5bhrsZB8mA5iLXAD6HtjcSJihHnySjV9h6ZaGrDDcWqFLsidVKXjbz4y9NH1WHTUi5v7vXRbuiYe5Bm3ywZSxCcR",
  "key41": "24tu6bJanYpp3gcGvKEVkx31hnoS8yX1kzFmKHdSdtBBQmL93e8MAFGpw43qz98TCvQ4KzFxVpXtzXcYrE9jjZW7",
  "key42": "hCpDHvWB6bwou3VLYn632D7GLViYnAqbXd8P97YW97GEnna5g8t7qiqiEPbPFb43FnxGGZMAycGkfwwQtfa9Dz9"
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
