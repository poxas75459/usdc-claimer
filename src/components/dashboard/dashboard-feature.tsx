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
    "48DXY7vd5esZc6n7N3VxT24SWYU81p1iZR2YZskdiwQnDmX8WFeKhekmfeS584r2RV521S271frwRDAmNTNDvmsN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2aBY4jxz3TXKz5gyQFaBg7VpdYTPkUQy4j5vHKbtFRmmtScBmyjfHi4b4wnNxBmrkRJQnS1zMMx5Xeh8fJ4eKpHV",
  "key1": "4AMw2cJnDFkofw2FGhRqa16voRfZ6NvpKyVXPkGruZAeaNRf77s8TmFRJNrB7hZ8fhXN7vdmKoNV9VoK4hVrdsDe",
  "key2": "2CME2n9usWfZtMErBLuH39rbUX3BBDEpoUVwQR771gxVkPGo2vPdz4oHBhR9LVWXBp3KdeyWMQSJW13TJJopf76y",
  "key3": "2Q4vaCVMVxsq6EWmK6ccwH6ULKCsFiBBGde7PMHRcn8fHgdZEZPddFCfrfUmAe5gdcWZV5nv3hUom5p9RqYu4fwr",
  "key4": "6eyPz1cV2FQmA14mQz8MsowEw2JFxDk3qMtLGuRG5NgPu4eK7JcTmnzXYqUYiRq1RerxVqiRsCY8xWPXqgRx4UZ",
  "key5": "3xPjXcuiWgjU2dxd3BrtAcMMetZU3MvNtU27XaYTXoPXQrDDGhFMYWqvXeTJaSNDK1HAp3eRQZcN8E1F5naviLTv",
  "key6": "8gbyQ9ZmqqJCssom3MNVBktRdkPU1bVTybnjioR9qCjieP3tPdLY32rGTJ15DaDyCor5rQo3uCePQaUUNsfpzDE",
  "key7": "4k7Rzim6zxYwhtNevN8tXiYHtijGkVea2mzKHM29fDBXmxNWMExJ2DT5nUBUvBjz1j3Ltpg8Vj9jswRDGGmvJTxR",
  "key8": "3x6nhrRApQGt6aLtY9Bo2a7HESJB3vgM9aetCEoEcv9goWTeh7FFgH5q1bPNttjqF4ZxTf1UgjvL5R4ZgY9XamV9",
  "key9": "3hDDSQVc84k5JfbV7Xyu9A44e1oCKmMjWQarfyb2yyLiiBhcckkrDakFiaSb9M5Kz664YHPcYLocVUhgSGuJe3pf",
  "key10": "32Vr1DdMy78Jqq5LxSU3caPEJM1Y6MDDaHmY4sDgkJEX6BkYtdcLvYXrnVAybe1WkrzcjFK5L8j3hChDkdfo9zv3",
  "key11": "45A2j2nWGsswZ7Ndp4o6Q68biokWraL6bJTWWQ8LEJLVtLUktwQYebXVXdY18a92hGCw2aHqUbvpEbcvmH7HM38j",
  "key12": "2innVxM8GaNmpHJ6czA2qi6tH62dG3vtRr6397WtX9dsC6eNtadaHjzjJVgKdtBa5TzCVidZVAuWoUhp4P2joPXE",
  "key13": "5eTUUj1VYEyQszQNAvCwxKRBGfXik2w6VUXunv355o1JhAWNvyiAebp8S6fhrzKtNvoL6usZ2kCXru9xHyNvFVCL",
  "key14": "1zfQrMekqeMoT8CguSTLEkTCib1TFpbTxQVJsBpc8crQSafZKMLbYyPtA8Ey5xEDuv6kgzUU8jfg1Vhmsz76k7P",
  "key15": "49jZmjX5Eso5xdSNWEz6AzzVuewE2WTbKn3y5h2qSQ6XdbwJq2rqjcadMVFs4ELdpi6JzqtwxZkVJ3g6mo3F7Xon",
  "key16": "57oKDcjE4poY6rpGyScSnPU64vp4fSJdaggQKDXopEETh7b8xY2FBunN1YNReyFtT5M9x69EnNwiELWcP3rgvHoE",
  "key17": "QbKPwUCgjFyhzfPWPccKhXtDnKz9gJDUX8S1gsrTY1Tf8Xxk1Cny7RhX2Z3zFeUJPjpFztgLmfTY2q39epzt1Qt",
  "key18": "4fxGgNbWbtiN1FDPpPczorRnHR11qX4QXyt316ig2EiBrwAxVbERixWenJVJBJrMg7jU5ugNEP2SvMgpr95LTZAT",
  "key19": "5WBehBC6VR3FLiQ2TWAWuV891sZDaEBqhWmBoGf11WNETFQNxhgibQYrUaMqTwf2XJLceESbUooqV8pVpvP5zMz5",
  "key20": "4kvLe2que6gXW22YzzxFqUjsekeVUPM5KY8FFyoFgFYA8eDXk44UZnX24PJjscZjmLL6TL87PqmMEBS5QfxwhcfJ",
  "key21": "4SKBW5NzpS1fVAjg7EB8NeMcLXoxx4EF46Nju4xmizf5CjZ8QDnGVzcocRXvmfMr4vPEKMzSRtQ5sDG56RNmq1Jf",
  "key22": "3wdCELth6G3y1HYR2NXrsWqkM2vQwC99bLHciWW4EmYkysJpCuxB4kqYQ3aGZ2Gu8tAnCASjJRREb8vpBErTwYUG",
  "key23": "2Nrmam8zMRMTRa9u3nExkgGLua4M9RSau1Apysh6BXzdMQBxBThikNYEuH1WFyHkYjymqgKs9gZVBvqxD1GqYwmv",
  "key24": "4LErWkC2HNbCg6mHjMAoSjpZFgBDSWQwRGEw9V3UYxubpFqJigUzAH3iqwV5GVtyFgSZ71Tg6kXVTKojdPP7PJQC",
  "key25": "5XfUxKUrFRsoGU9KBgfdaj2GniKUAggG1rcyo7RxXfPzADSB1BLMoRuhNQK1fPuuR3CjRza5wAbbfMnSnt71UQAP",
  "key26": "jbuXeFLMamuMNPQKnhSqXmYrpaA9X8VHiVUR4XzHDYujQL5zfQUxbfuUVYHh2VaVw6vBrtmx1coVUHSeGbSvb2B",
  "key27": "3A4NXp1h96wMscFYW1Uavm1KudKBmgDRjuGzr7WemQA91XVW8z6ED5x4gKiqpZnXScvGfDkqDUQVsiaqPHf8y1Wp",
  "key28": "31qMMhQNN3zubcdx9Z6NtVz6VAMxWbXRjZbbBRemTzHp17dGRb8TXD3bXcY9HE1AGWBuquTY9gdkWZfqqUXTHqWk"
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
