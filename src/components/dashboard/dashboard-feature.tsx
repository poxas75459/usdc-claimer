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
    "2obTqbmn4G4DzrLDKQPRGQ3jXjLAWDVZ1ZkrAm9PAGtMBUzNyX52XKe2Dhtfvsgg6LrYcShTC2svAsy5HcdYDGVR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "GS5SgBLQEq7zgxrjEsnWmCXoXiWkMotFrL9rxStyutqrCp1SdYWM7ioL9hugwMPZBkg4kMwQsnRFdBWrTFLNRhS",
  "key1": "4L7PNs4tBoZtGx4KH9KpvKSwLCTPKXf5JRbB56UuqJ8knQTr1PfT5MLtX46QY95LnVx1TSxoKTDcWvc8LMmabTBM",
  "key2": "vrKoJhYaoWbEzFnMTNyhe2MnRcGHqmn1qBZSXBWD5fRFifBidUe2yX8QFhi5PwbNbDWTbuQHKFaSUbh2EK8RM24",
  "key3": "3T95QujeG3Y8NC1czzxqT86AAiDsfYtBvBhWNEGrc2V8n7VdB6hKbpsgRTSpRh3oxLVqvrv9x6NCQ22UbFVMYz8N",
  "key4": "2EZo3zYXMMwv9ZLidEGAxWYLuGDRSuS5JwJSupbRDrTJSFtsRtRGGUfbAJgUTuy7ypnTc21pG8cyeF7779umvzwN",
  "key5": "2saJZf3jV5qyLJu3c4z9dHnUWJyswyp368nfQ9YS5ekZGjZ7qZeRHwN1gghJhk2GXfG6D6bSQmqSGXtYEYpv9kQy",
  "key6": "3nNtdtRQAu7y6rcQNViYks7L1dvTfSnQCKeWxZvRRxYhjJcZ23oVJv28PjVeHyPzaUdMHZ9jd2fgQ5BaJnabN8wJ",
  "key7": "5WYuRpcQ2CjLmNzN9t18DGjoehWLgmAz8fcg6sya2EXvwHMDgaxKGfUbwtLbjzsVPmomKnT2twsFHgqjFMEBFj38",
  "key8": "4vhC3pbuJRNE6qw5THg65GsiMFt2rvQKtvUqhh9Whv85tzyE7WMC68hi1LQcWmdV63proN5kL6GVmkdzcBzA1Fz1",
  "key9": "2d4YLo8GzEe5npXmh5P7SVJSsUTazxSbzxcyotXXPmXo5MxqdY6WEmx7HnYbQ7EcqF77MhipWtKRt8i4L1GasN7P",
  "key10": "5CuZSzhSTR3r8UsK2MaybHg7nhdbWeV1U9Dizf5n594mXxYabFmr28dQ335jx3Go6VrpSeGR5rokGqeX23vK5RA7",
  "key11": "22RW6RM5UNDYePnXWru9TCvP4dy2ao6KaARRRoDc5VMQn1YNT6ndmbkUzWmDjuSxxURCiy5uExRhg3Q9aZapfSC4",
  "key12": "YefE7vzyrpMCVfbDySS9vWKZwk19yHWTDQV9RJyFVkbFVHnCT1mohhVTbJVkwL6QqwfMPPDpVjhR61xtN4xhdc1",
  "key13": "5EeceFmZoisX35jKeDZD91A6MkJqT979jEs9uMxkUbtb7rUNeJF6XgDisXR8Fc5hKgaqdB3Jjy5d55BvYoh3FZ9r",
  "key14": "5ZmYVeshJNpuyPT1idbTXRrrHJEnUhMsW6H9Nisw4cAzQcLKsUYKsBtqkApAyCC9tDZJMJQF17HZCkAisv8hqhnX",
  "key15": "SHfHdrTFdSnvj8gYBdgbHx1VymXxDcVHmu4dMYJ5Xh8RqppVdKZ47RRvJibDMqQHb88fgKXeSZpxYwhE8LkFSqY",
  "key16": "5Hj2oHwT3CkoaTnvSTwgPcRdLifmrU1DTuRckjqv5i4n4JXa27BAyRA7n4tFMrpH3Dx85FGkyyHNbomQR5yWqvGX",
  "key17": "43YKqVUw4FXLZAHKt2PpaNqxsvavHreTsqCJQreK5eNzdMKuD48j1VPpmWW222GSEeZGqyRoJaEdzh6Y4b2Edm3j",
  "key18": "5Lq9tPGGEyto4DLq18vcxyoZCecuFvJkDUeGfH2dfnNSFRBJA6MdnsFHtPLakmPQFa4YYukrf6XCjYMiWCQ3Cav8",
  "key19": "WPHZAiqTouBT3nZpXkD73msFhZs1XCTEYGtCwQrtzfcLvg1QBFbJon6okzR7HQCdcR6mX4M2ZP5DSPb7DS9samB",
  "key20": "MznKjQceU59NDwSGqQj6SWRrz12euu3D2vmsZh4t8fBEw6qPdx1qok1wpZEikZAGx4suhVtFGLSivyFPCscWkhu",
  "key21": "351PbC7dQro7vnR9Un1VruLUWNtd8H51ipbf7whvxKhGyoNaPcnRw8kScUvdBRdJbpu7xkCQnDLoPx1XYwCsBNjk",
  "key22": "4aPvQYaTp1HATuSYyp1eSLwL4jy2Z4au11YUD4JnRNRJ1UZ5wG9hWJ2ivJMGLpXoBqjBCbAZgVyaR6bRh1psBCez",
  "key23": "3uZsjokQrhpNHHzGeXDgH9LVp67ZdjdGyiHhnEL5NyqyPnn128RBz3YVYYgGmwEVPfXEHeVf98nLTsPUyz8SqghZ",
  "key24": "5NrzG9tRLewDwXcNoQyyd5kkzfZCHwcfV6aG3BqjfF4NAGXCPuTeiqJHSSi3h7LQmXcFNm39JQR3HeKZtqJ29de8",
  "key25": "3ZyePCUn61aXM1yNWMqXk41VVhvFDLj3DvJHTwkH6dXiRw6XtWDeXr3MRZSuSG76sYDjCnbrVdTtfd3gHYucZeuu",
  "key26": "4NpCV5CH8wxw7Bcy7Cdtuxgui6HuANUFwRZGWL3tFPHPTgdTasoaj4FJU4ns91kkaMBJmxBc9je6qTJLoC2nKjFQ",
  "key27": "5DrbwaYhF8TswzjsmtoftkxTgyyenoWhUexCF472KSvBczAKs8fQs2sp6ukC8X7p717h3R45zaomwb1sgRKhjkq7",
  "key28": "4J4SfyevnNnkKD1kuTXf11Nibpsos7VgmPUf6esXSJHzPsiwxMjPi6SrT2QvvhYy7JbW5WfRnRB4PQM2k8EwQnVF",
  "key29": "2Jirxj5sYvgLiABmhLoFFxRe8qxG5ae9kdpkYjNBsGHxbnx28nNQNCRUM6c5csGVyp5FdGAaDXeLcAuWPs1CzRG3",
  "key30": "4MZhJYFKbgnotDaxGNhu2H16DhbBSf7PJyiSWMFoPkVyRhz1eRTFQFrEhdgiN6uKTh5cMh1bZEChTNMaKe5rjKJy",
  "key31": "3wXf8DWXY5vEK58PQeLUuPzWEWroaBf5yVUsEJKxdcC8CwNA1Gx7wiZoA9KDKzmSZxdsgc7F13FGScgETbWWExyd",
  "key32": "2kBEaeXHk1oqC9eptaUWUZDYqi94BEeBmVMJg3zBRnRnRzQdNxBqBgkgPSik3W21dGYwRAFwsiCbwJFPB262PkDV"
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
