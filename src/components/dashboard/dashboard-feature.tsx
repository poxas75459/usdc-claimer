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
    "6GoDGJ9YT4iXWT9hN8xFf1exDdbJjG1s3QDNMSeRvCvfZyQD5jVgyhD1n3ecYdvMTxGW269PpSKq9YTexHzFjYS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "BT982idJmQrfNrM7G86DNCkuL4jURHc3cURiB9R8PNF2nGEUebEoWUpeN8gip4H821VMpKBP3JVpKS4Yhc5mmvV",
  "key1": "3KNnjhxs57BDroVXKj7VC9EQ9ejMiSd969cRQ2XKQBXNZ5zBry4gVvsy6YiLGsh8mUSsGgq6BQqGcRQyyUQZ81tr",
  "key2": "61y72c5AcdBkJvK4vB5WAuDJSCPcwg9DDG5cshJotzm88vRWwzyMTQhDkoCyEq4kN9Efv9hxrDL17WUVRH6tsiRc",
  "key3": "3AXvYoXhJzQQreQeCxkZRCCbWzhh62fzgxdLKmtCbcsL4HUeK8PvoUaaPXFbf8ncXvF4hL2hR32FSiH3b51rc626",
  "key4": "17zXV3g3pDkDthjRKDYLTL6VS9nDbHrjWYSRFJKdDLRyutBQkV1qSUzjnW8yprrsYxAbCwPHVq5YREXngwELCGz",
  "key5": "2Tix24cxVmB4QfddJW3K57mSKwep8EsYFkdcxpdkNyPjmMJhnVdEMoF7ALPKLBGtwWptg14ep8p8Qqnqq7FeKjJJ",
  "key6": "4pbaob3Tp5gi2ucBDhApHgcaKo1K5a5LmujgW9oUcAGPCFthT8G8XUCxEEkkEDfdQM9KXLQqRFGa3sBBsrBMr7EK",
  "key7": "3R1UHi1SKLXMaPJkbZvPhZ5g5AYL6sGSajNQPrBnVuLa3SaWM3D2pyWjpULeKQqJQSXfjFQsHdFw6oAt3EyhjvBX",
  "key8": "3t5wFnro6nh8bRePFTzKDzipzksSDSwXXEezfahxDaHVgLa5ByaCdpytra3YLexRseRTxinuFbrdoHMfUZq2tckt",
  "key9": "3eSyrjB1sABbp9URuSSmCrH69bd1z246Wc56NezbQ8nwJidjS7v3mYZUadERG7VSZgqZQa3RCAbgUfXE6D657WKs",
  "key10": "2yR5FxXv8jXkiHhauVEtBPNSXf5CHtSedum4rZk4qfvfAn74uFABksGK8yfeMKJpnmStZWBkSm8QCm9Hx4GdiHW6",
  "key11": "2qrgmmzWaT9VjRBAr2HnqB1YDgvQNzsEfNXzednNAi36DP5Fx3Ekfuc91u1gzjR7WqXfvaM2rBcU9BtWpT9K22ZJ",
  "key12": "Sgg9XrTBPQqY5qrSuMrfQknzenv5T7N4aWgLE93J7XHiHe9h33L2BQW6yk7nSMCGsrxQz3wXpH3i6cHc1fji5Xs",
  "key13": "3nFvmtr4X7CEsop8bSUU6qCMVraDSMFdPSwuBf7iXBbZzVvyrzmK3qVh95g6FNaQE7BjP5BTT6tW9HnweYq8kUSC",
  "key14": "5yGrjAVSHMzy3A7nwKo1eb5aLa2Vhjq1e43YK3Sd3fEPcdaUbuszdzTmq7BNtZDCTEzn4mNYftHazkSN1dEKwKx8",
  "key15": "2uPVEoHefNoNGpJDoDZMF5Jh2YpYSBV1TMHBe9fHf14qhMHyx2Uvxex7LMxX6CcUmVAkFgWzWsaABkt9Tk1qJZbn",
  "key16": "3RaGDw2SftNUKYTnpJUtCUUGc6B3sphPBxPnYrjW7oxE9htc3SWBEVrAWQBBRSQaF7LXazmtty4rvVoxtaR8JpEM",
  "key17": "3HpoxCBJCGZSDeC3GdXyZXFMkeQFmHPTN57eBnE4MWu8Uh8dxPwU5SSE6AeBMPjgQ4me58qfYAFvQhPpgtKgQU3K",
  "key18": "5W1mvNZpNs4QVMXPLXZ4QxbMaNqMqz8pzqoYdaEhrdYxQfeKqX2bfHSD8ZnwhJPtFN677U6jUyFMRCWaRRmCnfsX",
  "key19": "21cYJNv6rixvYE8NSyepf4CG3reHr27Q2ni1WMwEYL1tHJqfsh6Hn4arTjNnaRPU5pizddqM94XQQkckwk4V7jCU",
  "key20": "3YMH9gh5tKncNU4dbw2qKF7YXu5gnZYdG4h38Hxe6GxSXZjftFp3BvaZ9i6j3DeNLWBtSuWrJRb5JiSrVWQTAnSa",
  "key21": "2KmmRA6kRSBbEEYyfQGBKsFEw7L9Aa7YEyWcmSyyh5f4RDt6qdUApzWFoaF3yrzoXymPn1S6qzijVdgXaRc3x4hc",
  "key22": "22ne8PXNFz9HncwZChzToYTBgiPEdp9ts3VfWKakonYHcpBtEM3vgDU3YUv3gNfARpQ17DQCYwTSfRpkTT28nx6p",
  "key23": "73C5RGLz6mgqxQywcXKH1CH2y1SoPScHXjjowfvLK3vuS1gDp5gk5dKDpzAtU71iH6gJWUkeQzg3z2SViePAFuz",
  "key24": "4ninQis4oiLWYTzTR8wsYuDkikPDs9smwkSiVKWLutw78z59VqeaTjoqZdS5zmmu4Z5txQehALWyU6KCVbrR21AN",
  "key25": "YDBBA7mRkrr5nLmd1KrNVamWamef1yUXnPd88MPkLMxD2V2Hp8fssACkoM2JtiZxoo3jeB5DCc2NosdZ79U7h6T",
  "key26": "2E8s6EDAB8hdTfppjwzGaFJeGoM869MQBYckhYUhzkUfiV3wEU2pTJH5VtCTyqszzEfbF4VDn2CKCma89ue68ezh",
  "key27": "s1wDJRf4dPvoVGhVVQ6vf8ZCRpQXWzcpMXu68jaABhUjfQU32Wp3g5rZ7BE7knV2WRvn2fxfkMWR68uSGDDHecq",
  "key28": "Lxa5VkWYhvMHvZUWKpzCiw3ktv4uoeMtGRHrBg5VN9LN8TpbCsDay1qzJsNyueXjuyS8rH5AwGKu2QUKPgJPwmj",
  "key29": "2nbR84N87s8VbMVpv48SzYJL6ezHEeWcLgKQ4iMPALC37QjBr6mZQq2nsMK36QDRqB1JrPtSRuxp32U6FoAGqNLa",
  "key30": "4J3CbzsYHzd3c2XBYLfK1q9z8nH34Gbj7hBrgc1piN3Zdt7gtRduiidLqgMPgMvuAJDPEiHKAKt4pPjQUVQjzLNf",
  "key31": "B3buv9BgS9GB8fhor6ASJ38YT1ZFqAFgjAzFDjzyBxSsfPUXUqM6iLKYA2yqLZ22zHhxZMx1feDLwYkH56tNcUc",
  "key32": "2yfTiEEEFxfu32qkJRPC943w7r9QhmzYSkMqwx4sQwSWVzfzobPxLoUhnsuzkVh7fq7QHFyYD8S97CMksyhNa7mk",
  "key33": "3G6pTybtDwKytYZhdp4mBkifZayktrt3xvb5ZDvk65JsFviXqQd4o4TRRgNppLgd2Qrbk4vDxhj8hBcABtB7aJpb",
  "key34": "4gcQLrrDU4hW2bqUsn9wseoZ4c79VNzgTDYbq6gy35ekYHqyr1BLUkWhjtjhxQ3pf3NXUrhy6LzsjPL1f2si48pQ",
  "key35": "4oiQyTeWFJhptMVgcGTErKv4QdYF9b7vg7uHfvFMVAqQVXxHTE9vusnXQxz1yPwyPhyibgoUoFvsvwSRTJJpyhPa",
  "key36": "3JFs2dRthFVagL8yGtSQ1xJGNy1s4xseSJXG6dRyJLgRCBupwyTYvshg9EAs4DGV6WpricGok9gbU4htRAPi1bie",
  "key37": "55hExNu1cCMNgnLErNQL6Rgi294GMsR3yqxKGHYjhJBVd2T1YbBrTQxNBjq1e17HSdmyhNrheWCqd8aQiGsQyfc1",
  "key38": "QqGiLNgGCHmuxyab4ThGAZtMLYyijcmPp6MUxTHo86YxW2BPELsuu46ShMR8i8oRuJwabydaHrDTSUek4rQiWzb",
  "key39": "2ow56DgKmAxr9fPH4uUjnrL86jhbSeMQFL7MvwZvcnvF2aNbnuUGEz5DKPfMmjjeD7EQrp7m5o4Bu6BTFTHVq7pT",
  "key40": "3J2PbRDxmqLQPBn3HahjD1yBhs987SWJxNJbcCmVhBQMXFnbfWZ8tNa5ezzTuhrfyeT8BpHTpzRzvaSEVKj57ndj"
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
