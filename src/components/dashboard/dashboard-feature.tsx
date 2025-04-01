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
    "2RofaTzitguXSkvq48w2zVmUtWeC5MLT6duVn8yytPtafktvxWRekxutRc5xYcSFTcZodaPvg2LiVYSZ9EAYwa2W"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2NFAwHwXnYmpyvwUb4wxZuxn9P3gpTW2sPbr2mMTQNcZd5baB5yASFy9wPwaNffd8r1TntB1YBuoeihtzRLBPZY2",
  "key1": "61TFFPCKQ664yLUi7BHgQ4pSHatcna3bnAFdJZMxYY7CMYrBC3zk6cy7YFREqaEPbzGsEHR6Aun9eBsZ3RxanrTK",
  "key2": "5dL71GYxhGGrCg8t2F5W2YaZajSw9My7w8hzjGLVWXSFVK1ebAAqBFzQjFKQKkgjaHfg6Ehsq5jjos1WHuvSnsDc",
  "key3": "24jXsKKJ8ANmbwtrpHuMi8jGT3GdCzsLTraR3MKUhLYtWGcdeRxZLpiTQsZZma3usqHHXQB9id5AtRtU51vW1aoj",
  "key4": "3vuURmHMW1gFRm4MBEkkyPZ286YM5G3ASZs5Ewk1hQJHprrerStLhvthCK47UpCWAf8Tr2fWn8kBQwpxZynawFkd",
  "key5": "5H9xXkVSUxtZtPh6iwxR8qP5wUEh4UUbS2V3vidswBsavkRVvSCf3jkddTpi2z1EyCQAVd2Lc3sEabc7au4CAsyh",
  "key6": "5CY4gMjeMMt2vQxQMnxD5FReZ6vdCygqvnRHCRaVTpD7fZPHNNmdRPMqgVvjLGjwiXY4LrLfyCwFy5jAREYknniY",
  "key7": "4TYeDR9uiUi9RLBs73FrxEpZJYuKy7KJA1quoTGyWeVDc8aMSnJPbCjkNHJMSXM7VDngMJij1Veesud9EWYTSvSS",
  "key8": "2q5idxRciY65AeprCpuF3jVxB8jwiX3XTrTWmeYad7aSaKSpXHBbauKmHxxLrriZWTBoy4r2fQUPyWsutfLdjRLw",
  "key9": "pGxJRJhAs1PJFyyWqbpkwMpBQA8udpMca7RU2Nn1aUVYc9jq4SNhm7PuPFxdD1pjDqGt3HVxC2iDyW1w7MtpyWg",
  "key10": "2KKZw8jjoJX3cFYUdPGcNWgWnmauFhRx58mafw9qxTi6MEikF2z7NWuct9fiBWJsLNfdk5mH3KgMmy1VKmneEXt7",
  "key11": "5qgeWQRK24vyhCPB7d1ZfRSsrxdjzRM5EqizvBnnomNZXGT3vAz2Egw9L4y6NGWzg2YDg5HK9zHNuMy2j2xzAe7T",
  "key12": "2YaPXoJoTV3hPq5JkHaG8kQBLV47dJwkmEsAXUYtKv2xfYK212fXMHSBXgMSto8jGDoMV1DUqksSN8TpUi2M4JZh",
  "key13": "3HtAJEC7YD6WgJt4AWa4tzCLh1DvwqCAR9W2ombwjjQf4gzPbDwv3BnCP5Yy6QgDNuLPANaAzi47Xk5zX94e4B87",
  "key14": "5yiZ2PoB7Rv8jkD15E9RQdSAsdKwkbbsspaGysgrnLwXBcebS8VUJPkVXnKJMEhSRCSPiH7jw43Ppq79hcmW3Uov",
  "key15": "3Ru5T4aJokyzEBxJ2MGzJL3xxn4d21BqCBXLbusFRuvFvQMN2zmJD4Fi2KMU1tk5r5GZbubw5qnGS2T1UchRieNQ",
  "key16": "2hE4qsHYtTmbqZEpZavpmCZ9Zi6DbAdSnEg4FUdb6r6zJgt396WMgxwZtE2c7KuDEFoUqvURTwmYsoaUgH7FkUsv",
  "key17": "2Y2Vvk8HxZDpVMcXTsExcubPajDVgBEUp28nwQ3b1H4cGRZM8gdNZ1RBDzcByvHc3fLjG9QVDpdHAh9G44RX48WA",
  "key18": "517ougp2qsvbhJEiGGW4enzT6NqetasE71pYfwf2iLqV5BYBdtnLKzat8ekGue5Le9YN72vubmGKi7ePrkXd5dKc",
  "key19": "3UcjQK7JiYm2tUyNrETQD6sPrQgziCi8ghY3WYrGd5YX83RjnJC2aaAEPjucqTdsFTcdyyo1v1dhstcwP7DfmUh1",
  "key20": "eb4Zr8MmC4ZWYT6HZJHhyxDqELDAjzVwmKNpj4FWGUmzJL31ESTRLE7zPZR6CrYyWUKYYoEnXmGPMv3v5Z7hMHm",
  "key21": "3RWE9jcuQPKakQFBGZeZbkpcvbycVxt6L2FtXrcw1JXpp71FveTh3JgsVF9AxbaBssN2ETgU6fmGwWpuQALRq9pz",
  "key22": "3wSzoxahbqamLpS212qJjq9P2ySdksr5F2SvJF1SVVqxHBJjVbkYMQvEca57qEVewknGMwXpJZnhB37DoAw9Pcu5",
  "key23": "5DcRnGJXAzEgvRyqs8S3jG5bk365W8rZiPLXPQ28JQqgeh96NH8GaswuKnWE8bygwpJ4Ca9gK67c6VLFwooWr8Vo",
  "key24": "2PNLUd7tvbAFwbtGVFpnbBKb6p7tUk6oWTuXYK6sDwzD84eenape7HPKZccBhHWqsaKCNEo6eXcocpy2aHaarNAL",
  "key25": "5UFoE3dNywDUZB71AEUbTfA1yoaP7oKQKqpoDSDtR1TAxbbzz2cesnimnk2LZzFHHtiaApRYCtkrrbpghjY9NgeX",
  "key26": "44po6YmcPQVGqP1YNJbn3BHzAKNcT6522Dwi1ZtPRvGe5eMr1LjD1imgYp3pSzirE1wrPdEiwBHEHqPwpGDb5oX1",
  "key27": "yyHq2GVXY3m8X17yV78uNJkzZoWum5oeDiuN41xqoFaMpXF44MQJppqKQdv1MV8CUqCTvxU8suMkC2iK8BH7z5A",
  "key28": "3hXAWnYQpbNYkF2A18zPg7CzvppZEmQh7TWVvzEcgWot8RGgJnuRrjj8yDGPdzCVUYd4SeyMyZWe47ZoJSSMRN5Y",
  "key29": "5QBiaFi6i8gBs6i8BvXS4QDz1bzecoR6UMy6tNmy6qR5yg7LkiX2gMvuLkpV3zZ76jkna1Srnby9uSjuX8qUoHci",
  "key30": "4ovCUCP2j2PMuhUjjKt8wxQnQkgZjRMBSC3XH4UEp43hisZMPZRVpy8Z1o5Xb55BtLpAUC7GfbH18v74NJuyfRBT",
  "key31": "31SuaoCAvbDg7S4ajgYoFZDfPLcVi66trijDTFTeF11skwKzXBGZs3CjCNYr9NMqZtzv9hTikY9qRnXsNbgSeyQb",
  "key32": "goB3QNzAxK7kQMVVh35aZbBkYSvM3umNX31VWMmfAzC6rZaUx5Veoy5jWGq4EvJZtRDmoC68Nd9fce2oeHVve7D",
  "key33": "atCsyk1eG22eSxryX5g5FFcVvZtin4kt6sqofjPAPjXJKhFCyVWBWjLu11LGgP8QqDCMnowyy5oeAoSJKVnsZUT",
  "key34": "2Y68J79CPUwTimxhGH2sjX7Rk9HLo7jyd9XgUQYvoYjY4rkuYtuKVt5XTMQZbpPbb8H64H7fFHkp559ngswKCRzE",
  "key35": "5a43Um28mUZEcFZYQFXTMJpxAVEqXEwjgLNkJXEHxqo5oGJokpx9hVA6NTXzaGV7d7rCeJ2DeQZebxdytBXBYdsm",
  "key36": "27Ji6pbjfp6AKcZLru7NE5Es4qpeTdxJS2ZErjsjskmZWgYSjbAq51UfLxnXSREbmEoowW49EGnmtd2NeWuT8yRP",
  "key37": "2qinnZ7CGLB3AhVYVg1TBZJd2ZheyjmPE65A1RXTnBqS8xskzD3awRW94KWypFT722bVXLuoydb2kCmvohc5vdUE",
  "key38": "3xkNcGpow36GxtG7gvJqiSqGB6mvSxCyVARHq9fQ2AJU8tCikxV5KZBPSw31fa3UZ9YGCoD12gUu7fyEBMjeGLqJ",
  "key39": "4hWPKmBTK6muTUR5UAgot5LmTsqttWi5o6aa8132EXCFeaMbiuRqaZYnCSVfHeE8c6vQASKwdtMgWQ6vGZxQMQyU",
  "key40": "53ySTgdL8dFNKsep16HCjkLWqWLWgwm4RPR7kgL56iHuptRAK3CZ5XvpBYXzX1rLNuTqF1vfs7L47orGm49dasg3"
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
