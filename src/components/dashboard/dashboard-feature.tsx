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
    "4ts7iY39TAovR7SHbT823T3ckL9g1YVB6dbQcxWeqfywEJz4ZcYUdZRBCEYZThvHobYhZL4hKhYdXrbYQ9cx3uZ2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ATMBaZB42SdPvtDX2abkhY4NU8VTsebxg8ziMnS7cRgAP93zvgZVkDvFueE8EqajGTYP6tJa7c2yk5wy8ViSymQ",
  "key1": "2vyYszmrav8nesdLaQEjRoE71GYmtuMdk1yA7AFjTDfT2DkkHpWbJkt2ubU3RUNf1gX3usJxQ5u1uySuRG2Trj4c",
  "key2": "4U29jbAmW4H6T4CtQwD2AoLMGKKrWVB7FTRRAMuZTkRZznKQ7UvvTqAohc41yrc4UHUSs6tGpvushXTF7R8jjJpj",
  "key3": "43nPes9NHUinFpv8Nrhs7PqRxNqnJHkRxPpaEjNXByzpPmpk8porAVmBfHRfjW4eLG3y746i6GVokQWM4Q8Yd1qE",
  "key4": "31cVbTiWtJJKbe9BMkYWCHoBj5VFGuVdnAsxgP7f1xrsqZdQ27u6C3vdQ2Y8Wt2mTZD3SniRtDBMoEaZvrcZ62g9",
  "key5": "5hPz637tVpq5HyV64MXkG3eeEDehXQUC5v4tzSxv9HwKyhD97Df4a9rTvuCRbyWYASiCGyH6e3KJ8tNDgPDoEVSs",
  "key6": "5EhqpfkP99pz1k2HuQsdzFotxdW8L59dMVKXMDvAoQqWpYXzZTVqCtRQvU4DMtyfhYUcm4v5UxfaXCK4Q4GKZVR",
  "key7": "2r7yyHaowKzNNqAZx57L73BCVZsL5oJ54eiXXBjEKHGfobpDAH1aaMLTGY6JaSsBxzb3eyey8PhRzpbcvFRpfYpR",
  "key8": "2hF49752Z2aFo3ABpzX2sy5FGjf3DfZR8B4p2C5ZHtGk1xPG6U8h8vhbYww5ueLyk8EmS24Rz1Ya93Gsca2AvBQM",
  "key9": "5dAmhB3994xXbMHJ3XP3nr13gVA8CBqvmZmfgFRJLjfFRjs7XRvEQSEvjymWSGEzvZVwwmfx75vGXz9fBUFyd3z5",
  "key10": "3viGornwjhxRC8fqzVwj5NKgjLsUPjaoykUKNBz61369uGVBgDr5yk1ENEw4sr1owbb1CTSKbyPYPxy9NPYEjSxN",
  "key11": "4PA5oZDCwiugq1ed7N67xkrJ6LyPSXGRgQjWoSVBFZSQbXaMLGNrRGTkusZyeSQf2Ks8T7WV1hXMVrmBu4tMhgs4",
  "key12": "3sHx8NNtKNdRJuLJDfWWfYtGZCfTJemcA9SKzudDckptnMBaD4pXsqqpyYf3csgxrJTLDij72zcCUcRQJGhJhb9j",
  "key13": "5A7bbMJn6wTJWMJmb8rNhuxHcn35trki6skx6Yu5y1bpTdDaexphS1BAkbzaYXir8idJdztpJeQjBpXo1cK3S8Tf",
  "key14": "632VMM8hSNwQZ5STaGFoTiXNoZuA9NZEvRh72mqUewmTjw9NkL754v8SHcdJaheax1kyYhggWNezZ5X4Ni55cB8W",
  "key15": "5fcDKbcFhx2tcFEVTDxkPFwi3jtj11uFTZr6KA44WwcHDjdzh8mJWqqoZia36RUzna9j7JuvFmYqrVF9T58V6G34",
  "key16": "4nfcVxYdugej7HZftRuCAvvKgF2reHrDfj4aqWqhrBaiMrLBEdjYjfLKbd64GrXGCmrc8jb2DoavGGAyRPDiMmnc",
  "key17": "2vMA6SrXcuQLmjfGVT9qCwSXL3xZbVAYHwwmKkxtChsQuoSJUF3Cay7meH5UnuJkD5DoYD6HMGmx1TXS4JmLT5PD",
  "key18": "3tFfY8w4ZDPR6E5CKyDTkv7hXuMSbznp67BxDLxfLHrAELtzE1hsktLXZN2eHQ7cChQ2yotkEaMKjsCFqjAZtZiX",
  "key19": "4kqSid55XtMVj1dLwdrPsU1yvRGTX6oKEc8Drby2WTzjDZwzKTPv6oocTza239439s3N4TRi9BB6akgh5iimk4VV",
  "key20": "4wmwzkgRoBr5mwGD6Wp8eT9PykJP6EmxPgt7HyGb6Mrne5ik7EorMqFebN6LqXqYFYG6RYjoqKWSCJupKJGaxe33",
  "key21": "2swSgQ6M4aDM7BNJ91yu5L5dZeKYA1AA7w4etWYbGxYG4xPY86CM9EPXqoFBSD6wWYhDVqK39wViLJbggJ8VKni5",
  "key22": "4uiYpohLZg9DjFyYxVB8SUD9ULGnMsDFcvaxEKLHRsebbZJm2ji8EPnTQifzuk3wH5TjnuZVYWhXhXNo5BZc3o6T",
  "key23": "3s3iENFvP1e3Q9G77UyoytJ8hK7WbbmVuYQtGHKirqrgTBsUkAPrEPH6FRnXHYvNBhVaP7qh5qKeihNDhsqSV67F",
  "key24": "3WeKM5fkPjyyfn8AUWG36ikiRmxoGL9inEya1cw7W2hpXPbTEAKXUGGQeyQ3hZLZQRnvEprcjpqkVfYrA78hNY18",
  "key25": "4tFaf2v7FSzoLQdq4YU32djRtihJierMDQa9TnB8E7iU6ByaVJyBF1nUFcKk5zn7jHSYD8zBvPpKv6HjqHWiGSa3",
  "key26": "C81qoNzttotdqRyD1sPvUYG9BdL78hTEVhANjs5R94YJtSjWmEgQqncvraAwvYAgT5Tv9QtNnWhy7z7Dej7Xqfg",
  "key27": "57F6KDHdsx9fyVfv6W7quYwiWDwwtd5LRL1UUCn1ey1VkPp3MzxdBMWRxXK3Lj5hSQ8YpmVhx4QUuh4DNaEemD8F",
  "key28": "3396j1qrXasx4RkaSfRTRNhXpcG4uWsW5vLHQDRrw3Pd53SXszyPqURMuF4rNk16x2QGdCd3PeJwvJAEG8qmhQ36",
  "key29": "3E9Zyh8AFrB5CS3iPezXB2ksydUSuKAxXRG1moZkkL4oCq7FPvbhA5bFQHxZ2vDoEgmrHsGqzeZjfg47X7hER7Kk",
  "key30": "gLqTgyB1U7D74b7iUrzU7c1CEs7NTMYwfxtjX1dHvkYmFQvyozSqY3A7gX7nDDdRvcCFgcwSpAJFrwhuaX5BHYv"
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
