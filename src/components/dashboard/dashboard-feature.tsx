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
    "2DYa7PV6MTTcUW88KE3wywR5htS576di2Xgh144THmYR9uHqmssi77ieXCni94igRQdFvAS9X8T8Pw8ZWS46tLkD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4V3scEbGyyBFnG2L6viC5vTxu1C6uLgTd1uTJXSCJ6uGp86ZcibeWGbWZnZj85bjGiT3fk6rjGbYFMmgBnoHWzgq",
  "key1": "2UwjLPDhxqR4yR8RJAxTyo5mTAc5JbCgTrN6H1F7QcpdfaTm311PfCH3q1nYj6ncF11wYg8BTLuX6Bss5PAkbZiv",
  "key2": "47EnLK5bhNPLvqjoJmpDA2HcfF2ngKzwZ84vNHmgK3uRCBfRFqkJM645eSbPwiuAfJupBkLJVbsv1XHiUogt7dms",
  "key3": "328zDzvFJJFJwNB5zcQnWwjgr9dBWKbqwEkEikiJyyJ3J1o57rky9oALud3kxEsUUq8XReZgURek1pE9hoq3hL6o",
  "key4": "23axnd6Mqhz2WzcZWto8b7XYqLoc3TfDDfJwBXcipUD6CPCUDLAz6NvktvJ9ZUMKkpgBHpgpNMnt5cE8UTxsez2C",
  "key5": "GWTtKjXB5ZTaWH2Ns2H7LwPLiW6yY8EQP1RKi1ShJttTEUcLqHkU5mC5GEotQENUjr958MwT53ajxpVgKVMwqm9",
  "key6": "WJTuw4TWEYFemafukqu1vN2iUCpcbN7sgsHre4ShvgRGVmRRHYsbnt7VjNc27L9QPewZeqqKS58bUSGVmpzWBkn",
  "key7": "2kVXHsHZ4PG1S6C81DyRmb7s4thbD29ZrBXX7j1g5wwQB84Dcj3VkPqmhhzLt8uDtKRDA7VGKMc7uXZEMT98swwt",
  "key8": "KmXyMEieov36QYDhtaAHBs5QFSXos1akDLyftbPVjRYMMh53AEq6yEBwhaQhUai5r67Tsd72TWj1J5qd6tKVdY6",
  "key9": "3RcLkoEUzDPpepQTkFYhxgFnPsdZ4dmRMc81akNmvbVSNH6umkiQxLebHG7puNw4wQk7XFRWEha1fEGVvPEKRnn1",
  "key10": "yWJXv6sTouXFnjFomoK7Anm4T7nGsLrfWmVT7V9Xj8KF5FQCyLVtXwK5yBhP9UWyM7Ugx75xJ69DysTRyemm8co",
  "key11": "9GJfytXzr1RhYL8ZHrMPvy1yVYqiPxgEfQJ7rgVyu5JSXS5o96B8fYx8Jy195gMbHWE6wXdyLMKYmbokHiZ1R5N",
  "key12": "2QjtFL2iw6116VMpWVKvdzuf3Feijyu5113ejkRNr1EG7bDyyT3RCSiip1sQES94NA2jzJnTaSaPDzqPH8kgX9R6",
  "key13": "2V1KdvS1NEVqp8tcKcB4uPK1rhEH4GzkgP87LzbRgvNFLirFNWXouSoAh5geXEzSdGZHsgMWnXWLWe7JYXKrVY57",
  "key14": "g7otFb9VMHKh11eYiiafqeJPhZsqkpGz2tapAuVBL1dBMaMSBQguPimv4BKu9T2VQSMUqseSs6bCY94vtEQRYnp",
  "key15": "3pBuVpQmscx1zPohHSM2XUtq4AiWu1vgfcUmhZmWm6J9wR7j2tcLMwU5saWMGVtZMc9SKHLskLm9YVGNBVEvtFTd",
  "key16": "taDC1Jad4XX21QyovLuJsqbAtSJpNHoHnSRr2rGv1tJdZ4L71Qmm25tqhgxLbWE8BwQwkcLpRoLTDANAWe74urt",
  "key17": "5DSB4XC7Ygx8hwBU2kEKLhH9TR44C9wEmngJR9z1MmgLcEG8e5jDnPfs3B1LtkEQSQs8vpknRczTh4hJykNfMScd",
  "key18": "5byyAvzFayNBo3kWxAT4qcexe58RJ3orAANXDjFvJegAgqBVTZ6qSPcQKmnKxfSp4Ko9Nw8fSr4TxyGNtej6mRtD",
  "key19": "sTcSpaMJqzv24aMsAToXd5kamZJPBeZhToPv62CaWSbjbbpmYLr51xnnRUWLjhWTbNX9XRz9mhp3o1kHfypvhmR",
  "key20": "4GdXgmvUM6zG9CFg7qfuQ7AEFrrB8Mm9Y1BNWDiFnfkxbNbSPP4GTHwQEvyk5B75QEYAb37kqbova9tvJ8UjGtgv",
  "key21": "2uVcS93KApAUV3fyRftQ3QYibHaAgeoGsmNcVbPXEiVyA52XnhEUrozrpHNw38KE1nzohP6gRxqeR17856EuvxT8",
  "key22": "SiPDqQQ4ZtEDWirLuN39oGCwYMysDBP8tqNF54DxH7jLaqKUw7Usam1wMRbjCTaAQHXQXvpU74Vpj6oJzLwhdyX",
  "key23": "FzdEG7jpcYGdo2JWgkf3fEuNzLwz2L5QQFBjCYCR649NvXnLbmFBw7yLkhoSxyJZVcfaLRZJNLFNdXGaGyGzCz9",
  "key24": "2mC7g2QhQoLqZNPJZuPdj5CqX77QjkHDJzA2wTGj1NPhqhQ2Y8UQtTCKUNzA3qTToqVG7UURPAy14FpHhy4svWb4",
  "key25": "GzvYbrmqt4W8A5D7KrDAe5hA91tL41h4FHMJ4sUMkXvSuLVpEenEQ8Gv543UdX1z32LEW3qxBdGA4NsckjdN8de",
  "key26": "4zy8ZXgj9Aswd9c17Aqt9SmrthMLK3acSDLcxnpznUArdEY1XtzGYCNKJEVuZedujqLEpr9kiaK5YRUDg6Kh2zsR",
  "key27": "5rWfcM8vnPUU9BZcJTQzNsUH35fVoCqNW9VuWL5Y5CBydFUa2hnBr37h8YJ6VcJ3qKQitBD2Notp9MVH3Ze5kzjw",
  "key28": "FrR3cF7dJmRVMFGdaeLWfG7nUxuQ7irCouEgnubDetwBavMiib7wMQ7pQWsA55fB55yG6jLwCknZW4TpKqSLoG3",
  "key29": "3LDoZV5tQER27KV1pLovVPqHdRAib47B6HN3fiKgifpX4oqSgE63gQr5ZKK3XAXGZGbMRSmv7qJY34HBymF5ZDX8",
  "key30": "5fXs3ddEDQM5CDjQbwdvmr75Hb9jEf4M8FPWhUmeNdjsaFo8frujjHDxkirhcjBndYCcgB9NSxZQYNC9BnjGs7fL",
  "key31": "2JCa2yp2BQckgymLeCT53Eco4MQ5QUFuSJizFDDBDX9nGh9ybu7oYbheYuFyJGzP89Q3ZRibcDe6iZVFmFvwHzib",
  "key32": "35BD8zxuSNcUW8vG7V5ovYPN18aBg52hu2hpJdHHXztE2kcWQyfij6zJ7BSNpnDyH6Fzd9KGNQFFVSHeQmNxKrgN",
  "key33": "42UeE7axzdgkBaUVdL1xTsKEFgxCHL8bK8YcNzD913rhtRkqW8nYNo6s5dXiTZMgsnohZXm61SjXgs5QUiBMjNX4",
  "key34": "2VAAQEFn3dJG8eec9VCe2Sr2RkdJm17Mtw3zh843rfmckZQdCyibMS43GKowSFnp3aKk4YPGtu4wVhu6MwsJ2eEi",
  "key35": "5mbsjFyrbAp43h1RfsaVVXy3wKeBfnoWSrt4VNsWwD1WsV88DU4SUimWUwcDxeDY3bBKHjiT9MQz7si6MSW52WUF",
  "key36": "CS9gFHeCsjMQbmQGB4cG9TokZ7HgjPo84zLpAongW7MDGJwN2Fr3TktPY2LLiqt2gd7c2TDu9r7zZdZx7ysaARx",
  "key37": "4Ays7mBxZaQFnSWJ1PYhdKFCGonqSvUqok4NwqYpmaUwxDG71m3VSWUDpg9mwdr3TrZyefaTh6jSeV61Q1nBTKjN",
  "key38": "4tuA4DtQ1E5AqakWPhTM5rbDGcRMrWCBmznum4pZKi6D6accDdThJ9VHvUDv1i2BFBPyEJY7jJ5WEW3Zpf8kosci",
  "key39": "A4TNqZvUMbTHaaebB5Ap1K7mS3mYBGYeP9ojTghNjEox8XFza5sY8zBKiFJJgaPdyEYb39RT9LhPUZJcCmPRHzX",
  "key40": "35SeBvycfgZrNs9pSPDQUZx2QrWVooTYLEF1ygRWZEVQxfq6qNBJUQamUxQZKXkbwKod8mfV74BWZh1q8pnHUkG1",
  "key41": "4EtfFxh38iEion5pdgLymta1ghut6tovcTAU5RUe9MmTmaHGAndAujE9PQojd5UZJirUTzmjgbyhYq1Vnbx84P3v"
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
