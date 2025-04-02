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
    "3E9mbGvkZEeKXc2UbT2TrQaE8FkvnDb1mUPeGmANAewJVKrFwPfa2DN949YykHnF7e4VfCi3K5TxEL4Bwo1q2bug"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51iJGR4c5WSFuLcuzuhJNkXmJo9P28cU5GE1JkMqC3gAuRdHFRVtuPnfqbeXFdu34DrW49oJBFHBnC3ce8d9XDFn",
  "key1": "3h8ipfJbjVJnMQiQUQuzmJ4ncxsSYmDYJ7L1TydZnqV8d6anaSeYGtW677VA3vDsKYjkwAxYMR6fEaHjo8uwYRGv",
  "key2": "35H5mq69EHhYzSPdqQDDU8kvX8Go8HyDfqc2rPx6XhzRsz3YPtqtHf3WZpcPtCmAXetXrKETnL2Tqjm98KoYFZds",
  "key3": "4LMCvF3DwQrTha7qsaJ9ZzY8drpsNb18gagXKrjSYuGygBcpYBKmxR96zgrFvou3YVSmuMmmkPJRa4sfn6gZB4Jc",
  "key4": "5jPeaxCZT6qoLt8i4Ua6X72E66QAGHkKb4JvicPGyND7KSsmZNApH2BBeQqRHoyjZDme8g5baAk2UZt6nASikwUB",
  "key5": "3uqFM8CXU4LRQxiDe6xpu27W8kRvcGR3xNEbskEz7SdBXrsv2AzXYhe6EUvkBKXHkHn3AnLTuUhce39kmuWxds3B",
  "key6": "5uMiNEKvhWG8PyozbqrUHheHeE4jVSC8LWWt4YDnP8FzxX4xuJb6YNjrs8LkUdzxoL3C234o3WocDyUvKmB8F5MY",
  "key7": "3Ms16btdVeTj28jgXgqhTA3V9nnhwqk8bHjJz2RV5KEfWgJqFGqLBVb8QPbzt41C3KNdKmxL46Cgk21KBMBrAeW6",
  "key8": "5S5E7Fqp8D9y4ywQAxjhj8YHjxv4eRdapZpkF13f499PqGAgT4YPeE5KJ2DnNUj4qt8NqdmZekoA2YZKSyvY3K4x",
  "key9": "3fnDXpU8WPkbiXrmwsrXV7hyoe7EW59sbjoTyPjrowkAKbJ3YhcTQDttGwrwZxWckHJN2KLZkG9rZftLgA6hDqh8",
  "key10": "cCGizfbcrB6uy7FyZyAxwMLAyM6za5o2UUfaNRitVTDG9vy5mAEsH1qeqkAcqhkCNtMApDy8nBpADEw2XUm9gLy",
  "key11": "cyaBcq4LDvtCsz5Wnrizqz9bi3QsBY8vJKpD63Cwg7avTD9docGXyXiNiDw2c6oVAG6KJv2yb9dJ1iaRXov76w6",
  "key12": "3CejG7zvBqVJwa7o14YK83WV5L5XZH6zQnTsdxd2SvPzd1XU2Pqmpd7St996nzan9rxKJrvi4nkAZxHQGydU6WKr",
  "key13": "2ATAYN8tfuqsDJncbLXJb9cUhK4A3vcXb6oCfYe7PVX5DbwQEkBBDs3TANWqSnM3auJxj4rBYTYZkysjUdmgpjdW",
  "key14": "5d8XRFYxTtv3UJUx6R31h3UH181FGNyS7AyWjacEzLbWNR6s1T7Ez11dyScwcLrxDgXde328ZYSpu4pmHxML4PrM",
  "key15": "5PEPFymc9YjcgbniHJSENMTxgxEWNeixXC8sGm5xzErj4JUSJndGraaiRbh8KS1bStjfDTxTE52tkTxryXoyTCCv",
  "key16": "517HLvVbGF1GZrofxtRFfYju2kKaAg2TM4diP1Wi1j2EwwCyMPDXVWLwuctfe5QRMH1hVKBwmqmUTTup3j35TJqF",
  "key17": "4iCMNw65zPeGosQVrtXKZVTxgLbVoq6sh7XzakBBPtraAPxpovP7Wg4R2zpFVusaib88cSmZZNEhaLZVNQfSAgJY",
  "key18": "4GkpnJAhLZ2aiKXP7M1kk3fmLaEoSNK9jMnrFZcnFXMXs23Xv3yFGnccAkrUbqBFsebbKemk3ngfFTCZxgX379pW",
  "key19": "2XYht8VZ7R4mPp7D2bHx1J6df8yVX3jtynSvzqdnjDbBqoyL2ogbCbPtGJuDVuvRmqhwqZLdSudXfwsUQYyDTCZR",
  "key20": "5mrFrVnRa9Su13vzPLyqnsPhWbjDnh7oHFUk9MiJEDuzD6BEafMYSwsYEYAncXbGMSCMvJpA23gLKVMVLfs58oK9",
  "key21": "ATzdX8bWQ4MGY3KF7ATj16XoyivAJHoH3j6zQYhU7Xp45fgHiX7kqMtqP12qC525E7NmmqkAdY63DbR9dwEWfrB",
  "key22": "wqiHPAUS3HS8KCmGfQDJNSmmHyYmC2YXKGQjMReG4XxANrwjNFBiEuvzj5rWvXWujHBdcNxJYJRyZg7r62iS8FD",
  "key23": "nuxVRA3vGKp7jM1HF5xCh6CmjqwUDaoR5KgCT4doNjRDNiSBhckMrycdDPXWLWbXWmVMe8Sd62CzBaWPq98qDbt",
  "key24": "5whjiNa1rqYioS5qnPLAiqjjmCyfsbsnBcfBxrkHd5GWrrLAyxbarCHmQ6tU6Bw6AMZuYaPd1uGNufPqUgVSjSjb",
  "key25": "4zQs4grazxCRkCVQa2ZvVdkSP8jYaq4uYjEWLGDUysnFQjxgsx3wneu1FAuKUPyA1HJHJ7yNDFUeRLw5R68ZNNMr",
  "key26": "5XGe1vvDJuyJxQcCEACoiVh9Q2Fiy7YatWrwjUbuh6P8c4GAPimt7VyWCCZGBtxDsKeSwgYtNLLSAjM83VvrR8ZG",
  "key27": "2aN8kcVCSCdFYV78wpX5Etz1i4Get6vVp7f14xgW7RvATGBJb5WTH5JTX43AKWAtnixDSLVi6cXR5ds23eZktQq8",
  "key28": "2DyFBe6DFapVAF5BG3nQtYWJRiXqKx2JbBi8cqHibqGTGuwvY7GxzAuQnQcXJG7zrScqFb6CD2WtxnAzSQuHs1yM",
  "key29": "4uC2S8VH8GBzPjPViLm777eFNfSfcNrr3zddau6WT3u8D5GLW3kJWkRfcuwsLhRgHybQPJAECo3W7C8QCnYShhQf",
  "key30": "MQf6LmzvtXJAX379UgpY5mcDM5grVHrJdBsh7mWTg3pW7ec58tx4VrJ6qSakxoMXaQXRxbmEjx1HurMyhKwajPP",
  "key31": "JNMBFp1ne7dGEAXYx5ZT33DAqSDdB4aHooNkhArZ2ebUffWXMhqQrAmyiZE5SqgP1gxHpAF7ZmVym1BGKBGh2yS",
  "key32": "4NaUuXb6JEEAsBMWZdeUqLdRH9UPhCeDqHdKuaWzhP22d8PqxQKyK9TeUUGqmACAQCXiid6tZHLPMnFvjTh2HpfT",
  "key33": "5d9b9Bvbr7oiT9QGuEZ4y47xrMCXeRrqoCWH2XUW6Ejx6kBvfPoyX1NYbCxwksYfJ1zo3h4nPALWNn7zYpNd6djo",
  "key34": "3h5djqnkgHNGjWopoGXB29JbWu1zeWzsPrVoVcQYsLMwS5F1GVV25gLRYkw4n5wixW4hBEQNd267cHzfjajESM3d",
  "key35": "3xrWZPcm8LZy7eXtVMTkVvJjvzjcEGdkSt4wcpWcpVQmhAQepDFBMdYgAXCZgxuf8pBm67wYwNLb5K54yVCbFyuM",
  "key36": "n4cKrf7VBuTeUbfhfrdnaM9SpBK8KxeCjyQ3FfQ1GMhE6SG72xEk2LRfjqwuWHmSBoWvEr6fBerUzBHwiQhvkjQ",
  "key37": "5WgyCrLnyhJVoLf2KLNddDE1EraBsVXct6JjZP1oWjHkUaUyJNdyPJBucsBrT3o2BJ8GF4RQnP71jiGXeKSy4fEH",
  "key38": "5GpKn5ik6ZJLad69d2fUjLraqPnJ77cUvmhJn1Zq6ULuQiDM4fg62sUWbaf6tQmh3iHrEcGAmDo5oJpkaSgxBKbQ",
  "key39": "kLDEQWzeYY8ShEyMCunjo95qnsjAZgtrTpPnhgDkbDzk1fDEXah9bxW8XXa3YtpChsNj3fhgksYKsBj3zVRfT8S",
  "key40": "c2biDxa9pofD8j1PUh8NKTu4crPwaib66EJuw7jpG5QVpi5Y5seQuZTnPBPqfNDy4zGg5PkNrJauZRac65GKmft",
  "key41": "611vKW7cHiQjJiPn9GcXxaHHmQqLpg8U2vRKheYAyEw5hnYDeygVr8XdK7oC9YBj63TY5cYTXoiNMzLniABRRkGn",
  "key42": "5tGabbTi8J93ZA8u1ZB8mCCsVSBjK5AitHuV2n4GrzuQhmR4C1ygM6s9JBfwojEy4ZmCa7mawVwwRs3TiujN3omy",
  "key43": "46uWA7k4mWdUwzZidSGuwY71sge4xZjBSPXna5vpr79VSjU7iTfZr1cxvhizsMdZmF8JuvbV6QGjB9HBx7UsAt7B"
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
