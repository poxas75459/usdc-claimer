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
    "2SdZ8cpyHQ4vuMeXnoEip8kRrUXN6aHaorG3Wv6LVQTpM3cUe8u7mN3LN9qQS1CruEkKPhdJnGFHi5VqKsYbVCNo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36n81PGnHQFRaShLtpGw1p2DAN3CTaAhB5wuHSZ4a3kLgnozrWGNtJDdHDUgyXeBJh1b37pDDBSd1stQSQoCmScE",
  "key1": "5es4qHBL8ScvD89LtUK3KhpwWngCQHWrruHj7xWCSPM2a8hZo9nWfWedSo7o1L4bGQFzwaLayPnv5wDFVXmgaFR6",
  "key2": "4k667pnQgYxvcssg2oKkwFS7uPsZwX6De7F7WjP5P9tNwyzCp9eBFgpcJwwsJp9wsrA4fhKuBX614tdA7kWytoej",
  "key3": "47zxD94phg3cBc2YKvqYMmPjVmLSWbetDQwqeLKmBrFg2UP2vSW2GQbxbkcHRV9oWWgc1M1Lym71dW7wycAWxqH9",
  "key4": "5Qtps8v6imFmETJey9b84ezVn1bDuZCpFe3T4jxkPLr1CnX5PVcT52unSW6WY9svGjNjR8cGqUcMmfob662DKoyW",
  "key5": "59sKcaGE6HXhea1MX3VorY5m2vapKpx2NzcGYigiNTxcUFcSpt6kgTBerFfANw2axjETExbtkqXnSVpsg2zX5LNX",
  "key6": "2DCkzpnbhGSYPqRJm4dq87sBsPu9JVwoS7949gGE6tKF5Fhhzpo91jYEc1zEEw82esrfBHFAWeFkdoLoxDFuYA5C",
  "key7": "3HKZKVpBRPW6wNaYbBWksSKKvJrJTko66FJ74icRTmb5YKd2XLtmBq3B811Qg5Uqgm8GZoVVjVdxEYgaST55NLzd",
  "key8": "28fXP9bzvFbYbmVoBtw6VDY2LDvq7utZkVVJetttPiSnNtMcdFfxdGa5ig7vyMBhyQFreB3bf8F5Th1YJ7UR4YdQ",
  "key9": "36mhcLv8zM5j6UeA6JF7CAtSfv9w4EhUHnaDvQ9YwMuKecFNZLQSZRcqFd2aDE2UFRHtQziCtrRb1p1xJ3RP7985",
  "key10": "4zjzNpZhaXAbKErL3NNCTGEewLa84avdGcYNbqAn5crtg6j8ydqy6po2qpWnVwLWwmz1BbevEsA3ZQH4pXA63gdF",
  "key11": "4xuVUozp6boMKiVcRB9hquacX8EfydVweybEP2GoGnbDejj8yo9Ubtm2jHV3dJAGtgMr6i6QcmpAEQVD5tkRF9V5",
  "key12": "4EAkcxdbxxVsXDUE4FfqUa3WmgrQTxUgzq6SHpcsCV4SdZbnXaMvgxsVBYw32siqgtt91Pw4jEmz4pvub9jQGVY7",
  "key13": "2CcmEa3TPLGiLCME9LFTaWWyfLtE6zSKq28ZRCdPU3rxozcjg5e7aSURsvAANY3q3vkLwLxcKqNcjdycuRrTydet",
  "key14": "53z3y2eVLxedMs1tvyMioacxok7EiWJVXZqHKjV3xdhNwmkKEt9JtwYvYK4tdaWPs8AX3jHqSkAMXJNugF7JtWXc",
  "key15": "2ZeD7eoD9Hn4feEZw5TKm8WzEvtgZHPBTrDghDkknja4f1zG4D4tWEuM54JzUac6Vz6WNV2wzu2UL3pvxfoDRuSx",
  "key16": "38tXibC15ZJ5Aj1BPThXhueWRM8qAqmia5tsUrxSneBMSxRfyrfsZum4S5tZm6czehu5iH3p2LjaZEhpv6tkYYpa",
  "key17": "221urrfmiMKCsoDp3RMYAm1ogzAd6DzkEu97fCnwWqZ961oWrNGTpPwKPYdwjEYLFL1YAmSCpfZLA66CQN4Qhuzx",
  "key18": "2uUBHHR338TjRz2tT3iMhupakqNN5GYB75SaKejittj6ni6377zkSp1TKzHhtXgRDhKEwgsCfuu2Y3Rsj6cWBYAR",
  "key19": "iqfaE2nNd3j88fGWiiB1jkvknpSCoCiCxPrGCdiinUL7DRGDxi3kcfGnHMBhifwEeTdjXgSLjC3jUqLs5KBoWgV",
  "key20": "2uo9mPBG2T1RhMMxk7jznXJBQ2PG8pRD4s5WAbSjHLwwKzQHu1uZfZQ17jSbkCHDPvAcnQNzHQwVhmzzjCWDLzVd",
  "key21": "5d2WLswGmBXYN1RRf3KRRH4B92Uvs5GN18jqsm12gTWccVnefMYUUuSEs4HqUf5aMvkFWhZ33D8ueHkgy5LPE9aZ",
  "key22": "4v8EaxRc4U8x3iQq4Q5CxrgdXBLXV5AZwsVq7AdBAkVJwwFSHjq7FXd8zaF3guCmGoBmR168Sf5Zy6ztzuvCmjst",
  "key23": "LjLxG8pqppKGR8hMUc7pNeS1FAKtoc3wVJZtf59b93bd58RMdhbcxWqg8CaoHRTw3qDA7BnWULqume1xRmGdyST",
  "key24": "35hUWzWqqCNKv25DuWCpQ2L3WwcMq7vHiPAK7dP5nh51DhmwBntZvqWEBDMStJ4aWUgBvXwAUwVQxwoH6NTaJ22S",
  "key25": "Cce5RTdnq6Et4vuXHBqaPVa6ZD73wMiUkEFaQugeKP7GnqGUs7XfrHrLpo3P7LwrjQZyYPdkjJuV1Rp4U7xFAt2",
  "key26": "5JrbnFtZTqfxrcFVv3EBQiU3c3fADaXEo6yDsyDAmwfVbzRbeVXG22e4Tfw6LUQ2sQRCoJXrAhZASwKij1Z5fUc2",
  "key27": "5x3ietyLVjMPm5SfF5haJYBBbpvPyXJHUrwxiHXwkoXFBvxSjEkGb2oYDgmsd2KnGCZQX3LhRtA51kYRBitbN6Kq",
  "key28": "3vtVoS6nHpdZcbeTGK186cY4ZLrjMchjDqefd9137TBu69P2mb8fZrsX35oQ9Gb2q1b27MnhWzFcwGswHdymAYxp",
  "key29": "5MYmadVZh9B5oSMDwDKjXoM4TaTC58xwTRJUaVKvip3KsmwSsfWYs85wNWYxbnfaorRwMhm7zJJVFJsuLiMccUME",
  "key30": "2xWtRCcbzcE5SajR3wvgt1YnZ1aZKTcsGPwx8JZJ7GXyoaq3pLpHpi8VfZqoPsnQKUZVB8bJ3H4MNX7DsD4T8kZb",
  "key31": "4sRyDp8xWa1216EUBScAbLZb8p2qccv9cukH43ipgfnLqLuS4kSfYF1c6yrpZLLXfcaM5tmbgaY77m1hXD3arRfs",
  "key32": "5qjrnJ7rJEAizSs6Uk3KB9b83fWkjZrQNdzZKxas4VHRFpoBBb1TSm8LTdEqVMXP7uya3USZYFDyBfE4dt1fPoNh"
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
