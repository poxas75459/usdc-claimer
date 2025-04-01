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
    "MvyfwbYCyMTvWPNLZSpUyCwyuRYYsbW9TGb2eHyARxRn6hwQCGCKg4957nRfLhhCyieKuLv5RdhZvz31DJwp94j"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5oNNzBkktr8mdVPgS9nNAfGWT62JPqbthPHrpyoPV49U44zHvZeB9adkhQdz1p1cittpDm7QQLQ1MSpczickQyY",
  "key1": "8oF25hUcHxrpEQeo4jrSgGUQN4AvrdHmP92SjWfQV7SdaycQ3st8rTTMwdGiStXdnGsqxqY2VCPdPZw4Xtce9aB",
  "key2": "JnNSXTessfWbCLkSPPVAAzqHQPuVKjrDFyqyET3NCKfzTX14ZpG12MuHLBzv4vSLBDJ73SaxyoVAAHbscWSUXFX",
  "key3": "5WJAKL5mfpFojxJqjo2FsFNRxQSBN5buj4B9uRiGRSyEzuSQbbmYL1Y81d1n23Nh7pzEJ4sNq8yH47UtJhwbjGzW",
  "key4": "2D3rgfEcqFHFYXduQLVWDNyJEezVTCWzSVCZcJyyoHkd8gtVKfspNPVWZsejax7BfXjTKE1Vag9XRXDzueTb6D2H",
  "key5": "4uqQ9Bg2H8ePasxLE2hq7bT14EesPShTehCHYAHay5V5uag6EeASQ1M3sE85wP5M8TUYQ4jTt7vUaD73BHpNDsj5",
  "key6": "McmrCRWvAWC2pSWzziQrByeSdiAfrivXQGXDhPxwX4QRyLhfBa9aYT3HAEmTb1WtJSJRQYNu2Up5emfBBVuFdA5",
  "key7": "515nj2oN4DMmGu8Qst55x9TnRWKtCWbpUyBkHrmntSpDhL1t941f12XbEMQnvUdPKQv4gY42U9fS31MkctWnQLoz",
  "key8": "xr3ajBLfhj62U9CLQnLtqhxqTUVYQZsvKwn4wzY4XBU7gqXtAr2pupq6izfJFh17X5T5v3CV6M5u9JKWRgkBkB7",
  "key9": "5iKC9BX9HVk1DEpsbDdV2vWyqmXrf6CXs4vm4SAaSFvqqC6ZYvSv5MpWGXGagsef5Uqio7RmNPafj5waMuGrgFj9",
  "key10": "BPwk53R2XTS7rz7fgWctfE8KGMC9xJNNNh67Z8bCpKNfW86233nqxXZJLkD8ZXShqQDT4j4nt9JGvasMpQitgkm",
  "key11": "Lh78saw6MM8xYmRSg17aHGnsVxpXxiifeaqpwV22CU3cbrdZ2Rr2myf3id2jbL2rm6C8sFQsEYJ8zvrhHCXdGci",
  "key12": "3Zi6jDKwJqxbaBCiUHNZAV5XUnNnf8TiYDYzdEM5FwEidXWXTfrYGSLXbZS96orCgBUxhx1vjUBKLiuHbA9XnAJc",
  "key13": "5agetA9dq1ZPQwz4E5w4oHhZ64FqaUSunG37pe7iqfaLuK8RH7dWanZanGjkb5FuB74V6NKpViDmdGEW17bDjfc1",
  "key14": "5U5WsKTrdx8jCqJM2vWQoeo7P7EWYcpJw6Fjzr5zAYAfQBoPf2k8AFBuyna4juHU4nptv4xvBKFqkgNW59iBxmUu",
  "key15": "5wX4oanBE1rtutJTs78u9fm5Po5Njqy15c6mP51WWWUgZmAw2RsPy46UrPkTeW2YmBguubn1nTjuqX5AzAzuE6u6",
  "key16": "3ySLcyFarkFfXWD4SjifutMxEfNKGBYuTUmH3jh4W1pKpvd2hax7B3Jtcke4cZJ61Kgm93PLqyXzCzgf7zjgMVP2",
  "key17": "2PPzi8X5yHdrNwD28abtEQ1D8G7E8y7SWWbtESCH3NS4LCBqEG1p3LAoMpB1iZ7Eb6nhnt3Qtp5ZDXkrmHEgZFn5",
  "key18": "4AQeG1u3SghGP1dHYgbVzUXm9cs6sdV9aSzFm2s2GGpeNHToFqx4xzkUowJQUiL9uHsjvTE3f3GHyPrei6cM2xDy",
  "key19": "6c4M6cEzHeRKuGFqheihHoopKVAJUkaDe9Q6jA4nJpb8XSxLeWHHgBTahUQQ2nyE8Hbcs43BHSKge4R5dvA1Fch",
  "key20": "2sFyJYanXKLmCQBh2SaFgxustsyq4KkQZKDNXJ4zvQESLC88HAKjynJk5y7yq2LZeabRY5iBFTxJaJ3tZCBuE9Do",
  "key21": "2MT9KFrSEiySFTKVwspXsa3VEFdePMdWSnwvU2ghZs9m6NGU31wTben9399JNuNEZDZ3C2n5B9i32ELY5iKh7SjJ",
  "key22": "5J5fkWRapkEKPsVYNoCSxVNmQHYC4s614zcdgonLqbsFdbtpT91wNNDd3wWwt4ukqMncqcmftLS5sSTv4ovpCbjG",
  "key23": "4tZJFQDEYDRUruignAJZ43EgazorCUVkDUVwKjmS5UHwPjgRy8mFQ8xiQK1Uceypa5Wh6JrHFPiEmjbaQLBHbz9Q",
  "key24": "28VSpX1KfmT1PH6oMDoKVvkRUw2sW49PbqCd462ah2Ab43o1ZFWkRnxXJwmsdvh9h8Z4o4dknxjxobkugJDiupgg",
  "key25": "4tMPKC2xmDJPhESWEuueFK9e2PueGk7FXiDiDfw97Feqz5eKzfWv8yFE9qh7j7KqN3vUgCcdxkeZndQXqHEmPQPX",
  "key26": "5TgEsN6CWDJSB8UioF6X5z8Z5J1ocwDZXtwd3kVZ81z4PjmF8PMLpgTdkugQoFwqw5S1Jy174a77qBk2XfuzemSA"
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
