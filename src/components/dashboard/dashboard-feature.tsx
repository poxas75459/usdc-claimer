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
    "2hiRxCWikfEd1RALCvCfqdFy9Bm6khUhvhptLWLGjPy49FKathrqc6F6LHPoET9fZnQ9f9bPCenxXmSxp1r5gnna"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3g2Bt8t5FkouggnMU1C2MxF5K1MmHnNu7DQ7WGMWxQ8Ez8QYYcTBqoRUCAcNmUYzG3JVzdCfkapu9pyKCb9AcZ1B",
  "key1": "63KuKph9KohNZptF6gAujQdcnpn1smnJofvVTrrJcQ6hqQDLZ5X4dUc8LDGdsPzwt9DkR6o9ZnJqaukHHXkcq7Sr",
  "key2": "5dR5KgsT8qF7kvjpGJXHtKz9neG1qPsR5Q1u7c9KoCgQhNiVUgsoHFVD8qQw7ZwtGMEKTwUaWbsmt68dWWNPMAzs",
  "key3": "25JgDBYtXLn5ToiYVt58ndM6ericQw2px2jkS7t8NHJchkMMobrcK2inwFWvmT1L3eNAoNw7TwgUfYatm9MA1KX8",
  "key4": "5f4tSkzVrRPoPLAQD26oy4Xupqb8ajaSdYLUwKABDMZwyErBJKbbfq4SBa66nu775ZgQQfFh8CDnNutPtAqyF7nV",
  "key5": "5th6WDJ7gURmQ25wJCgoK7qGWU47CegSotp56pxpwnmD5o4MbHHZUs1TUDYoFG5RFLmKyBnFjL4uNWFVSj1wUTmH",
  "key6": "67Bk11RcVoCiBgG6JAVyjqXyDyFHEyos7gabSm88KMaEVBjF1iAG3AgREeaRL9v17DFLF7fLf5gmDyDkSYM1g5jJ",
  "key7": "PtXQaQ1fQmonxtKLJKXaKPMcmPYpyQNJX4TeVBA5yhZ4KEF6QHfRWfsPKXVyaqPPEjsMz75RtKy1BA5WGy5aR8H",
  "key8": "5Wk57DTQKMYSewVVjoXTor8VWYv9ismn8277X8SCZ77YB1485KVQ1o8uxAkrfwcAbXU6pHXVYiG6RPjQxucC9RZv",
  "key9": "3JhSyfogvxudKyV35hFCeLYiKkgx9ZhMwFKqR3eCb8ndNrGYr5uTCeMdGhBAiNhMqxdKMb7kL5Kqp8yc2WV4VhPD",
  "key10": "5Di9D8FPdrRcP21yNFr9dRi6H7wwzKyHFoasCgVSManyMxe3wnfatVVrXoZ58P5cK61nMaHAPnMhHE6q3wK5UTDv",
  "key11": "3EFJuH9DGac4fEv5n7PaJAZWQZwr4ATDYLNrpVdAGrbijMFU4HqfAxjc8jjCB5q8TdG9sYiyhSBQHbYRF6GLEu1M",
  "key12": "2jzxy6tSj49u3yB9wNAGvG8TqBf7DSAWYDWaHcRjzWrNZu25wtQMphGLvuzppBGXpZLzPaCPAM8VbiENt8Bhh9yX",
  "key13": "41cswacgfubDcEeTMfZpcJf7iUgGoGSBkSLfVP1cLGYW3qaafNDf9z3FoNkFikbBjdAULmC3oS5ZJtDRuS1SMcUS",
  "key14": "53g9p2Wes9MCktjrec5ujXCRcykSyu1NsGj5zVt9Z6HGjP51QXkpERayFSAUyFSZYEyQ1YRviLCAmxTTdZvEP5yy",
  "key15": "3GEcSUzxQdm35Vb2bdPA5gFFEJCiFUJSzPmvAQUudwzGUWkPnTjqHqR152kNgU8TqNa89nX6VSWaD2mTvhvp27Yq",
  "key16": "5q2hGRcNSZANQTYgE5JArCPNbg7sGH8w5t9KTDfvkf5qjhoY2c3oK5XJyePyVbzqN24eAo6J5HcbUFFJ2jeyyk1s",
  "key17": "2MrbzKiNShVr8RB3gKf86DSW6eu4rotFqn5AwYxK7NaSKbMoLaaAfkzHLUKyqux9zjaX4TaRiXFi1YPwrFCcnMMb",
  "key18": "2jevqabrrciJCE9FhyZKqaEgCbuJv9443CLhSrv1SPYLtLN2RDNT5FnyDiHzumwAVEtH98xPv5EvocHexLhULpkZ",
  "key19": "5LcZA6E1pygsiVT5pdnDTf9JbRi6PDUbmDtA3PiXCrqLXEfKLYEhnpjTo3RyEndSTkECTRm4Pgv1izpNgWYiBw4h",
  "key20": "5JHz9TVYeEuT3uehZyi8dCgcj73ZVjMAfTamqQAheY1QHQDMwcUq6JUBw56Kh7Jw1tfycZhqdy9DG6L2DRkqSHQx",
  "key21": "59EyMGYdagNZNapQTjuNCoc1u1LyhGLceJfwdQ6EkMhwEh6UinrcHQrVfxoTUhBUpsfAejAswP71GjJmqzRhpULL",
  "key22": "2WVTef3p8Qb65nbBdv6ANwBcSefeGcBrwodf3H9c72gnDHZyBnGkU1DQuHXpMoi2ZRGDvrcdBp9h7o18oEkUf2du",
  "key23": "3UaBasgikTfcTFge2qKQtRihL4gGzS56kF2dWNvFnACdnRHWNe9x1ocgX47RAFU4scZNCueAQnfHZVP1MN6Xt6jq",
  "key24": "26KaooBwk7dSTUqXs2sQcXUnrmtMu4kDPsUqv8SqodH4Koa3S7tk8x2wuR8VjgXUpBrkbEUJ3wsjMV7RWcd4U1GK",
  "key25": "4nsJFkXdXu7H9oMc8JcqmEu5GHstfbqpd9WLuJQNo1JSDgdRi6QLqrtTUpQeCFCEzFbJccToDSe2dEDsrd3UZi7E",
  "key26": "2cafA7XKToZHCN5FuCnL7wgGuBZVighz2kvNN6ZjH4b3XeGwVqfvAvMBLkLsyTTaXmz4qsqyjTPmpbaWT4YkX9zF",
  "key27": "5MJL4ut77tokSXv3RvkAiN9jS2SihhVnbiaDqYJThSZpJwpwW9hZAAwowFQ9o4W4R5YaRsvwSCKshAQdMTbaEJLK",
  "key28": "5rGnJdBSwcdsk11aVh1PyTh7eUTxn3T5TzCDDKUGSKydRSJ5JiLY5kK1WLkBGWdxabbyZahkiuznUvhNbsTUMNNB",
  "key29": "2YYvgkQwq7C7QmCerRHJjTr1F7GrVV39thFiP2RYcFLL8Z5xrtnQnjnktZa9jqrQ6mivuGJas6SrTV4cBfDRfca8",
  "key30": "3bAWmb3QrrekRiqQxNA6zfdgoXe8jybpbR6R96iApkM7f5wJpD4cq1ioeM9fUqkFM4FFMTTkk1HnvxoQfJiENPkH",
  "key31": "2XWhj2GbWyz8JLne83DKj4prHyhvvxqkUSTxfu2qt2h5xeRMYfNjLLnXeFrGmLbGPNpBph9LVxWHPmiZGoiFjma9",
  "key32": "3uAFHfHQBZEnNdiag96ia2U6HnW1Q8Uwmj2SQjmy1gmexfAZvQRBLHvegF7UzXvCyjx6YmdjhV48Cydubu6tucwv",
  "key33": "2neaPwLZnexUWbpUfUkosHR64t516jdmvzWnMFi8s67y9VMQJkES7pgf2ndwvfPwBtX2CrpB7K8AsYj6n8HXD4Qj",
  "key34": "2q7iXwJFXeaN879mnXLdZDAEsP7LCakH1iFj7zNteZ54venWpW4LmgVr8jLdWj1GNqAcqrW6A6vGkScaBpzRfub1",
  "key35": "5kyZQmJuFMg97QYMjn5GLhDpkByyPkeniKcWVKNsgcDTGzXtkAE2ofK9Zs8ug9yGJJBbcuaWzAhZ6fXn8vx2MV5T",
  "key36": "3NxxpEmc66SjFWCTttUhY9Q3FYEjf5KEhkntkKe2TqQ5X5QVcNmBzfNgD9pm1kwLKxFozcpy9Z14bHG95282FE7B",
  "key37": "5K8XmZCXxEQRJrnL1oCBQH3f6FT2UhMXUbGp11KXXqc5RQPWnzpRrf9qAwxLM5UREDmKDrtH6KPpcwQBFtqKwsmK",
  "key38": "2ExxchQyPoKSGq7BABDFQ2pG3Zd2beE8cJzWhuTYvywpmAbWjCQowuHKMZw5ib1G71vrMrdHVRsv41aoUtpEycwE",
  "key39": "8SEU3ZdoNQ7wkvBmEi2MFjxUVHcymbm68TaijyDcK37ircFbNv8xWf7JWnt1sKKusfzb7yEvmXh9CCrqsYrAV84",
  "key40": "2gGVVDuUzUR7fBY4uu8e1qbT2nc8x7Z4Bgngn2U1SAbK19Ry5eiPmJ41FiCVy3eToxet6ZF5fF7NzYRFDukeQVms",
  "key41": "5GNwP1Nm1WnX96LoQM8vgKGhuLn4UBJmhpc6mWpvmHwtRfWnKBqXYAAUwJ1ah1aynKQVZBaLEkVSY2zuZL8bVV2i",
  "key42": "2FVV7HodmEAkAC9RUtWhNzaZYP3jCKp1uX7KnaHUZmSBB8VysvAJyKYgBj32ty48np5okk1tDTEALVMc45ytfiKQ",
  "key43": "5WWkcsPN1C2dbqqLwxpo8Ye1HZMVZ3EjMCi7bE9JTgCr4tAtikwSWXBhenCkSo6ZkjwgjfUAHrqssTbjc6s9wMfp",
  "key44": "2F36XMCt1Dw7EsMZ7nNpYFfTiTP1uP5t4wcq5Z7coFGvCxjsjLF6pJ7zMRKhrmT6tt3JQVrZZKAwi9whnDGqZiCR",
  "key45": "4CcKAnrfEBg3udxgm55esokfwWCbU6jgqERut9C5GF6GSQ343Hb1pB5A1bE1MwjifJWKeSb7WqQn2kTNWswZ63zW",
  "key46": "2TBMgcFeLn5kixFNGo9MoYVW7eW5HMZZs6SPqiHVjyaCHi33oykYeQbVTvS9xofdADJmtoztpi48K1mVSyRZNpke",
  "key47": "Np2iWgCKdXYrDeR7ZP69ZYGhR6fcKdaeurk2vezg6YE2qe8jCZCph7fPkMHCwKeiKHoNjRRCqotoRV9yUT9rZip"
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
