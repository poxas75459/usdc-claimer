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
    "2yzh1PDgt8KWra2WsoiX5CtYLNjtv2yiipcW19rUu9N8spjGr4Vp5AQXnSic21SmhNGPAUWWTotKPwnEvuZ8ovS2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2mVZRWQEEiaCid1mUgb9Ss4sFg1cKtosADoc26M5x45An1uSSsoxvACgovpjvM92t4teYArYa2jnWBsbwa6pmwNB",
  "key1": "3Bg9QRABuYyMz1tC3B5hkUZzYcnL79CEGMndW68VrhtvXs4jivhViPSQE64mTWAQZXH8mH9aNKNMqVKNa6baheLX",
  "key2": "4KTScHPPU2fFTfftaXNVj5QGDug8rM518SuUrqMfmNdg9aRhzVqNQMvjBcaxEQWz8QwGH4JujtfH7StNN1ULeNhx",
  "key3": "3ovJaBkY2r8FMkB79Pt9NEh5HvcrtfqRAc7hG6WzxWuxuFhzVppWUxNPgrSSD2CQEwNZD3kFqrW5vTP5WmKiZ2fG",
  "key4": "3QPTzKx9yPNzjT71CPsywxP6D9makrFYZAmajTFQ5EgJ5do53wdfyrQTAt4nKjh8ZEKc1S31W2V9EfGe6fem2sM1",
  "key5": "3QW41UESjJhjbqRBFsZNLGSBwYEi1hgB8wGgAx266H5BifEnCfGqpCY6ftyBg3GhF6d9TSUNiX87R2iugP2HB46c",
  "key6": "4To5CmNudDr3XehtaNco46CDu4z8rm9mTc2u3iojX3PHuGUqNFJGhB2UCfJxWK6uWz9hkCaGPMxuoGyqFkXDsG7M",
  "key7": "2fRXyPWq7hhJ9WsuNtNGkMWBvMbmgnCm4KUfJVj7ihhHp6Dt7ngUu6fWDT5vkd1jx6uEc4tM3LubU5RpEh39Bh5m",
  "key8": "LBdtyV3z98ZwjZtq637G7CemrV9RDBiwkdxeSLBysjSkMLk6SpL51LxMgq1QMekaeorgBQcKpGic6V2NzEvNKPc",
  "key9": "aFRbtguNUsceB3dr1BGE37DRCFjWp99Kjpy7yd7B4YUS52eegy5N39nm5otB9KDeuwLxnsKeyD1ZxdSecRz7G6o",
  "key10": "323oQPEENoHAGGU4zWLBPvgjf3hannxErjFHg6Nk1Jha1pX98DTCTt9YMSa9kFsXPq4EkwuDf2xqMsq1XVHvq5sh",
  "key11": "4GTyzcaCTLDc3QaYsNZZSEytSZgGn1TWN7fWKfLVnazoNo2QZAQv8YReZbcjKsAujdwVsxJ8trqC7No3K7VMAzjq",
  "key12": "5xszDYsdNSGSUVTsLy6sLZ2GLJ29R9wBLRm8Hzax7zBzRBuJ9ywTKfND1pdqDCnD9dvedgzHBzGLPw4df2jRYkj",
  "key13": "5mkbmgF71E6rLPa3YKY8rXrtdWEcbvJzbTmfaKb28gcDREMzs67wKrKCcbpStXwpAWKbERoqRsyQ4Qd6PpSdePRm",
  "key14": "2C1LmkRYzEVGsYvw1krqMitT8oDuu1c6Q6AR4AcqNdPZbWc4QaFGfhGeYfN5hQAGoNCN7Z8bM2MZTcEYyxsfXc2h",
  "key15": "4N3WLnWaj7r6Wnn9TSp5wqpcsXz6wsxWFEVyXKhqBCbkumLfBjYQWfvP1TsCwBmBXiFfwRvNx7zdBMZhj5aYGy9R",
  "key16": "4cEPdTYLa5h9k4amSkQ8oPQHRCLZgDZzEDzoLFSZ5XC26nRo5JZLQnWqHgbC1GV8JT5XC9WrheAiX7c6pPJYbzuE",
  "key17": "oixtxMiKTwaNEX8Tf6XnQvnp2Rfan6bamvmfZJTwLzSFFUZ69BCDBmSHRL9GurHUqcMx64DHsQ27b3jRpqmtzCr",
  "key18": "H1nA8iy5v1GUjS8awMgq9mPg8FgFQB3Ftwkyz5ZYnA6TCibMwH5PnctupK1SbKkVmDmLXqpK8W57iTubaSjBeMe",
  "key19": "FpVH3pFvnGM5zWdY3DrUrQiE6NMFPoNZnKieLFcXnctZ16U3UMD2Ebz31yzsE8Jamdk14MTx4ZLNYi1MphZDZp4",
  "key20": "2YFAvn52EBfzhQXh8w6cXGHqm6uTpt2BwNLSztMFjC72vUTeKYPW7eKLtAn3e2Y1k3YetQng9yct6FUXMMQgaVtX",
  "key21": "2nR2RH4JybF8SzmKECpE6hvuM3APizCEnTXCQyE3AyX6KxM1wb5gzGFaqjW1kTaWnivi5fy44ke2hB65FqHAXdGb",
  "key22": "3P9NwmeA5wNADPf6nrNv91hYj6hndxasuJWmec7zovZLaj34Kc7ir3AmPndsTakTDrF6mrgVtGszwQBdavMsKikj",
  "key23": "65qBHXkudXxsDnN3XqEKrh8zCgQF1htSFG1jbo93LxZqWUhaRhbc9zndQNa4FhSKNZpBvKkiwumpTc4nqvnm9azk",
  "key24": "5JcHVhKo7oouFiHadfuAwkSRwCUWg2hXtir6tZTEph55zZYEX5VP7GuWfR1WXoL8qHUQxFbAqKoswN9myDwLRX9L",
  "key25": "c5AnGQVFEBM2bMHafZwzv3nYcCGzXXoKpzitTc93qUW71Zjq9ca6RpiLdDixu12JGvZGCxB7NfjLhEYCdxrwZjw",
  "key26": "28dFfnoAnLmu5rhPVc5imtQCQVKzVbgupSiq8rHKN5hMZs45Nh2nDw3hE38UCegh7UJH9U4gRD7x9BxFbM7DMvj7",
  "key27": "3uNQt8WDfqb3FqK4yJzKMaAACQD5qQLhQoTcTzAjMvSa1ch1jxuBymHp79whfu2RCgHsgKe9Yy4KRrRvrQZzfKz5",
  "key28": "3eJc8kmuH6nA3cgeDeuWyKaahcWny4xoG8WaZwn2HodpN7T4AqNLpuCZxPk3uMEXkcNc9H3VLX6rJHJYktET7igY"
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
