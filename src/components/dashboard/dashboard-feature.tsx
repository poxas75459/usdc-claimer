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
    "4yDckS4Y3NuEBSsSbk5X7WaC1QtPczqz8jP7RDZG5GervHuiDpi8gSLC144kh4hoFvsyCSNyqKGZ2cDTYt1KrtCB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3s8SPW9SEzsjrjxoKreh8AVgKhNgVRuAb7uXN3hM3UpsM1pPHYRi5v299t7k3gWUH8fke3UtpZeMFcdEgsNquWuK",
  "key1": "5puXCPMoQk5zkZaafVafuXdEVhdGUX87otgNF5abVZqNctw2MwPLBWHJgWDmPdBoJp94JC8opfdJcBvkHhx6PamC",
  "key2": "4txn3tBaSTTVXNUXsNv2HfA8wKrZjxeUsx7x7eJ9aUwRZffsAGeD2XQyEsby3SzNjBydYikSMuF5a6EjXVR4qrHu",
  "key3": "5LgqYMqziYEUXAKtXmZ835Jv3ZSn9zr3LNWuvD9n6HfJ4FEaZPdWTigzs9F5Gf4McjnY9EAZCJ6Q1HBjnymzvGq1",
  "key4": "5mJvSs6g9nSPHw264prKBbwVHotxo6vnazum6hsiQnTZcYHSLjUamkngcN1GkApRwMVMwekXy8b3SZmKKHs4FfQo",
  "key5": "3a564r6oiL4cQjLnNcmgnxSwTjgBw6pnEcrdcygifH7qYPAxoP7ktFsSaqFZH2cAgaPVCv1omG8nQftMaWLc2r2o",
  "key6": "49ojLzZ4fLDF2Bpq7G54oS2wzUjSeYwkWtYBt4yzUs7Ud2cYVhgJASKs4eTiN3GbHZSra7zhJuHxCAQyF2MqKvQ1",
  "key7": "4z7HDghqVVFK8QgXQQyDwrwYoCYmnyBPzTXviEKPRbgseRL3YjDmvznc4C8pn7TpsRQKx3iMj1TTJrRoK8SwBnXw",
  "key8": "5wEb2AYNYkfN2THtjLzYCbSWbKZnJJiffYmUZnME6WrW86sHSyBcR8TYC89EjZiF9vSr4t6MXk2cRTx4dUfS9dF5",
  "key9": "2UcGJJUX8iJAnDQsnCSyywaZYbAbpYXNDRdbtghYPnmwF2ogz2PZoca4SMGQzSgEZwhQe9VmCt5SUn6nozeYkp6L",
  "key10": "5wu96jCSFZqiWXB2X2q7h5GGJN3RZkz2tFTka665r56iDgHP45Ax61WAZYESutaSB8HPwm5wtBQYzvzoEZy6da3P",
  "key11": "YmsHXTcSQH5GkUjy9Yjn13pxk7LpZVfXTHNpZmkgqmbpHtmMx6CxXPV2aauekDUfAez8T5kYLsHWjY4A4TMP3Ga",
  "key12": "5S4vU7BoANeHS6WUqTtLAUrqi8E4rr8QT4vQmyhSzNCNUnwALRfk6wy7LBtJk3VgJVAy4wKfffhFG1VrECu9L7Ua",
  "key13": "5c1YTxybyeVjLPTfQDG8Gq5m2Nhgeo5uYNnp39GsyM8s6jYEVwRznmmG28KbLuregW61NZULU76uhqfNfKnmqJtZ",
  "key14": "3Y23gGtfHEQWfn1xiAr1J45eRMVkq3QRepoCMTiwxEynuT4JxXPhT33xFvvnzoVJsZMo8b7C84R5Xjb8Qq1wyb4B",
  "key15": "4Q1qZ2VjCewNsifbK3FmP1HvN1fu1jx9CMP5mtMduZ7mDq9iuhayvbpgWDdGbyENS6VWSb71YbsPVBrVGg8qziLM",
  "key16": "4cXH5ApRYeUPdegFUkgnY44xc3QLrp1wqrXrFjwWnk1M4Z15jiMTvoabNEDDLAAkCxXXgJtnCHWNcv8pH1GjH3x3",
  "key17": "5jRVJnSRkFTD1D3RYcySr5Tcc11r1aBDHXoN7enQS7eFpj1Hxa7oJ3z8nZxMMQwmyLNDk8ftp9W6fsztmVDTWZhs",
  "key18": "4L2dcXMRykEcCs9fMpe5F28af7276DTUPV8tQu9ePiJccDeXQuoJbu8wXcqDzk9Ud2kASxR6j8FN6LvXcUd7Hf1M",
  "key19": "487c31is33kPVVE1yUb6SdcKhTZn9FnWZXykEUgaEnG79S6VxNSVQJRpWqtkotkTvGxE5JWBitWfJtn7M4j3GWft",
  "key20": "3nqrV2hsrypUtPRYZNjjFS4C3VK3QaCh6M3QRFpJRfRpdYQmyKeZxZw7QB1hvfjUZYvotufBCgdhKZPnzZzKe1zB",
  "key21": "2KJYasEdhst2tSHZtZWKriq53kncFejMrhXJ1CJ6CeD4uA35pMdPqx4TKHg258kMjE8f27arPuyNmce4Sny2wVCc",
  "key22": "5brdwNLsfv96ShTKdvuRqGmFpBQK1X3m1qKNjFUr36q3x5rKqE5vyE8a1W7pP1yT27rUK4jbti2Nks6aazDMBCnV",
  "key23": "5wNQoeBBHJLLS47beGwSRdyi1zSj4FiNkVNchMLipH6wJm4EC5dP4dHTojjid8vfLkiMuMgQquRErqQfFnZVHDga",
  "key24": "3cYNBy7Myqn6CtSkanGYuVWEMzbEB7Mar4rm5WPNgtrQe3iDatUJFDpQXQZ5qgoNZC69Gt9qvLjbUJ5FH38n1obg",
  "key25": "2BaCTVzFs1ffQw36ngpu3oWCpy82oof9CSc4GHpWKky4HiQ26orrHzu1MFJXbCfMSPi2MsEB8LrrqeJG2yhRQCBi",
  "key26": "3qp2VyyZSpzReod5wpsbWGaWjsbQ1XRmXNU4mk6ZiYj6CtTvSKnk6wFToMX4GLsEDvXawcfVxLTGv6wuNkENf2ou",
  "key27": "4UaXVqVAAqbQnEoNaES8VHhyuHret7j4GZggXJSoEwit4Pc8g7sntTSZgs4opvWRcWKQvwQYzix3kTq9i3RTjY12",
  "key28": "4p6rcqRPGCxmTxnEJq5Y9T3tALZScxjGhPiAdQsyc7beyWe67tr9wcDihWsqLAL2V3gvzxT2jCRCCoZoFgKCqc9K",
  "key29": "mQb6E2dEGQiM7cs1PYt2GdN1sujHi5r3sAwHndeZhckF6ucQyrPwfb9y6j6DGdM7rw3z8EcwBHd1mzLQfiDwa8C",
  "key30": "52yAWnTAVoNSJ7LMtZAHapSr9aw7w7cgR54Jrrr6i9opUiNgpGRmGjhP61RWhTw7FjV61B2koBT8UUSGX5MNTyKW",
  "key31": "5A6YTKH388aJMB9ydWU5zPV8YwAebsVf7QZbJWaGwwxLyp9UeqvHBKFDf3GhC23L6YNMKK56CqBv6PH3itj2Q3yo",
  "key32": "5QftP4dB6WwV6RWJ1UBuWKLPAiqRoriZWSfaUeB1YbDSZ3pFDLE7jxUoB4KBB6V9mXiXcBUVsoapMzCPY3QHNpm9",
  "key33": "325Jim3eZeH3tJYbygBYCpCb8aaCBh74eSmPqs4DGuaUfyv4XRxSBdC6jA31Tx4jBAq1Te3WswxjZaZYB1wLG43u",
  "key34": "2wwRe6K9BjF7ndczV2iJe6vhNi2G9kvS8sMTGkHG6Bn7tAd8GE4JKcWQEbWvfTbuoQieioH7dvQ4eDho6MxyhEFo",
  "key35": "4PHcCEQSeAaJRRWQcVFtyz9bbknAg1JA4kPWdDLERTgvJE5YRhNEE8run7h2SLUmCC61vbGHweMXrqrDVugPGbjj",
  "key36": "54ifPRWjfR4UdmCbWvQVo5ijuxdZv38reE25SWuNhY3qGbR2ZbGYGYhE1J71wC4BYhJxjwnhF6yGJBuR3NxPvwYq",
  "key37": "3EiC1MEr9EmeGFCQDWRz7XThHNcfKx4kMSniXLbZ2R7uZ46vzfsaKwY5rW4nCFUepCCuSjntyKuiYakpYrrg4zWk",
  "key38": "46yYsk9FuoAzyND78MphZPxcm6DeXAdkuYvW6JWHHrdgkMnhQYydjE2CuYtKnZAHtwpEAmHt25akdpD4eBXcXGq7",
  "key39": "2U13ZTzzNeRSgiDfkHAbczFTmpVTGWK9JjUPFfmSiv7g8DG4L1bQ1jaCv4JRXKdDZcs19MM7i5aMgCgL9cAUx6RE",
  "key40": "5927Evab3BTPARdNpFGXGMhNMsG3QSXwMixjugUmeE766MozL6N7uoybYhghWCQS9QiYC9sWvimpCEKQjUTfZXkk",
  "key41": "4pbGN1nsKTNRkZiKgLWRUZzLCCuGXpCvYrnWRLw5sD3b17iAig8o9DeVc57KThdqwXeTU5tWhKaJjjYeuuH8mjG",
  "key42": "46EXtnr8TS5eLooC9wfkFSdLqL8EdcMmNmMgdPKmw82Qn5MAzjuSmwvgxXbXnCmGeWbWwn3Le8hVEXxcMMmW8ooV",
  "key43": "4qkJWqCDeXd95TUtJjtETRJEknkxL1b97HEFTfahwGDUkyTAgVmVKZhV3Tr3HTVQ7LSLZbic5huojdiQis6szzAR",
  "key44": "4RGZKPQh8MZUKH9yz4N3bUq6VqVYMjJYN7vSBgoqMCu1DYBBzXPgebPA2PrZWTnHStmtZ6x1xWuokmyzNsUP1XMA"
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
