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
    "5Gn877Xdnbpcu1tDG4gJdBe8pUQquoiuqz2W3nSi32yvQTBzwCFUgBcqzLaCkHZVhnRcc79f3XNAQNTscA9VDr4t"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5x8S8by91dPGBkDBCsmucn3W3TeF5mVbCHJi26n6CkT7m37NjoWJdn8ENg9Q5rfD915EdDbqPnUF9qCqFhJPefsP",
  "key1": "2e7mV3t5UvBk5eGMxAcoVwynEyjZieaf96X5nN56frGWHmQEfy4Pf1g3hKqWELoxs56HbFvzEX1Bz8Kp5o1PUfjD",
  "key2": "2NZeHJEKJVj4VegLK4SJ8Z3aGKnMi1UCLP1J1DYJKe8yPvEz43iFkigZ74VSxsuBkr3c99QMWstmnYqo5oKGownK",
  "key3": "39D8JWHJ6P8mkehWEr6PCugg8mxfuWHtuuXqFrXnoWd5uZXL1vpV1mzQKc6E56TaZTJ7PuRuanui12hYmZgwBgTj",
  "key4": "7WqhNJgeQiMpmu9yiysgHza8LRmkEDLactfd8keCvnaSvqKJqPbmdvMkJMVSAeDbVc2iUTuJ3YK5G6MpWEwsqEF",
  "key5": "5ivoj3nh2ZcGKKNWYS2jS52YeHyem7uToqcWhwJ7tMemhGdCtgyPcGdJqoWUEX9TyTxHCPPZMR9VPFWNu9jGrPti",
  "key6": "5WzxqKRpCtbmdUPrXndGLcsiFDt1Lp1Apf8LuN6isGsm5DnWYgHVYgYDDc4yvPCgG15emWFyfVtDgzyR6LznJK5n",
  "key7": "Rt6zsSRPCeBi2iAGNPvSVKSsZAyssKC7vhe25E71v6iC9tCHNVV3HDrGVw8F3K4ACrJdrg4eo3Rn7y2XSgef1ZD",
  "key8": "2cLCtaNZEAviz2KsPESHAHuUCw2yiEj2s5JBAddCDjMwQmzQXf2Dc97Nu3GCCsWRWyaNbAmufZFBQhmQp4ZhTRr8",
  "key9": "5NbQnLr4pnvdnmuq5uPNgAcC83pWpzfFSxG32yU4oXMZwL6TKk2dF3bTaHKfA3U5yoJhBUPTJVgnguh9HwBt4uUu",
  "key10": "NfYRLzjos1zKNEA5iSURvsc2jB3WS34NsyWS3LoXR5UWd29p7bV5yBAE59D368p3xxRNqQEuApwzeMo2D8FDz2i",
  "key11": "3XbyrcqmXcAppU39SXYDXfvjzukUc1fjWKfTm7Z7AhMEniyvCga1k153iKFeQXvHc5hc1CCEV2pxot4p2NfJmtCg",
  "key12": "4GQgaKJ7wq3eVNoqEjVh4LyvXhMLiq4AxpZJPDaAKBudHhy7mcNXWiFUAm7WeH6cyTgYii1KdLXLgrF6ieAve2QV",
  "key13": "5f1yyGixEZw9Nd3nB2AQxVDAhGd4ZXWAFSrCsYZFTwXcCzk8GjS4tQraCrvEtxwFbgkbcRCwMTCiJyWzcnE1rt6j",
  "key14": "3TRueuH2AcjrVVhTnXTZjmo3G3RWGTbR9rktuBBDLbCARRbrbdzEDfznEmGbRZuudzm1gu7auX261o13Mw4T3Y23",
  "key15": "2LwzBjPUioBigrgfEcwRCvSvCY9KdzoxPMeBbj4qHGAqDG7drCSmeBe6EjsGHrTgEGwuUQeKsY7CQYdMG6AkQqzg",
  "key16": "488ymLravyg83X3YSe2jfT1Q9jAvBTZFp43HYTgTAmae2SnPkqUqoXqTGUESj8ChnPxGQePXvSZU4MYbA9oJ2ZAa",
  "key17": "4T4jenih2kD8RjCKLyMJu7f18w8Q7Vn7sV53u54zHhCBhEsfnQAEeitsj2sbzTVPV7V8ozbQSeuMfj2Vd56z3YPj",
  "key18": "41bspvJmFszNXQRK3kNB5c4q34KygDHNh2TXAy8YEghZAHXiJxzuGmtfjK9KJMdZdzfHyFzpxb7Bz8ExxtFeSxBP",
  "key19": "3vgsPR5bjEGbfMoBYV6moAmPZZ6X6kvFHf9RsYLyuW8sV8Fg9QtzXE8HHT2VPLvUXJZJqfrRU8UyhvrgUB7RQX45",
  "key20": "33szuYrvKDxqFNAPNoo7fVHG4kkhfXmfxJ59FL6ew8dYyZzoBrMRfxmdjVgM2VVKf8ubGPUFbUtYJYxqANMuEKDT",
  "key21": "5gTdy5s11BzSyCT9LkxtPemXMF9ecNzNzARVSNcbBQpE932gZRCKzAF9sTMD2c9AVnjqJz3asPY81gK84DbYxC4m",
  "key22": "K3ox2uHS2YTq2eVTtychd3sDBzkcJFL6BNtPoWFqdP6fouJNF4vhmN6JkFCEQYqN6eLHhXXVefqAyWLmaafCz2f",
  "key23": "3XtKXDKE5rsTy4mpngELuLHhYnmia8vnECJPTYQseWKTHLRt1pHLE8daRfgbVxqd2b7hPgHGBjFkFmPNfpf38qiF",
  "key24": "GSupgDq3NhpA9ysAbta9h9Gj6euYZy5N2EVciUrxTxfM54g1NSUrka8JpkmvWKTNwdePpqSh963uRgjZ1EbhAag",
  "key25": "3mhsx8d7yYBwwtbdcz7icCH5sth7tALLvHhKS53PwFh9Uxkq2KTyejenH1KWvynLu6Lue12E7qpevhy8qi1Kvd4h",
  "key26": "2wVpP123ZRuExrEHHMqVBbgJA5wPu6UMqpmWow5cjB8MVHCyDkZYqZGAZrzBsgkbuxVAKHAUz7eGR2ecDTjQhW8H",
  "key27": "4adKKZZiHjqQSUDBgQGEvAosV7azeZfmwjNsKwU9jL5KpHJe4k4B2uGNgzzS5D9gCg7qkHycGvUY7gVuYpWa8pFU",
  "key28": "4bCKvq8ZvsxWSFzR7Bf1gFyjXSwoHoxvDCfXW2v8qyWcSG4NVb7QyeV7vozFCA8GF12ZqvxLN5Y9M1H6Kz5AnqGH",
  "key29": "127siCb7L6PeF8AjFyFEHiKWW4vWZZqmWL11VEUiZpyMKH4wSrpQUJ3q96AYZd6rxLZdnZDo8qymYArckUha4uba",
  "key30": "5BaS5ucsCPkFTR7qLEFXWx7KuEgEzQkyGxs2yo4mtBuw4GLkvyUVcWjHM9hLjezvEDDkAknhRRKPgW2JR3yiDXiF",
  "key31": "4UDXGTHbTvkmBXG1KsAHgMDDoCQtR5kHxtR4asgXwm6xXYL5YYjnVrKPjcogw7XWKsMzcRMBQQthrsiQeRvaMPDb",
  "key32": "4AMFz7GWiFhNdhRsPx1g7fH1bmXmaSPy4NhwGPJyS3D9GoJVveUSadaxv5ZdgpNuRBCLX4S1KcPCi6vC2CQxhXXk",
  "key33": "4xZJFSDq89W1YEvXRcDR4efnVpJbe1k7gFzt9P8H3LZ4zGdUBDX7ejgeK3WkG9nuDBkpMQbLX2U7nqi8Dm6hokPw",
  "key34": "9azogpyuW6dHGPLm1dM8oNeCXuWDES2hA4GDFMejXNDrTnAkKBF3RS3buD7f9dGLNeNSpKxf5iWgTuRjYrCGZqc",
  "key35": "3hixj5C7Vnv1Zt3NdtxFi1YRQk8Vwp4MqL9Gwfp6HWKbVjM3W8rPBdN6sWmmBFZinEVbnPeYcqu6A435v8Yno9qB",
  "key36": "2oDDTRdGANFy1gtWdZjQ144gZnpN2ZLqwS5AH99nY9CeDURnSFwgphBDxf1vQdyVHyJc1KV284oskP6zShaZKZPT",
  "key37": "4btUPHKmYmgU9oCVxXxQZFmdNNY4R6dBfiKkB1MihiQWLBE7ek5EvaEKNeD3ZRAazwrWnkXzMiccQKfZAV1Jbn39",
  "key38": "2EcfvJYp4c58yd5gaSv5nHhHU2d8dQkP4PMWzryLFozQXWtwjJ2HNoBeEKA9iuq8z93EahiuA7MXkwmucu7jmSJc"
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
