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
    "r3AMmyWzzwFEg1BWLtGLgpxpRWmDu2UMa4pzCf1UZQf9cLjyQD1HmvwEYdsYFLi6Eftu6PtczPiz1EGoBoVQPZK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63wnNHhjwDZvu9Das2rxFgyhXx1YwbGHdNNtgwzGfJeUdZX1ygo5KSTiK28UxH4C49J1nbgND4R7np8oF9kqDaF5",
  "key1": "3BExrXxg1JBaseNZJfwNmbtL121RA5kJa4T4vDF65RsNMhhB32uk9yxbUM7UHb61erq4VveFxoGxz7MyutD3vvfo",
  "key2": "3HQQvwhC92S9hzkGw23hLMQqPzNxe7N9nN8t5UvvhRPfetAxtoaq2wEcJX8EU3EJoTv9YLxvyA4cawnXhXY7ScaZ",
  "key3": "44WewrXvxtFwtU1Md3Y5MvtQq6TNf46s7cSMZ6Z8GQrS3nENknbD3KNhhDHdoPo5tuhquTqLhC6Pkr2t45kBP7bj",
  "key4": "4ab8hxS7aLQrtVRKYJUaF2CPbsqM8LCzuCYtnGHj5eu6KZ2rADVN69W8KYzPQeUgiFRgJrQaL9Bg3CVSBuVAVc3V",
  "key5": "2ufjBXBwBXCaoKiAqEGgug89B1SGE1uX5oLvcFLBV94Y9WdTk2Bz6GHizuTrJ4FbVFsscQtEKz1SZcxzHqR3diKM",
  "key6": "37WbvE8Pcf9EDVg7jim8bkaetJgJBbq9jxtENcB75HRAfKgJ9XdoRf7is5kHLYiXhSJ2jQGAtHLDWJGAKPh6jA6N",
  "key7": "4bFsnUJftw1rayA1mk5qSnDfHMoQhSQVPvx2ZiiQAJqEGfBYGGoWGHHixvoFU8x4z3vW57tXzm127MFPagePEYgF",
  "key8": "4mAiNDBU8q87wkrYRdagGNdepBVmbh2oGsHP3m6GqSvz6fWMufFZNgWWtbnB9f3qzyXhhEYRL8PZJtQrHjiniMoj",
  "key9": "47ABg6i1BaB7oPpPiFSmNuqCVVi1L1pDHNJNZDFoxYnBT1GMNjGpGGBMoYtK1YjJBxGKWXUVnqo86GvR9LUxbUAS",
  "key10": "CCxtnTYrFgMiv3dkdXVB1ycjcPmTUGnJYpstR4AUVfN1HKumaPZBf6ndNcrgdTg441Xr28Zmtw4t9ztr51ezyfG",
  "key11": "4gjnR1E5GWVG9C5PMGLmD4xxvtL9XaaXDhK57ZX6Fm6nx45VzAnSMKtJTjxAJTYvRQDQuKmMop228QmsAFvkFQEc",
  "key12": "3ekkuUD3RTFJHDhiDYBFfXzcqiWjHGeVZRy9d7VV3tMLGRA4i8jb16NVQqkjAjfjYN5gVeqfvP9xHsXbWoSGPcmP",
  "key13": "2stAEzurK9yN5KaFZCvhx5Jeud8r7x32huQoNfpHJV583MdjcRUk6rtkhWiRQvrETEg7i4pQt5tUWWgvsJwAa4BQ",
  "key14": "5JDjdwRj3DFTqtdqiLaydUQvcz7GEK3NUysMRtwVEakuA8rWqfbjjywEspA4DFoRya7QoRyLPcGKSNxNGAHNcUJ6",
  "key15": "5fkRNw982H4Xz2pfbFcpY6dbZX6DRVBWu8DTcFhFjfkY347MqVT5QbVP3TA1iqhWhRZgdP723Mo1jhzauF9Pnu4o",
  "key16": "4ZMeipEAsen6LkGsTTt9MaXBHYYZPPnToyc7GeopKua6yBjpDPwyMmQLXkfuVJxjAkJkEsWvkXakRZZr6KdGbZui",
  "key17": "qmZ3ynbz2YWYVVPZcWsM64ocsAbKUamAakFAJtVJTyPgGUcPBis4C7UaLpZPkgv1wP37N6oe26xGBZFu1jFVNFj",
  "key18": "2uMbhLteWSeAdv6s2BJZypV8Y8KmrWD3z4BaaxoEcT2QpZtK1gwxKkHSLBdFvYW3Jh7BC3BmozLxxm4uCnmxRpqo",
  "key19": "UQ5E3avm4TdHFN4ym7vJuiuGoxuh35DiYxgUGz5sAEn1vdJ25wP4thPD6mVEsoerNkiwT8N1bAp5gji7Ed5XaMr",
  "key20": "4gY83vCCUuXVJ65vmeJkaFyahzxnUPmV2zuwBUBWyriVn44YhBdWXVxFyNAk9LRZkKMM8aowxxxySaRUZRneSYvZ",
  "key21": "4yYNWHWWhEZU3k5guBcdWpTfPEBoU7viTrvUNkgZJurVXdrSSdFeun8NupRJbrt2qrmwHzqpLrXFpvRFvCP2D53v",
  "key22": "4UACVimnPv5HGHLWPSinHV3bbKzG8EX3SQGAfZ5BWo6BAY6m7M61RmvT1NWQKeCrCb7UwfnixxKxNgTgANC8ShyJ",
  "key23": "59RPtkuUsbsd45qnJphUTgQeMGkqEjeTUrcvMcchwB6BbGNNSGjKQU2dQqpQWqT8V7Kd2Lfn8HAeeCTThnqiQr9s",
  "key24": "3oees652Jvv2UANzDUNcAp1RixoiTAvTp4wXNwuqpW8egV75oRZ2sg7VuTG8V2mKACQLjWtjsCZ8AJUtRWA3WZdG",
  "key25": "2M3RHgwUb57Uu2CwrjWhNbfTWUKWhBXwguqKSJphksufeiHjAoViFA6JN8guTkw8y9pom6NPmTMVqVjH1fxB92dW",
  "key26": "2D5GuXu9fWXUjthMfVCm34AgeGQK8UdWiq4AZqRrPiNhtzYoUnMEaYujmYRyR684DpkyZhpe7LqNH81pCnWzPijy",
  "key27": "mc6w3BFFds8Nv59WtWEe659ejaLfBBD8S8MPondrEsN5VP4USjRjADAUigz4hSaLBAoy4jEDwonbbYbj92G12KD",
  "key28": "4WPpoCTLCZrtoKd6uCv2dLBojemvJPys7z1FS9CFFT3dhnsNWBE2xemXsuqAVPG4LG3R4JRU62yiu2JxgDEGz8dy",
  "key29": "5BEzFXCFkFDpHXmrqoxdQPvprPJpHrooPi7KzUEFRZmQ6WBNL2m2hrW29P6QXZDNr6hx77N5UWfNpHBBN8YsKAvk",
  "key30": "4wFhuRHNRu5yXJossBHATnxxF3TQoxkTe1xb2ye3u2H9vWwk3eiQk1zoxsBafNgbeMPfQrTUc4UY3wQfSgqM3YVH",
  "key31": "2baFiPwGAf5wKxksHBZBhydaYBgsE5BmFfSvsq29yDriA98r3uEHwQ5sJkygY9LKugD5QQeFT53nhgyuTxcymoHT"
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
