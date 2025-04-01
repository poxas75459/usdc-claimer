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
    "BtM67rc9ob9GUqDDRwh6fkkmxnaDTjFVdNctyTtQHJMaeCdZM9WcZBaMCWPjzvxachvavStGRKAnjjXpTiofjAi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5KhVpwhFpC6eYUL74xg46zUDhDiqLsNNwpGwoLUTxfDkkuMVdhfj3xbmkgDp5weWUFr5dcbCZqEVhW5N2AbNSZ4a",
  "key1": "yZurKaJ8u6sApxw6HU5uY5Jz8iFu97TR7MscPi2RBQKpDHz4qwBCxfat2HHAhsHf3rrw6kpZEhWH3HTmh37ghqH",
  "key2": "4x5rLMs5FuuwwM4oWiu8hbwL7QeRFZJPJuZAPeeYareTBAHf1QnyQCye5EninvWVx1fE6ByYCyfAY8ydQpfB6s7L",
  "key3": "UZvhhvnEAjZz2DvsYkNJ6zpKhcwBZBHGqBWGKpedu5eEs2CxZn1evFBUWeqA8eKZyQ9CtLMUrnPRyNS8jjyWKuh",
  "key4": "221PtGkDMFHKSeoB2rYW6SdnxvGcv8GNmFmCSdQiQ4GuA4zgu8oaXbyaikeiHGkvnmtpJSH5uzgcP2ZefpVKht8L",
  "key5": "42uSv5LbQZPRYkDdUH4fBFqZrpkZZsSnzekXdCjxZkwU6Jk7djxmj3q4vkVL1imNZGgt44QwbWQrmLJk3R1GXkzq",
  "key6": "N9F3LyCo7rsaNBzQGW4gt14zzdVHJTdR26A8tCu7mUHqQn2V8nfGNjgtD4xpn7jJKb94HBpgRdjWN5bL9Jd7T5u",
  "key7": "2qJmae24u5KfqhjA5qa1WWYNtxmS3A7XhJgC4XYU9qoTARQRqjRJqneCV1DChoefaWQDWYCrQQyupudKjpxDSwsK",
  "key8": "4hrMxAgtg43ZyVGSb8PK1MGUtVPJQCRCUAqRNckfimj7imcfC3ESXan7U1TABDx2ha32dw8GmoF1GiGQKng58jMU",
  "key9": "3PK5EDnSLzeCvQgJsPi1U8LCEZw982puHwAs1ZmA8kfbbCvtC3derabJ3ZMnQ6QbCCRvshim5UTxyHcnoE8xot1z",
  "key10": "3LgAeCTguGTVSmmpz8Akf76Pq9FxKAoqxbwTeBcf7pHazLy4N7zqAei2rn5Ebj5MXk26wSUdar8Dtc7BRZ7Y3QZY",
  "key11": "5hqa2fwa5wT94mi81YeZgbYNu5pkxvPPZbD5ftqp7zKXziEdGAEKv4tv74DfXZfTEqsrarTEHM7G45tDqhB1DJsh",
  "key12": "3s4rDX8z68UWydYBsT4nTf63vZXBTYeb1Hk56pcBarx7UAT3hPdcHpzgKSjtTNcCVraDGyUXAtSodVXduE66UUzY",
  "key13": "5EEzLH11DozvqQfJm3qAwCAyc2FkrhhZw5ruUhxeMFTm63cnfSijxJ5zExeVBHA6SfySJzYX6E6Reeh9HpkCNYnL",
  "key14": "4cPXX6vqjkBE9kgzj3RjVLdqdnm4nJJf3nPpkyo8gqfofm25AahtxEzjgKRYqueom46FCJjvnJj5qiRizsYXaHGz",
  "key15": "35VEpayx5EdUdZhoQ9rTUnNfhFQyaDXYhRgx3QCuMEFo8nyoaS45A4nYptyKwPHtqyWPUtngnd3dC6WEMkKrLKCD",
  "key16": "26newcT2FBry8mbu2JaJ5bnohJwQyknv2uazpYdvdH7PkWQGTYJQr3BayyzXg6csGSKh1yetQ2uMEX5hWKJqkp23",
  "key17": "mhbCafH3F5fMvJuabMzfMYKhGW6UhxnzQSAF3UDowbRNSk3em39Jk7Mw9SZzudR9HYB7yTXmHqB6CPubSEmwNbb",
  "key18": "5KVXWWv4Dujk9n6xjzSAr4ofEsdfMn77EXJeahUpUQVxNeSxkjJm4s3dBMju5WENwDaEZFyxcZxTca5XwU1Mrz1C",
  "key19": "3vQ39kaWggQMXa8xw9tP8iShQKjZhRDn3T2YNGcn3GgtTZUtH7iqEndishVd3nTc4b8CG4UJrprxGqWL2WpKyb9X",
  "key20": "2FBDBWboKn6uyY6NGcBe45whHHEZKzmj2BhgnzCRF6nuQXTe4tR29N3uAX8GCryhS5Zk7QdBw8mt232Zzp3YPp8k",
  "key21": "5GZvcC2n1WrCo38jFPQYuS3UFb1D5ayqzegNUWjfWf7rdivrMJXpW2Nam7DnHRryuMaU8J81SJNRcqPuTyEXK6Wk",
  "key22": "XuW8feseSTBQBaYVNp9wbGmsfirjw7r971hXKpFJC5gQJFWFXGxAYotYD7wJPEVJMgvhbQNq7feCXPGxnk8GW2P",
  "key23": "39zALVkn7ZXpsWZBbMMVftGtsSgJFBshEwjKHhG93of5zW89Sd7ffgUX2rxftaG6oiyhrB31em1HD41L6GQLMuaK",
  "key24": "5cvXhUyEDmRupXg5GWjmQaN2PfdXNBGr1En3c4ZtS3UUF3rMPVPet4ZnTKZX87WKgHBG6brYwvRUvBLVxd9ZaKNL",
  "key25": "RWSHRdtdAMwC9GxmFhJBoMakjjJ5QEe6k3AVivuDrYWYdpPMC8JjYQKvvB8Rda12PnTkHSYkRWqaYy4DLh5w5Pb",
  "key26": "KrZtSVPawwiA26268M9xGhr3sotB1ZVXcdpogdpFfYebj5pHNdfsgGhPei42po9miRX51ncWYjqy5jTtHAsJ9Hb",
  "key27": "4hDLym3vWd5o8VWja35ZA1E3yxPuGJhVzHtVvQT2EeioZ1dUQJTCbuY26FusTwT5gCo9m9rC7KGAXo6mu2wGmgGC",
  "key28": "2gyy3phxG31CQD8RAwpbNLkF3s1LtFW885TxYK559QJjjLnhqhVxZKCMJyxRJeVQfZobGN4t9BJgQpdt3axRFs5z",
  "key29": "4ZtU4EBVapqAoWpDfqZ77mkU4d8JNjSLXCRgpc5nrssA6tZp31omNMBP5ELpdzTZse9mCsGYm3A4FUT4FggDeVro",
  "key30": "5rvmfsiim2fi59Xgyf7kEKLEj378Su97hhmhGfNsAhyDEdBmdGVGCNmnQ5SrVLiaKeM6uSyWX2erhtd9LPvvsXwN",
  "key31": "MiCY5E5UF5hZdaKYrTH6rRXpuinn672Jk68DnhafGGLYyANCH1pZsVnx6jxEsPmEy9NjTHoqYdMDz1oVZAC9vB9",
  "key32": "5khrBfCgwdMJVxzuWPAA2cci2tuC9PTZ4jMXsEPfuB9aQBJCg76Xoc1hyqNQ8DDXj27MNEME4TnT7CtKmnQ1zYGc",
  "key33": "uwgk4iXp1om4UoMQg6VNnfpChJC3YiJbPEFQwepJ6JMeSFwDouE6zvg83VfKmQeQTbN6GwTK1xuuSHfE6YuHae9",
  "key34": "3mwSMtB6BtZurp4V3kcacHA83pfdJBbEBogt7JxQnwdpUgSVLRsMRwBDNdi5j3xvR8o4UCsRnUTMGurTwwbhxybU"
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
