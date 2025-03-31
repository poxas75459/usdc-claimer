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
    "5wA4cjZPR6QLQfjtNiuQpMSEehs2Jb7MZ79sqpg4xsQ8syRwy6byazguPbNmzosVXiY7neUEaDHtdwGWh9JL3i3k"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4oV4GY6tJ9XCTnqw9t6vC2FaB7Kmdy3p3ShuhTUQXxxDwqdwXd6L5DTzU3eBfbgk3kLQH8HmNcDCURkEtep63jdn",
  "key1": "4zJpa9hYH87fqgC6QLZsjDW8TB4XNVeysFNiS44k38uSk4T77LDbbyPwXspm4VaXYHXBLBiShk5SEwESvDL5wLVa",
  "key2": "io3xAXW2cxFDS6Z91rrvgWGriXgvYjso87Sh3nRgXYA5EhmshY5mEnsS762trR2yoXWJD9EzS32HesdRS8DEoqQ",
  "key3": "2H525tJcrQbAxGbN1zxppUpNojX5caMdhiXez5h6EssuUnCR1GVBVmd49GSM5LcMyFxs5nBNRoLCbfSgcRKr2U9E",
  "key4": "TFAVC6z6akJcYL9uEJRfbhyXEF21hTmRYoSHs6CBaonTCJhHjuCUrxK8SK1Ehyd7j8hNAZ4mbGt2RNfsy5QcTNT",
  "key5": "FrNLsZefXmQt9QaKJiWsy7g5N5Je8xqpFxwPgvj99WGtcGvrcWsCpvvd3AjWoAXezLXLRAh6WfHh3gcYeVou1yc",
  "key6": "24pPBL9qzP6SknSsUaKQDsEToLbghdpmNzWESxr3PpqANTQ5TcAnU4ETCNzzVskvz15SkPgxp7XqoqjAjMATntMv",
  "key7": "5GbuemjKyP1Zpieq2GSjBoGX4b4dMiK4KyFkFYe1ijXRAWHnzA2Bz5UMzTw6i4QYuPvJAN2vXuvhg487UqqkjhgL",
  "key8": "5EH7MgZi8SqfzHPLdpDmTEvF5bdvkpntJqapC8gYYmDut6SmSp93Y6MPSVGFHWwL1oCE2JFvevZH93mABNDtrpyL",
  "key9": "3Q321xwxN8XDEfiGJLnyu8ubbuZCJ7QydJmQiJR8SQDo6vq2BfGteyAyxmxVmsCS9QoLvkceiUuvw3CDgrzoDUUq",
  "key10": "3qZRXezjabn5esfpEbos97Vdxy4LmxMtjza4eyuhNTgyNHiLcZxR12BkQWj5YS4m479Wn397ZKiyUEXsHqPzHXLV",
  "key11": "42JM613iFEBqPUGxP44ngVgFiFR3kf6EmhSWfWKWG2MJCcg7nSzxC939TLCr28MAHjnQLCeALBVLabbmb5iGup2K",
  "key12": "7ZFa1fTV9749tphgN6zAQjQfvycsgbajNPXYtRJJB2UvWxj4DR52a8dVN4BtgaV4CAbMKscoAvq5FVR4vV4vTyj",
  "key13": "3YMgHGa1AsJrkWAaq4Z2MnnkRGFWBZMKGqiW6aRXDB2qBofuJvgMhQFJS2yFebo7aSZS8RM1jUmJVDwMvEL5itQQ",
  "key14": "2PRBAb1bMGpmdzKwjs9BEiFQ3gTTajPfYiEkbBRKpFgJeEoSoBC49w5Yjny6wjLRE8PuQF7irXfjGkTczYo9i5wT",
  "key15": "37tHjnPNBmMSzyZ2q2UZTrRLEH6S8PzgRPhjSqxvAQTCeLEfTsNmkEHvHtdW7rxLuSvG5Yz7T1MK2uLJf73PvvzY",
  "key16": "3yQeftBgfqnNtW7W4q24kNiz9cxQGUdN3dqCv6ax8Epcxq7p6XVeyTFi1Dtm5LaZCeC8ifSY4aFNMbPFozXwpRjv",
  "key17": "49vVLvcBRPKKHVgECBHpoeCQjatKQxA71SJccJ89u5fZhmAnZz5MeSLawfB2ziaSdFNCbxmcJyLoZh8MCgAdzifH",
  "key18": "5kqcVEopgzQ9pDp7yzR8MpJTRQ2RJMKCwWwovVhsj586UdqzXcQH26MBf4Yc2uG9uMwaQrgYXUDkCTNKTvvqgZrE",
  "key19": "6emH6c9VgM96vCXwZ5S5Vnd5CzEektw3Q8YT9NbFGKfitvDyXpq5rwtkQZZoxsMUq1Xn6smukwVK1rhaMzWtepB",
  "key20": "2inqTPhYnFHpNjv9ev4X7iFBAmmNHDA7QXyi5sPX5GLE4EnTNe4cfPjbqrkafkk6gTVv3mUj2Vs8LuC8fcxBjP1A",
  "key21": "3LdorJJDU8ufAqn2YD8xiYB4fnzyq6jfWRtMPgY54exgod8wce3qefTCpwpKZg5y4SRSaeBPBzFE6QZPdd38GEYw",
  "key22": "4eTJjCWe3xq5CoNTRLKcUM2WimMsiDxFLzqfZjFQVJZkGmwTbaYKyjRbKR4ByNmgXFQqbXAQkJgAHuBCktYN2QQt",
  "key23": "2MwH7nXjHuZaxMB8zYSjnFUbYM3jw15CkgYSgkVrzPTHKJ75NDCo3KxbBoaM6Ro4PnMoqb8Mxy5kqKsCVVAAkpv3",
  "key24": "K73JvmT8iJnpGQmz6tihsaVTvzaCC4QA183w1R9WswQkDUtSimYAhHtwdNCRTCUYHYp4WC7hitZQ7Mq4qohSU2m",
  "key25": "2D37yrdQwDFMAzqtp5SAj1h4RmBFA6mk6dNsufjhqcu8rGjaiqLMSUaVxJMjpkNTEyES9AAvhGJjZUc91wokAqCk",
  "key26": "1Dr5XhZfp9oyv2zihDfrqQ8WhDqBZvM5dV9aVWg3mM5oqsKrTRSdKJ84iPEv3H8fyeB2Jpj48hFPVhX7JucSu7a",
  "key27": "4M8vj9pXAnSAD2aA73zRRavjj7XpbVBTPWt2WQu6VLfVgxnu6nhpUSQiU8T7y3j9mbQsMXwRxiJY7hgSwADK2F8a",
  "key28": "368YDxZEeDdiVhcNXYbUTSKekD4gPrCTxYDLSkAsPkvB48d6RT1F5TTTnM2hAiM6GfN4NEorXqaqK5vx9N3kdvDr",
  "key29": "GkshJHpTmp8PYdbLbyjrbZAACTxbGuSNDn1CfBATYR9RLAiFDD63FxTTKA5sXkCgYLxJutr6kmWFWa1mRXVJpJS",
  "key30": "4b4zH2VBVrirPzUKCq9zLRwAJZgRgfmBKtuDxRUU6s2hW1m779wqNoWQAiQa7cw6fSR3tQygoaApoHKdQRdBh6Tq",
  "key31": "3FZ9QknfQ4nsuAXMWqRsZtCfRKF42zbcPxuXAGCdRHL878UP798pCGR9o9wjRYHmXub7Z9rgDVftwPsiQgArSXfG"
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
