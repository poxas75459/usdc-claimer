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
    "3ktwkjMNXDVqeZjXuQiWydijEbBDFVe7XcGP6zLzSYTeXpCjZHYMov5dVAk3tZawmLhzzq6ZmYCVfzRU7Avfqmk8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4CYeRatG6UPc6rdn8mXZcYbjTXqNeAdzcpRKLeuEPaF6HrUAXC9nFuxsq8GfxZjiM8idR3HMbqVroLNzSs9ePt7u",
  "key1": "52ARqopDiwJgEW1HEgX33ypqdTenK1ahNW7ia3E1UPJKTBKmTdBkWcPrXo7dtfBn21bVUqTszQVUXfjtuwySiveC",
  "key2": "YCbjsAVV7fPg4qMV4RzLcGa3k7ofmPqpbvgttLF1Bt2FRnTfxLCpepn7ANjhH64tc1aUPzW1rWd55YUu4pNp2RE",
  "key3": "4eH4w6eCZLtFT3w86a5yahmEMj1xRzEhjR4YCMvT7pd7QwTxfoxTMWNkEivAVoERsY6FpUZCbH2VoYfUbka67im8",
  "key4": "2A67dXPFjEAk3t4hcxnBkqzUAEWNU3M3i4A6Nvg13vGhwTtJ5vobUVi6bL6m9NAUX6xknqUrk9SNRn59J5eLFhD9",
  "key5": "Cz85HMTi3YFuN77n74sQK3ViQu89EnkmFAroNxWrEvVejQQ38wXqVNdyk8KK3Ms7bkDk8zU1aue9XhWui5PrAML",
  "key6": "3efyFboemhAsoJXxUHYYiKzAhqD47nXM5Khepimj5tPtooGov93JtznCgRqU1N8CAghiz8zhdFRAEnC3bvbAoJkk",
  "key7": "4oQyF592KJmsWJFMMfdWsrpjFoYA5RnBkkgoxZkoeCKswgTpiBTq4zghD5sowEdSiVAKuT7yzoPXTPoXtabZunzp",
  "key8": "39FKDqcWo7sCofA2dAVrmgcy7StTE9one1Fr8QWcYSZzupPZen8ccSPNJRKeWFBM54zhmEpnaVqwXJoNYFJ9Y4Fd",
  "key9": "1MwpJ7KQoNKEQq927D3CkBUt3hDyKRXyMLbwTWYRzKs5HmwjhxqTH5GarNtAi52VpiKr46W7zUckdgqmDacFFiK",
  "key10": "DakWLfigYEqLfqVs5BZe7kcUgGjeGu1FyVVm6PX6rwoMrCuQGPYYU2FPVhEcsShENWLDEdEFC6tMUy6RJbcxpM4",
  "key11": "2Yc7Mj3TwqDk9jXcdBBwsYaA5mN6uuw6xivf9Hn9GMjH5ezk8QvHbZ2D1fxZBEWDQZf6yQGdJZCNTcg1MVpLu8mD",
  "key12": "yeSQQ4cLqw8oNXqyCZYpsGG8D5eKHPAJfaA2Nu5veHkKvVkPCV1aD6u3qSvDERQtYgpzw6fvyCG1dGBxUN96dUL",
  "key13": "3yn8cCR3Fb5wJtGCGYV7eZv2GxXM5trSAjQqaM4UnMrB97xLaJwADLg8dJw6J7vNMU4AaaFYvZ1HL9e9yrPSZqMc",
  "key14": "3wRjddC5e9whqLbcMLa9WLF9DevFCEyqw8p5Vmwni6sFh4QtuLperA4xrVsmR5BFo2BqtrTUoy2ehZWBuDmHrrVr",
  "key15": "29G26r1315EcqxQVcvtGasfQtF87bLTxYwPtwkrXEZZh6zavURVgU3n6Kmot4ab1XJNZx4PQp5iruPPfE2KmAcRs",
  "key16": "4gYfLFoyracsPnBSMYEApoEaYVe6tbEZWYakffehABrRroJzJepbFqukDjjuNjY4PUpiar5N5Bw8GmaCovLUJ252",
  "key17": "QS4Ro7HnhJS6chyVxwQvA5wtuSkJ1v8p1qos4vAGfJYCGJnC7u8WJcroZP9GQGsYCRmtapredJ2ZNrsCuxSz1Ka",
  "key18": "5zpHPv6Gq7eoAzfKRkjxdaEP9e8DmZWq5mo58q3wkfm3R4vs9a742NAYNyarJR7ifSyJchGxwJ66KQZP7LSeiZjM",
  "key19": "4PEvu8ripCT7uZ7317voe4qujBogiqvSa8oCKVNmroJv3PddgNLiiPy54qv4VUJ7ZimhdxH79A9TLhZt3rKSkuam",
  "key20": "62oN6PyNUKBKvCR99Xz1ypP1t2sMd2DoiY4xgUpWoNR6aQeawW7jPNFSypjpiDKExXJ7tizh6SgwBBpWDKddLvTh",
  "key21": "r13bwJZ35DfffYJJVGjvFmTQSxERscu3Y9uQm2TQ5Sv7D1zt8wYXqfk2JQTiMntMeNPmJbjVFNoT2w2nDZaP7Ug",
  "key22": "5veUkhCcPzXGCXc5jcSx5JDd9eUH8khGgBe5z6z4tY9WmAGyA3ZYHmi2Mmod9JX4VydppHk5MGHQ6vaDviLYS6ps",
  "key23": "3Stq4784XNAMcsqrjoJpPDfEbTp1T9EzJQgSMSTrAwFsa4jBPs86UZvYZVeKKQfwfVcqL4uXjurDD1DWgKvVVrka",
  "key24": "WKEQbb1LpbHQ4JhpvZPV1vvwWzr36ekABBgnEN9DJ1ErbeKJiMoogsCf5zVQU3mWKeZUKAHkG2j81Aib3EitVPu",
  "key25": "55Pz5G5gaQ28bV1MjhXFN5Dx4Jz6KcxWzqrDARWsY9ytigU8wsch9V6L6vJWbxKpfmxeA3UDYZjPefD6FvA6kc4W",
  "key26": "5CDoKwEnr9Qbo6qwCuDXh3PWU9apYwTqHtRAqJgAaPTVTPpHeXuX51ZMvSoJKzX9o7wTrCzfkWxixMsRM9M6GZBw",
  "key27": "yEmauTJqbLBM46LmKt3zcQnJdNXuQjntHE34P9FNPEtWoygMMHhegTfFt1zSzEqQ4n43waQdw3BmftHTeq771ig",
  "key28": "2oKSsHsYA1wP5quaRBqqEMrupVi7QqhtyLUtgH832PZbznD9wvK981i4CmweUuXEpojSUHqqEpKzKhKTuLCs56im",
  "key29": "gAuyzDcq5YyGp8EcUH2LjsN6dFd7t5vjUVFRBJEo6gTyRHx7XRpxz59SEgcBbJGpy2RFhRR76q8wLpVFViT2bUz",
  "key30": "3FwZ1gkBz2oGtjW8gnXkJ5hq5GnBEbPAMoah4xyW9PXkh8p1jAak2pJubmYZvT391WPTLrgakhjcPiHQvtoXGk2w",
  "key31": "3j2mZp9tQzetXf9zDsWDWhCxL2mv8Qq9Nz9HYCjBx1wFEisAfqye9k51ifh3at3egYfGP3HYpKoxUH87ur2YR21V",
  "key32": "4B7H46rPr5gsKiNmpuqcPYYyyQsybPTmQtW1kBMqm4SAWg5MDtEpH2B9XwE2oy2Eou5Y1hjh7PUCDDHvjaB8fBQ3",
  "key33": "5fMjr9NHuJhYzzt1isgjYpGWrAi3ZtXHwJtcUrSDhrUmjzcdsg4E33damQUKwf8p2fKWBtPSKZ6Eq3zc57wjG4zE",
  "key34": "5f4h5kBW4PiRFFVDKj8s26Y9pQiCgFPGPrRpn7NBSQrWtJfdsQFVRj3sFJp5h5TfzckaaaBPCSgaVvK56jQanoYA",
  "key35": "5do34tB8r8VhnBM4uANFC7evVbZS5uBphyQnk6NzAdqmTpaLWWZTEPCbPCr5JTJGihxitX8fKMJRbFG9A8j1CW9e",
  "key36": "WiD5yeYjkmnMaAu6UurEhVrckp2XHdmvK9zgxRpyDFC9D83iKxAG9tfke5EEsFRGD8FR3vEa2YLx6fSYFTRYbpS"
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
