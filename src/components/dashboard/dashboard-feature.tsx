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
    "KXdCPUcxdLWmpndRUSEfZqa7Mx8uUyArRwetJwjM2XiMQEh2RGJ9SRhEXKw9LY3tM7N9stJh1gNoN9Vq7D2KMhG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3aR8YbqhjHaXzyojLC5wNodrEQYkukaWG81BXb79X9ynqLCop7H24rKt7kXYCFyeKEY4kHiFNViQaRBSYyHc26fV",
  "key1": "3AXCqNc8gv7tAN4PMtwLQFMHbPvdcLLSX3grGWx9MDnm3EWtR4wooQtUGj3H9rFXTf8doB423mR7tYQbFvvwjw84",
  "key2": "28LY8ngB9uiWFfwS5xUUJn4ckjr45Te9NbR1bxGZurAncqVQ4baft36owwBv2GeHudjwPUDogiiyFLKD2z69BbYh",
  "key3": "1Ph6eiHBNSZnYcrJ7hXcbC5hHyj2QFtkgb7UsPjbNXLyH5roBA3q6QbmV9rH9inWeWv7hWCjHmsUtqgE9p8rSUF",
  "key4": "GwAD89kZqPS2Cvmczp2NdWvnZCfHVeU5ddpierYF4UfUGXzQmA8MEiaYW1yZ94cpQrTywXRAZSVmz3gstPjZSna",
  "key5": "27vmDsu6p6uvLTTa8Ri9Y3PZMpxDUhFnYi2a5ZNcF44PBkCMoJsEzXvN5eamdTA4EvwLBotZwy7LJUgNKuQntQTC",
  "key6": "Bn9D3z9TQk66A1VVpHoiP1BxcphWoN9DVzVgzy5H4JuZJFAfuJv9p6ikhwbC4rHxhYd5qfPbx54xjJHoaB6pq7i",
  "key7": "2zfnPcM3rNgmaKPqjGcpBhkDw3W4oxjEXAqC98QRSdnSBtvyKC3awTf5tiK73ZcUEXzy9qejKJNdrqMPQisG6To",
  "key8": "LxYYDCD1m9iTSWQfhQZGVrpzfGqY6HBgjgeD6o7JUQNtK4ToRhxupCybXPm9ebLqYMfQNb7BuBcTCWjQjBRFd8X",
  "key9": "4h9wbw7k8pxwyUy6MQPFLZpdQiHZYfLA7h1ZALNXPpBMpzr5g1m4gTdonLbBhVP3VoGAwPpckUP2Bzi8AWJ5hu3Q",
  "key10": "Smk45hst6Jv3jY1DSaU13DfBX7q6tyMV5tuNhoEKXsTgpAZw9Sd18ACGYwPCmaSXE4GQU1wdZLxM1aGRAsP4aka",
  "key11": "5ptjMRHWxNPULFc1NKFiCk91qe89DWHtKcFTmYgjMHYKYofCbeLFxyATFA8ZqUNj4khmuzM3MXWUuYbqPunwPNHG",
  "key12": "41V6CG1svUpvMevcQwHxc15npanL6YLX9KNBGUVdZPCoc341xVCLcrzR89UiLUC3ZEfLYUmGXqhQFvJ1x3Zva3Md",
  "key13": "jzkXJttmLWCbTtJTFPrJTBeNuLsGAiBJsPEHHhKxR3j7Qqm7xo3nCNDFgkRw5HBLwvJHBmW2VLXeRGBiUFJgnAQ",
  "key14": "3XNSVsD8hR3PVJ7xGRMoVi6xcsLLf8Y7NE8K2JVNHfMLEpSejD8TmnNR9YNJ3w2MM14D37jjKF2HdaH6eWkBmX5H",
  "key15": "5QvKUxUQjBVSKCQmSmKRJLPUpB829jXJ1Ka1ZcVrxbjWt5HnxMaeeun1KnxC1MDFt8s9WPZSgzseiFNyKww157xV",
  "key16": "4UMguG7Ykz7YxaNTdTtnLwWvFt5LrJDXvW3Yhgtw7dyCs1Vv4Q2EJTUKaH8LezajEsLX5UUTp639hp4Nq1HymKTR",
  "key17": "3TR3UvGdNRwtY15uNtFF7UC5f589ACYEHnKyYT5rmE7tuyu1G14MYEtqKZfP1wUkMNWPiaKJ1zy34xK2vQ91mNyJ",
  "key18": "2MegftN9A1HMEZAKYvZPG1dTVwh9dSunFprNT56EZ3Ac48oK7hEWGZN1w71AcYNCM6G6Rv6o2cTGQxN9YSpn7JMG",
  "key19": "t8bq5iJGTYAu5FsrTrdvww7ACathPqCmNiBLbqt1EhpihvViTATnPoTeFfjzo1cyaTYGceAAsdM31oerC1iwDan",
  "key20": "gGaQZ8WmeH7sFRpu4QkyXsSvZAgoYezXGjNkcU6v2GHwjMGmHXEeXb6xLgJx7jG57WC8Uv1u33ouVqczXmKJjo4",
  "key21": "5HDbu83YJdTnRFBKDcdvAAFoU3Bdg1kc4EeCJYrzsPhVnv6JJErWCLhX81cCZMXv8M2JqaD2iqEBnip7wQkT3ar",
  "key22": "4uN8sZmejV5D4ANFvHnjfWAc7j1Jkzs5fviedyuiokFy8UHkseuLwZo9jobPLXACR2JnLsARvnjbcXdZge3NXK31",
  "key23": "2erg4SZpTa6gVnP9UMshVfBdcCmguChrASuw4qQrEKXoUcUtJ3yTmU2yiwY6JVBNFLHGNBW9uRS2XfHiwfNFwAaW",
  "key24": "57U4TPXsQPWjta7JizL3Ac9KMXKvmgEzcyvu7AUEsXNm1yJNnb4tr4uoV7UgKvnDDUR9sG6mq9QfDuWddeBGsbMH",
  "key25": "2fDRM6GfbrnPEW6LWb5VxQJb423muGkgLT8QtoXxAtyyr7VRP2ePmnxhAFt5TNMkdh4gXUEbCmmj6fsxF9eqpnoY",
  "key26": "2KSDfsNDi2ZvdCwbT1APdNfrkrp9TXfXAeg3GGTAGZ7DM7kBmwtA19daMLCeXS5umYwP4gZB8oWFif5R4RPY5bC8",
  "key27": "35Sy1tWXdz74xcKzeKt5i4HTnae89r7s53xZdg98x8YZjH2TGdH4u5WRSfPT2CgwYvady1crz3RAEeQU1CeTxiaY",
  "key28": "2YXjavfAs62ithrhm5jkG4zut3ZAY8tsKAPQJjg8TwQMnrnqbLX1Fo22Ap2FoQwzRFuTfememWYStLhp3kEChNn8",
  "key29": "5LdoAHHS7b77L9DhqAVG98LpnEdjq53NjNsqo8w4xAr2Efc6myUFUCw3n26b47VRBGhLUfQftjF2UZYzwLybLrR9",
  "key30": "5kLgVvWTnjFkhYJg3dy77KRgGzDDR3kGdpDikPrVBRnMWM6RWEockRApeUhJdnWuqiVTR7FTg7d1ihEAtcKRom92",
  "key31": "3bHEGB6TnkGfhnguFKDVQJpaGkTN2TsWM6fvUjMphxoEVxcZTYDgqLgekxzy2jx8sJSJFNuwKnbsXAanWmths4Su",
  "key32": "2ABLcpaFVA2RTGZpGkkcWsT3G5NiGRR1tdZYJW4dEjw66QJq9HABfreqFn66Uyig6rm7E5vbnDNXMr6Tcgzs6Qrx",
  "key33": "4aHcRCeaK83AsQHMJ5ZDVYYW1JMAcDuGk995LxBoYFPdHuxPUXVAUiQbRf84Xr9srDkcvsnGVBqzYw8CcJj972QP",
  "key34": "2YwwEvDaUT7Sg3hPzujYmPY4mnbSSWQunyVBFHbEyJicKNK9JUj4FR4kjt1kXJqnr6kMu9xiARrRJKFCJGLCodtS",
  "key35": "2uVWFyuD1iijK3rLQkSwLde8knLYyYusMyr8XphPycN6w9nDVboARzjzBFczMb87oLdUexdAdhRzDjaCGDoRbLvZ",
  "key36": "4xzA693JTxASpE85AYkSK8rmBZ7u7c87b4eCSGTvezkvd7JNU6n6g8hwHJugbDnBcFTeFfyAdudrXfrA8jeaCZXF",
  "key37": "5GkN1FeKfvw36UFLMJtyaRgq9DN2ERMg5VMCYzRKPbrEVtg86SbysoZTXAqfMWDPwEyeVs2HHMVynwzptaS7bkCg"
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
