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
    "htmBpBTjx7ZDeZ67bY67yLt1fmiZeHpEchJqCtgPeUs5iA5hgexBTMthQUStZSrRkR92goZHqnpTL1Adpnac8fA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46S3ux4s98qDJi9jvMzFr2aA1Xm7SxAaoLi8dXYvNNX9cEpHr1nS59GJttiCBpD2vs5nLNSZW8pBdiybCrBAb6Y",
  "key1": "r6aZ4bFEx8Pbv3CDknmLRjw2fPSio4KGm2oJYptjnLqduE6KyQP1Yq12qbF7L793TzzNhHdFpytSATVYX6MLxM5",
  "key2": "38C78CEKmxALCTF3TqabdTGHo2veZucFsSnWoG5Z91T1ksRsfzDire6Rw4brUs2eZvain4QFRSDQ5mcsteVwhbRC",
  "key3": "EaJFP3pBFHPui8sncvnbL8GxqKtjKsq9de9fYDXLfNgZMY3Rt28k5V4aJ1LsHid8vxrSuGwe7bFhoupHaLfUjnM",
  "key4": "4hwbZSuchjGihoGvPuqC4jZGsmtDo99z26NbjNyMvMuPavYQ2mGvt1JmseNifDzrraMLVuDoLRTZBimZ9N8RyCuQ",
  "key5": "3X4KbSitLXeDb9MZvZJ8hCm6JsTMT17DdDKeGuanXsSMgT3K8VheAnPZDz3czviDJ1K88AbVgrmJTkPQFeKgHfHL",
  "key6": "65x3BGRBc54YichV65TcDZWMGXAh5cwUpVHZrJ6Chb3rbHcntSMqCgoiNJLKUHrjQPkMznGVcGCEQ89aHTiJdhNs",
  "key7": "4Y1E8qWVcqHrACQvEAJ1gKEPJzNUo44xE9JQXaHZpMWoX7y6kWbEx364YRfpZVHUQb9BUXdQnSXwLLcUZSdT6eR",
  "key8": "9jCjHYhBXUxsizPH9W4yLWWWu4uwJYLspwonRsb1fQC1nr2APASSsnVo2frf6XSqgeuyKB5tjkxaxWvGVsd4xMB",
  "key9": "2ufkVY9YLZjATggx3w3vJ6XLN6PAbTo9AriKqZowvzqtdgsVG4N29Z2Y6Pjhw1unvNkb95sHAEno3yYq8q4KijV7",
  "key10": "5EsaDsqpuMnSyhvWHQSp9z3Tbcqv2TNBVks3t2pMGnS52C2v1gbkATVk9mdjnbuhAemmpumbykJyxrVFR3Ar1ZQa",
  "key11": "42TSY8BdQMrb5CbmwyGhmdANqh8CSdPuo8LG7psTjyVLHW8XJWCbjnWBJWQv4PBjd3dHnUYYMwzx6ypL6GUAEhph",
  "key12": "aAiaKQxZoMxeez9oVpMchan7JSV6XUeVhkxz7mY4SM7MvaSGmdRMwJo3uKzBYhQEu8Q5RDmX6NSzfpcESsdoXY7",
  "key13": "22hgbn5LW1yNHdW9JQywvRCHovZjmgQ5mmP1a7e4iWLzcqhuzzKKyzt7b3bXfBH6MWmrVNcF6VAP66iX1epjf3iu",
  "key14": "2V3hQy9UNhjxh9Bs6cLXQgWPZ9g6qsNuCrArsdq3FWUCfzbhSwAEdR9gfQkzANLVXyresJxzfk9j2b7g2nUAFjDh",
  "key15": "52ywjU12ayqWv7iWJWcGxkiajo1LULpn4dTMBSAEFpk4hDcUwBftGcsGKiY3bWh7tGQMWFiSBNKNmHWfdbeuwHEY",
  "key16": "31H5FurETeEfsVR9mFgRrfqsYxqiXZVS3JTLQbxLP4efks2C5xSMKGTW9Bfm4yxTHU4toB9xop6hoe9aueogQHzw",
  "key17": "4RhYQ8z37ais7jAXUz1fVJBCr4isUdD7n5xqkBYEALAyPQHyVYCGeJ7eiCs9wrxL6EAZmhwdad7dE1stYx6zpVt3",
  "key18": "3yU8CEXwPwuqPhX6Sq3iC8RwL56nRF1y2fUuLtfoTfcNmznMyBBm4f8FKGZKwV5ygYHat3fWEt2j5p9YP1UxeHpj",
  "key19": "ompY4HejaYp5nxwVC4ur3tainRXs7ZCWxPtzgb5YSazT2HqDAUyGdtvEEjtVcD94G6jukWCAxsg2FNcYx9XakiD",
  "key20": "3DVwdcZnLaGYf1Tz2otBpLsk9KKHoJFEcFa8VX8zDjMV34mSR1wAtq7bDqToxEFVTsAgobLkQkxfpYWDAsGB3Fvv",
  "key21": "4SSvL41QLQ9sgzYhZLr11X92Zpr5pv16HDdN8aUNWM3RQ9nYp271Euj47UTfJtL2q6MhBcVPLtVYSpwNM6z6WjpP",
  "key22": "2D77DmGdsK7AFa8VzHrL4Z7pUkVr7YoAzgaUX2DNTzA8WoGnZJTeG5FUe839FxAXNmaA9KXyC9hFwhCiwocaaqLb",
  "key23": "5cNTFXjN15teHvUyn26SJyyVpJmg6eL43D26N3L94HVkgrQEkE4HPh9xUgEx4qaRfCBMsQbm5TNibmgRydWA5RpG",
  "key24": "57jTXRwHiD1GbQpL6QsqLDs2Mwcm2RiWid3YaLDdWhcuu2yqy79fjVdZ6m86UwGZTEpqAKjsNZ16nZFya1wUPvN4",
  "key25": "AfAwZRRtExA2AHkoZRdDPi7fNf3fgELVpFewaY3ZAZ4AYBgZNFGq8NmXsBRqQeKAa7qkZ1vw3RLACNmdDd1W5sW",
  "key26": "3aJ2KrGNGSBcAACXYoB3jE7csiZcFCbk1iBDu7DiH5TYh1t24bCBTCXbSe3Jhh76euB2pWfHHzwTyzifbyp8PAzx",
  "key27": "2Qq6wygeTWjC8mTQ6zgkUodgved41zgxR7uRwLwDTuQvYxyAyDQfP2EkC4MgxWZmUUhn53KN6PmkXAYdxh7ScNs4",
  "key28": "4MGVwEsN3mWkWuq6iFUTJWBQKSWvV36xuD2tDJf1eQi6QFBL3mtvwgfp6utBwxEuXPh1BRBiTWKik1JCeizu2M2h",
  "key29": "38U9FbrpD6CDWXDyHaLvYekonWzztRM61nMpHa4ZUTDNA6B5yPp5YbLnK8rnVL7yderqU7BNXC3A9aCpbFf7ug1a",
  "key30": "A9MRKz4Miw8FXSa7r3zNv23c8Rcr8ugUV82xUgGpMJ9gB7aHCVaV8QqCujRGsBFizEBxK6PwsfiVowbnby69tVK",
  "key31": "4Ba44xRT5k6ctwjLHdM2bzANRQrhbDK5LRU69pM4TAnfMJ9uDnaQthVHWsM7QiowBY18cuUUon7cmRhyEgvmLFjX",
  "key32": "2XXcyvXMgfbEKQX83cFHVUSqGmP8Pfhw8QrTeGTosUEZ33mkBwAhZ3eRyDVNp4kxQS8zTr7w96dpVBQDA2jRRpUu",
  "key33": "4diu7arCbGNAzcXzEnAK72ngYHbJruWN1hML5X3JnLxk3vXJbA9s3FThxmmLAipydzZE9kY3rWKNCwWoAySP8cFQ",
  "key34": "2xiW2nZAzweYszPHkTY8uhYcKPJmtyaS4F9bFmE3w3jmTBjkBtjkQZ9FqWMjdwPUJS77XLHVPRpL7Ag86asoM9aH"
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
