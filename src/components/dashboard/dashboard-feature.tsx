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
    "482iVgzee4WGWPCQp5UKJujKyYuiFYi7MdymvqCPtv9iSUGaBFsNw1CzzBbXwMhPzeB1cGjVom23ptXv3J1bCS4N"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "75GcePwt5fyZA4J1bjRZKYdwqRWoKiYpX4bGHEjtDNKddFvu62Bh2kLbAGKLit1Y4kx71WYxywhHBAUb6Kcfy69",
  "key1": "2dXvnkwG4YBKuc3xjHP7fM1ShPdqSKzPEhFTNZ1uJQkGEyXGiYWvE4PKU1vAbv4BJQNDQhaXg5d1igcFFhwmTZNf",
  "key2": "54qdMdTgBrgiUAabADXTxhB8SsLw5a5vcERPwq9hsM5Y3s2AnYB5bn4Pt8eC9cdMhBdTx55A6GuGkhS495SGyJre",
  "key3": "FXki9VjDw4offiU9JCfuwRRZLz86MeyTKLm8paH7jyuo2jQiPjTH8MY96FAPKDbzWMVBS5AGdMkqqLjxsy4s1Q7",
  "key4": "3dJ71b7K4nnEY1fDRtcKSSQwTgZHY3e4PhkyJYNdwE1rFTwNYHeY7hwRTwiC5Co7tu845vcb4zMxZxyR3ZkFh8kk",
  "key5": "fFmYZV5aGqaYXTqHHrk6ruosmhj4x3WnhUUCe4CbtCCAiPdfkzmeJkK3oev98VmdA9yLxKTiiaEfF3AkezG5SSo",
  "key6": "5DqES3ZFnsjAyYnqsMeJ4HNcNrMwYusxSBmh1CewE473UQLXXNnscGiUuRv6Yn7RbfrguQ1nYFnYqCCmjxEGarfm",
  "key7": "5ksFC3zTxNvakhenWfgHZHgo1q7KDVdWDRbUhqTbEsSXzLpUR679sNJ5LVcuZoCcMGTC4ST4of6no6gGTyjSEP9x",
  "key8": "5xvuaGRYmH76dBo31SWG7yrzGR35XMWTgAES57CraYy8vsapxevfvxNKJRWgmHxiGGaJ8toYVvgQUkKXsYUf1QvR",
  "key9": "5VWCqw5MPU7tCHw8oxAmqGDwQedarhGaaKKhH5LxPTMcdDDoeKgAJNWRvfBUVyiqcQQboHm4QYLBHwbNzXdM5iJm",
  "key10": "5rQC1ug7bve3dq8yotZbqzkr6UY5EgLLNWYrVqzqENMV8xLzRxKyeJAP3T6WXSSNh7CZKvqDw2c2aM8bA8y67JKm",
  "key11": "37NTuRdi2UPQ5wjUVG5yAk2ZFaTrWLN76VkxofYf7zR9xDjCcTzek3wTCDgwxLnKTHjuByLAy7pAnNFwVk4t7h75",
  "key12": "2e7Rg1hMzpy8YS1ARm3Hubr4iRsuhw6ZkSwAAvFX6dxpPNjYSK7DbzhkavBmxo4XM7Kg65ySck3nyok8PatR74gw",
  "key13": "57pBq8ywdtw9DKzfL5hGwEqYiWv6jRmNxGxHuJjugqKG5LjtiELQjEgo3qsgS5U3knWPwoGQ8efqJWDcNgAeS1kH",
  "key14": "5M4V8QjKBe5uKv9TY8eBN9dgPcKVXZZXmp8CnW5G2z4Fn5jsHqYGWtSDoM2CahMzpeQSdvDDLYgXefZrRj7p1Z4E",
  "key15": "mA5NyHUp6FDVcPc3VTUpxCLLDAe2MbueU6woN6UAALfHT7e6XiGAH5xgDeGk4R4WeTJbsZvaqejt7RUBzmQSKRy",
  "key16": "28UNACGi26tL2cZ6qh29q7zjBatsnR2k2ABedTHEb5reh1PgWQ1Pza8FUtbjgd2unRrWqVBJyE61HZeTmWcJgZZ4",
  "key17": "2wkADS9WLsfCSh1MgUqaeqCSV7xT4C4kr91KT1vqmJLFqLovLtFnxRc6FsRb1PLZTBi8koTs6ofVtAW1ifyuTMju",
  "key18": "F8MpRbU3CKdbkyW4yXZGdkxAZ9sj528Hhn4Tdg7rLfGo7nJDsX5ZL3jUYCMRkyG1MevMbe5LxghPYBLA2MxAqWB",
  "key19": "288tsWc47rWsMZBqXkGKUMdQbzkSFnnzzroBhdADeiCJkQc576v5VvnKkCdxFWxXjZ9wFXayxQgyvss8Jc8MuRUV",
  "key20": "4eYEPCLTY227uhgBvRWQ1HQekvbRvzm2DJBunH8oRJZ2Vz2tCvRc1Sbz4GQyMbdF4MjRvym5CctYGEkjuNVV4oQ",
  "key21": "3m5JDWu4ut3oehXHo8jrDDACmWn5zgXJ6kgUYZ2Pb8iT2cHwZnYQkHzJqxHN8GYw6bd1EwS2467gsv1J32ARQz6d",
  "key22": "scnRcskPqWWXqw5WkKnbDTdhwcXGyC2yXAXakksAFodKc2PhfLJqH8T3wVG5RmPHS1GVxCAfjex6sFW2M3QgRHd",
  "key23": "2tDhg1xh9Ueqnot7wJyzuUfmoqwLU43AbHnSz4BP6SFJWs2BUYp3NwqwzfbiB2ZzCijdHYfu83a2PthVni16mEB8",
  "key24": "3M9K1hkDFXTyhGt3SPNToV9VjwoRHAMy6cLwngXhmPQH5NZ9aFGtCnQPZuPXR39C3g8hBCZZWqewhVJV9eyme5Ve",
  "key25": "4YLQ4qShhJ9nYb4LaSyGab33GsAsQL7k9dwSxR75wQphQaZuZ4Kfbu2ZanftTJwCTiktHV1WsvvMiKSHucVKwNyt",
  "key26": "3QsmSAt1nP8ps7MFqYw3v5d1Mj7LJZkuc5Kyc5VkTFf9LKCuETPmMycdw2yy3RTuBNB7gaEyds9PGY1iMcaebuVp",
  "key27": "38pkCUmD1YDHjM8K1gaPHHumVevD42LFdHH7KZVv5rCSebJcL12W6bEpmMgQ4AparkDf4x9PAmgNReWYQZX1W385",
  "key28": "38CRHy9SotcSL7rZEeB6NSuVNZsN2i3NfQ6KJGjWVQTMNuQXhDVmmX5zon7FkjbUUZYyKAJ2TbSQHgvEcxr47ipG"
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
