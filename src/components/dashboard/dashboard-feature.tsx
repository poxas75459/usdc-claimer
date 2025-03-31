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
    "4LhEwakJM9EsKSLZcQ5QMDvwtzTpjr6Rt4aprs1WjpgB6Ptyw4GPkCkK8h8bXUFrY3Xap1Swxuy1bjREngP4fGKX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3a2ri1fnr5hJqbUoEFPwqfaZAxuTWyWTKXXJo7hMgBh3EwjMyGoMuT1i95GeJWdbC28YzVPf7jsUJG87roWVdFkK",
  "key1": "5Qr7SYYHRLcemVr1npxPQX1sTh3QPbVvNSFMJQXDcBcMMij9UfnSGLUuy69Gr22a8Da9b7ntE1gkzFFCNVA78mn9",
  "key2": "4GPQe6H8iGUWNqGUnYp8UhQ1NjANoWYAqXkM5aE3KNYkTFhLNEGHeR2LiiMoDbbBXL8Zp4qkh2rMLTeBMr8RQyXc",
  "key3": "5THngFq4j45vP4jiLP9byRrU6Qun7gdErDEoWrrmx6eDgB33JbdidUZ6Vdbv5sQYqP3PUatbPua5aVJosYW3yn8L",
  "key4": "2KTGAf73D2hYrQrmrAbL5JXNsxGtbMb6VhnaH6ZHqPmscjCVArzv8jPRnzsgEiwwSJ4z8G3yDzANamJR5Vt8vWyS",
  "key5": "34iT1CrfTpdsrwoANAkXmJTKVA6m31NJyud8mxGnoC4pNqCpdRGgpDQ5f3ruDzRV5zfvP9jFpfe4iWSocnpx7MBX",
  "key6": "46rRxMcq92nqkKrqM9YXjrgBnMF1JDPqd791pGB8kDpK48R41pBjHqELpz1XfQj4nwUrFBbBAjWhjMyR5uE9bQVy",
  "key7": "65EPMPm8xWJqCpy8wbmtyzkfNtgmf7mwKFqd4qzGyqZdXgJJ9jDEu1SL2qJWm7YavvJxp83Yntb6W9NDwigRzMEY",
  "key8": "4PS7nhUNeCcWrRzj1nj6GqFw4mywQtysCnUKAvuLzRBAEnmysUcSfY2jGAqNcXNngY27D6KShXmZNAqgtupn7ZMX",
  "key9": "mFGp9NPLXR1e46QcYFJzBsuAnbrRX5ETXZzMQq8HoB1qKpYDsWzKZnSdP5pTSdHcg6bJGo1spRWoG9YYZZS9TcP",
  "key10": "5WfzS7sThmoXsv6VnJkML7KfUZ1EDJRm2UMgzrVJKNXAns7bWad22yXuM5tEFHV4sKBNKsThyRy5D3xLYcxxynnN",
  "key11": "5L7msHvcURSHk2rPNQY9TZgfFEdUScHP7BN2HpT3sYZQLmo1Z27efJphHHHd82Q1zoPGjuozvpAPDGP2gEKkyQzf",
  "key12": "4Hfam96JUE7FJ94FDnLkTj3uGbkTCUU8Cg7ZT4nFHDpcr1G33kE4KvZ9X5amsQeuNAXrH8p6v1jut5csoV9u8FUM",
  "key13": "5zuNFzQBr8mXnTykMRDyM1pS9tNYghUKWh4z4ryvDFASfq83Kbg7pggyc119p1RB4grV4LzNDaWTvaUcEvAW7dPr",
  "key14": "2nsYnrzgfPZRNb3FjXzWPFDZ16cFxsE8jwegxHr53AnF1KtxCQU1AoyR845ocXF54jj67QobXSzjbfCe4c62GxK8",
  "key15": "48AagubRrtQBNms2Tzre1Y3XZqgNcPMNHgJRxZ7J1ViM1Kag5oGjepQc2ayQobCJWkH2Bow6xBCgcG9Fk452CMzE",
  "key16": "5KmkcDvNc6ZVob6scKAv3K7mH79c6efpESxekfhqZXNs3eX7Wrm3jsU5ixNJ1LtpuGWBvKBoTDTwmyTCUMSHFMDp",
  "key17": "4W8X9AJ9iwygarbYRj4bwRctfQxJKkezkeK5AywHVXtv3ZRLS5smrghH9y2FWda11H4d98yHpHJB12Fqp7o6sY5b",
  "key18": "QLW4BAfqv5SKLkEhLU7PzAYmNLBt2bxvcNMWKBMJmPnoNigAQEoF4SGKGSpbMacsRtwQr8BUWCbKKbdqk76GTsb",
  "key19": "5qbSwsUWqjocznUTQGDCRar4f9c3r2jCE654c8pCDS17xcu9JFS62fvRiD4hFj8jr6hiX9D2M9ZcoFuZUmL2W41y",
  "key20": "tSfF6ViTYdXmbNkXSJuEmpCbZRBp3pqCUiqT4gfAtYR5AynWGCmN26mAzCkFsMjcSWzUnUTEhhE6s1LdeARdKQq",
  "key21": "3jaRyGfdYoe4ABw8jzTnEN4kodkQsrT6FDha9owGGGGQAbNnJpxhu2dkEHtwRqzZHMSf5aNkNBHUbvBNFzxiLmN1",
  "key22": "f1Cc15q6dgqcoUo3D6KLYYZdSmXDJtdxqJ3kakR7YJfQkMrzXPrXtg45D2q3wADA72uaeHkGgKAotVpBggZg9Pd",
  "key23": "NEP6VwN7VihnaDFS6YWhjzBX1r8mqji266oqM7sDgPqyUQtCyd8f9JuX8oWdNQ3QBwNa5atC84Ja8w7ZzuB6uWK",
  "key24": "4FUzpvYdLZcGWoHv85r6xUGteQhPEHHvxvojrbvRnFnZXwiPW6CP12MHbnKh15PePZeNV5op4CAL4jFFuSivr5Xt",
  "key25": "3LQeFF6C1kCjPMhzstAnm8RFaozDKhuqoge4e9EiaiqPVVjPCeMWUAbYLeLfcWmbx2aQ98v9Fk9wnP5YUTdEwb1h",
  "key26": "3yt9nMGuDBygyFmSD6NxU7Aphau4gWeferLrfQGNvKJw3VFpjJZB6bEWAZm2Qtt5p8hxwaiKYdTpCG6PT7niLBh8",
  "key27": "3oPxiwFEmS4G3kFccDXRaFrBDDHm7LQrnq9pkAtATB5gC2JFBhT9d4EB2japmYTBkjw22xx5kRmQ1rc3WsQ6QcKX",
  "key28": "332B7tRc3ivKmYeV8FWydJHyhF9b1Qj7RnYZcQHYAyskjmBYz2jT5hyjhj5b9kSfknPY4a6o3kp2VbKFYaHqnmi7",
  "key29": "3ceQeoWw3e57tm8BGyRxRyeQC6LDPJjhBr42NpYsuY4wKe1pVy14GSd3c5pzkXc1wLUooeoF3ZNWBACLXLRqzsmk",
  "key30": "5npMG8GYh3M3pSPxAztse2K4WGqybgKttuubYbMouhPbxVvReGtEVv7C9oNJPHHxoXY4whBLJef15yPmKLmuEfdQ",
  "key31": "54NppjpZ3tmTR88uCeGYsutW2GW35qyroBgEsw2yBZwS6QoBBaGYaSbvuaNtVG8HmHvP1wCUS6rG2ENct5nnJbJx",
  "key32": "5vE7XvBMihYZBvtfXkcBPe3cSRkvZ5bC3WTxkfxFvuDZNWrFX33zEonx36V79fmw398Y4gdccKwE4Ecbs44em6Fr",
  "key33": "us2Ar6TW9MEkASAbGAJfDJQMmXzE6t6bunGacTCxKsGLY6vHYNkMKYR93FbD3STK4jtFqwUAQdpJhGcL9SJ1yp1",
  "key34": "33WQeamyzYsNytkmT85dF4bCJwoLEMbCaTSU1R2ENUsHa7ib6uVSBEvtGvHxBwSWLsdrPYQaouXvRoQEhMYziUh5",
  "key35": "Vyn7JrqCztqcB13Kn5zptj7hSTtnPu7M5WuRyHfXAZHaA2cSWsvJpooWHbJGCcoQTZJDxubJaEHvgkXk2iVEA8B",
  "key36": "pTkRgtZQM4V3XnRhhmrSLDJgzvjP52pkHDbePCcvy1DoevT7TUwnz13x8pbiCYU7hiej1mSjKge2dNoC5o5RRwN",
  "key37": "3gHmYaUKNPqPXcy9Jt9tAC7hQ7fAdHuCuPekzycdiV1bRXWMZMZhNVKUdptqya8fUfV7weWADioMwZVDwtZ1fq1o",
  "key38": "3eb7pCnDQUiBnPM4EtYH61p8JziMe3b1qcoB6cjE5A7Z7nzjpYcAnN1U4ho1ZTvYb2c3rUkf8WbxT3fZ4of26hzx",
  "key39": "3QhgjHUG1k4d8AUjuwxupJ3TJRK4AhPhP8F9KVMEf4M6jVTSpDkPQSAwhi4wDoVCakuwqMN6F6emz9HH4NZd8kKh",
  "key40": "TESL2sNyw1Q2WWMiJ9CMA2oe9pv9PtrcbpHXJKLyMfkPTFq9CJ5mGqn6Ak2bxiuP5NUxo7nW6ibxNraGXc9EK1L",
  "key41": "dusHa9UyJK6CXmQCGCXpFXRQHghgJCSYHykHms1heP2yxdo9cmYjw6EyNnjNhNqgomUuLsT6JDiM2XwV9Fpn9u9"
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
