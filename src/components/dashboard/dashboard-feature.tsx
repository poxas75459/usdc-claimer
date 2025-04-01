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
    "4nmydUfrAAXGy9sLH3WeeWxPQ48BF3v1oKZmVr7adNETtJXfiwqURxaTGdsd2evGQDLNZV6fZS5jXPTSwu3dTHse"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5YSgSrM96FPwqATjurYx5ES8jEu5bP4E7YnDRzAqoVhAFbgbkX3obzk4dVisw5K33TipxmjFQ9uFuZFcLhEoqPr8",
  "key1": "3Ceizo3MMw3JCwQq79Vmbozz8rFJUrbq42zkAvGdYYVCLmbBtHVMkWQK4aDdBeUQH7UrEfjooFA5rPkZCmbV9pDm",
  "key2": "rQ4EdSxnXNyt6mkgJsvACkbQ5UDHFQ2bZecxbXLy6FMw7QTpaPbcFfphkws9Eoq9cTsEvu2Xvqdsscr3DGG7ekm",
  "key3": "4B5XsGnDMF6AsxNwdYEzstesBAT8UDQ2NFbP3tm3JhLt9ty1YMgPqhUrpicJM3qyusnWcPCfB9WFVk5ez81wH1rX",
  "key4": "5zdLM8mdPvDzPvgkf91N29bqiTcrgC2g4hq4Zhr2LczXxFhzpHz5PA5FX9Q7DEoQFJRe3JJRh4qu6PEWrNjAdSMt",
  "key5": "3smP7Ezc9gJqdXn9fq61LaPcLoNj1fsYrBFcXAWEMirP8LN5b8qRmJURkDS774ERpkGBaLfP3AXDYSTJVyvnH5Bi",
  "key6": "43EA4x6BSrJmbbGZ48mtDLcsVSYsYDRd6hBtMSQKD8odhGrwWvoj7hXjyshoKAQWpn8M94gfRjN2hgrCxC8xzMma",
  "key7": "2zw9QRbTzeZWfyLFfchCUDFhkmQMPMg2yLDNkZtZiafqYkVuaYLqAWZ7Arzf8SJ3csuu7BbVnJCPpTCf6WF6H9qs",
  "key8": "583x64hCR5RubPU2dRZP1UVG89hqVZhLx8fy1FXMgqfvYtNRJmSn2EGhTt59EN2Jnicoyqv19q4dv27U63vav3QU",
  "key9": "2XxrXCi44xeo2WZ32ypmwoTswhb8W1dcAcy93wG9U1nDoGrxiT6Atqa1joS3HoufjF12pLn4KP8DWqrhaNUqKKFP",
  "key10": "3GSwyoEX4Y3PudsT78FNjcAKyDeRmbyRN2qGKWF1ySpV7S6qxUrbUAjBriLTgrEGFnaXdRS9Trw18oiaowTPbq6r",
  "key11": "63oyMjEyUKUqe5NvYo376BD691Nmoz4fyBZSzb2fFkqpq8whvaLztnMwZuoeMt5TZZu8sSE6GYpgUQXDK3j5guYa",
  "key12": "4aTVFYQASBmbu9QiM6u3QTTNFzv8u4myD65JRt1rEFNFCYpgiuCTmSCtw1cy2Pgpc4EuC3mtWUEinwsCPnSzgvP9",
  "key13": "ssQMRt1KGJxbscEiH7kieKb3Nwit8yANUqdJgee2q1TXqPBm4LnfXto2pNxxvjK4WeBVz5QcZrAmLNMZCaeHSqk",
  "key14": "3xggM6kwjn3NZzeRseQWJGJryS1kyjk7ugR5bg9jwi48KR2VGzQrkWJRbHjUEP3JceBbiTf3GfmKC9a9ffha2WHD",
  "key15": "1sByKZm17JBinwjCkiVDCoEUKGtC3ywsqxi6HvSeQt21nPMzUwjZ8QQ7Gs9ahu4mpW7FS4rAgb9cEweMgrKWans",
  "key16": "cnrbra2svqeus8D8M7madYg7hp5P5BHKaCkaih2hAnGznhNWDkc5GM9E3zp4y7hFyVJJUHfcqaEDNDSrTkAA31i",
  "key17": "uADWjhpbBsARg4HvK7anA5hCCjQkHPERB8unEki9SnjaCui6Hvv8s4SjBKnet9axvQB1WSxhaeVAP8oqhLtCpxc",
  "key18": "2i8nNk1jYUchkf8ztiifJiWei9nRtzKFiGH97mfXrXN3mMkPtg77URrunezP9u6T1TucbBXxatXyjUo1P2NUnSQy",
  "key19": "3SFZbYUBhUC3oFkdkKM4XKS8C5Y4c2UJTSpHQGtktATUms3kBYTZQaThPB5kAvYNcuM9PNgZzJpjsPAGbsSGkVkp",
  "key20": "3agdCpGrq1QWsgTx2vJHLoqh9pQ1EDzZwZy9jxKLmvWEQBTcqXMhz4Q1sdEcGgnPk9dVDiL46Sk4YNkjKtEjqLeK",
  "key21": "278m9n3dxW9CpEMin7v5dCh9VHiADRTKKkMKQoxVgahce3NZLcdqmBrG2jXifJCd8hpsWwYhMWBnXeMSfqA1cQRU",
  "key22": "2RWRYUozvhB4JchRXvMT65JEEBV5aNNtgiJ7nobbGru4A7s6uFww9yCMKd69Nn5wgH3vGFMFxntoLQSqeDJ9ELCC",
  "key23": "CUdugjF8sYJk7Mfhv85hk4TdwZidY1c5SBhH35aT3sWkTKxRfyUoK2QKJFG5JEcTCJbbEzZ8KRdvP7YNyCa8SCy",
  "key24": "5k8NUjfVvrgVE1rEibJXAVeX1xkgY9z2GcB7DnXMfNzSeZwYaCdRYPKLYcoLPxNi7VouwLhGvYofNX5marFEXvjq",
  "key25": "4iNd99NDVj2TStwLQrEJYRBffghqQnMHL67LtCdgYM1pATjqam17Lkq3qhFiomopQY6q9saq71qt3qr3XF5Gvt51",
  "key26": "5QRD8FRe7uGubuT7wgHUkBx4q9WNZF4hMw4hKSLE7PrjR3rRYNsft5KYfz1STEBP3b91M1dc7Qmi4i7cr73PEPKB",
  "key27": "KJ5ZSQjX7JKjAk1fkn6pa4HUixKdi9RmJr2xH7vKJXZq178qzi4mXTRD3qunHmkPQs5M6VYgo3pT1HKFgGSrXuj",
  "key28": "2WTLFMCTV5gVa3GJtziyEFW6fJNgeSixAEWFVMTwixKgLsg8posUR9wEQPAEj2unBvaq1knjTEg5frdBzaKGDV5F",
  "key29": "592dA9yZfJzg5xEtDaNoQzrttH9G8K2254G5f5BwydCNNcZKjEnSiPchp8nsV1GGwKNrVs5ashngS8w42oWVQpWL",
  "key30": "5QsYTYVKt1WMdMj5YqrQaZGHFCpx7WSKxBDCrcjTPMp5P5ER89JxS6TERM4DpQn1yRbZs4xBxK5X5tDbmUgnja21",
  "key31": "pZcMaZmtg8GAoRJEBs5F4eoKpfuLQ5pt8asvtuSRVxU5a5neNR8s9xDQ6p5xra3HGLx6zoVhoU7Mhk2oPfvSuzo"
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
