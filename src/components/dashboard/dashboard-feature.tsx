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
    "2ep6tdfhgQySYBMTBARrCMmfZaKhneS9RDW2ufvMhcGKToMA2HSzbP95FTHpQg1chMKw6pmDCCDh1FzZ7drJ6rp3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Ec6dYzc3GQQeNuw3pW47ta1rULeyAYKfmdAh764GLUa44GaJvQbJhNsoJQ5EzCWSWPmVn2MLVbXx2SwnMbEqE5K",
  "key1": "5dURZHBegZ45ntopKmcfbTCcGCvjTykPhfdfeGoJBjVuZuUPDf5NmBqjtngWdA4e1SmCkAPRmgywPQojfkjYZFiq",
  "key2": "5EqaNBEnG2Fpf6Enc93hxE85pXMrAqD61v8HQWnXLwKvqR31EcBy8PDskKsnzMU5L7WUsbzJwNk1RTox7oJ9B31y",
  "key3": "3EpnevVCFL5NSAxvbqxHVRYLNzUd8w7N3pSAFrwT7boEqVQ1axnRZg99jqhM51ECHJtiicW6fPeKBvqES3gA25DD",
  "key4": "3wQm3S3muTxaBpar6fBRn4qDDCWb3uoCjAjpTnegSTwwmMhsiiVRPpxPMA1U497itQDUW1JGad8gpvXnPMEaK2nm",
  "key5": "3yQRCnF9xKiQuuBTa8gzpytCE4jw9Q3LoepuEm6bRRpWQCfTjQQ6qF1Rv3k9UTAXcMNiX1y8f34KBwQCy41TQfpV",
  "key6": "3Fdv5wQFKV2UiMKPvMQkHWo4orf7SjLo9BopGQzFTLDLNv7KpdDLFTSFtg8HPQC7Gs9S11a9JpbbysAJQQpyBgpF",
  "key7": "5mTv2qui6T1iMtk743MwfmjtoFa8bVMdbC4YH2L8redq9ybBRvotm6hNLrvHbAGDggBECRYMcXoraHyeSJHBdiVo",
  "key8": "4ZXZZPirbivBwWD6LZcTzmistLPzbVc1euLQMY1MUrkiFx2RW6b5baDoiognaX29tWEbepLPikeWNQcNfihi8Z4V",
  "key9": "5KpjXXt8cGRj155EoKbPzi85NC5KvaYWNNCzPkqGuESKT9UnVgEDbs9WAQsJS8xkv5jgE8XheHRwzALZezQs7qyA",
  "key10": "5u6vL1EsCTYurHDGLddRVQzWmNCbMJqbAUepgemTPTDod25ZWxrPEezKUdKtS4v7jcfLNp4FUio7PnRq6Dmwokrf",
  "key11": "57kRmqBuY13gyUAQHUGnE2SMPqFd7utVSxPGDMdUxW6FgNJswtpu9rMMnAbiujY4y2qRfA3zupuUoGPnBtJA1fuy",
  "key12": "23xjNwX1dTR7o5QoJEc2kPXiSdLf8xNvApxsx1rikLY1MRfLT63dPTa66oUZfgzszpnPhSLALPpqkTKrDBCGVsrM",
  "key13": "5sr5FJDyCYXUg5TNMK2QiJyAwkmTmEWbZPCguaSMBQ3KWMTW8UzHcuDoXpAm8eyGbukrLTJZYgwnYuNBoqXjpxcK",
  "key14": "2bkPKGCfsH8mAegf9rhxMRprzFitcrowHW5CQTxNMEsF9yMJiV8i9LQAPJy8YMgiRb4tHfJq3tBxfqvAJQBiKYEy",
  "key15": "4yATDtFTDzG8mFPbcky42k7bNMbhwYE9hB5PhoqMYZgooC5oq1WjC5Lkq4upRdECcwX2aAB3MrvpJWnTret5ds2",
  "key16": "3nBbug6rncpZcReCAEK2tTZaAKJLAu8KxPAN8d5SXGvrG6tSvh6wt9na4V9LBg3cPRYAavMRLXjdggjrqcz2Zwmv",
  "key17": "3Fw7oJYUFJDhTvrgcq9UE2KbcMMXN6tydDetwGwBKGsqzA4z5u5rDXShpRqF4djjEnGqJYLrttQ3P21UmY18UmaY",
  "key18": "fupiBrUM37nK2wVkJ2txhXM7AWVyYe5w1VZybx7ajFNLCEfEWYdCrWEoqYxYMvvV8sdpYQ8MKELkfW8bVXgpbCb",
  "key19": "5YLhkR2eGwPEh4dWQJEkvjH91BjhoZoN8chm9nQXhSziFbGpRZPZ9yX9LZGQ1jehZ6qi5nf1CMKsg17YgopFoag3",
  "key20": "4BCe4eRkWJtz9PGHj1wjniwuPZPb2DCeY8tzmaBEFx93Hzn9mBLUj9Lm3JnXHVHrUwWMZ6sAw53fVASQBfmaAjn7",
  "key21": "o2AKU462m4M3ESV72tJgpWPFBqqSjaueMofnFH8p2MAiFCk3gZqHqU8SLzHkf8LapYc1Nh2fkyHcMhqu1smCrYv",
  "key22": "58zWnyCbfgRvqUZxi6F6Jt5wkAgqfrEBc3d4WkfWLDmTmGiyBWE64sW1nsiw4qz5RXzn9TfXS9rNEKC25jaNo6Nu",
  "key23": "4NVKNGUd1qurf7X7NhtBdoQtDZfWER4LGfgHvRUY5kRfAPHGwSneRhZ7L4WrXWnJHebBsnyo75MZAc6oTdHPHSxT",
  "key24": "2LWJ1DeeUHJQghco9fZKjyVUqTXjm8NYJq9pa56z34VKDytCsMeEqPfUDG3fCjqig26Wq6UNdXdoUQPg56btkYpY",
  "key25": "5MoSNDSuyBWkxje3L4YjcQ7k14SqDsT5ERSXFpobMTbYU5kCVo8yXpzayqfSg7xUMWqXZB4TiLvvjswmD2jsdFF3",
  "key26": "3N4UFRgPiWqHzd792i6YAaFARzpf99ckVtkKv2oU9CpHdhxKdC2q7S3BkQd65yAzPxrYEJzwDxbyrGSH543R7fRH",
  "key27": "T2G1zhSnd5nGqozF1DvbXhBBErs87Lr85ajo3yq9TrtWfdGpXmAVqqVfYWifGYyAWzWBamPumhGZ63VNqjuuLLB",
  "key28": "64HxUcgqVhEDdR7LBqbLxDo5DpJ6Na4RRNkEWXQD1NjvZLZGRjDv2ETArRDFSKjLQh3kAosEtSVc5ap8GheY8DSW",
  "key29": "4pAPrMvbfXVkyLrWnoKV31waw2aKnG3gJywycpJxFfoe9xL26f6bAXKqqPrcXf8YarGHfX5YXqqJX57cFKseRpjY",
  "key30": "rRPfXejbAyWhMjETMfzdBDEVS5iAV17xmdVSiUoBW9HxuvSWg7zAQ4pH9yamAz2xzQnukQaDgcka5iMmZ3ou7nx",
  "key31": "5UGuSkfhNkL7aZcK78LT6f2DtWCJNd2Nrk5SSxtFrfFiCf3UrdhM36ESb289b3Xd8Lu1skLeAQBBUtNFHjuXKof5",
  "key32": "3bQfqQX6g1WgijpXA1DXzcFj5xENZQRqegwbTM7uw9ykHoGEPDdr63wkK5HFSNzo3YCJnzhS1iTcMuAVi4Z58USE",
  "key33": "kNmjHpyazCEBA58XNmKHKxs5RScxmoKp7Np6JZ363xeBMLuT1Arukz6kFHtsZDaWYvoUfTZ3Ete3xCDmKBdqT3A",
  "key34": "3vb3M2qg1fVnU6uRZ3s5QU1JpRXvFZDUcFiQJTr2U5SmjYUsgmPucP36MvFZ59F5d6r9Gg8MirGgAC5fcGTpLH4q",
  "key35": "46FsCzKghcfqhZuQfrNcvSn6eG7Y6TdS5UbcDzfjxxpMUxRkpkrPntU7kq2kah4Pxgvgx414pDz1c9CCfVLh6QgZ",
  "key36": "42CvJGru7MQHsyqWgAVAmdLpnfoRcAdxrHPuc8pArAytK4egroBgD4WfkRnQd8YERGMcAkmeRtkqbU2mPVYEJfTJ",
  "key37": "63NZKGSfERxD2sk8fwq27jra9GyoWTT4Pz6o42hfMeiCyZBAybHb7KqErcvd9WKv1i8sy7DZuybnrfmbWniyCRRK",
  "key38": "3n2RS7BcGncmkMjFVUQbhyN5CW6EMWfEPkSxHKNY3dc9TFk38onnpgL3ZSi3ZP624S5gWsdGJdg8F12wVCfpPYwq",
  "key39": "5THHHcRsauTpL7gQMsmuHoSMVjt3H736Gab2J7BtMw6if2ov9Ck2fJ4shHW3WN6o54PNv4fnfiDZoiA4UsEd4PCX",
  "key40": "575YLaA6YK6rrqYvPE5WSLEnNunoqW6YyWzH6uAjF8s4tMAhucM2pdMPjecfHeWbTDoz2fMXQqn5tTcYuf2joPMV",
  "key41": "ucjAnB7FfxUWDYf6xs3zQYYTtuyVZh3s6PPrBi9RNGtkLLJQX3ThaBukEv3p58pa45TxXpHVXTafZ2Rqk5jn4ud"
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
