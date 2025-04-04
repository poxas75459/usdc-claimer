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
    "kCwdEf9sTTJNdKkAdWbtPG1p16mrfezuf7K3TEDFPkisXeFDhKAAf8VQ6ipxV8NdWKiiHRw5RPhvYcV3qLmKtsm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5pXVqSLQgBLDhFKM81yvW25tuD3FVc2Mi9onrHkr3xTfMfc71Qz3PuQ2QBSGq3PTuAimMFc4fmFH3LYPLKN7i3RK",
  "key1": "4hpywbftnrkR7MJTqAydxSQAdU7v7qaCbVBka5Fvt3pGi8GnSjVVuBfNMFeP9gxwV12h42XNaFcR959ZcxqjbHnm",
  "key2": "3guKcEpiDhoN1BEhBYrBubKksZpzs6SJ5epKhBGi2xB4YFEqN5jGDvQfB2W8zZLqK4HSGEUyhmYdW6uQRULkSKGF",
  "key3": "GtVqkZ4GRb9B3zrwd4d3Ne9qZCitRvhPnQ6VcFDYuSxxPpiXxTqjA6N9kKrfskvhD2nBJ7ga4yUbbAASbbQvFwB",
  "key4": "3Q139NteDiBZ9ryktN8uf9HcWqgtrYNCNkH8z5E4Gu3gneJwFPuPnDLmKR12FXnuES4SLxQpa3C2B32Nxj8oiSA3",
  "key5": "5mo7SKuJJUWG3i2QU7mSuCjdjww83edF2YM6YtEKy5ZsCqv8ui2dppV1kVkFhMFi29MDubHyyREFoLy1bjVfsjVa",
  "key6": "4Wkd3ec1ZPCBqZXNiqy5WWEmesyas4Xy9TG6yuoEcDppoSV757zC7ZCFcrXNPmq21DaB32tqkiMArt8yYsUZrCD7",
  "key7": "58HTnXnHT3gorbqp7zaDJBfLB3wfJsr4QtxgvpfJfVkuVubteNqRrPUS2H8i5Nbwss5d1iqS1AJfSAQ2YtKQEW3R",
  "key8": "3XTzAG55GPB31KgXHseg4Li1ccKAx567fdA2GRZE2PhkjuU5d858a7tyXeJSnRCV8uF4gb934L3FdPvCitpBdyf",
  "key9": "489k3cYxKNpgPuz2dN15uDKTXQgrjZ7gG1UQwbVjvZaakLaJuiQvetpioZKub5qGG4g1RnBetdk9xfmMFAuzHFx7",
  "key10": "2PabTXxViZpQ6zrDD99etfrmiamBVREvjRCDioviLzS2HhzHuCTyfKhuYtKvJMcqk7ewvycM7mCYq25jRxKSMjux",
  "key11": "4KY5zy2xn5yBnrcE7YF8oihasnTikiLdcL62iSMM1ttD1SuNNyP7rx5XKtkSSJve58afokUPywi1UA9kjN83E7Lc",
  "key12": "5A2MZGT4XUQQjmRrRUtZY9QB63rWcJdZwBmgqzrajajezw5dm3h9e48JWVMAow1chhtFEzRHPoV7cYTYpTaXHJxk",
  "key13": "2YmfyJSSTZi9et8WDKoEB5PTpRvxd6xCjX5vtM8F7VcdBnTUXkNURGhdGzPKe3SpgrgtVEojoBEb3arVvEtwGrZH",
  "key14": "2Vx45QhCsYxe4RGUZmiZetiiNB3XYFEvE5oNY2Jx3nVFVooriyeA5BaaGEQGENuxyqiygFcujm1tBxrWuTV6MnLr",
  "key15": "3eE9F1BY52p2rYDaQGuLzxtFbsngDkJ5uEkZP6ruqxSUwHJ5fD7CRdZzA9GTg1FwneLqKHdJVFHNokfr3YVcDwLS",
  "key16": "2jYe1o1Yt3ybE4ZLWFAACHiaV1rL7TQ9qVKMuh26fiU8pcG4vidfzcnyRADy3Sc7dFNwfrPr19EZcJFeo9J3QKfK",
  "key17": "2mChkVpn1ppvCgBhJMWKSoFd1gk89SyzBs5bJHKiffW9t7JM4dvADsX3F6SLF9K7yE6HPLBhmP6HsocQk8MqJk2P",
  "key18": "5TcXtPMjJVhyobrnRkxV3XwkKiAy7p4Bj5E5JzAUo2uaTRE7Z2Vg5zdAfbee8E8FCbkCXZmvgcJjnV149EYVVsbH",
  "key19": "2jVVqCDd9z4hvKcz4NTLD4246haP5XUAW21gcfikCuhsERSXzC9C9STJi2kyMGGPvLxpXHVtez9g668QQPvmiD8G",
  "key20": "31NAa61vPp8ZaaPWo4xTmsTWwsoTw2BAj5zPQjy34J4LVuPYFev6mxx4cKf5LVYuu1cLnprVfG7ge4FjpWfWMLpu",
  "key21": "3qFuL2P6QdupBzeHR7CJ51AWNVZeRt5NK3yHSMDWNNbY3Ys1ArgoqFsL7uA7b5kzmqojv3ec5bTBnnFrzFy8EQQi",
  "key22": "rwZBBnsZQRf2JmZ4R5aXQKHA6hwrgoU2L2VzrZuAEPADcdnVvj2Z71eeLmAj7aKNZMJkm6LRd6NBFUBcLuXWKao",
  "key23": "2D3yc1a6AMenZGuwoPfWtfaoZvp7Mr3RvcvLiBogcVdPgRnMXWae84YomJfxXFs1RotMayhz5931HwWLj8FXNkM2",
  "key24": "6QD9aVmoQkAKUhtx356xFCuiVtN2KU1iet5LuJWkwrfcRp8eiAEoGr97YPQ9Aqty1y1CCFu4kURhVUb1TDjaAX1",
  "key25": "2fyy6ubSf4KS9n83xt6NM5nbCV7984sSH1KDhTAjeMVQM1ETchRVWihHkzHnxR4dvyyAn283SWTJH2iitUpuDPZZ",
  "key26": "3Mdv86druxR46UX7sggjPaWFX5jnSqKSDQ8o4rysKKeoffssoocpHzhAwWe9Lgbb1TQDrgnxmsk2Mk6Deu8XHwb",
  "key27": "4gDThPN8fUgJ4yq3BaJ4PoQJfw5CyTL1Z54n5Da8s1dAsyqYzGf3F5VU7116oqZkp3yiiXmB2aAXnsNME5NmKwjf",
  "key28": "CoWBj8BdbbQopLZ9FuJpyvXaHsMyAKqrQPEAL4a8mksqh3dcbzQXfTHGCX88uDhQ4pe8sHm4iYyNKyr9NNdvSA7",
  "key29": "2AHcyjvoH7FGF36NzDgfqtrCyr1BdQkdoAZSWPc5rt5CiP4WuG2JYsKZHkEXjLGQVszVRgFtP3LiJcHy8EzUMyhC",
  "key30": "4kQBS7kgxnEtuP49yA1AZiKjiHLxAEnx9S2hVBBXjoHSTZm9zQktBDwamjfnQq2LQSSUucqoyVfytpqNjd9hp5xR",
  "key31": "41xNpoc9MNduKSiCf1WSo8mXHPXFEw3azfyyBFHEhA3rPj2BMnK7vFjni96cZZW6kPfdEKoNaMZxBKdF2vjxFR2h",
  "key32": "4Nd1hDWXU3Cj5g9DgPp8u3cjPDxG3XQ4t31M1SUPxBnnxJkfWzwoCX7qZKe3a4A84X4cJJJjcWND8jVF56prioeY",
  "key33": "5PsoaqAinXeyBh75pjXjNqDJEC1UGE1j9iLKSznFo4M3122yRBxF1PNhyZBRWaAhEr6iM9twLeY1MXTVrBrzPHom",
  "key34": "3Pi3u17qmqbrk5jHev27fgkr6RoV17efkm7ppuksHLefVJqYvbpCrHkyovckUog68fhstKi2QduHG81r51ugvAis",
  "key35": "5aSegbuZrC5xopQaqpSB9HRy6SdvjkSgcKpXSpWzzTnMrKkx7eN9xBFjQsgZpzKwd66SrBTaz2ySrJ6E4JHSSXWa",
  "key36": "2GY9oQQxt5T5cB5zX2QuW9mCM2sN3betsvyrAAnD3YR1cJkrh7vkUaqyS4Scuxcdb7LqdBnFE9t2XVGGrQsFciW6",
  "key37": "3Fr2pxpf5TFc1svjHsMoGfTWvyS6FcVN1jqCTZzPHuD5EeyxDuyb7jojgWRXXxTTy42UnEB4PXdr5bE7UMmFBB3t",
  "key38": "5Hdsju9kaDyMtioVZjqU1UtxboCc59LYC95dJpXZizWDrB1LTARvfaQvFNB1AQSDRJSeLtZsuNM22aAD9a2JL6JZ",
  "key39": "5WwWJUSz4MPttGzLCe92347VuAYmqKeBDWsDzxM1R6vAtPfHAQYpMimEgNRkfirW46psLMkFwriqsF683YZ44VkG",
  "key40": "466fnVWJDd9FGTMCLLiRiNFWMtG26KydRY5iyqbd9Dn3dwSEUFeyfwPaa9RXesf4pbedsDRNYaNxEAYGSULRMC9E",
  "key41": "5V7QE6VoxAvSuYfgYmfBsX5qyQrDWLusB5pYJ5SYr9qFaJWHH4gCUJur7Bq656W1iDuCCWheQstyuZDiWY6EBxER",
  "key42": "38EDQKrhejfWVVPeFf9xpBfg6dHRJuemNX6567EqBeKrWMn9t8YYczRqwPF1o1ZrMjSQcGYUMa2HxDJ7qTUrBuyf",
  "key43": "3q5WcZD6EkDJGPZDiDXRNcxPS6kBy8QVfMhr2YRAKGfWcc2rvhkLXAbuwP4uaunbBZwekU5BxSuHYqs5B1ZrpjZ2",
  "key44": "2G8CZaHs8JgtU6kjvxx86jMEztvVtav5ywR14VJuejFbiQ7M4VVdsBFPVm9orngZxp51y8SMA716eATjL8iMXnKS",
  "key45": "43bcrbo8P38k2kAjZVShhZ2E6abNN9ikGiKQnPpAgpEUSnKA4xdJPfwK7RCecN3SNAxBScNUEDUkUVvRhQZey4qZ",
  "key46": "5AJPLseEGm3W8DGqLcqrACy8fXeQ1skEjC5PV5a4LRJvkqjvf18ms6YZ2qWMaE7SGvUdp3KLjftaA8Q1VXrd47a1",
  "key47": "4iMs6XvGYxDo5PZ15Rpn3VNXauLgVBTJ7sMWupeFnHWD15ieA4m2W5xrANec92dQRFWUtqEmeARJwiWVkChJ2KSK"
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
