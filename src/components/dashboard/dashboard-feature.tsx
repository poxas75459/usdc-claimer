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
    "61DTmGbXGkMJaGJnjS4wbESGLEjLoSJMy6F4i38CTzRtSvWRR5Xq1aJ8NeurbUadbRKij71f1NUaj1VADWehfu1M"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51vgw1iVLNgo47wp3itmzYGaGw8PqrrNgRjCtkUK4cMxDE9E5VmEoWg3KDtxvV517bCPKJJWvwC2hrv7kQ16Q3nA",
  "key1": "3YDKWWr1BtLhgqdXBR8Js7nSiZaRJAhcmhuhMzq1HEupzEYFxDZcnAhtDLPBPCPnURh3Db2wA3nAourRWZPkPrX8",
  "key2": "3RYiPTpsZMwEWVJEp7UaTx6fVsT3FJqR2HfazGJiQoWCR2TruBGVwJ865RAg51r1CK695UQk3u2b9LDzHWcUzBpL",
  "key3": "2ng4Ps961pyXXvxCoaVTMtciBQsm4KNBuY6QNU53XB978JZyMq44BWWMRcDMemsxuHjCPDRa8LE5v2UktorjTD3o",
  "key4": "5n1kNpWdcuwrJjgDVgEacCSv8wKKjHyxFZKNQSerUqW2Ey3AEEtM4xceRQ8vUm1DpufAT2638bXoTRiDnADe8DZS",
  "key5": "2cYB1rS7FZLP4SLgbJn4m7y4JaP4DmJynWkgkK1KZK9r4WK7tLHsGKASerNFcA4UPipfFUhmGxaZ317272spgeuH",
  "key6": "3oX17PRcf6M1UDZvZ1xqC3TeWPNgbhJKLnAfjgpM4wN5CY3Amvmae1rUaLoD5VDJvAqdR4yyJMpEF4bMZNESKQag",
  "key7": "3iF4NwnbU8hfS1SPrpvMvXNPpzz5vjZfYWNomHk9onCZiN8eQzcYfSW9D15mn5gzB6rH7DdfaSLYUYLTHhWe6fey",
  "key8": "3zXDUqVhS2y65tV3RVqWiNvQsB1QWXkcHWYqR67UASBcRpcemC8r3tJh2oTH7SyPbYKZNBYppyBLVxV2PC5jfYRJ",
  "key9": "5tZ8wLRXWDvAv5oKTG28yP4aCbKsa32QjyeLzPXtnRF4t44SjVVTBt3u9eb3aVAd5kKjLA9qoKXu5fcnggfAoikH",
  "key10": "4MdnXzey8mL8PCFQoz3MvGcmFfkdr5jNxnTKniavMKRxLwaoFqj6cGVwgB6XxJVXDS9Zbr23wnWBdPgZVyTLZ2sM",
  "key11": "5jGgeohq9yY7E8NhgPe2joy6sQ3jo7jmwDK9wJQ7JW1Dm6EQC9Nu2UynboA8uxfddsJSPFoHMUxkMXa2MXZdo8SP",
  "key12": "3AjM5y6SEoXuZyGoALDx3qKUiG5s81Wo6UiMFrteVEHZnymryzLSNJDhvsV5GatiP6g9zAyuZ5FYCExPmqEjrhrd",
  "key13": "53PpYisYqdZs3srUA6TPqwo1YuV8J2guCoBjGpmZd7LmbqEJrXmBxEUK3uWCZSZvaCTbp1HazTb5o32JBGrd38UZ",
  "key14": "2RjEXn57K1SjEWLPQdARkPcTBw8eLVF6KkCasdP6CLVFE9WczUNE3EJaKLzNQJHC1n3S15X5uQjm93u8wmEAdkdU",
  "key15": "5Fd3vR61F6n8RCwi9t5jsMPU8mAmJhtJEdfqFVqdFVEJ3aLZEYZh9PFTPjcuMkx9mLbPVfAPv6mDGKMm2us5HXBV",
  "key16": "3jsv1d98opqnUcqn864ocvMGQJEpm337sULVoyHk9P496DL1B5Zm84qSD8UGuu4R9TJ2eUJd4tBD1P7qsqA3thBj",
  "key17": "2cLZRVMbq7qnagYWLxGyrwLUy7BifS5sKykPg35vtGtnt4EVUtNHFgynvTpzW8qhS1af78CvAcWPtQQLxjzVhGfE",
  "key18": "W3ZeRKBKC1fwjbrR2ktzAGJyjKxFgUtpYbfYyCR5qBcb9yJcHQwiXJBK64H8u5QfbhWYtRcrz7rbvbk4U8Bv1Dd",
  "key19": "3FEsXgdvjaKFWoHFVVfZjayriwGyr9zQxaRdycXJH8QJ4UYRuoApGMbygmy4xM6Ss4w5nryzx51sK51UfkhfR8N4",
  "key20": "61YQtBUztA8DBo2V1bcxLrh9TNo9PqTrAY39nFodidjsAqMuVbaCG3zPTFkJRtJGv1iuxTcX7GsPx7YCsgijNWPY",
  "key21": "54WePLRwVdvLs6y6X9vr9g9CPsNUA2NFGLKDd9M4tEiu4dqnPQn6xrfDtHfABoVDh1Y3uXpkeLj9Je9UXzn67Ba5",
  "key22": "2iSg8KHknVne3ikNhYsSRZuwEYa9kPEknrf2h78uXjMkUv5SyeqVNx6X6CXTUE6d83xAm9RbfJteQPjjEsdxHEUN",
  "key23": "wF2j9VBhFLC4eZWCDfL7K16z7oq7p7mSgrWRhjwEAtv7GB3srAEj1ENxFPcU6v93dd6MJ3G2t5HmQMLt5u7u8PS",
  "key24": "nLnt9iUm4N1ukeuJHRsFgohcrpiPZQjmHCm9t43SA5dA4n1mJzVo4b3ZPabANonEQBiPYwqvqJV24qmxEBUTsq6",
  "key25": "4cR1KR9VXVqFwJskX5fCKx8WEBc9pA4u1fqL87TSxcsprY9LWzP51FzY1rcxxU3opTtg3HkkhPjKCYQX6gLpbPPo",
  "key26": "3iejncnY4a1y2jdTX4iPXPYqGad1q36W4SVS5MLLKEyRmXCcZAZRtLnXEZKtmoLSJTPFTtRzRte8XLXJrg8K5EwB"
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
