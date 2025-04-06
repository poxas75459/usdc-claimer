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
    "5xxZkLvt84ic6yqUSmXfyhuD416fR8JtpPA5XsPJm5PB3VnDir3sNRrxJHjuYeWLMkBQiCGL2tESLtS9zdAQ34qr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3C2rqpUDPrE5ptUQNjQNzrL3QKHXfhGZnBBoFgrYHcDb4oSVujkQ19qJCEVDDkgtKnkfwbfQSYLMbjsgTRakS79L",
  "key1": "iBrC8suMP1CasVCho9SRmQR6TeDACcAYuAbNfffnjGLx1ouRgD6vnso2zcd8SPBTviQBaB6Ses5YModNhHKXiWJ",
  "key2": "2pZPWCd2WnWDmkYZMWfL9M5rXAT2P49F9ZSejSdmsTJPWHqDvPg38hnmcgkjjupEhZRu8CAPiXxvnDTpjbNKLdds",
  "key3": "4D9epBxEyJ114Lmcq5AXARtd3UKxLGDdo1GWKTt6m5njTkLyNmjqe9jETYjnjGtJqwZ1oKk6h9J5iM1bPgwBR85p",
  "key4": "5N8XN4mHYNpxNo3zhUAuzyarUGqwYWqQdV5vpLsFHVCbb2JzdCeuKjbvqFREk5W7gYoEKvj74KqxEFKEBoMaw4qA",
  "key5": "3fPnCn7sexoYyK6fvwnad7aN2Ucq11KzzGxQ7LRht7GVe2HvhpvPYMT53xcGkx3ekzTYRJTbuVbktrMADhGcNwda",
  "key6": "35uQ5FKHqJqdgxTRxQAaNVWTejjyv2b44kybauQQWh8QXUwjSKyjcMBa5xdrGca8Xvo89iQoUP48gk9JrpeMfSxz",
  "key7": "4yD5wLwFkrYWGeRjsfktpa2FbLVtG1oSvyyaqrGJmuLZ6UNwvwzqFUZPWCURvaCr4JRXoHdpZWCHT1wvPMBu9EFB",
  "key8": "3XrukvRsEYc3YRrk42DereJ4do3NBmSR6g5boPreA9gWd855ioCP9xxBvS7t8ebBc4wqkpoEezxRPtAu63yq28Ge",
  "key9": "6Fv5HkXa8Tsx5JBZHLU5do33X7tR1J6GLdG1fbbtE83t5RBBptPn5Q3Zb67nmEGjLTrT1uDQaQF1SEyzNDDRfQr",
  "key10": "61RdmYfUaAy576ekWXvu2U7WUS5Yf9GUB3sMf6PQ9zFNqwH5itFTU3xb9aYz4P1TKGX15Lu1vjYfpGSgCYEePqjT",
  "key11": "3oCTn8JfA1WH6bBXtLep8HPp7SHYFLDrK6NLYXDeDDe5VcPYUnRtik3xQ5fdd8k3N8spog3DHnUsGmMu72Q62oTc",
  "key12": "4mExHTjAtenw2RHM92fdzwGp3uMy2BcmbTxrduHtUqAac893yFAFvkAQQLANio8UhYmRGHfa4pTiH9KX533tyroC",
  "key13": "3D8r4p3ShE8DxzazEznyKXTWDWXyGaCjkj8RPR6mpmvZVBxm1cWZZdTUSxgJDxiGGeh3Cksa2wwMgPR6BbLPFFmQ",
  "key14": "5mYJvPnsJEGRs9ESeuxkpwYXnzyxFMmC9hgzbhWb98x2dkUBQvgrqLHs9nAUoMABDbEtX9hGPstR3mFkw5cMaQFe",
  "key15": "3keyqy94MpBiD3FRFqi53QyX9RnpFPbsXr1ViMzKZ8veozsZf7jUyEgpmnJe7v9hdpX4s8LShkmEgyg9Woa2K5ag",
  "key16": "2QzMMGDtVTabPHm53iUhr6FG2QkYe6N286S79Yx7QzjMDCgsg5B2i7oEviZugCnM8iQcZA2Yvz9nZEv6fpesmVLW",
  "key17": "3G5pgbNDdwCQZsJYttuSBmPXLfq8DcdRNngf5N56ZaWGrsAKNqWhcLJMLsgKzFd2qKagja4utiyUo2TXRnfbK1kw",
  "key18": "5wAwRMuqHtXn1MUBgksZu6fzJ8MLaDRwLXeNAXN15rFjWWwiozTNBZbpVRyCyBJhRQojSyUj3kAXdBBzcv4Xxfvp",
  "key19": "4Usx9phcEUu6d5pQijBsfgo9bTdtJbTkDB2EJvtK6pCJN7bFHPK2kPyBAfQSySk7ArTu1Ayn7oaWgU5Jr6GvrD74",
  "key20": "338orfwKdY8HnTfeTmQ1Dr8xgSUpopA7YyUoRNU9De7JDxX1QvvBj4kfCjyuiNNm4MoxPSMAozw4a1uqGEVLbzN6",
  "key21": "3APtzzPMkuYaX8FqWvuMLDNnfVPBWDSpYvHT5cTeEqbYatiCemepcwqCWnqdWt3jRwdamVvKHoY88DBwGsQ84JYT",
  "key22": "2owtzQUBmqzhPPrELc8XDzzog6e2oSReXJ6FAPtnEce7DM9yfhH828qbh8hnjB33MjYuLAZ8gnwcZC5xTkxHxkzs",
  "key23": "5EVvEnZguchciDiYs8xHvx1tDV6QzaTysCB2KRFPHhoBpbiUZrsjsNn1AS5UWrbYKU5M4p5tmjte4YGbKuF6bMNL",
  "key24": "7muxKCxWKz86UabU2SKFsXYTtheU31JRcMeDYCfVuJj23TUyjHemTTV7uUBe5KfCX8oPWj16ENjyohxz4pSChTQ",
  "key25": "26L1xU95qhsHQcQQbrteTPv37QcdjbK57LzcTeYsZaPGM3FH3HJFhYtvEXsuzNaU1NLHP4KXgsKaZEVgG4pbC4h3",
  "key26": "5zq74HuHBhmEDygK3PbkUVCbECarta9mQW41urFm8R3ydR2wyjTcLYkfgU1ghS5cUjZ9CMFBwAdmzLMF7WK9S2qR",
  "key27": "2TgE5GDKpdkNossnSyWEGH7oExApTD2AXBkEfeQ7NAFkBRxmgBLrTQnsCgWeCHhxqvY85N9Yp4nuzUZzFafLrBGB",
  "key28": "2N7JGKYGQHAysBAnxAjXKFnpeeigCw7a1MaXugYBYTQzE9DmuZZYyJa83C6189PBAvEmounqCACCzCeBbxnR8hdV",
  "key29": "AkX8xfqqZVZiWvmhm4efEejRZkAKhypPuDdrVJUw2W4C1xd2zzToFwwvNMpvEvkqDm59cJxvPVQnKWVpu9QTefC",
  "key30": "26SZnrAXFKhizeP78cPAyX9eXTU6gDJoCAkjTc9cGGc6Q9CSLiuX1qRMi1YgFPpsXJkoLX1GRSd2EfEJ4HM1fw4Q",
  "key31": "cSeJAyBNdjGKip2Ttkgp4CUD6VLDv5ktGCL6dctcRxZLb53tpP7i6MjG6K1pCvGBmWk6xVjCnEs2M6GssftNfCW",
  "key32": "Cj3b8s8JTkMrKnW5EXCRKNAJMtwhSAgRqRsuUN17ZA36qEW4jrwbM93U979FKDgzKuXaT7x3nAGExbaWWTfvzaf",
  "key33": "2MTJN3828SeLTTcCsnxjs1ZQSQsxJ9Jp2eCKGkPLLgmQGAvMygEYg7kQJ7s4vTGLLjW8zdmUZZ7NEWe4iALXsSYZ",
  "key34": "5WkPat1gLwDawpEBspaWjg8KF27XQEft7riwRhEp5bqXoeDZTsrw8kJd2mF9j6Y1wjyZ7wmeKTzRkNS3MLsvhs74",
  "key35": "63vN7s6JXWCezA4vZnHWVf3Jiu8z7Xpqit7yPjoDnF2XMrnycgSruXsBkoxrZt1fJzDY2yQpekj7g9Ry1TgZzXcP",
  "key36": "3VjBn9HzcTdiJ7BE5qEymnsVH9V1vpTCttzGiGrAqE2eG63aAJcJcTTGkQYgeyKJW5c9rEfqJSwhszPSMGSC9D5b",
  "key37": "3M9uYHrXrv2eJJRoJh12SExTFN6gzHCNQVUCs4i3GVVdEL6gLFEP96gmZKYDvg2e4HtaX6wF9uDN1ms8aADpw9fV",
  "key38": "4KaLAW8Z59x58ahSiNz8qYLGjEAMj6A5xAq8dDKd5u1ywhvLckVGNtWCbJTqhqAMBepsBt7aJQWry537JTvdUfhj",
  "key39": "42h3NcSMggBqBwS7QKyY9MRHdDHD9pPPxnpUzgoc7V57eBTJXKkswRRrJCVTvXjivCVUwGXAFWSgz3Ue8gGLGS9E",
  "key40": "3jwztqJYPQ3Zs8kT6tJ6yPRwYEGwqmMGWxM2NLfpRdumbCSbWLersheXsQW9Y83vSrT15g6zxJqeh4JwFFbew8TF",
  "key41": "4JsLzZjP8zWXvt8ZwLFxDUx16P5Wn4zTNXs3wCqkDcur8gnQpA1p52SFB8KSxqm7RBTZMhdJMCtbxyuA1wa2T5iM",
  "key42": "4DdVfhfHxviTwunfzVMbn1aYFnjNd9XE3ZFP3iwgKwtDxiJnjQHNzYfHMgjEcdACtWoiDA1W386DH7MZtq9BogTU",
  "key43": "N26tXX1dj5qHcY365j8V9ZN7F6z5iLbegFqwMaR8bhZxGKg4hBoghBxBfafjrtJEy7fAK4FqeBZz4XgBXqkghmR"
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
