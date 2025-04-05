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
    "3Wrn2MDLXjgLYAtjxBKK99yHzpZ2PUfzKu6bbBxxbPcUXkj1sKvV853rQK7wmPdzEU1JxFWmVq8wXmnTeknsZPA9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wLnpeoNCoHq6hwSCxKTtdaPHoS9Vti1MSLgL65DtGgXpQuVeX9t9wsZ9NhM5oPVMs8NoQit3jJ6GhysLuAU6oUp",
  "key1": "4kYXR9HjTeRizJ4jbhJPTe7wPKf1MzCNvXmp37BsaRBhEH5L4N3n9k8UmcrVDnfny4XKD6m47z38vE4iGEwEAvc8",
  "key2": "mjsCvRDtd1iaVXS7TuTQYe4m1cJrpJJ4UuNSV4W5zk6uGpVaGZfTJ4QR1m5iNgqwzeA9vU1xgLzgdFChu3493PF",
  "key3": "3k12BfJTnqqYvM2xoiSWWbCTsmbi2Mf1h9L2fgWfVV4vRXMwZo78UJPKJBWHaRyDhtu7qiGUjrceeHREB3cGZR83",
  "key4": "55Sob5sJLLGmMy4nbVWbJcLTF1sTefuBEdggqAwBSehNkEAbnRXbrUrUYVBdQEXAfz2XYJFKRHtEK2iQawWVXwGL",
  "key5": "5a3kbhY9KXCFYK7E3iLEcXkJtQ13eA9vYBXRZgq55ugY4DbeZcUmkS72iLUQJGjwXpKF3nWh5B1Aw2CwUN8D7idn",
  "key6": "UwoGTZtYZm4UmB1tMUNakxHihyS5DsNjs21o4M3a6p2RytwDfvEzJTRYdtaiaGvLe57kJwsuDXxeRU3EEZ5qroX",
  "key7": "5PVF3F6zLN8ZJ6hfqzE5oxb5LMts6PM9mSSRYWjqNr3awvAdVRSZDK6wgCPhFnHveWVvbHYJ9PzWsDAJRcMuihqW",
  "key8": "2uxom5rhnyc2wZjwGyFaSrvF3KBTQjSjJUYpJsuF9Q8Fo97Cf6fczUV8SfUcK4tPKW2MSm5xXZNETcFgbzeTv4cS",
  "key9": "26xMTqD7oWJtV9ptR32vF7r4sxjBXgVKNmi3JrdVGpN3TuYmViaa2gEPEKeTquPa1KgyD4dLmHZRSPkm3r3cfPdW",
  "key10": "4pgC8dFr9yp46jVDbRrSwSFd7nsTTBwUZohHHFERy63BTMgk4Xhk7X1oGs4TTNDZizGecKmJgJ9TdMCpjeqDku9p",
  "key11": "3ZhP3yEpnHoZBKECE9KXKKRE4uuYGyjSvhxvFPjWejvDrmk5SwMbr9MbTxne6UaHD3foLFwdunwFtBFh2kNLY66d",
  "key12": "5jj5pZnPZPFvrHuw6feZpbMuuNkk2G7fHZD7XWMhmNzxtLxo91znSSfWYZKmKXe6DzARyw1H6W31F2gkxu1NfvKu",
  "key13": "2mieLnjRqPuaViZyf8P1qnDEGAzdDzY1cCteJU9FcTo6YinDFCQYSUXekABfvnACUG5ZqaYomQoVU8AjA8jCUuLa",
  "key14": "3pgoJhbgaT3gmQfCxgoqroGVBW1gvX5wu8BWHrfKen1mz5prmiVMdJxHjWrcfndpx9wihKNwWa9z9dhGwVGwgtBK",
  "key15": "5P6qgrfJRQFNrzdGFmP3wan2Sx7AaCPMpgrnUfFvyX4VLa35PpvwVK76feSzohyzHserUBq1myjrNy1AvCfhVCvQ",
  "key16": "38UBhxrqq62EVNqTgUaM84JfC9a7RWVXFY4Fq5w1WczaX1ckYBBCY2rQKfpM1nj2bdUMAeubXrPoLKzeTseeaPKC",
  "key17": "64vxM1TXBEywfZSaS9BU3Rd3RNDuAgLBVnsi1G9spVAwNuNNgLcCZkYWT2B9oZcnWfSGsFvJhjP1J4HrJTPQLDzk",
  "key18": "XyFD9wGFyHz4vi4MD2SpL46r4tjUe8M1qyG3YfHKwArnfkyGMW4PHx6THgXcgwKWFoJGHe71KhHNPEKTDjxcvp5",
  "key19": "gkYeFDG7bWQqnuGKw3ny3EXx225evjhT5daScHzfYrazG9ofxXLxpHG2KKUQefSRcALDjmXhbCN5os8Bz61ziHd",
  "key20": "3XeLWijjQ45ByZSeoNC6n1Yd3J34fQiUJQnHYf8HdxtubgvCnZACCGsj4iB9quf7uR3dSVoZSBKcTJayf2LShpDy",
  "key21": "4gceDBYUAf3UyYDToW5czNfVX9PUVdq7dP7AWySkmg2my47E3nr4Gt4toEncV4wEVqBuuqmbwHD9PdhnrFRpu6Np",
  "key22": "5dwZW78HPZPWmbFMBKavnaHzQvtN5YrAoNEBQnhxqzmMYfVazPkpaNakLsg3J6eDFKHvD7Y4fEWzCiBrVp6MYM6E",
  "key23": "5PeYy77o8MeLJ54t5gG8iVX17pCQiTrRnUFxybtLKbnE4ZcuKs8PYyzMkP3RywEKRPk12UxcbpHCwdDjyCPZccGU",
  "key24": "55UkcB14fWaZxKYXNWhrhMYz79WZ2QPJYxiENhXdTtbxgKJLVobjDJ8wFaJZyYwN8FCtucQuLqbGwtcQrf4UUefb",
  "key25": "3eeyEw1qsoRWtgZqgZzriAjAonxccRZJrp1HtBtFXH8dxPr8mPYedtJyVMPdc4bngjNi1GPqBms9tFWRP7PVBfYa",
  "key26": "25uU7KqvnXVsTdkjEGf1cBBsFmtVWw3T9ZwAQicKBZXevWnMGbM7fdHRnrUryACkwfUQfASf8YE3EJHb6YUWaJAp",
  "key27": "g7sYGxc8MG4RXEMJzSr8foWAuxsahos1DCsNkWEX8TgmXD7ZdbPZoyfyUrfWbQ7jKhBtJoSfuAfqhn5KoW7V4Wo",
  "key28": "5WZYEPFhUJR9KBMMZsJi1SE217MjqHpdKyniHr6SnH4SpQANf7HLC2L72i9QQJzyBk35uafzt8oy6XC4s3Y6xVCv"
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
