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
    "2yNJ449d2LPTc6SprJu36TQFtbbpC3jWnbcQvQZ2fpJChFqsF3q75iwhh8YjKMK4xPgQdQ4yW8Cx53FkpPb3V5TE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2RTh6nFSUwKA3Q5FJvSQQbwvVFnEziraHC3kYJJM4Kek5Fq4tbZ69gyH1HYpY8sZFQjS21mnHbxTc3wbJANpAjEo",
  "key1": "4mJPX5AoCCNK37Lnji19v6mcuXmRedMyT1f5VXuHwQWrifcoMBNKcvzPV8Pf2pdqzwG9o1wKAqYyCVochB46uW23",
  "key2": "5JNns5ctBeGBcW6o7r8atRJPe7gez195ucxTuBxjVG8wkcVmnhAk2HvgkVBByeNFj5YAsYaYNrk4kr8tPe4E3sBt",
  "key3": "tpjxzfxVAgJabZ32t7gDHwdoC3w1DwvJXsA27ujtEFqVPT9CeYrANEDceqfPoakzWkHV97FqiK9fgDNhJj76ih2",
  "key4": "5Mer6Q6oWUDgdEVr4sK58XkL8iu53Q9g79or9jWyJtQr678jKdiYgRVguwJTcFLvWuejm7APq2WCQ2bKNgfY5Tn8",
  "key5": "4P7iXZGDh22kmkfqismM8aqFzpw1A7xty8t1R6npycrVig944DqyubSTFze2hFqK3VR9MHpqZtQAf7bgqg42CJnc",
  "key6": "27wj9eq7K4ub3LzhRGq8fvUjjR18n1797BfkaqmHVpxdV76vB5MKir7RN2Vf5nPgjBgWn3ziZw5n8msFE9eWCwLJ",
  "key7": "2RoQTzWyFfazHA4Fq7JonZhHqGvqLj4p8B2GyZjQsZgrBBhPxGnMvLyNLYrehQKqMDuFE8VFZr19htv736gV1fre",
  "key8": "4bcDnXxpSXdCDXLxWNCVrKPSurkBAUmrsXGeeQTkFMcWkakqBEUGZ97MhK2JS247WeDdWSHaL1Uf92ckWrGu6ank",
  "key9": "52MBjvbRYzqCTdcem4pzQWN9iqs7udKV2Z9jAR3NvSLCxjCprZ2yvrcUfe31UJh76iuubH2amdLpfoaJ7QG6yvvj",
  "key10": "4kxfZb5EddgQ6jGt72G4kXy6wzm2eUcUPA6AmunRPYK4vcubtRWictV5uR6ZkyvN3NZe6LSnNdbzpbhwVjVoieug",
  "key11": "46ZeP6S5RnumWo4C8KPnt6q15AsHVAJVkoAFK3BCmiGPzYzRL1aZwoMCwgQMrj2U4ivR9X7AT4SGwVDRwg635XS3",
  "key12": "3HqEqD1KwCK23rPwbeoWmPdMCWLLMsXiqQxRc7RBUc7rUurPCW6gzxeh95gE8QwZezMZxuyLURmVNaMhrzYfGTmg",
  "key13": "3hiRxirora9m1JCgQVwbMQu24JirrmFs8QgKZysybYKvPK4pwRMZdCZcsSuf1C57FNknNzGo2V4SNFGJ5dhPBZdb",
  "key14": "3s7N1hB24gwMXmHRXcGS82R1t8qoEsbBmfZ5v4AkTr7RzDTLQSsSR4nLNYcGdEBDpXKQ733taYoQb8pYUvTGvJc5",
  "key15": "46i54QcQduRHWMM1evucJpwbsjWb8DQxByuYYi48KUjomAbJ2ttaQ4PMvQYRJhHzVme1mFcGhjsn1X1GoDN76XPk",
  "key16": "USQMbq6jaqBvKg23XgDcintVTcZHYGX11jUunWiYirnXd3UKCqnWcNbBduKmN7o65ikiTjkLQ4SLBLeQ945fYrq",
  "key17": "3Rs9t37yPUWAQPDRmiziywLnUNSPvM8STY8uKAp9QRL3qbamDySiYKCD1ELvVMEHAT3pYJVciomVbyKN6vrYC2xc",
  "key18": "2KdbxVdvE86WsG34XwzyZ2aNPcirsXWJzRPoWMPeAtJxJ98HkcsKTPTuTweB15PqkAdPEuppFTRe7F7dURW125kd",
  "key19": "31GrEDz5V65NhG4Gd1yTAy4txt1piZeg1nqFLRpJ1usUe8PhaFq2vAtAYEDRwqWjQjkGuKt7yVecbRKcnyRURCbg",
  "key20": "3BFwUJ4t2HUC2wWJJxoA3HMBc2D5icBEeTUAQX3ruQSTsE3HtbF2Lap5NmqCN2vcPUcjGmytTh2LfdDZGVSAwTaP",
  "key21": "35yxBARTP2kCBQcxi3n27Dm7X9FofSVZ9joXnDNT98PGpAuccDFZvVFiqRfPq4gxuTMhUH7x85pWXzn8b3QEYRQL",
  "key22": "5oeTGq7FUZbXsnZJcw2UC5uw6nUrfvg17ys2nZGVdxAMTafU6fSJc7ZYjL75Ad2NgK3K9KKEjtJbZBG4YqjhjYqi",
  "key23": "3Lmr7RzgrT1bomAxtpnvy4TJHg3y7LXcczshSTUVRn8kjCLeATbNp44bGX8E54uvpSShYcbexmz9rbbnHaegPLqc",
  "key24": "2S7eP1786xxCwh39p1Seo2RNRRPgBK5AJzWoTvaqfhsQJM2inuqHrNrM5X8VKiihWFgWn6A5X36vUGVGxcbyz6zh",
  "key25": "3nQXSGzXe788f45Td9gpdHdgm6V9szVKjgP5NeKg3a6dgestrqsemEBDFoHZSFjvBYtp18QLkRjKaoG7ogcVKQoF",
  "key26": "cdU2VEUAwdRWGmrBZLfXu8pyQrDxCg9RBo92TSFcfGLReAUA2nfMak74AD1yg6GEVTedL6KM63zUneFg4WJNLM4",
  "key27": "4wTdwTkBiQzAM97CYcas2aeh9EYqkwMNz654wJTArxGzSH8oL85TuQo7rQ2fs6XwRnMqp8NYgy2WPzV3RhtLw1GL",
  "key28": "3DJHaFBQ9RVM25hDUDX9fs3AQGZwQpVaaV7qhyXZKf8sBZEi57FvTJNQ74APkV9RQPwmkMTdNmVM9cpgCaQiYx3B",
  "key29": "4tu6WLDGJ2fbiBDV5vrrieygFoHBGeKPe5CqXs1kaU1uhjGnCyEx9fxKUbAPnxebXqGR3xtCbc6SH7Q7QeDuxACv",
  "key30": "45sxGMASTjNThXnQTvu7QXRTdP6WYLUXEYTsi1j53P16eGcqr6hFpgK2aJvmE943rzaFtc3S7eo8bhbYr8ASrNC8",
  "key31": "3njkF4cH8saLD51HQ5ssiQXJAg22JNTGppdNTnxN5EGCgvTt64MLTwKcZYNJc9W1sweiiPWQYtHkiCfA6onaziaj",
  "key32": "ktU6n8H2dFcUkVbHBxe8Gsf5TAi5xUDPf566iP67tzvqdDpeAhKExZF7APyzLhB6J8XHXtbGpWEkm1dqfiCqKbE",
  "key33": "5R53hpePXnqvLqHyrghaWuGctVMSU3HyBrRTR4gGCBY7YDj3vw5UXPYPheY8Nwe5eNBxNwAyoNveR8pf1twnUfH",
  "key34": "SzpZmLLmAus5LQjcLY94mFkfKZdGQh6ac5ouancjGTh6yjVuvnWzxhszhMJ9f2wT2bAYTzFTdcuHtzbJBAmTJsE",
  "key35": "44yhasukLo5p4qHaF9zNfZpoP5vmp97MShJCiQK3hi1zK1j7QEbyVfUviJEF4WcfUMiCLGvcH92Qj5y1JBWJ3RAA",
  "key36": "3ZH5zhKVMoSeZptSJ9MWdXrRA5GsZWeKULJBHiB6Q3jvMneKxX9Vb2kpnPtAUAjYRUUhkN9ESX1aAhHKEbRcFo4L",
  "key37": "5TLd1xCaZNhD2hPPRVMiCwQ4uqtkfw4qCMyifyqgMRvH2vMWDMQuF2V61tR6zwBviRzvdpUcnPzPaz1nr4n8y3AX"
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
