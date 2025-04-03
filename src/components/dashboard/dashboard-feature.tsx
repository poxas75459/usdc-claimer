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
    "2zwyew6hpD9qrrSygC84mhg3y9JVQbuBWMJ5cCNDWJVKfCAcKkibLpC71PDswva7WErYufi2Crmd28M2ETugrsHN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4c4CmSSRdFfo8vPS6GSMiuFbLUQPWTmpVvBRdc1JLCDdnkGCkpDUfyPwK4Xf865MqY5zus2g4HQEuXj3JSg4v8ZZ",
  "key1": "djknqXKq6gSGgYvMzJctwintoyXE5GajgKdETUREQRAZwmT7FLrYVH5kFz8u3Z5vhjf797BoLASVdyDMs7R9T3p",
  "key2": "2maPnSn4UD5iy8vRjoMnFR9oqbX2NKHohccMTdjMTim3tnerTSHXs4PFT12ndhF5m8yq4NrTt99rxHWBSirKLhhc",
  "key3": "5vGSpR4DPu4JUBxwrRXxvtuLN8eLBWEN5tNK3JEg2mb7eLShwotK5XXPPUh6foT9af2sjEtZxWDHnXGForjgnQzw",
  "key4": "3HLr87ZZm4DHFF4WzaKsAE87v5srmoixSaEiwjWXARDcSiUn2vP71wtwq1quYLc394fwCCQnqp4ZJzgGTuaKLUQX",
  "key5": "2Bf3nuSwhLUctQL3BrFarTXjfidAdXxqThMWHG83KJUBtrqFjT1HzUxjNKNBb6sm4KcP2sqKvF1FSYurfF3X2xnL",
  "key6": "2ftUoECCdye9E4TdBMc3VLH3oor6P2Nzb2YQTStugCQxQ6EzkCxryL8d8g88t4cq8S2d7DQmhPEyos5CLT1Fcpxy",
  "key7": "2zGMWXLiNtwLj6zPtYt29WAgdFXeLcKVUSMez6mtDsgp7jAHE6BMu6B7dkMDWM84moXLKuxjT1Y3VkTPZ9aTcajh",
  "key8": "3G1vA9eAQFwtRJ7ixreBkuicqh35TXyngmc591eW59KTcwgLmufAXsKrnNbtonDcYnFWm5dgPnoHf6eRdFftBbno",
  "key9": "5D7SFDKzAneeMEKNWM6yaZLBJJ1VJzDyaoYGsKtEiJnkFf6ASqfo4dmhfgPPk5mCiL97onRNgB2VVZUykn8njQLq",
  "key10": "5mFvKTSVmUiQ5753dNiR1jA3bxM3AMtArPwPprWT5Fn193WTgukPqM7s5HvcYv8zf5oRG3oBZAgQ44mJ9fjDXF8D",
  "key11": "VvYUKQYzSMrHeqgytXQbdjaQ2G3fVCn6sXZbwMUn934HvGTncqv5KtpuYWMKBkVR1vzD6ATXswHdudL9Ck6b7h3",
  "key12": "bpaNPvAWts5QbF97NXHyrVVkaMNEoN88TftQcEYAo2hdSvVdHd3ETte3NxcnoNsRn6BH6nFLtB1TB3Q8sGL5efA",
  "key13": "21SciWomfVxcufKVc5KYr1sgidDKGGJzm8DeXT1qZcRxL9xdmc6s6ycfaiXh3HYn8qA6Ee1w2C2qimzHtmUAHPZ1",
  "key14": "GyAJN7KbKmn8ji7ZWL3kE9wdMASwyqCkxmtDTFdkQ6FKi3SEP2E6hUESywU8WK8ctb2NqsQ4iCHWddBgRQN2D4y",
  "key15": "2tGcPhxiPhqdNW7hETSNgur9nS4jAG9uJVkaBp4kB4qhM7RqtLh5v3Tb13gbyydbLPJg8AQu9WPj4hjEHyPyBM5a",
  "key16": "55ckW6YjNZb8YohodPAaESFPS623gmDoT18kM9rboix1ZfzRbfnfNkyMrYuUfijccDcLfX6ufKY4dAydrTRHS2U5",
  "key17": "2tLDircpboyKqBdtXKLRHFJi31jrGEh14SFo7BH7t4ApoZ5ChVqKNpPnfouz6L47UPKsoc4nCx2gLjicxpAVZbAQ",
  "key18": "3gy9BRfhnFi8r4wWUbmVEJKZjUpPeSfNuNvUqadV2AjTeWvw1nP966tk3iHegz13R8CdQviZPTXzWyd57uEi4rLs",
  "key19": "59TiXy1t6TtJY5HJaNTgK7dNGsYTUWuufK5S93w8WCVAVtayZN9UqWHJL9DRjnuDFC7G3YkQhPHtRNpjpjz6oVGR",
  "key20": "3o7XTAHVR8KmEpuFzg1kQ7U1XU4i8WMcZ43Jrb1pk3dBb72vwM4fkKgKmrpbQKsCCeZNy7HeCX96swTBR7G6CmdC",
  "key21": "opcZnZHmYP71oWCR6xZ33eghqyTG18yjVo2ud6obKQEGmXhJe6SjVVcjcHbD6AZLxPHzGk3L8WoDyNPx4VjzAX5",
  "key22": "ZeGSeJTdZGKqeFwYtsCap139cBUBkencnCWqQHEV6yXwJcX3Bda21Kk7o5Vni2XVo812sNCGkqjZbjUE8daaoRU",
  "key23": "5z71su1bx67yzwNvSeWtsBXnJ4WbnVcsUwFQE3Gh5k7ffUY82GEWL47pTRRZujxck89vkJnnhiDx8WR7WBNnHPSj",
  "key24": "582pokwV5QGqvSWQwtMcHBJeURUcZNpHpTR4LAAFXnp77NH9hnynSQMgLECv59aXxAjwKxyojZHZFaKw3rhzv9V4",
  "key25": "2cG1YG7NR8qLYVpZRAHAqSXa3yoDb2pPCGHgDqpyJDXsmKAZwqFHPRW2ir3nStjHMer69AigGFYnkdaHPRcK9YSf",
  "key26": "2sd6fH93QZ9Dpt7DBJthzu1XagrQRagrn7FL1Nd5QNVx1r8LGVBKnPcn82pGZTm7dE6kS9BA8Rp2SM9XwD4XmXUc",
  "key27": "qgA1s1v3wuZyJ1WyV2kNAgxuRnK7vs2MyRNPtRUG5eZ8Z5duwTFRsnP8nfMpiEFgGAtmjZTLeuz52oXaHzJxpsi",
  "key28": "3sfZuYZkrKd4jZre52LFY6N2Mx5MCtKwjy2xABSc7tZ2qmvBb8rUBVyuCxkfJRFon4jmdBsFp9ARdVwdjo1WvsGt",
  "key29": "2SxwR2UcFTBZRPtpF2sbRVQcKzxuxmkw2c6MLauVZJygrdyBnUSskFmwUbv3aapJ7rHDQ7ctvip1t7J3suHi5psn",
  "key30": "3L6FaSLbnb8MpNgjKnxHvFqE6ehhUPN4q2xMKbqpqmkPjuMah9NrTpCKXP5jNSg2s6GXNfJXS68XUkzLrcPMMWnj",
  "key31": "2ti9aEnnBqZNZXCyqqGTnbFb8ti1wVNcx46udgvTfmJ716U4kXTzaarN3LNPCmFuZmvJZUWUpgvvQLnNwUFt4p9R",
  "key32": "nGaM4CKQWKnbX8mUFarZDT3vUZik68HZ1AcK6VEko5tZnSxc3z8UQqqxRHcsDK2WFTxMJeiHgpvgQmMUUsb31pz",
  "key33": "LeUbNSdqNnFFSoct8LeCsRQruBCVfQ2ENvxfp2X5jKs6XgBVG2ewDCDsEiUguCzBm1QoZmmeTkWsQSSUQd2iywM",
  "key34": "66EhnmPFNrHHzwPXWVf9vbMjQtK2SmULwtLc7Nx95aPnxQSbQErkddFmgrpauVvmAnU6qiZ4PxHejCBWBM6r3s5J",
  "key35": "3XGaY71tP276rCyvuQC84RMiviHYFMpfWA5CH21y6UJLCYyE15eQmKPaJpFqLL2dTd3hjE1EgUnPZRRa9DffFvFM",
  "key36": "3LrWvtpU3irg9VHoANunzQpcKGqyxeovWymiaREKmiVzTXMt7rQyXbiebbXe42EvAjqitYQgr3MddaMHgnZYcFWv",
  "key37": "2LyhprKnnoNBva8PfuzXvsD4k4MGp9yZnb4TJSXEpULGfHqDJLWWwqrCVKbdkCd8W6Xw3ny4f3Xma6HBKHvUn4az",
  "key38": "62vBYdJ8eUFFpAPzyWMV1CMMYpPZxwgETENXrBtNcEphKjkXjDXCtpdby9kYfBQMLxNRRfXsKveJK3y8yhnBN81Y",
  "key39": "2aimqg3U1DxCnE5ARmYDVdv4EnECvss4jg1uxLxstWy5ELBfinU8mg6UqwpsHudWBy3YcstTejMENyi2xyHMtq3V",
  "key40": "3h6isreykCWt5CYKA9Y6JNy1JndMoBaHLKtbCabHjVz2f3Rrj1s4MY8Ernem2mnL8uEN3B7vBU92DJkD5CTzB8Rx",
  "key41": "3jKuLoSLN1JvQ9xtNjtwjYcHo5PypxnmLKjst9ptM89jADyKnmTGxb5LpHQGxZLRVWYiy7W9nzj4jDSRgZZc7kwb"
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
