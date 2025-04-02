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
    "4pFTcynQKy1gxoqumy53xbh245y2kPBSMAGWbq3ux1ZQrWSrobwg4ypAYyvkVeGtgMusjW7Ft1G3k77yy8Nrws2D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5kQyhrXfafdtYMHLmTUsUGGcnNpFTucz77e86YtfjQGL1omVdh2hLbYk2wCYsyh3feLxpB3AZKpPgbk5x5Cvsb7v",
  "key1": "3eLGhgjbtU6x77FwxQk1T7a36sxQaKm7SLEUyjTKsoRBMcQUK7HevxuDQpmtJTtSgsw6BjAU9cc7u2oahevaxqTV",
  "key2": "4VGQoA6YhoGDgJWTZ5EVkeMRFE7b4BjRwGNyzezZfibGaboYokHrTJKf6QcePLdqXYdBP4XD5QEWt8zAed1fUByL",
  "key3": "2LgM1LzsXig2UncX9cbtk5wcUhoZ583dQzeTVSRE9zxjKZRoWaHgGAbyc3fqYqQu2N5FRreJFpmcKS9xiDcGuhN8",
  "key4": "3qdbbtyBbWcCJnoWyC9WwfXUFQPmgbCFVKu6snri7fPwujG6vrDtRzy27FyVEiJc6HtU1QNdSYH86GaSMDFc7Vg3",
  "key5": "5N5fqS1SH7X6Nz2svcncwd2JjmWSGqjuFQ2aQyVKqgFfWjPVbQH33wUkLbfHKGGma7pLeeQUTvTSfhx2hoq7tAq",
  "key6": "5bZxXSmE5DaHXdSFd7t7ddWRTXGcz1ED2r1jNLHLH6iVeMJh8nW9aj12VDm27y8jqQg3Djh7NNgCmU1Cn7zDd68f",
  "key7": "5CK9TkcompBEmFnXHhAozMHskKh1hyZTJ6sC5hfjWzQiR5xC1jC2tjXpcxb7Zhj7CKJh9TERHnhw5AYdHzvSbnu9",
  "key8": "56WQFjHhesCxNgFLfVG93TjBZTBPe5QTKdAc9J3R3epfG951h317nzKxvw1E8Nxo5TBMiSPyWUWgnZ5KARQUNh4S",
  "key9": "Y6gy587iV6iNxFT2sEtCFEgPLfzNhLyZgNzxheQeoMNJYUmDmmxfAZ3qKRAcrYPYWAYwCBX6uvhb3tTmQZ5CAQo",
  "key10": "5m4y7P3CzNeoYJCwn4gTnYmpeaxNtW2VhxB6WmowucNKfD8UCx2s1SQx7Uoj8dMYiSi18D7cucxvhWQPez6kAYqn",
  "key11": "2kv1TwGKtSejaTHyFf9Fhgb7WUv7jcsy3dmKEdpo8UY1Jh21pkgY65zRfGQ88YnEf82xNNKtiMxrJfYhRPHX1PJg",
  "key12": "3j9FJnJS1y1v96ULwiAvkap37W6KW3P6ExXnEAP9KyDkUSN4g53Q8vHqynT4P1LmTE9xNRr2p95J5dfSDsgvvnHU",
  "key13": "59KbKMd24amdXeNnsWQFhi6FH4wg23nasMuErqygN9KzNESUHa9CrapZmRrJgzU6sMjbtPjHyuWBtyH476XYemYq",
  "key14": "2qAj39XDv2RY1Zne6zUAZ6vf83BDuRziQyn4srnqsiTXnbHcaQVGSw5ypJ5qi2ZLnovPq5tEa9YBSqwzg75Rj6Tr",
  "key15": "3rTBGvcKb2eJwzvb3J2TwnjBKoAN5fW8kdMhLvQ9iSZYck2epWaXmLCjVgR1gtRurZkuz3wLbnxdFjxbghxALz3v",
  "key16": "Nua832uuRECSvPntM23W1soPDVx7p3y8MLWqvFdwx2ggzy45oG6HQcZw2eakafyyk1ExjwiTQ77TVjFxEXHgHvc",
  "key17": "5pm1NCxKtkLKbPBsbzH441J6pjyNu2jpnYFXb8UwCc4QhhgMbUCZpdF4hu1BXQJ23Tui14K2PRqmKE4v2rvTuJxv",
  "key18": "daFf2Gqe1CPsRsg9UQcwVuEBG3Qgq7pJgR7jt6tbXVsmrmnVFqoRSRUH1hjmmYJVTe2C8KZByqKXXw8wHkVKue7",
  "key19": "Th5LL1Aq85RaX8CRCLwoBxWuuJk6dnvHNpMDKw91nnNuZVLXFRPedpQKJSFRVtic11khavfS5XY23kVuQZeZCGa",
  "key20": "5W9UXR2CZc3XtRZPNhhXWgKWtbb1xFhzGC6sda14kBJAAz6KZmNcQK78uWjbEgTGH9Ko67FGydqs9SD7sSQ1Fcdk",
  "key21": "qTqXjA5f4QanxKThGsCZb8pcXeZjJ5RfftXgDWv3pztdbmJDXmm5x1HdWde9PhNrkmroh7pdaZVatdf8QrFpp79",
  "key22": "2CAWY34EvPqs7cRh57WqkV7ukZBJgegvvwTzW2GiYBfysTCgvHmiYcicwya3AbPbUAqhURwcV9baS2q8WNsFCDXM",
  "key23": "2sGcdKPYXFYik9Tzs4TMFTfMAUoPzdVc5Bs6K2syjcrCiEByGFfD1rhqB52FdMGHYe212GaXxLyMwxkbrSugm73c",
  "key24": "5iZS3zmMEaqp3T3Gxnin3exiQju6EwvrfypPTWm2RLPHT7muxmoWYvJpyih3TRroVDNgt9RvShsecx1YZ1hiBD3J",
  "key25": "4WyJKzqPwyFDJmRTvXwFcDesFXeptsJdaSyFdiQUoLQa3kURLCmCL6UjAQCSjyZR1LKZtTWr8BUn2BE64eKTKfF3",
  "key26": "3LM2ooSSbPF9vjqTZKD2UAa8shdevZaZpERQK3wfvdUgnVWT11mEbVG8sUYLntrTqD3TSqY1wuEWPqVR8nEVijnD",
  "key27": "5c8HBsQYyYN5zLzCAvpHB1RJZByovEhVEDXPdzYaHGTg5j1XaKFK5MDDoWmzp472EEtqDmnnXnfJXhPHSzLdNVaA",
  "key28": "oG3NH8pq5SDGCmqFdXjA4kuNqNQuDsngBi6hM5uZkghes2Pq6jHpRCoNxZiwt8ki4JeQFTUeH5vyus3uR3RSF4U",
  "key29": "2XFTw43GXkMXSnKk6Da6CHJPDVXFYLzc9jbJ3kDp2xBCFizj63GL4aosHcBNi5AKeMMCmaF8b74TwSusTsQ1dpS4",
  "key30": "3qb6dFEQnRGLVBxXbncZiVbwiMKu1kao1YivbVN9uPtPF1dxG5vYu4oWPaZtpK6DvFLduwB5DBTJgUvprs7FjpGE",
  "key31": "2VV5FH7wvetkaDGaC8Nqfr1xp5zVAQe2TUZBdgtF5aTfkYbbQndcDbkTrQzPeJHxdwFmrNmjtmexrGQRRxTRKjfa",
  "key32": "32jmFX35G7SuPXBtbsBpn1Xse8p2JDCumzBRhFAJ32o8rLwc84JBGs5xvTioJN5YM9Qo2cwo4SbEYFfdZfx63Bsm",
  "key33": "4TFButFz6ARUZq1PFcRB585ZcgxFMAMgXprcmHLBAhon4PzADA5Pd9MMCzWRBKVmCjTtDKQjnbjQEfNkJU95F4nX",
  "key34": "5sttwgi57cRE9SDGDgfnvHabgPLQ7ZvxXYA2EDj5Jgce3QsEnCPTBsp3AqW6hhguw8Ns5z9jcmPbqyCCcxTsrfTs",
  "key35": "2LizgniZR2p2At1hMbQYEWapYEj4WBTkPfwJJWj7fEwGYZi1WqDVTGZc3xUqUaD3TKLW426vmAdgaUavGemY9X36",
  "key36": "EWsgN3zySBSYjVEuAn3PPbeiYRdiWu1CJsYvjfnkB9aruWoX4aiyzjR488Xxf8FC9jPTTgmfJYhk6vg6M3RPMw6",
  "key37": "4hh9WmhzqFkXc95xGK62HExiLNZPNLSyftv7mjTNxosc6LjFatbFeRRAeUQZrTWuHjytmjBuAZiuCSVsAces9BYC",
  "key38": "tbb9WbXWSoxoPUNa623KhuQyNiw7mJQX4qzE4G4VxxnTLWUUuqFvNbrdHjPZnaFCKUM9KMYsJNYodTWVuZUJorc",
  "key39": "xudRi7J5RKz1sFsetJhXcwuiQ4jHxwyeUYXEybPUz11ZVDhmfES4xqWRRZqZgWgF29192mJmazg2foqoGgYimxW"
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
