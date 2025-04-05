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
    "4Ezdx251paQf1zR1M1t5x6QPEbqrwm2LJryExezEdevK5RwSSGQZsDikU2o3xwtLdCDPVuoSp2XaJciDMDUg6uiM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4BiibxQi9tQC2fTfjZuMF8E9SYeGSMLeGV3bRJcsjkyts6F9Sh2PQUDgcqp45UbnGNAg9WXo6FgvhXZdZgi5japr",
  "key1": "41M4uNqKBrCgy8dEvYre8YAtKSxTkeoc3nj9nZXMzLtgL4p5JovQdNngnsHYKuttki6n39S98fZH4tjrKHm9Y1ZG",
  "key2": "wr2MngaKvzKD64fAbUtcWFE4utUwsnRLTLGnToZ41p8mqaoXEQ2A3sdaddXR8yD4YR74sS1fkq2RJBMsKkebCVn",
  "key3": "2udv1u8ZTy7Ukd5SFD94VDiKSc4ovGafjsm82QnKT2GgYj2EbHQLovAb7886MoH5dsSTEPP1JNuakiZ7oBHacTcc",
  "key4": "1tsYH8eeTu65cTydvVx4PjMs37oXtd5vFiQeu46r8n8DyN8gu9YvKNN9SRUbVoyubTeujUS95XpgVH2KEtVy27D",
  "key5": "2WGc6c7QgSayTxVJdnx9C7UsTemR8MTwugUQPobjjS1V4DUzc7cqYnuxwEA7hLwM6PVYXb3VA1wQdGmCbbr4TQhS",
  "key6": "2dU1uREa5jM9RXwHm1QgLcviaWzXJxfCdf9u5NodKz8P2gQCZsqr1p5KNZmKRoDGTPHSC3cAsRRLAhUds4uZQcca",
  "key7": "65vAPHHBxSydq1BNm1CGqt1Ptvqf11C8dB2FZTEhi3Pi1n4CfERGiBUiVArQ8X53tMwXY6iRjdfep42WMiFrrBWX",
  "key8": "VEE9wYRyqMNMGjURPFXqLqaHECqPB9ktzuHTiKBEcBzsEdFuT42hpTr27KM7RNFBanjpgGPqKp3d4XgD8ywbaqr",
  "key9": "3juhVHyt1mhuKsDkZtsVXSStBT6KwcnVEoTSbHXFz2yb5Jzg6nRSZe5tSqw4K8wGN7A8bao5bVTdEUv3m9qDDaQd",
  "key10": "2Aw8UHw7t8o2Tuw4D4CQhbVc4XXL3QcUzw3DcpQnhZjEMSdDTgJnsx4hzn9WtUhzYWcrvecC4KSVUUaoUd9RjyH5",
  "key11": "3X9aDsuoob8bHCkj9cZnbUneMFdvHutkBpVPibPrnWqE14TFVNfT9uGZSKdbCEpTUaUVt7t8BDPkwK464h6Ki4gk",
  "key12": "5bqV2fepeYpxJvkw7hgKmpwAtuYwpV2vZDTRi4GK61bm52ii7585Gp76xm8sgQ2UZMzXKkdVwoFXViCSpK1GJobs",
  "key13": "4Fh8ebmHwoG8Xz9nTLnYvyLqsjDNEMTZuh9FVeWHPgSwBZuAPEqHoR92erBGaJ2UHrXo5oHRx9WW87KbmqYnu25q",
  "key14": "4T4gYAiU3xk3DZvZovbtPN6b2UcLo8yzGddWpCAyZuG1pDp6ieVdJ2SUMQWi9aHnAS11r1PSxSsmaDwJttGNbmAH",
  "key15": "4By4FW499ZUaJGbdKEbt2aktVnt2LfQ6fbVE5r9niqDP315iwPY1cTUhZJy3YW8wxJcPKrbjjXf1qz9tgkWkzw6b",
  "key16": "3uxUQdxwnPiheMZNPuT2PxVirgmc8wgDdqrDn7FjdtRp3xtxqtKBvxS6h1GksHd2JrDRHVsWyYAiC2CpksL41E6d",
  "key17": "2p4afHW57zD9ThtgK89Y34s3Z8kMNxZpB9zYbdtuqCENxHctU11e2vLsX9kbrBiyh3NpgEAwDCT77Rzt19i4sHxh",
  "key18": "8FUNHemaR2n3bDnRPPG1CTxNLAU6YkYeQt8PwCitPv7qxTZiXhryVAWZbqVrFkn9SkY2192UeqVZg9qZ8TYNZtC",
  "key19": "68EJXFbFN4NgLxx7vVBER9ribBPFXWqYX5RVtmtnySJGKkQ4v9XKnsUWi4XjMiEDq6fZMnTGR2b6ZH2t1Lsz6bt",
  "key20": "5UEmiwNEzqHWotP7nDwTGPMHUHJJbMYQARWQTfafA5thucj1vJp4vhWW1vma59oZ8JVikW5srvbkiwe6wpi7SxXL",
  "key21": "4toxtgZYRrETKSHnwL3JbrSKiinNefYFjpoZ5qAqDTBrPAfnnMZnKubJ2sg9ouXLxzjHFNedWkc4Xgwa9pujr8C2",
  "key22": "2Emhx9ks6VdxdJfHHwprAx2gydtJYezx2nb9XMEyL82wygcZuXzLiWbpaN7x6c8SFuE3j1fVUddAXLgKQmZpxCak",
  "key23": "2tqiB1KMwws4tD2zFbY5QDEiuw3N2ZXRjsBo6ca8aMncTFjCB7wcLZqy23XSvoc542osZiiM9sFgmHB8GVzeHY4L",
  "key24": "2yY1scvreTeSf8R9tj6Xf2VxFx6XHBt7agHHzRfV4ZuKh2Bsp2XG4ymgjtgbHcJdm6FwhGoXhJ9Y7BFgVgiiiybG",
  "key25": "5tonc4pQkLSrrRtnoyiHjbRWf8XagL5FuQ4bRcL3uiaR6jvoH7821ithFdPct3jBWpJ2kgNwKRg9zqyBRj7Z4yNP",
  "key26": "3T2V6dxKypDPGbeDxm2WvyX9UdimQzUeHpmcVjAEwKKHxcNNensJAacu5kw6bfEqMCT7f1PoGg8krxwCx5cjbQbn",
  "key27": "gNwEExaWqwmf4fh5NrdGn3xEY6vWVpDAdxANqVyMbHaSbSQHHSwYff7K8eUv6hwbPhwHHgB7wAxhVGnAPVNwVKP",
  "key28": "4RRcBd3tWbK6P8Aw4hTDnmaxTPyfMCLfH5BbCzHQ5S4UKGmgQTxsvnwTqV7FJoCqq2KR4CovCCg8py6tsstF5Uri",
  "key29": "3n1cRqdzf99XqWcqoLPjxy3Kz52hwVXFrpc2DtoBapgfZVg85jW6d3FYC93AY89XPSj3Y6TmJVv8h1TqDfQEVqVj",
  "key30": "xSE25SGzcffHcDwERds187kchr6HvGQUhsKZZ5SYfjHKdPKvuZJKxgGhhrG2CWYe1dK3WNAKLUUVi2PMx6XKzwt",
  "key31": "4oEd8rQP6aqnwZkcP12MRLfMu8W527NFUaTrJBMAn5tZSQVsJuxXJ7nM7fkLQuMe2promvoNSAjDkCY1c1fQNLKP",
  "key32": "5QNW7ZZL2PnBGtVdhQa9DcJbw42eN1FcbfHMXYBJoDiFNGw6y5s6zcVtPV1QgTxd9DYebZnNkp247EYZxNwL7USq",
  "key33": "3YgixL4vk5AhwAxT8hVu8h8tXLRTZiarovYVSqHzUKDxDGvuhikVjgCjhENq1zVyR18oymCYQkLUss8beVahN5jz",
  "key34": "5YqEytVavgYsJAGRq3k2SfrKSmxXr8k1kW5iy4ic76rzk2aTBJjt7L59KwYiyxaxcLfyEsiKpZG78QsFF3DUWjkX",
  "key35": "45hJNWqe6e9WoSUACZapM7ydJCbBkMRrGgUyXttZ3knpsa5Bp1T5dDEAGLrm98VyYSb7nxTod24u3234CdyLB1GP",
  "key36": "2gLDByueqyMfVFroxqzkrBJsvw9aRfHg2xYFN72xzZVUa6eEdguJUmiuuhaPdW4hbEGHxK3FUMv58CoxAz48jKat",
  "key37": "4UC936uFfvqFkP9SvyDfNNnaZ9KKFhMdsDcHbMXcn1LvE4U33dQ3MXDKU8QtAQdChmpfFTFeE1chFVQ4rya4W9K5",
  "key38": "vCDYBkRWk7zM55CSUGkfUbkHJQo1NozjESDR1gQGTCk9ZYK9mstn3HcRcLjzqo1JGXgBaewJam8Uhs42tJWxkcY",
  "key39": "41s2VgzGfirsPFTdegcab4inPUnyAED4pM7ZD5kTnmoE562K21Qg3fHKFebXrNJuvxb7TEVNJTPzwHPC6HbhzHua",
  "key40": "26VJn4t9Jax6BoyiuCVZMzZExJmNNk6m28A2qL6aJNk6BLUMBU72h2be79sqpMyfbEQCoToZEvVDXr1s9ZGZnb2c",
  "key41": "2Ktk1UGU6LVFAp5M5qMUpWi5G4Lx6MztYfrbiKL9F8e3zeWxoV69K7jU4EhJsyBv15STh6EVaLNX7epo8n4C9VFJ",
  "key42": "zMfMRmuhvjUJLwsPBvrwhdjjRWn3geZajSTS49juYiScwRCsmLa5nuHEJkHwWRHGvXECN6tTTAtxmAnH2R1ZiK1",
  "key43": "prEZqLUEtp8TLrzcCDYmpE4ZtGGCwpH5bVFZUSCiz6Hap95qi8gKF43TND6SQGfyFyFrVswbYst7ZjfaRyZgTjn"
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
