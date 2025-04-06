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
    "2gCU8qMjzJMKXQHWwNo31y19FnpEVQCTCmYxf9vWYShb8eKkjhpK4dpryrekVL9BuBoj9EBbr7TRvcuxp8eyhCSU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33XrC29qbYSayf5zvTYpcKFczitkFSBDPsHQgLqqovPgaaitV4oKUfTRcv9Bx1HLetxcmUyz7uoqn6ujZnGcJy5j",
  "key1": "4cBFjmdVtXFJ2vvmsowDBMzUnCkE2UViLQCu3qKNjkuemL4BEutCfbTUHkiAnGWQfHWRR6jnw4hTJPqefUnVcVvR",
  "key2": "5YepnYT34ZyGNmf51NNjt1qr6Tds9xTqiHDcRuTUttnB7Yy6cRFHGJjcjssyaAvbJdQV3DioSniLow3QS8tz9thL",
  "key3": "5YiAurgpMyuVsc17JUuehXQu97aG4x2SduEbttZpYfHRBUgNFexpcuKumdH6oWhqYhyKm9izGkT5zW3tcK5vKNcj",
  "key4": "3bqDq9cBgyhU6tfe1yndMkJCWxNUmTJ9hkWCAZDZSotLNBniqwe2fwUr9Gb6VtRV8jTZvEbwG399NZTd2yXo7hbt",
  "key5": "4EKpTs4zdM9C8qRrHzmNKC2CijxtJ2zYK7qR2CDaEnqVAQA2fNc2jxR3R2G2GUy1V6kkywL9BEwyEpmJjBGeMcYt",
  "key6": "2ggfG6Rw5E83EN29aFiZWUJBC3vE9sHupPMjMGek4N6rzK4wMSkKmKZauJc7FNvaNYCr2s8HjZVcGvXKjcSRqLiE",
  "key7": "64knAtXw8LF5LXVbPD3WiafErXhVXtVRHFeQ7zPiL2MsR8TZCF4tkrVnx9wt46NuWcmNHXBnYwDAeRBqewT6wE4e",
  "key8": "5ienu2UwzWADqF9FMvUDEKjojGJbuS1zh4ihA2qH79q25dJJgdeRuYxGXcmYna9kwE9VxhDmKNJazy2VpkbxfzAM",
  "key9": "25hnD7DLBhqkUktwXoHpwwfiBTAjs2qF4vHqa1mhouZhZAtUzwed4EVVV5rEmeTrwU2NN7ig7sTBQq8KLvXL9Udz",
  "key10": "29BQaHdzi2ERxqTjwtLiUeLASTwkWURFdmTcUA2T5dDG2APVpBX6chBXQpCqKHtGQD5VgjuVCW9KR4DxBSAxJc8u",
  "key11": "4CyEkMThuqtFP5xQQpHR86JiiNhDCUqWSe6CTxSJeCiMmoeSYP4wpoqTe3TTmbFTpr6zJYDe99BH8198mpbXhSYD",
  "key12": "4eM3CTy4xSXFXikg3ErpxaGHfk5Vrp7ef82yU86A5XU4BS2pwogQi3xuKisZSF16TSmvXphyU1mpJhS57GdjhLqE",
  "key13": "65uPVXUfBox6THdsDsdCTydjmEso9ZqnJDP8dj1C21j9jexQiTqV9eKCBYePirXj6aWb9CwCagyuiKKhhWXLqBRH",
  "key14": "2KmMqSSsWbfit89SLNJSd675m4nPZBVXFGvM8ujSXkei27whfZo4P5RpJz3UwxJHtCQXkGcFdJ9RA2tfdBEUNi4q",
  "key15": "66znENQnLLGw5Zj7NwGYnK9GriXyeCF47PKPkQ4xWQ7miQGJqCcVoqd6rk7yfEiSYBreymvUopNbudkGpxQi8z25",
  "key16": "jpZc2oo47KC4ymVNAotsV7GEbJU9WhpdBc8rD3UZhXbxTnfPrZQjSVasd86C1vJ6UefPutFXoDwq9v1VHXKNgFE",
  "key17": "5CpUj34rvFKq8LEq4CPhc4n39cxJrorcdQuascTDZbk3Pqm24AjCnPzu7f8QeB7v8UeAq5X9eQQHB7HkB6SWDscj",
  "key18": "3xzDEPboKkyecURu9L2kQ1BzzqWbxjNKNw3VzBKAfCJRsbnQpX5uJvTDYXKvj4xfhC9KupM6YgWeC2JMtPH32nRc",
  "key19": "33g2xcy3sdMbVaKSMxUgZbaKYb7EbnHDNz9u9abRLo3MamaiWh6QgvgAjuw9VZfnbxBMcu5zjZfxTzF1D3x8JpkV",
  "key20": "3h1hHz348gvvDkPmFURhkU6eeek5UjyN64PQi9x4DaT1cpkTMFje2c1sBU6KDZ1eVjg87YqzXU994SpVg637yEJm",
  "key21": "4yAugzqP7eEEHF3GUUUdxh6xtLUYQ8U6AKBaM2BG1oXBM5kJHpgNFXT98FYuHw4YeVxaTyB4dU82U9v1vMuW2KEs",
  "key22": "53WogkxbwpBTZfoc6JSfCQ6TQFHrEE99WiF4vsJJ84PBb6f4My8GPDm4rd9ZGSKoTuADGY1Ui9ic8R9H5qbBysQp",
  "key23": "5Z2PZD6zt6FTE5TEH4MNCvRdsrcPGhLvn1SkYWiXqkZLj9i2gwYNwzGLgyta6nAUcwzAaoo5VK3rcPmwdCnfRAVK",
  "key24": "31QemNbDb6T8bPsAAaT3F2RHcpduY7dh2F936YZ6zh1dXbpDZcWh1dr8UtX3PQB9Lw73EEHXQAJQgNar3cUjiKms",
  "key25": "4zRN7vXCWMg8DU8yJWw8AXa1JCCVjKpo7SqVT6DTcHomwRiT1inJ7n8mkLxSDq9TJbDX6VFWHiQJ1zmxdxTm2Ec8",
  "key26": "2UjFmSRoVM1XZThEcm4U7ENg54qqQvonsxCpwqq4R2FW6ZSqUdeqNtb4Ji9ajo7YnbpsJNFRujgge5ySirQqLngR",
  "key27": "3jZ49nb4PJwfmjANk1xvpr7JkZh6v4wFHsr2degUqn8NSZbe1Va13Aeb2jDnzb52H9vPmuxfKzMb9g2Fgx5QeNE1",
  "key28": "3j8FTiCCkBydhGeiQovq9z4tC58RVccVNg9ung4q25vh5hCtVJyTyQ7mQozMQaWU5wS1MRZHBDg5TiUSnDuFPAYT",
  "key29": "3yKYmrn5QSm76L5dnn1RV9sR3isBEeU9aYMVVNYniGCyeFzUfHLzWjvS6kUArfdHCni5XR1Vnq1UNkAo6BvGpWy",
  "key30": "4Wbq9NMC3bWfyLme63CMAc9JXwepMZscNnBFMn8MzGzxc3AJAnBaVzx5RnvMhTBwjjfj4tKcTus8QAFANEye1zcD",
  "key31": "4VfNdMyYgyNrLm2yhaFF8xu2BXVhWPchDP5kXvBaHmU9rkNJ22DcZHB5HktqLox9H352BY3WLkvPV8VProbbkCn4"
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
