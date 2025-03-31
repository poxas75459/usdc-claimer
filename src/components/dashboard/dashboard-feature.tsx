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
    "39KzdEuFH45qNKoDgiwtxHm1pRcAVDVhRpmVo5aBubjt1Sy9DGkG7QxW6W6RtY75M6CKX2mMRiHkNQ4XJiUhLK7e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GjgYGgVfExt7aQa1yyegawGyvhqMXGYaChddh9tq3ATmWY7uh9fdQqXDZ43y6uTzfPD8AYu6vHcMFJRTiGrDsQ8",
  "key1": "3yddjL3tTSEJeFuVrxEfyMhxc9cuUrFp2idKVGJRdyuzzWNxrc1n1w26Gto9LMLvmETKQX8zhmWbVtwHKc7HdKMZ",
  "key2": "36jy2ymvHvZAH2pgSJb4R2tfTuMcpseLGbgrviRo6G4tJeE2vqVj6saRGgZd3eRYuiJWdAs5FQSSfsCxJiwqRzkx",
  "key3": "3pYNTBedpUJ9kD9kU6z7K5nVbJgqvqc4gZuJwntU95vTZZUkfyaAi8qf7522QZ6b1uGH9CF9G6qQRsQrXKNBsYca",
  "key4": "4u6XX1Mj4NSkeiaiqWwWZGg8BM1Q4yvTn4rMqx6EyaEQH5uPCAe5NmTQUXWGwT7B52xcw2HbvXbEHR3WHMwUEDDW",
  "key5": "5jiySx8iayR9ThLFhCifyvRpeY6L1XRP31ttiku8YuBTA6rNWeMUhFF3dSaAjkcix71AB69ARKx8skXfKbUHppyH",
  "key6": "ka9jjfFYVHNYdEjVJPLJ7SjaniXtX1MwfL6Y9ae7GvpHNTGT7qN8J7AgTzvTTP93bAkQgPZPdUeiG1uJGFWFH5w",
  "key7": "zC2YYcLStZ1FsDsAVRPT1Yq7DySH2FoXFGdBrgkWxXjLM84g8hRi3Rv8swQEtUk89RxBeS8NDF6kcABbUpD2wYE",
  "key8": "4CaUYPaqtPPY9iyvHvj4gCpegkv48hrm4PSmq7R9YjzPJxkkxs8JABa5aWEbw6WAvD7QxAE1XNKSe6RfAK79o5vQ",
  "key9": "5ZYDFuZL5JJc9fsmHKE3bZ8CVnSjCamGu3xX5zQHwrdAuJiAvuBEFMMdopbFHUbk5EqwJ8wqvEJYig3FCuJRj9Pi",
  "key10": "5EAhws4Tt3ybupoiCz72TZAfjCozVz8CX19pdBgnCDaNrPLsizakkmitkHcRcum2BTA2Zt2tHRKT536sXyxo7dsC",
  "key11": "ui8wCxR7c6xqmMapYfwV52VcmnF9Kucvh93X2UVxYNPe9EZPov4dXznA4XTbCxGnLq1fTFHXtoFyD21ZC1dmabG",
  "key12": "2vWCMFxStB5GQBCe3PyaHUN82d9d7K81GTQShXZxxCnBdh3dvnzAkH1735KQYpVJNYSFKNYXe1ZweJTdCwzPzwvv",
  "key13": "4Uv4eRM367YaBccxzvamffhbNrzaUwKcAUUQ6PwFn4Fx8T1NGeUYTyEveSRvSZbhKad3Jpujc7Fd8dFbLNkujjG6",
  "key14": "428teQLz4mT6Nykq4hFKKUDTDX66ZVyTQd1eLv9GFu9sdWCJXuKNtAzTKBDVZQuyGcNnHAmYZGh6vd2Dr1ySzKzt",
  "key15": "58gxrRrJB8uPeWzBYJiqNKMLnkyUMaBd2uBDUBa89ZU54ezTJd5rqDvJ1P69qyHf3PvV5CjEhZgSg1hEeishRXsF",
  "key16": "3D3jogv6TR5zc2Zo2vXwH8Yn96DPcKMpq4TTGhG5XGKTimuS8K7AeENtEZxXC2P2ixwmWRA4TgFKRefj6iYdoiCo",
  "key17": "2hpKNmnoX2zbqxZivqDnwTqTJuB17EhvCEsFd7CitjZxs8dzuDNfdgMATycGZcpyj5ZZBeW5aab9N7pyiK7wJbk6",
  "key18": "3vb4byassimAihrKVpRDuWeLPR5YRaNKVs9awNgx3ywJ12yGz5DXFF52DftixBLgLWSw7dVbWTuKVC33u9wkajZm",
  "key19": "5aUH9K8v4hKR6vAifw63mxHWDhbdtCmLGanjd2Jc4kJpwC8d7v2s4aQDQYycviVGpeR2s1dAUZCrU2jYT2zSVYyQ",
  "key20": "5qfciwmZGeGKaQXBzg3Bwbyuc1KLEhoXp9QBncRs77HRd8LwmbQcTZEtcU1DPTykAvbQQJVURvnVtvVRa8yPSjBs",
  "key21": "445zBUXgU9NU5wvtQ76MNVonvPAnizsYnpojtFpHR3VxZJ2fsrexGKfY7DNNN9dgjYFCByM7ji7RgSm25NFdK7Md",
  "key22": "426HgjHjYzJ6bqeQRjatT5afjCs7vWubnpeVWD5rQgts6YPpZWr8iYtDibyZUYkKB2pSrdDda5WDDVDZkypxmwSw",
  "key23": "2maM7jqXnSD45ZDCZsiaY2VWVbRxsb9ZsySgHf959coikEaNCdPB1xK5VgybZCHfPfELoDQyFCPq2yNPxrhYioch",
  "key24": "3H5im27hbsbupdL9PVmcTSqGhHnki7vT8zFHVdjzoxsVqmL6qfVybks1QeNpgo78Q77y8ewStWBpgUvh7cMYbRun",
  "key25": "wByqSkvxVTLhLoK7y4D1t3ne3o6T1DUpmvg5y9k7oMotgBsW74uzAAAyFje4zTm7KhRB1aVB9kpkagEhmngNaak",
  "key26": "3fwy7QKkBFZKetR4YMwgt9JZGsJTb3Vw3h58rWQ6wmANpFxXLDYzQd8js8dpdygwjKawd7X1jLhr97HmXySLboUJ",
  "key27": "nLWKMAX9rpYEaQ6Ab2e7nQSv8rwEpHNihs3jsTW2n2v2EP6ccNkhxMvyRbmMmxtJJHLXLnwToFcvqWP3XHgCNYr",
  "key28": "26Xgyvb6Tbh6kGVLX8tinuL9s1KW7tU2xnKMBZDjVJb8vChaiGHvymaik9d1SqT5vxTQmLpTf6JZVyDAvffVbzph",
  "key29": "2XYYBfDPgA8BeNSWzUif3hgjCvbcFNcyiJiXTf4MrnZ5y9WPfxUMdxpoc7JXAc1aEqrv2hMeeNDsffok1Ju2w4Y7",
  "key30": "54c7DPqgawPDF9RJDRrcL2EEmoF5b73Mw6ixJd4epbWFKVggiZ2sQZBBtyJfit1k26zPSCci5yptbvaQiU6eRE2Z",
  "key31": "2M3hVUfsxKDrqT3jWA4vbmRdhJELbwpyRwymTj14QP9ydUuwmrJewjGJ18YApUPN3tWksJPFuq6f67C9h9uMza6m",
  "key32": "2rYciwxmoutNavJNb4FWAGfoTyXL2REmjDnXoMc9hEaWTi7KbUAzd3U5EmQRkhXnvqwPuV5BCAvMLNYMZxXptg44",
  "key33": "32GboGb4oXCCj3jyKefT6dR4wiyVKhYw3SQXjAvMg7kJRm6M7TrAqqnzN1Lt2AuptNzSqrLAQP4DJzaZyieh7gPP",
  "key34": "TZh8Y8ge1KHEYqwTMSxB9kuQjPMQApaVeT5Cw3bYa1oERPtosndzqTQ4ee263SD3sB41imN7k4q7t1x8qRFAAYB",
  "key35": "TdpXUaqszsEh7HeZrqNhqo9RPAbCHEPm4JMzFmQjz3ZgcfmFZehYj5Xn7zkWoYdaRmxQ9e43ad6QfUjFcZZ7h6d",
  "key36": "2Pzk86GPFAu3kcEQuv9MMh6cC7bsthFTMMzDiZu7Tw9FkFHLfpFzLXynz8daqf6tQ5Sr4uRnNYr31mwzseMYCmtT",
  "key37": "2AStpGbtdPBH9KLdMwTwLTFoXhZcFccM6Un5uQckJKT4vKR2NC8hNnuwmrpGndd7K8pxv5TrKk2TPHbVLcf8J4aB",
  "key38": "oH9D25wymd8ZRRfNxZgwqSb6DPdDRJiXdwEabZewHpBWUQzACZaBVabUmEsjLeZf3prDwLQUZjcF1HgaFUFNmCU",
  "key39": "2SA9dFbso1CwbNBqSHFDXz7WKadFG3ieassY6LR442eQMBMqT7FTmNooKtxxDaWegsKiMGEJ6bdPJ6pP5CnVtBt1",
  "key40": "54L3ykrHW9ELtq1iaPJbG2XMtpJDj5bn8RhU9bQjc2K52v4K7tAybasWuXCG2AnBPs5eJmb96AwmBYLm7FTDMbKv",
  "key41": "2eXDv9HCGVppv858W4WzuqofFLuEVeKjrqHcc87sPPKRqMgWFMnsMJmTRe71PobR3xyYMiwFrfLwBjzxVQAaPvHF",
  "key42": "3XtmeQaiLmfPAbrda9xnZeQyKNXUse3Etn6D8XKDK7UrZtsUHe6rDje5NpbYejh62SB29mzuBzNndpoa9VFZDynC",
  "key43": "41RVUPs8RpZUEAfNjbSx9AQrC3ZiE4XtbbA2HBcXzeGFQ4uYAAPSdwGbmNJ8KVqGao9NZmGFg6GQb9Zi7ziaNcWo",
  "key44": "46KApV4fS1KJUJTSCAz8k8uygPGmhpVceYb1TEyGPGjZfn4fwF55zxV57vtQKyyzHQMcTXfpJAer13uWqknQcV8W",
  "key45": "2iVbrbfXKcnmKSrCU7Uk3mxo7WUBznweKAkHEUjFceqexqhk4X6r28dhd3Kf7DzxivnZr1dVfGpRCGMR86gimvx5",
  "key46": "4VL5v7h5DhHsHLYBq2WGmVBAmsfCGHEhuUTF8QE4Lf88jrpbREe5aQvqnZWnXokeeqshLBVcmPQcVN1VGMWW7yAz"
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
