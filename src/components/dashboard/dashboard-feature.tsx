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
    "3xLk4cZZEoWKBGkP2W8hbwUyWHkcyqqfzYPTGKQosE4zL8aY2thUvDQiHdEorBHpCTmmri4eaPnE5qjevCejoFiu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26TYQZjk6UbbkdmCVtFhdSJuQrTQigUnCS3SYPmaHKPX9CNZT9oUMaZcC4uce2tBQNsKNZkoibov3VGk4VRT8u5Q",
  "key1": "4FEfKkYoj41EfCCnRFnwXAbYH76D7y3QzXKbaZQ852i2tU69YLqiQaNnUZZSYNaNUwuewTxxQhs8xPDPpzzUgUnZ",
  "key2": "4HuPfuS9i7NBH5xBUNFWPfd63UpNXWhLMy1kgkVp8DtBdDGrDPoGiTYMuuVPLJHpXowLmzRBNdD2SThbcWsHGGgJ",
  "key3": "3R2ibtbtUrSheq3RGsJWtWUiZhzCYgDGPGpqLFpJYJobr9UxNTijALkd9ZgceN19jpKAQGzAgF7j67mmZzABTrZo",
  "key4": "2yFAgwQB1zePoYPrVHqLQaRuYmxiRwj3DJos8Mj4FrRhg7dAmJaGV4NkQxd33iXYHYV5vh68Bzsei7LeKGsfUbVb",
  "key5": "3nAcgNFthhmTU77BMYthna6hkWMobYAetWGYfS1ZToAzyZHdJyMiZMU8Nbkinv3xhrLpGHWWc8Pk84NRcZqaZz8Q",
  "key6": "t7GSXa8JUZSpg3SPacn6KQHV1pP8MmjMNPYgKxvKsjuv2oPTktpgSPKT2EevsoDkLBLBm53RtPF2UZDAWESXMAL",
  "key7": "5p66N7UQrfgPGcF7GZJ2mYHmMs4tXjdbyieTQAChn4JwLxPAVJVexCve2s2wvdgYoypXVCUmi4ecJfX3FCotHm5v",
  "key8": "hTmQKNpH5rdZVppJjC3UeK6sSbRL4WC3WUUX9dRKT8poDbgYtFwBAkAMsaGuZNPqbVBg6kXcCtGkFbUBtC6i9Ae",
  "key9": "4BKhzGG51EQ62ngviX5gxmLmMzXXx9KgXbDKQDs1AmZcM8La8FyUyd1k5kzWXEwam9jRTZbvaymf25wJwr4qDoWu",
  "key10": "2cBpvswn8BUZdqKbsRgiiaGsUTKKTzGdryhjSZnAPGMFb3QD2sa8ZxeehFUpjMimcvsbioMCEivZ95k7Rh9hs26S",
  "key11": "2CCeoRNvrno4YWeJUxPYhXuPedSNSWDW4kArakoVnT23qw1YsCfCsegn3fEn8WqVRo9DmT2XJbPyQs1kFd9x49No",
  "key12": "mr6W5qxWT7kQnNPnug9588rT8MS5QEa4bp3PSHArEEPRJQbMcRXxEgJ8uwf4kXCNPYDwRbt2FWaezLMHgYpQ3bM",
  "key13": "43SuokniphG9yQFZ9FTcnRi7WXFnvXyrV9PQ3NSJoiJUrvZkLGaQWgfsn3UVUL118PS3wFESCp2MvPfRbk7jyGUo",
  "key14": "2oK6g3C1nUbe2h86m2kWC9mGutFkAAsAfH2YpErmgBKybxRwviiKtPJ7A8KzyXgd4Ddg39DcWWNiu3JXpEPdPx95",
  "key15": "5gfuXtmEy1bXgCZ9Ckq1PjPo4r7yBodw6qvFrjZJWGSCFq1ohUpin4b9YVa92SA8P63oFSYtJUwNJBGghPRKxu4k",
  "key16": "4B6hCf5NZBoonLXZZZ9ndKmaVkUouY7txdJtx5MeY7nAA5fbqgFMhTuLuNv1MnTV6nzvzF1bTMpQNmfnNgYKZL6P",
  "key17": "3hHTtwsqrd7c9rC2V2VV6k4n57iW2GXijJK5Xu2hyXw58E7NkBNSQE2Hq7iFhxkE8N33y8YThUY5a4cE3oRMaGuU",
  "key18": "4pBFW5RiQdE7T8zJHtSaCNerRpAPBV8jHLzFMF2oGVDL7eEKUJD6W84CJ6PFUWxiSiwsLV3FzyRv961o4ArkhRoy",
  "key19": "3f57UB8vj7LaDpn4muACZxi3SD7iVdrWy1dJafPi6tyErmhNSyQxv3LKWX14BMGm9V7EE1scTGDYDLm2QTVDi7EK",
  "key20": "4iWDPASzZMYm47YqY4k7XYzAoQ1PZsNAPBfzm92kdsFq1if2gPqtHXy7shjDUSFrVqwzbdFycES2U8RZDrRoUqnw",
  "key21": "5WqpAM1e7LGHe6m6SXgjWQ5jmoqd9mnMV9mzeRQQqCnXCMdPY2mm2UNPcwKjKJqGnALxsgGAZshqEp1AomisDSCz",
  "key22": "4XTjW5R1GYovtcrBQEQZx9E58Un8hgeX6GbmqHRvx1Vk1xVJfqJWpAstT2LQADXV8SJcujjsd4YQeak6JNyo28yN",
  "key23": "3UiGQJLE7Pp4H9iC7f7sFTfzpcAF9M279X7K7uTz7KMyf55iTnoyv74Np9PGT7T391hTeQMhmuSMrZAdBw3V2xZt",
  "key24": "2GiWMaCPGqKUxXRTZjUn1mvjrnUV7PgU2LxV232KJLXYSbvaXVjxzoDMsx1zHJNSABiU7rS1sVZpRK5bxDZoc259",
  "key25": "5vFU431mthEvUydgzsdzDtFJLJqWm6EjBPwV4KupoEwnGJwgXhUH9QDYbD6n7YcyUEpDgc9QsZfn8bWbneTXssnH",
  "key26": "3ETdsoVczVVCKaCSTaPQnfupVapJMTxBavVfmvpELxvRkNyTW1DEcSYqDnexKNKEZkNrXg3dKQS8FkZQsn9JZroz",
  "key27": "RstpX58oHCba1a69cUZT2HwGf5ivXFPuzuYgcJemvKXQJpaVUNXabyoFgha8MuLoVG2ZEEjCcCVMAtSuQpAW5Gm",
  "key28": "5fDFzzDhQ8QccBBtjeJrRSPQ2JsFD6v78ePuNLFCFGm6UFNBWkTiFU1nThsheNuoWE5RbU6YuQsw57dep4TvS8jA",
  "key29": "2n5uVDe3woti8yACU6JhqA8sBzK7Gw7v5rWV9zEFoMGAS7kUyH6yZNfEoa9cJa1X7fFszuKCbTT7icYN9XoQmZd1",
  "key30": "icyYkRbzC4LyJMCP2LMZqca3A68i9hQ8MrUaBUZYMrDN97N1bXucbmyWJLjot9v6At361TGiWdh9zPBFqf5oYay",
  "key31": "2ss7w2m4eNbwZKY5cvLgixV4gdoAYGZyaKkJPvTVTqpPZeUHtXLVjyWJqzk7sCppCkCCcAWRveDsWYmxq4poTsMx",
  "key32": "3EST5UjTwGNxmcPSChrJ9NNxf6gZu8LbwvJTdwrpPN4tdiEBxd5Kwp66CRmjQRPyz5f2Goxv4jQVwiix1bscjhe8",
  "key33": "61cGs2ryrEZktvLGVLpDu6o5JiySUH641Lghjd61DmMrZpkJcZZu3vjay3bG1KJHuHJMbM2U5wpAeoVeJaKJXuBy",
  "key34": "bpujPh2SrKV1m2xrmtpQQNZYS4z4EtsbnjvFF7VdvEN5vNXHMetUpGci2aPuGVMxoyauZ6BEEjgkwLyFhG24xxb",
  "key35": "5oFBWeyhHNayEpDPxDLyRefrGLqCSyRqp7EeCTSepHx7bjZ4YN4zVzncviDuLcvqaXy8fZjzhrE5nibbWWevUE95",
  "key36": "N1pq5uj3ptGzRJEQhVRJhgp7WK9hifQJLNHuPdnukBBNus2fiKnB7k5KVziYEN8FkdRWv3Jh7mcdzpSZqie58Xs",
  "key37": "2qoaCG1r434ma2xVHU53XRNhHqDEe4Nv8sqYy3FFRbQr96WRdg8mHtY8pk6B9RiYUBNwZYj3GpdDxDzxrqKNNiax",
  "key38": "54x1BP72PrVLeHBW4wTKh5pCmanmJjmCVQtFfA2przehd5AFEEbRYxSCA8VRX957RYN94534YTqgasnj6T3uFztM",
  "key39": "2pBPuvN6f6AwKMoNeyuT2ukqECQPUCokz8by4K3AtV213GehfeRPHsUWtFJLRniyX54bu6SDG1xCEx2MG7ZHEXRZ",
  "key40": "385MY7ucK1sA2Lirewb9avxSfL8MjuUnWjgmrCLU4d8r86hA16LLDfgkXHNsfM6ND4PLiaTBEtLK9wSoUwGyFiBD",
  "key41": "4Ke6GdYaZnB3MzWAirJPXPoLQn5NqFbvWye2zoGUgpS57NJcFAxp3dofYjCDci6DoKBxoYHdVxkGeqS2ruYCLonR",
  "key42": "3CaZpg4FpDG2CBSkVLFtsEj1DoMesWMP9aetN5dV8TEJwRhWouZ6ZZgcmoiZs8fGC7ivjdzHgUhiGxMCPe1py57C",
  "key43": "4hyzvQTgbsgRgEYuNf1onyFfny4qYneL3KBMWgdEYKLksLYzcw9GzwJsvLe4LeLPunuAeLrxEdqWFiyb3JqkAxcT"
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
