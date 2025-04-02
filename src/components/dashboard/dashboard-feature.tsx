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
    "4b5r5xyTXZfHLvnHoUtgfFg39gp4yzSFDDzEmo2xQGCfrKT3Lkftje2udgZSoHe4W44kkU6qz3t3hcKXXXEDGGh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3BjwHbrFJU65hG4i3E2XWgyMLs9YVQMbzFLuAsi7GcDVsG1hxd4nfMZB7sdw4eM2B1XBDFn6YdxDgnRncaYQJizw",
  "key1": "2nqoCBe1hi3Vj2MXSLDK2D4CZquqXH1e3u7HVeLMkT8XkaSnopTvNVECg7geafWoWJ7EK4Xons86AGKYRmZoCCBd",
  "key2": "47USpNtNVrSNd9KZmQ25UBKprPNfw2CWfbzqoqcRKJ3SZtFR94aMA1HY5tPJuVBg5Qf3srB8JkMgiZCobfLB1Pia",
  "key3": "2i2o66Uf43ZXetU3M7gKfYciG9M5Zts1StdgcEx2KCP32skiJQcFbyzXM1MNzHPkmGoavnqs8t164w9us6MpyBt3",
  "key4": "2c4rF1HGXeDvteqoQYAgS6nDVF3NPqcLJrrh8WUsR5JXcErN1WumHyicKwfwF1fpJ5vdCwXkB9TGMLLTUFb8ybhQ",
  "key5": "2oQebmzxxUCD1EbT8HKaCfmVgL3mSJEaajMMHpAmPCuTNXr18WArdJxi23vPAKfimGniFS1Axu217XAoEt2HwdeW",
  "key6": "3cf3UiUj5RtzF9rLqdURjvJkDYAxAknRu59kim6CNkvssmCFkpMQKJ9ybzD2cUQX7w5rDdLew3PiRq2ecy82jS52",
  "key7": "nVEmaaxJhuqA7EtDo5eKBXECXcB4UW9sie2RUresE6KMezdRR4FdBCbFFE3BdLoRUDB3AiywcZK4dbz18QAcX6w",
  "key8": "3TEWD8PBdLKNuaGjPnj5GNHy1bHvPwxWQUcRjJgRMGbAmTcga5WFDp57iUcrQLGHy6EiCsLV9xJw3NggGmEoHrq8",
  "key9": "3jbjfsFzdHfByJMbBcCL2ec1Hiwb1c7oafuY3gNhE4jMzFXBZbNmxoTaLyBhQ1vjbS7uEZkGjrhp9gHirgZnR8uk",
  "key10": "4JviH4j1ZvCREEyVCPCiBj1apzXa5b6vc4jmSpvmUj1gFBn2ekwVSTzzp8JqCCGBcTruK1dstr4BGvUfyatxPyWB",
  "key11": "2aPV22Fd5qAc6dPJpUxkPKx4VHUD2X4g7aMJGEUpGB4MsKggm8wcfFzgpPMiVQoWgeXDzZCoJZKAWwbtUXbccqcy",
  "key12": "5kUYZfeCe2wkwXqgJSbFXptpFWvQRPyceyNNkX4o1WKEPUvou6WQsqry9iFmPmkreRnNhPiE2Gty7fdUjHMmwUk8",
  "key13": "5DNQLzKLkPR7oPUYv1rcwCHSXNnmJwsCv2aM4mrER4cz4hQg9VWiRBtN2ZzoN5zLUyhGkK1kqVFy5ierP8uRYdYh",
  "key14": "3BT2cagMYm7j6zstbUacmQM8FQxkjPWiWnHpXucZHg9UNysEh3gG5jWa3mMkVTsr2v79U7ttNuZANfdyijsLbPby",
  "key15": "4efiEVTCW4ZebnoiLahtG7NSvpN2KnCN2jFAChFWCBJpGu1eRswgE9K6HPND2DBKU4GEdQPFxKny91XGdGRCCZGC",
  "key16": "2AAt3UEqo72fXMQqakoMo1UdkNizyYLdfmkHT5R8Mmbu3ZdvVXHDpspnWrBpUDTHdNPZ3NSQb1M7dkj3a8ci7CCk",
  "key17": "59JgWphWp3CfKW5ySYXwDs3bi7NTw6swqjN1z5a7Uo4XexRj12piwVBGfRoBD236WxxcafuwiTp5giA6jTg2DM26",
  "key18": "5kivM7pfuh5gF14CEZx2b2wPYAeaSgr15oqod4TGGWwqXmSZPqTfUvHJ8PLEzfUdVipq2U8EbgJqr5oM8xRWBtK4",
  "key19": "RANaHwi6yVE9eKcnf7d7ZfS15xnDZT2vnmses4FKCqWs7wZwX2w2AtGrjh6XJZHe8mbQpXeqzDVjYdawUvWnVdE",
  "key20": "K2y8z2Xp1AF5dWPdbzj1fVWjNTGy6fbESR9EeHvdysty4Kw8QnLGRfXc35uLm9zTRdk5VavFWerwCGt7ySx29FE",
  "key21": "5x3YuiEXeuBwX29pNWMUvcDmooChGuCyfREMNivGb3TDUyYejKvLnuhaJ9rxkbYEaf73AK7rJnHcwvfEDdB7GhpW",
  "key22": "639q5916KyFwixrpwkp7SaEh3h9xKw3FtWNiNFgwniBQ8FDpzn5MCepaYMydfNYvzgSwQw6qvR2LsDWLTUhXVjsw",
  "key23": "5AH2zcVMCaxfLUCgiBRivQT8EZXuYNE34nLZTwikrwpU2GPyWCHorfvHAQeAHvzJVHGcwXKkoFBM4tJuAGzvVdrv",
  "key24": "2gjME4588SoKhthcZ4K8sBV7NUKPaJD3YpNYwedt1ShKbHTMnQqWgn7RUF8eKywuQssaFLoSuscrzKETeYiHqT5R",
  "key25": "4jg5LXZKU5DPGBudTQnGBrwvyWR2cVvbc8AwmAXwy5YzYDxZYZSvaM14m1h6kQAttwZhQRpabA8XwUfsYWDnKpZj",
  "key26": "5PuRG8LBhBVvJC3rhjB5vQjYB9kvVmmhDBE5kGagmz62QWUSNZy546hZ58a1BtBtPXyeUcdcETVujLu8WCFNwo1T",
  "key27": "4rzMT3XfHuKNXDBa5saL62NY2dHHGBkjttyK2aX5jTYe6LhDaEFrxELrDEWD7n9gRZdr8sysrbxqz4eCGhWb1Jew",
  "key28": "3hvdzSJ6yo9vszRbhy1LyjdA32pLsNbT7BSR9jECnSddBtoeNM9e8Gdx7xoxM6uibcgdWTxei9Vn4kaCJJv9XQXK",
  "key29": "XWgWhmVks321Po6rdpK3pzW3hzuF8a8QuNbhjSvZ9u4USDvcyhTVGWPzmRHMULU8NriC1JKgXtCwVNWz27SXb2M",
  "key30": "fX1PtgyhYqv9bdHsGBuvgnA2jPqYfqG2AZoqpVuQNkLXgFjHJQdQ5Eoxpwo1CCyGMpKmmANyQofkvmVNhwWgVqp",
  "key31": "5aS5Dzh762A6MGVjnVU3XrenS7dwpZxsadqXFpGNQi7GAGdZrpXwz23qzo8j7r6c88FwsThKez6PgCbe1zgf1K7c",
  "key32": "5XF32gFijmXbv4s8hoVaHBnwq8gp8L1yQNRMj8ZJTRv5MDMQfPyWMn4BpDDEGECRxkihZUTHsmvzm5NzKhgwGYdy",
  "key33": "S7fS3T5RGuFNapqsBCB6pRhwvXJLufCrr1GDCkm4Z6VRh9ZG8T84cZe4HUqhPRpV9VwJkL8NJyz1chqiTcutxh6",
  "key34": "25vMcNohPmeP2ir2mpqPYo2PMsQXyJAruSDpm9Wt4C5V1GA5Dib3rXfVrfcJmKfAwA35kzn7VwqmVTV1r7iFUCo8",
  "key35": "4ptCZoH7MMGqueR6rQbCmK8Fi38zbYfsMbyGm9RKkRZdA5hCtEsv7KzJL4JmVoopHsSggnL1kWtp8L8TaBYzG95E",
  "key36": "3oHwjWFuzg79PCwCr12LPapTYvKTLzQdrUgKwYkPzBcxPwgmNywQB84JuMZLevGHUC1UADvL1uWgP4Nv9Y9iGEPa",
  "key37": "3q7tZF7y34kZZwtCtSxfgdrQju8juqGQMe851YzQLwvfndoUhnHTyfmVuiWYM7bd6cVKJ7ykmVetCQN32XNdS6DW",
  "key38": "33BVMSL3ZeCdnq5ZSq6t7DmHcRHJYvHvkRCXduZTqrcRgDacAKpotqfnoS9Z3kDNz2tdXhMB1D9jx88x6MjmpUu",
  "key39": "S6rTR6Q5c2LMGi3c5F6dmFgiHvZT8Zfki3QMG8CcqYFDRrZiBymNpnrzFViTSegn9Z42VuH1k4zWMm3362NDeB4",
  "key40": "4H1UjFk41ZK1aVZZjJST5wy3QZSAxw3K5mXtZ3jERq4j4Xi22sb7Uh1cB6bP6XHo2BJrNd5vqhuzL3sD8EatZjZQ",
  "key41": "2EMgtqr1wedxVJNb1ta3PMcUcFZwCe1RHGf8zLh6jFgPkrdNGwt2tA8jidUFAit24qYna9wVoNgYMKBE4S6aWWCr",
  "key42": "mMSxN4NU32YeuYojPgozQv4BZp38s3PwscVAzGR5kgm6FKfZsFSrxefL7UF58BEDdmenQNHmJWA5YSG3z2fVWkN",
  "key43": "dVhCis8GrtZ1YF1t9Qf4cQaB1eryzPW4eW4wBncbKGQUXqxzY6D45curE7TPHvgYZdA7c7HJ7qYXAjeWQLXfZzw",
  "key44": "4sKLvhgVFhNLix3EAHYq4diZB51biqSUrfW1bP1gxkaeeq2KtXAs7M6VZKAF7dZtyV9WMheuzccb3mtR3W4AEwJN",
  "key45": "35iVSS9CWExHnPtFGL9Lr1FWbGf9M4H8thfkMGqgX48AAxMp2GvFSoaTNxKFAa8GFWFxwUr34vQkRaa3honxiPVW"
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
