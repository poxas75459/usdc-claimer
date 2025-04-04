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
    "2S5znYWnjD8o3mMQns1dt9TTrrZp4KTFLE9HZoctszdaWuCATJerwzWeVZV9QVBRJKNDVhD4Jd4EFbwr1UHv5hkn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Ai1LVUX8BV9L2BSRxZs2NDf5gQv6ur8Ao6iTyDyi8RFq8YKZkeexjZ2hE1L9kSKGPyadCt6BZv8W9YteTvtU76c",
  "key1": "4sv1B748E4iMgC6kKxp8wMEUNWY2mppHqH5YP4wEcLn7gvzAbTsaYqQ6gVRxxrhqwwEpCi1fjgV9D7vHEcoww3Hs",
  "key2": "25oPfYgGi1Gz9Avib46o6pESkX76JmiXx2aSdVyySJjHm9bcR8DMdpK8B2Uoca7EQSKY4bmuDmg7LfQFZ7up9Nay",
  "key3": "2z7suJ422HsLNSkc6tYKb3jHZdU4T2eQwf8tShsQKmCDysD67GoysSA4oDdqnB1RQHwcNAg5DHMgEqFqmmXQrrrQ",
  "key4": "5wQ9eeEuFDDXgsJWkZnTqkQENVRA1C1ubPtZSxAyXBKr91oduuSrhdUemdPHySQCBcpvmsZ41nSootjDCow4fC1r",
  "key5": "4p4kxbSSsqDHYdhjvSV3BAGooB7kvL5dfjvS2MAkW3Me3S76Lc8is6tizba5zgjKFqbxH4xRY2Ts5zUHkxUEtMy",
  "key6": "4dwcGPDfMWHRrCcdD8tSXaBWeEdznVFwAtyqRKH8GocFccnhkWUYboxsEtGxsKYH94mAERyctSXCi3R5j9rdHftK",
  "key7": "22mAHi6MuLfhpyAM7NSsaa1XGsEukg5rGuY7gJPXWtTjsktjGxrSFaUsHN1NnKp5AVS53rTwJQkt48s1q69cKeHy",
  "key8": "3B44gw3zNUbqLXe6wAjP25TapP1Cr9XDAnnETMMmUWYM7Goc5e4Q4sXQEmnPqU3HtT7QAP8fnYanJxnQBn8HfhtC",
  "key9": "4c9LYE1ZqUPe4VMFUPcUCS7MFA9UDr7RxZHokSSuCNJ3t9vG4ibmNGDcB4dh5k4S4td5xyJHxRJ9wMALEbwsG87r",
  "key10": "4fiG5tL6cGq1AMw6Q2AHfxX9CzxBb6Mx9PMLDqxjRmNs9cd9ZdzeckF8BK4Fpn1mr7q9MFpcMYLsxN9rSRGe6hNx",
  "key11": "3HR3Ub5WXuCYHvkeTRtnRtFuZTFWNZWzUkgkbNBUCUueGTgU729HjnSgDDFyMmneY4YETwBsT5TYU5cJbYWZxbsn",
  "key12": "2LC7L8rzKgJ2HoyHDqeUjJNjzLV7JwRE4LhrHu6nCuiNPH7VUMd6eodVJR8FghFhrUfZsAjHuExQPwvJjo2p2DT5",
  "key13": "45YYK3YnPUFnxETYeHjiyAhmUaLQj2dEdXVXCNM2GkGpQz1cNuM6odXJ8xETP6f85azmt95sfSVg18e7KLGzph7C",
  "key14": "2pTJbYLvze9p4BT6cfCuKRsxmbccftzdZWpA57kyB5TbUXtC1m9LK7EK7HCekCQ3eRVSRPpZUUThcSX9FUpFHppp",
  "key15": "4PCahr7pv57p7KLrn5Qrvzr2fSAp3y9BnSBy4TLcKTPJvprAb8fvkdo9YfZDYGHgT8dn78aNsQCjRewkKBpHdQLg",
  "key16": "59ajhbXYqh4QqCbDMnw31J1hbs1MmUgb3XFaVGtn3dMTs8iBJpK3S4ipfMPhRxkTERSADCi8GRSUb8ruRvXNxZVF",
  "key17": "5zhJ1fxYmxCvpscXuWQmZ2myB9J2kZQWsM1uPPSzEDMSmPj46jeKbEJMcQCuoHHwnr6efSNM3K5UDf8FFZS5gXBt",
  "key18": "5HWFzig3Mzb7Jccro4pMLpG7UhyGkVRz5BZcwxeoH2dVnE1k6Y5Sd4GhnsQZz3BXxa4b8aNEe7no9oK7c38q34qD",
  "key19": "5A3tTDngVFCT3wRdwneELqwn6m9j9uRnsSnK5ZoTDMkqhqvKmmnMESZ5Ccf9NLuStQpzReHnkvsoWegBrradnJ9u",
  "key20": "fwbLfqc7DonUC8G3wrC4ufw9DjUBPQ5X5YRm9m4SGwpuWqGbHwyhfE3YQGU2otNKVkZCBCyFruQymqZL1Szed1U",
  "key21": "4KKS8XRy6NCaRVMBmC8vDmyawa1r5XkGowCJYu3WnvK4h6DrQqpTTbZAqcDv3yx4Lt7NRq7eNFJoPEshVy7yTTVW",
  "key22": "4VVSZMqaihG5prfsGTmreoHYYMCQKPV4K8HeF855ya5g7EjXLFi2Nn4NFxWuR7biRGLdMQvkhaXi5MSiZgQKc5Ze",
  "key23": "Yy9Bo6URLEoQHYrqLfCY1ag5h9nyDst2nd8G3tVMofy7f3MUrcqG5SUguqgx5VJZZ7hbwfmEw4mPcBkZfAbzX1M",
  "key24": "4CRLZ7oUaK3pkrUgW2pWkaV1DFFDiuUZJYKX1wgpGVY11GhPf6N4G79bNcferA5CL3gVCegcXGTS8a9nxBiVbcWa",
  "key25": "5RTvPVhyk9KJvaRDuJ9Si3rmnJ4WbQU1GzYVeu9yNseXNu6AWxMyXRmokq399NvApruYj5WyJqkPUD4U84x9gN1H",
  "key26": "2pcmJRKy8J9VcM3rhTKpzTzZpCsxvKRcdtMNkZR67KRF1c6f4q1kqduiUE3VWHvZndQAgwPBP4n9MjiLNT6FzWSu",
  "key27": "5KD7puGG9Et8hNwHyeCQXk1RTe2vRtSPxiDKFyQXt36F5eA37A6GcYdfYxfquqHRuzUMwLssfhzTvhgYLCjbgPXj",
  "key28": "36Z37x1AjmS33pzZf6SmksrTs32zCD7UbPtzjtZTx1qKNsiye9FyFD4u9a1348fyUwJhnCtN3gHfKjSzjWZLu6ix",
  "key29": "i6h9PJkzWNroMQzhYKSsQA7ZDc7eLni643PNXyFVb7KsbwdYRZ8GExhq8P6CTwP3KeBTDTBg6GB2sFcVXyfdR8D",
  "key30": "3koTV5idR6p9vjcUXATf58656e6NsP6iwuE6cZ4u1qA345vbrgpvrSwMU2tHoSxKPxTPfEp47Y1XzAQqh6UkxxK1",
  "key31": "4RCC6Bw3Jmrjjux9m9nVojXUVEC3NTC4F4rcftiPnFTjN88UoKUTXVMfW6tAQh4jAETgCixAbvxDdnYdQEaT9aoA",
  "key32": "2jahS1rvHoDDKD951AQZSKm3Q4pHqjaErQjGBjhse89h6DsiEKoN2aieY3696MQBsrTxry9JYaTmfvxmVgfeqd97",
  "key33": "2PbebCRWkQ3NrQ9xiVePsJmSA8wcZ5GoQ9smq3ajj1UAZDFLwRuyzTDuzoukmWTamw7wMTdPJMBv79JUhhpsuBx3",
  "key34": "4J8PWYE23yHe7gbPpfmy6impzfE6jRa5B3XxGEjPhKzz71CyAyrjfMK333XHxRLpFLP54Bf3vbAqk9Qv9mY12QUg",
  "key35": "2mimnsHtCMyJYYRHSdBe55Ns1KU2JKdoko2BxwGNuVFyf4b9RCoAT6WgpgnCedQXHNbcfj3QnnJLuu12K3DjpZjv",
  "key36": "2FKEQnrM3jAPzaRuGijKZgZLNQAcerweb3iNgL9G8r8GnGmAFAaZifu5rRi3tXzhS2QdJMeQf9T1Qmb9Weiu4yuX",
  "key37": "v1wYJ2rXrP1LQq8qzbBBpUxBJNEj4UPRWuQ93uC35PLaR7Hf7NXNx5FvjtqNqiSJWuQCqTrY5mjjtUU4A8JNDF7",
  "key38": "Px8cZ23e8BEnkVvEyLg985jqXpV8YBr1WdWTzCVqnDVGUyrZYR7iXQtGqqFATReU29yL8u6n5nC8xxgtskv9Tnw",
  "key39": "5wyoE1FppchqamPZpX4viJRkT6XYrcHe2nujcBmsUP39HpaTkmBh3y2wYi4jNKGEPX4EDFMVXsB41bQX37kjYqxi",
  "key40": "2CEx7EnG64Cv2uCRdWvTSrjr1YriBzii35ALAnps6MoqHbHVGjagWo5yNscBrjRCFTpL2AyuYXuVDZ8aMpyicrm",
  "key41": "udxgusdPVbBZRmA1vHhuWYv8mefeNNZovGjpGwPyw16bgFWHTN9tq8319VKYyHUYt7JfxFwAWVmjYLgEhFeXXBy"
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
