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
    "2Gq8ZAr5MRUbdz4S3RrNofZfBzzPn11T1Z1AdU3nDT742mzPz5D6J1uYkrHM6ri79gRKJy3xqGQnkeDK9y7TQx15"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "cJNPTqNKCYkMopA7LYZ5c1t6mW4CZgALMyKS22SkVbCUM1XmEgp8UwJd61HQTv6urGmWtzNTiDWFaKKiCww5ZKA",
  "key1": "CrJTZReqm1EhC39t6s7ZXk4Bv4uZoh57HX96GLCGsbpZRj34gp5CmeXyxiRXH4xEUyH9T638YvWs1yfTDydFvm7",
  "key2": "HUJ9d2FSUiwy2Z1JHCyxmG1buWfjhsYcty4c4JARkE7DSxfr1PybkokTsez6YPZFcB9fBVUgzKHzrGQaGRSjAox",
  "key3": "5og1thpoccnEsVA1zAEw1xYkg6xaWBuZziyKJBAVHtJWYhEBYKqZgh28c3buqZ45HL4YdkMoCJD1c7hFasFKmCE2",
  "key4": "mt7QyEkKXWeQtZBX9bSDRyi9AFJBurNJr4Wab5PVXAGL3VhdiBKxFpPhsQxfvroXoTCJGPdRkA4CvwYcvkNgSYw",
  "key5": "5fNRtZDc5fuhZvAqWAe4Ughbbc9V6KskhxEEdxFT19L39qYsokxXPFkKPqUDv9N2s9x11pzcxuKxuPGnSzjRdaq9",
  "key6": "5hPJLLoccLJKectgu6dE6pRH8cL2bC2Yh8JL65PSxDBkQrq9ENEvoS6RAdNk5miUdq1H22ALC3PA9xu8xsKYGdrG",
  "key7": "2YRVm39iYTvRVh8JFtxrDDxqkWmZXhdVibJRxRta1Qcg3bVY25FyoQUGDDK17XQCGpCEqmq72ibY39VpQMCY91Np",
  "key8": "J1zuwGTMLdVA65VTsNBPcg8UKVvZ1t1ueAjDufNkF23f1S61FbLocBLdFjVcKF6SYDygkKwzghh53T9Kzy8Rg6T",
  "key9": "5nkUCvHUnjEkxXsqSQUZssZJSS3jz5dqpTTJr9dPALpRRy5iTqEXo7fZtvBCFQxEWw6dnmEX6KZhWkFJdchgLZtC",
  "key10": "5WbTaLRNr5hohygVbU7gjSiZnEWMkwiAspaoaFSLVgiUdXDba5oiq42gQGmyczAPkGH8RbgwiALnuua86cJ7Haor",
  "key11": "2ZjHxSvmtAuVHMYguo9PKsE8yUk5jeEgyk7wocJXQug1efVtjPQbYGRBYuYgGVSYcKCxeCMiBBbAkjm958A88hPB",
  "key12": "UnQSXfzzUYExGaB5h5BA9Mf2nD7yju9CqoaCwW2w2hqtNndKuBuAYhyJ5gB99jnc1yVHBqB84x7SofSjEJ5Pk1N",
  "key13": "4ehLDeR4LrbuHFYWcvuVcLQ55cm61cpasRrHpnQtzyszkkv2m6mARU9vjz9aECvCGKF1wHzsfMGDzNR7xKpcmH3N",
  "key14": "3jLBdWbSw49mGpH7rYULmuBNZx9H7xtF7MPqBhmP5fEBsYFK85jBMhVp9v9ZkqXsGrLooTEh5uXhz8MSFD2Ab5og",
  "key15": "4U7sxXUNcwcuBQNBtyv25WiZZPjtW2szA2hBNkvzh35zUn5E6bovFvDE23bNDc3mYQBLLjFiijT7X83Hf1D9XC9Z",
  "key16": "3W6ro22rvTxpa34keo7iYAB6qq5JivzEA3hEckXx1x9X532mzYafTE81HmBLc32UG3HbNB6uFmy7ghQd8oBbXw5D",
  "key17": "3zq5ZcYfXhKTGudM1Lh2V4TLF9guK44hD5No5W6vjeiLRiGmrYyKBfSHVqWxMYEGgJuiVUgAhDaxKZ3tqzJCoiax",
  "key18": "53nVvYLayTF2yfvDeCR1pfwdBCGoEbkvwKBp51ewZqV8NNR9EtFShH7zKSXKtSHMfQBdmHg3eKHMTTSbWy219e4g",
  "key19": "24b99e581Lu68khnCeYxHTAUqhVyqbTdTNggvhz7bkxAuaQFLvDBHQpzDoeXYVRSaXSjLvw1UR4ziDtwk6r1TS1S",
  "key20": "CkJo5WLpwWF2JAJZmP7enbdNiKjkwKUaGZrnCwwtzHCLuJW421d6guAHMCkafPfVQxb8xcjyMPt8N2dJ6etWtpE",
  "key21": "TdcsujSPxsB3JrFf8XC1axiUvopMEx8vtG8YVGkiFnUKMTA2GZeqEAs6A9R9q6gymNy3oCBxK3J1T8GdsBrXemr",
  "key22": "21rMeFoiG8rvVWBGvxKXQLLcVjcP5BHzADqKhVVq1XYQoi6eMrsgYbai6Ad4CR5HBpdYnoCdUjaML2wZeB3HptyA",
  "key23": "2cMziPLU2DuU7NT9TksDbnE7CwV6uh6v7poe24kXvBw8mUnqaw9aNzmbNkvE1Q5mBLxZ455Z3HPibkCaNiYXpuFv",
  "key24": "2d2BvhqrrKR4MjnYFn4kVnifJnBpQ2Bmp8BUxVr7tQRFFhnX2qdLt9dEu7qFsjFbjGpdA5n434mHzhCjCjdPaJah",
  "key25": "4JzTiE7wFJoCFDQVJVwBX218tHjp9SRwHdkqp2vMCqVjBBB83qcVLWL9uDHcQo3AeFgGRm8Qed577KFy2E2Za4LB",
  "key26": "5vxoY1PNHYuqerhbeZWGipz8ZXtxHgBjtoP31sEiSZjSC6TECvxsQFZf9SdujvCewojM6Z9rGYqu2xvzdA5nKpfq",
  "key27": "4wg48xSkrWbfgNPrWAzBmfDr5gFj43YtnMZ232mB9WnG8QWDtEZYit4PXkNKZT6q4MR1Mn126T9MMLo5tR3BKpL4",
  "key28": "3kzawJoueFzoyQAPzRc4DRfJz4p2BbhQx9sbLEmX9Qit7i3D52bdDT8ZKf444w34QA5sLzdfrNdZogJ12tp8FPD",
  "key29": "3Gnzi4wdXuJdn8rnAVtTxtMJegJY9A5tzydbavFMpmC8S64Upir8W8q6fPCLt8tiqSKwycL1YZzBi7D2C8tJ2C6k",
  "key30": "3sdPPp8pAncoXVRKgjubyvRgU7i4G1uBVwZ39PKyLhj6LiWGWff5WwvwDmSWXjo3hfBhwBPbD7DFeY44AyS4W3r3",
  "key31": "4NzZ962EDmWWcdUVQ8xzgAJaptuayYh3nGsxVL8dctdANwjgPWHrMn6p2LXd7t885nRoo4AaZzt7x2ZrYMpN2jTN",
  "key32": "GpqghoQRSoaXk79Jrpk72oicovZpTzLFo2JGSYa4tAuPcbS5yCQ8f6dTgH3ridSpqDUwswQ3hKUerLztrmiApew",
  "key33": "42aZ4DAP13Cb1y1bsj2qgZqtfCTKnejYmjFe6iduQwMjbEG2HyUaQS2GJVrXwwd1yFri8MW3zdJw3f68tEQKCSvW",
  "key34": "3bLWRmHWNdyHMzCrYqYddXcDEDSoaMu2h1ZXktEyGb49NnftGd6raNcWewbKceC5MQwaoBRzmpcZZ42TMx53JHS1",
  "key35": "5vtERewfzN53ffro2zcEedmqkC7LspqEu3LWz6xgC28SUFRwbQtZ2Le3f2nDMfuRWLYmsvQmHC29cUCUBUtet3ed",
  "key36": "3JxDq79E5wJLzpQidBbfNrBRUZarcooh77wZY1TXhQCvZtWWuLNcfQDYdrar61PzRMde8fwzX8w6KFseWuwsipVu",
  "key37": "4qhiwbF1jYvqPBYKHRR2W6rA2K9xmSYXrg3nXVLCgM51sN6VmkgYXrMVSNQEaSDhfEpn6Gf8ggC9kkCmA6RX9E7u",
  "key38": "SzJzBtH7k3oW5gewhDNpwSjy97QnavWWBF6sewMQr1GiypqFRn4pWZNkDCDNHDHyLFmZRp9UJk2xrnUhk8YJaqv",
  "key39": "3UFahQJ6Ctfg8zUqieVndhcKduwHSHvpaoBun1DnAkjxsffGhdFHh8BA2pZMp876BpkykR5WwjLhpzuy1XQdiXPZ",
  "key40": "4rRkbANTRVpupeFqBmmtHwu13xY38v1HwZWqhn17rgGQn76H6BD3DxX3tRPH2nzf9cwzbTV96GsnGC4yzgCFVNFx",
  "key41": "5PapDx66FQG9h5Q2VqdrEFQccJx7yVJfMQs8QdpDsWoZbPbfuNRM3XisjGgpHAd43k7rDkykh4kSwnVA7mJdbKNk",
  "key42": "2nhA8PLf97d6hMSeQdigivX6mL41QVcLPZpz5Cw3zTNZqLsrwj6i6QzQwqWBLmQcjtGjHgMvAidpMoYh3U68DHSu"
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
