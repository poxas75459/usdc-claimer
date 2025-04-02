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
    "2R8rabPaiZFHaw7vNVhFSfT7QcQUJq8bureMreJuKtPKwWj7bF9HdFSQeD1a393P8uDcPeV5FbitXgQkfiQGF2BP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3LeBtEfWhrm2d6xS9esGrS8gi1yur3dvPcTQbvuxRsi6LJ9UYoNnLYwyt5L67gmjEP2vaWyj1KrbdryVTwFsCjWm",
  "key1": "3FFoTFbZ2No3snwjfsp3pQ3w3HyvfomYm4UQybrv4uhUGpNZgVFP6qAQfRuCK1K8vqWUurZrczLZB1A95uugbMfk",
  "key2": "3BTxhug8NZHrvJWZrhBAN8drm2VPWMQUDynaF8WuuUXnTkghbz1VZkXvjiJWVmZKes3smRHxBP1gySKDCXpWwmJp",
  "key3": "31z9refeFjQfBijfPRPXiQonHRdPSx9awJVoks6iGQauSC6dLnYpaza6HvkZrpTZTA4v3cHBWpAEbuHGuHhmhuGF",
  "key4": "2UF9gRTDRxkBrzBLRQ5neLZwQrTsY9SXnshPrC5vYPNLKGppWK9kMh6KXYBcPLThMivsZp5n5c3w7CXsPTMyGrLH",
  "key5": "4ETnV4WLEatZWJ65cqsmbM54gskcrP6V6fv8g36NoscuCjqa4qwTHAYC3McSzRDCYLbF5NKSWUgwQWkQudVNKALc",
  "key6": "3dhQn5AZMUQPgYwN2wLKrB2B5F5KcT9dtSXH1wCMD9dMzFNydXf26uHfzALSFypjEgorZsqA4JnSmMrtnFi1uNL1",
  "key7": "24hVyQggXCFKrx2txcrhaHDm9QHnCoHdMTmLFrBzQVVtrid7ttLnmpRxUqqaHiALY9zBTGrKV3b26kgQ29Xa4rCd",
  "key8": "3ViBPwFtuqBdEXVU1q4t7DBjJqDEg7rJ1vDequdir2rR5LumrXkjTE4TwsQRqGd61b9aQVJps2XwXJRVbsS2DtA9",
  "key9": "2WmfKr9qTWZYXmD7iGiMebWA7R6axJRqBSPm8h7u8c5JLjV4tY9CdwAYa3fTP4MALzDsuu8SiC6GJC8eKW2Ug2hD",
  "key10": "4CkDigWQ4a1VgMKXECn8dJEvyWGi2EmjcDmsQBU8UJzJ4VNsLc3sWK833XWFz2c2MLnx2i4S44ZWFfaDNsEPiSmA",
  "key11": "3tXcXmPaFgcWH1uYQ2EH6NwXvzMxAW1TwBCM6q6Mfx4ups2nyfpWjKMwENVetUzEXZZ55unPtR9YHVbzehC57zA3",
  "key12": "2CJLgpubTTt2egbYrJSt95fCUw1gsjMWb2EwfNzYK17HEkSNVtYFVkjDk6fgCiPJREuq68ykZjENDfbBXLtt7pzj",
  "key13": "5a99T5yB6igZWKU5JBRQHeo1xzH6oTxannTame5LwPAxXh3fd5H5Hz6fGbGrAuvFh5KTTPNeVopT7L7bVt6FdGEH",
  "key14": "5DXUNR4nzvKeFEodRdX2iPwtDShNNazZkg7wCPikyKsch8aSCbj4UhXSCBSkzaWB7H3WvJTci3CC1PjaQJ9NAZp2",
  "key15": "cDqHbwgNf5rgmDvwkX6RVUh1JzCsRxtdGkZCz3jLktAkmYrXSrLrzEQd47vbFYQt1cB6ZwDhrJB8N9erMhDU8iY",
  "key16": "5RBDaQQPvU9qzJdC27zk2rAcnVoh3N7v4wrYDP3yQqALGjuU5rFStUjtuuH1PXDQhBsv7TFCiFvtrN6Yav1RJDoB",
  "key17": "4TpLfvSy3mje6NpUBRo8tAfKyC3muFvyXDHKZEZU7fZ8qcKx11UoeprFQUZ5TepMtKDUehCxjJPu7JsTjkWak21D",
  "key18": "4S52MUDXiH31nf5vEprvpjdyJjDM2CcMMH6FJmRzibCXgXFkvRdft1Q7NedPns3qDPHpQM7a5FRhDy33DFyNLthk",
  "key19": "jdTJ1H488NHANxnatNXc2kU7rB1KtdHvNdq4bunsvFEUPYqLGecAGkCvpeH5MJbfhSsbcie7KfKgJwfyfjtKMxq",
  "key20": "2qrCUPvNENcNspb92XxuMXxPAehGz1YQW9zG3BBvJe1RBAREi3PLZJgzvd6QPwCvjnXiM57vE1eWLM34hmjcYVwT",
  "key21": "4GZRUTq5a5xSpWHu8jzCdgW8LXCWjf5qqstnms3pCsWT3Yk3jVDhebhfWFCQbu6GJcxE6DX6KY2xRqQzZNq8jdxS",
  "key22": "4ubfK8eSWWCy8aPicBe7yNF459sZN79wy9rgxR68yRVgifBp4UCEubFHPV7f3iNWFUeYsPoMnG5fwFBGVV7YNjNk",
  "key23": "5Sf3a7nVN8FExYYUv229fgeQWVCibwqEWd2ncH9UP6gYha6jYSQNFcjjT3h9ePpXfGMsHKjNK6poRcD7kw2QMJMZ",
  "key24": "7jEngG7DSHKxZAF4CHTCzPZpkGf7MMBCFtZNm3pun2HoL8dQVrQVNT8CtkwYBkdCQaspTSs5RbzFYHWbixPV9Ln",
  "key25": "XZLnu51oqTRNKRmYDxdMitmvFDmXbRdJNbRmVxj5rxt6P7YiF9PBXcLYTiNrVab5djTMAAMZciLFNMKDveFFVEH"
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
