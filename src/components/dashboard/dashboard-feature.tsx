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
    "2KhVrpycQWgm5aTxrxeCSiazKtVNooGESFQJ4uFrRocML75LmutTvpbAEXneNBi6arA7UEkTCDWPhvT8i62iddDd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43jDCT4HcDraSEg4gQs6ek9pZArz7entZqSKAig27sq8A1pA5isns3tcJXHxi7ZLb7Fgw1y7HLRP95HgMp6vpQXF",
  "key1": "3M9bBjW5tSEXBaU6551ZSSALyhBTt5EnegKeB7VmTdEfHaWeJg6DT8MDg4XphUDvgS85YFAS3MvwHr7UuAEWKvNH",
  "key2": "2pQ8em5fjj3gT7mn5TWEgiPFyDfbwohu83viEiUUqRyjLXL4hfr1ALmom6HFdSgV5AHzz9rF33GgbG172J7MSoFN",
  "key3": "5yjTwpkR1AH5o9iPa2f28dT6sM7bpTzv4LRN6tEEZZcqc4iDJCCSxSh58N1rqZiQSwxmK5e1ZpR6RascVrLgwT4M",
  "key4": "3AZpqZ6vjjzQJRGNYRSnhRE7FiyUcty6pAL3qf4CHuFWNgoZhxYs5irXMRFWcUkooP7hTSjBT2ou7QKQZgXSkfeT",
  "key5": "55nt9kYpyriLNfiU8BJERTzVs3AL1ZLQPr94CBtejAG1z5GnDpAHAeDov2STFXkg9UmcwyJjb6DuEVC5tnRctLNg",
  "key6": "5jxm2iMmv6Wu8FJDPjh3AUgCbKsmmQnV9xsc1kuSGDsEDdfPkS7fbpYU8Xk7N66g5RWzdeu8W7QZycjUHgWSB6MU",
  "key7": "igv3jztaaUVEKNXZpLg7S8tZC33WmQXv6MoTingeqmUHt1cLiHUxg3ej2BspPvSvJ1zvKg7vZuqcfdsK98v4cEU",
  "key8": "5e6nr6nebjz1fYAB3Lad6VdBFNBfrFH45FCLM23ECqMcKBGJuqpBT9qDFCKRVwLGrA8w9gAZ82pJfyMoUTV4fN3H",
  "key9": "uHyFYrg1ZvPxTRVtf49Qf3SXheoNgir6Yqvo3o5fThFfe9pw4F4Ch7cw4ZVYqZqsegkZqy6QdueTUvs1UD57c6t",
  "key10": "2of9FEGASe43ZpRkcMuUVkVRJKf4UZ4C18kGYKfGbHoFFW12Yy2tLB8NRziEAgw8ieGGWFpTtwtGnbVyt7Q4ZXsC",
  "key11": "2BWo1p7ASvF4zpssS9Ku5bj4HmPRPzDRw3WfYg3huqfVEzHSPRiTqN7Xg7BVmg5jQzwU7GgDDqNxMf7gqnpsSNxH",
  "key12": "54Kio5KyPNDhdXAXLs4Rqd7Kzt4Anx8A9Z8UCNErddXdf1EPpCWV7dH93tB8957pMCxLSW2m3AMKjcRGrCYvrLFc",
  "key13": "3u5M7yG3K3gGXnUz21Q8A6ejPLnWBPWssELg4vPoW4gzQ42D7353HDc6Q86y4647qLTdMSzd5LWb8JdbATxUV7Am",
  "key14": "4S9VA42ho6j9s9TYGKWkjiPi9BwbT2BPQ2LEahUN4s5gN7so39Xea63Z5QR4bbcNodAbtTs8X5rxRXH3QL3rMrue",
  "key15": "2AruZqK7orZYAVEHDa65nnfuLsUFuo7MH4w46ctRc45pue7A93ZrPUwg57K2nNHZmcDJWJcCaj455NchsypUnbvb",
  "key16": "5uN6FFpHtxKkgPA1XTYmRVd1ATBnJib9RFCPDu5MqRmxeMTZV3gccWF77M9D3ssHpTniQrtDzfDHDBwV3NErGg6t",
  "key17": "5FDiwea5TfuREZtU1mg59tVEYKnZkd7CxhKzKuNeAyk6hg2JqdeKJLP7VLXS5hbBfV5wP7c44EdK1Nnm72bC5XWN",
  "key18": "3m1aDQRY7yrfBDod2mn4KfmHjXbwas79zyWDx7f5mtrgp3PNdAd9vA45LkZSG4wuqtqGuTvM4NapU11DLCtsurhz",
  "key19": "Lvh8yJhpYoE2dxkV5r1V6K4GxqEN7xY2AsVZUgCR7Gcy4948dxLhcPruHYz8PDJWrAAeF9azM3LVjTDx5ow9zwN",
  "key20": "2DLbkpAdUqZsNj3kf2BW13H9Q2t4qqL4f92to4Q1P9Y77wirxkSqzHZt9fopfFomaDxr4kQ9eBSYfKnx8VurZ6ed",
  "key21": "5QsR3PbNoieZFYx1F8tyMqUnWQ9Yc3hsfuUjsFugJxMVC3CBEvwpsYd8EvWBfViUM3G1KAegv4rWtTDVdiRdP4GF",
  "key22": "4ck5c2MMfge2iRG1ntZeaBs3zZD15uJqyFEi7qjMvvAUaEU1ybapR1rxXiF3U6s41a1Z8nNiJstiHejytxo4JpAn",
  "key23": "4i2qU964bzuNFaxjwpAhXUmkp4W8ZnWE2G6w96bLxEhR3hcC3v1MwfECKzn6ZYandvkR9VCgL1k1DFsyM65xfoeN",
  "key24": "SB4c5KoB4gf4Fn36RsuxsZ6F92ah953GxyyRbTBN3TBnZwYycEZMYr3Jzp3tPMoPeWbv3sz7vcWuAMuJmxGRmFC",
  "key25": "4d9p6gGQE5o9DpSj64op6CetVrJEWPkFSta6ikzbm5pKXTwoKf2r1iAk6wqmt66spEEkGm2Lrm3J8Yud36cPazQT",
  "key26": "4ypNRdRJZsdyDDy7D1HYJ7XNvm33eQFx5VnAbxbH5xmhdPpjX6gUGs2kLUCjVehoDT9LY2c8L1HybPcxzBS3Vy8C",
  "key27": "49qwF77WmeqTUVH31jgiwz9fmN8aamyaw4cbkiNx3bfrdHe4CRUtUKLqYuJoKA8vsJkCRSLLAGZHR77qTqbP4S8e",
  "key28": "zyzumWkjCsJY39KTiK7bqWVfMykuffYGYw1jNh7m3rUdiHjdiXjwNzYg7SSPFFYb7H619kZNP9cJS3HmRw8HAy1",
  "key29": "62B7ZsGtc1SyNL86HSbiEb8e6zy4YaoJeppsF78BWCbHEGJYRjmDyPxcRQvDhZroC1qkMtYKmpE4itEt8ZdnL557",
  "key30": "3a3ieuAenpk3kUMfFjYi7sq8tW2D59Q25ZEYUzohn598bKm8xJJ8Maq3XQu9SfQRCu5HWJsbDdodwBM1MSvnq3XJ",
  "key31": "fcmXtZSmiuN9kuabUBo2MV3PrHVK5ydQ2QSXD1ryegnRoUxrQsPJoiWoEpLY1svAhTh29WXBWMCY8xDYCFo99Rv",
  "key32": "4J6iPRt2tYUNamTkDDpUkojcToXcdhRzuKQHRmGGQZs5MU1ZfnQapcH51kgxyE5XeZPskDExW85MfQ1sJATfst5H",
  "key33": "5CXaE9GkUjCbshfahKJL8onjnHdjc22YDzzsZDRocTkvsf8gXhBecpG5xyhHV6mdCg8kPGRtEmrhsquxZvFnTkLK",
  "key34": "2KTLEtQDVSneb3kXujyS5Py7ZZBwAq5VEZXLpewRhcLGqH5jBMbjPuWpDMJN6DMxwpA2XEZzr3oXjQEuCGb8xrto",
  "key35": "5TSMAmUWutLZ9r3JGgWF2UuHrbdKzGMqB1MUS6T2xYjJDbwLxmAs5RFFoAiqtaBDjxgY4tzq87CnRMX9Wd5qtjzK",
  "key36": "2tr3jhbHrg1pHrfqAPJVrBjByLBg6WYyp8F7SetsCLsUs2orMKbWbuYSzGsinvmLedCukyQDzL7VPqkCQztFN32g",
  "key37": "4q1ELbJBFvsZzmLEEgh2kHH3mu4E2EWto6L53q93ZvEopJabTMZ6dY9KJBdPtjTZKgkj6NqAhAJ3PeUNzV1No2c",
  "key38": "2uGZwGngtfuoJBcbW1nA4FYAAfTUWmLXDmAL6Vx1MzRYZeoHxYUAVky1vVhx1DKrNKwSWGXVbJppYTFX7JHjGn7R"
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
