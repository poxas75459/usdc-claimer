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
    "McxyLt2V3PC7MSqKp5jhMpq2qQh12NqqwNARmKYDBJtjvRy85jTeu6zwWjD2n9ttDjsg8rVghcw76uxoueuQ4we"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63kJCNfyRTkHsudP7nXAkYQRm5VCy25N6oqCNKwDVpWHf555eWDL13D4SLDxaEgptxn5hhd13X3r98guh8fQ8xfi",
  "key1": "5BDP6YLRdTNwtwSVJ4nVgk7iabmg5x3F9HyPTxpBZB4qtVaQP7MBged7i1gXS9tbd7JegMWwhHis8e6WDrCqUken",
  "key2": "GNc9gP1FBL6VVfPoixFbmuMPYfUH1Zf8z4J6o6XXUQPctPNWMKCh9bsondyQJQVsYi6Ws3oohRf2AfrSXVveU6R",
  "key3": "4gCV2BM3Wt1CtTs6BeTVSXzRFPy43stUPdsueXaTvMpCimWspZYVJbtGTFzKjZX5cwY3Xt2wSwjsXQoFEaCUmRn1",
  "key4": "2SnDAPrrRJabo33eQJnjwW5EhHwMSH5arshco1RTLqz3W4kGgeLDZXYqTYuy4XSKTLXvDfRWFyMC1tsC3nZP7J3h",
  "key5": "54u9d1YyweoL2HKk7XQnxmBj1tKzfi9zCKUivYysnFj6rXYmigdpe55xugKFyNpLpqkCxR4t6EhTUJFj9kzcRjnr",
  "key6": "4UK5YGpSugbf5dKTHysirTYdN3VQP5ftVDTAKbTt2cyDnTuASA8UQwf7EphTam99r4g54QoMLYj173YoXT9nzoTr",
  "key7": "2p6LTYQVxeDTH9T8hj7PQHVbvNDAFHSGTEspJiNV4GWYDgSMoK7cCBpoRMKDvLzCPLB9PGBctL1RmZYoeYWXF8QR",
  "key8": "5aDBGyZKHRBoqmmrTF1x185EP2Xhw3PD9kfxvSz7twNB8mC6Gx4MoBchaXBabjBxpjM1sAWkTxn9vmhmyzcYPWUY",
  "key9": "4YPeYahzKiTrRPd1PXSGa7z9XJiSyKaVp61gz35WAbJBLNfLw3vmEPdJhe5UinoQR3NsvDaCsc5GCwATC7wrhk3v",
  "key10": "4dWsCD1zTGkae5J34ToF8sKtYxGwwR6zCjhTvK2eG2hYeLX1EPLdW2fV1q2RTykQfisxNbF3L8K4dhYr3RSFo8mK",
  "key11": "5sdSvYowbgZU6aCdHSbgQVANjspcEYM6tTpgyYhenFUXxUxvHhidPEcxPP5KVo3cr7969otz4RmVRCtYmnz1ip5t",
  "key12": "2YNoHVAcqRkH4V5vuVn31RL9jWrhJmBw7PvnSEyEyD72TwyvR4jC5sXQyEvzWoAMYcfH7X6eXUYnPKwB2QU7vRrz",
  "key13": "eTwNdjevw422LNWD19YsuurG3Ym3r9YLqzYvGLBqMGzV36cpDrXaa7dCK21EvMhWq8maLCAXXRvPwrjUN5EVQBh",
  "key14": "5MQoHi85eWxyuaLtbUK8gknBg7kEEYDGkUuz6arzZ2pfm17gKuAke4YMsrkKKAxaNS7ijc67NcTpmdyHsC5UwAhq",
  "key15": "5NXN2Lt47Xad27RAG4cp4re8R3Tao4fkuvCx9HQxScp3iEzYxPBkKLktYRqa3DYUMZ35gzzhjqMqtnMmsH8BrURA",
  "key16": "29Veg8JBLEYQYAT1vwYoR7S3R8XCoKv7yaJoBkD2iuXLRVsbr2etw2euEZskT8qKYtKD52fqwoZb2TMurgx3P9jy",
  "key17": "4csrGvej4EgcwGft6Zqzkg23KrT5xarYnYmLV4CXhJpw2wdzR1QmRnJSZ1qv6mEXVcRt32TfzJjUGBAn2yVRyP9",
  "key18": "qdVLpN312kGV2UbmsMbVH1VmwsrFT9GZhpkNzCCfqdeGHm1uYBwGMMG7CqTRmvUXqYaPyo6zwdfn9Ybt3N3Wzbs",
  "key19": "5jueUZaaeaWESQ93i9wp2iLegeQMbssyZX6uQXzkR6tydAzGWE7SReaFHjAchJC7JGnEDVNnuU3gkQiXwN7yqtfH",
  "key20": "53V6J7JHZuEyrsHf6hT82D669LbkiwUKPuhFeFRjCJyFYg4JVcMUbedT1b9UopLEBpUSRUgqqfrn83qxUyqVz2oY",
  "key21": "3Gem9sWjZ6AV2grx4nN61RMun2fsdf3PTYQz8tqzzUjSF7sYFW9YC4QZ6rxhEA9MWTCpPoouRx974wGzURfLj9GS",
  "key22": "2ZG3Qz14NG4upTvXERTCEjrSAR3x2swRizbaHujeVuQ6BsDya1W5HcbC7TSFfdri4cLBiVfeS6BZ5kows19tmAyj",
  "key23": "4p9LYm65aLMsdiG4dpKoQ5W3EktLUwEmgQgxnazAtkCHMTTSaayQ2nqS4N9eaXwHms37WZikSx1xbLGbHHq9chxx",
  "key24": "4EYSiCtkrEn4WfoJUi8S6NuGccs5UUwCpGNLJoCto1RseHSf9keK5htez1PSWzNXpXpfj4yx6389rJsEXwrnBupf",
  "key25": "hQKY28zQxMyViPro5PKWYk9RvZ8TZ4HLPnmzMLekyK7fB1xv1S4Uaf61HzUQYwvPVkCafRoe9sfk9GWjiRw7Kod",
  "key26": "jgApJ37dtGWXFY8jcd56dABiYHGsLoeaTJTZ8nxFV6E8uLTwG11XVCTJ9YJYbQsoyTW9rqRK1rTBkBA541wBK3V",
  "key27": "5qVm5D5pvRhGjN7x2Nrkdqtirn77U4qRvpzmjXwWeZWPMbzviHfWzmqZUG7A5wzTbYJvzSzf2abRjC5P114TMwUn",
  "key28": "4tksxhR49nSidftg1vkkZkhqYaQvFdTTxdPX3g4Fb4qXPS7ESTAeFw1M85RyHmwA9gxMaQSqqbFZFkZn1PfFF4DT",
  "key29": "3oKbMj2tWBZeJA8bQamzK2q5BqDfEeVv1DordmiWt4GqG2iacRZzG5ukG88dvhvhWXUJVEJCR1U8VBsVjwbXv7RP",
  "key30": "5GoXqdqxPUL6oFjMAxa7rR8meJe573rDurXRJwxTTGqUL721HjnzYvWAsoBomgi8qQKj9fJrZWJ9KswoZGmdRGqa",
  "key31": "4fKTs6DgcyXRX57Po2sazvr3KZwFt8V8u1N37h1hRtLvXjwATihRQxKKpSfyLE7rvTusW9tz4jrKGvnnK5ZgW6x2",
  "key32": "5cY7ivBNXcWK1k1YE7jgsL7Tn59MknmxWP1oH8gi7uunLs3wsa1i3Zi5Dd9fphBRRP2gpBZpyKHKzBuCdFRAuH3U",
  "key33": "2S2YFZE7eMCSN5Mss1VQhoGDX1vvP85narC7Ai3uMTKfHQ7uzf9Lqd8St5VkpSmYBJ1VRF1nf12i5pzE4aE8BqTj",
  "key34": "4nvrAH5Xq1HUaEgXuEopcs4GjCM87kAL6uhkvbsc96nWjhLRv4uLemVwJA3wFijRWhQJyrWUH8Zo1w7wHxpsZ851",
  "key35": "2as54nD8DqyMMsrSYeryFdu8jJxSdyZWi8fLMccjLUHBUqJXad5iqTLhd9hSGA49nEAoazPcTqcdfHGDpW4aAf1w",
  "key36": "57W8YTBW3aic5LAzXFxGJRHtYF4mVxJDKSRKHFvEKS7B18WuMGgx6pWLyJcQhUCuZjY8WU9JhFPCFDCENSZoB43g",
  "key37": "yYQaHUukQcnrWHvk2E4tjYymXqT9pV8Wsjp7WppukWsQq1aKZU23LshnFR8KgHyFp6rFjdLAG5yXoGiX2SCzuMJ",
  "key38": "2jyrD3XbdVWfaQPXcJ7kxrdcopt42kXMG9jx99XPNqyFTZfZWf2dkDvNYvrpAAHNehZCCTuuT89hV4S25Rv44mnE",
  "key39": "5wqp1D5crpCp7NPkcxSwhtFEk4jpi47oLtjSz7d2622aVCgxS7zsfX5FrnJzD1wBPk4S9ycBLZjMSDWFzvobVbuk",
  "key40": "5ax7paFSkU47H5ZKHJveKs3hAXJryp7QDeDxknuzKdmoHgPenDrNoQMMRbst3NcjHjMzrTzsMYLhXDxRogBQ6RfD",
  "key41": "gJuytMHKB7fdf1NKLcjXbwSpjqfU53awBonf9j4ofgT1yyHbYo2TgrWPKuLCZhU6U57RswEJfUHhwhRjf4XYPXA",
  "key42": "PDzudvUdqanCTiJH3UPnSM66meMbkNJGnokrGBCCBjNtBa9Q2vVBuUXtQikiFsRyst7zWRvegUz84kbHhxZ5uPC",
  "key43": "5utgZ5xNys3YtEwEpGtM9eXGKxNfpo152gmuhKYBpEo815Q6QzYMTLH1ywuW9yuCwX4WApiyg1N4tJNX4fRcnSJG",
  "key44": "32HqhTDEHvmV7xD9QyiNNMQvRgKVBZjTASMwLtqGRas8MwaG9FPyiUrUt7VtE87aFm9M5wfLjJj8xXPACZWby8FX",
  "key45": "2GAfhXC8QMQZnt2DKBkQeqkZuQ8Bkry9BMoTtcXPwEvnEZMp3CHbERXJK4uS7RZtEyEZB6FWwreP4jPPkmJ5FxCJ",
  "key46": "4ub2CAtyaZRsh84uUKcnNnuBcmiEUgxZqH92T13FRG5zhNZhXMZjidv4UJCHwLEs1R48jyzep242nZSbKNWFB9BN",
  "key47": "2p4x2C934iukxuu7nyJP1t7eEtz9WUa6zLn3ZpVjqaKjNqPja9TLu77kPPuhY1MWSyhdDwEzgf1eALmAiyuxq4eb",
  "key48": "4NcM44n75LbiFgJuyNmPYHwhsXbeNnWYCP3CkMnUZhDjavYDHy9LZtg5W3PYiDohHA9EtwupoT5rSgpkr5AGmubX"
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
