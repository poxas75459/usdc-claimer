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
    "2JToPspVpEgtgUxZukuYSsAdBWmQjcKT7g9NgZXjb3KfywcGTjpwHo4b3JGMSDifGHjs7EzivMkweWDharCc1oa3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ffD62oTuG8753TD1C3Xscy2KknbkjvCbufcNXrqjmFywHJje7TYxBXjNSfwC4c6e2dkn2vrqEYH7MCaiy9F7KKZ",
  "key1": "VMDKBm6rm9pgwzuWhdqS2mZ9WfXHokg2p8wwYEwKUJjStPfhYPBcp1X7dXLJXovzQ8KfCEyuZBz3MDLcxFnFM8c",
  "key2": "2oZhFkZW38yWy5UBmGxiiDsmYYc1GjJRLRohru1K25pg365wiqg388cQE5BQtyxaURnk7co4tdxCJusZU6gQseup",
  "key3": "5B9Le8D6jj4yyd6jRAJVCy4XM58MdREARet9M9FmZxxU76irR57kAJ24tdJsqL5CWJwaFFJjabckbtxoC5FbZmm4",
  "key4": "47q7NVKdF5DN5WnpA9q9rd7rMs6yXYwwCtiE3ynuCjQ5a4X2RMoBxYHPn8MNPKegF3EGViS3PFZwuhrinXHNH9Er",
  "key5": "54eZWkettBb4ZV7LNGF1kMFFBBhN59spY4jJBwLzCTvd4ogH1PPuDT7yv6QUCH8htLkLdVa2ZpFfd8oMSRssysHV",
  "key6": "c91GLUNUyM7PPQbu1fRUoqJ9hKMtrwXCakWvMJ72zZBFAjR773AqNVGG9J3f4YMRfa4wWjfkpHi3z8nfRAg1d35",
  "key7": "3rn4wixouq64rTxKW7ADZSvXfixZx1sBRGJTNeujaXUi6gd4kAm18QttX6fWrCST8oWqni4RTA5n4kkAG8bLKb5M",
  "key8": "22yS55PtxkQLk8AGeKYKYXPvCefYQ2hVAEj3BY8uqZ1Zpd5VCJ7iiaR6csz8ksvDzWc2Cigbk84NEUDhayEvzqiX",
  "key9": "4wyqeZCWmtHyF93Etdvnoent6H1uoMNbdFYj8acjsdwB7vL4GGFPSizawD3ttU4BaJnGUZ7R6qRTVch3zR7R7rbA",
  "key10": "3MneFVaJcBBU1cpGxU3zn6nb4vYBBW1nwgdkWQosWgs9C3q5dLjGRb6MFkGue6nHbc1EYUGdhRkcgVF6EUdFfemz",
  "key11": "2ALgAnrhAUoN663yiLtK8cW2titJfYpM2qHagMYJniCkUVuVyGF3eyvkozdGkmtqraXQ9sQF1T5CEM2gMcD6Z89L",
  "key12": "2j88ZfaFXcVqdq6LRVL9Pc7y3z2prHRtMMJv77PJNzBpHzqzbbXC2wNxvnJxSrVnqeMs8GW9C686ipqvo5Z1Sj9b",
  "key13": "PT489Fsu6bnPBVhUYEr5cMXyNs47GT7LdNyKY31w3vfmf4iX8nJQQoNcqKYZnzpaG8sqqZ4wpiyBvQESY83jc4Q",
  "key14": "47Ub2pqdoHnwk6BZt9yZFFPQTQJnwPpUB1VaaD1mdfESSgNyeD5rk5tk6hymqRArVjeXraweSLG6BvdKUpfR78Z4",
  "key15": "bxA31CHbVdd9L8vfj72ZgKYLF19Ap2s6zfbMwwgMSHLuwCiXK5QhoCWhTxP4wEyUzX1XMRkPLRzcTH8eoaEyzxJ",
  "key16": "iFR5Sp71o39FdoeFxKNhHbJP8isgshmTQeD5MQJXPfjkLPerasqTF9YePncvSCf7SiwJL11wTeDaqERboLqDGGk",
  "key17": "5Gve5CbMMhRuP7x4Ki5VrXauLADxNZX9ZcC5gn3zQ6k5rBnUJqC4PdvP9LhkFqik35gaGsQXsEPaEUSooajZZ7cN",
  "key18": "4ryYjhAQXvFirEPr1LJHUwwRH6CsPQv2p5wG8hG22a7fkqQiYr6WnxbnWk2zwUaw87gn1U8t3YvDLZeWemCVV83s",
  "key19": "5MRDEa7pAUfymq8fwWueG7cJt4PDZLJPcytRj8MUYYiAdcTfjN3yBvYajQ2Puj1d98DucZmpsVhtDFijRw54zB4b",
  "key20": "5XYXHMmxU2J466vJkCdUBBDv8tJvqqXNh5YCBZZwkrUo4Sr75yZA489kUtuLygMN9eS5WqXxZJMEioa7TGSHgdbE",
  "key21": "r4Kn83EBKUKA5iDUf2C7Kdfg9rfijpu2FemVdjdwzxwAnbbauK2i8bfusGaAPPTzUi2Tx8w8ZsDzuvDAtwfaVxg",
  "key22": "28z6hwBFCzRYSvwyQCjAmGj9npFUpGG3sHgPvaVAD3aWN5wFnP1b2jiof34yhzKyEm2VpLFpNCM3djzF6LjkrFQ7",
  "key23": "3bKEwRP43yWNvM1ywVkRHR7DCAjLw8uy9VmLpJ1h6ABn4Ki164SWbH3EU9pJHyLegPjD5ssKDQwAgSk9bT63Du3f",
  "key24": "3yRud7tn1H8c7j6puD3zC8ck71Rft4cxUAtSNR1QdXC162Tq6dXZDUZxZD7ve6Ntagt3CmrwGdN8b5Rxj7kKd3He",
  "key25": "4S2WJaeDYgyjJdTRz3Sj5DZtDZ8KMwmkjhYUoZyvv9c6qC6WECcpthheL9VeSJUnKeBJig7cX51umiamGJttyeNp",
  "key26": "56u2xhwA8Wr7UkEZzHyFoVkMTVvY4MmXVVMu5MpSUtHqC3FWeVUoCtL2BXggjzKH5DYGC81K4maTNERKPohqWAis",
  "key27": "ud1ofSiSNWYU6Jas3jvHZzWGn46aaJ5ZGmfSvsN3JmPLNtBnK2x2t1Zgamvdh1roexZ6SuMBsZYA4PaTruwvXj4",
  "key28": "5eU6Mxnds1DNH4iFoL3DGRQtJTtdHr6cPXZUUgjdXiXq2UnBYgNuFVYDizWEC6TVEBsqczSvGXmyHY5i3QkosSy7",
  "key29": "5zBemDqyA9m98zvfNx2tf18iYM9QwmBcYZbWm8ZaA3MBexRuAKd7Wr7XzDz4zRN7UisfJTHhfJejd5o6PCTVS39v",
  "key30": "5jecVNpURquZhHKhir33Gku7Ff7mGwCJ9tMktNKUPqEWpPccfPVwAKrnzuYQnt7Bc2otBGNoVsooxWHXdV8SKdFV",
  "key31": "5PEigqwFoGVV24kQgVCrtrDjhFpGCbvXrVntRv1Nmbg45cH9HJCcXgHGUncgSwnjU4ZmugaqzxbLjEBxqTgncNAq",
  "key32": "3bYy4iXBiH8z9Mq8XP2CHi38tp4CA2NAqkyu3zZ4euLZQ1zNj4PmNLdW6DnhRN4dmHa1igKNocUy498FnXGJaaUW",
  "key33": "4QLFX2wnfXxyZHmEwX9CuHQpvLXnpXqyRhe7zWgEmEE12p9qcu2Dgyx9ptDn6sMphTPmKNqUhb9rveKYoG3isbRB",
  "key34": "4YKdbMXD34CbBD1Tf6NQ7dX1Vti9eT4QgC2Za8mqcJQe9cGEHXue8wLcktyJHYCf3TQ7KXnKMU1RFoQPfUd2ZEjt",
  "key35": "2GHFFKQqYjveNBDShLCutGVsgkzt7kGbL2CCbmpCSwZ78GpcC5FJdq7X7Y91tu9f941ndNXDVcHgpwcLtgm554cm",
  "key36": "3KzveYc4ViKQFMjyNvbUX9hBRpJ1zYxA9JahbeCUQ3vj2vEGAcHbQcn8RRghjiDkYvpAQ13Yu4q6ToGrHrE8Mwf8",
  "key37": "3CTrgTnmDdtnjeNQzNnS5FKQ9q7Li68QuPTwmcrmWDtba6sHQV9uU6ngk8moWWn1dqJgnoG4CTEg46RQBMy389WN"
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
