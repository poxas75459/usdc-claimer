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
    "5Wt7UVKqFuPpNMSGQ6qULhcMkumcCPBonPnLdsFSfBJP57bhsFbKr3RDZXMqWyeHWFaqbzEwHny8vheDYvtMUq7p"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5tp9HBag6mr4GD3merULkUohPsnWortaR5gyJU1TTsKnzbrdokXXsULaFdykpPFoxu3ax7pVbywPQYH8216iudpD",
  "key1": "t8ctL1Q9YDHMHKgenf3LzD85jitRrke2a8RMrBrdjDA6TcVhuqjphieA5GfgLHueYXPRbVCyfAxuZ7EgWXJNx45",
  "key2": "3GRp6forMBecPod3QfAS8XD43Qc54EDPuWT5R11BFCkcMLSkpp8WeVC18YfXpcoA95YwHHM1sU5cE8djPjsE6hQa",
  "key3": "3hTa69Q2pT32RbWhaaGcuoejScNhh8iQ1gz9qprVwVzEDQG6vBg7xwuWo7zhHfdFSTkvUwj6aPUbedRKnu4a9wpq",
  "key4": "2FUVupwFMs6G5gAiUkJcYhZXWMCHu6MQb8wZJxqSHomktJoino5KqSeSFcXkx2xjmdsci4YUfGDzzpB4rwvo5Dxv",
  "key5": "2HNHjjX2eBWW3QU6yFPu29GTmLfoTrSAmcV4PTJRqe4ADhvGFQGXgVcKKRYD7BT21x9zCBN1wMvCgaBFXaiZKBGq",
  "key6": "2oZDVCwLXcdtz4qEDz8vE67xZMxis5BaoW5D6PVCrxssAWD7a93sHJUSXFHQVdoMvPYD4Enc8o4b3rLuQpAvbqKr",
  "key7": "2V8nKaycjvbvh4ZCw15gVgoqh1sX5DMfjrhit8K7V2CC2jWK24asCAJrZDNbxZ5KG9NgpcqGNw32MHeghxdC6twm",
  "key8": "j5E3sMatV7PP5vP2iTfEoNSRgQegQJaNHFXQ3nKd4i1mmzdr6hUFLXSXRuGjKSs3JqK1AJg6xPqFzJjbXEftpNE",
  "key9": "3vz4wNmQCvtxfmxu7m3ykHvZnvkxK8eLJrhDTfPRkB6tpNkD1PgzXwHX7zMFCGyymWuSuvtBQTNf3Kvy8DkYXnZX",
  "key10": "4oTQ37NzA6sEuMAJwRue9W2HD7dHGuNsUhb2WkyJoLGGK5bkxx1kmo8GEijmoSVahew415pCXA1wngomNMYpwas5",
  "key11": "25199mrZ1rf6Xy7AtgAyQc1vqUNCzvFDR9NVzRqTd1EDPU25AUKXbwALJmsmgfaT15APZuyidEMcCNS5Bxn2X7F7",
  "key12": "5AYpGWQW5JQsviea8nipBLK7gCMiTFxCWYeeTqUEvrm4ZHvsbt29H62vd86whoJcSRYfL9D9L8tWhMqpVLyRujEM",
  "key13": "4YPZsVpwBrswvUfp5vRNs26EcviLAtMiHvT9ChYmyE4LHvUrEM1oT3wSrgZ9e18QBxvmGuGhyFjWwgocTXny4HxL",
  "key14": "2xN2NxkNxy3KMpTw1qqrE8NP6jfak4GdbWb8ZPbiinBastSotkW4LqmXkLrLs6CLbhfTJ6KDANNkyoahBqv23ztD",
  "key15": "3TxwJfbvPTuS9v1yZB1UNfiwK51rbTUAdbjGeikZNkj9ZM5SwSVRa2VK6SCikESS2xZm2hnJfWXtT6mBcKs8dY9F",
  "key16": "2yzUPfdPqRt3eoR1gaVgQFJYc6rd4h6atfv2H3wsYoBB5kX3v6jJwJQGs36prpcdZifJ44oYLT7puRFcR9xhbN8a",
  "key17": "5PqRAPUjEsRbHsW93qF1ooNKK84Q1pMRekmmcQv2WDTo7Yh5zVjCwVey4FojRrVGJ1ibLFS21YXT7iMmseLQifAu",
  "key18": "5RkbEm1F9Ksf82yQ6NAXePqQbDhtze6DgiSKN5pJ5zhYJG9NgEKDT6TQDXrdqTnXsG86GMzb1oxgajT5bmFByNC3",
  "key19": "YuDvTAQu2LKg3Yp3KaQZUuhvL3eEGyAiTNFAQypAd3Xnkjn6TVRY7aBrxNyvE5aJJqUrsLjT75hfxuyxg9R9PJB",
  "key20": "5UJk3KCrfkk9qdBfhrV8GqWVhgN99GJcCCM1s5nwrPQWwTPFyMRUiXYz3tAT44tJ62Nvy8BQKMDebbsiBYEXfSfb",
  "key21": "4xWGKXdQdJWBiYuPUPszF9mbh6697azciw227gCzGjwtBw5yvjhiCtkKEVTzZyHJUxNqJFQasFsdrZ1fYBs45S6q",
  "key22": "3HjfcRiFAuaytxaKzmpTxQHZ5uWbVUjrYpE2CexzuMQfXx728qM2yJxS344ueXiEkZn4UyqpXQwBswextw1qJdxj",
  "key23": "369zmM51AJPcapYrF7BzSkjVuhCr6XWhV83Wqffw7z9Wx4NC1jZhgjfrTL5Z63Cc9kgGyPaeFgsJbtZ3Xn9TmMpS",
  "key24": "2dvVc4F9VQWXASEFZAudMVW4BWvEgWkEAbkjfCzNoCGU1YoXW438ouz2bKt4DEt9ZCXGZn2dKh85VM1dtqCcRoMq",
  "key25": "46zgXNyK5yM6sgscbD7UNWy5gMzXqnG81RV7QqhXLQkf3o64BYydDREZgzovKs4juSfvbG8Miq8HEZcbCrHj8wEq",
  "key26": "4rEwCsg7Lr9dToJek8TM8Td6YBc4fEcM5tFp5cxhBi2KJKjK8w83j6LpWEVdQWsoAxQJJRcbejrtFnWGbd8AWXvw",
  "key27": "3hv1LH71ci51ZUudeMNtqd7XWwHiWHpGJQhoNmuaQWzCAfeVFfbSRRjbk8Uh87i9UkpCCX9WhABnNgmeRUJuajqy",
  "key28": "5jrg6dHmCSFqqJi3weLkNDQkAxYMQL2V4Kddd28yxKNdn7AXU1qW6iGmpU5B71xBPybDCV4AfEEivRzxzKNYAoeY",
  "key29": "69D83h5s7QAx5iuJSFzB3wArqdGJUZDeR7j7f2DGqn5SGge6C8zsLvLpjzCGeJtBYBo8uuzY7xMRdBkUtFZuCLN",
  "key30": "3kk3Tbjh8reKcievNNmPxScbAavPv4gM5mHu66sQjsS9VYFmotKcmp513F4FJdzYijcuhvD6gCC7Fc2PbwZZeqsL",
  "key31": "D1jZ39Tq33MkezsKMkVRHMrTtLNEqnCBPopMkqj22zmYsXmQA3bECZZwxJRXoqJCkMNbt36yjeJ5KSXHioNncBw",
  "key32": "3utpUR1Md4DaXnJVtcvzYBckxrvsCJtpX7k8wLnSRbRqP9sSA8hEetvQ2eKqYXwLQJDnQPzqsY4Lq3jVHTuLjcw",
  "key33": "3QTmzdLCziPJZtnneQ7trmdFtaCBkbmAsm3euWietSMAb7YTd9jULUPR1wbiSErSMRjtgUXV478jYocvKJu7598v",
  "key34": "4M6monpWNLV1GDGkudYSr9FVKoqdCXRfdVLvKURtBrCVZrALWevf7S6W7kQGvT3aLDycZVdJEGWxGgTiV4suV74M",
  "key35": "2ZPLJfAqvKM4FXbT95N7PAsViSwCpTVPxD7yQNLT8WRrf2ZRF7ZF5yyiRUeojfRtkL7FBaVNcKiHak5qNTuUJz8B",
  "key36": "s4LwH9FDAnJ5uVpLLq7CpXKg2ToWzhZTXS64EnPwoZyM947eCXE5JwubnWF3dFBHvryH2NfttgSqGSKQo3jzeQs"
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
