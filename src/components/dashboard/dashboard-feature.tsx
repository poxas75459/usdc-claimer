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
    "5WAQd1Ds1uuQ7PrbK7tKt44Byhso6zppYk1U6Z9KKNS5YDfEifAE3XbTJCvW1VWqCDMbJE896tmCFdqebFvFvQfb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3WUEdaPKVFVdnVvAkCQmQ8ngjJPDhfq7fmTw2Y7XKA5uipG1bLvbQj1X4SnwJunc5LrPsESohY191HNt1586GuX6",
  "key1": "5KWKphdgGD5GAKuSkfGJ19Nb9GiqQvfw7SVtAYWbupbxY1ifpf3HcJmvYupFPwhCVzFvLxYDFm49ypw712fNzkn6",
  "key2": "bQ3NNZN3LzXjAbmWKpv4bJbsrEuW36wU9VQDVLVRFtDiofg7p3mojfRKgXotyLME7VxmSfN897PRVn18eGATMnM",
  "key3": "75aLcom2erQ6mj5nBJ5Emr4JNtmNXQrYRG7wijoxXjWJyPCjYFEoR3crcX77QRGthS4zyxTRSbEAuHwQcw3uv5e",
  "key4": "5rXK9QKthRbKANUuUEZsnQw3jdkYRwd8W9u5sVmyn6UawhDRx7EfjiutWwoDLv8idZVb1t8kwCXydVbgeP5jn2fb",
  "key5": "26SPKYsAZ9TQMsxrRqY687Us7we7kgAHfm3XxhB5CjVnxKTp5Lf4UhY3qkLXVFxHCm2go1rPTZd7zdsuFND4bxp2",
  "key6": "UdHbBrcFAzYeTKmLawXpheSNuaJbchsb5DZBnbh55hqvRGsZRkRHRvrvfsubEjB4AoUfj9qRNhp3ogzCdSQBQwf",
  "key7": "4KN5pPFCzJ84sJaAVVFP1591HnokSph4EnjcLxHWJZDnQmAqLipC7vrXERf5a7WZnX1mTF7jYAmuegADU7YUtAyH",
  "key8": "3fHsh1Li4TfbmZBA7U2wkxfArPg7McVXXcibsiCLm2w7w43NyZErhMxc15JuEuZoipu1WXCwMEMnNUiAe1KQBPjo",
  "key9": "3KL8L3NL7MfUbnR2L2cNpCsntTS6U1DaCo6iAVQYD3Z3RexAy971MEyefXL9qNDii6Ki99Xmy9sVcGKEc4xpE1Gh",
  "key10": "4S9XwX1t9xVniKfHw7ptqUfnP44XbCSk9Qfw6GemvLtyyDLrVUAbnaMDi8KzYgxyrmvcQodekQrMb2dq1UwpbJgw",
  "key11": "44pe11Bj2h9yRdpw8Zvw3jsoCsEwLugJUUXSmJbRnQS5EQ3rJ2vqVNDG9SA2boteJWMXfUAWiURUw87qNP1PBt7d",
  "key12": "121cSYWGZo3PYdpKvCGCcd89MmWd6cwWyiC4d7kZ6WtkkJ1knBWoPD8CAKjgBxSsRA2WGXcWFGCPY5T1pc6P3HV5",
  "key13": "3GJ9Ci1T49wx2dzDuPMJkhYgrDZwQ8BBXEAmHyGBDSRmWLVrMZ1HBCAZqoDkAnZyEjuEdvbH62GfhEpnMwEi3g9Y",
  "key14": "5aggn9KTmKMP73e7dxCHWYmLN3Fa5v3XPhhRvf2CTrK7cbYWvSKJWkm74GgUvkwoK8nR8tppXrYQ4VKRUxb4HMNT",
  "key15": "22ihMTAV4DE3m6iPM4W37bVqpi3fxcwByfYH7qyeCa54zEo6WZs9b5aVvUSLQJFKPxawRZUqk1GxVaZpYmytkmCE",
  "key16": "4cWMepWR7gDxVrTgi3WXe3Ep5mqTJyCieAHD4gXzj1XmiacH9BRs5NkZzAFK4mGeLR5QBKH4mKAHdKEiMwrLN5rD",
  "key17": "2ePtH9CbL3u5FFou2SNaMByq2MG8rqKqdgDLSqF8i6n6tjX5zLL2Upy78EzJAnjhBNsWc6sbN5yX4NoaAQ3M2JtS",
  "key18": "5vX1T6CJY4U7EVXHv3qs7V3Lnq1iRR3vi3KXSqD4v6b2ygGmXV1S7VkZg5AwUC56CL2NSQ61wB47dyY5nrzhQKJD",
  "key19": "2aTWcQ279NHPYb9EKxiHkpTC1D48H5oBBsQB8MVnfmYDV221v2Dh5J49yvAvJWwbeKEbD8z4ncozPdpeNvEs78g6",
  "key20": "43s8Fj1LTpCjy1ZQ3vqhhe9aY6n5V7fiPvk1HDzPbitzHXURB9U9nyEhKkfQTjBGWZkUseaK4FhepFfNsJJpEKhh",
  "key21": "4egRJ4Fu52JKhwHniVvZjPvBvCFMv7MHUpZYjwac7T7d9Hf2iMtpC8dwQf6qBsPRLxQkC4EUNRUoVfuaSRnSsc1z",
  "key22": "3qeXWgb3cwJnTWvK8uLaKcJpbf7jVc7MVxU3xYKMo2qgwmMvPgrrnnBrrgrsr4VumF3apXe6Nh2hEjJChDpRJr8e",
  "key23": "4hDBsyWzGx1Nt7Gz9N2kkFAA5dzZvf7JycWSfVW1XFtByq7mJRoZo4GWt7ZEJ5tWCejmrCS9V6uv59EAh79tKRhq",
  "key24": "41ZkmNHPQ8vrk3nWq4Y8jkkHhw8Zm6SCB8tRGmswvG2ufN1pkzjMAj7b8fbeWDJi8sRvFGpSNhPN35s5kRaXTXf2",
  "key25": "5s4eLT38VUS4h4jfLXtiEHw7Z9kUKrkjEkM5s2r3nn3E8eLEjV8hh2NaALBkH5PDdGk2XJbP7aWBttAE8j6GzRrL",
  "key26": "3KVQPDUTJrdfFATYCdtnUin9agy37kfiQgVi3AdFfQBhZkp6qhDAfgoqgkfrad58ijjyJ7WngDfiBRTfebKD6pa8",
  "key27": "66yHzeHJ3QqteT2dPYP47huPTVGRgGwwFYPZiTxAGBgyFBfynZ2xcsdU4152dEvuvG81SiVAytxhV3qStACef8hy",
  "key28": "3FLzgJKCPvjJhZATjyMNu1rr1WUuHjcZirC96qYwtvuFnm3iqm7hrEdr9DbaaB2C7gEuXS9m1YxaHgqZXnW7qUBo",
  "key29": "1yYBHupKRyHXApEVAZc1q1xJSJuirgoMCPJRvP1hue5d1tKEbdVkh3hB3EaC7UAudrQqpXFrYACCdb1ok9kHSNU",
  "key30": "3qJaS5PgkckcowmXAWNvGxo3r9Jjx46WvoQ5QKHEJTy1zpujgzUCY883VuPVVfxTQznwzaCoHzhxzKgvqGCzmtLU"
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
