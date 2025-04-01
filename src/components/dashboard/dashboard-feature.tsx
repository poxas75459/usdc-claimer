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
    "2nrrRhZaNDJ6zAVEAgucytKXqT1imSiyryYvLqLiri9bUWVUPqQNDbfJ9PZfZbr2GgEMGB9B3vzhonVg5LCfojLf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5C9WjeAPiD61qM8jTm4Ks6PyNh9qG7nT5Av6SPLjkWVhCzo1kZgB2td95KXmQBCyPDLHCqP6jo6anyXgX5tPJYgC",
  "key1": "3ZbqVdrQu2GgrwuZNmkDoYcQR8L7RPkEi5ohzQ6zWiYxq7eyzGYJAwfaqr4NvUHCcg2cjtpgTMm22iZrHeuEJNkc",
  "key2": "4Psa3UkUKerq8nWrR53bp1jyF2MPDVGxzLgKXUZYeJBZqb55Pu7U5MkTzGjckSfYgzMP1zrfefaDp7Ge9Gi9Ughe",
  "key3": "2rKXpX9fQpZGkrDUDuYV98iPjaktKQsBvENJN4piSj59dEucEnqV1yZ8G76zZkJU8S3kfzzPC1gshmotMfwHjsPU",
  "key4": "394Ebx5LHD3eFXSvqtm1u8mFxkQY5Ad3LUQwcZGBP1ZwA7QcHKFGBeDGttf4frVsaFq9fHB4qAfGirqWsXZTHKJg",
  "key5": "3N9wcLHyK2qjfJWrNSa3e4GSmkAaB2Txy2a71QW9VJfX9JKw4qRUQ9cH1vawbE5xg6RZfB1s3dnbS1hBzXkkTQWt",
  "key6": "3PJaBbxEVV1GgDA5ye3xjT2KgNU4i7ApzQJx1pMEWH65kyTJB8GrJ9hwYdbTAMobcBxZ3RQnrt1YrM6xjacEoHVK",
  "key7": "hmfv1KyRMGaentTkaYj4ehvcUTRXLYjCCWgR1rPrabYfUwTpiw2k5MK4zNfv4W7LEf8FVqEP8PhrobT1ckxDAUG",
  "key8": "34qCP9WtH1KUNrpZuAeow1Hk1Z9oxMeKU43ubzm3EY6H3iD6eSHWpcr5Est7nEffCYS7vZXPCDb4RengtkgLHsCT",
  "key9": "5xSgoA4QMUaFSvwP9o2tMkeE5z1vsn7YSCVWoBp6y3BExwahrrjeeAV2rn7yz93NvWReBU1KrPEoKf3DwpkwKgUF",
  "key10": "PSJRvWaTfYpdfTzHtLXA5XphjgnEvus8jWYXbCDWfgUgYZwWhkTncPYJhKWaZsvd8AQz6S3P93aAcGsNG5Chv6Z",
  "key11": "3EmsfXEjdBZEoph1rChheHxEGw4MVnjVQSGfAXsQZCnE6ZFpvRuaGnARbY5fetkfDzxRxqYBfqM5C13mw3Gu79sH",
  "key12": "AJvDcSJAm3BrXjYX3DJG35Te1VQJaUjQ28oARg1B4zFBcohbPHbPWaCpKCJxJQY8bBp7tUe7FRpD8Akt2sEPoiX",
  "key13": "2UeCMXbYmAKbmat82hXYDmY8LBqno9pxb2CVFA4PKh1hwiLmrrmoKHYfrwiunkLiANMPfhf5GXk6tCatKAdgzCyR",
  "key14": "ebhMdU6y9Jgy9w8whcAs13EmFhRQQxcgap211RNCUa5L4teqhmHSM6nPSZwCR1VMtKtPtMao6qVe7sVJV2DakzV",
  "key15": "wYYkSQEEnjcH8TiL3rRiQSTMwHnW7njotK5v9B17FRp4n476SCFDYqQ877iun78gcXVoBXMaifjSCKyQv3EEZBf",
  "key16": "7r9ZhFyYBqQrsNPukRRSKAQ6yvyFPDDbjN9t5f8er3pzDMsM7kfC1p77TP7zppQQZjcArk7BN1ZNrAfNNyzCSKw",
  "key17": "3PerRKcxAPdLdWhYcUjD4w2JKohdfkxq484xzV6mNXF4By5RNCiWNZhuPLuNMs8Ltt2Dsv8JG9K114Jqdjp9Cy67",
  "key18": "3SbjDoif5PufZFBvjs6VBhFeXTBJoGT9b5nNdtt28WR7eKd8JMKe81X7SN2NyewUNm137xWHdZdm9kxBps8gEgHD",
  "key19": "2kXToe5EuNS2TEpDgL3kkVb34B6bxSwuSuUa6rbk9hxUZGSrNxSBAsSuLHn6EGaHe3w2UonoZYvGFWUFMx9g9JdV",
  "key20": "NyMeQbpPHr9aAEaBEjEgfp6E4UevQLb8YCcHS6wPzhzqv6pcX7kkdXgMMU18ac7HVfxMycNy3q7fWA8KxegGh9u",
  "key21": "5eAPhwnNok2QLgTXQXqTdmSUs1Fg3a8cRuK7e5ywYqryUyF2Fvcjo7us5bxZs2JpLHqU3TtSyTAipsXcixCPScfY",
  "key22": "2jFo6jbquxcdYptbYVmHqtkheW5eJGZwc7R3GpRfnQY9uSsZGuLqHyjHyBp6fsjNNFq6G7D7XDm5vuCKmxc4PYiK",
  "key23": "5ZyULKTNy9UxRUh4whqfbgktLo3xhVnDThaGFTXastbLXNKv1sLgBXth4AzusaFiYRpotgJktPPRmVa8tKjPTViK",
  "key24": "Uy29nDTHniP4dpZYvbjmD5bg2bAxbDSXfPPTsGmtQkMPej7PuG6Yf85i37A5k2zUoZskRRMhuPvL5CaTVw1bBW2",
  "key25": "3yZESP5EhGAjDqc1VNLnaJVoDxvye8rEPCtQx8DpQRdth4EtNYCrXdQQ1nx797puPXHhWJqDmGj9FjzwKX6rcAWg",
  "key26": "5iekhSsMb2uoYrdzbo62j8MPeQ1bCWpZHg2cpuD5HaTAZ7cFesUX3dzybnNUTu8da96A69Fc5DKxMksdcu9oRB2Z",
  "key27": "5MwKadACUX2CAcXbgkdoMNJrHchDWZZ767x8i3SocnJHhTvw45rXtSUDS21Wk2zT8mpWNvUkoztyTDKnP7DzXo24",
  "key28": "G9SDU2j4R2uFySpto9jEk8eK33Ni7ecR29a3kVdjVv8c3xGQjkELtgWVg1t2WMm9SsbqxTZyTruNwtiAWPRZKYd",
  "key29": "3ZYKt6f2E2xZQENBmH1xBHJ6pow9QykEw7qxcSPZcvzj9FS61nw62XSr9BFZeMBhCH13D8iTEYM4UhM1hxFejcS6",
  "key30": "mz1qvNdvMRqPr1zXWmyoJM4EP94sen5GsAwZ784NEMtvNpaWsEwhEiEBkpFe2mfp9cfXANF12Uq1hzgb6moFWmK",
  "key31": "4yFetLFcXtwwpLo9QAwY1CxLr7V4xudp9RkXt1sNeRZEYSZzmBUXE1nhvy6Zpmh731eqbVvvdeqr8g7MRzdpP3bc",
  "key32": "4xdGm4T91JsrfKvDWNJiXS7kjbrNNqMwrp4BvdP4kkdJk4vUpMbBXjjJqAbC5T7Ts2chxJMudpY4LNyDvrRFjHYz",
  "key33": "4K96L5Vev5VXNf9iGz9gAgSQNJP5yVQZURFTGvJXEgM3VDd9pW4Fd5xqNXjXW6N4wYLe4ysf8E46YHpUCcRUEfs3",
  "key34": "2HXSqAr8TV3UfQF8sz8By3eNYmWszTBi4EqoSHoqNTY4zoo1LRcJyxKdVb7HoxBDSjm6kUsSDgA3NSPBvbCtpgDL",
  "key35": "3pZqEijEBN6NbMJ2eK97LhMpP7gEZgVunXVtyeWELutQ9ufikvSyzzcUm7xFdKKKWHp1D2xHQq5dzUCUrHoYekaz",
  "key36": "4b8S44SABWhEsg1Pvc6MnebXNM2xEfCYU6bnGuYjpDuHP4kZLCAQS91epVD75AyWkkTKsmjWg6MwbV8K9tp2AEEJ",
  "key37": "4xzcQiEB6VUyz3qwp7M6YrNqSw3jyN4BHthGFqdfkjZyWtAQw9N1tmaYuEeyoLruGVNCnXm5QtCsintVAVgTS1jh",
  "key38": "2XsRymPud2nc27y9t1FJZNd8qMDuMPUThdW9RgakRXqCsHtSDfaTGrmmQAMLmZDwAUqBc7sx94fZtDHXZbnK6qbb",
  "key39": "3PxjnkRrbmfWw7BmTLRPCVEnqBNvJxTpsJu4QkKwbG4SQqmgM8Wt5EEmsbNY1QftwNTfEvDPJVrP2HwMKyQVGAqe",
  "key40": "4cZdoE69LKD5tUpmmyPUMYBGZR3KjHe82MdhGwsQ5A2kyMWXuW9n4LnZS8kdeAJErxJCfa69gu1b4TRw7J7TRWCv",
  "key41": "4W9xg9uk6fhXCQdY9pYr1eeAFJUuiYc6rDe3UZ3YbJXGejmLR4nqpFEQVAyZbf6F2TiGDJjCaaQ1tKwvp1hrjoCo"
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
