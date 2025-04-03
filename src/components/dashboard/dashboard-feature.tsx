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
    "Xc795QyvWN8YwjsVXbzpaDhEhg8J2Vn96sJ9k5GWnRQhtkxHhpzRh1iBhUqn6tgw1a2wD4Y5h6mtJzEeFzcHSC2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3J2TydBfXGUCZ8PUEH8xSzxgjmw4oLv4BN9rZVzusCrNTFSuQVrS6kNAUV7ieteSU8ZEP42Bdsvzc8JsE4tssdZu",
  "key1": "4sQRoBXFq3zRift19FmmRvpdP7xEVTX5gom8wMcPnLy1oJaPVfXWEzC6sXcNiDWQ8qGKYNMCAXGetM6jcUXqWBjU",
  "key2": "3SEW3SycaJveiQReVhcUZosHXr46evYzfp9JkP8WyKXDn3dNgJFMErgjtL3B2JMAgxjRg4SHAqTtZvZE49rR2ZHd",
  "key3": "21HT72KmtvQcbz7jLcCPd2JDJ9JWj58KwDvCjDv6c7GYVKZirMu2KLYjrBshvCRsiupCCt6dnfor4kPpx2jVryTj",
  "key4": "2J2QhviZzxERBbqWW2ZiFCq9QUqdSA1Y15Cntz6dbcvE6gftpDYoHQwcT1bQkrj5Q8qPkzPYzCuY7Hzv81nwuVpn",
  "key5": "24QG3SrAX5cRWL9hiihCTAaPT2QYdLnRzSnyo7ZeYbpCVaYHmp8LAQTVB81aEu5NV1is66MueUC7Gva2Lkg96muc",
  "key6": "2hHkPJ8rq6g5tVsoqqwKbgFRxquhwBPeUCJ5qHsTVNdcF923qESdRTwnr1hJyNFAt1sbz2SHxdTeYymrcdLkWCxX",
  "key7": "uvLoHFtLVJ3QrXQsYYaAs6cq6ZjT1iAwd5Yzdk7ZZNU5jBkqHZ6bvuu1oLxen6UySv5Rov6S4NYEe1WPL79W1oW",
  "key8": "3uiWT5F1rU2PYWZkxoYvyuAy4qtDUSaE9TWLjRokaK53DmgoLr5GXTnt6yDcHWMpjRKgZLBiDipk9CZECfPPViRS",
  "key9": "BK2yd6jMqT2kHSF43hLYUq7xUnM2RVGHNJotobtCFWi72GHTYpSL2tKBSwd34x4HRbaxwX7vgCoqYurRTtbnZTc",
  "key10": "2iRBH9KoZcEts8Wy6sJhTKdQX6t66PHt2cTfxUdBLjxbAzHVEG5w2PWvxXGMbvdQEWP19MLxGspbU3pMqQJ1yZc6",
  "key11": "2FMCF83RKjR1XYYKGKmKVFvF7wcSjudnD6HMQT5K8uaV1hX8S4RQ5QxgyHpxujwJkRjwvBWDQzsRhrtzCNXLm4qe",
  "key12": "4CtTdMcpSSETgUsW1PCF6cVYcsBCSTpw39doQ5RYPzWKRiHxQ6JuJHHAKxBPXh1ZXMvpSiBWgVjPuMMfuBRz8B4u",
  "key13": "2jhiE9QuBxQmc8uKpAk5Y8pVS1gyU4fervLm5Zr1QxdgqmeqaAgmCW6257WWHLUFN5gGCvS43px1b9iaySvAvUmN",
  "key14": "5sDGuc64AdiwDWbLAvjhc5xDgmjWYzGFJsGgNbFhTVi6ruca6nUCW8ZeV2h5WQxcbLrPVMqj6CHVXfKC4BRqAEJE",
  "key15": "WZ2kuQ9HZVpv6dv77teMUkoCumffaU8qY4qkQ5ntUDpzn155GFXDMFhUxQhsGkfdJxvGzwVVezxR2n5Cnv3tJRf",
  "key16": "3yDDQ5mShSp7nH9g1ymxti4sWfKWdi5KHUucJYAHugzpcdYKatHEKWheSo2tb5K7bzqMFfG49tSohhKceqjEZe8p",
  "key17": "JS6aU86hBLV3y9m73ghPKnQbbf1YRUFuwRavtoHs4sJwCHBLpCMhDKopLXDdSTHTwoS5PyronL1bHyfQmwu4jNB",
  "key18": "2MqfnZMswF8t9U1G6hENBzojvoHQGMPupUQpxWjB9GtznXjFmYZCZK5yzB4Y4KqfKbwJ8YsM7WK92e389MiNSNBc",
  "key19": "52jhrEwonw39CuwfbsMxnupuBVuC1XdAMmoTNfR4gBFPoEEzQ4uukSeWAQMeA2J4TdofdnwGaCSBRppCBGcGZ8ve",
  "key20": "5wNd2NLWHNAH7rdeVLAQTT888xFddcxc6ZBYxnW6pvDXXAkmEHKu215tsEyxWQYfH5P6gt4KCxqjHVAdrnY9b5kV",
  "key21": "52swEfNvqCbeBxbMffKzdqe3bnYe7gaJrwxN3mUXy9m6GhgUEAYCkrT45wUwftU16TaTmsrC4ibYrttJGYM2rk81",
  "key22": "5wprsrsnpmEfayxY5WgsmwTGdN2UP9tZY2s5d2buektBGY1UDjQerGBbcxXhxXUnxP1zWvqKS3AJm17HtztKuhuW",
  "key23": "5AFhx8XuVGtG52iUG5fHiuHpV5HgNVejdKUPLP14caQNJiEzNFjMxQXxE4Cvm6gxBzbmtXimFoK97HaVHikfpfSr",
  "key24": "3j6LigtMi3YnZSiVxJMnB6bcCZ8u2dnK2Cr94cpmEpG8LcTCH9QtjxBUCofefQwBSWrsh4jkR7BvdhTseKkzF7BH",
  "key25": "4iF5pkVW6pC3bBM8Wfw6vhG38p3HsDgTKpEvzhP2CfEbxcDGqnp1Vxgt7QfPiXsT5dNeEwNqGUzuVQRtwPrYhxLY",
  "key26": "52S2SLZepua7tthVykBd2orC56HSHsrr8U3vwTD6KCo7YeKy3mUpZidEKvBCTfyUM7y9izAUraMS48MvgcjYosD3",
  "key27": "4p5G26wvXXWMeppThxRETDzWFqPu6njVNB3c2wKT5p4ZqkrFdjG2RNVfKwfoR6vPD1hENxmtH1NyCdeXrJa3wRzu",
  "key28": "2UiF5xDo2YNs6oiwXic9YKB5aaabwfmdbfbCg4U1RRXvuWpKnRjeKjMG6bzsuz3QhWGWDNPu1qLHFBr9VG9cXBLa",
  "key29": "319fGpydukDwqwtY2hCeqnUDCTw4GpH3YMqNpqnZbMZaNz5kdemUvtTcs8R6VZ73TRDTjmNyeGwGrKERbChWp83V",
  "key30": "3EiK3kpn1uK1xYewxV8x8Gp5yH76CLqx2XTxGSbJFQ63XETfN5FLekq3zNzXv4fmbJ3VaxriKzZsrnBXnKRvm8D8",
  "key31": "4EMMLYuk9CWhSxLPVzGjtNHpJJKTb3sgLmU6pPC1JUYRLNGhfeHJzXutNhR3g8t9UDXxH322UgnmADD6CgZEgX8Y",
  "key32": "4eM5QHLgyP5AmwGK4cuGuTHRi2QykhDGc2s1F7PiQWhwfFCMob5AE9n6v4Zivyum7Xx6paBnNZ5mMuSMEqh7bSDr",
  "key33": "KXQae3JF7SJZTRvp3uJ9HfGxBThKy8nuy59LUCgHK8ooqR9ga4ZkS1RU118yKq24ZyL9M32rSNNUFFRhPqH6Svd",
  "key34": "4A7ak1xdGyhAhRP6yem2o8H2GFb6Y8xe1NQkZ6edyaMN3RE4g4gNNM2FEVBa9QwGZuKR4NwAtGsjjM9Fq6HkN5tb",
  "key35": "3Bqw4NfiKJEeevfeeRyqyB1TWW9heDM8fKYPhUsszmXejfVevQ64gjUbizsXTiHai9tjmXwAhqQwuaumkhTGZo2L",
  "key36": "yY24TNgeLCD8GPDUmqyyy8wsFMrV7FsuJAJ3WXEeyx7QY8HebtVGwg5HVETGBpthdaMjDjbdqwqfDtpS66my7CR",
  "key37": "4KaAWbmcyKrdWNTi1b7UoyH19b6iAZ9sabNwQyjt2TsHK9R1c37NfARgs35HCFeRr4zzQyTJH6HDEhSXQHAgnb1q",
  "key38": "5MdJuzvBMD72p8DwDawE6U3m2oZ9xzisMoWUGqrMEAEDEKW34SjS2NKPBw22pQyo4qvRxq1yEmr1V7Q85sYNtPQQ",
  "key39": "kX6otLcCtCX9aRrg6eBaRbXJJJYY9yQkKB92bbXufyVexfMRsRAHC89Piiu39L3L5zV1ntLf4PzYjS8WLLzUAkz",
  "key40": "2TySLhwm8MrLBqxSkxhVWwHtX2nqTAomr3TErZxG4ZcALDGvGFwvkGQQFSL5j3eTXmVLD3JS5W3SQtyaLuf95UyZ",
  "key41": "5zU2dQe8URSLu2sDwknsVdKJqC4Wz5XzY6YJkztK6ApKRXDb9huM6bsNVRv2edmSnrT9apb7qu7iDqZgaZ93guA1",
  "key42": "5vqTwM24vhzJTTxJXVsv4WxFNgbuqvmA7ZdfznxAmS5317LekWY8S3bWMU4zRqu6GywTPY9DvjVE29WH83H2NiMp",
  "key43": "5zxGQRgcww3LMHZcvQpi79h3PLc3hrSH1zwxGsvfNNM8NFqw9BNJ4bpQPRc8Cp3vXquxkkWV7ioiXoQhojnoDxon",
  "key44": "4j3ekxtNCihuSfdqZtQFvAfcoyUw2bXVqh6SGKCrXFXZtHnP11NHD7cZzGwVocCM29wuBoEhYdEsqXvLPwR66s3N",
  "key45": "Va2ieRbf4F3JQVGfiVVBDVgeXnUfp9QxHzaFsGSPDXexjR3X4ze4DP4UFs9BnZWRauynujMohbqsh4tKMiTXfhC",
  "key46": "zRWt7xcYMSuCoGU6tzphJzUz44eFWPDpXCJdUGee9bGEvCzi79hZZ2ocK67uFdgwfEqPP6Rd9uf8fKksu2muhd9",
  "key47": "5GTNj6Hg3f29C8ftrmP32pxZ4znetFFDzzXyRfkEhbu5FNJf1f6egJ3C9vxQbdDX1aurcdfFU8P7VgJDY9YyjJxZ"
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
