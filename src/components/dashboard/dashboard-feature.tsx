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
    "38BjHZ1vZrnRQM6t36j1PW4dN8zLi7btCmCRaDKUgWT63eZMfzkgz7oa7fCtoRaBv2UqQsv8DGN51hjLTd7DgYbt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ogV3MCYNXAaeEgvim8W7zBnJqwbjHhSoPhWTGgFb7PDJSHMMacXU2PpfoZxq33J3CUNF8kYyu9RuwsKiSgz2C6d",
  "key1": "67diMez23QR57EwwUw7vXpWzqEcpmsL1ph12ijmg5XPXjRkVgdoGB81AZhQDCZHL1iSvCK5Bk25R5YGFqpgDJm5v",
  "key2": "4GNqnonWZU7rMFBn1WXiRTnsZs7t4ewotMFsnCcbBbC65nERqLFzjn3pMvaq61csyZmupg6vmB4N1tsXpvq66UKj",
  "key3": "3mqYA9gXcULeGCbFQQ368VpXPP6DMaidDDQu6bEGWQmcSdF2SZFShtQEy4pvFahQbQEZ4u547gBYccGHcv28NtyL",
  "key4": "5jY471EGiqTPxToeU1QAPfuQYGvQAPbWjGN9FieYRqpkoL5eWGWuce8wnnTH4qPfVG7MuFL8XzREwFyLocCL5Y42",
  "key5": "4JqaLLEfBAmeAxfi6tSiE6N835bM8gDCcSJvxdZ2BndvcX37kfFEkLiSXGtAqtQ3k7g6Uq13YS83KqWbGjtVUwo6",
  "key6": "23asCLGEPMF4b3mq5yRTMSgRzRYLhxyGvHoyHiG2zm1q2izjNrmT3yAWeYGfm8x6koutRUgmzecGA6es48rV3kjV",
  "key7": "34abaqqJBmYhMFf47Tp6unex7DBgGbotffELyzjde143pcq9Z6qwFfUCYNsj5ToTBJN3538jARxn8FoN4KBPMjCh",
  "key8": "4FBeHwFkRqwW5E6msgDbXB5sF7ER5fD6uHcN6VPBpvPxpvSbP1KJf8qYuhQFHGCWKYBNEHAr6EcTmT3MPvNNy4rr",
  "key9": "3UKvRB4wSZysJdjat3kAV18WrWLoWsrdqHpEinX8qGA2AaEhjzFWkpQeCwYjrJKgJMqPAscWQaZFt64MkzXzLnDb",
  "key10": "BHds6STH5ifLZ46uUe1ojfR9M8hUMfGURyRZzTJqJk92ibhWMJ4zJjqrbjPtE12LKHWzv3w7cpNM4Bh1YM31fFG",
  "key11": "5aNPsFkaQYWjWAvovHMqZsSAxCRG1A83ioENF8NCkXR4qeC7GxWuCq6P6eTxK7ztrHjFpeQaML58oJCe7tQnygKX",
  "key12": "4u7nJC83v1reYVNRVL9v5ibjCPjjXcC53jSj1yuM6hAcaYxgyxEuv7LxfAnZo88bW4ntLgdtBrFBQ96VM8wKxnZc",
  "key13": "4sdvdg1mc5suz5X1HYWa1LX1EaG9Z8ZNSCs2RdFvY5KVVq2bVEGKTGomj7fojq11KRKZAd2hJHkmskXJf7KvJwSc",
  "key14": "3Dc5V9xSjkLcTPdYpDbRa5qH9qwfsRfx1ztnJiztKxgrwQdfV9FxjQ8zGpdUtecxUCx65e34kgk9aBNtsX4t1SVb",
  "key15": "3HC1UkiXmV1cBoaPdJBxdgDBR9YkiGnP6FW3vCmMxc8VWxhaduQuCwpAko7Pz1X5452unSURMwhi247sV39be2Ai",
  "key16": "3NFpwDfgKR7UeMurtThxD6ZynYbo4fn5UQRH4hzzu13LPjDNojQnZNwgmC2GYQqi17thWDfzV8PSVmsvyyp2PfQ1",
  "key17": "4KZZ14LvAgLLB3XcQGvQbJ8F2C3aRewguf9T7c7iiudceSLK5jHa4p5ejXERZt8TSHmskrJjtJWH8V2y7pr4Mzw2",
  "key18": "JSqtgREvZkzKtMbV6nC8ShcEK9PJmHLtVw5PddH6Ni4iifcUcDH71nzxmu4umh1ppUqBF5SRDqDCR86kepNaSbt",
  "key19": "3oGwrEGZE5V1KLpy59qj1ELnKoJUaGJDjqriEUSYuZCkzqDvQzLPoHaiqVdhJii4nADgTmRjRttG6YwkG43GTLEe",
  "key20": "5Cz5EF5hpdVzBh9NRjbzY4n3gFdgJPWKNSUANMAuMv2yZ57BBTTxKfaTfzSMLFnAEBG7fFjNQnY1SRXNCSN1GbQH",
  "key21": "41n7PuHcaFyFzeZBz7ov7KypKQE532NkwTrmiuL1TxoDL4g5xrwmdat3pjxNd7Jjtp1VroQr4a8r3azd3TXvZ51G",
  "key22": "4ah6w93dvBgVEncWqnyFhHigzgRGi25qqouknabnbSw4DdEHmPXrE9c7ynUgMJxxXboQPJgy7G61uGNkUyvjk7Xm",
  "key23": "2mfMw4VzBnU5Mq8VWQ4XSd5pq2V5GWBaH8UgMBARvUzXE9VbuiyZgaxgTPHXFe7LehDtYTN3R9AME3miS8zCQznX",
  "key24": "2Npe2mvu2g7rrfG3jVHQRkPd1T4wdThnPW8GEiPWLQfqNHFsDeR7PzJ8eTQHD1D4J5irWZWC7tgBZg7bahooWBLe",
  "key25": "61PVKeyxeXHYNHxbSuVPeYFV64u4fkr42gjYXrLzpfimBE9XRrFvhz3tU4J3GLcyegaBDUvqJx9fyceHVGyZwzHe",
  "key26": "3zpNpHHx2HvcciRBtkoUGjC7vMmZh33EPCZGh2yXEeETJgqjb5x5EpEB2ttQnLfBcmX5KDedHH2fum94f8h8jdHq",
  "key27": "5n2C9QRhc74nEvAjWUX9ePCneyhp7HkPtWsEDsEJEcW9vPPJaxkA1wFqRp7wKKDi5DXpZxbYDtNPJHs4FxzUy2Xr",
  "key28": "5bssZyvGFozf7dN1MNP1sAXRneMN3SvnWCd43FLRM51PoHL8i5mwTLKzB1XUrrynZpAEKHipGedNpozC8y6jdDdF",
  "key29": "5DhRJNzT6xJFuwVUcF8iTXjPZ8i32P29QeGzQsQkviMxhkZMXPELYsr3czcrmqBTV5ziq6S5MQQmCVXG5c4Enm3B",
  "key30": "5SYnr2muV2uW8FdQ7XbTCtCuweVnzBQwSxzn7jzhtdesQxxwbT3L3Raus2bfQWx5ixhvJhmfTh54dGA4PoaUzmd8",
  "key31": "5ESZNiCr7x3gFkb1aX2EmtRTjGcuUu8SyxWWtMG2MtqZkocna6H9HuQQEVTjNZr7g51TcxAyf1bGCsdQTdceb2qx",
  "key32": "rHXxnqM4FGj37mUHRoyP1gMPWNpjpAD7WLkvzn5gujcBaZCnGuQa1hNe2qhpCvAYGtBjYXgXL4z4DsTpUCvDetb",
  "key33": "3y4qc13UiUn9iHUdjfaBTKpF1W9hzrDsRPcBraHo4KQ8KXMEWh18AdZEtkPUeRXR7HvKKLgTErtwHoeNR7Vs4k52",
  "key34": "3VeWk1uk5Xo1AQntvMA2GXHQxtmgejHiWqxdYHw1zSS7jLXCz5nktfo2TSEf94hNS2XC6bJLsMTS2qaxoVttXFLj",
  "key35": "4hzS9Tj6nXmmRnK1ntRG2hi7SMGaBzRMZnVeLCS8KbeuCH53ovAFYLar1S1FqHkk1XU3kdfsJfxTpUZpD8E2Y8Qd"
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
