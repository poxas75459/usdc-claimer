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
    "25bE96jUb9LakuRUbAFzxNAQXMykvM4qyn7GPXKwebEGZprZCvgr7PNdJacnJY4Do8vNdgDi7DC9eUvT1kAdpYEV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "aa8rwMYY1t1sxbv8uNoVAjnHAWaLXymJr7mXGAQATYVusxHDh3LLtPrnfAXoo7pwrtDHFFdmnP8FegzPbbiBMCg",
  "key1": "4FWEYDuxAk8jZgjiaKZsW4feUBgRCPzMQWdsEzjC3cNBimv7697au6NYJwA15f4iyzrJiPqMEm3Q8bF6AEifoJy6",
  "key2": "4UqoKM8reHK83ksFTEo7BM7vCM7nhyqLHoq16fPV3Pjv5qUMpUTmkDJVSqEkHaCnQq84WbCPqc9WMJEVCqTitbxw",
  "key3": "46GJYtKjeSBwMU55VQwGqgsjVYKhM2rbxd68tqTP1Am5SqcbZpvJVZfJx961mLauXefGyhxhJHjZKVkdvF4Qznpk",
  "key4": "2sQaJtXE45KApntfpSNMeZvMG91Lru4CZFGqzNkXQ6ECpQVyMJum4jDrSXgHha6DeZLDywmEwSqN4e21FbyJPYRK",
  "key5": "2WesMHQqZs7wFwJ4Gy64msSn2XmyPJT8KGb3BKJ7kqYv3yTPeF4e2dajMUrX133XSZxMyWLweeHVfdeYS59jPHJw",
  "key6": "wrVSuPGXL2ptaC3hKzN9qL6GpGUfZmeEvaZapD9YLjJ7uKxbAzPpznVyLbqbJrT4PLH2HVdVnyjWShUd9RFhJwi",
  "key7": "5dgF59jK7bmgBkG6ovbH6EHNXrUjyJq7Y5NygrZoXC2f2GxRGtxdupwTwaWdedEZnWggQXBWaaZVkHncMejNe7rQ",
  "key8": "4r9pKJDs4zij4YxxRuJyfEgeqB7KVMyRhJocLnrtLNy4gZyhDVvNvE6tbgd7GM9LUoYs6EbpYze4dn8D9daBQLc7",
  "key9": "4dHgXpLCxq125RYFJ6fXKdDGvGpxf4wbqaDpwtVmA9WsQLB7dyrn5QozEi3rC9cDfvCDWR6K9cmSv17f4Ce5XfAc",
  "key10": "61Cf1ja8qP9RHc9RmAovDQ5rt25E2tNmpHubz3uiew5UQmCfkj8iYmPoCN4Y3yk8tUpvkZpQArXskrbfRHvvcjL9",
  "key11": "2nY3Nkz6nXD7WYRi9Lwr1o5MU2iFQ9QG2SDSFZHe1emADpUN5Rk3zaZBD9bhbS1CDn7sRPs8XbRRzdNYaRdbdWtT",
  "key12": "4PTkcLGJJM7Aq9zBebRPFUw2jMZ63ubwVZWapATLsy88J46h2TiUZcpRGbtcPwijh1P9BmGCbfJTLvvEZKUM1HzW",
  "key13": "5VRjbfFgciZ5cSpRFFjgJkPSBxc4APa6shaFtmaPCMTmXbHugm6QDGtur3wkRAjAa7Lb3v3e67rFGcJLqtHfJLgZ",
  "key14": "4LsuC6xTCYMJQzLupvd4VgG9gdRFBEuLKHqTTkMRF7Zd4qfaZ3Ay9pn8gogM1N9GacDub8EjtNUdVQhTbUm8wuU3",
  "key15": "58sFsZ2dw4SQoTycSrT7ZoCxYSXrP4NGScN44Xi5MKDZuGz3GzcL3kqeJTnNAFS2WEJaJsJeW7dj4tNV8Kq5Pn3t",
  "key16": "ZZ8Z6UK1gwcotbkR73jbWaBoFd9bZs2EQ7H5unQJ4HCrAxr9trfinF35Z9kjub1udpMoBSoYSyrrF4mz9wqNCDT",
  "key17": "4ntNcSacgTmLwjE2GJar48K2kVCuX3XDBqUnfmgnFomnLogchyxdP1zmHmTJ2MxHgbemdocVpiZzU35uHXRPpoMr",
  "key18": "4QL5eRvJ5ABDKhTYq7F5hi8oNyjTUKXUyUF3kThjrxrgcQFnV149WZKnxF15hrVEjCMyj3QSyubbYx76Uht7yGfr",
  "key19": "2aSnRBbaptVx8qFKbg6RVm79WUNBvjLgAErtMDz7mBJ4TR9hgH3zZRGNU3R7L45hn6fszp3UKQvaE2D2w6s2UDkU",
  "key20": "3SMY4CsqKW6TeudtU5V34Pgw5CnsKwq4m6jfFSKtMLtrQj29HRewZN7ZyBq1Ab2mRvmPgr2gaUwQqMjcgbAaB69d",
  "key21": "4evi4RhwikQ34PHKXiPioFmGQoEjYGXVZd2tALcQgemccq1cMB6MpySXpZWQTmjHme7cSR84Th8nDFMKxHnp6bMM",
  "key22": "4bFzs357pxxHJHxdBM2yh7bejBwB99S6gwwqT6J71672SmLpftEXtnPprsGSTPNCduWykvR1sXpTbUx2Zsngwoiq",
  "key23": "7UU9RtivmE6CKjRQoqWyn935yE5qYfw88vJu5xaYVZ4nPxwVUtgDsyQnmmkuBQ8a8w52XfdsZhyJkiFB2YgmWcr",
  "key24": "2zpCdoLyqXVXZ64yYYyEbcdoX4XfTwBZgQqc4VKZSty3Qj6ngCQXmGm7zHMVZnnT4BBa7adHK1ippsgJwFdmaw1K",
  "key25": "3YHe54sTDLP11svwjTFx6tT4xhcK3cQBVSRXKevEvrUXkKdaPG7TyFzAqqcyop88gKsBRhvaSpgVfahpTbVKVDSe",
  "key26": "5M9tFxqwb4owmq857dVnmuXZcNCjXwrEkJBEeES5y7Ya9iNVwZfJRF52dz8EJM3rgLRnkLFxkrcZDWHDzHPQRMKB",
  "key27": "5EnYCvdNsxXDNX1FaCH2ivxXEjNJFjyJuktUbZpDGozedqgGGmG4Pm1JaxLZR5g7xxx1vgyY7BZEBkRMvvE8gmTM",
  "key28": "3aJWbnPkHhxNy5Pha1yuEujG1JD3mVUroHYctThsNPD1DtxvJH8YzMUYoPEm2JoyoNL9TchAauEnAHSJdnQTr1J6",
  "key29": "4mi65efivsTwbqZXLvmerNv6YssnLdGTH8iGiC9BojvQP24cCwyyv9yuR2X8aAn14NmFRnLDpQP8zGynrc8sbaBk",
  "key30": "3uubVfKpr2KVtH8jmFzefigTV43MCecEaSxMkgRJR1C651WqgAcyzyD6Ji84AXNiXWfPWiiUJUS5HsackwiZdT91",
  "key31": "4mp7ZY8izjnfK3HtzvuCouXsNZnK8rt39Tvj6hRfkvnMyfFWGDzhJr4UHe9XpHCih1HR8ooPm9Xe5hjynbVBGhCp",
  "key32": "4hG7H1EfUeTvoKbSd4wndfmXXHYdXM3tbQtrBVbyJSaG7vLS8pxwBLzzpHApy3Qp2U1QNxLQvutCgZkAQx844ePK",
  "key33": "5wybejVxWEUSucDQuJDaTFphPZwVPrfADahY3g6Wb8976dDemHzCDCMoTZhEDK81jqhi59ZaPTcP1ery1tX5tLyE",
  "key34": "41cpCA6SsSp32MGTtmQ4boetivh8nhmkq3QG2gbrBQq7Yhk1z94qMDwHEw89MTTPT4ZzTXq5pwNubfPDTCF16TkT"
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
