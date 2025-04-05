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
    "2N6pLWvbwcvvxoqxJ1t5M3ELm8Ro2hMBa5ccSjQaLancb8PjtnCSb6AXNneqU1MsvsAqSQ9GxYnzPqGTpAnyaCkG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2s3tzv3hoMfXSJKUETa1HQ5JfwRjGXb3CAvBrAAJ18itoySZCf5nqMNLudyz1tzRQpTpVtrWHf519bRoMo1FxEHd",
  "key1": "2bPVVPZ2LRdYm8YnyPTKPdNM5nzBjzLaWdAWTLWHEi7FtWwH98bk1ejTCgJt7vxovDcGJSkq84ThFuW9kZutp1uM",
  "key2": "4S8wAe5Avrci87dAoz2g3MgByELGwLbM5VSwjQhdHYwy3Mi9pv9i6Zt1qCJHQy8qxYchWwVweUXvJiYTzEViNXr9",
  "key3": "NAhg39CYdvs6b3aXfcJwGeBDjw3dVofKSbE4cgpkDuyb5a9oEgkd6tbHPnqD2Q96f2M9rTFWXX46qGqqKfATn5R",
  "key4": "2yaouEsxixcVJrKoTty1p9GKxC4ZSxVQYw5dbwtrpFjgswXKovRGJE5FiU5LFSjuZo8r4RqkmEffD36n6CUhXsRQ",
  "key5": "329NE1HVB8RePJ7SSKBUHD6JCAbPYkX9wxpQhu7Wz9GxppsoecdMjobLyujBeJRpcynnfjC85g8Qud9ogHm5SYPC",
  "key6": "egygRemsWCQC3CidxmTxp49YYXpDUNJNEswA97wieV9wk37mD2J13jWkT1ok1tzZzeHXct7oQZHCg4v44DiVGnx",
  "key7": "5Ym6Wg3ishmNTQfosc7jUHaugYx1MCHqdCu677jKeAoYdf36WpdD2zFc8hfRVVUwV33CSFFvGNaqY8iJkMf8rxji",
  "key8": "3LA9B6XLiG43wExg3hHJNfJHwE46p3XAXo7MzX4DVQdBYC5EuxHkHtbHzmyhZuTuhQkFoBixdozMnHidYkp3ikcG",
  "key9": "cVjFWzua2yFbxJ4RVzcWBnmWGigGo9oLyxSyWAaD5A9TqkwLLNtodcQXHHzq7ibZZegwdbux9rJRMFdYrUFv2u8",
  "key10": "5iMfFisFALE6yRsuF9zvam59BSg47qEK7YoXmVC8KJCrYJLhYFwEm1aJ1mfLRWM4xF721PaVErDUnDPv4jdNWpLU",
  "key11": "fHYR2tv6He5D9qxkYHk2Gq9AsduM6HbL8BMVi59nPrRYdctBfwHarYf2S1o6j4SkFWDbhPbK7WAQE99d9XkqTh9",
  "key12": "H1qcMgbc5pNpDSzC2jTTkzeMZFVFG4DZeNEsZst98oUu8raE45ag9bpZRZBh6VzLT2EiSk9ZRUAJtvPWLg4nx7f",
  "key13": "3tqS7KiSZgsnZp4UbHrXG8nVThtpxksLuFmkeCw9QLHc4Pfwfgs2D3ZnxtszbkGRtrWaKdqMoYPDBN5KNMDA7TiT",
  "key14": "4pGZxUMuvcbXr83SC65KKXvVraKBE19oTtgVQvesiGw4xMm7j4fNnzGH3U1tYfofEw6HAQ5Jzq266dFavC9A8NKj",
  "key15": "4pB6pivuFmLxNTTpyPSFE3QBLbjWwhEmB9CbCVpAUY4zZr9D31oo1cv7CZEeHJv9u74TicxNxmkFHp12RoX9VJEo",
  "key16": "pAKhw5c2RsQdaCDAacJaEAgVgctYAyfSNmjHtEAyhx6bzM3eBT6e5DYPGdavG1K1QUZhSqeEDjvvBRpCEL5SHCh",
  "key17": "4gctjXqsVLj7HF4CPsEsokT8fYJGpxVjJczihS7WDn6on9jMLb199mbfnC6Qr6r6UP5yr5akPiHkT9PUNGxj2cZF",
  "key18": "4prGQHojonYManPJs6nXgs9BHT2QkADyMJb3deXdnNQ5cFVSJFVQ3MaHYwp14JBJs8kkW4s8Mm3uFHKDyz7qX7sH",
  "key19": "4TtwLQTbbaPp3j5wVgPfxEY22SHD84qiwbiaegomkz1rFnpnhqo9JBT94SLFRw613jGHZAqetWj3APBjj5n69eUj",
  "key20": "3x8f7pDChPfF2ZhKYphKqdHjPHTV2bkXNTRAhRFZJ6HH9mQ1rqFe94F5ypLovkFPGCTAL5WR4uDURaUMNYSMPsj",
  "key21": "3dws1NcqvPsL5q8XfPdEwLAe4Aw2SA4etrXskVBNPsCoKVW2gLQc1xFHmHy5WpE5dDULW8zQZgkyLnw8GbxpHZiD",
  "key22": "3XKeB3raYSkGJQnqadG3w8Cq4K35VyqqQESTBz5v3AUUSmPf7qn1URbVLjNTr7dbvht44jUKb7McJ6EgFUvq6TqR",
  "key23": "21VtDBqXbNYaE5uUwEzi6kiZHFV2jyj2QSBXJwkgT6UALBgtHgNntE1ukWtSPp4pd82JienW52BZAPfxJdj92qAv",
  "key24": "5MYS8P3uWFkkUJpn7SAFUSKze6LoQAk4Po9xKCqJUeLcsr1adbq1Cr9yGEG7Tv3xRBFt5M7GNebpzYUg6JgyKT7V",
  "key25": "2Dfc9HbKU4rVKNSqyQWvaW3sbR1fASn5pwjfHRwUCQdyMPohBq3qVoWfnFk9ofZR7EG8Tb6EgHrBwCPbBP3EpioF",
  "key26": "27ZjBURVe1UjSmsi1n45aT8ZhzQxS7g7jXMzo3wpvc2Dcqt3t4cbREhPDKn1aNfQBHQUum64q4sDDMmJhE3oVLLr",
  "key27": "3N6joYzMtStX2gJfLHeByx8NzmPUX6482d14wSYY6uzgzLZUGQasAu3sQdJkNt84aYjepyvRpzArjSMHw8YaRnbi"
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
