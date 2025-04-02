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
    "BDjn8TkC3PKwaqwWhKr1ZkgZT73m5ZmRvWEDMiXkYAWhZxixP4fFdfoziDvv9bMUsE5dN9nEEH86zdteNQXDDaV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59WHYnB13aWqZEg1U6AsdDHMjozCBGrG5XKdsWsZPqBjRjT2xvqzMh99FVgacZruhZBdjA9eJxEbv2KPRMpCwxJY",
  "key1": "3EFxQuWceekFAidiy14iqNbpgqjHu9yqQcU9HpiSW675F264VuZc4qf9Lauxnr9eLd2t83syvJM5MiPn19pPrSgy",
  "key2": "2EzX5naj5cbPxBsMrmjg3y7FLVbAMPcBuiF6ngriGGh7b8mCeqvVGdUYzL6Jck4vBhvBDkZGzkXXavygd3ZDrD9w",
  "key3": "2h9nQc69NHEWyc37o5PfynFnJ9BX7DPtZyQ1mdGCsktbWcFbVmg5GfmXSt8vu1ugNZJRKvNJggqUS55es1nkMNEH",
  "key4": "3B4GVQFrHpuwp6jYMpqxnxqPqynaqvGNYYeBw6wuGFzvtFQbGVxwcifPmjwYjjEQzpiwzfmwi4CEBgQr6uBcEZt6",
  "key5": "3fBoGVEVCpKhfw5sWejp7p3vJRoCja7nuQd8K11apkUwqeh9jj4QkqyxAuAqFJ2M2kjfr1izcM1sUDRn1UvsqDdh",
  "key6": "4icWTssJ59n2ZkGatCCENtJw142k4km5dDoMnMBQiRmd9GY523NcCgDiByXmrz5B1Cw13aKA6noTZrg12yLmiEYr",
  "key7": "5pqyys9pybYfYMkrKRjxqjoj2FYoG86MmgCPXbMddcNik5B5c8W3v7T3guAfxyVGnvTLnwoNFwfV9MQTHhZEt17e",
  "key8": "5METLQnxXjmfRAefABwH1fUSrZ4UKt38SexxVymGXgXFpjnu7GYfYQayQcgTeiVrrUBXi6DVjEgYxayFjFwkF2XE",
  "key9": "4YwTLG6265qgTEw7Vz8vy7BoTT9NyVwXK4qziDPj7rPD57FV32gGmgmtBSkFQCh2hhk6Wu3aWiEH5vbt8fcXAnmP",
  "key10": "2Wft3UCLar7gxdErwFdqNUPp86Ci4jWmo1WxaZLuJk8Y1W2xLLfGfCPfixFVafiCX81vtkcMVzX3ZmfMeaZ79b3p",
  "key11": "2MFHHLg5EbtX7riKbzQEuuCykMtQxisJEP9uWLmmhRFTi8yR357U8WkaPV7bBhP5tLXm5qN5d82nwYWqChpsUdCf",
  "key12": "4WN6Kagj3S1mbQKctwkLjGWsssbe7kVzAu1a3Q7g88KpuZN4CQphJwh5CV3FaCWZ3JYVgfzyKDGzbrFf8c1fDKH1",
  "key13": "5pympjK3fCmXNgQtH7pEAeaeTZuCxZH9Q5L7GaSYEbpA7J8ckmB7r5rk4wa8azbq8Mz3KLkPxJUaP8GE7pY5iiXo",
  "key14": "3WtGLGMn8Pg699UVgfwwk2rJ1czskkKhoDgHVMu11QEtFh7j51YrMaHAFhJLPEP4jm61PY1ab2YspjmaxT3kgQ7v",
  "key15": "4jieiYNqwekXGe3ARoUywvg1Wax5cReg69dyfMPZaiXWLQ3BxTJf6dvdvgXUydFbWdzUMJLej6DpUYEYsHA6Lcdk",
  "key16": "4p366EGsUuYyzEqKFusfHHCzLUH8Qa3tR9i7gV1wW4KT2S7ZeYFcm7Bu5CdJx1r6FhfVjRyDfPSaS81rv9AXxzna",
  "key17": "3bxxRxDuwD7oGp9oJgs5oSk3LGY4vJVN788v5wszYFeta6RKpt6VWkTKdAUUoqbWaKkkSjgXUDWB2rDjfnfxJL8A",
  "key18": "qH5if9uJ3HsD74HBsZVpcbF2LUuTjuvkmmV9AJVtcbumKEAsrTKYGy3RiXAyFWwP2NNPxjHoW9HhLPrW5h7e9MY",
  "key19": "2UPQ3krjzMRFZLvjKguHTW72RSsobNMEy2bYSHTTzwqHPjY7wTV41Kf7tmbdqCg3fUu9Yy26bTYhNkJgRx25h49s",
  "key20": "xS4Vrserza7sFCeST99ke5WJst18sd67r1hUv7AWQmPLUfa9waXNNSpEWTZsRmrqHsZvBkxpJrwBoByWSYdY6e9",
  "key21": "4QADxixPTUCeq9NgRuafPAbXkY4KAyNqCbKD381icLNLGNHXwR1C4KRKKzXMDH3U942QRYePpRpgsnDRKcu8BvaV",
  "key22": "5ACAQXCSXvwkD66t6eAbJtW9GAjajRkH1Fh3LXpvrK6tAAmPsQjAkhzRVYyUZULSGrtVRVB44R1Y3ePrbA9KZyx2",
  "key23": "61szSF6XLdwkyTcjhSuuvWfJwpP1ayfVAkd5X8xBhV5Q4cwHeyuHTkeDbvKdTtBT1BuLNsNM5PvV3YfiNv46L8yQ",
  "key24": "42hFWbLJKheg3GqYijMTdznhSqtk8n9SqWW54NtNJqD6zP8zC5tY62gH2ePB7xajyYFVUasRTQYYPS27vB6EKXe1",
  "key25": "ugG7iXcqfZbYVXNowyfSDjo4MiyNYEnNsUSrmxsQ4M9rJeuoRK1EbmeVL99W5EzGCf5JsAJHTRAWA2RydGHJwNT",
  "key26": "2VPQ9LzADB56sybUo3fTTw811CbmuR84Xq9mDW5pajbzVzGNLL3MhGR5ASxVtPpED4cjo9J2nhsZfgEGca63sURL",
  "key27": "2pmzCPHiouRZ2mJpNU1pyDo7w1W7SgPVhsQxVpzwu2FpSU9APzLztoycA8B7wRWY9XQMke9undiFwu6EE7m8xLiL",
  "key28": "PnFemKp3MqEoZmy2NQKmB94rhhJ9ravCkwwfDbqxShRj559aLfxRaBceXD4aRveAopwtWLrbx1FooE5cEP5wqip",
  "key29": "5ydEj3yeSCJ8ujd55dWn4uUuo7Au56ycUphiLJhLFmUiKtNxTS1kqPcZeMYzgwwmDJvnz3AUFynXqEKQfkJxCJXn",
  "key30": "56AUn882QzywsoqCik5ysXUndFWM52EBe3fKUBVfRBYd6Xf6G2pxM5gzWXrnCjGy4Bjk4tXzdre97vpnnHbW4qm3",
  "key31": "2n2MRCncpSNp1b4xRiAJu7qFVojazuWH3e8LbdtbJxG1mPz6hQVbumokoa3QCDfdGyuXKqqTUHgNrHBtpTM6Lcag",
  "key32": "4jUKRmbgvrDzefLSgRHsm31y6rn1xBU4uzJXCQtcvL1XawcLeB2dioFPrvQA6fsigYJFxkYQ6AS76rS7SaaNHt7q",
  "key33": "39WwMNrmYaz5nYUw4cHUgxS1nv4ttKoredQ2fF4YUGwbJLH8Rr2ostrVmS7wWi2YhW8QkY3eZupAf592uRYuZYxp",
  "key34": "2U9Fsqtitc2HokqG1pGP6KcS2KgMhuDiytxALgSHU6jxFKnw2wR7NVBW7JkrTgMXab2CjgXdQbwwCiSFrxR4DeV9",
  "key35": "oxF29CRdGYwXKaqjfwSjg637jKeWt5y6dUZrhKqnLrH5GbtXJq8ENUZTKoroBQpYFEkJGBBChbBBrEBLrCZQL5F",
  "key36": "5fMStP4j2qDmSuseSaUmQjUK6VxsaST5LC9Tn8r9GCqd9z2ewYiRJQW1mAy4q7xi6ddGVF9CfHz7ywcX4YJwrRJe",
  "key37": "5Xt7KL9Rr7qLh1mQSF5eywK9WqvMAzN7kQS32fzpRet9A6Kywkdohgpi4MTKCz7yh8ZgXWAJ5jpZUaf2bv5DU9KC",
  "key38": "4fZvcpQLfqWdoF3LZKohoNNAeuHEJ49SWF7KTyNttJGKFEh9Jjbf17NbuTZosw3xiSGm14wdsN1Q9GkYZLQksD4g",
  "key39": "2WesM8FyppuZyCeczL5yuSw3d34CV8QXgq1ta25BqUjyZEcSSmC51co18ZmwxwzShHyqqHdxWQrEx4arnavhBaW9",
  "key40": "oRvzH9tnQw6ioZBTFPc7zSXXYB4ANZZ66g2af5fJBuTWYnV1rFwnK1a2kK2emppNKMGMBivDf1sHtHMMEy53gSv",
  "key41": "578SGqbm2oUHMmkLhnFCejUKYDooTMq9f3UZpL6osvHWRgd6aQvPSsDSTBC6ipfDCGKPJGeoPPNZyVFk5Sw9zGQP",
  "key42": "2VX8te12dJ59cm7y8gLvXgh2TLgSFftiJx2Tf53q8oZM5V8GzTYyY22DjE3whrskr3fYyjCQRW1x2bXkkmxtV5eb",
  "key43": "4uCMEFJNoWwGmaaii5cojdQ1DD1FKBndQren8NUt574t2E8ZXDcv4GmoWF7kt89GbHfNUXp77qYSvHHQ4P4HuRoA",
  "key44": "4gBEVWyT3Z3eCvWAdTUQiwWZxi12pG5yTNKew2Sy7xFB31pfbLxQZguxTvfwjGmXZJcUq3fipz65CVmH5rEJwV97",
  "key45": "51ML5VaAtWmCsSpcmTNce3F5WqephmCcVdusSztxw7xsnTGzcTWpB9FCDoQoZxEVJ9gktGkohLrLK9zLwdV38PSw",
  "key46": "15rMXHGt8p5Y4sV9KAr4GUKzKp1ZRVTWBEf7p1QzKY6d9LPK8syeiuutYL4fsYDHxKSextv2Uq8775udddMqN2B",
  "key47": "2NNJXvxVSz3JeBLcuMKyEsDpdjpvxvRqNWHQxfEUvL5VHDJxqqPfPgxJWhLf6m8DiAJ93tWXfFPep7FUN4u4Nf3o",
  "key48": "6b1QusS1JqJ3PrV4Egw8sbE3ucQbpeHKC1rfyrHbk8a3Kmz85AfXHbx4XikLkzq4BzwxDB4huD4Bc5mKSVWrpaU"
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
