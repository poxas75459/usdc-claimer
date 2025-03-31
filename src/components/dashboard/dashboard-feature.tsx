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
    "5XBuM8t75fk6LghjDouLpJc4Nti7GgavNj1nopZy4s6wsKbF4bJsqLSgXYVFTbk7yLHLQeFd2Zbbjg5JR8DvHZhd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3W4mBpcviBz7ctjAJMuwmu1oLG2rScNDDcNLphqk4LuTCRe9AQt6PKjt8pFnNfWetTpQk5aqqaP5L1dRZ311u1E",
  "key1": "2kPgyUT5qjSjQ85bQWEbVkPTJ5aSAABVDnWz1DWc62Wdz3nseiGv7dhe4rqQHRVkRJepGqWw7tjB7EWzj4BEgS7n",
  "key2": "64KRBj9YR67uhUaeT7EpeYKvdFsgWuzekT2q5ri1hHfV1vK8DGwi71tQsZRkiynHp5jSESXGom1CxBKvgce11Yd9",
  "key3": "4gYMu6KJ9hbmerdAT489t5NMh4828pHvLbjuS4gRCuzW589Zz6D9kp4TjfwdugnTRueMvzffWDNQw7QrEaBK1MNp",
  "key4": "px6zMAEsp39WjEvMsP6fvs2jw1LUR43GpSka9vz9t8ALzaTyVvFgnT2p1e8vFnYZabanrPjfjcbhFgaC1T7NMr4",
  "key5": "2G6Q31Pa4o17ocYvUUnVk8s45kU4EdTQMPk2xSBYKFBjmXL2TMme5KJuxhQz72wQcLhqyRRGL2uWGEgkUnDjyVrL",
  "key6": "2GMi4yvKtYe6Lvp3xAxvPv5ZQ7ZBDCG56tNn3gjCoY6xLj6mPLWwUZcDx6eAaAa1iVz3qKon8DaPd3HVNTFVRi1q",
  "key7": "5or5uafTangvbAA6zBff6r2sM6HdWfiXZpb5EX7VnF2FgqzckoF9VRZ7ieKUzUJztuz8krsWgXxfHoNks1pFLyjW",
  "key8": "5CpK1q3FQvteCyLMsVJU5Qcaz3YysSjVKMEU7d71WJe7pvMR4xHF7pB3QZRCLAVa1rPxoQyYNttpUCRg4gQXPgDk",
  "key9": "35dJpGdwJLV9bMV3Yx3MhB9CCxZKRsUa838MbhMqsZa36aMWxa9sjyFaikgDz7HEThPYLKEsVNEEWVvNEn1CwdxR",
  "key10": "623cB68yd2NAEJsxt9E8QDYBmBB2NEWDJSRQhvzq1uC7EWJdYwDyMyZCy9STe1gWzSdqa2ZEgFXv7m9QqNQ9JdvA",
  "key11": "328KDKg41mAqyap4wLaXEpPvPqQZ2apKtHPkV46ySSffjJBDP8fDxuRzLC8Cj6LNWKWZ9iAjV1x5igbzKefdBJLX",
  "key12": "2Dd3UdP2upr1QEFoDK1WTJqhhK753srzZtnk4bDk3TFwruekn4qNXDX6DXLgnWcbh7RieT87FfNmgopsC9B7jL5K",
  "key13": "JqN5KLhHu8hQq45h4PeWM1BFA4PyA6oVRQ84ox5XXYLMpP8TrcxTHRb4Lc3voC7Fw8PYx2UoKf7oCkf3PmATn2Z",
  "key14": "5Zn5A1cioZYDG3v6pARcCdg5ySPZmFBuo6QU7pxQwtA1tPsozSbJx9ShJEAbG1ABkq7ZCdhRqRMcJ27FEu4sjU3a",
  "key15": "4LrQVDWyZrxW8iGw2DRmyiiwstkzeJMHDJV6ABWFXp88YBQSjcHm9XTNDBKHg9gJrAkiuuKm9Tu5EX23DKECNkhy",
  "key16": "2FDeVhut6XtzNxApktnyFQA2FctVw4qpHJg8SgYQpVUK7GE1to5nbAuwzE4rUa6bsNJUFUtpxYhXdXq2BXCoMuAi",
  "key17": "4mYvdFVVRVp7tucdtBDefCMMYK4nMdm6xfkbL6QYGEg2GmX5HL9p73VDx5BxQVX3dhmuGHcj4N1abt6JN6m11qhk",
  "key18": "3HtNgi4dHQcaBRuemVtKT6SSafi4nWpso1JUBqPqS2TnWZoX62G7QgDFz43jFs3PBiKhEbCVdUgmV8PrNJ4ozZ1g",
  "key19": "4SEnC679VPhTYzA9SpmoD2y1gtmtNgvUDT583uSg9t94foirDiZV85j1KmXWkJy8jbksC4MpifH17xQDU7RrBDB",
  "key20": "3gUi4VosqDhc3fQP7KjKWvT3Hhx3SEcLtvAB4QsJkm8p32ZWPD1mQqRAnXy7WkExyXffgA9s64iozvzZXnNG5ryo",
  "key21": "wpMtmM4xVRzyBbb1UTCbxo3T7p8ZgXZGvHynZZowBCLKFPe7NW4Kxux6sw4oNcvP61ftoiW4nkaPm44DLPr5MKi",
  "key22": "5aSVhe8CqBHve2NpqsZehWZoD5XnR5CZ9omuPZgULsYnJLTDqgqxeU4j4igHWh5wRKZwEMAjExbj9jgjjhv5cc2M",
  "key23": "5hs7PYykJT7i4JvRioTfJU2pxmH1MZFJWJvxhFgkVy16QHFRu2ngVGfAjV8K83V8gmL5AD8ypk2BFqZTxQymd2Yo",
  "key24": "1jrPeovvT5PyohZ42Jaseed91ypVfPRHzBoj1WUiBowBgfWpBztmG2Jag84Cy1vcS9WAyk1LEpLYUVbWL3T5cTy",
  "key25": "SvQEesKLWEYBbMc7e4LAUdWEPnHuKLiR9uB1UURTk3rAP3YBgbpvhWVJ1ngBSVtjv7et6a7n9CZ7kzL6SFsnj27",
  "key26": "2bx1SzXNV31uNW9ZP1kA6c691vxUWAAw12FBggDkareF6W8hzxSnSUohUaNgicRb1mFkQvGmicQbVAswVFeGNZb",
  "key27": "Erv34V4d51T6E3RT1RAaeCs5uDVpjy3z5fGFRtmPXzjc4Td5tiVWup955f3kMuyymcbJV9ossZiut91macArJnd",
  "key28": "5aaohTavUqW5W8YoTQqoMWs9CM36Du3HNjSrVGAAedyxZJQRfmFJx7NPbLGT2vRDNY6NnEEwvAHugWeLyUZN5C5c",
  "key29": "4w9KjxJLsMa42z1xTRSdSrNgdN5oLA9HsrUp1xQDw1HNi71fhzhZT1Kx6GMe1p7XnTL99QJEhMveF6wvx1UDCoP9",
  "key30": "3RSa7Ko7WBtuTjBsP4F6MXSRreKusFxrCnaxpKww3XV6EndQcP6WtAvwRNwXLHRqfKu4NFtpk4sgtkLgVadX2n2F",
  "key31": "5kmNXVti4FwCTiRqsSqfmNNVEeWz5qjAhJd6Dx2KSU2jJZtfEDNhLMQ7b5L9tBHUa4oRTmQweq37An4FmNGAGzqe",
  "key32": "3a3RhbTsQbstzfDNHyJAwNvAbLYqTtTWmHzVSqikb7HZLtRRo182UmMHhKJruSvoJ8R2gddQdPgo2jQ1ePWgasaS",
  "key33": "vKrLcAqC3ny6T89ZTtXy5hLTSC6Gecmi7ef8FVpXbEESeBG29id2yqN61La1pFQSSgPukadfhX2XwCFXzE2ba6Y",
  "key34": "5cxyKFLQCmdk9z5eMcoEzAExDjLQgugQfUuBXf3dkH1PGWrft4K7MQh2K7Ke33z8ma9HuBf6NpcAMLYWJyZcfkpr",
  "key35": "2UTf7fB65F3TXFarWn5ATV846g5yM4pK9tkeuc9RJTprMXVR47XKxGLr2atBPrQA7CA8CPTqb1imhMe3NbyM6j5W",
  "key36": "j9FiLLT9UXoe93nsknsUPxiaSRKzF1jdCrNEvCEu4bgTBnNDXAX2MhJs57174uBRUCj1SAYkfBTVqJB9FXRY5ii",
  "key37": "328RR96cURAjGYZj7rBwUtddrctbEKfLWZaAowkcVcQgZDqyKPk8KmoYcWL7zPnRRPrdAGH5hc85YfUDLQiQ7mBH",
  "key38": "3ma63JehPUePbWuDU5qrzKk6FvvHJohXBo9jtWWmdRVnhUMZ1MjghRpbf8tYjvvJQLuMtqeXxDGpJ9pfFbZjSsMy",
  "key39": "49YdmHQjz7spbz66rzTG1w7sjtwnJEygzwML9MSs3LyyLZdqFeXpimPYE7PGhkoZnDJKn3ZFXaDv1czFRaHPwsDU",
  "key40": "2R6MttR3iFGJSBss54psvRrzC4E47HEAUyuVrEeFWDFeMSN4cZu7zhdSD1aPgxSkAjH8LtZu84UrBveyFD8z7hPH",
  "key41": "2YJVBg8yFDkRLuucFrovdieUZowtqCwAwcSfLpkRa1hsNqfhSs7Rvbv1YKs3r943PmrpocJM2LHmnno3Qcc6uK9G",
  "key42": "4cdJBnbnYtfWehLu1XPaWmNUso3Ahyj4owaAz61aKrnEYPp3Fasecs1VSJkj8emFCDrpaHBW4TFp4DXXDvDkJhnU",
  "key43": "3CAURMJLhJTS1EkJDquXB4SwC22F4g6v7uvfdZJpyP2E1J4hu6jbzUjGQfbb1L9bXJbEzvoGB3xdwLX6rMWK2EXW",
  "key44": "3tp8dJ9AgzH2r3CG9gJ1ptsadx6TvwfZqKgmvsTW2k5sa3iK5WKwFFUciL8QTnddMYGSJ2UHRQiydTHYTD8tvfCU",
  "key45": "2zenPvjcKeyupbxWn9mHM88gJaZxy3xNtsR7udVf9JR6jUM64Cy83TUcxSB959idakrXsrvzHRnLMDUdtzCC6js2"
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
