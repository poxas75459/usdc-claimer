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
    "5igRg5YtNdz9n63JECPrAArtddBzAaUisemfuPkvfHvG8sgqeMtQ9ZJv7CzqC2CYiq1EAMcHqBSnra7iwHiA8Zdo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Cz8641rixxjaF9JunyqxFK3pjzeZssTa9hswXAhrDRj63RafnqBrdEpiKKqwTxx7yQa7mDJr9TkFtHzgaKmwQ8S",
  "key1": "sLhEjJ6uM4VF8gMZD5AEE3nAQxtpNAxkzntSiUYbnxccZubaYEVmRafKr6QbbjcBnrKtLf2R3N8LjyX6QmYi7vU",
  "key2": "2RPifSMswPkozN9WKRkSCg9KLNNtKNaagDYFMH1V55V3ahXuUTCN7wrqVBFB3Yjei2Rq12pJ8VqDQjQeXb52jVcV",
  "key3": "3Aiq5DXmFvLQP4i5wQVjSYrgwGmnoiRPjnCs3Y9zrtjZcnjQZfPTKhqmUYnMwtkES1DXap6v4itb21dWwLTSY65f",
  "key4": "7ySu3XGbL5H51M1PjVEujtgHz5r8B1khvBF17xYkv8fooKyT2QvsShBc4S1nx6zpytD9vyggYzdTmL8vMuacSsC",
  "key5": "UWCUXNtdJmHb4V84S87mPxhSg2suT8J8kMeSHmxvB16dAkfT4iaPsu75Q6Fd3w7EJwHdP3MXNnmhYQL7zKUHUec",
  "key6": "5EBk2iqjPVs6sZt3qAaRpk98ywEsgMtmg3aWJsdTgMDafttGU9qw3eBkBmibCToF2kFrkskiosyysq8m57UXqjzJ",
  "key7": "58tpon2uFjN55jC7MgVKMo5nEA3i2eDwPNYvHe9hQd2QZiUUwaZztkVit6v1HWVKvy6yB788tX7qqGFcZEQHsFq9",
  "key8": "uMEY8CATW7Vh7uCgK4FTqUVBURo6xf2CExiKSfzNFNfn62mjsg4PX1H6Hqu5yyqc7mHbhpTANNkpiE5hZVCA4Kq",
  "key9": "6vnod5E4RLd744uwQHzb6nyvzP9XxNk1tKnhDVYS4LoPbL62A7iTe4shYkNFAYqfed7F3CyQtp8RG5RRwBjtkkW",
  "key10": "3BNQBQjowKsYzMFr9eDe5nt34sUnV1ZNFLwkiVjhe2VcqWEvLuZ7ooiNxiPTc483KTE4H9uFrvFj6bwdfN1wjFge",
  "key11": "2HPi1b6yL68xmvKKMkbZ5hbnxjjmRnguUKS8LiUMGBEJapLLN53mX3quuVbC4ZUyuL4rbqDqyczBKoLgtSijeW2e",
  "key12": "2VkjdMu9QoFtZtoxHVGNffE6dJ6GDggaUDW7bayvY5yh3YaQFVrZmnZqMzW5UdGJKKWUfVTpePRbMLJ6xzoqkN9K",
  "key13": "4G5PAtJfqwv3Rx24yGxWrawHySGPaxvca1FiQFfX5wxkbNH8BBS62rBxhd4yntK95xMmrff1Taz3bq2MVb16fhwg",
  "key14": "DMfpf2k4ceiFJ68axQM8rK7E6VpZkVrCneYoyoGdchxNMxwgeNdcNBeyEKzTUY3J9vdsgwm57icubsJwx6U8xcS",
  "key15": "3xQckN7KVsoeuTT9jzWEDeeyiftvEqupcHG6L7yuEzJMmFs6qsrH8eR9Xj4Pwge9d7F3U27TENhLoNVzj1T2Hz3r",
  "key16": "77PvtyHKJLWRFFvM8rhm6zktDrc5zBDwygSS3f1cVsovmiMRYzn1SFJUpgs3aDc5VxkqNb13TXWxhwwZFQ4As3k",
  "key17": "5RNfFT87c4YhWNqTS15pWUDXX7e3yUFJFKamZ3jRxNrRQoChDP6hQ1Z8HMWTMi1rbTp463z43uTRXw2zPYATS6qr",
  "key18": "2AGsRfUj11jRMDmYy9t7dMKqHVFr2YSKou7KQbwStXvDzsyeRqbueuH49DzJBH1ZDFkgBeCKKkiRJ3oXtvGJAeq5",
  "key19": "3kgm6q8zn6GsbWzT9R3XKBuBpNPATmecXUn3QL1FrtyES9s7BRFhUUreXM3EKfokr3R8RNPx1UuYHbRjPzNyWGaK",
  "key20": "5MZAzriAS7w6jD7tPwWGPKLRsiNTJ1PbkUWD6uoBT1SZH9Q41gGGoMTAgUVn2os7eUafzyFPkh17RXLLvFyzSvez",
  "key21": "2QXamrpMKkduKGhGtSMjQsJ5rTAFJdvCHmhhpwpRt7b1k7vyhkafo9W3qxRNztLoDwHHboiJ9XSyUosfEK4S6peR",
  "key22": "5LZgjutZpEbiWTGES8iHzLLNCD9NYgiGy67tuAsSmpnttoxMzftkCsMQJcfCspQxwP51XakbPgXHz3ozLpaZDLqj",
  "key23": "4edgJYkRcs8wwEBxQyh4cKzVoKyw1jJqjDZmy8TejobGyyAhztiaryAXvtt9HV7fVhRq175jBSrqpWjKqRG1YGfj",
  "key24": "5RkCRQxbfv258q64QtG63p5JenfoL8NKbjZ2tB4yrcWoREGNoQk6XxkmbqqmUNyfnX1CSchF92SsMu1N5edbrb3D",
  "key25": "2Ccv6WDwjh3KSekny8JX1CibZkn1R9tcixwrQsRtrFhjjjJfbbNgLBEyJuWaaNjsNAF9szx4WjcQQt1uRGUsdVLH",
  "key26": "3ic36EXVZZiuiRTv6tjYNz3PvpEH2FLhdNAz5vMku7mUM69hmKvRmm9wz4tW3YSARcjjzHphkxYX7wfh8eYVzHH",
  "key27": "2HvVxuMLQcmqd27PgQb5r57keqBF2m6eBDHFctdYEVgWz5qTwnu7g7FqniLpQoKG4oNHTJd9mCvtqi4Ww57Spe8a",
  "key28": "4cwnC9roBRX87za4r8qkoAwfNhzgsdeSuCwx5xYXQncHYSFX6Pf4MzAMpfjr3M1L19Hc53qs3uef6Ua747woFPzF",
  "key29": "BMCBvBzqrG6PXwGsAv9p2YAzRUB8cuXTYahhcUPgaErHoWMy4dLvgCERij3psFLkhAdQhXfjYLfxh4qrNEa6uac",
  "key30": "5diH4yqnBfwTtu25j8wCsEZ3yLCbJzzU5bzk4uCNgiU4x1ovVEJ8fBv7pZTmCbFTRuhiMpAxuc56vHzXySuW798z",
  "key31": "4G5syaE97xNC7XEmNrUbq13m1CGm7YqWPL9dBCiyzHFGTgPzRBRXj42tMG8MpmZn8PuGxwtYW2x89mj6GWa3NERX",
  "key32": "5fqp346smFM95vmTEbHneWSJkNYjHyuSEohqhNCCmTp3ojvkY4GrAevmvujroZig6GCiFXvvxfMwiZmpr2xdcwUg"
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
