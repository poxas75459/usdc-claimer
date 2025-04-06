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
    "T8vPCXzqYZgj6yfwWztcXBmB1wmY2WydxdTPAhnURCmQrP4M6KnGD9Tzv9CphgW549CcKh933NPAYy5fdP1FCsd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5WwUgpXS45xju6NJBVB1mHkyGxp8RaSVc2TNEDnXo4tdC9Mi2HwvLu5384RzxjDrog91yb3M9ZHx98CKUTQZ9Kwo",
  "key1": "2pMsDV2kU8AwBanH2SrX1zoc2AF8CRYzSFF9upG5akLebRG9TDu823dn5H2ks1mViyaAP1UPYyiWgMoFe6JHTYme",
  "key2": "4Uqk36Kmgfp32agwM3ALLgotJUjLTauQjUdShSxhuGCTGDBKFE4mXdR5Wa6QXSTtyLiEkXEtWQNUxuHS7EzxUobK",
  "key3": "4Sb6zS2g8i7DZj7NBd7363u57kibY7NiV8iLqALaqaPywSWVx9S8h7zPXRJmWRfa9cTKEReDpZHi6es3KoPZPYg",
  "key4": "34N2BXy6MbXvBqSVLY41Bz16dZSsDG6g8UjKQX71osJnqV6ZE55kdmY6nzJH4ULmc3KvZRZ2QaxezwTypE7RKbHE",
  "key5": "2yK9WPJdR5UraRi6u7wV4aWu3Eu567nCEmUXELfovjYQgjjMZwkCEc8fLAdL2tJ3SokKPKWxBZ4UdjYkTQaiGPMt",
  "key6": "5NpcuoTZ1gDnRqDmfPd5VzCUb6kma3B4Lxc2DfuucpC6JZjRHFHjhX9zDGk5XoF1PxKKiYspq9aFfdqwDWkJTTBp",
  "key7": "pA592Rzn3stmAVSCB7ntJDwbCo1xE9b3p3nTbaVjB314a6TPJ3D8iz3BzrL4cHpGzijN8F19kA6cV5FackT1KUs",
  "key8": "4UzmUTGJrZonocjVDvYmAuZt3wp4jW4UNBpANJK5UP3hfdtKcJyMR3NE17J2oTX6XwT3gAvkT3Zba5wGkwANj5Ww",
  "key9": "4PbQJt47GG4i79sJDBnkDjeTBKZ3fFHCahTnNXK1ocveNbvLPZs4t6LKf7kd6kgebwDwLngnUNnvgeoTsszGvfE4",
  "key10": "5UtLw2ibzU672nmttEgEgQrNP7D7ghPxdNkAQUersodpocsCz2sdx334wnP5oFUoxJbwG4JVMqE6GrHnKb1qRpNu",
  "key11": "4x9bYX96gyLpQz17rh5NZ2bebr2HZz8BHymvfNBwxBWu6v2mh36LnB1oiFHLyxV6rG2c3gPpbK5iko7SoUaVAn1L",
  "key12": "5Df47zGwVbqb2QYj6CRfq3UhTferSmTgH6eFUqc3kqyVyeg4o8cx2pySBWgfYc76oak2gZWWE3A2wdSvVDBE1Kdm",
  "key13": "2JyMEHbjSCM6iR2QP9AeUSgEQeQkHZhovw1jiKsSKvc5155xiQmfHqJc5WefNPdFurCsF9FNGPjFoVVkArCyex8g",
  "key14": "qRBHLAebJJDo3YWpbLA5uxTNMLtC8qfLRaiXVFgsJjjk6mnL32Whpm7XPFihPi5ZoB8HfTYCFFY66Ub1GbLHJuS",
  "key15": "5HAqgeZ5JD7KsPBEKpfYEftio4tMfKNsc4D9auys6SsyvqPDZD1r35eG7dkXwykU3WvvZNYfdFJoJWeeDGXwpdhU",
  "key16": "2YuLN4H7jmaGfVqupXd3QHVQcLPrUdggVgqmzCUAYQz9KmWqUSA9DzwDmVzFUekSdbQCQJ9jduyjooKyVfkVDZ7D",
  "key17": "2vzWqrQ2isPTYavW1RdugWfWwXQJ44u6ee9QFGcA6hndFtxCLVBGZF5GW8qVp5SLHYhDWLVd5984syxp4cawunzQ",
  "key18": "5TLuobQF8erFykneE8QoQ8QJZwvtjvd7n1vQrUCnfDtniFCu72NxpF2cGVaECPV1NfEwnbnZWnffy6YF2eRnJA8r",
  "key19": "3QXqU3UvT54zWsLTGb2jjMSFjhHbeEBNzfhVteCeDPwuB5GQaXSRNtEz4kd8HFyZdxkrxTBsArE5JuStsswZZqRe",
  "key20": "2hdEQ7eHk5gctULgNvskp2Zw9iuyKRzE2nqdQTifB3GTcKPVVGY39fcuHSmYTfrTBNqPtDbDxgHKDU93UHWQAoYe",
  "key21": "4TgrfqZ1VXwCm7B8QPC83dvWgLTEptWWZRgUS6oAyzM5gJH8XFy63b6n2Apbhvz31YsayvSZxD7MiDmFs6LGHdoB",
  "key22": "4UezFZS4KKndwjR8cuyVwdjmdxo8orqEY1mUEUW18ArGKVU4oztMxN7Wy42dniLgFjQqzm5ERTxKY7f9AWHWAuRs",
  "key23": "5mK3ivTvD7JShsxGWRZ6BJRpfuEJNGd8gGzrqVQVJvyDoMMSp2w663439AfNWpwHqwg2UeD3asm3Hi6YVbZgmvkh",
  "key24": "2axx8XhHuZnuT7eJL7t4Q4jQSqDckGXvUtb3GjACDdNyzC6cxZgd9AtsbY3fCEijXr7jcYCioMk2tcQzjNPAnTvT"
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
