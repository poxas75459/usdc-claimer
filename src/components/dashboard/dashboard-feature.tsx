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
    "3xYitZt8qYhY9gx4SnzqFN1aCyC5xueqaHAtRVoRRBtyZWGLBXmFoysrwtRgKdw9t3wKuuBtQMXXCCqffboRhvuq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ojsdrUaG23TAaQwMHx6rSek5bJqeDx5eVDAeJE3EQaU8xvGg4rTmz8BCPdiPGSRfVNkEKt1Cws8JXf5SAM8rqnL",
  "key1": "3ZSgS8ygFc9e1Uiescz9FY4ykP6GF3R8f7Jh12M6yjuYuzfpxdjwveNfPgSyV3FL3DnYMuRnnv8YdBR6DKfw2u1E",
  "key2": "wDbQA4L7Z5t2tj13zkTHs3zUrGnMTrEV1gk1qtYadU36okHeNnMiEc95bEu9GcDe7XirThfVosbtSXwoQaPfxDF",
  "key3": "4JJVndJWCNd9g5srogCUNZkLxu78p3s4Rw7JXTp1TtCPwMqaGLeAPSgZJArG4ri8jGo1jNJvabUhsu7B56NcaGXB",
  "key4": "4TvgeXX6CbCzF6jNF22mtC6m9JdVYMeYeBrRh8KVuCJzPPS8PyxsQhX1rX5wVmRyQ2FAr9E961nVhUv7wCzFv5Dd",
  "key5": "3MC16P81dR4JoG1qR4p9NXQgq5mQk2muYa5aophXFoE1prfZfc1M3KoSMSQt3Vruw1BUwbNhJ3DYJwMdevsFHf7Q",
  "key6": "2WWpGychbt4ETDwKNNPLbTuKoa68FasBRvTW4p5FH9dMi5zEd9dd52jNMoMM51LnTTDqjciAYzdeA1ix2zxA6UaN",
  "key7": "4YBqMfhHmiCYBSsih9riCoY9HkgkimUF6v5vqxjDAsSqDZYMfU9u6RQBEZApo9tc31sCW7oAt6D9oR4ZztCrLTme",
  "key8": "eKvivgkAhpV3wuYBiUoT7fPR9jw9p3g52pQJpeahf937w8ndsR3b5FKswTe5M5du6qKh71C1aw4JcKzCMwxkJCp",
  "key9": "4cvTSTsApsT5dg63P5Eji5TUkzeyWextUnPFTkb56DKdwfJbJfkx3kpBhDeLBkf9N7VYuSJnWeTdAR4PobLuSjjj",
  "key10": "t9a27aEzxGkbRw5WKrLU2Jid1BZsGBWoWWDdCaAdaahUaq6ipGT6cmu8efswwWv9HyZBqY4LEjPBiv9junrHaYB",
  "key11": "5NMLL66EqJEUjgsiBr2x2RUMu4j28SnAQQMoxoUpCdFf3pBXVFBMB7rLp5YvEV1ADsDzhKujcCoxkw5dRmyAGLJu",
  "key12": "3yeFMCptBpzEfvVFvi83dVHjBG1tNPiu71CF8J5PaXNC8P5kNje5fwnyFkoGb5T34UTfSg7EMM5AHtEEiX6VeUch",
  "key13": "2Lne1yaWYuMGiTRCZtzDs6mBQmrKYNnaAJjr2p6LYbRwKVqQsa5Sd5NAr1zkwLXcbope4cCtA5ex52PfjJn4GYsH",
  "key14": "5h9m3KHvsPpANRdEeUuQR8iJWZRAjGupkbeF7BQDPtbSC58eBmSKEggHJwrd9sgDe28NVVRTjfKtJkybJqCMHn97",
  "key15": "67DWPHBGQasG13rnzRbDVGJ51m5kxtU7VV6wv2rBTZFj2yspdaySe275wGhpfS735GiUb5D44YepZdNfAaDj7nUw",
  "key16": "5H7auaAtxhmKk5v6F1Lr9A7ahXG29pWhnF6argWUcrTND5ZoYkcbEWf3KSnMbYosnS8kXVUAQcmUr7AQSyZkpMTe",
  "key17": "3HcvohS4TMwPLs15AdmiE9S5m3SGxRspz4PPPXH6UXLZ9Khkzkp1HwAEy921HphY6GB47abAZYeCqPofoSDA6HpH",
  "key18": "gf8aAwfEdrweWTzmH4pwwVr7Ggc2JD6XRdKuAPNKgGXrrVMQLKbzPJxcQzVRkynrAanBTNU1KUXsiYjmosorJaq",
  "key19": "asYTm9iN4jovzuKXVAw2arvy9znEx9RGiWWTgLkdpF66QkZ9enhpn5FvXeZbDP2C6NgQDXkz5kCjS8LyL8Ysovn",
  "key20": "3o3NjuL9tyzKJku1T6U4RBXyEYGEoDWXZz3kfrxEydD6irXuZnuBneeCCXZk53RJoCk9c175ZduQcHDiFfFoEpwT",
  "key21": "4Dmc7FbQsgVJc48PiBTtFgwsDJH9Che7hUGrGXseat3DRyDZqDUaWCq25AuMGfvrMhSaErBYyBB7aznv4zA7FFCR",
  "key22": "3JMSPzHufvnCkUqzrRXvEJ13nNebP18JkHLubZK3xsYmYfZg3Qxk6gJkQ9a9cSfYQmKz2qbWGW9BzL9rVw81BvJ5",
  "key23": "2RXim9jdHe5zKgdPLqXJJF8BuUSwvLRb9khLQmqvzuBQHFe3M86ieSGjfMW9G5ZYt98Wg9Mue4z8PRad7wJiyFXe",
  "key24": "4iXFK2GSTb6haD6fvCnAtV7DTMz5Pq7mxF5b2uxQT4ye5MdN1JCfFaido86BazYmRkZTrRZZ3CosP1ZewoRj8nVB"
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
