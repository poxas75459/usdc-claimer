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
    "2CqSgE3Rd2SdXjjmkARMFYxYNjXiEW4jZXgfreRhPu9JEapvjFgGsQbPVz4L1SWLAox1uZXwMWFkrvVe3vyMrrxr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5u8aZrdWY9iB8DH763EWo4BqE3FhZJSi86gHbehQkcJRxt78XihstAnUhjCdXqdMPf8MvsejDTVvhyXhfodejdps",
  "key1": "2vTBApFouf3VM5N2fFqDyXTdNwGxWL9s5GZC6zG4Xz2VYfL8N5zbPqqRLxc3fFjuyxWwGkHbRsheAfhBxgh4cxcJ",
  "key2": "8gcGuCNzSQtwQdeQ1S7D78RSakfJKqEVewkV9QZqPqwDogECmNEPbpiDktEjjmWKDyQzKQmxrjzZwY3KKqWiktD",
  "key3": "5ivtJtBVTu6NtHQ6pWqVvwsSYA7rkvb6ZHU7LTkL5R2qkKL6B5KwNV23KF82v6NzvD1E9ob44AAy1g5ZMTFjfbWx",
  "key4": "2NSrCUKNhBSQPKu7DBb6HwTzuuEixXUrX4qDLnd1dRLFUeim6ZWAEAHtxVyH634dVGTz2SuuV3rkhPrfQ5KKiiS2",
  "key5": "5YLk4xuRwoddQKErRKnFKcyqohYYQpj6MdHT4WePkCmb7ebKUpFUe7mP95N6EbUsvwDxC4nF3mrogvbc5MWrPFQT",
  "key6": "4pYfBKkRGjnZt11V8PPg5KdFd7j35yyXvTVd7SGWnzNfoJZEXHo98gHBpKsDCJb2GEGorjD5Y6nqEKoTaLByRF2J",
  "key7": "48NoJsRP6D2zGUnqVtfjF4cRTb2NXzkjg1XdGqjR1JYGEC6CwWMqLiy3DbkBCytY1kVhongz7NrQ1xWyE1t2W6kU",
  "key8": "49TZUVZ36WHAf84oat5y5CHtKcA82k6nDj15g2pmrX9zFaybrVxzfDUDpSejLnqK6p2jrX6L1rwdNWjMEGokF4g7",
  "key9": "43hf97mkkVYnF4wLRh1rfkKz8gbazoQCBj8JMQ6x8Lr4XLN9g8LSnjS1dfGEDCJCkeXwsHeDgBUw17nVtPgTW418",
  "key10": "32pJQLv61eygpFEmMgZHvBowyUQay3JMDz5yVAESLtZgEeMm6aK8zxvCU3Zhn6qPVtNX2MNiEvSSxPbZ6kGY3TG5",
  "key11": "4y3iFbK3aBxdNZYNJnpgqU9vifRTLK111Bty3nEQLiG9cQ7WYk8yHz6rXaTneccq1ewPr1edHvawkMj5a7tk4gYJ",
  "key12": "2Tf5ZHZSaLQjRrXm9StfpngfKLpiSYiDRirv8SLofVbRkCeADqg2ELy4eT5dw4bnRSGE1gGYMVBSd5Joqo8mVEbS",
  "key13": "4fFmrR6dLJWmGvUfUqgDJ5wtsq75opQVC15Sreo3swkDNS3janKYfArrQ8bpgaeyYtrS8khAebyJy3Bj1QeyVjrC",
  "key14": "4MY8vJ9yWvFfQo6hD17c2kiVzRMJ4diaiEmc8y3psUPLwET3DCSmPYsftSkrVb1BG9RXac9DQHS34QCFonC9p6Uj",
  "key15": "5YogDGEpPaBt5WMRXX52K5TwWYvdjrtLDJ8x7bnymsTrMh9eC5uiuYyyGJaFWsRy4pegEc1tCSoLRJzcaU31GtkT",
  "key16": "4UypWnukc9sFQZWsTjs8xAVZLqHYEcmE3ZaYKESggwdVAWLMgL4QDrx9dKxgXbNvaGbQFxAqgE9xKnTWC2B5ciZR",
  "key17": "4NEDgETFpHqpyssTYnV2BQPAvKYy4zvk2cBpyixjvz8nQme7FhJb7xGnaudGM8qP4okbPC8hzuECnvNNdJ2kLSGs",
  "key18": "5sGXiALaHYste71zi4yvRvDs2dgb3C4AkapP8EjwzeZUsa8CfDu8XnYttjX11yPuS3VLTPf3jQoHwBcq8X9dtdTk",
  "key19": "3DobSDKsCCNwCWC9kKF4eUW4AfLxrX9uirB19DjjbKJdW5D2xyLqBB6DCHRE4piEeZT3Ce32yQK1acXEBEcopADK",
  "key20": "5YdbzjqLaes7Ch1bi2fTPAmbDmLDVSx7NKH6Ec6WxupSLXJJySpvMgUiB3Hqv5XEvWbFi2asYRboj2AUV5KKRxRP",
  "key21": "2KmpQyMDVKd1U7eGzHbkcD3rbMfDupWzsUJMTCNpWgpPy7y9oyk8ZrUma9RMWiW6LsWY5cozBJ6t5jbP5dvYbDBs",
  "key22": "424rVVmj2M7DAVZnkVd86wXoBTg15x5vQ1pxCREDV74JHhNZZczn4Y7UYFtLaxuD26s8ZTsBa6cDwLJMwQ6vuqXK",
  "key23": "aKEAqU7AeRULzhMKHKmAZRdymHe5N83JCBYxUZdsL2D1YnuqKnE31fP1XHLVJawR5iX8GnhbSLWPZ9wm7xgtJEW",
  "key24": "z8SYZW88iFBEsNRhsj24ccMjjroieGzYaF2V8AEDm7kRbhdbf2Ha2zfNBFurg2SkQrcj1ixhEVt53Db34kCP36R",
  "key25": "5RseNomVLTZhEc4Uag47rmaYyiE5jnMpnN32SMv3YidJXcdTRnP6dmRWfxVZTVaGxTWCsE2WNFgrSWkugaUtwFe5",
  "key26": "3hD27wguRDKWRYU7Rdiw4h3YvKdVPDLBe8GWq3JXgWP6ABDtF3LH5iTCZgFJm9jgYrSQoVbqJoaTzHDMvQcrMmYC",
  "key27": "3QQrQejXavUh82EMQgGzue8uPJLq54Hkm6R1eHwmhqGtM19pnXVqdP381AjooYUfRUx7VtXjm713mkMLjWBciJiA",
  "key28": "3473FX2i6NScM9GVmTEU6LyNbgM5mVwUKXoh6L79E1gFWAzDfQnYQwKF1gAVBKKaAQLNBTVG8Y7NaHruZnNHi6Ko",
  "key29": "5JKgWKvaPKcFYLqiMg1VtghFdJ2mPsTvesSrsk7uq8FdcmXz6MpA2ngfGd7A7yE2wJ2T3RK9oAmhfDBfQ5f9SrCa",
  "key30": "2yBtMpeps3bamFtr7RamBkDjEv9A8AGJmCt9Aei1h46556RZAYGeAYJ2cFbANhFxjNWvjooMVubfKjQZDhWACNve",
  "key31": "5yJL2sArJXEMqLeYkmCNGwc4AfupuA7dBrK5ye9vhkHht963rbRL1HLMLKC8Hxi8ot3iFnLzQhzeNhfBoXFtuBQZ",
  "key32": "25TwrvjmVK2tTG4xDZMRmodw2eWRdCRYVpJ5gVGMi4ZiQ75VPyKy5fE91KSAsLPP2Hqz6Ksk3594Fzoogq73Msur",
  "key33": "3YkZjJfk9NgJZdPMLiE4EfJ8ZDagrsPF9QPz5c3cqYPHmxe7NuxtRi47zi5qKSwusyphQGFTgCFcwJi7bxnUvNyG",
  "key34": "5i9CRuMe89HyzArPri2dQYxHymoeofgFRv54GVvrV3U7p2tdUqsdu5VhRWkbikaUMRAAwujkEjrwBeJE8obQKaLr",
  "key35": "5iFm2AGbdEAwusqhmZ8gcZ3AhaFJnuy3mHZQnW27oK8bucofQ9XCRWa9VKjG8tLKesataxVgUJMXQySZZ63iFtSE",
  "key36": "5GW3y1DyMw6KFuUqkFwh8RS5frwynRUnrbz5WD1awVUJcf73eNjsquXY8dDMMkkBv5ULjbEF9gxuG22CcEbn2iRK",
  "key37": "3Lzw3A78jew25PQYBLxdmrU5VsuCND56HCoUQx6rEiZ5hc1CLQuttwTr7qARYcZr3xYWBsdExTFF6FA4at9VSueF",
  "key38": "3uPP3vUmfND9RM1Skmv5gLC5b2mWbiFpxkRc84vYMR4XL7fo175baj9Smuu55FqBv8Hk7vtSeGabGUnMS3HHLDnk",
  "key39": "278ciSLnHjrJqNjhZwQdo5XPLm4B6f3ZqDuLE5Wz5nQ59Fbav3W8vr24Kyu4DG5dCRqq49hYgSYC7pu5NfzZHtLp",
  "key40": "2deTsuceeHRK1qjjkdxRSNsaYwTznVb31zPvehhvuBKx93BBsNyrJL5io11SbEqcxJ3MLWbaiZ31vYnuKZXaGoJm"
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
