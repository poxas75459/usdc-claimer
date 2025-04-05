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
    "5vTaHfgmiwqYzF1YPmNxipZuJ7iLQ3ovptBYwnq41gcuaskLtwJpHm5LmV61Z7BFEe6SQUH2NKGyF7fCAmB4RJ3D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Z2W6sEbDzW8CnrV9fgqY36FDQZpxziUWVUShQEbG8s6W6Da4BLqbdFiL4jM28Z8Q9cQckJLpj1W554HZnpjKxux",
  "key1": "2N71nLEW5wteeCeaWRw7ZujxbDiqpsmww8XXzRaN6zuNqGsqu87EB432ZS3H7qXoBKqc1a9bTMwQ4vUkMuBZJ3Hr",
  "key2": "2AuANvrEBcov2kH6iT4v1ZRjUbyvqV5u16Tcp4G7Nitvp4c6wctT87DaWMEKQYcJaN6EJ6DCB7G8n6q3z7YcZK1U",
  "key3": "DbHgEuFsPHTELEY8KxFcF2H5fhEY48YYtmiFHPi7WnUJUr9P6YgSUkupXjYBUAeQGu4L4VjZfqMStuoKyqFNViz",
  "key4": "2PKeDVT83GAseHAm4gA5eVkbSzpRz6PRtBZWHtau185Sqheo6muQEJT2Xmiz8FbhAh943ZcN49o1kkNN9ZcnyjqF",
  "key5": "3sxXJeRGjmdLj2BMwevdXUcMhqmJSbaQGSYXxd6JyD8QdETd6EjrzqyAn98Ke6uyrn8VwEePCj2nukZLE5qh3JfC",
  "key6": "47kG6dJM1fau1FDieUEKCxQYRJmUpXgokZfbejcdzaj8VjnQ9BBAJ5Ec4k6hEYAn1rWoD5WuGL4KKbbvq8BkgcWx",
  "key7": "5f7MMJdjuRUeVWvv75Ye7PQEu4HJtiWssLo4Fvix9NVxDMYYhwTuh53AY8GArZiTsFZPRQd9KTqmoruakaRed1GY",
  "key8": "2hu7RHve3DSmvmQr6b7boYeaoEBbgidQ6grHSo8qyF9xGcYYGh8hF564yYM9qWQet8jY2ASRtu1gKgzKGamanCYs",
  "key9": "4dvBwHpJBfz2hN3LxKxsPffFCrorR5Qm5XwgNnMtqzSUPF2AdgpAvw47U9PZD5uNRPmEoeRXHAv38JwkmczqUF8T",
  "key10": "24mfbKc99ge1jyvaA24hFgrNq44BETAgwJKZrQnNAtuADK8RxY3LunHgEEVsHsqGkMy8CDhqBjHnyNfaSeigK7bU",
  "key11": "3oY8YRX9wH7bDejJQL9XgLY52vPEDcVysJRnFoyfYUzHXPFU2qBB5EW72bie14WrmnJ24jkhAn5QQ5V8FrvL4EbK",
  "key12": "3G4Au27HbpEdEYDHK3B8PQeq3N6WoSQYEvZ8dLWoqAcK1Px5zLWCKzoMJv5st1GUL9wFhYL8hw5zUrtP3MAkbGNW",
  "key13": "3GHhLSvQ6u4be5HBhyhzSNkcRzQkb7ctX2bp38FjyBsaZHnRFZ9ir47eyvjfW3vCL3KzxaJep5QPxBSKhu7MLwMc",
  "key14": "2jcLZPDe51NGK3xDbyRhXsu8kyYd5JDKS3utRToDfvEuEBUemXc6F32LaaX1Nt3Rk9vKsjmkBuY9MRLf4KqpEDPf",
  "key15": "5VQH7shPYrdWpFU31YyKBTJEVYm9gD7n5M5iCkBhvtLhxx3pJiTUTDW6dzM9sxCeM1CR5yk932FQsuSgZAESj7MX",
  "key16": "2HnYWMEj6WwH2aJhbFqCsvJUuCLqWjaco9Pu5qED8nA4eXd8GHWogfUCfCwSDyZMgJWtjMKmxztkc4n7F8ySMhWW",
  "key17": "9n3bwbBQHsB12b7YQVBmX2SsSuLMWCpgEamw6HZsQYHKtLPNQKQqCMSBMwmY29icejPxiij7Hfkhz3P3URVStMK",
  "key18": "2HD2rrYGETmaAEVUAnYyS2xUsGQ9bA77iYWhsbZiTZ9oLpDXKwoKRLNGaMeQCUNMtjJrTswPUQNWbyswUtLLDRts",
  "key19": "2daxpYJKmSwgmijAmKxE7U8rWNsEMvhYdYvTC8nY5ZXkGzrYGySpMUbVtqAgRDXZ35JyoMobB8LVNp1L6VZy7pJ7",
  "key20": "xDoV7tWnqqbTDL85f41XDixwPqFaiftAqBnxJKxMr3uFXfuZYnxCwqkr82qP5LahGd7dFzHezhohvZVYoPD6znB",
  "key21": "HomZ9EghvqFPeJF6aJZGGsyNivjrQ4cxTyG6s9fERrQD4TfJXrSbg8Hu4UJ7fXR4aMw2is3VQEeiMVHMVJsxRWM",
  "key22": "5pVKtqNMdgJaqX81Rv9AG8M3vgwzkf3jhPPrF5KeR3HDmMrbqp7YZhqkVJRr7Sk4JhXGMpTHUrZgSstZSFmfgovB",
  "key23": "2Zsu7Sk84u3LsifHWGQMRcMNH3L63a11ZvJHqySqfz1VVsivLiJpSXMwd7G3YjV4yLAo3WiPLfbU3i2bpYEqLjhQ",
  "key24": "WvFknyCoJA1tp3D9BJASk8eNiYhXa3jN43rAuqgSpsoZ9NZURSQ8UdTeKqTeHLpaq4amoyDJHcBwzjYMb5WwVNh",
  "key25": "5hRDUu6KhXW8bocDTyACQcSMtmqd3XgoAmb5TsXLY7q1zjRN4isNCa1Cy3PfwQhtoy5qNwH3FDx1UDkEJaBWeGnd",
  "key26": "355Ud81meHJWrtSBYu1Q1NyR7bNHurquJxwrMhUHpLR6deZn72FZD6XVFjeLbVhbvinEMvuFfkj4tgTvEJdhB7hR",
  "key27": "3KQrxGFx4gf3x491Yuv9pkAMxJyVbTKszb9x1KnJHydcZTVQatd3kstGcm5dH8wnqokvFUYbTNUaihEQCacLPPud",
  "key28": "4XcRJqDxtdKCpmZ81roavo8zZmAfsYH6GtcTz25VhMzsJzm7qruRPTWKqyJEzA3b8AmBfyFk5xVFiM53XQNQXUb2",
  "key29": "2RZhSePq4qR2cLv62gd8f6Xj4Hb3VxJcjK7LMKbywVdgyhsatzbEU2oQJcj43aWeBJjhbMtvb9vuuHf7kFg2bHCP",
  "key30": "5PQoB63nitsjHiP6E3o6WHYojnZasyuGpH8gYDoKssPhynSEktdxXrwcReqtpup3egKPhHLxwsznd7K41XDccqeV",
  "key31": "4SNMqFCqgLGgFFgULPzGGA2Pq9Rpv8rjznyrpYNSX6ohGBkY5WSSD6JQBjeqG3zuy68rCAyWck3zMXuijeZ6c6qk",
  "key32": "64Z48FqqN2mG1ZQc7ArwHUrQgvnn3S38FfHeMQ9ofrurkby4puutfzf7jr1hHBTcZ6R5tRsesN2hDKxDBsgtXABb",
  "key33": "TTHJGdoP8mTwMgC3GnwmYde8jSqBPXipuWGR1LmmE6VypmVRLtCAbnoDyANYSMJfXaTzGPaoJC8dZqNz42Uqczm",
  "key34": "2uRQv5YBd7LkPM1AggqVrLLreYsdd8zWMU6aD8X7VHq7mudYNoekfrV9wbeYYEmSjfUNifqfD7handPi7xyxMaG2",
  "key35": "3fDDxKiPa61vcQzBVEQncZakpzVaGpbSXetzjseRAZLTGvtShULAyXZNvBPv58XGEBw3kKM5yVJUedrib9EbAhpF",
  "key36": "3aAWwJddTNwHx4cgJq3fZs4F2suVDfrRV2MWEWCWEiWcQ6ogAxcT28zJbVsMvXfuTiEqWjKrr9Kbhbhvt27XZEJU",
  "key37": "26F6mkzT98JcALuxrLcgGfbXf6EqTGB7shHvLEZsMTZPmMTC4JZAAe7Ve8utR7CrsxkWTgegbFg1BHaRxk6ByQes",
  "key38": "2cVgBKocghPtogFgE433Cb7AcYdpD63NsrmFH2AKizreCwLS7r2ZdCnY1irbaVtkDeKqDjpRrWAodNDVrEg1Z7Us",
  "key39": "Q3DNtP3e2y5kd5WC3t5fx7cjS6S3p9b2BuBQxNUhybWREDyTDHRSwTe3uyfo3D7epu5RTW6jTeiZLx2EKcj5fzN",
  "key40": "5tEV625nK6vGsoFGxP6UprcYaggrbGDs7AZTuc35iU9ogibYyd4ghQbXhehoex4sanjj6HdUBkQjARmVN3haB4fY",
  "key41": "7C7EBFGwHpn1tbKFcvRnKcAXRtsJJiwrTYri8KuoiG9vt9Sjno8Zc3EM56xNHTmKZtVJXvVjfvDCp4tgopQRELk",
  "key42": "dgRkeMgHGPYyi9KDqNWrrS6vtmvy8sHa1vffsam36NHLeSqonUrBm7Qa8ThJqr7DCNxPebmceuWbgY9wSWnnEgF",
  "key43": "5Vw5xw32GN69MCFr2aVEfASEQBoZvBtGAMUuRDHBAJQC3SizLJudG1cGCafRFs3wLAhLami3XWA4vG56g4umtQGo",
  "key44": "3BKuMx3dmHzo3CUw9psabkW7Azj13cShKB3iw4cqWEvJxkt8vxZTFTb61F6tyWUciAPe1NMczy9PDM5rFBtEmps9",
  "key45": "rDRtf66s1zfWFbyk8eSW5k8BZL5d8CMkhLx8Zw1Rsm6iYdfBEQ2yEjgTNL96suVf2pYXYD2LHN4WxsT8LawmfDK",
  "key46": "5fBqrNDJwWTcmCrxFDjwohjp2kpJE1QKhHVnt4qi4JnGLnWcQVdVwoA175xYxZt52vXY45oSBtdpzydCVbrspEEn",
  "key47": "4hQspivtJbw91gHrzrhphJBEZtcR7c8RNU2UX3qVzZCsaM8Uwin5FfUGKjPgTs5Fq44C3xziDDjbdnmr9AnKGHrB",
  "key48": "5SAu1uhwU7QvWdE51r7EWKiTNJgzmrsCMMYf6rZsNx8Ueg2uyfg8hyWDjd7ve7F7GvDMZbLU8KCaJCuFFD7UUY26",
  "key49": "5CmcDbbT6UCpXE6JPv3hvBuZarjkDR2qRhKWwaocu73u9NxZMJYZP3dmjy9gp2B7GA5SFC7p1M6VRjYCoXwfdTnK"
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
