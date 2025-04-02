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
    "3hcqHrVj52Hq5YbSFjPNk5quVTTU87CKeDuA5We7ugdgUDUV1Tnp3wjhDZYy21U3qSWBeAQirQALwcySUjzvbHvM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5HG16qUeiTEXXFhhUq4j1eGRBYbdTaD37Qkw3vAzTrdHCZHXiHaVAjWHWztMi4g6wMtHA8CUnEwau3XP367gMDAv",
  "key1": "31R3NHxttZHTCvyUCpncA4qeQKGCdWpQBfZ6ZtRdoghEK4jXALNrYz4U3WvwsGCS7SE8ydfAHycF4SNAZxFUJaEf",
  "key2": "ExLLUoyAK1X9KKF1jLzskJbX6gTe3MKwg6w8VJr5rzySbkM3hfjzQpMex6GxzijN2ohxR9cjYGey2JfzJruHDEg",
  "key3": "4Mbuc4ASn8Fce21qvPknhuuFgAunLc3uPtskpoQhi7BLNxJqFAGzDtB6Ny7cuMnPXv7pEVRcJbBJBmbZs9iF6Fiw",
  "key4": "3AWxZrJHdyFZGmjfsHnr31PstGtZkR3QpdJ8Hrp3qZqmvoFUib7JH9FKe6LQxcuidFMgkqMPNmuPJdVh7iFNVtkD",
  "key5": "5DczBVzxvLe2XFmnrhDphzY3twDtuDMSaFJ7MDQUcpjbT4EqkoXAQwtneWj1KBs6XHpph4Rs8orPJUcWQZ9cggRv",
  "key6": "4FBDg2pqRjPGBbnjJ6CitafiukxLUg2ujCtUHoyvo6Lv8LQenr8fGL28PiKhKq8fwRP3AJYGfhuLeW8vJCBNgfY9",
  "key7": "z3dyxosFPpuwuahZqvXfvNWENbrAZgR5wdUuN6vWNyuYomnVZgrdHJr1g5QgEHEfEBWgAC65FzsGtbP8yzDe9Vi",
  "key8": "5UDeJ4TdAgjiphQCY7xYTUJ2gq3ZvZRyRWPK4teQ3tfnk34LkCVPRLeSdBEyMZa3VuuBFfkqk9Tj9CPoQ67KhUGz",
  "key9": "2hdCkejFQroCK7upuzztkGa2JmHzJPuaf9drYmsixW2795dYAxpuzBVwcDNafe9n1VtJBZDB6qBbH3mfZpaAecRf",
  "key10": "3MGYAkhxigds8qE9uc9mMRdcafWcN8oN1dSLxXxorKEdwDDFQ8zSm8gCRamVMKvxismT4rwWHkBZsRGcHrds1k2t",
  "key11": "5VA89UQCu9DG536NfvSPvJ5CaQHYuHhVZccmfaTa1eaZpwbVhtPhXG1eN9LLyp5j9ycTaK6aGqSoK1Z3A7pgHLhH",
  "key12": "25CL7rzRKfE4Vcv82RETjd9Yv2FqwEQGLA3Q61kADKc9MdTgemZcGR1m2miuT6Y7mhpMMGa9GfQvuqgHXxmtTxw8",
  "key13": "4Wjm6eXqmb7gHhx3KumpWvRtdb8Qmpn8gHM6eTPAsueN11RdL9QVKnJr2chsbwhHVNGXbQppCE5q9UpaDajpocL8",
  "key14": "xWEHWML8XnAkv8XxJVv6sZdJmCYGG5QtDEqfQm5PayxTJBtBUthafA5aCjjTbDXgXCBrCq9k1i6NfW397BTCE1w",
  "key15": "2Bw3Fr66mcYE9EnoENBHCHYbhz1pUNgzHHEKFhuTayWZGXfeS5CdFCZpNGd3xfBnPVtVqNnNfAuqb8cbYEkp9Gt1",
  "key16": "5NcSomXh2prXs8LE659nSdJd6QzsJ6GkowWmzevz6stzgzME7L7DafKJu8LEyHoCCppRaso6qYW68RB4w8FpV9gk",
  "key17": "5Sne3uncpW95yyZAMW3vmZdWJa1caJpW6VU8R5tMYfCp9tUtJxe6696xdNniUh99CT2ETjpdnX4NvrnzPMKZBbeU",
  "key18": "2Rddd9ffP45HYqHWy6DoXLsPjAT7Smb2sWCbvCfPEcu8GmWY8D6iMYSU2zYCeoPhnrnz7axsoTH86R4vFGChAb4G",
  "key19": "3Afi4ZNA77C2L3MpiV5qYQH3PhA2bzkyPjw2mAyeLx2NxRKo8MfmB7LUiv8WrVS94PPumHVTdfENdTPKkHtjAnkV",
  "key20": "2r3dNrp4V9ENcC9Xb7sNXqML4GkNKpdCWt86AQf8z4rPqQi3ycU9rqrybQQ8sTg9cDp7tuGo3EVfrKndrqzDBv9F",
  "key21": "5uShKNtebbLWgcKa3NPuquqWKHjdim42AMvmCpaKrVeRcSxqH8BEv1XSWeUKURX29zNasBd23X4MhNVMBTnE6nDd",
  "key22": "4gvNLBhRLNhu7kiUJZMdUUruQJwL7trtFNudtAu1wsZWsYPZKZer1GvAAb2WXMx9TxyXZxuCGDNkbYnu3GUA3GV",
  "key23": "3zNUpFmRjSXd4x78kfhQDJ8oGNpZgzK8eK4bVo8Yh3qp8KugBmvcKK1mFR8TuDWqecJ9tvRfboWUNE1zCXp1gzvA",
  "key24": "2XjEzg53dXQSxdAjRsQZJh7jZtbFWp56E61Ekz75rNLfisMCcjtGhWSk8Ds6PzFhtSUR4zK35CcAAomKj9xaFvfx",
  "key25": "26qyPJGATBZ2dr6cRMM2E3v2byRrLXd8hDCfWQqVAXdMMXotYZ6tSLtvdF2yiA5CcNJ34cudoK8ByDQnyYpct5Mr",
  "key26": "37sV75WwPUE7SSDUpKCfpG17ad47EDj8yoNdCoXYU6TzfgFZqESj322cna4BcNmzycWbqePyeUVynkmv871yr9ax",
  "key27": "39zjt9JePDgVFintVbmaDiepthfKB4JvokywBcqbPWsPNxBhYF5iTJr2CZjV8fcZ52ChEhXx7DL6WGkCH5BWM33v",
  "key28": "2ZvzSkW173jofdQvL3uWZX2W1AprYwbJDfCAb7xHnPUqXyZtCMoq2uHYYtWYSBWYJongDYVVpuQxMTaFtXHVp4zY",
  "key29": "29RToGyQpsM3XQgPAj8s5Eph8hEyo6dmnohor7zQqhopsNgVooDZwGt4Tgc8YibcfMmPyM7bQLSJUeL5utdRNW5i",
  "key30": "4SbQRtJHAY5gLesJZiyJbPtT6AiN6QMHeLk152DmZUzEHry3DnAbMPP2TED5DS9aRfMfb1AbpVZitwGtw1h2m68a",
  "key31": "4vJ1Ewyubto3yypBBKdaVimPrHfoNALQrjW3HePE1RaNdxXQAQLeuWg5KTacf3YRXTp1MBkfptmZTBKypp1ZYdaa",
  "key32": "3UbJGZR2tSfZQ79wQ3U8DfbKKHWtZ1XNtC3fBpWU6h2UGM5PFJXJyHYnNnTWjMVirZFktwf9sUxx9dsANk1ChUaZ"
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
