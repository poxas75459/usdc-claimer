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
    "4Kk5fuveKqpSA5Rh8kGzZywSiKd4xzfQdVugPJJTyPiPWowkcQ8HRzgc6w4nUZveLWoUyFeKR1YQsgHboiTWCiqd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2QsyV386QgFehbCqQsmyVWphHzDcTA1GUtkPWcUVcns8FANE3pXu6Tj1GYUXFUPVgaCjyqDScMjnkWGnnecwhDXh",
  "key1": "KRgxREjkGRBqbxzXySbtKfmfHwmXpVX3LqJPbLCUmim95bi5smsjHjnR5UB3BivRmMm2efTFhPgNDa3d4oE2fMX",
  "key2": "2QvvDhTtG3fJ3dJXGhekLM19bVWMBNoFDK12ZEpJR4tJZUZeDnkrBXWxFt7s8YfYAFbDbGSPpbD6TQuDtFfdwcQJ",
  "key3": "3L9my5JwLT17fmbbGosuehoGweBRt4xJtuNzkXTtbYBbPxmNdizYBKD3ToLWHhCkVAD9bG5Zf3puqyRVHZFg17B6",
  "key4": "5hbGHDfTeHsXHpLYPDFxFV1mGUEEYxxX7AhkrcG6QzwbA8d1AYbEG4bLbwmL8MHmCmfFzzzD5fyoNZqEtXhDdgDG",
  "key5": "2eMs8UwyGvUFut1GrmGMG73AvMd8oks3eEA5bA6rxm4NHfUBy5Gub8CctcKredeGMV6c7zVNs11smwk6xu5a6FUr",
  "key6": "4qYh4jKVMaxYygjyTRiUrzKjs4AMkztKLtwfd9EBu5EAR4Yguhm9jZu5xKJSbdtzqoCYtXPutV9jhx954yDNY5eN",
  "key7": "212dbhctrM4C9p5spuri8frqLviZin3gLWAXwrB4jixUExR9HvAkTXkpHvVSSZHupEu22ZJBP7hZ3x47vdyrfmW6",
  "key8": "T5qiJAGTc5d4mTgDEi5r1AFV5idF4YodBRh7gwweqLDAQA53Jzm8yQdbpcncnVLGapPHM1QGzDED5ua3iQzhvM1",
  "key9": "299zz5cALHcAhRKy4xfDi84VgFLSrBrwZxafDweFhoHKPbtscw4esJFRrso3FocGfyURiCyPEgrMNDkHb8CDQgdr",
  "key10": "3iB64CCGRbgDM6YdFFvmC3pxjHJAZBHUE9HvRZcovv1AJAQhY8M1S9ih2fjn5MdSUJvAjerMaV2MsEeJjTDy3CJ5",
  "key11": "2nKs7u4CQhnezN8HDta6bYGe9vRHfrkeWJRt1Wu3TNt9MWJDkK4eoWwp28AXEih8UebnyCRv5uE9BXeZRTCBw32v",
  "key12": "31Ut3wiepSGWZNKq6nuhwEfrS7mAEt5WjEtBzndDnpGhnNUC3WsEdUxHpRwRM5eyLn5agEJNhZhCs8MCoTkESgVg",
  "key13": "2cdwRvZwrd6PSj1qfMceCqwkBgvzqkPDTimSv11XEMhqzTf1PJH3pkZ34BD6toF3Hq5gYeKGpRVoApGXFn695VZG",
  "key14": "2jjxnTTbqPkc475up4gkdEk1bVw7EEibBnScwQ547aiR6YiawcFqt4b1zTFXQ6iVFyz2wxKcBeAg7vFcX9XGGKR9",
  "key15": "4rPzX9qpqBpMpBo5gDf9QRrArgsjUxuSSJpsPggGVLctXVfbcnnFqH71rAmWPyL48rz6EnQvSbpr2utYbsq3xa4y",
  "key16": "cFi4LPJtXpcW1U9V8PJq2xFcwWNESQc6Kd9yXUhKdjFunFrc7Np5YiYyiFdLq8UoyauYu74GFiPuz9fr9YM2ed3",
  "key17": "33BDAiS1tweayQTqsoJXkGFFHctsmXVuhkFVLW4gYnCRhnoS1g7KsY6s92bsUoft7RAAYLTc8E2TxrQAutXygjQY",
  "key18": "3SWbfkkzUNPN3xWrA5hqKiqeoGJKFTyPgt5eokDUQrUjQTJbsh1XgaNVxJo77n9r4SvzwCApoqemFpVT5NqopCKT",
  "key19": "3DAJmK4ucaVYaXJ9VVwkeWdp9Djws3Cxs9ABu41M3xmWhSw1k1E722e5kDqR8xdA3CXRtCobLAiE74NtYshREWr5",
  "key20": "2UgJ3W13Zh6GSQGAouVL1EnY4JeBmsujM446dmW2kjMNxhv59jHp8qJABnZpDhiPvCVGv5Qn9fa3q3uJEJ7WKp3j",
  "key21": "jxnXrp3hAXHiaWj4GoGut4iRiZbHkAAdn3M8aY6PR4w45mrv5aS7YHQDdnqAfx9XKoUNRRet1KRkpj3uQHYNCeW",
  "key22": "au1cBNtSYhy9qtS3sKPjhrJyderb6LL7TRcV8ynWTgVSvkpXwTjjPZjzySBpxc6Q9bbKtgYsNXpzd6e3hXrvd3T",
  "key23": "4UpLNGTrdj6rJzhwQiF35vKyfnBbK2jJnQYfYbwq9XY1ZDWdi2khbVTKfHcB3tNYGixdDEDTHiYnhHjSLpzDrHYg",
  "key24": "sYGL1SJNK8xtmNH3oL7xwhxpYUK32akrkYwqb8BNQcEsmUigSfpi2TRiuFQRNeGBRTkPVZV1vfJkN7oxGv7qvqY"
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
