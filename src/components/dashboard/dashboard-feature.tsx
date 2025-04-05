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
    "3PnQz1XPGx6dWjLx5Xm7A5aQutrjvvbtrM8AQRpkDysCCg9W8N19zcmnAawp73s9E8ySrNfkQ9XxE2LfVAhnkNrW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "smgwMmuvVaEpWRacnpNZAxFjtoutVPX3vGdXeYqYmTMVKzpmdZxA7QGfA8KtJujJw6TfPN3CW51kqAfsqYNTQ7q",
  "key1": "4kChsJMsCTcagh6TeH3qkGvW2tyqsotf3ey3H3dcpWiembAfpVi3eLEKL7weeRiALKxq4wZnVhR4o1kUzTJnzX7g",
  "key2": "5y6mzJw9QZCyqjsuqvc7bQjYVQahRJTtmPznwDX4VbHw2fAzN885rjA6K9KUGLBrD4EzREvPyT3uPK92rMFLEYY9",
  "key3": "3mMyKVME8RipV9y3yPfXMKZXcLLp9wkrRtxsRYPVnU5j44At8wUqGdJPbzTeQ4mmsjiiwUNtYd9ZWxEdhzyRjzrh",
  "key4": "C9y13SLqGVWNm9jY2VgUt5mEcWWeR9NRH9iDbXbhgtxpzE8EuA5pxhmMoWRssr5WqoRc4j44GcYRGHspbfrJJpU",
  "key5": "o8mbT7Zrci9FXAfVJic1vr8kSosBYsWJdubwc51Ki5AJWh8W13ACSzyQbtvLTJHBqABbHB3EQhxBRKzSo7MHb8S",
  "key6": "5ZfFqDTSVR7dScFDpoJxzpWu6fawFhZgHEyqkysXzL4iWG2z1T7LKDWUpdfi3A9RKtjjpcjJaD32EzPswLhhrUSx",
  "key7": "63kYRPGcrwzNEeyJpvY3D5Fqo4cYvwAJSwQNcgmRVCs6Kp3XydR2KKVPhjzF2mhR63Qo3bLHFa7oMq1xjxnChEYy",
  "key8": "4Gm4HbM2sGZBnmiqhR8wn55kwx4mR1hfas2xgLsDPSHDjsTC9XyY7yUoirL74r3WR9bk6M7Dus7rgN4ATvfbZbTw",
  "key9": "My5a4KFU5RSZLX64JRv9be5KnnSGfRzoWJBUjghsZCVe5BRVxn6dtcsdGrNhZxAfLvQH4qQZAU75wfr7caPRiU6",
  "key10": "3ZFv5ZXjuU71EoHMbQ67ZPzfwCoBoXbntVxJbh69X9rybFg4n2ZauXhcwEqauRp4jJuibr6sW2g9ceyTLn3ztjY8",
  "key11": "5bbVRX9YZir6uXqeBMcL9rat3xWkznyCTyzFG4E4fFSjmw53XjpY3s9PiMBHmMUB6SEvX3kfSC1ruc1YYtbvYP3z",
  "key12": "dk3tLBDJWC9DfhbDuuroZgQaayZbZMCTCQBvhRmQwjbihv1YUz15PnwonHXZhV2iUqW6A97AMgSpqqiGMGotMAg",
  "key13": "3dtZrAtVqvmcUMjA6hufzsLoys7UNEmBZuacErazhdWqTZFxJJCSZ7ND8tGVaK7VNmvKhS6EEqEsk7nHByXVAhQh",
  "key14": "3yYZ6QHPDU7iE9jntypFg7Biszv1D5WWTUUfEwqGNg49zCTSHvL3399QXAPcjar6mJzedJKNfhEJTzQP8eZQDxXM",
  "key15": "2SmycTpHrtnvW8HwCPTBSLrxKDh3ibR2qfS1LfAKkCMcCRhJX9aejsvBJbDWwe9CVNejY5yQ83stpZZ7fCewKeD5",
  "key16": "63nEEBVfD1jJQYAcMwGU2xJnB7EatJzXxQfx2c3svi338m6XWqGmqquhNxDVAyZ1tKrERTK9CvpsCqTN4Z2pCyHT",
  "key17": "3DFbdDeqEqYVw9erd3DBVtrADcDVpjvFM2cmwm8SdP19yVZqCmK7eKdRH6ci37pKyxAxBW1JYUUkFeaHs5V9aUsn",
  "key18": "5nDsP7Ce2FVbSC3UbSFEqot1uTEwzGW7qCBvnjLK6b4P2q4gTkmePFBvF13x839DpL86tPdaZSdZeApBF1S14pCV",
  "key19": "2fZdDiFCco9ZxsYuyR4sxxiWhYadckNabsGRLqWj4NrFUhxsDi1pvBbTJAvvcKSHECDfegnsh7t6p9bEJQVDgSR1",
  "key20": "R4nNdqhwVQU93TnmMWaJZqaQuh34y68BWhT3WmCFakH91VFvxv9tUa1Vxe4rcyGsBhtaev29S8NBXL1t8aTd4pV",
  "key21": "2Qy19XuXTHJ4DXmkYSawpR4H9nUo3B3fXaAjD6rQc5cuyT5tNYdRy722Y5moTssSg5NfY7zU7YN44sAf4QzvQ9Pi",
  "key22": "3rkZ9KdY86eBP2qAf4xKuMmR2vgdSZtYnAEBHkTPWApub4YPrzwgh5WAKfrrAR9cq1WTPbTWdJyyCWXsypdMTvZU",
  "key23": "MQRZsrgAQ36oyJqB5eC4ioZxeC6NLTc1oBZXgverW7ijMHmd8D2YkUSCiTNHj2KkxukwnLvEUGwu5Ba1rqX6zVF",
  "key24": "sMSuGn7ZB8mb63d7e4qFbT5dMf8NE1WeXHAnXJghQMen5QYEQzgA6VA7wvpmWPsUYduCX57K3kz8BUYjHcGsphE",
  "key25": "3ZDMBsr9TWtDaxgmf5EPvj9mT2zc4XDHyRBBkzoduhzLNyRem2SiA9LqtexPpyn1M3tUqx6A4HogAvtRHkAPnN2o",
  "key26": "4p7NQc8Wk7F1mJT1ZzmfNNSv5cFVxDniS96cQ57u3hURXg9ZfdJX1hdMGjQuff1vF6S2gFnucouYQvFii9UHe58J",
  "key27": "wBMd9v1AG8JDxuwo65jh3ydb2Bg5nJos1KBz3sqBL6PavN2zwdyyRf7JXBHsUZ94AzrjQX7aWtSaxV6cn8ZrBeQ",
  "key28": "3jkkQr12a52PXnPxQ53seRPzg7tS4Dkgxtg6wh32NF25BThU5Kxi8WRU2YY1Wsn4FTsj93gEeXvPpkKiaTjoBpej",
  "key29": "qpdEmESYCizY2oJukTGYo36eh2JXriByjNfVKvvGGADYbK4FG3pLp3P3QbbQJ1urducovTnbzptH2tTVPXPGsCE",
  "key30": "5QRSpy6BG1BNtXZ25ZrjALu8db8Eun17EyEEyScyFTu9Cjt6ktvdJsfzPfxyv6VpimQsw3HfSveAFr7bAa7sdpG9",
  "key31": "3VzjLNF4uPvY7Jy65dVyr7GGRdT8tYLBtbbKSjEgrpEidcBYgWwzXAmNm2wi69KcM6Nu7jTk15JBAGNi1vtuqmhd",
  "key32": "5yMBw3S8NsXy3nT4dvPHbcU2cwvrHnTyiRtqWkfbdGQ9PX7FbJMRVmh64stcdfXqN5hEFrgHdj4PJUTkFNyfvChY",
  "key33": "Q8kA7TkJi33B3MBnttJb4m8LAJ88QDE7ZggZ4t34f5Rdi8fZ8J3oBKbFYDiAGwGJu7D13r3e5RRoxPrJm4gHiTg",
  "key34": "2HLSYbmAGo6cHsteoA9dwZNWbx8QTNoJqGY1qnopF9vmY9Cdo3fX8dXKKnYQd2HLQ1JCUfmUmc8mSs6e29fa2T3r",
  "key35": "3K2QAS4WgKj9GG7hU55btypBHKdMEZzc6xiZdQDdoMV5g3mYkct8ekNh26fotqdYiBx1oiEpGzYRHzxE94ggYqLo",
  "key36": "4XwgPFghRdV3Egv4mvehLbfMZVYCyW3AEorDk78frehoMJfee4XMPkHNJ9WVFT7kLUJqWR62GwQ8YGHeY1bnPu14",
  "key37": "4rcJRZUHuHrqsvC26fVC16qBwydvJHauxN7wPyLMoMkHEgKmqed45KRStKirKfFxfSkadcXSaGYKcjTMvV6UfJn9",
  "key38": "4xQHV9koxeYgvW8hU85RuBWLPBXRyz4EMyhqXJT3VRJXDRNNHVu4wb747X6kKmzXxpPsoLaCNAziY6CkPKs2Keom",
  "key39": "5nLWZTAnzgmH7DSFCJLGTp4uwygRMaQVqq7bD3TD7mwe74EWrgHqSYGDA5C3icbKHNsEhDLShWfRyhWmowkWrxrM",
  "key40": "sJTRQxLVdueWEzYWPwNwNssJxitmqniLGrmqmKv6GbooWTDRMXmEQ7pMeVYTwSEg7WCdHwbs5ufA7ZJF7d1TofG",
  "key41": "28rQhxkLXWmFsMaefi38XayJgYKTKvYNmi28efcGFDguR3GzvijcmRFSNT2H8yAXt7JNN2ugTWWgbaMrPvvEV6n9",
  "key42": "2vwRTTc8mHPuesatzrtvLiJ5fZoT1CCoyLjLZqQ68hZ5FQePyjJLEAMKPQchMWoRpPNEBPZnnk48tSD7JNC2e4ob",
  "key43": "Kj5Lf7QHpPu58SLQnBvLvA9Tjs4b4Exd2WQTVeZBQfFhiYS57Y47WgRpt18DsQy6gveCNL2HYHFwh3aQBqQZ36N",
  "key44": "e3ACCw2ctdyYpVN7q5iYbkF364tw5t1P5GiMx6gPUKbut7VU4Ns7UWN1yoGF1jjqR9isRjJeeU1R57GzPYBwZZk"
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
