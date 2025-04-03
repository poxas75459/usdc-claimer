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
    "4Bn3Jt8MmS2k9o5jXyQ9xWoNgcgvjzTKmjUiSCCtyCQJ39ncnt9tkHbpNsCJ5dTp6ivsDMDdQhQhnetqbkMWeKEM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2fhAeraYx36oe5bx2erxDGpQ2gv78CYjPi19Cfk83aaejsMSGRPRd7EpDX7jDseLdaaiQieUmB3zsvwkCBGPYctb",
  "key1": "4mNyRjq57q63dgF7HGYAGPzDc2d9KzRWzJt85ZFQcjdranwboS2uH6gfynA3XCY6hbV17EjLWwQ9EAa19NnQRFDL",
  "key2": "4xSGMtjAtCWXso9YpyPmGYWhb8ipxvUfyAswJUYYC1M5ySYSLbMuhfExJtKh5HKjQWjyvXv8cXFvWqZ6SL7rY1ER",
  "key3": "25LFk1d53cGLkYGajHGSC87E6GieWBRk8oHFKusun4ZKidiQ3T2REhznVZikGBPdZqPgy75CEk8E5wzowXxccQvG",
  "key4": "miywBvR9HfXtE6XYitUMXQgjRPMnMUsJJTdb2adk8xfm5VXxZb3sMxcnDSzzL6L14MkHLe8KWxntvX2Dsj1wPYr",
  "key5": "aydkQBHNKzTKzYFyu3LDC55h9jcgAcycTWoLfAkfdUhvEFzZkqQWABbAfct1Evvqj4yNjihMFpe2NGEbGEb82Z2",
  "key6": "3iby5ziAZfYhE1RxdEcdn2kQ7Ub6zXKRsmDwPHNr2ZcZQW58G4JRZ6ULeP8auaSfeN8PmLdXBEtSFqh27afJwAL7",
  "key7": "5amS8Aj8G5ppxviqvKf6XKz4otXaqUc5Snq6Hidda5zJunPRm8pvUzifh6emCJUW8VcdkGTPhk7i2jgp4tstuigc",
  "key8": "34DRbfRrmD2DcENALL39HWcvSJNhne2kjujMkQCcv5eYdJ2WRMvbwibVtmZBqqz2ZqTdsmeuSeXMS5DdCkfDRj7K",
  "key9": "QwadvAZzDKP9d3wg34PuwJDri4JkskaWoRa9ibhSCqodG4hdV5YBYKuwAZzWy7CHppQiUCPWPE7xkvA2LgVEeAY",
  "key10": "4WTZf3NwktJKccL2C8nqTKZyFZEkRtbJk2kUrm7y2eYUHMRJeAmcM7Q1MMox4YCERPLKyYmjE9FknAFNeyhL7XvK",
  "key11": "3QvNE8RbFGgYAYm1hZzRuLzmwCTri7ME1mHBYTNPGgbfbCL2Q3EmUL4iLXfeERBCvq7Sm3RfvJD1QUhJLQ25pSYB",
  "key12": "2jDNfDY7duaxo2KcuGBsby5casAJGSiedCCWMNipa6inP9PEqq8yPeQSLsXZRYLQQWnBziviawXeEV7LVhpALcQu",
  "key13": "3yZ3jqTaUQLZsGnnqCUSYF4poYqoyDzbwPf5ZV17jpQdELZAFqRgT72TiJYdaUkuL8omD3j7W75PYHtgRxJwh86W",
  "key14": "4hm1VHfoLSCzNqLwag2D2GGt7wVKcJRGUQP9KNd7Jxtjecq6TkJop7f1XfZgdi321Co94TMCkKu9tD77vB2hYKLy",
  "key15": "5msisWqbwz7UXn6PAkoLGkvMCgixe81K19Nt6TL8uoGax8ub7RGgoPdA8s75fK2YYri1M3HWHPDe31ZS1jVK7ogr",
  "key16": "3qXU4KWfCsvcpvkTrHaN4tDm4BSeoMBppFa16MiNukgEqiruqUk6yJoUS2Piix4Ry3vuPVJ4QLYKMLKNaSWpagEd",
  "key17": "3W83oSMJj9662RqJhxtFZVQCjDZKGraVgAi5iNwPoHyEwK924DZn54FWRGsNa7ob3ZAcddArPo42uVgDwxs1Zopx",
  "key18": "4zYj1ijHb4MhLpeb6dUQPHdbYmPae8bc1k2SEuo6HbTQvzHFkJ9WdjKJ62k4zPo81T6t9fL9WpmdSRWUfpSrYzps",
  "key19": "3Avagmr4t1cUjw2zEBu6bZLJkSRgk67fx8A9e2u8BbxTbPawFAxD6KGRWr8q1L2ces5AmDArGT9pjN1rbtB6kchD",
  "key20": "2QkvxZstLzbssgSRxEkx8WM6Rebjry1Xf3vAzy2dGNGaqc9mHuLCX1KjrWDBfTbR5SYiwdeFP4teZU6A3JTaokAH",
  "key21": "4nezexMdwZiv3wExkAgQciLEZRe7T8qrKSfGc4mmT3dzgbrzb5cUmhBreYLfG3MQyUo4QCAYMC71Jx4j1qfwBWgX",
  "key22": "4GHwSarTTTHVCw45nfV9m4dj6oUzkvwgi8mcb3enYgTrwk3LuHEvrJ4LmBwAQ6mdWQbxeiCbR8vd5ZxVfYnwtxXj",
  "key23": "3oLsBZa5eRSh7f94QqQgtkEeYs1GDzph8dTUpqTBQ7SHnJGe4zZocq2j7dpm5vzDpsfbcN1KpUew3AVBjbU6dee8",
  "key24": "3PC7DfSXGyNp2fMEUZ9z4J1uxWjRKBQk5vD3nX4qeMZUQSMKgJqX5YbLiF7CZSeLd5ajVyA1z4HXBU7nGtPpuECk",
  "key25": "XwJtzRe3HrpvbNbo9G7KdiTB4iyTxHMtawKw44LLwNZeFyn9wdkqZfC2rgmDxLtQE79qp9tdVL9ups8NqKmEmHd",
  "key26": "2Na2qVJ9b3hvrVZFLc6EKi9PeFW5rYMLELDF9h7ktQbDUkyCTQNeBASzYjEibu2Jv8LHqzCe3XLm6gC4k1A6cQZm",
  "key27": "26YfiRtWHSAwmwJkoBjgq1DduN4aWgndR7WN5tDK8eo6CrBrkG4arGUNuSssXgPtg37gptX39gDc8L8Pi2Tcpdk5",
  "key28": "4dkBmNU9cDZEBgk4btYvujfexd1gPUgoCNnEG8XHm7m1H1cmF2mndR2uEX4gvDryqc4LMsv6rkuayTgqKUHNfYzF",
  "key29": "61N5ohLyXxuKMFeVxovBXbbCJ7VVsx9a6d5yxidgUUCekpAX3vgqSyp3zJsb3sw7YmKuydxHsxHZ6o7BmPJQn4Sd",
  "key30": "5wjxuTkHuPvWJLw3WN1VvPJ173cG2nbNfsznZAsU9qgmfUYTqh3faTLKgGr5z3SstCedYnLRuNbYNp6ATh6VSt7M",
  "key31": "3GVt734CoSASe2stpq9aMFh9R63UQtm3LJCiHj5njUBWMvpSzehbVmhmiS8G4L5jTta6ZasV76zVY6yZ7NsgXQtw"
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
