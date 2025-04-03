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
    "2UST5GUoDnYUEyXLBAMikD6LL4SuruYb5wrHS7jXDkmTWTqz7V1kMPapkmVqgjenqeqQehXXUPu9trYNSAVtW3ED"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22TcY6CnU8GZRb1Y2HfKMjdUd5B4fouzPx7G8VvQzNrQDpznr6J8iXoRruKmvNZutnNTzeJMuC5vJ5BDfytJhQSw",
  "key1": "5E6s3FJMtvVzarPEwXRk63eJDK5rfjBhBkkg1NbhkfLYZqqJtAM5UrnMwiZCyoAVQhfMWJqUoDr27tgGPhxKTT4T",
  "key2": "22i1SwXRde197W4LrsAmuawPGKytYsPzxujmGLrHp7h9Ta71u4uc9xZP7wEAYRpYYmq2cwQDKWuXgYwie2Kjbxmv",
  "key3": "y3mkMS5H2ZXCxZvsbP7DK5PwgSyoGNAXMwYAsjNvWC4RW2zkzYu6nZT76LLwsjn4shHbcvQN4GjVyXmLSvneeno",
  "key4": "5X3HUad61e5QyKTMKm1fPQFQ19VhJQuKpshsYBK2q1wut8mdnFKLKdhRSbXnNUsHHotzCR3qN9Ao45a6Xqf3otSk",
  "key5": "4n3frh4eNGQMS9E83gH9jFn9Zp1JLFFgAajSK9G3dTPbdU5BL4AcECc3KnvsvWDiTLgacQG4FK8y4xVy3kpLUBAV",
  "key6": "zVJFcN4CJ45tRwk24NzNgikAiTV6Hs4rZuKq4uo99U5sY8SB9KHukD4v2S7Vk7ZdbnNWpQ119gT4XFx4XEM4wzW",
  "key7": "2JBrNsdSiihWipPJ9nwxPXr4PretL36VfFEB3G4PmgsaQppfhBggU2wZ7y4WZ2kWwBPTRz3wB8GiVt7vGfCY8s6K",
  "key8": "3STdYtjeb7YR4Ynxiv8VrT9HhvEx8GLgznUL8BwQ6xnMGYwwpBDTpcMGWLT34RYdjkLumD6NDDPL62vmP6ujdK4g",
  "key9": "2MgfpceLGzzcACZaQbs6iyTarWcZ8pC5u2e6VKAcDngLXEfa6kdXdZWpm3ZiHA76LijzUtLH4biGjpR5qG6qSrwN",
  "key10": "5vcQX64UqPA1A9jgErCcLDSh9r6gPmpsVeeYxhK298a5vCYzcW4HSGKQFs2UmDw8yiwC7rh1zeV6wgerBvwYFBkY",
  "key11": "aApat9dn6qBWUM6qCvvNuLE2kMbz9XFW1icRcSkpSAp3sFM1zfbJzrDD5gRkcx183Uc5fg8q16Rt5Ah61hL3qDT",
  "key12": "2g5HUzLiK5vHUw9VRYv8BLQRuNhm3zye7Fn7QE8rDsFaReZDTfpvATSVA1HobFkvRJZ7bM7E5En9h96UqgNrPq3R",
  "key13": "4q4y7RUyufCjKnDfAw9VTSm9zmAKsZRPehGnRbeqVmqqJZTWXZAUeEAicqp3Q9drMxwap7dC4XgCvFrgKibv5Jjg",
  "key14": "9n7hHXkBg4hfDBwENQbe1x67dsbG6RUL919VA9PA3f5pdNWAdUT7Wo86vZrXtn6rdZEruaDveqwU6YQPCf69m3R",
  "key15": "2udBPyfXwVC5VeoepLHeXLayw1tbGgoAXHXeB3yHWjh1FahyRE4LKT1WVvDkqGcFYfRkJF2b7jMJhwV46ErDpeq8",
  "key16": "qiK2NXdvb6DHStCPFQy83qyVsjU2RaRwDZXvmG6z2Q64QjMPUYKY9pQRAfMp7cfyF1VDnn4fmDeaqZwWAJSHfnx",
  "key17": "2dpq9hWh2eQWZP4pYMSzMTpgfvvpcCVm4aeG39nVN4m29oqopJWw4u2SxG1XbSvBFiMN1J5GXc3W1eVtPjib4C8J",
  "key18": "2zYw7C1TYa5dpLBYJ4y8WLN43UqbNTrTrHYBRma6FnjW5vCoZCUESrubnAvJ5tXuDDSaDE8gEAmuWWALLPMdf15Q",
  "key19": "3MYVMor98tn14nYcBzAakqZoMcVwMvvbAK5qq9oEAYbXyixjAWQ24UuWxXQt7QrjkFTvUbHomPvDuq5KG1s2DHsW",
  "key20": "5Mz1Dj7JUcNgehZq4Wbc4WsN15FGeEb3UmzWTDed4LQh2NkjrKNGYGZhf12HkuRFr6gokmWuvWvSbEDCEtDxdyoi",
  "key21": "b8bqayQ5Lz4eTAHg9E6H4v7qWppcsrDrBt96JDmWGztXfsJZhKQoUhRSLKUW4GKZCjsYtWJTB1ejnsop3bwp98s",
  "key22": "4AVZ2MgR9rqBaUHuHDyXim3Fn1Qc2XN7zSCtCzBAH4UFoDi6wj8AwChh7BPwr6ekjvWrMM6AbMiiYXSXMra9ZECx",
  "key23": "3K5kHJo9KEPQe9vzTEMUbPD9Xw8mbQMAHnNKxvyQY5fWA9jXKqzinrtGxaNNKjimRMsy1RcRjtjrWs457R6nTpvD",
  "key24": "roTGN6MFghowxfvgd8ag89YRe2tWxgX6vGYNbuJdYehvgMYqKLpxndeLGhZop7ykxEvyLeuL6WV4ZZtD5EEZHcN",
  "key25": "4WTQTRE5ogZV8kiSpfLZGa2FGoUfkAHARyevey2rGNXj5kx7FgE9m4azbFdP1jeNsG3ezxqkwQXfW73Tsw47LVQj",
  "key26": "5WsvDUZbrz5taaiZSEEuiCRGAYbAgtvyasKDBf1beHkCrwdZFWS4dJC3nUFdfP42MdtiJL9ZDEe2nfboabRBF5nj",
  "key27": "3wqgZdcZ6UekAGXPjLhiW9kFgyJc3JLStKhLZVCbsTE7K4E6qJ95ieYJ5yLfjE7huwj39QwQSUFFE47QodSp6FsD",
  "key28": "2XZbLAAikwXXRf4A2RinhYkGKse9EsafjrL7r18iukvLSq1snXFKM8cYRk6SYQWdsB6qDycydhNTLM2Jq8e29RMd",
  "key29": "7gmdXLcvJiaoHQH3Jejats3VNz5eiBFNqVVJvctPvt21oGQeLuKH9guHuTnXoCBhCzudbF3Rgk7m9JsCKrXwHf7"
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
