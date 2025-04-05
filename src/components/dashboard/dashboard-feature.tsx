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
    "22k5kPuCUWTK8VeMkVUsGbLhVXj7LZTxnatwBiTaURbRX5RLUXhxpDBB2SGxFtMGuFjPruMaNKS1poXYVvq49zpd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WVb4rcwuZpyZyu7XfTNQuKmxN2uAfmRyL7rV5Vi1Q6b323J61zcQg9cpyDctZmFZGurSLcpKt6KP4aTD6bmaFd",
  "key1": "3Hag4ArdqK9oCEpmR78vkohXgZc8fwpnwBPRDypGFsoQnAqZENyYkE16ZbKCwpDowefAAD2YSAjqRYhMoRXhiGWQ",
  "key2": "BEfBmmq8iKEDDVet91SAXPTEeWuWpn77Fn7jZAqgMh9w2KcroWw1VGRtuU9PA7UteGtBBrnkGS6cKF2CzWHaasn",
  "key3": "EgHJNAQhXDJwsDAv865yx9vXbmMUxAkBXHQou5dwoAiNHTSBJGCV8bGfZ5dP296Df54gMBcWNqwJeLfX79Seug6",
  "key4": "5FRSGh6t2v4Yt51u3pNwbi35ZSZK6kMvffcoapKusT7gyjvqAzFUiFW68SEYE5dmJCLdHhqbfVsNFKGjAVvHHn6N",
  "key5": "59NeUHGLgVTV1GNkBZQUKxs88mTR44KZdLNX1LAVEMkGKBay6XC9jM25HbB8WUmMGLrVmhhGBsYM3bGZ45jV98pv",
  "key6": "5n4ucaWAAHvCHtezcUEyfgicqyAh4Y7KJP2h6EfdLN1W4TjJ5sGjuz5gbdWmQHRoqWPF2tyiCFeJQNyNyzcm2113",
  "key7": "3UVtTtEKUFeNXXf5J6W48XVxfqnjcPp5QeBYmGpodXB1aPvapiv8g7TngS4vpBSssH5Akz2sNqjnEqT3ysJaTHbS",
  "key8": "2Nx5TqkQMgaU6XZqSDyugFZkhGcbqoorLgsnoBHb1sDHQWVXfr5LH1kQJjnAENsGjVaGoMM7hjXmc3jTWXFhMR5b",
  "key9": "3fvrBf6QXgZRtEJpMgb57FvCuKH6DCtPnNVJWQLyP3vTbtZiXsNd1x91gqNZwn9MbMDB142fVBxtGi2aqqDRxBbD",
  "key10": "3nxaq4h7VJaEoEhp1KizcDMtuWeqU956hpAS53yCixJRkb4bxWHVbDAtdVQgtfF1QSLBi1oC8BcnEpvQDVSjv5qi",
  "key11": "3rTeWMGJzcoFvFwRxX6nUGKDafTwaE2zRmYdJAMT6wTi41wby4jo369xPj4uYLf42NyWLGUF7ZZ2XE9QBcdZvveu",
  "key12": "2amuDYEkCxZxSapsFPTeqXy47rTj6ftrG37Zs31ojua1dNubjnXELy71SyPdxMZooFzWw9g7ZcLJgfzeRToamyPF",
  "key13": "5JoHCquGGAsoXSPzknzM8FMDtwMA3sGLaYhh13yhYNRHHejqK25b25BdTKkkZDPe9TJeGWcCBL7qQz3vVqZDCVmS",
  "key14": "2YWq1dYeDpDtENmdagh3GdtJyfMjwhQGgxZLNZomyPZxBK6svB5z84EMHxbRce3RAPyZFNoxSUJBpHMS6R7sVSJb",
  "key15": "2efZbKcJMfWqNUByFKEbtsGr6x2UJefUVp3YCcCeGCd2NLHi1jpGT4iUd1WytouGF7Btn1oAKomL1U2AwNxsH3Lt",
  "key16": "5R4MYJ7x5iqfoXiz4uaX3913tDqioTScSaxiPx9r913aGdpxD983vyBq8ZARUZhvXM3DhAhnBkjAAVv9EH6hQHHY",
  "key17": "4oReRm3BttWqA6QS6XG6zbF2UkJTfjwjL2PKxgQBy5VmiV9fLs9X7YMrwinypMfQno7fxZLq9dnFCu4YTUEayvvR",
  "key18": "5pzPsY45iurSLdVRugyNTyvEq6H3AVs5U7MTY2nZ3MfUNsgWbShw83p4DrRSs2G1PajKkRMV2m1EtMZHu45s1rMk",
  "key19": "2XUwBTT9UziiqrgQtR1ZefL7XW64hwrh8tLjFYrvXUFdeEFndo34c6XKBeArqotvRXWaM53mo66aDr5StEmv4vNa",
  "key20": "5viqLipzrBuiNqTbArpVrLA4pwK9Y9h9jXv2u2QVFhAzz6tywJMgYt2UMqYGFzaxFEEeJuT6oiULHPVnHRnXjvLK",
  "key21": "5afZ1JiC6LuF4Z1EThS4z3TUFwzqGMq66kUUDgg1WzPEqv9rFbH9WLFaszwrLoKzFJD2aMRdhbh6didypH3QUdjR",
  "key22": "3kMEio2sNho4yBjvFd4KGfARLncvqutYdMxWYRa5fC7RJCywrcjg1H4oinQ9SNhzM1PHKtQRzyF2H2pYRkGrDJUL",
  "key23": "mS17CLvn6uuLbyJcBKBSZbJDzZ7GttLT9Xu2QNN9aFnC9D61pYjqGS5XbureLPgwyC5WJ37jt1QF7nv7wr4Naup",
  "key24": "3AfL4Z2EdWW2VAjbFVeQ3YBTezW9CZAmEYDGDf7bqdGqcBb1DriMxGnUuy5ZirY3gTWGs7r3PUnvdrop4hajSw8C",
  "key25": "5sQ3pXAqaJmL5pNYAQkfn7BKDpVUYYPyKZYe5UMeZU3FbuavWTBQ3deBibCAGcVWWDs9i4B1A6qgn5vX9kWcerVD",
  "key26": "58qQ3GqCmPJny25KJJH5ZnDQH6n7f5rXQyCxgzHUVADULh7aNZYCvFDjyG9jXR18EktfvzNiw7DthevSx8Y8Y3XY",
  "key27": "4PHnkUwwQdN6vUaU9FdKGtttYaefG7VbUr9x3sAjc5QakEbspaVffrdPx7gfYQpLr5EBWpFjoUwspijv9TQx8boP"
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
