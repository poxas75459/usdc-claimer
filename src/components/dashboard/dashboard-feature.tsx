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
    "2x9wJPxaCVwa2kBB6TNd95qJ7Lr6ZQB6ufpTGy1nVMJK9y8zNCyJu8bSYt5yqp9xSUxovHxemWYVnLAvmDALYFyv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5QYk1ZkTZSV8eXLaaiMEcTuS29kFyxoqQrg88gje4qnC8YcziBrqEkyz3wbbeXbCQVEe4cUU1d3EYHaUE3nvrMZ",
  "key1": "2AXj91s4MY1BreDrmiUVAe4T3FR3ULnZNUzxP9TXDodjQ3wSNrqRYm2VmHdzQLjPvhLSGc5XMhm7upzYH83fKXZ2",
  "key2": "bnUcstU27aMB4cmpYPxNBgLMNewRBk6DhoegkmoMtWhuPJ5ZqEaBbMsJ54Rztdac6oUcGF4QxwBHBjyUZrYU2MM",
  "key3": "JAvqmnDgYm76mzPBFmJybA7rUH9azVLUsSQQR2APyJoAHzMmgqpAFnupQbGLvyHiTN9VthR36G3ZQJ7aQWrtAv2",
  "key4": "3j4cJhrSk6be8mZpmzT2qoBuCKp3RB9ncNJCxohDa7GPAMct1BRcbrPEi5ZPv4mNt3gootXSBeixKScoFBho8Bes",
  "key5": "4pcnFMrKm5nEDGRFux5TZ8mSc7k3ikuBDQLiZcuhK6N395kKdFVK4RDquKiHrG6nDggwTHbDMwrAc6CkJgWr2ATr",
  "key6": "2GzLYo1oSRvbftZCXeK398wuj9qHvHHxUJ5jXx291kJLftRnt1UdNy9qqRxEXdzRR1UbYUGcW6Gds5rBk3dMTdGu",
  "key7": "3q68sPpXyvbenBEnqjwGrhjUxXWa1VgqC9E73qvuRu1CG8tXVckijEygpG5R6k8FwciK2VGw71LFFu1q38ZPR6E2",
  "key8": "3obaAWBQS5vRPLCgGPQW89jwLA47JPM7PfThyanBAg3x5rdbVM6H1wwbzWyoW3Fj28FH4fdKP3pT7Jhx5Tif3hnm",
  "key9": "25gHvjD4skDPV1miAu2Myx4cN9YNpSrVwUASiCPCV5woMjuu73QUm7EhfEgTHS9se24gSBERFSvPMPTsmFEKfzkM",
  "key10": "3LHvRJknnV42QhwNhV5AP8UuPXd7hofWnUsSPftZQ9PMhu2uHY1LEkezdATgfN45hEWiRB8BiLpmy7CwwskanBm",
  "key11": "3PFH8KJkgyg7REXPVntGzjaShzThjgBT9L3Gn6TohZmJcTkDM29UgcDqrJnu5GJLrma9bwTAQagFfbRxkd8E3pt1",
  "key12": "4RgazaZLr7ne8SD4cdyhQXoPWBX44aYFrD2YZvax7BLfzkPBPLojUS9eGiQSNERpm9REB7fr3K6kazw5KBwR2hgu",
  "key13": "5F1LeaWu8Fru4ZkCcX22zseYRxUXxA6S8M4jxnyFexuTKQXd9WFVuVVpKjiQMUmp55QUgU7atskDeuKXqVypirkk",
  "key14": "Vuq9SbY7ktdVUD8FvLidBa6fbcQXWYpPRTsUyViFdCSUR1kLwRmRGa8SNqp8EZQ79CzZY4b5aBqoFyo1CQp9p6R",
  "key15": "4aX7Y1RnUvzpBFfYyTHoaWSe3SitcDbHgMmKUxfG9jtu5jYjtPTdwbHm3gt7h84cjx98SSH3xNVmMPgSz3SkRifV",
  "key16": "J37LTM13bn8sXcvFa8CLVGCAqL5VveCg7Vsba5jFsmpU7qTbCfQaYmcv4es4FVGP1tpbp51kxQrZKgEybSAuJ36",
  "key17": "5SMcpX8x9N25MMbxZabfCHdgFNYRd3LQEZvYWbVktgbwAaa1pNHdj8zgCXfqF69VvrYoY9YS1aH6Wp4oFr2noxVw",
  "key18": "2ayCyEMaXpBiHLBp5ZjMA3RZwUmRWqbSjzepTogrkgokSxK9nLkwkDRC2Pf2wAgWDUHYVDCa4HNceLBerq5iXfGb",
  "key19": "5oEWMNwEgXR4b7i42ojzLvVoPFmNtcbE5dWWwbzSNyGGm16cp5HnsLQnkSF3RRTuXHfgx2XpJnoA3xAkeea6L6Pd",
  "key20": "576yX2qiGCfBSC1fdSseC4R6fEP7oGyFmBq72f78NYCqUJRtXQ8tBrhWkkKYJ12S8UKYyA7DWxehUXAQY45mQhg6",
  "key21": "2yTedRqp7fD82DubHmFXJ9r8Hv1dQSt8uUpsNpJCeeWPqteD6rf88V4hjNrPM2fX6EVQqW34BV9vpQqGtCwKSqfL",
  "key22": "8583T3bMJyMzZukQb1BthXgLX1rrGtv3TFAFsbhph3QseMT1dToejACS5KWAZmSgQayb2TtAbSYuKoxM1jsLEan",
  "key23": "TxGkoqAEoYKcRdTJxG8CoXRrdLX5XDLx8eWFSCEeTntSULrnBVEr32DZdpkyqNPmbw6qK8Y1PGYv7gYsrzTAPWd",
  "key24": "4ty62z1JZjPumQkekszwgwZ9NnzG7EUnWf9vMnJ3Zb1cMyzAKEM9ggLYcR7SY29Tk4RNGjeBhGKUPv6zFoJ4fXNy"
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
