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
    "5BjSEQALGMizVyaK2dzGZoYHSre9wqeeXiqVRiVeqiP7dzQ82JtE7XSwutdnonG8zkVxtQkYSaHKSGzJQX2vETWQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65NzQFxob2YHhesNhm6L7L2QqEWgsg9eB3FiAYT8d5BEa1vSAJNx95U8HWnajqyXJKNNkUaisZ2P57ChXHodnTN4",
  "key1": "37WovfRf5kg8kcNxWHBMjt4rCKN5tSctWz2S3kZn4f2JiqGwwcNW6NUm78kyRBfHWZxyUErqTbtekbBFXxixpMkb",
  "key2": "5RxFgRKmBHM9pbVpAygmBs1Qhffn5xww6qkGbzDG5G3N34Kmb2ykzmfCMHZreFWv8qxY1WGq7oPJ6eQvB79nEu9j",
  "key3": "4eA4a1SYBufxuYko8Mi8sJN4wUUbbuiuid1vDtf6bD8hnU5Uh4KdCzEHwoyGtg6B6JidE61abR29zyqmYgBFUpf1",
  "key4": "SCSVA1Vy9KYvHEtYP9H5wzQVYRMU28hmvazgkV9FDXswjxuAP2mxshmYrRQg3CmxH3tQqBfHtaAZgETdhyXDQjH",
  "key5": "3NDsaUhWgT78rdfgz6bjiYpFYWdcHnKVx79UJ8z5M8XedVKvxXSADoTpM6SyRCGpPKLCpBdnNuuxCEytDMAj6xKp",
  "key6": "yR2iqnJaNahMJziYbqPpHKcUQCs6TYhws1mecjubg36NekQ1wzHE5mW4egbe6kBKV5pgJA9FEt7vfGiQUtWpmR9",
  "key7": "YaozNtAEnVb1XRx9YFNzmscLA4dwrKmLdcdz1XKzwG8n4TMY6GTUZe5Pn1tLyeZn6qCRARuR42qUccrfRKQrWEc",
  "key8": "23awthxrzvtGhoeJ4db43yvjreBVPcBvddTR1WcCkd368YcjyDUEnaULsXGJmfM5eRMpN5CwGX9QTaRPob4E1B27",
  "key9": "4q1bz7rWnqhgdS3RpuBpnBfhLca9A3t745SZrhva5sfkzHTKWybwiUqedFzSY8qNV3pC4ZSZ5M3CP9usftLkJS1o",
  "key10": "e2Mc8HMnPftJXVQgCtyWX9VaL3eVSnXXB2ePMkoeaa9UPMbYJbfGxBrUjwTy2stDytAmKFqXWqAfAdwmMdgCSJu",
  "key11": "A17nzoAx2brSSCXyWs4c5m3saMsCtyXSFY37kTTh3uWC4XiiRWgKA9LP4GnkB1wwQbCWuy8RHYUDjrKTWKsfXgK",
  "key12": "2uVD4dwJeecNMebkUjCMsPj9R4ZbxgUf9RafitMweE5KSF83S9skVHjjhUBLM1SfLUfz1E1sUk3XFX4ER1g62kjo",
  "key13": "2RtvR4WKVcUdFcQxr2BBmJzgfRZSJCD4qnkGRUpKhG178p4JMYSVVmRLoj5D4ded7Lf4BoftX6sFxdpQUAWpzTVo",
  "key14": "gK3kZMMjQrpfneXdc78XxQRb7dvc6twuPppoRk2N1B4EJsugZLNvKkjoQdKCt5LnnG6jrYwM8KDPvuEbR6JxuFm",
  "key15": "4oGPw66sL9KXBdRabfWv1zZ2MSc5RdRHCzJd9HHEUCzgCPd1rc2JZ1ZWw9HKMczfcnMLK3NUHYcycwWumuEYuL1p",
  "key16": "4WBCbPG19qNd3SVxbpdvZarodNj5QkdK3Pw72dfBSYa6c358sJ9rxnGKiB6gWt1LaRdAFdGr5qnpT9KeTJpZpEwq",
  "key17": "5N53hM5hGSg7673mpGDA1Snz6DMUt9GXimgJpGrG2tqT8qhak923EPRRGhJacSZzPnJ6gPbnMG8re8pNdAcRQw6L",
  "key18": "3RP8DT8nWwS7jvu2sJhUFitcUM6ZDW4ts6uGwzMtodQyyJbcQHvippDEHQYvRMdy4ZyU1B2GRcM5K2v8APz7eVGV",
  "key19": "a2JisvbrJWzChRziCgTH8J8zGakAmEo5a6rs1EMZYugvF1DsJMoo99bDNMULUXVBML7jLnzZkjZ4qBHb1gzohVu",
  "key20": "4npbvkPAgpLQWiBqVXw1DrkCdrmWTFbUPdNMwAQjuCKtxNC13bFkF2BjXYfoMsACAUC1Mi5bLaMXGQTJekkkr6Gy",
  "key21": "3baU5s9gTkLBriuy4LMibMuEZpXRcVU1jVsJW7wxXYyqmEAePgkcWva46r2UPV2aay42GBsWHS5bRvu1xHoSVNwm",
  "key22": "2gM6qwTXFmonZ2w7WYw2z34raTQ299LyNCtYK12bWb1zJ3jB899Spw8tTvEX8ozZnzHM9DJiMaTVhwiZzgM1z1ga",
  "key23": "Xr31hUigxF4hjVKFocczH9qTekL98ep2nMR8xaYPTi2MbPML14EcJgRJpasrNPARRVoKcswZ6H6J1ooVhYdKbyd",
  "key24": "5brSSmA5vRH5PgWZKMZRVCDsSw4H9adz887ZZddXKoMCBN2qjbTNQgsYn6WTNSQzHCky22LiATzMmb2FYduTw8JJ",
  "key25": "5e9Hb3QoZiUn5AB5cuWEdNQD3QgckPvSD29ZqPoHSdL4kPDhRsuESXSc3ugoH7BQEKb83TrYKnD57ibnGAaB9Aeb",
  "key26": "2saqcC7Vb7EfRrPcdDbS64PCdQcBfQtfxZEDCvTX3SkQvXyNpzrxu34V7mrypZhXw1wD7p54fJmryUUXyzsZfThq",
  "key27": "4AECcxKJmKAa7UjHy73rE7vYJyoiELcQjvaV5XiX35Aa69iHyTXFoV1ogbrA91MPFDJ2BRYEaBCAwSotL59FxVpr",
  "key28": "5SPQjmJe48gvZsZoBqxd8hHpHumRUECip4USHAkMJvx5RvksRZ65bGtQ6eDR53rTkBTfqhrBRhdRfnKyqTqgkKRP",
  "key29": "4ZkZXQKxA4PgZ893bPHVSXZvdo5iLS7abEXWWDgvPmHgrJmqxBEqL29ohhG1mGBA3BtHC1xSaTwyx3QNeLDSPe8z",
  "key30": "3m6K73iYY5j3yEaBw16jPn91PDLQq4Fo1pq3XDXuZc9Pno7HfwTkVxam61L564ZeKpatVxd9ATb64S8ynUVjokDP",
  "key31": "5KREX9Nkdcv4zLthVoGitwMKxwohPNtaygCfU6QAkAtvjavpxuLB3iznBayErydTpwVZFv6PDP4QkHDz2swZbSRV",
  "key32": "4GqaVFyevuGhbPnbKg4BQ7gpYdMtdzjs4Woxi7jBvLz9B58naFXnEbWqJBPEiyWVAUfrDrVtzbV6nZL5pjUMH7tJ",
  "key33": "4HstGH2qrbUyh5e2BTiwrUSWxaTx2wkDHeNJwsJSizuAWRYtu66Xva1CQhDnQMusqcovXXWAgtTACqhomgTYLHXq",
  "key34": "SJnZFwiJtXr4Qc7bs6xiEJbt4F36X9QQra6cqF5xrDJDwporahBcBzVuk4eT6VxvNkaCc6Jy4WxE6RDJDakimvH",
  "key35": "4VSkR9HuPYsjA55U1bkJsF4CdJQXFaXt7JZnn2BkeQWJRZuA4agGydJCkmg3vAiww9uzhMnm1jw5dU4ZK1ZvRsCs",
  "key36": "5vobF2Mb9C9tLDbZmEd7XJWztRoCEZQrKP7Pg2wxszoRuUF3cW1PsrExvER7TcawjvDkcZyANeHPEv5A9HxcLkn2",
  "key37": "2jBBJb5HNn78XcgMq14KQFUXeQyEoXYTVQuy8zQgeqkNkAefnxYcohVKv8MpPy47UG4ERBTWKAvDLWNwegSaFN8J",
  "key38": "3zPMZFK7XuVCKTNX2zRxEwdnhaS236UMuHkA516tLVEc82kGd9wPg2iXjAxNNu5EwGZRMKbSA5ks19pVY3Vup4B8",
  "key39": "5DQ6TEaDGihHFPdao7L8BSWwKfnWdvPJW8H9D5DbEZQuF5ygep9Wub3QsamMoD8cC4hKs569E879W4qcQankKSya",
  "key40": "5RA8ipmmRxG4g9DTYNpDRwhkwKW7cmnuyQMC4MDuBgjCu1a7tHEQ2iBKgKijcLkEHuE1P7zg9WNqUKphDJftqBrJ",
  "key41": "3CF3iMS88Cz1mMufTXP43ZYSJBD8Dkc92TAv8NvtfMmCcmphR5vVmyPJ9UpGapHKUpHvXxf7Zt6Sc9BpbjSHGGSH",
  "key42": "5yzZiXnmx9adbzw7FPmSG3B4C4E6b8j2AVMJwUL5RuwXrLDZYKq2TivQvrWr2nUs1F9B1bgfhsfgtzKqQk2keAdS"
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
