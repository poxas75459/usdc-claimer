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
    "4dQcUhz29YoLq9kcGazUDzRMeD1KqRqVqneFhkQKkrhyzvXfVspDuN5Tp7Hs7L4bvPXRdzPY1Urfce1ov6R6uiod"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ckE2ic4kBfYwxYQ1kazAPwkWmsnUvvkHak6meXPvdgoQgiGq4mata8ua9jZZsJ2fhRo58jWKWWJAVV8HEmJoUDA",
  "key1": "7o11rquGrtpf2FnocUrksGkEQMGnPAUmxEaco279updvBNTVbBxhvnUs22pa7HPbKey4BBdo5S7x5dQ6z41tDFm",
  "key2": "Xghk4ySRNBE3YnwYiNkpKWSofP88wa8wac6mZkWo2qcWcVz9rQPtaaYtrAHF77Tew7v4yj9KmCs3GEfmCdYBhvs",
  "key3": "4uSvGT7dQB6CbGa6PVrx19MkafPYUin7DAkVijMgrTBLogFURG17yu8PyLML6Mr8D4Fjx9aNKAz8KpEr4tJf18R8",
  "key4": "5E9WrEKn7rMJ9JVDNPxFD72SXK52Gxqfk3dcxWCtkb2fBsbsDV5WjNDMscsEegbMG2hJnup7Mi9vFc6chuwMkShB",
  "key5": "JWCxiy6a8S8338BAwtssKxTR4n1cGFuisniyUvb2SeGZfTL4bz6ATdaYusGWTVFmiQi7wTFgjjjQa8MX2QuMYuB",
  "key6": "4jyMaf3pzTAmctRUFBDCJH9KZ3FPzgavPAsDSSQUGd3USL1feJWfMUZVutjjw6ik1ZFqibKVwnGfvJWeqqLAK3wd",
  "key7": "5bZChQX5fXJvcY9b729hkHjWGqvUN7QuM5oDKJnucvCH68sWvXM57QHyT8vn5kvBoYTK69yTb4jYcA9NFdcgLcmQ",
  "key8": "2LvWwVv9h2To9SwJdbkiDzqwFSr7YkMBCgDydFMAj5pNXdkcj7MCymhmgKzPXELHCyKSbUaFis81tPEpHgBCx3xJ",
  "key9": "2sH8HpXjA1ytfwrXLu7a7Vrn1Sqhzbjfa5f5fQg8tu3AkLVhFaW3t6QvR1s3Nceky2fvoSRGSt5wPmj6oBDoEuY4",
  "key10": "2cGzVFmEjUdUgthk9xXQ2XPsTMsS1LvLa9y7DwpPCAaDMW6ksnpbdXqXQdRwUxjiMTKPkCQUQwPzCjA8yfHYSSWX",
  "key11": "34JH6rBiTcPSyNvu3zzAJ1TjYF9KyB9UNxX89sMyxZ2RmUibwba3SX8oaTukQfZNzJQ7nqrYyYUEeoSxRfS8KsKf",
  "key12": "aTKLZbH5tbNkTVERdAT81dTwgqyHRJFhkydfyHAYZN8Nbtwpu6zas2sKgc4DH1aiSoEpcBXCcTQeAyn2iAGBbiB",
  "key13": "5qCPip3YcP85saD79VmdR8jtMfnnqbodF6jcmHrZocj9X8yMXMh2gKzMamCbR3KQptaEG2rKst2eJQznv1Du6E13",
  "key14": "WAfVzaTMLDPEoUjcZ9K9Q987o8ETY3jSEEjtZ8Vsu28XZJ6Nn67WhWe47fZGY2r7Xz7oQeK8q61hkjJJH4tz8tf",
  "key15": "3NKJJfEhCbumeaVXZFKSY4T6jiJekUsUCAirX2fJHjkas7CqEQC13FPtuKcMXf4VtTd9rk6JhmYpX78iVBhxKzTo",
  "key16": "65gavYz5ufba4gqdggNoTRjrU94TgukDYvnDmwL7aaCs1JuPaXdiaDrABqq4EajxhLpDABvVLboSqDXEHfqqRPme",
  "key17": "3p6h8kg2XrhDqEDdXqDeFBu8nEC6xZB4W6HUYFQxWgWtdnddgCraEEfTeRH869EsbS6FqsL5BhCgncWv7mMU1UYc",
  "key18": "61iA6NCUN7o44Zuzb3YcJxN9xfKP5jRhzPwwUERX4MvAsPPHcmfMPkZywFnk94ZesEvXZwyE4x9PAbJdcd6o8Eti",
  "key19": "5EeriZZAmkvJZh8NGksbxCutP6sWApPJFB5E3swXhrgZdCiFScPZ8WP1nsmkCzrkMTeBXds7qFPQZLj1XnH9AHu7",
  "key20": "4W1VyJWJsssoh5mwssiMzxGcq6g9m3Zk3qVqeeVKK63itQpFEsAQhKLG8G1rYbtGZ2xrNatBNQ3FqgaZS6Duqvin",
  "key21": "2cEWjcNsFHkhw13Y6Vd1nWNuAEjtrnXZhqsqFPooom4aMAeQ2H6mhC7e5Ne5vtf7Wtp6F7izSqo5PMf7F9Fz8rpZ",
  "key22": "4qQtWoSYGFi4izTkEmTzaWw4DR8Rd9XHP6cppHP6ELWyoi7VCExGomt1RFw8b791fWmL7m7R1Y4w7U7QgG69QpJX",
  "key23": "5WRQEkx6Rii2enuxD2jJr7wnXnPzdZcDZdzkghBqezAjqDFE4z5CQuS9fAMCnrsMydFKrHfeWGJAHCZKFZoT24f4",
  "key24": "3Jt86QfrwANacJQxVLeEEKEmnZYcQEG1Hau5tw3DWopimvFjKKwQtTqo23WS5mGx7PBLR9T1npk3PDdW6n4ij91z",
  "key25": "3EdbCgriq3SmzhEdwMBM1kE11wotnaTAcMmwJ5Mx6qeVL3gizM8QUe4kPu3QELufjvQyzc9VrSn5dN6bm8YPwGEp",
  "key26": "5j7GKwp2KsgNNALNAYcWgxaHuyuGTbjYnDRYJ7zvhUYju1NQ6Dk4SZfMoA1p3UvodZ9jSXemZHXphwUcKev8aZxn",
  "key27": "5sQg1DEMVP36v1K2BxD9SHPxBKMzG1uhSiWwZtaqLADoqgxpMj5zsQ1RCG5imHXJ6qCFtqMPJWPNFoykqvQ4UU3f",
  "key28": "33fwD9RZydHB3CVHHYUDQwtETLdec24P7VE4qzNaeSr8SuyuZaUgdxoqgYvokQYHEMKMup5r9S2Whfet6QuWsNqy",
  "key29": "4kkGJWETh61XJMjwKDBrBwxawbSXtY6ttUjC288RWctngjEgpZk4VsAfortwRoNwZ2LPSNG4GWaztUzaB4vyebYG",
  "key30": "bwtEyCUcuT9e6tAiy7RW5CpLGMuESbb8FzAnk8MxzQLkQDzjrGcFJuj3dz2WzSpvpLLRqNgPj18BXdfKbzEVyNd",
  "key31": "5xHM9CSyvmDqfnRozw6uXeGcN4CwkQ91dm4AvXUAL4fnnBmqnqe2NfPeoPm3XEGowFoYQK2DKcvcL24ca31QGeLo",
  "key32": "3xiUAG7yKsCUJL1hGLmUXyhRP39hd7g8Jq8y4ZdHmBMhM7qjgt7i4xgW9EqXfRPsPBB7xsDS23RJYD1gc9TkLtmy",
  "key33": "27ZFdg8n2hCuo6cwcqmKEFdj3vTT9qbGzdrGFdrPq8ugPbGc51ig7TmfPHS1YMwQNAmMrRfKc4n7TmtRZspkaQWN",
  "key34": "4VMsSHF7sU7aBShM5uPYke3FGgrf3odtAaT8pi4BKYcWbnr3wt4zxB3aLxNkZbPqdmR3Z4wcyipN3HBA3ezxy6Yc",
  "key35": "5MkNNqyxqbUdkpSVq8vbNtivyFPeEgcDXD34ZoGt3WLmsqGtyzPRomvXQ2sch1NkCHU8BN3kTe3XydVqA9ewvHBr",
  "key36": "3mUYDB9KXnRutzAQM9uPR7vtKUq42Qy5RqzmgY7fmrLVWX7fz89GTqRh484bt1SQZ4f1EUQGGyo4FoZVeniNSSoG",
  "key37": "z4TJbL13wfuT5mKJKD9UzeXCvNHf4BZ4fTLmCvJV8P5JE86PSxXuLXRash8sibh2fWroxGhBV3DCjCi1vUVCrFR",
  "key38": "48aW8rpNNBq5a1zdTHoogB7B3EyS1nAxp78tx9k3XuTSFsUpUCQx1Y7FkXsJ6s3RmGERR2FjrtpvhWrP6hH2mFN2",
  "key39": "32cER8xMxaarykbmE3Z2xBaz3yd393PNjMhdtFCV839umdQU9GBEPCTEmDPhqGwHw176dBCqJspCMyEsXXwfiApW",
  "key40": "66KSG2CqYYnfcv2Q2YAFpjRV2YW854zEZWnvJKPFnVe6Kf74Gf2Nsxk48cTZEiHGvWEZirXtHn8yfTi7ULyN7NEA",
  "key41": "4aEiwiBz5TcaqAQnsxS3a2EAhKciAP1Bu6Yfx8F8CWpCXBvgEesxaAkddvq7UakkB54KzaK3TqkYZsqeqPXptaxH",
  "key42": "3uADNymdTEe3XAmWwx3dJGRGQ19N6AuENRRZ4bcmociHNycjoDN4EHNYLseMrX1F7aSCLAyxzcZn6MCx8i4Tdz9u"
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
