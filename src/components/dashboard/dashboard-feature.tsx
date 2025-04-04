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
    "25wRQ2tohMvTHKBg15B4zMMGHGJ8iSRyDU2Ed3B5FvPxnxvDLinPQqY8AsrQ2BtFksFvyMLJpwweG7PQ3RW7JuEW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3NVknma4ak5he5Cum9eZxA6M11vnMgPAzpU7QUjWSmaSrGDkh6pDTMZr2SBJPa4k4UaZvaWqHa9gNFEtnY8BCm6A",
  "key1": "3HhQQGbpJWLXw39FwYFybksJoi4RmhtduMkGzuZoCVgByp6YcM8tAyuJQoUKCjHvydhXaMkRkcsdsUK4LL5wpfbL",
  "key2": "f2mNddhw34kgQGLub4yNqrfLD65CP1dwu7jaN4dVHWHyjQ96kLK5HX5Q2YDkCzRY91ohPEYkVTkX16Yxy8sR8r1",
  "key3": "3iuxWyzrkmE2So3bVrqih9ZhvDQHwYyNHzGq1Fodq2sqiLmoMw31NQGbBb5YQprQ1FYcZDftVT9p4Bpbc9FP2npN",
  "key4": "5fXHZrPP3XQezDbuZoWWwimnRDpd5ddon5dHJWzuiwnxYoqVRq324wC9iLWHKA4rN5txRGu5HzaYS6LrFiR8GHqc",
  "key5": "GjYR2GfNKW8KezL7Y1as7UQXTr9DBbJnxQz47WSRh4kEva1rGer85PkSUDKzTeoQNtRPkDhymqTvkKo4UUkxwMx",
  "key6": "3t5aY1sLYRXT8MYLmdm5CGnWCHurPMrgAb6iTXBrkA4fm2FhbjEpt7JKntL1pX7fEqam2M3Qux5Eyyr79j12mUQ5",
  "key7": "2yVEbXruDTCa4DrUXhDbMyoTW4Q6bqFHvhHWbfS5N9G8E7ZzikmuxRb1neSp6gVsQfowcd9xp1ojY9ziskkf5BmQ",
  "key8": "2z9jwzq88bsu6xWbGdLEd4749uPdu4GPz4ARoCJ9VKCRNjrsAjoQGyZGg6SqVWwkYFs9c7LJEmUVM6s2WRkTuCN2",
  "key9": "rkgv3Had21ABbUGC7BU8ardmCtteZPwnZ89fYq3JRiTrqE95kKuqjowZCYdezL2sZkfJNsawzMQHpFQSdu8nZCK",
  "key10": "468SLvqqe3GtkHTdVT6xCqZ5CjDvTzTFUZs7xsvCFeRZjcdpdYbVNoufGgrxdsNrjufZupajAmcqvtZpYxoGa7B4",
  "key11": "3hQRqvQCdrurDxcTWN88Rnfc52MePAGf8FphGQeuTswExedAEqCYDphXP11YjAt7YYPtusZef59D3LFp1q1s9YGg",
  "key12": "66ddUEgXLL7m835r2hs8N4YtPzKG36E76W7sfHbKexYy2rZYhT9Tg1c25LfxeYZAC5MXFxxfMFTCyyc7VrTD7tmx",
  "key13": "27YHjHenjgBxVNQKwJsPrUDW92AiTiJitiY6fq6qJi6wXmHPk9ZkYp5sAPYtH4zFy9u5dZSe3sGXrYZvMY9G7EAT",
  "key14": "26Pgtqj2quRPXgs7YerqNqN2yncSNotCHGcNyXqmwUVNXcsFtrJis6hrxi55kcx5UqJxKKFzucFQiTsUwXACMNBB",
  "key15": "5p5Q3oseWZdF7TwAotWjTL6W2QQoUYABR94k2ZaWRcH1Zfzz9YbqB81WW6G4HaTNqemYShfhpHku37qc9Z76iQsH",
  "key16": "4RyX7C9bBG14ndc7CM9KaMxwg7pQZWzS6z3dKR7LKUTzQHmuXXGsewwNGw3iZ9A6rkFW1JbmnNGTZUsRyE4wR9WG",
  "key17": "3Dx5LDnk68McLjiLgDEJvWPdKagjPM7ZjdDgVFmbtfNMtL9w37W7VSiM2YdUYoXZxpau7cj8ozdHZB8LhLShcpqP",
  "key18": "65fy2ymd9eqz51q2VdE3AaZQwueB21JRd6r9at5WXTUGVmWsVuThkHDctoVL9E8y6yMoiyNBLV5gAW6KgtxYyUPe",
  "key19": "5RSysALf4TjY9xPFAM7NcHfuTNaE4FDJtZrRLpfaybNZuNF3i4jEqyDuwDYnEDM2a2vFeHcogkXVN6uihnS4V4BH",
  "key20": "3tgpfY5sA3PczhpSoH5f8uPepDc7pH7WppbCGoBXvHet9Dk9oMQEsfFFH4Nf4r6yekBkW3WoYV3U568gn4mJYhTk",
  "key21": "4iQN9PjwuR6D6nbtCpB3u34JzsY382vfAkh2Q9gfunnqB7AAGfkPH58NnXcgsVtftxwu8582nQPJKnHwSqf2gD3v",
  "key22": "45wfb4dk45TqefCRovJnZc599LjN7oZfAqVsfeU3MTVoa1DkkexxvL2QuzsNgUvivUQc6h3LJKffLXsAfscJConp",
  "key23": "4Y1Ggsbk1RTt2k9tAMzWrJWbchpHXwuhueThQSzGdyHQP3GPQabgykNDBce3deNjBM7vAkdtQFYftzDFCxrFRdhc",
  "key24": "2GD2i9eHvvqccr4BJVed85MpJrC8y8QwGDQMC51QKUH9XXuzB6XveSdNzK5HuqzHhJJZRVxvVUQKuKhJJPkbxocW",
  "key25": "5KZuLEsvc8hjTiiwKqVmnsDrTkGexhtTppjHDPCHvHGu3HQC2pH9kh5odmHiHjB4RZbRN12jvBmm7jwCjC6GFk86",
  "key26": "48oLdTWhEhMZFGsQy5TGn8wkAxCdtXzkwGTq85LiMwgMk35NoWpaRQfL7ZbXTsswpo8nCHm5yBv4tunENLc2gunK",
  "key27": "2ZeYwuYMUuSnaFwXqe5bAAsgenzipPSZ8U6T3X2PAEC7oFZ9AxYQHjKq6vaE4ht6Dpm86TbatL6RjXK1VPXe1u3b"
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
