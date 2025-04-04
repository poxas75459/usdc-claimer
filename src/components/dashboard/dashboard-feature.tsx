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
    "33Uqz7btHmmP9mkpk6V91NXzLrfD7DGAauTok9mMPTJrppsgHhQxJgmyiY4xATeVDduDBhvqsxAmgrCUcsY8D1UY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4JEexs2V5PydaYfhRhrm1CfP9YYu1FDxNw9kvAecvm9s6XbhWftPEjC2sLKiHZfk6rSmoW8ACAGNW2oZD6K6Ee27",
  "key1": "5TK58dakDQ24KA7ZyjGeEk1QgyVoRRabUqmeK6JVRouVAeQATs5ewQsorqwnZENoBKmXSYZzgB9LtiEBkMnJZ2HH",
  "key2": "sM3EGZ2Z1AGx74j9cm3XCbp1YGENcaMydzgVRuJsxUfayLyGbL9EtV2hb6bPqMyyhvLHH9mRGFpx7hsnzoyJBjC",
  "key3": "4fCP576HP8Z5i4eVUkEpnsXzEcS7Xsg6tm9BZMuWGGvFv2uAuqiBVYP8pecBJN6PhxhjNePLxrMZ9Njba2QKQvMk",
  "key4": "3rKZj6cTHyAj4CaGcw9zRwu9qfQoAWAGp6gBqwGLNZi5cYWnBW7MdqyDV6AHdMJK28nMMDRqm4ckpsV3xNQg9n2x",
  "key5": "7NJ1zwk8YyQNYeEZQRWTFLyRnUnRj9w2EJ41WCs6TrPnjX77nQZjeC3zrzaLU5wKaZiZA5snknzGymoZbnPSfw7",
  "key6": "8Vj1ifRmLokFgaq5unEPoEjGQbVHT5aczSU1Zny8CFLvFGiPjiumFJNAwTA3veTtmkZyLUu5yforkvQp3gY9FkX",
  "key7": "vyLh2zVEZaYUAHF99c3T9tyzL4G2i5xb34DtmAzMtPGdDWPerwHqTRBeiCkTVw58kCXBfhdHFZnVA2iYRjpBtb3",
  "key8": "2SjYikrUrTWEcpjHVk6iTEdKAbaXQicRDKYCdzcADJpwsXyFiWA1jJD2HG9mHoS9VHmJFj7SXm54PtDgerXJVSAj",
  "key9": "8psH5auhfnogmyqKkgEvgiVUSvwqha7HjkRvwNQkib6xJhu6jhWsN7WLmyJPUsSs7t9aGhLZrnkWdvvtTcAGD8r",
  "key10": "cxLnk7iwQXAsL9e19gx3vbNnPEKhgY4ncL1Powdek27x5MW5hVfKmCa8rNBbjnGvewJSCNUdWQNs4rUsydkFcL1",
  "key11": "4g7PiVPzdpuX6n6GotoGDXCPxsM7xFQmZaaTemHQXNtoca6vU3q2EeqW6vEH4RFfkzQpZPcNJArhDD3m9pZn4oGW",
  "key12": "BjXgbbmMRTPcPFNfQjAdieaq3Jjky7BtN4YYRPSR9UuNRFvbiQY5t1dLAkpJD9Ag5psJ1eZ6gKsaugMSbbb6hsf",
  "key13": "5d9mKZga9EddtJ3Fnq1HEk1s9dKNpwU3MkhieqYrHbpzHYNkbpKuUfkBSwoUPdZHfd5W75Yb4XVELTj2JyuHEmoH",
  "key14": "6aWhJktjiQ9R5oar1HjiJ3gqLkYqpWwRtSbsEjpQEoDwPwNsnVYJp69wF9GGHw6F5iXNRzwiuVxscqWV1EqdfP8",
  "key15": "4y2JSnpPyA86VpfytgDMkN5oqVnb9ZKPT7rtUa87YF7iDy1DFFTeYGStFcNyUhGUtML7MSdEVkZrNpohAgBaU6dX",
  "key16": "XVPcQ8nPSRnSAkx65RoDmuYRKie1nUcXhfG4cQ3KUvT32Qbzfz9Zn8YWGKXK3EHL65tq69qdDfjKA3CP2sCscNi",
  "key17": "4qxTtxvgYB3imdJgP4mFcb9gcHKckWVMMp5MVExn7kyNKamENTYdGf2Lvcxvv2cWyUMxyrLos48XsiY189SWZkmo",
  "key18": "5V2rxt7aESMvc9br1p4oRXHW8cb5GhwVNcHYE9qea2TMX55sGAywAuKnakNHP7X7E1o21tpaquQBmcyu5JAJvA4B",
  "key19": "2CgudXYNm72awLcwvGECurcXTAWRh2sdzNNo5fTYU7rLtDekC4cNKr7NWdSoaHN6f5CBEPC2wNkNXmJYCMBCviTf",
  "key20": "2uyQrKMkV1tqWRkq6daErc5S7yr2XPwuihRLt9DE11kQJRp33NmJJD67G4nzPzzuE9VjrA113va9Lqrsp1ByYPR",
  "key21": "3c3U9rhSsX3kqpwhKHGvWrS16Hj1762WJbPR8yCQiyNUEuybxTJvocy7go1m4j9W9JzvUxcnoxXMBoMjLyb91MLG",
  "key22": "2yRaQ96wTDfaHuybrEzuPnxGta76NKU2rG5v8uhZVobx2posSfk75kEditMTJSa6gTq47hQV5xhNMWmGnRSNZwnX",
  "key23": "3qvFdHqVE9UoSmRJysiJonrZPWSeprnMC2NLoGEZGxyNqh1287pKTsvxDN5aqYu5sAZiT8Qn2ntbCN8eTWhtP7Lv",
  "key24": "2h3EMzg3nfDtkB7kjkxbcfiRtu7oY5bkeMdaXuiTyVVnxhVgXLrFuVVd4B5yeCGmpzEN1aMH9CvxFHh8Kp7iDWRd",
  "key25": "2awFBP2mQKkLfLvxAfmg8FVGycsEEgTZzCEpD231DcQvJvAV9RL3UJuSdag8xixny18eJAoBR8xBeg2xcfK7GXxq",
  "key26": "4immEUqkYSghMi2W2uK1dHtqZ118ADmKefSdd8fAsYc6zFEChmCVaeK5WowQMC7vbt5w1V51h3bYLZjZYb3UUAVo",
  "key27": "2UTd7NcZ6d6jerXqmwAp4YNjgKn983ULLoVswduYWbNMJYP4Cw4qDuEJ7ppViwFFKZuza9E9cFdqv1qacytAK5ix",
  "key28": "2eeykVYXQSvxUQZ3ofgFWC9iceJgw9MCcPN4Z9Amgd62SkNNRbiPC6dHFTdd1vqsZWHPbtdZyQQaq6HbZs5tDyn4"
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
