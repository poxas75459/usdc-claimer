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
    "4XDnaALj6oWWRRRQUye349hv1Xuz4dQLamCqpU8rpFVjRxJFUq2BjT9Ry6PCNxWU5Vxq1QP66XrN5WkZVk6pKv1t"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5aLZ22JTDopj18YTgwEeQ8mueArdEkWhgDK5KUuPKEMqDz91XWhPpAjke4vmPfZLdYddfaXVmBPKbeBhdUXEAGDP",
  "key1": "58KF2qWXa3fsPQApH5yRUGbD4CAPe92epnMqA966wNh57uVJCEAgXXreykL4UvffyvtSVYH6PiEXRACmiSyqUonQ",
  "key2": "5UxLC57y5ez9cCFLg6dbTrEGCnFaBjqhqyUofaG3dKrtN9sVqcyeTfUsvKVgdk9ytsYBNmhEGTDw2RRyT2EY92zr",
  "key3": "qinXfkhcGfMuGPSyyYyVuDRY1Fanirw5FwyV3jxsiF26rVT1o1yczC8MitkBusF3mRFwopASqsJ4vMqZu3t2v8M",
  "key4": "59D11eKNaCNuM5pCDKB5pcxsiHhJkf3Ff3S2MyfwnVecigfZTUMeXddVxZWP7PB7Rdw4E1EQNLpdAUxQiCYUHbyx",
  "key5": "2Pnht14uMM6ZKG9PGdEYjF6U6gYG2F6bHKv61e4YwLqpEZCxqxaFr6UjPevuSy1zBb5a9STb5kF7KJHeAQk8y8CV",
  "key6": "3FWY5SJUMcXpcScnAZguYr5tZ5VXiAnWP6aTwaHx3ucmWe2TYRZHUcUQ3pQfBfxVFX8rYSpaMBiWq1oVoxUdNX15",
  "key7": "6K5XLNMynmuy5j9pPd5rVKRei1sHZNCrBhP7EFqR9t1VnqHP9xxPN1qP4moCXa7gbSSXvqcFmc82DgBvDVMQxMN",
  "key8": "smZ43akTGD1D2pBckixX1YzQ61XvkPayaUowWj4quhyUHwZ1FBr9pLKzEqK47PWKpj41rsNttBwXECsxd3JvCi8",
  "key9": "4ZzL1koscvk9aSHK6VXemkxZ9G1kWjTgULt1Aw8C5br7p9xbwWxCdxrRbwaJQmBPGFKGk5L4bPyWGoncJymYmLCr",
  "key10": "3h6Y9dbk1zjNqkBVYhZxvnf8k2RJieZzRBAUY4cfBinNiPTUu8YEPRhqGCZkExQyBt4ZBFs5Uz6F1iTREosfqkhW",
  "key11": "AP8U72iGFiAocNroessWEmrzxuvpWQ8z4f68kLuixBCK5kJPUTJZ7th5LWKVaDqtZwrgADTuUUaizBq361rcFPB",
  "key12": "3nB47BpfcnMgSYp9ppJMK2DywfqhEa3HPj1jTMEeRqtjWhDimMxfmS1GS23Bcu2uxsyw1R8yQFEJ1k6QK3of3VY4",
  "key13": "58PhveURzXm5zSQXD1rQNZbSY7ET99QxafpA9Gj5bBbii5B2YgzQtcgnWpzSe9Fu7nasvcoPhsM6rtDh9xxUtxMF",
  "key14": "63AFsb8B6puJn1zHKWSCNwq7DMTt5P9pQGfv1SfWWWxf4nVAqSgF6Lb4xXVQACM562Es5MuKmhQHQptq4Wmfkn87",
  "key15": "2tgepf98N5naYfQWZQhz47SM61fGkj29uo3tsyMVF56Po7F1gQiKipEnMqM5GQf8ErqzJgNp5g32AGZVRhCNtLFt",
  "key16": "MK5mmXbSdk7wbevyskwXAQJSjwz8yxfcihqtWrADDhs7mv9gESJ8cup7kgdDCnYhnQbjE8QpRVEf3GJU5zRf21A",
  "key17": "2nw4fDdaqbs9vGB858H5JB1cBq9aKAncJkUcvYUz8Pt3izVNhQhvdueW6k8biZevtbBevUtkv8r6KnYh1f4P2GFR",
  "key18": "3xsVCsEJH7RUbJKMJdXZPZ9wWspGGHyUJvXJVgpPa8wQdr7Q2cxkYceveAKbGbnNR3Lu3GbhcTx3g1y2Zj94dpA7",
  "key19": "3q7noijbKjdN7PNGjs6UUPuLE4ZEz2y8isMyvpsskA6yJMzmmdz7opwNAKJ86ke4KvbcG8TkDpLJfKat13Bte4yv",
  "key20": "2YpuFt3ScdXUE7rVw1UZ2eWbNW7NWnkCfDJ8RQsNCyWYZkxL2UCDkYGThTPb4MqXYdGK9yAWSdAm3LTB8YBQokDc",
  "key21": "2yQGTiiUyzM2ZwaDtRx2JakVPaurHwjpMn8r7Qqf7y1VurvfVL5J6vmdSsaG1pGiK8rcuFEd1mVM5AniorJYtRn8",
  "key22": "pzRH1sKWGp7c7DED7YDJHumPEoiqEp7gTd273qhW2ZLYohL8JdN7zJ1kiHTBiQbLtTN1kGgFzkFXKcNTSZUsPH8",
  "key23": "SBpM21nbvaCBQZn54g2Q64npzrN42gthExAZpYtPREGZEa5Gx7qpcxCF7hxHfPpinAqfBUgMF4ZTCzMhrzhWkEe",
  "key24": "K9YfQ92f93mUaqaNJZJRYjDLhMZGeZzoEMVVJ4LtRUu8LUEM7G9aw2SqBpD4tNoevTGkBWVRPjsrw9JE31p1Mo9"
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
