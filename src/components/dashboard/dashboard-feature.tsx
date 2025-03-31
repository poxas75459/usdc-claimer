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
    "hqTXvGpQkFMjMH3X2EaqdaZi1reLxgfsKHyNehpcBURzzW6FiGLwWU6nNajjcu2ABEL5bZhq7QsWx8yz9hayv7e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "U6sKyMZDrLGW1AzsVoMxbcFZmujFa2WDxywmZ11JnvxD8A6gzbNg5B11EUR5dE3ZA1azQ2gqAqQ3AMy6VZLMA8h",
  "key1": "4oy43yKEjN87ZxC76FFvHP8ckDBvPBucioLs8BvUCnLVFj9W7dJV811a5H9YJrAaDm3G3TqYvVJ1KiHAX7XoWqWP",
  "key2": "4U5bHqb5nVfmaahd1XH3gD63seRPR3B6xh9LHGVU1zgjfMmPoE371XNNBH8dFHTSoTLkkKQXhiWJGNgK16moFdvQ",
  "key3": "5eyCZqZAWWkhTY5BtF5EWhFezaNnGFbka34LxiEutURQE1NdQCN94LGan1mhE2tVZvpzqPguWRMLfh9sTYwCTyEj",
  "key4": "BdG52ixEt7bs5cC9bZiSAMCUpxjuNzPC2DNxhqmY8FQgrq6TwQq9eRjhDGDcsEuD1DPfZBkLv8PpmvMXnCazXw1",
  "key5": "3z7j1a1MSvEXe9hiJJRbZsZqdmJ7LYvpWFxG1WjG5ZVx6PJ7EmtWLs51GR45r7KiMfhYpcgiDYiMb3ek73Dp9X6Z",
  "key6": "4vvmWwzqvMgUEnbQZLooGCvxZmBciATJv4c9Zw7eiKzS1NdFLDCLScrMTYmwqk3GiYgmCb99Wjt6pAYjLRHtjUo5",
  "key7": "w7qsLHVjVhPArLmSnQoTgJMdXSHDqzBbm3TzdzpMwz6imZGHdqdBLBKgqsNpdnbFXeMGMpiBcuaF5ZH6yHCrTx3",
  "key8": "AxPY7dSNS36eoQtw3timRcVrEp67ova285XuDt32Jj6LVd63gFuE2WV8cqSrLN2orCMRFqekfn3mNgoQQNAj7zz",
  "key9": "2XnVyZuteaXcTtcnNntXYXvYLjJmcYnCLjsQbavysHYhFGUrgsNyZQD7eCqqUVMqzPxSczns2vkTaE4eXSQLxnvt",
  "key10": "4g1csMMMB7SzYL8w6qdY6pmGj2cQXRnrESTMmmeqRLkt2ZgfadSVsvcGztQGm3DjABKrA1X1hN4gmD1bVvhJrV1J",
  "key11": "4DXnx91Cqi61EHqsy1BrzrvQitA5L1xp9QgQ6pvgREo812SVE485RgwCGo83mrWSS7PqAVHjFW6GkZ37SCAGH4zf",
  "key12": "q9xPZrFtv2UHcVYoY32AVzZBStFWRZKedrjvtE52KNi91e1MeDnQDh1AeLsFhaKe1yfcxRv8MMaLfgEDFUJnWn6",
  "key13": "4h1RGbkUqyxT8ZH3Q8By57zeTMEmYYS5bYJg9sbDr6mqLMsf9uDoPAagh4RW7ryczE6pXtwDxgKkPFrFaAwd4eh",
  "key14": "4p9KFiK42bbPAY9qMDnPBCCCra8g5HYUMdfRWdWmxxoF1qPnmToSnWcF2hud3X7kq8QVPa73voAL5CJMZMB3CtCR",
  "key15": "3cQ5NnRQjD6t4DRFJh2xWLQsHUecrnbivpQdk8Ns6Fb37Av6BgrJqHgRCQhurNZidTbatRfo2RfnvqwdSPX2EtCu",
  "key16": "2gRg5ipSu9Kxeig6tUswYP8UzgXX2p8KFpXg89fA7p3QLPzhLXDv8uTEBgipR4hnEMYPFcZh4g9aFG3crAZKU7S5",
  "key17": "3E9HGCTv5KRgw7QqhcuCmXLRb7BbFMYsVr6BPqRC9V4EH8NtgLka5Vk15wYB6AhdbedazCP15RQZuKEuhS9WUi3W",
  "key18": "27KxF1uxBLKJJGi97bKALf5CLhsmT26eL6LJHVVLpQKPjx2tYbxQb21BLqf2EJbyYyoVLjZUYT3tXh4ALUu4RF3m",
  "key19": "3S2mLxkU1i9RTpfx2ohjED6UMdAtaAYrSUiKd3VrABZSZHbeW3hFrzuGxnn7tvCj67W3gHnbyU64XB4PJDwBuPJ4",
  "key20": "4HkZ9EEq5rokt9EfMF8yPDebe1Ejtxqwasj9LxXUcfnvwAmN4TonLKi65wD1byXirxv3bHntUxXBdTsy4mQUH5YS",
  "key21": "5yWwJh2o9nFdSZYWjuJ5gShmMFFAN75FzZfGmvEMcVuQx4HrpWTPr6UrbKhn9cibK3P74YX1LNv232gbVGpdkqZD",
  "key22": "2frfWmVQ5TWP4ogD4SNwz1ghQUnviQyC47EWtqnJ6Epf5JDh8SznHKVLEXaBmr39phX3Ft18ww7JWztntUsZGHv1",
  "key23": "3adJfc5ETa5TomKAubRX2p2hAREJbgtM8JxTi9fv2DB1LR2t6Axq1G7pDTVbyESqsb2eBKLVhq4H2QLGSeFjk5vC",
  "key24": "58sPpU1LEKvi8YzJjacpzfKEtgofhxe84PZ2PD9PUBQcwQ59AntuedEohdfUH7tkth1FYwugJaCQmCngcZFDQULS",
  "key25": "5Rf3gsmt1wJKirkzM3RDhJjgrew2tYDgYgJXUFgZFUofzQFf8CPQztvQ3xpFxe4Meieh55D5uxJ36SH4RTdhEZXL"
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
