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
    "N1Xmt9EbiQNVwkWx7E58ZfSXnZK5WPZFJvMA8n4sPzNYhcKL5b1eQEuDs4G2EUEfUYwSgbfip88bLJr9kHjrZwq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Wp6zvkrPaFiNij7Apxj1ZWNupkZ4UW5X99rdXNT2jyYo1ApA6xRjnJkQstR6hjXUEbYoh4LrNQLjsoBc15UKggL",
  "key1": "2srPMCi1sbC6wMD5mfPwLS9AGYwFQGzUxzZFHwaMcWDHXM2hYbbBaqL9AXWumDNQbnNNKqQezhCGgKiT2ArB5b3q",
  "key2": "23mFvBiNjYrknR6U3WZzC3knA8oX2SWL9mM5nU58JDjCRJb1JGQRVd8GcGBoMUizCsmerFUY1evLXj2U9cawU8YW",
  "key3": "RqUZu3ycC91yPXMx2z6huAmZLCPRyotZhaNdaBjq9KhNTEARWT4AqE6tJoDRvBN38J8q6kmNF8JZ38REQzjSp3r",
  "key4": "2HJwdyPbVBxvaoEJwgih1AmBoQwBcs3yQqLX6WyW63eHnwLdVKjFPbMjmHypk8VHKQkWeihx51YankauxmAcYDn1",
  "key5": "ugoeXJq4UZf16wpNRSTjjS27utLgavUrCTPawEuFirK93Um1bS1xxPB7dDbLGCC9Wr8rCmk6kyCtcfmA7vhgszA",
  "key6": "SNaXRR4sqMM1xxj2BisSU98GDpaa3Ja5VYCQQ2GUXaQQHVmj6r7m8pWqWtA6BmfFGUDaD3QN8523LnqVVXVsxVc",
  "key7": "46dZkahzupMhjnZG9AcPRTzdPyZvbeHhmxhpvVM7f4j7FTsRas5HLtEqUhLWxQhUWNE6mUszSbxuWj1RBJLYDdh7",
  "key8": "2XxQ4froffofXh6u8j7c7hmUeymqKD3eSxXajswNjXkEiSjsxqyk99J7KhRaL37Z1dMJMMkoEYEgz4HE2N5WdGSm",
  "key9": "2U1BBLYAQpDzvht96xQNdQ1Hyw4kw9jGTBTfJkTa4a1ZpFcSvdCyafLPoXvbFPRqZLRQCu9DwxDDVZWCpidemXGY",
  "key10": "5ZLNJnAEUjNo8rtJykfYYUjXTSBS1tDyZeQnj5itNjVJnrnTyPouyURcgCDsoDe4cH2bW7EzQndiM4pCrxg8t5ad",
  "key11": "CEeCeNi8d6nKgJawEptNQGMTmRJfsjTMuTwVuSHDae8x1aiYJszw32SrGuT77vndfy7UVSg2gvqMq57kLWfdyon",
  "key12": "2FFSwHYBV4s1DofwXUza9eAzmemJVopd8Tv67UJRs2XgTCbDwjoPbRoQr7aNcNvZ9K3bLr8tRPLQKqc4mEd6PH8N",
  "key13": "5LS4hPtGGEJi7RP9kF9AKWJ6sEahvMn2EujopxKrR9beW6bnhrZYW3Q3CJ3HZ1WYsb86XtW5EJoYUSvHcqzVFTPm",
  "key14": "4P7MfV83XFHmABMVrVg2WLDiZTxjT12wHzcUDHBFoGajYjpKXpuQdp2SdzBxBDfDFCHhxVXnVsdyQm4qBqurLUgV",
  "key15": "2cNcCQE23Fon8CxesUZugdGBp9WSr6TenS2HTZHaCqnZ9NyWBLU3v4mHEuyKc1R6vZvndpcBhE6DVKBEXESeXmLF",
  "key16": "3YGEwktDGCrywC7zTt5ZGCz3JPb3GXc8zLruFMCWAaujvKTQyjv2h8g6AyP7He7dPzVZ1UWcKXdgqb8XR2FqhKPT",
  "key17": "4BTCxykCUg8cuK3U6Rbn1DZg9JS3Yv2Xzs7cCbTWobeje4t83ReiizSgcfBc3yb195K1fyqyhgSbWpa9g4oKqgMX",
  "key18": "4iK1nkk6T4SnfaZuNN8HpkbvfwSAupFsNSHx2rMfR4TCWFVFwqLgMd3ZypTzsnTTrSfneKANkvKRfZiAacd8XLE6",
  "key19": "4k5XNwVM2kRJAc5Mrga3cLbQ6ZLcJTKfP4DoX2K1EFHiz5BNRyNve857oxFt3VVPfzd743UceZQ682etzFnDdvzE",
  "key20": "4yciyY2AN4UR5Wp8Ybt56UmVqv6WGv6WG5WW4QkXGCS8mn5HbCs9JybkjJHXzWuzFH7sTYU45m3wSKyEkfUDbbXz",
  "key21": "aF2Gs2ZZeLpJypvEGV7bYhPY2ZDT2SbZcNCYswa6BLCKoYCjTFGdBDV7k7JS55r272DTLFDtuM5B7EhKWvQ4QWC",
  "key22": "2gLxuZtqN2dxPkorSgEV9GQ9pTAWuRVCpQhHisUTo7sSmu1Bf99kDDCbfns11wsru7tYWM8KdgNUC9sRSZPmWtuy",
  "key23": "5n1BtarBhnjmjUZth6M6qB7jEprbmL4mwM3KzqAgDB3fpckMZ4KP7DedrYmSYebY3s3GnQB6VVyo2MEN5yJ9insu",
  "key24": "4PND4HkSjESuGLHNoGNL19wXiFKh5NA6VBakZ4eUe42TWrs6WfgSKFedKNJPyVa9KaZu2XeKqQs65gjvSzP9XpzW",
  "key25": "2Wp3279H6s8i7f3fKSYG55PQHe9b3PgdjqB5wzP1tJJVJFFPPC89kgToRhTnU7pQFrZwzvJ3JBuLttrwKHHMSWz1",
  "key26": "5oFh7PQmMw3b2LviGvoRLvrQCySUQxBiAsZ3p4th9UgFcDqJ3JbEcdXZ4fiA6DFhz2bSGgqnArcaBME7U33URzpW",
  "key27": "3Zdf8oG5qQ7eLeMZJFpyGpWDeaH5Fz5YAZPLST3WVUXEMjteXgdm1Ftq8mkHy2AitJPT25eNgGG8AqtZZ8Fy9kmF",
  "key28": "3FqWSXCu8WwnMsAX6HwVGt9Yw1vG5JmG93o7EKw94U2Bd9RhEACoB25N5wV2i2me3hxpvQ64byoLo3yNXXWiZaY3",
  "key29": "2CMJNBFFTtFWp2SukCNWy3pA5tMeFqYk3JcsGhqKrNgtNTx79YEZsbanv6mrqYNNPpgBqFCebsCkgYnvtV1GxTMH",
  "key30": "4qkPU17hFi8uQkXQoE6GEMkZxTAeX7sqKKh34Pf2RcKhPmz7Z71jedpJXTmfwXEpAAkP9ZDyifnnGM1F2YYRnPGJ",
  "key31": "2zAn5DcGN1TjQBQ4eD4XMomBb4mR2qrs3a1M5kpUhdsM9gv6dVPvYC89bheH5kdA1vucSTWxgve7v4yCP7KwbGUu",
  "key32": "ZvkPJLxbdvXyTYz3SK12DPTzf2fdRPpvw1Fh8xAjeC6XAn7L5BYqPpSGgyrtvhAezY36U5mSnKy5zJyidJpLraj",
  "key33": "4JaDnAYGaHb8pHEo9drcUnABPuNQLrzMZHr7CFEJVdJCZv5hkjNXYY7R7PUJoTvtUieJVTFdzEGU2CY3y7yor5qf",
  "key34": "3ERcchVWZ447TLebvKr3YRMSNbmc981ZWwQfhiHKEfkBJXjBW8bpvMwGyBpj12q2o5jjXvNtCpovY4Svs8eyfxQg",
  "key35": "2Hp3vya76oihCEjWJm43UMv6iMSFiG3JfqLn4dqDE61D9LSQDTzmYAiraWr4Vao7zktNY6nj5MNnisL8tF5gTmVD",
  "key36": "5Acye3ke1ikybE1LAmRqGHcnJxeC9PSupK2qZp95QtJZYSyKra8E9S94muhXQGuHH8239VFDAonLMQpiEFQq3Ncc",
  "key37": "2U8W3SXjb3yBa1FKQUdbM2eZSzrsoTYe1qYfLqxZayNesgrJZq6YRyxH1DfiM7p3QM88TFupGbKRPHGBRS9huaMi",
  "key38": "4J6BQ22yLdpCMQg6Si5tDNHEwzij6UEG7oraqT78nuP9SXruRsLo46ioaZG3yu36vr74M2tZmEA6rTDZAUYwzDTn",
  "key39": "2m9zVXrzyLQ8guT6hAAqnkzzZTHFJu6e7579uT7quaMesM63ginyv4uCNamGxEujGhyTEEFRHnGXHDiRyu7f6po",
  "key40": "4sqa539FxuH6UiL4k79WT2nF4qtu1y9MudS1fmoDfzmMMZMz2aL69xwLehjifFQJbUBbK6CF8xyxsqu6svoQFU18",
  "key41": "3p5E7gCha4sNScbmGUhB8LeRuyoYv4QSRZEFy9KWiqATbdCRDpqQvPJXwG5ZeGwaaASur5EKFo6XU4qt1pAQi4QB",
  "key42": "23sGPKxR8TajipXK6dfP4HaHr998xto9A9NPA4C45wMrFMgWe3hVqk6JsjwoFXeugRoZZF5JTDgJwVYVcBPcnCZi",
  "key43": "3yAxd7qnavHt32PbUUtVfsR7NT8StWWdjd6C6jcPKYv67MauzyjWXDpbn1C438KCpNdDt3R3ta5Nba4fuYkVvj1S",
  "key44": "4zmDqVpR5XaHTduzTsS41qgMsoP5LUkpjBhchUyKTqJkAJa9TYuEsNLoN6Z192c2yu173J9Zo4zW4sXhr6nH2fQY",
  "key45": "4gqcuadYLPrbr7drYmsnVDPJ3iQ7y2r93m5gNYd6T1J8qznHvm6Dx572Cc2tdANcuKQiw73HxX8UnMxSS2DGSHXf",
  "key46": "3hQjS4FF2usXwm2JAFePLvQDdGzvSXfc4ycSYrrWAXmXD46HwpPeV5CKsuMWs89z1w9F2XGEELBdFmauCFRAGaXQ"
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
