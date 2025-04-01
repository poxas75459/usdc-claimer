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
    "28SNXAuXXxWpjCZAJh9WTJEXbMY2Lp76hvMmYefryHzVMRcQUQLC6dfJPYURV8B5b66vfmAqxatePeB7NMFsHuGd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4cjqgzTHJNp3eVoVifGeiWjtxFgJC5JNTLBvtontvxJnTTeesRKAEne1okdvcMx4Ut6isSvUAf6nsaX9gG52PfSb",
  "key1": "2VKRSEBd3G8qpBq5PcstkBhnRSQNUhm437Ed5TUEpckmFLEfjCrDgfQ4YKn3ZXVbVrTFyXvU5BvrsEEc6qzxPxdm",
  "key2": "4qo9pPVdzizCk8VzPC92N1gEcbzCoLuY8NHnHMjMF5KbbgMmTKbfS7AbdkFwJDQwFEDrRDE23uV878vTm2rjphGD",
  "key3": "3GUUgWLp1nPqxWm5PdjcceaS97S3kGFYWsh369sKRJwtSGMGhxBHDuGoJ5HmsKH6kuiXQSe3JWFbiy4Z2WsiK3wq",
  "key4": "fRNm4jidKfF965BraZArL9XCEdpdU4CEN5YQ4hrBEmX6gBiuutMqPmMY2JAqeQQn7vBnhDhmDbapWbdnbjW6HJs",
  "key5": "5UnhpG8tYMBa6bznqK2hZhm1yvb6Xsvks1YWdVqW3f2NCPWaJLT8J6PGNscqTAapzxAt8EmvWjojjWmXfFmDLNMG",
  "key6": "3hDzAfhV4SofxpeqHu3xtLJhHWgdZoVhbgWGVjJTEbFfoSxfgiTXj2X9xhsF9DxWq7pD7aKXgH2uXsTRW5BEfsc1",
  "key7": "2UzmKNQMeiMHRUoFgK2bhLhNsYZH7bgPiXiLiLLziH2eoMkFkdtZAnwzCwRwFUVversbJ1UP3Lwi11wmuNhzGJaD",
  "key8": "23UA6kWuXvz9hpc1XmW1h1L8sBUxKYRNWCZD9c1NFYXFjxtSk6kN6geCJNhkcAUcTBmKT6muytoA3WzBn9FDSSPC",
  "key9": "25BU81f6QMUy281Tz6ZuLcgWAm9S3SUAEsAqdEpMX1aZotFFL7BY7HpaJqhShJC7JHYgMWkBB77vJdcejhUWUZzq",
  "key10": "5gzTMCsiGjryNrR4Q2CK4qpyGAfndtGNhQ57NdPCWnqoxmrxEvLnNutxcpgaiGiqaANv3YNX6TuCZ87Hb46t3k46",
  "key11": "4h1BxJHzn338wjh2Unx2WTabSebVpHGcE71zKbrL5T112vovKUfMqc3Gs3kEgaBoVrx4opBYtc4z7bZR1C4a89NS",
  "key12": "5FJZPvBxgGYRU7pESe76zEFwPvokRfjjuSsJmxrdJN2Z2ukTqLJyW1CLK49NqaMQRvyoq26Z1GBy2zARokFrJMzN",
  "key13": "vu1u8gDbRpSF6p8D6ofB8joZDtN4mcbaxJEk48iQ2ZHME56kXCRHpZrpzgtei1doV7WHtK99MvLLok7jxhoMta2",
  "key14": "4N35W4f12QnuhZER79qtys9YSTwTNhymWAx3cPQVAyZWb7tqt9ToRbiYdMJrLbLeUegpeJJDq98jMfSGqxdMRXi4",
  "key15": "HeKjJDN9Hi2V19gD7f8paYUpMJQXvQT9ZijT7CTzL57UPGbCeQPLcebLENKfKNA5TnXhsLiVx32de1EgceNoQrb",
  "key16": "HgJ7eVNBHFP9ptWvmRvTGEP1KdKUNeBmh1nM7eUJ5efm86zQ5pD37qTDkdB74wh5ri4FArfye5akGtsCH4c3x1a",
  "key17": "5eRNb2EwaHCqUEUGuwxMdBhw2yL7bwAhkKD53Vo9Z1P9yAAEHZZadmnFBCHwXDPMYJ1c1kqA2ZngQqWzAgb7uJCZ",
  "key18": "5b9dvwo5CFVGxaXnWVegaeddBrRSCtRgxLpdDrbCMoy711RawjkotUjXkBStkYLSNAEarAskoUyUVnqu7E9RGRfY",
  "key19": "2RaD2u9rW6AUWAgpZ8v8cvfhvj6rM1MoCp2VNTJWQkL5JcE8UpaS4FYx2GSJVyGn13eDvzZMP8na9ejwSaQAJXh3",
  "key20": "5LXibUab2fhZby2JarTL9PPS8yTuuePBdHzHtu1jL5MCdUcMp5j92ASQKaAZEjBBLSgUfdqgasphbXrRkk11jiiR",
  "key21": "2g32NehNmoxFZuzBSpPbjkNxJ7yYovqU1un8ULoTzbC35VyVqsi8LTnLETEZhfDnH224os9go2y1gAHjQoQ4A6ff",
  "key22": "4QmXacCL7BRTWJb88KmeJQjDP8x7KTXKtii2G5RocVuNK2Djnq7wiLNsuxaeUHSsojBmJpE2rriPPYNCuEQWKuZV",
  "key23": "JdKzhSSFKx5bVapGyeng8B3KwvaBk3r6F4xRGqXHpcZVxNqFFByFrFBKq5zdrBEwh8jkYijaEA3qz6fZrPbLr9n",
  "key24": "55egDf5fNVUHwnqFa69J4pYfxaWqYpGD6oZNjNEpQYCFa5ESUKpdWdznzFHkskRu7DxPN8Taf8KdyX4erJFjvNCx",
  "key25": "3YpGjcooaoiXut3qJ69ns9qNyUeovC9rMEeTuvyGZWh41ZTMEQQ6VGCygAGc2nA6SqcrAUEp71cyheBZCreQsrD3",
  "key26": "4PviipJh7yZCyS48SkndxZu3m6YxtDunRLxj51iVUiefxr6FdbuUyVmM53goqXNzg7f4mtRFcK2wKbS8uCaQr9v8",
  "key27": "5eyxmDeVhiwg1vDRyZRMW42RjvPt5pKJqY9P8GrmaHr6JjPFN5Cz7n4cM9CRhRX8cuyG4TTYdZQA6fJorw4fLNyW",
  "key28": "4jNFpERdgvLUCFYUsPo7rLBXZqgzLdvAWnPvBu7ZPFKFXN1iyK2wvBiyGrhzYGcioWHSTxh1itbtRXqiUiJjnzhL",
  "key29": "5ed5FeoZyqnXvveFobcQTk2jQB6QShe95NAQ5YMpUffWAnwfuSDbCfjEHkEtF7DnrfS3gXNJCho7SCVuaJGKupyy",
  "key30": "3yT96ajWQ3h3TEWfjZGbn88CBDH7rH1yhJVm8EFf5kvifUocWedN3CawhmbKVEDo2PfAhJ47A2Ey5N8TfWujoGWg",
  "key31": "4BfpronoNrgtkEuaZsa955BCDGWzrxknr4nupAgiRijjgzsf4EqrX9NFy1VjyujipG9TP8knd1FAZMWaiybkPawj",
  "key32": "3mcGd2StrQqJKuzQ9SS9h9sc5xnY57mbLMfk2uuiRzERwc81J55upG4FqgyAcgEp9RmukyET6L915WJWj36SKb3y",
  "key33": "2cgdvwgvAN6GTXDte6qs58ny95hD9WJ685eBRXS8vhZcv1VVSG4X2VKZuDrHmXzpHqCxBinzzNEpjv8ssjWbHfTf",
  "key34": "2AfT2Djy36CVwWXLSQumFhFF2PgZZB1hhcUniZA4SS5kR3JefoqHpargwSwQ8tXiSyj49hVDUjLhRLkz9juFrEAH",
  "key35": "552Z9QdpBE5NS5Uk1gAfkMrfWrSwQmMgTQucX9DYfxRLRFCBAH7HjdptQVDJPjZY9v56uxcGycjJ4jZhSfu4LkFy",
  "key36": "5mvAc4Ub3bCp7Z9U8iv261nsezZ3skPsyY5tm3quQrXkVteidYnfMWQ7ZuTHhqs99oy64ntbRqiMMVta7iPLanY1",
  "key37": "1Q6UtF4uihipb9iXPni7A2QAg2aeeuQRYjoYJWVvE5v7QjpbQcSZEMDaMMwgqKepvTJdkCPRf3LUaPKRtnaJYqr",
  "key38": "5tSZNZE4QZLCZq72dwPL8HBdqVor9QnoHr4fZM2aHWpneQxxajTHN9KT9NDFZEt2YFXxmiMbgQZLt123TPCwRJEM",
  "key39": "4mtSHtJ8CgeejBwy9ybMQ2oKKc79sgbTvMCq3Rapgwfm1HYg1T7Sbkg1eLjEqADngVFCcw41EjCm4518YzrSJ4QL"
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
