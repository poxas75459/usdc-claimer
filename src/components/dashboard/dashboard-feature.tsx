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
    "5BkjQCqnmyngYPqTmrq4CAg4ACyrW9bWf2AGLCvMT9Smm7gygnxrhBVbM3oqRwT7mBAvcqN5feyoEqaLKMPv51Qi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2J5rDj23SG1BuCooMKRFYDwz2xYCsFua4WW16BUtaCn3AThx73aGqaSMGo3kGyJcgXiDurQwyhLRZ7vnB1Y5w31d",
  "key1": "34itDpz4kzsAfp1LqKcKoGfmrHrcVt6EkuGeUXWYet5TfSHgvwGZFZyDyjXzqMsggNrqRMSS5E2xFKB4ncpXczhR",
  "key2": "4VkuaVfywbkhW6Tn3whVzvYKdoixXd6WkwHv74unKjuxjmLJvsai6phSu7cYAKq15apxnpeSp2B8A5RmCGspYU1D",
  "key3": "3uVXcbpBwnr1JS1vLtNP5dn8JVCur6F1AuPC7nMEHmr7GNrXBcEfL2zaMoitHWD35BYGFXJG7Cj5em5YD2381kvK",
  "key4": "2AdncaC4vekyF36ej5QqLTkmRgZTkSzciwZYQQiNtdKfQFuFtnnPArGow7FJHsTkgWmMdDHLE8qtHUuoEDQ35U72",
  "key5": "2LewKSeHSb2rL6SBBKnbSv3od2szuzESfd4m82xb3cxCwsA4LiCTnLoJchKo8MN3uJsSiPQ1nDdTiXG6yDcZmqyv",
  "key6": "5Zddj5oKeN8HbwdZDgTg8QGruTozbKDMFrDf6GG1qKbGirMfMKnqLFSN5KKQh9B1QM8DPeArPiwwtvcjJEKFEouB",
  "key7": "34o3MD6MCfNsQjMbDwiwB83JhV31SuzhVVcThFN7JNk5DMEcnUgGUfsivT6iX7ZuZa5nEHdjiuQMau6g7dGWoYBT",
  "key8": "2wQq6Y44vjgxdBKSv9XNpVgkeBxFd6yvAFsJMS8ArwY6XRZm5Gt5zEkgYo7m6mzB6i2ZbybZGSnLuw4K5JEHrvLj",
  "key9": "3sLRBcNPxNixkTYXhDptYNbAceRUCCzznnTD7FvnG9fF7BFk7WTHbHPJBauGPAzaZDqw8SpSU3RjcwbMK6TH3pPp",
  "key10": "iu1ZyfgDqBsRTM1eHGLiwAooJ8YjQ3NUkHXWq8EYeKJ9ufAaNAQHa7N9s7ZRxafzsq2zn8FoCHSSSWWz4T8wuTf",
  "key11": "3YztoTjW7UrXyFrNcqZofmFAtyTJAvZcbMeJJveaSSudJpcUWgAbeb4njGX2S9sTmWPBBMGntCmLLRMZg4uafMCG",
  "key12": "5V97mxKsEX3PUkWaBPkmiongvCr7jeJLwE9rjno4kxAY7WaTot6o4qnNzucawq1Dt8Sr4vYoZCHrLXzEb1bDa2Js",
  "key13": "EemzDS5Tr8R7Ax95q7pEvSYiEwL6MQGVrjqvSvXLgBW8994Fe8eL8a8rnSwS64qc6PKrvYw7yDCh4oa7xYwGGuX",
  "key14": "3mMGPXis3eohQpYLEjkhDZ44MT6HFTBYe9TX75sSZzYDrY5iY7PRHRA4kbep62VH4P1zN8iMY3aWN5do7FWuybgR",
  "key15": "Di7XLP5tkoPN3R3Ntqw5S6ws7bYsq9jRey3aiJi88R4EcnsBNQdk9FnnB2qoTBA8N8WBqpEKvMHSP4wHRHpPrtP",
  "key16": "2SD4jpRzUCgjAcSJw1q2RZS275D94AQRFaff58gh6SQHWMpxfj31ez2K8AmyntrkwE4ioEt234egQK5cCcSRLv4g",
  "key17": "3LJ5p6i8MqwkXqJwLtqNwxVvLXjPHvegAWbcj59T3ja8zgRAWLhUApQdiAeg3ypYSn3CAT3B4d7fk75XJYMNPywj",
  "key18": "5EeL6JbJnp5hvCatgXjSHv8L1ZreS76nXKGiuwi1FLj96jXS9LgwMEGfFF7C7Ucj6N6S9kYL8Ge8XnhY3B3hb2oh",
  "key19": "4WQhss3J6nYuGbre4nfi3K5n2n5cLbEpG2x96eyiUm6hRiAwfFAN6VkVVrDStYRLNrurALnuFxXAN63f1AANPWfu",
  "key20": "4rquEmJYxgHAvJ7BLp4tiuM9Usji2xDQyWhE1w4n3G3QLmQs9T9GgFdJCao9AWwRR68LLhHNWcwciyb2283TAqTR",
  "key21": "2Y2w6gFBfJZWVrfq53hRRkZVwxY56icdfNKVrvGh13yr3w6xxrnDkWmfFEWtPVpFbHdwqXv6rVDqrLCKfmDTxiT8",
  "key22": "36sMphDFMe8FYNbAZ4nZNWtDySF6sTyi8ZLJbvn2zkBQYi3G2qaRt2y5NLtbKifjwPqYcym5whM6uufYDmUTnH88",
  "key23": "CMTGCNi9p9uZH8JSk5a8VQsLLWuV3aqHGnBQEFoWnvyWN18y7f1UdfgbuaAtaqfPZQCukinhM186v1sysezgLPZ",
  "key24": "4KRf6v48GxS8BBRydbGPM3DxCsbEoq8iuD9KvVqjnLQC8dhcjtquKCS8RnpqW6f3nC5EzcFWM7gsVu8aJZ8VBmGz",
  "key25": "4AcZnaWhnZXWu14w8bqY5DKBhuY8veksH3f883nj2T8YHyCPBMv4ZDKthhcz43YgVr5sL7LUVWKEXVXeggji1vhr",
  "key26": "N8C5XbiVKpREgAeFtUqLrTXBe8YWHHajz6MsKky9WVSiqoGGPyW6c6VZiUiDnHs3vvKfExPTztCqrF9GsSjEH4i"
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
