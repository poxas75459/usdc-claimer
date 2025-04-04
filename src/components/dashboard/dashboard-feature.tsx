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
    "som6c5nk3ot6ZWrLpUY9h65fYt7UayNG1BRSwSqwUgF37fZNC1fok6hgpQnDhMjaGd4CJqGVKyNp5in5YC4Rwtz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "jS1oTLechES2kQEX7mViJiQt2JHWbjuXMVS2GYx7hENrajLYepyPsgunUBGovbLGVso6JWF5sSGZPpFqFe8Zdob",
  "key1": "4fprerWgjGc26cJS6L6R5wRGwvp9zvvHSNrC564Di4ihcrk3S3pwT7eMPpfRhd7ZC6H5pRKu6D5ACi8Hqnv89UjC",
  "key2": "3W6UFJkcFkfVpSMr8Zd8NYP6L3uSeSiR4wq8fx1bXKQhcv9JXcL7pgQqoDnapep3ta8QQr3ZpMbevazg1hcys9vV",
  "key3": "3o9wzaVt98LYVxfaJryjNf3caMbb5kCWPvfHxHTSeZY1K4YkKyPCH6FEFAWX3KD6q1664cqhjk9pXkr9ofqvdiVB",
  "key4": "5SDazech41vZrVgAEfgZxsLo2nfCmVPPZdnmoHtXtHAANYRoiGFTJ33EjrkSKLNrXus1HVQ1R2vbeVQg65cvYwpC",
  "key5": "2MZcsjN8qH7dvfaedgig5aq1QJa8FaFtwdeCypPFy9L4CQtzUxtWkvPCp21rpPR6AVstnVdQ9vGD4EPVYRWZzJom",
  "key6": "FYNrkEW1kX4g7WDNkf1pyzaDqDcgBg8bPuxx54zQ5Kou2J3YRxfY5aKnLTJPD8tReovbqpScNRcNZKz8vaSUg1X",
  "key7": "ffPrjXw2GbTvg4U85WApeK26cY3Bed37WER1BQJimNg1Xr2KEgLGrXxx2TnYsiNYneyok3DWgjacdwkjt2jWwkd",
  "key8": "5DwLWTPH3UszNLq5EYDgHLwZ5ZjgNQvG82eHMhDsi2NgkQWZkjk7UyWXqKEXQ7ZhzvdzFoFB19SkAhBZRJwFYGwz",
  "key9": "42LBdAwbYLrC7qwtREqesr6Z7NbrVeGybnUsMvkV3VVM6SU3dwNPHunSkvsrcrtcJBekGSDbDageUxTUKWvFPp8S",
  "key10": "3NmikYkEp4xQG9dUNhxC8dutJkdaHBNFqKqKyeXQ3svMzPaWgVXzo8FgxHwdTDr7cfV7qoFYPxbJaFd2KTForToq",
  "key11": "2A9cKdVE6fUp3z53kEdmutJCPSiPUDfY8SFYQC1jqhXgEp1UQJBqHowjH7WR6dV5Y3oXcDWe3K1iBzLMY1e14it6",
  "key12": "2jLRkutPmCTvm7zgfTmLuj3Jf8uPAqVMPoKVzc2i3WLkUbkXCo2gVPeb54sWfadVfWUhZPQYfLS6ZWAUbbt5VnYx",
  "key13": "4tRctrWETGTxVzRnDbRuwSsYcR55MbUTQBzwnEVnXwAYYYwLMrxm9fH3BUAzX9N2GTyBdjtP2Ke3EF8Jxz3EEPGD",
  "key14": "55TKkznzjmq7n8SJ3Hfub7udUYEnee1UsaydMz1UPZQcDhUWVeLsVomEEFEqCr9vSTWADeVgSuiqR7T8WagvX3Eo",
  "key15": "5P6kd9eLjkGdDWu3b3o7wHdviQBb1dkt2DBeJGTvNQZJncV6dTd2GrMnRYgX5CsNRUBfFDQxH2zvoxZQBBgZ3KTF",
  "key16": "Gcif2ktoivfj6s5oDbZienDRHfM1dvVqWriWDTcUtvq3vYEPcW25j9kX7Q2hyUDLMrYFsBuw3vLHFWNVYXGK1eg",
  "key17": "293qntKxxGMcUYqccZPpqmsLN5fuGKxCaACZZ1UaNaAiyUS5zCzTJSZLswgkCPx2QefQRv2QfRoRFWfDLd28x3Xv",
  "key18": "2kVBHU1JRrN8R3ggxjGBttqrxVar6H6qsfVB6R2pweWD2dR1iMoaNPbVjv77RS4wqQfbDojE9u8rhcvGEjwGpej6",
  "key19": "56KyhqQVSJki6hg2YncBqUa5RuMkCz8KtmMx7igM1f5d5EVrhnam3DN2auYRFSXWKRJdTi16LD4kdv2Ep76jnH1W",
  "key20": "43LupqrrHJH8nQaGJecq2YFcpH6EfqNsfYuaQAaHx16PavG5vJ3WPoykBtMRz5mBbqhfqEqK6zNoLDg6sKqaB3pM",
  "key21": "2xvjXa9dVXzNpPPzXmCShU49RWGi7igtoYLKeVfonY7KJpbu4xKDuwvmiRU69ytfY6Ea1RgZHtLvRB8eUoxEcSBN",
  "key22": "NjpRfnEkxs9x3QZBxmXMeoNFbyexiNzyXXb5CM7UYut1NeHNkh2apEGFG2iqrb1opSKBbNdP2Q4FteS6XrgiBXh",
  "key23": "Zt2sFr5XFqvvi8NxYatoCE3qxmtbZJUHvWMbCoaHXdnwtiYKkbpoaxoSSbASGnRhxaKWNHQLFcb3tAA1mmsM13d",
  "key24": "3ZcipmRyw7g6PNP4JBngvxyAJm9E37LmALoPkyYbawphiaq5KvmGVd7ts87vgdXN9bFXfJi5hDeYQkB9Ts4KSjVC",
  "key25": "4RkyuH5jn4R2LqiL2qFkHw8mWdSVxPSQnFKm7dDVURf6SPjnrrMwR3RfqMuMWAV6PKo81ShecJdCG1vFHAVduQRa",
  "key26": "62t62qpWYSbbued8PyXHyS2RFtogLCPLbZKqszynEpK4fykB8jDUBz2x71HRtgJr53HKpXvWQpZRmBFmzxsVR3oM",
  "key27": "3L13GVBGEgyPJRguKc7hK1p75vD7uQneeHUFVjRDTTcT6e6TzhdUYvKF9cP9X5GAEpVvpKD7hYCDLJWfGcvW3duy",
  "key28": "2FCBFe6bkBhXXq7LEfr8ZD4eCSLiK8ZCsHeQxFSe4RQGLbCDv1cBdcLtUyBcMZEHdpXbEwhdUbFRHt2KTGYbAwNM",
  "key29": "apt8gXbfMBt8jGJKyGQ2rMMQWyXQsVy1d45Gyjp1kcyWXoqN123SntKzgh32yo4D7ur92e5thXv8ShLnjr9QqW1",
  "key30": "CgFT74oDMnDKGVxSu6uVgwrxm1os96AcB329fvWXx7zqEe6g17Yk4MkFc51k7CEPWtKm4MkvLRjHpyY9Z5ED1m1",
  "key31": "4oDKEx5rbhL4zhyeWBSs1N1eMun1AGarsDTH6MaPoa1Nqu2pAbjv9vy8kPEJnpLN1uxjNedKdyg9BStQTaKMmf24",
  "key32": "4ub21f77zSLWAu4w4XFJzsSdJZXjRV1Fk4xeigr6rSnB1D2f2MQPNC6VUBhmAu3YchMzoe3Nx8gyC5q4WR82hC9o",
  "key33": "2F9uHapcQaB7oaxL2AMa3HKycNSXT9K9wqrAWWAfHav9HFkJBRSmiFEmDAy8Tnqw7b86fkYL4WzMLyT6U2DhoQYH",
  "key34": "3RcNGddFey1BEuQYMsK5fuuVRV4nDB7xGgJjvSKDzZvAmbTCRwACkbpznM82eRGiyt9PopGnsVZyGfS8nEoefDF1",
  "key35": "5mkqcCNzrbr6WkH6WKQmbsaMJat9Y9e2AcjA4WQG1JpZSGu6o1RoBF9uX1kYJhxUzF1TqcZUAvr4V5we3vxPCHEJ",
  "key36": "26raPc7twh9SUSj91iiZgMpBrakBSvYD7ubQ6jZqDpgsstjYbBcP8Vcr1YNwJMxWNKZtPR7GzWVNx9KGB535Tmpe",
  "key37": "KXWkrsz6ZQhw9AhdHF5dxVkuNXGUmFNJ3nWGH4BJwS3P5XwMhNAmgAPq9G91qq9LXv4S2duF1HKknaRLmA3kQ8j",
  "key38": "3QLHxFURZPHR1iPn9BmyY7v61TdgFkQLc7mS4CHtEy6Kw35o526tRMQM3hfvyofthmumnRraxU4fkUgf3aMjFMaG",
  "key39": "LJJmp1cAGhBSo35s3d2uS4aC6HqdKL5jmq1W4mPwmMGv5B7WSYTB6qL5phutQyjGP7YuxH6tpFHb1xwGCYhu7aT",
  "key40": "gJLiGJ74gexwo6SiD27jMVgUuhKUHnnAJgpdTwtLx7oy3khdvRiF1EbLMYoTZsd1HXtJhrGTKqaVZecpAHjrYja",
  "key41": "263N382qasG4VHLqjS7ENg6Ea9LnQ7pJq36NF9TtTCQdaVCyojqdTjRWm8QURVYhqwSQqgXwUC1M34bQk2Mdh98n",
  "key42": "5A6kFzUgPBdhdpLTVCeHeRLS9HKGpRESKXA1rdfE9k8Cb1f9XQwmkihpsz6vS1QrwAiys5eYpvHXeYji2QWsp4Bp",
  "key43": "2Wf2VgGndxGxdTm6CtPQmv1p3VHYopvkz1zhLJWByQW5yGJtqjZygcnDqKReq6J3B5YVY9ZT54Cm6Dw8F7RvGbyY",
  "key44": "2BytosMCjtFZU7TAxUnMvJcAHsN1AB2B4BqGUj4kfJibkYAGBvMMrQr4V5rh5ZbRjvqr2qHLZdxXjpVfqsEj83oW",
  "key45": "3dhdLzrtk6feW8Jt3psM2cnpZPi7sjeZgnp7MbN35R7TxTxCrs5XyeBC9L2U6hNZzLPRP5Y48Xs72pLVC5oKmND",
  "key46": "3wmj8Zs8py5VHSbPV7QBoLC9Ng9an3gMfvxH78p53JAu9quRgEWGvwDKw34oLGwyrkaQ7Fc4xkVmaPAsHkidLRhw",
  "key47": "3FsaasjZjb5QToNKWBkngJgx9Xcj6bxrDfekNbpj3kYA3mDYpRJ3LdtbrXw1NynXHepeg1Afj7rQbKiqGxTnRXg5",
  "key48": "5ain6cEQunQ7hgGbH6BNFaU2YujMpvzwPXfarMqMZNMdmFEX9iFfXfo5QwwWjVZUR1DW6GGiJUZJZ3U6Ta87MNX7"
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
