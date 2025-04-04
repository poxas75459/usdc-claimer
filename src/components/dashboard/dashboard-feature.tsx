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
    "5SwsbDEg8YQ7F7AH8cjbpy6VnWPkaRN41Wi5UqH3oyAB1Ywzbq131bJ9bzrTrYR7iBw4tMo3XDhjb4S17w1hKxfb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3MTHMwmZDZ5sEVaEbPSiz4eGHMEat5stmrsHHTW1txXDn64SQHv4SGfuFy25N8e3NnoS7dH6HMyYBH8DBWQSMMzc",
  "key1": "44sXyS4vnPbFsNR8Wufddy8xeuQb25mgh7FQZj67ifDxKXUCGmJyNvdM6nnqVMhzYAojAr2PurziNkt4fYjU53HC",
  "key2": "2fAmgqKjFGkvpHNT6VwAdycTqam1nopYDFcd3bmWNT97ibmT1HxUbMUvhNQk1WsQqojKoeKbkuq7o6LyQdhGu11f",
  "key3": "D8crFs4P1Cq4DtpXbtPZHYxQPRxrhg1uTq1JrCLaBsPkqtnedx2ZRrrX1V943hgVLM7zDmFSuC2uyA4312FPM65",
  "key4": "61wiRT8zVMvbbMaEBCibX143DGyS6eYFNwzxQ64bnx9YxsihxwtEjffvfREMQzXJSfqqpuwVqboMyFBJYaNd31Tr",
  "key5": "36bQmJZq2tns29hx7uHZGMxU5szfdvCc5tL7NZw6s4aBLR8WeqyTj7o7V4BTPVBztpFSu6aVaRA5xwgfLs4NBfzt",
  "key6": "4Vb8jfVkWpQXzSc5bF2LQ7K9fLzXPkA6WQSVjgmG2XeEbfrxnKuSrDqvPesW2NhUAd5aitAz2ukNKH3ejDHW5wPa",
  "key7": "4KwWeWJejYAu9tTqBTcK8WFT6EokPRTJFvbEXzHRUTgLdttPWJuWbNy7yiyWFpF13hSR1qb7TvHynqcL8WCLmHTj",
  "key8": "5UAj6juWbRnj4k4xXrENs7kZZydbMcJEXyG5xAhcH8KKB2QEPRHUhukxjddov3yjCPqu1Ap2w2MxZPHaopBnun2U",
  "key9": "3VATi8qnPHXN9fLFYMHReEVtLhxNfpNPsuNbktRJsChvn7BGmKSfNqYZmj9dHGxnU8qn1ErJcs19rsxyBFhUTRn",
  "key10": "XEyXdp8GVxhtwwLCMkanDq8UCQk1MgFb6McVVR2PWkfayJLbm92d65Bv72fe5AhBfBp6LrWw6mC3pphHq4EPt84",
  "key11": "4UTwqPTdWpRd28vFd4fRKhfavu3KX3j7iAef2PxeocYTcFRQQMSCaHPv813GG1S8ihKF8Zyuod1BbwF6E6m2uPWv",
  "key12": "3haX53pNuUP74BwK5kbh8CT5vjL6YGhiZQjbdMu7akwscjQvwgCvHaPpknXMWc4QhPF6Hue4vyaEX3YiX2rfbnjH",
  "key13": "4wwDiH4nKdfEZmHuKg6Fmok78JP1z2d9QgKJKYwAzFLzLutrGR4XiZnRkSTZMuSxL19ZJ4xEe3ZCdrwkRnBN5ojF",
  "key14": "2j6BwfrSH8pE4Perj486WRHZ2cYm91vVf8NkmoaJ9a8yV837uqC9HNCyZ9gxP1hZeu5AnwZfvAZ9YaiHRS3dfLiE",
  "key15": "3BFTUYWqrbtQ8asQPdTKx2Vy6wdcDabJUP6gQnkvHXxFkRyqzR89XiAtW5Ejsp5KgssBpAsN34unQ2wFLa7mTv9w",
  "key16": "ngq9iWdvR6B747XX72pSUxm4RZK184KSMmYTAmq6v3iXWMsnsgbuEuhWkhkAPqUFDR5VwFft4rF4xbc1kw45rbF",
  "key17": "4yD29GXxc6P6uS8FAcPFjfvq5zwJ8mppitTHQpCz1THSaozfAEy5J1mEUyrT9nUCEnuuvJ7ahtj5Hi7ASv8pFKK",
  "key18": "5YYFTdoRPaJCzJ733shYP6wrtdnLYewzzAzWr78d7GuvPdfPHuYSBq6wmwvJMyTkX2yjagQbV1gD8TZqYbee6xei",
  "key19": "2M7r4L8ZhgDJFJmBxTYQC6gyQtqg9u7BX8PazNsuJveUT6cqVAobGGPjnavC1ZPXsKHCgAwCRX2x7ubL589gMPZx",
  "key20": "2ZWAmy8MmefEAzPzDYUfhWMQ1SBddfyWpXnQCjUkpux6ddCVZ4W7ScYd21Erybpr7YaHpu4JWb75d1uicvmdVRrc",
  "key21": "5DUi5Lfojs68924hsBX8NCXRrCLZoe6oJFTkVeJE4bjTjxjGz1EynzTzXbQQsuARu1up2oGhKR6FYwmjHAuCSqTF",
  "key22": "5kJPianGdKjSjGKZrydWEpk8ayzsV3U1YDwMst6pa9Hqp6Ly1Edzarjnbzyhv7mbqF78VVDuudE1qGS3ZAuphhWR",
  "key23": "37RgKyLFHFBH7Zw14MLoGFFRwdXT9frZCpABYofccvsLw8YXUWyu59ZQq3zk1a1ashu8Ac5hHRFDYR79yhUYnsDH",
  "key24": "2LUUWyj3byp2xidxSyBXdj5JK9APgsutinMPLhft5YVcm9b98fyqyPxdT1eVycUZSCbP4iEHtRTkwsCR85FR8PGF",
  "key25": "2tkpye5T1HF96Y2RiXLXuLY94vPcW5Mco1cn8rE4icxu9NbjGeSMhP79E5wnkz76wiQKZ9PxxdvNkQ3hUnUpnAVH",
  "key26": "3DbjJXaB95STytAdv5t2wJp4mXi5k5W13gykSAB1WYyKxiXdsiVBaprW9fmfFEJxvsKuSVhn3HDvMoxvafuF9c3r",
  "key27": "5dLj7LU4Vpugn9fcS9qa9xWzPnArwhhodPbGpfzAnUe7r46djQVrW3qWQ2A2QE2CnzWDCsLVkTKFf6KNXH2VtKby",
  "key28": "fhqgVpBuo89smNxghMsmRjq2pGyKDXnqs3JhmvvqKHkd91iXBdjwDr9T9Y9nMA3cRrdBbBzsGqn3EzoawDR5AH7",
  "key29": "4iKPcnrof1oHVKQYpke6GB7NbU3TuV6yoLHN6zS3nJYHrduKB5F1PgaCc7h8aJmaDyAp2NKQFDzm8gAHjMPwjw7v",
  "key30": "R61hRo1izVzPR98q1WRzL7xstbG3DHB7eF3CqTYTKm5o3AE9hd8ZFx7jRDQ47nvFc9cxLTh7wPDmPV3XnHnbsiT",
  "key31": "3P1WbtMP3eHEBLWaNALRt7LNR2yAA1YRtPFjgd1GeqYzBN9heYqf48LcNhXUPq4zUtvsj9qjHuRDLb76DVwQHz3X",
  "key32": "3Umwyj1TWteA16GdYuYuZx1x7UXv9UtczxoL6nEMrSNu5p5orQcdqrsTQM9B8N2LvZ5MhemP2WkcGh3PVRzqmwzf",
  "key33": "2BKQEpCQfXmLVheiSHHbawaWQZhkeMNLTJ3yRvjDBegbFxtpYzYn6VNAHfu6xFLKosb1At2bBzmyqfzKhGfx6GhV"
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
