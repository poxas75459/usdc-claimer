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
    "5t4fQYma4us8LhkfYZn66i8V3yRLvY4rfdDjtLswkRb6ADzZXjb15GkyCU8NaxnNAAEMiwe4DR5edBf3hVcpqQKP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52NjdhD4Rz4ojF8ZfSWWgF9ykobRywi88yRY3dDosm2R76fgJrY145KJH5DJ3iykv6KTUguNRSh7XtvbWK6AdApF",
  "key1": "R4DjeiffTYYtBDHxuKZufG5YPtmE2NaBYUhJLi2gPze6rAPUzkpj42pTqvJ5qF9E7XZcKyJsJeSP6wHA9d4u6v5",
  "key2": "4DqLXXax6d9V1kXERG3m3vbfoowoXYU3gVntPGi6bPL1MXYcKgFo4jVg9siRnEwbvvgU7MHqNcpJs4JWWKLkC8YE",
  "key3": "4ZcjVwxCr1ZBhm7mrwn3udKWVt2dgbLAwwwZg1QHTVzugNP6qLwMrk3NS6V3XosxgFbcmvZWTNcVLyZTYBfYys6D",
  "key4": "45QaFTifpMFuZKyDun1bMz1J2zNGKf97wKfmjw8xrAzsnro5CN9NKtmor6x9EHZnevpRSU9wat8P7P4dVyTW1z9E",
  "key5": "PZNBPEQesxv24FfjSCZpdD2aDUDMYoXZHM2JyCvRaEv9d5hv1NykvwzSVRotxehbPtqJDrHKNj7rVYbPiSAbVGz",
  "key6": "2m4os7PFtXHbLkou5TZ5fAouoWaPNVg3YPCTsaSXtiuQyyV9YtxEeiG1zysT4SF4cTepESt99zN9xyn2qGfahQfj",
  "key7": "3QMM7XBAFAJdQK18y2ndHgC6LWBNggVuAxc9KCfdHuFXw1ZUMUcXPu15isXRhG4XnAxrHMz5VY63FGH2Ge3Dx3Ds",
  "key8": "3KmyFgxh9uzEec3w7G6yhNDVctZqGv5cYsYczNANtYe5G2Rrg8FnBzKkvJikhdMdt723hp78YRqPazaQ8eGnn6Ju",
  "key9": "2Lwiti7UKDqpN1RXFxsiTsnyAeySEn816EetH8VsKXtqQSKBy9jmxa5DLd8ELCsgJWmWdPCu6E2hdhBZJchfzt3Z",
  "key10": "5dgw3Z8uBTLvMvMAx7ZHuyw8kP44HvjJhGKJzSyjPdPyM1Nzc6yPeN2TQ5QJp9jbKzUdPbg5BpM29ayWMNxfPdoX",
  "key11": "2BVqrTHkeDVRXPia1DYdKkQ4ujWYEKXSNuy8VdpdaNw1znUpj6WNM93N9y4s5GQavRtgBxbx9yaCWpSFHQtiyuop",
  "key12": "5wNBhtibzwo7mGBn5F23qP6TAKj1UhVs6xiWcwj8TFL9icYbvLadBF4SEUUchaX4ZDfFGEscJL9gNCGCwUkW2YfB",
  "key13": "3gqK7fCG7HzNXC9JfxYJcAAxwAoBUeR1BrucQY7Xgf1VnZ5piqEYpDsPgUujuNqU8k7NMm7RcpVD1gbFXfjZEzus",
  "key14": "5chWJzRWW61KNoLFWYKpWC7U3A7fy2BTr3Rj1aUGnqhrsLZfiMELv1hM7bDcnmX1zNMR8vMw7XCkBaFkt26NM6hS",
  "key15": "2XRE3E32ysimEx4o6vW513fzVycAFozBRdQPtojx3D7ouJXR3rGEjeFxZQ7P38iC7RheMUzBWJs3K6bBHGNu6KAQ",
  "key16": "2dLKFpBnFaY47zWo4sY4NRixupp7TJR2gMCtdc66kSEAKK77w1KPzb1hWi4jza8WNT7K8nx1EMBzfBKGEhqMeduC",
  "key17": "4PhBhi4uXrL78qHveoax27ZmbwCyZkAsfrM3CeWsQRm7SmUsPfGwdH37XCCqjhfYXSFg65KVQ1KovxxwmFRVv9et",
  "key18": "5Ys15PFx7xnwmtpSVwt7EqR3aPf7oCzKWdSLaaAXVhXmR4qo5zePEbKdUoB9zQojTW9gmo9uYB6s7Wt6KbHfPQX6",
  "key19": "5pw4iLXHxzFL1usGCSVGPbiMhm41qWmEPZ8wGJcfc4BjqFTUVMbgvhYSPHCiZGqFvvqGd2bgDAZViZs5HkbUJZkq",
  "key20": "4tvRr5wkeEQX2uSx8awXe2Ybo3BS2JwF4jZnQ2wx8boVpLR38gPzgX7gXmGn64mZaFK9cbCQr6WCpRC9TDpMuEm8",
  "key21": "3iPq3aPCzjGo7c75vK7XzJN8F2dRc4LFCuhv9wPwiT59xZYJ2mubT8RQCfSYGcFf55TpymAk7tK1LPC2cHjZLoHb",
  "key22": "56UJckQe2pwtJftUGU36acCGU5DFdzeTdkrjGBM5JAfCBLSpui1bom6Z3kWMKng4hwxDbuVPQqwbHeLBMQvVB53x",
  "key23": "5oLapgyFrEtTmXgqvE2wBspTfZRAuSdwQZMD8BQkgBxodnwtFQNCerssZseStf67omb1GgGADvpyGr6mtZcxYG9H",
  "key24": "3d4CkShswGC1XWgc7PH2t7PDeX1oMgd3xc6Tp8kng7wMdw5UyKGjshQM1r5qh5MtZWUuAk1NcLapoivkbzZaNHhC",
  "key25": "3h6pch9QsQfoHYpc1ajhffnP86zxWJmymHrKTZDdxzQYpHAmtAvaKmoKjQUSjh2ww8QqLcH1AW52ibjZVgSj1W7o",
  "key26": "51ja9KeE5zTosD1cdgKJdwXihYskWCPjxyxfXwEnxh7iYzhm3v8LRbZ1d6dwfS9921Z3otpmTZerduF1gdrtwwFu",
  "key27": "53viEmofVp6tUu9CZB4vx51XKtdL1EoBdMeakfiuXiKgiZZmD8AYCpnqGRxMoazWDuN137kbsgb8JhkUxrrPsb9Y",
  "key28": "5UGetDvQjvjABikBvSbuk7oXwhfFnCq4UZ9BbCx7mbpzNL5gsv8dCfVA5fDh3ErxQLxLAxbTxmbmJEujYg6kf8U7",
  "key29": "5DwF3rnD3ftUFGg1d6kavggpbVCQsuFjJ64g5xUwMhQbq9q9jk2Ebo9CSByJcZbHkVnbAVqQvvYrBgpA4MQDVJsV",
  "key30": "2qpFr5iYPAqJAJWkw15Z1CWKQ3YQhhFUMPa4kBCxGdMH9UNSnTaydGzLFSJFKxJ1BiijQSesoVrZtWDJvMFTeYsR",
  "key31": "2MoQD2g3Ha7e3adeajw5YLRGUmcMrM1NCTuKYWiCbzkj67aQFXAoYwYmnqw5pVBAXoe27gXcV8oAFRCoCpzaUy6A",
  "key32": "Sf5xHtYy7EQJ5DVqtNHypEtULhyAWjwTq4hZocrhPp3HR9Y7vE9MdBhs6C3eMTvfqk4AsgzWcigC4LtAAXigh1z",
  "key33": "4rm6a5riN4ZFERYZHbjyRbpxkPMJEMeuNvPxj4sqiNtsyV5N6RsFJe89tCamjPZP4bG88ThmNCBynJvbDWDJKbpf",
  "key34": "2mkwaefzYfaib48g3T3maUroMoQjttVgJyEoXPG1LQxZCEQk3TEgXwBd5Wrz3FrdAoV2tHAPHwxqXzoHe7wFHL2M",
  "key35": "5YbLfVFM9MxuXmULdb1WZzCPf96ZgWEDVLQdZYSjsifgvGKLfmbTTvynyf3ZbT6jAELYhNqv6tsavsxntpqu69pd",
  "key36": "2D6oNbqsyUmt64BzR7dT6KdvF6XB42PWHj8JDffbsCt6i9azGMzWxrijpgJaLqsR5N1dcfmFsZuACuuUdixZMdAc",
  "key37": "4z6M2NnJnERmCUdKcxz4PXR5dA5h9Me9H2qysAXNva45hzRMbvyjE9cwJfa873voJmyRNFMv7GEucRzvyvsdqmaS",
  "key38": "2uc7S7W3NXS95VDYtWtt51QYdw81eRWhHimBMM8ApvsVi7Hfd6fiej7aar8MYkDrZij2HU19f5CzMD6i7NdK7cBA",
  "key39": "3yEMj3TheVGop9B4zETxZMjzenecXYeuK8RNGk2A2jcQf93gKQt7yCzH85pM71st2iLKbwtL1qYvYWGKKHUGZmxC",
  "key40": "4MDeeFDrH9nYSD9pyxSta1VtvjQVQqpzUnmSpV49WuHscz2aXvM86KxXscz8fga9Garc1jfMfJ684v5GTr44CdLu",
  "key41": "3XTu5jfGEnoXnjUZ6tZE3fD2Nx6KsYfy4FWVbaYg4sK97eWLMM8s2poGfd2gEP2CGTthNh6intGZ42uqzB1i7uQP",
  "key42": "ryDXQMsDXaWZyhZPLzkWCU581DSEZ5x7Kr41EWTxAxaimDwZDVBmv4odEZRwqMShry3oVXwUYSTKsoHtNLnaLSw",
  "key43": "Kyv4FDeL6nEmn1rdpyRFp6oEvzmUcifgvpzDEGE3jTDQBD2xxZeb5LMTYRkg1Z59Mf5zzRg9CEb8hkkKMk68FE6",
  "key44": "LgxPWRm7jCzKXmyPhu2mq7UgzC1hmDFMAXuDH4BVLLWU2jKbnE3ECEoHcsEKeGKQdFZ1tQFozzCnNEkCZx8QtcE"
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
