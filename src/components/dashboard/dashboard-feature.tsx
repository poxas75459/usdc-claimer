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
    "2X2YjGbqpqsD38iYPuZYcrzzWgPqVmt6a73X1d496pD56k9DCAk4ENnx9eyT8zLAfaKaBd1ZJdY75FeazDfywqsx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ixacLke2x76QRBYR4KodvfzDYyUgoErwrvNxW8v1BXGnktTcb4ebqFLNit8mn2C2fNwKCcaTKZM7P5pyBxCbAsn",
  "key1": "4aX463JAe2yx95e69rCW1ioTBwNZTZsoFgRDAprZ6jbSvrkZVbmnL3ihYYspPSgWyrQJ7H5MGjfYVpTizhuw7eqx",
  "key2": "3hHuZ2zr7KShBBwhN81MtW5bEYRAbY56Qm9fqN3chjAdtZy9GMmLJq2wQmco4QrZfn7CYkoVaSHxVzqfdNcsQKb5",
  "key3": "3MuU6t2TGUH5GiEVfC1EeJ52gGoaa8E8pE5atyWpQeQ8hHimY2jGH9KzRDGDaTbvWGv8ZQ6j8Dxf86p3YMjhPdjH",
  "key4": "5gvUvQzT3hwmrHN7tr5vSxnQ7j91D3MFRmaoy6ZKLNNsvHic6JuT2soRiiGVsGUgMnuxw1grcXk44mZ1RmgZV169",
  "key5": "5RJXwGC7wRQohXfmJ7JKMUo69SHr1v9x74H1ZRgukJhHm8AQM9iRav93mMdBBKxRsHcWoVrnJ2WDkNrbiTHesUBZ",
  "key6": "4PjUjvUdNxEoDRQRNLK22txeX1B31GaRjnq4UUyTvMt3FHE43GwtT6cEAwzTAKLLvJAfhKrEstxJUw9kLksEFK8M",
  "key7": "zc54essnpmYiaQbEJ5NxaU3TiMPM3cxUqiET8wuRr7bEMS1m3DoF7iDWtZJ14B3cPiejJQeCtnJptupGYdSJY9W",
  "key8": "2uaKR12uAfRspmmuqzP5utWJ2XRFgfvSaBcmtjorPbKPPcRYem5ECQLEeo2bRqKtUNXWLLxKYTWabkcTzZK9ABMr",
  "key9": "3bvKV8uFk1Yvdf8nq8KEQjBVPV1vWpkhsqSzk2Su9zrPshpFjn9X817twgt5mUwUYh8pbJLXeqinyyoYqYuD6DEB",
  "key10": "343TW8NezPXKNEN24zLKDHv4YDXJGn4RTQmwgkJiL63MoN1wXuZXgChCHg92bPb7rcowY3zvgWwvR1vySyyR3DYQ",
  "key11": "3PvVDMdGSMSep6QULiQdzzEts24dEgbepPBbL62CyLgPeByjZ24b37StY25knccgi4TZiR3c5VjXVh9uoaGHropn",
  "key12": "5Ef98Y6pfmjoBgUTG2noLyz1HA55nawxYKPxgKPfvR4xTDUoq6wCuFWajZ6nXWwLDu2YDNu36NVzCQJCYGTB3Pik",
  "key13": "3J6RRo33yQEY1Ep6DKMF9riXj4bUDaYsxjQg5pn4MkW6Yge1zjD2tEvz9UbyeHbt9hwGaDMbj6CVFdpP1XSXuu4A",
  "key14": "4qfc3S7Nu9AQtHimdiigme6Paz7LnSCiwf123QAJzZw6dgziVN81EswZTxmdV6WaoMUPqTHVb2P6cKo2w8HzmNi2",
  "key15": "SQDQf8PHCxQqthRB4jaeMup37AZHDE4k58UDvLaTMjMRprsWEjMVTnNz1qMrebsxyzxyPUpNr4ksLRGx7bFHRBP",
  "key16": "4o4ofZMY3RESupofZyAEqJuhfCoUJz4FzsoteM3Uih4UFtSoyVPRPUeuhm7E6HqqddGWpWpCXYfQkQNPnWzRSKLi",
  "key17": "VdTVk7CB3yZJaFpFMHjmmYvNhgdCGXXVNHWgHDTJeh43EhLEWTUu8yNtiCGQePTgE2cwdjXMmXRB6ssWWA4AaoM",
  "key18": "28CDKNJroRQijHDodiAJAueMmeEZZHViGgXp8BHTPigo4q2kWaRuSD4Ju6fCXQg62x9TyHNSPfAQZSmRXtdUD2ry",
  "key19": "2DGhJz9Sx7EDiw6cZDR4YuamrNwbvMkB3Rk5FyHVEnzN27UzjPgaJ9zVURF4Ft3wLSG54EaRDCuhfNQr13yzGH9x",
  "key20": "h7kx2vRVyr3MA8Fe3dm5X8UWmA5GH6fYtymBJeWareZmkxS9pq22AiMVAQoDrSAzzQsSPvhusPwuiGY7VGCfEeV",
  "key21": "4UjwKZbK5iYfP5g5NrrHKhCQQLMC4Tahc9QiLhLQn65fh1GRksoNQaX4fiyXMH6UWhmz7cs5Kdzm7A9ZbJU2RxUg",
  "key22": "53pyBnm2MSeUvkj5uPGMtm9CwexjPEAchwjr7nuQi2Jot6BukfMJi6pFEPkXJCBcLtTVb3x2hKzJhuJyE8RkDP6g",
  "key23": "4uYWmgDtuiNHkSzgGH3NRnff8Es8f9vSzHC5qd1CJLypgmrZcHm8XNCJoY6UEgDDsofNaqXKwLtyErYcErHQrLgS",
  "key24": "4M5Z1VDNo3xeMXLvvrMx1cFFeW9BKmQtaDPpJ6ouP3GW1AzjZdjYucjYGoMm3bDQm2xVwH3xpFxm53wCHRsoveW1",
  "key25": "2dzQYirM9iHNAWRGRF9Fpq4MyNGyctHtzyA19YKHWJqYHdXh5wN8Lh36YGVm2dueUSAfbycWvL8HcLNpaRR6ASfM",
  "key26": "4hCWunGjp1am8NHvDayMbcGkFTMPGTPXWEJxWWVwnH2fBXpbUHDoBtfRdHBbE59zxLYHUgo2WYw51iUNWML6ykcM",
  "key27": "2eWnSeTHRhv71fLSUEizJA7jJe6tdmrrMcTNhGYjPDac8FFy6kEs8eKCnNzTGn7LVbAstC7BsTZ1TEnqbfUW5jPj",
  "key28": "3e1VEMh7L2EX6eqeNehGYSdjD1Sdj5wxDUhizkLiJfLjkRxh8o5GJPMiDq1bDKqUfCMARaJUSBvmS2izh6Ff6uWG",
  "key29": "2e4TTYYEviocFYCUWXUqTWwYGaeRAz9JxGbxyLJri8xvEfi7gbNCSeCqGCj6Jd3MrpDtt82NbFJqTQ2tVUDnxfmz",
  "key30": "27rrcZquwZrAw2aRLB5nynGMJPPf5ux2iGDLrc63yLtgmuXszLYrGz8umJ18hzfz5PKFPtDtAtoLQ3ouKkkuvqQn",
  "key31": "5XQjzfbmWsDWS9ZK3csxd9yEzx7pKp8o843TKsfHu8tfwFe78Y6t7CwTzX8UyFuappSx1KDS2FKrNPC526xe6j9o",
  "key32": "2kczDiSS74rw7G2dEvbj46Ui8m4phQ8tgTGZgm87wRJbTU7btrQ8RZG4pZYoyz6TJRQXHQMQDEwmvJKbeQYyWbvn",
  "key33": "58mym5AQoyrfDSpcWNwTH2ndsMVm5Kg2puLbGwE1gKSkkiWTCepuzWVufACjmJ51Y3xqoiUXJft1bPrTgpcM2oiH",
  "key34": "59RKomy2x2SZmGS44PeGKEc9oRJgmnRwSSVQSTrDtznSuQ5ydqioiz3mvadoy1uiXDrteVJojTViw71QCUJgt7zh",
  "key35": "4vKqRFUMf4vNb4B9TnqZVEV8FxiFYkVU6KK2JJBnmJSxFqBmvDtZn2W5nfU38Pkza6AjMbhaVG3Br5KouFafrWjY",
  "key36": "5fH65xjZJ6nfYUAVZBRYyxEiXfrFHvKHKtWPV5paZuSHvGnxvicHE6SMcutQodbuVSouvD8q56ajjCgEjcfbP69J"
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
