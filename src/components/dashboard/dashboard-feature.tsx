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
    "4fM6mYXdtCEn7aeW5hsScuu2Lm72RBSkz6pETKr9miFf57MoXb7gFfeNVVwDu744yyEc2m4e8DvkCM7fuGQhaLe5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2TZunhUmHQgKcxk6BVnkTdSN3shBskt4QeDWAoae75mfQMGrk46CmVgeZuh3reFJM7CiYmyFmiXQ2so5ug7NiE1x",
  "key1": "ifkHG6KxrbksXT5i8RhUMotqgWmPyB2NDxgGDoCxijEe8uZdCH4EvJpNEBD7Xg9hZBCA3pfa6DuezNjMGDHAzvT",
  "key2": "3CFoKG2BtF2dC74THYreZ7rPBJPjP3NVmG6vs4Vr8jjKe826B1xKvWcs21bqa4wkN9PjnzH52svaeEvJ2Ho3XEWu",
  "key3": "5fEZ3vsrUNAcun1VPA422VXWeS6SC7R6pG8hvXQCMgq5xzXfaVfkoM83Wevym4KiFwrM6nUnP1ZQ7eW1AYPJrQrS",
  "key4": "FPMTtP8bdt6q6TyhccxJfBj8nsVhv54VhaQiYj8vyGBWRe5bPcZrUTBG9fLm4ReUQbpRJzYzNX88XNdgmZ5UBNr",
  "key5": "uxeATeLpdCLFMohafLPpRjZse5GV5B3cs1sBdMbtbgqcG36PL9VMribBcZvwihrusCU6g7CSVaTpYXD6KG4EcGT",
  "key6": "3kvbZfDjvQYExAARDWB66t5RNvHorpWfN7y6fGt7YrfmuZ56t7d9qAkL37J3jD6k8SviGiyMBpW1J8gmLyES2dEr",
  "key7": "2TRpXtb9Qwb6XtjUTksnaQKy2tWfJP5JQfN2VgVGZJiUimZ4dnzFTMNuLrXs4aqte8nEtHhxiz5Bi3n5jrmtp4Rg",
  "key8": "2uaSgcC3CT3dWqB1YtZamQsTAFhEgg65CuGEfCDWqUTqTJ3qECHRSeW7vF7wb8WB5QiVxh7ubemDGTsJwH58NpXt",
  "key9": "24c3eyrfpSvtXJQRwj6dzc2eY2YTBSTsFshwQUzSjqe73B31duSE8LLevo5XjKPJeQxFnbSXmbudorbUbtXzrHdn",
  "key10": "AA1PhA6WhzzszLHUYXqaazHpVK4wBLjCVpzkKMdSvG5xquhZ5mb9QzbqBFQfWxggn7oCEFmS4vTNGu3uNZA8GWi",
  "key11": "ypMqmT9BoRyCrEwczdfYuBKpo5hgenqbY94EHEEwQcwvPVLyniULdzsvYidRtePsRsjA8NsJCArNGqGfpQYY32d",
  "key12": "4BzWkC9W5CBDqbQq3PJQQVu15Dvx2ZGtpAqvyg7dEmob6TF58orSuUeYSFiVyHM23tcSdPm9p56xdhgnbqmr8G5Z",
  "key13": "2XhDAPgyJTCbHkVMgGXz9kFJYMXSsgw9H8hQDear6bYEjRLfVKmu1x5CDqBKpNbsnYXApTincJaKDAdcLYB7FRaQ",
  "key14": "4nJCx3JTQCVbJFXv5iMKeGPZhKBCnqfTzc4URJEVxoWnzCF6PuarXYGWkUgo3BkmnxMVkgXMnr8aDZLZLV4G1MKf",
  "key15": "TCLF3EvaXffoAq7S1zTgqYFVuaW74h9vyGPihahq9w75HmuRBRf82y28YTn4WskvpZNXHP8gevS6gyEYaQLa6z5",
  "key16": "5LPMoX5wH2m56tQxCTDpYtEPdz1PqFn2dprCpyHWXf8GhfXgABkPbSX2w8QAFCkEm9gsLVjzd92nwLiJXPMeMRPv",
  "key17": "543i56esWbUJcMZvzZPWYyHE72Z4jcqkbZe2Sy6fMQrWDNpd47nZRdeMGq1kxKEwEemVLtCe7UedXXHStpHZvwv9",
  "key18": "47Af7pyNGpSMxbXpTQ4e7VqL3iUQgorGjxcVynG5CSYLKMq8KmsY3eXPBWc6tCUWpL1WhfwZku3JLtVzJ9xAz7Na",
  "key19": "4gVkqgRQ1DEZnETvX4EFfUYzWCTT4VqWgqWUXdFzEzBJdBrbjFLmqTnjYgKdJVcuzyfzSUEYEqdwxZRmHMFHTYfz",
  "key20": "HW2cxrdEpqbFtsTz4SpGjtooPDR515G7FP7FND88RfkT5JPZVd9uKAhakv9Hnkh1CizroHQQpEZYV5vzhzn6Ty8",
  "key21": "3gj8sTdBksBLLFQ6yUTz2WeZCcp58CfT9XmfDNmhTUhdUeEReWvLJ7NGWFxjgkui6Npnu8LWN2qa6SZu86RGmfHw",
  "key22": "5zDWpRJb7goXVEQmH2EdNhwW748oGEuALuLGd9AuWiqiyaof5CUs9ydATKit8uu7jiXSJ78KYx4jHovRzwxKDj4h",
  "key23": "5j57GjWF6U8mjNorZin1D6QRGYrmg287Ahpx8yMDUNAsZHi9iy9YPWdq8UTqr88yf8yfLk846EC1YhBXnE6jAc7h",
  "key24": "4dzyQzxJ3M2bgYdASkpZZwS7aPgTUiCwktzypkAXmKC2BjmoDyFUowsA3LB7TDrZk8TRXsivmJNsEUrSh56HTchE",
  "key25": "2MsBr2JrfwMdh83q7BguEnPnQvAh5EmkM5smHxmpdjRhNqYHpkcaZyv7NKw3BVvzJgdkkwP7UvEyVZQtsx6uQkFU",
  "key26": "4cDLrpyZBrtuPXDMjhKvCEvoJvqsFcCF7eEbsXd4qgL3XEgNVd4GmJ8zP5GAypkRcQNzsTjuZVLPJnZmtknQYsUh",
  "key27": "2CMe8kzCiQtoD5tf1DCPkSKLvhm53kL5cwbkjA2dGQHPsyT9mDVKLczMsnNz7U2pbp8M6fMS8NLTLAko4EWdoYgb",
  "key28": "2AssqqdA9JQGxGkw6qrUvdbAFFvTE3gcf7KPN9EJMCuHNzF29JpSp3Fe6nLBsgmEVax2W7sUkjGb7Xe1sboW5XnC"
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
