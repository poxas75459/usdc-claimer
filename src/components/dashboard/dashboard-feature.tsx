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
    "4BfqtQBdPJ2LS7JvjyxADKSQas4rrNx749uBzTc3uxGcFJC9pybMD4CgR6RwUhYNkYzRikJehAeC1Yw8fP4yVRbt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "PPF2QPMdDjQX2KaniixX2NomijtY7xYzj1JqoMEKX9aiJ8EBzXdxVS6cSynH1yL7BL69YRktT6pw8GnJrQfNnsf",
  "key1": "3MmVKnj6qNYQ4CdgyUtdDxautRb1o1bvPGmvBos7PDzuiT4FG238nKsSa2Bh2KN334mXtZbsF1tVQ3CLpfgLYWj9",
  "key2": "HpuWWj55r93NJsCkgGuvog1egqb29LkcDhSut9v7nAyizrjTam8KNyJ9Fctto6AJSmGJUS7QrBGjs57p9QR2XjC",
  "key3": "3uWbBxEgFyZnDPJYVa6X1N4zRUhiXEgtBQrdpfWD2GjBYc1S4BRX1Ktenp9tgKi2Aon8WFGeYZUHXTa2pid79Rw5",
  "key4": "5T9ewhCEwhB8ZuwD2rYoydHvrvsL5SkVi2TEGb1C8qU3heDkJSZKe4xrs9W2D3WRJejXiUEsMpVuDYxWDZxa1WZC",
  "key5": "3TgTV4xfXZNoy42fKuVS2pNjgQVcze1p7oxszwNzDJCNgBfExNjLD2kFvbzYcq4Cf2XLknMFbUUt7aFPcbp6PpBH",
  "key6": "A6ZGFhxuicWSUZdiQsVWxHWqAqUNnVAvTdPhHNR9xUXRYRVybuALujtvqewGJaHAxHMMbkMGnCATBg2cgATZ8XC",
  "key7": "2q6f2TkoSRcvDW3PB6HoFJMBv8vkQgsTeF15nitbTp4jzh6HRzeCqPx4gqWtWVkNwXMKUdYc4VZSK4GRkoABG8hS",
  "key8": "2kaSxWQdQBJQEZR4ehBMfJrJqm6UvnMbyrUxD7nxyDYnUT7QBEYB5cu7trH1XWxd13okEJHF8bRaE32oLN1upHTM",
  "key9": "5jctUXnWjmk64rZnVMx4jyjh3VwGyrbjS2wVS3Gd5ypzMQDueKw7fjwMAKiQu3wn2zJsKUbyTNPCrSQ43zDmL6je",
  "key10": "3zfESRcktpnKhkfH6L4zpqtZKq5ycQymgDNLWxQkW1fz9KLJuCBYLZzCEF6ZNzfnhRNLEwE8FzoJpFvBf8LmhqCd",
  "key11": "5LmA2aU7d4xmgPXQ35pW5unD5V9FWj4tmXLRPaRJ8RduuQcapaAsrQC1BQKcU4RAX1XiDBxHjH6ay5zHTaEehK48",
  "key12": "3MjVn6Lmto2aJcbwTrEMouedmMFJyeP5H7AwHtuGffoh6CvV8xfxfNADPZUQrPnVBQQczc1WQcb7FZVARwPFsUkU",
  "key13": "3H1YbkteJEBuV5Nd6JtstXCjX6F9GUFn2seifp7CGFSykLpQx3EwDjJRUs71mfM2YvPJasQrKPqqvSr1HmvMacF5",
  "key14": "2EU45spjx1NEEHS8zozZ7wS4YMUzsgwRb7VkRDpMg1yzJcLYM4NyceKWAFDUKeQ5e4PZTX9xd97Nzp1SsV4LCbVa",
  "key15": "4Gri9DP3ecvGoUuJRdMRRHxZkcrY9qtDx5BHtMkQpc3cWjGRu5JvnH9tg36LFa1Q8f9GKNEjqhMtfqsTj3x3Axer",
  "key16": "3EKqkafQQ2GctEGCALMmsHsveQSWaSDp8bD6naSKtyjaDdQstt2V8aXGarYKKRsojoix1H2ZqJRptZ7bJq6W9Hhf",
  "key17": "Pqiwo4Hf4n4sPDQctJhtzvg8dsk8iqvtNqPYjizPn4H9ikFhxUhDEzWRwWuHNsnGaXSXXQsXtrPr5wagXtQTEM5",
  "key18": "3pLcvmYsoE7nbd353iBXx3p4uGMqeUvEvxjhaEWRPxq5sfzHozYZ6UeMaXBwVrYza3nuDeSuccrz6EGfnzYZnLhg",
  "key19": "BeGEzKQX7WZD3vTvJj4XLhDLJQfjK1c5gAettHQyKCMtvjXmBDEfxCXkwhSj2tnFAnQLiKokPhB85vPFmL1Xy4L",
  "key20": "4RvyovJfMEzuX8XKjT1PxksyrVRn9fYgMdAWy59fLA8i1x8rYXAydiGEKzJH27CVd5Dva2DBAeuGYWh7m25JBeaM",
  "key21": "5XGcfh3sm28p9irZphspW1E6KaAwkWjhQJniendSGTnz3wxVPf1cuUmcvhm3PSSQ1k4PR25i3F2uF3bfSpw2Xs2A",
  "key22": "4gLDTQ7LiZZy5irNHUJq5JSKrxu3KhjvLoFrnVUUaYTqn969j6Y8kVPyVwmTbwvvapu84cBmhJoSiWMdSsSwWvsa",
  "key23": "4utLL2xb6ZqXHNhhnbiRTw6SYeskx2uYbcAezP7SFbkjegkzG7ovKTFdZ3G6cmJsZyamJhRermWg454BF2WgtVrs",
  "key24": "4Z8SFzdD16gknbgfZFAQeYTXNryCWCBTNDwS57aE4c6qEq6qjVvQV63emoccHtrdi5k4BFqTSGSxtaHgrvQWBM1H",
  "key25": "5XYf5qrRbzzxLKDGZuuMkHkNqo8Bt1VkRhfjaZJpVYTKqgCUj7R9QnJaJ2a8XUMR2EvuSptiSeQBfiYjbAStCj6n",
  "key26": "2mBYuYebEjnTDfMNxRRxqpkZgupk8k5xbhyMmGJWFPVNtTVmpQA2yz427PTBRWrbP2NGSU71pmF8GQw4n87Me8Cz",
  "key27": "5AY4kCJSgeTQnNT6uRvof3ptjJjh3BzKVo4HwkgpP4iXneffFQ2q5wEbxGCBZ7qd5KJtmRbVT6FogvygSAEmb9je",
  "key28": "4diLsUyUGLRw5E8KzF1vt2ieYmsiG1A9HABdawzTTUcGQE8a4NfZNHVXeEpwk1CuAGfbK3AH5mspbE18JiHQErfr",
  "key29": "2mQqBfkBq88FNoWExLBPEg3shdeJQpzUdYquFpZzCriYb8yUfKCTArJsXU7QYgfunTopiuotra45gb2qsa9VLSGA",
  "key30": "3RBWxu6LxU6GXfurKzXn9cnuATwPZ3FynKjNJzatyjG9FPqBgapiZbwcPk3kuQJFdnXWuoU7XseVDddqMhXGNHpR",
  "key31": "J6NyZhLprubfuANa5JzEFWCrbCgtoLePpZrH3XNkLh6xxKAy5LFkZXqnSxtUh4oDBp7RjQXUGrWfp66xuCvR5uB",
  "key32": "4cM7V7uNzDAmkLbxkxD2vvNdTBLPnxD5qfr4dbHCHy19VfrYMB8zWgACmkpje3gVi3wuajsEZpkbPPhTsCRjwUrb",
  "key33": "LM3ZtxoWsH5iyWCN2nKzRqCA3GBCchESMMDDuyqP6HuzBZKg5G3W4jYJuTuQSET9uR8eaQsjtnNMy3QEGga5rwT",
  "key34": "26KhQ6P93RxReDTrhECGsrtaL45sWbiH4MF4xX9tydXxkpeNMuWBPh9PZAXFGaVarBRiKxnEvHwLfftncCcFe8xT",
  "key35": "56Gk7x1B2rPfo4t3SoKwBNrZoh6g1WHLuZY6vzwShjgKUwLPNc8Kj9Qt4LVDBNMjPEEobWVHySvzfEJaUtnb5uXA",
  "key36": "3gC7jqz4eLhdr4AbgWqkAk3xHrZscDPXSDpHAieosGfrgsKNpmGoSyDV8Z7rYUyKj9RcQicF6VgEp8jSnJSWm9LZ",
  "key37": "4FyJ6qUhjhm9YKwzvu3MyFU8GcCsnxcoqY8Ndv9nxdXpFK2qM9YmViVFtX6nAj4nRnDZPYR5Ed3ngeGhFCW32k2m",
  "key38": "RkNbgh9cNNBBH9J5N3gKUsrpWobd7Dqk2qd6G8SV6Vi7wsce6Ma2C6SmVRhs9dqhzDRwUp6ftUcUXMmj1vaxPqy",
  "key39": "3ZkjENQBcFNLJRD8WNMDc5FpxuLbQFCiDj6oySceK3hRNBD57UaYRxQY4u4pnkUrCLfoj5RGe6WqMck8jAD5dJ1d",
  "key40": "3wtbacCS8UZNNDtivBVmDGB8cME46CnNfxdNzw9VUiEvt6c4zx1r9uffni9bGXiFTp4mKkQroF2JGduz96n6n6tS",
  "key41": "kRshHBdTPEY8d1PUagp9BVjd6Mdc61BGGd5k1cohvfDCmhFB3QRLgzvaZYBHiom1sK123HynpgVSTKSWtbDGCMq",
  "key42": "A81dEtdvYkyXJjPuaq9nXa88Tn9sov72UpM7f94guf1RXdV1wgnWxsJTwrEgQfx1Rg1h59ioHYWCqdDSLVesNkx",
  "key43": "5BTRkK9HX7C8qkuqfVtWVn85FogXh6kYpLBVXsKFkWGgdkgy1cjPu4f3PUAe1eaRNHRySQEPbUXp2pftsTJruFXM",
  "key44": "3L5qqjRtUm8wGx2CWLxS8Sqf1EALAisyAqkgkwCWUXnh5v3QRaoncapC3iZTjBGb7GkuLYmBvU8WXhHZ2sVo5Kaa"
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
