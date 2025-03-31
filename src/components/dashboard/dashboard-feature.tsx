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
    "3KqjSs2rTyFVSdBumKQNBVYejLVDotoYbWUwmW6HfNB2AXJizNcNfgne2XnK2FYnqhKwGUYFLHspUv5RqQQbXvyL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2tfU9t5T5oTp7Ci14XpyqRkPR8LckgRQxoUgCz9DPZvNsxp2QWQCWyRfKS1g6jaijS7f4fLNvWKB4x7jcRrsH6mv",
  "key1": "4QtaReG9cz5o3fiPz6dcXCkTos8AVo6E5qpoAhPtNDgLb3f72UPcvKtKf4MNJdGgwPHoC7Pg72nhBnj1avZav53",
  "key2": "3Kxn3sTuU1bYj8gu1A9ZzBRRCJbFNFDbRtow4PC2prpzJ3xjMR2rbrdBwKsJZ72ttJVCZGJGxERXRcrZp1BbumiA",
  "key3": "uqFMvPzYcqaVQx9axzN8CGuNrbDAyjPLg3pxyF1LhS9YEuJJyDH5oyR2NynPh5UvGjxqzRTW9yPuZHJpnaA3hvV",
  "key4": "5VDB63EnPWxhgfhvS7mMgmaNoHQWMQtKLemXTQL2hKcACGdjabE8UVHuWTkvi9dDPMU7BWomMDdZ2i1MqecrypZk",
  "key5": "29hsExjioEe33pyTW6aY5EjfjepvYAi5mbkptxk2hD3pkNAfhbx71bxdBie3eU2tkdKW2EFv5Zhs4vb5eixQ7o4P",
  "key6": "484GRuaWhXJTsDFx6XZezGDyU9Yqd1g7vDY4b7yVL5TwqcmmCwAez446NukTzp2YpVT38eX1aHrPKnKwhiabP41e",
  "key7": "4ZxrkA5aqd4r1nCJrtm7VkWSY67ot8D75u7uTfctjvatLKz8kfXr44EtEjaZmyGDK7ZesyENgLtetUQ1Q6BvRaqx",
  "key8": "27RKY4hEoSLwi5wm7yU7fCZ8DnX8HJVavemUbj9p1zWU9PRXEk46V2AeSCm77go8JA47njtVfh35UMYboWPqUnow",
  "key9": "4y1XoFvGrtWnPpY8gdxFhr2JASUvcADbPsWy5vWxv4MiQ1GLYGfQW6GT5ZmLen6m8oKttQA7pKDmZdBLzahc8xsn",
  "key10": "5wsXXGJ3fHQ1iKjEGYF6ypdXE1pVUSnjKe71dWCcgJVFdqTo8srV8Yz9SLxkTPCYCdJtr3Gy7H8bMGwnqPLB3KEy",
  "key11": "5xQAi94DPPfRrFbMF5qyGtmjsG5BfYaC47UvJ56JJwLv4WBkeoomK3g84BjthgGdSwWuXCZfqp9Csyb78zeiNY1r",
  "key12": "A9tPn7FwRnbnMFvg1Dx6XZStZnSAWBVBPcrygLuDFuhPfzYFKkgqiAdXddvepZDL7n4HtsfEDbMrmAYoSMerzvi",
  "key13": "3Ls8sC4esgDms1RLGSYPN9wwfXbCoqM4WxbtAKhW4PotBiP9brJcdvhqisAi3h5swhupeCahR3ismXHkb6HhMhJQ",
  "key14": "2eccYxuBhRTYi8FFSzrEpbPTNKpA9yDXceyFLaD1gQCiYkgFviXTnqgzRtqdw1faDF3KGKcCms12wvFkWNRUFpQr",
  "key15": "maaa5nbyp9ugGEnvRurTQGzh4Z5skY8dFLErtNeLE78sZvSiMu3aJeLPavvvY3AMjeDGJqEypWaubTT8axSZFYG",
  "key16": "3r3Jee8pCCzVkKAoE467Wud8u2jZXZ2yFUtiGY6RPhbbnGeiY5i7ziQxDeQJcrc3UvdCpvvKd8BVwvQst9sgYxSc",
  "key17": "3BXQUes8WdxSXFL7cdrMZW4HvauBhgsPJZJ1qvKxMH4qSS1jfttpchoDnfJp65pmVFBhYBzV5dS8N7oQsoiYzL9v",
  "key18": "5tonYUPRRSH7YdAtSGythPxFJ8AkNEKCmhWeMa8YeM57EqXN4nAx9iEWJniAzfJ7a6EsKBxXkV1as9TzofUbdSCE",
  "key19": "4hrc1Y19SChML97NPqiHe3CXGC5AF6PAMiwCmmXt5egVR9ye4HJkzNtSLB6vwxdD7LwbhPREnaJQmHnbbo8rEja4",
  "key20": "5bmEppobhhPdhrtSKEm6JJQVX24n1UxPJJCQYWMQwn1eochwyd9B1JiZ45F3DfzAw8vauq69UcZ8WmYbTXHviY3F",
  "key21": "2DJRw9dW5N6sS7R5SbwA49yQLhqT9uPpWC99wWsf9dfYt2AFioEZUR8yGHJJfYvYUDujS2TjaGkTy8dMgTExGfh8",
  "key22": "3oudt1SZVncvSdsyQv4skecn4doya8pA6rYBAzuhJmmc4mh2CvARY1iLBtfgVuhP7g5FbLYCKCeviuStBZwGmFMf",
  "key23": "2c8gy3vpBEqpqxK3JqBVp5TBXDk9iXQN2zKC7TLWKaywroGC3zdQBrCweY69eCfMBsUFaAZ6uwwzBxBURJvmdYy4",
  "key24": "25uiHPZD5Xw9qhXUY7eWXL6QQ5fyN6A9SQyR6wLv81g6imASiWDjeZLTpeqKJe52DL6iY3oMkqBCjCUEuhHA2oj5",
  "key25": "3J6muGWt16G1ivfVNP19fKVp2SHJkTP3tzwnnKC6ssTGfZSmh14pSM4SreNMAHqjteMRre89pgT7xknu6JC5HjWF"
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
