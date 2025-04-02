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
    "5GzUspf55gfDB9Z4RXztC4TYz9cCB6WgwL3aYZdrTijwChJcXZTccB7YMeb3yiuQqsDrdax4WoeWC7xxkPeAYxZ1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kHno3xATP69aCkX7SFcsGCN49jfhND5HchpuG95kmDp6HXdWnxWwXVtvZQSkcc3dZDmKYLJBnTkAHskaSb2pASB",
  "key1": "58voas1W3k5gk5vbX7MgkiCdhiWM1eSYXPFEzQe4jkKjdDJjQgERK4MY1dXhyCrino3kZyHzThaK9MeApsa5ghxA",
  "key2": "kaCeVtqDimkoyhTBT3uo7zEFSTBo7GodAxwGW2N3BRksf4oLmQKzs4VhiEoCazakaQqVhe7dw37RzEWH92X1mNo",
  "key3": "2z4kBMChqsFziTBodaCLBrqyab17WWWjcAEeTqWZgvAesZGBCfp9ftbLX4DSQCHUsbgs6dqkCnfMfWAphvK5kNUw",
  "key4": "dmCvDkn7CM8SK4GSGPPumTDPGeM4e9GLDjgeuSW3jtU4KQR4WS2knS12VdFuh5NYvqKw6jtg8d6zPQA5JgecLXf",
  "key5": "58Ve52nKUPwvS55dRz4ftZr59HQFMuN5gw6irbfhbQcgMQo4fRzN973XueFJinCNqKKpQznj8Xzv7it2J6ZjydwK",
  "key6": "rSiqEwkTR9niNjirm3TB4bGCKFKzuKBP8apg2zmiUToboUzQzSJCzYXf8brw7FwenQ7vvP7TV3tEdF4mXsxZgy8",
  "key7": "62E9p7f2BLS4fFVGcHqcSqJfKzJm4jc28wH2kY5h1LLm3DjU26WRv68JPiCAWiZQuEtSptbKobxne9kjST5qx2To",
  "key8": "2Me73eNGWQmuLFLyetqQ15Surjf5huecavmZxFafcZPikgmPevEsHKidE29XAMsgGwxD1CVn5zoqyBbKHkKtorqt",
  "key9": "3V1sr1dWzjegKxwc97ciuSC1gKCwPd6h5wvTPSLv8XriPmLRXogSUHpnj62EuCy9fFqQ3mLyMLqsqFAEv4mu5ehS",
  "key10": "4Mri5iGKuMnPmtNTjDybdJXPb57ByEhbB6GECp7xkWEMH6spEUPPmpmgRwu2QdKNQh74HAbVBZak3gF3SxWr2fgp",
  "key11": "2JCExRL6NJKC8VgApWrkgp2UsPKZqi5XEf16nkS2uAv3LAb44NksjgrKabZsMTn58jacjxAyr8dNrQHSc9rWf5Pu",
  "key12": "3AerBjgsCuHBBxs9DvasfRg9h1H8doWfrLcL4BG2dpnModzGuHPwksQEtLFsRZWpwLCcH5YJBAMq8AefUZe55hpA",
  "key13": "3qjdyZKcijooMRTHkLXgwj2vcpdzP5QrXHpx7Wfq3Bs9uX629cL2FxhMWiEd851TC91MLdahZGLBz4u6RW5beWqH",
  "key14": "3d5BnNLVvogAtuDuF7CjNr9m3TkmNQxLz1cySV71a14XaDD1rbqezjSx2H9ZFUK5Fc3dbmPEiXkpR1Yj69BwJnEq",
  "key15": "3fsEmXEsCFRwFXQgs6pWE8xQw6PPBrVko7k6neMhSkeb7KeyVKM5StdNpzc9VFQ9N2SRtJ6KRccq3zbLWfbvXjUi",
  "key16": "44PkWxqyoZWJzjYUTbx8s5K8YHTConSt6k3fTXUxRjnCvU44gFKPHZ1VKnsdhPHW5wfCjxCQkqxsRnx9EUMBeRwX",
  "key17": "5Fh6Js2hLKRuVjQAwWJQ8mbmzyhYRw7FDXfDeav8GGpRQ6j72PAYcBFTywLKGYxn4RmtJxxSvXAJ33PdPiMa5EGy",
  "key18": "3sdT21osNAWLQfRjCLZtan6v1UeRRToH2K6tQiAJU1LseqPNywAGvmk1g3W1N1GZPHM3EUYW18tGyD5Sehw9N5XR",
  "key19": "47UDsS7nRAhhEEJ6fLi9RMDx6csnSvomLKTJDbo3jr1NUXi3CinvHy8ytmRPEbcQSPAdVqLyL5y4LoNAa33bnpGn",
  "key20": "D5KQBx81deFfFZR3Y6ji7wZstNu1SjxDHGZTcZmPzhVYdQgrCs9MJXoZYFH4TDdg31MtPZ5ip7UXsdJyXCSTGH3",
  "key21": "2yJ3q1sz93voV1x5w75UXussP9MjN9C5K6r4NYbo6dvkjdovERG61YV2fS3dDsskDmmSbHgvcCFtfHLpYbDa6KsS",
  "key22": "bomUdsDMTSCVxyb5koSxbtxCWuPdDf78oVasrQQhNK3i3pXeKE3ezAdMnnyiZApHz1aZr9ygKWiMPpJEcQYtUHX",
  "key23": "67kuss4jFriG76KJXfZSckxtY3XJjvLma2Rvid4e7AdP4ShQshgfQHwwfmRvj86PrRoE4kjLPhpfQmSkDwLGq9GE",
  "key24": "3xAcLUinT6u5zs58EuEKhKxD2RDyCQQDpAS32RrSdJF2NtDxLnX5RAJF2isLTP6HDNjKHtPtXx45wqvJytygTtbA",
  "key25": "5PvbQURCBP1u9w4RgSWYRjyZnvk5ERYQeL2RuXkoV8QnBbQ7vk9uQPKEguFL5k8zNCNwt9YPwa7zEqJhtVp1EpBU",
  "key26": "26N35uWhBVyuJ2ZeDhzemp1YhaP7wj6dW9ecmXgMZ6f43VQ4zfwigdrhqxqun9jx3vndQro4uYHRTovsQcibtBmh",
  "key27": "3SuAaZwJnMSyPZWy9QXNUr9Xd5K6nr871vkN8XaseFnA98XXnDRDfBUYp6RWCuJszg2MxXCGoWCv9NhNmN1EqUE7",
  "key28": "3P3ed7aUSSB4b2oQj32yx1K7HZtH1g8HgKCELh2qbpSEyCk5qSfffwa5xF2AWbnyxu8rZa3vdkqSxUquW6PXKbhw",
  "key29": "2YqjcXN1nSaJb6wPEETuqgBn1QbiiNEiAr47SJ6tHq7bQBeD7XLjBQVyZgimovNNvU3eCSzfqTq5bXgxa35UzWC4",
  "key30": "38HowCCFBuFzP2KyFDZa6dzAtG6Q3AwBSGuLfk7rCRhVRhGQ4LnUKM6YWTK53w224Q4PkePi7SefmbBQaHVboNNG",
  "key31": "5RmwCSXdPCUoa49UkyyPvVqKYMeTBWCHdJdJ7BmBfRNPZA96RQJtAp3zGDfeppAvn2qPvEpqtEE1iC5usJkiGM2E",
  "key32": "ztRH7VSPRdQMosh8uyTjXJARJTUSWZATJ7EfHFpZJCxccvvYRepYd1jEN8vnhKfAx6P3M2bbTopBreeMYoYWkc9",
  "key33": "5zNdHTcxyB7mLEe5FM1hXZ3jJpqJYvj76Qdc14mNnkkNRkqgYoo17EWRWbwxpDsPKch8oduhmuCDHQch4fDuyo7k",
  "key34": "4p52Sx4EAKqWdL3zF9u3cZ2pBZttmiPtTErrsSqk7Hcu6bUK4xBm8DEMur1SDQoBCpVoQCDWb9CXSeqReJDKtLYR",
  "key35": "2SHzA5kPViyggSVvFBwQ1D5BRinwL514TBe4cz1WqUiW8EZjX2TZYdaNZYiMtA36YYRnWfUTJ5WPJCEqQ4gNo6SG",
  "key36": "z4ccJLkLjqBPxiU9AaTkb8zoueew6xwaRXYsLgkK1sYSRGbzk8ZhZRSiGwnTQmgy68RVd99yRMdJdRMQFZvBzPQ",
  "key37": "4LhApXMQAfi982cDVCshdSUU22Le9FeyX6DLs7Jyt2FjMJxqxkSy61PERUwvikkNCDHn6kA38XGUdyT2mK5ivCXr",
  "key38": "2JsUKYEBPTQ4WieFxGCP4jzM9bxzoZQjCZYYVBWSSYbFih4YVwoHYKnWGM2aqWZuPZcKeY16ZKrgKtJJoC6m4TUx",
  "key39": "2BUzYihEKxVLK7vfj2evA5kHDJu18xyW6cTLdYPov16CidtdDp2ZfopJC8WpaKitFeYW4nZqdUa5kh4pNpZSnJLy",
  "key40": "kYpAitfRS1tb81WNdtuPcEwZkjiyZphrrNZEpwxQm5mxWbyLfhaeMkuVp7tUxMtSWUoSpYgm71rW2S1QAEJAf9a",
  "key41": "47MxP9g97ZWthuejNdx5t1sRjxawmiYFvPJXxaQKrXJ8WyxUZi3Lz7UaqWbsJk9FzPdpCwtrpEunQoRJnVAx6FaD",
  "key42": "3NkCgj9jhcuGugUQAzdduMB3QBEZaMLRqiMzpomeDi8fDP2Czm6uGUPXAq2RbSG9Dj5B6h2kfJF7TE46SAk1o4fX",
  "key43": "2WY913Y8QZtZuK3CGJZf4cV9CPxJ1XAGAXNx6L8HUg6NHBGGN1BTEy34TRxJZFmSm6W9WLn9WDW1siDdFzvfZr1k",
  "key44": "2DMPzMskigD9eRKNaVMWof9wAwqtWv7VM1dmiL9z84KdEcw9WTrb3EfeRTDmvu2t6DSrj3feLsMCab7VZSWggQSK",
  "key45": "2Zv91sqwkANiP4BHtkzuBBv1tg7ncmGZN3v1xztkyDKXEGwpEBrQ7je5XmUh7TG57qLBASxPB57go2Vp5E8rw9H"
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
