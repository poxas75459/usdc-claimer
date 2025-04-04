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
    "3C5ayevW5Az27b1o3HVUPB55bqZbMBaUwUHgv1DjC6Tew8BfJLyhhnYq6aT68tNBupNxVBS4u8tyMaKKsmLG7hsm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5MsfvY4e5SjXRQ2UQVEZtKpdS5YAz1467B5kwVpH6Y71NBDPwDAaAwCoMJdUZ1Wxo265NVBQUcuyM56HjGVdsyib",
  "key1": "5AQPzDkxq6eJzZLyBYHyBFs8JMxCpqN3Dcje7WnyEtHsru9LWGiWrjfwYc6QA4LsCCm11BJJttyB43Vps4x7K2gK",
  "key2": "3sDNspVYN3j4cJkSSNco6aGAZ1HcKYqXM5AxSoNtp7ffhq3eEMT8Sj4k7GbXapYyRw6sSpoCFpEsXxNW4hbf4eiS",
  "key3": "3o3pn8LKi2uUDkS8HjGSYv6ELEfF3ZU4j7XuqBpiv16hi5iD2b6dtgs9h8D4hVJdYX2ao1BCu9TcLPK7gj4bxtpK",
  "key4": "2DyrEN5XJSVWRbXGwo999CiDvpwGgJNnfUTvPcoMMZ3NrrvyqgfqaoHBQoKkM3EAkRX7WqRui6fSF1kTk1D8x9k1",
  "key5": "36AmMqGNPSPBT5GCdvbaxEZr2sGRPiKTaYcpkVDEFaArAGFWwHyjwjyD1RtqoWBvhMQ5cDCFTyZwrYGz38yj4Hen",
  "key6": "3VAoiTMLCc3mNf1DXmymzVgKAEE8FTxjTRrAC5HsPm48k2hnHK8Nmd72qVQPoFD8kja7HJmb2GBbogzwDupCgeKz",
  "key7": "2sXQDsA7GS24awdAPxVx6R8SpFwCezq35qWydk1XxDyr56Xn1U8q7LjdS5j5MStBSUmjzu73WVBq1JrvMTaQiAhC",
  "key8": "3zKZ3J9UgJwWnuBo4AJmFbLNh81z9apAxk98g3bAqzZ6NyY4CkPmXf1YuC8hgpnSB82oiBUhWGnBaQ3Ci7i6kAbw",
  "key9": "3PYvvcP668dfveGPeEUAyfZ6bmfoxhu9f6wWFzAjMBTMd43KVCTVSVAuVHAYrQBxSJ5AdLLpwQpuxwnw68vaCjaZ",
  "key10": "3ud7KAsd8MmAVJQ5xF6HkCYsLXMBujpQADUHHkrMihynBRiy2QyCCWDhUTnkLjdcMcLvrY4J7jdskwn3qxq1ShEx",
  "key11": "jxCQEFaerkwiVWZbVQC34ywmNxha4dwuBXXjR25WHDfkB4sPJUWaFdyFbSaGkGQLPMSkDVsm94yufV6Jxucx8H2",
  "key12": "2CpND1ccxhj61Y9fRUZyYFJV6NWXWeoHJgby4GBuJLMwKBMsKCVKr2gpehXAb7HbBSo4VmMRuBtE9WotH4NKvivh",
  "key13": "43bReVs4JkLSgHqxwvuMPTtqgfXWVnWn7J1ow8tfRWG3tJZGv2FXzGf14jLoon8Vrdfm5PVpMig25P3fJwGz3KLF",
  "key14": "4H5BW9cNqdZH5Japsby29QgJiLCjGTEPT4TUe4WXoNaFYsagmcLkDsbGzWcpqxS1raxXZdvPvtiVjxazKVCcMxra",
  "key15": "5naA3NvApx7BfXKHxqDfuswNykvzRdq2LgDaMdqtpYQSQk5P8en5iSk7UvDEoRF8StGQaSfzk595C5vNnPUNKZNt",
  "key16": "5ZaEQR7RcECiBJ1tq2faYBY78twdhTacGn4es6veqHQ3DPa7Z9fo6KzztF38qDcFjDu9z8kagM57xWQ8yEdLmYpY",
  "key17": "gtZEyAHg37vbF2xtopsJZTKUZ27hyPLECAovHM7uPPecfbRRgu46ZN1UUiJTDJ84mdnQHpEyBFNZisqS9tig1Gd",
  "key18": "3qbY5j7dGGbmg4662h9kigqeYNPhvcr4ZDwNE8KbdfrpTja1Cf5hC6Wip1gwnecJQL1eTcFTvGohkEg8D38k7ANZ",
  "key19": "PUbQJHCu24fjxREBpztrdwgRys1XuNcFiVD7v9eTRsUBv5tuh7PSQC7D2SeAjVnbRWxKQtNXhAXCPoEQBYKt7gn",
  "key20": "5TJF42bKV8jyggEQb5VjYpiMTfLEKNk9XPN8SzZMUWKwvMsAuzNVeSHjXBkHXXbAtaucgzHf4yzysVrNXNYmWV7y",
  "key21": "5N6LTFTREnoQea4kg3iGHPoKvEBdJMDKhPbx5gdQgXELQvrbbn7ZATzw9mhjjmiB8b6dMSBS2TeERegnryzZpzwW",
  "key22": "2G9PRgVavmXAJQ37hRFaJe8MdzWvKxx4Cf5TNkGHHryrGhYbFdfWgUaAPdaykUPjstSPW6hikmcB9ZAVkzpCWXi4",
  "key23": "4urVxLDgEbkRviTXx3MeZ4ya3LeuGJmhiWrHr3aMVJfx8H93eenCp1nZwbpXQY7X5vkrR8U6rENHwxvoq7VdgZbR",
  "key24": "32kfFL5qGutGtf36ix1XRdiZ2vZN63sRnmch94XSUZVkD2zd4Z9QRbMVNpUeEy2t3ShQRTXhct8LpFhK8Q88xoJd",
  "key25": "4pTmuHPzCBpQU2u2ohtQk3vezaeJKDbKMv8k5yenmxiuF5bcJ4CexfHWqpRtjxx7HuQNS9zZj7J5jvu416B8nAzc",
  "key26": "wTLggxgJz3uhG37sSKcS916MEq3G3ADYznY1rFqxXyDKCJpojyaZ15o1UrU7kfg6hmmP24CgRcG2AzPhY2cXDkY",
  "key27": "3NhQC3TJ4PNdouGY5VFNUmq27Wvpdj1W5etGkBWZtnn2Qv5cqsBTzmToELrdtpXSUDpqRX9ijgFCZKGxwAr9RUcP",
  "key28": "4P6kxmea7muT3K2AhVK4xEuDs4GHVoDPfS2uMXyutDgjK7KGydngxLyXW7nNbq8uvH1eTbYTLJrQRE8KkBTBeN3D",
  "key29": "3a3e8BHuLzKpSQVUrLKxTECebHB2kYJTamze5uzgEhpNpJzgyd5aSAzudwcPTieG8VSRxjof948AdBS9BoyeArYS",
  "key30": "8X7T321HbDW1EUFDc9r8169HkumQarjig2iJoUrV9hybDiXbzNNrj6YvLm6vAWQ1s5jWjwTGt7QB6YnB2QQdsnw",
  "key31": "4PVGDCcEBc1uqmQhMdDREqdS92WJcNAeTzWcvyzuFrjsYvRQNP94fmJUXgL6KMvL2PQwsPJs9H8Z5eVgHt1MwDgr",
  "key32": "oLYJsToepDkEGGKHWfJDaUbCxfTEWvWpGWCrcfvKkjBb5p3qMEu7q4Aa8cL2Cf5VWkxvJtuNKjDqUxQovhgXxRZ",
  "key33": "qdzuu8DJRGWZAVofx2zkDg3y85pPrXkfWzFsdzzi8YbRqHmcsqkfFFhjdd3hSnLzuZqK9KPeRS38apkfJSHcDGJ",
  "key34": "io48u6Q4HB8iY3FcB4pVYmeAsaVnK7iLJYWQfqfjfMHQpQNmoKABokUdM6gnPSXpq4XoD8HmpE6FfHTLCagdtmX",
  "key35": "2sjZbKMEApkMXPwNo8g7yR3kc5efm4rBLeR3YnsS3jEAFJaQfwzytD5wXGSDDwjXDx7aauPZbUr6fMBFcvg8jGGv",
  "key36": "2y73tuyssZuigsDCeQ57yF3NTKSm9uGb4Vj3Q8fc3shPdNwkFrVytGBVkqaTAAErNHJGfZ8pQ7fwky2ACqDmMNkj",
  "key37": "5cuz1LPKTZD9qHPdDZG2SFpm7QTEfg8bkkKEHGWHBS9XZ52yPhS2iwFEVs4qz94Jpw3crQdyFTDGoSE2QuA7kpeK",
  "key38": "fkmTMyMP7gKWkm7DfRKERpYYFT9ietpcffh2qxV6FWmvAqsEz2FE34HHDsYFJAJVmNVigER8kFDFWj2CW68ehpo",
  "key39": "5EzTGumQUuhPzLdB4rmyNw59zEMWWT1YAjUyiiSvSTmQfugSUF4ByZBBkgDbHimmP4K814QGyMFytdYUkzRAqDuZ",
  "key40": "5kLeJEzaKN1xmVfLYEYvQWAj1EGWrmfmm8N2vJBVmArnkJdNL375hX27qsrjnWp46hgh2NA2zcNHqef7prqMfy5H",
  "key41": "53yeWtgaquGCsM6VyZdBieaRj7xvKTCqS7CX6K25NYR52o1zLXErmsuG4Q4UtKHEXJ65LCTM2Bw8CLYNRBy7qoNo",
  "key42": "1pWRNYjn7Q5mLdJRPZcrCT2qaGq5fBsZuPjXQkd5Cpi27tiwvepgHYPzsNfuQHcbFjpgdq8AKBYKzeFkSpWiYXr",
  "key43": "3MWB5eAaNdfasLHAr3mMDaWWtSGFvCx6GZLieetndZAprEFpbbNruyg2NiM89q3XrdsTtxupnqwcug3i5YXPXNxG",
  "key44": "2JdsbZP1vTxhSe61yXnpjquS2a4KQM9HSbLKWYXtqXZeRGgDKbRXzDo9zvjRc7KnXEg9noSTpBUnZDx4rZtkAXEn"
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
