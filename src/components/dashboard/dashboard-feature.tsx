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
    "2MPw52qUgi4KzT375PLBxXAziohzhXDLvRG2By2xNLwUyDsyPDwwAFEJXTvycnAjzqPzUiqvXxamb5V4FVQjHkHV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vz8AGPkkHwdJVUV1jWBRNNnKGCdSJjGcguu7Hw9CAjoVAMPmbJfh9KyuWVpk8SjbtPx5UF3PJwJ8A5K5Tp79cjk",
  "key1": "4NJcu8xbNLYTU1bn4KHcn6hRgba3jRkyc1NnyPiY6eYNUeNcYD7s71ZFU4kdesZWgNWrtowPeuixRKfBfKNwhK6t",
  "key2": "5L1twdp6g4iK3Tvg5Rx2RiUC4aV6SajFonqSUWpDhd4srTz6zuTfGrCUmviNSHgYpcnyJWg6Gdp3dDPBbTa58Zam",
  "key3": "4ZcAy5aSRDZmZHeiBmRqK7jkJaiotpYJVSruF86nyS5v6MzHeGU69B1PCe1nFsaV7Sn52A2EZHyw4K6tZtETSDNa",
  "key4": "JaQH6vAiMttYbvykHvLgLxBhWhiLuJhZnqxiaC4LuyLEAHuQfTswLJfAe68AiWGNqCkq6SNTkYSwB1qoS66pq5e",
  "key5": "5oYPNmpwFnpAu5Q8jwKfGCce9Z1nyZoZY6CYzmftGtXevc5dAAzDVbzYW4bcNa3oBucQVNFmftWiD6DaHdBSxyq",
  "key6": "zNG9E5u24na9MsuMDXKj1rQWVvFHRJkr7MvrPBvZwLB6SRrCs4v7Z7vvgXjr4o98pdtkktmjwbA6Ci5C5SD86xp",
  "key7": "68EQnogND84Nsd4VMGbn8TNvH7XJXvPrqZVbbmYgL17TA1Dkq1X8efCeyhhb5Lw4bDPUt9bHJcU6v44BDD5k4gX",
  "key8": "GerrHqT7yrRWJ4ufoK1XaiDgFjbF35z78JpBcw3FG96KwBJDMpS3p8xqtkRLQ6pmTp1iDjyQtooNC8HkrK9RFpi",
  "key9": "5kGC7CqQQUjo8kLtiHU6eo4cumg9eNifBcvR6VJ9swmB68XqhXqHxJFtkSDzyyqQC1KbrKBXMKS8PfriytLUQZKy",
  "key10": "4oiAJ7NpRmB9ofPe4R8dpFs8j9G8JiPqDkpBNdUoqwCkaKbc18BWymPRqfx3AKWb41RM2JEYyceYy2H9M8kqWNdo",
  "key11": "4rUYcbXxMSNeoPGvLrCNPKbCyqkfDdUGnZrLFStVxiGjb5oEGDxDnwzusdrYDVzYUuBFXJpFDnsv95uEc1uvmaqp",
  "key12": "4Yn8ymLzjcAEH9mwfh5PNdQJFPhdvQBkLKZ3M9koEtrwyGkxLUFTvrap9kiPFCY4GXrpjRsHDEvKWZ9rDj94H4Qz",
  "key13": "4LAM2rMbsorxRJX4g9mt18sUh4KmLM9eozZ7drAPBmTqPX7y4X3gwVquxVzmEejQ5sqjCLKfsDun1NjJVCHgxevo",
  "key14": "2z6JvGK81RH91gLmP4GB75wPeJkahqdiFVm23sCbT7iiqn494Fmu8wEu9zPy3Gm48egAXLi6yKT1keVLGw9cbBMH",
  "key15": "3GkrYNmm2ckaYYtUpSR3fYocV1yZSKteQLrpehVKALiHs6nVa3hukKwbigLR1pNi3quYx14oqmZzM2eC4EZ2GwZb",
  "key16": "3KPAAseubKy7nCtRWjupfi3yz7Fj3PWAjFFx2aBpA72BMukyHhcBYVFMoTy9yCuF7Qz9b2YdgcfWReAYxB8GniU8",
  "key17": "3RuvG1xtiUvygTCu7FtWuvHS68JMqeD5CKHih7mc8ryHJGFtF1uZRYTDpvzkqd72cUvYiTgSP48rW6WWHuWNwo8q",
  "key18": "3ZBfy6J87rDRLNLM9fMKxZjAhapDF6e94ArJQNimup7SNHBrHVwWRuEukgWJqVTwJe9YjGFNRJXPMwvcRrKKET3n",
  "key19": "5ZTfKYiPx6uK6v3GaL2o8H5v5R1mgswzFzciwmVsUMw3f3wpRcwSQCrrZr7BQGTjRGQWJ5pY8ryPpAkUNFQVRAyE",
  "key20": "naqXq7LevHfomrCXCAhDMqde6ZiJJS7nn3cKBbR8nvgbpHJifwnVg7HyNhqdPxDaRRQBpzxedMuHTVUtwTBeTxd",
  "key21": "3t5CnhtUSkA1cEjp13RXKG7hmzbAqozkSihYk4tUbuQeGRNNQ7v5gRwtoUWgP8R71BhjW65c8x2TAU2KTM2ogzKG",
  "key22": "DG8cYqsRGHxqSMvo6zazoAhpxeYg5Rt3Wc9cBqZd7nZ8TFhP2tWEAjAu2PZvpJL15m5UvA6sdTgGk5JXp1YBAmH",
  "key23": "2wuVQC5BpPwjvZVfL9nrT2PYnPdnQSUgktgrsZgynZPBFf7gTwp4qxFKgK8Gip8zWW8YqRwAZ5M76aG1ac2JJpNQ",
  "key24": "4dV6JRFgz75g3ZeFXJ6L2kBYD9KLXqmmS5vcEjR6EWN34gWLJ8WXPdTW5Gm9GF8FBASEsB3CrmUn2sEFpJJXXn7C",
  "key25": "3yFDhiQSxEexg3q2BhUXnADjteKfYZgsMLDpVHiAHgt7G9WQuBbiCqHYfHA12G2PkiqUQA9FhK9s9XHfuGo5nNkS",
  "key26": "4AuFg6VBfj43ugsDG9RJC6A6BUfXpGRoTMBLrbpXgAJKv433q8NppwWAGYtgasKtAj48FBLGmibrVRceLH2pZ18b",
  "key27": "2ux1z8Y3Js9pc725YozSwyk7oNJc5en3Sjs345Ebu4kiCnpzrvPBAKiMjqsee31qB2Zhp8DfMF3qhHNtQtM4X9vQ",
  "key28": "C9xbPDEogLAUygFUZXKXPNhXUvaargYyLuBhJpkkh25fECET4LkEKkqQGcpNUXt8acUAijgHjuaH2xiUDKDectE",
  "key29": "2CHdwMDujgrYwCGY1BQwcZvALhwqzLftUmYZquBShNBoauCqPbScw2ZSRnvcC2UvYJUZeSVa8gcggi7xG4TS8NN9",
  "key30": "3aXK3ahVNdKuy2NEyWdJoVqpbpMcn8mBJMUrpZNDsCF8qsJXtvioZrGyFmJaYHpz1G9aPPYubnUwbmNbxY2swX5w",
  "key31": "rcUq42P65h1sTNsXbbdLqXiMD4orLrVMPpUr8XDVF629ew6KDhwEFWRdszprkxVxXmWgJEFc8ZjyecRCp3mZgUw"
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
