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
    "5PefV9HewsHMe3DahXK8ox9UuTGPH8mDcpLD9dizjr2KWrfYYNJZvcmkJgkUudfnhoaHYtYMsbg8aM7bKZVx3oy5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42s6m5q7kVED4fQ5RBfHTXe14SsNA8DYNtsi2ytCxPp5MYb8b2LRnLbpjqnnjQoRcejY8dRcD1Mz1X5c6fA5HZoL",
  "key1": "5vRgwUaMQtUFsmBo3bWWf61X5cth7YYzPJnfoDRs66ypRmojSfna5nWj6h8fGxJtLuL773cPagpRNofEv3G7Xhc3",
  "key2": "S7J2G5SKWTAkvMCzY7HCgHEcKmLBw2iv1Lc48ZKwLfW9GuA9yYXVg6zdfqDFQp5r3GTMWynHR4p2A4FLbwnouMv",
  "key3": "34dYWLqbccJD9gyrAcuvzurwXF8VmC2LtEBqfHAMMF6mqN9iM9DJ1oTX2ygMgUgxS9LGZDQ6C9jdxu7cgqmKKXQH",
  "key4": "4Z7CNRW26pVo7qxFnY7WNDN7PTHGGkZYBKtnwB2PGaoiyqktpwHCngbtdp8iLYZqRavQjVLPp7s2eojZvVo8TtRP",
  "key5": "4sv9RhBxrpd3LhbAm47dz6X8mRDNCJXVkonXeTVUFWvLUwSQt2rYKyVMVWzDfAps6vAoDwFYCVwnKhz7bnmbdci8",
  "key6": "2zjWvYYakBAZqJtFELD7ZKR9ojfBH73ezJwiENvCpic39cg25auYRTZKZ9g5N9km7Vfb3e7eNmRw1dMK6iC8pCVt",
  "key7": "S97DE8MZn2qJe2tmZJhsSvVFi8aGpTPwfKWB4wHAtnFzSWoAFZqEz3V4JRkADybcfAZtrZDYLSt9Wnb49Jk8HH2",
  "key8": "3bCYvcT4PjTUukCg62S2n8VuZszegXev72DoSf9AWjWNskQbWJ74KNN7K6YTxdzEmvEtaNpB96vngwkNcH6S1VDA",
  "key9": "5CCo7cBdYnLkJjbeEJxTVKejyBWLv1J1CDrXk6YrPZZ6b4x7cSW8xy91paqHU8TjtPqHpi1eGEssvU995Exd1f5W",
  "key10": "51eTXtoSTcqGemgoQN8DP8gByP4cWfwZ4WfVC7bHgakvHH5SRJGZgcuqu1mWpEBTVcjxuJuSvECqYLLyRnqMB782",
  "key11": "nJaNBWEtYCbSxdNbHy1De2nZuaXgd1ejbGNvBNrsQiGzQTyME6U7pwaVVt4WVMPfnSzN6FQ5hrjE62yH8RXc8wu",
  "key12": "3zLcPaugHbyhVRVGYvXqmxSCJK35FcNQdk23oLNxPnuFvTC42KMUXVBiHbGeJCeCSQeKgJtrmvku71sui2D3vMzs",
  "key13": "2z97JPK3R6TQsvqhrmmUH99wwG7xZcvJ4YiaAG63FWsnKeo1zy7KEfQaXPLRmTsviCkjDnTnR1HhiVTWmst6PsF3",
  "key14": "yKNTwreNLcNXAMD6xsrMM1vRVnqRWF1mCVun6QBp2rrr6U2gpB7KyGCLj37L9Zh7NfDgMaAQn2NotZFpgdTL8mQ",
  "key15": "HPUoUvRu8m94U5uDpKTgQcN7gKVSaZL73gNVgnbH1i73TamGD5qQ2pVuzQntmxGvFX25PvCRoi1WgZNZFd6249o",
  "key16": "7UtHBpCdtGEkDnNHiXHrSRNEhk1g7zR1ughbx1aF9NXZnY3KUWKsiMwa7BrhgKyEpwFuN8obiGK1ARvWbK3rcno",
  "key17": "4ELoBLpnNBD8kbWvTiAi4FnASQumwZuwmKJ5dqLqS59opZxkWbNP21UVmRVd8Y6ugMzqvJenyf9YPyjfRGrjNH14",
  "key18": "4ZNy8Aj1m3Hd9sndtJUaRrZpXpp3UxpJzbF3fdTBV7VDjYH6QEQJH53jdfFG5h3fDRg7y98GzX7Dx9dgZDMKzJcK",
  "key19": "L5SGdDRiWLnfYaG4otfJX1fL6N5KKZUdQZVf3KPVdc7SjbmHzGMYoA1ziWHvkex7EKg3r8KbTapcg2SGLQ6VMk8",
  "key20": "2BqN4gpgDrobJGafMAd8EtEQ4eWErzpXNT4yNC9AGKNquC7ccUgeKFpJuv2uxZXf6Xq7jejV4AgwPx22hMosapAj",
  "key21": "4qT3LYXaE4GENRX5wdkuFQnpWnKNh1eBkWxYEm6JKTNpo2nF4enkd6edKavLLPAHjp4KWRNDqKHGr4GYj6nxDKWG",
  "key22": "4afwGLR55jtG8Hu2n1ZzTwZbxZToBPoLby8D1np1FWDLkRPfDjgm6moQ7K5BiyXVfqkvcNUy2eAwXVPaLfbJcV8B",
  "key23": "4cuRje7aY7xjRybfxZZjQJT4fkTLDBkDvyHMowMTrdQqGHLUyzmyueTAbBoB4nuHWcy8k4iZ8RPk9xL4Zak5UCQm",
  "key24": "3rpYNDf3v5wTvHqibXmi6WNFjWVEZDBX1w5T3dHncXRHE4eMyM1KfxzCq7wnTwmWyvWHSmwYgB54KKkGF6TL6J9X",
  "key25": "4wM72jBjh8uwXr5U19bKSVJGt2mEteCehUkTyrpTXJtQNFWhyTdECQxH38APNJkMTVqahP76QeHTCHzKU4GDjFjH",
  "key26": "2fvNUCuA29pbz3F3EVBVpDc6NdDjkS1ZdfVPENWhvimWtBVxXRtTgKcvPmEaXNfoxqGe9nCuFZxWy6JRTQF4VJ2M",
  "key27": "3yNZqxgUAP9ZihuvzPM2ywdomp5hpfyFVM5XA7Ni3zkUCqxQBvj21VZ3dHoCKTpftDXuxuFsE7jKckNssujeqh53",
  "key28": "38eSyheSzh5RFtW9LybBWGPr8JkSZmcFi1Zd4XuL4RmLVTS3s3qxoidV1GkZutiSU3D8d1bWXWGxQicQCqC4oQdS",
  "key29": "3Kt72kBYYU5k9yLGa25ThmP7Y4Y5qgdxJWSmTqGaFPtfWV6DThbJ5WJyzhwtJAmYriPsjJSJjXLHHWffqoh1bxUt",
  "key30": "4uUoNa3iER7escaGGbvQW952xw94dUf5NhtMF8uDEEmEeGAb1jj3TCiucw86nDwA5bqcffn2TJiNQ4SQRFRP8T86",
  "key31": "pZWR2B2EeLeJuNVWBcctuYGtJeCoG6Qk6uu3DXcSPrUQdhQD1ub4qAXdcHzd4rt641mbiKo9VWSDs9QLMif9V5k",
  "key32": "2FwMhKjp3RD42gNX6Ti5nirLo85qHPzTpoBYqDLoa27KGtRJnF6HiJt7KqccFpELwdNH1eeyatRUfeLwkdeT6HUB",
  "key33": "3umd17x98CsWDfAzckE2R9cf2coVZneaRGXYRSVqweVgq8AACd6L2wx991wRHDjWcMHFKGSgjXq8z2Xmz8aJuXxV",
  "key34": "4FMqzzGWBr3Sa37ZvzRW6K4MJReJKCwwEQUNNVorbQUZNrruTvQrapyBhCzh1eLmsaRoymTCUfRzLPMdfc9kJuGC",
  "key35": "wpVioSeS5M59EJu6Bz2R4X8qYi3FqgJqBeBghkLxaPiiyPZYoxgqAmrr7CKEGMoKckdk7wf1d316gw2eHbM5xvD",
  "key36": "UYbgpRUq5zEqmZMJFi4j9BUbTo6kt3myMUGRjS4dj3q9nLY3dnNKLRWhS7sbETEVEMuzxtjB3u2T2QV6J1daKQW",
  "key37": "5cHgSLBm29EptxbZ4FWyARpCa1C3K2eYe4CvoXiCS447F98hZMdGx66qZq1CTqCHeFiND6NimmKWznLvPKHRXLip",
  "key38": "ezaEuNBxPB2VC1kS8oj9jwvpZHn2N8Bi56SBhzymug9HZduxokrwPWArAt2QmDYnb3sCAoEX5kZhTZWmUauz8UJ",
  "key39": "3mk3z4xQAJDKNsqds6Zi21r1G9epmzN4mB3TuEgpucXZe33nTCuFaSNhD5qRhrQuX583LkZ1x1rxrrXds8p64PJ6",
  "key40": "439ZFA8vaxStWassWnqF5d5vmcfyCcWGwpiPP6LtRuuASN5Mp1FA3owBZtRbScy7ai7nF9jkrXou7ELr86v1n47d",
  "key41": "4nbjaWagcz4ab5CvUgewRpdaDjzADQ3bQ9nbZbF3LNPEVdPi99umNHfUoeDG5KPxCcCtTWrJuetSY4RyNZdo6RLn",
  "key42": "3WgM5dm3Qe5efNSmPcynM5CycPttBcZzNrCmJRefeQktzMgnA7tX79WWprgmuYeeQB2sCJMBr4QChs5zbbWCNfkC",
  "key43": "27Vx2fhLwocPvAqMk7gEMj543rUGrDyUxqKBhBMuT62zHPpF4j3pGSBZnCvFFg4ks3gdnxSPW96zvXAM2T6bJCgB",
  "key44": "3W9fdfhWVByYwcwpxY6XkvDsJpjqDMEuVaGNzo1HUuNt9Z2oDwAMJuPVKYKdtgZQ3eA4EJhP5PuXijqJfW7veyir",
  "key45": "uBqHFQrSFiFH3taCBaN81dMU2uw76G2DFiKbHxGTyqzy1N72f5mETsEj1A31D2dnYd1LzoHZNfasnf3MiV2HoZe"
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
