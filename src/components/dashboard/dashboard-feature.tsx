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
    "5RjYX4UQ5SJaPtbEJaBLvoAg6rTMLUZoY7yaVbHwHxi2yNt7BcMVyTbUoMmQAnQ5Pk2yzTE8iZ9KdGFv9SPGY8o9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3JHrywfnYjEPb2DTjoNpjUpDXfKdsmLN1e4TpFKAfWJPEtRyPfexWKRVD8hnyKdRAZNatcCdfaB69FFAwdL8Z4nc",
  "key1": "4VYg9dCdhwzYDKFRD1Kbpk4UMMdMx25wKBEooxoQWWYddGZFHVoJRAsSipX7LivFKyNfPDGsk4bh27TKXS4ZhpZ4",
  "key2": "4dJ3CN1353RuEHmwdWa6nXtvDKnXtRY8T2jBjho8pSmQKHEuFsPoC7mR91D5i9jLMqtHV2GPXnbk7srLLwS138MD",
  "key3": "Uv3N2dXGi9TYnHavqWtJjU5cyqRcJ745eiRhvZoheMseLccKssoCvz9WSHNA11rkqgttSVSRN2DkQzE7uj9HpoL",
  "key4": "63DDtGkffAtuoxmymi7v7yiAcBZAqTmKnF1Vc1EGVEWxd4NeKeBPHUYFAXxFeXStJXYPd4v2EKzqWrkrQtsYNcic",
  "key5": "6jrJ7V8Hqc7wMVSTD7SK4wa8RXTvCJVeFFzDHQ7hd4pVh8gL4zEEAqEFNeX2eRRk5tJyrYd5QWsNKDg7LwUtyjw",
  "key6": "54rfUZEgbpLo73V4qKaUymR6TkzRJYVbHaxcgrwsh2p4zSWrrLE7sgore824kdbddf4uqfi9G3XwYdtZwyuV8V4s",
  "key7": "4gQ5eVA3GtAEeHZ7ikqkRKhTn5HQwyg2YnJjd3saycpXTwJNGGa7rutVJ1Gk9eGqJVUTWAPKMA5PFg4eNDVarzuE",
  "key8": "51UDRU5byeuvXQFLXizCTPewYNwTu2H6mnAq44XQ3QUH5cBdybnYJVLhZCibkX8ehhj4vbytTUhcrDDcseBufmXu",
  "key9": "42HEYzpMaAHnSmqXr4rq7XCGanJpUASrLj3Qm3kAKFWt3y6tDRUK9bEQr1auU8wokxHnH21XyuDeqXUmuvgKXXzb",
  "key10": "5GhpBFjiDSiuh4fqQiwuuw529A2sHoAJJeYa1ZaFa8kscV6jBkUTDFs2q5DqMcDgHMwVZFGg46mcP5BaGiSb7JZ6",
  "key11": "2upzPNGhrnLR56noQawyCD1Xt3LsBnE2CpJrwrVNHR5SwUBbXjmy1o5u9J4UfFNPLhzAN8rvUvwDV9yV5JojcqLp",
  "key12": "2TH8BDrtKF82HDAJo7dZkRvUGKNi3CGr1yofmDxvDtj7gabSghmQw6ssR6afzMmoWJiea9RN5ueKEf7qonPjCSAJ",
  "key13": "4ZyLkJupY4jZ8QmyYJRNG3vFnt2RFf3WaH6TYYPYm83kFK6AWNyFQ8C4QKDvxHd11fvvfyRDioWqnTgXxGWyQjQe",
  "key14": "31y6Da5s3fcRdiKVHtgkYa32KqQ3ePBnmjEQL5xPxQDEhhsznGasYJJb2YcJYpLgyhDP4ufAS2N17jyPvJxTPuom",
  "key15": "HBA2L6AK1qEYaAKGnviojEdCVnQjCg8kDnQqw5yMkYt85MHjofWmfVkUpHvRPQQkcUvMEDLrsQGcQ6nQuLvAZoY",
  "key16": "4ZpstSdACxYbqBb8oAS2jLGfhMv6pAdy7PR6Gi1EZ5FiEkxw2EbbsNZHEStjyUyiT5rJSbYBaaRtc9McMFPn7J7H",
  "key17": "4g8euG9nPX51p1yHMbBH3i8ZFjEeVATJBGfMqH9Ham3myEwRb4bXsZ6JPQs1KHKwninZgnwnsbFNXbmxhfcaXdSg",
  "key18": "4yaNC2s8k5JftkqKNZZjwdXm4AVPCDL9bBBvzagkXohmvttaHV2FFMGrTiDHddsNb8VqzDRWEdRUrHCUqvXSACAd",
  "key19": "3WGhcjqp7gfqgn8LtkE5UZqKpwPNpwSFfpJDjq5iSamE9BsHjSpE2k8is5RtxHc9mnrNXhrG7wBjA3XBGkfF2ydk",
  "key20": "2Z5vj27LxKDUx1fMBGVV32FT9d53ZWnfW2A2W6qB5XWUwsBVa3jtG3XHZBBsRG4LcDTuxccapHEFNmVHxVcLNz7x",
  "key21": "3GJPRzDWu5HMWdK1ymBEMUGVnm9E6UEyBaJi63bzMtTRQoMpETGN7sf2qJPqfcsBPqkEPxJhbQG4QDtweQBQJz2b",
  "key22": "3TyrgKyzxkXhPkA3F5gTzCMUdfAw7G8wkVMAHCFBrZo6cyhYCMtVP4QgMbXixvY49patHJmrJCX6wHwjpZRPQkLf",
  "key23": "3kmug4JATCgDaRYCdWDAwXKQEdW27EUfQjrC5DcPWJAPj9GQxAzA1v5ALrkEKfTYTxUqmPM3Rd6SqnDu461hSpnv",
  "key24": "YfrkZfD4VGw6ufnrJc1uC58uUnPJEnRu5P9M4FtLHErCYRhRthDLRo9eVrjjV6Li83XVZQEgLia2dNn9KB97Ltj",
  "key25": "2okTujnCijvmCsYRcyjCaxcwLSGgZKc3rtfDr6iTxHrpz4LPrM5wCmd37qwPL5oKLq94iQsi352sQ5qDUvFNp2uM",
  "key26": "24pqZZUfRUiJvwn7deSwDn9YcPLo4mik4dXZmxHkbj9hiRaDyXp1DeWWqyADUuYv7FNcAPNssu8qLWEtL16ZtUCP",
  "key27": "4AGmTC6A7g9h5AEh9hHd3ZiBTLbaJtFRAqr1ixN6QgHjwEp6bwFj6VtLUqqYPCJuwcW3V8RmUU6onci2sZSYt92a",
  "key28": "5Fa185PioVDWeBTJZha1r8eUCAzuN15MDP2fBM58Y7zVPjb2W5gekdZfcm1AbdDRasukndmpjmDrajBaX1fRe5eN",
  "key29": "5LGMsRqt4ejwvvbLKxT8mUyqyq5VT3uA3eLNzhkB7LmpCmZGcwFpvfhemPDn6XRCC6r91xwTZBNCBMmft7orzo7t",
  "key30": "BuugaQvVg8XREcRbR38M9EqbzotyspaAUABhPVSt2nHvCNXgzZe7jfKwUsb6gANQJG8X28kCSVBtiUG5Gov7Tkb",
  "key31": "3VQH15TF4zfygR5gFtfPYoz87giXfTjDLoz7yT4tA1YR9tXtvq4hJQ3EgDiwjhcusbgo5UvQdV7GNyxYxCZ8UoAo",
  "key32": "4tiZnjNCHYbtXTCsaV6X4j4FQYjxPVCPTBGGfr6D5U7eQiBDSDXUsCrhYEFHo7bSYf1wjLQSoQbrFbZsvvFzKhfG",
  "key33": "5NbFwLVgW7Hi6CzrVSep6f6UGHyWGXxBUVBzmbZwG9QiXLP8e8REK5xVWEaBFFeht5MAFpKNuw2CWW996VQuJVCc",
  "key34": "4aLVzNrRrqej4JszqN9bVpYxBTWQ7BedKcs5L4cfn22BsPabsonyJZygE1ryypqrrRDrPdg9ywQUSTMQuzkss5HV",
  "key35": "5xJFa5RAsSiN93PzDYimcLmpy32U2Ay4pfvngshh3aNCfJjnMp1DqMmwvKRDmoUdCgwvWphqB23zn6SYUw8g14QN",
  "key36": "5E2m7XUmVVokEJtypvLePHeidCBaPsRB7EH7UuXpvSUtMLTkraeYCcf3iYJwoE6ic9UktphFRgrkpE4bAd1DcTaF"
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
