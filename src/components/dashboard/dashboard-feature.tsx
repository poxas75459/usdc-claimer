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
    "3nRtd4bJDp5T7fuB1ERBMvSjH6dcxWDUeSAmeJpdG8Z5m9NnF8vHJ3zfEzrSzVdUa1qUBLm9xKJ5gQ9PwM3w3aQJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Teb9hJZyD3aCSo1W1ybSbgrqppiZ1ynEKyTTPtwAbeoh8Cghz1ef8hE5PRgCwRH9MGfdq6DJP2MMbYLL1SHteSv",
  "key1": "5nU7xVsefSwu1mpMi8NxJqaAkQK7D3FmKGyciYSZNqX9RZQ1HKjMPCXXc3yniBTxVjBQ9moX4gaqqHZ6GWX6H6Jx",
  "key2": "3onkrB8YstkrnsWUJpaNSwf99ZxAakt3Z9MsNaQeV7SUzLAhp9hJd4UF5GvnetXmfkjeP1aX4EbhgnoNtyEBCyjx",
  "key3": "3KX72Dwbvd63aNvFdbU2JPyV1aGzkrUmrj3zwqUhGkHXAE3svwCitXpWyRoW3PrceJEWjrcYDwiWUQTR7qS9Z2o1",
  "key4": "2Kd89ciSK8z9AdCuQ4XePWioKHKaDVVKFs3eJFJhhKjCHDgAgZUaMBNvTG2d3CyX2jrhwkj8rPX9gnBEdPMSAFoB",
  "key5": "4sddabnFXtKSzx8gpvBwHFY2pZDT9whDPGGGGmmtAFKjAcmpuXXnNQ1rziTdF1ywXCuPY1E828LPMu9BF5ATEC3o",
  "key6": "452qvcYDyL69v4GKVhDPPdcbwEJBic4sjW8HBU3nujBKW8FEzPWP4eJobzbUxWsjQRJ894kCSwueZWs66mf999v5",
  "key7": "3v47vW5hAH62e6T8mgYdxnSGuRzfHqDPLU5GDvK1X5SZxRytWEXugU5gK8pfBhQPUgTJ81qUUa1qAoEMNcx72DVz",
  "key8": "CW3chctyXQmxjuBU34YMLSQvKrCJeYMMeUCbn8fC8rXH5AB12nCbNdZL6KUy3afPdxmpw35unqamomjdfYNakmp",
  "key9": "2yQvKpQtSHDtaDKZxUQ8VzDN6UwQiqnZQqhqoLhaTr9hMCmUn5Q4hC2FGdpMKGCMmNW8ocVoRKuEKZM1hRf5zmPU",
  "key10": "25dVpQmaydUjy6X7gqndFTwkK35GKLFmajJNFioyDFw41RaAcLeHNX7Mt5bNQvjXkS8ZnaBwtXmgpDb9ecH6Nxcq",
  "key11": "NKFt9cFe7axExm4ZDigRusW6wkpCT1arSwaoG6U6CZsmkDMRhT7SBXV9frqbua1yRTqXKWJ9emBC4U1TQwejTYf",
  "key12": "25XVRB8Wk3TmLwzjoQMNyGg3e8jfBrYhxGpUb5Y1MLoz7pYdtcRKLgGFmbmxJoTpg2Da8Hu6LbSGNSZgZqZa2H6x",
  "key13": "3ciCSMqfseaJD7UsPFw3npZgFtujJNmz4CuvnTeVYVU5JHWCLvZDArV9h41d74baM3moG8j5YEk1AXhsMTC1qD8E",
  "key14": "BfZKgtbAZZ2gBQcrHBEWpRFSrZcf3yrXLsafh7nnFs3Pv6oP2SHFKCsEwAKcPcosLQL3NxUbfBwZ7kx2q7pp3oc",
  "key15": "2KPJXADdRpaXNjjPhDjeDHXmpv1k4BkUiPzqFeUQvM2DscWSvmsch93zBGy8Jp3oR9hAGkzgeWHQnMy3xe5Lifmn",
  "key16": "4SxktPuAHu72MupZbATw2raBV4RFbY2TXqBQX9a3Zz12vds6iv2tpphZYG77vyGZBemZthc4z5kXCyVbiCY4Vd3Z",
  "key17": "656uSCeFq4QCCjrBjZT6WjrBjR4d59Bc6zznBBB6t6auTjQpNUgTGh16cY1YzfdL97t59hQnaUiyKTeHmL9htXXw",
  "key18": "4bUpoT8QYDXoc58H9gSdQKoxnbiBsDaTxfFfmuFq4sEdgHUeQE5UihSkqdNJYtVxwxfAC75ariFA9e35ktuPFWVE",
  "key19": "Fop2bdazHgCnhwHYSQSpbsjC6RGUX58LeDENiA8xGAwfoiJtCq9x6u8nGjyMgQDZtEcb1pLe89Jgdc87DDkoPYU",
  "key20": "5DYdBMCXZEJejczwteC5Rasehwm4RE3QEsKd5AdaXugiDQB2HjNqom2hfaqraWvh2V9m6DkYoKGEm9CnMJumoyRP",
  "key21": "4nEikgXuXf67o3Y3DjeYMDnqdJoJ35S9VxeAnbTdzcgTSE1dbTSREG8jugDFhkP2bywrUmW2bb2hynHiECnGKqXv",
  "key22": "39KFyUSQaoEBmZ86QP7b4B85Rq9ZLf6znaHdArNBx6jqrFZTbETzCR1TFYmoJs19P3hQKUwCP5wXD43s3Jxk4Sqz",
  "key23": "4N6TvkXkVVM8mr317fnLkB5MZmJMkL7FGPy9Rzys7ciT7odspSMExAbXtmBWgVKjsafMgY8DWgG4AgU5UjhBPG7s",
  "key24": "5hWXLsnHV6mQxhbUw21AAG22sDETmz6Thij7xjXkda92zv5w9M3otV6Q7vmYimyofiFJLhd8yJfuK7N2uxdtvefu",
  "key25": "kNLwBZMwZJVUibphsbwaJmv2sk4Z5LiwrvnXu3zufXZ1QLhGMHUnrPdtnMeeGEjDyhjB4D8mWWwD2YdBQ8ACbnU",
  "key26": "5is7GwVRKQNVdEKkVGzr4KtPvM7XsgoUiVz9RpyNidh4PB7zKz32ztpnXYM5BedbyekEzbmqvop7aKXKb7TW8VDJ",
  "key27": "3pTEL9puzvMC5ma71HQXgntFuKKu1kdMnQDqqZm4EiBmjTWTcHmPHdZ6VwSvTbvn7KRwv5RaeUFLZpZ444TYddhU",
  "key28": "EDbe2jyTuswARWxp8Aawo8S88oYZbE8bzLRtsaAFgCWoHB29Ejc6yrwbrCp9pwgonneV5x114ZhjQyTnDU5U3Lu",
  "key29": "ZLnMAmsZib7m7Un9TpcKVWx4t96sTBvXVNDUXgiyviBobas21A2HU6f8GU9AyxEcU3udaiydBbAzBE9zybE983B",
  "key30": "5cPmrKT8xf4bTt5jwJZX67A8rr6CcXDxWN6Vub8oR4iV869UtbKwHPsNACAxQqN3Kkh9shzqDBupbNyoCuwrmHeU",
  "key31": "2Y4Wqckvj1w9w3qWPGhZfWMYiBqXzGrEUJQnnZDCtwqhiuCPQXp4cDHX3BJQ3ABK1VqhjAYmGWaX7SruF4xbWYjY",
  "key32": "2MVmXpRtJqamZTedVwYLEYxURieVGygBx1x9oGVai4nwPPkWcYuJtp78wVHyS8uKX8H4Nj2iXUSS1KNnwyw8wHy4",
  "key33": "2BCPyA8GKyrniCpb7syvCRReAMKNNgtHMmWN1MAcPnzjNG6Qqw1cTYfYrrZpBy4bTQGZb5E3csP9uUb34YZtbXA9",
  "key34": "kyLfumkEUrCFG3iXtXvdW74WDbbMwTWNVPDbDeTA5a6JZmDCoTx3oyttPtFiUHub6pUBdwTNsRVoARNRwhH4eE4",
  "key35": "4yA4XDLjGPDLK8t3bRzEpbLoi4FkGDUJKtnpg55VpHEjFdc1p85u1oiYEie9R1AvD3JBhz5qj98rn3prhAKAN1dm",
  "key36": "4SkfzmmMsuPYicB852h4wN92LHRVxeU8VP6oicbuJwf91xGhsudTV3B1aRBZ7GRQvJv1qdKbBEphud1rcRpDaf94",
  "key37": "mMtMTPbHpQdeU4MGkFVnUqYqzuDFmPi5K2uE89vR1yfdjTMfoELkDzA57zCvfgxrkabjr3GoxiELsuRykNt9ivM",
  "key38": "3tiPHEriwtuKwE4YRuL9Ez2eEaodMWbB65CgJpanGPRxmx4wSU49LmhmGJ1skwNC2n9f8cHwpmyYpMHy3TMVmzif"
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
