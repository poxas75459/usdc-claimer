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
    "5rQVi86Cc2ZpQX42Q1cwTATLdefwdgsPoz2xmT6kC42cB7ajoisttkgNub48NWMQyyNin5UwUR737VFi6xzmwt5f"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3airNMwAwvhSVSsthtisBKL6UNc5f3rTdcodeoa5qo9sd7sQtMymt172LvwmRxvrLPTLvUF4kQyDPg8EdUnpsTe",
  "key1": "3niLspZy9g47vBce5Px7AGnNDuAfDwWvA1x8kMJVzSTmhm4QgwCBLHB2KkEHw98ivuU35VYq5DL3N4uF8JkY5DK3",
  "key2": "3Uw95E5d6fqTxJzagMmFnnc22EVWqi5vzrkVvMJaDhn8qt9pKafXWxiWiviHU2ry2fgo9sQ8QmvkCV8NTqmQb7bs",
  "key3": "2ffex6m8QNqr7CAhX8dSRAB7Q12cDztwexTeNmuYq5H3pTWAAydCtkjJwJXiQEeBzHMcwdaD3J9vQqeNH4BvqHhi",
  "key4": "65TpqQ1u5YG35FAPLjE8JzR61sb7TWmkqJNAKQaLzCLM6i3CNMFuwhPBHgy9QPqRDgpfbZV2FCJggsu7xtitZJvG",
  "key5": "36j6SQx4PkYeZG39dgq22Nc4wfsBEttxPN1fALh7aA72Z6MXzETdBjMfks87iifC31czi6b1Zhhnno5XN3osyctt",
  "key6": "28mJuNB5vWRLempbVXhgEDVuUjXEZY4MEXzCCVpeDyWpFeSJKLfizq8ZC4dDHSZ8q1W6451R5kZd1A9vX4d5uEKG",
  "key7": "34ZvzHRPrBfo9Dya4hHGwuovhha8622NNh83TdnaJnP8CXqTmabsUjrvAaWPQUtfuvHn1pFcasF4BaGxrU7uATvn",
  "key8": "4BCBQijppeo6VUUgu48GEcXbraZz8mThvqciE2XsTe6MrXQbx1oh6RTGCCw5Gz9zApbDETqsTKqneXjT6n4HycCW",
  "key9": "3LDYiSGvtdDbr3Ug7745MLmRFzd1DY1SCK7M3KYm14wZDexpsfo6Y47t1gnUDBHW9giWgkPELghqasownaFGykDK",
  "key10": "3bfsFq2VswkTw9MZdLBE7JvxctKjhvyMKyC7A2Cbu9jBDSGYw1WfBLR2nRRhU2rzZZERtuBJfEaD4Tj91fKfrdNj",
  "key11": "5dE6B6fmnmtK7KRDu5dRMA6fNWB9ZMaWJzLTQfhzJPWdYU6x9tqS4c6hnijZchUEqvan5hCCZSdVz7h8AwjMZ34Y",
  "key12": "4A6jwKj3Vsb4w7uWSbDHDzkVMFDCAJbYbdgJQq3Sn3AxYNb2REdzR9SggejeCLmg4BbWwggVsffEowoL7U5T3Msc",
  "key13": "43KcirxGNC7qaLpeuq6Nfpk77tfUz3TWNQq1nkssxfN3UjxaWwrQ4ejkThvKRDxRX7F6XPpoaPkGfLbz2d7thnor",
  "key14": "5NKaJGu1CdA3DLJh4XXjzx4oA9x1U3QBR2Aqy26uBXxvjVEzgeLcNkK5J2Z2GnLg4HDa6DW9uhuwoHJfMzyZiUSh",
  "key15": "4rpfbQTmsDQkvy5b31UFo62ckH4uCN6GK7YtELrcKaG7wcvrVCNN9BdxkbQ6hAAtuwtiUNziZFSWiUkB5MAKmVL",
  "key16": "2jjcLpsJ7rXovUHRBAAfumrdKscZVpqwQ758skXwDsQoXk9VQ7coz9xd3coc9KmF8Bxb1cy9ajVnf8CprYSNjLmm",
  "key17": "2qD9giMxtgQ3rDdc9Lk984oT3oWs8ghahewcejtHMVz6eooG4bvJrpNh51bcdanWmPjUWojf9dxw9tfyKBgZdGvu",
  "key18": "RXhavJraRmfo4LkRGfMPSUgNvPt9cRbedyKsMRk8hJMn3W7C4zkjgWqwHJEWjSTAwcZXpMYaVjAf1EA57XrYF7f",
  "key19": "yszuBKjLisGxEzFjAtRNJqPb1qox9SHayuwoSEqgaDAmAEQXfK9hjBx5kmx2P9jdgnBoVHhNWKJHuVnnJESihZD",
  "key20": "3FnyUortvfLqci7YpZWrywyC9eqfJBi4en9Mv61voTYGbLPscP9hgLqqaAPFfQ7jZf31qFhsDghjwCxByqPTqn2p",
  "key21": "59zcQLgUtgkooLgVGKmhBnCVMc45UH4zNqveTcSmEZztLBZWCe9aFWFNCsMzgiLzBeskwEGAP26zFsjpuaaEacma",
  "key22": "3tAGpRaMQBLMgHMQt2tzrrZboBtbu2wi87KQYMH2t7pdobGJe5kzeq16zVtnGphuQ3zqgZgxifraGZMk48dJBwit",
  "key23": "2k2QM4zeAtGLrUjj3BZC9qZeztGAJquC7KLcS9j89ooNvZ2vGKeMaAyEC8bxs7fEgH365an2UNyoowXn7toV5oeF",
  "key24": "5yqQQmWifTvDxCf3r8epHVgG3ifkorTaj28Y8nRtr6trDCzcipYjUZXZ3yPQ2pjARLwfBsnpj6SQt4P1pSsFqWWD",
  "key25": "5KSgK1LhZqA4HNHPDnjLipxr4Kc9fnjX6C8mZFqFaXfynNU6PxDX5NoV8TZkss3JZ9D68TCnhE45Ca4nfwEBRTMR",
  "key26": "4rNQTuLSHS97HvBUxRYGrcp57Dtm7GYSCiyLgSW3xypfoZXscoAitKLo8tZQTDbzyT4jv8XLBk33wjnvb6B1rouH",
  "key27": "3p3tHResgq86wrPW8BwjDkSejQeZv2yxUSiy8LjYcVPYMFCxTxnnMrrSo9yQvsV49w2J71tu1TWagrnWKxu2mtEt",
  "key28": "2WCienigVQNy9LsTk17DnNN6fcj6qYkpHz2EumYPAPSHE7nekQH2YMPeMuR53eg8pbstJ2Lkm2S4SX1kGfK8nu97",
  "key29": "34a7ok3pZx1L3TE43GPP57fqsF3Eaq5Tcb8QEUtb8b7kz6HcSVpbzZmuCn4dEARQKYFQ1NgjQTDivG8DH4Tx4FY9",
  "key30": "5LpTmLbWqHXBrsnLABaFWKuP2X4sQMfW2d1iL3ghdHwc51tJX2qqiVhjE5CnfzP869gDy6hhqwt9pX4ucPUqHdNe",
  "key31": "rRRW55WTMozwhiAgymQgAKNJJmMYFWJstBySTyA1aKyHMP1VVdY2XYby22pXvpWt8tg9YeCmEVSDDdd3KtkZtmq",
  "key32": "3a3Fp8oEUkDxyGfYGFj1ALjcNQTdN9jqtjEM7x6TShMiRFZ7fMTfNn6RaJEaXK1QZCeGo4bZsrG4SZcvvHLLgPPH",
  "key33": "3ZpbxJ5GdNpWaphbHVaxehG8fNMDjQgzTuGrYosW1rCMVJpXTTcM6WiT8i8i3nReRKpdv4HWevxFxMQiyHFeRyri",
  "key34": "4pgm9TWdskSjBfRF7EuteZzgoyrE9niPz6qRbpUMztV59UzBz7j5zW9uyoRT3eWEAVmakbEL5dE1znpnoV9urBWn",
  "key35": "4bYyyrRFmmyr7LrbaVrs64cnYQ7Y2BjLpxJU4oweK5ALukyjMJKPYP76gB3nK49WGDNHAAWsT1vrt9m4ttMw6mxf",
  "key36": "3gjaWdKzKVcng7tL2w6XuV8kQPWRyWcKPk9u4WVnTigqc6j1VwDGYMqSUJG69q92uH5dzgEddZ45xQ9mthxnSHoU",
  "key37": "5eWxPVVq7APAHc9FB7tV1kyviBktQNacGMrQYqEU5R2PWvb5wu3LmrrczYiz6oYx3nhDrbmsQzct19Cm4VCi3gxf",
  "key38": "3xXUv8jrKyBqaXGTPk5tR5RtAoaFBzFAvd47DN1TJjoiqdthyspWNGyVmMhJ3hsLcz1J3uUsCR3QVRMWFrhQUhaz",
  "key39": "MgCoCumr8Jz68W7LXfuybp9NRsD6XZdJh3XkWD7XhAz7R6G9bA82B9uJMjTSny2r83LuPtaKJEzhxtzRJCTyVo1",
  "key40": "xWyHeg5VZZL3LAhMMcZ6TqX6Pv2YB1VYTUbiydan6JAN6EF9H2155WiHsRfLK7Xm45xaxYknbwZdjZgUk2Fbqm9",
  "key41": "4wujbJLv38K8VeL1Et8UGgq9BuWbVwzxYAEujHJrGPSxJoXids4MG7N7RnTEPwbMPjfRRebehzv3nFTmkrmKT1pN",
  "key42": "5FMVQFwWywjqDNsvve1gHCmwueLQaW5apKAdBc1qnQTTUFZNGFitXC7RSYrbbC8ytRyzQVsDvpq52D2dLwePpPwC",
  "key43": "44o4AeS72ChNJfBXtbtAR85pzUcuzbG2vfximHy5BZBFvgH7fj8RLeEucqw1pGFC5Dxg4Rea9G3povm39JViQujd",
  "key44": "2bCvJKeKRaBa1eeamTbfrnmKjaEhxX1BFzygdVG4hLbC34bftfEdVTMDKDx8CojhgQn4EUJiq2XSzphpd8LoJSHh",
  "key45": "398M4o5AXxvz6y5ZyMxuVkqkKCx2zijZ6vQQDhEhEjhVNKW7nthSQyDX9bVgtFY49nrYBnq4wc4eGcbLDjbfihDk",
  "key46": "3f8fvbn7ppCnq7H47gUeMBipkHg26mH7AHPEb6JyrWS1SiTZiZ1RpiZkd9mxgDP8kZqmDquRRCM9cSD1ET6SPmzv",
  "key47": "3Y5NiY1FBruycQJXeuNfkrsqB93ffg4Qi9dcH3eimsa19CPdaCRnTir9hXrsTS9RgMD3SyrFQ69BEAARftAbyYta",
  "key48": "5RVsggfsxKW2nnYBjM6rz9yYsz9YFH8xQUUsSHADJkRUkGmdvWyVVi5zUiEFgqTY1LpNaBUGbkjQaNV7ziwmj2iJ"
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
