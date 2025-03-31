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
    "4XVFfzgMVXzkZKWEgXQryQdsTQjGkV4zP4PiM9Y5aUfYhcrMKtvCNgfFwNZFsGgZGWzntLMc1gTGm9phqZvexzLm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Dw4gdnDcYwm24vPNMQHkUp6KgEApzXgqWv9SEkNSYBaaRMtnQgXRREMqVy1BfmNg97Nv73vf28ZsvyyzTKnF3UV",
  "key1": "4wXgdH4aj6VGYk4JLyPbB2tbYupFQoTFDW4LBfB8VkJszeq6SQm7w4G8vkrxqG8aHsb23DWgMp1PfBXCd5ieA1EW",
  "key2": "3iMitTe9Bh85HX4Qpe6qJVHRyvQ7L7ifxxp7vZ6BFUcHR6rkyszBYkUASX5695iqCWrpGeMR7QRPRQGeyD2ng8Vi",
  "key3": "wzVCZ9y5o68BCzngvsZm5eQwhdnB6V93yM98cGcoFGv9Axc2JikGZmTVNDf566iQRAcr9eV9RtruwBxABGbJC3p",
  "key4": "4KCW6rpQfZrUP8zkXcqdAZncomg1xiPxS4JRvteefTkqcM2G9PidUntDFyvW3krkap1wip8q4nfZQEKk2zRWMkUC",
  "key5": "3PrMrKMLLv7FkThg42J6G9N7tnt7rHyX1maALUPtHiywo5q2yyogdrRmHrpbQgJxGdEMxYoewKV5oH3EC2LpDcAk",
  "key6": "3Ky6a8H5RAsCqetGVuB1p9krt9gimHis8TkwekQNnhRhvTnoWCJtjgH6m1kyE3XFLn2ruvkM7bZAJCErxtC99tvX",
  "key7": "yjVx9eysdbvwTp9E8iMMqEfjUDTQVu6wNnHfDVd5gnKaLaUnMLa7kJ7zLVC3U1Xufvkza2VXoWjgoQKh4HxDBHp",
  "key8": "4ZghoXfE3cURsDZgGvTJ1VWXLxi1A3gz58d7fSqX6uizczcbaA9RGShn5X2VU4UPDRmZhhi55ie7oQu5JmHJpzrX",
  "key9": "44TXGsizeAvhL2Hv1Mvr1ko9HprrbdSpMMJN5Sm4xpHSWwF5QQY9bLYaR4GBZFLXWi6UUci4QsZTRoN9guTx7gw7",
  "key10": "5s55KjP59YN1wKRoJfPABXc64YiaLDeuTKjr1ixigUQzKZQXPEJ96tAk25zPb8A1SrsbUk1SG8L1qJB17WBLxzus",
  "key11": "2tTcKxL8aasFGkpSasLXr67ZYEbmEZv7aerwz84P9eex273nnpQsexgBrPiYno77zuMEDWgmQRkjVm6bkDvsG19y",
  "key12": "3Q4ec4NmVB6GE6N5JrdVuFUaT1jmFnwSersoHKj3QcubH3H3z6GdC3V7v36zeSy6o2PMt4k72uHBDE4p6Z9HFZor",
  "key13": "HqA6qFLGg7eGituaQPg7qenhPozdRJgRihyT5L97MQ6wjjz3WQBWSX6BcpCfy8cR9aNfxBxaRCFE3jJZYf9Xg8w",
  "key14": "1rt3HdJqpTQWVFoSc5tBrXfhoDWTstysaiVTnae3ZhYJh8qKgMm7rkBpwJciwZaWV3U1SKiVJQFYq7m6FGiW15p",
  "key15": "6zjjW7enPjR14pSSZDZ5CCzYnQE9WHzKUWQAGuZ3y27qCAaAWiL2Uzqf2CqgQgBL85sWBwBpG8o2JfPeV7vtbFQ",
  "key16": "5kENQcfRqQEKBEqAbKvuYKWiE2d1NgErbcUATkuVtWBGCm5CSNCu9dMYPwxqxQYMEyAJYfkGVMCb6DUzkUnsnnmJ",
  "key17": "xXQaAMnc77bcUyRwcooUrsedr98HACTwTPbFUtmWQcqnGoiwEcqn9NDvtJsnakToAkNuShSECJ4M6ndMexSEQG2",
  "key18": "5Y6wmqcvEgxXyppc2mxBe33bWGLi31CJGvLDnz3wwcK73AidqMUnCR5AiZ4gygXR8vTGX78KeeoWEa6NSLF3wAqa",
  "key19": "235B6mduX2y41zDrYPYDB3giZh2idbhwVxtXTH9e2boR6Yz5mow4QYeV1tcopkxphaBCFD3KXdRmaJvHeRE5jZQy",
  "key20": "268pdpre2vwzJoEw9WadqRdvdJZFo8ynJxUCTnTanPZuzzFjs9J5PWE3RkBVu75Fj3Vr4yNEAPv1eSY6WvTHFgNb",
  "key21": "3e8CckVzvGMn3c1aXxZHSbhrJPDU7NAL352jzcKJqK9KU6BeJypLatNLATWQEzNXeQRoLYpAHminZwjELh1crh9X",
  "key22": "4jtuCfcpzhoXppiKS5EnogP5R5kTFqGXVzB4bugkDPM4fzWNhNs34RCE66ygr1UL1teaUBWV1jX4FH6jGM8Q2T5q",
  "key23": "Ep14yxGAsef6gRWZD5DTw4XvK15mGnN5CKZBz8kH7jRdxrLA6CLpJXqFHCAdDLHLnwMjjy7fLsJhLpEPU9zr81i",
  "key24": "4fdSskYkdzsK9EJYLrgqNPL8aJE7h3iWgFm16PwjKAwJeo52gg5mS7gcDTCRmeoZCD6kVduq8E9qNfXjb8PvHoCP",
  "key25": "3wL4XSoC7sxM2DR1mCtX7R1XwaJ2T7865riEy52X5nLXC1EHtmrLz6hjDasSK2XTjSpxJA9X4Yfrf68pH3y9Lqyp",
  "key26": "4XeEWiFnQjNE3q2A6x1g5us5vBUs9C3fDsP8UtaR62RXi9nzjjPbF2Je3p2beXw2rhng4z1LNAgQZSzvCXMvs2KS",
  "key27": "552imaTRWjtP3DmHYcoUbGBQy69GKdAhxAZf24UWgMmHgzbepS4AM3JxGBYxAEtZSsXYDvpZUFzTPQMKW53kKLDJ",
  "key28": "2ViDkUTYcbprss9yAsUZLmeE5t1WgcnUUe7tMxzN8mnqzzAmktZvsy44s6taWMZNxnc19dNZQrrirUXg62DpU8kS",
  "key29": "2AhzAaY8nxXUDMGLwTUtRRod5BdmJh1K5R8NbyY4veApW9X3cvga6ZZ3ACSir2GKd1rjwJb8ytEbAD6F3ZrryCSd",
  "key30": "43bt5uhiM1TzKQtuheK5cZqdZS1Z8fAXiA1t7j8ZP7mf4k3JNyhVeSNLdUtURz2UCCcoNBvcj7WDnG6zF2XhaUYa",
  "key31": "5GvX3KJF9om8SLZSXdzrbsKhZcyhehjpk9pBXXcGCqEZnCLrd3qCkBbYNQXjjcjuX3FRqhKgWSNAcxA4XyZvJcTq",
  "key32": "27aVwb2nUnq6wPCoRCAJbyP26KuQwkD2iU4AvBR41rpX4knmJZmGPQhgyvspmDZk74hJaqUyCkQbVZfShMjCDoCC",
  "key33": "4ag871Kps5c9S6fG8Lg6A64rgJqs7s7H4LWoCvs7rj4PACAzWFe2i54tKzvDgLQrFnpyNaYN81TbHSyaM6Bxej4Y",
  "key34": "65d6cNMUrSmDpzFZKGXAmtPmvqjXQTxp3k7B34FHB9wtSDUbRwPo7vsJXGxCfsL3xxPUYDLkpVv7LreaX52aebX4",
  "key35": "4M2j1fmMg8wmjuLDFJ94aeBBaXvxNKhiKGp3DsNcKUE4b2LfgZt42qHaEftkhUQiugXMBATL7QLip54vuZ4JpekN"
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
