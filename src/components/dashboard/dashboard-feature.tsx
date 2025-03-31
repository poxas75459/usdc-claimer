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
    "2RuG43mBHxeZ8R5NcwEPQ3wh5xB2NjqjqMJqA1zLwxqVjuSEYnMp52zHbqqzGgNVZj6LgTtmJiapcbei9nLGBzx5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5MSxPTLvCSHHoGVa4Uy6jLddccgk51FD7dvJhqisfd3wb6Kk6sWQzi24hqkB6aKtYm4aVRTy1mW3ZJ79cT5yFMNy",
  "key1": "2EaN2hazyJFoUApQCL6Wj3mMHZ63BZXKqA1eo6kAAdpwVUkEzH26Ue4H4BGiArDS713iyKZMEy2mvSFN1kDPUHoy",
  "key2": "45pFYKdwpN4VqWmHTm4aw1VGeDY7Yr1ZGPj89ibrgvAuTZSbbNPgdn1qo5Ef68D7k6xdt2ET5A3cJsMjx85maubr",
  "key3": "5BDqu8rQNPmfdxByr51jt72tMbN7gZN2S9cShdsDCtPoRvNN9R3qEwdFepTsCHUZ7Y6dRgrc5qvSrF1d9Aecwy6z",
  "key4": "3JQp98sS4A8pGpwsf41Rjv7b21F3TBkkMJQ9iYC2odaBoj1qaFFk3smpyUcKbSt6gFt5JfoF4FWgREYL4wUDxH7",
  "key5": "5aW3XZBksUV3BUQu6Y71Fza3XuiUKboDMuqDSYmd523CxMuD1NQsazwVYeenXzUZTFVb74EwGfUo37uJB5HT5RoT",
  "key6": "5REeEezC6rZZ1MkrgEE3H8MxuJWjfXXo7TiWnj2SHueUhSh8R7YuvsaiZZyWsnHSWopsLMp44cZ34tjyizH4ucoG",
  "key7": "5WkSAnm1c5V1uD26dRNYTqWLmXdZ46gN6o9JW6rZSvuE1zhHEnLKmK7RsuoUNKWxJmyyHWsyA7TpVcQoQLQdau3c",
  "key8": "5b9swoDb75bEAEmAAX3HhzYahiJypaK58VcfUwWsMuiYNWFREShpHCdGjEaPCwGY29LvSobT4Y5dgX64pmkpxzUS",
  "key9": "dkqaiEpYQo9opwkbDvmAL9LvabdYDQHEM7Mc284xRhESHH8hyru6DeugjhkUbMGydWQGHUhZrSdWvEEqK71ZC2k",
  "key10": "3LnH36act3m8eA45zSdo26GJku6Ax69BXXSoCXgBZ62dnrvmPMrmhprXGwtWbvrVj6pQ5EX3ryXFR555mVj2HBTJ",
  "key11": "3fYw5u19rQik6Xj7mB7Dv7X9dmnUjWr5oPtRnSYBwCGR7wC1Yx9Zm7GXAnTato7h6tgfSmeua25u4UQ2Do98c4ch",
  "key12": "3SFoKfJzZrarMokqzXvki3k7Bq1rWcY22jLBoKMzRFayu7EB8WP81j3hbCPV2HJZ2TA8ydMLEwjrRNm84KrpGVwA",
  "key13": "QMgqeHBLiA2MMWsU47Rzpw2owYE5QcSto7GNW7WSidhbh5CFNjUvHeBDt1QJasqVcSwAVLx5gEhwjJkTKmrXhwQ",
  "key14": "3M6YGLtyggUc9XBZb4ZNSCRxZGpjtSBG5Se33Q25FHo57xms1oEqvLCkUG535QiFhB6UfWFLt3zSiG9sxhQ9Wb5A",
  "key15": "5BR8iNbWLiHVaQPyxcvnsKyGQiE1cn6hBDs3Prk92DZt3Tz4pVYPYDKexBv9Z89rzg2mtRjwDZPErgHk1A27uESr",
  "key16": "5YxCyiRwTcyW9C5A42bYr1m54mbP2HvTTiXw3oE1yUJ1eFSdPnBscTsrXT7SHzuqKSAUmMB3GbA8Ub1eAthgUV94",
  "key17": "64cdQVhRsouKVbv8vuiLf7LCVApNJTHhVwzeexppKan8DFw27mXNyG2YphNcXD5EZJNxhJ8xJK1ABUk8swwAHf8Y",
  "key18": "5op3PFdNJNYiTVK57uvzNXZrfhZ4wTAzqR9baQUB5ZwmLUsXYBdseuK5tVRQYVzmtnP3jkTYNMNJyPbEneijn3b9",
  "key19": "3soGJEDM2WgiYm7DkcSk9e6GxKkCWBxDshXJHvs23ysyCQC7j3HF7seQTstDvMDnsePUe2yxjm7XY6tHwieD4m6m",
  "key20": "2aeAWFoFRKjbyybwiNaSmSE81ojxLTrRGjYQ47eH3v8rTdXABsoyn5917pjbpSFGQ5c8k2zSzBYWbaTRfG6uRDGh",
  "key21": "2du4jp5u3gt88q4Xb9R5B3eJYm1pzmZohq6kob6vwqv8DMQnzVW8cjb8Mn3aCwLERdtWQZvLBQTgGXFubvjYL2UE",
  "key22": "3cvoqcyXFaqK6mQjtXu3Y6MfwJy47Ztsye2mDKX7dnuar5azKnSZHNuJC2GAMJ2t2gSKbFwfuuZkTaEasL5XZBs5",
  "key23": "4zHcAEWHP1PDyJawBVmQFtbafBK5squE9fg35cjafGW9X3QLRJy8CwDPQRLh2SudWdFoQzXsXgKTn5QTb1Ywo1dx",
  "key24": "Rz8cxckuGHEMo1ZBkVMVz7GxprpNmhezY3Mf3KfU2SveNpSDTZZ94vSiau8vg9REY1eGBh1ZShHkYAWkzrD8BaR",
  "key25": "PRb5vMfe8jqaJMGf8Aa86xYbNq38E3voyv3DZrGn7HDTenCXrMcsa5oQ5uZ57TcSPTdC9v2m8teHbxAwtPv31MU",
  "key26": "2HauV9YjsYWur7aTRVF917MX2Wg6twYKzdfidZjqYPF99LLFn4CkuusJPvvYRUTWSU9anYk9nuusr7x7fRZazqj7",
  "key27": "4dCpDU83nMWxPqBvAZyDKBYS9w1N2WeawDVAWgZ8722axnhPvBdgjAN3FcfP3WjnGpWBQprGo3hg24mGfgAHathU",
  "key28": "2A61dfWkhCnWwGAckBz2Fp9oVLf3ShcooiKE9Jip88ro1AQLdtRVSeKKjcm72TEwVvYo6fEWzH8SU1E64gWbLdhv",
  "key29": "LA6NRTWMjgEfKm1gpw6fc3JgitLGKv5gQatqwDKfh8dxDZiXKccpqAZLVLRWuKDXT9WmPvZiiXxsjvAvUQELShQ",
  "key30": "3YbbPaXybJ4Xp66LwptPiPqfbhumq79aCABBHgjD5rzsbCtpGbFDZtRWTYYRwJLGF3NrdpmUmbRib17xoDcv1Jfn",
  "key31": "43G8gemUrzbAAW6YkTAr1squWnvrC6MSyVv8hHARYAk21faGF6RnJZJ6RvmdiraU6ij8j77WJ7GQiYHszkKNHmHq"
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
