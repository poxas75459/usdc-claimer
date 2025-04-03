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
    "3STTAq5MgohBGMDsRmwsGQDR1neesMJSooWzC7tY4JnZtp3Y97AsYxMrGKWMheDh6JqPCm4ofwhkMmJNV5KHDrhX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5G8dfiHaSy2qgBMmGEi4pmA2jY5rRvJWh2JM1xQFfqbh6tXzou9AwN9ecYwKxQKTDbZEfJkE1N882yp4QCapcEUa",
  "key1": "4tTxxbLBXPHG6XDH1x4RDyWMgaaK2konhYDfwNwQCXBxcvsmr2kQQRVtZDhisnKFomLPxVtwEZzMBVUE5fGSmZ3a",
  "key2": "3nyqMynoxVsVu5j359BweU2bUzyeHTNhWtBLfgMQe5aQf9zURWjKGsUhDADvRmnf6YNUVUuZLH2xqHER8GvZLhQC",
  "key3": "2hL4iVXd6bHmXQKepyNdfwyZLxpYTd8kkRr9AE3Layrr19mYNEyQY2yKvC69psmH1UnyDP18QcWLVW1NYuk59taG",
  "key4": "5qwkAZq8bofpa3HXy22rZoCy1BRrsqat8Knxez5zLCK3mYa4T7Uwr3GkHaZsqAGvC85ew1kyqmZADqwiu75QgXmE",
  "key5": "gtduq1bVJ7uqdGDzCrCpuXQEcPpktD2eATnFaYaLPUm8KcZ6L3SRmwmvWNjyYeZ7ej4tpWveVxf4T8gjTQp1ED5",
  "key6": "2C6knvUuHzaBUKYBNyM4gM6dmSehxriqdHayV9hcKccw8dxNkwR2kP2XFhQ91m4asNTXGu27BhGheR8DUhfa7nbZ",
  "key7": "58hRoAM7M8PpGGdhSnogTozp2tsvRYNdY9xUZrCmb5iFbTYabUf2SyLK18EAhqnvz5CKgmh2sEWc1ghaxmX9jVcC",
  "key8": "4UwrnQ41rpM7uobawByiA8pxMvcHX1oH72oPgSTEGd9DuzyW8SposGhEdfmUt2oPWnYW2gxjYe3DRKxrPPEBmYsP",
  "key9": "3wGVV8bPgr3mZZLjw2ptt1K2N2RwVwDBG8TFo7GwJppwVZ4qgSsWTMaVr8dnTXevpq3bqM1pMsVVV2qeyEXoz5u8",
  "key10": "2MFYLHenrSuzswqcRpCgrhfL2LtoHXeySk5EhWuyvkx67YbY6nvq1uGSnNeqPvLvjeMa75euaHJjGM8DrydiCYwa",
  "key11": "4DgnKPZuqyAtqEsFSS29cFF2K1dYLzh3tp7KhtcRgGprR9FUtTs9aAhuhuC6dNJTBado3hSpTbk4toMcCq6b7NDB",
  "key12": "FLxwnPVg7fxSRRfairhUfLCgxqUZmqAcedeXd1gm62ZLjhtDh92nEkHoBUzKFNCUWYxdhYWuGbf2Ngt5RLtXWsu",
  "key13": "Ar95X6anhBT6U6fQsoM4AQVdc7J22uq7YgLQfv6n8kZc4F2xS2YcZtwKGtX41MAwrZ38u8MmmfCQRw3u1HnCBbw",
  "key14": "42mFCozLBtx8GzSD5WUmFZuoPtWzn15Hovd7JMuLwBKr2saizuSbQT65H4YiG56LSFi7EPnMRGkbRbJbHVpHrsL8",
  "key15": "5dkuBbTtBi16cfvP9J5YpJUhU5nJAnDGbj8p4dib8eT8QpwhmUN1hnZpbeYjUfNnV99WmpJrgY4joiDswYUsGAFz",
  "key16": "jpLo5bEUBbWAp1QXMAKCbJoUwuYtHUijFyB9DyLVyXLoZfpPS1X7vXsaq8ZRv5b1YQJwaWs3eav8dMGshTFWuYt",
  "key17": "4gMmWjD24bgm3fxi2AvKkrDneXxRHDtnZMJRytDbfThitFzHkgdJLVFso5YSoHvvLSgWmEb7tmSvkozHWHrHKrF3",
  "key18": "DZe8KUuRkK6GqcGzoNpXydxkPFayuyyJeQSZ3mg5wQH4FdhaNHr8yioFww2ExZmfoNzkLbGVqsCicbJ8RaTwa1K",
  "key19": "3ZvqsVAzsKE6233mSbe7f6mGiqrQxPzjvJLFCGwj58QmYuT6uttHVcDtuPwyfYoozrqCgMUEAkUGFQskbt8VJPwR",
  "key20": "4oSL6igXoMeKKmCJMyzxPNWwir163QdJechS3PkWNQemFsyuyUen7jzi7rBx7ZcsUCnwMBhm4siDLowqHxfLB915",
  "key21": "rzfmvv6DfuSdw2uyBSJUTA7DsAkVYjZvFThLjPTzN87G3jXqzhrqXsCAwdETQiy1sG53yBYUfGN8UbH9HjATcrb",
  "key22": "5ZnYGx8wmj4zRTewdmdwQwrtpAsbktbyoSJiyMrNEt8gdoV3A9BscYGLvrjrEtDvuLpyhSkhdbdd575o8DjEjEa2",
  "key23": "5qiR44e8uagR8agd6pke25QuuxbaGcMd3mKLZVTPoj5zoVKZkBR27bSJja14Nu9cMuWWmf4B1e9i8isD6Ss5Li8t",
  "key24": "2YMiv3tCzRDXpRqVArVX7HhizvuNhDBenjiXKH7mXXRoSQnLx56cmbEFJnWDzSuHE3TxKKF5SJWbPh9G7BvnBxUu",
  "key25": "4c1cnr21PYxXiQXceNEFbtNUDK3a6sMxRN7hdqau2TemXL9Fe8xyN2JsS7qVvwc3bKo3EqpsojmCLGaaJyqTCDRv",
  "key26": "5oe9DGKKi4db2iBnUg9ArQKhX1jiBKvukriHTL7N4v68gzfdGXXU586DYN14FzVKCvbvGkn15MsK3bvCvEaLyfq",
  "key27": "4DhWfpRgTeiiDMj83wxoTBPhjcRkC3q93qrcTwjieNLJZfTK1vvygwh6W4WyWajjbdaZKKDKvrb8QD5m9iFDdqFj",
  "key28": "LqWwaGFE8k7uWa2TGGGnNVhsfR8RPLd9rZhVtHSW5bfR4vwcviRhykc2V9TqR7CYgCCLgrds55CRvbSo5jjSGnd",
  "key29": "5h8Bccyj7iuVaJS14ZPDerrChKnrw81e1XHQYgM3o29WMjV3xMj4GCzKxQZCRNHoib5n8PTxznNoVgiTGVfJVZV",
  "key30": "c7gBiqBGuu2HobsW37svVvZxEgYyyCX1snnmpfL3oYUJv6MQTa3DBqvPD2RcqMaWfU362WsUizP5C7eCMb52TZv",
  "key31": "3yqnFb9mmwAAbjEot4kveLkZ7LsE9dGQUJemRug93CCD3Z3bnn8B6D4HPq3KCmGrUoE3xctTqgidCnHbBou4Y9dX",
  "key32": "58TjmUWt4NNdW15fPKPBNjeEFmUUveTWu8mYokSRy8UbDqgWSaZ9wAoianHyj3cTCDcXphReNEd769b63iri1hLg",
  "key33": "4ZW1599YMvexmkNYB8LkN1AcnceJnVMHvWYP6r5RsiZjsJUeK6xtM3iHYPgZyvsMU1XizbEbsmDfmZSKKtavthkw",
  "key34": "2SsLSrXzaLaKvdqx1Ypj4MXHVXb5ZxsGjUfa1LVc8bRbPo95W6XpHdnL3mDpGCKxgTUSnTbnu8xLASEwoktZxheM",
  "key35": "tkLJmAbZ11Z1sntm7FR7dWVPT1tw2nbJrq6MbBvguPke6jqXAACkGRPnUq1u1m4Bp3s5rioNVHT65fBLYXvXEYt"
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
