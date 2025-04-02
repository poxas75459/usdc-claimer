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
    "22aRmjasiiQtom2RmYznyZhhYRb22m41aAbP12Ji8g5XstczGCxqNBYjzaKMPDB2o2CvpZJuzc4jwvDTPm4J9fEk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3TNGSg4iKiDeYoukd5fuGgh321fPd6qgNeCRJMc2LTzrtXqs1Td3gShqBMZv5BKMjQhb8wa1TF36P2LvMV4iriLA",
  "key1": "4Gkc9DzTrNAtsLBdHD7ze6UdUJZFscpt8PeFV2iesCFht1NdU6w62BzbdRJDM6tkzo4Crp6dmgv5KkmUDDWquSFA",
  "key2": "4RDbrbH88vRzGcPnjjNQCTkEeRVb43rS66NsCMNkMB1rGyNyw9CwxQXnT2Aoqgz2ooc3doezqc6m3ToQ7eWgDhrN",
  "key3": "22JxRieMVH1z6j13Gfvc1aHqSrqg2oskRk3B452BZhU2vpPc7Ee1T525wNVq6oKEr5P9sXVpor442AvdGxmmC2fE",
  "key4": "4Uy2eCwK1kxtZoS78tSBhgSiD949z2em9bRnzGQftdvuXqvE6nSwVohvi1fva9T8hqqEFxGAQYdeteCiEWR3MTAi",
  "key5": "3t3nAHRR1vpg7DivVBWwS1ftGYj2UXaRy88Md6zhJqCMyrM4qiRsBcUB8zy8iBrBnt7BfGh449dkLNog3RsJCfyJ",
  "key6": "3t8gTrxiDXrwUjMVLeYjHjSbx43Snh1pTHveBYimmMoeBfVpQrDG89Sy5axP6seYHrgZhvTvvef6A1PMkQ1zUCGm",
  "key7": "2FWRWb9HkhSYp9rez2H5pv6S3XiUnfzKhJiz5ecXzagVfgSEnF9RE4A5y68EUPt54oubcSubVAQjjSCBJm7B4GVr",
  "key8": "hPBYrNkWzA8MJenDAFRuocC6CfkJvmLCGY4iPeqce1Ths4PSYbCdzAdfHDQK2LHQ3FSrCKXi8SdrZomPmg38ofZ",
  "key9": "5Ya72oxVe1WJH5YDcBBYCg9VUqSg6rDD1D7GBKZJP6tF8mfjXtA2weSV4owk1csqjQW8Wnhpt5DehpyTo1AAmszG",
  "key10": "3NUcznSm78dK7fTwZJcYq2HDFvKVG9w5vCzHFhvXDthsCycamdQ1HgFDUizQ5ZV4crNwK1mgixNWPB69aqjC5dhr",
  "key11": "5tnVVSeemYfF1mN6qwMDhd8pddYvnx6PXX5tfKSsYhKKtUPwujNcxpUfUG6fxSh82tsFD7v5zpp5hvAJEgLgkSHW",
  "key12": "5UUK8W4r4KnDS3wxvf42oFMuTuWXzDVN1eF3atjHdCkEip1TDamCSiUHNDk7dYFvEr7ZbP2zkUdNx2L434tM3E34",
  "key13": "2ickZx5m8QUHhGEbExM6mAQPwnzazk73Jm3xAADE6oJ5eJ2u2f7xZ1P3F6CFx67nGWwq95Hyhx6uoxdAcqmKWVKm",
  "key14": "4CKXbWygoYSkuG8GgrPYJxpXqwZnjEj76745i8mPftGJLM6DEZG7dYFNNvVxh4gCEg181AW4zx6DtPVhbWd7vUFR",
  "key15": "2t8kMW2L2Z9A6tBRK6VEjBFvYrBuEHwmMbYLb73ifz2ygjgkEgc9VCwTaHvqJcK9JBCk4gAEW1ubgY8WTkbkYDpK",
  "key16": "sXPraKNqYX8Hknv27UsoUJmm4Vzr2HTCNnXdRmmpAHHZo5RH94LDcUcgUnGAYFiBVq6TGvxDGAmy1T7NfAQ8d6A",
  "key17": "fKTouRZE53htB1RfsqknAgavBu6bN7P8T6WSi9GmHtAy7nG8rLKqR22V6nVfQkudYBsFyEa1YR1Av9oUMsYZAH5",
  "key18": "QL3AwtLBGqWfV1svGoCLyixtCQzEVPSTVJoDTNE76w3GKGci84Tn4doo4WTStcxpLoGVNT9Vko4CFapgvT2WMJZ",
  "key19": "4BV2QnqswDJn7JTiGHZe37Y38trxroeZ56adtwBJncDRg3ZbVmVqXf3sH4CBD1hS9QyDnFjng2EFVCmLVVsyL9WG",
  "key20": "4K6nF2T6ddFVdCA6zbCGsb8iC2X6MjgwypC8Zsd8S58B3FZDSEumErJKkrak4n8uJrY54wVVAgfe4KTNRtdnXKZK",
  "key21": "2agyaTrbw3rTY14p9D4fxqCyNJgb1Fh2jSaFmZ6Zp72nSbpUp21dEFNLoHxFGa3PbrXfDUCSAQBgDb3JTyekxBFt",
  "key22": "2QQYU8hLBVJh5HSSsCke2dsWAcJ9CWw9hb5NDZENBjVFVNtN6sQGJ6TvsxUQwGTijw6d8bEXKb7h1LwyiRs3KegF",
  "key23": "31PeQALCy2n3vnnM8AwztH7jXCTSWuqdH9pkkN4cDNNy4HQAZBTsx6Uau8qeSEQDyLtXs11s8spLQ7yM6SJXyFV4",
  "key24": "3jpRQgYWRUpqexr68w1cFQddNYY454SU9FBaTdjeX72Bi67pVdQjSAS4kz6xWWFfpWswG8shp8wonj6ApeV1Efkm",
  "key25": "3CQev5pDVktFXzXBz42Pvg2oW9WgtyKg42d9ZP55V6WvnAotcaVFXDYhm3ezhw4dgbMNX3XM8qfyjNBe9ygHmP3i",
  "key26": "2ZDdtZWUfiUp1XmKpVxvzzcRgrf4bc6ikiW2mDSUYGRbRaJULahLSNhmnevu8feWTyimhhQvKYHY9zhEkD6TZise",
  "key27": "28fiBdeU4c2iXffMsz34zZKDAYPQK8GUUZ2xyagFyED95J4k92fgJxLeCnbuTfvHbNv5xEJc2v6WJCwBooB9bzFA",
  "key28": "3NN2GwQSmViyFMrCeQJhyPQ7icJbQ9eYRYHRPoCHYGm8SUrPm27dS5V4NUWp1kaLXfEvRqzHemDuJXvfFHZssmBk",
  "key29": "4No4X8pPmX2f1SsiMDAB6reqDoYgWas3DH19gpaPRxAjJbF8nUcvcotVQomGSuDR3NJ2BuLHyFQT4qu735MQii9x"
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
