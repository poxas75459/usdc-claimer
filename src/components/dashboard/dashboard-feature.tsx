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
    "54g9X9oQqYVCsGhywBFt1BH2DSaWtPGNekosSCFsTb9jafkjb34uieQKUp6H37HvdSNWfEx218QeFBk1GTjLAS7c"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5PLABSsN6DgNYBhAtGQ4CeaLogM28pL7iX3YK6ojgNE95Zu1Gg3ppDTWFDTGxyjwMFKKeaPdPY1mXFytxwCPKTkv",
  "key1": "5mAMia8XTEm3aAxo9qhsTejZDwjN5oZiQiekZpRoC3nkWmcE9Enh5FS3nytH5Mdf9bpExMaSSu6UtZVrnANs1h1K",
  "key2": "5iDyjM1SL31GQmSWcNPEGLkjKVpXk6sdDwoACePzMs25TK1gA9GXssFDNTj8ajrokL2Y8C6MwsYKmjxmRK9AkHhK",
  "key3": "2xt3v3AzJ6DthZJdigeLQBEu74akyvijeNeWGWdL9aezPTyaW1GwscsmX2s18uTmaF3X3WjA4Py4aEz31jnu3Bhy",
  "key4": "2Jbg8dnx4hRkxgfpoVHN18gqVG8as9sJxjtpf8cmtAzeGg4TMhCFA5Z7nKVWNzadtwZHaP8QifKe1cKu7Nnc3nJD",
  "key5": "3p5SMBZWwQDE3RGdzEUnSrARf879P31G8KmZFgD5f9H77bSoEZAbRSNjC84J273DpUYB9m8F91rPBUdwHxMecZTN",
  "key6": "k5KQFa4ShFgEguuMtQ3TdGhAFVK2mAT1z58Qc7ervZc7S2LKuREt9zR7gLJ3CGEsx2mbqigDXLHhua7KNmAc2AQ",
  "key7": "ZSAUsZbsRw4VWP3PMuFxwSy3BBXuE4YWHhX4iFB4guq17yKuidk4iTFwGTHw49gzLT1HRwPsE7DdXoAomt1kGte",
  "key8": "4KLzHkLUQfWrjwQVbHahASd1JhRJKejfzGTtLHAr6XWTtnFZwwe7e6qWYEiLpQcsmc4BRXL6fZ77xiPUhfGvPepd",
  "key9": "3t8Enhx7ntJD9rU9mgPwYoeX3nviWDiDFk2o6jtjcsJ3mC19nKYgVWTjXrYrwTgqWADE3fe79pmsjhbvtBLLRKJ3",
  "key10": "7DWHhK6KJM9isE4ea75sq4Z8VjHMnFEpEjGwLcpDj27qrFFJvv5zUT1gddfFzvM8dWR6qPoFuKFXNPZ1uzSx3K7",
  "key11": "4BiorA4zkkBYxRXiYx8rdukhWNN3kNjBKAbzY3wSPhu8VXfyj7Gy2oHmLsm6bM9mVL3bW5LSuprKpHV27oJiwwep",
  "key12": "2eTGM6UFERieM6LE3vNBDnqnCcggB2tzJTntYhxdQf5qECfq2rVc7iZ5kbnxWzC4zbVq3xzEwP4TnzpGEA3tRT1G",
  "key13": "4XnbJcf6c42wNgLrUhpCrPufpALuLQfe3qggNnriB8bF6iJd4SoMeHjFL738Rmjj2AWpKHfFUeWsLdVvoj5k6oiX",
  "key14": "2oeWEX1hbcNZMkTE3TrHccMSYxJdjqxNUZwvEoMwyM1S8K3w2TEK9etczFR5tRGXEatU4m3esgeVD9VvFvGjzHxC",
  "key15": "utSBeBEV1vHL4nZfLyXUdVmHbFszn7xVdhnFR9u9u3Dc9bn3QDXj5EJU1AceZuVDnyD9howEzDuPBg5DufBqLVu",
  "key16": "2faT4nqyYT3ebb7uoUX3i4vnwb7WH3hTt4dq6imJv49v332cBkKFnFNXkaSkQV3xSKFD7TJTmEfkeGzZ5Cc7WmfY",
  "key17": "3WkD8gjyR8q9V443GVzp3UgSbLEChjpG9FF9jCReGdMDrib8jn51BsKKLZncZUaAjmLJ6sSD7kNsAkBrYtaMdW91",
  "key18": "57ybeY8vLxrM9T2MsSUU2isTHdXtdxw7dg5mA1b9uvuUBNuqcT5zTJN8ByB6UEV83A5x79rgZtWK7L8sziHPY4hk",
  "key19": "3Pfu8bLermTbfjc5VZwxVcvFq3LYFJkemNzYkaN6MaaPDnGpKzXy81fhhpBmnTQqcp7gMeC1p2Chpqr67QTrCVED",
  "key20": "5XcJfozTzStwvRec7uaU4RmFjv6w1aFUzzXAwhkR8Hb9HjyX3ZayCywt6MkQisjCv4qtMfZ94fq6B2TtF1fUFtUd",
  "key21": "4a2J3ssZbVztrriD9L5owVfnE6uJWkVeEuA6wsBrnKJi2fKrodRZ9nMWCQHVMQpmVgCrBH6Yk2g3TqSAWbwzc4qP",
  "key22": "3nDD2bQxkUvHc3scojmGuDfEj2b8QeBer3hXjzGaYStQo2osKphwQHG9j1hLJN7aeQko4oqebQdhiDWaqr7QQ5qD",
  "key23": "5CYHMt7636RB8nEHkDJkQbmtkr3M2St1ZAM8qNXPf4nH3GTrFoQz8vHmzVFdFJoYi43drHy8qk8uuYhjZCSpqBDR",
  "key24": "3RSZvq7PjSL2pWU8PprRB5Q2czQ2xYdDrmCcrVHHALYNEufYckVFXzj5Vga9KjuYJW7igoAJkWud9iJrpArNV8ZT",
  "key25": "2mppukGw9P7kC2uGBWTDCzueAwEsbwWNJgYwh5d87wnmo6BdPhtxgoDtLaQ8W6K1fnUgvPYAg8pwaZxo8WupxnhY",
  "key26": "3ZBdRow5QjRAZ8Aqyn3iVua5YbQmcppQ9x9LQSwgGCWNDhv4wkoTmbJMK56fHT3WhdnZH12SS62KSEsvnDzPZMhX",
  "key27": "45mRsR5fgCSHttBgt7fknJXozKS3hUCacWBP1iucrSWT3NRJko3b6CvdDn2oqk2HecDc2BHF8Nd75n9bG7eMJfJL",
  "key28": "31CU93E2JqxsQTexjf4hwH78PohT9YL5sjgNjSHJyGhCZy3sFjegdNn65JLr8pvvQcCVAE66Eo5md3kaeFsdkzyr",
  "key29": "3Y4XpMbBEKqbvUUovDYeFsHZt6DxECM2hQrG9swARGPvjA15Bhf6kcdJgJKLzPWvSZATr6VGvAfj3egd131p3pua",
  "key30": "372RFHhHufdSuodmg7WctbqiWJwuR5H5V1KetZP7qCw6PDXXWk25VU72AcST9VgJoci69i8rY7JsHmC6FFx9DPYB",
  "key31": "52VSTrP9Nm7BuFsgdnyGQ3u6p6rr9aev9ABnF665V3KLjiy3mDJf6SRs4Spow3h2QDhjz7BxV7Kzr73HavHjcviK",
  "key32": "UJW5vuqCm8tguVZkSB7hm1m7CqHi9Z5NyKZUkqMGUhVE5SBVtuGTYyM9xCoJTWHKZHXgPEDTa2L8pQYkRnbYNRz",
  "key33": "4CwEKJmw6d8kgrJviw9dbrcZGUQuzXVfcgyP21AbZwSoVeCDMwzAyzp6HMRxPRGDCeavkHm4TjssVDMZEMiBYN3D"
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
