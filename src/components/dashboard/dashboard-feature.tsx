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
    "5tCaXqKmEMVbmswAq5dx3rjsQCHxm18KcVJLntsHt7eWytKvTqfXJT4BZaSUpgUFYdvTxwoF3wwX8N21TDp9euG5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3eMUpyEDrSFhi6Wvt5ogTso3ng6782KGU2gqr7oNvzVRxHZAtvztdBqFdbMXVEcK8USEogqNuUCP6DoJYdwBxZv6",
  "key1": "5wyHAvECJ8L4eQQiVxcYPooQcNZfE88E5k7u6ipz7FBijE866wh9nZ2ZwfPtZa2QJjfkRfmPNiVGejp3rkLWqGwL",
  "key2": "2AxNaPvvp7z2tjAvPn2Z5EaYzomwzCefZehVdKJm2UMHUoeaeNjFTVhugVNcFnHXcauzuDadKHTrif8RYdtoP9EF",
  "key3": "DXTLsL2nRf6h5wko2nz19hBYrjxmettbvJm2x2dW9Hyy11cvHwxCTNGeugNV4i6WKvAvkKs8zBwbgFx2Kbj2w6R",
  "key4": "4T8ESwosqMkM6R7d7dKBTT4P8RnHgfWFz9wb6mMEMXDratCRL28VsyBCvthXTtBnq5ymojaWKhNsPPQ5ZAnsjHkM",
  "key5": "kygAmEL5KEdxmbGasKpJxrKvB8qx8AtppLb1RhCJ462L7cbB1Y5mQg6gxMsUbqG1jkPZE99CcKSxJzAyuTmTqnG",
  "key6": "5aKeuDezvH3xHrhZpqo3EfMMy1vTy65nVG9Dn8teGg4wULL2yrTFafp8AVtkfXdUSzorE8xm2T71ufYqPWsefeQn",
  "key7": "4PkHm9iHxC32QGzBsWJNxZGpzVNbQWbzVdb99u2TLL3FZ4zwf17vNDYoMYmHXHZGZDWbQurFgK27wFZ2mTWjEbbM",
  "key8": "4m7Zw1FYvoWiHtWtVe3hR5f2ivfPSiScKDtr2VihcsZbd3sSidmyR8G3MBf7UmyYdwuVr5spGWUdmVuMD9oNyPxn",
  "key9": "27WvtqNgL9HYmGuiTpSpdA7t3a3sqMo1Hf3H439yhKKsyytRLMQrtEAPfqaAYpibKBiax5UTrXu1KjHkahfMYMzb",
  "key10": "2MCSW69mGLoZhoVNdiJjitHyVGDCG6DX6afc4iH6RnEYH53smBEtYYQ8LwnbCKabsdHaiZcUxdXuRXfuLBBjgfhT",
  "key11": "4sTmiYPL8DXyQ6jXiaQnWMUwifA2iKovACto84cgttjVrQBhAdfVuXiKP5mhJod5EMjCPkDrXwvDoHNcpYgSKMdE",
  "key12": "3LWBtv3ymKD7qvke8qcsWdYRtdKmXBx8BnuzKEAKqRmzDcP3Y1HHMGRJyKdzctco8f7zogbJR5nc3JH6YWRicPJa",
  "key13": "6Uj3okUfTBmWeDLux2QLvYyvNXBMPtBn3uuDXnbqCqxj2BPv4Ev2bzrM3PfQoZonYW7vv5FLC8F2ns7v9JCnAw2",
  "key14": "ZcvLrrNMrRFttXnJPrTu4oUZRRkrntUxHcTzJkVJp4TzNeriRF64XKN7apvMHMTJsxjPhFjHf6NNtRqdG78ysXp",
  "key15": "5qHTC7FjytHTYHWGXEZLpf6zwmb5NqSd8zxPogbZDb9dKRAvg92x1HQ4CYxuu23ErH6TUJFhzCtBNDf6knwYmdKM",
  "key16": "5XcVqF58fr43uDhvF8fS1cGezncgDNPy26CqhFeK7rSBR5Q8AedXaC6ZkQNC1Z51v5K6DJ7wUdkB6j2Bk2zSy4cL",
  "key17": "2pCUGJzc9FFa9FeP81Fbac4Rjd2a17q3wqzYfAk88ZKczJLL9iKmS6ALmdKxTx5CF59tLcEbJbQp6hqtL9Baiujt",
  "key18": "5a2Zsqr4M6GupdJt2onc3ypisb5KFaLUKNYwt2FbzRMZLcZ6AN95TfZVHahik7Dk5KaCsUmQUSyUYU47b5YcmX6t",
  "key19": "4Nkigi8tfM3P9GL3gyutDVaCbURPKHHpEYbiP9ZsJUZu8ssX2nWFmdiRAerQmRGK8GC9QCWrXxBN6xk9FKxaqfjw",
  "key20": "5ZjYxVcWHZP9vWwsxx5eRLSBbYLF5Fzg4j8ZU5j2UW9poMp6JCvek61sw2Pyc1aUoWiZNXUUgrKQHwC4qdYFBTah",
  "key21": "3UHmsepQ4nzUvLVEzwNLTqjKyVYjPrCG17Wffed4xSeJSww4VjKY4NRphS8L9nmeTQHPWxeuWCSQXTLxeqsjXwYY",
  "key22": "4qEq1qqx35e5wLk7ndrCGMCiSoXgzneCg65dhry1Lcz7S3aRo3aBjTfTSobsMf7v1r7Ab8YUW7W8WVvxBcHoHrEB",
  "key23": "3mDr4zFAqLCxwstAUucEHHHmFvpLpKn2qAMsZnrRuCf28HBcsZcBxDAyDq1WojmhaZT3TEzSxmrbCiAAAkRdWQps",
  "key24": "2zCpxPV4Nm5MNmmEusBEEL3NGa3xTNbr1cKj1Mz9HKdgVjcxJJRPAuaBKLTt5q3Uvp81oTy9CETRKrUaLSvHQQNi",
  "key25": "3NzcStLQZc4tqihSr1idmjS3ZPeLXcGVjdsgog2yBrgP9TGF9cKzKK7LTKStvR7BgNHHCurQLzBn3rd1kWAtnUF5",
  "key26": "48AzkkRYXwS8Dawz8qYyArDKWWJWueZYeGEqbXyiRMmvkB36z36XSDGnM7S9jqPH4DxQVud2qYKSAdGdLi1gooRf",
  "key27": "5SGivwPBaB9ZxRJtTAveMJUsqA2Ar7Zw32aUXcdqJxNS6d4bcdjYJGMcy9phgpYdYB9Z6pdcphTuV47myHXuZtm8",
  "key28": "5vdA7uvWMxRUmHmHfVVqFh3p8sY7R1yY553SxYEZJCn3xotMizdJ2MpeDHTn7KVmSFA8WniUpzRtGC5UAsbbbVzp",
  "key29": "4W59m3vnr5wTCwhJYNNb2Fyra2oojcpuBWi3XY7T1VS9KRvnpS71xazFb46XkmnCPnz3TrichwmirPdAKbGuLU39",
  "key30": "RZZFMowQSdzUbrTuaV7UGHf2GQZduP6KyZhaMEir4vgPnqD7fX6NTyM6spb16QqCdDzq5uG6AKbcEynNHBkeAJ2",
  "key31": "WTSgTMJytpov7qedQoJqNXFUCTKvYHSfAiY7k9tGfBtBjteijD9PRPpbEdNaGFjzAMAfGyqrTF2uQfy5DWpsATj"
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
