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
    "3mDigohMYmEBxQ9S6xryxPBtSBSg1WWD1TjvCbdwTe25VNUkpSzsAr8kkHLzW4JFpiCTHRsmfVcrztHJXQVd6chd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2bk9knUUCFxcQiaMEGcd66A11RwVfkNr6LJosspoheucSmBnrs5xo5ZVm5bs13nQzaxfR4ume6t8ZjT6dWcdQnua",
  "key1": "22t518PGuNjZNDPA9A8UKb5MYW6ZCQ5derYhAsAXGdZYHio7keoEDYZ1cdS1Wx8B3g7warvDJsmV1rivtMzrKK41",
  "key2": "2sYcYwCLXY7QTNVAV3BaC2Yi9irCqr5tZXWbHbs3j9Ts55T5V7QdW76g9g3ThXkkdRnRTApnmPy4eo2T7ZgL8hq1",
  "key3": "1K6TtSkZjR3qDQJY83Kg781tFgdbzGSyEfYuwSyMmxk7RaE1DJ1e99WVocH1ktyNhYrymtVhCLXKLNaMEcLN9D4",
  "key4": "3BdarRaoZVtKZABbYrW1YuqnG3aGqjEt8hAi5pAedRoR7VvTWBy7TmMi7XS45NWvXMhRUvygza7uzSmRcqL9GM4W",
  "key5": "5gdiwCU33LfbQbgZ5hH3RbTGYXmqovaXdeXo5MvxJGFDVEY4GRzmE3Lj8DJYZJ4oJ2LGB4jYf79D1oW4LHHfKRj2",
  "key6": "5niBTo3ZSrzMQdSJDo1Xq3AaAqSE8NNPeWwGDJb9iQTiyqpTmQKh9GmZSD5yZNC2V8CbdGrG2aPH4YWaoGxM59MA",
  "key7": "2MzbmgLzGkWiycXu5eteQwRXYoQcaVzfmD5gmmVVARTRE25aMHQDEEbsqyRnL5nXQi9h8sH4SpL4nbXAAKaDhDh2",
  "key8": "5DNL4xEbUVb2TUarvdLH3Ftn1Wkr8E3C2kAcnJYZmmLbWDTb3QcjteK5D6i359BPi9pujGox2o2wpCtJx2Gt7o7N",
  "key9": "SS9BFeYj6SNXKUjKDCvjs2PTRBfTbV64s7csu4jdPreb8q14WLpsKy5qExB4fcwPfLbEfXPuiUHXb3yt827YfYM",
  "key10": "5QLifZaB3tbP3P3v5W9m8M3VxvMcgYxNX3UnTaJAuCDxMD36VTEf9uawbxFY9csw2kAdBdyjQ282bcKLBXMct594",
  "key11": "5JTo5zDgWqJJP5PjJ5UyrF5UmsXWEuZsuuY8DBhJAc7yuB45438RejV7Fx6TeBNZYGo8WwRDB4jPS3RcKyJfAeRG",
  "key12": "pXkFrN9fWrtLVzVNRWT59Wa6FV6Uw9H82qfwhsCbiXVGrN6CxMtQCsfcKw9132WEv6pRzf8bqMJuoTVJgtnJrr7",
  "key13": "ViDRSTEsgpS7xGy2hJHFCfGFJVhRZyksCLhHBAYqGEdLA5dkjbqVym3JduTLYXiKRJc8Z2aEommwX2E7eho2D9K",
  "key14": "38qzetwJ6Azk47Si3pjKt66F4zrbSShCkiJsFvrrEG3QFowfWjnJartT9emj4CfHuS9zbVCNvjWH45XHw9uUFuoU",
  "key15": "37GQrM1ypgc1ZwP9twUi6qcdgxKX9Ciz3o76Hiu6kdNi6N8iqCPenPdSuHCsZoxaL97qgpY4KBPtk6VdncYVGM8M",
  "key16": "5tDzphpH1QSEZ7sKboPSS2mPLNf15AgVJ4XtAo8cGC7EtAxwbFr1cyEa2qHTWFuQzo3EQBVQeiyZxFaHePrqk1od",
  "key17": "5gPN13ybfH8avAv8cVVWMD5hwM88SPCauLbaQwvatTLScECP9CQdijHuRqFUgtyo18egN6C6KmyQobs7GqBfvWar",
  "key18": "2tSt4PL5qkwRsxubqgSsJS5igL21uWnjsvDZdAZhJjhEqc6T9C7V2EQX8NPb3P1kcsazvSFzCYso1TusXVEZ2qpb",
  "key19": "287bZG2aK1K5QTi5GEUjNwN9eETF6BRnAya6yZt19PpkGBWJSn2fgtMK6bHP3rkDNyHPfu5MbGMVy5YzxcigVgyi",
  "key20": "3asRbXGzACywaitrMbmgJauGePyShEagBoxnChHxyqYPKvDtE4C2uzC3uufQgAiyFyyn78xRm8o8z2332NtsnTVT",
  "key21": "g8uyPXD9XnMDPXtBgnjiqKwcnAhsJb1yHicWRUpCTjtcrMBpqGNi3wHR84dYdyWWGTMja8qYswBNgZ5mei6nbRK",
  "key22": "3jxj4TJdDUyJcFAVdz3CFiY4poTMojmB7pnSfjPgmecnApwQY1BFF5ArbL4zFFTwAi9W1eyTxXdKvNePqYoQxSzo",
  "key23": "4WFurCd7mV9bih4soyHGQa81FMT1MTYuaAQXLyNVpA7eMRXZKaw2vEKc2XNUt7pVp4XaTaXDvGx7o9AhoH9RcquF",
  "key24": "2JHxVVJ1rAK6HFFNB2urf7wFBYj2GAxS2aRKA3fe4W8oFnqjpF9MQRW9wAGMoxaUA8EBRh1VBHQDPy4czuoRADr4",
  "key25": "LwEm5MT8m243uLKUsPfjfLMeKux33aKCpZfTypHJ2Bg5tyCWX1E7f3SsmuhNxbbet7tdfmrWgopZi5Xhbu6CB7J",
  "key26": "3VXKWw5pGgZfChRaw1vUFUtD1sj3hqoG9axvKLRRwnxJJ7YfAL3tRzxzYJaKNLG7si7UXungnFuipVxgKwoKA3XS",
  "key27": "xrQGm2ZsYqJUU3JvDxA6yUjYzRGFJr4dBST3RUnmv5YyGS99CoBQC2bhe6oeUZygmmnm7Exjhmn1ucvVotpF84s",
  "key28": "5A3JE6NKC3svkprkT9fdTeou3U5jxZUd8BnEbyycYzgQH4jxELgqZ7ZMZtCRvUcBJBktiFuKhqAtUyypuX1afgMn",
  "key29": "63bHuvxCowwst5W24TvPmzC36xfag7aMP1acGuhGnobS5NuupPA9AfbYiK2VDUpAQVrfjngZy8ZdW39RYEUF7i4o",
  "key30": "tkrpw5doSfkJxfkPMdp4nncLHmjV5UgunmLypDyzfAYGEiuLjmWsYuAL95tSDskscobwyvNvLbKfMEtHmCzMwGW",
  "key31": "Lrn1ibK8ocF3Co7gpDocGRRpbCxkT8mUiuTyfUCxsmgzeZHP7C9sfiiJr2A7M3aoNQuQqFdZ5mPddSNrUvVY6PB",
  "key32": "4yvdPrzKbHeEJGirgc7B7AfkUykVsCZ7ftuNPAgL3UU84cgavoNN6WMTbS881WNRQXA53EgRAG1JXpQUHjJoes58",
  "key33": "5gZf7WzmXPymNxpC8vcUXX63jdY12oZNgtfCGN1rsp81zUmZsJcjMvyVsRYu1tCvav3Gsm185yDW1mJHiwAkoYNB",
  "key34": "3EQg1qZ2jQFxCu8iV2TrojZ2LTesaCFruwwRGsxyNfDdooEBQWaApcApuxZtB32GPQm2u8KXqugwAcojmPKpL8Kc"
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
