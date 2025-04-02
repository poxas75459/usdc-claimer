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
    "5Q9jqxEAaqnth6HZoTQ717bwAEapiHSNrAFLYpuHyutLARNohcbzn7QXGnc7fC29HSQsTYthvvkwBLtnWjqqtsvH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "yYQdiK3s1qQUdhJsYtBhEUdvaWxVNoSx2ScMbSxft8qtKvBHaidS4f7rfi5GVgzWeZcWY8vD7uYQi7sz9p732MP",
  "key1": "3c5szwDs3aAj3EtKDxab8owQPchtxRkb6AuEGfNqK4ks24oZ2n31tAEEgjiytk3H2FkC3go6hqGE75ZJi13GvUZw",
  "key2": "3fm3itjDcK3ZK8yrVyVdUL7qrMyRAtV5QcwvYA1fSwvk8zi9Z9SPt2Qiy1z7Sik3kTHVZYTVnrZrEjQxGma3KLCg",
  "key3": "UJU9kF7kowmN6QtLg3mu2wCBXxm3WQ57mTQLcBkkXDTWaHJ5yBpwJWL3iqD7FqRF8EQZ18hzj6Jj9vYbfpafPnf",
  "key4": "3LRTr86fNPDfQWc8SCRp6BeVD8Q89P83jjQ2bXXA52NRX2SND8vh8DVRMHgBnZ336GtMA6W8LwkT77djbwktDPKU",
  "key5": "3HPMNnaLqsPabarmEKqWiNhqWWcPqVXGn9UgvjFKFn85uMJxREFsVtrCuPNJJYSf9j1XBbPoGEBNNr4SHeXvfEVp",
  "key6": "5qVrvk9tTh6baiyX33Fjq4Dud9ofbzCmAzKN6XYw6ZXSxqF7AYm9mEqhyUCDQkkhjGAhx7WWnWV6XiBxpYXEe9RN",
  "key7": "4vmAgjt8uF4hf73hyNjhXiYV8xahGYNxg1GhXaq9t6s3moHTbyQj9cZTcF6dWRYotoT2kXgs8ezfziQgiyA4A8YJ",
  "key8": "5Rz48jurJxbf7QYpL9yKvnBBAT5X7ReBtNr8mPmw9VzAgLeu4VmrMWPTZYH83cpdc3Qj9WERnNDU1e4boSmcSEFq",
  "key9": "apWEjsA9kne31FE2dKadRH9E85SBByfdYz8Gzayh1eNgujY9FdGTFKeKHcZqQGyLL22rK8nMKTqXzRW65YPybd3",
  "key10": "5m1sWjLEZuobbx7poDoj5Qt8CR9nbChWbsuijTEuoAYxg693Ry9QjqRgkdwzgcgobkFJZ68mobWUvMocA8nLp2uV",
  "key11": "2poonYW1e25TCG6e7qbpedcUsPt1bjeSVJdUD7pB4CrEgcrFijktEsMxjc69mqPbKUDqzMZPFTFYWg2c9BUcURTy",
  "key12": "3ozkctN4e158oDSyRoe2fwz99bftpCGBx1hwtNGk5LLAMVCnLkcezSjBNHchiXkqtjnF6vH8uUiyCAmZbDU4BaaT",
  "key13": "4fU9DphJytjdc4Vqo36rRhNEN8p42D28ysD8Br5Dp6dVxZzDMG9BjwDCDqxYpEC41AfyYETeb5ZPEhGdwJtYLoiM",
  "key14": "2ByQZmsYDJBeaiCFb6b5iJDcZWZkxpTv3tLcJ4ZoMF9dbQtym9FbHEjewrbioj7NZ8i43Y7tQqmJBw2tr1SBWQGL",
  "key15": "3apaRLkJRyNUf3LEFg1bAeGP1GoRhHkMQtBXyvPGoJEGbZHkN4qirjwnZmvwXC32ZodXeZV4wU2mH6Qer6w5hZqD",
  "key16": "2M3UGKVH4nDmjrUZYqtLbqd1zSKm4pwXiUnp64kd5dxQ9cZnVrt8n5PwsFrhBFCdL42vn2Hvj5ZWbcZBh4mQX8at",
  "key17": "4hTKT16NFn2keaLcT63Ci2xrBjSAUPXuuaH6agKBhP3iKVtM1vCqKHCAvorT5h5HE9qMs2nRgd9N59Cf5eDB7gcy",
  "key18": "57tkhVxoVgapYvUBuVV7Ep4uHYezjFN2ikkyWD6CArWgfjADsb1uRyMPw51jR3bzuLTxafJu8B9TZ6CUQbSoopBz",
  "key19": "4wJ6f7ASBb37zfHgFGJi6oxAMJfbK5HVZd5iFWqjwyH3U7jztX1iUazvGcCqda9iTfdMaTsG6yXT7PzXhmd14R5Z",
  "key20": "35jDXbBnZvLsRboUmAgyM6dxVWqqn4qa31avJCXNmtD35S93Xy1eep6i35DsfDf1Shoa1vBto6hZx2q9nun2P9AZ",
  "key21": "3CTbyd296z5Xjs8rK6PyyZQThUCNfAoMmkP5uQrXdsKd4nE7ykc4pzW4BVHtfDWHkNcnVobKJEpDBTVcr51CziXf",
  "key22": "PmTRMfwzE97LPxiyKkpPa6iqtYbxWWMZcwn6RQFKBs3Sz3fy3x8RJ8gHS9FNGHjqaNwqCAKBtWBTCJZbr4yfNMP",
  "key23": "4vTsBEZNe7hmNT1MsAQjxoGAKNaSCo5rP5ENjzRT72zutnkYr7ef6UsYMfoenyRKotmqF8ffP99Ds6DszVbUQGu4",
  "key24": "5u49ig79UEbkvA8bWTGbPu21zvp3TR5fZBqmSJR59bFTrdwWswAxkaYens6NfEfvvp2rf74T6QAnhvUSAJALUcdr",
  "key25": "4dHVrNFQj7EwcKZ91FhbcgVMhXefBbijTck4YxFbwUg2P3C9urUKSN2P8aZq62fXrQKdcYo8qiNM1JipFaUDuex9",
  "key26": "5bQknvdm6vtWER4iVRvNiQEZBx19vib9KHMM5zcxuUFQw56RfSnFDQy9tbRjGaDLDrnM5SYQv6aEsq92LakBfWud",
  "key27": "37n5oQ6kjYDunAi4vQhJuEfGrThoLg6oY6NAmBNeAX8cGbQ2saNvH6Z82dJodJpxwDSPCpm57neyuF3rhtBDKLAG",
  "key28": "59VNAAAiAmYTVUv6uFrbvQqZ3ytSUdrEHEALbsSBQR8E7cA258fSWb1bzhba6WXkt8LpBjKLcLeZb5UD1uRa2bpJ",
  "key29": "432jMupSGz71sQXssAEdb22EWMEeMmRb1P5SCiTbi9sPKKPZJBvH173V6Q2rpyv1UrUzjyf1MwJEAFCCEvPabQ67",
  "key30": "4TTiLVgQzoxWJYwXGj6dyKpN8Bk292vPobrTBWPy2WEzPgDEwNg4sA9kwnp7efXy6AoBmoze9W2B4eFYfHLTYSRW",
  "key31": "2UjnokZ8sGs2Poxu1eWsUYHaphqWQgeWFCBX6szRZHT5G2nhL4dyV4xSLEerPCFNXx7dL5VM7gb1QJS7tVjnXYev",
  "key32": "5vYTJKLEoiSeVrsiH8gwVoyz6p9c4j1fK39L875eUnSG893K5im7rwFy6Dqjc6LGW7SMmMzAiuJpKSWPYe4pKek3",
  "key33": "4igrsHQZGcdFQNXQzY9utxXqunTJvUs9FicBCVomthDZ5vvU3Z6U3H1EPe8Mccokv9q5vtyhynBumoXxs8QoF9bZ",
  "key34": "3J2WV7qiJKiGS69qCtuNw1H7STndrmBj2MuNSzUESNPqzMM2rGYa5TDFNHBLLVxz9vVHJofHdQYEzATxdkc28YDj"
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
