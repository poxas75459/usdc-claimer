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
    "5YXHiNTpv8BjwziXmBXvxjVY1Q5qVAJmmHTaLKW6FxdtqeipRxjdB5fU5rM4hAGSS7fobS5r3A8qsDCAsGmCpgwL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5VG3pZRiMCQX4j7evmyDS48izLkCrPZ8PCgeM6ebcK9yzzqSYiB7T3PSWrjUzfZ2VpMKVSNnwQbvec6BMWafuCpc",
  "key1": "tmN4PFuga8Z6mrXhafJ5cBxZ67Dfyz6vMueExjspsuV2U31Tqtw9B1Q8bHKiifixLb2eKXa4gGwoMTa36gz5u8h",
  "key2": "3zY4p9KCm7NUoDx8gQ9bjbWQQs7QzoW9Cf1qSTr7eSfRET1TYq3y4wBpqvhrvfofzeNU3ZVNQdEbszrMdUTtRP7b",
  "key3": "2fzJen8HpBeYUBqreKMhqvxfYvPdXHeu8cnyhVuKNdiVWjAyg82C6UwPsAx6B6Gyv5k9HLLFZTWnXLk9UnEcBNMc",
  "key4": "4NFSt1HY9LeKYg8q1CQinpM4VQXFkxKCus6HQJCcvxKbq9Eaasb6gGYUMqCgymeFfZzFFBRkCkk6SRQYuqbJKBRa",
  "key5": "3F8NZ6xFx7XUUxZSiwhvgKkFDTiLa9y2LDHDrdzzX5hVTh5mXe4Y6H4HNWBbsLCAWFqVCTfN6kAbrP2ksn7uCtJY",
  "key6": "4FhZDad74v4qqqAUoPgHPsyN5PHBjuzRJa3KC18xHBpXtBgvFx5EHKWjmZmdo82HMFV7xG4iXA98T4BHBDwhr2Zh",
  "key7": "xwNvUis3byY7DfPgNdsPHcu4UrV2DtRn4cNCcAioh86vnKJ9Ur5HBEeDBGzH6DRpEoy89EeHK9hwb1WxDAoE7PU",
  "key8": "49NzqGfFjKHHLuA2ojZHxwHQZmgCB4UKqjbppK25JKxGzzde3Vm8UMb12U2syJCeFTMa6GrtSud7Ds5bp9NGDogh",
  "key9": "24nt8QroTE6NywLHMhMGe2vsRAdKM67Qc6Wg1Hah4QxRoUXbp9YuHmGgkfomq5qpR7RuwBNQGoXPs7sm2TXf1QFV",
  "key10": "xh4vBDghc5PvuQNQjm4ismKQpxQoFN4XAczjw42Hxd2BSgPLUXhMpLBbzBGysnBHbY2FD3jM3xfuCwbKsckshAu",
  "key11": "3EpYAy9Cs72bZj7j8ADDKD95wbL28FQgiADRdGckLvZzkFPwdMnDohPS23QBGqtBhXMjrxWVZUir73HTJQewHrF3",
  "key12": "57bSUYLaMqpe2f4rmGKfkcYMiScaVtLNaxGXiarGCqoCgvkiQT7jCzSnDYntyrgmddnrdDNrvmRUPjvTV1fprxm2",
  "key13": "5L4MFxCHqSaHctZWseVEYKueH5GbiVfedMFeqf75pD6SyoEcBiQnc457xxWdxcpHan3mY1EnYEyHZGENLZEkvZ3X",
  "key14": "4E4kEsVE1d3HdPg9vjUC5zYK4B1gBXjkhK1VBa1vwi7i8tX8qMkFqyHvVRisuEYnGWFXc65isakp4ua8jurG4LzB",
  "key15": "125puGtCT6k7jGQ2wm9xGA2wGfkwnWvh4YGrv2ecBM5cMSEsH2hh7jnsSFPwLeDkT8hTKrkaSJa4mxxiwkAVPUte",
  "key16": "2v4wSwb2dxrM3eeXKVaqPwgCbSFgg3RVv2LJourNWvfjJJDb98iUsTnWRWkz757Job3oQnevHq1SfZLgzvctEdUB",
  "key17": "2RyXAk8kwxFFXQ6fQEbtcLSUfAz4e3BryH7bSBhPdNnPcAhYVh5ZKF5Vij73CE35k6P4RnVBNUgc1fp3mAXLVHMb",
  "key18": "mFHUU93rVcjjjmPts2R3ANQQLE88bc6VVUsmp3XwSr64Z7VFpLmE7qhNko4MQ2YKTqcJ1bE3ZdwxsM8No4XsQ4u",
  "key19": "2uJG6gsPmSi3txKq4jToqNMvniVxhLsrQF85TwtSbYA4v3RYQ5vcq6VAnCzV63u1rEFzQhqXbfsEsQqSbgvGdyYb",
  "key20": "2hCw6tMLdvQD8tmNUV74b96suRyExQNstFKR1oTmXr2GdehdHZcyobjpnCSPinGBFADy5WeERbUJhJ5V6gzFVQ8U",
  "key21": "2Pgmf4FkdfAVHJTRscZxyES2LVuCT4544eRCsQQQNi5LzfYohxGBHWt6oA9Y2vyUy8sVsx5d6GUcT5w5Bjnr1XX6",
  "key22": "57RyzyAjwEYdm2Q7DkFUGyU1Bae6xSzBSCMnxFDFgxNt2ZcEAsWArH2m5u5nrM9wspkqj1iFhmcnzXVrZ4N33EBp",
  "key23": "XfBqUQFShStcFYFhPs2zQZAHnoZWMVPghmnsaS9k4NQkoN1wui895SoaoV9n5NAobfhdPm8MifJVgiNQhPfUrkz",
  "key24": "8HwJSodPYUvRE9QqmobqgNYs9Vk65GjEXNtBrrDBZN3JHTwqBapFLjTSTWNU6CAQAnSeGoBsnk7GyP1JoKpfjbf",
  "key25": "47EuDgJq6yeyRVQUpYCY43xRBCeKk8zvJCoJd3wVR2M8cDdLTAb5o4xjNemwkN8UXrRGLVXPjwmdxnCzMQSxYaY4",
  "key26": "3WoMfDbP7sTqYssXjz157SfGHKanZFgDs8Lc8Lkmm6xLiTtE8Vk1BZ1ZPYEVMtVRjECajEBhmeYpSjiUzV9e3pkP",
  "key27": "32ye4n6LYEXNcXM8Y2z6XghXBvR39dqwYgq2ngdcDVMWVYpvioHHcSjPeKufXMZfNuLTzHyQcfk2XM1fKTLmsgrE",
  "key28": "23WX6NcWJsGdBXziKQQNpwLqrTcDBP6oqEyu6sKYsddYXnAYa4WR5eEkftBmPdUKFxrybB7bjHQjBbXWWBxQzfYx",
  "key29": "2CrgSgi9RUYKr48ashX4KTiTWc8fU1E4pJhEMF1mMaATKRaG2unu2z6xM5Abig2s95LYzLMLzmf4PGSAYfHMfKBA",
  "key30": "3h87YhFuUNiVX2T4mDnPzJ5mBzFJTEFSzqoDAcvNswNsivVM2TrGm8xft38a6pdh8hb8YAHvJySeiov4WfQZFN5J",
  "key31": "5GaF8wB81FQUgBrsgscsvvzh3pgk4Yc4w7yTwWHhGeTDEPAqgDTj4kWEpJxQGUqJTShBMRNuchUKx5QYwjvHbtY6",
  "key32": "4wfbzy7yZGiN4B6JxXwXpBshDY7zDhkQQ8pfx8Wz5E4uGm2s22gtCsrshRAKDYJmDkVY7TCdFbtrQfY6cUoHFj8o",
  "key33": "2Ya3hxyaohhZtt7U7ttFgkPCHaJu4Wwrx1zoFhsT9raMNJhGTNKzfoWWqmJhqAHar7rreP5tLU6bc1fiyPzbYQxK",
  "key34": "2jebRo3gQr87SckxTrgdfUMW6BrixRKqWAp1GxqDrkZoZfrpF95qYB5UAo8kdy91X1UTyAVezgeL3hPutywVK4vF"
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
