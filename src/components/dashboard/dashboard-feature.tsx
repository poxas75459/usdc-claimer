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
    "5ViJsLkGNM8AHXRsgJer9rM9buFqYWJBGTuqB71tQvgRHqz3JrcBtxebQwiJ5nqRjuYxTYQh58LcEgKokXz4CokL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2joWrWNs1STQL9vs8sW66McuaKAyiYngtkkcTDGj9Qj3b91rRCU3WHFb4oLohdNyJkCo1Da2X7YPxrJGaCWiXL63",
  "key1": "56UJ6W6hRhNqCjz53K2igYncxrGoWZbBAzi1juTFzPvvQDmLtUNvZx4JRnvGcxWLn5BVWzFonRYz9gFXnkv9msrV",
  "key2": "5q5BejwjU9cg99QRTEZXBsCNXMBZQVb2HhFL1eemfn28un972EpfxSeTQMGGdG1Esz74NdsigZuB4N97MkaRrNFr",
  "key3": "KaMJPsdJg6tj9Rg26GQdasERUa5FZHBBSzVjiDWq4hWnhRstFSgFjR7zjGx38ApC6DPbVDN4zGEtwz8HbHxP8Fg",
  "key4": "3S849nRJJBsJD71aictTknC2p6rbm9YwbSjMgkF4tdDf6iZCSnUMrWZatGpmMp5KzzHaioMbzLYyYvUN5rPfcm8P",
  "key5": "2JwgVwwCkPUBp6LLGBBeqhUukRxmfa9z4EfUKonyYgEpNhqNfDqDLmDSq8mYjfZbqMLYKb3fMwWwcHMctqyzQsfk",
  "key6": "nvJxswdFSJyL7AdcYo9KqAzB91uoXSdyNbCmPYnMUFR1V5N1myD6AypRHTLNjJ9afPCEW9ExmZbPvA8a6YFrhT8",
  "key7": "YrciM5CFado74uK23WSwTsUgWHMrDEgNuYitDt7yTec4xsDBL1gDyYrbH79yZnBSfDj84eLAt6Lkf8ZJjqrS8U2",
  "key8": "4xja2SeTTydwT8XsEDX3FkWAopSEBfuMCXXxAzT4sgh1Rc5Cmxp9PXWSZYfuxU7fuHYfzzwT66oFZUDYbL1dsatZ",
  "key9": "2m5w8MU8TPJzogHV3Q7ZA5Sn3gVCu7K8rvz6svRREmfXPapSyFXHKGy9KPUifwPNjwHoiTqnY9zmCSjMbPtY88NU",
  "key10": "3JfVPXfDqMTFPLYJgLH4XFhKMiQT3fe6ibz3q1q4r8ECCNdkXwEqa8MGewfJEoddMrMNKMUESN4k9g66wbfDR8Pu",
  "key11": "4GEjUcZfA8f69fsT2PmqvawXbSL9q8Q4hMB5QPyLpiULjj7BM2wmnejPXTpwefq4V3GUzNZhE4uV6uxG3ay2MJxL",
  "key12": "5o44h59Bwjw7TG9tqBW3sc3cn4tRwbpexrpLTRVJafJhPxxPGsSKrUnYaSKH46dL8ut9EqL9cgm7tYBXGBVwDmbt",
  "key13": "5nGPt7VkThssnA8ShrnbKJY3YW7a1UUmfCwRH59EjpYsZ9QpRtkaWLyBU7QMXA7qEnRAA3RQnRmYAqsBT6agCUVV",
  "key14": "4rvRPcVnt6MZkdDaQbZNQuKoNA8UKuCN3Laq4abPWSFYc9So7w78W31SEkMBg1ahhBedURLPcsh7tZrYFry8qASY",
  "key15": "49QoZgmQ5AtZq1NLKiz4yyhKDwniVS6Cm5FDfkLUAR1vNqbuS9G593xADiHxyZEfR95qHxxw3VG7ELPXxwCjgXnZ",
  "key16": "2Tc7URWTVifp26Hsxknu7dWDFxoXfXeW1y6L8uSwD6jhmHN6PHqQ51i2gCRx3RMjEtH7Yxo9SXxzSzqrp9N9tujw",
  "key17": "2UZ8dZ1X8q528gUggA16wgjPemTcw2e5t6p36S4N2bNupHU8uvFVo4mFyhYUxHikpsy4smp4qErzi17KLu47Brkb",
  "key18": "wv6jzJgMKLk2kqNFUq5nzGQwti9nggxsXKLpdsgq2YKDmYNxt7xCax1Zt5s9SVe8MVj5UM1iMtaoi9NhMUPUMwx",
  "key19": "3wDqUWdLgUecMf356NgeqvgfeMKHbzHFqR9zbUgtMctY9ZCPEPMnwsK7gLMwjyb6JwkzaDGvzCA6uf7irYj4wTWw",
  "key20": "qxuFcjZUKUkqAgQR2Txc2k55Z2LzqspYsM515TzjVpbBrJDnAiNWj59kPaPYyAV1jK9xqFzGmWyWNh84Mf2qgPg",
  "key21": "2VeUSh1Ys1QM1XQzV2PVqqVSoSc6yr1f17N7gLbuSdKvBmno4g2obigN7SVjKWEnoWAgW7LQ8WTRhb5nuceZ9Tmg",
  "key22": "BGD3ijWV25DWvh4YgqbRevWkHQWWVe2MpBCrAa3bet8bufr1yMgQiVeiTNhHdYUUfCsvHenNQSCkSsu1Vy23rkX",
  "key23": "RjsVJgghB6QQXTFDx8zmvPCYGg4CHd4EwhsLT8eGAbVebe2EKc72NqMHjVwaigmsYQC7pY6NBQhTbzht5edSvjK",
  "key24": "Ddk9LXU3bKSZoMsMiTimDq7b97kZhJuoXvAW7Ravm52bUD4anG9ciAngm62nXATuKNuiwRnfa2wbbpecHQfnmuV",
  "key25": "MeKwXAgTU63AVEqjmeoNhCwhtKxHFRCFEYKbUYNJoWLFTaDsoh6WmpnweBYSRSgkUzYdYRXvFZYsn4vbdFXkb3w",
  "key26": "CUk5iVDWhd1b1uhZhbXD15F44kFQ25kCWtRmG6rihScVHaQMaJscymMP1NiScCamHMNCWjcvs7MBCWcmW7ott3P",
  "key27": "iAsdqEG9yV2RGp5CGNCoWgBvCuDDyfBhhvY4hGEZm7Z2kQEVMQj3aT6oD3asjY7M6jR4ov1ur3qnEkCpG8MD5MH",
  "key28": "2BYEQxAi51isP9urVkg7VaWDF1yLSHQD8JWm146fqD839GuwXAnLoP2TjAveWdaXua39zcar8GRMw9gQM5NFFWLd",
  "key29": "uXpG3vMyt1kA7yTx4M3sNcGLbrcHZuGNnZw3wnk61xLmfBHdEXfPeBXQdEzmADyJEo2D85bRviUZpQM8uaxZKRS",
  "key30": "5Wh5611Xgfz73VHqY3e6JDis56EdHRCLNiou6Y1ZbbzEDJX1yLf6vtCe1u9mc4W4kKMYZvqZFSsrwD8Qqy38DBqZ",
  "key31": "Vca8RACua7rVvvGm5f7jAupjmTJhPxj5eYTTULnN97QVSccc1hTWWje2e4Pg3tZaSoymiPPMzEyKE1x5fsBAkPr",
  "key32": "5nopndxbivrGoD9MngpmVeA2eBTPFs3WSu4Mzof84ceVPT9MwaWNZkkwSbU7xeSScNQTJHBse18NUoXDw55U6f6a",
  "key33": "57oBuafaKTSdh1N6GCkYsRkSkm6Ls11WeoKw1qt7kzYqoDuZJ6jC49yqJCLaVQtSD9szFUiNxbu6KQicjeUphBxw",
  "key34": "z9dguExWjkZAsedW7aKJR5ShKL2hw9FdeotXhYtXJLWSQiCeJZuvhUsuX2DdFMqCK8uukof9tdxppppWeUpinZo",
  "key35": "fjN2gtv7fpi3KSRYWJjvkbKvMJeCjhycRmHyguHohtwkgzkdEGgjseJn9sdrmQJYab2nwjQpHZERzPRv8r1q2H1",
  "key36": "3u2JGrtrTKMooPY7UTRs9mDk1KXFnAzrLmsVJYGVPegZ1dtfrN4xCJWEifcxCZXDurwYjCfdoytVi3vdnePbFzkh",
  "key37": "29TUqQYKSU7s41jgUca3NKFz5fXz3zxPDaWU6uhX655ieCkQMDrK4rhwMffpXVXMWv2eLNiMTzLWN5nbxgQKF9M2",
  "key38": "29gKGJC5WpMSgDPZi976nqM65Q92ihWM5tNezugX5eiHomcWweBpkje431EXfmnamDUFmvBYtFXuXkCbFpXnoi2j",
  "key39": "49GHy5j1ijQfkYyoCBVNYr9zXVaLoiuMsBM4umgSmoyJBy4LjJ4Z7vixPa5N4hB5Thbkexhsr3xVmEvZcPJoaV96",
  "key40": "sNiPLYi63si5WHTvg5ZYiZBY7CRL2WdRiWNDnJQRpf4vM2xJ9zKHVLKA25htZ7GX2FJzyxmVfLoSeRSLN7o9fCe",
  "key41": "3RNTU55ZESk6bwMkpXHPBHbhZk2fu21wmGqJqMzCGFC6nfrW9yZjQEyPcsv5ZgjwozrKRWiocLHPgZYzqazSr9Sd",
  "key42": "SzQWYJSskrwHJCD8iZJUj8G5dCEwsT7AHN4fTkW5LjyeGjDgG6wYgkL9Ex6Z4Q4jQQ9oAM5NQqkpGVZubc9k8ZG",
  "key43": "66iWYuniTx8uQaq2bRxo4TLLmCreoEDbc7S9NDVovxAnaXg3A97dtNPSL2KZ7wmYhNQ5QbbUzh7qZ1iMp5Uxirid",
  "key44": "2HQZFJtxhufMe51M5hRZuMeRevAAMMzLxjanSJvyfZNUSkQJini34GdWdjWcvyLmdamHkUurrMttFN4fbCsZZNEb",
  "key45": "22h4gRVAZGfyVPzdUvQVSdy1mxL461BRbNXuWzqeT9voFWFzGHS1pRkFQQTqYADxtYzKSHNAbmz8VVb2G2WGzvyE",
  "key46": "2FTfb6gvW1Twwdzb1cpM3FHtznaR81XjPMTUjKoJmM1h7Q1527qa6CHzUMZJ5VnjdRzfH4gmc8g6iVBLkx9KsPiq",
  "key47": "61C56yUhqU6ZmSwz2KDrPB2ojNrAJk5jj25uxsixvF7y2BZ93nLNqgsN1GmvgdCiW6AkGwBZ2Demmz73WX4ongsG",
  "key48": "3DAn8uE3eLihRJqWBKn31aGa41AtuXm2eJtaC6e7T3YqaXUs1D7bgBgDPXwi3fJSv3FPXAkBWpsuNsphXDJ8dHFn"
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
