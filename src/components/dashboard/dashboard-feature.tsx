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
    "4wBA6LWLmY63raWSBXEkSqxap9Y3XPzgcvT4i7GT3a25XtLdWHkGZefpmofiNC55bx5eQtsdF7WTVWdffLY58MtE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "H8udyYWeEbVNCPF5BsTwXzeYVHP6dkE3ZK56wBZj3Q9KoUvFvwSrJtyJf7JUz3bStWehLbtGWEFcA9BtS3UF2kH",
  "key1": "5uFxA7fDSot5ZVSxCHxh8NVNbMKwrruHUWyQCUhmP2n9e4oJfezAacYzxfTqx6Kx15dbxqfqkNM2wzYpbmrfsN5W",
  "key2": "4jWVaJRvPeodzicWJAF1TtANd4LsE4J1do8i9nKw4pPh4cx9ov6btQ67PzMkLYHAWxnDarzQWdhMCuJ9TWdk5uJj",
  "key3": "5nst9A64uhoHgq7tDgxdW3StiGKiLd1P79oXG6dU5kqiCko4ae6v67aqfURigDuBPwtyaaMuuvnM3R5bbbv9eU4y",
  "key4": "3yAfQULHcvCSsdw9oegDwqSCEF5EmTyogsbKp6SnJf33wySZxEDCHgTVWqLqxPBRofA6MaCfU9XGiaxgtKWNVgj8",
  "key5": "5aNenAD3btcb6jSqwnGERvm4zL6UewG8PxVMT5N19qMjejrdzPewzJwJXEM3dp4ZrmtAxUc6haQ9iX1RvHFWeUfR",
  "key6": "6693LkKjTdgASJNkL3HvUMN8gQ6LCNQPKRTPun2NeSj1n2gUiochoo8VD1pcYctSKV4ghMb2FULsjauK1qmHoZo",
  "key7": "3vcDH4aGeVpqpAR73BTE623XAUkmpWfQ1hAWxq54gkzNWiUsk8P23dDYTDBaTaEF6pV5V3inr8xhWxCCk5FVuadF",
  "key8": "4mCY8gLLoqaxhtjqF5VR1ERCNjhRyEm4K63nvU3vQsH7cxPSmdbq4RJs4vHg2JsEL6QxihKQmZdoh2LMz5trCWZt",
  "key9": "2EGrp2KhTkrc2iYZJVAJcfpVDWqM8dPd2JhPeAtrqcYC5fX3WjyPejbR2YxSMTp4ksdsTiHZq1YTtkTsRHzRArAC",
  "key10": "4EHSkhYD92Z5Ray29qxkNae7dcEUj9yiUVBFV2NVqLCbneKXnaxG8f2tiFGvN2cGvAGCVEHUf5LNqqiWPUavkGiD",
  "key11": "2ziq11zjNswUKaHSTajXdzd67NsZRhuKCFtnFu5tNTPzb1vhhYSvjN5nJvjh1HJ4v5w3QJJkPhnc3u78VxuMB7Eu",
  "key12": "4bd3sVZcqQn6hZmnbkbsJgFZifgDN1gq9nhwBub9xkinnanfp5MuxzuArkh66DQxfsGoTWUdK12hYb5QZxUS6gMo",
  "key13": "46PFoTrZe1XT38fF9Yi6RnrWNaJk3mgteyernnifnJwMZBxbAawnbSnGJVoEHuWTNPaDJ1Q3HG3P7Fb6C36ii63d",
  "key14": "3YFg9Xkok6pqkATneKs3Ey5c9BdpJp5yi9BLh1cXEPAAtPwFSFMu1oZCQLfstNbsk5r2L6mRcD6APnqrSvQCja5e",
  "key15": "XYYYey7ZCddwKYckKgDMQVEBPdC9nNwHz1VtkpAdrqt7sgmUGsoapNoCR4Teqb4Ub7ESAmFDNE1ZEZTwb17Bevz",
  "key16": "22x8QW85b2xw8kYHR6jZCy95RqaeJrEAayYt91WrdEDYqif9W7DRU8uyQQXLVvPQe27QyWT1uGnPHhzVGGif47ap",
  "key17": "5P3C5BbKXt5RAiUw3ci9PW3hU1TCdQRsJrgawk81ZW7hoxG7DZHjWKg4m5mUSeCoGTSszxoSmKvobV3e5pgLb4j3",
  "key18": "4hMMRnbku7XRRBk8CfQg5poFp2ZTE9TwKweo9UsvmEf67M9w96Pb5nJoFD8vP55o3rbNSfXRaRNjJKTCiKzg879P",
  "key19": "gWE3k5LnDNEFiFvE1LnbFRDqWP8Uvz6iFJqPnouTjXf4oZyvGg5nivcBCodZgT8c3EGTRSrSMTLta1Pcv6ZqSxi",
  "key20": "5RGHhgxGq5nNwQm6W3aPYs4bJ9S8qX3d4yBjWFXSJ2iLnT9vLsdm3ZRxwWVjkuXYDSCGmo96Gom5nbztYmskE5hk",
  "key21": "63TZ5iCGVPzipsbWe9Q4KjQoToaMuouUhgE75R9aueK9rxcGYLbSLN5mnc1WddjWF8W7mGJ53PGijoD4kmMrgebQ",
  "key22": "wLPxWpSFa9mHtU6Z5WjfvRk94Td7Bm2rnnFh8bbebzWXK2GM9z4ZDbq1WrQ5aSXzJrNihkJv5pt5teJqBefDWJz",
  "key23": "58Y7LWryAjazyu7nREAx5zJ5cnC8tXvi4HHS66rcUMK2Tpr28Y1scNHAeAYTXR18tM9xqu9bgAZjkeZoPX3DhZir",
  "key24": "3LK9vCxkt15oAwnfJ5o5GeSrUkfokdictUJr9baUbEg7oKj2fRYXSWUXATEZd67HuWBifRd6AghRv9EntjgSQwDb",
  "key25": "3fexActdZVqX35LQcZp3zQJf9gwksNycKinAC2GqMPmhnREZRiqgwgG6LNBM3XAhgENCWW1AZd8EdE7B1rA9nxLZ",
  "key26": "5EASCdaMgkCFdSxCSNhVY4txb69oTfkVgRPJX9gy5KhmqNNbrVjm4kKBdmbW3YdtRunJRQxv2zunBfH67vfVvLjn"
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
