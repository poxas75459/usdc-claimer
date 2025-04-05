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
    "38PRCBSQzwryrrb9FFNBgBB6FFxKWARfM6gD3h7wRrnUFNNHAPtFULe8UqTtk6beSMZb94e4Mm8wqf3aaTFu8num"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5uKqa98ez5XL92r1RXzbzMn2ptpchqqmtgzUf34qpKbd6s2WdDdne3WsD64bwboCiZfeHnGhPCCq9v22YkUd9e6W",
  "key1": "2FkLxZ5dF9UxXQSvXc6hzf4iMjHkm1obdCkXQhd7mjC6tdWdfu8n4KK8SUVTm12kLEWux14tvJTY2X1wReqqwnua",
  "key2": "5efR2w29RPpu26a4P3ufUwfozL4VcQjofWVBPJzaQmoiDfMQp6hM7DYermjgDjYLuaG6Cr1Bsosm7sQ2f8kQ2XFZ",
  "key3": "59191hoFKiJ9fretffp1CnxF4hGTQ5G4jVrU84M9y4JGfq3UVZAnQ5sco2rdgRHFcdBaatfLNdpFzpic8DwNaNTv",
  "key4": "4ZtgZjvzs2T64XbGfMhToUxsfzsadyYhcbXfycMhuLn7ZUdNQMawXGgNPRWbZ2oj52nCNqsqq9FrH78EdewMCZu",
  "key5": "3o6iQFCxaUpKCqkbULLD6GHkxv2ca5u1GSmskiYdN64KXDU4C2Abi9rutSy487mSr93G9LEm2R3unppQeaJR1dbc",
  "key6": "36qVhTeSqXQmfRDoGv98iwhCudT7oJ8XH8h4btAJ8KTgh6CdazLzdMRg9AspwLMn3C53byBTD2Cn4cW7BxqqB1GS",
  "key7": "3EZYR9RkadypQ1PAeqNfFYed255fLFmbE1ewnGVios14kH86V9M4Q5LDQnEZKso6v5Un85WmLhnQ2hN7TEK2pZaP",
  "key8": "9D3EtRsy6DdTBUYyQnPZvLnLxoRYrWqgGmrZppXoSbXS3psESz4FVNHHV4TLCb36dDvp6nLApo9WzSE36XpKzok",
  "key9": "5SdNqRtJgpoJ5WtPKc66Yd7i3XGpxoY64PuVieyMx2S1MzVPZv5PPRhRS3UhXZdCuWT32rawfzAWjqyXTWAqpZhq",
  "key10": "53WcKkAFeCteXCdJwYpCbcGMXHsxyNRsT5jkiyXfHkZbgqy4S1CYu6PPR1DxHSmwChjUuFzt1WF9wzUi7EQ3pHMR",
  "key11": "3SYLnw3TW9TJL36oTMudFCPxCzbadBAUnjYR8SsDeUCHH35bNCDU8HqwmuhKt2gW7bFGsoUsdsyzaU9wZuxrm1pT",
  "key12": "62RFwV2rX7q8K7ETYkGXWBocsRKnsJKLu5ACLwh7PpTSK5qUqijbSzA3bNyACUdgMkum4ke2u5ehHMHVq1Qwf5Jm",
  "key13": "2yU1hoJ9oPdV22TD469rxvh79ifTXEDoHccvjVvGWsdJutNmCAWhNzgZg2ZHBRCBifVjuYEEJY9V6o9yXwhhasGQ",
  "key14": "24w2F3hPsGidjXRjahvFK1rfZwc3Z4VemFxGGA3ZQomhavFuLzhKN8CWpc7GgxeNZTN4U4i7doUgXCZyDSajrbT7",
  "key15": "3TvaVHFyQtAPFAKg1AWyiBe1mSTvqRFQVdKHRUDM1a18A8pK4DrqK5cfLjwv6Je9eN7ej3M2LGeEFoFq6YabVhsP",
  "key16": "zAv8fpejv6hpsooAXsW7SoQeyZsGLYW8kSwCiBLwhP9M4YnY36MQgftVyGKXkJQiHEX8TEqn5p4LwEfHnprYfUa",
  "key17": "3uHwdhtN1g81UByFsKLybnAtxYbdNEiDbsnAjnFahbGcwyZEsn7PUKjMpQU4ZKHmwVZt1r3A2RJUz5SkXCppeK1X",
  "key18": "TUnbM6YteaNB9pJQywsGA61mAuAinYrYD7NdUbSuHehsB7ePx5Wok7m9rY6LKmjtm8nGoQyC7e9NCAwVq6VjLc9",
  "key19": "29X3NDyRHeH32GKZhRRZRXtpZtfgchaMKmaV9KTNoFwk31vXJoYF9o1TpA82VJrHNMsjQnQBTZcia3scX6JK5ptD",
  "key20": "5etGt5BPtNCbMv2XQ6zcDiQQUDHrWmAtHAABVzTBJqWGxhWQyuzYx1rvHoNge9TygvKdWutvHvdrTbtA6BxKh4cz",
  "key21": "5z54vabea4dkWHu5DwGEB3aZz4Qanp7gQPvGQ7cTAWGEDkGYA3Rpuw1s2R3X5pbrep77pBv8LSM6K4dC5sCs1VCr",
  "key22": "33tSiQx14MDkSL4SbArwXaRpn72Dpehge2jdUyt9coGXn8RXodP1kHSUZqvjBFETdLezfCzpM5AYDfiBXTPQVX5",
  "key23": "2zApg2rocuKJUUgYdc9KoLbJdTFcZSfN5hQDxHLj2HXGiXNFYmC7jq7J5GCtQJJESqtDv3me2wYFHZuNC4RQ2GoV",
  "key24": "5ygtn1PqBsGputZLnjXYuPPemM8h36Pv8ARkHAY4LM1PFKWXzm4reHNhFAbLxRNCRz5VPm18TgqLWkY2WogtGjwV",
  "key25": "4KL6jz53dVEMcquwdMYRaHaba6dT9iUwfX5mLWnzUdw1zhjjHyHMo7WBuX351TP2MYtvznZVrYqoxLdG8nFWFhwP",
  "key26": "5EuxQUQJZ3ZnU6fKBxAftCGHgMHgAFv9DjzazkkxvSb4tPotkiMxdDkLQTPrqnLbLskosqo1zMpABy4DrAGgZTyL",
  "key27": "2oiBd63Hm6XZHf44mzHCT6qXkf1nfSJCCzR23UA1YdUqaXkV71trH1txngNAA95Uhv1p49pMRKx7DqUoBK3VZVwe",
  "key28": "5Y8EWbB7czLhQikwK4V6seTZPMCQmm4TXPbYHcL99NWBemQM18hDhN3rSw21zr79bs9aUz9YEUDAiB5rLo1Lqm6F",
  "key29": "4CpSAJfKuC5eRW3iYtk28UFgmBXEQko8pY2RfywfAjvJfKcSjBP8wQhE9BCgLEC2xkgN5zaScGJdJmRkPFqKkr58",
  "key30": "3L8AJHhJD1gJXuZvi5rAreF21yTBagtkPDhSrDiLNHuqrW6DTGaEqhW85zTxH5drhK8YD4MYowUuKk3TsK8QQvHs",
  "key31": "2mrf6rqzvrE2D2mrHy47t5cgk5q51YRshQXErwHrAbp6kZzvRYhVTSGwEfCBWEeWDYQdk8yhLgdPvVGdeGQVtZai",
  "key32": "2BmCDb7REmx9v2SWK1SMRA5Rmz3MAG41rGJgvZj9vztt1zig1jHixA2kHtHDLi9cSCrHqVQaTHDnjugKYnUuZLUS",
  "key33": "5KSe4DgcwDpYXGkfbsV9t5sGMQs42cTZLEiRzGU3bZQPjwcA7JGNk5ZsjkDSC8GqXDKXYAC1KyRXJgH3iV9pQBqQ",
  "key34": "9YELMDNuKa95BVu8GgUUGBmJbWspjcqu1iMiCeM5SjSXZaRZ3HGTgTFsk9xvcXf1nM7r4ahcwidQB38dJvD9Avv",
  "key35": "4gXFzQ54fA24HyzY3h1MpjoWznyYv1LyriHN5xpsGfEhJhE2PZ7fLssNdpQQzGKyhgw2EeWNd2piYFB1boUecyoG",
  "key36": "3DepbGsXEfHnBvUV2apCDoCUrEVdvreJrhtrBPVLv7EZasnQE3KEoQjraMLGqFusRmBKfoyUEAnLxuWGS7eUqwn2",
  "key37": "4gQX7n8usi9gyzceWJN9EmjRU8h3HL1qUo5BvnetJtaVdwcXxSSXM8LbRNAbvRRoKMDa4o8bGb3sAYq1yXXYDwHF",
  "key38": "3vjRETGZRq3CLBMA4daChrJvDdCKnkBgC5hptJUiXMDsvk85ig47SSoegXsWzbfcFrfMhVwMYrSDsvUHVSN41pDi",
  "key39": "5XZcU43DCFvCi5Kz5xx79vVXKSAXthpdcDXVtBKRJ6YVQnrb4sn6zXhhHQiCGm1gucP9yLETNDBdTjqKSrgsYt78",
  "key40": "65tE3ZQz73QLeBWV1jfxj1rfEZcxAbgY3rH7HHgLQuJsWPHR77vrCCLoNXhJUqiFbXrEX8UBfFSSB8zkNJ51Fvyr",
  "key41": "62wAgbUfx8Mzyj1Z1bjikGCoLot2pXvsZr5KZv4FQfvqnxNDJPPavp5c9Cfh8EGi6LFSi1Y8AFnAzw7sLrdxUT1y",
  "key42": "3WH6gBEH1QMFQRH5z3sxYTzpomNwu3hTLRWMVFikz3JZvNm8FyUGn3wNegi5SAwhG66AhSdQUhVYm71cgztm6mBK",
  "key43": "4aNYdFXtQaX1Mnw9Wu3ee2wb5G25L7AdjkcvRd53uXALxkRmQjh3LF1njSQeBwEn9sr7R746CRfg9XskEMTLGMXA",
  "key44": "4f7hvqnxcRrXAMuNCgs5peJ7EsXGAtwT5YE4RTDWTTRg2Yc2SeTL2UEMgxnptKytrGF56besCKvvxm5QpXaFUiTU",
  "key45": "2AjdkFRhhSMwfw3dufXyR6kxM7sr8AgKB9Zj3M59BdgwATM8Drc6srR88pFFNquAm1At4kvVegjtbS4kSkTE24Wp",
  "key46": "5gvRxZsY1xLKvMvmMm3iqCCSL1cYusxxdUDa8DPSdax5xQsFJd3HjpwRJM2bvuRKeLcpSuuWjEerLYo5BQKvmmRu",
  "key47": "3CSrLi8MBFQ4nQ3TyyutDWaYXgJjfkPKQfA9iUHYiV6aBA6ira2oMqxyifCq2u2e8iM51ECcuNcd4w4PdHTomEXi",
  "key48": "4az98X87rRHJCyLD3utRyX8vdZdRTvU9FcPva4N9h3dcdhQ4sd5fxnXscuy5L3seQiQj1WnpshLLZNDsS8dxC4TR",
  "key49": "iLJH91mPqGE2fXmEL6QoSytun8ZqQzjvdFxgTp7jySBL8JTgxem2tAzXZNp4ozELPinMLE8X4oDtgCDu6WgFzMH"
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
