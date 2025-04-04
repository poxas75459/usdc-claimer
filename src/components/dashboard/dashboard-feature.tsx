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
    "3PrYH2fQjCsWScRKPmdyAxYgoSddQbupZPsGrhjSd2j7vMVTFTHuvBmrwaFECR8qzkA4BRYFy9WEbs3ECNmoFRex"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2QoPUDc1gJKd4YQ7gHjpi5t1GdjSAYCAXxPJueHUGwUc5jrjXs2RAF458AWnSDMd178ysesdAC8wFyr7r7G7ERhQ",
  "key1": "5T9xqGwAgXs9kRpjqUsfxg6kRNWte5F7QzAQ7gUxDeXn7KqhviLNeLUteQWKxHP8d17PMMP3yMBF28o25R4qPprm",
  "key2": "4pfN2WrZkq5gF18oudEcub6jRmQT265orwcZPw6qVq9ySqssHBgzHtjjTVZAQtCxCP5oHwGDniEt2KejSKiBH6me",
  "key3": "4dKcMEAmKeKG6uXmSTKdCcHEEtN6hJqqSiWHqxZzc5xcEPS75obKi8C2hQ5rQsPnaYjbguiTgyrj4ksbxhnN88tA",
  "key4": "5NCgCfAuQSVaYLzB5m72ESuberNFCFhZFU2bpTKM2821fddxv9p8aDrKtp3E5QeWy8g4BjJngRthJF27UhyZL6Qa",
  "key5": "2ojwDywkyPJdGgvejxPrxeHUsyrD9RXyPqkThfPevyu51SvciGk6g2Gro26FLJzPTU8saaishQPYJ3pSDFv5tD9b",
  "key6": "3y4e7h9z7GWi2QJSMF6T3LoeC4QR3DsgW4EuFZXbrm2zU3quDWbpwTEJtTqqicnqmers3KBXZHuS6eGgGenq371a",
  "key7": "5HJUb5xMJNG7wsQNJHKYaYmAkjQvxXRHGZ32pgXyaqVMPvcyLLvabV1hfnkgpptBqGVRBsH28JDboCwJz7TLWKaV",
  "key8": "HL81gHn8CDCALpr4woL2p9pbFR1F987p1usEtJ7QgpVbcFAYwHAUyCRF68H6rW6XSjiKhkTMSs3NRmayRL5ihLj",
  "key9": "4PqNCwuK383tskQ9UD27SeVdUSTSB4ucWB9hdngAb83YrU3v9nKiuFE9ub8WbVDUL29xsDSkZzxhAWad5brxpzeu",
  "key10": "2aEEBzGgJaoa3QEd1rVj4TJL8f3xV9rYx8nWZZjDh418PV2kgKRRGqLGr9SxjKbLvXLC2v9kaPuz9zqh2TkV9CCh",
  "key11": "5NShXceTbxSgutjeyawZkYHcrUdK3vPy2qadVZ1dmrfw7PWrD4D8B5rtptBTF3tPU9941wUv4qVCLUyn8YnyXTfm",
  "key12": "4wtngYvQVzYnSft7DdLBaZ5oVEYYtVAn66z1vZUqZk2D36Dqpvh8Tq5vcAZbwezQAAqY9vPPJgSHPRTye9zamyLK",
  "key13": "4MELC6Qr7eiuvjRwU1aMTGfEx1T7v3NVL4GgwNbstiQ847hmh2AFzh9z7EVJ98GZMKScdmzikGnep2kgah6pNfAV",
  "key14": "dk2U6PNzNmj2XgjpsTHc8osPUXWviecJLvQxykH9pUEozUk9NVwbCW9fEDDwRiw45xqY48P7pAPdt766wnYuc8s",
  "key15": "3V7XXugmZoUecR7haQp1cdLdrJvEHc9oH6EPWt58bPWrEAunW2HmFFHBLDEZfZjJeDSbr6Zr3WXDb9bb3zbda8pC",
  "key16": "3AKdnEEsXVjzJH9uzyvwMXJsMG5uXLgieUm63FMrYuMYQz5KYxjc6uSekZcQciwfmQA5xXkTWsN15LHeqCghJr4q",
  "key17": "bdR9mQMFEEbeoivnT7xoDds3yyMDegfio6SDfNdEkvRdnRCyFXKX1KKQK59SwbAWws88SsQqtLCdyxcmJeyNMTK",
  "key18": "36UPdzQuoGeUajnXM6wSZDGbpRU6E93T4jBqxgQxVRzPw1QjVXj292zoQCWFN7Th6Crhv94xyEmLZzvcpP2Hanba",
  "key19": "26swVKuMrvcyR8iX5Wjz6Zwm2Q68UHCj7C9Pwq6FvhYVXvQEDotLsKeAD7nKuHUq94yudua2CsSVmXc7uAFfyRuy",
  "key20": "4E7A5rMpkbt6X31MgKkCapD1fSCwCCJQs1ohnJQHP6YtTMySCySddyHkbqQDhLDvHx5aRxCQgwTq8Lz6t3cwiVdA",
  "key21": "3SjGDBepidBeCUxGtFJm1dCDruPtHncMyFngUHS8CEqadsqwtQaBdvz6548QgdE7DvmcEecRLb8SSqzs2RB2fYtD",
  "key22": "3SdPNNMRsE5LzexU6ke2ShJcpZqiVJdPgbWd4qBYU95aavBr6EKbeSnnP4CgiBQJQhQ3Qps8T5yiExsssVx3EHwB",
  "key23": "4fG4FBAAgpTpuFfMVt5B7FQZUwUBsYrFzeXDhttJZ9pP16QqcAqQqk9zFEWmv3onFVAyrju63hBwvajHjcXqTXdc",
  "key24": "sEuqZHAtem96vttJ4sjCbsKBY38bpvudsBxEJ3MUXpPPvxZKgCL7MNbbN9UDkQBwPJNkGCg2Z3yHRw6peM7jgSM",
  "key25": "3o3SriR2NG3GKhBFDB7htG8fcTKWq2eTdFNaNtMzaFbRthZEkA3ZrdZbLeDpgN7CMXRV5nczFS1oxAkzKn5koPbU",
  "key26": "3FUQ5zUVjTqVMQuA2tm5vUsUhr3ndeVEeiNNu87nBws5TUSNMGt5NXiDfmVLb4HefHBGWoC4n1tkb8Mb4acctB7X",
  "key27": "3zehAVHWbFV37YWpy82SUy5UPD2ZSmXRzv1irYt6E4coaqXFjToDKcWHmtgj2w3MgPVLKfpGVgh5xe2V6A3112b",
  "key28": "3mtbR2TKfkEkHruEzehK2Y8CTJofu2pjLvSnWKm6rJoJpVFJw8Lp7AB9ZLfVsc1jc18SaFvTCruVuPGeop7rdZ5d",
  "key29": "3tsiyddd7hMaL2Seo5o8UjZh171RrEKk8RYJwmQA1cG3WY5chykweJRa4yKEJYMc3UHC5PMPXP84XPSdCdeGCMRw",
  "key30": "2GTks8QYTXKz83nuap4atPe2ruH6nG2vaddiceCMZwP3F1C4W4Ggwwwpp9WfM2QBsHRFVpcWK6hp28XcF1wDNeJi",
  "key31": "3t1JAHYCJTkqPsx5iQEeG6DEcM1wVFPMPBvigbFe27ETL9ikPYansRsnuH9H2C8G9oDuxETbUPr44qTxbCjwhDog",
  "key32": "3BVDyW2iadaEbcKEwiNruZMppff8CDxTijvgPgYKCfFFbi7hUPuBpEx4CVQBZy4LZXSV813w9LMaZpHSRZmxMJmj",
  "key33": "42NKqLa58Lb2BbYbnwXFsLPxhaPbPJpoaX1gcYx9adeSdJabEX1CvChWb5eyFvFFLrdeAgVaLSHFb9WjhXHynzNR",
  "key34": "E4uo4U6xB2uSC78i5Vdb3ZjswVNvxbwWtkwV1tuG8q4hfKV8eoGKXFLCMwtV7KJo6SyooRb364H4XLWSvNveqay",
  "key35": "BmSnbfAWrbh6JiQUoDXaEbacLPivJxweQtM3ZWFq5zcgeaWKba1hZTiC8WTSTsPXFeJFN3m9CRub8bnTaLkYFgf",
  "key36": "4JmPv9UJ8eEePHrR5BPrcf3z58Xi5HihgCVpYscM4egFGZPDPpMAGphUnF6Bvq8MEfmi7tfPKgx6x6smup1WWRN4",
  "key37": "5z61DQWr8PUnV56o9j2FjaVEiz1xLeYe3xMKVz8qPy2VHGCwbQVTuJg1AjeoT1w6zbkiBBYswqVy7AmjmRjeTjgY",
  "key38": "3sbNPM6NSCVMHbfNwNLcgH6tgYMboBdHgqHpne1rExGASd2rWmoXTRkeZU5Z725XVTENdotEnESe4RKdkAHH5fc3",
  "key39": "xkccF4nEkP2vREhvicVmwAFTqeaNcAZ2R6CaW3BFQTxSbu8Zxx3VLaKvjcnMX7jJbW6Bou7qzaxBpeUo6C3qcDm",
  "key40": "6122kYPtyBa3Yr9iaiosN7p9tVQD9ArDSJ66Nzsf3mxNwx7jHd1fsiMw2f3WLgxVtzJcmF7FncsrpZvZxMeYjx7D",
  "key41": "474r7ZUNfoKs1RecHpfWGmeVZY4p9hsDkNY9YqsZTLsCqWbQsuW2fSX7m7hRRiQ3H3EFNWqw3SZVKSJ6mteQ45o2",
  "key42": "WP6W8ruMV2VRcYnkbWR4CqMKCYYz68Vr5cZ9TT6oUDGmd6Qsnr2wndk9f2V3Tw2EAWkQNjE33WpVFbhyVQvG7oi",
  "key43": "4Sc8xR1HBDEP8cw4KLVrGtL4hAzfu7Rc354Wpy7u9NmJrZUVYNyYxkRFUGYe1YsSJQ1iRV8wVBmjHUH3jVSQTGuP",
  "key44": "665zhi5fZr2DjyKoiqivJmrpPCqecyapSeCKx5qJcdyRNJvxYvn1ksvtfqYsKrjt6PdqiyJhVYimrM7XqTY4H7Gm",
  "key45": "4ovFvXsHVBis9ZdgKqvKjLoB8taPmz3RFpnRqBzGYREqfiYFf4MRugw7FbcvNXUq6XsAE4UFVZeyRgzFRhfUrbyL",
  "key46": "5YvjNJnZttLoK6hna6QKzEroSAjixyNsxQwnegWN1t31GrwW1qzsqQv6Ws1skzRdtzLzLGh92kbHgGV9f6DSxNy8",
  "key47": "5vHQBDEofxEVHUeiJt72wzndT3qPJ6R7AhrppKJAGh9mq6y5czTNmiRSu4p2oNq9hrDUxPCAKXoNUPuFw6RvAX9D"
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
