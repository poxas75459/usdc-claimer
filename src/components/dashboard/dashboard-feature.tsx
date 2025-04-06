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
    "5jUSDFSbm4e3L6f28T6BqH2mAYBhNeYtaeBm6WNEcePYuhMkyEkr8LDSgf59EzqdbV1J5ZfXaJJMpgYrgPUpFtW7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5K7ptMS9MC9S3SimFrmWsC1vgZJ2q9adDJeDGKpoG66mWBF5ntTrG4zVDeNZdLm5Ycw2afYhdY2A6AkaoctHTo3y",
  "key1": "2eyWVsyCVfW7QvDM4xspMaxDyVM1J9UE5fjcWohVoWYdSaVYBxBRSvyy7Mdog4EuGkjPVG9CT6MoauxLWKrAMzd4",
  "key2": "3QZ8efS2LYTDHhUFUQRJav8YuEuWaRgWbMPYhjPPN31MdvTXKnJKMfgD9UJvvou2Dnvp9kT1d9yiGyYCZWnxt4ZK",
  "key3": "2PKekDHJLajuS2FnxBjyLjBiy6horWxoE3MYxWGVf3JdnDRrmo7qhcpnnGYb3nEfpQcjy35vtQWSixmJFYD7VeSn",
  "key4": "SZHfip7curM2KbhqsFeKBG2cXnAz8kvHngrgAdxwcvs4eqQbhYtk8jP9Q99tr9QGRXr7JUpU5cAfNkHV7HjcK9c",
  "key5": "5DegWT7TKUQkp5XzY8miL3cQHM8DTaN4LtWrFnBLH8HZbJ9cPxa7v32w2XYhZxktr84e4TVZNQFEJePzBR6kbcfW",
  "key6": "67WkWybXfffwH8FQXgrWxmGwt1vTsN8kE6TbaM837a1c2FbMvn8v3VygQudPuHdDCKjyFkooR2qrfSsQCZ7PC5zb",
  "key7": "5H8iVVuHFGfBC68bRwyUzPwMNVeQ3XqPWUcULySJBD47gUstZY8zKb7e95EWZ2tunvY7KMpc19DsUmeoo6Gz7a4k",
  "key8": "x71N4eh7vMJv5RMFNpvhoBPQRioucJzCvB3iJkgMLp7K2p9CK3qShGh6hXH6Favum7xRheGH23Vu4eM3DLq3FCh",
  "key9": "29UUvDimhF6v4PdC9tRRSTdv2RFp3DXTGDjhdQ5X5ioT4M6gu1buxM5Si6jQhgZRBT2vKf8sD7gafaXDC9QVfd9Y",
  "key10": "5B2gYcDd7Ny26NjDkwShcSM1bmFRpAnoWUpikvPWQUgwt73qBU6tciRvFkDGBgVbYWSVSJF2xsBBQ7BzyEXkmuwU",
  "key11": "5ywDGhFANx42hqpVv1jtBrgr5GpZfMzGdCdSpSV7idLagtosV8J1SgU9iy6L6KiNBZLBFH89nv1KNbDvEE9VhgcU",
  "key12": "58TrjQq6MgryfromaEF2kvvGU8T2RmQCDrFxCT6Gegjp6YkubVGihv8KyPR8JFbdmPae8ND94piKTxyCaG9X1NmR",
  "key13": "NSxFaRbagZzAR7V54XUB6dPKxTLGJLhwqKocgocuCSKERQ9hVQzys6cMtMcToHLRnuZrMhnTgFd9UQmHAf4KJqa",
  "key14": "3DSjJFYiiUVwLTxMdHtiWpDdqb48eYwFjqxqEKT7Jkao65Ypx5wYNdBZW16RmAdL6grgn6LRFaPW7NZRaJUES13K",
  "key15": "4UbmHDUCq65wDeKBXmL92djaWskHioXwfhecxqBRKdYXzhV4RQgY6GBZxN8LcsZDqLVPR8ZxQxy1yFBPTxY1veLz",
  "key16": "mJAk8hkXgdia9wjiiFmxQTQ3PmSUxvCHQsDa26WDuFJK1g8Nzd6oTDGAmJwosHUppKQzhSR1WEj88isEvqtNrhp",
  "key17": "4MgwRK9LANT7V1oEGCi3HSth2uXi7i597xtGeY9TmK5ez3hDHEUNpLpzeV28fPimq1obgNs6MMvRrhhP3qfaRFRT",
  "key18": "4sjkzhHjBc8hP3B8PLE3gUq4smNcVF72MA8Kf8pYSQQHVTGa3DHSidfDmyE79muf8oV44dzzZVFJfLgiXzw3o9ip",
  "key19": "2yhU37rWJcTzufrSacWjtUAjj4atPqGKMiEJjCW6mn3hD45bC47YwT7ze3PwMghRy4kRTWFTUaVsAo4FdUtHY2ch",
  "key20": "3QiZcjVvFRcC92hdW8LDiGGwps59Q3wH4hyi5T6FeATkmJLGg5zAovjQNKDS7K8srkZbSfbGv8wrau8kL38Dt7av",
  "key21": "5gdtUuBAjxJWKbKybMMKHQsFYkkUZZ3UtUz8kU4DYEWt1HpT39dNAW4b1YVkjpjoV9Qry1UHtotxqBGw589WLeiP",
  "key22": "TeTwuHyWue1obGPxg8yN61wmgusc8A1RKXdKbCoskNeHTTY5PZV595VHTgzZmaQ3JUFySpevReZ2UMTU9pDGvMX",
  "key23": "44hKHBNgTPkxKk6MDHRgU4J64BvWUQFSxsvemFRWESKbaXi2zCpKjoECVh9VKvKtc6ciohKJSs48t7MyUBqzSDcb",
  "key24": "4DGczWMvW1v4pACSdheNVvbEvqqNZhjqE324TAyq3vjGcwcGs328BdW1HAMFqbmE9oost2q4Jfx53tnEdNc5DW7W",
  "key25": "2FYhia1DgYix1EQXY6iKSMMNQ69PkJhKz5pEWfvm7BK8NEsNPKRVvQvoAW2moDdzyMcLqNzeFHRm47kHdH3VEcLJ",
  "key26": "4nTRspa9wtsGZ1x4UgS5Qv996s6Xh4bGLnrzAKug2KCPdBxb9QYtWdxhX6UYGPes8cVXSHHAKGcMqwiZJUhfp2L6",
  "key27": "2MPE7VFdgQbRfttxWbd1ZeL6svFTGZz9r47EZqHaHwTnWyykMVLRcPBb2q2SNLpmj2w9nfRWadXzWZKRAXG3czBd",
  "key28": "4FXLJG96bB9E9y1oSzVyEgtaMWRHumydjtPAfLQF3zcnPwr94sp62LNaMz5ACiGb1NviHAEoTDagrrex3H2YaiCS",
  "key29": "7sgxRD9MMD7C9BksDA6YmBz7qTpe4LAhnPdg9xaU3oSmd6oi3pgJzL1vRGc77Zz7GsWK7iSyJ5YL2o2erxxnFcd",
  "key30": "5VPHpQ3GkZS1maoZ3LX9NcwAf3n7TRG8MQZG67kXcvwbEY1EqoFRsnzQvZydptS4q8sTAbjdrthV8GH8wfzoKq6M",
  "key31": "3x759r24T4pKF59hk6qVKJvV1cZKahDwXuXSFUvb3HJZiLCNqyKtCABKe6zezhjo1s1QqNe3YvtMYA5NYFHAyb5q",
  "key32": "4rfRP5t4SkU7QZvQjmLdyjs3dDSMMxvssBJ8TaeDST2AVhLM8hwNgqvjGjgHpVd19R5kvzS1npt2WCVE8TX3fnat",
  "key33": "3S3oyzugLT8KfRg5yXcaTjzAShtMFvMThUhScvoemSgpqPSrGdYcFu3PE1WAZgbKtK9V7M7pfQLbTQiJeM3Tftoz",
  "key34": "2GuhMYUdavUE4qh7wguYfP7CU9Uzpq4rs87FM2maX8ShHEzoJdaaMH8fBBKiToz5nyfXnoJq5q13fWTXmnTJFV31",
  "key35": "3ZNgXv4gErhzJqxK9CB3V63BriohkGnmiMQtXycGCXPh2g6WGmsaLJtQ69efyZV8CmqHjhqyiKnXqUWP3WuzVTrc",
  "key36": "2dxTq9jJR4VZkNEtZq2THNCpkmPLn1hHCEcH2mLNjT5VYFyC8a3KAccxLzbpT4pBn9xzNyTuWUf9BxepDExctfwy",
  "key37": "5gQ6Eti1pUhPh6NhM3ArEeHsdDuUa3DP4eG5Z6hBmPzY16ZMQj4xqKKCeg6n9kVmaSbzZBvZAcf8my1NLmBkuS8u",
  "key38": "5cFJ5vaxxCMGS8o1jmBfwwHzmFG3SsvNxc3zYHJZwFHZGyVNwhSeCYzvWePCkKTMo5anW5tF7RynHeVr6VxzHWeN"
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
