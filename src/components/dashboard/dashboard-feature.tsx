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
    "3GcJRmJDWWPRcBB7861BzPqCk2nKASrkcSz1vHsaQhtVpfm61A54fy5KR7kGtsb3ujjg67yN6EwK3Gdob4wQnTub"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55bPmSUxzxvEr2VCF4DM1gbaoM25m48qFiHstn26M4njQHrreQPGpcjTdVmMq65piWqmz15X6E3X3BpvgV3U2BsJ",
  "key1": "4jfde4PSvJFkaooJQAu6p8uBYxXtpg2vbswFidkcjDAYdKyriTwsopLGA258HjRJbCFz31FEBZ54pSTwFzNTQesQ",
  "key2": "59FXdMGpv5gKmRbEu4ATQsuX7ieoBZKrqtcYdEqyZ1Ux8tXHtpDpujhTowf3vbSTED2SDvjFK4wgEJcG2QnLBcQa",
  "key3": "3G6SGtgx2jRxe1oZiVtUeujHSN7UHhu9K5XrU4RVxogiTABHeRLwbwxJYTuTgi5D621Cc9anbQAa96Md1ZXQT3uv",
  "key4": "3rA4W7GpQsZQfcRCV8MPUUmSDYHniBWDSFHtDjviinNMBLQaGugmQx9j6Cr7Gzs4eZMWmmN6BtEcs2QYk3skLj2i",
  "key5": "2MKGjv5W8Cm7d6VBsEq8jjFCQ2zrb1whKxir4xYuoas6hKa8yxQyWxJrpvYb9vcPoYHh8Gvw3kWQcHirEuwCitc8",
  "key6": "5XriBEjRfTni9owczRV9sraQD5wzs9GDPiujca8jYptWxz16wE1PdUkE8bdf5yu3mrz7M86DAA5Dxayck8oaSrrY",
  "key7": "5q143U2Dog7nFeBAR1ervkRtSqTfupKXGfnm1fibDnk2BcWfzhx7ARNejfZQ2juMWo5L97s7rSmNi3tFdf9jwktd",
  "key8": "48rayRzxmp71WnToJMykmwLc7rEpDygo9suAY7HTduUscR74ULefNevtrTZzG6rqusT38y7dwcmpRcyHLvSXGuZn",
  "key9": "5LtAy1eNeieh68mg8LUsHqwE8Tw1jp9aLrsW1Lxpgi4R9daiTgkeHAfqyXTtEGX2Nf1HtGmnD1xTgJJjN1LZoSRu",
  "key10": "3rw1xwDB9NqeLCcPpWu2TVG5dpDmUEHcCYaXsD5DeT3KfuERgytMikLa8ZANT8d3AVBFdVMm4RD585KbZ7WqNdTw",
  "key11": "3ChfcqeGgr8ipiN4TkbCYpPyfB17azt6qzZSwFAkw92AKjNCNNDDH3gp4WZyNGmCD87akkPoNanLGvumYaGaW4eG",
  "key12": "eRwSKoWY27XyTB2smhAbTH1Hit7KpyzVDS9Pv6FiRjewYyo2QmH5qETnpokH1AhY7zVhDF8QDw4aMTExRw83u6P",
  "key13": "4GntAaCbmNDiPvP9FetHkN8aMDLsv6kdixyE62qZer2HHkBzPEbM7R7fKS7AjnhUjpPyzGYWoTY8YxRS6YRW1GGx",
  "key14": "63Dj7wJUCVwt3zA5kGWe8QzgnSCEY3Qqc79ocu92ZeBTE9w9Zycsgo8B3quivMxtRAxLv6TZdty14WQ58RKPdASr",
  "key15": "4k2KBgnohmXJKm5HY6ZQPHKJzSWzTv4TiFq38R7VC2znuT3tXU9KAu5cj64cRRnxEGXM76anJjp8KAhjGei51cfb",
  "key16": "5qz6jGdUDrhXwwnUrVS5EshgbnQFXSszxGNFu2QMijLN6SvkExU4XFwAquV7AAhQg3hUuhsZSPZPW34mrRPeY4rH",
  "key17": "5mHz9VzvZYjNpzudCJr5vyDkpUxBUhfeLwx9sN8JgLhYCbDbq7drSRc1a25oxYPU5RnjFQBXLkuypKu2hVNsiHDu",
  "key18": "CqX82bL3SNe6xgA4adzeU59f1xLQXDLhKTM3hHYwsPtL5xzdVeCrksr7FNRZw9sJWpL41Px2Dqrue7htia5P6Tr",
  "key19": "2k6Sos94Q3RYyV8o6LdrLEZsXmmbnuuMLRV3YAGmaNTRALJFicrrqRD75XApYBJWJMCGy6ZDYnfiJeayuvFCCdzj",
  "key20": "Jr3YW4safDptzSM39REtyAWdTvv8aLUbbasgmBsVKbJMeNMALkDjAFiwCPskmLCvNWMxyEBJqz51xgL6Qv2G5cp",
  "key21": "5TXKuhU4pex6wAxr7U49Xs8HF5418MaAeXQTJfa5gK3J6DVtz3YfjzyWkyUArtvx1GEyguptSKcia5oWEyWj2eyq",
  "key22": "2XX98UdWhdZ5FG7qSMygJpoT7H5Z17yFQasED5zmAnsP5H9xuGPdqkeYcLv2XNMUKS4SS965y3HK8AQndkSgizv7",
  "key23": "5UeAV3B9CBgYZuks7neR9wfQK8UBbUpaf83siQFEHdzpzzYZm3jTotMbp5yTdAbFiRSKD2cEzBzWMJ64YkxPjrJJ",
  "key24": "xnSgzfsTYMogJRLEMU33Rz2hf212stdD1qvLtv5tzz9yZXLfW3wYEjVtZBL6L9ZiaJqoo2FMyb6CuqL6LtTiJkg",
  "key25": "4AdwUPYPH4LcrazzAxNziLTB9i8GxXeSMRxTJBKZfbK59YWjymq5UYxe4DtVteTe61eriTppLypq84AXrx4WqAL5",
  "key26": "5uu7kEjxoCMsuUvdCFuLN46WuEZSfXnkjk1t1kZ5YZ6SwekLZR6DbYfNMZUECeA4evX7uPcJ1MtQUWe5NDyaKk5F",
  "key27": "3FKuRPeNnqd8Y1hRZmXmJq8vnuhevpjrXhvuk74tUsu8SqaU7v1kqs7zCqDg3PMU32rdFqNWmXkfCWnpvUNx3SNa",
  "key28": "7EGX453oxvAtc5ZQCcsi4gYQDk1sKgVoigfTbxZno1EN8eXQgQYPcZzd1TPt1GhZ1aXcQpHw7aV8P9ebeNe6FTu",
  "key29": "y6QqVuv9JYQQbQP2kUkxKvSXPs4AigmoTz7sh99PabT4Ln2rbx7G9yfBmRjTjcv9MdHwQHMigRnJYEYMW8rKMRn",
  "key30": "rUJx1rLcKQVSU4N8FnpJtMka2dVW6WpwfgL1gr5VJYFs1dDZFrKBNPGeUmFoCUT7ajWrbjUUAFG1PsWdfNKqmvv",
  "key31": "2ujiHimBBTw8P6CS9hpHwqpcTp2ZtPFjWX2x9YcGb5WtdT9giNkvknY2Fx4jErVDiQAdXqZTgQ28NUJPGoG17Zuz",
  "key32": "3Gb9JU8kfCx6CxmVHh29751X94nhTMra3iu3kfKNEF1Qov49YkemQ4R5iVhb5kvxweVubRRvSUTZ7tcqxUhkcB1t",
  "key33": "1u347nPbFfhaUAA8EneQbSyKA5TMxoeRor7epe9g6JK4dzA2G12RBCBkDw5wq3rDH95m9CptWmskk29KqKmvq4p",
  "key34": "5sG89EAaruE89JoAoHfCptNGareLAuXEXFVQLXwubTprna6qYkvEDTPjRPTAvgQpFGXMBbKTixfEtvFks7TzrVKC",
  "key35": "3odtMNFp6th2tRK7vCk7aRCzj8KK4nBec7gnSyoB9WgnLLZMX3xvhvJr8JLZ5BCAWPpjnEp3ppvjZLNTuBzMzZTH",
  "key36": "4rEKjmyGqksmRwAbT3n27KKhmTUWdhFBLVUr31w886FXzwGwFEo4DmJoBDWMUHeamGkRdg3JxZgdvf2uihXq5Xwi",
  "key37": "po1ktdzqhsQ8MSS2Ltau7MBd5TSQHBHZYXkEND3dQZa7iwfLK8MdAYkkmPuuZkjmekdGtW9vkmXYm5MZ6ZNsF3r",
  "key38": "Pcx9fKBGgwD3JhNPxnbdpBNMEB6iCk4E2BmbMyD3jAeqXzY5n8VQifLrbYciCVSak6cJskbePVqm9V2vTXSm1io"
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
