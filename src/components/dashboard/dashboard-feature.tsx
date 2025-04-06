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
    "2Hk2bfq5XPBYp4gUcNFFc8Z1MvSwCEqEFa5HnJgt5iDMGXdz7edX1N927H5MTMLgYfnTAqVqcwKJrX5eEqi97osW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ZWmhD6dCRDzy1EUdpnCfeK46RA8KuixZGXRSWXGQUcBXsyCYLkVmiNj8XA1cQampgi6GMC26ZnQVQ3JbMYequPu",
  "key1": "uS4haYwz86SKVJKB8h73eRbPbZ7ZFQ1JfeowjtrApuHBd7pjaapefBiwdFGkVMuUnZziyna5pciFCXsGyTfHfZ2",
  "key2": "438UGDMsqdBoAZAdMUhnaHee3bdumfXWhEFZj8bSdPrQPVZ2MxPEGZ3P4UBAQAM1dc68BwaQgPXiobMu8ZgVZSeX",
  "key3": "h4nVR6ZgUjdKA2sSf1bvetxjGQnMSuRge7z3BfE7dcevxJCPvBYpvMVfJDM7J95Q4vtLWFQqpamHUpQ7aq9bh8J",
  "key4": "5RB8xTYzgbGDyPLnEb22TXe8qoHMb6uRgKMcnsv1YgDE7E9sCnhmrx8StsoXhbx8GV2iqtBP4hWqw88W7334kCQP",
  "key5": "GSpiy5nRazNAAKezqYXiBFYufNcuzXvqXtAxgPzSs3jrndSUBzYhLEVi32fvVBUreF8Uta7AagKaor6P19xM4gm",
  "key6": "Jzq1LZaHu5hJYS8af7by29PT1hpyEiXFTs71Ai4n3EchRq5bcEMsUFwQXxRpnWpPTK3JYEQVY9diVD448EoWfHy",
  "key7": "3piJjDEw414emNrYJb6XbqW9hJ9cMdA7X42RqgC6nVQqucZAZywoaE48ydYLA346dBESgNRi9mzaTwEY8fXiRmWJ",
  "key8": "y7kQJMHpaAHkrQvbG5WDNmQEoxuGnpTeNTS161PT3cGJdikZnHSRagtw3s1AN1metBMxPcgk8eiuZXGaEG8ee8F",
  "key9": "3Jv934kkhARALESiXAbvrDXscTaUmYUjFdcFo6b8GZ4nEn54TsM5E7b9GVAEtp73YKF9VzGTPh5Sb2p47c3VUBkG",
  "key10": "4GNY71o3VVtxHTPqLiD9aFE5YpUEzWzHgLx6wVWbrR9nkQBXHZJeNmS93YCzvSudWNcvRm6nXe5AEHyMwMNnD6Y2",
  "key11": "2t9MaoJKusR8f8er1fNwbrFkXy19E1jWimTXo3V5n74BVRJpgDTUxk4pAyd6kJwXAARu3166kgTW3mXg2HQskmNt",
  "key12": "2NMqo1iFZB9cdfdxFrFGbL4fmtr7sCbXw2QYxaG6BSSwNiW8D6roxozrfdJM7pLKM5wmwykY89cy2jqFArbudKqb",
  "key13": "2hDZYgtVvb4EA1Re84PN57UMHme76XRMWF3qzBkWTPQibTttY1cgE2K9kcoo7fWS4SyMShkMmzTGAPAZoPNq1mfC",
  "key14": "2DZYa4xfDTzqJACST32s9GP5UuuddQNCS5KtDNghUt5UE2knmbpdef29rCHZqDhDDt1Wpomt1YQgsZQhMwAsjMPz",
  "key15": "3KcNNUxti3xytM8fdeXoYW1zsF5PbHLfPV8ZzCxjpRM1RYwkUS7oKVtJ92SZBawvG5F9ucHpn3zxjYH4Xm532buk",
  "key16": "54DJ2hL9MEbXiJg6io2uqRhnfaqjVzsavdYonqDfqY7QE2n5cJoUmtff8o5vtAAcg5zYgdaxrsGMwx2LWsjrjGtZ",
  "key17": "4pVRdLDeTThvK2dvuqe5ckuABjYnA9Pmt9NC2iBBzxaFHbGCdm33b2D6nPUnJ8mqjdKJbidhNDN9mmq8C5LXxzWH",
  "key18": "3e14Ne57h6ihaCjEpRASCBsyv4DogXsiWCDeRrxaGBKSNeVgH72Sx9UYCPM96f4hwY3gyhtD1y2UHJb8wqrnwCoH",
  "key19": "42AfeTB3LhrB766yx8USpcjuQSTmD3vLhmv1cKFJPW8uczyVnocYPwRtoduvH3R9FVWSpkPc8tdD6duEEp2nbpNM",
  "key20": "SgVGhJgKkVyvy8rFefouYaiTGsoNWUEGHnm36gb3ByXDjq7pC8WUpN3Ec9oc4e2pQjtQXzYZ4CsDCBwzhv4s3tc",
  "key21": "2uXgKnoSUyTXtB52MGXxj4AsB2FyCdksYS9w9rNiKDxTTXgKZhL8xUgSe6BKD2A3NSG8LNHbuuRL2REXwGWxy9vg",
  "key22": "3NCx7FTaE3zu6xSa7Ayd3WZg7hRtXp13kd9xtdXMustG7nmxY81LAY4ZCyADK4LMkb57PENtkoX3ugbfWDgYXrjN",
  "key23": "47Zdmm1KXxmRLLW4WiTunEY3b4ZVQpgwN233t7DgJjqeZTTEUwYnLg49FtPbNHnAsxa7cMdsAF67tF3MK6nzt4fL",
  "key24": "2M945W31Er7SdL53W1kg5M1uJsyRNiSZ3W8K4MZJxDfUae1aFULUTXpQbUKFGsTvM2WigpGG5oGYAgY18CrYNAiS",
  "key25": "sTYyqSbeWMruJ9FbxqWbuuWC4apn6uVUEGT8myABZ65TuGGm4Xcmd1kVv1fHWCMJ6BWi6B8csTcN9ZqTZzgFNGD",
  "key26": "4jUrUTSLmXSebKT8teyKjqyTBqe3fqvRLaYgW3RwUtN9Nhq8SFsQJS5PEs7eop7YQc4fqHq2M1Cq33zU5dinLpaN",
  "key27": "3jgF9GrJberK83hMskQFjfAoxkGkX4fsmeyYhW83S2jg8TqF4rNkdFDEvhnHoDmhSNmo9EUQYYqPDLFPXrrLc6tZ",
  "key28": "NYtBicMjn319AnfVASQMYbWz7sDdapdbAnv21zXH3nQhRbfzHvizNwRun3WkrVVkZq8bzwUKZrZ6JfARP6hyfC6",
  "key29": "3Z1oSWXuhP4aXs2v9osaSd4ft31iwEh9tCvMjTmPc4hcjGMLfduQYijhnJiYNeVT7ej4yQb7ynSY5wAsfUarTWZD",
  "key30": "3brDr8XX1zUr8iGfHMzCgaMVFvq6MmoktocaKs3RFA7PxPDnsJ3pXvcMfhtuoxeCcYoCsuM9g5HKpJzokc9M3sEW",
  "key31": "3sSwjoMiraDWSG8WKcucE6j8rxu6HWGUiEjFcA6oWkQNCG63Na5xEMmhwiiBtjZnJZDjbxFLPsdnUdNeHLPCoRxo",
  "key32": "3a4LTZ4sDLwsCNzfuaLmzNRQ8A5tEWX8hSAN6HAJcPNnFZKjbb9W4FSw5nraj2kFiBvn9Wsvwxye2TzYC8iSYtwh",
  "key33": "4hyBQdHyNinKjBrkeYGc4pz7ierbLSBq5FjowjdppQgcPoMtvX5gEVaxiRVEzLMFPYbj2sUeXecBdseMoHCy1oS8",
  "key34": "2mcJVUVWVFewtTmXAgSYrKmMrVnxpAyMefkxM93sqkPPPquYHLTYpyc8LXGEgkiYMkSCyTYADfN7i2N8aYvaJdza",
  "key35": "2RDMS3pV9UEtmNxTLUy4FkNVPPh3ysNYUJNMWEWtq2qiRyNhiSQS4wdKtzHC6SVL5yqadNxRUJB1k3Qtiih3KKPY",
  "key36": "2Ekw9RdCfXfapevMJeUgSJmDrrX1zdiK5DJAn6n2SerfJWe88exdqsX4TNGWweobUZ1nnB8GUorBM6WQ8R85GTLm",
  "key37": "3JfvMiqjnGcyFjvDYkVxyWWLM6XWLRZ7hsdsXXz2UWkueciYjeHe9ink7SeaxkEEtxJx5rtytJbFrYxuFShSUYFh",
  "key38": "3o2uKDRgYXK7stYXAERP3ueNJt15iQZn86oKwB1Tk2kX4odPVZ9eneaxSqRXZjbDXHK9wuALZ6a8XBAwWP69jTo9",
  "key39": "RMzi6R7sLgFWYvx4qrcaLmipwFoXRVLVdhNiF9835knXw31C2xRZc9S5b2CEgoEmM8R8hdSDWPRKiksVBV5Dyhc",
  "key40": "5AH6cNXT5Kh5LkUF4oAvjLrTvsL24d738SmKk4gdnWgAvkWF6kMmCvVdjdefuy8QscJmbXXmxXKCLyZwwPQeYiaY",
  "key41": "2voDcqadDcT4oonFjwZvfGPNrdrABWQB5Fq8g2K2k9LA7mnYEMTsxSQFkWfQFknrLqJyTMmpYPWBmfWnCeh3VzrY",
  "key42": "2ZfLchbKKpHxVcndMhnW561ADZHtfuRKi2hqtYQJiB8FyTErXbmb6fbnX6DpSdoE5w15cLnoyF4iop2fXD42mz3G",
  "key43": "5yCk2jsvVtdtcgdswJaQkmNCSe2xXn7NpKpSskDhjReAUpQiZajBBe4pRZJPx1hKA8Cm8NMq9kw7eEREdL2NLKLD",
  "key44": "4B4Nu2PqL8mb28Z5ZFnwP85jh82w1endMnsSb4MRPrRuciLLdx24jYbjhaLUQ5LAj1eyf7rJoD5WzAYwKmqq8tcX",
  "key45": "8rSKTMsReozVfpYjvjDD8dHGA3Jnvm7GYQCPTiWkj4exAKiKDDJAdZQQRBHYqCuy673pe2Vmhto7b2aXsvaJmek",
  "key46": "4FCqFW9LHYAnAFFKLmk93GhUKUvQ51GkBiFm4EXAuZyWNttrZG1FYW4N2VnuPPmQLvBqXG6raD5kAnKM3eYpX7KD",
  "key47": "4s3Yh9cLx5ZqL8sTCmZXJ9Ri8M4uMD6pkzWnuoxpjKE2VuinJMUByH7cSbijPacHwxXZZqZZJsYSTQRn8ibQ7q31",
  "key48": "5nSpK8mthhsrJ1Cf9f7jiqaLV8434VqAyaCVSsfveywT3foBeifiFoFGTUMu4MVLWL7fEgXdZ36yVJhTjFxUr9UR",
  "key49": "3UG5j1KsKCV6vXezvzggr9mZ6CPscPXm7WkpXMH5v4NTZYLaXiGEXLQnTqgGZBKSUn6L5ejsc5UwbEruCXcmuNyB"
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
