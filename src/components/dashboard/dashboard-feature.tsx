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
    "5RcvYZ9Gq1XBMgGtvgwzABcMNKqgur2dLb541KLauNuBEeuDV8w1p7QaS4vs5XYvGC1mKVTwvHqBKwjVgbR8v341"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ZDqRKwKLrszHGRy3qUucX6kDwnm861s61uESMVS7RGQBRHgELA5tcWaLddhzqFMDQYsCqPKMpkXymHRTbTsBqmH",
  "key1": "Ay2eiy2NoxP8ot7q6fajdFtM1S5KxezCKDXEpH54LFzEjpoM8mUDUsuB6trUWtvtGAJGyVYacKurFpi3zLj6fCA",
  "key2": "2rx9RchpgDwfSBpZLKt5m7PsqoGpcHFcLwAZoVVUKUiZjnxrM4QigivWdaWmPGqyTiCXLZYyb4r4bd7Lkg9BqRQh",
  "key3": "gYDsBMHusYFRFpHGgiHFhhxJtcrMswJB4EYD8EX2GkGfroAJbZCwT115KMnyFNNt9W7iU8z8fAsunwr6wnMgTQK",
  "key4": "3WH1gyUk75bHq6h3HGp9DyAUuZbT5LM6a3mBpyJkBnvfMKY3pxajRLiYxiPFmSrHc6UL84PX594YxAWo4n2iV4wx",
  "key5": "438gg827bj7LqZHnQd3d15bzZWWHN4TxgwHXzpthjLuWheSNF6ero742oM4strhscJGA2Aifowu9C1fBhhTcYwdM",
  "key6": "2a3VsBpqVnHSG5ce1N3hUwkhDbKwjAE6HQNcKy8rAyyHct8bnGeKqWZNpT3PYyYejTzsCEkDpXMY1xAhTBrLu71X",
  "key7": "2bE75ehbaryfNBACre9Ngd7UEqmXxjcTtzXhZqqHDdWocte1QVWd5bPzBJcGg4fwPvQGw3x7b8KQJv7WrfHY85ip",
  "key8": "2kixES9WqDo1cvZwXZTSkhXRt1wpbf6JTLLwcv7x4h9RL5N1XXaHv1ACauWgRnFeJnBSCdzDbWLT72T73hoR39Lb",
  "key9": "51vmy7iSnZUimZB55AraXXh4mAHqRAahNVKQrpCYjKwGPsqgReMBgUxBtvwXtg2a9TRCofCCsYaGMD1AboPHT552",
  "key10": "446tRRQfW48KLpiwEzUNrXsWeHozyXMMRwbyDZPm8hBEggCiKo6m5aNrkgjjt2aTZvqAtTZeXvZSDZiEh6G18Vib",
  "key11": "5yTBTwePeFbhbNqzHcH3iwzBqNbsEmjVNi21XdPzsqPcAwm9fXuRauMRiHkWR3sq8DqE9LE6S66U1LGRLBiJBxvH",
  "key12": "FUNVhNgKhY23ygxAw1WeiDgHacGMmjG9eA5NhnYyAtfbaaYpa3jK7PMHNj25G6uHdX6oJv5bKvywYJFU5vS6Uau",
  "key13": "5toRH3qJnBWqkX7UchJbHZQLVNPyFEr4RYjiQB2vUJTBupWBQKsVCPNYs7w9rGfTxu6Eh1GNBGPBzpaiqwBL396G",
  "key14": "4F6qp6DFHDDrcpS4R8YjaiiSPvBpCKyFhv7gm6TT7QxpP6V7Gqj3zfWefr6StFsd69U2fFNNQK5djcp87ZNuvPxt",
  "key15": "51XVS96K8M57QSSubEUpvvDngtkeKLXpGTA9MWJXu3GthVdToCBhceVxK4Tu1n2SK6zx7KFUVPZVVLyYsgprHLyj",
  "key16": "4BGGTjN42h4E6vduWQfhCuMHmCyE6NHsbhGfGQDdbxsZe53GPLDWcLqQtoVngJWVp7mFS3UoFpfDBB5m2YeFcy7o",
  "key17": "5B2rmo968RfgnygsPMV6XrszGcu9ZWENZMtyy3iA7mPypZdqwD79XoU1fP5KVzPmivRxyo9MWEh8oCycyKQzk3CC",
  "key18": "4xBXSAny33aU9p8CaKooqYnPQ2KdqwanzBFxSXfCQG4kN8j81FW1HhY6yA918Y3tTsPqJACymHcUcxFUpVFnsxUk",
  "key19": "4GkSGnjouc1u2JfJ2qGXSD7gV2GN72jP7u7PbtjsNNK8QfwDhcLTbfj5622e9RRC1WinG6ed8QwVy3dkrL8uBYJU",
  "key20": "3maUYR9hFeFp1qMyTM7KXrd2gZWmUq26MV7WfvMmNdVogJAzrzULU4bPoQ1grqESQQgvYjgGjy2UmVkfHfhcQB49",
  "key21": "5EQsTcjkepMbtkMoroLec4EYh3tzvAuyQTrp1XcVBE8UsyfS33n9Kg9eZ9CzA2HXvws8n9kq2SwbpGpZaL8BF5Yh",
  "key22": "2znivR9jzvjptX7gpURA8CFmS78CXrCqG9Gk8LYC6wHVZgkUHFPFGEnx9zHnmiJGHBe9XJCQiaovARXvmvGCZUgR",
  "key23": "4VZfS3aJDRSPCdRcAqLJuAPhjiZ31wwN6XSdLypFyGt58ZstVQiti3DjhThSNLVeGxAJfggAM5q6Ek6yfPSBW5DN",
  "key24": "5wwc9icXaf6QmdpsYHTXmpmeiS78RE6hFCLCSufbsrgWYGZPtqYLqBWbSzdgujus3y3UAXupR1Vd5WBfCZwedhjb",
  "key25": "4tShbPKfoXzYZ8nUiQxpR7P51J9Uhr1QzyBGoaytJpzb11LoPh1AbNA77EsmqWrrDX1DzhPfUSh9RN16JPkHKpiW",
  "key26": "PtB1DKLSEWLEG8Vq7eoTfJU4QmJBwbfbbQUtBfZbYjXCzq3AZkovyGNyzU1EBy6boqVtFQuyvPYCYiDKDL2VP54",
  "key27": "3x1wkaNZcNzorkr5Hg9mYWV1c5r37bnSLT7HGckuWrC2WJp5TZWBATX9rdQTEYcf4xrutJy2sCzovHFHgSYfTApH",
  "key28": "4PSJpsCBqKRPhVBAd5Ce6w2M14EGQhtXP1n7LdEX5L9mLALhCWi1Ynvord2Scnf5rSDUQz7G6M6JrWRqJNTu68rn",
  "key29": "2dMjaGMaUHrUUVv7uPXzYhBcyGj78cVobs7vcCunV3M7GHuPe51MeDXRzJR1B3hTtBy6h8wdMETzJ2zJwhD12Yss",
  "key30": "GBt5Lk8PqJhrtWQ7zaRtoyzTPmKsahQsPLLEq9i6VCZYzHhswmG3PPGeJhv9uwqLaGfrzTS8mAucQKa4jQhgyd4"
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
