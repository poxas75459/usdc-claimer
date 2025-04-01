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
    "4dzpifZdRAoqefhaxuNKyLkMtGE74K4wTFnwaf7YLSFVfrhQewXinmQSbB8wvvDb7dpJwU3BWNydmGbFpjsxT2jz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2UNPZGwhbj15eTFL14N314c4U4dumT2hZJQwCFbgDaPFmSTC2DXjP1Qqsso1XcAo3tMf68ijqG7KNsxXCU9uyBUo",
  "key1": "3qiCqAGWasKS1SCwUrjnZmCHBchumJKbbFu9VY4EJQ9H3sd2utLm4YQTYy5oaVKWGxAeozYaT5YyDvC8R99iTcMo",
  "key2": "5f646Rkte8sP9cpMt5miAYAJa4kbWqhfH2cpjugwuRVxYUrDU1zNZAwYznwmTyCc4grDeAg4rjcYtQYXMhcyB9er",
  "key3": "4JYQ8VpNdkhLpRkrPHQDim7x4dpsDF9FanbajU45otD13wuhGqW3WhsU2sxGXw1iVHMVDzvRQhMvsYYsR5wTRPT4",
  "key4": "2RMJFL4CFv8e73adNWvFkGX3DqAjeDSGkC5G98tE2bJKcaVw4L7Wwf4KnUfbYWYgK9dd7UKZUAnZSTEf8PuBspvd",
  "key5": "5gcaFhYSsbncQVjTc3RVjaNKsnYEFxQtKPNintfGeAh6sRSNXzWQPJePNVdraRPaPsqcUffHe8zz9kzWyYMNphsC",
  "key6": "65pUPGXsRWgTEQ4YLXzDGWxYYtHgKNTWpFAuBhXSw5i8pnfT9pJMtf7q8m92EJj9FnUZPgS9w4gingjCsGaP1p6V",
  "key7": "mn6w46puozUWPccgzrvTr4JNAxZY8srzj1EfCbQVzNp63jHe7NyKddNDkhJEKr7JkfHwMd8cz8KiqcxbptgXKLa",
  "key8": "3UjywN47mUmDVC3HEqYwWjb4eXg8z3hR1783xnuPaebkhgfPwfYgNgTxCyUBfxvF56ayD9GYqK2YDB7xMuFwuarz",
  "key9": "5EvAA5rz1M9gMWBsRauG4r1VTtAgy2Qwy3ZRoamv8QxNKgz9wj6yshatkwrQAiGYExJN9unRTsP3CboDQUQ7CpNx",
  "key10": "49uqHvG28gjbjD69gB5yN6KmNTXRjzdLk6wonp1CzvxjzhcwcMWtbmxkHbTDEyaxxrKqbYWdyg7QYUYisNjNqtDn",
  "key11": "4DPNwartAVqv7Mt6WrVmEwSr9xhMfASFX6K1EYrzU8UWUEBXXcwfZWSqKr5qbfRKCbvTm4KRGLs5Hr3HzBnFG7t2",
  "key12": "2B1u3Zb1s6vwZ8Lvv7jqMYRDZ9utMJvbVU11kM7aQhzvdFLaKVPo7PiCXQZM64381cajVTo8ZRA4pFKhGRrwzYFZ",
  "key13": "E9gmu857wzjcN5ASNEdxcHKhgtkhLCkZLQQpghPfNLpwdiuiRU7NWdk3rVvoSWdvaP841Yw7jz5TPfquSjP3cUc",
  "key14": "52eWfmE4B49VoAr1Wt31FZQ9PRFnFWnw6bWG9WgyPdfWxvPw725tubAWVKhFF2ZrQtZKLcd9hxu9geaFY74XEp2Y",
  "key15": "4MwBBGEuE7bYyzbVj9dxvwKvxfaQZ42gUvF39SnEQsiLj8Ai83ULKpmb1LTJtHqRPquqw5dLbP92WwiidQNhCH6x",
  "key16": "2Sy99LzKtx6bUDF2foVRYse4omFSYPzuxxx6EhqSTPvJp8KsaYhjaXFNJSXKmVSf5ebaJQ5M3s2GEWqGBUpnDdhB",
  "key17": "2WLsC4X7VZvFxTtYAMRPbVK9SmojA72rNp6Tmem43261sXWVKejcLdSpdz5hj62VyFvyabiDcF8SDmjm1T8GT2zE",
  "key18": "3BWkzGAReDmjzYQsawNgSEeuN8xDE4jW6XhLEAbbTCSQMbAUkU3xd2M8ULkN6tVN8xPNh2s89xtycvAfZhqCpRne",
  "key19": "4iRMDQfkWCgjJNCs7ZymN72im5w5HBNZhJJhgUSv4tW9e9fqJd4PRUSVs99ikTDTxjoaePZpeo5GQSj2itq7emBD",
  "key20": "3TQaedQZRN7uWdR17ygcyG9wCww6q2vyhy5kHpWLAeD7znPH4dEgmp36uTAx8dhsz8VEwh6GbWnzzWuf2SAw3LEp",
  "key21": "b5qrb9m2oANfNZ7bx3vyuN27azQr4jw3ZRm66HeZHhyobtjLxvviVJg5TdqBK2hy3tv192pNrdzyHyyhxf9ewgM",
  "key22": "5ttAfkB7ZfZj2e2NcHJAbwQszaFnEajtRYcjBCPmxjSt2JHHpPypdr94AYZnj4yWaKqvyut6ZyMWKgjPVbxAn6dx",
  "key23": "3gZuH7vtYnDhMJyHDBCfxB2ZCdq2dJXZ2k5fU5z1YwbMhxyJLw7R9f6YuptGoUH2UugYGarsL6wHCe3pPji5WZam",
  "key24": "udobZ8Uzido3CQ2W3W4agJ3cTMXa5D7moWthHdophyHHPEFKNyL3gyPoiafDYwBThcMUyaSsnWxgcBsJDE82kBc",
  "key25": "3BXem7YmbkNLHm286Aq4doQfyzP1Z21hhCwExD1BXNmsBWHkj5btC1ZUtfviTWBSU5ZV7GDAEaQjdZggbHGNydvb",
  "key26": "4reHF2Q7pXBjfmGM6Ay3x4AMdToJDUdAfhkBLhQuRUncM17Z2bFg2k3CDMDRyi7huddmuEPdg47wUKB21nqMeuUX",
  "key27": "4qdBYpQRwjRXj2o52Vj8cNKvB4GvyXB4rNT2hxQqgN51FRnVoVEve8h1faw5eKS2jywkaKzbsgrm5ZoNaaj1oDPa",
  "key28": "5SWPYrJ6uwWNVmWdXEGFPYg6t76GDRBi3CQeyAEuS5mD3UD4YoAWaWQLJAS4qHidxjxeQ2wrYXjMJDhy6aF1Sr4o",
  "key29": "k8EFsuKKTX7HxADfRgFZdYAALKX2zFzx74Gh1BbAPBZMtDpUat6npeA3tdVkMFWvHJvxQDBz2nG7qstxS1WBw5a",
  "key30": "4SGsxbyifvMySm5VmHrxcw1nNVXNiUu7c8HMt1J91Bb2b8fWCW5HVyxAoeGMVhtkcpeZqiXJbpbxLfsa6k4DZ1cT",
  "key31": "5xjrnLPrVspjHkHMcFwtPHcWQ6wtfEpAs81Zp4VsmBpfNVyrAWtNumDf9ygAW66rPvpRequ6iTWp47iLMP8dgKvW",
  "key32": "3MkkxHUxTXuiPXmSFQKqqXNA4itvh9ek6XmJHe2QxPBS4GC3yQKbe4fDYvRFxCULRgNpWfDU5breVg2KzquLy369",
  "key33": "2roKEQHT9ENbBYxnCoABwDoBGB6diBZ8QzuSQR5GpDHZ3ZCUrMSrC6Whckkdi1JQwZYToy5Nc1Vy5NBpHH9CUZsW",
  "key34": "uaAfd7TELZHTt3CJS6rRtSL59J767HMor5EJgf7HuY9kVEjBmC49AbXm7aXeyrXSxyhZZHNzXcPK2DY3k8v8twW",
  "key35": "5Zy4zX8B1jpAsy8atTNZmDZgnezS8pgwusjwntQbhHiGjquNssr4QmTA6UVwTE6NYndBpH42367Cb3Gud8ccBHic"
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
