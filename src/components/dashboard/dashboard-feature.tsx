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
    "4RYun7yaYsTgwjYvBz6E3xxvovgbegFsn11jCjTCNpaPhLnAQx8jCju3hmXcgj7BpH4ehX4SzDD3vQTzdpNviSRJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5HY3PG6M4thmuc876mXhmHGMQfmHK7JjuGjDzzxhgjmQDnfX3kYRnTgKwJvkd9HQriEuQrG6nMHQeL46szaWfvQW",
  "key1": "3EafF2ReAmFVF7Aqa4edUwCgYTC9sX1BtTGkBUMNnvSdGhxeMupz5azJe79MRNrzQne1T7QZXCdib2oKpFxYs999",
  "key2": "yNMh6BKT8SfCyQfxeakMj17LMgHHugixYZdv9LriaL8R1rwnbCCntkyqctULwkFhs8nk5rNTFbtfsmDwr8Rr5us",
  "key3": "2Xnc663U57spuzBH9zMvXzPv1tTunrpQspcYo73uQhXa9h7kvJ3XZpnStKTxuM2wyRB4yoG3GjLPNxA62mftWeDp",
  "key4": "L6J6vK2FLhByePmdGmG62hQN8h4vp1WZdKKGXhf917G4Vsp3SUhapvFGiXDYAnE8ocRQTzYd6aKJNXfeurGnfSi",
  "key5": "2TT1FF5s3neznmHxxKFxiKoXTDpZD99NB4FCnDspw4MUV9jCXStJ5VW1cWk4FP2UbheuNKxRGTYAnAZ1x8AS6jy6",
  "key6": "3d6tkXDvtD7yM2HDSyisK6K1pSSwyRLuMS7sLH3qQ5dzkRwTQNgDsNCvhBprLZCMEjwatp9zwzw21n5hcLn7FJ7G",
  "key7": "67pBM4W9suz9GzXDypxDFNG41viT1jzQoCZDJcEY9Vt2dwCjRCnzgTh7fgqifkKho6eode2ayzrYrD5BzcKbzkPg",
  "key8": "2pwuRpGZCHtGUhZYD1ogHZFbsHL95e9NPQDEMKfpG7WgheqmUi9be147bbL9ouckG1tJkEuYVh8LpLjMVqK7z9fo",
  "key9": "62UprUTsPHTzEdT8HbARaSBDRrtLNWUYN7dH1YsjtJZZ8fu52MWPJmuEgQ9DrPguUeX5eHpvH7Kk6iJV8LqekszB",
  "key10": "5feKVbjNP8qRfPZjefPNCMGyvxGqnxfCfWRkuDjYNWX35DSWmHn6CzXdhWojxjL6LtDC3rhEFbnwEmJaiLtaYEB",
  "key11": "4jMDQPyts5P7uhHgTaGJt3A5XPqepJrPCN2cSnGXD254jseByFZ2rp79kxrC3nLGxxb5QGeGrEe7ztSZUWXk1Exf",
  "key12": "4Ve69W9SnBBaEpXzWStWo7d1vSXMLzmW5efZxPA8KPTXLtJvkXZs5gmsFSh2NuheQuCW3Q3F5sCubE8ibeN9jUCA",
  "key13": "Tv3rMNCsqwvuAZULwgA6P8LRtXio2SwmrgDfuvZRsi9UJbPaq3pnQ7iQgGjqBUGGhfcpbJxLNMfxkm5eiwd7q4V",
  "key14": "CGBEMHSNDGpkrcV7WYS1NW9gfKvhP5b3KTBu3Xm3J9NB7i5xggBwD2Uu8BxjzCjn4tLSCBJd2VDhijPNfrHyZnL",
  "key15": "mnTnxwEGHgV3He1hk1Eg7XaLXJRY73N1Du9fQAteSngN8TqgWq2wbgsskpWxKLGqbw3bR56VmXS7XacSj2QENRG",
  "key16": "QpujUQt2HpAEB1MnRjyy5EhjFE6vcgowPU19i3Xd4Uwz3Ry7hRuMB8z9sHwGrb6ZPpQFfADzk13BtrFafJrjgKm",
  "key17": "5MvRYNiiwH8EAQ9z2y4jjsDTzowTnwDuSyKgkDMpe9KEoiEB25pM5x8aGeGJXy8dKJrcDUXuf3EsoEerDmxi7Quh",
  "key18": "29UpDJT54JqJu2KraqDiNQLkHbaEaXRUz8X63psutzDxUVr4w7ZVmWSQG2BdF5BveaAWZyMEGsetj6EP29uWuP1D",
  "key19": "5VU7QGkrsZrEWULiXd51JeM2jh5PQDjJHrr1xqV6NGBurxdpPmTviaJVYRWEn77KGvjAybHdFXsr7yy99CXVngcS",
  "key20": "3PqLBuURgLCJgwZzsBVqCpndSq94aoBJgRXW2Dz9Jm3BKh7nqjHYPdQSX3d8zD67DDR84BZjWvRSH7LXFtB98eQj",
  "key21": "4ZhQ348TvLbcKQko3FT8NpgKMh2eSaKRrCu3fv1xYuZrkwr4NCtpbh4knxedPL4AgvUdWwkvqgzAohBKwY1BR3o2",
  "key22": "4FjY7CK1PAA5xVeAjy8JWpqXoCeCh85MiFjStcSFzspYW9CcsGGBjNSfgAUeLuwfkE9wySQHshNqThRSSAvkg3iT",
  "key23": "5JeiPzBxWtTeMJzUhbEMCocW6mAuBPUYtUWhoLtE7SCD8pS2HzePUFXVH3bZQP8fr48wX1UcULN9iq77BymMMV35",
  "key24": "3Lve4vQVs3smM958i9F5PvngXFG2swyoau3Mf4XsEyTab6ua3UkrUwoQYVY3wb7Nn9DRrJds1rPSbpursc4pG4Au",
  "key25": "5B7jUpeqHZqHVQ5KMje9z5KNXsH9sLqFoLcdb2aMHEvKJxt5dCHH5m1D8orYBDv6Wgg2XiymTeiEJgCWeH7d9LXD",
  "key26": "54zwVp3D57wP9a4XHT1NERxwxoL3SzxpQsdz1xonoeJqd1ik3uNcfhyzZdgp1Zv1m1mPmqmJpFuvBPgM3URGXeY4",
  "key27": "3Y7VZSaT4vAD8cqL3RzwNZeP9QosbrEeExk9qEXfrbpajkHoSUiAVK49PZFNpKf6q6LAA5KBCpT9YZmKLY9569bU",
  "key28": "4DzdDnDQPR9iptby1HUBrEJ7SP3nYpkULaDLK7ccPofGgk6pR3NrPsdXf6Zx6Y5eZrdFwrtGRFeVKvoDHAWSCZA2",
  "key29": "5o63ZyP8j18xBUS2ZoFw8B1sVVdVrz7RrY3P5smV228uvxrDm1ueC73XrdyCER7JDWZp1n5H8rH6L3YgeB7axoe8",
  "key30": "5t9Yed9UERsRLAacyZFE3Thq4QNqHMSwuw3xr1ota38Tevm45L1cQ3YDrJ4CmKGEhxkUbjqnhk4gG4zXZQANSuGP",
  "key31": "1n2nd2zZ9FoXdvaCvfMEoXW8mMqUQHJAzKUhEzoksvms4m9arA6Vzv9CHdyaEzinMYpynPigbk87qi9NPG3Qqx",
  "key32": "c27KtqHqerjbxmoq616wXLbW6NtgW8Wrn7ovEBCaTqDR4oP8uHAXXJG44hAbAoquJo8cMP2LSVBsR289GLwLyEv",
  "key33": "3z4vbp3Dhn93TZSQiBWtFMLxeKxifgUsadNm6haMt2yBmmVRZH5gyUZhEbZN8sPa9BL2vSPXtwgLe6H3vuKPwgcy",
  "key34": "5cVK1xNEjZ9bKXRtHfTSetyR6TFCe7q6fC85GEAJ2imp7Mef3sQe9eAMHGFAiz6N5RBStih7tAEoBLAF5tA8Jp3u",
  "key35": "A32W2dmEeqKg57zo6RmtYzcabi84jijks1P2rVURWUppQHShaNELFoZRoHgL2urtokbN6iMSszLY2vc1obhCaT9",
  "key36": "3NMpwSKfMnngt7cPHZ8sxLZZgRZeL8yL15vaiCUY8GZvxMHCdfHGdrfqNNNwJkAfNd8HwqeDuUbrEEn6Hs1fjhPS",
  "key37": "3Pf9m9dZwA1pPqWSubD4AkVoLRwriQJKFHRdsZyvQfkHDtzcXUZZrfycKpDWeBETxgjA5UwnJwn5kqjsX1T5oYUZ",
  "key38": "2xsEaG5zVHTcenx4MHxpEo1cSNMFzuVKTgabn6fheVcV43PKRc3QPohvWbHhNAbFAPVzh9mpjbYA67QWX2sRdMBB",
  "key39": "5Ckk55ttYqMdpq3yqFACj6fsvX6tGeBEyk7Zc6B6KyaeyAD3RxhfmkMnbZ7HNCjDa4cxNVk6XHmR4AY91yw2upPB",
  "key40": "3ytX17iy6TDQveBLF64F5HwsveoZTj9tayc7aNCLXW4d8JcP2Deyxm5JyqkKKnwr8ZJhuFEJB62XZAioyLYMQGGV",
  "key41": "4gdko6sVoDxh1PYH27VLeGWghfY128nkMjBmy4CGjwgPvoSJfMRDpjyVKmFegSYnPBYRy58o9YdeWor4HNxXNf6z",
  "key42": "5ZDQhnD3j8Z97FDfxPXnzNrRAewhFyWVKkZVS4cJGLsXDjScxS498pRNGEpnjAsM82LSpX2J3WqyrAoudKwLzVSm"
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
