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
    "5aCxjZ7UDHs9M3gE5wi879qcUqytrmosogoePCpDwmBStZezRStF5dwjVUGARnEXNoAw8fCse6hkb4GMa7hUhsFA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Pk94RwbuF2JjfkyvaUtt4pZcVEDNRzhBtZhdcb7kukHgVuK6rfsPuiRdgU8keQ7S7stJdLasoCjA6QWNAA6qKHC",
  "key1": "5LGvKRdb7yseA2MbjMdaCfng8cKQvJUeDsr1oGJ7zdNhuP6n1iRYBGNqyr8oD79PAbTm1GdE1cgEDbYbjnvRyMiW",
  "key2": "3VWWzBNRUen9swJzEJXYMfDCNmk59L9tPHbTqVwtdxT2FwsKNpVNqB6p4YeisaDabrBg89rhATDKQmcFx9PwycWn",
  "key3": "3QF7pYrc3Mq38Py5gXcRd74hYDbMV9Zj8YtKjqgtibd6f7GfYQaegjqDh1tkJEKw1kPMgPNMSPxrAQGjcxnfEnYM",
  "key4": "5w7B3dAHowjd7HE4nG4MoQwEdDJKZC8Pvu8g9prw6i78Dn1cKuK1UjZNd1P5hqJ7oBuKw1zBtri2Qj2435StVSLY",
  "key5": "4HM4yusmxfm7QT9HAWeYBzdWMyBfiUbwt9YQJ4urP1mbxEsw9Dn1HWEG9EYe99SzGmRPDDqA3GaAuwbuEp2A8VKL",
  "key6": "4ctaQSoVXKSRMBmwbNXmsCgPXhHyo7NEtE1AtGjBkqjCGCdvre7HyW54yf1mEW9Wxe4kizuEZZiV2QdobcQ1wyur",
  "key7": "5mAcNSA9dyJmWJy7HKiyHWjFu5QT3j7fQfmMaNAK4W8VKBj3e5g2nHajcfnfi2AsMBuvEp8KGGH8ecmTMwsk4sV7",
  "key8": "3tJRkwvzGM1bAx9FPgN3EbitFbSqgtjN99Cv3YLcBttTs78iWdqzYpFnajdbWM51y1NjsJreXMCvy9Jjq67kFiUh",
  "key9": "59aV1zsrzaKjtbKPiX9vYpazujGcXtW9WKrhpaTadywjCNrzuybBzR1hSodh1G9qBzNdSZGorJ6NLPK8X7ERgTqp",
  "key10": "2ukJq9yKQQG2BtDxeKDPWhpUE18DnFXGVAR1GWJLEszSPM3FGmP7uMRxSLLvPc7cZwZE566vsQZxTbvM7Cxm93Ep",
  "key11": "39yAAnBCqVTnoWmCrhsu2e5XCrJGUoyw2v2JKc2AQQu72R1ZpfMwamrAdgdSNnWgsgHbzCTqez1y5nYKDNFHT8qi",
  "key12": "5PaGBJCBKx9PTjfDvMZoxxyVQYhzwFi2fEjf6in5Bv2rqySKvJVsJD8rhiyYhwgXpTqdDseH8a4zEMazWFgXHMhJ",
  "key13": "pvxJkurzdawBE4LbFqBFqALJiYf5emXE8FPBjAL58FU5Cto5b44wGBJTdNr9DqKjWMqPZGd7619gtXqFe4h6utp",
  "key14": "3pFL8c8j3VgDQGKd9yAzvFqezQRjyrYHdk6fxbpu1UD9AysWAPkeBkbo8zjfH5GbPWAmB5Nx46xdVkPj25pwg7EM",
  "key15": "Go1yrA2sSJsihY1YNCMDMHBfh7iG13nuAgNkFaYyoLvk12ihhGsZUXvATJSgNG8LbX7MFRnfi8RsZH8tJhD8PXx",
  "key16": "4Zu8VKtkpunWmoPFJdy8mEq9KFgeWG9JKq3VmxMehLvGDYAwaLRN1HkZmF7cgzCFJR6XcToomNzGivDLaR3HAhGh",
  "key17": "2EaLiQgLz2WRn5uB7sQwyzi8ShicS7KTy8e1xw6hdvttiEGWG7MCedQm5XNperHdMkVpoTBpTH3PhfmL4rHYCSgZ",
  "key18": "2uQvq818KnSi3GKyVw4QMxMB784GZu6bn1gAFjXRFLuhEJamLcXYmURYtqo4vhdeMauRR1XR3wG6npAKEX9fPvHS",
  "key19": "3fcZPRLByNC6h5saqQkfEkUrRc4cFB3h9ucABcUEw5ZJTZTeBXLyBMzBuZX8Mcp9hnbAEjiTyQLuNRF5QSaQNFkj",
  "key20": "h3BjZQ959c7HRU5SQNAdevNRcgptTnocTKmvfNELTFJF1VRwAPq16gW6iuQ9xodecJQwRzM15KA17Tbb4CND7xs",
  "key21": "xTQ5fgPJB45J2ivwkwbVkHbe5UaiMv4TAEVbDhD3PoJzKPzxH1vLe35spbMAyU88woZm77vbXJ1QRyyudaKpd8P",
  "key22": "57vUqPPgvrw5X4aawmz5849VmUoBnFFEGrnTwSrFzhdY7AokdQwZ2usegzLgttvqYW4DfzyXULWoEPxVFcy2DyjW",
  "key23": "2MrpRjZvfXB4zB2GhC9295amMPYxxdi1Zpeoz73xReWQdyREtUchjPJHfmJq4aNp4BFpu5McK3ePp3by2uwh5oqK",
  "key24": "5BDLMShVKxEQygoSutLpXYMdPTFSUv6pwcHurPpxha3asbWp94kmyhmJ7oDBQn8TMphdARikDjGfwDYHQVFmCoGP",
  "key25": "56rtVLbJsiqNSzSatJsHcQgXLZz3uHn3jTwLTBc8ebmwqnHM75ZzmHZYDikj1eEXkX7e7yH15oJFQ9xZqvcfm12r",
  "key26": "587dhmNvrLYPT4zCrnaEnSH1roEQCjLaUsQaydJMEUxLNZfAFBWyvJUQT4vhssUSM35r5NzngUADc11VLZtMQnV4",
  "key27": "5xM8C6KQfo648SHJmXdboKV6eES3wuxgDT3yh6vXqwYvuXVcE7mAHYm88yBnB8bhVgk5iwiYf8jt6RpAT7PJ5pBF",
  "key28": "2h1GrtENG4AAvn9xKt2vnsc9obwUyXj4MPJyMnTttZDF6WP35CZQ8sEdKznV3nGqfyjetVNwmrsbFjQGukH6VJYj",
  "key29": "4DfpNA93aUhpGTRkRPPpZQ6k7atYC456yUaRhsMKLG1dqYYLqdUaf2XBGV7c44Qr1cTkHUKjaNkxQMQqEeoQ1oAB",
  "key30": "9Y3dHQ65vsta2ym3tABDusC4vChFQszKQkohA9FJTpJc9Cm6UJKh7FJ1x6N1NxTFfWUrdMEHBUjnL9aMqDv6nrR",
  "key31": "3syhJCEMvXLaSundRcsCUNC5GypWDvZfUyj5w6kTMtWWJz4xP5kcPg1yvGLYUyMTaF7LvHxNT9JZYY5XK5MeqYTh",
  "key32": "41MvqELGefkXZ3qG5fNae58YG5MhBaR2KKkAh9ZvguRZqg7vges7xxfN3PGKxAzqibB92kx6HMBfh5EXA3EvZeBf",
  "key33": "q5vjQhWvSRdXGyTq5ejjrFJq25UGXJUtHWnoPWRkYojtb3ghf2MxRdw2WnbkPjAb7Z4z3nKsbCu5gdmeygebmnf",
  "key34": "2cbR6SvmM4jXacssN5Pfqg6y4g9APpQNbLnZ9DJuu7RPm7hucjag69XG89Jw4LSZBPXuMB426EgitYFhxcr6em1Z",
  "key35": "61dqkiuddLuJkSMQmHLy5hvds4DMJg2YmNHXM3YeTE2vE8embap4v2Bqpre5jppLFEK1KJ2mgTUqT8Kj36izKuYJ",
  "key36": "2cKZUXgVU9PR7aR7WvkEE2NdWTuh4MjtXPZRH1uTGPsNVNY7tBfu5ANqaPJ1YoG7F4Bcp6SV1g3yNDSLWsZZddiv",
  "key37": "2SHajqzyFhcJxjtKrW2bmo2hVRXshz2k7ukyJz1D6kk7RVY9bmCL5JdR8eVoPzt52WoG7foEz1sG1TRzyUWse6Bg",
  "key38": "3AuJUTrqMvX5svYPLk8QTtihYAwtAy6TJqanmXpH1nWCjxLYQSxyYdj6a4YTCKCV3wApzyuJhRySY4zXiH3yGs7R",
  "key39": "66TAvDKmNh4tMbJE9dGPc7s3faF4wNryGR9T32kx3NUynL59f6Loc9r2Lwi64zyKXvCYzMUY1P5qfPxqTeWnyF84",
  "key40": "5zb1nafU5Hxn6yVTWWt6fZockgX3ygxCDcT9iAjSQ48hpxmmMDjKZixqw3H6iE1MBSYnUzEgc6u36aFycYoX27TJ",
  "key41": "W37eMShHXtZ9Z3j93XqbTcXhfnH21YWJVvGhzHMD2MDTHZ7gL1YyBiAfPhBAC6GWTm4XmUL5nnLua4p5a4m9Nft",
  "key42": "3afyC5ve8nowRmndw5MtndNXCZbezwUNWe8w1Y5FLMJ5KNHhF1PTeo7cSLjmyrDPknLDeTaKTZMfUHHmPXFx4RtU",
  "key43": "57pU3KLsu2Dwa2rR8wL9PsMq21ZSMoz4mNuHW7aY8FYxREF9Xy1UzRXa4t4gTcNKfvQvhoB2usH3XEsCTipjSZJB"
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
