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
    "TcuAXeKsohb91ZYfKKt4PZUqMsgBAfBgS3ZbrEGVfGig25HeQfcYCRwyTV6V9pADtVzCvFGcSXaCicZcxjNSgxA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5pNCTRzk5VVkbajBB39XncSYXn25ib9KuCmfHTkbgakefeEQe18up4BSniE8DuXnuA9egbqGvgWhoPifVarsBBbV",
  "key1": "4hn1Nwns7VpFtLJSbaicqrytJezafzmfCRssUsH7eNPvv1hh9mWmRcMF2JnkDwySMVaYTAAHYWjVPZYgbGE4wvnT",
  "key2": "4D1wFpe1i65WQn9ZMS4YbTJ6817vHjXJAYGnKDMSf3aHU3SRxCvqgwVY1x2fXEwymyPmyYLkfGPTGZmVLYBJyz4T",
  "key3": "4GrLZmuBGYuMiHXxWgGikRn8rLiPYM4Rw2n1ygsbBSPavp2APMoUrgxY9zqfcLdpQBgTLEzwcMkPUAtqzHfBDid1",
  "key4": "31ksfZKnUFuydyzVgHawf2aH8TA3FQzzkoZwxDLjLNKC9x1oH3A3RzJT9XnHm9rFPC3CZWcfWp3RuQUYgnRPwj6V",
  "key5": "3E67hTmav6EZyNWYXzYbiuQNz5qD1s4hhkWGrrb55wnChZb88YHBjGaVkHcLz3SzCeF6yBxLSBdt3roTYb2BCvZU",
  "key6": "2cDTFFFtgfgHKx8rYHACMN4RG9EsPJQ8hv7EtGP2sgMq26XXzHXCzZ8E2GHmfipKTT6SKAkTYc3UXVRyAQUhAbDY",
  "key7": "3fe5vequuwAvYFy5dd8k7cvrTmRVRj2nLPvvtbjUxVaQXqTx6kVhnjmGxHTfTNyyLkDkFAdnBn7kyKoBB1MjsVfh",
  "key8": "59qMaMP4gJZ34AxGf17PSJ6HTQCLphfn7rYVAttRCkGtMueZnjgiLR8aNgE82i5xa9MUo48ZJZg9ioh88W5mvrKW",
  "key9": "5HGKrShHas3mFuuLG4fBMcQoezQ19dM7gqu3zN6D4HtjuL4GMSLJxwkw7z8BVeBWP8yqJzAnGMKkUF65fVxmjA9N",
  "key10": "5KGnvuF72SQRetkxQpmbwMMykrZ3UMSMGbfo7b14LhXTkxf9xSfZct7xUiYpSVT1XtDfCmdSRrcsmJULmQKiJwPn",
  "key11": "5yYRE5meSXHVvXpUqaPegeSAshYRT12UY79Vk2JDykdCqKQ3sAHr3KNDPGVwz5BNXsKuPRbEir9LVzSficVAtRWD",
  "key12": "4VxeHvNqtHS2vKyiDDCu17QSH5rVnBRErnhdoBoCJKodoMpM1DUcGFqzWc7sPW9UTFPEFksb8ybVsxoGpoHkvcUy",
  "key13": "3aoFaTjQggqx1hEBWK1xdCuo2c16BGAH2knzpSesxdNntB4UktWWLy42KeEnrCqt7z1XwPD2sC2AgTkfUwrsuedW",
  "key14": "UyaEV4vtfTE9pePWRpmqb5UVg2M9B7Un65BXEhzXV8GE1KkpVKeZ25B1R9sYV8DQWmccaEpFc1Zqg9cFyfNsEKj",
  "key15": "2hSmzr9WjMrH1KavpiSwnLhM2om4tEVxE5dU2Dn2nAm6HpATrLAZgHVbg93KvYDRbN2BFXyYtB3pVS1EnXaxCit2",
  "key16": "28qXzCyhmTW2SwGzPnr1tP4SuFWoDk24L2x9QnyzWu6N3trvk4Y75xPeUw22GzsPzeu7n6ZF2ueP1sUAYWFjuWSM",
  "key17": "2jFQHs1TV5kuGqsqBgmGJ6JpdtUmRZBVVa9PWXwcSbugYPHT1V9X48bZxqhRemR7gufYJqRAdEQGKt1beXCM9uKs",
  "key18": "3cEydij8w3EDmAuTDhYJmtESJ1S4bZ9cNqJKQSGCbQ6NQ8yw3sUXfsJQUCBCTn4k3sPWLmxzLdBEaB6JKBqEnr86",
  "key19": "5FPvDV5wy3hGnK2n4vomX22BRcy9PfHM6sbHEfLi7h7q8uQ64xKazWGUfxL1gYE9FfJTPZNdTp5PtrWqa9FqrjX",
  "key20": "5Q5U7guP7ewj2ZGw16nsdJCWH1NoicE5Z5XCbG893m6mSHioCUxKCaFSTVLHxZwfaHWykVu3ZYp6NmsoKLKYjdPk",
  "key21": "4Zst21oZDZz6uLURPxauW5XJePoG4D1EWUmtEY3VkJfmMnmfzaoExSMYN141xD8DSpUewqXK3CuWCPUixtw6aPS6",
  "key22": "4eXvCHkTQSrmLdwhho4xvqFXJLBgP5K5VUi1TmRsZFcy3BtHPhoGTCXrnvY1KreG4CaUoEgzw6XdxkfTYRJqrRTT",
  "key23": "568GD2KizWdyp7rKs9fffV7mzSze2bVBAG8z3hobFkcEbBLHswidoLGmgxw7SUk2azuQxtKdVf4cfMu3DV3hpgLf",
  "key24": "5BiphRzD6hw9ttZFUCQpTBs6kXEM21FznMn3srf8dYPFg5e69DoU7rseM2P9H3A4nsjPP1wQ4hCEqEDR1jJcuiK8",
  "key25": "5EJtsvZaCSsAERZ69ia99grT3so3r5FFjyyomZuf1JBDYXz8tFyZi5s8YdSTvF7zTv1kSKQaqnwXCCYgxpRcRu8o",
  "key26": "3LZ75d7Ax7ruYKPRKz1HTg7wf6C9YdgzXWigbjX8Fv7PraJpyH9D8bFXnpv29X3KAe89YjPRXH7dieoiTTk8zMAv",
  "key27": "3YoVtJwXTVbjzno6MWEQo8oe6wjrieP1dJMXQzogHWLgGwcKCeR1Dk1Lw1jnz9u8P5HvGy6Z4CNf8vz4QdEM6R6o",
  "key28": "343CfBkm8H8EfeEX2LugfctpEDPYm5a1U7jGAD9Yk3aFQLZ2NwdsZna98ovqt9Tva4DjXrHMWDU8wSkejdQk12bw",
  "key29": "DpbPcQqgfWHWmYwhrXk4FNQ5Rcg9sBveSsRcLyxR2mkTdvSSRKvaSDSmPUvdPjPZS8FxcX5FZigzu47beWNDUP6",
  "key30": "3xz1m33z13Yexyn7fmyr3CrqQZA2CnQyKACjS4ua8P9S9QZgzCjquZK9spwEv9r7kkUkjMMEiDaoHcTwm9s5LfAg",
  "key31": "4Nytp9yK8v3S4rQGuFoYADPrD1tQDAaM7giHYpA7uVKfwvCF1RJz7rxkJPCbpi8oam2nwZyGeEj596oYvuDyMAv3",
  "key32": "5PtS244JRCCWoyvroXav6MZvbxhxHqnkp6vckU52fCGBnHaAwt9YZMQZBQNqLesfWU4H11Ucs6JhvcrBCUQeJ6PE",
  "key33": "5b9rW951qQQvacYMmYpTRHrWAtZGiuTbZYaDt1WCr8GXTMdVGxeu7ir5ejjMHy5bZxtDSt2okhp363A6R8c691vb",
  "key34": "JG7eBYQzijub6tUuiXzVHWUzE2QLBFb9oPUHR6uZf6m5TSMTi42DSqpQyeLB9dCNi2CExX8ZuPq2KnY8CTfHNBx",
  "key35": "4GDGLD74HQUbJAusyDxTsxGAGcAXP6wQ6q5JegtkTwDpMmgh9kt9xwKtbES24qcXi9Uqya6kqrJLE5MEmcTjVKci",
  "key36": "PWpbiDyRq53eQVtFoo4EjcJkgSkb3onwwLLGxiMKdzAzuuEuv6dSoYabuK9uLvM7VCx6843WssDZSjee5mqxg4F",
  "key37": "2hjroxbpFGhPrCyhvWS3JNYh48cHgDXrYRapfu12k8bBMWzdUSSnKFyTKE6Czev79fLq9mqgG3NBCfGuBmNfAoso",
  "key38": "4zhxxUzQu9UrmBDvpF1rn87F9rQsa1CQuDzXmdqCmH1jbfGTutjP8u2dYz5kBQA8gU8U3r8PaiETCcX3mexyaw3u",
  "key39": "4JbRNZChyb2pr3nZkpryW4vzhy5pTxgt4Ubk6aRmups3yZxWnmxt3mfSaFUjUZPfcmCzHP5Ak9MdH8TuJszVfASD",
  "key40": "GQbFJnJpXSsxieu66tL1NXCZFjTRq2fP2Eyr8XoCgnxRMv6nVtHomj5WCixn86LoKU7sBcjFxNzpcxpVTHLocm1",
  "key41": "4SVu8Y5FBniNYzhSDPKnGnqBYX7mkg6GqdgKs5SXKrXpiTXXCkrCYsKXs5NzR7GRajRW9HMaXXn3BAf1hTTMHnBn",
  "key42": "5WsU4Z6y96rBdX4dquJ9uDwi3CZruNEMhY5YBLG5cbP1MndBYwzhzk5mW13RDY7QoBpjFJt4C6DZ8s2bemsNYxsa",
  "key43": "2fx9UJywymsXnCtwh2H7TuA7ejEjpjdA8nQkqLozZsNNeXpbinqAjm3aUNqRWHz6yXURzvXq5T4sKZEnnHYdXa8c",
  "key44": "b7VxTYABnvSRaLu6RctJUSVhtftq6mnsFcKHYxKHfJYjxTTNfNH9UN3nfQLqziDe9JCuFRPbLVYJPemxpJeUgw8",
  "key45": "WBqNBvMZAHrSaeW6cZxMtzY4NA858DGKyH9QVovUJXGsKpkkKmCkYbz8gqEPJgj7TAsohd1iPBEm4KAQH9WbJJR",
  "key46": "2k6rvcmbCYGTzK4h7BPH7eJZJzQ5kFPsF1wdmXbmEgZzRsTAQaW43LBPcPEsqfTrtETDnUFXSuiFcvENTsPnWdqg",
  "key47": "3Z3yQcXkomVwocaeyxDB7zQPydpH3XPpPZBCivgcjvjok3JYL9cQSQ26MAPgxwosUxfhpQRjk1mgmNdKhX1ZnYVD",
  "key48": "4WVCzmMMWyfVaWGKgLXwEGhE9FhQZqvqhVpyXiSP4WMTidNeeFQwczaGPwbAro9oViHxVjRH4QW4xgVyaeYsppJB"
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
