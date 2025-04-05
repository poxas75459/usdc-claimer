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
    "43rysYKsNMizb1dehDX26c4qudQfwkh4Ce1HYjxQcYvXcJacyEkNSDe9MHU6iazZsWz6KzV95Xfo8NNJsw19LiCD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Kb2vzpYhNBcnYhWnDsTbF1aXmksMm3ADqozcyLA6WJzubdVRXpXRYBgpdbaUE8xrQyhJmxAeuzxKe3e4XWM7VWY",
  "key1": "3FZHa1My4eG2JLELym5KWT7TVYzuy2Hx2E7NUtCtcRfjZRqyKCUATuiFieenW2YgYHUni69id7cfpxPgpDKYRr8R",
  "key2": "3dNNZop9LycyMbM12hjM6J7i3Uh8FiAM1SspmY5CgfxURyYp8YUnKQYnD4FjK92uPrfj1rUaoVCy1p35H3cxawjf",
  "key3": "5JaPuB37pxH5sL8Zwy3oyVXSZaPRB4ZVnHaCpEqMxJ1ACqtycBdK35fmpaBFEk9y9qKXwn35j8Wq8N4tsykWJXnu",
  "key4": "PRhhY1x2rmw7oF6EGkKHDmg3pGDuMuZfFA7b4hWtiW4Hrr1hoQrnD1bWACsJrZwKDet8PP9ERLYaL388M4CRQQq",
  "key5": "2H45mxHRQturBvN2jptfA8ZmhcyDf5396vFwfrtcvawXmytYXiEQWbULo328Yk8HxTxCyPqtaC8WhCZnuJNSEYoN",
  "key6": "4fuZdCEMXS1Tdcket1YDUAUopkn4xw9JWJ7kAf91PvVkRqD3zWQBP6wQr5v31B78bBz5swm8wJBCGT8vJu5B4ouH",
  "key7": "2B5tX75Jy66RDM31kAmjc6p6LQ21GHBd17z4B9VE4AaAPenar1A4kTQFHFcp5vYqjuSMAKKYmdhg6TY8cNW8v3J5",
  "key8": "4TnLBRnpM5RiDypQCfRMSKMmnG15bSMRaPRB8dZkoiSUSAxbPkYs59GoQPYrvpjmkXfNkDTV8DpBRUV6TjdB8Zzw",
  "key9": "aKPt5UGBaAqxDvqRJTT9QXaHPBk3jygbUDNh3rGYpM1fFj9yBTo7cEDbBFCPwGesqsU6D6eaK8qaVxcAef8P8Ko",
  "key10": "53HBgFEXmxDj1KZUAUPRrKoZyrSVf2tg9uHK9phzTikcgRJiMSE3TzhZM1QPWt2h7QRsZccEN6R6ncVdotNsc9Ba",
  "key11": "4yNPMFmpqwGfNyTFdgpTzCbBozN1fLQuhtJtzgfCLQJaanu7cNmncWv8pv2avGjDsNeisG6qP6c7b4hfKCNVoxJp",
  "key12": "akuYCtf99tuR6Tw6KDbdyctQ5UdC667595W9ZLnGMnJHaganW8qnW4NWr9Nxf2yVykuPJzmKGGoLwRzihVQAv3u",
  "key13": "2PDEYwT7Rqnc58LPRyEaYcXixm6DGwBPcGGaMWGSV63UXg9ucxnGE9NY7As8rLhCULhddfQZviKt31wqpwF5V4u6",
  "key14": "27AhdDv7S2kuXdFtPFZoXpxi8nZv1KZ2fgcbRm9CfSt5FfgCuRzasPWcytNm8HccyuSFaZC5yxEGiwenGQzRqV4c",
  "key15": "2rKgCFMGH1wRfoM5NYXVBAbMq7ynFA1TuhWF5akVE3We779kQSKZwtdfpfic1J9kQQMmE8phEPbc3xqyMTyyTWhj",
  "key16": "4z2vtysGBG67znbnpZFjTCfmpV7v7gYdMyttmpV7X1Hkv1i9Hq1zhu8pqFU8kUcoTPsYXT5ZwhxTCYoMfuRhtcWm",
  "key17": "3RUveXuTxD5tGDgdXziYT1975uuXXBRXoNEMqbsFueW3PXdWgbrQpe5FzQxyJCHwxUrMQr3gkfwA6xxEpRX9zeMV",
  "key18": "5xKUCkwjo5Dg82xoVmqWi6JEASHFAZ5JF9g6KH4WckkaBgqAS4gznqMCGW4vq6HJfj4mi2yYnhuy2rfUd7Z9pQTV",
  "key19": "5YZU3nZ4T54N22fcEZPAuRZPDnDFxcWHYAFgB2NJoXKsWgghwQ6254tZrnxGqpaJJJXnF8av9T2zke7cHkF4Cvo",
  "key20": "2N2nbjDeXKY6sXXR4eXftvV3gAYxU5YyVNbb6epmhMefrpwhHfnDwft6bhubud2aAirxkk5ufW1yQ265pyxN3Eqn",
  "key21": "2L22hmzdLeTsrUUgNc9EC3gp9qctw1mABSWy1L1Fn6Zo9wTeFmjGEGtiTmgnJ8VkS65iWS4r8jsWrbvXzXM2rioN",
  "key22": "4ta63PKiwHXrxaVADUZiNL6cX4dqP9YBAoTtggfteoubxxfJ6xTB1WKmHT1b4JFaWovtihgCwqa8ULf6PfMrPyT",
  "key23": "5ngYU2ygGk9g7ESaewxokMv1Dpz71mT3cMBWxRsmE4rRtLTCFHHd26uSEYLH3VdUZDR5kWzaEBwhAMELxjUtxiya",
  "key24": "8mB2fumAERXZXrqmHGmxRx9nri7mRTJ4vLN1a5H1kAQpjBaDwmbk5FZLNhRSirtLYEDsg3haNtzExvbjLuqcMvN",
  "key25": "4UidZspX65H1cNKwEEBavwouTXfUte88hu9BBRbZSTXpsG7WAxHENEKkUjuhVeWXuGRQb83v77gF8vFD752EzFkz",
  "key26": "2qrPhwpPPaqdQQghH6XnfbmSsTwgoAxLu9fGtw2uCEfJwDC3tnAvUAZRqRMbQEiH3XG7PgF3rH8wD27eRtRw3rZA",
  "key27": "55uy7t9vDQ8CWafageqr5sJ5scawF45SQTqEtedhH335GrADSbpfMPPdWoAndcug6EABobCkkHJ141j9kReSFivT",
  "key28": "fe5ByVCBzjRRFLMzNk369cYx6fyqAuZVyt9z9ydcBd589i7nDA1fVp6dBfvB9xZC5hoUL36f4kMZJisrboNdigH",
  "key29": "jCp2XTZACKCz8jnJriEPUQKUUJdYsShW7uNP4GcmtjrdMKfSrRZTQW4MdxDR39uGAjeNTMvbFVXTodMoHCexF1N",
  "key30": "3dMXaEKFTbhx7orTAZhCSA6MGNFhkwyBZD9oatagi8v5Tk3Cj5d6X7DL9ZbaVQjQb9YxqGvUDSFdkGGigzdAFa5g",
  "key31": "3U4mAcGM42aurNRYnTbUHVi5MrvB8vRjy6VXE9EX8KDZLSUeycyhhAyAbdHbCXVtw1gUmjBsjGudguExyu48j6CH",
  "key32": "Yk8GUESaaSBf78bhafdVGA8cPxgRWPutzhbH6UdB7Dnx1a145mAMKPw8Ph6exJu35ZxAHwbosdEbisvDAwPLbie",
  "key33": "3W4GvQXjHZ9JUBpyHpXWH38y4HMYJ2pkgFHcE4KEkm4HNaDY3k5v4VZN28KcqLWtAsVFfzje7ve9SYeZdMCTszpX",
  "key34": "2whbwYXLPTFwvUPvpStNVFeothYtrMjzscznuL273m5riaHZCCm6BPUdBTnEgxKV1Dbo26nBEKURAG8sxSUhr3RW",
  "key35": "6Tuxh7i2EgUUSDUavhjzf2D8GTcQ4tRDQqVk73rSsvFaLUfa1jPy55cVmMf8aVGa2a1PFgcayfFmBXbR8zUQdcF",
  "key36": "FxivyCbrYzHPx2dxpe1TGzAW2QHguTc5JKjTHmwhDodhYBjV1UjB92nS2mtjUvLAh95mQLn7ZVBSsVpeh5Fo99R",
  "key37": "3eGKaST6iGbfbr6YeYA2rrsZ4hVbD2pWSxSdnAt2eeaN7PKarywk2eFyuHqFx1NaGXv42pqRLpnwmN5YzDKjRJvh",
  "key38": "2TYCLUajKvZeNPdusAAPcQje3zDBpJeesfU8SAfisPHgJeFRwFpnjSEPPY236tbxqgovDLYUnop8FqouGSr35x5A",
  "key39": "3f5uxTRtJMdepmM3pkxsyv9EYRMuJpGwmvpFryyeWxa5ciozCN9yB1gC3b5AypGgVB1vN42uK7DZzUwGXK58SzgL",
  "key40": "5TayyjzgVUTnFUjST23JxCQTtr5aSm4MwgRu6P7px6xyyRyMpbnmDZBWmw2FoNA1JGE28ZjBmq2kwnSpVY5hq5j7",
  "key41": "3wxjKxA1vAZ8Q4JgzyNjiHw31bXQ7PLjiz9qNzqpep8MLVsAgbDBDdBLeVqXAxDrmfy5JfZwJNTs9KuGYrLFAWm9",
  "key42": "611cETbF9sALiPDbSfG4BJqio1FsKUGD8k8HhJVLDvatRmpSuMTasvoUCMGWsPomMBQQsCHASyuzaqZdNd6fSbK7",
  "key43": "48oRQcPQVcNTTXpmh4oa4uT4kJv4TyyMfs5QrmmqE1DQpKajdwmvU7jtaMgU3avhzg5GCLzYyNY7gxCAkWFngN1b",
  "key44": "29SJ5RC3zgnmWC5fFbMFcRsawSQ1XyqgSN8eqiWPMjfr2haRYgbEYcqdJYp7iRHsBFE8SVwBRTXtHDELMQiSKj6c",
  "key45": "2jbzryd2rHG8AhFQM8ybNVfQNCY6HuxBPpFCZAAT9582YT3i1J9uomC7JsSCEwAdzyEncWLDPEH6gGuSLu1Dc5Wj",
  "key46": "5JyJPD6V3rL9XY48s3S2UnEjY4mXmGw8jiEVr4mnDu9BvUXWWPoy8cVAkyhpCEJGyEGDwWA5RMPAseSA3MbxjGFz",
  "key47": "5SpUaNpSsfQ44FkEaYkJ3tizQ5GcpMb1UVACfHWMwFfvBB1hwdozA4LU7kXw8zUEXmeLHhnviMeZEiWsR9bzSpBH"
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
