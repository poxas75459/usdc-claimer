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
    "54zRrE4zUPrKZFfowmo1tfRTqqRVgNMdS7qHCMVGKVadnDvTu2EQa9NoNgUHrNcrXATyd7pMyMGne2tcHgEE9dAw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5rpnmaxBxRcjb44XVGGmkTrM7rf9a4ZGtKt2nSsHQ1Apj7EZjGXKART4uXM2bwqLmppjDn1eNBW63Z73uBhUvhAR",
  "key1": "3iFUqPoGkrnuNw3WrDC9jyVXF8DdTumjxptCk859PdaXTE9kZDboCB5RcwFA9Z5rJKnhcyzf6wn8Ax11Gc5BinkF",
  "key2": "5zrNXiqSfPp9CA1YE1ho68i7bxMMq367h5orJ9Wj5WiozxEjEQnijxLxkSvBiovuPXfBYfq8yVJ352qVK9CPLKE9",
  "key3": "34cTn4DBfHtmJpykQvxicvp7iEvNEPfJDc5eTS32LWnM8Tsm7tTaBHhkcvw3uE3fELMFZ7dcvwwW3KSgC98n9p6r",
  "key4": "3meJTpH4m4V5DnEZ1yzDzQY325hPzrL5zVzRQJkEFfeXYTMZGyvLk4Wg8XPbU2Rgmh61eikHtCztQaJkd5c5co8F",
  "key5": "5KAqjMoWqab6go4YBLsBXVkY1iSejZoHx92iJc5E2mEjF87E1AggCYZFGAUcYQFhsqTjeYvBYVtuQqXjcLe7MrT5",
  "key6": "4zGtimqanaepHTfw4V1mNi5qKNLA7e7EKLtp14bQZWKHBwxdFxFRvuuzT42Jfp3Hm5i6eADfXdT2CAnE5a9TUCXh",
  "key7": "5t3YFTznMwXxrrGSmWEMBLSHWfP2WsXC4Eki1uwQ2L26VgTzCZnPY84fWqd7U7qKEqEAkpZssFNse5QEpXsYoqaN",
  "key8": "HUk5AjiSYocJNY8nq5t3tdmhJwMufNZQMG8G2yTm39zuSxWUTjQRg22pUGE8D3GqQb5gK851ZTYWEmAvZh2Msz4",
  "key9": "4orgu65uaxEWVz4EwwEuLbPJs2RXkbNbcKEBFuhvqCpEGkN7Z7nu1QEXXrm5vLJFfnawgR6H12t4eN9CuwKiQq3Q",
  "key10": "5JFxfKWPrr7hVPGgynSh9yoswwRvhWv6evF87iWHmAymvg9FrKFZ9KEH8xEk2vpfjPymjBtdSGoWB149WL7FnR2a",
  "key11": "5vUb73CD3NYcPXj2Yuz8ZEiwtKTnLDWpiF9RNTfMWbuS46nYyQE5DCWEKHM2axid15V4R1AtjobV5Z3atuRNsrjw",
  "key12": "2uomeDK3VXNjpByoTKiHKTzvU2Uj6VHV2pSLsK2x7EYXWeNj8REZHkKRjap1vgYN7fgRDLxTKCSHomr2k9db53CG",
  "key13": "3qp9T2bfejenMZHQ3xXv43NPAr6cra7nkfiVPunfyr72pE9wdrdJTMRmsnnQBXjEEuqLmgiVJqA6yJk5vzsczEtJ",
  "key14": "2exQGjp7C2wNgXRfSR43oS9JneXKLECuandK3veB4aksUwnKmcGJeDigD4eMauTFZrFPdMQ2XkuNdhfLZYV93njC",
  "key15": "5S6kue8UK4hQUGb9T8qfoALAkwewL5W7f6adjKUz8s98dXChQmB7hc4x7wFqE3p4cvG9B73NKaxj5zNq4fhykAbV",
  "key16": "42dyYFZw46oGEZTPbkjp5mzLR1xYPW3vALx3F1BUyNcxXDLXVr4zpKxCRQVsqU3Zvf7SvyGWvBXJ5S4e59gLnFZe",
  "key17": "2Pr1zkxsKgDCQVAhume72yiNLsbmUWmqmzsSEmb2Qd7okuimjPpTwKGYDfs95K572dU8YxoYC9xL3tLubMPsUoJR",
  "key18": "2BUDcpSCyUReGhzm1zBGcvb9zadqMNrGhPXPXNP3XAn86x3fUZduhoQK6xkHgu2RoakHUdBx53MMdsQd8ymN9fZs",
  "key19": "5uNUAfoaMSirhxqQz7eteguJyYGzx8aHpt6JTCywcDSY7zoLYEjiwczaHf7yDt4FLxhbVGx4WLsUv3ncbQ9j8diQ",
  "key20": "2yb9VPeKiqc4p1UU8cCiARprAWRrAg15UngzHMhvEHC6UuZRis7FNtn3ZNe4CHey5x4re51U9wfzMfCbFc2fTfbo",
  "key21": "UWc5sEFLDoDF7YyTbUHWQLbHtXue8Z9fRoCEwdKzHGPDmemrcxTCdt9Ajk9WVEPyy9oK2CaJxVGYQdLwDiqPwQj",
  "key22": "45v7PA8fRyNL296sAhSEyY8iA5yo6vMMUSkFQrMiiHYzHn536cXYnG6oVboP24NaKbEq8Rx2GJjFT373Gv4Y6nrx",
  "key23": "3jNTKd1dzT7Gs842zPhYJVxA9qbvg9xcaispH4mTaP1joJrRn3MexSkiLg6RXWCw1rncUoNLEX3SevBwUuyDVbpT",
  "key24": "2iaGeaLBf6ych5Zw2x97xJdvtfDxFUaG5XBpUNnV9dtnBrNcpwkma5E7M69P2WXry7hyYpJiTX2kKpdQgC29bW5A",
  "key25": "7debfHUtyrz2TAqGZDhsQgs9tLgpBd6HiW5einCGPwvk7Evy9974z6KbBxRXADMcq1xLgsfzmX9diSjXVCT3Mgm",
  "key26": "33xxBd1J8qMYfVNLwaQcTAbYcZ8hcUAYC46xXMLRHTr5pvXu5P8dcHckJndhyaBwWTZu7wu8EZeNqt487WGMSKLv",
  "key27": "58s5nakFDRpNMr64YDrFVsZUDs3fbzQewpEQB3hdbMPRESjSWefFF4HNATRkERTQqsbuvPhrbE9ppWbZnJCz6QJt",
  "key28": "4i1e6PVZoMujgffkdMFQaCzZrVwecFsCa8JaHtsHMNPaRwvAWeTJHpDiHEBo2GbguNg8UPNxzfJ2CNvLHb8esEwy",
  "key29": "4xDrHdZDAAjyKZPqEbWHAkoK6VJmmvz13aRumCGLkq7jn9aEdRbbPSTmWaxTXnkhisNh1k7U5TTMi1eio8UHdw1i",
  "key30": "x5kLgqT84FDy74CcRvxXaLEzgoQJwVGFvRdYcVyvaS55M46j7NnpE7VJPrZm8qMD3djmYiF2VR1XvE367KvcAJV",
  "key31": "PWsiTvhY7K614X7SWZTxQkgoY5jbPHxaMv8NLS6Wyf2Ug9CBJyzcg5UUDkGm59FnbHAdy6AhcDLeGriNfRdvARu",
  "key32": "3rNkMVtVxmyrQfHgCFqP9AJUnxKbeLBiWHsRP1grcecEdTMKnYCt5xENCCmtkYynVtEDnCCKiUBzmHk8YZaHsYJJ",
  "key33": "46nucFE9RKG29UXrAjhA7RosWUHekmaTdZa1fR1Cq8ZteKnhSMrZWnaU76uic6wxT5vKDrvdNsHEd5wxAdAMYQba",
  "key34": "46Xy5DUcd9EHui5FHzNZGcZ8h3whcePPUYX6TNCGmPxhiDwQpsC6W3maCwmPGrRz5QMa6PNVG3TmMPn1wLZgchTN",
  "key35": "4z5dtqgjQnkv3Rss9UcNzsdB3sYLTudD354nvKDfiWSLjLp3HoacKv5RUHvXCw3LWru5ULrfxzVgumWKs4LssNZE",
  "key36": "fLGSRV3k66FSQnUCTaSCkS234YixavjMVJ3DqUEEPWupzXuyrodC67u15Lqz6biMf3Fkz8txtmuz6PzFU67Ckgs",
  "key37": "2F1XwnQJzt3QVGWrUqewdiQw7sBnWXJcTZu9zxEWsVoBxG9ddxBQe26jeoy1t6SKHyDzszouHadAtkfbt3LYjox4",
  "key38": "3ttrXnqZYFA5G7y5qLu7J3xNcak9vqj6yDdPWWHwiUbjFjPUWyXH8Sto1vyRKsUGC19EsESBd4GcoyKWByXYVoP9",
  "key39": "4viGUUQMqqvnctStYxXFitPSQgm25de8b9kxSSasrrSzKdNoqQesfChXyYpB4AM6hRaFogvGm69KsbcW4oMxkFxQ",
  "key40": "4fVahQLfatgFkCTBQ7ELMpwVjgC9yEQ3QePPKRG34zqRYrWywpj1wK9QJ242K2PkUN6oyWZccvc5gVQVqxouTz1o",
  "key41": "5A36mLsDd62Ho9KWR486YQnmp7iyHBBcoxUscLvBBM6Fxt9SH3qNDdWnoGrj6mi4TEkbwULG72StR2FGdq9tjsU1",
  "key42": "3Jy3YcBDDUyRGrA8fuu58F6GcDZqnz1K6nt9bGMxSD1xVPDSbfuzmenc2Zxjh9edjNAyuWovVy1QcB3JGtvNi9cm",
  "key43": "4btK2uz4CQMQTLC4BwCnTJsGDYtB256boX9CSU9JHJUYXchbTSQvt3FedBL4HXupJKBtokY5pukCg4wXfcStEjyk",
  "key44": "5svrP3LEzA4fbETqUPKmCueToypUg2sGLWcRaxcrReKQyE3y4DTRPuDDc4jtL2fabek1hvLYKakLspYfX5voDHmT",
  "key45": "66XZyg6WkgF3ZaqcMaV16jNhzRQNgMx5r4QoFbu7FFpwe6E7zQypfnqsHGZRfvr5h4sy8FXduqXmwdMCQUJC96Lr",
  "key46": "4yg2pt2TkzcHXpe56xhgxddB6TaznhVe4xQ8X7vePjF9N7h3Ty5AbQKgNQX6MAbzZWRmqpXzSwkgb1CbL3V7Wy46",
  "key47": "tMYXvbmUhxr1SZuUbmV9MymCd147vFf68gzL5ZwXx3dGd5B6ZRueaHctknvWQ76tTpM9Fc9ZBDwvGsHsEXDGc3x"
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
