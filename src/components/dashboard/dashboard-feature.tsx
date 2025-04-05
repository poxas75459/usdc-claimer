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
    "5AtLeXitkDtFHhKKYj765EgBvPh5xc14ixufM9bzWc268PKDFifg5rWFwMZK1RGHuRdRqKsw82QZJUrTWHSPfrRa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4MQigV7nJg8RhUvzHoCacj6M966TEmhicKhCxTSbY1Dg4Fw6ymraheHx8ajLBqRV73Dsx2m5xLjid6v2wYZBYFkg",
  "key1": "5AEz8k1Vs1Qw97YPR9up9jf6MT1xJ5Yq24C7KDuXfYRHjZFnoCzMsPdLGE5LcAA4ZJ5R8xoqTQ766C4LoVUWQMA6",
  "key2": "5xTrpWKF6E4eP5HnXnub3HMJE7u6VExpmuZL6oym41K9eokk2Xa9ZXYQ2wefjGrHoyBj1BWuz6npBZsziPJpeMVZ",
  "key3": "4et99fz9ib2HLVHcz9PfHh6sfrzA1FVMypcRgzLzYVg32PGdJ9CxMJNEnAcgsPQ657xM3b1Te7AaxxVpXwUW3JUS",
  "key4": "RrPUn53SDMVdARBzz2kwYdWBfKwmiU31FffKoRmH5fn1LmkHjKj2T83h4HTJHtCD5ZDWkYcAuFwDyoW6LmMeiNu",
  "key5": "38CVbpA5CjUSU3wKUpUNiwFtwLpe8nYPPtgFVq3dVWhKgUGDMg1o14CwFrbZcb2v7KBTZc7FAjFJF5PLcKQET26N",
  "key6": "67ZCtcLevj6VFKY5iHsYpreFxWRL12wEnpePYo4GGJ2mZoNaB84ZpVDpjAbWt37xPsU32qd3S2mHvfuS6FtRjTxz",
  "key7": "UKGWKNcPyKMtjZJd6VdxfT7VbnU47J9ZLZTjgeFYE3pYHt63DyiRzXZW2C1TedCPMxYxyNDD2Xf8U92nY8mhszj",
  "key8": "3T3D5hZfWjEz3FjnRsKGt54YFkM7UvQRBEcUQAVduhpAQaRpRRkL7AeScfzY2WxKtXCRCiLfDbmV87X48ykJ6Ftm",
  "key9": "3TnzbhgTvvpQ88LfCgGikDLf9PZCXCXenaqGgbzG4tuTzo75FicmnLnMeBTbCP32enBbioxugZBRUNzzmoDSk4tL",
  "key10": "3huaWjke1ydEwHXH36zWSoLUSKM6E8Ut2nhQa1TmaZ36iqcHzQm98txgenncVpBwGh99GJ5YX78du39WtXrjj4HM",
  "key11": "2Rp2nZeBnT5auq97CovhYyGnoaaeZCqhK6QuZLsPqSwJQsK4iQVcDsdFAuz2NZAAq5PBcppV2q56TDNLBhgGCp71",
  "key12": "4yTtQRrycULphiL7j8fH39ZMQR5oPboKfvv9yRHQLxxrwZu5ks6rdGoCYJ6i8ariCcqr3mvBs2HJeXmDByQWnfLv",
  "key13": "4GhNSxBUnujBcXhksXXgJYFaTJ4vQzK52LWR3zx4EJMHG3LQELeZjdnjPgiauWu5EcAaX8w1AEPbdRLk1X914Zmy",
  "key14": "5NkEpyrB3ojqUNBST9YG6soEDmsDb9gyra2kkoeZaqqe2Ddt3TEj6qWJo8rKfdRjemcJDywhjFBcVhgqiQfnhnHr",
  "key15": "5vWhqpYizGNVDt3ASncqnmM8nFrbZVrntukBjnJALNtXQq5Whc9CbTDxQ6Uo1wBGXtwRwobrFTkYnCsXbGFE1JYz",
  "key16": "MPF7xERgzSAq2Yv5tanRxLZ7eCpaSV8BN66KMTXaX9dvsXh7oiSZ3WxuHkD96PF6aPuKYXet3XrVf19nY9kEN1z",
  "key17": "5ew4UkB3zu5iqAv37BftPydgqgcTohzSaSihBJ7cmGdWswWDqrBE65Voddu3cpiPCGnxrp3iwW2enJM8LkJwYzt2",
  "key18": "5EUMmbSBn9ctTsoACth4rbGGGq7KM455bsUVzM66awmXRsJEc9cezJTRK9GfNDzVqZtfC7bsqmdtDM994wt4DM6o",
  "key19": "3818F2jWyhkFiXHhED5gVB9ELiWMV3UdtFXMD7nNcbDgi21F6YTB2VNPHJyfLKkgVNKknYQ6tcZe7PAuwbG1MGd7",
  "key20": "4p8uFbv1vPnZ3FjgwkihUpfWBUg3x5ecvUTabQaM89AqC5HGGwbci35R71Lnc64tBHtJqKeRwBJW3s7PeKn5kyDd",
  "key21": "4wk5s36Sx48ukznEV65sqpYfZPQxfanehnNFEyjoZUXNxfzKD9NtBMawS6gjtiCPrpmswc9z47DpqmujLAhaz8Eu",
  "key22": "cEJ9ULkn31ncEmGMy688VjdPPawi7WRMe5sb6mANW7DsubLukc656iLLNMPHJVATPuk7ryDYkswDF5dgJcFrDfX",
  "key23": "3GNYdfEEc3zU1G1prDvZrB4pC1wRaC55sjyP4h1Zza3w6u4GNxyARuzX6DKBfp2NfVGbqo97ZFFVBhG14PhmNbuq",
  "key24": "4yFtg3RKMAgWoLKCJYWpPX8YiLNS2i2KUskWpQgUxsXPuUSuhFAXkp2dr5bxuFUdkzUCPScXkfinVZzMBvtgUXZS",
  "key25": "K7hncxo2n7VLhuWgYCFNUCh31q1nvgEbAepBbCUjDwc4NNvCxtDpNZcjAqovyWkSsYcguCPtszvuQYCBik5by4p",
  "key26": "5X1ejxnNVV6YhP4Awhmew2VJHSqSV62Lm6sN3zQ5hNHFw7EkcdXssiR11QXtwSQyZE1a3EHcmyEZ3rKXCULE6cjt",
  "key27": "242YT8LcJY2HWqxBehbfPLvi5uhLjcpg4FzFTy5qSDaKudEGPhRL1AkReA8PiatZPhSzFm1JDG5wJB36NtFQmdEC",
  "key28": "j5q6o9HDCLS6MBwtyUQDzSsjYVyA3ugCSU4PZuybsaxmsrgV8yjx4sZpNUjHN88s9ijVmcuTdSoURozocYU72Qp",
  "key29": "5BdUesrLCFCAyZVaohct23rWDvbaPP2m1mSoc2ycHqFURjZNTqMPyoxhDFrNw59YHM1eSLHrNKGnh6HzAiDqn3oe",
  "key30": "LYGJhik4qhbAmy7UrQmW6D8J5riTzRbvENSnnUJB9AyFjM4YUcwHym9HT5oqNoxogCLBg5DKJjJEbBxSsJXpzcy",
  "key31": "3Gy3d8E2Casj4bEykZfhVBVsqK3aFJ4a1CXdVwUJMU4QECcvYLxWYn4oXZ3ZRr3Z7nbynyAbnRQ3KzifgR5YQe9N",
  "key32": "49vLiyKnp54fHxpeqXJNBgeEaRYjwnLJF221cJ2wYcPt7jxo3aqgwfwZ1yh1MxRxMsVG1szztgQBEW6jE8UFGvcm",
  "key33": "pwJxYKy8R4FKxEc756oBiAnrNr4vYxMGWdWjG7czDtKesKS3XUmAFBn6g3j6qQuhYU2wUHHd8h8KKDZywgdZqKJ",
  "key34": "33kvntxbnPXia6AUhnC6HrojtpaTLxHguB1fcyNtEJKw9cugETSMhBPR6TKdsFFCgtThPGu4Lm5QT2XHhv5cZ7Sy",
  "key35": "4ZHvFxLKU7bekz6KU2mZjutyJrYq7GV8wXyXnz9ze1Bsc8rFiwoyVY5zSUbMAvTcPV8435McWLf3cvDtutVzCi5M",
  "key36": "2okLrqT48vAEx1ReNVaZnisupEWknC8Abd9Kxc9T26iZmsP2YdkgQrMRPdKuvNdspcdcxCvqZ2XCPDUpC7VvUAJ1",
  "key37": "5zXaAjVfnRPW33CY427e5BGDKsNTPTFawu9F2cCHT7tYUJ59aJvtULbNHAaZbhUNVsdbipBNcHruji4jukdwqk5b",
  "key38": "46ZgxvrBQHbhyseBrTgJ2taLCVD15XYFyW9JurfH7fNPgZUKAm979kRrGDj4FCsQwVNowWmxjE1XrQfSRcviV4wY",
  "key39": "2NhCHs4uvRmAPpHJd86sGvvQurVFcoPAxmfF6BHwnB7DCBoSvWC83eTK1LFS5TwLoLbQd53z5XBp4XPjnt2bi1iN",
  "key40": "4G7RFqHV8A3GiezaDqb1kJLawYR6p9HLRthKJKHT6xNft2BHrYLCoGJ43xod2EEoqkvmAyDMHy6v2kuaVa16YVz7"
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
