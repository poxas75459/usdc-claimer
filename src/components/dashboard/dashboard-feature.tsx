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
    "3U37itgo7E2DUvG4z6DW8CBeidGyDsAvKvUX3vzE6zhuuBhKp7cJyGio1fXrzaizgNrM61szy1vBLXSLCEZxj5wN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4NbC9THegywwPSPcxpo3Btmais9Yf47yWhcYqxT2ij12LG1sQ9ZcCR8CxnYnGWYqLMrBfrRb8rtS1KkYR8QMdfXK",
  "key1": "x7EyNxtCGvrXxqVpTyWujcQ7Qzv9h3nG5BQANdDuMWDrkjT2n4YUBVhrc8JzQc8L4KutRDPvfUsxhZwRBcZrMip",
  "key2": "31QBw1d56UBK4rzwvvKfapQv4L46s12JR6zXmuhqmmJAntpM5FAxZ6c2q4a2y2FdAn3jMe4eTRwLmYDQm7w3vPkZ",
  "key3": "2WGJtZNqjggdwxz8J9JSgkTdueRLbuBTh7tQrfDXjUwdXkWo6Qw9tYVt2e3hwMRU2hCGTzrCA76CEd2Y2hGcY7oW",
  "key4": "peQWWVVzGHegh2FJKQZgeTmfWBt6spj19PioTSkrBqozrQbGNDNQ3WYSpRiq8jgUYs2hbqC87Kf7CCxvopbPnpW",
  "key5": "NUqJ9p7bUjAGZmtKkuKvBGQTrzBQF8uceEtTkPhPYAPCmo2vbRP7r7HxXmBmrYvAH8FecJogi7vmnVxgEvFb7X1",
  "key6": "45MiQpnDpcTW92Gy5DDKHTDPn1KMBJbqxN8meE8rJMrK2bcCTuw3gc44fAoYZY9xZt9Gim4ZS4PRP5aHQExeHT1u",
  "key7": "5urQeKwQaED1fhD9hn9MRcqUm1c7zyLuKBmCeVTAh3XvvHrEwiWAYoKsHBs3MSXr8MXsXbToNBXEMFu8mBzpSTie",
  "key8": "65ZfDnzh2i2NV5k8GMX9zqy3Pjko3HagLL8wxW1M5iyGdHYFm86XBGECuphYE6WqT29wwRuz6HtdJtjYYxprMemM",
  "key9": "3TRkJvARLLQ598KVDUUMfCjpdVpCf4gewnkVhH1QPCJATHSG2mV47XCs5YvuNRFobKGCBm469e9eCtCKMcdkz6wg",
  "key10": "2pnsqUafo4c2XJtRYtKBT1pVDYVeNWZ5swrowWDv1nbFcrhRGUAPyMEPuz8dKp5AcnpMWKiMhSaPHhjPAdEH5kvs",
  "key11": "3JaDZMuzhG9RULa9kcAH1MN3dQBWsKhN96BW1zzjyPDXL4h3SeZhjn6kKPMqqH7AWb8MnFKYwhmZ4Zx2vXrkpfrN",
  "key12": "2pizoK1JBWYWQz9CxHbZSmqsmfjAJJwtCFr49QRSW565cFV3kNDoEqmhgpPK6BQPNW6vHX57ABqf3wSQWTrAnh2Y",
  "key13": "2PUihXCY2zX57pP4LtRq4hBreRgahxQfSUVebWu5eYg4iHmZ6Y9amxs9UHjkiSnDEBnEbuzR351kNKbRmLuJtRAp",
  "key14": "5ZZrDL7jNwAwRVSiyZgzqvL6FR3XJMVA7zUeoyCF99Jr7fRiAXeSdZssUEDhGBSmjoSpY5kfGYgMLeqwH9vtKhUv",
  "key15": "2BbSedLE9eK2UiR7meuhYGUHE8gaEFzoMjxD6Zqm626CoXFLPyFxUriMEpqKZhXenyQH3HizVkGRunZvw5K7RQJc",
  "key16": "cMZoBS752yUBJyEPMJrTSPoYPWUWGrwAbjeuFrBYitTzteViD5fZFvHriL3kpVC9VLqaszaBtGBrfaVZm99SGe9",
  "key17": "4WFoTq3kDfADjf1t5oC7tZHYRzQAtXsd2BpCDy2jGTaLCNaTcrvwTKdtuEZF6Rs77FLykNpYn52ybRJbkn4aY4S2",
  "key18": "4C7Jw3GspXmeecxWBGu6WxYUvLjzDAMHtzKsNU3USeTKA4LRPA4tSWEv7dkvbJqCRUFuPASaoewNhH5i7yfDrrNv",
  "key19": "9LcuGfrehXTiGAnBqN2CBh4EQiZwRTxS1LFs73w1Wbhvo7fQMh3QA8ySnHgFX6RPMQ3jpaLoXkHewdQCYsXxHDR",
  "key20": "37WGNefHtKNYMeCCPZMix98zYyixRi6xTbCWd9pi79TAoPkcEpwYYB1zPqrA34KYydxG2jR2ESv1n8Su95PJRpDw",
  "key21": "3V2Lrsk5GxSBQaqtfS8umx7jxCygx5ihNAT9qjk6YCV7yygH2PBbtiqrg1WkETteHuP5UtwThYDEesZo1ExgWVzK",
  "key22": "3R4Lf98bgoN3dNkNYg9B2fytbq85EmJRRXLmUxBTCQvfQyKS51t379kVNaPt2owNh8ukF2PiZRrguF36UXijZRZv",
  "key23": "2H4YaMEZfZKjtK686D776cj633CNfFSfyG8pmeATCjuuyc8pqMnAuhrCmLaAR8BgyVYGMLtueoARFLDP3UWkMZgw",
  "key24": "5cyoKzhPno3eJgAMNY5eMoPHGE5XV98Wo8SfaunxkGVr9of3wL2M59GYdzBnHp5RydxK8ni2wSNWPY8rCuqQv75z"
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
