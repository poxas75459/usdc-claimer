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
    "2UVuCANKv1pDtwGxBzYrdWjmSszYK33fRKhKpfB6cPP4j8cKfWNWXN3C64YUxDwkRHabx8kBaSh9HV1ZZSGYeym9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2vLFFgoyvhGFLEQ8aC1s7PoJ2xUw5dmR4mTGhM9MV8bCXqKkD8ic3hYifctfdV58yuih3seuVcHXVrX71mHKMV6g",
  "key1": "2iLYP6jFF41rJJPpQ6soobpDeg9hjnkSwaR4yjv5gu6CnzP6wCWNYa9jYcRq4DuWKoXBHiPoJ74SLgxsXN5aYbQx",
  "key2": "2JnpYQZgUJJe5hvBEniDTJLZ5eFJk5MxqFmRiTqYYhsXztzd8AXuHZJo6tuWx3NeBXkEjGYLqaVBnGumr6NnCPwc",
  "key3": "2r8jpjCEiKm7o6Lbt146vTP5aszhU6RvafUFS8ghQfz7TGpytgb9haidiUEGcx6p6HwdHZL93aNbpYt9RiCrVwnC",
  "key4": "5XLFZtbsZq5cEoXV3VDC2nKwMAcGoWjmu8UGXqa15YNyTEvzinfxsacmtp4CqfPe9RiVq2VQbdd8fn7Hj5nUbdnp",
  "key5": "4gcHTNzo5CYeLFQQ6fYosMzsvq6B18twDekseNccYsEhKK8cmygaMCNrWXAqHopq6mb62cccie4yYMPoXEVoRcs6",
  "key6": "35Uq1uPndVkNoPAm9KKVQibMX1VY1M6ib7zSMqwphQG9uV3e2oSyGsud6dXWkdvR7qGD1KUUFfVSP2HJS5a1B64H",
  "key7": "4k6URNZJhoEd6aDpCoCjazsh9W4Bf5DAksVhzoQReC258AGqRKFLr62v4716poVmCY9Pc3W11QYQZQtz3juZ4Qf9",
  "key8": "5CHsdRdPrH5taDpFj2rQpz9q5ddrBhckaPMT7E71NMQPioUF4eoTVTrGUuWRiNFfppqidEvtaH9Kmm56aLmFE8sX",
  "key9": "4WxkQrEFqw7i1t4gbMte92g4QF7bQcZHHsE5dZABMmkVRupZfHPd8Ma4YLE1EYBdgprh5i7t7Nh6hw3Bpgpvfayc",
  "key10": "3nGZJkUbRyjUTrfcRk5kvqPdn4WvkmoANjdyPd8PVKhA4Dj8zVicFAEoDtY4coi4YsM49HjAbvM7doTZU63ahmZc",
  "key11": "Kouvh3hzZ8wV5rAPFAN9uknN845yFJfZEgL9LWMHJtsf63Bn9mA5MJemnBhkTLVDysJZ78htWNeWAKKMPiQ2HE4",
  "key12": "2gAB17CYj9pQKt5pZNFhjaxo7uoxE3fwUgfTZPxbahCbDYh2GSeERwGVvz6kAnogu9GMoRESJFKL5pYXD9XEmg1t",
  "key13": "5PAa8pTQCFfTw2XMscLVMRGwb5u4t6mKudnSiQXpGo1BPXtFZWdfRqzkekQscVzaPKhhBbk9vi8cYQ1DU72UFkZ2",
  "key14": "61bMTkWE8voH3JGqqFxbZFNzHKKKyM4ynjEmcq3tyaGXhdeq6cMF2MRRtLHJRfPHTJ8ocCvUZJ9PPbL3BL3essYL",
  "key15": "Ej61Q1JnfPNXGiSGfBECB7xL9PS7if5nRys9MddLss8Mkb5NvrbVD8QcPzMqjHq94ApXFveMZcrNWxPDwWE6fjP",
  "key16": "24bTACqxGVsysXr42CpKZCkHpUBm5v7ysjuUVqwFUyBN916UyyXCqU9sV7wSPGUrXgCqDzGc5hvp5nWRgo9CJm5W",
  "key17": "4Xx6p1kf7CDDFbnai7sAAFgS3vAzYRSUDyVqyGR2j7wDhjk94LUsos34G4s9jCzMbRxX1Tmag9QLMtXyfDR9Cgxz",
  "key18": "39MhEmfA331Xat8mvkjnBZLb1vxML4u32foESHTn67Zisf9RZ25k2yDHzNzMHSciWE4nM6JAkP7QGWjY7cYNnDDe",
  "key19": "2hQHrw3FRV47XFbAuxTiSEL6ByXJvdNny2efgAc8WZCVdfyXqNiF4zF5BmHmJTjETLVXj6jH3iiFKZkcPopcDK5G",
  "key20": "5Wo3oSejXpqnNQ2RKXwXMt6Maa8xySUytz3eE3ddbFHPteeTLHwDfZHtXnYsDR2fbjLMYHNjMshN636A8RAikp9a",
  "key21": "ar51bcSMFnYUHrUqwpLoWDdw4hJmzncdfbwMK5MvVd9D7JU87tzATrG4oFf8t7fxAdEBdFVWrqenjUswg2nRipF",
  "key22": "22frE36EJfX1r5JBHTM4sRh38sZWwGzHHuB7pJFb4VLy4t6dBxUKx9LCLmNhabU2KaA5nFmLZGKr3RezkCAd4HWH",
  "key23": "Xb36kCayCCoWJxfMp5giNsgHd7w25qVkjz1GxYkcaWGELUGtQwoN8m3mJwPUoKHKT7gFepjD2yS2qEjYbWEp12Y",
  "key24": "22yxGxGzP6QxgdKCMeqGCwxaEnPy187H6vPcgGfqyeMb6mkDRYXWVvHeeNjEBhq1VbF2mfxH9BsFaQtEpMjpW7pg",
  "key25": "4dVaTTjYPxHRsHdMZmSzRMzbSjsYUvFHTqCkqUecNBrHtLmrr9Qe1J2Jj8qM2JKhj5kzxwPsoRURgs1tJMHGMmw9",
  "key26": "5FD1MkpBYJA8BLVzfzRcqxYNBqsNXWWyyMPuFKaoKBoqQQS7EzkUaX7qo9dzncAMbtzav8tkFh3nfFENQQAAnM5Z",
  "key27": "34wzK3sGVTGYDUTFQXDWh9PmwVPaSwUAmXhW4sJdZosZHgwHjP2jx1egotUKZceXMm6DvNc4qVB7cBxd5DPbQRoU",
  "key28": "4DJP9nkhxpdV1LqXfBZmbXTYsC1Lsw8Q7KkcnE5vRfWGdpE7zQaStJrmJRqqAJJvTafmRVQWJ2Tk5iZGRVL5MAxR",
  "key29": "3oijLiwyNa7hMjLqEY2SmY4G9ebAZ9d3az535qG2qX3EDUuvXmpwuu5mr3av52FXqpVVrCQTtEFmK9WeAKjErbSS",
  "key30": "56imuxNoXTyi6bakgL1F7gvKcLoj7Fpfxa3W2E3u2nwXTcCrmd27MD63bMVaq3bC7Sut8BSGKn4dB3y4g7SpLntJ",
  "key31": "3jTceziFEcD3V6Sv8Qqg4TcNuJVGvXCgPoNkM1PCRNh624Fp7n7rANV4CFKBDzMRBSH23eodekPUaaQPz3tDTEKX"
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
