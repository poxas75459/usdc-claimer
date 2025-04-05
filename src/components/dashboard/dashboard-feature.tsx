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
    "3w2VGz8VSUHeQCYBMQjWX18mC5yTKZCsrJcNtuRyHwZtUCdpbhN4i9o1LVZHNyebqzQ4vykQ12CH3cGi41Ge2LuA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4FUwMsZ4zPBCMsknQ3b2oM8iRm8tJKN5LnbXPVdtLRtiFcfceeUvZhzpvq3eg3b7qXFcipiVDVzMxYP64iaF7rVL",
  "key1": "ZEGw4yh7p5JGFR8VHdStaBAQHCBwTFZfkkdqp5xRrcZqoLT54wjpEY4Fu4GaXfvszGkn368ez2njketWUK4QNMw",
  "key2": "4yh897zEVD2rhMUW5iTE4fTXGWAQiEMqMuWMYpBq1JUu6LvaGBjhJM7paZ9rb3TA3QaG5CCo7Bqb4YrAJpwPa2M3",
  "key3": "5o8vXmbYGANEzbQhgUy34FfoT6Gw4t7dPCLy8em1G25pjGQmEvbfYRm53a3jmCRz6WKjxwXqXWJJrBHjzeoAgknd",
  "key4": "5WxuF7xv3miYrr9HGEEdRsk8t2kxsvQiHfYFvco7FwjD5TSd4o5o8xcNHC2pCqFj4Y1t874kJ3Rz4L7Lzri8UhGT",
  "key5": "4YzCe9Wk4EQ2MMiYBYajhGBibuTSn1Kwg2mAqcqkCw6J1y7dvqzkHkxLbGcWznPJDe1BaDb6eRPT6Xo5KhsJBEi1",
  "key6": "2GwWYgmEsvSXHj7Kyt4hnTfKBYQLLj3ezgDE7k92hRvFLtyndNbARkZFoxc6oaCjjENdfeafa99JvGYLXkB9ZRTJ",
  "key7": "3trNP2bR48m34Mwzrjuq3USMiPtVoMHJ46T5tcgeBjvx3R9HmVwmBGgonVz7VocY57fQoS8EwTSd6gavUcdRsHdB",
  "key8": "3Dyq56gskGdeuV9cEhYbMWBh29YMj3ESqvXZTQfDrzxXatrkt89wSdmcLsdkgXEtPrLzYoaZyMKubVAFBsZBpcJ3",
  "key9": "2Do2NLQTedFKV1qFF1topwMWiYMW3ff8kPhjzL23f7cKYwfqcY9MPxc1TsaSEkRMJzP1sdEjjMSsiukpFoa8HtbP",
  "key10": "3G4sKJda5xig8kAxagfPU2craCiu2hjewQdfFjzNxPcUKpT7NxHrgoL1e2EWP8v46FxJioJWnfhuvPQJhXte6hJo",
  "key11": "5kAtfGZgVisr5C2EBZESTwWnvdiUPrfKmi8neoh9MqiA18Brt7G6cwGkKSxXaEiwUxzCTNBYULLCw4mxUf4zSGba",
  "key12": "4UARQnEb17kWz2vrbv1riz116WBvK28TYBvW5Hz4BZeur7jhiUwWLv8m5R4CDBt2LVUFZsbqBHNrLZpjZApWhiXZ",
  "key13": "57tFLUHqE7d4rZLME9Pwhn38gGRwDEhbJQmaFbUzLPsdWDPxdrdW8N4RoKmZKpKCZK8WivWESvSoS3w6ZTAtcEqc",
  "key14": "2TwB3tnJRdcGAtLDam2EuG6czVqdkRG7HJnRwVTbgCUrKFyKbwBhDed8eRQ5rw7ph1ArBbw5MP3ycpBNvGUymoaR",
  "key15": "5gyaKHGt41bbqhGVHqjpj3zW5wMjPTCkgzzzevTwYjdhPgcrPzBjraY5TW65vTVkNg3zKwHiuT87DVd6YFuhzCa3",
  "key16": "3uZTLrPSWLXgFziKhvHGijN53d9i5TAUDejukZGXz5ynvFjRRVo13xFBhGrPvdYMmnqrYEuGMer4CE9cDTuH7dQD",
  "key17": "5mi1j6UYuja935wiRbK13VboRxC6cyNTmUA8GmfR9ZtNkE3B7kQkdNyzGvzEUdjBQVasqyQcgsiNpJY741rFR24n",
  "key18": "5PJpgkuqwtbMEwSLwUPCCEpgfdL6ci47HeGmgoyWSQrUn8NcXFXxyyGBiKGXAEEk9q7NgrKFDHM1A7DieoVfYsRu",
  "key19": "5cQJkrxY1HDyGJJ4vReqBzEevSzk7Jbr3pV6euNPmqhkuTzffKrrc2K96J7FeeR1qzCbNUU98sffCAqUw8qo6c7P",
  "key20": "fZxksnJBt3cwi3xSbY6BNvqfDqcfAts3YCyBkKFLDta9XShF8F9e7UwoNSW3SreNB6Cs4KoznqvYtHsZQNAbYFs",
  "key21": "3GPpMA9f6qfPRUm8fwYVs6YdzUBQFBxfhh5gdfYixtUxb9Axk1k2t3pEBynUEwsY53LaFFDyCh1hKJk5gKydVsAD",
  "key22": "4tKMayJ5VSSMNR495jbTuX3Y5zCSibDmfDP2dkb1jTaPZRBUBFiovNhx9vc7WqnqDJsZXWnYfa9KMiGDSPGQb9g7",
  "key23": "4XsdicJChiXQUGdB5cPM32Xxb6tyRz6AcfjrHwXbfAUtAdN9MX4V9mvRribNhpg16ir9ToArcAoG2WeGN3ZTGYT2",
  "key24": "ndyhfoGQzFNmbusxfJrNcqZ7yAfYE13QdhHcwEpFD9yG32cJoaFgU5qAc2t1i7M6w6w73pmCZSKPAHmvrFE4Xpg",
  "key25": "3yqEZi5W7yG7ufbC7sZfqUVdt3u6BybugzBe3BqpeWLjGAvQVPZb65WrLPbYN6FLZS2Fp5iYCf7eBpvg41tN9zE5",
  "key26": "Ah6sVMqJAJXpaogQia8yeNGe6NjVZwa1MF4prZVBzLRRFrQ8EcaawKLEUjNF6zSs7P4Kob839d5ZqphkDpN5X5T",
  "key27": "ogbTp9sZC2V2Sn9UmFoKrQWtNy1i43makLzvRRMF8gaT2zRFvo7Pfv1SsqjYq5nMoQvGZJ1wrj1LGvXtwugivRT",
  "key28": "3XVqdaS8s82m8QCi4Dw1V323HtLsQk2cKe4bJ1mxdRiZHzR1SKgy9pyGhSmQFEtR9AqCMSZM5Nvz6DwPYWGks9pv",
  "key29": "33p5gdyijja6GCuBeDvgNLFDLLiN7eUcymjKh2pWfMwfGM3LATcoZw1y89ZDRTsL7qatcGBomtAdWL9VbMorDvZ4",
  "key30": "4Hr4pdXb9LfHvzuj9ngcppx7d71s7fm7mYPcQKvhLSMiqbQhVNarG5pwGgF9TLqB23i8PGbwMNWrTYnZtryWGCWc",
  "key31": "2uR3YuEKcyPPx91EcCgeYBdLzFjAwkRxVTCC1tEEwFNx7R2yy98GJhCPUK6qkZ2GouFQmkBXRrViE8u69EqjEzzx"
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
