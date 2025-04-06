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
    "4PHEzzKpeTNcradUCFXKCiXT6wYF8wYCiL8P6DGRjeAnNEAhUqi559QSf9N5muxYxE4VW5ZYvzqUQDQpK7xdZN1C"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3FeS7bT8tVdohNBtcnJwtK1ToRNBkwpXCiF13bmj6LXveBJde6jQaA7ks7uVobnhg3ifNeGrQfwPdX3Zu4S9zRJN",
  "key1": "tGEwyEttq8CiBwcXhBw4LW72Lcf4By5FExBSMEy5c9ZkUrT4qLd2qL3DSDhexMv4yAUsLhLQyQpTLRqogcavBqr",
  "key2": "5pz2L8gdx7mo6Wsr3bkCW21f7Yx1BTFz7ga3aP47WmKDkJjoJxG3bYrqeLCgvk2DmagrbQcUJYWh2j91byz5h8Zu",
  "key3": "qiZho1Ui5bUzvajigJEh2jVYUEky2Zk4T74XJKXFDJyrNr31Qu7GVhKSJBjVTU4ipEJcwfZ6SpW2wSr7WduNPjt",
  "key4": "2dP5kgWkDXrxFJopwYTdmYdxDEYnMzTutgAwqZu6MiMwQphetUENppryNVMnmtrgdDiUFwvvTPeiuC9x7DR8GSPk",
  "key5": "5aWSLB7UAEpDNXdedoYsj6VqWbTr1whhTuZE6w194Hvfv6cLQ8rvUKQLnSMfWc6VQQ83R4E8YkYGF7LcKd4TLGX2",
  "key6": "59dRoZf4UPSQTBHV9EattdRzrEcLT7Ev43r4BGb9wriMQ7Ud2jbjgSydUzUr1Qbfan5JkgmGXQNNLKseBvZFFChD",
  "key7": "4UNMMgqMnsoB8xGqjgfcVyGy9TfzwmiwtqwkvmGUHb1V8TPW2DoqcTSJTXEiz4y6W426JWv3gmWPRYwsXBKD4STD",
  "key8": "2tySBwXkyG6U9aHvnxqJaccz5H3144dxX16uQZ5W5vVavqJt6TPjMipAwS7iNkBxE1yFciYrjSbarqsyWmQiR6z1",
  "key9": "4S37yuX5YEXdHCwrjp32R36URSUjt8wwiRTD34WuAWCe4N3FyhAW7Bc1rsymtSUvKpZQ3YZx9rGNB7MyCDp3LbkF",
  "key10": "2E8bsWzT5H4jHYKsCdVyaeUV9poxQpGZ3fFAQEGNws9L1kCxL5HEKW12rPBuLexEEustVKULkysbS392SqvAyS25",
  "key11": "5xr4f81bTAZKFEsYocKf25Upm31DM8PxLv6wXmKrBrmLuek4H72PnLtSFbjaAyencb1J1JFwGZuCgSp9f5bSCvZC",
  "key12": "3LxDj5SHVWrNTu8xqYfSwm3aBMQ5TMj4AKD6ZZbME8FKmrUXg1cg3EC8FHTTU6QE7u2UdJ6ui6qga5w1maG8sNN6",
  "key13": "2Niu8G6A7pVXAKxF2pesF4ccpzLD7ZFnEsDuwy4gbKttN8xyfPR3GX5PSqzsQFX4UJdgHis65jPsNZJaN4HXKwPq",
  "key14": "26Mr63SkYhu1VaLiGe5p7FwpkfHqmviQKmp1NPQRb5APnQ4M1PG8dr4um1qgH5JWgy1a1jyfWL8gjB4qWBcwrs3Y",
  "key15": "51mkrvJupqaVpyrDZfSJW6bZ1Vcuc2sFeKMCJFLzcqCe9jB4yWvuGjM1RuFQPu2z4XTc1hsrG3CepynYZoWsh6jt",
  "key16": "2JvKUC3annycGmtjPMt1f8p6T9z1uGGs9aRyCHMsi1JMrXEHpP4KmzsyaAjVkxP1WUWg9yPAieEPxn4qpifvxDk4",
  "key17": "47JY8tDvGqbb1N1yM6jmqheGSSzhH12qLjuBa8KCRfsEZ5LQZj21FAMns3cqaNK7SDmPBdKejABv11vcesYgVM3K",
  "key18": "SFG9fZ4XnyNKUCz1DHtVTBTDCZDbSwzexK34zVaWcJi5N32yPs9JHg5cUXGrcRu7yJz121HiosgybFyWKF8o3b1",
  "key19": "5bjW6eRBwLHWDn8BRtVDbXYsic2aav9UC6KzbWsoEipDDBmVACdHXPNU9pFQc2Rc4xb5jPzLs9TAXdxVmTD7AnsB",
  "key20": "4J6X2Sm4mzFrhC9Hz9qqAQukAwDZBMHYhdQnchGThnubciT7fKeSmYvCDCJikK3guH1VXo5tvQypAoc2dvg5JgSX",
  "key21": "t1s1o4HjbLYE9kaQHVJ6Liyb56VjoSWrBViK9HLr9sF3UAzN5dc3tivLwL9C86YMhWjz12jZvsPPja9hm5P6J7F",
  "key22": "5CkJZmpyi5AXbcBVR9YivqYNgHCaWo59qFLyAhwLQKSEYBmcEnv54f241shboeno5bKtzygSeQPR9Xr2JSHsSnqX",
  "key23": "56Jugo1oH8A8AciznvR1R1jJQ9vBx27NBkTqFch7obxD3Kn1bchu64LpRxdEonWBdLhxShymwK8ksq73odBTHGqj",
  "key24": "anaasXz1yGRRra4JSKNoCHNxhKQ72ihgx6s469QT1PT9umJNpMPdhcwMJshkG8KoXMvZw5rHkbUB4L9YG5rNyRg",
  "key25": "5MGrKRatVDAfHwaLHEZKxLaERP7rhc4hf6khGncWTpbAKhgqV7zZknVhNiyssJ5LnXSrcaDHbhWRpFAqUhFhb5SC",
  "key26": "23n4MuBEESezShxzBKELoT1rNAW42hxujqb8ZE4aFmgRALRLqNpEMgR5SzLgLcwDCKDtwrSMB84KTWq4FfhGcp8q",
  "key27": "4xeqNN9yJQxgugrT2HPyBuHDEeBCiDQunuaRDC1kuYBXvevhcytEvoAFEA8cYQxM7KvNv8u5N2oCG3iu3A6uQWRr",
  "key28": "4YHFN1i3FqeVi8Pgq7NGCwQaNAQUKZd3dEaqnfBMX8EmdwcG5x2PL4iJ8mxVkKPDFQCaSm3EUiEhMkAawLJYapBw",
  "key29": "4J882cBvCZMSqpHePgUGVyWdPP1CFzt8QNvBP1Y6R8mCUPCCUSLkad7EB7SrjhJbqbk3CPrRE3MKbX6NY7nGW2Bj",
  "key30": "wTm47eDcSxKkV5evStXw389JiJw8shksi5wJxpqVjeqrWMQDqFoimmYx7GxRo7SSxShtX8bm1BaiXcH6ShG2tx2",
  "key31": "4V27zBhbdDBiKe1wLgUFxy7ekiTVgkiDXYqJu5FtdDFAUNeowLU6CYBZQs1uUc6KtcqNu1v1vZpCZwPL6eMn1utn",
  "key32": "5KssZivZQ3uu1xYTa8FRaq9zYk8iLfgiCDUv7k7r9Zwzy6kjaAid4cEMEsNJ8b5gmSE9jFH6HZEMM5RnmQA6Styv",
  "key33": "42zgeaKbyWWBxb4tB4DmFGFiaVFqeuYgzQALKkshFiEqfjHjDUC9cxNka63hNtJkZSrVABFiCDRjyoTRycJRW4MF",
  "key34": "grFDaHH5m69smftxSMJH8XcYj7PmWaQJ9yMxrymxHQHzLBh5vkFcfR2Qx2HggWbMsSHVAtCDoEdxsHqgQnXyAfY",
  "key35": "mzXHFoKMAQXPhr5PUBCsvwBQyqrjT5zYd2aLs8w5uedFLsFTecwZYJYCWky1z7HVpEG7DizY7uFHYcy78ryjpba",
  "key36": "59VMfUSjp9PpN4Q8G5U4D2ib8hrCuVwpw6XEWiUmpQWQNxQsNwUTXxfKsuA9gcYmbKUnLthAFgoZFy33pdLrGZtt",
  "key37": "2V7TVFkcndkSgcixmepAj5CXkbifgHpH3ZmJqBBNG2vYEpTM7JgGTbqasijJnkYpyJVwgHYdhQW8DdhdH7cpCXDZ",
  "key38": "sC7RaSiyVQwZrwNg3XSqxqybxDyUtFzo5nYGRW56EnvaCU5ciUwSnRm6yUyAJdQSDaPj2khzX1JEYBmB4YQLnz8",
  "key39": "oMScvqGaTtxREKRQYkQuGiQTheRtFwqN3B4yszV71WLQx3qPgBKJr9tGtjbUvkSrf5BotVeytSFBv5zBCb9AzA6",
  "key40": "4HQgTtsPhBQ9dadKzTgYCKficquW8VT7RFiMyVSvtQm6x5mdyVZsLAE8QPQMq3yLDQJ9SUaZua4Rdvoq2BSuvab1",
  "key41": "4i47exz7a4cceuF4aqXJ1eqQxP5g3V2WBsLuWfFJM4MDARb9sjwKnxyr78kkbPzZizfydaRPY6HosKiFF9YeMBvv",
  "key42": "3SvDpzgZwe8tDyDVyZhaNszr6Rgz1VFVqdH1kYf7behJQ6xSdpdXAYef3jv9WfHfmEfFfivrktXGH5B79JaGNGpU",
  "key43": "5TJjSFmD84RHHS78qirhLnjF5DoRkccqYR6P5NdqTfvqpdnQ9DL4czceR57M55aPRF5GAKscyXHo2rXrLhUkWGWn",
  "key44": "U4yp524efqoDcsdKN7wqiXNq4Lf6hQgza3EuQsXtHshp532DxBUUZ41qYVdXYNc2ioHKCGM7kgFwSExCcR5gNhM",
  "key45": "3Tnr2npk19cX1sfveB5XWKZiujaBbTLawAeNkT93G7zEx5fjAcC8iz8SSYLyy3c6WpuSJnJR7cFV2BJ3efowWtNw",
  "key46": "4xuno53RUi1nyRdmZcnfL5nkZ7Mc9SDaCMbkQe6982Fe4FL7RoHaz1BGEhqmR8bPHka4jYMEBY7JknnHDS9f35Gv"
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
