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
    "2NWbPEbScJHReUm9zQmsC2TXmc9KBkPUe3F3yp9N1QhKAUq7DHHWYUTGAvt9dQFDK12wC5k2e7pDZWhPr6x9rTL2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2di7kZbL4EQZDwj3QDQPnPUhQM6HooT63cmm9f7es2gCJ6DpjAgXQhLK2Q1nLBZUZjEnQzWHe8H64kbRGdDp3S4N",
  "key1": "LtXGBoSyWBthatS5VtGoMrtdJNsgufXrBjr8JEPicw16QCnCFmsDzb5wU8LqeZezqKYwp4R6x2AgTWQQiDuakCc",
  "key2": "2F7u4TnPcM4FCRsLAAW99GXYYA1A4MvCEMy5q2ksdicCLxbh98E6R4ah3Snm7ENehZgVqpGigSQadfHmC2yq2e7G",
  "key3": "37TMiByotXxeu9u62eJFmwDQ6UAoLtMTGg6m9fixX23fRd7Tb9MZbatt8DY9HfmEDNxvHDgQk2Zdo39tEQjgQcW6",
  "key4": "5N9zDyP22zUjzbYSnq2Uau8KGGpgfxTwTKFVGvvJjeTRGzBdGQKmr3yhw6FdhxFp6BNEHPZNthuWiBTth3rYqaVC",
  "key5": "2m1nSeFrxYyzNKBBbsp456eiLHDw7wKz3sD8CZ528SPGqZjohWVvEad1GnrH2h1dgwbdTzV2NsJihc3zjDbhKHoV",
  "key6": "28tSmY2P8qrqvp8q75A6efpw75zhTh8CGSbvH9kkZ9i7xAcfyZn3qvpNh15v9X3zzr83bkiZvSKCdiutN3AvfmVM",
  "key7": "5iL6dkZLt2jFaTxmhbDnFqW7RJzLZRV2gdH4dgN1EwPEZeSrtHbNJWNBHLS34oSxae7MsjWUWvA36qtfUyZs5nee",
  "key8": "3PnfwqtQE9og6wQNkXeq7DeqPikPGAED236HXuhkfDbTghwuNLsJ2zjFBHncWk757zi8mnTvg1Leztemc4H6tTrv",
  "key9": "3oB3uiERnYpaxiNpeEGSDgzuqnf9rBQpFo3TZ5zFtyHnfctndwMTaVsiN8oa2PNZTDcnN5Fm6ExTFfGkuKizKhNp",
  "key10": "HjonWMLpPj5SLSuh8EuB1k4KcE21KMqXc4fMQURNgBfSxWzR9vAPw7TKU7q4uV7RoAP6NHqDGeQNzX1fF9hn92q",
  "key11": "HBNGg2HnbL29dR9AAzoLJQa97ZRcRivL8D3TJdrh4FXiBLsssRb8Z2qugurH7ebBe7yT2rKU33EXFKntX1sBSBL",
  "key12": "UgMHvqhnrCWNjKqt4YifXmc2fNmfNMDSKH8uXL2vutLcULyudY3BENPLprUrJFz9ZTVa9FkQkPk2nuj8tw1SqpE",
  "key13": "27kFYd2Luq2tFYTam1pQV1o3e86nQSd2nuB9ijMboZYweos7b1TLUbfsd45DVwNtj4ZQ2JU2KMyHCt1RjFSZm9tv",
  "key14": "3tP3jLEt13gH8Kqj44Gtb92dZ6zQ49q3oybcVhJz5DbkDWehqjWPnJeo22dqzXwB8a7kuHb6NhthyBuRBUX1FzkR",
  "key15": "2nCUdD8Xx58dtZrwydSH5dEtarLJ6Ni3k3wsiPAbHts2yVucEoACCawnNYJfegegJnSjB5ppzxFrVndvxrGDFPAa",
  "key16": "2PB2SKWwEwgRwFtr7dZCASDqdfcxjMWimgpJBoLGyb1JM2bXTZRmL2zCuzUHUNHEFSFCjBNZANbXP5KpdLYJ2Lhg",
  "key17": "5DYW8yvPVA3pFLaErptBtkmVMHuHWQUDHrbaBgtyxRfBaRuTRFKJyrVuKnjeDvcqoAo9XiNPna3afQTuxERrQ17t",
  "key18": "jyF4km5wTxHSNKSdLzq1QsJYCx8bssaGB4293fgwQ8cUCC6ArfJDpgvcaQjahD1mqGFjDMEAtppGwGU1AjFSEH4",
  "key19": "3DrbGri67AdX9wMTzquFw7VcBU9w5p3JJN24HHXxnEWJnFLJmtyba3HRoghVFkg9mXDUnjDLTQgeg2kebUy54o8o",
  "key20": "tjm2QaADBogoqaEg4m8yfNpR2x29F4fTW1s1CKCDFLycgA9smx4xLapnsrBu1pHLd6FFQi9yt4wSYum3kMvEXgv",
  "key21": "4KqtQAfUdRSatS7k68v7dThjCyGmL2Sz63vi3YsguvdA5pJNqABFERaTofZyxpc2zQuHxVj1aWXivuVtqYwzG2eT",
  "key22": "4zhcV6zN7ZapRrzWWAmAqY9ZgSxbHm1Gi5eECaxE7pihu1P6ZYsRN7EswCFWbNhs4W821heV6YaxUY6h4CE3xXBA",
  "key23": "444tqdt9GAzme7TXvnVdXJfsfVUzvSofKQre4QR1hPUBomjiTfeAMNuyy6biHzh1j79Nx1zNqnp2CVj5JjwgWWwx",
  "key24": "2vXYN7QUwL95h1TyjrZaokAYiixUp9Nyk51mZ73h5Aj2DVxJidYzvm35Fsmn4epncaSsLLWLSorgZsuxSJkfkZVh",
  "key25": "315w65rxsZu1omWQVFKCQnA34TxDwV3EHviEWQvCXm7zAF8ieLLXBWzjTiMbUVzK7iFFTXrZtuyJ9ZHf7Sxx1r87",
  "key26": "D4ijiCRwVdgSSDuhFcdWtuJhHvxqA5X6B5ZfTcyVmVkTvDkCUWUFgMdude8MaMTuEgDRt8J9nXMRVy8PwvzrG6Q",
  "key27": "2eKs68tMqK1fcyjmsnv7nF58TVZZXAhGjMoeTQtdPhxQ3ESTkHUHnDx7yJTNczi1p79w5YGuS2if2B2LgNh9uiJx",
  "key28": "3hbZZEebLC6WctCYc8M6zM6vjwC7fdjGM84jspXzPXJfAoQmGUSZrrbskoEMWNRzLzHcB63tgc5qzpqxpbGmF8y3",
  "key29": "2E1xEBhrAkJFpmojaYgz4xHzjFs5KHCfC928SaMjrfGZBWzTKETTAqwYHZ3ppTeLFuu47HPJCjUWq8WhgYU4DAwq",
  "key30": "5RWkoSWkJsLBNEnpcgQEfhqpPVtH9ZSbHeiM3WiDgK4hfv1CECmRqUABhifnP5sihZAwT8LVaeCCaBLFyP6kXCdc",
  "key31": "fjHgWcCWQ9p39rmp7GfBHKdVFryQ7KsWhJstV8mE4zKaSaZUGP3D7yAeHFUGTWDDnUfrfyfEMUvFJk7jBEe8U2C",
  "key32": "2G9RPKNXKAb8boaUvz8SBT5dLvnZsugjzA6kNMrqXiELM7ipH8AesFKahVsicpX5mJxFAyE4A6hWC8PjtqnvtVXb",
  "key33": "5kFkH5PiY3tyhgcyvntzKSz6Pbr4E19MaPjCvmoHBvr1qaNSNN1Bed4ScjRgRfzw6Xo43XCo475aPx65WBwF6ZfH",
  "key34": "36H4P1urGFwf1dm43sgj6RkkyHXxSvXtMA52TE8GgeUafh5bxx93wKe3otpArBdXDDFmoLBwZLXVKZ4WUybrnPMo",
  "key35": "2C4rgaVQgnDpkd4FZ4bUVtygXizBmbQEvqhF8GjahdpbE1cgkNi4PgRAbwJQWrPYWCTuXnkRpxZkZwNmDfqUoSf9",
  "key36": "2vi3JScKmnwFDgBcMeuFxNS1vazpoDbyHTjrdZTnaBMJfLejTR5XuScaRJowArXfpSMkSc4MjvQwukw5AV241gAP",
  "key37": "5mrQUsbkjgH2QL4jE4raLAoM6BNZ5kekESkWC5MA7LPsonKffq4KJEhp1v6KoTMVjL7zt1eFr4dVCkzCbJvTP3BK"
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
