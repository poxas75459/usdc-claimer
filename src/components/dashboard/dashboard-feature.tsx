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
    "4tMM6h33ijKrrqZeDAYokPUQ872PUYEqs1EE7h3Z7VZniTPv2wdBk4F9QzaJ5vXJK7vS9rH7bgKfeY8218e64XqK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2azw6Q5RQ2ZAQBSRAfuQYGyd4kp9yQTjjkj8nSdVN5Tsm9EWNGLtdVsyFWgVDKEeE2DPncLwJLsqfwRa1fEVEBP5",
  "key1": "411ap93AVUzXszxfdbw7JJyEko3ebsD4cmBhjagETCeyXKLTsn2ARkXvbV21QDBWxcGh1EYHKVuQajNaBkgJgJ5o",
  "key2": "3q5jykvNF7ZJufadF5aRdTtw4noRdfcyovE1DWXEBNha8conSU4MAte5e7a8w8o3h3DQQcefUcs2XAxWmSYNSREW",
  "key3": "4ix5GycdoHZ5KdESccrxa6PREBRKLxCqiXwSs4D99DT5J1fTtp9YewyS1TjEND6DXLSgWfQiADtXjQESgdjq5GBc",
  "key4": "32BgDbxSkQ7qCWDxTBDnu3wn1aHnF5DvzKYdYAN3Tt9iCmD1wfZhiE7roXEh4xY3QwzwhDXHi1ZKfoJUr6CvJvfb",
  "key5": "53Uuh6F7stNRWJM82hqrXmWGqh8wgQhGC8gMJ1feMtWVS24wFayZF6srMWnWffXdKU246tcWHyS4TVDatjGLjNAU",
  "key6": "5MEexZbv8RtNGHSC9wcbXrUmWJHLPur51iujvbmnZLZEs6TZMiuU1dsjScS9kodRck5PLYHes1jt1ppUkDPcgW2j",
  "key7": "38xKhL6WoYc1s8NDQMYYykaemTHqpy8TKCCNiNgxpcNec9cpdJPeBpGPPeSHUY5B95WRJiZ4NXumzC7sZR6MABTz",
  "key8": "4baKtyEmqPfS8heLddonsWqyeU3igRmGh8SVbemEoidpbuFyw3yR4xgEX2dhQZaqewBt93xmevWcgdeENiNwMqpX",
  "key9": "3GmSiNCHksTKTJhyzZAonN3bKrJFpH7uQPx8LX2QDtyWrWk7oESFYtxfpBbkQiLXKS7PNFeuU9kfaA4iRuM2ntne",
  "key10": "2L15nzTK1Dq3CuUgtDBTNk4CsGzxg1iUx4GvTiHL7apMSV7GHKw7Qr2scJmgerpTTtnwGoyKGTTrsgvfXZ8Yy3em",
  "key11": "465yknMMBaLoNrxSunVogsR5U1P8kqAeTPTQYZsut6DCM3KQiyfRFykjWvm47Vy4acC3HjogmQu2Y2tXnZnPGfSD",
  "key12": "3tG4CaQsHi2wDDa9sm3hV8WVSHoJN4LGEDNsF1H13Z8yErXwBGF8d986oXZ8cbFY7zivtRvJ47d9c8Khp6JJ1NWv",
  "key13": "iH9Y6L7g93A1hzoxuLNFYccKwCJzLhiWzZdmhHBt17S7kfTNLL5e9Kb2h4RLxFT7M9Bei4W2DTqqAdBV7aznvPE",
  "key14": "5HTnFJNn8Wy75B6iTS6AM837zjiaiThLB3SJozMnVcCDUcDuCmuGizYsCThnCT3es5Lh1xSqiGvVyrnmUpnZMeyJ",
  "key15": "Friig2vYhLCk24YC7vwd8NKkQxhSvmtBL3m7j88KrzWmSWvUFsxFw8LtngdbT3BKdr9vEVmPgGnctwUDV1kz6ey",
  "key16": "3Ybo9jE3dgYPUvg4Rg1DmU6NEtvEooszjSUvoL2UzDCNtiCzkiZgHZGskCKFBmFzHJQdvLCwQ3FBya3BSkWx4DMs",
  "key17": "4KzbJPwx5T3zEjMXpvdFtys5QUsb1W268BMn8zf998HwxDrDxjZLbA7hNerQiAcoLEHWShBwqKnhLQNi2bpi78qB",
  "key18": "5TTVt73nYGxstJbBDZFzZGmNyS7gfPqqHBrgd7acEAtcALLSN37nVdaGQPBpCvxsCgzDeyNejeyVLLhJ6T7shvLm",
  "key19": "3urY1TSwtRzKzRQhqqFCvXuVgsKwAdzu1RodjcmaXgEwfE99mRWmfuK1SwATeXVhb1Q5sv6ipKQVdYDhcYNXoC9H",
  "key20": "LLNnSsaqbzo96radeeBFEjXLKsbfLdhfin4RqwtBMoVxDtsYca3TCWYzDHZMwTyeXWw2amSHSXJVaEeh2nfh3SJ",
  "key21": "3FmvvYW7V4zTsxgunn4VC9gTQdypTxY5jPyonRx1pdqL3p1Us3Tegq4H3EocT9dbySLx7AEXxe2p7656ipZArtnG",
  "key22": "43y2XZgxQjtaWSg84hArqEYtnmvNE5zAU8HtVR5jxXpBAEvCFfGjmtjSpFTJxfTPVDHqBhU9drctHrU1PyizAF3z",
  "key23": "LiaUFAXpjyXsLDJzvkrBYhfQ2GxUkKXeTkVWgcaJ8L2YADPJQYd8FbYW4dNgni7KCy4veqkpxZv11PS5fNXYwpV",
  "key24": "612zKpZ5iHvVbxV3kVrygwaoTAFKu2dFYc4wGrNe5Hz2yp9qxcKGnsSydq9UbTf2mWFbN82sUZ7VaE6z1eVNStV6",
  "key25": "2shm7yuG8KQyvAXvPboxJHiz5jVwN1CTEaPTbY4TrLspwCx9KppRnwGZaMjZAZ3KazC7B5DhZEY8LazAJwuHVURv",
  "key26": "64PiQdy4t1Nnzc69LBwNq7ypMSwfHE115nsPREhKF1Bh3kxZ1U5Rqe6KYEYVmdtvxK74uWCmBisLF6gczLruTtmw",
  "key27": "3TWU15qu41jMZgjoHUG7wToijawT3FVphJkbFE2s7WjGAxqJuRc2BPbdhNopBb3WcNz5yrimbCHt8QThegVr4ZuF",
  "key28": "4aZ1wQi7GsZ6CWkgy7Fr6QhvtYgCHhUE7Y3VdBCcHfAYbcTzK953VhPDxMj2XWwCRHp8dQGmbtUQpjHQfMAurdFH",
  "key29": "55DBZgdLhTSg2s268QEySB8fycDYBJgREWqFiNtmzB6J6cxxXe4UH4aZM6mrgqEQpYbTwDUZEwcn5iGvcuy5r3rG",
  "key30": "4j7r7j5WFugfqEj32DAhi9yrM6jX29EpCGssnxqvwi45DJUTp8iqw3jD97ndCRPMZqABdSkeQoo7WB2pJtEyqgDq",
  "key31": "3hUKio5jhrpWvHxLWcQSyrY55tuY8AmRPzAqkoS8PPiAvyyonzjtAT7mf7UUYWsacLD4HHdVTVJDB7Jbi3LtDUua",
  "key32": "4aYMpzTaNznBCwNQH9KwgZKvxvMgwbu11RfauFh5GWpgHvfZhutPYhBwanpqCW3Z6MT7LrGMttWaL28VmWbuxpqe",
  "key33": "2CGG3m14V6RQE1D34uzyEw8pd74fDAdavvsBKTBnCcWRHgMW94SGSRhTw7fP5J1Pa4htdE1pYqZkJGSAHHkJqNDm"
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
