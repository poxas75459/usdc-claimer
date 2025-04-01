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
    "5XdjmZkSywKtfZ1LSWSpyAEPGqCECWcFaYLEuCduGBrXG1PEFHMKSLGZCRRcMrJdir5KtmVykmuMZPBBt5gLpQYk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4VtQJJ1e31YMWkHkhnYtFGQpNgpym6Cm7tWsoKxpU7Kvdj9PaK5rsN3wsv3HRZVadCmRGYKYCE2dH5Pd2c5gntWJ",
  "key1": "4BJzPk5kksEsptbSf3u1UmRxLi7JpRdZa3M7nTSrvfdJDWQkqX5uuUy4JQFC5aJ4ZA1tt8v7WGdvLHejqwbtb6nT",
  "key2": "358rMswBJrmF2JacBkaVzpkF52vxzHWRCBDHEbGsfR2oJEB2sDj7ApFTtNd4xrtwFXHuWtfAGDAqTLDw6y6MaFot",
  "key3": "4UrsrDNmYsP3Tx41qj3mJUdX4kRbHy57goiR8mC1J2i2bF9zcDq7sNG8p7AuPzvhmgkYHBGM9JijP3Tt5s2YUsJd",
  "key4": "5XazB78hgb1689Z7STyHrRgt42GYHXTL5mz5iVsqYWfP4vVRZVRXd9MTsL9hhbShnt7adiuXGdhAv1paGkWEFeLK",
  "key5": "8qHnXjFKXd3yETPG3EMfhuFb6Mu8s32oC5qJyRgbem23N87tZswJzhUZpS6YbRmgkVdGW67JKPWFdZmKKYeRgjP",
  "key6": "3gFdegwkjfBpDWXZruguD64DwJsAA34YpLPf8JytEDBENNYk1f7yfoeMLpdguYxWAr79AgzkMAQ3VKxMERxzENn5",
  "key7": "4ffoWqHNRmywar8V5Dk9gqLK2honW3b73jNXWEyEcYWKueiZtNis1UCo265Pf91pZ6ZNBaQUoT9c7t8hkvM865UJ",
  "key8": "mdBGd5G9nZn3z63Y1KFLZwP385martcNvVP1BLjE9Y6CVn2gAf4nPjCWgh5GA6pmUL9UKBfTKqoFQSDKsULPAcd",
  "key9": "4YxASMwe14nzCe9SA7jeKaRssSY84kMEaRawcSQq9dzWy7xStmWcCY75STwMjgUDZzwmbzH8cMV9EAoWkkgvdxo9",
  "key10": "3DwTrZ2fk8Boe4WKdhkhzAuLR7JBntKW2bguU3in6cZZGYs8iT9vbPCUaWgqrYHjv9MnWJGD7pcuWQFqne76ud5K",
  "key11": "jyaU1CHhSGDxv7ATLnBcm13HucZVFhHECworLf9VwkKjKF8K3Nm6F6jTSC54WMc1n9t9RhwSx8TzxJc5tGvuJA2",
  "key12": "31rrLccWaXaXJNJWbccGtEw1dGs2XhdJ6E9Jcaqkq7hfgZWFsLW65qPTG2ptCP8HtNwuxNHXg4QscmzJGASxMJTb",
  "key13": "4yn5pi2VNhnJr7LEBJkSVZQTeFFWos2jy6kZzmT3FrJTXe6tPekjY5BrHEsLFzJDKbdKcEbzjgYvVDsrf4A8sd9r",
  "key14": "5BNfAdqcNuhhqJLJXAURWLSzwh1Fm1j26qh6RcDuALomR7eh5U3njyurSWEgbW6X1m9MWtQdmZozQoEuo8EWfmc9",
  "key15": "3hyq6erV1B4FNmV76N3SwrmjbZ1GXEQWshJi4u49GEFzwVjrKN74SQRMV4ZiP23qRdHiYgFsBpd6t2H9Xf21RHcv",
  "key16": "oqAr2uFnY8bMvdni16pPC9bVRDWrN2YrehZXGfic8k2QaDmLvF3YRZ7HSV18swZ1Kyw2twJFEA4bVo8zjKMM3Nu",
  "key17": "62ZGbNcaaAkdwFGmnxXywax8Jk6kJ5rjTiuKwfwQCyvWSMQV133ZzED6K1WGg6EhvSrpydx2W2cLCVAGdhveZ9g4",
  "key18": "2W9suxVqfdKKPCj3vaADNETe5gzUTARAC28963XXqAutwUuc3rA7yLK7n8oLTsMMiJHMHef4N8BQUxcM4fsC1wqA",
  "key19": "3kkMVQ66KXSWmStLiMtWVFLdFo5ZiJvXPotiBmpFdB7PDV8aNRTw3A1kPrZpUWG8TRhr3R9TfwBWddcNkGFDFczi",
  "key20": "46yu44qDA4cxWAL8gHfhfLufx3W7nmNikRVjsWqqgYohzKuRJHcvgC79e8jLJSMbkBpxF6zN6JikjZ9nvPL243YT",
  "key21": "5CR894LRTf4yXuDK2dBNH1CJKCbft9Aqdd4F5p5dryhs9PM7EaSy27DHujbwCUU2B3qdPCq7Jah2QfoJip9g9Z1N",
  "key22": "jJDCuTayc9bvkn9r4Gh4Bu8AjTEonhfA7zCujmdH4CkGde2c2HPSy5gcqb6dAMyiP4FGKnkbJBRPMShDZgsN3tA",
  "key23": "36fnVrjHfhpXbrKNdkdaSth7aGhrj3YBUMJvysdjjmxevZLoR3z4Li1Q1kBe8DyifSaqYgReYF6gwsvdLX65R2dF",
  "key24": "4Du57kRgrbskBwpWsBHRKE7HLEgKyxYZVNu8V1uMG3jQvfSd4Q9SBpn1ujua7sARoLMMA3TMfUvyN4pxcMNJZBQd",
  "key25": "4m1nWm2PCbseS8qs6k4Gmzf2KyWuSbve9Yv9pFVDfcd52XRPaSvjtBWiDV6UqaCKQynYFaJgvjsCiu8kGLRno4c3",
  "key26": "5tY9xqT2ypjuinZnroYr6kk2aZ3xAaZbiyMgEaJo6fszRSMmLVRSDz2HX3xFC9FJipDocmXaDCKiQE1GtiT6myem",
  "key27": "2Tsr2m3ju4z5W8jVjHELt3YukS5df43uf8DDVR7aPpeC9Jit5xRwbq6vYtMSQx4JuSoAmrixG6xDY6kHQAwYpEPa",
  "key28": "3bypb3XQaqDUpLE84nf7tA5FJmMXEwUpXdRmZ1KKsSFm6tGaks5m5rtFx4WFMpJgfuF1oFRy4QrcuhxuYWBikV9M",
  "key29": "2Hqk37FaATomZBYAmfd4B2ivKQd8qNnchxnGQjs3D4jaQBCpbcksfMTXcDkXiuZDy6nyFjvdDJ2CLMFSHJBHan66",
  "key30": "49t6wH54F7in7YZtE3ENRNv57xcVpcWGNZ6FG1f7Z2J71EJNnvSkWYpukvkh5gJtfiKmrpaMQEhqXT23w9te3dV8",
  "key31": "5iGspn3ATgx9wh8aaQTn2kzDefyRXJSfAxpSdXXmzDhiXSkzGfnTSTZbLsq9XGkNB2zYHQbYEhDLz7mrHkEQ6dqW",
  "key32": "3JZ6XwQ6a687FoatqXjN3DPzWVgwPFAUznJkFJYA23J4MYZyPkSzf1VkPdcaSjdxo6y7hKiXJ75Xd7spzZFYamiB",
  "key33": "9ojosPxUMY9oLPSJKAB75YLHj1NmW5XHjwQNjXiAHeKRBVC1oTEuwgjVmRFuqit8Kcfau9vK3KiSg5U9F2LmPVc",
  "key34": "4VNCeyBi3RSo7RBW6usH8FfCCqHyfF75gVnLj6G1r1BDmJHXdpnTpEfVUF5kUvwkHwZe4CkXxGv1qDs1y8RzX4ro",
  "key35": "4jNchV3Zuc2wsvRQ9vyCTe3Cj4K1YjtkYvP4jsXfw3DTAj9X9Laejh7S5qpA7iXHreiSJmTQUDict9wfBo325y5A",
  "key36": "67RawcbNq2vsLA3YNVoX8uHJtyAyHPkMMKXGHYyA2ya3XRFfBwww31XRMMw9DAPFHvnnBUUVxtJAJvKiZ4ZkdbXm",
  "key37": "3oCrvqM3JSz9jFVyWZKuj4CDnBVLuFFUVDBzQWHvM4SzRdL5bj9URNmDMiBQJMX85MkQhzxDb4YgGTbfGe35fmHE",
  "key38": "5AKVZVaRTHAHKw24FvcpQm3TyrSH4dD7LED7npu1Nn6CSwokMU9zrbx62GKby4EbijYjrM9ck7wyqSUT3RfouMuw",
  "key39": "2TNNn5tSDJ1x7kuiZBHLYw8X6w5DZBqy9sP975YiptSPJKNZYXEArnNtcAaqhBmptYsoGBG8QebPhwv72mH8ZZGu",
  "key40": "t6rq3D3odXNT8u9PQgrynP8k6xNAc5HdVDDiLfLuDtY88PKGbnhExtQxraxAd5y56oxb1681QJesTNRNZyh5YnZ",
  "key41": "2ZfMpsw44e2epnVXDgKksUTzQNub37u2saDzizMkFuyggxfWf2RGttBZQBXh2q6cpSMhgk5M2yWYvZxjFnbYzQ45",
  "key42": "22kEZF7LhNpW9T29Yzuu16gSkXXfwDuRmrB6VWVZs372NcaCZVycrkTFEFnHK44TcNYxXFEvbc2gMN2bWTVnA6P1",
  "key43": "5kniN6xeiYe9aT9DdtT1PKbvB9z5Lb385ZFLKodnSh9vmM1dNxB5LWojMNRyaM9gqWbM1s2BZdtnBKXFSNdpz5vv",
  "key44": "5VEo8GBUJ8VU5KBB6Cd7h8S2esSvVqiiLC44pAL382gFRs5dW9mFnfPzmQbrKg8JSDQrgrUmgWkYgzJApWMuiHxT",
  "key45": "VX2M96SW9ZCCuGmR1CJUM2rKmcvLLGqde9toqThrR48bNoeHp3LWECtzWkXrH89pyPnj6ixDcLxP3UZW1a9CE5k",
  "key46": "2dKdJUQb2yYeFLu2pPnFKyExin9wvikU8WyYn9wfCFoD1okzePCzeg5vMb96xSjWR9MuARsEiWSVCa9aS8aJf6eU",
  "key47": "3c7DCRixjpVfBHW6QkGvEL5sDZkTBPRTqSY26sQhckcvb1PE5hEyxVngGq3SNhmH1bhsSdESHENHvDgh8u4c7Hz",
  "key48": "645fKiracb8wCUyqwtf1NbMtVdAmqodhmvvkKip2cAYF82wp45acQt5h9GhFxDvymcT5xb51oDm69SJoRhpQ8ehW"
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
