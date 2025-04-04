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
    "2Vto3sorA9r38rFUQqH9dT55cLVLgi1rPMjBFXFZ91cjJ9p8uuzFMmGfpzFNBFPzes22DLaPN9ncseRy6cwHjriC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ZeFjUxLPU7hVrEYhNGkw1WDWogfKn1uqR1vsaNJALAMSoG6A3aX6XBqhgWpbCKc7eXtUdYeUaQRY6jyH2ZSjVdT",
  "key1": "64Bg5Ctiqyq5ADiHJDgAzhEwJXTz77HbXRFCYK8VMVMjVq2Ewukxu5gckRVjnT2BuvNsSHgSvf4YicHcunihuz1D",
  "key2": "25xmAuXhs72UAV37trSEdaNUYP7z5puFhx9Kd3XaLU89tNgTKXWDBmoVWauE9iGyFSujDGtzzxyyPiFGPMmsAV5w",
  "key3": "4daArb5WosrVtERoQkCXATSvSa4CiJzKB6DYzHiLkjRDC6GyyzP69HsonLjgL32bo98B7KQL9yfYpBUAE1DyGPc1",
  "key4": "3cuQXvnPZNEJ5DuBrY8qfVXomY8rEebsFD4hoFxwnmWQGwRsX48LuSeA9g4p1GrsATahTJfQMG1Emc7VxCQDvYEe",
  "key5": "5xKm7nsNuwNHfHUCU2mHSCTaM65SfYsPH42rnZ1AthjgvwNRjUR8mxGTr1jD31uDFmoUyWoPWYpTkNkv7e8dMtDY",
  "key6": "53WvDvw8gbj3AuSWySv7yUuxFWNKTPGop5VGJ1fGRsRNZLnF6WrzQYv5CMnA9VZUFDx9makoz2pxzZDtxcmNTWaA",
  "key7": "4wkp8EyGBhpihuhKYoRaSExW5onZUYmz7CJ4u69N38YfWqoNqeu8QBuRqHCkbZjYnbkFcskUZbinSwuAye3v3uGS",
  "key8": "8XjAjiHT4iuDhsfJtnZC13J8NakMSYVPtVx51cxtBoZko4ZANHhzKCPzCa96vH1hRAF6Z7EbemZQp1WYSyuKhBW",
  "key9": "2iPRxFDvzqDvaiVB6uhjLpZmB3c4Rgz7GVQE32PCAkVqVZ9zaBFbAEPvGEr6sNrQ4XudFG2FeTNUDtZx7NyfRCiY",
  "key10": "495mqeaM3ALWgvvw8RDHe5ouafft92wAwVrNs5n45Vcp7j7scjGN9HNKFxUjEyCAYoJD5YtVw9xVE4pryLmKL3Vj",
  "key11": "53aV9DUgR92krkcRFKvP6CoqKnEcZPNPaxmDaa1HRLCWifgndomv52axDkMYgrF1AzXzvGJMfdQBCJtqFQgFYh1s",
  "key12": "5i68XKUVM1DapFMjRZM93hvoNGGQvzwBwFvqUTsi3vZs1nWUaB757waKtdx8upd61KTfCuDwHmbywZfnBqoUMgGe",
  "key13": "42iUtwJpD2MzPJGQoLgXV8hci2TqeLSzutr1q5tBaPeWSiMaVymx8UiJDnfcoomSC1LH7V9cSV1qB33R1ajdL4rd",
  "key14": "4ULP5Fzn9bAubJp6g2SiNfNqShRYbo91S7TXhwWsazpFpnRdfg2URekDvnBXhrqQJAZY1EkXtAMJhp6qKGwECYP8",
  "key15": "e2ba7oSSG8vwn2cfdX2t5VFkNidGHvGFojf97K4NoVP4Z5jMG5p3ZXSaLzhq4KXguUacvnsagXqJJADGi5s8bZL",
  "key16": "3EXcLxDvcN591wUT2hNh6waM1aeR76Gm3byge1zbHL3oKKRDLpr15ckREbHAq136Uf1wNTQdLRBfzsub36Jzrtif",
  "key17": "2x6GGmGY4qob8hErBTeCV9k2FEPSz6ZmMR1thasepbNrYFb4YyV12zLC8pe1f1xpJkQY8LpHP9ux1gDvbH36qptz",
  "key18": "G5Bzdw2d5N9e8rFuD9sE6yGSJEQKBotatDZQSqvzFMq2NxMQ84ajTNdhzY29yD6jzPmXHEjkSxUdtqqFW2NJGUa",
  "key19": "2Nj1pPhS3ubstf1VV4tkBSe8QUAm3c8Ehc5TmBDGixsSAsqd4rADceqYqzAhAFeeSWn4juzjwKt57PuKtpYnKWRK",
  "key20": "348df75TCPneTbPotBLfBo37w672fVhVuVLNwAVcACzYfHEoX2RtB7eh74BYCwen4GVEHxUfRfYG9xrQrSan7mg7",
  "key21": "uQF49dfcQcMRyy3VBp9vGL1mmGQ9frLNHiNHnAcqf1HPoTfgmskbkZk2VPZM545M73ckFjCpE3Tycpy95i2X7zy",
  "key22": "4g9o5M91cjbbbiLFZf49p4LJsFC834PpCko3s9oHj1BW9PkDGzTEZ5399Y6jsRTJ6abBQc2KJqnNnDAkm3opKc6g",
  "key23": "5y8KsFgZpoCHVA7t2UgJcq6HknpDUTyd8vUNaAfScfa5C5VLcQ7Wpi8kraTCeGZsFF5k4CJQTKtMVVocSWufoFVK",
  "key24": "5boRwYn4tsF2ZAAQ1AU4feBYwLxms8q5frj1petMAyrGeAECsqCUeYh176mSuPDEGsdFrZYyo3T6Dm1gw7Hq8EXu",
  "key25": "5v5rSojcVmbp1axYrBAXfESkRdfiwwRUh189VDX1uDHbtUq2dmxEyGembUXQu9kgfaJoWxhkC183ADio3aHTv16m",
  "key26": "5uWhDbkLencF6wmfbd8jRmB5nQ4Hd7MQt4MD525QeDY7i4TpKedLJz2nHXCQFXY81VSKLmhG5wgZfDXBCSuqWGuf"
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
