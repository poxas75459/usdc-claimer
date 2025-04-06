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
    "JHx7nLoxvP9mheu2k2jrVhGKruHhFzza8msCqD9ywcACozY2KnAH8MrWnpJRUUu2TrkAJhdUUU5P2VFSFNjf6UT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3MvrRhhxpZUmjWWFNutZVkrJmjtdViuQTXjyio4TPe9RQrrG3nW6iE1z7FFtoLoymmL3aLbF263T4SN7morbBC2b",
  "key1": "2a8tVjfXWqpPXjyNARU6r84iaN5iQrZ8WnUTBbLFCoft1FqkqDohA3TSjWgzkLkrLTbHVVg2ZopbVzKdXuUCA6Zv",
  "key2": "E9Egk2ezDrTefpdm19YgHhQKdXQ6eK744uc318Si5doLENVVAvvdbYerBaJMU4FRFj7YZpM1EkpwFBBAYCGuEQ2",
  "key3": "59PWkADuTET6XtFCrY3GzVLSr33v8bortvhA3VpXUfgRvfkiMLBuBrwGTPw7Woo4iswWjw3ie88fpuaAxTU9G3UE",
  "key4": "2P6aL2B8YaQ4dsMR9iHe2hVoNgbuAdxkG2mqzcXnrEePS3Tg18sszZcDXDuU2sMeVb2VJunTHTnPrXrdY5x6tywz",
  "key5": "2M9Z5f1bQMEFT36ZkMtdoJD6GCxaxsC1zD7kt6qMmPQen4sQWBkGsBBzkchnKh5sLhCC6NPQ55KK7keDz1GiStg8",
  "key6": "59kh1LWKAQFgrVwRcWNhRvrftFWzd3zBgiQvCDJ4oo5ybwxojurgWaHybaPRAS1YD5WY4hZBdCE1bR3XgTzM71nM",
  "key7": "3fZH2pim68KgKUza4cdW23anwfzPLCM283svDj5PhRFPYdFDyXpYRdmC6QByVkwbsxdiGjNRHk43F5D2WdV6cLka",
  "key8": "44SGFJ68ZwzQ96PmtcYApUKHAsm4v193kstkFPs3Eds9qfTVHEHEiHNFwWoHbVjyjycHRZu6PC4riFupewk3WdPG",
  "key9": "5URNjWaSNmYUuZjKdhNA2fqhHfnvWAUuCJQiqLfXgc5TgrQSQKgjn1bm3nQ6qqFTxK4HskiGt4Z9Y6NUjp3btYrV",
  "key10": "2dVLPvqb19UeD3s5221yvHfmbPRvrrFMPmfhrXyXqhwfsSBkDZMmmLNVaY18RP4etTWZSASx26hSxcjbbzQVjjoL",
  "key11": "666nnXRTx3q5x1cf91G1GSaxWqwUDicSVJawbF3HguHssEfwgYyoAgCELGm65cZd3hf5BMDorjfJGHt5kxWKzper",
  "key12": "2ep5ZgvKCS81sXF5c9AQvuDmoQH5CagEWty1KAKjSv11NYVRMnUw139jT77uPQ5DzF5VRZEmAPEXRTS6Z3DX1kBy",
  "key13": "DYCCKgEMdstt4gU9wrbW8X4gDTMizAfoNZFPCCy1aG2QyToqvw1CF1i8A77TfYg7syuMAH2tvsM86mJXEKbUNX2",
  "key14": "3NtwJbTmAYvQVz4PH1HrFgn3nGfnnkCCdgKq91DZa41AiVgLZcQwutHKad2T4a3STMUF7gLdQgFMLYJGRnA63ag9",
  "key15": "5GHPLjdXmmG9zdLDT1suw9AbBxBbB5aV3WqwpU6Ts7yuW7dMcXEvP6unN7oswYuDWGxNKNb6Z6wKrfBkmacpTudM",
  "key16": "67UJa6qTCja9pi1EbKyVCEE6ftqEm9FDczy6AnonKWbZFm144SbpHQCnsxM854GTnFgWfAu9H5cS32ftW3WurFaz",
  "key17": "38UnUbeFq1PuLAWMtq1X2bk89Dbcpz21uG8NNDhNM1595nqHRChperbUXwHYDLZ5NdS7jVaZbsJ8Nq4XUnc5unT",
  "key18": "aUy8fb6tq8XEgQ6SciuVGaCAHaFXMAEeK8yEURCD53acvS5WzYemntEjVSHnnNTsWxnP99D8KEQibXmCq1YvA2i",
  "key19": "56mpLbniMsK1bggXZ7no63pvJLkfYFi7gJ8PUdonAUMpqHtVmMcZkA1fSvNHoks2wvWx2jyQZgeiP2d6Ls6kr7VV",
  "key20": "26KE9zssp59C2RYbF2bKHrM4XiXqy77mCAEee4eJFqGACPLyXk46DE8kJa5yTpr91wSYWFGpDMGYW3LGYQQtN4Fv",
  "key21": "fHX4wd1sE2dzua7PFdQibiMjW17uy9oD52BUtce27F7suTNcPfD6JJ3wnXGGDpHSBuMnEm6aqvVYT8dFmP6q4Ge",
  "key22": "33W1QcZHor2Az2GejakU9616afmeCeZyh2fs1SZjwxhVRJyKJnwLCgnxoYutdU7ngj95sxGPAnCUbBkCbsSR8g2H",
  "key23": "2x2JhxCbVo8biBGTkhCoxdvDz2Veufyz9wSsCmFaC565hTw4X4nnmLoRvWRMxyFS6TT45n5kBpjuPQ8vJcf4rk3x",
  "key24": "2AtL6aDkRFL8XeYxcYrkEoCVXEL9DYYVSrbaMRMcuqGrcmZF3ADs9jdoWbeu4XHcGQRr8W4zRa3aVffSgPt49CPg",
  "key25": "3VgQtRPMy3PgEzU5NRAyNqbaJDG4JEwMKMm4ABRX5cSK7iEz2Yx4VZSfhBFAd6x2YS7XsMwG1a1jtYXTpacJzehN"
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
