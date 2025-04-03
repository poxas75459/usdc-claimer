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
    "3AmfHEoBKRmgz4R4soPDjLJVRaam4fD3r94ETcVVmoce4uBry7bmmcAZUrZem1KNftXEQ5LuiWtuPstfoMLydFNd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xfzH4w1DAtir34WCpArbFhiGV78Zxt33vnAiPbEiinPg2gRSUnx1fSfaH5Fbs1LYWvay59xeufw7irPZYPdgRK",
  "key1": "2jbsKfkdNhowDzXuzJKyd4F27fTxXVFhNTo5x341JErBGZ4T8ujbsHWQ2d9c3wKJDATfFcoXC9ic4NSKvcnYjJJf",
  "key2": "3Pxe2s8jVyTHYTJUx94tWohiRPhzmxnxsazPiqoqHbQUN5yje3a9gmEnmwoRJRryWQSqGejaHKva1W9w94XKwivv",
  "key3": "3t26uYhNZ7BDSPCDmmauRXqyChnGYuMZK6yurEgQeo4yUw91SPq7zPxKRit9TrjMz7DuWHcFEVY4AtyNQahUB6Ch",
  "key4": "5JKbKmXoHrhSPs5ZaZj83AN6VxLsMUWsvn2QCu2bwuDvGp9m96wt5QPpfdhjgPR3CFXdCRGogpmxBAVe6DsPCkEV",
  "key5": "53HPDcbjqj4T24kVRyBPYDtbBEjvyAeEv8CdsMjmMchsDqNWiQmV6SU4KEbkByL5FMYcELkhzgRzfABvMCA8fKtw",
  "key6": "2cjWo3vPb7ZSaXWCdZabJmns74FWhrrXj4WxbHXXv8grxQ9CuvScij8uTnrgYqcKgUeSVHu8dxJPcinGLQWqfWz7",
  "key7": "5uwpwHXF3ikwvWAarykWPuekjZ7AnVqogSaxf7q1eYr94e24Cv33B94bL4Lx8nQA7xzGNVYdWzKUyZdvz64Lw9Nm",
  "key8": "n24Wee96czb9wrj3piMYt6aPwNWh3Q197yx1aFgLuFSmV5hxnuBUZvXWcbYvqPDzBJEtNGr9yyeD9gZC6CpbXFU",
  "key9": "3N3scVPKriQRKaN7i8h3UFju413hxoYXvbLxWDhYQ4vhsrkR2iEBHCYkrFKMs4GngszcPzgXWeaTWQkq2Sb2y5ER",
  "key10": "253GdUWr6qgLmcWenBP6scBq7GDrooFJd4da6ctNeNoM1juQxWsqa2cULJ9wry6B2sj6DUkxL1YB2aZkyyahMNgw",
  "key11": "x9kUvzTA8DcoXYYedKPFfrJ2cnHh5gFhA9yabXHaiErrAUuicKPdBrYdZQsrC3FPSXLPJGGMrZnVeNzd6kCw2LZ",
  "key12": "hxZfrbfe6crufJbgdj7bcFkw7fghVUfibTarbUgepXw6WWYgVh4Beg7vB5C9J65ZKjHx8sExBDpTVBhfq9y8Nn2",
  "key13": "4unFGKXnAMJo9whN9syZP1JyRnL8NYMTKERN1tdQLbCwEmXgdze6siTa4Bun3gwC9Dk7x9Zf7wyxqdaVHWDUGUzH",
  "key14": "38SyZu884CggxdLGpF2xBv9E7ad4EpLxLBXhj8DFxeRT8nm3YoUbNpuaiHJh3kjYZoXe9bcA5DvFoUPcebxB5y9W",
  "key15": "32puvitgD7BFMDKtLp2ELQoJQtQBf6Rd9MAdZBx6mvaVc8T2Nja3u5PVi28kcsb86rdjWpzoqBKA5qVmcZw1DzZ5",
  "key16": "ZFrGPVCGzTLV7b5Qtt2FxCXbk43um8hjkXJtStY5QcBTT9j2exu3pXeGxs1uNpsBhgLVBzwMLNoHkWw4nd3ncMB",
  "key17": "2XLs6qcvxyo3AeiiHarqEqMAW8UtNrqrZA6Zi5L237wtEKVbi2VdB4r5D2fCMGZMiHmrkDHA6Rzfd3yNwUxtYhd7",
  "key18": "WdquF758fwdYqaKZNTzQG6MWn5hDDGbz61FLaA8TMm8GyJAAAoRWPhK5nQBh3Cpoy7QrPh6VqTrnWq32qeDdvtt",
  "key19": "zN7rporFoUVbaUyaVP4oZGfBsgyukrF6VSsim8qsKkTykDNTQ4MJRaKu5xKWPgTe2XehthHEWzW5aLMg7QnPrYx",
  "key20": "52BPmtprxVZTidQf546d1wNnHywZQyPybW29qp7iXktQvAAk1nUvgpwYpQQzi3SFMDQtqV6JbYrPhW8FrZeVhy5F",
  "key21": "5oJwoy2mCRPNRsQQ399A6KSaAvcZtTcbiqKTSkYNgpYBBnMWZjyFQyvUqY6dTQsPYchboKz6LCMrPgh7YrG5WZVX",
  "key22": "4JwCsUZZE6mFL261xNhJyGrTtpt3EM83af7ejJLqhzTneLJk6KgCpt8Dw3YJZVo3PucpRohASyHLM9PMKRpWCpfc",
  "key23": "22CiQfc4CJ5neRu7tQ4gVWxdurw4t27gQZW6axFuSqCSWdwSrhvnQpk8qmMqZqucXwvq4e3ueajzSukDmiiLNxPE",
  "key24": "SZtBPs2JtbzFaBkJQZG6QiYWoCsytyqBAkLdVgAXSBCNvYAQjUQh982TgLuDzRAtbGJ9VQCFMywVyJaXkb7FNhU",
  "key25": "3N7vHDBDBhkjryLgM3L5m8cLEBxHGbLrdrNLLJq5BRNrDmGeGv5rnqqMpBnjcQkPQ8MEbjA9Q17FMQmQ7zjYoF2U"
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
