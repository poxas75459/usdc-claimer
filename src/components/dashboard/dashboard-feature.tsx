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
    "2arrENWfXSYVoC2iLqjPoRxGzPozUvt7vyoFjFop4M5wJQUgfMxKqrRKUpih9TdexEmicrpbf4urXvnxLToC4vKm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "J2KzwE87BKRt4pwTZmDFC9N48evGk67suhcekduqMScxBVKG1JdQ6Nya6fuWUx7j2chZBp78hQGGRTAdLg3X5xX",
  "key1": "5tghayYMksN1hCxurgS5s8UktAL1adNW3ZTvpR3VfABms2ysKmxHuQyUr3pxgLpN6kAeoJN5zJonFnqerLDFkKMf",
  "key2": "5p8GSYSm9CDTsqs7pFNcSRasQFQN5gauCTkGS8awLErfhrqkJEk37CW9KmNLiYL7PKPxHxB3sJjiPmoXPQ8M45kK",
  "key3": "3bFy9Bkvb8w8vTDAXdKC5yDzReVYT35SxQniKQdjJ3Dw1Cf4pirHXc3ZTL2M3sNRgr4DWvQ2AwfpKtEM9aF6kJk2",
  "key4": "AYRkN8Nm7k9XoUQ9bDqMYHfFvzYuyedGuuz3k6SiKMNwhXVV8HBPaDp8yNkd1vmuMv3cG3dM9RCf2FK1Mrabnug",
  "key5": "3M6Gnku24ojW7hSUz2Mvs3wRqjpydLfC928crKVvqQZ1nqZTVBn7kKh2KTDSc11MRyX7L1EenH1BvempX7a8fTR9",
  "key6": "4hegnSz2wjacjVUkcZm4zkp1FgJ9sZxUTw3CdEdNFuWszY7qh7KTroUGLpAmJkQ48QY884bd4e91JKmrWXwY8DUb",
  "key7": "4mqQb8sE5d1eaUEHZAagScezRgk9ZAGWL1e64tja3P7Xbawkcko6LJ3qxRyLE9gA9948oKSvbc8bjcJWq4ZbpQ7E",
  "key8": "4Fxg3jmHyqCdYKWNJ7VbJtstMnZ1fhmd5bEtPGdd26aVZ4RQ9kiH46JXqvW3u8zEv9WU5peXAEeE1qAfth6cw8ry",
  "key9": "4U92MP2SnjiTxpuxhd4pwYU8Fb1u1RQQSoHjE1mgTmKKAnK8GoTa8gwAaUtSSTqqxUEn3YGuVf4NWtLbBRChWa9b",
  "key10": "2FwPjr8KaGpYEqHLrnwgADVzeSLoYTQwE3iqe2k4HATEvdBS4EN7K61NV4BdnzhjKPZavxDQC48MHESsYmXaKr7V",
  "key11": "33wG4cSGb4siLbT8R7b9GJR1B2sx7VipVhXysjcHUsqAfhcA8s1JD22m8QJN9LTbDbBLXvAYZVKEAEZGMXPrfjvc",
  "key12": "52oExeK6TEBqC79VmkR6xsL4eMNXCm7hcdNtSgjpchcJBGNEwuLxAM4XURYKKCqZJg3pRgLR6nAKQZNJcW668Z75",
  "key13": "5KCDf3AqtjFYye1yGR8he6nrxHMcBSDBJJZzFm1n6doVZSKrkmC1jA4xYxwaBYn2FFUAkudMBZMGfhWwkAcguTt1",
  "key14": "67bs2GcyE8ubLAoHhYoiUsTCqebMjrwQbeV5tJj1duTkVVAo9w2z835nM242HDeopbvAWCgyABTbUoq7E5whonJF",
  "key15": "4ypr2bFij5TtRF5UJmT1YRqfjudCqp9VEVVQ1VW3vchQ9VSQaf1kYfjYkrJi3k53E28FuCcxHJhxWje8ah6MwV3i",
  "key16": "5HsLEUjx6SSYSaLBwXcPLv44LrdSZQ7d76SWL2zG6XU9jeVkV1fijGFoih1nGdVxC2gLwp9fmSHc3vXoDnzMEQyU",
  "key17": "3tjGdZqVdTBkaXL6cseTWXDSXhkEEEBCo183WtbR4P1DHsJuL2mbFMUcyLVnSSZDppu4vT3GqdXQacrKWQf8151",
  "key18": "4EH4AoKgDdB3yLXVLHK5Ett4LGQJQR1kiUKRXrZfdPCE14PZbib2DDFxqAJHeoZRprprUGRHuLV2JacJuLdimCuv",
  "key19": "5n53HR66FWRz7FNLUzNrq66joeZJ5TFmJaxVAQ7HMCvjNQw4cetbrEnv5BrPPYNgkuFpHbNkJFDQ2XVmYxzGxYXH",
  "key20": "5WCqm9YiY7nDm3frhDtnMWnYydggx1RZ2yXevdYt1zmpBq2NNkW8Dh6wSp3Jjs6bRMX3gcD8rkXaWuZZq9xY6Mk6",
  "key21": "52j49zGKHk828DzwfAW18poUJx7emWPhdgG4i6HagQvUgkDe57iYBoeWHxh36NfvYgtQH7ubdu4kbX1V1gcs3CQ9",
  "key22": "AYoDHaMCj2DRyQFTnRUiCHkMShwFuD8pyyBGa3CdTFBk7nsodYUUcumP4cWTHPxkjdodzyKS4pfA5JmpBeWUM9N",
  "key23": "4j32iXnBYvrQJcqstMbnwL8Ud1SdDHzgwXi9egXAU8uxpMMofhrVUNthkJhTJ6KDx51ZC25diZM4RaxwTKuXWkoU",
  "key24": "5YuKqGW6nuBCwcx75YfS1mPwz8i5eZtqmSfbXJDFtwLEMGyB4cYXyevkuVJvNERjejm6wEjK32FXMx7VASJQkyb6",
  "key25": "cTTFwamdVt98apW6fVkDGd1versENDNBNG8TNHgiayzy2wjEfEGPhHVoPU3oJTktP2SKMAUsvTG9pzjNSoDSaXQ",
  "key26": "MAkmHTyzhJcznqhDGgC2oXqb9pZoifCwXsmFZ6Fujt5Vq7oWFmEjnjjYTt39MU8vN65sAnJa6pYkZL239U6A7Rs",
  "key27": "4X1GkKH2EYvrBPkfXwyobrjLnc257i864FJetmhXAS5bMsJzZmcC4ahQkTt2TkGje9nCJ1wpQYy1zewfKLEuj8ko",
  "key28": "5ETkKpeozxFAE8gsTTovighxSowrNsqT1htKRUhwqDdG2BGd49cDXwCebsDbwXYmcpeLo9oJH6ZherqwZjGNktR1",
  "key29": "d41s4UZ6NvqQx1YMKw4P7vf9ZRa3Z8NF1ghNcEwjSUaMYw3XJsbPr4hqKbSgJVpz4BTc84p4mS5eZfpfm7z8yqU",
  "key30": "5veQJt7daPuAkYJLU26yp7LjyfQWG41hvFxzTkaGGc5zKisSLR2DYB4VtPMdFQjd8b8q3ccaww7Y1to7BySei3wJ",
  "key31": "2T7J7o3aW42F6dPpbvLFncmu5HxZ8zQHcfRSwuD5MHXNJxeGh45kUbGfH7VkxjpkYYdKAEsbJFhF4iuMZmuALnxU",
  "key32": "7duRd6nSRG8V4sd2sxt9RHtdM9SFhWDq1PLL4MfnhHbMFo1X9NH3Uvzr1DcKuvQZ2ugXbUdbs3S2oT42mHbU5Ro",
  "key33": "vMv4evNdP8DzmmQkAK99wPgwSTZDNqx7AppBkFU4RANtBVn8NhEuC8DdN8HRjJpS8E4UPrEVwCBqVqq22x33c4L",
  "key34": "2Vbh7LgUpDrWyufkK1KC6Pg1GEXL55o7TPFes8weXEFVXUfaz3SxgyMjLkC9FLkA64h7DeSXMK9JJ9HKHEfY3Xbi",
  "key35": "4HkApEKkxjmMZs8JCrqyf6icFnnpFzGXhydcJWfTE3bSE7R3xhN4VJPHdViUDcqQX4s1uf6LR1VViPFrFqmwnNSi",
  "key36": "9tAMSYcjKFqCtw3k7FEuGBeieMiLMQpmuh7eR5vWiwM4T41RxVUwATxMv8rcEyz5rteDCiZXZL651AHC68aPpTp",
  "key37": "eRrN6RwKwW53BsJgB97NbHPRWXd1ugwNgpiaRfy9NLoWVi3V34e4VQRnZigAo6eqLt3rGWC7VUyxdHZ5rDGbfJM",
  "key38": "2rBnaAMmCqq6L3YpJr9JmsvLN1wBzWqjCQFhwLNeFp2hDWV6as1HcDVssmo2L4yjuzus1dBkcyL4yb7QHmLMv17o",
  "key39": "2bhbwUz3iV9h8A13fzoq8Hvv6z3PnjMqeHNGy6T6Dvf4bFaxHzLJLmFLamLUccRqDZgy7vSWcbwhZxR4YQgN6w9h",
  "key40": "2UB9DbT1PLfrYpKcSDsCAVugmd9po5MWno3yvwpBL6NPf557W537tEE1ES79YMoHSUxVHNSP8t6jXk7o1FsviqwQ",
  "key41": "5NTc5KFAGLdaDL8mxXYWFR4MSCMrxFeQ4SQHTjPTAxAy4MHT3asHhDK1cJ4Hy7ng5SBvWiGdnBp3AQTSvNco71PQ",
  "key42": "3xfYQg2wCHPQCayfY9pVBHKMQ4f9Zz15uZjicoASadoAH1CTUoZjjJJgo1tPCqmFfwWKdmv6wFYgDUHtAeXAcv9N",
  "key43": "45JBiy4FNLmzGhmdib26dVVFKNNizhyBG7y87QwVnCt9Mvkmy7vP5j5Qd9wFnkKCMeW95cS2iNo6EKNWxeo965mv",
  "key44": "4q97EBiej2NxiBX7HPHj8oGAV9mUtJJLyX3Vnafz8TFMRAcJT7Ph3Pfsu2awKKHkTCZQwq3aNmA5BG4jooDuAPHB",
  "key45": "4eQzfn3R1F8L3Z2PBf5qF1d1cCaJvDDhK8MieRcDsPSqi2AYb4cVqvfjQoYNrqEk6SxQFQ11zfLxjdLcZer9TjUu"
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
