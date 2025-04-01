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
    "5jqnjzHxzQa651Q3se3M2n3odpknP5vVGSJeXCojaRZs243iJ6nyxPAdwfFc82PTK52MdDTTfP2j7EA3TYRG1p6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2SR7VeazNwCmgM4NEF2ZHHpCgu1MuRpALuUGyJMMVycuu2YChuEF6v8VZNG8bn3Szm9gnVR54N1F9fLz5kPFtAAJ",
  "key1": "2vw3CdjgPQh9DNRq8uj6cu2UDiTm7tVLGTkciS1ymU18y6vDeJbQJYFQMHonpmg9Mw2nGzwfxWwsmtHp6BHi8rfm",
  "key2": "3KTdgmnaSLHmACdSKhsVTHhTzAVGyfveafREzb9UbU8vUUbVodEaLEviV21zXznEpPuNhxZwnVJB3yEUvMh4sabT",
  "key3": "4ReNkq7ZkHkCJcJVZua3wmwtU2evqZPq4gCXnffxNyaEbBh4faX4KnkucoL6jZBeZSgvrFr7w1nkaBYbhiecAwA9",
  "key4": "5Jhc4n9n9SuKjcgqmXDZYY1KWyBVH4PFwUoTCZfUEpnYjeXPAaMdPRQ8zqGoz2y3WDY2V6iCnV9VYc4xBiLBsZnk",
  "key5": "2Rzk4AUrR62p9RU7pNiAfae35As286FoChNwK3DySmaExDBC9qtdvcLn7jrFVLMYchhrFbpbHHo5sogMaMXuMLVL",
  "key6": "4Uy7SxT11ro2t6hJcToQ9w3fqaybDLgqd3wGcLxsV8nPhU191ApkKQNwFxLucD5rzTqdj1Dsbsz7Se8JZwHBvWUY",
  "key7": "3W5minQNR399pCJeAoDK8xiGiTiZH8LoBsmChjfcpvfM7rkSpMojYQeadm5WgPoNNuTc1JaNUWkhR33oD3T1Grdw",
  "key8": "2BNe7964mAWByRgYJfyY4jBEJgW7Vc29C4LcccfsyuN4APzG463BCgHDgYrZ4JzFieJFyCqj37MuxRntLHsPuDA8",
  "key9": "31jqHYxRJhpS1iyDkWVhK8Ta73FECyErU9AQkmBCtC5TBVrFMuGUaHmsLHenafSYx9kh23WNshsKKj6XAZarYmaY",
  "key10": "n7Rdp8un5FeALgptP1w5LzLCea1o5ZDmKnzyim2pMucbTas5v7dHLeqB92694HbFTHhQzJuyTtfd8nHdPqkSsz5",
  "key11": "5PxefbYhMDgLaC7psX1MTHpchXajnhGNe5AkREFDTKyRenxjRx3dRNpmYCErbZUMWsFmkjRXNt9i1VuG71EJ8taW",
  "key12": "3HmwPzFJcjhfQJ31x1y1ea4ZYxEJxtgY6veXv8RYqNv2jm8W6upJQT1rKeCviWSvaHjsi5LMEuCNiQGPid5BE7eU",
  "key13": "5NV7vd9EdZ75jp91t1xYuYku8brLs8dVWdpoYEsw7wSbT3LZZz3Tf9vXjVhd8zffGk3XfzbgHvJMEy8M6Wmh62Gt",
  "key14": "5MDXboayETuNNJ2vjgM7R2C9FcsZ5Uw28hEm8JGoAx3kA6rU3qYgDyWTcY6zQNQVpa3Cd8eXaeBF6FfP3yctrMiz",
  "key15": "JwFDhwUGDV6nGQHUWteTNxgAZsud9bYxahkjabcxdjmSe82KakmjhuKHk9CJLTFZGCU44WGPEaLoFQ34p82JbPs",
  "key16": "2T581bx41PX8YAMvS9rYrwrqmbhcKC6DfAiLJm21gnQMTTptX1s1PLYc1jVKp4QCBk6UuvUwUdwrsx2mrA9SkFBU",
  "key17": "2u48nnnmVk27eLXUCZG3q92iRGCELoS6YdMza8oGs8PAEJa1XFRqZxQYoyLUFd8U1riCazYCfX5E5FmyFmnJsjnc",
  "key18": "2fThtqm99hNmnrWnRgQHsHhBjU7CXZby9hzMfg6PmaK2vokrjLpiavF6UwSrZn5hnsZ3v6SBitr6djyGHG6RrfGN",
  "key19": "3tcaL3asAABnKmqkL7v7eNPYLvGVci5wKYcNuSjFKM3aU4Y3p8hnCp8Y9DP2de2t6trNWT8D44RDyR8AUG3pcWRB",
  "key20": "2arUbKPzoU5mQN4uzAZFbfj8shArrMxMrhp9pdZNrMVub1g37tpygzTtvJAWbzdSshYtjLmni9c9yxhs8qGoXpgX",
  "key21": "3gVwSjwqTzzWSqhd8NpfEnoFegKTMJ84mBNzZzG46s9EdHb4CuXmkhDWiwXZva4b3YaBuzvkEpb1hnRxCQacYfnD",
  "key22": "4uWfWtiQKHvg4TGXc5q8brwd49zdjNNqyy6XqeeYyAwBvrMSpry6LqXBu9mVXzRpTmKuHBbfD9dmZvLEttKQhm38",
  "key23": "4Aj69EfuhuKPC4vjFimsxsZbmGKmWanZX7MmntmsmQJE9bDyHHGppXCAYG5Ab3QZXceC76aViUzgjqRgqVQeVTRT",
  "key24": "4Zigkhfob5dyQrubDXv7ZG7tZr2iSSxjKn7op4rYeyA5H4JGtWfQRzHU8ZuzQ9D7yn6R5q5bbvHaeCGwUK1RL1v5",
  "key25": "wtvBGvRotbhsXZ3NVHBhvMrDFV3WWZbqF1mGDLEDLh3gpMqrkK8j5eMEz4qTBsCkPC7qHfRvug292TRFysrgCxD",
  "key26": "3AKZ3jSydXT3d7hY3bSfjvuXBMhKPeuytS6tFyqupiQM6D1SiYb9Kuc5MwnqTzP7FCy4kdUmRtBe72zLfNvXxPW1",
  "key27": "2LMFUwQ1SdgpU3L2oVQaopsheMpuiQa9k8dRSFeUwr3fWdvE9HszpbyPzxHXN3B8ECgdxY17Pv5xCYbiNdC29ZzG",
  "key28": "4Gwf4xpGw3Xj61MQCYJqLV7xZ72LqyaqHfQX6k8LDpfmF4QC3YWfHT7KbvqJpL3cKhhYgCMVoJR5BL8mdn6HF4ap",
  "key29": "3fbyqLo4KJRPyRwz72BBV19GZJnvjjjn7GkAxpNhZ7XHxiXog13iBB4t1mCLYUGx2BamXjkbbduvg7NiVk5hm3Gq"
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
