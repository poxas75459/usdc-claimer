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
    "4dNqkXjV9pxg5GK6LZdxD2VjnuYRB4ko87BvfsmMKKXCiuPsa4LUWtZsrXhh7aadBH1HNVeiGZBrCYZEgebsXfz1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "67Pwz73pnmpnmSRcZANT2PswJX8gzX4jSzDA3NonTEJvCDMzvW1SRo7nBhg5S3a5f1aN2rA8KbEb6J32QZeK9xoc",
  "key1": "6gQxADk3NNZR1PHRe4TbytvEM37zJxtBp1SZez7qkYfgM6ZVLvyDEfMG5qiEWqwTqPFVA7FEA7zLFreChkGj5X5",
  "key2": "4F8bMnnjtQ37KmoWRt4re4Hs3HoB4V7q3cbQHPari9Yg5HtRWF7RrA9ZLMesaFwwNAQvLtsQwTUTMFYM3i1qY5a",
  "key3": "5XeLqy9y8ckMa4MQzoPuiX7GJ2cPxeMBMJZLEQbep4enQkutMoeuTdn7Dqx9Ftdpw4T1hj6EjBdVVgyfmkzyGffw",
  "key4": "5hCXoRAkGAeEWpyE8iwQp8xYjsp5gkhQJ5CQcPDSYfbsfacxDWHKpD7PEh74ikjsiQ1brQq2oSqD1cEnSBxKTeTu",
  "key5": "3sTfbyBtraDRJ1nzV8ZJXWv6Sn4v8XcAxyc3Mj2wvZeFu4SdAFJsDPgr5hCDQ3gfK5qsK51sztUGXQ7HGVhXRzV1",
  "key6": "477mhiniXKn6a4Q3QpiThSjUxu2k322pZEuaYetcZhr5K6K6kYg9KJ7tHXQpZxXr6GZvTLm5Ao1pETxFkBHY3SzY",
  "key7": "UivLg3GJzkPjNcvonfDm67ZwiBi6Tp7ApqiWXqu75pqE3H26r2yTZzxVU34R7dhp9w7izWqpZpHPfBCmWtV4zPM",
  "key8": "ooiSeCCN2pHP8oXQLA6CBgYmfr4ADVAaPT36WpQhWiALTgtaGFxoYWZfP33SmWVDCqypT4zE6HMeLscNTaJkEpz",
  "key9": "d551hnbhYiU7s47aty9JRkXrw59JinzttKbvE4aLkg9axfTAfe5SXM4P9Hj8rADrmGMbcLRUdWDF1VMBLP5LZWp",
  "key10": "2MnW6BeQLWVh1vyqyEsYnLopdhN8JUdBtX4Frjx4e6W7mYPSmro5BZC1swztDDGZgz2xeUenHR3LNZfQZENyGwT3",
  "key11": "66uFhY7yTXu9bexUvnyCmiQ1pfawiBvvqnemufpAeGM354xjf4Zc33LH1N1Ne2vpwSo9jj841TbYAzsa9JmFjthy",
  "key12": "xjFzyQFHnFDVR8GYQk8YzvZZBd81qdSPDNKPS8BBhJCTAeKZ5Mw9RzwBaphB2CaZXsHVK3ma3zk5ADbrefEQ7C2",
  "key13": "42MxBVtbSUnJhPiAwqwYa81a8xNFjbYE75Gpzkumj74FfFqqte1xnd2ZVoUesWs5myYtdhgX34SPrFYYUnztBzk4",
  "key14": "4676N7BoLXZE8iuyreLZwYPmX7D1yidXE58NQcqo84vo8qLYd7MaftvxEdjUJ8vr2iv3Z6mQh3BT9MF4h6pZheuT",
  "key15": "3yuEG3uub7hxr6gthWX6b18nq4oVH6DeQewfC25jbEjgU1RZJiFFbWFwGxtDS2tQXePjsJPmnmPJUFTJQECcm3FF",
  "key16": "3D74ujR3qEGS9tsqPG5hCDbZ1kvGLF34VxvsEhBHWxJF37JFdUZP5vYpXTcDwzC4HJ6AsL9kh5W284iaNDeH88ii",
  "key17": "3GjRuD2AZ7Kdk4Jj11PwWhKou9VGK6T7yCuJeachasVM13Yi9X1Rq3BqdUbraYnBJ7pSYzp3FAAkESjGkuy9rjW4",
  "key18": "2DuiK6ZpiYQwjFde7q5Gu61HYPynZiGveKUVGCoow6twZvBSKbT5jnUM21mn8artTCX5gteTm43goz4jThSBzdMr",
  "key19": "5Ju5Nh8Tvp76KvPijc3v8je9567nnG73MXyw18FzmhFfR8Roibd6PmWBXJQNpQMa5bePBb5qgoT4k6JZjB3pLBxb",
  "key20": "4NXxs6c8vKXLcQHjKD5zo4WmvdT6CYgecPzU7cmXmhwDA3dNpP1wLhKT8bgr92XPeiRn2QKQmQqz1wTR5kzr2FEQ",
  "key21": "2xBRUnbaw4Y4Zwhv3k52hMDBhU5UXWyJKg9XN2sqgtzY6qoSk3D4haMWDo6ciFgf4GPdhoXDrJPp7HNb6wKU2vG4",
  "key22": "2cAJLCrhBUNCWXgCGbn32JnMYBSdj3SvXcVXQXxB1aBR1Z4z6U4Yk6cSDjhfbmyx3XF4zmPGQWhjmFD7vzNo72b6",
  "key23": "3S2cdCJxc6PwfzoKsdx81VwG1QiwDXxeat1KVSnrBaMMNCFhC543AgMicUWHmVdfw4zAmMyRpP6TpqAEsBJwPxRJ",
  "key24": "2kK13jgVAp1wwTp9tRovyxUb9wcG8ummGnscpuQjjXTXr2KRoBqFdR4nMPm78Ri1K5uiDicvMijc9X3F3q562ufN",
  "key25": "55zzx5P8mA2KRFTSbYPv8DKuKoZYxC6iWvhgGPUY18ewdMGJwS2eYBNhCrxA3AogNxAmvXVBUWFwHodKfRwK7fbK",
  "key26": "4rP7KvWjDXL3XdffFKMTGhJVZMcUidsKBysFS2SwabL4CHGDYx1yYePL6guQ1iWD1JHdRYy4AxsM2PJDVxSBGqD",
  "key27": "4EooGv9bME1PrBn5PhZhpcSTFJkJaamVVE5HtmKKeckzRDFLLAptnA2MV9tzQDkLrkCxfiyjhfXGvvcDPHLznPqx"
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
