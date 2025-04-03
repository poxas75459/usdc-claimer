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
    "3q7dWtwGbTwo7MThzgTCxeDwPcamac3JMjhS4WNfuwHrGxzgzfZiFY2Yf8dyfoRNygZB939FU7qRyqCm4UKumqHn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "334NNqawxGiBP3AhzRN2cii1fUJFxZVHV3NRFfZejzv8a746z94NNgPoaNYMbvj8uqfzNQsjF8SBBqNH4LaCgcDh",
  "key1": "4Hz42eZc9PuDQpp7cm8cZJ6mcWFKpvjGghUA7XcKmsEiTcAiD91oA4gRxukPWqhpANETrApSCPYLpjkvWs4YeZwS",
  "key2": "5bWDx7jMuRNnQnJ7K17sw6xMCyWr9iM4Kqb81NCZKJftzhd1zcVYD5ZHtBbvqpPeSuNbBhyyoDZScfy2N9cz5j15",
  "key3": "5GvTHNFoY3EZx7C1AM2yKyFWR7RAs99C7Pv7QyJF3wCShZxWzFjBUrDJqfK2hEhSNh7jTpoycL9bisBQPpt1e8mK",
  "key4": "c2fsbu3P8pbb33aSSDN3AwXTBRmPV1BRUWPB3rtu6CQaapr2RGVY5cP9rdWnJ2ybVoAobBPZ4VKDN4AxUjQB5x6",
  "key5": "4cLLWBQxRzA4wVAoka6NeM4j5wdN2ioKdFZo289wdYevw1nW4tCUh838uptrWWKRgCxfYi9Ct42NzUrWTFjhg7Uk",
  "key6": "44CgoxnbtT2HR9mvPXNRXCGtLLDyTSYfx5gwQQfDie1aFWeQDkobeKbpvgRqFozgpgegLMHcrWXBvuZbSX9ZUc18",
  "key7": "253ZCUeydQpYJMTDfQsgxHt4QEbKgiWp8AvxGUtFV3P1L5xwSmRNEtnAqRHEjMaDLjKsqxcZFU2KthUeKo3L6nia",
  "key8": "LAfCNbbAXUPSW8igNmEH9jkCKhV9a6aRbcSfu5B1YdmvyXinALgRX3ryXAQSec91jDExD72eogfgCppheWHi26R",
  "key9": "3L2pAKkWJtVyQbwy4ocwG4tszb6miJg7esaWUq4uEbbHo8QDmA87PvzW7MQUC1D7yq5FJWYTMBcxZvgzRs2BBhnE",
  "key10": "YtWSNXJ6vRtFo3EtoWcKsS9NBYzYAysiHpDwiRJe6YVhEZaCtyAXoFkLvnsMUoK9gL6roKoyd8Fudw8c6z9TMkw",
  "key11": "5Y7NvWzFKZo3HEeBY25XdiRgZTdRd6As67DcX34CSTqA14YWDxRvMPtCRCUDJkvXPStdySk5qyv6SYnSgZZufbxM",
  "key12": "5BfTEGrNW8rZSocqqygPYEmyXxCPmandTebh8msX1Y6KMhsjL8NznKgCfduXzocCuMiGDmg7YigGbYhKqMxUHvvS",
  "key13": "2nV4Pmv7Ze6pLjByByinxpj7nH2bLfNGRFkxmkjHxoy7DCpwPk4oTycfWjCyf64sryYHvjtkfotjk9EmUfRSiT4b",
  "key14": "3xWZ7YpRJXt3JUFFLGDGBUwM3MJ35K7ccHZtrfjh1Ty2S8sji3QGbCdCkstTF7qCTsLpkLMzg3bteQkUqfo1aPBD",
  "key15": "WpMWJAGgHWaXTKtqXTV2M2oHcTgmg8Y46Hs9zTVX2yzBZJfWDxLufZ3anWYUWKsE9A8NfWEhihspBsDfTs5DQ46",
  "key16": "gSDAzjfDPGdZA3N636E9TAGgF4W1AAxerkvhd3o7oUFQfi8nzJkskQLobdp1uMv2qpFf6WhU5sfSu5ffFtbAcmk",
  "key17": "2uEgasHhYim1hyVBXDZu3aaY99ZoD4AbDaXyN6SiJhrXiuVgG9kPuupkRYs1ysLdiyqaQ22m3Ps4YUZ8ACSoVbiX",
  "key18": "UFAHvXotTBUXTH2cjssc69ZfBW14UxAumfuwF9qeGd9dr3GmUtc3Eraee5AizYzMLDMWoZXxanZj5aLH4CBQ4yC",
  "key19": "ydXowaG41U8r1tjWf4mqk4gZW7S7AaRRfNQw3HtvxYXFP2nCpt4kqZ8iQa5JhGi4MhXkyY78TiecYPvXHG6TvUZ",
  "key20": "5wXxZmRfriBVe9kiPiK3ZQM8MFXjwEpqw1fxz8w3sxoHzdzcuaLRME8E1SEJDPiBGj2jSWr2oEGXqwfGMm8nxuFC",
  "key21": "T1AwmZyCKaTCQNfGCuHy9xEEQQWmNPzn632sP8BgtWuPwcY5Xe2bjCeP2eS8diDgqEV89GHU7RgjqyciXrQ2Q5m",
  "key22": "5WiDjm1aM7Zkce9Z9n513JsUfk3ANH2ZWSj7HqK6ArFW6Yi9e2fQgeUytmY3aoje67m4fWaXq4toxUJQVUv6ssCr",
  "key23": "oT6dc4D234i7A6viaXKBDqJQGMyLS9tVB9MoZkRsjA3RpQzCnKySJ6FFE9nStz12f1Q1PZq3JQ3dow1DVL9r8Y9",
  "key24": "26hv445yCTs5BSg2xDxHhQDjRLbGdcaWxpwnU4srJDg1dKUXhcsen2x8ahRkmBLbE6htjGuXk2MoLwkbQ1BwnxTA",
  "key25": "3Bh1H6xp3TT99wTNUcgXoqh38Yx1wAp5sENKUBtBSXBYUr6zkZ38uQXJUEV6WD9pfEHeC9eMTnbCHqy6LXAMtiso",
  "key26": "2jutdhS1kd8ZX4c3wPztNtZdjARedy7D1yyWx3ZNBDbFPcUCstPT3W43PsaMLU54PcjiE93nLnuRWEcv2Wk8T8wg",
  "key27": "3KQhpGPtnexbJWX6quZyYC2279rhcqF917dq9iCQrMjQyDDjAn5u9FaxGvkpEeeP25z2w4FymjgoZtkxedBUqjhv",
  "key28": "51fjcbKw5XFoqaNdqofeW2AYntJMhsjSgKGWudWJNCo3jTCkfdQjWDrQRAjp2GuJASNX7jiQKbc3gRj8xHK2GX1d",
  "key29": "5D5Tvtbs8rSomzHWnhuK2SugPqNVREKfNxEc5YooCrG1aYpBSChNJzb7UqZCEJjH9pkQamR9suzQJFYHBKvBM5XS",
  "key30": "3eRAeQQPQLo25Q3osskupEKAEg4AZHD5EAgiRpQiNUnUwbiKng5hVuXMTN5gnhFyhn63ocF1VXorekYEX3LAzjXn",
  "key31": "2V9DwBmJ2WEBKQBJtttsF71vdMEB8CFCX7S6KvW3UemUgxa1wbcwNTrxV9W2qQ8dHrGVHXMaL2AajHbQxAQxZE7q",
  "key32": "tZeddwN6SrD5k3fjpGhRTzWY8y8vT9BJDTHB7dQbU4BSKnteL2hZ3d5hqxFrkuPUxW2zva5jvRB41AWpvhzhSUc",
  "key33": "Bu5kvjzZZ31DvjnW7dHn7Z3arcEBopTAY1MVcmGzSNXVZSWTL1qgZKRPKVZR3Wt1pxPEBx7uVGGCKdTAJXS9tD1",
  "key34": "576RRfy3jXyKPTNGeGYkhqbm8Md3neAkBExtY5awMfgugf21YE4C6DspTKvW6K7JvKFHyvBPkaQa63V1DuVqxxiv",
  "key35": "3uF1zRSrpwRoXMVA1UJkJ7hkqUvHTvKvy6X3tXM7S1PFrdnrwJfQhmRCJMtR4ZZhsfcvX1PLsRmbcdSh74iPMqX2",
  "key36": "4ZPBP348S3motLQoAuda4JnrfRJnZMGztX9kzSFNNEAWjpvV2d9txXCnUCq5jzXs8T7qA9VUTaXdDxiyNmnx8GHx",
  "key37": "4UsiKibJkTNpfv9NxW4JKrpX7q9Ry6T1MqpZAUxeH9zx76ENt4ygZUS7B4FdiPL5sYEccK8qvQZAJqbbE2d3sihB",
  "key38": "4QENfvx7DxRaqbKrKT8EVP7LtSGPo9LiMBQqmbqXVzR7dyaUGozzAtdQ9sAfHRfoD6468YWCzaFgZBXVnyMZUGBV",
  "key39": "4ZL52BVr1HPExMmPpYuj312YRxEbGv9jcLH8FMcjNRF6szGge5TCX1kbz2TJ2maoAB2Dt2kxDGwPVUmQ435S5kzW",
  "key40": "LBGiGxVeb53111ubvAgPVVaFMkTuMkS9k2pK1hoDffi7V6KHn4U7f8X4cyJdJ4Thfmt4KGdmHRcxhLxEZ3BBRY2",
  "key41": "4d2ZZA8jDaxfNX97cpkR8sPpC4uW9WhGCWceSrYRWgj2NZMjQjcaC4EeX8CJ7cETdXsE9mHTAgbb1DXdseLtqJCj",
  "key42": "3ntv2FMwdpQyXU5CcqbhSTju9EuNLHb4WSB78XmdkM4sdfVFRJDyv91JjosAbK3QrYVVwbKCdSy5SRwA44aPugpb",
  "key43": "2tpSsMpspuxuYX2Ra1HCeR7LoLCA4m9QzUVqzQs6gshKaSWp3qVWtbhqYkA4udPZMv592tVsdvWz1TdkWp2EGnt",
  "key44": "2f195XmKCRdXHYCqfPjDAKNXNoe5U5BqdhmLM4xK2FtDmrwxbmBUr8go4yHBruBwGqcRTz1XymtHLqLrGmrxHMBo",
  "key45": "3E53GcvgTTMbHqiwzxzZXM2HXLLQXbBcpyG3JNupts69z8UxMwitCSna6rRz32BpHqQeqEEj4BV8Z4wBeR42FDKy",
  "key46": "5USLsjCDCfqqq6y6CRjzZY5TfHvGSdoC57XvNszpeHRPfwNvL3MxFiYutiiac3SzbvpuzxcqNsgKf4wVTqqP7zp8",
  "key47": "5t1YcAitRHAdmoxVTZe98B5v75gY6w1Hm3i1ujFrC5QxDzMbdnSAjtwdRmqKZCMywK3z998SkS83t1q4NnpQWdYA",
  "key48": "2t8NeqTQ19ZNkLN1dUZLAGGuAonuK7iAf2P3jR8PuXU3yfNnFKQYmfbyHPte75H6GhXpYzCXUi36xJdnQXMRxG9R"
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
