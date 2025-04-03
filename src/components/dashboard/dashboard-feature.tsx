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
    "2hk3DSfPxoX2MTgJ6dfJJUNfkTCFjRwbBFGE7r2augVW1EL4zNjjhtSWjifj8hYHUk232dRvPxKRACNtap9KzJqs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qQqpGJrvBV9Mikpwus2bu1jqamr3RWVkZLmNf1JtZ8Eup7LDBJWwFdL5TigeEKo4xdAE74pGc8du5mg4Tw5nxeZ",
  "key1": "2iLHA2fzN2bw9QKKETR7X1ykn2Qgwh3zwFTNyLzdRKWHKXmKNKzBXRqLWq7tHWcDHpRSraQpu96BwiCqQXTc7Php",
  "key2": "TaLiUwxd3kE9nZfuLgFxGmFavG1RfD6JyE4qFkvHNZAhRXrc7mdAfFUkQ55XkwQiYT2L12d2u5ZmNjrGqbXSL3m",
  "key3": "5jVv3zs23nFcnNXdzcYTer9CnbS2G7hi8tcGFQgnz8wtxC1itPmTGibjVB8q7aoNq8niUAVwLmK8vT1Ee6RD8UXK",
  "key4": "65M7PrKKvgPQXjLJhbkagmK54kxoNV7aNYr9hSZ3SonY4NrCsQ4d7eScaJ4TK2SnkrXTYSLUDpKURbuSAPMEkHtA",
  "key5": "2D1a7JEHBpP3cF9dUBLM6V1t9LodPzgjF9uSbRnzx6r528sxtChyktbFXV8CTgUpnntXcm8atoyKrAVuBWrspSVu",
  "key6": "ux6pURhdCcHjv7rADNijrwSfnWPuei2nVDVdJktbHKYZ4HHSHde1obektnNpdeeJtQpGUxaerqnTQ9UEnrGHBRR",
  "key7": "5YbCpbXKRxmRFvsioBA5HhwVCqXtLWc5werbic6nVtgZ5sJgFHevwUGmPNMZaRJKH1iGc2KDjWEZM1npVGXQHEEP",
  "key8": "5hrSFMQh2Mdd3Y2ieALJApvi4EJtoZv5p6QZFVdLvzRygkFRe7RcZSaqKktTgfTjVMAv3e1BvpqyksvYG1KwCHjk",
  "key9": "2ZYHuQASC4crXBiD8KZoV9XN9aWqbqsaaHDtt2U13ZRUdeQKDbaPitBofNXYheRCXRiXfy9sLsG8SrbBAPxUAzaU",
  "key10": "5LqfuDXwS3GAtWztpBuEXE8U7cy4GT3YwrZgMm5jnRfp4anHXYobXFHrZFbSsh7yTSHPr3PuqJ8E6JdPND7YTtHk",
  "key11": "2pLPx7sgtpspE6kBigmBkRW196rpn9x71dwfiE91vrokKiwgfp8x7Ey8HsAYgu3j9egpQe2JvG1zmchScE6QPy9z",
  "key12": "32PpWcKhdWR7KovQ9CvsGMgJk8uVVUj6PFnGTxYwWDwdmj8fQyx7riyVCqK8RMwpmg2UDKKBPQzoiw4EMGxRG9iW",
  "key13": "4HWYxwKTK3b5QRyKU7kSsFuqDh5MvgykWakv5eF7crewzWo98f4SYfbvAGdp5EJHdibi1XaHJLxwU7Pe6s3EY8Pv",
  "key14": "45s4Qgso9Q1ytnRbyHUpPsMpkix7vvaJTW7SweVMGCsvWg9DGQP5CZ3ZWwxkk7GLj5V3mstSh7GpLFyEGQWpkxaF",
  "key15": "4qX1oMgD45uX8R8zCoXeoa8bzwraZgEpixhLUaB2xZ3vrUFhhMjt7txZ1v3Bepr9DY6bg7Ct6ZPdWXAinvYhGgtN",
  "key16": "3azcHG14Ejg8cNo8DkdPMT2r5zQrSvQ94AmNUkSi8hV3aKQ9ZURf8TsYKBPeX9PCXCfg9rfWs13atZq9Np9X1BV2",
  "key17": "3qhSqRkcLEMPUvXpyu5hPY9W8HAwusHeipxgs5hhzreofTD2bjotbRwUKajJnDkME2XD1woCWgjrMVTBZztjqYZD",
  "key18": "5TwGbX1eD9E2ctbAWk2J5235EAAe3bmvhpv9BAsxSVgMz468sARQZzB3giuMJR5AEp3c5YbJjPW3ocB3qwJcQGBN",
  "key19": "3C6LHrxacNroYrYbqPSDoQayia5a3ZS2cuj8wo1N798cVKGFi3QAcwyvHfqLg52uMJhh81cGtfhmK1dShy4akK1q",
  "key20": "2MJ8GUNkYANRgRT21mN9m4jMTEx7u9bTD8668yd3J3DojFEYG2sroXa1cHKtdVgRewEjXcrppiNcxrDe9HHi8Sog",
  "key21": "4s25B2VfzJea3KbbFujDdn2CPkgwW3xmmjwHA6F2QcfziDGDV6Q6U8JYDjzccP575YeQ8QXaVSYPkq2bbEb9CXwZ",
  "key22": "3mvJSLo4SurBwWDdRTuDGD5qsUZkai2JhkzyGiczbMmHhg6yREqGj1bWSJBE7ycRvrKZ2c9C81bZR9k55rxq3iZ5",
  "key23": "4EZuwDZRCJpwgiz54zUnLDourrG1BGUxtxS3BtkhBc4aNMHX5Jccs71Fme5htgdqrNzr83N8iG164NNdGd1ezWCC",
  "key24": "3x4ogpehT8RsSgpCXX17HsXcRTi7dUgbNZRq5J8pwME9ahREYYbuGv4BeBYDcH4jkbwSToZXg5kHd2T8Mw32yx1x",
  "key25": "3ort8zcs9YVSGF4L2hmdsN5sWzcLiS7yWEWMk6LQjG8CoyWHJtCfrgDq4fP87joPif1GN4a8CpTV166K2uasZ5T8",
  "key26": "3JJ5j6TdvqGpHaozNPsfoLmbKRwFuyuqPbpGzT9BtL2tK5hHK2JwzD6UR7LBVwqc2vXTWDSM2XoQoMeenBJdqAZv",
  "key27": "63xcmGbpoigXf2bon5dKE4sMt7c9jig3oGGRpTMTrPLQyyAgm1pkCrFhsoDYpF2LdASvADjjc6CX9kSj97omjCGw",
  "key28": "4jymHiXTEa5iAzhrQkXXAmf7M8KhjFQuNUDoD6FBq5YCKnNKdXBEaPjpPkNzrrkv4PdHJsKeTCbBHr9u8GV5kbz7",
  "key29": "2aJ1efmTiGE2HHLkGiAQgAyqBS1nheov67BtFafrcsxX1mjqUx13btb5ooD6tKy3AKudmgLMx7V6mk8WHLg6gcay",
  "key30": "2sW86TJHvFmypqu63r5AzsSKQH6RU3D83e3KbUA84U7pn9zfg5o9zUe2GTvTMaqdoVmuqkJNuTh6oSbQp3ggvDHz",
  "key31": "4GZoCov9d3MhroWKR61wC3fhNbFZDjEAi8v6949LaU8MTfXdpVxr5asnTNkQh5vBGByWoNDaVo9rUFAGGUJPa4Jz",
  "key32": "3Nkvc8ang7icQ1SHT1WGU9vXYGxUkUqoafjuKHkPCW8EGRKQE1AzgEK8T6TiW2CXnNA9TqAvAGPQprk6ydDWuRfy",
  "key33": "5nWGh1d3W75ewKZRd84Eh5HwuHWMM5e9NTX3xW7JTKG1WkH4LJNCSb3xm2cFJwsaqwgfmiNk3rJQiikHoruCYzAa",
  "key34": "3wmRTqbSapnhj9jAeWo8KZoTYCnASugxGqmsTxfiGvVreBxR3Tp3XFoo7rwuisEragg8UkhrnEydkJo1DNd924f2",
  "key35": "4UK3ChmsmaTg5fCc32Pcx6PaL9T2HB4UUKghpHhSktxRtDC7PkVFDbzTaGoSFtfmACRKJsC1GzKLWAvbqpXqMY5h",
  "key36": "4viYdyBuXkjT1rNvev7AqbjAnjx7mpSNRS7vNooSvetoG9ACagauAY2fxT7MtubnqW9mtZAMi5BKndtTTBM7mezE",
  "key37": "3XNG55fTDRMCbdSa9c8k68VJ6hnCiYrLg1CsmD1wiH8V5YSLdP6dvmZiPgANpvuH8S5kvFRwq1zL4YZg1J2YGhwA",
  "key38": "4hFGhdNXEhhCSxdJxRtdV8vakdM1XzWtjvtSHgR2wApw4bvbwiMMWHAVGuVZuXfKa256XTi4hB98t8vKmt6bPYQV",
  "key39": "uvxuJLuepFTCuiv1ip2kj9Y8CnwMXBrWxtHLLy1EPVEmJXQF7BheJpWh6xzpagg429KxmD2tD6yTXUhsByDuojS",
  "key40": "5hGi2FYL5S1VVHrJUfz1U5bCrHBSBuygoqyarecQSGKDGiaapGrDenM3xc2uXfpMVViAu1cpjQDSaE6CTQ3tyX32",
  "key41": "sxZ5cvfBa2fotn1bJ3MjEsB9Fb66jpJx8WYfuT5wFBQK8N16iL5CuC62u4jphfKXDijDDEUqF6r2kUZGK2tNeoG",
  "key42": "5MytJ9BBSV2E34rPgVweykZfo1WoUBmwF1EcrHR7jpXBEvQ5vq5QvGDqPkERdhTCt38zLvggsKKD4AZd8N1ayyDT",
  "key43": "53RtCPhXMsTzRKo43Xap1L5y8uyQHhHQ2GuXKkQHqTgHPzUdFWyqwuNXpJserAGX7qpgmvmAd6tpVjeeNgZYdWJK"
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
