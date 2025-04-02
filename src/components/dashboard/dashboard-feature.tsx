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
    "4uS7q14SNPfx5VQEtiDdGwC6wSeQbagPMNsh5zNxGAwEMAWfaEVyoVbES6mzox2En99EkJNjvmSn7L8xgczrEZ8N"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bL4zBSVXi77HeEfzRxPQGzUGCR697XyNYiYoY7skYe4EWjLHu3t1i4CBnUvjRgyZDd9QUHatq1UUxxnmSbrKqdT",
  "key1": "JNuZTor3NBeTMaH1iNKaky4vuJTpZ1wAjAZuSqrTFnhdSbBgsVAGm3ReubvxP24sdEAShW3p7Y9zgkJ1hQBG894",
  "key2": "5R955KvqM3T6ZnGurAGrsQH9JALSeQWN2gZjbdTtmbRyL7mtcvU338Zvg9a5uiDKXFhV3w1rDPvsrQc5wKV6NBBQ",
  "key3": "3CcqD3Ys2n5S7v3Yfco9CPPtYDzHyX6GzvPGmFarZjKP6GndUfChSrWUzEYn8av9jYStzc9CS6jJctY95jRyqCQt",
  "key4": "9DUqQbqQbUsuvjUdsBCKmdhuBAwYV3RqyB2pHQtxy5wnxwVVMYTx2ykZS8LFxoAizAa1AJDpzqLyFb44WGdmgES",
  "key5": "2moapRbF5KxzpUaL2JnGPH9kfweKJc6SbFcwNCaKjgfx32McBw7ETMrRqdydtCdXnsGUcgCTB1VUd6prqtyq4yT8",
  "key6": "3BQN6gZJLmptrbh8bpuAW1pRUEzo4a9eYWC4idtaotxtDjgm1CBqU6MnkLGZnu1wsQSQYnpfyw3G6Z8m3FcmmKmn",
  "key7": "3zxB5AXqQrW2v6wTrwPPWCjkKA79FNS3fbWoHNRsXzbgTr16Aqa72SfrmHNGXYEgq3rwAn5e3s9irFxVW5aNbX9z",
  "key8": "3TedrTBSceEuFhAtL9a4NvFfUfQJaHeNs5ZZfVkoE5ciffCzMyqK6T6hEUNssMJkAnXtX7P5qrFWmqeWiA6hocvb",
  "key9": "JCScYGAyJ4RGdWX6b2wG2Yvvu4GE1iiLGhzqYSvmo2KwQiLmEJzryDJ2NEuLybRYM2JbKADrWANKpyQ6EJc5GAW",
  "key10": "2pAjk7yTidsWuQEgiwBxCvfXrptf37sjwgxKSdBHMYkUmMcL8aneCWyrWE7acmDkBTcWgwwUYkyEyrXXvFW8KzcE",
  "key11": "3oUivhb2FSMbVcx4LPURvaq5yEc38NMy6wmuHLGuQdc56ViCUtoGUz5miU3LyKeCRN65Zhk7XqctsnN4DUwiB88F",
  "key12": "38ronGN2g5X2Vvjy4SSrEEaXTskUcddePYpN9zJ9QquCJE94fYxua4XoLL4ZTSe39V6aNUxWfYpi5un1gbYbtUJH",
  "key13": "3fdmZm7XWEVmRMpVimyFAuYgK9ENk13D4RD33jtmVLVWa1hAMR9RmRnRdKkg7C8uc3iCean95HWm2shNuEXGGSn4",
  "key14": "3ACMikG8UQfy2Ldgk3n4oMfHSoJPA5qtjoyvhcmPy6MDeu1kPJrdQ5kvWn2ZHd3BW2yVWLcUMs754v7k8Z4HFQ4k",
  "key15": "2h8JMGHvdUi51YqaC4t72Jt6YcNvqBj7BUXqemuhWQ5ThXyUWFdwwHms7Z2RWWPkEmesKdrLSh7NqgBFwYrjMYWd",
  "key16": "5YAZhM8D4RV7PdEPu68ypUZuDqSvcpbBbdCUdCinXq7kKUBUykTR3K26D3g2hBtjzPTzdXvrSzYGieTtWLq1Ujen",
  "key17": "3tQzrVE6vRwke3emG8XTTJgaJ86Uz6net92wttix1J1cCE64HJuZ5bjLDQcFdZaNw3NyxeRhs9sifccaHde8QPE7",
  "key18": "2gq5VS2P8Y61D4xCAMtYpdc17HVxaubvPGNNsRuGiDL1VGfzwQirE14A26oXDDzEHw5nKubXHyZr2r51eFXPEaAs",
  "key19": "3yKrPiVCsTTX2KBBfg2gAUEy2UppQHTcckdQRAfjYvcyTXmcRyJxJ4eKFfv9Uxs8rcxN9dP8TKTa5Z3Q6VJ1JzU6",
  "key20": "2RWT4f9Q1gVu62pbBFKj4tw1r8dXqgk3VYKBHEtA82SPJdE5a8bjbqX8ryXkDaw5DZ4LF55P5wC94UETZHToiE6g",
  "key21": "6NTLUX442tV9JhjA911XFQQuuMq9HouqH9K1992qYXTvHoodkJgXVD9oZVruKFKJZJdhMnCFca1Cupm9fMgrRYA",
  "key22": "2e1P5GP9eH1oEercyuZuDJNm5cCnFuUQAe5LkcqKL5gMw1711PhLYaLJoNC2sssTGHQtv2RFpgVoQJZ9wXRXmQrc",
  "key23": "8afQ8gzU5R1G4xdsWhZncgnHWWhxGWhJXacrzkhzr4gJwDwaQ1QgPui7VuuUtRXhArbnn7DGEuvKVDQeoMD8gVr",
  "key24": "2i6WWQJTzV7Pm8LiU9hvYF29rkWQ15TAHRkQhietepVY9ebnhPERsbStimGs2tgxvgp1yoNPEWXVJWsJzfHxLvGa",
  "key25": "52ZCEtvV8P2Y63dxkvAX8RKwigcJtn7Mqh7GUZ4fDo1P3A6VXdBTa6NGH9Mcin2SmbdvFQDv3zHEq7qDqyzFURGX",
  "key26": "4FVoHaxc1kiDMNcDfeFUJZcYA5F3bYrK9HEjkzDGtqFssCj5AAJXuzVeCWUKExTo62hoGXNGRLhQJc1BNrdgQyYs",
  "key27": "vSs6XEkQZPgjGTGvZjSnJAWVkvMzRT8uy9Uxt4cgcfk4yMUriaoqUZk5F2xhfjSh8bP7mKYpP9G6wZw1RkJYCNB",
  "key28": "4MyiKgFaQFjZZpHVtJ5um4ZqiEFCEY5NmT37o1BorRbESD3EGCGoxAKUNJVViEUWk4LzyvwQmvuGej5P2wqv7DWe",
  "key29": "4kEdj1K6ZhGANNCXHaGcMamVyJucXGqJ3F6oBJSoWcpC7mbR6DCdMEY2t24cJAAskDKUmVYbSLyzJ3MdMprzveBd",
  "key30": "xtBag8aDAPrBNY6D5t41gCB1bWHP2zoyds63N6hBHnMbhVJH7Hji97ULc4jEcnymqg8fQuzA7JeCQhsbw7HsZLj",
  "key31": "31V9ckp3ZP5dUARaVH6NWuU3DG3sWaibjqTmpdQgdmD4R1pMVmZaBNQ35FkZHgze7W1mHHEqE1UQTwMCKYfFSW1N",
  "key32": "28HnHJxsTbq2g4ow9WwH1CXxeoX2Z1NMzqxnQsa8UZXccn7MA2xSjdKKKtebuJ863Hvher832vip6EQ1s9t8ZEeC",
  "key33": "2ZgF8jYBZLXZ8W1LdqX4q53kUbgdizDRkXzaahwBSKpXojjZ3hV7fmhtUifiPnai5kzXGU9EZFdgD7TBnHqFrTRG",
  "key34": "5j4eco83riD1W2YwfuGXRCzAe9tYCaBW7VTAxey6mAYHeicFWMZJLWU79ZLcRQjHaAMYvpBRwDDMBuDkC3SWcdev",
  "key35": "NpMfRYdHkeJQu2qJBVXGrPFENMi7Bc8BgqAjHNA4wf8wxcKkemFc2ds73d5YYH89v1r6FMV3muqBUK9XpRMoMX3",
  "key36": "2FdMnipznAJKR56Y2FsYwi2sMC8QRxARqTGPNTmDGe35dnUwu74SMzyVFzGSd1Zn4Ab4ekp2kik52nvVtWcgAYrS",
  "key37": "4xhieRsDUeNGLQyKmKBrf2s6yRsWvfsy85FR1JvSHZcG45Cz5PZ84bCBXLgbGSXJ2UuJ1tMvXroYcZqSMt6w1VpT",
  "key38": "469uD3FZbVCaH4dvPGZsjwHehs97DcXj6XEmrnMMFgUzpXE6aW1wEKTDpwGUqAoPaNNcVp2URKiJDhYYTsRSumCi",
  "key39": "5b13KTsdZCLm4bT61joa9RqfAerW7Wo251ugkxBQmqzNRXPJUNioYziCSY1XiSM9NUZPimDo9co1dvea6UrwXa6T",
  "key40": "5773u3RnNiqfSj4TL1VDJnM1oN8KDrDubuDZRkHDk4ckXDbcEw2QQiS79TSHgRXtsAifRdy274Jc9XvhULnPyusk",
  "key41": "3wuchJxXAoEArVWHWSA98rFPWyfYKzMr2jycDv91NqZVyassnjHb2m1EHonSLEmQAxnCAqCaEcXNo4PwVh7MJQeY",
  "key42": "1kL6dFfoShrG5oxrbpWHpWezhsa9EAW7xrR3pRz8CedHF1FKqVbywdf3GNCegVLcvjeJ7iwWTzBKrPW6nE5D638",
  "key43": "2pww4qQwoxXQFd3tKaPLm6R6P5bDgQwCQupUqVXfuxNfuTsbhgbRvYTXCdnDJtCCUFWB4d86R51Z8zLhvQiLk9UX",
  "key44": "5sbdeUqjtWnBS64zyZL44KQykFWNPQbC9TeWV3PRx97KBAH6cCvd6eRohYsQntxtxibSoYCHuWT1WdBtLYwLACfd"
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
