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
    "3N2LAzjWYXdzuU4CBgfdPZsiS3yd39mwMvZw4wSCTcyWCxRWn5u2EanqmRoe8y2NEwNrsu8PTjUoafqftJqSNovi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4S2iFb6e1bzyXBHetafZBAV3TjMfM368vdsp8qKNXsZmuB5wPedNTjrWUbqr8tMwoWakaNJS6UmBWRnXXH3gffDk",
  "key1": "5FZNmSjXEgxQ9e9wtqYg3AG44WXY4cFtsc1hdSqNb14wPMmah8BaiGRRz8ZuUQN9BxjEmd8Q54xfKzr4uwqExPqp",
  "key2": "5TaBhdArj5Amia9YUxGeDcsww6W2ZeKy7g7Qpg9cAr6UpsUtLwYsmaZb4vZNGpxE13yiKRpA1NPzLsqgRXTZiTpw",
  "key3": "5X81XMg1NyWH7qPAAFE6pCWd1d3CQX26mNSQTjouXAWkiBB85cGwCexP9taXJQoApYavcmW5FUquQ6mfSULYKd2z",
  "key4": "4nkNEwYrHGw6RqjfkgH6rTNX8E66uCaKHK2QBBCCJd41vHNHrPMygYxhpkpVGZSbvV8vJ5HsjXupQgVHxyMsYaDk",
  "key5": "Se7EM8R4jAY1Gc5uMexVNuoALSmmzdJ9tXTVhG84LG9NC5cWMtArLfiJgxCghPAUhCypA6HrRKBW3f4i2iuxo4W",
  "key6": "2nuYXbg7eAWKh8WBAgSbtYq94SMhkA6Bs2ByvMgYUCsVDEKY8ZXUv9h7bEZH4PkZkS44uA2XJkP5QzAszw1d5g1",
  "key7": "4n1HuKaTji8stHXEiXLPm2QpxN5jppQMKkbFFcVixDd64WZpB6CdpkncBYJKdyE84txNDLjHhURXWBUDXmkVPGgL",
  "key8": "4mXa5vWPRW8ciFHHb2tzc2wELSFo7pSNkMfYhowB4g8K1fA11EPVRCgKbchzoAPhmwPBzF6aE76AUeLoQfRrc5if",
  "key9": "3DFWw16MBNshyNdgyEVWGk9qQJZ2LJiVkhz7wVy9zX1TsFhojDkz6pPbUdwQyYT9Dzx9kdC7fiPULHjoY7e3yjGD",
  "key10": "4LYEUypHdW9xbZLGZdN2drE3udDhanARoVkaCArGDw4FjVyKfobmxtze7ZS7pgnQgUNwyZLeBjGeM3L3CWqrofjL",
  "key11": "2A87jyTjTZLoytoXrZs6CPd7CbE3LKDm4BWnDiaKPzZPpErQgvKSrJ9Jr9ABSmDYQm7fAbaaU9h6q7a4TPAvH35K",
  "key12": "2pp9925PBrcJvvVFgGDZazHb7XEcc59CVPqyDtbvSRUKVyNeuk59qKTazsY5rnK39ctitUxENzcPXHCPHNH26WkL",
  "key13": "5tDRGojgXDksTA8oQwummqy6ZXYhuZNAvbpKTekxcjEBvZdbgHTZfdUDNWhEYjQSMeLbRwaoKqJwmTLozk6dBy1e",
  "key14": "4sKQbeWb5tYuUWehE5DW2js6aJ8bRqJoVCMQDKHAghVMhZcya5or2qmWGtqkC8SBzuYHTACUJ1dAHgRwfwogA32E",
  "key15": "39PAhgrzhBhzk23K4bF9kuG6NEjFH1yiRi87jjArbmExURtLMB5PgsVhzzPV4fFTQi5vVF3ZmMBhxTF2ryfuWTeN",
  "key16": "2jPtGkpeVcbGzLMixca2orcaMZL3gi8vtGxj5Y1QVWeyQRkxd1V84rH2ZnAQqcr8YAyy1M3JpddC7vXuSqK45cMv",
  "key17": "2EJx1HGXRiheyctr8U2NNcCxVMEbUyaD42VuQRxjauox4Xqbci711kFzFhYULxHi2X8YWCABXysW31XvZq39oPPx",
  "key18": "2zaHw6fsw4MwWGg9eNJJGBgbo6imL37hkCUt9Lh9aiGLfKFF8HWaBNBh3v7KwK8VnD21gryfo4P9D8FtQBjDPg73",
  "key19": "283qLuLWMstanR1AHJvQVcpADscxzwk5ZogiXtAAjrKZDqVZAzYafnBNWRnMkccgvdejQSoEWULwxQEiv6DxtL4M",
  "key20": "2Z9MUkwcPczw25XLN3mHcohywkboqyovpotU6dDTsqfZzmDk6rWC5YDv63ePSf1FDD6faSwNvJ3nSWYq1xW1hQkw",
  "key21": "5jZynQvwYKBUKt3F4tDTmSfdAYMTFXaD5DD3MwQxk8tTBto191EDxYWpiyc1kJnMLCtD68Rqi9MwE8vMd8QvwQrw",
  "key22": "iWJwFnH9wEwmtCK8Lc5zqdZ1hZvnLo27hpDv26MKwUNYfSgK4LbLvsuSoaEeq17x3XDE2oXC66PfseCx6G13eat",
  "key23": "45XdREPGyFbe9b3u6d23KcJUPmZn9Xqt7irzAXb5oYNEFVQy28sWCtrUm76gmBdXWkLdAhf93Q7hAVWUVdwop88b",
  "key24": "5kxsPynSJ6rxN1j8RZkY1Mknbah9AubdqiLRDmt488vjAMGtTXHYjaLwBgwfXxPRviQjhSvKqTPnhQqZanPhJ4Sc",
  "key25": "3whR4esd5XrXnCAf2CCTHFPqWD9RqprRczk4iwu6HAU3cYcNut7y7srjeHpiCgh6iw8tC9NupvKeoTyLKYMpUCYL",
  "key26": "4YqwFccbpLkCUvzf8Enhiph8TPUm89mFWbrtDB6G4UKVw38YyLWk4Dm2yKeVCcyXYTLP43wLmyqcitEMTGwko2Yj",
  "key27": "5M9gycH4YiWizwuW8GqtW7wUahoeej6yJkDgHt5EZ9ftBikxacZQXyi44nWcegsrhYpH15GFzMa6yEojeWmRegwL",
  "key28": "1Fo6Mj3614T2sYRLs8W64mBGUMCG7L73GEH9okvbYK2uL5kqyjoZBSLb9FqmktJq261M58HwRdNvQifBjns5G3E",
  "key29": "2Y3LPHnPVRLWHyUoKgden8mhnfjAumTgMCYH8sVnq6zo1xcHJ1KMGBLokEZb6aFDGDaZdTCRVDGzwLrsmW3THuyz",
  "key30": "3tnNzD1RRrfDR2r8xAzoKYJHJohyQiKoXusgVtokq9tyYAJL7wPV8fPXQJj8ttLptHTyDk2349bCNPpN2RJMvdYY",
  "key31": "c9CovEv4nuLkaoqxeZ9JcZ3XtbyAubzGaU8CfPettwnUWRvbBvHeQ8qRebc85zshcBVNSy9tADhQtcdGYUwi5BK",
  "key32": "Av61UQa1f6Sv5cVo4sXAeyK6UucyHxcWCeY3WvY6tSJY3nP1WoCgk1cVHtRtKCUQjwCTUGU6SqxrDJKpCjsvXUy",
  "key33": "2dUiKdJ6CPNZqEg2rjjiAmczTwi5SqkQTkTrF54paGuD2bDieVpCcaXEciuqjLAUyArBJxiP6Ack3Dt38JfKKHCA",
  "key34": "3UspVhhpmH5aQzbcxnuVhnxspGBtychZwNmSWawHoZsQiqZfd3yTsRUf7j5JNhg9ahm2Cgy2fLQGGdY2eGnvp27D",
  "key35": "33YzGLyGJQk8yB5KjDZ44hfb7SxLzSoHsVpz5SZTcvfYBGEs6WAfxuzPSB9x7KzZtDVasE8EpLaV8gSxnnND9C55",
  "key36": "2GkEbThaxdZ8UPybwYbqFJXisDCy3GJoBkPiPMqD2wRRnYtG7fFFme8meX9GPcnXBq3zRrKUe3jkJNeQx8mi62yK",
  "key37": "5Tb1bpGswYGPjZ4UrEbUvuz6YSEJAkNBihqGKqUcaWdqVMvn8XNBsHdCvB4U4p2ZDkLPtUMDvtxeVo7mYcZoPnza",
  "key38": "5zkLU3f5h7mXTnzxbZnepQrimrrrFqdhpmLgJBqkBepHRt2PVW6XKPhwhcTydwu9uZKidW3ZQR9PrSFinwtBw271",
  "key39": "UPJsfQpiA3AVx9VXPg1vMkSLn3vEcjRUhsmU86r6ESFyzcxwzfq9bbVPtGZgF6uo5bxQAwhsNiHiBUBGYyqaTMX"
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
