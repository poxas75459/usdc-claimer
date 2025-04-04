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
    "4XhnGTVFuFpHWvTAbdw2MHJeqrSLWY3NvwWNeLoGRNjNx8AaDndH6vLNP7AkV37fb3ESf8fEsRwdFFS6oPWk5vU9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Jpm5mmisYNBJsBszzPYbiyNwZJ5TcA5vpD9vNLZXvnxBEExhkphtH3XKbUZE89veAz9ZCAT7fWXCgq4Rf8SAU77",
  "key1": "26UeAi816oaAN6UBbQqafaTCov4DkgZ88fLbsMLXUJaeGhm9rbEzFZ9vTAY9q1Lkftbn6NurdePYdYeyCtoJtMXW",
  "key2": "o8gavNR8tk881JphYfpZpCVNk7wGg576YisV58HhwVZ6jqWgVvBLf6gnUknoFJYVzqgaSfb6mTZ9utnG2CaLozG",
  "key3": "4pR37Cd21ZmLqGEV5YVMqUpTz9rLB3eJCbfpwz4rYPrMiyvT4KWDLb8HD4F9KVkrfM7E86c28FxKLaEdRvFCW34Z",
  "key4": "3NFZ9zMo3kptoDQ4pJiJz2hDYr35mWkRxhsZj5nTTWbEMrYrUbFi6paRTDvWgT7z97QCQhB5RhQxEkYQ1dNB5ksR",
  "key5": "213ty4gW91pasjAmDGY9fzha1fbMqf3xY8etd5qbX1Hx5LBDKdnXXbr24T1LDLjxzNCDk6XYTrNQR2AXL9CbRZHv",
  "key6": "2Ek3MdsazMZn1ioKDCjwLTZ3GAM9wKZo3rxGCbCAi8eLeMpK2QH1cyx7bDtRuWHzuSmAXpzbz8Sxq4ExnxVUYM4m",
  "key7": "1giWbDER7CbAHdBJurkw74HjNCiU2R6vLVRhfcj77pwLV3beZLyJFsAntKuhQT3SXtTpJP7hefyvKxQeRXU4aoL",
  "key8": "wpxUm7PCNzYamXdhu1Jpn1RE5nmcFEVV8exNNF74ksqxNt7F7Rs1r3DEs3B7eqXQc4ba5Qc9CMvbnGkuCeC2YBr",
  "key9": "5qnkxcvKA7FeAWPUgZDvrqke4vSamKvXxNJ2V3fvoJND5i1zUE61RhDCYon1srxEbyGggLvXKvtvkXf5HXaJB5aT",
  "key10": "4gSLCnXvFGyYYyVnyWy7Yc7jvvL7k11u5w165yKphHRzHBqYtYr8x1KvoEGhGot8PUfHydbHhQnnTP6T4vrqt4xZ",
  "key11": "32gm7vNMcNDQtQszRrFhbvD7119dFGg11MEPQRyBVMNeH7gYRGKoG28S5H2DUMKtygqPa5xbxe7n1dFKZZ2wkWbm",
  "key12": "4gvyMyC9g8mmdS4pog7ergMTGw2vjPYahmLA2Bz4yY9AeTSwkxMX5kQhqpNgwmuL5vpwudjEyd1KPeQHtWUNttmS",
  "key13": "2Bgi8zGqKt3qEmpPcZXdL91doSWhUxNFsVA4WcCGScfqymG7Ge6hELW6AyLj8pJqCsNHy1A8MRNLHamACqMMLDa7",
  "key14": "2jm3BtXdfpEK6aZDASoNha4jAien4GWTuHqznLCiX4vud9BqtuxbiLjUuWcuTQjwre3brxDH8py6SpDdWx8GoT2z",
  "key15": "5ViKFEMSgNo1P6kzuvUF8N9exWFbGp3qNnPTvjYNk9VVtZmVcjFZxTDs5ZXGAWDbpPUkB3mUWPwMivpitj2aScHE",
  "key16": "5ZzzPqdTwKcrnaKCtDvwb9dSFfEJuKdFJkQpj41j8fGbWsSdyA9Jtn6to7i6N1PHkxoZ7kMAANbW7JPkcYmWg5Rk",
  "key17": "j49Ei2qVbooMia5fDoZVTzojYSQPsTXX2RXdsEmgzi3hUgof18Lizu2SXUGT7v8qCL8HJuA7W9KLY4q2EPGCTeX",
  "key18": "4f8UNipB4fVqeFnFVc31DKKWisx2mUQof27BiwQQgBTPBBSfdWfxe829vYSP8WpJZt4XqJAuxYV5EUNFG42MSUWv",
  "key19": "2bgEVxfcoauCjagCymKE8bkzeRByW4VRbEbkzrfHMVRfETnQ4zE5QS9wedvJRtenfchoWNFq7zYTgWj32UHg6mxv",
  "key20": "4jYbhbLJHFod9BacAsFCSzfahp1mwmzNRuLQrnfZQrDxMaC94oPjP7m1o2ihvEZjEmSUJ1CgYhCyCSZvU83xESXf",
  "key21": "59hyNyQ2CvVZxa2Kr4ZdS756L51AkqEEcZXXiQBcgFDXUnuFLQTFg7SrayH5Zybndnq5h99ufRCVMTynh2J5UzQc",
  "key22": "WYgRT9cudg3AdGdCvxg4SwLK7A5bGUagF95NCnRxRUBDsopjDep9NE6Qo53QxQk51tcA7Z5aaasN1DyonyyPqDG",
  "key23": "2GgT7CYzmFYRYe4FwruWzUoBSALyjWd5z1duVyZuFsviDJYZ6KhQJ89GLtxGubbYSxko3ooQ3xjjn4ThadXtUgtF",
  "key24": "3DYUrFG2boZJ2XESrdLQFAgbbL9C2yAkwesojQJQujcmtHdocZ5ks388WEBCSprCdfPWddtm2ELqZboqN7cSW75D",
  "key25": "58buf7ZucBgqetqEke6ooyceCaRrpFEHv64CWLy3KfReixVH8G59F7HYCe6udCR7dpp5dCaGnbwWBNTW3MZaEkty",
  "key26": "3kYNtNdFZowS1P67cVgtzQCAs96gQdCgLz2DACgvDSib4mJui58aCjbjbJyYEfN8oH5C71Bk4siHBuK1GVWJDk3A",
  "key27": "48VeWBsMi4tH4ybhRRLLkvqGtxj5fDEZyLZgNuiNKtwe23pQNNehSr9JpVkoGk3RDENdptYkMj2reDHuVWtbUEBy",
  "key28": "5ShBTWaWEHHRt69wp3whzK9HEaXBaLyrE5jFQrdVpCLhD39An7bkAfWmKTq9iBXaxLgPSLVwXzKMzvqYTbuDCh5q",
  "key29": "5tnKUBKu1TxtPutYALrzSEdjG7MnbPcUWKJfBr8Fx7dtAmANnTTqRviZCFzCbhjmfpviiFuJBFB6D3PmF5nASzmS"
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
