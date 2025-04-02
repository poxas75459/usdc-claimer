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
    "2EPQvdykvd5WFuniNrkSxXe4q53fASYCeJtLiSKhWZLs9pX3JUMxxbuZBYfs4ByfcjGxph9FdH7enfmYYGEdAC8M"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Fh4uPT37anNGAECF1rpAgf5VK2FLDauBzQ5ELmsysV9FnHENEzihjyfGSi7fmtRkRREEHZm4NDS8uGFSAyoXbwX",
  "key1": "4KhKNzmCGfrJ2PLn423cMueeaxDpo4DtYDeFyDYRcZRt5f6hrXFEqUBGKntvHGjfbLD9EqdKJZdjiwQR2nAgv6NN",
  "key2": "5J6XS6Nj6f95uNhcPtSosED2TfLCGFseLc3aJWiVbXc6qYMFEaxgBCZjSh5rjq44M3YqFozQYMxa5brwAdh8222n",
  "key3": "SDMWbKjPXaZstGmFjKYW1nAeVXAMLj81NLSJ5xYDK487FYdStVxfSwtNoBHGj6ZTeNp8wjKhZqmrEFhLZoyHgAT",
  "key4": "5aJ6x7BFRnGfgGBQrrPFgirjyhoV1zEP4KfNwLuk4YK6SbzW3D5kKijo6uUkqBaKQB8PMnp72eBNnTxwGigR9HyE",
  "key5": "3N3zk7X2s78691GnvSWSddViobD2XmSoHQsWWx5ggg4V8PcxNYLipnMQfdcyFvKiWUGFt41wqhqM3LcX4R6LuDsa",
  "key6": "4bXQhQMU2urHU8AXNUj2fjfVXB4ewjMRVqVYrRaSP2UAYGCGMatv5E3XFCXkUgeanhEcdwCwS4JVn9adb9YjcMrF",
  "key7": "teWxbJNEASEa53yVnZUJBNnK31E3zamCayVpbvDMNMq1c51E8UtwWpgercfPj34Yj6SYiLxx3wET7onrVK3eL4Z",
  "key8": "4RuxdEyzm7VdhzVai1i1Q13aVdSJbeJkUSBdZAmZNQRqb5kgTsgyFAXcYpiaHMHVchcveRnzvLLoaj6MdhnmxihV",
  "key9": "2QNxiGpRW9jFeuKPuG6PZuavZk8G5VBModNAsZBykrRgu2ycNvH4eZwUMqtsSoV9C3cDSogiazrHBuryk5WbtE6K",
  "key10": "5QCR6UoFyBAAL73a4Dm46tCosuoVRW7PuMmVi2NPT89d7QtwZjQ5zGtThiu61NmGQvWqYupv9voAF2bk5A5vBCDw",
  "key11": "7whqV99mDL5UNDFggxcRHKzhp8q3YSuB5jFr73Y8JNZd6TQxwJVA9xz5jf8onGEKSydr854yTgCey9Mgan4sNfY",
  "key12": "4QM68BijthuvCKJub41C37FvpfChZYr9KUxLVWJeeVEWLd3EuFpJfsXaUNWFaMFeHohEJmVntLnLBsvaqg7jUWb3",
  "key13": "Z9TZrVxd6TMwoiZsUr1jQLFG9VKz76khLY3PtCxLKFYzkYfuMXf5jsryQVD1aiqjjzeggvnWYiycNaB4xqFMBU3",
  "key14": "2XcRoidRm9nDhXs8xVb9zcW4KWkNSczy4L9xAPCLtNTEzvvmqwWwYKRtHL8y9napX73dRKWxcgodMizYGwB3vwmt",
  "key15": "wMYPAZteoTSjz4BwKZH48NPJphy9QftVztJPb4CSCmq9fxBoEEUJVrj7mpeJm7JW2LVmS2RQqTdiHh6mFos9Vk7",
  "key16": "LtSx7fnxdnmTFhfrgYDPqCDd6SG6ii8rqL7VKC82TcFFcYZZsPdsfdG1RC8epzSbBQv4mFhKDMdRRsBWKygQprt",
  "key17": "2AtJP1GwaP3qF8WoLppCmvPseXYDXksvkabtEPb2vTbD3vgTsFgTtQAMhi2gp1dk4z2R25cyFmQRjf1BszC7hzbh",
  "key18": "jQmyhia3MELdi52JZdHiKNhnwTzoADbRtNc75VLqRtxBWtCV4kfbQbTUh3bezeN3Mr6qELaD5mfb6KNzJXcBjxy",
  "key19": "3gpJHCU7MPnMLyQ1M95oXJZgMxXCWzuku2j1hp6kEeKt91v3GkUx1TjLzmE1eceaJ796G1Q7BjidBRMo4N5QPMAp",
  "key20": "LPFRTsSu6r985MNZYyEkNpJuAGvk3QUdVqF3rjfRFiYLs2jL4TwECDbntYs8nXwSoy67gGYrdoY6JrCHichBqmi",
  "key21": "2yMrWEvnyqFwSJBxjoeZsejG5SqFZKyupz1h3WgudJtk6ThP5iadbgPJUPdRwFX5eXnCQyj1WBXkHBc1H2xrPU9Q",
  "key22": "2EpdLVaX2T5Q83JdNyqE4tgnyg4g1v4fBDoSMDa79LoDJg5evkgk6CWJqh1wgUqJbzUGerKekYFHneo9DQst6V2g",
  "key23": "42A4BhJt7k2VX3QfU8pAKZZPUDeGrsnpabXt52gMeEBbZuYdSqmBVqVdKGxcnqB1Wq5VriLezCjt1qw1RYvxfvVT",
  "key24": "2w4er1a4y4ffXaS9PLjgYDHpHjqoLEYwYjGt52dc5Apoi4MZoQ9SZYCUe8CtUFAMgB4ZwqA1aguXvLcrWCMcMaTG",
  "key25": "2HUTUjPmu5MvEwwRR7Li3Z452RdzejwcGJmfjvT3MKtpnqcUDCSnUMYKN5qttoH4xnD4kdJKMUJAhWMsJPn22f9o",
  "key26": "31Uhrm8XtCze6UReXUn1h3XwtVXVhav25soTrBPqBG9wDfdXxNwiSmnNuNV984k5ahyqubAQq5Bnc1XdNqsDY9c3",
  "key27": "2zEzcd9MkjwkVvcLDqQHBJqkNMYagAW7B1gM36TFho1MSjxEuJAZmARWMiCdPXDpNWvwQgx9y3BAHooNKXJGHTGc",
  "key28": "5Yi6szqXfcEWu9RYAgKMoxTEnArAcv4oZg7vkdvANsZkSYTA744NKiKxPm12i7KTyb4pRCgR1FrPtBxxMwUjnQc1",
  "key29": "2GQVTxByQhA5z51Y2JWA3u93mZcXkm18E4o58gh7GMxN3PFFMLmWYRNTMMGZEjCyQn3DYWs6NnrT1QHKxDj4mb9e",
  "key30": "3qXofoeNoDSFw6Bk3nuZ2Xc6t3PvqS9iq5Ljmh6vKZJk9uPsyFP5cJbVNj8L3izxdcmLcJxCEe4ckFLPeYyKJQEm",
  "key31": "2QPofSRFrQS8rRp3Xb5nSpPhavnmw1NK3FTz5FkJbasGguGnN1yRKBuCrP86Y6rzQMb9nr8DgJPW99pvtJ6q9njS",
  "key32": "3kjPGg4XCnvCcr6awBUUDufCZWoFevm57ZP7KcFPNTwRLBaQ51amJ1jPRg9UQ2upAxAGtKxkdyK3cgqaMixBmE4G",
  "key33": "5erZLbrXzFUETtGrm9nTfa6yt52g8gP9gemM3ZWR7xfwjmxcDu61Ynh9Ey9QHGcWXxMahaXTh7iCgDv2akvpzYGc",
  "key34": "3usERKxEGkLUjavSPpubhXg78TDYquga6DQuTmUNKaK9cuv75BdJvwk2FbNRYpch2WEa2Rr8AodTAEVCkBE92n4k",
  "key35": "2vm8UH4Y71b6HWjMdXEJk5eXLb5jdFFxsxknmGhwxBbnS2XexPoXkMQUBD5Nh2LqeMnKaRTRaUHget6ojZdefe6h",
  "key36": "56fGQMgPWCdhimcsACsPAEFa4joWuRw78sbUT7KkjvrfLe1xXFt3MsnaK5UttdPW1T1e1FvekyfyWeH84xhKTGmA",
  "key37": "oaK5E6qam9QmtHnozeQQbKfeM4NhnRJoavAHPHvrsSHmetpqdyyPqJDjax3aJdNeNBeKeiGmAFDS5y3bzvhVZps",
  "key38": "4gLiHYjU7K8UjDWT7XU8CW7NGnw7En4PeHqVzByL12Mih74rfpUZZQSHMcKFbp2PXZB1wBCoohtTfUkjffv6FZDq",
  "key39": "3mphx7cWSJ3bbG91E7Rhd6riwoWNhAdakhQaUyxXJS2ZKTY4deQSweY4rEfNPGBn5keFWesE1tjEP4uVZHeEyMN8",
  "key40": "2B9TxPJ6nDK3Trk3DHrq9nV6gcPBAGhiDwUDHh4SxFAQ72DS7HVqvWXgzS4ojWSK2UzmDAQ1emof8WivD9cNHPUm"
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
