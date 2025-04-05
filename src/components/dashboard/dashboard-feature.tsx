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
    "63QydcU7tHcHcXg7AUjN2Z6r6PPVHf6j8ESJZAFfPwt6efL9o9ZzYf134G4NTAtq3m5WvNWaZGkLtLjxbUb3gEMK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "io5GD6gvSFHjC2T1wjArRx34NDB9q5NvcRuCSUMHgndBAt2YTXokhWRFrQ8arZV8M5mTNY91XyKqQoMi3tFQVyL",
  "key1": "j4TcR2GfmFn475ffJ5r5qFL4nhHGQyktCc4PjVNLBc47oQcWxnGceJ5owL5Y38vkf5uEoemBKxk6LusJZPbn8PC",
  "key2": "F9kujk86cUjftdsT9hgN2bk179YPe2GyH4zK8nQbmwdcKM786YSVMVWDDjPz519q24vDboRVtRbkri2QZLpx5VY",
  "key3": "M5heHYbURo55gR1ESZZMFFKd5Lzh4Zwom9DQyJwedVnLvmNh9zsg3XKEjQ6xtWviE1r9XUiLqULFCCQt28UgyJj",
  "key4": "cWj6F3ccYQAveY6uWufaTmiFUiLA2xrtVuvZ8Vqc4PiyuXsxU9SY2h6DgS5x2zXEqmTGGfa9ZqYeHQ17HuK1Td9",
  "key5": "6DBv5JysSApSw2JJyCfNETdUU3teE5b88soiU2UoQusyff5x4orxVa4dHbw9zJM3Hhf47d9oBjhArGiRGXZjsZA",
  "key6": "3awvR5eGUsNcNy3XGgK8RhchNoFE7Cxo5cKasR82wCceD5zTuVV6JqstAdP5he81hcEBotxraeJQUXdsAoNehbDc",
  "key7": "2hCaBY56Acbt9eMyV6zmUM5aKS9nKjRzv4TAdDw3XsmocK82ntcxM8pEQydXqdhkTGYtqAJiUrN4futR2R6FvSJa",
  "key8": "4jK8xoSLdH6y81MVuUXoR6LH4uPPo5mAzBbgrK5ifSPHFn2ynAHMhZbcBtQ2aWA9foAa5MwcmBGzZApTUzwkjxhV",
  "key9": "4drqjEELuf2r22hiDYzkvVswtou12x36XF8KfJJzQG5eTgmtbYBVyMJmPSa92ZmvzCtWAKfpdjwv6h2BNvmLjVAj",
  "key10": "54UkGPXysgY1C4z57dmHFciNoqSNSAq6mjYdKLFHDUamYnQ1H72e8yRecaihJPooNhkpUKr66QNJdYpQTPFeESHJ",
  "key11": "3moEGVtUSHTdyUNx3NQcskTHNdqMWBGZJMj4Z1fMFyGe9G8Kzq6PjEKjbvw5ZzK81nrpPyxaZS2eem5vs226nKhW",
  "key12": "4fUtMCh6UwPZ11rmL7it638DK9Q5tBrJLgR8uP2StvMWvrpZnR9omo6HchSFiTWa1p5wWwXFJHeUSvigfuE5V9Nm",
  "key13": "2YzTNCjKE3h6vBPeoFBWX1HHXJwECYi7tMxqsxhqsVVBDB4kyGjRFwCMXutkZjfUBk33qGg9oFiw4XfqS7vM72Gv",
  "key14": "2Riu87n2jUD3Ce6mNoz8L1xskNmGxb8Kzw5t9snyV6E873yDAKhBAvZ3cTJ5QpHqnuWBySs9MugiwwbCf2CQBiFn",
  "key15": "4TGVGXViGyfuB2fZi318wJW9gXu5rNcdntSoH2kc8MdZ55zmNthskuNadwD3sWmjx4vZEss9TwxhZkgoycDr4yx6",
  "key16": "uDebQjL4GfiwFyHg64WBAxs8gzppbqqQAKTjfnGGdcwiywbQZnviWq1JUfEUVXRrHd4nQaQWF93dJfKGpnzWcw6",
  "key17": "3cXbNHFUAUpLFQbYMLv4w1n8Cy83xcdAfqvLbwLsFobLnHLFvWo79khJBkbEz9BQCH6kQDo4xMZm3KhB61Bxbas2",
  "key18": "XKMo14KNxz9Goo9iQ9QUjByos8vhEnf8TstTies42kSVZaTHWNoy8Y7M8souFivc3cp2asFyEyTuhKz2KKMab1z",
  "key19": "3AeYfn77UvrkPJTLCiofAzaMqjXYkCMcR5atuv4KSXXrQrv6VxYSFPCjMyfvwdvNEWD4hfNHbYnzHGdHZzyP7Lke",
  "key20": "QCNvx9cSBPrErVo3VUKgDkwygMLkixfdmMvq9SKEy4eUTTr1NKsQejegqAgFto59dw43TdVpRMGXfR5UQzgjk4s",
  "key21": "4ie2crD7jYACPG8zP6WpWeGdFVVEqfseHpSh6tNxSqynrZKi4Z6wPtjYVnQVRuWTuFYdKfzxyHPudoH5SURpmh6K",
  "key22": "2QuDEKRpnmhCdKGJZ4h6GRbidUotNDNZ2uriySPHqynaam28T7TWphwNLpyiTPDy6iAuti4fqERpcpx34SLUpuUb",
  "key23": "61qoqP8wT2VUGQB45ZeRHA5yhwQ2uJ5uzm7g5urmCZSwZPkQeLPHHhjykEWFZF6VYAyM6AxrgnDBaJuvjZyVtAfx",
  "key24": "2JhC4FkbagHYq2U7DxMxMRXDQySwKy2HMyYXWBpyZkQiTk2p4Zw8xk92KKThn3q6YEmbzQRzgXfPobLARDmJS3sw",
  "key25": "FJssfkoAhzuj9D1GCyzYA5qYZFUZEL8AHBgmW8w5rHjU8e2ffuw1oRP2AS1UYNvxoGyYbkLtxeNhCv2gDFWJkqn",
  "key26": "s5qfBRKu6CiY1ALPYQ27qo5RVWsRwRTKWwRrtZX3H8abTrTGBjBu2NjL4dUZnvaWdkhgxr6CFu9rxna3S1GWQvo",
  "key27": "4cZtcWyQDHDLA3eGcNXYA9CRD8dU7BffpqNZLhCJEWkWneS9QAfkDN74a3jv7euZwWXCx7eXxuCjPyW4WDjApLL2",
  "key28": "3Y1ykQsgPrCrZuJ2H29zxTxNd78uhtctWhoBy953d6zyZrfovxDuZZx9xM7KJFkuhxUtvVkjH9nRaJEmPCutyT36",
  "key29": "na9KE5kXv7FNVVpveBkfiT34ezJStQuvHiQmj2xr85YwBSssCo4KwPSikh8Rk8eQvsVCgeTmqictthbTzR8widR",
  "key30": "66RHHa7gdTF8zpEco63NRAyVnyATNGNjziRbr4sgiu1bLYESvEY35dAXiaAb9yr6SJ8pu9KxV8RvL9HBK8mnNpAb",
  "key31": "5RtAmZuLspFgfGR3kEYmyaC2DZnpanmKwGsDmh41ZGLZYNw9V6Vrpsrz2bBYmU4oYvmnDX6HD3pxxFqo3mbfre3b",
  "key32": "3hGxgdJK7NLNN2imDacmpGK5apUhc5gbyCF8SgxanXMnJnu35TBgFWMnb4FbjHKmgMuvB6yBFZzW8dxPX2uw8r7f",
  "key33": "2dRhy32QGpMBhPWniBfDar9HDSYeTqZrJBJrdmFXp3PH3x4vWvJSjVxsnwLYZJSJ7Q1nEWLBTvdfMTNjoRzaUvoH",
  "key34": "3tphaM2qqCjDUNZE5gE37MxLrqabQ53nnkokVL74tWJcth3Tj51At8JxNLmyyD8YnJnDF4Edf282DNbDUN5xmMNH",
  "key35": "3XFiFWt7S9c6XnfpixN178dhPedEkGRAsWwL3YHeYJv5a7pP6neADUNKEaTN3Xkv55MRoDLizr2vdeML9uPp51mF",
  "key36": "2vm2GXHxRMWBxFqadaJvSgR7nHaaYT1pkbPYXqDY9W48Aktzv8UtrnGSkdAWqY5W9DNmC2a5Tz9Nz39G5akPUQ4P",
  "key37": "64B9BvLoxDUaiivzL5N1j1t38YG9QtbTXTpGddqDVGPUJgPPTUFTJ6KqdjK9sfiSA3iJ6Qmm6SX4C3KRc4UGxMSU",
  "key38": "3XmyUUkqQwGkvm76qRzdjDBnLEUTx417RL3TaTF6T65G7jtvTsNcBAUTZcTe1YPMT1v8FmF2mTEQoUboiYt2EG7E",
  "key39": "3gdCAuvozZuonuEtzzJE6Xxxgj6PEBSALMXbdBg2D2SSGHoB1hqiP17qAoJcy6bC53JLHGKMZYmmSJRrt9toh27o",
  "key40": "2boeV8tnHRUPPZ3M52u868ENwYhTUQESxwqewXom2WaQDGeRR5G3ksrCV2irvX8gPggBCqk6Z4M7gkbVUtswvT9n",
  "key41": "5kn6bp6owqLy7HYvceWVWJpgwjpuHVqGP8qpWaNXtAqfhqPtd7Pdp8RV66fi3exGMEUEopTGJ88ncsLxEZfX64A5",
  "key42": "5ZakgqRKrnqWCQ1BL2ZjMuzxemteMjEr8CcmYiGwwgK98Qtfhux5a2GJsXXJdRawd71d5wX84JGEMXYt2rRmueCm",
  "key43": "5NZSNkRcUFH2vrcpf9NvEZ9cQTwM8ar9swV9rQWETkEJqqzxDyTCzpNi1SH6By11ytAnyxbokHVVfydcGe1caLeT",
  "key44": "3crTGmGjvv74eMMH2AuF1V1yejDnBHKTXdMfX566fDRswDCw44qR7E6Tit3Ai1qy4oVjS4ECc7MSafS47ua8Lbgt"
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
