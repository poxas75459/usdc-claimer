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
    "4Dfb9VezpEvgrRRaTRnLj2R7Eh4z4YihthFGZqxhq9okD7mZVbiSm22ra5DcJRHJQi2jEnpUPgMUD1X1yfpoyYRM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qdNBRjxdyP8rgSj3HwzuhbaVphQFuLDXQkJ2k6nc728iZ4ff8xWmY8qxAaix9rUUMBCf4ogLrP5kQkLQSohGF3P",
  "key1": "5FN2ufWAySZfXZLFcWxZY3fYEeRzaG2mXbFXWZro1UKCs9fUjRQKrzwm9vpqMovsb7FXfyntDFwpcCERuxPJwUfy",
  "key2": "4ja1tJS5vd8Lu2CARQaSoXSXddKDwShqdUqaN8ZWzQLL69G75uoFKQtR4B1AUsgT6HqaZaYwMHCeNC8Th2w9qPgN",
  "key3": "4GJCyj9Ds8wkkpKH1ofTey7K6MbDpSkpb9A3jhKchnycfTw3d87byi22rgoPPDMUtB4TnzAte52rprVkvo1z1EXs",
  "key4": "4Je1e8HFuhEiht1J9w9rxw7JCZy85yBkeMX12A2ZvoYYeGoeup6frNqoesx8Je4ymYsP2TQUNqk2QUPLScjqV8Eo",
  "key5": "JhmgiHRF5u8p4x75Dw9726B9m5XkSUacWif3NbMmPC4KdBNPJRcXMXknbEjhsRqsmZWYmUcK47dDpeMtDQrKEvJ",
  "key6": "3UScu9XtKArKuJmiTmGJPGBcqiEpxriAiSkaShKBLvr8NHWHAhbfwGjbazNugK7nkZScbcKqxFEnGTVudhHBZLJy",
  "key7": "65pi9gVbcgoKJLuidmJXrkRYHZfUfKNSaKXCUsdMdqt3c7GC2ovKvfxBztir5mJQNhDPN7dJknyLJVkfBXD1dVKC",
  "key8": "3UQ8ZcN6wERLeQA1PdM69cRkk3t5vCgJuuRkWtb213w1pdRgzeCbHyxPLk78DUeMxtZjNMKHJ94Hq2Go3KoCH6Xw",
  "key9": "TeL93HXip75ivDY9zPV7PTDMM2Aq2iKM2q2uuePyzQ75RKj9ip58DpYqCvc1N98cTSQUCDW7fTEK4JpPp7jNHxp",
  "key10": "4h5X8pHDjVwXpgiAfPSobHFJ7q5wL9Jtd6zqwFd8vfgTDdQ18ea739PEcgM2ogP1DuNj9ewppk3nNiAYgD6cu8oh",
  "key11": "23uYBFtznYPBri8s7tWCqChSDbmtoY6YXBojySTVPgxeBvUwK43YsbL3ewEecKysS8GZc4rmUyyVRJZN7LNWMCZd",
  "key12": "56MHqLt9LLwJJmyHwhdLve5HbqhynRqCREAAyAZ3j93s52HY7w3ZPjNeia9s9ogi9Vmvj56M4NqoWpNS39JNUS38",
  "key13": "5iBc8xHvUEE1hszwwaRgPXwTRyH5YaChtbX9SZ8tuzTq78KnNu5G2dQYmY6fhFJnjSsp1W9QBf9QDcAmh2KCU7sm",
  "key14": "57t3W6wSyd1ism6eoeLFRSVkapV27iQtgCh4pV641Bt2gixuCp4GB2QXS4mGo2Gdc82JXMJ8mBiohLXi2jHBASPv",
  "key15": "5zsgtvGeGVqwUc9QLJjKRoHy2rfEEuT2wZQ7kx8sYHbNJnzawqXNEHx8seuLUqnkxZBTibGm3GRx3TA7XKZUAfCa",
  "key16": "2ZQ2wB3XHmxAgbNoj5gF1BiteVXyNdibzg3GSGeCdxJ9LyhkWDvGr5ncfqE6hMutRuZ6gx52B5NfMf1mJrQwFbUC",
  "key17": "2PhCpgZxTDk4aYKX9ZRQyJp7UQVDbh6xCLCRtPmNYyTGE9sTVti7VZF7AeMHukRbU2RumRRYbbSSv89cpdVtKkEt",
  "key18": "2fr9eizB4e8U4rguAT7PfyNLBoomUQryZq1o1quN5eT6dzmmhtXUNk97cpoPBu14WFnE4FjTM5oVhdgJeYWUzwyj",
  "key19": "2mE4RAb1HgUdbKqKxWAeNXRhQENMk3jmVxvHDhkC2BY4u9aunMATarNnoQNVySDW7aKBhSrLuopDS4nM2TUrnfXF",
  "key20": "4oM4u7BTojAMh7t8bZv7npAk5WYWq5Yviw6bs3rQFrrmqVFmARLsBr6EK5yhCFNtCeXht68mg2mivUjS2x6kkzke",
  "key21": "5SRYNvF9ekckKDeTBLdLiL7vbLReRB5D2PQjt1JQM8PuTwLjWgEMFakXPLYAQXwwEJ8GD1ZW4V4BCNuahb8Chuou",
  "key22": "32J4hbSxhHA61psZxgdDxdm6UWNiF5xdTTwAZfuGu5Zca216ZW7DBDS2BR3TWaY1EBAJhyCPUc2CHCP2KWPwhXqo",
  "key23": "4b7itoMPiSbXxxVf1XxdMTb9VAtEiBUkF3Pr9YEKFmiQEzZg9sCu7DrKkdDdMSQT9rp4mezqdmMxVf4dVmWSHxwk",
  "key24": "2gaVTrRYLbPoTXDxHHktSvkv6HQ5ZuGZBSPBnCx7u2q1AKxBT7udBndgss5gVguxUyTo3h9YkH8zYCXrnKQQJfcs",
  "key25": "2Gn9GmGYpREuo4yMo7mqHJMFznwJS2nGvfyUocfuoH9AVMpWa8FqvcWx8FPe4hjSRPYbWVMrmAuZ3byhYHQRAjQB",
  "key26": "4ZzcXbxtapF5AJCRXkQ57BvcYTxQWuckK3BZmuarD1SYz5Zgixed982LWFFZuemhdXwTgHrTt5ePk4TJ1QSp6o6m",
  "key27": "4HAj3ZNuJz12P5XGZHRiRvyA7PgUyhuARKjWkoqLGzEh9XTh1grpCRJQMutJzsKZKR3Ad2Eg7GyCPL3BzyELVTWY",
  "key28": "4ib1QrHhQeBYtxcQZnD131jZXcewu9W1KHwhJNhSGSiKrzsA1Co6hyZmyu9EJqAGhGJ9CwPSusdd6taM1DLjvnGk",
  "key29": "3FmJfmCQdHZUhZjdx7SnBrvcEv5qVaHLt47RBqAQPJiXvyuC3RgcHo7ThNvBenfeyg2etFF1ESPSEPwGiDsmsdKm",
  "key30": "3CLq8UvdEpbsNzMnC4dQYuZUkHpCFtW7M8e3JviHR2jQjYQgG82otjNeWr8AVKik2snkHFfQFKLkGNsYzg79xkcb",
  "key31": "tTWTgmK4m7CYf6VmkncFG7Gf6fwETFXKY2M1WyKNQgzdjgj4zFcRomDVGWfs31PZHVsaA8JFrBoZ8398gU4YVjz",
  "key32": "4tgjEKqcDBfH4fNhcEJzcDj3nNGEVotaV5AXQWHxgh3s4jwuqVTi4T5msSVd2HL93vQ79jKF4yNuNTWyoGw3XSze",
  "key33": "3ABxqaj7e1TwGV4YRzDZnhyYH9NFQX12j6TE19GqBiu87mKKUL9jKjKSm757fHzvE3JLXByqPAvygJpnrhJ9W9id",
  "key34": "3sk4h2xFRzqERnkidBZPm2YpRT5U5w4qmYWfms9dMHpuqy17NqUukk6LJwnoxV3KR1XmZQ6ARtGeeeX1RPeELEqk",
  "key35": "Ky3eY9wDYe6AS1Xh1yZttRfCv4g8PZm5cxu9ukeJ9mikGSwQDLWNzevW9mMXHbuSf5dwFvVgMLg9Uthisvpdvpu",
  "key36": "3RXHib339vrEUWXc6t7igRSxtmWmFSwLBkZ54yG9xRh4KESFLi5YW8ef2JNJKQku6gGjmZCYw8JmEvh8WT9ef2wT",
  "key37": "2SJwRyUKQycx3jc4yP2TTMjtZHZTGpM2EvzeDj2kJnynWJ4os7dDr3gFeNaCfZXwj3fshvirnEtpiHYhFWR7Urdh",
  "key38": "VAD26jbSbTLeixCRPwQbJjD3Dkik32CsChMkHvFGgu1xRGzM1efVYhj2rb15F4JnFh4gMBznWE54cSeDfpLrwv1",
  "key39": "4WKTg93fmbW13YZZoZWeWfWxy9G9cKa9gMX4sBxx6eev1fEhGEMWBroUW1DDbwqTDwFMYLDJj4yL8w2zhf3chsC4",
  "key40": "2aWX1k7zDaQ4t1LKfGsQPMv5Gkj5wkj8BieKXRPS17Nnedr5SCJ6gQiFVwX3G3QZzyt8vaLnHgszALiHqkAGQ8fS",
  "key41": "EWwR4Mh42TyBfUzksocGSwMDJeHWrDoyM7F5jxv2kUtMHwnNZqU59RjTwz7ZqVE9NZjnTmntUbhreTe4bRYNR68"
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
