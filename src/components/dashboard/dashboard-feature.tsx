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
    "2AX1J8hio6TGyq9aMyF1ia8AuBQUbpYBFrNGfAufHbsoyvZPP477CxfG3ko4gd3Po9Fe1quZmvA5SLxXsaohAbqw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51GgPJ5u9AUjgKQ892AWq7XBXtDrdoCBWFLd7EA5dW2PtfdqeUHpHYm7RDBbpyJbbrR7PAQNvJZSAJ8gGRDrwb7",
  "key1": "3bM97PULYMpUNXrJzHtKjqwk1W7fS8WVJJjC9UhuR5qmxmRc9Kkk1B5v8mZ9DDSrPySdWgmShvQT4yAZoNJ6tgvS",
  "key2": "2mLXrTnoENJCgn1mEESRZXeULHqsJ8jbGHz68XTGNF8aW6RjUr5RBsFRCCqLvKmZhDHPwtWEZW9poGo4sNGm1dsb",
  "key3": "4jGG1FBY3RWMFXaTFegM14qbAnXQjh6zxZQf7C4nHZGyVXrHoPtiunUUETneYJFbT6T4Tah3187XFMSNBRJPupqq",
  "key4": "3Fkvit9N8vijtkG9jXv2daJmmdzPBqosL5C6o78QAbrtdHwgwtRjBiyaN7ffmrwRrxm94Gyzxcx9FAgA9y5NagnS",
  "key5": "FBLcicQovHEkhicy69EkhJYUG3q8JQY5yvCbKVxwFroruGtg2i7pnjRJk4fkcpJR2vAUqvxXzQsbrixggaYx2vm",
  "key6": "4C698kXzot361JXKHtYAoqguWdKUPPkxrLRfjpKkefpsQsP94hPUcwpeyjaPCLJzaQtUNZau1MaqpjMo2zfLRPSx",
  "key7": "58DUZAFUiqBpo8tGAg2No3R2S6SVNwty9cJYSpT8FsdcoKFmoikdX957YNC5zRiuYPKg8ca3gZounoPmtWpf7Qop",
  "key8": "5tjcA3VuPSawPgCWazz6WyyanvrEcm6Ebpz3iEXS9GJCALQCav2dMFFBaJsH9obhgra6Xy7bZEo5D1LDDB4J93HR",
  "key9": "2NA2dtM4vAcGfX63b2eHFSE1ZnMsPXjfhWJ3TNvnYRacxAaKm7cRi1E7W1QjnMivNUJBqWzvGReSfzjowxbSWTbF",
  "key10": "4Jew1wTRrfcyKTwPHpqocdynowZ7Q8kAtBv1KB5Rr27dzeWvY6PYxqPhLSfwhjXMbB5Va6LgaRfCLBjDEpjb3Wop",
  "key11": "22RHWaKc9zyd1tmqjc2EYU6or1TuKSBxBnVSppbdPp72b7hJVGHeDuZcRscWfASFnnwrRTkD5KpuFGNHESBCmcN7",
  "key12": "3f8zrDqY3JKJeDybrYrKXicwoqN9g8pD52Vqjf6hjB7JFhN1K5Pr4FZ1m7YuEvHfRb7b3y2dq1XMaPXRVJY87AVg",
  "key13": "V59V9GdjXvF546xhfarxfBDQ7niPrdnQ961Mp2vydPX4V5o9XtkQZYW4EETqhHTo9PVXfZTdZLae6VPDhEaG5TV",
  "key14": "2CqNSiHdGsnW1b1roeDUZ2PEhjNpxJKM4gSm6YXvs81soqUq3N9ZGEqX1PbEemBwiK6MGzDqU6zfNWVbfw54v547",
  "key15": "3kXbN132cRMvTX4ywnQkZkrdKRYVKAgyovGjTJuM98hcECJGSvXySSQnuV6nTmHLtcnrWP7Vnwy5Rnk8SrwQpxNE",
  "key16": "4hJP6Jvs4ZMDNcYifaX5BChbHAYpXZNT9gbhezvLVDXnFYJSgMugyTAuCLuokLdHAunFh27boZkjWzjRiZBr5bLa",
  "key17": "4WtJHDbwfmWQxNHhUfJ5ruFriWcABNn1VEQWsnP4NH71KVp3Z8Q6YG51K2RV4Hj6jeHW6cXnTNAG16MXRDPhE5Gs",
  "key18": "3tycZsqecGLUdsxf2jgeEUCh299KDXMoP88x1WMXFfDLpdrkmJPjz2y1shgv9M8rKHxDTSips5sETtEkxM3Y4r4x",
  "key19": "4bBdNUuqTfNA8jVMu8YYTKeRFb1RVoDUhzPCvykDq59hLnVDQWMyNDhTdGMDsh774b63BYDGZGUR65MCojukCUXK",
  "key20": "3ejKaoRAY347u48rfcJJ9wMRP5VDcubdNtyksBYuNrtbMWW8eGBzbihSR4GBoJ27gMNgNENMUCHSPBEjo6k7ZJji",
  "key21": "26niSj2NhrvKfPwNQcQuQRwQEYRr8afEhyfRdruPPtkvbjp72vCjCFRkf2yat8eQvziAganzSidtzLQM9aqMiyAc",
  "key22": "2WawnRb9ExhJbSkspBpDcmikMNwt7EnCDXXPcrrbHxp9MFXyUdT8i48xTzRoa6HkP3kHJXBxBfgua9Sqt4s7HT7h",
  "key23": "2dtyi4eDY4qaFBF4HHdzz2bAroL7X9AJF4i9YVDCdZuHiaYZAXrXaQjDeAXDyh7zvFFsxgn7cGkmPV1yQwNBP4Te",
  "key24": "JvTYUJxN7FzNaTMDx85iYzAZg8FyWNTm5j4dMooM22A49BoMMEWZugbGZysVYcXDCbJ5FkX4Z6LfQvv2yin3qqH",
  "key25": "Th4LkbyUUDsTcXDaSB4Dp9mbt1n2wjkGb3jD5SAiQdFdPc6nGCPVJ1cpdXUo3BrTckwrhXwCXjKQEpAu3rZZ6YN",
  "key26": "4JuTi4VH9rvaDjEujKKXVGWqyKoKhRhf8yXAtLCL4uxrJb7w2twDWck3VHL2XVugVjTNWpW53RegTL3RHkunf4GD",
  "key27": "4i7wfgzJ1BmnEgtMgzJT8SQZfgdpy3CRdNfo7FuPzCeh1LkhuzwkUQrAATyf6Lqi2myj5Anpp6YDq7J2np8VfUL3",
  "key28": "47Q4EBR4bKpfgjsxCqLKZEJpze9xFg9wa31LUz5kvEYeFzBzMAJk2zVGmocsVWGH2sPMCnzogfNoQqrByLPywXFZ",
  "key29": "2aRnqBdSFU4UcA7aomwUwBq1T4unNQPAS3QbK3SkPCyqTnapBxAqdMbMo3R5WwoTqGa9MKeDkDANWSXd7QgSB9ww",
  "key30": "3zUVWMzBY2KAsuwbqX5S6gFh5XA7Ud3BnRk2wugnKd9zvGdwTLAEFTacaoHc3nggKXYzPFAs2y98VpGzbTT47xLw",
  "key31": "45UNRXAS2WKhkbJxvGakskgv7zP7sgzXm99hkNj1erCnZ4QioodDjvZ1zGoRrmqjWXoiDx4xTfg6TL133xCbHVbT",
  "key32": "5etjLnUsMQS67NDgBv6zzWcUks5cTXBVASYhFTTSuZNePUT85uUfPvwZtobYAcX8iXDUpnJPymsEiWgR8N23rDd4",
  "key33": "4q8w3a7L9qdLFJnQRhJhJRooW7ZsZAJZdE4zzjtdy8d3UoLJzFv2DgjXbexX1vYDpWFhLBXfrQTYMTkxt336MxXy",
  "key34": "4ASeHNKdXc6i7JmYq929TAZtuxmP1Nm7uvNC47dCoJ3fdUQAwCJcv6JHKi6HQZYcjNtFT22hU7mW8JGPoJkMvtLx",
  "key35": "2Gkq9sD84JuuVqYmWdK9W5UYHkJJXmqMHxfLtMMfCercRPn6opzKQofMQPmtx1qYjRxuBu197EMCbSQon6EnzwoD",
  "key36": "51yVRim1LqQstY39MkdcyMdWWo2otH3FwW5TkSq9pq9VjhEUUiHo3kJb1Azxk1MSyrGzYQdJK6qJua1bqmXgwYNf"
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
