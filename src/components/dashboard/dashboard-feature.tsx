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
    "5ByWuA5eKcjKd4BxDMc1573AdWEL1XBNbzX7eZzaSiGqm9rVMFLaxewFHicZaaJdU1aTSG9TQq1eQwUcWCPLjjGR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "nPw8bddq4DV9BfzYVUXKMuN86GEtfQUXFq5YDyWhv7UPsUmFPKJUeKe3iqYgm6hMg7V8ML579SiLnhiGrcyExoD",
  "key1": "22uYHJLAg8n4dj1u4q6v1PZe32LMvCJ9DsxmmudHPAMrUoUf6s6jakGcKUbFSZd9vf25HuP2qB72vkJ4aoGrq3CG",
  "key2": "38GxbLJCjtMkWdPrSbceEQudgcALcREDesNSwQP9qxGqE7HUDoZ2cjp5PUoziymXwdUpxBUQa3mMpUacTRjbR6Qx",
  "key3": "34cKZ4ie4rVaBYATvuEGNPT6cLZA2hK44roZ4k9RPcQsa6goXNe9NAsKhsVUC1YiwfrrebEPVahkt65FZpu5xghb",
  "key4": "4oGv3mQQX4UNFwsE6kQg8ATMY3roKq4XMkVBMqGjVHLMLB12tEyt56LSsCkT392XLHDCMV1jha9VeTghhZDYXmq7",
  "key5": "33cyUNjSXuGUdCSRzehD5Xhyqx6M8y23gz4wfesVFfws895HuH9HH6W6JqF9z7EaVfcwcHcxocz4XnyzHyAafZMy",
  "key6": "3bowawN4wDxwG9wDNgYEzwnFXD4Wn4L6NTzP7AieFnhHyb2j2XLMsu8SxdUjfq2SSxuC4K7tEXpVuqnvE48mASaA",
  "key7": "35kRifnzZxPXp4AXNpznZVKSiueMFFNR9mQPwapMuDA6yDfNumukwWA8n4eM1e7K6miHNp5uRYmPWDk4RGvQZdzJ",
  "key8": "4p43rV2Bk6zgHPmNoqLUuLmdgGYyWdfFQXGA51uSvNvcmRGY966dyNsm9iaDySVvQFkeHzmyFUbmEdd5LpT4F3N1",
  "key9": "5jAT1DSz78FXUCK6XAhstzm5kW5S7hLFquqZ63qpDcmXQtRNrqGLEofs2QzbKLzpSvM7aN8nCceEg2FJSQqf3Nez",
  "key10": "BgR45tkG84jFRTrAito4Kmi4CqEm1b32pVNJBakhU3oco9QM3psDw1LHcqA5YLgwqDu6mBhzDstQWryRekcnbXq",
  "key11": "3F2MwQTvrrJy3NQ5M3pZ1vRNgaYSigcvyziUzcaFuC5qUK6GNKw1EnxkQZ1nPkwkS2LbaG6MA95CU2waJ4YqKaCH",
  "key12": "62881d8xquyJoMV77Y3Cy1KUtrddVBbfD51m7V79Ymv69TbVnWw8RRcQtPkQGY1Hm76B27uRRYc8voWj1nGEmhUY",
  "key13": "5bRzjUczUp6W7M4pu9mGGc6FuiU4wQ592rZjZoAhHdJk8bu2D9Do9mdjTNmLPcwU8YF3PsjAi1GbNTb3tu5xgLT9",
  "key14": "2iqewnJHUduCoAZhHu8RvzrY4bT86dkNwU92mgqgTbrrp9ZT5Fne6ixEtNTAqZiiRz9SpX9awcx1MofA9TSwPNCw",
  "key15": "2CJjEqbDvhDaRSkKLvyVgDcqKFy6h2366jqECXruEZ6mqNNR4vEKEC92e5D7rRmHtP81UtL4HL5sB6fiWidNwvA6",
  "key16": "64WbFswsXMo6DUaVwJq5znpB1ddaGVTGbxUrDGv3nUTGtdDn84XLbU9s4HkPcKgiN6wCZhuBBn7JgE8MGvWtgiCe",
  "key17": "2aZAoxG41bsYAdLPKMw7pgpWnky8GDntRBadhN8W32iq8ZJsYf1vjjU3ckn8Ni2bHZvMHwHepjuG8UkCJ9Y9M3n1",
  "key18": "3tJsnjJdinbbytnDZm67eUY2s9sv5gDEtxmAZUsmY16MqHpa1iAj3p3T5cmThFmSjbvoEZqa2WGk9kGksF8ucht9",
  "key19": "22L1nmiC4z88N4ECQGvi5VUyCq5jEhzai4SUd5XjYHJFS5anMiRW1FxfFiiKvfHawCncs4pEAfaVG7C54Etc7ac7",
  "key20": "E6z29c3Pq4CZX9VvyXF5Gs69hEUY1bbCcZFSbGuAP8CFRK5LVxKDuBh2dA97tgCZZcujX2Ytj92sVBjRFpSijVw",
  "key21": "4gCR5nHs79km5XnshnTijuv65LYxej4DpUTkrXqq8GCSQeiYxepn9ts6w3GZNGwP3LGNtBWLCxZk4cTo9fG76mAd",
  "key22": "3nQ925NxyWTcashCHYqBsi5VmpxQcdgAPaXqfUChpU1nThAed9qK473Cw7cvo9gPrqE2fYfJfuiDStpJx1zoFDiT",
  "key23": "2MqVjb3reGLSmKipm6GQ2jW74cFdeQDKwxJVK91j1hDSx6iZ8GGJ2VSQMotF3ovdsfohU4vtzYRVChSWPpvdGmt1",
  "key24": "4qBt6MMdaCrXaDungCZv9D4YnJgwYsHNxiapB4zM3NEMWq5zFahhMxWZHzJiU3YmZ8hgJKzuhpCz2RtKhupQpdDD",
  "key25": "Ump3Nw9PWobPKraCD234zjh5TRLqWfeGFnF4Up2R8N47h28w5XRMxN9Hu9XUsQMtC9HLcAHf8MdmTgzzMosbmkS",
  "key26": "44uc3Adv2WyVYsyCFdZ73wWTTzy8EZj3RyvsPzQ778gbjJ6TQribAafGaZoPta8m9V7PrUrB3z3un7gSffrGeTkJ",
  "key27": "5R18zSS6zqRxWLXsgt8A4VgGLtx8yarQy2RRnrN9jBfGyKn7MPe2S6mWdhsUmYQd3sEd2eZr3Yyvs3uaGvbQuUAJ",
  "key28": "9eaRQkyiA5Lb7owRpHah2oKhDoibotpdvecCRQoq5n3Tu9F6MB7w3gy5QPvxxuTb5oHH2qad1YoTAXuKt1xAWZR"
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
