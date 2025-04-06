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
    "3dzR7VGDYumywdaqQfGBSrwiCMWjnuDTajsjQYLwK7t9VYEWdcjzeoaQDBtRXH68hHvm3rS5dWWUPenPcqcERaSC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4hNcCPWn3kWfrLu9FEbeFfTW5H4aaXzxkgoeUGbvteXer2WeC3UDRb9pJd9nHZSE3AcbViPJiVEpN3LYMt89hVDh",
  "key1": "5XnSjFYGbMV5rhEeb2CtKvLkUNBfx8gusvchq3LFEoHJab1dQssSidPezDUoHPYSymuwk8Y69yCGG9ibMoHVVPKP",
  "key2": "3NMUJXEN7s6SeK9iYspj2yD3e8z3FuR81K1m97bUWxBafNpdQBQ6mmfoy6AuV6bVT7a75vKLvLjUQ5VA8J4njDBx",
  "key3": "4L8Ha9xm74bfjgq1azEe8scgLAM9S2cz3zBVM97PWytp3bDEekzuD91ccpcWVd34qe7VZPbFfB3obQNGegCSeMjf",
  "key4": "kCBuKxKcpE5nraiESG5KFvqsHXoemKR2634SGqjQnadajLt2SDe12EUoA4NtY9bxj9fNnUUE65zMYS3PHrbF8VJ",
  "key5": "5jiy2VJanXkzuXKKMZ6JcEtAEKr5WuU7hWtS7dS79aBAjZ4K77gpzZKQFEgCYxTaekTZKXDj2LMitJnzCqqU9eS7",
  "key6": "QwgUhEAEfzouMfMrUYcjdxMxtzCmi2ju4H3q4gynaivig4iadK5CxsMLjcPD5HFwufBgZaEm9BEu99pGeh2k95x",
  "key7": "5GzYyP5VUgyx45Pa1M61QQUW2M8jzdxrEVPwFrAXbB9G66eBvbCgQLCDtw3G42Y56aUVF9PQgKs12WEcmvTrFf4a",
  "key8": "48bcKN1BypJBaavGp27GMDhQq6nZAmp23XzAerE3zoQmRou2nRjq5aoDPyWiEJqjQyww9SXLnrxSoPTupyPj4QqU",
  "key9": "5GtJhpLTcWyodjutLNSigP6q2k5QDX3MDq37vcp3WJtocJcgGpSNDpuzudGvNyz911mBeHtCXrAFT9NUeLhtEA5i",
  "key10": "5BwEdUrg2rfZHHvXGtw1tASC2gtMhxAv2y3JBxEjAqZ76gjHtFderW1cnj2nSCyvpNCfKuxHdLRVVJDh8UP4Bh8",
  "key11": "5UriAbKd5bBCDUiw3wRoqamT7QbBUwnyoaRUs4BDxxCX443tJRWSKGyRgu5gCm7KZAMg6jGSVvNSYj2ByJWvqmrY",
  "key12": "64mDXcVCzWbP4pmZKQcDJdme1fghxKLrkv4JHyb9AA8NXqHouhfWrErj84Z3bwYq5PynKuzhvhWWthHpyekwe6Rk",
  "key13": "yBuEwvyFy2zY1wQwAgkkrSh4wESna6oYi9wAeMDbyxnokt38FFvtLAnpk3EkoZBLNusTh5tFatqVW64VepK22EC",
  "key14": "676CoRv45fFmzb7pHpP9gajPx1EYQwyWJWdgwfT5xjHExbVxYqyNn9eDNXBrq4oQPFJgrgruHrgv1JyDQ7jCQibk",
  "key15": "R9W1tjCN4mn65TmFuTEntFJufwztFSQbxnU1kXSum3QBVgXTW1Qq5mauw2NCqP7aPmLiixAD5NWGZovqGMV9V7v",
  "key16": "25JaCUofeuQcxDsoAurmHYupzabTf7T52Coi9H8upFZgcJaoDik9sPqr21boRd8hKGneygvFY4dxGozPH4qeTnX2",
  "key17": "2gdKadfLPRpsSz8GGiLoS55rHSDQRrdDn1ceFscooeAeqoLXv1BdD28f1bprKD8Qnhne7VS5ddqYzh8rio4XQ5Dp",
  "key18": "5bWBHbbe4kFWfYtvhRcAdnXVToGEaPd2cGtGLnjc2EeHKo8HEDcLcx8DyCZs7dfXMjR79k2C9ZRmMc8ifiSwgJuX",
  "key19": "4ASF7KDDK31WDzinxwJYgLBbx7fRCThyjuUGGpAhPC2Ljt2nSyiQFMxiMEzPAA6CDisfxHiQHG4HZjwX4JsiH58k",
  "key20": "mrjGjKqPBTYkfkZcTD17puV7SbAq4h9Ksqtwocpseq1HLpCGpzosNqXaebHG9FVNUU13DPDzUJRVCYxM6LKZwcj",
  "key21": "5No1cmekTGBTbovfD4WrU3ZM9Hai6UnF2t5Zo5zNDXvMFu5p8ha9vCUTcD3SRYfqDEJn3PuJA6Ftb9ztC6BdGG5Z",
  "key22": "5EwBiYCP6Ljvhnj9ytr64K4yuh4VPaaKvHNvnfT7vPC1snSAJCx624Uw94Uuf53QkhAFvXz6TjNtyGdvvvokYdnE",
  "key23": "4WH4z1smNxyiWVxvuSepvyzExnMfHbBvuuajQAva82BAEtWCeWJicxPLqLbi55tiRmweCk7crV1uk6A8rkhwjvdW",
  "key24": "3XsTAYZSdJynATFuV5h83rLGYX5pjkUfXrFCQgPuvmRiuFqh8SLXX576mCP1SifqmL91FbHWbKFGpGe6YeFvPyFU",
  "key25": "4mv4iV9ewQ89gn1QBrPh5rWDHyzTvx2nSu2Le9eYChdXsvVDR1aYRCg9Bd1EwEy4w9pHUDntj44GxwTzTBjWjSSq",
  "key26": "2hFr6KcUpGA4d1W39iAu51eTJNtEWxCBwiqTAWeyrLr8jLcwaAbGEdxCNSPwDbdzZFbdyH1BeunCoRiFMnrQYZFU",
  "key27": "ZF8Uko5uT4E2DgA4tGDKAm1NgThoPCodKmf8fGNYPbc6jGziUFTXrGn6Ttptn1ikna16ZCh61E3qdfU9gcnbDQE",
  "key28": "45LJy3mAyKYiUEZt85V4VLHUUL3LHrEmPLDoxmSGMwm87o6r4qRZAqocQafFBDMvmHCHbqrGDkZnaHDuG5JT9TT7",
  "key29": "4qx8NUbV2x4sxTwWqp7J84KUW3TdPJH7tgKYNG5tfzSjxdfiwZyGV79XZcm5g12anWg95GWvmEp2FSRN4KArezYo",
  "key30": "4yXWsSqvdF3yVGmVREUkcHoMGZBMgDhXRYxy217QZGEjP5S5Sk4Er4Mqk2FGi4S5BXYEE1DdpAvL5Dtym3xThQyX",
  "key31": "94wBnfLCxLCLxDoBZYerdFXabybmbDxmNxBJLaLeGRNSPFqdbdxHk38pnhDnmW1Ci3EphhyM1d4AuZdmqz6W3Xg",
  "key32": "3nvwKL1X2M5VmT33QevUWFjrrKGwzAdpuYeAsMpgQgWYZi98mXTpcpeYeS4Y1NA6y6EmVNizfVFBNpcVs8n7xsUb",
  "key33": "5wQLr5atcCNrWFjSqYb3ej7bQ2i57GT2FXQyYGiGDagYUzoWLKZmYo4tWrdVzCszTiaWEUWt1XPZus9V4F2BLtN3",
  "key34": "3bNugatkKzZJkxnTtzzYNCPC462L4QFQ6Err1fXCFkt4f9j2gNLC6i4PFHD9nXBdWMNYfbUFQHFj7yJKvaE3uxEV",
  "key35": "3Ww6ZJWeEvmnKMrNFwG3GARAzapUoGVbU7Ui5aHaYwL99R8cz826K98buzN6WwTnRNFHpoN6M9vvnvYkfNG2B2tH",
  "key36": "2tcAUQij4MyZCpoXFNAvsb3ExeQbZS53YETxcm2KDkNDojAhUTndqbSJki4t1bYZwMZUVwgBip8NTPNDnvecvdhY",
  "key37": "5zcMJDC2borbpw5aewwALNamiTTA3i7bdBEZj1rdN8UwUsyUCFVd4DE9qqQXvVXfZ3tnh9mLQQXfPr6HvU1aSxQS",
  "key38": "3RAt5YAZ1i6yUtp8MhCu4n9ZiXuoUDUWJBx4raj8fdKsV8XXxuhdbNsD2DNRCzzcyNaEg99VdoSGYnaqk5ULtvfW",
  "key39": "3Ht81S8aHW2ycEW2ZgZygfdZ5bxSHgoMfA3dUbwDQtDVBxThd4t7YxQ9NuKucxNvLUnjiTrANvfc9YoumjCJ88Jr",
  "key40": "5Uscxmdfi6rTY7Q7XHViPh3URZWTrenkdnRNxd6MuYTHY4eg5xvKXDrbQmK6aAyrHxWtU14ZqxjdpLeq4srUfkXW",
  "key41": "5WtwM892tJRPHemaejQAffpFb7WzLMYwRjg9xX8weWjvbU9T3be3iu62mXaFwMrZWvTJ3oGdt9xhrYyocu7d9aGF"
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
