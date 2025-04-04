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
    "8RkZQCS5DukzJ9zW2fjAB28faHJQaofTHxcmtLJFcD4DFCxgNL4dyJ4PDduCSo3y1AUkZNR6sw6nJRa8Y9htSAU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4dhoE3zjqWwPgMfHk6aofPnMioe2LBANEFYJ6zQQXzLtpZC1Zh4FVkkDugtERULBG6fhz17W2McgQAhaH2baWn7w",
  "key1": "A9c8S7SqvR56H6cDUw2DwFreTjM5WuNiqvQ3urtijeZg6Mdsnqo2ZUnJvBUH76FTCQM4P8oPaqQoYFjQqApK1Qf",
  "key2": "4uJ4FTPXZJbkjxb6LC25an7o7EthmqwxYHEZKNRephATc4oizBpzogdPB4gWwAUV8yRMN3BkP2rZKi1QDFpGr1Xs",
  "key3": "2agvj5gfDapW2RWvxshjY48BKqHVCTfRV3bHgb7gKsx7j3VHzGJwcAxPG9UArziTnu3fv6rzSqaBCRmPXp61LD4c",
  "key4": "cdzVDgQ31bgw8RNTvR4TaUNBbGeQTmYedKNuL6RzLhqCoFvfPRE2e5jFBMnwLSpdaSYjjUhXBcWCpneGU9gvYfN",
  "key5": "5WT1KJJdUqTnbDENxNn6hXzDJaSFu9hTyyvAxPD1d9YDW8KoryDEVwejmpLNq8q24EBBD1BAo97EgzqtRhBnWLDM",
  "key6": "4oCs3YM84HSJe3PCPLxg7c3Nkp2iWNqSP7a95Q531JxH7pbVbsbAJQgyiYikfiNME6vj2UrAG81BqApcooLXEdcX",
  "key7": "3skXnmncWarhtQZG6jny76akT4AQpZsbvpLjmFvr1y7HxsgS9AnUFTvfZLmFV2rPq59ndZpiFUdm1i7Aw6gJ31Rd",
  "key8": "4bfGFiLKYJUzLLahyR7MPr1cr3UyDFt5NaQjE4z8xr8Mshzepj9t1pYVL3PbrAYQvUYKEuw9uGx1HW1hzBFGbjUm",
  "key9": "4XeuPNxEq8418MPQurRN94DUucuXMrE6VU7sxnfjRRaxq3W3XsTSgdjPfiLcF9d7AnoynXguVNWJ2wj8dDmMdwbQ",
  "key10": "3nT2DVpTFcTRtrLYqacH6UUr5Zobqe16ZCSujrt6y9HcvuTLRCLqtYP4RP4r8ouC1GBA8hY8jEjx3H61tnERmPMz",
  "key11": "4GNELfTaaU5WisjVCRXqz6QqMPGQJXd8WqccKLXq1SA26hWAEdss9hu7Hydy1YuWvxkHM6JkrJeJmjuz4we9MVz1",
  "key12": "4r3mGhbgpKuiDz3fqKHVrMXTK2QvzrhCheUhsqGk4CPov1okBa8SZnDUo7LdfPLBnmVdRwwY2DLkMusaSRqW5m4Y",
  "key13": "5bTsehgdSf8nHdUHP8yfbM2bqHi3sAAE4187sJedPvh4UhgBeXnT5Vo3sG3gsCejKKLCr2gFY4PXTU7F9N5JAEne",
  "key14": "sW7SgcRdJkmZ1rub1YQs82fJsGcq5aLgcG2zELjLNQ6THXLjKY24nFHcSKTXXQ98BHpwyNtWKd4U1DgjsZ3tvix",
  "key15": "xqVdGdH2gf42xKHRqD2FMbZAQkW6w4GscRyUqahHrey8YtpJZ89kz9Z6hXBMHsi8UPyTDfamrhqaTDwRvAHrRbr",
  "key16": "2ycPretQZ8ENPfsagPiNgxNUJKk3xHtoKZPyig5zYmyvu2qKHFY3yNPUtCQ1iFpkwSunzJvrJoEvWWs2hURTrGGZ",
  "key17": "3dy6qaaZPoT1kmjsxvS9K53riuMdje5MCNhciKbLyofefaHTvuZoFUQ9rzQDown4S9mmH1vSZ7saRsmTUGyBLz2W",
  "key18": "5KuNBo68afXPTDTVUsAdKi79FPNmQ31xZ6BUnQeXcoYk2zhqMB5RVXixFugDbDGbT4f1WDh5Qh9GVGFyxpnYwska",
  "key19": "4xHwCen1mzvrzXZNPjssbGUoW92ubUF2bCXyzRCEuqj5hkQscHkyVp532nvWd6wXz5GYe9xPPSaEHUxUAbC3GSEV",
  "key20": "brTGMcWfwgrE1dFFhvNhrZES2hEvGgGDgbgUuurpi8HVaJVXLyjCDBA7Ef5i57HpfY9ceg6d1EdbvJ8pioqEaTZ",
  "key21": "562juvaCCoLvPzPnM5JmGD1ymWknFvizDcUZevtQ4mnQLTp9TyqM5HFEM4Rd8AdG1fYrCuP48k8UUVX26cpCnBun",
  "key22": "jCLPx4LL3YSXoVp4KzHH3S6W4CdDeE7ZRYab5eUpmjLcZmmJxo9K5N3RoH6RP5VaCjJyTPtohjBmijD6eJGtXv4",
  "key23": "bvsSs4BvanByqbgr526zKMaZniVcRFpZ76VQz5DMqkcKzJfZ8XXuD433QfbseUvwSD9eHnzJM9xYPq5f9xiRdAf",
  "key24": "3P3jkHVTaCZtTK8XbHqcCJ9Q1XDkNoBr63hbD7emA7MwV7xDorX9AeGQwXhhm8BRsP6pFziAkbyhdot1vyjz1ke",
  "key25": "4jbAWjvRtchwqKhEtanr7NMTckeR37Ur2etWfsqGcSjBWkypoj9PFKLXV3zUzrdKAqD1WnnotocGmws8jA3gr1Sr",
  "key26": "3zxabuLKmtrAqJSVBQy6VDPTxEqidHUCuSwRgQqV6xymFu5CCt5cFVNCNdHH2V1it9LHS266qMrMwsnWU7EGyCNP",
  "key27": "3mNsN6iDb9b6hSg7RU9ifMfTtDSgULBfnxR2nKgSrJyQUrfybHjsCRBZDmobNDyyMCTT7s2mjTU9mLunnSxsVikt",
  "key28": "26HSPY5tuY84i3g76tknniqp2ubfQPcZMXZz13C9RKP9xMVFzHEFr7xnAfBmLHMcwHvzCVfwMS6Sfb6yJdaMLs2y",
  "key29": "5YNab8VVxb5edZJnavVJqGMbkLuoV64aQJesfDmaQm6y1qJrg8SF6j3VbWoEVEKNZA8x3MbkzhdhAy2JxFfxjD5A",
  "key30": "5WmmHSxUSRiXyav7rcHw8SkcYJHECH7AHCKXmgRHJWf7VhfqhzGRrb8qojNEPnwmybJe5LG1PnSiFpBCavewdLxQ",
  "key31": "63R5Qg6yRg5AoFLhRmTYS9UoVNBgD6jx1EVm7upaLmkY6VRZy5EwDbxiaCq7EPaEVwzaQEUpZpELk9R5WN5dnUhn",
  "key32": "5sG8SkndUmUqeTxLGmR1kksTSzvK1WjL8Ne5V9oRgZ1d47pFiMW7VodsxN2k3RUpA3FqUrrduBPkscRy79yLt3RR",
  "key33": "3ubbkY92bZT22Y432EnVugfW7xeSULCYsrL8XBHYNo1ei9SQmqN7JZheHukLUDdJf5qXfWb9RGqSAKet5Z4fAKDy",
  "key34": "46WzFavUSu51GaUREgxGGUs8bMCu4L32A4sKB6ZctcX4UnqJEppjmwZSyCCmoaMGZ43skyygUJcDabM9HLkDXaUr",
  "key35": "ybmbYURf7LnufDaDdKyQg2Zrm1VZ9GK9o4oUeWS19nE5YfPgLXiRDWG8Z5wTz1ajnWU9G3JBa8cLXPRay5W7naw",
  "key36": "5eJQafVKxXeWrDi4ELcDTcSPRvnWEGwEfpmeZNtYr6w1u8ArfxkWy8Feh5RDjRqbChKVJBHuYLj4gRme9NsXaBZh",
  "key37": "Z8cRRBsXCcSFdB37oCk1xkMZKA89pZQ8z1qPqeqeaARGekxB7FeMRQrjn6jyrHBwSgo8L9fH3LFJXoUuyZndwkE",
  "key38": "5yTVeUv6d4ZYJ8UxxHbXSQQPJKAE7cb9Qjnp3pvZdHmmeZV41YT99uPmfkDzv1kXevLUu3nVT7SuUdA9jer2FHky",
  "key39": "44pCT6mebEV4FdMxXthLmW5heswEwyPMk2sCQAGd91wmPP21DebiDJknKXnw8UhVFxPoAFakWezVwU7bLvkggDzu",
  "key40": "2bwqVEpxmopwLZew8YV4cPRFE9jdprP4iaovJT7AC3oE8GKHwieT8g5fhr1cdR7u6ESHzYSpZdgMEiHDLkEogLmg",
  "key41": "4FqnKcMnLWkQZPtyqxJbR6XeWgQthvCepLcW5q4crqjK2UeRqhJzLD6CTcsZBRFHDUTd5UBgq6buKNteVan1FsPp",
  "key42": "66iwLeAm5wfm2enYiRjxK3zAmyQ4W5EYzXAqmPTmmNH4HASKpe3FtnpVSTYHPKTVwBU8gowCKZf6d6XFcpA2Zjj6",
  "key43": "39xfrZQ1caYPSqtzRr4LcvJoAte4RV9oEtVeXG37KYVugATVbjbzQHY1vu68NYNtyN7brgDPVobfuXuekhXeSDSX",
  "key44": "3VuNs3zLcQw7eMox8XjoNhQ9792qiuY5123GuoWtUFUXGByBn6k6UMD3ZNxCs2YNfYKp2udZPhzvYBCWdaeBMf5w",
  "key45": "2xqs5vESxFdiY8bbSFobgFB3fHG7JF5ztLVfjxKi3jMQRWqgZLSt2ZNEJw29j6VfZYSz4f7kewvUgVqtHvfk1qLd",
  "key46": "36bDURQgRtiAVZ4UAavzG8jKAYmFMagrPbMW63E1txhdPkncWhBS4qCxdznofcaz3b62GoeWitWMBrQo9EdXh41f",
  "key47": "4HyziNxBNuvwV4WMcBMWngvM4xxrvxyMocfNQaP5wwZn6C9fFio9ugNd9it6KrKtppkYHxthSAoGVFffCScif9gv",
  "key48": "JZmEXrtKJPzqn7w7VTq4GFt7MeVKBNvrzPXJ37WHpigbN9n66LjUJQ5dBUjWSF37mh67hnGeq3pfDvTXPNgPnuf"
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
