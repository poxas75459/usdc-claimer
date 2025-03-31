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
    "XU9EGmhpBXbuS3rCmXQD5fnJUSUd7RyZw5RJQoQzTUYu1MKYLaBTm5PFp8qiViThySQa36jdQdDqFeutq2km6hx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4anTrWEQjhsGhxfWTZB69xmrQuUFWJGbsBbej8d2ofVD2JWtwZsK8b1hMuarJxh1uaxL4Kb4AaTtkPcUuegC8wQi",
  "key1": "3uF3ZcuKCsqXbfaM743PCwb8Z7h5hTvyHmxquGvnYTWCXLpoiFwcN5NyJTdPsQvdaExnVgdanbU6YVvWNLQeF8an",
  "key2": "4F9WvLcU8WXvR8Xk9RFJdVqYY8jxu6E6Lb3hvufg18Mnf4ypuHRLVRkTAp8CYRgjgL2V1JjMCKTz1jdJu3jgq6Dr",
  "key3": "UZVdtnNi9yqFhDTxT7L18mG9QqZdRDXj6wsU1Wh3ydSECgFEBtipJ1nR3sRtDGbnKgb7iZid8AiFMKLHsYSHEHZ",
  "key4": "3NeupB2cYX9ENV2GC5yJrYkpnnnwQYbPSD7D9g9tbmGUp2Fhfq9ySpFpDN1BPPg3QrQ6XDfGMNVvC6AWPBEkYo7J",
  "key5": "4kykJCrKcE4JGho5wxUSAprfeGvq4LMbf7QP3cnyMKygvEjASw38s3GLXkzmn64THmi19f1RuyazZUpZcuaitERr",
  "key6": "2MYTiCcFqryMkh7mvNiSUHLd1aag5U6ydp5AHUHtUkFLF5Sd4d7pZWfWfiH9pxA98wVK7JP93hHDRVfNMMKnshrZ",
  "key7": "3aRTvPMQagcidRa3g8XYv7NroZJc6D1QCeqhdtJPvHSRi3ieRkBSrhoZqwQt2DeAK39Ak3NBtCNiTVAVdHVW85YR",
  "key8": "2ZoPUV4jzwroL4qqZSKKrHmECNW6cNKK1DDXa7Rq1kXepeWQE2tCa7ad4PuyWQs5qNrUMYdDoTKMxG56QEr5Nvro",
  "key9": "3Q2cUJmx3yqto66XEz46UjAGkAAzmYRZi87HMtF73BqD8FJjtt8sQJax29PnRuWRM7HJxcYzB2MSk8jF81nYGz3n",
  "key10": "3DofHws93Yvp88wLwuV9HE62gA2RKSmjgJhPNvot28zNxKmciXuJN8xjQ3wQuCMhXZrTGu7Aso9vbEN6FQVf3BR4",
  "key11": "3dbDHHg9TarSmwbXEXuXBGFTgP8vC5ybwdb8PxWY9LKmbB6kDVa6A3T2HEvNANvXCnPb3zzkybn5Qd3dsKrBte6b",
  "key12": "53LcUV6CUC9EyKEL6uzksfyAR7tnXZtZKGF6GkGhK9qL1F1zoniF1Ra796m5QShn5VMCfVgvJoqHDdqpMg5xxRCu",
  "key13": "4J6ZtSydJnWgu3GfabYQn94Ycg3tb9iu2TG55DJ8mge1KnbcD12m3rnM6GoWr94xrRKv2GKoeDgbXDcEeRZAvr7f",
  "key14": "3VwmubqJybKU84h5aWZV6ojXJ19T8HPzkEogLrrwjAdYFnENyUwzMzvUYN9hDE4ATJVTRw9xDNuwR4a68isqLLyT",
  "key15": "3x8tutCAMX7nzf9psukRn1CJcn38drvGXqFm34GDdMridTjSzeh6fDuBzqXdoaiPxEoFHj6svU3N1wT7owPEf7J1",
  "key16": "N3qxeYh64jaj4mpW6BN9WeRo1wveMNGTotX58KYroFuq6qHCDmFkar2XDumvyExpLfEBDsLmiVaJWSxMSyiZ6E2",
  "key17": "61DXL8Vj38XEZNzXz5cmwGudpWY6fYx3Co624k4mejxvaXdiU8n4PQn856AD683TNFnApGSMkPJB1P6SmY1jHUnr",
  "key18": "nVhsjwu7pQnjhsKmm7pghd2qVZXKD2KjSeL79NyZQnHnPfBZ8knHvVR6D71aEA13dQHP367HvrKbvpCEwruncRJ",
  "key19": "5eT1iRuwkAy57aqzZyRjhNgjfwcN8L8HDwemcS3TQMuLkfeppPB1XPzDFK3WYZuBtPpUrdixenLYtbByjnMCDvzT",
  "key20": "4An6FaAZMphudtKVUCWLDtC2HSqTG2M7gpp2HX7vBrzTgffg46AXaXNKyF1Rx3XV1QCwsBJeBSSLMMBgpGeuJwiw",
  "key21": "3PoCBA8A5Fs9pYRo2CuZuRuu6R4ifaBLDsvBzy25YhTJ8w7TvfWw9sbPSncXACLgtChT6GpmWgdauV9yVyuH5xGJ",
  "key22": "57Fa2rR7A2m5byUdAqvPcKBE3CLmuFAATgQSQnmuxKNrEs3w2Ywh3NyFdTJc6st4Q5WMMM143Sx1D91tGK4pVc9p",
  "key23": "4gWCUYL2Z8F87vWUDy75ss9Ys3KTbRnKM7aAGwZQiBNQnpFD1y9UD13EPJ98PNiCWXPpM9u8qNXitNE8bENLPhHJ",
  "key24": "3BBPDyqhRo3cGpW4GXy8FfpfmS4aqLXvGzfYPtLcDP4wjYfLXgbQ3JmV8g9zzcWvgakXYo3kdY5mMez1hs958gb2",
  "key25": "3ZdESanuDoGRExhyaLHnUtH76uRttXvVGaLsECmNw3FYnqYp3kAGvMsRt9cnAnQYhm2LF2qhYvUSbqsT1yN1n6Dw",
  "key26": "4typauEnt6ouaU9hqevQszpsnKybEnEVMyH9byGUS7GXYXjmREWBfJxiFz7KCgbae2G3xe5wHMFsM5zcdY9p2bg3",
  "key27": "5SrDvYuTajfSRSKAdpmrXw6gBmLkFTrcRX7XGnz45xZ1Pa9Ksa6V6Wvyup1i6jrercKaS9o9uzcbEWh4vGx8qvYk",
  "key28": "vDedKkdsc1rVq1SpdzuBFmF3gVsjg7DL1A9XR81Ps7P1oX98BAhvZAHt49yVHfupup8h9eyE4srJ8BvADGivto1",
  "key29": "AYu8Z3V73vyD89ZhkQhbcSZf322ViTRjUyHDuNdM3gdojQoSc6WapRF2c4q428RrQJY4nHS4YsDp2tHk9m9VCcT",
  "key30": "5QpQ5zm5ojMPHMrW5nQ3DLT9BUch2T79MeU2RiEbJV1u9cySR8PwADC4Fgwj95dv7JQM7DFRE6z9wLxuymfmkpft",
  "key31": "4mA5GGY6YaQNfLkLP99qZcvqUcVqitjTDCNNctVGQ74ZuooCRke8JyVDo9jiSxQFRN3miuByhG6ppbDoYXhRwEGu",
  "key32": "2nG5XKxVfpXRbQeBWK83AnkmFuuCEPwHcQfzPX8FTBBD6gCrme7SXbTnixgGgvr1ax3Sy1fRNHvSXn8ZoS7qPZmp",
  "key33": "4dntS6D7iyfCHLjN3afqDgMqgU9yeHeatKQ8jBN6UokuBA139v5rLAsGDMFB8g1mxmC6PXSBuAJXcDgHiGHaiDzm",
  "key34": "2darzHcsb1NHcybCzQiY7p761YR92j1z1pnx3PM6M8hSiArCcBdkhvWRYAr2MpEJwEodamdZBe9uu3V28mu1EJcy",
  "key35": "61tzd2W8iQgrjyLvQbBrEoZ9Qp7icR5c852E7eGuk3jYxQhMTT8ezne1izDFYBvwr5TPffQJ6GQNR9PGhghGaLmJ",
  "key36": "UVE6DFqGjYaAUdaAaGxGEWEqdaEvN3w5NRfsBYgdoG7ytW1TQZFjffuRpm4Ljwp8jbNXJr6JnBVJswxD2pMRwFn",
  "key37": "5vKqB65mtircqfe4EgMvdunnL1VKAQrTt1EcjFyS1FbKkS9QkNqTEt7SfpvzQCJwuJ9cHWUwkbRmTgV4MxXU3xP4",
  "key38": "jJ5dEcBViqZamiEiv4gJwtzjUpoCr3M6hLAtGC6vfN5CLky3CjofTkAaVBUBptqGBG2m5VUMz88Vd2McQMAQ5ZC",
  "key39": "4KX2nu1uT3qbHDmLfpv8X27UgPs5gc1irioy5v4DJBPgdUViqAPViHVNqU3KNYo33re5T3FxUghgGfhArY677t6J",
  "key40": "5XVQFBo7fvgjTdKb7c34HzSLUxeNYBbur17bMt9T81MJDna2dniNhHJrQeEnK2jnsNW3REUJXKRWJs9PAmsMVArL",
  "key41": "4co6UJRaSGFed6cw6ZdT2rZxYCWziyyVe2zDM64q9uU1yz8Xx3exoGZ8t5qXXCwAFpHPLvtqrMUKzPCnfaUdVnjB",
  "key42": "2KfMYZMwv5XrweaBjuHnE4duX1EDKSuZby7bq6pwMHrtjvpdBgmYoeFetpYhKwVnyrMg3EL8VNrPkaQMWMsj5ATc",
  "key43": "4DwPb8XpQ2gWrQNkvgdsdh2NvfbVWXNjpSMJk1Tq6X12Qjw6WHYxurCjyz3pYiDZHs61HtgUAMgeYcKUKmQYRdWY",
  "key44": "4uch3ugKdhhxofv5RqHzP15n2Cvq7q9k3hrURqTBKkZSQdLCLyAjMYAYvxeMQg1Xth6z6kaZmwRMxXJuiuhjoDAA",
  "key45": "2sQdsZShSg95KfxJCYwWwqYaK8RwHscpurHDMo8RcWM2PprA4Z7smc2iZD3vy1e1YWJoyn3zePcPaVbZjC15sEu8",
  "key46": "2WmJYxDNs7PXJbs1Tn34acNZ6AfnVscj7RGQD6vmGJ8WX42H87diK3VvCTt1pENJctsaPbkhDuuwZY8vrWrY7hzq",
  "key47": "2SMXeMwrDTtzavSAQ4nVu4zfbfBV686p7LL2uytktH1qAVkfYAGj34pxr4Tb7aehEr7Vixt9JXbpZ7ymE2Tj8sp7"
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
