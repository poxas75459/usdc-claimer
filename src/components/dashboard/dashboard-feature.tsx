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
    "5xz8q3Eg5A69c7dDHBpwjKZYhkXFb1cPvjSxcRpc2o31Tf1tpCqmkNSphTt7dDVk9riVxfgpJipGSiWJavYSjshj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5YQz13B3DU1nnTcFRJsaYsb7EyMoAP7deCFAqchkM1BkrxiMUyoiDBeoHQ3tCqq6kAsejjosiUpqVbZXfNo5j3FV",
  "key1": "4emAcL5mSvWmEDSPPJSvaUibjKrasqhEpSyAtA2GjsTznxd4ypHRtnBqGx6dXgL6cWAe8uzbrRafTgf1xS38bSRG",
  "key2": "5hXNNLNSTViYCaynujuxr1EQvqmCEmVtudoxn6Qhb1k5kbdZB8C7eYMfWrZxxamYJbuohrahDMiLFqZm49xF9Da",
  "key3": "2SExX5DTDamY7UthqtDuQDsccZK6aLxCK6Ua59YSzwvotnQnSDeK7SyxmJV1zZzMk6icE11c4h5VJsSLm9KeoChj",
  "key4": "oZU9bv3pMNKStWxBKpu2xSc4kzmewAdb462jEvCZiQY3JyKSBrM5KgnjYp4HKMJgU4cgmPPS4hwzBDHoKxHJSDB",
  "key5": "5TYtepe641UCS5HDuzHfNqFyaXCzS43bJq4VBx7Djijvu3sKn6gqhQT8pHUpcUwGJ3dzHBFiv4rudCniog99hm5c",
  "key6": "2Uv5ptFg1zo8dPkf3rUQ7u7JCVye8KPD1BkdWJM4ucmhNDykRbkXH1qG52oAYM8FHvdrSvW6d7pXw7UQ7TBg2jJH",
  "key7": "3GUJVYEoRP3oVXrakC9fAvkV4TfAqh6ZyPx3McKwdtqKEgfxVgusNzzTVw5kGoPEhvVTAzJPX75uVwP3Pp1JRmZw",
  "key8": "5UPt9Vu6udDsXQee7rGp7eyNYdc9usY85n5DMqiejTkC8gAG5F1tqTUh4q7eB8TqU3ZVRfBSdR8qGKT5D32Khh25",
  "key9": "5VDjsUzf6grhBKPP5pHKqK5Vnyk57UEusoj2RX6dVRRF6wFtvvL2C5BmK5rmDnAHp5yzoM8G8zSfh6cJwaQSGSLQ",
  "key10": "5ZeVftvoEYSMjmdAvH3r4XuHaYGPfCCbWXRUBz4eTK5kHnyiYxhzF8yhmj7hJqZdNzxPHkN5RwUr5n1opHkFW2zc",
  "key11": "4ZUeq2hCouzsX6jLXmcoGrzR9bckNqXjLYZMLVUZHFrJ661GvvNip7ymnPYzc7eU7GaWvPgFHE9D2cPK5kHHxotc",
  "key12": "k372FkY5CrRJ64bNZiUPZn8Q7zyWUjXcDMxAsyF7Qwjv5P3YmM69Qu8jGoU39BiAmSYT6PyTX3uBAzPaUPmR4z2",
  "key13": "379NCyRfa1he1pJYRw9URw3yR1W3YLJtvyTiNE5aSCRUEc9AxzkeVdHj9RdHmFKUrQz6M3uisixFUz4KdnmqQutF",
  "key14": "29eNhxvYjSpa3MCtUQup8Fj9cpNrRDwaGTxjH9y8LuAdiJamf2VBzgjxS9aqU2Fp3J5rokycYiXKatKBEqDoBH9v",
  "key15": "2LGtfSb3jf2bzxb2eaAziPidxT1qjcLv4UgqXonjBPq5ryMmbZ8JgtixJWXiUqHUfuLdRhscNUQPJE9bG5i5saTq",
  "key16": "4cAxbQQ9TCWVYirNRrpuJMXnqmUxRgo9fMnsx2KxhGwRF8pQiFUj8sxxi2biBRsa6vfq2KpX3Wx446R4asvDw2t1",
  "key17": "3pKLybLjJXXPDf9P4499w1DbSmHZ3BZJG8UKZ4c6e9CSH3PvDY2XKaAztUqSfzko2yaUSjf9CXtn6C1QvGTpUnNS",
  "key18": "M1z824VguMNaBpde25Wy4gMWSEAa8EME9QV2sJxC7F9exLjQLS6jF6vc7pxP83tv7NREWBBzpqS86CaQfFaDWRa",
  "key19": "5X56X53w8Lwof7PWfR8NGDLV6bEo2jcqH5kax362pDdyBLrhTJc2vzuNgYUuGJPpCeWeEmvpzZNp3LaDBj2ciepH",
  "key20": "2YsHA6hUJYf6DmZdvHhXAhLhvWDftYXHWgVntyFNsdYgV7uwZUteq2UF7CW8BNCJAN6WP2uVo3jAHVAg46rZsJ3E",
  "key21": "5SLGbXkP9YoxWngL78C1WF3bZg9xm1ZnyU8Gj9FjZcZXpdE7xNiMbBge4wQicg47mJXuN9mAVqWXAzcKeyqnVtZ5",
  "key22": "cNRWafdbyDS1dQ9EJrQvP3i97DbEwqFsmRFCR9mE5nyUUV3RVF1wcT8pjccMJ4SSxtxphdBWeUPzTxXxGrZsQg4",
  "key23": "1ieZjC3ecn5vFAXLCERaczadEHWYTGjmkKY9A4CtCVC5QfgK3ZVEiMPmH74jZ3bcJt7oN9kra5w2hk4dy6LhvuC",
  "key24": "5fshV7ccHxdatMqcFQRz3oBjXSPvobE2d6qnmbcazbb7ZoZCvdxGaTZVjLnhPzV31RDrch17PTtc4Gc3YKP5yAT3",
  "key25": "RHTPrWVphnei24fW1TXTmwcFyHa5HZkZF9ee6DvYVwoVuni4ubpG58XPFRTJqfsxzWNB2R6gnM5aNR6ptQAVXP6",
  "key26": "4zLfmDPvDPKRFP8zzd9z8LyvnqjHE17LXBek4wchVrKmabmaA7cBRknkLDZrwLLJRweXA54rtpHYMto9KHzxVuU",
  "key27": "3xqbQoBu3r7gMRhv2wVEzF42VZcVA7VGBcrHpH1pVwtez5QTJK729GmbgJS38aH23W2NbaKUeonudDYhThw8acdL",
  "key28": "YZo1qug92YhW4ZX7gZ8ZnE7sdkX8u6hTQVXp8mi9Ydbq2po4JSxPYXbMuSjW38YyNX1T7opJkE6QyAyqrPgxKxc"
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
