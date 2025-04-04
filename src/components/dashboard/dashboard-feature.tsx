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
    "WZYh48JWYoDLPhNy7CZ95GjhWWUHHJhRNVYLRsrUfPcvh4zBfYi88r8vPiPaxGn7u177FAc1b1bF7qW7Zuat3Sx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qFTv4LfqR9bBzFuYGHZ7WbbtCvHofVM37EmPVw3ap9S1V5MBquxYe9wAX7oh2YhhsLJ6ARtpVL5xHnNCGfPFarQ",
  "key1": "3dHWAEA1k5o6H6N3DpHwPr4y6vmSrdkgGtnCNEvYpjSjdofBvV8tyj2iqfkDAYxA9rf8q4HLqQCJsmV15eW3jNTy",
  "key2": "67cegg9YvfXXdaTiQ1rTWSQJuHoLB3KhduysPBP28brWPPxPnjuXerkMaJ8DnFj6KmtbnPc6jbej4YQk5Jj4zAdw",
  "key3": "4RvZeqAB5wxKNd4Ti5wj3dRL9oPEmoPfvd6KAZUDWjtV6j2ECGMNYqQiCkpyhXUF4YQKPKATud9jCXMnUTFeSQ7M",
  "key4": "4xoBertcGXuMH4YCstkoSsNCPyKymTsQjq86LG2hs41MiFA25AfthLSomPqhnUhRXg4V91Wx6vHjkRuSXrs5o2XB",
  "key5": "3GHFa6QKFpYpt45uHxBwEPwzyFShkgc8eZn1NZmWB9v29AV4mTHpLYrn5w7sbVJVqutzN2hUCxbVoZVoC1ugPxym",
  "key6": "JqeqDfmCmVc5fca6SsJ65vEE32Sb9xdPByGdiivYHEf7NrrojUfEHufP41Q9qgvQTdz3wymaLn9GxK6yLEuFWaj",
  "key7": "579L6LbQm8LKJZcHFvtFDCP8CiZGjv28ufosd2MbFTbxF72hYMnUtANGPGtNy4VYvY5zUB8GZAqfhB3f5Kyeje66",
  "key8": "zBbj7oGS4sdE599Ww8JusZj4uRxZB5syv7qRqyLRViyZa964Zpejx922Y3d13rC4hVooaxvvhpV5mjbgfUMhBcc",
  "key9": "1hJht9vb5Qcs5ukH7YLgMLfiT5485aPwnC573twU14hfFJWtY2pQebum2XGaZiETwTymxUNKwCamjn1b8zd6iEf",
  "key10": "oK5cfvgnx5Z7GZP4DW24hj94VeUnBgNGySxtf1KU23ZAuZ9RarrS55VQQfgJ1kRDsp7X6SR9S3xov83mFJsbDS1",
  "key11": "4rETRmTLRNweMBJQ6rDu63vnXFPJdH7Qs9Ux8gc1kajLnGMjk3WpZWdXduo4QW3JP1c4Vje5RkT8rDbk719kCn3b",
  "key12": "2KqKHXTT65oRg2RZZabfBzof5EaTibn1UXbWpFyD4WwHRcBvSdGJu1fZ2pWKQAspz7LXUi6MuPLX7KjZA18Xahph",
  "key13": "5aTHNC7TQK1Zp5dAtisfnJy5j3oZH8Bjwg2i13fMkJvFBoBLAbMawPhfXMiu8D4d9vKGMvetzTiVdUiHdAjv2Cph",
  "key14": "2L1qYLLgsLbb1QS2WGn8VZ3GU2NScUzN5uENkrnzBQRRz4eRN9TGsb83u93XaivHLTTXhTxdaZRWt1s9Cw913tSr",
  "key15": "64MQpvuAX8jLZyNgDdwZa6FXxh8xb7Wyp2kbRGPtomggqCFMxb1f5qUC3MCgH69cktHcsqSLXAQug7UynzWQMLoC",
  "key16": "65Y7bkLzEVsh8jd19fVTHJxUdKANAYyzbpTZuNpCLmTUE2My84DaMMKqmFy4aYXjB8RruTnDeQapqHz2t3ixuWVm",
  "key17": "2sx8fyosA2Ho93mWkbJdepe5Se26v5BiBAcLN9oJBfS5QWpTxHfoEQ1h2r8ZP8o8D8PzQiL9FZoykAazpCm1CuxJ",
  "key18": "2XXRdkKCbtGVyCLceLR4mhSQf7KuXDGaL2qtjiqzsnPV1X2vB6hM8vArBTDVu3rXsFZj64v6aqW2vGX3XGpN7Jki",
  "key19": "36H8ebAzN4XkJrrHXWab6XzAAzFN3vHAmejPcmv5cZ1S33ADNKrYfMf5mnY9DDpq8aHAkiYXQC2mwchCbEMG3nSN",
  "key20": "5SH7teSARA4hrpRhH8NTEuHwazpbiU1Uie1C7RcPoS14aSo5gGzyLHPbUyjRRGSY5D21YZEFiqxwRWc7yzBHKhwq",
  "key21": "48ytxnxWmvtiFvMFP2swskAN9AS9euGAfxsekbnkmQZiXNU271gjn5Jt4S7zAkPAy8ak5htWAfjeuTtMuiNrtDqV",
  "key22": "3Tf2tF55xuyPVPs7oW4m1Hm1ze1cvjBN3KVYg5uYqD1ZAH56VBUAzXQSReKBFNJesRD55UFBoGKmFwy1UaNSGE6B",
  "key23": "u7e9vGneTS91DZ3RZnvZiH6ZxW1T3g16Gi1WZmnFXH6M32HuoBj9xNEPM79SnuNWT2kVXrgmhRfLSZfneDWfvZX",
  "key24": "PW6xbZpZo7H9nQ8Nnyv3Y49bKwnkCS23CWu6kdv7hrz1HdmPyRRZPPFZdmYxvYWMgvaffdb9hr6ZtdN8rB41ni5",
  "key25": "2ZHxgbEaD4aHEsiBy95wAgBbkeAA9iFLdoPUxXCHH2o2qxrqCRxkzjqFqRVgebn5M1DF42rhEX3LwdeXAbsrEEpF",
  "key26": "3UPwg9YSPP6yaSX5c93KwJsskb17HiU4NRnwLEPY7FHTqKzD42wF4QXCqHVe5L4SqUJq388EjTFhozBz7jQTKvHV",
  "key27": "2PKkHZjio13qoRdypyuC5E6p8nX2LfjcG7y4qwsZpAMtmkdqCnPpMaJYMdtZ9SysdTuVgNgGevcvCpodwitBGXL8",
  "key28": "2bkn3ErfsaWiLepKtVKxogsf7EYk6i36c2N5g9zrdkYhyMkG3a8zUFVqBP4h5sDT9Kmxt9nXUsVgSNYJWukAkd6a",
  "key29": "3voXFrEeuBkDQJyTv9STHeouCwGwkktJ7Q6bwSGoEPAhQxEcJtcxfQSTHd9v4kzjzEaa7q7ksNcqJKYwDM58idSq",
  "key30": "5SL6U842w58fH2GiK9EkEhamrtYgpYRufPPjvUKLMereg5MGB8HduyL3f83QTdHHwfzK2FHsSGNZD3VFq4pPAEwS",
  "key31": "VZVNjRVjcJkj3Sm78SWB3zwkEH2FnvVKrkWRRoEG4X7xYLqRadNyTZhoNBbYKJefzsMyJvGFJotADbCWjYBzvb3",
  "key32": "4SyS5zmrmkFXPbrMGDtcNxTiNig1qLNrYUd9bk2ycvSBgSSdUyi6jvYFA6GGwv39hGGES5mpULL6rnsxPaLst6Q4",
  "key33": "2ezrWvjN9Ae9HN4N1Mcu1XmUs8X3L2UVWRLF28fHSmkizMFLbqndL2d738pwFRvpKC8w4kbu59DfFvtGX7CSfBgh",
  "key34": "3wYT1UA47BhJ4YHF8fZydGp9fLvXn4ar8pLwSziWNF5JNH9AiFb8LEyBW8QQk8KmZYs7eWvGAFEjtnSSGfyypygJ",
  "key35": "Vs97PMvL51NG7cWjWGy7AijUCfmyp7YKwrVNuk3XpqRs43AqEGL6NwjmECMufbkNfpDbFbsmLKx4RVfLaBXV2Mb",
  "key36": "4GeTTDvQBWxtzVj8qus4PhjqR89SLSdjuFBBcznESfuSwQM5tEcsvbYv8MywCAS84mA7czNF5C1JSHzaa6kGWJip",
  "key37": "4342ddAGWERdQQzNpihxKzXJdvso3KeQ1FLYsqwJCGYQ7N8ADmedMaqVSonw1iH5WR2Ne48JyY1jfqd3UnwVYxGb",
  "key38": "3PueJCTybSsjF55vkxnzxKMUSF4LPLW4BVV68rdvV4JL9AH6rXectWzCp6HmMMwK2nh1nWFnAMGUfwyTWBt8qQzu",
  "key39": "2fv5HkLAKZsc3yg9ncMxc428BkqrTtW67JoZEYd11CD2zV9y5wTwft6FmHGYweX9JTBsnhuwfDESfA6k3z5QzCFa",
  "key40": "2do3cWm5WvH3rzciPrEpyTx11X3szwrWcD3oFxRYK4cUGPzzkjsVy2iX77wUxfrtvTP3zUsGZuu8uX6HmqCgCpLf"
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
