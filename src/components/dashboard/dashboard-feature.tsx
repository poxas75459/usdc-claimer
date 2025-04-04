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
    "3bG562GQV68oqFkdPaDUYAVUAwJuyF2ztUoH7b2hhTDZc1f6J2CLGB3awbdvcvUniy44uWuBuiT4fsbWFh84Gukg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7LDvUJYpk7M568RYBGMUGADEZP5NemmAYR1g1qb9p2H4YFq4qwzQaqNR4PYR9nToo97N4DZdpdDRFyTtje2iVAK",
  "key1": "4tF1nJPPNyMD1D1tvrAEtZCqEWus1QQ2E3ficXuimMdnVuck5H7pyxFaZdT7FeAHHQT24AcKYyFs7xwkfARRA6cL",
  "key2": "2uv9G9HVzCn2LJRZCtgAyhQXLxnsfrtrHnZW3a9HQu8EKgCcAVg1RnvJq7Jc8YJw6LbQnrvbaA4tYrYx8dhUW1tZ",
  "key3": "4ikavfd1SinATXGFUKCXFehQe6DE3XUgePtj6AK4NedLZesyyhfwJ8atyEd1Do1rJSybPYHmhRCuW6oVSFfe6tmV",
  "key4": "4HBBjX6g2bfJncpPxcFJmhrLNAUJDTEWQCRjz7G7BksgxZFN8u25tCQCTgEo8HYcPih2THku1ac1iKShTdAvfZQc",
  "key5": "dMWiywTTzGewbE3pzKP2fACWzwUBcmCMcvKKBaNoZQ5yubqdiz1g4Eo1Z4VNKDBYGQZ7cvUsmg3GqAvSZJwyHVr",
  "key6": "5tNDpBu9RKqnG5hDdEFAdswn976wW43967FaQagu9Ysx1zrAQr85LFxW5scHVf4vxWSGFHrur9DnQVLyVCZj8Lwq",
  "key7": "4X6PKWAw4x1JzEPsqc2QKAfQgiQa3bG6bPxQLiMZCyWbQBZvJcmnh9RFm9qEbUZRFwKCb3C8rx9W6NZGbazy1PBq",
  "key8": "BL7gDoMkCGVsJvyfmfVrtETTUjg8cPEseJuyNsTLj4ZEZQSb9YbVrHhjhfSukBjoVBLWXcZ8d8CfLg176QWJ77u",
  "key9": "4hoPG8qUaBfG4VMx7XXv9LHqALmds6bsy5APUqBVcQkFodNwgp2cLuo3diVCBqbqBZ1fX3TZytSCFMNV98tK3ueU",
  "key10": "J9yY8C5ASZD8nWwjVNtz7oqEYu5ynuYU6V7GU846bQnoXGjDh2yiDcXkasE7goovdTRcgPqJCJDu6FBydnXFbNB",
  "key11": "46XEfDvH21XWoosK3dgWTnuMGUofWYD8J6v2UvmH5T4Juxq7jtpx2RvuCXZTkcFktwcst8aMsWLJCfCh85MVqfKj",
  "key12": "3iYjyrAmZGb6cNMgdFANLvrwcdHCxEiqDh6oZ6mQoiUnpfvLm3xhZYt9Wn5qjSEHvHx6xctvZ8oNY1PLkYDniN5G",
  "key13": "4Qao1JPC6FyfRjo7Soz9p1vLVJiTu2s75zru3mYR8NUgESNDGEuySUpSezhq8n9xxMQ2zA18JxPobtGb3qHxMe4g",
  "key14": "61Woyq5935ax9c3UL5EJCG9QdZQYRAbzag7f9kLqGurJqhZLq9WgPgSuQ41rKm496JrpULCLhXEcpvPEm5W7PLbj",
  "key15": "3scMRaa7fNUgnfSUyn8EKc1rKuZTcsTrbkkLpMJpDsW82WmNnfL7meByeLKXJnxZSEweV3FRQnkfkEN6B2Ve1S9v",
  "key16": "49bpdiJxAgzJqYWfoaCrRemKvvHrcvutNUN3Q2h4SvDMkD9rp4getS9u75tmL37fUAEnaKig43X1h8GEXqSLL64e",
  "key17": "3LLSUeGJ8N6qak5Ar77iU2LbVHQM1AzxzZpAVybW8VndKBx2C4MnA69MwhrWkUAm4Bd6M2yUhejg7BY3JcQ9dygm",
  "key18": "25k3QF6Gp9V8Q5dj6QoesHA2dgL1AVw2B1eiwWV4oUqi9JJr7syMV1JtWyJxyXm3VptSEP44qKNXyTruoDUd2b5g",
  "key19": "CDAPBm8ojrHE5L4n6H3r8HTUKhLpBomLonCFCWpj1aL66pegnJtbcy5MDovyNcELn3yvaNX8vLvmkx38sc8zWJg",
  "key20": "3K4PKeCjePSyWu3EkojESLaH32ufZjfU9NvWPRUb4X3r5Ch57Pok6hvfG6u7DYr3AUmWtSVrvP6pceAGcUdtnzcS",
  "key21": "s5ocXQxxprbYJHQSWZk29Jjds5ZNCoWUCsiNmUn4dFQh94vGwWB28vWVYU6jUDGhr76rVJSZQt7uUiepCJAaQA1",
  "key22": "4hUSSDyxU6moDFPgCCAJbQWrCdTQdFMsDq314pnPKtD3DLJNqb7P9ZGe5dB1XL5brHiZit8hTvox795cpcWNs4A7",
  "key23": "5tCXsdKUbFi3tshjFCAFJgKGhfs2Jp19Yaas1XMaJcv1w8mjyJSxw9cCa5rr8pWssE4CiHJ9CbM2vsEm1AEKroPy",
  "key24": "4TXXQjsqyaGk3bXkBZfxBU7rAJd2a363GhSDDbEGdSYcSBpxgQD6cjGG2Bdpq2nktxdBQ9q6psYhYzpNhQu7UWp7",
  "key25": "2zbnEURmKXuyx8VwkKuojy1n6eTaBiiyW3MqnUw6vaBJxSqiQuVTaat48QiQxhUU1E7cGoqwMA8sUkumfphuf34J",
  "key26": "gLcedRE7UqevFRVVfzvPyPqQi8LcLFiux5jcFuhs7w3xk4aE6smQb1NC7hZVzmtdXqZwEPEJCRHfpeFX7RQAkTT",
  "key27": "5e6cKTivoFGxoDai9JHjJekV2MKGMRXpTj15w5pybJs4zQaqfo7DbN8fKZVBqE22AfqtbzJfFpAQUhg4bncMava3",
  "key28": "4L8QDs5XWM7x9ZuqvMaYUTngMRu9XihtiWk5T9xN7HZVJgqZjxchiBKZsSZbjKsMNGdV7jArUfzvdG1DbwvQaBk7",
  "key29": "sMyZJYxanNwmWykuA9rpWmGc4QmXN8dbPNX7xHhfbUDzLRmfcNvaHFtrXdqturesAawAX2dpLaYZUucqmMDB2fs",
  "key30": "3opsYnzfMajLAKKJYQuVNmYHf5f1khLRffDS3wV1QFNeEuqoSc3Wp3yrsfpB7oPX6MmoxyEvuZKbDJoRsoUXgt3W",
  "key31": "2zhradCXhTqbRM9Uxgr5U9V6wMVQmvWH4WWbAfQyZJxVWbs4Jt4DFhy1ypZqfoejsWoxcPytRaW6Ja4FCka62Xv7",
  "key32": "518bqcg5MVvLb5r7oL1WtQ5r4Ef7YWJ8zkKayJRcjranjAGfLYJvrSPinYCfuKQhStg7gmm3s8MSG8bn1DisGM7s",
  "key33": "1Z9sMRotLVwQUdRoiWvHHAhMw8pX16jkYXgwQz81rBqyFa1JotnjknGpNXGnmaG1JEkkXmtMTzMbQxL2JvVXeMq",
  "key34": "2deHBowXM6RQegS3MkxBbD5Et3bv4Hq1YebkkEb9Y5NxRQc98SSoWbkE6wpwic9St98no37Ye6vqGkxPCn2di1wh",
  "key35": "3V76Z9PMJsWAAfDDVoenHihVCgDW5mfr9X9mHLjVNQWDkQTzxYpGKCQDDVYddveMmMiNw15HiReHjoc5qVkDM1qE",
  "key36": "5kAANxhw9ScJnPtsj94jLnNwDY2hpcBjWdCMQn2UMGmZYkYxCxt1a77gfMGt1fdeLxQpxCUAZKLLcM7JXTXU8tka",
  "key37": "3Rnh6sgcdxi7aMqDMn5RTiGsPW5FW7MvDzazN9UA6C6LstFTbnsvW1srYXF7AUdMp9GVKANkucGChFTzNDbicE45",
  "key38": "Q4f3XESBgxhEDCyL6gr18Pvhg9pvCFjFADA6j2U68iVLdjcL4uNPbgaLk8fSGfr2JRreUqt4w2XbbnoXkpko9rs",
  "key39": "35DqdiW8jmCoDfmk8sQC9256tpf9EL63UAALXv88c5bXVXCwBsnkep7NyiuhiyrKckAUtjtei1QY935M5iKB1Qp5",
  "key40": "4vVbFAtbttSNpj4oKB3QZyvxjvv6wBWMkNQekKGFwQ2VhP85QEnyQrYXGtpyywFend1hrNBg5eDk4gMsJumqRJjC",
  "key41": "35FBUXwFrKMksPNe34UxiqVYRtxGAQ9XHUvUHxnDq6MGLCrLNbNwieBGs7F6koXV82PLQoonWRqN9LGhKhsSijDD",
  "key42": "3bY6QAiRySie6tdAn5HbgDrShmLTMfDSwz7eheNjHn2aFZuWTmm3Jgdx8J5RWHvAqGcq7uSdmFPRV8YUzRgS6qtv",
  "key43": "5kH8f3zZ2cUJUPvm84kPSJjXYSGzwxXS1YpSa5HxfaEfwoUucp6fZVEiDfJiT2gaFLa4pLp4QRpz3o2sH7hqqf5z",
  "key44": "2zixtGXmxLaPB4nohdVhojvGuwMPDgnrxQx28yJA9bn3zEo5XJWWyZSfNVtaZUBMsS1KA3bfZJZjKvdH92dbERKe",
  "key45": "PHFiWNegK7CX9Hp8Z1sTbKvDbCqNQE6UPL6swqwScN5XeSvDdYHN4A3RYZfsuMsiDhBJ5Sa6rD8f1vYmbAEwFLC",
  "key46": "oWpSbyLk561EJHhQH4tQXAz1bAYMuYHB9ZnuREFiBqVMCEZcRmLwQfuKYJLANNXX1KZSzmoxU1qb8jSS5fz67Ve"
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
