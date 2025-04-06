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
    "3DH2MzAQRN4usw6awWpbUYDrdgWMhEqXwUwA1NeToynpcvZNKYZ9nH4EPfmXH5a5GF2ZPa44Jz9UWpXyZYNe3DqN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tqGFvEwfpScPEcSUi6koffdxNfWMawi4FcEzMUt6EFXbF23Lw1Y1DQMZaVLoMwBmYLDjmmdGstq53qhDVjnWmHT",
  "key1": "2QBufi6D55bQ38xdXoCRuRCqfHgdg1vFx5dE8C8r65MYV6g3MXNAZrddMDjzmpLfYSHKgDE7w4cEeXKX13TbJebx",
  "key2": "Mr8BbLtZzXmqb3pa3kUDewUf8aLpqwqdVs6jczjkpe242YoGaXTDMCxgAJ4XYkXS3NN3drdNxAF7zx6NFfGwQ5a",
  "key3": "Y3fa9tkYFQ2PibvVuyf6MYebQBtcz8nDGdr3eLguZ99QQU4kbQYtS2ijpMkGGa2a6aMm4skKPnGTKQda8p6qLih",
  "key4": "DjkvLiR9XFQhfdn5K5Uosp5WWtwrSusakXzpzJbMUgyspxZVb9XUQ9dmmph3SDNf4ri3DRZxtDgmSYbKuC7WXqx",
  "key5": "5PERTVf7Nf8G3cGsCBxCda5zhcavPHdiNUc6CqFMRDCqtcP5ZGxhTvMgzMhheaYj1LekqYP2X8ibU7HpLp9uogw",
  "key6": "5h5QGnsjtYFxNWGadugVAtsq62rsXQaXvzHTdVLcHZMpVxxWpkJPhsKEFLpMaqx2KAhFzmfyr1oKFDU1iiKEYQRS",
  "key7": "A3BeefnydD5hrfzonVqixhY7s5hamMhHRRo3BdmufsvAmuRyCJdsZ8uWTNiq3HwtvipHbqkWApSAQgcPEgTvthL",
  "key8": "3u232dnhcTUS4yiBE7NdB2YJ78SZk1cPtzoLhfW7eRdXZZJwwGn5Qr39XWvRJENRY2C2ANjdNUBjrD8Bg1utbZM6",
  "key9": "6UpLhP8oc49Tk82wY8f7aefrgeFho8aHYj8xiroMXDiv23uignk9ekxqeHCc98GMYVj1T7nKjQctfAC23h1aick",
  "key10": "3iQDLm8Lrent1NT4sbjbAxA6VNFvnAvMw5yhhgrVnGU97PYSchLH5zdXMZfNA686LFRByx8emH4nPKoULsagXGgo",
  "key11": "3fDPLXU7Jx4gQ3KyGvzSyEJTc7aYTsmd6BwQpq5GKYia1jTXLJHEQvBGfTeYnQLviBjeTHEdKz5ZNrkpKq91TbWR",
  "key12": "5Z5Hqp65ys4MBe6oi4NkedQia45XSUj3CY4aTWEUxmQVe6WQj8ojF5xNT15abW7PysEo4WtSgntBcJ32Tv4VUKWe",
  "key13": "2JQqhHE2mazhY3FbxKRT73n547AQ59YJMaCumjrZjeYPA3hdzYKUqeAedTVPVPZvxisyvDqp8HUsUcCtgtDHUP9k",
  "key14": "4FVsLtQ6Nypt2cLWJFVNrmxjFfTJYVkHhHvwGaCFJz9vpwX2VyKnQoQb7tZ5cMip2ybVKRXYT6vZKZuJgeJ5xTun",
  "key15": "3xXxfNKwczFzPSSmqKhv7Vu34KVp1gW1j8ByCEZUcRp2ByZ9r8FKkX1HiWfTZvFrfZp3QHynwpz7CzFZmzs2xx2k",
  "key16": "3xcTuKMb3JGHcVL2xCYedGUdFEesHrvYsieMniGWSn8S6SY7Ckc9sVGikmspehtjTWA1Liwf5qjpfTjzEdwG3x7S",
  "key17": "3tHEjMdaL4WtMSvkQk6RcT6rv46LpHKdgGvNoDH7MVXVADEQ76yMBVSXB1SiaRGgkdPUoMAucFuA2dp3XY9SkJaZ",
  "key18": "W5RnMr1GEJRwPHALVuwTG3gjm4g8cHFTxgiQnaed8EWUY3uNJXVyy4QNBeu5EF52KTfWyKgWwzyhHrhDmYG2uL5",
  "key19": "eNedtRpYRu9GhfshHJSt2giUDza6nYFGmGASN9UkQbD7wDr26RmdpBL6G6kLCcVf2nkawABJqmqN5VkECYXigZQ",
  "key20": "3dH99kns5yVmyx2JBS6vuRAgEiX3yB1dVEL8XimvrLE2mhcTDzSiNvrZfcC1454meos828MtRKFk7Z3LiNZc2Gk6",
  "key21": "2EUXLHv39Upjp9mY7ZK4DUAHBx2sCG2zjjGUTC7kCUtHAaFCSpuLXS3EQymeZLeakncUJxrJAPF5oacCddmuLSuE",
  "key22": "45Un7MqY7novJhgKK78gZeYwQChbhYvKDqL2DEzvFASn3BdQXBqD9V3qkrYrUp1Hs3C8T4eJxQVJvGxZ8zn144Ro",
  "key23": "2ohKmvC8YxVh1wzne62864YrWCDLdyugWSQJ84jeHtCro5kRdJCMqjZvwFq53P9c7CYBqSSkAqEwEsx1dY8ZhQys",
  "key24": "5WF2QD1sMtJmke2CcZdBCkvdASvwFgWQhcJKbD8DCqUmjVAewhTEMc5i5cnZNmYe6y9NJpTfw6s1dHbT6yGPjwCr",
  "key25": "5RyscqC7pCqB8tWWJoaNXLg44EfYBrPXNbe4UBC2HsZgTkPCh7FFTB61xXXwGjHyEZEcBoEu1PguA9C4RDyVgxWD",
  "key26": "5hy2PmT2kkB2i9wUXaLTrGyMLiaR5yQ5ah84CQDuKRfWwnPjC5CXhNPeGBUoQKgkh4eRyaqL2snmstrzmPwwFmY2",
  "key27": "26BJcDJDmeLUf5YSS5cKS5ukUnWDCfxGCw86Zgm5r5zkpnTg2SBH1c2qdV3kw2vkppKJmdxojHeYeyyQjiurm2tT",
  "key28": "aMi7H6Hwrc5xEB8mBjR9TsUzmgByPdh3F6d6rxxmiUdCgk4hbaRJBxFPueNKVD2B6mB7pjMwihVN12v85fmYk22",
  "key29": "4uDm9FFHXRS7heLz5u6TeYGvgJkf8iDXMeJgDBJMHvgZJkvtumNBQMbsKGeXxPdamZgxWpf4cNbADEpNrfYpxnx8",
  "key30": "59edzeLUuJihDAn9AvPDLRNEXZkUe2scEcVJXhhbjYw2RaVyzg3dWyxZGw6dMAkhXdqqtgh9H662bxGb7f32jfZ4",
  "key31": "4oDg3kLC7h8p9mzvLabbDLFjmSjapq6TqMUJ92Sh49kwu84rPat89RQukfrCUckk1nnDJ8BRKJ1bYWZUA5B452jU",
  "key32": "62ckcEHeVLh6gE45x8DWjdxfobz8iu4KFRkvKPmLd1v2sFQgohVBV1D6qt1a1W3KVX7v52gkNXsGTp5JMnC9MtGT",
  "key33": "NgNibxC6UiDmwX5AWtaqWuH7WrpzWfgcii5Zhjf9VG1iZMt13NGQFEetSRdNUrz1Gsy4NcpdVsrjao11KsbomGb",
  "key34": "YTMnRXDCuY8rYNZNsAAreG6sNvCEjBKtU67BrFRFM8mBdTV8Y4oiNXBVf76ooh943R53oJFDP7C9pzXX28F6fvc",
  "key35": "4rij4b6S3op7RHNXRnQMkKkLmKXFnq3d4aLyizpKVJkx6joV7BFXczhYrUsMrBG5UikEamFM3HXNnJ2EqBTvSaLk",
  "key36": "46MLmB19wphBrju8Z3kUXEWyP1Q2yiF4SF7Qtzmovge52MM42F2A7n8wXqE8hrfrdX41MLsU4yzh31MjPrh2QLoP",
  "key37": "2a4UkezPofN8hXzQUmAAA6SgLaccqxZZWTwrfVLNCQj9m7pEf1VihbuKWutcVgE8Scyc78pvWX7bDdcxSuNVgwxi",
  "key38": "5Zpg6jPzN253fB56ir4Sgu3mmrrtcSR5gGdSU7uM5AwMp2u4VJvpvEkAkagS7rYC7xTjgjiWGAA91MZw96E46mKj",
  "key39": "5PbXRA5jQrrnGx7iGLNskC85mgv5nF343JHNaXTd4g6ocsTFynzW2MEhTqQMijudM7WnLwC2vkFgfqzsEonhFFgt",
  "key40": "48QJNSnBCEqbGCWpA8UGXnpcYujDUcDVFhWdKu3hes5Mesvw35hXHKpAgQ8iUnvyVKrBueVnPUZFkoNTVq3bdViw",
  "key41": "tea4sT6GbvG8QATXYemGoTpffeDGmFV4dYAMp59iuGWoAQJnz6EG6Ma8BsoGnLnFpzr93w1xQCT66GK9L2p7cte",
  "key42": "3sqYMWAkxAC13r4CoXDtVYQ7wj744a4P9MfM3jSZXinGMem7enXhswhuXAPerb8dkBnhm8cZf9RZviNhDpHMCSbX",
  "key43": "4XRjRmT4L9RY32kSDKSQ1YdEBwE1TY55AugMgFNn3PwUcSmPPTcQJ8g8vA7soqTUmsWnyFJjFyBDhXEsY8GGshxd",
  "key44": "2RpzfvAM66m4Cd2Kc8uBZhnBbbRBSKTc4QurqJKj3qz89MQZFEk9VPacnB4sT9Er6P9MBz8eMRgHGiU2C9R8u5bg"
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
