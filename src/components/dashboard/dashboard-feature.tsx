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
    "5auv3FsdXDkVXkACkmmF1S8HzRydCCWbDanaBAcspGbKqzYRoC4R7VvRrDaPqCnPU4oyAJ3zDqDWGBi1PHiZQ9Dm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "e5RnTxypNhojUP7EjYbzWB71z39G5ZTAatGv2DfSsJ8i8BGDG26oo79QBL5ezXfbPiQjYCmzBWX9zKXqPCoywmW",
  "key1": "5RLJs3rHnu7gw2yVYpaQrTbkPjpzv8TEypekPH2PtSnMsQ3JeBszRt36Lt7JG367vRmu4oPCxzkGo2Ltu9Abscmz",
  "key2": "4LHZVvdiuu7HNiDJBReiSESqyw8ZVUX9AAMvPwRZNPoNUmVesMx2oYu5HCxYjLo7KDN7vxt1829vcqmEUePCgekT",
  "key3": "5CZMLV3pJ5FJzs53PLhfpTjEj6C5htSoRfSYzzVWiVXLNn37cnCY6YzWSX1bAhz3Mi7YP7UsLthMDu5gaZrHrBqF",
  "key4": "qnA6um8kkdyv9tXokfgHrUFJJ3paBaFkgYy6tXMpFnKkEA2cFQR3FvBtz8oMtJ5rpWNzr4DBAq2DsGqf9uJQLen",
  "key5": "r2zK65Jjms3pywvyRttSrWGvUpUL8qjBziz5zVQEJFhpsuJuVqrY5KVPMVPvLzaSjJEcY87WtcwTWXuejVyBMzV",
  "key6": "5CXYAaq8LTsybi7St8ps5ghWJbwirY7x4bDbTxFQyjpWRBeYbBK6VHqz5gF4zcuvrFM5kxjJsskDErhkwTQinGj6",
  "key7": "2xEVs92Kr6QkJ2ejWxJC83YLNBksGjMrUBMh5hd4f9QtzYYzntvVEBcbDcN4RLxJK5Z9rMELK8Hxd3ewgZFZaE7F",
  "key8": "5d1CELtBpLME7BATaH6AoAnddjo9vA62SdTQRT8vvhtUzv1KaZPL6Wp8rHNhFT97Exgg8Mdfsp9qmo5g8yVbpjx7",
  "key9": "4TB9MZADbpKYvZGz3RzuQ3smq27C5z1s7fk5W8RascC1MxJKcXVsw86B7iCvAc8tT1NunkSsjL2DpBBfqQaPQSBK",
  "key10": "LG4FopM7mNNKCEtto2D283BZCGCXnoMyqhzK2w1H9AFDeV9q1UCyxCLwoNXyU48hH4fT1itDQALxSMvtCrBydEo",
  "key11": "3UBsuuqauKHj6W2XtcWq7eSnn9QYB23sxaeYs9Cp4iyx5Auu9P1dJLDXMCeYdCoGcfoBGn3BeQJ3BwoutgMir64F",
  "key12": "4gQZ6aVsuvoYfi1mSgYtkWCZgP8QRASZqSW7EREourNDaqqeHRNi5bZLiXysxcdbdkrcckpRamCJh4pUj2AuMWpV",
  "key13": "2ULaGGjQbAR59F1ouNwervbwsxn5fjKqurKRtgGJzJL7EYydxcjoC1cZvZV9D4DEquATdv7cCtta41hLUu3xzNRs",
  "key14": "32rE83NyLHsaPGvbdYzc5DPGxRkeUzwaqhpwULBThWbDK5zAyPgGnwp41dNygs8TxFvF3e2znBgpkB1dQnuvXoHM",
  "key15": "Zk5zn6ApopAMaBceyykA3d7DBEtg36UqgYF8fLVC8MV2FRir4N7FoGx9vuKENVwfKux69JiyqM66mochdYBoTW3",
  "key16": "25VCkWP8CwarAWJo7pHXgXMff3rZKgAu5bSMMTtW9u6ZtDCvQQV5L2vryC7hVcPUWA8jMxcamHAsnXTZ7QpWKq2v",
  "key17": "2jNPvSJcJxjB6CrdfFw6wfxD3nKHhsbAXnsbp8vsgW41x5LnNyLtw1Wy6RKWipLPakJxDmNHyupBH2XN3YyuE2JX",
  "key18": "56xHEKmhCqxbWJjavjV6An9PiL2deGmCFy1foMXDk5QUaxsTsMhhoQAwg7pMXJri2bVEo4Wy4EbVzg4uovQaKpmM",
  "key19": "53gnTsLnYEL1BdAQ2Q1MyZ12bUdbjg1cV7kA4VKNtveXuYW6Fwa2246eqys4KLdwHkfUjibw5fpK8i678SZGg7rk",
  "key20": "3oHWHb6VjuABG6mMkidpzF1ynCixuhSRbnGD5P5oGUJ6VHxt1823SxpYXTBm2VHHCkLjfxhhvBHdB5s6YgW1hBwR",
  "key21": "3nZKBRPcic1QZ8V6Yykm84fEDdFMiqNRPMR2P35BKt9WMWmN4fQWMaPSZY3qdJyAQCDjwdGmDuNe2et2YKLzSJVu",
  "key22": "3pdxwN3Kv6RB9SyUJmQ3Kj6NKpXYaXyG4sadG9vP6wvWdJZd7MCkoVZVqBkBzPJx4wKVNnhk5r1JEj9ARadJ2XXf",
  "key23": "5GA4bUEd5G8vSeRtDTrLj18qqWMYbdXSAaAKB2dEYK8mfuZCLFUS4ZQwxDPq3YNN2CTLVJhDGCU6aCjebrjscB9U",
  "key24": "8SPY2o4MUcKw5e5fwMZnV4AYsWauE9fMwmPwKZXA79gcWEU8wtMwdyiiVGZ3ZcHw1LoCLDhWMzCZSu1xr4stiVV",
  "key25": "f9CUE76xe8Xj9Vfu4baxVRsHPz6xyvzwdHmt12P9jYwUMZF1VSyueD2QKMhLhnUAtGcDiJp7gCdd8YhXp4u7Pjd",
  "key26": "3k3DjjkqZvbb89Cpwv2qowez8AaeTkuyW73QpuRF5nCqqveXkCJpEoAKgxMV2kmpMHqqfWmbwxqG7NUWFjYZ1msg"
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
