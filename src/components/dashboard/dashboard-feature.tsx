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
    "44Mq7PxyHZxdYYhW6zZ2sVTETPtEP4yfVBthfE8W3RixFQxSkEMReWB6Yi3g69xXtHpGoPCvp9YzafZaJvKtHkj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "R57AW3kwyFZvZDbErbtU5RDdngzkmkTXc8fJQ8ReBJfNnx1tvkfbQtdwxX2eiUycFejhmgFEQjEwYXzSeXJdfEc",
  "key1": "37tmb9NXU311YbnkwFfZXyF9nUm9TMfB3aRshEFjkRRczoDnsttq4iqdRgsTyX2Zm1UP3AgNfBhaMbF9ZXCLF1B3",
  "key2": "HswP97LdJkBZPCXis2dcPB4SeNL3sAZPRrMxupJwf9gP2zd9DZEgYacnihWtVHsSxTJsYtVzbYg8LJi7j9H24kc",
  "key3": "smYhMpr8xri9zbWdpRnw2YQq5s8FufxbNQuoMeDGosf3Zzfdu6xtYwGbgQphUjWJPK4BMGHR8BjckAdnNZzFgyH",
  "key4": "4r5SgGCNzqhwEr4KDweHBDsdQho4hFzE4EW7LDEUbF3VMbc6WHGVRypy3g9w11ej8QSFKECR1xtLBpwPuozvH8jv",
  "key5": "5M5nD5YzoJGp6bZZDz3MY2gP8Lv1VXAsvi2CVsYf9qYwTCsdQJTgUCJjw8wE4yv1XHVsynt7mtQcfanW5vA17xLG",
  "key6": "4UQ7RPdCMUm5ijeiMa3aUb5zgzQgJTgQ9LJzZMtd73kih8XmWMi171LCoutPkkEDjrCKkGXFyKuMAp5zqeR9QmWb",
  "key7": "36cQj53tmZ9W2QhNyh9rzAnsuDJmhwsCkorutcHTnXYdaQp1dA9NcTJEH5a1Gjdm42HCjLJGqoJ4Udd7o4QYkvgW",
  "key8": "36VW4vqc2x7DU6yVzWsUprny7FgdSdL8Ttpta6pK1tWHYS5FFNz5tN7qkChJFzwMa9fdY9akZ7D3DjnxHJMkhMus",
  "key9": "5xe35dDWsMuNXt9F7GsmCpaq2HjbZmxtYNu8Ds5tPJZ2zvWJMmbssukB7QqdWQRuYKuFjqNYgWSoAqELhHV51qrW",
  "key10": "55GPpht39sWWJq3ZcoLobzbPE8paX8z4x9U2z4tmDXuL2MWZLbPEMKta9scWhS1Sqx2D5taz23K7yALeAHf2hUMw",
  "key11": "cPCE8bvR79wRZPjXsPaS1R49vSfSpzGu2rAYNaNsRGwjrTqqahtZj9qqcWZLVpPZPVowySpzaLt3riNXYNoigWg",
  "key12": "53vq4DG2x3TxzHNbN9k3kh4BFndFPKuVtpeLeMPEzXvLacD32GzvSffEe6hqTiTM2hPquvnPVDcor9snBN9uqb8m",
  "key13": "3wjSF5yzJvwU7sBJk7kz3m2EVJ92P26towwNMCLx5zTyqytV7Nf68WXw4AgYA2qha54pjA9R3ErtTHYQbpuUyawL",
  "key14": "3p3Mgj2ofaohWy5XmECBhEiytkaC2cqX5yGkdzJMegrEbHFvxvoaN8WvUJUkcpRpCzjS4EjpdgX46oazb7AhSGct",
  "key15": "2VMrq9snc1rtqrL56xnnLQqsUBwVUWmNwe6po6Ub8iKUWbfKDGW4D93V3XhNAar2wESTMYErr2rfmVy7kpjnvXoP",
  "key16": "cXtyqhk8nHrSJ7Tsak3cDBTdg2ZepHeERwhojtEwudfZoVfuwTxJjvmL4dfFsptnbGDBHu93JnmU5GT8d4E7Qqx",
  "key17": "3NDbgy8JnS9zPFwWRnyaYgivY156XRf1ngsVyoKiJNGCimxwFrBrNwjLMHTpCbHHFb3xGuEDVxDWbSQFpkDgJz8M",
  "key18": "5ckp9oDBLJwgiG2RhSKbLpd1iAQkA7RpKbNEEbHk68gvQ1gxXQXEmVMVNnpMm5PZUkPaV4RbMQnHHp4jF23Pn5M1",
  "key19": "3KstP4FtxY4FhJg1okcrxo1Fx9PCYUBGMpqpUpi5dZev5qxgwoKJKsPpbqW5ME27pnAVpet1jwFzZ8SR4Zdrjvox",
  "key20": "4j6zJe8JyBJreLkoQbKReZjiHYziVuZhS1M4JD2PPwMrzz5XcBCrVr7MgMKaZFbggeii95T56t5rCyGvY878BaaA",
  "key21": "52NkZ8xv1Jor3haMCAFKMutk4EceQBnRFCYmi1b8FfzWEkuNmgJJ6BtcBbV2qK4Dc7yFAqitpAvBvcakkspLiJ6d",
  "key22": "38XcW7u5PHHftdQD8MLqGz9SgWze6466ZaCXkjnpxsqrBQV2AhxBFZZrcQYxDu1NXpbhCLjNHjfCrMCydnn6Ex5h",
  "key23": "5gXV9wgVzbzPvzJ9j2VG7cGTrQMq9dUneeMk5cJvAgAYpjSEaFNZ6wvT1jrrb7nYsKrqE9hnsR4WDccjsYVSgoiy",
  "key24": "2ZWKQfqzk74ZzugHsxydfgfe3BeEeSRfmD9sUwxPYYo28Dz86P21Kak8eAn4NG8LKcn6YRjJHq5hC5wqBQXm774r",
  "key25": "3NVXYA6KCS9WCNndjKxRKZRBMUGydWyXcwukYqrFKA5ZenYo6D4tnzwLAgtCF59enXcf7u1swsqe4sMGRxMD4AdA",
  "key26": "2uK6vd7YBiQ6XA4uiDxTxtwy3rpgRn91GKqd5Mwg8JxwGVjMi7kpURbbx1NA6HkX7wnvs95cbNczawyTZ8HsoHqE",
  "key27": "f7hyc24iAVqHgBhY8PvKc7bZDrYZHjYVgwV3aeUfWg14HN94iJe8GGmwzjePtTCmrmr7bnFAFnWGc8m1ADf3r34",
  "key28": "xvVuQTZFy821xbApcQcjY1gJ6tMJBYW8zy425p3TZAXv8eQeQc8ybNECvGrfHUm4mQCvswLVCsA9LAgXWuZyShV",
  "key29": "2fqPzqgMUzNiGFbHtESYSuSFqHzsHB4ibeiE8YzqqwT9bU6KwdAjnQi7iWYLWChMf1sMw5auPTwHYjSrBgpvY1Fp",
  "key30": "3SfrBozjnZ18Mw8nPdvG7XcqaTcuQfUxoFf2GzEF5RzNJ5bpGQUXEwF9remGspTSoSgWHfCLnSjeH2SiQ4hNZZGH",
  "key31": "2L4Zw9FNiCXUaZMDVP9L31tByxuPwJyHsekRmwA1ZhsVJe8bVBAGvMjZPtoRWjm1U4wU7d3BKFKJvWiyXpCWaiEH",
  "key32": "4zuEFvmBs4xHyNgQgbWCpGFzgeWmH9bQKoJZRJ5ArjDhg6KDuBVkjMng8SCnPSau4EweECw8xjwa6jn83iCcavLP"
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
